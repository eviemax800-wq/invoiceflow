'use client';

import { useState, useMemo } from 'react';

/* ---- Helpers ---- */

function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

function formatDate(dateStr: string): string {
  if (!dateStr) return 'TBD';
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' });
}

function addDaysToDate(dateStr: string, days: number): string {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  d.setDate(d.getDate() + days);
  return d.toISOString().split('T')[0];
}

/* ---- Types ---- */

type ChangeType = 'addition' | 'modification' | 'removal';
type Complexity = 'simple' | 'moderate' | 'complex' | 'critical';
type DeadlineImpact = 'none' | 'minor' | 'moderate' | 'major';
type RushFee = 'none' | '25' | '50' | '75';

interface ChangeRequest {
  id: string;
  description: string;
  type: ChangeType;
  hours: number;
  complexity: Complexity;
  deadlineImpact: DeadlineImpact;
}

const COMPLEXITY_MULTIPLIERS: Record<Complexity, { label: string; multiplier: number }> = {
  simple: { label: 'Simple (1x)', multiplier: 1 },
  moderate: { label: 'Moderate (1.25x)', multiplier: 1.25 },
  complex: { label: 'Complex (1.5x)', multiplier: 1.5 },
  critical: { label: 'Critical (2x)', multiplier: 2 },
};

const DEADLINE_IMPACT_DAYS: Record<DeadlineImpact, { label: string; minDays: number; maxDays: number }> = {
  none: { label: 'None', minDays: 0, maxDays: 0 },
  minor: { label: 'Minor (+1-2 days)', minDays: 1, maxDays: 2 },
  moderate: { label: 'Moderate (+3-5 days)', minDays: 3, maxDays: 5 },
  major: { label: 'Major (+1-2 weeks)', minDays: 7, maxDays: 14 },
};

const PRESETS: { label: string; hours: number; complexity: Complexity }[] = [
  { label: 'Add new page/feature', hours: 8, complexity: 'moderate' },
  { label: 'Change design direction', hours: 12, complexity: 'complex' },
  { label: 'Add mobile responsiveness', hours: 16, complexity: 'complex' },
  { label: 'Additional revision round', hours: 4, complexity: 'simple' },
  { label: 'Content changes', hours: 2, complexity: 'simple' },
  { label: 'Integration with third-party', hours: 10, complexity: 'complex' },
];

let _nextId = 1;
function genId() {
  return `cr-${_nextId++}-${Date.now()}`;
}

/* ---- Component ---- */

export default function ScopeChangeCalculator() {
  // Original project details
  const [projectName, setProjectName] = useState('');
  const [originalValue, setOriginalValue] = useState(5000);
  const [originalHours, setOriginalHours] = useState(50);
  const [originalDeadline, setOriginalDeadline] = useState('');

  // Change requests
  const [changes, setChanges] = useState<ChangeRequest[]>([]);

  // Options
  const [rushFee, setRushFee] = useState<RushFee>('none');
  const [gstRegistered, setGstRegistered] = useState(false);

  // UI
  const [copied, setCopied] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  const hourlyRate = useMemo(() => {
    return originalHours > 0 ? originalValue / originalHours : 0;
  }, [originalValue, originalHours]);

  // Add a change request
  const addChange = (preset?: typeof PRESETS[number]) => {
    setChanges([
      ...changes,
      {
        id: genId(),
        description: preset?.label || '',
        type: 'addition',
        hours: preset?.hours || 0,
        complexity: preset?.complexity || 'simple',
        deadlineImpact: 'none',
      },
    ]);
  };

  const removeChange = (id: string) => {
    setChanges(changes.filter((c) => c.id !== id));
  };

  const updateChange = (id: string, field: keyof ChangeRequest, value: string | number) => {
    setChanges(changes.map((c) => (c.id === id ? { ...c, [field]: value } : c)));
  };

  // Calculations
  const calculations = useMemo(() => {
    let totalAdditionalHours = 0;
    let totalAdditionalCost = 0;
    let totalDeadlineDays = 0;

    const changeDetails = changes.map((c) => {
      const multiplier = COMPLEXITY_MULTIPLIERS[c.complexity].multiplier;
      const effectiveHours = c.hours * multiplier;
      const cost = effectiveHours * hourlyRate;
      const sign = c.type === 'removal' ? -1 : 1;
      const signedCost = cost * sign;
      const signedHours = effectiveHours * sign;

      const impact = DEADLINE_IMPACT_DAYS[c.deadlineImpact];
      const avgDays = Math.round((impact.minDays + impact.maxDays) / 2);
      const signedDays = c.type === 'removal' ? 0 : avgDays;

      totalAdditionalHours += signedHours;
      totalAdditionalCost += signedCost;
      totalDeadlineDays += signedDays;

      return {
        ...c,
        effectiveHours: signedHours,
        cost: signedCost,
        deadlineDays: signedDays,
      };
    });

    const rushMultiplier = rushFee === 'none' ? 0 : parseInt(rushFee) / 100;
    const rushAmount = totalAdditionalCost > 0 ? totalAdditionalCost * rushMultiplier : 0;
    const subtotalAfterRush = totalAdditionalCost + rushAmount;
    const gstAmount = gstRegistered ? subtotalAfterRush * 0.1 : 0;
    const totalWithGst = subtotalAfterRush + gstAmount;

    const newProjectTotal = originalValue + totalWithGst;
    const scopeCreepPercent = originalValue > 0 ? (Math.abs(totalAdditionalCost) / originalValue) * 100 : 0;
    const newTotalHours = originalHours + totalAdditionalHours;
    const newEffectiveRate = newTotalHours > 0 ? newProjectTotal / newTotalHours : 0;
    const newDeadline = originalDeadline ? addDaysToDate(originalDeadline, totalDeadlineDays) : '';

    return {
      changeDetails,
      totalAdditionalHours,
      totalAdditionalCost,
      rushAmount,
      subtotalAfterRush,
      gstAmount,
      totalWithGst,
      newProjectTotal,
      scopeCreepPercent,
      newTotalHours,
      newEffectiveRate,
      totalDeadlineDays,
      newDeadline,
    };
  }, [changes, hourlyRate, rushFee, gstRegistered, originalValue, originalHours, originalDeadline]);

  // Scope creep severity
  const getScopeCreepColor = (pct: number) => {
    if (pct <= 10) return { bg: 'bg-emerald-500', text: 'text-emerald-400', label: 'Normal' };
    if (pct <= 25) return { bg: 'bg-amber-500', text: 'text-amber-400', label: 'Watch' };
    return { bg: 'bg-rose-500', text: 'text-rose-400', label: 'Danger' };
  };

  const scopeColor = getScopeCreepColor(calculations.scopeCreepPercent);

  // Copy change request document
  const handleCopy = () => {
    const today = new Date().toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' });
    const lines: string[] = [];
    const divider = '════════════════════════════════════════════════════════';
    const sectionDivider = '────────────────────────────────────────────────────────';

    lines.push(divider);
    lines.push('  SCOPE CHANGE REQUEST');
    lines.push(divider);
    lines.push('');
    lines.push(`Date:              ${today}`);
    lines.push(`Project:           ${projectName || 'Untitled Project'}`);
    lines.push('');
    lines.push('ORIGINAL TERMS');
    lines.push(sectionDivider);
    lines.push(`Original Value:    ${formatCurrency(originalValue)}`);
    lines.push(`Original Hours:    ${originalHours}`);
    lines.push(`Hourly Rate:       ${formatCurrency(hourlyRate)}/hr`);
    lines.push(`Original Deadline: ${formatDate(originalDeadline)}`);
    lines.push('');
    lines.push('REQUESTED CHANGES');
    lines.push(sectionDivider);

    calculations.changeDetails.forEach((c, i) => {
      const typeLabel = c.type === 'addition' ? 'ADD' : c.type === 'modification' ? 'MOD' : 'REMOVE';
      lines.push(`${i + 1}. [${typeLabel}] ${c.description || 'Unnamed change'}`);
      lines.push(`   Hours: ${c.effectiveHours > 0 ? '+' : ''}${c.effectiveHours.toFixed(1)}  |  Cost: ${c.cost >= 0 ? '+' : ''}${formatCurrency(c.cost)}  |  Timeline: ${c.deadlineDays > 0 ? `+${c.deadlineDays} days` : 'No change'}`);
      lines.push('');
    });

    lines.push('COST SUMMARY');
    lines.push(sectionDivider);
    lines.push(`Original Project Value:      ${formatCurrency(originalValue)}`);
    lines.push(`Scope Change Cost:           ${calculations.totalAdditionalCost >= 0 ? '+' : ''}${formatCurrency(calculations.totalAdditionalCost)}`);
    if (calculations.rushAmount > 0) {
      lines.push(`Rush Fee (${rushFee}%):             +${formatCurrency(calculations.rushAmount)}`);
    }
    if (calculations.gstAmount > 0) {
      lines.push(`GST (10%):                   +${formatCurrency(calculations.gstAmount)}`);
    }
    lines.push(`New Project Total:           ${formatCurrency(calculations.newProjectTotal)}`);
    lines.push('');
    lines.push('TIMELINE');
    lines.push(sectionDivider);
    lines.push(`Original Deadline:           ${formatDate(originalDeadline)}`);
    lines.push(`Additional Days:             +${calculations.totalDeadlineDays} days`);
    lines.push(`New Deadline:                ${formatDate(calculations.newDeadline)}`);
    lines.push('');
    lines.push('SCOPE CREEP ANALYSIS');
    lines.push(sectionDivider);
    lines.push(`Scope Creep:                 ${calculations.scopeCreepPercent.toFixed(1)}% (${scopeColor.label})`);
    lines.push(`New Effective Rate:          ${formatCurrency(calculations.newEffectiveRate)}/hr`);
    lines.push('');
    lines.push(divider);
    lines.push('');
    lines.push('This change request requires written approval before work begins.');
    lines.push('All additional costs are due per the original payment terms.');
    lines.push('');
    lines.push('Generated by InvoiceFlow — invoiceflow.au/tools/scope-change-calculator');

    navigator.clipboard.writeText(lines.join('\n')).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const inputClass =
    'w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500/50 transition-all text-sm';
  const labelClass = 'block text-xs font-medium text-slate-400 mb-1.5';
  const hasChanges = changes.length > 0;

  return (
    <div className="space-y-8">
      {/* Original Project Details */}
      <div className="glass rounded-2xl p-6">
        <h3 className="text-lg font-bold text-white heading-font mb-6">Original Project Details</h3>
        <div className="grid sm:grid-cols-2 gap-5 mb-5">
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
            <label className={labelClass}>Original Project Value ($)</label>
            <input
              type="number"
              value={originalValue}
              onChange={(e) => setOriginalValue(Math.max(0, parseInt(e.target.value) || 0))}
              className={inputClass}
              min="0"
              step="100"
            />
          </div>
          <div>
            <label className={labelClass}>Original Hours</label>
            <input
              type="number"
              value={originalHours}
              onChange={(e) => setOriginalHours(Math.max(0, parseInt(e.target.value) || 0))}
              className={inputClass}
              min="0"
              step="1"
            />
          </div>
          <div>
            <label className={labelClass}>Original Deadline</label>
            <input
              type="date"
              value={originalDeadline}
              onChange={(e) => setOriginalDeadline(e.target.value)}
              className={inputClass}
            />
          </div>
          <div>
            <label className={labelClass}>Hourly Rate (auto-calculated)</label>
            <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-teal-400 font-mono font-semibold text-sm">
              {hourlyRate > 0 ? `${formatCurrency(hourlyRate)}/hr` : 'Enter value & hours'}
            </div>
          </div>
        </div>

        {/* Toggles */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="flex items-center justify-between py-3 px-4 rounded-xl bg-white/5">
            <div>
              <span className="text-slate-300 text-sm">Rush Fee</span>
              <p className="text-xs text-slate-500 mt-0.5">Surcharge for expedited changes</p>
            </div>
            <select
              value={rushFee}
              onChange={(e) => setRushFee(e.target.value as RushFee)}
              className="bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/50"
            >
              <option value="none" className="bg-slate-800">None</option>
              <option value="25" className="bg-slate-800">25%</option>
              <option value="50" className="bg-slate-800">50%</option>
              <option value="75" className="bg-slate-800">75%</option>
            </select>
          </div>
          <div className="flex items-center justify-between py-3 px-4 rounded-xl bg-white/5">
            <div>
              <span className="text-slate-300 text-sm">GST Registered</span>
              <p className="text-xs text-slate-500 mt-0.5">Add 10% GST to change costs</p>
            </div>
            <button
              onClick={() => setGstRegistered(!gstRegistered)}
              className={`relative w-14 h-7 rounded-full transition-all ${
                gstRegistered ? 'bg-gradient-to-r from-teal-500 to-blue-500' : 'bg-white/10'
              }`}
            >
              <div
                className={`absolute top-0.5 left-0.5 h-6 w-6 rounded-full bg-white shadow-md transition-transform ${
                  gstRegistered ? 'translate-x-7' : 'translate-x-0'
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Scope Change Requests */}
      <div className="glass rounded-2xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-white heading-font">Scope Change Requests</h3>
          <button
            onClick={() => addChange()}
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white text-sm font-medium hover:from-teal-400 hover:to-blue-400 transition-all"
          >
            + Add Change
          </button>
        </div>

        {/* Quick Presets */}
        <div className="mb-6">
          <p className="text-xs text-slate-500 mb-2">Quick presets:</p>
          <div className="flex flex-wrap gap-2">
            {PRESETS.map((preset) => (
              <button
                key={preset.label}
                onClick={() => addChange(preset)}
                className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-400 hover:text-white hover:bg-white/10 transition-all"
              >
                {preset.label}
              </button>
            ))}
          </div>
        </div>

        {/* Change Request List */}
        {changes.length === 0 ? (
          <div className="bg-white/5 rounded-xl p-8 text-center">
            <p className="text-slate-500 text-sm">No scope changes added yet. Click &ldquo;+ Add Change&rdquo; or use a quick preset above.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {changes.map((change, idx) => (
              <div key={change.id} className="bg-white/5 rounded-xl p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-slate-500">Change Request {idx + 1}</span>
                  <button
                    onClick={() => removeChange(change.id)}
                    className="text-slate-500 hover:text-rose-400 transition-colors text-xs"
                  >
                    Remove
                  </button>
                </div>
                <div>
                  <label className={labelClass}>Description</label>
                  <input
                    type="text"
                    value={change.description}
                    onChange={(e) => updateChange(change.id, 'description', e.target.value)}
                    className={inputClass}
                    placeholder="e.g. Add contact form to the website"
                  />
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div>
                    <label className={labelClass}>Type</label>
                    <select
                      value={change.type}
                      onChange={(e) => updateChange(change.id, 'type', e.target.value)}
                      className={inputClass}
                    >
                      <option value="addition" className="bg-slate-800">Addition</option>
                      <option value="modification" className="bg-slate-800">Modification</option>
                      <option value="removal" className="bg-slate-800">Removal</option>
                    </select>
                  </div>
                  <div>
                    <label className={labelClass}>Est. Hours</label>
                    <input
                      type="number"
                      value={change.hours || ''}
                      onChange={(e) => updateChange(change.id, 'hours', Math.max(0, parseFloat(e.target.value) || 0))}
                      className={inputClass}
                      placeholder="8"
                      min="0"
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Complexity</label>
                    <select
                      value={change.complexity}
                      onChange={(e) => updateChange(change.id, 'complexity', e.target.value)}
                      className={inputClass}
                    >
                      {Object.entries(COMPLEXITY_MULTIPLIERS).map(([key, val]) => (
                        <option key={key} value={key} className="bg-slate-800">{val.label}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className={labelClass}>Deadline Impact</label>
                    <select
                      value={change.deadlineImpact}
                      onChange={(e) => updateChange(change.id, 'deadlineImpact', e.target.value)}
                      className={inputClass}
                    >
                      {Object.entries(DEADLINE_IMPACT_DAYS).map(([key, val]) => (
                        <option key={key} value={key} className="bg-slate-800">{val.label}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Results Section */}
      {hasChanges && (
        <>
          {/* Change Request Summary Table */}
          <div className="glass rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white heading-font mb-4">Change Request Summary</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left text-slate-400 py-3 pr-4 font-medium text-xs">Change</th>
                    <th className="text-left text-slate-400 py-3 pr-4 font-medium text-xs">Type</th>
                    <th className="text-right text-slate-400 py-3 pr-4 font-medium text-xs">Hours</th>
                    <th className="text-right text-slate-400 py-3 pr-4 font-medium text-xs">Cost Impact</th>
                    <th className="text-right text-slate-400 py-3 font-medium text-xs">Timeline</th>
                  </tr>
                </thead>
                <tbody>
                  {calculations.changeDetails.map((c, i) => (
                    <tr key={c.id} className="border-b border-white/5">
                      <td className="py-3 pr-4 text-white">{c.description || `Change ${i + 1}`}</td>
                      <td className="py-3 pr-4">
                        <span className={`text-xs px-2 py-0.5 rounded-full ${
                          c.type === 'addition' ? 'bg-teal-500/20 text-teal-400' :
                          c.type === 'modification' ? 'bg-blue-500/20 text-blue-400' :
                          'bg-rose-500/20 text-rose-400'
                        }`}>
                          {c.type === 'addition' ? 'Add' : c.type === 'modification' ? 'Mod' : 'Remove'}
                        </span>
                      </td>
                      <td className={`py-3 pr-4 text-right font-mono ${c.effectiveHours >= 0 ? 'text-white' : 'text-emerald-400'}`}>
                        {c.effectiveHours >= 0 ? '+' : ''}{c.effectiveHours.toFixed(1)}
                      </td>
                      <td className={`py-3 pr-4 text-right font-mono ${c.cost >= 0 ? 'text-amber-400' : 'text-emerald-400'}`}>
                        {c.cost >= 0 ? '+' : ''}{formatCurrency(c.cost)}
                      </td>
                      <td className={`py-3 text-right font-mono ${c.deadlineDays > 0 ? 'text-amber-400' : 'text-slate-500'}`}>
                        {c.deadlineDays > 0 ? `+${c.deadlineDays}d` : '--'}
                      </td>
                    </tr>
                  ))}
                  <tr className="border-t border-white/10">
                    <td className="py-3 pr-4 text-white font-semibold" colSpan={2}>Total</td>
                    <td className="py-3 pr-4 text-right font-mono text-white font-semibold">
                      {calculations.totalAdditionalHours >= 0 ? '+' : ''}{calculations.totalAdditionalHours.toFixed(1)}
                    </td>
                    <td className="py-3 pr-4 text-right font-mono text-white font-semibold">
                      {calculations.totalAdditionalCost >= 0 ? '+' : ''}{formatCurrency(calculations.totalAdditionalCost)}
                    </td>
                    <td className="py-3 text-right font-mono text-white font-semibold">
                      +{calculations.totalDeadlineDays}d
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Original vs New Comparison */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="glass rounded-2xl p-6 border border-white/10">
              <h4 className="text-sm text-slate-400 uppercase tracking-wide mb-4">Original Project</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 text-sm">Value</span>
                  <span className="text-white font-mono font-semibold">{formatCurrency(originalValue)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 text-sm">Hours</span>
                  <span className="text-white font-mono font-semibold">{originalHours}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 text-sm">Rate</span>
                  <span className="text-white font-mono font-semibold">{formatCurrency(hourlyRate)}/hr</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 text-sm">Deadline</span>
                  <span className="text-white font-mono text-sm">{formatDate(originalDeadline)}</span>
                </div>
              </div>
            </div>
            <div className="glass rounded-2xl p-6 border border-teal-500/20 bg-teal-500/5">
              <h4 className="text-sm text-teal-400 uppercase tracking-wide mb-4">Revised Project</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 text-sm">Value</span>
                  <span className="text-teal-400 font-mono font-semibold">{formatCurrency(calculations.newProjectTotal)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 text-sm">Hours</span>
                  <span className="text-teal-400 font-mono font-semibold">{calculations.newTotalHours.toFixed(1)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 text-sm">Effective Rate</span>
                  <span className="text-teal-400 font-mono font-semibold">{formatCurrency(calculations.newEffectiveRate)}/hr</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 text-sm">Deadline</span>
                  <span className="text-teal-400 font-mono text-sm">{formatDate(calculations.newDeadline)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Scope Creep Gauge */}
          <div className="glass rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white heading-font mb-4">Scope Creep Analysis</h3>
            <div className="space-y-4">
              {/* Gauge Bar */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-slate-400">Scope creep percentage</span>
                  <span className={`text-sm font-bold ${scopeColor.text}`}>
                    {calculations.scopeCreepPercent.toFixed(1)}% — {scopeColor.label}
                  </span>
                </div>
                <div className="w-full bg-white/5 rounded-full h-4 overflow-hidden relative">
                  {/* Threshold markers */}
                  <div className="absolute left-[10%] top-0 bottom-0 w-px bg-white/20 z-10" />
                  <div className="absolute left-[25%] top-0 bottom-0 w-px bg-white/20 z-10" />
                  {/* Fill bar */}
                  <div
                    className={`h-full rounded-full ${scopeColor.bg} transition-all duration-500`}
                    style={{ width: `${Math.min(calculations.scopeCreepPercent, 100)}%` }}
                  />
                </div>
                <div className="flex justify-between text-xs text-slate-600 mt-1">
                  <span>0%</span>
                  <span className="text-emerald-600">10% Normal</span>
                  <span className="text-amber-600">25% Watch</span>
                  <span>50%+</span>
                </div>
              </div>

              {/* Warning */}
              {calculations.scopeCreepPercent > 25 && (
                <div className="bg-rose-500/10 border border-rose-500/20 rounded-xl p-4">
                  <p className="text-rose-400 text-sm font-medium mb-1">Scope creep exceeds 25%</p>
                  <p className="text-slate-300 text-sm">
                    Consider renegotiating the project scope or contract. At this level of change,
                    the project is substantially different from what was originally agreed. A new
                    contract or project phase may be more appropriate than a change order.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Cost Waterfall */}
          <div className="glass rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white heading-font mb-4">Cost Waterfall</h3>
            <div className="space-y-3">
              {[
                { label: 'Original Project Value', value: originalValue, color: 'bg-blue-500' },
                { label: 'Scope Changes', value: calculations.totalAdditionalCost, color: calculations.totalAdditionalCost >= 0 ? 'bg-amber-500' : 'bg-emerald-500' },
                ...(calculations.rushAmount > 0 ? [{ label: `Rush Fee (${rushFee}%)`, value: calculations.rushAmount, color: 'bg-orange-500' }] : []),
                ...(calculations.gstAmount > 0 ? [{ label: 'GST (10%)', value: calculations.gstAmount, color: 'bg-violet-500' }] : []),
                { label: 'New Project Total', value: calculations.newProjectTotal, color: 'bg-gradient-to-r from-teal-500 to-blue-500' },
              ].map((item) => {
                const maxVal = Math.max(originalValue, calculations.newProjectTotal, 1);
                const barWidth = (Math.abs(item.value) / maxVal) * 100;
                return (
                  <div key={item.label} className="flex items-center gap-4">
                    <span className="text-sm text-slate-300 w-40 shrink-0 truncate">{item.label}</span>
                    <div className="flex-1 bg-white/5 rounded-full h-7 overflow-hidden relative">
                      <div
                        className={`h-full rounded-full flex items-center justify-end pr-3 ${item.color}`}
                        style={{ width: `${Math.max(barWidth, 15)}%`, opacity: 0.8 }}
                      >
                        <span className="text-xs font-medium text-white whitespace-nowrap">
                          {formatCurrency(item.value)}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Timeline Bar */}
          {originalDeadline && calculations.totalDeadlineDays > 0 && (
            <div className="glass rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white heading-font mb-4">Timeline Impact</h3>
              <div className="bg-white/5 rounded-xl p-4">
                <div className="flex items-center gap-2 text-sm">
                  <div className="text-center shrink-0">
                    <p className="text-xs text-slate-500">Original</p>
                    <p className="text-white font-medium text-xs">{formatDate(originalDeadline)}</p>
                  </div>
                  <div className="flex-1 relative h-8 rounded-full overflow-hidden bg-white/5">
                    <div className="absolute inset-y-0 left-0 bg-blue-500/30 rounded-l-full" style={{ width: '60%' }} />
                    <div className="absolute inset-y-0 right-0 bg-amber-500/30 rounded-r-full flex items-center justify-center" style={{ width: '40%' }}>
                      <span className="text-xs text-amber-400 font-medium">+{calculations.totalDeadlineDays} days</span>
                    </div>
                  </div>
                  <div className="text-center shrink-0">
                    <p className="text-xs text-slate-500">New</p>
                    <p className="text-teal-400 font-medium text-xs">{formatDate(calculations.newDeadline)}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Professional Change Request Preview */}
          <div className="glass rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-white heading-font">Change Order Document</h3>
              <button
                onClick={() => setShowPreview(!showPreview)}
                className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-slate-400 hover:text-white hover:bg-white/10 transition-all"
              >
                {showPreview ? 'Hide Preview' : 'Show Preview'}
              </button>
            </div>

            {showPreview && (
              <div className="bg-slate-900/50 rounded-2xl border border-white/10 overflow-hidden">
                {/* Document Header */}
                <div className="bg-gradient-to-r from-teal-500/10 to-blue-500/10 border-b border-white/10 p-6">
                  <p className="text-xs text-teal-400 uppercase tracking-widest mb-2">Scope Change Request</p>
                  <h4 className="text-xl font-bold text-white heading-font">{projectName || 'Untitled Project'}</h4>
                  <p className="text-slate-400 text-sm mt-1">
                    Date: {new Date().toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </p>
                </div>

                <div className="p-6 space-y-6">
                  {/* Original Terms */}
                  <div>
                    <h5 className="text-white font-semibold text-sm mb-3">Original Terms</h5>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      <div className="bg-white/5 rounded-lg p-3">
                        <p className="text-xs text-slate-500">Value</p>
                        <p className="text-white font-semibold">{formatCurrency(originalValue)}</p>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3">
                        <p className="text-xs text-slate-500">Hours</p>
                        <p className="text-white font-semibold">{originalHours}</p>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3">
                        <p className="text-xs text-slate-500">Rate</p>
                        <p className="text-white font-semibold">{formatCurrency(hourlyRate)}/hr</p>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3">
                        <p className="text-xs text-slate-500">Deadline</p>
                        <p className="text-white font-semibold text-xs">{formatDate(originalDeadline)}</p>
                      </div>
                    </div>
                  </div>

                  {/* Change Requests */}
                  <div>
                    <h5 className="text-white font-semibold text-sm mb-3">Requested Changes</h5>
                    <div className="space-y-2">
                      {calculations.changeDetails.map((c, i) => (
                        <div key={c.id} className="bg-white/5 rounded-lg p-3 flex items-center justify-between">
                          <div className="flex items-start gap-3">
                            <span className="text-teal-400 font-bold text-sm mt-0.5">{i + 1}.</span>
                            <div>
                              <p className="text-white text-sm">{c.description || 'Unnamed change'}</p>
                              <p className="text-xs text-slate-500">
                                {c.type === 'addition' ? 'Addition' : c.type === 'modification' ? 'Modification' : 'Removal'}
                                {' '}| {c.effectiveHours.toFixed(1)} hrs | {c.deadlineDays > 0 ? `+${c.deadlineDays} days` : 'No timeline change'}
                              </p>
                            </div>
                          </div>
                          <span className={`font-mono text-sm font-semibold ${c.cost >= 0 ? 'text-amber-400' : 'text-emerald-400'}`}>
                            {c.cost >= 0 ? '+' : ''}{formatCurrency(c.cost)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Cost Summary */}
                  <div>
                    <h5 className="text-white font-semibold text-sm mb-3">Cost Summary</h5>
                    <div className="bg-white/5 rounded-lg p-4 space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-slate-400">Original project value</span>
                        <span className="text-white font-mono">{formatCurrency(originalValue)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Scope changes</span>
                        <span className="text-amber-400 font-mono">{calculations.totalAdditionalCost >= 0 ? '+' : ''}{formatCurrency(calculations.totalAdditionalCost)}</span>
                      </div>
                      {calculations.rushAmount > 0 && (
                        <div className="flex justify-between">
                          <span className="text-slate-400">Rush fee ({rushFee}%)</span>
                          <span className="text-amber-400 font-mono">+{formatCurrency(calculations.rushAmount)}</span>
                        </div>
                      )}
                      {calculations.gstAmount > 0 && (
                        <div className="flex justify-between">
                          <span className="text-slate-400">GST (10%)</span>
                          <span className="text-amber-400 font-mono">+{formatCurrency(calculations.gstAmount)}</span>
                        </div>
                      )}
                      <div className="flex justify-between border-t border-white/10 pt-2 mt-2">
                        <span className="text-white font-semibold">New project total</span>
                        <span className="text-teal-400 font-mono font-bold">{formatCurrency(calculations.newProjectTotal)}</span>
                      </div>
                    </div>
                  </div>

                  {/* New Deadline */}
                  <div>
                    <h5 className="text-white font-semibold text-sm mb-3">Revised Timeline</h5>
                    <div className="bg-white/5 rounded-lg p-4 space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-slate-400">Original deadline</span>
                        <span className="text-white font-mono">{formatDate(originalDeadline)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Additional days</span>
                        <span className="text-amber-400 font-mono">+{calculations.totalDeadlineDays} days</span>
                      </div>
                      <div className="flex justify-between border-t border-white/10 pt-2 mt-2">
                        <span className="text-white font-semibold">New deadline</span>
                        <span className="text-teal-400 font-mono font-bold">{formatDate(calculations.newDeadline)}</span>
                      </div>
                    </div>
                  </div>

                  {/* Approval Notice */}
                  <div className="bg-gradient-to-r from-teal-500/10 to-blue-500/10 border border-teal-500/20 rounded-xl p-4">
                    <p className="text-sm text-slate-300">
                      This change request requires written approval before work begins.
                      All additional costs are due per the original payment terms.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Copy Button */}
            <div className="flex justify-center mt-4">
              <button
                onClick={handleCopy}
                className="px-6 py-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-500/30 transition-all text-white font-medium"
              >
                {copied ? 'Copied to Clipboard!' : 'Copy Change Order to Clipboard'}
              </button>
            </div>
          </div>

          {/* Related Tools */}
          <div className="glass rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white heading-font mb-4">Related Tools</h3>
            <div className="grid sm:grid-cols-3 gap-3">
              <a href="/tools/quote-calculator" className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-500/30 rounded-xl p-4 transition-all group">
                <p className="text-white font-medium text-sm group-hover:text-teal-400 transition-colors">Quote Calculator</p>
                <p className="text-xs text-slate-500 mt-1">Build accurate project quotes with profit margins</p>
              </a>
              <a href="/tools/contract-clause-generator" className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-500/30 rounded-xl p-4 transition-all group">
                <p className="text-white font-medium text-sm group-hover:text-teal-400 transition-colors">Contract Clause Generator</p>
                <p className="text-xs text-slate-500 mt-1">Generate contract clauses for scope change protection</p>
              </a>
              <a href="/tools/scope-of-work-generator" className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-500/30 rounded-xl p-4 transition-all group">
                <p className="text-white font-medium text-sm group-hover:text-teal-400 transition-colors">Scope of Work Generator</p>
                <p className="text-xs text-slate-500 mt-1">Build professional SOW documents with clear deliverables</p>
              </a>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="text-center">
            <p className="text-xs text-slate-500 max-w-2xl mx-auto">
              This calculator provides estimates for scope change costing. Actual costs may vary based on
              project specifics, team availability, and technical complexity. Always document scope changes
              in writing and obtain client approval before starting additional work.
            </p>
          </div>
        </>
      )}
    </div>
  );
}