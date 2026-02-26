'use client';

import { useState } from 'react';

/* ---- Types ---- */

type Step = 1 | 2 | 3;

type WorkspaceType = 'home' | 'coworking' | 'private';

type CoworkingTier = 'hot_desk' | 'dedicated_desk' | 'coworking_private';

interface SetupInputs {
  currentWorkspace: WorkspaceType | '';
  city: string;
  hoursPerWeek: string;
  daysPerWeek: string;
  registeredForGST: boolean;
  annualIncome: string;
}

interface HomeOfficeInputs {
  workUsePercent: string;
  annualRent: string;
  annualUtilities: string;
  annualInternet: string;
  furnitureEquipment: string;
  homeInsurance: string;
  useFixedRate: boolean;
}

interface CoworkingInputs {
  tier: CoworkingTier;
  monthlyMembership: string;
  monthlyCommute: string;
  monthlyCoffeeFood: string;
}

interface PrivateOfficeInputs {
  monthlyRent: string;
  monthlyUtilities: string;
  monthlyInternet: string;
  monthlyCleaning: string;
  monthlyCommute: string;
}

interface WorkspaceResult {
  monthlyTotal: number;
  annualTotal: number;
  costPerWorkingDay: number;
  annualDeduction: number;
  taxSaving: number;
  netAnnualCost: number;
  netMonthlyCost: number;
}

/* ---- ATO Tax Rates 2025-26 ---- */

function getMarginalRate(annualIncome: number): number {
  if (annualIncome <= 18200) return 0;
  if (annualIncome <= 45000) return 0.16;
  if (annualIncome <= 135000) return 0.30;
  if (annualIncome <= 190000) return 0.37;
  return 0.45;
}

function getEffectiveTaxRate(annualIncome: number): number {
  if (annualIncome <= 18200) return 0;
  let tax = 0;
  if (annualIncome > 18200) tax += Math.min(annualIncome - 18200, 45000 - 18200) * 0.16;
  if (annualIncome > 45000) tax += Math.min(annualIncome - 45000, 135000 - 45000) * 0.30;
  if (annualIncome > 135000) tax += Math.min(annualIncome - 135000, 190000 - 135000) * 0.37;
  if (annualIncome > 190000) tax += (annualIncome - 190000) * 0.45;
  tax += annualIncome * 0.02; // Medicare levy
  return annualIncome > 0 ? tax / annualIncome : 0;
}

/* ---- Coworking Tier Presets ---- */

const COWORKING_PRESETS: Record<CoworkingTier, { label: string; defaultPrice: number; description: string }> = {
  hot_desk: { label: 'Hot Desk', defaultPrice: 320, description: 'Any available desk, shared amenities' },
  dedicated_desk: { label: 'Dedicated Desk', defaultPrice: 520, description: 'Your own reserved desk, lockable storage' },
  coworking_private: { label: 'Coworking Private Office', defaultPrice: 850, description: 'Enclosed private room within coworking space' },
};

/* ---- Calculation Logic ---- */

function calculateHomeOffice(
  inputs: HomeOfficeInputs,
  hoursPerWeek: number,
  annualIncome: number
): WorkspaceResult {
  const workWeeks = 48;
  const annualHours = hoursPerWeek * workWeeks;
  const daysPerWeek = hoursPerWeek / 8;
  const workingDaysPerYear = daysPerWeek * workWeeks;

  let annualDeduction = 0;
  let annualCost = 0;

  if (inputs.useFixedRate) {
    // 67c/hr method — covers running costs (electricity, internet, phone, stationery)
    annualDeduction = annualHours * 0.67;
    // Also claim furniture/equipment separately
    const furnitureDeduction = parseFloat(inputs.furnitureEquipment) || 0;
    annualDeduction += furnitureDeduction;

    // Actual costs paid
    const rent = parseFloat(inputs.annualRent) || 0;
    const workPercent = (parseFloat(inputs.workUsePercent) || 10) / 100;
    annualCost =
      rent * workPercent +
      (parseFloat(inputs.annualUtilities) || 0) +
      (parseFloat(inputs.annualInternet) || 0) +
      (parseFloat(inputs.furnitureEquipment) || 0) +
      (parseFloat(inputs.homeInsurance) || 0) * workPercent;
  } else {
    // Actual cost method
    const workPercent = (parseFloat(inputs.workUsePercent) || 10) / 100;
    const rent = parseFloat(inputs.annualRent) || 0;
    const utilities = parseFloat(inputs.annualUtilities) || 0;
    const internet = parseFloat(inputs.annualInternet) || 0;
    const furniture = parseFloat(inputs.furnitureEquipment) || 0;
    const insurance = parseFloat(inputs.homeInsurance) || 0;

    annualCost = rent * workPercent + utilities * workPercent + internet + furniture + insurance * workPercent;
    annualDeduction = rent * workPercent + utilities * workPercent + internet + furniture + insurance * workPercent;
  }

  const marginalRate = getMarginalRate(annualIncome);
  const taxSaving = annualDeduction * marginalRate;
  const netAnnualCost = annualCost - taxSaving;

  return {
    monthlyTotal: annualCost / 12,
    annualTotal: annualCost,
    costPerWorkingDay: workingDaysPerYear > 0 ? annualCost / workingDaysPerYear : 0,
    annualDeduction,
    taxSaving,
    netAnnualCost,
    netMonthlyCost: netAnnualCost / 12,
  };
}

function calculateCoworking(
  inputs: CoworkingInputs,
  hoursPerWeek: number,
  annualIncome: number
): WorkspaceResult {
  const workWeeks = 48;
  const daysPerWeek = hoursPerWeek / 8;
  const workingDaysPerYear = daysPerWeek * workWeeks;

  const monthlyMembership = parseFloat(inputs.monthlyMembership) || 0;
  const monthlyCommute = parseFloat(inputs.monthlyCommute) || 0;
  const monthlyCoffeeFood = parseFloat(inputs.monthlyCoffeeFood) || 0;

  const monthlyTotal = monthlyMembership + monthlyCommute + monthlyCoffeeFood;
  const annualTotal = monthlyTotal * 12;

  // Coworking membership and internet are fully deductible; commute is NOT; coffee is partially
  const annualDeduction = (monthlyMembership * 12) + (monthlyCoffeeFood * 12 * 0.5); // 50% of food as reasonable estimate

  const marginalRate = getMarginalRate(annualIncome);
  const taxSaving = annualDeduction * marginalRate;
  const netAnnualCost = annualTotal - taxSaving;

  return {
    monthlyTotal,
    annualTotal,
    costPerWorkingDay: workingDaysPerYear > 0 ? annualTotal / workingDaysPerYear : 0,
    annualDeduction,
    taxSaving,
    netAnnualCost,
    netMonthlyCost: netAnnualCost / 12,
  };
}

function calculatePrivateOffice(
  inputs: PrivateOfficeInputs,
  hoursPerWeek: number,
  annualIncome: number
): WorkspaceResult {
  const workWeeks = 48;
  const daysPerWeek = hoursPerWeek / 8;
  const workingDaysPerYear = daysPerWeek * workWeeks;

  const monthlyRent = parseFloat(inputs.monthlyRent) || 0;
  const monthlyUtilities = parseFloat(inputs.monthlyUtilities) || 0;
  const monthlyInternet = parseFloat(inputs.monthlyInternet) || 0;
  const monthlyCleaning = parseFloat(inputs.monthlyCleaning) || 0;
  const monthlyCommute = parseFloat(inputs.monthlyCommute) || 0;

  const monthlyTotal = monthlyRent + monthlyUtilities + monthlyInternet + monthlyCleaning + monthlyCommute;
  const annualTotal = monthlyTotal * 12;

  // Rent, utilities, internet, cleaning fully deductible. Commute is NOT deductible.
  const annualDeduction = (monthlyRent + monthlyUtilities + monthlyInternet + monthlyCleaning) * 12;

  const marginalRate = getMarginalRate(annualIncome);
  const taxSaving = annualDeduction * marginalRate;
  const netAnnualCost = annualTotal - taxSaving;

  return {
    monthlyTotal,
    annualTotal,
    costPerWorkingDay: workingDaysPerYear > 0 ? annualTotal / workingDaysPerYear : 0,
    annualDeduction,
    taxSaving,
    netAnnualCost,
    netMonthlyCost: netAnnualCost / 12,
  };
}

function getBreakEvenIncome(monthlyWorkspaceCost: number): number {
  // At what gross income does the net cost after tax reach "comfortable" (<10% of income)
  return monthlyWorkspaceCost * 12 * 10;
}

function getRecommendation(
  setup: SetupInputs,
  homeResult: WorkspaceResult,
  coworkResult: WorkspaceResult,
  privateResult: WorkspaceResult
): { recommendation: WorkspaceType; reason: string } {
  const income = parseFloat(setup.annualIncome) || 0;

  if (income < 60000) {
    return {
      recommendation: 'home',
      reason: `At your income level (~$${income.toLocaleString()}/year), the home office minimises fixed costs and preserves cash flow. The ATO 67c/hr deduction still provides meaningful tax savings. Focus on building revenue before committing to external workspace costs.`,
    };
  }

  if (income < 120000) {
    return {
      recommendation: 'coworking',
      reason: `At $${income.toLocaleString()}/year, a coworking membership typically pays for itself through improved productivity, networking, and professional environment. The net monthly cost of ~$${Math.round(coworkResult.netMonthlyCost).toLocaleString()} after tax savings represents reasonable overhead at your income level.`,
    };
  }

  if (privateResult.netMonthlyCost / (income / 12) < 0.15) {
    return {
      recommendation: 'private',
      reason: `With annual income of $${income.toLocaleString()}, a private office represents less than 15% of your monthly revenue after tax savings (~$${Math.round(privateResult.netMonthlyCost).toLocaleString()}/month net). At this stage, the professional environment, confidential client meetings, and ability to have subcontractors typically justify the cost.`,
    };
  }

  return {
    recommendation: 'coworking',
    reason: `A dedicated coworking desk offers the best balance of cost, flexibility, and professional environment at your current stage. The net monthly cost of ~$${Math.round(coworkResult.netMonthlyCost).toLocaleString()} after tax savings is manageable and avoids the long-term commitment of a private lease.`,
  };
}

/* ---- Currency Formatter ---- */
const fmt = (n: number) =>
  new Intl.NumberFormat('en-AU', { style: 'currency', currency: 'AUD', maximumFractionDigits: 0 }).format(n);

/* ---- Step Indicator Component ---- */
function StepIndicator({ step }: { step: Step }) {
  const steps = [
    { num: 1, label: 'Current Setup' },
    { num: 2, label: 'Cost Inputs' },
    { num: 3, label: 'Comparison' },
  ];

  return (
    <div className="flex items-center justify-center gap-0 mb-10">
      {steps.map((s, i) => (
        <div key={s.num} className="flex items-center">
          <div className="flex flex-col items-center">
            <div
              className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                step > s.num
                  ? 'bg-sky-500 text-white'
                  : step === s.num
                  ? 'bg-gradient-to-br from-sky-400 to-blue-500 text-white ring-4 ring-sky-400/20'
                  : 'bg-white/10 text-slate-500'
              }`}
            >
              {step > s.num ? (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                s.num
              )}
            </div>
            <span
              className={`text-xs mt-1.5 font-medium whitespace-nowrap ${
                step === s.num ? 'text-sky-400' : step > s.num ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              {s.label}
            </span>
          </div>
          {i < steps.length - 1 && (
            <div
              className={`w-16 sm:w-24 h-0.5 mb-5 mx-2 transition-all ${
                step > s.num ? 'bg-sky-500' : 'bg-white/10'
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
}

/* ---- Field Components ---- */
function Label({ children }: { children: React.ReactNode }) {
  return <label className="block text-sm text-slate-300 font-medium mb-1.5">{children}</label>;
}

function InputField({
  label,
  value,
  onChange,
  placeholder,
  prefix,
  type = 'text',
  hint,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  prefix?: string;
  type?: string;
  hint?: string;
}) {
  return (
    <div>
      <Label>{label}</Label>
      <div className="relative">
        {prefix && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">{prefix}</span>
        )}
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`w-full bg-white/5 border border-white/10 rounded-lg py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/20 transition-all ${prefix ? 'pl-7 pr-4' : 'px-4'}`}
        />
      </div>
      {hint && <p className="text-xs text-slate-500 mt-1">{hint}</p>}
    </div>
  );
}

function SelectField<T extends string>({
  label,
  value,
  onChange,
  options,
  hint,
}: {
  label: string;
  value: T | '';
  onChange: (v: T) => void;
  options: { value: T; label: string }[];
  hint?: string;
}) {
  return (
    <div>
      <Label>{label}</Label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as T)}
        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/20 transition-all appearance-none"
      >
        <option value="" className="bg-slate-900">Select...</option>
        {options.map((o) => (
          <option key={o.value} value={o.value} className="bg-slate-900">
            {o.label}
          </option>
        ))}
      </select>
      {hint && <p className="text-xs text-slate-500 mt-1">{hint}</p>}
    </div>
  );
}

/* ---- Main Component ---- */
export default function WorkspaceCostCalculator() {
  const [step, setStep] = useState<Step>(1);

  /* Step 1 */
  const [setup, setSetup] = useState<SetupInputs>({
    currentWorkspace: '',
    city: 'Melbourne',
    hoursPerWeek: '40',
    daysPerWeek: '5',
    registeredForGST: false,
    annualIncome: '80000',
  });

  /* Step 2 */
  const [homeInputs, setHomeInputs] = useState<HomeOfficeInputs>({
    workUsePercent: '10',
    annualRent: '24000',
    annualUtilities: '2400',
    annualInternet: '1200',
    furnitureEquipment: '600',
    homeInsurance: '1800',
    useFixedRate: true,
  });

  const [coworkInputs, setCoworkInputs] = useState<CoworkingInputs>({
    tier: 'dedicated_desk',
    monthlyMembership: '520',
    monthlyCommute: '80',
    monthlyCoffeeFood: '60',
  });

  const [privateInputs, setPrivateInputs] = useState<PrivateOfficeInputs>({
    monthlyRent: '1400',
    monthlyUtilities: '180',
    monthlyInternet: '110',
    monthlyCleaning: '100',
    monthlyCommute: '80',
  });

  /* Step 1 validation */
  const step1Valid =
    setup.currentWorkspace !== '' &&
    setup.hoursPerWeek !== '' &&
    parseFloat(setup.hoursPerWeek) > 0 &&
    setup.annualIncome !== '' &&
    parseFloat(setup.annualIncome) > 0;

  /* Derived calculations */
  const income = parseFloat(setup.annualIncome) || 0;
  const hoursPerWeek = parseFloat(setup.hoursPerWeek) || 40;
  const homeResult = calculateHomeOffice(homeInputs, hoursPerWeek, income);
  const coworkResult = calculateCoworking(coworkInputs, hoursPerWeek, income);
  const privateResult = calculatePrivateOffice(privateInputs, hoursPerWeek, income);

  const marginalRate = getMarginalRate(income);
  const marginalRateLabel = `${(marginalRate * 100).toFixed(0)}%`;

  const recommendation = step === 3 ? getRecommendation(setup, homeResult, coworkResult, privateResult) : null;

  /* Bar chart max */
  const maxMonthly = Math.max(homeResult.monthlyTotal, coworkResult.monthlyTotal, privateResult.monthlyTotal, 1);

  /* Tier change handler */
  const handleTierChange = (tier: CoworkingTier) => {
    setCoworkInputs((prev) => ({
      ...prev,
      tier,
      monthlyMembership: COWORKING_PRESETS[tier].defaultPrice.toString(),
    }));
  };

  return (
    <div className="glass rounded-2xl p-6 sm:p-8">
      <StepIndicator step={step} />

      {/* ---- STEP 1 ---- */}
      {step === 1 && (
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-bold text-white heading-font mb-1">Your Current Setup</h2>
            <p className="text-sm text-slate-400">Tell us about how you currently work so we can personalise the comparison.</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <SelectField
              label="Current workspace type"
              value={setup.currentWorkspace}
              onChange={(v) => setSetup((p) => ({ ...p, currentWorkspace: v }))}
              options={[
                { value: 'home', label: 'Home office' },
                { value: 'coworking', label: 'Coworking space' },
                { value: 'private', label: 'Private office' },
              ]}
            />
            <InputField
              label="City / suburb"
              value={setup.city}
              onChange={(v) => setSetup((p) => ({ ...p, city: v }))}
              placeholder="e.g. Melbourne CBD"
              hint="For context — used in your recommendation"
            />
            <InputField
              label="Hours worked per week"
              value={setup.hoursPerWeek}
              onChange={(v) => setSetup((p) => ({ ...p, hoursPerWeek: v }))}
              placeholder="40"
              type="number"
              hint="Typical billable + admin hours"
            />
            <InputField
              label="Days worked per week"
              value={setup.daysPerWeek}
              onChange={(v) => setSetup((p) => ({ ...p, daysPerWeek: v }))}
              placeholder="5"
              type="number"
              hint="Used to calculate cost per working day"
            />
            <InputField
              label="Annual freelance income (gross)"
              value={setup.annualIncome}
              onChange={(v) => setSetup((p) => ({ ...p, annualIncome: v }))}
              placeholder="80000"
              prefix="$"
              type="number"
              hint="Used to calculate your marginal tax rate for deduction estimates"
            />
            <div>
              <Label>Registered for GST?</Label>
              <div className="flex gap-3 mt-1">
                {[true, false].map((val) => (
                  <button
                    key={String(val)}
                    type="button"
                    onClick={() => setSetup((p) => ({ ...p, registeredForGST: val }))}
                    className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-all border ${
                      setup.registeredForGST === val
                        ? 'bg-sky-500/20 border-sky-500/50 text-sky-400'
                        : 'bg-white/5 border-white/10 text-slate-400 hover:bg-white/10'
                    }`}
                  >
                    {val ? 'Yes' : 'No'}
                  </button>
                ))}
              </div>
              <p className="text-xs text-slate-500 mt-1">GST-registered freelancers can also claim GST credits on workspace expenses</p>
            </div>
          </div>

          {income > 0 && (
            <div className="bg-sky-400/5 border border-sky-400/20 rounded-xl p-4">
              <p className="text-sm text-sky-400 font-medium mb-1">Your estimated marginal tax rate: {marginalRateLabel}</p>
              <p className="text-xs text-slate-400">
                Based on ATO 2025-26 rates (incl. 2% Medicare). Tax deductions save you {marginalRateLabel} for every dollar deducted.
                {setup.registeredForGST && ' GST registration adds a further ~9.1% saving on deductible workspace costs.'}
              </p>
            </div>
          )}

          <div className="flex justify-end pt-2">
            <button
              onClick={() => setStep(2)}
              disabled={!step1Valid}
              className="px-6 py-2.5 bg-gradient-to-r from-sky-500 to-blue-500 text-white text-sm font-semibold rounded-lg hover:from-sky-400 hover:to-blue-400 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Next: Cost Inputs
            </button>
          </div>
        </div>
      )}

      {/* ---- STEP 2 ---- */}
      {step === 2 && (
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-bold text-white heading-font mb-1">Workspace Cost Inputs</h2>
            <p className="text-sm text-slate-400">Pre-filled with realistic Melbourne defaults. Adjust to match your actual costs.</p>
          </div>

          {/* Home Office Section */}
          <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
            <div className="px-5 py-4 border-b border-white/10 flex items-center justify-between">
              <div>
                <h3 className="text-white font-semibold flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-sky-400/20 flex items-center justify-center text-sky-400 text-xs font-bold">HO</span>
                  Home Office
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">ATO-compliant calculation — fixed rate or actual cost method</p>
              </div>
              <span className="text-sky-400 font-bold text-sm">{fmt(homeResult.monthlyTotal)}/mo</span>
            </div>
            <div className="p-5 space-y-4">
              {/* Method Toggle */}
              <div>
                <Label>Deduction method</Label>
                <div className="flex gap-3">
                  {[
                    { val: true, label: '67c/hr Fixed Rate', sub: 'Simpler, ATO recommended' },
                    { val: false, label: 'Actual Cost Method', sub: 'More complex, often higher' },
                  ].map(({ val, label, sub }) => (
                    <button
                      key={String(val)}
                      type="button"
                      onClick={() => setHomeInputs((p) => ({ ...p, useFixedRate: val }))}
                      className={`flex-1 py-2.5 px-3 rounded-lg text-left text-sm transition-all border ${
                        homeInputs.useFixedRate === val
                          ? 'bg-sky-500/20 border-sky-500/50'
                          : 'bg-white/5 border-white/10 hover:bg-white/10'
                      }`}
                    >
                      <span className={`font-medium block ${homeInputs.useFixedRate === val ? 'text-sky-400' : 'text-white'}`}>{label}</span>
                      <span className="text-xs text-slate-500">{sub}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <InputField
                  label="Work-use percentage of home"
                  value={homeInputs.workUsePercent}
                  onChange={(v) => setHomeInputs((p) => ({ ...p, workUsePercent: v }))}
                  placeholder="10"
                  prefix="%"
                  hint="Typically floor area of office ÷ total home floor area"
                />
                <InputField
                  label="Annual rent / mortgage payments"
                  value={homeInputs.annualRent}
                  onChange={(v) => setHomeInputs((p) => ({ ...p, annualRent: v }))}
                  placeholder="24000"
                  prefix="$"
                  hint="E.g. $2,000/mo rent = $24,000/year"
                />
                <InputField
                  label="Annual utilities (electricity, gas)"
                  value={homeInputs.annualUtilities}
                  onChange={(v) => setHomeInputs((p) => ({ ...p, annualUtilities: v }))}
                  placeholder="2400"
                  prefix="$"
                />
                <InputField
                  label="Annual internet cost"
                  value={homeInputs.annualInternet}
                  onChange={(v) => setHomeInputs((p) => ({ ...p, annualInternet: v }))}
                  placeholder="1200"
                  prefix="$"
                  hint="$99-$120/mo for NBN 100-250 plan"
                />
                <InputField
                  label="Office furniture & equipment (annual)"
                  value={homeInputs.furnitureEquipment}
                  onChange={(v) => setHomeInputs((p) => ({ ...p, furnitureEquipment: v }))}
                  placeholder="600"
                  prefix="$"
                  hint="Amortise over useful life (e.g. $3,000 desk over 5 years = $600/yr)"
                />
                <InputField
                  label="Annual home insurance (work allocation)"
                  value={homeInputs.homeInsurance}
                  onChange={(v) => setHomeInputs((p) => ({ ...p, homeInsurance: v }))}
                  placeholder="1800"
                  prefix="$"
                  hint="Total annual premium — work % applied automatically"
                />
              </div>

              {homeInputs.useFixedRate && (
                <div className="bg-sky-400/5 border border-sky-400/20 rounded-lg p-3">
                  <p className="text-xs text-sky-400 font-medium mb-1">67c/hr Fixed Rate Method</p>
                  <p className="text-xs text-slate-400">
                    At {setup.hoursPerWeek} hrs/week × 48 weeks = {(parseFloat(setup.hoursPerWeek) || 0) * 48} hrs/year.
                    ATO deduction: {fmt((parseFloat(setup.hoursPerWeek) || 0) * 48 * 0.67)}/year (covers running costs).
                    Furniture/equipment claimed separately.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Coworking Section */}
          <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
            <div className="px-5 py-4 border-b border-white/10 flex items-center justify-between">
              <div>
                <h3 className="text-white font-semibold flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-sky-400/20 flex items-center justify-center text-sky-400 text-xs font-bold">CW</span>
                  Coworking Space
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">Melbourne pricing — Hub Australia, Cluster, WeWork, Storey</p>
              </div>
              <span className="text-sky-400 font-bold text-sm">{fmt(coworkResult.monthlyTotal)}/mo</span>
            </div>
            <div className="p-5 space-y-4">
              <div>
                <Label>Membership tier</Label>
                <div className="grid grid-cols-3 gap-2">
                  {(Object.entries(COWORKING_PRESETS) as [CoworkingTier, typeof COWORKING_PRESETS[CoworkingTier]][]).map(([key, preset]) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => handleTierChange(key)}
                      className={`p-3 rounded-lg text-left transition-all border ${
                        coworkInputs.tier === key
                          ? 'bg-sky-500/20 border-sky-500/50'
                          : 'bg-white/5 border-white/10 hover:bg-white/10'
                      }`}
                    >
                      <span className={`text-xs font-bold block ${coworkInputs.tier === key ? 'text-sky-400' : 'text-white'}`}>{preset.label}</span>
                      <span className="text-xs text-slate-500">{preset.description}</span>
                      <span className="text-xs text-slate-400 mt-1 block">~${preset.defaultPrice}/mo</span>
                    </button>
                  ))}
                </div>
              </div>
              <div className="grid sm:grid-cols-3 gap-4">
                <InputField
                  label="Monthly membership"
                  value={coworkInputs.monthlyMembership}
                  onChange={(v) => setCoworkInputs((p) => ({ ...p, monthlyMembership: v }))}
                  placeholder="520"
                  prefix="$"
                  hint="Adjust to your actual quote"
                />
                <InputField
                  label="Monthly commute cost"
                  value={coworkInputs.monthlyCommute}
                  onChange={(v) => setCoworkInputs((p) => ({ ...p, monthlyCommute: v }))}
                  placeholder="80"
                  prefix="$"
                  hint="Myki, fuel, parking"
                />
                <InputField
                  label="Monthly coffee & food"
                  value={coworkInputs.monthlyCoffeeFood}
                  onChange={(v) => setCoworkInputs((p) => ({ ...p, monthlyCoffeeFood: v }))}
                  placeholder="60"
                  prefix="$"
                  hint="Honest estimate — adds up"
                />
              </div>
              <div className="bg-amber-400/5 border border-amber-400/20 rounded-lg p-3">
                <p className="text-xs text-amber-400 font-medium mb-1">Deductibility note</p>
                <p className="text-xs text-slate-400">Membership is fully deductible. Daily commute from home to coworking is NOT deductible (ATO ruling). 50% of business-related coffee/meals may be claimable.</p>
              </div>
            </div>
          </div>

          {/* Private Office Section */}
          <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
            <div className="px-5 py-4 border-b border-white/10 flex items-center justify-between">
              <div>
                <h3 className="text-white font-semibold flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-sky-400/20 flex items-center justify-center text-sky-400 text-xs font-bold">PO</span>
                  Private Office
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">Your own dedicated commercial lease</p>
              </div>
              <span className="text-sky-400 font-bold text-sm">{fmt(privateResult.monthlyTotal)}/mo</span>
            </div>
            <div className="p-5 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <InputField
                  label="Monthly rent"
                  value={privateInputs.monthlyRent}
                  onChange={(v) => setPrivateInputs((p) => ({ ...p, monthlyRent: v }))}
                  placeholder="1400"
                  prefix="$"
                  hint="Melbourne inner suburbs: $900-$2,500/mo"
                />
                <InputField
                  label="Monthly utilities"
                  value={privateInputs.monthlyUtilities}
                  onChange={(v) => setPrivateInputs((p) => ({ ...p, monthlyUtilities: v }))}
                  placeholder="180"
                  prefix="$"
                />
                <InputField
                  label="Monthly internet"
                  value={privateInputs.monthlyInternet}
                  onChange={(v) => setPrivateInputs((p) => ({ ...p, monthlyInternet: v }))}
                  placeholder="110"
                  prefix="$"
                  hint="Business NBN or fibre connection"
                />
                <InputField
                  label="Monthly cleaning"
                  value={privateInputs.monthlyCleaning}
                  onChange={(v) => setPrivateInputs((p) => ({ ...p, monthlyCleaning: v }))}
                  placeholder="100"
                  prefix="$"
                  hint="Skip if self-maintained"
                />
                <InputField
                  label="Monthly commute cost"
                  value={privateInputs.monthlyCommute}
                  onChange={(v) => setPrivateInputs((p) => ({ ...p, monthlyCommute: v }))}
                  placeholder="80"
                  prefix="$"
                  hint="NOT tax deductible (home to regular office)"
                />
              </div>
              <div className="bg-sky-400/5 border border-sky-400/20 rounded-lg p-3">
                <p className="text-xs text-sky-400 font-medium mb-1">Full deductibility</p>
                <p className="text-xs text-slate-400">Rent, utilities, internet, and cleaning are 100% deductible as business expenses. Commute is excluded. GST-registered freelancers also claim GST credits on all deductible expenses.</p>
              </div>
            </div>
          </div>

          <div className="flex justify-between pt-2">
            <button
              onClick={() => setStep(1)}
              className="px-5 py-2.5 bg-white/5 border border-white/10 text-slate-300 text-sm font-medium rounded-lg hover:bg-white/10 transition-all"
            >
              Back
            </button>
            <button
              onClick={() => setStep(3)}
              className="px-6 py-2.5 bg-gradient-to-r from-sky-500 to-blue-500 text-white text-sm font-semibold rounded-lg hover:from-sky-400 hover:to-blue-400 transition-all"
            >
              See Comparison
            </button>
          </div>
        </div>
      )}

      {/* ---- STEP 3 ---- */}
      {step === 3 && recommendation && (
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-bold text-white heading-font mb-1">Workspace Comparison Results</h2>
            <p className="text-sm text-slate-400">
              Based on your setup in {setup.city} — {hoursPerWeek} hrs/week, {marginalRateLabel} marginal tax rate
            </p>
          </div>

          {/* Visual Bar Chart */}
          <div className="bg-white/5 rounded-xl border border-white/10 p-6">
            <h3 className="text-sm font-semibold text-slate-300 mb-5">Monthly Cost Comparison (Gross)</h3>
            <div className="space-y-4">
              {[
                { label: 'Home Office', value: homeResult.monthlyTotal, netValue: homeResult.netMonthlyCost, color: 'from-sky-400 to-sky-500', key: 'home' },
                { label: 'Coworking', value: coworkResult.monthlyTotal, netValue: coworkResult.netMonthlyCost, color: 'from-blue-400 to-blue-500', key: 'coworking' },
                { label: 'Private Office', value: privateResult.monthlyTotal, netValue: privateResult.netMonthlyCost, color: 'from-indigo-400 to-indigo-500', key: 'private' },
              ].map((item) => (
                <div key={item.key}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-sm text-slate-300 font-medium flex items-center gap-2">
                      {item.label}
                      {recommendation.recommendation === item.key && (
                        <span className="text-xs bg-sky-400/20 text-sky-400 border border-sky-400/30 rounded-full px-2 py-0.5 font-semibold">Recommended</span>
                      )}
                    </span>
                    <div className="text-right">
                      <span className="text-sm text-white font-bold">{fmt(item.value)}</span>
                      <span className="text-xs text-slate-500 ml-2">({fmt(item.netValue)} net)</span>
                    </div>
                  </div>
                  <div className="relative h-3 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${item.color} rounded-full transition-all duration-700`}
                      style={{ width: `${Math.max((item.value / maxMonthly) * 100, 2)}%` }}
                    />
                  </div>
                  {/* Net cost bar (after tax savings) */}
                  <div className="relative h-1.5 bg-white/5 rounded-full overflow-hidden mt-1">
                    <div
                      className={`h-full bg-gradient-to-r ${item.color} opacity-40 rounded-full transition-all duration-700`}
                      style={{ width: `${Math.max((item.netValue / maxMonthly) * 100, 2)}%` }}
                    />
                  </div>
                  <p className="text-xs text-slate-600 mt-0.5">Thick bar = gross cost | Thin bar = net after tax savings</p>
                </div>
              ))}
            </div>
          </div>

          {/* Comparison Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 pr-4 text-slate-400 font-medium w-40">Metric</th>
                  {[
                    { label: 'Home Office', key: 'home' },
                    { label: 'Coworking', key: 'coworking' },
                    { label: 'Private Office', key: 'private' },
                  ].map((col) => (
                    <th key={col.key} className="text-center py-3 px-3 text-white font-semibold">
                      <span className="flex flex-col items-center gap-1">
                        {col.label}
                        {recommendation.recommendation === col.key && (
                          <span className="text-xs bg-sky-400/20 text-sky-400 border border-sky-400/30 rounded-full px-2 py-0.5 font-medium">Best fit</span>
                        )}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  {
                    label: 'Monthly (gross)',
                    values: [fmt(homeResult.monthlyTotal), fmt(coworkResult.monthlyTotal), fmt(privateResult.monthlyTotal)],
                  },
                  {
                    label: 'Annual (gross)',
                    values: [fmt(homeResult.annualTotal), fmt(coworkResult.annualTotal), fmt(privateResult.annualTotal)],
                  },
                  {
                    label: 'Cost per work day',
                    values: [
                      fmt(homeResult.costPerWorkingDay),
                      fmt(coworkResult.costPerWorkingDay),
                      fmt(privateResult.costPerWorkingDay),
                    ],
                  },
                  {
                    label: `Annual deduction (${marginalRateLabel} rate)`,
                    values: [fmt(homeResult.annualDeduction), fmt(coworkResult.annualDeduction), fmt(privateResult.annualDeduction)],
                    highlight: true,
                  },
                  {
                    label: 'Tax saving (annual)',
                    values: [
                      `−${fmt(homeResult.taxSaving)}`,
                      `−${fmt(coworkResult.taxSaving)}`,
                      `−${fmt(privateResult.taxSaving)}`,
                    ],
                    positive: true,
                  },
                  {
                    label: 'Net annual cost',
                    values: [fmt(homeResult.netAnnualCost), fmt(coworkResult.netAnnualCost), fmt(privateResult.netAnnualCost)],
                    bold: true,
                  },
                  {
                    label: 'Net monthly cost',
                    values: [fmt(homeResult.netMonthlyCost), fmt(coworkResult.netMonthlyCost), fmt(privateResult.netMonthlyCost)],
                    bold: true,
                  },
                ].map((row, i) => (
                  <tr key={i} className={row.highlight ? 'bg-sky-400/5' : ''}>
                    <td className="py-3 pr-4 text-slate-400">{row.label}</td>
                    {row.values.map((v, j) => (
                      <td
                        key={j}
                        className={`py-3 px-3 text-center ${
                          row.bold ? 'text-white font-bold' : row.positive ? 'text-emerald-400 font-medium' : 'text-slate-200'
                        }`}
                      >
                        {v}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pros & Cons */}
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                label: 'Home Office',
                pros: ['Lowest cash outlay', 'Fully private and quiet', 'Tax deductions available', 'No commute cost or time', 'Max flexibility'],
                cons: ['Work/life separation harder', 'Isolation over time', 'Client meetings require café/coworking', 'Limited networking', 'Can harm focus for some'],
              },
              {
                label: 'Coworking',
                pros: ['Professional environment', 'Built-in networking', 'Flexible — can scale up/down', 'Fully deductible membership', 'Meeting rooms available'],
                cons: ['Higher cash cost than home', 'Noise in hot desk areas', 'Commute cost and time', 'Can hit capacity on busy days', 'Coffee adds up fast'],
              },
              {
                label: 'Private Office',
                pros: ['Maximum privacy', 'Client-ready meeting space', 'Signals business credibility', 'Fully deductible expenses', 'Stable for subcontractors'],
                cons: ['Highest cash outlay', 'Lease lock-in risk', 'Overhead during slow months', 'Commute cost and time', 'Management overhead'],
              },
            ].map((ws) => (
              <div key={ws.label} className="bg-white/5 rounded-xl border border-white/10 p-4">
                <h4 className="text-white font-semibold mb-3 text-sm">{ws.label}</h4>
                <div className="space-y-1 mb-3">
                  {ws.pros.map((p) => (
                    <div key={p} className="flex items-start gap-2 text-xs text-slate-300">
                      <span className="text-emerald-400 mt-0.5 flex-shrink-0">+</span>
                      {p}
                    </div>
                  ))}
                </div>
                <div className="space-y-1">
                  {ws.cons.map((c) => (
                    <div key={c} className="flex items-start gap-2 text-xs text-slate-400">
                      <span className="text-red-400 mt-0.5 flex-shrink-0">−</span>
                      {c}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Recommendation */}
          <div className="bg-gradient-to-r from-sky-400/10 to-blue-500/10 border border-sky-400/30 rounded-xl p-6">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-full bg-sky-400/20 border border-sky-400/30 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.347.35A3.001 3.001 0 0012 21a3.001 3.001 0 00-2.121-.879l-.346-.351z" />
                </svg>
              </div>
              <div>
                <p className="text-sky-400 font-semibold text-sm mb-1">
                  Recommendation for {setup.city}: {recommendation.recommendation === 'home' ? 'Home Office' : recommendation.recommendation === 'coworking' ? 'Coworking' : 'Private Office'}
                </p>
                <p className="text-slate-300 text-sm">{recommendation.reason}</p>
              </div>
            </div>
          </div>

          {/* Break-Even Analysis */}
          <div className="bg-white/5 rounded-xl border border-white/10 p-6">
            <h3 className="text-white font-semibold mb-4">Break-Even Income Analysis</h3>
            <p className="text-sm text-slate-400 mb-4">
              At what annual income does upgrading workspace become financially comfortable (workspace cost under 10% of gross revenue)?
            </p>
            <div className="grid sm:grid-cols-3 gap-3">
              {[
                { label: 'Coworking break-even', value: getBreakEvenIncome(coworkResult.monthlyTotal), current: income, type: 'coworking' },
                { label: 'Private office break-even', value: getBreakEvenIncome(privateResult.monthlyTotal), current: income, type: 'private' },
              ].map((item) => {
                const reached = item.current >= item.value;
                return (
                  <div key={item.type} className={`rounded-xl p-4 border ${reached ? 'bg-emerald-400/5 border-emerald-400/20' : 'bg-white/5 border-white/10'}`}>
                    <p className="text-xs text-slate-400 mb-1">{item.label}</p>
                    <p className={`text-xl font-bold ${reached ? 'text-emerald-400' : 'text-white'}`}>{fmt(item.value)}</p>
                    <p className="text-xs mt-1">
                      {reached ? (
                        <span className="text-emerald-400">Your income exceeds this threshold</span>
                      ) : (
                        <span className="text-slate-500">Need {fmt(item.value - item.current)} more annual revenue</span>
                      )}
                    </p>
                  </div>
                );
              })}
              <div className="bg-white/5 rounded-xl border border-white/10 p-4">
                <p className="text-xs text-slate-400 mb-1">Your current income</p>
                <p className="text-xl font-bold text-sky-400">{fmt(income)}</p>
                <p className="text-xs text-slate-500 mt-1">Marginal rate: {marginalRateLabel}</p>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              onClick={() => setStep(2)}
              className="flex-1 py-2.5 bg-white/5 border border-white/10 text-slate-300 text-sm font-medium rounded-lg hover:bg-white/10 transition-all"
            >
              Adjust Inputs
            </button>
            <button
              onClick={() => { setStep(1); }}
              className="flex-1 py-2.5 bg-white/5 border border-white/10 text-slate-300 text-sm font-medium rounded-lg hover:bg-white/10 transition-all"
            >
              Start Over
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
