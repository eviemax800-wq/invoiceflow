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

interface BreakEvenResult {
  fixedCosts: number;
  variableCostPerUnit: number;
  revenuePerUnit: number;
  contributionMargin: number;
  contributionMarginPercent: number;
  breakEvenUnits: number;
  breakEvenRevenue: number;
  profitAtTarget: number;
  safetyMarginUnits: number;
  safetyMarginPercent: number;
  monthlyBreakEven: number;
}

const presets = [
  {
    label: 'Solo freelancer',
    fixed: 12000,
    variable: 5,
    rate: 100,
    target: 200,
    description: 'Low overheads, hourly billing',
  },
  {
    label: 'Studio / agency',
    fixed: 60000,
    variable: 25,
    rate: 150,
    target: 800,
    description: 'Office, tools, subcontractors',
  },
  {
    label: 'Productised service',
    fixed: 30000,
    variable: 200,
    rate: 1500,
    target: 50,
    description: 'Fixed packages, recurring clients',
  },
];

export default function BreakEvenCalculator() {
  const [mode, setMode] = useState<'hourly' | 'project'>('hourly');
  const [fixedCosts, setFixedCosts] = useState('12000');
  const [variableCost, setVariableCost] = useState('5');
  const [revenuePerUnit, setRevenuePerUnit] = useState('100');
  const [targetUnits, setTargetUnits] = useState('200');

  // Detailed fixed cost breakdown
  const [showBreakdown, setShowBreakdown] = useState(false);
  const [rent, setRent] = useState('0');
  const [insurance, setInsurance] = useState('500');
  const [software, setSoftware] = useState('2400');
  const [internet, setInternet] = useState('1200');
  const [phone, setPhone] = useState('600');
  const [accounting, setAccounting] = useState('1500');
  const [marketing, setMarketing] = useState('2400');
  const [otherFixed, setOtherFixed] = useState('3400');

  const [copied, setCopied] = useState(false);

  const breakdownTotal = useMemo(() => {
    return [rent, insurance, software, internet, phone, accounting, marketing, otherFixed]
      .reduce((sum, val) => sum + (parseFloat(val) || 0), 0);
  }, [rent, insurance, software, internet, phone, accounting, marketing, otherFixed]);

  const result = useMemo<BreakEvenResult | null>(() => {
    const fixed = showBreakdown ? breakdownTotal : (parseFloat(fixedCosts) || 0);
    const variable = parseFloat(variableCost) || 0;
    const revenue = parseFloat(revenuePerUnit) || 0;
    const target = parseFloat(targetUnits) || 0;
    if (revenue <= 0) return null;

    const contributionMargin = revenue - variable;
    if (contributionMargin <= 0) return null;

    const contributionMarginPercent = (contributionMargin / revenue) * 100;
    const breakEvenUnits = fixed / contributionMargin;
    const breakEvenRevenue = breakEvenUnits * revenue;
    const profitAtTarget = (target * contributionMargin) - fixed;
    const safetyMarginUnits = target - breakEvenUnits;
    const safetyMarginPercent = target > 0 ? (safetyMarginUnits / target) * 100 : 0;
    const monthlyBreakEven = breakEvenUnits / 12;

    return {
      fixedCosts: fixed,
      variableCostPerUnit: variable,
      revenuePerUnit: revenue,
      contributionMargin,
      contributionMarginPercent,
      breakEvenUnits,
      breakEvenRevenue,
      profitAtTarget,
      safetyMarginUnits,
      safetyMarginPercent,
      monthlyBreakEven,
    };
  }, [fixedCosts, variableCost, revenuePerUnit, targetUnits, showBreakdown, breakdownTotal]);

  const handlePreset = useCallback((preset: typeof presets[0]) => {
    setFixedCosts(String(preset.fixed));
    setVariableCost(String(preset.variable));
    setRevenuePerUnit(String(preset.rate));
    setTargetUnits(String(preset.target));
    setShowBreakdown(false);
  }, []);

  const handleCopy = useCallback(() => {
    if (!result) return;
    const unitLabel = mode === 'hourly' ? 'billable hours' : 'projects';
    const lines = [
      'Break-Even Analysis',
      '================================',
      `Annual Fixed Costs: ${formatCurrencyExact(result.fixedCosts)}`,
      `Variable Cost per ${mode === 'hourly' ? 'Hour' : 'Project'}: ${formatCurrencyExact(result.variableCostPerUnit)}`,
      `Revenue per ${mode === 'hourly' ? 'Hour' : 'Project'}: ${formatCurrencyExact(result.revenuePerUnit)}`,
      '',
      `Contribution Margin: ${formatCurrencyExact(result.contributionMargin)} (${result.contributionMarginPercent.toFixed(1)}%)`,
      `Break-Even Point: ${result.breakEvenUnits.toFixed(1)} ${unitLabel}`,
      `Break-Even Revenue: ${formatCurrencyExact(result.breakEvenRevenue)}`,
      `Monthly Target: ${result.monthlyBreakEven.toFixed(1)} ${unitLabel}/month`,
      '',
      `At ${parseFloat(targetUnits)} ${unitLabel}: ${formatCurrencyExact(result.profitAtTarget)} ${result.profitAtTarget >= 0 ? 'profit' : 'loss'}`,
      `Safety Margin: ${result.safetyMarginPercent.toFixed(1)}%`,
      '',
      'Generated by InvoiceFlow — invoiceflow.app',
    ];
    navigator.clipboard.writeText(lines.join('\n'));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [result, mode, targetUnits]);

  const unitLabel = mode === 'hourly' ? 'hour' : 'project';
  const unitLabelPlural = mode === 'hourly' ? 'hours' : 'projects';

  // Chart data points for visual
  const chartPoints = useMemo(() => {
    if (!result) return [];
    const max = Math.max(parseFloat(targetUnits) || 0, result.breakEvenUnits * 1.5);
    const points = [];
    for (let i = 0; i <= 10; i++) {
      const units = (max / 10) * i;
      const revenue = units * result.revenuePerUnit;
      const totalCost = result.fixedCosts + (units * result.variableCostPerUnit);
      points.push({ units, revenue, totalCost, profit: revenue - totalCost });
    }
    return points;
  }, [result, targetUnits]);

  return (
    <div className="space-y-8">
      {/* Mode Toggle */}
      <div className="flex gap-2 p-1 bg-white/5 rounded-xl w-fit">
        <button
          onClick={() => setMode('hourly')}
          className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
            mode === 'hourly'
              ? 'bg-gradient-to-r from-teal-500 to-blue-500 text-white'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          Hourly Billing
        </button>
        <button
          onClick={() => setMode('project')}
          className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
            mode === 'project'
              ? 'bg-gradient-to-r from-teal-500 to-blue-500 text-white'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          Project-Based
        </button>
      </div>

      {/* Presets */}
      <div className="flex flex-wrap gap-2">
        {presets.map((preset) => (
          <button
            key={preset.label}
            onClick={() => handlePreset(preset)}
            className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white border border-transparent hover:border-teal-500/20 transition-all"
            title={preset.description}
          >
            {preset.label}
          </button>
        ))}
      </div>

      {/* Fixed Costs */}
      <div className="glass rounded-2xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-white heading-font">Annual Fixed Costs</h3>
          <button
            onClick={() => setShowBreakdown(!showBreakdown)}
            className="text-xs text-teal-400 hover:text-teal-300 transition-colors"
          >
            {showBreakdown ? 'Use total' : 'Break down costs'}
          </button>
        </div>

        {showBreakdown ? (
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { label: 'Rent / Coworking', value: rent, setter: setRent },
              { label: 'Insurance', value: insurance, setter: setInsurance },
              { label: 'Software / Subscriptions', value: software, setter: setSoftware },
              { label: 'Internet / Utilities', value: internet, setter: setInternet },
              { label: 'Phone / Communications', value: phone, setter: setPhone },
              { label: 'Accounting / Legal', value: accounting, setter: setAccounting },
              { label: 'Marketing / Advertising', value: marketing, setter: setMarketing },
              { label: 'Other Fixed Costs', value: otherFixed, setter: setOtherFixed },
            ].map(({ label, value, setter }) => (
              <div key={label}>
                <label className="block text-sm text-slate-300 mb-1.5">{label}</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">$</span>
                  <input
                    type="number"
                    value={value}
                    onChange={(e) => setter(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3 pl-7 py-2.5 text-white focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/30 outline-none transition-colors"
                    placeholder="0"
                  />
                </div>
              </div>
            ))}
            <div className="sm:col-span-2 bg-white/5 rounded-xl p-3 flex justify-between items-center">
              <span className="text-slate-300 text-sm">Total Annual Fixed Costs</span>
              <span className="text-white font-bold">{formatCurrency(breakdownTotal)}/yr</span>
            </div>
          </div>
        ) : (
          <div>
            <label className="block text-sm text-slate-300 mb-1.5">
              Total Annual Fixed Costs (AUD)
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">$</span>
              <input
                type="number"
                value={fixedCosts}
                onChange={(e) => setFixedCosts(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 pl-7 py-2.5 text-white focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/30 outline-none transition-colors"
                placeholder="12000"
              />
            </div>
            <p className="text-xs text-slate-500 mt-1.5">
              Rent, insurance, software, internet, accounting — costs you pay whether or not you work.
            </p>
          </div>
        )}
      </div>

      {/* Revenue & Variable Costs */}
      <div className="glass rounded-2xl p-6">
        <h3 className="text-lg font-bold text-white heading-font mb-4">
          {mode === 'hourly' ? 'Hourly Rates & Costs' : 'Project Pricing & Costs'}
        </h3>
        <div className="grid sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm text-slate-300 mb-1.5">
              Revenue per {unitLabel} (AUD)
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">$</span>
              <input
                type="number"
                value={revenuePerUnit}
                onChange={(e) => setRevenuePerUnit(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 pl-7 py-2.5 text-white focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/30 outline-none transition-colors"
                placeholder={mode === 'hourly' ? '100' : '1500'}
              />
            </div>
          </div>
          <div>
            <label className="block text-sm text-slate-300 mb-1.5">
              Variable cost per {unitLabel}
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">$</span>
              <input
                type="number"
                value={variableCost}
                onChange={(e) => setVariableCost(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 pl-7 py-2.5 text-white focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/30 outline-none transition-colors"
                placeholder={mode === 'hourly' ? '5' : '200'}
              />
            </div>
            <p className="text-xs text-slate-500 mt-1.5">
              {mode === 'hourly'
                ? 'Software per hour, consumables, etc.'
                : 'Materials, subcontractors, per-project costs'}
            </p>
          </div>
          <div>
            <label className="block text-sm text-slate-300 mb-1.5">
              Target {unitLabelPlural}/year
            </label>
            <input
              type="number"
              value={targetUnits}
              onChange={(e) => setTargetUnits(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-white focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/30 outline-none transition-colors"
              placeholder={mode === 'hourly' ? '1380' : '30'}
            />
          </div>
        </div>
      </div>

      {/* Results */}
      {result && (
        <div className="glass rounded-2xl p-8 border border-teal-500/20">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-white heading-font">Break-Even Analysis</h3>
            <button
              onClick={handleCopy}
              className="px-3 py-1.5 text-xs bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white rounded-lg transition-colors border border-white/10"
            >
              {copied ? 'Copied!' : 'Copy Summary'}
            </button>
          </div>

          {/* Key Metric */}
          <div className="text-center mb-8 bg-white/5 rounded-2xl p-6">
            <p className="text-sm text-slate-400 mb-2">You break even at</p>
            <p className="text-4xl font-bold text-white heading-font">
              {result.breakEvenUnits.toFixed(1)}{' '}
              <span className="text-lg text-slate-400 font-normal">{unitLabelPlural}</span>
            </p>
            <p className="text-slate-400 text-sm mt-1">
              = {formatCurrency(result.breakEvenRevenue)} in revenue
            </p>
            <p className="text-teal-400 text-sm mt-1">
              That&apos;s ~{result.monthlyBreakEven.toFixed(1)} {unitLabelPlural} per month
            </p>
          </div>

          {/* Visual Progress */}
          <div className="mb-8">
            <div className="flex justify-between text-xs text-slate-400 mb-2">
              <span>0 {unitLabelPlural}</span>
              <span className="text-amber-400">Break-even: {result.breakEvenUnits.toFixed(0)}</span>
              <span>Target: {parseFloat(targetUnits)}</span>
            </div>
            <div className="h-6 bg-white/5 rounded-full overflow-hidden relative">
              {/* Break-even marker */}
              <div
                className="absolute top-0 bottom-0 w-0.5 bg-amber-400 z-10"
                style={{
                  left: `${Math.min(100, (result.breakEvenUnits / Math.max(parseFloat(targetUnits) || 1, result.breakEvenUnits * 1.2)) * 100)}%`,
                }}
              />
              {/* Loss zone */}
              <div
                className="absolute h-full bg-gradient-to-r from-rose-500/40 to-rose-500/20"
                style={{
                  width: `${Math.min(100, (result.breakEvenUnits / Math.max(parseFloat(targetUnits) || 1, result.breakEvenUnits * 1.2)) * 100)}%`,
                }}
              />
              {/* Profit zone */}
              <div
                className="absolute h-full bg-gradient-to-r from-emerald-500/20 to-emerald-500/40"
                style={{
                  left: `${Math.min(100, (result.breakEvenUnits / Math.max(parseFloat(targetUnits) || 1, result.breakEvenUnits * 1.2)) * 100)}%`,
                  width: `${Math.max(0, 100 - (result.breakEvenUnits / Math.max(parseFloat(targetUnits) || 1, result.breakEvenUnits * 1.2)) * 100)}%`,
                }}
              />
            </div>
            <div className="flex justify-between text-xs mt-1">
              <span className="text-rose-400">Loss zone</span>
              <span className="text-emerald-400">Profit zone</span>
            </div>
          </div>

          {/* Revenue vs Cost Table */}
          <div className="mb-8">
            <h4 className="text-sm font-medium text-slate-400 mb-3">Revenue vs Total Cost</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-2 text-slate-400 font-medium">
                      {mode === 'hourly' ? 'Hours' : 'Projects'}
                    </th>
                    <th className="text-right py-2 text-slate-400 font-medium">Revenue</th>
                    <th className="text-right py-2 text-slate-400 font-medium">Total Cost</th>
                    <th className="text-right py-2 text-slate-400 font-medium">Profit / Loss</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {chartPoints.filter((_, i) => i % 2 === 0 || i === chartPoints.length - 1).map((point, idx) => (
                    <tr
                      key={idx}
                      className={
                        Math.abs(point.units - result.breakEvenUnits) < (chartPoints[1]?.units || 1) * 0.5
                          ? 'bg-amber-500/5'
                          : ''
                      }
                    >
                      <td className="py-2 text-white">{point.units.toFixed(0)}</td>
                      <td className="py-2 text-right text-slate-300">
                        {formatCurrency(point.revenue)}
                      </td>
                      <td className="py-2 text-right text-slate-300">
                        {formatCurrency(point.totalCost)}
                      </td>
                      <td
                        className={`py-2 text-right font-medium ${
                          point.profit >= 0 ? 'text-emerald-400' : 'text-rose-400'
                        }`}
                      >
                        {point.profit >= 0 ? '+' : ''}
                        {formatCurrency(point.profit)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid sm:grid-cols-3 gap-4 mb-6">
            <div className="bg-white/5 rounded-xl p-4 text-center">
              <p className="text-xs text-slate-400 mb-1">Contribution Margin</p>
              <p className="text-2xl font-bold text-teal-400">
                {result.contributionMarginPercent.toFixed(1)}%
              </p>
              <p className="text-xs text-slate-500">
                {formatCurrencyExact(result.contributionMargin)}/{unitLabel}
              </p>
            </div>
            <div className="bg-white/5 rounded-xl p-4 text-center">
              <p className="text-xs text-slate-400 mb-1">Profit at Target</p>
              <p
                className={`text-2xl font-bold ${
                  result.profitAtTarget >= 0 ? 'text-emerald-400' : 'text-rose-400'
                }`}
              >
                {formatCurrency(result.profitAtTarget)}
              </p>
              <p className="text-xs text-slate-500">
                at {parseFloat(targetUnits)} {unitLabelPlural}/yr
              </p>
            </div>
            <div className="bg-white/5 rounded-xl p-4 text-center">
              <p className="text-xs text-slate-400 mb-1">Safety Margin</p>
              <p
                className={`text-2xl font-bold ${
                  result.safetyMarginPercent >= 30
                    ? 'text-emerald-400'
                    : result.safetyMarginPercent >= 10
                    ? 'text-amber-400'
                    : 'text-rose-400'
                }`}
              >
                {result.safetyMarginPercent.toFixed(1)}%
              </p>
              <p className="text-xs text-slate-500">
                {result.safetyMarginUnits.toFixed(1)} {unitLabelPlural} above break-even
              </p>
            </div>
          </div>

          {/* Detailed Breakdown */}
          <div className="space-y-2">
            <div className="flex justify-between py-2 border-b border-white/5">
              <span className="text-slate-300">Annual Fixed Costs</span>
              <span className="text-white font-medium">{formatCurrency(result.fixedCosts)}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-white/5">
              <span className="text-slate-400">Revenue per {unitLabel}</span>
              <span className="text-emerald-400">{formatCurrencyExact(result.revenuePerUnit)}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-white/5">
              <span className="text-slate-400">Variable cost per {unitLabel}</span>
              <span className="text-rose-400">{formatCurrencyExact(result.variableCostPerUnit)}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-white/5">
              <span className="text-slate-300 font-medium">Contribution margin per {unitLabel}</span>
              <span className="text-teal-400 font-medium">{formatCurrencyExact(result.contributionMargin)}</span>
            </div>
            <div className="flex justify-between py-3 border-t border-teal-500/20">
              <span className="text-white font-bold">Break-Even Point</span>
              <span className="font-bold text-lg text-amber-400">
                {result.breakEvenUnits.toFixed(1)} {unitLabelPlural}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
