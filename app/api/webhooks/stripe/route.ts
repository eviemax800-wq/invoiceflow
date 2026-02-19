// @ts-nocheck
import { headers } from 'next/headers';
import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { getStripe } from '@/lib/stripe';
import { getSupabaseAdmin } from '@/lib/supabase-admin';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export async function POST(request: Request) {
  const body = await request.text();
  const signature = headers().get('stripe-signature');

  if (!signature || !process.env.STRIPE_WEBHOOK_SECRET) {
    return NextResponse.json({ error: 'Missing webhook signature setup' }, { status: 400 });
  }

  let event: Stripe.Event;

  try {
    event = getStripe().webhooks.constructEvent(body, signature, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (error) {
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }

  const { data: existing } = await getSupabaseAdmin()
    .from('webhook_events')
    .select('id')
    .eq('stripe_event_id', event.id)
    .maybeSingle();

  if (existing) {
    return NextResponse.json({ received: true, duplicate: true });
  }

  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session;
        if (session.mode === 'subscription') {
          await handleSubscriptionCheckout(session);
        } else {
          await handleCheckoutCompleted(session);
        }
        break;
      }
      case 'customer.subscription.updated': {
        const subscription = event.data.object as Stripe.Subscription;
        await handleSubscriptionUpdated(subscription);
        break;
      }
      case 'customer.subscription.deleted': {
        const subscription = event.data.object as Stripe.Subscription;
        await handleSubscriptionDeleted(subscription);
        break;
      }
      case 'payment_intent.payment_failed': {
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        await handlePaymentFailed(paymentIntent);
        break;
      }
      case 'charge.refunded': {
        const charge = event.data.object as Stripe.Charge;
        await handleChargeRefunded(charge);
        break;
      }
      default:
        break;
    }

    await getSupabaseAdmin().from('webhook_events').insert({
      stripe_event_id: event.id,
      type: event.type,
    });

    return NextResponse.json({ received: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown webhook failure';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

async function handleSubscriptionCheckout(session: Stripe.Checkout.Session) {
  const userId = session.metadata?.userId;
  if (!userId) return;

  const subscriptionId = typeof session.subscription === 'string'
    ? session.subscription
    : session.subscription?.id;
  const customerId = typeof session.customer === 'string'
    ? session.customer
    : session.customer?.id;

  if (!subscriptionId || !customerId) return;

  const subscription = await getStripe().subscriptions.retrieve(subscriptionId);
  const priceId = subscription.items.data[0]?.price.id ?? '';
  const proPriceId = process.env.NEXT_PUBLIC_STRIPE_PRICE_PRO ?? '';
  const plan = priceId === proPriceId ? 'pro' : 'premium';

  await getSupabaseAdmin().from('subscriptions').upsert({
    user_id: userId,
    stripe_customer_id: customerId,
    stripe_subscription_id: subscriptionId,
    stripe_price_id: priceId,
    plan,
    status: subscription.status === 'active' ? 'active' : 'incomplete',
    current_period_start: new Date(subscription.current_period_start * 1000).toISOString(),
    current_period_end: new Date(subscription.current_period_end * 1000).toISOString(),
    cancel_at_period_end: subscription.cancel_at_period_end,
  }, { onConflict: 'user_id' });

  await getSupabaseAdmin()
    .from('profiles')
    .update({ stripe_customer_id: customerId })
    .eq('id', userId);
}

async function handleSubscriptionUpdated(subscription: Stripe.Subscription) {
  const priceId = subscription.items.data[0]?.price.id ?? '';
  const proPriceId = process.env.NEXT_PUBLIC_STRIPE_PRICE_PRO ?? '';
  const plan = priceId === proPriceId ? 'pro' : 'premium';

  await getSupabaseAdmin()
    .from('subscriptions')
    .update({
      stripe_price_id: priceId,
      plan,
      status: subscription.status === 'active' ? 'active'
        : subscription.status === 'past_due' ? 'past_due'
        : subscription.status === 'canceled' ? 'canceled'
        : 'incomplete',
      current_period_start: new Date(subscription.current_period_start * 1000).toISOString(),
      current_period_end: new Date(subscription.current_period_end * 1000).toISOString(),
      cancel_at_period_end: subscription.cancel_at_period_end,
    })
    .eq('stripe_subscription_id', subscription.id);
}

async function handleSubscriptionDeleted(subscription: Stripe.Subscription) {
  await getSupabaseAdmin()
    .from('subscriptions')
    .update({ status: 'canceled', cancel_at_period_end: false })
    .eq('stripe_subscription_id', subscription.id);
}

async function handleCheckoutCompleted(session: Stripe.Checkout.Session) {
  const invoiceId = session.metadata?.invoiceId;
  const userId = session.metadata?.userId;

  if (!invoiceId || !userId) {
    return;
  }

  await getSupabaseAdmin()
    .from('invoices')
    .update({
      status: 'paid',
      paid_at: new Date().toISOString(),
      stripe_checkout_session_id: session.id,
    })
    .eq('id', invoiceId)
    .eq('user_id', userId);

  await getSupabaseAdmin().from('invoice_payments').insert({
    user_id: userId,
    invoice_id: invoiceId,
    stripe_checkout_session_id: session.id,
    stripe_payment_intent_id: typeof session.payment_intent === 'string' ? session.payment_intent : null,
    amount_cents: session.amount_total ?? 0,
    currency: session.currency ?? 'usd',
    status: 'succeeded',
  });
}

async function handlePaymentFailed(paymentIntent: Stripe.PaymentIntent) {
  const sessionId = typeof paymentIntent.metadata?.checkoutSessionId === 'string'
    ? paymentIntent.metadata.checkoutSessionId
    : null;
  const invoiceId = typeof paymentIntent.metadata?.invoiceId === 'string'
    ? paymentIntent.metadata.invoiceId
    : null;

  if (!invoiceId && !sessionId) {
    return;
  }

  if (invoiceId) {
    await getSupabaseAdmin()
      .from('invoices')
      .update({ status: 'overdue' })
      .eq('id', invoiceId);
  }

  if (invoiceId && paymentIntent.currency) {
    const amount = paymentIntent.amount ?? 0;
    const userId = paymentIntent.metadata?.userId;
    if (typeof userId === 'string') {
      await getSupabaseAdmin().from('invoice_payments').insert({
        user_id: userId,
        invoice_id: invoiceId,
        stripe_payment_intent_id: paymentIntent.id,
        stripe_checkout_session_id: sessionId,
        amount_cents: amount,
        currency: paymentIntent.currency,
        status: 'failed',
      });
    }
  }
}

async function handleChargeRefunded(charge: Stripe.Charge) {
  if (!charge.payment_intent) {
    return;
  }

  await getSupabaseAdmin()
    .from('invoice_payments')
    .update({ status: 'refunded' })
    .eq('stripe_payment_intent_id', String(charge.payment_intent));
}
