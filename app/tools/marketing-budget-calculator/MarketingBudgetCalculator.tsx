'use client';

import { useState, useMemo } from 'react';

/* ---- Types ---- */

type BusinessStage = 'startup' | 'growth' | 'established' | 'scaling';
type GrowthTarget = 10 | 20 | 30 | 50;

interface Channel {
  id: string;
  name: string;
  defaultPct: number;
  roiMin: number;
  roiMax: number;
  avgAcquisitionCost: number;
  description: string;
}

interface Inputs {
  annualRevenue: number;
  growthTarget: GrowthTarget;
  businessStage: BusinessStage;
  activeChannels: Record<string, boolean>;
}

interface ChannelAllocation {
  id: string;
  name: string;
  pct: number;
  annualAmount: number;
  monthlyAmount: number;
  roiMin: number;
  roiMax: number;
  estimatedNewClientsMonth: number;
  avgAcquisitionCost: number;
}

interface Results {
  budgetPctMin: number;
  budgetPctMax: number;
  recommendedBudgetPct: number;
  annualBudget: number;
  monthlyBudget: number;
  weeklyBudget: number;
  channelAllocations: ChannelAllocation[];
  totalEstimatedNewClientsMonth: number;
  revenueToBreakEven: number;
  targetRevenue: number;
  revenueGrowthNeeded: number;
  recommendations: string[];
  timeVsMoneyRatio: { time: number; money: number };
  stageLabel: string;
}

/* ---- Constants ---- */

const CHANNELS: Channel[] = [
  {
    id: 'seo',
    name: 'SEO & Content',
    defaultPct: 25,
    roiMin: 5,
    roiMax: 12,
    avgAcquisitionCost: 200,
    description: 'Blog posts, SEO optimisation, case studies, lead magnets',
  },
  {
    id: 'social',
    name: 'Social Media Marketing',
    defaultPct: 15,
    roiMin: 2,
    roiMax: 5,
    avgAcquisitionCost: 350,
    description: 'LinkedIn, Instagram, content creation, community building',
  },
  {
    id: 'paid',
    name: 'Paid Advertising (Google/Meta)',
    defaultPct: 20,
    roiMin: 2,
    roiMax: 4,
    avgAcquisitionCost: 450,
    description: 'Google Ads, Facebook/Instagram Ads, retargeting campaigns',
  },
  {
    id: 'email',
    name: 'Email Marketing',
    defaultPct: 10,
    roiMin: 36,
    roiMax: 42,
    avgAcquisitionCost: 100,
    description: 'Newsletter, drip campaigns, cold outreach sequences',
  },
  {
    id: 'networking',
    name: 'Networking & Events',
    defaultPct: 15,
    roiMin: 3,
    roiMax: 8,
    avgAcquisitionCost: 300,
    description: 'Conferences, meetups, co-working events, industry groups',
  },
  {
    id: 'referrals',
    name: 'Referral Program',
    defaultPct: 10,
    roiMin: 8,
    roiMax: 15,
    avgAcquisitionCost: 150,
    description: 'Client referral incentives, partner commissions, testimonials',
  },
  {
    id: 'website',
    name: 'Portfolio / Website',
    defaultPct: 5,
    roiMin: 4,
    roiMax: 10,
    avgAcquisitionCost: 250,
    description: 'Portfolio updates, hosting, domain, design refreshes',
  },
];

const STAGE_CONFIG: Record<BusinessStage, { label: string; min: number; max: number; description: string }> = {
  startup: { label: 'Startup (< $50K)', min: 15, max: 20, description: 'Building awareness and first clients' },
  growth: { label: 'Growth ($50K–$150K)', min: 10, max: 15, description: 'Scaling pipeline and brand recognition' },
  established: { label: 'Established ($150K–$300K)', min: 5, max: 10, description: 'Maintaining position and optimising ROI' },
  scaling: { label: 'Scaling ($300K+)', min: 10, max: 15, description: 'Expanding services and building a team' },
};

/* ---- Helpers ---- */

function fmt(n: number): string {
  return n.toLocaleString('en-AU', { maximumFractionDigits: 0 });
}

function fmtCurrency(n: number): string {
  return '$' + n.toLocaleString('en-AU', { maximumFractionDigits: 0 });
}

function fmtPct(n: number): string {
  return n.toFixed(1) + '%';
}

/* ---- Component ---- */

export default function MarketingBudgetCalculator() {
  const [step, setStep] = useState(1);
  const [copied, setCopied] = useState(false);

  const [inputs, setInputs] = useState<Inputs>({
    annualRevenue: 120000,
    growthTarget: 20,
    businessStage: 'growth',
    activeChannels: {
      seo: true,
      social: true,
      paid: true,
      email: true,
      networking: true,
      referrals: true,
      website: true,
    },
  });

  const updateField = (field: keyof Inputs, value: number | GrowthTarget | BusinessStage) => {
    setInputs((prev) => ({ ...prev, [field]: value }));
  };

  const toggleChannel = (channelId: string) => {
    setInputs((prev) => ({
      ...prev,
      activeChannels: {
        ...prev.activeChannels,
        [channelId]: !prev.activeChannels[channelId],
      },
    }));
  };

  const results: Results = useMemo(() => {
    const { annualRevenue, growthTarget, businessStage, activeChannels } = inputs;
    const stageConfig = STAGE_CONFIG[businessStage];

    // Budget percentages
    const budgetPctMin = stageConfig.min;
    const budgetPctMax = stageConfig.max;
    const recommendedBudgetPct = (budgetPctMin + budgetPctMax) / 2;

    // Total budget
    const annualBudget = annualRevenue * (recommendedBudgetPct / 100);
    const monthlyBudget = annualBudget / 12;
    const weeklyBudget = annualBudget / 52;

    // Active channels and their allocations
    const activeChannelList = CHANNELS.filter((ch) => activeChannels[ch.id]);
    const totalDefaultPct = activeChannelList.reduce((sum, ch) => sum + ch.defaultPct, 0);

    const channelAllocations: ChannelAllocation[] = activeChannelList.map((ch) => {
      const normalizedPct = totalDefaultPct > 0 ? (ch.defaultPct / totalDefaultPct) * 100 : 0;
      const channelAnnual = annualBudget * (normalizedPct / 100);
      const channelMonthly = channelAnnual / 12;
      const estimatedNewClientsMonth = ch.avgAcquisitionCost > 0
        ? Math.max(0, Math.round((channelMonthly / ch.avgAcquisitionCost) * 10) / 10)
        : 0;

      return {
        id: ch.id,
        name: ch.name,
        pct: normalizedPct,
        annualAmount: channelAnnual,
        monthlyAmount: channelMonthly,
        roiMin: ch.roiMin,
        roiMax: ch.roiMax,
        estimatedNewClientsMonth,
        avgAcquisitionCost: ch.avgAcquisitionCost,
      };
    });

    const totalEstimatedNewClientsMonth = channelAllocations.reduce(
      (sum, ch) => sum + ch.estimatedNewClientsMonth,
      0
    );

    // Revenue targets
    const targetRevenue = annualRevenue * (1 + growthTarget / 100);
    const revenueGrowthNeeded = targetRevenue - annualRevenue;

    // Break-even: revenue needed to cover marketing spend
    const avgRoi = channelAllocations.length > 0
      ? channelAllocations.reduce((sum, ch) => sum + (ch.roiMin + ch.roiMax) / 2, 0) / channelAllocations.length
      : 1;
    const revenueToBreakEven = avgRoi > 0 ? annualBudget / avgRoi : annualBudget;

    // Time vs money allocation by stage
    let timeVsMoneyRatio: { time: number; money: number };
    switch (businessStage) {
      case 'startup':
        timeVsMoneyRatio = { time: 70, money: 30 };
        break;
      case 'growth':
        timeVsMoneyRatio = { time: 50, money: 50 };
        break;
      case 'established':
        timeVsMoneyRatio = { time: 30, money: 70 };
        break;
      case 'scaling':
        timeVsMoneyRatio = { time: 20, money: 80 };
        break;
    }

    // Recommendations
    const recommendations: string[] = [];

    if (businessStage === 'startup') {
      recommendations.push('At the startup stage, prioritise free and low-cost channels like SEO, content marketing, and networking. Your time is your biggest marketing asset right now.');
      recommendations.push('Focus on building a strong portfolio and collecting testimonials. Social proof drives more conversions than paid ads at this stage.');
      if (activeChannels.paid) {
        recommendations.push('Consider starting with a small paid ads budget ($200-500/month) focused on retargeting website visitors rather than broad campaigns.');
      }
    } else if (businessStage === 'growth') {
      recommendations.push('You are in the sweet spot for marketing investment. Double down on channels that already generate leads and test one new channel per quarter.');
      recommendations.push('Start building an email list if you have not already. Email marketing has the highest ROI of any channel for freelancers and costs almost nothing to maintain.');
      if (growthTarget >= 30) {
        recommendations.push(`A ${growthTarget}% growth target is ambitious. Consider increasing your marketing budget to ${budgetPctMax}% of revenue and focusing on the 2-3 channels with the best historical ROI.`);
      }
    } else if (businessStage === 'established') {
      recommendations.push('At your revenue level, focus on marketing efficiency rather than volume. Track cost-per-acquisition for each channel and cut underperformers ruthlessly.');
      recommendations.push('Invest in referral programs and strategic partnerships. At this stage, word-of-mouth and referrals should account for 40-60% of new business.');
      recommendations.push('Consider hiring a part-time marketing assistant or virtual assistant to handle content creation and social media, freeing you to focus on high-value client work.');
    } else {
      recommendations.push('At the scaling stage, your marketing should run like a system. Automate lead nurturing, create content pipelines, and delegate execution to contractors or staff.');
      recommendations.push('Invest heavily in brand positioning. At $300K+ revenue, competing on price is losing strategy. Build authority through speaking, publishing, and high-profile case studies.');
      recommendations.push('Consider allocating 5-10% of your marketing budget to experimental channels like podcast sponsorships, webinars, or industry report sponsorships.');
    }

    // Channel-specific recommendations
    if (activeChannels.seo && !activeChannels.email) {
      recommendations.push('You are investing in SEO but not email marketing. Add email to capture and nurture the traffic your content generates — otherwise you are leaving leads on the table.');
    }

    if (activeChannels.paid && !activeChannels.seo) {
      recommendations.push('Paid ads without SEO means you are renting attention instead of owning it. SEO compounds over time and reduces your dependence on ad spend.');
    }

    if (!activeChannels.referrals) {
      recommendations.push('Referral programs are consistently the highest-ROI channel for freelancers. Consider activating this channel — even a simple "refer a friend" discount can generate quality leads.');
    }

    const activeCount = Object.values(activeChannels).filter(Boolean).length;
    if (activeCount <= 2) {
      recommendations.push('You only have ' + activeCount + ' channels active. Diversifying across 4-5 channels reduces risk and creates multiple lead sources. Consider adding at least 2 more channels.');
    } else if (activeCount === 7) {
      recommendations.push('You have all channels active. While diversification is good, spreading your budget too thin can dilute results. Consider focusing on 4-5 channels and investing more deeply in each.');
    }

    return {
      budgetPctMin,
      budgetPctMax,
      recommendedBudgetPct,
      annualBudget,
      monthlyBudget,
      weeklyBudget,
      channelAllocations,
      totalEstimatedNewClientsMonth,
      revenueToBreakEven,
      targetRevenue,
      revenueGrowthNeeded,
      recommendations,
      timeVsMoneyRatio,
      stageLabel: stageConfig.label,
    };
  }, [inputs]);

  // Copy report to clipboard
  const generateReport = (): string => {
    const lines: string[] = [];
    lines.push('='.repeat(55));
    lines.push('MARKETING BUDGET PLAN');
    lines.push('='.repeat(55));
    lines.push('');
    lines.push('BUSINESS OVERVIEW');
    lines.push('-'.repeat(40));
    lines.push(`Annual Revenue:         ${fmtCurrency(inputs.annualRevenue)}`);
    lines.push(`Growth Target:          ${inputs.growthTarget}%`);
    lines.push(`Business Stage:         ${results.stageLabel}`);
    lines.push(`Target Revenue:         ${fmtCurrency(results.targetRevenue)}`);
    lines.push('');
    lines.push('RECOMMENDED MARKETING BUDGET');
    lines.push('-'.repeat(40));
    lines.push(`Budget Range:           ${results.budgetPctMin}-${results.budgetPctMax}% of revenue`);
    lines.push(`Recommended:            ${fmtPct(results.recommendedBudgetPct)} of revenue`);
    lines.push(`Annual Budget:          ${fmtCurrency(results.annualBudget)}`);
    lines.push(`Monthly Budget:         ${fmtCurrency(results.monthlyBudget)}`);
    lines.push(`Weekly Budget:          ${fmtCurrency(results.weeklyBudget)}`);
    lines.push('');
    lines.push('CHANNEL BREAKDOWN');
    lines.push('-'.repeat(40));
    results.channelAllocations.forEach((ch) => {
      lines.push(`${ch.name}`);
      lines.push(`  Allocation:           ${fmtPct(ch.pct)} (${fmtCurrency(ch.monthlyAmount)}/mo)`);
      lines.push(`  Expected ROI:         ${ch.roiMin}-${ch.roiMax}x`);
      lines.push(`  Est. New Clients/Mo:  ${ch.estimatedNewClientsMonth}`);
      lines.push('');
    });
    lines.push('SUMMARY');
    lines.push('-'.repeat(40));
    lines.push(`Est. New Clients/Month: ${results.totalEstimatedNewClientsMonth.toFixed(1)}`);
    lines.push(`Break-Even Revenue:     ${fmtCurrency(results.revenueToBreakEven)}`);
    lines.push(`Time vs Money:          ${results.timeVsMoneyRatio.time}% time / ${results.timeVsMoneyRatio.money}% money`);
    lines.push('');
    lines.push('RECOMMENDATIONS');
    lines.push('-'.repeat(40));
    results.recommendations.forEach((r, i) => {
      lines.push(`${i + 1}. ${r}`);
    });
    lines.push('');
    lines.push('-'.repeat(55));
    lines.push('Generated by InvoiceFlow Marketing Budget Calculator');
    lines.push('https://www.invoiceflow.au/tools/marketing-budget-calculator');
    lines.push('-'.repeat(55));
    return lines.join('\n');
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateReport()).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const inputClass =
    'w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-slate-600 focus:outline-none focus:border-amber-400/50 focus:ring-1 focus:ring-amber-400/25 transition-all text-sm';
  const labelClass = 'block text-sm font-medium text-slate-300 mb-1.5';

  return (
    <div className="space-y-8">
      {/* Step Indicator */}
      <div className="flex items-center justify-center gap-2 mb-4">
        {[1, 2, 3].map((s) => (
          <button
            key={s}
            onClick={() => {
              if (s <= step || s === step + 1) setStep(s);
            }}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
              step === s
                ? 'bg-gradient-to-r from-amber-400/20 to-orange-500/20 border border-amber-400/40 text-amber-300'
                : step > s
                  ? 'bg-white/5 border border-emerald-400/30 text-emerald-400'
                  : 'bg-white/5 border border-white/10 text-slate-500'
            }`}
          >
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                step === s
                  ? 'bg-amber-400/20 text-amber-300'
                  : step > s
                    ? 'bg-emerald-400/20 text-emerald-400'
                    : 'bg-white/10 text-slate-500'
              }`}
            >
              {step > s ? (
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                s
              )}
            </div>
            <span className="hidden sm:inline">
              {s === 1 ? 'Revenue & Goals' : s === 2 ? 'Channels' : 'Results'}
            </span>
          </button>
        ))}
      </div>

      {/* Step 1: Revenue & Goals */}
      {step === 1 && (
        <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
          <h3 className="text-lg font-bold text-white heading-font mb-6">Revenue & Growth Goals</h3>
          <div className="grid sm:grid-cols-2 gap-5">
            {/* Annual Revenue */}
            <div className="sm:col-span-2">
              <label className={labelClass}>
                Annual Revenue (AUD)
                <span className="text-slate-500 font-normal ml-1 text-xs">(current or projected)</span>
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm">$</span>
                <input
                  type="number"
                  value={inputs.annualRevenue}
                  onChange={(e) => updateField('annualRevenue', Math.max(0, Number(e.target.value)))}
                  className={`${inputClass} pl-8`}
                  min={0}
                  step={5000}
                />
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                {[50000, 80000, 120000, 150000, 200000, 300000].map((amt) => (
                  <button
                    key={amt}
                    onClick={() => updateField('annualRevenue', amt)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                      inputs.annualRevenue === amt
                        ? 'bg-amber-400/20 border border-amber-400/40 text-amber-300'
                        : 'bg-white/5 border border-white/10 text-slate-500 hover:text-white'
                    }`}
                  >
                    {fmtCurrency(amt)}
                  </button>
                ))}
              </div>
            </div>

            {/* Growth Target */}
            <div>
              <label className={labelClass}>Revenue Growth Target</label>
              <div className="grid grid-cols-2 gap-2">
                {([10, 20, 30, 50] as GrowthTarget[]).map((target) => (
                  <button
                    key={target}
                    onClick={() => updateField('growthTarget', target)}
                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      inputs.growthTarget === target
                        ? 'bg-gradient-to-r from-amber-400/20 to-orange-500/20 border border-amber-400/40 text-amber-300'
                        : 'bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {target}% growth
                  </button>
                ))}
              </div>
              <p className="text-xs text-slate-500 mt-2">
                Target revenue: {fmtCurrency(inputs.annualRevenue * (1 + inputs.growthTarget / 100))}
              </p>
            </div>

            {/* Business Stage */}
            <div>
              <label className={labelClass}>Business Stage</label>
              <div className="grid grid-cols-1 gap-2">
                {(Object.entries(STAGE_CONFIG) as [BusinessStage, typeof STAGE_CONFIG[BusinessStage]][]).map(
                  ([key, config]) => (
                    <button
                      key={key}
                      onClick={() => updateField('businessStage', key)}
                      className={`px-4 py-3 rounded-xl text-left transition-all ${
                        inputs.businessStage === key
                          ? 'bg-gradient-to-r from-amber-400/20 to-orange-500/20 border border-amber-400/40'
                          : 'bg-white/5 border border-white/10 hover:bg-white/10'
                      }`}
                    >
                      <p
                        className={`text-sm font-medium ${
                          inputs.businessStage === key ? 'text-amber-300' : 'text-slate-300'
                        }`}
                      >
                        {config.label}
                      </p>
                      <p className="text-xs text-slate-500 mt-0.5">{config.description}</p>
                    </button>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Next Button */}
          <div className="mt-8 text-center">
            <button
              onClick={() => setStep(2)}
              className="bg-gradient-to-r from-amber-400 to-orange-500 text-white font-semibold rounded-xl px-10 py-4 hover:from-amber-300 hover:to-orange-400 transition-all text-lg shadow-lg shadow-amber-500/20"
            >
              Choose Marketing Channels
            </button>
          </div>
        </div>
      )}

      {/* Step 2: Channel Selection */}
      {step === 2 && (
        <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
          <h3 className="text-lg font-bold text-white heading-font mb-2">Select Marketing Channels</h3>
          <p className="text-sm text-slate-400 mb-6">
            Toggle the channels you plan to invest in. Budget will be allocated proportionally across active channels.
          </p>

          <div className="space-y-3">
            {CHANNELS.map((channel) => {
              const isActive = inputs.activeChannels[channel.id];
              return (
                <button
                  key={channel.id}
                  onClick={() => toggleChannel(channel.id)}
                  className={`w-full text-left px-5 py-4 rounded-xl transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-amber-400/10 to-orange-500/10 border border-amber-400/30'
                      : 'bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all ${
                          isActive
                            ? 'bg-amber-400 border-amber-400'
                            : 'border-white/20 bg-transparent'
                        }`}
                      >
                        {isActive && (
                          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                      <div>
                        <p className={`text-sm font-medium ${isActive ? 'text-amber-300' : 'text-slate-300'}`}>
                          {channel.name}
                        </p>
                        <p className="text-xs text-slate-500 mt-0.5">{channel.description}</p>
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0 ml-4">
                      <p className={`text-xs font-medium ${isActive ? 'text-amber-400' : 'text-slate-500'}`}>
                        {channel.defaultPct}% default
                      </p>
                      <p className="text-xs text-slate-600 mt-0.5">
                        ROI: {channel.roiMin}-{channel.roiMax}x
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-4 bg-white/5 rounded-xl p-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-400">Active channels:</span>
              <span className="text-sm font-medium text-amber-300">
                {Object.values(inputs.activeChannels).filter(Boolean).length} of {CHANNELS.length}
              </span>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <button
              onClick={() => setStep(1)}
              className="px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-slate-300 font-medium hover:bg-white/10 transition-all"
            >
              Back
            </button>
            <button
              onClick={() => setStep(3)}
              className="bg-gradient-to-r from-amber-400 to-orange-500 text-white font-semibold rounded-xl px-10 py-4 hover:from-amber-300 hover:to-orange-400 transition-all text-lg shadow-lg shadow-amber-500/20"
            >
              Calculate My Budget
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Results */}
      {step === 3 && (
        <>
          {/* Budget Overview */}
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white heading-font mb-6 text-center">
              Your Marketing Budget Plan
            </h3>

            {/* Top-level budget cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
              <div className="bg-gradient-to-br from-amber-400/10 to-orange-500/10 border border-amber-400/20 rounded-xl p-4 text-center">
                <p className="text-xs text-amber-400/70 mb-1">Recommended %</p>
                <p className="text-xl font-bold text-amber-300">
                  {results.budgetPctMin}-{results.budgetPctMax}%
                </p>
                <p className="text-xs text-slate-500 mt-1">of revenue</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 text-center">
                <p className="text-xs text-slate-500 mb-1">Annual Budget</p>
                <p className="text-xl font-bold text-white">{fmtCurrency(results.annualBudget)}</p>
                <p className="text-xs text-slate-500 mt-1">{fmtPct(results.recommendedBudgetPct)} of rev</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 text-center">
                <p className="text-xs text-slate-500 mb-1">Monthly Budget</p>
                <p className="text-xl font-bold text-white">{fmtCurrency(results.monthlyBudget)}</p>
                <p className="text-xs text-slate-500 mt-1">per month</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 text-center">
                <p className="text-xs text-slate-500 mb-1">Weekly Budget</p>
                <p className="text-xl font-bold text-white">{fmtCurrency(results.weeklyBudget)}</p>
                <p className="text-xs text-slate-500 mt-1">per week</p>
              </div>
            </div>

            {/* Revenue target bar */}
            <div className="bg-white/5 rounded-xl p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-slate-300">Revenue Growth Path</span>
                <span className="text-sm font-medium text-amber-300">+{inputs.growthTarget}% target</span>
              </div>
              <div className="space-y-3">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs text-slate-500">Current Revenue</span>
                    <span className="text-xs font-medium text-white">{fmtCurrency(inputs.annualRevenue)}</span>
                  </div>
                  <div className="h-3 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full transition-all duration-700"
                      style={{
                        width: `${Math.min(100, results.targetRevenue > 0 ? (inputs.annualRevenue / results.targetRevenue) * 100 : 0)}%`,
                      }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs text-slate-500">Target Revenue</span>
                    <span className="text-xs font-medium text-amber-300">{fmtCurrency(results.targetRevenue)}</span>
                  </div>
                  <div className="h-3 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-emerald-500 to-green-500 rounded-full transition-all duration-700"
                      style={{ width: '100%' }}
                    />
                  </div>
                </div>
              </div>
              <p className="text-xs text-slate-500 mt-3">
                Growth needed: {fmtCurrency(results.revenueGrowthNeeded)} additional revenue to hit your target
              </p>
            </div>
          </div>

          {/* Channel Allocation Breakdown */}
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white heading-font mb-6">Channel Allocation</h3>

            {/* Channel bar chart */}
            <div className="space-y-4">
              {results.channelAllocations.map((ch) => (
                <div key={ch.id}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-sm text-slate-300">{ch.name}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-slate-500">{fmtPct(ch.pct)}</span>
                      <span className="text-sm font-bold text-white">{fmtCurrency(ch.monthlyAmount)}/mo</span>
                    </div>
                  </div>
                  <div className="h-3 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-amber-400 to-orange-500 rounded-full transition-all duration-700"
                      style={{ width: `${ch.pct}%` }}
                    />
                  </div>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-xs text-slate-600">
                      ROI: {ch.roiMin}-{ch.roiMax}x | Avg acquisition: {fmtCurrency(ch.avgAcquisitionCost)}
                    </span>
                    <span className="text-xs text-amber-400/70">
                      ~{ch.estimatedNewClientsMonth} new clients/mo
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Channel allocation donut */}
            <div className="flex flex-col sm:flex-row items-center gap-8 mt-8">
              <div className="relative w-48 h-48 flex-shrink-0">
                {(() => {
                  const channelColors = [
                    '#fbbf24', '#f97316', '#ef4444', '#8b5cf6',
                    '#06b6d4', '#10b981', '#64748b',
                  ];
                  let cumulativePct = 0;
                  const gradientStops = results.channelAllocations.map((ch, i) => {
                    const start = cumulativePct;
                    cumulativePct += ch.pct;
                    const color = channelColors[i % channelColors.length];
                    return `${color} ${start}% ${cumulativePct}%`;
                  });

                  return (
                    <>
                      <div
                        className="w-48 h-48 rounded-full"
                        style={{
                          background: `conic-gradient(${gradientStops.join(', ')})`,
                        }}
                      />
                      <div className="absolute inset-6 bg-[#0B1120] rounded-full flex items-center justify-center">
                        <div className="text-center">
                          <p className="text-xl font-bold text-white">{fmtCurrency(results.monthlyBudget)}</p>
                          <p className="text-xs text-slate-500">per month</p>
                        </div>
                      </div>
                    </>
                  );
                })()}
              </div>

              {/* Legend */}
              <div className="flex-1 space-y-2.5 w-full">
                {(() => {
                  const channelColors = [
                    'bg-amber-400', 'bg-orange-500', 'bg-red-500', 'bg-violet-500',
                    'bg-cyan-500', 'bg-emerald-500', 'bg-slate-500',
                  ];
                  return results.channelAllocations.map((ch, i) => (
                    <div key={ch.id} className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className={`w-3 h-3 rounded-sm ${channelColors[i % channelColors.length]} flex-shrink-0`} />
                        <span className="text-sm text-slate-300">{ch.name}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-medium text-white">{fmtCurrency(ch.monthlyAmount)}</span>
                        <span className="text-xs text-slate-500 w-12 text-right">{fmtPct(ch.pct)}</span>
                      </div>
                    </div>
                  ));
                })()}
              </div>
            </div>
          </div>

          {/* ROI & Client Acquisition Estimates */}
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white heading-font mb-6">Expected ROI & Client Acquisition</h3>

            <div className="grid sm:grid-cols-3 gap-3 mb-6">
              <div className="bg-gradient-to-br from-amber-400/10 to-orange-500/10 border border-amber-400/20 rounded-xl p-4 text-center">
                <p className="text-xs text-amber-400/70 mb-1">Est. New Clients/Month</p>
                <p className="text-2xl font-bold text-amber-300">{results.totalEstimatedNewClientsMonth.toFixed(1)}</p>
                <p className="text-xs text-slate-500 mt-1">across all channels</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 text-center">
                <p className="text-xs text-slate-500 mb-1">Break-Even Revenue</p>
                <p className="text-2xl font-bold text-white">{fmtCurrency(results.revenueToBreakEven)}</p>
                <p className="text-xs text-slate-500 mt-1">to cover marketing spend</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 text-center">
                <p className="text-xs text-slate-500 mb-1">Marketing Investment</p>
                <p className="text-2xl font-bold text-white">{fmtCurrency(results.annualBudget)}</p>
                <p className="text-xs text-slate-500 mt-1">annual total</p>
              </div>
            </div>

            {/* Per-channel ROI table */}
            <div className="bg-white/5 rounded-xl overflow-hidden">
              <div className="grid grid-cols-4 gap-2 px-4 py-3 border-b border-white/10">
                <span className="text-xs font-medium text-slate-500">Channel</span>
                <span className="text-xs font-medium text-slate-500 text-center">Expected ROI</span>
                <span className="text-xs font-medium text-slate-500 text-center">Acq. Cost</span>
                <span className="text-xs font-medium text-slate-500 text-right">Clients/Mo</span>
              </div>
              {results.channelAllocations.map((ch) => (
                <div key={ch.id} className="grid grid-cols-4 gap-2 px-4 py-3 border-b border-white/5 last:border-0">
                  <span className="text-sm text-slate-300 truncate">{ch.name}</span>
                  <span className="text-sm text-amber-300 text-center font-medium">{ch.roiMin}-{ch.roiMax}x</span>
                  <span className="text-sm text-slate-400 text-center">{fmtCurrency(ch.avgAcquisitionCost)}</span>
                  <span className="text-sm text-white text-right font-medium">{ch.estimatedNewClientsMonth}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Time vs Money Allocation */}
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white heading-font mb-6">Time vs Money Allocation</h3>

            <div className="bg-white/5 rounded-xl p-5 mb-4">
              <p className="text-sm text-slate-400 mb-4">
                At the <span className="text-amber-300 font-medium">{results.stageLabel.toLowerCase()}</span> stage,
                your marketing effort should balance between time investment (creating content, networking, outreach)
                and monetary investment (ads, tools, contractors).
              </p>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs text-slate-500 w-12">Time</span>
                <div className="flex-1 h-8 bg-white/5 rounded-lg overflow-hidden flex">
                  <div
                    className="h-full bg-gradient-to-r from-amber-400 to-amber-500 flex items-center justify-center transition-all duration-700"
                    style={{ width: `${results.timeVsMoneyRatio.time}%` }}
                  >
                    <span className="text-xs font-bold text-white">{results.timeVsMoneyRatio.time}%</span>
                  </div>
                  <div
                    className="h-full bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center transition-all duration-700"
                    style={{ width: `${results.timeVsMoneyRatio.money}%` }}
                  >
                    <span className="text-xs font-bold text-white">{results.timeVsMoneyRatio.money}%</span>
                  </div>
                </div>
                <span className="text-xs text-slate-500 w-14 text-right">Money</span>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              <div className="bg-white/5 rounded-xl p-4">
                <h4 className="text-amber-300 font-semibold text-sm mb-2">Time Investment ({results.timeVsMoneyRatio.time}%)</h4>
                <ul className="space-y-1.5">
                  <li className="text-xs text-slate-400 flex items-start gap-2">
                    <span className="text-amber-400 mt-0.5">-</span>
                    Creating blog posts, case studies, and social content
                  </li>
                  <li className="text-xs text-slate-400 flex items-start gap-2">
                    <span className="text-amber-400 mt-0.5">-</span>
                    Networking at events and online communities
                  </li>
                  <li className="text-xs text-slate-400 flex items-start gap-2">
                    <span className="text-amber-400 mt-0.5">-</span>
                    Building relationships and asking for referrals
                  </li>
                  <li className="text-xs text-slate-400 flex items-start gap-2">
                    <span className="text-amber-400 mt-0.5">-</span>
                    Optimising your website and portfolio
                  </li>
                </ul>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <h4 className="text-orange-400 font-semibold text-sm mb-2">Monetary Investment ({results.timeVsMoneyRatio.money}%)</h4>
                <ul className="space-y-1.5">
                  <li className="text-xs text-slate-400 flex items-start gap-2">
                    <span className="text-orange-400 mt-0.5">-</span>
                    Paid advertising (Google Ads, Meta Ads)
                  </li>
                  <li className="text-xs text-slate-400 flex items-start gap-2">
                    <span className="text-orange-400 mt-0.5">-</span>
                    Marketing tools and software subscriptions
                  </li>
                  <li className="text-xs text-slate-400 flex items-start gap-2">
                    <span className="text-orange-400 mt-0.5">-</span>
                    Hiring contractors for content or design
                  </li>
                  <li className="text-xs text-slate-400 flex items-start gap-2">
                    <span className="text-orange-400 mt-0.5">-</span>
                    Event tickets, sponsorships, and conference fees
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Recommendations */}
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white heading-font mb-6">Recommendations</h3>
            <div className="space-y-3">
              {results.recommendations.map((rec, i) => (
                <div key={i} className="flex items-start gap-3 bg-white/5 rounded-xl p-4">
                  <div className="w-6 h-6 rounded-full bg-amber-400/20 border border-amber-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-amber-400 text-xs font-bold">{i + 1}</span>
                  </div>
                  <p className="text-sm text-slate-300">{rec}</p>
                </div>
              ))}
            </div>

            {/* Quick benchmarks */}
            <div className="mt-6 bg-gradient-to-r from-amber-400/10 to-orange-500/10 border border-amber-400/20 rounded-xl p-5">
              <p className="text-sm text-amber-400 font-medium mb-3">Australian Freelancer Benchmarks</p>
              <div className="grid sm:grid-cols-3 gap-3">
                <div className="bg-white/5 rounded-lg p-3 text-center">
                  <p className="text-xs text-slate-500 mb-1">Avg Marketing Spend</p>
                  <p className="text-lg font-bold text-white">8-12%</p>
                  <p className="text-xs text-slate-500 mt-1">of annual revenue</p>
                </div>
                <div className="bg-white/5 rounded-lg p-3 text-center">
                  <p className="text-xs text-slate-500 mb-1">Top Channel</p>
                  <p className="text-lg font-bold text-white">Referrals</p>
                  <p className="text-xs text-slate-500 mt-1">42% of new business</p>
                </div>
                <div className="bg-white/5 rounded-lg p-3 text-center">
                  <p className="text-xs text-slate-500 mb-1">Avg Acquisition Cost</p>
                  <p className="text-lg font-bold text-white">$150-$400</p>
                  <p className="text-xs text-slate-500 mt-1">per new client</p>
                </div>
              </div>
            </div>
          </div>

          {/* Copy Report & Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={handleCopy}
              className="bg-gradient-to-r from-amber-400 to-orange-500 text-white font-semibold rounded-xl px-8 py-4 hover:from-amber-300 hover:to-orange-400 transition-all"
            >
              {copied ? 'Copied to Clipboard!' : 'Copy Budget Plan'}
            </button>
            <button
              onClick={() => setStep(1)}
              className="px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-slate-300 font-medium hover:bg-white/10 transition-all"
            >
              Adjust Inputs
            </button>
          </div>

          {/* Related Tools */}
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white heading-font mb-4">Related Tools</h3>
            <div className="grid sm:grid-cols-3 gap-3">
              <a
                href="/tools/client-lifetime-value"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-amber-400/30 rounded-xl p-4 transition-all group"
              >
                <p className="text-white font-medium text-sm group-hover:text-amber-300 transition-colors">
                  Client Lifetime Value Calculator
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Calculate how much each client is worth over time
                </p>
              </a>
              <a
                href="/tools/revenue-goal-planner"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-amber-400/30 rounded-xl p-4 transition-all group"
              >
                <p className="text-white font-medium text-sm group-hover:text-amber-300 transition-colors">
                  Revenue Goal Planner
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Break annual income targets into weekly billing goals
                </p>
              </a>
              <a
                href="/tools/rate-calculator"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-amber-400/30 rounded-xl p-4 transition-all group"
              >
                <p className="text-white font-medium text-sm group-hover:text-amber-300 transition-colors">
                  Freelance Rate Calculator
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Calculate your ideal hourly rate based on income goals
                </p>
              </a>
            </div>
          </div>

          <div className="text-center">
            <p className="text-xs text-slate-500 max-w-2xl mx-auto">
              This tool provides estimates based on industry averages and your inputs. Actual ROI and client
              acquisition rates vary depending on your niche, service quality, market conditions, and execution.
              Review and adjust your marketing budget quarterly for best results. This is not financial advice.
            </p>
          </div>
        </>
      )}
    </div>
  );
}
