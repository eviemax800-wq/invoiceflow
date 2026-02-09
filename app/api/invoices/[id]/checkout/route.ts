// @ts-nocheck
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import type { Database } from '@/lib/database.types';
import { getStripe } from '@/lib/stripe';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  const supabase = createRouteHandlerClient<Database>({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user || !user.email) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { data: invoice, error: invoiceError } = await supabase
    .from('invoices')
    .select('id,invoice_number,amount_cents,currency,status,profiles(stripe_customer_id),clients(name)')
    .eq('id', params.id)
    .eq('user_id', user.id)
    .single();

  if (invoiceError || !invoice) {
    return NextResponse.json({ error: 'Invoice not found' }, { status: 404 });
  }

  if (invoice.status === 'paid') {
    return NextResponse.json({ error: 'Invoice already paid' }, { status: 400 });
  }

  const profile = Array.isArray(invoice.profiles) ? invoice.profiles[0] : invoice.profiles;
  let customerId = profile?.stripe_customer_id;

  if (!customerId) {
    const customer = await stripe.customers.create({
      email: user.email,
      metadata: { userId: user.id },
    });
    customerId = customer.id;

    const { error: profileUpdateError } = await supabase
      .from('profiles')
      .update({ stripe_customer_id: customerId })
      .eq('id', user.id);

    if (profileUpdateError) {
      return NextResponse.json({ error: profileUpdateError.message }, { status: 500 });
    }
  }

  const appUrl = process.env.NEXT_PUBLIC_APP_URL!;
  const session = await getStripe().checkout.sessions.create({
    mode: 'payment',
    customer: customerId,
    success_url: `${appUrl}/dashboard?paid=1`,
    cancel_url: `${appUrl}/dashboard?paid=0`,
    line_items: [
      {
        quantity: 1,
        price_data: {
          currency: invoice.currency,
          product_data: {
            name: `Invoice ${invoice.invoice_number}`,
            description: `Payment for ${Array.isArray(invoice.clients) ? invoice.clients[0]?.name ?? 'client' : invoice.clients?.name ?? 'client'}`,
          },
          unit_amount: invoice.amount_cents,
        },
      },
    ],
    metadata: {
      invoiceId: invoice.id,
      userId: user.id,
      invoiceNumber: invoice.invoice_number,
    },
  });

  const { error: statusError } = await supabase
    .from('invoices')
    .update({ status: 'sent', stripe_checkout_session_id: session.id })
    .eq('id', invoice.id)
    .eq('user_id', user.id);

  if (statusError) {
    return NextResponse.json({ error: statusError.message }, { status: 500 });
  }

  return NextResponse.json({ url: session.url });
}
