'use client';

import { useState, useMemo, useCallback } from 'react';

/* ------------------------------------------------------------------ */
/*  Helpers                                                           */
/* ------------------------------------------------------------------ */

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

function getTodayString(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function uid(): string {
  return Math.random().toString(36).slice(2, 10);
}

/* ------------------------------------------------------------------ */
/*  Types                                                             */
/* ------------------------------------------------------------------ */

interface RecurringClient {
  id: string;
  name: string;
  monthlyValue: string;
  contractMonths: string;
  startDate: string;
}

interface ProjectedMonth {
  month: number;
  label: string;
  baseMRR: number;
  churnedRevenue: number;
  newRevenue: number;
  netMRR: number;
}

/* ------------------------------------------------------------------ */
/*  Presets                                                           */
/* ------------------------------------------------------------------ */

const PRESETS = [
  { label: 'Small Retainer', value: 500 },
  { label: 'Medium Retainer', value: 2000 },
  { label: 'Large Retainer', value: 5000 },
  { label: 'Enterprise', value: 10000 },
] as const;

/* ------------------------------------------------------------------ */
/*  Component                                                         */
/* ------------------------------------------------------------------ */

export default function RecurringRevenueClient() {
  const [clients, setClients] = useState<RecurringClient[]>([
    { id: uid(), name: 'Client A', monthlyValue: '2000', contractMonths: '12', startDate: getTodayString() },
    { id: uid(), name: 'Client B', monthlyValue: '3500', contractMonths: '6', startDate: getTodayString() },
  ]);
  const [churnRate, setChurnRate] = useState(5);
  const [growthRate, setGrowthRate] = useState(10);
  const [includeGst, setIncludeGst] = useState(false);
  const [copied, setCopied] = useState(false);

  /* ---- Client CRUD ---- */

  const addClient = useCallback((preset?: typeof PRESETS[number]) => {
    setClients((prev) => [
      ...prev,
      {
        id: uid(),
        name: preset ? preset.label : `Client ${String.fromCharCode(65 + prev.length)}`,
        monthlyValue: preset ? String(preset.value) : '',
        contractMonths: '12',
        startDate: getTodayString(),
      },
    ]);
  }, []);

  const removeClient = useCallback((id: string) => {
    setClients((prev) => prev.filter((c) => c.id !== id));
  }, []);

  const updateClient = useCallback(
    (id: string, field: keyof RecurringClient, value: string) => {
      setClients((prev) =>
        prev.map((c) => (c.id === id ? { ...c, [field]: value } : c))
      );
    },
    []
  );

  /* ---- Calculations ---- */

  const results = useMemo(() => {
    const gstMultiplier = includeGst ? 1.1 : 1;
    const parsed = clients.map((c) => ({
      ...c,
      monthly: Math.max(parseFloat(c.monthlyValue) || 0, 0),
      months: Math.max(parseInt(c.contractMonths) || 0, 0),
    }));

    const totalMRR = parsed.reduce((sum, c) => sum + c.monthly, 0);
    const arr = totalMRR * 12;
    const clientCount = parsed.filter((c) => c.monthly > 0).length;
    const avgRevenuePerClient = clientCount > 0 ? totalMRR / clientCount : 0;

    // Concentration
    const clientShares = parsed
      .filter((c) => c.monthly > 0)
      .map((c) => ({
        name: c.name,
        monthly: c.monthly,
        pct: totalMRR > 0 ? (c.monthly / totalMRR) * 100 : 0,
        annual: c.monthly * 12,
        contractMonths: c.months,
      }))
      .sort((a, b) => b.monthly - a.monthly);

    const largestClientPct = clientShares.length > 0 ? clientShares[0].pct : 0;
    const concentrationWarning = largestClientPct > 30;

    // Revenue Stability Score (0-100)
    // Based on: client count (more = better), concentration (lower = better), avg contract length
    const countScore = Math.min(clientCount * 10, 40); // max 40 pts from count
    const concentrationScore = Math.max(40 - largestClientPct, 0); // max 40 pts from low concentration
    const avgContractMonths =
      clientCount > 0
        ? parsed.filter((c) => c.monthly > 0).reduce((s, c) => s + c.months, 0) / clientCount
        : 0;
    const contractScore = Math.min(avgContractMonths * (20 / 12), 20); // max 20 pts from long contracts
    const stabilityScore = Math.round(Math.min(countScore + concentrationScore + contractScore, 100));

    // Monthly churn rate as decimal
    const monthlyChurn = churnRate / 100;
    const monthlyGrowth = growthRate / 100;
    const netRetention = (1 - monthlyChurn) * (1 + monthlyGrowth);

    // 12-month projection
    const projection: ProjectedMonth[] = [];
    let runningMRR = totalMRR;

    const now = new Date();
    for (let i = 0; i < 12; i++) {
      const projDate = new Date(now.getFullYear(), now.getMonth() + i, 1);
      const label = projDate.toLocaleDateString('en-AU', { month: 'short', year: '2-digit' });

      const baseMRR = runningMRR;
      const churned = baseMRR * monthlyChurn;
      const newRev = baseMRR * monthlyGrowth;
      const netMRR = baseMRR - churned + newRev;

      projection.push({
        month: i,
        label,
        baseMRR,
        churnedRevenue: churned,
        newRevenue: newRev,
        netMRR,
      });

      runningMRR = netMRR;
    }

    const annualChurnLoss = totalMRR * 12 * monthlyChurn;
    const growthNeededToOffsetChurn = monthlyChurn; // growth rate = churn rate to break even
    const projectedMRR12 = projection.length > 0 ? projection[projection.length - 1].netMRR : totalMRR;

    return {
      totalMRR,
      arr,
      clientCount,
      avgRevenuePerClient,
      clientShares,
      largestClientPct,
      concentrationWarning,
      stabilityScore,
      monthlyChurn,
      monthlyGrowth,
      netRetention,
      projection,
      annualChurnLoss,
      growthNeededToOffsetChurn,
      projectedMRR12,
      gstMultiplier,
    };
  }, [clients, churnRate, growthRate, includeGst]);

  /* ---- Chart helpers ---- */

  const maxMRR = useMemo(() => {
    if (results.projection.length === 0) return 1;
    return Math.max(...results.projection.map((p) => Math.max(p.netMRR, p.baseMRR + p.newRevenue)), 1);
  }, [results.projection]);

  /* ---- Copy to clipboard ---- */

  const handleCopy = useCallback(() => {
    const gstLabel = includeGst ? ' (inc. GST)' : '';
    const gm = results.gstMultiplier;
    const lines = [
      'Recurring Revenue Summary — InvoiceFlow',
      '==========================================',
      '',
      `Current MRR: ${formatCurrencyExact(results.totalMRR * gm)}${gstLabel}`,
      `Annual Recurring Revenue: ${formatCurrencyExact(results.arr * gm)}${gstLabel}`,
      `Active Clients: ${results.clientCount}`,
      `Avg Revenue Per Client: ${formatCurrencyExact(results.avgRevenuePerClient * gm)}`,
      `Revenue Stability Score: ${results.stabilityScore}/100`,
      '',
      `Monthly Churn Rate: ${churnRate}%`,
      `Monthly Growth Rate: ${growthRate}%`,
      `Net Revenue Retention: ${(results.netRetention * 100).toFixed(1)}%`,
      '',
      '--- Client Breakdown ---',
      '',
    ];

    results.clientShares.forEach((c) => {
      lines.push(`${c.name}: ${formatCurrencyExact(c.monthly * gm)}/mo (${c.pct.toFixed(1)}% of MRR) — ${c.contractMonths}mo contract`);
    });

    lines.push('', '--- 12-Month Projection ---', '');
    results.projection.forEach((p) => {
      lines.push(`${p.label}: ${formatCurrencyExact(p.netMRR * gm)}`);
    });

    lines.push(
      '',
      `Projected MRR (Month 12): ${formatCurrencyExact(results.projectedMRR12 * gm)}`,
      `Annual Churn Loss: ${formatCurrencyExact(results.annualChurnLoss * gm)}`,
      '',
      'Generated at invoiceflow.au/tools/recurring-revenue-calculator'
    );

    navigator.clipboard.writeText(lines.join('\n')).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [results, churnRate, growthRate, includeGst]);

  /* ---- Stability score color ---- */

  function scoreColor(score: number): string {
    if (score >= 75) return 'text-emerald-400';
    if (score >= 50) return 'text-teal-400';
    if (score >= 25) return 'text-amber-400';
    return 'text-red-400';
  }

  function scoreBg(score: number): string {
    if (score >= 75) return 'from-emerald-500/10 to-emerald-500/5 border-emerald-500/20';
    if (score >= 50) return 'from-teal-500/10 to-blue-500/5 border-teal-500/20';
    if (score >= 25) return 'from-amber-500/10 to-amber-500/5 border-amber-500/20';
    return 'from-red-500/10 to-red-500/5 border-red-500/20';
  }

  const inputClass =
    'w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500/40 focus:border-teal-500/40 transition-all';
  const labelClass = 'block text-sm font-medium text-slate-300 mb-1.5';

  const gm = results.gstMultiplier;

  return (
    <div className="space-y-8">
      {/* ========== Inputs ========== */}
      <div className="glass rounded-2xl p-6 sm:p-8 space-y-6">
        <h2 className="text-xl font-bold text-white heading-font">Your Recurring Clients</h2>
        <p className="text-sm text-slate-400">
          Add your recurring clients below to calculate MRR, ARR, and 12-month projections.
          Use the presets for common retainer values.
        </p>

        {/* Presets */}
        <div>
          <p className="text-xs text-slate-500 uppercase tracking-wide mb-2 font-medium">Quick Add Presets</p>
          <div className="flex flex-wrap gap-2">
            {PRESETS.map((preset) => (
              <button
                key={preset.label}
                onClick={() => addClient(preset)}
                className="px-3 py-2 rounded-lg text-sm font-medium bg-white/5 border border-white/10 text-slate-300 hover:text-teal-400 hover:bg-teal-500/10 hover:border-teal-500/20 transition-all"
              >
                {preset.label} ({formatCurrency(preset.value)}/mo)
              </button>
            ))}
          </div>
        </div>

        {/* Client rows */}
        <div className="space-y-3">
          {clients.map((client, idx) => (
            <div
              key={client.id}
              className="bg-white/[0.03] border border-white/5 rounded-xl p-4 transition-all hover:border-white/10"
            >
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-end">
                {/* Name */}
                <div className="sm:col-span-3">
                  {idx === 0 && <label className={labelClass}>Client Name</label>}
                  <input
                    type="text"
                    value={client.name}
                    onChange={(e) => updateClient(client.id, 'name', e.target.value)}
                    className={inputClass}
                    placeholder="Client name"
                  />
                </div>
                {/* Monthly Value */}
                <div className="sm:col-span-3">
                  {idx === 0 && <label className={labelClass}>Monthly Value ($)</label>}
                  <input
                    type="number"
                    value={client.monthlyValue}
                    onChange={(e) => updateClient(client.id, 'monthlyValue', e.target.value)}
                    className={inputClass}
                    placeholder="2000"
                    min="0"
                    step="100"
                  />
                </div>
                {/* Contract Length */}
                <div className="sm:col-span-2">
                  {idx === 0 && <label className={labelClass}>Contract (mo)</label>}
                  <input
                    type="number"
                    value={client.contractMonths}
                    onChange={(e) => updateClient(client.id, 'contractMonths', e.target.value)}
                    className={inputClass}
                    placeholder="12"
                    min="1"
                    max="60"
                  />
                </div>
                {/* Start Date */}
                <div className="sm:col-span-3">
                  {idx === 0 && <label className={labelClass}>Start Date</label>}
                  <input
                    type="date"
                    value={client.startDate}
                    onChange={(e) => updateClient(client.id, 'startDate', e.target.value)}
                    className={inputClass}
                  />
                </div>
                {/* Remove */}
                <div className="sm:col-span-1 flex items-center justify-center">
                  {clients.length > 1 && (
                    <button
                      onClick={() => removeClient(client.id)}
                      className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 text-slate-500 hover:text-red-400 hover:bg-red-500/10 hover:border-red-500/20 transition-all flex items-center justify-center"
                      title="Remove client"
                    >
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M3 3l8 8M11 3l-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add Client button */}
        <button
          onClick={() => addClient()}
          className="w-full py-2.5 rounded-lg border border-dashed border-white/10 text-slate-400 hover:text-teal-400 hover:border-teal-500/30 hover:bg-teal-500/5 transition-all text-sm font-medium"
        >
          + Add Another Client
        </button>

        {/* Churn, Growth, GST */}
        <div className="border-t border-white/10 pt-6 space-y-6">
          <div className="grid sm:grid-cols-2 gap-6">
            {/* Churn Rate */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-sm font-medium text-slate-300">Monthly Churn Rate</label>
                <span className="text-sm font-bold text-teal-400">{churnRate}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="30"
                step="1"
                value={churnRate}
                onChange={(e) => setChurnRate(parseInt(e.target.value))}
                className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer accent-teal-500 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-teal-400 [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:shadow-teal-400/30 [&::-webkit-slider-thumb]:cursor-pointer"
              />
              <div className="flex justify-between text-xs text-slate-500 mt-1">
                <span>0%</span>
                <span>15%</span>
                <span>30%</span>
              </div>
            </div>

            {/* Growth Rate */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-sm font-medium text-slate-300">Monthly Growth Rate</label>
                <span className="text-sm font-bold text-teal-400">{growthRate}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="50"
                step="1"
                value={growthRate}
                onChange={(e) => setGrowthRate(parseInt(e.target.value))}
                className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer accent-teal-500 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-teal-400 [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:shadow-teal-400/30 [&::-webkit-slider-thumb]:cursor-pointer"
              />
              <div className="flex justify-between text-xs text-slate-500 mt-1">
                <span>0%</span>
                <span>25%</span>
                <span>50%</span>
              </div>
            </div>
          </div>

          {/* GST Toggle */}
          <div>
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
                  GST Registered (10%)
                </span>
                <p className="text-xs text-slate-500">Show all values including GST</p>
              </div>
            </label>
          </div>
        </div>
      </div>

      {/* ========== Results ========== */}
      <div className="glass rounded-2xl p-6 sm:p-8 space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-white heading-font">Revenue Analysis</h2>
          <button
            onClick={handleCopy}
            className="flex items-center gap-2 text-sm px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all"
          >
            {copied ? (
              <span className="text-emerald-400">Copied</span>
            ) : (
              <>Copy Summary</>
            )}
          </button>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          <div className="bg-gradient-to-br from-teal-500/10 to-blue-500/10 border border-teal-500/20 rounded-xl p-4">
            <p className="text-xs text-teal-400/70 uppercase tracking-wide mb-1">Current MRR</p>
            <p className="text-xl sm:text-2xl font-bold text-white">
              {formatCurrency(results.totalMRR * gm)}
            </p>
            {includeGst && <p className="text-xs text-slate-500 mt-0.5">inc. GST</p>}
          </div>
          <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-4">
            <p className="text-xs text-blue-400/70 uppercase tracking-wide mb-1">Annual (ARR)</p>
            <p className="text-xl sm:text-2xl font-bold text-white">
              {formatCurrency(results.arr * gm)}
            </p>
            {includeGst && <p className="text-xs text-slate-500 mt-0.5">inc. GST</p>}
          </div>
          <div className="bg-white/5 rounded-xl p-4">
            <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">Avg / Client</p>
            <p className="text-xl sm:text-2xl font-bold text-white">
              {formatCurrency(results.avgRevenuePerClient * gm)}
            </p>
            <p className="text-xs text-slate-500 mt-0.5">per month</p>
          </div>
          <div className={`bg-gradient-to-br ${scoreBg(results.stabilityScore)} rounded-xl p-4`}>
            <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">Stability Score</p>
            <p className={`text-xl sm:text-2xl font-bold ${scoreColor(results.stabilityScore)}`}>
              {results.stabilityScore}/100
            </p>
            <p className="text-xs text-slate-500 mt-0.5">
              {results.stabilityScore >= 75
                ? 'Excellent'
                : results.stabilityScore >= 50
                  ? 'Good'
                  : results.stabilityScore >= 25
                    ? 'Needs work'
                    : 'At risk'}
            </p>
          </div>
        </div>

        {/* 12-Month Projection Chart */}
        {results.projection.length > 0 && results.totalMRR > 0 && (
          <div>
            <h3 className="text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wide">
              12-Month MRR Projection
            </h3>
            <div className="bg-white/5 rounded-xl p-5">
              {/* Chart */}
              <div className="relative h-64 flex items-end gap-1.5">
                {results.projection.map((p, i) => {
                  const totalHeight = (p.netMRR / maxMRR) * 100;
                  const baseHeight = ((p.baseMRR - p.churnedRevenue) / maxMRR) * 100;
                  const newHeight = (p.newRevenue / maxMRR) * 100;
                  const churnHeight = (p.churnedRevenue / maxMRR) * 100;

                  return (
                    <div key={i} className="flex-1 flex flex-col items-center gap-0 group relative">
                      {/* Tooltip */}
                      <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-slate-800 border border-white/10 rounded-lg px-3 py-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20 whitespace-nowrap shadow-xl">
                        <p className="text-white font-semibold mb-1">{p.label}</p>
                        <p className="text-slate-300">Net MRR: {formatCurrency(p.netMRR * gm)}</p>
                        <p className="text-red-400">Churned: -{formatCurrency(p.churnedRevenue * gm)}</p>
                        <p className="text-emerald-400">New: +{formatCurrency(p.newRevenue * gm)}</p>
                      </div>

                      {/* Stacked bar */}
                      <div
                        className="w-full rounded-t-md overflow-hidden flex flex-col-reverse transition-all"
                        style={{ height: `${Math.max(totalHeight, 2)}%` }}
                      >
                        {/* Base retained */}
                        <div
                          className="w-full bg-gradient-to-t from-teal-500/60 to-teal-400/40"
                          style={{ height: `${(baseHeight / Math.max(totalHeight, 1)) * 100}%` }}
                        />
                        {/* New revenue */}
                        <div
                          className="w-full bg-gradient-to-t from-emerald-500/60 to-emerald-400/40"
                          style={{ height: `${(newHeight / Math.max(totalHeight, 1)) * 100}%` }}
                        />
                      </div>

                      {/* Churn indicator line */}
                      {churnHeight > 0.5 && (
                        <div
                          className="absolute w-full bg-red-500/30 rounded-sm"
                          style={{
                            bottom: `${((p.baseMRR - p.churnedRevenue) / maxMRR) * 100}%`,
                            height: `${churnHeight}%`,
                          }}
                        />
                      )}

                      {/* Label */}
                      <span className="text-[10px] text-slate-500 mt-2 hidden sm:block">{p.label}</span>
                    </div>
                  );
                })}
              </div>

              {/* Y-axis labels */}
              <div className="flex justify-between text-xs text-slate-500 mt-1 pt-2 border-t border-white/5">
                <span>Month 1</span>
                <span>Month 12</span>
              </div>

              {/* Legend */}
              <div className="flex flex-wrap gap-4 mt-4 text-xs text-slate-500">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-sm bg-teal-500/60" />
                  <span>Retained Revenue</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-sm bg-emerald-500/60" />
                  <span>New Revenue</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-sm bg-red-500/30" />
                  <span>Churned Revenue</span>
                </div>
              </div>

              {/* Projected end values */}
              <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="bg-white/5 rounded-lg p-3">
                  <p className="text-xs text-slate-500 mb-0.5">MRR Month 12</p>
                  <p className="text-sm font-bold text-white">
                    {formatCurrency(results.projectedMRR12 * gm)}
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <p className="text-xs text-slate-500 mb-0.5">MRR Change</p>
                  <p className={`text-sm font-bold ${results.projectedMRR12 >= results.totalMRR ? 'text-emerald-400' : 'text-red-400'}`}>
                    {results.projectedMRR12 >= results.totalMRR ? '+' : ''}
                    {formatCurrency((results.projectedMRR12 - results.totalMRR) * gm)}
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-3 col-span-2 sm:col-span-1">
                  <p className="text-xs text-slate-500 mb-0.5">Net Retention</p>
                  <p className={`text-sm font-bold ${results.netRetention >= 1 ? 'text-emerald-400' : 'text-red-400'}`}>
                    {(results.netRetention * 100).toFixed(1)}%
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Client Breakdown Table */}
        {results.clientShares.length > 0 && (
          <div>
            <h3 className="text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wide">
              Client Revenue Breakdown
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 px-3 text-slate-400 font-semibold">Client</th>
                    <th className="text-right py-3 px-3 text-slate-400 font-semibold">Monthly</th>
                    <th className="text-right py-3 px-3 text-slate-400 font-semibold">% of MRR</th>
                    <th className="text-right py-3 px-3 text-slate-400 font-semibold">Contract</th>
                    <th className="text-right py-3 px-3 text-slate-400 font-semibold">Annual Value</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {results.clientShares.map((c, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white/[0.02]' : ''}>
                      <td className="py-3 px-3">
                        <div className="flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full ${c.pct > 30 ? 'bg-amber-400' : 'bg-teal-400'}`} />
                          <span className="text-white font-medium">{c.name}</span>
                        </div>
                      </td>
                      <td className="py-3 px-3 text-right text-white">
                        {formatCurrencyExact(c.monthly * gm)}
                      </td>
                      <td className="py-3 px-3 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <div className="w-16 h-1.5 bg-white/10 rounded-full overflow-hidden hidden sm:block">
                            <div
                              className={`h-full rounded-full ${c.pct > 30 ? 'bg-amber-400' : 'bg-teal-400'}`}
                              style={{ width: `${Math.min(c.pct, 100)}%` }}
                            />
                          </div>
                          <span className={c.pct > 30 ? 'text-amber-400 font-medium' : 'text-slate-300'}>
                            {c.pct.toFixed(1)}%
                          </span>
                        </div>
                      </td>
                      <td className="py-3 px-3 text-right text-slate-300">
                        {c.contractMonths} months
                      </td>
                      <td className="py-3 px-3 text-right text-white font-medium">
                        {formatCurrencyExact(c.annual * gm)}
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="border-t border-white/10">
                    <td className="py-3 px-3 text-white font-semibold">Total</td>
                    <td className="py-3 px-3 text-right text-white font-bold">
                      {formatCurrencyExact(results.totalMRR * gm)}
                    </td>
                    <td className="py-3 px-3 text-right text-slate-400">100%</td>
                    <td className="py-3 px-3" />
                    <td className="py-3 px-3 text-right text-white font-bold">
                      {formatCurrencyExact(results.arr * gm)}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        )}

        {/* Key Insights */}
        <div>
          <h3 className="text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wide">
            Key Insights
          </h3>
          <div className="space-y-3">
            {/* Concentration warning */}
            {results.concentrationWarning && (
              <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 flex gap-3">
                <div className="mt-0.5">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 6v4m0 4h.01M19 10a9 9 0 11-18 0 9 9 0 0118 0z" stroke="#fbbf24" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-amber-300 font-semibold">High Client Concentration</p>
                  <p className="text-sm text-amber-300/80 mt-1">
                    Your largest client ({results.clientShares[0]?.name}) represents{' '}
                    <strong>{results.largestClientPct.toFixed(1)}%</strong> of your MRR. If they leave,
                    you&apos;d lose {formatCurrency(results.clientShares[0]?.monthly * gm)}/mo instantly.
                    Aim to keep no single client above 30% of total revenue.
                  </p>
                </div>
              </div>
            )}

            {/* Churn impact */}
            {results.totalMRR > 0 && churnRate > 0 && (
              <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 flex gap-3">
                <div className="mt-0.5">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4 16l4-4m0 0l4-4m-4 4l4 4m-4-4L4 8" stroke="#f87171" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-red-300 font-semibold">Churn Impact</p>
                  <p className="text-sm text-red-300/80 mt-1">
                    At {churnRate}% monthly churn, you&apos;ll lose approximately{' '}
                    <strong>{formatCurrency(results.annualChurnLoss * gm)}</strong> in revenue over 12 months.
                    {growthRate > churnRate
                      ? ' Your growth rate is currently outpacing churn — keep it up.'
                      : growthRate === churnRate
                        ? ' Your growth exactly offsets churn — you need faster acquisition to grow.'
                        : ` You need at least ${churnRate}% monthly growth to break even.`}
                  </p>
                </div>
              </div>
            )}

            {/* Growth needed */}
            {results.totalMRR > 0 && growthRate < churnRate && churnRate > 0 && (
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4 flex gap-3">
                <div className="mt-0.5">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M3 17l6-6m0 0l4-4m-4 4h6m-6 0V5" stroke="#60a5fa" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-blue-300 font-semibold">Growth Below Churn</p>
                  <p className="text-sm text-blue-300/80 mt-1">
                    Your {growthRate}% growth rate isn&apos;t keeping up with {churnRate}% churn.
                    You need to acquire at least {formatCurrency(results.totalMRR * (churnRate / 100) * gm)}/mo
                    in new recurring revenue just to maintain your current MRR. Consider raising rates
                    with existing clients or adding retainer packages.
                  </p>
                </div>
              </div>
            )}

            {/* All good */}
            {results.totalMRR > 0 && !results.concentrationWarning && growthRate > churnRate && (
              <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4 flex gap-3">
                <div className="mt-0.5">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M6 10l3 3 5-6" stroke="#34d399" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="10" cy="10" r="8" stroke="#34d399" strokeWidth="1.5" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-emerald-300 font-semibold">Healthy Recurring Revenue</p>
                  <p className="text-sm text-emerald-300/80 mt-1">
                    Your growth outpaces churn and no single client dominates your revenue.
                    At this rate, your MRR will reach {formatCurrency(results.projectedMRR12 * gm)} in
                    12 months — a {((results.projectedMRR12 / results.totalMRR - 1) * 100).toFixed(0)}% increase.
                  </p>
                </div>
              </div>
            )}

            {/* Empty state */}
            {results.totalMRR === 0 && (
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                <p className="text-slate-400 text-sm">
                  Add at least one recurring client above to see your revenue analysis.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Cross-links */}
        <div className="border-t border-white/10 pt-6">
          <h3 className="text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wide">
            Related Tools
          </h3>
          <div className="grid sm:grid-cols-3 gap-3">
            <a
              href="/tools/retainer-calculator"
              className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-4 transition-all group"
            >
              <p className="text-sm font-medium text-white group-hover:text-teal-400 transition-colors">
                Retainer Calculator
              </p>
              <p className="text-xs text-slate-500 mt-1">
                Price your retainer packages for recurring revenue
              </p>
            </a>
            <a
              href="/tools/client-lifetime-value"
              className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-4 transition-all group"
            >
              <p className="text-sm font-medium text-white group-hover:text-teal-400 transition-colors">
                Client Lifetime Value Calculator
              </p>
              <p className="text-xs text-slate-500 mt-1">
                Calculate the total value of each client relationship
              </p>
            </a>
            <a
              href="/tools/revenue-goal-planner"
              className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-4 transition-all group"
            >
              <p className="text-sm font-medium text-white group-hover:text-teal-400 transition-colors">
                Revenue Goal Planner
              </p>
              <p className="text-xs text-slate-500 mt-1">
                Set and track monthly and annual revenue targets
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
