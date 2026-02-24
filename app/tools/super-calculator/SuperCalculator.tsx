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

function calculateIncomeTax(taxableIncome: number): number {
  if (taxableIncome <= 18200) return 0;
  if (taxableIncome <= 45000) return (taxableIncome - 18200) * 0.16;
  if (taxableIncome <= 135000) return 4288 + (taxableIncome - 45000) * 0.30;
  if (taxableIncome <= 190000) return 31288 + (taxableIncome - 135000) * 0.37;
  return 51638 + (taxableIncome - 190000) * 0.45;
}

function getMarginalRate(taxableIncome: number): number {
  if (taxableIncome <= 18200) return 0;
  if (taxableIncome <= 45000) return 0.16;
  if (taxableIncome <= 135000) return 0.30;
  if (taxableIncome <= 190000) return 0.37;
  return 0.45;
}

const SUPER_RATE = 0.115; // 11.5% for 2025-26
const CONCESSIONAL_CAP = 30000;
const SUPER_TAX_RATE = 0.15;

export default function SuperCalculator() {
  const [netIncome, setNetIncome] = useState('');
  const [otherEmployerSuper, setOtherEmployerSuper] = useState('');
  const [customRate, setCustomRate] = useState('11.5');
  const [age, setAge] = useState('under60');

  const income = parseFloat(netIncome) || 0;
  const employerSuper = parseFloat(otherEmployerSuper) || 0;
  const rate = parseFloat(customRate) || 11.5;

  // Calculations
  const superAtRate = income * (rate / 100);
  const superAt115 = income * SUPER_RATE;
  const totalConcessional = superAtRate + employerSuper;
  const withinCap = Math.min(superAtRate, Math.max(0, CONCESSIONAL_CAP - employerSuper));
  const excessConcessional = Math.max(0, totalConcessional - CONCESSIONAL_CAP);

  // Tax without super contribution
  const taxWithoutSuper = calculateIncomeTax(income);
  const medicareWithoutSuper = income * 0.02;
  const totalTaxWithout = taxWithoutSuper + medicareWithoutSuper;

  // Tax with super contribution (super reduces taxable income)
  const taxableAfterSuper = Math.max(0, income - withinCap);
  const taxWithSuper = calculateIncomeTax(taxableAfterSuper);
  const medicareWithSuper = taxableAfterSuper * 0.02;
  const totalTaxWith = taxWithSuper + medicareWithSuper;

  // Super fund tax (15% on concessional contributions)
  const superFundTax = withinCap * SUPER_TAX_RATE;

  // Net tax saving
  const grossTaxSaving = totalTaxWithout - totalTaxWith;
  const netTaxSaving = grossTaxSaving - superFundTax;

  // Effective cost of super (what it actually costs you after tax saving)
  const effectiveCost = withinCap - grossTaxSaving;

  // Projections
  const marginalRate = getMarginalRate(income);
  const effectiveReturnOnSuper = withinCap > 0 ? ((grossTaxSaving / withinCap) * 100) : 0;

  // Quarterly amounts
  const quarterlySuper = superAtRate / 4;
  const monthlySuper = superAtRate / 12;

  const hasResults = income > 0;

  return (
    <div className="space-y-6">
      {/* Calculator */}
      <div className="glass rounded-2xl p-6 sm:p-8">
        <h2 className="text-xl font-bold text-white heading-font mb-6">Calculate Your Super</h2>

        <div className="space-y-5">
          {/* Net freelance income */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Net freelance / sole trader income (after expenses)
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">$</span>
              <input
                type="number"
                value={netIncome}
                onChange={(e) => setNetIncome(e.target.value)}
                placeholder="e.g. 120000"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 pl-8 text-white placeholder:text-slate-500 focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/30 outline-none"
              />
            </div>
            <p className="text-xs text-slate-500 mt-1">Your annual income minus business expenses, before tax</p>
          </div>

          {/* Contribution rate */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Super contribution rate
            </label>
            <div className="flex gap-2 flex-wrap">
              {['11.5', '15', '20', '25'].map((r) => (
                <button
                  key={r}
                  onClick={() => setCustomRate(r)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    customRate === r
                      ? 'bg-teal-500/20 text-teal-400 border border-teal-500/30'
                      : 'bg-white/5 text-slate-400 border border-white/10 hover:bg-white/10'
                  }`}
                >
                  {r}%{r === '11.5' ? ' (SG rate)' : ''}
                </button>
              ))}
              <input
                type="number"
                value={customRate}
                onChange={(e) => setCustomRate(e.target.value)}
                className="w-20 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm text-center focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/30 outline-none"
                min="0"
                max="100"
                step="0.5"
              />
            </div>
            <p className="text-xs text-slate-500 mt-1">
              The SG rate is 11.5% for 2025-26. Sole traders aren&apos;t required to pay super but it&apos;s strongly recommended.
            </p>
          </div>

          {/* Employer super from other employment */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Employer super from other jobs (optional)
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">$</span>
              <input
                type="number"
                value={otherEmployerSuper}
                onChange={(e) => setOtherEmployerSuper(e.target.value)}
                placeholder="0"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 pl-8 text-white placeholder:text-slate-500 focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/30 outline-none"
              />
            </div>
            <p className="text-xs text-slate-500 mt-1">If you also work as an employee, enter the super your employer contributes</p>
          </div>

          {/* Age bracket */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Your age bracket
            </label>
            <div className="flex gap-2 flex-wrap">
              {[
                { value: 'under60', label: 'Under 60' },
                { value: '60to64', label: '60-64' },
                { value: '65plus', label: '65+' },
              ].map((option) => (
                <button
                  key={option.value}
                  onClick={() => setAge(option.value)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    age === option.value
                      ? 'bg-teal-500/20 text-teal-400 border border-teal-500/30'
                      : 'bg-white/5 text-slate-400 border border-white/10 hover:bg-white/10'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      {hasResults && (
        <>
          {/* Key figures */}
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="glass rounded-2xl p-6 text-center">
              <p className="text-sm text-slate-400 mb-1">Annual super contribution</p>
              <p className="text-3xl font-bold text-white heading-font">{formatCurrency(superAtRate)}</p>
              <p className="text-sm text-teal-400 mt-1">{formatPercent(rate)} of net income</p>
            </div>
            <div className="glass rounded-2xl p-6 text-center">
              <p className="text-sm text-slate-400 mb-1">Tax saving</p>
              <p className="text-3xl font-bold text-emerald-400 heading-font">{formatCurrency(grossTaxSaving)}</p>
              <p className="text-sm text-slate-400 mt-1">Income tax reduction</p>
            </div>
            <div className="glass rounded-2xl p-6 text-center">
              <p className="text-sm text-slate-400 mb-1">Net cost after tax benefit</p>
              <p className="text-3xl font-bold text-amber-400 heading-font">{formatCurrency(effectiveCost)}</p>
              <p className="text-sm text-slate-400 mt-1">Actual out-of-pocket</p>
            </div>
          </div>

          {/* Payment schedule */}
          <div className="glass rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white heading-font mb-4">Payment Schedule</h3>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-white/5 rounded-xl p-4">
                <p className="text-sm text-slate-400">Monthly</p>
                <p className="text-xl font-bold text-white">{formatCurrency(monthlySuper)}</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <p className="text-sm text-slate-400">Quarterly</p>
                <p className="text-xl font-bold text-white">{formatCurrency(quarterlySuper)}</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <p className="text-sm text-slate-400">Annual</p>
                <p className="text-xl font-bold text-white">{formatCurrency(superAtRate)}</p>
              </div>
            </div>
          </div>

          {/* Tax breakdown */}
          <div className="glass rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white heading-font mb-4">Tax Benefit Breakdown</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-3 text-sm border-b border-white/10 pb-2">
                <span className="text-slate-400"></span>
                <span className="text-slate-400 text-right">Without super</span>
                <span className="text-teal-400 text-right">With super</span>
              </div>
              <div className="grid grid-cols-3 text-sm">
                <span className="text-slate-300">Taxable income</span>
                <span className="text-white text-right">{formatCurrency(income)}</span>
                <span className="text-white text-right">{formatCurrency(taxableAfterSuper)}</span>
              </div>
              <div className="grid grid-cols-3 text-sm">
                <span className="text-slate-300">Income tax</span>
                <span className="text-white text-right">{formatCurrency(taxWithoutSuper)}</span>
                <span className="text-white text-right">{formatCurrency(taxWithSuper)}</span>
              </div>
              <div className="grid grid-cols-3 text-sm">
                <span className="text-slate-300">Medicare levy (2%)</span>
                <span className="text-white text-right">{formatCurrency(medicareWithoutSuper)}</span>
                <span className="text-white text-right">{formatCurrency(medicareWithSuper)}</span>
              </div>
              <div className="grid grid-cols-3 text-sm border-t border-white/10 pt-2 font-semibold">
                <span className="text-slate-300">Total tax</span>
                <span className="text-white text-right">{formatCurrency(totalTaxWithout)}</span>
                <span className="text-teal-400 text-right">{formatCurrency(totalTaxWith)}</span>
              </div>
              <div className="grid grid-cols-3 text-sm">
                <span className="text-slate-300">Super fund tax (15%)</span>
                <span className="text-slate-500 text-right">—</span>
                <span className="text-white text-right">{formatCurrency(superFundTax)}</span>
              </div>
              <div className="grid grid-cols-3 text-sm border-t border-white/10 pt-2 font-semibold">
                <span className="text-emerald-400">Net tax saving</span>
                <span className="text-slate-500 text-right">—</span>
                <span className="text-emerald-400 text-right">{formatCurrency(netTaxSaving)}</span>
              </div>
            </div>
          </div>

          {/* Visual breakdown bar */}
          <div className="glass rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white heading-font mb-4">Where Your Money Goes</h3>
            <div className="h-8 rounded-full overflow-hidden flex">
              {(() => {
                const takeHomeAmt = income - totalTaxWith - superAtRate;
                const takeHomePct = income > 0 ? (Math.max(0, takeHomeAmt) / income) * 100 : 0;
                const taxPct = income > 0 ? (totalTaxWith / income) * 100 : 0;
                const superPct = income > 0 ? (superAtRate / income) * 100 : 0;
                return (
                  <>
                    <div
                      className="bg-gradient-to-r from-teal-500 to-emerald-500 transition-all"
                      style={{ width: `${takeHomePct}%` }}
                    />
                    <div
                      className="bg-gradient-to-r from-red-500 to-rose-500 transition-all"
                      style={{ width: `${taxPct}%` }}
                    />
                    <div
                      className="bg-gradient-to-r from-blue-500 to-indigo-500 transition-all"
                      style={{ width: `${superPct}%` }}
                    />
                  </>
                );
              })()}
            </div>
            <div className="flex justify-between mt-3 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded bg-gradient-to-r from-teal-500 to-emerald-500" />
                Take-home
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded bg-gradient-to-r from-red-500 to-rose-500" />
                Tax + Medicare
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded bg-gradient-to-r from-blue-500 to-indigo-500" />
                Superannuation
              </span>
            </div>
          </div>

          {/* Cap warning */}
          {excessConcessional > 0 && (
            <div className="glass rounded-2xl p-6 border border-amber-500/30">
              <div className="flex items-start gap-3">
                <span className="text-amber-400 text-xl">!</span>
                <div>
                  <h4 className="text-white font-semibold mb-1">Concessional Cap Exceeded</h4>
                  <p className="text-sm text-slate-300">
                    Your total concessional contributions ({formatCurrency(totalConcessional)}) exceed the{' '}
                    {formatCurrency(CONCESSIONAL_CAP)} annual cap by {formatCurrency(excessConcessional)}.
                    Excess contributions are taxed at your marginal rate ({formatPercent(marginalRate * 100)})
                    instead of the 15% super fund rate. Consider reducing contributions or using the
                    carry-forward rule if you have unused cap from previous years.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Comparison at SG rate */}
          {rate !== 11.5 && (
            <div className="glass rounded-2xl p-6 sm:p-8">
              <h3 className="text-lg font-bold text-white heading-font mb-4">Comparison: Your Rate vs SG Rate</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-sm text-slate-400 mb-1">At {formatPercent(rate)} (your rate)</p>
                  <p className="text-xl font-bold text-white">{formatCurrency(superAtRate)}/year</p>
                  <p className="text-sm text-teal-400">Tax saving: {formatCurrency(grossTaxSaving)}</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-sm text-slate-400 mb-1">At 11.5% (SG rate)</p>
                  <p className="text-xl font-bold text-white">{formatCurrency(superAt115)}/year</p>
                  <p className="text-sm text-slate-400">
                    Difference: {formatCurrency(Math.abs(superAtRate - superAt115))}{' '}
                    {superAtRate > superAt115 ? 'more' : 'less'}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Key insight */}
          <div className="glass rounded-2xl p-6 border border-teal-500/20">
            <h3 className="text-lg font-bold text-white heading-font mb-2">Key Insight</h3>
            <p className="text-slate-300 text-sm">
              For every <strong className="text-white">$1</strong> you contribute to super, it only costs you{' '}
              <strong className="text-teal-400">
                {withinCap > 0 ? formatCurrency(effectiveCost / withinCap * 100).replace('$', '') : '0'}c
              </strong>{' '}
              out of pocket (at your marginal tax rate of {formatPercent(marginalRate * 100)}).
              Your super contribution earns an effective return of{' '}
              <strong className="text-emerald-400">{formatPercent(effectiveReturnOnSuper)}</strong>{' '}
              just from the tax benefit — before any investment returns.
            </p>
          </div>
        </>
      )}
    </div>
  );
}
