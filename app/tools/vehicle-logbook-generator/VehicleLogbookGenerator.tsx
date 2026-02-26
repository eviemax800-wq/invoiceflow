'use client';

import { useState, useRef } from 'react';

/* ---- Types ---- */

type Step = 1 | 2 | 3 | 4;

type AustralianState = 'VIC' | 'NSW' | 'QLD' | 'SA' | 'WA' | 'TAS' | 'NT' | 'ACT';

type TripPurposeType = 'business' | 'personal';

type BusinessPurpose =
  | 'client_meeting'
  | 'site_visit'
  | 'supplies_pickup'
  | 'networking_event'
  | 'training'
  | 'other';

type PrimaryBusinessUse =
  | 'client_visits'
  | 'deliveries'
  | 'site_visits'
  | 'equipment_transport'
  | 'networking_events';

interface VehicleDetails {
  make: string;
  model: string;
  year: string;
  registrationState: AustralianState | '';
  odometerStart: string;
  logbookStartDate: string;
  primaryBusinessUse: PrimaryBusinessUse | '';
}

interface Trip {
  id: string;
  date: string;
  odometerStart: string;
  odometerEnd: string;
  purpose: TripPurposeType;
  businessPurpose: BusinessPurpose | '';
  businessDescription: string;
  clientProject: string;
}

/* ---- Constants ---- */

const ATO_RATE_PER_KM = 0.85;
const ATO_MAX_KM = 5000;
const ATO_MAX_CENTS_DEDUCTION = ATO_MAX_KM * ATO_RATE_PER_KM; // $4,250
const LOGBOOK_WEEKS = 12;
const LOGBOOK_DAYS = LOGBOOK_WEEKS * 7; // 84

const STATE_OPTIONS: { value: AustralianState; label: string }[] = [
  { value: 'VIC', label: 'Victoria' },
  { value: 'NSW', label: 'New South Wales' },
  { value: 'QLD', label: 'Queensland' },
  { value: 'SA', label: 'South Australia' },
  { value: 'WA', label: 'Western Australia' },
  { value: 'TAS', label: 'Tasmania' },
  { value: 'NT', label: 'Northern Territory' },
  { value: 'ACT', label: 'Australian Capital Territory' },
];

const PRIMARY_USE_OPTIONS: { value: PrimaryBusinessUse; label: string }[] = [
  { value: 'client_visits', label: 'Client visits' },
  { value: 'deliveries', label: 'Deliveries' },
  { value: 'site_visits', label: 'Site visits' },
  { value: 'equipment_transport', label: 'Equipment transport' },
  { value: 'networking_events', label: 'Networking events' },
];

const BUSINESS_PURPOSE_OPTIONS: { value: BusinessPurpose; label: string }[] = [
  { value: 'client_meeting', label: 'Client meeting' },
  { value: 'site_visit', label: 'Site visit' },
  { value: 'supplies_pickup', label: 'Supplies pickup' },
  { value: 'networking_event', label: 'Networking event' },
  { value: 'training', label: 'Training' },
  { value: 'other', label: 'Other' },
];

const QUICK_ADD_TEMPLATES: { label: string; purpose: TripPurposeType; businessPurpose: BusinessPurpose | ''; description: string }[] = [
  { label: 'Client Meeting', purpose: 'business', businessPurpose: 'client_meeting', description: 'Client meeting' },
  { label: 'Site Visit', purpose: 'business', businessPurpose: 'site_visit', description: 'Site inspection' },
  { label: 'Supplies Run', purpose: 'business', businessPurpose: 'supplies_pickup', description: 'Office supplies pickup' },
  { label: 'Networking', purpose: 'business', businessPurpose: 'networking_event', description: 'Business networking event' },
  { label: 'Training', purpose: 'business', businessPurpose: 'training', description: 'Professional development' },
  { label: 'Personal Trip', purpose: 'personal', businessPurpose: '', description: '' },
];

/* ---- Helpers ---- */

function generateId(): string {
  return Math.random().toString(36).substring(2, 9);
}

function formatDate(dateStr: string): string {
  if (!dateStr) return '';
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('en-AU', { day: '2-digit', month: 'short', year: 'numeric' });
}

function getLogbookEndDate(startDate: string): string {
  if (!startDate) return '';
  const d = new Date(startDate + 'T00:00:00');
  d.setDate(d.getDate() + LOGBOOK_DAYS - 1);
  return d.toISOString().split('T')[0];
}

function getTripKm(trip: Trip): number {
  const start = parseFloat(trip.odometerStart) || 0;
  const end = parseFloat(trip.odometerEnd) || 0;
  return Math.max(end - start, 0);
}

const fmt = (n: number) =>
  new Intl.NumberFormat('en-AU', { style: 'currency', currency: 'AUD', maximumFractionDigits: 0 }).format(n);

const fmtKm = (n: number) =>
  new Intl.NumberFormat('en-AU', { maximumFractionDigits: 1 }).format(n);

/* ---- Step Indicator ---- */

function StepIndicator({ step }: { step: Step }) {
  const steps = [
    { num: 1, label: 'Vehicle' },
    { num: 2, label: 'Trips' },
    { num: 3, label: 'Summary' },
    { num: 4, label: 'Logbook' },
  ];

  return (
    <div className="flex items-center justify-center gap-0 mb-10">
      {steps.map((s, i) => (
        <div key={s.num} className="flex items-center">
          <div className="flex flex-col items-center">
            <div
              className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                step > s.num
                  ? 'bg-amber-500 text-white'
                  : step === s.num
                  ? 'bg-gradient-to-br from-amber-400 to-orange-500 text-white ring-4 ring-amber-400/20'
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
                step === s.num ? 'text-amber-400' : step > s.num ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              {s.label}
            </span>
          </div>
          {i < steps.length - 1 && (
            <div
              className={`w-12 sm:w-20 h-0.5 mb-5 mx-2 transition-all ${
                step > s.num ? 'bg-amber-500' : 'bg-white/10'
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
          className={`w-full bg-white/5 border border-white/10 rounded-lg py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20 transition-all ${prefix ? 'pl-7 pr-4' : 'px-4'}`}
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
        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20 transition-all appearance-none"
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

/* ---- Donut Chart ---- */

function DonutChart({ businessPercent }: { businessPercent: number }) {
  const personalPercent = 100 - businessPercent;
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const businessArc = (businessPercent / 100) * circumference;
  const personalArc = (personalPercent / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-40 h-40">
        <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
          {/* Personal slice */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="8"
            strokeDasharray={`${personalArc} ${circumference}`}
            strokeDashoffset={0}
          />
          {/* Business slice */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke="url(#amberGradient)"
            strokeWidth="8"
            strokeDasharray={`${businessArc} ${circumference}`}
            strokeDashoffset={-personalArc}
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="amberGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#fbbf24" />
              <stop offset="100%" stopColor="#f97316" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-bold text-white">{businessPercent.toFixed(1)}%</span>
          <span className="text-xs text-slate-400">Business Use</span>
        </div>
      </div>
      <div className="flex items-center gap-4 mt-3">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-amber-400 to-orange-500" />
          <span className="text-xs text-slate-300">Business ({businessPercent.toFixed(1)}%)</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-white/10" />
          <span className="text-xs text-slate-300">Personal ({personalPercent.toFixed(1)}%)</span>
        </div>
      </div>
    </div>
  );
}

/* ---- Main Component ---- */

export default function VehicleLogbookGenerator() {
  const [step, setStep] = useState<Step>(1);
  const logbookRef = useRef<HTMLDivElement>(null);
  const [copySuccess, setCopySuccess] = useState(false);

  /* Step 1: Vehicle Details */
  const [vehicle, setVehicle] = useState<VehicleDetails>({
    make: '',
    model: '',
    year: new Date().getFullYear().toString(),
    registrationState: '',
    odometerStart: '',
    logbookStartDate: '',
    primaryBusinessUse: '',
  });

  /* Step 2: Trips */
  const [trips, setTrips] = useState<Trip[]>([]);
  const [editingTrip, setEditingTrip] = useState<Trip>({
    id: '',
    date: '',
    odometerStart: '',
    odometerEnd: '',
    purpose: 'business',
    businessPurpose: '',
    businessDescription: '',
    clientProject: '',
  });

  /* Step 3: Annual car costs for comparison */
  const [annualCarCosts, setAnnualCarCosts] = useState('8000');

  /* ---- Computed values ---- */

  const businessTrips = trips.filter((t) => t.purpose === 'business');
  const personalTrips = trips.filter((t) => t.purpose === 'personal');

  const totalBusinessKm = businessTrips.reduce((sum, t) => sum + getTripKm(t), 0);
  const totalPersonalKm = personalTrips.reduce((sum, t) => sum + getTripKm(t), 0);
  const totalKm = totalBusinessKm + totalPersonalKm;
  const businessPercent = totalKm > 0 ? (totalBusinessKm / totalKm) * 100 : 0;

  const logbookEndDate = getLogbookEndDate(vehicle.logbookStartDate);

  const logbookDaysElapsed = vehicle.logbookStartDate
    ? Math.ceil(
        (new Date(logbookEndDate + 'T00:00:00').getTime() - new Date(vehicle.logbookStartDate + 'T00:00:00').getTime()) /
          (1000 * 60 * 60 * 24)
      ) + 1
    : 0;

  const uniqueTripDates = new Set(trips.map((t) => t.date));
  const totalTripDays = uniqueTripDates.size;
  const avgDailyBusinessKm = totalTripDays > 0 ? totalBusinessKm / totalTripDays : 0;

  // Annualised estimates from logbook period
  const annualBusinessKmEstimate = totalKm > 0 ? (totalBusinessKm / LOGBOOK_DAYS) * 365 : 0;
  const annualTotalKmEstimate = totalKm > 0 ? (totalKm / LOGBOOK_DAYS) * 365 : 0;

  // Deduction comparisons
  const carCosts = parseFloat(annualCarCosts) || 0;
  const logbookDeduction = carCosts * (businessPercent / 100);
  const centsPerKmDeduction = Math.min(annualBusinessKmEstimate, ATO_MAX_KM) * ATO_RATE_PER_KM;
  const logbookIsBetter = logbookDeduction > centsPerKmDeduction;
  const deductionDifference = Math.abs(logbookDeduction - centsPerKmDeduction);

  /* ---- Validation ---- */

  const step1Valid =
    vehicle.make.trim() !== '' &&
    vehicle.model.trim() !== '' &&
    vehicle.year !== '' &&
    vehicle.registrationState !== '' &&
    vehicle.odometerStart !== '' &&
    parseFloat(vehicle.odometerStart) > 0 &&
    vehicle.logbookStartDate !== '' &&
    vehicle.primaryBusinessUse !== '';

  /* ---- Trip management ---- */

  function resetEditingTrip() {
    const lastTrip = trips.length > 0 ? trips[trips.length - 1] : null;
    setEditingTrip({
      id: '',
      date: lastTrip ? lastTrip.date : vehicle.logbookStartDate,
      odometerStart: lastTrip ? lastTrip.odometerEnd : vehicle.odometerStart,
      odometerEnd: '',
      purpose: 'business',
      businessPurpose: '',
      businessDescription: '',
      clientProject: '',
    });
  }

  function addTrip() {
    if (!editingTrip.date || !editingTrip.odometerStart || !editingTrip.odometerEnd) return;
    if (parseFloat(editingTrip.odometerEnd) <= parseFloat(editingTrip.odometerStart)) return;

    const newTrip: Trip = { ...editingTrip, id: generateId() };
    setTrips((prev) => [...prev, newTrip]);

    // Auto-fill next trip
    setEditingTrip({
      id: '',
      date: newTrip.date,
      odometerStart: newTrip.odometerEnd,
      odometerEnd: '',
      purpose: 'business',
      businessPurpose: '',
      businessDescription: '',
      clientProject: '',
    });
  }

  function removeTrip(id: string) {
    setTrips((prev) => prev.filter((t) => t.id !== id));
  }

  function applyQuickAdd(template: typeof QUICK_ADD_TEMPLATES[number]) {
    setEditingTrip((prev) => ({
      ...prev,
      purpose: template.purpose,
      businessPurpose: template.businessPurpose as BusinessPurpose,
      businessDescription: template.description,
    }));
  }

  /* ---- Copy to clipboard ---- */

  async function copyLogbook() {
    if (!logbookRef.current) return;
    try {
      // Build a plain-text version
      let text = '';
      text += `MOTOR VEHICLE LOGBOOK\n`;
      text += `${'='.repeat(60)}\n\n`;
      text += `Vehicle: ${vehicle.year} ${vehicle.make} ${vehicle.model}\n`;
      text += `Registration State: ${vehicle.registrationState}\n`;
      text += `Logbook Period: ${formatDate(vehicle.logbookStartDate)} to ${formatDate(logbookEndDate)} (${LOGBOOK_WEEKS} weeks)\n`;
      text += `Odometer at Start: ${fmtKm(parseFloat(vehicle.odometerStart) || 0)} km\n\n`;
      text += `${'─'.repeat(60)}\n`;
      text += `TRIP LOG\n`;
      text += `${'─'.repeat(60)}\n\n`;

      trips.forEach((trip, i) => {
        const km = getTripKm(trip);
        text += `Trip ${i + 1}: ${formatDate(trip.date)}\n`;
        text += `  Odometer: ${fmtKm(parseFloat(trip.odometerStart))} → ${fmtKm(parseFloat(trip.odometerEnd))} km (${fmtKm(km)} km)\n`;
        text += `  Purpose: ${trip.purpose === 'business' ? 'BUSINESS' : 'Personal'}`;
        if (trip.purpose === 'business') {
          const purposeLabel = BUSINESS_PURPOSE_OPTIONS.find((o) => o.value === trip.businessPurpose)?.label || '';
          text += ` — ${purposeLabel}`;
          if (trip.businessDescription) text += `: ${trip.businessDescription}`;
          if (trip.clientProject) text += ` (${trip.clientProject})`;
        }
        text += '\n\n';
      });

      text += `${'─'.repeat(60)}\n`;
      text += `SUMMARY\n`;
      text += `${'─'.repeat(60)}\n\n`;
      text += `Total Trips: ${trips.length}\n`;
      text += `Total Kilometres: ${fmtKm(totalKm)} km\n`;
      text += `Business Kilometres: ${fmtKm(totalBusinessKm)} km\n`;
      text += `Personal Kilometres: ${fmtKm(totalPersonalKm)} km\n`;
      text += `Business Use Percentage: ${businessPercent.toFixed(1)}%\n\n`;
      text += `Logbook Period: ${LOGBOOK_WEEKS} weeks (${logbookDaysElapsed} days)\n`;
      text += `Trip Days Recorded: ${totalTripDays}\n`;
      text += `Average Daily Business Travel: ${fmtKm(avgDailyBusinessKm)} km\n\n`;
      text += `${'─'.repeat(60)}\n`;
      text += `ATO COMPLIANCE NOTES\n`;
      text += `${'─'.repeat(60)}\n\n`;
      text += `- This logbook covers a ${LOGBOOK_WEEKS}-week period as required by the ATO.\n`;
      text += `- The logbook is valid for 5 years from the start date, unless circumstances change.\n`;
      text += `- Retain all receipts for car expenses (fuel, servicing, insurance, registration, tolls).\n`;
      text += `- Record the odometer reading at 30 June each year for annual expense calculations.\n`;
      text += `- If your work circumstances change significantly, start a new 12-week logbook.\n`;
      text += `- The business use percentage (${businessPercent.toFixed(1)}%) is applied to total annual car costs.\n`;
      text += `- The ATO may request this logbook during an audit — keep it with your tax records.\n`;

      await navigator.clipboard.writeText(text);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2500);
    } catch {
      // Fallback: select all text in the logbook div
      const range = document.createRange();
      range.selectNodeContents(logbookRef.current);
      const selection = window.getSelection();
      selection?.removeAllRanges();
      selection?.addRange(range);
    }
  }

  return (
    <div className="glass rounded-2xl p-6 sm:p-8">
      <StepIndicator step={step} />

      {/* ---- STEP 1: Vehicle Details ---- */}
      {step === 1 && (
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-bold text-white heading-font mb-1">Vehicle Details</h2>
            <p className="text-sm text-slate-400">
              Enter your vehicle information and choose when to start your 12-week logbook period.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <InputField
              label="Vehicle make"
              value={vehicle.make}
              onChange={(v) => setVehicle((p) => ({ ...p, make: v }))}
              placeholder="e.g. Toyota"
            />
            <InputField
              label="Vehicle model"
              value={vehicle.model}
              onChange={(v) => setVehicle((p) => ({ ...p, model: v }))}
              placeholder="e.g. Corolla"
            />
            <InputField
              label="Year"
              value={vehicle.year}
              onChange={(v) => setVehicle((p) => ({ ...p, year: v }))}
              placeholder="2024"
              type="number"
            />
            <SelectField
              label="Registration state"
              value={vehicle.registrationState}
              onChange={(v) => setVehicle((p) => ({ ...p, registrationState: v }))}
              options={STATE_OPTIONS}
            />
            <InputField
              label="Odometer reading (start of logbook)"
              value={vehicle.odometerStart}
              onChange={(v) => setVehicle((p) => ({ ...p, odometerStart: v }))}
              placeholder="45000"
              type="number"
              hint="Current odometer in kilometres"
              prefix="km"
            />
            <div>
              <Label>Logbook start date</Label>
              <input
                type="date"
                value={vehicle.logbookStartDate}
                onChange={(e) => setVehicle((p) => ({ ...p, logbookStartDate: e.target.value }))}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20 transition-all"
              />
              {vehicle.logbookStartDate && (
                <p className="text-xs text-slate-500 mt-1">
                  12-week period ends: {formatDate(logbookEndDate)}
                </p>
              )}
            </div>
            <SelectField
              label="Primary business use"
              value={vehicle.primaryBusinessUse}
              onChange={(v) => setVehicle((p) => ({ ...p, primaryBusinessUse: v }))}
              options={PRIMARY_USE_OPTIONS}
              hint="Most common reason you use this vehicle for work"
            />
          </div>

          {vehicle.logbookStartDate && (
            <div className="bg-amber-400/5 border border-amber-400/20 rounded-xl p-4">
              <p className="text-sm text-amber-400 font-medium mb-1">Your logbook period</p>
              <p className="text-xs text-slate-400">
                {formatDate(vehicle.logbookStartDate)} to {formatDate(logbookEndDate)} ({LOGBOOK_WEEKS} weeks / {LOGBOOK_DAYS} days).
                The ATO requires a minimum continuous 12-week period. This logbook will be valid for 5 years unless your work circumstances change.
              </p>
            </div>
          )}

          <div className="flex justify-end pt-2">
            <button
              onClick={() => { resetEditingTrip(); setStep(2); }}
              disabled={!step1Valid}
              className="px-6 py-2.5 bg-gradient-to-r from-amber-400 to-orange-500 text-white text-sm font-semibold rounded-lg hover:from-amber-300 hover:to-orange-400 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Next: Add Trips
            </button>
          </div>
        </div>
      )}

      {/* ---- STEP 2: Trip Entry ---- */}
      {step === 2 && (
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-bold text-white heading-font mb-1">Trip Entry</h2>
            <p className="text-sm text-slate-400">
              Record every trip during your {LOGBOOK_WEEKS}-week period — both business and personal.
              The ATO requires all trips to be logged.
            </p>
          </div>

          {/* Running Totals */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-white/5 rounded-xl border border-white/10 p-3 text-center">
              <p className="text-xs text-slate-400 mb-1">Total Trips</p>
              <p className="text-xl font-bold text-white">{trips.length}</p>
            </div>
            <div className="bg-white/5 rounded-xl border border-white/10 p-3 text-center">
              <p className="text-xs text-slate-400 mb-1">Business km</p>
              <p className="text-xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                {fmtKm(totalBusinessKm)}
              </p>
            </div>
            <div className="bg-white/5 rounded-xl border border-white/10 p-3 text-center">
              <p className="text-xs text-slate-400 mb-1">Personal km</p>
              <p className="text-xl font-bold text-slate-300">{fmtKm(totalPersonalKm)}</p>
            </div>
            <div className="bg-white/5 rounded-xl border border-amber-400/20 p-3 text-center">
              <p className="text-xs text-amber-400 mb-1">Business Use %</p>
              <p className="text-xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                {businessPercent.toFixed(1)}%
              </p>
            </div>
          </div>

          {/* Quick Add Buttons */}
          <div>
            <p className="text-xs text-slate-500 mb-2 font-medium">Quick add trip type:</p>
            <div className="flex flex-wrap gap-2">
              {QUICK_ADD_TEMPLATES.map((t) => (
                <button
                  key={t.label}
                  type="button"
                  onClick={() => applyQuickAdd(t)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                    t.purpose === 'personal'
                      ? 'bg-white/5 border-white/10 text-slate-400 hover:bg-white/10'
                      : 'bg-amber-400/10 border-amber-400/20 text-amber-400 hover:bg-amber-400/20'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* New Trip Form */}
          <div className="bg-white/5 rounded-xl border border-white/10 p-5 space-y-4">
            <h3 className="text-white font-semibold text-sm">New Trip</h3>

            <div className="grid sm:grid-cols-3 gap-4">
              <div>
                <Label>Date</Label>
                <input
                  type="date"
                  value={editingTrip.date}
                  min={vehicle.logbookStartDate}
                  max={logbookEndDate}
                  onChange={(e) => setEditingTrip((p) => ({ ...p, date: e.target.value }))}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20 transition-all"
                />
              </div>
              <InputField
                label="Start odometer"
                value={editingTrip.odometerStart}
                onChange={(v) => setEditingTrip((p) => ({ ...p, odometerStart: v }))}
                placeholder="45000"
                type="number"
                prefix="km"
              />
              <div>
                <InputField
                  label="End odometer"
                  value={editingTrip.odometerEnd}
                  onChange={(v) => setEditingTrip((p) => ({ ...p, odometerEnd: v }))}
                  placeholder="45025"
                  type="number"
                  prefix="km"
                />
                {editingTrip.odometerStart && editingTrip.odometerEnd && (
                  <p className="text-xs text-amber-400 mt-1 font-medium">
                    {fmtKm(getTripKm(editingTrip))} km
                  </p>
                )}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Label>Purpose</Label>
                <div className="flex gap-3">
                  {[
                    { val: 'business' as TripPurposeType, label: 'Business' },
                    { val: 'personal' as TripPurposeType, label: 'Personal' },
                  ].map(({ val, label }) => (
                    <button
                      key={val}
                      type="button"
                      onClick={() => setEditingTrip((p) => ({ ...p, purpose: val }))}
                      className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-all border ${
                        editingTrip.purpose === val
                          ? val === 'business'
                            ? 'bg-amber-500/20 border-amber-500/50 text-amber-400'
                            : 'bg-slate-500/20 border-slate-500/50 text-slate-300'
                          : 'bg-white/5 border-white/10 text-slate-400 hover:bg-white/10'
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              {editingTrip.purpose === 'business' && (
                <SelectField
                  label="Business purpose"
                  value={editingTrip.businessPurpose}
                  onChange={(v) => setEditingTrip((p) => ({ ...p, businessPurpose: v }))}
                  options={BUSINESS_PURPOSE_OPTIONS}
                />
              )}
            </div>

            {editingTrip.purpose === 'business' && (
              <div className="grid sm:grid-cols-2 gap-4">
                <InputField
                  label="Description"
                  value={editingTrip.businessDescription}
                  onChange={(v) => setEditingTrip((p) => ({ ...p, businessDescription: v }))}
                  placeholder="e.g. Client meeting with Smith Accounting"
                  hint="ATO requires a brief description of business purpose"
                />
                <InputField
                  label="Client / project (optional)"
                  value={editingTrip.clientProject}
                  onChange={(v) => setEditingTrip((p) => ({ ...p, clientProject: v }))}
                  placeholder="e.g. Smith Accounting"
                />
              </div>
            )}

            <div className="flex justify-end">
              <button
                onClick={addTrip}
                disabled={
                  !editingTrip.date ||
                  !editingTrip.odometerStart ||
                  !editingTrip.odometerEnd ||
                  parseFloat(editingTrip.odometerEnd) <= parseFloat(editingTrip.odometerStart) ||
                  (editingTrip.purpose === 'business' && !editingTrip.businessPurpose)
                }
                className="px-5 py-2.5 bg-gradient-to-r from-amber-400 to-orange-500 text-white text-sm font-semibold rounded-lg hover:from-amber-300 hover:to-orange-400 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Add Trip
              </button>
            </div>
          </div>

          {/* Trip List */}
          {trips.length > 0 && (
            <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
              <div className="px-5 py-3 border-b border-white/10 flex items-center justify-between">
                <h3 className="text-white font-semibold text-sm">
                  Recorded Trips ({trips.length})
                </h3>
                <span className="text-xs text-slate-400">
                  {fmtKm(totalKm)} km total
                </span>
              </div>
              <div className="max-h-64 overflow-y-auto">
                {trips.map((trip, i) => {
                  const km = getTripKm(trip);
                  const purposeLabel = BUSINESS_PURPOSE_OPTIONS.find((o) => o.value === trip.businessPurpose)?.label || '';
                  return (
                    <div
                      key={trip.id}
                      className={`px-5 py-3 flex items-center justify-between gap-4 ${
                        i < trips.length - 1 ? 'border-b border-white/5' : ''
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div
                          className={`w-2 h-2 rounded-full flex-shrink-0 ${
                            trip.purpose === 'business'
                              ? 'bg-gradient-to-r from-amber-400 to-orange-500'
                              : 'bg-white/20'
                          }`}
                        />
                        <div className="min-w-0">
                          <p className="text-sm text-white truncate">
                            {formatDate(trip.date)} — {fmtKm(km)} km
                            <span className={`ml-2 text-xs font-medium ${
                              trip.purpose === 'business' ? 'text-amber-400' : 'text-slate-500'
                            }`}>
                              {trip.purpose === 'business' ? purposeLabel : 'Personal'}
                            </span>
                          </p>
                          {trip.purpose === 'business' && trip.businessDescription && (
                            <p className="text-xs text-slate-500 truncate">{trip.businessDescription}</p>
                          )}
                        </div>
                      </div>
                      <button
                        onClick={() => removeTrip(trip.id)}
                        className="text-slate-600 hover:text-red-400 transition-colors flex-shrink-0"
                        aria-label="Remove trip"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          <div className="flex justify-between pt-2">
            <button
              onClick={() => setStep(1)}
              className="px-5 py-2.5 bg-white/5 border border-white/10 text-slate-300 text-sm font-medium rounded-lg hover:bg-white/10 transition-all"
            >
              Back
            </button>
            <button
              onClick={() => setStep(3)}
              disabled={trips.length < 2}
              className="px-6 py-2.5 bg-gradient-to-r from-amber-400 to-orange-500 text-white text-sm font-semibold rounded-lg hover:from-amber-300 hover:to-orange-400 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {trips.length < 2 ? 'Add at least 2 trips' : 'View Summary'}
            </button>
          </div>
        </div>
      )}

      {/* ---- STEP 3: Summary Period ---- */}
      {step === 3 && (
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-bold text-white heading-font mb-1">Logbook Period Summary</h2>
            <p className="text-sm text-slate-400">
              {vehicle.year} {vehicle.make} {vehicle.model} — {formatDate(vehicle.logbookStartDate)} to {formatDate(logbookEndDate)}
            </p>
          </div>

          {/* Overview Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-white/5 rounded-xl border border-white/10 p-4 text-center">
              <p className="text-xs text-slate-400 mb-1">Logbook Period</p>
              <p className="text-xl font-bold text-white">{LOGBOOK_WEEKS} weeks</p>
              <p className="text-xs text-slate-500">{logbookDaysElapsed} days</p>
            </div>
            <div className="bg-white/5 rounded-xl border border-white/10 p-4 text-center">
              <p className="text-xs text-slate-400 mb-1">Total Trips</p>
              <p className="text-xl font-bold text-white">{trips.length}</p>
              <p className="text-xs text-slate-500">{businessTrips.length} business / {personalTrips.length} personal</p>
            </div>
            <div className="bg-white/5 rounded-xl border border-white/10 p-4 text-center">
              <p className="text-xs text-slate-400 mb-1">Total Kilometres</p>
              <p className="text-xl font-bold text-white">{fmtKm(totalKm)}</p>
              <p className="text-xs text-slate-500">in {LOGBOOK_WEEKS} weeks</p>
            </div>
            <div className="bg-white/5 rounded-xl border border-amber-400/20 p-4 text-center">
              <p className="text-xs text-amber-400 mb-1">Business Use %</p>
              <p className="text-xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                {businessPercent.toFixed(1)}%
              </p>
              <p className="text-xs text-slate-500">ATO logbook rate</p>
            </div>
          </div>

          {/* Donut Chart + Breakdown */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white/5 rounded-xl border border-white/10 p-6 flex items-center justify-center">
              <DonutChart businessPercent={businessPercent} />
            </div>
            <div className="bg-white/5 rounded-xl border border-white/10 p-6 space-y-4">
              <h3 className="text-white font-semibold text-sm">Kilometre Breakdown</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-slate-300">Business km</span>
                    <span className="text-sm text-amber-400 font-bold">{fmtKm(totalBusinessKm)} km</span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-amber-400 to-orange-500 rounded-full transition-all duration-500"
                      style={{ width: `${businessPercent}%` }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-slate-300">Personal km</span>
                    <span className="text-sm text-slate-400 font-bold">{fmtKm(totalPersonalKm)} km</span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-white/20 rounded-full transition-all duration-500"
                      style={{ width: `${100 - businessPercent}%` }}
                    />
                  </div>
                </div>
              </div>
              <div className="border-t border-white/10 pt-3 space-y-2">
                <div className="flex justify-between text-xs text-slate-400">
                  <span>Avg daily business travel</span>
                  <span className="text-white font-medium">{fmtKm(avgDailyBusinessKm)} km/day</span>
                </div>
                <div className="flex justify-between text-xs text-slate-400">
                  <span>Est. annual business km</span>
                  <span className="text-white font-medium">{fmtKm(annualBusinessKmEstimate)} km</span>
                </div>
                <div className="flex justify-between text-xs text-slate-400">
                  <span>Est. annual total km</span>
                  <span className="text-white font-medium">{fmtKm(annualTotalKmEstimate)} km</span>
                </div>
              </div>
            </div>
          </div>

          {/* Deduction Comparison */}
          <div className="bg-white/5 rounded-xl border border-white/10 p-6 space-y-5">
            <h3 className="text-white font-semibold">Estimated Annual Deduction Comparison</h3>
            <p className="text-xs text-slate-400">
              Enter your estimated annual car running costs to compare the two ATO deduction methods.
            </p>

            <div className="max-w-xs">
              <InputField
                label="Total annual car costs"
                value={annualCarCosts}
                onChange={(v) => setAnnualCarCosts(v)}
                placeholder="8000"
                prefix="$"
                type="number"
                hint="Fuel, registration, insurance, servicing, tyres, depreciation, finance interest"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className={`rounded-xl p-5 border ${logbookIsBetter ? 'bg-amber-400/5 border-amber-400/30' : 'bg-white/5 border-white/10'}`}>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-white font-semibold text-sm">Logbook Method</h4>
                  {logbookIsBetter && (
                    <span className="text-xs bg-amber-400/20 text-amber-400 border border-amber-400/30 rounded-full px-2 py-0.5 font-semibold">
                      Better
                    </span>
                  )}
                </div>
                <p className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                  {fmt(logbookDeduction)}
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  {fmt(carCosts)} x {businessPercent.toFixed(1)}% business use
                </p>
                <p className="text-xs text-slate-500 mt-0.5">No cap on deduction amount</p>
              </div>
              <div className={`rounded-xl p-5 border ${!logbookIsBetter ? 'bg-amber-400/5 border-amber-400/30' : 'bg-white/5 border-white/10'}`}>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-white font-semibold text-sm">Cents Per Km Method</h4>
                  {!logbookIsBetter && (
                    <span className="text-xs bg-amber-400/20 text-amber-400 border border-amber-400/30 rounded-full px-2 py-0.5 font-semibold">
                      Better
                    </span>
                  )}
                </div>
                <p className="text-2xl font-bold text-white">{fmt(centsPerKmDeduction)}</p>
                <p className="text-xs text-slate-400 mt-1">
                  {fmtKm(Math.min(annualBusinessKmEstimate, ATO_MAX_KM))} km x 85c/km
                </p>
                <p className="text-xs text-slate-500 mt-0.5">
                  Capped at {fmtKm(ATO_MAX_KM)} km = {fmt(ATO_MAX_CENTS_DEDUCTION)}/year
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-400/10 to-orange-500/10 border border-amber-400/20 rounded-xl p-5">
              <p className="text-sm text-amber-400 font-medium mb-2">
                {logbookIsBetter ? 'The Logbook Method Saves You More' : 'The Cents Per Km Method Is Simpler and Saves More'}
              </p>
              <p className="text-sm text-slate-300">
                {logbookIsBetter
                  ? `With ${businessPercent.toFixed(1)}% business use and ${fmt(carCosts)} annual car costs, the logbook method gives you ${fmt(deductionDifference)} more in deductions per year compared to the 85c/km method. The logbook method is especially valuable because your estimated annual business km (${fmtKm(annualBusinessKmEstimate)}) ${annualBusinessKmEstimate > ATO_MAX_KM ? 'exceeds' : 'approaches'} the 5,000 km cap.`
                  : `At ${businessPercent.toFixed(1)}% business use and ${fmt(carCosts)} annual car costs, the cents-per-km method gives you ${fmt(deductionDifference)} more in deductions and requires no logbook. This method is better when your total car running costs are low relative to your business kilometres.`}
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between pt-2">
            <button
              onClick={() => setStep(2)}
              className="px-5 py-2.5 bg-white/5 border border-white/10 text-slate-300 text-sm font-medium rounded-lg hover:bg-white/10 transition-all"
            >
              Back: Edit Trips
            </button>
            <button
              onClick={() => setStep(4)}
              className="px-6 py-2.5 bg-gradient-to-r from-amber-400 to-orange-500 text-white text-sm font-semibold rounded-lg hover:from-amber-300 hover:to-orange-400 transition-all"
            >
              Generate Logbook
            </button>
          </div>
        </div>
      )}

      {/* ---- STEP 4: Generated Logbook ---- */}
      {step === 4 && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-white heading-font mb-1">Generated Logbook</h2>
              <p className="text-sm text-slate-400">
                Your ATO-compliant motor vehicle logbook — ready to copy or print.
              </p>
            </div>
            <button
              onClick={copyLogbook}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all border ${
                copySuccess
                  ? 'bg-emerald-400/20 border-emerald-400/50 text-emerald-400'
                  : 'bg-amber-400/10 border-amber-400/30 text-amber-400 hover:bg-amber-400/20'
              }`}
            >
              {copySuccess ? 'Copied!' : 'Copy to Clipboard'}
            </button>
          </div>

          {/* Logbook Document */}
          <div ref={logbookRef} className="bg-white/[0.03] rounded-xl border border-white/10 p-6 sm:p-8 space-y-6">
            {/* Header */}
            <div className="border-b border-white/10 pb-5">
              <h3 className="text-lg font-bold text-white heading-font mb-3">MOTOR VEHICLE LOGBOOK</h3>
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2 text-sm">
                <div className="flex gap-2">
                  <span className="text-slate-500 min-w-[120px]">Vehicle:</span>
                  <span className="text-white font-medium">{vehicle.year} {vehicle.make} {vehicle.model}</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-slate-500 min-w-[120px]">Registration:</span>
                  <span className="text-white font-medium">{vehicle.registrationState}</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-slate-500 min-w-[120px]">Logbook Period:</span>
                  <span className="text-white font-medium">{formatDate(vehicle.logbookStartDate)} to {formatDate(logbookEndDate)}</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-slate-500 min-w-[120px]">Duration:</span>
                  <span className="text-white font-medium">{LOGBOOK_WEEKS} weeks ({logbookDaysElapsed} days)</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-slate-500 min-w-[120px]">Odometer Start:</span>
                  <span className="text-white font-medium">{fmtKm(parseFloat(vehicle.odometerStart) || 0)} km</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-slate-500 min-w-[120px]">Primary Use:</span>
                  <span className="text-white font-medium">
                    {PRIMARY_USE_OPTIONS.find((o) => o.value === vehicle.primaryBusinessUse)?.label || ''}
                  </span>
                </div>
              </div>
            </div>

            {/* Trip Table */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-3">Trip Log</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-2 pr-2 text-slate-400 font-medium">#</th>
                      <th className="text-left py-2 pr-2 text-slate-400 font-medium">Date</th>
                      <th className="text-right py-2 pr-2 text-slate-400 font-medium">Start km</th>
                      <th className="text-right py-2 pr-2 text-slate-400 font-medium">End km</th>
                      <th className="text-right py-2 pr-2 text-slate-400 font-medium">Distance</th>
                      <th className="text-left py-2 pr-2 text-slate-400 font-medium">Purpose</th>
                      <th className="text-left py-2 text-slate-400 font-medium">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {trips.map((trip, i) => {
                      const km = getTripKm(trip);
                      const purposeLabel = BUSINESS_PURPOSE_OPTIONS.find((o) => o.value === trip.businessPurpose)?.label || '';
                      return (
                        <tr key={trip.id}>
                          <td className="py-2 pr-2 text-slate-500">{i + 1}</td>
                          <td className="py-2 pr-2 text-slate-300">{formatDate(trip.date)}</td>
                          <td className="py-2 pr-2 text-right text-slate-300">{fmtKm(parseFloat(trip.odometerStart))}</td>
                          <td className="py-2 pr-2 text-right text-slate-300">{fmtKm(parseFloat(trip.odometerEnd))}</td>
                          <td className="py-2 pr-2 text-right text-white font-medium">{fmtKm(km)}</td>
                          <td className={`py-2 pr-2 font-medium ${
                            trip.purpose === 'business' ? 'text-amber-400' : 'text-slate-500'
                          }`}>
                            {trip.purpose === 'business' ? 'Business' : 'Personal'}
                          </td>
                          <td className="py-2 text-slate-400">
                            {trip.purpose === 'business'
                              ? `${purposeLabel}${trip.businessDescription ? ': ' + trip.businessDescription : ''}${trip.clientProject ? ' (' + trip.clientProject + ')' : ''}`
                              : 'Personal'}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Summary */}
            <div className="border-t border-white/10 pt-5">
              <h4 className="text-sm font-semibold text-white mb-3">Summary</h4>
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-400">Total Trips</span>
                  <span className="text-white font-medium">{trips.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Trip Days</span>
                  <span className="text-white font-medium">{totalTripDays}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Total Kilometres</span>
                  <span className="text-white font-medium">{fmtKm(totalKm)} km</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Business Kilometres</span>
                  <span className="text-amber-400 font-medium">{fmtKm(totalBusinessKm)} km</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Personal Kilometres</span>
                  <span className="text-slate-300 font-medium">{fmtKm(totalPersonalKm)} km</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Business Use Percentage</span>
                  <span className="text-amber-400 font-bold">{businessPercent.toFixed(1)}%</span>
                </div>
              </div>
            </div>

            {/* ATO Compliance Notes */}
            <div className="border-t border-white/10 pt-5">
              <h4 className="text-sm font-semibold text-white mb-3">ATO Compliance Notes</h4>
              <ul className="space-y-2 text-xs text-slate-400">
                <li className="flex gap-2">
                  <span className="text-amber-400 flex-shrink-0">1.</span>
                  This logbook covers a continuous {LOGBOOK_WEEKS}-week period ({logbookDaysElapsed} days) as required by the ATO for the logbook method of claiming motor vehicle expenses.
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-400 flex-shrink-0">2.</span>
                  This logbook is valid for 5 years from {formatDate(vehicle.logbookStartDate)}, unless your work circumstances change significantly (new home, new job, change in travel patterns).
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-400 flex-shrink-0">3.</span>
                  You must retain all receipts and records for car expenses throughout the year — fuel, servicing, registration, insurance, tolls, parking, tyres, and finance interest.
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-400 flex-shrink-0">4.</span>
                  Record your odometer reading at 30 June each year to calculate the annual business use in kilometres.
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-400 flex-shrink-0">5.</span>
                  If your work circumstances change significantly during the 5-year validity period, you must start a new 12-week logbook to establish an updated business use percentage.
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-400 flex-shrink-0">6.</span>
                  The established business use percentage ({businessPercent.toFixed(1)}%) is applied to your total annual car running costs to calculate your tax deduction under the logbook method.
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-400 flex-shrink-0">7.</span>
                  The ATO may request this logbook during an audit. Keep it stored with your tax records for a minimum of 5 years from the date of your tax return.
                </li>
              </ul>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              onClick={() => setStep(3)}
              className="flex-1 py-2.5 bg-white/5 border border-white/10 text-slate-300 text-sm font-medium rounded-lg hover:bg-white/10 transition-all"
            >
              Back to Summary
            </button>
            <button
              onClick={copyLogbook}
              className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                copySuccess
                  ? 'bg-emerald-400/20 border border-emerald-400/50 text-emerald-400'
                  : 'bg-gradient-to-r from-amber-400 to-orange-500 text-white hover:from-amber-300 hover:to-orange-400'
              }`}
            >
              {copySuccess ? 'Copied to Clipboard!' : 'Copy Logbook to Clipboard'}
            </button>
            <button
              onClick={() => window.print()}
              className="flex-1 py-2.5 bg-white/5 border border-white/10 text-slate-300 text-sm font-medium rounded-lg hover:bg-white/10 transition-all"
            >
              Print Logbook
            </button>
          </div>

          {/* Start Over */}
          <div className="text-center pt-2">
            <button
              onClick={() => {
                setStep(1);
                setTrips([]);
                setVehicle({
                  make: '',
                  model: '',
                  year: new Date().getFullYear().toString(),
                  registrationState: '',
                  odometerStart: '',
                  logbookStartDate: '',
                  primaryBusinessUse: '',
                });
              }}
              className="text-sm text-slate-500 hover:text-slate-300 transition-colors"
            >
              Start a new logbook
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
