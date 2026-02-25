'use client';

import { useState, useMemo } from 'react';

/* ---- Helpers ---- */

function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

function formatDateAU(dateStr: string): string {
  if (!dateStr) return '';
  const d = new Date(dateStr + 'T00:00:00');
  const day = String(d.getDate()).padStart(2, '0');
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const year = d.getFullYear();
  return `${day}/${month}/${year}`;
}

function todayISO(): string {
  const d = new Date();
  return d.toISOString().split('T')[0];
}

function generateReceiptNumber(): string {
  const now = new Date();
  const y = now.getFullYear().toString().slice(-2);
  const m = String(now.getMonth() + 1).padStart(2, '0');
  const seq = String(Math.floor(Math.random() * 9000) + 1000);
  return `REC-${y}${m}-${seq}`;
}

/* ---- Types ---- */

type PaymentMethod = 'bank-transfer' | 'credit-card' | 'paypal' | 'cash' | 'cheque' | 'stripe' | 'other';

interface LineItem {
  id: string;
  description: string;
  quantity: number;
  unitPrice: number;
  gstIncluded: boolean;
}

const PAYMENT_METHODS: { value: PaymentMethod; label: string }[] = [
  { value: 'bank-transfer', label: 'Bank Transfer (EFT)' },
  { value: 'credit-card', label: 'Credit / Debit Card' },
  { value: 'paypal', label: 'PayPal' },
  { value: 'cash', label: 'Cash' },
  { value: 'cheque', label: 'Cheque' },
  { value: 'stripe', label: 'Stripe' },
  { value: 'other', label: 'Other' },
];

/* ---- Component ---- */

export default function ReceiptGenerator() {
  // Business details
  const [businessName, setBusinessName] = useState('');
  const [abn, setAbn] = useState('');
  const [businessAddress, setBusinessAddress] = useState('');
  const [businessEmail, setBusinessEmail] = useState('');
  const [businessPhone, setBusinessPhone] = useState('');

  // Client details
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');

  // Receipt details
  const [receiptNumber, setReceiptNumber] = useState(generateReceiptNumber);
  const [receiptDate, setReceiptDate] = useState(todayISO);
  const [invoiceNumber, setInvoiceNumber] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('bank-transfer');
  const [paymentReference, setPaymentReference] = useState('');
  const [notes, setNotes] = useState('');

  // Line items
  const [lineItems, setLineItems] = useState<LineItem[]>([
    { id: '1', description: '', quantity: 1, unitPrice: 0, gstIncluded: true },
  ]);

  // GST
  const [isGSTRegistered, setIsGSTRegistered] = useState(true);

  // UI
  const [generated, setGenerated] = useState(false);
  const [copied, setCopied] = useState(false);

  // Calculations
  const calculations = useMemo(() => {
    let subtotalExGST = 0;
    let totalGST = 0;

    lineItems.forEach((item) => {
      const lineTotal = item.quantity * item.unitPrice;
      if (isGSTRegistered && item.gstIncluded) {
        const exGST = lineTotal / 1.1;
        const gst = lineTotal - exGST;
        subtotalExGST += exGST;
        totalGST += gst;
      } else {
        subtotalExGST += lineTotal;
      }
    });

    const totalIncGST = subtotalExGST + totalGST;
    return { subtotalExGST, totalGST, totalIncGST };
  }, [lineItems, isGSTRegistered]);

  const addLineItem = () => {
    setLineItems([
      ...lineItems,
      { id: String(Date.now()), description: '', quantity: 1, unitPrice: 0, gstIncluded: true },
    ]);
  };

  const removeLineItem = (id: string) => {
    if (lineItems.length <= 1) return;
    setLineItems(lineItems.filter((item) => item.id !== id));
  };

  const updateLineItem = (id: string, field: keyof LineItem, value: string | number | boolean) => {
    setLineItems(
      lineItems.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  const paymentMethodLabel =
    PAYMENT_METHODS.find((m) => m.value === paymentMethod)?.label || '';

  // Generate text
  const generatedText = useMemo(() => {
    const biz = businessName || '[Your Business Name]';
    const abnStr = abn ? `ABN: ${abn}` : '';
    const addr = businessAddress || '[Your Address]';
    const email = businessEmail || '[your@email.com]';
    const phone = businessPhone ? `Phone: ${businessPhone}` : '';
    const client = clientName || '[Client Name]';
    const clientEml = clientEmail || '';
    const recNum = receiptNumber || 'REC-XXXX';
    const recDate = formatDateAU(receiptDate);
    const invNum = invoiceNumber || '';

    let text = '';
    text += `PAYMENT RECEIPT\n`;
    text += `${'='.repeat(50)}\n\n`;
    text += `From:\n${biz}\n`;
    if (abnStr) text += `${abnStr}\n`;
    text += `${addr}\n${email}\n`;
    if (phone) text += `${phone}\n`;
    text += `\nTo:\n${client}\n`;
    if (clientEml) text += `${clientEml}\n`;
    text += `\n${'─'.repeat(50)}\n`;
    text += `Receipt #:        ${recNum}\n`;
    text += `Date:             ${recDate}\n`;
    if (invNum) text += `Invoice Ref:      ${invNum}\n`;
    text += `Payment Method:   ${paymentMethodLabel}\n`;
    if (paymentReference) text += `Payment Ref:      ${paymentReference}\n`;
    text += `${'─'.repeat(50)}\n\n`;

    text += `ITEMS\n`;
    text += `${'─'.repeat(50)}\n`;
    lineItems.forEach((item, i) => {
      const desc = item.description || `Item ${i + 1}`;
      const lineTotal = item.quantity * item.unitPrice;
      text += `${desc}\n`;
      text += `  Qty: ${item.quantity} x ${formatCurrency(item.unitPrice)} = ${formatCurrency(lineTotal)}`;
      if (isGSTRegistered) text += item.gstIncluded ? ' (incl. GST)' : ' (no GST)';
      text += '\n';
    });
    text += `${'─'.repeat(50)}\n`;

    if (isGSTRegistered) {
      text += `Subtotal (ex GST):   ${formatCurrency(calculations.subtotalExGST)}\n`;
      text += `GST (10%):           ${formatCurrency(calculations.totalGST)}\n`;
      text += `TOTAL PAID:          ${formatCurrency(calculations.totalIncGST)}\n`;
    } else {
      text += `TOTAL PAID:          ${formatCurrency(calculations.subtotalExGST)}\n`;
    }

    text += `\nPayment Status: PAID IN FULL\n`;

    if (notes) {
      text += `\nNotes:\n${notes}\n`;
    }

    text += `\n${'─'.repeat(50)}\n`;
    text += `Thank you for your payment.\n`;
    text += `This receipt confirms full payment has been received.\n`;
    if (abnStr) text += `\n${abnStr}\n`;

    return text;
  }, [
    businessName, abn, businessAddress, businessEmail, businessPhone,
    clientName, clientEmail,
    receiptNumber, receiptDate, invoiceNumber,
    paymentMethod, paymentMethodLabel, paymentReference,
    notes, lineItems, isGSTRegistered, calculations,
  ]);

  const handleGenerate = () => setGenerated(true);

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const inputClass =
    'w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-slate-600 focus:outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/25 transition-all text-sm';
  const labelClass = 'block text-sm font-medium text-slate-300 mb-1.5';

  return (
    <div className="space-y-8">
      {/* Business Details */}
      <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
        <h3 className="text-lg font-bold text-white heading-font mb-6">Your Business Details</h3>
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className={labelClass}>Business Name</label>
            <input
              type="text"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              className={inputClass}
              placeholder="e.g. Smith Design Studio"
            />
          </div>
          <div>
            <label className={labelClass}>ABN</label>
            <input
              type="text"
              value={abn}
              onChange={(e) => setAbn(e.target.value)}
              className={inputClass}
              placeholder="e.g. 12 345 678 901"
            />
          </div>
          <div>
            <label className={labelClass}>Business Address</label>
            <input
              type="text"
              value={businessAddress}
              onChange={(e) => setBusinessAddress(e.target.value)}
              className={inputClass}
              placeholder="e.g. 123 Collins St, Melbourne VIC 3000"
            />
          </div>
          <div>
            <label className={labelClass}>Email</label>
            <input
              type="email"
              value={businessEmail}
              onChange={(e) => setBusinessEmail(e.target.value)}
              className={inputClass}
              placeholder="e.g. hello@smithdesign.com.au"
            />
          </div>
          <div>
            <label className={labelClass}>Phone (optional)</label>
            <input
              type="tel"
              value={businessPhone}
              onChange={(e) => setBusinessPhone(e.target.value)}
              className={inputClass}
              placeholder="e.g. 0412 345 678"
            />
          </div>
        </div>

        {/* GST Toggle */}
        <div className="mt-6 flex items-center justify-between py-3 px-4 rounded-xl bg-white/5">
          <div>
            <span className="text-slate-300 text-sm">Registered for GST?</span>
            <p className="text-xs text-slate-500 mt-0.5">Show GST breakdown on receipts</p>
          </div>
          <button
            onClick={() => setIsGSTRegistered(!isGSTRegistered)}
            className={`relative w-14 h-7 rounded-full transition-all ${
              isGSTRegistered ? 'bg-gradient-to-r from-teal-500 to-blue-500' : 'bg-white/10'
            }`}
          >
            <div
              className={`absolute top-0.5 left-0.5 h-6 w-6 rounded-full bg-white shadow-md transition-transform ${
                isGSTRegistered ? 'translate-x-7' : 'translate-x-0'
              }`}
            />
          </button>
        </div>
      </div>

      {/* Client Details */}
      <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
        <h3 className="text-lg font-bold text-white heading-font mb-6">Client Details</h3>
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className={labelClass}>Client Name / Company</label>
            <input
              type="text"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              className={inputClass}
              placeholder="e.g. Acme Pty Ltd"
            />
          </div>
          <div>
            <label className={labelClass}>Client Email (optional)</label>
            <input
              type="email"
              value={clientEmail}
              onChange={(e) => setClientEmail(e.target.value)}
              className={inputClass}
              placeholder="e.g. accounts@acme.com.au"
            />
          </div>
        </div>
      </div>

      {/* Receipt Details */}
      <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
        <h3 className="text-lg font-bold text-white heading-font mb-6">Receipt Details</h3>
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className={labelClass}>Receipt Number</label>
            <input
              type="text"
              value={receiptNumber}
              onChange={(e) => setReceiptNumber(e.target.value)}
              className={inputClass}
              placeholder="e.g. REC-2601-001"
            />
          </div>
          <div>
            <label className={labelClass}>Receipt Date</label>
            <input
              type="date"
              value={receiptDate}
              onChange={(e) => setReceiptDate(e.target.value)}
              className={inputClass}
            />
          </div>
          <div>
            <label className={labelClass}>Related Invoice Number (optional)</label>
            <input
              type="text"
              value={invoiceNumber}
              onChange={(e) => setInvoiceNumber(e.target.value)}
              className={inputClass}
              placeholder="e.g. INV-001"
            />
          </div>
          <div>
            <label className={labelClass}>Payment Method</label>
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value as PaymentMethod)}
              className={inputClass}
            >
              {PAYMENT_METHODS.map((opt) => (
                <option key={opt.value} value={opt.value} className="bg-slate-800">
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
          <div className="sm:col-span-2">
            <label className={labelClass}>Payment Reference / Transaction ID (optional)</label>
            <input
              type="text"
              value={paymentReference}
              onChange={(e) => setPaymentReference(e.target.value)}
              className={inputClass}
              placeholder="e.g. TXN-123456 or BSB transfer reference"
            />
          </div>
        </div>
      </div>

      {/* Line Items */}
      <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
        <h3 className="text-lg font-bold text-white heading-font mb-6">Items Paid For</h3>
        <div className="space-y-4">
          {lineItems.map((item, index) => (
            <div key={item.id} className="bg-white/5 rounded-xl p-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-slate-400">Item {index + 1}</span>
                {lineItems.length > 1 && (
                  <button
                    onClick={() => removeLineItem(item.id)}
                    className="text-xs text-rose-400 hover:text-rose-300 transition-colors"
                  >
                    Remove
                  </button>
                )}
              </div>
              <div>
                <label className={labelClass}>Description</label>
                <input
                  type="text"
                  value={item.description}
                  onChange={(e) => updateLineItem(item.id, 'description', e.target.value)}
                  className={inputClass}
                  placeholder="e.g. Website design — homepage and 3 subpages"
                />
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div>
                  <label className={labelClass}>Quantity</label>
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) =>
                      updateLineItem(item.id, 'quantity', Math.max(1, parseInt(e.target.value) || 1))
                    }
                    className={inputClass}
                    min="1"
                  />
                </div>
                <div>
                  <label className={labelClass}>Unit Price (AUD)</label>
                  <input
                    type="number"
                    value={item.unitPrice || ''}
                    onChange={(e) =>
                      updateLineItem(
                        item.id,
                        'unitPrice',
                        Math.max(0, parseFloat(e.target.value) || 0)
                      )
                    }
                    className={inputClass}
                    min="0"
                    step="10"
                    placeholder="0.00"
                  />
                </div>
                {isGSTRegistered && (
                  <div className="flex items-end pb-1">
                    <button
                      onClick={() => updateLineItem(item.id, 'gstIncluded', !item.gstIncluded)}
                      className={`px-3 py-3 rounded-xl text-xs font-medium transition-all ${
                        item.gstIncluded
                          ? 'bg-teal-500/20 text-teal-400 border border-teal-500/30'
                          : 'bg-white/5 text-slate-500 border border-white/10'
                      }`}
                    >
                      {item.gstIncluded ? 'GST Included' : 'No GST'}
                    </button>
                  </div>
                )}
              </div>
              <div className="text-right text-sm">
                <span className="text-slate-500">Line total: </span>
                <span className="text-white font-mono font-semibold">
                  {formatCurrency(item.quantity * item.unitPrice)}
                </span>
              </div>
            </div>
          ))}

          <button
            onClick={addLineItem}
            className="w-full py-3 border border-dashed border-white/20 rounded-xl text-sm text-slate-400 hover:text-white hover:border-teal-500/30 transition-all"
          >
            + Add Another Item
          </button>
        </div>

        {/* Totals */}
        <div className="mt-6 bg-white/5 rounded-xl p-4 space-y-2">
          {isGSTRegistered ? (
            <>
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Subtotal (ex GST)</span>
                <span className="text-white font-mono">{formatCurrency(calculations.subtotalExGST)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">GST (10%)</span>
                <span className="text-white font-mono">{formatCurrency(calculations.totalGST)}</span>
              </div>
              <div className="flex justify-between text-sm border-t border-white/10 pt-2">
                <span className="text-white font-semibold">Total Paid (incl. GST)</span>
                <span className="text-teal-400 font-mono font-bold text-lg">
                  {formatCurrency(calculations.totalIncGST)}
                </span>
              </div>
            </>
          ) : (
            <div className="flex justify-between text-sm">
              <span className="text-white font-semibold">Total Paid</span>
              <span className="text-teal-400 font-mono font-bold text-lg">
                {formatCurrency(calculations.subtotalExGST)}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Additional Notes */}
      <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
        <h3 className="text-lg font-bold text-white heading-font mb-6">Additional Notes</h3>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className={`${inputClass} min-h-[100px]`}
          placeholder="e.g. Payment received with thanks. Project files delivered via Google Drive."
        />
      </div>

      {/* Generate Button */}
      <div className="flex justify-center">
        <button
          onClick={handleGenerate}
          className="bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold rounded-xl px-8 py-4 hover:from-teal-400 hover:to-blue-400 transition-all text-lg"
        >
          Generate Receipt
        </button>
      </div>

      {/* Generated Output */}
      {generated && (
        <>
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-white heading-font">Receipt Preview</h3>
              <div className="flex items-center gap-2">
                <span className="text-xs px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 font-medium">
                  PAID
                </span>
                <span className="text-xs px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 font-medium">
                  {receiptNumber}
                </span>
              </div>
            </div>

            <div className="bg-slate-900/50 border border-white/10 rounded-xl p-6 font-mono text-sm whitespace-pre-wrap text-slate-300 leading-relaxed">
              {generatedText}
            </div>

            <div className="flex justify-center mt-6">
              <button
                onClick={handleCopy}
                className="bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold rounded-xl px-8 py-4 hover:from-teal-400 hover:to-blue-400 transition-all"
              >
                {copied ? 'Copied to Clipboard!' : 'Copy to Clipboard'}
              </button>
            </div>
          </div>

          {/* Related Tools */}
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white heading-font mb-4">Related Tools</h3>
            <div className="grid sm:grid-cols-3 gap-3">
              <a
                href="/tools/invoice-generator"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-500/30 rounded-xl p-4 transition-all group"
              >
                <p className="text-white font-medium text-sm group-hover:text-teal-400 transition-colors">
                  Invoice Generator
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Create professional invoices with GST
                </p>
              </a>
              <a
                href="/tools/credit-note-generator"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-500/30 rounded-xl p-4 transition-all group"
              >
                <p className="text-white font-medium text-sm group-hover:text-teal-400 transition-colors">
                  Credit Note Generator
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Issue credit notes and adjustments
                </p>
              </a>
              <a
                href="/tools/payment-reminder-generator"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-500/30 rounded-xl p-4 transition-all group"
              >
                <p className="text-white font-medium text-sm group-hover:text-teal-400 transition-colors">
                  Payment Reminder
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Remind clients about upcoming payments
                </p>
              </a>
            </div>
          </div>

          <div className="text-center">
            <p className="text-xs text-slate-500 max-w-2xl mx-auto">
              This tool generates payment receipt templates for Australian freelancers and sole traders.
              Receipts confirm payment has been received and should be issued promptly after receiving
              funds. For GST-registered businesses, receipts must show GST amounts and your ABN.
              Keep copies of all receipts for at least 5 years as required by the ATO.
            </p>
          </div>
        </>
      )}
    </div>
  );
}
