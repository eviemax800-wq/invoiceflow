'use client';

import { useState, useMemo } from 'react';

function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
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
    year: 'numeric',
  });
}

function getTodayString(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function addInterval(date: Date, frequency: Frequency, count: number): Date {
  const result = new Date(date);
  switch (frequency) {
    case 'weekly':
      result.setDate(result.getDate() + 7 * count);
      break;
    case 'fortnightly':
      result.setDate(result.getDate() + 14 * count);
      break;
    case 'monthly':
      result.setMonth(result.getMonth() + count);
      break;
  }
  return result;
}

function daysBetween(a: Date, b: Date): number {
  const msPerDay = 1000 * 60 * 60 * 24;
  return Math.round((b.getTime() - a.getTime()) / msPerDay);
}

type Frequency = 'weekly' | 'fortnightly' | 'monthly';

interface Installment {
  number: number;
  description: string;
  dueDate: Date;
  subtotal: number;
  gst: number;
  amount: number;
  balanceRemaining: number;
}

interface PlanResults {
  subtotal: number;
  gstAmount: number;
  totalWithGst: number;
  depositSubtotal: number;
  depositGst: number;
  depositAmount: number;
  remainingAfterDeposit: number;
  installmentSubtotal: number;
  installmentGst: number;
  installmentAmount: number;
  schedule: Installment[];
  finalDate: Date;
  totalDurationDays: number;
  dailyInterestRate: number;
}

export default function PaymentPlanCalculator() {
  const [projectValue, setProjectValue] = useState('10000');
  const [depositPercent, setDepositPercent] = useState(30);
  const [installmentCount, setInstallmentCount] = useState(3);
  const [frequency, setFrequency] = useState<Frequency>('monthly');
  const [startDate, setStartDate] = useState(getTodayString());
  const [includeGst, setIncludeGst] = useState(false);
  const [interestRate, setInterestRate] = useState('10');
  const [copied, setCopied] = useState(false);

  const results = useMemo<PlanResults>(() => {
    const total = parseFloat(projectValue) || 0;
    const start = startDate ? new Date(startDate + 'T00:00:00') : new Date();
    const gstRate = includeGst ? 0.1 : 0;
    const annualRate = (parseFloat(interestRate) || 0) / 100;
    const dailyRate = annualRate / 365;

    // Subtotal is always the project value; GST added on top
    const subtotal = total;
    const gstAmount = subtotal * gstRate;
    const totalWithGst = subtotal + gstAmount;

    // Deposit
    const depositFraction = depositPercent / 100;
    const depositSubtotal = subtotal * depositFraction;
    const depositGst = depositSubtotal * gstRate;
    const depositAmount = depositSubtotal + depositGst;

    // Remaining after deposit
    const remainingSubtotal = subtotal - depositSubtotal;
    const remainingGst = remainingSubtotal * gstRate;
    const remainingAfterDeposit = remainingSubtotal + remainingGst;

    // Per installment
    const installmentSubtotal = installmentCount > 0 ? remainingSubtotal / installmentCount : 0;
    const installmentGst = installmentSubtotal * gstRate;
    const installmentAmount = installmentSubtotal + installmentGst;

    // Build schedule
    const schedule: Installment[] = [];
    let runningBalance = totalWithGst;

    // Deposit row (if deposit > 0)
    if (depositPercent > 0) {
      runningBalance -= depositAmount;
      schedule.push({
        number: 0,
        description: 'Deposit',
        dueDate: new Date(start),
        subtotal: depositSubtotal,
        gst: depositGst,
        amount: depositAmount,
        balanceRemaining: Math.max(runningBalance, 0),
      });
    }

    // Installments
    for (let i = 1; i <= installmentCount; i++) {
      const dueDate = addInterval(start, frequency, i);
      const isLast = i === installmentCount;

      // Last installment picks up any rounding remainder
      let instSubtotal: number;
      let instGst: number;
      let instAmount: number;

      if (isLast) {
        instAmount = Math.max(runningBalance, 0);
        instSubtotal = includeGst ? instAmount / 1.1 : instAmount;
        instGst = instAmount - instSubtotal;
      } else {
        instSubtotal = installmentSubtotal;
        instGst = installmentGst;
        instAmount = installmentAmount;
      }

      runningBalance -= instAmount;

      schedule.push({
        number: i,
        description:
          i === installmentCount
            ? `Final Payment (${i} of ${installmentCount})`
            : `Installment ${i} of ${installmentCount}`,
        dueDate,
        subtotal: instSubtotal,
        gst: instGst,
        amount: instAmount,
        balanceRemaining: Math.max(runningBalance, 0),
      });
    }

    const finalDate =
      schedule.length > 0 ? schedule[schedule.length - 1].dueDate : start;
    const totalDurationDays = daysBetween(start, finalDate);

    return {
      subtotal,
      gstAmount,
      totalWithGst,
      depositSubtotal,
      depositGst,
      depositAmount,
      remainingAfterDeposit,
      installmentSubtotal,
      installmentGst,
      installmentAmount,
      schedule,
      finalDate,
      totalDurationDays,
      dailyInterestRate: dailyRate,
    };
  }, [projectValue, depositPercent, installmentCount, frequency, startDate, includeGst, interestRate]);

  const handleCopy = () => {
    const lines = [
      'Payment Plan Schedule — InvoiceFlow',
      '======================================',
      '',
      `Project Value: ${formatCurrency(results.subtotal)}`,
    ];

    if (includeGst) {
      lines.push(
        `GST (10%): ${formatCurrency(results.gstAmount)}`,
        `Total (inc. GST): ${formatCurrency(results.totalWithGst)}`
      );
    }

    lines.push(
      `Deposit: ${depositPercent}% (${formatCurrency(results.depositAmount)})`,
      `Installments: ${installmentCount} x ${formatCurrency(results.installmentAmount)} (${frequency})`,
      `Late Payment Interest: ${interestRate}% p.a.`,
      '',
      '--- Payment Schedule ---',
      ''
    );

    results.schedule.forEach((inst) => {
      lines.push(
        `${inst.description}`
      );
      lines.push(
        `  Due: ${formatDate(inst.dueDate)}`
      );
      if (includeGst) {
        lines.push(
          `  Subtotal: ${formatCurrency(inst.subtotal)}  |  GST: ${formatCurrency(inst.gst)}  |  Total: ${formatCurrency(inst.amount)}`
        );
      } else {
        lines.push(
          `  Amount: ${formatCurrency(inst.amount)}`
        );
      }
      lines.push(
        `  Balance Remaining: ${formatCurrency(inst.balanceRemaining)}`,
        ''
      );
    });

    lines.push(
      `Final Payment Date: ${formatDate(results.finalDate)}`,
      `Total Duration: ${results.totalDurationDays} days`,
      '',
      'Generated at invoiceflow.au/tools/payment-plan-calculator'
    );

    navigator.clipboard.writeText(lines.join('\n')).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const inputClass =
    'w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500/40 focus:border-teal-500/40 transition-all';
  const labelClass = 'block text-sm font-medium text-slate-300 mb-1.5';

  // Timeline calculations
  const timelineTotalDays = Math.max(results.totalDurationDays, 1);

  return (
    <div className="space-y-8">
      {/* Inputs */}
      <div className="glass rounded-2xl p-6 sm:p-8 space-y-6">
        <h2 className="text-xl font-bold text-white heading-font">Project Details</h2>
        <p className="text-sm text-slate-400">
          Enter your project value and payment plan preferences to generate a structured
          installment schedule.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label className={labelClass}>Total Project Value ($)</label>
            <input
              type="number"
              value={projectValue}
              onChange={(e) => setProjectValue(e.target.value)}
              className={inputClass}
              placeholder="10000"
              min="0"
              step="100"
            />
          </div>
          <div>
            <label className={labelClass}>Start Date</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className={inputClass}
            />
          </div>
        </div>

        {/* Deposit Slider */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className="text-sm font-medium text-slate-300">Deposit Percentage</label>
            <span className="text-sm font-bold text-teal-400">{depositPercent}%</span>
          </div>
          <input
            type="range"
            min="0"
            max="50"
            step="5"
            value={depositPercent}
            onChange={(e) => setDepositPercent(parseInt(e.target.value))}
            className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer accent-teal-500 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-teal-400 [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:shadow-teal-400/30 [&::-webkit-slider-thumb]:cursor-pointer"
          />
          <div className="flex justify-between text-xs text-slate-500 mt-1">
            <span>0%</span>
            <span>25%</span>
            <span>50%</span>
          </div>
          {depositPercent > 0 && (
            <p className="text-xs text-slate-400 mt-2">
              Deposit amount: <span className="text-white font-medium">{formatCurrency(results.depositAmount)}</span>
              {includeGst && <span className="text-slate-500"> (inc. GST)</span>}
            </p>
          )}
        </div>

        {/* Installments & Frequency */}
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label className={labelClass}>Number of Installments</label>
            <div className="flex items-center gap-3">
              <input
                type="range"
                min="2"
                max="12"
                step="1"
                value={installmentCount}
                onChange={(e) => setInstallmentCount(parseInt(e.target.value))}
                className="flex-1 h-2 bg-white/10 rounded-full appearance-none cursor-pointer accent-teal-500 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-teal-400 [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:shadow-teal-400/30 [&::-webkit-slider-thumb]:cursor-pointer"
              />
              <span className="text-white font-bold text-lg min-w-[2rem] text-center">{installmentCount}</span>
            </div>
          </div>
          <div>
            <label className={labelClass}>Installment Frequency</label>
            <div className="flex gap-2">
              {(['weekly', 'fortnightly', 'monthly'] as const).map((freq) => (
                <button
                  key={freq}
                  onClick={() => setFrequency(freq)}
                  className={`flex-1 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    frequency === freq
                      ? 'bg-gradient-to-r from-teal-500/30 to-blue-500/30 border border-teal-500/40 text-teal-400'
                      : 'bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {freq.charAt(0).toUpperCase() + freq.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* GST & Interest */}
        <div className="border-t border-white/10 pt-6 grid sm:grid-cols-2 gap-6">
          {/* GST Toggle */}
          <div>
            <label className="flex items-center gap-3 cursor-pointer group">
              <div className="relative">
                <input
                  type="checkbox"
                  checked={includeGst}
                  onChange={(e) => setIncludeGst(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-10 h-6 bg-white/10 rounded-full peer-checked:bg-teal-500/60 transition-colors" />
                <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow-sm peer-checked:translate-x-4 transition-transform" />
              </div>
              <div>
                <span className="text-sm font-medium text-white group-hover:text-teal-400 transition-colors">
                  Include GST (10%)
                </span>
                <p className="text-xs text-slate-500">Add 10% GST to each installment</p>
              </div>
            </label>
          </div>

          {/* Late Payment Interest */}
          <div>
            <label className={labelClass}>Late Payment Interest (% p.a.)</label>
            <input
              type="number"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              className={inputClass}
              placeholder="10"
              min="0"
              max="24"
              step="0.5"
            />
            <p className="text-xs text-slate-500 mt-1">
              {parseFloat(interestRate) > 0
                ? `${(results.dailyInterestRate * 100).toFixed(4)}% per day on overdue amounts`
                : 'No late payment interest'}
            </p>
          </div>
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
              <>Copy Schedule</>
            )}
          </button>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          <div className="bg-gradient-to-br from-teal-500/10 to-blue-500/10 border border-teal-500/20 rounded-xl p-4">
            <p className="text-xs text-teal-400/70 uppercase tracking-wide mb-1">Total Value</p>
            <p className="text-lg sm:text-xl font-bold text-white">
              {formatCurrency(results.totalWithGst)}
            </p>
            {includeGst && (
              <p className="text-xs text-slate-500 mt-0.5">inc. GST</p>
            )}
          </div>
          <div className="bg-white/5 rounded-xl p-4">
            <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">Deposit</p>
            <p className="text-lg sm:text-xl font-bold text-white">
              {depositPercent > 0 ? formatCurrency(results.depositAmount) : '$0.00'}
            </p>
            <p className="text-xs text-slate-500 mt-0.5">{depositPercent}%</p>
          </div>
          <div className="bg-white/5 rounded-xl p-4">
            <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">Per Installment</p>
            <p className="text-lg sm:text-xl font-bold text-white">
              {formatCurrency(results.installmentAmount)}
            </p>
            <p className="text-xs text-slate-500 mt-0.5">{frequency}</p>
          </div>
          <div className="bg-white/5 rounded-xl p-4">
            <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">Final Payment</p>
            <p className="text-lg sm:text-xl font-bold text-white">
              {formatShortDate(results.finalDate)}
            </p>
          </div>
          <div className="bg-white/5 rounded-xl p-4 col-span-2 sm:col-span-1">
            <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">Duration</p>
            <p className="text-lg sm:text-xl font-bold text-white">
              {results.totalDurationDays} days
            </p>
            <p className="text-xs text-slate-500 mt-0.5">
              {Math.ceil(results.totalDurationDays / 7)} weeks
            </p>
          </div>
        </div>

        {/* GST Breakdown */}
        {includeGst && (
          <div className="bg-gradient-to-r from-teal-500/10 to-blue-500/10 border border-teal-500/20 rounded-xl p-5">
            <h3 className="text-sm font-semibold text-teal-400 mb-3 uppercase tracking-wide">
              GST Breakdown
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-300">Subtotal (ex. GST)</span>
                <span className="text-white font-medium">{formatCurrency(results.subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-300">GST (10%)</span>
                <span className="text-teal-400 font-medium">{formatCurrency(results.gstAmount)}</span>
              </div>
              <hr className="border-white/10" />
              <div className="flex justify-between">
                <span className="text-white font-semibold">Total (inc. GST)</span>
                <span className="text-white font-bold">{formatCurrency(results.totalWithGst)}</span>
              </div>
            </div>
          </div>
        )}

        {/* Payment Schedule Table */}
        <div>
          <h3 className="text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wide">
            Full Payment Schedule
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 px-3 text-slate-400 font-semibold">#</th>
                  <th className="text-left py-3 px-3 text-slate-400 font-semibold">Description</th>
                  <th className="text-left py-3 px-3 text-slate-400 font-semibold">Due Date</th>
                  {includeGst && (
                    <>
                      <th className="text-right py-3 px-3 text-slate-400 font-semibold">Subtotal</th>
                      <th className="text-right py-3 px-3 text-slate-400 font-semibold">GST</th>
                    </>
                  )}
                  <th className="text-right py-3 px-3 text-slate-400 font-semibold">Amount</th>
                  <th className="text-right py-3 px-3 text-slate-400 font-semibold">Balance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {results.schedule.map((inst, idx) => (
                  <tr
                    key={idx}
                    className={
                      inst.number === 0
                        ? 'bg-teal-500/5'
                        : idx % 2 === 0
                          ? 'bg-white/[0.02]'
                          : ''
                    }
                  >
                    <td className="py-3 px-3">
                      <div
                        className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold ${
                          inst.number === 0
                            ? 'bg-gradient-to-br from-teal-400/20 to-blue-500/20 border border-teal-500/30 text-teal-400'
                            : 'bg-white/5 border border-white/10 text-slate-400'
                        }`}
                      >
                        {inst.number === 0 ? 'D' : inst.number}
                      </div>
                    </td>
                    <td className="py-3 px-3 text-white font-medium">{inst.description}</td>
                    <td className="py-3 px-3 text-slate-300">{formatShortDate(inst.dueDate)}</td>
                    {includeGst && (
                      <>
                        <td className="py-3 px-3 text-right text-slate-400">
                          {formatCurrency(inst.subtotal)}
                        </td>
                        <td className="py-3 px-3 text-right text-teal-400/70">
                          {formatCurrency(inst.gst)}
                        </td>
                      </>
                    )}
                    <td className="py-3 px-3 text-right text-white font-semibold">
                      {formatCurrency(inst.amount)}
                    </td>
                    <td className="py-3 px-3 text-right text-slate-400">
                      {formatCurrency(inst.balanceRemaining)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Visual Timeline */}
        <div>
          <h3 className="text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wide">
            Payment Timeline
          </h3>
          <div className="bg-white/5 rounded-xl p-5">
            <div className="relative">
              <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                <span>Start</span>
                <span>Final Payment</span>
              </div>

              <div className="relative h-10 bg-white/5 rounded-full overflow-hidden">
                {/* Progress bar background */}
                <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-r from-teal-500/20 via-blue-500/20 to-teal-500/20 rounded-full" />

                {/* Payment markers */}
                {results.schedule.map((inst, i) => {
                  const daysFromStart = daysBetween(
                    results.schedule[0]?.dueDate || new Date(),
                    inst.dueDate
                  );
                  const position =
                    timelineTotalDays > 0
                      ? (daysFromStart / timelineTotalDays) * 100
                      : i === 0
                        ? 0
                        : 100;
                  const clampedPos = Math.min(Math.max(position, 3), 97);

                  return (
                    <div
                      key={i}
                      className="absolute top-1/2 -translate-y-1/2 flex flex-col items-center z-10"
                      style={{ left: `${clampedPos}%` }}
                      title={`${inst.description}: ${formatCurrency(inst.amount)} — ${formatShortDate(inst.dueDate)}`}
                    >
                      <div
                        className={`w-4 h-4 rounded-full border-2 border-slate-900 shadow-lg ${
                          inst.number === 0
                            ? 'bg-teal-400 shadow-teal-400/30'
                            : 'bg-blue-400 shadow-blue-400/30'
                        }`}
                      />
                    </div>
                  );
                })}
              </div>

              {/* Date labels under timeline */}
              <div className="flex items-center justify-between text-xs mt-2">
                <span className="text-teal-400">
                  {results.schedule.length > 0
                    ? formatShortDate(results.schedule[0].dueDate)
                    : ''}
                </span>
                <span className="text-blue-400">
                  {results.schedule.length > 0
                    ? formatShortDate(results.schedule[results.schedule.length - 1].dueDate)
                    : ''}
                </span>
              </div>

              {/* Legend */}
              <div className="flex flex-wrap gap-4 mt-3 text-xs text-slate-500">
                {depositPercent > 0 && (
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-teal-400" />
                    <span>Deposit</span>
                  </div>
                )}
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-blue-400" />
                  <span>Installment</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Late Payment Interest Note */}
        {parseFloat(interestRate) > 0 && (
          <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4">
            <p className="text-sm text-amber-300">
              <span className="font-semibold">Late payment clause:</span> Overdue amounts will
              attract interest at {interestRate}% per annum ({(results.dailyInterestRate * 100).toFixed(4)}% per day),
              calculated daily on the outstanding balance from the due date until payment is received.
            </p>
          </div>
        )}

        {/* Cross-links */}
        <div className="border-t border-white/10 pt-6">
          <h3 className="text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wide">
            Related Tools
          </h3>
          <div className="grid sm:grid-cols-3 gap-3">
            <a
              href="/tools/payment-terms-calculator"
              className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-4 transition-all group"
            >
              <p className="text-sm font-medium text-white group-hover:text-teal-400 transition-colors">
                Payment Terms Calculator
              </p>
              <p className="text-xs text-slate-500 mt-1">
                Calculate due dates for Net 7/14/30/60/90 terms
              </p>
            </a>
            <a
              href="/tools/invoice-generator"
              className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-4 transition-all group"
            >
              <p className="text-sm font-medium text-white group-hover:text-teal-400 transition-colors">
                Invoice Template Generator
              </p>
              <p className="text-xs text-slate-500 mt-1">
                Generate professional invoices for each installment
              </p>
            </a>
            <a
              href="/tools/late-payment-calculator"
              className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-4 transition-all group"
            >
              <p className="text-sm font-medium text-white group-hover:text-teal-400 transition-colors">
                Late Payment Interest Calculator
              </p>
              <p className="text-xs text-slate-500 mt-1">
                Calculate interest on overdue installments
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
