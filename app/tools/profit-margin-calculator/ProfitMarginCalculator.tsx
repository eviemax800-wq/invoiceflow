'use client';

import { useState, useMemo, useCallback } from 'react';

function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

interface ProjectResult {
  revenue: number;
  totalCosts: number;
  grossProfit: number;
  grossMargin: number;
  taxEstimate: number;
  medicareLevy: number;
  superContribution: number;
  netProfit: number;
  netMargin: number;
  effectiveHourlyRate: number;
  hoursWorked: number;
}

const commonExpensePresets = [
  { label: 'Light (home office)', expenses: 2000, description: 'Internet, phone, basic software' },
  { label: 'Standard (freelancer)', expenses: 6000, description: '+ insurance, coworking, tools' },
  { label: 'Heavy (studio/agency)', expenses: 15000, description: '+ rent, equipment, team tools' },
];

function estimateIncomeTax(taxableIncome: number): number {
  if (taxableIncome <= 18200) return 0;
  if (taxableIncome <= 45000) return (taxableIncome - 18200) * 0.16;
  if (taxableIncome <= 135000) return 4288 + (taxableIncome - 45000) * 0.30;
  if (taxableIncome <= 190000) return 31288 + (taxableIncome - 135000) * 0.37;
  return 51638 + (taxableIncome - 190000) * 0.45;
}

export default function ProfitMarginCalculator() {
  const [mode, setMode] = useState<'project' | 'annual'>('project');

  // Project mode
  const [projectRevenue, setProjectRevenue] = useState('5000');
  const [projectHours, setProjectHours] = useState('40');
  const [materialsCost, setMaterialsCost] = useState('0');
  const [softwareCost, setSoftwareCost] = useState('0');
  const [subcontractorCost, setSubcontractorCost] = useState('0');
  const [otherDirectCosts, setOtherDirectCosts] = useState('0');
  const [annualOverhead, setAnnualOverhead] = useState('6000');
  const [billableWeeks, setBillableWeeks] = useState('46');
  const [weeklyHours, setWeeklyHours] = useState('30');

  // Annual mode
  const [annualRevenue, setAnnualRevenue] = useState('120000');
  const [annualDirectCosts, setAnnualDirectCosts] = useState('15000');
  const [annualOverheadCosts, setAnnualOverheadCosts] = useState('12000');
  const [annualHoursWorked, setAnnualHoursWorked] = useState('1380');

  const [copied, setCopied] = useState(false);

  const projectResult = useMemo<ProjectResult | null>(() => {
    const revenue = parseFloat(projectRevenue) || 0;
    const hours = parseFloat(projectHours) || 0;
    if (revenue <= 0 || hours <= 0) return null;

    const materials = parseFloat(materialsCost) || 0;
    const software = parseFloat(softwareCost) || 0;
    const subcontractor = parseFloat(subcontractorCost) || 0;
    const otherDirect = parseFloat(otherDirectCosts) || 0;
    const overhead = parseFloat(annualOverhead) || 0;
    const weeks = parseFloat(billableWeeks) || 46;
    const wkHours = parseFloat(weeklyHours) || 30;

    const directCosts = materials + software + subcontractor + otherDirect;
    const annualBillableHours = weeks * wkHours;
    const overheadPerHour = annualBillableHours > 0 ? overhead / annualBillableHours : 0;
    const allocatedOverhead = overheadPerHour * hours;
    const totalCosts = directCosts + allocatedOverhead;

    const grossProfit = revenue - totalCosts;
    const grossMargin = revenue > 0 ? (grossProfit / revenue) * 100 : 0;

    // Estimate annual income for tax calculation
    const effectiveRate = revenue / hours;
    const annualGross = effectiveRate * annualBillableHours;
    const annualCostsEst = (totalCosts / hours) * annualBillableHours;
    const annualNetEst = annualGross - annualCostsEst;

    const taxEstimate = annualNetEst > 0 ? (estimateIncomeTax(annualNetEst) / annualBillableHours) * hours : 0;
    const medicareLevy = annualNetEst > 0 ? ((annualNetEst * 0.02) / annualBillableHours) * hours : 0;
    const superContribution = grossProfit > 0 ? grossProfit * 0.115 : 0;

    const netProfit = grossProfit - taxEstimate - medicareLevy - superContribution;
    const netMargin = revenue > 0 ? (netProfit / revenue) * 100 : 0;
    const effectiveHourlyRate = hours > 0 ? netProfit / hours : 0;

    return {
      revenue,
      totalCosts,
      grossProfit,
      grossMargin,
      taxEstimate,
      medicareLevy,
      superContribution,
      netProfit,
      netMargin,
      effectiveHourlyRate,
      hoursWorked: hours,
    };
  }, [projectRevenue, projectHours, materialsCost, softwareCost, subcontractorCost, otherDirectCosts, annualOverhead, billableWeeks, weeklyHours]);

  const annualResult = useMemo<ProjectResult | null>(() => {
    const revenue = parseFloat(annualRevenue) || 0;
    const direct = parseFloat(annualDirectCosts) || 0;
    const overhead = parseFloat(annualOverheadCosts) || 0;
    const hours = parseFloat(annualHoursWorked) || 0;
    if (revenue <= 0) return null;

    const totalCosts = direct + overhead;
    const grossProfit = revenue - totalCosts;
    const grossMargin = revenue > 0 ? (grossProfit / revenue) * 100 : 0;

    const taxEstimate = grossProfit > 0 ? estimateIncomeTax(grossProfit) : 0;
    const medicareLevy = grossProfit > 0 ? grossProfit * 0.02 : 0;
    const superContribution = grossProfit > 0 ? grossProfit * 0.115 : 0;

    const netProfit = grossProfit - taxEstimate - medicareLevy - superContribution;
    const netMargin = revenue > 0 ? (netProfit / revenue) * 100 : 0;
    const effectiveHourlyRate = hours > 0 ? netProfit / hours : 0;

    return {
      revenue,
      totalCosts,
      grossProfit,
      grossMargin,
      taxEstimate,
      medicareLevy,
      superContribution,
      netProfit,
      netMargin,
      effectiveHourlyRate,
      hoursWorked: hours,
    };
  }, [annualRevenue, annualDirectCosts, annualOverheadCosts, annualHoursWorked]);

  const activeResult = mode === 'project' ? projectResult : annualResult;

  const handleCopy = useCallback(() => {
    if (!activeResult) return;
    const lines = [
      `Profit Margin Analysis (${mode === 'project' ? 'Project' : 'Annual'})`,
      '================================',
      `Revenue: ${formatCurrency(activeResult.revenue)}`,
      `Total Costs: ${formatCurrency(activeResult.totalCosts)}`,
      `Gross Profit: ${formatCurrency(activeResult.grossProfit)} (${activeResult.grossMargin.toFixed(1)}%)`,
      '',
      `Est. Income Tax: ${formatCurrency(activeResult.taxEstimate)}`,
      `Medicare Levy: ${formatCurrency(activeResult.medicareLevy)}`,
      `Super (11.5%): ${formatCurrency(activeResult.superContribution)}`,
      '',
      `Net Profit: ${formatCurrency(activeResult.netProfit)} (${activeResult.netMargin.toFixed(1)}%)`,
      activeResult.hoursWorked > 0 ? `Effective Hourly Rate: ${formatCurrency(activeResult.effectiveHourlyRate)}/hr` : '',
      '',
      'Generated by InvoiceFlow — invoiceflow.app',
    ].filter(Boolean);
    navigator.clipboard.writeText(lines.join('\n'));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [activeResult, mode]);

  const getMarginColor = (margin: number) => {
    if (margin >= 50) return 'text-emerald-400';
    if (margin >= 30) return 'text-teal-400';
    if (margin >= 15) return 'text-amber-400';
    return 'text-rose-400';
  };

  const getMarginLabel = (margin: number) => {
    if (margin >= 60) return 'Excellent';
    if (margin >= 40) return 'Healthy';
    if (margin >= 20) return 'Acceptable';
    if (margin >= 0) return 'Thin';
    return 'Loss-making';
  };

  return (
    <div className="space-y-8">
      {/* Mode Toggle */}
      <div className="flex gap-2 p-1 bg-white/5 rounded-xl w-fit">
        <button
          onClick={() => setMode('project')}
          className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
            mode === 'project'
              ? 'bg-gradient-to-r from-teal-500 to-blue-500 text-white'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          Per Project
        </button>
        <button
          onClick={() => setMode('annual')}
          className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
            mode === 'annual'
              ? 'bg-gradient-to-r from-teal-500 to-blue-500 text-white'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          Annual View
        </button>
      </div>

      {mode === 'project' ? (
        <div className="space-y-6">
          {/* Revenue & Hours */}
          <div className="glass rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white heading-font mb-4">Revenue & Time</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-slate-300 mb-1.5">Project Revenue (AUD)</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">$</span>
                  <input
                    type="number"
                    value={projectRevenue}
                    onChange={(e) => setProjectRevenue(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3 pl-7 py-2.5 text-white focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/30 outline-none transition-colors"
                    placeholder="5000"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm text-slate-300 mb-1.5">Hours to Complete</label>
                <input
                  type="number"
                  value={projectHours}
                  onChange={(e) => setProjectHours(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-white focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/30 outline-none transition-colors"
                  placeholder="40"
                />
              </div>
            </div>
          </div>

          {/* Direct Costs */}
          <div className="glass rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white heading-font mb-4">Direct Project Costs</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-slate-300 mb-1.5">Materials / Supplies</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">$</span>
                  <input
                    type="number"
                    value={materialsCost}
                    onChange={(e) => setMaterialsCost(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3 pl-7 py-2.5 text-white focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/30 outline-none transition-colors"
                    placeholder="0"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm text-slate-300 mb-1.5">Software / Subscriptions</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">$</span>
                  <input
                    type="number"
                    value={softwareCost}
                    onChange={(e) => setSoftwareCost(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3 pl-7 py-2.5 text-white focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/30 outline-none transition-colors"
                    placeholder="0"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm text-slate-300 mb-1.5">Subcontractors</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">$</span>
                  <input
                    type="number"
                    value={subcontractorCost}
                    onChange={(e) => setSubcontractorCost(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3 pl-7 py-2.5 text-white focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/30 outline-none transition-colors"
                    placeholder="0"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm text-slate-300 mb-1.5">Other Direct Costs</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">$</span>
                  <input
                    type="number"
                    value={otherDirectCosts}
                    onChange={(e) => setOtherDirectCosts(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3 pl-7 py-2.5 text-white focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/30 outline-none transition-colors"
                    placeholder="0"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Annual Overheads */}
          <div className="glass rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white heading-font mb-2">Annual Overheads</h3>
            <p className="text-sm text-slate-400 mb-4">
              Your fixed annual costs — allocated proportionally to each project based on hours.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {commonExpensePresets.map((preset) => (
                <button
                  key={preset.label}
                  onClick={() => setAnnualOverhead(String(preset.expenses))}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    annualOverhead === String(preset.expenses)
                      ? 'bg-teal-500/20 text-teal-400 border border-teal-500/30'
                      : 'bg-white/5 text-slate-400 hover:bg-white/10 border border-transparent'
                  }`}
                  title={preset.description}
                >
                  {preset.label} ({formatCurrency(preset.expenses)}/yr)
                </button>
              ))}
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm text-slate-300 mb-1.5">Annual Overhead ($)</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">$</span>
                  <input
                    type="number"
                    value={annualOverhead}
                    onChange={(e) => setAnnualOverhead(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3 pl-7 py-2.5 text-white focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/30 outline-none transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm text-slate-300 mb-1.5">Billable Weeks/Year</label>
                <input
                  type="number"
                  value={billableWeeks}
                  onChange={(e) => setBillableWeeks(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-white focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/30 outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm text-slate-300 mb-1.5">Billable Hrs/Week</label>
                <input
                  type="number"
                  value={weeklyHours}
                  onChange={(e) => setWeeklyHours(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-white focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/30 outline-none transition-colors"
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="glass rounded-2xl p-6 space-y-4">
          <h3 className="text-lg font-bold text-white heading-font mb-4">Annual Figures</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-slate-300 mb-1.5">Total Annual Revenue</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">$</span>
                <input
                  type="number"
                  value={annualRevenue}
                  onChange={(e) => setAnnualRevenue(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-3 pl-7 py-2.5 text-white focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/30 outline-none transition-colors"
                  placeholder="120000"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm text-slate-300 mb-1.5">Direct Costs (materials, subs, etc.)</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">$</span>
                <input
                  type="number"
                  value={annualDirectCosts}
                  onChange={(e) => setAnnualDirectCosts(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-3 pl-7 py-2.5 text-white focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/30 outline-none transition-colors"
                  placeholder="15000"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm text-slate-300 mb-1.5">Overheads (rent, insurance, software)</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">$</span>
                <input
                  type="number"
                  value={annualOverheadCosts}
                  onChange={(e) => setAnnualOverheadCosts(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-3 pl-7 py-2.5 text-white focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/30 outline-none transition-colors"
                  placeholder="12000"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm text-slate-300 mb-1.5">Total Hours Worked</label>
              <input
                type="number"
                value={annualHoursWorked}
                onChange={(e) => setAnnualHoursWorked(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-white focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/30 outline-none transition-colors"
                placeholder="1380"
              />
            </div>
          </div>
        </div>
      )}

      {/* Results */}
      {activeResult && (
        <div className="glass rounded-2xl p-8 border border-teal-500/20">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-white heading-font">
              {mode === 'project' ? 'Project' : 'Annual'} Profit Analysis
            </h3>
            <button
              onClick={handleCopy}
              className="px-3 py-1.5 text-xs bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white rounded-lg transition-colors border border-white/10"
            >
              {copied ? 'Copied!' : 'Copy Summary'}
            </button>
          </div>

          {/* Visual Breakdown Bar */}
          <div className="mb-8">
            <div className="h-8 rounded-xl overflow-hidden flex">
              {activeResult.totalCosts > 0 && (
                <div
                  className="h-full bg-rose-500/60 flex items-center justify-center text-xs text-white/80 font-medium overflow-hidden"
                  style={{ width: `${Math.max(0, (activeResult.totalCosts / activeResult.revenue) * 100)}%` }}
                >
                  {((activeResult.totalCosts / activeResult.revenue) * 100).toFixed(0)}% costs
                </div>
              )}
              {activeResult.taxEstimate + activeResult.medicareLevy > 0 && (
                <div
                  className="h-full bg-amber-500/60 flex items-center justify-center text-xs text-white/80 font-medium overflow-hidden"
                  style={{ width: `${Math.max(0, ((activeResult.taxEstimate + activeResult.medicareLevy) / activeResult.revenue) * 100)}%` }}
                >
                  {(((activeResult.taxEstimate + activeResult.medicareLevy) / activeResult.revenue) * 100).toFixed(0)}% tax
                </div>
              )}
              {activeResult.superContribution > 0 && (
                <div
                  className="h-full bg-blue-500/60 flex items-center justify-center text-xs text-white/80 font-medium overflow-hidden"
                  style={{ width: `${Math.max(0, (activeResult.superContribution / activeResult.revenue) * 100)}%` }}
                >
                  {((activeResult.superContribution / activeResult.revenue) * 100).toFixed(0)}% super
                </div>
              )}
              <div
                className="h-full bg-emerald-500/60 flex items-center justify-center text-xs text-white font-medium overflow-hidden"
                style={{ width: `${Math.max(0, activeResult.netMargin)}%` }}
              >
                {activeResult.netMargin.toFixed(0)}% profit
              </div>
            </div>
            <div className="flex justify-between mt-2 text-xs text-slate-500">
              <span>$0</span>
              <span>{formatCurrency(activeResult.revenue)}</span>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid sm:grid-cols-3 gap-4 mb-6">
            <div className="bg-white/5 rounded-xl p-4 text-center">
              <p className="text-xs text-slate-400 mb-1">Gross Margin</p>
              <p className={`text-2xl font-bold ${getMarginColor(activeResult.grossMargin)}`}>
                {activeResult.grossMargin.toFixed(1)}%
              </p>
              <p className="text-xs text-slate-500">{formatCurrency(activeResult.grossProfit)}</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4 text-center">
              <p className="text-xs text-slate-400 mb-1">Net Margin</p>
              <p className={`text-2xl font-bold ${getMarginColor(activeResult.netMargin)}`}>
                {activeResult.netMargin.toFixed(1)}%
              </p>
              <p className="text-xs text-slate-500">
                {formatCurrency(activeResult.netProfit)} · {getMarginLabel(activeResult.netMargin)}
              </p>
            </div>
            <div className="bg-white/5 rounded-xl p-4 text-center">
              <p className="text-xs text-slate-400 mb-1">Effective Rate</p>
              <p className="text-2xl font-bold text-white">
                {activeResult.hoursWorked > 0
                  ? `${formatCurrency(activeResult.effectiveHourlyRate)}/hr`
                  : '—'}
              </p>
              <p className="text-xs text-slate-500">after all costs & tax</p>
            </div>
          </div>

          {/* Detailed Breakdown */}
          <div className="space-y-2">
            <div className="flex justify-between py-2 border-b border-white/5">
              <span className="text-slate-300">Revenue</span>
              <span className="text-white font-medium">{formatCurrency(activeResult.revenue)}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-white/5">
              <span className="text-slate-400">− Total Costs</span>
              <span className="text-rose-400">{formatCurrency(activeResult.totalCosts)}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-white/5">
              <span className="text-slate-300 font-medium">= Gross Profit</span>
              <span className="text-white font-medium">{formatCurrency(activeResult.grossProfit)}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-white/5">
              <span className="text-slate-400">− Est. Income Tax</span>
              <span className="text-amber-400">{formatCurrency(activeResult.taxEstimate)}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-white/5">
              <span className="text-slate-400">− Medicare Levy (2%)</span>
              <span className="text-amber-400">{formatCurrency(activeResult.medicareLevy)}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-white/5">
              <span className="text-slate-400">− Super (11.5%)</span>
              <span className="text-blue-400">{formatCurrency(activeResult.superContribution)}</span>
            </div>
            <div className="flex justify-between py-3 border-t border-teal-500/20">
              <span className="text-white font-bold">Net Profit (Take-Home)</span>
              <span className={`font-bold text-lg ${getMarginColor(activeResult.netMargin)}`}>
                {formatCurrency(activeResult.netProfit)}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
