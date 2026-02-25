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

function formatPercent(value: number): string {
  return `${value.toFixed(1)}%`;
}

/** 2024-25 ATO individual income tax */
function calculateIncomeTax(taxableIncome: number): number {
  if (taxableIncome <= 18200) return 0;
  if (taxableIncome <= 45000) return (taxableIncome - 18200) * 0.16;
  if (taxableIncome <= 135000) return 4288 + (taxableIncome - 45000) * 0.30;
  if (taxableIncome <= 190000) return 31288 + (taxableIncome - 135000) * 0.37;
  return 51638 + (taxableIncome - 190000) * 0.45;
}

const MEDICARE_LEVY_RATE = 0.02;
const COMPANY_TAX_RATE = 0.25;

/* ---- Structure result types ---- */

interface StructureResult {
  label: string;
  totalTax: number;
  effectiveRate: number;
  takeHome: number;
  complianceCost: number;
  netAfterCompliance: number;
}

/* ---- Component ---- */

export default function BusinessStructureCalculator() {
  // Inputs
  const [revenue, setRevenue] = useState(150000);
  const [expenses, setExpenses] = useState(20000);
  const [salary, setSalary] = useState(80000);
  const [beneficiaries, setBeneficiaries] = useState(2);
  const [hasSpouse, setHasSpouse] = useState(true);
  const [gstRegistered, setGstRegistered] = useState(true);
  const [privateHealth, setPrivateHealth] = useState(false);
  const [helpDebt, setHelpDebt] = useState(false);
  const [copied, setCopied] = useState(false);

  const taxableProfit = Math.max(0, revenue - expenses);

  // HELP/HECS repayment calculation (2024-25 approximate thresholds)
  const calculateHelpRepayment = useCallback((income: number): number => {
    if (!helpDebt) return 0;
    if (income <= 54435) return 0;
    if (income <= 62850) return income * 0.01;
    if (income <= 66620) return income * 0.02;
    if (income <= 70618) return income * 0.025;
    if (income <= 74855) return income * 0.03;
    if (income <= 79346) return income * 0.035;
    if (income <= 84107) return income * 0.04;
    if (income <= 89154) return income * 0.045;
    if (income <= 94503) return income * 0.05;
    if (income <= 100174) return income * 0.055;
    if (income <= 106185) return income * 0.06;
    if (income <= 112556) return income * 0.065;
    if (income <= 119309) return income * 0.07;
    if (income <= 126467) return income * 0.075;
    if (income <= 134056) return income * 0.08;
    if (income <= 142100) return income * 0.085;
    if (income <= 150626) return income * 0.09;
    if (income <= 159663) return income * 0.095;
    return income * 0.10;
  }, [helpDebt]);

  // Medicare levy surcharge for no private health
  const calculateMLS = useCallback((income: number): number => {
    if (privateHealth) return 0;
    if (income <= 97000) return 0;
    if (income <= 113000) return income * 0.01;
    if (income <= 151000) return income * 0.0125;
    return income * 0.015;
  }, [privateHealth]);

  const results = useMemo(() => {
    /* ========== SOLE TRADER ========== */
    const stTaxableIncome = taxableProfit;
    const stIncomeTax = calculateIncomeTax(stTaxableIncome);
    const stMedicare = stTaxableIncome * MEDICARE_LEVY_RATE;
    const stMLS = calculateMLS(stTaxableIncome);
    const stHelp = calculateHelpRepayment(stTaxableIncome);
    const stTotalTax = stIncomeTax + stMedicare + stMLS + stHelp;
    const stEffective = stTaxableIncome > 0 ? (stTotalTax / stTaxableIncome) * 100 : 0;
    const stTakeHome = taxableProfit - stTotalTax;
    const stComplianceCost = 1800; // mid-range for sole trader

    /* ========== COMPANY (Pty Ltd) ========== */
    // Company pays flat 25% on profits
    // Director takes a salary (deductible expense for company)
    const companySalary = Math.min(salary, taxableProfit);
    const companyProfit = Math.max(0, taxableProfit - companySalary);
    const companyTax = companyProfit * COMPANY_TAX_RATE;
    const companyRetained = companyProfit - companyTax;

    // Franking credits: company tax paid = credit on dividends
    // Gross-up dividend = companyRetained / (1 - 0.25) = companyRetained / 0.75
    // Franking credit = grossUpDividend - companyRetained = companyRetained * (0.25 / 0.75)
    const grossUpDividend = companyRetained / 0.75;
    const frankingCredit = grossUpDividend - companyRetained;

    // Director's personal tax on salary + grossed-up dividend
    const coPersonalTaxable = companySalary + grossUpDividend;
    const coPersonalIncomeTax = calculateIncomeTax(coPersonalTaxable);
    const coPersonalMedicare = coPersonalTaxable * MEDICARE_LEVY_RATE;
    const coPersonalMLS = calculateMLS(coPersonalTaxable);
    const coPersonalHelp = calculateHelpRepayment(coPersonalTaxable);
    const coPersonalTotalTax = coPersonalIncomeTax + coPersonalMedicare + coPersonalMLS + coPersonalHelp;
    // Apply franking credit offset
    const coPersonalTaxAfterCredit = Math.max(0, coPersonalTotalTax - frankingCredit);

    const coTotalTax = companyTax + coPersonalTaxAfterCredit;
    const coTakeHome = taxableProfit - coTotalTax;
    const coEffective = taxableProfit > 0 ? (coTotalTax / taxableProfit) * 100 : 0;
    const coComplianceCost = 6400; // mid-range for company ($576 setup amortised + $310 ASIC + ~$5500 accounting)

    /* ========== TRUST ========== */
    // Split income across beneficiaries
    const numBeneficiaries = Math.max(1, beneficiaries);
    const incomePerBeneficiary = taxableProfit / numBeneficiaries;

    // If spouse toggle is on and beneficiaries >= 2, assume first beneficiary
    // (the operator) gets more if salary > split amount. Otherwise even split.
    let trustTotalTax = 0;
    if (hasSpouse && numBeneficiaries >= 2) {
      // Optimal split: distribute evenly for maximum tax efficiency
      const perPerson = taxableProfit / numBeneficiaries;
      for (let i = 0; i < numBeneficiaries; i++) {
        const benIncomeTax = calculateIncomeTax(perPerson);
        const benMedicare = perPerson * MEDICARE_LEVY_RATE;
        const benMLS = i === 0 ? calculateMLS(perPerson) : 0; // only primary earner gets MLS
        const benHelp = i === 0 ? calculateHelpRepayment(perPerson) : 0; // only primary earner has HELP
        trustTotalTax += benIncomeTax + benMedicare + benMLS + benHelp;
      }
    } else {
      // Single beneficiary or no spouse — all income to one person
      const benIncomeTax = calculateIncomeTax(incomePerBeneficiary);
      const benMedicare = incomePerBeneficiary * MEDICARE_LEVY_RATE;
      const benMLS = calculateMLS(incomePerBeneficiary);
      const benHelp = calculateHelpRepayment(incomePerBeneficiary);
      trustTotalTax = (benIncomeTax + benMedicare + benMLS + benHelp) * numBeneficiaries;
    }

    const trustTakeHome = taxableProfit - trustTotalTax;
    const trustEffective = taxableProfit > 0 ? (trustTotalTax / taxableProfit) * 100 : 0;
    const trustComplianceCost = 6000; // mid-range for trust ($1,250 setup amortised + ~$4,750 ongoing)

    const structures: StructureResult[] = [
      {
        label: 'Sole Trader',
        totalTax: stTotalTax,
        effectiveRate: stEffective,
        takeHome: stTakeHome,
        complianceCost: stComplianceCost,
        netAfterCompliance: stTakeHome - stComplianceCost,
      },
      {
        label: 'Company (Pty Ltd)',
        totalTax: coTotalTax,
        effectiveRate: coEffective,
        takeHome: coTakeHome,
        complianceCost: coComplianceCost,
        netAfterCompliance: coTakeHome - coComplianceCost,
      },
      {
        label: 'Trust',
        totalTax: trustTotalTax,
        effectiveRate: trustEffective,
        takeHome: trustTakeHome,
        complianceCost: trustComplianceCost,
        netAfterCompliance: trustTakeHome - trustComplianceCost,
      },
    ];

    // Find winner by net after compliance
    const sortedByNet = [...structures].sort((a, b) => b.netAfterCompliance - a.netAfterCompliance);
    const winner = sortedByNet[0];
    const worstNet = sortedByNet[sortedByNet.length - 1];
    const totalSaving = winner.netAfterCompliance - worstNet.netAfterCompliance;

    // Break-even analysis: at what income does company beat sole trader?
    let breakEvenIncome = 0;
    for (let testIncome = 50000; testIncome <= 500000; testIncome += 1000) {
      const stTest = calculateIncomeTax(testIncome) + testIncome * MEDICARE_LEVY_RATE;
      const coSalaryTest = Math.min(salary, testIncome);
      const coProfitTest = Math.max(0, testIncome - coSalaryTest);
      const coTaxTest = coProfitTest * COMPANY_TAX_RATE;
      const coRetainedTest = coProfitTest - coTaxTest;
      const coGrossUpTest = coRetainedTest / 0.75;
      const coFrankingTest = coGrossUpTest - coRetainedTest;
      const coPersonalTaxableTest = coSalaryTest + coGrossUpTest;
      const coPersonalTaxTest = calculateIncomeTax(coPersonalTaxableTest) + coPersonalTaxableTest * MEDICARE_LEVY_RATE;
      const coNetTaxTest = coTaxTest + Math.max(0, coPersonalTaxTest - coFrankingTest);
      const complianceDiff = coComplianceCost - stComplianceCost;
      const taxSaving = stTest - coNetTaxTest;
      if (taxSaving > complianceDiff && breakEvenIncome === 0) {
        breakEvenIncome = testIncome;
      }
    }

    return {
      structures,
      winner,
      worstNet,
      totalSaving,
      breakEvenIncome,
      taxableProfit,
      companySalary,
      companyProfit,
      companyTax,
      companyRetained,
      frankingCredit,
      numBeneficiaries,
    };
  }, [taxableProfit, salary, beneficiaries, hasSpouse, calculateMLS, calculateHelpRepayment]);

  const handleCopy = useCallback(() => {
    if (!results) return;
    const lines = [
      '═══════════════════════════════════════════════',
      '  BUSINESS STRUCTURE COMPARISON — AUSTRALIA',
      '═══════════════════════════════════════════════',
      '',
      `Gross Revenue:       ${formatCurrency(revenue)}`,
      `Business Expenses:   ${formatCurrency(expenses)}`,
      `Taxable Profit:      ${formatCurrency(results.taxableProfit)}`,
      `Planned Salary:      ${formatCurrency(salary)}`,
      `Beneficiaries:       ${beneficiaries}`,
      `Has Spouse:          ${hasSpouse ? 'Yes' : 'No'}`,
      `GST Registered:      ${gstRegistered ? 'Yes' : 'No'}`,
      `Private Health:      ${privateHealth ? 'Yes' : 'No'}`,
      `HELP/HECS Debt:      ${helpDebt ? 'Yes' : 'No'}`,
      '',
      '───────────────────────────────────────────────',
      '',
    ];

    results.structures.forEach((s) => {
      const isWinner = s.label === results.winner.label;
      lines.push(`${s.label}${isWinner ? ' ★ BEST' : ''}`);
      lines.push(`  Total Tax:          ${formatCurrency(s.totalTax)}`);
      lines.push(`  Effective Rate:     ${formatPercent(s.effectiveRate)}`);
      lines.push(`  Take-Home:          ${formatCurrency(s.takeHome)}`);
      lines.push(`  Compliance Cost:    ${formatCurrency(s.complianceCost)}/yr`);
      lines.push(`  Net After Costs:    ${formatCurrency(s.netAfterCompliance)}`);
      lines.push('');
    });

    lines.push('───────────────────────────────────────────────');
    lines.push(`Best Structure: ${results.winner.label}`);
    lines.push(`Annual Saving vs Worst: ${formatCurrency(results.totalSaving)}`);
    if (results.breakEvenIncome > 0) {
      lines.push(`Company Break-Even Income: ${formatCurrency(results.breakEvenIncome)}`);
    }
    lines.push('');
    lines.push('Generated by InvoiceFlow — invoiceflow.au/tools/business-structure-calculator');

    navigator.clipboard.writeText(lines.join('\n'));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [results, revenue, expenses, salary, beneficiaries, hasSpouse, gstRegistered, privateHealth, helpDebt]);

  const getStructureColor = (label: string): string => {
    switch (label) {
      case 'Sole Trader': return 'from-blue-500 to-cyan-400';
      case 'Company (Pty Ltd)': return 'from-violet-500 to-purple-400';
      case 'Trust': return 'from-emerald-500 to-teal-400';
      default: return 'from-teal-500 to-blue-400';
    }
  };

  const getStructureBorderColor = (label: string): string => {
    switch (label) {
      case 'Sole Trader': return 'border-blue-500/30';
      case 'Company (Pty Ltd)': return 'border-violet-500/30';
      case 'Trust': return 'border-emerald-500/30';
      default: return 'border-teal-500/30';
    }
  };

  const getStructureTextColor = (label: string): string => {
    switch (label) {
      case 'Sole Trader': return 'text-cyan-400';
      case 'Company (Pty Ltd)': return 'text-violet-400';
      case 'Trust': return 'text-emerald-400';
      default: return 'text-teal-400';
    }
  };

  const getStructureIcon = (label: string) => {
    switch (label) {
      case 'Sole Trader':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        );
      case 'Company (Pty Ltd)':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        );
      case 'Trust':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        );
      default: return null;
    }
  };

  return (
    <div className="space-y-8">
      {/* Inputs Section */}
      <div className="glass rounded-2xl p-6">
        <h3 className="text-lg font-bold text-white heading-font mb-6">Your Business Details</h3>

        {/* Revenue & Expenses */}
        <div className="grid sm:grid-cols-2 gap-5 mb-5">
          <div>
            <label className="block text-sm text-slate-400 mb-2">Annual Gross Revenue</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg">$</span>
              <input
                type="number"
                value={revenue}
                onChange={(e) => setRevenue(Math.max(0, parseInt(e.target.value) || 0))}
                className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-10 pr-4 text-2xl text-white font-mono placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500/50 transition-all"
                min="0"
                step="5000"
              />
            </div>
            <input
              type="range"
              min="50000"
              max="500000"
              step="5000"
              value={revenue}
              onChange={(e) => setRevenue(parseInt(e.target.value))}
              className="w-full mt-2 accent-teal-500 h-1.5 bg-white/10 rounded-full appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-xs text-slate-600 mt-1">
              <span>$50K</span>
              <span>$500K</span>
            </div>
          </div>
          <div>
            <label className="block text-sm text-slate-400 mb-2">Annual Business Expenses</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg">$</span>
              <input
                type="number"
                value={expenses}
                onChange={(e) => setExpenses(Math.max(0, parseInt(e.target.value) || 0))}
                className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-10 pr-4 text-2xl text-white font-mono placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500/50 transition-all"
                min="0"
                step="1000"
              />
            </div>
            <p className="text-xs text-slate-500 mt-2">Deductions: equipment, software, rent, travel, etc.</p>
          </div>
        </div>

        {/* Salary & Beneficiaries */}
        <div className="grid sm:grid-cols-2 gap-5 mb-5">
          <div>
            <label className="block text-sm text-slate-400 mb-2">
              Planned Salary to Self <span className="text-slate-600">(Company/Trust)</span>
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg">$</span>
              <input
                type="number"
                value={salary}
                onChange={(e) => setSalary(Math.max(0, parseInt(e.target.value) || 0))}
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-lg text-white font-mono placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500/50 transition-all"
                min="0"
                step="5000"
              />
            </div>
            <p className="text-xs text-slate-500 mt-2">
              The salary you&apos;d pay yourself as a company director. Remaining profit stays in the company at 25%.
            </p>
          </div>
          <div>
            <label className="block text-sm text-slate-400 mb-2">
              Number of Beneficiaries <span className="text-slate-600">(Trust)</span>
            </label>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setBeneficiaries(Math.max(1, beneficiaries - 1))}
                className="w-11 h-11 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white text-lg font-bold transition-colors flex items-center justify-center"
              >
                -
              </button>
              <span className="text-2xl font-mono text-white w-12 text-center">{beneficiaries}</span>
              <button
                onClick={() => setBeneficiaries(Math.min(6, beneficiaries + 1))}
                className="w-11 h-11 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white text-lg font-bold transition-colors flex items-center justify-center"
              >
                +
              </button>
            </div>
            <p className="text-xs text-slate-500 mt-2">
              Family members to split trust income across (including yourself). Max 6.
            </p>
          </div>
        </div>

        {/* Toggles */}
        <div className="grid sm:grid-cols-2 gap-4">
          {/* Has Spouse */}
          <div className="flex items-center justify-between py-3 px-4 rounded-xl bg-white/5">
            <div>
              <span className="text-slate-300 text-sm">Has Spouse / Partner</span>
              <p className="text-xs text-slate-500 mt-0.5">Enables trust income splitting</p>
            </div>
            <button
              onClick={() => setHasSpouse(!hasSpouse)}
              className={`relative w-14 h-7 rounded-full transition-all ${
                hasSpouse ? 'bg-gradient-to-r from-teal-500 to-blue-500' : 'bg-white/10'
              }`}
            >
              <div
                className={`absolute top-0.5 left-0.5 h-6 w-6 rounded-full bg-white shadow-md transition-transform ${
                  hasSpouse ? 'translate-x-7' : 'translate-x-0'
                }`}
              />
            </button>
          </div>

          {/* GST Registered */}
          <div className="flex items-center justify-between py-3 px-4 rounded-xl bg-white/5">
            <div>
              <span className="text-slate-300 text-sm">GST Registered</span>
              <p className="text-xs text-slate-500 mt-0.5">Required if turnover exceeds $75K</p>
            </div>
            <button
              onClick={() => setGstRegistered(!gstRegistered)}
              className={`relative w-14 h-7 rounded-full transition-all ${
                gstRegistered ? 'bg-gradient-to-r from-teal-500 to-blue-500' : 'bg-white/10'
              }`}
            >
              <div
                className={`absolute top-0.5 left-0.5 h-6 w-6 rounded-full bg-white shadow-md transition-transform ${
                  gstRegistered ? 'translate-x-7' : 'translate-x-0'
                }`}
              />
            </button>
          </div>

          {/* Private Health */}
          <div className="flex items-center justify-between py-3 px-4 rounded-xl bg-white/5">
            <div>
              <span className="text-slate-300 text-sm">Private Health Insurance</span>
              <p className="text-xs text-slate-500 mt-0.5">Avoids Medicare Levy Surcharge</p>
            </div>
            <button
              onClick={() => setPrivateHealth(!privateHealth)}
              className={`relative w-14 h-7 rounded-full transition-all ${
                privateHealth ? 'bg-gradient-to-r from-teal-500 to-blue-500' : 'bg-white/10'
              }`}
            >
              <div
                className={`absolute top-0.5 left-0.5 h-6 w-6 rounded-full bg-white shadow-md transition-transform ${
                  privateHealth ? 'translate-x-7' : 'translate-x-0'
                }`}
              />
            </button>
          </div>

          {/* HELP/HECS */}
          <div className="flex items-center justify-between py-3 px-4 rounded-xl bg-white/5">
            <div>
              <span className="text-slate-300 text-sm">HELP / HECS Debt</span>
              <p className="text-xs text-slate-500 mt-0.5">Compulsory repayment above $54,435</p>
            </div>
            <button
              onClick={() => setHelpDebt(!helpDebt)}
              className={`relative w-14 h-7 rounded-full transition-all ${
                helpDebt ? 'bg-gradient-to-r from-teal-500 to-blue-500' : 'bg-white/10'
              }`}
            >
              <div
                className={`absolute top-0.5 left-0.5 h-6 w-6 rounded-full bg-white shadow-md transition-transform ${
                  helpDebt ? 'translate-x-7' : 'translate-x-0'
                }`}
              />
            </button>
          </div>
        </div>

        {/* Quick Revenue Presets */}
        <div className="mt-5 flex flex-wrap gap-2 justify-center">
          {[75000, 100000, 120000, 150000, 200000, 300000].map((val) => (
            <button
              key={val}
              onClick={() => setRevenue(val)}
              className={`px-3 py-1.5 rounded-lg text-xs transition-all ${
                revenue === val
                  ? 'bg-teal-500/20 text-teal-400 border border-teal-500/30'
                  : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              ${(val / 1000).toFixed(0)}K
            </button>
          ))}
        </div>
      </div>

      {/* Taxable Profit Summary */}
      <div className="flex items-center justify-between py-3 px-5 rounded-xl bg-teal-500/10 border border-teal-500/20">
        <span className="text-teal-400 font-semibold text-sm">Taxable Profit (Revenue - Expenses)</span>
        <span className="text-teal-400 font-mono text-xl font-bold">{formatCurrency(taxableProfit)}</span>
      </div>

      {/* Side-by-Side Comparison Cards */}
      {taxableProfit > 0 && (
        <>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {results.structures.map((structure) => {
              const isWinner = structure.label === results.winner.label;
              return (
                <div
                  key={structure.label}
                  className={`glass rounded-2xl p-5 relative transition-all ${
                    isWinner ? `border-2 ${getStructureBorderColor(structure.label)} shadow-lg` : 'border border-white/10'
                  }`}
                >
                  {/* Winner Badge */}
                  {isWinner && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-teal-500 to-blue-500 text-white text-xs font-bold whitespace-nowrap">
                      Best Option
                    </div>
                  )}

                  {/* Structure Header */}
                  <div className="flex items-center gap-3 mb-4 mt-1">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${getStructureColor(structure.label)} flex items-center justify-center text-white`}>
                      {getStructureIcon(structure.label)}
                    </div>
                    <h4 className="text-white font-bold text-base">{structure.label}</h4>
                  </div>

                  {/* Key Metrics */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between py-2 px-3 rounded-lg bg-white/5">
                      <span className="text-xs text-slate-400">Total Tax</span>
                      <span className="text-white font-mono font-semibold">{formatCurrency(structure.totalTax)}</span>
                    </div>
                    <div className="flex items-center justify-between py-2 px-3 rounded-lg bg-white/5">
                      <span className="text-xs text-slate-400">Effective Rate</span>
                      <span className="text-white font-mono font-semibold">{formatPercent(structure.effectiveRate)}</span>
                    </div>
                    <div className={`flex items-center justify-between py-2.5 px-3 rounded-lg ${isWinner ? 'bg-emerald-500/10 border border-emerald-500/20' : 'bg-white/5'}`}>
                      <span className={`text-xs ${isWinner ? 'text-emerald-400' : 'text-slate-400'} font-medium`}>Take-Home</span>
                      <span className={`font-mono font-bold text-lg ${isWinner ? 'text-emerald-400' : 'text-white'}`}>
                        {formatCurrency(structure.takeHome)}
                      </span>
                    </div>
                    <div className="flex items-center justify-between py-2 px-3 rounded-lg bg-white/5">
                      <span className="text-xs text-slate-400">Compliance Cost</span>
                      <span className="text-amber-400 font-mono text-sm">~{formatCurrency(structure.complianceCost)}/yr</span>
                    </div>
                    <div className="flex items-center justify-between py-2.5 px-3 rounded-lg bg-white/10 border border-white/5">
                      <span className="text-xs text-white font-medium">Net After Costs</span>
                      <span className={`font-mono font-bold ${getStructureTextColor(structure.label)}`}>
                        {formatCurrency(structure.netAfterCompliance)}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Savings Highlight */}
          {results.totalSaving > 0 && (
            <div className="glass rounded-2xl p-6 border border-teal-500/20 bg-teal-500/5 text-center">
              <p className="text-sm text-slate-400 mb-1">
                Choosing <strong className="text-white">{results.winner.label}</strong> over{' '}
                <strong className="text-white">{results.worstNet.label}</strong> saves you
              </p>
              <p className="text-4xl font-bold text-emerald-400 font-mono my-2">
                {formatCurrency(results.totalSaving)}
                <span className="text-lg text-slate-400 font-normal">/year</span>
              </p>
              <p className="text-xs text-slate-500">
                After accounting for compliance and accounting costs for each structure
              </p>
            </div>
          )}

          {/* Tax Comparison Visual Bar */}
          <div className="glass rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white heading-font mb-4">Tax Comparison</h3>
            <div className="space-y-4">
              {results.structures.map((structure) => {
                const maxTax = Math.max(...results.structures.map((s) => s.totalTax), 1);
                const barWidth = (structure.totalTax / maxTax) * 100;
                const isWinner = structure.label === results.winner.label;
                return (
                  <div key={structure.label} className="flex items-center gap-4">
                    <span className="text-sm text-slate-300 w-32 shrink-0 truncate">{structure.label}</span>
                    <div className="flex-1 bg-white/5 rounded-full h-8 overflow-hidden relative">
                      <div
                        className={`h-full rounded-full flex items-center justify-end pr-3 bg-gradient-to-r ${getStructureColor(structure.label)}`}
                        style={{ width: `${Math.max(barWidth, 12)}%`, opacity: 0.8 }}
                      >
                        <span className="text-xs font-medium text-white whitespace-nowrap">
                          {formatCurrency(structure.totalTax)}
                        </span>
                      </div>
                    </div>
                    {isWinner && (
                      <span className="text-xs text-emerald-400 font-medium shrink-0">Lowest</span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Setup & Ongoing Costs Comparison Table */}
          <div className="glass rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white heading-font mb-4">Setup &amp; Ongoing Costs</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left text-slate-400 py-3 pr-4 font-medium text-xs">Cost Item</th>
                    <th className="text-right text-blue-400 py-3 pr-4 font-medium text-xs">Sole Trader</th>
                    <th className="text-right text-violet-400 py-3 pr-4 font-medium text-xs">Company</th>
                    <th className="text-right text-emerald-400 py-3 font-medium text-xs">Trust</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/5">
                    <td className="py-2.5 pr-4 text-white">ABN Registration</td>
                    <td className="py-2.5 pr-4 text-right text-emerald-400">Free</td>
                    <td className="py-2.5 pr-4 text-right text-emerald-400">Free</td>
                    <td className="py-2.5 text-right text-emerald-400">Free</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2.5 pr-4 text-white">Entity Setup</td>
                    <td className="py-2.5 pr-4 text-right text-emerald-400">$0</td>
                    <td className="py-2.5 pr-4 text-right text-amber-400">$576</td>
                    <td className="py-2.5 text-right text-amber-400">$500 - $2,000</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2.5 pr-4 text-white">ASIC Annual Fee</td>
                    <td className="py-2.5 pr-4 text-right text-slate-500">N/A</td>
                    <td className="py-2.5 pr-4 text-right text-amber-400">$310/yr</td>
                    <td className="py-2.5 text-right text-slate-500">N/A</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2.5 pr-4 text-white">Annual Accounting (est.)</td>
                    <td className="py-2.5 pr-4 text-right text-slate-300">$700 - $1,500</td>
                    <td className="py-2.5 pr-4 text-right text-slate-300">$3,000 - $5,500</td>
                    <td className="py-2.5 text-right text-slate-300">$2,500 - $5,000</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 pr-4 text-white font-semibold">Total Annual Cost</td>
                    <td className="py-2.5 pr-4 text-right text-emerald-400 font-semibold">~$1,800</td>
                    <td className="py-2.5 pr-4 text-right text-amber-400 font-semibold">~$6,400</td>
                    <td className="py-2.5 text-right text-amber-400 font-semibold">~$6,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Pros & Cons */}
          <div className="glass rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white heading-font mb-4">Pros &amp; Cons</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {/* Sole Trader */}
              <div className="bg-white/5 rounded-xl p-4">
                <h4 className="text-blue-400 font-semibold text-sm mb-3 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Sole Trader
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-0.5 shrink-0">+</span>
                    <span className="text-slate-300">Free and instant to set up (just an ABN)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-0.5 shrink-0">+</span>
                    <span className="text-slate-300">Lowest compliance and accounting costs</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-0.5 shrink-0">+</span>
                    <span className="text-slate-300">Full control, minimal paperwork</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-0.5 shrink-0">+</span>
                    <span className="text-slate-300">Tax-free threshold ($18,200)</span>
                  </div>
                  <div className="flex items-start gap-2 mt-2">
                    <span className="text-rose-400 mt-0.5 shrink-0">-</span>
                    <span className="text-slate-300">No separation from personal assets (full liability)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-rose-400 mt-0.5 shrink-0">-</span>
                    <span className="text-slate-300">Higher tax rate on income above $135K</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-rose-400 mt-0.5 shrink-0">-</span>
                    <span className="text-slate-300">No income splitting options</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-rose-400 mt-0.5 shrink-0">-</span>
                    <span className="text-slate-300">Cannot retain profits in the business</span>
                  </div>
                </div>
              </div>

              {/* Company */}
              <div className="bg-white/5 rounded-xl p-4">
                <h4 className="text-violet-400 font-semibold text-sm mb-3 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  Company (Pty Ltd)
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-0.5 shrink-0">+</span>
                    <span className="text-slate-300">Flat 25% tax rate on company profits</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-0.5 shrink-0">+</span>
                    <span className="text-slate-300">Limited liability (protects personal assets)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-0.5 shrink-0">+</span>
                    <span className="text-slate-300">Can retain profits and reinvest at 25%</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-0.5 shrink-0">+</span>
                    <span className="text-slate-300">Easier to sell, raise capital, or add partners</span>
                  </div>
                  <div className="flex items-start gap-2 mt-2">
                    <span className="text-rose-400 mt-0.5 shrink-0">-</span>
                    <span className="text-slate-300">Higher setup and annual compliance costs</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-rose-400 mt-0.5 shrink-0">-</span>
                    <span className="text-slate-300">No tax-free threshold for the company</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-rose-400 mt-0.5 shrink-0">-</span>
                    <span className="text-slate-300">Profits taxed again when distributed as dividends</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-rose-400 mt-0.5 shrink-0">-</span>
                    <span className="text-slate-300">More record-keeping and regulatory obligations</span>
                  </div>
                </div>
              </div>

              {/* Trust */}
              <div className="bg-white/5 rounded-xl p-4">
                <h4 className="text-emerald-400 font-semibold text-sm mb-3 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  Trust
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-0.5 shrink-0">+</span>
                    <span className="text-slate-300">Income splitting across family members</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-0.5 shrink-0">+</span>
                    <span className="text-slate-300">Each beneficiary gets their own tax-free threshold</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-0.5 shrink-0">+</span>
                    <span className="text-slate-300">Strong asset protection (when structured correctly)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-0.5 shrink-0">+</span>
                    <span className="text-slate-300">Flexibility in how income is distributed each year</span>
                  </div>
                  <div className="flex items-start gap-2 mt-2">
                    <span className="text-rose-400 mt-0.5 shrink-0">-</span>
                    <span className="text-slate-300">Complex setup and ongoing administration</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-rose-400 mt-0.5 shrink-0">-</span>
                    <span className="text-slate-300">Higher accounting fees than sole trader</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-rose-400 mt-0.5 shrink-0">-</span>
                    <span className="text-slate-300">ATO scrutinises trust distributions closely</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-rose-400 mt-0.5 shrink-0">-</span>
                    <span className="text-slate-300">Cannot retain undistributed income (taxed at 47%)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* When to Switch / Break-Even Analysis */}
          <div className="glass rounded-2xl p-6 border border-violet-500/20 bg-violet-500/5">
            <h3 className="text-lg font-bold text-white heading-font mb-4">
              Break-Even Analysis
            </h3>
            <div className="space-y-4 text-slate-300">
              {results.breakEvenIncome > 0 ? (
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-sm mb-2">
                    Based on your planned salary of {formatCurrency(salary)} and the compliance cost
                    difference between structures:
                  </p>
                  <p className="text-white font-semibold">
                    A company structure starts saving money when your taxable profit exceeds{' '}
                    <span className="text-violet-400 font-mono text-lg">{formatCurrency(results.breakEvenIncome)}</span>
                  </p>
                  <p className="text-xs text-slate-500 mt-2">
                    Below this threshold, the extra accounting and compliance costs of a company
                    outweigh the tax savings. Your current taxable profit is{' '}
                    <strong className="text-white">{formatCurrency(taxableProfit)}</strong> —{' '}
                    {taxableProfit >= results.breakEvenIncome ? (
                      <span className="text-emerald-400">above the break-even point. A company or trust structure is likely worthwhile.</span>
                    ) : (
                      <span className="text-amber-400">below the break-even point. A sole trader structure may be more cost-effective for now.</span>
                    )}
                  </p>
                </div>
              ) : (
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-sm">
                    At your current salary setting, a company structure does not break even within the
                    $50K-$500K range modelled. Consider adjusting your planned salary or consulting a
                    tax professional for advice specific to your situation.
                  </p>
                </div>
              )}

              <div className="bg-white/5 rounded-xl p-4">
                <h4 className="text-white font-semibold text-sm mb-2">General Thresholds (Rule of Thumb)</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                    <span><strong className="text-white">Under $120K profit:</strong> Sole trader is almost always the best option</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
                    <span><strong className="text-white">$120K - $150K profit:</strong> Run the numbers — it depends on your specific situation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-violet-400 shrink-0" />
                    <span><strong className="text-white">Over $150K profit:</strong> Company or trust likely saves money after compliance costs</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-teal-400 shrink-0" />
                    <span><strong className="text-white">With spouse on low income:</strong> Trust income splitting can save at much lower thresholds</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Related Tools */}
          <div className="glass rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white heading-font mb-4">Related Tools</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              <a
                href="/tools/tax-estimator"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-500/30 rounded-xl p-4 transition-all group"
              >
                <p className="text-white font-medium text-sm group-hover:text-teal-400 transition-colors">Tax Estimator</p>
                <p className="text-xs text-slate-500 mt-1">Estimate your Australian income tax and Medicare levy</p>
              </a>
              <a
                href="/tools/gst-calculator"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-500/30 rounded-xl p-4 transition-all group"
              >
                <p className="text-white font-medium text-sm group-hover:text-teal-400 transition-colors">GST Calculator</p>
                <p className="text-xs text-slate-500 mt-1">Calculate GST-inclusive and exclusive amounts</p>
              </a>
              <a
                href="/tools/super-calculator"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-500/30 rounded-xl p-4 transition-all group"
              >
                <p className="text-white font-medium text-sm group-hover:text-teal-400 transition-colors">Super Calculator</p>
                <p className="text-xs text-slate-500 mt-1">Calculate superannuation contributions and obligations</p>
              </a>
              <a
                href="/tools/net-income-calculator"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-500/30 rounded-xl p-4 transition-all group"
              >
                <p className="text-white font-medium text-sm group-hover:text-teal-400 transition-colors">Net Income Calculator</p>
                <p className="text-xs text-slate-500 mt-1">Calculate your take-home pay after tax and expenses</p>
              </a>
            </div>
          </div>

          {/* Copy Button */}
          <div className="flex justify-center">
            <button
              onClick={handleCopy}
              className="px-6 py-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-500/30 transition-all text-white font-medium"
            >
              {copied ? 'Copied to Clipboard!' : 'Copy Comparison to Clipboard'}
            </button>
          </div>

          {/* Disclaimer */}
          <div className="text-center">
            <p className="text-xs text-slate-500 max-w-2xl mx-auto">
              This calculator provides estimates based on 2024-25 ATO tax rates and general assumptions.
              It does not account for all individual circumstances, deductions, offsets, or the low
              income tax offset. Compliance costs are approximate mid-range estimates. Always consult
              a registered tax agent or accountant before changing your business structure.
            </p>
          </div>
        </>
      )}
    </div>
  );
}
