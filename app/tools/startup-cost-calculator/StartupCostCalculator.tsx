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

type BusinessType =
  | 'Web Developer'
  | 'Designer'
  | 'Writer/Copywriter'
  | 'Marketing Consultant'
  | 'Photographer'
  | 'Virtual Assistant'
  | 'Other';

const BUSINESS_TYPES: BusinessType[] = [
  'Web Developer',
  'Designer',
  'Writer/Copywriter',
  'Marketing Consultant',
  'Photographer',
  'Virtual Assistant',
  'Other',
];

interface OneTimeCosts {
  abnRegistration: number;
  businessNameRegistration: number;
  domainName: number;
  websiteSetup: number;
  equipment: number;
  softwareLicences: number;
  professionalDevelopment: number;
  brandingLogo: number;
  photographyEquipment: number;
  legal: number;
  insuranceSetup: number;
  otherOneTime: number;
}

interface MonthlyCosts {
  softwareSubscriptions: number;
  phoneInternet: number;
  coworkingOffice: number;
  insurance: number;
  accountingBookkeeping: number;
  marketingAdvertising: number;
  domainHostingMonthly: number;
  professionalMemberships: number;
  otherMonthly: number;
}

interface FinancialPlanning {
  currentSavings: number;
  targetMonthlyIncome: number;
  expectedHourlyRate: number;
  estimatedBillableHoursPerWeek: number;
}

/* ---- Presets per business type ---- */

const ONE_TIME_PRESETS: Record<BusinessType, Partial<OneTimeCosts>> = {
  'Web Developer': {
    abnRegistration: 0,
    businessNameRegistration: 39,
    domainName: 25,
    websiteSetup: 0,
    equipment: 2500,
    softwareLicences: 0,
    professionalDevelopment: 500,
    brandingLogo: 300,
    photographyEquipment: 0,
    legal: 500,
    insuranceSetup: 0,
    otherOneTime: 0,
  },
  'Designer': {
    abnRegistration: 0,
    businessNameRegistration: 39,
    domainName: 25,
    websiteSetup: 200,
    equipment: 3000,
    softwareLicences: 0,
    professionalDevelopment: 400,
    brandingLogo: 0,
    photographyEquipment: 0,
    legal: 500,
    insuranceSetup: 0,
    otherOneTime: 0,
  },
  'Writer/Copywriter': {
    abnRegistration: 0,
    businessNameRegistration: 39,
    domainName: 25,
    websiteSetup: 200,
    equipment: 1500,
    softwareLicences: 0,
    professionalDevelopment: 300,
    brandingLogo: 200,
    photographyEquipment: 0,
    legal: 300,
    insuranceSetup: 0,
    otherOneTime: 0,
  },
  'Marketing Consultant': {
    abnRegistration: 0,
    businessNameRegistration: 39,
    domainName: 25,
    websiteSetup: 500,
    equipment: 2000,
    softwareLicences: 0,
    professionalDevelopment: 500,
    brandingLogo: 500,
    photographyEquipment: 0,
    legal: 500,
    insuranceSetup: 0,
    otherOneTime: 0,
  },
  'Photographer': {
    abnRegistration: 0,
    businessNameRegistration: 39,
    domainName: 25,
    websiteSetup: 500,
    equipment: 2000,
    softwareLicences: 0,
    professionalDevelopment: 300,
    brandingLogo: 300,
    photographyEquipment: 5000,
    legal: 300,
    insuranceSetup: 0,
    otherOneTime: 0,
  },
  'Virtual Assistant': {
    abnRegistration: 0,
    businessNameRegistration: 39,
    domainName: 25,
    websiteSetup: 100,
    equipment: 1200,
    softwareLicences: 0,
    professionalDevelopment: 200,
    brandingLogo: 150,
    photographyEquipment: 0,
    legal: 200,
    insuranceSetup: 0,
    otherOneTime: 0,
  },
  'Other': {
    abnRegistration: 0,
    businessNameRegistration: 39,
    domainName: 25,
    websiteSetup: 300,
    equipment: 2000,
    softwareLicences: 0,
    professionalDevelopment: 400,
    brandingLogo: 300,
    photographyEquipment: 0,
    legal: 400,
    insuranceSetup: 0,
    otherOneTime: 0,
  },
};

const MONTHLY_PRESETS: Record<BusinessType, Partial<MonthlyCosts>> = {
  'Web Developer': {
    softwareSubscriptions: 80,
    phoneInternet: 90,
    coworkingOffice: 0,
    insurance: 50,
    accountingBookkeeping: 80,
    marketingAdvertising: 50,
    domainHostingMonthly: 25,
    professionalMemberships: 0,
    otherMonthly: 0,
  },
  'Designer': {
    softwareSubscriptions: 100,
    phoneInternet: 90,
    coworkingOffice: 0,
    insurance: 45,
    accountingBookkeeping: 80,
    marketingAdvertising: 60,
    domainHostingMonthly: 15,
    professionalMemberships: 0,
    otherMonthly: 0,
  },
  'Writer/Copywriter': {
    softwareSubscriptions: 50,
    phoneInternet: 80,
    coworkingOffice: 0,
    insurance: 35,
    accountingBookkeeping: 60,
    marketingAdvertising: 40,
    domainHostingMonthly: 10,
    professionalMemberships: 15,
    otherMonthly: 0,
  },
  'Marketing Consultant': {
    softwareSubscriptions: 120,
    phoneInternet: 90,
    coworkingOffice: 0,
    insurance: 60,
    accountingBookkeeping: 80,
    marketingAdvertising: 100,
    domainHostingMonthly: 15,
    professionalMemberships: 30,
    otherMonthly: 0,
  },
  'Photographer': {
    softwareSubscriptions: 60,
    phoneInternet: 80,
    coworkingOffice: 0,
    insurance: 70,
    accountingBookkeeping: 60,
    marketingAdvertising: 80,
    domainHostingMonthly: 20,
    professionalMemberships: 25,
    otherMonthly: 0,
  },
  'Virtual Assistant': {
    softwareSubscriptions: 40,
    phoneInternet: 80,
    coworkingOffice: 0,
    insurance: 25,
    accountingBookkeeping: 50,
    marketingAdvertising: 30,
    domainHostingMonthly: 10,
    professionalMemberships: 0,
    otherMonthly: 0,
  },
  'Other': {
    softwareSubscriptions: 60,
    phoneInternet: 80,
    coworkingOffice: 0,
    insurance: 45,
    accountingBookkeeping: 70,
    marketingAdvertising: 50,
    domainHostingMonthly: 15,
    professionalMemberships: 0,
    otherMonthly: 0,
  },
};

const FINANCIAL_PRESETS: Record<BusinessType, FinancialPlanning> = {
  'Web Developer': { currentSavings: 10000, targetMonthlyIncome: 8000, expectedHourlyRate: 120, estimatedBillableHoursPerWeek: 15 },
  'Designer': { currentSavings: 8000, targetMonthlyIncome: 7000, expectedHourlyRate: 100, estimatedBillableHoursPerWeek: 15 },
  'Writer/Copywriter': { currentSavings: 6000, targetMonthlyIncome: 5000, expectedHourlyRate: 80, estimatedBillableHoursPerWeek: 15 },
  'Marketing Consultant': { currentSavings: 10000, targetMonthlyIncome: 8000, expectedHourlyRate: 130, estimatedBillableHoursPerWeek: 12 },
  'Photographer': { currentSavings: 8000, targetMonthlyIncome: 6000, expectedHourlyRate: 100, estimatedBillableHoursPerWeek: 12 },
  'Virtual Assistant': { currentSavings: 5000, targetMonthlyIncome: 4000, expectedHourlyRate: 50, estimatedBillableHoursPerWeek: 20 },
  'Other': { currentSavings: 8000, targetMonthlyIncome: 6000, expectedHourlyRate: 100, estimatedBillableHoursPerWeek: 15 },
};

/* ---- Default state builders ---- */

function getDefaultOneTime(bt: BusinessType): OneTimeCosts {
  const p = ONE_TIME_PRESETS[bt];
  return {
    abnRegistration: p.abnRegistration ?? 0,
    businessNameRegistration: p.businessNameRegistration ?? 39,
    domainName: p.domainName ?? 25,
    websiteSetup: p.websiteSetup ?? 0,
    equipment: p.equipment ?? 2000,
    softwareLicences: p.softwareLicences ?? 0,
    professionalDevelopment: p.professionalDevelopment ?? 400,
    brandingLogo: p.brandingLogo ?? 300,
    photographyEquipment: p.photographyEquipment ?? 0,
    legal: p.legal ?? 400,
    insuranceSetup: p.insuranceSetup ?? 0,
    otherOneTime: p.otherOneTime ?? 0,
  };
}

function getDefaultMonthly(bt: BusinessType): MonthlyCosts {
  const p = MONTHLY_PRESETS[bt];
  return {
    softwareSubscriptions: p.softwareSubscriptions ?? 60,
    phoneInternet: p.phoneInternet ?? 80,
    coworkingOffice: p.coworkingOffice ?? 0,
    insurance: p.insurance ?? 45,
    accountingBookkeeping: p.accountingBookkeeping ?? 70,
    marketingAdvertising: p.marketingAdvertising ?? 50,
    domainHostingMonthly: p.domainHostingMonthly ?? 15,
    professionalMemberships: p.professionalMemberships ?? 0,
    otherMonthly: p.otherMonthly ?? 0,
  };
}

/* ---- Component ---- */

export default function StartupCostCalculator() {
  const [businessType, setBusinessType] = useState<BusinessType>('Web Developer');
  const [oneTime, setOneTime] = useState<OneTimeCosts>(getDefaultOneTime('Web Developer'));
  const [monthly, setMonthly] = useState<MonthlyCosts>(getDefaultMonthly('Web Developer'));
  const [financial, setFinancial] = useState<FinancialPlanning>(FINANCIAL_PRESETS['Web Developer']);
  const [copied, setCopied] = useState(false);
  const [activeSection, setActiveSection] = useState<'oneTime' | 'monthly' | 'financial'>('oneTime');

  // Apply preset when business type changes
  const applyPreset = useCallback((bt: BusinessType) => {
    setBusinessType(bt);
    setOneTime(getDefaultOneTime(bt));
    setMonthly(getDefaultMonthly(bt));
    setFinancial(FINANCIAL_PRESETS[bt]);
  }, []);

  // Update helpers
  const updateOneTime = (field: keyof OneTimeCosts, value: number) => {
    setOneTime((prev) => ({ ...prev, [field]: value }));
  };
  const updateMonthly = (field: keyof MonthlyCosts, value: number) => {
    setMonthly((prev) => ({ ...prev, [field]: value }));
  };
  const updateFinancial = (field: keyof FinancialPlanning, value: number) => {
    setFinancial((prev) => ({ ...prev, [field]: value }));
  };

  /* ---- Calculations ---- */

  const results = useMemo(() => {
    const totalOneTime =
      oneTime.abnRegistration +
      oneTime.businessNameRegistration +
      oneTime.domainName +
      oneTime.websiteSetup +
      oneTime.equipment +
      oneTime.softwareLicences +
      oneTime.professionalDevelopment +
      oneTime.brandingLogo +
      oneTime.photographyEquipment +
      oneTime.legal +
      oneTime.insuranceSetup +
      oneTime.otherOneTime;

    const totalMonthly =
      monthly.softwareSubscriptions +
      monthly.phoneInternet +
      monthly.coworkingOffice +
      monthly.insurance +
      monthly.accountingBookkeeping +
      monthly.marketingAdvertising +
      monthly.domainHostingMonthly +
      monthly.professionalMemberships +
      monthly.otherMonthly;

    const firstYearTotal = totalOneTime + totalMonthly * 12;

    // Monthly runway
    const monthlyRunway = totalMonthly > 0
      ? Math.floor((financial.currentSavings - totalOneTime) / totalMonthly)
      : financial.currentSavings > totalOneTime ? 99 : 0;

    // Expected monthly income in first 3 months
    const monthlyIncomeEst = financial.expectedHourlyRate * financial.estimatedBillableHoursPerWeek * 4.33;

    // Break-even: month when cumulative income >= cumulative costs
    // Month 1: assume 25% utilisation, Month 2: 50%, Month 3+: user-entered hours
    const breakEvenMonth = (() => {
      let cumulativeCost = totalOneTime;
      let cumulativeIncome = 0;
      for (let m = 1; m <= 24; m++) {
        cumulativeCost += totalMonthly;
        const utilizationRamp = m === 1 ? 0.25 : m === 2 ? 0.5 : m === 3 ? 0.75 : 1;
        cumulativeIncome += monthlyIncomeEst * utilizationRamp;
        if (cumulativeIncome >= cumulativeCost) return m;
      }
      return 24; // More than 24 months
    })();

    // Income needed in month 1 to cover ongoing costs
    const incomeNeededMonth1 = totalMonthly;

    // Minimum viable clients per month (based on rate, hours, and average project size)
    const monthlyCapacityHours = financial.estimatedBillableHoursPerWeek * 4.33;
    const monthlyCapacityRevenue = monthlyCapacityHours * financial.expectedHourlyRate;
    const clientsNeeded = financial.targetMonthlyIncome > 0 && monthlyCapacityRevenue > 0
      ? Math.ceil(financial.targetMonthlyIncome / (financial.expectedHourlyRate * 20))
      : 0;

    // Emergency fund recommendation (3 months expenses + living)
    const emergencyFund = totalMonthly * 3 + financial.targetMonthlyIncome * 3;

    // Cash flow projection (months 1-6)
    const cashFlowProjection = Array.from({ length: 6 }, (_, i) => {
      const month = i + 1;
      const utilizationRamp = month === 1 ? 0.25 : month === 2 ? 0.5 : month === 3 ? 0.75 : 1;
      const income = monthlyIncomeEst * utilizationRamp;
      const expenses = totalMonthly + (month === 1 ? totalOneTime : 0);
      const netCashFlow = income - expenses;
      return { month, income, expenses, netCashFlow };
    });

    // Running balance for cash flow
    let runningBalance = financial.currentSavings;
    const cashFlowWithBalance = cashFlowProjection.map((row) => {
      runningBalance += row.netCashFlow;
      return { ...row, balance: runningBalance };
    });

    // Monthly cost breakdown for bar visualisation
    const monthlyBreakdown = [
      { label: 'Software', value: monthly.softwareSubscriptions, color: 'bg-teal-500' },
      { label: 'Phone & Internet', value: monthly.phoneInternet, color: 'bg-blue-500' },
      { label: 'Coworking', value: monthly.coworkingOffice, color: 'bg-purple-500' },
      { label: 'Insurance', value: monthly.insurance, color: 'bg-amber-500' },
      { label: 'Accounting', value: monthly.accountingBookkeeping, color: 'bg-emerald-500' },
      { label: 'Marketing', value: monthly.marketingAdvertising, color: 'bg-rose-500' },
      { label: 'Hosting', value: monthly.domainHostingMonthly, color: 'bg-cyan-500' },
      { label: 'Memberships', value: monthly.professionalMemberships, color: 'bg-indigo-500' },
      { label: 'Other', value: monthly.otherMonthly, color: 'bg-slate-500' },
    ].filter((item) => item.value > 0);

    // Smart recommendations
    const recommendations: string[] = [];
    if (monthly.coworkingOffice > 0) {
      recommendations.push(
        `Working from home instead of a coworking space could save you ${formatCurrency(monthly.coworkingOffice)}/mo (${formatCurrency(monthly.coworkingOffice * 12)}/yr).`
      );
    }
    if (monthly.softwareSubscriptions > 100) {
      recommendations.push(
        'Consider free alternatives for non-essential software in your first 3 months. Many tools offer free tiers that cover basic needs.'
      );
    }
    if (oneTime.websiteSetup > 1000) {
      recommendations.push(
        'Consider starting with a simple one-page site or strong LinkedIn profile. You can invest in a premium website once you have steady income.'
      );
    }
    if (oneTime.brandingLogo > 500) {
      recommendations.push(
        'Professional branding can wait. Start with a clean, minimal design and invest in branding once you have 3-6 months of consistent revenue.'
      );
    }
    if (monthlyRunway < 3) {
      recommendations.push(
        'Your runway is under 3 months. Consider reducing non-essential costs or building more savings before going full-time freelance.'
      );
    }
    if (financial.estimatedBillableHoursPerWeek < 10) {
      recommendations.push(
        'At less than 10 billable hours per week, reaching your income target will be difficult. Consider whether you can increase client work or reduce your target.'
      );
    }
    if (monthly.insurance === 0) {
      recommendations.push(
        'Professional indemnity insurance is strongly recommended for freelancers. Even a basic policy from $30/mo protects you from client claims.'
      );
    }
    if (recommendations.length === 0) {
      recommendations.push(
        'Your startup plan looks solid. Focus on landing your first 2-3 clients and delivering exceptional work to build referrals.'
      );
    }

    return {
      totalOneTime,
      totalMonthly,
      firstYearTotal,
      monthlyRunway: Math.max(0, monthlyRunway),
      monthlyIncomeEst,
      breakEvenMonth,
      incomeNeededMonth1,
      clientsNeeded,
      emergencyFund,
      cashFlowWithBalance,
      monthlyBreakdown,
      recommendations,
    };
  }, [oneTime, monthly, financial]);

  /* ---- Copy to clipboard ---- */

  const handleCopy = useCallback(() => {
    const divider = '========================================';
    const sectionDivider = '----------------------------------------';
    const lines: string[] = [];

    lines.push(divider);
    lines.push('  FREELANCE STARTUP COST PLAN');
    lines.push(divider);
    lines.push('');
    lines.push(`Business Type: ${businessType}`);
    lines.push(`Date: ${new Date().toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' })}`);
    lines.push('');
    lines.push('ONE-TIME COSTS');
    lines.push(sectionDivider);
    if (oneTime.abnRegistration > 0) lines.push(`  ABN Registration:            ${formatCurrency(oneTime.abnRegistration)}`);
    else lines.push(`  ABN Registration:            $0 (Free)`);
    lines.push(`  Business Name Registration:  ${formatCurrency(oneTime.businessNameRegistration)}`);
    lines.push(`  Domain Name:                 ${formatCurrency(oneTime.domainName)}`);
    lines.push(`  Website Setup:               ${formatCurrency(oneTime.websiteSetup)}`);
    lines.push(`  Equipment:                   ${formatCurrency(oneTime.equipment)}`);
    lines.push(`  Software Licences:           ${formatCurrency(oneTime.softwareLicences)}`);
    lines.push(`  Professional Development:    ${formatCurrency(oneTime.professionalDevelopment)}`);
    lines.push(`  Branding & Logo:             ${formatCurrency(oneTime.brandingLogo)}`);
    if (oneTime.photographyEquipment > 0) lines.push(`  Photography Equipment:       ${formatCurrency(oneTime.photographyEquipment)}`);
    lines.push(`  Legal:                       ${formatCurrency(oneTime.legal)}`);
    if (oneTime.insuranceSetup > 0) lines.push(`  Insurance Setup:             ${formatCurrency(oneTime.insuranceSetup)}`);
    if (oneTime.otherOneTime > 0) lines.push(`  Other:                       ${formatCurrency(oneTime.otherOneTime)}`);
    lines.push(`  TOTAL ONE-TIME:              ${formatCurrency(results.totalOneTime)}`);
    lines.push('');
    lines.push('MONTHLY ONGOING COSTS');
    lines.push(sectionDivider);
    lines.push(`  Software Subscriptions:      ${formatCurrency(monthly.softwareSubscriptions)}`);
    lines.push(`  Phone & Internet:            ${formatCurrency(monthly.phoneInternet)}`);
    if (monthly.coworkingOffice > 0) lines.push(`  Coworking/Office:            ${formatCurrency(monthly.coworkingOffice)}`);
    lines.push(`  Insurance:                   ${formatCurrency(monthly.insurance)}`);
    lines.push(`  Accounting/Bookkeeping:      ${formatCurrency(monthly.accountingBookkeeping)}`);
    lines.push(`  Marketing & Advertising:     ${formatCurrency(monthly.marketingAdvertising)}`);
    lines.push(`  Domain & Hosting:            ${formatCurrency(monthly.domainHostingMonthly)}`);
    if (monthly.professionalMemberships > 0) lines.push(`  Professional Memberships:    ${formatCurrency(monthly.professionalMemberships)}`);
    if (monthly.otherMonthly > 0) lines.push(`  Other:                       ${formatCurrency(monthly.otherMonthly)}`);
    lines.push(`  TOTAL MONTHLY:               ${formatCurrency(results.totalMonthly)}`);
    lines.push('');
    lines.push('FINANCIAL SUMMARY');
    lines.push(sectionDivider);
    lines.push(`  First Year Total Investment: ${formatCurrency(results.firstYearTotal)}`);
    lines.push(`  Monthly Runway:              ${results.monthlyRunway} months`);
    lines.push(`  Break-Even Month:            Month ${results.breakEvenMonth}`);
    lines.push(`  Emergency Fund Needed:       ${formatCurrency(results.emergencyFund)}`);
    lines.push('');
    lines.push('CASH FLOW PROJECTION (6 MONTHS)');
    lines.push(sectionDivider);
    results.cashFlowWithBalance.forEach((row) => {
      lines.push(`  Month ${row.month}: Income ${formatCurrency(row.income)} | Expenses ${formatCurrency(row.expenses)} | Balance ${formatCurrency(row.balance)}`);
    });
    lines.push('');
    lines.push('RECOMMENDATIONS');
    lines.push(sectionDivider);
    results.recommendations.forEach((r) => lines.push(`  - ${r}`));
    lines.push('');
    lines.push(divider);
    lines.push('');
    lines.push('Generated by InvoiceFlow — invoiceflow.au/tools/startup-cost-calculator');

    navigator.clipboard.writeText(lines.join('\n')).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  }, [businessType, oneTime, monthly, results]);

  /* ---- Styling ---- */

  const inputClass =
    'w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500/50 transition-all text-sm';
  const labelClass = 'block text-xs font-medium text-slate-400 mb-1.5';
  const selectStyle = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2394a3b8'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 12px center',
    backgroundSize: '16px',
  };

  const tabClass = (active: boolean) =>
    `px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
      active
        ? 'bg-gradient-to-r from-teal-500 to-blue-500 text-white'
        : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
    }`;

  return (
    <div className="space-y-8">
      {/* Business Type Selector */}
      <div className="glass rounded-2xl p-6">
        <h3 className="text-lg font-bold text-white heading-font mb-4">Select Your Business Type</h3>
        <p className="text-sm text-slate-400 mb-4">
          Choose your profession to pre-fill typical Australian startup costs. You can adjust every value.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {BUSINESS_TYPES.map((bt) => (
            <button
              key={bt}
              onClick={() => applyPreset(bt)}
              className={`px-3 py-3 rounded-xl border text-sm font-medium transition-all ${
                businessType === bt
                  ? 'bg-teal-500/10 border-teal-500/30 text-teal-400'
                  : 'bg-white/5 border-white/10 text-slate-400 hover:border-white/20 hover:text-white'
              }`}
            >
              {bt}
            </button>
          ))}
        </div>
      </div>

      {/* Tabbed Input Sections */}
      <div className="glass rounded-2xl p-6">
        <div className="flex flex-wrap gap-2 mb-6">
          <button className={tabClass(activeSection === 'oneTime')} onClick={() => setActiveSection('oneTime')}>
            One-Time Costs
          </button>
          <button className={tabClass(activeSection === 'monthly')} onClick={() => setActiveSection('monthly')}>
            Monthly Costs
          </button>
          <button className={tabClass(activeSection === 'financial')} onClick={() => setActiveSection('financial')}>
            Financial Planning
          </button>
        </div>

        {/* One-Time Costs */}
        {activeSection === 'oneTime' && (
          <div className="space-y-1">
            <h4 className="text-white font-semibold text-sm mb-4">One-Time Setup Costs</h4>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>ABN Registration</label>
                <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-emerald-400 font-semibold text-sm">
                  $0 (Free)
                </div>
                <p className="text-xs text-slate-600 mt-1">Register at abr.gov.au in 10 minutes</p>
              </div>
              <div>
                <label className={labelClass}>Business Name Registration (ASIC)</label>
                <input
                  type="number"
                  value={oneTime.businessNameRegistration || ''}
                  onChange={(e) => updateOneTime('businessNameRegistration', Math.max(0, parseInt(e.target.value) || 0))}
                  className={inputClass}
                  placeholder="39"
                  min="0"
                />
              </div>
              <div>
                <label className={labelClass}>Domain Name</label>
                <input
                  type="number"
                  value={oneTime.domainName || ''}
                  onChange={(e) => updateOneTime('domainName', Math.max(0, parseInt(e.target.value) || 0))}
                  className={inputClass}
                  placeholder="25"
                  min="0"
                />
              </div>
              <div>
                <label className={labelClass}>Website Setup</label>
                <input
                  type="number"
                  value={oneTime.websiteSetup || ''}
                  onChange={(e) => updateOneTime('websiteSetup', Math.max(0, parseInt(e.target.value) || 0))}
                  className={inputClass}
                  placeholder="0"
                  min="0"
                />
              </div>
              <div>
                <label className={labelClass}>Equipment (laptop, monitor, peripherals)</label>
                <input
                  type="number"
                  value={oneTime.equipment || ''}
                  onChange={(e) => updateOneTime('equipment', Math.max(0, parseInt(e.target.value) || 0))}
                  className={inputClass}
                  placeholder="2000"
                  min="0"
                />
              </div>
              <div>
                <label className={labelClass}>Software Licences (one-time)</label>
                <input
                  type="number"
                  value={oneTime.softwareLicences || ''}
                  onChange={(e) => updateOneTime('softwareLicences', Math.max(0, parseInt(e.target.value) || 0))}
                  className={inputClass}
                  placeholder="0"
                  min="0"
                />
              </div>
              <div>
                <label className={labelClass}>Professional Development / Courses</label>
                <input
                  type="number"
                  value={oneTime.professionalDevelopment || ''}
                  onChange={(e) => updateOneTime('professionalDevelopment', Math.max(0, parseInt(e.target.value) || 0))}
                  className={inputClass}
                  placeholder="500"
                  min="0"
                />
              </div>
              <div>
                <label className={labelClass}>Branding &amp; Logo Design</label>
                <input
                  type="number"
                  value={oneTime.brandingLogo || ''}
                  onChange={(e) => updateOneTime('brandingLogo', Math.max(0, parseInt(e.target.value) || 0))}
                  className={inputClass}
                  placeholder="300"
                  min="0"
                />
              </div>
              {(businessType === 'Photographer' || oneTime.photographyEquipment > 0) && (
                <div>
                  <label className={labelClass}>Photography Equipment</label>
                  <input
                    type="number"
                    value={oneTime.photographyEquipment || ''}
                    onChange={(e) => updateOneTime('photographyEquipment', Math.max(0, parseInt(e.target.value) || 0))}
                    className={inputClass}
                    placeholder="5000"
                    min="0"
                  />
                </div>
              )}
              <div>
                <label className={labelClass}>Legal (contracts, business structure advice)</label>
                <input
                  type="number"
                  value={oneTime.legal || ''}
                  onChange={(e) => updateOneTime('legal', Math.max(0, parseInt(e.target.value) || 0))}
                  className={inputClass}
                  placeholder="500"
                  min="0"
                />
              </div>
              <div>
                <label className={labelClass}>Insurance Setup Fees</label>
                <input
                  type="number"
                  value={oneTime.insuranceSetup || ''}
                  onChange={(e) => updateOneTime('insuranceSetup', Math.max(0, parseInt(e.target.value) || 0))}
                  className={inputClass}
                  placeholder="0"
                  min="0"
                />
              </div>
              <div>
                <label className={labelClass}>Other One-Time Costs</label>
                <input
                  type="number"
                  value={oneTime.otherOneTime || ''}
                  onChange={(e) => updateOneTime('otherOneTime', Math.max(0, parseInt(e.target.value) || 0))}
                  className={inputClass}
                  placeholder="0"
                  min="0"
                />
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-sm font-medium text-slate-300">Total One-Time Costs</span>
              <span className="text-xl font-bold text-white">{formatCurrency(results.totalOneTime)}</span>
            </div>
          </div>
        )}

        {/* Monthly Ongoing Costs */}
        {activeSection === 'monthly' && (
          <div className="space-y-1">
            <h4 className="text-white font-semibold text-sm mb-4">Monthly Ongoing Costs</h4>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Software Subscriptions</label>
                <input
                  type="number"
                  value={monthly.softwareSubscriptions || ''}
                  onChange={(e) => updateMonthly('softwareSubscriptions', Math.max(0, parseInt(e.target.value) || 0))}
                  className={inputClass}
                  placeholder="80"
                  min="0"
                />
                <p className="text-xs text-slate-600 mt-1">
                  {businessType === 'Designer' ? 'e.g., Adobe CC, Figma, Canva Pro' :
                   businessType === 'Web Developer' ? 'e.g., GitHub, Vercel, JetBrains' :
                   businessType === 'Writer/Copywriter' ? 'e.g., Grammarly, SEMrush, Google Workspace' :
                   businessType === 'Photographer' ? 'e.g., Lightroom, cloud storage' :
                   'e.g., project management, cloud tools'}
                </p>
              </div>
              <div>
                <label className={labelClass}>Phone &amp; Internet</label>
                <input
                  type="number"
                  value={monthly.phoneInternet || ''}
                  onChange={(e) => updateMonthly('phoneInternet', Math.max(0, parseInt(e.target.value) || 0))}
                  className={inputClass}
                  placeholder="90"
                  min="0"
                />
              </div>
              <div>
                <label className={labelClass}>Coworking / Office Space</label>
                <input
                  type="number"
                  value={monthly.coworkingOffice || ''}
                  onChange={(e) => updateMonthly('coworkingOffice', Math.max(0, parseInt(e.target.value) || 0))}
                  className={inputClass}
                  placeholder="0"
                  min="0"
                />
              </div>
              <div>
                <label className={labelClass}>Insurance (professional indemnity, public liability)</label>
                <input
                  type="number"
                  value={monthly.insurance || ''}
                  onChange={(e) => updateMonthly('insurance', Math.max(0, parseInt(e.target.value) || 0))}
                  className={inputClass}
                  placeholder="50"
                  min="0"
                />
              </div>
              <div>
                <label className={labelClass}>Accounting / Bookkeeping</label>
                <input
                  type="number"
                  value={monthly.accountingBookkeeping || ''}
                  onChange={(e) => updateMonthly('accountingBookkeeping', Math.max(0, parseInt(e.target.value) || 0))}
                  className={inputClass}
                  placeholder="80"
                  min="0"
                />
              </div>
              <div>
                <label className={labelClass}>Marketing &amp; Advertising</label>
                <input
                  type="number"
                  value={monthly.marketingAdvertising || ''}
                  onChange={(e) => updateMonthly('marketingAdvertising', Math.max(0, parseInt(e.target.value) || 0))}
                  className={inputClass}
                  placeholder="50"
                  min="0"
                />
              </div>
              <div>
                <label className={labelClass}>Domain &amp; Hosting Renewals (monthly equiv)</label>
                <input
                  type="number"
                  value={monthly.domainHostingMonthly || ''}
                  onChange={(e) => updateMonthly('domainHostingMonthly', Math.max(0, parseInt(e.target.value) || 0))}
                  className={inputClass}
                  placeholder="15"
                  min="0"
                />
              </div>
              <div>
                <label className={labelClass}>Professional Memberships</label>
                <input
                  type="number"
                  value={monthly.professionalMemberships || ''}
                  onChange={(e) => updateMonthly('professionalMemberships', Math.max(0, parseInt(e.target.value) || 0))}
                  className={inputClass}
                  placeholder="0"
                  min="0"
                />
              </div>
              <div>
                <label className={labelClass}>Other Monthly Costs</label>
                <input
                  type="number"
                  value={monthly.otherMonthly || ''}
                  onChange={(e) => updateMonthly('otherMonthly', Math.max(0, parseInt(e.target.value) || 0))}
                  className={inputClass}
                  placeholder="0"
                  min="0"
                />
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-sm font-medium text-slate-300">Total Monthly Costs</span>
              <span className="text-xl font-bold text-white">{formatCurrency(results.totalMonthly)}/mo</span>
            </div>
          </div>
        )}

        {/* Financial Planning */}
        {activeSection === 'financial' && (
          <div className="space-y-1">
            <h4 className="text-white font-semibold text-sm mb-4">Financial Planning</h4>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Current Savings / Investment Budget ($)</label>
                <input
                  type="number"
                  value={financial.currentSavings || ''}
                  onChange={(e) => updateFinancial('currentSavings', Math.max(0, parseInt(e.target.value) || 0))}
                  className={inputClass}
                  placeholder="10000"
                  min="0"
                  step="1000"
                />
              </div>
              <div>
                <label className={labelClass}>Target Monthly Income ($)</label>
                <input
                  type="number"
                  value={financial.targetMonthlyIncome || ''}
                  onChange={(e) => updateFinancial('targetMonthlyIncome', Math.max(0, parseInt(e.target.value) || 0))}
                  className={inputClass}
                  placeholder="8000"
                  min="0"
                  step="500"
                />
              </div>
              <div>
                <label className={labelClass}>Expected Hourly Rate ($)</label>
                <input
                  type="number"
                  value={financial.expectedHourlyRate || ''}
                  onChange={(e) => updateFinancial('expectedHourlyRate', Math.max(0, parseInt(e.target.value) || 0))}
                  className={inputClass}
                  placeholder="120"
                  min="0"
                  step="5"
                />
              </div>
              <div>
                <label className={labelClass}>Estimated Billable Hours/Week (first 3 months)</label>
                <input
                  type="number"
                  value={financial.estimatedBillableHoursPerWeek || ''}
                  onChange={(e) => updateFinancial('estimatedBillableHoursPerWeek', Math.max(0, parseInt(e.target.value) || 0))}
                  className={inputClass}
                  placeholder="15"
                  min="0"
                  max="60"
                />
                <p className="text-xs text-slate-600 mt-1">
                  New freelancers typically achieve 10-20 billable hours/week in the first 3 months
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ---- Results Section ---- */}

      {/* Investment Summary Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="glass rounded-xl p-4 text-center">
          <p className="text-xs text-slate-400 mb-1">One-Time Costs</p>
          <p className="text-xl font-bold text-white">{formatCurrency(results.totalOneTime)}</p>
          <p className="text-xs text-slate-500 mt-0.5">Setup investment</p>
        </div>
        <div className="glass rounded-xl p-4 text-center">
          <p className="text-xs text-slate-400 mb-1">Monthly Costs</p>
          <p className="text-xl font-bold text-white">{formatCurrency(results.totalMonthly)}</p>
          <p className="text-xs text-slate-500 mt-0.5">Ongoing per month</p>
        </div>
        <div className="glass rounded-xl p-4 text-center">
          <p className="text-xs text-slate-400 mb-1">First Year Total</p>
          <p className="text-xl font-bold text-teal-400">{formatCurrency(results.firstYearTotal)}</p>
          <p className="text-xs text-slate-500 mt-0.5">One-time + 12 months</p>
        </div>
        <div className="glass rounded-xl p-4 text-center">
          <p className="text-xs text-slate-400 mb-1">Monthly Runway</p>
          <p className={`text-xl font-bold ${
            results.monthlyRunway >= 6 ? 'text-emerald-400' :
            results.monthlyRunway >= 3 ? 'text-amber-400' :
            'text-rose-400'
          }`}>
            {results.monthlyRunway >= 99 ? '99+' : results.monthlyRunway} months
          </p>
          <p className="text-xs text-slate-500 mt-0.5">Before savings run out</p>
        </div>
      </div>

      {/* Break-Even & Key Metrics */}
      <div className="glass rounded-2xl p-6">
        <h3 className="text-lg font-bold text-white heading-font mb-4">Key Financial Metrics</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-white/5 rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-slate-300">Break-Even Point</span>
              <span className={`text-sm font-bold ${
                results.breakEvenMonth <= 3 ? 'text-emerald-400' :
                results.breakEvenMonth <= 6 ? 'text-amber-400' :
                'text-rose-400'
              }`}>
                Month {results.breakEvenMonth}
              </span>
            </div>
            <div className="w-full bg-white/5 rounded-full h-3 overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-500 ${
                  results.breakEvenMonth <= 3 ? 'bg-emerald-500' :
                  results.breakEvenMonth <= 6 ? 'bg-amber-500' :
                  'bg-rose-500'
                }`}
                style={{ width: `${Math.min((results.breakEvenMonth / 12) * 100, 100)}%` }}
              />
            </div>
            <div className="flex justify-between text-xs text-slate-600 mt-1">
              <span>Month 1</span>
              <span>Month 6</span>
              <span>Month 12</span>
            </div>
          </div>
          <div className="bg-white/5 rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-slate-300">Runway</span>
              <span className={`text-sm font-bold ${
                results.monthlyRunway >= 6 ? 'text-emerald-400' :
                results.monthlyRunway >= 3 ? 'text-amber-400' :
                'text-rose-400'
              }`}>
                {results.monthlyRunway >= 99 ? '99+' : results.monthlyRunway} months
              </span>
            </div>
            <div className="w-full bg-white/5 rounded-full h-3 overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-500 ${
                  results.monthlyRunway >= 6 ? 'bg-emerald-500' :
                  results.monthlyRunway >= 3 ? 'bg-amber-500' :
                  'bg-rose-500'
                }`}
                style={{ width: `${Math.min((results.monthlyRunway / 12) * 100, 100)}%` }}
              />
            </div>
            <div className="flex justify-between text-xs text-slate-600 mt-1">
              <span>0 months</span>
              <span>6 months</span>
              <span>12+ months</span>
            </div>
          </div>
          <div className="bg-white/5 rounded-xl p-4 flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-300">Income Needed Month 1</p>
              <p className="text-xs text-slate-500">To cover ongoing costs</p>
            </div>
            <p className="text-lg font-bold text-white">{formatCurrency(results.incomeNeededMonth1)}</p>
          </div>
          <div className="bg-white/5 rounded-xl p-4 flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-300">Clients Needed</p>
              <p className="text-xs text-slate-500">~20hr projects at your rate</p>
            </div>
            <p className="text-lg font-bold text-teal-400">{results.clientsNeeded}/mo</p>
          </div>
          <div className="bg-white/5 rounded-xl p-4 flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-300">Est. Monthly Income (full ramp)</p>
              <p className="text-xs text-slate-500">At {financial.estimatedBillableHoursPerWeek}hrs/wk, {formatCurrency(financial.expectedHourlyRate)}/hr</p>
            </div>
            <p className="text-lg font-bold text-white">{formatCurrency(results.monthlyIncomeEst)}</p>
          </div>
          <div className="bg-white/5 rounded-xl p-4 flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-300">Emergency Fund Target</p>
              <p className="text-xs text-slate-500">3 months expenses + income</p>
            </div>
            <p className="text-lg font-bold text-amber-400">{formatCurrency(results.emergencyFund)}</p>
          </div>
        </div>
      </div>

      {/* Monthly Cost Breakdown Bar Chart */}
      {results.monthlyBreakdown.length > 0 && (
        <div className="glass rounded-2xl p-6">
          <h3 className="text-lg font-bold text-white heading-font mb-4">Monthly Cost Breakdown</h3>
          <div className="space-y-3">
            {results.monthlyBreakdown.map((item) => {
              const maxVal = Math.max(...results.monthlyBreakdown.map((b) => b.value), 1);
              const barWidth = (item.value / maxVal) * 100;
              return (
                <div key={item.label} className="flex items-center gap-4">
                  <span className="text-sm text-slate-300 w-28 sm:w-32 shrink-0 truncate">{item.label}</span>
                  <div className="flex-1 bg-white/5 rounded-full h-7 overflow-hidden relative">
                    <div
                      className={`h-full rounded-full flex items-center justify-end pr-3 ${item.color}`}
                      style={{ width: `${Math.max(barWidth, 18)}%`, opacity: 0.8 }}
                    >
                      <span className="text-xs font-medium text-white whitespace-nowrap">
                        {formatCurrency(item.value)}/mo
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
            <span className="text-sm font-medium text-slate-400">Total Monthly</span>
            <span className="text-lg font-bold text-white">{formatCurrency(results.totalMonthly)}/mo</span>
          </div>
        </div>
      )}

      {/* Cash Flow Projection */}
      <div className="glass rounded-2xl p-6">
        <h3 className="text-lg font-bold text-white heading-font mb-2">6-Month Cash Flow Projection</h3>
        <p className="text-xs text-slate-500 mb-4">
          Assumes 25% utilisation in month 1, 50% in month 2, 75% in month 3, then full capacity.
          One-time costs are paid in month 1.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left text-slate-400 py-3 pr-4 font-medium text-xs">Month</th>
                <th className="text-right text-slate-400 py-3 pr-4 font-medium text-xs">Income</th>
                <th className="text-right text-slate-400 py-3 pr-4 font-medium text-xs">Expenses</th>
                <th className="text-right text-slate-400 py-3 pr-4 font-medium text-xs">Net</th>
                <th className="text-right text-slate-400 py-3 font-medium text-xs">Balance</th>
              </tr>
            </thead>
            <tbody>
              {/* Starting row */}
              <tr className="border-b border-white/5">
                <td className="py-3 pr-4 text-slate-500 text-xs">Starting</td>
                <td className="py-3 pr-4 text-right font-mono text-slate-500">--</td>
                <td className="py-3 pr-4 text-right font-mono text-slate-500">--</td>
                <td className="py-3 pr-4 text-right font-mono text-slate-500">--</td>
                <td className="py-3 text-right font-mono text-white font-semibold">{formatCurrency(financial.currentSavings)}</td>
              </tr>
              {results.cashFlowWithBalance.map((row) => (
                <tr key={row.month} className="border-b border-white/5">
                  <td className="py-3 pr-4 text-white">Month {row.month}</td>
                  <td className="py-3 pr-4 text-right font-mono text-emerald-400">{formatCurrency(row.income)}</td>
                  <td className="py-3 pr-4 text-right font-mono text-rose-400">-{formatCurrency(row.expenses)}</td>
                  <td className={`py-3 pr-4 text-right font-mono font-semibold ${row.netCashFlow >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                    {row.netCashFlow >= 0 ? '+' : ''}{formatCurrency(row.netCashFlow)}
                  </td>
                  <td className={`py-3 text-right font-mono font-semibold ${row.balance >= 0 ? 'text-white' : 'text-rose-400'}`}>
                    {formatCurrency(row.balance)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Balance visualisation */}
        <div className="mt-6">
          <p className="text-xs text-slate-500 mb-3">Balance trend</p>
          <div className="flex items-end gap-2 h-24">
            {/* Starting balance bar */}
            {(() => {
              const allBalances = [financial.currentSavings, ...results.cashFlowWithBalance.map((r) => r.balance)];
              const maxAbs = Math.max(...allBalances.map(Math.abs), 1);
              return allBalances.map((bal, i) => {
                const height = Math.max((Math.abs(bal) / maxAbs) * 100, 4);
                const isNegative = bal < 0;
                return (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1">
                    <div
                      className={`w-full rounded-t-md transition-all ${
                        isNegative ? 'bg-rose-500/60' : i === 0 ? 'bg-slate-500/60' : 'bg-teal-500/60'
                      }`}
                      style={{ height: `${height}%` }}
                    />
                    <span className="text-[10px] text-slate-600">
                      {i === 0 ? 'Start' : `M${i}`}
                    </span>
                  </div>
                );
              });
            })()}
          </div>
        </div>
      </div>

      {/* Smart Recommendations */}
      <div className="glass rounded-2xl p-6 border border-teal-500/20 bg-teal-500/5">
        <h3 className="text-lg font-bold text-white heading-font mb-4">
          <span className="text-teal-400">Smart</span> Recommendations
        </h3>
        <div className="space-y-3">
          {results.recommendations.map((rec, i) => (
            <div key={i} className="flex items-start gap-3 bg-white/5 rounded-xl p-4">
              <div className="w-6 h-6 rounded-full bg-teal-500/20 flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-teal-400 text-xs font-bold">{i + 1}</span>
              </div>
              <p className="text-sm text-slate-300">{rec}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Copy Button */}
      <div className="flex justify-center">
        <button
          onClick={handleCopy}
          className="px-6 py-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-500/30 transition-all text-white font-medium"
        >
          {copied ? 'Copied to Clipboard!' : 'Copy Startup Cost Plan to Clipboard'}
        </button>
      </div>

      {/* Related Tools */}
      <div className="glass rounded-2xl p-6">
        <h3 className="text-lg font-bold text-white heading-font mb-4">Related Tools</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <a href="/tools/rate-calculator" className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-500/30 rounded-xl p-4 transition-all group">
            <p className="text-white font-medium text-sm group-hover:text-teal-400 transition-colors">Rate Calculator</p>
            <p className="text-xs text-slate-500 mt-1">Calculate your ideal freelance hourly rate</p>
          </a>
          <a href="/tools/break-even-calculator" className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-500/30 rounded-xl p-4 transition-all group">
            <p className="text-white font-medium text-sm group-hover:text-teal-400 transition-colors">Break-Even Calculator</p>
            <p className="text-xs text-slate-500 mt-1">Find how many projects to cover your costs</p>
          </a>
          <a href="/tools/cashflow-forecast" className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-500/30 rounded-xl p-4 transition-all group">
            <p className="text-white font-medium text-sm group-hover:text-teal-400 transition-colors">Cash Flow Forecast</p>
            <p className="text-xs text-slate-500 mt-1">Project your finances over 3-12 months</p>
          </a>
          <a href="/tools/insurance-cost-estimator" className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-500/30 rounded-xl p-4 transition-all group">
            <p className="text-white font-medium text-sm group-hover:text-teal-400 transition-colors">Insurance Cost Estimator</p>
            <p className="text-xs text-slate-500 mt-1">Estimate your freelance insurance costs</p>
          </a>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="text-center">
        <p className="text-xs text-slate-500 max-w-2xl mx-auto">
          This calculator provides estimates based on typical Australian freelance startup costs. Actual
          costs vary by location, supplier, and individual circumstances. ABN registration is free through
          the ATO. Business name registration fees are set by ASIC. Consult a registered tax agent for
          advice on tax deductions for startup expenses.
        </p>
      </div>
    </div>
  );
}
