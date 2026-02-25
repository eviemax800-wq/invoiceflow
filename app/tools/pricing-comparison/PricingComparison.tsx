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

const projectPresets = [
  { label: 'Simple website', hours: 30, rate: 120, fixedPrice: 4500, scopeCreep: 20, description: 'Landing page or brochure site' },
  { label: 'Web application', hours: 80, rate: 150, fixedPrice: 15000, scopeCreep: 35, description: 'Custom web app with auth & DB' },
  { label: 'Brand identity', hours: 25, rate: 130, fixedPrice: 4000, scopeCreep: 15, description: 'Logo, colours, typography, guidelines' },
  { label: 'Marketing campaign', hours: 40, rate: 110, fixedPrice: 5500, scopeCreep: 25, description: 'Strategy, creative, and execution' },
  { label: 'Consulting engagement', hours: 20, rate: 200, fixedPrice: 5000, scopeCreep: 10, description: 'Advisory, strategy, or audit' },
];

export default function PricingComparison() {
  const [estimatedHours, setEstimatedHours] = useState('40');
  const [hourlyRate, setHourlyRate] = useState('120');
  const [fixedPrice, setFixedPrice] = useState('5500');
  const [scopeCreep, setScopeCreep] = useState('25');
  const [revisionRounds, setRevisionRounds] = useState('2');
  const [hoursPerRevision, setHoursPerRevision] = useState('3');
  const [adminOverhead, setAdminOverhead] = useState('10');
  const [copied, setCopied] = useState(false);

  const applyPreset = useCallback((preset: typeof projectPresets[0]) => {
    setEstimatedHours(String(preset.hours));
    setHourlyRate(String(preset.rate));
    setFixedPrice(String(preset.fixedPrice));
    setScopeCreep(String(preset.scopeCreep));
  }, []);

  const results = useMemo(() => {
    const hours = parseFloat(estimatedHours) || 0;
    const rate = parseFloat(hourlyRate) || 0;
    const fixed = parseFloat(fixedPrice) || 0;
    const creep = parseFloat(scopeCreep) || 0;
    const revisions = parseFloat(revisionRounds) || 0;
    const revHours = parseFloat(hoursPerRevision) || 0;
    const admin = parseFloat(adminOverhead) || 0;

    if (hours <= 0 || rate <= 0 || fixed <= 0) return null;

    // Hourly model
    const hourlyBase = hours * rate;
    const revisionHoursTotal = revisions * revHours;
    const adminHours = hours * (admin / 100);
    const scopeCreepHours = hours * (creep / 100);
    const hourlyBestCase = hourlyBase;
    const hourlyRealistic = (hours + revisionHoursTotal + adminHours) * rate;
    const hourlyWorstCase = (hours + revisionHoursTotal + adminHours + scopeCreepHours) * rate;
    const hourlyTotalHoursBest = hours;
    const hourlyTotalHoursRealistic = hours + revisionHoursTotal + adminHours;
    const hourlyTotalHoursWorst = hours + revisionHoursTotal + adminHours + scopeCreepHours;

    // Fixed model
    const fixedBestCase = fixed;
    const fixedRealistic = fixed;
    const fixedWorstCase = fixed;
    const fixedEffectiveRateBest = fixed / hours;
    const fixedEffectiveRateRealistic = fixed / (hours + revisionHoursTotal + adminHours);
    const fixedEffectiveRateWorst = fixed / (hours + revisionHoursTotal + adminHours + scopeCreepHours);

    // Break-even: how many hours until fixed = hourly
    const breakEvenHours = fixed / rate;

    // Recommendation
    const hourlyAvg = (hourlyBestCase + hourlyRealistic + hourlyWorstCase) / 3;
    const fixedAvg = fixed;
    const hourlyWins = hourlyAvg > fixedAvg;

    // Risk score (higher = more risk with fixed pricing)
    const riskScore = Math.min(100, Math.round((creep * 1.5) + (revisions * 5) + (admin * 0.5)));

    return {
      hourlyBestCase,
      hourlyRealistic,
      hourlyWorstCase,
      hourlyTotalHoursBest,
      hourlyTotalHoursRealistic,
      hourlyTotalHoursWorst,
      fixedBestCase,
      fixedRealistic,
      fixedWorstCase,
      fixedEffectiveRateBest,
      fixedEffectiveRateRealistic,
      fixedEffectiveRateWorst,
      breakEvenHours,
      hourlyWins,
      riskScore,
      revisionHoursTotal,
      adminHours,
      scopeCreepHours,
    };
  }, [estimatedHours, hourlyRate, fixedPrice, scopeCreep, revisionRounds, hoursPerRevision, adminOverhead]);

  const handleCopy = useCallback(() => {
    if (!results) return;
    const text = [
      'HOURLY VS PROJECT PRICING COMPARISON',
      '=====================================',
      '',
      'Project Details:',
      `  Estimated hours: ${estimatedHours}`,
      `  Hourly rate: ${formatCurrencyExact(parseFloat(hourlyRate))}`,
      `  Fixed project price: ${formatCurrencyExact(parseFloat(fixedPrice))}`,
      `  Scope creep risk: ${scopeCreep}%`,
      `  Revision rounds: ${revisionRounds} (${hoursPerRevision} hrs each)`,
      `  Admin overhead: ${adminOverhead}%`,
      '',
      'HOURLY PRICING:',
      `  Best case: ${formatCurrency(results.hourlyBestCase)} (${results.hourlyTotalHoursBest.toFixed(1)} hrs)`,
      `  Realistic: ${formatCurrency(results.hourlyRealistic)} (${results.hourlyTotalHoursRealistic.toFixed(1)} hrs)`,
      `  Worst case: ${formatCurrency(results.hourlyWorstCase)} (${results.hourlyTotalHoursWorst.toFixed(1)} hrs)`,
      '',
      'FIXED PRICING:',
      `  Revenue: ${formatCurrency(results.fixedBestCase)}`,
      `  Effective rate (best): ${formatCurrencyExact(results.fixedEffectiveRateBest)}/hr`,
      `  Effective rate (realistic): ${formatCurrencyExact(results.fixedEffectiveRateRealistic)}/hr`,
      `  Effective rate (worst): ${formatCurrencyExact(results.fixedEffectiveRateWorst)}/hr`,
      '',
      `Break-even: ${results.breakEvenHours.toFixed(1)} hours`,
      `Recommendation: ${results.hourlyWins ? 'HOURLY — scope creep risk favours hourly billing' : 'FIXED — efficient delivery means higher effective rate'}`,
      '',
      'Generated by InvoiceFlow — invoiceflow.au/tools/pricing-comparison',
    ].join('\n');
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [results, estimatedHours, hourlyRate, fixedPrice, scopeCreep, revisionRounds, hoursPerRevision, adminOverhead]);

  return (
    <div className="space-y-8">
      {/* Project Presets */}
      <div className="glass rounded-2xl p-6">
        <h3 className="text-lg font-bold text-white heading-font mb-4">Quick Start — Project Presets</h3>
        <div className="flex flex-wrap gap-2">
          {projectPresets.map((preset) => (
            <button
              key={preset.label}
              onClick={() => applyPreset(preset)}
              className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-500/30 transition-all text-sm text-slate-300 hover:text-white"
            >
              <span className="font-medium">{preset.label}</span>
              <span className="text-slate-500 ml-1">— {preset.description}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Input Section */}
      <div className="glass rounded-2xl p-6 space-y-6">
        <h3 className="text-lg font-bold text-white heading-font">Project Details</h3>

        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm text-slate-400 mb-2">Estimated hours</label>
            <input
              type="number"
              value={estimatedHours}
              onChange={(e) => setEstimatedHours(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-teal-500 focus:outline-none transition-colors"
              min="1"
            />
          </div>
          <div>
            <label className="block text-sm text-slate-400 mb-2">Your hourly rate ($)</label>
            <input
              type="number"
              value={hourlyRate}
              onChange={(e) => setHourlyRate(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-teal-500 focus:outline-none transition-colors"
              min="1"
            />
          </div>
          <div>
            <label className="block text-sm text-slate-400 mb-2">Fixed project price ($)</label>
            <input
              type="number"
              value={fixedPrice}
              onChange={(e) => setFixedPrice(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-teal-500 focus:outline-none transition-colors"
              min="1"
            />
          </div>
          <div>
            <label className="block text-sm text-slate-400 mb-2">
              Scope creep risk: <span className="text-teal-400 font-medium">{scopeCreep}%</span>
            </label>
            <input
              type="range"
              value={scopeCreep}
              onChange={(e) => setScopeCreep(e.target.value)}
              className="w-full accent-teal-500"
              min="0"
              max="60"
              step="5"
            />
            <div className="flex justify-between text-xs text-slate-500 mt-1">
              <span>0% (none)</span>
              <span>30% (typical)</span>
              <span>60% (high risk)</span>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm text-slate-400 mb-2">Revision rounds</label>
            <input
              type="number"
              value={revisionRounds}
              onChange={(e) => setRevisionRounds(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-teal-500 focus:outline-none transition-colors"
              min="0"
              max="10"
            />
          </div>
          <div>
            <label className="block text-sm text-slate-400 mb-2">Hours per revision</label>
            <input
              type="number"
              value={hoursPerRevision}
              onChange={(e) => setHoursPerRevision(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-teal-500 focus:outline-none transition-colors"
              min="0"
            />
          </div>
          <div>
            <label className="block text-sm text-slate-400 mb-2">Admin overhead (%)</label>
            <input
              type="number"
              value={adminOverhead}
              onChange={(e) => setAdminOverhead(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-teal-500 focus:outline-none transition-colors"
              min="0"
              max="50"
            />
          </div>
        </div>
      </div>

      {/* Results */}
      {results && (
        <>
          {/* Key Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="glass rounded-xl p-4 text-center">
              <p className="text-xs text-slate-400 mb-1">Break-Even</p>
              <p className="text-xl font-bold text-white">{results.breakEvenHours.toFixed(1)} hrs</p>
            </div>
            <div className="glass rounded-xl p-4 text-center">
              <p className="text-xs text-slate-400 mb-1">Scope Creep Hours</p>
              <p className="text-xl font-bold text-amber-400">+{results.scopeCreepHours.toFixed(1)}</p>
            </div>
            <div className="glass rounded-xl p-4 text-center">
              <p className="text-xs text-slate-400 mb-1">Revision Hours</p>
              <p className="text-xl font-bold text-blue-400">+{results.revisionHoursTotal.toFixed(1)}</p>
            </div>
            <div className="glass rounded-xl p-4 text-center">
              <p className="text-xs text-slate-400 mb-1">Risk Score</p>
              <p className={`text-xl font-bold ${results.riskScore > 50 ? 'text-rose-400' : results.riskScore > 25 ? 'text-amber-400' : 'text-emerald-400'}`}>
                {results.riskScore}/100
              </p>
            </div>
          </div>

          {/* Side-by-Side Comparison */}
          <div className="grid sm:grid-cols-2 gap-6">
            {/* Hourly */}
            <div className={`glass rounded-2xl p-6 border-2 ${results.hourlyWins ? 'border-teal-500/40' : 'border-transparent'}`}>
              {results.hourlyWins && (
                <div className="inline-flex items-center gap-1 px-3 py-1 bg-teal-500/20 text-teal-400 rounded-full text-xs font-medium mb-4">
                  Recommended
                </div>
              )}
              <h3 className="text-xl font-bold text-white heading-font mb-1">Hourly Pricing</h3>
              <p className="text-sm text-slate-400 mb-6">Paid for every hour worked — including overruns</p>

              <div className="space-y-4">
                <div className="bg-emerald-500/10 rounded-xl p-4">
                  <p className="text-xs text-emerald-400 mb-1">Best Case</p>
                  <p className="text-2xl font-bold text-emerald-400">{formatCurrency(results.hourlyBestCase)}</p>
                  <p className="text-xs text-slate-400 mt-1">{results.hourlyTotalHoursBest.toFixed(1)} hours at {formatCurrencyExact(parseFloat(hourlyRate))}/hr</p>
                </div>
                <div className="bg-blue-500/10 rounded-xl p-4">
                  <p className="text-xs text-blue-400 mb-1">Realistic (with revisions + admin)</p>
                  <p className="text-2xl font-bold text-blue-400">{formatCurrency(results.hourlyRealistic)}</p>
                  <p className="text-xs text-slate-400 mt-1">{results.hourlyTotalHoursRealistic.toFixed(1)} hours</p>
                </div>
                <div className="bg-amber-500/10 rounded-xl p-4">
                  <p className="text-xs text-amber-400 mb-1">Worst Case (+ scope creep)</p>
                  <p className="text-2xl font-bold text-amber-400">{formatCurrency(results.hourlyWorstCase)}</p>
                  <p className="text-xs text-slate-400 mt-1">{results.hourlyTotalHoursWorst.toFixed(1)} hours</p>
                </div>
              </div>

              <div className="mt-4 bg-white/5 rounded-lg p-3">
                <p className="text-xs text-slate-400">Your effective rate stays at</p>
                <p className="text-lg font-bold text-white">{formatCurrencyExact(parseFloat(hourlyRate))}/hr always</p>
              </div>
            </div>

            {/* Fixed */}
            <div className={`glass rounded-2xl p-6 border-2 ${!results.hourlyWins ? 'border-teal-500/40' : 'border-transparent'}`}>
              {!results.hourlyWins && (
                <div className="inline-flex items-center gap-1 px-3 py-1 bg-teal-500/20 text-teal-400 rounded-full text-xs font-medium mb-4">
                  Recommended
                </div>
              )}
              <h3 className="text-xl font-bold text-white heading-font mb-1">Fixed / Project Pricing</h3>
              <p className="text-sm text-slate-400 mb-6">One price regardless of hours — you absorb overruns</p>

              <div className="space-y-4">
                <div className="bg-emerald-500/10 rounded-xl p-4">
                  <p className="text-xs text-emerald-400 mb-1">Revenue (all scenarios)</p>
                  <p className="text-2xl font-bold text-emerald-400">{formatCurrency(results.fixedBestCase)}</p>
                  <p className="text-xs text-slate-400 mt-1">Locked in — client pays this amount</p>
                </div>
                <div className="bg-blue-500/10 rounded-xl p-4">
                  <p className="text-xs text-blue-400 mb-1">Effective Rate — Realistic</p>
                  <p className="text-2xl font-bold text-blue-400">{formatCurrencyExact(results.fixedEffectiveRateRealistic)}/hr</p>
                  <p className="text-xs text-slate-400 mt-1">Over {results.hourlyTotalHoursRealistic.toFixed(1)} actual hours</p>
                </div>
                <div className="bg-amber-500/10 rounded-xl p-4">
                  <p className="text-xs text-amber-400 mb-1">Effective Rate — Worst Case</p>
                  <p className="text-2xl font-bold text-amber-400">{formatCurrencyExact(results.fixedEffectiveRateWorst)}/hr</p>
                  <p className="text-xs text-slate-400 mt-1">Over {results.hourlyTotalHoursWorst.toFixed(1)} actual hours</p>
                </div>
              </div>

              <div className="mt-4 bg-white/5 rounded-lg p-3">
                <p className="text-xs text-slate-400">Best-case effective rate</p>
                <p className="text-lg font-bold text-white">{formatCurrencyExact(results.fixedEffectiveRateBest)}/hr</p>
              </div>
            </div>
          </div>

          {/* Visual Comparison Bar */}
          <div className="glass rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white heading-font mb-4">Earnings Comparison by Scenario</h3>
            <div className="space-y-4">
              {[
                { label: 'Best case', hourly: results.hourlyBestCase, fixed: results.fixedBestCase },
                { label: 'Realistic', hourly: results.hourlyRealistic, fixed: results.fixedRealistic },
                { label: 'Worst case', hourly: results.hourlyWorstCase, fixed: results.fixedWorstCase },
              ].map((scenario) => {
                const max = Math.max(scenario.hourly, scenario.fixed);
                return (
                  <div key={scenario.label}>
                    <p className="text-sm text-slate-400 mb-2">{scenario.label}</p>
                    <div className="space-y-1">
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-slate-400 w-14">Hourly</span>
                        <div className="flex-1 bg-white/5 rounded-full h-6 overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-end pr-2"
                            style={{ width: `${(scenario.hourly / max) * 100}%` }}
                          >
                            <span className="text-xs font-medium text-white">{formatCurrency(scenario.hourly)}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-slate-400 w-14">Fixed</span>
                        <div className="flex-1 bg-white/5 rounded-full h-6 overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-teal-500 to-emerald-400 rounded-full flex items-center justify-end pr-2"
                            style={{ width: `${(scenario.fixed / max) * 100}%` }}
                          >
                            <span className="text-xs font-medium text-white">{formatCurrency(scenario.fixed)}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Recommendation */}
          <div className={`glass rounded-2xl p-6 border ${results.hourlyWins ? 'border-blue-500/30 bg-blue-500/5' : 'border-teal-500/30 bg-teal-500/5'}`}>
            <h3 className="text-lg font-bold text-white heading-font mb-3">Recommendation</h3>
            {results.hourlyWins ? (
              <div className="space-y-3 text-slate-300">
                <p>
                  <strong className="text-blue-400">Hourly pricing is likely better for this project.</strong> With a {scopeCreep}% scope creep risk and {revisionRounds} revision rounds, the project could take significantly more hours than estimated. Hourly billing ensures you&apos;re compensated for every hour.
                </p>
                <p className="text-sm">
                  If the project runs to worst case ({results.hourlyTotalHoursWorst.toFixed(1)} hours), hourly earns you{' '}
                  <strong className="text-white">{formatCurrency(results.hourlyWorstCase - results.fixedWorstCase)} more</strong> than the fixed price.
                </p>
              </div>
            ) : (
              <div className="space-y-3 text-slate-300">
                <p>
                  <strong className="text-teal-400">Fixed pricing could work well here.</strong> With low scope creep risk ({scopeCreep}%), your effective rate stays above your hourly rate in most scenarios. You benefit from efficiency — the faster you deliver, the higher your effective rate.
                </p>
                <p className="text-sm">
                  Best case effective rate: <strong className="text-white">{formatCurrencyExact(results.fixedEffectiveRateBest)}/hr</strong> — that&apos;s{' '}
                  {((results.fixedEffectiveRateBest / parseFloat(hourlyRate) - 1) * 100).toFixed(0)}% above your hourly rate.
                </p>
              </div>
            )}
          </div>

          {/* When to Use Each */}
          <div className="glass rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white heading-font mb-4">When to Use Each Model</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <h4 className="text-blue-400 font-semibold mb-3">Choose Hourly When:</h4>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex items-start gap-2"><span className="text-blue-400 mt-0.5">+</span> Scope is unclear or likely to change</li>
                  <li className="flex items-start gap-2"><span className="text-blue-400 mt-0.5">+</span> Client tends to request many revisions</li>
                  <li className="flex items-start gap-2"><span className="text-blue-400 mt-0.5">+</span> Discovery or R&D work with unknowns</li>
                  <li className="flex items-start gap-2"><span className="text-blue-400 mt-0.5">+</span> Ongoing maintenance or support work</li>
                  <li className="flex items-start gap-2"><span className="text-blue-400 mt-0.5">+</span> New client you haven&apos;t worked with before</li>
                </ul>
              </div>
              <div>
                <h4 className="text-teal-400 font-semibold mb-3">Choose Fixed When:</h4>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex items-start gap-2"><span className="text-teal-400 mt-0.5">+</span> Scope is clear and well-defined</li>
                  <li className="flex items-start gap-2"><span className="text-teal-400 mt-0.5">+</span> You&apos;ve done similar projects before</li>
                  <li className="flex items-start gap-2"><span className="text-teal-400 mt-0.5">+</span> You can deliver faster than estimated</li>
                  <li className="flex items-start gap-2"><span className="text-teal-400 mt-0.5">+</span> Client prefers predictable budgets</li>
                  <li className="flex items-start gap-2"><span className="text-teal-400 mt-0.5">+</span> You want to de-couple time from income</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Copy Button */}
          <div className="flex justify-center">
            <button
              onClick={handleCopy}
              className="px-6 py-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-500/30 transition-all text-white font-medium"
            >
              {copied ? 'Copied!' : 'Copy Results to Clipboard'}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
