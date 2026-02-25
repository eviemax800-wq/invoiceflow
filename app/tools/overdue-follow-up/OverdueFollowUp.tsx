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

function calculateDaysOverdue(dueDateStr: string): number {
  if (!dueDateStr) return 0;
  const dueDate = new Date(dueDateStr + 'T00:00:00');
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const diffMs = today.getTime() - dueDate.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  return Math.max(0, diffDays);
}

function getToneFromDays(days: number): Tone {
  if (days <= 7) return 'friendly';
  if (days <= 21) return 'firm';
  if (days <= 45) return 'formal';
  return 'final';
}

/* ---- Types ---- */

type Tone = 'friendly' | 'firm' | 'formal' | 'final';
type CommMethod = 'email' | 'letter';
type PaymentTerms = '7' | '14' | '30' | '60';

interface ToneOption {
  key: Tone;
  label: string;
  description: string;
  color: string;
  borderColor: string;
  bgColor: string;
}

const TONE_OPTIONS: ToneOption[] = [
  {
    key: 'friendly',
    label: 'Friendly Reminder',
    description: '1-7 days overdue',
    color: 'text-teal-400',
    borderColor: 'border-teal-500/50',
    bgColor: 'bg-teal-500/10',
  },
  {
    key: 'firm',
    label: 'Firm Follow-Up',
    description: '8-21 days overdue',
    color: 'text-amber-400',
    borderColor: 'border-amber-500/50',
    bgColor: 'bg-amber-500/10',
  },
  {
    key: 'formal',
    label: 'Formal Notice',
    description: '22-45 days overdue',
    color: 'text-orange-400',
    borderColor: 'border-orange-500/50',
    bgColor: 'bg-orange-500/10',
  },
  {
    key: 'final',
    label: 'Final Demand',
    description: '46+ days overdue',
    color: 'text-rose-400',
    borderColor: 'border-rose-500/50',
    bgColor: 'bg-rose-500/10',
  },
];

const PAYMENT_TERMS_OPTIONS: { value: PaymentTerms; label: string }[] = [
  { value: '7', label: '7 days' },
  { value: '14', label: '14 days' },
  { value: '30', label: '30 days' },
  { value: '60', label: '60 days' },
];

/* ---- Component ---- */

export default function OverdueFollowUp() {
  // Inputs
  const [businessName, setBusinessName] = useState('');
  const [yourName, setYourName] = useState('');
  const [clientName, setClientName] = useState('');
  const [invoiceNumber, setInvoiceNumber] = useState('');
  const [invoiceAmount, setInvoiceAmount] = useState<number | ''>('');
  const [dueDate, setDueDate] = useState('');
  const [daysOverdueManual, setDaysOverdueManual] = useState<number | ''>('');
  const [useManualDays, setUseManualDays] = useState(false);
  const [paymentTerms, setPaymentTerms] = useState<PaymentTerms>('14');
  const [includeInterest, setIncludeInterest] = useState(false);
  const [interestRate, setInterestRate] = useState<number>(2);
  const [tone, setTone] = useState<Tone>('friendly');
  const [commMethod, setCommMethod] = useState<CommMethod>('email');

  // UI
  const [copied, setCopied] = useState(false);
  const [generated, setGenerated] = useState(false);

  // Calculated days overdue
  const calculatedDaysOverdue = useMemo(() => {
    return calculateDaysOverdue(dueDate);
  }, [dueDate]);

  const daysOverdue = useMemo(() => {
    if (useManualDays && daysOverdueManual !== '') return daysOverdueManual;
    return calculatedDaysOverdue;
  }, [useManualDays, daysOverdueManual, calculatedDaysOverdue]);

  // Auto-select tone when days overdue changes (unless user has manually selected)
  const [toneAutoSelected, setToneAutoSelected] = useState(true);

  const effectiveTone = useMemo(() => {
    if (toneAutoSelected && daysOverdue > 0) {
      return getToneFromDays(daysOverdue);
    }
    return tone;
  }, [toneAutoSelected, daysOverdue, tone]);

  // Interest calculation
  const interestAmount = useMemo(() => {
    if (!includeInterest || !invoiceAmount || daysOverdue <= 0) return 0;
    return (Number(invoiceAmount) * (interestRate / 100) * daysOverdue) / 365;
  }, [includeInterest, invoiceAmount, interestRate, daysOverdue]);

  const totalOwing = useMemo(() => {
    const base = Number(invoiceAmount) || 0;
    return base + interestAmount;
  }, [invoiceAmount, interestAmount]);

  // Generate the email/letter content
  const generatedContent = useMemo(() => {
    const amount = formatCurrency(Number(invoiceAmount) || 0);
    const dueDateFormatted = formatDateAU(dueDate);
    const days = daysOverdue;
    const terms = `${paymentTerms}-day`;
    const interest = formatCurrency(interestAmount);
    const total = formatCurrency(totalOwing);
    const rate = interestRate;
    const inv = invoiceNumber || '[Invoice Number]';
    const client = clientName || '[Client Name]';
    const name = yourName || '[Your Name]';
    const business = businessName || '[Your Business]';
    const isLetter = commMethod === 'letter';

    let subject = '';
    let body = '';

    switch (effectiveTone) {
      case 'friendly':
        subject = `Friendly reminder — Invoice ${inv} due ${dueDateFormatted}`;
        if (isLetter) {
          body = `Dear ${client},

I hope this letter finds you well.

I am writing as a quick reminder that Invoice ${inv} for ${amount} was due on ${dueDateFormatted}. I am sure it has just slipped through — would you be able to arrange payment when you get a chance?

I am happy to resend the invoice or provide any additional details if needed.

Thank you for your time.

Kind regards,
${name}
${business}`;
        } else {
          body = `Hi ${client},

Hope you're well. Just a quick reminder that Invoice ${inv} for ${amount} was due on ${dueDateFormatted}. I'm sure it's just slipped through — would you be able to arrange payment when you get a chance?

Happy to resend the invoice if needed.

Thanks,
${name}`;
        }
        break;

      case 'firm':
        subject = `Follow-up — Invoice ${inv} now ${days} days overdue`;
        if (isLetter) {
          body = `Dear ${client},

I am following up on Invoice ${inv} for ${amount}, which was due on ${dueDateFormatted} and is now ${days} days overdue.

As per our agreed ${terms} payment terms, I would appreciate if you could arrange payment at your earliest convenience.

If there is an issue with the invoice or if you would like to discuss a payment arrangement, please let me know and I will be happy to work with you.

Thank you for your prompt attention to this matter.

Regards,
${name}
${business}`;
        } else {
          body = `Hi ${client},

I'm following up on Invoice ${inv} for ${amount}, which was due on ${dueDateFormatted} and is now ${days} days overdue.

As per our agreed ${terms} payment terms, I'd appreciate if you could arrange payment at your earliest convenience.

If there's an issue with the invoice or if you'd like to discuss a payment arrangement, please let me know.

Thanks,
${name}
${business}`;
        }
        break;

      case 'formal': {
        subject = `Formal notice — Invoice ${inv} overdue by ${days} days`;
        const interestClause = includeInterest
          ? `\n\nPlease note that late payment interest of ${rate}% per month applies to overdue amounts, as outlined in our original agreement. The current interest accrued is ${interest}.`
          : '';
        if (isLetter) {
          body = `Dear ${client},

This is a formal notice regarding Invoice ${inv} for ${amount}, which was due on ${dueDateFormatted} with ${terms} payment terms. This invoice is now ${days} days overdue.${interestClause}

I request that payment be made within 7 business days of this notice. If you are experiencing difficulties, please contact me immediately to arrange a payment plan.

Failure to respond may result in further collection action.

Regards,
${name}
${business}`;
        } else {
          body = `Dear ${client},

This is a formal notice regarding Invoice ${inv} for ${amount}, which was due on ${dueDateFormatted} with ${terms} payment terms. This invoice is now ${days} days overdue.${interestClause}

I request that payment be made within 7 business days of this notice. If you are experiencing difficulties, please contact me immediately to arrange a payment plan.

Failure to respond may result in further collection action.

Regards,
${name}
${business}`;
        }
        break;
      }

      case 'final': {
        subject = `FINAL DEMAND — Invoice ${inv} — Immediate payment required`;
        const interestFinalClause = includeInterest
          ? `\n\nIncluding late payment interest at ${rate}% per month, the total amount now owing is ${total}.`
          : '';
        const totalLine = includeInterest
          ? `\n\nTotal amount due: ${total}`
          : `\n\nTotal amount due: ${amount}`;
        if (isLetter) {
          body = `Dear ${client},

FINAL DEMAND FOR PAYMENT

Despite previous reminders, Invoice ${inv} for ${amount} remains unpaid. This invoice was due on ${dueDateFormatted} and is now ${days} days overdue.${interestFinalClause}${totalLine}

This is my final attempt to resolve this matter directly. If full payment is not received within 7 days of this notice, I will have no choice but to refer this matter to a debt collection agency and pursue legal remedies through the relevant tribunal.

I strongly encourage you to contact me to resolve this before further action is required.

Regards,
${name}
${business}`;
        } else {
          body = `Dear ${client},

FINAL DEMAND FOR PAYMENT

Despite previous reminders, Invoice ${inv} for ${amount} remains unpaid. This invoice was due on ${dueDateFormatted} and is now ${days} days overdue.${interestFinalClause}${totalLine}

This is my final attempt to resolve this matter directly. If full payment is not received within 7 days of this notice, I will have no choice but to refer this matter to a debt collection agency and pursue legal remedies through the relevant tribunal.

I strongly encourage you to contact me to resolve this before further action is required.

Regards,
${name}
${business}`;
        }
        break;
      }
    }

    return { subject, body };
  }, [
    effectiveTone,
    commMethod,
    invoiceAmount,
    dueDate,
    daysOverdue,
    paymentTerms,
    includeInterest,
    interestRate,
    interestAmount,
    totalOwing,
    invoiceNumber,
    clientName,
    yourName,
    businessName,
  ]);

  const handleGenerate = () => {
    setGenerated(true);
  };

  const handleCopy = () => {
    const fullText = commMethod === 'email'
      ? `Subject: ${generatedContent.subject}\n\n${generatedContent.body}`
      : generatedContent.body;

    navigator.clipboard.writeText(fullText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const handleToneSelect = (t: Tone) => {
    setTone(t);
    setToneAutoSelected(false);
  };

  const inputClass =
    'w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-slate-600 focus:outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/25 transition-all text-sm';
  const labelClass = 'block text-sm font-medium text-slate-300 mb-1.5';

  return (
    <div className="space-y-8">
      {/* Business & Contact Details */}
      <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
        <h3 className="text-lg font-bold text-white heading-font mb-6">Your Details</h3>
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className={labelClass}>Your Business Name</label>
            <input
              type="text"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              className={inputClass}
              placeholder="e.g. Smith Design Studio"
            />
          </div>
          <div>
            <label className={labelClass}>Your Name</label>
            <input
              type="text"
              value={yourName}
              onChange={(e) => setYourName(e.target.value)}
              className={inputClass}
              placeholder="e.g. Sarah Smith"
            />
          </div>
        </div>
      </div>

      {/* Invoice Details */}
      <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
        <h3 className="text-lg font-bold text-white heading-font mb-6">Invoice Details</h3>
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
            <label className={labelClass}>Invoice Number</label>
            <input
              type="text"
              value={invoiceNumber}
              onChange={(e) => setInvoiceNumber(e.target.value)}
              className={inputClass}
              placeholder="e.g. INV-001"
            />
          </div>
          <div>
            <label className={labelClass}>Invoice Amount (AUD)</label>
            <input
              type="number"
              value={invoiceAmount}
              onChange={(e) => {
                const val = e.target.value;
                setInvoiceAmount(val === '' ? '' : Math.max(0, parseFloat(val) || 0));
              }}
              className={inputClass}
              placeholder="e.g. 5000"
              min="0"
              step="100"
            />
          </div>
          <div>
            <label className={labelClass}>Original Due Date</label>
            <input
              type="date"
              value={dueDate}
              onChange={(e) => {
                setDueDate(e.target.value);
                setUseManualDays(false);
              }}
              className={inputClass}
            />
          </div>
          <div>
            <label className={labelClass}>
              Days Overdue
              {dueDate && !useManualDays && (
                <span className="text-teal-400 ml-2 text-xs font-normal">(auto-calculated)</span>
              )}
            </label>
            <div className="flex gap-2">
              <input
                type="number"
                value={useManualDays ? daysOverdueManual : calculatedDaysOverdue}
                onChange={(e) => {
                  setUseManualDays(true);
                  const val = e.target.value;
                  setDaysOverdueManual(val === '' ? '' : Math.max(0, parseInt(val) || 0));
                  setToneAutoSelected(true);
                }}
                className={inputClass}
                placeholder="0"
                min="0"
              />
              {useManualDays && dueDate && (
                <button
                  onClick={() => {
                    setUseManualDays(false);
                    setDaysOverdueManual('');
                    setToneAutoSelected(true);
                  }}
                  className="px-3 py-2 bg-white/5 border border-white/10 rounded-xl text-xs text-slate-400 hover:text-white hover:bg-white/10 transition-all whitespace-nowrap"
                >
                  Auto
                </button>
              )}
            </div>
          </div>
          <div>
            <label className={labelClass}>Payment Terms Originally Agreed</label>
            <select
              value={paymentTerms}
              onChange={(e) => setPaymentTerms(e.target.value as PaymentTerms)}
              className={inputClass}
            >
              {PAYMENT_TERMS_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value} className="bg-slate-800">
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Late Payment Interest Toggle */}
        <div className="mt-6 space-y-4">
          <div className="flex items-center justify-between py-3 px-4 rounded-xl bg-white/5">
            <div>
              <span className="text-slate-300 text-sm">Include Late Payment Interest?</span>
              <p className="text-xs text-slate-500 mt-0.5">Add interest calculation to the follow-up</p>
            </div>
            <button
              onClick={() => setIncludeInterest(!includeInterest)}
              className={`relative w-14 h-7 rounded-full transition-all ${
                includeInterest ? 'bg-gradient-to-r from-teal-500 to-blue-500' : 'bg-white/10'
              }`}
            >
              <div
                className={`absolute top-0.5 left-0.5 h-6 w-6 rounded-full bg-white shadow-md transition-transform ${
                  includeInterest ? 'translate-x-7' : 'translate-x-0'
                }`}
              />
            </button>
          </div>

          {includeInterest && (
            <div className="pl-4 border-l-2 border-teal-500/30">
              <label className={labelClass}>Interest Rate (% per month)</label>
              <input
                type="number"
                value={interestRate}
                onChange={(e) => setInterestRate(Math.max(0, parseFloat(e.target.value) || 0))}
                className={`${inputClass} max-w-xs`}
                placeholder="2"
                min="0"
                max="10"
                step="0.5"
              />
              {daysOverdue > 0 && Number(invoiceAmount) > 0 && (
                <div className="mt-3 bg-white/5 rounded-xl p-4">
                  <div className="flex justify-between items-center text-sm mb-2">
                    <span className="text-slate-400">Interest accrued ({daysOverdue} days)</span>
                    <span className="text-amber-400 font-mono font-semibold">{formatCurrency(interestAmount)}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm border-t border-white/10 pt-2">
                    <span className="text-white font-medium">Total owing</span>
                    <span className="text-teal-400 font-mono font-bold">{formatCurrency(totalOwing)}</span>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Tone Selection */}
      <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
        <h3 className="text-lg font-bold text-white heading-font mb-2">Escalation Tone</h3>
        <p className="text-sm text-slate-500 mb-6">
          {toneAutoSelected && daysOverdue > 0
            ? 'Auto-selected based on days overdue. Click to override.'
            : 'Select the appropriate tone for your follow-up.'}
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {TONE_OPTIONS.map((opt) => {
            const isSelected = effectiveTone === opt.key;
            return (
              <button
                key={opt.key}
                onClick={() => handleToneSelect(opt.key)}
                className={`rounded-xl p-4 text-left transition-all border ${
                  isSelected
                    ? `${opt.borderColor} ${opt.bgColor}`
                    : 'border-white/10 bg-white/5 hover:bg-white/10'
                }`}
              >
                <p className={`font-semibold text-sm ${isSelected ? opt.color : 'text-slate-400'}`}>
                  {opt.label}
                </p>
                <p className="text-xs text-slate-500 mt-1">{opt.description}</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Communication Method */}
      <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
        <h3 className="text-lg font-bold text-white heading-font mb-6">Communication Method</h3>
        <div className="flex gap-3">
          <button
            onClick={() => setCommMethod('email')}
            className={`flex-1 rounded-xl py-3 px-4 text-sm font-medium transition-all ${
              commMethod === 'email'
                ? 'bg-teal-500 text-white'
                : 'bg-white/5 text-slate-400 border border-white/10 hover:bg-white/10'
            }`}
          >
            Email
          </button>
          <button
            onClick={() => setCommMethod('letter')}
            className={`flex-1 rounded-xl py-3 px-4 text-sm font-medium transition-all ${
              commMethod === 'letter'
                ? 'bg-teal-500 text-white'
                : 'bg-white/5 text-slate-400 border border-white/10 hover:bg-white/10'
            }`}
          >
            Letter
          </button>
        </div>
      </div>

      {/* Generate Button */}
      <div className="flex justify-center">
        <button
          onClick={handleGenerate}
          className="bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold rounded-xl px-8 py-4 hover:from-teal-400 hover:to-blue-400 transition-all text-lg"
        >
          Generate Follow-Up {commMethod === 'email' ? 'Email' : 'Letter'}
        </button>
      </div>

      {/* Generated Output */}
      {generated && (
        <>
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-white heading-font">
                Generated {commMethod === 'email' ? 'Email' : 'Letter'}
              </h3>
              <div className="flex items-center gap-2">
                {TONE_OPTIONS.map((opt) => {
                  if (opt.key !== effectiveTone) return null;
                  return (
                    <span
                      key={opt.key}
                      className={`text-xs px-3 py-1 rounded-full ${opt.bgColor} ${opt.color} font-medium`}
                    >
                      {opt.label}
                    </span>
                  );
                })}
              </div>
            </div>

            {/* Email Preview */}
            <div className="bg-slate-900/50 border border-white/10 rounded-xl p-6 font-mono text-sm space-y-4">
              {commMethod === 'email' && (
                <div className="pb-4 border-b border-white/10">
                  <p className="text-slate-500 text-xs mb-1">Subject:</p>
                  <p className="text-white font-semibold">{generatedContent.subject}</p>
                </div>
              )}
              <div className="whitespace-pre-wrap text-slate-300 leading-relaxed">
                {generatedContent.body}
              </div>
            </div>

            {/* Interest Summary (if applicable) */}
            {includeInterest && daysOverdue > 0 && Number(invoiceAmount) > 0 && (
              <div className="mt-4 bg-white/5 rounded-xl p-4">
                <h4 className="text-white font-semibold text-sm mb-3">Interest Calculation Breakdown</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Invoice amount</span>
                    <span className="text-white font-mono">{formatCurrency(Number(invoiceAmount))}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Interest rate</span>
                    <span className="text-white font-mono">{interestRate}% per month</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Days overdue</span>
                    <span className="text-white font-mono">{daysOverdue} days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Formula</span>
                    <span className="text-slate-500 font-mono text-xs">{formatCurrency(Number(invoiceAmount))} x {interestRate}% x {daysOverdue} / 365</span>
                  </div>
                  <div className="flex justify-between border-t border-white/10 pt-2">
                    <span className="text-slate-400">Interest accrued</span>
                    <span className="text-amber-400 font-mono font-semibold">{formatCurrency(interestAmount)}</span>
                  </div>
                  <div className="flex justify-between border-t border-white/10 pt-2">
                    <span className="text-white font-semibold">Total owing</span>
                    <span className="text-teal-400 font-mono font-bold">{formatCurrency(totalOwing)}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Copy Button */}
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
                href="/tools/late-payment-calculator"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-500/30 rounded-xl p-4 transition-all group"
              >
                <p className="text-white font-medium text-sm group-hover:text-teal-400 transition-colors">
                  Late Payment Calculator
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Calculate exact late payment interest and penalties
                </p>
              </a>
              <a
                href="/tools/payment-terms-calculator"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-500/30 rounded-xl p-4 transition-all group"
              >
                <p className="text-white font-medium text-sm group-hover:text-teal-400 transition-colors">
                  Payment Terms Calculator
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Find the right payment terms for your business
                </p>
              </a>
              <a
                href="/tools/invoice-generator"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-500/30 rounded-xl p-4 transition-all group"
              >
                <p className="text-white font-medium text-sm group-hover:text-teal-400 transition-colors">
                  Invoice Generator
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Create professional invoices with payment terms
                </p>
              </a>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="text-center">
            <p className="text-xs text-slate-500 max-w-2xl mx-auto">
              This tool generates template follow-up correspondence for overdue invoices. It does not
              constitute legal advice. For debt recovery matters involving significant amounts or
              complex disputes, consult a qualified legal professional. Late payment interest is only
              enforceable if agreed in your original contract.
            </p>
          </div>
        </>
      )}
    </div>
  );
}
