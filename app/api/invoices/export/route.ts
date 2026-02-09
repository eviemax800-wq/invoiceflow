// @ts-nocheck
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import type { Database } from '@/lib/database.types';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export async function GET() {
  const supabase = createRouteHandlerClient<Database>({ cookies });
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { data: invoices, error } = await supabase
    .from('invoices')
    .select('*')
    .eq('user_id', user.id)
    .order('invoice_date', { ascending: false });

  if (error) {
    return NextResponse.json({ error: 'Failed to fetch invoices' }, { status: 500 });
  }

  const headers = ['vendor', 'amount', 'currency', 'invoice_date', 'category', 'status'];
  const rows = invoices.map((inv) => [
    inv.vendor || '',
    inv.amount_cents ? (inv.amount_cents / 100).toFixed(2) : '',
    inv.currency || '',
    inv.invoice_date || '',
    inv.category || '',
    inv.status || '',
  ]);

  const csv = [headers.join(','), ...rows.map((row) => row.join(','))].join('\n');

  return new NextResponse(csv, {
    headers: {
      'Content-Type': 'text/csv',
      'Content-Disposition': 'attachment; filename="invoiceflow-export.csv"',
    },
  });
}
