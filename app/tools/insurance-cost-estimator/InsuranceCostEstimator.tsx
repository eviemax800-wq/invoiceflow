'use client';

import { useState, useMemo, useCallback } from 'react';

/* ---- Types ---- */

type Industry =
  | 'Web Developer'
  | 'Graphic Designer'
  | 'Consultant'
  | 'Copywriter'
  | 'Photographer'
  | 'Accountant/Bookkeeper'
  | 'Marketing/Social Media'
  | 'Virtual Assistant'
  | 'Trades/Construction'
  | 'Other';

type ClientType = 'individuals' | 'small_business' | 'enterprise_government';

type Priority = 'Must Have' | 'Strongly Recommended' | 'Consider' | 'Not Needed';

const INDUSTRIES: Industry[] = [
  'Web Developer',
  'Graphic Designer',
  'Consultant',
  'Copywriter',
  'Photographer',
  'Accountant/Bookkeeper',
  'Marketing/Social Media',
  'Virtual Assistant',
  'Trades/Construction',
  'Other',
];

const CLIENT_TYPES: { value: ClientType; label: string }[] = [
  { value: 'individuals', label: 'Individuals' },
  { value: 'small_business', label: 'Small Business' },
  { value: 'enterprise_government', label: 'Enterprise / Government' },
];

/* ---- Industry multipliers ---- */

const INDUSTRY_PI_MULTIPLIER: Record<Industry, number> = {
  'Web Developer': 1.2,
  'Graphic Designer': 1.0,
  'Consultant': 1.5,
  'Copywriter': 0.9,
  'Photographer': 0.8,
  'Accountant/Bookkeeper': 1.6,
  'Marketing/Social Media': 1.1,
  'Virtual Assistant': 0.7,
  'Trades/Construction': 2.0,
  'Other': 1.1,
};

const INDUSTRY_WC_MULTIPLIER: Record<Industry, number> = {
  'Web Developer': 0.6,
  'Graphic Designer': 0.6,
  'Consultant': 0.5,
  'Copywriter': 0.5,
  'Photographer': 0.8,
  'Accountant/Bookkeeper': 0.5,
  'Marketing/Social Media': 0.6,
  'Virtual Assistant': 0.5,
  'Trades/Construction': 2.0,
  'Other': 0.8,
};

/* ---- Formatting helpers ---- */

function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

function formatCurrencyFull(value: number): string {
  return new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

/* ---- Insurance result type ---- */

interface InsuranceEstimate {
  type: string;
  description: string;
  annualCost: number;
  monthlyCost: number;
  priority: Priority;
  recommended: boolean;
  icon: string;
}

interface CoverageGap {
  label: string;
  score: number; // 0-100
  color: string;
}

/* ---- Marginal tax rate helper (2025-26 ATO rates) ---- */

function getMarginalRate(income: number): number {
  if (income <= 18200) return 0;
  if (income <= 45000) return 0.16;
  if (income <= 135000) return 0.30;
  if (income <= 190000) return 0.37;
  return 0.45;
}

function getEffectiveTaxRate(income: number): number {
  // Marginal rate + 2% Medicare levy
  return getMarginalRate(income) + 0.02;
}

/* ---- Revenue slider steps ---- */

const REVENUE_STEPS = [
  30000, 40000, 50000, 60000, 70000, 80000, 90000, 100000, 120000, 140000,
  160000, 180000, 200000, 250000, 300000, 350000, 400000, 450000, 500000,
];

function getRevenueFromSlider(index: number): number {
  return REVENUE_STEPS[Math.min(index, REVENUE_STEPS.length - 1)];
}

/* ---- Main component ---- */

export default function InsuranceCostEstimator() {
  const [industry, setIndustry] = useState<Industry>('Web Developer');
  const [revenueIndex, setRevenueIndex] = useState(7); // $100K default
  const [employees, setEmployees] = useState(0);
  const [workFromHome, setWorkFromHome] = useState(true);
  const [handlesClientData, setHandlesClientData] = useState(true);
  const [clientType, setClientType] = useState<ClientType>('small_business');
  const [copied, setCopied] = useState(false);

  const revenue = getRevenueFromSlider(revenueIndex);

  /* ---- Calculate estimates ---- */

  const estimates = useMemo((): InsuranceEstimate[] => {
    const piMultiplier = INDUSTRY_PI_MULTIPLIER[industry];
    const wcMultiplier = INDUSTRY_WC_MULTIPLIER[industry];
    const revenueUnit = revenue / 100000;

    // Professional Indemnity
    const piBase = 350;
    const piRevenue = revenueUnit * 150;
    const piCost = Math.round((piBase + piRevenue) * piMultiplier);
    const piPriority: Priority =
      industry === 'Virtual Assistant' && clientType === 'individuals'
        ? 'Consider'
        : clientType === 'enterprise_government' || ['Consultant', 'Accountant/Bookkeeper', 'Web Developer'].includes(industry)
          ? 'Must Have'
          : 'Strongly Recommended';

    // Public Liability
    const plBase = 250;
    const plEmployees = employees * 100;
    const plSites = !workFromHome ? 150 : 0;
    const plCost = Math.round(plBase + plEmployees + plSites);
    const plPriority: Priority =
      !workFromHome || industry === 'Trades/Construction' || industry === 'Photographer'
        ? 'Must Have'
        : employees > 0
          ? 'Strongly Recommended'
          : 'Consider';

    // Cyber Liability
    const cyberBase = 400;
    const cyberData = handlesClientData ? 300 : 0;
    const cyberEnterprise = clientType === 'enterprise_government' ? 200 : 0;
    const cyberRevenue = revenueUnit * 100;
    const cyberCost = Math.round(cyberBase + cyberData + cyberEnterprise + cyberRevenue);
    const cyberPriority: Priority =
      handlesClientData && (clientType === 'enterprise_government' || ['Web Developer', 'Accountant/Bookkeeper'].includes(industry))
        ? 'Must Have'
        : handlesClientData
          ? 'Strongly Recommended'
          : 'Consider';

    // Income Protection
    const ipCost = Math.round(revenue * 0.02);
    const ipPriority: Priority = revenue > 50000 ? 'Strongly Recommended' : 'Consider';

    // Business Equipment
    const eqCost = workFromHome ? 250 : 400;
    const eqPriority: Priority =
      industry === 'Photographer' || industry === 'Trades/Construction'
        ? 'Strongly Recommended'
        : 'Consider';

    // Workers Compensation
    const wcCost = employees > 0 ? Math.round(employees * 800 * wcMultiplier) : 0;
    const wcPriority: Priority = employees > 0 ? 'Must Have' : 'Not Needed';

    return [
      {
        type: 'Professional Indemnity',
        description: 'Covers claims of negligence, errors, omissions, or bad advice that cause a client financial loss.',
        annualCost: piCost,
        monthlyCost: Math.round(piCost / 12),
        priority: piPriority,
        recommended: piPriority === 'Must Have' || piPriority === 'Strongly Recommended',
        icon: 'shield',
      },
      {
        type: 'Public Liability',
        description: 'Covers third-party injury or property damage caused by your business activities.',
        annualCost: plCost,
        monthlyCost: Math.round(plCost / 12),
        priority: plPriority,
        recommended: plPriority === 'Must Have' || plPriority === 'Strongly Recommended',
        icon: 'users',
      },
      {
        type: 'Cyber Liability',
        description: 'Covers data breaches, hacking, ransomware, and privacy violations affecting your business or clients.',
        annualCost: cyberCost,
        monthlyCost: Math.round(cyberCost / 12),
        priority: cyberPriority,
        recommended: cyberPriority === 'Must Have' || cyberPriority === 'Strongly Recommended',
        icon: 'lock',
      },
      {
        type: 'Income Protection',
        description: 'Covers lost income if you can\'t work due to illness or injury. Tax deductible for self-employed.',
        annualCost: ipCost,
        monthlyCost: Math.round(ipCost / 12),
        priority: ipPriority,
        recommended: ipPriority === 'Strongly Recommended',
        icon: 'heart',
      },
      {
        type: 'Business Equipment',
        description: 'Covers your laptop, camera, tools, and other work equipment against theft, damage, and loss.',
        annualCost: eqCost,
        monthlyCost: Math.round(eqCost / 12),
        priority: eqPriority,
        recommended: eqPriority === 'Strongly Recommended',
        icon: 'laptop',
      },
      {
        type: 'Workers Compensation',
        description: 'Legally required if you have employees. Varies by state and industry risk level.',
        annualCost: wcCost,
        monthlyCost: Math.round(wcCost / 12),
        priority: wcPriority,
        recommended: wcPriority === 'Must Have',
        icon: 'hardhat',
      },
    ];
  }, [industry, revenue, employees, workFromHome, handlesClientData, clientType]);

  /* ---- Summary calculations ---- */

  const summary = useMemo(() => {
    const totalAnnual = estimates.reduce((sum, e) => sum + e.annualCost, 0);
    const recommendedAnnual = estimates
      .filter((e) => e.priority !== 'Not Needed')
      .reduce((sum, e) => sum + e.annualCost, 0);
    const mustHaveAnnual = estimates
      .filter((e) => e.priority === 'Must Have' || e.priority === 'Strongly Recommended')
      .reduce((sum, e) => sum + e.annualCost, 0);
    const taxRate = getEffectiveTaxRate(revenue);
    const taxSaving = Math.round(totalAnnual * taxRate);
    const afterTaxCost = totalAnnual - taxSaving;

    return {
      totalAnnual,
      totalMonthly: Math.round(totalAnnual / 12),
      recommendedAnnual,
      mustHaveAnnual,
      taxRate,
      taxSaving,
      afterTaxCost,
      afterTaxMonthly: Math.round(afterTaxCost / 12),
    };
  }, [estimates, revenue]);

  /* ---- Coverage gap risk score ---- */

  const coverageGaps = useMemo((): CoverageGap[] => {
    const gaps: CoverageGap[] = [];

    // PI coverage
    const piEst = estimates.find((e) => e.type === 'Professional Indemnity')!;
    const piScore = piEst.priority === 'Must Have' ? 95 : piEst.priority === 'Strongly Recommended' ? 75 : 40;
    gaps.push({
      label: 'Professional Liability',
      score: piScore,
      color: piScore >= 80 ? 'from-rose-500 to-red-400' : piScore >= 50 ? 'from-amber-500 to-orange-400' : 'from-emerald-500 to-teal-400',
    });

    // PL coverage
    const plEst = estimates.find((e) => e.type === 'Public Liability')!;
    const plScore = plEst.priority === 'Must Have' ? 90 : plEst.priority === 'Strongly Recommended' ? 65 : 30;
    gaps.push({
      label: 'Physical Liability',
      score: plScore,
      color: plScore >= 80 ? 'from-rose-500 to-red-400' : plScore >= 50 ? 'from-amber-500 to-orange-400' : 'from-emerald-500 to-teal-400',
    });

    // Cyber risk
    const cyberEst = estimates.find((e) => e.type === 'Cyber Liability')!;
    const cyberScore = cyberEst.priority === 'Must Have' ? 90 : cyberEst.priority === 'Strongly Recommended' ? 70 : 25;
    gaps.push({
      label: 'Cyber Risk',
      score: cyberScore,
      color: cyberScore >= 80 ? 'from-rose-500 to-red-400' : cyberScore >= 50 ? 'from-amber-500 to-orange-400' : 'from-emerald-500 to-teal-400',
    });

    // Income risk
    const ipScore = revenue > 100000 ? 85 : revenue > 50000 ? 60 : 35;
    gaps.push({
      label: 'Income Risk',
      score: ipScore,
      color: ipScore >= 80 ? 'from-rose-500 to-red-400' : ipScore >= 50 ? 'from-amber-500 to-orange-400' : 'from-emerald-500 to-teal-400',
    });

    // Compliance risk (workers comp)
    if (employees > 0) {
      gaps.push({
        label: 'Compliance (Workers Comp)',
        score: 95,
        color: 'from-rose-500 to-red-400',
      });
    }

    return gaps;
  }, [estimates, revenue, employees]);

  /* ---- Copy to clipboard ---- */

  const handleCopy = useCallback(() => {
    const lines = [
      'FREELANCE INSURANCE COST ESTIMATE',
      '==================================',
      '',
      `Profile: ${industry} | Revenue: ${formatCurrency(revenue)}/yr | Employees: ${employees}`,
      `Work Location: ${workFromHome ? 'Work from Home' : 'Office / Client Sites'}`,
      `Handles Client Data: ${handlesClientData ? 'Yes' : 'No'} | Client Type: ${CLIENT_TYPES.find((c) => c.value === clientType)?.label}`,
      '',
      'INSURANCE ESTIMATES:',
      ...estimates
        .filter((e) => e.priority !== 'Not Needed')
        .map(
          (e) =>
            `  ${e.type}: ${formatCurrency(e.annualCost)}/yr (${formatCurrency(e.monthlyCost)}/mo) — ${e.priority}`
        ),
      '',
      'SUMMARY:',
      `  Total Annual Cost: ${formatCurrency(summary.totalAnnual)}`,
      `  Total Monthly Cost: ${formatCurrency(summary.totalMonthly)}`,
      `  Tax Deduction Saving: ${formatCurrency(summary.taxSaving)} (at ${(summary.taxRate * 100).toFixed(0)}% marginal rate)`,
      `  After-Tax Annual Cost: ${formatCurrency(summary.afterTaxCost)}`,
      '',
      'DISCLAIMER: These are estimates only. Actual premiums vary by provider, claims history,',
      'and specific circumstances. Get quotes from licensed insurance providers for accurate pricing.',
      '',
      'Generated by InvoiceFlow — invoiceflow.au/tools/insurance-cost-estimator',
    ];
    navigator.clipboard.writeText(lines.join('\n'));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [estimates, summary, industry, revenue, employees, workFromHome, handlesClientData, clientType]);

  /* ---- Select styling ---- */

  const selectStyle = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2394a3b8'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 12px center',
    backgroundSize: '16px',
  };

  return (
    <div className="space-y-8">
      {/* Input Section */}
      <div className="glass rounded-2xl p-6">
        <h3 className="text-lg font-bold text-white heading-font mb-6">Your Business Profile</h3>

        <div className="space-y-6">
          {/* Industry */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Industry / Profession
            </label>
            <select
              value={industry}
              onChange={(e) => setIndustry(e.target.value as Industry)}
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-teal-500 focus:outline-none transition-colors text-sm appearance-none cursor-pointer"
              style={selectStyle}
            >
              {INDUSTRIES.map((ind) => (
                <option key={ind} value={ind} className="bg-slate-800 text-white">
                  {ind}
                </option>
              ))}
            </select>
          </div>

          {/* Annual Revenue Slider */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Annual Revenue
            </label>
            <div className="flex items-center gap-4">
              <input
                type="range"
                min={0}
                max={REVENUE_STEPS.length - 1}
                value={revenueIndex}
                onChange={(e) => setRevenueIndex(parseInt(e.target.value))}
                className="flex-1 h-2 rounded-full appearance-none cursor-pointer accent-teal-500"
                style={{
                  background: `linear-gradient(to right, rgb(20 184 166) 0%, rgb(20 184 166) ${(revenueIndex / (REVENUE_STEPS.length - 1)) * 100}%, rgba(255,255,255,0.1) ${(revenueIndex / (REVENUE_STEPS.length - 1)) * 100}%, rgba(255,255,255,0.1) 100%)`,
                }}
              />
              <span className="text-lg font-bold text-white w-28 text-right tabular-nums">
                {formatCurrency(revenue)}
              </span>
            </div>
            <div className="flex justify-between text-xs text-slate-600 mt-1">
              <span>$30K</span>
              <span>$500K</span>
            </div>
          </div>

          {/* Employees */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Number of Employees
            </label>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setEmployees(Math.max(0, employees - 1))}
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 hover:border-teal-500/30 text-white font-bold transition-all flex items-center justify-center"
              >
                -
              </button>
              <span className="text-lg font-bold text-white w-8 text-center tabular-nums">
                {employees}
              </span>
              <button
                onClick={() => setEmployees(Math.min(10, employees + 1))}
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 hover:border-teal-500/30 text-white font-bold transition-all flex items-center justify-center"
              >
                +
              </button>
              <span className="text-xs text-slate-500 ml-2">
                {employees === 0 ? 'Solo freelancer' : employees === 1 ? '1 employee' : `${employees} employees`}
              </span>
            </div>
          </div>

          {/* Toggles Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Work Location Toggle */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <label className="flex items-center justify-between cursor-pointer">
                <div>
                  <p className="text-sm font-medium text-white">Work from Home</p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {workFromHome ? 'Primarily work from home' : 'Office or client sites'}
                  </p>
                </div>
                <button
                  onClick={() => setWorkFromHome(!workFromHome)}
                  className={`relative w-12 h-7 rounded-full transition-colors ${workFromHome ? 'bg-teal-500' : 'bg-white/10'}`}
                  role="switch"
                  aria-checked={workFromHome}
                >
                  <span
                    className={`absolute top-0.5 left-0.5 w-6 h-6 rounded-full bg-white shadow transition-transform ${workFromHome ? 'translate-x-5' : 'translate-x-0'}`}
                  />
                </button>
              </label>
            </div>

            {/* Handle Client Data Toggle */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <label className="flex items-center justify-between cursor-pointer">
                <div>
                  <p className="text-sm font-medium text-white">Handle Client Data</p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {handlesClientData ? 'Store or process client data' : 'No client data handling'}
                  </p>
                </div>
                <button
                  onClick={() => setHandlesClientData(!handlesClientData)}
                  className={`relative w-12 h-7 rounded-full transition-colors ${handlesClientData ? 'bg-teal-500' : 'bg-white/10'}`}
                  role="switch"
                  aria-checked={handlesClientData}
                >
                  <span
                    className={`absolute top-0.5 left-0.5 w-6 h-6 rounded-full bg-white shadow transition-transform ${handlesClientData ? 'translate-x-5' : 'translate-x-0'}`}
                  />
                </button>
              </label>
            </div>
          </div>

          {/* Client Type */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Client Type</label>
            <div className="grid grid-cols-3 gap-3">
              {CLIENT_TYPES.map((ct) => (
                <button
                  key={ct.value}
                  onClick={() => setClientType(ct.value)}
                  className={`px-3 py-3 rounded-lg border text-sm font-medium transition-all ${
                    clientType === ct.value
                      ? 'bg-teal-500/10 border-teal-500/30 text-teal-400'
                      : 'bg-white/5 border-white/10 text-slate-400 hover:border-white/20 hover:text-white'
                  }`}
                >
                  {ct.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="glass rounded-xl p-4 text-center">
          <p className="text-xs text-slate-400 mb-1">Total Annual Cost</p>
          <p className="text-xl font-bold text-white">{formatCurrency(summary.totalAnnual)}</p>
          <p className="text-xs text-slate-500 mt-0.5">{formatCurrency(summary.totalMonthly)}/mo</p>
        </div>
        <div className="glass rounded-xl p-4 text-center">
          <p className="text-xs text-slate-400 mb-1">Tax Deduction</p>
          <p className="text-xl font-bold text-emerald-400">-{formatCurrency(summary.taxSaving)}</p>
          <p className="text-xs text-slate-500 mt-0.5">at {(summary.taxRate * 100).toFixed(0)}% marginal rate</p>
        </div>
        <div className="glass rounded-xl p-4 text-center">
          <p className="text-xs text-slate-400 mb-1">After-Tax Cost</p>
          <p className="text-xl font-bold text-teal-400">{formatCurrency(summary.afterTaxCost)}</p>
          <p className="text-xs text-slate-500 mt-0.5">{formatCurrency(summary.afterTaxMonthly)}/mo</p>
        </div>
        <div className="glass rounded-xl p-4 text-center">
          <p className="text-xs text-slate-400 mb-1">% of Revenue</p>
          <p className="text-xl font-bold text-white">
            {((summary.totalAnnual / revenue) * 100).toFixed(1)}%
          </p>
          <p className="text-xs text-slate-500 mt-0.5">
            {((summary.afterTaxCost / revenue) * 100).toFixed(1)}% after tax
          </p>
        </div>
      </div>

      {/* Insurance Cards */}
      <div className="glass rounded-2xl p-6">
        <h3 className="text-lg font-bold text-white heading-font mb-4">Insurance Breakdown</h3>
        <div className="space-y-4">
          {estimates.map((est) => (
            <div
              key={est.type}
              className={`bg-white/5 border rounded-xl p-4 sm:p-5 transition-all ${
                est.priority === 'Not Needed'
                  ? 'border-white/5 opacity-50'
                  : est.priority === 'Must Have'
                    ? 'border-rose-500/20'
                    : 'border-white/10'
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                    <InsuranceIcon type={est.icon} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{est.type}</h4>
                    <p className="text-xs text-slate-500 mt-0.5 max-w-md">{est.description}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0 ml-4">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${getPriorityBadgeClasses(est.priority)}`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${getPriorityDotColor(est.priority)}`} />
                    {est.priority}
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-3">
                <div>
                  <p className="text-xs text-slate-500">Annual Cost</p>
                  <p className={`text-sm font-bold ${est.priority === 'Not Needed' ? 'text-slate-600' : 'text-white'}`}>
                    {est.annualCost === 0 ? 'N/A' : formatCurrency(est.annualCost)}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-slate-500">Monthly Cost</p>
                  <p className={`text-sm font-bold ${est.priority === 'Not Needed' ? 'text-slate-600' : 'text-white'}`}>
                    {est.monthlyCost === 0 ? 'N/A' : formatCurrency(est.monthlyCost)}
                  </p>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <p className="text-xs text-slate-500">Tax Saving</p>
                  <p className="text-sm font-bold text-emerald-400">
                    {est.annualCost === 0 ? 'N/A' : formatCurrencyFull(est.annualCost * summary.taxRate)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Risk Score Visualization */}
      <div className="glass rounded-2xl p-6">
        <h3 className="text-lg font-bold text-white heading-font mb-2">Coverage Risk Assessment</h3>
        <p className="text-sm text-slate-400 mb-4">
          How exposed your business is without each type of coverage. Higher bars mean greater risk
          if uninsured.
        </p>
        <div className="space-y-3">
          {coverageGaps.map((gap) => (
            <div key={gap.label} className="flex items-center gap-4">
              <span className="text-sm text-slate-300 w-40 sm:w-48 shrink-0 truncate" title={gap.label}>
                {gap.label}
              </span>
              <div className="flex-1 bg-white/5 rounded-full h-7 overflow-hidden relative">
                <div
                  className={`h-full rounded-full flex items-center justify-end pr-3 bg-gradient-to-r ${gap.color}`}
                  style={{ width: `${Math.max(gap.score, 12)}%` }}
                >
                  <span className="text-xs font-medium text-white whitespace-nowrap">
                    {gap.score >= 80 ? 'High' : gap.score >= 50 ? 'Medium' : 'Low'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-4 mt-4 text-xs text-slate-500">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-sm bg-gradient-to-r from-rose-500 to-red-400" />
            <span>High Risk</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-sm bg-gradient-to-r from-amber-500 to-orange-400" />
            <span>Medium Risk</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-sm bg-gradient-to-r from-emerald-500 to-teal-400" />
            <span>Low Risk</span>
          </div>
        </div>
      </div>

      {/* Tax Deduction Summary */}
      <div className="glass rounded-2xl p-6 border border-teal-500/20 bg-teal-500/5">
        <h3 className="text-lg font-bold text-white heading-font mb-4">
          <span className="text-teal-400">Tax Deduction</span> Summary
        </h3>
        <div className="bg-white/5 rounded-xl p-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-300">Total insurance premiums</span>
              <span className="text-sm font-bold text-white">{formatCurrency(summary.totalAnnual)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-300">Your marginal tax rate (inc. Medicare)</span>
              <span className="text-sm font-bold text-white">{(summary.taxRate * 100).toFixed(0)}%</span>
            </div>
            <div className="border-t border-white/10 pt-3 flex items-center justify-between">
              <span className="text-sm text-slate-300">Tax deduction saving</span>
              <span className="text-sm font-bold text-emerald-400">-{formatCurrency(summary.taxSaving)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-white">Your real cost after tax</span>
              <span className="text-sm font-bold text-teal-400">{formatCurrency(summary.afterTaxCost)}/yr</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-500">That&apos;s just</span>
              <span className="text-xs font-bold text-teal-400">
                {formatCurrencyFull(summary.afterTaxCost / 365)} per day
              </span>
            </div>
          </div>
        </div>
        <p className="text-xs text-slate-500 mt-3">
          Under Section 8-1 ITAA 1997, all business insurance premiums are tax deductible. Income
          protection is also deductible for self-employed under Section 295-460. Consult a registered
          tax agent for advice specific to your situation.
        </p>
      </div>

      {/* Disclaimer */}
      <div className="bg-amber-500/5 border border-amber-500/20 rounded-xl p-4">
        <p className="text-xs text-amber-300/80">
          <strong className="text-amber-300">Disclaimer:</strong> These are estimates only. Actual
          premiums vary by provider, claims history, and specific circumstances. Get quotes from
          licensed insurance providers for accurate pricing. This tool does not constitute financial
          or insurance advice.
        </p>
      </div>

      {/* Cross-links */}
      <div className="glass rounded-2xl p-6">
        <h3 className="text-lg font-bold text-white heading-font mb-4">Related Tools</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <a
            href="/tools/net-income-calculator"
            className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-500/30 rounded-xl p-4 transition-all group"
          >
            <p className="text-white font-medium text-sm group-hover:text-teal-400 transition-colors">
              Net Income Calculator
            </p>
            <p className="text-xs text-slate-500 mt-1">Calculate your take-home pay after tax</p>
          </a>
          <a
            href="/tools/expense-deduction-finder"
            className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-500/30 rounded-xl p-4 transition-all group"
          >
            <p className="text-white font-medium text-sm group-hover:text-teal-400 transition-colors">
              Expense Deduction Calculator
            </p>
            <p className="text-xs text-slate-500 mt-1">Find tax deductions you might be missing</p>
          </a>
          <a
            href="/tools/break-even-calculator"
            className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-500/30 rounded-xl p-4 transition-all group"
          >
            <p className="text-white font-medium text-sm group-hover:text-teal-400 transition-colors">
              Break-Even Calculator
            </p>
            <p className="text-xs text-slate-500 mt-1">How many projects to cover your costs?</p>
          </a>
          <a
            href="/tools/project-roi-calculator"
            className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-500/30 rounded-xl p-4 transition-all group"
          >
            <p className="text-white font-medium text-sm group-hover:text-teal-400 transition-colors">
              Project ROI Calculator
            </p>
            <p className="text-xs text-slate-500 mt-1">Measure real profitability per project</p>
          </a>
        </div>
      </div>

      {/* Copy Button */}
      <div className="flex justify-center">
        <button
          onClick={handleCopy}
          className="px-6 py-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-500/30 transition-all text-white font-medium"
        >
          {copied ? 'Copied!' : 'Copy Insurance Estimate to Clipboard'}
        </button>
      </div>
    </div>
  );
}

/* ---- Icon components ---- */

function InsuranceIcon({ type }: { type: string }) {
  switch (type) {
    case 'shield':
      return (
        <svg className="w-5 h-5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      );
    case 'users':
      return (
        <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      );
    case 'lock':
      return (
        <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      );
    case 'heart':
      return (
        <svg className="w-5 h-5 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      );
    case 'laptop':
      return (
        <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
    case 'hardhat':
      return (
        <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      );
    default:
      return (
        <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      );
  }
}

/* ---- Helper functions ---- */

function getPriorityBadgeClasses(priority: Priority): string {
  switch (priority) {
    case 'Must Have':
      return 'bg-rose-500/10 border border-rose-500/20 text-rose-400';
    case 'Strongly Recommended':
      return 'bg-amber-500/10 border border-amber-500/20 text-amber-400';
    case 'Consider':
      return 'bg-blue-500/10 border border-blue-500/20 text-blue-400';
    case 'Not Needed':
      return 'bg-white/5 border border-white/10 text-slate-500';
  }
}

function getPriorityDotColor(priority: Priority): string {
  switch (priority) {
    case 'Must Have':
      return 'bg-rose-400';
    case 'Strongly Recommended':
      return 'bg-amber-400';
    case 'Consider':
      return 'bg-blue-400';
    case 'Not Needed':
      return 'bg-slate-500';
  }
}
