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

const INDUSTRY_OPTIONS = [
  { value: 'web-dev', label: 'Web Development' },
  { value: 'design', label: 'Graphic / UI Design' },
  { value: 'marketing', label: 'Digital Marketing' },
  { value: 'consulting', label: 'Business Consulting' },
  { value: 'copywriting', label: 'Copywriting / Content' },
  { value: 'photography', label: 'Photography / Video' },
  { value: 'other', label: 'Other Services' },
];

// Industry-specific base multiples (SDE)
const INDUSTRY_SDE_BASE: Record<string, number> = {
  'web-dev': 2.2,
  'design': 1.9,
  'marketing': 2.3,
  'consulting': 2.5,
  'copywriting': 1.8,
  'photography': 1.6,
  'other': 2.0,
};

// Industry-specific base multiples (Revenue)
const INDUSTRY_REV_BASE: Record<string, number> = {
  'web-dev': 0.8,
  'design': 0.7,
  'marketing': 0.9,
  'consulting': 1.0,
  'copywriting': 0.6,
  'photography': 0.5,
  'other': 0.7,
};

interface ValuationFactor {
  label: string;
  impact: 'positive' | 'negative';
  description: string;
  sdeAdjust: number;
  revAdjust: number;
}

export default function BusinessValuationCalculator() {
  const [annualRevenue, setAnnualRevenue] = useState('120000');
  const [annualExpenses, setAnnualExpenses] = useState('35000');
  const [ownerSalary, setOwnerSalary] = useState('75000');
  const [yearsInBusiness, setYearsInBusiness] = useState('4');
  const [activeClients, setActiveClients] = useState('12');
  const [recurringPct, setRecurringPct] = useState('30');
  const [growthRate, setGrowthRate] = useState('10');
  const [industry, setIndustry] = useState('web-dev');
  const [copied, setCopied] = useState(false);

  const results = useMemo(() => {
    const revenue = parseFloat(annualRevenue) || 0;
    const expenses = parseFloat(annualExpenses) || 0;
    const salary = parseFloat(ownerSalary) || 0;
    const years = parseFloat(yearsInBusiness) || 0;
    const clients = parseFloat(activeClients) || 0;
    const recurring = parseFloat(recurringPct) || 0;
    const growth = parseFloat(growthRate) || 0;

    if (revenue <= 0) return null;

    // SDE = Revenue - Business Expenses + Owner Salary
    // (Owner salary is added back because it represents the economic benefit to the owner)
    const sde = revenue - expenses;
    const netProfit = revenue - expenses - salary;

    // Determine valuation factors
    const factors: ValuationFactor[] = [];
    let sdeMultipleAdj = 0;
    let revMultipleAdj = 0;

    // Recurring revenue factor
    if (recurring >= 60) {
      factors.push({
        label: 'Strong recurring revenue',
        impact: 'positive',
        description: `${recurring}% recurring revenue provides predictable income`,
        sdeAdjust: 0.5,
        revAdjust: 0.2,
      });
      sdeMultipleAdj += 0.5;
      revMultipleAdj += 0.2;
    } else if (recurring >= 30) {
      factors.push({
        label: 'Moderate recurring revenue',
        impact: 'positive',
        description: `${recurring}% recurring revenue adds some predictability`,
        sdeAdjust: 0.2,
        revAdjust: 0.1,
      });
      sdeMultipleAdj += 0.2;
      revMultipleAdj += 0.1;
    } else {
      factors.push({
        label: 'Low recurring revenue',
        impact: 'negative',
        description: `Only ${recurring}% recurring — mostly project-based income`,
        sdeAdjust: -0.3,
        revAdjust: -0.1,
      });
      sdeMultipleAdj -= 0.3;
      revMultipleAdj -= 0.1;
    }

    // Years in business factor
    if (years >= 5) {
      factors.push({
        label: 'Established track record',
        impact: 'positive',
        description: `${years} years in business shows stability and proven demand`,
        sdeAdjust: 0.4,
        revAdjust: 0.15,
      });
      sdeMultipleAdj += 0.4;
      revMultipleAdj += 0.15;
    } else if (years >= 3) {
      factors.push({
        label: 'Solid operating history',
        impact: 'positive',
        description: `${years} years in business provides reasonable track record`,
        sdeAdjust: 0.15,
        revAdjust: 0.05,
      });
      sdeMultipleAdj += 0.15;
      revMultipleAdj += 0.05;
    } else {
      factors.push({
        label: 'Short operating history',
        impact: 'negative',
        description: `Only ${years} year${years === 1 ? '' : 's'} in business — limited track record`,
        sdeAdjust: -0.3,
        revAdjust: -0.1,
      });
      sdeMultipleAdj -= 0.3;
      revMultipleAdj -= 0.1;
    }

    // Client diversification factor
    if (clients >= 15) {
      factors.push({
        label: 'Well-diversified client base',
        impact: 'positive',
        description: `${clients} active clients reduces dependency risk`,
        sdeAdjust: 0.3,
        revAdjust: 0.1,
      });
      sdeMultipleAdj += 0.3;
      revMultipleAdj += 0.1;
    } else if (clients >= 8) {
      factors.push({
        label: 'Moderate client diversification',
        impact: 'positive',
        description: `${clients} active clients provides reasonable diversification`,
        sdeAdjust: 0.1,
        revAdjust: 0.05,
      });
      sdeMultipleAdj += 0.1;
      revMultipleAdj += 0.05;
    } else if (clients >= 4) {
      factors.push({
        label: 'Limited client base',
        impact: 'negative',
        description: `Only ${clients} clients — losing one could significantly impact revenue`,
        sdeAdjust: -0.2,
        revAdjust: -0.05,
      });
      sdeMultipleAdj -= 0.2;
      revMultipleAdj -= 0.05;
    } else {
      factors.push({
        label: 'High client concentration risk',
        impact: 'negative',
        description: `Only ${clients} client${clients === 1 ? '' : 's'} — extreme dependency risk`,
        sdeAdjust: -0.5,
        revAdjust: -0.15,
      });
      sdeMultipleAdj -= 0.5;
      revMultipleAdj -= 0.15;
    }

    // Growth rate factor
    if (growth >= 20) {
      factors.push({
        label: 'Strong revenue growth',
        impact: 'positive',
        description: `${growth}% annual growth signals high demand`,
        sdeAdjust: 0.4,
        revAdjust: 0.15,
      });
      sdeMultipleAdj += 0.4;
      revMultipleAdj += 0.15;
    } else if (growth >= 10) {
      factors.push({
        label: 'Healthy growth trajectory',
        impact: 'positive',
        description: `${growth}% annual growth is above inflation`,
        sdeAdjust: 0.15,
        revAdjust: 0.05,
      });
      sdeMultipleAdj += 0.15;
      revMultipleAdj += 0.05;
    } else if (growth >= 0) {
      factors.push({
        label: 'Flat or low growth',
        impact: 'negative',
        description: `${growth}% growth — effectively flat after inflation`,
        sdeAdjust: -0.15,
        revAdjust: -0.05,
      });
      sdeMultipleAdj -= 0.15;
      revMultipleAdj -= 0.05;
    } else {
      factors.push({
        label: 'Declining revenue',
        impact: 'negative',
        description: `${growth}% growth — business is shrinking year-over-year`,
        sdeAdjust: -0.5,
        revAdjust: -0.2,
      });
      sdeMultipleAdj -= 0.5;
      revMultipleAdj -= 0.2;
    }

    // Profitability factor
    const profitMargin = revenue > 0 ? (netProfit / revenue) * 100 : 0;
    if (profitMargin >= 30) {
      factors.push({
        label: 'High profit margins',
        impact: 'positive',
        description: `${profitMargin.toFixed(0)}% net margin (after owner salary) is excellent`,
        sdeAdjust: 0.2,
        revAdjust: 0.1,
      });
      sdeMultipleAdj += 0.2;
      revMultipleAdj += 0.1;
    } else if (profitMargin >= 10) {
      // Neutral — no adjustment
    } else {
      factors.push({
        label: 'Low profit margins',
        impact: 'negative',
        description: `${profitMargin.toFixed(0)}% net margin after owner salary is thin`,
        sdeAdjust: -0.2,
        revAdjust: -0.1,
      });
      sdeMultipleAdj -= 0.2;
      revMultipleAdj -= 0.1;
    }

    // Calculate multiples
    const baseSdeMultiple = INDUSTRY_SDE_BASE[industry] || 2.0;
    const baseRevMultiple = INDUSTRY_REV_BASE[industry] || 0.7;

    const sdeMultiple = Math.max(0.8, Math.min(4.0, baseSdeMultiple + sdeMultipleAdj));
    const revMultiple = Math.max(0.3, Math.min(2.0, baseRevMultiple + revMultipleAdj));

    // SDE Valuation
    const sdeValuation = sde * sdeMultiple;
    const sdeLow = sde * Math.max(0.8, sdeMultiple - 0.5);
    const sdeHigh = sde * Math.min(4.0, sdeMultiple + 0.5);

    // Revenue Valuation
    const revValuation = revenue * revMultiple;
    const revLow = revenue * Math.max(0.3, revMultiple - 0.2);
    const revHigh = revenue * Math.min(2.0, revMultiple + 0.2);

    // Asset-based Valuation (simplified for service businesses)
    // Typically: tangible assets + client contracts value + brand value
    // For freelancers: ~3-6 months of net profit + estimated brand/goodwill
    const tangibleAssets = revenue * 0.05; // Equipment, software, etc.
    const clientContractValue = recurring > 0 ? (revenue * (recurring / 100)) * 0.5 : 0; // 6 months of recurring
    const brandGoodwill = years >= 3 ? revenue * 0.1 : revenue * 0.05;
    const assetValuation = tangibleAssets + clientContractValue + brandGoodwill;

    // Combined estimated range
    const allVals = [sdeLow, revLow, assetValuation, sdeHigh, revHigh];
    const estimatedLow = Math.min(...allVals);
    const estimatedHigh = Math.max(...allVals);
    const estimatedMid = (sdeValuation + revValuation + assetValuation) / 3;

    // Best estimate (weighted: 50% SDE, 30% Revenue, 20% Asset)
    const weightedEstimate = sdeValuation * 0.5 + revValuation * 0.3 + assetValuation * 0.2;

    // Tips to increase value
    const tips: string[] = [];
    if (recurring < 40) {
      tips.push('Increase recurring revenue by converting project clients to retainer agreements. Target 40%+ recurring revenue.');
    }
    if (clients < 10) {
      tips.push('Diversify your client base. Aim for 10+ active clients so no single client represents more than 15% of revenue.');
    }
    if (years < 3) {
      tips.push('Keep building your track record. Businesses with 3+ years of consistent financials attract higher multiples.');
    }
    if (growth < 10) {
      tips.push('Focus on growing revenue by at least 10-15% annually. Consistent growth is one of the strongest value drivers.');
    }
    if (profitMargin < 20) {
      tips.push('Improve profitability by raising rates, reducing expenses, or focusing on higher-margin services.');
    }
    tips.push('Document your processes, client workflows, and SOPs. A transferable business is worth significantly more than one that depends entirely on the owner.');
    tips.push('Maintain clean financial records. Buyers and the ATO need clear, accurate books. Use accounting software and keep personal expenses separate.');

    return {
      sde,
      netProfit,
      profitMargin,
      sdeMultiple,
      revMultiple,
      sdeValuation,
      sdeLow,
      sdeHigh,
      revValuation,
      revLow,
      revHigh,
      assetValuation,
      tangibleAssets,
      clientContractValue,
      brandGoodwill,
      estimatedLow,
      estimatedHigh,
      estimatedMid,
      weightedEstimate,
      factors,
      tips,
    };
  }, [annualRevenue, annualExpenses, ownerSalary, yearsInBusiness, activeClients, recurringPct, growthRate, industry]);

  const handleCopy = useCallback(() => {
    if (!results) return;
    const text = [
      'BUSINESS VALUATION ESTIMATE',
      '===========================',
      '',
      'Inputs:',
      `  Annual Revenue: ${formatCurrency(parseFloat(annualRevenue))}`,
      `  Annual Expenses: ${formatCurrency(parseFloat(annualExpenses))}`,
      `  Owner Salary: ${formatCurrency(parseFloat(ownerSalary))}`,
      `  Years in Business: ${yearsInBusiness}`,
      `  Active Clients: ${activeClients}`,
      `  Recurring Revenue: ${recurringPct}%`,
      `  Annual Growth Rate: ${growthRate}%`,
      `  Industry: ${INDUSTRY_OPTIONS.find((i) => i.value === industry)?.label || industry}`,
      '',
      'KEY FIGURES:',
      `  Seller\'s Discretionary Earnings (SDE): ${formatCurrency(results.sde)}`,
      `  Net Profit (after owner salary): ${formatCurrency(results.netProfit)}`,
      `  Profit Margin: ${results.profitMargin.toFixed(1)}%`,
      '',
      'VALUATION METHODS:',
      `  SDE Multiple (${results.sdeMultiple.toFixed(1)}x): ${formatCurrency(results.sdeValuation)} (range: ${formatCurrency(results.sdeLow)} - ${formatCurrency(results.sdeHigh)})`,
      `  Revenue Multiple (${results.revMultiple.toFixed(1)}x): ${formatCurrency(results.revValuation)} (range: ${formatCurrency(results.revLow)} - ${formatCurrency(results.revHigh)})`,
      `  Asset-Based: ${formatCurrency(results.assetValuation)}`,
      '',
      'ESTIMATED VALUE:',
      `  Weighted Estimate: ${formatCurrency(results.weightedEstimate)}`,
      `  Range: ${formatCurrency(results.estimatedLow)} - ${formatCurrency(results.estimatedHigh)}`,
      '',
      'VALUATION FACTORS:',
      ...results.factors.map((f) => `  ${f.impact === 'positive' ? '+' : '-'} ${f.label}: ${f.description}`),
      '',
      'Generated by InvoiceFlow — invoiceflow.au/tools/business-valuation-calculator',
    ].join('\n');
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [results, annualRevenue, annualExpenses, ownerSalary, yearsInBusiness, activeClients, recurringPct, growthRate, industry]);

  return (
    <div className="space-y-8">
      {/* Input Section */}
      <div className="glass rounded-2xl p-6 sm:p-8 space-y-6">
        <h2 className="text-xl font-bold text-white heading-font">Your Business Details</h2>
        <p className="text-sm text-slate-400">
          Enter your business financials below. All calculations happen in your browser — nothing is
          sent to a server. Use annual figures for the most accurate estimate.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm text-slate-400 mb-2">Annual revenue ($)</label>
            <input
              type="number"
              value={annualRevenue}
              onChange={(e) => setAnnualRevenue(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-amber-500 focus:outline-none transition-colors"
              min="0"
              placeholder="120000"
            />
          </div>
          <div>
            <label className="block text-sm text-slate-400 mb-2">Annual business expenses ($)</label>
            <input
              type="number"
              value={annualExpenses}
              onChange={(e) => setAnnualExpenses(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-amber-500 focus:outline-none transition-colors"
              min="0"
              placeholder="35000"
            />
            <p className="text-xs text-slate-500 mt-1">Software, contractors, marketing, insurance, etc. (not your salary)</p>
          </div>
          <div>
            <label className="block text-sm text-slate-400 mb-2">Owner salary / drawings ($)</label>
            <input
              type="number"
              value={ownerSalary}
              onChange={(e) => setOwnerSalary(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-amber-500 focus:outline-none transition-colors"
              min="0"
              placeholder="75000"
            />
            <p className="text-xs text-slate-500 mt-1">What you pay yourself annually</p>
          </div>
          <div>
            <label className="block text-sm text-slate-400 mb-2">Years in business</label>
            <input
              type="number"
              value={yearsInBusiness}
              onChange={(e) => setYearsInBusiness(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-amber-500 focus:outline-none transition-colors"
              min="1"
              max="30"
              placeholder="4"
            />
          </div>
          <div>
            <label className="block text-sm text-slate-400 mb-2">Number of active clients</label>
            <input
              type="number"
              value={activeClients}
              onChange={(e) => setActiveClients(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-amber-500 focus:outline-none transition-colors"
              min="1"
              placeholder="12"
            />
          </div>
          <div>
            <label className="block text-sm text-slate-400 mb-2">
              Industry / service type
            </label>
            <select
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-amber-500 focus:outline-none transition-colors"
            >
              {INDUSTRY_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value} className="bg-slate-800">
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm text-slate-400 mb-2">
              Recurring / retainer revenue: <span className="text-amber-400 font-medium">{recurringPct}%</span>
            </label>
            <input
              type="range"
              value={recurringPct}
              onChange={(e) => setRecurringPct(e.target.value)}
              className="w-full accent-amber-500"
              min="0"
              max="100"
              step="5"
            />
            <div className="flex justify-between text-xs text-slate-500 mt-1">
              <span>0% (all project)</span>
              <span>50%</span>
              <span>100% (all recurring)</span>
            </div>
          </div>
          <div>
            <label className="block text-sm text-slate-400 mb-2">
              Annual revenue growth: <span className={`font-medium ${parseFloat(growthRate) >= 0 ? 'text-amber-400' : 'text-rose-400'}`}>{growthRate}%</span>
            </label>
            <input
              type="range"
              value={growthRate}
              onChange={(e) => setGrowthRate(e.target.value)}
              className="w-full accent-amber-500"
              min="-30"
              max="50"
              step="5"
            />
            <div className="flex justify-between text-xs text-slate-500 mt-1">
              <span>-30% (declining)</span>
              <span>10%</span>
              <span>50% (rapid)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      {results && (
        <>
          {/* Key Figures */}
          <div className="glass rounded-2xl p-6 sm:p-8 bg-gradient-to-br from-amber-500/10 to-yellow-500/10 border border-amber-500/20">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-white heading-font">Estimated Business Value</h2>
              <button
                onClick={handleCopy}
                className="flex items-center gap-2 text-sm px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all"
              >
                {copied ? <span className="text-emerald-400">Copied</span> : <>Copy Results</>}
              </button>
            </div>
            <div className="text-center py-6">
              <p className="text-sm text-slate-400 mb-2">Weighted estimate</p>
              <p className="text-5xl sm:text-6xl font-bold text-amber-400">
                {formatCurrency(results.weightedEstimate)}
              </p>
              <p className="text-slate-400 text-lg mt-3">
                Range: <span className="text-white font-semibold">{formatCurrency(results.estimatedLow)}</span>
                {' '}&mdash;{' '}
                <span className="text-white font-semibold">{formatCurrency(results.estimatedHigh)}</span>
              </p>
              <p className="text-xs text-slate-500 mt-2">
                Based on 50% SDE method, 30% revenue method, 20% asset method weighting
              </p>
            </div>
          </div>

          {/* SDE Breakdown */}
          <div className="glass rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white heading-font mb-4">Seller&apos;s Discretionary Earnings (SDE)</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between py-3 border-b border-white/10">
                <span className="text-slate-300">Annual revenue</span>
                <span className="text-white font-semibold">{formatCurrency(parseFloat(annualRevenue) || 0)}</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-white/10">
                <span className="text-slate-300">Less: business expenses</span>
                <span className="text-rose-400 font-semibold">-{formatCurrency(parseFloat(annualExpenses) || 0)}</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-white/10">
                <span className="text-white font-bold">SDE (Seller&apos;s Discretionary Earnings)</span>
                <span className="text-amber-400 font-bold text-lg">{formatCurrency(results.sde)}</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-white/10">
                <span className="text-slate-300">Less: owner salary</span>
                <span className="text-rose-400 font-semibold">-{formatCurrency(parseFloat(ownerSalary) || 0)}</span>
              </div>
              <div className="flex items-center justify-between py-3">
                <span className="text-slate-300">Net profit (after owner salary)</span>
                <span className={`font-semibold ${results.netProfit >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {formatCurrency(results.netProfit)}
                </span>
              </div>
            </div>
            <div className="mt-4 bg-white/5 rounded-xl p-4">
              <p className="text-xs text-slate-400">
                <strong className="text-slate-300">What is SDE?</strong> Seller&apos;s Discretionary Earnings
                represents the total financial benefit to the business owner. It&apos;s calculated as revenue
                minus operating expenses (before the owner&apos;s salary). Buyers use SDE because they&apos;ll
                replace your salary with their own — so the SDE shows what the business actually generates for
                its owner.
              </p>
            </div>
          </div>

          {/* Three Valuation Methods */}
          <div className="grid sm:grid-cols-3 gap-4">
            {/* SDE Multiple */}
            <div className="glass rounded-xl p-5 border border-amber-500/20">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 bg-amber-400 rounded-full" />
                <span className="text-xs text-amber-400 uppercase tracking-wide font-medium">SDE Multiple</span>
              </div>
              <p className="text-2xl font-bold text-white">{formatCurrency(results.sdeValuation)}</p>
              <p className="text-sm text-slate-400 mt-1">{results.sdeMultiple.toFixed(1)}x SDE</p>
              <p className="text-xs text-slate-500 mt-2">
                Range: {formatCurrency(results.sdeLow)} &mdash; {formatCurrency(results.sdeHigh)}
              </p>
            </div>

            {/* Revenue Multiple */}
            <div className="glass rounded-xl p-5 border border-blue-500/20">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full" />
                <span className="text-xs text-blue-400 uppercase tracking-wide font-medium">Revenue Multiple</span>
              </div>
              <p className="text-2xl font-bold text-white">{formatCurrency(results.revValuation)}</p>
              <p className="text-sm text-slate-400 mt-1">{results.revMultiple.toFixed(1)}x Revenue</p>
              <p className="text-xs text-slate-500 mt-2">
                Range: {formatCurrency(results.revLow)} &mdash; {formatCurrency(results.revHigh)}
              </p>
            </div>

            {/* Asset-Based */}
            <div className="glass rounded-xl p-5 border border-violet-500/20">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 bg-violet-400 rounded-full" />
                <span className="text-xs text-violet-400 uppercase tracking-wide font-medium">Asset-Based</span>
              </div>
              <p className="text-2xl font-bold text-white">{formatCurrency(results.assetValuation)}</p>
              <p className="text-sm text-slate-400 mt-1">Tangible + intangible</p>
              <div className="text-xs text-slate-500 mt-2 space-y-0.5">
                <p>Equipment: {formatCurrency(results.tangibleAssets)}</p>
                <p>Client contracts: {formatCurrency(results.clientContractValue)}</p>
                <p>Brand/goodwill: {formatCurrency(results.brandGoodwill)}</p>
              </div>
            </div>
          </div>

          {/* Valuation Factors */}
          <div className="glass rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white heading-font mb-4">Valuation Factors</h3>
            <p className="text-sm text-slate-400 mb-4">
              These factors are adjusting your valuation multiples up or down based on your business characteristics:
            </p>
            <div className="flex flex-wrap gap-2">
              {results.factors.map((factor) => (
                <div
                  key={factor.label}
                  className={`group relative px-4 py-2 rounded-full text-sm font-medium border ${
                    factor.impact === 'positive'
                      ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
                      : 'bg-rose-500/10 border-rose-500/20 text-rose-400'
                  }`}
                >
                  <span>{factor.impact === 'positive' ? '+' : '-'} {factor.label}</span>
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 rounded-lg bg-slate-800 border border-white/10 text-xs text-slate-300 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-10 shadow-xl">
                    {factor.description}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 grid sm:grid-cols-2 gap-4">
              <div className="bg-white/5 rounded-xl p-4">
                <p className="text-xs text-slate-400 mb-1">SDE Multiple Applied</p>
                <p className="text-lg font-bold text-amber-400">{results.sdeMultiple.toFixed(1)}x</p>
                <p className="text-xs text-slate-500">Typical range for {INDUSTRY_OPTIONS.find((i) => i.value === industry)?.label}: 1.5x &mdash; 3.5x</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <p className="text-xs text-slate-400 mb-1">Revenue Multiple Applied</p>
                <p className="text-lg font-bold text-blue-400">{results.revMultiple.toFixed(1)}x</p>
                <p className="text-xs text-slate-500">Typical range for {INDUSTRY_OPTIONS.find((i) => i.value === industry)?.label}: 0.5x &mdash; 1.5x</p>
              </div>
            </div>
          </div>

          {/* Tips to Increase Value */}
          <div className="glass rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white heading-font mb-4">How to Increase Your Business Value</h3>
            <div className="space-y-3">
              {results.tips.map((tip, idx) => (
                <div key={idx} className="flex gap-3 bg-white/5 rounded-xl p-4">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <p className="text-sm text-slate-300">{tip}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Disclaimer */}
          <div className="glass rounded-2xl p-6 border border-amber-500/20 bg-amber-500/5">
            <h3 className="text-sm font-bold text-amber-400 mb-2">Important Disclaimer</h3>
            <p className="text-xs text-slate-400">
              This calculator provides a rough estimate only and should not be used as a formal business
              valuation. Actual business value depends on many factors not captured here, including
              market conditions, buyer demand, competitive landscape, contractual obligations, intellectual
              property, and the specific terms of any sale. For a legally defensible valuation, consult
              a registered business valuer or accredited business broker. If you&apos;re selling your
              business in Australia, seek advice from a qualified tax agent regarding Capital Gains Tax
              (CGT) obligations and the small business CGT concessions.
            </p>
          </div>

          {/* Copy Button */}
          <div className="flex justify-center">
            <button
              onClick={handleCopy}
              className="px-6 py-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-amber-500/30 transition-all text-white font-medium"
            >
              {copied ? 'Copied!' : 'Copy Results to Clipboard'}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
