'use client';

import { useState, useMemo } from 'react';

/* ---- Types ---- */

type RevenueMode = 'annual' | 'monthly';

type BucketKey = 'ownersPay' | 'profit' | 'tax' | 'opex' | 'super';

interface CurrentAllocations {
  ownersPay: number;
  profit: number;
  tax: number;
  opex: number;
  super: number;
}

interface Inputs {
  revenueMode: RevenueMode;
  revenue: number;
  currentAllocations: CurrentAllocations;
}

interface BucketResult {
  key: BucketKey;
  label: string;
  targetPct: number;
  currentPct: number;
  targetAmount: number;
  currentAmount: number;
  gapPct: number;
  gapAmount: number;
  smallPlatePct: number;
  smallPlateAmount: number;
  color: string;
  bgColor: string;
  borderColor: string;
}

interface QuarterlyDistribution {
  quarter: string;
  profitAccumulated: number;
  distribution: number;
  retained: number;
}

interface Results {
  annualRevenue: number;
  monthlyRevenue: number;
  revenueTier: string;
  buckets: BucketResult[];
  taxBreakdown: {
    incomeTax: number;
    medicareLevy: number;
    totalTax: number;
    effectiveRate: number;
  };
  quarterlyDistributions: QuarterlyDistribution[];
  totalCurrentPct: number;
  totalTargetPct: number;
  recommendations: string[];
}

/* ---- Constants ---- */

const BUCKET_LABELS: Record<BucketKey, string> = {
  ownersPay: "Owner's Pay",
  profit: 'Profit',
  tax: 'Tax (Income + Medicare)',
  opex: 'Operating Expenses',
  super: 'Superannuation',
};

const BUCKET_COLORS: Record<BucketKey, { color: string; bg: string; border: string }> = {
  ownersPay: { color: 'text-green-400', bg: 'bg-green-400', border: 'border-green-400/20' },
  profit: { color: 'text-emerald-400', bg: 'bg-emerald-400', border: 'border-emerald-400/20' },
  tax: { color: 'text-amber-400', bg: 'bg-amber-400', border: 'border-amber-400/20' },
  opex: { color: 'text-slate-300', bg: 'bg-slate-400', border: 'border-slate-400/20' },
  super: { color: 'text-sky-400', bg: 'bg-sky-400', border: 'border-sky-400/20' },
};

const BUCKET_KEYS: BucketKey[] = ['ownersPay', 'profit', 'tax', 'opex', 'super'];

const SUPER_RATE = 0.115; // 11.5%

/* ---- ATO 2025-26 Tax Brackets ---- */

function calculateIncomeTax(taxableIncome: number): number {
  // ATO 2025-26 individual income tax rates
  if (taxableIncome <= 18200) return 0;
  if (taxableIncome <= 45000) return (taxableIncome - 18200) * 0.16;
  if (taxableIncome <= 135000) return 4288 + (taxableIncome - 45000) * 0.30;
  if (taxableIncome <= 190000) return 31288 + (taxableIncome - 135000) * 0.37;
  return 51638 + (taxableIncome - 190000) * 0.45;
}

function calculateMedicareLevy(taxableIncome: number): number {
  // 2% Medicare levy (simplified — ignoring low-income reduction thresholds)
  return taxableIncome * 0.02;
}

function calculateTotalTax(taxableIncome: number): { incomeTax: number; medicareLevy: number; total: number; effectiveRate: number } {
  const incomeTax = calculateIncomeTax(taxableIncome);
  const medicareLevy = calculateMedicareLevy(taxableIncome);
  const total = incomeTax + medicareLevy;
  const effectiveRate = taxableIncome > 0 ? (total / taxableIncome) * 100 : 0;
  return { incomeTax, medicareLevy, total, effectiveRate };
}

/* ---- Target Percentages by Revenue Tier ---- */

function getTargetPercentages(annualRevenue: number): { ownersPay: number; profit: number } {
  if (annualRevenue < 250000) return { ownersPay: 50, profit: 5 };
  if (annualRevenue < 500000) return { ownersPay: 35, profit: 10 };
  return { ownersPay: 20, profit: 15 };
}

function getRevenueTier(annualRevenue: number): string {
  if (annualRevenue < 250000) return 'Under $250K';
  if (annualRevenue < 500000) return '$250K - $500K';
  return 'Over $500K';
}

/* ---- Helpers ---- */

function fmtCurrency(n: number): string {
  return '$' + n.toLocaleString('en-AU', { maximumFractionDigits: 0 });
}

function fmtPct(n: number): string {
  return n.toFixed(1) + '%';
}

function clamp(n: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, n));
}

/* ---- Component ---- */

export default function ProfitFirstCalculator() {
  const [step, setStep] = useState(1);
  const [calculated, setCalculated] = useState(false);
  const [copied, setCopied] = useState(false);

  const [inputs, setInputs] = useState<Inputs>({
    revenueMode: 'annual',
    revenue: 120000,
    currentAllocations: {
      ownersPay: 40,
      profit: 2,
      tax: 15,
      opex: 40,
      super: 3,
    },
  });

  const annualRevenue = inputs.revenueMode === 'annual' ? inputs.revenue : inputs.revenue * 12;

  const updateAllocation = (key: BucketKey, value: number) => {
    setInputs((prev) => ({
      ...prev,
      currentAllocations: {
        ...prev.currentAllocations,
        [key]: clamp(value, 0, 100),
      },
    }));
  };

  const totalCurrentPct = Object.values(inputs.currentAllocations).reduce((a, b) => a + b, 0);

  const results: Results = useMemo(() => {
    const targets = getTargetPercentages(annualRevenue);
    const revenueTier = getRevenueTier(annualRevenue);
    const monthlyRevenue = annualRevenue / 12;

    // Calculate target Owner's Pay amount for tax purposes
    const targetOwnersPayAmount = annualRevenue * (targets.ownersPay / 100);

    // Calculate tax on Owner's Pay
    const taxCalc = calculateTotalTax(targetOwnersPayAmount);

    // Super is 11.5% of Owner's Pay
    const targetSuperPct = targets.ownersPay * SUPER_RATE;
    const targetSuperAmount = targetOwnersPayAmount * SUPER_RATE;

    // Tax as percentage of total revenue
    const targetTaxPct = annualRevenue > 0 ? (taxCalc.total / annualRevenue) * 100 : 0;
    const targetTaxAmount = taxCalc.total;

    // OpEx is the remainder
    const targetOpexPct = Math.max(0, 100 - targets.ownersPay - targets.profit - targetTaxPct - targetSuperPct);
    const targetOpexAmount = annualRevenue * (targetOpexPct / 100);

    // Build bucket results
    const targetPcts: Record<BucketKey, number> = {
      ownersPay: targets.ownersPay,
      profit: targets.profit,
      tax: targetTaxPct,
      opex: targetOpexPct,
      super: targetSuperPct,
    };

    const targetAmounts: Record<BucketKey, number> = {
      ownersPay: targetOwnersPayAmount,
      profit: annualRevenue * (targets.profit / 100),
      tax: targetTaxAmount,
      opex: targetOpexAmount,
      super: targetSuperAmount,
    };

    const buckets: BucketResult[] = BUCKET_KEYS.map((key) => {
      const currentPct = inputs.currentAllocations[key];
      const currentAmount = annualRevenue * (currentPct / 100);
      const targetPct = targetPcts[key];
      const targetAmount = targetAmounts[key];
      const gapPct = targetPct - currentPct;
      const gapAmount = targetAmount - currentAmount;

      // Small plate: shift 1% toward target (or current if already at/past target)
      let smallPlatePct: number;
      if (Math.abs(gapPct) < 1) {
        smallPlatePct = targetPct;
      } else if (gapPct > 0) {
        smallPlatePct = currentPct + 1;
      } else {
        smallPlatePct = currentPct - 1;
      }
      const smallPlateAmount = annualRevenue * (smallPlatePct / 100);

      const colors = BUCKET_COLORS[key];

      return {
        key,
        label: BUCKET_LABELS[key],
        targetPct,
        currentPct,
        targetAmount,
        currentAmount,
        gapPct,
        gapAmount,
        smallPlatePct,
        smallPlateAmount,
        color: colors.color,
        bgColor: colors.bg,
        borderColor: colors.border,
      };
    });

    // Quarterly profit distributions (based on target profit allocation)
    const quarterlyProfit = targetAmounts.profit / 4;
    const quarters: QuarterlyDistribution[] = [
      { quarter: 'Q1 (Jul-Sep)', profitAccumulated: quarterlyProfit, distribution: quarterlyProfit * 0.5, retained: quarterlyProfit * 0.5 },
      { quarter: 'Q2 (Oct-Dec)', profitAccumulated: quarterlyProfit, distribution: quarterlyProfit * 0.5, retained: quarterlyProfit * 0.5 },
      { quarter: 'Q3 (Jan-Mar)', profitAccumulated: quarterlyProfit, distribution: quarterlyProfit * 0.5, retained: quarterlyProfit * 0.5 },
      { quarter: 'Q4 (Apr-Jun)', profitAccumulated: quarterlyProfit, distribution: quarterlyProfit * 0.5, retained: quarterlyProfit * 0.5 },
    ];

    // Total pcts
    const totalTargetPct = BUCKET_KEYS.reduce((sum, k) => sum + targetPcts[k], 0);

    // Recommendations
    const recommendations: string[] = [];

    const ownersPayBucket = buckets.find((b) => b.key === 'ownersPay')!;
    const profitBucket = buckets.find((b) => b.key === 'profit')!;
    const taxBucket = buckets.find((b) => b.key === 'tax')!;
    const opexBucket = buckets.find((b) => b.key === 'opex')!;
    const superBucket = buckets.find((b) => b.key === 'super')!;

    if (taxBucket.currentPct < taxBucket.targetPct - 2) {
      recommendations.push(
        `Your tax allocation of ${fmtPct(taxBucket.currentPct)} is significantly below the estimated ${fmtPct(taxBucket.targetPct)} needed for your income level. Increase your tax set-aside immediately to avoid a surprise tax bill. Based on ATO 2025-26 brackets, you should be setting aside approximately ${fmtCurrency(taxBucket.targetAmount / 12)} per month.`
      );
    }

    if (superBucket.currentPct < superBucket.targetPct - 1) {
      recommendations.push(
        `Your super allocation of ${fmtPct(superBucket.currentPct)} is below the recommended ${fmtPct(superBucket.targetPct)} (11.5% of Owner\'s Pay). While sole trader super is not compulsory, contributing at least 11.5% of your salary gives you the same retirement benefits as employees and is tax-deductible.`
      );
    }

    if (profitBucket.currentPct < 1) {
      recommendations.push(
        'You are not allocating any revenue to profit. Even 1% is better than zero — start building a profit reserve immediately. Take quarterly distributions from this account as a reward for profitability.'
      );
    } else if (profitBucket.currentPct < profitBucket.targetPct) {
      recommendations.push(
        `Your profit allocation of ${fmtPct(profitBucket.currentPct)} is below the target of ${fmtPct(profitBucket.targetPct)} for your revenue tier. Increase by 1% per quarter until you reach the target.`
      );
    }

    if (opexBucket.currentPct > opexBucket.targetPct + 10) {
      recommendations.push(
        `Your operating expenses allocation of ${fmtPct(opexBucket.currentPct)} is significantly above the target of ${fmtPct(opexBucket.targetPct)}. Review your business expenses for subscriptions, tools, and services you may not need. Every 1% reduction in OpEx can be redirected to Owner\'s Pay or Profit.`
      );
    }

    if (ownersPayBucket.currentPct < ownersPayBucket.targetPct - 5) {
      recommendations.push(
        `You are significantly underpaying yourself. Your current Owner\'s Pay allocation of ${fmtPct(ownersPayBucket.currentPct)} translates to ${fmtCurrency(ownersPayBucket.currentAmount)} per year, versus the target of ${fmtCurrency(ownersPayBucket.targetAmount)}. If your business cannot support adequate Owner\'s Pay, focus on increasing revenue or cutting OpEx before adding expenses.`
      );
    }

    if (totalCurrentPct > 105) {
      recommendations.push(
        `Your current allocations total ${fmtPct(totalCurrentPct)}, which is over 100%. This means you are allocating more than you earn — review your percentages to ensure they sum to approximately 100%.`
      );
    } else if (totalCurrentPct < 95) {
      recommendations.push(
        `Your current allocations total ${fmtPct(totalCurrentPct)}, which leaves ${fmtPct(100 - totalCurrentPct)} unallocated. Consider allocating the remainder to Profit or Owner\'s Pay so every dollar has a purpose.`
      );
    }

    if (recommendations.length === 0) {
      recommendations.push(
        'Your allocations are well-aligned with Profit First targets for your revenue tier. Continue making bi-monthly transfers and take your quarterly profit distribution. Review these percentages each quarter as your revenue changes.'
      );
    }

    return {
      annualRevenue,
      monthlyRevenue,
      revenueTier,
      buckets,
      taxBreakdown: {
        incomeTax: taxCalc.incomeTax,
        medicareLevy: taxCalc.medicareLevy,
        totalTax: taxCalc.total,
        effectiveRate: taxCalc.effectiveRate,
      },
      quarterlyDistributions: quarters,
      totalCurrentPct,
      totalTargetPct,
      recommendations,
    };
  }, [inputs, annualRevenue, totalCurrentPct]);

  // Copy report to clipboard
  const generateReport = (): string => {
    const lines: string[] = [];
    lines.push('='.repeat(60));
    lines.push('PROFIT FIRST ALLOCATION REPORT');
    lines.push('='.repeat(60));
    lines.push('');
    lines.push('REVENUE');
    lines.push('-'.repeat(45));
    lines.push(`Annual revenue:    ${fmtCurrency(results.annualRevenue)}`);
    lines.push(`Monthly revenue:   ${fmtCurrency(results.monthlyRevenue)}`);
    lines.push(`Revenue tier:      ${results.revenueTier}`);
    lines.push('');
    lines.push('ALLOCATION BREAKDOWN');
    lines.push('-'.repeat(45));
    lines.push(`${'Account'.padEnd(22)} ${'Current'.padEnd(12)} ${'Target'.padEnd(12)} Gap`);
    lines.push('-'.repeat(55));
    results.buckets.forEach((b) => {
      const current = `${fmtPct(b.currentPct)} (${fmtCurrency(b.currentAmount)})`;
      const target = `${fmtPct(b.targetPct)} (${fmtCurrency(b.targetAmount)})`;
      const gap = b.gapPct >= 0 ? `+${fmtPct(b.gapPct)}` : fmtPct(b.gapPct);
      lines.push(`${b.label.padEnd(22)} ${current.padEnd(22)} ${target.padEnd(22)} ${gap}`);
    });
    lines.push('');
    lines.push('TAX BREAKDOWN (on Owner\'s Pay)');
    lines.push('-'.repeat(45));
    lines.push(`Income tax:        ${fmtCurrency(results.taxBreakdown.incomeTax)}`);
    lines.push(`Medicare levy:     ${fmtCurrency(results.taxBreakdown.medicareLevy)}`);
    lines.push(`Total tax:         ${fmtCurrency(results.taxBreakdown.totalTax)}`);
    lines.push(`Effective rate:    ${fmtPct(results.taxBreakdown.effectiveRate)}`);
    lines.push('');
    lines.push('MONTHLY TRANSFERS');
    lines.push('-'.repeat(45));
    results.buckets.forEach((b) => {
      lines.push(`${b.label.padEnd(22)} ${fmtCurrency(b.targetAmount / 12)}/month`);
    });
    lines.push('');
    lines.push('QUARTERLY PROFIT DISTRIBUTIONS');
    lines.push('-'.repeat(45));
    results.quarterlyDistributions.forEach((q) => {
      lines.push(`${q.quarter}: ${fmtCurrency(q.profitAccumulated)} accumulated | ${fmtCurrency(q.distribution)} distribution | ${fmtCurrency(q.retained)} retained`);
    });
    lines.push('');
    lines.push('SMALL PLATE RECOMMENDATIONS (Next Quarter)');
    lines.push('-'.repeat(45));
    results.buckets.forEach((b) => {
      if (Math.abs(b.gapPct) >= 1) {
        const direction = b.gapPct > 0 ? 'Increase' : 'Decrease';
        lines.push(`${b.label}: ${direction} from ${fmtPct(b.currentPct)} to ${fmtPct(b.smallPlatePct)} (${fmtCurrency(b.smallPlateAmount / 12)}/month)`);
      }
    });
    lines.push('');
    lines.push('RECOMMENDATIONS');
    lines.push('-'.repeat(45));
    results.recommendations.forEach((r, i) => {
      lines.push(`${i + 1}. ${r}`);
    });
    lines.push('');
    lines.push('-'.repeat(60));
    lines.push('Generated by InvoiceFlow Profit First Calculator');
    lines.push('https://www.invoiceflow.au/tools/profit-first-calculator');
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
    'w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-slate-600 focus:outline-none focus:border-green-400/50 focus:ring-1 focus:ring-green-400/25 transition-all text-sm';
  const labelClass = 'block text-sm font-medium text-slate-300 mb-1.5';

  // Build donut chart segments
  const donutSegments = useMemo(() => {
    const segments: { key: BucketKey; pct: number; color: string; label: string }[] = [];
    const bucketColors: Record<BucketKey, string> = {
      ownersPay: '#4ade80',
      profit: '#34d399',
      tax: '#fbbf24',
      opex: '#94a3b8',
      super: '#38bdf8',
    };

    results.buckets.forEach((b) => {
      if (b.targetPct > 0) {
        segments.push({ key: b.key, pct: b.targetPct, color: bucketColors[b.key], label: b.label });
      }
    });

    return segments;
  }, [results.buckets]);

  const donutGradient = useMemo(() => {
    let cumulative = 0;
    const stops: string[] = [];
    donutSegments.forEach((seg) => {
      stops.push(`${seg.color} ${cumulative}%`);
      cumulative += seg.pct;
      stops.push(`${seg.color} ${cumulative}%`);
    });
    // Fill remaining with transparent if total < 100
    if (cumulative < 100) {
      stops.push(`rgba(255,255,255,0.05) ${cumulative}%`);
      stops.push(`rgba(255,255,255,0.05) 100%`);
    }
    return `conic-gradient(${stops.join(', ')})`;
  }, [donutSegments]);

  return (
    <div className="space-y-8">
      {/* Step Indicator */}
      <div className="flex items-center justify-center gap-2 sm:gap-4 mb-4">
        {[1, 2, 3].map((s) => (
          <button
            key={s}
            onClick={() => { if (s < 3 || calculated) setStep(s); }}
            className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
              step === s
                ? 'bg-gradient-to-r from-green-400/20 to-emerald-500/20 border border-green-400/40 text-green-300'
                : s < step || (s === 3 && calculated)
                  ? 'bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10'
                  : 'bg-white/[0.02] border border-white/[0.05] text-slate-600 cursor-default'
            }`}
          >
            <div className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${
              step === s
                ? 'bg-green-400/30 text-green-300'
                : s < step || (s === 3 && calculated)
                  ? 'bg-white/10 text-slate-400'
                  : 'bg-white/5 text-slate-600'
            }`}>
              {s < step ? '\u2713' : s}
            </div>
            <span className="hidden sm:inline">
              {s === 1 ? 'Revenue' : s === 2 ? 'Current Allocations' : 'Results'}
            </span>
          </button>
        ))}
      </div>

      {/* Step 1: Revenue */}
      {step === 1 && (
        <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
          <h3 className="text-lg font-bold text-white heading-font mb-2">Your Revenue</h3>
          <p className="text-sm text-slate-400 mb-6">
            Enter your total business revenue (GST-exclusive). This is the top-line income before any expenses or allocations.
          </p>

          {/* Annual / Monthly Toggle */}
          <div className="flex items-center gap-2 mb-6">
            <button
              onClick={() => setInputs((prev) => ({
                ...prev,
                revenueMode: 'annual',
                revenue: prev.revenueMode === 'monthly' ? prev.revenue * 12 : prev.revenue,
              }))}
              className={`px-5 py-3 rounded-xl text-sm font-medium transition-all ${
                inputs.revenueMode === 'annual'
                  ? 'bg-gradient-to-r from-green-400/20 to-emerald-500/20 border border-green-400/40 text-green-300'
                  : 'bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
              }`}
            >
              Annual Revenue
            </button>
            <button
              onClick={() => setInputs((prev) => ({
                ...prev,
                revenueMode: 'monthly',
                revenue: prev.revenueMode === 'annual' ? Math.round(prev.revenue / 12) : prev.revenue,
              }))}
              className={`px-5 py-3 rounded-xl text-sm font-medium transition-all ${
                inputs.revenueMode === 'monthly'
                  ? 'bg-gradient-to-r from-green-400/20 to-emerald-500/20 border border-green-400/40 text-green-300'
                  : 'bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
              }`}
            >
              Monthly Revenue
            </button>
          </div>

          <div>
            <label className={labelClass}>
              {inputs.revenueMode === 'annual' ? 'Annual' : 'Monthly'} Revenue (AUD, GST-exclusive)
            </label>
            <div className="relative max-w-md">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm">$</span>
              <input
                type="number"
                value={inputs.revenue}
                onChange={(e) => setInputs((prev) => ({ ...prev, revenue: Math.max(0, Number(e.target.value)) }))}
                className={`${inputClass} pl-8 text-lg`}
                min={0}
                step={inputs.revenueMode === 'annual' ? 5000 : 500}
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm">
                /{inputs.revenueMode === 'annual' ? 'year' : 'month'}
              </span>
            </div>
            <div className="mt-2 flex gap-2 flex-wrap">
              {(inputs.revenueMode === 'annual'
                ? [60000, 80000, 100000, 120000, 150000, 200000, 300000]
                : [5000, 7000, 8500, 10000, 12500, 17000, 25000]
              ).map((val) => (
                <button
                  key={val}
                  onClick={() => setInputs((prev) => ({ ...prev, revenue: val }))}
                  className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                    inputs.revenue === val
                      ? 'bg-green-400/20 border border-green-400/40 text-green-300'
                      : 'bg-white/5 border border-white/10 text-slate-500 hover:text-white'
                  }`}
                >
                  {fmtCurrency(val)}
                </button>
              ))}
            </div>
          </div>

          {/* Revenue Summary */}
          <div className="mt-6 bg-white/5 rounded-xl p-4 flex items-center justify-between">
            <div>
              <p className="text-xs text-slate-500">Annual Revenue</p>
              <p className="text-lg font-bold text-white">{fmtCurrency(annualRevenue)}</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-slate-500">Revenue Tier</p>
              <p className="text-sm font-medium text-green-400">{getRevenueTier(annualRevenue)}</p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={() => setStep(2)}
              className="bg-gradient-to-r from-green-400 to-emerald-500 text-white font-semibold rounded-xl px-10 py-4 hover:from-green-300 hover:to-emerald-400 transition-all text-lg shadow-lg shadow-green-500/20"
            >
              Next: Current Allocations
            </button>
          </div>
        </div>
      )}

      {/* Step 2: Current Allocations */}
      {step === 2 && (
        <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
          <h3 className="text-lg font-bold text-white heading-font mb-2">Your Current Allocations</h3>
          <p className="text-sm text-slate-400 mb-6">
            Estimate what percentage of your revenue currently goes to each bucket. This does not need
            to be exact — a rough assessment helps identify the gap between where you are and where
            the Profit First targets say you should be.
          </p>

          <div className="space-y-5">
            {BUCKET_KEYS.map((key) => {
              const colors = BUCKET_COLORS[key];
              const value = inputs.currentAllocations[key];
              const amount = annualRevenue * (value / 100);
              const monthlyAmount = amount / 12;

              return (
                <div key={key} className={`bg-white/[0.04] border ${colors.border} rounded-xl p-5`}>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${colors.bg}`} />
                      <label className="text-sm font-medium text-white">{BUCKET_LABELS[key]}</label>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-semibold text-white">{fmtCurrency(monthlyAmount)}/mo</span>
                      <span className="text-xs text-slate-500">{fmtCurrency(amount)}/yr</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <input
                      type="range"
                      min={0}
                      max={80}
                      step={1}
                      value={value}
                      onChange={(e) => updateAllocation(key, Number(e.target.value))}
                      className="flex-1 h-2 bg-white/10 rounded-full appearance-none cursor-pointer accent-green-400"
                      style={{
                        background: `linear-gradient(to right, ${key === 'ownersPay' ? '#4ade80' : key === 'profit' ? '#34d399' : key === 'tax' ? '#fbbf24' : key === 'super' ? '#38bdf8' : '#94a3b8'} 0%, ${key === 'ownersPay' ? '#4ade80' : key === 'profit' ? '#34d399' : key === 'tax' ? '#fbbf24' : key === 'super' ? '#38bdf8' : '#94a3b8'} ${value * 100 / 80}%, rgba(255,255,255,0.1) ${value * 100 / 80}%, rgba(255,255,255,0.1) 100%)`,
                      }}
                    />
                    <div className="relative w-20">
                      <input
                        type="number"
                        value={value}
                        onChange={(e) => updateAllocation(key, Number(e.target.value))}
                        className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm text-center focus:outline-none focus:border-green-400/50"
                        min={0}
                        max={100}
                      />
                      <span className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-500 text-xs">%</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Total Indicator */}
          <div className={`mt-6 rounded-xl p-4 flex items-center justify-between ${
            Math.abs(totalCurrentPct - 100) <= 5
              ? 'bg-green-400/10 border border-green-400/20'
              : 'bg-amber-400/10 border border-amber-400/20'
          }`}>
            <span className={`text-sm font-medium ${
              Math.abs(totalCurrentPct - 100) <= 5 ? 'text-green-400' : 'text-amber-400'
            }`}>
              Total Allocation
            </span>
            <span className={`text-lg font-bold ${
              Math.abs(totalCurrentPct - 100) <= 5 ? 'text-green-400' : 'text-amber-400'
            }`}>
              {fmtPct(totalCurrentPct)}
            </span>
          </div>
          {Math.abs(totalCurrentPct - 100) > 5 && (
            <p className="text-xs text-amber-400/70 mt-2 text-center">
              Your allocations should total close to 100%. Adjust the sliders until they balance out.
            </p>
          )}

          <div className="mt-8 flex items-center justify-center gap-3">
            <button
              onClick={() => setStep(1)}
              className="px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-slate-300 font-medium hover:bg-white/10 transition-all"
            >
              Back
            </button>
            <button
              onClick={handleCalculate}
              className="bg-gradient-to-r from-green-400 to-emerald-500 text-white font-semibold rounded-xl px-10 py-4 hover:from-green-300 hover:to-emerald-400 transition-all text-lg shadow-lg shadow-green-500/20"
            >
              Calculate Allocations
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Results */}
      {step === 3 && calculated && (
        <>
          {/* Revenue Overview */}
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white heading-font mb-6 text-center">
              Profit First Allocation Plan
            </h3>

            <div className="text-center mb-8">
              <p className="text-sm text-slate-400 mb-2">Annual Revenue</p>
              <p className="text-5xl font-bold text-white heading-font">{fmtCurrency(results.annualRevenue)}</p>
              <p className="text-sm text-slate-500 mt-2">
                {fmtCurrency(results.monthlyRevenue)}/month | {results.revenueTier} tier
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="bg-white/5 rounded-xl p-4 text-center">
                <p className="text-xs text-slate-500 mb-1">Owner&apos;s Pay</p>
                <p className="text-xl font-bold text-green-400">{fmtCurrency(results.buckets[0].targetAmount / 12)}</p>
                <p className="text-xs text-slate-600 mt-1">per month</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 text-center">
                <p className="text-xs text-slate-500 mb-1">Profit Reserve</p>
                <p className="text-xl font-bold text-emerald-400">{fmtCurrency(results.buckets[1].targetAmount / 12)}</p>
                <p className="text-xs text-slate-600 mt-1">per month</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 text-center">
                <p className="text-xs text-slate-500 mb-1">Tax Set-Aside</p>
                <p className="text-xl font-bold text-amber-400">{fmtCurrency(results.buckets[2].targetAmount / 12)}</p>
                <p className="text-xs text-slate-600 mt-1">per month</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 text-center">
                <p className="text-xs text-slate-500 mb-1">Effective Tax Rate</p>
                <p className="text-xl font-bold text-amber-400">{fmtPct(results.taxBreakdown.effectiveRate)}</p>
                <p className="text-xs text-slate-600 mt-1">on owner&apos;s pay</p>
              </div>
            </div>
          </div>

          {/* Donut Chart + Allocation Table */}
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white heading-font mb-6">Target Allocation</h3>

            <div className="flex flex-col sm:flex-row items-center gap-8">
              {/* CSS Donut Chart */}
              <div className="relative w-48 h-48 flex-shrink-0">
                <div
                  className="w-48 h-48 rounded-full"
                  style={{ background: donutGradient }}
                />
                <div className="absolute inset-6 bg-[#0B1120] rounded-full flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-xl font-bold text-white">{fmtCurrency(results.monthlyRevenue)}</p>
                    <p className="text-xs text-slate-500">per month</p>
                  </div>
                </div>
              </div>

              {/* Legend */}
              <div className="flex-1 space-y-3 w-full">
                {results.buckets.map((b) => (
                  <div key={b.key} className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className={`w-3 h-3 rounded-sm ${b.bgColor} flex-shrink-0`} />
                      <span className="text-sm text-slate-300">{b.label}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-medium text-white">{fmtCurrency(b.targetAmount / 12)}/mo</span>
                      <span className="text-xs text-slate-500 w-12 text-right">{fmtPct(b.targetPct)}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Gap Analysis */}
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white heading-font mb-6">Gap Analysis: Current vs Target</h3>

            <div className="space-y-4">
              {results.buckets.map((b) => {
                const isOver = b.gapPct < 0;
                const isUnder = b.gapPct > 0;
                const isAligned = Math.abs(b.gapPct) < 1;

                return (
                  <div key={b.key} className="bg-white/[0.04] rounded-xl p-5">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${b.bgColor}`} />
                        <span className="text-sm font-medium text-white">{b.label}</span>
                      </div>
                      {isAligned ? (
                        <span className="px-2 py-0.5 bg-green-400/10 border border-green-400/20 rounded-full text-xs text-green-400 font-medium">
                          Aligned
                        </span>
                      ) : isUnder ? (
                        <span className="px-2 py-0.5 bg-amber-400/10 border border-amber-400/20 rounded-full text-xs text-amber-400 font-medium">
                          Under by {fmtPct(Math.abs(b.gapPct))}
                        </span>
                      ) : (
                        <span className="px-2 py-0.5 bg-sky-400/10 border border-sky-400/20 rounded-full text-xs text-sky-400 font-medium">
                          Over by {fmtPct(Math.abs(b.gapPct))}
                        </span>
                      )}
                    </div>

                    {/* Comparison Bars */}
                    <div className="space-y-2">
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs text-slate-500">Current: {fmtPct(b.currentPct)}</span>
                          <span className="text-xs text-slate-400">{fmtCurrency(b.currentAmount / 12)}/mo</span>
                        </div>
                        <div className="h-3 bg-white/5 rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full bg-white/20 transition-all duration-700"
                            style={{ width: `${Math.min(b.currentPct, 100)}%` }}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs text-slate-500">Target: {fmtPct(b.targetPct)}</span>
                          <span className="text-xs text-slate-400">{fmtCurrency(b.targetAmount / 12)}/mo</span>
                        </div>
                        <div className="h-3 bg-white/5 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full transition-all duration-700 ${b.bgColor}`}
                            style={{ width: `${Math.min(b.targetPct, 100)}%`, opacity: 0.7 }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Gap Amount */}
                    {!isAligned && (
                      <div className="mt-3 flex items-center justify-between text-xs">
                        <span className="text-slate-500">
                          Gap: {b.gapAmount >= 0 ? '+' : ''}{fmtCurrency(b.gapAmount)}/year ({b.gapAmount >= 0 ? '+' : ''}{fmtCurrency(b.gapAmount / 12)}/month)
                        </span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Small Plate Recommendations */}
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white heading-font mb-2">Small Plate: Next Quarter Adjustments</h3>
            <p className="text-sm text-slate-400 mb-6">
              Instead of jumping straight to target percentages, shift by 1% per quarter. Here is your
              recommended allocation for next quarter.
            </p>

            <div className="grid sm:grid-cols-2 gap-3">
              {results.buckets.map((b) => {
                const noChange = Math.abs(b.gapPct) < 1;
                const direction = b.gapPct > 0 ? 'Increase' : 'Decrease';

                return (
                  <div key={b.key} className={`rounded-xl p-4 border ${
                    noChange
                      ? 'bg-white/[0.03] border-white/[0.06]'
                      : b.gapPct > 0
                        ? 'bg-green-400/5 border-green-400/15'
                        : 'bg-sky-400/5 border-sky-400/15'
                  }`}>
                    <div className="flex items-center gap-2 mb-2">
                      <div className={`w-2.5 h-2.5 rounded-full ${b.bgColor}`} />
                      <span className="text-sm font-medium text-white">{b.label}</span>
                    </div>
                    {noChange ? (
                      <p className="text-xs text-slate-500">Already aligned at {fmtPct(b.currentPct)}</p>
                    ) : (
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-slate-500">{fmtPct(b.currentPct)}</span>
                          <span className={`text-xs font-medium ${b.gapPct > 0 ? 'text-green-400' : 'text-sky-400'}`}>
                            &rarr; {fmtPct(b.smallPlatePct)}
                          </span>
                        </div>
                        <p className="text-xs text-slate-500">
                          {direction} to {fmtCurrency(b.smallPlateAmount / 12)}/month
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-4 bg-gradient-to-r from-green-400/10 to-emerald-500/10 border border-green-400/20 rounded-xl p-4">
              <p className="text-xs text-green-400">
                Apply these adjusted percentages for one quarter, then reassess. It may take 4-8 quarters
                to reach your full target allocations. Slow, sustainable shifts prevent cash flow crises.
              </p>
            </div>
          </div>

          {/* Tax Breakdown */}
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white heading-font mb-6">Tax Breakdown (ATO 2025-26)</h3>

            <div className="bg-white/5 rounded-xl p-5 mb-4">
              <p className="text-xs text-slate-500 mb-2">Tax calculated on Owner&apos;s Pay of {fmtCurrency(results.buckets[0].targetAmount)}</p>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-300">Income Tax</span>
                  <span className="text-sm font-medium text-white">{fmtCurrency(results.taxBreakdown.incomeTax)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-300">Medicare Levy (2%)</span>
                  <span className="text-sm font-medium text-white">{fmtCurrency(results.taxBreakdown.medicareLevy)}</span>
                </div>
                <div className="border-t border-white/10 pt-3 flex items-center justify-between">
                  <span className="text-sm font-medium text-white">Total Tax</span>
                  <span className="text-lg font-bold text-amber-400">{fmtCurrency(results.taxBreakdown.totalTax)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-500">Effective Tax Rate</span>
                  <span className="text-sm font-medium text-amber-400">{fmtPct(results.taxBreakdown.effectiveRate)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-500">Monthly Tax Set-Aside</span>
                  <span className="text-sm font-medium text-white">{fmtCurrency(results.taxBreakdown.totalTax / 12)}</span>
                </div>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl p-5">
              <p className="text-xs text-slate-500 mb-2">Superannuation (11.5% of Owner&apos;s Pay)</p>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-300">Annual Super Contribution</span>
                  <span className="text-sm font-medium text-sky-400">{fmtCurrency(results.buckets[4].targetAmount)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-300">Monthly Super Set-Aside</span>
                  <span className="text-sm font-medium text-sky-400">{fmtCurrency(results.buckets[4].targetAmount / 12)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-300">Quarterly Super Payment</span>
                  <span className="text-sm font-medium text-sky-400">{fmtCurrency(results.buckets[4].targetAmount / 4)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quarterly Profit Distributions */}
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white heading-font mb-2">Quarterly Profit Distribution Schedule</h3>
            <p className="text-sm text-slate-400 mb-6">
              Take 50% of your Profit account as a personal reward each quarter. The other 50% stays
              as retained profit, building your cash reserves.
            </p>

            <div className="grid sm:grid-cols-2 gap-3">
              {results.quarterlyDistributions.map((q) => (
                <div key={q.quarter} className="bg-white/[0.04] border border-emerald-400/10 rounded-xl p-4">
                  <p className="text-sm font-medium text-white mb-3">{q.quarter}</p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-500">Profit Accumulated</span>
                      <span className="text-sm font-medium text-emerald-400">{fmtCurrency(q.profitAccumulated)}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-500">Your Distribution (50%)</span>
                      <span className="text-sm font-bold text-white">{fmtCurrency(q.distribution)}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-500">Retained (50%)</span>
                      <span className="text-sm font-medium text-slate-400">{fmtCurrency(q.retained)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 bg-white/5 rounded-xl p-4 text-center">
              <p className="text-sm text-slate-400">
                Annual profit distributions: <span className="text-emerald-400 font-bold">{fmtCurrency(results.buckets[1].targetAmount * 0.5)}</span>
                {' | '}Annual retained profit: <span className="text-white font-medium">{fmtCurrency(results.buckets[1].targetAmount * 0.5)}</span>
              </p>
            </div>
          </div>

          {/* Recommendations */}
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white heading-font mb-6">Recommendations</h3>
            <div className="space-y-3">
              {results.recommendations.map((rec, i) => (
                <div key={i} className="flex items-start gap-3 bg-white/5 rounded-xl p-4">
                  <div className="w-6 h-6 rounded-full bg-green-400/20 border border-green-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-green-400 text-xs font-bold">{i + 1}</span>
                  </div>
                  <p className="text-sm text-slate-300">{rec}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Monthly Transfer Schedule */}
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white heading-font mb-2">Bi-Monthly Transfer Schedule</h3>
            <p className="text-sm text-slate-400 mb-6">
              On the 10th and 25th of each month, transfer half these amounts from your Income account
              to each bucket account.
            </p>

            <div className="bg-white/5 rounded-xl overflow-hidden">
              <div className="grid grid-cols-3 gap-0 text-xs font-medium text-slate-500 px-4 py-3 border-b border-white/10">
                <span>Account</span>
                <span className="text-center">Per Transfer (2x/month)</span>
                <span className="text-right">Monthly Total</span>
              </div>
              {results.buckets.map((b) => (
                <div key={b.key} className="grid grid-cols-3 gap-0 px-4 py-3 border-b border-white/[0.05] last:border-b-0">
                  <div className="flex items-center gap-2">
                    <div className={`w-2.5 h-2.5 rounded-full ${b.bgColor}`} />
                    <span className="text-sm text-slate-300">{b.label}</span>
                  </div>
                  <span className="text-sm font-medium text-white text-center">{fmtCurrency(b.targetAmount / 24)}</span>
                  <span className="text-sm font-medium text-white text-right">{fmtCurrency(b.targetAmount / 12)}</span>
                </div>
              ))}
              <div className="grid grid-cols-3 gap-0 px-4 py-3 bg-white/5">
                <span className="text-sm font-medium text-white">Total</span>
                <span className="text-sm font-bold text-white text-center">{fmtCurrency(results.annualRevenue / 24)}</span>
                <span className="text-sm font-bold text-white text-right">{fmtCurrency(results.monthlyRevenue)}</span>
              </div>
            </div>
          </div>

          {/* Copy Report & Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={handleCopy}
              className="bg-gradient-to-r from-green-400 to-emerald-500 text-white font-semibold rounded-xl px-8 py-4 hover:from-green-300 hover:to-emerald-400 transition-all"
            >
              {copied ? 'Copied to Clipboard!' : 'Copy Profit First Report'}
            </button>
            <button
              onClick={() => { setCalculated(false); setStep(1); }}
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
                href="/tools/pay-yourself-calculator"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-green-400/30 rounded-xl p-4 transition-all group"
              >
                <p className="text-white font-medium text-sm group-hover:text-green-300 transition-colors">
                  Pay Yourself Calculator
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Calculate how much to pay yourself as a sole trader
                </p>
              </a>
              <a
                href="/tools/tax-calculator"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-green-400/30 rounded-xl p-4 transition-all group"
              >
                <p className="text-white font-medium text-sm group-hover:text-green-300 transition-colors">
                  Freelance Tax Calculator
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Calculate your income tax, Medicare, and super obligations
                </p>
              </a>
              <a
                href="/tools/budget-calculator"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-green-400/30 rounded-xl p-4 transition-all group"
              >
                <p className="text-white font-medium text-sm group-hover:text-green-300 transition-colors">
                  Marketing Budget Calculator
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Plan your marketing spend based on revenue goals
                </p>
              </a>
            </div>
          </div>

          <div className="text-center">
            <p className="text-xs text-slate-500 max-w-2xl mx-auto">
              This calculator provides estimates based on the Profit First methodology adapted for Australian
              sole traders. Tax calculations use ATO 2025-26 individual income tax rates and do not account
              for deductions, offsets, HELP debt, or other individual circumstances. Super calculations use
              the current 11.5% rate. Consult a registered tax agent for personalised advice. This is not
              financial advice.
            </p>
          </div>
        </>
      )}
    </div>
  );
}
