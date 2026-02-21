'use client';

import { useState, useMemo } from 'react';

interface RateResults {
  hourlyRate: number;
  dailyRate: number;
  weeklyRate: number;
  monthlyRevenue: number;
  annualRevenue: number;
  billableHoursPerYear: number;
  effectiveTaxRate: number;
  takeHomeHourly: number;
}

const TAX_BRACKETS_2026 = [
  { min: 0, max: 18200, rate: 0 },
  { min: 18201, max: 45000, rate: 0.16 },
  { min: 45001, max: 135000, rate: 0.30 },
  { min: 135001, max: 190000, rate: 0.37 },
  { min: 190001, max: Infinity, rate: 0.45 },
];

function calculateTax(income: number): number {
  let tax = 0;
  for (const bracket of TAX_BRACKETS_2026) {
    if (income <= bracket.min) break;
    const taxable = Math.min(income, bracket.max) - bracket.min + (bracket.min === 0 ? 0 : 1);
    if (taxable > 0) tax += taxable * bracket.rate;
  }
  return tax;
}

const MARKET_RATES: { industry: string; low: number; mid: number; high: number }[] = [
  { industry: 'Web Development', low: 80, mid: 120, high: 200 },
  { industry: 'Graphic Design', low: 50, mid: 85, high: 150 },
  { industry: 'Copywriting', low: 60, mid: 100, high: 180 },
  { industry: 'Marketing / SEO', low: 70, mid: 110, high: 190 },
  { industry: 'Photography', low: 50, mid: 90, high: 160 },
  { industry: 'Accounting / Bookkeeping', low: 55, mid: 95, high: 160 },
  { industry: 'Consulting', low: 100, mid: 180, high: 350 },
  { industry: 'Video / Motion', low: 60, mid: 100, high: 200 },
];

export default function RateCalculator() {
  const [incomeGoal, setIncomeGoal] = useState<string>('100000');
  const [expenses, setExpenses] = useState<string>('15000');
  const [vacationWeeks, setVacationWeeks] = useState<string>('4');
  const [sickDays, setSickDays] = useState<string>('10');
  const [hoursPerDay, setHoursPerDay] = useState<string>('8');
  const [nonBillablePercent, setNonBillablePercent] = useState<string>('25');
  const [superPercent, setSuperPercent] = useState<string>('11.5');

  const results = useMemo<RateResults | null>(() => {
    const income = parseFloat(incomeGoal) || 0;
    const exp = parseFloat(expenses) || 0;
    const vacation = parseFloat(vacationWeeks) || 0;
    const sick = parseFloat(sickDays) || 0;
    const hours = parseFloat(hoursPerDay) || 0;
    const nonBillable = parseFloat(nonBillablePercent) || 0;
    const superRate = parseFloat(superPercent) || 0;

    if (income <= 0 || hours <= 0) return null;

    // Calculate total needed: income + expenses + super + estimated tax
    const grossNeeded = income + exp;
    const superAmount = grossNeeded * (superRate / 100);
    const totalBeforeTax = grossNeeded + superAmount;
    const estimatedTax = calculateTax(totalBeforeTax);
    const totalRevenue = totalBeforeTax + estimatedTax;

    // Billable hours calculation
    const totalWeeks = 52;
    const workWeeks = totalWeeks - vacation;
    const workDays = workWeeks * 5 - sick;
    const totalHours = workDays * hours;
    const billableHours = totalHours * (1 - nonBillable / 100);

    if (billableHours <= 0) return null;

    const hourlyRate = totalRevenue / billableHours;
    const dailyRate = hourlyRate * hours * (1 - nonBillable / 100);
    const weeklyRate = dailyRate * 5;
    const monthlyRevenue = totalRevenue / 12;

    return {
      hourlyRate,
      dailyRate,
      weeklyRate,
      monthlyRevenue,
      annualRevenue: totalRevenue,
      billableHoursPerYear: Math.round(billableHours),
      effectiveTaxRate: (estimatedTax / totalRevenue) * 100,
      takeHomeHourly: income / billableHours,
    };
  }, [incomeGoal, expenses, vacationWeeks, sickDays, hoursPerDay, nonBillablePercent, superPercent]);

  const fmt = (n: number) =>
    n.toLocaleString('en-AU', { style: 'currency', currency: 'AUD', maximumFractionDigits: 0 });

  return (
    <div className="space-y-8">
      {/* Calculator */}
      <div className="grid lg:grid-cols-5 gap-6">
        {/* Inputs — 3 cols */}
        <div className="lg:col-span-3 glass rounded-2xl p-6 space-y-6">
          <h3 className="text-lg font-bold text-white heading-font flex items-center gap-2">
            <span className="h-8 w-8 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-sm font-bold">
              $
            </span>
            Your Goals &amp; Situation
          </h3>

          {/* Income goal */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Annual Take-Home Income Goal
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">$</span>
              <input
                type="number"
                value={incomeGoal}
                onChange={(e) => setIncomeGoal(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl pl-8 pr-4 py-3 text-white focus:border-teal-500/50 focus:outline-none focus:ring-1 focus:ring-teal-500/30 transition-colors"
                placeholder="100000"
              />
            </div>
            <p className="text-xs text-slate-500 mt-1">
              What you want to take home after tax, super, and expenses
            </p>
          </div>

          {/* Expenses */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Annual Business Expenses
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">$</span>
              <input
                type="number"
                value={expenses}
                onChange={(e) => setExpenses(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl pl-8 pr-4 py-3 text-white focus:border-teal-500/50 focus:outline-none focus:ring-1 focus:ring-teal-500/30 transition-colors"
                placeholder="15000"
              />
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Software, equipment, insurance, co-working, internet, phone, professional development
            </p>
          </div>

          {/* Super */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Superannuation Rate
            </label>
            <div className="relative">
              <input
                type="number"
                value={superPercent}
                onChange={(e) => setSuperPercent(e.target.value)}
                step="0.5"
                min="0"
                max="30"
                className="w-full bg-white/5 border border-white/10 rounded-xl pl-4 pr-8 py-3 text-white focus:border-teal-500/50 focus:outline-none focus:ring-1 focus:ring-teal-500/30 transition-colors"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">%</span>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              2025-26 rate is 11.5%. Contractors should self-contribute.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {/* Vacation weeks */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Vacation Weeks / Year
              </label>
              <input
                type="number"
                value={vacationWeeks}
                onChange={(e) => setVacationWeeks(e.target.value)}
                min="0"
                max="20"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-teal-500/50 focus:outline-none focus:ring-1 focus:ring-teal-500/30 transition-colors"
              />
            </div>

            {/* Sick/personal days */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Sick / Personal Days
              </label>
              <input
                type="number"
                value={sickDays}
                onChange={(e) => setSickDays(e.target.value)}
                min="0"
                max="60"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-teal-500/50 focus:outline-none focus:ring-1 focus:ring-teal-500/30 transition-colors"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {/* Hours per day */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Hours Worked / Day
              </label>
              <input
                type="number"
                value={hoursPerDay}
                onChange={(e) => setHoursPerDay(e.target.value)}
                min="1"
                max="16"
                step="0.5"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-teal-500/50 focus:outline-none focus:ring-1 focus:ring-teal-500/30 transition-colors"
              />
            </div>

            {/* Non-billable % */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Non-Billable Time
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={nonBillablePercent}
                  onChange={(e) => setNonBillablePercent(e.target.value)}
                  min="0"
                  max="80"
                  className="w-full bg-white/5 border border-white/10 rounded-xl pl-4 pr-8 py-3 text-white focus:border-teal-500/50 focus:outline-none focus:ring-1 focus:ring-teal-500/30 transition-colors"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">%</span>
              </div>
              <p className="text-xs text-slate-500 mt-1">Admin, marketing, quoting (25-35% typical)</p>
            </div>
          </div>
        </div>

        {/* Results — 2 cols */}
        <div className="lg:col-span-2 space-y-4">
          {results ? (
            <>
              {/* Primary result */}
              <div className="glass rounded-2xl p-6 border border-teal-500/20">
                <p className="text-sm text-slate-400 mb-1">Your minimum hourly rate</p>
                <p className="text-5xl font-bold gradient-text heading-font">
                  {fmt(results.hourlyRate)}
                </p>
                <p className="text-sm text-slate-400 mt-2">per hour (inc. tax + super + expenses)</p>
              </div>

              {/* Secondary results */}
              <div className="grid grid-cols-2 gap-4">
                <div className="glass rounded-xl p-4">
                  <p className="text-xs text-slate-400">Daily rate</p>
                  <p className="text-2xl font-bold text-white">{fmt(results.dailyRate)}</p>
                </div>
                <div className="glass rounded-xl p-4">
                  <p className="text-xs text-slate-400">Weekly rate</p>
                  <p className="text-2xl font-bold text-white">{fmt(results.weeklyRate)}</p>
                </div>
                <div className="glass rounded-xl p-4">
                  <p className="text-xs text-slate-400">Monthly revenue</p>
                  <p className="text-2xl font-bold text-white">{fmt(results.monthlyRevenue)}</p>
                </div>
                <div className="glass rounded-xl p-4">
                  <p className="text-xs text-slate-400">Annual revenue</p>
                  <p className="text-2xl font-bold text-white">{fmt(results.annualRevenue)}</p>
                </div>
              </div>

              {/* Breakdown */}
              <div className="glass rounded-2xl p-6">
                <h4 className="text-sm font-semibold text-white mb-3">Breakdown</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-slate-300">
                    <span>Billable hours / year</span>
                    <span className="text-white font-medium">
                      {results.billableHoursPerYear.toLocaleString('en-AU')}
                    </span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Estimated tax rate</span>
                    <span className="text-white font-medium">
                      {results.effectiveTaxRate.toFixed(1)}%
                    </span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Take-home per hour</span>
                    <span className="text-teal-400 font-medium">{fmt(results.takeHomeHourly)}</span>
                  </div>
                  <div className="border-t border-white/10 pt-2 mt-2 flex justify-between text-slate-300">
                    <span>Revenue needed for goal</span>
                    <span className="text-white font-medium">{fmt(results.annualRevenue)}</span>
                  </div>
                </div>
              </div>

              {/* Tip */}
              <div className="bg-teal-500/10 border border-teal-500/20 rounded-xl p-4">
                <p className="text-sm text-teal-300">
                  <strong>Pro tip:</strong> Add a 10-20% buffer to your rate for scope creep, late
                  payments, and quiet months. Charge{' '}
                  <strong className="text-white">
                    {fmt(results.hourlyRate * 1.15)}
                  </strong>{' '}
                  for safety.
                </p>
              </div>
            </>
          ) : (
            <div className="glass rounded-2xl p-8 text-center">
              <p className="text-slate-400">
                Enter your income goal and hours to see your recommended rate.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Quick presets */}
      <div className="glass rounded-2xl p-6">
        <h4 className="text-sm font-semibold text-white mb-4">Quick income goals</h4>
        <div className="flex flex-wrap gap-2">
          {[60000, 80000, 100000, 120000, 150000, 200000].map((goal) => (
            <button
              key={goal}
              onClick={() => setIncomeGoal(goal.toString())}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                incomeGoal === goal.toString()
                  ? 'bg-teal-500/20 text-teal-400 border border-teal-500/30'
                  : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10'
              }`}
            >
              {fmt(goal)}
            </button>
          ))}
        </div>
      </div>

      {/* Australian Market Rates */}
      <div className="glass rounded-2xl p-6">
        <h3 className="text-xl font-bold text-white heading-font mb-4">
          Australian Freelancer Rates by Industry (2026)
        </h3>
        <p className="text-sm text-slate-400 mb-4">
          See how your calculated rate compares to the market. Rates are hourly, AUD, ex-GST.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-3 text-white font-semibold">Industry</th>
                <th className="text-center py-3 text-white font-semibold">Entry</th>
                <th className="text-center py-3 text-white font-semibold">Mid</th>
                <th className="text-center py-3 text-white font-semibold">Senior</th>
              </tr>
            </thead>
            <tbody>
              {MARKET_RATES.map((row) => (
                <tr key={row.industry} className="border-b border-white/5">
                  <td className="py-3 text-slate-300">{row.industry}</td>
                  <td className="py-3 text-center text-slate-400">${row.low}</td>
                  <td className="py-3 text-center text-teal-400 font-medium">${row.mid}</td>
                  <td className="py-3 text-center text-white font-medium">${row.high}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {results && (
          <div className="mt-4 bg-white/5 rounded-xl p-4">
            <p className="text-sm text-slate-300">
              Your calculated rate of{' '}
              <strong className="text-teal-400">{fmt(results.hourlyRate)}/hr</strong> puts you in
              the{' '}
              <strong className="text-white">
                {results.hourlyRate < 80
                  ? 'entry level'
                  : results.hourlyRate < 130
                    ? 'mid level'
                    : results.hourlyRate < 200
                      ? 'senior level'
                      : 'premium'}
              </strong>{' '}
              range across most industries.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
