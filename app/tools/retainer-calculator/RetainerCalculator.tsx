'use client';

import { useState, useMemo } from 'react';

function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

function formatRate(value: number): string {
  return new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export default function RetainerCalculator() {
  const [hourlyRate, setHourlyRate] = useState('120');
  const [hoursPerMonth, setHoursPerMonth] = useState('20');
  const [discountPct, setDiscountPct] = useState(10);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'quarterly'>('monthly');
  const [includeGST, setIncludeGST] = useState(false);
  const [rolloverEnabled, setRolloverEnabled] = useState(false);
  const [maxRolloverPct, setMaxRolloverPct] = useState('25');
  const [copied, setCopied] = useState(false);

  const results = useMemo(() => {
    const rate = parseFloat(hourlyRate) || 0;
    const hours = parseFloat(hoursPerMonth) || 0;
    const discount = discountPct / 100;
    const rolloverPct = (parseFloat(maxRolloverPct) || 0) / 100;

    // Core calculations
    const standardMonthlyCost = rate * hours;
    const effectiveRate = rate * (1 - discount);
    const retainerMonthlyPrice = effectiveRate * hours;
    const monthlySavings = standardMonthlyCost - retainerMonthlyPrice;

    // Billing cycle
    const periodsPerYear = billingCycle === 'monthly' ? 12 : 4;
    const monthsPerPeriod = billingCycle === 'monthly' ? 1 : 3;
    const periodPrice = retainerMonthlyPrice * monthsPerPeriod;
    const annualRetainerValue = retainerMonthlyPrice * 12;

    // GST
    const gstRate = 0.10;
    const gstAmount = includeGST ? retainerMonthlyPrice * gstRate : 0;
    const monthlyTotalIncGST = retainerMonthlyPrice + gstAmount;
    const periodGST = includeGST ? periodPrice * gstRate : 0;
    const periodTotalIncGST = periodPrice + periodGST;

    // Rollover
    const maxRolloverHours = rolloverEnabled ? Math.round(hours * rolloverPct) : 0;

    // Tier comparison (Light = 50%, Standard = 100%, Premium = 150%)
    const tiers = [
      {
        name: 'Light',
        hours: Math.round(hours * 0.5),
        monthlyPrice: effectiveRate * Math.round(hours * 0.5),
        effectiveRate,
        annualValue: effectiveRate * Math.round(hours * 0.5) * 12,
      },
      {
        name: 'Standard',
        hours,
        monthlyPrice: retainerMonthlyPrice,
        effectiveRate,
        annualValue: annualRetainerValue,
      },
      {
        name: 'Premium',
        hours: Math.round(hours * 1.5),
        monthlyPrice: effectiveRate * Math.round(hours * 1.5),
        effectiveRate,
        annualValue: effectiveRate * Math.round(hours * 1.5) * 12,
      },
    ];

    // Revenue projection — 12 months of retainer income
    const monthlyProjection = MONTHS.map((month) => ({
      month,
      revenue: retainerMonthlyPrice,
    }));
    const totalAnnualRevenue = annualRetainerValue;

    // "If you had X retainer clients..." section
    const clientsFor100K = retainerMonthlyPrice > 0 ? Math.ceil(100000 / annualRetainerValue) : 0;
    const clientsFor150K = retainerMonthlyPrice > 0 ? Math.ceil(150000 / annualRetainerValue) : 0;
    const clientsFor200K = retainerMonthlyPrice > 0 ? Math.ceil(200000 / annualRetainerValue) : 0;

    return {
      rate,
      hours,
      discount,
      standardMonthlyCost,
      effectiveRate,
      retainerMonthlyPrice,
      monthlySavings,
      periodsPerYear,
      monthsPerPeriod,
      periodPrice,
      annualRetainerValue,
      gstAmount,
      monthlyTotalIncGST,
      periodGST,
      periodTotalIncGST,
      maxRolloverHours,
      tiers,
      monthlyProjection,
      totalAnnualRevenue,
      clientsFor100K,
      clientsFor150K,
      clientsFor200K,
    };
  }, [hourlyRate, hoursPerMonth, discountPct, billingCycle, includeGST, rolloverEnabled, maxRolloverPct]);

  const handleCopy = () => {
    const lines = [
      'Client Retainer Pricing — InvoiceFlow',
      '========================================',
      '',
      `Hourly Rate: ${formatRate(results.rate)}/hr`,
      `Hours per Month: ${results.hours}`,
      `Retainer Discount: ${discountPct}%`,
      `Billing Cycle: ${billingCycle === 'monthly' ? 'Monthly' : 'Quarterly'}`,
      '',
      '--- Pricing ---',
      `Standard Hourly Cost: ${formatCurrency(results.standardMonthlyCost)}/month`,
      `Retainer Price: ${formatCurrency(results.retainerMonthlyPrice)}/month`,
      `Monthly Savings for Client: ${formatCurrency(results.monthlySavings)}`,
      `Effective Hourly Rate: ${formatRate(results.effectiveRate)}/hr`,
      `Annual Retainer Value: ${formatCurrency(results.annualRetainerValue)}`,
    ];
    if (includeGST) {
      lines.push(`GST (10%): ${formatCurrency(results.gstAmount)}`);
      lines.push(`Monthly Total inc GST: ${formatCurrency(results.monthlyTotalIncGST)}`);
    }
    if (rolloverEnabled) {
      lines.push(`Max Rollover Hours: ${results.maxRolloverHours} hrs/month`);
    }
    lines.push('');
    lines.push('--- Tier Comparison ---');
    results.tiers.forEach((tier) => {
      lines.push(`${tier.name}: ${tier.hours} hrs/mo | ${formatCurrency(tier.monthlyPrice)}/mo | ${formatCurrency(tier.annualValue)}/yr`);
    });
    lines.push('');
    lines.push('--- Revenue Targets ---');
    lines.push(`Clients for $100K/yr: ${results.clientsFor100K}`);
    lines.push(`Clients for $150K/yr: ${results.clientsFor150K}`);
    lines.push(`Clients for $200K/yr: ${results.clientsFor200K}`);
    lines.push('');
    lines.push('Generated at invoiceflow.au/tools/retainer-calculator');

    navigator.clipboard.writeText(lines.join('\n')).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const inputClass =
    'w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500/40 focus:border-teal-500/40 transition-all';
  const labelClass = 'block text-sm font-medium text-slate-300 mb-1.5';

  // Find the max bar height for the chart
  const maxRevenue = Math.max(...results.monthlyProjection.map((m) => m.revenue), 1);

  return (
    <div className="space-y-8">
      {/* Inputs */}
      <div className="glass rounded-2xl p-6 sm:p-8 space-y-6">
        <h2 className="text-xl font-bold text-white heading-font">Retainer Details</h2>
        <p className="text-sm text-slate-400">
          Enter your standard hourly rate and the monthly hours you&apos;d allocate to a retainer
          client. We&apos;ll calculate optimal pricing, compare tiers, and project your revenue.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label className={labelClass}>Your Hourly Rate ($)</label>
            <input
              type="number"
              value={hourlyRate}
              onChange={(e) => setHourlyRate(e.target.value)}
              className={inputClass}
              placeholder="120"
              min="0"
            />
            <p className="text-xs text-slate-500 mt-1">Your standard rate before any discount</p>
          </div>
          <div>
            <label className={labelClass}>Estimated Hours per Month</label>
            <input
              type="number"
              value={hoursPerMonth}
              onChange={(e) => setHoursPerMonth(e.target.value)}
              className={inputClass}
              placeholder="20"
              min="0"
            />
            <p className="text-xs text-slate-500 mt-1">Hours you&apos;d allocate to this retainer</p>
          </div>
        </div>

        {/* Discount Slider */}
        <div>
          <label className={labelClass}>
            Retainer Discount: <span className="text-teal-400 font-semibold">{discountPct}%</span>
          </label>
          <input
            type="range"
            min="0"
            max="25"
            step="1"
            value={discountPct}
            onChange={(e) => setDiscountPct(parseInt(e.target.value))}
            className="w-full h-2 rounded-full appearance-none cursor-pointer bg-white/10 accent-teal-500"
          />
          <div className="flex justify-between text-xs text-slate-500 mt-1">
            <span>0% (no discount)</span>
            <span>25% (maximum)</span>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            The discount clients get for committing to a retainer. 5-15% is typical.
          </p>
        </div>

        {/* Billing Cycle */}
        <div>
          <label className={labelClass}>Billing Cycle</label>
          <div className="flex gap-3">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-gradient-to-r from-teal-500 to-blue-500 text-white'
                  : 'bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('quarterly')}
              className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-all ${
                billingCycle === 'quarterly'
                  ? 'bg-gradient-to-r from-teal-500 to-blue-500 text-white'
                  : 'bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
              }`}
            >
              Quarterly
            </button>
          </div>
        </div>

        {/* Toggles */}
        <div className="grid sm:grid-cols-2 gap-6">
          {/* GST Toggle */}
          <div className="flex items-center justify-between bg-white/5 rounded-xl p-4">
            <div>
              <p className="text-sm font-medium text-white">Include GST</p>
              <p className="text-xs text-slate-500">10% GST for Australian businesses</p>
            </div>
            <button
              onClick={() => setIncludeGST(!includeGST)}
              className={`relative w-11 h-6 rounded-full transition-colors ${
                includeGST ? 'bg-teal-500' : 'bg-white/10'
              }`}
            >
              <span
                className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white transition-transform ${
                  includeGST ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
          </div>

          {/* Rollover Toggle */}
          <div className="flex items-center justify-between bg-white/5 rounded-xl p-4">
            <div>
              <p className="text-sm font-medium text-white">Rollover Unused Hours</p>
              <p className="text-xs text-slate-500">Allow clients to bank unused hours</p>
            </div>
            <button
              onClick={() => setRolloverEnabled(!rolloverEnabled)}
              className={`relative w-11 h-6 rounded-full transition-colors ${
                rolloverEnabled ? 'bg-teal-500' : 'bg-white/10'
              }`}
            >
              <span
                className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white transition-transform ${
                  rolloverEnabled ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
          </div>
        </div>

        {/* Rollover % — only when enabled */}
        {rolloverEnabled && (
          <div className="sm:w-1/2">
            <label className={labelClass}>Max Rollover (%)</label>
            <input
              type="number"
              value={maxRolloverPct}
              onChange={(e) => setMaxRolloverPct(e.target.value)}
              className={inputClass}
              placeholder="25"
              min="0"
              max="100"
            />
            <p className="text-xs text-slate-500 mt-1">
              Percentage of monthly hours that can roll over. Default 25%.
            </p>
          </div>
        )}
      </div>

      {/* Results Panel */}
      <div className="glass rounded-2xl p-6 sm:p-8 space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-white heading-font">Retainer Pricing</h2>
          <button
            onClick={handleCopy}
            className="flex items-center gap-2 text-sm px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all"
          >
            {copied ? (
              <span className="text-emerald-400">Copied</span>
            ) : (
              <>Copy Results</>
            )}
          </button>
        </div>

        {/* Key Metrics */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white/5 rounded-xl p-4 text-center">
            <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">Standard Hourly Cost</p>
            <p className="text-xl font-bold text-white">{formatCurrency(results.standardMonthlyCost)}</p>
            <p className="text-xs text-slate-500 mt-1">{formatRate(results.rate)}/hr &times; {results.hours} hrs</p>
          </div>
          <div className="bg-gradient-to-br from-teal-500/10 to-blue-500/10 border border-teal-500/20 rounded-xl p-4 text-center">
            <p className="text-xs text-teal-400/70 uppercase tracking-wide mb-1">Retainer Price</p>
            <p className="text-2xl sm:text-3xl font-bold gradient-text">
              {formatCurrency(results.retainerMonthlyPrice)}
            </p>
            <p className="text-xs text-teal-400/60 mt-1">per month</p>
          </div>
          <div className="bg-white/5 rounded-xl p-4 text-center">
            <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">Client Saves</p>
            <p className="text-xl font-bold text-emerald-400">{formatCurrency(results.monthlySavings)}</p>
            <p className="text-xs text-slate-500 mt-1">{discountPct}% discount per month</p>
          </div>
        </div>

        {/* Secondary Metrics */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white/5 rounded-xl p-4">
            <p className="text-xs text-slate-500 uppercase tracking-wide">Effective Rate</p>
            <p className="text-lg font-bold text-white">{formatRate(results.effectiveRate)}<span className="text-sm text-slate-500">/hr</span></p>
          </div>
          <div className="bg-white/5 rounded-xl p-4">
            <p className="text-xs text-slate-500 uppercase tracking-wide">
              {billingCycle === 'monthly' ? 'Annual' : 'Annual'} Value
            </p>
            <p className="text-lg font-bold text-white">{formatCurrency(results.annualRetainerValue)}</p>
          </div>
          {includeGST && (
            <>
              <div className="bg-white/5 rounded-xl p-4">
                <p className="text-xs text-slate-500 uppercase tracking-wide">GST Amount</p>
                <p className="text-lg font-bold text-white">{formatCurrency(results.gstAmount)}</p>
                <p className="text-xs text-slate-500 mt-0.5">per month</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <p className="text-xs text-slate-500 uppercase tracking-wide">Total inc GST</p>
                <p className="text-lg font-bold text-white">{formatCurrency(results.monthlyTotalIncGST)}</p>
                <p className="text-xs text-slate-500 mt-0.5">per month</p>
              </div>
            </>
          )}
          {rolloverEnabled && (
            <div className="bg-white/5 rounded-xl p-4">
              <p className="text-xs text-slate-500 uppercase tracking-wide">Max Rollover</p>
              <p className="text-lg font-bold text-white">{results.maxRolloverHours} hrs</p>
              <p className="text-xs text-slate-500 mt-0.5">per month</p>
            </div>
          )}
          {billingCycle === 'quarterly' && (
            <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-4">
              <p className="text-xs text-blue-400/70 uppercase tracking-wide">Quarterly Invoice</p>
              <p className="text-lg font-bold text-white">
                {formatCurrency(includeGST ? results.periodTotalIncGST : results.periodPrice)}
              </p>
              <p className="text-xs text-slate-500 mt-0.5">
                {includeGST ? 'inc GST' : 'ex GST'} per quarter
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Tier Comparison */}
      <div className="glass rounded-2xl p-6 sm:p-8 space-y-6">
        <h2 className="text-xl font-bold text-white heading-font">Retainer Tiers</h2>
        <p className="text-sm text-slate-400">
          Offer clients a choice of three tiers. The Standard tier matches your configuration above.
        </p>
        <div className="grid sm:grid-cols-3 gap-4">
          {results.tiers.map((tier, idx) => {
            const isStandard = idx === 1;
            return (
              <div
                key={tier.name}
                className={`rounded-2xl p-5 text-center transition-all ${
                  isStandard
                    ? 'bg-gradient-to-br from-teal-500/10 to-blue-500/10 border-2 border-teal-500/30 ring-1 ring-teal-400/20'
                    : 'bg-white/5 border border-white/10'
                }`}
              >
                {isStandard && (
                  <div className="inline-flex items-center px-2.5 py-0.5 bg-teal-500/20 border border-teal-500/30 rounded-full mb-3">
                    <span className="text-teal-400 text-xs font-medium">Recommended</span>
                  </div>
                )}
                <h3 className={`text-lg font-bold heading-font mb-1 ${isStandard ? 'text-teal-400' : 'text-white'}`}>
                  {tier.name}
                </h3>
                <p className="text-3xl font-bold text-white mb-1">
                  {formatCurrency(tier.monthlyPrice)}
                </p>
                <p className="text-xs text-slate-500 mb-4">per month</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-slate-400">
                    <span>Hours</span>
                    <span className="text-white font-medium">{tier.hours} hrs/mo</span>
                  </div>
                  <div className="border-t border-white/5" />
                  <div className="flex justify-between text-slate-400">
                    <span>Effective Rate</span>
                    <span className="text-white font-medium">{formatRate(tier.effectiveRate)}/hr</span>
                  </div>
                  <div className="border-t border-white/5" />
                  <div className="flex justify-between text-slate-400">
                    <span>Annual Value</span>
                    <span className="text-white font-medium">{formatCurrency(tier.annualValue)}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Revenue Projection */}
      <div className="glass rounded-2xl p-6 sm:p-8 space-y-6">
        <h2 className="text-xl font-bold text-white heading-font">Revenue Projection</h2>
        <p className="text-sm text-slate-400">
          12-month retainer income from this one client, plus what happens as you add more retainer clients.
        </p>

        {/* Bar Chart */}
        <div>
          <div className="flex items-end gap-1.5 sm:gap-2 h-48">
            {results.monthlyProjection.map((item) => {
              const heightPct = maxRevenue > 0 ? (item.revenue / maxRevenue) * 100 : 0;
              return (
                <div key={item.month} className="flex-1 flex flex-col items-center justify-end h-full">
                  <p className="text-xs text-slate-400 mb-1 hidden sm:block">{formatCurrency(item.revenue)}</p>
                  <div
                    className="w-full bg-gradient-to-t from-teal-500 to-blue-500 rounded-t-md transition-all duration-500 min-h-[4px]"
                    style={{ height: `${Math.max(heightPct, 2)}%` }}
                  />
                  <p className="text-xs text-slate-500 mt-1.5">{item.month}</p>
                </div>
              );
            })}
          </div>
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/10">
            <span className="text-sm text-slate-400">Total Annual Revenue (1 client)</span>
            <span className="text-lg font-bold gradient-text">{formatCurrency(results.totalAnnualRevenue)}</span>
          </div>
        </div>

        {/* Scaling — "If you had X clients..." */}
        <div>
          <h3 className="text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wide">
            Scale Your Retainer Revenue
          </h3>
          <p className="text-sm text-slate-400 mb-4">
            How many retainer clients at {formatCurrency(results.retainerMonthlyPrice)}/month do you
            need to hit these annual income targets?
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { target: 100000, clients: results.clientsFor100K },
              { target: 150000, clients: results.clientsFor150K },
              { target: 200000, clients: results.clientsFor200K },
            ].map((item) => (
              <div key={item.target} className="bg-white/5 rounded-xl p-5 text-center">
                <p className="text-xs text-slate-500 uppercase tracking-wide mb-2">
                  {formatCurrency(item.target)}/year
                </p>
                <p className="text-3xl font-bold text-white mb-1">
                  {results.retainerMonthlyPrice > 0 ? item.clients : '--'}
                </p>
                <p className="text-xs text-slate-500">
                  retainer {item.clients === 1 ? 'client' : 'clients'}
                </p>
                {results.retainerMonthlyPrice > 0 && (
                  <p className="text-xs text-teal-400/70 mt-2">
                    {formatCurrency(item.clients * results.retainerMonthlyPrice)}/mo total billing
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
