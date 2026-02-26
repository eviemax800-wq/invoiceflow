'use client';

import { useState, useMemo, useCallback } from 'react';
import Link from 'next/link';

type EmailType = 'new-invoice' | 'overdue-7' | 'overdue-14' | 'final-notice' | 'thank-you' | 'adjustment';
type Tone = 'professional' | 'friendly' | 'firm';

interface EmailTypeConfig {
  key: EmailType;
  label: string;
  description: string;
  icon: string;
}

const EMAIL_TYPES: EmailTypeConfig[] = [
  {
    key: 'new-invoice',
    label: 'New Invoice',
    description: 'Sending a fresh invoice for completed work',
    icon: '📄',
  },
  {
    key: 'overdue-7',
    label: 'Overdue Reminder (7 days)',
    description: 'First gentle reminder — 1-7 days past due',
    icon: '🔔',
  },
  {
    key: 'overdue-14',
    label: 'Second Follow-up (14 days)',
    description: 'Firmer follow-up — 7-14 days overdue',
    icon: '⏰',
  },
  {
    key: 'final-notice',
    label: 'Final Notice (30+ days)',
    description: 'Last email before escalation',
    icon: '⚠️',
  },
  {
    key: 'thank-you',
    label: 'Thank You for Payment',
    description: 'Confirm receipt and maintain goodwill',
    icon: '✅',
  },
  {
    key: 'adjustment',
    label: 'Invoice Adjustment',
    description: 'Correcting an amount or issuing a revised invoice',
    icon: '✏️',
  },
];

const TONE_OPTIONS: { key: Tone; label: string; description: string }[] = [
  { key: 'professional', label: 'Professional', description: 'Clear and business-like' },
  { key: 'friendly', label: 'Friendly', description: 'Warm and approachable' },
  { key: 'firm', label: 'Firm', description: 'Direct and assertive' },
];

function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

function formatDateAU(dateStr: string): string {
  if (!dateStr) return '[DUE_DATE]';
  const date = new Date(dateStr + 'T00:00:00');
  if (isNaN(date.getTime())) return '[DUE_DATE]';
  const day = date.getDate().toString().padStart(2, '0');
  const month = date.toLocaleDateString('en-AU', { month: 'long' });
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
}

function generateSubject(
  emailType: EmailType,
  tone: Tone,
  businessName: string,
  clientName: string,
  invoiceNumber: string,
  amount: string,
): string {
  const biz = businessName || '[Your Business]';
  const num = invoiceNumber || '[INV-000]';
  const amt = amount ? formatCurrency(parseFloat(amount)) : '[Amount]';

  switch (emailType) {
    case 'new-invoice':
      if (tone === 'friendly') return `Invoice ${num} from ${biz} — thanks for your business!`;
      return `Invoice ${num} from ${biz} — ${amt} due`;

    case 'overdue-7':
      if (tone === 'friendly') return `Quick reminder — Invoice ${num} from ${biz}`;
      if (tone === 'firm') return `Payment overdue — Invoice ${num} (${amt})`;
      return `Payment reminder — Invoice ${num} from ${biz}`;

    case 'overdue-14':
      if (tone === 'friendly') return `Following up — Invoice ${num} is now overdue`;
      if (tone === 'firm') return `Second notice — Invoice ${num} (${amt}) requires immediate payment`;
      return `Second reminder — Invoice ${num} from ${biz} (${amt})`;

    case 'final-notice':
      return `FINAL NOTICE — Invoice ${num} (${amt}) — Immediate payment required`;

    case 'thank-you':
      if (tone === 'friendly') return `Payment received — thanks so much! (Invoice ${num})`;
      return `Payment confirmation — Invoice ${num} from ${biz}`;

    case 'adjustment':
      if (tone === 'friendly') return `Updated invoice — ${num} from ${biz} (revised)`;
      return `Invoice adjustment — Revised Invoice ${num} from ${biz}`;
  }
}

function generateBody(
  emailType: EmailType,
  tone: Tone,
  businessName: string,
  clientName: string,
  invoiceNumber: string,
  amount: string,
  dueDate: string,
  paymentTerms: string,
  bankDetails: string,
): string {
  const client = clientName || '[Client Name]';
  const biz = businessName || '[Your Business Name]';
  const num = invoiceNumber || '[INV-000]';
  const amt = amount ? formatCurrency(parseFloat(amount)) : '[Amount]';
  const date = formatDateAU(dueDate);
  const terms = paymentTerms || '14 days from invoice date';
  const bank = bankDetails || '[BSB: XXX-XXX / Account: XXXX XXXX]';

  const greeting = tone === 'friendly' ? `Hi ${client},` : tone === 'firm' ? `Dear ${client},` : `Hi ${client},`;

  switch (emailType) {
    case 'new-invoice':
      if (tone === 'friendly') {
        return `${greeting}

Hope you're doing well! Please find attached invoice ${num} for ${amt} (including GST where applicable).

Here are the key details:

  Invoice Number: ${num}
  Amount Due: ${amt}
  Due Date: ${date}
  Payment Terms: ${terms}

You can make payment via bank transfer to:
${bank}

If you have any questions about this invoice, just reply to this email — happy to help.

Thanks for your business — it's a pleasure working with you!

Warm regards,
${biz}`;
      }
      if (tone === 'firm') {
        return `${greeting}

Please find attached invoice ${num} for ${amt} (including GST where applicable) in respect of services rendered.

Invoice details:

  Invoice Number: ${num}
  Amount Due: ${amt}
  Due Date: ${date}
  Payment Terms: ${terms}

Payment is to be made via bank transfer to:
${bank}

Please ensure payment is received by the due date. Late payments may incur interest in accordance with our agreed terms.

If you have any queries regarding this invoice, please contact me at your earliest convenience.

Regards,
${biz}`;
      }
      return `${greeting}

Please find attached invoice ${num} for ${amt} (including GST where applicable).

Here are the details for your records:

  Invoice Number: ${num}
  Amount Due: ${amt}
  Due Date: ${date}
  Payment Terms: ${terms}

Payment can be made via bank transfer to:
${bank}

If you have any questions about this invoice or need any additional information, please don't hesitate to reach out.

Thank you for your business.

Kind regards,
${biz}`;

    case 'overdue-7':
      if (tone === 'friendly') {
        return `${greeting}

Hope you're well! Just a quick heads-up that invoice ${num} for ${amt} was due on ${date} and is now a few days past due.

If you've already sent the payment, please disregard this email — sometimes transfers take a day or two to come through.

If not, you can make payment via bank transfer to:
${bank}

No stress at all — just wanted to make sure it hadn't slipped through the cracks. Let me know if you have any questions!

Cheers,
${biz}`;
      }
      if (tone === 'firm') {
        return `${greeting}

I'm writing to advise that invoice ${num} for ${amt} was due on ${date} and remains unpaid.

  Invoice Number: ${num}
  Amount Due: ${amt}
  Original Due Date: ${date}

Please arrange payment at your earliest convenience via bank transfer to:
${bank}

If there is an issue with this invoice, please contact me immediately so we can resolve it.

Regards,
${biz}`;
      }
      return `${greeting}

I'm writing to follow up on invoice ${num} for ${amt}, which was due on ${date}.

I understand things can get busy, so this is just a friendly reminder. If payment has already been arranged, thank you — please disregard this email.

If not, payment can be made via bank transfer to:
${bank}

Please let me know if you need a copy of the original invoice or have any questions.

Best regards,
${biz}`;

    case 'overdue-14':
      if (tone === 'friendly') {
        return `${greeting}

I hope this finds you well. I'm following up again regarding invoice ${num} for ${amt}, which was originally due on ${date} and is now over two weeks past due.

I know things can get hectic, but I'd really appreciate it if you could take a moment to arrange this payment when you get a chance.

Payment details:
${bank}

If there's a problem with the invoice or if you'd like to discuss payment arrangements, I'm happy to chat — just reply to this email.

Thanks so much,
${biz}`;
      }
      if (tone === 'firm') {
        return `${greeting}

This is my second follow-up regarding invoice ${num} for ${amt}, which was due on ${date} and is now significantly overdue.

  Invoice Number: ${num}
  Amount Due: ${amt}
  Original Due Date: ${date}
  Status: 14+ days overdue

As a small business, timely payments are essential to my operations. I require payment within the next 7 days via bank transfer to:
${bank}

If there is a dispute regarding this invoice, please contact me immediately. If I do not receive payment or a response within 7 days, I will need to consider further action to recover this amount.

Regards,
${biz}`;
      }
      return `${greeting}

I'm following up for the second time regarding invoice ${num} for ${amt}, which was due on ${date}.

I have not yet received payment or a response to my previous reminder. I would appreciate it if you could arrange payment at your earliest convenience.

Payment can be made via bank transfer to:
${bank}

If there is an issue with this invoice or you would like to discuss a payment arrangement, please contact me as soon as possible.

Best regards,
${biz}`;

    case 'final-notice':
      // Final notice always uses firm tone regardless of selection
      return `Dear ${client},

This is a final notice regarding invoice ${num} for ${amt}, originally due on ${date}. Despite previous reminders, this invoice remains unpaid and is now more than 30 days overdue.

  Invoice Number: ${num}
  Amount Due: ${amt}
  Original Due Date: ${date}
  Status: 30+ days overdue

Under Australian law, I am entitled to charge interest on overdue amounts. If full payment of ${amt} is not received within 7 days of this notice, I will need to consider further action to recover this debt, which may include:

  - Engaging a licensed debt collection agency
  - Filing a claim with the relevant small claims tribunal (VCAT, NCAT, QCAT, etc.)
  - Charging accrued interest on the outstanding balance
  - Issuing a formal letter of demand

Payment must be made via bank transfer to:
${bank}

I would strongly prefer to resolve this matter directly. Please arrange payment immediately or contact me to discuss a resolution.

Regards,
${biz}`;

    case 'thank-you':
      if (tone === 'friendly') {
        return `${greeting}

Just a quick note to say thanks — I've received your payment of ${amt} for invoice ${num}. Really appreciate the prompt payment!

It's been great working with you, and I look forward to continuing our collaboration. If you need anything else, don't hesitate to reach out.

Have a great day!

Cheers,
${biz}`;
      }
      if (tone === 'firm') {
        return `${greeting}

I confirm receipt of your payment of ${amt} for invoice ${num}. This invoice is now marked as paid in full.

A receipt has been attached for your records. Please retain this for your tax and accounting purposes.

Thank you for your business.

Regards,
${biz}`;
      }
      return `${greeting}

Thank you for your payment of ${amt} for invoice ${num}. I can confirm this has been received and the invoice is now marked as paid.

A payment receipt is attached for your records.

Thank you for your business — I look forward to working with you again.

Kind regards,
${biz}`;

    case 'adjustment':
      if (tone === 'friendly') {
        return `${greeting}

Hope you're well! I'm reaching out because I need to make an adjustment to invoice ${num}.

The revised amount is ${amt} (including GST where applicable). I've attached the updated invoice for your records.

  Original Invoice: ${num}
  Revised Amount: ${amt}
  Due Date: ${date}
  Payment Terms: ${terms}

If the original invoice hasn't been paid yet, please disregard it and use the revised invoice attached to this email. If you've already made payment on the original amount, I'll sort out the difference — no action needed from your end right now.

Payment can be made to:
${bank}

Sorry for any inconvenience, and thanks for your understanding! Let me know if you have any questions.

Cheers,
${biz}`;
      }
      if (tone === 'firm') {
        return `${greeting}

I am writing to advise of an adjustment to invoice ${num}. Please find the revised invoice attached.

  Original Invoice: ${num}
  Revised Amount: ${amt}
  Due Date: ${date}
  Payment Terms: ${terms}

Please disregard the original invoice and process payment based on the revised invoice attached. If payment has already been made on the original amount, I will reconcile the difference and advise accordingly.

Payment is to be made via bank transfer to:
${bank}

Please contact me if you require any clarification.

Regards,
${biz}`;
      }
      return `${greeting}

I'm writing to let you know about an adjustment to invoice ${num}. Please find the revised invoice attached to this email.

Updated details:

  Original Invoice: ${num}
  Revised Amount: ${amt}
  Due Date: ${date}
  Payment Terms: ${terms}

Please disregard the original invoice and use the revised version for payment. If you have already paid the original amount, I will reconcile the difference and be in touch.

Payment can be made via bank transfer to:
${bank}

Apologies for any inconvenience. Please don't hesitate to reach out if you have any questions.

Kind regards,
${biz}`;
  }
}

function getTipForType(emailType: EmailType): { title: string; content: string } {
  switch (emailType) {
    case 'new-invoice':
      return {
        title: 'New Invoice Tips',
        content:
          'Send your invoice the same day you deliver the work. Attach it as a PDF with a clear filename. Include a payment link if possible — clients are 3x more likely to pay on time when they can click to pay directly.',
      };
    case 'overdue-7':
      return {
        title: 'First Reminder Tips',
        content:
          'Keep it light and assume it was an oversight. Most late payments at this stage are simply forgotten — a friendly nudge is usually all it takes. Avoid accusatory language and always give them an easy way to pay.',
      };
    case 'overdue-14':
      return {
        title: 'Second Follow-up Tips',
        content:
          'At this stage, consider a phone call as well. A quick 2-minute call is often more effective than another email. If emailing, be direct about the impact on your business and set a clear deadline for payment.',
      };
    case 'final-notice':
      return {
        title: 'Final Notice Tips',
        content:
          'Document everything. Keep copies of all prior reminders. Before sending, try one last phone call. If this email doesn\'t resolve it, your next steps are a formal letter of demand, small claims tribunal, or a debt collection agency.',
      };
    case 'thank-you':
      return {
        title: 'Thank-You Email Tips',
        content:
          'Always confirm payment receipt — it builds trust and professionalism. This is also a great opportunity to mention upcoming work or ask for a testimonial. Positive touchpoints strengthen the client relationship.',
      };
    case 'adjustment':
      return {
        title: 'Adjustment Email Tips',
        content:
          'Be transparent about what changed and why. Clearly state whether the client needs to take any action. If you\'re reducing the amount, lead with the good news. If increasing, explain the reason before stating the new figure.',
      };
  }
}

export default function InvoiceEmailTemplate() {
  const [emailType, setEmailType] = useState<EmailType>('new-invoice');
  const [tone, setTone] = useState<Tone>('professional');
  const [businessName, setBusinessName] = useState('');
  const [clientName, setClientName] = useState('');
  const [invoiceNumber, setInvoiceNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [paymentTerms, setPaymentTerms] = useState('');
  const [bankDetails, setBankDetails] = useState('');

  const [copiedSubject, setCopiedSubject] = useState(false);
  const [copiedBody, setCopiedBody] = useState(false);
  const [copiedBoth, setCopiedBoth] = useState(false);

  const subject = useMemo(
    () => generateSubject(emailType, tone, businessName, clientName, invoiceNumber, amount),
    [emailType, tone, businessName, clientName, invoiceNumber, amount]
  );

  const body = useMemo(
    () => generateBody(emailType, tone, businessName, clientName, invoiceNumber, amount, dueDate, paymentTerms, bankDetails),
    [emailType, tone, businessName, clientName, invoiceNumber, amount, dueDate, paymentTerms, bankDetails]
  );

  const tip = useMemo(() => getTipForType(emailType), [emailType]);

  const handleCopy = useCallback(
    (text: string, setter: (v: boolean) => void) => {
      navigator.clipboard.writeText(text).then(() => {
        setter(true);
        setTimeout(() => setter(false), 2000);
      });
    },
    []
  );

  const inputClass =
    'w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/40 focus:border-sky-500/40 transition-all';
  const labelClass = 'block text-sm font-medium text-slate-300 mb-1.5';

  return (
    <div className="space-y-8">
      {/* Email Type Selection */}
      <div className="glass rounded-2xl p-6 sm:p-8 space-y-6">
        <h2 className="text-xl font-bold text-white heading-font">Email Type</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {EMAIL_TYPES.map((type) => {
            const isSelected = emailType === type.key;
            return (
              <button
                key={type.key}
                onClick={() => setEmailType(type.key)}
                className={`text-left p-4 rounded-xl border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-sky-500/10 border-sky-500/40'
                    : 'bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/[0.07]'
                }`}
              >
                <div className="text-lg mb-1">{type.icon}</div>
                <p className={`font-semibold text-sm mb-1 ${isSelected ? 'text-sky-400' : 'text-white'}`}>
                  {type.label}
                </p>
                <p className="text-xs text-slate-500 leading-tight">{type.description}</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Invoice Details */}
      <div className="glass rounded-2xl p-6 sm:p-8 space-y-6">
        <h2 className="text-xl font-bold text-white heading-font">Invoice Details</h2>

        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label className={labelClass}>Your Business Name</label>
            <input
              type="text"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              className={inputClass}
              placeholder="Smith Design Studio"
            />
          </div>
          <div>
            <label className={labelClass}>Client Name</label>
            <input
              type="text"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              className={inputClass}
              placeholder="Acme Corp or Jane Smith"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label className={labelClass}>Invoice Number</label>
            <input
              type="text"
              value={invoiceNumber}
              onChange={(e) => setInvoiceNumber(e.target.value)}
              className={inputClass}
              placeholder="INV-0042"
            />
          </div>
          <div>
            <label className={labelClass}>Amount (AUD)</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className={inputClass}
              placeholder="2500.00"
              min="0"
              step="0.01"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label className={labelClass}>Due Date</label>
            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className={inputClass}
            />
          </div>
          <div>
            <label className={labelClass}>Payment Terms</label>
            <input
              type="text"
              value={paymentTerms}
              onChange={(e) => setPaymentTerms(e.target.value)}
              className={inputClass}
              placeholder="14 days from invoice date"
            />
            <p className="text-xs text-slate-500 mt-1">Leave blank for default (14 days)</p>
          </div>
        </div>

        <div>
          <label className={labelClass}>Bank / Payment Details</label>
          <input
            type="text"
            value={bankDetails}
            onChange={(e) => setBankDetails(e.target.value)}
            className={inputClass}
            placeholder="BSB: 012-345 / Account: 1234 5678 / Account Name: Smith Design Studio"
          />
          <p className="text-xs text-slate-500 mt-1">
            Include BSB, account number, and account name — or a payment link
          </p>
        </div>
      </div>

      {/* Tone Selection */}
      <div className="glass rounded-2xl p-6 sm:p-8 space-y-6">
        <h2 className="text-xl font-bold text-white heading-font">Tone</h2>
        {emailType === 'final-notice' && (
          <p className="text-xs text-amber-400">
            Final notice emails always use a firm, formal tone regardless of selection.
          </p>
        )}
        <div className="grid grid-cols-3 gap-3">
          {TONE_OPTIONS.map((t) => {
            const isSelected = tone === t.key;
            const isDisabled = emailType === 'final-notice';
            return (
              <button
                key={t.key}
                onClick={() => !isDisabled && setTone(t.key)}
                className={`text-left p-4 rounded-xl border transition-all ${
                  isDisabled
                    ? 'opacity-40 cursor-not-allowed bg-white/5 border-white/10'
                    : isSelected
                    ? 'bg-sky-500/10 border-sky-500/40 cursor-pointer'
                    : 'bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/[0.07] cursor-pointer'
                }`}
              >
                <p className={`font-semibold text-sm mb-1 ${isSelected && !isDisabled ? 'text-sky-400' : 'text-white'}`}>
                  {t.label}
                </p>
                <p className="text-xs text-slate-500 leading-tight">{t.description}</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Email Preview */}
      <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-[1px]">
        <div className="rounded-2xl bg-slate-950/80 p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <h2 className="text-xl font-bold text-white heading-font">Generated Email</h2>
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleCopy(subject, setCopiedSubject)}
                className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all"
              >
                {copiedSubject ? (
                  <span className="text-sky-400">Copied!</span>
                ) : (
                  'Copy Subject'
                )}
              </button>
              <button
                onClick={() => handleCopy(body, setCopiedBody)}
                className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all"
              >
                {copiedBody ? (
                  <span className="text-sky-400">Copied!</span>
                ) : (
                  'Copy Email'
                )}
              </button>
              <button
                onClick={() =>
                  handleCopy(`Subject: ${subject}\n\n${body}`, setCopiedBoth)
                }
                className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-gradient-to-r from-sky-500/20 to-blue-500/20 hover:from-sky-500/30 hover:to-blue-500/30 border border-sky-500/30 text-sky-400 hover:text-sky-300 transition-all"
              >
                {copiedBoth ? (
                  <span className="text-sky-400">Copied!</span>
                ) : (
                  'Copy Both'
                )}
              </button>
            </div>
          </div>

          {/* Email Container */}
          <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
            {/* Email Header */}
            <div className="border-b border-white/10 px-5 py-3 space-y-2">
              <div className="flex items-start gap-3">
                <span className="text-xs text-slate-500 w-16 pt-0.5 shrink-0">To:</span>
                <span className="text-sm text-slate-300">{clientName || 'client@example.com'}</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xs text-slate-500 w-16 pt-0.5 shrink-0">Subject:</span>
                <span className="text-sm text-white font-medium">{subject}</span>
              </div>
            </div>

            {/* Email Body */}
            <div className="px-5 py-5">
              <pre className="text-sm text-slate-300 whitespace-pre-wrap font-sans leading-relaxed">
                {body}
              </pre>
            </div>
          </div>

          {/* Tip */}
          <div className="rounded-xl p-4 bg-sky-500/10 border border-sky-500/20">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1">
              {tip.title}
            </p>
            <p className="text-sm text-slate-300">{tip.content}</p>
          </div>
        </div>
      </div>

      {/* Related Tools */}
      <div className="glass rounded-2xl p-6 space-y-3">
        <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wide">
          Related Tools
        </h3>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/tools/payment-reminder-generator"
            className="text-sm px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-all"
          >
            Payment Reminder Generator
          </Link>
          <Link
            href="/tools/overdue-follow-up"
            className="text-sm px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-all"
          >
            Overdue Follow-Up Sequence
          </Link>
          <Link
            href="/tools/invoice-generator"
            className="text-sm px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-all"
          >
            Free Invoice Generator
          </Link>
          <Link
            href="/tools/receipt-generator"
            className="text-sm px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-all"
          >
            Receipt Generator
          </Link>
        </div>
      </div>
    </div>
  );
}
