'use client';

import { useState, useMemo } from 'react';

/* ---- Types ---- */

type TimePeriod = 'month' | 'quarter' | 'half_year' | 'year';

interface ChannelData {
  enabled: boolean;
  moneySpent: number;
  hoursSpent: number;
  clientsAcquired: number;
}

type ChannelKey =
  | 'referrals'
  | 'socialMedia'
  | 'seoContent'
  | 'paidAds'
  | 'networking'
  | 'coldOutreach'
  | 'freelancePlatforms'
  | 'other';

interface Inputs {
  timePeriod: TimePeriod;
  hourlyRate: number;
  channels: Record<ChannelKey, ChannelData>;
  avgClientLifetimeValue: number;
  avgProjectValue: number;
  avgRetentionMonths: number;
}

interface ChannelResult {
  key: ChannelKey;
  label: string;
  totalCost: number;
  moneyCost: number;
  timeCost: number;
  clients: number;
  cac: number;
  clvCacRatio: number;
  ratioHealth: 'red' | 'amber' | 'green' | 'excellent';
  ratioLabel: string;
  ratioColor: string;
  ratioBg: string;
  paybackPeriod: number;
  monthlyAcquisitionRate: number;
}

interface Results {
  channelResults: ChannelResult[];
  totalMoneySpent: number;
  totalTimeCost: number;
  totalCost: number;
  totalClients: number;
  blendedCAC: number;
  overallCLVCACRatio: number;
  overallRatioHealth: 'red' | 'amber' | 'green' | 'excellent';
  overallRatioLabel: string;
  overallRatioColor: string;
  overallRatioBg: string;
  bestChannel: ChannelResult | null;
  worstChannel: ChannelResult | null;
  overallPaybackPeriod: number;
  monthlyAcquisitionCapacity: number;
  recommendations: string[];
  reallocationSuggestions: string[];
}

/* ---- Constants ---- */

const CHANNEL_LABELS: Record<ChannelKey, string> = {
  referrals: 'Referrals',
  socialMedia: 'Social Media',
  seoContent: 'SEO / Content Marketing',
  paidAds: 'Paid Ads (Google / Meta)',
  networking: 'Networking / Events',
  coldOutreach: 'Cold Outreach',
  freelancePlatforms: 'Freelance Platforms (Upwork / Fiverr)',
  other: 'Other',
};

const CHANNEL_KEYS: ChannelKey[] = [
  'referrals',
  'socialMedia',
  'seoContent',
  'paidAds',
  'networking',
  'coldOutreach',
  'freelancePlatforms',
  'other',
];

const PERIOD_LABELS: Record<TimePeriod, string> = {
  month: 'Last Month',
  quarter: 'Last Quarter',
  half_year: 'Last 6 Months',
  year: 'Last 12 Months',
};

const PERIOD_MONTHS: Record<TimePeriod, number> = {
  month: 1,
  quarter: 3,
  half_year: 6,
  year: 12,
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

function fmtRatio(n: number): string {
  return n.toFixed(1) + ':1';
}

function fmtMonths(n: number): string {
  if (n === Infinity || isNaN(n)) return 'N/A';
  if (n < 1) return '< 1 month';
  return n.toFixed(1) + ' months';
}

function getRatioHealth(ratio: number): {
  health: 'red' | 'amber' | 'green' | 'excellent';
  label: string;
  color: string;
  bg: string;
} {
  if (ratio >= 5) {
    return { health: 'excellent', label: 'Excellent', color: 'text-emerald-400', bg: 'bg-emerald-400' };
  } else if (ratio >= 3) {
    return { health: 'green', label: 'Healthy', color: 'text-green-400', bg: 'bg-green-400' };
  } else if (ratio >= 1) {
    return { health: 'amber', label: 'Needs Improvement', color: 'text-amber-400', bg: 'bg-amber-400' };
  } else {
    return { health: 'red', label: 'Losing Money', color: 'text-red-400', bg: 'bg-red-400' };
  }
}

function defaultChannel(): ChannelData {
  return { enabled: false, moneySpent: 0, hoursSpent: 0, clientsAcquired: 0 };
}

/* ---- Component ---- */

export default function AcquisitionCostCalculator() {
  const [step, setStep] = useState(1);
  const [calculated, setCalculated] = useState(false);
  const [copied, setCopied] = useState(false);

  const [inputs, setInputs] = useState<Inputs>({
    timePeriod: 'quarter',
    hourlyRate: 120,
    channels: {
      referrals: { enabled: true, moneySpent: 200, hoursSpent: 5, clientsAcquired: 3 },
      socialMedia: { enabled: true, moneySpent: 500, hoursSpent: 20, clientsAcquired: 2 },
      seoContent: defaultChannel(),
      paidAds: defaultChannel(),
      networking: defaultChannel(),
      coldOutreach: defaultChannel(),
      freelancePlatforms: defaultChannel(),
      other: defaultChannel(),
    },
    avgClientLifetimeValue: 8000,
    avgProjectValue: 3000,
    avgRetentionMonths: 6,
  });

  const updateChannel = (key: ChannelKey, field: keyof ChannelData, value: number | boolean) => {
    setInputs((prev) => ({
      ...prev,
      channels: {
        ...prev.channels,
        [key]: { ...prev.channels[key], [field]: value },
      },
    }));
  };

  const update = (field: keyof Omit<Inputs, 'channels'>, value: number | TimePeriod) => {
    setInputs((prev) => ({ ...prev, [field]: value }));
  };

  const enabledChannels = CHANNEL_KEYS.filter((k) => inputs.channels[k].enabled);

  const results: Results = useMemo(() => {
    const months = PERIOD_MONTHS[inputs.timePeriod];
    const channelResults: ChannelResult[] = [];

    let totalMoneySpent = 0;
    let totalTimeCost = 0;
    let totalClients = 0;

    const avgMonthlyRevPerClient =
      inputs.avgRetentionMonths > 0
        ? inputs.avgClientLifetimeValue / inputs.avgRetentionMonths
        : inputs.avgProjectValue;

    for (const key of CHANNEL_KEYS) {
      const ch = inputs.channels[key];
      if (!ch.enabled || ch.clientsAcquired === 0) continue;

      const timeCost = ch.hoursSpent * inputs.hourlyRate;
      const totalCost = ch.moneySpent + timeCost;
      const cac = totalCost / ch.clientsAcquired;
      const clvCacRatio = cac > 0 ? inputs.avgClientLifetimeValue / cac : 0;
      const ratioInfo = getRatioHealth(clvCacRatio);
      const paybackPeriod = avgMonthlyRevPerClient > 0 ? cac / avgMonthlyRevPerClient : Infinity;
      const monthlyAcquisitionRate = months > 0 ? ch.clientsAcquired / months : 0;

      totalMoneySpent += ch.moneySpent;
      totalTimeCost += timeCost;
      totalClients += ch.clientsAcquired;

      channelResults.push({
        key,
        label: CHANNEL_LABELS[key],
        totalCost,
        moneyCost: ch.moneySpent,
        timeCost,
        clients: ch.clientsAcquired,
        cac,
        clvCacRatio,
        ratioHealth: ratioInfo.health,
        ratioLabel: ratioInfo.label,
        ratioColor: ratioInfo.color,
        ratioBg: ratioInfo.bg,
        paybackPeriod,
        monthlyAcquisitionRate,
      });
    }

    const totalCost = totalMoneySpent + totalTimeCost;
    const blendedCAC = totalClients > 0 ? totalCost / totalClients : 0;
    const overallCLVCACRatio = blendedCAC > 0 ? inputs.avgClientLifetimeValue / blendedCAC : 0;
    const overallRatioInfo = getRatioHealth(overallCLVCACRatio);
    const overallPaybackPeriod = avgMonthlyRevPerClient > 0 ? blendedCAC / avgMonthlyRevPerClient : Infinity;
    const monthlyAcquisitionCapacity = months > 0 ? totalClients / months : 0;

    // Sort by CAC to find best/worst
    const sorted = [...channelResults].sort((a, b) => a.cac - b.cac);
    const bestChannel = sorted.length > 0 ? sorted[0] : null;
    const worstChannel = sorted.length > 1 ? sorted[sorted.length - 1] : null;

    // Recommendations
    const recommendations: string[] = [];

    if (overallCLVCACRatio < 1) {
      recommendations.push(
        'Your overall CLV:CAC ratio is below 1:1, meaning you are spending more to acquire clients than they generate in revenue. This is unsustainable. Focus on reducing acquisition costs or increasing client lifetime value immediately.'
      );
    } else if (overallCLVCACRatio < 3) {
      recommendations.push(
        'Your CLV:CAC ratio is between 1:1 and 3:1. You are profitable but have room to improve. Focus on increasing client retention and upselling to improve lifetime value, or shift budget to lower-CAC channels.'
      );
    } else if (overallCLVCACRatio >= 5) {
      recommendations.push(
        'Your CLV:CAC ratio is excellent at 5:1 or above. You may actually be underinvesting in marketing. Consider increasing spend on your best channels to accelerate growth.'
      );
    } else {
      recommendations.push(
        'Your CLV:CAC ratio is healthy at 3:1 or above. Maintain your current channel mix and continue optimising for efficiency.'
      );
    }

    if (bestChannel && worstChannel && bestChannel.key !== worstChannel.key) {
      const cacDiff = worstChannel.cac - bestChannel.cac;
      if (cacDiff > 0) {
        recommendations.push(
          `Your most efficient channel is ${bestChannel.label} at ${fmtCurrency(bestChannel.cac)} per client, while ${worstChannel.label} costs ${fmtCurrency(worstChannel.cac)} per client. That is a ${fmtCurrency(cacDiff)} difference per client acquired.`
        );
      }
    }

    if (channelResults.some((ch) => ch.ratioHealth === 'red')) {
      const losers = channelResults.filter((ch) => ch.ratioHealth === 'red').map((ch) => ch.label);
      recommendations.push(
        `The following channels are losing money (CLV:CAC below 1:1): ${losers.join(', ')}. Consider pausing spend on these channels and reallocating to higher-performing ones.`
      );
    }

    const referralData = channelResults.find((ch) => ch.key === 'referrals');
    if (referralData && referralData.cac < blendedCAC * 0.5) {
      recommendations.push(
        'Referrals are your cheapest acquisition channel. Consider building a formal referral program with incentives for existing clients to refer new business.'
      );
    }

    if (totalClients > 0 && months >= 3 && monthlyAcquisitionCapacity < 1) {
      recommendations.push(
        'You are acquiring fewer than 1 new client per month. If you need to grow, increase your marketing effort on your most efficient channels or diversify into new channels.'
      );
    }

    if (channelResults.length === 1) {
      recommendations.push(
        'You are relying on a single marketing channel. This is risky — if that channel underperforms, your pipeline dries up. Diversify into at least 2-3 channels for resilience.'
      );
    }

    // Reallocation suggestions
    const reallocationSuggestions: string[] = [];

    if (bestChannel && worstChannel && bestChannel.key !== worstChannel.key && worstChannel.cac > blendedCAC * 1.5) {
      const shiftAmount = Math.round(worstChannel.moneyCost * 0.5);
      if (shiftAmount > 0) {
        const extraClients = bestChannel.cac > 0 ? Math.floor(shiftAmount / bestChannel.cac) : 0;
        reallocationSuggestions.push(
          `Shift ${fmtCurrency(shiftAmount)} from ${worstChannel.label} to ${bestChannel.label}. At current efficiency, this could yield approximately ${extraClients} additional client${extraClients !== 1 ? 's' : ''}.`
        );
      }
    }

    if (channelResults.some((ch) => ch.ratioHealth === 'red')) {
      const redChannels = channelResults.filter((ch) => ch.ratioHealth === 'red');
      const totalRedSpend = redChannels.reduce((sum, ch) => sum + ch.moneyCost, 0);
      if (totalRedSpend > 0 && bestChannel) {
        reallocationSuggestions.push(
          `Pause the ${fmtCurrency(totalRedSpend)} in direct spend on unprofitable channels and redirect it to ${bestChannel.label} where your CAC is ${fmtCurrency(bestChannel.cac)}.`
        );
      }
    }

    const highTimeChannels = channelResults.filter((ch) => ch.timeCost > ch.moneyCost * 3 && ch.cac > blendedCAC);
    if (highTimeChannels.length > 0) {
      reallocationSuggestions.push(
        `${highTimeChannels.map((ch) => ch.label).join(' and ')} ${highTimeChannels.length > 1 ? 'are' : 'is'} very time-intensive relative to results. Consider whether your time would be better spent on billable work and outsourcing or automating these marketing activities.`
      );
    }

    return {
      channelResults,
      totalMoneySpent,
      totalTimeCost,
      totalCost,
      totalClients,
      blendedCAC,
      overallCLVCACRatio,
      overallRatioHealth: overallRatioInfo.health,
      overallRatioLabel: overallRatioInfo.label,
      overallRatioColor: overallRatioInfo.color,
      overallRatioBg: overallRatioInfo.bg,
      bestChannel,
      worstChannel,
      overallPaybackPeriod,
      monthlyAcquisitionCapacity,
      recommendations,
      reallocationSuggestions,
    };
  }, [inputs]);

  // Copy report to clipboard
  const generateReport = (): string => {
    const lines: string[] = [];
    lines.push('='.repeat(60));
    lines.push('CLIENT ACQUISITION COST (CAC) ANALYSIS');
    lines.push('='.repeat(60));
    lines.push('');
    lines.push('OVERVIEW');
    lines.push('-'.repeat(45));
    lines.push(`Analysis period:           ${PERIOD_LABELS[inputs.timePeriod]}`);
    lines.push(`Your hourly rate:          ${fmtCurrency(inputs.hourlyRate)}/hr`);
    lines.push(`Avg client lifetime value: ${fmtCurrency(inputs.avgClientLifetimeValue)}`);
    lines.push(`Avg project value:         ${fmtCurrency(inputs.avgProjectValue)}`);
    lines.push(`Avg client retention:      ${inputs.avgRetentionMonths} months`);
    lines.push('');
    lines.push('CHANNEL BREAKDOWN');
    lines.push('-'.repeat(45));
    results.channelResults.forEach((ch) => {
      lines.push(`${ch.label}:`);
      lines.push(`  Money spent:   ${fmtCurrency(ch.moneyCost)}`);
      lines.push(`  Time cost:     ${fmtCurrency(ch.timeCost)} (${inputs.channels[ch.key].hoursSpent}hrs @ ${fmtCurrency(inputs.hourlyRate)}/hr)`);
      lines.push(`  Total cost:    ${fmtCurrency(ch.totalCost)}`);
      lines.push(`  Clients won:   ${ch.clients}`);
      lines.push(`  CAC:           ${fmtCurrency(ch.cac)}`);
      lines.push(`  CLV:CAC ratio: ${fmtRatio(ch.clvCacRatio)} (${ch.ratioLabel})`);
      lines.push(`  Payback:       ${fmtMonths(ch.paybackPeriod)}`);
      lines.push('');
    });
    lines.push('OVERALL METRICS');
    lines.push('-'.repeat(45));
    lines.push(`Total marketing spend: ${fmtCurrency(results.totalCost)} (${fmtCurrency(results.totalMoneySpent)} money + ${fmtCurrency(results.totalTimeCost)} time)`);
    lines.push(`Total clients acquired: ${results.totalClients}`);
    lines.push(`Blended CAC:           ${fmtCurrency(results.blendedCAC)}`);
    lines.push(`Overall CLV:CAC ratio: ${fmtRatio(results.overallCLVCACRatio)} (${results.overallRatioLabel})`);
    lines.push(`Payback period:        ${fmtMonths(results.overallPaybackPeriod)}`);
    lines.push(`Monthly acquisition:   ${results.monthlyAcquisitionCapacity.toFixed(1)} clients/month`);
    if (results.bestChannel) {
      lines.push(`Most efficient:        ${results.bestChannel.label} (${fmtCurrency(results.bestChannel.cac)}/client)`);
    }
    if (results.worstChannel && results.worstChannel.key !== results.bestChannel?.key) {
      lines.push(`Least efficient:       ${results.worstChannel.label} (${fmtCurrency(results.worstChannel.cac)}/client)`);
    }
    lines.push('');
    lines.push('RECOMMENDATIONS');
    lines.push('-'.repeat(45));
    results.recommendations.forEach((r, i) => {
      lines.push(`${i + 1}. ${r}`);
    });
    if (results.reallocationSuggestions.length > 0) {
      lines.push('');
      lines.push('BUDGET REALLOCATION');
      lines.push('-'.repeat(45));
      results.reallocationSuggestions.forEach((r, i) => {
        lines.push(`${i + 1}. ${r}`);
      });
    }
    lines.push('');
    lines.push('-'.repeat(60));
    lines.push('Generated by InvoiceFlow Client Acquisition Cost Calculator');
    lines.push('https://www.invoiceflow.au/tools/acquisition-cost-calculator');
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
    setStep(4);
  };

  const inputClass =
    'w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/25 transition-all text-sm';
  const labelClass = 'block text-sm font-medium text-slate-300 mb-1.5';

  // Find max CAC for bar chart scaling
  const maxCAC = results.channelResults.length > 0
    ? Math.max(...results.channelResults.map((ch) => ch.cac))
    : 1;

  return (
    <div className="space-y-8">
      {/* Step Indicator */}
      <div className="flex items-center justify-center gap-2 sm:gap-4 mb-4">
        {[1, 2, 3, 4].map((s) => (
          <button
            key={s}
            onClick={() => { if (s < 4 || calculated) setStep(s); }}
            className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
              step === s
                ? 'bg-gradient-to-r from-cyan-400/20 to-sky-500/20 border border-cyan-400/40 text-cyan-300'
                : s < step || (s === 4 && calculated)
                  ? 'bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10'
                  : 'bg-white/[0.02] border border-white/[0.05] text-slate-600 cursor-default'
            }`}
          >
            <div className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${
              step === s
                ? 'bg-cyan-400/30 text-cyan-300'
                : s < step || (s === 4 && calculated)
                  ? 'bg-white/10 text-slate-400'
                  : 'bg-white/5 text-slate-600'
            }`}>
              {s < step ? '\u2713' : s}
            </div>
            <span className="hidden sm:inline">
              {s === 1 ? 'Period' : s === 2 ? 'Channels' : s === 3 ? 'Client Value' : 'Results'}
            </span>
          </button>
        ))}
      </div>

      {/* Step 1: Time Period */}
      {step === 1 && (
        <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
          <h3 className="text-lg font-bold text-white heading-font mb-2">Analysis Period</h3>
          <p className="text-sm text-slate-400 mb-6">
            Select the time period you want to analyse. Use a longer period for more reliable data.
          </p>

          <div className="grid sm:grid-cols-2 gap-3 mb-6">
            {(['month', 'quarter', 'half_year', 'year'] as TimePeriod[]).map((period) => (
              <button
                key={period}
                onClick={() => update('timePeriod', period)}
                className={`px-5 py-4 rounded-xl text-sm font-medium transition-all text-left ${
                  inputs.timePeriod === period
                    ? 'bg-gradient-to-r from-cyan-400/20 to-sky-500/20 border border-cyan-400/40 text-cyan-300'
                    : 'bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                }`}
              >
                <span className="block font-semibold">{PERIOD_LABELS[period]}</span>
                <span className="block text-xs mt-1 opacity-70">{PERIOD_MONTHS[period]} month{PERIOD_MONTHS[period] > 1 ? 's' : ''} of data</span>
              </button>
            ))}
          </div>

          <div>
            <label className={labelClass}>
              Your Hourly Rate (AUD)
              <span className="text-slate-500 font-normal ml-1 text-xs">(used to calculate time cost)</span>
            </label>
            <div className="relative max-w-xs">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm">$</span>
              <input
                type="number"
                value={inputs.hourlyRate}
                onChange={(e) => update('hourlyRate', Math.max(1, Number(e.target.value)))}
                className={`${inputClass} pl-8`}
                min={1}
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm">/hr</span>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={() => setStep(2)}
              className="bg-gradient-to-r from-cyan-400 to-sky-500 text-white font-semibold rounded-xl px-10 py-4 hover:from-cyan-300 hover:to-sky-400 transition-all text-lg shadow-lg shadow-cyan-500/20"
            >
              Next: Marketing Channels
            </button>
          </div>
        </div>
      )}

      {/* Step 2: Marketing Channels */}
      {step === 2 && (
        <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
          <h3 className="text-lg font-bold text-white heading-font mb-2">Marketing Channels</h3>
          <p className="text-sm text-slate-400 mb-6">
            Enable each channel you used during the {PERIOD_LABELS[inputs.timePeriod].toLowerCase()} period and enter your spend, time investment, and clients acquired.
          </p>

          <div className="space-y-4">
            {CHANNEL_KEYS.map((key) => {
              const ch = inputs.channels[key];
              return (
                <div
                  key={key}
                  className={`rounded-xl border transition-all ${
                    ch.enabled
                      ? 'bg-white/[0.04] border-cyan-400/20'
                      : 'bg-white/[0.02] border-white/[0.06]'
                  }`}
                >
                  {/* Channel Toggle Header */}
                  <button
                    onClick={() => updateChannel(key, 'enabled', !ch.enabled)}
                    className="w-full flex items-center justify-between px-5 py-4 text-left"
                  >
                    <span className={`text-sm font-medium ${ch.enabled ? 'text-white' : 'text-slate-500'}`}>
                      {CHANNEL_LABELS[key]}
                    </span>
                    <div className={`w-10 h-6 rounded-full transition-all flex items-center ${
                      ch.enabled ? 'bg-cyan-400/30 justify-end' : 'bg-white/10 justify-start'
                    }`}>
                      <div className={`w-5 h-5 rounded-full mx-0.5 transition-all ${
                        ch.enabled ? 'bg-cyan-400' : 'bg-slate-500'
                      }`} />
                    </div>
                  </button>

                  {/* Channel Details */}
                  {ch.enabled && (
                    <div className="px-5 pb-5">
                      <div className="grid sm:grid-cols-3 gap-4">
                        <div>
                          <label className={labelClass}>Money Spent (AUD)</label>
                          <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm">$</span>
                            <input
                              type="number"
                              value={ch.moneySpent}
                              onChange={(e) => updateChannel(key, 'moneySpent', Math.max(0, Number(e.target.value)))}
                              className={`${inputClass} pl-8`}
                              min={0}
                              placeholder="0"
                            />
                          </div>
                          <p className="text-xs text-slate-600 mt-1">Ads, tools, subscriptions</p>
                        </div>
                        <div>
                          <label className={labelClass}>Hours Spent</label>
                          <input
                            type="number"
                            value={ch.hoursSpent}
                            onChange={(e) => updateChannel(key, 'hoursSpent', Math.max(0, Number(e.target.value)))}
                            className={inputClass}
                            min={0}
                            step={0.5}
                            placeholder="0"
                          />
                          <p className="text-xs text-slate-600 mt-1">
                            Time cost: {fmtCurrency(ch.hoursSpent * inputs.hourlyRate)}
                          </p>
                        </div>
                        <div>
                          <label className={labelClass}>New Clients Won</label>
                          <input
                            type="number"
                            value={ch.clientsAcquired}
                            onChange={(e) => updateChannel(key, 'clientsAcquired', Math.max(0, Number(e.target.value)))}
                            className={inputClass}
                            min={0}
                            placeholder="0"
                          />
                          <p className="text-xs text-slate-600 mt-1">From this channel</p>
                        </div>
                      </div>
                      {ch.clientsAcquired > 0 && (
                        <div className="mt-3 bg-white/5 rounded-lg px-4 py-2.5 flex items-center justify-between">
                          <span className="text-xs text-slate-400">Quick CAC Preview</span>
                          <span className="text-sm font-semibold text-cyan-300">
                            {fmtCurrency((ch.moneySpent + ch.hoursSpent * inputs.hourlyRate) / ch.clientsAcquired)}/client
                          </span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {enabledChannels.length === 0 && (
            <div className="mt-4 bg-amber-400/10 border border-amber-400/20 rounded-xl p-4 text-center">
              <p className="text-sm text-amber-400">Enable at least one channel to continue.</p>
            </div>
          )}

          <div className="mt-8 flex items-center justify-center gap-3">
            <button
              onClick={() => setStep(1)}
              className="px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-slate-300 font-medium hover:bg-white/10 transition-all"
            >
              Back
            </button>
            <button
              onClick={() => setStep(3)}
              disabled={enabledChannels.length === 0}
              className={`font-semibold rounded-xl px-10 py-4 transition-all text-lg shadow-lg ${
                enabledChannels.length > 0
                  ? 'bg-gradient-to-r from-cyan-400 to-sky-500 text-white hover:from-cyan-300 hover:to-sky-400 shadow-cyan-500/20'
                  : 'bg-white/5 text-slate-600 cursor-not-allowed shadow-none'
              }`}
            >
              Next: Client Value
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Client Value */}
      {step === 3 && (
        <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
          <h3 className="text-lg font-bold text-white heading-font mb-2">Client Value</h3>
          <p className="text-sm text-slate-400 mb-6">
            Enter your average client metrics. These are used to calculate CLV:CAC ratios and payback periods.
          </p>

          <div className="grid sm:grid-cols-2 gap-5">
            <div className="sm:col-span-2">
              <label className={labelClass}>
                Average Client Lifetime Value (AUD)
                <span className="text-slate-500 font-normal ml-1 text-xs">(total revenue from one client over time)</span>
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm">$</span>
                <input
                  type="number"
                  value={inputs.avgClientLifetimeValue}
                  onChange={(e) => update('avgClientLifetimeValue', Math.max(0, Number(e.target.value)))}
                  className={`${inputClass} pl-8`}
                  min={0}
                  step={500}
                />
              </div>
              <div className="mt-2 flex gap-2 flex-wrap">
                {[3000, 5000, 8000, 12000, 20000].map((val) => (
                  <button
                    key={val}
                    onClick={() => update('avgClientLifetimeValue', val)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                      inputs.avgClientLifetimeValue === val
                        ? 'bg-cyan-400/20 border border-cyan-400/40 text-cyan-300'
                        : 'bg-white/5 border border-white/10 text-slate-500 hover:text-white'
                    }`}
                  >
                    {fmtCurrency(val)}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className={labelClass}>
                Average Project Value (AUD)
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm">$</span>
                <input
                  type="number"
                  value={inputs.avgProjectValue}
                  onChange={(e) => update('avgProjectValue', Math.max(0, Number(e.target.value)))}
                  className={`${inputClass} pl-8`}
                  min={0}
                  step={500}
                />
              </div>
            </div>

            <div>
              <label className={labelClass}>
                Average Client Retention
                <span className="text-slate-500 font-normal ml-1 text-xs">(months)</span>
              </label>
              <input
                type="number"
                value={inputs.avgRetentionMonths}
                onChange={(e) => update('avgRetentionMonths', Math.max(1, Number(e.target.value)))}
                className={inputClass}
                min={1}
                max={120}
              />
              <div className="mt-2 flex gap-2">
                {[3, 6, 12, 18, 24].map((m) => (
                  <button
                    key={m}
                    onClick={() => update('avgRetentionMonths', m)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                      inputs.avgRetentionMonths === m
                        ? 'bg-cyan-400/20 border border-cyan-400/40 text-cyan-300'
                        : 'bg-white/5 border border-white/10 text-slate-500 hover:text-white'
                    }`}
                  >
                    {m}mo
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3">
            <button
              onClick={() => setStep(2)}
              className="px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-slate-300 font-medium hover:bg-white/10 transition-all"
            >
              Back
            </button>
            <button
              onClick={handleCalculate}
              className="bg-gradient-to-r from-cyan-400 to-sky-500 text-white font-semibold rounded-xl px-10 py-4 hover:from-cyan-300 hover:to-sky-400 transition-all text-lg shadow-lg shadow-cyan-500/20"
            >
              Calculate My CAC
            </button>
          </div>
        </div>
      )}

      {/* Step 4: Results */}
      {step === 4 && calculated && (
        <>
          {/* Overall Metrics */}
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white heading-font mb-6 text-center">
              Acquisition Cost Overview
            </h3>

            {/* Hero Metric: Blended CAC */}
            <div className="text-center mb-8">
              <p className="text-sm text-slate-400 mb-2">Blended Cost Per Client</p>
              <p className="text-5xl font-bold text-white heading-font">{fmtCurrency(results.blendedCAC)}</p>
              <p className="text-sm text-slate-500 mt-2">
                across {results.totalClients} client{results.totalClients !== 1 ? 's' : ''} in {PERIOD_LABELS[inputs.timePeriod].toLowerCase()}
              </p>
            </div>

            {/* CLV:CAC Ratio Indicator */}
            <div className="flex justify-center mb-8">
              <div className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full ${
                results.overallRatioHealth === 'excellent' ? 'bg-emerald-400/10 border border-emerald-400/20' :
                results.overallRatioHealth === 'green' ? 'bg-green-400/10 border border-green-400/20' :
                results.overallRatioHealth === 'amber' ? 'bg-amber-400/10 border border-amber-400/20' :
                'bg-red-400/10 border border-red-400/20'
              }`}>
                <div className={`w-2.5 h-2.5 rounded-full ${results.overallRatioBg}`} />
                <span className={`text-sm font-semibold ${results.overallRatioColor}`}>
                  CLV:CAC Ratio {fmtRatio(results.overallCLVCACRatio)} — {results.overallRatioLabel}
                </span>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="bg-white/5 rounded-xl p-4 text-center">
                <p className="text-xs text-slate-500 mb-1">Total Spend</p>
                <p className="text-xl font-bold text-white">{fmtCurrency(results.totalCost)}</p>
                <p className="text-xs text-slate-600 mt-1">
                  {fmtCurrency(results.totalMoneySpent)} + {fmtCurrency(results.totalTimeCost)} time
                </p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 text-center">
                <p className="text-xs text-slate-500 mb-1">Clients Acquired</p>
                <p className="text-xl font-bold text-white">{results.totalClients}</p>
                <p className="text-xs text-slate-600 mt-1">{results.monthlyAcquisitionCapacity.toFixed(1)}/month</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 text-center">
                <p className="text-xs text-slate-500 mb-1">Payback Period</p>
                <p className="text-xl font-bold text-white">{fmtMonths(results.overallPaybackPeriod)}</p>
                <p className="text-xs text-slate-600 mt-1">to recover CAC</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 text-center">
                <p className="text-xs text-slate-500 mb-1">Active Channels</p>
                <p className="text-xl font-bold text-white">{results.channelResults.length}</p>
                <p className="text-xs text-slate-600 mt-1">with clients</p>
              </div>
            </div>
          </div>

          {/* Channel Comparison Bar Chart */}
          {results.channelResults.length > 0 && (
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
              <h3 className="text-lg font-bold text-white heading-font mb-6">CAC by Channel</h3>

              <div className="space-y-4">
                {results.channelResults
                  .sort((a, b) => a.cac - b.cac)
                  .map((ch, idx) => {
                    const barPct = maxCAC > 0 ? (ch.cac / maxCAC) * 100 : 0;
                    const isBest = idx === 0 && results.channelResults.length > 1;
                    const isWorst = idx === results.channelResults.length - 1 && results.channelResults.length > 1;

                    return (
                      <div key={ch.key}>
                        <div className="flex items-center justify-between mb-1.5">
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-slate-300">{ch.label}</span>
                            {isBest && (
                              <span className="px-2 py-0.5 bg-emerald-400/10 border border-emerald-400/20 rounded-full text-xs text-emerald-400 font-medium">
                                Most Efficient
                              </span>
                            )}
                            {isWorst && (
                              <span className="px-2 py-0.5 bg-red-400/10 border border-red-400/20 rounded-full text-xs text-red-400 font-medium">
                                Least Efficient
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-3">
                            <span className={`text-xs font-medium ${ch.ratioColor}`}>
                              {fmtRatio(ch.clvCacRatio)}
                            </span>
                            <span className="text-sm font-bold text-white">{fmtCurrency(ch.cac)}/client</span>
                          </div>
                        </div>
                        <div className="h-5 bg-white/5 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full transition-all duration-700 ${
                              ch.ratioHealth === 'excellent' ? 'bg-gradient-to-r from-emerald-500 to-green-400' :
                              ch.ratioHealth === 'green' ? 'bg-gradient-to-r from-green-500 to-teal-400' :
                              ch.ratioHealth === 'amber' ? 'bg-gradient-to-r from-amber-500 to-orange-400' :
                              'bg-gradient-to-r from-red-500 to-rose-400'
                            }`}
                            style={{ width: `${Math.max(barPct, 4)}%` }}
                          />
                        </div>
                        <div className="flex items-center justify-between mt-1">
                          <span className="text-xs text-slate-600">
                            {ch.clients} client{ch.clients !== 1 ? 's' : ''} | {fmtCurrency(ch.moneyCost)} money + {fmtCurrency(ch.timeCost)} time
                          </span>
                          <span className="text-xs text-slate-600">
                            Payback: {fmtMonths(ch.paybackPeriod)}
                          </span>
                        </div>
                      </div>
                    );
                  })}
              </div>

              {/* Blended CAC Reference Line */}
              <div className="mt-6 pt-4 border-t border-white/10">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-cyan-300 font-medium">Blended Average CAC</span>
                  <span className="text-sm font-bold text-cyan-300">{fmtCurrency(results.blendedCAC)}/client</span>
                </div>
                <div className="mt-2 h-3 bg-white/5 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-400 to-sky-500 rounded-full transition-all duration-700"
                    style={{ width: `${maxCAC > 0 ? Math.max((results.blendedCAC / maxCAC) * 100, 4) : 0}%` }}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Channel Detail Cards */}
          {results.channelResults.length > 0 && (
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
              <h3 className="text-lg font-bold text-white heading-font mb-6">Channel Details</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {results.channelResults.map((ch) => (
                  <div
                    key={ch.key}
                    className={`rounded-xl p-5 border ${
                      ch.ratioHealth === 'excellent' ? 'bg-emerald-400/5 border-emerald-400/15' :
                      ch.ratioHealth === 'green' ? 'bg-green-400/5 border-green-400/15' :
                      ch.ratioHealth === 'amber' ? 'bg-amber-400/5 border-amber-400/15' :
                      'bg-red-400/5 border-red-400/15'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-white font-semibold text-sm">{ch.label}</h4>
                      <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                        ch.ratioHealth === 'excellent' ? 'bg-emerald-400/20 text-emerald-400' :
                        ch.ratioHealth === 'green' ? 'bg-green-400/20 text-green-400' :
                        ch.ratioHealth === 'amber' ? 'bg-amber-400/20 text-amber-400' :
                        'bg-red-400/20 text-red-400'
                      }`}>
                        {ch.ratioLabel}
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <p className="text-xs text-slate-500">CAC</p>
                        <p className="text-lg font-bold text-white">{fmtCurrency(ch.cac)}</p>
                      </div>
                      <div>
                        <p className="text-xs text-slate-500">CLV:CAC</p>
                        <p className={`text-lg font-bold ${ch.ratioColor}`}>{fmtRatio(ch.clvCacRatio)}</p>
                      </div>
                      <div>
                        <p className="text-xs text-slate-500">Total Cost</p>
                        <p className="text-sm font-medium text-slate-300">{fmtCurrency(ch.totalCost)}</p>
                      </div>
                      <div>
                        <p className="text-xs text-slate-500">Clients Won</p>
                        <p className="text-sm font-medium text-slate-300">{ch.clients}</p>
                      </div>
                      <div>
                        <p className="text-xs text-slate-500">Payback</p>
                        <p className="text-sm font-medium text-slate-300">{fmtMonths(ch.paybackPeriod)}</p>
                      </div>
                      <div>
                        <p className="text-xs text-slate-500">Monthly Rate</p>
                        <p className="text-sm font-medium text-slate-300">{ch.monthlyAcquisitionRate.toFixed(1)}/mo</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Cost Breakdown: Money vs Time */}
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white heading-font mb-6">Cost Breakdown: Money vs Time</h3>

            <div className="flex flex-col sm:flex-row items-center gap-8">
              {/* CSS Donut Chart */}
              <div className="relative w-48 h-48 flex-shrink-0">
                {(() => {
                  const total = results.totalCost;
                  const moneyPct = total > 0 ? (results.totalMoneySpent / total) * 100 : 50;
                  const timePct = total > 0 ? (results.totalTimeCost / total) * 100 : 50;

                  return (
                    <>
                      <div
                        className="w-48 h-48 rounded-full"
                        style={{
                          background: `conic-gradient(#22d3ee 0% ${moneyPct}%, #0ea5e9 ${moneyPct}% 100%)`,
                        }}
                      />
                      <div className="absolute inset-6 bg-[#0B1120] rounded-full flex items-center justify-center">
                        <div className="text-center">
                          <p className="text-2xl font-bold text-white">{fmtCurrency(total)}</p>
                          <p className="text-xs text-slate-500">total spend</p>
                        </div>
                      </div>
                    </>
                  );
                })()}
              </div>

              {/* Legend */}
              <div className="flex-1 space-y-4 w-full">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-3 h-3 rounded-sm bg-cyan-400 flex-shrink-0" />
                    <span className="text-sm text-slate-300">Direct Money Spent</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium text-white">{fmtCurrency(results.totalMoneySpent)}</span>
                    <span className="text-xs text-slate-500 w-12 text-right">
                      {results.totalCost > 0 ? fmtPct((results.totalMoneySpent / results.totalCost) * 100) : '0%'}
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-3 h-3 rounded-sm bg-sky-500 flex-shrink-0" />
                    <span className="text-sm text-slate-300">Time Cost (opportunity cost)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium text-white">{fmtCurrency(results.totalTimeCost)}</span>
                    <span className="text-xs text-slate-500 w-12 text-right">
                      {results.totalCost > 0 ? fmtPct((results.totalTimeCost / results.totalCost) * 100) : '0%'}
                    </span>
                  </div>
                </div>
                <div className="pt-3 border-t border-white/10">
                  <p className="text-xs text-slate-500">
                    Time cost is calculated at your hourly rate of {fmtCurrency(inputs.hourlyRate)}/hr. This represents
                    the billable revenue you could have earned instead of spending time on marketing.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Recommendations */}
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white heading-font mb-6">Recommendations</h3>
            <div className="space-y-3">
              {results.recommendations.map((rec, i) => (
                <div key={i} className="flex items-start gap-3 bg-white/5 rounded-xl p-4">
                  <div className="w-6 h-6 rounded-full bg-cyan-400/20 border border-cyan-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-cyan-400 text-xs font-bold">{i + 1}</span>
                  </div>
                  <p className="text-sm text-slate-300">{rec}</p>
                </div>
              ))}
            </div>

            {/* Budget Reallocation */}
            {results.reallocationSuggestions.length > 0 && (
              <div className="mt-6 bg-gradient-to-r from-cyan-400/10 to-sky-500/10 border border-cyan-400/20 rounded-xl p-5">
                <p className="text-sm text-cyan-400 font-medium mb-3">Budget Reallocation Suggestions</p>
                <div className="space-y-3">
                  {results.reallocationSuggestions.map((sug, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-cyan-400 text-xs mt-0.5 font-bold">&rarr;</span>
                      <p className="text-sm text-slate-300">{sug}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CLV:CAC Ratio Guide */}
            <div className="mt-6 bg-white/5 rounded-xl p-5">
              <p className="text-sm text-white font-medium mb-3">CLV:CAC Ratio Guide</p>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-red-400 flex-shrink-0" />
                  <span className="text-xs text-slate-400"><span className="text-white font-medium">Below 1:1</span> — Losing money on acquisition. Unsustainable.</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-amber-400 flex-shrink-0" />
                  <span className="text-xs text-slate-400"><span className="text-white font-medium">1:1 to 3:1</span> — Profitable but thin margins. Needs improvement.</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-green-400 flex-shrink-0" />
                  <span className="text-xs text-slate-400"><span className="text-white font-medium">3:1 to 5:1</span> — Healthy. Good return on acquisition investment.</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 flex-shrink-0" />
                  <span className="text-xs text-slate-400"><span className="text-white font-medium">5:1 and above</span> — Excellent. May be underinvesting in growth.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Copy Report & Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={handleCopy}
              className="bg-gradient-to-r from-cyan-400 to-sky-500 text-white font-semibold rounded-xl px-8 py-4 hover:from-cyan-300 hover:to-sky-400 transition-all"
            >
              {copied ? 'Copied to Clipboard!' : 'Copy CAC Analysis Report'}
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
                href="/tools/client-lifetime-value"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/30 rounded-xl p-4 transition-all group"
              >
                <p className="text-white font-medium text-sm group-hover:text-cyan-300 transition-colors">
                  Client Lifetime Value Calculator
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Calculate how much each client is worth over time
                </p>
              </a>
              <a
                href="/tools/rate-calculator"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/30 rounded-xl p-4 transition-all group"
              >
                <p className="text-white font-medium text-sm group-hover:text-cyan-300 transition-colors">
                  Freelance Rate Calculator
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Calculate your ideal hourly rate based on income goals
                </p>
              </a>
              <a
                href="/tools/capacity-planner"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/30 rounded-xl p-4 transition-all group"
              >
                <p className="text-white font-medium text-sm group-hover:text-cyan-300 transition-colors">
                  Work Capacity Planner
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Calculate how many clients you can realistically handle
                </p>
              </a>
            </div>
          </div>

          <div className="text-center">
            <p className="text-xs text-slate-500 max-w-2xl mx-auto">
              This tool provides estimates based on your inputs. Actual acquisition costs may vary depending on
              market conditions, seasonal factors, and channel-specific dynamics. Results include time-cost
              calculations as opportunity cost at your hourly rate. Review your CAC quarterly for best results.
              This is not financial advice.
            </p>
          </div>
        </>
      )}
    </div>
  );
}
