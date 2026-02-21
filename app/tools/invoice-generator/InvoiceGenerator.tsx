'use client';

import { useState, useCallback } from 'react';
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';

interface LineItem {
  description: string;
  quantity: string;
  rate: string;
}

interface InvoiceData {
  businessName: string;
  abn: string;
  email: string;
  address: string;
  clientName: string;
  clientEmail: string;
  clientAddress: string;
  invoiceNumber: string;
  issueDate: string;
  dueDate: string;
  includeGst: boolean;
  paymentDetails: string;
  notes: string;
  items: LineItem[];
}

const defaultData: InvoiceData = {
  businessName: '',
  abn: '',
  email: '',
  address: '',
  clientName: '',
  clientEmail: '',
  clientAddress: '',
  invoiceNumber: 'INV-001',
  issueDate: new Date().toISOString().split('T')[0],
  dueDate: new Date(Date.now() + 14 * 86400000).toISOString().split('T')[0],
  includeGst: true,
  paymentDetails: '',
  notes: '',
  items: [{ description: '', quantity: '1', rate: '' }],
};

function formatAUD(value: number): string {
  return new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
  }).format(value);
}

export default function InvoiceGenerator() {
  const [data, setData] = useState<InvoiceData>(defaultData);
  const [generating, setGenerating] = useState(false);

  const update = <K extends keyof InvoiceData>(key: K, value: InvoiceData[K]) =>
    setData((prev) => ({ ...prev, [key]: value }));

  const updateItem = (i: number, field: keyof LineItem, value: string) => {
    const items = [...data.items];
    items[i] = { ...items[i], [field]: value };
    update('items', items);
  };

  const addItem = () =>
    update('items', [...data.items, { description: '', quantity: '1', rate: '' }]);
  const removeItem = (i: number) =>
    update('items', data.items.filter((_, idx) => idx !== i));

  const subtotal = data.items.reduce((sum, item) => {
    const qty = parseFloat(item.quantity) || 0;
    const rate = parseFloat(item.rate) || 0;
    return sum + qty * rate;
  }, 0);
  const gstAmount = data.includeGst ? subtotal * 0.1 : 0;
  const total = subtotal + gstAmount;

  const generatePDF = useCallback(async () => {
    setGenerating(true);
    try {
      const doc = await PDFDocument.create();
      const page = doc.addPage([595.28, 841.89]); // A4
      const helvetica = await doc.embedFont(StandardFonts.Helvetica);
      const helveticaBold = await doc.embedFont(StandardFonts.HelveticaBold);
      const { height } = page.getSize();

      const dark = rgb(0.05, 0.05, 0.08);
      const teal = rgb(0.08, 0.72, 0.65);
      const gray = rgb(0.4, 0.4, 0.45);
      const white = rgb(1, 1, 1);
      const lightBg = rgb(0.96, 0.97, 0.98);

      // Background
      page.drawRectangle({ x: 0, y: 0, width: 595.28, height: 841.89, color: white });

      // Header bar
      page.drawRectangle({ x: 0, y: height - 90, width: 595.28, height: 90, color: dark });

      // Title
      page.drawText('TAX INVOICE', {
        x: 50,
        y: height - 55,
        size: 24,
        font: helveticaBold,
        color: teal,
      });

      // Invoice number under title
      page.drawText(data.invoiceNumber, {
        x: 50,
        y: height - 75,
        size: 11,
        font: helvetica,
        color: rgb(0.7, 0.7, 0.75),
      });

      // Dates on right
      page.drawText(`Issued: ${data.issueDate}`, {
        x: 400,
        y: height - 50,
        size: 10,
        font: helvetica,
        color: rgb(0.7, 0.7, 0.75),
      });
      page.drawText(`Due: ${data.dueDate}`, {
        x: 400,
        y: height - 65,
        size: 10,
        font: helvetica,
        color: rgb(0.7, 0.7, 0.75),
      });

      let y = height - 120;

      // From section
      page.drawText('FROM', { x: 50, y, size: 9, font: helveticaBold, color: teal });
      y -= 16;
      if (data.businessName) {
        page.drawText(data.businessName, { x: 50, y, size: 11, font: helveticaBold, color: dark });
        y -= 14;
      }
      if (data.abn) {
        page.drawText(`ABN: ${data.abn}`, { x: 50, y, size: 9, font: helvetica, color: gray });
        y -= 12;
      }
      if (data.email) {
        page.drawText(data.email, { x: 50, y, size: 9, font: helvetica, color: gray });
        y -= 12;
      }
      if (data.address) {
        page.drawText(data.address, { x: 50, y, size: 9, font: helvetica, color: gray });
        y -= 12;
      }

      // To section
      let yTo = height - 120;
      page.drawText('BILL TO', { x: 320, y: yTo, size: 9, font: helveticaBold, color: teal });
      yTo -= 16;
      if (data.clientName) {
        page.drawText(data.clientName, { x: 320, y: yTo, size: 11, font: helveticaBold, color: dark });
        yTo -= 14;
      }
      if (data.clientEmail) {
        page.drawText(data.clientEmail, { x: 320, y: yTo, size: 9, font: helvetica, color: gray });
        yTo -= 12;
      }
      if (data.clientAddress) {
        page.drawText(data.clientAddress, { x: 320, y: yTo, size: 9, font: helvetica, color: gray });
        yTo -= 12;
      }

      y = Math.min(y, yTo) - 30;

      // Table header
      page.drawRectangle({ x: 40, y: y - 5, width: 515, height: 24, color: lightBg });
      page.drawText('Description', { x: 50, y: y, size: 9, font: helveticaBold, color: dark });
      page.drawText('Qty', { x: 350, y: y, size: 9, font: helveticaBold, color: dark });
      page.drawText('Rate', { x: 400, y: y, size: 9, font: helveticaBold, color: dark });
      page.drawText('Amount', { x: 480, y: y, size: 9, font: helveticaBold, color: dark });
      y -= 28;

      // Line items
      for (const item of data.items) {
        const qty = parseFloat(item.quantity) || 0;
        const rate = parseFloat(item.rate) || 0;
        const amount = qty * rate;

        if (item.description || amount > 0) {
          page.drawText(item.description || '-', {
            x: 50,
            y,
            size: 10,
            font: helvetica,
            color: dark,
            maxWidth: 290,
          });
          page.drawText(qty.toString(), { x: 355, y, size: 10, font: helvetica, color: dark });
          page.drawText(formatAUD(rate), { x: 395, y, size: 10, font: helvetica, color: dark });
          page.drawText(formatAUD(amount), { x: 475, y, size: 10, font: helvetica, color: dark });
          y -= 20;
        }
      }

      // Divider
      y -= 10;
      page.drawLine({
        start: { x: 350, y },
        end: { x: 555, y },
        thickness: 1,
        color: rgb(0.9, 0.9, 0.9),
      });
      y -= 16;

      // Subtotal
      page.drawText('Subtotal', { x: 400, y, size: 10, font: helvetica, color: gray });
      page.drawText(formatAUD(subtotal), { x: 480, y, size: 10, font: helvetica, color: dark });
      y -= 18;

      // GST
      if (data.includeGst) {
        page.drawText('GST (10%)', { x: 400, y, size: 10, font: helvetica, color: gray });
        page.drawText(formatAUD(gstAmount), { x: 480, y, size: 10, font: helvetica, color: dark });
        y -= 18;
      }

      // Total
      page.drawRectangle({ x: 390, y: y - 5, width: 165, height: 26, color: teal });
      page.drawText('TOTAL', { x: 400, y, size: 11, font: helveticaBold, color: white });
      page.drawText(formatAUD(total), { x: 475, y, size: 11, font: helveticaBold, color: white });
      y -= 40;

      // Payment details
      if (data.paymentDetails) {
        page.drawText('PAYMENT DETAILS', { x: 50, y, size: 9, font: helveticaBold, color: teal });
        y -= 14;
        const payLines = data.paymentDetails.split('\n');
        for (const line of payLines) {
          page.drawText(line, { x: 50, y, size: 9, font: helvetica, color: gray });
          y -= 12;
        }
        y -= 10;
      }

      // Notes
      if (data.notes) {
        page.drawText('NOTES', { x: 50, y, size: 9, font: helveticaBold, color: teal });
        y -= 14;
        page.drawText(data.notes, {
          x: 50,
          y,
          size: 9,
          font: helvetica,
          color: gray,
          maxWidth: 500,
        });
      }

      // Footer
      page.drawText('Generated with InvoiceFlow — invoiceflow.app', {
        x: 50,
        y: 30,
        size: 8,
        font: helvetica,
        color: rgb(0.75, 0.75, 0.8),
      });

      const pdfBytes = await doc.save();
      const blob = new Blob([pdfBytes as unknown as BlobPart], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${data.invoiceNumber || 'invoice'}.pdf`;
      a.click();
      URL.revokeObjectURL(url);
    } finally {
      setGenerating(false);
    }
  }, [data, subtotal, gstAmount, total]);

  const inputClass =
    'w-full bg-white/5 border border-white/10 rounded-lg py-2.5 px-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-teal-500/50 transition-all';
  const labelClass = 'block text-xs text-slate-400 mb-1.5';

  return (
    <div className="grid lg:grid-cols-5 gap-8">
      {/* Form — left 3 cols */}
      <div className="lg:col-span-3 space-y-6">
        {/* Your Details */}
        <div className="glass rounded-2xl p-6">
          <h3 className="text-lg font-bold text-white heading-font mb-4">Your Details</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Business Name *</label>
              <input
                className={inputClass}
                placeholder="Your Business Pty Ltd"
                value={data.businessName}
                onChange={(e) => update('businessName', e.target.value)}
              />
            </div>
            <div>
              <label className={labelClass}>ABN</label>
              <input
                className={inputClass}
                placeholder="12 345 678 901"
                value={data.abn}
                onChange={(e) => update('abn', e.target.value)}
              />
            </div>
            <div>
              <label className={labelClass}>Email</label>
              <input
                type="email"
                className={inputClass}
                placeholder="you@example.com"
                value={data.email}
                onChange={(e) => update('email', e.target.value)}
              />
            </div>
            <div>
              <label className={labelClass}>Address</label>
              <input
                className={inputClass}
                placeholder="123 Collins St, Melbourne VIC 3000"
                value={data.address}
                onChange={(e) => update('address', e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Client Details */}
        <div className="glass rounded-2xl p-6">
          <h3 className="text-lg font-bold text-white heading-font mb-4">Client Details</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Client Name *</label>
              <input
                className={inputClass}
                placeholder="Client Business Name"
                value={data.clientName}
                onChange={(e) => update('clientName', e.target.value)}
              />
            </div>
            <div>
              <label className={labelClass}>Client Email</label>
              <input
                type="email"
                className={inputClass}
                placeholder="client@example.com"
                value={data.clientEmail}
                onChange={(e) => update('clientEmail', e.target.value)}
              />
            </div>
            <div className="sm:col-span-2">
              <label className={labelClass}>Client Address</label>
              <input
                className={inputClass}
                placeholder="456 Bourke St, Melbourne VIC 3000"
                value={data.clientAddress}
                onChange={(e) => update('clientAddress', e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Invoice Details */}
        <div className="glass rounded-2xl p-6">
          <h3 className="text-lg font-bold text-white heading-font mb-4">Invoice Details</h3>
          <div className="grid sm:grid-cols-3 gap-4 mb-4">
            <div>
              <label className={labelClass}>Invoice Number</label>
              <input
                className={inputClass}
                placeholder="INV-001"
                value={data.invoiceNumber}
                onChange={(e) => update('invoiceNumber', e.target.value)}
              />
            </div>
            <div>
              <label className={labelClass}>Issue Date</label>
              <input
                type="date"
                className={inputClass}
                value={data.issueDate}
                onChange={(e) => update('issueDate', e.target.value)}
              />
            </div>
            <div>
              <label className={labelClass}>Due Date</label>
              <input
                type="date"
                className={inputClass}
                value={data.dueDate}
                onChange={(e) => update('dueDate', e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center gap-2 mb-4">
            <input
              type="checkbox"
              id="includeGst"
              checked={data.includeGst}
              onChange={(e) => update('includeGst', e.target.checked)}
              className="rounded border-white/20 bg-white/5 text-teal-500 focus:ring-teal-500/50"
            />
            <label htmlFor="includeGst" className="text-sm text-slate-300">
              Include GST (10%)
            </label>
          </div>
        </div>

        {/* Line Items */}
        <div className="glass rounded-2xl p-6">
          <h3 className="text-lg font-bold text-white heading-font mb-4">Line Items</h3>
          <div className="space-y-3">
            {data.items.map((item, i) => (
              <div key={i} className="flex gap-2 items-start">
                <div className="flex-1">
                  {i === 0 && <label className={labelClass}>Description</label>}
                  <input
                    className={inputClass}
                    placeholder="Website design"
                    value={item.description}
                    onChange={(e) => updateItem(i, 'description', e.target.value)}
                  />
                </div>
                <div className="w-20">
                  {i === 0 && <label className={labelClass}>Qty</label>}
                  <input
                    type="number"
                    min="0"
                    step="1"
                    className={inputClass + ' text-center'}
                    value={item.quantity}
                    onChange={(e) => updateItem(i, 'quantity', e.target.value)}
                  />
                </div>
                <div className="w-28">
                  {i === 0 && <label className={labelClass}>Rate ($)</label>}
                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    className={inputClass}
                    placeholder="0.00"
                    value={item.rate}
                    onChange={(e) => updateItem(i, 'rate', e.target.value)}
                  />
                </div>
                <div className="w-24 pt-1">
                  {i === 0 && <div className="text-xs text-slate-400 mb-1.5">Amount</div>}
                  <div className="text-sm text-white font-mono py-2.5">
                    {formatAUD(
                      (parseFloat(item.quantity) || 0) * (parseFloat(item.rate) || 0)
                    )}
                  </div>
                </div>
                {data.items.length > 1 && (
                  <button
                    onClick={() => removeItem(i)}
                    className="text-slate-500 hover:text-red-400 transition-colors p-1 mt-1"
                    style={i === 0 ? { marginTop: '1.75rem' } : {}}
                    aria-label="Remove item"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>
            ))}
          </div>
          <button
            onClick={addItem}
            className="mt-3 text-sm text-teal-400 hover:text-teal-300 transition-colors"
          >
            + Add line item
          </button>
        </div>

        {/* Payment & Notes */}
        <div className="glass rounded-2xl p-6">
          <h3 className="text-lg font-bold text-white heading-font mb-4">Payment &amp; Notes</h3>
          <div className="space-y-4">
            <div>
              <label className={labelClass}>Payment Details (bank, PayID, etc.)</label>
              <textarea
                className={inputClass + ' min-h-[60px] resize-y'}
                placeholder={'BSB: 063-000\nAccount: 12345678\nAccount Name: Your Business'}
                value={data.paymentDetails}
                onChange={(e) => update('paymentDetails', e.target.value)}
                rows={3}
              />
            </div>
            <div>
              <label className={labelClass}>Notes</label>
              <input
                className={inputClass}
                placeholder="Thank you for your business!"
                value={data.notes}
                onChange={(e) => update('notes', e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Preview — right 2 cols */}
      <div className="lg:col-span-2">
        <div className="sticky top-8">
          <div className="glass rounded-2xl p-6 mb-4">
            <h3 className="text-lg font-bold text-white heading-font mb-4">Invoice Preview</h3>

            {/* Mini preview */}
            <div className="bg-white rounded-xl p-5 text-black text-xs space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-lg font-bold text-teal-600">TAX INVOICE</div>
                  <div className="text-gray-400">{data.invoiceNumber}</div>
                </div>
                <div className="text-right text-gray-500">
                  <div>Issued: {data.issueDate}</div>
                  <div>Due: {data.dueDate}</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-teal-600 font-semibold text-[10px] uppercase mb-1">From</div>
                  <div className="font-semibold">{data.businessName || 'Your Business'}</div>
                  {data.abn && <div className="text-gray-500">ABN: {data.abn}</div>}
                </div>
                <div>
                  <div className="text-teal-600 font-semibold text-[10px] uppercase mb-1">Bill To</div>
                  <div className="font-semibold">{data.clientName || 'Client Name'}</div>
                </div>
              </div>

              {/* Items */}
              <div className="border-t pt-2">
                <div className="flex text-[10px] font-semibold text-gray-500 mb-1">
                  <span className="flex-1">Item</span>
                  <span className="w-8 text-center">Qty</span>
                  <span className="w-16 text-right">Rate</span>
                  <span className="w-16 text-right">Amount</span>
                </div>
                {data.items.map((item, i) => {
                  const qty = parseFloat(item.quantity) || 0;
                  const rate = parseFloat(item.rate) || 0;
                  return (
                    <div key={i} className="flex py-0.5">
                      <span className="flex-1 truncate">{item.description || '-'}</span>
                      <span className="w-8 text-center">{qty}</span>
                      <span className="w-16 text-right">{formatAUD(rate)}</span>
                      <span className="w-16 text-right">{formatAUD(qty * rate)}</span>
                    </div>
                  );
                })}
              </div>

              {/* Totals */}
              <div className="border-t pt-2 text-right space-y-1">
                <div className="flex justify-end gap-8">
                  <span className="text-gray-500">Subtotal</span>
                  <span className="w-20">{formatAUD(subtotal)}</span>
                </div>
                {data.includeGst && (
                  <div className="flex justify-end gap-8">
                    <span className="text-gray-500">GST (10%)</span>
                    <span className="w-20">{formatAUD(gstAmount)}</span>
                  </div>
                )}
                <div className="flex justify-end gap-8 bg-teal-600 text-white px-2 py-1 rounded font-semibold">
                  <span>TOTAL</span>
                  <span className="w-20">{formatAUD(total)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Download button */}
          <button
            onClick={generatePDF}
            disabled={generating || !data.businessName || !data.clientName}
            className="w-full py-3.5 rounded-xl text-white font-semibold transition-all disabled:opacity-40 disabled:cursor-not-allowed bg-gradient-to-r from-teal-500 to-blue-500 hover:opacity-90 shadow-lg shadow-teal-500/20"
          >
            {generating ? 'Generating PDF...' : 'Download Invoice PDF'}
          </button>
          {(!data.businessName || !data.clientName) && (
            <p className="text-xs text-slate-500 text-center mt-2">
              Fill in business and client names to download
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
