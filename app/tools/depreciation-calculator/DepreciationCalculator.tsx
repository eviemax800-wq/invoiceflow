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

function formatCurrencyExact(value: number): string {
  return new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

type DepreciationMethod = 'instant' | 'diminishing' | 'prime';

interface Asset {
  id: string;
  name: string;
  cost: string;
  purchaseDate: string;
  effectiveLife: string;
  presetKey: string;
  method: DepreciationMethod;
}

interface ScheduleRow {
  year: number;
  fyLabel: string;
  openingValue: number;
  depreciation: number;
  closingValue: number;
  cumulative: number;
  daysHeld: number;
}

interface AssetResult {
  asset: Asset;
  schedule: ScheduleRow[];
  year1Deduction: number;
  totalDeductionThisFY: number;
  totalDepreciation: number;
}

const assetPresets: { key: string; label: string; life: number }[] = [
  { key: 'laptop', label: 'Laptop / Notebook', life: 4 },
  { key: 'desktop', label: 'Desktop Computer', life: 4 },
  { key: 'phone', label: 'Mobile Phone', life: 3 },
  { key: 'camera', label: 'Camera (Digital)', life: 6 },
  { key: 'desk', label: 'Office Desk / Furniture', life: 10 },
  { key: 'monitor', label: 'Monitor / Display', life: 4 },
  { key: 'software', label: 'Software (General)', life: 2.5 },
  { key: 'car', label: 'Motor Vehicle', life: 8 },
  { key: 'printer', label: 'Printer / Scanner', life: 5 },
  { key: 'custom', label: 'Custom', life: 0 },
];

const INSTANT_THRESHOLD = 20000;

function createDefaultAsset(): Asset {
  const today = new Date();
  const dateStr = today.toISOString().split('T')[0];
  return {
    id: crypto.randomUUID(),
    name: '',
    cost: '',
    purchaseDate: dateStr,
    effectiveLife: '4',
    presetKey: 'laptop',
    method: 'diminishing',
  };
}

function getFYStart(date: Date): Date {
  const year = date.getMonth() >= 6 ? date.getFullYear() : date.getFullYear() - 1;
  return new Date(year, 6, 1); // 1 July
}

function getFYEnd(date: Date): Date {
  const year = date.getMonth() >= 6 ? date.getFullYear() + 1 : date.getFullYear();
  return new Date(year, 5, 30); // 30 June
}

function getFYLabel(date: Date): string {
  const start = getFYStart(date);
  return `FY ${start.getFullYear()}-${String(start.getFullYear() + 1).slice(2)}`;
}

function daysBetween(a: Date, b: Date): number {
  const msPerDay = 1000 * 60 * 60 * 24;
  return Math.max(0, Math.round((b.getTime() - a.getTime()) / msPerDay) + 1);
}

function calculateSchedule(
  cost: number,
  purchaseDate: Date,
  effectiveLife: number,
  method: DepreciationMethod
): ScheduleRow[] {
  if (cost <= 0 || effectiveLife <= 0) return [];

  if (method === 'instant') {
    const fyLabel = getFYLabel(purchaseDate);
    const fyEnd = getFYEnd(purchaseDate);
    const daysHeld = daysBetween(purchaseDate, fyEnd);
    return [
      {
        year: 1,
        fyLabel,
        openingValue: cost,
        depreciation: cost,
        closingValue: 0,
        cumulative: cost,
        daysHeld,
      },
    ];
  }

  const schedule: ScheduleRow[] = [];
  let openingValue = cost;
  let cumulative = 0;
  let currentDate = new Date(purchaseDate);
  let yearNum = 1;

  const rate = method === 'diminishing' ? 200 / effectiveLife / 100 : 100 / effectiveLife / 100;
  const maxYears = Math.ceil(effectiveLife) + 2; // extra buffer for partial years

  for (let i = 0; i < maxYears && openingValue > 0.01; i++) {
    const fyEnd = getFYEnd(currentDate);
    const daysHeld = daysBetween(currentDate, fyEnd);
    const daysFraction = daysHeld / 365;

    let depreciation: number;
    if (method === 'diminishing') {
      depreciation = openingValue * rate * daysFraction;
    } else {
      // Prime cost always uses original cost
      depreciation = cost * rate * daysFraction;
    }

    // Don't depreciate below zero
    depreciation = Math.min(depreciation, openingValue);

    // Round to 2 decimal places for accuracy
    depreciation = Math.round(depreciation * 100) / 100;

    const closingValue = Math.max(0, Math.round((openingValue - depreciation) * 100) / 100);
    cumulative = Math.round((cumulative + depreciation) * 100) / 100;

    schedule.push({
      year: yearNum,
      fyLabel: getFYLabel(currentDate),
      openingValue: Math.round(openingValue * 100) / 100,
      depreciation,
      closingValue,
      cumulative,
      daysHeld,
    });

    openingValue = closingValue;
    // Move to start of next FY
    const nextFYStart = new Date(fyEnd.getFullYear(), 6, 1);
    currentDate = nextFYStart;
    yearNum++;
  }

  return schedule;
}

function calculateMethodComparison(
  cost: number,
  purchaseDate: Date,
  effectiveLife: number
): { instant: ScheduleRow[]; diminishing: ScheduleRow[]; prime: ScheduleRow[] } {
  return {
    instant:
      cost < INSTANT_THRESHOLD
        ? calculateSchedule(cost, purchaseDate, effectiveLife, 'instant')
        : [],
    diminishing: calculateSchedule(cost, purchaseDate, effectiveLife, 'diminishing'),
    prime: calculateSchedule(cost, purchaseDate, effectiveLife, 'prime'),
  };
}

export default function DepreciationCalculator() {
  const [assets, setAssets] = useState<Asset[]>([createDefaultAsset()]);
  const [marginalRate, setMarginalRate] = useState('30');
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'schedule' | 'comparison' | 'summary'>('schedule');

  const updateAsset = useCallback((id: string, updates: Partial<Asset>) => {
    setAssets((prev) =>
      prev.map((a) => (a.id === id ? { ...a, ...updates } : a))
    );
  }, []);

  const handlePresetChange = useCallback(
    (id: string, presetKey: string) => {
      const preset = assetPresets.find((p) => p.key === presetKey);
      if (!preset) return;
      const updates: Partial<Asset> = { presetKey };
      if (presetKey !== 'custom') {
        updates.effectiveLife = String(preset.life);
        if (!assets.find((a) => a.id === id)?.name) {
          updates.name = preset.label;
        }
      }
      updateAsset(id, updates);
    },
    [assets, updateAsset]
  );

  const addAsset = useCallback(() => {
    if (assets.length >= 10) return;
    setAssets((prev) => [...prev, createDefaultAsset()]);
  }, [assets.length]);

  const removeAsset = useCallback((id: string) => {
    setAssets((prev) => {
      if (prev.length <= 1) return prev;
      return prev.filter((a) => a.id !== id);
    });
  }, []);

  const results = useMemo<AssetResult[]>(() => {
    return assets
      .map((asset) => {
        const cost = parseFloat(asset.cost) || 0;
        const effectiveLife = parseFloat(asset.effectiveLife) || 0;
        if (cost <= 0 || effectiveLife <= 0 || !asset.purchaseDate) return null;

        const purchaseDate = new Date(asset.purchaseDate);
        if (isNaN(purchaseDate.getTime())) return null;

        const schedule = calculateSchedule(cost, purchaseDate, effectiveLife, asset.method);
        const year1Deduction = schedule.length > 0 ? schedule[0].depreciation : 0;
        const totalDepreciation =
          schedule.length > 0 ? schedule[schedule.length - 1].cumulative : 0;

        // Total deduction for the current FY (all assets in the same FY)
        const now = new Date();
        const currentFYLabel = getFYLabel(now);
        const thisFYDeduction = schedule
          .filter((r) => r.fyLabel === currentFYLabel)
          .reduce((sum, r) => sum + r.depreciation, 0);

        return {
          asset,
          schedule,
          year1Deduction,
          totalDeductionThisFY: thisFYDeduction,
          totalDepreciation,
        };
      })
      .filter((r): r is AssetResult => r !== null);
  }, [assets]);

  const comparison = useMemo(() => {
    if (results.length === 0) return null;
    const firstAsset = results[0].asset;
    const cost = parseFloat(firstAsset.cost) || 0;
    const effectiveLife = parseFloat(firstAsset.effectiveLife) || 0;
    if (cost <= 0 || effectiveLife <= 0 || !firstAsset.purchaseDate) return null;
    const purchaseDate = new Date(firstAsset.purchaseDate);
    if (isNaN(purchaseDate.getTime())) return null;
    return calculateMethodComparison(cost, purchaseDate, effectiveLife);
  }, [results]);

  const totals = useMemo(() => {
    const totalAssetValue = results.reduce(
      (sum, r) => sum + (parseFloat(r.asset.cost) || 0),
      0
    );
    const totalYear1 = results.reduce((sum, r) => sum + r.year1Deduction, 0);
    const totalThisFY = results.reduce((sum, r) => sum + r.totalDeductionThisFY, 0);
    const rate = parseFloat(marginalRate) / 100;
    const taxSavings = totalThisFY * rate;
    return { totalAssetValue, totalYear1, totalThisFY, taxSavings };
  }, [results, marginalRate]);

  const handleCopy = useCallback(() => {
    if (results.length === 0) return;
    const rate = parseFloat(marginalRate) / 100;
    const lines: string[] = [
      'DEPRECIATION SCHEDULE',
      '=====================',
      '',
      `Tax Rate: ${marginalRate}%`,
      `Total Asset Value: ${formatCurrencyExact(totals.totalAssetValue)}`,
      `Total Year 1 Deduction: ${formatCurrencyExact(totals.totalYear1)}`,
      `Total Deduction This FY: ${formatCurrencyExact(totals.totalThisFY)}`,
      `Tax Savings This FY: ${formatCurrencyExact(totals.taxSavings)}`,
      '',
    ];

    results.forEach((r) => {
      lines.push(`--- ${r.asset.name || 'Unnamed Asset'} ---`);
      lines.push(`Cost: ${formatCurrencyExact(parseFloat(r.asset.cost) || 0)}`);
      lines.push(`Purchase Date: ${r.asset.purchaseDate}`);
      lines.push(`Effective Life: ${r.asset.effectiveLife} years`);
      lines.push(
        `Method: ${r.asset.method === 'instant' ? 'Instant Asset Write-Off' : r.asset.method === 'diminishing' ? 'Diminishing Value' : 'Prime Cost'}`
      );
      lines.push('');
      lines.push('Year | FY         | Opening     | Depreciation | Closing     | Cumulative');
      lines.push('-----|------------|-------------|-------------|-------------|------------');
      r.schedule.forEach((row) => {
        lines.push(
          `${String(row.year).padStart(4)} | ${row.fyLabel.padEnd(10)} | ${formatCurrencyExact(row.openingValue).padStart(11)} | ${formatCurrencyExact(row.depreciation).padStart(11)} | ${formatCurrencyExact(row.closingValue).padStart(11)} | ${formatCurrencyExact(row.cumulative).padStart(11)}`
        );
      });
      lines.push('');
      lines.push(`Year 1 Deduction: ${formatCurrencyExact(r.year1Deduction)}`);
      lines.push(`Tax Saving (Year 1): ${formatCurrencyExact(r.year1Deduction * rate)}`);
      lines.push('');
    });

    lines.push('Generated by InvoiceFlow — invoiceflow.au/tools/depreciation-calculator');
    navigator.clipboard.writeText(lines.join('\n'));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [results, marginalRate, totals]);

  const inputClass =
    'w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-white focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/30 outline-none transition-colors';
  const inputClassDollar =
    'w-full bg-white/5 border border-white/10 rounded-lg px-3 pl-7 py-2.5 text-white focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/30 outline-none transition-colors';
  const selectClass =
    'w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-white focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/30 outline-none transition-colors appearance-none';

  return (
    <div className="space-y-8">
      {/* Assets Input */}
      {assets.map((asset, idx) => (
        <div key={asset.id} className="glass rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-white heading-font">
              {assets.length > 1 ? `Asset ${idx + 1}` : 'Asset Details'}
            </h3>
            {assets.length > 1 && (
              <button
                onClick={() => removeAsset(asset.id)}
                className="text-sm text-rose-400 hover:text-rose-300 transition-colors"
              >
                Remove
              </button>
            )}
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {/* Asset Name */}
            <div>
              <label className="block text-sm text-slate-300 mb-1.5">Asset Name</label>
              <input
                type="text"
                value={asset.name}
                onChange={(e) => updateAsset(asset.id, { name: e.target.value })}
                className={inputClass}
                placeholder="e.g. MacBook Pro"
              />
            </div>

            {/* Purchase Price */}
            <div>
              <label className="block text-sm text-slate-300 mb-1.5">Purchase Price (ex GST)</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">$</span>
                <input
                  type="number"
                  value={asset.cost}
                  onChange={(e) => updateAsset(asset.id, { cost: e.target.value })}
                  className={inputClassDollar}
                  placeholder="2500"
                  min="0"
                  step="1"
                />
              </div>
            </div>

            {/* Purchase Date */}
            <div>
              <label className="block text-sm text-slate-300 mb-1.5">Purchase Date</label>
              <input
                type="date"
                value={asset.purchaseDate}
                onChange={(e) => updateAsset(asset.id, { purchaseDate: e.target.value })}
                className={inputClass}
              />
            </div>

            {/* Asset Type Preset */}
            <div>
              <label className="block text-sm text-slate-300 mb-1.5">Asset Type</label>
              <select
                value={asset.presetKey}
                onChange={(e) => handlePresetChange(asset.id, e.target.value)}
                className={selectClass}
              >
                {assetPresets.map((p) => (
                  <option key={p.key} value={p.key} className="bg-slate-800">
                    {p.label}
                    {p.life > 0 ? ` (${p.life}yr)` : ''}
                  </option>
                ))}
              </select>
            </div>

            {/* Effective Life */}
            <div>
              <label className="block text-sm text-slate-300 mb-1.5">Effective Life (years)</label>
              <input
                type="number"
                value={asset.effectiveLife}
                onChange={(e) =>
                  updateAsset(asset.id, {
                    effectiveLife: e.target.value,
                    presetKey: 'custom',
                  })
                }
                className={inputClass}
                placeholder="4"
                min="0.5"
                step="0.5"
              />
              <p className="text-xs text-slate-500 mt-1">
                ATO-determined effective life. Change to &quot;Custom&quot; to enter your own.
              </p>
            </div>

            {/* Depreciation Method */}
            <div>
              <label className="block text-sm text-slate-300 mb-1.5">Depreciation Method</label>
              <select
                value={asset.method}
                onChange={(e) =>
                  updateAsset(asset.id, { method: e.target.value as DepreciationMethod })
                }
                className={selectClass}
              >
                <option value="diminishing" className="bg-slate-800">
                  Diminishing Value (default)
                </option>
                <option value="prime" className="bg-slate-800">
                  Prime Cost
                </option>
                {(parseFloat(asset.cost) || 0) < INSTANT_THRESHOLD && (
                  <option value="instant" className="bg-slate-800">
                    Instant Asset Write-Off (&lt; $20,000)
                  </option>
                )}
              </select>
              {asset.method === 'instant' && (parseFloat(asset.cost) || 0) >= INSTANT_THRESHOLD && (
                <p className="text-xs text-rose-400 mt-1">
                  Asset exceeds $20,000 threshold. Not eligible for instant write-off.
                </p>
              )}
              {asset.method === 'instant' && (parseFloat(asset.cost) || 0) < INSTANT_THRESHOLD && (
                <p className="text-xs text-emerald-400 mt-1">
                  Eligible for instant write-off (2024-25 threshold: $20,000 ex GST).
                </p>
              )}
            </div>
          </div>
        </div>
      ))}

      {/* Add Asset Button */}
      {assets.length < 10 && (
        <button
          onClick={addAsset}
          className="w-full py-3 rounded-xl border border-dashed border-white/20 hover:border-teal-500/40 text-slate-400 hover:text-teal-400 transition-all text-sm font-medium"
        >
          + Add Another Asset ({assets.length}/10)
        </button>
      )}

      {/* Tax Rate Selector */}
      <div className="glass rounded-2xl p-6">
        <h3 className="text-lg font-bold text-white heading-font mb-4">Marginal Tax Rate</h3>
        <div className="flex flex-wrap gap-2">
          {[
            { label: '0% (under $18,200)', value: '0' },
            { label: '16% ($18,201–$45,000)', value: '16' },
            { label: '30% ($45,001–$135,000)', value: '30' },
            { label: '37% ($135,001–$190,000)', value: '37' },
            { label: '45% ($190,001+)', value: '45' },
          ].map((rate) => (
            <button
              key={rate.value}
              onClick={() => setMarginalRate(rate.value)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                marginalRate === rate.value
                  ? 'bg-gradient-to-r from-teal-500 to-blue-500 text-white'
                  : 'bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-500/30 text-slate-300 hover:text-white'
              }`}
            >
              {rate.label}
            </button>
          ))}
        </div>
        <p className="text-xs text-slate-500 mt-2">
          Your marginal tax rate determines the actual dollar value of your depreciation deductions.
          Choose the bracket your taxable income falls into (2024-25 ATO rates).
        </p>
      </div>

      {/* Results */}
      {results.length > 0 && (
        <>
          {/* Summary Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="glass rounded-xl p-4 text-center">
              <p className="text-xs text-slate-400 mb-1">Total Asset Value</p>
              <p className="text-xl font-bold text-white">
                {formatCurrency(totals.totalAssetValue)}
              </p>
            </div>
            <div className="glass rounded-xl p-4 text-center">
              <p className="text-xs text-slate-400 mb-1">Year 1 Deduction</p>
              <p className="text-xl font-bold text-teal-400">
                {formatCurrency(totals.totalYear1)}
              </p>
            </div>
            <div className="glass rounded-xl p-4 text-center">
              <p className="text-xs text-slate-400 mb-1">Deduction This FY</p>
              <p className="text-xl font-bold text-emerald-400">
                {formatCurrency(totals.totalThisFY)}
              </p>
            </div>
            <div className="glass rounded-xl p-4 text-center">
              <p className="text-xs text-slate-400 mb-1">
                Tax Savings ({marginalRate}%)
              </p>
              <p className="text-xl font-bold text-amber-400">
                {formatCurrency(totals.taxSavings)}
              </p>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 p-1 bg-white/5 rounded-xl w-fit">
            {(
              [
                { key: 'schedule', label: 'Depreciation Schedule' },
                { key: 'comparison', label: 'Method Comparison' },
                ...(results.length > 1
                  ? [{ key: 'summary', label: 'Multi-Asset Summary' }]
                  : []),
              ] as { key: typeof activeTab; label: string }[]
            ).map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeTab === tab.key
                    ? 'bg-gradient-to-r from-teal-500 to-blue-500 text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Depreciation Schedule Tab */}
          {activeTab === 'schedule' &&
            results.map((r, rIdx) => (
              <div key={r.asset.id} className="glass rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-white heading-font">
                    {r.asset.name || `Asset ${rIdx + 1}`}
                    <span className="text-sm font-normal text-slate-400 ml-2">
                      ({r.asset.method === 'instant'
                        ? 'Instant Write-Off'
                        : r.asset.method === 'diminishing'
                        ? 'Diminishing Value'
                        : 'Prime Cost'})
                    </span>
                  </h3>
                  <div className="text-right">
                    <p className="text-xs text-slate-400">Total Depreciation</p>
                    <p className="text-lg font-bold text-teal-400">
                      {formatCurrency(r.totalDepreciation)}
                    </p>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left text-white py-3 pr-3 font-semibold">Year</th>
                        <th className="text-left text-white py-3 pr-3 font-semibold">FY</th>
                        <th className="text-right text-white py-3 pr-3 font-semibold">Opening</th>
                        <th className="text-right text-white py-3 pr-3 font-semibold">
                          Depreciation
                        </th>
                        <th className="text-right text-white py-3 pr-3 font-semibold">Closing</th>
                        <th className="text-right text-white py-3 font-semibold">Cumulative</th>
                      </tr>
                    </thead>
                    <tbody className="text-slate-300">
                      {r.schedule.map((row) => (
                        <tr key={row.year} className="border-b border-white/5">
                          <td className="py-2.5 pr-3">{row.year}</td>
                          <td className="py-2.5 pr-3 text-slate-400">{row.fyLabel}</td>
                          <td className="py-2.5 pr-3 text-right">
                            {formatCurrencyExact(row.openingValue)}
                          </td>
                          <td className="py-2.5 pr-3 text-right text-teal-400 font-medium">
                            {formatCurrencyExact(row.depreciation)}
                          </td>
                          <td className="py-2.5 pr-3 text-right">
                            {formatCurrencyExact(row.closingValue)}
                          </td>
                          <td className="py-2.5 text-right text-slate-400">
                            {formatCurrencyExact(row.cumulative)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Per-asset tax savings */}
                <div className="mt-4 bg-white/5 rounded-xl p-4 flex flex-wrap gap-6">
                  <div>
                    <p className="text-xs text-slate-400">Year 1 Deduction</p>
                    <p className="text-lg font-bold text-white">
                      {formatCurrencyExact(r.year1Deduction)}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">
                      Year 1 Tax Saving ({marginalRate}%)
                    </p>
                    <p className="text-lg font-bold text-emerald-400">
                      {formatCurrencyExact(
                        r.year1Deduction * (parseFloat(marginalRate) / 100)
                      )}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Total Tax Saving (lifetime)</p>
                    <p className="text-lg font-bold text-amber-400">
                      {formatCurrencyExact(
                        r.totalDepreciation * (parseFloat(marginalRate) / 100)
                      )}
                    </p>
                  </div>
                </div>
              </div>
            ))}

          {/* Method Comparison Tab */}
          {activeTab === 'comparison' && comparison && results.length > 0 && (
            <div className="glass rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white heading-font mb-2">
                Method Comparison — {results[0].asset.name || 'Asset 1'}
              </h3>
              <p className="text-sm text-slate-400 mb-4">
                Side-by-side comparison of all depreciation methods for{' '}
                {formatCurrency(parseFloat(results[0].asset.cost) || 0)} over{' '}
                {results[0].asset.effectiveLife} years.
              </p>

              {/* Comparison Summary Cards */}
              <div className="grid sm:grid-cols-3 gap-4 mb-6">
                {comparison.instant.length > 0 && (
                  <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4 text-center">
                    <p className="text-xs text-slate-400 mb-1">Instant Write-Off</p>
                    <p className="text-2xl font-bold text-emerald-400">
                      {formatCurrency(parseFloat(results[0].asset.cost) || 0)}
                    </p>
                    <p className="text-xs text-emerald-400 mt-1">Year 1 — Full deduction</p>
                    <p className="text-sm text-slate-300 mt-2">
                      Tax saving:{' '}
                      <span className="text-emerald-400 font-medium">
                        {formatCurrency(
                          (parseFloat(results[0].asset.cost) || 0) *
                            (parseFloat(marginalRate) / 100)
                        )}
                      </span>
                    </p>
                  </div>
                )}
                <div className="bg-teal-500/10 border border-teal-500/20 rounded-xl p-4 text-center">
                  <p className="text-xs text-slate-400 mb-1">Diminishing Value</p>
                  <p className="text-2xl font-bold text-teal-400">
                    {comparison.diminishing.length > 0
                      ? formatCurrency(comparison.diminishing[0].depreciation)
                      : '$0'}
                  </p>
                  <p className="text-xs text-teal-400 mt-1">
                    Year 1 — {comparison.diminishing.length} year schedule
                  </p>
                  <p className="text-sm text-slate-300 mt-2">
                    Year 1 tax saving:{' '}
                    <span className="text-teal-400 font-medium">
                      {comparison.diminishing.length > 0
                        ? formatCurrency(
                            comparison.diminishing[0].depreciation *
                              (parseFloat(marginalRate) / 100)
                          )
                        : '$0'}
                    </span>
                  </p>
                </div>
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4 text-center">
                  <p className="text-xs text-slate-400 mb-1">Prime Cost</p>
                  <p className="text-2xl font-bold text-blue-400">
                    {comparison.prime.length > 0
                      ? formatCurrency(comparison.prime[0].depreciation)
                      : '$0'}
                  </p>
                  <p className="text-xs text-blue-400 mt-1">
                    Year 1 — {comparison.prime.length} year schedule
                  </p>
                  <p className="text-sm text-slate-300 mt-2">
                    Year 1 tax saving:{' '}
                    <span className="text-blue-400 font-medium">
                      {comparison.prime.length > 0
                        ? formatCurrency(
                            comparison.prime[0].depreciation *
                              (parseFloat(marginalRate) / 100)
                          )
                        : '$0'}
                    </span>
                  </p>
                </div>
              </div>

              {/* Year-by-year comparison table */}
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left text-white py-3 pr-3 font-semibold">Year</th>
                      <th className="text-left text-white py-3 pr-3 font-semibold">FY</th>
                      <th className="text-right text-teal-400 py-3 pr-3 font-semibold">
                        Diminishing
                      </th>
                      <th className="text-right text-blue-400 py-3 pr-3 font-semibold">
                        Prime Cost
                      </th>
                      <th className="text-right text-white py-3 font-semibold">Difference</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-300">
                    {(() => {
                      const maxLen = Math.max(
                        comparison.diminishing.length,
                        comparison.prime.length
                      );
                      const rows = [];
                      for (let i = 0; i < maxLen; i++) {
                        const dv = comparison.diminishing[i];
                        const pc = comparison.prime[i];
                        const dvDep = dv?.depreciation || 0;
                        const pcDep = pc?.depreciation || 0;
                        const diff = dvDep - pcDep;
                        rows.push(
                          <tr key={i} className="border-b border-white/5">
                            <td className="py-2.5 pr-3">{i + 1}</td>
                            <td className="py-2.5 pr-3 text-slate-400">
                              {dv?.fyLabel || pc?.fyLabel || ''}
                            </td>
                            <td className="py-2.5 pr-3 text-right text-teal-400">
                              {formatCurrencyExact(dvDep)}
                            </td>
                            <td className="py-2.5 pr-3 text-right text-blue-400">
                              {formatCurrencyExact(pcDep)}
                            </td>
                            <td
                              className={`py-2.5 text-right font-medium ${
                                diff > 0
                                  ? 'text-emerald-400'
                                  : diff < 0
                                  ? 'text-rose-400'
                                  : 'text-slate-500'
                              }`}
                            >
                              {diff > 0 ? '+' : ''}
                              {formatCurrencyExact(diff)}
                            </td>
                          </tr>
                        );
                      }
                      return rows;
                    })()}
                  </tbody>
                </table>
              </div>

              <div className="mt-4 bg-white/5 rounded-xl p-4">
                <p className="text-sm text-slate-300">
                  <strong className="text-white">Recommendation:</strong>{' '}
                  {comparison.instant.length > 0 ? (
                    <>
                      This asset qualifies for the{' '}
                      <strong className="text-emerald-400">instant asset write-off</strong> (under
                      $20,000). Claim the full{' '}
                      {formatCurrency(parseFloat(results[0].asset.cost) || 0)} deduction immediately
                      for a{' '}
                      {formatCurrency(
                        (parseFloat(results[0].asset.cost) || 0) *
                          (parseFloat(marginalRate) / 100)
                      )}{' '}
                      tax saving this year.
                    </>
                  ) : comparison.diminishing.length > 0 &&
                    comparison.diminishing[0].depreciation >
                      (comparison.prime[0]?.depreciation || 0) ? (
                    <>
                      The <strong className="text-teal-400">diminishing value method</strong> gives
                      you a larger Year 1 deduction (
                      {formatCurrency(comparison.diminishing[0].depreciation)} vs{' '}
                      {formatCurrency(comparison.prime[0]?.depreciation || 0)}). This front-loads
                      your tax savings, which is usually better for cash flow.
                    </>
                  ) : (
                    <>
                      Both methods produce similar Year 1 deductions. The{' '}
                      <strong className="text-blue-400">prime cost method</strong> gives you
                      consistent, predictable deductions each year.
                    </>
                  )}
                </p>
              </div>
            </div>
          )}

          {/* Multi-Asset Summary Tab */}
          {activeTab === 'summary' && results.length > 1 && (
            <div className="glass rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white heading-font mb-4">
                Multi-Asset Summary
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left text-white py-3 pr-3 font-semibold">Asset</th>
                      <th className="text-right text-white py-3 pr-3 font-semibold">Cost</th>
                      <th className="text-left text-white py-3 pr-3 font-semibold">Method</th>
                      <th className="text-right text-white py-3 pr-3 font-semibold">
                        Year 1 Deduction
                      </th>
                      <th className="text-right text-white py-3 pr-3 font-semibold">
                        This FY
                      </th>
                      <th className="text-right text-white py-3 font-semibold">
                        Tax Saving ({marginalRate}%)
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-300">
                    {results.map((r, rIdx) => {
                      const rate = parseFloat(marginalRate) / 100;
                      return (
                        <tr key={r.asset.id} className="border-b border-white/5">
                          <td className="py-2.5 pr-3 text-white font-medium">
                            {r.asset.name || `Asset ${rIdx + 1}`}
                          </td>
                          <td className="py-2.5 pr-3 text-right">
                            {formatCurrency(parseFloat(r.asset.cost) || 0)}
                          </td>
                          <td className="py-2.5 pr-3">
                            <span
                              className={`text-xs px-2 py-0.5 rounded-full ${
                                r.asset.method === 'instant'
                                  ? 'bg-emerald-500/20 text-emerald-400'
                                  : r.asset.method === 'diminishing'
                                  ? 'bg-teal-500/20 text-teal-400'
                                  : 'bg-blue-500/20 text-blue-400'
                              }`}
                            >
                              {r.asset.method === 'instant'
                                ? 'Write-Off'
                                : r.asset.method === 'diminishing'
                                ? 'DV'
                                : 'PC'}
                            </span>
                          </td>
                          <td className="py-2.5 pr-3 text-right text-teal-400">
                            {formatCurrencyExact(r.year1Deduction)}
                          </td>
                          <td className="py-2.5 pr-3 text-right">
                            {formatCurrencyExact(r.totalDeductionThisFY)}
                          </td>
                          <td className="py-2.5 text-right text-emerald-400 font-medium">
                            {formatCurrencyExact(r.totalDeductionThisFY * rate)}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                  <tfoot>
                    <tr className="border-t border-teal-500/20">
                      <td className="py-3 pr-3 text-white font-bold">Total</td>
                      <td className="py-3 pr-3 text-right text-white font-bold">
                        {formatCurrency(totals.totalAssetValue)}
                      </td>
                      <td className="py-3 pr-3" />
                      <td className="py-3 pr-3 text-right text-teal-400 font-bold">
                        {formatCurrency(totals.totalYear1)}
                      </td>
                      <td className="py-3 pr-3 text-right text-white font-bold">
                        {formatCurrency(totals.totalThisFY)}
                      </td>
                      <td className="py-3 text-right text-emerald-400 font-bold">
                        {formatCurrency(totals.taxSavings)}
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>

              {/* Total Tax Savings Highlight */}
              <div className="mt-6 bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-6 text-center">
                <p className="text-sm text-slate-400 mb-1">
                  Total Tax Savings This Financial Year
                </p>
                <p className="text-4xl font-bold text-emerald-400">
                  {formatCurrency(totals.taxSavings)}
                </p>
                <p className="text-sm text-slate-400 mt-2">
                  Based on {results.length} asset{results.length > 1 ? 's' : ''} at a{' '}
                  {marginalRate}% marginal tax rate
                </p>
              </div>
            </div>
          )}

          {/* Copy Button */}
          <div className="flex justify-center">
            <button
              onClick={handleCopy}
              className="px-6 py-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-500/30 transition-all text-white font-medium"
            >
              {copied ? 'Copied!' : 'Copy Depreciation Schedule to Clipboard'}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
