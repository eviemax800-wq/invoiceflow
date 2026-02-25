'use client';

import { useState, useMemo, useCallback } from 'react';

/* ---- Types & Constants ---- */

const EXPENSE_CATEGORIES = [
  'Home Office',
  'Equipment & Technology',
  'Software & Subscriptions',
  'Phone & Internet',
  'Vehicle & Travel',
  'Insurance',
  'Professional Development',
  'Marketing & Advertising',
  'Accounting & Legal',
  'Coworking & Office',
  'Superannuation',
  'Other',
] as const;

type ExpenseCategory = (typeof EXPENSE_CATEGORIES)[number];

type PaymentMethod = 'Cash' | 'Card' | 'Bank Transfer' | 'PayPal';

const PAYMENT_METHODS: PaymentMethod[] = ['Cash', 'Card', 'Bank Transfer', 'PayPal'];

type ReportPeriod = 'Monthly' | 'Quarterly' | 'Annual';

interface ExpenseEntry {
  id: number;
  date: string;
  description: string;
  category: ExpenseCategory;
  amount: string;
  gstIncluded: boolean;
  paymentMethod: PaymentMethod;
  hasReceipt: boolean;
}

const CATEGORY_COLORS: Record<ExpenseCategory, string> = {
  'Home Office': 'bg-teal-500',
  'Equipment & Technology': 'bg-blue-500',
  'Software & Subscriptions': 'bg-violet-500',
  'Phone & Internet': 'bg-cyan-500',
  'Vehicle & Travel': 'bg-amber-500',
  'Insurance': 'bg-rose-500',
  'Professional Development': 'bg-emerald-500',
  'Marketing & Advertising': 'bg-pink-500',
  'Accounting & Legal': 'bg-indigo-500',
  'Coworking & Office': 'bg-orange-500',
  'Superannuation': 'bg-lime-500',
  'Other': 'bg-slate-500',
};

const CATEGORY_BAR_COLORS: Record<ExpenseCategory, string> = {
  'Home Office': 'bg-gradient-to-r from-teal-500/80 to-teal-400/80',
  'Equipment & Technology': 'bg-gradient-to-r from-blue-500/80 to-blue-400/80',
  'Software & Subscriptions': 'bg-gradient-to-r from-violet-500/80 to-violet-400/80',
  'Phone & Internet': 'bg-gradient-to-r from-cyan-500/80 to-cyan-400/80',
  'Vehicle & Travel': 'bg-gradient-to-r from-amber-500/80 to-amber-400/80',
  'Insurance': 'bg-gradient-to-r from-rose-500/80 to-rose-400/80',
  'Professional Development': 'bg-gradient-to-r from-emerald-500/80 to-emerald-400/80',
  'Marketing & Advertising': 'bg-gradient-to-r from-pink-500/80 to-pink-400/80',
  'Accounting & Legal': 'bg-gradient-to-r from-indigo-500/80 to-indigo-400/80',
  'Coworking & Office': 'bg-gradient-to-r from-orange-500/80 to-orange-400/80',
  'Superannuation': 'bg-gradient-to-r from-lime-500/80 to-lime-400/80',
  'Other': 'bg-gradient-to-r from-slate-500/80 to-slate-400/80',
};

const TAX_RATES = [
  { label: '0% ($0 – $18,200)', rate: 0 },
  { label: '16% ($18,201 – $45,000)', rate: 0.16 },
  { label: '30% ($45,001 – $135,000)', rate: 0.30 },
  { label: '37% ($135,001 – $190,000)', rate: 0.37 },
  { label: '45% ($190,001+)', rate: 0.45 },
];

const MEDICARE_LEVY = 0.02;

const COMMON_MONTHLY_PRESETS: Omit<ExpenseEntry, 'id'>[] = [
  { date: '', description: 'Home internet (business portion)', category: 'Phone & Internet', amount: '45', gstIncluded: true, paymentMethod: 'Bank Transfer', hasReceipt: true },
  { date: '', description: 'Mobile phone plan (business portion)', category: 'Phone & Internet', amount: '35', gstIncluded: true, paymentMethod: 'Bank Transfer', hasReceipt: true },
  { date: '', description: 'Adobe Creative Cloud', category: 'Software & Subscriptions', amount: '79', gstIncluded: true, paymentMethod: 'Card', hasReceipt: true },
  { date: '', description: 'Slack Pro subscription', category: 'Software & Subscriptions', amount: '12', gstIncluded: true, paymentMethod: 'Card', hasReceipt: true },
  { date: '', description: 'Coworking space membership', category: 'Coworking & Office', amount: '350', gstIncluded: true, paymentMethod: 'Bank Transfer', hasReceipt: true },
  { date: '', description: 'Google Workspace', category: 'Software & Subscriptions', amount: '18', gstIncluded: true, paymentMethod: 'Card', hasReceipt: true },
  { date: '', description: 'Home office electricity (business portion)', category: 'Home Office', amount: '55', gstIncluded: true, paymentMethod: 'Bank Transfer', hasReceipt: true },
  { date: '', description: 'Domain & hosting renewal', category: 'Marketing & Advertising', amount: '25', gstIncluded: true, paymentMethod: 'Card', hasReceipt: true },
];

/* ---- Helpers ---- */

function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

function formatDate(dateStr: string): string {
  if (!dateStr) return '—';
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('en-AU', { day: '2-digit', month: 'short', year: 'numeric' });
}

let nextId = 1;
function createExpense(overrides?: Partial<Omit<ExpenseEntry, 'id'>>): ExpenseEntry {
  return {
    id: nextId++,
    date: overrides?.date ?? '',
    description: overrides?.description ?? '',
    category: overrides?.category ?? 'Other',
    amount: overrides?.amount ?? '',
    gstIncluded: overrides?.gstIncluded ?? false,
    paymentMethod: overrides?.paymentMethod ?? 'Card',
    hasReceipt: overrides?.hasReceipt ?? true,
  };
}

/* ---- Component ---- */

export default function ExpenseReportGenerator() {
  const [reportPeriod, setReportPeriod] = useState<ReportPeriod>('Monthly');
  const [periodStart, setPeriodStart] = useState('');
  const [periodEnd, setPeriodEnd] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [abn, setAbn] = useState('');
  const [isGstRegistered, setIsGstRegistered] = useState(false);
  const [marginalTaxRate, setMarginalTaxRate] = useState(0.30);
  const [expenses, setExpenses] = useState<ExpenseEntry[]>([createExpense(), createExpense(), createExpense()]);
  const [copied, setCopied] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const addExpense = useCallback(() => {
    setExpenses((prev) => [...prev, createExpense()]);
  }, []);

  const removeExpense = useCallback((id: number) => {
    setExpenses((prev) => prev.filter((e) => e.id !== id));
  }, []);

  const updateExpense = useCallback(
    (id: number, field: keyof Omit<ExpenseEntry, 'id'>, value: string | boolean) => {
      setExpenses((prev) =>
        prev.map((e) => (e.id === id ? { ...e, [field]: value } : e))
      );
    },
    []
  );

  const loadCommonMonthly = useCallback(() => {
    const today = new Date();
    const loaded = COMMON_MONTHLY_PRESETS.map((preset) => {
      const day = String(Math.floor(Math.random() * 28) + 1).padStart(2, '0');
      const month = String(today.getMonth() + 1).padStart(2, '0');
      const year = today.getFullYear();
      return createExpense({ ...preset, date: `${year}-${month}-${day}` });
    });
    setExpenses(loaded);
  }, []);

  const handleGenerate = useCallback(() => {
    setShowResults(true);
  }, []);

  // Results computation
  const results = useMemo(() => {
    const parsed = expenses
      .map((e) => ({
        ...e,
        amountNum: parseFloat(e.amount) || 0,
      }))
      .filter((e) => e.amountNum > 0);

    if (parsed.length === 0) return null;

    const totalExpenses = parsed.reduce((sum, e) => sum + e.amountNum, 0);

    // GST calculations
    let totalGstClaimed = 0;
    let netExpensesExGst = 0;
    parsed.forEach((e) => {
      if (e.gstIncluded && isGstRegistered) {
        const gst = e.amountNum / 11;
        totalGstClaimed += gst;
        netExpensesExGst += e.amountNum - gst;
      } else {
        netExpensesExGst += e.amountNum;
      }
    });

    // Category breakdown
    const categoryMap = new Map<ExpenseCategory, number>();
    parsed.forEach((e) => {
      const existing = categoryMap.get(e.category) || 0;
      categoryMap.set(e.category, existing + e.amountNum);
    });
    const categoryBreakdown = Array.from(categoryMap.entries())
      .map(([category, amount]) => ({
        category,
        amount,
        percentage: (amount / totalExpenses) * 100,
      }))
      .sort((a, b) => b.amount - a.amount);

    const categoriesUsed = categoryBreakdown.length;
    const top3Categories = categoryBreakdown.slice(0, 3);

    // Missing receipts
    const missingReceipts = parsed.filter((e) => !e.hasReceipt);
    const missingReceiptCount = missingReceipts.length;

    // Tax deduction estimate
    const effectiveRate = marginalTaxRate + MEDICARE_LEVY;
    const deductibleAmount = isGstRegistered ? netExpensesExGst : totalExpenses;
    const taxSavings = deductibleAmount * effectiveRate;

    // Sort expenses by date for table
    const sortedExpenses = [...parsed].sort((a, b) => {
      if (!a.date && !b.date) return 0;
      if (!a.date) return 1;
      if (!b.date) return -1;
      return a.date.localeCompare(b.date);
    });

    // Monthly trend (for quarterly/annual)
    const monthlyTrend: { month: string; total: number }[] = [];
    if (reportPeriod !== 'Monthly') {
      const monthMap = new Map<string, number>();
      parsed.forEach((e) => {
        if (e.date) {
          const monthKey = e.date.substring(0, 7); // YYYY-MM
          monthMap.set(monthKey, (monthMap.get(monthKey) || 0) + e.amountNum);
        }
      });
      const sortedMonths = Array.from(monthMap.entries()).sort((a, b) => a[0].localeCompare(b[0]));
      sortedMonths.forEach(([month, total]) => {
        const [y, m] = month.split('-');
        const d = new Date(parseInt(y), parseInt(m) - 1, 1);
        const label = d.toLocaleDateString('en-AU', { month: 'short', year: 'numeric' });
        monthlyTrend.push({ month: label, total });
      });
    }

    return {
      totalExpenses,
      totalGstClaimed,
      netExpensesExGst,
      itemCount: parsed.length,
      categoriesUsed,
      missingReceiptCount,
      missingReceipts,
      categoryBreakdown,
      top3Categories,
      taxSavings,
      deductibleAmount,
      effectiveRate,
      sortedExpenses,
      monthlyTrend,
    };
  }, [expenses, isGstRegistered, marginalTaxRate, reportPeriod]);

  const handleCopy = useCallback(() => {
    if (!results) return;
    const lines = [
      '═══════════════════════════════════════════════',
      '         FREELANCE EXPENSE REPORT',
      '═══════════════════════════════════════════════',
      '',
    ];
    if (businessName) lines.push(`Business: ${businessName}`);
    if (abn) lines.push(`ABN: ${abn}`);
    lines.push(`Period: ${reportPeriod}${periodStart ? ` (${periodStart}` : ''}${periodEnd ? ` to ${periodEnd})` : periodStart ? ')' : ''}`);
    lines.push(`GST Registered: ${isGstRegistered ? 'Yes' : 'No'}`);
    lines.push('');
    lines.push('SUMMARY');
    lines.push('───────────────────────────────────────────────');
    lines.push(`  Total Expenses:      ${formatCurrency(results.totalExpenses)}`);
    if (isGstRegistered) {
      lines.push(`  Total GST Claimed:   ${formatCurrency(results.totalGstClaimed)}`);
      lines.push(`  Net Expenses (ex-GST): ${formatCurrency(results.netExpensesExGst)}`);
    }
    lines.push(`  Number of Items:     ${results.itemCount}`);
    lines.push(`  Categories Used:     ${results.categoriesUsed}`);
    lines.push(`  Missing Receipts:    ${results.missingReceiptCount}`);
    lines.push(`  Est. Tax Saving:     ${formatCurrency(results.taxSavings)}`);
    lines.push('');
    lines.push('CATEGORY BREAKDOWN');
    lines.push('───────────────────────────────────────────────');
    results.categoryBreakdown.forEach((cat) => {
      const padded = cat.category.padEnd(28);
      lines.push(`  ${padded} ${formatCurrency(cat.amount).padStart(12)}  (${cat.percentage.toFixed(1)}%)`);
    });
    lines.push('');
    lines.push('EXPENSE DETAILS');
    lines.push('───────────────────────────────────────────────');
    results.sortedExpenses.forEach((e) => {
      lines.push(`  ${formatDate(e.date)}  ${e.description || 'No description'}`);
      lines.push(`    Category: ${e.category} | ${formatCurrency(e.amountNum)} | ${e.paymentMethod} | GST: ${e.gstIncluded ? 'Yes' : 'No'} | Receipt: ${e.hasReceipt ? 'Yes' : 'NO'}`);
    });
    if (results.missingReceiptCount > 0) {
      lines.push('');
      lines.push('⚠ MISSING RECEIPTS');
      lines.push('───────────────────────────────────────────────');
      results.missingReceipts.forEach((e) => {
        lines.push(`  ${formatDate(e.date)}  ${e.description || 'No description'} — ${formatCurrency(e.amountNum)}`);
      });
    }
    lines.push('');
    lines.push('───────────────────────────────────────────────');
    lines.push('Generated by InvoiceFlow — invoiceflow.au/tools/expense-report-generator');

    navigator.clipboard.writeText(lines.join('\n'));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [results, businessName, abn, reportPeriod, periodStart, periodEnd, isGstRegistered]);

  return (
    <div className="space-y-8">
      {/* Business Details & Report Settings */}
      <div className="glass rounded-2xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-white heading-font">Report Settings</h3>
          <button
            onClick={loadCommonMonthly}
            className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-500/30 transition-all text-sm text-slate-300 hover:text-white"
          >
            Load Common Monthly Expenses
          </button>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm text-slate-400 mb-1.5">Business Name</label>
            <input
              type="text"
              placeholder="e.g. Jane Smith Design"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-600 focus:border-teal-500 focus:outline-none transition-colors text-sm"
            />
          </div>
          <div>
            <label className="block text-sm text-slate-400 mb-1.5">ABN (optional)</label>
            <input
              type="text"
              placeholder="e.g. 12 345 678 901"
              value={abn}
              onChange={(e) => setAbn(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-600 focus:border-teal-500 focus:outline-none transition-colors text-sm"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 mb-4">
          <div>
            <label className="block text-sm text-slate-400 mb-1.5">Report Period</label>
            <select
              value={reportPeriod}
              onChange={(e) => setReportPeriod(e.target.value as ReportPeriod)}
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-teal-500 focus:outline-none transition-colors text-sm appearance-none cursor-pointer"
            >
              <option value="Monthly" className="bg-slate-800">Monthly</option>
              <option value="Quarterly" className="bg-slate-800">Quarterly</option>
              <option value="Annual" className="bg-slate-800">Annual</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-slate-400 mb-1.5">Period Start</label>
            <input
              type="date"
              value={periodStart}
              onChange={(e) => setPeriodStart(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-teal-500 focus:outline-none transition-colors text-sm"
            />
          </div>
          <div>
            <label className="block text-sm text-slate-400 mb-1.5">Period End</label>
            <input
              type="date"
              value={periodEnd}
              onChange={(e) => setPeriodEnd(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-teal-500 focus:outline-none transition-colors text-sm"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="flex items-center gap-3 bg-white/5 rounded-lg px-4 py-3">
            <button
              type="button"
              role="switch"
              aria-checked={isGstRegistered}
              onClick={() => setIsGstRegistered(!isGstRegistered)}
              className={`relative w-11 h-6 rounded-full transition-colors shrink-0 ${isGstRegistered ? 'bg-teal-500' : 'bg-slate-600'}`}
            >
              <span
                className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white transition-transform ${isGstRegistered ? 'translate-x-5' : 'translate-x-0'}`}
              />
            </button>
            <span className="text-sm text-slate-300">GST Registered</span>
          </div>
          <div>
            <label className="block text-sm text-slate-400 mb-1.5">Marginal Tax Rate</label>
            <select
              value={marginalTaxRate}
              onChange={(e) => setMarginalTaxRate(parseFloat(e.target.value))}
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-teal-500 focus:outline-none transition-colors text-sm appearance-none cursor-pointer"
            >
              {TAX_RATES.map((tr) => (
                <option key={tr.rate} value={tr.rate} className="bg-slate-800">
                  {tr.label}
                </option>
              ))}
            </select>
            <p className="text-xs text-slate-500 mt-1">+ 2% Medicare levy applied automatically</p>
          </div>
        </div>
      </div>

      {/* Expense Entries */}
      <div className="glass rounded-2xl p-6">
        <h3 className="text-lg font-bold text-white heading-font mb-4">Expense Entries</h3>
        <div className="space-y-4">
          {expenses.map((expense, index) => (
            <div key={expense.id} className="bg-white/5 rounded-xl p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-slate-500 font-medium">Expense {index + 1}</span>
                <button
                  onClick={() => removeExpense(expense.id)}
                  disabled={expenses.length <= 1}
                  className="w-7 h-7 rounded-lg bg-white/5 hover:bg-rose-500/20 border border-white/10 hover:border-rose-500/30 text-slate-500 hover:text-rose-400 transition-all flex items-center justify-center shrink-0 disabled:opacity-30 disabled:cursor-not-allowed"
                  aria-label="Remove expense"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div>
                  <label className="block text-xs text-slate-500 mb-1">Date</label>
                  <input
                    type="date"
                    value={expense.date}
                    onChange={(e) => updateExpense(expense.id, 'date', e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:border-teal-500 focus:outline-none transition-colors text-sm"
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label className="block text-xs text-slate-500 mb-1">Description</label>
                  <input
                    type="text"
                    placeholder="What was this for?"
                    value={expense.description}
                    onChange={(e) => updateExpense(expense.id, 'description', e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-600 focus:border-teal-500 focus:outline-none transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-500 mb-1">Category</label>
                  <select
                    value={expense.category}
                    onChange={(e) => updateExpense(expense.id, 'category', e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:border-teal-500 focus:outline-none transition-colors text-sm appearance-none cursor-pointer"
                  >
                    {EXPENSE_CATEGORIES.map((cat) => (
                      <option key={cat} value={cat} className="bg-slate-800">
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-slate-500 mb-1">Amount ($)</label>
                  <input
                    type="number"
                    placeholder="0.00"
                    value={expense.amount}
                    onChange={(e) => updateExpense(expense.id, 'amount', e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-600 focus:border-teal-500 focus:outline-none transition-colors text-sm"
                    min="0"
                    step="0.01"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-3">
                <div>
                  <label className="block text-xs text-slate-500 mb-1">Payment Method</label>
                  <select
                    value={expense.paymentMethod}
                    onChange={(e) => updateExpense(expense.id, 'paymentMethod', e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:border-teal-500 focus:outline-none transition-colors text-sm appearance-none cursor-pointer"
                  >
                    {PAYMENT_METHODS.map((pm) => (
                      <option key={pm} value={pm} className="bg-slate-800">
                        {pm}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex items-end">
                  <label className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 cursor-pointer hover:border-teal-500/30 transition-colors w-full">
                    <input
                      type="checkbox"
                      checked={expense.gstIncluded}
                      onChange={(e) => updateExpense(expense.id, 'gstIncluded', e.target.checked)}
                      className="w-4 h-4 rounded border-slate-600 bg-slate-700 text-teal-500 focus:ring-teal-500 focus:ring-offset-0"
                    />
                    <span className="text-sm text-slate-300">GST Included</span>
                  </label>
                </div>
                <div className="flex items-end">
                  <label className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 cursor-pointer hover:border-teal-500/30 transition-colors w-full">
                    <input
                      type="checkbox"
                      checked={expense.hasReceipt}
                      onChange={(e) => updateExpense(expense.id, 'hasReceipt', e.target.checked)}
                      className="w-4 h-4 rounded border-slate-600 bg-slate-700 text-teal-500 focus:ring-teal-500 focus:ring-offset-0"
                    />
                    <span className="text-sm text-slate-300">Has Receipt</span>
                  </label>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={addExpense}
          className="mt-4 w-full px-4 py-3 rounded-lg border border-dashed border-white/10 hover:border-teal-500/30 text-slate-500 hover:text-teal-400 transition-all text-sm"
        >
          + Add Expense
        </button>
      </div>

      {/* Generate Button */}
      <div className="flex justify-center">
        <button
          onClick={handleGenerate}
          className="px-8 py-3.5 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold hover:from-teal-400 hover:to-blue-400 transition-all text-base shadow-lg shadow-teal-500/20"
        >
          Generate Expense Report
        </button>
      </div>

      {/* Results */}
      {showResults && results && (
        <>
          {/* Summary Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div className="glass rounded-xl p-4 text-center">
              <p className="text-xs text-slate-400 mb-1">Total Expenses</p>
              <p className="text-xl font-bold text-white">{formatCurrency(results.totalExpenses)}</p>
            </div>
            {isGstRegistered && (
              <div className="glass rounded-xl p-4 text-center">
                <p className="text-xs text-slate-400 mb-1">Total GST Claimed</p>
                <p className="text-xl font-bold text-teal-400">{formatCurrency(results.totalGstClaimed)}</p>
              </div>
            )}
            <div className="glass rounded-xl p-4 text-center">
              <p className="text-xs text-slate-400 mb-1">{isGstRegistered ? 'Net Expenses (ex-GST)' : 'Deductible Amount'}</p>
              <p className="text-xl font-bold text-white">{formatCurrency(isGstRegistered ? results.netExpensesExGst : results.totalExpenses)}</p>
            </div>
            <div className="glass rounded-xl p-4 text-center">
              <p className="text-xs text-slate-400 mb-1">Number of Items</p>
              <p className="text-xl font-bold text-white">{results.itemCount}</p>
            </div>
            <div className="glass rounded-xl p-4 text-center">
              <p className="text-xs text-slate-400 mb-1">Categories Used</p>
              <p className="text-xl font-bold text-white">{results.categoriesUsed}</p>
            </div>
            <div className="glass rounded-xl p-4 text-center">
              <p className="text-xs text-slate-400 mb-1">Missing Receipts</p>
              <p className={`text-xl font-bold ${results.missingReceiptCount > 0 ? 'text-amber-400' : 'text-emerald-400'}`}>
                {results.missingReceiptCount}
              </p>
            </div>
          </div>

          {/* Tax Deduction Estimate */}
          <div className="glass rounded-2xl p-6 border border-teal-500/20 bg-teal-500/5">
            <h3 className="text-lg font-bold text-white heading-font mb-2">Tax Deduction Estimate</h3>
            <p className="text-sm text-slate-400 mb-4">
              Based on your marginal tax rate of {(marginalTaxRate * 100).toFixed(0)}% + 2% Medicare levy
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-white/5 rounded-xl p-4 text-center">
                <p className="text-xs text-slate-400 mb-1">Deductible Expenses</p>
                <p className="text-xl font-bold text-white">{formatCurrency(results.deductibleAmount)}</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 text-center">
                <p className="text-xs text-slate-400 mb-1">Effective Tax Rate</p>
                <p className="text-xl font-bold text-white">{(results.effectiveRate * 100).toFixed(0)}%</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 text-center">
                <p className="text-xs text-slate-400 mb-1">Estimated Tax Saving</p>
                <p className="text-xl font-bold text-emerald-400">{formatCurrency(results.taxSavings)}</p>
              </div>
            </div>
            <p className="text-xs text-slate-500 mt-3">
              This is an estimate only. Actual tax savings depend on your total taxable income and individual circumstances.
              Use the{' '}
              <a href="/tools/tax-estimator" className="text-teal-400 hover:underline">Tax Estimator</a>{' '}
              for a more detailed calculation.
            </p>
          </div>

          {/* Category Breakdown Chart */}
          <div className="glass rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white heading-font mb-4">Category Breakdown</h3>

            {/* Top 3 Highlight */}
            <div className="grid sm:grid-cols-3 gap-3 mb-6">
              {results.top3Categories.map((cat, index) => (
                <div key={cat.category} className="bg-white/5 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs text-slate-500 font-medium">#{index + 1}</span>
                    <div className={`w-2.5 h-2.5 rounded-full ${CATEGORY_COLORS[cat.category]}`} />
                  </div>
                  <p className="text-sm text-white font-medium">{cat.category}</p>
                  <p className="text-lg font-bold text-white">{formatCurrency(cat.amount)}</p>
                  <p className="text-xs text-slate-500">{cat.percentage.toFixed(1)}% of total</p>
                </div>
              ))}
            </div>

            {/* Bar chart */}
            <div className="space-y-3">
              {results.categoryBreakdown.map((cat) => (
                <div key={cat.category} className="flex items-center gap-4">
                  <span className="text-sm text-slate-300 w-40 sm:w-48 truncate shrink-0 flex items-center gap-2" title={cat.category}>
                    <span className={`w-2.5 h-2.5 rounded-full shrink-0 ${CATEGORY_COLORS[cat.category]}`} />
                    {cat.category}
                  </span>
                  <div className="flex-1 bg-white/5 rounded-full h-7 overflow-hidden relative">
                    <div
                      className={`h-full rounded-full flex items-center justify-end pr-3 ${CATEGORY_BAR_COLORS[cat.category]}`}
                      style={{ width: `${Math.max(cat.percentage, 8)}%` }}
                    >
                      <span className="text-xs font-medium text-white whitespace-nowrap">
                        {cat.percentage.toFixed(1)}%
                      </span>
                    </div>
                  </div>
                  <span className="text-xs text-slate-500 w-20 text-right shrink-0">
                    {formatCurrency(cat.amount)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Monthly Trend (only for Quarterly/Annual) */}
          {results.monthlyTrend.length > 1 && (
            <div className="glass rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white heading-font mb-4">Monthly Trend</h3>
              <div className="space-y-3">
                {(() => {
                  const maxMonthly = Math.max(...results.monthlyTrend.map((m) => m.total));
                  return results.monthlyTrend.map((m) => (
                    <div key={m.month} className="flex items-center gap-4">
                      <span className="text-sm text-slate-300 w-24 shrink-0">{m.month}</span>
                      <div className="flex-1 bg-white/5 rounded-full h-7 overflow-hidden relative">
                        <div
                          className="h-full rounded-full flex items-center justify-end pr-3 bg-gradient-to-r from-teal-500/80 to-blue-400/80"
                          style={{ width: `${Math.max((m.total / maxMonthly) * 100, 8)}%` }}
                        >
                          <span className="text-xs font-medium text-white whitespace-nowrap">
                            {formatCurrency(m.total)}
                          </span>
                        </div>
                      </div>
                    </div>
                  ));
                })()}
              </div>
            </div>
          )}

          {/* Full Expense Table */}
          <div className="glass rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white heading-font mb-4">Expense Details</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left text-slate-400 py-3 pr-3 font-medium text-xs">Date</th>
                    <th className="text-left text-slate-400 py-3 pr-3 font-medium text-xs">Description</th>
                    <th className="text-left text-slate-400 py-3 pr-3 font-medium text-xs">Category</th>
                    <th className="text-right text-slate-400 py-3 pr-3 font-medium text-xs">Amount</th>
                    <th className="text-center text-slate-400 py-3 pr-3 font-medium text-xs">GST</th>
                    <th className="text-left text-slate-400 py-3 pr-3 font-medium text-xs">Method</th>
                    <th className="text-center text-slate-400 py-3 font-medium text-xs">Receipt</th>
                  </tr>
                </thead>
                <tbody>
                  {results.sortedExpenses.map((e) => (
                    <tr key={e.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="py-2.5 pr-3 text-slate-300 whitespace-nowrap">{formatDate(e.date)}</td>
                      <td className="py-2.5 pr-3 text-white max-w-[200px] truncate">{e.description || '—'}</td>
                      <td className="py-2.5 pr-3">
                        <span className="flex items-center gap-1.5">
                          <span className={`w-2 h-2 rounded-full shrink-0 ${CATEGORY_COLORS[e.category]}`} />
                          <span className="text-slate-300 truncate">{e.category}</span>
                        </span>
                      </td>
                      <td className="py-2.5 pr-3 text-right text-white font-medium whitespace-nowrap">{formatCurrency(e.amountNum)}</td>
                      <td className="py-2.5 pr-3 text-center">
                        {e.gstIncluded ? (
                          <span className="text-teal-400 text-xs font-medium">Yes</span>
                        ) : (
                          <span className="text-slate-500 text-xs">No</span>
                        )}
                      </td>
                      <td className="py-2.5 pr-3 text-slate-400 whitespace-nowrap">{e.paymentMethod}</td>
                      <td className="py-2.5 text-center">
                        {e.hasReceipt ? (
                          <span className="text-emerald-400 text-xs">&#10003;</span>
                        ) : (
                          <span className="text-amber-400 text-xs font-medium">Missing</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="border-t border-white/10">
                    <td colSpan={3} className="py-3 text-white font-semibold">Total</td>
                    <td className="py-3 text-right text-white font-bold">{formatCurrency(results.totalExpenses)}</td>
                    <td colSpan={3} />
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>

          {/* Missing Receipts Warning */}
          {results.missingReceiptCount > 0 && (
            <div className="glass rounded-2xl p-6 border border-amber-500/20 bg-amber-500/5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white heading-font">
                  {results.missingReceiptCount} Missing Receipt{results.missingReceiptCount !== 1 ? 's' : ''}
                </h3>
              </div>
              <p className="text-sm text-slate-400 mb-4">
                The ATO requires receipts for all business expenses over $10. Missing receipts put your
                deductions at risk during an audit. Locate or reconstruct these records as soon as possible.
              </p>
              <div className="space-y-2">
                {results.missingReceipts.map((e) => (
                  <div key={e.id} className="flex items-center justify-between bg-white/5 rounded-lg px-4 py-2.5">
                    <div className="flex items-center gap-3">
                      <span className="text-amber-400 text-xs">&#9888;</span>
                      <span className="text-sm text-white">{e.description || 'No description'}</span>
                      <span className="text-xs text-slate-500">{formatDate(e.date)}</span>
                    </div>
                    <span className="text-sm font-medium text-white">{formatCurrency(e.amountNum)}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-500 mt-3">
                Tip: Check your email for purchase confirmations, download statements from your bank,
                or request duplicate receipts from suppliers.
              </p>
            </div>
          )}

          {/* Cross-links */}
          <div className="glass rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white heading-font mb-4">Related Tools</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              <a
                href="/tools/expense-deduction-calculator"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-500/30 rounded-xl p-4 transition-all group"
              >
                <p className="text-white font-medium text-sm group-hover:text-teal-400 transition-colors">Expense &amp; Deduction Calculator</p>
                <p className="text-xs text-slate-500 mt-1">Estimate your total claimable tax deductions</p>
              </a>
              <a
                href="/tools/net-income-calculator"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-500/30 rounded-xl p-4 transition-all group"
              >
                <p className="text-white font-medium text-sm group-hover:text-teal-400 transition-colors">Net Income Calculator</p>
                <p className="text-xs text-slate-500 mt-1">Calculate your take-home pay after tax and expenses</p>
              </a>
              <a
                href="/tools/tax-estimator"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-500/30 rounded-xl p-4 transition-all group"
              >
                <p className="text-white font-medium text-sm group-hover:text-teal-400 transition-colors">Tax Estimator</p>
                <p className="text-xs text-slate-500 mt-1">Estimate your Australian income tax and Medicare levy</p>
              </a>
              <a
                href="/tools/ato-tax-calendar"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-500/30 rounded-xl p-4 transition-all group"
              >
                <p className="text-white font-medium text-sm group-hover:text-teal-400 transition-colors">ATO Tax Calendar</p>
                <p className="text-xs text-slate-500 mt-1">Never miss a BAS, tax, or super deadline again</p>
              </a>
            </div>
          </div>

          {/* Copy Button */}
          <div className="flex justify-center">
            <button
              onClick={handleCopy}
              className="px-6 py-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-500/30 transition-all text-white font-medium"
            >
              {copied ? 'Copied to Clipboard!' : 'Copy Formatted Report to Clipboard'}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
