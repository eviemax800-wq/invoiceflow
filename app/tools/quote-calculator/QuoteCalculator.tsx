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

interface LineItem {
  id: string;
  description: string;
  hours: string;
  rate: string;
}

interface ExpenseItem {
  id: string;
  description: string;
  amount: string;
}

interface QuoteResult {
  labourSubtotal: number;
  totalHours: number;
  expensesSubtotal: number;
  subtotal: number;
  contingencyAmount: number;
  subtotalWithContingency: number;
  gstAmount: number;
  grandTotal: number;
  effectiveHourlyRate: number;
  profitAfterExpenses: number;
}

const projectTypePresets = [
  { label: 'Website', hours: 40, rate: 120, description: 'Standard business website' },
  { label: 'Web App', hours: 120, rate: 150, description: 'Custom web application' },
  { label: 'Design', hours: 20, rate: 100, description: 'Brand or UI design project' },
  { label: 'Consulting', hours: 10, rate: 200, description: 'Strategy consulting engagement' },
  { label: 'Content', hours: 15, rate: 90, description: 'Copywriting / content package' },
];

let nextId = 3;

export default function QuoteCalculator() {
  const [lineItems, setLineItems] = useState<LineItem[]>([
    { id: '1', description: 'Discovery & Planning', hours: '8', rate: '120' },
    { id: '2', description: 'Design & Development', hours: '32', rate: '120' },
  ]);
  const [expenses, setExpenses] = useState<ExpenseItem[]>([]);
  const [contingencyPct, setContingencyPct] = useState('10');
  const [gstRegistered, setGstRegistered] = useState(true);
  const [clientName, setClientName] = useState('');
  const [projectName, setProjectName] = useState('');
  const [copied, setCopied] = useState(false);

  const addLineItem = useCallback(() => {
    setLineItems((prev) => [
      ...prev,
      { id: String(nextId++), description: '', hours: '', rate: prev[prev.length - 1]?.rate || '120' },
    ]);
  }, []);

  const removeLineItem = useCallback((id: string) => {
    setLineItems((prev) => (prev.length > 1 ? prev.filter((item) => item.id !== id) : prev));
  }, []);

  const updateLineItem = useCallback((id: string, field: keyof LineItem, value: string) => {
    setLineItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  }, []);

  const addExpense = useCallback(() => {
    setExpenses((prev) => [...prev, { id: String(nextId++), description: '', amount: '' }]);
  }, []);

  const removeExpense = useCallback((id: string) => {
    setExpenses((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const updateExpense = useCallback((id: string, field: keyof ExpenseItem, value: string) => {
    setExpenses((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  }, []);

  const applyPreset = useCallback((preset: typeof projectTypePresets[0]) => {
    setLineItems([
      { id: String(nextId++), description: 'Discovery & Planning', hours: String(Math.ceil(preset.hours * 0.15)), rate: String(preset.rate) },
      { id: String(nextId++), description: preset.description, hours: String(Math.ceil(preset.hours * 0.7)), rate: String(preset.rate) },
      { id: String(nextId++), description: 'Testing & Revisions', hours: String(Math.ceil(preset.hours * 0.15)), rate: String(preset.rate) },
    ]);
  }, []);

  const result = useMemo<QuoteResult | null>(() => {
    let labourSubtotal = 0;
    let totalHours = 0;

    for (const item of lineItems) {
      const hours = parseFloat(item.hours) || 0;
      const rate = parseFloat(item.rate) || 0;
      labourSubtotal += hours * rate;
      totalHours += hours;
    }

    let expensesSubtotal = 0;
    for (const exp of expenses) {
      expensesSubtotal += parseFloat(exp.amount) || 0;
    }

    if (labourSubtotal <= 0 && expensesSubtotal <= 0) return null;

    const subtotal = labourSubtotal + expensesSubtotal;
    const contingency = parseFloat(contingencyPct) || 0;
    const contingencyAmount = subtotal * (contingency / 100);
    const subtotalWithContingency = subtotal + contingencyAmount;
    const gstAmount = gstRegistered ? subtotalWithContingency * 0.1 : 0;
    const grandTotal = subtotalWithContingency + gstAmount;
    const effectiveHourlyRate = totalHours > 0 ? subtotalWithContingency / totalHours : 0;
    const profitAfterExpenses = labourSubtotal + contingencyAmount;

    return {
      labourSubtotal,
      totalHours,
      expensesSubtotal,
      subtotal,
      contingencyAmount,
      subtotalWithContingency,
      gstAmount,
      grandTotal,
      effectiveHourlyRate,
      profitAfterExpenses,
    };
  }, [lineItems, expenses, contingencyPct, gstRegistered]);

  const handleCopy = useCallback(() => {
    if (!result) return;
    const lines = [
      `PROJECT QUOTE${projectName ? ` — ${projectName}` : ''}`,
      clientName ? `Client: ${clientName}` : '',
      '================================',
      '',
      'LINE ITEMS:',
      ...lineItems
        .filter((item) => (parseFloat(item.hours) || 0) > 0)
        .map(
          (item) =>
            `  ${item.description || 'Service'}: ${item.hours}hrs @ ${formatCurrency(parseFloat(item.rate) || 0)}/hr = ${formatCurrency((parseFloat(item.hours) || 0) * (parseFloat(item.rate) || 0))}`
        ),
      '',
      `Labour Subtotal: ${formatCurrency(result.labourSubtotal)} (${result.totalHours} hours)`,
      expenses.length > 0 ? `Expenses: ${formatCurrency(result.expensesSubtotal)}` : '',
      `Subtotal: ${formatCurrency(result.subtotal)}`,
      result.contingencyAmount > 0
        ? `Contingency (${contingencyPct}%): ${formatCurrency(result.contingencyAmount)}`
        : '',
      gstRegistered ? `GST (10%): ${formatCurrency(result.gstAmount)}` : '',
      '',
      `TOTAL: ${formatCurrency(result.grandTotal)}${gstRegistered ? ' (inc. GST)' : ''}`,
      '',
      'Generated by InvoiceFlow — invoiceflow.app',
    ].filter(Boolean);
    navigator.clipboard.writeText(lines.join('\n'));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [result, lineItems, expenses, contingencyPct, gstRegistered, clientName, projectName]);

  return (
    <div className="space-y-8">
      {/* Quick Presets */}
      <div className="glass rounded-2xl p-6">
        <h3 className="text-lg font-bold text-white heading-font mb-3">Quick Start — Project Templates</h3>
        <div className="flex flex-wrap gap-2">
          {projectTypePresets.map((preset) => (
            <button
              key={preset.label}
              onClick={() => applyPreset(preset)}
              className="px-4 py-2 rounded-lg text-sm font-medium bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/10 transition-all"
              title={`${preset.hours}hrs @ $${preset.rate}/hr`}
            >
              {preset.label}
            </button>
          ))}
        </div>
      </div>

      {/* Client & Project */}
      <div className="glass rounded-2xl p-6">
        <h3 className="text-lg font-bold text-white heading-font mb-4">Project Details</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-slate-300 mb-1.5">Client Name (optional)</label>
            <input
              type="text"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-white focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/30 outline-none transition-colors"
              placeholder="Acme Pty Ltd"
            />
          </div>
          <div>
            <label className="block text-sm text-slate-300 mb-1.5">Project Name (optional)</label>
            <input
              type="text"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-white focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/30 outline-none transition-colors"
              placeholder="Website Redesign"
            />
          </div>
        </div>
      </div>

      {/* Line Items */}
      <div className="glass rounded-2xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-white heading-font">Line Items</h3>
          <button
            onClick={addLineItem}
            className="px-3 py-1.5 text-xs font-medium bg-teal-500/20 text-teal-400 rounded-lg hover:bg-teal-500/30 transition-colors border border-teal-500/30"
          >
            + Add Line
          </button>
        </div>
        <div className="space-y-3">
          {lineItems.map((item, idx) => (
            <div key={item.id} className="grid grid-cols-12 gap-2 items-end">
              <div className="col-span-12 sm:col-span-5">
                {idx === 0 && (
                  <label className="block text-xs text-slate-400 mb-1">Description</label>
                )}
                <input
                  type="text"
                  value={item.description}
                  onChange={(e) => updateLineItem(item.id, 'description', e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-white text-sm focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/30 outline-none transition-colors"
                  placeholder="Service description"
                />
              </div>
              <div className="col-span-4 sm:col-span-2">
                {idx === 0 && <label className="block text-xs text-slate-400 mb-1">Hours</label>}
                <input
                  type="number"
                  value={item.hours}
                  onChange={(e) => updateLineItem(item.id, 'hours', e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-white text-sm focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/30 outline-none transition-colors"
                  placeholder="0"
                />
              </div>
              <div className="col-span-4 sm:col-span-2">
                {idx === 0 && <label className="block text-xs text-slate-400 mb-1">Rate ($/hr)</label>}
                <div className="relative">
                  <span className="absolute left-2 top-1/2 -translate-y-1/2 text-slate-500 text-sm">$</span>
                  <input
                    type="number"
                    value={item.rate}
                    onChange={(e) => updateLineItem(item.id, 'rate', e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3 pl-6 py-2.5 text-white text-sm focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/30 outline-none transition-colors"
                    placeholder="120"
                  />
                </div>
              </div>
              <div className="col-span-3 sm:col-span-2">
                {idx === 0 && <label className="block text-xs text-slate-400 mb-1">Total</label>}
                <div className="py-2.5 text-sm text-slate-300 text-right">
                  {formatCurrency((parseFloat(item.hours) || 0) * (parseFloat(item.rate) || 0))}
                </div>
              </div>
              <div className="col-span-1">
                {idx === 0 && <label className="block text-xs text-transparent mb-1">X</label>}
                <button
                  onClick={() => removeLineItem(item.id)}
                  className="w-full py-2.5 text-sm text-slate-500 hover:text-rose-400 transition-colors text-center"
                  disabled={lineItems.length <= 1}
                >
                  &times;
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Expenses */}
      <div className="glass rounded-2xl p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-bold text-white heading-font">Expenses & Pass-Through Costs</h3>
            <p className="text-xs text-slate-400 mt-1">Software licenses, stock images, hosting, travel, etc.</p>
          </div>
          <button
            onClick={addExpense}
            className="px-3 py-1.5 text-xs font-medium bg-white/5 text-slate-300 rounded-lg hover:bg-white/10 transition-colors border border-white/10"
          >
            + Add Expense
          </button>
        </div>
        {expenses.length === 0 ? (
          <p className="text-sm text-slate-500 italic">No expenses added. Click &quot;+ Add Expense&quot; to include pass-through costs.</p>
        ) : (
          <div className="space-y-3">
            {expenses.map((exp, idx) => (
              <div key={exp.id} className="grid grid-cols-12 gap-2 items-end">
                <div className="col-span-7 sm:col-span-8">
                  {idx === 0 && (
                    <label className="block text-xs text-slate-400 mb-1">Description</label>
                  )}
                  <input
                    type="text"
                    value={exp.description}
                    onChange={(e) => updateExpense(exp.id, 'description', e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-white text-sm focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/30 outline-none transition-colors"
                    placeholder="Stock photos, hosting, etc."
                  />
                </div>
                <div className="col-span-4 sm:col-span-3">
                  {idx === 0 && <label className="block text-xs text-slate-400 mb-1">Amount</label>}
                  <div className="relative">
                    <span className="absolute left-2 top-1/2 -translate-y-1/2 text-slate-500 text-sm">$</span>
                    <input
                      type="number"
                      value={exp.amount}
                      onChange={(e) => updateExpense(exp.id, 'amount', e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-3 pl-6 py-2.5 text-white text-sm focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/30 outline-none transition-colors"
                      placeholder="0"
                    />
                  </div>
                </div>
                <div className="col-span-1">
                  {idx === 0 && <label className="block text-xs text-transparent mb-1">X</label>}
                  <button
                    onClick={() => removeExpense(exp.id)}
                    className="w-full py-2.5 text-sm text-slate-500 hover:text-rose-400 transition-colors text-center"
                  >
                    &times;
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Contingency & GST */}
      <div className="glass rounded-2xl p-6">
        <h3 className="text-lg font-bold text-white heading-font mb-4">Adjustments</h3>
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm text-slate-300 mb-1.5">Contingency Buffer (%)</label>
            <div className="flex gap-2 mb-2">
              {['0', '5', '10', '15', '20'].map((pct) => (
                <button
                  key={pct}
                  onClick={() => setContingencyPct(pct)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    contingencyPct === pct
                      ? 'bg-teal-500/20 text-teal-400 border border-teal-500/30'
                      : 'bg-white/5 text-slate-400 hover:bg-white/10 border border-transparent'
                  }`}
                >
                  {pct}%
                </button>
              ))}
            </div>
            <input
              type="number"
              value={contingencyPct}
              onChange={(e) => setContingencyPct(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-white text-sm focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/30 outline-none transition-colors"
              placeholder="10"
              min="0"
              max="50"
            />
            <p className="text-xs text-slate-500 mt-1.5">
              Industry standard: 10-20%. Covers scope creep and unexpected work.
            </p>
          </div>
          <div>
            <label className="block text-sm text-slate-300 mb-1.5">GST Registration</label>
            <div className="flex gap-2">
              <button
                onClick={() => setGstRegistered(true)}
                className={`flex-1 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  gstRegistered
                    ? 'bg-teal-500/20 text-teal-400 border border-teal-500/30'
                    : 'bg-white/5 text-slate-400 hover:bg-white/10 border border-white/10'
                }`}
              >
                GST Registered
              </button>
              <button
                onClick={() => setGstRegistered(false)}
                className={`flex-1 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  !gstRegistered
                    ? 'bg-teal-500/20 text-teal-400 border border-teal-500/30'
                    : 'bg-white/5 text-slate-400 hover:bg-white/10 border border-white/10'
                }`}
              >
                Not Registered
              </button>
            </div>
            <p className="text-xs text-slate-500 mt-1.5">
              GST registration is mandatory if your turnover exceeds $75,000/year.
            </p>
          </div>
        </div>
      </div>

      {/* Results */}
      {result && (
        <div className="glass rounded-2xl p-8 border border-teal-500/20">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-white heading-font">
              Quote Summary
            </h3>
            <button
              onClick={handleCopy}
              className="px-3 py-1.5 text-xs bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white rounded-lg transition-colors border border-white/10"
            >
              {copied ? 'Copied!' : 'Copy Quote'}
            </button>
          </div>

          {/* Visual Breakdown */}
          <div className="mb-8">
            <div className="h-8 rounded-xl overflow-hidden flex">
              {result.labourSubtotal > 0 && (
                <div
                  className="h-full bg-teal-500/60 flex items-center justify-center text-xs text-white/80 font-medium overflow-hidden"
                  style={{ width: `${(result.labourSubtotal / result.grandTotal) * 100}%` }}
                >
                  Labour
                </div>
              )}
              {result.expensesSubtotal > 0 && (
                <div
                  className="h-full bg-blue-500/60 flex items-center justify-center text-xs text-white/80 font-medium overflow-hidden"
                  style={{ width: `${(result.expensesSubtotal / result.grandTotal) * 100}%` }}
                >
                  Expenses
                </div>
              )}
              {result.contingencyAmount > 0 && (
                <div
                  className="h-full bg-amber-500/60 flex items-center justify-center text-xs text-white/80 font-medium overflow-hidden"
                  style={{ width: `${(result.contingencyAmount / result.grandTotal) * 100}%` }}
                >
                  Buffer
                </div>
              )}
              {result.gstAmount > 0 && (
                <div
                  className="h-full bg-purple-500/60 flex items-center justify-center text-xs text-white/80 font-medium overflow-hidden"
                  style={{ width: `${(result.gstAmount / result.grandTotal) * 100}%` }}
                >
                  GST
                </div>
              )}
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid sm:grid-cols-3 gap-4 mb-6">
            <div className="bg-white/5 rounded-xl p-4 text-center">
              <p className="text-xs text-slate-400 mb-1">Total Hours</p>
              <p className="text-2xl font-bold text-white">{result.totalHours}</p>
              <p className="text-xs text-slate-500">across {lineItems.filter((i) => (parseFloat(i.hours) || 0) > 0).length} line items</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4 text-center">
              <p className="text-xs text-slate-400 mb-1">Effective Rate</p>
              <p className="text-2xl font-bold text-emerald-400">
                {result.totalHours > 0 ? `${formatCurrency(result.effectiveHourlyRate)}/hr` : '—'}
              </p>
              <p className="text-xs text-slate-500">inc. contingency</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4 text-center">
              <p className="text-xs text-slate-400 mb-1">Quote Total</p>
              <p className="text-2xl font-bold text-teal-400">{formatCurrency(result.grandTotal)}</p>
              <p className="text-xs text-slate-500">{gstRegistered ? 'inc. GST' : 'ex. GST'}</p>
            </div>
          </div>

          {/* Detailed Breakdown */}
          <div className="space-y-2">
            {lineItems
              .filter((item) => (parseFloat(item.hours) || 0) > 0)
              .map((item) => (
                <div key={item.id} className="flex justify-between py-2 border-b border-white/5">
                  <span className="text-slate-300 text-sm">
                    {item.description || 'Service'}{' '}
                    <span className="text-slate-500">({item.hours}hrs @ ${item.rate}/hr)</span>
                  </span>
                  <span className="text-white font-medium text-sm">
                    {formatCurrency((parseFloat(item.hours) || 0) * (parseFloat(item.rate) || 0))}
                  </span>
                </div>
              ))}
            <div className="flex justify-between py-2 border-b border-white/5">
              <span className="text-slate-300 font-medium">Labour Subtotal</span>
              <span className="text-white font-medium">{formatCurrency(result.labourSubtotal)}</span>
            </div>
            {result.expensesSubtotal > 0 && (
              <div className="flex justify-between py-2 border-b border-white/5">
                <span className="text-slate-400">+ Expenses</span>
                <span className="text-blue-400">{formatCurrency(result.expensesSubtotal)}</span>
              </div>
            )}
            {result.contingencyAmount > 0 && (
              <div className="flex justify-between py-2 border-b border-white/5">
                <span className="text-slate-400">+ Contingency ({contingencyPct}%)</span>
                <span className="text-amber-400">{formatCurrency(result.contingencyAmount)}</span>
              </div>
            )}
            <div className="flex justify-between py-2 border-b border-white/5">
              <span className="text-slate-300 font-medium">Subtotal (ex. GST)</span>
              <span className="text-white font-medium">{formatCurrency(result.subtotalWithContingency)}</span>
            </div>
            {gstRegistered && (
              <div className="flex justify-between py-2 border-b border-white/5">
                <span className="text-slate-400">+ GST (10%)</span>
                <span className="text-purple-400">{formatCurrency(result.gstAmount)}</span>
              </div>
            )}
            <div className="flex justify-between py-3 border-t border-teal-500/20">
              <span className="text-white font-bold text-lg">Total Quote</span>
              <span className="text-teal-400 font-bold text-lg">{formatCurrency(result.grandTotal)}</span>
            </div>
          </div>

          {/* Insight */}
          {result.totalHours > 0 && (
            <div className="mt-6 bg-teal-500/10 border border-teal-500/20 rounded-xl p-4">
              <p className="text-sm text-teal-300">
                <strong>Insight:</strong> At {formatCurrency(result.effectiveHourlyRate)}/hr effective rate
                over {result.totalHours} hours, your labour value is {formatCurrency(result.labourSubtotal)}.
                {result.contingencyAmount > 0 &&
                  ` The ${contingencyPct}% contingency adds ${formatCurrency(result.contingencyAmount)} buffer for scope changes.`}
                {' '}Consider your profit margin after tax and super —{' '}
                <a href="/tools/profit-margin-calculator" className="underline hover:text-teal-200">
                  use our Profit Margin Calculator
                </a>{' '}
                to check your real take-home.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
