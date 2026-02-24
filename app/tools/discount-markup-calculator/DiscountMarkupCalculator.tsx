'use client';

import { useState, useMemo, useCallback } from 'react';

function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

type Mode = 'discount' | 'markup' | 'margin-to-markup';

interface DiscountResult {
  originalPrice: number;
  discountPercent: number;
  discountAmount: number;
  salePrice: number;
  gstOnOriginal: number;
  gstOnSale: number;
  salePriceIncGst: number;
}

interface MarkupResult {
  costPrice: number;
  markupPercent: number;
  markupAmount: number;
  sellingPrice: number;
  profitMarginPercent: number;
  gstAmount: number;
  sellingPriceIncGst: number;
}

interface MarginToMarkupResult {
  targetMargin: number;
  requiredMarkup: number;
  costPrice: number;
  sellingPrice: number;
  profit: number;
}

export default function DiscountMarkupCalculator() {
  const [mode, setMode] = useState<Mode>('discount');
  const [includeGst, setIncludeGst] = useState(true);

  // Discount
  const [originalPrice, setOriginalPrice] = useState('1000');
  const [discountPercent, setDiscountPercent] = useState('15');

  // Markup
  const [costPrice, setCostPrice] = useState('500');
  const [markupPercent, setMarkupPercent] = useState('50');

  // Margin to Markup
  const [targetMargin, setTargetMargin] = useState('30');
  const [marginCostPrice, setMarginCostPrice] = useState('500');

  // Batch discount
  const [showBatch, setShowBatch] = useState(false);
  const [batchItems, setBatchItems] = useState([
    { name: 'Item 1', price: '500', discount: '10' },
    { name: 'Item 2', price: '300', discount: '15' },
    { name: 'Item 3', price: '200', discount: '20' },
  ]);

  const [copied, setCopied] = useState(false);

  const discountResult = useMemo<DiscountResult | null>(() => {
    const price = parseFloat(originalPrice) || 0;
    const pct = parseFloat(discountPercent) || 0;
    if (price <= 0) return null;
    const discountAmount = price * (pct / 100);
    const salePrice = price - discountAmount;
    const gstOnOriginal = price / 11;
    const gstOnSale = salePrice / 11;
    return {
      originalPrice: price,
      discountPercent: pct,
      discountAmount,
      salePrice,
      gstOnOriginal,
      gstOnSale,
      salePriceIncGst: includeGst ? salePrice : salePrice * 1.1,
    };
  }, [originalPrice, discountPercent, includeGst]);

  const markupResult = useMemo<MarkupResult | null>(() => {
    const cost = parseFloat(costPrice) || 0;
    const pct = parseFloat(markupPercent) || 0;
    if (cost <= 0) return null;
    const markupAmount = cost * (pct / 100);
    const sellingPrice = cost + markupAmount;
    const profitMarginPercent = sellingPrice > 0 ? (markupAmount / sellingPrice) * 100 : 0;
    const gstAmount = sellingPrice * 0.1;
    return {
      costPrice: cost,
      markupPercent: pct,
      markupAmount,
      sellingPrice,
      profitMarginPercent,
      gstAmount,
      sellingPriceIncGst: sellingPrice + gstAmount,
    };
  }, [costPrice, markupPercent]);

  const marginToMarkupResult = useMemo<MarginToMarkupResult | null>(() => {
    const margin = parseFloat(targetMargin) || 0;
    const cost = parseFloat(marginCostPrice) || 0;
    if (margin >= 100 || margin <= 0 || cost <= 0) return null;
    const requiredMarkup = (margin / (100 - margin)) * 100;
    const sellingPrice = cost / (1 - margin / 100);
    const profit = sellingPrice - cost;
    return {
      targetMargin: margin,
      requiredMarkup,
      costPrice: cost,
      sellingPrice,
      profit,
    };
  }, [targetMargin, marginCostPrice]);

  const batchResults = useMemo(() => {
    return batchItems.map((item) => {
      const price = parseFloat(item.price) || 0;
      const disc = parseFloat(item.discount) || 0;
      const discountAmount = price * (disc / 100);
      const salePrice = price - discountAmount;
      return { ...item, discountAmount, salePrice };
    });
  }, [batchItems]);

  const batchTotal = useMemo(() => {
    return batchResults.reduce(
      (acc, item) => ({
        original: acc.original + (parseFloat(item.price) || 0),
        discounted: acc.discounted + item.salePrice,
        saved: acc.saved + item.discountAmount,
      }),
      { original: 0, discounted: 0, saved: 0 }
    );
  }, [batchResults]);

  const handleCopy = useCallback(() => {
    let lines: string[] = [];
    if (mode === 'discount' && discountResult) {
      lines = [
        'Discount Calculation',
        '================================',
        `Original Price: ${formatCurrency(discountResult.originalPrice)}`,
        `Discount: ${discountResult.discountPercent}%`,
        `Discount Amount: ${formatCurrency(discountResult.discountAmount)}`,
        `Sale Price: ${formatCurrency(discountResult.salePrice)}`,
        includeGst ? `GST included: ${formatCurrency(discountResult.gstOnSale)}` : `+ GST: ${formatCurrency(discountResult.salePrice * 0.1)}`,
      ];
    } else if (mode === 'markup' && markupResult) {
      lines = [
        'Markup Calculation',
        '================================',
        `Cost Price: ${formatCurrency(markupResult.costPrice)}`,
        `Markup: ${markupResult.markupPercent}%`,
        `Markup Amount: ${formatCurrency(markupResult.markupAmount)}`,
        `Selling Price (ex GST): ${formatCurrency(markupResult.sellingPrice)}`,
        `Selling Price (inc GST): ${formatCurrency(markupResult.sellingPriceIncGst)}`,
        `Profit Margin: ${markupResult.profitMarginPercent.toFixed(1)}%`,
      ];
    } else if (mode === 'margin-to-markup' && marginToMarkupResult) {
      lines = [
        'Margin to Markup Conversion',
        '================================',
        `Target Profit Margin: ${marginToMarkupResult.targetMargin}%`,
        `Required Markup: ${marginToMarkupResult.requiredMarkup.toFixed(1)}%`,
        `Cost Price: ${formatCurrency(marginToMarkupResult.costPrice)}`,
        `Selling Price: ${formatCurrency(marginToMarkupResult.sellingPrice)}`,
        `Profit: ${formatCurrency(marginToMarkupResult.profit)}`,
      ];
    }
    lines.push('', 'Generated by InvoiceFlow — invoiceflow.app');
    navigator.clipboard.writeText(lines.join('\n'));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [mode, discountResult, markupResult, marginToMarkupResult, includeGst]);

  const addBatchItem = () => {
    setBatchItems([...batchItems, { name: `Item ${batchItems.length + 1}`, price: '0', discount: '10' }]);
  };

  const removeBatchItem = (index: number) => {
    if (batchItems.length <= 1) return;
    setBatchItems(batchItems.filter((_, i) => i !== index));
  };

  const updateBatchItem = (index: number, field: 'name' | 'price' | 'discount', value: string) => {
    const updated = [...batchItems];
    updated[index] = { ...updated[index], [field]: value };
    setBatchItems(updated);
  };

  // Common discount presets
  const discountPresets = [5, 10, 15, 20, 25, 30, 50];
  const markupPresets = [
    { label: '20%', value: 20 },
    { label: '50%', value: 50 },
    { label: '100% (2x)', value: 100 },
    { label: '200% (3x)', value: 200 },
  ];

  return (
    <div className="space-y-8">
      {/* Mode Toggle */}
      <div className="flex gap-2 p-1 bg-white/5 rounded-xl w-fit flex-wrap">
        <button
          onClick={() => setMode('discount')}
          className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
            mode === 'discount'
              ? 'bg-gradient-to-r from-teal-500 to-blue-500 text-white'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          Discount
        </button>
        <button
          onClick={() => setMode('markup')}
          className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
            mode === 'markup'
              ? 'bg-gradient-to-r from-teal-500 to-blue-500 text-white'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          Markup
        </button>
        <button
          onClick={() => setMode('margin-to-markup')}
          className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
            mode === 'margin-to-markup'
              ? 'bg-gradient-to-r from-teal-500 to-blue-500 text-white'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          Margin &rarr; Markup
        </button>
      </div>

      {mode === 'discount' && (
        <>
          <div className="glass rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white heading-font mb-4">Discount Calculator</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-slate-300 mb-1.5">Original Price (AUD)</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">$</span>
                  <input
                    type="number"
                    value={originalPrice}
                    onChange={(e) => setOriginalPrice(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3 pl-7 py-2.5 text-white focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/30 outline-none transition-colors"
                    placeholder="1000"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm text-slate-300 mb-1.5">Discount (%)</label>
                <div className="relative">
                  <input
                    type="number"
                    value={discountPercent}
                    onChange={(e) => setDiscountPercent(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3 pr-8 py-2.5 text-white focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/30 outline-none transition-colors"
                    placeholder="15"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500">%</span>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {discountPresets.map((pct) => (
                <button
                  key={pct}
                  onClick={() => setDiscountPercent(String(pct))}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    discountPercent === String(pct)
                      ? 'bg-teal-500/20 text-teal-400 border border-teal-500/30'
                      : 'bg-white/5 text-slate-400 hover:bg-white/10 border border-transparent'
                  }`}
                >
                  {pct}%
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2 mt-4">
              <input
                type="checkbox"
                id="includeGst"
                checked={includeGst}
                onChange={(e) => setIncludeGst(e.target.checked)}
                className="w-4 h-4 rounded bg-white/5 border-white/20 text-teal-500 focus:ring-teal-500/30"
              />
              <label htmlFor="includeGst" className="text-sm text-slate-300">
                Price includes GST
              </label>
            </div>
          </div>

          {discountResult && (
            <div className="glass rounded-2xl p-8 border border-teal-500/20">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white heading-font">Result</h3>
                <button
                  onClick={handleCopy}
                  className="px-3 py-1.5 text-xs bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white rounded-lg transition-colors border border-white/10"
                >
                  {copied ? 'Copied!' : 'Copy'}
                </button>
              </div>

              <div className="grid sm:grid-cols-3 gap-4 mb-6">
                <div className="bg-white/5 rounded-xl p-4 text-center">
                  <p className="text-xs text-slate-400 mb-1">Original Price</p>
                  <p className="text-xl font-bold text-white line-through decoration-rose-400/50">
                    {formatCurrency(discountResult.originalPrice)}
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-4 text-center">
                  <p className="text-xs text-slate-400 mb-1">You Save</p>
                  <p className="text-xl font-bold text-rose-400">
                    {formatCurrency(discountResult.discountAmount)}
                  </p>
                  <p className="text-xs text-slate-500">{discountResult.discountPercent}% off</p>
                </div>
                <div className="bg-teal-500/10 border border-teal-500/20 rounded-xl p-4 text-center">
                  <p className="text-xs text-teal-400 mb-1">Sale Price</p>
                  <p className="text-2xl font-bold text-white">
                    {formatCurrency(discountResult.salePrice)}
                  </p>
                  {includeGst && (
                    <p className="text-xs text-slate-500">
                      GST: {formatCurrency(discountResult.gstOnSale)}
                    </p>
                  )}
                </div>
              </div>

              {/* Visual discount bar */}
              <div className="mb-4">
                <div className="h-6 rounded-full overflow-hidden flex">
                  <div
                    className="h-full bg-gradient-to-r from-teal-500 to-emerald-500 flex items-center justify-center text-xs text-white font-medium"
                    style={{ width: `${100 - discountResult.discountPercent}%` }}
                  >
                    {(100 - discountResult.discountPercent).toFixed(0)}% paid
                  </div>
                  <div
                    className="h-full bg-rose-500/40 flex items-center justify-center text-xs text-white/80 font-medium"
                    style={{ width: `${discountResult.discountPercent}%` }}
                  >
                    {discountResult.discountPercent}% saved
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Batch Calculator */}
          <div className="glass rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-white heading-font">Batch Discount Calculator</h3>
              <button
                onClick={() => setShowBatch(!showBatch)}
                className="text-xs text-teal-400 hover:text-teal-300 transition-colors"
              >
                {showBatch ? 'Hide' : 'Show batch'}
              </button>
            </div>
            {showBatch && (
              <div className="space-y-4">
                {batchItems.map((item, index) => (
                  <div key={index} className="grid grid-cols-12 gap-2 items-end">
                    <div className="col-span-4">
                      {index === 0 && <label className="block text-xs text-slate-400 mb-1">Item</label>}
                      <input
                        type="text"
                        value={item.name}
                        onChange={(e) => updateBatchItem(index, 'name', e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:border-teal-500/50 outline-none"
                      />
                    </div>
                    <div className="col-span-3">
                      {index === 0 && <label className="block text-xs text-slate-400 mb-1">Price</label>}
                      <div className="relative">
                        <span className="absolute left-2 top-1/2 -translate-y-1/2 text-slate-500 text-sm">$</span>
                        <input
                          type="number"
                          value={item.price}
                          onChange={(e) => updateBatchItem(index, 'price', e.target.value)}
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-3 pl-6 py-2 text-white text-sm focus:border-teal-500/50 outline-none"
                        />
                      </div>
                    </div>
                    <div className="col-span-2">
                      {index === 0 && <label className="block text-xs text-slate-400 mb-1">Disc %</label>}
                      <input
                        type="number"
                        value={item.discount}
                        onChange={(e) => updateBatchItem(index, 'discount', e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:border-teal-500/50 outline-none"
                      />
                    </div>
                    <div className="col-span-2 text-right">
                      {index === 0 && <label className="block text-xs text-slate-400 mb-1">Sale</label>}
                      <p className="text-sm text-emerald-400 font-medium py-2">
                        {formatCurrency(batchResults[index]?.salePrice || 0)}
                      </p>
                    </div>
                    <div className="col-span-1">
                      <button
                        onClick={() => removeBatchItem(index)}
                        className="text-slate-500 hover:text-rose-400 transition-colors text-sm py-2 px-1"
                        title="Remove"
                      >
                        x
                      </button>
                    </div>
                  </div>
                ))}
                <button
                  onClick={addBatchItem}
                  className="text-xs text-teal-400 hover:text-teal-300 transition-colors"
                >
                  + Add item
                </button>
                <div className="bg-white/5 rounded-xl p-4 mt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Total original</span>
                    <span className="text-white">{formatCurrency(batchTotal.original)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Total saved</span>
                    <span className="text-rose-400">-{formatCurrency(batchTotal.saved)}</span>
                  </div>
                  <div className="flex justify-between text-sm border-t border-white/10 pt-2">
                    <span className="text-white font-medium">Total after discounts</span>
                    <span className="text-emerald-400 font-bold">{formatCurrency(batchTotal.discounted)}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </>
      )}

      {mode === 'markup' && (
        <>
          <div className="glass rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white heading-font mb-4">Markup Calculator</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-slate-300 mb-1.5">Cost Price (AUD)</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">$</span>
                  <input
                    type="number"
                    value={costPrice}
                    onChange={(e) => setCostPrice(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3 pl-7 py-2.5 text-white focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/30 outline-none transition-colors"
                    placeholder="500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm text-slate-300 mb-1.5">Markup (%)</label>
                <div className="relative">
                  <input
                    type="number"
                    value={markupPercent}
                    onChange={(e) => setMarkupPercent(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3 pr-8 py-2.5 text-white focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/30 outline-none transition-colors"
                    placeholder="50"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500">%</span>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {markupPresets.map((preset) => (
                <button
                  key={preset.label}
                  onClick={() => setMarkupPercent(String(preset.value))}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    markupPercent === String(preset.value)
                      ? 'bg-teal-500/20 text-teal-400 border border-teal-500/30'
                      : 'bg-white/5 text-slate-400 hover:bg-white/10 border border-transparent'
                  }`}
                >
                  {preset.label}
                </button>
              ))}
            </div>
          </div>

          {markupResult && (
            <div className="glass rounded-2xl p-8 border border-teal-500/20">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white heading-font">Result</h3>
                <button
                  onClick={handleCopy}
                  className="px-3 py-1.5 text-xs bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white rounded-lg transition-colors border border-white/10"
                >
                  {copied ? 'Copied!' : 'Copy'}
                </button>
              </div>

              <div className="grid sm:grid-cols-3 gap-4 mb-6">
                <div className="bg-white/5 rounded-xl p-4 text-center">
                  <p className="text-xs text-slate-400 mb-1">Cost Price</p>
                  <p className="text-xl font-bold text-white">
                    {formatCurrency(markupResult.costPrice)}
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-4 text-center">
                  <p className="text-xs text-slate-400 mb-1">Markup Amount</p>
                  <p className="text-xl font-bold text-emerald-400">
                    +{formatCurrency(markupResult.markupAmount)}
                  </p>
                  <p className="text-xs text-slate-500">{markupResult.markupPercent}% markup</p>
                </div>
                <div className="bg-teal-500/10 border border-teal-500/20 rounded-xl p-4 text-center">
                  <p className="text-xs text-teal-400 mb-1">Selling Price</p>
                  <p className="text-2xl font-bold text-white">
                    {formatCurrency(markupResult.sellingPrice)}
                  </p>
                  <p className="text-xs text-slate-500">ex GST</p>
                </div>
              </div>

              {/* Visual bar */}
              <div className="mb-6">
                <div className="h-6 rounded-full overflow-hidden flex">
                  <div
                    className="h-full bg-white/20 flex items-center justify-center text-xs text-white/80 font-medium"
                    style={{ width: `${(markupResult.costPrice / markupResult.sellingPrice) * 100}%` }}
                  >
                    Cost {((markupResult.costPrice / markupResult.sellingPrice) * 100).toFixed(0)}%
                  </div>
                  <div
                    className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center text-xs text-white font-medium"
                    style={{ width: `${markupResult.profitMarginPercent}%` }}
                  >
                    Profit {markupResult.profitMarginPercent.toFixed(0)}%
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between py-2 border-b border-white/5">
                  <span className="text-slate-300">Cost Price</span>
                  <span className="text-white">{formatCurrency(markupResult.costPrice)}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/5">
                  <span className="text-slate-400">+ Markup ({markupResult.markupPercent}%)</span>
                  <span className="text-emerald-400">{formatCurrency(markupResult.markupAmount)}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/5">
                  <span className="text-white font-medium">Selling Price (ex GST)</span>
                  <span className="text-white font-medium">{formatCurrency(markupResult.sellingPrice)}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/5">
                  <span className="text-slate-400">+ GST (10%)</span>
                  <span className="text-slate-400">{formatCurrency(markupResult.gstAmount)}</span>
                </div>
                <div className="flex justify-between py-3 border-t border-teal-500/20">
                  <span className="text-white font-bold">Selling Price (inc GST)</span>
                  <span className="text-teal-400 font-bold text-lg">{formatCurrency(markupResult.sellingPriceIncGst)}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-slate-400">Profit Margin</span>
                  <span className="text-emerald-400 font-medium">{markupResult.profitMarginPercent.toFixed(1)}%</span>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-4 mt-4">
                <p className="text-xs text-slate-400">
                  <strong className="text-white">Markup vs Margin:</strong> A {markupResult.markupPercent}% markup
                  on {formatCurrency(markupResult.costPrice)} gives a {markupResult.profitMarginPercent.toFixed(1)}% profit
                  margin. Markup is calculated on cost; margin is calculated on selling price.
                </p>
              </div>
            </div>
          )}
        </>
      )}

      {mode === 'margin-to-markup' && (
        <>
          <div className="glass rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white heading-font mb-4">Margin to Markup Converter</h3>
            <p className="text-sm text-slate-400 mb-4">
              Enter your desired profit margin percentage and cost price. We&apos;ll calculate the
              markup percentage you need to apply.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-slate-300 mb-1.5">Target Profit Margin (%)</label>
                <div className="relative">
                  <input
                    type="number"
                    value={targetMargin}
                    onChange={(e) => setTargetMargin(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3 pr-8 py-2.5 text-white focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/30 outline-none transition-colors"
                    placeholder="30"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500">%</span>
                </div>
              </div>
              <div>
                <label className="block text-sm text-slate-300 mb-1.5">Cost Price (AUD)</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">$</span>
                  <input
                    type="number"
                    value={marginCostPrice}
                    onChange={(e) => setMarginCostPrice(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3 pl-7 py-2.5 text-white focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/30 outline-none transition-colors"
                    placeholder="500"
                  />
                </div>
              </div>
            </div>

            {/* Quick margin presets */}
            <div className="flex flex-wrap gap-2 mt-4">
              {[10, 20, 30, 40, 50, 60].map((m) => (
                <button
                  key={m}
                  onClick={() => setTargetMargin(String(m))}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    targetMargin === String(m)
                      ? 'bg-teal-500/20 text-teal-400 border border-teal-500/30'
                      : 'bg-white/5 text-slate-400 hover:bg-white/10 border border-transparent'
                  }`}
                >
                  {m}% margin
                </button>
              ))}
            </div>
          </div>

          {marginToMarkupResult && (
            <div className="glass rounded-2xl p-8 border border-teal-500/20">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white heading-font">Result</h3>
                <button
                  onClick={handleCopy}
                  className="px-3 py-1.5 text-xs bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white rounded-lg transition-colors border border-white/10"
                >
                  {copied ? 'Copied!' : 'Copy'}
                </button>
              </div>

              <div className="text-center bg-white/5 rounded-2xl p-6 mb-6">
                <p className="text-sm text-slate-400 mb-2">
                  To achieve a {marginToMarkupResult.targetMargin}% profit margin, you need a
                </p>
                <p className="text-4xl font-bold text-teal-400 heading-font">
                  {marginToMarkupResult.requiredMarkup.toFixed(1)}%{' '}
                  <span className="text-lg text-slate-400 font-normal">markup</span>
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-4 mb-6">
                <div className="bg-white/5 rounded-xl p-4 text-center">
                  <p className="text-xs text-slate-400 mb-1">Cost Price</p>
                  <p className="text-xl font-bold text-white">
                    {formatCurrency(marginToMarkupResult.costPrice)}
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-4 text-center">
                  <p className="text-xs text-slate-400 mb-1">Selling Price</p>
                  <p className="text-xl font-bold text-emerald-400">
                    {formatCurrency(marginToMarkupResult.sellingPrice)}
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-4 text-center">
                  <p className="text-xs text-slate-400 mb-1">Profit</p>
                  <p className="text-xl font-bold text-teal-400">
                    {formatCurrency(marginToMarkupResult.profit)}
                  </p>
                </div>
              </div>

              {/* Reference table */}
              <div>
                <h4 className="text-sm font-medium text-slate-400 mb-3">Quick Reference: Margin vs Markup</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-2 text-slate-400 font-medium">Profit Margin</th>
                        <th className="text-right py-2 text-slate-400 font-medium">Required Markup</th>
                        <th className="text-right py-2 text-slate-400 font-medium">Multiplier</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {[10, 15, 20, 25, 30, 33.3, 40, 50].map((m) => (
                        <tr
                          key={m}
                          className={
                            Math.abs(m - marginToMarkupResult.targetMargin) < 1
                              ? 'bg-teal-500/10'
                              : ''
                          }
                        >
                          <td className="py-2 text-white">{m.toFixed(1)}%</td>
                          <td className="py-2 text-right text-teal-400">
                            {((m / (100 - m)) * 100).toFixed(1)}%
                          </td>
                          <td className="py-2 text-right text-slate-400">
                            {(1 / (1 - m / 100)).toFixed(2)}x
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
