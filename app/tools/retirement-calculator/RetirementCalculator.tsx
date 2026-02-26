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

const RETIREMENT_AGE_OPTIONS = [
  { value: 60, label: '60' },
  { value: 65, label: '65' },
  { value: 67, label: '67 (Age Pension eligible)' },
  { value: 70, label: '70' },
];

const RISK_PROFILES = [
  { value: 'conservative', label: 'Conservative', returnRate: 5.0, description: 'Cash, bonds, defensive assets' },
  { value: 'balanced', label: 'Balanced', returnRate: 7.0, description: 'Mix of growth and defensive' },
  { value: 'growth', label: 'Growth', returnRate: 8.5, description: 'Mostly shares and property' },
  { value: 'high-growth', label: 'High Growth', returnRate: 9.5, description: 'Aggressive share-heavy portfolio' },
];

const CONTRIBUTION_MODE_OPTIONS = [
  { value: 'percentage', label: '% of income' },
  { value: 'dollar', label: '$ amount per year' },
];

// Australian tax brackets 2024-25 (resident)
const TAX_BRACKETS = [
  { min: 0, max: 18200, rate: 0 },
  { min: 18201, max: 45000, rate: 0.19 },
  { min: 45001, max: 120000, rate: 0.325 },
  { min: 120001, max: 180000, rate: 0.37 },
  { min: 180001, max: Infinity, rate: 0.45 },
];

function calculateMarginalRate(income: number): number {
  for (let i = TAX_BRACKETS.length - 1; i >= 0; i--) {
    if (income >= TAX_BRACKETS[i].min) {
      return TAX_BRACKETS[i].rate;
    }
  }
  return 0;
}

function calculateIncomeTax(income: number): number {
  let tax = 0;
  for (const bracket of TAX_BRACKETS) {
    if (income <= bracket.min) break;
    const taxableInBracket = Math.min(income, bracket.max) - bracket.min + (bracket.min === 0 ? 0 : 1);
    if (taxableInBracket > 0) {
      tax += taxableInBracket * bracket.rate;
    }
  }
  return tax;
}

const CONCESSIONAL_CAP = 30000;
const SUPER_TAX_RATE = 0.15;
const AGE_PENSION_AGE = 67;
const AGE_PENSION_ANNUAL = 28514; // Approximate max single rate 2024-25

export default function RetirementCalculator() {
  const [currentAge, setCurrentAge] = useState('35');
  const [retirementAge, setRetirementAge] = useState(67);
  const [currentSuper, setCurrentSuper] = useState('80000');
  const [annualIncome, setAnnualIncome] = useState('120000');
  const [contributionMode, setContributionMode] = useState('percentage');
  const [contributionPct, setContributionPct] = useState('10');
  const [contributionDollar, setContributionDollar] = useState('12000');
  const [riskProfile, setRiskProfile] = useState('balanced');
  const [desiredRetirementIncome, setDesiredRetirementIncome] = useState('50000');
  const [copied, setCopied] = useState(false);

  const selectedRisk = RISK_PROFILES.find((r) => r.value === riskProfile) || RISK_PROFILES[1];
  const annualReturn = selectedRisk.returnRate / 100;

  const results = useMemo(() => {
    const age = parseInt(currentAge) || 0;
    const retAge = retirementAge;
    const superBalance = parseFloat(currentSuper) || 0;
    const income = parseFloat(annualIncome) || 0;
    const desiredIncome = parseFloat(desiredRetirementIncome) || 50000;

    if (age <= 0 || age >= retAge || income <= 0) return null;

    const yearsToRetirement = retAge - age;

    // Current contribution amount
    let annualContribution: number;
    if (contributionMode === 'percentage') {
      const pct = parseFloat(contributionPct) || 0;
      annualContribution = income * (pct / 100);
    } else {
      annualContribution = parseFloat(contributionDollar) || 0;
    }

    // Super guarantee rate (11.5% for 2024-25, rising to 12% by 2025-26)
    const superGuaranteeRate = 0.115;
    const superGuaranteeAmount = income * superGuaranteeRate;

    // Year-by-year projection with current contributions
    const yearlyProjection: Array<{
      year: number;
      age: number;
      openingBalance: number;
      contribution: number;
      growth: number;
      closingBalance: number;
    }> = [];

    let balance = superBalance;
    for (let y = 0; y < yearsToRetirement; y++) {
      const openingBalance = balance;
      const contribution = annualContribution;
      const growth = (openingBalance + contribution) * annualReturn;
      balance = openingBalance + contribution + growth;
      yearlyProjection.push({
        year: y + 1,
        age: age + y + 1,
        openingBalance,
        contribution,
        growth,
        closingBalance: balance,
      });
    }

    const projectedBalance = balance;

    // How long will retirement savings last?
    // Assume drawdown with continued investment returns (reduced rate in retirement — 2% less)
    const retirementReturnRate = Math.max(0.03, annualReturn - 0.02);
    let drawdownBalance = projectedBalance;
    let drawdownYears = 0;
    const maxDrawdownYears = 50; // Safety cap
    while (drawdownBalance > 0 && drawdownYears < maxDrawdownYears) {
      const yearGrowth = drawdownBalance * retirementReturnRate;
      drawdownBalance = drawdownBalance + yearGrowth - desiredIncome;
      if (drawdownBalance > 0) {
        drawdownYears++;
      } else {
        // Partial year
        const prevBalance = drawdownBalance - yearGrowth + desiredIncome;
        const partialYear = prevBalance > 0 ? prevBalance / (desiredIncome - prevBalance * retirementReturnRate) : 0;
        drawdownYears += Math.min(1, Math.max(0, partialYear));
        break;
      }
    }
    const fundRunsOut = drawdownYears >= maxDrawdownYears ? false : true;
    const fundsLastUntilAge = retAge + drawdownYears;

    // Tax savings from concessional contributions
    const marginalRate = calculateMarginalRate(income);
    const concessionalContribution = Math.min(annualContribution, CONCESSIONAL_CAP);
    const taxSavingPerYear = concessionalContribution * (marginalRate - SUPER_TAX_RATE);
    const totalTaxSaving = taxSavingPerYear * yearsToRetirement;

    // Tax on income without contribution vs with contribution
    const taxWithout = calculateIncomeTax(income);
    const taxWithContribution = calculateIncomeTax(income - concessionalContribution);
    const actualTaxReduction = taxWithout - taxWithContribution - (concessionalContribution * SUPER_TAX_RATE);

    // Gap analysis: how much more needed to reach desired retirement income for 25 years
    const targetRetirementYears = 25;
    // Target balance = PV of annuity: desiredIncome * [(1 - (1+r)^-n) / r]
    const r = retirementReturnRate;
    const targetBalance = desiredIncome * ((1 - Math.pow(1 + r, -targetRetirementYears)) / r);

    // What annual contribution is needed to reach target balance?
    // FV of existing super + FV of annuity of contributions = target
    // superBalance * (1+g)^n + C * [((1+g)^n - 1) / g] = targetBalance
    const growthFactor = Math.pow(1 + annualReturn, yearsToRetirement);
    const existingSuperFV = superBalance * growthFactor;
    const annuityFactor = annualReturn > 0 ? (growthFactor - 1) / annualReturn : yearsToRetirement;
    const neededFromContributions = targetBalance - existingSuperFV;
    const requiredAnnualContribution = annuityFactor > 0 ? Math.max(0, neededFromContributions / annuityFactor) : 0;
    const requiredMonthlyContribution = requiredAnnualContribution / 12;

    const gap = requiredAnnualContribution - annualContribution;
    const monthlyGap = gap / 12;

    // Recommended trajectory projection
    const recommendedProjection: Array<{
      year: number;
      age: number;
      closingBalance: number;
    }> = [];
    let recBalance = superBalance;
    for (let y = 0; y < yearsToRetirement; y++) {
      const contribution = requiredAnnualContribution;
      const growth = (recBalance + contribution) * annualReturn;
      recBalance = recBalance + contribution + growth;
      recommendedProjection.push({
        year: y + 1,
        age: age + y + 1,
        closingBalance: recBalance,
      });
    }

    // Age Pension note
    const agePensionEligible = retAge >= AGE_PENSION_AGE;
    const agePensionNote = agePensionEligible
      ? `At age ${AGE_PENSION_AGE}, you may be eligible for the Age Pension (up to ${formatCurrency(AGE_PENSION_ANNUAL)}/year for singles). This is means-tested — your super balance and other assets will affect eligibility.`
      : `You're planning to retire before the Age Pension eligibility age of ${AGE_PENSION_AGE}. You'll need to fully self-fund until you reach ${AGE_PENSION_AGE}.`;

    return {
      yearsToRetirement,
      annualContribution,
      projectedBalance,
      targetBalance,
      superGuaranteeRate,
      superGuaranteeAmount,
      yearlyProjection,
      recommendedProjection,
      drawdownYears: Math.floor(drawdownYears),
      fundRunsOut,
      fundsLastUntilAge: Math.floor(fundsLastUntilAge),
      marginalRate,
      concessionalContribution,
      taxSavingPerYear,
      totalTaxSaving,
      actualTaxReduction,
      requiredAnnualContribution,
      requiredMonthlyContribution,
      gap,
      monthlyGap,
      agePensionEligible,
      agePensionNote,
      targetRetirementYears,
    };
  }, [currentAge, retirementAge, currentSuper, annualIncome, contributionMode, contributionPct, contributionDollar, riskProfile, desiredRetirementIncome, annualReturn]);

  const handleCopy = useCallback(() => {
    if (!results) return;
    const income = parseFloat(annualIncome) || 0;
    const text = [
      'FREELANCE RETIREMENT PLAN',
      '=========================',
      '',
      'INPUTS:',
      `  Current Age: ${currentAge}`,
      `  Target Retirement Age: ${retirementAge}`,
      `  Current Super Balance: ${formatCurrency(parseFloat(currentSuper) || 0)}`,
      `  Annual Income: ${formatCurrency(income)}`,
      `  Current Contribution: ${formatCurrency(results.annualContribution)}/year`,
      `  Risk Profile: ${selectedRisk.label} (${selectedRisk.returnRate}% assumed return)`,
      `  Desired Retirement Income: ${formatCurrency(parseFloat(desiredRetirementIncome) || 50000)}/year`,
      '',
      'PROJECTIONS:',
      `  Years to Retirement: ${results.yearsToRetirement}`,
      `  Projected Super at Retirement: ${formatCurrency(results.projectedBalance)}`,
      `  Target Balance (${results.targetRetirementYears} years of income): ${formatCurrency(results.targetBalance)}`,
      `  ${results.gap > 0 ? 'SHORTFALL' : 'SURPLUS'}: ${formatCurrency(Math.abs(results.gap))}/year (${formatCurrency(Math.abs(results.monthlyGap))}/month)`,
      `  Funds Last Until Age: ${results.fundRunsOut ? results.fundsLastUntilAge : '90+'}`,
      '',
      'TAX SAVINGS:',
      `  Marginal Tax Rate: ${(results.marginalRate * 100).toFixed(0)}%`,
      `  Concessional Contribution: ${formatCurrency(results.concessionalContribution)}/year`,
      `  Annual Tax Saving: ${formatCurrency(results.taxSavingPerYear)}`,
      `  Total Tax Saving to Retirement: ${formatCurrency(results.totalTaxSaving)}`,
      '',
      'RECOMMENDATION:',
      `  Required Annual Contribution: ${formatCurrency(results.requiredAnnualContribution)}`,
      `  Required Monthly Contribution: ${formatCurrency(results.requiredMonthlyContribution)}`,
      '',
      'NOTE: Super guarantee (11.5%) is NOT automatic for freelancers.',
      `  An employee earning ${formatCurrency(income)} would receive ${formatCurrency(results.superGuaranteeAmount)}/year from their employer.`,
      '  As a freelancer, you must contribute this yourself.',
      '',
      'Generated by InvoiceFlow — invoiceflow.au/tools/retirement-calculator',
    ].join('\n');
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [results, currentAge, retirementAge, currentSuper, annualIncome, desiredRetirementIncome, selectedRisk]);

  // For the projection chart, we show a simplified bar chart
  const maxProjectionBalance = useMemo(() => {
    if (!results) return 0;
    const currentMax = results.yearlyProjection.length > 0
      ? results.yearlyProjection[results.yearlyProjection.length - 1].closingBalance
      : 0;
    const recMax = results.recommendedProjection.length > 0
      ? results.recommendedProjection[results.recommendedProjection.length - 1].closingBalance
      : 0;
    return Math.max(currentMax, recMax);
  }, [results]);

  return (
    <div className="space-y-8">
      {/* Input Section */}
      <div className="glass rounded-2xl p-6 sm:p-8 space-y-6">
        <h2 className="text-xl font-bold text-white heading-font">Your Retirement Details</h2>
        <p className="text-sm text-slate-400">
          Enter your details below. All calculations happen in your browser — nothing is sent to a server.
          Figures are based on Australian tax rates and super rules for 2024-25.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm text-slate-400 mb-2">Current age</label>
            <input
              type="number"
              value={currentAge}
              onChange={(e) => setCurrentAge(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-emerald-500 focus:outline-none transition-colors"
              min="18"
              max="75"
              placeholder="35"
            />
          </div>
          <div>
            <label className="block text-sm text-slate-400 mb-2">Target retirement age</label>
            <select
              value={retirementAge}
              onChange={(e) => setRetirementAge(parseInt(e.target.value))}
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-emerald-500 focus:outline-none transition-colors"
            >
              {RETIREMENT_AGE_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value} className="bg-slate-800">
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm text-slate-400 mb-2">Current super balance ($)</label>
            <input
              type="number"
              value={currentSuper}
              onChange={(e) => setCurrentSuper(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-emerald-500 focus:outline-none transition-colors"
              min="0"
              placeholder="80000"
            />
          </div>
          <div>
            <label className="block text-sm text-slate-400 mb-2">Current annual income ($)</label>
            <input
              type="number"
              value={annualIncome}
              onChange={(e) => setAnnualIncome(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-emerald-500 focus:outline-none transition-colors"
              min="0"
              placeholder="120000"
            />
            <p className="text-xs text-slate-500 mt-1">Your gross freelance income before tax and expenses</p>
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm text-slate-400 mb-2">Current voluntary super contribution</label>
            <div className="flex gap-3">
              <select
                value={contributionMode}
                onChange={(e) => setContributionMode(e.target.value)}
                className="px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-emerald-500 focus:outline-none transition-colors shrink-0"
              >
                {CONTRIBUTION_MODE_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value} className="bg-slate-800">
                    {opt.label}
                  </option>
                ))}
              </select>
              {contributionMode === 'percentage' ? (
                <input
                  type="number"
                  value={contributionPct}
                  onChange={(e) => setContributionPct(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-emerald-500 focus:outline-none transition-colors"
                  min="0"
                  max="100"
                  step="0.5"
                  placeholder="10"
                />
              ) : (
                <input
                  type="number"
                  value={contributionDollar}
                  onChange={(e) => setContributionDollar(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-emerald-500 focus:outline-none transition-colors"
                  min="0"
                  placeholder="12000"
                />
              )}
            </div>
            <p className="text-xs text-slate-500 mt-1">
              How much you&apos;re currently putting into super each year. Remember: as a freelancer, this is entirely voluntary.
            </p>
          </div>
          <div>
            <label className="block text-sm text-slate-400 mb-2">Risk profile</label>
            <select
              value={riskProfile}
              onChange={(e) => setRiskProfile(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-emerald-500 focus:outline-none transition-colors"
            >
              {RISK_PROFILES.map((opt) => (
                <option key={opt.value} value={opt.value} className="bg-slate-800">
                  {opt.label} ({opt.returnRate}% return)
                </option>
              ))}
            </select>
            <p className="text-xs text-slate-500 mt-1">{selectedRisk.description}</p>
          </div>
          <div>
            <label className="block text-sm text-slate-400 mb-2">Desired retirement income ($/year)</label>
            <input
              type="number"
              value={desiredRetirementIncome}
              onChange={(e) => setDesiredRetirementIncome(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-emerald-500 focus:outline-none transition-colors"
              min="0"
              placeholder="50000"
            />
            <p className="text-xs text-slate-500 mt-1">How much you want to live on per year in retirement</p>
          </div>
        </div>
      </div>

      {/* Results */}
      {results && (
        <>
          {/* Projected Balance Summary */}
          <div className="glass rounded-2xl p-6 sm:p-8 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/20">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-white heading-font">Projected Super at Retirement</h2>
              <button
                onClick={handleCopy}
                className="flex items-center gap-2 text-sm px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all"
              >
                {copied ? <span className="text-emerald-400">Copied</span> : <>Copy Results</>}
              </button>
            </div>
            <div className="text-center py-6">
              <p className="text-sm text-slate-400 mb-2">
                At age {retirementAge} with current contributions
              </p>
              <p className="text-5xl sm:text-6xl font-bold text-emerald-400">
                {formatCurrency(results.projectedBalance)}
              </p>
              <p className="text-slate-400 text-lg mt-3">
                in <span className="text-white font-semibold">{results.yearsToRetirement} years</span>
                {' '}&mdash;{' '}
                contributing <span className="text-white font-semibold">{formatCurrency(results.annualContribution)}</span>/year
              </p>
              <p className="text-xs text-slate-500 mt-2">
                Assumed annual return: {selectedRisk.returnRate}% ({selectedRisk.label} profile)
              </p>
            </div>
          </div>

          {/* Gap Analysis */}
          <div className="glass rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white heading-font mb-4">Gap Analysis</h3>
            <p className="text-sm text-slate-400 mb-4">
              To fund {formatCurrency(parseFloat(desiredRetirementIncome) || 50000)}/year for {results.targetRetirementYears} years
              in retirement, you need {formatCurrency(results.targetBalance)} at age {retirementAge}.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className={`rounded-xl p-5 border-l-4 ${results.gap <= 0 ? 'border-l-emerald-500 bg-emerald-500/10' : 'border-l-rose-500 bg-rose-500/10'}`}>
                <p className="text-xs text-slate-400 uppercase tracking-wide mb-1">
                  {results.gap <= 0 ? 'Surplus' : 'Shortfall'}
                </p>
                <p className={`text-2xl font-bold ${results.gap <= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {formatCurrency(Math.abs(results.gap))}
                  <span className="text-sm font-normal text-slate-400">/year</span>
                </p>
                <p className="text-sm text-slate-400 mt-1">
                  {formatCurrency(Math.abs(results.monthlyGap))}/month
                </p>
              </div>
              <div className="rounded-xl p-5 border-l-4 border-l-teal-500 bg-teal-500/10">
                <p className="text-xs text-slate-400 uppercase tracking-wide mb-1">Required Contribution</p>
                <p className="text-2xl font-bold text-teal-400">
                  {formatCurrency(results.requiredMonthlyContribution)}
                  <span className="text-sm font-normal text-slate-400">/month</span>
                </p>
                <p className="text-sm text-slate-400 mt-1">
                  {formatCurrency(results.requiredAnnualContribution)}/year
                </p>
              </div>
              <div className={`rounded-xl p-5 border-l-4 ${results.fundRunsOut ? (results.fundsLastUntilAge >= retirementAge + 25 ? 'border-l-emerald-500 bg-emerald-500/10' : 'border-l-amber-500 bg-amber-500/10') : 'border-l-emerald-500 bg-emerald-500/10'}`}>
                <p className="text-xs text-slate-400 uppercase tracking-wide mb-1">Funds Last Until</p>
                <p className={`text-2xl font-bold ${results.fundRunsOut ? (results.fundsLastUntilAge >= retirementAge + 25 ? 'text-emerald-400' : 'text-amber-400') : 'text-emerald-400'}`}>
                  {results.fundRunsOut ? `Age ${results.fundsLastUntilAge}` : 'Age 90+'}
                </p>
                <p className="text-sm text-slate-400 mt-1">
                  {results.fundRunsOut
                    ? `${results.drawdownYears} years of retirement income`
                    : 'Your super outlasts your retirement'}
                </p>
              </div>
            </div>
            {results.gap > 0 && (
              <div className="mt-4 bg-rose-500/10 border border-rose-500/20 rounded-xl p-4">
                <p className="text-sm text-slate-300">
                  <strong className="text-rose-400">Action needed:</strong> You need to increase your
                  super contributions by <strong className="text-white">{formatCurrency(results.monthlyGap)}/month</strong> (
                  {formatCurrency(results.gap)}/year) to reach your retirement income target.
                  {results.gap + results.annualContribution <= CONCESSIONAL_CAP && (
                    <> This is still within the $30,000 concessional cap, so it would all be tax-deductible.</>
                  )}
                </p>
              </div>
            )}
            {results.gap <= 0 && (
              <div className="mt-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4">
                <p className="text-sm text-slate-300">
                  <strong className="text-emerald-400">On track:</strong> Your current contributions
                  are projected to exceed your retirement income target by {formatCurrency(Math.abs(results.gap))}/year.
                  You could maintain your current strategy or consider retiring earlier.
                </p>
              </div>
            )}
          </div>

          {/* Super Guarantee Reminder */}
          <div className="glass rounded-2xl p-6 sm:p-8 border border-amber-500/20 bg-amber-500/5">
            <h3 className="text-lg font-bold text-amber-400 heading-font mb-3">
              Freelancer Super Guarantee Reminder
            </h3>
            <div className="space-y-3 text-sm text-slate-300">
              <p>
                The super guarantee rate is <strong className="text-white">11.5%</strong> for 2024-25
                (rising to 12% from 2025-26). If you were an employee earning {formatCurrency(parseFloat(annualIncome) || 0)},
                your employer would contribute <strong className="text-white">{formatCurrency(results.superGuaranteeAmount)}/year</strong> into
                your super — automatically, on top of your salary.
              </p>
              <p>
                As a freelancer, <strong className="text-amber-400">you don&apos;t receive this automatically.</strong> You
                need to make these contributions yourself. If you&apos;re not contributing at least 11.5% of
                your income to super, you&apos;re falling behind where you&apos;d be as an employee.
              </p>
              <div className="bg-white/5 rounded-lg p-3 mt-2">
                <p className="text-xs text-slate-400">
                  Your current contribution: <span className="text-white font-semibold">{formatCurrency(results.annualContribution)}/year</span>
                  {' '}&mdash;{' '}
                  {results.annualContribution >= results.superGuaranteeAmount ? (
                    <span className="text-emerald-400">meets or exceeds the employee equivalent</span>
                  ) : (
                    <span className="text-rose-400">
                      {formatCurrency(results.superGuaranteeAmount - results.annualContribution)}/year less than an employee would receive
                    </span>
                  )}
                </p>
              </div>
            </div>
          </div>

          {/* Tax Savings */}
          <div className="glass rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white heading-font mb-4">Tax Savings from Super Contributions</h3>
            <p className="text-sm text-slate-400 mb-4">
              Concessional super contributions are taxed at 15% inside your fund — much less than your
              marginal tax rate. Here&apos;s what you save by contributing to super instead of taking the
              income personally:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-xl p-5 border-l-4 border-l-emerald-500 bg-emerald-500/10">
                <p className="text-xs text-slate-400 uppercase tracking-wide mb-1">Annual Tax Saving</p>
                <p className="text-2xl font-bold text-emerald-400">{formatCurrency(results.taxSavingPerYear)}</p>
                <p className="text-sm text-slate-400 mt-1">
                  Your marginal rate: {(results.marginalRate * 100).toFixed(0)}% vs super tax: 15%
                </p>
              </div>
              <div className="rounded-xl p-5 border-l-4 border-l-teal-500 bg-teal-500/10">
                <p className="text-xs text-slate-400 uppercase tracking-wide mb-1">Total Tax Saving to Retirement</p>
                <p className="text-2xl font-bold text-teal-400">{formatCurrency(results.totalTaxSaving)}</p>
                <p className="text-sm text-slate-400 mt-1">
                  Over {results.yearsToRetirement} years of contributions
                </p>
              </div>
            </div>
            <div className="mt-4 bg-white/5 rounded-xl p-4">
              <h4 className="text-sm font-semibold text-white mb-2">How it works</h4>
              <div className="space-y-2 text-xs text-slate-400">
                <div className="flex justify-between">
                  <span>Concessional contribution (capped at ${CONCESSIONAL_CAP.toLocaleString()}/yr)</span>
                  <span className="text-white">{formatCurrency(results.concessionalContribution)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax if taken as personal income ({(results.marginalRate * 100).toFixed(0)}%)</span>
                  <span className="text-rose-400">{formatCurrency(results.concessionalContribution * results.marginalRate)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax inside super fund (15%)</span>
                  <span className="text-amber-400">{formatCurrency(results.concessionalContribution * SUPER_TAX_RATE)}</span>
                </div>
                <div className="flex justify-between border-t border-white/10 pt-2">
                  <span className="font-semibold text-slate-300">You save</span>
                  <span className="font-semibold text-emerald-400">{formatCurrency(results.taxSavingPerYear)}/year</span>
                </div>
              </div>
            </div>
            <p className="text-xs text-slate-500 mt-3">
              Remember to lodge a &ldquo;Notice of intent to claim a deduction&rdquo; with your super fund
              before submitting your tax return to claim the deduction.
            </p>
          </div>

          {/* Timeline Projection */}
          <div className="glass rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white heading-font mb-4">
              Balance Projection: Current vs Recommended
            </h3>
            <p className="text-sm text-slate-400 mb-6">
              Your projected super balance year by year. The teal bars show your current trajectory,
              and the emerald outline shows the recommended trajectory to meet your retirement goal.
            </p>
            <div className="space-y-2">
              {results.yearlyProjection.map((yearData, idx) => {
                // Show every year for short periods, every 5th year for longer
                const showYear = results.yearsToRetirement <= 15 || idx % 5 === 0 || idx === results.yearsToRetirement - 1;
                if (!showYear) return null;

                const currentWidth = maxProjectionBalance > 0 ? (yearData.closingBalance / maxProjectionBalance) * 100 : 0;
                const recData = results.recommendedProjection[idx];
                const recWidth = recData && maxProjectionBalance > 0 ? (recData.closingBalance / maxProjectionBalance) * 100 : 0;

                return (
                  <div key={yearData.year} className="group">
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-slate-500 w-16 shrink-0 text-right">
                        Age {yearData.age}
                      </span>
                      <div className="flex-1 relative h-8">
                        {/* Recommended trajectory (background) */}
                        {results.gap > 0 && (
                          <div
                            className="absolute top-0 left-0 h-full rounded-lg border border-emerald-500/30 bg-emerald-500/5"
                            style={{ width: `${Math.max(2, recWidth)}%` }}
                          />
                        )}
                        {/* Current trajectory */}
                        <div
                          className="absolute top-0 left-0 h-full rounded-lg bg-gradient-to-r from-teal-500/60 to-emerald-500/60 flex items-center justify-end pr-2"
                          style={{ width: `${Math.max(2, currentWidth)}%` }}
                        >
                          <span className="text-xs text-white font-medium whitespace-nowrap">
                            {formatCurrency(yearData.closingBalance)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex items-center gap-6 mt-4 text-xs text-slate-500">
              <div className="flex items-center gap-2">
                <div className="w-4 h-3 rounded bg-gradient-to-r from-teal-500/60 to-emerald-500/60" />
                <span>Current trajectory</span>
              </div>
              {results.gap > 0 && (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-3 rounded border border-emerald-500/30 bg-emerald-500/5" />
                  <span>Recommended trajectory</span>
                </div>
              )}
            </div>
          </div>

          {/* Tips Section */}
          <div className="glass rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white heading-font mb-4">
              Tips for Freelancer Retirement Planning
            </h3>
            <div className="space-y-3">
              <div className="flex gap-3 bg-white/5 rounded-xl p-4">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold shrink-0 mt-0.5">1</span>
                <div>
                  <p className="text-sm text-white font-semibold">Concessional cap: $30,000/year (2024-25)</p>
                  <p className="text-sm text-slate-400">
                    You can contribute up to $30,000/year in before-tax (concessional) super contributions
                    and claim a tax deduction. This is one of the most powerful tax strategies for freelancers.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 bg-white/5 rounded-xl p-4">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold shrink-0 mt-0.5">2</span>
                <div>
                  <p className="text-sm text-white font-semibold">Carry forward unused caps</p>
                  <p className="text-sm text-slate-400">
                    If your super balance is under $500,000, you can use unused concessional cap amounts from the
                    past 5 years. Had a great year? You might be able to contribute $60,000-$90,000+ and claim
                    it all as a deduction.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 bg-white/5 rounded-xl p-4">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold shrink-0 mt-0.5">3</span>
                <div>
                  <p className="text-sm text-white font-semibold">Automate your contributions</p>
                  <p className="text-sm text-slate-400">
                    Set up a recurring BPAY or direct debit to your super fund. Treat it like a non-negotiable
                    business expense. Even a modest {formatCurrency(Math.round(results.requiredMonthlyContribution / 10) * 10)}/month
                    adds up significantly over {results.yearsToRetirement} years.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 bg-white/5 rounded-xl p-4">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold shrink-0 mt-0.5">4</span>
                <div>
                  <p className="text-sm text-white font-semibold">Review your super fund&apos;s fees and performance</p>
                  <p className="text-sm text-slate-400">
                    Fees compound just like returns. A 1% difference in fees over 30 years can reduce your
                    final balance by 20% or more. Compare your fund on the ATO&apos;s YourSuper comparison tool
                    and consider switching if fees are above average or performance is below benchmark.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 bg-white/5 rounded-xl p-4">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold shrink-0 mt-0.5">5</span>
                <div>
                  <p className="text-sm text-white font-semibold">Age Pension is a safety net, not a plan</p>
                  <p className="text-sm text-slate-400">
                    {results.agePensionEligible
                      ? `At age ${AGE_PENSION_AGE}, you may qualify for the Age Pension (up to ${formatCurrency(AGE_PENSION_ANNUAL)}/year for singles). But it\u0027s means-tested and may not cover your desired lifestyle. Build super as your primary retirement income.`
                      : `You\u0027re planning to retire before the Age Pension kicks in at ${AGE_PENSION_AGE}. You\u0027ll need to fully self-fund the gap years. Make sure your super can cover those early retirement years.`}
                  </p>
                </div>
              </div>
              <div className="flex gap-3 bg-white/5 rounded-xl p-4">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold shrink-0 mt-0.5">6</span>
                <div>
                  <p className="text-sm text-white font-semibold">Don&apos;t forget insurance inside super</p>
                  <p className="text-sm text-slate-400">
                    Most super funds offer life insurance, TPD (total and permanent disability), and income
                    protection inside your super. As a freelancer without employer-provided insurance, this
                    can be a cost-effective way to get coverage without impacting your cash flow.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="glass rounded-2xl p-6 border border-emerald-500/20 bg-emerald-500/5">
            <h3 className="text-sm font-bold text-emerald-400 mb-2">Important Disclaimer</h3>
            <p className="text-xs text-slate-400">
              This calculator provides general estimates only and does not constitute financial advice.
              Actual super returns vary year to year and are not guaranteed. Tax rates and super rules
              (including contribution caps, Age Pension eligibility, and super guarantee rates) may
              change. This calculator uses 2024-25 Australian tax rates and super rules. For personalised
              advice, consult a licensed financial adviser or registered tax agent. The calculations
              assume constant income and contribution levels — in reality, both will fluctuate over your
              career. Past performance is not indicative of future returns.
            </p>
          </div>

          {/* Copy Button */}
          <div className="flex justify-center">
            <button
              onClick={handleCopy}
              className="px-6 py-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-emerald-500/30 transition-all text-white font-medium"
            >
              {copied ? 'Copied!' : 'Copy Results to Clipboard'}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
