'use client';

import { useState, useCallback } from 'react';

function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

function formatPercent(value: number): string {
  return `${value.toFixed(1)}%`;
}

function calculateIncomeTax(taxableIncome: number): number {
  if (taxableIncome <= 18200) return 0;
  if (taxableIncome <= 45000) return (taxableIncome - 18200) * 0.16;
  if (taxableIncome <= 135000) return 4288 + (taxableIncome - 45000) * 0.30;
  if (taxableIncome <= 190000) return 31288 + (taxableIncome - 135000) * 0.37;
  return 51638 + (taxableIncome - 190000) * 0.45;
}

function getTaxBracketLabel(taxableIncome: number): string {
  if (taxableIncome <= 18200) return '0% (tax-free threshold)';
  if (taxableIncome <= 45000) return '16% marginal rate';
  if (taxableIncome <= 135000) return '30% marginal rate';
  if (taxableIncome <= 190000) return '37% marginal rate';
  return '45% marginal rate';
}

function calculateMedicareSurcharge(taxableIncome: number, hasPrivateHealth: boolean): number {
  if (hasPrivateHealth) return 0;
  if (taxableIncome <= 97000) return 0;
  if (taxableIncome <= 113000) return taxableIncome * 0.01;
  if (taxableIncome <= 151000) return taxableIncome * 0.0125;
  return taxableIncome * 0.015;
}

function getMedicareSurchargeRate(taxableIncome: number, hasPrivateHealth: boolean): string {
  if (hasPrivateHealth) return 'N/A (covered)';
  if (taxableIncome <= 97000) return 'Nil';
  if (taxableIncome <= 113000) return '1.0%';
  if (taxableIncome <= 151000) return '1.25%';
  return '1.5%';
}

export default function TaxEstimator() {
  const [grossIncome, setGrossIncome] = useState('');
  const [expenses, setExpenses] = useState('');
  const [otherIncome, setOtherIncome] = useState('');
  const [superContributions, setSuperContributions] = useState('');
  const [hasPrivateHealth, setHasPrivateHealth] = useState(false);
  const [copied, setCopied] = useState(false);

  const gross = parseFloat(grossIncome) || 0;
  const exp = parseFloat(expenses) || 0;
  const other = parseFloat(otherIncome) || 0;
  const superContribs = parseFloat(superContributions) || 0;

  const netFreelanceIncome = Math.max(0, gross - exp);
  const taxableIncome = Math.max(0, netFreelanceIncome + other - superContribs);

  const incomeTax = calculateIncomeTax(taxableIncome);
  const medicareLevy = taxableIncome * 0.02;
  const medicareSurcharge = calculateMedicareSurcharge(taxableIncome, hasPrivateHealth);
  const totalTax = incomeTax + medicareLevy + medicareSurcharge;
  const effectiveRate = taxableIncome > 0 ? (totalTax / taxableIncome) * 100 : 0;
  const takeHome = gross + other - exp - superContribs - totalTax;
  const quarterlyBAS = totalTax / 4;
  const suggestedSuper = netFreelanceIncome * 0.115;

  // For the visual bar
  const totalGross = gross + other;
  const taxPercent = totalGross > 0 ? (totalTax / totalGross) * 100 : 0;
  const expensePercent = totalGross > 0 ? (exp / totalGross) * 100 : 0;
  const superPercent = totalGross > 0 ? (superContribs / totalGross) * 100 : 0;
  const takeHomePercent = totalGross > 0 ? Math.max(0, (takeHome / totalGross) * 100) : 0;

  const handleCopy = useCallback(() => {
    const lines = [
      `Freelance Tax Estimate (2025-26)`,
      `================================`,
      `Gross Freelance Income: ${formatCurrency(gross)}`,
      `Business Expenses: ${formatCurrency(exp)}`,
      other > 0 ? `Other Income: ${formatCurrency(other)}` : null,
      superContribs > 0 ? `Super Contributions: ${formatCurrency(superContribs)}` : null,
      ``,
      `Taxable Income: ${formatCurrency(taxableIncome)}`,
      `Income Tax: ${formatCurrency(incomeTax)} (${getTaxBracketLabel(taxableIncome)})`,
      `Medicare Levy (2%): ${formatCurrency(medicareLevy)}`,
      medicareSurcharge > 0 ? `Medicare Levy Surcharge: ${formatCurrency(medicareSurcharge)}` : null,
      `Total Tax: ${formatCurrency(totalTax)}`,
      `Effective Tax Rate: ${formatPercent(effectiveRate)}`,
      ``,
      `Take-Home Income: ${formatCurrency(takeHome)}`,
      `Quarterly BAS Installment: ${formatCurrency(quarterlyBAS)}`,
      `Suggested Super (11.5%): ${formatCurrency(suggestedSuper)}`,
    ].filter(Boolean).join('\n');

    navigator.clipboard.writeText(lines);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [gross, exp, other, superContribs, taxableIncome, incomeTax, medicareLevy, medicareSurcharge, totalTax, effectiveRate, takeHome, quarterlyBAS, suggestedSuper]);

  const hasInput = gross > 0;

  return (
    <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
      {/* Input Fields */}
      <div className="space-y-5 mb-8">
        {/* Gross Freelance Income */}
        <div>
          <label className="block text-sm text-slate-400 mb-2">
            Gross Freelance Income
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg">$</span>
            <input
              type="number"
              inputMode="decimal"
              step="0.01"
              min="0"
              value={grossIncome}
              onChange={(e) => setGrossIncome(e.target.value)}
              placeholder="0.00"
              className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-10 pr-4 text-2xl text-white font-mono placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500/50 transition-all"
              autoFocus
            />
          </div>
        </div>

        {/* Business Expenses */}
        <div>
          <label className="block text-sm text-slate-400 mb-2">
            Business Expenses (Deductions)
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg">$</span>
            <input
              type="number"
              inputMode="decimal"
              step="0.01"
              min="0"
              value={expenses}
              onChange={(e) => setExpenses(e.target.value)}
              placeholder="0.00"
              className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-lg text-white font-mono placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500/50 transition-all"
            />
          </div>
        </div>

        {/* Two-column: Other Income + Super */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-slate-400 mb-2">
              Other Income <span className="text-slate-600">(optional)</span>
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg">$</span>
              <input
                type="number"
                inputMode="decimal"
                step="0.01"
                min="0"
                value={otherIncome}
                onChange={(e) => setOtherIncome(e.target.value)}
                placeholder="0.00"
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-lg text-white font-mono placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500/50 transition-all"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm text-slate-400 mb-2">
              Super Contributions <span className="text-slate-600">(optional)</span>
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg">$</span>
              <input
                type="number"
                inputMode="decimal"
                step="0.01"
                min="0"
                value={superContributions}
                onChange={(e) => setSuperContributions(e.target.value)}
                placeholder="0.00"
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-lg text-white font-mono placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500/50 transition-all"
              />
            </div>
          </div>
        </div>

        {/* Private Health Insurance Toggle */}
        <div className="flex items-center justify-between py-3 px-4 rounded-xl bg-white/5">
          <div>
            <span className="text-slate-300 text-sm">Private Health Insurance</span>
            <p className="text-xs text-slate-500 mt-0.5">Avoids Medicare Levy Surcharge for high earners</p>
          </div>
          <button
            onClick={() => setHasPrivateHealth(!hasPrivateHealth)}
            className={`relative w-14 h-7 rounded-full transition-all ${
              hasPrivateHealth
                ? 'bg-gradient-to-r from-teal-500 to-blue-500'
                : 'bg-white/10'
            }`}
          >
            <div
              className={`absolute top-0.5 left-0.5 h-6 w-6 rounded-full bg-white shadow-md transition-transform ${
                hasPrivateHealth ? 'translate-x-7' : 'translate-x-0'
              }`}
            />
          </button>
        </div>
      </div>

      {/* Quick Income Buttons */}
      <div className="mb-8 flex flex-wrap gap-2 justify-center">
        {[30000, 50000, 75000, 100000, 150000, 200000].map((val) => (
          <button
            key={val}
            onClick={() => setGrossIncome(val.toString())}
            className="px-3 py-1.5 rounded-lg text-xs text-slate-400 bg-white/5 hover:bg-white/10 hover:text-white transition-all"
          >
            ${val.toLocaleString()}
          </button>
        ))}
      </div>

      {/* Results */}
      {hasInput && (
        <div className="space-y-3">
          {/* Income Breakdown */}
          <div className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-1 mt-2">
            Income Breakdown
          </div>

          <div className="flex items-center justify-between py-2 px-4 rounded-xl bg-white/5">
            <span className="text-slate-400 text-sm">Gross Income</span>
            <span className="text-white font-mono">{formatCurrency(gross + other)}</span>
          </div>

          {exp > 0 && (
            <div className="flex items-center justify-between py-2 px-4 rounded-xl bg-white/5">
              <span className="text-slate-400 text-sm">Less: Business Expenses</span>
              <span className="text-red-400 font-mono">-{formatCurrency(exp)}</span>
            </div>
          )}

          {superContribs > 0 && (
            <div className="flex items-center justify-between py-2 px-4 rounded-xl bg-white/5">
              <span className="text-slate-400 text-sm">Less: Super Contributions</span>
              <span className="text-red-400 font-mono">-{formatCurrency(superContribs)}</span>
            </div>
          )}

          <div className="flex items-center justify-between py-3 px-4 rounded-xl bg-teal-500/10 border border-teal-500/20">
            <span className="text-teal-400 font-semibold text-sm">Taxable Income</span>
            <span className="text-teal-400 font-mono text-lg font-semibold">{formatCurrency(taxableIncome)}</span>
          </div>

          {/* Tax Breakdown */}
          <div className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-1 mt-4">
            Tax Breakdown
          </div>

          <div className="flex items-center justify-between py-2 px-4 rounded-xl bg-white/5">
            <div>
              <span className="text-slate-400 text-sm">Income Tax</span>
              <span className="text-slate-600 text-xs ml-2">({getTaxBracketLabel(taxableIncome)})</span>
            </div>
            <span className="text-white font-mono">{formatCurrency(incomeTax)}</span>
          </div>

          <div className="flex items-center justify-between py-2 px-4 rounded-xl bg-white/5">
            <span className="text-slate-400 text-sm">Medicare Levy (2%)</span>
            <span className="text-white font-mono">{formatCurrency(medicareLevy)}</span>
          </div>

          {medicareSurcharge > 0 && (
            <div className="flex items-center justify-between py-2 px-4 rounded-xl bg-orange-500/10 border border-orange-500/20">
              <div>
                <span className="text-orange-400 text-sm">Medicare Levy Surcharge</span>
                <span className="text-orange-600 text-xs ml-2">({getMedicareSurchargeRate(taxableIncome, hasPrivateHealth)})</span>
              </div>
              <span className="text-orange-400 font-mono">{formatCurrency(medicareSurcharge)}</span>
            </div>
          )}

          <div className="flex items-center justify-between py-3 px-4 rounded-xl bg-white/10 border border-white/10">
            <span className="text-white font-semibold text-sm">Total Tax</span>
            <span className="text-white font-mono text-lg font-semibold">{formatCurrency(totalTax)}</span>
          </div>

          <div className="flex items-center justify-between py-2 px-4 rounded-xl bg-white/5">
            <span className="text-slate-400 text-sm">Effective Tax Rate</span>
            <span className="text-white font-mono">{formatPercent(effectiveRate)}</span>
          </div>

          {/* Take-Home */}
          <div className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-1 mt-4">
            What You Keep
          </div>

          <div className="flex items-center justify-between py-3 px-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
            <span className="text-emerald-400 font-semibold">Take-Home Income</span>
            <span className="text-emerald-400 font-mono text-xl font-bold">{formatCurrency(takeHome)}</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="flex items-center justify-between py-2 px-4 rounded-xl bg-white/5">
              <span className="text-slate-400 text-sm">Quarterly BAS Installment</span>
              <span className="text-white font-mono text-sm">{formatCurrency(quarterlyBAS)}</span>
            </div>
            <div className="flex items-center justify-between py-2 px-4 rounded-xl bg-white/5">
              <span className="text-slate-400 text-sm">Super at 11.5%</span>
              <span className="text-white font-mono text-sm">{formatCurrency(suggestedSuper)}</span>
            </div>
          </div>

          {/* Visual Bar Chart */}
          <div className="mt-6 pt-6 border-t border-white/10">
            <div className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-3">
              Income Breakdown
            </div>
            <div className="h-8 w-full rounded-xl overflow-hidden flex">
              {takeHomePercent > 0 && (
                <div
                  className="bg-gradient-to-r from-emerald-500 to-emerald-400 transition-all duration-500"
                  style={{ width: `${takeHomePercent}%` }}
                  title={`Take-home: ${formatPercent(takeHomePercent)}`}
                />
              )}
              {taxPercent > 0 && (
                <div
                  className="bg-gradient-to-r from-red-500 to-orange-500 transition-all duration-500"
                  style={{ width: `${taxPercent}%` }}
                  title={`Tax: ${formatPercent(taxPercent)}`}
                />
              )}
              {expensePercent > 0 && (
                <div
                  className="bg-gradient-to-r from-slate-500 to-slate-400 transition-all duration-500"
                  style={{ width: `${expensePercent}%` }}
                  title={`Expenses: ${formatPercent(expensePercent)}`}
                />
              )}
              {superPercent > 0 && (
                <div
                  className="bg-gradient-to-r from-blue-500 to-blue-400 transition-all duration-500"
                  style={{ width: `${superPercent}%` }}
                  title={`Super: ${formatPercent(superPercent)}`}
                />
              )}
            </div>
            <div className="flex flex-wrap gap-4 mt-3 text-xs">
              <div className="flex items-center gap-1.5">
                <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                <span className="text-slate-400">Take-home ({formatPercent(takeHomePercent)})</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="h-2.5 w-2.5 rounded-full bg-red-500" />
                <span className="text-slate-400">Tax ({formatPercent(taxPercent)})</span>
              </div>
              {expensePercent > 0 && (
                <div className="flex items-center gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-slate-500" />
                  <span className="text-slate-400">Expenses ({formatPercent(expensePercent)})</span>
                </div>
              )}
              {superPercent > 0 && (
                <div className="flex items-center gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-blue-500" />
                  <span className="text-slate-400">Super ({formatPercent(superPercent)})</span>
                </div>
              )}
            </div>
          </div>

          {/* Copy Button */}
          <button
            onClick={handleCopy}
            className="mt-6 w-full py-3 rounded-xl text-sm font-medium transition-all bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10"
          >
            {copied ? 'Copied to clipboard!' : 'Copy results'}
          </button>
        </div>
      )}

      {/* Empty State */}
      {!hasInput && (
        <div className="text-center py-8 text-slate-500">
          <p className="text-sm">Enter your gross freelance income above to see your estimated tax breakdown.</p>
        </div>
      )}
    </div>
  );
}
