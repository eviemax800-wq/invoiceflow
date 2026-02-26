'use client';

import { useState, useCallback } from 'react';

function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

function formatPercent(value: number): string {
  return `${value.toFixed(1)}%`;
}

/* ────────────── 2025-26 ATO Income Tax ────────────── */
function calculateIncomeTax(taxableIncome: number): number {
  if (taxableIncome <= 18200) return 0;
  if (taxableIncome <= 45000) return (taxableIncome - 18200) * 0.16;
  if (taxableIncome <= 135000) return 4288 + (taxableIncome - 45000) * 0.30;
  if (taxableIncome <= 190000) return 31288 + (taxableIncome - 135000) * 0.37;
  return 51638 + (taxableIncome - 190000) * 0.45;
}

/* ────────────── Medicare Levy (2%, with low-income reduction) ────────────── */
function calculateMedicareLevy(taxableIncome: number): number {
  if (taxableIncome <= 26000) return 0;
  if (taxableIncome < 32500) {
    // Phase-in: 10% of the amount exceeding the threshold
    return (taxableIncome - 26000) * 0.10;
  }
  return taxableIncome * 0.02;
}

/* ────────────── HELP/HECS Repayment 2025-26 thresholds ────────────── */
function calculateHELPRepayment(repaymentIncome: number): number {
  if (repaymentIncome < 54435) return 0;
  if (repaymentIncome <= 62850) return repaymentIncome * 0.01;
  if (repaymentIncome <= 66620) return repaymentIncome * 0.02;
  if (repaymentIncome <= 70618) return repaymentIncome * 0.025;
  if (repaymentIncome <= 74855) return repaymentIncome * 0.03;
  if (repaymentIncome <= 79346) return repaymentIncome * 0.035;
  if (repaymentIncome <= 84107) return repaymentIncome * 0.04;
  if (repaymentIncome <= 89154) return repaymentIncome * 0.045;
  if (repaymentIncome <= 94503) return repaymentIncome * 0.05;
  if (repaymentIncome <= 100174) return repaymentIncome * 0.055;
  if (repaymentIncome <= 106185) return repaymentIncome * 0.06;
  if (repaymentIncome <= 112556) return repaymentIncome * 0.065;
  if (repaymentIncome <= 119309) return repaymentIncome * 0.07;
  if (repaymentIncome <= 126467) return repaymentIncome * 0.075;
  if (repaymentIncome <= 134056) return repaymentIncome * 0.08;
  if (repaymentIncome <= 142100) return repaymentIncome * 0.085;
  if (repaymentIncome <= 150626) return repaymentIncome * 0.09;
  if (repaymentIncome <= 159663) return repaymentIncome * 0.095;
  return repaymentIncome * 0.10;
}

/* ────────────── Quarter info ────────────── */
const QUARTERS = [
  { label: 'Q1', period: 'Jul - Sep', due: '28 October' },
  { label: 'Q2', period: 'Oct - Dec', due: '28 February' },
  { label: 'Q3', period: 'Jan - Mar', due: '28 April' },
  { label: 'Q4', period: 'Apr - Jun', due: '28 July' },
];

type InstallmentMethod = 'rate' | 'amount';

export default function PAYGCalculator() {
  const [annualIncome, setAnnualIncome] = useState('');
  const [businessExpenses, setBusinessExpenses] = useState('');
  const [paygRate, setPaygRate] = useState('');
  const [installmentMethod, setInstallmentMethod] = useState<InstallmentMethod>('rate');
  const [quarterlyAmount, setQuarterlyAmount] = useState('');
  const [gstRegistered, setGstRegistered] = useState(false);
  const [otherIncome, setOtherIncome] = useState('');
  const [hasHELP, setHasHELP] = useState(false);
  const [copied, setCopied] = useState(false);

  // Parse values
  const income = parseFloat(annualIncome) || 0;
  const expenses = parseFloat(businessExpenses) || 0;
  const rate = parseFloat(paygRate) || 0;
  const fixedQuarterly = parseFloat(quarterlyAmount) || 0;
  const other = parseFloat(otherIncome) || 0;

  // Core calculations
  const netBusinessIncome = Math.max(0, income - expenses);
  const totalTaxableIncome = Math.max(0, netBusinessIncome + other);

  // PAYG installments
  let quarterlyInstallment = 0;
  if (installmentMethod === 'rate') {
    // Rate method: rate% * business income for the quarter
    quarterlyInstallment = (income / 4) * (rate / 100);
  } else {
    quarterlyInstallment = fixedQuarterly;
  }
  const annualPAYG = quarterlyInstallment * 4;

  // Estimated actual tax liability
  const incomeTax = calculateIncomeTax(totalTaxableIncome);
  const medicareLevy = calculateMedicareLevy(totalTaxableIncome);
  const helpRepayment = hasHELP ? calculateHELPRepayment(totalTaxableIncome) : 0;
  const totalEstimatedTax = incomeTax + medicareLevy + helpRepayment;

  // Shortfall / surplus
  const difference = annualPAYG - totalEstimatedTax;
  const isSurplus = difference >= 0;
  const shortfallAmount = Math.abs(difference);

  // Monthly cash flow
  const monthlySetAside = totalEstimatedTax / 12;

  // Effective rate
  const effectiveRate = totalTaxableIncome > 0 ? (totalEstimatedTax / totalTaxableIncome) * 100 : 0;

  // Shortfall severity
  const getShortfallStatus = () => {
    if (totalEstimatedTax === 0) return 'neutral';
    const ratio = difference / totalEstimatedTax;
    if (ratio >= 0) return 'surplus';
    if (ratio > -0.1) return 'close';
    return 'shortfall';
  };
  const status = getShortfallStatus();

  const statusColors = {
    neutral: 'border-white/10 bg-white/5',
    surplus: 'border-emerald-500/30 bg-emerald-500/10',
    close: 'border-amber-500/30 bg-amber-500/10',
    shortfall: 'border-red-500/30 bg-red-500/10',
  };

  const statusTextColors = {
    neutral: 'text-slate-400',
    surplus: 'text-emerald-400',
    close: 'text-amber-400',
    shortfall: 'text-red-400',
  };

  const handleCopy = useCallback(() => {
    const lines = [
      `PAYG Installment Estimate (2025-26)`,
      `====================================`,
      `Annual Business Income: ${formatCurrency(income)}`,
      `Business Expenses: ${formatCurrency(expenses)}`,
      `Net Business Income: ${formatCurrency(netBusinessIncome)}`,
      other > 0 ? `Other Income: ${formatCurrency(other)}` : null,
      `Total Taxable Income: ${formatCurrency(totalTaxableIncome)}`,
      ``,
      `PAYG Method: ${installmentMethod === 'rate' ? `Rate (${rate}%)` : 'Fixed Amount'}`,
      `Quarterly Installment: ${formatCurrency(quarterlyInstallment)}`,
      `Annual PAYG Total: ${formatCurrency(annualPAYG)}`,
      ``,
      `Estimated Income Tax: ${formatCurrency(incomeTax)}`,
      `Medicare Levy: ${formatCurrency(medicareLevy)}`,
      hasHELP ? `HELP Repayment: ${formatCurrency(helpRepayment)}` : null,
      `Total Estimated Tax: ${formatCurrency(totalEstimatedTax)}`,
      ``,
      isSurplus
        ? `Surplus (potential refund): ${formatCurrency(shortfallAmount)}`
        : `Shortfall (extra owed at tax time): ${formatCurrency(shortfallAmount)}`,
      `Monthly Set-Aside Recommended: ${formatCurrency(monthlySetAside)}`,
    ].filter(Boolean).join('\n');

    navigator.clipboard.writeText(lines);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [income, expenses, netBusinessIncome, other, totalTaxableIncome, installmentMethod, rate, quarterlyInstallment, annualPAYG, incomeTax, medicareLevy, hasHELP, helpRepayment, totalEstimatedTax, isSurplus, shortfallAmount, monthlySetAside]);

  const hasInput = income > 0;

  return (
    <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
      {/* ──── Input Fields ──── */}
      <div className="space-y-5 mb-8">
        {/* Annual Business Income */}
        <div>
          <label className="block text-sm text-slate-400 mb-2">
            Annual Business Income <span className="text-slate-600">(gross)</span>
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg">$</span>
            <input
              type="number"
              inputMode="decimal"
              step="0.01"
              min="0"
              value={annualIncome}
              onChange={(e) => setAnnualIncome(e.target.value)}
              placeholder="0.00"
              className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-10 pr-4 text-2xl text-white font-mono placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all"
              autoFocus
            />
          </div>
        </div>

        {/* Business Expenses */}
        <div>
          <label className="block text-sm text-slate-400 mb-2">
            Business Expenses <span className="text-slate-600">(deductible)</span>
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg">$</span>
            <input
              type="number"
              inputMode="decimal"
              step="0.01"
              min="0"
              value={businessExpenses}
              onChange={(e) => setBusinessExpenses(e.target.value)}
              placeholder="0.00"
              className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-lg text-white font-mono placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all"
            />
          </div>
        </div>

        {/* Installment Method */}
        <div>
          <label className="block text-sm text-slate-400 mb-3">
            Installment Method
          </label>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => setInstallmentMethod('rate')}
              className={`py-3 px-4 rounded-xl text-sm font-medium transition-all border ${
                installmentMethod === 'rate'
                  ? 'bg-violet-500/20 border-violet-500/40 text-violet-300'
                  : 'bg-white/5 border-white/10 text-slate-400 hover:bg-white/10'
              }`}
            >
              Rate Method
              <span className="block text-xs mt-0.5 opacity-70">% of income</span>
            </button>
            <button
              onClick={() => setInstallmentMethod('amount')}
              className={`py-3 px-4 rounded-xl text-sm font-medium transition-all border ${
                installmentMethod === 'amount'
                  ? 'bg-violet-500/20 border-violet-500/40 text-violet-300'
                  : 'bg-white/5 border-white/10 text-slate-400 hover:bg-white/10'
              }`}
            >
              Amount Method
              <span className="block text-xs mt-0.5 opacity-70">Fixed $ per quarter</span>
            </button>
          </div>
        </div>

        {/* Rate OR Amount input */}
        {installmentMethod === 'rate' ? (
          <div>
            <label className="block text-sm text-slate-400 mb-2">
              PAYG Installment Rate
            </label>
            <div className="relative">
              <input
                type="number"
                inputMode="decimal"
                step="0.1"
                min="0"
                max="100"
                value={paygRate}
                onChange={(e) => setPaygRate(e.target.value)}
                placeholder="0"
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-4 pr-10 text-lg text-white font-mono placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg">%</span>
            </div>
            <p className="text-xs text-slate-500 mt-1.5">
              Check your latest BAS or ATO notice for your rate, typically 2-15%
            </p>
          </div>
        ) : (
          <div>
            <label className="block text-sm text-slate-400 mb-2">
              Quarterly Installment Amount
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg">$</span>
              <input
                type="number"
                inputMode="decimal"
                step="0.01"
                min="0"
                value={quarterlyAmount}
                onChange={(e) => setQuarterlyAmount(e.target.value)}
                placeholder="0.00"
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-lg text-white font-mono placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all"
              />
            </div>
            <p className="text-xs text-slate-500 mt-1.5">
              The fixed amount from your most recent ATO PAYG installment notice
            </p>
          </div>
        )}

        {/* Two-column: Other Income + GST */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-slate-400 mb-2">
              Other Income <span className="text-slate-600">(optional)</span>
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg">$</span>
              <input
                type="number"
                inputMode="decimal"
                step="0.01"
                min="0"
                value={otherIncome}
                onChange={(e) => setOtherIncome(e.target.value)}
                placeholder="0.00"
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-lg text-white font-mono placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all"
              />
            </div>
            <p className="text-xs text-slate-500 mt-1">Employment, investments, etc.</p>
          </div>
          <div className="flex flex-col justify-center">
            {/* GST Toggle */}
            <div className="flex items-center justify-between py-3 px-4 rounded-xl bg-white/5">
              <div>
                <span className="text-slate-300 text-sm">GST Registered</span>
                <p className="text-xs text-slate-500 mt-0.5">Required if turnover exceeds $75k</p>
              </div>
              <button
                onClick={() => setGstRegistered(!gstRegistered)}
                className={`relative w-14 h-7 rounded-full transition-all ${
                  gstRegistered
                    ? 'bg-gradient-to-r from-violet-500 to-purple-500'
                    : 'bg-white/10'
                }`}
              >
                <div
                  className={`absolute top-0.5 left-0.5 h-6 w-6 rounded-full bg-white shadow-md transition-transform ${
                    gstRegistered ? 'translate-x-7' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* HELP/HECS Toggle */}
        <div className="flex items-center justify-between py-3 px-4 rounded-xl bg-white/5">
          <div>
            <span className="text-slate-300 text-sm">HELP/HECS-HELP Debt</span>
            <p className="text-xs text-slate-500 mt-0.5">Additional repayments based on income thresholds</p>
          </div>
          <button
            onClick={() => setHasHELP(!hasHELP)}
            className={`relative w-14 h-7 rounded-full transition-all ${
              hasHELP
                ? 'bg-gradient-to-r from-violet-500 to-purple-500'
                : 'bg-white/10'
            }`}
          >
            <div
              className={`absolute top-0.5 left-0.5 h-6 w-6 rounded-full bg-white shadow-md transition-transform ${
                hasHELP ? 'translate-x-7' : 'translate-x-0'
              }`}
            />
          </button>
        </div>
      </div>

      {/* Quick Income Buttons */}
      <div className="mb-8 flex flex-wrap gap-2 justify-center">
        {[50000, 75000, 100000, 120000, 150000, 200000].map((val) => (
          <button
            key={val}
            onClick={() => setAnnualIncome(val.toString())}
            className="px-3 py-1.5 rounded-lg text-xs text-slate-400 bg-white/5 hover:bg-white/10 hover:text-white transition-all"
          >
            ${val.toLocaleString()}
          </button>
        ))}
      </div>

      {/* ──── Results ──── */}
      {hasInput && (
        <div className="space-y-3">
          {/* Summary Cards */}
          <div className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-1 mt-2">
            PAYG Summary
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="py-3 px-4 rounded-xl bg-violet-500/10 border border-violet-500/20 text-center">
              <div className="text-xs text-violet-300/70 mb-1">Quarterly Installment</div>
              <div className="text-xl font-bold font-mono text-violet-300">{formatCurrency(quarterlyInstallment)}</div>
            </div>
            <div className="py-3 px-4 rounded-xl bg-purple-500/10 border border-purple-500/20 text-center">
              <div className="text-xs text-purple-300/70 mb-1">Annual PAYG Total</div>
              <div className="text-xl font-bold font-mono text-purple-300">{formatCurrency(annualPAYG)}</div>
            </div>
            <div className="py-3 px-4 rounded-xl bg-white/5 border border-white/10 text-center">
              <div className="text-xs text-slate-400 mb-1">Estimated Actual Tax</div>
              <div className="text-xl font-bold font-mono text-white">{formatCurrency(totalEstimatedTax)}</div>
            </div>
            <div className={`py-3 px-4 rounded-xl border text-center ${statusColors[status]}`}>
              <div className={`text-xs mb-1 ${statusTextColors[status]}`}>
                {isSurplus ? 'Surplus (Refund)' : 'Shortfall (Owed)'}
              </div>
              <div className={`text-xl font-bold font-mono ${statusTextColors[status]}`}>
                {isSurplus ? '+' : '-'}{formatCurrency(shortfallAmount)}
              </div>
            </div>
          </div>

          {/* Income Breakdown */}
          <div className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-1 mt-6">
            Income Breakdown
          </div>

          <div className="flex items-center justify-between py-2 px-4 rounded-xl bg-white/5">
            <span className="text-slate-400 text-sm">Gross Business Income</span>
            <span className="text-white font-mono">{formatCurrency(income)}</span>
          </div>

          {expenses > 0 && (
            <div className="flex items-center justify-between py-2 px-4 rounded-xl bg-white/5">
              <span className="text-slate-400 text-sm">Less: Business Expenses</span>
              <span className="text-red-400 font-mono">-{formatCurrency(expenses)}</span>
            </div>
          )}

          <div className="flex items-center justify-between py-2 px-4 rounded-xl bg-white/5">
            <span className="text-slate-400 text-sm">Net Business Income</span>
            <span className="text-white font-mono">{formatCurrency(netBusinessIncome)}</span>
          </div>

          {other > 0 && (
            <div className="flex items-center justify-between py-2 px-4 rounded-xl bg-white/5">
              <span className="text-slate-400 text-sm">Plus: Other Income</span>
              <span className="text-white font-mono">+{formatCurrency(other)}</span>
            </div>
          )}

          <div className="flex items-center justify-between py-3 px-4 rounded-xl bg-violet-500/10 border border-violet-500/20">
            <span className="text-violet-300 font-semibold text-sm">Total Taxable Income</span>
            <span className="text-violet-300 font-mono text-lg font-semibold">{formatCurrency(totalTaxableIncome)}</span>
          </div>

          {/* Tax Breakdown */}
          <div className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-1 mt-6">
            Estimated Tax Liability
          </div>

          <div className="flex items-center justify-between py-2 px-4 rounded-xl bg-white/5">
            <span className="text-slate-400 text-sm">Income Tax</span>
            <span className="text-white font-mono">{formatCurrency(incomeTax)}</span>
          </div>

          <div className="flex items-center justify-between py-2 px-4 rounded-xl bg-white/5">
            <span className="text-slate-400 text-sm">Medicare Levy</span>
            <span className="text-white font-mono">{formatCurrency(medicareLevy)}</span>
          </div>

          {hasHELP && helpRepayment > 0 && (
            <div className="flex items-center justify-between py-2 px-4 rounded-xl bg-white/5">
              <span className="text-slate-400 text-sm">HELP Repayment</span>
              <span className="text-white font-mono">{formatCurrency(helpRepayment)}</span>
            </div>
          )}

          <div className="flex items-center justify-between py-3 px-4 rounded-xl bg-white/10 border border-white/10">
            <span className="text-white font-semibold text-sm">Total Estimated Tax</span>
            <span className="text-white font-mono text-lg font-semibold">{formatCurrency(totalEstimatedTax)}</span>
          </div>

          <div className="flex items-center justify-between py-2 px-4 rounded-xl bg-white/5">
            <span className="text-slate-400 text-sm">Effective Tax Rate</span>
            <span className="text-white font-mono">{formatPercent(effectiveRate)}</span>
          </div>

          {/* PAYG vs Actual Comparison */}
          <div className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-1 mt-6">
            PAYG vs Actual Tax
          </div>

          <div className="flex items-center justify-between py-2 px-4 rounded-xl bg-white/5">
            <span className="text-slate-400 text-sm">Annual PAYG Installments</span>
            <span className="text-violet-300 font-mono">{formatCurrency(annualPAYG)}</span>
          </div>

          <div className="flex items-center justify-between py-2 px-4 rounded-xl bg-white/5">
            <span className="text-slate-400 text-sm">Estimated Actual Tax</span>
            <span className="text-white font-mono">{formatCurrency(totalEstimatedTax)}</span>
          </div>

          <div className={`flex items-center justify-between py-3 px-4 rounded-xl border ${statusColors[status]}`}>
            <div>
              <span className={`font-semibold text-sm ${statusTextColors[status]}`}>
                {isSurplus ? 'Estimated Refund' : 'Estimated Shortfall'}
              </span>
              <p className={`text-xs mt-0.5 opacity-70 ${statusTextColors[status]}`}>
                {isSurplus
                  ? 'You may get this back when you lodge your tax return'
                  : 'You will likely owe this when you lodge your tax return'}
              </p>
            </div>
            <span className={`font-mono text-lg font-bold ${statusTextColors[status]}`}>
              {isSurplus ? '+' : '-'}{formatCurrency(shortfallAmount)}
            </span>
          </div>

          {/* Quarter-by-Quarter Breakdown */}
          <div className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-1 mt-6">
            Quarterly Schedule
          </div>

          <div className="rounded-xl overflow-hidden border border-white/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-white/5">
                  <th className="text-left py-3 px-4 text-white font-semibold text-xs">Quarter</th>
                  <th className="text-left py-3 px-4 text-white font-semibold text-xs">Period</th>
                  <th className="text-left py-3 px-4 text-white font-semibold text-xs">BAS Due</th>
                  <th className="text-right py-3 px-4 text-white font-semibold text-xs">Installment</th>
                </tr>
              </thead>
              <tbody>
                {QUARTERS.map((q) => (
                  <tr key={q.label} className="border-t border-white/5">
                    <td className="py-3 px-4 text-violet-300 font-semibold">{q.label}</td>
                    <td className="py-3 px-4 text-slate-400">{q.period}</td>
                    <td className="py-3 px-4 text-slate-400">{q.due}</td>
                    <td className="py-3 px-4 text-white font-mono text-right">{formatCurrency(quarterlyInstallment)}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="border-t border-white/10 bg-white/5">
                  <td colSpan={3} className="py-3 px-4 text-white font-semibold text-sm">Annual Total</td>
                  <td className="py-3 px-4 text-violet-300 font-mono font-bold text-right">{formatCurrency(annualPAYG)}</td>
                </tr>
              </tfoot>
            </table>
          </div>

          <p className="text-xs text-slate-500">
            Electronic lodgers may receive a 2-week extension on these due dates.
          </p>

          {/* Cash Flow */}
          <div className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-1 mt-6">
            Cash Flow Allocation
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="flex items-center justify-between py-3 px-4 rounded-xl bg-violet-500/10 border border-violet-500/20">
              <div>
                <span className="text-violet-300 text-sm font-medium">Set Aside Monthly</span>
                <p className="text-xs text-violet-300/60 mt-0.5">Based on estimated tax liability</p>
              </div>
              <span className="text-violet-300 font-mono text-lg font-bold">{formatCurrency(monthlySetAside)}</span>
            </div>
            <div className="flex items-center justify-between py-3 px-4 rounded-xl bg-white/5 border border-white/10">
              <div>
                <span className="text-slate-300 text-sm font-medium">Set Aside Weekly</span>
                <p className="text-xs text-slate-500 mt-0.5">Spread across 52 weeks</p>
              </div>
              <span className="text-white font-mono text-lg font-bold">{formatCurrency(totalEstimatedTax / 52)}</span>
            </div>
          </div>

          {gstRegistered && (
            <div className="flex items-center justify-between py-2 px-4 rounded-xl bg-white/5">
              <div>
                <span className="text-slate-400 text-sm">GST to Collect (est.)</span>
                <p className="text-xs text-slate-500 mt-0.5">10% on business income, reported on BAS</p>
              </div>
              <span className="text-white font-mono">{formatCurrency(income * 0.1)}</span>
            </div>
          )}

          {/* Visual comparison bar */}
          <div className="mt-6 pt-6 border-t border-white/10">
            <div className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-3">
              PAYG Installments vs Estimated Tax
            </div>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-xs text-slate-400 mb-1">
                  <span>PAYG Installments</span>
                  <span className="font-mono">{formatCurrency(annualPAYG)}</span>
                </div>
                <div className="h-6 w-full rounded-lg bg-white/5 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-violet-500 to-purple-500 rounded-lg transition-all duration-500"
                    style={{ width: `${totalEstimatedTax > 0 ? Math.min(100, (annualPAYG / Math.max(annualPAYG, totalEstimatedTax)) * 100) : 0}%` }}
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs text-slate-400 mb-1">
                  <span>Estimated Actual Tax</span>
                  <span className="font-mono">{formatCurrency(totalEstimatedTax)}</span>
                </div>
                <div className="h-6 w-full rounded-lg bg-white/5 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-slate-400 to-slate-300 rounded-lg transition-all duration-500"
                    style={{ width: `${annualPAYG > 0 ? Math.min(100, (totalEstimatedTax / Math.max(annualPAYG, totalEstimatedTax)) * 100) : (totalEstimatedTax > 0 ? 100 : 0)}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Tips */}
          <div className="mt-6 pt-6 border-t border-white/10">
            <div className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-3">
              Tips for Managing PAYG
            </div>
            <div className="grid gap-3">
              <div className="bg-white/5 rounded-xl p-4">
                <div className="text-violet-300 font-semibold text-sm mb-1">Vary Your Rate</div>
                <p className="text-xs text-slate-400">
                  If your income changes significantly, lodge a PAYG instalment variation (form T2) through the ATO portal or your tax agent. This prevents overpaying or underpaying.
                </p>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <div className="text-violet-300 font-semibold text-sm mb-1">When to Request a Variation</div>
                <p className="text-xs text-slate-400">
                  If your business income drops or rises by more than 15% compared to last year, consider varying your installment. The ATO won&apos;t charge penalties if your varied amount ends up being at least 85% of your actual tax.
                </p>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <div className="text-violet-300 font-semibold text-sm mb-1">Consequences of Not Paying</div>
                <p className="text-xs text-slate-400">
                  Late or missed PAYG installments attract a General Interest Charge (GIC), currently around 11-12% p.a. The ATO also applies a Failure to Lodge (FTL) penalty of $313 per 28-day period, up to a maximum of 5 periods.
                </p>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <div className="text-violet-300 font-semibold text-sm mb-1">Separate Savings Account</div>
                <p className="text-xs text-slate-400">
                  Open a high-interest savings account specifically for tax. Transfer {formatCurrency(monthlySetAside)} per month automatically. This way you&apos;ll never be caught short at BAS time.
                </p>
              </div>
            </div>
          </div>

          {/* Copy Button */}
          <button
            onClick={handleCopy}
            className="mt-6 w-full py-3 rounded-xl text-sm font-medium transition-all bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10"
          >
            {copied ? 'Copied to clipboard!' : 'Copy results'}
          </button>
        </div>
      )}

      {/* Empty State */}
      {!hasInput && (
        <div className="text-center py-8 text-slate-500">
          <p className="text-sm">Enter your annual business income above to calculate your PAYG installments.</p>
        </div>
      )}
    </div>
  );
}
