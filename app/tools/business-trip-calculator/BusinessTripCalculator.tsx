'use client';

import { useState, useMemo } from 'react';

/* ---- Types ---- */

type TripType = 'domestic_capital' | 'domestic_regional_high' | 'domestic_regional' | 'international';
type TripPurpose = 'client_meeting' | 'conference' | 'project_work' | 'training' | 'business_development';
type TaxBracket = '0' | '0.16' | '0.30' | '0.37' | '0.45';

interface ExpenseInputs {
  flights: number;
  accommodationPerNight: number;
  breakfastPerDay: number;
  lunchPerDay: number;
  dinnerPerDay: number;
  incidentalsPerDay: number;
  carHire: number;
  conferenceFees: number;
  internetPhone: number;
  other: number;
}

interface TripInputs {
  tripType: TripType;
  destination: string;
  nights: number;
  purpose: TripPurpose;
  expenses: ExpenseInputs;
  totalDays: number;
  businessDays: number;
  taxBracket: TaxBracket;
}

/* ---- Constants ---- */

const TRIP_TYPE_LABELS: Record<TripType, string> = {
  domestic_capital: 'Domestic — Capital City',
  domestic_regional_high: 'Domestic — High-Cost Regional',
  domestic_regional: 'Domestic — Regional',
  international: 'International',
};

const TRIP_TYPE_DESCRIPTIONS: Record<TripType, string> = {
  domestic_capital: 'Sydney, Melbourne, Brisbane, Perth, Adelaide, Canberra, Hobart',
  domestic_regional_high: 'Gold Coast, Cairns, Darwin, resort areas',
  domestic_regional: 'Other regional towns and cities',
  international: 'Any overseas destination',
};

const PURPOSE_LABELS: Record<TripPurpose, string> = {
  client_meeting: 'Client Meeting',
  conference: 'Conference / Event',
  project_work: 'On-Site Project Work',
  training: 'Professional Training',
  business_development: 'Business Development',
};

const TAX_BRACKETS: { value: TaxBracket; label: string; description: string }[] = [
  { value: '0', label: '0% — Tax-Free', description: '$0 – $18,200' },
  { value: '0.16', label: '16%', description: '$18,201 – $45,000' },
  { value: '0.30', label: '30%', description: '$45,001 – $135,000' },
  { value: '0.37', label: '37%', description: '$135,001 – $190,000' },
  { value: '0.45', label: '45%', description: '$190,001+' },
];

// ATO Reasonable Travel Amounts 2025-26 (TD 2025/3 approximate rates)
const ATO_RATES = {
  accommodation: {
    domestic_capital: 283,
    domestic_regional_high: 200,
    domestic_regional: 150,
    international: 350,
  },
  meals: {
    breakfast: 33.55,
    lunch: 47.30,
    dinner: 63.10,
  },
  incidentals: 22.65,
  // International meal rates (simplified average)
  international_meals: {
    breakfast: 40.00,
    lunch: 55.00,
    dinner: 75.00,
  },
  international_incidentals: 30.00,
};

/* ---- Helpers ---- */

function fmtCurrency(n: number): string {
  return '$' + n.toLocaleString('en-AU', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function fmtCurrencyWhole(n: number): string {
  return '$' + n.toLocaleString('en-AU', { maximumFractionDigits: 0 });
}

function fmtPct(n: number): string {
  return n.toFixed(1) + '%';
}

/* ---- Component ---- */

export default function BusinessTripCalculator() {
  const [step, setStep] = useState(1);
  const [calculated, setCalculated] = useState(false);
  const [copied, setCopied] = useState(false);

  const getDefaultMealRates = (tripType: TripType) => {
    if (tripType === 'international') {
      return {
        breakfastPerDay: ATO_RATES.international_meals.breakfast,
        lunchPerDay: ATO_RATES.international_meals.lunch,
        dinnerPerDay: ATO_RATES.international_meals.dinner,
        incidentalsPerDay: ATO_RATES.international_incidentals,
      };
    }
    return {
      breakfastPerDay: ATO_RATES.meals.breakfast,
      lunchPerDay: ATO_RATES.meals.lunch,
      dinnerPerDay: ATO_RATES.meals.dinner,
      incidentalsPerDay: ATO_RATES.incidentals,
    };
  };

  const [inputs, setInputs] = useState<TripInputs>({
    tripType: 'domestic_capital',
    destination: '',
    nights: 3,
    purpose: 'client_meeting',
    expenses: {
      flights: 450,
      accommodationPerNight: 250,
      breakfastPerDay: ATO_RATES.meals.breakfast,
      lunchPerDay: ATO_RATES.meals.lunch,
      dinnerPerDay: ATO_RATES.meals.dinner,
      incidentalsPerDay: ATO_RATES.incidentals,
      carHire: 0,
      conferenceFees: 0,
      internetPhone: 25,
      other: 0,
    },
    totalDays: 4,
    businessDays: 3,
    taxBracket: '0.30',
  });

  const updateExpense = (field: keyof ExpenseInputs, value: number) => {
    setInputs((prev) => ({
      ...prev,
      expenses: { ...prev.expenses, [field]: value },
    }));
  };

  const update = <K extends keyof TripInputs>(field: K, value: TripInputs[K]) => {
    setInputs((prev) => {
      const next = { ...prev, [field]: value };

      // When trip type changes, update meal defaults
      if (field === 'tripType') {
        const defaults = getDefaultMealRates(value as TripType);
        next.expenses = {
          ...next.expenses,
          ...defaults,
          accommodationPerNight: ATO_RATES.accommodation[value as TripType],
        };
      }

      // When nights change, update totalDays
      if (field === 'nights') {
        next.totalDays = (value as number) + 1;
        if (next.businessDays > next.totalDays) {
          next.businessDays = next.totalDays;
        }
      }

      return next;
    });
  };

  const businessPct = inputs.totalDays > 0 ? (inputs.businessDays / inputs.totalDays) * 100 : 100;
  const isPrimaryBusiness = inputs.businessDays > inputs.totalDays / 2;
  const needsTravelDiary = inputs.nights >= 6;

  // ATO reasonable rates for selected trip type
  const atoAccommodation = ATO_RATES.accommodation[inputs.tripType];
  const atoMeals = inputs.tripType === 'international'
    ? ATO_RATES.international_meals
    : ATO_RATES.meals;
  const atoIncidentals = inputs.tripType === 'international'
    ? ATO_RATES.international_incidentals
    : ATO_RATES.incidentals;

  const results = useMemo(() => {
    const { expenses, nights, totalDays, businessDays } = inputs;
    const taxRate = parseFloat(inputs.taxBracket);
    const bPct = totalDays > 0 ? businessDays / totalDays : 1;

    // Total costs by category (full trip)
    const totalFlights = expenses.flights;
    const totalAccommodation = expenses.accommodationPerNight * nights;
    const dailyMeals = expenses.breakfastPerDay + expenses.lunchPerDay + expenses.dinnerPerDay;
    const totalMeals = dailyMeals * totalDays;
    const totalIncidentals = expenses.incidentalsPerDay * totalDays;
    const totalCarHire = expenses.carHire;
    const totalConference = expenses.conferenceFees;
    const totalInternetPhone = expenses.internetPhone;
    const totalOther = expenses.other;

    const totalTripCost =
      totalFlights +
      totalAccommodation +
      totalMeals +
      totalIncidentals +
      totalCarHire +
      totalConference +
      totalInternetPhone +
      totalOther;

    // Deductible amounts
    // Flights: 100% if primary purpose is business, 0% otherwise
    const deductibleFlights = isPrimaryBusiness ? totalFlights : 0;
    // Daily expenses: apportioned by business days
    const deductibleAccommodation = expenses.accommodationPerNight * Math.min(businessDays, nights);
    const deductibleMeals = dailyMeals * businessDays;
    const deductibleIncidentals = expenses.incidentalsPerDay * businessDays;
    // Car hire: apportioned
    const deductibleCarHire = totalCarHire * bPct;
    // Conference fees: 100% business
    const deductibleConference = totalConference;
    // Internet/phone: apportioned
    const deductibleInternetPhone = totalInternetPhone * bPct;
    // Other: apportioned
    const deductibleOther = totalOther * bPct;

    const totalDeductible =
      deductibleFlights +
      deductibleAccommodation +
      deductibleMeals +
      deductibleIncidentals +
      deductibleCarHire +
      deductibleConference +
      deductibleInternetPhone +
      deductibleOther;

    const taxSavings = totalDeductible * taxRate;
    const effectiveTripCost = totalTripCost - taxSavings;
    const perDayCost = totalDays > 0 ? totalTripCost / totalDays : 0;
    const perDayDeductible = totalDays > 0 ? totalDeductible / totalDays : 0;

    // ATO reasonable amount comparison
    const atoReasonableAccommodation = atoAccommodation * Math.min(businessDays, nights);
    const atoReasonableMeals =
      (atoMeals.breakfast + atoMeals.lunch + atoMeals.dinner) * businessDays;
    const atoReasonableIncidentals = atoIncidentals * businessDays;
    const atoReasonableTotal =
      atoReasonableAccommodation + atoReasonableMeals + atoReasonableIncidentals;

    const isWithinReasonable =
      deductibleAccommodation <= atoReasonableAccommodation &&
      deductibleMeals <= atoReasonableMeals &&
      deductibleIncidentals <= atoReasonableIncidentals;

    // Breakdown for display
    const breakdown = [
      { label: 'Flights / Transport', total: totalFlights, deductible: deductibleFlights, note: isPrimaryBusiness ? '100% (primary purpose is business)' : '0% (primary purpose is personal)' },
      { label: 'Accommodation', total: totalAccommodation, deductible: deductibleAccommodation, note: `${Math.min(businessDays, nights)} of ${nights} nights` },
      { label: 'Meals', total: totalMeals, deductible: deductibleMeals, note: `${businessDays} of ${totalDays} days` },
      { label: 'Incidentals', total: totalIncidentals, deductible: deductibleIncidentals, note: `${businessDays} of ${totalDays} days` },
      { label: 'Car Hire / Fuel', total: totalCarHire, deductible: deductibleCarHire, note: totalCarHire > 0 ? `${fmtPct(bPct * 100)} business` : 'N/A' },
      { label: 'Conference / Event Fees', total: totalConference, deductible: deductibleConference, note: totalConference > 0 ? '100% business' : 'N/A' },
      { label: 'Internet / Phone Roaming', total: totalInternetPhone, deductible: deductibleInternetPhone, note: totalInternetPhone > 0 ? `${fmtPct(bPct * 100)} business` : 'N/A' },
      { label: 'Other (taxis, parking, tolls)', total: totalOther, deductible: deductibleOther, note: totalOther > 0 ? `${fmtPct(bPct * 100)} business` : 'N/A' },
    ];

    // Compliance notes
    const complianceNotes: string[] = [];
    if (needsTravelDiary) {
      complianceNotes.push('This trip is 6+ consecutive nights. You MUST maintain a travel diary recording daily activities, business purpose, locations, and durations.');
    }
    if (!isPrimaryBusiness) {
      complianceNotes.push('The primary purpose of this trip appears to be personal (fewer business days than personal days). Transport costs (flights) are NOT deductible. Only daily expenses on business days are claimable.');
    }
    if (!isWithinReasonable) {
      complianceNotes.push('Some of your expenses exceed ATO reasonable travel amounts. You must keep receipts for ALL accommodation, meal, and incidental expenses to substantiate your claim.');
    } else {
      complianceNotes.push('Your daily expenses are within ATO reasonable travel amounts. You may claim without individual receipts (but keeping receipts is always recommended).');
    }
    complianceNotes.push('Keep all records (receipts, booking confirmations, itinerary, travel diary) for 5 years from the date you lodge your tax return.');
    if (inputs.totalDays !== inputs.businessDays) {
      complianceNotes.push('This is a mixed-purpose trip. Document the business vs personal split clearly. Only claim expenses proportional to business use.');
    }

    return {
      totalTripCost,
      totalDeductible,
      taxSavings,
      effectiveTripCost,
      perDayCost,
      perDayDeductible,
      breakdown,
      complianceNotes,
      isWithinReasonable,
      atoReasonableTotal,
      atoReasonableAccommodation,
      atoReasonableMeals,
      atoReasonableIncidentals,
      deductibleAccommodation,
      deductibleMeals,
      deductibleIncidentals,
    };
  }, [inputs, isPrimaryBusiness, needsTravelDiary, atoAccommodation, atoMeals, atoIncidentals]);

  const generateReport = (): string => {
    const lines: string[] = [];
    lines.push('='.repeat(60));
    lines.push('BUSINESS TRIP EXPENSE SUMMARY');
    lines.push('='.repeat(60));
    lines.push('');
    lines.push('TRIP DETAILS');
    lines.push('-'.repeat(45));
    lines.push(`Destination:       ${inputs.destination || TRIP_TYPE_LABELS[inputs.tripType]}`);
    lines.push(`Trip type:         ${TRIP_TYPE_LABELS[inputs.tripType]}`);
    lines.push(`Purpose:           ${PURPOSE_LABELS[inputs.purpose]}`);
    lines.push(`Duration:          ${inputs.nights} night${inputs.nights !== 1 ? 's' : ''} / ${inputs.totalDays} day${inputs.totalDays !== 1 ? 's' : ''}`);
    lines.push(`Business days:     ${inputs.businessDays} of ${inputs.totalDays} (${fmtPct(businessPct)})`);
    lines.push(`Primary purpose:   ${isPrimaryBusiness ? 'Business' : 'Personal'}`);
    lines.push(`Tax bracket:       ${(parseFloat(inputs.taxBracket) * 100).toFixed(0)}%`);
    lines.push('');
    lines.push('EXPENSE BREAKDOWN');
    lines.push('-'.repeat(45));
    lines.push(`${'Category'.padEnd(30)} ${'Total'.padStart(10)} ${'Deductible'.padStart(12)}`);
    lines.push('-'.repeat(55));
    results.breakdown.forEach((item) => {
      if (item.total > 0) {
        lines.push(
          `${item.label.padEnd(30)} ${fmtCurrencyWhole(item.total).padStart(10)} ${fmtCurrencyWhole(item.deductible).padStart(12)}`
        );
      }
    });
    lines.push('-'.repeat(55));
    lines.push(`${'TOTAL'.padEnd(30)} ${fmtCurrencyWhole(results.totalTripCost).padStart(10)} ${fmtCurrencyWhole(results.totalDeductible).padStart(12)}`);
    lines.push('');
    lines.push('TAX IMPACT');
    lines.push('-'.repeat(45));
    lines.push(`Total trip cost:      ${fmtCurrency(results.totalTripCost)}`);
    lines.push(`Deductible amount:    ${fmtCurrency(results.totalDeductible)}`);
    lines.push(`Estimated tax savings: ${fmtCurrency(results.taxSavings)}`);
    lines.push(`Effective trip cost:  ${fmtCurrency(results.effectiveTripCost)}`);
    lines.push(`Per day cost:         ${fmtCurrency(results.perDayCost)}`);
    lines.push('');
    lines.push('ATO COMPLIANCE');
    lines.push('-'.repeat(45));
    lines.push(`Within ATO reasonable amounts: ${results.isWithinReasonable ? 'YES' : 'NO'}`);
    if (needsTravelDiary) {
      lines.push(`Travel diary required: YES (6+ consecutive nights)`);
    }
    lines.push('');
    results.complianceNotes.forEach((note, i) => {
      lines.push(`${i + 1}. ${note}`);
    });
    lines.push('');
    lines.push('-'.repeat(60));
    lines.push('Generated by InvoiceFlow Business Trip Expense Calculator');
    lines.push('https://www.invoiceflow.au/tools/business-trip-calculator');
    lines.push('-'.repeat(60));
    lines.push('');
    lines.push('DISCLAIMER: This is an estimate only and does not constitute tax advice.');
    lines.push('Consult a registered tax agent for advice specific to your situation.');
    return lines.join('\n');
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateReport()).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const handleCalculate = () => {
    setCalculated(true);
    setStep(4);
  };

  const inputClass =
    'w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-slate-600 focus:outline-none focus:border-sky-400/50 focus:ring-1 focus:ring-sky-400/25 transition-all text-sm';
  const labelClass = 'block text-sm font-medium text-slate-300 mb-1.5';

  const prefillAtoRates = () => {
    const defaults = getDefaultMealRates(inputs.tripType);
    setInputs((prev) => ({
      ...prev,
      expenses: {
        ...prev.expenses,
        accommodationPerNight: ATO_RATES.accommodation[prev.tripType],
        ...defaults,
      },
    }));
  };

  return (
    <div className="space-y-8">
      {/* Step Indicator */}
      <div className="flex items-center justify-center gap-2 sm:gap-4 mb-4">
        {[1, 2, 3, 4].map((s) => (
          <button
            key={s}
            onClick={() => { if (s < 4 || calculated) setStep(s); }}
            className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
              step === s
                ? 'bg-gradient-to-r from-sky-400/20 to-blue-500/20 border border-sky-400/40 text-sky-300'
                : s < step || (s === 4 && calculated)
                  ? 'bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10'
                  : 'bg-white/[0.02] border border-white/[0.05] text-slate-600 cursor-default'
            }`}
          >
            <div className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${
              step === s
                ? 'bg-sky-400/30 text-sky-300'
                : s < step || (s === 4 && calculated)
                  ? 'bg-white/10 text-slate-400'
                  : 'bg-white/5 text-slate-600'
            }`}>
              {s < step ? '\u2713' : s}
            </div>
            <span className="hidden sm:inline">
              {s === 1 ? 'Trip Details' : s === 2 ? 'Expenses' : s === 3 ? 'Business %' : 'Results'}
            </span>
          </button>
        ))}
      </div>

      {/* Step 1: Trip Details */}
      {step === 1 && (
        <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
          <h3 className="text-lg font-bold text-white heading-font mb-2">Trip Details</h3>
          <p className="text-sm text-slate-400 mb-6">
            Tell us about your business trip. ATO reasonable travel amounts vary by destination type.
          </p>

          {/* Trip Type */}
          <div className="mb-6">
            <label className={labelClass}>Destination Type</label>
            <div className="grid sm:grid-cols-2 gap-3">
              {(Object.keys(TRIP_TYPE_LABELS) as TripType[]).map((type) => (
                <button
                  key={type}
                  onClick={() => update('tripType', type)}
                  className={`px-5 py-4 rounded-xl text-sm font-medium transition-all text-left ${
                    inputs.tripType === type
                      ? 'bg-gradient-to-r from-sky-400/20 to-blue-500/20 border border-sky-400/40 text-sky-300'
                      : 'bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span className="block font-semibold">{TRIP_TYPE_LABELS[type]}</span>
                  <span className="block text-xs mt-1 opacity-70">{TRIP_TYPE_DESCRIPTIONS[type]}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Destination Name */}
          <div className="mb-6">
            <label className={labelClass}>
              Destination
              <span className="text-slate-500 font-normal ml-1 text-xs">(optional, for your records)</span>
            </label>
            <input
              type="text"
              value={inputs.destination}
              onChange={(e) => update('destination', e.target.value)}
              className={`${inputClass} max-w-md`}
              placeholder="e.g. Sydney, Melbourne, Singapore"
            />
          </div>

          {/* Trip Duration */}
          <div className="mb-6">
            <label className={labelClass}>Number of Nights</label>
            <div className="relative max-w-xs">
              <input
                type="number"
                value={inputs.nights}
                onChange={(e) => update('nights', Math.max(1, Number(e.target.value)))}
                className={inputClass}
                min={1}
                max={365}
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm">nights</span>
            </div>
            <p className="text-xs text-slate-500 mt-1.5">
              {inputs.nights} night{inputs.nights !== 1 ? 's' : ''} = {inputs.nights + 1} day{inputs.nights + 1 !== 1 ? 's' : ''} total
              {inputs.nights >= 6 && (
                <span className="text-amber-400 ml-2 font-medium">
                  Travel diary required (6+ nights)
                </span>
              )}
            </p>
          </div>

          {/* Trip Purpose */}
          <div>
            <label className={labelClass}>Primary Purpose of Trip</label>
            <div className="flex flex-wrap gap-2">
              {(Object.keys(PURPOSE_LABELS) as TripPurpose[]).map((purpose) => (
                <button
                  key={purpose}
                  onClick={() => update('purpose', purpose)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    inputs.purpose === purpose
                      ? 'bg-gradient-to-r from-sky-400/20 to-blue-500/20 border border-sky-400/40 text-sky-300'
                      : 'bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {PURPOSE_LABELS[purpose]}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={() => setStep(2)}
              className="bg-gradient-to-r from-sky-400 to-blue-500 text-white font-semibold rounded-xl px-10 py-4 hover:from-sky-300 hover:to-blue-400 transition-all text-lg shadow-lg shadow-sky-500/20"
            >
              Next: Enter Expenses
            </button>
          </div>
        </div>
      )}

      {/* Step 2: Expenses */}
      {step === 2 && (
        <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-bold text-white heading-font">Trip Expenses</h3>
            <button
              onClick={prefillAtoRates}
              className="px-3 py-1.5 rounded-lg bg-sky-400/10 border border-sky-400/20 text-sky-400 text-xs font-medium hover:bg-sky-400/20 transition-all"
            >
              Use ATO Reasonable Rates
            </button>
          </div>
          <p className="text-sm text-slate-400 mb-6">
            Enter your actual or expected expenses. Use the &ldquo;ATO Reasonable Rates&rdquo; button to
            prefill with the {TRIP_TYPE_LABELS[inputs.tripType].toLowerCase()} rates.
          </p>

          {/* Flights / Transport */}
          <div className="space-y-5">
            <div>
              <label className={labelClass}>Flights / Transport (total return)</label>
              <div className="relative max-w-xs">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm">$</span>
                <input
                  type="number"
                  value={inputs.expenses.flights}
                  onChange={(e) => updateExpense('flights', Math.max(0, Number(e.target.value)))}
                  className={`${inputClass} pl-8`}
                  min={0}
                  placeholder="0"
                />
              </div>
              <p className="text-xs text-slate-500 mt-1">
                {isPrimaryBusiness
                  ? 'Fully deductible if primary purpose is business'
                  : 'NOT deductible — primary purpose appears to be personal'}
              </p>
            </div>

            {/* Accommodation */}
            <div>
              <div className="flex items-center justify-between">
                <label className={labelClass}>Accommodation (per night)</label>
                <span className="text-xs text-slate-500">
                  ATO reasonable: {fmtCurrency(atoAccommodation)}/night
                </span>
              </div>
              <div className="relative max-w-xs">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm">$</span>
                <input
                  type="number"
                  value={inputs.expenses.accommodationPerNight}
                  onChange={(e) => updateExpense('accommodationPerNight', Math.max(0, Number(e.target.value)))}
                  className={`${inputClass} pl-8`}
                  min={0}
                  placeholder="0"
                />
              </div>
              <p className="text-xs mt-1">
                {inputs.expenses.accommodationPerNight > atoAccommodation ? (
                  <span className="text-amber-400">Above ATO reasonable amount — receipts required</span>
                ) : (
                  <span className="text-emerald-400">Within ATO reasonable amount</span>
                )}
                <span className="text-slate-500 ml-2">
                  Total: {fmtCurrency(inputs.expenses.accommodationPerNight * inputs.nights)} for {inputs.nights} night{inputs.nights !== 1 ? 's' : ''}
                </span>
              </p>
            </div>

            {/* Meals Section */}
            <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-5">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-sm font-semibold text-white">Meals (per day)</h4>
                <span className="text-xs text-slate-500">
                  ATO daily total: {fmtCurrency(atoMeals.breakfast + atoMeals.lunch + atoMeals.dinner)}
                </span>
              </div>
              <div className="grid sm:grid-cols-3 gap-4">
                <div>
                  <label className={labelClass}>
                    Breakfast
                    <span className="text-slate-600 font-normal ml-1 text-xs">({fmtCurrency(atoMeals.breakfast)} ATO)</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm">$</span>
                    <input
                      type="number"
                      value={inputs.expenses.breakfastPerDay}
                      onChange={(e) => updateExpense('breakfastPerDay', Math.max(0, Number(e.target.value)))}
                      className={`${inputClass} pl-8`}
                      min={0}
                      step={0.05}
                    />
                  </div>
                </div>
                <div>
                  <label className={labelClass}>
                    Lunch
                    <span className="text-slate-600 font-normal ml-1 text-xs">({fmtCurrency(atoMeals.lunch)} ATO)</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm">$</span>
                    <input
                      type="number"
                      value={inputs.expenses.lunchPerDay}
                      onChange={(e) => updateExpense('lunchPerDay', Math.max(0, Number(e.target.value)))}
                      className={`${inputClass} pl-8`}
                      min={0}
                      step={0.05}
                    />
                  </div>
                </div>
                <div>
                  <label className={labelClass}>
                    Dinner
                    <span className="text-slate-600 font-normal ml-1 text-xs">({fmtCurrency(atoMeals.dinner)} ATO)</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm">$</span>
                    <input
                      type="number"
                      value={inputs.expenses.dinnerPerDay}
                      onChange={(e) => updateExpense('dinnerPerDay', Math.max(0, Number(e.target.value)))}
                      className={`${inputClass} pl-8`}
                      min={0}
                      step={0.05}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-3 bg-white/5 rounded-lg px-4 py-2.5 flex items-center justify-between">
                <span className="text-xs text-slate-400">Daily meals total</span>
                <span className="text-sm font-semibold text-sky-300">
                  {fmtCurrency(inputs.expenses.breakfastPerDay + inputs.expenses.lunchPerDay + inputs.expenses.dinnerPerDay)}/day
                </span>
              </div>
            </div>

            {/* Incidentals */}
            <div>
              <div className="flex items-center justify-between">
                <label className={labelClass}>Incidentals (per day)</label>
                <span className="text-xs text-slate-500">
                  ATO reasonable: {fmtCurrency(atoIncidentals)}/day
                </span>
              </div>
              <div className="relative max-w-xs">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm">$</span>
                <input
                  type="number"
                  value={inputs.expenses.incidentalsPerDay}
                  onChange={(e) => updateExpense('incidentalsPerDay', Math.max(0, Number(e.target.value)))}
                  className={`${inputClass} pl-8`}
                  min={0}
                  step={0.05}
                />
              </div>
              <p className="text-xs text-slate-500 mt-1">
                Laundry, tips, phone calls, newspapers, minor personal expenses while travelling
              </p>
            </div>

            {/* Other Expenses Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Car Hire / Fuel (total trip)</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm">$</span>
                  <input
                    type="number"
                    value={inputs.expenses.carHire}
                    onChange={(e) => updateExpense('carHire', Math.max(0, Number(e.target.value)))}
                    className={`${inputClass} pl-8`}
                    min={0}
                    placeholder="0"
                  />
                </div>
              </div>
              <div>
                <label className={labelClass}>Conference / Event Fees</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm">$</span>
                  <input
                    type="number"
                    value={inputs.expenses.conferenceFees}
                    onChange={(e) => updateExpense('conferenceFees', Math.max(0, Number(e.target.value)))}
                    className={`${inputClass} pl-8`}
                    min={0}
                    placeholder="0"
                  />
                </div>
              </div>
              <div>
                <label className={labelClass}>Internet / Phone Roaming</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm">$</span>
                  <input
                    type="number"
                    value={inputs.expenses.internetPhone}
                    onChange={(e) => updateExpense('internetPhone', Math.max(0, Number(e.target.value)))}
                    className={`${inputClass} pl-8`}
                    min={0}
                    placeholder="0"
                  />
                </div>
              </div>
              <div>
                <label className={labelClass}>Other (taxis, parking, tolls)</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm">$</span>
                  <input
                    type="number"
                    value={inputs.expenses.other}
                    onChange={(e) => updateExpense('other', Math.max(0, Number(e.target.value)))}
                    className={`${inputClass} pl-8`}
                    min={0}
                    placeholder="0"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Running Total */}
          <div className="mt-6 bg-white/5 rounded-xl px-5 py-4 flex items-center justify-between">
            <span className="text-sm text-slate-400">Estimated total trip cost</span>
            <span className="text-xl font-bold text-white">{fmtCurrencyWhole(results.totalTripCost)}</span>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3">
            <button
              onClick={() => setStep(1)}
              className="px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-slate-300 font-medium hover:bg-white/10 transition-all"
            >
              Back
            </button>
            <button
              onClick={() => setStep(3)}
              className="bg-gradient-to-r from-sky-400 to-blue-500 text-white font-semibold rounded-xl px-10 py-4 hover:from-sky-300 hover:to-blue-400 transition-all text-lg shadow-lg shadow-sky-500/20"
            >
              Next: Business Split
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Business % */}
      {step === 3 && (
        <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
          <h3 className="text-lg font-bold text-white heading-font mb-2">Business vs Personal Split</h3>
          <p className="text-sm text-slate-400 mb-6">
            If your trip includes any personal days, the ATO requires you to apportion expenses.
            Only the business portion of daily expenses (accommodation, meals, incidentals) is deductible.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mb-6">
            <div>
              <label className={labelClass}>Total Trip Days</label>
              <input
                type="number"
                value={inputs.totalDays}
                onChange={(e) => {
                  const val = Math.max(1, Number(e.target.value));
                  setInputs((prev) => ({
                    ...prev,
                    totalDays: val,
                    businessDays: Math.min(prev.businessDays, val),
                  }));
                }}
                className={inputClass}
                min={1}
              />
              <p className="text-xs text-slate-500 mt-1">Including travel days</p>
            </div>
            <div>
              <label className={labelClass}>Business Days</label>
              <input
                type="number"
                value={inputs.businessDays}
                onChange={(e) => {
                  const val = Math.max(0, Math.min(inputs.totalDays, Number(e.target.value)));
                  setInputs((prev) => ({ ...prev, businessDays: val }));
                }}
                className={inputClass}
                min={0}
                max={inputs.totalDays}
              />
              <p className="text-xs text-slate-500 mt-1">Days with business activities</p>
            </div>
          </div>

          {/* Business % Visual */}
          <div className="bg-white/5 rounded-xl p-5 mb-6">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-slate-300">Business Percentage</span>
              <span className={`text-lg font-bold ${businessPct === 100 ? 'text-emerald-400' : businessPct > 50 ? 'text-sky-300' : 'text-amber-400'}`}>
                {fmtPct(businessPct)}
              </span>
            </div>
            <div className="h-4 bg-white/5 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-500 ${
                  businessPct === 100 ? 'bg-gradient-to-r from-emerald-500 to-green-400' :
                  businessPct > 50 ? 'bg-gradient-to-r from-sky-400 to-blue-500' :
                  'bg-gradient-to-r from-amber-500 to-orange-400'
                }`}
                style={{ width: `${Math.max(businessPct, 2)}%` }}
              />
            </div>
            <div className="flex items-center justify-between mt-2">
              <span className="text-xs text-slate-500">
                {inputs.businessDays} business day{inputs.businessDays !== 1 ? 's' : ''}
              </span>
              <span className="text-xs text-slate-500">
                {inputs.totalDays - inputs.businessDays} personal day{inputs.totalDays - inputs.businessDays !== 1 ? 's' : ''}
              </span>
            </div>

            {/* Alerts */}
            {!isPrimaryBusiness && inputs.totalDays > inputs.businessDays && (
              <div className="mt-4 bg-amber-400/10 border border-amber-400/20 rounded-lg p-3">
                <p className="text-xs text-amber-400 font-medium">
                  Warning: The primary purpose of this trip appears personal ({inputs.totalDays - inputs.businessDays} personal days vs {inputs.businessDays} business days).
                  Transport costs (flights) will NOT be deductible.
                </p>
              </div>
            )}
            {needsTravelDiary && (
              <div className="mt-4 bg-sky-400/10 border border-sky-400/20 rounded-lg p-3">
                <p className="text-xs text-sky-400 font-medium">
                  This trip is {inputs.nights} consecutive nights. You must maintain a travel diary
                  recording daily activities and their business purpose.
                </p>
              </div>
            )}
          </div>

          {/* Tax Bracket */}
          <div className="mb-6">
            <label className={labelClass}>Your Marginal Tax Rate (2025-26)</label>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
              {TAX_BRACKETS.map((bracket) => (
                <button
                  key={bracket.value}
                  onClick={() => update('taxBracket', bracket.value)}
                  className={`px-3 py-3 rounded-xl text-sm font-medium transition-all text-center ${
                    inputs.taxBracket === bracket.value
                      ? 'bg-gradient-to-r from-sky-400/20 to-blue-500/20 border border-sky-400/40 text-sky-300'
                      : 'bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span className="block font-semibold">{bracket.label}</span>
                  <span className="block text-xs mt-0.5 opacity-70">{bracket.description}</span>
                </button>
              ))}
            </div>
            <p className="text-xs text-slate-500 mt-2">
              Used to estimate your tax savings from deductible expenses. Select the bracket that matches your
              total taxable income for the year.
            </p>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3">
            <button
              onClick={() => setStep(2)}
              className="px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-slate-300 font-medium hover:bg-white/10 transition-all"
            >
              Back
            </button>
            <button
              onClick={handleCalculate}
              className="bg-gradient-to-r from-sky-400 to-blue-500 text-white font-semibold rounded-xl px-10 py-4 hover:from-sky-300 hover:to-blue-400 transition-all text-lg shadow-lg shadow-sky-500/20"
            >
              Calculate Deductions
            </button>
          </div>
        </div>
      )}

      {/* Step 4: Results */}
      {step === 4 && calculated && (
        <>
          {/* Hero Metrics */}
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white heading-font mb-6 text-center">
              Trip Expense Summary
            </h3>

            {/* Hero: Deductible Amount */}
            <div className="text-center mb-8">
              <p className="text-sm text-slate-400 mb-2">Deductible Amount</p>
              <p className="text-5xl font-bold text-white heading-font">{fmtCurrencyWhole(results.totalDeductible)}</p>
              <p className="text-sm text-slate-500 mt-2">
                of {fmtCurrencyWhole(results.totalTripCost)} total trip cost ({fmtPct((results.totalDeductible / (results.totalTripCost || 1)) * 100)})
              </p>
            </div>

            {/* Tax Savings Badge */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-400/10 border border-emerald-400/20">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                <span className="text-sm font-semibold text-emerald-400">
                  Estimated Tax Savings: {fmtCurrency(results.taxSavings)}
                </span>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="bg-white/5 rounded-xl p-4 text-center">
                <p className="text-xs text-slate-500 mb-1">Total Trip Cost</p>
                <p className="text-xl font-bold text-white">{fmtCurrencyWhole(results.totalTripCost)}</p>
                <p className="text-xs text-slate-600 mt-1">{inputs.nights} night{inputs.nights !== 1 ? 's' : ''}</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 text-center">
                <p className="text-xs text-slate-500 mb-1">Effective Cost</p>
                <p className="text-xl font-bold text-white">{fmtCurrencyWhole(results.effectiveTripCost)}</p>
                <p className="text-xs text-slate-600 mt-1">after tax savings</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 text-center">
                <p className="text-xs text-slate-500 mb-1">Per Day Cost</p>
                <p className="text-xl font-bold text-white">{fmtCurrency(results.perDayCost)}</p>
                <p className="text-xs text-slate-600 mt-1">{inputs.totalDays} day{inputs.totalDays !== 1 ? 's' : ''} total</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 text-center">
                <p className="text-xs text-slate-500 mb-1">Business %</p>
                <p className="text-xl font-bold text-white">{fmtPct(businessPct)}</p>
                <p className="text-xs text-slate-600 mt-1">{inputs.businessDays} of {inputs.totalDays} days</p>
              </div>
            </div>
          </div>

          {/* Expense Breakdown Table */}
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white heading-font mb-6">Expense Breakdown</h3>
            <div className="space-y-3">
              {results.breakdown.map((item) => {
                if (item.total === 0) return null;
                const deductiblePct = item.total > 0 ? (item.deductible / item.total) * 100 : 0;
                return (
                  <div key={item.label} className="bg-white/5 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-white">{item.label}</span>
                      <div className="flex items-center gap-4">
                        <span className="text-xs text-slate-500">Total: {fmtCurrency(item.total)}</span>
                        <span className="text-sm font-bold text-sky-300">{fmtCurrency(item.deductible)}</span>
                      </div>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden mb-1.5">
                      <div
                        className="h-full bg-gradient-to-r from-sky-400 to-blue-500 rounded-full transition-all duration-500"
                        style={{ width: `${Math.max(deductiblePct, 1)}%` }}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-500">{item.note}</span>
                      <span className="text-xs text-slate-500">{fmtPct(deductiblePct)} deductible</span>
                    </div>
                  </div>
                );
              })}

              {/* Totals Row */}
              <div className="bg-gradient-to-r from-sky-400/10 to-blue-500/10 border border-sky-400/20 rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-white">Total</span>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-slate-400">Cost: {fmtCurrency(results.totalTripCost)}</span>
                    <span className="text-lg font-bold text-sky-300">Deductible: {fmtCurrency(results.totalDeductible)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ATO Reasonable Amounts Comparison */}
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white heading-font mb-2">ATO Reasonable Amounts Check</h3>
            <p className="text-sm text-slate-400 mb-6">
              Comparing your claimed amounts against ATO reasonable travel allowance rates for {TRIP_TYPE_LABELS[inputs.tripType].toLowerCase()} destinations.
            </p>

            <div className="space-y-4">
              {/* Accommodation */}
              <div className="bg-white/5 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-white font-medium">Accommodation</span>
                  <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                    results.deductibleAccommodation <= results.atoReasonableAccommodation
                      ? 'bg-emerald-400/10 text-emerald-400'
                      : 'bg-amber-400/10 text-amber-400'
                  }`}>
                    {results.deductibleAccommodation <= results.atoReasonableAccommodation ? 'Within Limit' : 'Exceeds — Receipts Required'}
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>Your claim: {fmtCurrency(results.deductibleAccommodation)}</span>
                  <span>ATO reasonable: {fmtCurrency(results.atoReasonableAccommodation)}</span>
                </div>
                <div className="mt-2 h-2 bg-white/5 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      results.deductibleAccommodation <= results.atoReasonableAccommodation
                        ? 'bg-gradient-to-r from-emerald-500 to-green-400'
                        : 'bg-gradient-to-r from-amber-500 to-orange-400'
                    }`}
                    style={{ width: `${Math.min((results.deductibleAccommodation / (results.atoReasonableAccommodation || 1)) * 100, 100)}%` }}
                  />
                </div>
              </div>

              {/* Meals */}
              <div className="bg-white/5 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-white font-medium">Meals</span>
                  <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                    results.deductibleMeals <= results.atoReasonableMeals
                      ? 'bg-emerald-400/10 text-emerald-400'
                      : 'bg-amber-400/10 text-amber-400'
                  }`}>
                    {results.deductibleMeals <= results.atoReasonableMeals ? 'Within Limit' : 'Exceeds — Receipts Required'}
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>Your claim: {fmtCurrency(results.deductibleMeals)}</span>
                  <span>ATO reasonable: {fmtCurrency(results.atoReasonableMeals)}</span>
                </div>
                <div className="mt-2 h-2 bg-white/5 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      results.deductibleMeals <= results.atoReasonableMeals
                        ? 'bg-gradient-to-r from-emerald-500 to-green-400'
                        : 'bg-gradient-to-r from-amber-500 to-orange-400'
                    }`}
                    style={{ width: `${Math.min((results.deductibleMeals / (results.atoReasonableMeals || 1)) * 100, 100)}%` }}
                  />
                </div>
              </div>

              {/* Incidentals */}
              <div className="bg-white/5 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-white font-medium">Incidentals</span>
                  <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                    results.deductibleIncidentals <= results.atoReasonableIncidentals
                      ? 'bg-emerald-400/10 text-emerald-400'
                      : 'bg-amber-400/10 text-amber-400'
                  }`}>
                    {results.deductibleIncidentals <= results.atoReasonableIncidentals ? 'Within Limit' : 'Exceeds — Receipts Required'}
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>Your claim: {fmtCurrency(results.deductibleIncidentals)}</span>
                  <span>ATO reasonable: {fmtCurrency(results.atoReasonableIncidentals)}</span>
                </div>
                <div className="mt-2 h-2 bg-white/5 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      results.deductibleIncidentals <= results.atoReasonableIncidentals
                        ? 'bg-gradient-to-r from-emerald-500 to-green-400'
                        : 'bg-gradient-to-r from-amber-500 to-orange-400'
                    }`}
                    style={{ width: `${Math.min((results.deductibleIncidentals / (results.atoReasonableIncidentals || 1)) * 100, 100)}%` }}
                  />
                </div>
              </div>

              {/* Overall Status */}
              <div className={`rounded-xl p-4 border ${
                results.isWithinReasonable
                  ? 'bg-emerald-400/5 border-emerald-400/20'
                  : 'bg-amber-400/5 border-amber-400/20'
              }`}>
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    results.isWithinReasonable ? 'bg-emerald-400/20' : 'bg-amber-400/20'
                  }`}>
                    <span className={`text-lg ${results.isWithinReasonable ? 'text-emerald-400' : 'text-amber-400'}`}>
                      {results.isWithinReasonable ? '\u2713' : '!'}
                    </span>
                  </div>
                  <div>
                    <p className={`text-sm font-semibold ${results.isWithinReasonable ? 'text-emerald-400' : 'text-amber-400'}`}>
                      {results.isWithinReasonable
                        ? 'All expenses within ATO reasonable amounts'
                        : 'Some expenses exceed ATO reasonable amounts'}
                    </p>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {results.isWithinReasonable
                        ? 'You may claim without individual receipts (keeping receipts is still recommended).'
                        : 'You must keep receipts for all expenses that exceed the reasonable amounts to substantiate your claim.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Compliance Notes */}
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white heading-font mb-6">ATO Compliance Notes</h3>
            <div className="space-y-3">
              {results.complianceNotes.map((note, i) => (
                <div key={i} className="flex items-start gap-3 bg-white/5 rounded-xl p-4">
                  <div className="w-6 h-6 rounded-full bg-sky-400/20 border border-sky-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sky-400 text-xs font-bold">{i + 1}</span>
                  </div>
                  <p className="text-sm text-slate-300">{note}</p>
                </div>
              ))}
            </div>

            {/* Records Checklist */}
            <div className="mt-6 bg-white/5 rounded-xl p-5">
              <p className="text-sm text-white font-medium mb-3">Records Checklist for This Trip</p>
              <div className="space-y-2">
                {[
                  'Receipts or bank statements for all expenses',
                  'Boarding passes and booking confirmations',
                  needsTravelDiary ? 'Travel diary (REQUIRED — 6+ consecutive nights)' : 'Travel diary (recommended but not required)',
                  'Business itinerary showing meetings, clients, and activities',
                  'Evidence of business purpose (client emails, conference registration)',
                  inputs.totalDays !== inputs.businessDays ? 'Business vs personal day log for apportionment' : null,
                ].filter(Boolean).map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded border border-white/20 flex-shrink-0" />
                    <span className={`text-xs ${
                      item?.includes('REQUIRED') ? 'text-amber-400 font-medium' : 'text-slate-400'
                    }`}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tax Savings Breakdown */}
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white heading-font mb-6">Tax Savings Breakdown</h3>

            <div className="flex flex-col sm:flex-row items-center gap-8">
              {/* CSS Donut Chart */}
              <div className="relative w-48 h-48 flex-shrink-0">
                {(() => {
                  const total = results.totalTripCost;
                  const deductiblePct = total > 0 ? (results.totalDeductible / total) * 100 : 0;

                  return (
                    <>
                      <div
                        className="w-48 h-48 rounded-full"
                        style={{
                          background: `conic-gradient(#38bdf8 0% ${deductiblePct}%, rgba(255,255,255,0.05) ${deductiblePct}% 100%)`,
                        }}
                      />
                      <div className="absolute inset-6 bg-[#0B1120] rounded-full flex items-center justify-center">
                        <div className="text-center">
                          <p className="text-2xl font-bold text-emerald-400">{fmtCurrencyWhole(results.taxSavings)}</p>
                          <p className="text-xs text-slate-500">tax savings</p>
                        </div>
                      </div>
                    </>
                  );
                })()}
              </div>

              {/* Legend */}
              <div className="flex-1 space-y-4 w-full">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-3 h-3 rounded-sm bg-sky-400 flex-shrink-0" />
                    <span className="text-sm text-slate-300">Deductible Portion</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium text-white">{fmtCurrency(results.totalDeductible)}</span>
                    <span className="text-xs text-slate-500 w-12 text-right">
                      {fmtPct((results.totalDeductible / (results.totalTripCost || 1)) * 100)}
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-3 h-3 rounded-sm bg-white/10 flex-shrink-0" />
                    <span className="text-sm text-slate-300">Non-Deductible Portion</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium text-white">{fmtCurrency(results.totalTripCost - results.totalDeductible)}</span>
                    <span className="text-xs text-slate-500 w-12 text-right">
                      {fmtPct(((results.totalTripCost - results.totalDeductible) / (results.totalTripCost || 1)) * 100)}
                    </span>
                  </div>
                </div>
                <div className="pt-3 border-t border-white/10 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-500">Marginal tax rate</span>
                    <span className="text-xs text-white font-medium">{(parseFloat(inputs.taxBracket) * 100).toFixed(0)}%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-500">Tax savings</span>
                    <span className="text-xs text-emerald-400 font-medium">{fmtCurrency(results.taxSavings)}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-500">Effective trip cost (after tax)</span>
                    <span className="text-xs text-white font-medium">{fmtCurrency(results.effectiveTripCost)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Copy Report & Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={handleCopy}
              className="bg-gradient-to-r from-sky-400 to-blue-500 text-white font-semibold rounded-xl px-8 py-4 hover:from-sky-300 hover:to-blue-400 transition-all"
            >
              {copied ? 'Copied to Clipboard!' : 'Copy Expense Summary'}
            </button>
            <button
              onClick={() => { setCalculated(false); setStep(1); }}
              className="px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-slate-300 font-medium hover:bg-white/10 transition-all"
            >
              Start Over
            </button>
          </div>

          {/* Disclaimer */}
          <div className="text-center">
            <p className="text-xs text-slate-500 max-w-2xl mx-auto">
              This calculator provides estimates based on ATO reasonable travel allowance rates for
              the 2025-26 income year. Actual deductible amounts depend on your specific
              circumstances, the nature of your business, and substantiation requirements. This
              tool does not constitute tax advice. Consult a registered tax agent for advice specific
              to your situation. ATO rates are approximate and may vary — always check the latest
              Tax Determination for current rates.
            </p>
          </div>
        </>
      )}
    </div>
  );
}
