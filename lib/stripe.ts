import Stripe from 'stripe';

let _stripe: Stripe | null = null;

export const getStripe = () => {
  if (!_stripe) {
    const key = process.env.STRIPE_SECRET_KEY;
    if (!key) {
      throw new Error('STRIPE_SECRET_KEY is not set');
    }
    _stripe = new Stripe(key, {
      apiVersion: '2026-01-28.clover',
      typescript: true,
    });
  }
  return _stripe;
};

export const getStripeCustomerByEmail = async (email: string) => {
  const customers = await getStripe().customers.list({ email, limit: 1 });
  return customers.data[0];
};

export const createStripeCustomer = async (email: string, userId: string) => {
  return await getStripe().customers.create({
    email,
    metadata: { userId },
  });
};

export const createCheckoutSession = async (params: {
  customerId: string;
  priceId: string;
  successUrl: string;
  cancelUrl: string;
  userId: string;
}) => {
  return await getStripe().checkout.sessions.create({
    customer: params.customerId,
    mode: 'subscription',
    payment_method_types: ['card'],
    line_items: [{ price: params.priceId, quantity: 1 }],
    success_url: params.successUrl,
    cancel_url: params.cancelUrl,
    metadata: { userId: params.userId },
  });
};

export const createPortalSession = async (customerId: string, returnUrl: string) => {
  return await getStripe().billingPortal.sessions.create({
    customer: customerId,
    return_url: returnUrl,
  });
};

export const cancelSubscription = async (subscriptionId: string) => {
  return await getStripe().subscriptions.update(subscriptionId, {
    cancel_at_period_end: true,
  });
};
