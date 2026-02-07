import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { Resend } from 'resend';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import type { Database } from '@/lib/database.types';
import { invoiceEmailHtml } from '@/lib/email-templates';

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  const resendApiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL;

  if (!resendApiKey || !fromEmail) {
    return NextResponse.json({ error: 'Resend is not configured' }, { status: 500 });
  }

  const supabase = createRouteHandlerClient<Database>({ cookies });
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user || !user.email) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { data: invoice, error: invoiceError } = await supabase
    .from('invoices')
    .select('id,invoice_number,due_date,amount_cents,currency,clients(name,email)')
    .eq('id', params.id)
    .eq('user_id', user.id)
    .single();

  if (invoiceError || !invoice) {
    return NextResponse.json({ error: 'Invoice not found' }, { status: 404 });
  }

  const client = Array.isArray(invoice.clients) ? invoice.clients[0] : invoice.clients;
  const toEmail = client?.email;

  if (!toEmail) {
    return NextResponse.json({ error: 'Client email is required to send invoice' }, { status: 400 });
  }

  const resend = new Resend(resendApiKey);
  const appUrl = process.env.NEXT_PUBLIC_APP_URL!;

  const email = await resend.emails.send({
    from: fromEmail,
    to: [toEmail],
    subject: `Invoice ${invoice.invoice_number} from InvoiceFlow`,
    html: invoiceEmailHtml({
      businessName: 'InvoiceFlow User',
      invoiceNumber: invoice.invoice_number,
      clientName: client?.name ?? 'there',
      amount: `${(invoice.amount_cents / 100).toFixed(2)} ${invoice.currency.toUpperCase()}`,
      dueDate: invoice.due_date,
      payUrl: `${appUrl}/dashboard`,
    }),
  });

  const resendId = typeof email.data?.id === 'string' ? email.data.id : null;

  await supabase.from('email_events').insert({
    user_id: user.id,
    invoice_id: invoice.id,
    email_to: toEmail,
    subject: `Invoice ${invoice.invoice_number} from InvoiceFlow`,
    resend_id: resendId,
  });

  return NextResponse.json({ success: true, id: resendId });
}
