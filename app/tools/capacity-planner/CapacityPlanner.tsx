'use client';

import { useState, useMemo } from 'react';

/* ---- Types ---- */

type PricingMode = 'hourly' | 'project';

interface Inputs {
  hoursPerWeek: number;
  nonBillablePct: number;
  avgHoursPerClient: number;
  avgProjectDuration: number;
  currentClients: number;
  incomeTarget: number;
  pricingMode: PricingMode;
  hourlyRate: number;
  avgProjectValue: number;
  weeksPerYear: number;
}

interface Results {
  billableHoursWeek: number;
  billableHoursMonth: number;
  billableHoursYear: number;
  maxConcurrentClients: number;
  currentBillableHours: number;
  capacityUtilisation: number;
  revenueAtFullCapacity: number;
  revenueAtCurrent: number;
  revenueGap: number;
  revenueVsTarget: number;
  effectiveHourlyRate: number;
  burnoutRisk: 'low' | 'moderate' | 'high' | 'critical';
  burnoutLabel: string;
  burnoutColor: string;
  burnoutBg: string;
  timeAllocation: {
    billable: number;
    admin: number;
    marketing: number;
    learning: number;
    buffer: number;
  };
  recommendations: string[];
  rateNeededForTarget: number;
  clientsNeededForTarget: number;
}

/* ---- Constants ---- */

const NON_BILLABLE_BREAKDOWN = {
  admin: 0.40,
  marketing: 0.30,
  learning: 0.15,
  buffer: 0.15,
};

/* ---- Helpers ---- */

function fmt(n: number): string {
  return n.toLocaleString('en-AU', { maximumFractionDigits: 0 });
}

function fmtCurrency(n: number): string {
  return '$' + n.toLocaleString('en-AU', { maximumFractionDigits: 0 });
}

function fmtPct(n: number): string {
  return n.toFixed(1) + '%';
}

function fmtHours(n: number): string {
  return n.toFixed(1) + 'h';
}

/* ---- Component ---- */

export default function CapacityPlanner() {
  const [calculated, setCalculated] = useState(false);
  const [copied, setCopied] = useState(false);

  const [inputs, setInputs] = useState<Inputs>({
    hoursPerWeek: 40,
    nonBillablePct: 30,
    avgHoursPerClient: 8,
    avgProjectDuration: 6,
    currentClients: 3,
    incomeTarget: 150000,
    pricingMode: 'hourly',
    hourlyRate: 120,
    avgProjectValue: 5000,
    weeksPerYear: 48,
  });

  const update = (field: keyof Inputs, value: number | PricingMode) => {
    setInputs((prev) => ({ ...prev, [field]: value }));
  };

  const results: Results = useMemo(() => {
    const {
      hoursPerWeek,
      nonBillablePct,
      avgHoursPerClient,
      currentClients,
      incomeTarget,
      pricingMode,
      hourlyRate,
      avgProjectValue,
      avgProjectDuration,
      weeksPerYear,
    } = inputs;

    // Core calculations
    const billablePct = (100 - nonBillablePct) / 100;
    const billableHoursWeek = hoursPerWeek * billablePct;
    const billableHoursMonth = billableHoursWeek * (weeksPerYear / 12);
    const billableHoursYear = billableHoursWeek * weeksPerYear;

    const maxConcurrentClients = avgHoursPerClient > 0
      ? Math.floor(billableHoursWeek / avgHoursPerClient)
      : 0;

    const currentBillableHours = currentClients * avgHoursPerClient;
    const capacityUtilisation = billableHoursWeek > 0
      ? (currentBillableHours / billableHoursWeek) * 100
      : 0;

    // Revenue calculations
    let effectiveHourlyRate: number;
    if (pricingMode === 'hourly') {
      effectiveHourlyRate = hourlyRate;
    } else {
      // Project-based: effective rate = project value / (hours per client * project duration)
      const totalProjectHours = avgHoursPerClient * avgProjectDuration;
      effectiveHourlyRate = totalProjectHours > 0 ? avgProjectValue / totalProjectHours : 0;
    }

    const revenueAtFullCapacity = effectiveHourlyRate * billableHoursYear;
    const currentAnnualBillableHours = currentBillableHours * weeksPerYear;
    const revenueAtCurrent = effectiveHourlyRate * currentAnnualBillableHours;
    const revenueGap = incomeTarget - revenueAtCurrent;
    const revenueVsTarget = incomeTarget > 0 ? (revenueAtCurrent / incomeTarget) * 100 : 0;

    // Rate needed to hit target at current load
    const rateNeededForTarget = currentAnnualBillableHours > 0
      ? incomeTarget / currentAnnualBillableHours
      : 0;

    // Clients needed to hit target at current rate
    const clientsNeededForTarget = avgHoursPerClient > 0 && effectiveHourlyRate > 0
      ? Math.ceil(incomeTarget / (effectiveHourlyRate * avgHoursPerClient * weeksPerYear))
      : 0;

    // Burnout risk
    let burnoutRisk: Results['burnoutRisk'];
    let burnoutLabel: string;
    let burnoutColor: string;
    let burnoutBg: string;
    if (capacityUtilisation <= 60) {
      burnoutRisk = 'low';
      burnoutLabel = 'Low Risk';
      burnoutColor = 'text-emerald-400';
      burnoutBg = 'bg-emerald-400';
    } else if (capacityUtilisation <= 75) {
      burnoutRisk = 'low';
      burnoutLabel = 'Healthy';
      burnoutColor = 'text-emerald-400';
      burnoutBg = 'bg-emerald-400';
    } else if (capacityUtilisation <= 85) {
      burnoutRisk = 'moderate';
      burnoutLabel = 'Moderate Risk';
      burnoutColor = 'text-amber-400';
      burnoutBg = 'bg-amber-400';
    } else if (capacityUtilisation <= 100) {
      burnoutRisk = 'high';
      burnoutLabel = 'High Risk';
      burnoutColor = 'text-orange-400';
      burnoutBg = 'bg-orange-400';
    } else {
      burnoutRisk = 'critical';
      burnoutLabel = 'Critical — Over Capacity';
      burnoutColor = 'text-red-400';
      burnoutBg = 'bg-red-400';
    }

    // Time allocation (hours per week)
    const nonBillableHours = hoursPerWeek - billableHoursWeek;
    const timeAllocation = {
      billable: currentBillableHours,
      admin: nonBillableHours * NON_BILLABLE_BREAKDOWN.admin,
      marketing: nonBillableHours * NON_BILLABLE_BREAKDOWN.marketing,
      learning: nonBillableHours * NON_BILLABLE_BREAKDOWN.learning,
      buffer: nonBillableHours * NON_BILLABLE_BREAKDOWN.buffer,
    };

    // Recommendations
    const recommendations: string[] = [];
    if (capacityUtilisation > 100) {
      recommendations.push('You are over capacity. Drop your lowest-value client or renegotiate scope before quality suffers and burnout hits.');
      recommendations.push('Consider subcontracting overflow work to a trusted freelancer to maintain client relationships without destroying your schedule.');
    } else if (capacityUtilisation > 85) {
      recommendations.push('You are nearing burnout territory. Avoid taking on new clients until a current project wraps up.');
      recommendations.push('Raise your rates by 15-25% on the next new client to grow revenue without adding hours.');
      if (nonBillablePct < 25) {
        recommendations.push('Your non-billable allocation is very low. Consider increasing it to at least 25% to protect time for admin, marketing, and professional development.');
      }
    } else if (capacityUtilisation >= 60 && capacityUtilisation <= 85) {
      recommendations.push('Your utilisation is in the healthy zone. Focus on improving the value of existing work rather than adding volume.');
      if (revenueGap > 0) {
        recommendations.push(`To close the ${fmtCurrency(revenueGap)} gap to your income target, consider raising your rate to ${fmtCurrency(rateNeededForTarget)}/hr rather than adding more clients.`);
      }
    } else if (capacityUtilisation < 60 && capacityUtilisation > 0) {
      recommendations.push(`You have room for ${maxConcurrentClients - currentClients} more concurrent clients at your current hours-per-client rate.`);
      recommendations.push('Invest your spare capacity in marketing, content creation, and outreach to build your pipeline.');
      recommendations.push('Consider offering retainer packages to stabilise revenue and fill ongoing capacity.');
    } else if (capacityUtilisation === 0) {
      recommendations.push('You have no active clients. Focus all non-billable time on outreach, portfolio building, and marketing to land your first projects.');
    }

    if (pricingMode === 'project' && effectiveHourlyRate < 80) {
      recommendations.push(`Your effective hourly rate is only ${fmtCurrency(effectiveHourlyRate)}/hr. Consider increasing project prices or reducing the hours allocated per project.`);
    }

    if (revenueAtCurrent > incomeTarget && revenueGap < 0) {
      recommendations.push(`You are already exceeding your income target by ${fmtCurrency(Math.abs(revenueGap))}. Consider reducing hours or reinvesting in growth.`);
    }

    return {
      billableHoursWeek,
      billableHoursMonth,
      billableHoursYear,
      maxConcurrentClients,
      currentBillableHours,
      capacityUtilisation,
      revenueAtFullCapacity,
      revenueAtCurrent,
      revenueGap,
      revenueVsTarget,
      effectiveHourlyRate,
      burnoutRisk,
      burnoutLabel,
      burnoutColor,
      burnoutBg,
      timeAllocation,
      recommendations,
      rateNeededForTarget,
      clientsNeededForTarget,
    };
  }, [inputs]);

  // Copy report to clipboard
  const generateReport = (): string => {
    const lines: string[] = [];
    lines.push('='.repeat(55));
    lines.push('WORK CAPACITY REPORT');
    lines.push('='.repeat(55));
    lines.push('');
    lines.push('INPUTS');
    lines.push('-'.repeat(40));
    lines.push(`Working hours/week:     ${inputs.hoursPerWeek}h`);
    lines.push(`Non-billable time:      ${inputs.nonBillablePct}%`);
    lines.push(`Hours per client/week:  ${inputs.avgHoursPerClient}h`);
    lines.push(`Project duration:       ${inputs.avgProjectDuration} weeks`);
    lines.push(`Current active clients: ${inputs.currentClients}`);
    lines.push(`Income target (annual): ${fmtCurrency(inputs.incomeTarget)}`);
    if (inputs.pricingMode === 'hourly') {
      lines.push(`Hourly rate:            ${fmtCurrency(inputs.hourlyRate)}/hr`);
    } else {
      lines.push(`Avg project value:      ${fmtCurrency(inputs.avgProjectValue)}`);
    }
    lines.push(`Billable weeks/year:    ${inputs.weeksPerYear}`);
    lines.push('');
    lines.push('CAPACITY ANALYSIS');
    lines.push('-'.repeat(40));
    lines.push(`Billable hours/week:    ${fmtHours(results.billableHoursWeek)}`);
    lines.push(`Billable hours/month:   ${fmtHours(results.billableHoursMonth)}`);
    lines.push(`Billable hours/year:    ${fmtHours(results.billableHoursYear)}`);
    lines.push(`Max concurrent clients: ${results.maxConcurrentClients}`);
    lines.push(`Current utilisation:    ${fmtPct(results.capacityUtilisation)}`);
    lines.push(`Burnout risk:           ${results.burnoutLabel}`);
    lines.push('');
    lines.push('REVENUE PROJECTIONS');
    lines.push('-'.repeat(40));
    lines.push(`Effective hourly rate:  ${fmtCurrency(results.effectiveHourlyRate)}/hr`);
    lines.push(`Revenue (current):      ${fmtCurrency(results.revenueAtCurrent)}/yr`);
    lines.push(`Revenue (full capacity):${fmtCurrency(results.revenueAtFullCapacity)}/yr`);
    lines.push(`Income target:          ${fmtCurrency(inputs.incomeTarget)}/yr`);
    lines.push(`Gap to target:          ${results.revenueGap > 0 ? '-' : '+'}${fmtCurrency(Math.abs(results.revenueGap))}`);
    lines.push('');
    lines.push('TIME ALLOCATION (hours/week)');
    lines.push('-'.repeat(40));
    lines.push(`Billable (client work): ${fmtHours(results.timeAllocation.billable)}`);
    lines.push(`Admin & invoicing:      ${fmtHours(results.timeAllocation.admin)}`);
    lines.push(`Marketing & sales:      ${fmtHours(results.timeAllocation.marketing)}`);
    lines.push(`Learning & development: ${fmtHours(results.timeAllocation.learning)}`);
    lines.push(`Buffer & overflow:      ${fmtHours(results.timeAllocation.buffer)}`);
    lines.push('');
    lines.push('RECOMMENDATIONS');
    lines.push('-'.repeat(40));
    results.recommendations.forEach((r, i) => {
      lines.push(`${i + 1}. ${r}`);
    });
    lines.push('');
    lines.push('-'.repeat(55));
    lines.push('Generated by InvoiceFlow Work Capacity Planner');
    lines.push('https://www.invoiceflow.au/tools/capacity-planner');
    lines.push('-'.repeat(55));
    return lines.join('\n');
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateReport()).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const inputClass =
    'w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-400/50 focus:ring-1 focus:ring-indigo-400/25 transition-all text-sm';
  const labelClass = 'block text-sm font-medium text-slate-300 mb-1.5';

  // Capacity gauge calculations
  const gaugePercent = Math.min(results.capacityUtilisation, 120);
  const gaugeRotation = (gaugePercent / 120) * 180;

  return (
    <div className="space-y-8">
      {/* Input Section */}
      <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
        <h3 className="text-lg font-bold text-white heading-font mb-6">Your Work Details</h3>
        <div className="grid sm:grid-cols-2 gap-5">
          {/* Hours per week */}
          <div>
            <label className={labelClass}>
              Available Hours Per Week
              <span className="text-slate-500 font-normal ml-1 text-xs">(default 40)</span>
            </label>
            <input
              type="number"
              value={inputs.hoursPerWeek}
              onChange={(e) => update('hoursPerWeek', Math.max(1, Number(e.target.value)))}
              className={inputClass}
              min={1}
              max={80}
            />
          </div>

          {/* Non-billable percentage */}
          <div>
            <label className={labelClass}>
              Non-Billable Time
              <span className="text-slate-500 font-normal ml-1 text-xs">(admin, marketing, learning)</span>
            </label>
            <div className="relative">
              <input
                type="number"
                value={inputs.nonBillablePct}
                onChange={(e) => update('nonBillablePct', Math.max(0, Math.min(90, Number(e.target.value))))}
                className={inputClass}
                min={0}
                max={90}
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm">%</span>
            </div>
            <div className="mt-2 flex gap-2">
              {[20, 25, 30, 35].map((pct) => (
                <button
                  key={pct}
                  onClick={() => update('nonBillablePct', pct)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                    inputs.nonBillablePct === pct
                      ? 'bg-indigo-400/20 border border-indigo-400/40 text-indigo-300'
                      : 'bg-white/5 border border-white/10 text-slate-500 hover:text-white'
                  }`}
                >
                  {pct}%
                </button>
              ))}
            </div>
          </div>

          {/* Avg hours per client */}
          <div>
            <label className={labelClass}>
              Avg Hours Per Client/Project Per Week
            </label>
            <input
              type="number"
              value={inputs.avgHoursPerClient}
              onChange={(e) => update('avgHoursPerClient', Math.max(0.5, Number(e.target.value)))}
              className={inputClass}
              min={0.5}
              step={0.5}
            />
          </div>

          {/* Avg project duration */}
          <div>
            <label className={labelClass}>
              Average Project Duration
              <span className="text-slate-500 font-normal ml-1 text-xs">(weeks)</span>
            </label>
            <input
              type="number"
              value={inputs.avgProjectDuration}
              onChange={(e) => update('avgProjectDuration', Math.max(1, Number(e.target.value)))}
              className={inputClass}
              min={1}
            />
          </div>

          {/* Current clients */}
          <div>
            <label className={labelClass}>Current Active Clients/Projects</label>
            <input
              type="number"
              value={inputs.currentClients}
              onChange={(e) => update('currentClients', Math.max(0, Number(e.target.value)))}
              className={inputClass}
              min={0}
            />
          </div>

          {/* Billable weeks per year */}
          <div>
            <label className={labelClass}>
              Billable Weeks Per Year
              <span className="text-slate-500 font-normal ml-1 text-xs">(after leave)</span>
            </label>
            <input
              type="number"
              value={inputs.weeksPerYear}
              onChange={(e) => update('weeksPerYear', Math.max(1, Math.min(52, Number(e.target.value))))}
              className={inputClass}
              min={1}
              max={52}
            />
            <div className="mt-2 flex gap-2">
              {[44, 46, 48, 50].map((w) => (
                <button
                  key={w}
                  onClick={() => update('weeksPerYear', w)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                    inputs.weeksPerYear === w
                      ? 'bg-indigo-400/20 border border-indigo-400/40 text-indigo-300'
                      : 'bg-white/5 border border-white/10 text-slate-500 hover:text-white'
                  }`}
                >
                  {w}w
                </button>
              ))}
            </div>
          </div>

          {/* Income target */}
          <div className="sm:col-span-2">
            <label className={labelClass}>Desired Annual Income Target (AUD)</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm">$</span>
              <input
                type="number"
                value={inputs.incomeTarget}
                onChange={(e) => update('incomeTarget', Math.max(0, Number(e.target.value)))}
                className={`${inputClass} pl-8`}
                min={0}
                step={5000}
              />
            </div>
          </div>

          {/* Pricing mode */}
          <div className="sm:col-span-2">
            <label className={labelClass}>Pricing Model</label>
            <div className="flex gap-3 mb-4">
              <button
                onClick={() => update('pricingMode', 'hourly')}
                className={`flex-1 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  inputs.pricingMode === 'hourly'
                    ? 'bg-gradient-to-r from-indigo-400/20 to-violet-500/20 border border-indigo-400/40 text-indigo-300'
                    : 'bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                }`}
              >
                Hourly Rate
              </button>
              <button
                onClick={() => update('pricingMode', 'project')}
                className={`flex-1 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  inputs.pricingMode === 'project'
                    ? 'bg-gradient-to-r from-indigo-400/20 to-violet-500/20 border border-indigo-400/40 text-indigo-300'
                    : 'bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                }`}
              >
                Project-Based
              </button>
            </div>

            {inputs.pricingMode === 'hourly' ? (
              <div>
                <label className={labelClass}>Hourly Rate (AUD)</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm">$</span>
                  <input
                    type="number"
                    value={inputs.hourlyRate}
                    onChange={(e) => update('hourlyRate', Math.max(1, Number(e.target.value)))}
                    className={`${inputClass} pl-8`}
                    min={1}
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm">/hr</span>
                </div>
              </div>
            ) : (
              <div>
                <label className={labelClass}>Average Project Value (AUD)</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm">$</span>
                  <input
                    type="number"
                    value={inputs.avgProjectValue}
                    onChange={(e) => update('avgProjectValue', Math.max(1, Number(e.target.value)))}
                    className={`${inputClass} pl-8`}
                    min={1}
                    step={500}
                  />
                </div>
                <p className="text-xs text-slate-500 mt-1.5">
                  Effective hourly rate: {fmtCurrency(results.effectiveHourlyRate)}/hr
                  (based on {inputs.avgHoursPerClient}h/week x {inputs.avgProjectDuration} weeks)
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Calculate Button */}
        <div className="mt-8 text-center">
          <button
            onClick={() => setCalculated(true)}
            className="bg-gradient-to-r from-indigo-400 to-violet-500 text-white font-semibold rounded-xl px-10 py-4 hover:from-indigo-300 hover:to-violet-400 transition-all text-lg shadow-lg shadow-indigo-500/20"
          >
            Calculate My Capacity
          </button>
        </div>
      </div>

      {/* Results Section */}
      {calculated && (
        <>
          {/* Capacity Gauge */}
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white heading-font mb-6 text-center">
              Capacity Utilisation
            </h3>

            {/* SVG Gauge */}
            <div className="flex justify-center mb-6">
              <div className="relative w-64 h-36">
                <svg viewBox="0 0 200 110" className="w-full h-full">
                  {/* Background arc */}
                  <path
                    d="M 15 100 A 85 85 0 0 1 185 100"
                    fill="none"
                    stroke="rgba(255,255,255,0.06)"
                    strokeWidth="14"
                    strokeLinecap="round"
                  />
                  {/* Green zone (0-75%) */}
                  <path
                    d="M 15 100 A 85 85 0 0 1 185 100"
                    fill="none"
                    stroke="url(#gaugeGradient)"
                    strokeWidth="14"
                    strokeLinecap="round"
                    strokeDasharray={`${(gaugeRotation / 180) * 267} 267`}
                  />
                  {/* Gradient definition */}
                  <defs>
                    <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#34d399" />
                      <stop offset="50%" stopColor="#fbbf24" />
                      <stop offset="75%" stopColor="#f97316" />
                      <stop offset="100%" stopColor="#ef4444" />
                    </linearGradient>
                  </defs>
                  {/* Tick marks */}
                  {[0, 25, 50, 75, 100].map((tick) => {
                    const angle = (tick / 120) * 180;
                    const rad = (angle - 180) * (Math.PI / 180);
                    const x1 = 100 + 92 * Math.cos(rad);
                    const y1 = 100 + 92 * Math.sin(rad);
                    const x2 = 100 + 98 * Math.cos(rad);
                    const y2 = 100 + 98 * Math.sin(rad);
                    const tx = 100 + 108 * Math.cos(rad);
                    const ty = 100 + 108 * Math.sin(rad);
                    return (
                      <g key={tick}>
                        <line
                          x1={x1} y1={y1} x2={x2} y2={y2}
                          stroke="rgba(255,255,255,0.2)"
                          strokeWidth="1.5"
                        />
                        <text
                          x={tx} y={ty}
                          textAnchor="middle"
                          dominantBaseline="middle"
                          fill="rgba(255,255,255,0.3)"
                          fontSize="8"
                          fontFamily="monospace"
                        >
                          {tick}%
                        </text>
                      </g>
                    );
                  })}
                  {/* Needle */}
                  {(() => {
                    const needleAngle = (gaugePercent / 120) * 180;
                    const rad = (needleAngle - 180) * (Math.PI / 180);
                    const nx = 100 + 72 * Math.cos(rad);
                    const ny = 100 + 72 * Math.sin(rad);
                    return (
                      <line
                        x1={100} y1={100} x2={nx} y2={ny}
                        stroke="white"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                    );
                  })()}
                  {/* Center dot */}
                  <circle cx={100} cy={100} r={5} fill="white" />
                </svg>
                {/* Center text */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center">
                  <p className="text-3xl font-bold text-white heading-font">
                    {fmtPct(results.capacityUtilisation)}
                  </p>
                </div>
              </div>
            </div>

            {/* Burnout Indicator */}
            <div className="flex justify-center mb-6">
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${
                results.burnoutRisk === 'low' ? 'bg-emerald-400/10 border border-emerald-400/20' :
                results.burnoutRisk === 'moderate' ? 'bg-amber-400/10 border border-amber-400/20' :
                results.burnoutRisk === 'high' ? 'bg-orange-400/10 border border-orange-400/20' :
                'bg-red-400/10 border border-red-400/20'
              }`}>
                <div className={`w-2.5 h-2.5 rounded-full ${results.burnoutBg}`} />
                <span className={`text-sm font-semibold ${results.burnoutColor}`}>
                  Burnout Risk: {results.burnoutLabel}
                </span>
              </div>
            </div>

            {/* Quick Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="bg-white/5 rounded-xl p-4 text-center">
                <p className="text-xs text-slate-500 mb-1">Billable Hrs/Week</p>
                <p className="text-xl font-bold text-white">{fmtHours(results.billableHoursWeek)}</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 text-center">
                <p className="text-xs text-slate-500 mb-1">Max Clients</p>
                <p className="text-xl font-bold text-white">{results.maxConcurrentClients}</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 text-center">
                <p className="text-xs text-slate-500 mb-1">Current Load</p>
                <p className="text-xl font-bold text-white">
                  {inputs.currentClients}/{results.maxConcurrentClients}
                </p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 text-center">
                <p className="text-xs text-slate-500 mb-1">Available Slots</p>
                <p className="text-xl font-bold text-white">
                  {Math.max(0, results.maxConcurrentClients - inputs.currentClients)}
                </p>
              </div>
            </div>
          </div>

          {/* Revenue Projections */}
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white heading-font mb-6">Revenue Projections</h3>

            {/* Revenue comparison bars */}
            <div className="space-y-5">
              {/* Current Revenue */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-slate-300">Current Revenue (annual)</span>
                  <span className="text-sm font-bold text-white">{fmtCurrency(results.revenueAtCurrent)}</span>
                </div>
                <div className="h-4 bg-white/5 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full transition-all duration-700"
                    style={{
                      width: `${Math.min(100, results.revenueAtFullCapacity > 0 ? (results.revenueAtCurrent / results.revenueAtFullCapacity) * 100 : 0)}%`,
                    }}
                  />
                </div>
              </div>

              {/* Income Target */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-slate-300">Income Target</span>
                  <span className="text-sm font-bold text-white">{fmtCurrency(inputs.incomeTarget)}</span>
                </div>
                <div className="h-4 bg-white/5 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-700 ${
                      results.revenueAtCurrent >= inputs.incomeTarget
                        ? 'bg-gradient-to-r from-emerald-500 to-green-500'
                        : 'bg-gradient-to-r from-amber-500 to-orange-500'
                    }`}
                    style={{
                      width: `${Math.min(100, results.revenueAtFullCapacity > 0 ? (inputs.incomeTarget / results.revenueAtFullCapacity) * 100 : 0)}%`,
                    }}
                  />
                </div>
              </div>

              {/* Full Capacity Revenue */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-slate-300">Revenue at Full Capacity</span>
                  <span className="text-sm font-bold text-white">{fmtCurrency(results.revenueAtFullCapacity)}</span>
                </div>
                <div className="h-4 bg-white/5 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full transition-all duration-700"
                    style={{ width: '100%' }}
                  />
                </div>
              </div>
            </div>

            {/* Revenue gap card */}
            <div className={`mt-6 rounded-xl p-5 ${
              results.revenueGap > 0
                ? 'bg-gradient-to-r from-amber-400/10 to-orange-500/10 border border-amber-400/20'
                : 'bg-gradient-to-r from-emerald-400/10 to-green-500/10 border border-emerald-400/20'
            }`}>
              <div className="flex items-center justify-between">
                <div>
                  <p className={`text-sm font-medium ${results.revenueGap > 0 ? 'text-amber-400' : 'text-emerald-400'}`}>
                    {results.revenueGap > 0 ? 'Revenue Gap to Target' : 'Exceeding Target By'}
                  </p>
                  <p className="text-2xl font-bold text-white mt-1">
                    {fmtCurrency(Math.abs(results.revenueGap))}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-slate-500">Target achievement</p>
                  <p className={`text-lg font-bold ${results.revenueVsTarget >= 100 ? 'text-emerald-400' : 'text-amber-400'}`}>
                    {fmtPct(results.revenueVsTarget)}
                  </p>
                </div>
              </div>
              {results.revenueGap > 0 && (
                <div className="mt-3 pt-3 border-t border-white/10 grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-slate-500">Rate needed to hit target</p>
                    <p className="text-sm font-semibold text-white">{fmtCurrency(results.rateNeededForTarget)}/hr</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Clients needed at current rate</p>
                    <p className="text-sm font-semibold text-white">{results.clientsNeededForTarget} clients</p>
                  </div>
                </div>
              )}
            </div>

            {/* Billable hours breakdown */}
            <div className="mt-6 grid grid-cols-3 gap-3">
              <div className="bg-white/5 rounded-xl p-4 text-center">
                <p className="text-xs text-slate-500 mb-1">Billable Hrs/Week</p>
                <p className="text-lg font-bold text-white">{fmtHours(results.billableHoursWeek)}</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 text-center">
                <p className="text-xs text-slate-500 mb-1">Billable Hrs/Month</p>
                <p className="text-lg font-bold text-white">{fmtHours(results.billableHoursMonth)}</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 text-center">
                <p className="text-xs text-slate-500 mb-1">Billable Hrs/Year</p>
                <p className="text-lg font-bold text-white">{fmt(Math.round(results.billableHoursYear))}</p>
              </div>
            </div>
          </div>

          {/* Time Allocation Donut */}
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white heading-font mb-6">Weekly Time Allocation</h3>

            <div className="flex flex-col sm:flex-row items-center gap-8">
              {/* CSS Donut Chart */}
              <div className="relative w-48 h-48 flex-shrink-0">
                {(() => {
                  const total = inputs.hoursPerWeek;
                  const segments = [
                    { label: 'Billable', hours: results.timeAllocation.billable, color: '#818cf8' },
                    { label: 'Admin', hours: results.timeAllocation.admin, color: '#34d399' },
                    { label: 'Marketing', hours: results.timeAllocation.marketing, color: '#fbbf24' },
                    { label: 'Learning', hours: results.timeAllocation.learning, color: '#a78bfa' },
                    { label: 'Buffer', hours: results.timeAllocation.buffer, color: '#64748b' },
                  ];

                  // Account for unused capacity
                  const usedHours = segments.reduce((sum, s) => sum + s.hours, 0);
                  const unusedHours = Math.max(0, total - usedHours);
                  if (unusedHours > 0) {
                    segments.push({ label: 'Unused', hours: unusedHours, color: 'rgba(255,255,255,0.05)' });
                  }

                  let cumulativePct = 0;
                  const gradientStops = segments.map((seg) => {
                    const pct = total > 0 ? (seg.hours / total) * 100 : 0;
                    const start = cumulativePct;
                    cumulativePct += pct;
                    return `${seg.color} ${start}% ${cumulativePct}%`;
                  });

                  return (
                    <>
                      <div
                        className="w-48 h-48 rounded-full"
                        style={{
                          background: `conic-gradient(${gradientStops.join(', ')})`,
                        }}
                      />
                      <div className="absolute inset-6 bg-[#0B1120] rounded-full flex items-center justify-center">
                        <div className="text-center">
                          <p className="text-2xl font-bold text-white">{inputs.hoursPerWeek}h</p>
                          <p className="text-xs text-slate-500">per week</p>
                        </div>
                      </div>
                    </>
                  );
                })()}
              </div>

              {/* Legend */}
              <div className="flex-1 space-y-3 w-full">
                {[
                  { label: 'Billable (client work)', hours: results.timeAllocation.billable, color: 'bg-indigo-400', pct: (results.timeAllocation.billable / inputs.hoursPerWeek) * 100 },
                  { label: 'Admin & invoicing', hours: results.timeAllocation.admin, color: 'bg-emerald-400', pct: (results.timeAllocation.admin / inputs.hoursPerWeek) * 100 },
                  { label: 'Marketing & sales', hours: results.timeAllocation.marketing, color: 'bg-amber-400', pct: (results.timeAllocation.marketing / inputs.hoursPerWeek) * 100 },
                  { label: 'Learning & development', hours: results.timeAllocation.learning, color: 'bg-violet-400', pct: (results.timeAllocation.learning / inputs.hoursPerWeek) * 100 },
                  { label: 'Buffer & overflow', hours: results.timeAllocation.buffer, color: 'bg-slate-500', pct: (results.timeAllocation.buffer / inputs.hoursPerWeek) * 100 },
                ].map((item) => (
                    <div key={item.label} className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className={`w-3 h-3 rounded-sm ${item.color} flex-shrink-0`} />
                        <span className="text-sm text-slate-300">{item.label}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-medium text-white">{fmtHours(item.hours)}</span>
                        <span className="text-xs text-slate-500 w-10 text-right">{fmtPct(item.pct)}</span>
                      </div>
                    </div>
                  ))}
                {/* Unused capacity row */}
                {(() => {
                  const used = results.timeAllocation.billable + results.timeAllocation.admin + results.timeAllocation.marketing + results.timeAllocation.learning + results.timeAllocation.buffer;
                  const unused = Math.max(0, inputs.hoursPerWeek - used);
                  if (unused > 0.1) {
                    return (
                      <div className="flex items-center justify-between pt-2 border-t border-white/10">
                        <div className="flex items-center gap-2.5">
                          <div className="w-3 h-3 rounded-sm bg-white/10 flex-shrink-0" />
                          <span className="text-sm text-slate-500">Unused capacity</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-medium text-slate-400">{fmtHours(unused)}</span>
                          <span className="text-xs text-slate-500 w-10 text-right">{fmtPct((unused / inputs.hoursPerWeek) * 100)}</span>
                        </div>
                      </div>
                    );
                  }
                  return null;
                })()}
              </div>
            </div>
          </div>

          {/* Recommendations */}
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white heading-font mb-6">Recommendations</h3>
            <div className="space-y-3">
              {results.recommendations.map((rec, i) => (
                <div key={i} className="flex items-start gap-3 bg-white/5 rounded-xl p-4">
                  <div className="w-6 h-6 rounded-full bg-indigo-400/20 border border-indigo-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-indigo-400 text-xs font-bold">{i + 1}</span>
                  </div>
                  <p className="text-sm text-slate-300">{rec}</p>
                </div>
              ))}
            </div>

            {/* Client Mix Recommendations */}
            <div className="mt-6 bg-gradient-to-r from-indigo-400/10 to-violet-500/10 border border-indigo-400/20 rounded-xl p-5">
              <p className="text-sm text-indigo-400 font-medium mb-3">Optimal Client Mix</p>
              <div className="grid sm:grid-cols-3 gap-3">
                <div className="bg-white/5 rounded-lg p-3 text-center">
                  <p className="text-xs text-slate-500 mb-1">Anchor Clients</p>
                  <p className="text-lg font-bold text-white">
                    {Math.max(1, Math.floor(results.maxConcurrentClients * 0.3))}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">40-50% of revenue</p>
                  <p className="text-xs text-indigo-400">Long-term retainers</p>
                </div>
                <div className="bg-white/5 rounded-lg p-3 text-center">
                  <p className="text-xs text-slate-500 mb-1">Project Clients</p>
                  <p className="text-lg font-bold text-white">
                    {Math.max(1, Math.floor(results.maxConcurrentClients * 0.5))}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">30-40% of revenue</p>
                  <p className="text-xs text-indigo-400">Fixed-scope projects</p>
                </div>
                <div className="bg-white/5 rounded-lg p-3 text-center">
                  <p className="text-xs text-slate-500 mb-1">Ad-Hoc Clients</p>
                  <p className="text-lg font-bold text-white">
                    {Math.max(1, Math.ceil(results.maxConcurrentClients * 0.2))}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">10-20% of revenue</p>
                  <p className="text-xs text-indigo-400">One-off / overflow</p>
                </div>
              </div>
            </div>
          </div>

          {/* Copy Report & Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={handleCopy}
              className="bg-gradient-to-r from-indigo-400 to-violet-500 text-white font-semibold rounded-xl px-8 py-4 hover:from-indigo-300 hover:to-violet-400 transition-all"
            >
              {copied ? 'Copied to Clipboard!' : 'Copy Capacity Report'}
            </button>
            <button
              onClick={() => setCalculated(false)}
              className="px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-slate-300 font-medium hover:bg-white/10 transition-all"
            >
              Adjust Inputs
            </button>
          </div>

          {/* Related Tools */}
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white heading-font mb-4">Related Tools</h3>
            <div className="grid sm:grid-cols-3 gap-3">
              <a
                href="/tools/billable-hours-calculator"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-indigo-400/30 rounded-xl p-4 transition-all group"
              >
                <p className="text-white font-medium text-sm group-hover:text-indigo-300 transition-colors">
                  Billable Hours Calculator
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Track utilisation rate and effective hourly rate
                </p>
              </a>
              <a
                href="/tools/rate-calculator"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-indigo-400/30 rounded-xl p-4 transition-all group"
              >
                <p className="text-white font-medium text-sm group-hover:text-indigo-300 transition-colors">
                  Freelance Rate Calculator
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Calculate your ideal hourly rate based on income goals
                </p>
              </a>
              <a
                href="/tools/revenue-goal-planner"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-indigo-400/30 rounded-xl p-4 transition-all group"
              >
                <p className="text-white font-medium text-sm group-hover:text-indigo-300 transition-colors">
                  Revenue Goal Planner
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Break annual income targets into weekly billing goals
                </p>
              </a>
            </div>
          </div>

          <div className="text-center">
            <p className="text-xs text-slate-500 max-w-2xl mx-auto">
              This tool provides estimates based on your inputs. Actual capacity may vary depending on
              project complexity, client communication overhead, and context-switching costs. Review and
              adjust your capacity plan weekly for best results. This is not financial advice.
            </p>
          </div>
        </>
      )}
    </div>
  );
}
