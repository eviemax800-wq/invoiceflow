'use client';

import { useState, useMemo, useCallback } from 'react';
import Link from 'next/link';

type ReminderTone = 'friendly' | 'professional' | 'firm' | 'final';

interface ToneConfig {
  key: ReminderTone;
  label: string;
  description: string;
  accent: string;
  bgClass: string;
  borderClass: string;
  textClass: string;
  badgeClass: string;
  range: string;
}

const TONE_CONFIGS: ToneConfig[] = [
  {
    key: 'friendly',
    label: 'Friendly',
    description: 'Just a gentle nudge...',
    accent: 'teal',
    bgClass: 'bg-teal-500/10',
    borderClass: 'border-teal-500/40',
    textClass: 'text-teal-400',
    badgeClass: 'bg-teal-500/20 text-teal-400',
    range: '1-7 days overdue',
  },
  {
    key: 'professional',
    label: 'Professional',
    description: 'Following up on...',
    accent: 'blue',
    bgClass: 'bg-blue-500/10',
    borderClass: 'border-blue-500/40',
    textClass: 'text-blue-400',
    badgeClass: 'bg-blue-500/20 text-blue-400',
    range: '7-14 days overdue',
  },
  {
    key: 'firm',
    label: 'Firm',
    description: 'This is now X days overdue...',
    accent: 'amber',
    bgClass: 'bg-amber-500/10',
    borderClass: 'border-amber-500/40',
    textClass: 'text-amber-400',
    badgeClass: 'bg-amber-500/20 text-amber-400',
    range: '14-30 days overdue',
  },
  {
    key: 'final',
    label: 'Final Notice',
    description: 'This requires immediate attention...',
    accent: 'rose',
    bgClass: 'bg-rose-500/10',
    borderClass: 'border-rose-500/40',
    textClass: 'text-rose-400',
    badgeClass: 'bg-rose-500/20 text-rose-400',
    range: '30+ days overdue',
  },
];

const TIPS: Record<ReminderTone, string> = {
  friendly:
    'At this stage, keep it casual. Most late payments are simply oversights — a friendly nudge is usually all it takes. Avoid sounding accusatory.',
  professional:
    'If the first reminder was ignored, be direct but polite. Restate the key details clearly. Consider calling as well — a quick phone call often resolves things faster than email.',
  firm:
    'At this stage, a phone call is often more effective than email. If you can\'t reach the client, this email sets a clear deadline. Document all communication in case you need it later.',
  final:
    'Before sending this, consider whether a phone call might resolve things. If this is your final written attempt, keep records of all prior reminders. You may need them for legal proceedings.',
};

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
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

function calculateDaysOverdue(dueDateStr: string): number {
  if (!dueDateStr) return 0;
  const dueDate = new Date(dueDateStr + 'T00:00:00');
  if (isNaN(dueDate.getTime())) return 0;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const diffMs = today.getTime() - dueDate.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  return Math.max(0, diffDays);
}

function getSuggestedTone(daysOverdue: number): ReminderTone {
  if (daysOverdue >= 30) return 'final';
  if (daysOverdue >= 14) return 'firm';
  if (daysOverdue >= 7) return 'professional';
  return 'friendly';
}

function calculateInterest(amount: number, daysOverdue: number, annualRate: number): number {
  if (amount <= 0 || daysOverdue <= 0) return 0;
  return (amount * (annualRate / 100) * daysOverdue) / 365;
}

function generateSubject(
  tone: ReminderTone,
  invoiceNumber: string,
  businessName: string,
  amount: string,
  daysOverdue: number
): string {
  const num = invoiceNumber || '[INVOICE_NUMBER]';
  const biz = businessName || '[YOUR_BUSINESS]';
  const amt = amount ? formatCurrency(parseFloat(amount)) : '[AMOUNT]';
  const days = daysOverdue > 0 ? daysOverdue.toString() : '[X]';

  switch (tone) {
    case 'friendly':
      return `Quick reminder — Invoice ${num} from ${biz}`;
    case 'professional':
      return `Payment reminder — Invoice ${num} (${amt}) now ${days} days overdue`;
    case 'firm':
      return `Overdue payment — Invoice ${num} (${amt}) — ${days} days past due`;
    case 'final':
      return `FINAL NOTICE — Invoice ${num} (${amt}) — ${days} days overdue`;
  }
}

function generateBody(
  tone: ReminderTone,
  clientName: string,
  businessName: string,
  invoiceNumber: string,
  amount: string,
  dueDate: string,
  daysOverdue: number,
  paymentMethod: string
): string {
  const client = clientName || '[CLIENT_NAME]';
  const biz = businessName || '[YOUR_BUSINESS]';
  const num = invoiceNumber || '[INVOICE_NUMBER]';
  const amt = amount ? formatCurrency(parseFloat(amount)) : '[AMOUNT]';
  const date = formatDateAU(dueDate);
  const days = daysOverdue > 0 ? daysOverdue.toString() : '[X]';
  const payment = paymentMethod || '[PAYMENT_METHOD]';

  switch (tone) {
    case 'friendly':
      return `Hi ${client},

Hope you're well! Just a quick reminder that invoice ${num} for ${amt} was due on ${date}. It's currently ${days} days past due.

If you've already sent the payment, please disregard this email — sometimes payments cross in the mail.

If not, you can make payment via ${payment}.

Happy to answer any questions!

Cheers,
${biz}`;

    case 'professional':
      return `Hi ${client},

I'm following up regarding invoice ${num} for ${amt}, which was due on ${date} and is now ${days} days past the due date.

I understand things can get busy, but I'd appreciate if you could arrange payment at your earliest convenience.

Payment can be made via ${payment}.

Please let me know if there are any issues or if you need a copy of the original invoice.

Best regards,
${biz}`;

    case 'firm':
      return `Hi ${client},

This is a follow-up regarding invoice ${num} for ${amt}, which was due on ${date} and is now ${days} days overdue.

As a small business, timely payments are essential to my operations. I would appreciate your prompt attention to this matter.

Please arrange payment via ${payment} within the next 7 days.

If there is a dispute or issue with this invoice, please contact me immediately so we can resolve it.

Regards,
${biz}`;

    case 'final':
      return `Dear ${client},

This is a final notice regarding invoice ${num} for ${amt}, originally due on ${date}. This invoice is now ${days} days overdue and remains unpaid despite previous reminders.

Under Australian law, I am entitled to charge interest on overdue amounts. If payment of ${amt} is not received within 7 days of this notice via ${payment}, I will need to consider further action to recover this debt, which may include:

- Engaging a debt collection agency
- Pursuing the matter through the relevant small claims tribunal
- Charging accrued interest on the outstanding amount

I would prefer to resolve this matter directly. Please arrange payment immediately or contact me to discuss.

Regards,
${biz}`;
  }
}

export default function PaymentReminderGenerator() {
  const [clientName, setClientName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [invoiceNumber, setInvoiceNumber] = useState('');
  const [invoiceAmount, setInvoiceAmount] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [manualDaysOverdue, setManualDaysOverdue] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [selectedTone, setSelectedTone] = useState<ReminderTone>('friendly');

  const [copiedSubject, setCopiedSubject] = useState(false);
  const [copiedBody, setCopiedBody] = useState(false);
  const [copiedBoth, setCopiedBoth] = useState(false);

  const autoCalculatedDays = useMemo(() => calculateDaysOverdue(dueDate), [dueDate]);

  const daysOverdue = useMemo(() => {
    if (manualDaysOverdue && parseInt(manualDaysOverdue) > 0) {
      return parseInt(manualDaysOverdue);
    }
    return autoCalculatedDays;
  }, [manualDaysOverdue, autoCalculatedDays]);

  const suggestedTone = useMemo(() => getSuggestedTone(daysOverdue), [daysOverdue]);

  const interest = useMemo(() => {
    const amt = parseFloat(invoiceAmount) || 0;
    return calculateInterest(amt, daysOverdue, 10);
  }, [invoiceAmount, daysOverdue]);

  const subject = useMemo(
    () => generateSubject(selectedTone, invoiceNumber, businessName, invoiceAmount, daysOverdue),
    [selectedTone, invoiceNumber, businessName, invoiceAmount, daysOverdue]
  );

  const body = useMemo(
    () =>
      generateBody(
        selectedTone,
        clientName,
        businessName,
        invoiceNumber,
        invoiceAmount,
        dueDate,
        daysOverdue,
        paymentMethod
      ),
    [selectedTone, clientName, businessName, invoiceNumber, invoiceAmount, dueDate, daysOverdue, paymentMethod]
  );

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
    'w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500/40 focus:border-teal-500/40 transition-all';
  const labelClass = 'block text-sm font-medium text-slate-300 mb-1.5';

  const hasMinimumInput = clientName || businessName || invoiceNumber || invoiceAmount;

  return (
    <div className="space-y-8">
      {/* Inputs */}
      <div className="glass rounded-2xl p-6 sm:p-8 space-y-6">
        <h2 className="text-xl font-bold text-white heading-font">Invoice Details</h2>

        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label className={labelClass}>Client Name</label>
            <input
              type="text"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              className={inputClass}
              placeholder="Acme Corp or John Smith"
            />
          </div>
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
            <label className={labelClass}>Invoice Amount ($)</label>
            <input
              type="number"
              value={invoiceAmount}
              onChange={(e) => setInvoiceAmount(e.target.value)}
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
              onChange={(e) => {
                setDueDate(e.target.value);
                setManualDaysOverdue('');
              }}
              className={inputClass}
            />
            {dueDate && autoCalculatedDays > 0 && (
              <p className="text-xs text-amber-400 mt-1.5">
                {autoCalculatedDays} days overdue (auto-calculated)
              </p>
            )}
            {dueDate && autoCalculatedDays === 0 && (
              <p className="text-xs text-teal-400 mt-1.5">
                Not yet overdue
              </p>
            )}
          </div>
          <div>
            <label className={labelClass}>Days Overdue (manual override)</label>
            <input
              type="number"
              value={manualDaysOverdue}
              onChange={(e) => setManualDaysOverdue(e.target.value)}
              className={inputClass}
              placeholder={autoCalculatedDays > 0 ? autoCalculatedDays.toString() : 'e.g., 14'}
              min="0"
            />
            <p className="text-xs text-slate-500 mt-1">Leave blank to auto-calculate from due date</p>
          </div>
        </div>

        <div>
          <label className={labelClass}>Payment Method / Instructions</label>
          <input
            type="text"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className={inputClass}
            placeholder="bank transfer to BSB 012-345 / Account 1234 5678, or via the payment link in the original invoice"
          />
        </div>
      </div>

      {/* Tone Selection */}
      <div className="glass rounded-2xl p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <h2 className="text-xl font-bold text-white heading-font">Reminder Tone</h2>
          {daysOverdue > 0 && (
            <span className="text-xs text-slate-400">
              Suggested:{' '}
              <span className={TONE_CONFIGS.find((t) => t.key === suggestedTone)?.textClass}>
                {TONE_CONFIGS.find((t) => t.key === suggestedTone)?.label}
              </span>{' '}
              for {daysOverdue} days overdue
            </span>
          )}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {TONE_CONFIGS.map((tone) => {
            const isSelected = selectedTone === tone.key;
            const isSuggested = suggestedTone === tone.key && daysOverdue > 0;

            return (
              <button
                key={tone.key}
                onClick={() => setSelectedTone(tone.key)}
                className={`relative text-left p-4 rounded-xl border transition-all cursor-pointer ${
                  isSelected
                    ? `${tone.bgClass} ${tone.borderClass}`
                    : 'bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/[0.07]'
                }`}
              >
                {isSuggested && !isSelected && (
                  <div className="absolute -top-2 -right-2">
                    <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded-full ${tone.badgeClass}`}>
                      Suggested
                    </span>
                  </div>
                )}
                {isSuggested && isSelected && (
                  <div className="absolute -top-2 -right-2">
                    <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded-full ${tone.badgeClass}`}>
                      Suggested
                    </span>
                  </div>
                )}
                <p className={`font-semibold text-sm mb-1 ${isSelected ? tone.textClass : 'text-white'}`}>
                  {tone.label}
                </p>
                <p className="text-xs text-slate-500 leading-tight">{tone.description}</p>
                <p className={`text-[10px] mt-2 ${isSelected ? tone.textClass + '/70' : 'text-slate-600'}`}>
                  {tone.range}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Email Preview */}
      <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-[1px]">
        <div className="rounded-2xl bg-slate-950/80 p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <h2 className="text-xl font-bold text-white heading-font">Email Preview</h2>
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleCopy(subject, setCopiedSubject)}
                className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all"
              >
                {copiedSubject ? (
                  <span className="text-teal-400">Copied!</span>
                ) : (
                  'Copy Subject'
                )}
              </button>
              <button
                onClick={() => handleCopy(body, setCopiedBody)}
                className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all"
              >
                {copiedBody ? (
                  <span className="text-teal-400">Copied!</span>
                ) : (
                  'Copy Email'
                )}
              </button>
              <button
                onClick={() =>
                  handleCopy(`Subject: ${subject}\n\n${body}`, setCopiedBoth)
                }
                className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-gradient-to-r from-teal-500/20 to-blue-500/20 hover:from-teal-500/30 hover:to-blue-500/30 border border-teal-500/30 text-teal-400 hover:text-teal-300 transition-all"
              >
                {copiedBoth ? (
                  <span className="text-teal-400">Copied!</span>
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
          <div className={`rounded-xl p-4 ${
            TONE_CONFIGS.find((t) => t.key === selectedTone)?.bgClass
          } border ${
            selectedTone === 'friendly' ? 'border-teal-500/20' :
            selectedTone === 'professional' ? 'border-blue-500/20' :
            selectedTone === 'firm' ? 'border-amber-500/20' :
            'border-rose-500/20'
          }`}>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1">
              Tip — {TONE_CONFIGS.find((t) => t.key === selectedTone)?.label} Stage
            </p>
            <p className="text-sm text-slate-300">{TIPS[selectedTone]}</p>
          </div>

          {/* Interest Calculation */}
          {daysOverdue > 0 && parseFloat(invoiceAmount) > 0 && (
            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">
                    Overdue Interest Accrued
                  </p>
                  <p className="text-lg font-semibold text-white">
                    {formatCurrency(interest)}
                    <span className="text-xs text-slate-500 ml-2">
                      at 10% p.a. over {daysOverdue} days
                    </span>
                  </p>
                </div>
                <Link
                  href="/tools/late-payment-calculator"
                  className="text-xs text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors"
                >
                  Calculate exact interest
                </Link>
              </div>
              <p className="text-xs text-slate-500 mt-2">
                Under Australian law, you may be entitled to charge interest on overdue amounts if
                your contract or terms include a late payment clause. The standard penalty interest
                rate in Victoria is set by the Penalty Interest Rates Act 1983.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Quick Links */}
      {hasMinimumInput && (
        <div className="glass rounded-2xl p-6 space-y-3">
          <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wide">
            Related Resources
          </h3>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/tools/late-payment-calculator"
              className="text-sm px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-all"
            >
              Late Payment Interest Calculator
            </Link>
            <Link
              href="/blog/how-to-chase-overdue-invoices-australia"
              className="text-sm px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-all"
            >
              How to Chase Overdue Invoices (Guide)
            </Link>
            <Link
              href="/tools/invoice-generator"
              className="text-sm px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-all"
            >
              Free Invoice Generator
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
