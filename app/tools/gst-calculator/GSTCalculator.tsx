'use client';

import { useState, useCallback } from 'react';

const GST_RATE = 0.10;

type Mode = 'add' | 'remove';

function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

export default function GSTCalculator() {
  const [mode, setMode] = useState<Mode>('add');
  const [input, setInput] = useState('');
  const [copied, setCopied] = useState(false);

  const amount = parseFloat(input) || 0;

  const results = {
    add: {
      exGst: amount,
      gst: amount * GST_RATE,
      incGst: amount * (1 + GST_RATE),
    },
    remove: {
      incGst: amount,
      exGst: amount / (1 + GST_RATE),
      gst: amount / (1 + GST_RATE) * GST_RATE,
    },
  }[mode];

  const handleCopy = useCallback(() => {
    const text = mode === 'add'
      ? `Amount ex-GST: ${formatCurrency(results.exGst)}\nGST (10%): ${formatCurrency(results.gst)}\nTotal inc-GST: ${formatCurrency(results.incGst)}`
      : `Amount inc-GST: ${formatCurrency(results.incGst)}\nGST (10%): ${formatCurrency(results.gst)}\nAmount ex-GST: ${formatCurrency(results.exGst)}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [mode, results]);

  return (
    <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
      {/* Mode Toggle */}
      <div className="flex rounded-xl bg-white/5 p-1 mb-8">
        <button
          onClick={() => setMode('add')}
          className={`flex-1 py-3 px-4 rounded-lg text-sm font-semibold transition-all ${
            mode === 'add'
              ? 'bg-gradient-to-r from-teal-500 to-blue-500 text-white shadow-lg'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          Add GST
        </button>
        <button
          onClick={() => setMode('remove')}
          className={`flex-1 py-3 px-4 rounded-lg text-sm font-semibold transition-all ${
            mode === 'remove'
              ? 'bg-gradient-to-r from-teal-500 to-blue-500 text-white shadow-lg'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          Remove GST
        </button>
      </div>

      {/* Input */}
      <div className="mb-8">
        <label className="block text-sm text-slate-400 mb-2">
          {mode === 'add' ? 'Amount (excluding GST)' : 'Amount (including GST)'}
        </label>
        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg">$</span>
          <input
            type="number"
            inputMode="decimal"
            step="0.01"
            min="0"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="0.00"
            className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-10 pr-4 text-2xl text-white font-mono placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500/50 transition-all"
            autoFocus
          />
        </div>
      </div>

      {/* Results */}
      <div className="space-y-3">
        <div className="flex items-center justify-between py-3 px-4 rounded-xl bg-white/5">
          <span className="text-slate-400">
            {mode === 'add' ? 'Amount ex-GST' : 'Amount ex-GST'}
          </span>
          <span className="text-white font-mono text-lg">
            {formatCurrency(results.exGst)}
          </span>
        </div>

        <div className="flex items-center justify-between py-3 px-4 rounded-xl bg-teal-500/10 border border-teal-500/20">
          <span className="text-teal-400 font-semibold">GST (10%)</span>
          <span className="text-teal-400 font-mono text-lg font-semibold">
            {formatCurrency(results.gst)}
          </span>
        </div>

        <div className="flex items-center justify-between py-3 px-4 rounded-xl bg-white/5">
          <span className="text-slate-400">
            {mode === 'remove' ? 'Amount inc-GST' : 'Total inc-GST'}
          </span>
          <span className="text-white font-mono text-lg">
            {formatCurrency(results.incGst)}
          </span>
        </div>
      </div>

      {/* Copy Button */}
      <button
        onClick={handleCopy}
        disabled={amount === 0}
        className="mt-6 w-full py-3 rounded-xl text-sm font-medium transition-all disabled:opacity-30 disabled:cursor-not-allowed bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10"
      >
        {copied ? 'Copied to clipboard!' : 'Copy results'}
      </button>

      {/* Quick amounts */}
      <div className="mt-6 flex flex-wrap gap-2 justify-center">
        {[100, 500, 1000, 2500, 5000, 10000].map((val) => (
          <button
            key={val}
            onClick={() => setInput(val.toString())}
            className="px-3 py-1.5 rounded-lg text-xs text-slate-400 bg-white/5 hover:bg-white/10 hover:text-white transition-all"
          >
            ${val.toLocaleString()}
          </button>
        ))}
      </div>

      {/* Batch Calculator */}
      <BatchCalculator mode={mode} />
    </div>
  );
}

function BatchCalculator({ mode }: { mode: Mode }) {
  const [rows, setRows] = useState([
    { description: '', amount: '' },
  ]);

  const addRow = () => setRows([...rows, { description: '', amount: '' }]);
  const removeRow = (i: number) => setRows(rows.filter((_, idx) => idx !== i));
  const updateRow = (i: number, field: 'description' | 'amount', value: string) => {
    const updated = [...rows];
    updated[i] = { ...updated[i], [field]: value };
    setRows(updated);
  };

  const totals = rows.reduce(
    (acc, row) => {
      const val = parseFloat(row.amount) || 0;
      if (mode === 'add') {
        acc.exGst += val;
        acc.gst += val * GST_RATE;
        acc.incGst += val * (1 + GST_RATE);
      } else {
        acc.incGst += val;
        acc.exGst += val / (1 + GST_RATE);
        acc.gst += (val / (1 + GST_RATE)) * GST_RATE;
      }
      return acc;
    },
    { exGst: 0, gst: 0, incGst: 0 }
  );

  const hasValues = rows.some((r) => parseFloat(r.amount) > 0);

  return (
    <div className="mt-8 pt-8 border-t border-white/10">
      <h4 className="text-lg font-bold text-white heading-font mb-4">Batch Calculator</h4>
      <p className="text-sm text-slate-400 mb-4">
        Calculate GST on multiple items at once — perfect for invoices with line items.
      </p>

      <div className="space-y-2">
        {rows.map((row, i) => (
          <div key={i} className="flex gap-2 items-center">
            <input
              type="text"
              value={row.description}
              onChange={(e) => updateRow(i, 'description', e.target.value)}
              placeholder="Description"
              className="flex-1 bg-white/5 border border-white/10 rounded-lg py-2 px-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-teal-500/50"
            />
            <div className="relative w-36">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-sm">$</span>
              <input
                type="number"
                inputMode="decimal"
                step="0.01"
                min="0"
                value={row.amount}
                onChange={(e) => updateRow(i, 'amount', e.target.value)}
                placeholder="0.00"
                className="w-full bg-white/5 border border-white/10 rounded-lg py-2 pl-7 pr-3 text-sm text-white font-mono placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-teal-500/50"
              />
            </div>
            {rows.length > 1 && (
              <button
                onClick={() => removeRow(i)}
                className="text-slate-500 hover:text-red-400 transition-colors p-1"
                aria-label="Remove row"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        ))}
      </div>

      <button
        onClick={addRow}
        className="mt-3 text-sm text-teal-400 hover:text-teal-300 transition-colors"
      >
        + Add line item
      </button>

      {hasValues && (
        <div className="mt-4 rounded-xl bg-white/5 p-4 space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-slate-400">Subtotal ex-GST</span>
            <span className="text-white font-mono">{formatCurrency(totals.exGst)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-teal-400 font-semibold">Total GST</span>
            <span className="text-teal-400 font-mono font-semibold">{formatCurrency(totals.gst)}</span>
          </div>
          <div className="flex justify-between text-sm border-t border-white/10 pt-2">
            <span className="text-white font-semibold">Total inc-GST</span>
            <span className="text-white font-mono font-semibold">{formatCurrency(totals.incGst)}</span>
          </div>
        </div>
      )}
    </div>
  );
}
