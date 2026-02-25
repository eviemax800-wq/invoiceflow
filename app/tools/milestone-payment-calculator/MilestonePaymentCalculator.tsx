'use client';

import { useState, useMemo, useCallback } from 'react';

/* ---- Helpers ---- */

function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

function formatDate(date: Date): string {
  return date.toLocaleDateString('en-AU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

function formatShortDate(date: Date): string {
  return date.toLocaleDateString('en-AU', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

function getTodayString(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function addDays(date: Date, days: number): Date {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

function getPaymentTermsDays(terms: PaymentTerms): number {
  switch (terms) {
    case 'net7': return 7;
    case 'net14': return 14;
    case 'net30': return 30;
  }
}

/* ---- Types ---- */

type PaymentTerms = 'net7' | 'net14' | 'net30';

interface Milestone {
  name: string;
  percentage: number;
  description: string;
  estimatedDate: string;
}

interface MilestoneResult {
  name: string;
  description: string;
  percentage: number;
  amountExGst: number;
  gstAmount: number;
  amountIncGst: number;
  milestoneDate: Date;
  dueDate: Date;
  cumulativeExGst: number;
  cumulativeIncGst: number;
}

interface Preset {
  label: string;
  splits: number[];
  names: string[];
}

const PRESETS: Preset[] = [
  {
    label: '50/50 Split',
    splits: [50, 50],
    names: ['Deposit', 'Final Delivery'],
  },
  {
    label: 'Standard 3 Milestones (30/30/40)',
    splits: [30, 30, 40],
    names: ['Deposit', 'Phase 1 Complete', 'Final Delivery'],
  },
  {
    label: 'Equal Quarters',
    splits: [25, 25, 25, 25],
    names: ['Deposit', 'Phase 1 Complete', 'Phase 2 Complete', 'Final Delivery'],
  },
  {
    label: 'Front-Loaded (40/30/30)',
    splits: [40, 30, 30],
    names: ['Deposit', 'Phase 1 Complete', 'Final Delivery'],
  },
];

function getDefaultMilestoneNames(count: number): string[] {
  const names: string[] = ['Deposit'];
  for (let i = 1; i < count - 1; i++) {
    names.push(`Phase ${i}`);
  }
  if (count > 1) {
    names.push('Final Delivery');
  }
  return names;
}

function getDefaultPercentages(count: number): number[] {
  if (count === 2) return [50, 50];
  if (count === 3) return [30, 30, 40];
  if (count === 4) return [25, 25, 25, 25];
  // For 5+, distribute evenly with remainder on last
  const base = Math.floor(100 / count);
  const percentages = Array(count).fill(base);
  percentages[count - 1] = 100 - base * (count - 1);
  return percentages;
}

function getEvenlySpacedDates(startDate: string, count: number): string[] {
  if (!startDate || count < 1) return Array(count).fill('');
  const start = new Date(startDate + 'T00:00:00');
  const dates: string[] = [startDate];

  // Total project span: assume ~2 weeks per milestone after the first
  const totalDays = (count - 1) * 14;
  const interval = count > 1 ? totalDays / (count - 1) : 0;

  for (let i = 1; i < count; i++) {
    const d = addDays(start, Math.round(interval * i));
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    dates.push(`${y}-${m}-${day}`);
  }
  return dates;
}

/* ---- Component ---- */

export default function MilestonePaymentCalculator() {
  const [projectName, setProjectName] = useState('');
  const [totalValue, setTotalValue] = useState('10000');
  const [milestoneCount, setMilestoneCount] = useState(3);
  const [includeGst, setIncludeGst] = useState(true);
  const [startDate, setStartDate] = useState(getTodayString());
  const [paymentTerms, setPaymentTerms] = useState<PaymentTerms>('net7');
  const [milestones, setMilestones] = useState<Milestone[]>(() => {
    const names = getDefaultMilestoneNames(3);
    const percentages = getDefaultPercentages(3);
    const dates = getEvenlySpacedDates(getTodayString(), 3);
    return names.map((name, i) => ({
      name,
      percentage: percentages[i],
      description: '',
      estimatedDate: dates[i],
    }));
  });
  const [copied, setCopied] = useState(false);

  // When milestone count changes, rebuild the milestones array
  const handleMilestoneCountChange = useCallback((newCount: number) => {
    setMilestoneCount(newCount);
    const names = getDefaultMilestoneNames(newCount);
    const percentages = getDefaultPercentages(newCount);
    const dates = getEvenlySpacedDates(startDate, newCount);
    setMilestones(
      names.map((name, i) => ({
        name,
        percentage: percentages[i],
        description: '',
        estimatedDate: dates[i],
      }))
    );
  }, [startDate]);

  // Apply a preset
  const applyPreset = useCallback((preset: Preset) => {
    const count = preset.splits.length;
    setMilestoneCount(count);
    const dates = getEvenlySpacedDates(startDate, count);
    setMilestones(
      preset.splits.map((pct, i) => ({
        name: preset.names[i] || `Phase ${i}`,
        percentage: pct,
        description: '',
        estimatedDate: dates[i],
      }))
    );
  }, [startDate]);

  // Update a single milestone field
  const updateMilestone = (index: number, field: keyof Milestone, value: string | number) => {
    setMilestones((prev) =>
      prev.map((m, i) => (i === index ? { ...m, [field]: value } : m))
    );
  };

  // Calculate the percentage sum
  const percentageSum = useMemo(() => {
    return milestones.reduce((sum, m) => sum + m.percentage, 0);
  }, [milestones]);

  const isPercentageValid = percentageSum === 100;

  // Calculate results
  const results = useMemo<MilestoneResult[]>(() => {
    const total = parseFloat(totalValue) || 0;
    const termsDays = getPaymentTermsDays(paymentTerms);
    let cumulativeExGst = 0;
    let cumulativeIncGst = 0;

    return milestones.map((m) => {
      const fraction = m.percentage / 100;
      const amountExGst = total * fraction;
      const gstAmount = includeGst ? amountExGst * 0.1 : 0;
      const amountIncGst = amountExGst + gstAmount;
      cumulativeExGst += amountExGst;
      cumulativeIncGst += amountIncGst;

      const milestoneDate = m.estimatedDate
        ? new Date(m.estimatedDate + 'T00:00:00')
        : new Date();
      const dueDate = addDays(milestoneDate, termsDays);

      return {
        name: m.name,
        description: m.description,
        percentage: m.percentage,
        amountExGst,
        gstAmount,
        amountIncGst,
        milestoneDate,
        dueDate,
        cumulativeExGst,
        cumulativeIncGst,
      };
    });
  }, [milestones, totalValue, includeGst, paymentTerms]);

  // Summary totals
  const summary = useMemo(() => {
    const total = parseFloat(totalValue) || 0;
    const gst = includeGst ? total * 0.1 : 0;
    return {
      totalExGst: total,
      totalGst: gst,
      totalIncGst: total + gst,
    };
  }, [totalValue, includeGst]);

  // Reset everything
  const handleReset = () => {
    setProjectName('');
    setTotalValue('10000');
    setMilestoneCount(3);
    setIncludeGst(true);
    setStartDate(getTodayString());
    setPaymentTerms('net7');
    const names = getDefaultMilestoneNames(3);
    const percentages = getDefaultPercentages(3);
    const dates = getEvenlySpacedDates(getTodayString(), 3);
    setMilestones(
      names.map((name, i) => ({
        name,
        percentage: percentages[i],
        description: '',
        estimatedDate: dates[i],
      }))
    );
  };

  // Copy formatted schedule
  const handleCopy = () => {
    const divider = '════════════════════════════════════════════════════════';
    const sectionDivider = '────────────────────────────────────────────────────────';
    const lines: string[] = [];

    lines.push(divider);
    lines.push('  MILESTONE PAYMENT SCHEDULE');
    lines.push(divider);
    lines.push('');
    if (projectName) {
      lines.push(`Project:           ${projectName}`);
    }
    lines.push(`Total Value:       ${formatCurrency(summary.totalExGst)} (ex. GST)`);
    if (includeGst) {
      lines.push(`GST (10%):         ${formatCurrency(summary.totalGst)}`);
      lines.push(`Total (inc. GST):  ${formatCurrency(summary.totalIncGst)}`);
    }
    lines.push(`Payment Terms:     ${paymentTerms === 'net7' ? 'Net 7' : paymentTerms === 'net14' ? 'Net 14' : 'Net 30'}`);
    lines.push(`Milestones:        ${milestoneCount}`);
    lines.push('');
    lines.push('PAYMENT SCHEDULE');
    lines.push(sectionDivider);
    lines.push('');

    results.forEach((r, i) => {
      lines.push(`${i + 1}. ${r.name} (${r.percentage}%)`);
      if (r.description) {
        lines.push(`   ${r.description}`);
      }
      lines.push(`   Milestone Date:  ${formatDate(r.milestoneDate)}`);
      lines.push(`   Invoice Due:     ${formatDate(r.dueDate)}`);
      if (includeGst) {
        lines.push(`   Ex. GST:         ${formatCurrency(r.amountExGst)}`);
        lines.push(`   GST:             ${formatCurrency(r.gstAmount)}`);
        lines.push(`   Inc. GST:        ${formatCurrency(r.amountIncGst)}`);
      } else {
        lines.push(`   Amount:          ${formatCurrency(r.amountExGst)}`);
      }
      lines.push(`   Running Total:   ${formatCurrency(includeGst ? r.cumulativeIncGst : r.cumulativeExGst)}`);
      lines.push('');
    });

    lines.push('SUMMARY');
    lines.push(sectionDivider);
    lines.push(`Total (ex. GST):   ${formatCurrency(summary.totalExGst)}`);
    if (includeGst) {
      lines.push(`Total GST:         ${formatCurrency(summary.totalGst)}`);
      lines.push(`Total (inc. GST):  ${formatCurrency(summary.totalIncGst)}`);
    }
    lines.push('');
    lines.push(divider);
    lines.push('');
    lines.push('Generated by InvoiceFlow — invoiceflow.au/tools/milestone-payment-calculator');

    navigator.clipboard.writeText(lines.join('\n')).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const inputClass =
    'w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500/50 transition-all text-sm';
  const labelClass = 'block text-xs font-medium text-slate-400 mb-1.5';

  return (
    <div className="space-y-8">
      {/* Project Details */}
      <div className="glass rounded-2xl p-6 sm:p-8 space-y-6">
        <h2 className="text-xl font-bold text-white heading-font">Project Details</h2>
        <p className="text-sm text-slate-400">
          Enter your project information to generate a structured milestone payment schedule
          with automatic GST calculations and due dates.
        </p>

        <div className="grid sm:grid-cols-2 gap-5">
          <div className="sm:col-span-2">
            <label className={labelClass}>Project Name</label>
            <input
              type="text"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              className={inputClass}
              placeholder="e.g. Website Redesign for Acme Co"
            />
          </div>
          <div>
            <label className={labelClass}>Total Project Value (AUD)</label>
            <input
              type="number"
              value={totalValue}
              onChange={(e) => setTotalValue(e.target.value)}
              className={inputClass}
              placeholder="10000"
              min="0"
              step="100"
            />
          </div>
          <div>
            <label className={labelClass}>Start Date</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className={inputClass}
            />
          </div>
        </div>

        {/* Number of Milestones */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className="text-xs font-medium text-slate-400">Number of Milestones</label>
            <span className="text-sm font-bold text-teal-400">{milestoneCount}</span>
          </div>
          <input
            type="range"
            min="2"
            max="8"
            step="1"
            value={milestoneCount}
            onChange={(e) => handleMilestoneCountChange(parseInt(e.target.value))}
            className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer accent-teal-500 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-teal-400 [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:shadow-teal-400/30 [&::-webkit-slider-thumb]:cursor-pointer"
          />
          <div className="flex justify-between text-xs text-slate-500 mt-1">
            <span>2</span>
            <span>4</span>
            <span>6</span>
            <span>8</span>
          </div>
        </div>

        {/* Payment Terms & GST */}
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className={labelClass}>Payment Terms</label>
            <div className="flex gap-2">
              {(['net7', 'net14', 'net30'] as const).map((term) => (
                <button
                  key={term}
                  onClick={() => setPaymentTerms(term)}
                  className={`flex-1 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    paymentTerms === term
                      ? 'bg-gradient-to-r from-teal-500/30 to-blue-500/30 border border-teal-500/40 text-teal-400'
                      : 'bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {term === 'net7' ? 'Net 7' : term === 'net14' ? 'Net 14' : 'Net 30'}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center">
            <label className="flex items-center gap-3 cursor-pointer group">
              <div className="relative">
                <input
                  type="checkbox"
                  checked={includeGst}
                  onChange={(e) => setIncludeGst(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-10 h-6 bg-white/10 rounded-full peer-checked:bg-teal-500/60 transition-colors" />
                <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow-sm peer-checked:translate-x-4 transition-transform" />
              </div>
              <div>
                <span className="text-sm font-medium text-white group-hover:text-teal-400 transition-colors">
                  Include GST (10%)
                </span>
                <p className="text-xs text-slate-500">Add 10% GST to each milestone</p>
              </div>
            </label>
          </div>
        </div>

        {/* Quick Presets */}
        <div className="border-t border-white/10 pt-5">
          <p className="text-xs text-slate-500 mb-3">Quick-fill presets:</p>
          <div className="flex flex-wrap gap-2">
            {PRESETS.map((preset) => (
              <button
                key={preset.label}
                onClick={() => applyPreset(preset)}
                className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-400 hover:text-white hover:bg-white/10 hover:border-teal-500/30 transition-all"
              >
                {preset.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Milestone Configuration */}
      <div className="glass rounded-2xl p-6 sm:p-8 space-y-5">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-white heading-font">Milestone Details</h2>
          <div className={`text-sm font-medium px-3 py-1 rounded-full ${
            isPercentageValid
              ? 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-400'
              : 'bg-rose-500/10 border border-rose-500/20 text-rose-400'
          }`}>
            {percentageSum}% / 100%
          </div>
        </div>

        {!isPercentageValid && (
          <div className="bg-rose-500/10 border border-rose-500/20 rounded-xl p-4">
            <p className="text-sm text-rose-400">
              Milestone percentages must sum to 100%. Currently at{' '}
              <strong>{percentageSum}%</strong>. Adjust the percentages below.
            </p>
          </div>
        )}

        <div className="space-y-3">
          {milestones.map((milestone, index) => (
            <div key={index} className="bg-white/5 rounded-xl p-4 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold ${
                    index === 0
                      ? 'bg-gradient-to-br from-teal-400/20 to-blue-500/20 border border-teal-500/30 text-teal-400'
                      : index === milestones.length - 1
                        ? 'bg-gradient-to-br from-blue-400/20 to-purple-500/20 border border-blue-500/30 text-blue-400'
                        : 'bg-white/5 border border-white/10 text-slate-400'
                  }`}>
                    {index + 1}
                  </div>
                  <span className="text-xs text-slate-500 font-medium">
                    {index === 0 ? 'Initial Payment' : index === milestones.length - 1 ? 'Final Payment' : `Milestone ${index}`}
                  </span>
                </div>
                <span className="text-xs text-slate-500">
                  {formatCurrency(results[index]?.amountIncGst || 0)}
                  {includeGst && <span className="text-slate-600"> inc. GST</span>}
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="col-span-2 sm:col-span-1">
                  <label className={labelClass}>Name</label>
                  <input
                    type="text"
                    value={milestone.name}
                    onChange={(e) => updateMilestone(index, 'name', e.target.value)}
                    className={inputClass}
                    placeholder="Milestone name"
                  />
                </div>
                <div>
                  <label className={labelClass}>Percentage (%)</label>
                  <input
                    type="number"
                    value={milestone.percentage || ''}
                    onChange={(e) => updateMilestone(index, 'percentage', Math.max(0, Math.min(100, parseInt(e.target.value) || 0)))}
                    className={inputClass}
                    min="0"
                    max="100"
                    step="5"
                  />
                </div>
                <div>
                  <label className={labelClass}>Estimated Date</label>
                  <input
                    type="date"
                    value={milestone.estimatedDate}
                    onChange={(e) => updateMilestone(index, 'estimatedDate', e.target.value)}
                    className={inputClass}
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label className={labelClass}>Description (optional)</label>
                  <input
                    type="text"
                    value={milestone.description}
                    onChange={(e) => updateMilestone(index, 'description', e.target.value)}
                    className={inputClass}
                    placeholder="e.g. Homepage design approved"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Results */}
      <div className="glass rounded-2xl p-6 sm:p-8 space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-white heading-font">Payment Schedule</h2>
          <div className="flex gap-2">
            <button
              onClick={handleReset}
              className="flex items-center gap-2 text-sm px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white transition-all"
            >
              Reset
            </button>
            <button
              onClick={handleCopy}
              className="flex items-center gap-2 text-sm px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all"
            >
              {copied ? (
                <span className="text-emerald-400">Copied!</span>
              ) : (
                <>Copy Schedule</>
              )}
            </button>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="bg-gradient-to-br from-teal-500/10 to-blue-500/10 border border-teal-500/20 rounded-xl p-4">
            <p className="text-xs text-teal-400/70 uppercase tracking-wide mb-1">Total ex. GST</p>
            <p className="text-lg sm:text-xl font-bold text-white">
              {formatCurrency(summary.totalExGst)}
            </p>
          </div>
          {includeGst && (
            <div className="bg-white/5 rounded-xl p-4">
              <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">Total GST</p>
              <p className="text-lg sm:text-xl font-bold text-teal-400">
                {formatCurrency(summary.totalGst)}
              </p>
            </div>
          )}
          <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-4">
            <p className="text-xs text-blue-400/70 uppercase tracking-wide mb-1">
              {includeGst ? 'Total inc. GST' : 'Total Value'}
            </p>
            <p className="text-lg sm:text-xl font-bold text-white">
              {formatCurrency(summary.totalIncGst)}
            </p>
          </div>
          <div className="bg-white/5 rounded-xl p-4">
            <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">Milestones</p>
            <p className="text-lg sm:text-xl font-bold text-white">{milestoneCount}</p>
            <p className="text-xs text-slate-500 mt-0.5">
              {paymentTerms === 'net7' ? 'Net 7' : paymentTerms === 'net14' ? 'Net 14' : 'Net 30'} terms
            </p>
          </div>
        </div>

        {/* Schedule Table */}
        <div>
          <h3 className="text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wide">
            Full Milestone Schedule
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 px-3 text-slate-400 font-semibold">#</th>
                  <th className="text-left py-3 px-3 text-slate-400 font-semibold">Milestone</th>
                  <th className="text-left py-3 px-3 text-slate-400 font-semibold">%</th>
                  <th className="text-left py-3 px-3 text-slate-400 font-semibold">Milestone Date</th>
                  <th className="text-left py-3 px-3 text-slate-400 font-semibold">Due Date</th>
                  {includeGst && (
                    <>
                      <th className="text-right py-3 px-3 text-slate-400 font-semibold">Ex. GST</th>
                      <th className="text-right py-3 px-3 text-slate-400 font-semibold">GST</th>
                    </>
                  )}
                  <th className="text-right py-3 px-3 text-slate-400 font-semibold">
                    {includeGst ? 'Inc. GST' : 'Amount'}
                  </th>
                  <th className="text-right py-3 px-3 text-slate-400 font-semibold">Running Total</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {results.map((r, idx) => (
                  <tr
                    key={idx}
                    className={
                      idx === 0
                        ? 'bg-teal-500/5'
                        : idx === results.length - 1
                          ? 'bg-blue-500/5'
                          : idx % 2 === 0
                            ? 'bg-white/[0.02]'
                            : ''
                    }
                  >
                    <td className="py-3 px-3">
                      <div
                        className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold ${
                          idx === 0
                            ? 'bg-gradient-to-br from-teal-400/20 to-blue-500/20 border border-teal-500/30 text-teal-400'
                            : idx === results.length - 1
                              ? 'bg-gradient-to-br from-blue-400/20 to-purple-500/20 border border-blue-500/30 text-blue-400'
                              : 'bg-white/5 border border-white/10 text-slate-400'
                        }`}
                      >
                        {idx + 1}
                      </div>
                    </td>
                    <td className="py-3 px-3">
                      <p className="text-white font-medium">{r.name}</p>
                      {r.description && (
                        <p className="text-xs text-slate-500 mt-0.5">{r.description}</p>
                      )}
                    </td>
                    <td className="py-3 px-3 text-slate-300">{r.percentage}%</td>
                    <td className="py-3 px-3 text-slate-300">{formatShortDate(r.milestoneDate)}</td>
                    <td className="py-3 px-3 text-slate-300">{formatShortDate(r.dueDate)}</td>
                    {includeGst && (
                      <>
                        <td className="py-3 px-3 text-right text-slate-400">
                          {formatCurrency(r.amountExGst)}
                        </td>
                        <td className="py-3 px-3 text-right text-teal-400/70">
                          {formatCurrency(r.gstAmount)}
                        </td>
                      </>
                    )}
                    <td className="py-3 px-3 text-right text-white font-semibold">
                      {formatCurrency(includeGst ? r.amountIncGst : r.amountExGst)}
                    </td>
                    <td className="py-3 px-3 text-right text-slate-400">
                      {formatCurrency(includeGst ? r.cumulativeIncGst : r.cumulativeExGst)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* GST Breakdown */}
        {includeGst && (
          <div className="bg-gradient-to-r from-teal-500/10 to-blue-500/10 border border-teal-500/20 rounded-xl p-5">
            <h3 className="text-sm font-semibold text-teal-400 mb-3 uppercase tracking-wide">
              GST Summary
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-300">Total ex. GST</span>
                <span className="text-white font-medium">{formatCurrency(summary.totalExGst)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-300">Total GST (10%)</span>
                <span className="text-teal-400 font-medium">{formatCurrency(summary.totalGst)}</span>
              </div>
              <hr className="border-white/10" />
              <div className="flex justify-between">
                <span className="text-white font-semibold">Total inc. GST</span>
                <span className="text-white font-bold">{formatCurrency(summary.totalIncGst)}</span>
              </div>
            </div>
            <p className="text-xs text-slate-500 mt-3">
              GST is payable in the BAS period you issue each milestone invoice, not when
              the client pays. Ensure each invoice includes your ABN and the words &ldquo;Tax
              Invoice.&rdquo;
            </p>
          </div>
        )}

        {/* Visual Timeline */}
        <div>
          <h3 className="text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wide">
            Payment Timeline
          </h3>
          <div className="bg-white/5 rounded-xl p-5">
            <div className="relative">
              <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                <span>Project Start</span>
                <span>Final Delivery</span>
              </div>

              <div className="relative h-10 bg-white/5 rounded-full overflow-hidden">
                <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-r from-teal-500/20 via-blue-500/20 to-purple-500/20 rounded-full" />

                {results.map((r, i) => {
                  const firstDate = results[0]?.milestoneDate || new Date();
                  const lastDate = results[results.length - 1]?.milestoneDate || new Date();
                  const totalSpan = lastDate.getTime() - firstDate.getTime();
                  const offset = r.milestoneDate.getTime() - firstDate.getTime();
                  const position = totalSpan > 0 ? (offset / totalSpan) * 100 : (i / Math.max(results.length - 1, 1)) * 100;
                  const clampedPos = Math.min(Math.max(position, 3), 97);

                  return (
                    <div
                      key={i}
                      className="absolute top-1/2 -translate-y-1/2 flex flex-col items-center z-10"
                      style={{ left: `${clampedPos}%` }}
                      title={`${r.name}: ${formatCurrency(includeGst ? r.amountIncGst : r.amountExGst)} — ${formatShortDate(r.milestoneDate)}`}
                    >
                      <div
                        className={`w-4 h-4 rounded-full border-2 border-slate-900 shadow-lg ${
                          i === 0
                            ? 'bg-teal-400 shadow-teal-400/30'
                            : i === results.length - 1
                              ? 'bg-purple-400 shadow-purple-400/30'
                              : 'bg-blue-400 shadow-blue-400/30'
                        }`}
                      />
                    </div>
                  );
                })}
              </div>

              <div className="flex items-center justify-between text-xs mt-2">
                <span className="text-teal-400">
                  {results.length > 0 ? formatShortDate(results[0].milestoneDate) : ''}
                </span>
                <span className="text-purple-400">
                  {results.length > 0 ? formatShortDate(results[results.length - 1].milestoneDate) : ''}
                </span>
              </div>

              <div className="flex flex-wrap gap-4 mt-3 text-xs text-slate-500">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-teal-400" />
                  <span>Deposit</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-blue-400" />
                  <span>Milestone</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-purple-400" />
                  <span>Final Delivery</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Percentage Validation */}
        {!isPercentageValid && (
          <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4">
            <p className="text-sm text-amber-300">
              <span className="font-semibold">Percentage mismatch:</span> Your milestone
              percentages currently total {percentageSum}%. They must sum to exactly 100% for
              an accurate payment schedule. Adjust the percentages in the milestone details above.
            </p>
          </div>
        )}

        {/* Related Tools */}
        <div className="border-t border-white/10 pt-6">
          <h3 className="text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wide">
            Related Tools
          </h3>
          <div className="grid sm:grid-cols-3 gap-3">
            <a
              href="/tools/payment-plan-calculator"
              className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-500/30 rounded-xl p-4 transition-all group"
            >
              <p className="text-sm font-medium text-white group-hover:text-teal-400 transition-colors">
                Payment Plan Calculator
              </p>
              <p className="text-xs text-slate-500 mt-1">
                Create installment-based payment plans with interest
              </p>
            </a>
            <a
              href="/tools/invoice-generator"
              className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-500/30 rounded-xl p-4 transition-all group"
            >
              <p className="text-sm font-medium text-white group-hover:text-teal-400 transition-colors">
                Invoice Generator
              </p>
              <p className="text-xs text-slate-500 mt-1">
                Generate professional invoices for each milestone
              </p>
            </a>
            <a
              href="/tools/scope-of-work-generator"
              className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-500/30 rounded-xl p-4 transition-all group"
            >
              <p className="text-sm font-medium text-white group-hover:text-teal-400 transition-colors">
                Scope of Work Generator
              </p>
              <p className="text-xs text-slate-500 mt-1">
                Define deliverables and milestone definitions
              </p>
            </a>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="text-center">
        <p className="text-xs text-slate-500 max-w-2xl mx-auto">
          This calculator provides estimates for milestone payment scheduling. GST calculations
          assume standard 10% Australian GST rate. Always consult your accountant or registered
          BAS agent for specific tax advice. Payment terms and milestone structures should be
          documented in a formal contract or scope of work.
        </p>
      </div>
    </div>
  );
}
