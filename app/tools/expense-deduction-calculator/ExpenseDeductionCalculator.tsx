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

// 2025-26 ATO tax brackets
function calculateIncomeTax(taxableIncome: number): number {
  if (taxableIncome <= 18200) return 0;
  if (taxableIncome <= 45000) return (taxableIncome - 18200) * 0.19;
  if (taxableIncome <= 135000)
    return 5092 + (taxableIncome - 45000) * 0.325;
  if (taxableIncome <= 190000)
    return 34342 + (taxableIncome - 135000) * 0.37;
  return 54692 + (taxableIncome - 190000) * 0.45;
}

function getMarginalRate(taxableIncome: number): number {
  if (taxableIncome <= 18200) return 0;
  if (taxableIncome <= 45000) return 0.19;
  if (taxableIncome <= 135000) return 0.325;
  if (taxableIncome <= 190000) return 0.37;
  return 0.45;
}

function calculateMedicareLevy(taxableIncome: number): number {
  if (taxableIncome <= 26000) return 0;
  if (taxableIncome <= 32500) return (taxableIncome - 26000) * 0.1;
  return taxableIncome * 0.02;
}

interface ExpenseCategory {
  id: string;
  label: string;
  description: string;
  atoRule: string;
  icon: string;
}

const EXPENSE_CATEGORIES: ExpenseCategory[] = [
  {
    id: 'homeOffice',
    label: 'Home Office',
    description: 'Dedicated workspace, furniture, utilities',
    atoRule: 'Fixed rate method: 67c/hr or actual cost method',
    icon: '\u{1F3E0}',
  },
  {
    id: 'equipment',
    label: 'Equipment & Tech',
    description: 'Computer, phone, monitor, peripherals',
    atoRule: 'Items under $300 claimed immediately; over $300 depreciated',
    icon: '\u{1F4BB}',
  },
  {
    id: 'software',
    label: 'Software & Subscriptions',
    description: 'Adobe, Figma, accounting tools, hosting',
    atoRule: 'Fully deductible if used for business',
    icon: '\u{2601}\uFE0F',
  },
  {
    id: 'phone',
    label: 'Phone & Internet',
    description: 'Mobile plan, home internet, data',
    atoRule: 'Business % deductible — keep a 4-week log',
    icon: '\u{1F4F1}',
  },
  {
    id: 'vehicle',
    label: 'Vehicle & Travel',
    description: 'Client visits, networking events, parking',
    atoRule: 'Logbook method or 85c/km (max 5,000 km)',
    icon: '\u{1F697}',
  },
  {
    id: 'insurance',
    label: 'Insurance',
    description: 'Professional indemnity, public liability, income protection',
    atoRule: 'Business insurance fully deductible',
    icon: '\u{1F6E1}\uFE0F',
  },
  {
    id: 'professional',
    label: 'Professional Development',
    description: 'Courses, conferences, books, memberships',
    atoRule: 'Must relate directly to current work',
    icon: '\u{1F4DA}',
  },
  {
    id: 'marketing',
    label: 'Marketing & Advertising',
    description: 'Website, ads, business cards, portfolio',
    atoRule: 'Fully deductible business expense',
    icon: '\u{1F4E3}',
  },
  {
    id: 'accounting',
    label: 'Accounting & Legal',
    description: 'Tax agent, bookkeeper, legal advice',
    atoRule: 'Tax agent fees deductible in year paid',
    icon: '\u{1F4CA}',
  },
  {
    id: 'coworking',
    label: 'Coworking & Rent',
    description: 'Coworking space, studio, shared office',
    atoRule: 'Fully deductible if used for business',
    icon: '\u{1F3E2}',
  },
  {
    id: 'superannuation',
    label: 'Superannuation',
    description: 'Personal super contributions (concessional)',
    atoRule: 'Deductible up to $30,000/yr concessional cap',
    icon: '\u{1F3E6}',
  },
  {
    id: 'other',
    label: 'Other Expenses',
    description: 'Postage, stationery, uniforms, meals (50%)',
    atoRule: 'Must have a direct business purpose with records',
    icon: '\u{1F4C1}',
  },
];

export default function ExpenseDeductionCalculator() {
  const [grossIncome, setGrossIncome] = useState('95000');
  const [expenses, setExpenses] = useState<Record<string, string>>({
    homeOffice: '2500',
    equipment: '1800',
    software: '1200',
    phone: '800',
    vehicle: '2000',
    insurance: '1500',
    professional: '600',
    marketing: '400',
    accounting: '1200',
    coworking: '0',
    superannuation: '5000',
    other: '300',
  });

  const [copied, setCopied] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const results = useMemo(() => {
    const income = parseFloat(grossIncome) || 0;

    // Calculate total deductions
    const deductionsByCategory: { id: string; label: string; amount: number }[] = [];
    let totalDeductions = 0;

    for (const cat of EXPENSE_CATEGORIES) {
      const amount = parseFloat(expenses[cat.id] || '0') || 0;
      if (amount > 0) {
        deductionsByCategory.push({ id: cat.id, label: cat.label, amount });
        totalDeductions += amount;
      }
    }

    // Tax without deductions
    const taxBefore = calculateIncomeTax(income);
    const medicareBefore = calculateMedicareLevy(income);
    const totalTaxBefore = taxBefore + medicareBefore;
    const takeHomeBefore = income - totalTaxBefore;

    // Tax with deductions
    const taxableIncome = Math.max(0, income - totalDeductions);
    const taxAfter = calculateIncomeTax(taxableIncome);
    const medicareAfter = calculateMedicareLevy(taxableIncome);
    const totalTaxAfter = taxAfter + medicareAfter;
    const takeHomeAfter = income - totalDeductions - totalTaxAfter;

    // Savings
    const taxSaved = totalTaxBefore - totalTaxAfter;
    const effectiveCostOfDeductions = totalDeductions - taxSaved;
    const marginalRate = getMarginalRate(income);
    const centsPerDollar = Math.round(marginalRate * 100 + 2); // +2 for medicare

    // Sort categories by amount for the chart
    const sortedCategories = [...deductionsByCategory].sort(
      (a, b) => b.amount - a.amount
    );

    // Chart max for bar widths
    const maxAmount = sortedCategories.length > 0 ? sortedCategories[0].amount : 1;

    return {
      income,
      totalDeductions,
      taxableIncome,
      taxBefore,
      medicareBefore,
      totalTaxBefore,
      takeHomeBefore,
      taxAfter,
      medicareAfter,
      totalTaxAfter,
      takeHomeAfter,
      taxSaved,
      effectiveCostOfDeductions,
      marginalRate,
      centsPerDollar,
      sortedCategories,
      maxAmount,
    };
  }, [grossIncome, expenses]);

  const handleCopy = () => {
    const lines = [
      'Freelance Expense & Deduction Calculator — InvoiceFlow',
      '======================================================',
      '',
      `Gross Income: ${formatCurrency(results.income)}`,
      `Total Deductions: ${formatCurrency(results.totalDeductions)}`,
      `Taxable Income: ${formatCurrency(results.taxableIncome)}`,
      '',
      '--- Tax Comparison ---',
      `Tax Without Deductions: ${formatCurrency(results.totalTaxBefore)}`,
      `Tax With Deductions: ${formatCurrency(results.totalTaxAfter)}`,
      `Tax Saved: ${formatCurrency(results.taxSaved)}`,
      '',
      `Marginal Tax Rate: ${Math.round(results.marginalRate * 100)}% + 2% Medicare`,
      `Every $1 deducted saves you: ${results.centsPerDollar}c`,
      `Effective Cost of Deductions: ${formatCurrency(results.effectiveCostOfDeductions)}`,
      '',
      '--- Deduction Breakdown ---',
      ...results.sortedCategories.map(
        (cat) => `${cat.label}: ${formatCurrency(cat.amount)}`
      ),
      '',
      'Generated at invoiceflow.au/tools/expense-deduction-calculator',
    ];
    navigator.clipboard.writeText(lines.join('\n')).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const inputClass =
    'w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500/40 focus:border-teal-500/40 transition-all';

  return (
    <div className="space-y-8">
      {/* Income Input */}
      <div className="glass rounded-2xl p-6 sm:p-8">
        <h2 className="text-xl font-bold text-white heading-font mb-4">Your Freelance Income</h2>
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1.5">
            Gross Annual Income ($)
          </label>
          <input
            type="number"
            value={grossIncome}
            onChange={(e) => setGrossIncome(e.target.value)}
            className={inputClass + ' max-w-sm'}
            placeholder="95000"
          />
          <p className="text-xs text-slate-500 mt-1">
            Your total freelance revenue before any deductions
          </p>
        </div>
      </div>

      {/* Expense Categories */}
      <div className="glass rounded-2xl p-6 sm:p-8">
        <h2 className="text-xl font-bold text-white heading-font mb-2">
          Business Expenses & Deductions
        </h2>
        <p className="text-sm text-slate-400 mb-6">
          Enter your annual expenses for each category. Tap any category for ATO rules.
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          {EXPENSE_CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              className="bg-white/5 rounded-xl p-4 hover:bg-white/[0.07] transition-colors"
            >
              <div className="flex items-start gap-3">
                <span className="text-xl shrink-0 mt-0.5">{cat.icon}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <button
                      onClick={() =>
                        setExpandedCategory(expandedCategory === cat.id ? null : cat.id)
                      }
                      className="text-sm font-semibold text-white hover:text-teal-400 transition-colors text-left"
                    >
                      {cat.label}
                    </button>
                    <div className="w-28 shrink-0">
                      <input
                        type="number"
                        value={expenses[cat.id] || ''}
                        onChange={(e) =>
                          setExpenses((prev) => ({ ...prev, [cat.id]: e.target.value }))
                        }
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-white text-sm text-right focus:outline-none focus:ring-2 focus:ring-teal-500/40 focus:border-teal-500/40 transition-all"
                        placeholder="0"
                      />
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">{cat.description}</p>
                  {expandedCategory === cat.id && (
                    <div className="mt-2 p-2 bg-teal-500/10 border border-teal-500/20 rounded-lg">
                      <p className="text-xs text-teal-400">
                        <strong>ATO rule:</strong> {cat.atoRule}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Results */}
      <div className="glass rounded-2xl p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-white heading-font">Your Tax Savings</h2>
          <button
            onClick={handleCopy}
            className="flex items-center gap-2 text-sm px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all"
          >
            {copied ? <span className="text-emerald-400">Copied</span> : <>Copy Results</>}
          </button>
        </div>

        {/* Key Metrics */}
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-teal-500/10 to-blue-500/10 border border-teal-500/20 rounded-xl p-5 text-center">
            <p className="text-xs text-teal-400/70 uppercase tracking-wide mb-1">Tax Saved</p>
            <p className="text-3xl font-bold text-teal-400">
              {formatCurrency(results.taxSaved)}
            </p>
            <p className="text-xs text-slate-500 mt-1">per year</p>
          </div>
          <div className="bg-white/5 rounded-xl p-5 text-center">
            <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">Total Deductions</p>
            <p className="text-2xl font-bold text-white">
              {formatCurrency(results.totalDeductions)}
            </p>
            <p className="text-xs text-slate-500 mt-1">claimed</p>
          </div>
          <div className="bg-white/5 rounded-xl p-5 text-center">
            <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">Effective Cost</p>
            <p className="text-2xl font-bold text-white">
              {formatCurrency(results.effectiveCostOfDeductions)}
            </p>
            <p className="text-xs text-slate-500 mt-1">after tax savings</p>
          </div>
        </div>

        {/* Tax Comparison */}
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="bg-white/5 rounded-xl p-5">
            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-4">
              Without Deductions
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-slate-400">Gross Income</span>
                <span className="text-sm text-white">{formatCurrency(results.income)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-slate-400">Income Tax</span>
                <span className="text-sm text-rose-400">
                  -{formatCurrency(results.taxBefore)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-slate-400">Medicare Levy</span>
                <span className="text-sm text-rose-400">
                  -{formatCurrency(results.medicareBefore)}
                </span>
              </div>
              <hr className="border-white/10" />
              <div className="flex justify-between">
                <span className="text-sm font-semibold text-white">Take-Home</span>
                <span className="text-sm font-semibold text-white">
                  {formatCurrency(results.takeHomeBefore)}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-teal-500/5 to-blue-500/5 border border-teal-500/20 rounded-xl p-5">
            <h3 className="text-sm font-semibold text-teal-400 uppercase tracking-wide mb-4">
              With Deductions
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-slate-400">Gross Income</span>
                <span className="text-sm text-white">{formatCurrency(results.income)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-slate-400">Deductions</span>
                <span className="text-sm text-teal-400">
                  -{formatCurrency(results.totalDeductions)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-slate-400">Income Tax</span>
                <span className="text-sm text-rose-400">
                  -{formatCurrency(results.taxAfter)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-slate-400">Medicare Levy</span>
                <span className="text-sm text-rose-400">
                  -{formatCurrency(results.medicareAfter)}
                </span>
              </div>
              <hr className="border-teal-500/20" />
              <div className="flex justify-between">
                <span className="text-sm font-semibold text-white">Take-Home</span>
                <span className="text-sm font-semibold text-teal-400">
                  {formatCurrency(results.takeHomeAfter)}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Per Dollar Insight */}
        <div className="bg-white/5 rounded-xl p-5 text-center">
          <p className="text-sm text-slate-400 mb-1">At your marginal tax rate</p>
          <p className="text-2xl font-bold text-white">
            Every <span className="text-teal-400">$1</span> deducted saves you{' '}
            <span className="text-teal-400">{results.centsPerDollar}c</span>
          </p>
          <p className="text-xs text-slate-500 mt-1">
            {Math.round(results.marginalRate * 100)}% income tax + 2% Medicare levy
          </p>
        </div>

        {/* Deduction Breakdown Chart */}
        {results.sortedCategories.length > 0 && (
          <div>
            <h3 className="text-sm font-semibold text-slate-300 mb-4 uppercase tracking-wide">
              Deduction Breakdown
            </h3>
            <div className="space-y-3">
              {results.sortedCategories.map((cat) => {
                const pct = results.maxAmount > 0 ? (cat.amount / results.maxAmount) * 100 : 0;
                const taxSaved = cat.amount * (results.marginalRate + 0.02);
                return (
                  <div key={cat.id} className="space-y-1">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">{cat.label}</span>
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-teal-400">
                          saves {formatCurrency(taxSaved)}
                        </span>
                        <span className="text-white font-medium w-20 text-right">
                          {formatCurrency(cat.amount)}
                        </span>
                      </div>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-teal-500 to-blue-500 rounded-full transition-all duration-500"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
