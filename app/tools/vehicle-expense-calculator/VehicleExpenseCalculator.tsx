'use client';

import { useState, useCallback, useMemo } from 'react';

// --- Constants ---
const ATO_CENTS_PER_KM = 0.85;
const ATO_MAX_KM = 5000;
const ATO_EFFECTIVE_LIFE_YEARS = 8;
const DIMINISHING_VALUE_RATE = 2 / ATO_EFFECTIVE_LIFE_YEARS; // 25%

const TAX_BRACKETS = [
  { label: '0% ($0 – $18,200)', rate: 0 },
  { label: '16% ($18,201 – $45,000)', rate: 0.16 },
  { label: '30% ($45,001 – $135,000)', rate: 0.30 },
  { label: '37% ($135,001 – $190,000)', rate: 0.37 },
  { label: '45% ($190,001+)', rate: 0.45 },
];

const MEDICARE_LEVY = 0.02;

type Tab = 'cents-per-km' | 'logbook' | 'comparison';

interface LogbookExpenses {
  fuelOil: number;
  registration: number;
  insurance: number;
  servicing: number;
  useDepreciation: boolean;
  leasePayments: number;
  carValue: number;
  carAge: number;
  tolls: number;
  parking: number;
  roadsideAssistance: number;
}

interface OtherTravel {
  publicTransport: number;
  rideshare: number;
  flights: number;
  accommodation: number;
  meals: number;
}

interface Preset {
  label: string;
  description: string;
  expenses: Partial<LogbookExpenses>;
}

const PRESETS: Preset[] = [
  {
    label: 'Small car (city)',
    description: 'Typical hatchback, mostly metro driving',
    expenses: {
      fuelOil: 1800,
      registration: 350,
      insurance: 900,
      servicing: 600,
      tolls: 400,
      parking: 300,
      roadsideAssistance: 120,
      carValue: 22000,
      carAge: 3,
    },
  },
  {
    label: 'Medium car (mixed)',
    description: 'Sedan, mix of city and suburban',
    expenses: {
      fuelOil: 2800,
      registration: 450,
      insurance: 1200,
      servicing: 900,
      tolls: 600,
      parking: 500,
      roadsideAssistance: 150,
      carValue: 35000,
      carAge: 2,
    },
  },
  {
    label: 'Large car/SUV (regional)',
    description: 'SUV or ute, regular regional travel',
    expenses: {
      fuelOil: 4200,
      registration: 550,
      insurance: 1600,
      servicing: 1300,
      tolls: 200,
      parking: 400,
      roadsideAssistance: 180,
      carValue: 55000,
      carAge: 1,
    },
  },
];

function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

function formatCurrencyDecimals(value: number): string {
  return new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

export default function VehicleExpenseCalculator() {
  const [activeTab, setActiveTab] = useState<Tab>('cents-per-km');

  // Cents per KM state
  const [businessKm, setBusinessKm] = useState(3000);

  // Logbook state
  const [totalKm, setTotalKm] = useState(20000);
  const [businessPercent, setBusinessPercent] = useState(60);
  const [expenses, setExpenses] = useState<LogbookExpenses>({
    fuelOil: 2800,
    registration: 450,
    insurance: 1200,
    servicing: 900,
    useDepreciation: true,
    leasePayments: 0,
    carValue: 35000,
    carAge: 2,
    tolls: 600,
    parking: 500,
    roadsideAssistance: 150,
  });

  // Other travel state
  const [otherTravel, setOtherTravel] = useState<OtherTravel>({
    publicTransport: 0,
    rideshare: 0,
    flights: 0,
    accommodation: 0,
    meals: 0,
  });

  // Tax bracket state
  const [taxBracketIndex, setTaxBracketIndex] = useState(2); // default 30%

  // Copied state
  const [copied, setCopied] = useState(false);

  // --- Calculations ---
  const centsPerKmDeduction = useMemo(() => {
    return Math.min(businessKm, ATO_MAX_KM) * ATO_CENTS_PER_KM;
  }, [businessKm]);

  const depreciation = useMemo(() => {
    if (!expenses.useDepreciation || expenses.carValue <= 0) return 0;
    // Diminishing value method: base value * (days held / 365) * (200% / effective life)
    // For simplicity, assume full year held. After carAge years of depreciation:
    const remainingValue = expenses.carValue * Math.pow(1 - DIMINISHING_VALUE_RATE, expenses.carAge);
    return remainingValue * DIMINISHING_VALUE_RATE;
  }, [expenses.useDepreciation, expenses.carValue, expenses.carAge]);

  const totalLogbookExpenses = useMemo(() => {
    const depOrLease = expenses.useDepreciation ? depreciation : expenses.leasePayments;
    return (
      expenses.fuelOil +
      expenses.registration +
      expenses.insurance +
      expenses.servicing +
      depOrLease +
      expenses.tolls +
      expenses.parking +
      expenses.roadsideAssistance
    );
  }, [expenses, depreciation]);

  const logbookDeduction = useMemo(() => {
    return totalLogbookExpenses * (businessPercent / 100);
  }, [totalLogbookExpenses, businessPercent]);

  const otherTravelTotal = useMemo(() => {
    return (
      otherTravel.publicTransport +
      otherTravel.rideshare +
      otherTravel.flights +
      otherTravel.accommodation +
      otherTravel.meals
    );
  }, [otherTravel]);

  const betterMethod = useMemo(() => {
    if (logbookDeduction > centsPerKmDeduction) return 'logbook';
    if (centsPerKmDeduction > logbookDeduction) return 'cents-per-km';
    return 'equal';
  }, [logbookDeduction, centsPerKmDeduction]);

  const betterDeduction = useMemo(() => {
    return Math.max(logbookDeduction, centsPerKmDeduction);
  }, [logbookDeduction, centsPerKmDeduction]);

  const marginalRate = TAX_BRACKETS[taxBracketIndex].rate + MEDICARE_LEVY;
  const taxSavingsCentsKm = centsPerKmDeduction * marginalRate;
  const taxSavingsLogbook = logbookDeduction * marginalRate;
  const taxSavingsBetter = betterDeduction * marginalRate;
  const taxSavingsOtherTravel = otherTravelTotal * marginalRate;

  // --- Handlers ---
  const updateExpense = useCallback((key: keyof LogbookExpenses, value: number | boolean) => {
    setExpenses(prev => ({ ...prev, [key]: value }));
  }, []);

  const updateOtherTravel = useCallback((key: keyof OtherTravel, value: number) => {
    setOtherTravel(prev => ({ ...prev, [key]: value }));
  }, []);

  const applyPreset = useCallback((preset: Preset) => {
    setExpenses(prev => ({
      ...prev,
      ...preset.expenses,
      useDepreciation: true,
      leasePayments: 0,
    }));
  }, []);

  const parseNumber = (val: string): number => {
    const parsed = parseFloat(val.replace(/,/g, ''));
    return isNaN(parsed) ? 0 : Math.max(0, parsed);
  };

  const copyToClipboard = useCallback(() => {
    const difference = Math.abs(logbookDeduction - centsPerKmDeduction);
    const lines = [
      '=== VEHICLE & TRAVEL EXPENSE SUMMARY ===',
      '',
      '--- Cents Per KM Method ---',
      `Business kilometres: ${businessKm.toLocaleString()} km`,
      `Rate: $0.85/km (2024-25)`,
      `Effective km (capped at 5,000): ${Math.min(businessKm, ATO_MAX_KM).toLocaleString()} km`,
      `Deduction: ${formatCurrency(centsPerKmDeduction)}`,
      '',
      '--- Logbook Method ---',
      `Total km driven: ${totalKm.toLocaleString()} km`,
      `Business use: ${businessPercent}%`,
      `Total vehicle expenses: ${formatCurrency(totalLogbookExpenses)}`,
      `  Fuel & oil: ${formatCurrency(expenses.fuelOil)}`,
      `  Registration: ${formatCurrency(expenses.registration)}`,
      `  Insurance: ${formatCurrency(expenses.insurance)}`,
      `  Servicing & repairs: ${formatCurrency(expenses.servicing)}`,
      expenses.useDepreciation
        ? `  Depreciation: ${formatCurrency(depreciation)} (car value ${formatCurrency(expenses.carValue)}, age ${expenses.carAge} yrs)`
        : `  Lease payments: ${formatCurrency(expenses.leasePayments)}`,
      `  Tolls: ${formatCurrency(expenses.tolls)}`,
      `  Parking: ${formatCurrency(expenses.parking)}`,
      `  Roadside assistance: ${formatCurrency(expenses.roadsideAssistance)}`,
      `Deduction: ${formatCurrency(logbookDeduction)}`,
      '',
      '--- Comparison ---',
      `Better method: ${betterMethod === 'cents-per-km' ? 'Cents per KM' : betterMethod === 'logbook' ? 'Logbook' : 'Equal'}`,
      `Difference: ${formatCurrency(difference)}`,
      `Tax savings (${TAX_BRACKETS[taxBracketIndex].label}): ${formatCurrency(taxSavingsBetter)}`,
      '',
    ];

    if (otherTravelTotal > 0) {
      lines.push(
        '--- Other Travel Expenses ---',
        `Public transport: ${formatCurrency(otherTravel.publicTransport)}`,
        `Rideshare: ${formatCurrency(otherTravel.rideshare)}`,
        `Flights: ${formatCurrency(otherTravel.flights)}`,
        `Accommodation: ${formatCurrency(otherTravel.accommodation)}`,
        `Meals (overnight): ${formatCurrency(otherTravel.meals)}`,
        `Total other travel: ${formatCurrency(otherTravelTotal)}`,
        `Tax savings on other travel: ${formatCurrency(taxSavingsOtherTravel)}`,
        '',
      );
    }

    lines.push(
      '--- Total ---',
      `Vehicle deduction (better method): ${formatCurrency(betterDeduction)}`,
      `Other travel deductions: ${formatCurrency(otherTravelTotal)}`,
      `Combined deductions: ${formatCurrency(betterDeduction + otherTravelTotal)}`,
      `Combined tax savings: ${formatCurrency(taxSavingsBetter + taxSavingsOtherTravel)}`,
      '',
      'Generated by InvoiceFlow — https://www.invoiceflow.au/tools/vehicle-expense-calculator',
    );

    navigator.clipboard.writeText(lines.join('\n')).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [
    businessKm, centsPerKmDeduction, totalKm, businessPercent, totalLogbookExpenses,
    expenses, depreciation, logbookDeduction, betterMethod, betterDeduction,
    taxBracketIndex, taxSavingsBetter, otherTravel, otherTravelTotal, taxSavingsOtherTravel,
  ]);

  // --- Tab definitions ---
  const tabs: { key: Tab; label: string; icon: React.ReactNode }[] = [
    {
      key: 'cents-per-km',
      label: 'Cents per KM',
      icon: (
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
    {
      key: 'logbook',
      label: 'Logbook Method',
      icon: (
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      key: 'comparison',
      label: 'Comparison',
      icon: (
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="space-y-8">
      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="glass rounded-xl p-4 text-center">
          <p className="text-xs text-gray-400 mb-1">Cents/km Deduction</p>
          <p className="heading-font text-xl font-bold text-white">{formatCurrency(centsPerKmDeduction)}</p>
        </div>
        <div className="glass rounded-xl p-4 text-center">
          <p className="text-xs text-gray-400 mb-1">Logbook Deduction</p>
          <p className="heading-font text-xl font-bold text-white">{formatCurrency(logbookDeduction)}</p>
        </div>
        <div className="glass rounded-xl p-4 text-center">
          <p className="text-xs text-gray-400 mb-1">Better Method</p>
          <p className="heading-font text-lg font-bold">
            {betterMethod === 'cents-per-km' ? (
              <span className="text-teal-400">Cents/km</span>
            ) : betterMethod === 'logbook' ? (
              <span className="text-blue-400">Logbook</span>
            ) : (
              <span className="text-gray-300">Equal</span>
            )}
          </p>
        </div>
        <div className="glass rounded-xl p-4 text-center">
          <p className="text-xs text-gray-400 mb-1">Tax Savings</p>
          <p className="heading-font text-xl font-bold bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
            {formatCurrency(taxSavingsBetter + taxSavingsOtherTravel)}
          </p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex gap-2 p-1 glass rounded-xl">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`flex-1 flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-all ${
              activeTab === tab.key
                ? 'bg-gradient-to-r from-teal-500/20 to-blue-500/20 text-white border border-teal-500/30'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            {tab.icon}
            <span className="hidden sm:inline">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="glass rounded-2xl p-6 md:p-8">
        {/* --- Cents per KM Tab --- */}
        {activeTab === 'cents-per-km' && (
          <div className="space-y-6">
            <div>
              <h2 className="heading-font text-xl font-bold text-white mb-1">Cents Per Kilometre Method</h2>
              <p className="text-sm text-gray-400">
                Claim a flat rate per business kilometre. ATO rate for 2024-25: <span className="text-teal-300 font-semibold">85c/km</span>, capped at 5,000 km.
              </p>
            </div>

            {/* Business KM input */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Business Kilometres Driven
              </label>
              <div className="flex items-center gap-4">
                <input
                  type="range"
                  min={0}
                  max={25000}
                  step={100}
                  value={businessKm}
                  onChange={(e) => setBusinessKm(parseInt(e.target.value))}
                  className="flex-1 h-2 rounded-full appearance-none bg-white/10 accent-teal-500 cursor-pointer"
                />
                <div className="w-28">
                  <input
                    type="text"
                    value={businessKm.toLocaleString()}
                    onChange={(e) => setBusinessKm(parseNumber(e.target.value))}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-white text-right text-sm focus:outline-none focus:border-teal-500/50"
                  />
                </div>
                <span className="text-sm text-gray-400 w-6">km</span>
              </div>
            </div>

            {/* Warning if over 5000 */}
            {businessKm > ATO_MAX_KM && (
              <div className="flex items-start gap-3 rounded-lg border border-amber-500/30 bg-amber-500/10 p-4">
                <svg className="h-5 w-5 text-amber-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
                <div>
                  <p className="text-sm text-amber-200 font-medium">Over 5,000 km limit</p>
                  <p className="text-xs text-amber-300/70 mt-1">
                    The ATO cents-per-km method is capped at 5,000 km. Your deduction is calculated on 5,000 km only.
                    Consider the logbook method for potentially higher deductions.
                  </p>
                </div>
              </div>
            )}

            {/* Result */}
            <div className="rounded-xl bg-gradient-to-r from-teal-500/10 to-blue-500/10 border border-teal-500/20 p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-400">Rate</span>
                <span className="text-sm text-white font-medium">$0.85/km (2024-25)</span>
              </div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-400">Effective kilometres</span>
                <span className="text-sm text-white font-medium">{Math.min(businessKm, ATO_MAX_KM).toLocaleString()} km</span>
              </div>
              <div className="border-t border-white/10 pt-4 flex items-center justify-between">
                <span className="text-base text-white font-semibold">Your Deduction</span>
                <span className="heading-font text-2xl font-bold bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
                  {formatCurrency(centsPerKmDeduction)}
                </span>
              </div>
            </div>

            <p className="text-xs text-gray-500 italic">
              No receipts are needed for this method, but you must be able to show how you calculated your business kilometres (e.g. diary entries, reasonable estimates based on regular trips).
            </p>
          </div>
        )}

        {/* --- Logbook Method Tab --- */}
        {activeTab === 'logbook' && (
          <div className="space-y-6">
            <div>
              <h2 className="heading-font text-xl font-bold text-white mb-1">Logbook Method</h2>
              <p className="text-sm text-gray-400">
                Claim the business-use percentage of your actual vehicle running costs. Requires a valid 12-week logbook.
              </p>
            </div>

            {/* Quick Presets */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Quick Presets</label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {PRESETS.map((preset) => (
                  <button
                    key={preset.label}
                    onClick={() => applyPreset(preset)}
                    className="text-left rounded-lg border border-white/10 bg-white/5 p-3 hover:border-teal-500/30 hover:bg-teal-500/5 transition-all"
                  >
                    <p className="text-sm font-medium text-white">{preset.label}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{preset.description}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Total KM and Business % */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Total Kilometres Driven (Year)
                </label>
                <input
                  type="text"
                  value={totalKm.toLocaleString()}
                  onChange={(e) => setTotalKm(parseNumber(e.target.value))}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:border-teal-500/50"
                  placeholder="e.g. 20,000"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Business Use: <span className="text-teal-300 font-semibold">{businessPercent}%</span>
                </label>
                <input
                  type="range"
                  min={0}
                  max={100}
                  step={1}
                  value={businessPercent}
                  onChange={(e) => setBusinessPercent(parseInt(e.target.value))}
                  className="w-full h-2 rounded-full appearance-none bg-white/10 accent-teal-500 cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>0%</span>
                  <span>50%</span>
                  <span>100%</span>
                </div>
              </div>
            </div>

            {/* Expenses grid */}
            <div>
              <h3 className="text-sm font-medium text-gray-300 mb-3">Vehicle Running Costs</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <ExpenseInput label="Fuel & Oil" value={expenses.fuelOil} onChange={(v) => updateExpense('fuelOil', v)} />
                <ExpenseInput label="Registration" value={expenses.registration} onChange={(v) => updateExpense('registration', v)} />
                <ExpenseInput label="Insurance" value={expenses.insurance} onChange={(v) => updateExpense('insurance', v)} />
                <ExpenseInput label="Servicing & Repairs" value={expenses.servicing} onChange={(v) => updateExpense('servicing', v)} />
                <ExpenseInput label="Tolls" value={expenses.tolls} onChange={(v) => updateExpense('tolls', v)} />
                <ExpenseInput label="Parking" value={expenses.parking} onChange={(v) => updateExpense('parking', v)} />
                <ExpenseInput label="Roadside Assistance" value={expenses.roadsideAssistance} onChange={(v) => updateExpense('roadsideAssistance', v)} />
              </div>
            </div>

            {/* Depreciation vs Lease toggle */}
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-center gap-4 mb-4">
                <label className="text-sm font-medium text-gray-300">Cost method:</label>
                <div className="flex gap-2">
                  <button
                    onClick={() => updateExpense('useDepreciation', true)}
                    className={`rounded-lg px-4 py-1.5 text-sm font-medium transition-all ${
                      expenses.useDepreciation
                        ? 'bg-teal-500/20 text-teal-300 border border-teal-500/30'
                        : 'text-gray-400 border border-white/10 hover:text-white'
                    }`}
                  >
                    Depreciation
                  </button>
                  <button
                    onClick={() => updateExpense('useDepreciation', false)}
                    className={`rounded-lg px-4 py-1.5 text-sm font-medium transition-all ${
                      !expenses.useDepreciation
                        ? 'bg-teal-500/20 text-teal-300 border border-teal-500/30'
                        : 'text-gray-400 border border-white/10 hover:text-white'
                    }`}
                  >
                    Lease Payments
                  </button>
                </div>
              </div>

              {expenses.useDepreciation ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-gray-400 mb-1">Car Purchase Value</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">$</span>
                      <input
                        type="text"
                        value={expenses.carValue.toLocaleString()}
                        onChange={(e) => updateExpense('carValue', parseNumber(e.target.value))}
                        className="w-full bg-white/5 border border-white/10 rounded-lg pl-7 pr-3 py-2.5 text-white text-sm focus:outline-none focus:border-teal-500/50"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs text-gray-400 mb-1">Car Age (years owned)</label>
                    <input
                      type="number"
                      min={0}
                      max={20}
                      value={expenses.carAge}
                      onChange={(e) => updateExpense('carAge', Math.max(0, parseInt(e.target.value) || 0))}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:border-teal-500/50"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Annual depreciation (diminishing value, 8-year effective life):</span>
                      <span className="text-teal-300 font-semibold">{formatCurrency(depreciation)}</span>
                    </div>
                  </div>
                </div>
              ) : (
                <ExpenseInput label="Annual Lease Payments" value={expenses.leasePayments} onChange={(v) => updateExpense('leasePayments', v)} />
              )}
            </div>

            {/* Result */}
            <div className="rounded-xl bg-gradient-to-r from-teal-500/10 to-blue-500/10 border border-teal-500/20 p-6 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">Total vehicle expenses</span>
                <span className="text-sm text-white font-medium">{formatCurrency(totalLogbookExpenses)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">Business use percentage</span>
                <span className="text-sm text-white font-medium">{businessPercent}%</span>
              </div>
              <div className="border-t border-white/10 pt-3 flex items-center justify-between">
                <span className="text-base text-white font-semibold">Your Deduction</span>
                <span className="heading-font text-2xl font-bold bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
                  {formatCurrency(logbookDeduction)}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* --- Comparison Tab --- */}
        {activeTab === 'comparison' && (
          <div className="space-y-6">
            <div>
              <h2 className="heading-font text-xl font-bold text-white mb-1">Method Comparison</h2>
              <p className="text-sm text-gray-400">
                See which ATO method gives you a larger deduction based on your inputs.
              </p>
            </div>

            {/* Side by side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className={`rounded-xl border p-6 transition-all ${
                betterMethod === 'cents-per-km'
                  ? 'border-teal-500/40 bg-teal-500/10'
                  : 'border-white/10 bg-white/5'
              }`}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-semibold text-white">Cents Per KM</h3>
                  {betterMethod === 'cents-per-km' && (
                    <span className="rounded-full bg-teal-500/20 border border-teal-500/30 px-2.5 py-0.5 text-xs font-medium text-teal-300">
                      Winner
                    </span>
                  )}
                </div>
                <p className="heading-font text-3xl font-bold text-white mb-3">{formatCurrency(centsPerKmDeduction)}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-gray-400">
                    <span>Business km</span>
                    <span className="text-white">{businessKm.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Effective km</span>
                    <span className="text-white">{Math.min(businessKm, ATO_MAX_KM).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Rate</span>
                    <span className="text-white">$0.85/km</span>
                  </div>
                  <div className="border-t border-white/10 pt-2 flex justify-between">
                    <span className="text-gray-400">Tax savings</span>
                    <span className="text-teal-300 font-medium">{formatCurrency(taxSavingsCentsKm)}</span>
                  </div>
                </div>
              </div>

              <div className={`rounded-xl border p-6 transition-all ${
                betterMethod === 'logbook'
                  ? 'border-blue-500/40 bg-blue-500/10'
                  : 'border-white/10 bg-white/5'
              }`}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-semibold text-white">Logbook Method</h3>
                  {betterMethod === 'logbook' && (
                    <span className="rounded-full bg-blue-500/20 border border-blue-500/30 px-2.5 py-0.5 text-xs font-medium text-blue-300">
                      Winner
                    </span>
                  )}
                </div>
                <p className="heading-font text-3xl font-bold text-white mb-3">{formatCurrency(logbookDeduction)}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-gray-400">
                    <span>Total expenses</span>
                    <span className="text-white">{formatCurrency(totalLogbookExpenses)}</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Business use</span>
                    <span className="text-white">{businessPercent}%</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Total km</span>
                    <span className="text-white">{totalKm.toLocaleString()}</span>
                  </div>
                  <div className="border-t border-white/10 pt-2 flex justify-between">
                    <span className="text-gray-400">Tax savings</span>
                    <span className="text-blue-300 font-medium">{formatCurrency(taxSavingsLogbook)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Winner banner */}
            {betterMethod !== 'equal' && (
              <div className={`rounded-xl border p-5 ${
                betterMethod === 'cents-per-km'
                  ? 'border-teal-500/30 bg-teal-500/10'
                  : 'border-blue-500/30 bg-blue-500/10'
              }`}>
                <div className="flex items-center gap-3">
                  <div className={`rounded-full p-2 ${
                    betterMethod === 'cents-per-km' ? 'bg-teal-500/20' : 'bg-blue-500/20'
                  }`}>
                    <svg className={`h-5 w-5 ${betterMethod === 'cents-per-km' ? 'text-teal-400' : 'text-blue-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-semibold">
                      {betterMethod === 'cents-per-km' ? 'Cents Per KM' : 'Logbook Method'} saves you more
                    </p>
                    <p className="text-sm text-gray-400 mt-0.5">
                      You would save an extra{' '}
                      <span className="text-white font-medium">
                        {formatCurrency(Math.abs(logbookDeduction - centsPerKmDeduction))}
                      </span>{' '}
                      in deductions ({formatCurrency(Math.abs(taxSavingsLogbook - taxSavingsCentsKm))} more in tax savings)
                      compared to the other method.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {betterMethod === 'equal' && (
              <div className="rounded-xl border border-white/20 bg-white/5 p-5">
                <p className="text-white font-semibold text-center">Both methods give the same deduction</p>
                <p className="text-sm text-gray-400 text-center mt-1">
                  Consider using cents-per-km for simplicity since it requires fewer records.
                </p>
              </div>
            )}

            {/* Tax bracket selector */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Marginal Tax Rate (for tax savings estimate)
              </label>
              <select
                value={taxBracketIndex}
                onChange={(e) => setTaxBracketIndex(parseInt(e.target.value))}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:border-teal-500/50 appearance-none cursor-pointer"
              >
                {TAX_BRACKETS.map((b, i) => (
                  <option key={i} value={i} className="bg-[#1a2236] text-white">
                    {b.label}
                  </option>
                ))}
              </select>
              <p className="text-xs text-gray-500 mt-1">
                Tax savings include the 2% Medicare levy. Effective rate: {((marginalRate) * 100).toFixed(0)}%
              </p>
            </div>

            {/* Recommendation */}
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-sm font-semibold text-white mb-2">Recommendation</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                {betterMethod === 'cents-per-km' ? (
                  <>
                    Based on your inputs, the <strong className="text-teal-300">cents-per-km method</strong> gives a higher deduction.
                    This is common when vehicle running costs are relatively low or your business-use percentage is modest.
                    The cents-per-km method also has the advantage of simpler record keeping — you do not need to keep receipts
                    for individual expenses, only evidence of how you calculated your business kilometres.
                  </>
                ) : betterMethod === 'logbook' ? (
                  <>
                    Based on your inputs, the <strong className="text-blue-300">logbook method</strong> gives a higher deduction.
                    This is typical for freelancers with higher running costs, newer vehicles, or a high proportion of business driving.
                    Remember to maintain a valid 12-week logbook and keep all receipts for vehicle expenses. The logbook is valid for
                    5 years unless your driving patterns change significantly.
                  </>
                ) : (
                  <>
                    Both methods produce the same deduction with your current inputs. The cents-per-km method is simpler since
                    it does not require a logbook or receipts. However, if your circumstances change (higher expenses, more business
                    driving), the logbook method could become more advantageous in future years.
                  </>
                )}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Other Travel Expenses */}
      <div className="glass rounded-2xl p-6 md:p-8">
        <div className="mb-6">
          <h2 className="heading-font text-xl font-bold text-white mb-1">Other Travel Expenses</h2>
          <p className="text-sm text-gray-400">
            Non-vehicle travel costs you can claim as a deduction (separate from your car expense method).
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <ExpenseInput label="Public Transport" value={otherTravel.publicTransport} onChange={(v) => updateOtherTravel('publicTransport', v)} />
          <ExpenseInput label="Uber / Rideshare" value={otherTravel.rideshare} onChange={(v) => updateOtherTravel('rideshare', v)} />
          <ExpenseInput label="Flights" value={otherTravel.flights} onChange={(v) => updateOtherTravel('flights', v)} />
          <ExpenseInput label="Accommodation (work travel)" value={otherTravel.accommodation} onChange={(v) => updateOtherTravel('accommodation', v)} />
          <ExpenseInput label="Meals (overnight travel only)" value={otherTravel.meals} onChange={(v) => updateOtherTravel('meals', v)} />
        </div>

        <div className="rounded-xl bg-gradient-to-r from-teal-500/10 to-blue-500/10 border border-teal-500/20 p-5">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-gray-400">Total other travel deductions</span>
            <span className="heading-font text-xl font-bold text-white">{formatCurrency(otherTravelTotal)}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-400">Tax savings on other travel</span>
            <span className="text-sm text-teal-300 font-medium">{formatCurrency(taxSavingsOtherTravel)}</span>
          </div>
        </div>
      </div>

      {/* Combined Total + Copy */}
      <div className="glass rounded-2xl p-6 md:p-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="heading-font text-xl font-bold text-white">Combined Summary</h2>
          <button
            onClick={copyToClipboard}
            className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 hover:text-white hover:border-teal-500/30 transition-all"
          >
            {copied ? (
              <>
                <svg className="h-4 w-4 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Copied!
              </>
            ) : (
              <>
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Copy Summary
              </>
            )}
          </button>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-400">Vehicle deduction (better method)</span>
            <span className="text-white font-medium">{formatCurrency(betterDeduction)}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-400">Other travel deductions</span>
            <span className="text-white font-medium">{formatCurrency(otherTravelTotal)}</span>
          </div>
          <div className="border-t border-white/10 pt-3 flex items-center justify-between">
            <span className="text-base text-white font-semibold">Total Travel Deductions</span>
            <span className="heading-font text-2xl font-bold bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
              {formatCurrency(betterDeduction + otherTravelTotal)}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-400">Estimated tax savings</span>
            <span className="text-teal-300 font-semibold">
              {formatCurrency(taxSavingsBetter + taxSavingsOtherTravel)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- Reusable Expense Input ---
function ExpenseInput({
  label,
  value,
  onChange,
}: {
  label: string;
  value: number;
  onChange: (value: number) => void;
}) {
  const parseNumber = (val: string): number => {
    const parsed = parseFloat(val.replace(/,/g, ''));
    return isNaN(parsed) ? 0 : Math.max(0, parsed);
  };

  return (
    <div>
      <label className="block text-xs text-gray-400 mb-1">{label}</label>
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">$</span>
        <input
          type="text"
          value={value === 0 ? '' : value.toLocaleString()}
          onChange={(e) => onChange(parseNumber(e.target.value))}
          placeholder="0"
          className="w-full bg-white/5 border border-white/10 rounded-lg pl-7 pr-3 py-2.5 text-white text-sm focus:outline-none focus:border-teal-500/50 placeholder-gray-600"
        />
      </div>
    </div>
  );
}
