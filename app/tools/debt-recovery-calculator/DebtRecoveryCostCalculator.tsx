'use client';

import { useState, useMemo } from 'react';

/* ---- Types ---- */

type Step = 1 | 2 | 3 | 4;

type State = 'NSW' | 'VIC' | 'QLD' | 'SA' | 'WA' | 'TAS' | 'NT' | 'ACT';
type OverdueBand = '30-60' | '60-90' | '90-180' | '180+';
type ClientType = 'individual' | 'company' | 'government';

interface InvoiceDetails {
  amount: string;
  overdueBand: OverdueBand | '';
  state: State | '';
  letterOfDemandSent: boolean | null;
  clientType: ClientType | '';
  hourlyRate: string;
}

interface RecoveryMethod {
  id: string;
  name: string;
  costLabel: string;
  costMin: number;
  costMax: number;
  isPercentage: boolean;
  percentageMin?: number;
  percentageMax?: number;
  timeLabel: string;
  timeWeeksMin: number;
  timeWeeksMax: number;
  successRateMin: number;
  successRateMax: number;
  bestFor: string;
  description: string;
  hoursEstimate: number;
}

interface TribunalInfo {
  name: string;
  abbreviation: string;
  filingMin: number;
  filingMax: number;
  civilLimit: number;
  civilLimitLabel: string;
}

interface CostBenefitResult {
  method: RecoveryMethod;
  estimatedCost: number;
  netRecovery: number;
  costAsPercentage: number;
  successRate: number;
  riskAdjustedRecovery: number;
  roi: number;
  opportunityCost: number;
  totalCostIncOpportunity: number;
  timeWeeks: number;
  hoursInvestment: number;
}

interface ActionStep {
  priority: number;
  title: string;
  description: string;
  estimatedCost: string;
  estimatedTime: string;
  urgency: 'start-here' | 'recommended' | 'consider' | 'last-resort';
}

/* ---- Constants ---- */

const STATES: { value: State; label: string }[] = [
  { value: 'NSW', label: 'New South Wales' },
  { value: 'VIC', label: 'Victoria' },
  { value: 'QLD', label: 'Queensland' },
  { value: 'SA', label: 'South Australia' },
  { value: 'WA', label: 'Western Australia' },
  { value: 'TAS', label: 'Tasmania' },
  { value: 'NT', label: 'Northern Territory' },
  { value: 'ACT', label: 'Australian Capital Territory' },
];

const OVERDUE_BANDS: { value: OverdueBand; label: string }[] = [
  { value: '30-60', label: '30 - 60 days' },
  { value: '60-90', label: '60 - 90 days' },
  { value: '90-180', label: '90 - 180 days' },
  { value: '180+', label: '180+ days' },
];

const TRIBUNAL_INFO: Record<State, TribunalInfo> = {
  NSW: { name: 'NSW Civil & Administrative Tribunal', abbreviation: 'NCAT', filingMin: 53, filingMax: 500, civilLimit: 40000, civilLimitLabel: '$40K civil' },
  VIC: { name: 'Victorian Civil & Administrative Tribunal', abbreviation: 'VCAT', filingMin: 65, filingMax: 650, civilLimit: 100000, civilLimitLabel: '$100K civil' },
  QLD: { name: 'Queensland Civil & Administrative Tribunal', abbreviation: 'QCAT', filingMin: 75, filingMax: 380, civilLimit: 25000, civilLimitLabel: '$25K minor' },
  SA: { name: 'South Australian Civil & Administrative Tribunal', abbreviation: 'SACAT', filingMin: 42, filingMax: 283, civilLimit: 25000, civilLimitLabel: '$25K' },
  WA: { name: 'State Administrative Tribunal', abbreviation: 'SAT', filingMin: 45, filingMax: 240, civilLimit: 25000, civilLimitLabel: '$25K' },
  TAS: { name: 'Magistrates Court of Tasmania', abbreviation: 'Magistrates Court', filingMin: 80, filingMax: 200, civilLimit: 50000, civilLimitLabel: '$50K' },
  NT: { name: 'NT Civil & Administrative Tribunal', abbreviation: 'NTCAT', filingMin: 50, filingMax: 150, civilLimit: 25000, civilLimitLabel: '$25K' },
  ACT: { name: 'ACT Civil & Administrative Tribunal', abbreviation: 'ACAT', filingMin: 48, filingMax: 340, civilLimit: 25000, civilLimitLabel: '$25K' },
};

function getRecoveryMethods(amount: number, state: State): RecoveryMethod[] {
  const tribunal = TRIBUNAL_INFO[state];
  const filingFee = amount < 10000
    ? tribunal.filingMin
    : amount < tribunal.civilLimit
      ? Math.round(tribunal.filingMin + (tribunal.filingMax - tribunal.filingMin) * (amount / tribunal.civilLimit))
      : tribunal.filingMax;

  return [
    {
      id: 'lod-diy',
      name: 'Letter of Demand (DIY)',
      costLabel: '$0 - $50',
      costMin: 0,
      costMax: 50,
      isPercentage: false,
      timeLabel: '1 - 2 weeks',
      timeWeeksMin: 1,
      timeWeeksMax: 2,
      successRateMin: 40,
      successRateMax: 60,
      bestFor: 'All debts — always start here',
      description: 'A formal written demand sent directly to the debtor. Free if you write it yourself, or use a template. Sets a deadline (usually 14 days) and warns of further action.',
      hoursEstimate: 2,
    },
    {
      id: 'lod-lawyer',
      name: 'Letter of Demand (Lawyer)',
      costLabel: '$200 - $500',
      costMin: 200,
      costMax: 500,
      isPercentage: false,
      timeLabel: '1 - 2 weeks',
      timeWeeksMin: 1,
      timeWeeksMax: 2,
      successRateMin: 60,
      successRateMax: 75,
      bestFor: 'Debts over $1,000',
      description: 'A solicitor-drafted letter on law firm letterhead. Carries significantly more weight than a DIY letter. Many debtors pay immediately upon receiving one.',
      hoursEstimate: 3,
    },
    {
      id: 'collection-agency',
      name: 'Debt Collection Agency',
      costLabel: '10 - 25% of debt',
      costMin: Math.round(amount * 0.10),
      costMax: Math.round(amount * 0.25),
      isPercentage: true,
      percentageMin: 10,
      percentageMax: 25,
      timeLabel: '1 - 6 months',
      timeWeeksMin: 4,
      timeWeeksMax: 26,
      successRateMin: 50,
      successRateMax: 70,
      bestFor: 'Debts over $500',
      description: 'Professional collectors handle all debtor communication. Most operate on a no-win-no-fee basis but charge 10-25% of the recovered amount. Hands-off for you.',
      hoursEstimate: 3,
    },
    {
      id: 'tribunal',
      name: `${tribunal.abbreviation} (Tribunal)`,
      costLabel: `$${tribunal.filingMin} - $${tribunal.filingMax} (filing)`,
      costMin: tribunal.filingMin,
      costMax: filingFee,
      isPercentage: false,
      timeLabel: '2 - 6 months',
      timeWeeksMin: 8,
      timeWeeksMax: 26,
      successRateMin: 60,
      successRateMax: 80,
      bestFor: `Claims under $${(tribunal.civilLimit / 1000).toFixed(0)}K in ${state}`,
      description: `${tribunal.name} handles civil disputes without the formality of a court. Designed for self-representation — no lawyer needed. Filing fee based on claim amount.`,
      hoursEstimate: 20,
    },
    {
      id: 'local-court',
      name: 'Local / District Court',
      costLabel: '$200 - $2,000+',
      costMin: 200,
      costMax: 2000,
      isPercentage: false,
      timeLabel: '3 - 12 months',
      timeWeeksMin: 12,
      timeWeeksMax: 52,
      successRateMin: 70,
      successRateMax: 85,
      bestFor: 'Debts $25K - $100K+',
      description: 'Formal court proceedings for larger claims. You will likely need legal representation which adds $2,000-$10,000+ to costs. Stronger enforcement powers.',
      hoursEstimate: 40,
    },
    {
      id: 'mediation',
      name: 'Mediation',
      costLabel: '$500 - $2,000',
      costMin: 500,
      costMax: 2000,
      isPercentage: false,
      timeLabel: '2 - 4 weeks',
      timeWeeksMin: 2,
      timeWeeksMax: 4,
      successRateMin: 65,
      successRateMax: 80,
      bestFor: 'Ongoing business relationships',
      description: 'A neutral mediator facilitates negotiation between you and the debtor. Preserves relationships and often finds creative solutions. Both parties must agree to participate.',
      hoursEstimate: 8,
    },
  ];
}

function fmt(n: number): string {
  return new Intl.NumberFormat('en-AU', { style: 'currency', currency: 'AUD', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(n);
}

function fmtPct(n: number): string {
  return `${Math.round(n)}%`;
}

/* ---- Component ---- */

export default function DebtRecoveryCostCalculator() {
  const [step, setStep] = useState<Step>(1);
  const [copied, setCopied] = useState(false);
  const [selectedMethods, setSelectedMethods] = useState<Set<string>>(new Set());
  const [details, setDetails] = useState<InvoiceDetails>({
    amount: '',
    overdueBand: '',
    state: '',
    letterOfDemandSent: null,
    clientType: '',
    hourlyRate: '',
  });

  const amount = parseFloat(details.amount) || 0;
  const hourlyRate = parseFloat(details.hourlyRate) || 100;
  const state = details.state as State;

  const step1Complete =
    amount > 0 &&
    details.overdueBand !== '' &&
    details.state !== '' &&
    details.letterOfDemandSent !== null &&
    details.clientType !== '' &&
    hourlyRate > 0;

  const methods = useMemo(() => {
    if (!details.state) return [];
    return getRecoveryMethods(amount, state);
  }, [amount, details.state, state]);

  const costBenefitResults: CostBenefitResult[] = useMemo(() => {
    if (amount <= 0) return [];
    return methods.map((method) => {
      const estimatedCost = Math.round((method.costMin + method.costMax) / 2);
      const successRate = (method.successRateMin + method.successRateMax) / 2 / 100;
      const netRecovery = amount - estimatedCost;
      const costAsPercentage = amount > 0 ? (estimatedCost / amount) * 100 : 0;
      const riskAdjustedRecovery = Math.round(amount * successRate - estimatedCost);
      const hoursInvestment = method.hoursEstimate;
      const opportunityCost = hoursInvestment * hourlyRate;
      const totalCostIncOpportunity = estimatedCost + opportunityCost;
      const roi = totalCostIncOpportunity > 0
        ? ((amount * successRate - totalCostIncOpportunity) / totalCostIncOpportunity) * 100
        : 0;
      const timeWeeks = Math.round((method.timeWeeksMin + method.timeWeeksMax) / 2);

      return {
        method,
        estimatedCost,
        netRecovery,
        costAsPercentage,
        successRate: successRate * 100,
        riskAdjustedRecovery,
        roi,
        opportunityCost,
        totalCostIncOpportunity,
        timeWeeks,
        hoursInvestment,
      };
    });
  }, [amount, methods, hourlyRate]);

  const selectedCostBenefits = useMemo(
    () => costBenefitResults.filter((r) => selectedMethods.has(r.method.id)),
    [costBenefitResults, selectedMethods]
  );

  const bestMethod = useMemo(() => {
    if (costBenefitResults.length === 0) return null;
    return costBenefitResults.reduce((best, current) =>
      current.riskAdjustedRecovery > best.riskAdjustedRecovery ? current : best
    );
  }, [costBenefitResults]);

  const actionPlan: ActionStep[] = useMemo(() => {
    if (!details.state || amount <= 0) return [];
    const steps: ActionStep[] = [];
    const tribunal = TRIBUNAL_INFO[state];

    // Step 1: Letter of Demand if not sent
    if (!details.letterOfDemandSent) {
      steps.push({
        priority: 1,
        title: 'Send a Letter of Demand (DIY)',
        description: `Write a formal letter demanding payment of ${fmt(amount)} within 14 days. Include the invoice details, work completed, and state that you will pursue further action if not paid. Send via email with read receipt AND registered post. This costs nothing and resolves 40-60% of unpaid invoices.`,
        estimatedCost: '$0 - $50',
        estimatedTime: '1 - 2 weeks',
        urgency: 'start-here',
      });
    }

    // Step 2: Consider lawyer LOD for larger amounts
    if (amount >= 1000) {
      steps.push({
        priority: steps.length + 1,
        title: 'Escalate with a Lawyer Letter of Demand',
        description: `If the DIY letter does not get a response, a solicitor-drafted letter on law firm letterhead significantly increases the response rate (60-75%). For a ${fmt(amount)} debt, the $200-$500 investment is proportionate and often pays for itself immediately.`,
        estimatedCost: '$200 - $500',
        estimatedTime: '1 - 2 weeks',
        urgency: amount >= 2000 ? 'recommended' : 'consider',
      });
    }

    // Step 3: Debt collection agency
    if (amount >= 500) {
      const agencyCostMin = Math.round(amount * 0.10);
      const agencyCostMax = Math.round(amount * 0.25);
      const agencyWorthIt = amount >= 2000;
      steps.push({
        priority: steps.length + 1,
        title: 'Engage a Debt Collection Agency',
        description: `A professional agency will handle all communication for 10-25% of the recovered amount (${fmt(agencyCostMin)} - ${fmt(agencyCostMax)} on your ${fmt(amount)} debt). Most operate on no-win-no-fee. ${agencyWorthIt ? 'At this debt level, the commission is proportionate to the recovery.' : 'The commission percentage is relatively high for this debt level — consider only if other options fail.'}`,
        estimatedCost: `${fmt(agencyCostMin)} - ${fmt(agencyCostMax)} (commission)`,
        estimatedTime: '1 - 6 months',
        urgency: agencyWorthIt ? 'recommended' : 'consider',
      });
    }

    // Step 4: Tribunal (if within limit)
    if (amount <= tribunal.civilLimit) {
      steps.push({
        priority: steps.length + 1,
        title: `File a Claim with ${tribunal.abbreviation}`,
        description: `${tribunal.name} handles claims up to ${tribunal.civilLimitLabel}. Filing fee is approximately $${tribunal.filingMin} - $${tribunal.filingMax} based on the claim amount. Designed for self-representation — you do not need a lawyer. Expect 2-6 months for resolution. Success rate of 60-80% with good documentation.`,
        estimatedCost: `$${tribunal.filingMin} - $${tribunal.filingMax} (filing fee)`,
        estimatedTime: '2 - 6 months',
        urgency: amount >= 1000 ? 'recommended' : 'consider',
      });
    }

    // Step 5: Local Court for larger amounts
    if (amount > 10000) {
      steps.push({
        priority: steps.length + 1,
        title: 'Consider Local / District Court',
        description: `For a ${fmt(amount)} debt${amount > tribunal.civilLimit ? ` (exceeding the ${tribunal.abbreviation} limit of ${tribunal.civilLimitLabel})` : ''}, a Local or District Court claim carries stronger enforcement powers. You will likely need legal representation ($2,000-$10,000+ in legal fees). Court orders allow wage garnishment and asset seizure.`,
        estimatedCost: '$200 - $2,000+ (filing) + $2,000 - $10,000+ (legal)',
        estimatedTime: '3 - 12 months',
        urgency: amount > tribunal.civilLimit ? 'recommended' : 'last-resort',
      });
    }

    // Step 6: Mediation if relationship matters
    if (details.clientType === 'company' || details.clientType === 'government') {
      steps.push({
        priority: steps.length + 1,
        title: 'Consider Mediation',
        description: `Since the debtor is a ${details.clientType === 'government' ? 'government entity' : 'company'}, mediation may preserve the business relationship while still recovering the debt. A neutral mediator facilitates negotiation — success rate of 65-80%. Both parties must agree to participate.`,
        estimatedCost: '$500 - $2,000',
        estimatedTime: '2 - 4 weeks',
        urgency: 'consider',
      });
    }

    return steps;
  }, [amount, details.state, details.letterOfDemandSent, details.clientType, state]);

  const toggleMethod = (id: string) => {
    setSelectedMethods((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const getDecisionIndicator = (result: CostBenefitResult) => {
    if (result.riskAdjustedRecovery > amount * 0.3 && result.roi > 50) {
      return { label: 'Worth Pursuing', color: 'text-green-400', bg: 'bg-green-400/10', border: 'border-green-400/30' };
    }
    if (result.riskAdjustedRecovery > 0 && result.roi > 0) {
      return { label: 'Consider Carefully', color: 'text-amber-400', bg: 'bg-amber-400/10', border: 'border-amber-400/30' };
    }
    return { label: 'Probably Not Worth It', color: 'text-red-400', bg: 'bg-red-400/10', border: 'border-red-400/30' };
  };

  const generateReport = (): string => {
    const lines: string[] = [];
    lines.push('='.repeat(60));
    lines.push('DEBT RECOVERY COST-BENEFIT ANALYSIS');
    lines.push('='.repeat(60));
    lines.push('');
    lines.push('INVOICE DETAILS');
    lines.push('-'.repeat(45));
    lines.push(`Outstanding Amount:   ${fmt(amount)}`);
    lines.push(`Days Overdue:         ${details.overdueBand}`);
    lines.push(`State:                ${details.state}`);
    lines.push(`Letter of Demand:     ${details.letterOfDemandSent ? 'Sent' : 'Not sent'}`);
    lines.push(`Client Type:          ${details.clientType}`);
    lines.push(`Your Hourly Rate:     ${fmt(hourlyRate)}/hr`);
    lines.push('');
    lines.push('RECOVERY OPTIONS ANALYSIS');
    lines.push('-'.repeat(45));
    costBenefitResults.forEach((r) => {
      const indicator = getDecisionIndicator(r);
      lines.push(`${r.method.name}`);
      lines.push(`  Estimated Cost:         ${fmt(r.estimatedCost)}`);
      lines.push(`  Net Recovery:           ${fmt(r.netRecovery)}`);
      lines.push(`  Success Rate:           ${fmtPct(r.successRate)}`);
      lines.push(`  Risk-Adjusted Recovery: ${fmt(r.riskAdjustedRecovery)}`);
      lines.push(`  Time Estimate:          ~${r.timeWeeks} weeks`);
      lines.push(`  Hours Investment:       ${r.hoursInvestment} hrs (${fmt(r.opportunityCost)} opportunity cost)`);
      lines.push(`  ROI:                    ${Math.round(r.roi)}%`);
      lines.push(`  Verdict:                ${indicator.label}`);
      lines.push('');
    });
    if (bestMethod) {
      lines.push('RECOMMENDED APPROACH');
      lines.push('-'.repeat(45));
      lines.push(`Best method: ${bestMethod.method.name}`);
      lines.push(`Expected net recovery: ${fmt(bestMethod.riskAdjustedRecovery)}`);
      lines.push('');
    }
    lines.push('ACTION PLAN');
    lines.push('-'.repeat(45));
    actionPlan.forEach((s) => {
      lines.push(`${s.priority}. ${s.title}`);
      lines.push(`   Cost: ${s.estimatedCost} | Time: ${s.estimatedTime}`);
      lines.push(`   ${s.description}`);
      lines.push('');
    });
    lines.push('-'.repeat(60));
    lines.push('Generated by InvoiceFlow Debt Recovery Cost Calculator');
    lines.push('https://www.invoiceflow.au/tools/debt-recovery-calculator');
    lines.push('-'.repeat(60));
    return lines.join('\n');
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateReport()).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <div className="space-y-8">
      {/* Step Indicator */}
      <div className="flex items-center justify-center gap-1.5 sm:gap-3 mb-4 flex-wrap">
        {([1, 2, 3, 4] as const).map((s) => (
          <button
            key={s}
            onClick={() => {
              if (s === 1) setStep(1);
              else if (s === 2 && step1Complete) setStep(2);
              else if (s === 3 && step1Complete) setStep(3);
              else if (s === 4 && step1Complete) setStep(4);
            }}
            className={`flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
              step === s
                ? 'bg-gradient-to-r from-red-400/20 to-rose-500/20 border border-red-400/40 text-red-300'
                : s <= step || (step1Complete && s <= 4)
                  ? 'bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10'
                  : 'bg-white/[0.02] border border-white/[0.05] text-slate-600 cursor-default'
            }`}
          >
            <div className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${
              step === s
                ? 'bg-red-400/30 text-red-300'
                : s < step
                  ? 'bg-white/10 text-slate-400'
                  : 'bg-white/5 text-slate-600'
            }`}>
              {s < step ? '\u2713' : s}
            </div>
            <span className="hidden sm:inline">
              {s === 1 ? 'Invoice Details' : s === 2 ? 'Compare Options' : s === 3 ? 'Cost-Benefit' : 'Action Plan'}
            </span>
          </button>
        ))}
      </div>

      {/* Step 1: Invoice Details */}
      {step === 1 && (
        <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
          <h3 className="text-lg font-bold text-white heading-font mb-2">Invoice Details</h3>
          <p className="text-sm text-slate-400 mb-6">
            Enter the details of your unpaid invoice. This information will be used to calculate
            recovery costs specific to your state and situation.
          </p>

          <div className="space-y-5">
            {/* Outstanding Amount */}
            <div className="bg-white/[0.04] border border-white/[0.06] rounded-xl p-5">
              <label className="block text-sm font-medium text-white mb-2">
                Outstanding Amount ($)
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm">$</span>
                <input
                  type="number"
                  min="0"
                  step="100"
                  placeholder="5,000"
                  value={details.amount}
                  onChange={(e) => setDetails((prev) => ({ ...prev, amount: e.target.value }))}
                  className="w-full pl-8 pr-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-red-400/40 focus:ring-1 focus:ring-red-400/20 transition-all"
                />
              </div>
            </div>

            {/* Overdue Band */}
            <div className="bg-white/[0.04] border border-white/[0.06] rounded-xl p-5">
              <label className="block text-sm font-medium text-white mb-2">
                How Many Days Overdue?
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {OVERDUE_BANDS.map((band) => (
                  <button
                    key={band.value}
                    onClick={() => setDetails((prev) => ({ ...prev, overdueBand: band.value }))}
                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      details.overdueBand === band.value
                        ? 'border-red-400/40 bg-red-400/10 text-red-300'
                        : 'bg-white/[0.03] border border-white/[0.08] text-slate-400 hover:bg-white/[0.06] hover:text-white hover:border-white/15'
                    }`}
                  >
                    {band.label}
                  </button>
                ))}
              </div>
            </div>

            {/* State */}
            <div className="bg-white/[0.04] border border-white/[0.06] rounded-xl p-5">
              <label className="block text-sm font-medium text-white mb-2">
                State / Territory
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {STATES.map((s) => (
                  <button
                    key={s.value}
                    onClick={() => setDetails((prev) => ({ ...prev, state: s.value }))}
                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      details.state === s.value
                        ? 'border-red-400/40 bg-red-400/10 text-red-300'
                        : 'bg-white/[0.03] border border-white/[0.08] text-slate-400 hover:bg-white/[0.06] hover:text-white hover:border-white/15'
                    }`}
                  >
                    {s.value}
                  </button>
                ))}
              </div>
            </div>

            {/* Letter of Demand */}
            <div className="bg-white/[0.04] border border-white/[0.06] rounded-xl p-5">
              <label className="block text-sm font-medium text-white mb-2">
                Have You Sent a Letter of Demand?
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { value: true, label: 'Yes, I have sent one' },
                  { value: false, label: 'No, not yet' },
                ].map((option) => (
                  <button
                    key={String(option.value)}
                    onClick={() => setDetails((prev) => ({ ...prev, letterOfDemandSent: option.value }))}
                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      details.letterOfDemandSent === option.value
                        ? 'border-red-400/40 bg-red-400/10 text-red-300'
                        : 'bg-white/[0.03] border border-white/[0.08] text-slate-400 hover:bg-white/[0.06] hover:text-white hover:border-white/15'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Client Type */}
            <div className="bg-white/[0.04] border border-white/[0.06] rounded-xl p-5">
              <label className="block text-sm font-medium text-white mb-2">
                Client Type
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { value: 'individual' as ClientType, label: 'Individual' },
                  { value: 'company' as ClientType, label: 'Company' },
                  { value: 'government' as ClientType, label: 'Government' },
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setDetails((prev) => ({ ...prev, clientType: option.value }))}
                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      details.clientType === option.value
                        ? 'border-red-400/40 bg-red-400/10 text-red-300'
                        : 'bg-white/[0.03] border border-white/[0.08] text-slate-400 hover:bg-white/[0.06] hover:text-white hover:border-white/15'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Hourly Rate */}
            <div className="bg-white/[0.04] border border-white/[0.06] rounded-xl p-5">
              <label className="block text-sm font-medium text-white mb-2">
                Your Hourly Rate (for opportunity cost calculation)
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm">$</span>
                <input
                  type="number"
                  min="0"
                  step="10"
                  placeholder="100"
                  value={details.hourlyRate}
                  onChange={(e) => setDetails((prev) => ({ ...prev, hourlyRate: e.target.value }))}
                  className="w-full pl-8 pr-16 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-red-400/40 focus:ring-1 focus:ring-red-400/20 transition-all"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm">/hr</span>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={() => { setStep(2); setSelectedMethods(new Set(['lod-diy', 'tribunal'])); }}
              disabled={!step1Complete}
              className={`rounded-xl px-10 py-4 font-semibold text-lg transition-all ${
                step1Complete
                  ? 'bg-gradient-to-r from-red-400 to-rose-500 text-white hover:from-red-300 hover:to-rose-400 shadow-lg shadow-red-500/20'
                  : 'bg-white/5 border border-white/10 text-slate-600 cursor-not-allowed'
              }`}
            >
              Compare Recovery Options
            </button>
            {!step1Complete && (
              <p className="text-xs text-slate-500 mt-3">
                Complete all fields to continue
              </p>
            )}
          </div>
        </div>
      )}

      {/* Step 2: Recovery Options Comparison */}
      {step === 2 && (
        <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
          <h3 className="text-lg font-bold text-white heading-font mb-2">Recovery Options Comparison</h3>
          <p className="text-sm text-slate-400 mb-6">
            Here are all debt recovery methods available in {details.state} for your {fmt(amount)} unpaid invoice.
            Select the methods you want to compare in the cost-benefit analysis.
          </p>

          {/* State-specific tribunal callout */}
          {details.state && (
            <div className="bg-gradient-to-r from-red-400/10 to-rose-500/10 border border-red-400/20 rounded-xl p-4 mb-6">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-red-400 text-xs font-bold bg-red-400/20 border border-red-400/30 rounded-full px-2 py-0.5">{details.state}</span>
                <span className="text-sm font-medium text-red-400">{TRIBUNAL_INFO[state].name}</span>
              </div>
              <p className="text-xs text-slate-400">
                Filing fee: ${TRIBUNAL_INFO[state].filingMin} - ${TRIBUNAL_INFO[state].filingMax} | Civil limit: {TRIBUNAL_INFO[state].civilLimitLabel}
                {amount > TRIBUNAL_INFO[state].civilLimit && (
                  <span className="text-amber-400 ml-2">
                    (Your debt of {fmt(amount)} exceeds the tribunal limit — you may need to file in court)
                  </span>
                )}
              </p>
            </div>
          )}

          {/* Methods Comparison Cards */}
          <div className="space-y-3">
            {methods.map((method) => {
              const isSelected = selectedMethods.has(method.id);
              const cbResult = costBenefitResults.find((r) => r.method.id === method.id);
              return (
                <button
                  key={method.id}
                  onClick={() => toggleMethod(method.id)}
                  className={`w-full text-left rounded-xl p-5 transition-all ${
                    isSelected
                      ? 'bg-red-400/5 border-2 border-red-400/30'
                      : 'bg-white/[0.04] border border-white/[0.06] hover:border-white/15'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <div className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                          isSelected ? 'border-red-400 bg-red-400' : 'border-white/20 bg-transparent'
                        }`}>
                          {isSelected && <span className="text-white text-xs font-bold">{'\u2713'}</span>}
                        </div>
                        <h4 className="text-white font-semibold text-sm">{method.name}</h4>
                      </div>
                      <p className="text-xs text-slate-500 ml-7 mb-3">{method.description}</p>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 ml-7">
                        <div>
                          <p className="text-xs text-slate-500">Cost</p>
                          <p className="text-sm font-medium text-white">{method.costLabel}</p>
                        </div>
                        <div>
                          <p className="text-xs text-slate-500">Timeframe</p>
                          <p className="text-sm font-medium text-white">{method.timeLabel}</p>
                        </div>
                        <div>
                          <p className="text-xs text-slate-500">Success Rate</p>
                          <p className="text-sm font-medium text-white">{method.successRateMin}-{method.successRateMax}%</p>
                        </div>
                        <div>
                          <p className="text-xs text-slate-500">Best For</p>
                          <p className="text-sm font-medium text-white">{method.bestFor}</p>
                        </div>
                      </div>
                    </div>
                    {cbResult && (
                      <div className="text-right flex-shrink-0 hidden sm:block">
                        <p className="text-xs text-slate-500">Risk-Adjusted Recovery</p>
                        <p className={`text-lg font-bold ${cbResult.riskAdjustedRecovery > 0 ? 'text-green-400' : 'text-red-400'}`}>
                          {fmt(cbResult.riskAdjustedRecovery)}
                        </p>
                      </div>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-8 flex items-center justify-center gap-3">
            <button
              onClick={() => setStep(1)}
              className="px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-slate-300 font-medium hover:bg-white/10 transition-all"
            >
              Back
            </button>
            <button
              onClick={() => setStep(3)}
              disabled={selectedMethods.size === 0}
              className={`rounded-xl px-10 py-4 font-semibold text-lg transition-all ${
                selectedMethods.size > 0
                  ? 'bg-gradient-to-r from-red-400 to-rose-500 text-white hover:from-red-300 hover:to-rose-400 shadow-lg shadow-red-500/20'
                  : 'bg-white/5 border border-white/10 text-slate-600 cursor-not-allowed'
              }`}
            >
              See Cost-Benefit Analysis
            </button>
          </div>
          {selectedMethods.size === 0 && (
            <p className="text-xs text-slate-500 mt-3 text-center">
              Select at least one recovery method to continue
            </p>
          )}
        </div>
      )}

      {/* Step 3: Cost-Benefit Analysis */}
      {step === 3 && (
        <>
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white heading-font mb-2">Cost-Benefit Analysis</h3>
            <p className="text-sm text-slate-400 mb-6">
              Detailed financial analysis of your selected recovery methods for the {fmt(amount)} unpaid invoice in {details.state}.
            </p>

            {/* Summary Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              <div className="bg-white/[0.04] border border-white/[0.06] rounded-xl p-4 text-center">
                <p className="text-xs text-slate-500 mb-1">Debt Amount</p>
                <p className="text-xl font-bold text-white">{fmt(amount)}</p>
              </div>
              <div className="bg-white/[0.04] border border-white/[0.06] rounded-xl p-4 text-center">
                <p className="text-xs text-slate-500 mb-1">Days Overdue</p>
                <p className="text-xl font-bold text-white">{details.overdueBand}</p>
              </div>
              <div className="bg-white/[0.04] border border-white/[0.06] rounded-xl p-4 text-center">
                <p className="text-xs text-slate-500 mb-1">Your Rate</p>
                <p className="text-xl font-bold text-white">{fmt(hourlyRate)}/hr</p>
              </div>
              <div className="bg-white/[0.04] border border-white/[0.06] rounded-xl p-4 text-center">
                <p className="text-xs text-slate-500 mb-1">Best Recovery</p>
                <p className={`text-xl font-bold ${bestMethod && bestMethod.riskAdjustedRecovery > 0 ? 'text-green-400' : 'text-red-400'}`}>
                  {bestMethod ? fmt(bestMethod.riskAdjustedRecovery) : '$0'}
                </p>
              </div>
            </div>

            {/* Cost Breakdown Bar Chart */}
            <div className="mb-8">
              <h4 className="text-sm font-medium text-white mb-4">Cost Comparison (lower is better)</h4>
              <div className="space-y-3">
                {selectedCostBenefits.map((result) => {
                  const maxCost = Math.max(...selectedCostBenefits.map((r) => r.totalCostIncOpportunity), 1);
                  const barWidth = (result.totalCostIncOpportunity / maxCost) * 100;
                  const indicator = getDecisionIndicator(result);
                  return (
                    <div key={result.method.id}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-slate-400">{result.method.name}</span>
                        <span className="text-xs text-slate-300 font-medium">{fmt(result.totalCostIncOpportunity)} total</span>
                      </div>
                      <div className="h-6 bg-white/5 rounded-full overflow-hidden flex">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-red-400/70 to-rose-500/70 transition-all duration-700 flex items-center justify-end pr-2"
                          style={{ width: `${Math.max(barWidth, 5)}%` }}
                        >
                          {barWidth > 25 && (
                            <span className="text-xs text-white font-medium">{fmt(result.estimatedCost)}</span>
                          )}
                        </div>
                        <div
                          className="h-full bg-amber-400/30 transition-all duration-700 flex items-center justify-end pr-2"
                          style={{ width: `${Math.max((result.opportunityCost / maxCost) * 100, 0)}%` }}
                        >
                        </div>
                      </div>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-xs text-slate-500">
                          Direct: {fmt(result.estimatedCost)} | Time: {fmt(result.opportunityCost)} ({result.hoursInvestment}hrs)
                        </span>
                        <span className={`text-xs font-medium ${indicator.color}`}>{indicator.label}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="flex items-center gap-4 mt-3">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-red-400/70 to-rose-500/70" />
                  <span className="text-xs text-slate-500">Direct Cost</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-amber-400/30" />
                  <span className="text-xs text-slate-500">Opportunity Cost (your time)</span>
                </div>
              </div>
            </div>

            {/* Recovery Timeline */}
            <div className="mb-8">
              <h4 className="text-sm font-medium text-white mb-4">Recovery Timeline</h4>
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-px bg-white/10" />
                {selectedCostBenefits
                  .sort((a, b) => a.timeWeeks - b.timeWeeks)
                  .map((result, idx) => {
                    const indicator = getDecisionIndicator(result);
                    return (
                      <div key={result.method.id} className="relative pl-10 pb-4 last:pb-0">
                        <div className={`absolute left-2.5 w-3 h-3 rounded-full border-2 ${indicator.border} ${indicator.bg}`} style={{ top: '4px' }} />
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-white">{result.method.name}</span>
                          <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${indicator.bg} ${indicator.border} border ${indicator.color}`}>
                            ~{result.timeWeeks} weeks
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 mt-0.5">
                          {result.method.timeLabel} | {fmtPct(result.successRate)} success rate | Net: {fmt(result.riskAdjustedRecovery)}
                        </p>
                        {idx === 0 && (
                          <p className="text-xs text-green-400/70 mt-0.5">Fastest option</p>
                        )}
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>

          {/* Detailed Cards per Method */}
          {selectedCostBenefits.map((result) => {
            const indicator = getDecisionIndicator(result);
            return (
              <div key={result.method.id} className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-bold text-white heading-font">{result.method.name}</h4>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${indicator.bg} ${indicator.border} border ${indicator.color}`}>
                    {indicator.label}
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                  <div className="bg-white/[0.04] rounded-xl p-3">
                    <p className="text-xs text-slate-500 mb-0.5">Direct Cost</p>
                    <p className="text-lg font-bold text-white">{fmt(result.estimatedCost)}</p>
                    <p className="text-xs text-slate-500">{fmtPct(result.costAsPercentage)} of debt</p>
                  </div>
                  <div className="bg-white/[0.04] rounded-xl p-3">
                    <p className="text-xs text-slate-500 mb-0.5">Net Recovery</p>
                    <p className={`text-lg font-bold ${result.netRecovery > 0 ? 'text-green-400' : 'text-red-400'}`}>{fmt(result.netRecovery)}</p>
                    <p className="text-xs text-slate-500">debt minus costs</p>
                  </div>
                  <div className="bg-white/[0.04] rounded-xl p-3">
                    <p className="text-xs text-slate-500 mb-0.5">Risk-Adjusted</p>
                    <p className={`text-lg font-bold ${result.riskAdjustedRecovery > 0 ? 'text-green-400' : 'text-red-400'}`}>{fmt(result.riskAdjustedRecovery)}</p>
                    <p className="text-xs text-slate-500">{fmtPct(result.successRate)} success rate</p>
                  </div>
                  <div className="bg-white/[0.04] rounded-xl p-3">
                    <p className="text-xs text-slate-500 mb-0.5">ROI</p>
                    <p className={`text-lg font-bold ${result.roi > 0 ? 'text-green-400' : 'text-red-400'}`}>{Math.round(result.roi)}%</p>
                    <p className="text-xs text-slate-500">inc. opportunity cost</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-white/[0.04] rounded-xl p-3">
                    <p className="text-xs text-slate-500 mb-0.5">Time Investment</p>
                    <p className="text-sm font-medium text-white">{result.hoursInvestment} hours</p>
                    <p className="text-xs text-slate-500">~{result.timeWeeks} weeks</p>
                  </div>
                  <div className="bg-white/[0.04] rounded-xl p-3">
                    <p className="text-xs text-slate-500 mb-0.5">Opportunity Cost</p>
                    <p className="text-sm font-medium text-amber-400">{fmt(result.opportunityCost)}</p>
                    <p className="text-xs text-slate-500">{result.hoursInvestment}hrs x {fmt(hourlyRate)}</p>
                  </div>
                  <div className="bg-white/[0.04] rounded-xl p-3">
                    <p className="text-xs text-slate-500 mb-0.5">Total Cost</p>
                    <p className="text-sm font-medium text-red-400">{fmt(result.totalCostIncOpportunity)}</p>
                    <p className="text-xs text-slate-500">direct + time</p>
                  </div>
                </div>

                {/* Break-even threshold */}
                <div className="mt-4 bg-gradient-to-r from-red-400/5 to-rose-500/5 border border-red-400/15 rounded-xl p-4">
                  <p className="text-xs text-slate-400">
                    <span className="text-red-400 font-medium">Break-even threshold:</span>{' '}
                    {result.method.isPercentage
                      ? `This method costs ${result.method.percentageMin}-${result.method.percentageMax}% of the debt, so it scales with the amount. Minimum viable debt: ~$${Math.round(result.estimatedCost / (result.successRate / 100) * 2)}.`
                      : `To break even on this method (including your time), you would need a debt of at least ${fmt(Math.round(result.totalCostIncOpportunity / (result.successRate / 100)))} at ${fmtPct(result.successRate)} success rate.`
                    }
                  </p>
                </div>
              </div>
            );
          })}

          <div className="flex items-center justify-center gap-3">
            <button
              onClick={() => setStep(2)}
              className="px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-slate-300 font-medium hover:bg-white/10 transition-all"
            >
              Back
            </button>
            <button
              onClick={() => setStep(4)}
              className="rounded-xl px-10 py-4 font-semibold text-lg bg-gradient-to-r from-red-400 to-rose-500 text-white hover:from-red-300 hover:to-rose-400 shadow-lg shadow-red-500/20 transition-all"
            >
              See Action Plan
            </button>
          </div>
        </>
      )}

      {/* Step 4: Recommended Action Plan */}
      {step === 4 && (
        <>
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white heading-font mb-2">Recommended Action Plan</h3>
            <p className="text-sm text-slate-400 mb-6">
              Based on your {fmt(amount)} unpaid invoice ({details.overdueBand} days overdue) in {details.state},
              here is a prioritised step-by-step recovery plan.
            </p>

            {/* Overall verdict */}
            {bestMethod && (
              <div className={`rounded-xl p-5 mb-6 ${
                bestMethod.riskAdjustedRecovery > amount * 0.3
                  ? 'bg-gradient-to-r from-green-400/10 to-emerald-500/10 border border-green-400/20'
                  : bestMethod.riskAdjustedRecovery > 0
                    ? 'bg-gradient-to-r from-amber-400/10 to-yellow-500/10 border border-amber-400/20'
                    : 'bg-gradient-to-r from-red-400/10 to-rose-500/10 border border-red-400/20'
              }`}>
                <div className="flex items-center gap-2 mb-2">
                  <div className={`w-3 h-3 rounded-full ${
                    bestMethod.riskAdjustedRecovery > amount * 0.3 ? 'bg-green-400'
                      : bestMethod.riskAdjustedRecovery > 0 ? 'bg-amber-400'
                        : 'bg-red-400'
                  }`} />
                  <span className={`text-sm font-semibold ${
                    bestMethod.riskAdjustedRecovery > amount * 0.3 ? 'text-green-400'
                      : bestMethod.riskAdjustedRecovery > 0 ? 'text-amber-400'
                        : 'text-red-400'
                  }`}>
                    {bestMethod.riskAdjustedRecovery > amount * 0.3
                      ? 'This debt is worth pursuing'
                      : bestMethod.riskAdjustedRecovery > 0
                        ? 'Proceed with caution — marginal returns expected'
                        : 'Recovery costs likely exceed expected returns'}
                  </span>
                </div>
                <p className="text-sm text-slate-300">
                  The most cost-effective method is <strong className="text-white">{bestMethod.method.name}</strong> with
                  an expected risk-adjusted recovery of <strong className="text-white">{fmt(bestMethod.riskAdjustedRecovery)}</strong> (after
                  deducting {fmt(bestMethod.estimatedCost)} in direct costs at a {fmtPct(bestMethod.successRate)} success rate).
                  Total time investment is approximately {bestMethod.hoursInvestment} hours over ~{bestMethod.timeWeeks} weeks.
                </p>
              </div>
            )}

            {/* Action Steps */}
            <div className="space-y-4">
              {actionPlan.map((action) => (
                <div
                  key={action.priority}
                  className={`rounded-xl p-5 flex items-start gap-4 ${
                    action.urgency === 'start-here'
                      ? 'bg-green-400/5 border-2 border-green-400/25'
                      : action.urgency === 'recommended'
                        ? 'bg-white/[0.04] border border-red-400/20'
                        : action.urgency === 'consider'
                          ? 'bg-white/[0.04] border border-amber-400/15'
                          : 'bg-white/[0.04] border border-white/[0.06]'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                    action.urgency === 'start-here'
                      ? 'bg-green-400/20 border border-green-400/30'
                      : action.urgency === 'recommended'
                        ? 'bg-red-400/20 border border-red-400/30'
                        : action.urgency === 'consider'
                          ? 'bg-amber-400/20 border border-amber-400/30'
                          : 'bg-white/10 border border-white/15'
                  }`}>
                    <span className={`text-sm font-bold ${
                      action.urgency === 'start-here' ? 'text-green-400'
                        : action.urgency === 'recommended' ? 'text-red-400'
                          : action.urgency === 'consider' ? 'text-amber-400'
                            : 'text-slate-400'
                    }`}>{action.priority}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <h4 className="text-white font-semibold text-sm">{action.title}</h4>
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                        action.urgency === 'start-here'
                          ? 'bg-green-400/10 text-green-400 border border-green-400/20'
                          : action.urgency === 'recommended'
                            ? 'bg-red-400/10 text-red-400 border border-red-400/20'
                            : action.urgency === 'consider'
                              ? 'bg-amber-400/10 text-amber-400 border border-amber-400/20'
                              : 'bg-white/5 text-slate-400 border border-white/10'
                      }`}>
                        {action.urgency === 'start-here' ? 'Start Here'
                          : action.urgency === 'recommended' ? 'Recommended'
                            : action.urgency === 'consider' ? 'Consider'
                              : 'Last Resort'}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 mb-2">{action.description}</p>
                    <div className="flex items-center gap-4">
                      <span className="text-xs text-slate-500">Cost: <span className="text-slate-300">{action.estimatedCost}</span></span>
                      <span className="text-xs text-slate-500">Time: <span className="text-slate-300">{action.estimatedTime}</span></span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Total Timeline */}
            <div className="mt-6 bg-white/[0.04] border border-white/[0.06] rounded-xl p-5">
              <h4 className="text-sm font-medium text-white mb-3">Expected Total Timeline</h4>
              <div className="relative h-8 bg-white/5 rounded-full overflow-hidden">
                {/* LOD phase */}
                <div className="absolute left-0 top-0 h-full bg-green-400/30 rounded-l-full" style={{ width: '10%' }} />
                {/* Escalation phase */}
                <div className="absolute top-0 h-full bg-amber-400/20" style={{ left: '10%', width: '15%' }} />
                {/* Tribunal/Court phase */}
                <div className="absolute top-0 h-full bg-red-400/20" style={{ left: '25%', width: '50%' }} />
                {/* Enforcement phase */}
                <div className="absolute top-0 h-full bg-purple-400/15 rounded-r-full" style={{ left: '75%', width: '25%' }} />
              </div>
              <div className="flex items-center justify-between mt-2 text-xs text-slate-500">
                <span>Week 0</span>
                <span>~2 wks: LOD</span>
                <span>~4 wks: Escalate</span>
                <span>2-6 mo: Tribunal</span>
                <span>6-12 mo: Enforce</span>
              </div>
              <p className="text-xs text-slate-500 mt-3">
                Start-to-finish estimate: <strong className="text-white">2 weeks to 12 months</strong> depending
                on how quickly each step resolves. Most debts that respond to a Letter of Demand do so within 14 days.
                Tribunal proceedings typically take 2-6 months if the matter goes to a hearing.
              </p>
            </div>
          </div>

          {/* Copy Report & Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={handleCopy}
              className="bg-gradient-to-r from-red-400 to-rose-500 text-white font-semibold rounded-xl px-8 py-4 hover:from-red-300 hover:to-rose-400 transition-all"
            >
              {copied ? 'Copied to Clipboard!' : 'Copy Full Report'}
            </button>
            <button
              onClick={() => setStep(3)}
              className="px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-slate-300 font-medium hover:bg-white/10 transition-all"
            >
              Back to Analysis
            </button>
            <button
              onClick={() => {
                setStep(1);
                setDetails({ amount: '', overdueBand: '', state: '', letterOfDemandSent: null, clientType: '', hourlyRate: '' });
                setSelectedMethods(new Set());
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
                href="/tools/late-payment-interest-calculator"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-red-400/30 rounded-xl p-4 transition-all group"
              >
                <p className="text-white font-medium text-sm group-hover:text-red-300 transition-colors">
                  Late Payment Interest Calculator
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Calculate interest owed on overdue invoices under Australian law
                </p>
              </a>
              <a
                href="/tools/contract-generator"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-red-400/30 rounded-xl p-4 transition-all group"
              >
                <p className="text-white font-medium text-sm group-hover:text-red-300 transition-colors">
                  Freelance Contract Generator
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Generate a professional contract with payment and dispute clauses
                </p>
              </a>
              <a
                href="/tools/client-red-flag-checker"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-red-400/30 rounded-xl p-4 transition-all group"
              >
                <p className="text-white font-medium text-sm group-hover:text-red-300 transition-colors">
                  Client Red Flag Checker
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Vet potential clients before signing to avoid payment problems
                </p>
              </a>
            </div>
          </div>

          <div className="text-center">
            <p className="text-xs text-slate-500 max-w-2xl mx-auto">
              This tool provides general guidance on debt recovery costs and options in Australia.
              Filing fees and tribunal limits are approximate and subject to change. Every situation
              is unique — consider seeking professional legal advice for debts over $10,000 or
              complex disputes. This is not legal or financial advice.
            </p>
          </div>
        </>
      )}
    </div>
  );
}
