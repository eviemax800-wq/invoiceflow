'use client';

import { useState, useMemo, useCallback } from 'react';

/* ---- Helpers ---- */

function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

function formatCurrencyDetailed(value: number): string {
  return new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

/* ---- ATO 2025-26 Tax Calculation ---- */

function calculateAnnualTax(taxableIncome: number): number {
  if (taxableIncome <= 18200) return 0;
  if (taxableIncome <= 45000) return (taxableIncome - 18200) * 0.16;
  if (taxableIncome <= 135000) return 4288 + (taxableIncome - 45000) * 0.30;
  if (taxableIncome <= 190000) return 31288 + (taxableIncome - 135000) * 0.37;
  return 51638 + (taxableIncome - 190000) * 0.45;
}

function calculateMedicareLevy(taxableIncome: number): number {
  return taxableIncome * 0.02;
}

function getMarginalRate(taxableIncome: number): number {
  if (taxableIncome <= 18200) return 0;
  if (taxableIncome <= 45000) return 0.16;
  if (taxableIncome <= 135000) return 0.30;
  if (taxableIncome <= 190000) return 0.37;
  return 0.45;
}

/* ---- Income Stability ---- */

function calculateStabilityScore(incomes: number[]): {
  score: number;
  label: string;
  color: string;
  cv: number;
} {
  const validIncomes = incomes.filter((v) => v > 0);
  if (validIncomes.length < 2) {
    return { score: 0, label: 'Insufficient Data', color: 'text-slate-400', cv: 0 };
  }

  const mean = validIncomes.reduce((a, b) => a + b, 0) / validIncomes.length;
  if (mean === 0) return { score: 0, label: 'No Income', color: 'text-slate-400', cv: 0 };

  const variance = validIncomes.reduce((sum, v) => sum + Math.pow(v - mean, 2), 0) / validIncomes.length;
  const stdDev = Math.sqrt(variance);
  const cv = stdDev / mean; // coefficient of variation

  // Convert CV to a 0-100 score (lower CV = higher stability)
  // CV of 0 = perfect stability (100), CV of 1+ = very unstable (0-20)
  const score = Math.max(0, Math.min(100, Math.round((1 - cv) * 100)));

  let label: string;
  let color: string;
  if (score >= 80) {
    label = 'Very Stable';
    color = 'text-emerald-400';
  } else if (score >= 60) {
    label = 'Stable';
    color = 'text-lime-400';
  } else if (score >= 40) {
    label = 'Moderate';
    color = 'text-amber-400';
  } else if (score >= 20) {
    label = 'Variable';
    color = 'text-orange-400';
  } else {
    label = 'Highly Variable';
    color = 'text-rose-400';
  }

  return { score, label, color, cv };
}

/* ---- Month Labels ---- */

const MONTH_LABELS = [
  'Month 1',
  'Month 2',
  'Month 3',
  'Month 4',
  'Month 5',
  'Month 6',
  'Month 7',
  'Month 8',
  'Month 9',
  'Month 10',
  'Month 11',
  'Month 12',
];

/* ---- Salary Tier Type ---- */
type SalaryTier = 'conservative' | 'moderate' | 'aggressive';

const TIER_CONFIG = {
  conservative: { pct: 0.60, label: 'Conservative (60%)', color: 'text-blue-400', gradient: 'from-blue-500 to-cyan-500' },
  moderate: { pct: 0.70, label: 'Moderate (70%)', color: 'text-lime-400', gradient: 'from-lime-500 to-green-500' },
  aggressive: { pct: 0.80, label: 'Aggressive (80%)', color: 'text-amber-400', gradient: 'from-amber-500 to-orange-500' },
};

/* ---- Component ---- */

export default function PayYourselfCalculator() {
  // Income entries (6-12 months)
  const [monthCount, setMonthCount] = useState(6);
  const [incomes, setIncomes] = useState<number[]>(Array(12).fill(0));

  // Options
  const [isGSTRegistered, setIsGSTRegistered] = useState(false);
  const [monthlyExpenses, setMonthlyExpenses] = useState(0);
  const [currentBuffer, setCurrentBuffer] = useState(0);
  const [selectedTier, setSelectedTier] = useState<SalaryTier>('moderate');

  // UI
  const [calculated, setCalculated] = useState(false);
  const [copied, setCopied] = useState(false);

  const updateIncome = useCallback((index: number, value: number) => {
    setIncomes((prev) => {
      const next = [...prev];
      next[index] = Math.max(0, value);
      return next;
    });
  }, []);

  // Active incomes (only the months being used)
  const activeIncomes = useMemo(() => incomes.slice(0, monthCount), [incomes, monthCount]);

  const hasIncome = useMemo(
    () => activeIncomes.some((v) => v > 0),
    [activeIncomes],
  );

  const results = useMemo(() => {
    const validIncomes = activeIncomes.filter((v) => v > 0);
    if (validIncomes.length === 0) return null;

    const totalIncome = activeIncomes.reduce((a, b) => a + b, 0);
    const avgMonthlyIncome = totalIncome / monthCount;
    const minIncome = Math.min(...activeIncomes);
    const maxIncome = Math.max(...activeIncomes);

    // Stability
    const stability = calculateStabilityScore(activeIncomes);

    // GST calculation (if registered, income is GST-inclusive so GST = income / 11)
    const monthlyGSTReserve = isGSTRegistered ? avgMonthlyIncome / 11 : 0;
    const incomeExGST = avgMonthlyIncome - monthlyGSTReserve;

    // Calculate for all three tiers
    const tiers = (Object.keys(TIER_CONFIG) as SalaryTier[]).map((tier) => {
      const pct = TIER_CONFIG[tier].pct;
      const monthlySalary = incomeExGST * pct;
      const annualSalary = monthlySalary * 12;

      // Super (11.5% of salary — this is tax deductible)
      const annualSuper = annualSalary * 0.115;
      const monthlySuper = annualSuper / 12;

      // Taxable income = annual salary minus super deduction
      const taxableIncome = annualSalary - annualSuper;

      // Tax
      const annualIncomeTax = calculateAnnualTax(taxableIncome);
      const annualMedicare = calculateMedicareLevy(taxableIncome);
      const annualTotalTax = annualIncomeTax + annualMedicare;
      const monthlyTax = annualTotalTax / 12;
      const marginalRate = getMarginalRate(taxableIncome);

      // Net take-home (after tax and super)
      const monthlyNetPay = monthlySalary - monthlyTax - monthlySuper;

      // Expense buffer (what remains after salary + GST)
      const monthlyExpenseBuffer = incomeExGST - monthlySalary;

      // Profit buffer (after all allocations)
      const monthlyRemainder = avgMonthlyIncome - monthlyGSTReserve - monthlySalary;

      // Cash runway (buffer / monthly salary)
      const cashRunway = monthlySalary > 0 && currentBuffer > 0
        ? currentBuffer / monthlySalary
        : 0;

      return {
        tier,
        pct,
        monthlySalary,
        annualSalary,
        monthlySuper,
        annualSuper,
        monthlyTax,
        annualTotalTax,
        taxableIncome,
        marginalRate,
        monthlyNetPay,
        monthlyExpenseBuffer,
        monthlyRemainder,
        cashRunway,
        monthlyGSTReserve,
      };
    });

    const selected = tiers.find((t) => t.tier === selectedTier)!;

    return {
      avgMonthlyIncome,
      totalIncome,
      minIncome,
      maxIncome,
      monthlyGSTReserve,
      incomeExGST,
      stability,
      tiers,
      selected,
    };
  }, [activeIncomes, monthCount, isGSTRegistered, selectedTier, currentBuffer]);

  const handleCalculate = () => setCalculated(true);

  const handleCopy = useCallback(() => {
    if (!results) return;
    const s = results.selected;
    const lines = [
      '=== FREELANCE PAY YOURSELF SUMMARY ===',
      '',
      `Average Monthly Income: ${formatCurrency(results.avgMonthlyIncome)}`,
      `Income Stability: ${results.stability.label} (${results.stability.score}/100)`,
      '',
      `--- ${TIER_CONFIG[selectedTier].label} ---`,
      `Monthly Salary: ${formatCurrency(s.monthlySalary)}`,
      `Annual Salary: ${formatCurrency(s.annualSalary)}`,
      '',
      'MONTHLY BREAKDOWN:',
      `  Tax Set-Aside: ${formatCurrency(s.monthlyTax)}`,
      `  Super (11.5%): ${formatCurrency(s.monthlySuper)}`,
      isGSTRegistered ? `  GST Reserve: ${formatCurrency(s.monthlyGSTReserve)}` : '',
      monthlyExpenses > 0 ? `  Business Expenses: ${formatCurrency(monthlyExpenses)}` : '',
      `  Profit Buffer: ${formatCurrency(s.monthlyRemainder - (monthlyExpenses > 0 ? monthlyExpenses : 0))}`,
      '',
      `Net Take-Home Pay: ${formatCurrency(s.monthlyNetPay)}/month`,
      `Marginal Tax Rate: ${Math.round(s.marginalRate * 100)}% + 2% Medicare`,
      currentBuffer > 0 ? `Cash Runway: ${s.cashRunway.toFixed(1)} months` : '',
      '',
      'Based on 2025-26 ATO tax brackets, 11.5% super rate, 2% Medicare levy.',
      'Generated by InvoiceFlow — invoiceflow.au/tools/pay-yourself-calculator',
    ].filter(Boolean);

    navigator.clipboard.writeText(lines.join('\n'));
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  }, [results, selectedTier, isGSTRegistered, monthlyExpenses, currentBuffer]);

  const inputClass =
    'w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-slate-600 focus:outline-none focus:border-lime-500/50 focus:ring-1 focus:ring-lime-500/25 transition-all text-sm';
  const labelClass = 'block text-sm font-medium text-slate-300 mb-1.5';
  const selectOptionClass = 'bg-slate-800';

  return (
    <div className="space-y-8">
      {/* Month Count Selector */}
      <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
        <h3 className="text-lg font-bold text-white heading-font mb-2">Income History</h3>
        <p className="text-sm text-slate-400 mb-6">
          Enter your gross business income for each month. Include all revenue before tax and
          expenses. The more months you include, the more accurate your salary calculation.
        </p>

        <div className="mb-6">
          <label className={labelClass}>How many months of income data?</label>
          <select
            value={monthCount}
            onChange={(e) => setMonthCount(parseInt(e.target.value))}
            className={inputClass + ' max-w-xs'}
          >
            <option value={6} className={selectOptionClass}>6 months</option>
            <option value={7} className={selectOptionClass}>7 months</option>
            <option value={8} className={selectOptionClass}>8 months</option>
            <option value={9} className={selectOptionClass}>9 months</option>
            <option value={10} className={selectOptionClass}>10 months</option>
            <option value={11} className={selectOptionClass}>11 months</option>
            <option value={12} className={selectOptionClass}>12 months (recommended)</option>
          </select>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: monthCount }).map((_, i) => (
            <div key={i}>
              <label className={labelClass}>{MONTH_LABELS[i]} ($)</label>
              <input
                type="number"
                value={incomes[i] || ''}
                onChange={(e) => updateIncome(i, parseFloat(e.target.value) || 0)}
                className={inputClass}
                min="0"
                step="500"
                placeholder="e.g. 8000"
              />
            </div>
          ))}
        </div>

        {/* Quick-fill */}
        {hasIncome && (
          <div className="mt-4 flex items-center justify-between py-3 px-5 rounded-xl bg-gradient-to-r from-lime-400/10 to-green-500/10 border border-lime-400/20">
            <span className="text-lime-300 text-sm font-medium">
              Average: {formatCurrency(activeIncomes.reduce((a, b) => a + b, 0) / monthCount)}/month
            </span>
            <span className="text-slate-400 text-xs">
              Total: {formatCurrency(activeIncomes.reduce((a, b) => a + b, 0))} over {monthCount} months
            </span>
          </div>
        )}
      </div>

      {/* Options */}
      <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
        <h3 className="text-lg font-bold text-white heading-font mb-6">Options</h3>
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className={labelClass}>GST Registered?</label>
            <select
              value={isGSTRegistered ? 'yes' : 'no'}
              onChange={(e) => setIsGSTRegistered(e.target.value === 'yes')}
              className={inputClass}
            >
              <option value="no" className={selectOptionClass}>No (under $75k turnover or not registered)</option>
              <option value="yes" className={selectOptionClass}>Yes — income amounts above include GST</option>
            </select>
          </div>
          <div>
            <label className={labelClass}>Salary Tier</label>
            <select
              value={selectedTier}
              onChange={(e) => setSelectedTier(e.target.value as SalaryTier)}
              className={inputClass}
            >
              <option value="conservative" className={selectOptionClass}>Conservative — 60% of average</option>
              <option value="moderate" className={selectOptionClass}>Moderate — 70% of average</option>
              <option value="aggressive" className={selectOptionClass}>Aggressive — 80% of average</option>
            </select>
          </div>
          <div>
            <label className={labelClass}>Monthly Business Expenses ($)</label>
            <input
              type="number"
              value={monthlyExpenses || ''}
              onChange={(e) => setMonthlyExpenses(Math.max(0, parseFloat(e.target.value) || 0))}
              className={inputClass}
              min="0"
              step="100"
              placeholder="e.g. 500 (software, tools, etc.)"
            />
          </div>
          <div>
            <label className={labelClass}>Current Buffer / Savings ($)</label>
            <input
              type="number"
              value={currentBuffer || ''}
              onChange={(e) => setCurrentBuffer(Math.max(0, parseFloat(e.target.value) || 0))}
              className={inputClass}
              min="0"
              step="1000"
              placeholder="e.g. 15000"
            />
          </div>
        </div>
      </div>

      {/* Calculate Button */}
      <div className="flex justify-center">
        <button
          onClick={handleCalculate}
          disabled={!hasIncome}
          className="bg-gradient-to-r from-lime-500 to-green-500 text-white font-semibold rounded-xl px-8 py-4 hover:from-lime-400 hover:to-green-400 transition-all text-lg disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Calculate My Salary
        </button>
      </div>

      {/* Results */}
      {calculated && results && (
        <>
          {/* Income Stability Visualization */}
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-white heading-font">Income Overview</h3>
              <div className="flex items-center gap-2">
                <span className="text-sm text-slate-400">Stability:</span>
                <span className={`text-sm font-semibold ${results.stability.color}`}>
                  {results.stability.label} ({results.stability.score}/100)
                </span>
              </div>
            </div>

            {/* Bar chart visualization */}
            <div className="mb-6">
              <div className="flex items-end gap-1.5 h-40">
                {activeIncomes.map((income, i) => {
                  const maxVal = results.maxIncome || 1;
                  const heightPct = maxVal > 0 ? (income / maxVal) * 100 : 0;
                  const isAboveAvg = income >= results.avgMonthlyIncome;
                  return (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
                      <span className="text-[10px] text-slate-500 font-mono">
                        {income > 0 ? `$${Math.round(income / 1000)}k` : '$0'}
                      </span>
                      <div
                        className={`w-full rounded-t-md transition-all duration-700 ${
                          isAboveAvg
                            ? 'bg-gradient-to-t from-lime-500/60 to-lime-400/40'
                            : 'bg-gradient-to-t from-amber-500/60 to-amber-400/40'
                        }`}
                        style={{ height: `${Math.max(2, heightPct)}%` }}
                      />
                      <span className="text-[10px] text-slate-600">M{i + 1}</span>
                    </div>
                  );
                })}
              </div>
              {/* Average line reference */}
              <div className="flex items-center gap-3 mt-3 text-xs text-slate-500">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-2 rounded-sm bg-lime-500/60" />
                  <span>Above average</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-2 rounded-sm bg-amber-500/60" />
                  <span>Below average</span>
                </div>
                <span className="ml-auto">
                  Avg: {formatCurrency(results.avgMonthlyIncome)}/mo
                </span>
              </div>
            </div>

            {/* Summary stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-white/5 rounded-xl p-4 text-center">
                <p className="text-xs text-slate-400 mb-1">Average Monthly</p>
                <p className="text-xl font-bold font-mono text-white">
                  {formatCurrency(results.avgMonthlyIncome)}
                </p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 text-center">
                <p className="text-xs text-slate-400 mb-1">Highest Month</p>
                <p className="text-xl font-bold font-mono text-emerald-400">
                  {formatCurrency(results.maxIncome)}
                </p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 text-center">
                <p className="text-xs text-slate-400 mb-1">Lowest Month</p>
                <p className="text-xl font-bold font-mono text-rose-400">
                  {formatCurrency(results.minIncome)}
                </p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 text-center">
                <p className="text-xs text-slate-400 mb-1">Variance (CV)</p>
                <p className={`text-xl font-bold font-mono ${results.stability.color}`}>
                  {(results.stability.cv * 100).toFixed(0)}%
                </p>
              </div>
            </div>
          </div>

          {/* Salary Tier Comparison */}
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white heading-font mb-6">Salary Options</h3>
            <div className="grid sm:grid-cols-3 gap-4">
              {results.tiers.map((t) => {
                const config = TIER_CONFIG[t.tier];
                const isSelected = t.tier === selectedTier;
                return (
                  <button
                    key={t.tier}
                    onClick={() => setSelectedTier(t.tier)}
                    className={`text-left rounded-xl p-5 transition-all border ${
                      isSelected
                        ? 'bg-white/[0.06] border-lime-400/30'
                        : 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className={`text-xs font-semibold uppercase tracking-wide ${config.color}`}>
                        {t.tier}
                      </span>
                      {isSelected && (
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-lime-400/15 text-lime-400 font-medium">
                          Selected
                        </span>
                      )}
                    </div>
                    <p className="text-2xl font-bold text-white font-mono mb-1">
                      {formatCurrency(t.monthlySalary)}
                    </p>
                    <p className="text-xs text-slate-500">
                      {Math.round(t.pct * 100)}% of avg &middot; {formatCurrency(t.annualSalary)}/yr
                    </p>
                    <div className="mt-3 pt-3 border-t border-white/5">
                      <p className="text-xs text-slate-400">
                        Net take-home: <span className="text-white font-medium">{formatCurrency(t.monthlyNetPay)}/mo</span>
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Detailed Breakdown — Selected Tier */}
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-white heading-font">
                Monthly Breakdown — {TIER_CONFIG[selectedTier].label}
              </h3>
              <button
                onClick={handleCopy}
                className="text-xs px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-lime-400/30 transition-all"
              >
                {copied ? 'Copied!' : 'Copy Summary'}
              </button>
            </div>

            {/* Visual Breakdown Bar */}
            <div className="mb-6">
              <div className="h-8 rounded-full overflow-hidden flex">
                {(() => {
                  const s = results.selected;
                  const total = results.avgMonthlyIncome;
                  if (total <= 0) return null;
                  const segments = [
                    { value: s.monthlyNetPay, color: 'bg-lime-500', label: 'Take-Home' },
                    { value: s.monthlyTax, color: 'bg-red-500', label: 'Tax' },
                    { value: s.monthlySuper, color: 'bg-blue-500', label: 'Super' },
                    ...(isGSTRegistered ? [{ value: s.monthlyGSTReserve, color: 'bg-purple-500', label: 'GST' }] : []),
                    ...(monthlyExpenses > 0 ? [{ value: monthlyExpenses, color: 'bg-amber-500', label: 'Expenses' }] : []),
                    { value: Math.max(0, s.monthlyRemainder - (monthlyExpenses > 0 ? monthlyExpenses : 0)), color: 'bg-emerald-500', label: 'Buffer' },
                  ];
                  return segments.map((seg, i) => {
                    const pct = (seg.value / total) * 100;
                    if (pct <= 0) return null;
                    return (
                      <div
                        key={i}
                        className={`${seg.color} transition-all duration-700`}
                        style={{ width: `${pct}%` }}
                        title={`${seg.label}: ${formatCurrency(seg.value)}`}
                      />
                    );
                  });
                })()}
              </div>
              <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3 text-xs text-slate-500">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-sm bg-lime-500" />
                  <span>Take-Home</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-sm bg-red-500" />
                  <span>Tax</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-sm bg-blue-500" />
                  <span>Super</span>
                </div>
                {isGSTRegistered && (
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-sm bg-purple-500" />
                    <span>GST</span>
                  </div>
                )}
                {monthlyExpenses > 0 && (
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-sm bg-amber-500" />
                    <span>Expenses</span>
                  </div>
                )}
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-sm bg-emerald-500" />
                  <span>Buffer</span>
                </div>
              </div>
            </div>

            {/* Line items */}
            <div className="space-y-2">
              <div className="flex items-center justify-between py-3 px-4 rounded-xl bg-white/5">
                <span className="text-sm text-white font-medium">Average Monthly Income</span>
                <span className="text-white font-bold font-mono">
                  {formatCurrencyDetailed(results.avgMonthlyIncome)}
                </span>
              </div>

              {isGSTRegistered && (
                <div className="flex items-center justify-between py-2.5 px-4 border-b border-white/5">
                  <span className="text-sm text-slate-400">GST Reserve (1/11th)</span>
                  <span className="text-purple-400 font-mono text-sm">
                    &minus;{formatCurrency(results.selected.monthlyGSTReserve)}
                  </span>
                </div>
              )}

              <div className="flex items-center justify-between py-2.5 px-4 border-b border-white/5">
                <span className="text-sm text-slate-400">
                  Income {isGSTRegistered ? 'ex-GST' : ''} available
                </span>
                <span className="text-white font-mono text-sm">
                  {formatCurrency(results.incomeExGST)}
                </span>
              </div>

              <div className="flex items-center justify-between py-3 px-4 rounded-xl bg-gradient-to-r from-lime-400/5 to-green-500/5 border border-lime-400/10">
                <span className="text-sm text-lime-300 font-medium">
                  Your Monthly Salary ({Math.round(results.selected.pct * 100)}%)
                </span>
                <span className="text-lime-400 font-bold font-mono text-lg">
                  {formatCurrency(results.selected.monthlySalary)}
                </span>
              </div>

              <div className="ml-4 space-y-1 py-2">
                <div className="flex items-center justify-between py-1.5">
                  <span className="text-xs text-slate-500">Income Tax + Medicare (monthly)</span>
                  <span className="text-red-400 font-mono text-xs">
                    &minus;{formatCurrency(results.selected.monthlyTax)}
                  </span>
                </div>
                <div className="flex items-center justify-between py-1.5">
                  <span className="text-xs text-slate-500">Super Contribution (11.5%)</span>
                  <span className="text-blue-400 font-mono text-xs">
                    &minus;{formatCurrency(results.selected.monthlySuper)}
                  </span>
                </div>
                <div className="flex items-center justify-between py-2 mt-1 border-t border-white/5">
                  <span className="text-sm text-white font-medium">Net Take-Home Pay</span>
                  <span className="text-white font-bold font-mono">
                    {formatCurrency(results.selected.monthlyNetPay)}
                  </span>
                </div>
              </div>

              {monthlyExpenses > 0 && (
                <div className="flex items-center justify-between py-2.5 px-4 border-b border-white/5">
                  <span className="text-sm text-slate-400">Business Expenses</span>
                  <span className="text-amber-400 font-mono text-sm">
                    &minus;{formatCurrency(monthlyExpenses)}
                  </span>
                </div>
              )}

              <div className="flex items-center justify-between py-3 px-4 rounded-xl bg-emerald-500/5 border border-emerald-500/10">
                <span className="text-sm text-emerald-300 font-medium">Remaining Profit Buffer</span>
                <span className="text-emerald-400 font-bold font-mono">
                  {formatCurrency(
                    Math.max(0, results.selected.monthlyRemainder - (monthlyExpenses > 0 ? monthlyExpenses : 0))
                  )}
                  <span className="text-xs text-emerald-400/60 font-normal ml-1">/month</span>
                </span>
              </div>
            </div>
          </div>

          {/* Annual Summary */}
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white heading-font mb-6">Annual Summary</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white/5 rounded-xl p-4">
                <p className="text-xs text-slate-400 mb-1">Annual Salary</p>
                <p className="text-2xl font-bold font-mono text-white">
                  {formatCurrency(results.selected.annualSalary)}
                </p>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <p className="text-xs text-slate-400 mb-1">Annual Tax + Medicare</p>
                <p className="text-2xl font-bold font-mono text-red-400">
                  {formatCurrency(results.selected.annualTotalTax)}
                </p>
                <p className="text-[10px] text-slate-500 mt-1">
                  Marginal rate: {Math.round(results.selected.marginalRate * 100)}% + 2% Medicare
                </p>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <p className="text-xs text-slate-400 mb-1">Annual Super (11.5%)</p>
                <p className="text-2xl font-bold font-mono text-blue-400">
                  {formatCurrency(results.selected.annualSuper)}
                </p>
                <p className="text-[10px] text-slate-500 mt-1">
                  Taxable income after super deduction: {formatCurrency(results.selected.taxableIncome)}
                </p>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <p className="text-xs text-slate-400 mb-1">Annual Net Take-Home</p>
                <p className="text-2xl font-bold font-mono text-lime-400">
                  {formatCurrency(results.selected.monthlyNetPay * 12)}
                </p>
                <p className="text-[10px] text-slate-500 mt-1">
                  {formatCurrency(results.selected.monthlyNetPay)}/month after tax and super
                </p>
              </div>
            </div>
          </div>

          {/* Cash Runway */}
          {currentBuffer > 0 && results.selected.monthlySalary > 0 && (
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
              <h3 className="text-lg font-bold text-white heading-font mb-4">Cash Runway</h3>
              <div className="flex items-center gap-6">
                <div>
                  <p className="text-4xl font-bold font-mono text-white">
                    {results.selected.cashRunway.toFixed(1)}
                  </p>
                  <p className="text-sm text-slate-400">months of salary</p>
                </div>
                <div className="flex-1">
                  <div className="h-4 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-1000 ${
                        results.selected.cashRunway >= 6
                          ? 'bg-gradient-to-r from-emerald-500 to-green-400'
                          : results.selected.cashRunway >= 3
                            ? 'bg-gradient-to-r from-lime-500 to-lime-400'
                            : results.selected.cashRunway >= 1
                              ? 'bg-gradient-to-r from-amber-500 to-amber-400'
                              : 'bg-gradient-to-r from-rose-500 to-rose-400'
                      }`}
                      style={{ width: `${Math.min(100, (results.selected.cashRunway / 12) * 100)}%` }}
                    />
                  </div>
                  <div className="flex justify-between mt-1 text-[10px] text-slate-600">
                    <span>0</span>
                    <span>3mo</span>
                    <span>6mo</span>
                    <span>9mo</span>
                    <span>12mo</span>
                  </div>
                </div>
              </div>
              <p className="text-xs text-slate-500 mt-4">
                Your current buffer of {formatCurrency(currentBuffer)} could sustain your{' '}
                {formatCurrency(results.selected.monthlySalary)}/month salary for{' '}
                {results.selected.cashRunway.toFixed(1)} months if all income stopped.
                {results.selected.cashRunway < 3 && (
                  <span className="text-amber-400"> Aim for at least 3 months of runway before using the aggressive tier.</span>
                )}
                {results.selected.cashRunway >= 6 && (
                  <span className="text-emerald-400"> Strong runway — you have solid financial security.</span>
                )}
              </p>
            </div>
          )}

          {/* Related Tools */}
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white heading-font mb-4">Related Tools</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              <a
                href="/tools/emergency-fund-calculator"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-lime-500/30 rounded-xl p-4 transition-all group"
              >
                <p className="text-white font-medium text-sm group-hover:text-lime-400 transition-colors">
                  Emergency Fund Calculator
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Calculate your ideal emergency savings target
                </p>
              </a>
              <a
                href="/tools/budget-planner"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-lime-500/30 rounded-xl p-4 transition-all group"
              >
                <p className="text-white font-medium text-sm group-hover:text-lime-400 transition-colors">
                  Budget Planner
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Allocate your salary across personal expenses
                </p>
              </a>
              <a
                href="/tools/tax-estimator"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-lime-500/30 rounded-xl p-4 transition-all group"
              >
                <p className="text-white font-medium text-sm group-hover:text-lime-400 transition-colors">
                  Freelance Tax Estimator
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Full tax breakdown with 2025-26 ATO brackets
                </p>
              </a>
              <a
                href="/tools/cashflow-forecast"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-lime-500/30 rounded-xl p-4 transition-all group"
              >
                <p className="text-white font-medium text-sm group-hover:text-lime-400 transition-colors">
                  Cashflow Forecast
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Project your income over the next 3-12 months
                </p>
              </a>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="text-center">
            <p className="text-xs text-slate-500 max-w-2xl mx-auto">
              This calculator provides general financial guidance for Australian freelancers and sole
              traders. It uses 2025-26 ATO income tax brackets, 2% Medicare levy, and 11.5% super
              guarantee rate. It is not personal financial or tax advice. Consider consulting a
              licensed tax agent or financial adviser for advice specific to your situation. Tax
              calculations assume no HELP debt, no private health insurance surcharge, and no other
              offsets or deductions beyond super.
            </p>
          </div>
        </>
      )}
    </div>
  );
}
