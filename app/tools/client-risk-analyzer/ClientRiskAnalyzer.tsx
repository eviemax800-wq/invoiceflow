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

interface ClientEntry {
  id: number;
  name: string;
  revenue: string;
}

type RiskLevel = 'Low' | 'Moderate' | 'High' | 'Critical';

const samplePortfolio: Omit<ClientEntry, 'id'>[] = [
  { name: 'Greenfield Agency', revenue: '48000' },
  { name: 'Smith & Co Legal', revenue: '32000' },
  { name: 'Boutique Retail Co', revenue: '18000' },
  { name: 'TechStart Pty Ltd', revenue: '12000' },
  { name: 'Marina Designs', revenue: '8000' },
];

let nextId = 1;
function createClient(name = '', revenue = ''): ClientEntry {
  return { id: nextId++, name, revenue };
}

export default function ClientRiskAnalyzer() {
  const [clients, setClients] = useState<ClientEntry[]>([
    createClient(),
    createClient(),
    createClient(),
  ]);
  const [copied, setCopied] = useState(false);

  const addClient = useCallback(() => {
    if (clients.length >= 10) return;
    setClients((prev) => [...prev, createClient()]);
  }, [clients.length]);

  const removeClient = useCallback((id: number) => {
    setClients((prev) => prev.filter((c) => c.id !== id));
  }, []);

  const updateClient = useCallback((id: number, field: 'name' | 'revenue', value: string) => {
    setClients((prev) =>
      prev.map((c) => (c.id === id ? { ...c, [field]: value } : c))
    );
  }, []);

  const loadSample = useCallback(() => {
    const loaded = samplePortfolio.map((s) => createClient(s.name, s.revenue));
    setClients(loaded);
  }, []);

  const results = useMemo(() => {
    const parsed = clients
      .map((c) => ({
        name: c.name.trim() || 'Unnamed Client',
        revenue: parseFloat(c.revenue) || 0,
      }))
      .filter((c) => c.revenue > 0);

    if (parsed.length === 0) return null;

    const totalRevenue = parsed.reduce((sum, c) => sum + c.revenue, 0);
    if (totalRevenue <= 0) return null;

    // Sort by revenue descending
    const sorted = [...parsed].sort((a, b) => b.revenue - a.revenue);

    // Revenue distribution with percentages
    const distribution = sorted.map((c) => ({
      ...c,
      percentage: (c.revenue / totalRevenue) * 100,
    }));

    // HHI = sum of squared market shares (as whole percentages)
    const hhi = distribution.reduce((sum, c) => sum + Math.pow(c.percentage, 2), 0);

    // Top client percentage
    const topClientPct = distribution[0].percentage;

    // Top 3 clients percentage
    const top3Pct = distribution.slice(0, 3).reduce((sum, c) => sum + c.percentage, 0);

    // Risk level determination
    let riskLevel: RiskLevel;
    if (topClientPct > 60 || hhi > 4000) {
      riskLevel = 'Critical';
    } else if (topClientPct > 40 || hhi > 2500) {
      riskLevel = 'High';
    } else if (topClientPct > 25 || hhi > 1500) {
      riskLevel = 'Moderate';
    } else {
      riskLevel = 'Low';
    }

    // "What if" largest client leaves
    const largestClient = sorted[0];
    const revenueLoss = largestClient.revenue;
    const revenueLossPct = (revenueLoss / totalRevenue) * 100;
    const remainingAnnual = totalRevenue - revenueLoss;
    const remainingMonthly = remainingAnnual / 12;
    const monthlyExpenses = (totalRevenue / 12) * 0.6; // 60% of current income
    const monthsCovered = monthlyExpenses > 0 ? remainingMonthly / monthlyExpenses : 0;

    // Recommendations based on risk level
    const recommendations = getRecommendations(riskLevel, topClientPct, parsed.length);

    return {
      distribution,
      totalRevenue,
      hhi,
      hhiRounded: Math.round(hhi),
      topClientPct,
      top3Pct,
      clientCount: parsed.length,
      riskLevel,
      largestClient,
      revenueLoss,
      revenueLossPct,
      remainingAnnual,
      remainingMonthly,
      monthlyExpenses,
      monthsCovered,
      recommendations,
    };
  }, [clients]);

  const handleCopy = useCallback(() => {
    if (!results) return;
    const lines = [
      'CLIENT CONCENTRATION RISK ANALYSIS',
      '====================================',
      '',
      'PORTFOLIO:',
      ...results.distribution.map(
        (c) => `  ${c.name}: ${formatCurrency(c.revenue)} (${c.percentage.toFixed(1)}%)`
      ),
      '',
      `Total Revenue: ${formatCurrency(results.totalRevenue)}`,
      '',
      'KEY METRICS:',
      `  Top client share: ${results.topClientPct.toFixed(1)}%`,
      `  Top 3 clients share: ${results.top3Pct.toFixed(1)}%`,
      `  Number of clients: ${results.clientCount}`,
      `  HHI Score: ${results.hhiRounded}`,
      `  Risk Level: ${results.riskLevel}`,
      '',
      'WHAT-IF ANALYSIS:',
      `  If ${results.largestClient.name} left tomorrow:`,
      `  Revenue loss: ${formatCurrency(results.revenueLoss)} (${results.revenueLossPct.toFixed(1)}%)`,
      `  Remaining annual: ${formatCurrency(results.remainingAnnual)}`,
      `  Remaining monthly: ${formatCurrency(results.remainingMonthly)}`,
      `  Months of expenses covered: ${results.monthsCovered.toFixed(1)}`,
      '',
      'RECOMMENDATIONS:',
      ...results.recommendations.map((r) => `  - ${r}`),
      '',
      'Generated by InvoiceFlow — invoiceflow.au/tools/client-risk-analyzer',
    ];
    navigator.clipboard.writeText(lines.join('\n'));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [results]);

  return (
    <div className="space-y-8">
      {/* Quick Actions */}
      <div className="glass rounded-2xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-white heading-font">Your Client Portfolio</h3>
          <button
            onClick={loadSample}
            className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-500/30 transition-all text-sm text-slate-300 hover:text-white"
          >
            Load Sample Portfolio
          </button>
        </div>

        {/* Client Entries */}
        <div className="space-y-3">
          {clients.map((client, index) => (
            <div key={client.id} className="flex items-center gap-3">
              <span className="text-sm text-slate-500 w-6 text-right shrink-0">{index + 1}.</span>
              <input
                type="text"
                placeholder="Client name"
                value={client.name}
                onChange={(e) => updateClient(client.id, 'name', e.target.value)}
                className="flex-1 px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-600 focus:border-teal-500 focus:outline-none transition-colors text-sm"
              />
              <div className="relative w-40 shrink-0">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-sm">$</span>
                <input
                  type="number"
                  placeholder="Annual revenue"
                  value={client.revenue}
                  onChange={(e) => updateClient(client.id, 'revenue', e.target.value)}
                  className="w-full pl-7 pr-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-600 focus:border-teal-500 focus:outline-none transition-colors text-sm"
                  min="0"
                />
              </div>
              <button
                onClick={() => removeClient(client.id)}
                disabled={clients.length <= 1}
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-rose-500/20 border border-white/10 hover:border-rose-500/30 text-slate-500 hover:text-rose-400 transition-all flex items-center justify-center shrink-0 disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Remove client"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          ))}
        </div>

        {clients.length < 10 && (
          <button
            onClick={addClient}
            className="mt-4 w-full px-4 py-3 rounded-lg border border-dashed border-white/10 hover:border-teal-500/30 text-slate-500 hover:text-teal-400 transition-all text-sm"
          >
            + Add Client ({clients.length}/10)
          </button>
        )}
      </div>

      {/* Results */}
      {results && (
        <>
          {/* Risk Badge */}
          <div className="glass rounded-2xl p-6 text-center">
            <p className="text-sm text-slate-400 mb-3">Overall Concentration Risk</p>
            <div className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-lg font-bold ${getRiskBadgeClasses(results.riskLevel)}`}>
              <div className={`w-3 h-3 rounded-full ${getRiskDotColor(results.riskLevel)}`} />
              {results.riskLevel} Risk
            </div>
            <p className="text-slate-400 text-sm mt-3 max-w-md mx-auto">
              {getRiskDescription(results.riskLevel)}
            </p>
          </div>

          {/* Key Metrics Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="glass rounded-xl p-4 text-center">
              <p className="text-xs text-slate-400 mb-1">Top Client Share</p>
              <p className={`text-xl font-bold ${getPercentColor(results.topClientPct)}`}>
                {results.topClientPct.toFixed(1)}%
              </p>
            </div>
            <div className="glass rounded-xl p-4 text-center">
              <p className="text-xs text-slate-400 mb-1">Top 3 Clients</p>
              <p className={`text-xl font-bold ${results.top3Pct > 80 ? 'text-rose-400' : results.top3Pct > 60 ? 'text-amber-400' : 'text-emerald-400'}`}>
                {results.top3Pct.toFixed(1)}%
              </p>
            </div>
            <div className="glass rounded-xl p-4 text-center">
              <p className="text-xs text-slate-400 mb-1">Active Clients</p>
              <p className="text-xl font-bold text-white">{results.clientCount}</p>
            </div>
            <div className="glass rounded-xl p-4 text-center">
              <p className="text-xs text-slate-400 mb-1">HHI Score</p>
              <p className={`text-xl font-bold ${getHHIColor(results.hhiRounded)}`}>
                {results.hhiRounded.toLocaleString()}
              </p>
              <p className="text-[10px] text-slate-500 mt-0.5">{getHHILabel(results.hhiRounded)}</p>
            </div>
          </div>

          {/* Revenue Distribution Chart */}
          <div className="glass rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white heading-font mb-4">Revenue Distribution</h3>
            <div className="space-y-3">
              {results.distribution.map((client, index) => {
                const barColor = getBarColor(client.percentage);
                return (
                  <div key={index} className="flex items-center gap-4">
                    <span className="text-sm text-slate-300 w-32 sm:w-40 truncate shrink-0" title={client.name}>
                      {client.name}
                    </span>
                    <div className="flex-1 bg-white/5 rounded-full h-8 overflow-hidden relative">
                      <div
                        className={`h-full rounded-full flex items-center justify-end pr-3 ${barColor}`}
                        style={{ width: `${Math.max(client.percentage, 8)}%` }}
                      >
                        <span className="text-xs font-medium text-white whitespace-nowrap">
                          {client.percentage.toFixed(1)}%
                        </span>
                      </div>
                    </div>
                    <span className="text-xs text-slate-500 w-20 text-right shrink-0">
                      {formatCurrency(client.revenue)}
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="flex items-center gap-4 mt-4 text-xs text-slate-500">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-sm bg-gradient-to-r from-teal-500 to-emerald-400" />
                <span>Healthy (&lt;25%)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-sm bg-gradient-to-r from-amber-500 to-orange-400" />
                <span>Concentrated (25-40%)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-sm bg-gradient-to-r from-rose-500 to-red-400" />
                <span>Dangerous (&gt;40%)</span>
              </div>
            </div>
          </div>

          {/* What If Section */}
          <div className="glass rounded-2xl p-6 border border-amber-500/20 bg-amber-500/5">
            <h3 className="text-lg font-bold text-white heading-font mb-2">
              What If Your Largest Client Left Tomorrow?
            </h3>
            <p className="text-sm text-slate-400 mb-4">
              If <span className="text-white font-medium">{results.largestClient.name}</span> disappeared overnight, here&apos;s what happens:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white/5 rounded-xl p-4">
                <p className="text-xs text-slate-400 mb-1">Revenue Loss</p>
                <p className="text-xl font-bold text-rose-400">{formatCurrency(results.revenueLoss)}</p>
                <p className="text-xs text-slate-500 mt-1">{results.revenueLossPct.toFixed(1)}% of total revenue</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <p className="text-xs text-slate-400 mb-1">Remaining Monthly Income</p>
                <p className="text-xl font-bold text-white">{formatCurrency(results.remainingMonthly)}</p>
                <p className="text-xs text-slate-500 mt-1">down from {formatCurrency(results.totalRevenue / 12)}/mo</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <p className="text-xs text-slate-400 mb-1">Monthly Expenses (est.)</p>
                <p className="text-xl font-bold text-slate-300">{formatCurrency(results.monthlyExpenses)}</p>
                <p className="text-xs text-slate-500 mt-1">Based on 60% of current income</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <p className="text-xs text-slate-400 mb-1">Survival Estimate</p>
                <p className={`text-xl font-bold ${results.monthsCovered >= 1 ? 'text-amber-400' : 'text-rose-400'}`}>
                  {results.monthsCovered >= 1
                    ? `${results.monthsCovered.toFixed(1)} months`
                    : 'Shortfall'}
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  {results.monthsCovered >= 1.5
                    ? 'Remaining income covers expenses — but start diversifying now'
                    : results.monthsCovered >= 1
                    ? 'Barely covered — urgently diversify your client base'
                    : 'Critical — remaining income does not cover expenses'}
                </p>
              </div>
            </div>
            <div className={`mt-4 p-3 rounded-lg text-sm font-medium ${
              results.monthsCovered >= 1.5
                ? 'bg-amber-500/10 text-amber-300 border border-amber-500/20'
                : 'bg-rose-500/10 text-rose-300 border border-rose-500/20'
            }`}>
              {results.monthsCovered >= 1.5
                ? `You'd survive, but losing ${results.revenueLossPct.toFixed(0)}% of revenue would be painful. Time to reduce dependency.`
                : `Critical exposure — losing ${results.largestClient.name} would put your business at serious financial risk. Diversify immediately.`}
            </div>
          </div>

          {/* Recommendations */}
          <div className="glass rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white heading-font mb-4">Recommendations</h3>
            <div className="space-y-3">
              {results.recommendations.map((rec, index) => (
                <div key={index} className="flex items-start gap-3 bg-white/5 rounded-xl p-4">
                  <div className="w-6 h-6 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
                    {index + 1}
                  </div>
                  <p className="text-sm text-slate-300">{rec}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Cross-links */}
          <div className="glass rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white heading-font mb-4">Related Tools</h3>
            <div className="grid sm:grid-cols-3 gap-3">
              <a
                href="/tools/client-lifetime-value"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-500/30 rounded-xl p-4 transition-all group"
              >
                <p className="text-white font-medium text-sm group-hover:text-teal-400 transition-colors">Client Lifetime Value Calculator</p>
                <p className="text-xs text-slate-500 mt-1">How much is each client truly worth?</p>
              </a>
              <a
                href="/tools/business-health-score"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-500/30 rounded-xl p-4 transition-all group"
              >
                <p className="text-white font-medium text-sm group-hover:text-teal-400 transition-colors">Business Health Score</p>
                <p className="text-xs text-slate-500 mt-1">Full health check for your freelance business</p>
              </a>
              <a
                href="/tools/revenue-goal-planner"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-500/30 rounded-xl p-4 transition-all group"
              >
                <p className="text-white font-medium text-sm group-hover:text-teal-400 transition-colors">Revenue Goal Planner</p>
                <p className="text-xs text-slate-500 mt-1">Plan how to hit your income targets</p>
              </a>
            </div>
          </div>

          {/* Copy Button */}
          <div className="flex justify-center">
            <button
              onClick={handleCopy}
              className="px-6 py-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-500/30 transition-all text-white font-medium"
            >
              {copied ? 'Copied!' : 'Copy Risk Analysis to Clipboard'}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

/* ---- Helper functions ---- */

function getRiskBadgeClasses(level: RiskLevel): string {
  switch (level) {
    case 'Low':
      return 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-400';
    case 'Moderate':
      return 'bg-amber-500/10 border border-amber-500/20 text-amber-400';
    case 'High':
      return 'bg-orange-500/10 border border-orange-500/20 text-orange-400';
    case 'Critical':
      return 'bg-rose-500/10 border border-rose-500/20 text-rose-400';
  }
}

function getRiskDotColor(level: RiskLevel): string {
  switch (level) {
    case 'Low':
      return 'bg-emerald-400';
    case 'Moderate':
      return 'bg-amber-400';
    case 'High':
      return 'bg-orange-400';
    case 'Critical':
      return 'bg-rose-400';
  }
}

function getRiskDescription(level: RiskLevel): string {
  switch (level) {
    case 'Low':
      return 'Your revenue is well-diversified across multiple clients. No single client dominates your income.';
    case 'Moderate':
      return 'Some concentration risk. Your top client represents a significant share of revenue. Consider diversifying.';
    case 'High':
      return 'Significant concentration risk. Losing your top client would seriously impact your income. Diversify urgently.';
    case 'Critical':
      return 'Dangerously concentrated. Your business depends heavily on one client. This is the single biggest risk to your livelihood.';
  }
}

function getPercentColor(pct: number): string {
  if (pct > 60) return 'text-rose-400';
  if (pct > 40) return 'text-orange-400';
  if (pct > 25) return 'text-amber-400';
  return 'text-emerald-400';
}

function getHHIColor(hhi: number): string {
  if (hhi > 4000) return 'text-rose-400';
  if (hhi > 2500) return 'text-orange-400';
  if (hhi > 1500) return 'text-amber-400';
  return 'text-emerald-400';
}

function getHHILabel(hhi: number): string {
  if (hhi > 4000) return 'Highly concentrated';
  if (hhi > 2500) return 'Concentrated';
  if (hhi > 1500) return 'Moderate';
  return 'Unconcentrated';
}

function getBarColor(percentage: number): string {
  if (percentage > 40) return 'bg-gradient-to-r from-rose-500/80 to-red-400/80';
  if (percentage > 25) return 'bg-gradient-to-r from-amber-500/80 to-orange-400/80';
  return 'bg-gradient-to-r from-teal-500/80 to-emerald-400/80';
}

function getRecommendations(level: RiskLevel, topPct: number, clientCount: number): string[] {
  const recs: string[] = [];

  if (level === 'Critical' || level === 'High') {
    recs.push(
      `Your top client accounts for ${topPct.toFixed(0)}% of revenue. Aim to reduce any single client to under 25% by actively prospecting for new work streams.`
    );
    recs.push(
      'Set a "new client" quota: commit to landing at least one new client per quarter. Use platforms like Upwork, networking events, or content marketing to fill the pipeline.'
    );
    recs.push(
      'Negotiate longer contract terms or retainers with your top client to buy time while you diversify. Predictability reduces the shock of sudden client loss.'
    );
    recs.push(
      'Build an emergency fund covering at least 3 months of expenses. High concentration means higher volatility — cash reserves are your safety net.'
    );
  } else if (level === 'Moderate') {
    recs.push(
      'You have moderate concentration risk. Focus on growing revenue from your smaller clients through upselling, cross-selling, or expanding scope.'
    );
    recs.push(
      `With ${clientCount} active clients, adding 2-3 more would significantly reduce risk. Target industries different from your current client base for maximum diversification.`
    );
    recs.push(
      'Create a productised service offering (fixed scope, fixed price) to attract a wider range of smaller clients without overextending your capacity.'
    );
  } else {
    recs.push(
      'Well done — your client portfolio is well diversified. Maintain this balance by regularly reviewing your revenue split as clients come and go.'
    );
    recs.push(
      'Focus on increasing lifetime value from existing clients. Use our Client Lifetime Value Calculator to identify which relationships deserve more investment.'
    );
    recs.push(
      'Consider raising rates selectively with your strongest clients. A diversified base gives you negotiating confidence — losing one client is not catastrophic.'
    );
  }

  return recs;
}
