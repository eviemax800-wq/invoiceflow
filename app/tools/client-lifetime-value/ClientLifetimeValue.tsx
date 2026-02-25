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

const clientPresets = [
  { label: 'One-off project client', avgProject: 3000, projectsPerYear: 1, lifespan: 1, referralRate: 10, acquisitionCost: 200, profitMargin: 60, description: 'Single project, may not return' },
  { label: 'Repeat project client', avgProject: 5000, projectsPerYear: 3, lifespan: 3, referralRate: 25, acquisitionCost: 500, profitMargin: 55, description: 'Regular projects over years' },
  { label: 'Retainer client', avgProject: 2000, projectsPerYear: 12, lifespan: 2, referralRate: 30, acquisitionCost: 800, profitMargin: 65, description: 'Monthly ongoing work' },
  { label: 'Agency / white-label', avgProject: 8000, projectsPerYear: 6, lifespan: 4, referralRate: 15, acquisitionCost: 1500, profitMargin: 45, description: 'High volume, lower margin' },
  { label: 'Premium consulting', avgProject: 15000, projectsPerYear: 2, lifespan: 5, referralRate: 40, acquisitionCost: 2000, profitMargin: 70, description: 'High-value advisory' },
];

export default function ClientLifetimeValue() {
  const [avgProject, setAvgProject] = useState('5000');
  const [projectsPerYear, setProjectsPerYear] = useState('3');
  const [lifespan, setLifespan] = useState('3');
  const [referralRate, setReferralRate] = useState('25');
  const [acquisitionCost, setAcquisitionCost] = useState('500');
  const [profitMargin, setProfitMargin] = useState('55');
  const [discountRate, setDiscountRate] = useState('5');
  const [copied, setCopied] = useState(false);

  const applyPreset = useCallback((preset: typeof clientPresets[0]) => {
    setAvgProject(String(preset.avgProject));
    setProjectsPerYear(String(preset.projectsPerYear));
    setLifespan(String(preset.lifespan));
    setReferralRate(String(preset.referralRate));
    setAcquisitionCost(String(preset.acquisitionCost));
    setProfitMargin(String(preset.profitMargin));
  }, []);

  const results = useMemo(() => {
    const project = parseFloat(avgProject) || 0;
    const perYear = parseFloat(projectsPerYear) || 0;
    const years = parseFloat(lifespan) || 0;
    const referral = parseFloat(referralRate) || 0;
    const cac = parseFloat(acquisitionCost) || 0;
    const margin = parseFloat(profitMargin) || 0;
    const discount = parseFloat(discountRate) || 0;

    if (project <= 0 || perYear <= 0 || years <= 0) return null;

    // Revenue CLV
    const annualRevenue = project * perYear;
    const totalRevenue = annualRevenue * years;

    // Profit CLV
    const annualProfit = annualRevenue * (margin / 100);
    const totalProfit = annualProfit * years;

    // Net CLV (after acquisition cost)
    const netCLV = totalProfit - cac;

    // Discounted CLV (present value)
    let discountedCLV = 0;
    const yearlyBreakdown: Array<{ year: number; revenue: number; profit: number; discounted: number; cumulative: number }> = [];
    let cumulative = -cac;
    for (let y = 1; y <= years; y++) {
      const discountFactor = 1 / Math.pow(1 + discount / 100, y);
      const discountedProfit = annualProfit * discountFactor;
      discountedCLV += discountedProfit;
      cumulative += annualProfit;
      yearlyBreakdown.push({
        year: y,
        revenue: annualRevenue,
        profit: annualProfit,
        discounted: discountedProfit,
        cumulative,
      });
    }
    const discountedNetCLV = discountedCLV - cac;

    // Referral value
    const expectedReferrals = (referral / 100) * years;
    const referralValue = expectedReferrals * totalProfit;
    const totalWithReferrals = netCLV + referralValue;

    // ROI on acquisition
    const roi = cac > 0 ? ((netCLV / cac) * 100) : 0;

    // Payback period (months)
    const monthlyProfit = annualProfit / 12;
    const paybackMonths = monthlyProfit > 0 ? Math.ceil(cac / monthlyProfit) : 0;

    // CLV:CAC ratio
    const clvCacRatio = cac > 0 ? totalProfit / cac : 0;

    // Retention impact: what if client stays 1 more year?
    const extraYearValue = annualProfit;
    const extraYearPercent = totalProfit > 0 ? (extraYearValue / totalProfit) * 100 : 0;

    // Max spend to acquire
    const maxAcquisitionSpend = totalProfit * 0.3; // 30% of CLV rule of thumb

    return {
      annualRevenue,
      totalRevenue,
      annualProfit,
      totalProfit,
      netCLV,
      discountedCLV,
      discountedNetCLV,
      referralValue,
      expectedReferrals,
      totalWithReferrals,
      roi,
      paybackMonths,
      clvCacRatio,
      extraYearValue,
      extraYearPercent,
      maxAcquisitionSpend,
      yearlyBreakdown,
    };
  }, [avgProject, projectsPerYear, lifespan, referralRate, acquisitionCost, profitMargin, discountRate]);

  const handleCopy = useCallback(() => {
    if (!results) return;
    const text = [
      'CLIENT LIFETIME VALUE (CLV) ANALYSIS',
      '=====================================',
      '',
      'Inputs:',
      `  Average project value: ${formatCurrencyExact(parseFloat(avgProject))}`,
      `  Projects per year: ${projectsPerYear}`,
      `  Average client lifespan: ${lifespan} years`,
      `  Referral rate: ${referralRate}%`,
      `  Acquisition cost: ${formatCurrencyExact(parseFloat(acquisitionCost))}`,
      `  Profit margin: ${profitMargin}%`,
      '',
      'RESULTS:',
      `  Total lifetime revenue: ${formatCurrency(results.totalRevenue)}`,
      `  Total lifetime profit: ${formatCurrency(results.totalProfit)}`,
      `  Net CLV (after acquisition): ${formatCurrency(results.netCLV)}`,
      `  CLV:CAC ratio: ${results.clvCacRatio.toFixed(1)}:1`,
      `  ROI on acquisition: ${results.roi.toFixed(0)}%`,
      `  Payback period: ${results.paybackMonths} months`,
      '',
      'REFERRAL VALUE:',
      `  Expected referrals: ${results.expectedReferrals.toFixed(1)} clients`,
      `  Referral value: ${formatCurrency(results.referralValue)}`,
      `  Total CLV with referrals: ${formatCurrency(results.totalWithReferrals)}`,
      '',
      'INSIGHTS:',
      `  Max recommended acquisition spend: ${formatCurrency(results.maxAcquisitionSpend)}`,
      `  Extra year retention adds: ${formatCurrency(results.extraYearValue)} (${results.extraYearPercent.toFixed(0)}%)`,
      '',
      'Generated by InvoiceFlow — invoiceflow.au/tools/client-lifetime-value',
    ].join('\n');
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [results, avgProject, projectsPerYear, lifespan, referralRate, acquisitionCost, profitMargin]);

  return (
    <div className="space-y-8">
      {/* Client Presets */}
      <div className="glass rounded-2xl p-6">
        <h3 className="text-lg font-bold text-white heading-font mb-4">Quick Start — Client Type Presets</h3>
        <div className="flex flex-wrap gap-2">
          {clientPresets.map((preset) => (
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
        <h3 className="text-lg font-bold text-white heading-font">Client Details</h3>

        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm text-slate-400 mb-2">Average project value ($)</label>
            <input
              type="number"
              value={avgProject}
              onChange={(e) => setAvgProject(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-teal-500 focus:outline-none transition-colors"
              min="1"
            />
          </div>
          <div>
            <label className="block text-sm text-slate-400 mb-2">Projects per year</label>
            <input
              type="number"
              value={projectsPerYear}
              onChange={(e) => setProjectsPerYear(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-teal-500 focus:outline-none transition-colors"
              min="0.5"
              step="0.5"
            />
          </div>
          <div>
            <label className="block text-sm text-slate-400 mb-2">Average client lifespan (years)</label>
            <input
              type="number"
              value={lifespan}
              onChange={(e) => setLifespan(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-teal-500 focus:outline-none transition-colors"
              min="0.5"
              step="0.5"
            />
          </div>
          <div>
            <label className="block text-sm text-slate-400 mb-2">Client acquisition cost ($)</label>
            <input
              type="number"
              value={acquisitionCost}
              onChange={(e) => setAcquisitionCost(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-teal-500 focus:outline-none transition-colors"
              min="0"
            />
          </div>
          <div>
            <label className="block text-sm text-slate-400 mb-2">
              Profit margin: <span className="text-teal-400 font-medium">{profitMargin}%</span>
            </label>
            <input
              type="range"
              value={profitMargin}
              onChange={(e) => setProfitMargin(e.target.value)}
              className="w-full accent-teal-500"
              min="10"
              max="90"
              step="5"
            />
            <div className="flex justify-between text-xs text-slate-500 mt-1">
              <span>10%</span>
              <span>50%</span>
              <span>90%</span>
            </div>
          </div>
          <div>
            <label className="block text-sm text-slate-400 mb-2">
              Referral rate: <span className="text-teal-400 font-medium">{referralRate}%</span>
            </label>
            <input
              type="range"
              value={referralRate}
              onChange={(e) => setReferralRate(e.target.value)}
              className="w-full accent-teal-500"
              min="0"
              max="80"
              step="5"
            />
            <div className="flex justify-between text-xs text-slate-500 mt-1">
              <span>0% (none)</span>
              <span>40%</span>
              <span>80%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      {results && (
        <>
          {/* Key Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="glass rounded-xl p-4 text-center">
              <p className="text-xs text-slate-400 mb-1">Lifetime Revenue</p>
              <p className="text-xl font-bold text-white">{formatCurrency(results.totalRevenue)}</p>
            </div>
            <div className="glass rounded-xl p-4 text-center">
              <p className="text-xs text-slate-400 mb-1">Lifetime Profit</p>
              <p className="text-xl font-bold text-teal-400">{formatCurrency(results.totalProfit)}</p>
            </div>
            <div className="glass rounded-xl p-4 text-center">
              <p className="text-xs text-slate-400 mb-1">CLV:CAC Ratio</p>
              <p className={`text-xl font-bold ${results.clvCacRatio >= 3 ? 'text-emerald-400' : results.clvCacRatio >= 1 ? 'text-amber-400' : 'text-rose-400'}`}>
                {results.clvCacRatio.toFixed(1)}:1
              </p>
            </div>
            <div className="glass rounded-xl p-4 text-center">
              <p className="text-xs text-slate-400 mb-1">Payback</p>
              <p className="text-xl font-bold text-blue-400">{results.paybackMonths} mo</p>
            </div>
          </div>

          {/* CLV Breakdown */}
          <div className="glass rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white heading-font mb-4">CLV Breakdown</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between py-3 border-b border-white/10">
                <span className="text-slate-300">Annual revenue per client</span>
                <span className="text-white font-semibold">{formatCurrency(results.annualRevenue)}</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-white/10">
                <span className="text-slate-300">Annual profit per client</span>
                <span className="text-teal-400 font-semibold">{formatCurrency(results.annualProfit)}</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-white/10">
                <span className="text-slate-300">Total lifetime profit ({lifespan} years)</span>
                <span className="text-white font-bold text-lg">{formatCurrency(results.totalProfit)}</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-white/10">
                <span className="text-slate-300">Less: acquisition cost</span>
                <span className="text-rose-400 font-semibold">-{formatCurrency(parseFloat(acquisitionCost))}</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-white/10">
                <span className="text-white font-bold">Net CLV</span>
                <span className={`font-bold text-lg ${results.netCLV >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {formatCurrency(results.netCLV)}
                </span>
              </div>
              <div className="flex items-center justify-between py-3">
                <span className="text-slate-300">ROI on acquisition cost</span>
                <span className={`font-bold ${results.roi >= 200 ? 'text-emerald-400' : results.roi >= 100 ? 'text-amber-400' : 'text-rose-400'}`}>
                  {results.roi.toFixed(0)}%
                </span>
              </div>
            </div>
          </div>

          {/* Yearly Progression */}
          <div className="glass rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white heading-font mb-4">Year-by-Year Progression</h3>
            <div className="space-y-3">
              {results.yearlyBreakdown.map((year) => {
                const maxCumulative = results.yearlyBreakdown[results.yearlyBreakdown.length - 1].cumulative;
                const barWidth = Math.max(0, Math.min(100, (year.cumulative / maxCumulative) * 100));
                return (
                  <div key={year.year} className="flex items-center gap-4">
                    <span className="text-sm text-slate-400 w-12 shrink-0">Year {year.year}</span>
                    <div className="flex-1 bg-white/5 rounded-full h-8 overflow-hidden relative">
                      <div
                        className={`h-full rounded-full flex items-center justify-end pr-3 ${
                          year.cumulative >= 0
                            ? 'bg-gradient-to-r from-teal-500/80 to-emerald-400/80'
                            : 'bg-gradient-to-r from-rose-500/80 to-red-400/80'
                        }`}
                        style={{ width: `${year.cumulative >= 0 ? barWidth : 10}%` }}
                      >
                        <span className="text-xs font-medium text-white whitespace-nowrap">
                          {formatCurrency(year.cumulative)}
                        </span>
                      </div>
                    </div>
                    <span className="text-xs text-slate-500 w-20 text-right shrink-0">
                      +{formatCurrency(year.profit)}/yr
                    </span>
                  </div>
                );
              })}
            </div>
            <p className="text-xs text-slate-500 mt-3">Cumulative profit after subtracting {formatCurrency(parseFloat(acquisitionCost))} acquisition cost</p>
          </div>

          {/* Referral Value */}
          <div className="glass rounded-2xl p-6 border border-violet-500/20 bg-violet-500/5">
            <h3 className="text-lg font-bold text-white heading-font mb-4">Referral Value</h3>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-xs text-slate-400 mb-1">Expected Referrals</p>
                <p className="text-2xl font-bold text-violet-400">{results.expectedReferrals.toFixed(1)}</p>
                <p className="text-xs text-slate-500">clients over {lifespan} years</p>
              </div>
              <div className="text-center">
                <p className="text-xs text-slate-400 mb-1">Referral Value</p>
                <p className="text-2xl font-bold text-violet-400">{formatCurrency(results.referralValue)}</p>
                <p className="text-xs text-slate-500">profit from referrals</p>
              </div>
              <div className="text-center">
                <p className="text-xs text-slate-400 mb-1">True CLV (with referrals)</p>
                <p className="text-2xl font-bold text-white">{formatCurrency(results.totalWithReferrals)}</p>
                <p className="text-xs text-slate-500">total value to your business</p>
              </div>
            </div>
          </div>

          {/* Insights */}
          <div className="glass rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white heading-font mb-4">Key Insights</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white/5 rounded-xl p-4">
                <p className="text-xs text-slate-400 mb-1">Max Acquisition Spend</p>
                <p className="text-lg font-bold text-white">{formatCurrency(results.maxAcquisitionSpend)}</p>
                <p className="text-xs text-slate-400 mt-1">
                  30% of lifetime profit — the recommended maximum to spend acquiring this type of client
                </p>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <p className="text-xs text-slate-400 mb-1">Retention Impact</p>
                <p className="text-lg font-bold text-white">+{formatCurrency(results.extraYearValue)}</p>
                <p className="text-xs text-slate-400 mt-1">
                  Each additional year adds {results.extraYearPercent.toFixed(0)}% to the client&apos;s lifetime value
                </p>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <p className="text-xs text-slate-400 mb-1">CLV:CAC Health</p>
                <p className={`text-lg font-bold ${results.clvCacRatio >= 3 ? 'text-emerald-400' : results.clvCacRatio >= 1 ? 'text-amber-400' : 'text-rose-400'}`}>
                  {results.clvCacRatio >= 3 ? 'Healthy' : results.clvCacRatio >= 1 ? 'Acceptable' : 'Unprofitable'}
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  {results.clvCacRatio >= 3
                    ? 'Great ratio — you can afford to invest more in acquisition'
                    : results.clvCacRatio >= 1
                    ? 'Profitable but thin — improve retention or margins'
                    : 'Losing money on acquisition — reduce CAC or improve CLV'}
                </p>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <p className="text-xs text-slate-400 mb-1">10 Clients at This CLV</p>
                <p className="text-lg font-bold text-teal-400">{formatCurrency(results.netCLV * 10)}</p>
                <p className="text-xs text-slate-400 mt-1">
                  Total net profit from a base of 10 clients like this
                </p>
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
