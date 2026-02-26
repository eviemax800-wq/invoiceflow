'use client';

import { useState, useMemo, useCallback, useRef } from 'react';

/* ================================================================
   TYPES & CONSTANTS
   ================================================================ */

type AUState = 'VIC' | 'NSW' | 'QLD' | 'SA' | 'WA' | 'TAS' | 'NT' | 'ACT';

type Industry =
  | 'Technology / IT'
  | 'Design / Creative'
  | 'Consulting / Management'
  | 'Accounting / Finance'
  | 'Marketing / Communications'
  | 'Trades / Construction'
  | 'Health / Wellbeing'
  | 'Legal'
  | 'Education / Training'
  | 'Other';

const INDUSTRIES: Industry[] = [
  'Technology / IT',
  'Design / Creative',
  'Consulting / Management',
  'Accounting / Finance',
  'Marketing / Communications',
  'Trades / Construction',
  'Health / Wellbeing',
  'Legal',
  'Education / Training',
  'Other',
];

const AU_STATES: { value: AUState; label: string }[] = [
  { value: 'VIC', label: 'Victoria' },
  { value: 'NSW', label: 'New South Wales' },
  { value: 'QLD', label: 'Queensland' },
  { value: 'SA', label: 'South Australia' },
  { value: 'WA', label: 'Western Australia' },
  { value: 'TAS', label: 'Tasmania' },
  { value: 'NT', label: 'Northern Territory' },
  { value: 'ACT', label: 'Australian Capital Territory' },
];

/* ---- Australian employment data ---- */

// Public holidays by state (2025 figures)
const PUBLIC_HOLIDAYS: Record<AUState, number> = {
  VIC: 13,
  NSW: 8,
  QLD: 9,
  SA: 12,
  WA: 9,
  TAS: 9,
  NT: 11,
  ACT: 10,
};

// Workers compensation base rates by industry (% of salary)
const WORKERS_COMP_RATES: Record<Industry, number> = {
  'Technology / IT': 0.012,
  'Design / Creative': 0.012,
  'Consulting / Management': 0.012,
  'Accounting / Finance': 0.012,
  'Marketing / Communications': 0.012,
  'Trades / Construction': 0.05,
  'Health / Wellbeing': 0.025,
  'Legal': 0.012,
  'Education / Training': 0.015,
  'Other': 0.02,
};

// Typical training/PD budget by industry
const TRAINING_BUDGET: Record<Industry, number> = {
  'Technology / IT': 4000,
  'Design / Creative': 3000,
  'Consulting / Management': 5000,
  'Accounting / Finance': 4000,
  'Marketing / Communications': 3500,
  'Trades / Construction': 2500,
  'Health / Wellbeing': 4000,
  'Legal': 5000,
  'Education / Training': 3500,
  'Other': 3000,
};

// Typical equipment cost provided by employer
const EQUIPMENT_BUDGET: Record<Industry, number> = {
  'Technology / IT': 5000,
  'Design / Creative': 5000,
  'Consulting / Management': 3500,
  'Accounting / Finance': 3000,
  'Marketing / Communications': 3500,
  'Trades / Construction': 4500,
  'Health / Wellbeing': 3000,
  'Legal': 3000,
  'Education / Training': 3000,
  'Other': 3500,
};

// Self-employment insurance costs by industry
const SELF_INSURANCE_COSTS: Record<
  Industry,
  { incomeProtection: number; pi: number; pl: number }
> = {
  'Technology / IT': { incomeProtection: 2000, pi: 700, pl: 400 },
  'Design / Creative': { incomeProtection: 1800, pi: 500, pl: 350 },
  'Consulting / Management': { incomeProtection: 2500, pi: 1200, pl: 400 },
  'Accounting / Finance': { incomeProtection: 2200, pi: 1100, pl: 350 },
  'Marketing / Communications': { incomeProtection: 1800, pi: 600, pl: 350 },
  'Trades / Construction': { incomeProtection: 3000, pi: 800, pl: 700 },
  'Health / Wellbeing': { incomeProtection: 2500, pi: 900, pl: 500 },
  'Legal': { incomeProtection: 2500, pi: 1500, pl: 400 },
  'Education / Training': { incomeProtection: 1800, pi: 600, pl: 400 },
  'Other': { incomeProtection: 2000, pi: 700, pl: 400 },
};

const SG_RATE = 0.115; // 11.5% for 2024-25
const ANNUAL_LEAVE_RATE = 0.0769; // 4 weeks / 52 weeks
const SICK_LEAVE_RATE = 0.0385; // 10 days / 260 days
const LSL_RATE = 0.0167; // ~1.67% per year accrual
const WORKING_DAYS_PER_YEAR = 251; // approximate business days
const HOURS_PER_DAY = 8;

/* ---- Formatting ---- */

function fmt(value: number): string {
  return new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

function fmtPct(value: number): string {
  return `${(value * 100).toFixed(1)}%`;
}

/* ================================================================
   COMPONENT
   ================================================================ */

export default function BenefitsCostCalculator() {
  /* ---- State ---- */
  const [step, setStep] = useState(1);
  const totalSteps = 4;

  // Step 1: Employment comparison
  const [salary, setSalary] = useState(100000);
  const [industry, setIndustry] = useState<Industry>('Technology / IT');
  const [auState, setAuState] = useState<AUState>('VIC');

  // Step 2: Adjustments (optional overrides)
  const [includeLeaveLoading, setIncludeLeaveLoading] = useState(true);
  const [customSuper, setCustomSuper] = useState('');
  const [customEquipment, setCustomEquipment] = useState('');
  const [customTraining, setCustomTraining] = useState('');

  // Step 3: Self-employment overrides
  const [selfSuperContrib, setSelfSuperContrib] = useState('');
  const [selfEquipmentCost, setSelfEquipmentCost] = useState('');
  const [billablePercent, setBillablePercent] = useState(75);
  const [weeksOff, setWeeksOff] = useState(4);

  // UI state
  const [copied, setCopied] = useState(false);
  const resultsRef = useRef<HTMLDivElement>(null);

  /* ---- Derived values ---- */

  const superRate = customSuper ? parseFloat(customSuper) / 100 : SG_RATE;
  const equipmentVal = customEquipment ? parseFloat(customEquipment) : EQUIPMENT_BUDGET[industry];
  const trainingVal = customTraining ? parseFloat(customTraining) : TRAINING_BUDGET[industry];

  /* ================================================================
     CALCULATIONS — Employee Benefits
     ================================================================ */

  const employeeBenefits = useMemo(() => {
    const superAmount = salary * superRate;
    const annualLeave = salary * ANNUAL_LEAVE_RATE;
    const leaveLoading = includeLeaveLoading ? annualLeave * 0.175 : 0;
    const sickLeave = salary * SICK_LEAVE_RATE;
    const publicHols = salary * (PUBLIC_HOLIDAYS[auState] / WORKING_DAYS_PER_YEAR);
    const workersComp = salary * WORKERS_COMP_RATES[industry];
    const lsl = salary * LSL_RATE;
    const training = trainingVal;
    const equipment = equipmentVal;

    const items = [
      {
        label: 'Superannuation (SG)',
        value: superAmount,
        pct: superRate,
        note: `${(superRate * 100).toFixed(1)}% of base salary — rising to 12% from July 2025`,
      },
      {
        label: 'Annual Leave (4 weeks)',
        value: annualLeave,
        pct: ANNUAL_LEAVE_RATE,
        note: '20 days paid per year under NES',
      },
      ...(includeLeaveLoading
        ? [
            {
              label: 'Leave Loading (17.5%)',
              value: leaveLoading,
              pct: ANNUAL_LEAVE_RATE * 0.175,
              note: 'Common under modern awards and enterprise agreements',
            },
          ]
        : []),
      {
        label: 'Sick/Personal Leave (10 days)',
        value: sickLeave,
        pct: SICK_LEAVE_RATE,
        note: 'Accumulates year to year — covers sick, carer, and compassionate leave',
      },
      {
        label: `Public Holidays (${PUBLIC_HOLIDAYS[auState]} days — ${auState})`,
        value: publicHols,
        pct: PUBLIC_HOLIDAYS[auState] / WORKING_DAYS_PER_YEAR,
        note: `Paid time off for ${PUBLIC_HOLIDAYS[auState]} state/national public holidays`,
      },
      {
        label: 'Workers Compensation Insurance',
        value: workersComp,
        pct: WORKERS_COMP_RATES[industry],
        note: `Industry rate: ~${(WORKERS_COMP_RATES[industry] * 100).toFixed(1)}% — varies by claims history`,
      },
      {
        label: 'Long Service Leave Accrual',
        value: lsl,
        pct: LSL_RATE,
        note: '8.67 weeks after 10 years continuous service (~1.67%/yr)',
      },
      {
        label: 'Training / Professional Development',
        value: training,
        pct: training / salary,
        note: 'Courses, certifications, conferences, workshops',
      },
      {
        label: 'Equipment / Tools Provided',
        value: equipment,
        pct: equipment / salary,
        note: 'Laptop, software licenses, phone, desk setup',
      },
    ];

    const totalBenefits = items.reduce((sum, i) => sum + i.value, 0);
    const totalPackage = salary + totalBenefits;
    const benefitsPercent = totalBenefits / salary;

    return { items, totalBenefits, totalPackage, benefitsPercent };
  }, [salary, superRate, includeLeaveLoading, auState, industry, trainingVal, equipmentVal]);

  /* ================================================================
     CALCULATIONS — Self-Employment Costs
     ================================================================ */

  const selfEmploymentCosts = useMemo(() => {
    const insuranceCosts = SELF_INSURANCE_COSTS[industry];
    const selfSuper = selfSuperContrib
      ? parseFloat(selfSuperContrib)
      : salary * SG_RATE; // Match employer SG as baseline
    const selfEquip = selfEquipmentCost
      ? parseFloat(selfEquipmentCost)
      : EQUIPMENT_BUDGET[industry];
    const leaveBuffer = salary * ANNUAL_LEAVE_RATE; // Fund own annual leave
    const sickBuffer = salary * 0.02; // ~5 days self-funded sick buffer

    const items = [
      {
        label: 'Income Protection Insurance',
        value: insuranceCosts.incomeProtection,
        note: 'Covers ~75% of income if unable to work — tax deductible',
      },
      {
        label: 'Professional Indemnity Insurance',
        value: insuranceCosts.pi,
        note: 'Covers claims of negligence, errors, bad advice',
      },
      {
        label: 'Public Liability Insurance',
        value: insuranceCosts.pl,
        note: 'Covers third-party injury or property damage',
      },
      {
        label: 'Voluntary Super Contributions',
        value: selfSuper,
        note: `Concessional contributions — tax deductible up to $30K/yr cap`,
      },
      {
        label: 'Annual Leave Fund (Self-Funded)',
        value: leaveBuffer,
        note: `${weeksOff} weeks time off = $0 income — set aside 7.69% of revenue`,
      },
      {
        label: 'Sick Day Buffer',
        value: sickBuffer,
        note: 'Buffer for ~5 days of illness — no pay when you can\'t work',
      },
      {
        label: 'Equipment / Software Costs',
        value: selfEquip,
        note: 'Hardware, software subscriptions, tools — all tax deductible',
      },
    ];

    const totalSelfCosts = items.reduce((sum, i) => sum + i.value, 0);

    return { items, totalSelfCosts };
  }, [salary, industry, selfSuperContrib, selfEquipmentCost, weeksOff]);

  /* ================================================================
     CALCULATIONS — Rate Comparison
     ================================================================ */

  const rateComparison = useMemo(() => {
    // Employee effective hourly
    const employeeWorkingDays = WORKING_DAYS_PER_YEAR; // they get paid for all of them
    const employeeEffectiveHourly =
      employeeBenefits.totalPackage / (employeeWorkingDays * HOURS_PER_DAY);

    // Freelance calculations
    const weeksWorking = 52 - weeksOff - 2; // subtract leave + ~2 weeks sick/PH buffer
    const totalWorkingDays = weeksWorking * 5;
    const billableDays = Math.round(totalWorkingDays * (billablePercent / 100));
    const billableHours = billableDays * HOURS_PER_DAY;

    // Minimum freelance income needed = match total package + self-employment costs
    const minimumFreelanceIncome =
      employeeBenefits.totalPackage + selfEmploymentCosts.totalSelfCosts - salary * superRate; // Don't double-count super
    const minimumHourlyRate = minimumFreelanceIncome / billableHours;
    const minimumDailyRate = minimumHourlyRate * HOURS_PER_DAY;

    // Naive rate (what most freelancers mistakenly charge)
    const naiveHourly = salary / (WORKING_DAYS_PER_YEAR * HOURS_PER_DAY);
    const ratePremium = ((minimumHourlyRate - naiveHourly) / naiveHourly) * 100;

    // Gap
    const benefitsGap = employeeBenefits.totalPackage - salary;

    return {
      employeeEffectiveHourly,
      minimumFreelanceIncome,
      minimumHourlyRate,
      minimumDailyRate,
      naiveHourly,
      ratePremium,
      billableDays,
      billableHours,
      benefitsGap,
      totalWorkingDays,
    };
  }, [employeeBenefits, selfEmploymentCosts, salary, superRate, billablePercent, weeksOff]);

  /* ---- Navigation ---- */

  const goNext = useCallback(() => {
    setStep((s) => Math.min(s + 1, totalSteps));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [totalSteps]);

  const goBack = useCallback(() => {
    setStep((s) => Math.max(s - 1, 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  /* ---- Copy / Print ---- */

  const handleCopy = useCallback(() => {
    const lines = [
      'FREELANCE BENEFITS COST COMPARISON',
      '====================================',
      '',
      `Employee Salary: ${fmt(salary)}`,
      `Industry: ${industry}`,
      `State: ${AU_STATES.find((s) => s.value === auState)?.label}`,
      '',
      'EMPLOYEE BENEFITS (Hidden Value):',
      ...employeeBenefits.items.map(
        (i) => `  ${i.label}: ${fmt(i.value)} (${fmtPct(i.pct)})`
      ),
      '',
      `  Total Benefits: ${fmt(employeeBenefits.totalBenefits)} (${fmtPct(employeeBenefits.benefitsPercent)} of salary)`,
      `  Total Package: ${fmt(employeeBenefits.totalPackage)}`,
      '',
      'SELF-EMPLOYMENT COSTS:',
      ...selfEmploymentCosts.items.map((i) => `  ${i.label}: ${fmt(i.value)}`),
      `  Total: ${fmt(selfEmploymentCosts.totalSelfCosts)}`,
      '',
      'RATE COMPARISON:',
      `  Employee Effective Hourly: ${fmt(rateComparison.employeeEffectiveHourly)}/hr`,
      `  Minimum Freelance Hourly: ${fmt(rateComparison.minimumHourlyRate)}/hr`,
      `  Minimum Freelance Day Rate: ${fmt(rateComparison.minimumDailyRate)}/day`,
      `  Minimum Freelance Annual: ${fmt(rateComparison.minimumFreelanceIncome)}`,
      `  Billable Days/Year: ${rateComparison.billableDays}`,
      '',
      `You need to earn ${fmt(rateComparison.minimumFreelanceIncome)} as a freelancer`,
      `to match a ${fmt(salary)} employee salary.`,
      '',
      'Generated by InvoiceFlow — invoiceflow.au/tools/benefits-cost-calculator',
    ];
    navigator.clipboard.writeText(lines.join('\n'));
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  }, [salary, industry, auState, employeeBenefits, selfEmploymentCosts, rateComparison]);

  const handlePrint = useCallback(() => {
    window.print();
  }, []);

  /* ---- Select styling ---- */

  const selectStyle = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2394a3b8'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 12px center',
    backgroundSize: '16px',
  };

  /* ================================================================
     RENDER
     ================================================================ */

  return (
    <div className="space-y-6">
      {/* Progress Bar */}
      <div className="glass rounded-2xl p-4 sm:p-6">
        <div className="flex items-center justify-between mb-3">
          {[
            { num: 1, label: 'Your Details' },
            { num: 2, label: 'Benefits Analysis' },
            { num: 3, label: 'Self-Employment' },
            { num: 4, label: 'Results' },
          ].map((s) => (
            <button
              key={s.num}
              onClick={() => setStep(s.num)}
              className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                step >= s.num ? 'text-emerald-400' : 'text-slate-500'
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                  step > s.num
                    ? 'bg-emerald-500 text-white'
                    : step === s.num
                      ? 'bg-emerald-500/20 border-2 border-emerald-500 text-emerald-400'
                      : 'bg-white/5 border border-white/10 text-slate-500'
                }`}
              >
                {step > s.num ? (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                ) : (
                  s.num
                )}
              </div>
              <span className="hidden sm:inline">{s.label}</span>
            </button>
          ))}
        </div>
        {/* Progress track */}
        <div className="w-full bg-white/5 rounded-full h-1.5 mt-2">
          <div
            className="bg-gradient-to-r from-emerald-500 to-green-400 h-1.5 rounded-full transition-all duration-500"
            style={{ width: `${((step - 1) / (totalSteps - 1)) * 100}%` }}
          />
        </div>
      </div>

      {/* ================================================================
         STEP 1: Employment Details
         ================================================================ */}
      {step === 1 && (
        <div className="glass rounded-2xl p-6 space-y-6">
          <div>
            <h3 className="text-lg font-bold text-white heading-font mb-1">
              Employment Comparison
            </h3>
            <p className="text-sm text-slate-400">
              Enter the equivalent employee salary to compare against, or your current freelance
              income. We&apos;ll calculate what that salary is really worth.
            </p>
          </div>

          {/* Salary input */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Base Employee Salary (Annual)
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">
                $
              </span>
              <input
                type="number"
                value={salary}
                onChange={(e) => setSalary(Math.max(0, parseInt(e.target.value) || 0))}
                className="w-full pl-8 pr-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-emerald-500 focus:outline-none transition-colors text-lg font-medium tabular-nums"
                placeholder="100000"
              />
            </div>
            {/* Quick salary buttons */}
            <div className="flex flex-wrap gap-2 mt-3">
              {[60000, 80000, 100000, 120000, 150000, 200000].map((v) => (
                <button
                  key={v}
                  onClick={() => setSalary(v)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    salary === v
                      ? 'bg-emerald-500/20 border border-emerald-500/30 text-emerald-400'
                      : 'bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-white/20'
                  }`}
                >
                  {fmt(v)}
                </button>
              ))}
            </div>
          </div>

          {/* Industry */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Industry</label>
            <select
              value={industry}
              onChange={(e) => setIndustry(e.target.value as Industry)}
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-emerald-500 focus:outline-none transition-colors text-sm appearance-none cursor-pointer"
              style={selectStyle}
            >
              {INDUSTRIES.map((ind) => (
                <option key={ind} value={ind} className="bg-slate-800 text-white">
                  {ind}
                </option>
              ))}
            </select>
          </div>

          {/* State */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              State / Territory
            </label>
            <div className="grid grid-cols-4 gap-2">
              {AU_STATES.map((s) => (
                <button
                  key={s.value}
                  onClick={() => setAuState(s.value)}
                  className={`px-3 py-2.5 rounded-lg border text-sm font-medium transition-all ${
                    auState === s.value
                      ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                      : 'bg-white/5 border-white/10 text-slate-400 hover:border-white/20 hover:text-white'
                  }`}
                >
                  {s.value}
                </button>
              ))}
            </div>
          </div>

          {/* Leave loading toggle */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-4">
            <label className="flex items-center justify-between cursor-pointer">
              <div>
                <p className="text-sm font-medium text-white">Include Leave Loading (17.5%)</p>
                <p className="text-xs text-slate-500 mt-0.5">
                  Common under modern awards and many enterprise agreements
                </p>
              </div>
              <button
                onClick={() => setIncludeLeaveLoading(!includeLeaveLoading)}
                className={`relative w-12 h-7 rounded-full transition-colors ${
                  includeLeaveLoading ? 'bg-emerald-500' : 'bg-white/10'
                }`}
                role="switch"
                aria-checked={includeLeaveLoading}
              >
                <span
                  className={`absolute top-0.5 left-0.5 w-6 h-6 rounded-full bg-white shadow transition-transform ${
                    includeLeaveLoading ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
            </label>
          </div>

          {/* Quick preview */}
          <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-xl p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-slate-400">Estimated Total Package Value</p>
                <p className="text-2xl font-bold text-white mt-0.5">
                  {fmt(employeeBenefits.totalPackage)}
                </p>
              </div>
              <div className="text-right">
                <p className="text-xs text-slate-400">Benefits on Top</p>
                <p className="text-lg font-bold text-emerald-400">
                  +{fmtPct(employeeBenefits.benefitsPercent)}
                </p>
              </div>
            </div>
          </div>

          {/* Next button */}
          <button
            onClick={goNext}
            className="w-full py-3 rounded-lg bg-gradient-to-r from-emerald-500 to-green-500 text-white font-semibold hover:from-emerald-400 hover:to-green-400 transition-all"
          >
            Next: See Benefits Breakdown
          </button>
        </div>
      )}

      {/* ================================================================
         STEP 2: Benefits Analysis
         ================================================================ */}
      {step === 2 && (
        <div className="space-y-6">
          <div className="glass rounded-2xl p-6">
            <div className="mb-6">
              <h3 className="text-lg font-bold text-white heading-font mb-1">
                Employee Benefits Breakdown
              </h3>
              <p className="text-sm text-slate-400">
                Here&apos;s what an employer provides on top of a {fmt(salary)} base salary. These
                are benefits you lose — and must fund yourself — as a freelancer.
              </p>
            </div>

            {/* Benefits list */}
            <div className="space-y-3">
              {employeeBenefits.items.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 border border-white/10 rounded-xl p-4 hover:border-emerald-500/20 transition-all"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h4 className="text-white font-medium text-sm">{item.label}</h4>
                      <p className="text-xs text-slate-500 mt-0.5">{item.note}</p>
                    </div>
                    <div className="text-right shrink-0 ml-4">
                      <p className="text-white font-bold">{fmt(item.value)}</p>
                      <p className="text-xs text-emerald-400">{fmtPct(item.pct)}</p>
                    </div>
                  </div>
                  {/* Mini bar */}
                  <div className="w-full bg-white/5 rounded-full h-1.5">
                    <div
                      className="bg-gradient-to-r from-emerald-500 to-green-400 h-1.5 rounded-full transition-all duration-500"
                      style={{
                        width: `${Math.min((item.value / employeeBenefits.totalBenefits) * 100, 100)}%`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Total */}
            <div className="mt-6 bg-emerald-500/5 border border-emerald-500/20 rounded-xl p-5">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-xs text-slate-400">Base Salary</p>
                  <p className="text-lg font-bold text-white">{fmt(salary)}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-400">Total Benefits</p>
                  <p className="text-lg font-bold text-emerald-400">
                    +{fmt(employeeBenefits.totalBenefits)}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-slate-400">True Package</p>
                  <p className="text-lg font-bold text-white">
                    {fmt(employeeBenefits.totalPackage)}
                  </p>
                </div>
              </div>
              <div className="mt-3 text-center">
                <p className="text-sm text-slate-300">
                  An employee earning {fmt(salary)} actually receives{' '}
                  <strong className="text-white">
                    {fmt(employeeBenefits.totalPackage)}
                  </strong>{' '}
                  in total compensation — that&apos;s{' '}
                  <strong className="text-emerald-400">
                    {fmtPct(employeeBenefits.benefitsPercent)} more
                  </strong>{' '}
                  than the base salary.
                </p>
              </div>
            </div>

            {/* Optional overrides */}
            <div className="mt-6">
              <button
                onClick={() => {
                  const el = document.getElementById('overrides');
                  if (el) el.classList.toggle('hidden');
                }}
                className="text-sm text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-1"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
                Customise Values
              </button>
              <div id="overrides" className="hidden mt-4 space-y-4">
                <div className="grid sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs text-slate-400 mb-1">
                      Super Rate (%)
                    </label>
                    <input
                      type="number"
                      value={customSuper}
                      onChange={(e) => setCustomSuper(e.target.value)}
                      placeholder="11.5"
                      className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm focus:border-emerald-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-400 mb-1">
                      Equipment Budget ($)
                    </label>
                    <input
                      type="number"
                      value={customEquipment}
                      onChange={(e) => setCustomEquipment(e.target.value)}
                      placeholder={String(EQUIPMENT_BUDGET[industry])}
                      className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm focus:border-emerald-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-400 mb-1">
                      Training Budget ($)
                    </label>
                    <input
                      type="number"
                      value={customTraining}
                      onChange={(e) => setCustomTraining(e.target.value)}
                      placeholder={String(TRAINING_BUDGET[industry])}
                      className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm focus:border-emerald-500 focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Nav buttons */}
          <div className="flex gap-3">
            <button
              onClick={goBack}
              className="flex-1 py-3 rounded-lg bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all"
            >
              Back
            </button>
            <button
              onClick={goNext}
              className="flex-1 py-3 rounded-lg bg-gradient-to-r from-emerald-500 to-green-500 text-white font-semibold hover:from-emerald-400 hover:to-green-400 transition-all"
            >
              Next: Self-Employment Costs
            </button>
          </div>
        </div>
      )}

      {/* ================================================================
         STEP 3: Self-Employment Costs
         ================================================================ */}
      {step === 3 && (
        <div className="space-y-6">
          <div className="glass rounded-2xl p-6">
            <div className="mb-6">
              <h3 className="text-lg font-bold text-white heading-font mb-1">
                Self-Employment Costs
              </h3>
              <p className="text-sm text-slate-400">
                As a freelancer, you need to fund these yourself. We&apos;ve pre-filled industry
                averages — adjust to match your actual costs.
              </p>
            </div>

            {/* Self-employment cost items */}
            <div className="space-y-3">
              {selfEmploymentCosts.items.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 border border-white/10 rounded-xl p-4"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="text-white font-medium text-sm">{item.label}</h4>
                      <p className="text-xs text-slate-500 mt-0.5">{item.note}</p>
                    </div>
                    <p className="text-white font-bold shrink-0 ml-4">{fmt(item.value)}<span className="text-xs text-slate-500 font-normal">/yr</span></p>
                  </div>
                </div>
              ))}
            </div>

            {/* Total self-employment costs */}
            <div className="mt-4 bg-amber-500/5 border border-amber-500/20 rounded-xl p-4">
              <div className="flex items-center justify-between">
                <p className="text-sm text-slate-300 font-medium">Total Self-Employment Costs</p>
                <p className="text-xl font-bold text-amber-400">
                  {fmt(selfEmploymentCosts.totalSelfCosts)}
                  <span className="text-xs text-slate-500 font-normal">/yr</span>
                </p>
              </div>
            </div>

            {/* Adjustable inputs */}
            <div className="mt-6 space-y-4">
              <h4 className="text-sm font-medium text-slate-300">Customise Your Numbers</h4>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-slate-400 mb-1">
                    Voluntary Super Contribution ($)
                  </label>
                  <input
                    type="number"
                    value={selfSuperContrib}
                    onChange={(e) => setSelfSuperContrib(e.target.value)}
                    placeholder={fmt(salary * SG_RATE).replace('$', '')}
                    className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm focus:border-emerald-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-1">
                    Equipment/Software Cost ($)
                  </label>
                  <input
                    type="number"
                    value={selfEquipmentCost}
                    onChange={(e) => setSelfEquipmentCost(e.target.value)}
                    placeholder={String(EQUIPMENT_BUDGET[industry])}
                    className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm focus:border-emerald-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Billable utilisation slider */}
              <div>
                <label className="block text-xs text-slate-400 mb-1">
                  Billable Utilisation Rate
                </label>
                <div className="flex items-center gap-4">
                  <input
                    type="range"
                    min={50}
                    max={95}
                    value={billablePercent}
                    onChange={(e) => setBillablePercent(parseInt(e.target.value))}
                    className="flex-1 h-2 rounded-full appearance-none cursor-pointer accent-emerald-500"
                    style={{
                      background: `linear-gradient(to right, rgb(16 185 129) 0%, rgb(16 185 129) ${
                        ((billablePercent - 50) / 45) * 100
                      }%, rgba(255,255,255,0.1) ${
                        ((billablePercent - 50) / 45) * 100
                      }%, rgba(255,255,255,0.1) 100%)`,
                    }}
                  />
                  <span className="text-lg font-bold text-white w-16 text-right tabular-nums">
                    {billablePercent}%
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  % of working time that&apos;s actually billable (rest is admin, marketing, etc.)
                </p>
              </div>

              {/* Weeks off */}
              <div>
                <label className="block text-xs text-slate-400 mb-1">Weeks Off Per Year</label>
                <div className="flex items-center gap-3">
                  {[2, 3, 4, 5, 6].map((w) => (
                    <button
                      key={w}
                      onClick={() => setWeeksOff(w)}
                      className={`px-4 py-2 rounded-lg border text-sm font-medium transition-all ${
                        weeksOff === w
                          ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                          : 'bg-white/5 border-white/10 text-slate-400 hover:border-white/20 hover:text-white'
                      }`}
                    >
                      {w}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Nav buttons */}
          <div className="flex gap-3">
            <button
              onClick={goBack}
              className="flex-1 py-3 rounded-lg bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all"
            >
              Back
            </button>
            <button
              onClick={goNext}
              className="flex-1 py-3 rounded-lg bg-gradient-to-r from-emerald-500 to-green-500 text-white font-semibold hover:from-emerald-400 hover:to-green-400 transition-all"
            >
              See Results
            </button>
          </div>
        </div>
      )}

      {/* ================================================================
         STEP 4: Results
         ================================================================ */}
      {step === 4 && (
        <div className="space-y-6" ref={resultsRef}>
          {/* Hero result */}
          <div className="glass rounded-2xl p-6 sm:p-8 border border-emerald-500/20 bg-emerald-500/5">
            <div className="text-center mb-6">
              <p className="text-sm text-slate-400 mb-2">To match a {fmt(salary)} employee salary</p>
              <h3 className="text-3xl sm:text-4xl font-bold text-white heading-font">
                You need to earn{' '}
                <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
                  {fmt(rateComparison.minimumFreelanceIncome)}
                </span>
              </h3>
              <p className="text-slate-400 mt-2">
                as a freelancer — that&apos;s{' '}
                <strong className="text-white">
                  {fmt(rateComparison.minimumFreelanceIncome - salary)} more
                </strong>{' '}
                than the base salary
              </p>
            </div>

            {/* Key metrics grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-white/5 rounded-xl p-4 text-center">
                <p className="text-xs text-slate-400 mb-1">Min. Hourly Rate</p>
                <p className="text-xl font-bold text-white">{fmt(rateComparison.minimumHourlyRate)}</p>
                <p className="text-xs text-slate-500">/hour</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 text-center">
                <p className="text-xs text-slate-400 mb-1">Min. Day Rate</p>
                <p className="text-xl font-bold text-white">{fmt(rateComparison.minimumDailyRate)}</p>
                <p className="text-xs text-slate-500">/day</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 text-center">
                <p className="text-xs text-slate-400 mb-1">Billable Days</p>
                <p className="text-xl font-bold text-white">{rateComparison.billableDays}</p>
                <p className="text-xs text-slate-500">/year</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 text-center">
                <p className="text-xs text-slate-400 mb-1">Rate Premium</p>
                <p className="text-xl font-bold text-emerald-400">
                  +{rateComparison.ratePremium.toFixed(0)}%
                </p>
                <p className="text-xs text-slate-500">vs naive rate</p>
              </div>
            </div>
          </div>

          {/* Side-by-side comparison */}
          <div className="grid sm:grid-cols-2 gap-4">
            {/* Employee side */}
            <div className="glass rounded-2xl p-6 border border-blue-500/20">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                  <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="text-white font-bold heading-font">Employee</h4>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Base Salary</span>
                  <span className="text-white font-medium">{fmt(salary)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Benefits Value</span>
                  <span className="text-blue-400 font-medium">
                    +{fmt(employeeBenefits.totalBenefits)}
                  </span>
                </div>
                <div className="border-t border-white/10 pt-2 flex justify-between text-sm">
                  <span className="text-white font-medium">Total Package</span>
                  <span className="text-white font-bold">{fmt(employeeBenefits.totalPackage)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Effective Hourly</span>
                  <span className="text-white font-medium">
                    {fmt(rateComparison.employeeEffectiveHourly)}/hr
                  </span>
                </div>
              </div>
            </div>

            {/* Freelancer side */}
            <div className="glass rounded-2xl p-6 border border-emerald-500/20">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                  <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-white font-bold heading-font">Freelancer</h4>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Must Earn (Gross)</span>
                  <span className="text-white font-medium">
                    {fmt(rateComparison.minimumFreelanceIncome)}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Self-Employment Costs</span>
                  <span className="text-amber-400 font-medium">
                    -{fmt(selfEmploymentCosts.totalSelfCosts)}
                  </span>
                </div>
                <div className="border-t border-white/10 pt-2 flex justify-between text-sm">
                  <span className="text-white font-medium">Min. Hourly Rate</span>
                  <span className="text-white font-bold">
                    {fmt(rateComparison.minimumHourlyRate)}/hr
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Min. Day Rate</span>
                  <span className="text-white font-medium">
                    {fmt(rateComparison.minimumDailyRate)}/day
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Gap analysis bar chart */}
          <div className="glass rounded-2xl p-6">
            <h4 className="text-lg font-bold text-white heading-font mb-4">
              Compensation Gap Analysis
            </h4>
            <div className="space-y-4">
              {/* Employee total bar */}
              <div>
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="text-slate-300">Employee Total Package</span>
                  <span className="text-white font-bold">{fmt(employeeBenefits.totalPackage)}</span>
                </div>
                <div className="w-full bg-white/5 rounded-full h-8 overflow-hidden relative">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-blue-500 to-blue-400 flex items-center justify-end pr-3 transition-all duration-700"
                    style={{ width: '100%' }}
                  >
                    <span className="text-xs font-medium text-white">100%</span>
                  </div>
                </div>
              </div>

              {/* Base salary bar */}
              <div>
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="text-slate-300">Base Salary Only</span>
                  <span className="text-white font-bold">{fmt(salary)}</span>
                </div>
                <div className="w-full bg-white/5 rounded-full h-8 overflow-hidden relative">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-slate-500 to-slate-400 flex items-center justify-end pr-3 transition-all duration-700"
                    style={{
                      width: `${(salary / employeeBenefits.totalPackage) * 100}%`,
                    }}
                  >
                    <span className="text-xs font-medium text-white">
                      {((salary / employeeBenefits.totalPackage) * 100).toFixed(0)}%
                    </span>
                  </div>
                </div>
              </div>

              {/* Minimum freelance bar */}
              <div>
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="text-slate-300">Minimum Freelance Income</span>
                  <span className="text-white font-bold">
                    {fmt(rateComparison.minimumFreelanceIncome)}
                  </span>
                </div>
                <div className="w-full bg-white/5 rounded-full h-8 overflow-hidden relative">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-green-400 flex items-center justify-end pr-3 transition-all duration-700"
                    style={{
                      width: `${Math.min(
                        (rateComparison.minimumFreelanceIncome / employeeBenefits.totalPackage) *
                          100,
                        100
                      )}%`,
                    }}
                  >
                    <span className="text-xs font-medium text-white">
                      {(
                        (rateComparison.minimumFreelanceIncome / employeeBenefits.totalPackage) *
                        100
                      ).toFixed(0)}
                      %
                    </span>
                  </div>
                </div>
              </div>

              {/* Naive rate bar */}
              <div>
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="text-slate-300">
                    Naive Freelance Rate{' '}
                    <span className="text-xs text-slate-500">(salary / 2080 hrs)</span>
                  </span>
                  <span className="text-rose-400 font-bold">{fmt(rateComparison.naiveHourly)}/hr</span>
                </div>
                <div className="w-full bg-white/5 rounded-full h-8 overflow-hidden relative">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-rose-500 to-red-400 flex items-center justify-end pr-3 transition-all duration-700"
                    style={{
                      width: `${(rateComparison.naiveHourly / rateComparison.minimumHourlyRate) * 100}%`,
                    }}
                  >
                    <span className="text-xs font-medium text-white">Underpriced</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Gap callout */}
            <div className="mt-6 bg-rose-500/5 border border-rose-500/20 rounded-xl p-4">
              <p className="text-sm text-slate-300">
                <strong className="text-rose-400">The Gap:</strong> If you charge the naive rate of{' '}
                {fmt(rateComparison.naiveHourly)}/hr, you&apos;re effectively{' '}
                <strong className="text-white">
                  underpaying yourself by {fmt(rateComparison.minimumHourlyRate - rateComparison.naiveHourly)}/hr
                </strong>
                {' '}({fmt(rateComparison.minimumFreelanceIncome - salary)} per year). That&apos;s the
                cost of lost benefits, self-employment overheads, and reduced billable time.
              </p>
            </div>
          </div>

          {/* Recommendations */}
          <div className="glass rounded-2xl p-6">
            <h4 className="text-lg font-bold text-white heading-font mb-4">
              Recommendations for Freelancers
            </h4>
            <div className="space-y-3">
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h5 className="text-white font-medium text-sm">Set Your Rate at {fmt(rateComparison.minimumHourlyRate)}/hr Minimum</h5>
                  <p className="text-xs text-slate-400 mt-1">
                    This is the FLOOR — not your target rate. Factor in profit margin, demand premium,
                    and specialisation uplift on top of this. Most successful freelancers charge
                    30-50% above the minimum to build wealth, not just survive.
                  </p>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h5 className="text-white font-medium text-sm">Get Income Protection Insurance</h5>
                  <p className="text-xs text-slate-400 mt-1">
                    This replaces both sick leave and workers comp. At ~{fmt(SELF_INSURANCE_COSTS[industry].incomeProtection)}/yr for your industry,
                    it&apos;s 100% tax deductible and covers up to 75% of your income. Without it, one injury
                    or illness could drain your savings.
                  </p>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h5 className="text-white font-medium text-sm">Max Out Concessional Super ($30K Cap)</h5>
                  <p className="text-xs text-slate-400 mt-1">
                    Without employer SG, your retirement savings will fall behind. Contribute at least
                    {fmt(salary * SG_RATE)}/yr to match what an employer would provide. Concessional
                    contributions are taxed at just 15% inside super vs your marginal rate outside.
                  </p>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <div>
                  <h5 className="text-white font-medium text-sm">Create a Leave Fund</h5>
                  <p className="text-xs text-slate-400 mt-1">
                    Open a separate savings account and transfer 7.69% of every invoice payment into it.
                    At {fmt(salary)}/yr equivalent, that&apos;s {fmt(salary * ANNUAL_LEAVE_RATE)}/yr — giving you 4 weeks
                    off without financial stress. Treat it like tax: non-negotiable.
                  </p>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h5 className="text-white font-medium text-sm">Track Every Expense for Tax Deductions</h5>
                  <p className="text-xs text-slate-400 mt-1">
                    Insurance, super contributions, equipment, home office, vehicle, phone, internet —
                    all tax deductible. Proper expense tracking can save $5,000-$15,000+ in tax annually.
                    Use InvoiceFlow to track expenses alongside your invoicing.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="bg-amber-500/5 border border-amber-500/20 rounded-xl p-4">
            <p className="text-xs text-amber-300/80">
              <strong className="text-amber-300">Disclaimer:</strong> These calculations are
              estimates based on standard Australian employment conditions, ATO rates (2024-25 FY),
              and typical industry costs. Actual values vary based on awards, enterprise agreements,
              employer policies, and individual circumstances. This tool does not constitute
              financial, tax, or employment advice. Consult a registered tax agent or financial
              adviser for personalised guidance.
            </p>
          </div>

          {/* Related tools */}
          <div className="glass rounded-2xl p-6">
            <h4 className="text-lg font-bold text-white heading-font mb-4">Related Tools</h4>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <a
                href="/tools/rate-calculator"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-emerald-500/30 rounded-xl p-4 transition-all group"
              >
                <p className="text-white font-medium text-sm group-hover:text-emerald-400 transition-colors">
                  Rate Calculator
                </p>
                <p className="text-xs text-slate-500 mt-1">Calculate your ideal freelance rate</p>
              </a>
              <a
                href="/tools/salary-to-hourly"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-emerald-500/30 rounded-xl p-4 transition-all group"
              >
                <p className="text-white font-medium text-sm group-hover:text-emerald-400 transition-colors">
                  Salary to Hourly
                </p>
                <p className="text-xs text-slate-500 mt-1">Convert salary to hourly rate</p>
              </a>
              <a
                href="/tools/insurance-cost-estimator"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-emerald-500/30 rounded-xl p-4 transition-all group"
              >
                <p className="text-white font-medium text-sm group-hover:text-emerald-400 transition-colors">
                  Insurance Estimator
                </p>
                <p className="text-xs text-slate-500 mt-1">Detailed insurance cost breakdown</p>
              </a>
              <a
                href="/tools/super-calculator"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-emerald-500/30 rounded-xl p-4 transition-all group"
              >
                <p className="text-white font-medium text-sm group-hover:text-emerald-400 transition-colors">
                  Super Calculator
                </p>
                <p className="text-xs text-slate-500 mt-1">Calculate super contributions</p>
              </a>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={goBack}
              className="flex-1 py-3 rounded-lg bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all"
            >
              Back
            </button>
            <button
              onClick={handleCopy}
              className="flex-1 py-3 rounded-lg bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 hover:border-emerald-500/30 transition-all"
            >
              {copied ? 'Copied to Clipboard!' : 'Copy Results'}
            </button>
            <button
              onClick={handlePrint}
              className="flex-1 py-3 rounded-lg bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 hover:border-emerald-500/30 transition-all"
            >
              Print Results
            </button>
            <button
              onClick={() => setStep(1)}
              className="flex-1 py-3 rounded-lg bg-gradient-to-r from-emerald-500 to-green-500 text-white font-semibold hover:from-emerald-400 hover:to-green-400 transition-all"
            >
              Start Over
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
