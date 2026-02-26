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

/* ---- Types ---- */

type IncomeVariability = 'steady' | 'moderate' | 'variable' | 'highly-variable';
type ClientCount = '1' | '2-3' | '4-5' | '6+';
type GapLength = '0-1' | '1-2' | '2-4' | '4-8' | '8+';
type Dependents = '0' | '1' | '2' | '3+';
type PartnerIncome = 'none' | 'stable' | 'freelance' | 'variable';
type HealthCosts = 'none' | 'minor' | 'significant';
type HomeOwnership = 'renting' | 'mortgage' | 'own-outright';

/* ---- Risk Calculations ---- */

function getIncomeVariabilityMultiplier(v: IncomeVariability): number {
  switch (v) {
    case 'steady': return 1.0;
    case 'moderate': return 1.2;
    case 'variable': return 1.5;
    case 'highly-variable': return 1.8;
  }
}

function getClientCountAdjustment(c: ClientCount): number {
  switch (c) {
    case '1': return 0.3;
    case '2-3': return 0.1;
    case '4-5': return 0;
    case '6+': return -0.1;
  }
}

function getDependentsAdjustment(d: Dependents): number {
  switch (d) {
    case '0': return 0;
    case '1': return 0.2;
    case '2': return 0.4;
    case '3+': return 0.6;
  }
}

function getPartnerAdjustment(p: PartnerIncome): number {
  switch (p) {
    case 'none': return 0.2;
    case 'stable': return 0;
    case 'freelance': return 0.15;
    case 'variable': return 0.1;
  }
}

function getGapAdjustment(g: GapLength): number {
  switch (g) {
    case '0-1': return 0;
    case '1-2': return 0;
    case '2-4': return 0.1;
    case '4-8': return 0.2;
    case '8+': return 0.4;
  }
}

function getHealthAdjustment(h: HealthCosts): number {
  switch (h) {
    case 'none': return 0;
    case 'minor': return 0.1;
    case 'significant': return 0.2;
  }
}

function getRiskLabel(multiplier: number): { label: string; color: string; bg: string } {
  if (multiplier <= 1.3) return { label: 'Low', color: 'text-emerald-400', bg: 'bg-emerald-500' };
  if (multiplier <= 1.7) return { label: 'Medium', color: 'text-amber-400', bg: 'bg-amber-500' };
  if (multiplier <= 2.2) return { label: 'High', color: 'text-orange-400', bg: 'bg-orange-500' };
  return { label: 'Very High', color: 'text-rose-400', bg: 'bg-rose-500' };
}

function getTips(
  variability: IncomeVariability,
  clients: ClientCount,
  dependents: Dependents,
  partner: PartnerIncome,
  gap: GapLength,
  riskLabel: string,
): string[] {
  const tips: string[] = [];

  if (riskLabel === 'Very High' || riskLabel === 'High') {
    tips.push('Prioritise building your emergency fund above all other savings goals. Even $100/week adds up to $5,200/year.');
  }

  if (clients === '1') {
    tips.push('Client concentration is your biggest risk. Actively seek a second retainer client — losing your only client means 100% income loss.');
  } else if (clients === '2-3') {
    tips.push('Diversifying to 4-5 clients would reduce your risk profile. Consider offering smaller retainer packages to attract more clients.');
  }

  if (variability === 'highly-variable' || variability === 'variable') {
    tips.push('In high-income months, save 40-50% of gross revenue. This surplus covers lean months and accelerates your emergency fund.');
  }

  if (partner === 'none') {
    tips.push('As a sole income earner, consider income protection insurance — it pays up to 75% of your income if you cannot work due to illness or injury.');
  }

  if (dependents !== '0') {
    tips.push('With dependents, ensure you have adequate life insurance and income protection. Review your coverage annually as your fund grows.');
  }

  if (gap === '4-8' || gap === '8+') {
    tips.push('Your gap history suggests seasonal or cyclical income. Plan for known slow periods by building a separate income smoothing buffer.');
  }

  tips.push('Keep your emergency fund in a high-interest savings account (not a term deposit). You need instant access in a real emergency.');

  if (riskLabel === 'Low') {
    tips.push('Your risk profile is low — great position! Once your recommended target is met, consider investing surplus savings for better returns.');
  }

  tips.push('Review your emergency fund target every 6 months. Changes in expenses, clients, or personal circumstances shift your requirements.');

  return tips.slice(0, 5);
}

/* ---- Component ---- */

export default function EmergencyFundCalculator() {
  // Monthly Expenses
  const [rent, setRent] = useState(0);
  const [utilities, setUtilities] = useState(0);
  const [insurance, setInsurance] = useState(0);
  const [transport, setTransport] = useState(0);
  const [food, setFood] = useState(0);
  const [business, setBusiness] = useState(0);
  const [loans, setLoans] = useState(0);
  const [otherExpenses, setOtherExpenses] = useState(0);

  // Income Profile
  const [monthlyIncome, setMonthlyIncome] = useState(0);
  const [incomeVariability, setIncomeVariability] = useState<IncomeVariability>('moderate');
  const [clientCount, setClientCount] = useState<ClientCount>('2-3');
  const [longestGap, setLongestGap] = useState<GapLength>('1-2');

  // Personal Factors
  const [dependents, setDependents] = useState<Dependents>('0');
  const [partnerIncome, setPartnerIncome] = useState<PartnerIncome>('none');
  const [healthCosts, setHealthCosts] = useState<HealthCosts>('none');
  const [homeOwnership, setHomeOwnership] = useState<HomeOwnership>('renting');

  // Optional
  const [currentSavings, setCurrentSavings] = useState(0);
  const [monthlySavingsCapacity, setMonthlySavingsCapacity] = useState(0);

  // UI
  const [calculated, setCalculated] = useState(false);

  const totalMonthlyExpenses = useMemo(
    () => rent + utilities + insurance + transport + food + business + loans + otherExpenses,
    [rent, utilities, insurance, transport, food, business, loans, otherExpenses],
  );

  const results = useMemo(() => {
    if (totalMonthlyExpenses <= 0) return null;

    // Calculate risk multiplier
    const baseMultiplier = getIncomeVariabilityMultiplier(incomeVariability);
    const clientAdj = getClientCountAdjustment(clientCount);
    const dependentAdj = getDependentsAdjustment(dependents);
    const partnerAdj = getPartnerAdjustment(partnerIncome);
    const gapAdj = getGapAdjustment(longestGap);
    const healthAdj = getHealthAdjustment(healthCosts);

    const totalMultiplier = baseMultiplier + clientAdj + dependentAdj + partnerAdj + gapAdj + healthAdj;

    // Three-tier targets
    const minimumMonths = 3 * totalMultiplier;
    const recommendedMonths = 6 * totalMultiplier;
    const idealMonths = Math.max(9, 9 * totalMultiplier);

    const minimum = totalMonthlyExpenses * minimumMonths;
    const recommended = totalMonthlyExpenses * recommendedMonths;
    const ideal = totalMonthlyExpenses * idealMonths;

    // Progress (if current savings provided)
    const progressPercent = currentSavings > 0 ? Math.min(100, (currentSavings / recommended) * 100) : 0;
    const minimumPercent = currentSavings > 0 ? Math.min(100, (currentSavings / minimum) * 100) : 0;
    const idealPercent = currentSavings > 0 ? Math.min(100, (currentSavings / ideal) * 100) : 0;

    // Timeline calculations (if savings capacity provided)
    const toMinimum = currentSavings >= minimum ? 0 : minimum - currentSavings;
    const toRecommended = currentSavings >= recommended ? 0 : recommended - currentSavings;
    const toIdeal = currentSavings >= ideal ? 0 : ideal - currentSavings;

    const monthsToMinimum = monthlySavingsCapacity > 0 ? Math.ceil(toMinimum / monthlySavingsCapacity) : null;
    const monthsToRecommended = monthlySavingsCapacity > 0 ? Math.ceil(toRecommended / monthlySavingsCapacity) : null;
    const monthsToIdeal = monthlySavingsCapacity > 0 ? Math.ceil(toIdeal / monthlySavingsCapacity) : null;

    // Monthly needed to reach each tier in 12 months
    const monthlyForMinimum = toMinimum > 0 ? Math.ceil(toMinimum / 12) : 0;
    const monthlyForRecommended = toRecommended > 0 ? Math.ceil(toRecommended / 12) : 0;
    const monthlyForIdeal = toIdeal > 0 ? Math.ceil(toIdeal / 12) : 0;

    // Risk profile
    const risk = getRiskLabel(totalMultiplier);

    // Runway (current savings / monthly expenses)
    const currentRunwayMonths = totalMonthlyExpenses > 0 && currentSavings > 0
      ? currentSavings / totalMonthlyExpenses
      : 0;

    // Tips
    const tips = getTips(incomeVariability, clientCount, dependents, partnerIncome, longestGap, risk.label);

    return {
      totalMultiplier,
      minimumMonths: Math.round(minimumMonths * 10) / 10,
      recommendedMonths: Math.round(recommendedMonths * 10) / 10,
      idealMonths: Math.round(idealMonths * 10) / 10,
      minimum,
      recommended,
      ideal,
      progressPercent,
      minimumPercent,
      idealPercent,
      monthsToMinimum,
      monthsToRecommended,
      monthsToIdeal,
      monthlyForMinimum,
      monthlyForRecommended,
      monthlyForIdeal,
      risk,
      currentRunwayMonths: Math.round(currentRunwayMonths * 10) / 10,
      tips,
    };
  }, [
    totalMonthlyExpenses, incomeVariability, clientCount, dependents, partnerIncome,
    longestGap, healthCosts, currentSavings, monthlySavingsCapacity,
  ]);

  const handleCalculate = () => setCalculated(true);

  const inputClass =
    'w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/25 transition-all text-sm';
  const labelClass = 'block text-sm font-medium text-slate-300 mb-1.5';
  const selectOptionClass = 'bg-slate-800';

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const _homeOwnership = homeOwnership; // used for future expansion

  return (
    <div className="space-y-8">
      {/* Monthly Expenses */}
      <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
        <h3 className="text-lg font-bold text-white heading-font mb-6">Monthly Expenses</h3>
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className={labelClass}>Rent / Mortgage ($)</label>
            <input
              type="number"
              value={rent || ''}
              onChange={(e) => setRent(Math.max(0, parseFloat(e.target.value) || 0))}
              className={inputClass}
              min="0"
              step="50"
              placeholder="e.g. 2000"
            />
          </div>
          <div>
            <label className={labelClass}>Utilities (electricity, gas, water, internet) ($)</label>
            <input
              type="number"
              value={utilities || ''}
              onChange={(e) => setUtilities(Math.max(0, parseFloat(e.target.value) || 0))}
              className={inputClass}
              min="0"
              step="10"
              placeholder="e.g. 350"
            />
          </div>
          <div>
            <label className={labelClass}>Insurance (health, income protection, PI) ($)</label>
            <input
              type="number"
              value={insurance || ''}
              onChange={(e) => setInsurance(Math.max(0, parseFloat(e.target.value) || 0))}
              className={inputClass}
              min="0"
              step="10"
              placeholder="e.g. 400"
            />
          </div>
          <div>
            <label className={labelClass}>Transport ($)</label>
            <input
              type="number"
              value={transport || ''}
              onChange={(e) => setTransport(Math.max(0, parseFloat(e.target.value) || 0))}
              className={inputClass}
              min="0"
              step="10"
              placeholder="e.g. 300"
            />
          </div>
          <div>
            <label className={labelClass}>Food & Groceries ($)</label>
            <input
              type="number"
              value={food || ''}
              onChange={(e) => setFood(Math.max(0, parseFloat(e.target.value) || 0))}
              className={inputClass}
              min="0"
              step="10"
              placeholder="e.g. 600"
            />
          </div>
          <div>
            <label className={labelClass}>Business Expenses (software, tools, subs) ($)</label>
            <input
              type="number"
              value={business || ''}
              onChange={(e) => setBusiness(Math.max(0, parseFloat(e.target.value) || 0))}
              className={inputClass}
              min="0"
              step="10"
              placeholder="e.g. 200"
            />
          </div>
          <div>
            <label className={labelClass}>Loan / Credit Repayments ($)</label>
            <input
              type="number"
              value={loans || ''}
              onChange={(e) => setLoans(Math.max(0, parseFloat(e.target.value) || 0))}
              className={inputClass}
              min="0"
              step="50"
              placeholder="e.g. 500"
            />
          </div>
          <div>
            <label className={labelClass}>Other Essential Expenses ($)</label>
            <input
              type="number"
              value={otherExpenses || ''}
              onChange={(e) => setOtherExpenses(Math.max(0, parseFloat(e.target.value) || 0))}
              className={inputClass}
              min="0"
              step="10"
              placeholder="e.g. 150"
            />
          </div>
        </div>

        {/* Auto-calculated total */}
        <div className="mt-6 flex items-center justify-between py-4 px-5 rounded-xl bg-gradient-to-r from-emerald-500/10 to-green-500/10 border border-emerald-500/20">
          <span className="text-emerald-300 font-medium">Total Monthly Expenses</span>
          <span className="text-white font-bold text-xl font-mono">
            {formatCurrency(totalMonthlyExpenses)}
          </span>
        </div>
      </div>

      {/* Income Profile */}
      <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
        <h3 className="text-lg font-bold text-white heading-font mb-6">Income Profile</h3>
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className={labelClass}>Average Monthly Income ($)</label>
            <input
              type="number"
              value={monthlyIncome || ''}
              onChange={(e) => setMonthlyIncome(Math.max(0, parseFloat(e.target.value) || 0))}
              className={inputClass}
              min="0"
              step="500"
              placeholder="e.g. 8000"
            />
          </div>
          <div>
            <label className={labelClass}>Income Variability</label>
            <select
              value={incomeVariability}
              onChange={(e) => setIncomeVariability(e.target.value as IncomeVariability)}
              className={inputClass}
            >
              <option value="steady" className={selectOptionClass}>Steady (retainer clients)</option>
              <option value="moderate" className={selectOptionClass}>Moderate (mix of project + retainer)</option>
              <option value="variable" className={selectOptionClass}>Variable (mostly project-based)</option>
              <option value="highly-variable" className={selectOptionClass}>Highly variable (feast or famine)</option>
            </select>
          </div>
          <div>
            <label className={labelClass}>Number of Regular Clients</label>
            <select
              value={clientCount}
              onChange={(e) => setClientCount(e.target.value as ClientCount)}
              className={inputClass}
            >
              <option value="1" className={selectOptionClass}>1 client</option>
              <option value="2-3" className={selectOptionClass}>2-3 clients</option>
              <option value="4-5" className={selectOptionClass}>4-5 clients</option>
              <option value="6+" className={selectOptionClass}>6+ clients</option>
            </select>
          </div>
          <div>
            <label className={labelClass}>Longest Gap Between Projects (last 12 months)</label>
            <select
              value={longestGap}
              onChange={(e) => setLongestGap(e.target.value as GapLength)}
              className={inputClass}
            >
              <option value="0-1" className={selectOptionClass}>0-1 weeks</option>
              <option value="1-2" className={selectOptionClass}>1-2 weeks</option>
              <option value="2-4" className={selectOptionClass}>2-4 weeks</option>
              <option value="4-8" className={selectOptionClass}>4-8 weeks</option>
              <option value="8+" className={selectOptionClass}>8+ weeks</option>
            </select>
          </div>
        </div>
      </div>

      {/* Personal Factors */}
      <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
        <h3 className="text-lg font-bold text-white heading-font mb-6">Personal Factors</h3>
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className={labelClass}>Dependents</label>
            <select
              value={dependents}
              onChange={(e) => setDependents(e.target.value as Dependents)}
              className={inputClass}
            >
              <option value="0" className={selectOptionClass}>0 — No dependents</option>
              <option value="1" className={selectOptionClass}>1 dependent</option>
              <option value="2" className={selectOptionClass}>2 dependents</option>
              <option value="3+" className={selectOptionClass}>3+ dependents</option>
            </select>
          </div>
          <div>
            <label className={labelClass}>Partner Income</label>
            <select
              value={partnerIncome}
              onChange={(e) => setPartnerIncome(e.target.value as PartnerIncome)}
              className={inputClass}
            >
              <option value="none" className={selectOptionClass}>No partner</option>
              <option value="stable" className={selectOptionClass}>Partner has stable income</option>
              <option value="freelance" className={selectOptionClass}>Partner is also freelance</option>
              <option value="variable" className={selectOptionClass}>Partner income is variable</option>
            </select>
          </div>
          <div>
            <label className={labelClass}>Health Considerations</label>
            <select
              value={healthCosts}
              onChange={(e) => setHealthCosts(e.target.value as HealthCosts)}
              className={inputClass}
            >
              <option value="none" className={selectOptionClass}>No ongoing health issues</option>
              <option value="minor" className={selectOptionClass}>Minor ongoing costs</option>
              <option value="significant" className={selectOptionClass}>Significant health expenses</option>
            </select>
          </div>
          <div>
            <label className={labelClass}>Home Ownership</label>
            <select
              value={homeOwnership}
              onChange={(e) => setHomeOwnership(e.target.value as HomeOwnership)}
              className={inputClass}
            >
              <option value="renting" className={selectOptionClass}>Renting</option>
              <option value="mortgage" className={selectOptionClass}>Own with mortgage</option>
              <option value="own-outright" className={selectOptionClass}>Own outright</option>
            </select>
          </div>
        </div>
      </div>

      {/* Optional: Current Savings & Capacity */}
      <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-6">
          <h3 className="text-lg font-bold text-white heading-font">Current Savings (Optional)</h3>
          <span className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-slate-400 font-medium">Optional</span>
        </div>
        <p className="text-sm text-slate-400 mb-5">
          Enter your existing savings and monthly savings capacity to see personalised timelines and progress tracking.
        </p>
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className={labelClass}>Current Emergency Savings ($)</label>
            <input
              type="number"
              value={currentSavings || ''}
              onChange={(e) => setCurrentSavings(Math.max(0, parseFloat(e.target.value) || 0))}
              className={inputClass}
              min="0"
              step="500"
              placeholder="e.g. 15000"
            />
          </div>
          <div>
            <label className={labelClass}>Monthly Savings Capacity ($)</label>
            <input
              type="number"
              value={monthlySavingsCapacity || ''}
              onChange={(e) => setMonthlySavingsCapacity(Math.max(0, parseFloat(e.target.value) || 0))}
              className={inputClass}
              min="0"
              step="100"
              placeholder="e.g. 1500"
            />
          </div>
        </div>
      </div>

      {/* Calculate Button */}
      <div className="flex justify-center">
        <button
          onClick={handleCalculate}
          disabled={totalMonthlyExpenses <= 0}
          className="bg-gradient-to-r from-emerald-500 to-green-500 text-white font-semibold rounded-xl px-8 py-4 hover:from-emerald-400 hover:to-green-400 transition-all text-lg disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Calculate Emergency Fund
        </button>
      </div>

      {/* Results Dashboard */}
      {calculated && results && (
        <>
          {/* Risk Profile Badge */}
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-white heading-font">Your Risk Profile</h3>
              <span className={`text-sm px-4 py-1.5 rounded-full font-semibold ${results.risk.color} ${results.risk.bg}/15 border ${results.risk.bg}/30`}
                style={{
                  backgroundColor: `color-mix(in srgb, currentColor 10%, transparent)`,
                  borderColor: `color-mix(in srgb, currentColor 25%, transparent)`,
                }}
              >
                {results.risk.label} Risk
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
              <div className="bg-white/5 rounded-xl p-4 text-center">
                <p className="text-xs text-slate-400 mb-1">Risk Multiplier</p>
                <p className={`text-2xl font-bold font-mono ${results.risk.color}`}>
                  {results.totalMultiplier.toFixed(1)}x
                </p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 text-center">
                <p className="text-xs text-slate-400 mb-1">Monthly Expenses</p>
                <p className="text-2xl font-bold font-mono text-white">
                  {formatCurrency(totalMonthlyExpenses)}
                </p>
              </div>
              {currentSavings > 0 && (
                <div className="bg-white/5 rounded-xl p-4 text-center">
                  <p className="text-xs text-slate-400 mb-1">Current Runway</p>
                  <p className="text-2xl font-bold font-mono text-teal-400">
                    {results.currentRunwayMonths} mo
                  </p>
                </div>
              )}
              {monthlyIncome > 0 && (
                <div className="bg-white/5 rounded-xl p-4 text-center">
                  <p className="text-xs text-slate-400 mb-1">Expense Ratio</p>
                  <p className="text-2xl font-bold font-mono text-white">
                    {Math.round((totalMonthlyExpenses / monthlyIncome) * 100)}%
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Three-Tier Targets */}
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white heading-font mb-6">Your Emergency Fund Targets</h3>

            <div className="space-y-6">
              {/* Minimum */}
              <div className="relative">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <span className="text-sm font-medium text-amber-400">Minimum</span>
                    <span className="text-xs text-slate-500 ml-2">({results.minimumMonths} months of expenses)</span>
                  </div>
                  <span className="text-white font-bold font-mono text-lg">{formatCurrency(results.minimum)}</span>
                </div>
                <div className="h-3 bg-white/5 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-amber-500 to-amber-400 rounded-full transition-all duration-1000"
                    style={{ width: `${currentSavings > 0 ? Math.min(100, results.minimumPercent) : 0}%` }}
                  />
                </div>
                {currentSavings > 0 && (
                  <p className="text-xs text-slate-500 mt-1">
                    {results.minimumPercent >= 100
                      ? 'Target reached!'
                      : `${Math.round(results.minimumPercent)}% achieved — ${formatCurrency(results.minimum - currentSavings)} to go`}
                  </p>
                )}
              </div>

              {/* Recommended */}
              <div className="relative">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <span className="text-sm font-medium text-emerald-400">Recommended</span>
                    <span className="text-xs text-slate-500 ml-2">({results.recommendedMonths} months of expenses)</span>
                  </div>
                  <span className="text-white font-bold font-mono text-lg">{formatCurrency(results.recommended)}</span>
                </div>
                <div className="h-3 bg-white/5 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-emerald-500 to-green-400 rounded-full transition-all duration-1000"
                    style={{ width: `${currentSavings > 0 ? Math.min(100, results.progressPercent) : 0}%` }}
                  />
                </div>
                {currentSavings > 0 && (
                  <p className="text-xs text-slate-500 mt-1">
                    {results.progressPercent >= 100
                      ? 'Target reached!'
                      : `${Math.round(results.progressPercent)}% achieved — ${formatCurrency(results.recommended - currentSavings)} to go`}
                  </p>
                )}
              </div>

              {/* Ideal */}
              <div className="relative">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <span className="text-sm font-medium text-blue-400">Ideal</span>
                    <span className="text-xs text-slate-500 ml-2">({results.idealMonths} months of expenses)</span>
                  </div>
                  <span className="text-white font-bold font-mono text-lg">{formatCurrency(results.ideal)}</span>
                </div>
                <div className="h-3 bg-white/5 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all duration-1000"
                    style={{ width: `${currentSavings > 0 ? Math.min(100, results.idealPercent) : 0}%` }}
                  />
                </div>
                {currentSavings > 0 && (
                  <p className="text-xs text-slate-500 mt-1">
                    {results.idealPercent >= 100
                      ? 'Target reached!'
                      : `${Math.round(results.idealPercent)}% achieved — ${formatCurrency(results.ideal - currentSavings)} to go`}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Timeline & Monthly Savings Needed */}
          {(monthlySavingsCapacity > 0 || currentSavings > 0) && (
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
              <h3 className="text-lg font-bold text-white heading-font mb-6">
                {monthlySavingsCapacity > 0 ? 'Timeline to Targets' : 'Monthly Savings Needed'}
              </h3>

              <div className="grid sm:grid-cols-3 gap-4">
                {/* Minimum */}
                <div className="bg-gradient-to-br from-amber-500/5 to-amber-500/10 border border-amber-500/20 rounded-xl p-5">
                  <p className="text-xs text-amber-400 font-medium mb-3 uppercase tracking-wide">Minimum</p>
                  {monthlySavingsCapacity > 0 && results.monthsToMinimum !== null && (
                    <div className="mb-3">
                      <p className="text-3xl font-bold text-white font-mono">
                        {results.monthsToMinimum === 0 ? (
                          <span className="text-emerald-400">Done</span>
                        ) : (
                          <>
                            {results.monthsToMinimum}
                            <span className="text-sm text-slate-400 font-normal ml-1">
                              {results.monthsToMinimum === 1 ? 'month' : 'months'}
                            </span>
                          </>
                        )}
                      </p>
                    </div>
                  )}
                  {results.monthlyForMinimum > 0 && (
                    <p className="text-xs text-slate-400">
                      Or save <span className="text-white font-medium">{formatCurrency(results.monthlyForMinimum)}/mo</span> to reach in 12 months
                    </p>
                  )}
                </div>

                {/* Recommended */}
                <div className="bg-gradient-to-br from-emerald-500/5 to-emerald-500/10 border border-emerald-500/20 rounded-xl p-5">
                  <p className="text-xs text-emerald-400 font-medium mb-3 uppercase tracking-wide">Recommended</p>
                  {monthlySavingsCapacity > 0 && results.monthsToRecommended !== null && (
                    <div className="mb-3">
                      <p className="text-3xl font-bold text-white font-mono">
                        {results.monthsToRecommended === 0 ? (
                          <span className="text-emerald-400">Done</span>
                        ) : (
                          <>
                            {results.monthsToRecommended}
                            <span className="text-sm text-slate-400 font-normal ml-1">
                              {results.monthsToRecommended === 1 ? 'month' : 'months'}
                            </span>
                          </>
                        )}
                      </p>
                    </div>
                  )}
                  {results.monthlyForRecommended > 0 && (
                    <p className="text-xs text-slate-400">
                      Or save <span className="text-white font-medium">{formatCurrency(results.monthlyForRecommended)}/mo</span> to reach in 12 months
                    </p>
                  )}
                </div>

                {/* Ideal */}
                <div className="bg-gradient-to-br from-blue-500/5 to-blue-500/10 border border-blue-500/20 rounded-xl p-5">
                  <p className="text-xs text-blue-400 font-medium mb-3 uppercase tracking-wide">Ideal</p>
                  {monthlySavingsCapacity > 0 && results.monthsToIdeal !== null && (
                    <div className="mb-3">
                      <p className="text-3xl font-bold text-white font-mono">
                        {results.monthsToIdeal === 0 ? (
                          <span className="text-emerald-400">Done</span>
                        ) : (
                          <>
                            {results.monthsToIdeal}
                            <span className="text-sm text-slate-400 font-normal ml-1">
                              {results.monthsToIdeal === 1 ? 'month' : 'months'}
                            </span>
                          </>
                        )}
                      </p>
                    </div>
                  )}
                  {results.monthlyForIdeal > 0 && (
                    <p className="text-xs text-slate-400">
                      Or save <span className="text-white font-medium">{formatCurrency(results.monthlyForIdeal)}/mo</span> to reach in 12 months
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Personalised Tips */}
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white heading-font mb-6">Personalised Recommendations</h3>
            <div className="space-y-3">
              {results.tips.map((tip, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                  <p className="text-sm text-slate-300">{tip}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Risk Breakdown */}
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white heading-font mb-6">Risk Factor Breakdown</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between py-2 border-b border-white/5">
                <span className="text-sm text-slate-400">Income Variability</span>
                <span className="text-sm text-white font-mono">{getIncomeVariabilityMultiplier(incomeVariability).toFixed(1)}x base</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-white/5">
                <span className="text-sm text-slate-400">Client Concentration</span>
                <span className="text-sm text-white font-mono">{getClientCountAdjustment(clientCount) >= 0 ? '+' : ''}{getClientCountAdjustment(clientCount).toFixed(1)}x</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-white/5">
                <span className="text-sm text-slate-400">Dependents</span>
                <span className="text-sm text-white font-mono">+{getDependentsAdjustment(dependents).toFixed(1)}x</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-white/5">
                <span className="text-sm text-slate-400">Partner Situation</span>
                <span className="text-sm text-white font-mono">+{getPartnerAdjustment(partnerIncome).toFixed(1)}x</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-white/5">
                <span className="text-sm text-slate-400">Project Gaps</span>
                <span className="text-sm text-white font-mono">+{getGapAdjustment(longestGap).toFixed(1)}x</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-white/5">
                <span className="text-sm text-slate-400">Health Costs</span>
                <span className="text-sm text-white font-mono">+{getHealthAdjustment(healthCosts).toFixed(1)}x</span>
              </div>
              <div className="flex items-center justify-between py-3 mt-2 bg-white/5 rounded-xl px-4">
                <span className="text-sm text-white font-semibold">Total Risk Multiplier</span>
                <span className={`text-lg font-bold font-mono ${results.risk.color}`}>
                  {results.totalMultiplier.toFixed(2)}x
                </span>
              </div>
            </div>
          </div>

          {/* Related Tools */}
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white heading-font mb-4">Related Tools</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              <a
                href="/tools/cashflow-forecast"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-emerald-500/30 rounded-xl p-4 transition-all group"
              >
                <p className="text-white font-medium text-sm group-hover:text-emerald-400 transition-colors">
                  Cashflow Forecast
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Project your income and expenses to plan saving
                </p>
              </a>
              <a
                href="/tools/budget-planner"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-emerald-500/30 rounded-xl p-4 transition-all group"
              >
                <p className="text-white font-medium text-sm group-hover:text-emerald-400 transition-colors">
                  Budget Planner
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Allocate income across expenses, tax, and savings
                </p>
              </a>
              <a
                href="/tools/revenue-goal-planner"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-emerald-500/30 rounded-xl p-4 transition-all group"
              >
                <p className="text-white font-medium text-sm group-hover:text-emerald-400 transition-colors">
                  Revenue Goal Planner
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Set income targets that fund your emergency savings
                </p>
              </a>
              <a
                href="/tools/profit-loss-statement"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-emerald-500/30 rounded-xl p-4 transition-all group"
              >
                <p className="text-white font-medium text-sm group-hover:text-emerald-400 transition-colors">
                  Profit & Loss Statement
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Track actual income vs expenses to find savings capacity
                </p>
              </a>
            </div>
          </div>

          <div className="text-center">
            <p className="text-xs text-slate-500 max-w-2xl mx-auto">
              This calculator provides general financial guidance for Australian freelancers and sole traders.
              It is not personal financial advice. Consider consulting a licensed financial adviser for
              advice specific to your situation. Emergency fund targets are based on risk-adjusted multiples
              of your monthly essential expenses.
            </p>
          </div>
        </>
      )}
    </div>
  );
}
