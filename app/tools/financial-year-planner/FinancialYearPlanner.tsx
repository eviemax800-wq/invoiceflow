'use client';

import { useState, useMemo } from 'react';

/* ---- Types ---- */

type BusinessStage = 'startup' | 'growth' | 'established';
type QuarterFocus = 'new-clients' | 'existing-clients' | 'marketing' | 'product-development';

interface BusinessSetup {
  annualRevenueTarget: number;
  monthlyFixedExpenses: number;
  averageHourlyRate: number;
  averageProjectValue: number;
  businessStage: BusinessStage;
}

interface QuarterPlan {
  revenueTarget: number;
  clientsTarget: number;
  focus: QuarterFocus;
  customRevenue: boolean;
}

interface ATODeadline {
  date: string;
  label: string;
  type: 'bas' | 'super' | 'tax' | 'eofy';
  quarter: number;
}

/* ---- Constants ---- */

const QUARTER_LABELS = ['Q1 (Jul-Sep)', 'Q2 (Oct-Dec)', 'Q3 (Jan-Mar)', 'Q4 (Apr-Jun)'];
const QUARTER_MONTHS = [
  ['Jul', 'Aug', 'Sep'],
  ['Oct', 'Nov', 'Dec'],
  ['Jan', 'Feb', 'Mar'],
  ['Apr', 'May', 'Jun'],
];

const FOCUS_LABELS: Record<QuarterFocus, string> = {
  'new-clients': 'New Clients',
  'existing-clients': 'Existing Clients',
  'marketing': 'Marketing',
  'product-development': 'Product Development',
};

const FOCUS_COLORS: Record<QuarterFocus, string> = {
  'new-clients': 'text-emerald-400',
  'existing-clients': 'text-sky-400',
  'marketing': 'text-amber-400',
  'product-development': 'text-violet-400',
};

const STAGE_LABELS: Record<BusinessStage, string> = {
  startup: 'Startup (0-2 years)',
  growth: 'Growth (2-5 years)',
  established: 'Established (5+ years)',
};

const DEFAULT_QUARTER_WEIGHTS = [0.23, 0.28, 0.21, 0.28];

const ATO_DEADLINES: ATODeadline[] = [
  // Q1 deadlines (Jul-Sep)
  { date: '28 Jul 2025', label: 'Q4 FY24-25 BAS due', type: 'bas', quarter: 0 },
  { date: '28 Jul 2025', label: 'Q4 FY24-25 Super due', type: 'super', quarter: 0 },
  // Q2 deadlines (Oct-Dec)
  { date: '28 Oct 2025', label: 'Q1 BAS due', type: 'bas', quarter: 1 },
  { date: '28 Oct 2025', label: 'Q1 Super due', type: 'super', quarter: 1 },
  { date: '31 Oct 2025', label: 'Income tax lodgement (self)', type: 'tax', quarter: 1 },
  // Q3 deadlines (Jan-Mar)
  { date: '28 Jan 2026', label: 'Q2 Super due', type: 'super', quarter: 2 },
  { date: '28 Feb 2026', label: 'Q2 BAS due', type: 'bas', quarter: 2 },
  { date: '15 Mar 2026', label: 'Income tax (tax agent)', type: 'tax', quarter: 2 },
  // Q4 deadlines (Apr-Jun)
  { date: '28 Apr 2026', label: 'Q3 BAS due', type: 'bas', quarter: 3 },
  { date: '28 Apr 2026', label: 'Q3 Super due', type: 'super', quarter: 3 },
  { date: '30 Jun 2026', label: 'End of Financial Year', type: 'eofy', quarter: 3 },
];

const SUPER_RATE = 0.115;
const BILLABLE_WEEKS_PER_YEAR = 46;

/* ---- ATO 2025-26 Tax Brackets ---- */

function calculateIncomeTax(taxableIncome: number): number {
  if (taxableIncome <= 18200) return 0;
  if (taxableIncome <= 45000) return (taxableIncome - 18200) * 0.16;
  if (taxableIncome <= 135000) return 4288 + (taxableIncome - 45000) * 0.30;
  if (taxableIncome <= 190000) return 31288 + (taxableIncome - 135000) * 0.37;
  return 51638 + (taxableIncome - 190000) * 0.45;
}

function calculateMedicareLevy(taxableIncome: number): number {
  return taxableIncome * 0.02;
}

function calculateTotalTax(taxableIncome: number): {
  incomeTax: number;
  medicareLevy: number;
  total: number;
  effectiveRate: number;
} {
  const incomeTax = calculateIncomeTax(taxableIncome);
  const medicareLevy = calculateMedicareLevy(taxableIncome);
  const total = incomeTax + medicareLevy;
  const effectiveRate = taxableIncome > 0 ? (total / taxableIncome) * 100 : 0;
  return { incomeTax, medicareLevy, total, effectiveRate };
}

/* ---- Helpers ---- */

function fmtCurrency(n: number): string {
  return '$' + n.toLocaleString('en-AU', { maximumFractionDigits: 0 });
}

function fmtPct(n: number): string {
  return n.toFixed(1) + '%';
}

/* ---- Component ---- */

export default function FinancialYearPlanner() {
  const [step, setStep] = useState(1);
  const [calculated, setCalculated] = useState(false);
  const [copied, setCopied] = useState(false);

  const [setup, setSetup] = useState<BusinessSetup>({
    annualRevenueTarget: 120000,
    monthlyFixedExpenses: 3500,
    averageHourlyRate: 150,
    averageProjectValue: 5000,
    businessStage: 'growth',
  });

  const [quarters, setQuarters] = useState<QuarterPlan[]>(() =>
    DEFAULT_QUARTER_WEIGHTS.map((w) => ({
      revenueTarget: Math.round(120000 * w),
      clientsTarget: Math.round((120000 * w) / 5000),
      focus: 'new-clients' as QuarterFocus,
      customRevenue: false,
    }))
  );

  // Recalculate quarter defaults when annual target changes
  const redistributeQuarters = (annual: number) => {
    setQuarters((prev) =>
      prev.map((q, i) =>
        q.customRevenue
          ? q
          : {
              ...q,
              revenueTarget: Math.round(annual * DEFAULT_QUARTER_WEIGHTS[i]),
              clientsTarget: Math.max(
                1,
                Math.round((annual * DEFAULT_QUARTER_WEIGHTS[i]) / (setup.averageProjectValue || 1))
              ),
            }
      )
    );
  };

  const updateSetup = (key: keyof BusinessSetup, value: number | BusinessStage) => {
    setSetup((prev) => {
      const next = { ...prev, [key]: value };
      if (key === 'annualRevenueTarget') {
        redistributeQuarters(value as number);
      }
      return next;
    });
  };

  const updateQuarter = (idx: number, key: keyof QuarterPlan, value: number | QuarterFocus | boolean) => {
    setQuarters((prev) =>
      prev.map((q, i) => {
        if (i !== idx) return q;
        const updated = { ...q, [key]: value };
        if (key === 'revenueTarget') {
          updated.customRevenue = true;
          updated.clientsTarget = Math.max(
            1,
            Math.round((value as number) / (setup.averageProjectValue || 1))
          );
        }
        return updated;
      })
    );
  };

  const resetQuarterDistribution = () => {
    setQuarters(
      DEFAULT_QUARTER_WEIGHTS.map((w, i) => ({
        revenueTarget: Math.round(setup.annualRevenueTarget * w),
        clientsTarget: Math.max(
          1,
          Math.round((setup.annualRevenueTarget * w) / (setup.averageProjectValue || 1))
        ),
        focus: quarters[i].focus,
        customRevenue: false,
      }))
    );
  };

  const quarterTotal = quarters.reduce((sum, q) => sum + q.revenueTarget, 0);

  /* ---- Results Computation ---- */
  const results = useMemo(() => {
    const annual = setup.annualRevenueTarget;
    const monthly = annual / 12;
    const weekly = annual / 52;
    const daily = annual / 260; // 52 weeks * 5 days

    // Tax
    const taxCalc = calculateTotalTax(annual);

    // Super
    const superAmount = annual * SUPER_RATE;

    // GST (if revenue > 75k)
    const gstApplicable = annual > 75000;
    const gstReserve = gstApplicable ? annual * 0.1 : 0;

    // Net take-home
    const netTakeHome = annual - taxCalc.total - superAmount - setup.monthlyFixedExpenses * 12;

    // Cash reserve (3 months of fixed expenses)
    const cashReserveTarget = setup.monthlyFixedExpenses * 3;

    // Billable hours
    const weeklyBillableHours =
      setup.averageHourlyRate > 0 ? weekly / setup.averageHourlyRate : 0;
    const dailyBillingTarget = daily;
    const totalBillableHours =
      setup.averageHourlyRate > 0 ? annual / setup.averageHourlyRate : 0;

    // Projects needed
    const totalProjects =
      setup.averageProjectValue > 0 ? Math.ceil(annual / setup.averageProjectValue) : 0;

    // Quarter results
    const quarterResults = quarters.map((q, i) => {
      const qMonthly = q.revenueTarget / 3;
      const qWeekly = q.revenueTarget / 13;
      const qBillableHours =
        setup.averageHourlyRate > 0 ? q.revenueTarget / setup.averageHourlyRate : 0;
      const qWeeklyHours = qBillableHours / 13;

      const deadlines = ATO_DEADLINES.filter((d) => d.quarter === i);

      const actionItems: string[] = [];
      if (q.focus === 'new-clients') {
        actionItems.push(`Pitch ${Math.max(2, q.clientsTarget * 2)} prospective clients`);
        actionItems.push('Update portfolio and case studies');
        actionItems.push('Attend 1-2 networking events');
      } else if (q.focus === 'existing-clients') {
        actionItems.push('Schedule check-in calls with top clients');
        actionItems.push('Propose upsell or retainer extensions');
        actionItems.push('Collect testimonials from completed projects');
      } else if (q.focus === 'marketing') {
        actionItems.push('Publish 3-4 blog posts or case studies');
        actionItems.push('Optimise website and SEO');
        actionItems.push('Launch or update social media presence');
      } else {
        actionItems.push('Develop new service offering or package');
        actionItems.push('Invest in skills training or certification');
        actionItems.push('Document and systematise workflows');
      }

      // Add ATO actions
      deadlines.forEach((d) => {
        if (d.type === 'bas') actionItems.push(`Lodge ${d.label} by ${d.date}`);
        else if (d.type === 'super') actionItems.push(`Pay ${d.label} by ${d.date}`);
        else if (d.type === 'tax') actionItems.push(`${d.label} by ${d.date}`);
        else if (d.type === 'eofy') actionItems.push(`EOFY preparations and review by ${d.date}`);
      });

      return {
        ...q,
        monthlyRevenue: qMonthly,
        weeklyRevenue: qWeekly,
        billableHours: qBillableHours,
        weeklyHours: qWeeklyHours,
        deadlines,
        actionItems,
        pctOfAnnual: annual > 0 ? (q.revenueTarget / annual) * 100 : 0,
      };
    });

    return {
      annual,
      monthly,
      weekly,
      daily,
      dailyBillingTarget,
      taxCalc,
      superAmount,
      gstApplicable,
      gstReserve,
      netTakeHome,
      cashReserveTarget,
      weeklyBillableHours,
      totalBillableHours,
      totalProjects,
      quarterResults,
    };
  }, [setup, quarters]);

  /* ---- Report Generation ---- */
  const generateReport = (): string => {
    const lines: string[] = [];
    lines.push('='.repeat(60));
    lines.push('FREELANCE FINANCIAL YEAR PLAN — FY2025-26');
    lines.push('='.repeat(60));
    lines.push('');
    lines.push('BUSINESS OVERVIEW');
    lines.push('-'.repeat(45));
    lines.push(`Annual revenue target:  ${fmtCurrency(setup.annualRevenueTarget)}`);
    lines.push(`Monthly fixed expenses: ${fmtCurrency(setup.monthlyFixedExpenses)}`);
    lines.push(`Average hourly rate:    ${fmtCurrency(setup.averageHourlyRate)}`);
    lines.push(`Average project value:  ${fmtCurrency(setup.averageProjectValue)}`);
    lines.push(`Business stage:         ${STAGE_LABELS[setup.businessStage]}`);
    lines.push('');
    lines.push('FINANCIAL SUMMARY');
    lines.push('-'.repeat(45));
    lines.push(`Monthly revenue needed: ${fmtCurrency(results.monthly)}`);
    lines.push(`Weekly revenue needed:  ${fmtCurrency(results.weekly)}`);
    lines.push(`Daily billing target:   ${fmtCurrency(results.dailyBillingTarget)}`);
    lines.push(`Weekly billable hours:  ${results.weeklyBillableHours.toFixed(1)} hours`);
    lines.push(`Total projects needed:  ${results.totalProjects}`);
    lines.push('');
    lines.push('TAX & RESERVES');
    lines.push('-'.repeat(45));
    lines.push(`Income tax:             ${fmtCurrency(results.taxCalc.incomeTax)}`);
    lines.push(`Medicare levy:          ${fmtCurrency(results.taxCalc.medicareLevy)}`);
    lines.push(`Total tax:              ${fmtCurrency(results.taxCalc.total)} (${fmtPct(results.taxCalc.effectiveRate)} effective)`);
    lines.push(`Super (11.5%):          ${fmtCurrency(results.superAmount)}`);
    if (results.gstApplicable) {
      lines.push(`GST reserve (10%):      ${fmtCurrency(results.gstReserve)}`);
    }
    lines.push(`Cash reserve target:    ${fmtCurrency(results.cashReserveTarget)} (3-month runway)`);
    lines.push(`Net take-home:          ${fmtCurrency(results.netTakeHome)}`);
    lines.push('');
    lines.push('QUARTERLY PLAN');
    lines.push('-'.repeat(45));
    results.quarterResults.forEach((q, i) => {
      lines.push('');
      lines.push(`${QUARTER_LABELS[i]} — ${fmtCurrency(q.revenueTarget)} (${fmtPct(q.pctOfAnnual)} of annual)`);
      lines.push(`  Monthly: ${fmtCurrency(q.monthlyRevenue)} | Weekly: ${fmtCurrency(q.weeklyRevenue)}`);
      lines.push(`  Clients/Projects: ${q.clientsTarget} | Billable hours: ${q.billableHours.toFixed(0)} (${q.weeklyHours.toFixed(1)}/week)`);
      lines.push(`  Focus: ${FOCUS_LABELS[q.focus]}`);
      lines.push('  Action Items:');
      q.actionItems.forEach((a) => lines.push(`    - ${a}`));
    });
    lines.push('');
    lines.push('ATO DEADLINES FY2025-26');
    lines.push('-'.repeat(45));
    ATO_DEADLINES.forEach((d) => {
      lines.push(`  ${d.date.padEnd(16)} ${d.label}`);
    });
    lines.push('');
    lines.push('-'.repeat(60));
    lines.push('Generated by InvoiceFlow Financial Year Planner');
    lines.push('https://www.invoiceflow.au/tools/financial-year-planner');
    lines.push('-'.repeat(60));
    return lines.join('\n');
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateReport()).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const handleCalculate = () => {
    setCalculated(true);
    setStep(3);
  };

  const inputClass =
    'w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-slate-600 focus:outline-none focus:border-rose-400/50 focus:ring-1 focus:ring-rose-400/25 transition-all text-sm';
  const labelClass = 'block text-sm font-medium text-slate-300 mb-1.5';

  /* ---- Max bar for quarter chart ---- */
  const maxQuarterRevenue = Math.max(...quarters.map((q) => q.revenueTarget), 1);

  return (
    <div className="space-y-8">
      {/* Step Indicator */}
      <div className="flex items-center justify-center gap-2 sm:gap-4 mb-4">
        {[1, 2, 3].map((s) => (
          <button
            key={s}
            onClick={() => {
              if (s < 3 || calculated) setStep(s);
            }}
            className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
              step === s
                ? 'bg-gradient-to-r from-rose-400/20 to-pink-500/20 border border-rose-400/40 text-rose-300'
                : s < step || (s === 3 && calculated)
                  ? 'bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10'
                  : 'bg-white/[0.02] border border-white/[0.05] text-slate-600 cursor-default'
            }`}
          >
            <div
              className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${
                step === s
                  ? 'bg-rose-400/30 text-rose-300'
                  : s < step || (s === 3 && calculated)
                    ? 'bg-white/10 text-slate-400'
                    : 'bg-white/5 text-slate-600'
              }`}
            >
              {s < step ? '\u2713' : s}
            </div>
            <span className="hidden sm:inline">
              {s === 1 ? 'Business Setup' : s === 2 ? 'Quarterly Planning' : 'Results'}
            </span>
          </button>
        ))}
      </div>

      {/* Step 1: Business Setup */}
      {step === 1 && (
        <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
          <h3 className="text-lg font-bold text-white heading-font mb-2">Business Setup</h3>
          <p className="text-sm text-slate-400 mb-6">
            Enter your key business metrics for FY2025-26. These numbers drive the entire plan —
            revenue targets, billable hours, tax reserves, and cash flow projections.
          </p>

          <div className="space-y-6">
            {/* Annual Revenue Target */}
            <div>
              <label className={labelClass}>Annual Revenue Target (AUD, GST-exclusive)</label>
              <div className="relative max-w-md">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm">$</span>
                <input
                  type="number"
                  value={setup.annualRevenueTarget}
                  onChange={(e) => updateSetup('annualRevenueTarget', Math.max(0, Number(e.target.value)))}
                  className={`${inputClass} pl-8 text-lg`}
                  min={0}
                  step={5000}
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm">/year</span>
              </div>
              <div className="mt-2 flex gap-2 flex-wrap">
                {[80000, 100000, 120000, 150000, 200000, 250000, 300000].map((val) => (
                  <button
                    key={val}
                    onClick={() => updateSetup('annualRevenueTarget', val)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                      setup.annualRevenueTarget === val
                        ? 'bg-rose-400/20 border border-rose-400/40 text-rose-300'
                        : 'bg-white/5 border border-white/10 text-slate-500 hover:text-white'
                    }`}
                  >
                    {fmtCurrency(val)}
                  </button>
                ))}
              </div>
            </div>

            {/* Monthly Fixed Expenses */}
            <div>
              <label className={labelClass}>Monthly Fixed Expenses</label>
              <p className="text-xs text-slate-500 mb-2">
                Rent, subscriptions, insurance, utilities — everything you pay regardless of revenue.
              </p>
              <div className="relative max-w-md">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm">$</span>
                <input
                  type="number"
                  value={setup.monthlyFixedExpenses}
                  onChange={(e) =>
                    updateSetup('monthlyFixedExpenses', Math.max(0, Number(e.target.value)))
                  }
                  className={`${inputClass} pl-8`}
                  min={0}
                  step={100}
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm">/month</span>
              </div>
            </div>

            {/* Average Hourly Rate */}
            <div>
              <label className={labelClass}>Average Hourly Rate</label>
              <div className="relative max-w-md">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm">$</span>
                <input
                  type="number"
                  value={setup.averageHourlyRate}
                  onChange={(e) =>
                    updateSetup('averageHourlyRate', Math.max(0, Number(e.target.value)))
                  }
                  className={`${inputClass} pl-8`}
                  min={0}
                  step={5}
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm">/hour</span>
              </div>
            </div>

            {/* Average Project Value */}
            <div>
              <label className={labelClass}>Average Project Value</label>
              <div className="relative max-w-md">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm">$</span>
                <input
                  type="number"
                  value={setup.averageProjectValue}
                  onChange={(e) =>
                    updateSetup('averageProjectValue', Math.max(0, Number(e.target.value)))
                  }
                  className={`${inputClass} pl-8`}
                  min={0}
                  step={500}
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm">/project</span>
              </div>
            </div>

            {/* Business Stage */}
            <div>
              <label className={labelClass}>Business Stage</label>
              <div className="flex gap-2 flex-wrap">
                {(['startup', 'growth', 'established'] as BusinessStage[]).map((stage) => (
                  <button
                    key={stage}
                    onClick={() => updateSetup('businessStage', stage)}
                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      setup.businessStage === stage
                        ? 'bg-gradient-to-r from-rose-400/20 to-pink-500/20 border border-rose-400/40 text-rose-300'
                        : 'bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {STAGE_LABELS[stage]}
                  </button>
                ))}
              </div>
            </div>

            {/* Summary */}
            <div className="bg-white/5 rounded-xl p-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div>
                <p className="text-xs text-slate-500">Monthly Needed</p>
                <p className="text-lg font-bold text-white">
                  {fmtCurrency(setup.annualRevenueTarget / 12)}
                </p>
              </div>
              <div>
                <p className="text-xs text-slate-500">Weekly Needed</p>
                <p className="text-lg font-bold text-white">
                  {fmtCurrency(setup.annualRevenueTarget / 52)}
                </p>
              </div>
              <div>
                <p className="text-xs text-slate-500">Projects Needed</p>
                <p className="text-lg font-bold text-rose-400">
                  {setup.averageProjectValue > 0
                    ? Math.ceil(setup.annualRevenueTarget / setup.averageProjectValue)
                    : '—'}
                </p>
              </div>
              <div>
                <p className="text-xs text-slate-500">Billable hrs/week</p>
                <p className="text-lg font-bold text-rose-400">
                  {setup.averageHourlyRate > 0
                    ? (setup.annualRevenueTarget / BILLABLE_WEEKS_PER_YEAR / setup.averageHourlyRate).toFixed(1)
                    : '—'}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={() => setStep(2)}
              className="bg-gradient-to-r from-rose-400 to-pink-500 text-white font-semibold rounded-xl px-10 py-4 hover:from-rose-300 hover:to-pink-400 transition-all text-lg shadow-lg shadow-rose-500/20"
            >
              Next: Quarterly Planning
            </button>
          </div>
        </div>
      )}

      {/* Step 2: Quarterly Planning */}
      {step === 2 && (
        <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-bold text-white heading-font">Quarterly Planning</h3>
            <button
              onClick={resetQuarterDistribution}
              className="text-xs text-slate-500 hover:text-rose-400 transition-colors"
            >
              Reset to Auto
            </button>
          </div>
          <p className="text-sm text-slate-400 mb-6">
            Set revenue targets and focus areas for each quarter. The default distribution weights
            Q2 and Q4 higher (typical Australian seasonal patterns). Customise as needed.
          </p>

          {/* Quarter Total Check */}
          <div
            className={`rounded-xl p-4 flex items-center justify-between mb-6 ${
              Math.abs(quarterTotal - setup.annualRevenueTarget) <= 1000
                ? 'bg-rose-400/10 border border-rose-400/20'
                : 'bg-amber-400/10 border border-amber-400/20'
            }`}
          >
            <span
              className={`text-sm font-medium ${
                Math.abs(quarterTotal - setup.annualRevenueTarget) <= 1000
                  ? 'text-rose-400'
                  : 'text-amber-400'
              }`}
            >
              Quarterly Total
            </span>
            <div className="text-right">
              <span
                className={`text-lg font-bold ${
                  Math.abs(quarterTotal - setup.annualRevenueTarget) <= 1000
                    ? 'text-rose-400'
                    : 'text-amber-400'
                }`}
              >
                {fmtCurrency(quarterTotal)}
              </span>
              <span className="text-xs text-slate-500 ml-2">
                / {fmtCurrency(setup.annualRevenueTarget)} target
              </span>
            </div>
          </div>

          <div className="space-y-5">
            {quarters.map((q, i) => (
              <div
                key={i}
                className="bg-white/[0.04] border border-rose-400/10 rounded-xl p-5"
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-white font-semibold text-sm flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center text-xs font-bold text-white">
                      {i + 1}
                    </div>
                    {QUARTER_LABELS[i]}
                  </h4>
                  <span className="text-xs text-slate-500">
                    {QUARTER_MONTHS[i].join(', ')}
                  </span>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Revenue Target */}
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1">
                      Revenue Target
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-sm">
                        $
                      </span>
                      <input
                        type="number"
                        value={q.revenueTarget}
                        onChange={(e) =>
                          updateQuarter(i, 'revenueTarget', Math.max(0, Number(e.target.value)))
                        }
                        className="w-full px-3 py-2.5 pl-7 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-rose-400/50 transition-all"
                        min={0}
                        step={1000}
                      />
                    </div>
                  </div>

                  {/* Clients/Projects */}
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1">
                      Clients/Projects
                    </label>
                    <input
                      type="number"
                      value={q.clientsTarget}
                      onChange={(e) =>
                        updateQuarter(i, 'clientsTarget', Math.max(1, Number(e.target.value)))
                      }
                      className="w-full px-3 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-rose-400/50 transition-all"
                      min={1}
                      step={1}
                    />
                  </div>
                </div>

                {/* Focus Area */}
                <div className="mt-3">
                  <label className="block text-xs font-medium text-slate-400 mb-1.5">
                    Key Focus Area
                  </label>
                  <div className="flex gap-2 flex-wrap">
                    {(Object.keys(FOCUS_LABELS) as QuarterFocus[]).map((focus) => (
                      <button
                        key={focus}
                        onClick={() => updateQuarter(i, 'focus', focus)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                          q.focus === focus
                            ? 'bg-rose-400/15 border border-rose-400/30 text-rose-300'
                            : 'bg-white/5 border border-white/10 text-slate-500 hover:text-white'
                        }`}
                      >
                        {FOCUS_LABELS[focus]}
                      </button>
                    ))}
                  </div>
                </div>

                {/* ATO Deadlines */}
                {ATO_DEADLINES.filter((d) => d.quarter === i).length > 0 && (
                  <div className="mt-3 bg-white/[0.03] rounded-lg p-3">
                    <p className="text-xs font-medium text-slate-500 mb-1.5">ATO Deadlines</p>
                    <div className="flex flex-wrap gap-2">
                      {ATO_DEADLINES.filter((d) => d.quarter === i).map((d, j) => (
                        <span
                          key={j}
                          className={`px-2 py-1 rounded-md text-xs font-medium ${
                            d.type === 'bas'
                              ? 'bg-amber-400/10 text-amber-400 border border-amber-400/20'
                              : d.type === 'super'
                                ? 'bg-sky-400/10 text-sky-400 border border-sky-400/20'
                                : d.type === 'tax'
                                  ? 'bg-violet-400/10 text-violet-400 border border-violet-400/20'
                                  : 'bg-rose-400/10 text-rose-400 border border-rose-400/20'
                          }`}
                        >
                          {d.date}: {d.label}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-center gap-3">
            <button
              onClick={() => setStep(1)}
              className="px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-slate-300 font-medium hover:bg-white/10 transition-all"
            >
              Back
            </button>
            <button
              onClick={handleCalculate}
              className="bg-gradient-to-r from-rose-400 to-pink-500 text-white font-semibold rounded-xl px-10 py-4 hover:from-rose-300 hover:to-pink-400 transition-all text-lg shadow-lg shadow-rose-500/20"
            >
              Generate My Plan
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Results Dashboard */}
      {step === 3 && calculated && (
        <>
          {/* Annual Overview */}
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white heading-font mb-6 text-center">
              FY2025-26 Financial Plan
            </h3>

            <div className="text-center mb-8">
              <p className="text-sm text-slate-400 mb-2">Annual Revenue Target</p>
              <p className="text-5xl font-bold text-white heading-font">
                {fmtCurrency(results.annual)}
              </p>
              <p className="text-sm text-slate-500 mt-2">
                {fmtCurrency(results.monthly)}/month | {STAGE_LABELS[setup.businessStage]}
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="bg-white/5 rounded-xl p-4 text-center">
                <p className="text-xs text-slate-500 mb-1">Monthly Revenue</p>
                <p className="text-xl font-bold text-rose-400">{fmtCurrency(results.monthly)}</p>
                <p className="text-xs text-slate-600 mt-1">needed</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 text-center">
                <p className="text-xs text-slate-500 mb-1">Weekly Hours</p>
                <p className="text-xl font-bold text-pink-400">
                  {results.weeklyBillableHours.toFixed(1)}
                </p>
                <p className="text-xs text-slate-600 mt-1">billable</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 text-center">
                <p className="text-xs text-slate-500 mb-1">Daily Target</p>
                <p className="text-xl font-bold text-amber-400">
                  {fmtCurrency(results.dailyBillingTarget)}
                </p>
                <p className="text-xs text-slate-600 mt-1">billing</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 text-center">
                <p className="text-xs text-slate-500 mb-1">Projects Needed</p>
                <p className="text-xl font-bold text-emerald-400">{results.totalProjects}</p>
                <p className="text-xs text-slate-600 mt-1">for the year</p>
              </div>
            </div>
          </div>

          {/* Quarterly Revenue Timeline */}
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white heading-font mb-6">
              Quarterly Revenue Targets
            </h3>

            <div className="space-y-4">
              {results.quarterResults.map((q, i) => {
                const barWidth = (q.revenueTarget / maxQuarterRevenue) * 100;
                return (
                  <div key={i}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center text-xs font-bold text-white">
                          {i + 1}
                        </div>
                        <span className="text-sm font-medium text-white">{QUARTER_LABELS[i]}</span>
                        <span className={`text-xs font-medium ${FOCUS_COLORS[q.focus]}`}>
                          {FOCUS_LABELS[q.focus]}
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-sm font-bold text-white">
                          {fmtCurrency(q.revenueTarget)}
                        </span>
                        <span className="text-xs text-slate-500 ml-2">
                          ({fmtPct(q.pctOfAnnual)})
                        </span>
                      </div>
                    </div>
                    <div className="h-8 bg-white/5 rounded-lg overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-rose-400 to-pink-500 rounded-lg transition-all duration-700 flex items-center justify-end pr-3"
                        style={{ width: `${barWidth}%` }}
                      >
                        <span className="text-xs font-medium text-white/80">
                          {fmtCurrency(q.monthlyRevenue)}/mo
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-1.5 text-xs text-slate-500">
                      <span>
                        {q.clientsTarget} project{q.clientsTarget !== 1 ? 's' : ''} | {q.weeklyHours.toFixed(1)} hrs/week
                      </span>
                      <span>{QUARTER_MONTHS[i].join(' / ')}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ATO Deadline Calendar */}
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white heading-font mb-6">
              ATO Deadline Calendar FY2025-26
            </h3>

            <div className="space-y-3">
              {ATO_DEADLINES.map((d, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-white/[0.04] rounded-xl px-4 py-3"
                >
                  <div
                    className={`w-3 h-3 rounded-full flex-shrink-0 ${
                      d.type === 'bas'
                        ? 'bg-amber-400'
                        : d.type === 'super'
                          ? 'bg-sky-400'
                          : d.type === 'tax'
                            ? 'bg-violet-400'
                            : 'bg-rose-400'
                    }`}
                  />
                  <span className="text-sm text-white font-medium w-32 flex-shrink-0">
                    {d.date}
                  </span>
                  <span className="text-sm text-slate-300 flex-1">{d.label}</span>
                  <span
                    className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                      d.type === 'bas'
                        ? 'bg-amber-400/10 text-amber-400'
                        : d.type === 'super'
                          ? 'bg-sky-400/10 text-sky-400'
                          : d.type === 'tax'
                            ? 'bg-violet-400/10 text-violet-400'
                            : 'bg-rose-400/10 text-rose-400'
                    }`}
                  >
                    {d.type === 'bas' ? 'BAS' : d.type === 'super' ? 'Super' : d.type === 'tax' ? 'Tax' : 'EOFY'}
                  </span>
                </div>
              ))}
            </div>

            {/* Legend */}
            <div className="mt-4 flex flex-wrap gap-4 justify-center">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <span className="text-xs text-slate-500">BAS</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-sky-400" />
                <span className="text-xs text-slate-500">Super</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-violet-400" />
                <span className="text-xs text-slate-500">Income Tax</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                <span className="text-xs text-slate-500">EOFY</span>
              </div>
            </div>
          </div>

          {/* Tax & Reserves */}
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white heading-font mb-6">
              Tax, Super &amp; Reserves
            </h3>

            <div className="grid sm:grid-cols-2 gap-4">
              {/* Tax Breakdown */}
              <div className="bg-white/5 rounded-xl p-5">
                <p className="text-xs text-slate-500 mb-3 font-medium">
                  Tax Reserve (ATO 2025-26)
                </p>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-300">Income Tax</span>
                    <span className="text-sm font-medium text-white">
                      {fmtCurrency(results.taxCalc.incomeTax)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-300">Medicare Levy (2%)</span>
                    <span className="text-sm font-medium text-white">
                      {fmtCurrency(results.taxCalc.medicareLevy)}
                    </span>
                  </div>
                  <div className="border-t border-white/10 pt-3 flex items-center justify-between">
                    <span className="text-sm font-medium text-white">Total Tax</span>
                    <span className="text-lg font-bold text-amber-400">
                      {fmtCurrency(results.taxCalc.total)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-500">Effective Rate</span>
                    <span className="text-sm font-medium text-amber-400">
                      {fmtPct(results.taxCalc.effectiveRate)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-500">Monthly Set-Aside</span>
                    <span className="text-sm font-medium text-white">
                      {fmtCurrency(results.taxCalc.total / 12)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Super */}
              <div className="bg-white/5 rounded-xl p-5">
                <p className="text-xs text-slate-500 mb-3 font-medium">
                  Superannuation (11.5%)
                </p>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-300">Annual Super</span>
                    <span className="text-sm font-medium text-sky-400">
                      {fmtCurrency(results.superAmount)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-300">Quarterly Payment</span>
                    <span className="text-sm font-medium text-sky-400">
                      {fmtCurrency(results.superAmount / 4)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-300">Monthly Set-Aside</span>
                    <span className="text-sm font-medium text-white">
                      {fmtCurrency(results.superAmount / 12)}
                    </span>
                  </div>
                  {results.gstApplicable && (
                    <>
                      <div className="border-t border-white/10 pt-3" />
                      <p className="text-xs text-slate-500 font-medium">GST Reserve</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-300">Annual GST (10%)</span>
                        <span className="text-sm font-medium text-emerald-400">
                          {fmtCurrency(results.gstReserve)}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-300">Quarterly BAS GST</span>
                        <span className="text-sm font-medium text-emerald-400">
                          {fmtCurrency(results.gstReserve / 4)}
                        </span>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Net Take-Home & Cash Reserve */}
            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              <div className="bg-gradient-to-r from-rose-400/10 to-pink-500/10 border border-rose-400/20 rounded-xl p-5">
                <p className="text-xs text-rose-400 font-medium mb-2">Net Take-Home Projection</p>
                <p className="text-3xl font-bold text-white heading-font">
                  {fmtCurrency(results.netTakeHome)}
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  {fmtCurrency(results.netTakeHome / 12)}/month after tax, super, and expenses
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                <p className="text-xs text-slate-500 font-medium mb-2">Cash Reserve Target</p>
                <p className="text-3xl font-bold text-white heading-font">
                  {fmtCurrency(results.cashReserveTarget)}
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  3-month runway ({fmtCurrency(setup.monthlyFixedExpenses)}/month x 3)
                </p>
              </div>
            </div>
          </div>

          {/* Billable Hours Breakdown */}
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white heading-font mb-6">
              Billable Hours Breakdown
            </h3>

            <div className="bg-white/5 rounded-xl overflow-hidden">
              <div className="grid grid-cols-3 gap-0 text-xs font-medium text-slate-500 px-4 py-3 border-b border-white/10">
                <span>Period</span>
                <span className="text-center">Revenue Needed</span>
                <span className="text-right">Billable Hours</span>
              </div>
              <div className="grid grid-cols-3 gap-0 px-4 py-3 border-b border-white/[0.05]">
                <span className="text-sm text-slate-300">Annual</span>
                <span className="text-sm font-medium text-white text-center">
                  {fmtCurrency(results.annual)}
                </span>
                <span className="text-sm font-medium text-white text-right">
                  {results.totalBillableHours.toFixed(0)} hrs
                </span>
              </div>
              <div className="grid grid-cols-3 gap-0 px-4 py-3 border-b border-white/[0.05]">
                <span className="text-sm text-slate-300">Monthly</span>
                <span className="text-sm font-medium text-white text-center">
                  {fmtCurrency(results.monthly)}
                </span>
                <span className="text-sm font-medium text-white text-right">
                  {(results.totalBillableHours / 12).toFixed(1)} hrs
                </span>
              </div>
              <div className="grid grid-cols-3 gap-0 px-4 py-3 border-b border-white/[0.05]">
                <span className="text-sm text-slate-300">Weekly</span>
                <span className="text-sm font-medium text-white text-center">
                  {fmtCurrency(results.weekly)}
                </span>
                <span className="text-sm font-medium text-rose-400 text-right">
                  {results.weeklyBillableHours.toFixed(1)} hrs
                </span>
              </div>
              <div className="grid grid-cols-3 gap-0 px-4 py-3 bg-white/5">
                <span className="text-sm text-slate-300">Daily (5-day week)</span>
                <span className="text-sm font-medium text-white text-center">
                  {fmtCurrency(results.dailyBillingTarget)}
                </span>
                <span className="text-sm font-medium text-white text-right">
                  {(results.weeklyBillableHours / 5).toFixed(1)} hrs
                </span>
              </div>
            </div>

            <div className="mt-4 bg-white/[0.04] rounded-xl p-4 text-center">
              <p className="text-sm text-slate-400">
                At{' '}
                <span className="text-white font-medium">
                  {fmtCurrency(setup.averageHourlyRate)}/hour
                </span>
                , you need{' '}
                <span className="text-rose-400 font-bold">
                  {results.weeklyBillableHours.toFixed(1)} billable hours per week
                </span>{' '}
                across {BILLABLE_WEEKS_PER_YEAR} working weeks (accounting for 6 weeks leave/downtime)
              </p>
            </div>
          </div>

          {/* Quarterly Action Items */}
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white heading-font mb-6">
              Quarterly Action Items
            </h3>

            <div className="grid sm:grid-cols-2 gap-4">
              {results.quarterResults.map((q, i) => (
                <div
                  key={i}
                  className="bg-white/[0.04] border border-rose-400/10 rounded-xl p-5"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center text-xs font-bold text-white">
                      {i + 1}
                    </div>
                    <span className="text-sm font-medium text-white">{QUARTER_LABELS[i]}</span>
                    <span className={`text-xs font-medium ${FOCUS_COLORS[q.focus]}`}>
                      {FOCUS_LABELS[q.focus]}
                    </span>
                  </div>
                  <div className="space-y-2">
                    {q.actionItems.map((item, j) => (
                      <div key={j} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-rose-400/60 flex-shrink-0 mt-1.5" />
                        <span className="text-xs text-slate-400">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Copy Report & Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={handleCopy}
              className="bg-gradient-to-r from-rose-400 to-pink-500 text-white font-semibold rounded-xl px-8 py-4 hover:from-rose-300 hover:to-pink-400 transition-all"
            >
              {copied ? 'Copied to Clipboard!' : 'Copy Full Plan Report'}
            </button>
            <button
              onClick={() => {
                setCalculated(false);
                setStep(1);
              }}
              className="px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-slate-300 font-medium hover:bg-white/10 transition-all"
            >
              Start Over
            </button>
          </div>

          {/* Related Tools */}
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white heading-font mb-4">Related Tools</h3>
            <div className="grid sm:grid-cols-3 gap-3">
              <a
                href="/tools/profit-first-calculator"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-rose-400/30 rounded-xl p-4 transition-all group"
              >
                <p className="text-white font-medium text-sm group-hover:text-rose-300 transition-colors">
                  Profit First Calculator
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Allocate revenue into Owner&apos;s Pay, Profit, Tax, and more
                </p>
              </a>
              <a
                href="/tools/revenue-goal-planner"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-rose-400/30 rounded-xl p-4 transition-all group"
              >
                <p className="text-white font-medium text-sm group-hover:text-rose-300 transition-colors">
                  Revenue Goal Planner
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Break annual targets into daily and weekly billing goals
                </p>
              </a>
              <a
                href="/tools/tax-estimator"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-rose-400/30 rounded-xl p-4 transition-all group"
              >
                <p className="text-white font-medium text-sm group-hover:text-rose-300 transition-colors">
                  Freelance Tax Estimator
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Detailed ATO 2025-26 tax bracket calculations
                </p>
              </a>
            </div>
          </div>

          <div className="text-center">
            <p className="text-xs text-slate-500 max-w-2xl mx-auto">
              This planner provides estimates based on ATO 2025-26 individual income tax rates
              and does not account for deductions, offsets, HELP debt, or other individual
              circumstances. Super calculations use the current 11.5% rate. GST calculations
              assume standard 10% rate on all revenue. ATO deadline dates are indicative — always
              verify with ato.gov.au. This is not financial advice. Consult a registered tax
              agent for personalised guidance.
            </p>
          </div>
        </>
      )}
    </div>
  );
}
