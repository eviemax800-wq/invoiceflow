'use client';

import { useState, useMemo, useEffect, useCallback, useRef } from 'react';

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

type Frequency = 'one-off' | 'daily' | 'weekly' | 'fortnightly' | 'monthly';

const FREQUENCY_OPTIONS: { value: Frequency; label: string; perYear: number }[] = [
  { value: 'one-off', label: 'One-off', perYear: 1 },
  { value: 'daily', label: 'Daily', perYear: 260 },
  { value: 'weekly', label: 'Weekly', perYear: 52 },
  { value: 'fortnightly', label: 'Fortnightly', perYear: 26 },
  { value: 'monthly', label: 'Monthly', perYear: 12 },
];

const DURATION_PRESETS = [
  { label: '15min', value: 15 },
  { label: '30min', value: 30 },
  { label: '45min', value: 45 },
  { label: '1hr', value: 60 },
  { label: '1.5hr', value: 90 },
  { label: '2hr', value: 120 },
];

const OVERHEAD_MULTIPLIER = 1.3;

export default function MeetingCostCalculator() {
  const [attendees, setAttendees] = useState(4);
  const [duration, setDuration] = useState(60);
  const [useIndividualRates, setUseIndividualRates] = useState(false);
  const [averageRate, setAverageRate] = useState('100');
  const [individualRates, setIndividualRates] = useState<string[]>(['100', '100', '100', '100']);
  const [includeOverheads, setIncludeOverheads] = useState(true);
  const [frequency, setFrequency] = useState<Frequency>('weekly');
  const [copied, setCopied] = useState(false);

  // Meeting timer state
  const [timerRunning, setTimerRunning] = useState(false);
  const [timerSeconds, setTimerSeconds] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Sync individual rates array when attendee count changes
  useEffect(() => {
    setIndividualRates((prev) => {
      if (attendees > prev.length) {
        return [...prev, ...Array(attendees - prev.length).fill(averageRate || '100')];
      }
      return prev.slice(0, attendees);
    });
  }, [attendees, averageRate]);

  // Timer effect
  useEffect(() => {
    if (timerRunning) {
      timerRef.current = setInterval(() => {
        setTimerSeconds((s) => s + 1);
      }, 1000);
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [timerRunning]);

  const analysis = useMemo(() => {
    const numAttendees = Math.max(1, attendees);
    const durationMinutes = Math.max(15, duration);
    const durationHours = durationMinutes / 60;

    let totalHourlyRate: number;
    if (useIndividualRates) {
      totalHourlyRate = individualRates
        .slice(0, numAttendees)
        .reduce((sum, rate) => sum + (parseFloat(rate) || 0), 0);
    } else {
      totalHourlyRate = numAttendees * (parseFloat(averageRate) || 0);
    }

    const baseCost = totalHourlyRate * durationHours;
    const meetingCost = includeOverheads ? baseCost * OVERHEAD_MULTIPLIER : baseCost;
    const costPerMinute = durationMinutes > 0 ? meetingCost / durationMinutes : 0;
    const costPerAttendee = numAttendees > 0 ? meetingCost / numAttendees : 0;

    const freq = FREQUENCY_OPTIONS.find((f) => f.value === frequency);
    const meetingsPerYear = freq?.perYear || 1;
    const annualCost = meetingCost * meetingsPerYear;
    const annualHours = durationHours * meetingsPerYear;
    const annualDays = annualHours / 8;

    // Optimization savings (annual)
    const isRecurring = frequency !== 'one-off';
    const costPerMinuteTotal = totalHourlyRate / 60 * (includeOverheads ? OVERHEAD_MULTIPLIER : 1);
    const saveCut15Min = costPerMinuteTotal * 15 * meetingsPerYear;
    const avgRateVal = useIndividualRates
      ? totalHourlyRate / numAttendees
      : (parseFloat(averageRate) || 0);
    const saveRemove1Attendee = avgRateVal * durationHours * (includeOverheads ? OVERHEAD_MULTIPLIER : 1) * meetingsPerYear;
    const saveAsync = meetingCost * meetingsPerYear;

    // Fun comparisons (annual cost context)
    const invoiceFlowMonths = annualCost / 29; // InvoiceFlow Pro ~$29/mo
    const clientLunches = annualCost / 45; // Avg Melbourne lunch ~$45
    const productiveHours = annualHours;

    // Cost per second for live timer
    const costPerSecond = meetingCost / (durationMinutes * 60);

    return {
      meetingCost,
      costPerMinute,
      costPerAttendee,
      costPerSecond,
      annualCost,
      annualHours,
      annualDays,
      meetingsPerYear,
      isRecurring,
      saveCut15Min,
      saveRemove1Attendee,
      saveAsync,
      invoiceFlowMonths,
      clientLunches,
      productiveHours,
    };
  }, [attendees, duration, useIndividualRates, averageRate, individualRates, includeOverheads, frequency]);

  const timerCost = analysis.costPerSecond * timerSeconds;

  const handleStartTimer = useCallback(() => {
    if (timerRunning) {
      setTimerRunning(false);
    } else {
      setTimerSeconds(0);
      setTimerRunning(true);
    }
  }, [timerRunning]);

  const handleResetTimer = useCallback(() => {
    setTimerRunning(false);
    setTimerSeconds(0);
  }, []);

  const formatTimerTime = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleCopy = () => {
    const freq = FREQUENCY_OPTIONS.find((f) => f.value === frequency);
    const lines = [
      'Meeting Cost Analysis — InvoiceFlow',
      '========================================',
      '',
      `Attendees: ${attendees}`,
      `Duration: ${duration} minutes`,
      `Overheads included: ${includeOverheads ? 'Yes (+30%)' : 'No'}`,
      `Frequency: ${freq?.label || 'One-off'}`,
      '',
      '--- Results ---',
      `Total Meeting Cost: ${formatCurrency(analysis.meetingCost)}`,
      `Cost Per Minute: ${formatCurrencyPrecise(analysis.costPerMinute)}`,
      `Cost Per Attendee: ${formatCurrency(analysis.costPerAttendee)}`,
    ];
    if (analysis.isRecurring) {
      lines.push('');
      lines.push('--- Annual Impact ---');
      lines.push(`Annual Cost: ${formatCurrency(analysis.annualCost)} (${analysis.meetingsPerYear} meetings)`);
      lines.push(`Total Hours in Meetings: ${analysis.annualHours.toFixed(0)} hrs`);
      lines.push(`Equivalent Working Days: ${analysis.annualDays.toFixed(1)} days`);
      lines.push('');
      lines.push('--- Optimization Savings ---');
      lines.push(`Cut 15 minutes: Save ${formatCurrency(analysis.saveCut15Min)}/year`);
      lines.push(`Remove 1 attendee: Save ${formatCurrency(analysis.saveRemove1Attendee)}/year`);
      lines.push(`Make it async: Save ${formatCurrency(analysis.saveAsync)}/year`);
    }
    lines.push('');
    lines.push('Generated at invoiceflow.au/tools/meeting-cost-calculator');

    navigator.clipboard.writeText(lines.join('\n')).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const updateIndividualRate = (index: number, value: string) => {
    setIndividualRates((prev) => {
      const updated = [...prev];
      updated[index] = value;
      return updated;
    });
  };

  const inputClass =
    'w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500/40 focus:border-teal-500/40 transition-all text-sm';
  const labelClass = 'block text-sm font-medium text-slate-400 mb-1.5';

  return (
    <div className="space-y-8">
      {/* Meeting Details */}
      <div className="glass rounded-2xl p-6 sm:p-8 space-y-6">
        <h2 className="text-xl font-bold text-white heading-font">Meeting Details</h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {/* Attendees */}
          <div>
            <label className={labelClass}>Number of Attendees</label>
            <input
              type="number"
              value={attendees}
              onChange={(e) => setAttendees(Math.max(1, parseInt(e.target.value) || 1))}
              className={inputClass}
              min="1"
              max="50"
            />
          </div>

          {/* Duration */}
          <div>
            <label className={labelClass}>Duration (minutes)</label>
            <input
              type="range"
              value={duration}
              onChange={(e) => setDuration(parseInt(e.target.value))}
              min="15"
              max="240"
              step="15"
              className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer accent-teal-400 mb-2"
            />
            <div className="flex items-center justify-between">
              <span className="text-white font-semibold text-lg">{duration} min</span>
              <span className="text-slate-500 text-xs">{(duration / 60).toFixed(1)} hrs</span>
            </div>
          </div>
        </div>

        {/* Quick Duration Buttons */}
        <div>
          <p className="text-xs text-slate-500 mb-2">Quick select:</p>
          <div className="flex flex-wrap gap-2">
            {DURATION_PRESETS.map((preset) => (
              <button
                key={preset.value}
                onClick={() => setDuration(preset.value)}
                className={`text-xs px-3 py-1.5 rounded-lg border transition-all ${
                  duration === preset.value
                    ? 'bg-gradient-to-r from-teal-500 to-blue-500 border-transparent text-white'
                    : 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {preset.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Cost Inputs */}
      <div className="glass rounded-2xl p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-white heading-font">Cost Inputs</h2>
          <button
            onClick={() => setUseIndividualRates(!useIndividualRates)}
            className="text-xs px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-all"
          >
            {useIndividualRates ? 'Use Average Rate' : 'Set Individual Rates'}
          </button>
        </div>

        {!useIndividualRates ? (
          <div>
            <label className={labelClass}>Average Hourly Rate per Attendee (AUD)</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm">$</span>
              <input
                type="number"
                value={averageRate}
                onChange={(e) => setAverageRate(e.target.value)}
                className={`${inputClass} pl-8`}
                placeholder="100"
                min="0"
              />
            </div>
            <p className="text-xs text-slate-500 mt-1.5">
              Combined hourly cost: {formatCurrency(attendees * (parseFloat(averageRate) || 0))}/hr for {attendees} people
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            <p className="text-sm text-slate-400">Enter each attendee&apos;s hourly rate:</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {individualRates.slice(0, attendees).map((rate, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <span className="text-xs text-slate-500 w-20 shrink-0">Person {idx + 1}</span>
                  <div className="relative flex-1">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-sm">$</span>
                    <input
                      type="number"
                      value={rate}
                      onChange={(e) => updateIndividualRate(idx, e.target.value)}
                      className={`${inputClass} pl-7 py-2`}
                      placeholder="100"
                      min="0"
                    />
                  </div>
                  <span className="text-xs text-slate-500">/hr</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Overheads Toggle */}
        <div className="flex items-center justify-between bg-white/5 rounded-xl px-4 py-3">
          <div>
            <p className="text-sm text-white font-medium">Include overheads (+30%)</p>
            <p className="text-xs text-slate-500">Office space, equipment, utilities, opportunity cost</p>
          </div>
          <button
            onClick={() => setIncludeOverheads(!includeOverheads)}
            className={`relative w-12 h-6 rounded-full transition-colors ${
              includeOverheads ? 'bg-teal-500' : 'bg-white/20'
            }`}
          >
            <div
              className={`absolute top-0.5 w-5 h-5 rounded-full bg-white transition-transform ${
                includeOverheads ? 'translate-x-6' : 'translate-x-0.5'
              }`}
            />
          </button>
        </div>
      </div>

      {/* Frequency */}
      <div className="glass rounded-2xl p-6 sm:p-8 space-y-4">
        <h2 className="text-xl font-bold text-white heading-font">Frequency</h2>
        <p className="text-sm text-slate-400">How often does this meeting happen?</p>
        <div className="flex flex-wrap gap-2">
          {FREQUENCY_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              onClick={() => setFrequency(opt.value)}
              className={`text-sm px-4 py-2 rounded-xl border transition-all ${
                frequency === opt.value
                  ? 'bg-gradient-to-r from-teal-500 to-blue-500 border-transparent text-white font-medium'
                  : 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Results */}
      <div className="glass rounded-2xl p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-white heading-font">Meeting Cost</h2>
          <button
            onClick={handleCopy}
            className="flex items-center gap-2 text-sm px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all"
          >
            {copied ? <span className="text-emerald-400">Copied</span> : <>Copy Results</>}
          </button>
        </div>

        {/* Primary Cost Display */}
        <div className="bg-gradient-to-br from-teal-500/10 to-blue-500/10 border border-teal-500/20 rounded-2xl p-6 sm:p-8 text-center">
          <p className="text-sm text-teal-400/70 uppercase tracking-wide mb-2">This meeting costs</p>
          <p className="text-4xl sm:text-5xl lg:text-6xl font-bold gradient-text mb-2">
            {formatCurrency(analysis.meetingCost)}
          </p>
          <p className="text-slate-400 text-sm">
            {duration} minutes with {attendees} {attendees === 1 ? 'person' : 'people'}
            {includeOverheads ? ' (incl. 30% overheads)' : ''}
          </p>
        </div>

        {/* Secondary Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <div className="bg-white/5 rounded-xl p-4 text-center">
            <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">Per Minute</p>
            <p className="text-lg font-bold text-white">{formatCurrencyPrecise(analysis.costPerMinute)}</p>
          </div>
          <div className="bg-white/5 rounded-xl p-4 text-center">
            <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">Per Attendee</p>
            <p className="text-lg font-bold text-white">{formatCurrency(analysis.costPerAttendee)}</p>
          </div>
          <div className="bg-white/5 rounded-xl p-4 text-center col-span-2 sm:col-span-1">
            <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">Per Second</p>
            <p className="text-lg font-bold text-white">{formatCurrencyPrecise(analysis.costPerSecond)}</p>
          </div>
        </div>
      </div>

      {/* Live Meeting Timer */}
      <div className="glass rounded-2xl p-6 sm:p-8 space-y-4">
        <h2 className="text-xl font-bold text-white heading-font">Live Meeting Timer</h2>
        <p className="text-sm text-slate-400">
          Start the timer during your next meeting to watch the cost accumulate in real time.
        </p>

        <div className="bg-white/5 rounded-2xl p-6 text-center space-y-4">
          <div className="space-y-1">
            <p className="text-sm text-slate-500">Time Elapsed</p>
            <p className="text-3xl sm:text-4xl font-mono font-bold text-white tracking-wider">
              {formatTimerTime(timerSeconds)}
            </p>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-slate-500">Cost So Far</p>
            <p className={`text-3xl sm:text-4xl font-bold transition-colors ${timerRunning ? 'text-rose-400 animate-pulse' : 'gradient-text'}`}>
              {formatCurrencyPrecise(timerCost)}
            </p>
          </div>
          <div className="flex items-center justify-center gap-3">
            <button
              onClick={handleStartTimer}
              className={`px-6 py-2.5 rounded-xl font-medium text-sm transition-all ${
                timerRunning
                  ? 'bg-rose-500/20 border border-rose-500/30 text-rose-400 hover:bg-rose-500/30'
                  : 'bg-gradient-to-r from-teal-500 to-blue-500 text-white hover:opacity-90'
              }`}
            >
              {timerRunning ? 'Stop Timer' : 'Start Meeting Timer'}
            </button>
            {timerSeconds > 0 && !timerRunning && (
              <button
                onClick={handleResetTimer}
                className="px-4 py-2.5 rounded-xl font-medium text-sm bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-all"
              >
                Reset
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Annual Impact (only for recurring) */}
      {analysis.isRecurring && (
        <div className="glass rounded-2xl p-6 sm:p-8 space-y-6">
          <h2 className="text-xl font-bold text-white heading-font">Annual Impact</h2>

          <div className="grid sm:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-rose-500/10 to-amber-500/10 border border-rose-500/20 rounded-xl p-5 text-center">
              <p className="text-xs text-rose-400/70 uppercase tracking-wide mb-1">Annual Cost</p>
              <p className="text-2xl sm:text-3xl font-bold text-rose-400">
                {formatCurrency(analysis.annualCost)}
              </p>
              <p className="text-xs text-slate-500 mt-1">{analysis.meetingsPerYear} meetings/year</p>
            </div>
            <div className="bg-white/5 rounded-xl p-5 text-center">
              <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">Total Hours</p>
              <p className="text-2xl font-bold text-white">{analysis.annualHours.toFixed(0)} hrs</p>
              <p className="text-xs text-slate-500 mt-1">spent in this meeting</p>
            </div>
            <div className="bg-white/5 rounded-xl p-5 text-center">
              <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">Working Days</p>
              <p className="text-2xl font-bold text-amber-400">{analysis.annualDays.toFixed(1)} days</p>
              <p className="text-xs text-slate-500 mt-1">of full 8-hour days</p>
            </div>
          </div>

          {/* Fun Comparisons */}
          <div className="bg-white/5 rounded-xl p-5">
            <p className="text-sm font-medium text-white mb-3">What else could that buy?</p>
            <div className="grid sm:grid-cols-3 gap-4 text-sm">
              <div className="flex items-start gap-3">
                <span className="text-teal-400 text-lg">$</span>
                <div>
                  <p className="text-white font-medium">{Math.floor(analysis.invoiceFlowMonths)} months</p>
                  <p className="text-slate-500 text-xs">of InvoiceFlow Pro</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-amber-400 text-lg">*</span>
                <div>
                  <p className="text-white font-medium">{Math.floor(analysis.clientLunches)} lunches</p>
                  <p className="text-slate-500 text-xs">with clients in Melbourne</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-400 text-lg">~</span>
                <div>
                  <p className="text-white font-medium">{analysis.productiveHours.toFixed(0)} hours</p>
                  <p className="text-slate-500 text-xs">of productive, billable work</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Optimization Tips */}
      {analysis.isRecurring && (
        <div className="glass rounded-2xl p-6 sm:p-8 space-y-4">
          <h2 className="text-xl font-bold text-white heading-font">Optimization Tips</h2>
          <p className="text-sm text-slate-400">
            Small changes to recurring meetings add up to big annual savings.
          </p>

          <div className="space-y-3">
            <div className="bg-gradient-to-r from-teal-500/5 to-blue-500/5 border border-teal-500/15 rounded-xl p-4 flex items-center justify-between">
              <div>
                <p className="text-white font-medium text-sm">Cut this meeting by 15 minutes</p>
                <p className="text-xs text-slate-500">Shorter meetings force focus and better agendas</p>
              </div>
              <div className="text-right">
                <p className="text-teal-400 font-bold text-lg">{formatCurrency(analysis.saveCut15Min)}</p>
                <p className="text-xs text-slate-500">saved/year</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-teal-500/5 to-blue-500/5 border border-teal-500/15 rounded-xl p-4 flex items-center justify-between">
              <div>
                <p className="text-white font-medium text-sm">Remove 1 attendee</p>
                <p className="text-xs text-slate-500">Does everyone really need to be there?</p>
              </div>
              <div className="text-right">
                <p className="text-teal-400 font-bold text-lg">{formatCurrency(analysis.saveRemove1Attendee)}</p>
                <p className="text-xs text-slate-500">saved/year</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-teal-500/5 to-blue-500/5 border border-teal-500/15 rounded-xl p-4 flex items-center justify-between">
              <div>
                <p className="text-white font-medium text-sm">Make it async</p>
                <p className="text-xs text-slate-500">Replace with a Loom video, Slack thread, or shared doc</p>
              </div>
              <div className="text-right">
                <p className="text-teal-400 font-bold text-lg">{formatCurrency(analysis.saveAsync)}</p>
                <p className="text-xs text-slate-500">saved/year</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
