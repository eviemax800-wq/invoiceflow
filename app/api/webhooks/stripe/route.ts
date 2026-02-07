import { headers } from 'next/headers';
import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { stripe } from '@/lib/stripe';
import { supabaseAdmin } from '@/lib/supabase-admin';

export async function POST(request: Request) {
  const body = await request.text();
  const signature = headers().get('stripe-signature');

  if (!signature || !process.env.STRIPE_WEBHOOK_SECRET) {
    return NextResponse.json({ error: 'Missing webhook signature setup' }, { status: 400 });
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, signature, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (error) {
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }

  const { data: existing } = await supabaseAdmin
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
        await handleCheckoutCompleted(session);
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

    await supabaseAdmin.from('webhook_events').insert({
      stripe_event_id: event.id,
      type: event.type,
    });

    return NextResponse.json({ received: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown webhook failure';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

async function handleCheckoutCompleted(session: Stripe.Checkout.Session) {
  const invoiceId = session.metadata?.invoiceId;
  const userId = session.metadata?.userId;

  if (!invoiceId || !userId) {
    return;
  }

  await supabaseAdmin
    .from('invoices')
    .update({
      status: 'paid',
      paid_at: new Date().toISOString(),
      stripe_checkout_session_id: session.id,
    })
    .eq('id', invoiceId)
    .eq('user_id', userId);

  await supabaseAdmin.from('invoice_payments').insert({
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
    await supabaseAdmin
      .from('invoices')
      .update({ status: 'overdue' })
      .eq('id', invoiceId);
  }

  if (invoiceId && paymentIntent.currency) {
    const amount = paymentIntent.amount ?? 0;
    const userId = paymentIntent.metadata?.userId;
    if (typeof userId === 'string') {
      await supabaseAdmin.from('invoice_payments').insert({
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

  await supabaseAdmin
    .from('invoice_payments')
    .update({ status: 'refunded' })
    .eq('stripe_payment_intent_id', String(charge.payment_intent));
}
