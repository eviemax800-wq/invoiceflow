import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import type { Database } from '@/lib/database.types';

export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  const supabase = createRouteHandlerClient<Database>({ cookies });
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { data: invoice, error } = await supabase
    .from('invoices')
    .select('invoice_number,issue_date,due_date,amount_cents,currency,status,notes,clients(name,email,address,company)')
    .eq('id', params.id)
    .eq('user_id', user.id)
    .single();

  if (error || !invoice) {
    return NextResponse.json({ error: 'Invoice not found' }, { status: 404 });
  }

  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([612, 792]);
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  const drawText = (text: string, x: number, y: number, bold = false, size = 12, color = rgb(0.1, 0.1, 0.1)) => {
    page.drawText(text, {
      x,
      y,
      size,
      font: bold ? fontBold : font,
      color,
    });
  };

  drawText('Invoice', 48, 740, true, 30);
  drawText(`Invoice #: ${invoice.invoice_number}`, 48, 700);
  drawText(`Issue date: ${invoice.issue_date}`, 48, 680);
  drawText(`Due date: ${invoice.due_date}`, 48, 660);

  const client = Array.isArray(invoice.clients) ? invoice.clients[0] : invoice.clients;
  drawText('Bill To', 48, 620, true, 14);
  drawText(client?.name ?? 'Client', 48, 600);
  drawText(client?.email ?? '', 48, 582);
  drawText(client?.company ?? '', 48, 564);

  drawText('Amount Due', 420, 620, true, 14);
  drawText(`${(invoice.amount_cents / 100).toFixed(2)} ${invoice.currency.toUpperCase()}`, 420, 600, true, 18);

  drawText('Status', 420, 564, true, 12);
  drawText(invoice.status.toUpperCase(), 420, 546);

  if (invoice.notes) {
    drawText('Notes', 48, 500, true, 14);
    drawText(invoice.notes, 48, 480);
  }

  const pdfBytes = await pdfDoc.save();

  return new NextResponse(Buffer.from(pdfBytes), {
    status: 200,
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `inline; filename="${invoice.invoice_number}.pdf"`,
    },
  });
}
