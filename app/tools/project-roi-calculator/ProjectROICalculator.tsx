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

function formatPercent(value: number): string {
  return `${value.toFixed(1)}%`;
}

type ProjectType = 'Website' | 'Web App' | 'Branding' | 'Marketing' | 'Consulting' | 'Content' | 'Custom';

const PROJECT_TYPES: ProjectType[] = ['Website', 'Web App', 'Branding', 'Marketing', 'Consulting', 'Content', 'Custom'];

interface ProjectEntry {
  id: number;
  name: string;
  type: ProjectType;
  revenue: string;
  hoursWorked: string;
  directCosts: string;
  hourlyRate: string;
  nonBillableHours: string;
}

type ROITier = 'Excellent' | 'Good' | 'Fair' | 'Poor' | 'Loss';

interface ProjectResult {
  name: string;
  type: ProjectType;
  revenue: number;
  directCosts: number;
  billableHours: number;
  nonBillableHours: number;
  totalHours: number;
  hourlyRate: number;
  opportunityCost: number;
  trueProfit: number;
  totalInvestment: number;
  roi: number;
  effectiveRate: number;
  tier: ROITier;
}

const samplePortfolio: Omit<ProjectEntry, 'id'>[] = [
  { name: 'E-commerce Redesign', type: 'Website', revenue: '12000', hoursWorked: '80', directCosts: '800', hourlyRate: '120', nonBillableHours: '20' },
  { name: 'Brand Identity Package', type: 'Branding', revenue: '6500', hoursWorked: '35', directCosts: '200', hourlyRate: '120', nonBillableHours: '8' },
  { name: 'SEO Content Strategy', type: 'Marketing', revenue: '4000', hoursWorked: '45', directCosts: '150', hourlyRate: '120', nonBillableHours: '18' },
];

let nextId = 1;
function createProject(
  name = '',
  type: ProjectType = 'Website',
  revenue = '',
  hoursWorked = '',
  directCosts = '',
  hourlyRate = '',
  nonBillableHours = ''
): ProjectEntry {
  return { id: nextId++, name, type, revenue, hoursWorked, directCosts, hourlyRate, nonBillableHours };
}

export default function ProjectROICalculator() {
  const [projects, setProjects] = useState<ProjectEntry[]>([createProject()]);
  const [copied, setCopied] = useState(false);

  const addProject = useCallback(() => {
    if (projects.length >= 8) return;
    setProjects((prev) => [...prev, createProject()]);
  }, [projects.length]);

  const removeProject = useCallback((id: number) => {
    setProjects((prev) => prev.filter((p) => p.id !== id));
  }, []);

  const updateProject = useCallback((id: number, field: keyof Omit<ProjectEntry, 'id'>, value: string) => {
    setProjects((prev) =>
      prev.map((p) => (p.id === id ? { ...p, [field]: value } : p))
    );
  }, []);

  const loadSample = useCallback(() => {
    const loaded = samplePortfolio.map((s) =>
      createProject(s.name, s.type, s.revenue, s.hoursWorked, s.directCosts, s.hourlyRate, s.nonBillableHours)
    );
    setProjects(loaded);
  }, []);

  const results = useMemo(() => {
    const parsed: ProjectResult[] = projects
      .map((p) => {
        const revenue = parseFloat(p.revenue) || 0;
        const hoursWorked = parseFloat(p.hoursWorked) || 0;
        const directCosts = parseFloat(p.directCosts) || 0;
        const hourlyRate = parseFloat(p.hourlyRate) || 0;
        const nonBillableHours = parseFloat(p.nonBillableHours) || 0;

        if (revenue <= 0 || hoursWorked <= 0) return null;

        const totalHours = hoursWorked + nonBillableHours;
        const opportunityCost = nonBillableHours * hourlyRate;
        const trueProfit = revenue - directCosts - opportunityCost;
        const totalInvestment = directCosts + (totalHours * hourlyRate);
        const roi = totalInvestment > 0 ? (trueProfit / totalInvestment) * 100 : 0;
        const effectiveRate = totalHours > 0 ? (revenue - directCosts) / totalHours : 0;

        let tier: ROITier;
        if (roi > 200) tier = 'Excellent';
        else if (roi > 100) tier = 'Good';
        else if (roi > 50) tier = 'Fair';
        else if (roi > 0) tier = 'Poor';
        else tier = 'Loss';

        return {
          name: p.name.trim() || 'Unnamed Project',
          type: p.type,
          revenue,
          directCosts,
          billableHours: hoursWorked,
          nonBillableHours,
          totalHours,
          hourlyRate,
          opportunityCost,
          trueProfit,
          totalInvestment,
          roi,
          effectiveRate,
          tier,
        };
      })
      .filter((p): p is ProjectResult => p !== null);

    if (parsed.length === 0) return null;

    // Summary metrics
    const sorted = [...parsed].sort((a, b) => b.roi - a.roi);
    const best = sorted[0];
    const worst = sorted[sorted.length - 1];
    const totalProfit = parsed.reduce((sum, p) => sum + p.trueProfit, 0);
    const avgRoi = parsed.reduce((sum, p) => sum + p.roi, 0) / parsed.length;
    const totalRevenue = parsed.reduce((sum, p) => sum + p.revenue, 0);
    const totalHoursAll = parsed.reduce((sum, p) => sum + p.totalHours, 0);
    const totalDirectCosts = parsed.reduce((sum, p) => sum + p.directCosts, 0);
    const weightedEffectiveRate = totalHoursAll > 0 ? (totalRevenue - totalDirectCosts) / totalHoursAll : 0;

    // Insights
    const insights: string[] = [];

    // Best project type
    const typeRois: Record<string, { totalRoi: number; count: number }> = {};
    parsed.forEach((p) => {
      if (!typeRois[p.type]) typeRois[p.type] = { totalRoi: 0, count: 0 };
      typeRois[p.type].totalRoi += p.roi;
      typeRois[p.type].count += 1;
    });
    const bestType = Object.entries(typeRois).sort(
      (a, b) => b[1].totalRoi / b[1].count - a[1].totalRoi / a[1].count
    )[0];
    if (bestType) {
      insights.push(
        `Your best project type for ROI is "${bestType[0]}" with an average ROI of ${(bestType[1].totalRoi / bestType[1].count).toFixed(0)}%.`
      );
    }

    // Hidden cost alert — non-billable > 30%
    const totalNonBillable = parsed.reduce((sum, p) => sum + p.nonBillableHours, 0);
    const nonBillableRatio = totalHoursAll > 0 ? totalNonBillable / totalHoursAll : 0;
    if (nonBillableRatio > 0.3) {
      insights.push(
        `Hidden cost alert: ${(nonBillableRatio * 100).toFixed(0)}% of your total hours are non-billable. That's ${totalNonBillable.toFixed(0)} hours of meetings, revisions, and admin eating into your profit. Aim for under 30%.`
      );
    }

    // Effective rate gap
    const avgStatedRate = parsed.reduce((sum, p) => sum + p.hourlyRate, 0) / parsed.length;
    const rateGap = avgStatedRate - weightedEffectiveRate;
    if (rateGap > 5) {
      insights.push(
        `Effective rate gap: Your stated rate averages ${formatCurrency(avgStatedRate)}/hr but you're actually earning ${formatCurrency(weightedEffectiveRate)}/hr — a gap of ${formatCurrency(rateGap)}/hr. Non-billable hours and costs are the culprit.`
      );
    }

    // Projected improvement if only best type
    if (bestType && parsed.length > 1) {
      const bestAvgRoi = bestType[1].totalRoi / bestType[1].count;
      const bestTypeProjects = parsed.filter((p) => p.type === bestType[0]);
      const bestAvgEffRate = bestTypeProjects.reduce((sum, p) => sum + p.effectiveRate, 0) / bestTypeProjects.length;
      const projectedAnnual = bestAvgEffRate * 1600; // 1600 billable hrs/year
      insights.push(
        `If you only took "${bestType[0]}" projects (avg ${bestAvgRoi.toFixed(0)}% ROI), at your effective rate of ${formatCurrency(bestAvgEffRate)}/hr and 1,600 billable hours/year, your projected annual income would be ${formatCurrency(projectedAnnual)}.`
      );
    }

    return {
      projects: parsed,
      sorted,
      best,
      worst,
      totalProfit,
      avgRoi,
      totalRevenue,
      totalHoursAll,
      totalDirectCosts,
      weightedEffectiveRate,
      insights,
    };
  }, [projects]);

  const handleCopy = useCallback(() => {
    if (!results) return;
    const lines = [
      'PROJECT ROI ANALYSIS',
      '====================',
      '',
      'PROJECTS:',
      ...results.projects.map(
        (p) =>
          `  ${p.name} (${p.type}): Revenue ${formatCurrency(p.revenue)} | Profit ${formatCurrency(p.trueProfit)} | ROI ${p.roi.toFixed(1)}% | Effective Rate ${formatCurrency(p.effectiveRate)}/hr`
      ),
      '',
      'PORTFOLIO SUMMARY:',
      `  Best ROI: ${results.best.name} (${results.best.roi.toFixed(1)}%)`,
      `  Worst ROI: ${results.worst.name} (${results.worst.roi.toFixed(1)}%)`,
      `  Average ROI: ${results.avgRoi.toFixed(1)}%`,
      `  Total Profit: ${formatCurrency(results.totalProfit)}`,
      `  Weighted Effective Rate: ${formatCurrency(results.weightedEffectiveRate)}/hr`,
      '',
      'INSIGHTS:',
      ...results.insights.map((i) => `  - ${i}`),
      '',
      'Generated by InvoiceFlow — invoiceflow.au/tools/project-roi-calculator',
    ];
    navigator.clipboard.writeText(lines.join('\n'));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [results]);

  return (
    <div className="space-y-8">
      {/* Input Section */}
      <div className="glass rounded-2xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-white heading-font">Your Projects</h3>
          <button
            onClick={loadSample}
            className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-500/30 transition-all text-sm text-slate-300 hover:text-white"
          >
            Load Sample Portfolio
          </button>
        </div>

        {/* Project Cards */}
        <div className="space-y-4">
          {projects.map((project, index) => (
            <div key={project.id} className="bg-white/5 border border-white/10 rounded-xl p-4 sm:p-5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-teal-400">Project {index + 1}</span>
                <button
                  onClick={() => removeProject(project.id)}
                  disabled={projects.length <= 1}
                  className="w-8 h-8 rounded-lg bg-white/5 hover:bg-rose-500/20 border border-white/10 hover:border-rose-500/30 text-slate-500 hover:text-rose-400 transition-all flex items-center justify-center shrink-0 disabled:opacity-30 disabled:cursor-not-allowed"
                  aria-label="Remove project"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Row 1: Name + Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Project name"
                  value={project.name}
                  onChange={(e) => updateProject(project.id, 'name', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-600 focus:border-teal-500 focus:outline-none transition-colors text-sm"
                />
                <select
                  value={project.type}
                  onChange={(e) => updateProject(project.id, 'type', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-teal-500 focus:outline-none transition-colors text-sm appearance-none cursor-pointer"
                  style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2394a3b8'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', backgroundSize: '16px' }}
                >
                  {PROJECT_TYPES.map((t) => (
                    <option key={t} value={t} className="bg-slate-800 text-white">{t}</option>
                  ))}
                </select>
              </div>

              {/* Row 2: Revenue + Hours + Direct Costs */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-sm">$</span>
                  <input
                    type="number"
                    placeholder="Revenue (invoiced)"
                    value={project.revenue}
                    onChange={(e) => updateProject(project.id, 'revenue', e.target.value)}
                    className="w-full pl-7 pr-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-600 focus:border-teal-500 focus:outline-none transition-colors text-sm"
                    min="0"
                  />
                </div>
                <div className="relative">
                  <input
                    type="number"
                    placeholder="Billable hours"
                    value={project.hoursWorked}
                    onChange={(e) => updateProject(project.id, 'hoursWorked', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-600 focus:border-teal-500 focus:outline-none transition-colors text-sm"
                    min="0"
                  />
                </div>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-sm">$</span>
                  <input
                    type="number"
                    placeholder="Direct costs"
                    value={project.directCosts}
                    onChange={(e) => updateProject(project.id, 'directCosts', e.target.value)}
                    className="w-full pl-7 pr-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-600 focus:border-teal-500 focus:outline-none transition-colors text-sm"
                    min="0"
                  />
                </div>
              </div>

              {/* Row 3: Hourly Rate + Non-Billable Hours */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-sm">$</span>
                  <input
                    type="number"
                    placeholder="Your hourly rate"
                    value={project.hourlyRate}
                    onChange={(e) => updateProject(project.id, 'hourlyRate', e.target.value)}
                    className="w-full pl-7 pr-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-600 focus:border-teal-500 focus:outline-none transition-colors text-sm"
                    min="0"
                  />
                </div>
                <input
                  type="number"
                  placeholder="Non-billable hours (meetings, revisions, admin)"
                  value={project.nonBillableHours}
                  onChange={(e) => updateProject(project.id, 'nonBillableHours', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-600 focus:border-teal-500 focus:outline-none transition-colors text-sm"
                  min="0"
                />
              </div>
            </div>
          ))}
        </div>

        {projects.length < 8 && (
          <button
            onClick={addProject}
            className="mt-4 w-full px-4 py-3 rounded-lg border border-dashed border-white/10 hover:border-teal-500/30 text-slate-500 hover:text-teal-400 transition-all text-sm"
          >
            + Add Project ({projects.length}/8)
          </button>
        )}
      </div>

      {/* Results */}
      {results && (
        <>
          {/* Summary Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            <div className="glass rounded-xl p-4 text-center">
              <p className="text-xs text-slate-400 mb-1">Best ROI</p>
              <p className="text-lg font-bold text-emerald-400 truncate" title={results.best.name}>{results.best.name}</p>
              <p className="text-xs text-slate-500 mt-0.5">{formatPercent(results.best.roi)} ROI</p>
            </div>
            <div className="glass rounded-xl p-4 text-center">
              <p className="text-xs text-slate-400 mb-1">Worst ROI</p>
              <p className={`text-lg font-bold truncate ${results.worst.roi < 0 ? 'text-rose-400' : 'text-amber-400'}`} title={results.worst.name}>{results.worst.name}</p>
              <p className="text-xs text-slate-500 mt-0.5">{formatPercent(results.worst.roi)} ROI</p>
            </div>
            <div className="glass rounded-xl p-4 text-center">
              <p className="text-xs text-slate-400 mb-1">Avg Portfolio ROI</p>
              <p className={`text-xl font-bold ${getROIColor(results.avgRoi)}`}>{formatPercent(results.avgRoi)}</p>
            </div>
            <div className="glass rounded-xl p-4 text-center">
              <p className="text-xs text-slate-400 mb-1">Total Profit</p>
              <p className={`text-xl font-bold ${results.totalProfit >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                {formatCurrency(results.totalProfit)}
              </p>
            </div>
            <div className="glass rounded-xl p-4 text-center col-span-2 sm:col-span-1">
              <p className="text-xs text-slate-400 mb-1">Weighted Eff. Rate</p>
              <p className="text-xl font-bold text-white">{formatCurrency(results.weightedEffectiveRate)}<span className="text-sm text-slate-400">/hr</span></p>
            </div>
          </div>

          {/* Per-Project Results */}
          <div className="glass rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white heading-font mb-4">Project Breakdown</h3>
            <div className="space-y-4">
              {results.projects.map((project, index) => (
                <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-4 sm:p-5">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <h4 className="text-white font-semibold">{project.name}</h4>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-white/10 text-slate-400">{project.type}</span>
                    </div>
                    <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-bold ${getTierBadgeClasses(project.tier)}`}>
                      <div className={`w-2 h-2 rounded-full ${getTierDotColor(project.tier)}`} />
                      {project.tier} ({formatPercent(project.roi)})
                    </div>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <div>
                      <p className="text-xs text-slate-500">True Profit</p>
                      <p className={`text-sm font-bold ${project.trueProfit >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                        {formatCurrency(project.trueProfit)}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">Effective Rate</p>
                      <p className="text-sm font-bold text-white">{formatCurrency(project.effectiveRate)}/hr</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">Total Hours</p>
                      <p className="text-sm font-bold text-white">{project.totalHours}h <span className="text-slate-500 font-normal text-xs">({project.billableHours}b + {project.nonBillableHours}nb)</span></p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">Opportunity Cost</p>
                      <p className="text-sm font-bold text-amber-400">{formatCurrency(project.opportunityCost)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ROI Comparison Bar Chart */}
          <div className="glass rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white heading-font mb-4">ROI Comparison</h3>
            <div className="space-y-3">
              {results.sorted.map((project, index) => {
                const maxAbsRoi = Math.max(...results.sorted.map((p) => Math.abs(p.roi)), 1);
                const barWidth = Math.min((Math.abs(project.roi) / maxAbsRoi) * 100, 100);
                const isNegative = project.roi < 0;
                return (
                  <div key={index} className="flex items-center gap-4">
                    <span className="text-sm text-slate-300 w-32 sm:w-40 truncate shrink-0" title={project.name}>
                      {project.name}
                    </span>
                    <div className="flex-1 bg-white/5 rounded-full h-8 overflow-hidden relative">
                      <div
                        className={`h-full rounded-full flex items-center justify-end pr-3 ${isNegative ? 'bg-gradient-to-r from-rose-500/80 to-red-400/80' : 'bg-gradient-to-r from-teal-500/80 to-emerald-400/80'}`}
                        style={{ width: `${Math.max(barWidth, 12)}%` }}
                      >
                        <span className="text-xs font-medium text-white whitespace-nowrap">
                          {formatPercent(project.roi)}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex items-center gap-4 mt-4 text-xs text-slate-500">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-sm bg-gradient-to-r from-teal-500 to-emerald-400" />
                <span>Positive ROI</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-sm bg-gradient-to-r from-rose-500 to-red-400" />
                <span>Negative ROI</span>
              </div>
            </div>
          </div>

          {/* Profit Waterfall */}
          <div className="glass rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white heading-font mb-4">Profit Waterfall</h3>
            <p className="text-sm text-slate-400 mb-4">See how revenue breaks down into profit for each project.</p>
            <div className="space-y-5">
              {results.projects.map((project, index) => {
                const revenueWidth = 100;
                const directCostWidth = project.revenue > 0 ? (project.directCosts / project.revenue) * 100 : 0;
                const opportunityCostWidth = project.revenue > 0 ? (project.opportunityCost / project.revenue) * 100 : 0;
                const profitWidth = project.revenue > 0 ? Math.max((project.trueProfit / project.revenue) * 100, 0) : 0;
                return (
                  <div key={index}>
                    <p className="text-sm font-medium text-white mb-2">{project.name}</p>
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-slate-500 w-24 shrink-0 text-right">Revenue</span>
                        <div className="flex-1 bg-white/5 rounded-full h-6 overflow-hidden">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-blue-500/80 to-blue-400/80 flex items-center justify-end pr-2"
                            style={{ width: `${revenueWidth}%` }}
                          >
                            <span className="text-[10px] font-medium text-white">{formatCurrency(project.revenue)}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-slate-500 w-24 shrink-0 text-right">Direct Costs</span>
                        <div className="flex-1 bg-white/5 rounded-full h-6 overflow-hidden">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-orange-500/80 to-amber-400/80 flex items-center justify-end pr-2"
                            style={{ width: `${Math.max(directCostWidth, directCostWidth > 0 ? 12 : 0)}%` }}
                          >
                            {directCostWidth > 0 && (
                              <span className="text-[10px] font-medium text-white">-{formatCurrency(project.directCosts)}</span>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-slate-500 w-24 shrink-0 text-right">Opp. Cost</span>
                        <div className="flex-1 bg-white/5 rounded-full h-6 overflow-hidden">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-rose-500/80 to-pink-400/80 flex items-center justify-end pr-2"
                            style={{ width: `${Math.max(opportunityCostWidth, opportunityCostWidth > 0 ? 12 : 0)}%` }}
                          >
                            {opportunityCostWidth > 0 && (
                              <span className="text-[10px] font-medium text-white">-{formatCurrency(project.opportunityCost)}</span>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-slate-500 w-24 shrink-0 text-right">True Profit</span>
                        <div className="flex-1 bg-white/5 rounded-full h-6 overflow-hidden">
                          <div
                            className={`h-full rounded-full flex items-center justify-end pr-2 ${project.trueProfit >= 0 ? 'bg-gradient-to-r from-emerald-500/80 to-teal-400/80' : 'bg-gradient-to-r from-rose-600/80 to-rose-500/80'}`}
                            style={{ width: `${Math.max(profitWidth, 12)}%` }}
                          >
                            <span className="text-[10px] font-medium text-white">{formatCurrency(project.trueProfit)}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Insights Panel */}
          {results.insights.length > 0 && (
            <div className="glass rounded-2xl p-6 border border-teal-500/20 bg-teal-500/5">
              <h3 className="text-lg font-bold text-white heading-font mb-4">
                <span className="text-teal-400">Insights</span> &amp; Recommendations
              </h3>
              <div className="space-y-3">
                {results.insights.map((insight, index) => (
                  <div key={index} className="flex items-start gap-3 bg-white/5 rounded-xl p-4">
                    <div className="w-6 h-6 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
                      {index + 1}
                    </div>
                    <p className="text-sm text-slate-300">{insight}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Cross-links */}
          <div className="glass rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white heading-font mb-4">Related Tools</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <a
                href="/tools/project-profitability"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-500/30 rounded-xl p-4 transition-all group"
              >
                <p className="text-white font-medium text-sm group-hover:text-teal-400 transition-colors">Project Profitability Calculator</p>
                <p className="text-xs text-slate-500 mt-1">Model different pricing scenarios</p>
              </a>
              <a
                href="/tools/hourly-vs-project-pricing"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-500/30 rounded-xl p-4 transition-all group"
              >
                <p className="text-white font-medium text-sm group-hover:text-teal-400 transition-colors">Hourly vs Project Pricing</p>
                <p className="text-xs text-slate-500 mt-1">Which pricing model earns more?</p>
              </a>
              <a
                href="/tools/client-lifetime-value"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-500/30 rounded-xl p-4 transition-all group"
              >
                <p className="text-white font-medium text-sm group-hover:text-teal-400 transition-colors">Client Lifetime Value</p>
                <p className="text-xs text-slate-500 mt-1">How much is each client truly worth?</p>
              </a>
              <a
                href="/tools/break-even-calculator"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-500/30 rounded-xl p-4 transition-all group"
              >
                <p className="text-white font-medium text-sm group-hover:text-teal-400 transition-colors">Break-Even Calculator</p>
                <p className="text-xs text-slate-500 mt-1">How many projects to cover costs?</p>
              </a>
            </div>
          </div>

          {/* Copy Button */}
          <div className="flex justify-center">
            <button
              onClick={handleCopy}
              className="px-6 py-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-500/30 transition-all text-white font-medium"
            >
              {copied ? 'Copied!' : 'Copy ROI Analysis to Clipboard'}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

/* ---- Helper functions ---- */

function getROIColor(roi: number): string {
  if (roi > 200) return 'text-emerald-400';
  if (roi > 100) return 'text-teal-400';
  if (roi > 50) return 'text-amber-400';
  if (roi > 0) return 'text-orange-400';
  return 'text-rose-400';
}

function getTierBadgeClasses(tier: ROITier): string {
  switch (tier) {
    case 'Excellent':
      return 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-400';
    case 'Good':
      return 'bg-teal-500/10 border border-teal-500/20 text-teal-400';
    case 'Fair':
      return 'bg-amber-500/10 border border-amber-500/20 text-amber-400';
    case 'Poor':
      return 'bg-orange-500/10 border border-orange-500/20 text-orange-400';
    case 'Loss':
      return 'bg-rose-500/10 border border-rose-500/20 text-rose-400';
  }
}

function getTierDotColor(tier: ROITier): string {
  switch (tier) {
    case 'Excellent':
      return 'bg-emerald-400';
    case 'Good':
      return 'bg-teal-400';
    case 'Fair':
      return 'bg-amber-400';
    case 'Poor':
      return 'bg-orange-400';
    case 'Loss':
      return 'bg-rose-400';
  }
}
