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

type IncomeMode = 'average' | 'detailed';
type Variability = 'low' | 'medium' | 'high';

interface FixedExpenses {
  rent: string;
  insurance: string;
  utilities: string;
  internet: string;
  subscriptions: string;
  transport: string;
  loanRepayments: string;
  otherFixed: string;
}

interface VariableExpenses {
  groceries: string;
  diningOut: string;
  entertainment: string;
  clothing: string;
  healthFitness: string;
  otherVariable: string;
}

interface BusinessExpenses {
  software: string;
  marketing: string;
  professionalDev: string;
  coworking: string;
  accounting: string;
}

interface SavingsGoals {
  emergencyFundTarget: string;
  retirement: string;
  holidayFund: string;
  otherGoals: string;
}

function calculateTaxReserve(annualIncome: number): { tax: number; medicare: number; total: number; effectiveRate: number } {
  // 2024-25 ATO tax brackets
  let tax = 0;
  if (annualIncome > 190000) {
    tax += (annualIncome - 190000) * 0.45;
    tax += (190000 - 135000) * 0.37;
    tax += (135000 - 45000) * 0.30;
    tax += (45000 - 18200) * 0.16;
  } else if (annualIncome > 135000) {
    tax += (annualIncome - 135000) * 0.37;
    tax += (135000 - 45000) * 0.30;
    tax += (45000 - 18200) * 0.16;
  } else if (annualIncome > 45000) {
    tax += (annualIncome - 45000) * 0.30;
    tax += (45000 - 18200) * 0.16;
  } else if (annualIncome > 18200) {
    tax += (annualIncome - 18200) * 0.16;
  }

  const medicare = annualIncome > 24276 ? annualIncome * 0.02 : 0;
  const total = tax + medicare;
  const effectiveRate = annualIncome > 0 ? (total / annualIncome) * 100 : 0;

  return { tax, medicare, total, effectiveRate };
}

const incomePresets = [
  {
    label: 'Low earner ($4K/mo)',
    avgMonthly: 4000,
    variability: 'medium' as Variability,
    fixed: { rent: '1400', insurance: '100', utilities: '150', internet: '80', subscriptions: '50', transport: '200', loanRepayments: '0', otherFixed: '100' },
    variable: { groceries: '400', diningOut: '100', entertainment: '50', clothing: '50', healthFitness: '50', otherVariable: '50' },
    business: { software: '50', marketing: '50', professionalDev: '30', coworking: '0', accounting: '80' },
    savings: { emergencyFundTarget: '12000', retirement: '200', holidayFund: '100', otherGoals: '0' },
  },
  {
    label: 'Mid earner ($8K/mo)',
    avgMonthly: 8000,
    variability: 'medium' as Variability,
    fixed: { rent: '2000', insurance: '150', utilities: '200', internet: '100', subscriptions: '100', transport: '300', loanRepayments: '500', otherFixed: '150' },
    variable: { groceries: '600', diningOut: '250', entertainment: '150', clothing: '100', healthFitness: '100', otherVariable: '100' },
    business: { software: '150', marketing: '100', professionalDev: '80', coworking: '200', accounting: '150' },
    savings: { emergencyFundTarget: '25000', retirement: '500', holidayFund: '300', otherGoals: '200' },
  },
  {
    label: 'High earner ($15K/mo)',
    avgMonthly: 15000,
    variability: 'high' as Variability,
    fixed: { rent: '3000', insurance: '250', utilities: '300', internet: '120', subscriptions: '200', transport: '500', loanRepayments: '1000', otherFixed: '300' },
    variable: { groceries: '800', diningOut: '500', entertainment: '300', clothing: '200', healthFitness: '200', otherVariable: '200' },
    business: { software: '300', marketing: '300', professionalDev: '200', coworking: '400', accounting: '300' },
    savings: { emergencyFundTarget: '50000', retirement: '1500', holidayFund: '500', otherGoals: '500' },
  },
];

export default function BudgetPlanner() {
  // Income
  const [incomeMode, setIncomeMode] = useState<IncomeMode>('average');
  const [avgMonthly, setAvgMonthly] = useState('8000');
  const [month1, setMonth1] = useState('');
  const [month2, setMonth2] = useState('');
  const [month3, setMonth3] = useState('');
  const [month4, setMonth4] = useState('');
  const [month5, setMonth5] = useState('');
  const [month6, setMonth6] = useState('');
  const [variability, setVariability] = useState<Variability>('medium');

  // Fixed expenses
  const [fixed, setFixed] = useState<FixedExpenses>({
    rent: '2000', insurance: '150', utilities: '200', internet: '100',
    subscriptions: '100', transport: '300', loanRepayments: '500', otherFixed: '150',
  });

  // Variable expenses
  const [variable, setVariable] = useState<VariableExpenses>({
    groceries: '600', diningOut: '250', entertainment: '150',
    clothing: '100', healthFitness: '100', otherVariable: '100',
  });

  // Business expenses
  const [business, setBusiness] = useState<BusinessExpenses>({
    software: '150', marketing: '100', professionalDev: '80',
    coworking: '200', accounting: '150',
  });

  // Savings goals
  const [savings, setSavings] = useState<SavingsGoals>({
    emergencyFundTarget: '25000', retirement: '500',
    holidayFund: '300', otherGoals: '200',
  });

  const [copied, setCopied] = useState(false);

  const updateFixed = useCallback((key: keyof FixedExpenses, value: string) => {
    setFixed(prev => ({ ...prev, [key]: value }));
  }, []);

  const updateVariable = useCallback((key: keyof VariableExpenses, value: string) => {
    setVariable(prev => ({ ...prev, [key]: value }));
  }, []);

  const updateBusiness = useCallback((key: keyof BusinessExpenses, value: string) => {
    setBusiness(prev => ({ ...prev, [key]: value }));
  }, []);

  const updateSavings = useCallback((key: keyof SavingsGoals, value: string) => {
    setSavings(prev => ({ ...prev, [key]: value }));
  }, []);

  const applyPreset = useCallback((preset: typeof incomePresets[0]) => {
    setAvgMonthly(String(preset.avgMonthly));
    setVariability(preset.variability);
    setFixed(preset.fixed);
    setVariable(preset.variable);
    setBusiness(preset.business);
    setSavings(preset.savings);
    setIncomeMode('average');
    setMonth1(''); setMonth2(''); setMonth3('');
    setMonth4(''); setMonth5(''); setMonth6('');
  }, []);

  const results = useMemo(() => {
    // Calculate monthly income
    let monthlyIncome: number;
    if (incomeMode === 'detailed') {
      const months = [month1, month2, month3, month4, month5, month6]
        .map(v => parseFloat(v) || 0)
        .filter(v => v > 0);
      if (months.length === 0) return null;
      monthlyIncome = months.reduce((a, b) => a + b, 0) / months.length;
    } else {
      monthlyIncome = parseFloat(avgMonthly) || 0;
    }
    if (monthlyIncome <= 0) return null;

    const annualIncome = monthlyIncome * 12;

    // Tax calculation
    const taxInfo = calculateTaxReserve(annualIncome);
    const monthlyTaxReserve = taxInfo.total / 12;

    // Sum expenses
    const fixedTotal = Object.values(fixed).reduce((sum, v) => sum + (parseFloat(v) || 0), 0);
    const variableTotal = Object.values(variable).reduce((sum, v) => sum + (parseFloat(v) || 0), 0);
    const businessTotal = Object.values(business).reduce((sum, v) => sum + (parseFloat(v) || 0), 0);

    // Savings
    const monthlySavings = (parseFloat(savings.retirement) || 0)
      + (parseFloat(savings.holidayFund) || 0)
      + (parseFloat(savings.otherGoals) || 0);
    const emergencyTarget = parseFloat(savings.emergencyFundTarget) || 0;

    // Totals
    const totalEssentials = fixedTotal + businessTotal;
    const totalWants = variableTotal;
    const totalSavings = monthlySavings;
    const totalOutgoings = totalEssentials + totalWants + totalSavings + monthlyTaxReserve;

    // Surplus/deficit
    const surplus = monthlyIncome - totalOutgoings;

    // Percentages of gross income
    const essentialsPercent = (totalEssentials / monthlyIncome) * 100;
    const wantsPercent = (totalWants / monthlyIncome) * 100;
    const savingsPercent = (totalSavings / monthlyIncome) * 100;
    const taxPercent = (monthlyTaxReserve / monthlyIncome) * 100;

    // Traffic light
    const spendingRatio = totalOutgoings / monthlyIncome;
    let healthStatus: 'green' | 'amber' | 'red';
    let healthLabel: string;
    let healthMessage: string;
    if (spendingRatio <= 0.9) {
      healthStatus = 'green';
      healthLabel = 'Healthy';
      healthMessage = 'Your budget has a comfortable buffer. You have room to save or invest the surplus.';
    } else if (spendingRatio <= 1.0) {
      healthStatus = 'amber';
      healthLabel = 'Tight';
      healthMessage = 'Your budget is balanced but has little margin. Consider reducing variable expenses for more breathing room.';
    } else {
      healthStatus = 'red';
      healthLabel = 'Overspending';
      healthMessage = 'Your outgoings exceed your income. You need to cut expenses or increase income to avoid running out of money.';
    }

    // Emergency fund
    const variabilityMultiplier = variability === 'low' ? 3 : variability === 'medium' ? 4.5 : 6;
    const recommendedEmergency = (fixedTotal + businessTotal) * variabilityMultiplier;
    const monthsToEmergency = emergencyTarget > 0 && surplus > 0
      ? Math.ceil(emergencyTarget / surplus)
      : surplus <= 0 ? Infinity : 0;

    // Minimum viable month
    const minimumViableMonth = fixedTotal + businessTotal + monthlyTaxReserve;

    // Surplus advice
    let surplusAdvice: string;
    if (surplus <= 0) {
      surplusAdvice = 'You are in deficit. Focus on reducing expenses or finding additional income sources before saving.';
    } else if (emergencyTarget > 0) {
      surplusAdvice = `Put your ${formatCurrency(surplus)} monthly surplus toward your emergency fund first. Once that\'s funded, allocate to retirement, debt payoff, or investments.`;
    } else {
      surplusAdvice = `Great position. Consider splitting your ${formatCurrency(surplus)} surplus: 50% investments, 30% additional super, 20% lifestyle upgrades.`;
    }

    return {
      monthlyIncome,
      annualIncome,
      taxInfo,
      monthlyTaxReserve,
      fixedTotal,
      variableTotal,
      businessTotal,
      monthlySavings,
      emergencyTarget,
      totalEssentials,
      totalWants,
      totalSavings,
      totalOutgoings,
      surplus,
      essentialsPercent,
      wantsPercent,
      savingsPercent,
      taxPercent,
      healthStatus,
      healthLabel,
      healthMessage,
      recommendedEmergency,
      monthsToEmergency,
      minimumViableMonth,
      surplusAdvice,
      variabilityMultiplier,
    };
  }, [incomeMode, avgMonthly, month1, month2, month3, month4, month5, month6, variability, fixed, variable, business, savings]);

  const handleCopy = useCallback(() => {
    if (!results) return;
    const text = [
      'FREELANCE BUDGET PLAN',
      '=====================',
      '',
      'INCOME:',
      `  Monthly income: ${formatCurrencyExact(results.monthlyIncome)}`,
      `  Annual income: ${formatCurrencyExact(results.annualIncome)}`,
      `  Income variability: ${variability}`,
      '',
      'MONTHLY BUDGET BREAKDOWN:',
      `  Fixed expenses (essentials): ${formatCurrency(results.fixedTotal)}`,
      `  Variable expenses (lifestyle): ${formatCurrency(results.variableTotal)}`,
      `  Business expenses: ${formatCurrency(results.businessTotal)}`,
      `  Tax + Medicare reserve: ${formatCurrency(results.monthlyTaxReserve)}`,
      `  Savings contributions: ${formatCurrency(results.monthlySavings)}`,
      `  ────────────────────`,
      `  Total outgoings: ${formatCurrency(results.totalOutgoings)}`,
      `  ${results.surplus >= 0 ? 'Surplus' : 'Deficit'}: ${formatCurrency(Math.abs(results.surplus))}`,
      '',
      'INCOME ALLOCATION:',
      `  Essentials + business: ${results.essentialsPercent.toFixed(1)}%`,
      `  Lifestyle (wants): ${results.wantsPercent.toFixed(1)}%`,
      `  Savings: ${results.savingsPercent.toFixed(1)}%`,
      `  Tax reserve: ${results.taxPercent.toFixed(1)}%`,
      '',
      'TAX ESTIMATE (2024-25):',
      `  Income tax: ${formatCurrency(results.taxInfo.tax)}/yr`,
      `  Medicare levy: ${formatCurrency(results.taxInfo.medicare)}/yr`,
      `  Effective tax rate: ${results.taxInfo.effectiveRate.toFixed(1)}%`,
      `  Monthly reserve: ${formatCurrency(results.monthlyTaxReserve)}`,
      '',
      'EMERGENCY FUND:',
      `  Recommended: ${formatCurrency(results.recommendedEmergency)} (${results.variabilityMultiplier} months)`,
      `  Target: ${formatCurrency(results.emergencyTarget)}`,
      results.monthsToEmergency !== Infinity
        ? `  Time to reach target: ${results.monthsToEmergency} months`
        : '  Cannot reach target at current surplus',
      '',
      'MINIMUM VIABLE MONTH:',
      `  ${formatCurrency(results.minimumViableMonth)} (essentials + business + tax only)`,
      '',
      `Budget health: ${results.healthLabel.toUpperCase()}`,
      '',
      'Generated by InvoiceFlow — invoiceflow.au/tools/budget-planner',
    ].join('\n');
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [results, variability]);

  const inputClass = 'w-full bg-white/5 border border-white/10 rounded-lg px-3 pl-7 py-2.5 text-white focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/30 outline-none transition-colors';
  const inputClassNoDollar = 'w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-white focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/30 outline-none transition-colors';

  return (
    <div className="space-y-8">
      {/* Presets */}
      <div className="glass rounded-2xl p-6">
        <h3 className="text-lg font-bold text-white heading-font mb-4">Quick Start — Income Presets</h3>
        <div className="flex flex-wrap gap-2">
          {incomePresets.map((preset) => (
            <button
              key={preset.label}
              onClick={() => applyPreset(preset)}
              className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-500/30 transition-all text-sm text-slate-300 hover:text-white"
            >
              <span className="font-medium">{preset.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Income Section */}
      <div className="glass rounded-2xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-white heading-font">Monthly Income</h3>
          <div className="flex gap-2 p-1 bg-white/5 rounded-xl">
            <button
              onClick={() => setIncomeMode('average')}
              className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-all ${
                incomeMode === 'average'
                  ? 'bg-gradient-to-r from-teal-500 to-blue-500 text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Average
            </button>
            <button
              onClick={() => setIncomeMode('detailed')}
              className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-all ${
                incomeMode === 'detailed'
                  ? 'bg-gradient-to-r from-teal-500 to-blue-500 text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Last 3-6 Months
            </button>
          </div>
        </div>

        {incomeMode === 'average' ? (
          <div>
            <label className="block text-sm text-slate-300 mb-1.5">Average Monthly Income (AUD)</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">$</span>
              <input
                type="number"
                value={avgMonthly}
                onChange={(e) => setAvgMonthly(e.target.value)}
                className={inputClass}
                placeholder="8000"
              />
            </div>
            <p className="text-xs text-slate-500 mt-1.5">
              Your typical monthly income before tax. Use gross (pre-tax) figures.
            </p>
          </div>
        ) : (
          <div>
            <p className="text-sm text-slate-400 mb-3">
              Enter your income for the last 3-6 months for a more accurate average. Leave blank months you don&apos;t have.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { label: 'Month 1', value: month1, setter: setMonth1 },
                { label: 'Month 2', value: month2, setter: setMonth2 },
                { label: 'Month 3', value: month3, setter: setMonth3 },
                { label: 'Month 4', value: month4, setter: setMonth4 },
                { label: 'Month 5', value: month5, setter: setMonth5 },
                { label: 'Month 6', value: month6, setter: setMonth6 },
              ].map(({ label, value, setter }) => (
                <div key={label}>
                  <label className="block text-xs text-slate-400 mb-1">{label}</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">$</span>
                    <input
                      type="number"
                      value={value}
                      onChange={(e) => setter(e.target.value)}
                      className={inputClass}
                      placeholder="0"
                    />
                  </div>
                </div>
              ))}
            </div>
            {(() => {
              const months = [month1, month2, month3, month4, month5, month6]
                .map(v => parseFloat(v) || 0)
                .filter(v => v > 0);
              if (months.length > 0) {
                const avg = months.reduce((a, b) => a + b, 0) / months.length;
                return (
                  <div className="mt-3 bg-white/5 rounded-xl p-3 flex justify-between items-center">
                    <span className="text-slate-300 text-sm">Average from {months.length} month{months.length > 1 ? 's' : ''}</span>
                    <span className="text-white font-bold">{formatCurrency(avg)}/mo</span>
                  </div>
                );
              }
              return null;
            })()}
          </div>
        )}

        {/* Variability slider */}
        <div className="mt-6">
          <label className="block text-sm text-slate-300 mb-2">
            Income Variability:{' '}
            <span className="text-teal-400 font-medium">
              {variability === 'low' ? 'Low (steady clients)' : variability === 'medium' ? 'Medium (some fluctuation)' : 'High (very unpredictable)'}
            </span>
          </label>
          <div className="flex gap-2 p-1 bg-white/5 rounded-xl w-fit">
            {(['low', 'medium', 'high'] as Variability[]).map((v) => (
              <button
                key={v}
                onClick={() => setVariability(v)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all capitalize ${
                  variability === v
                    ? 'bg-gradient-to-r from-teal-500 to-blue-500 text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {v}
              </button>
            ))}
          </div>
          <p className="text-xs text-slate-500 mt-1.5">
            Affects recommended emergency fund buffer: Low = 3 months, Medium = 4.5 months, High = 6 months.
          </p>
        </div>
      </div>

      {/* Fixed Expenses */}
      <div className="glass rounded-2xl p-6">
        <h3 className="text-lg font-bold text-white heading-font mb-4">Fixed Expenses (Monthly)</h3>
        <p className="text-xs text-slate-500 mb-4">
          Costs you pay every month regardless of income — your non-negotiable baseline.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {([
            { label: 'Rent / Mortgage', key: 'rent' as keyof FixedExpenses },
            { label: 'Insurance', key: 'insurance' as keyof FixedExpenses },
            { label: 'Utilities', key: 'utilities' as keyof FixedExpenses },
            { label: 'Internet', key: 'internet' as keyof FixedExpenses },
            { label: 'Subscriptions', key: 'subscriptions' as keyof FixedExpenses },
            { label: 'Car / Transport', key: 'transport' as keyof FixedExpenses },
            { label: 'Loan Repayments', key: 'loanRepayments' as keyof FixedExpenses },
            { label: 'Other Fixed', key: 'otherFixed' as keyof FixedExpenses },
          ]).map(({ label, key }) => (
            <div key={key}>
              <label className="block text-sm text-slate-300 mb-1.5">{label}</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">$</span>
                <input
                  type="number"
                  value={fixed[key]}
                  onChange={(e) => updateFixed(key, e.target.value)}
                  className={inputClass}
                  placeholder="0"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 bg-white/5 rounded-xl p-3 flex justify-between items-center">
          <span className="text-slate-300 text-sm">Total Fixed Expenses</span>
          <span className="text-white font-bold">
            {formatCurrency(Object.values(fixed).reduce((sum, v) => sum + (parseFloat(v) || 0), 0))}/mo
          </span>
        </div>
      </div>

      {/* Variable Expenses */}
      <div className="glass rounded-2xl p-6">
        <h3 className="text-lg font-bold text-white heading-font mb-4">Variable Expenses (Monthly)</h3>
        <p className="text-xs text-slate-500 mb-4">
          Flexible spending you can adjust when income is lower.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {([
            { label: 'Groceries', key: 'groceries' as keyof VariableExpenses },
            { label: 'Dining Out', key: 'diningOut' as keyof VariableExpenses },
            { label: 'Entertainment', key: 'entertainment' as keyof VariableExpenses },
            { label: 'Clothing', key: 'clothing' as keyof VariableExpenses },
            { label: 'Health / Fitness', key: 'healthFitness' as keyof VariableExpenses },
            { label: 'Other Variable', key: 'otherVariable' as keyof VariableExpenses },
          ]).map(({ label, key }) => (
            <div key={key}>
              <label className="block text-sm text-slate-300 mb-1.5">{label}</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">$</span>
                <input
                  type="number"
                  value={variable[key]}
                  onChange={(e) => updateVariable(key, e.target.value)}
                  className={inputClass}
                  placeholder="0"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 bg-white/5 rounded-xl p-3 flex justify-between items-center">
          <span className="text-slate-300 text-sm">Total Variable Expenses</span>
          <span className="text-white font-bold">
            {formatCurrency(Object.values(variable).reduce((sum, v) => sum + (parseFloat(v) || 0), 0))}/mo
          </span>
        </div>
      </div>

      {/* Business Expenses */}
      <div className="glass rounded-2xl p-6">
        <h3 className="text-lg font-bold text-white heading-font mb-4">Business Expenses (Monthly)</h3>
        <p className="text-xs text-slate-500 mb-4">
          Costs of running your freelance business — these are typically tax-deductible.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {([
            { label: 'Software / Tools', key: 'software' as keyof BusinessExpenses },
            { label: 'Marketing', key: 'marketing' as keyof BusinessExpenses },
            { label: 'Professional Development', key: 'professionalDev' as keyof BusinessExpenses },
            { label: 'Coworking / Office', key: 'coworking' as keyof BusinessExpenses },
            { label: 'Accounting / Legal', key: 'accounting' as keyof BusinessExpenses },
          ]).map(({ label, key }) => (
            <div key={key}>
              <label className="block text-sm text-slate-300 mb-1.5">{label}</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">$</span>
                <input
                  type="number"
                  value={business[key]}
                  onChange={(e) => updateBusiness(key, e.target.value)}
                  className={inputClass}
                  placeholder="0"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 bg-white/5 rounded-xl p-3 flex justify-between items-center">
          <span className="text-slate-300 text-sm">Total Business Expenses</span>
          <span className="text-white font-bold">
            {formatCurrency(Object.values(business).reduce((sum, v) => sum + (parseFloat(v) || 0), 0))}/mo
          </span>
        </div>
      </div>

      {/* Savings Goals */}
      <div className="glass rounded-2xl p-6">
        <h3 className="text-lg font-bold text-white heading-font mb-4">Savings Goals</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="sm:col-span-2">
            <label className="block text-sm text-slate-300 mb-1.5">Emergency Fund Target (total goal)</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">$</span>
              <input
                type="number"
                value={savings.emergencyFundTarget}
                onChange={(e) => updateSavings('emergencyFundTarget', e.target.value)}
                className={inputClass}
                placeholder="25000"
              />
            </div>
            <p className="text-xs text-slate-500 mt-1">
              The total amount you want saved as your emergency buffer — not a monthly contribution.
            </p>
          </div>
          {([
            { label: 'Retirement / Super (monthly)', key: 'retirement' as keyof SavingsGoals },
            { label: 'Holiday Fund (monthly)', key: 'holidayFund' as keyof SavingsGoals },
            { label: 'Other Goals (monthly)', key: 'otherGoals' as keyof SavingsGoals },
          ]).map(({ label, key }) => (
            <div key={key}>
              <label className="block text-sm text-slate-300 mb-1.5">{label}</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">$</span>
                <input
                  type="number"
                  value={savings[key]}
                  onChange={(e) => updateSavings(key, e.target.value)}
                  className={inputClass}
                  placeholder="0"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Results */}
      {results && (
        <>
          {/* Health Status Banner */}
          <div className={`rounded-2xl p-6 border ${
            results.healthStatus === 'green'
              ? 'bg-emerald-500/5 border-emerald-500/20'
              : results.healthStatus === 'amber'
              ? 'bg-amber-500/5 border-amber-500/20'
              : 'bg-rose-500/5 border-rose-500/20'
          }`}>
            <div className="flex items-center gap-4 mb-3">
              <div className={`w-4 h-4 rounded-full ${
                results.healthStatus === 'green'
                  ? 'bg-emerald-400'
                  : results.healthStatus === 'amber'
                  ? 'bg-amber-400'
                  : 'bg-rose-400'
              }`} />
              <h3 className={`text-xl font-bold heading-font ${
                results.healthStatus === 'green'
                  ? 'text-emerald-400'
                  : results.healthStatus === 'amber'
                  ? 'text-amber-400'
                  : 'text-rose-400'
              }`}>
                Budget Health: {results.healthLabel}
              </h3>
            </div>
            <p className="text-slate-300 text-sm">{results.healthMessage}</p>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="glass rounded-xl p-4 text-center">
              <p className="text-xs text-slate-400 mb-1">Monthly Income</p>
              <p className="text-xl font-bold text-white">{formatCurrency(results.monthlyIncome)}</p>
            </div>
            <div className="glass rounded-xl p-4 text-center">
              <p className="text-xs text-slate-400 mb-1">Total Outgoings</p>
              <p className="text-xl font-bold text-slate-300">{formatCurrency(results.totalOutgoings)}</p>
            </div>
            <div className="glass rounded-xl p-4 text-center">
              <p className="text-xs text-slate-400 mb-1">Tax Reserve</p>
              <p className="text-xl font-bold text-amber-400">{formatCurrency(results.monthlyTaxReserve)}</p>
            </div>
            <div className="glass rounded-xl p-4 text-center">
              <p className="text-xs text-slate-400 mb-1">{results.surplus >= 0 ? 'Surplus' : 'Deficit'}</p>
              <p className={`text-xl font-bold ${results.surplus >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                {results.surplus >= 0 ? '+' : ''}{formatCurrency(results.surplus)}
              </p>
            </div>
          </div>

          {/* Income Allocation Bar */}
          <div className="glass rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white heading-font mb-4">Income Allocation</h3>
            <div className="h-8 bg-white/5 rounded-full overflow-hidden flex">
              <div
                className="bg-gradient-to-r from-blue-500 to-blue-600 h-full flex items-center justify-center"
                style={{ width: `${Math.min(results.essentialsPercent, 100)}%` }}
              >
                {results.essentialsPercent >= 10 && (
                  <span className="text-xs font-medium text-white whitespace-nowrap">{results.essentialsPercent.toFixed(0)}%</span>
                )}
              </div>
              <div
                className="bg-gradient-to-r from-violet-500 to-violet-600 h-full flex items-center justify-center"
                style={{ width: `${Math.min(results.wantsPercent, 100)}%` }}
              >
                {results.wantsPercent >= 8 && (
                  <span className="text-xs font-medium text-white whitespace-nowrap">{results.wantsPercent.toFixed(0)}%</span>
                )}
              </div>
              <div
                className="bg-gradient-to-r from-teal-500 to-teal-600 h-full flex items-center justify-center"
                style={{ width: `${Math.min(results.savingsPercent, 100)}%` }}
              >
                {results.savingsPercent >= 6 && (
                  <span className="text-xs font-medium text-white whitespace-nowrap">{results.savingsPercent.toFixed(0)}%</span>
                )}
              </div>
              <div
                className="bg-gradient-to-r from-amber-500 to-amber-600 h-full flex items-center justify-center"
                style={{ width: `${Math.min(results.taxPercent, 100)}%` }}
              >
                {results.taxPercent >= 8 && (
                  <span className="text-xs font-medium text-white whitespace-nowrap">{results.taxPercent.toFixed(0)}%</span>
                )}
              </div>
            </div>
            <div className="flex flex-wrap gap-4 mt-3 text-xs">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-sm bg-blue-500" />
                <span className="text-slate-400">Essentials + Business {results.essentialsPercent.toFixed(1)}%</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-sm bg-violet-500" />
                <span className="text-slate-400">Wants {results.wantsPercent.toFixed(1)}%</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-sm bg-teal-500" />
                <span className="text-slate-400">Savings {results.savingsPercent.toFixed(1)}%</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-sm bg-amber-500" />
                <span className="text-slate-400">Tax Reserve {results.taxPercent.toFixed(1)}%</span>
              </div>
            </div>
          </div>

          {/* Monthly Budget Breakdown */}
          <div className="glass rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white heading-font mb-4">Monthly Budget Breakdown</h3>
            <div className="space-y-2">
              {/* Fixed */}
              <div className="flex justify-between py-2 border-b border-white/5">
                <span className="text-slate-300 font-medium">Fixed Expenses</span>
                <span className="text-white font-medium">{formatCurrency(results.fixedTotal)}</span>
              </div>
              {Object.entries(fixed).filter(([, v]) => parseFloat(v) > 0).map(([key, value]) => {
                const labels: Record<string, string> = {
                  rent: 'Rent / Mortgage', insurance: 'Insurance', utilities: 'Utilities',
                  internet: 'Internet', subscriptions: 'Subscriptions', transport: 'Car / Transport',
                  loanRepayments: 'Loan Repayments', otherFixed: 'Other Fixed',
                };
                return (
                  <div key={key} className="flex justify-between py-1.5 pl-4">
                    <span className="text-slate-500 text-sm">{labels[key]}</span>
                    <span className="text-slate-400 text-sm">{formatCurrency(parseFloat(value))}</span>
                  </div>
                );
              })}

              {/* Variable */}
              <div className="flex justify-between py-2 border-b border-white/5 mt-2">
                <span className="text-slate-300 font-medium">Variable Expenses</span>
                <span className="text-white font-medium">{formatCurrency(results.variableTotal)}</span>
              </div>
              {Object.entries(variable).filter(([, v]) => parseFloat(v) > 0).map(([key, value]) => {
                const labels: Record<string, string> = {
                  groceries: 'Groceries', diningOut: 'Dining Out', entertainment: 'Entertainment',
                  clothing: 'Clothing', healthFitness: 'Health / Fitness', otherVariable: 'Other Variable',
                };
                return (
                  <div key={key} className="flex justify-between py-1.5 pl-4">
                    <span className="text-slate-500 text-sm">{labels[key]}</span>
                    <span className="text-slate-400 text-sm">{formatCurrency(parseFloat(value))}</span>
                  </div>
                );
              })}

              {/* Business */}
              <div className="flex justify-between py-2 border-b border-white/5 mt-2">
                <span className="text-slate-300 font-medium">Business Expenses</span>
                <span className="text-white font-medium">{formatCurrency(results.businessTotal)}</span>
              </div>
              {Object.entries(business).filter(([, v]) => parseFloat(v) > 0).map(([key, value]) => {
                const labels: Record<string, string> = {
                  software: 'Software / Tools', marketing: 'Marketing',
                  professionalDev: 'Professional Development', coworking: 'Coworking / Office',
                  accounting: 'Accounting / Legal',
                };
                return (
                  <div key={key} className="flex justify-between py-1.5 pl-4">
                    <span className="text-slate-500 text-sm">{labels[key]}</span>
                    <span className="text-slate-400 text-sm">{formatCurrency(parseFloat(value))}</span>
                  </div>
                );
              })}

              {/* Tax */}
              <div className="flex justify-between py-2 border-b border-white/5 mt-2">
                <span className="text-slate-300 font-medium">Tax + Medicare Reserve</span>
                <span className="text-amber-400 font-medium">{formatCurrency(results.monthlyTaxReserve)}</span>
              </div>
              <div className="flex justify-between py-1.5 pl-4">
                <span className="text-slate-500 text-sm">Income tax ({results.taxInfo.effectiveRate.toFixed(1)}% effective)</span>
                <span className="text-slate-400 text-sm">{formatCurrency(results.taxInfo.tax / 12)}</span>
              </div>
              <div className="flex justify-between py-1.5 pl-4">
                <span className="text-slate-500 text-sm">Medicare levy (2%)</span>
                <span className="text-slate-400 text-sm">{formatCurrency(results.taxInfo.medicare / 12)}</span>
              </div>

              {/* Savings */}
              <div className="flex justify-between py-2 border-b border-white/5 mt-2">
                <span className="text-slate-300 font-medium">Savings Contributions</span>
                <span className="text-teal-400 font-medium">{formatCurrency(results.monthlySavings)}</span>
              </div>

              {/* Total */}
              <div className="flex justify-between py-3 border-t border-teal-500/20 mt-4">
                <span className="text-white font-bold">Total Outgoings</span>
                <span className="text-white font-bold text-lg">{formatCurrency(results.totalOutgoings)}</span>
              </div>
              <div className="flex justify-between py-2">
                <span className={`font-bold ${results.surplus >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {results.surplus >= 0 ? 'Monthly Surplus' : 'Monthly Deficit'}
                </span>
                <span className={`font-bold text-lg ${results.surplus >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {results.surplus >= 0 ? '+' : ''}{formatCurrency(results.surplus)}
                </span>
              </div>
            </div>
          </div>

          {/* Tax Reserve Detail */}
          <div className="glass rounded-2xl p-6 border border-amber-500/20 bg-amber-500/5">
            <h3 className="text-lg font-bold text-white heading-font mb-4">Tax Reserve Calculator (2024-25)</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="text-center">
                <p className="text-xs text-slate-400 mb-1">Annual Income Tax</p>
                <p className="text-2xl font-bold text-amber-400">{formatCurrency(results.taxInfo.tax)}</p>
                <p className="text-xs text-slate-500">{formatCurrency(results.taxInfo.tax / 12)}/mo</p>
              </div>
              <div className="text-center">
                <p className="text-xs text-slate-400 mb-1">Medicare Levy</p>
                <p className="text-2xl font-bold text-amber-400">{formatCurrency(results.taxInfo.medicare)}</p>
                <p className="text-xs text-slate-500">{formatCurrency(results.taxInfo.medicare / 12)}/mo</p>
              </div>
              <div className="text-center">
                <p className="text-xs text-slate-400 mb-1">Total Tax Obligation</p>
                <p className="text-2xl font-bold text-white">{formatCurrency(results.taxInfo.total)}/yr</p>
              </div>
              <div className="text-center">
                <p className="text-xs text-slate-400 mb-1">Effective Tax Rate</p>
                <p className="text-2xl font-bold text-white">{results.taxInfo.effectiveRate.toFixed(1)}%</p>
              </div>
            </div>
            <p className="text-xs text-slate-500 mt-4">
              Based on ATO 2024-25 tax brackets. Set aside {formatCurrency(results.monthlyTaxReserve)} each month into a separate high-interest savings account for tax time.
            </p>
          </div>

          {/* Emergency Fund & Minimum Viable Month */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="glass rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white heading-font mb-4">Emergency Fund</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-slate-400 mb-1">Recommended Amount</p>
                  <p className="text-2xl font-bold text-teal-400">{formatCurrency(results.recommendedEmergency)}</p>
                  <p className="text-xs text-slate-500">{results.variabilityMultiplier} months of essentials + business costs</p>
                </div>
                <div>
                  <p className="text-xs text-slate-400 mb-1">Your Target</p>
                  <p className="text-xl font-bold text-white">{formatCurrency(results.emergencyTarget)}</p>
                </div>
                {results.monthsToEmergency !== Infinity && results.monthsToEmergency > 0 && (
                  <div>
                    <p className="text-xs text-slate-400 mb-1">Time to Reach Target</p>
                    <p className="text-xl font-bold text-blue-400">
                      {results.monthsToEmergency} month{results.monthsToEmergency !== 1 ? 's' : ''}
                    </p>
                    <p className="text-xs text-slate-500">
                      Saving full surplus of {formatCurrency(results.surplus)}/mo
                    </p>
                  </div>
                )}
                {results.monthsToEmergency === Infinity && (
                  <div className="bg-rose-500/10 rounded-xl p-3">
                    <p className="text-xs text-rose-400">
                      You are currently in deficit and cannot save toward your emergency fund. Reduce expenses first.
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className="glass rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white heading-font mb-4">Minimum Viable Month</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-slate-400 mb-1">Absolute Minimum Income Needed</p>
                  <p className="text-2xl font-bold text-rose-400">{formatCurrency(results.minimumViableMonth)}</p>
                  <p className="text-xs text-slate-500">Essentials + business + tax reserve only</p>
                </div>
                <div className="bg-white/5 rounded-xl p-3">
                  <p className="text-xs text-slate-400">
                    This is the bare minimum you need to invoice each month to cover your non-negotiable costs
                    and tax obligations. No lifestyle spending, no savings — just survival mode.
                  </p>
                </div>
                <div>
                  <p className="text-xs text-slate-400 mb-1">Buffer vs Current Income</p>
                  <p className={`text-lg font-bold ${
                    results.monthlyIncome > results.minimumViableMonth * 1.3
                      ? 'text-emerald-400'
                      : results.monthlyIncome > results.minimumViableMonth
                      ? 'text-amber-400'
                      : 'text-rose-400'
                  }`}>
                    {results.monthlyIncome > results.minimumViableMonth
                      ? `+${formatCurrency(results.monthlyIncome - results.minimumViableMonth)} above minimum`
                      : `${formatCurrency(results.minimumViableMonth - results.monthlyIncome)} below minimum`}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Surplus/Deficit Advice */}
          <div className={`glass rounded-2xl p-6 border ${
            results.surplus >= 0 ? 'border-emerald-500/20' : 'border-rose-500/20'
          }`}>
            <h3 className="text-lg font-bold text-white heading-font mb-3">
              {results.surplus >= 0 ? 'What to Do With Your Surplus' : 'Fixing Your Deficit'}
            </h3>
            <p className="text-slate-300 text-sm">{results.surplusAdvice}</p>
            {results.surplus > 0 && (
              <div className="grid sm:grid-cols-3 gap-3 mt-4">
                <div className="bg-white/5 rounded-xl p-3 text-center">
                  <p className="text-xs text-slate-400">Emergency Fund First</p>
                  <p className="text-lg font-bold text-emerald-400">{formatCurrency(results.surplus * 0.6)}</p>
                  <p className="text-xs text-slate-500">60% of surplus</p>
                </div>
                <div className="bg-white/5 rounded-xl p-3 text-center">
                  <p className="text-xs text-slate-400">Extra Super</p>
                  <p className="text-lg font-bold text-teal-400">{formatCurrency(results.surplus * 0.25)}</p>
                  <p className="text-xs text-slate-500">25% of surplus</p>
                </div>
                <div className="bg-white/5 rounded-xl p-3 text-center">
                  <p className="text-xs text-slate-400">Business Growth</p>
                  <p className="text-lg font-bold text-blue-400">{formatCurrency(results.surplus * 0.15)}</p>
                  <p className="text-xs text-slate-500">15% of surplus</p>
                </div>
              </div>
            )}
          </div>

          {/* Copy Button */}
          <div className="flex justify-center">
            <button
              onClick={handleCopy}
              className="px-6 py-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-500/30 transition-all text-white font-medium"
            >
              {copied ? 'Copied!' : 'Copy Budget Summary to Clipboard'}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
