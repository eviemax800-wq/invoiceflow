// @ts-nocheck
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import type { Database } from '@/lib/database.types';
import { listInvoiceMessages, getMessageDetails } from '@/lib/gmail';
import { extractInvoiceFields } from '@/lib/gemini';
import { getSupabaseAdmin } from '@/lib/supabase-admin';

function guessVendor(fromHeader: string, subject: string) {
  if (fromHeader) {
    const match = fromHeader.match(/"?([^"<]+)"?\s*<.*>/);
    if (match) return match[1].trim();
    return fromHeader.split('<')[0]?.trim() || fromHeader;
  }
  return subject || 'Unknown vendor';
}

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export async function POST() {
  const supabase = createRouteHandlerClient<Database>({ cookies });
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { data: connectionData, error: connError } = await getSupabaseAdmin()
    .from('gmail_connections')
    .select('*')
    .eq('user_id', user.id)
    .single();

  // @ts-ignore - Type narrowing issue with Supabase client
  if (connError || !connectionData || !connectionData.access_token) {
    return NextResponse.json({ error: 'Gmail not connected or missing access token' }, { status: 400 });
  }

  // @ts-ignore - Verified above
  const accessToken = connectionData.access_token;
  // @ts-ignore
  const refreshToken = connectionData.refresh_token || '';

  try {
    const messages = await listInvoiceMessages({
      accessToken,
      refreshToken,
      maxResults: 20,
    });

    let inserted = 0;

    for (const msg of messages) {
      if (!msg.id) continue;
      const details = await getMessageDetails({
        accessToken,
        refreshToken,
        messageId: msg.id,
      });

      const promptText = `Subject: ${details.subject}\nFrom: ${details.from}\nDate: ${details.date}\nSnippet: ${details.snippet}`;
      const extraction = await extractInvoiceFields(promptText);

      const vendor = extraction.vendor || guessVendor(details.from, details.subject);
      const amountCents = extraction.amount ? Math.round(extraction.amount * 100) : null;
      const currency = extraction.currency || 'USD';

      // @ts-ignore - Supabase type inference issue
      const { error } = await getSupabaseAdmin()
        .from('invoices')
        .upsert(
          {
            user_id: user.id,
            gmail_message_id: details.id,
            thread_id: details.threadId,
            vendor,
            amount_cents: amountCents,
            currency,
            invoice_date: extraction.date || null,
            category: extraction.category || 'Other',
            status: 'extracted',
            source: 'gmail',
            raw_data: {
              subject: details.subject,
              from: details.from,
              snippet: details.snippet,
              extraction,
            },
          },
          { onConflict: 'gmail_message_id' }
        );

      if (!error) inserted += 1;
    }

    await getSupabaseAdmin()
      .from('gmail_connections')
      .update({ updated_at: new Date().toISOString() })
      .eq('user_id', user.id);

    return NextResponse.json({ inserted, total: messages.length });
  } catch (error: any) {
    console.error('Sync error:', error);
    return NextResponse.json({ error: error.message || 'Sync failed' }, { status: 500 });
  }
}
