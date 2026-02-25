'use client';

import { useState, useMemo, useCallback } from 'react';

/* ---- Types ---- */

type BasPeriod = 'Q1-2025-26' | 'Q2-2025-26' | 'Q3-2025-26' | 'Q4-2025-26';
type ReportingMethod = 'Cash' | 'Accrual';

interface ChecklistItem {
  id: string;
  label: string;
  checked: boolean;
}

interface ChecklistCategory {
  id: string;
  title: string;
  icon: string;
  items: ChecklistItem[];
}

/* ---- Helpers ---- */

let _nextId = 1;
function genId(): string {
  return `bas-${_nextId++}-${Date.now()}`;
}

const BAS_PERIODS: { value: BasPeriod; label: string; months: string }[] = [
  { value: 'Q1-2025-26', label: 'Q1 2025-26', months: 'July - September 2025' },
  { value: 'Q2-2025-26', label: 'Q2 2025-26', months: 'October - December 2025' },
  { value: 'Q3-2025-26', label: 'Q3 2025-26', months: 'January - March 2026' },
  { value: 'Q4-2025-26', label: 'Q4 2025-26', months: 'April - June 2026' },
];

const BAS_DUE_DATES: Record<BasPeriod, string> = {
  'Q1-2025-26': '28 October 2025',
  'Q2-2025-26': '28 February 2026',
  'Q3-2025-26': '28 April 2026',
  'Q4-2025-26': '28 July 2026',
};

/* ---- Checklist Builder ---- */

function buildChecklist(reportingMethod: ReportingMethod): ChecklistCategory[] {
  _nextId = 1;

  const categories: ChecklistCategory[] = [];

  // 1. Pre-Lodgement Reconciliation
  categories.push({
    id: 'reconciliation',
    title: 'Pre-Lodgement Reconciliation',
    icon: 'M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z',
    items: [
      { id: genId(), label: 'Reconcile all bank accounts for the BAS period', checked: false },
      { id: genId(), label: 'Match all income transactions against issued invoices', checked: false },
      { id: genId(), label: 'Match all expense transactions against supplier invoices/receipts', checked: false },
      { id: genId(), label: 'Check for outstanding invoices that may affect this period', checked: false },
      { id: genId(), label: 'Verify GST component is correctly recorded on all transactions', checked: false },
    ],
  });

  // 2. GST Calculations
  categories.push({
    id: 'gst-calculations',
    title: 'GST Calculations',
    icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    items: [
      { id: genId(), label: 'Calculate total GST collected on sales (Label 1A)', checked: false },
      { id: genId(), label: 'Calculate total GST paid on business purchases (Label 1B)', checked: false },
      { id: genId(), label: 'Calculate net GST payable or refundable (1A minus 1B)', checked: false },
      { id: genId(), label: 'Confirm BAS exclusions — wages, super, bank fees, and government charges are excluded from GST', checked: false },
    ],
  });

  // 3. Income Verification
  const incomeItems: ChecklistItem[] = [
    { id: genId(), label: 'Check all invoices issued during the BAS period are recorded', checked: false },
  ];
  if (reportingMethod === 'Cash') {
    incomeItems.push({
      id: genId(),
      label: 'Verify payment received dates — only include income actually received in this period (cash method)',
      checked: false,
    });
  } else {
    incomeItems.push({
      id: genId(),
      label: 'Verify invoice issue dates — include all invoices issued in this period regardless of payment date (accrual method)',
      checked: false,
    });
  }
  incomeItems.push(
    { id: genId(), label: 'Include all income sources (client payments, interest, other business income)', checked: false },
    { id: genId(), label: 'Check for any adjustments, credit notes, or refunds issued during the period', checked: false },
  );
  categories.push({
    id: 'income-verification',
    title: 'Income Verification',
    icon: 'M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z',
    items: incomeItems,
  });

  // 4. Expense Review
  categories.push({
    id: 'expense-review',
    title: 'Expense Review',
    icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z',
    items: [
      { id: genId(), label: 'Categorise all business expenses for the period', checked: false },
      { id: genId(), label: 'Verify GST claims are valid — check each supplier invoice has a valid ABN and GST amount', checked: false },
      { id: genId(), label: 'Check for capital purchases (assets over $300) that may need different treatment', checked: false },
      { id: genId(), label: 'Review any prepaid expenses and allocate the correct portion to this period', checked: false },
    ],
  });

  // 5. PAYG Instalment
  categories.push({
    id: 'payg-instalment',
    title: 'PAYG Instalment',
    icon: 'M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z',
    items: [
      { id: genId(), label: 'Check your PAYG instalment amount (pre-printed on your BAS or via myGov)', checked: false },
      { id: genId(), label: 'Review your instalment rate and confirm it reflects your current income', checked: false },
      { id: genId(), label: 'Consider varying your PAYG instalment if income has changed significantly from last year', checked: false },
    ],
  });

  // 6. Final Checks
  categories.push({
    id: 'final-checks',
    title: 'Final Checks',
    icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
    items: [
      { id: genId(), label: 'Review previous BAS for any errors that need correcting in this lodgement', checked: false },
      { id: genId(), label: 'Check for any ATO correspondence or adjustments that affect this period', checked: false },
      { id: genId(), label: 'Save copies of all supporting documents (invoices, receipts, bank statements)', checked: false },
      { id: genId(), label: 'Set aside GST liability amount in a separate bank account', checked: false },
    ],
  });

  return categories;
}

/* ---- Main Component ---- */

export default function BasPreparation() {
  /* ── Form State ── */
  const [businessName, setBusinessName] = useState('');
  const [abn, setAbn] = useState('');
  const [basPeriod, setBasPeriod] = useState<BasPeriod>('Q3-2025-26');
  const [reportingMethod, setReportingMethod] = useState<ReportingMethod>('Cash');

  /* ── Checklist State ── */
  const [categories, setCategories] = useState<ChecklistCategory[]>([]);
  const [generated, setGenerated] = useState(false);
  const [copied, setCopied] = useState(false);

  /* ── Generate Handler ── */
  const handleGenerate = useCallback(() => {
    setCategories(buildChecklist(reportingMethod));
    setGenerated(true);
  }, [reportingMethod]);

  /* ── Toggle Checkbox ── */
  const toggleItem = useCallback((categoryId: string, itemId: string) => {
    setCategories((prev) =>
      prev.map((cat) =>
        cat.id === categoryId
          ? {
              ...cat,
              items: cat.items.map((item) =>
                item.id === itemId ? { ...item, checked: !item.checked } : item
              ),
            }
          : cat
      )
    );
  }, []);

  /* ── Stats ── */
  const stats = useMemo(() => {
    const allItems = categories.flatMap((cat) => cat.items);
    const total = allItems.length;
    const completed = allItems.filter((item) => item.checked).length;
    const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
    const categoriesCompleted = categories.filter(
      (cat) => cat.items.length > 0 && cat.items.every((item) => item.checked)
    ).length;
    return { total, completed, percentage, categoriesCompleted, totalCategories: categories.length };
  }, [categories]);

  /* ── Copy to Clipboard ── */
  const handleCopy = useCallback(() => {
    const divider = '════════════════════════════════════════════════════════';
    const sectionDivider = '────────────────────────────────────────────────────────';
    const lines: string[] = [];
    const periodInfo = BAS_PERIODS.find((p) => p.value === basPeriod);

    lines.push(divider);
    lines.push('BAS PREPARATION CHECKLIST');
    lines.push(divider);
    lines.push('');
    if (businessName) lines.push(`Business: ${businessName}${abn ? ` (ABN: ${abn})` : ''}`);
    lines.push(`BAS Period: ${periodInfo?.label} (${periodInfo?.months})`);
    lines.push(`Due Date: ${BAS_DUE_DATES[basPeriod]}`);
    lines.push(`Reporting Method: ${reportingMethod}`);
    lines.push('');

    categories.forEach((category) => {
      lines.push(category.title.toUpperCase());
      lines.push(sectionDivider);
      category.items.forEach((item) => {
        lines.push(`  [${item.checked ? 'x' : ' '}] ${item.label}`);
      });
      lines.push('');
    });

    lines.push(`Progress: ${stats.completed}/${stats.total} items complete (${stats.percentage}%)`);
    lines.push('');
    lines.push(divider);
    lines.push('Generated at invoiceflow.au/tools/bas-preparation');

    navigator.clipboard.writeText(lines.join('\n')).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  }, [categories, stats, businessName, abn, basPeriod, reportingMethod]);

  /* ── Input Styles ── */
  const inputClass =
    'w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500/50 transition-all text-sm';
  const labelClass = 'block text-xs font-medium text-slate-400 mb-1.5';

  return (
    <div className="space-y-8">
      {/* Input Form */}
      {!generated && (
        <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
          <h3 className="text-lg font-semibold text-white heading-font mb-6">
            Your BAS Details
          </h3>
          <div className="space-y-6">
            {/* Business Name + ABN */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Business Name (Optional)</label>
                <input
                  type="text"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  className={inputClass}
                  placeholder="e.g. Smith Digital Studio"
                />
              </div>
              <div>
                <label className={labelClass}>ABN (Optional)</label>
                <input
                  type="text"
                  value={abn}
                  onChange={(e) => setAbn(e.target.value)}
                  className={inputClass}
                  placeholder="e.g. 12 345 678 901"
                />
              </div>
            </div>

            {/* BAS Period */}
            <div>
              <label className={labelClass}>BAS Period</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {BAS_PERIODS.map((period) => (
                  <button
                    key={period.value}
                    onClick={() => setBasPeriod(period.value)}
                    className={`text-sm py-2.5 px-3 rounded-xl border transition-all text-center ${
                      basPeriod === period.value
                        ? 'bg-gradient-to-r from-teal-500/20 to-blue-500/20 border-teal-500/40 text-white font-medium'
                        : 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <span className="block">{period.label}</span>
                    <span className="block text-xs text-slate-500 mt-0.5">{period.months}</span>
                  </button>
                ))}
              </div>
              <p className="text-xs text-slate-500 mt-2">
                Due date: <span className="text-teal-400 font-medium">{BAS_DUE_DATES[basPeriod]}</span>
              </p>
            </div>

            {/* Reporting Method */}
            <div>
              <label className={labelClass}>Reporting Method</label>
              <div className="flex gap-2">
                {(['Cash', 'Accrual'] as ReportingMethod[]).map((method) => (
                  <button
                    key={method}
                    onClick={() => setReportingMethod(method)}
                    className={`flex-1 py-2.5 px-4 rounded-xl text-sm font-medium transition-all ${
                      reportingMethod === method
                        ? 'bg-teal-500 text-white'
                        : 'bg-white/5 text-slate-400 border border-white/10 hover:bg-white/10'
                    }`}
                  >
                    {method}
                  </button>
                ))}
              </div>
              <p className="text-xs text-slate-500 mt-2">
                {reportingMethod === 'Cash'
                  ? 'Cash method: Report GST when payment is received or made.'
                  : 'Accrual method: Report GST when invoices are issued or received, regardless of payment date.'}
              </p>
            </div>

            {/* GST Registered Notice */}
            <div className="bg-teal-500/10 border border-teal-500/20 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-sm text-teal-300">
                  This checklist is designed for GST-registered businesses. If your annual turnover is
                  over $75,000, GST registration is mandatory. If you&apos;re voluntarily registered,
                  the same BAS obligations apply.
                </p>
              </div>
            </div>

            {/* Generate Button */}
            <div className="pt-2">
              <button
                onClick={handleGenerate}
                className="w-full sm:w-auto bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold rounded-xl px-8 py-4 hover:from-teal-400 hover:to-blue-400 transition-all text-sm"
              >
                Generate My BAS Checklist
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Generated Checklist */}
      {generated && (
        <>
          {/* Summary Bar */}
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
              <div>
                <h3 className="text-lg font-semibold text-white heading-font">
                  Your BAS Preparation Checklist
                </h3>
                <p className="text-sm text-slate-400 mt-1">
                  {BAS_PERIODS.find((p) => p.value === basPeriod)?.label} &middot;{' '}
                  {BAS_PERIODS.find((p) => p.value === basPeriod)?.months} &middot;{' '}
                  {reportingMethod} Method
                  {businessName ? ` · ${businessName}` : ''}
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Due: <span className="text-amber-400 font-medium">{BAS_DUE_DATES[basPeriod]}</span>
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setGenerated(false);
                    setCategories([]);
                  }}
                  className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-400 text-sm hover:text-white hover:bg-white/10 transition-all"
                >
                  Edit Details
                </button>
                <button
                  onClick={handleCopy}
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-teal-500 to-blue-500 text-white text-sm font-medium hover:from-teal-400 hover:to-blue-400 transition-all flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                  {copied ? 'Copied!' : 'Copy Checklist'}
                </button>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-slate-400">Overall Progress</span>
                <span className="text-sm font-bold text-teal-400">{stats.percentage}%</span>
              </div>
              <div className="w-full bg-white/5 rounded-full h-3 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-teal-500 to-blue-500 transition-all duration-500 ease-out"
                  style={{ width: `${Math.max(stats.percentage, 1)}%` }}
                />
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center bg-white/5 rounded-xl p-3">
                <p className="text-2xl font-bold text-white">{stats.total}</p>
                <p className="text-xs text-slate-500">Total Items</p>
              </div>
              <div className="text-center bg-white/5 rounded-xl p-3">
                <p className="text-2xl font-bold text-teal-400">{stats.completed}</p>
                <p className="text-xs text-slate-500">Completed</p>
              </div>
              <div className="text-center bg-white/5 rounded-xl p-3">
                <p className="text-2xl font-bold text-slate-400">
                  {stats.categoriesCompleted}/{stats.totalCategories}
                </p>
                <p className="text-xs text-slate-500">Categories Done</p>
              </div>
            </div>
          </div>

          {/* Checklist Categories */}
          <div className="space-y-4">
            {categories.map((category) => {
              const catCompleted = category.items.filter((i) => i.checked).length;
              const catTotal = category.items.length;
              const catPercentage = catTotal > 0 ? Math.round((catCompleted / catTotal) * 100) : 0;
              const isComplete = catCompleted === catTotal;

              return (
                <div
                  key={category.id}
                  className="bg-white/[0.03] border border-white/[0.06] rounded-2xl overflow-hidden"
                >
                  {/* Category Header */}
                  <div className="p-5 sm:p-6 border-b border-white/[0.06]">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                            isComplete ? 'bg-teal-500/20' : 'bg-white/5'
                          }`}
                        >
                          <svg
                            className={`w-5 h-5 transition-colors ${
                              isComplete ? 'text-teal-400' : 'text-slate-400'
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d={category.icon}
                            />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                          <p className="text-xs text-slate-500 mt-0.5">
                            {catCompleted} of {catTotal} completed
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span
                          className={`text-sm font-bold ${
                            isComplete ? 'text-teal-400' : 'text-slate-500'
                          }`}
                        >
                          {catPercentage}%
                        </span>
                        {isComplete && (
                          <div className="w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center">
                            <svg
                              className="w-3.5 h-3.5 text-white"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={3}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                        )}
                      </div>
                    </div>
                    {/* Category Progress Bar */}
                    <div className="w-full bg-white/5 rounded-full h-1.5 overflow-hidden mt-3">
                      <div
                        className={`h-full rounded-full transition-all duration-500 ease-out ${
                          isComplete
                            ? 'bg-teal-500'
                            : 'bg-gradient-to-r from-teal-500 to-blue-500'
                        }`}
                        style={{ width: `${Math.max(catPercentage, 1)}%` }}
                      />
                    </div>
                  </div>

                  {/* Items */}
                  <div className="p-4 sm:p-5 space-y-2">
                    {category.items.map((item) => (
                      <label
                        key={item.id}
                        className="flex items-start gap-3 p-3 bg-white/5 rounded-xl cursor-pointer hover:bg-white/10 transition-all group"
                      >
                        <div className="relative mt-0.5 flex-shrink-0">
                          <input
                            type="checkbox"
                            checked={item.checked}
                            onChange={() => toggleItem(category.id, item.id)}
                            className="sr-only"
                          />
                          <div
                            className={`w-5 h-5 rounded-md border-2 transition-all flex items-center justify-center ${
                              item.checked
                                ? 'bg-teal-500 border-teal-500'
                                : 'border-white/20 group-hover:border-teal-500/50'
                            }`}
                          >
                            {item.checked && (
                              <svg
                                className="w-3 h-3 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={3}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            )}
                          </div>
                        </div>
                        <span
                          className={`text-sm transition-all ${
                            item.checked
                              ? 'text-slate-500 line-through'
                              : 'text-slate-300'
                          }`}
                        >
                          {item.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Actions */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={handleCopy}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-teal-500 to-blue-500 text-white font-medium hover:from-teal-400 hover:to-blue-400 transition-all flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
              {copied ? 'Copied to Clipboard!' : 'Copy Checklist'}
            </button>
            <button
              onClick={() => {
                setGenerated(false);
                setCategories([]);
              }}
              className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all"
            >
              Start Over
            </button>
          </div>

          {/* Related Tools */}
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white heading-font mb-4">Related BAS Tools</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <a
                href="/tools/gst-calculator"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-500/30 rounded-xl p-4 transition-all group"
              >
                <p className="text-white font-medium text-sm group-hover:text-teal-400 transition-colors">
                  GST Calculator
                </p>
                <p className="text-xs text-slate-500 mt-1">Calculate GST on any amount</p>
              </a>
              <a
                href="/tools/tax-estimator"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-500/30 rounded-xl p-4 transition-all group"
              >
                <p className="text-white font-medium text-sm group-hover:text-teal-400 transition-colors">
                  Tax Estimator
                </p>
                <p className="text-xs text-slate-500 mt-1">Estimate your annual tax</p>
              </a>
              <a
                href="/tools/eofy-checklist"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-500/30 rounded-xl p-4 transition-all group"
              >
                <p className="text-white font-medium text-sm group-hover:text-teal-400 transition-colors">
                  EOFY Checklist
                </p>
                <p className="text-xs text-slate-500 mt-1">End of financial year preparation</p>
              </a>
              <a
                href="/tools/expense-deduction-calculator"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-500/30 rounded-xl p-4 transition-all group"
              >
                <p className="text-white font-medium text-sm group-hover:text-teal-400 transition-colors">
                  Expense Deduction Calculator
                </p>
                <p className="text-xs text-slate-500 mt-1">Maximise your deductions</p>
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
