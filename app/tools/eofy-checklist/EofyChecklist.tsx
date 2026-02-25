'use client';

import { useState, useMemo, useCallback } from 'react';

/* ---- Helpers ---- */

function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

/* ---- Types ---- */

type RevenueRange = 'under-75k' | '75k-150k' | '150k-300k' | 'over-300k';
type BusinessType =
  | 'Web Developer'
  | 'Designer'
  | 'Writer/Copywriter'
  | 'Marketing Consultant'
  | 'Photographer'
  | 'Accountant/Bookkeeper'
  | 'Other';

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

interface BusinessProfile {
  revenueRange: RevenueRange;
  registeredForGst: boolean;
  hasEmployees: boolean;
  workFromHome: boolean;
  useVehicle: boolean;
  hasTaxAgent: boolean;
  businessType: BusinessType;
}

/* ---- Checklist Data Builder ---- */

let _nextId = 1;
function genId(): string {
  return `eofy-${_nextId++}-${Date.now()}`;
}

function buildChecklist(profile: BusinessProfile): ChecklistCategory[] {
  const categories: ChecklistCategory[] = [];

  // 1. Income & Revenue (always)
  const incomeItems = [
    'Reconcile all invoices sent during the financial year',
    'Confirm all income has been received and recorded',
    'Chase outstanding payments before June 30',
    'Review recurring revenue contracts and confirm amounts',
    'Check for any income received but not yet invoiced',
    'Reconcile bank account balance against accounting records',
  ];
  if (profile.revenueRange === '150k-300k' || profile.revenueRange === 'over-300k') {
    incomeItems.push('Review income splitting arrangements if applicable');
  }
  categories.push({
    id: 'income',
    title: 'Income & Revenue',
    icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    items: incomeItems.map((label) => ({ id: genId(), label, checked: false })),
  });

  // 2. BAS & GST (if GST registered)
  if (profile.registeredForGst) {
    categories.push({
      id: 'bas-gst',
      title: 'BAS & GST',
      icon: 'M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z',
      items: [
        { id: genId(), label: 'Lodge final quarterly BAS (Q4: April-June) by 28 July', checked: false },
        { id: genId(), label: 'Reconcile GST collected vs GST paid for the full year', checked: false },
        { id: genId(), label: 'Review GST classification of all expenses (GST-free vs taxable)', checked: false },
        { id: genId(), label: 'Check for any BAS amendments needed for Q1-Q3', checked: false },
        { id: genId(), label: 'Verify PAYG instalments match expected tax liability', checked: false },
        { id: genId(), label: 'Confirm GST reporting method is correct (cash vs accrual)', checked: false },
      ],
    });
  }

  // 3. Deductions & Expenses (always)
  const deductionItems: string[] = [
    'Review all business expenses for the financial year',
    'Gather receipts for all purchases over $10',
    'Categorise expenses by deduction type in accounting software',
    'Review professional development expenses (courses, certifications, books)',
    'Check insurance premiums paid (professional indemnity, public liability)',
    'Review software and subscription expenses',
    'Check marketing and advertising spend',
    'Review professional membership fees',
  ];
  if (profile.workFromHome) {
    deductionItems.push(
      'Calculate home office deduction (fixed rate 67c/hr or actual cost method)',
      'Gather home office records: electricity bills, internet bills, phone bills',
      'Calculate the business-use percentage of your home if using actual cost method'
    );
  }
  if (profile.useVehicle) {
    deductionItems.push(
      'Review vehicle logbook for business kilometres (if using logbook method)',
      'Calculate vehicle deduction: cents per km (85c/km, max 5,000 km) or logbook method',
      'Gather fuel receipts, registration, insurance, and maintenance records'
    );
  }
  deductionItems.push('Review equipment purchases for instant write-off eligibility (under $20,000)');
  categories.push({
    id: 'deductions',
    title: 'Deductions & Expenses',
    icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z',
    items: deductionItems.map((label) => ({ id: genId(), label, checked: false })),
  });

  // 4. Superannuation (always)
  categories.push({
    id: 'super',
    title: 'Superannuation',
    icon: 'M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z',
    items: [
      { id: genId(), label: 'Review personal super contributions made this financial year', checked: false },
      { id: genId(), label: 'Consider making a voluntary concessional contribution before June 30 (cap: $30,000)', checked: false },
      { id: genId(), label: 'Check carry-forward unused concessional cap from prior years (if super balance under $500K)', checked: false },
      { id: genId(), label: 'Submit Notice of Intent to Claim Deduction to your super fund', checked: false },
      { id: genId(), label: 'Receive written acknowledgement from super fund before lodging tax return', checked: false },
      { id: genId(), label: 'Make contribution by June 25 to ensure it clears before June 30', checked: false },
    ],
  });

  // 5. Assets & Depreciation (always)
  categories.push({
    id: 'assets',
    title: 'Assets & Depreciation',
    icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    items: [
      { id: genId(), label: 'Review asset register and update with current-year purchases', checked: false },
      { id: genId(), label: 'Check instant asset write-off eligibility for purchases under $20,000', checked: false },
      { id: genId(), label: 'Calculate depreciation for existing assets using appropriate method', checked: false },
      { id: genId(), label: 'Write off any assets disposed of, scrapped, or no longer in use', checked: false },
      { id: genId(), label: 'Consider purchasing needed equipment before June 30 to claim this year', checked: false },
      { id: genId(), label: 'Update written-down values for all depreciating assets', checked: false },
    ],
  });

  // 6. Employee Obligations (if has employees)
  if (profile.hasEmployees) {
    categories.push({
      id: 'employees',
      title: 'Employee Obligations',
      icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
      items: [
        { id: genId(), label: 'Finalise Single Touch Payroll (STP) reporting by July 14', checked: false },
        { id: genId(), label: 'Reconcile PAYG withholding for all employees', checked: false },
        { id: genId(), label: 'Confirm super guarantee payments for Q4 (due 28 July)', checked: false },
        { id: genId(), label: 'Review employee annual leave balances and entitlements', checked: false },
        { id: genId(), label: 'Prepare payment summaries if not using STP', checked: false },
        { id: genId(), label: 'Check contractor vs employee classification for all workers', checked: false },
      ],
    });
  }

  // 7. Record Keeping (always)
  const recordItems: string[] = [
    'Back up all financial records (cloud and local copy)',
    'Ensure 5-year retention compliance for all business documents',
    'Organise digital receipts by category and date',
    'Reconcile bank statements against accounting records',
    'Save copies of all invoices sent and received',
    'Archive email correspondence related to business transactions',
  ];
  if (profile.hasTaxAgent) {
    recordItems.push(
      'Prepare document pack for tax agent (income summary, expenses, receipts)',
      'Confirm appointment with tax agent and provide all records',
      'Send prior year tax return and notice of assessment to new tax agent (if changed)'
    );
  } else {
    recordItems.push(
      'Download pre-fill report from myGov/ATO online services',
      'Prepare all documents needed for self-lodgement',
      'Note the 31 October lodgement deadline for self-lodgers'
    );
  }
  categories.push({
    id: 'records',
    title: 'Record Keeping',
    icon: 'M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4',
    items: recordItems.map((label) => ({ id: genId(), label, checked: false })),
  });

  // 8. Tax Planning (conditional on revenue)
  const taxPlanningItems: string[] = [
    'Estimate total taxable income for the financial year',
    'Calculate expected tax liability and set aside funds',
    'Review private health insurance status (Medicare levy surcharge applies if income over $93,000 and no hospital cover)',
    'Consider prepaying deductible expenses before June 30 (insurance, subscriptions, rent)',
  ];
  if (profile.revenueRange === '150k-300k' || profile.revenueRange === 'over-300k') {
    taxPlanningItems.push(
      'Review income splitting opportunities (if operating through a trust or partnership)',
      'Consider deferring income to next financial year if near a tax bracket threshold',
      'Review Division 293 tax implications for super contributions (if income over $250K)'
    );
  }
  if (profile.revenueRange === 'over-300k') {
    taxPlanningItems.push(
      'Consider whether company structure would be more tax-efficient',
      'Review PAYG instalment amounts for next financial year'
    );
  }
  taxPlanningItems.push(
    'Review current tax bracket and optimise deductions accordingly',
    'Plan cash reserves for tax payment (due with return or as per PAYG instalments)'
  );
  categories.push({
    id: 'tax-planning',
    title: 'Tax Planning',
    icon: 'M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z',
    items: taxPlanningItems.map((label) => ({ id: genId(), label, checked: false })),
  });

  return categories;
}

/* ---- Revenue Range Labels ---- */

const REVENUE_RANGES: { value: RevenueRange; label: string }[] = [
  { value: 'under-75k', label: 'Under $75K' },
  { value: '75k-150k', label: '$75K - $150K' },
  { value: '150k-300k', label: '$150K - $300K' },
  { value: 'over-300k', label: 'Over $300K' },
];

const BUSINESS_TYPES: BusinessType[] = [
  'Web Developer',
  'Designer',
  'Writer/Copywriter',
  'Marketing Consultant',
  'Photographer',
  'Accountant/Bookkeeper',
  'Other',
];

/* ---- Toggle Button Component ---- */

function ToggleButton({
  label,
  active,
  onToggle,
}: {
  label: string;
  active: boolean;
  onToggle: () => void;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-300 mb-2">{label}</label>
      <div className="flex gap-2">
        <button
          onClick={(e) => {
            e.preventDefault();
            if (!active) onToggle();
          }}
          className={`flex-1 py-2.5 px-4 rounded-xl text-sm font-medium transition-all ${
            active
              ? 'bg-teal-500 text-white'
              : 'bg-white/5 text-slate-400 border border-white/10 hover:bg-white/10'
          }`}
        >
          Yes
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            if (active) onToggle();
          }}
          className={`flex-1 py-2.5 px-4 rounded-xl text-sm font-medium transition-all ${
            !active
              ? 'bg-teal-500 text-white'
              : 'bg-white/5 text-slate-400 border border-white/10 hover:bg-white/10'
          }`}
        >
          No
        </button>
      </div>
    </div>
  );
}

/* ---- Main Component ---- */

export default function EofyChecklist() {
  /* ── Form State ── */
  const [profile, setProfile] = useState<BusinessProfile>({
    revenueRange: '75k-150k',
    registeredForGst: true,
    hasEmployees: false,
    workFromHome: true,
    useVehicle: false,
    hasTaxAgent: false,
    businessType: 'Web Developer',
  });

  /* ── Checklist State ── */
  const [categories, setCategories] = useState<ChecklistCategory[]>([]);
  const [generated, setGenerated] = useState(false);

  /* ── Generate Handler ── */
  const handleGenerate = useCallback(() => {
    _nextId = 1;
    setCategories(buildChecklist(profile));
    setGenerated(true);
  }, [profile]);

  /* ── Toggle checkbox ── */
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

  /* ── Print / Download ── */
  const handlePrint = useCallback(() => {
    window.print();
  }, []);

  /* ── Input Styles ── */
  const selectClass =
    'w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/25 transition-all text-sm appearance-none';

  return (
    <div className="space-y-8">
      {/* Print-only styles */}
      <style>{`
        @media print {
          .page-bg { background: white !important; }
          .no-print { display: none !important; }
          .print-only { display: block !important; }
          .glass { background: white !important; border: 1px solid #e2e8f0 !important; }
          * { color: #1e293b !important; }
          .gradient-text { color: #14b8a6 !important; -webkit-text-fill-color: #14b8a6 !important; }
          header, footer, .no-print { display: none !important; }
          .print-break { page-break-inside: avoid; }
        }
      `}</style>

      {/* Input Form */}
      {!generated && (
        <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
          <h3 className="text-lg font-semibold text-white heading-font mb-6">
            Tell us about your business
          </h3>
          <div className="space-y-6">
            {/* Revenue Range */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Annual Revenue Range
              </label>
              <select
                value={profile.revenueRange}
                onChange={(e) =>
                  setProfile((prev) => ({ ...prev, revenueRange: e.target.value as RevenueRange }))
                }
                className={selectClass}
              >
                {REVENUE_RANGES.map((range) => (
                  <option key={range.value} value={range.value} className="bg-slate-900">
                    {range.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Business Type */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Business Type
              </label>
              <select
                value={profile.businessType}
                onChange={(e) =>
                  setProfile((prev) => ({
                    ...prev,
                    businessType: e.target.value as BusinessType,
                  }))
                }
                className={selectClass}
              >
                {BUSINESS_TYPES.map((type) => (
                  <option key={type} value={type} className="bg-slate-900">
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* Toggle Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              <ToggleButton
                label="Registered for GST?"
                active={profile.registeredForGst}
                onToggle={() =>
                  setProfile((prev) => ({ ...prev, registeredForGst: !prev.registeredForGst }))
                }
              />
              <ToggleButton
                label="Have employees?"
                active={profile.hasEmployees}
                onToggle={() =>
                  setProfile((prev) => ({ ...prev, hasEmployees: !prev.hasEmployees }))
                }
              />
              <ToggleButton
                label="Work from home?"
                active={profile.workFromHome}
                onToggle={() =>
                  setProfile((prev) => ({ ...prev, workFromHome: !prev.workFromHome }))
                }
              />
              <ToggleButton
                label="Use a vehicle for business?"
                active={profile.useVehicle}
                onToggle={() =>
                  setProfile((prev) => ({ ...prev, useVehicle: !prev.useVehicle }))
                }
              />
              <ToggleButton
                label="Have a tax agent?"
                active={profile.hasTaxAgent}
                onToggle={() =>
                  setProfile((prev) => ({ ...prev, hasTaxAgent: !prev.hasTaxAgent }))
                }
              />
            </div>

            {/* Generate Button */}
            <div className="pt-2">
              <button
                onClick={handleGenerate}
                className="w-full sm:w-auto bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold rounded-xl px-8 py-4 hover:from-teal-400 hover:to-blue-400 transition-all text-sm"
              >
                Generate My Checklist
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
                  Your EOFY Checklist
                </h3>
                <p className="text-sm text-slate-400 mt-1">
                  {profile.businessType} &middot;{' '}
                  {REVENUE_RANGES.find((r) => r.value === profile.revenueRange)?.label} revenue
                  {profile.registeredForGst ? ' · GST Registered' : ''}
                  {profile.hasEmployees ? ' · Has Employees' : ''}
                </p>
              </div>
              <div className="flex gap-2 no-print">
                <button
                  onClick={() => {
                    setGenerated(false);
                    setCategories([]);
                  }}
                  className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-400 text-sm hover:text-white hover:bg-white/10 transition-all"
                >
                  Edit Profile
                </button>
                <button
                  onClick={handlePrint}
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-teal-500 to-blue-500 text-white text-sm font-medium hover:from-teal-400 hover:to-blue-400 transition-all flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                    />
                  </svg>
                  Download as PDF
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
          <div className="space-y-4 print-break">
            {categories.map((category) => {
              const catCompleted = category.items.filter((i) => i.checked).length;
              const catTotal = category.items.length;
              const catPercentage = catTotal > 0 ? Math.round((catCompleted / catTotal) * 100) : 0;
              const isComplete = catCompleted === catTotal;

              return (
                <div
                  key={category.id}
                  className="bg-white/[0.03] border border-white/[0.06] rounded-2xl overflow-hidden print-break"
                >
                  {/* Category Header */}
                  <div className="p-5 sm:p-6 border-b border-white/[0.06]">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                            isComplete
                              ? 'bg-teal-500/20'
                              : 'bg-white/5'
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
          <div className="flex flex-col sm:flex-row gap-3 justify-center no-print">
            <button
              onClick={handlePrint}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-teal-500 to-blue-500 text-white font-medium hover:from-teal-400 hover:to-blue-400 transition-all flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                />
              </svg>
              Download as PDF
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
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 no-print">
            <h3 className="text-lg font-bold text-white heading-font mb-4">Related EOFY Tools</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <a
                href="/tools/tax-estimator"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-500/30 rounded-xl p-4 transition-all group"
              >
                <p className="text-white font-medium text-sm group-hover:text-teal-400 transition-colors">
                  Tax Estimator
                </p>
                <p className="text-xs text-slate-500 mt-1">Estimate your tax liability</p>
              </a>
              <a
                href="/tools/super-calculator"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-500/30 rounded-xl p-4 transition-all group"
              >
                <p className="text-white font-medium text-sm group-hover:text-teal-400 transition-colors">
                  Super Calculator
                </p>
                <p className="text-xs text-slate-500 mt-1">Calculate super contributions</p>
              </a>
              <a
                href="/tools/depreciation-calculator"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-500/30 rounded-xl p-4 transition-all group"
              >
                <p className="text-white font-medium text-sm group-hover:text-teal-400 transition-colors">
                  Depreciation Calculator
                </p>
                <p className="text-xs text-slate-500 mt-1">Calculate asset depreciation</p>
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
