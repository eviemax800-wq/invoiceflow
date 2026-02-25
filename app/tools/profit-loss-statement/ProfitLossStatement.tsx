'use client';

import { useState, useMemo } from 'react';

/* ---- Helpers ---- */

function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

function formatPercent(value: number): string {
  return `${value.toFixed(1)}%`;
}

/* ---- ATO 2024-25 Tax Brackets ---- */

function calculateIncomeTax(taxableIncome: number): number {
  if (taxableIncome <= 18200) return 0;
  if (taxableIncome <= 45000) return (taxableIncome - 18200) * 0.16;
  if (taxableIncome <= 135000) return 4288 + (taxableIncome - 45000) * 0.30;
  if (taxableIncome <= 190000) return 31288 + (taxableIncome - 135000) * 0.37;
  return 51638 + (taxableIncome - 190000) * 0.45;
}

function calculateMedicareLevy(taxableIncome: number): number {
  if (taxableIncome <= 26000) return 0;
  return taxableIncome * 0.02;
}

/* ---- Types ---- */

type Period = 'monthly' | 'quarterly' | 'annually';

interface IncomeFields {
  serviceIncome: number;
  productSales: number;
  recurringRevenue: number;
  otherIncome: number;
}

interface ExpenseFields {
  homeOffice: number;
  equipment: number;
  software: number;
  phoneInternet: number;
  vehicleTravel: number;
  insurance: number;
  professionalDev: number;
  marketing: number;
  accountingLegal: number;
  subcontractors: number;
  materials: number;
  otherExpenses: number;
}

const INCOME_LABELS: Record<keyof IncomeFields, string> = {
  serviceIncome: 'Service Income',
  productSales: 'Product Sales',
  recurringRevenue: 'Recurring Revenue',
  otherIncome: 'Other Income',
};

const INCOME_PLACEHOLDERS: Record<keyof IncomeFields, string> = {
  serviceIncome: 'Main freelance revenue',
  productSales: 'Digital products, templates',
  recurringRevenue: 'Retainers, subscriptions',
  otherIncome: 'Interest, royalties',
};

const EXPENSE_LABELS: Record<keyof ExpenseFields, string> = {
  homeOffice: 'Home Office Expenses',
  equipment: 'Equipment & Technology',
  software: 'Software & Subscriptions',
  phoneInternet: 'Phone & Internet',
  vehicleTravel: 'Vehicle & Travel',
  insurance: 'Insurance',
  professionalDev: 'Professional Development',
  marketing: 'Marketing & Advertising',
  accountingLegal: 'Accounting & Legal',
  subcontractors: 'Subcontractors',
  materials: 'Materials & Supplies',
  otherExpenses: 'Other Expenses',
};

const PERIOD_LABELS: Record<Period, string> = {
  monthly: 'Monthly',
  quarterly: 'Quarterly',
  annually: 'Annually',
};

const PERIOD_MULTIPLIERS: Record<Period, number> = {
  monthly: 12,
  quarterly: 4,
  annually: 1,
};

const EMPTY_INCOME: IncomeFields = {
  serviceIncome: 0,
  productSales: 0,
  recurringRevenue: 0,
  otherIncome: 0,
};

const EMPTY_EXPENSES: ExpenseFields = {
  homeOffice: 0,
  equipment: 0,
  software: 0,
  phoneInternet: 0,
  vehicleTravel: 0,
  insurance: 0,
  professionalDev: 0,
  marketing: 0,
  accountingLegal: 0,
  subcontractors: 0,
  materials: 0,
  otherExpenses: 0,
};

const SAMPLE_INCOME: IncomeFields = {
  serviceIncome: 9500,
  productSales: 800,
  recurringRevenue: 2200,
  otherIncome: 150,
};

const SAMPLE_EXPENSES: ExpenseFields = {
  homeOffice: 350,
  equipment: 200,
  software: 280,
  phoneInternet: 120,
  vehicleTravel: 180,
  insurance: 95,
  professionalDev: 150,
  marketing: 250,
  accountingLegal: 175,
  subcontractors: 600,
  materials: 80,
  otherExpenses: 100,
};

/* ---- Component ---- */

export default function ProfitLossStatement() {
  const [period, setPeriod] = useState<Period>('monthly');
  const [income, setIncome] = useState<IncomeFields>({ ...EMPTY_INCOME });
  const [expenses, setExpenses] = useState<ExpenseFields>({ ...EMPTY_EXPENSES });
  const [copied, setCopied] = useState(false);

  const updateIncome = (field: keyof IncomeFields, value: number) => {
    setIncome((prev) => ({ ...prev, [field]: value }));
  };

  const updateExpense = (field: keyof ExpenseFields, value: number) => {
    setExpenses((prev) => ({ ...prev, [field]: value }));
  };

  const loadSampleData = () => {
    setIncome({ ...SAMPLE_INCOME });
    setExpenses({ ...SAMPLE_EXPENSES });
    setPeriod('monthly');
  };

  const clearAll = () => {
    setIncome({ ...EMPTY_INCOME });
    setExpenses({ ...EMPTY_EXPENSES });
  };

  /* ---- Calculations ---- */

  const calculations = useMemo(() => {
    const grossIncome = Object.values(income).reduce((sum, v) => sum + v, 0);
    const totalExpenses = Object.values(expenses).reduce((sum, v) => sum + v, 0);
    const netProfitBeforeTax = grossIncome - totalExpenses;

    // Annualise for tax calculation
    const annualMultiplier = PERIOD_MULTIPLIERS[period];
    const annualisedProfit = netProfitBeforeTax * annualMultiplier;

    const annualIncomeTax = calculateIncomeTax(Math.max(0, annualisedProfit));
    const annualMedicareLevy = calculateMedicareLevy(Math.max(0, annualisedProfit));

    // Convert back to period
    const incomeTax = annualIncomeTax / annualMultiplier;
    const medicareLevy = annualMedicareLevy / annualMultiplier;
    const totalTax = incomeTax + medicareLevy;

    const netProfitAfterTax = netProfitBeforeTax - totalTax;

    // Ratios
    const profitMargin = grossIncome > 0 ? (netProfitBeforeTax / grossIncome) * 100 : 0;
    const expenseRatio = grossIncome > 0 ? (totalExpenses / grossIncome) * 100 : 0;
    const effectiveTaxRate = netProfitBeforeTax > 0 ? (totalTax / netProfitBeforeTax) * 100 : 0;
    const takeHomeRate = grossIncome > 0 ? (netProfitAfterTax / grossIncome) * 100 : 0;

    // Expense breakdown sorted by value (descending)
    const expenseBreakdown = (Object.keys(expenses) as (keyof ExpenseFields)[])
      .map((key) => ({
        key,
        label: EXPENSE_LABELS[key],
        value: expenses[key],
        percent: totalExpenses > 0 ? (expenses[key] / totalExpenses) * 100 : 0,
      }))
      .filter((item) => item.value > 0)
      .sort((a, b) => b.value - a.value);

    return {
      grossIncome,
      totalExpenses,
      netProfitBeforeTax,
      incomeTax,
      medicareLevy,
      totalTax,
      netProfitAfterTax,
      profitMargin,
      expenseRatio,
      effectiveTaxRate,
      takeHomeRate,
      expenseBreakdown,
      annualisedProfit,
    };
  }, [income, expenses, period]);

  const hasData = calculations.grossIncome > 0 || calculations.totalExpenses > 0;

  /* ---- Copy to clipboard ---- */

  const handleCopy = () => {
    const periodLabel = PERIOD_LABELS[period];
    const divider = '════════════════════════════════════════════════════════';
    const sectionDivider = '────────────────────────────────────────────────────────';
    const lines: string[] = [];

    lines.push(divider);
    lines.push('  PROFIT & LOSS STATEMENT');
    lines.push(divider);
    lines.push('');
    lines.push(`Period:            ${periodLabel}`);
    lines.push(`Generated:         ${new Date().toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' })}`);
    lines.push('');

    lines.push('INCOME');
    lines.push(sectionDivider);
    (Object.keys(income) as (keyof IncomeFields)[]).forEach((key) => {
      if (income[key] > 0) {
        const label = INCOME_LABELS[key].padEnd(30);
        lines.push(`  ${label} ${formatCurrency(income[key])}`);
      }
    });
    lines.push(sectionDivider);
    lines.push(`  ${'Gross Income'.padEnd(30)} ${formatCurrency(calculations.grossIncome)}`);
    lines.push('');

    lines.push('EXPENSES');
    lines.push(sectionDivider);
    (Object.keys(expenses) as (keyof ExpenseFields)[]).forEach((key) => {
      if (expenses[key] > 0) {
        const label = EXPENSE_LABELS[key].padEnd(30);
        lines.push(`  ${label} ${formatCurrency(expenses[key])}`);
      }
    });
    lines.push(sectionDivider);
    lines.push(`  ${'Total Expenses'.padEnd(30)} ${formatCurrency(calculations.totalExpenses)}`);
    lines.push('');

    lines.push('NET PROFIT');
    lines.push(sectionDivider);
    lines.push(`  ${'Net Profit Before Tax'.padEnd(30)} ${formatCurrency(calculations.netProfitBeforeTax)}`);
    lines.push(`  ${'Estimated Income Tax'.padEnd(30)} -${formatCurrency(calculations.incomeTax)}`);
    lines.push(`  ${'Medicare Levy (2%)'.padEnd(30)} -${formatCurrency(calculations.medicareLevy)}`);
    lines.push(sectionDivider);
    lines.push(`  ${'Net Profit After Tax'.padEnd(30)} ${formatCurrency(calculations.netProfitAfterTax)}`);
    lines.push('');

    lines.push('KEY RATIOS');
    lines.push(sectionDivider);
    lines.push(`  ${'Profit Margin'.padEnd(30)} ${formatPercent(calculations.profitMargin)}`);
    lines.push(`  ${'Expense Ratio'.padEnd(30)} ${formatPercent(calculations.expenseRatio)}`);
    lines.push(`  ${'Effective Tax Rate'.padEnd(30)} ${formatPercent(calculations.effectiveTaxRate)}`);
    lines.push(`  ${'Take-Home Rate'.padEnd(30)} ${formatPercent(calculations.takeHomeRate)}`);
    lines.push('');

    lines.push(divider);
    lines.push('');
    lines.push('Tax estimates based on ATO 2024-25 individual tax rates + 2% Medicare levy.');
    lines.push('This is an estimate only — consult a registered tax agent for formal advice.');
    lines.push('');
    lines.push('Generated by InvoiceFlow — invoiceflow.au/tools/profit-loss-statement');

    navigator.clipboard.writeText(lines.join('\n')).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  /* ---- Insight helpers ---- */

  const getProfitMarginInsight = (margin: number): { color: string; label: string; detail: string } => {
    if (margin >= 60) return { color: 'text-emerald-400', label: 'Excellent', detail: 'Your profit margin is well above the freelance benchmark. You have strong pricing power and controlled expenses.' };
    if (margin >= 40) return { color: 'text-teal-400', label: 'Healthy', detail: 'Your profit margin is within the healthy range for freelance service businesses (40-60%). Keep monitoring for trends.' };
    if (margin >= 20) return { color: 'text-amber-400', label: 'Below Average', detail: 'Your profit margin is below the typical freelance range. Review your expenses and consider raising your rates.' };
    return { color: 'text-rose-400', label: 'Needs Attention', detail: 'Your profit margin is low. Focus on reducing expenses and increasing revenue — consider our Rate Calculator to find a sustainable rate.' };
  };

  const getExpenseRatioInsight = (ratio: number): { color: string; label: string } => {
    if (ratio <= 25) return { color: 'text-emerald-400', label: 'Lean' };
    if (ratio <= 45) return { color: 'text-teal-400', label: 'Normal' };
    if (ratio <= 60) return { color: 'text-amber-400', label: 'High' };
    return { color: 'text-rose-400', label: 'Excessive' };
  };

  const inputClass =
    'w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500/50 transition-all text-sm';
  const labelClass = 'block text-xs font-medium text-slate-400 mb-1.5';

  const profitInsight = getProfitMarginInsight(calculations.profitMargin);
  const expenseInsight = getExpenseRatioInsight(calculations.expenseRatio);

  return (
    <div className="space-y-8">
      {/* Period Selector & Actions */}
      <div className="glass rounded-2xl p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-white heading-font mb-2">Statement Period</h3>
            <div className="flex gap-2">
              {(Object.keys(PERIOD_LABELS) as Period[]).map((p) => (
                <button
                  key={p}
                  onClick={() => setPeriod(p)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    period === p
                      ? 'bg-gradient-to-r from-teal-500 to-blue-500 text-white'
                      : 'bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {PERIOD_LABELS[p]}
                </button>
              ))}
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={loadSampleData}
              className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-slate-400 hover:text-white hover:bg-white/10 transition-all"
            >
              Load Sample Data
            </button>
            <button
              onClick={clearAll}
              className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 hover:border-rose-500/20 transition-all"
            >
              Clear All
            </button>
          </div>
        </div>
      </div>

      {/* Income Section */}
      <div className="glass rounded-2xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-bold text-white heading-font">Income</h3>
          <div className="text-sm font-mono text-teal-400 font-semibold">
            {formatCurrency(calculations.grossIncome)}
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          {(Object.keys(INCOME_LABELS) as (keyof IncomeFields)[]).map((key) => (
            <div key={key}>
              <label className={labelClass}>{INCOME_LABELS[key]}</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm">$</span>
                <input
                  type="number"
                  value={income[key] || ''}
                  onChange={(e) => updateIncome(key, Math.max(0, parseFloat(e.target.value) || 0))}
                  className={`${inputClass} pl-8`}
                  placeholder={INCOME_PLACEHOLDERS[key]}
                  min="0"
                  step="100"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Expenses Section */}
      <div className="glass rounded-2xl p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-bold text-white heading-font">Expenses</h3>
            <p className="text-xs text-slate-500 mt-1">ATO-aligned deduction categories for sole traders</p>
          </div>
          <div className="text-sm font-mono text-rose-400 font-semibold">
            {formatCurrency(calculations.totalExpenses)}
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {(Object.keys(EXPENSE_LABELS) as (keyof ExpenseFields)[]).map((key) => (
            <div key={key}>
              <label className={labelClass}>{EXPENSE_LABELS[key]}</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm">$</span>
                <input
                  type="number"
                  value={expenses[key] || ''}
                  onChange={(e) => updateExpense(key, Math.max(0, parseFloat(e.target.value) || 0))}
                  className={`${inputClass} pl-8`}
                  placeholder="0"
                  min="0"
                  step="10"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Results */}
      {hasData && (
        <>
          {/* P&L Summary */}
          <div className="glass rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white heading-font mb-6">
              Profit &amp; Loss Summary
              <span className="text-sm font-normal text-slate-400 ml-2">({PERIOD_LABELS[period]})</span>
            </h3>

            <div className="space-y-1">
              {/* Income Lines */}
              <div className="bg-white/5 rounded-xl p-4 space-y-2">
                <p className="text-xs font-medium text-teal-400 uppercase tracking-wide mb-3">Income</p>
                {(Object.keys(income) as (keyof IncomeFields)[]).map((key) =>
                  income[key] > 0 ? (
                    <div key={key} className="flex justify-between items-center">
                      <span className="text-slate-300 text-sm">{INCOME_LABELS[key]}</span>
                      <span className="text-white font-mono text-sm">{formatCurrency(income[key])}</span>
                    </div>
                  ) : null
                )}
                <div className="flex justify-between items-center border-t border-white/10 pt-2 mt-2">
                  <span className="text-white font-semibold text-sm">Gross Income</span>
                  <span className="text-teal-400 font-mono font-bold">{formatCurrency(calculations.grossIncome)}</span>
                </div>
              </div>

              {/* Expense Lines */}
              <div className="bg-white/5 rounded-xl p-4 space-y-2 mt-3">
                <p className="text-xs font-medium text-rose-400 uppercase tracking-wide mb-3">Expenses</p>
                {(Object.keys(expenses) as (keyof ExpenseFields)[]).map((key) =>
                  expenses[key] > 0 ? (
                    <div key={key} className="flex justify-between items-center">
                      <span className="text-slate-300 text-sm">{EXPENSE_LABELS[key]}</span>
                      <span className="text-white font-mono text-sm">-{formatCurrency(expenses[key])}</span>
                    </div>
                  ) : null
                )}
                <div className="flex justify-between items-center border-t border-white/10 pt-2 mt-2">
                  <span className="text-white font-semibold text-sm">Total Expenses</span>
                  <span className="text-rose-400 font-mono font-bold">-{formatCurrency(calculations.totalExpenses)}</span>
                </div>
              </div>

              {/* Net Profit */}
              <div className="bg-white/5 rounded-xl p-4 space-y-2 mt-3">
                <div className="flex justify-between items-center">
                  <span className="text-white font-semibold text-sm">Net Profit Before Tax</span>
                  <span className={`font-mono font-bold ${calculations.netProfitBeforeTax >= 0 ? 'text-white' : 'text-rose-400'}`}>
                    {formatCurrency(calculations.netProfitBeforeTax)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 text-sm">Estimated Income Tax</span>
                  <span className="text-amber-400 font-mono text-sm">-{formatCurrency(calculations.incomeTax)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 text-sm">Medicare Levy (2%)</span>
                  <span className="text-amber-400 font-mono text-sm">-{formatCurrency(calculations.medicareLevy)}</span>
                </div>
                <div className="flex justify-between items-center border-t border-white/10 pt-2 mt-2">
                  <span className="text-white font-bold">Net Profit After Tax</span>
                  <span className={`font-mono font-bold text-lg ${calculations.netProfitAfterTax >= 0 ? 'text-teal-400' : 'text-rose-400'}`}>
                    {formatCurrency(calculations.netProfitAfterTax)}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Expense Breakdown Visual */}
          {calculations.expenseBreakdown.length > 0 && (
            <div className="glass rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white heading-font mb-6">Expense Breakdown</h3>
              <div className="space-y-3">
                {calculations.expenseBreakdown.map((item) => {
                  const maxExpense = calculations.expenseBreakdown[0]?.value || 1;
                  const barWidth = (item.value / maxExpense) * 100;
                  return (
                    <div key={item.key} className="flex items-center gap-4">
                      <span className="text-sm text-slate-300 w-44 shrink-0 truncate">{item.label}</span>
                      <div className="flex-1 bg-white/5 rounded-full h-7 overflow-hidden relative">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-teal-500/80 to-blue-500/80 flex items-center justify-end pr-3"
                          style={{ width: `${Math.max(barWidth, 15)}%` }}
                        >
                          <span className="text-xs font-medium text-white whitespace-nowrap">
                            {formatCurrency(item.value)}
                          </span>
                        </div>
                      </div>
                      <span className="text-xs text-slate-500 w-12 text-right shrink-0">
                        {formatPercent(item.percent)}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Key Financial Ratios */}
          <div className="glass rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white heading-font mb-6">Key Financial Ratios</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {/* Profit Margin */}
              <div className="bg-white/5 rounded-xl p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-slate-400 text-sm">Profit Margin</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    profitInsight.color === 'text-emerald-400' ? 'bg-emerald-500/20 text-emerald-400' :
                    profitInsight.color === 'text-teal-400' ? 'bg-teal-500/20 text-teal-400' :
                    profitInsight.color === 'text-amber-400' ? 'bg-amber-500/20 text-amber-400' :
                    'bg-rose-500/20 text-rose-400'
                  }`}>
                    {profitInsight.label}
                  </span>
                </div>
                <p className={`text-3xl font-bold font-mono ${profitInsight.color} mb-2`}>
                  {formatPercent(calculations.profitMargin)}
                </p>
                <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden mb-3">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-teal-500 to-blue-500 transition-all duration-500"
                    style={{ width: `${Math.min(Math.max(calculations.profitMargin, 0), 100)}%` }}
                  />
                </div>
                <p className="text-xs text-slate-500">
                  Healthy freelance businesses typically see 40-60%
                </p>
              </div>

              {/* Expense Ratio */}
              <div className="bg-white/5 rounded-xl p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-slate-400 text-sm">Expense Ratio</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    expenseInsight.color === 'text-emerald-400' ? 'bg-emerald-500/20 text-emerald-400' :
                    expenseInsight.color === 'text-teal-400' ? 'bg-teal-500/20 text-teal-400' :
                    expenseInsight.color === 'text-amber-400' ? 'bg-amber-500/20 text-amber-400' :
                    'bg-rose-500/20 text-rose-400'
                  }`}>
                    {expenseInsight.label}
                  </span>
                </div>
                <p className={`text-3xl font-bold font-mono ${expenseInsight.color} mb-2`}>
                  {formatPercent(calculations.expenseRatio)}
                </p>
                <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden mb-3">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-amber-500 to-rose-500 transition-all duration-500"
                    style={{ width: `${Math.min(calculations.expenseRatio, 100)}%` }}
                  />
                </div>
                <p className="text-xs text-slate-500">
                  Typical freelancer range: 25-45%
                </p>
              </div>

              {/* Effective Tax Rate */}
              <div className="bg-white/5 rounded-xl p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-slate-400 text-sm">Effective Tax Rate</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400">
                    ATO 2024-25
                  </span>
                </div>
                <p className="text-3xl font-bold font-mono text-blue-400 mb-2">
                  {formatPercent(calculations.effectiveTaxRate)}
                </p>
                <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden mb-3">
                  <div
                    className="h-full rounded-full bg-blue-500 transition-all duration-500"
                    style={{ width: `${Math.min(calculations.effectiveTaxRate, 100)}%` }}
                  />
                </div>
                <p className="text-xs text-slate-500">
                  Includes income tax + 2% Medicare levy
                </p>
              </div>

              {/* Take-Home Rate */}
              <div className="bg-white/5 rounded-xl p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-slate-400 text-sm">Take-Home Rate</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    calculations.takeHomeRate >= 35 ? 'bg-emerald-500/20 text-emerald-400' :
                    calculations.takeHomeRate >= 25 ? 'bg-teal-500/20 text-teal-400' :
                    'bg-amber-500/20 text-amber-400'
                  }`}>
                    {calculations.takeHomeRate >= 35 ? 'Strong' : calculations.takeHomeRate >= 25 ? 'Okay' : 'Low'}
                  </span>
                </div>
                <p className={`text-3xl font-bold font-mono ${
                  calculations.takeHomeRate >= 35 ? 'text-emerald-400' :
                  calculations.takeHomeRate >= 25 ? 'text-teal-400' :
                  'text-amber-400'
                } mb-2`}>
                  {formatPercent(calculations.takeHomeRate)}
                </p>
                <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden mb-3">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-500"
                    style={{ width: `${Math.min(Math.max(calculations.takeHomeRate, 0), 100)}%` }}
                  />
                </div>
                <p className="text-xs text-slate-500">
                  What you keep from every dollar earned
                </p>
              </div>
            </div>
          </div>

          {/* Comparison Insights */}
          <div className="glass rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white heading-font mb-4">Insights &amp; Recommendations</h3>
            <div className="space-y-3">
              {/* Profit Margin Insight */}
              <div className={`rounded-xl p-4 ${
                calculations.profitMargin >= 40
                  ? 'bg-teal-500/10 border border-teal-500/20'
                  : 'bg-amber-500/10 border border-amber-500/20'
              }`}>
                <p className={`text-sm font-medium mb-1 ${profitInsight.color}`}>
                  Profit Margin: {formatPercent(calculations.profitMargin)} ({profitInsight.label})
                </p>
                <p className="text-sm text-slate-300">{profitInsight.detail}</p>
              </div>

              {/* Tax Insight */}
              {calculations.netProfitBeforeTax > 0 && (
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4">
                  <p className="text-sm font-medium text-blue-400 mb-1">
                    Tax Set-Aside: {formatCurrency(calculations.totalTax)} per {period === 'monthly' ? 'month' : period === 'quarterly' ? 'quarter' : 'year'}
                  </p>
                  <p className="text-sm text-slate-300">
                    Based on ATO 2024-25 tax brackets, you should set aside approximately{' '}
                    {formatCurrency(calculations.totalTax)} {period === 'monthly' ? 'each month' : period === 'quarterly' ? 'each quarter' : 'per year'} for
                    income tax and Medicare levy. Your annualised taxable income of{' '}
                    {formatCurrency(calculations.annualisedProfit)} puts you in the{' '}
                    {calculations.annualisedProfit <= 18200
                      ? 'tax-free threshold'
                      : calculations.annualisedProfit <= 45000
                        ? '16% tax bracket'
                        : calculations.annualisedProfit <= 135000
                          ? '30% tax bracket'
                          : calculations.annualisedProfit <= 190000
                            ? '37% tax bracket'
                            : '45% tax bracket'}
                    .
                  </p>
                </div>
              )}

              {/* Top Expense Insight */}
              {calculations.expenseBreakdown.length > 0 && (
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <p className="text-sm font-medium text-white mb-1">
                    Largest Expense: {calculations.expenseBreakdown[0].label}
                  </p>
                  <p className="text-sm text-slate-300">
                    {calculations.expenseBreakdown[0].label} accounts for{' '}
                    {formatPercent(calculations.expenseBreakdown[0].percent)} of your total expenses
                    ({formatCurrency(calculations.expenseBreakdown[0].value)}).
                    {calculations.expenseBreakdown[0].percent > 40
                      ? ' This is a significant concentration — consider whether you can optimise or negotiate better rates.'
                      : ' Your expenses are reasonably diversified across categories.'}
                  </p>
                </div>
              )}

              {/* Loss Warning */}
              {calculations.netProfitBeforeTax < 0 && (
                <div className="bg-rose-500/10 border border-rose-500/20 rounded-xl p-4">
                  <p className="text-sm font-medium text-rose-400 mb-1">
                    Operating at a Loss
                  </p>
                  <p className="text-sm text-slate-300">
                    Your expenses exceed your income by {formatCurrency(Math.abs(calculations.netProfitBeforeTax))} this {period === 'monthly' ? 'month' : period === 'quarterly' ? 'quarter' : 'year'}.
                    Review your expense categories for potential savings, and consider whether
                    your rates need adjustment. Persistent losses are unsustainable and may indicate
                    a pricing problem rather than an expense problem.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Copy to Clipboard */}
          <div className="glass rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-white heading-font">Export P&amp;L Statement</h3>
            </div>
            <p className="text-sm text-slate-400 mb-4">
              Copy a formatted profit and loss statement to your clipboard. Paste it into a spreadsheet,
              email to your accountant, or save it with your financial records.
            </p>
            <div className="flex justify-center">
              <button
                onClick={handleCopy}
                className="px-6 py-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-500/30 transition-all text-white font-medium"
              >
                {copied ? 'Copied to Clipboard!' : 'Copy P&L Statement to Clipboard'}
              </button>
            </div>
          </div>

          {/* Related Tools */}
          <div className="glass rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white heading-font mb-4">Related Tools</h3>
            <div className="grid sm:grid-cols-3 gap-3">
              <a href="/tools/tax-estimator" className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-500/30 rounded-xl p-4 transition-all group">
                <p className="text-white font-medium text-sm group-hover:text-teal-400 transition-colors">Tax Estimator</p>
                <p className="text-xs text-slate-500 mt-1">Detailed ATO tax breakdown with PAYG instalments</p>
              </a>
              <a href="/tools/expense-deduction-calculator" className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-500/30 rounded-xl p-4 transition-all group">
                <p className="text-white font-medium text-sm group-hover:text-teal-400 transition-colors">Expense Deduction Calculator</p>
                <p className="text-xs text-slate-500 mt-1">Maximise your ATO-compliant tax deductions</p>
              </a>
              <a href="/tools/cashflow-forecast" className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-500/30 rounded-xl p-4 transition-all group">
                <p className="text-white font-medium text-sm group-hover:text-teal-400 transition-colors">Cash Flow Forecast</p>
                <p className="text-xs text-slate-500 mt-1">Project your cash flow for the next 12 months</p>
              </a>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="text-center">
            <p className="text-xs text-slate-500 max-w-2xl mx-auto">
              Tax estimates are based on ATO 2024-25 individual income tax rates and the 2% Medicare
              levy. This tool provides estimates only and does not constitute financial or tax advice.
              Consult a registered tax agent or accountant for formal tax planning. The Medicare levy
              surcharge, HELP repayments, and other offsets are not included in these calculations.
            </p>
          </div>
        </>
      )}
    </div>
  );
}
