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

function daysBetween(date1: string, date2: string): number {
  if (!date1 || !date2) return 0;
  const d1 = new Date(date1 + 'T00:00:00');
  const d2 = new Date(date2 + 'T00:00:00');
  return Math.round((d2.getTime() - d1.getTime()) / (1000 * 60 * 60 * 24));
}

/* ---- Types ---- */

type DeliveryMethod = 'email' | 'registered-post' | 'both';

/* ---- Component ---- */

export default function LetterOfDemand() {
  // Sender details
  const [senderName, setSenderName] = useState('');
  const [senderABN, setSenderABN] = useState('');
  const [senderAddress, setSenderAddress] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [senderPhone, setSenderPhone] = useState('');

  // Recipient details
  const [recipientName, setRecipientName] = useState('');
  const [recipientAddress, setRecipientAddress] = useState('');

  // Debt details
  const [invoiceNumber, setInvoiceNumber] = useState('');
  const [invoiceDate, setInvoiceDate] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [amountOwed, setAmountOwed] = useState(0);
  const [includesGST, setIncludesGST] = useState(true);
  const [workDescription, setWorkDescription] = useState('');

  // Interest
  const [chargeInterest, setChargeInterest] = useState(false);
  const [interestRate, setInterestRate] = useState(2); // % per month

  // Demand details
  const [letterDate, setLetterDate] = useState(todayISO);
  const [responseDays, setResponseDays] = useState(14);
  const [deliveryMethod, setDeliveryMethod] = useState<DeliveryMethod>('registered-post');
  const [previousReminders, setPreviousReminders] = useState(2);

  // UI
  const [generated, setGenerated] = useState(false);
  const [copied, setCopied] = useState(false);

  // Interest calculation
  const calculations = useMemo(() => {
    const daysOverdue = daysBetween(dueDate, letterDate);
    const monthlyRate = interestRate / 100;
    const dailyRate = (monthlyRate * 12) / 365;
    const interestAmount = chargeInterest ? amountOwed * dailyRate * Math.max(0, daysOverdue) : 0;
    const totalOwed = amountOwed + interestAmount;
    const responseDeadline = new Date(letterDate + 'T00:00:00');
    responseDeadline.setDate(responseDeadline.getDate() + responseDays);
    const deadlineISO = responseDeadline.toISOString().split('T')[0];

    return {
      daysOverdue: Math.max(0, daysOverdue),
      interestAmount,
      totalOwed,
      deadlineDate: deadlineISO,
    };
  }, [amountOwed, dueDate, letterDate, chargeInterest, interestRate, responseDays]);

  // Generate letter text
  const generatedText = useMemo(() => {
    const sender = senderName || '[Your Full Name / Business Name]';
    const abn = senderABN ? `ABN: ${senderABN}` : '';
    const sAddr = senderAddress || '[Your Business Address]';
    const sEmail = senderEmail || '[your@email.com]';
    const sPhone = senderPhone || '[Your Phone]';
    const recipient = recipientName || '[Client Name / Company]';
    const rAddr = recipientAddress || '[Client Address]';
    const inv = invoiceNumber || '[Invoice Number]';
    const invDate = invoiceDate ? formatDateAU(invoiceDate) : '[Invoice Date]';
    const due = dueDate ? formatDateAU(dueDate) : '[Due Date]';
    const lDate = formatDateAU(letterDate);
    const deadline = formatDateAU(calculations.deadlineDate);
    const work = workDescription || '[description of services provided]';

    let text = '';
    text += `${sender}\n`;
    if (abn) text += `${abn}\n`;
    text += `${sAddr}\n`;
    text += `${sEmail}\n`;
    if (sPhone) text += `${sPhone}\n`;
    text += `\n`;
    text += `${lDate}\n\n`;
    text += `${recipient}\n`;
    text += `${rAddr}\n\n`;

    text += `LETTER OF DEMAND — FORMAL NOTICE\n`;
    text += `${'═'.repeat(50)}\n\n`;

    text += `Dear ${recipient},\n\n`;

    text += `RE: OUTSTANDING PAYMENT — INVOICE ${inv}\n\n`;

    text += `I am writing to formally demand payment of the outstanding amount owed to me for services rendered. Despite `;
    if (previousReminders > 0) {
      text += `${previousReminders} previous reminder${previousReminders > 1 ? 's' : ''} and `;
    }
    text += `the invoice being overdue by ${calculations.daysOverdue} days, payment has not been received.\n\n`;

    text += `DETAILS OF THE DEBT\n`;
    text += `${'─'.repeat(50)}\n`;
    text += `Invoice Number:       ${inv}\n`;
    text += `Invoice Date:         ${invDate}\n`;
    text += `Due Date:             ${due}\n`;
    text += `Services Provided:    ${work}\n`;
    text += `Original Amount:      ${formatCurrency(amountOwed)}`;
    if (includesGST) text += ` (incl. GST)`;
    text += `\n`;
    text += `Days Overdue:         ${calculations.daysOverdue} days\n`;

    if (chargeInterest && calculations.interestAmount > 0) {
      text += `Interest (${interestRate}%/mo):  ${formatCurrency(calculations.interestAmount)}\n`;
      text += `TOTAL AMOUNT DUE:     ${formatCurrency(calculations.totalOwed)}\n`;
    } else {
      text += `TOTAL AMOUNT DUE:     ${formatCurrency(amountOwed)}\n`;
    }
    text += `${'─'.repeat(50)}\n\n`;

    text += `DEMAND FOR PAYMENT\n\n`;
    text += `I hereby demand payment of the full outstanding amount of ${formatCurrency(calculations.totalOwed)} within ${responseDays} calendar days of the date of this letter — that is, by ${deadline}.\n\n`;

    if (chargeInterest) {
      text += `Please note that interest continues to accrue on the outstanding amount at a rate of ${interestRate}% per month (${(interestRate * 12).toFixed(1)}% per annum) in accordance with the terms of our agreement.\n\n`;
    }

    text += `CONSEQUENCES OF NON-PAYMENT\n\n`;
    text += `If payment is not received by ${deadline}, I reserve the right to:\n\n`;
    text += `  1. Commence proceedings in the Victorian Civil and Administrative\n`;
    text += `     Tribunal (VCAT) or the relevant state tribunal/court without\n`;
    text += `     further notice\n`;
    text += `  2. Claim the outstanding amount plus interest, filing fees, and\n`;
    text += `     any legal costs incurred\n`;
    text += `  3. Report the debt to a commercial credit reporting agency\n`;
    text += `  4. Engage a debt collection agency to recover the amount owed\n\n`;

    text += `I wish to resolve this matter without legal proceedings, which would incur additional costs for both parties. `;
    text += `If you are experiencing financial difficulty, I am open to discussing a reasonable payment arrangement — `;
    text += `however, this must be agreed in writing before the above deadline.\n\n`;

    text += `PAYMENT DETAILS\n`;
    text += `${'─'.repeat(50)}\n`;
    text += `Please make payment via [bank transfer / your preferred method].\n`;
    text += `Account Name:    ${sender}\n`;
    text += `BSB:             [Your BSB]\n`;
    text += `Account Number:  [Your Account Number]\n`;
    text += `Reference:       ${inv}\n`;
    text += `${'─'.repeat(50)}\n\n`;

    text += `Please confirm receipt of this letter and your intended payment date by replying to ${sEmail}.\n\n`;

    text += `This letter constitutes a formal demand for payment. A copy has been retained for my records.\n\n`;

    if (deliveryMethod === 'registered-post' || deliveryMethod === 'both') {
      text += `This letter has been sent via registered post to confirm delivery.\n\n`;
    }

    text += `Yours sincerely,\n\n\n`;
    text += `${sender}\n`;
    if (abn) text += `${abn}\n`;

    return text;
  }, [
    senderName, senderABN, senderAddress, senderEmail, senderPhone,
    recipientName, recipientAddress,
    invoiceNumber, invoiceDate, dueDate, amountOwed, includesGST, workDescription,
    chargeInterest, interestRate,
    letterDate, responseDays, deliveryMethod, previousReminders,
    calculations,
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
      {/* Your Details */}
      <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
        <h3 className="text-lg font-bold text-white heading-font mb-6">Your Details</h3>
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className={labelClass}>Full Name / Business Name</label>
            <input
              type="text"
              value={senderName}
              onChange={(e) => setSenderName(e.target.value)}
              className={inputClass}
              placeholder="e.g. Sarah Mitchell Design"
            />
          </div>
          <div>
            <label className={labelClass}>ABN</label>
            <input
              type="text"
              value={senderABN}
              onChange={(e) => setSenderABN(e.target.value)}
              className={inputClass}
              placeholder="e.g. 12 345 678 901"
            />
          </div>
          <div>
            <label className={labelClass}>Business Address</label>
            <input
              type="text"
              value={senderAddress}
              onChange={(e) => setSenderAddress(e.target.value)}
              className={inputClass}
              placeholder="e.g. 42 Collins St, Melbourne VIC 3000"
            />
          </div>
          <div>
            <label className={labelClass}>Email</label>
            <input
              type="email"
              value={senderEmail}
              onChange={(e) => setSenderEmail(e.target.value)}
              className={inputClass}
              placeholder="e.g. sarah@mitchelldesign.com.au"
            />
          </div>
          <div>
            <label className={labelClass}>Phone (optional)</label>
            <input
              type="tel"
              value={senderPhone}
              onChange={(e) => setSenderPhone(e.target.value)}
              className={inputClass}
              placeholder="e.g. 0412 345 678"
            />
          </div>
        </div>
      </div>

      {/* Recipient Details */}
      <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
        <h3 className="text-lg font-bold text-white heading-font mb-6">Recipient (Debtor) Details</h3>
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className={labelClass}>Client Name / Company</label>
            <input
              type="text"
              value={recipientName}
              onChange={(e) => setRecipientName(e.target.value)}
              className={inputClass}
              placeholder="e.g. Acme Solutions Pty Ltd"
            />
          </div>
          <div>
            <label className={labelClass}>Client Address</label>
            <input
              type="text"
              value={recipientAddress}
              onChange={(e) => setRecipientAddress(e.target.value)}
              className={inputClass}
              placeholder="e.g. 100 Queen St, Melbourne VIC 3000"
            />
          </div>
        </div>
      </div>

      {/* Debt Details */}
      <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
        <h3 className="text-lg font-bold text-white heading-font mb-6">Debt Details</h3>
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className={labelClass}>Invoice Number</label>
            <input
              type="text"
              value={invoiceNumber}
              onChange={(e) => setInvoiceNumber(e.target.value)}
              className={inputClass}
              placeholder="e.g. INV-2026-042"
            />
          </div>
          <div>
            <label className={labelClass}>Invoice Date</label>
            <input
              type="date"
              value={invoiceDate}
              onChange={(e) => setInvoiceDate(e.target.value)}
              className={inputClass}
            />
          </div>
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
            <label className={labelClass}>Amount Owed (AUD)</label>
            <input
              type="number"
              value={amountOwed || ''}
              onChange={(e) => setAmountOwed(Math.max(0, parseFloat(e.target.value) || 0))}
              className={inputClass}
              min="0"
              step="100"
              placeholder="e.g. 5000"
            />
          </div>
          <div className="sm:col-span-2">
            <label className={labelClass}>Description of Work / Services</label>
            <input
              type="text"
              value={workDescription}
              onChange={(e) => setWorkDescription(e.target.value)}
              className={inputClass}
              placeholder="e.g. Website design and development as per proposal dated 15/01/2026"
            />
          </div>
          <div className="sm:col-span-2">
            <label className={labelClass}>Previous Reminders Sent</label>
            <select
              value={previousReminders}
              onChange={(e) => setPreviousReminders(parseInt(e.target.value))}
              className={inputClass}
            >
              <option value="0" className="bg-slate-800">None — this is my first contact</option>
              <option value="1" className="bg-slate-800">1 reminder</option>
              <option value="2" className="bg-slate-800">2 reminders</option>
              <option value="3" className="bg-slate-800">3+ reminders</option>
            </select>
          </div>
        </div>

        {/* GST Toggle */}
        <div className="mt-6 flex items-center justify-between py-3 px-4 rounded-xl bg-white/5">
          <div>
            <span className="text-slate-300 text-sm">Amount includes GST?</span>
            <p className="text-xs text-slate-500 mt-0.5">Toggle if the amount above includes 10% GST</p>
          </div>
          <button
            onClick={() => setIncludesGST(!includesGST)}
            className={`relative w-14 h-7 rounded-full transition-all ${
              includesGST ? 'bg-gradient-to-r from-teal-500 to-blue-500' : 'bg-white/10'
            }`}
          >
            <div
              className={`absolute top-0.5 left-0.5 h-6 w-6 rounded-full bg-white shadow-md transition-transform ${
                includesGST ? 'translate-x-7' : 'translate-x-0'
              }`}
            />
          </button>
        </div>
      </div>

      {/* Interest & Demand Terms */}
      <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
        <h3 className="text-lg font-bold text-white heading-font mb-6">Demand Terms</h3>

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className={labelClass}>Letter Date</label>
            <input
              type="date"
              value={letterDate}
              onChange={(e) => setLetterDate(e.target.value)}
              className={inputClass}
            />
          </div>
          <div>
            <label className={labelClass}>Response Deadline (days)</label>
            <select
              value={responseDays}
              onChange={(e) => setResponseDays(parseInt(e.target.value))}
              className={inputClass}
            >
              <option value="7" className="bg-slate-800">7 days</option>
              <option value="14" className="bg-slate-800">14 days (recommended)</option>
              <option value="21" className="bg-slate-800">21 days</option>
              <option value="28" className="bg-slate-800">28 days</option>
            </select>
          </div>
          <div>
            <label className={labelClass}>Delivery Method</label>
            <select
              value={deliveryMethod}
              onChange={(e) => setDeliveryMethod(e.target.value as DeliveryMethod)}
              className={inputClass}
            >
              <option value="registered-post" className="bg-slate-800">Registered post (recommended)</option>
              <option value="email" className="bg-slate-800">Email only</option>
              <option value="both" className="bg-slate-800">Both registered post and email</option>
            </select>
          </div>
        </div>

        {/* Interest Toggle */}
        <div className="mt-6 flex items-center justify-between py-3 px-4 rounded-xl bg-white/5">
          <div>
            <span className="text-slate-300 text-sm">Charge late payment interest?</span>
            <p className="text-xs text-slate-500 mt-0.5">
              Only if agreed in your original contract or terms
            </p>
          </div>
          <button
            onClick={() => setChargeInterest(!chargeInterest)}
            className={`relative w-14 h-7 rounded-full transition-all ${
              chargeInterest ? 'bg-gradient-to-r from-teal-500 to-blue-500' : 'bg-white/10'
            }`}
          >
            <div
              className={`absolute top-0.5 left-0.5 h-6 w-6 rounded-full bg-white shadow-md transition-transform ${
                chargeInterest ? 'translate-x-7' : 'translate-x-0'
              }`}
            />
          </button>
        </div>

        {chargeInterest && (
          <div className="mt-4">
            <label className={labelClass}>Interest Rate (% per month)</label>
            <input
              type="number"
              value={interestRate}
              onChange={(e) => setInterestRate(Math.max(0, Math.min(4, parseFloat(e.target.value) || 0)))}
              className={inputClass}
              min="0"
              max="4"
              step="0.5"
              placeholder="2"
            />
            <p className="text-xs text-slate-500 mt-1">
              Standard range: 1.5-2% per month. Courts may not enforce rates above 4%/mo.
            </p>
          </div>
        )}

        {/* Calculation Summary */}
        {(calculations.daysOverdue > 0 || amountOwed > 0) && (
          <div className="mt-6 bg-white/5 rounded-xl p-4 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-slate-400">Original Amount</span>
              <span className="text-white font-mono">{formatCurrency(amountOwed)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-400">Days Overdue</span>
              <span className="text-white font-mono">{calculations.daysOverdue}</span>
            </div>
            {chargeInterest && calculations.interestAmount > 0 && (
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">
                  Interest ({interestRate}%/mo x {calculations.daysOverdue} days)
                </span>
                <span className="text-amber-400 font-mono">
                  +{formatCurrency(calculations.interestAmount)}
                </span>
              </div>
            )}
            <div className="flex justify-between text-sm border-t border-white/10 pt-2">
              <span className="text-white font-semibold">Total Amount Demanded</span>
              <span className="text-rose-400 font-mono font-bold text-lg">
                {formatCurrency(calculations.totalOwed)}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-400">Response Deadline</span>
              <span className="text-white font-mono">{formatDateAU(calculations.deadlineDate)}</span>
            </div>
          </div>
        )}
      </div>

      {/* Generate Button */}
      <div className="flex justify-center">
        <button
          onClick={handleGenerate}
          className="bg-gradient-to-r from-rose-500 to-orange-500 text-white font-semibold rounded-xl px-8 py-4 hover:from-rose-400 hover:to-orange-400 transition-all text-lg"
        >
          Generate Letter of Demand
        </button>
      </div>

      {/* Generated Output */}
      {generated && (
        <>
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-white heading-font">Letter Preview</h3>
              <span className="text-xs px-3 py-1 rounded-full bg-rose-500/10 text-rose-400 font-medium">
                Formal Demand
              </span>
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

          {/* Important Notice */}
          <div className="bg-amber-500/5 border border-amber-500/20 rounded-2xl p-6">
            <h4 className="text-amber-400 font-semibold mb-2">Important Legal Notice</h4>
            <ul className="text-sm text-slate-400 space-y-2">
              <li>This template is for general guidance only and does not constitute legal advice.</li>
              <li>Send via <strong className="text-white">registered post</strong> to create a delivery record for court proceedings.</li>
              <li>Keep copies of this letter and all previous correspondence with the debtor.</li>
              <li>If the debt exceeds <strong className="text-white">$15,000</strong> (varies by state), you may need to file in a higher court rather than a small claims tribunal.</li>
              <li>Consider seeking legal advice before proceeding with tribunal or court action.</li>
              <li>In Victoria, VCAT handles claims up to $15,000 (civil claims). In NSW, use the Local Court Small Claims Division (up to $20,000).</li>
            </ul>
          </div>

          {/* Related Tools */}
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white heading-font mb-4">Related Tools</h3>
            <div className="grid sm:grid-cols-3 gap-3">
              <a
                href="/tools/overdue-follow-up"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-500/30 rounded-xl p-4 transition-all group"
              >
                <p className="text-white font-medium text-sm group-hover:text-teal-400 transition-colors">
                  Overdue Follow-Up
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Softer email reminders before formal demand
                </p>
              </a>
              <a
                href="/tools/late-payment-calculator"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-500/30 rounded-xl p-4 transition-all group"
              >
                <p className="text-white font-medium text-sm group-hover:text-teal-400 transition-colors">
                  Late Payment Calculator
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Calculate interest on overdue invoices
                </p>
              </a>
              <a
                href="/tools/contract-clause-generator"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-500/30 rounded-xl p-4 transition-all group"
              >
                <p className="text-white font-medium text-sm group-hover:text-teal-400 transition-colors">
                  Contract Clause Generator
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Add late payment clauses to future contracts
                </p>
              </a>
            </div>
          </div>

          <div className="text-center">
            <p className="text-xs text-slate-500 max-w-2xl mx-auto">
              This tool generates letter of demand templates for Australian freelancers and sole traders.
              A letter of demand is the formal step before commencing legal proceedings for debt recovery.
              Always keep records and consider seeking professional legal advice for significant debts.
            </p>
          </div>
        </>
      )}
    </div>
  );
}
