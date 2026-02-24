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

function formatRate(value: number): string {
  return new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
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

function calculateMedicareLevy(taxableIncome: number): number {
  if (taxableIncome <= 26000) return 0;
  if (taxableIncome <= 32500) return (taxableIncome - 26000) * 0.1;
  return taxableIncome * 0.02;
}

const SUPER_RATE = 0.115; // 11.5% for 2025-26

export default function SalaryToHourly() {
  const [annualSalary, setAnnualSalary] = useState('85000');
  const [superIncluded, setSuperIncluded] = useState(false);
  const [hoursPerWeek, setHoursPerWeek] = useState('38');
  const [annualLeave, setAnnualLeave] = useState('20');
  const [sickLeave, setSickLeave] = useState('10');
  const [publicHolidays, setPublicHolidays] = useState('8');

  // Freelance adjustments
  const [businessOverheadPct, setBusinessOverheadPct] = useState('15');
  const [nonBillablePct, setNonBillablePct] = useState('25');
  const [profitMarginPct, setProfitMarginPct] = useState('10');

  const [copied, setCopied] = useState(false);

  const results = useMemo(() => {
    const salary = parseFloat(annualSalary) || 0;
    const hours = parseFloat(hoursPerWeek) || 38;
    const leave = parseInt(annualLeave) || 0;
    const sick = parseInt(sickLeave) || 0;
    const holidays = parseInt(publicHolidays) || 0;
    const overheadPct = (parseFloat(businessOverheadPct) || 0) / 100;
    const nonBillable = (parseFloat(nonBillablePct) || 0) / 100;
    const profitMargin = (parseFloat(profitMarginPct) || 0) / 100;

    // Base salary (excluding super if included)
    const baseSalary = superIncluded ? salary / (1 + SUPER_RATE) : salary;
    const superAmount = superIncluded ? salary - baseSalary : salary * SUPER_RATE;
    const totalPackage = baseSalary + superAmount;

    // Employee calculations
    const weeksPerYear = 52;
    const totalWorkDays = weeksPerYear * 5; // 260 days
    const paidLeaveDays = leave + sick + holidays;
    const actualWorkDays = totalWorkDays - paidLeaveDays;
    const hoursPerDay = hours / 5;
    const totalWorkHours = weeksPerYear * hours;
    const actualWorkHours = actualWorkDays * hoursPerDay;

    // Hourly rates as employee
    const grossHourlyRate = baseSalary / totalWorkHours;
    const effectiveHourlyRate = baseSalary / actualWorkHours;

    // Employee take-home
    const employeeTax = calculateIncomeTax(baseSalary);
    const employeeMedicare = calculateMedicareLevy(baseSalary);
    const employeeTakeHome = baseSalary - employeeTax - employeeMedicare;
    const takeHomeHourly = employeeTakeHome / totalWorkHours;

    // Freelance equivalent calculation
    // Step 1: Match the total package (salary + super + leave value)
    const leaveValue = (baseSalary / totalWorkDays) * paidLeaveDays;
    const matchAmount = baseSalary + leaveValue;

    // Step 2: Add self-funded super
    const selfFundedSuper = matchAmount * SUPER_RATE;

    // Step 3: Add business overheads
    const baseBeforeOverheads = matchAmount + selfFundedSuper;
    const overheadCost = baseBeforeOverheads * overheadPct;

    // Step 4: Account for non-billable time
    const billableWeeks = weeksPerYear * (1 - nonBillable);
    const billableHours = billableWeeks * hours;

    // Step 5: Add profit margin
    const totalFreelanceRevenue =
      (baseBeforeOverheads + overheadCost) / (1 - profitMargin);

    // Step 6: Calculate tax on freelance income
    const freelanceTax = calculateIncomeTax(totalFreelanceRevenue);
    const freelanceMedicare = calculateMedicareLevy(totalFreelanceRevenue);
    const freelanceTakeHome =
      totalFreelanceRevenue - freelanceTax - freelanceMedicare - selfFundedSuper - overheadCost;

    // Freelance rates
    const freelanceHourlyRate = totalFreelanceRevenue / billableHours;
    const freelanceDailyRate = freelanceHourlyRate * hoursPerDay;
    const freelanceMonthlyRevenue = totalFreelanceRevenue / 12;

    // Premium multiplier
    const premiumMultiplier = freelanceHourlyRate / grossHourlyRate;

    return {
      baseSalary,
      superAmount,
      totalPackage,
      grossHourlyRate,
      effectiveHourlyRate,
      takeHomeHourly,
      employeeTakeHome,
      employeeTax,
      employeeMedicare,
      paidLeaveDays,
      actualWorkDays,
      leaveValue,
      totalWorkHours,
      billableHours,
      freelanceHourlyRate,
      freelanceDailyRate,
      freelanceMonthlyRevenue,
      totalFreelanceRevenue,
      selfFundedSuper,
      overheadCost,
      freelanceTax,
      freelanceMedicare,
      freelanceTakeHome,
      premiumMultiplier,
    };
  }, [
    annualSalary,
    superIncluded,
    hoursPerWeek,
    annualLeave,
    sickLeave,
    publicHolidays,
    businessOverheadPct,
    nonBillablePct,
    profitMarginPct,
  ]);

  const handleCopy = () => {
    const text = [
      'Salary to Freelance Rate Conversion — InvoiceFlow',
      '================================================',
      '',
      `Annual Salary: ${formatCurrency(results.baseSalary)}${superIncluded ? ' (super inclusive)' : ''}`,
      `Total Package (incl. super): ${formatCurrency(results.totalPackage)}`,
      '',
      '--- Employee Rates ---',
      `Gross Hourly: ${formatRate(results.grossHourlyRate)}/hr`,
      `Effective Hourly (leave-adjusted): ${formatRate(results.effectiveHourlyRate)}/hr`,
      `Take-Home Hourly: ${formatRate(results.takeHomeHourly)}/hr`,
      `Annual Take-Home: ${formatCurrency(results.employeeTakeHome)}`,
      '',
      '--- Freelance Equivalent ---',
      `Hourly Rate: ${formatRate(results.freelanceHourlyRate)}/hr`,
      `Daily Rate: ${formatCurrency(results.freelanceDailyRate)}/day`,
      `Monthly Revenue Needed: ${formatCurrency(results.freelanceMonthlyRevenue)}/mo`,
      `Annual Revenue Needed: ${formatCurrency(results.totalFreelanceRevenue)}/yr`,
      `Premium vs Salary: ${results.premiumMultiplier.toFixed(1)}x`,
      '',
      '--- Freelance Breakdown ---',
      `Self-Funded Super: ${formatCurrency(results.selfFundedSuper)}/yr`,
      `Business Overheads: ${formatCurrency(results.overheadCost)}/yr`,
      `Estimated Tax: ${formatCurrency(results.freelanceTax)}/yr`,
      `Medicare Levy: ${formatCurrency(results.freelanceMedicare)}/yr`,
      `Estimated Take-Home: ${formatCurrency(results.freelanceTakeHome)}/yr`,
      '',
      `Billable Hours/Year: ${Math.round(results.billableHours)}`,
      '',
      'Generated at invoiceflow.au/tools/salary-to-hourly',
    ].join('\n');
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const inputClass =
    'w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500/40 focus:border-teal-500/40 transition-all';
  const labelClass = 'block text-sm font-medium text-slate-300 mb-1.5';

  return (
    <div className="space-y-8">
      {/* Inputs */}
      <div className="glass rounded-2xl p-6 sm:p-8 space-y-6">
        <h2 className="text-xl font-bold text-white heading-font">Your Salary Details</h2>

        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label className={labelClass}>Annual Salary ($)</label>
            <input
              type="number"
              value={annualSalary}
              onChange={(e) => setAnnualSalary(e.target.value)}
              className={inputClass}
              placeholder="85000"
            />
          </div>
          <div className="flex items-end">
            <label className="flex items-center gap-3 cursor-pointer py-2.5">
              <div
                className={`w-12 h-6 rounded-full transition-colors ${
                  superIncluded ? 'bg-teal-500' : 'bg-white/10'
                } relative cursor-pointer`}
                onClick={() => setSuperIncluded(!superIncluded)}
              >
                <div
                  className={`absolute top-0.5 w-5 h-5 rounded-full bg-white transition-transform ${
                    superIncluded ? 'translate-x-6' : 'translate-x-0.5'
                  }`}
                />
              </div>
              <span className="text-sm text-slate-300">
                Super included in salary
              </span>
            </label>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          <div>
            <label className={labelClass}>Hours/Week</label>
            <input
              type="number"
              value={hoursPerWeek}
              onChange={(e) => setHoursPerWeek(e.target.value)}
              className={inputClass}
              placeholder="38"
            />
          </div>
          <div>
            <label className={labelClass}>Annual Leave (days)</label>
            <input
              type="number"
              value={annualLeave}
              onChange={(e) => setAnnualLeave(e.target.value)}
              className={inputClass}
              placeholder="20"
            />
          </div>
          <div>
            <label className={labelClass}>Sick Leave (days)</label>
            <input
              type="number"
              value={sickLeave}
              onChange={(e) => setSickLeave(e.target.value)}
              className={inputClass}
              placeholder="10"
            />
          </div>
        </div>

        <div>
          <label className={labelClass}>Public Holidays (days)</label>
          <input
            type="number"
            value={publicHolidays}
            onChange={(e) => setPublicHolidays(e.target.value)}
            className={inputClass + ' max-w-xs'}
            placeholder="8"
          />
        </div>
      </div>

      {/* Freelance Adjustments */}
      <div className="glass rounded-2xl p-6 sm:p-8 space-y-6">
        <h2 className="text-xl font-bold text-white heading-font">Freelance Adjustments</h2>
        <p className="text-sm text-slate-400">
          These factors determine how much more you need to charge as a freelancer to match your
          salary lifestyle.
        </p>

        <div className="grid sm:grid-cols-3 gap-4">
          <div>
            <label className={labelClass}>Business Overheads (%)</label>
            <input
              type="number"
              value={businessOverheadPct}
              onChange={(e) => setBusinessOverheadPct(e.target.value)}
              className={inputClass}
              placeholder="15"
            />
            <p className="text-xs text-slate-500 mt-1">Software, insurance, accounting</p>
          </div>
          <div>
            <label className={labelClass}>Non-Billable Time (%)</label>
            <input
              type="number"
              value={nonBillablePct}
              onChange={(e) => setNonBillablePct(e.target.value)}
              className={inputClass}
              placeholder="25"
            />
            <p className="text-xs text-slate-500 mt-1">Admin, marketing, invoicing</p>
          </div>
          <div>
            <label className={labelClass}>Profit Margin (%)</label>
            <input
              type="number"
              value={profitMarginPct}
              onChange={(e) => setProfitMarginPct(e.target.value)}
              className={inputClass}
              placeholder="10"
            />
            <p className="text-xs text-slate-500 mt-1">Buffer for growth & savings</p>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="glass rounded-2xl p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-white heading-font">Your Rates</h2>
          <button
            onClick={handleCopy}
            className="flex items-center gap-2 text-sm px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all"
          >
            {copied ? (
              <>
                <span className="text-emerald-400">Copied</span>
              </>
            ) : (
              <>Copy Results</>
            )}
          </button>
        </div>

        {/* Side-by-side comparison */}
        <div className="grid sm:grid-cols-2 gap-6">
          {/* Employee Column */}
          <div className="bg-white/5 rounded-xl p-5 space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-blue-400" />
              <h3 className="text-lg font-bold text-white">As an Employee</h3>
            </div>
            <div>
              <p className="text-xs text-slate-500 uppercase tracking-wide">Gross Hourly</p>
              <p className="text-2xl font-bold text-blue-400">
                {formatRate(results.grossHourlyRate)}<span className="text-sm text-slate-500">/hr</span>
              </p>
            </div>
            <div>
              <p className="text-xs text-slate-500 uppercase tracking-wide">Leave-Adjusted Hourly</p>
              <p className="text-lg font-semibold text-white">
                {formatRate(results.effectiveHourlyRate)}<span className="text-sm text-slate-500">/hr</span>
              </p>
            </div>
            <div>
              <p className="text-xs text-slate-500 uppercase tracking-wide">Take-Home Hourly</p>
              <p className="text-lg font-semibold text-white">
                {formatRate(results.takeHomeHourly)}<span className="text-sm text-slate-500">/hr</span>
              </p>
            </div>
            <hr className="border-white/10" />
            <div>
              <p className="text-xs text-slate-500 uppercase tracking-wide">Annual Take-Home</p>
              <p className="text-lg font-semibold text-white">{formatCurrency(results.employeeTakeHome)}</p>
            </div>
            <div>
              <p className="text-xs text-slate-500 uppercase tracking-wide">Total Package (incl. super)</p>
              <p className="text-sm text-slate-400">{formatCurrency(results.totalPackage)}</p>
            </div>
            <div>
              <p className="text-xs text-slate-500 uppercase tracking-wide">Paid Leave Days</p>
              <p className="text-sm text-slate-400">{results.paidLeaveDays} days/year</p>
            </div>
          </div>

          {/* Freelance Column */}
          <div className="bg-gradient-to-br from-teal-500/10 to-blue-500/10 border border-teal-500/20 rounded-xl p-5 space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-teal-400" />
              <h3 className="text-lg font-bold text-white">As a Freelancer</h3>
            </div>
            <div>
              <p className="text-xs text-teal-400/70 uppercase tracking-wide">Hourly Rate</p>
              <p className="text-2xl font-bold text-teal-400">
                {formatRate(results.freelanceHourlyRate)}<span className="text-sm text-teal-400/60">/hr</span>
              </p>
            </div>
            <div>
              <p className="text-xs text-teal-400/70 uppercase tracking-wide">Daily Rate</p>
              <p className="text-lg font-semibold text-white">
                {formatCurrency(results.freelanceDailyRate)}<span className="text-sm text-slate-500">/day</span>
              </p>
            </div>
            <div>
              <p className="text-xs text-teal-400/70 uppercase tracking-wide">Monthly Revenue</p>
              <p className="text-lg font-semibold text-white">
                {formatCurrency(results.freelanceMonthlyRevenue)}<span className="text-sm text-slate-500">/mo</span>
              </p>
            </div>
            <hr className="border-teal-500/20" />
            <div>
              <p className="text-xs text-teal-400/70 uppercase tracking-wide">Annual Revenue Needed</p>
              <p className="text-lg font-semibold text-white">{formatCurrency(results.totalFreelanceRevenue)}</p>
            </div>
            <div>
              <p className="text-xs text-teal-400/70 uppercase tracking-wide">Estimated Take-Home</p>
              <p className="text-sm text-slate-400">{formatCurrency(results.freelanceTakeHome)}</p>
            </div>
            <div>
              <p className="text-xs text-teal-400/70 uppercase tracking-wide">Billable Hours/Year</p>
              <p className="text-sm text-slate-400">{Math.round(results.billableHours)} hrs</p>
            </div>
          </div>
        </div>

        {/* Premium Multiplier */}
        <div className="bg-white/5 rounded-xl p-5 text-center">
          <p className="text-sm text-slate-400 mb-1">Freelance Premium</p>
          <p className="text-3xl font-bold text-white">
            {results.premiumMultiplier.toFixed(1)}<span className="text-lg text-teal-400">x</span>
          </p>
          <p className="text-sm text-slate-500 mt-1">
            You need to charge <strong className="text-white">{results.premiumMultiplier.toFixed(1)}x</strong> your
            gross hourly rate to match your salary as a freelancer
          </p>
        </div>

        {/* Cost Breakdown */}
        <div>
          <h3 className="text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wide">
            Where the extra money goes
          </h3>
          <div className="space-y-2">
            {[
              {
                label: 'No paid leave',
                amount: results.leaveValue,
                color: 'bg-amber-400',
              },
              {
                label: 'Self-funded super (11.5%)',
                amount: results.selfFundedSuper,
                color: 'bg-blue-400',
              },
              {
                label: 'Business overheads',
                amount: results.overheadCost,
                color: 'bg-purple-400',
              },
              {
                label: 'Higher tax bracket',
                amount: results.freelanceTax - results.employeeTax,
                color: 'bg-rose-400',
              },
              {
                label: 'Profit margin',
                amount: results.totalFreelanceRevenue * (parseFloat(profitMarginPct) || 0) / 100,
                color: 'bg-teal-400',
              },
            ]
              .filter((item) => item.amount > 0)
              .map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${item.color} shrink-0`} />
                  <span className="text-sm text-slate-400 flex-1">{item.label}</span>
                  <span className="text-sm font-medium text-white">
                    +{formatCurrency(item.amount)}/yr
                  </span>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
