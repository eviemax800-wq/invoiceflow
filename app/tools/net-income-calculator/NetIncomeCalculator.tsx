'use client';

import { useState, useMemo, useCallback } from 'react';

function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

function formatCurrencyExact(value: number): string {
  return new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

interface BusinessExpenses {
  homeOffice: string;
  equipment: string;
  professionalDev: string;
  travel: string;
  marketing: string;
  insurance: string;
  accounting: string;
  other: string;
}

// ATO 2024-25 income tax brackets
function calculateIncomeTax(taxableIncome: number): number {
  if (taxableIncome <= 18200) return 0;
  if (taxableIncome <= 45000) return (taxableIncome - 18200) * 0.16;
  if (taxableIncome <= 135000) return (45000 - 18200) * 0.16 + (taxableIncome - 45000) * 0.30;
  if (taxableIncome <= 190000)
    return (45000 - 18200) * 0.16 + (135000 - 45000) * 0.30 + (taxableIncome - 135000) * 0.37;
  return (
    (45000 - 18200) * 0.16 +
    (135000 - 45000) * 0.30 +
    (190000 - 135000) * 0.37 +
    (taxableIncome - 190000) * 0.45
  );
}

// Medicare levy: 2% above threshold
function calculateMedicareLevy(taxableIncome: number): number {
  if (taxableIncome <= 24276) return 0;
  return taxableIncome * 0.02;
}

// Medicare Levy Surcharge (no private health insurance)
function calculateMedicareSurcharge(taxableIncome: number, hasPrivateHealth: boolean): number {
  if (hasPrivateHealth) return 0;
  if (taxableIncome <= 93000) return 0;
  if (taxableIncome <= 108000) return taxableIncome * 0.01;
  if (taxableIncome <= 144000) return taxableIncome * 0.0125;
  return taxableIncome * 0.015;
}

// HELP/HECS repayment rates 2024-25
function calculateHelpRepayment(repaymentIncome: number, hasHelp: boolean): number {
  if (!hasHelp) return 0;
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

const superRateOptions = [
  { label: '0%', value: 0 },
  { label: '11.5%', value: 0.115 },
  { label: '15%', value: 0.15 },
  { label: '25%', value: 0.25 },
];

export default function NetIncomeCalculator() {
  const [grossIncome, setGrossIncome] = useState('100000');
  const [gstRegistered, setGstRegistered] = useState(true);
  const [expenses, setExpenses] = useState<BusinessExpenses>({
    homeOffice: '0',
    equipment: '0',
    professionalDev: '0',
    travel: '0',
    marketing: '0',
    insurance: '0',
    accounting: '0',
    other: '0',
  });
  const [superRate, setSuperRate] = useState(0.115);
  const [hasPrivateHealth, setHasPrivateHealth] = useState(false);
  const [hasHelp, setHasHelp] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showExpenses, setShowExpenses] = useState(false);

  const updateExpense = useCallback((key: keyof BusinessExpenses, value: string) => {
    setExpenses((prev) => ({ ...prev, [key]: value }));
  }, []);

  const totalExpenses = useMemo(() => {
    return Object.values(expenses).reduce((sum, v) => sum + (parseFloat(v) || 0), 0);
  }, [expenses]);

  const results = useMemo(() => {
    const gross = parseFloat(grossIncome) || 0;
    if (gross <= 0) return null;

    // Step 1: GST — if registered, gross includes GST so actual income is gross / 1.1
    const gstCollected = gstRegistered ? gross - gross / 1.1 : 0;
    const incomeExGst = gstRegistered ? gross / 1.1 : gross;

    // Step 2: Business expenses (deducted from income ex-GST)
    const totalBizExpenses = totalExpenses;
    const taxableIncome = Math.max(0, incomeExGst - totalBizExpenses);

    // Step 3: Super contribution (on pre-tax income)
    const superContribution = taxableIncome * superRate;

    // Taxable income after super deduction (personal super contributions are deductible)
    const taxableAfterSuper = Math.max(0, taxableIncome - superContribution);

    // Step 4: Income tax
    const incomeTax = calculateIncomeTax(taxableAfterSuper);

    // Step 5: Medicare levy
    const medicareLevy = calculateMedicareLevy(taxableAfterSuper);

    // Step 6: Medicare Levy Surcharge
    const medicareSurcharge = calculateMedicareSurcharge(taxableAfterSuper, hasPrivateHealth);

    // Step 7: HELP repayment (based on repayment income = taxable income + super deduction for HELP purposes)
    // HELP repayment income includes reportable super contributions
    const helpRepaymentIncome = taxableAfterSuper + superContribution;
    const helpRepayment = calculateHelpRepayment(helpRepaymentIncome, hasHelp);

    // Net take-home = taxable income - tax - medicare - surcharge - HELP - super
    const netTakeHome = taxableIncome - incomeTax - medicareLevy - medicareSurcharge - helpRepayment - superContribution;

    // Metrics
    const effectiveTaxRate = gross > 0 ? ((incomeTax + medicareLevy + medicareSurcharge) / gross) * 100 : 0;
    const totalDeductions = gstCollected + totalBizExpenses + incomeTax + medicareLevy + medicareSurcharge + helpRepayment + superContribution;
    const deductionRate = gross > 0 ? (totalDeductions / gross) * 100 : 0;
    const netToGrossRatio = gross > 0 ? (netTakeHome / gross) * 100 : 0;

    // Breakdowns
    const netMonthly = netTakeHome / 12;
    const netWeekly = netTakeHome / 52;
    const netDaily = netTakeHome / 365;

    return {
      gross,
      gstCollected,
      incomeExGst,
      totalBizExpenses,
      taxableIncome,
      superContribution,
      taxableAfterSuper,
      incomeTax,
      medicareLevy,
      medicareSurcharge,
      helpRepayment,
      netTakeHome,
      effectiveTaxRate,
      totalDeductions,
      deductionRate,
      netToGrossRatio,
      netMonthly,
      netWeekly,
      netDaily,
    };
  }, [grossIncome, gstRegistered, totalExpenses, superRate, hasPrivateHealth, hasHelp]);

  const handleCopy = useCallback(() => {
    if (!results) return;
    const text = [
      'FREELANCE NET INCOME CALCULATION',
      '=================================',
      '',
      'INCOME WATERFALL:',
      `  Gross annual income:      ${formatCurrencyExact(results.gross)}`,
      ...(gstRegistered ? [`  Less GST collected:      -${formatCurrencyExact(results.gstCollected)}`] : []),
      `  Income ex-GST:            ${formatCurrencyExact(results.incomeExGst)}`,
      ...(results.totalBizExpenses > 0 ? [`  Less business expenses:  -${formatCurrencyExact(results.totalBizExpenses)}`] : []),
      `  Taxable income:           ${formatCurrencyExact(results.taxableIncome)}`,
      ...(results.superContribution > 0 ? [`  Less super contribution: -${formatCurrencyExact(results.superContribution)}`] : []),
      `  Taxable after super:      ${formatCurrencyExact(results.taxableAfterSuper)}`,
      `  Less income tax:         -${formatCurrencyExact(results.incomeTax)}`,
      `  Less Medicare levy:      -${formatCurrencyExact(results.medicareLevy)}`,
      ...(results.medicareSurcharge > 0 ? [`  Less Medicare surcharge: -${formatCurrencyExact(results.medicareSurcharge)}`] : []),
      ...(results.helpRepayment > 0 ? [`  Less HELP repayment:     -${formatCurrencyExact(results.helpRepayment)}`] : []),
      '  ────────────────────────────',
      `  NET TAKE-HOME:            ${formatCurrencyExact(results.netTakeHome)}`,
      '',
      'KEY METRICS:',
      `  Net monthly income:       ${formatCurrencyExact(results.netMonthly)}`,
      `  Effective tax rate:       ${results.effectiveTaxRate.toFixed(1)}%`,
      `  Total deduction rate:     ${results.deductionRate.toFixed(1)}%`,
      `  Net-to-gross ratio:       ${results.netToGrossRatio.toFixed(1)}%`,
      '',
      'BREAKDOWN:',
      `  Annual:  ${formatCurrency(results.netTakeHome)}`,
      `  Monthly: ${formatCurrency(results.netMonthly)}`,
      `  Weekly:  ${formatCurrency(results.netWeekly)}`,
      `  Daily:   ${formatCurrency(results.netDaily)}`,
      '',
      'Settings:',
      `  GST registered: ${gstRegistered ? 'Yes' : 'No'}`,
      `  Super rate: ${(superRate * 100).toFixed(1)}%`,
      `  Private health: ${hasPrivateHealth ? 'Yes' : 'No'}`,
      `  HELP/HECS debt: ${hasHelp ? 'Yes' : 'No'}`,
      '',
      'Generated by InvoiceFlow — invoiceflow.au/tools/net-income-calculator',
    ].join('\n');
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [results, gstRegistered, superRate, hasPrivateHealth, hasHelp]);

  const inputClass =
    'w-full bg-white/5 border border-white/10 rounded-lg px-3 pl-7 py-2.5 text-white focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/30 outline-none transition-colors';

  return (
    <div className="space-y-8">
      {/* Gross Income */}
      <div className="glass rounded-2xl p-6">
        <h3 className="text-lg font-bold text-white heading-font mb-4">Gross Annual Income</h3>
        <div>
          <label className="block text-sm text-slate-300 mb-1.5">
            Total amount you invoice per year (including GST if registered)
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">$</span>
            <input
              type="number"
              value={grossIncome}
              onChange={(e) => setGrossIncome(e.target.value)}
              className={inputClass}
              placeholder="100000"
            />
          </div>
        </div>

        {/* Quick presets */}
        <div className="flex flex-wrap gap-2 mt-4">
          {[50000, 75000, 100000, 120000, 150000, 200000].map((amt) => (
            <button
              key={amt}
              onClick={() => setGrossIncome(String(amt))}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                grossIncome === String(amt)
                  ? 'bg-gradient-to-r from-teal-500 to-blue-500 text-white'
                  : 'bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-500/30 text-slate-400 hover:text-white'
              }`}
            >
              {formatCurrency(amt)}
            </button>
          ))}
        </div>
      </div>

      {/* Toggles Row */}
      <div className="grid sm:grid-cols-3 gap-4">
        {/* GST Toggle */}
        <div className="glass rounded-2xl p-6">
          <h3 className="text-sm font-bold text-white heading-font mb-3">GST Registered</h3>
          <div className="flex gap-2 p-1 bg-white/5 rounded-xl">
            <button
              onClick={() => setGstRegistered(true)}
              className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                gstRegistered
                  ? 'bg-gradient-to-r from-teal-500 to-blue-500 text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Yes
            </button>
            <button
              onClick={() => setGstRegistered(false)}
              className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                !gstRegistered
                  ? 'bg-gradient-to-r from-teal-500 to-blue-500 text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              No
            </button>
          </div>
          <p className="text-xs text-slate-500 mt-2">Compulsory if turnover exceeds $75K</p>
        </div>

        {/* Private Health Toggle */}
        <div className="glass rounded-2xl p-6">
          <h3 className="text-sm font-bold text-white heading-font mb-3">Private Health Insurance</h3>
          <div className="flex gap-2 p-1 bg-white/5 rounded-xl">
            <button
              onClick={() => setHasPrivateHealth(true)}
              className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                hasPrivateHealth
                  ? 'bg-gradient-to-r from-teal-500 to-blue-500 text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Yes
            </button>
            <button
              onClick={() => setHasPrivateHealth(false)}
              className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                !hasPrivateHealth
                  ? 'bg-gradient-to-r from-teal-500 to-blue-500 text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              No
            </button>
          </div>
          <p className="text-xs text-slate-500 mt-2">Affects Medicare Levy Surcharge</p>
        </div>

        {/* HELP Toggle */}
        <div className="glass rounded-2xl p-6">
          <h3 className="text-sm font-bold text-white heading-font mb-3">HELP/HECS Debt</h3>
          <div className="flex gap-2 p-1 bg-white/5 rounded-xl">
            <button
              onClick={() => setHasHelp(true)}
              className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                hasHelp
                  ? 'bg-gradient-to-r from-teal-500 to-blue-500 text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Yes
            </button>
            <button
              onClick={() => setHasHelp(false)}
              className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                !hasHelp
                  ? 'bg-gradient-to-r from-teal-500 to-blue-500 text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              No
            </button>
          </div>
          <p className="text-xs text-slate-500 mt-2">Adds compulsory repayment %</p>
        </div>
      </div>

      {/* Business Expenses */}
      <div className="glass rounded-2xl p-6">
        <button
          onClick={() => setShowExpenses(!showExpenses)}
          className="flex items-center justify-between w-full"
        >
          <div>
            <h3 className="text-lg font-bold text-white heading-font">Business Expenses</h3>
            <p className="text-xs text-slate-500 mt-1">
              Tax-deductible expenses that reduce your taxable income
            </p>
          </div>
          <div className="flex items-center gap-3">
            {totalExpenses > 0 && (
              <span className="text-teal-400 font-bold text-sm">{formatCurrency(totalExpenses)}/yr</span>
            )}
            <svg
              className={`w-5 h-5 text-slate-400 transition-transform ${showExpenses ? 'rotate-180' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </button>

        {showExpenses && (
          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            {([
              { label: 'Home Office', key: 'homeOffice' as keyof BusinessExpenses, hint: 'Rent portion, utilities, cleaning' },
              { label: 'Equipment & Software', key: 'equipment' as keyof BusinessExpenses, hint: 'Laptop, phone, SaaS subscriptions' },
              { label: 'Professional Development', key: 'professionalDev' as keyof BusinessExpenses, hint: 'Courses, books, conferences' },
              { label: 'Travel & Transport', key: 'travel' as keyof BusinessExpenses, hint: 'Client visits, fuel, parking' },
              { label: 'Marketing', key: 'marketing' as keyof BusinessExpenses, hint: 'Ads, website, branding' },
              { label: 'Insurance', key: 'insurance' as keyof BusinessExpenses, hint: 'Professional indemnity, public liability' },
              { label: 'Accounting', key: 'accounting' as keyof BusinessExpenses, hint: 'Tax agent, bookkeeping' },
              { label: 'Other Expenses', key: 'other' as keyof BusinessExpenses, hint: 'Phone, internet, memberships' },
            ]).map(({ label, key, hint }) => (
              <div key={key}>
                <label className="block text-sm text-slate-300 mb-1">{label}</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">$</span>
                  <input
                    type="number"
                    value={expenses[key]}
                    onChange={(e) => updateExpense(key, e.target.value)}
                    className={inputClass}
                    placeholder="0"
                  />
                </div>
                <p className="text-xs text-slate-600 mt-0.5">{hint}</p>
              </div>
            ))}
            <div className="sm:col-span-2 bg-white/5 rounded-xl p-3 flex justify-between items-center">
              <span className="text-slate-300 text-sm">Total Annual Business Expenses</span>
              <span className="text-white font-bold">{formatCurrency(totalExpenses)}</span>
            </div>
          </div>
        )}
      </div>

      {/* Super Rate */}
      <div className="glass rounded-2xl p-6">
        <h3 className="text-lg font-bold text-white heading-font mb-2">Super Contribution Rate</h3>
        <p className="text-xs text-slate-500 mb-4">
          Voluntary super contributions are tax-deductible. 11.5% matches the employee equivalent for 2024-25.
        </p>
        <div className="flex flex-wrap gap-2">
          {superRateOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => setSuperRate(opt.value)}
              className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                superRate === opt.value
                  ? 'bg-gradient-to-r from-teal-500 to-blue-500 text-white'
                  : 'bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-500/30 text-slate-400 hover:text-white'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
        {results && results.superContribution > 0 && (
          <div className="mt-3 bg-white/5 rounded-xl p-3 flex justify-between items-center">
            <span className="text-slate-300 text-sm">Annual super contribution</span>
            <span className="text-teal-400 font-bold">{formatCurrency(results.superContribution)}</span>
          </div>
        )}
      </div>

      {/* ========== RESULTS ========== */}
      {results && (
        <>
          {/* Net Take-Home Banner */}
          <div className="rounded-2xl p-8 bg-gradient-to-br from-teal-500/10 to-blue-500/10 border border-teal-500/20">
            <div className="text-center">
              <p className="text-sm text-slate-400 mb-2">Your Net Take-Home Pay</p>
              <p className="text-5xl sm:text-6xl font-bold text-white heading-font">
                {formatCurrency(results.netTakeHome)}
              </p>
              <p className="text-slate-400 mt-2">
                per year from {formatCurrency(results.gross)} gross
              </p>
            </div>
          </div>

          {/* Key Metric Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="glass rounded-xl p-4 text-center">
              <p className="text-xs text-slate-400 mb-1">Net Monthly Income</p>
              <p className="text-xl font-bold text-white">{formatCurrency(results.netMonthly)}</p>
            </div>
            <div className="glass rounded-xl p-4 text-center">
              <p className="text-xs text-slate-400 mb-1">Effective Tax Rate</p>
              <p className="text-xl font-bold text-amber-400">{results.effectiveTaxRate.toFixed(1)}%</p>
            </div>
            <div className="glass rounded-xl p-4 text-center">
              <p className="text-xs text-slate-400 mb-1">Total Deduction Rate</p>
              <p className="text-xl font-bold text-rose-400">{results.deductionRate.toFixed(1)}%</p>
            </div>
            <div className="glass rounded-xl p-4 text-center">
              <p className="text-xs text-slate-400 mb-1">Net-to-Gross Ratio</p>
              <p className="text-xl font-bold text-emerald-400">{results.netToGrossRatio.toFixed(1)}%</p>
            </div>
          </div>

          {/* Income Waterfall */}
          <div className="glass rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white heading-font mb-6">Income Waterfall</h3>
            <div className="space-y-0">
              {/* Gross */}
              <WaterfallRow label="Gross Annual Income" amount={results.gross} isTotal />

              {/* GST */}
              {gstRegistered && (
                <WaterfallRow label="Less GST collected" amount={-results.gstCollected} color="amber" />
              )}

              {/* Income ex-GST subtotal */}
              {gstRegistered && (
                <WaterfallRow label="Income (ex-GST)" amount={results.incomeExGst} isSubtotal />
              )}

              {/* Business expenses */}
              {results.totalBizExpenses > 0 && (
                <WaterfallRow label="Less business expenses" amount={-results.totalBizExpenses} color="rose" />
              )}

              {/* Taxable income */}
              <WaterfallRow label="Taxable Income" amount={results.taxableIncome} isSubtotal />

              {/* Super */}
              {results.superContribution > 0 && (
                <WaterfallRow label="Less super contribution" amount={-results.superContribution} color="teal" />
              )}

              {/* Income tax */}
              <WaterfallRow label="Less income tax" amount={-results.incomeTax} color="amber" />

              {/* Medicare levy */}
              <WaterfallRow label="Less Medicare levy (2%)" amount={-results.medicareLevy} color="blue" />

              {/* Medicare surcharge */}
              {results.medicareSurcharge > 0 && (
                <WaterfallRow
                  label="Less Medicare Levy Surcharge"
                  amount={-results.medicareSurcharge}
                  color="blue"
                />
              )}

              {/* HELP repayment */}
              {results.helpRepayment > 0 && (
                <WaterfallRow label="Less HELP/HECS repayment" amount={-results.helpRepayment} color="violet" />
              )}

              {/* Net take-home */}
              <div className="border-t-2 border-teal-500/30 mt-2 pt-2">
                <WaterfallRow label="Net Take-Home Pay" amount={results.netTakeHome} isTotal isFinal />
              </div>
            </div>
          </div>

          {/* Breakdown Table */}
          <div className="glass rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white heading-font mb-4">Income Breakdown</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left text-white py-3 pr-4 font-semibold">Period</th>
                    <th className="text-right text-white py-3 pr-4 font-semibold">Gross</th>
                    <th className="text-right text-white py-3 pr-4 font-semibold">Deductions</th>
                    <th className="text-right text-white py-3 font-semibold">Net Take-Home</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  <tr className="border-b border-white/5">
                    <td className="py-3 pr-4 font-medium text-white">Annual</td>
                    <td className="py-3 pr-4 text-right">{formatCurrency(results.gross)}</td>
                    <td className="py-3 pr-4 text-right text-rose-400">
                      -{formatCurrency(results.totalDeductions)}
                    </td>
                    <td className="py-3 text-right text-emerald-400 font-bold">
                      {formatCurrency(results.netTakeHome)}
                    </td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 pr-4 font-medium text-white">Monthly</td>
                    <td className="py-3 pr-4 text-right">{formatCurrency(results.gross / 12)}</td>
                    <td className="py-3 pr-4 text-right text-rose-400">
                      -{formatCurrency(results.totalDeductions / 12)}
                    </td>
                    <td className="py-3 text-right text-emerald-400 font-bold">
                      {formatCurrency(results.netMonthly)}
                    </td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 pr-4 font-medium text-white">Weekly</td>
                    <td className="py-3 pr-4 text-right">{formatCurrency(results.gross / 52)}</td>
                    <td className="py-3 pr-4 text-right text-rose-400">
                      -{formatCurrency(results.totalDeductions / 52)}
                    </td>
                    <td className="py-3 text-right text-emerald-400 font-bold">
                      {formatCurrency(results.netWeekly)}
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium text-white">Daily</td>
                    <td className="py-3 pr-4 text-right">{formatCurrency(results.gross / 365)}</td>
                    <td className="py-3 pr-4 text-right text-rose-400">
                      -{formatCurrency(results.totalDeductions / 365)}
                    </td>
                    <td className="py-3 text-right text-emerald-400 font-bold">
                      {formatCurrency(results.netDaily)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* You Keep X% Card */}
          <div className="glass rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white heading-font mb-4">
              You Keep{' '}
              <span className="gradient-text">{results.netToGrossRatio.toFixed(1)}%</span> of Every
              Dollar Earned
            </h3>
            <div className="relative h-8 bg-white/5 rounded-full overflow-hidden">
              <div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full transition-all duration-700 ease-out"
                style={{ width: `${Math.min(results.netToGrossRatio, 100)}%` }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xs font-bold text-white drop-shadow-md">
                  {formatCurrency(results.netTakeHome)} of {formatCurrency(results.gross)}
                </span>
              </div>
            </div>
            <div className="flex justify-between mt-2 text-xs text-slate-500">
              <span>$0</span>
              <span>{formatCurrency(results.gross)}</span>
            </div>

            {/* Deduction breakdown mini-bar */}
            <div className="mt-6 space-y-2">
              <p className="text-sm text-slate-400 mb-3">Where the other {(100 - results.netToGrossRatio).toFixed(1)}% goes:</p>
              {[
                ...(gstRegistered ? [{ label: 'GST', amount: results.gstCollected, color: 'bg-amber-500' }] : []),
                ...(results.totalBizExpenses > 0 ? [{ label: 'Business Expenses', amount: results.totalBizExpenses, color: 'bg-rose-500' }] : []),
                { label: 'Income Tax', amount: results.incomeTax, color: 'bg-amber-400' },
                { label: 'Medicare Levy', amount: results.medicareLevy, color: 'bg-blue-500' },
                ...(results.medicareSurcharge > 0 ? [{ label: 'Medicare Surcharge', amount: results.medicareSurcharge, color: 'bg-blue-400' }] : []),
                ...(results.helpRepayment > 0 ? [{ label: 'HELP Repayment', amount: results.helpRepayment, color: 'bg-violet-500' }] : []),
                ...(results.superContribution > 0 ? [{ label: 'Super Contribution', amount: results.superContribution, color: 'bg-teal-500' }] : []),
              ]
                .filter((d) => d.amount > 0)
                .map((d) => {
                  const pct = (d.amount / results.gross) * 100;
                  return (
                    <div key={d.label} className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-sm flex-shrink-0 ${d.color}`} />
                      <span className="text-sm text-slate-400 flex-1">{d.label}</span>
                      <span className="text-sm text-slate-300 font-medium w-24 text-right">
                        {formatCurrency(d.amount)}
                      </span>
                      <span className="text-xs text-slate-500 w-12 text-right">{pct.toFixed(1)}%</span>
                    </div>
                  );
                })}
            </div>
          </div>

          {/* Copy Button */}
          <div className="flex justify-center">
            <button
              onClick={handleCopy}
              className="px-6 py-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-500/30 transition-all text-white font-medium"
            >
              {copied ? 'Copied!' : 'Copy Net Income Summary to Clipboard'}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

/* ─── Waterfall Row Component ─── */
function WaterfallRow({
  label,
  amount,
  color,
  isTotal,
  isSubtotal,
  isFinal,
}: {
  label: string;
  amount: number;
  color?: 'amber' | 'rose' | 'teal' | 'blue' | 'violet';
  isTotal?: boolean;
  isSubtotal?: boolean;
  isFinal?: boolean;
}) {
  const colorMap = {
    amber: 'text-amber-400',
    rose: 'text-rose-400',
    teal: 'text-teal-400',
    blue: 'text-blue-400',
    violet: 'text-violet-400',
  };

  const amountColor = isFinal
    ? 'text-emerald-400'
    : isTotal || isSubtotal
    ? 'text-white'
    : color
    ? colorMap[color]
    : 'text-white';

  const isNegative = amount < 0;
  const displayAmount = isNegative ? `-${formatCurrency(Math.abs(amount))}` : formatCurrency(amount);

  return (
    <div
      className={`flex justify-between items-center py-2.5 ${
        isTotal || isSubtotal ? 'border-b border-white/10' : ''
      } ${isFinal ? 'py-3' : ''}`}
    >
      <span
        className={`text-sm ${
          isTotal || isFinal
            ? 'text-white font-bold'
            : isSubtotal
            ? 'text-slate-200 font-semibold'
            : 'text-slate-400'
        }`}
      >
        {label}
      </span>
      <span
        className={`font-mono text-sm font-medium ${amountColor} ${
          isFinal ? 'text-lg font-bold' : ''
        }`}
      >
        {displayAmount}
      </span>
    </div>
  );
}
