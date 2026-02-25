'use client';

import { useState, useMemo } from 'react';

// ── Helpers ──────────────────────────────────────────────────────────────────────

function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

function formatCurrencyPrecise(value: number): string {
  return new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

// 2025-26 ATO tax brackets (Stage 3 cuts)
function calculateIncomeTax(taxableIncome: number): number {
  if (taxableIncome <= 18200) return 0;
  if (taxableIncome <= 45000) return (taxableIncome - 18200) * 0.16;
  if (taxableIncome <= 135000) return 4288 + (taxableIncome - 45000) * 0.30;
  if (taxableIncome <= 190000) return 31288 + (taxableIncome - 135000) * 0.37;
  return 51638 + (taxableIncome - 190000) * 0.45;
}

function getMarginalRate(taxableIncome: number): number {
  if (taxableIncome <= 18200) return 0;
  if (taxableIncome <= 45000) return 0.16;
  if (taxableIncome <= 135000) return 0.30;
  if (taxableIncome <= 190000) return 0.37;
  return 0.45;
}

function calculateMedicareLevy(taxableIncome: number): number {
  if (taxableIncome <= 26000) return 0;
  if (taxableIncome <= 32500) return (taxableIncome - 26000) * 0.1;
  return taxableIncome * 0.02;
}

// ── Types ────────────────────────────────────────────────────────────────────────

type Method = 'fixed' | 'actual';
type ActiveTab = 'method1' | 'method2' | 'comparison';

interface EquipmentItem {
  id: string;
  name: string;
  cost: string;
  effectiveLife: string;
  businessUse: string;
}

// ── Constants ────────────────────────────────────────────────────────────────────

const FIXED_RATE_PER_HOUR = 0.67;
const INSTANT_ASSET_WRITEOFF_THRESHOLD = 20000;
const LOW_VALUE_POOL_THRESHOLD = 300;

// ── Component ────────────────────────────────────────────────────────────────────

export default function WfhDeductionCalculator() {
  // Common inputs
  const [grossIncome, setGrossIncome] = useState('95000');
  const [activeTab, setActiveTab] = useState<ActiveTab>('method1');
  const [copied, setCopied] = useState(false);

  // Method 1: Fixed Rate
  const [hoursPerWeek, setHoursPerWeek] = useState('35');
  const [weeksPerYear, setWeeksPerYear] = useState('48');

  // Equipment (shared — can be claimed on top of fixed rate, or included in actual cost)
  const [equipmentItems, setEquipmentItems] = useState<EquipmentItem[]>([
    { id: '1', name: 'Laptop', cost: '2400', effectiveLife: '4', businessUse: '100' },
    { id: '2', name: 'Monitor', cost: '600', effectiveLife: '5', businessUse: '100' },
  ]);

  // Method 2: Actual Cost
  const [internetAnnual, setInternetAnnual] = useState('1440');
  const [internetBusinessPct, setInternetBusinessPct] = useState('60');
  const [phoneAnnual, setPhoneAnnual] = useState('1200');
  const [phoneBusinessPct, setPhoneBusinessPct] = useState('50');
  const [electricityAnnual, setElectricityAnnual] = useState('2400');
  const [workAreaSqm, setWorkAreaSqm] = useState('12');
  const [totalHomeSqm, setTotalHomeSqm] = useState('90');
  const [insuranceAnnual, setInsuranceAnnual] = useState('1800');
  const [rentOrMortgageAnnual, setRentOrMortgageAnnual] = useState('0');
  const [cleaningAnnual, setCleaningAnnual] = useState('520');

  // ── Equipment Depreciation Calculation ─────────────────────────────────────

  const equipmentDepreciation = useMemo(() => {
    return equipmentItems.map((item) => {
      const cost = parseFloat(item.cost) || 0;
      const life = parseFloat(item.effectiveLife) || 1;
      const businessPct = Math.min(100, Math.max(0, parseFloat(item.businessUse) || 0)) / 100;

      let annualDeduction: number;
      let method: string;

      if (cost <= LOW_VALUE_POOL_THRESHOLD) {
        // Immediately deductible
        annualDeduction = cost * businessPct;
        method = 'Immediate deduction (under $300)';
      } else if (cost < INSTANT_ASSET_WRITEOFF_THRESHOLD) {
        // Instant asset write-off for small business
        annualDeduction = cost * businessPct;
        method = `Instant asset write-off (under $${(INSTANT_ASSET_WRITEOFF_THRESHOLD / 1000).toFixed(0)}K)`;
      } else {
        // Depreciate over effective life (diminishing value first year = cost * (200% / life) / 2 for half year)
        // Using prime cost (straight-line) for simplicity
        annualDeduction = (cost / life) * businessPct;
        method = `Depreciated over ${life} years (prime cost)`;
      }

      return {
        ...item,
        costNum: cost,
        annualDeduction,
        method,
      };
    });
  }, [equipmentItems]);

  const totalEquipmentDeduction = useMemo(
    () => equipmentDepreciation.reduce((sum, item) => sum + item.annualDeduction, 0),
    [equipmentDepreciation],
  );

  // ── Method 1: Fixed Rate Calculation ───────────────────────────────────────

  const fixedRateResults = useMemo(() => {
    const hours = parseFloat(hoursPerWeek) || 0;
    const weeks = parseFloat(weeksPerYear) || 0;
    const totalHours = hours * weeks;
    const fixedRateDeduction = totalHours * FIXED_RATE_PER_HOUR;
    // Equipment depreciation can be claimed on top of fixed rate
    const totalDeduction = fixedRateDeduction + totalEquipmentDeduction;

    return {
      totalHours,
      fixedRateDeduction,
      equipmentDeduction: totalEquipmentDeduction,
      totalDeduction,
    };
  }, [hoursPerWeek, weeksPerYear, totalEquipmentDeduction]);

  // ── Method 2: Actual Cost Calculation ──────────────────────────────────────

  const actualCostResults = useMemo(() => {
    const internet = (parseFloat(internetAnnual) || 0) * ((parseFloat(internetBusinessPct) || 0) / 100);
    const phone = (parseFloat(phoneAnnual) || 0) * ((parseFloat(phoneBusinessPct) || 0) / 100);

    const workArea = parseFloat(workAreaSqm) || 0;
    const totalHome = parseFloat(totalHomeSqm) || 1;
    const floorAreaPct = Math.min(1, workArea / totalHome);

    const electricity = (parseFloat(electricityAnnual) || 0) * floorAreaPct;
    const insurance = (parseFloat(insuranceAnnual) || 0) * floorAreaPct;
    const rentOrMortgage = (parseFloat(rentOrMortgageAnnual) || 0) * floorAreaPct;
    const cleaning = (parseFloat(cleaningAnnual) || 0) * floorAreaPct;

    const runningExpenses = internet + phone + electricity;
    const occupancyExpenses = insurance + rentOrMortgage + cleaning;
    // Equipment depreciation is included in actual cost method
    const totalDeduction = runningExpenses + occupancyExpenses + totalEquipmentDeduction;

    return {
      internet,
      phone,
      electricity,
      insurance,
      rentOrMortgage,
      cleaning,
      floorAreaPct,
      runningExpenses,
      occupancyExpenses,
      equipmentDeduction: totalEquipmentDeduction,
      totalDeduction,
    };
  }, [
    internetAnnual, internetBusinessPct,
    phoneAnnual, phoneBusinessPct,
    electricityAnnual, workAreaSqm, totalHomeSqm,
    insuranceAnnual, rentOrMortgageAnnual, cleaningAnnual,
    totalEquipmentDeduction,
  ]);

  // ── Tax Savings Calculation ────────────────────────────────────────────────

  const taxResults = useMemo(() => {
    const income = parseFloat(grossIncome) || 0;

    const taxBefore = calculateIncomeTax(income);
    const medicareBefore = calculateMedicareLevy(income);
    const totalTaxBefore = taxBefore + medicareBefore;

    // Fixed rate method
    const fixedTaxableIncome = Math.max(0, income - fixedRateResults.totalDeduction);
    const fixedTaxAfter = calculateIncomeTax(fixedTaxableIncome);
    const fixedMedicareAfter = calculateMedicareLevy(fixedTaxableIncome);
    const fixedTotalTaxAfter = fixedTaxAfter + fixedMedicareAfter;
    const fixedTaxSaved = totalTaxBefore - fixedTotalTaxAfter;

    // Actual cost method
    const actualTaxableIncome = Math.max(0, income - actualCostResults.totalDeduction);
    const actualTaxAfter = calculateIncomeTax(actualTaxableIncome);
    const actualMedicareAfter = calculateMedicareLevy(actualTaxableIncome);
    const actualTotalTaxAfter = actualTaxAfter + actualMedicareAfter;
    const actualTaxSaved = totalTaxBefore - actualTotalTaxAfter;

    const marginalRate = getMarginalRate(income);
    const betterMethod: Method = fixedRateResults.totalDeduction >= actualCostResults.totalDeduction ? 'fixed' : 'actual';
    const difference = Math.abs(fixedRateResults.totalDeduction - actualCostResults.totalDeduction);

    return {
      income,
      totalTaxBefore,
      fixedTaxableIncome,
      fixedTotalTaxAfter,
      fixedTaxSaved,
      actualTaxableIncome,
      actualTotalTaxAfter,
      actualTaxSaved,
      marginalRate,
      betterMethod,
      difference,
    };
  }, [grossIncome, fixedRateResults, actualCostResults]);

  // ── Equipment Handlers ─────────────────────────────────────────────────────

  const addEquipmentItem = () => {
    setEquipmentItems((prev) => [
      ...prev,
      { id: Date.now().toString(), name: '', cost: '', effectiveLife: '4', businessUse: '100' },
    ]);
  };

  const removeEquipmentItem = (id: string) => {
    setEquipmentItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateEquipmentItem = (id: string, field: keyof EquipmentItem, value: string) => {
    setEquipmentItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: value } : item)),
    );
  };

  // ── Copy Results ───────────────────────────────────────────────────────────

  const handleCopy = () => {
    const lines = [
      'Working from Home Tax Deduction Calculator — InvoiceFlow',
      '=========================================================',
      '',
      `Gross Annual Income: ${formatCurrency(taxResults.income)}`,
      `Marginal Tax Rate: ${Math.round(taxResults.marginalRate * 100)}% + 2% Medicare`,
      '',
      '--- Method 1: Fixed Rate (67c/hr) ---',
      `Hours/week: ${hoursPerWeek}  |  Weeks/year: ${weeksPerYear}`,
      `Fixed rate deduction: ${formatCurrency(fixedRateResults.fixedRateDeduction)}`,
      `Equipment depreciation: ${formatCurrency(fixedRateResults.equipmentDeduction)}`,
      `Total deduction: ${formatCurrency(fixedRateResults.totalDeduction)}`,
      `Tax saved: ${formatCurrency(taxResults.fixedTaxSaved)}`,
      '',
      '--- Method 2: Actual Cost ---',
      `Internet: ${formatCurrency(actualCostResults.internet)}`,
      `Phone: ${formatCurrency(actualCostResults.phone)}`,
      `Electricity: ${formatCurrency(actualCostResults.electricity)}`,
      `Insurance: ${formatCurrency(actualCostResults.insurance)}`,
      `Rent/Mortgage interest: ${formatCurrency(actualCostResults.rentOrMortgage)}`,
      `Cleaning: ${formatCurrency(actualCostResults.cleaning)}`,
      `Equipment depreciation: ${formatCurrency(actualCostResults.equipmentDeduction)}`,
      `Total deduction: ${formatCurrency(actualCostResults.totalDeduction)}`,
      `Tax saved: ${formatCurrency(taxResults.actualTaxSaved)}`,
      '',
      `Floor area: ${workAreaSqm}sqm / ${totalHomeSqm}sqm = ${(actualCostResults.floorAreaPct * 100).toFixed(1)}%`,
      '',
      '--- Comparison ---',
      `Better method: ${taxResults.betterMethod === 'fixed' ? 'Fixed Rate' : 'Actual Cost'} (saves ${formatCurrency(Math.max(taxResults.fixedTaxSaved, taxResults.actualTaxSaved))} in tax)`,
      `Difference: ${formatCurrency(taxResults.difference)} more deduction`,
      '',
      'Generated at invoiceflow.au/tools/wfh-deduction-calculator',
    ];
    navigator.clipboard.writeText(lines.join('\n')).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  // ── Styles ─────────────────────────────────────────────────────────────────

  const inputClass =
    'w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500/40 focus:border-teal-500/40 transition-all';

  const tabClass = (tab: ActiveTab) =>
    `px-5 py-2.5 rounded-xl border text-sm font-medium transition-all ${
      activeTab === tab
        ? 'bg-gradient-to-r from-teal-500 to-blue-500 border-transparent text-white'
        : 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
    }`;

  return (
    <div className="space-y-8">
      {/* ── Income Input ──────────────────────────────────────────────────────── */}
      <div className="glass rounded-2xl p-6 sm:p-8">
        <h2 className="text-xl font-bold text-white heading-font mb-4">Your Income</h2>
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
            Your total income before deductions — used to calculate your marginal tax rate and
            tax savings
          </p>
        </div>
      </div>

      {/* ── Method Tabs ───────────────────────────────────────────────────────── */}
      <div className="flex flex-wrap gap-3">
        <button onClick={() => setActiveTab('method1')} className={tabClass('method1')}>
          Fixed Rate (67c/hr)
        </button>
        <button onClick={() => setActiveTab('method2')} className={tabClass('method2')}>
          Actual Cost
        </button>
        <button onClick={() => setActiveTab('comparison')} className={tabClass('comparison')}>
          Side-by-Side Comparison
        </button>
      </div>

      {/* ── Method 1: Fixed Rate ──────────────────────────────────────────────── */}
      {(activeTab === 'method1' || activeTab === 'comparison') && (
        <div className="glass rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-500/20 flex items-center justify-center text-teal-400 text-lg font-bold shrink-0">
              1
            </div>
            <div>
              <h2 className="text-xl font-bold text-white heading-font">Fixed Rate Method</h2>
              <p className="text-sm text-slate-400">67 cents per hour for all running expenses</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1.5">
                Hours worked from home per week
              </label>
              <input
                type="number"
                value={hoursPerWeek}
                onChange={(e) => setHoursPerWeek(e.target.value)}
                className={inputClass}
                placeholder="35"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1.5">
                Weeks worked per year
              </label>
              <input
                type="number"
                value={weeksPerYear}
                onChange={(e) => setWeeksPerYear(e.target.value)}
                className={inputClass}
                placeholder="48"
              />
            </div>
          </div>

          {/* Fixed Rate Breakdown */}
          <div className="bg-white/5 rounded-xl p-5 space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-slate-400">Total hours worked from home</span>
              <span className="text-white font-medium">
                {fixedRateResults.totalHours.toLocaleString('en-AU')} hours
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-400">
                Fixed rate deduction ({fixedRateResults.totalHours.toLocaleString('en-AU')} hrs x $0.67)
              </span>
              <span className="text-white font-medium">
                {formatCurrencyPrecise(fixedRateResults.fixedRateDeduction)}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-400">+ Equipment depreciation (separate claim)</span>
              <span className="text-white font-medium">
                {formatCurrency(fixedRateResults.equipmentDeduction)}
              </span>
            </div>
            <hr className="border-white/10" />
            <div className="flex justify-between">
              <span className="text-white font-semibold">Total Method 1 Deduction</span>
              <span className="text-teal-400 font-bold text-lg">
                {formatCurrency(fixedRateResults.totalDeduction)}
              </span>
            </div>
          </div>

          <div className="bg-teal-500/10 border border-teal-500/20 rounded-xl p-4">
            <p className="text-sm text-teal-400">
              <strong>Covers:</strong> electricity, phone, internet, stationery, and computer
              consumables. You can still separately claim equipment depreciation and office
              furniture repairs on top of this rate.
            </p>
          </div>
        </div>
      )}

      {/* ── Method 2: Actual Cost ─────────────────────────────────────────────── */}
      {(activeTab === 'method2' || activeTab === 'comparison') && (
        <div className="glass rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 text-lg font-bold shrink-0">
              2
            </div>
            <div>
              <h2 className="text-xl font-bold text-white heading-font">Actual Cost Method</h2>
              <p className="text-sm text-slate-400">
                Calculate the actual proportion of each expense used for work
              </p>
            </div>
          </div>

          {/* Floor Area */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-3">Floor Area Calculation</h3>
            <div className="grid sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">
                  Work area (sqm)
                </label>
                <input
                  type="number"
                  value={workAreaSqm}
                  onChange={(e) => setWorkAreaSqm(e.target.value)}
                  className={inputClass}
                  placeholder="12"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">
                  Total home (sqm)
                </label>
                <input
                  type="number"
                  value={totalHomeSqm}
                  onChange={(e) => setTotalHomeSqm(e.target.value)}
                  className={inputClass}
                  placeholder="90"
                />
              </div>
              <div className="flex items-end">
                <div className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-center">
                  <span className="text-teal-400 font-bold text-lg">
                    {(actualCostResults.floorAreaPct * 100).toFixed(1)}%
                  </span>
                  <span className="text-slate-500 text-xs block">floor area ratio</span>
                </div>
              </div>
            </div>
          </div>

          {/* Running Expenses */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-3">Running Expenses</h3>
            <div className="space-y-4">
              {/* Internet */}
              <div className="bg-white/5 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-white font-medium">Internet</span>
                  <span className="text-sm text-teal-400 font-medium">
                    {formatCurrency(actualCostResults.internet)}/yr
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs text-slate-500 mb-1">Annual cost ($)</label>
                    <input
                      type="number"
                      value={internetAnnual}
                      onChange={(e) => setInternetAnnual(e.target.value)}
                      className={inputClass + ' text-sm !py-2'}
                      placeholder="1440"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-500 mb-1">Business use (%)</label>
                    <input
                      type="number"
                      value={internetBusinessPct}
                      onChange={(e) => setInternetBusinessPct(e.target.value)}
                      className={inputClass + ' text-sm !py-2'}
                      placeholder="60"
                      min="0"
                      max="100"
                    />
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-white/5 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-white font-medium">Mobile Phone</span>
                  <span className="text-sm text-teal-400 font-medium">
                    {formatCurrency(actualCostResults.phone)}/yr
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs text-slate-500 mb-1">Annual cost ($)</label>
                    <input
                      type="number"
                      value={phoneAnnual}
                      onChange={(e) => setPhoneAnnual(e.target.value)}
                      className={inputClass + ' text-sm !py-2'}
                      placeholder="1200"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-500 mb-1">Business use (%)</label>
                    <input
                      type="number"
                      value={phoneBusinessPct}
                      onChange={(e) => setPhoneBusinessPct(e.target.value)}
                      className={inputClass + ' text-sm !py-2'}
                      placeholder="50"
                      min="0"
                      max="100"
                    />
                  </div>
                </div>
              </div>

              {/* Electricity */}
              <div className="bg-white/5 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-white font-medium">Electricity (floor area method)</span>
                  <span className="text-sm text-teal-400 font-medium">
                    {formatCurrency(actualCostResults.electricity)}/yr
                  </span>
                </div>
                <div>
                  <label className="block text-xs text-slate-500 mb-1">Annual electricity cost ($)</label>
                  <input
                    type="number"
                    value={electricityAnnual}
                    onChange={(e) => setElectricityAnnual(e.target.value)}
                    className={inputClass + ' text-sm !py-2 max-w-xs'}
                    placeholder="2400"
                  />
                  <p className="text-xs text-slate-500 mt-1">
                    Apportioned by floor area: {(actualCostResults.floorAreaPct * 100).toFixed(1)}%
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Occupancy Expenses */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-1">Occupancy Expenses</h3>
            <p className="text-xs text-slate-500 mb-3">
              Apportioned by floor area ({(actualCostResults.floorAreaPct * 100).toFixed(1)}%).
              Occupancy expenses require a dedicated work room used almost exclusively for work.
            </p>
            <div className="space-y-4">
              {/* Insurance */}
              <div className="bg-white/5 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-white font-medium">Home Insurance</span>
                  <span className="text-sm text-teal-400 font-medium">
                    {formatCurrency(actualCostResults.insurance)}/yr
                  </span>
                </div>
                <div>
                  <label className="block text-xs text-slate-500 mb-1">Annual premium ($)</label>
                  <input
                    type="number"
                    value={insuranceAnnual}
                    onChange={(e) => setInsuranceAnnual(e.target.value)}
                    className={inputClass + ' text-sm !py-2 max-w-xs'}
                    placeholder="1800"
                  />
                </div>
              </div>

              {/* Rent / Mortgage Interest */}
              <div className="bg-white/5 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-white font-medium">Rent / Mortgage Interest</span>
                  <span className="text-sm text-teal-400 font-medium">
                    {formatCurrency(actualCostResults.rentOrMortgage)}/yr
                  </span>
                </div>
                <div>
                  <label className="block text-xs text-slate-500 mb-1">
                    Annual rent or mortgage interest ($)
                  </label>
                  <input
                    type="number"
                    value={rentOrMortgageAnnual}
                    onChange={(e) => setRentOrMortgageAnnual(e.target.value)}
                    className={inputClass + ' text-sm !py-2 max-w-xs'}
                    placeholder="0"
                  />
                  <p className="text-xs text-rose-400/80 mt-1">
                    Warning: claiming occupancy on a property you own may trigger CGT when you sell
                  </p>
                </div>
              </div>

              {/* Cleaning */}
              <div className="bg-white/5 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-white font-medium">Cleaning (work area)</span>
                  <span className="text-sm text-teal-400 font-medium">
                    {formatCurrency(actualCostResults.cleaning)}/yr
                  </span>
                </div>
                <div>
                  <label className="block text-xs text-slate-500 mb-1">Annual cleaning cost ($)</label>
                  <input
                    type="number"
                    value={cleaningAnnual}
                    onChange={(e) => setCleaningAnnual(e.target.value)}
                    className={inputClass + ' text-sm !py-2 max-w-xs'}
                    placeholder="520"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Actual Cost Breakdown */}
          <div className="bg-white/5 rounded-xl p-5 space-y-3">
            <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wide">
              Actual Cost Breakdown
            </h4>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Internet ({internetBusinessPct}% of {formatCurrency(parseFloat(internetAnnual) || 0)})</span>
                <span className="text-white">{formatCurrency(actualCostResults.internet)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Phone ({phoneBusinessPct}% of {formatCurrency(parseFloat(phoneAnnual) || 0)})</span>
                <span className="text-white">{formatCurrency(actualCostResults.phone)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Electricity ({(actualCostResults.floorAreaPct * 100).toFixed(1)}% of {formatCurrency(parseFloat(electricityAnnual) || 0)})</span>
                <span className="text-white">{formatCurrency(actualCostResults.electricity)}</span>
              </div>
              <hr className="border-white/5" />
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Insurance ({(actualCostResults.floorAreaPct * 100).toFixed(1)}%)</span>
                <span className="text-white">{formatCurrency(actualCostResults.insurance)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Rent/Mortgage interest ({(actualCostResults.floorAreaPct * 100).toFixed(1)}%)</span>
                <span className="text-white">{formatCurrency(actualCostResults.rentOrMortgage)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Cleaning ({(actualCostResults.floorAreaPct * 100).toFixed(1)}%)</span>
                <span className="text-white">{formatCurrency(actualCostResults.cleaning)}</span>
              </div>
              <hr className="border-white/5" />
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Equipment depreciation</span>
                <span className="text-white">{formatCurrency(actualCostResults.equipmentDeduction)}</span>
              </div>
              <hr className="border-white/10" />
              <div className="flex justify-between">
                <span className="text-white font-semibold">Total Method 2 Deduction</span>
                <span className="text-blue-400 font-bold text-lg">
                  {formatCurrency(actualCostResults.totalDeduction)}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── Equipment Depreciation (shared) ───────────────────────────────────── */}
      <div className="glass rounded-2xl p-6 sm:p-8 space-y-6">
        <div>
          <h2 className="text-xl font-bold text-white heading-font mb-1">
            Equipment Depreciation
          </h2>
          <p className="text-sm text-slate-400">
            Add office equipment to calculate depreciation. Items under $300 are immediately
            deductible. Small businesses can use the $20,000 instant asset write-off for larger
            items. This applies to both methods.
          </p>
        </div>

        {equipmentItems.map((item, idx) => {
          const dep = equipmentDepreciation[idx];
          return (
            <div key={item.id} className="bg-white/5 rounded-xl p-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-white font-medium">
                  {item.name || `Item ${idx + 1}`}
                </span>
                <button
                  onClick={() => removeEquipmentItem(item.id)}
                  className="text-xs text-slate-500 hover:text-rose-400 transition-colors"
                >
                  Remove
                </button>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div>
                  <label className="block text-xs text-slate-500 mb-1">Item name</label>
                  <input
                    type="text"
                    value={item.name}
                    onChange={(e) => updateEquipmentItem(item.id, 'name', e.target.value)}
                    className={inputClass + ' text-sm !py-2'}
                    placeholder="Laptop"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-500 mb-1">Cost ($)</label>
                  <input
                    type="number"
                    value={item.cost}
                    onChange={(e) => updateEquipmentItem(item.id, 'cost', e.target.value)}
                    className={inputClass + ' text-sm !py-2'}
                    placeholder="2400"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-500 mb-1">Effective life (yrs)</label>
                  <input
                    type="number"
                    value={item.effectiveLife}
                    onChange={(e) => updateEquipmentItem(item.id, 'effectiveLife', e.target.value)}
                    className={inputClass + ' text-sm !py-2'}
                    placeholder="4"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-500 mb-1">Business use (%)</label>
                  <input
                    type="number"
                    value={item.businessUse}
                    onChange={(e) => updateEquipmentItem(item.id, 'businessUse', e.target.value)}
                    className={inputClass + ' text-sm !py-2'}
                    placeholder="100"
                    min="0"
                    max="100"
                  />
                </div>
              </div>
              {dep && (
                <div className="flex items-center justify-between pt-1">
                  <span className="text-xs text-slate-500">{dep.method}</span>
                  <span className="text-sm text-teal-400 font-medium">
                    {formatCurrency(dep.annualDeduction)}/yr
                  </span>
                </div>
              )}
            </div>
          );
        })}

        <button
          onClick={addEquipmentItem}
          className="w-full py-2.5 rounded-xl border border-dashed border-white/20 text-sm text-slate-400 hover:text-white hover:border-white/40 transition-all"
        >
          + Add Equipment Item
        </button>

        {equipmentItems.length > 0 && (
          <div className="flex justify-between items-center pt-2">
            <span className="text-sm text-slate-400">Total equipment depreciation</span>
            <span className="text-lg text-teal-400 font-bold">
              {formatCurrency(totalEquipmentDeduction)}/yr
            </span>
          </div>
        )}
      </div>

      {/* ── Side-by-Side Comparison ───────────────────────────────────────────── */}
      <div className="glass rounded-2xl p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-white heading-font">
            Method Comparison &amp; Tax Savings
          </h2>
          <button
            onClick={handleCopy}
            className="flex items-center gap-2 text-sm px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all"
          >
            {copied ? <span className="text-emerald-400">Copied</span> : <>Copy Results</>}
          </button>
        </div>

        {/* Winner Banner */}
        <div
          className={`rounded-xl p-5 text-center ${
            taxResults.betterMethod === 'fixed'
              ? 'bg-gradient-to-r from-teal-500/10 to-emerald-500/10 border border-teal-500/20'
              : 'bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20'
          }`}
        >
          <p className="text-xs text-slate-400 uppercase tracking-wide mb-1">Recommended Method</p>
          <p className="text-2xl font-bold text-white">
            {taxResults.betterMethod === 'fixed' ? (
              <span className="text-teal-400">Fixed Rate (67c/hr)</span>
            ) : (
              <span className="text-blue-400">Actual Cost</span>
            )}
          </p>
          <p className="text-sm text-slate-400 mt-1">
            Saves you{' '}
            <span className="text-white font-semibold">
              {formatCurrency(taxResults.difference)}
            </span>{' '}
            more in deductions than the other method
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="grid sm:grid-cols-2 gap-6">
          {/* Fixed Rate Card */}
          <div
            className={`rounded-xl p-5 ${
              taxResults.betterMethod === 'fixed'
                ? 'bg-gradient-to-br from-teal-500/5 to-emerald-500/5 border border-teal-500/20'
                : 'bg-white/5'
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-teal-400 uppercase tracking-wide">
                Fixed Rate (67c/hr)
              </h3>
              {taxResults.betterMethod === 'fixed' && (
                <span className="text-xs px-2 py-0.5 rounded-full bg-teal-500/20 text-teal-400">
                  Better
                </span>
              )}
            </div>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Fixed rate claim</span>
                <span className="text-white">{formatCurrency(fixedRateResults.fixedRateDeduction)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Equipment depreciation</span>
                <span className="text-white">{formatCurrency(fixedRateResults.equipmentDeduction)}</span>
              </div>
              <hr className="border-white/10" />
              <div className="flex justify-between">
                <span className="text-sm font-semibold text-white">Total Deduction</span>
                <span className="text-teal-400 font-bold">{formatCurrency(fixedRateResults.totalDeduction)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-slate-400">Tax saved</span>
                <span className="text-teal-400 font-semibold">{formatCurrency(taxResults.fixedTaxSaved)}</span>
              </div>
            </div>
          </div>

          {/* Actual Cost Card */}
          <div
            className={`rounded-xl p-5 ${
              taxResults.betterMethod === 'actual'
                ? 'bg-gradient-to-br from-blue-500/5 to-indigo-500/5 border border-blue-500/20'
                : 'bg-white/5'
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-blue-400 uppercase tracking-wide">
                Actual Cost
              </h3>
              {taxResults.betterMethod === 'actual' && (
                <span className="text-xs px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400">
                  Better
                </span>
              )}
            </div>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Running expenses</span>
                <span className="text-white">{formatCurrency(actualCostResults.runningExpenses)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Occupancy expenses</span>
                <span className="text-white">{formatCurrency(actualCostResults.occupancyExpenses)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Equipment depreciation</span>
                <span className="text-white">{formatCurrency(actualCostResults.equipmentDeduction)}</span>
              </div>
              <hr className="border-white/10" />
              <div className="flex justify-between">
                <span className="text-sm font-semibold text-white">Total Deduction</span>
                <span className="text-blue-400 font-bold">{formatCurrency(actualCostResults.totalDeduction)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-slate-400">Tax saved</span>
                <span className="text-blue-400 font-semibold">{formatCurrency(taxResults.actualTaxSaved)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tax Savings Insight */}
        <div className="bg-gradient-to-r from-teal-500/10 to-blue-500/10 border border-teal-500/20 rounded-xl p-6 text-center">
          <p className="text-xs text-slate-400 uppercase tracking-wide mb-2">Your best WFH deduction saves you</p>
          <p className="text-4xl font-bold text-teal-400">
            {formatCurrency(Math.max(taxResults.fixedTaxSaved, taxResults.actualTaxSaved))}
          </p>
          <p className="text-sm text-slate-400 mt-2">
            in tax this financial year (at {Math.round(taxResults.marginalRate * 100)}% +
            2% Medicare levy)
          </p>
        </div>

        {/* Tax Bracket Reference */}
        <div>
          <h3 className="text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wide">
            2025-26 Tax Brackets Reference
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-2 text-slate-400 font-medium">Taxable Income</th>
                  <th className="text-right py-2 text-slate-400 font-medium">Tax Rate</th>
                  <th className="text-right py-2 text-slate-400 font-medium">+ Medicare</th>
                  <th className="text-right py-2 text-slate-400 font-medium">Per $1,000 Deducted</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr className={taxResults.marginalRate === 0 ? 'bg-teal-500/5' : ''}>
                  <td className="py-2 text-white">$0 - $18,200</td>
                  <td className="py-2 text-right text-emerald-400">0%</td>
                  <td className="py-2 text-right text-emerald-400">0%</td>
                  <td className="py-2 text-right text-slate-400">$0</td>
                </tr>
                <tr className={taxResults.marginalRate === 0.16 ? 'bg-teal-500/5' : ''}>
                  <td className="py-2 text-white">$18,201 - $45,000</td>
                  <td className="py-2 text-right text-emerald-400">16%</td>
                  <td className="py-2 text-right text-emerald-400">18%</td>
                  <td className="py-2 text-right text-teal-400">$180</td>
                </tr>
                <tr className={taxResults.marginalRate === 0.30 ? 'bg-teal-500/5' : ''}>
                  <td className="py-2 text-white">$45,001 - $135,000</td>
                  <td className="py-2 text-right text-amber-400">30%</td>
                  <td className="py-2 text-right text-amber-400">32%</td>
                  <td className="py-2 text-right text-teal-400">$320</td>
                </tr>
                <tr className={taxResults.marginalRate === 0.37 ? 'bg-teal-500/5' : ''}>
                  <td className="py-2 text-white">$135,001 - $190,000</td>
                  <td className="py-2 text-right text-orange-400">37%</td>
                  <td className="py-2 text-right text-orange-400">39%</td>
                  <td className="py-2 text-right text-teal-400">$390</td>
                </tr>
                <tr className={taxResults.marginalRate === 0.45 ? 'bg-teal-500/5' : ''}>
                  <td className="py-2 text-white">$190,001+</td>
                  <td className="py-2 text-right text-rose-400">45%</td>
                  <td className="py-2 text-right text-rose-400">47%</td>
                  <td className="py-2 text-right text-teal-400">$470</td>
                </tr>
              </tbody>
            </table>
          </div>
          {taxResults.income > 0 && (
            <p className="text-xs text-slate-500 mt-2">
              Your current marginal rate is highlighted above. Based on your{' '}
              {formatCurrency(taxResults.income)} income, every $1 of WFH deduction saves
              you {Math.round((taxResults.marginalRate + 0.02) * 100)} cents in tax.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
