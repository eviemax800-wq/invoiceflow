'use client';

import { useState, useRef } from 'react';

/* ---- Helpers ---- */

function fmt(value: number): string {
  return new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

function pct(value: number): string {
  return `${value.toFixed(1)}%`;
}

/* ---- Types ---- */

type Step = 1 | 2 | 3 | 4 | 5;

interface BusinessOverview {
  businessName: string;
  yourName: string;
  financialYear: string;
  industry: string;
  yearsInBusiness: string;
}

interface RevenueFinancials {
  totalRevenue: string;
  lastYearRevenue: string;
  totalExpenses: string;
  invoicesSent: string;
  invoicesPaid: string;
  avgInvoiceValue: string;
  highestInvoice: string;
  q1Revenue: string;
  q2Revenue: string;
  q3Revenue: string;
  q4Revenue: string;
}

interface ClientsServices {
  totalClients: string;
  newClients: string;
  repeatClients: string;
  topSource1: string;
  topSource2: string;
  topSource3: string;
  primaryService: string;
  servicesAdded: string;
  servicesDropped: string;
  avgProjectDuration: string;
}

interface WinsGoals {
  win1: string;
  win2: string;
  win3: string;
  lesson1: string;
  lesson2: string;
  lesson3: string;
  revenueGoalNext: string;
  goal1: string;
  goal2: string;
  goal3: string;
  skillsToDevelop: string;
  rateChangePlan: string;
}

/* ---- Constants ---- */

const FINANCIAL_YEARS = ['FY2025-26', 'FY2024-25', 'FY2023-24'];

const INDUSTRIES = [
  'Web Design',
  'Development',
  'Copywriting',
  'Graphic Design',
  'Photography',
  'Video Production',
  'Social Media',
  'Consulting',
  'Marketing',
  'Virtual Assistant',
  'Other',
];

const YEARS_OPTIONS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10+'];

const DURATIONS = [
  '<1 week',
  '1-2 weeks',
  '2-4 weeks',
  '1-3 months',
  '3+ months',
];

const RATE_CHANGES = [
  'No change',
  'Increase 5-10%',
  'Increase 10-20%',
  'Increase 20%+',
  'Decrease',
];

const STEP_LABELS = [
  'Business Overview',
  'Revenue & Financials',
  'Clients & Services',
  'Wins, Lessons & Goals',
  'Your Annual Review',
];

/* ---- Component ---- */

export default function AnnualBusinessReview() {
  const [step, setStep] = useState<Step>(1);
  const [copied, setCopied] = useState(false);
  const reportRef = useRef<HTMLDivElement>(null);

  // Step 1
  const [overview, setOverview] = useState<BusinessOverview>({
    businessName: '',
    yourName: '',
    financialYear: 'FY2025-26',
    industry: 'Development',
    yearsInBusiness: '3',
  });

  // Step 2
  const [financials, setFinancials] = useState<RevenueFinancials>({
    totalRevenue: '',
    lastYearRevenue: '',
    totalExpenses: '',
    invoicesSent: '',
    invoicesPaid: '',
    avgInvoiceValue: '',
    highestInvoice: '',
    q1Revenue: '',
    q2Revenue: '',
    q3Revenue: '',
    q4Revenue: '',
  });

  // Step 3
  const [clients, setClients] = useState<ClientsServices>({
    totalClients: '',
    newClients: '',
    repeatClients: '',
    topSource1: '',
    topSource2: '',
    topSource3: '',
    primaryService: '',
    servicesAdded: '',
    servicesDropped: '',
    avgProjectDuration: '2-4 weeks',
  });

  // Step 4
  const [goals, setGoals] = useState<WinsGoals>({
    win1: '',
    win2: '',
    win3: '',
    lesson1: '',
    lesson2: '',
    lesson3: '',
    revenueGoalNext: '',
    goal1: '',
    goal2: '',
    goal3: '',
    skillsToDevelop: '',
    rateChangePlan: 'No change',
  });

  /* ---- Computed values ---- */

  const revenue = parseFloat(financials.totalRevenue) || 0;
  const lastRevenue = parseFloat(financials.lastYearRevenue) || 0;
  const expenses = parseFloat(financials.totalExpenses) || 0;
  const sent = parseInt(financials.invoicesSent) || 0;
  const paid = parseInt(financials.invoicesPaid) || 0;
  const profit = revenue - expenses;
  const profitMargin = revenue > 0 ? (profit / revenue) * 100 : 0;
  const collectionRate = sent > 0 ? (paid / sent) * 100 : 0;
  const yoyGrowth = lastRevenue > 0 ? ((revenue - lastRevenue) / lastRevenue) * 100 : 0;
  const hasComparison = lastRevenue > 0;

  // Auto-calculated average invoice value
  const autoAvg = paid > 0 ? revenue / paid : 0;
  const avgInvoice = parseFloat(financials.avgInvoiceValue) || autoAvg;
  const highestInv = parseFloat(financials.highestInvoice) || 0;

  // Quarterly
  const q1 = parseFloat(financials.q1Revenue) || 0;
  const q2 = parseFloat(financials.q2Revenue) || 0;
  const q3 = parseFloat(financials.q3Revenue) || 0;
  const q4 = parseFloat(financials.q4Revenue) || 0;
  const hasQuarterly = q1 > 0 || q2 > 0 || q3 > 0 || q4 > 0;
  const maxQ = Math.max(q1, q2, q3, q4, 1);

  // Clients
  const totalCl = parseInt(clients.totalClients) || 0;
  const newCl = parseInt(clients.newClients) || 0;
  const repeatCl = parseInt(clients.repeatClients) || 0;
  const retentionRate = totalCl > 0 ? (repeatCl / totalCl) * 100 : 0;
  const revenuePerClient = totalCl > 0 ? revenue / totalCl : 0;

  // Effective hourly rate estimate (~1800 billable hours)
  const effectiveHourly = revenue > 0 ? revenue / 1800 : 0;

  // Next year goal
  const nextGoalNum = parseFloat(goals.revenueGoalNext) || 0;
  const goalGrowth = revenue > 0 ? ((nextGoalNum - revenue) / revenue) * 100 : 0;

  /* ---- Retention assessment ---- */
  function retentionAssessment(rate: number): { label: string; color: string } {
    if (rate >= 80) return { label: 'Excellent', color: 'text-emerald-400' };
    if (rate >= 60) return { label: 'Good', color: 'text-amber-400' };
    return { label: 'Needs Improvement', color: 'text-rose-400' };
  }

  /* ---- Metric colour ---- */
  function metricColor(value: number, good: number, mid: number): string {
    if (value >= good) return 'text-emerald-400';
    if (value >= mid) return 'text-amber-400';
    return 'text-rose-400';
  }

  /* ---- Auto-update avg invoice ---- */
  function handleFinancialChange(field: keyof RevenueFinancials, value: string) {
    setFinancials((prev) => {
      const next = { ...prev, [field]: value };
      // Auto-calculate average if not manually set
      if (field !== 'avgInvoiceValue') {
        const r = parseFloat(next.totalRevenue) || 0;
        const p = parseInt(next.invoicesPaid) || 0;
        if (p > 0 && !next.avgInvoiceValue) {
          // Leave it blank to use auto-calculation
        }
      }
      return next;
    });
  }

  /* ---- Navigation ---- */
  function nextStep() {
    if (step < 5) setStep((step + 1) as Step);
  }

  function prevStep() {
    if (step > 1) setStep((step - 1) as Step);
  }

  /* ---- Copy to clipboard ---- */
  function handleCopy() {
    const lines: string[] = [];
    const sep = '='.repeat(56);
    const dash = '-'.repeat(40);

    lines.push(sep);
    lines.push(`ANNUAL BUSINESS REVIEW`);
    lines.push(`${overview.businessName || 'My Business'} | ${overview.financialYear}`);
    lines.push(`Prepared by: ${overview.yourName || 'Owner'}`);
    lines.push(`Generated: ${new Date().toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' })}`);
    lines.push(sep);
    lines.push('');

    lines.push('EXECUTIVE SUMMARY');
    lines.push(dash);
    lines.push(`Revenue:           ${fmt(revenue)}${hasComparison ? ` (${yoyGrowth >= 0 ? '+' : ''}${pct(yoyGrowth)} YoY)` : ''}`);
    lines.push(`Expenses:          ${fmt(expenses)}`);
    lines.push(`Net Profit:        ${fmt(profit)}`);
    lines.push(`Profit Margin:     ${pct(profitMargin)}`);
    lines.push(`Collection Rate:   ${pct(collectionRate)} (${paid}/${sent} invoices)`);
    lines.push(`Avg Invoice Value: ${fmt(avgInvoice)}`);
    if (highestInv > 0) lines.push(`Highest Invoice:   ${fmt(highestInv)}`);
    lines.push(`Effective Hourly:  ${fmt(effectiveHourly)}/hr (est. ~1,800 billable hours)`);
    lines.push('');

    if (hasQuarterly) {
      lines.push('QUARTERLY REVENUE');
      lines.push(dash);
      lines.push(`Q1 (Jul-Sep): ${fmt(q1)}`);
      lines.push(`Q2 (Oct-Dec): ${fmt(q2)}`);
      lines.push(`Q3 (Jan-Mar): ${fmt(q3)}`);
      lines.push(`Q4 (Apr-Jun): ${fmt(q4)}`);
      lines.push('');
    }

    if (hasComparison) {
      lines.push('YEAR-OVER-YEAR');
      lines.push(dash);
      lines.push(`This FY:  ${fmt(revenue)}`);
      lines.push(`Last FY:  ${fmt(lastRevenue)}`);
      lines.push(`Change:   ${yoyGrowth >= 0 ? '+' : ''}${pct(yoyGrowth)} (${yoyGrowth >= 0 ? '+' : ''}${fmt(revenue - lastRevenue)})`);
      lines.push('');
    }

    lines.push('CLIENT PORTFOLIO');
    lines.push(dash);
    lines.push(`Total Clients:    ${totalCl}`);
    lines.push(`New Clients:      ${newCl}`);
    lines.push(`Repeat Clients:   ${repeatCl}`);
    lines.push(`Retention Rate:   ${pct(retentionRate)} (${retentionAssessment(retentionRate).label})`);
    lines.push(`Revenue/Client:   ${fmt(revenuePerClient)}`);
    const sources = [clients.topSource1, clients.topSource2, clients.topSource3].filter(Boolean);
    if (sources.length > 0) lines.push(`Top Sources:      ${sources.join(', ')}`);
    lines.push('');

    lines.push('SERVICE MIX');
    lines.push(dash);
    lines.push(`Primary Service:  ${clients.primaryService || 'Not specified'}`);
    lines.push(`Industry:         ${overview.industry}`);
    lines.push(`Avg Project:      ${clients.avgProjectDuration}`);
    if (clients.servicesAdded) lines.push(`Added:            ${clients.servicesAdded}`);
    if (clients.servicesDropped) lines.push(`Dropped:          ${clients.servicesDropped}`);
    lines.push('');

    const wins = [goals.win1, goals.win2, goals.win3].filter(Boolean);
    if (wins.length > 0) {
      lines.push('WINS & ACHIEVEMENTS');
      lines.push(dash);
      wins.forEach((w, i) => lines.push(`${i + 1}. ${w}`));
      lines.push('');
    }

    const lessons = [goals.lesson1, goals.lesson2, goals.lesson3].filter(Boolean);
    if (lessons.length > 0) {
      lines.push('LESSONS & CHALLENGES');
      lines.push(dash);
      lessons.forEach((l, i) => lines.push(`${i + 1}. ${l}`));
      lines.push('');
    }

    lines.push('NEXT YEAR PLAN');
    lines.push(dash);
    if (nextGoalNum > 0) lines.push(`Revenue Target:   ${fmt(nextGoalNum)} (${goalGrowth >= 0 ? '+' : ''}${pct(goalGrowth)} growth)`);
    const nextGoals = [goals.goal1, goals.goal2, goals.goal3].filter(Boolean);
    if (nextGoals.length > 0) {
      lines.push('Key Goals:');
      nextGoals.forEach((g, i) => lines.push(`  ${i + 1}. ${g}`));
    }
    if (goals.skillsToDevelop) lines.push(`Skills to Develop: ${goals.skillsToDevelop}`);
    lines.push(`Rate Adjustment:   ${goals.rateChangePlan}`);
    lines.push('');
    lines.push(sep);
    lines.push('Annual review generated with InvoiceFlow');
    lines.push('https://www.invoiceflow.au/tools/annual-business-review');

    navigator.clipboard.writeText(lines.join('\n')).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  }

  /* ---- Print ---- */
  function handlePrint() {
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    const retAssess = retentionAssessment(retentionRate);
    const wins = [goals.win1, goals.win2, goals.win3].filter(Boolean);
    const lessons = [goals.lesson1, goals.lesson2, goals.lesson3].filter(Boolean);
    const nextGoals = [goals.goal1, goals.goal2, goals.goal3].filter(Boolean);
    const sources = [clients.topSource1, clients.topSource2, clients.topSource3].filter(Boolean);

    let quarterlyHtml = '';
    if (hasQuarterly) {
      quarterlyHtml = `
        <div class="section">
          <h2>Quarterly Revenue</h2>
          <div class="quarter-grid">
            <div class="quarter-item"><span class="quarter-label">Q1 (Jul-Sep)</span><span class="quarter-value">${fmt(q1)}</span></div>
            <div class="quarter-item"><span class="quarter-label">Q2 (Oct-Dec)</span><span class="quarter-value">${fmt(q2)}</span></div>
            <div class="quarter-item"><span class="quarter-label">Q3 (Jan-Mar)</span><span class="quarter-value">${fmt(q3)}</span></div>
            <div class="quarter-item"><span class="quarter-label">Q4 (Apr-Jun)</span><span class="quarter-value">${fmt(q4)}</span></div>
          </div>
        </div>`;
    }

    let comparisonHtml = '';
    if (hasComparison) {
      comparisonHtml = `
        <div class="section">
          <h2>Year-Over-Year Comparison</h2>
          <table><tr><td>This FY</td><td>${fmt(revenue)}</td></tr>
          <tr><td>Last FY</td><td>${fmt(lastRevenue)}</td></tr>
          <tr class="highlight"><td>Change</td><td>${yoyGrowth >= 0 ? '+' : ''}${pct(yoyGrowth)} (${yoyGrowth >= 0 ? '+' : ''}${fmt(revenue - lastRevenue)})</td></tr></table>
        </div>`;
    }

    const html = `<!DOCTYPE html><html><head><meta charset="utf-8"><title>Annual Business Review - ${overview.businessName || 'My Business'}</title>
    <style>
      body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;max-width:800px;margin:0 auto;padding:40px 30px;color:#1e293b;line-height:1.6}
      h1{font-size:28px;margin-bottom:4px;color:#0f172a}
      h2{font-size:18px;color:#0ea5e9;border-bottom:2px solid #e2e8f0;padding-bottom:6px;margin-top:32px}
      .meta{color:#64748b;font-size:14px;margin-bottom:24px}
      .summary-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:12px}
      .summary-item{background:#f8fafc;padding:12px 16px;border-radius:8px;border:1px solid #e2e8f0}
      .summary-label{font-size:12px;color:#64748b;text-transform:uppercase;letter-spacing:0.05em}
      .summary-value{font-size:20px;font-weight:700;color:#0f172a;margin-top:2px}
      .section{margin-top:24px}
      table{width:100%;border-collapse:collapse;margin-top:8px}
      td{padding:8px 12px;border-bottom:1px solid #e2e8f0;font-size:14px}
      td:first-child{color:#64748b;width:45%}
      td:last-child{font-weight:600;text-align:right}
      .highlight td{background:#f0f9ff;color:#0284c7;font-weight:700}
      .quarter-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-top:8px}
      .quarter-item{background:#f8fafc;padding:12px;border-radius:8px;text-align:center;border:1px solid #e2e8f0}
      .quarter-label{display:block;font-size:12px;color:#64748b}
      .quarter-value{display:block;font-size:16px;font-weight:700;margin-top:4px}
      .wins li,.lessons li,.goals li{margin-bottom:6px;font-size:14px}
      .footer{margin-top:40px;padding-top:16px;border-top:1px solid #e2e8f0;font-size:12px;color:#94a3b8;text-align:center}
      .green{color:#10b981}.amber{color:#f59e0b}.red{color:#ef4444}
      @media print{body{padding:20px}h2{break-after:avoid}}
    </style></head><body>
    <h1>Annual Business Review</h1>
    <div class="meta">${overview.businessName || 'My Business'} | ${overview.financialYear} | ${overview.industry}<br>
    Prepared by ${overview.yourName || 'Owner'} | Generated ${new Date().toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' })}</div>

    <h2>Executive Summary</h2>
    <div class="summary-grid">
      <div class="summary-item"><div class="summary-label">Revenue${hasComparison ? ` (${yoyGrowth >= 0 ? '+' : ''}${pct(yoyGrowth)} YoY)` : ''}</div><div class="summary-value">${fmt(revenue)}</div></div>
      <div class="summary-item"><div class="summary-label">Net Profit</div><div class="summary-value">${fmt(profit)}</div></div>
      <div class="summary-item"><div class="summary-label">Profit Margin</div><div class="summary-value ${profitMargin >= 40 ? 'green' : profitMargin >= 20 ? 'amber' : 'red'}">${pct(profitMargin)}</div></div>
      <div class="summary-item"><div class="summary-label">Collection Rate</div><div class="summary-value ${collectionRate >= 90 ? 'green' : collectionRate >= 75 ? 'amber' : 'red'}">${pct(collectionRate)}</div></div>
      <div class="summary-item"><div class="summary-label">Avg Invoice Value</div><div class="summary-value">${fmt(avgInvoice)}</div></div>
      <div class="summary-item"><div class="summary-label">Effective Hourly Rate</div><div class="summary-value">${fmt(effectiveHourly)}/hr</div></div>
    </div>

    ${comparisonHtml}
    ${quarterlyHtml}

    <div class="section">
      <h2>Client Portfolio</h2>
      <table>
        <tr><td>Total Clients</td><td>${totalCl}</td></tr>
        <tr><td>New Clients</td><td>${newCl}</td></tr>
        <tr><td>Repeat Clients</td><td>${repeatCl}</td></tr>
        <tr><td>Retention Rate</td><td class="${retAssess.label === 'Excellent' ? 'green' : retAssess.label === 'Good' ? 'amber' : 'red'}">${pct(retentionRate)} (${retAssess.label})</td></tr>
        <tr><td>Revenue per Client</td><td>${fmt(revenuePerClient)}</td></tr>
        ${sources.length > 0 ? `<tr><td>Top Revenue Sources</td><td>${sources.join(', ')}</td></tr>` : ''}
      </table>
    </div>

    <div class="section">
      <h2>Service Mix</h2>
      <table>
        <tr><td>Primary Service</td><td>${clients.primaryService || 'Not specified'}</td></tr>
        <tr><td>Industry</td><td>${overview.industry}</td></tr>
        <tr><td>Avg Project Duration</td><td>${clients.avgProjectDuration}</td></tr>
        ${clients.servicesAdded ? `<tr><td>Services Added</td><td>${clients.servicesAdded}</td></tr>` : ''}
        ${clients.servicesDropped ? `<tr><td>Services Dropped</td><td>${clients.servicesDropped}</td></tr>` : ''}
      </table>
    </div>

    ${wins.length > 0 ? `<div class="section"><h2>Wins & Achievements</h2><ol class="wins">${wins.map(w => `<li>${w}</li>`).join('')}</ol></div>` : ''}
    ${lessons.length > 0 ? `<div class="section"><h2>Lessons & Challenges</h2><ol class="lessons">${lessons.map(l => `<li>${l}</li>`).join('')}</ol></div>` : ''}

    <div class="section">
      <h2>Next Year Plan</h2>
      <table>
        ${nextGoalNum > 0 ? `<tr><td>Revenue Target</td><td>${fmt(nextGoalNum)} (${goalGrowth >= 0 ? '+' : ''}${pct(goalGrowth)} growth)</td></tr>` : ''}
        ${nextGoals.length > 0 ? nextGoals.map((g, i) => `<tr><td>Goal ${i + 1}</td><td>${g}</td></tr>`).join('') : ''}
        ${goals.skillsToDevelop ? `<tr><td>Skills to Develop</td><td>${goals.skillsToDevelop}</td></tr>` : ''}
        <tr><td>Rate Adjustment</td><td>${goals.rateChangePlan}</td></tr>
      </table>
    </div>

    <div class="footer">Annual review generated with InvoiceFlow &mdash; invoiceflow.au/tools/annual-business-review</div>
    </body></html>`;

    printWindow.document.write(html);
    printWindow.document.close();
    setTimeout(() => printWindow.print(), 300);
  }

  /* ---- Shared classes ---- */
  const inputClass =
    'w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/40 focus:border-sky-500/40 transition-all';
  const selectClass =
    'w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-sky-500/40 focus:border-sky-500/40 transition-all appearance-none';
  const labelClass = 'block text-sm font-medium text-slate-300 mb-1.5';
  const hintClass = 'text-xs text-slate-500 mt-1';

  /* ---- Step Indicator ---- */
  function StepIndicator() {
    return (
      <div className="flex items-center justify-between mb-8">
        {STEP_LABELS.map((label, idx) => {
          const num = (idx + 1) as Step;
          const isActive = step === num;
          const isComplete = step > num;
          return (
            <div key={num} className="flex items-center flex-1 last:flex-none">
              <button
                onClick={() => setStep(num)}
                className={`flex items-center gap-2 transition-all ${
                  isActive
                    ? 'text-white'
                    : isComplete
                      ? 'text-sky-400'
                      : 'text-slate-500'
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0 transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-sky-400 to-blue-500 text-white'
                      : isComplete
                        ? 'bg-sky-500/20 border border-sky-500/40 text-sky-400'
                        : 'bg-white/5 border border-white/10 text-slate-500'
                  }`}
                >
                  {isComplete ? (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  ) : (
                    num
                  )}
                </div>
                <span className="hidden lg:inline text-sm font-medium">{label}</span>
              </button>
              {idx < 4 && (
                <div
                  className={`flex-1 h-px mx-3 transition-all ${
                    isComplete ? 'bg-sky-500/40' : 'bg-white/10'
                  }`}
                />
              )}
            </div>
          );
        })}
      </div>
    );
  }

  /* ---- Step 1: Business Overview ---- */
  function renderStep1() {
    return (
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-bold text-white heading-font mb-1">Business Overview</h2>
          <p className="text-sm text-slate-400">Start with the basics about your business.</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label className={labelClass}>Business Name</label>
            <input
              type="text"
              value={overview.businessName}
              onChange={(e) => setOverview({ ...overview, businessName: e.target.value })}
              className={inputClass}
              placeholder="e.g. Smith Creative"
            />
          </div>
          <div>
            <label className={labelClass}>Your Name</label>
            <input
              type="text"
              value={overview.yourName}
              onChange={(e) => setOverview({ ...overview, yourName: e.target.value })}
              className={inputClass}
              placeholder="e.g. Sarah Smith"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          <div>
            <label className={labelClass}>Financial Year</label>
            <select
              value={overview.financialYear}
              onChange={(e) => setOverview({ ...overview, financialYear: e.target.value })}
              className={selectClass}
            >
              {FINANCIAL_YEARS.map((fy) => (
                <option key={fy} value={fy} className="bg-slate-800">
                  {fy}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className={labelClass}>Industry / Service Type</label>
            <select
              value={overview.industry}
              onChange={(e) => setOverview({ ...overview, industry: e.target.value })}
              className={selectClass}
            >
              {INDUSTRIES.map((ind) => (
                <option key={ind} value={ind} className="bg-slate-800">
                  {ind}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className={labelClass}>Years in Business</label>
            <select
              value={overview.yearsInBusiness}
              onChange={(e) => setOverview({ ...overview, yearsInBusiness: e.target.value })}
              className={selectClass}
            >
              {YEARS_OPTIONS.map((y) => (
                <option key={y} value={y} className="bg-slate-800">
                  {y}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    );
  }

  /* ---- Step 2: Revenue & Financials ---- */
  function renderStep2() {
    return (
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-bold text-white heading-font mb-1">Revenue &amp; Financials</h2>
          <p className="text-sm text-slate-400">Enter your financial data for the year. All amounts in AUD.</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label className={labelClass}>Total Revenue This FY ($)</label>
            <input
              type="number"
              value={financials.totalRevenue}
              onChange={(e) => handleFinancialChange('totalRevenue', e.target.value)}
              className={inputClass}
              placeholder="120000"
            />
          </div>
          <div>
            <label className={labelClass}>Total Revenue Last FY ($) <span className="text-slate-500">optional</span></label>
            <input
              type="number"
              value={financials.lastYearRevenue}
              onChange={(e) => handleFinancialChange('lastYearRevenue', e.target.value)}
              className={inputClass}
              placeholder="95000"
            />
            <p className={hintClass}>For year-over-year comparison</p>
          </div>
        </div>

        <div>
          <label className={labelClass}>Total Expenses This FY ($)</label>
          <input
            type="number"
            value={financials.totalExpenses}
            onChange={(e) => handleFinancialChange('totalExpenses', e.target.value)}
            className={inputClass}
            placeholder="35000"
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label className={labelClass}>Invoices Sent</label>
            <input
              type="number"
              value={financials.invoicesSent}
              onChange={(e) => handleFinancialChange('invoicesSent', e.target.value)}
              className={inputClass}
              placeholder="48"
            />
          </div>
          <div>
            <label className={labelClass}>Invoices Paid</label>
            <input
              type="number"
              value={financials.invoicesPaid}
              onChange={(e) => handleFinancialChange('invoicesPaid', e.target.value)}
              className={inputClass}
              placeholder="45"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label className={labelClass}>Average Invoice Value ($)</label>
            <input
              type="number"
              value={financials.avgInvoiceValue}
              onChange={(e) => handleFinancialChange('avgInvoiceValue', e.target.value)}
              className={inputClass}
              placeholder={autoAvg > 0 ? `Auto: ${fmt(autoAvg)}` : '2500'}
            />
            {autoAvg > 0 && !financials.avgInvoiceValue && (
              <p className={hintClass}>Auto-calculated: {fmt(autoAvg)}</p>
            )}
          </div>
          <div>
            <label className={labelClass}>Highest Single Invoice ($) <span className="text-slate-500">optional</span></label>
            <input
              type="number"
              value={financials.highestInvoice}
              onChange={(e) => handleFinancialChange('highestInvoice', e.target.value)}
              className={inputClass}
              placeholder="15000"
            />
          </div>
        </div>

        <div>
          <label className={labelClass}>Revenue by Quarter <span className="text-slate-500">optional — for seasonality chart</span></label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-2">
            <div>
              <p className="text-xs text-slate-500 mb-1">Q1 (Jul-Sep)</p>
              <input
                type="number"
                value={financials.q1Revenue}
                onChange={(e) => handleFinancialChange('q1Revenue', e.target.value)}
                className={inputClass}
                placeholder="30000"
              />
            </div>
            <div>
              <p className="text-xs text-slate-500 mb-1">Q2 (Oct-Dec)</p>
              <input
                type="number"
                value={financials.q2Revenue}
                onChange={(e) => handleFinancialChange('q2Revenue', e.target.value)}
                className={inputClass}
                placeholder="35000"
              />
            </div>
            <div>
              <p className="text-xs text-slate-500 mb-1">Q3 (Jan-Mar)</p>
              <input
                type="number"
                value={financials.q3Revenue}
                onChange={(e) => handleFinancialChange('q3Revenue', e.target.value)}
                className={inputClass}
                placeholder="25000"
              />
            </div>
            <div>
              <p className="text-xs text-slate-500 mb-1">Q4 (Apr-Jun)</p>
              <input
                type="number"
                value={financials.q4Revenue}
                onChange={(e) => handleFinancialChange('q4Revenue', e.target.value)}
                className={inputClass}
                placeholder="30000"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ---- Step 3: Clients & Services ---- */
  function renderStep3() {
    return (
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-bold text-white heading-font mb-1">Clients &amp; Services</h2>
          <p className="text-sm text-slate-400">Review your client portfolio and service offerings.</p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          <div>
            <label className={labelClass}>Total Clients This FY</label>
            <input
              type="number"
              value={clients.totalClients}
              onChange={(e) => setClients({ ...clients, totalClients: e.target.value })}
              className={inputClass}
              placeholder="12"
            />
          </div>
          <div>
            <label className={labelClass}>New Clients Acquired</label>
            <input
              type="number"
              value={clients.newClients}
              onChange={(e) => setClients({ ...clients, newClients: e.target.value })}
              className={inputClass}
              placeholder="5"
            />
          </div>
          <div>
            <label className={labelClass}>Repeat Clients</label>
            <input
              type="number"
              value={clients.repeatClients}
              onChange={(e) => setClients({ ...clients, repeatClients: e.target.value })}
              className={inputClass}
              placeholder="7"
            />
          </div>
        </div>

        {/* Retention rate display */}
        {totalCl > 0 && (
          <div className="bg-white/5 rounded-xl p-4 flex items-center gap-3">
            <div className={`text-2xl font-bold ${retentionAssessment(retentionRate).color}`}>
              {pct(retentionRate)}
            </div>
            <div>
              <p className="text-sm text-white font-medium">Client Retention Rate</p>
              <p className={`text-xs ${retentionAssessment(retentionRate).color}`}>
                {retentionAssessment(retentionRate).label}
                {retentionRate >= 80
                  ? ' — strong repeat business'
                  : retentionRate >= 60
                    ? ' — room to improve loyalty'
                    : ' — focus on client retention strategies'}
              </p>
            </div>
          </div>
        )}

        <div>
          <label className={labelClass}>Top 3 Revenue Sources / Client Types</label>
          <div className="grid sm:grid-cols-3 gap-4 mt-1">
            <input
              type="text"
              value={clients.topSource1}
              onChange={(e) => setClients({ ...clients, topSource1: e.target.value })}
              className={inputClass}
              placeholder="e.g. SaaS startups"
            />
            <input
              type="text"
              value={clients.topSource2}
              onChange={(e) => setClients({ ...clients, topSource2: e.target.value })}
              className={inputClass}
              placeholder="e.g. E-commerce brands"
            />
            <input
              type="text"
              value={clients.topSource3}
              onChange={(e) => setClients({ ...clients, topSource3: e.target.value })}
              className={inputClass}
              placeholder="e.g. Real estate agencies"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label className={labelClass}>Primary Service Offered</label>
            <input
              type="text"
              value={clients.primaryService}
              onChange={(e) => setClients({ ...clients, primaryService: e.target.value })}
              className={inputClass}
              placeholder="e.g. Full-stack web development"
            />
          </div>
          <div>
            <label className={labelClass}>Average Project Duration</label>
            <select
              value={clients.avgProjectDuration}
              onChange={(e) => setClients({ ...clients, avgProjectDuration: e.target.value })}
              className={selectClass}
            >
              {DURATIONS.map((d) => (
                <option key={d} value={d} className="bg-slate-800">
                  {d}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label className={labelClass}>Services Added This Year <span className="text-slate-500">optional</span></label>
            <input
              type="text"
              value={clients.servicesAdded}
              onChange={(e) => setClients({ ...clients, servicesAdded: e.target.value })}
              className={inputClass}
              placeholder="e.g. AI integration consulting"
            />
          </div>
          <div>
            <label className={labelClass}>Services Dropped This Year <span className="text-slate-500">optional</span></label>
            <input
              type="text"
              value={clients.servicesDropped}
              onChange={(e) => setClients({ ...clients, servicesDropped: e.target.value })}
              className={inputClass}
              placeholder="e.g. Basic WordPress maintenance"
            />
          </div>
        </div>
      </div>
    );
  }

  /* ---- Step 4: Wins, Lessons & Goals ---- */
  function renderStep4() {
    return (
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-bold text-white heading-font mb-1">Wins, Lessons &amp; Goals</h2>
          <p className="text-sm text-slate-400">Reflect on the year and plan ahead.</p>
        </div>

        <div>
          <label className={labelClass}>Top 3 Wins / Achievements</label>
          <div className="space-y-3 mt-1">
            <div className="flex items-center gap-3">
              <span className="text-sky-400 font-bold text-sm shrink-0 w-5 text-center">1</span>
              <input
                type="text"
                value={goals.win1}
                onChange={(e) => setGoals({ ...goals, win1: e.target.value })}
                className={inputClass}
                placeholder="e.g. Landed my biggest client — $25K project"
              />
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sky-400 font-bold text-sm shrink-0 w-5 text-center">2</span>
              <input
                type="text"
                value={goals.win2}
                onChange={(e) => setGoals({ ...goals, win2: e.target.value })}
                className={inputClass}
                placeholder="e.g. Raised rates 15% with zero client churn"
              />
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sky-400 font-bold text-sm shrink-0 w-5 text-center">3</span>
              <input
                type="text"
                value={goals.win3}
                onChange={(e) => setGoals({ ...goals, win3: e.target.value })}
                className={inputClass}
                placeholder="e.g. Automated invoicing — saved 4+ hrs/week"
              />
            </div>
          </div>
        </div>

        <div>
          <label className={labelClass}>Top 3 Lessons Learned / Challenges</label>
          <div className="space-y-3 mt-1">
            <div className="flex items-center gap-3">
              <span className="text-amber-400 font-bold text-sm shrink-0 w-5 text-center">1</span>
              <input
                type="text"
                value={goals.lesson1}
                onChange={(e) => setGoals({ ...goals, lesson1: e.target.value })}
                className={inputClass}
                placeholder="e.g. Took on too many small projects — killed momentum"
              />
            </div>
            <div className="flex items-center gap-3">
              <span className="text-amber-400 font-bold text-sm shrink-0 w-5 text-center">2</span>
              <input
                type="text"
                value={goals.lesson2}
                onChange={(e) => setGoals({ ...goals, lesson2: e.target.value })}
                className={inputClass}
                placeholder="e.g. Scope creep on 3 projects — need better SOWs"
              />
            </div>
            <div className="flex items-center gap-3">
              <span className="text-amber-400 font-bold text-sm shrink-0 w-5 text-center">3</span>
              <input
                type="text"
                value={goals.lesson3}
                onChange={(e) => setGoals({ ...goals, lesson3: e.target.value })}
                className={inputClass}
                placeholder="e.g. December was dead — need cash reserves for quiet months"
              />
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label className={labelClass}>Revenue Goal for Next FY ($)</label>
            <input
              type="number"
              value={goals.revenueGoalNext}
              onChange={(e) => setGoals({ ...goals, revenueGoalNext: e.target.value })}
              className={inputClass}
              placeholder="150000"
            />
            {revenue > 0 && nextGoalNum > 0 && (
              <p className={`text-xs mt-1 ${goalGrowth >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                {goalGrowth >= 0 ? '+' : ''}{pct(goalGrowth)} growth from this year
              </p>
            )}
          </div>
          <div>
            <label className={labelClass}>Rate Change Plans</label>
            <select
              value={goals.rateChangePlan}
              onChange={(e) => setGoals({ ...goals, rateChangePlan: e.target.value })}
              className={selectClass}
            >
              {RATE_CHANGES.map((r) => (
                <option key={r} value={r} className="bg-slate-800">
                  {r}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className={labelClass}>3 Key Goals for Next FY</label>
          <div className="space-y-3 mt-1">
            <div className="flex items-center gap-3">
              <span className="text-blue-400 font-bold text-sm shrink-0 w-5 text-center">1</span>
              <input
                type="text"
                value={goals.goal1}
                onChange={(e) => setGoals({ ...goals, goal1: e.target.value })}
                className={inputClass}
                placeholder="e.g. Grow to $150K revenue through 3 new enterprise clients"
              />
            </div>
            <div className="flex items-center gap-3">
              <span className="text-blue-400 font-bold text-sm shrink-0 w-5 text-center">2</span>
              <input
                type="text"
                value={goals.goal2}
                onChange={(e) => setGoals({ ...goals, goal2: e.target.value })}
                className={inputClass}
                placeholder="e.g. Launch a productised service package"
              />
            </div>
            <div className="flex items-center gap-3">
              <span className="text-blue-400 font-bold text-sm shrink-0 w-5 text-center">3</span>
              <input
                type="text"
                value={goals.goal3}
                onChange={(e) => setGoals({ ...goals, goal3: e.target.value })}
                className={inputClass}
                placeholder="e.g. Achieve 85% client retention rate"
              />
            </div>
          </div>
        </div>

        <div>
          <label className={labelClass}>Skills to Develop <span className="text-slate-500">optional</span></label>
          <input
            type="text"
            value={goals.skillsToDevelop}
            onChange={(e) => setGoals({ ...goals, skillsToDevelop: e.target.value })}
            className={inputClass}
            placeholder="e.g. Advanced TypeScript, sales/negotiation, public speaking"
          />
        </div>
      </div>
    );
  }

  /* ---- Step 5: Generated Report ---- */
  function renderStep5() {
    const retAssess = retentionAssessment(retentionRate);
    const wins = [goals.win1, goals.win2, goals.win3].filter(Boolean);
    const lessons = [goals.lesson1, goals.lesson2, goals.lesson3].filter(Boolean);
    const nextGoals = [goals.goal1, goals.goal2, goals.goal3].filter(Boolean);
    const sources = [clients.topSource1, clients.topSource2, clients.topSource3].filter(Boolean);

    return (
      <div className="space-y-6" ref={reportRef}>
        {/* Report Header */}
        <div className="bg-gradient-to-r from-sky-500/10 to-blue-500/10 border border-sky-500/20 rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white heading-font mb-1">
            Annual Business Review
          </h2>
          <p className="text-lg text-sky-400 font-medium">
            {overview.businessName || 'My Business'} | {overview.financialYear}
          </p>
          <p className="text-sm text-slate-400 mt-1">
            Prepared by {overview.yourName || 'Owner'} |{' '}
            {new Date().toLocaleDateString('en-AU', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </p>

          {/* Action buttons */}
          <div className="flex items-center justify-center gap-3 mt-5">
            <button
              onClick={handleCopy}
              className="flex items-center gap-2 text-sm px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 border border-white/10 text-white transition-all"
            >
              {copied ? (
                <span className="text-emerald-400">Copied!</span>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
                  </svg>
                  Copy to Clipboard
                </>
              )}
            </button>
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 text-sm px-4 py-2 rounded-lg bg-gradient-to-r from-sky-400 to-blue-500 text-white font-medium hover:opacity-90 transition-all"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18.75 12h.008v.008h-.008V12Zm-3 0h.008v.008h-.008V12Z" />
              </svg>
              Print Report
            </button>
          </div>
        </div>

        {/* Executive Summary */}
        <div className="glass rounded-2xl p-6">
          <h3 className="text-lg font-bold text-white heading-font mb-4">Executive Summary</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div className="bg-white/5 rounded-xl p-4 text-center">
              <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">Revenue</p>
              <p className="text-xl sm:text-2xl font-bold text-white">{fmt(revenue)}</p>
              {hasComparison && (
                <p className={`text-xs mt-1 ${yoyGrowth >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {yoyGrowth >= 0 ? '+' : ''}{pct(yoyGrowth)} YoY
                </p>
              )}
            </div>
            <div className="bg-white/5 rounded-xl p-4 text-center">
              <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">Net Profit</p>
              <p className={`text-xl sm:text-2xl font-bold ${profit >= 0 ? 'text-white' : 'text-rose-400'}`}>{fmt(profit)}</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4 text-center">
              <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">Profit Margin</p>
              <p className={`text-xl sm:text-2xl font-bold ${metricColor(profitMargin, 40, 20)}`}>{pct(profitMargin)}</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4 text-center">
              <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">Collection Rate</p>
              <p className={`text-xl sm:text-2xl font-bold ${metricColor(collectionRate, 90, 75)}`}>{pct(collectionRate)}</p>
              <p className="text-xs text-slate-500 mt-1">{paid}/{sent} invoices</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4 text-center">
              <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">Avg Invoice</p>
              <p className="text-xl sm:text-2xl font-bold text-white">{fmt(avgInvoice)}</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4 text-center">
              <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">Effective Hourly</p>
              <p className="text-xl sm:text-2xl font-bold text-sky-400">{fmt(effectiveHourly)}<span className="text-sm">/hr</span></p>
              <p className="text-xs text-slate-500 mt-1">est. ~1,800 hrs</p>
            </div>
          </div>
        </div>

        {/* Revenue Analysis */}
        <div className="glass rounded-2xl p-6">
          <h3 className="text-lg font-bold text-white heading-font mb-4">Revenue Analysis</h3>

          {/* YoY comparison */}
          {hasComparison && (
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wide mb-3">Year-Over-Year</h4>
              <div className="bg-white/5 rounded-xl p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-400">Last FY</span>
                  <span className="text-sm font-medium text-slate-300">{fmt(lastRevenue)}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-1">
                    <div className="h-3 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full bg-slate-500 transition-all duration-500"
                        style={{ width: `${Math.min((lastRevenue / Math.max(revenue, lastRevenue)) * 100, 100)}%` }}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-sky-400 font-medium">This FY</span>
                  <span className="text-sm font-bold text-white">{fmt(revenue)}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-1">
                    <div className="h-3 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-sky-400 to-blue-500 transition-all duration-500"
                        style={{ width: `${Math.min((revenue / Math.max(revenue, lastRevenue)) * 100, 100)}%` }}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-white/10">
                  <span className="text-sm text-slate-400">Change</span>
                  <span className={`text-sm font-bold ${yoyGrowth >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                    {yoyGrowth >= 0 ? '+' : ''}{pct(yoyGrowth)} ({yoyGrowth >= 0 ? '+' : ''}{fmt(revenue - lastRevenue)})
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Quarterly bars */}
          {hasQuarterly && (
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wide mb-3">Quarterly Revenue</h4>
              <div className="grid grid-cols-4 gap-3 items-end" style={{ minHeight: 160 }}>
                {[
                  { label: 'Q1', sub: 'Jul-Sep', value: q1 },
                  { label: 'Q2', sub: 'Oct-Dec', value: q2 },
                  { label: 'Q3', sub: 'Jan-Mar', value: q3 },
                  { label: 'Q4', sub: 'Apr-Jun', value: q4 },
                ].map((q) => {
                  const heightPct = maxQ > 0 ? (q.value / maxQ) * 100 : 0;
                  return (
                    <div key={q.label} className="flex flex-col items-center">
                      <p className="text-xs font-medium text-white mb-1">{fmt(q.value)}</p>
                      <div className="w-full bg-white/5 rounded-t-lg overflow-hidden" style={{ height: 120 }}>
                        <div className="w-full flex flex-col justify-end h-full">
                          <div
                            className="w-full bg-gradient-to-t from-sky-400 to-blue-500 rounded-t-lg transition-all duration-700"
                            style={{ height: `${Math.max(heightPct, 2)}%` }}
                          />
                        </div>
                      </div>
                      <p className="text-xs text-sky-400 font-medium mt-2">{q.label}</p>
                      <p className="text-xs text-slate-500">{q.sub}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Revenue metrics */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-white/5 rounded-xl p-4">
              <p className="text-xs text-slate-500 uppercase tracking-wide">Revenue per Client</p>
              <p className="text-lg font-bold text-white mt-1">{fmt(revenuePerClient)}</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4">
              <p className="text-xs text-slate-500 uppercase tracking-wide">Effective Hourly Rate</p>
              <p className="text-lg font-bold text-sky-400 mt-1">{fmt(effectiveHourly)}/hr</p>
              <p className="text-xs text-slate-500 mt-0.5">Based on ~1,800 billable hours/year</p>
            </div>
          </div>
        </div>

        {/* Client Portfolio */}
        <div className="glass rounded-2xl p-6">
          <h3 className="text-lg font-bold text-white heading-font mb-4">Client Portfolio</h3>
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="bg-white/5 rounded-xl p-4 text-center">
              <p className="text-2xl font-bold text-white">{totalCl}</p>
              <p className="text-xs text-slate-500 mt-1">Total Clients</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4 text-center">
              <p className="text-2xl font-bold text-sky-400">{newCl}</p>
              <p className="text-xs text-slate-500 mt-1">New Clients</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4 text-center">
              <p className="text-2xl font-bold text-blue-400">{repeatCl}</p>
              <p className="text-xs text-slate-500 mt-1">Repeat Clients</p>
            </div>
          </div>

          {/* Retention rate */}
          {totalCl > 0 && (
            <div className={`rounded-xl p-4 border ${
              retAssess.label === 'Excellent'
                ? 'bg-emerald-500/10 border-emerald-500/20'
                : retAssess.label === 'Good'
                  ? 'bg-amber-500/10 border-amber-500/20'
                  : 'bg-rose-500/10 border-rose-500/20'
            }`}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-white font-medium">Client Retention Rate</p>
                  <p className={`text-xs ${retAssess.color}`}>
                    {retAssess.label}
                    {retentionRate >= 80
                      ? ' — your clients keep coming back. Strong foundation for sustainable growth.'
                      : retentionRate >= 60
                        ? ' — decent loyalty, but there is room to strengthen repeat business.'
                        : ' — low retention suggests issues with pricing, delivery, or communication. Investigate root causes.'}
                  </p>
                </div>
                <p className={`text-3xl font-bold ${retAssess.color}`}>{pct(retentionRate)}</p>
              </div>
            </div>
          )}

          {/* Top sources */}
          {sources.length > 0 && (
            <div className="mt-4">
              <p className="text-sm text-slate-400 mb-2">Top Revenue Sources</p>
              <div className="flex flex-wrap gap-2">
                {sources.map((s, i) => (
                  <span key={i} className="px-3 py-1 bg-sky-500/10 border border-sky-500/20 rounded-full text-sm text-sky-400">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Service Mix */}
        <div className="glass rounded-2xl p-6">
          <h3 className="text-lg font-bold text-white heading-font mb-4">Service Mix</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between bg-white/5 rounded-xl p-4">
              <span className="text-sm text-slate-400">Primary Service</span>
              <span className="text-sm font-medium text-white">{clients.primaryService || 'Not specified'}</span>
            </div>
            <div className="flex items-center justify-between bg-white/5 rounded-xl p-4">
              <span className="text-sm text-slate-400">Industry</span>
              <span className="text-sm font-medium text-white">{overview.industry}</span>
            </div>
            <div className="flex items-center justify-between bg-white/5 rounded-xl p-4">
              <span className="text-sm text-slate-400">Avg Project Duration</span>
              <span className="text-sm font-medium text-white">{clients.avgProjectDuration}</span>
            </div>
            {clients.servicesAdded && (
              <div className="flex items-center justify-between bg-emerald-500/5 border border-emerald-500/10 rounded-xl p-4">
                <span className="text-sm text-emerald-400">Services Added</span>
                <span className="text-sm font-medium text-white">{clients.servicesAdded}</span>
              </div>
            )}
            {clients.servicesDropped && (
              <div className="flex items-center justify-between bg-rose-500/5 border border-rose-500/10 rounded-xl p-4">
                <span className="text-sm text-rose-400">Services Dropped</span>
                <span className="text-sm font-medium text-white">{clients.servicesDropped}</span>
              </div>
            )}
          </div>
        </div>

        {/* Wins & Achievements */}
        {wins.length > 0 && (
          <div className="glass rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white heading-font mb-4">Wins &amp; Achievements</h3>
            <div className="space-y-3">
              {wins.map((w, i) => (
                <div key={i} className="flex items-start gap-3 bg-emerald-500/5 border border-emerald-500/10 rounded-xl p-4">
                  <div className="w-7 h-7 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>
                  </div>
                  <p className="text-sm text-white">{w}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Lessons & Challenges */}
        {lessons.length > 0 && (
          <div className="glass rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white heading-font mb-4">Lessons &amp; Challenges</h3>
            <div className="space-y-3">
              {lessons.map((l, i) => (
                <div key={i} className="flex items-start gap-3 bg-amber-500/5 border border-amber-500/10 rounded-xl p-4">
                  <div className="w-7 h-7 rounded-full bg-amber-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                    </svg>
                  </div>
                  <p className="text-sm text-white">{l}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Next Year Plan */}
        <div className="glass rounded-2xl p-6">
          <h3 className="text-lg font-bold text-white heading-font mb-4">Next Year Plan</h3>

          {nextGoalNum > 0 && (
            <div className="bg-gradient-to-r from-sky-500/10 to-blue-500/10 border border-sky-500/20 rounded-xl p-5 mb-4 text-center">
              <p className="text-xs text-sky-400/70 uppercase tracking-wide mb-1">Revenue Target</p>
              <p className="text-3xl font-bold text-white">{fmt(nextGoalNum)}</p>
              {revenue > 0 && (
                <p className={`text-sm mt-1 ${goalGrowth >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {goalGrowth >= 0 ? '+' : ''}{pct(goalGrowth)} growth from {fmt(revenue)}
                </p>
              )}
            </div>
          )}

          {nextGoals.length > 0 && (
            <div className="space-y-3 mb-4">
              <p className="text-sm text-slate-400 font-medium">Key Goals</p>
              {nextGoals.map((g, i) => (
                <div key={i} className="flex items-start gap-3 bg-blue-500/5 border border-blue-500/10 rounded-xl p-4">
                  <div className="w-7 h-7 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-blue-400 font-bold text-sm">{i + 1}</span>
                  </div>
                  <p className="text-sm text-white">{g}</p>
                </div>
              ))}
            </div>
          )}

          <div className="grid sm:grid-cols-2 gap-4">
            {goals.skillsToDevelop && (
              <div className="bg-white/5 rounded-xl p-4">
                <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">Skills to Develop</p>
                <p className="text-sm text-white">{goals.skillsToDevelop}</p>
              </div>
            )}
            <div className="bg-white/5 rounded-xl p-4">
              <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">Rate Adjustment</p>
              <p className={`text-sm font-medium ${
                goals.rateChangePlan.includes('Increase') ? 'text-emerald-400' :
                goals.rateChangePlan === 'Decrease' ? 'text-rose-400' : 'text-white'
              }`}>{goals.rateChangePlan}</p>
            </div>
          </div>
        </div>

        {/* Report Footer */}
        <div className="text-center py-4">
          <p className="text-xs text-slate-500">
            Annual review generated with{' '}
            <a href="https://www.invoiceflow.au" className="text-sky-400 hover:underline">
              InvoiceFlow
            </a>
          </p>
        </div>
      </div>
    );
  }

  /* ---- Main Render ---- */
  return (
    <div className="space-y-6">
      <div className="glass rounded-2xl p-6 sm:p-8">
        <StepIndicator />

        {step === 1 && renderStep1()}
        {step === 2 && renderStep2()}
        {step === 3 && renderStep3()}
        {step === 4 && renderStep4()}
        {step === 5 && renderStep5()}

        {/* Navigation */}
        {step < 5 && (
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/10">
            <button
              onClick={prevStep}
              disabled={step === 1}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                step === 1
                  ? 'text-slate-600 cursor-not-allowed'
                  : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'
              }`}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
              </svg>
              Back
            </button>
            <button
              onClick={nextStep}
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-sky-400 to-blue-500 text-white text-sm font-medium hover:opacity-90 transition-all"
            >
              {step === 4 ? 'Generate Review' : 'Next'}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        )}

        {/* Back to edit on step 5 */}
        {step === 5 && (
          <div className="flex items-center justify-center mt-6 pt-6 border-t border-white/10">
            <button
              onClick={() => setStep(1)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-white/10 transition-all"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
              </svg>
              Edit Review Data
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
