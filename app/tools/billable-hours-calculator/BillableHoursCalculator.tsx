'use client';

import { useState } from 'react';

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

const DEFAULT_NON_BILLABLE: { category: string; hours: string }[] = [
  { category: 'Admin & emails', hours: '5' },
  { category: 'Invoicing & bookkeeping', hours: '2' },
  { category: 'Marketing & lead gen', hours: '3' },
  { category: 'Learning & upskilling', hours: '2' },
  { category: 'Meetings (unpaid)', hours: '2' },
];

export default function BillableHoursCalculator() {
  const [weeklyHours, setWeeklyHours] = useState('40');
  const [weeksPerYear, setWeeksPerYear] = useState('48');
  const [hourlyRate, setHourlyRate] = useState('');
  const [annualTarget, setAnnualTarget] = useState('');
  const [mode, setMode] = useState<'rate' | 'target'>('rate');
  const [nonBillable, setNonBillable] = useState(DEFAULT_NON_BILLABLE);

  const totalWeeklyHours = parseFloat(weeklyHours) || 0;
  const weeks = parseFloat(weeksPerYear) || 48;
  const rate = parseFloat(hourlyRate) || 0;
  const target = parseFloat(annualTarget) || 0;

  const totalNonBillableHours = nonBillable.reduce(
    (sum, item) => sum + (parseFloat(item.hours) || 0),
    0
  );
  const billableHoursPerWeek = Math.max(0, totalWeeklyHours - totalNonBillableHours);
  const billableHoursPerYear = billableHoursPerWeek * weeks;
  const totalHoursPerYear = totalWeeklyHours * weeks;
  const utilizationRate = totalWeeklyHours > 0 ? (billableHoursPerWeek / totalWeeklyHours) * 100 : 0;

  // Rate-based calculations
  const annualRevenue = billableHoursPerYear * rate;
  const effectiveHourlyRate = totalHoursPerYear > 0 ? annualRevenue / totalHoursPerYear : 0;

  // Target-based calculations
  const requiredHourlyRate = billableHoursPerYear > 0 ? target / billableHoursPerYear : 0;
  const requiredDailyRate = requiredHourlyRate * (billableHoursPerWeek / 5);

  const hasResults = totalWeeklyHours > 0 && (mode === 'rate' ? rate > 0 : target > 0);

  const updateNonBillable = (index: number, field: 'category' | 'hours', value: string) => {
    const updated = [...nonBillable];
    updated[index] = { ...updated[index], [field]: value };
    setNonBillable(updated);
  };

  const addCategory = () => {
    setNonBillable([...nonBillable, { category: '', hours: '0' }]);
  };

  const removeCategory = (index: number) => {
    setNonBillable(nonBillable.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-6">
      {/* Calculator */}
      <div className="glass rounded-2xl p-6 sm:p-8">
        <h2 className="text-xl font-bold text-white heading-font mb-6">Calculate Your Billable Hours</h2>

        <div className="space-y-5">
          {/* Mode toggle */}
          <div className="flex gap-2">
            <button
              onClick={() => setMode('rate')}
              className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-all ${
                mode === 'rate'
                  ? 'bg-teal-500/20 text-teal-400 border border-teal-500/30'
                  : 'bg-white/5 text-slate-400 border border-white/10 hover:bg-white/10'
              }`}
            >
              I know my hourly rate
            </button>
            <button
              onClick={() => setMode('target')}
              className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-all ${
                mode === 'target'
                  ? 'bg-teal-500/20 text-teal-400 border border-teal-500/30'
                  : 'bg-white/5 text-slate-400 border border-white/10 hover:bg-white/10'
              }`}
            >
              I have an income target
            </button>
          </div>

          {/* Hours per week */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Total working hours per week
              </label>
              <input
                type="number"
                value={weeklyHours}
                onChange={(e) => setWeeklyHours(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/30 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Working weeks per year
              </label>
              <div className="flex gap-2">
                {['46', '48', '50'].map((w) => (
                  <button
                    key={w}
                    onClick={() => setWeeksPerYear(w)}
                    className={`flex-1 py-3 rounded-xl text-sm font-medium transition-all ${
                      weeksPerYear === w
                        ? 'bg-teal-500/20 text-teal-400 border border-teal-500/30'
                        : 'bg-white/5 text-slate-400 border border-white/10 hover:bg-white/10'
                    }`}
                  >
                    {w}
                  </button>
                ))}
                <input
                  type="number"
                  value={weeksPerYear}
                  onChange={(e) => setWeeksPerYear(e.target.value)}
                  className="w-16 bg-white/5 border border-white/10 rounded-xl px-2 py-3 text-white text-sm text-center focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/30 outline-none"
                />
              </div>
              <p className="text-xs text-slate-500 mt-1">52 minus holidays + sick days</p>
            </div>
          </div>

          {/* Rate or target */}
          {mode === 'rate' ? (
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Your hourly rate
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">$</span>
                <input
                  type="number"
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(e.target.value)}
                  placeholder="e.g. 120"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 pl-8 text-white placeholder:text-slate-500 focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/30 outline-none"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm">/hr</span>
              </div>
            </div>
          ) : (
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Annual income target (gross revenue)
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">$</span>
                <input
                  type="number"
                  value={annualTarget}
                  onChange={(e) => setAnnualTarget(e.target.value)}
                  placeholder="e.g. 150000"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 pl-8 text-white placeholder:text-slate-500 focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/30 outline-none"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm">/year</span>
              </div>
            </div>
          )}

          {/* Non-billable breakdown */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-3">
              Non-billable hours per week
            </label>
            <div className="space-y-2">
              {nonBillable.map((item, index) => (
                <div key={index} className="flex gap-2 items-center">
                  <input
                    type="text"
                    value={item.category}
                    onChange={(e) => updateNonBillable(index, 'category', e.target.value)}
                    placeholder="Category"
                    className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm placeholder:text-slate-500 focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/30 outline-none"
                  />
                  <div className="relative w-20">
                    <input
                      type="number"
                      value={item.hours}
                      onChange={(e) => updateNonBillable(index, 'hours', e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm text-center focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/30 outline-none"
                      min="0"
                      step="0.5"
                    />
                  </div>
                  <button
                    onClick={() => removeCategory(index)}
                    className="text-slate-500 hover:text-red-400 transition-colors px-1"
                  >
                    x
                  </button>
                </div>
              ))}
              <button
                onClick={addCategory}
                className="text-sm text-teal-400 hover:text-teal-300 transition-colors"
              >
                + Add category
              </button>
            </div>
            <div className="flex justify-between mt-3 text-sm">
              <span className="text-slate-400">Total non-billable:</span>
              <span className={`font-medium ${totalNonBillableHours > totalWeeklyHours ? 'text-red-400' : 'text-white'}`}>
                {totalNonBillableHours}h / {totalWeeklyHours}h week
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      {hasResults && (
        <>
          {/* Key metrics */}
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="glass rounded-2xl p-6 text-center">
              <p className="text-sm text-slate-400 mb-1">Billable hours / week</p>
              <p className="text-3xl font-bold text-white heading-font">{billableHoursPerWeek.toFixed(1)}h</p>
              <p className="text-sm text-slate-400 mt-1">of {totalWeeklyHours}h total</p>
            </div>
            <div className="glass rounded-2xl p-6 text-center">
              <p className="text-sm text-slate-400 mb-1">Utilization rate</p>
              <p className={`text-3xl font-bold heading-font ${
                utilizationRate >= 70 ? 'text-emerald-400' : utilizationRate >= 50 ? 'text-amber-400' : 'text-red-400'
              }`}>
                {formatPercent(utilizationRate)}
              </p>
              <p className="text-sm text-slate-400 mt-1">
                {utilizationRate >= 70 ? 'Excellent' : utilizationRate >= 50 ? 'Average' : 'Low — review your time'}
              </p>
            </div>
            <div className="glass rounded-2xl p-6 text-center">
              {mode === 'rate' ? (
                <>
                  <p className="text-sm text-slate-400 mb-1">Annual revenue</p>
                  <p className="text-3xl font-bold text-teal-400 heading-font">{formatCurrency(annualRevenue)}</p>
                  <p className="text-sm text-slate-400 mt-1">{billableHoursPerYear.toFixed(0)} billable hrs/yr</p>
                </>
              ) : (
                <>
                  <p className="text-sm text-slate-400 mb-1">Required hourly rate</p>
                  <p className="text-3xl font-bold text-teal-400 heading-font">${requiredHourlyRate.toFixed(0)}/hr</p>
                  <p className="text-sm text-slate-400 mt-1">${requiredDailyRate.toFixed(0)}/day</p>
                </>
              )}
            </div>
          </div>

          {/* Effective rate comparison */}
          {mode === 'rate' && (
            <div className="glass rounded-2xl p-6 sm:p-8">
              <h3 className="text-lg font-bold text-white heading-font mb-4">Rate Reality Check</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-slate-400 mb-1">Billed hourly rate</p>
                  <p className="text-2xl font-bold text-white">${rate}/hr</p>
                  <p className="text-xs text-slate-500 mt-1">What clients pay per billable hour</p>
                </div>
                <div>
                  <p className="text-sm text-slate-400 mb-1">Effective hourly rate</p>
                  <p className="text-2xl font-bold text-amber-400">${effectiveHourlyRate.toFixed(0)}/hr</p>
                  <p className="text-xs text-slate-500 mt-1">Revenue / total hours worked (including non-billable)</p>
                </div>
              </div>
              <div className="mt-4 bg-white/5 rounded-xl p-4">
                <p className="text-sm text-slate-300">
                  Your effective rate is <strong className="text-white">{formatPercent(utilizationRate)}</strong> of
                  your billed rate. Non-billable work costs you{' '}
                  <strong className="text-amber-400">{formatCurrency(rate - effectiveHourlyRate)}/hr</strong> in
                  opportunity cost. Every hour you can shift from non-billable to billable is worth{' '}
                  <strong className="text-teal-400">{formatCurrency(rate * weeks)}/year</strong>.
                </p>
              </div>
            </div>
          )}

          {/* Visual time breakdown */}
          <div className="glass rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white heading-font mb-4">Weekly Time Breakdown</h3>
            <div className="h-8 rounded-full overflow-hidden flex">
              <div
                className="bg-gradient-to-r from-teal-500 to-emerald-500 transition-all"
                style={{ width: `${utilizationRate}%` }}
              />
              <div
                className="bg-gradient-to-r from-slate-500 to-slate-600 transition-all"
                style={{ width: `${100 - utilizationRate}%` }}
              />
            </div>
            <div className="flex justify-between mt-3 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded bg-gradient-to-r from-teal-500 to-emerald-500" />
                Billable ({billableHoursPerWeek.toFixed(1)}h)
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded bg-gradient-to-r from-slate-500 to-slate-600" />
                Non-billable ({totalNonBillableHours}h)
              </span>
            </div>

            {/* Category breakdown */}
            <div className="mt-4 space-y-2">
              {nonBillable
                .filter((item) => parseFloat(item.hours) > 0)
                .sort((a, b) => parseFloat(b.hours) - parseFloat(a.hours))
                .map((item, index) => {
                  const hours = parseFloat(item.hours) || 0;
                  const pct = totalWeeklyHours > 0 ? (hours / totalWeeklyHours) * 100 : 0;
                  return (
                    <div key={index} className="flex items-center gap-3 text-sm">
                      <span className="text-slate-400 w-40 truncate">{item.category || 'Unnamed'}</span>
                      <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-slate-500 rounded-full"
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                      <span className="text-white w-12 text-right">{hours}h</span>
                    </div>
                  );
                })}
            </div>
          </div>

          {/* Scenarios */}
          <div className="glass rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white heading-font mb-4">What If Scenarios</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-2 text-slate-400 font-medium">Scenario</th>
                    <th className="text-right py-2 text-slate-400 font-medium">Billable hrs</th>
                    <th className="text-right py-2 text-slate-400 font-medium">Utilization</th>
                    <th className="text-right py-2 text-slate-400 font-medium">
                      {mode === 'rate' ? 'Annual revenue' : 'Required rate'}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    { label: 'Current', adjustment: 0 },
                    { label: 'Save 3h non-billable', adjustment: 3 },
                    { label: 'Save 5h non-billable', adjustment: 5 },
                    { label: 'Add 2h to week', adjustment: 0, extraHours: 2 },
                  ].map((scenario) => {
                    const adjBillable = billableHoursPerWeek + (scenario.adjustment || 0);
                    const adjTotal = totalWeeklyHours + (scenario.extraHours || 0);
                    const adjUtil = adjTotal > 0 ? (adjBillable / adjTotal) * 100 : 0;
                    const adjAnnualHrs = adjBillable * weeks;
                    const adjRevenue = adjAnnualHrs * rate;
                    const adjRate = adjAnnualHrs > 0 ? target / adjAnnualHrs : 0;
                    return (
                      <tr key={scenario.label} className={scenario.adjustment === 0 && !scenario.extraHours ? 'bg-teal-500/5' : ''}>
                        <td className="py-2 text-white">{scenario.label}</td>
                        <td className="py-2 text-right">{adjBillable.toFixed(1)}h/wk</td>
                        <td className="py-2 text-right">{formatPercent(adjUtil)}</td>
                        <td className="py-2 text-right text-teal-400">
                          {mode === 'rate' ? formatCurrency(adjRevenue) : `$${adjRate.toFixed(0)}/hr`}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Key insight */}
          <div className="glass rounded-2xl p-6 border border-teal-500/20">
            <h3 className="text-lg font-bold text-white heading-font mb-2">Key Insight</h3>
            <p className="text-slate-300 text-sm">
              {mode === 'rate' ? (
                <>
                  You&apos;re spending <strong className="text-white">{totalNonBillableHours}h per week</strong> on
                  non-billable work — that&apos;s{' '}
                  <strong className="text-amber-400">
                    {formatCurrency(totalNonBillableHours * rate * weeks)}
                  </strong>{' '}
                  per year in potential revenue. Even automating 2 hours of admin could add{' '}
                  <strong className="text-teal-400">{formatCurrency(2 * rate * weeks)}</strong> to
                  your annual revenue.
                </>
              ) : (
                <>
                  To hit your target of <strong className="text-white">{formatCurrency(target)}</strong>,
                  you need to charge at least{' '}
                  <strong className="text-teal-400">${requiredHourlyRate.toFixed(0)}/hr</strong> for
                  your {billableHoursPerYear.toFixed(0)} annual billable hours. That&apos;s{' '}
                  <strong className="text-white">${requiredDailyRate.toFixed(0)}/day</strong> —
                  make sure your project pricing reflects this.
                </>
              )}
            </p>
          </div>
        </>
      )}
    </div>
  );
}
