import { headers } from 'next/headers';
import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { stripe } from '@/lib/stripe';
import { createClient } from '@supabase/supabase-js';

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(request: Request) {
  const body = await request.text();
  const signature = headers().get('stripe-signature')!;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (error: any) {
    console.error('Webhook signature verification failed:', error.message);
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }

  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session;
        
        if (session.mode === 'subscription') {
          const subscription = await stripe.subscriptions.retrieve(
            session.subscription as string
          );
          
          await handleSubscriptionCreated(subscription, session.metadata?.userId!);
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
        await handleSubscriptionCanceled(subscription);
        break;
      }

      case 'invoice.payment_succeeded': {
        const invoice = event.data.object as Stripe.Invoice;
        await handlePaymentSucceeded(invoice);
        break;
      }

      case 'invoice.payment_failed': {
        const invoice = event.data.object as Stripe.Invoice;
        await handlePaymentFailed(invoice);
        break;
      }
    }

    return NextResponse.json({ received: true });
  } catch (error: any) {
    console.error('Webhook handler error:', error);
    return NextResponse.json(
      { error: 'Webhook handler failed' },
      { status: 500 }
    );
  }
}

async function handleSubscriptionCreated(
  subscription: Stripe.Subscription,
  userId: string
) {
  const item = subscription.items.data[0];
  const price = item.price;

  await supabaseAdmin.from('subscriptions').insert({
    user_id: userId,
    stripe_customer_id: subscription.customer as string,
    stripe_subscription_id: subscription.id,
    status: subscription.status,
    plan_id: price.id,
    interval: price.recurring?.interval || 'month',
    amount: price.unit_amount || 0,
    current_period_start: new Date((subscription as any).current_period_start * 1000).toISOString(),
    current_period_end: new Date((subscription as any).current_period_end * 1000).toISOString(),
  });

  await supabaseAdmin.from('activity_logs').insert({
    user_id: userId,
    action: 'subscription_created',
    metadata: { subscription_id: subscription.id },
  });
}

async function handleSubscriptionUpdated(subscription: Stripe.Subscription) {
  await supabaseAdmin
    .from('subscriptions')
    .update({
      status: subscription.status,
      current_period_start: new Date((subscription as any).current_period_start * 1000).toISOString(),
      current_period_end: new Date((subscription as any).current_period_end * 1000).toISOString(),
      cancel_at_period_end: subscription.cancel_at_period_end,
    })
    .eq('stripe_subscription_id', subscription.id);
}

async function handleSubscriptionCanceled(subscription: Stripe.Subscription) {
  await supabaseAdmin
    .from('subscriptions')
    .update({ status: 'canceled' })
    .eq('stripe_subscription_id', subscription.id);

  const { data: sub } = await supabaseAdmin
    .from('subscriptions')
    .select('user_id')
    .eq('stripe_subscription_id', subscription.id)
    .single();

  if (sub) {
    await supabaseAdmin.from('activity_logs').insert({
      user_id: sub.user_id,
      action: 'subscription_canceled',
      metadata: { subscription_id: subscription.id },
    });
  }
}

async function handlePaymentSucceeded(invoice: Stripe.Invoice) {
  const { data: subscription } = await supabaseAdmin
    .from('subscriptions')
    .select('user_id')
    .eq('stripe_subscription_id', (invoice as any).subscription as string)
    .single();

  if (subscription) {
    await supabaseAdmin.from('payments').insert({
      user_id: subscription.user_id,
      stripe_payment_id: (invoice as any).payment_intent as string,
      amount: invoice.amount_paid,
      currency: invoice.currency,
      status: 'succeeded',
    });

    await supabaseAdmin.from('activity_logs').insert({
      user_id: subscription.user_id,
      action: 'payment_succeeded',
      metadata: {
        invoice_id: invoice.id,
        amount: invoice.amount_paid,
      },
    });
  }
}

async function handlePaymentFailed(invoice: Stripe.Invoice) {
  const { data: subscription } = await supabaseAdmin
    .from('subscriptions')
    .select('user_id')
    .eq('stripe_subscription_id', (invoice as any).subscription as string)
    .single();

  if (subscription) {
    await supabaseAdmin.from('activity_logs').insert({
      user_id: subscription.user_id,
      action: 'payment_failed',
      metadata: {
        invoice_id: invoice.id,
        amount: invoice.amount_due,
      },
    });
  }
}
