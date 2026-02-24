'use client';

import { useState, useMemo } from 'react';

function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

function formatRate(value: number): string {
  return new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

interface Project {
  id: string;
  name: string;
  revenue: string;
  hoursWorked: string;
  expenses: string;
}

let nextId = 1;
function genId() {
  return `proj-${nextId++}`;
}

const PROJECT_PRESETS = [
  { label: 'Website Build', revenue: '5000', hours: '40', expenses: '200' },
  { label: 'Brand Design', revenue: '3000', hours: '25', expenses: '100' },
  { label: 'Consulting Retainer', revenue: '2000', hours: '15', expenses: '0' },
  { label: 'App Development', revenue: '12000', hours: '100', expenses: '500' },
];

export default function ProjectProfitabilityCalculator() {
  const [projects, setProjects] = useState<Project[]>([
    { id: genId(), name: 'Project 1', revenue: '5000', hoursWorked: '40', expenses: '200' },
  ]);
  const [copied, setCopied] = useState(false);

  const addProject = () => {
    setProjects([
      ...projects,
      { id: genId(), name: `Project ${projects.length + 1}`, revenue: '', hoursWorked: '', expenses: '0' },
    ]);
  };

  const addPreset = (preset: typeof PROJECT_PRESETS[number]) => {
    setProjects([
      ...projects,
      { id: genId(), name: preset.label, revenue: preset.revenue, hoursWorked: preset.hours, expenses: preset.expenses },
    ]);
  };

  const removeProject = (id: string) => {
    if (projects.length > 1) {
      setProjects(projects.filter((p) => p.id !== id));
    }
  };

  const updateProject = (id: string, field: keyof Project, value: string) => {
    setProjects(projects.map((p) => (p.id === id ? { ...p, [field]: value } : p)));
  };

  const analysis = useMemo(() => {
    const results = projects.map((p) => {
      const revenue = parseFloat(p.revenue) || 0;
      const hours = parseFloat(p.hoursWorked) || 0;
      const expenses = parseFloat(p.expenses) || 0;
      const grossProfit = revenue - expenses;
      const profitMargin = revenue > 0 ? (grossProfit / revenue) * 100 : 0;
      const effectiveRate = hours > 0 ? grossProfit / hours : 0;

      let health: 'excellent' | 'good' | 'warning' | 'danger' = 'excellent';
      if (profitMargin < 20) health = 'danger';
      else if (profitMargin < 40) health = 'warning';
      else if (profitMargin < 60) health = 'good';

      return {
        ...p,
        revenue,
        hours,
        expenses,
        grossProfit,
        profitMargin,
        effectiveRate,
        health,
      };
    });

    const totalRevenue = results.reduce((sum, r) => sum + r.revenue, 0);
    const totalExpenses = results.reduce((sum, r) => sum + r.expenses, 0);
    const totalHours = results.reduce((sum, r) => sum + r.hours, 0);
    const totalProfit = totalRevenue - totalExpenses;
    const overallMargin = totalRevenue > 0 ? (totalProfit / totalRevenue) * 100 : 0;
    const avgEffectiveRate = totalHours > 0 ? totalProfit / totalHours : 0;

    // Best and worst project
    const sortedByMargin = [...results].filter((r) => r.revenue > 0).sort((a, b) => b.profitMargin - a.profitMargin);
    const bestProject = sortedByMargin[0] || null;
    const worstProject = sortedByMargin[sortedByMargin.length - 1] || null;

    // Unprofitable count
    const unprofitableCount = results.filter((r) => r.grossProfit < 0).length;

    return {
      results,
      totalRevenue,
      totalExpenses,
      totalHours,
      totalProfit,
      overallMargin,
      avgEffectiveRate,
      bestProject,
      worstProject,
      unprofitableCount,
    };
  }, [projects]);

  const handleCopy = () => {
    const lines = [
      'Project Profitability Analysis — InvoiceFlow',
      '================================================',
      '',
    ];
    analysis.results.forEach((r) => {
      lines.push(`${r.name}`);
      lines.push(`  Revenue: ${formatCurrency(r.revenue)} | Expenses: ${formatCurrency(r.expenses)} | Hours: ${r.hours}`);
      lines.push(`  Profit: ${formatCurrency(r.grossProfit)} | Margin: ${r.profitMargin.toFixed(1)}% | Effective Rate: ${formatRate(r.effectiveRate)}/hr`);
      lines.push('');
    });
    lines.push('--- Portfolio Summary ---');
    lines.push(`Total Revenue: ${formatCurrency(analysis.totalRevenue)}`);
    lines.push(`Total Expenses: ${formatCurrency(analysis.totalExpenses)}`);
    lines.push(`Total Profit: ${formatCurrency(analysis.totalProfit)}`);
    lines.push(`Overall Margin: ${analysis.overallMargin.toFixed(1)}%`);
    lines.push(`Avg Effective Rate: ${formatRate(analysis.avgEffectiveRate)}/hr`);
    lines.push(`Total Hours: ${analysis.totalHours}`);
    lines.push('');
    lines.push('Generated at invoiceflow.au/tools/project-profitability');

    navigator.clipboard.writeText(lines.join('\n')).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const healthColor = (health: string) => {
    switch (health) {
      case 'excellent': return 'text-emerald-400';
      case 'good': return 'text-teal-400';
      case 'warning': return 'text-amber-400';
      case 'danger': return 'text-rose-400';
      default: return 'text-slate-400';
    }
  };

  const healthBg = (health: string) => {
    switch (health) {
      case 'excellent': return 'bg-emerald-400';
      case 'good': return 'bg-teal-400';
      case 'warning': return 'bg-amber-400';
      case 'danger': return 'bg-rose-400';
      default: return 'bg-slate-400';
    }
  };

  const healthLabel = (health: string) => {
    switch (health) {
      case 'excellent': return 'Excellent (60%+)';
      case 'good': return 'Good (40-60%)';
      case 'warning': return 'Thin (20-40%)';
      case 'danger': return 'Danger (<20%)';
      default: return '';
    }
  };

  const inputClass =
    'w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500/40 focus:border-teal-500/40 transition-all text-sm';
  const labelClass = 'block text-xs font-medium text-slate-400 mb-1';

  // Find max revenue for comparison bar
  const maxRevenue = Math.max(...analysis.results.map((r) => r.revenue), 1);

  return (
    <div className="space-y-8">
      {/* Project Inputs */}
      <div className="glass rounded-2xl p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-white heading-font">Your Projects</h2>
          <div className="flex gap-2">
            <button
              onClick={addProject}
              className="flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white hover:opacity-90 transition-opacity"
            >
              + Add Project
            </button>
          </div>
        </div>
        <p className="text-sm text-slate-400">
          Enter your recent projects to compare profitability. Include all revenue, hours worked (including unpaid revisions), and expenses.
        </p>

        {/* Quick Add Presets */}
        <div>
          <p className="text-xs text-slate-500 mb-2">Quick add a preset:</p>
          <div className="flex flex-wrap gap-2">
            {PROJECT_PRESETS.map((preset) => (
              <button
                key={preset.label}
                onClick={() => addPreset(preset)}
                className="text-xs px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-all"
              >
                {preset.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards */}
        <div className="space-y-4">
          {projects.map((project, idx) => (
            <div key={project.id} className="bg-white/5 rounded-xl p-4 sm:p-5 space-y-4">
              <div className="flex items-center justify-between">
                <input
                  type="text"
                  value={project.name}
                  onChange={(e) => updateProject(project.id, 'name', e.target.value)}
                  className="bg-transparent text-white font-semibold text-sm focus:outline-none border-b border-transparent focus:border-teal-500/40 transition-colors"
                  placeholder={`Project ${idx + 1}`}
                />
                {projects.length > 1 && (
                  <button
                    onClick={() => removeProject(project.id)}
                    className="text-slate-500 hover:text-rose-400 transition-colors text-sm px-2"
                  >
                    Remove
                  </button>
                )}
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className={labelClass}>Revenue ($)</label>
                  <input
                    type="number"
                    value={project.revenue}
                    onChange={(e) => updateProject(project.id, 'revenue', e.target.value)}
                    className={inputClass}
                    placeholder="5000"
                    min="0"
                  />
                </div>
                <div>
                  <label className={labelClass}>Hours Worked</label>
                  <input
                    type="number"
                    value={project.hoursWorked}
                    onChange={(e) => updateProject(project.id, 'hoursWorked', e.target.value)}
                    className={inputClass}
                    placeholder="40"
                    min="0"
                  />
                </div>
                <div>
                  <label className={labelClass}>Expenses ($)</label>
                  <input
                    type="number"
                    value={project.expenses}
                    onChange={(e) => updateProject(project.id, 'expenses', e.target.value)}
                    className={inputClass}
                    placeholder="200"
                    min="0"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Portfolio Summary */}
      <div className="glass rounded-2xl p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-white heading-font">Portfolio Summary</h2>
          <button
            onClick={handleCopy}
            className="flex items-center gap-2 text-sm px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all"
          >
            {copied ? <span className="text-emerald-400">Copied</span> : <>Copy Results</>}
          </button>
        </div>

        {/* Key Metrics */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white/5 rounded-xl p-4 text-center">
            <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">Total Revenue</p>
            <p className="text-xl font-bold text-white">{formatCurrency(analysis.totalRevenue)}</p>
          </div>
          <div className="bg-gradient-to-br from-teal-500/10 to-blue-500/10 border border-teal-500/20 rounded-xl p-4 text-center">
            <p className="text-xs text-teal-400/70 uppercase tracking-wide mb-1">Total Profit</p>
            <p className={`text-2xl sm:text-3xl font-bold ${analysis.totalProfit >= 0 ? 'gradient-text' : 'text-rose-400'}`}>
              {formatCurrency(analysis.totalProfit)}
            </p>
          </div>
          <div className="bg-white/5 rounded-xl p-4 text-center">
            <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">Total Expenses</p>
            <p className="text-xl font-bold text-white">{formatCurrency(analysis.totalExpenses)}</p>
          </div>
        </div>

        {/* Secondary Metrics */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white/5 rounded-xl p-4">
            <p className="text-xs text-slate-500 uppercase tracking-wide">Overall Margin</p>
            <p className={`text-lg font-bold ${analysis.overallMargin >= 40 ? 'text-teal-400' : analysis.overallMargin >= 20 ? 'text-amber-400' : 'text-rose-400'}`}>
              {analysis.overallMargin.toFixed(1)}%
            </p>
          </div>
          <div className="bg-white/5 rounded-xl p-4">
            <p className="text-xs text-slate-500 uppercase tracking-wide">Avg Effective Rate</p>
            <p className="text-lg font-bold text-white">{formatRate(analysis.avgEffectiveRate)}<span className="text-sm text-slate-500">/hr</span></p>
          </div>
          <div className="bg-white/5 rounded-xl p-4">
            <p className="text-xs text-slate-500 uppercase tracking-wide">Total Hours</p>
            <p className="text-lg font-bold text-white">{analysis.totalHours}</p>
          </div>
          <div className="bg-white/5 rounded-xl p-4">
            <p className="text-xs text-slate-500 uppercase tracking-wide">Projects</p>
            <p className="text-lg font-bold text-white">
              {analysis.results.filter((r) => r.revenue > 0).length}
              {analysis.unprofitableCount > 0 && (
                <span className="text-sm text-rose-400 ml-2">({analysis.unprofitableCount} unprofitable)</span>
              )}
            </p>
          </div>
        </div>
      </div>

      {/* Per-Project Breakdown */}
      <div className="glass rounded-2xl p-6 sm:p-8 space-y-6">
        <h2 className="text-xl font-bold text-white heading-font">Project Breakdown</h2>
        <p className="text-sm text-slate-400">
          Compare profitability across all projects. Bar width shows revenue, colour shows margin health.
        </p>

        <div className="space-y-4">
          {analysis.results.map((r) => {
            const barWidth = maxRevenue > 0 ? (r.revenue / maxRevenue) * 100 : 0;
            return (
              <div key={r.id} className="bg-white/5 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className={`w-2.5 h-2.5 rounded-full ${healthBg(r.health)}`} />
                    <h4 className="text-white font-semibold text-sm">{r.name}</h4>
                  </div>
                  <span className={`text-xs font-medium ${healthColor(r.health)}`}>
                    {healthLabel(r.health)}
                  </span>
                </div>
                {/* Revenue bar */}
                <div className="w-full bg-white/5 rounded-full h-3 mb-3">
                  <div
                    className={`h-3 rounded-full transition-all duration-500 ${
                      r.health === 'danger'
                        ? 'bg-gradient-to-r from-rose-500 to-rose-400'
                        : r.health === 'warning'
                        ? 'bg-gradient-to-r from-amber-500 to-amber-400'
                        : 'bg-gradient-to-r from-teal-500 to-blue-500'
                    }`}
                    style={{ width: `${Math.max(barWidth, 2)}%` }}
                  />
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                  <div>
                    <span className="text-slate-500">Revenue</span>
                    <p className="text-white font-medium">{formatCurrency(r.revenue)}</p>
                  </div>
                  <div>
                    <span className="text-slate-500">Profit</span>
                    <p className={`font-medium ${r.grossProfit >= 0 ? 'text-teal-400' : 'text-rose-400'}`}>
                      {formatCurrency(r.grossProfit)}
                    </p>
                  </div>
                  <div>
                    <span className="text-slate-500">Margin</span>
                    <p className={`font-medium ${healthColor(r.health)}`}>{r.profitMargin.toFixed(1)}%</p>
                  </div>
                  <div>
                    <span className="text-slate-500">Effective Rate</span>
                    <p className="text-white font-medium">{r.hours > 0 ? `${formatRate(r.effectiveRate)}/hr` : '--'}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Best vs Worst */}
        {analysis.results.filter((r) => r.revenue > 0).length > 1 && (
          <div className="grid sm:grid-cols-2 gap-4 mt-2">
            {analysis.bestProject && (
              <div className="bg-gradient-to-br from-teal-500/10 to-emerald-500/10 border border-teal-500/20 rounded-xl p-4">
                <p className="text-xs text-teal-400 uppercase tracking-wide mb-1">Most Profitable</p>
                <p className="text-white font-bold">{analysis.bestProject.name}</p>
                <p className="text-sm text-teal-400 mt-1">{analysis.bestProject.profitMargin.toFixed(1)}% margin | {formatRate(analysis.bestProject.effectiveRate)}/hr</p>
              </div>
            )}
            {analysis.worstProject && analysis.worstProject !== analysis.bestProject && (
              <div className="bg-gradient-to-br from-rose-500/10 to-amber-500/10 border border-rose-500/20 rounded-xl p-4">
                <p className="text-xs text-rose-400 uppercase tracking-wide mb-1">Least Profitable</p>
                <p className="text-white font-bold">{analysis.worstProject.name}</p>
                <p className="text-sm text-rose-400 mt-1">{analysis.worstProject.profitMargin.toFixed(1)}% margin | {formatRate(analysis.worstProject.effectiveRate)}/hr</p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Insight: What to do next */}
      <div className="glass rounded-2xl p-6 sm:p-8">
        <h2 className="text-xl font-bold text-white heading-font mb-4">What This Means</h2>
        <div className="space-y-3 text-sm text-slate-300">
          {analysis.overallMargin >= 50 && (
            <div className="flex items-start gap-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4">
              <span className="text-emerald-400 text-lg mt-0.5">+</span>
              <p>
                <strong className="text-white">Strong portfolio.</strong> Your overall margin of{' '}
                {analysis.overallMargin.toFixed(0)}% is healthy. Focus on getting more of your best-performing
                project type and consider raising rates.
              </p>
            </div>
          )}
          {analysis.overallMargin >= 20 && analysis.overallMargin < 50 && (
            <div className="flex items-start gap-3 bg-amber-500/10 border border-amber-500/20 rounded-xl p-4">
              <span className="text-amber-400 text-lg mt-0.5">!</span>
              <p>
                <strong className="text-white">Room to improve.</strong> Your overall margin of{' '}
                {analysis.overallMargin.toFixed(0)}% is okay but thin. Look at your lowest-margin
                projects — can you raise prices, reduce scope, or drop them?
              </p>
            </div>
          )}
          {analysis.overallMargin < 20 && analysis.totalRevenue > 0 && (
            <div className="flex items-start gap-3 bg-rose-500/10 border border-rose-500/20 rounded-xl p-4">
              <span className="text-rose-400 text-lg mt-0.5">!</span>
              <p>
                <strong className="text-white">Margins are too thin.</strong> At{' '}
                {analysis.overallMargin.toFixed(0)}%, you&apos;re barely covering business costs.
                Urgent action needed: raise rates, cut expenses, or pivot to higher-value services.
              </p>
            </div>
          )}
          {analysis.unprofitableCount > 0 && (
            <div className="flex items-start gap-3 bg-rose-500/10 border border-rose-500/20 rounded-xl p-4">
              <span className="text-rose-400 text-lg mt-0.5">!</span>
              <p>
                <strong className="text-white">{analysis.unprofitableCount} unprofitable project{analysis.unprofitableCount > 1 ? 's' : ''}.</strong>{' '}
                You&apos;re losing money on {analysis.unprofitableCount === 1 ? 'this project' : 'these projects'}.
                Review whether the client is worth keeping for referrals or future work — otherwise, consider dropping or repricing.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
