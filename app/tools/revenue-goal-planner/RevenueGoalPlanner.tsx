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

function formatRate(value: number): string {
  return new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

// 2025-26 ATO tax brackets
function calculateIncomeTax(taxableIncome: number): number {
  if (taxableIncome <= 18200) return 0;
  if (taxableIncome <= 45000) return (taxableIncome - 18200) * 0.19;
  if (taxableIncome <= 135000)
    return 5092 + (taxableIncome - 45000) * 0.325;
  if (taxableIncome <= 190000)
    return 34342 + (taxableIncome - 135000) * 0.37;
  return 54692 + (taxableIncome - 190000) * 0.45;
}

function calculateMedicareLevy(taxableIncome: number): number {
  if (taxableIncome <= 26000) return 0;
  if (taxableIncome <= 32500) return (taxableIncome - 26000) * 0.1;
  return taxableIncome * 0.02;
}

/**
 * Given a desired take-home amount, iteratively find the gross income needed
 * such that gross - tax(gross) - medicare(gross) = takeHome.
 * Uses Newton-like iteration for quick convergence.
 */
function findGrossForTakeHome(takeHome: number): number {
  // Start with an initial guess — take-home * 1.4 covers most brackets
  let gross = takeHome * 1.4;
  for (let i = 0; i < 50; i++) {
    const tax = calculateIncomeTax(gross);
    const medicare = calculateMedicareLevy(gross);
    const net = gross - tax - medicare;
    const diff = net - takeHome;
    if (Math.abs(diff) < 0.5) break;
    // Approximate marginal rate for adjustment
    const marginalRate =
      gross <= 18200
        ? 0
        : gross <= 45000
          ? 0.19
          : gross <= 135000
            ? 0.325
            : gross <= 190000
              ? 0.37
              : 0.45;
    const medicareRate = gross > 32500 ? 0.02 : gross > 26000 ? 0.1 : 0;
    const adjustFactor = 1 - marginalRate - medicareRate;
    gross -= diff / (adjustFactor || 0.5);
    if (gross < 0) gross = takeHome;
  }
  return gross;
}

const MONTHS = [
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
];

export default function RevenueGoalPlanner() {
  const [annualGoal, setAnnualGoal] = useState('100000');
  const [annualExpenses, setAnnualExpenses] = useState('12000');
  const [superRate, setSuperRate] = useState('11.5');
  const [weeksLeave, setWeeksLeave] = useState('4');
  const [nonBillablePct, setNonBillablePct] = useState('25');
  const [hoursPerWeek, setHoursPerWeek] = useState('38');
  const [billingRate, setBillingRate] = useState('100');
  const [copied, setCopied] = useState(false);

  const results = useMemo(() => {
    const goal = parseFloat(annualGoal) || 0;
    const expenses = parseFloat(annualExpenses) || 0;
    const superPct = (parseFloat(superRate) || 0) / 100;
    const leave = parseFloat(weeksLeave) || 0;
    const nonBillable = (parseFloat(nonBillablePct) || 0) / 100;
    const hours = parseFloat(hoursPerWeek) || 38;
    const currentRate = parseFloat(billingRate) || 0;

    // Working time calculations
    const workingWeeks = 52 - leave;
    const billableHoursPerWeek = hours * (1 - nonBillable);
    const totalBillableHours = billableHoursPerWeek * workingWeeks;

    // Step 1: Determine the pre-tax personal income needed
    // take-home goal = gross personal income - tax - medicare
    // So we need to find the gross personal income that yields take-home = goal
    const grossPersonalIncome = findGrossForTakeHome(goal);
    const incomeTax = calculateIncomeTax(grossPersonalIncome);
    const medicareLevy = calculateMedicareLevy(grossPersonalIncome);

    // Step 2: Add super contributions on top of the personal income
    const superContributions = grossPersonalIncome * superPct;

    // Step 3: Total revenue = personal income + super + expenses
    // But non-billable time is already accounted for in billable hours,
    // so we just need the total dollar amount
    const grossRevenue = grossPersonalIncome + superContributions + expenses;

    // Time-based targets
    const monthlyTarget = grossRevenue / 12;
    const weeklyTarget = grossRevenue / workingWeeks;
    const dailyTarget = weeklyTarget / 5;

    // Rate analysis
    const requiredRate = totalBillableHours > 0 ? grossRevenue / totalBillableHours : 0;
    const hoursNeededAtCurrentRate = currentRate > 0 ? grossRevenue / currentRate : Infinity;
    const rateGap = requiredRate - currentRate;
    const rateGapPct = currentRate > 0 ? (rateGap / currentRate) * 100 : 0;

    // Utilisation
    const totalAvailableHours = hours * workingWeeks;
    const utilisationRate = totalAvailableHours > 0
      ? (billableHoursPerWeek * workingWeeks) / totalAvailableHours
      : 0;

    // Waterfall breakdown
    const waterfall = [
      { label: 'Take-home goal', amount: goal, color: 'bg-teal-400' },
      { label: 'Income tax', amount: incomeTax, color: 'bg-rose-400' },
      { label: 'Medicare levy', amount: medicareLevy, color: 'bg-amber-400' },
      { label: 'Super contributions', amount: superContributions, color: 'bg-blue-400' },
      { label: 'Business expenses', amount: expenses, color: 'bg-purple-400' },
    ];
    const waterfallTotal = waterfall.reduce((sum, item) => sum + item.amount, 0);

    return {
      grossRevenue,
      grossPersonalIncome,
      incomeTax,
      medicareLevy,
      superContributions,
      expenses,
      monthlyTarget,
      weeklyTarget,
      dailyTarget,
      requiredRate,
      currentRate,
      hoursNeededAtCurrentRate,
      rateGap,
      rateGapPct,
      workingWeeks,
      billableHoursPerWeek,
      totalBillableHours,
      utilisationRate,
      waterfall,
      waterfallTotal,
      goal,
    };
  }, [annualGoal, annualExpenses, superRate, weeksLeave, nonBillablePct, hoursPerWeek, billingRate]);

  const handleCopy = () => {
    const text = [
      'Annual Revenue Goal Plan — InvoiceFlow',
      '========================================',
      '',
      `Take-Home Goal: ${formatCurrency(results.goal)}`,
      '',
      '--- Revenue Targets ---',
      `Annual Revenue Target: ${formatCurrency(results.grossRevenue)}`,
      `Monthly Target: ${formatCurrency(results.monthlyTarget)}`,
      `Weekly Target: ${formatCurrency(results.weeklyTarget)}`,
      `Daily Target: ${formatCurrency(results.dailyTarget)}`,
      '',
      '--- Rate Analysis ---',
      `Required Hourly Rate: ${formatRate(results.requiredRate)}/hr`,
      `Current Hourly Rate: ${formatRate(results.currentRate)}/hr`,
      `Rate Gap: ${results.rateGap > 0 ? '+' : ''}${formatRate(results.rateGap)}/hr (${results.rateGapPct > 0 ? '+' : ''}${results.rateGapPct.toFixed(1)}%)`,
      '',
      '--- Hours Breakdown ---',
      `Working Weeks/Year: ${results.workingWeeks}`,
      `Billable Hours/Week: ${results.billableHoursPerWeek.toFixed(1)}`,
      `Total Billable Hours/Year: ${Math.round(results.totalBillableHours)}`,
      `Hours Needed at Current Rate: ${results.hoursNeededAtCurrentRate === Infinity ? 'N/A' : Math.round(results.hoursNeededAtCurrentRate)}`,
      `Utilisation Rate: ${(results.utilisationRate * 100).toFixed(0)}%`,
      '',
      '--- Revenue Waterfall ---',
      `Take-home goal: ${formatCurrency(results.goal)}`,
      `+ Income tax: ${formatCurrency(results.incomeTax)}`,
      `+ Medicare levy: ${formatCurrency(results.medicareLevy)}`,
      `+ Super contributions: ${formatCurrency(results.superContributions)}`,
      `+ Business expenses: ${formatCurrency(results.expenses)}`,
      `= Total Revenue Needed: ${formatCurrency(results.grossRevenue)}`,
      '',
      'Generated at invoiceflow.au/tools/revenue-goal-planner',
    ].join('\n');
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const inputClass =
    'w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500/40 focus:border-teal-500/40 transition-all';
  const labelClass = 'block text-sm font-medium text-slate-300 mb-1.5';

  // Determine current month index in the financial year (Jul=0 .. Jun=11)
  const now = new Date();
  const currentCalMonth = now.getMonth(); // 0=Jan .. 11=Dec
  // Financial year: Jul(6)=0, Aug(7)=1, ..., Dec(11)=5, Jan(0)=6, ..., Jun(5)=11
  const currentFYMonth = currentCalMonth >= 6 ? currentCalMonth - 6 : currentCalMonth + 6;

  return (
    <div className="space-y-8">
      {/* Inputs */}
      <div className="glass rounded-2xl p-6 sm:p-8 space-y-6">
        <h2 className="text-xl font-bold text-white heading-font">Your Income Goal</h2>
        <p className="text-sm text-slate-400">
          Start with what you want to take home after tax, super, and expenses. We&apos;ll calculate
          how much you actually need to bill.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label className={labelClass}>Annual Take-Home Goal ($)</label>
            <input
              type="number"
              value={annualGoal}
              onChange={(e) => setAnnualGoal(e.target.value)}
              className={inputClass}
              placeholder="100000"
            />
            <p className="text-xs text-slate-500 mt-1">What you want in your pocket after everything</p>
          </div>
          <div>
            <label className={labelClass}>Annual Business Expenses ($)</label>
            <input
              type="number"
              value={annualExpenses}
              onChange={(e) => setAnnualExpenses(e.target.value)}
              className={inputClass}
              placeholder="12000"
            />
            <p className="text-xs text-slate-500 mt-1">Software, insurance, accounting, rent, etc.</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          <div>
            <label className={labelClass}>Super Contribution Rate (%)</label>
            <input
              type="number"
              value={superRate}
              onChange={(e) => setSuperRate(e.target.value)}
              className={inputClass}
              placeholder="11.5"
              step="0.5"
            />
            <p className="text-xs text-slate-500 mt-1">2025-26 rate is 11.5%</p>
          </div>
          <div>
            <label className={labelClass}>Weeks of Leave/Year</label>
            <input
              type="number"
              value={weeksLeave}
              onChange={(e) => setWeeksLeave(e.target.value)}
              className={inputClass}
              placeholder="4"
            />
            <p className="text-xs text-slate-500 mt-1">Annual + sick + public holidays</p>
          </div>
          <div>
            <label className={labelClass}>Non-Billable Time (%)</label>
            <input
              type="number"
              value={nonBillablePct}
              onChange={(e) => setNonBillablePct(e.target.value)}
              className={inputClass}
              placeholder="25"
            />
            <p className="text-xs text-slate-500 mt-1">Admin, marketing, quoting</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label className={labelClass}>Hours per Week</label>
            <input
              type="number"
              value={hoursPerWeek}
              onChange={(e) => setHoursPerWeek(e.target.value)}
              className={inputClass}
              placeholder="38"
            />
          </div>
          <div>
            <label className={labelClass}>Current/Planned Billing Rate ($/hr)</label>
            <input
              type="number"
              value={billingRate}
              onChange={(e) => setBillingRate(e.target.value)}
              className={inputClass}
              placeholder="100"
            />
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="glass rounded-2xl p-6 sm:p-8 space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-white heading-font">Your Revenue Plan</h2>
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

        {/* Key Metrics */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-gradient-to-br from-teal-500/10 to-blue-500/10 border border-teal-500/20 rounded-xl p-4 text-center">
            <p className="text-xs text-teal-400/70 uppercase tracking-wide mb-1">Annual Revenue Target</p>
            <p className="text-2xl sm:text-3xl font-bold gradient-text">{formatCurrency(results.grossRevenue)}</p>
          </div>
          <div className="bg-white/5 rounded-xl p-4 text-center">
            <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">Monthly Target</p>
            <p className="text-xl font-bold text-white">{formatCurrency(results.monthlyTarget)}</p>
          </div>
          <div className="bg-white/5 rounded-xl p-4 text-center">
            <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">Weekly Target</p>
            <p className="text-xl font-bold text-white">{formatCurrency(results.weeklyTarget)}</p>
          </div>
          <div className="bg-white/5 rounded-xl p-4 text-center">
            <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">Daily Target</p>
            <p className="text-xl font-bold text-white">{formatCurrency(results.dailyTarget)}</p>
          </div>
        </div>

        {/* Rate Analysis */}
        <div>
          <h3 className="text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wide">
            Rate Analysis
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-white/5 rounded-xl p-5">
              <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">Required Hourly Rate</p>
              <p className="text-2xl font-bold text-teal-400">
                {formatRate(results.requiredRate)}<span className="text-sm text-teal-400/60">/hr</span>
              </p>
              <p className="text-xs text-slate-500 mt-1">To hit your revenue target</p>
            </div>
            <div className={`rounded-xl p-5 ${
              results.rateGap > 0
                ? 'bg-rose-500/10 border border-rose-500/20'
                : 'bg-teal-500/10 border border-teal-500/20'
            }`}>
              <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">Current Rate</p>
              <p className="text-2xl font-bold text-white">
                {formatRate(results.currentRate)}<span className="text-sm text-slate-500">/hr</span>
              </p>
              {results.rateGap > 0 ? (
                <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                  </svg>
                  {formatRate(Math.abs(results.rateGap))}/hr below required ({Math.abs(results.rateGapPct).toFixed(0)}% gap)
                </p>
              ) : (
                <p className="text-xs text-teal-400 mt-1 flex items-center gap-1">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  {formatRate(Math.abs(results.rateGap))}/hr above required — on track
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Hours Breakdown */}
        <div>
          <h3 className="text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wide">
            Hours Breakdown
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white/5 rounded-xl p-4">
              <p className="text-xs text-slate-500 uppercase tracking-wide">Billable Hours/Week</p>
              <p className="text-lg font-bold text-white">{results.billableHoursPerWeek.toFixed(1)} hrs</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4">
              <p className="text-xs text-slate-500 uppercase tracking-wide">Billable Hours/Year</p>
              <p className="text-lg font-bold text-white">{Math.round(results.totalBillableHours)} hrs</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4">
              <p className="text-xs text-slate-500 uppercase tracking-wide">Hours at Current Rate</p>
              <p className="text-lg font-bold text-white">
                {results.hoursNeededAtCurrentRate === Infinity
                  ? 'N/A'
                  : `${Math.round(results.hoursNeededAtCurrentRate)} hrs`}
              </p>
              {results.hoursNeededAtCurrentRate !== Infinity && results.hoursNeededAtCurrentRate > results.totalBillableHours && (
                <p className="text-xs text-rose-400 mt-0.5">
                  Exceeds available hours by {Math.round(results.hoursNeededAtCurrentRate - results.totalBillableHours)}
                </p>
              )}
            </div>
            <div className="bg-white/5 rounded-xl p-4">
              <p className="text-xs text-slate-500 uppercase tracking-wide">Utilisation</p>
              <p className="text-lg font-bold text-white">{(results.utilisationRate * 100).toFixed(0)}%</p>
              <p className="text-xs text-slate-500 mt-0.5">of available hours are billable</p>
            </div>
          </div>
        </div>

        {/* Revenue Waterfall */}
        <div>
          <h3 className="text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wide">
            Revenue Waterfall
          </h3>
          <div className="space-y-3">
            {results.waterfall.map((item) => {
              const pct = results.waterfallTotal > 0 ? (item.amount / results.waterfallTotal) * 100 : 0;
              return (
                <div key={item.label}>
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${item.color} shrink-0`} />
                      <span className="text-sm text-slate-400">{item.label}</span>
                    </div>
                    <span className="text-sm font-medium text-white">{formatCurrency(item.amount)}</span>
                  </div>
                  <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${item.color} transition-all duration-500`}
                      style={{ width: `${Math.max(pct, 0.5)}%` }}
                    />
                  </div>
                </div>
              );
            })}
            <div className="flex items-center justify-between pt-2 border-t border-white/10">
              <span className="text-sm font-semibold text-white">Total Revenue Needed</span>
              <span className="text-sm font-bold gradient-text">{formatCurrency(results.grossRevenue)}</span>
            </div>
          </div>
        </div>

        {/* Monthly Progress Tracker */}
        <div>
          <h3 className="text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wide">
            Monthly Progress Tracker (FY 2025-26)
          </h3>
          <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 gap-2">
            {MONTHS.map((month, idx) => {
              const isCurrent = idx === currentFYMonth;
              const isPast = idx < currentFYMonth;
              return (
                <div
                  key={month}
                  className={`rounded-lg p-2 text-center transition-all ${
                    isCurrent
                      ? 'bg-gradient-to-br from-teal-500/20 to-blue-500/20 border border-teal-500/30 ring-1 ring-teal-400/30'
                      : isPast
                        ? 'bg-white/5 border border-white/5 opacity-50'
                        : 'bg-white/5 border border-white/10'
                  }`}
                >
                  <p className={`text-xs font-medium mb-0.5 ${isCurrent ? 'text-teal-400' : 'text-slate-500'}`}>
                    {month}
                  </p>
                  <p className={`text-xs font-semibold ${isCurrent ? 'text-white' : 'text-slate-400'}`}>
                    {formatCurrency(results.monthlyTarget).replace('$', '$')}
                  </p>
                  {isCurrent && (
                    <div className="w-1.5 h-1.5 bg-teal-400 rounded-full mx-auto mt-1" />
                  )}
                </div>
              );
            })}
          </div>
          <p className="text-xs text-slate-500 mt-2 text-center">
            Highlighted month = current month. Each cell shows your monthly billing target.
          </p>
        </div>
      </div>
    </div>
  );
}
