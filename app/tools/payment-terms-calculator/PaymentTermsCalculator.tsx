'use client';

import { useState, useMemo } from 'react';

function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

function formatDate(date: Date): string {
  return date.toLocaleDateString('en-AU', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

function formatShortDate(date: Date): string {
  return date.toLocaleDateString('en-AU', {
    day: 'numeric',
    month: 'short',
  });
}

function addDays(date: Date, days: number): Date {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

function getEndOfMonth(date: Date): Date {
  const result = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  return result;
}

function daysBetween(a: Date, b: Date): number {
  const msPerDay = 1000 * 60 * 60 * 24;
  return Math.round((b.getTime() - a.getTime()) / msPerDay);
}

type PaymentTermsType =
  | 'COD'
  | 'Net 7'
  | 'Net 14'
  | 'Net 21'
  | 'Net 30'
  | 'Net 45'
  | 'Net 60'
  | 'Net 90'
  | 'EOM'
  | 'EOM+30'
  | 'Custom';

const PAYMENT_TERMS_OPTIONS: PaymentTermsType[] = [
  'COD',
  'Net 7',
  'Net 14',
  'Net 21',
  'Net 30',
  'Net 45',
  'Net 60',
  'Net 90',
  'EOM',
  'EOM+30',
  'Custom',
];

const DEFAULT_MILESTONE_NAMES: Record<number, string[]> = {
  2: ['Deposit', 'Final Payment'],
  3: ['Deposit', 'Progress Payment', 'Final Payment'],
  4: ['Deposit', 'Progress 1', 'Progress 2', 'Final Payment'],
  5: ['Deposit', 'Progress 1', 'Progress 2', 'Progress 3', 'Final Payment'],
};

function getTodayString(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export default function PaymentTermsCalculator() {
  const [invoiceDate, setInvoiceDate] = useState(getTodayString());
  const [invoiceAmount, setInvoiceAmount] = useState('5000');
  const [paymentTerms, setPaymentTerms] = useState<PaymentTermsType>('Net 30');
  const [customDays, setCustomDays] = useState('45');
  const [earlyDiscountEnabled, setEarlyDiscountEnabled] = useState(false);
  const [discountPercent, setDiscountPercent] = useState('2');
  const [discountWindowDays, setDiscountWindowDays] = useState('10');
  const [milestonesEnabled, setMilestonesEnabled] = useState(false);
  const [milestoneCount, setMilestoneCount] = useState(3);
  const [milestonePercentages, setMilestonePercentages] = useState<number[]>([34, 33, 33]);
  const [copied, setCopied] = useState(false);

  // When milestone count changes, reset percentages to even split
  const handleMilestoneCountChange = (count: number) => {
    setMilestoneCount(count);
    const evenSplit = Math.floor(100 / count);
    const remainder = 100 - evenSplit * count;
    const pcts = Array(count).fill(evenSplit);
    pcts[0] += remainder; // give remainder to first milestone
    setMilestonePercentages(pcts);
  };

  const handleMilestonePercentageChange = (index: number, value: string) => {
    const newPcts = [...milestonePercentages];
    newPcts[index] = parseFloat(value) || 0;
    setMilestonePercentages(newPcts);
  };

  const results = useMemo(() => {
    const amount = parseFloat(invoiceAmount) || 0;
    const startDate = invoiceDate ? new Date(invoiceDate + 'T00:00:00') : new Date();
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Calculate due date based on payment terms
    let dueDate: Date;
    let termDays: number;

    switch (paymentTerms) {
      case 'COD':
        dueDate = new Date(startDate);
        termDays = 0;
        break;
      case 'Net 7':
        dueDate = addDays(startDate, 7);
        termDays = 7;
        break;
      case 'Net 14':
        dueDate = addDays(startDate, 14);
        termDays = 14;
        break;
      case 'Net 21':
        dueDate = addDays(startDate, 21);
        termDays = 21;
        break;
      case 'Net 30':
        dueDate = addDays(startDate, 30);
        termDays = 30;
        break;
      case 'Net 45':
        dueDate = addDays(startDate, 45);
        termDays = 45;
        break;
      case 'Net 60':
        dueDate = addDays(startDate, 60);
        termDays = 60;
        break;
      case 'Net 90':
        dueDate = addDays(startDate, 90);
        termDays = 90;
        break;
      case 'EOM':
        dueDate = getEndOfMonth(startDate);
        termDays = daysBetween(startDate, dueDate);
        break;
      case 'EOM+30':
        dueDate = addDays(getEndOfMonth(startDate), 30);
        termDays = daysBetween(startDate, dueDate);
        break;
      case 'Custom': {
        const days = parseInt(customDays) || 0;
        dueDate = addDays(startDate, days);
        termDays = days;
        break;
      }
      default:
        dueDate = addDays(startDate, 30);
        termDays = 30;
    }

    const daysUntilDue = daysBetween(today, dueDate);

    // Early payment discount
    const discPct = (parseFloat(discountPercent) || 0) / 100;
    const discWindow = parseInt(discountWindowDays) || 10;
    const discountDeadline = addDays(startDate, discWindow);
    const discountAmount = amount * discPct;
    const amountIfPaidEarly = amount - discountAmount;
    const savingsByPayingEarly = discountAmount;
    // Annualised return for the client
    const daysEarlier = daysBetween(discountDeadline, dueDate);
    const annualisedReturn =
      daysEarlier > 0 && discPct > 0
        ? (discPct / (1 - discPct)) * (365 / daysEarlier) * 100
        : 0;

    // Milestone payments
    const milestoneNames = DEFAULT_MILESTONE_NAMES[milestoneCount] || [];
    const totalPct = milestonePercentages.reduce((sum, p) => sum + p, 0);
    const milestones = milestonePercentages.slice(0, milestoneCount).map((pct, i) => {
      // Spread milestone due dates evenly across the payment window
      const dayOffset =
        milestoneCount <= 1
          ? termDays
          : Math.round((termDays * i) / (milestoneCount - 1));
      const milestoneDueDate = addDays(startDate, dayOffset);
      const milestoneAmount = amount * (pct / 100);
      return {
        name: milestoneNames[i] || `Milestone ${i + 1}`,
        percentage: pct,
        amount: milestoneAmount,
        dueDate: milestoneDueDate,
        dayOffset,
      };
    });

    return {
      amount,
      startDate,
      dueDate,
      termDays,
      daysUntilDue,
      earlyDiscount: {
        discountDeadline,
        discountAmount,
        amountIfPaidEarly,
        savingsByPayingEarly,
        annualisedReturn,
        daysEarlier,
      },
      milestones,
      totalMilestonePct: totalPct,
    };
  }, [
    invoiceDate,
    invoiceAmount,
    paymentTerms,
    customDays,
    discountPercent,
    discountWindowDays,
    milestoneCount,
    milestonePercentages,
  ]);

  const handleCopy = () => {
    const lines = [
      'Payment Terms Summary — InvoiceFlow',
      '=====================================',
      '',
      `Invoice Date: ${formatDate(results.startDate)}`,
      `Invoice Amount: ${formatCurrency(results.amount)}`,
      `Payment Terms: ${paymentTerms}${paymentTerms === 'Custom' ? ` (${customDays} days)` : ''}`,
      `Due Date: ${formatDate(results.dueDate)}`,
      `Days Until Due: ${results.daysUntilDue}`,
    ];

    if (earlyDiscountEnabled) {
      lines.push(
        '',
        '--- Early Payment Discount ---',
        `Discount: ${discountPercent}% if paid within ${discountWindowDays} days`,
        `Discount Deadline: ${formatDate(results.earlyDiscount.discountDeadline)}`,
        `Discount Amount: ${formatCurrency(results.earlyDiscount.discountAmount)}`,
        `Amount If Paid Early: ${formatCurrency(results.earlyDiscount.amountIfPaidEarly)}`,
        `Savings: ${formatCurrency(results.earlyDiscount.savingsByPayingEarly)}`
      );
    }

    if (milestonesEnabled) {
      lines.push('', '--- Milestone Schedule ---');
      results.milestones.forEach((m) => {
        lines.push(
          `${m.name}: ${formatCurrency(m.amount)} (${m.percentage}%) — Due ${formatDate(m.dueDate)}`
        );
      });
    }

    lines.push('', 'Generated at invoiceflow.au/tools/payment-terms-calculator');
    navigator.clipboard.writeText(lines.join('\n')).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const inputClass =
    'w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500/40 focus:border-teal-500/40 transition-all';
  const labelClass = 'block text-sm font-medium text-slate-300 mb-1.5';
  const selectClass =
    'w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-teal-500/40 focus:border-teal-500/40 transition-all appearance-none cursor-pointer';

  // Timeline calculations for visual
  const timelineTotalDays = Math.max(results.termDays, 1);

  return (
    <div className="space-y-8">
      {/* Inputs */}
      <div className="glass rounded-2xl p-6 sm:p-8 space-y-6">
        <h2 className="text-xl font-bold text-white heading-font">Invoice Details</h2>
        <p className="text-sm text-slate-400">
          Enter your invoice details and payment terms to calculate the exact due date and
          payment schedule.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
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
            <label className={labelClass}>Invoice Amount ($)</label>
            <input
              type="number"
              value={invoiceAmount}
              onChange={(e) => setInvoiceAmount(e.target.value)}
              className={inputClass}
              placeholder="5000"
              min="0"
              step="100"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label className={labelClass}>Payment Terms</label>
            <select
              value={paymentTerms}
              onChange={(e) => setPaymentTerms(e.target.value as PaymentTermsType)}
              className={selectClass}
            >
              {PAYMENT_TERMS_OPTIONS.map((term) => (
                <option key={term} value={term} className="bg-slate-900 text-white">
                  {term}
                </option>
              ))}
            </select>
          </div>
          {paymentTerms === 'Custom' && (
            <div>
              <label className={labelClass}>Custom Days</label>
              <input
                type="number"
                value={customDays}
                onChange={(e) => setCustomDays(e.target.value)}
                className={inputClass}
                placeholder="45"
                min="1"
              />
            </div>
          )}
        </div>

        {/* Early Payment Discount Toggle */}
        <div className="border-t border-white/10 pt-6">
          <label className="flex items-center gap-3 cursor-pointer group">
            <div className="relative">
              <input
                type="checkbox"
                checked={earlyDiscountEnabled}
                onChange={(e) => setEarlyDiscountEnabled(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-10 h-6 bg-white/10 rounded-full peer-checked:bg-teal-500/60 transition-colors" />
              <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow-sm peer-checked:translate-x-4 transition-transform" />
            </div>
            <div>
              <span className="text-sm font-medium text-white group-hover:text-teal-400 transition-colors">
                Early Payment Discount
              </span>
              <p className="text-xs text-slate-500">e.g. 2/10 Net 30 — offer a discount for faster payment</p>
            </div>
          </label>

          {earlyDiscountEnabled && (
            <div className="grid sm:grid-cols-2 gap-6 mt-4">
              <div>
                <label className={labelClass}>Discount Percentage (%)</label>
                <input
                  type="number"
                  value={discountPercent}
                  onChange={(e) => setDiscountPercent(e.target.value)}
                  className={inputClass}
                  placeholder="2"
                  min="0"
                  max="100"
                  step="0.5"
                />
                <p className="text-xs text-slate-500 mt-1">Typically 1-3%</p>
              </div>
              <div>
                <label className={labelClass}>Discount Window (days)</label>
                <input
                  type="number"
                  value={discountWindowDays}
                  onChange={(e) => setDiscountWindowDays(e.target.value)}
                  className={inputClass}
                  placeholder="10"
                  min="1"
                />
                <p className="text-xs text-slate-500 mt-1">Days from invoice date to claim discount</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Results Panel */}
      <div className="glass rounded-2xl p-6 sm:p-8 space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-white heading-font">Payment Schedule</h2>
          <button
            onClick={handleCopy}
            className="flex items-center gap-2 text-sm px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all"
          >
            {copied ? (
              <span className="text-emerald-400">Copied</span>
            ) : (
              <>Copy Results</>
            )}
          </button>
        </div>

        {/* Key Dates */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-teal-500/10 to-blue-500/10 border border-teal-500/20 rounded-xl p-5">
            <p className="text-xs text-teal-400/70 uppercase tracking-wide mb-1">Due Date</p>
            <p className="text-xl sm:text-2xl font-bold text-white">{formatDate(results.dueDate)}</p>
            <p className="text-sm text-slate-400 mt-1">
              {results.daysUntilDue > 0
                ? `${results.daysUntilDue} days from today`
                : results.daysUntilDue === 0
                  ? 'Due today'
                  : `${Math.abs(results.daysUntilDue)} days overdue`}
            </p>
          </div>
          <div className="bg-white/5 rounded-xl p-5">
            <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">Invoice Amount</p>
            <p className="text-xl sm:text-2xl font-bold text-white">{formatCurrency(results.amount)}</p>
            <p className="text-sm text-slate-400 mt-1">
              {paymentTerms}{paymentTerms === 'Custom' ? ` (${customDays} days)` : ''} terms
            </p>
          </div>
        </div>

        {/* Early Payment Discount Results */}
        {earlyDiscountEnabled && (
          <div>
            <h3 className="text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wide">
              Early Payment Discount
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-teal-500/10 border border-teal-500/20 rounded-xl p-4">
                <p className="text-xs text-teal-400/70 uppercase tracking-wide">Discount Deadline</p>
                <p className="text-base font-bold text-teal-400">
                  {formatShortDate(results.earlyDiscount.discountDeadline)}
                </p>
                <p className="text-xs text-slate-500 mt-0.5">
                  {discountWindowDays} days from invoice
                </p>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <p className="text-xs text-slate-500 uppercase tracking-wide">Discount Amount</p>
                <p className="text-base font-bold text-teal-400">
                  {formatCurrency(results.earlyDiscount.discountAmount)}
                </p>
                <p className="text-xs text-slate-500 mt-0.5">{discountPercent}% off</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <p className="text-xs text-slate-500 uppercase tracking-wide">Amount If Paid Early</p>
                <p className="text-base font-bold text-white">
                  {formatCurrency(results.earlyDiscount.amountIfPaidEarly)}
                </p>
                <p className="text-xs text-teal-400 mt-0.5">
                  Save {formatCurrency(results.earlyDiscount.savingsByPayingEarly)}
                </p>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <p className="text-xs text-slate-500 uppercase tracking-wide">Annualised Return</p>
                <p className="text-base font-bold text-amber-400">
                  {results.earlyDiscount.annualisedReturn.toFixed(1)}%
                </p>
                <p className="text-xs text-slate-500 mt-0.5">
                  For the client paying early
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Payment Timeline Visual */}
        <div>
          <h3 className="text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wide">
            Payment Timeline
          </h3>
          <div className="bg-white/5 rounded-xl p-5">
            {/* Timeline bar */}
            <div className="relative">
              <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                <span>Invoice Date</span>
                <span>Due Date</span>
              </div>

              <div className="relative h-8 bg-white/5 rounded-full overflow-hidden">
                {/* Early discount window (green segment) */}
                {earlyDiscountEnabled && timelineTotalDays > 0 && (
                  <div
                    className="absolute left-0 top-0 h-full bg-gradient-to-r from-teal-500/40 to-teal-500/20 rounded-l-full"
                    style={{
                      width: `${Math.min((parseInt(discountWindowDays) / timelineTotalDays) * 100, 100)}%`,
                    }}
                  />
                )}

                {/* Remaining period (amber segment) */}
                {earlyDiscountEnabled && timelineTotalDays > 0 && (
                  <div
                    className="absolute top-0 h-full bg-gradient-to-r from-amber-500/20 to-amber-500/30 rounded-r-full"
                    style={{
                      left: `${Math.min((parseInt(discountWindowDays) / timelineTotalDays) * 100, 100)}%`,
                      width: `${Math.max(100 - (parseInt(discountWindowDays) / timelineTotalDays) * 100, 0)}%`,
                    }}
                  />
                )}

                {/* Full amber bar when no discount */}
                {!earlyDiscountEnabled && (
                  <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-r from-amber-500/20 to-amber-500/30 rounded-full" />
                )}

                {/* Milestone markers */}
                {milestonesEnabled &&
                  results.milestones.map((m, i) => {
                    const position =
                      timelineTotalDays > 0
                        ? (m.dayOffset / timelineTotalDays) * 100
                        : 0;
                    return (
                      <div
                        key={i}
                        className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-blue-400 rounded-full border-2 border-slate-900 z-10"
                        style={{ left: `${Math.min(Math.max(position, 2), 98)}%` }}
                        title={`${m.name}: ${formatCurrency(m.amount)}`}
                      />
                    );
                  })}

                {/* Today marker */}
                {(() => {
                  const today = new Date();
                  today.setHours(0, 0, 0, 0);
                  const daysFromStart = daysBetween(results.startDate, today);
                  if (daysFromStart >= 0 && daysFromStart <= timelineTotalDays && timelineTotalDays > 0) {
                    const todayPosition = (daysFromStart / timelineTotalDays) * 100;
                    return (
                      <div
                        className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full border-2 border-teal-400 z-20 shadow-lg shadow-teal-400/30"
                        style={{ left: `${Math.min(Math.max(todayPosition, 1), 99)}%` }}
                        title="Today"
                      />
                    );
                  }
                  return null;
                })()}

                {/* Discount deadline marker */}
                {earlyDiscountEnabled && timelineTotalDays > 0 && (
                  <div
                    className="absolute top-1/2 -translate-y-1/2 w-0.5 h-full bg-teal-400/60 z-10"
                    style={{
                      left: `${Math.min((parseInt(discountWindowDays) / timelineTotalDays) * 100, 100)}%`,
                    }}
                  />
                )}
              </div>

              {/* Labels under timeline */}
              <div className="flex items-center justify-between text-xs mt-2">
                <span className="text-slate-400">{formatShortDate(results.startDate)}</span>
                {earlyDiscountEnabled && (
                  <span className="text-teal-400">
                    Discount: {formatShortDate(results.earlyDiscount.discountDeadline)}
                  </span>
                )}
                <span className="text-amber-400">{formatShortDate(results.dueDate)}</span>
              </div>

              {/* Legend */}
              <div className="flex flex-wrap gap-4 mt-3 text-xs text-slate-500">
                {earlyDiscountEnabled && (
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-teal-500/40" />
                    <span>Discount window</span>
                  </div>
                )}
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-amber-500/30" />
                  <span>Standard payment period</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-white border border-teal-400" />
                  <span>Today</span>
                </div>
                {milestonesEnabled && (
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-blue-400" />
                    <span>Milestone</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Milestone Payment Schedule */}
        <div className="border-t border-white/10 pt-6">
          <label className="flex items-center gap-3 cursor-pointer group">
            <div className="relative">
              <input
                type="checkbox"
                checked={milestonesEnabled}
                onChange={(e) => {
                  setMilestonesEnabled(e.target.checked);
                  if (e.target.checked && milestonePercentages.length !== milestoneCount) {
                    handleMilestoneCountChange(milestoneCount);
                  }
                }}
                className="sr-only peer"
              />
              <div className="w-10 h-6 bg-white/10 rounded-full peer-checked:bg-teal-500/60 transition-colors" />
              <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow-sm peer-checked:translate-x-4 transition-transform" />
            </div>
            <div>
              <span className="text-sm font-medium text-white group-hover:text-teal-400 transition-colors">
                Milestone Payment Schedule
              </span>
              <p className="text-xs text-slate-500">Split the invoice into deposit + progress + final payments</p>
            </div>
          </label>

          {milestonesEnabled && (
            <div className="mt-6 space-y-4">
              <div className="max-w-xs">
                <label className={labelClass}>Number of Milestones</label>
                <select
                  value={milestoneCount}
                  onChange={(e) => handleMilestoneCountChange(parseInt(e.target.value))}
                  className={selectClass}
                >
                  {[2, 3, 4, 5].map((n) => (
                    <option key={n} value={n} className="bg-slate-900 text-white">
                      {n} milestones
                    </option>
                  ))}
                </select>
              </div>

              {/* Milestone Cards */}
              <div className="grid gap-3">
                {results.milestones.map((milestone, i) => (
                  <div
                    key={i}
                    className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center gap-4"
                  >
                    <div className="flex items-center gap-3 sm:w-44 shrink-0">
                      <div className="w-8 h-8 bg-gradient-to-br from-teal-400/20 to-blue-500/20 border border-teal-500/30 rounded-lg flex items-center justify-center text-xs font-bold text-teal-400">
                        {i + 1}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">{milestone.name}</p>
                        <p className="text-xs text-slate-500">{formatDate(milestone.dueDate)}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 flex-1">
                      <div className="w-20">
                        <input
                          type="number"
                          value={milestonePercentages[i]}
                          onChange={(e) => handleMilestonePercentageChange(i, e.target.value)}
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-white text-sm text-center focus:outline-none focus:ring-2 focus:ring-teal-500/40 transition-all"
                          min="0"
                          max="100"
                        />
                      </div>
                      <span className="text-slate-500 text-sm">%</span>
                      <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-teal-400 to-blue-500 rounded-full transition-all duration-300"
                          style={{ width: `${Math.min(milestone.percentage, 100)}%` }}
                        />
                      </div>
                      <span className="text-white font-semibold text-sm min-w-[80px] text-right">
                        {formatCurrency(milestone.amount)}
                      </span>
                    </div>
                  </div>
                ))}

                {/* Total row */}
                <div className="flex items-center justify-between pt-2 px-4">
                  <span className="text-sm font-semibold text-slate-300">Total</span>
                  <div className="flex items-center gap-4">
                    <span
                      className={`text-sm font-bold ${
                        results.totalMilestonePct === 100
                          ? 'text-teal-400'
                          : 'text-rose-400'
                      }`}
                    >
                      {results.totalMilestonePct}%
                    </span>
                    <span className="text-sm font-bold text-white">
                      {formatCurrency(results.amount * (results.totalMilestonePct / 100))}
                    </span>
                  </div>
                </div>
                {results.totalMilestonePct !== 100 && (
                  <p className="text-xs text-rose-400 px-4">
                    Milestone percentages should add up to 100%. Currently {results.totalMilestonePct}%.
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
