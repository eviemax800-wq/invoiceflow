import { NextResponse } from 'next/server';
import { createCheckoutSession, createStripeCustomer, getStripeCustomerByEmail } from '@/lib/stripe';
import { supabase } from '@/lib/supabase';

export async function POST(request: Request) {
  try {
    const { priceId } = await request.json();

    // Get current user from Supabase
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Get or create Stripe customer
    let customer = await getStripeCustomerByEmail(user.email!);
    
    if (!customer) {
      customer = await createStripeCustomer(user.email!, user.id);
    }

    // Create checkout session
    const session = await createCheckoutSession({
      customerId: customer.id,
      priceId,
      successUrl: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard?success=true`,
      cancelUrl: `${process.env.NEXT_PUBLIC_APP_URL}/pricing?canceled=true`,
      userId: user.id,
    });

    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    console.error('Error creating checkout:', error);
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}
