'use client';

import { useState, useCallback, useMemo } from 'react';

// --- Types ---
interface DayEntry {
  startTime: string;
  endTime: string;
  breakMinutes: number;
}

type DayOfWeek = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';

const DAYS: DayOfWeek[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const DAY_ABBREVS: Record<DayOfWeek, string> = {
  Monday: 'Mon',
  Tuesday: 'Tue',
  Wednesday: 'Wed',
  Thursday: 'Thu',
  Friday: 'Fri',
  Saturday: 'Sat',
  Sunday: 'Sun',
};

const EMPTY_ENTRY: DayEntry = { startTime: '', endTime: '', breakMinutes: 30 };

// --- Helpers ---
function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}

function getMonday(date: Date): Date {
  const d = new Date(date);
  const day = d.getDay();
  const diff = d.getDate() - day + (day === 0 ? -6 : 1);
  d.setDate(diff);
  d.setHours(0, 0, 0, 0);
  return d;
}

function formatDateShort(date: Date): string {
  return date.toLocaleDateString('en-AU', { day: 'numeric', month: 'short' });
}

function formatWeekLabel(monday: Date): string {
  const sunday = new Date(monday);
  sunday.setDate(monday.getDate() + 6);
  return `${formatDateShort(monday)} - ${formatDateShort(sunday)}`;
}

function toDateInputValue(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function parseTimeToMinutes(time: string): number | null {
  if (!time) return null;
  const [h, m] = time.split(':').map(Number);
  if (isNaN(h) || isNaN(m)) return null;
  return h * 60 + m;
}

function calculateDayHours(entry: DayEntry): number {
  const start = parseTimeToMinutes(entry.startTime);
  const end = parseTimeToMinutes(entry.endTime);
  if (start === null || end === null) return 0;
  const worked = end - start - entry.breakMinutes;
  return Math.max(0, worked / 60);
}

// --- Component ---
export default function TimesheetCalculator() {
  const [weekStart, setWeekStart] = useState<Date>(() => getMonday(new Date()));
  const [hourlyRate, setHourlyRate] = useState<number>(100);
  const [standardHoursPerDay, setStandardHoursPerDay] = useState<number>(8);
  const [overtimeEnabled, setOvertimeEnabled] = useState<boolean>(false);
  const [overtimeMultiplier, setOvertimeMultiplier] = useState<number>(1.5);
  const [entries, setEntries] = useState<Record<DayOfWeek, DayEntry>>(() => {
    const initial: Partial<Record<DayOfWeek, DayEntry>> = {};
    DAYS.forEach((day) => {
      initial[day] = { ...EMPTY_ENTRY };
    });
    return initial as Record<DayOfWeek, DayEntry>;
  });
  const [copied, setCopied] = useState(false);

  // --- Week navigation ---
  const shiftWeek = useCallback((delta: number) => {
    setWeekStart((prev) => {
      const next = new Date(prev);
      next.setDate(prev.getDate() + delta * 7);
      return next;
    });
  }, []);

  const handleWeekInput = useCallback((value: string) => {
    if (!value) return;
    const date = new Date(value + 'T00:00:00');
    setWeekStart(getMonday(date));
  }, []);

  // --- Entry updates ---
  const updateEntry = useCallback((day: DayOfWeek, field: keyof DayEntry, value: string | number) => {
    setEntries((prev) => ({
      ...prev,
      [day]: { ...prev[day], [field]: value },
    }));
  }, []);

  const quickFill = useCallback(
    (day: DayOfWeek, type: 'full' | 'half' | 'clear') => {
      if (type === 'clear') {
        setEntries((prev) => ({ ...prev, [day]: { ...EMPTY_ENTRY } }));
        return;
      }
      const endHour = type === 'full' ? (standardHoursPerDay === 7.5 ? 16 : 17) : (standardHoursPerDay === 7.5 ? 12 : 13);
      const breakMins = type === 'full' ? 30 : 0;
      setEntries((prev) => ({
        ...prev,
        [day]: {
          startTime: '09:00',
          endTime: `${String(endHour).padStart(2, '0')}:${type === 'full' && standardHoursPerDay === 7.5 ? '30' : '00'}`,
          breakMinutes: breakMins,
        },
      }));
    },
    [standardHoursPerDay]
  );

  const applyToAllWeekdays = useCallback(() => {
    setEntries((prev) => {
      const mondayEntry = prev.Monday;
      const updated = { ...prev };
      const weekdays: DayOfWeek[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
      weekdays.forEach((day) => {
        updated[day] = { ...mondayEntry };
      });
      return updated;
    });
  }, []);

  // --- Calculations ---
  const dayHours = useMemo(() => {
    const result: Record<DayOfWeek, number> = {} as Record<DayOfWeek, number>;
    DAYS.forEach((day) => {
      result[day] = calculateDayHours(entries[day]);
    });
    return result;
  }, [entries]);

  const summary = useMemo(() => {
    let totalHours = 0;
    let standardHours = 0;
    let overtimeHours = 0;
    let daysWorked = 0;

    DAYS.forEach((day) => {
      const hours = dayHours[day];
      if (hours > 0) {
        daysWorked++;
        totalHours += hours;
        if (overtimeEnabled) {
          const std = Math.min(hours, standardHoursPerDay);
          const ot = Math.max(0, hours - standardHoursPerDay);
          standardHours += std;
          overtimeHours += ot;
        } else {
          standardHours += hours;
        }
      }
    });

    const standardPay = standardHours * hourlyRate;
    const overtimePay = overtimeHours * hourlyRate * overtimeMultiplier;
    const grossPay = standardPay + overtimePay;
    const effectiveRate = totalHours > 0 ? grossPay / totalHours : 0;
    const dailyAverage = daysWorked > 0 ? totalHours / daysWorked : 0;

    // Monthly projection (week * 4.33)
    const monthlyHours = totalHours * 4.33;
    const monthlyPay = grossPay * 4.33;
    const annualPay = monthlyPay * 12;

    return {
      totalHours,
      standardHours,
      overtimeHours,
      grossPay,
      standardPay,
      overtimePay,
      effectiveRate,
      dailyAverage,
      daysWorked,
      monthlyHours,
      monthlyPay,
      annualPay,
    };
  }, [dayHours, hourlyRate, standardHoursPerDay, overtimeEnabled, overtimeMultiplier]);

  // --- Max hours for bar chart scale ---
  const maxDayHours = useMemo(() => {
    return Math.max(standardHoursPerDay, ...Object.values(dayHours), 1);
  }, [dayHours, standardHoursPerDay]);

  // --- Copy to clipboard ---
  const copyToClipboard = useCallback(() => {
    const lines: string[] = [];
    lines.push(`TIMESHEET — Week of ${formatWeekLabel(weekStart)}`);
    lines.push(`Hourly Rate: ${formatCurrency(hourlyRate)}`);
    if (overtimeEnabled) {
      lines.push(`Overtime Rate: ${overtimeMultiplier}x (${formatCurrency(hourlyRate * overtimeMultiplier)}/hr)`);
      lines.push(`Standard Hours/Day: ${standardHoursPerDay}h`);
    }
    lines.push('');
    lines.push('Day         | Start | End   | Break | Hours');
    lines.push('------------|-------|-------|-------|------');
    DAYS.forEach((day) => {
      const e = entries[day];
      const h = dayHours[day];
      if (h > 0 || e.startTime || e.endTime) {
        const dayLabel = day.padEnd(12);
        const start = (e.startTime || '-').padEnd(5);
        const end = (e.endTime || '-').padEnd(5);
        const brk = `${e.breakMinutes}m`.padEnd(5);
        lines.push(`${dayLabel}| ${start} | ${end} | ${brk} | ${h.toFixed(2)}`);
      }
    });
    lines.push('');
    lines.push(`Total Hours: ${summary.totalHours.toFixed(2)}`);
    if (overtimeEnabled) {
      lines.push(`Standard Hours: ${summary.standardHours.toFixed(2)}`);
      lines.push(`Overtime Hours: ${summary.overtimeHours.toFixed(2)}`);
    }
    lines.push(`Gross Pay: ${formatCurrency(summary.grossPay)}`);
    lines.push(`Effective Rate: ${formatCurrency(summary.effectiveRate)}/hr`);
    lines.push('');
    lines.push('Generated by InvoiceFlow — https://www.invoiceflow.au/tools/timesheet-calculator');

    navigator.clipboard.writeText(lines.join('\n')).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [weekStart, hourlyRate, overtimeEnabled, overtimeMultiplier, standardHoursPerDay, entries, dayHours, summary]);

  // --- Date for each day label ---
  const dayDates = useMemo(() => {
    const result: Record<DayOfWeek, string> = {} as Record<DayOfWeek, string>;
    DAYS.forEach((day, i) => {
      const d = new Date(weekStart);
      d.setDate(weekStart.getDate() + i);
      result[day] = formatDateShort(d);
    });
    return result;
  }, [weekStart]);

  return (
    <div className="space-y-6">
      {/* Settings Row */}
      <div className="glass rounded-2xl p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Week Selector */}
          <div>
            <label className="block text-sm text-white/50 mb-1.5">Week Starting</label>
            <div className="flex items-center gap-2">
              <button
                onClick={() => shiftWeek(-1)}
                className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-white/70"
                aria-label="Previous week"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <input
                type="date"
                value={toDateInputValue(weekStart)}
                onChange={(e) => handleWeekInput(e.target.value)}
                className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:border-teal-500/50 [color-scheme:dark]"
              />
              <button
                onClick={() => shiftWeek(1)}
                className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-white/70"
                aria-label="Next week"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            <p className="text-xs text-white/40 mt-1">{formatWeekLabel(weekStart)}</p>
          </div>

          {/* Hourly Rate */}
          <div>
            <label className="block text-sm text-white/50 mb-1.5">Hourly Rate (AUD)</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40 text-sm">$</span>
              <input
                type="number"
                min={0}
                step={5}
                value={hourlyRate}
                onChange={(e) => setHourlyRate(Math.max(0, parseFloat(e.target.value) || 0))}
                className="w-full bg-white/5 border border-white/10 rounded-lg pl-7 pr-3 py-2.5 text-white text-sm focus:outline-none focus:border-teal-500/50"
              />
            </div>
          </div>

          {/* Standard Hours Per Day */}
          <div>
            <label className="block text-sm text-white/50 mb-1.5">Standard Hours/Day</label>
            <div className="flex rounded-lg overflow-hidden border border-white/10">
              {[7.5, 8].map((val) => (
                <button
                  key={val}
                  onClick={() => setStandardHoursPerDay(val)}
                  className={`flex-1 py-2.5 text-sm font-medium transition-colors ${
                    standardHoursPerDay === val
                      ? 'bg-gradient-to-r from-teal-500/30 to-blue-500/30 text-white border-teal-500/30'
                      : 'bg-white/5 text-white/50 hover:bg-white/10'
                  }`}
                >
                  {val}h
                </button>
              ))}
            </div>
          </div>

          {/* Overtime Toggle */}
          <div>
            <label className="block text-sm text-white/50 mb-1.5">Overtime</label>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setOvertimeEnabled(!overtimeEnabled)}
                className={`relative w-11 h-6 rounded-full transition-colors ${
                  overtimeEnabled ? 'bg-teal-500' : 'bg-white/20'
                }`}
              >
                <span
                  className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform shadow ${
                    overtimeEnabled ? 'translate-x-5' : ''
                  }`}
                />
              </button>
              {overtimeEnabled && (
                <div className="flex items-center gap-1.5">
                  <input
                    type="number"
                    min={1}
                    max={5}
                    step={0.25}
                    value={overtimeMultiplier}
                    onChange={(e) => setOvertimeMultiplier(Math.max(1, parseFloat(e.target.value) || 1.5))}
                    className="w-16 bg-white/5 border border-white/10 rounded-lg px-2 py-2 text-white text-sm text-center focus:outline-none focus:border-teal-500/50"
                  />
                  <span className="text-xs text-white/40">x rate</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Daily Entries */}
      <div className="glass rounded-2xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold heading-font">Daily Time Entries</h2>
          <button
            onClick={applyToAllWeekdays}
            className="text-xs px-3 py-1.5 rounded-lg bg-teal-500/10 border border-teal-500/20 text-teal-400 hover:bg-teal-500/20 transition-colors"
          >
            Apply Monday to All Weekdays
          </button>
        </div>

        <div className="space-y-3">
          {DAYS.map((day) => {
            const hours = dayHours[day];
            const standardBarWidth = overtimeEnabled
              ? Math.min(hours, standardHoursPerDay) / maxDayHours
              : hours / maxDayHours;
            const overtimeBarWidth = overtimeEnabled
              ? Math.max(0, hours - standardHoursPerDay) / maxDayHours
              : 0;
            const isWeekend = day === 'Saturday' || day === 'Sunday';

            return (
              <div
                key={day}
                className={`rounded-xl p-4 border transition-colors ${
                  isWeekend
                    ? 'bg-white/[0.02] border-white/5'
                    : 'bg-white/[0.03] border-white/10'
                }`}
              >
                {/* Day header row */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold text-white w-10">{DAY_ABBREVS[day]}</span>
                    <span className="text-xs text-white/40">{dayDates[day]}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => quickFill(day, 'full')}
                      className="text-[11px] px-2 py-1 rounded bg-white/5 border border-white/10 text-white/50 hover:text-white hover:bg-white/10 transition-colors"
                    >
                      Full Day
                    </button>
                    <button
                      onClick={() => quickFill(day, 'half')}
                      className="text-[11px] px-2 py-1 rounded bg-white/5 border border-white/10 text-white/50 hover:text-white hover:bg-white/10 transition-colors"
                    >
                      Half Day
                    </button>
                    <button
                      onClick={() => quickFill(day, 'clear')}
                      className="text-[11px] px-2 py-1 rounded bg-white/5 border border-white/10 text-white/40 hover:text-red-400 hover:border-red-400/30 transition-colors"
                    >
                      Clear
                    </button>
                  </div>
                </div>

                {/* Inputs row */}
                <div className="flex flex-wrap items-center gap-3">
                  <div className="flex-1 min-w-[100px]">
                    <label className="block text-[11px] text-white/30 mb-1">Start</label>
                    <input
                      type="time"
                      value={entries[day].startTime}
                      onChange={(e) => updateEntry(day, 'startTime', e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:border-teal-500/50 [color-scheme:dark]"
                    />
                  </div>
                  <div className="flex-1 min-w-[100px]">
                    <label className="block text-[11px] text-white/30 mb-1">End</label>
                    <input
                      type="time"
                      value={entries[day].endTime}
                      onChange={(e) => updateEntry(day, 'endTime', e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:border-teal-500/50 [color-scheme:dark]"
                    />
                  </div>
                  <div className="w-24">
                    <label className="block text-[11px] text-white/30 mb-1">Break (min)</label>
                    <input
                      type="number"
                      min={0}
                      step={5}
                      value={entries[day].breakMinutes}
                      onChange={(e) => updateEntry(day, 'breakMinutes', Math.max(0, parseInt(e.target.value) || 0))}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:border-teal-500/50"
                    />
                  </div>

                  {/* Hours display + bar */}
                  <div className="w-32">
                    <label className="block text-[11px] text-white/30 mb-1">Hours</label>
                    <div className="flex items-center gap-2">
                      <span className={`text-sm font-semibold min-w-[3rem] ${hours > 0 ? 'text-white' : 'text-white/20'}`}>
                        {hours > 0 ? hours.toFixed(2) : '0.00'}h
                      </span>
                    </div>
                  </div>
                </div>

                {/* Visual bar */}
                {hours > 0 && (
                  <div className="mt-3 h-2 rounded-full bg-white/5 overflow-hidden flex">
                    <div
                      className="h-full bg-gradient-to-r from-teal-500 to-teal-400 rounded-l-full transition-all duration-300"
                      style={{ width: `${standardBarWidth * 100}%` }}
                    />
                    {overtimeBarWidth > 0 && (
                      <div
                        className="h-full bg-gradient-to-r from-amber-500 to-amber-400 rounded-r-full transition-all duration-300"
                        style={{ width: `${overtimeBarWidth * 100}%` }}
                      />
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        <SummaryCard label="Total Hours" value={`${summary.totalHours.toFixed(1)}h`} accent="teal" />
        <SummaryCard label="Standard Hours" value={`${summary.standardHours.toFixed(1)}h`} accent="blue" />
        <SummaryCard label="Overtime Hours" value={`${summary.overtimeHours.toFixed(1)}h`} accent={summary.overtimeHours > 0 ? 'amber' : 'default'} />
        <SummaryCard label="Gross Pay" value={formatCurrency(summary.grossPay)} accent="teal" large />
        <SummaryCard label="Effective Rate" value={`${formatCurrency(summary.effectiveRate)}/hr`} accent="blue" />
        <SummaryCard label="Daily Average" value={`${summary.dailyAverage.toFixed(1)}h`} accent="default" />
      </div>

      {/* Weekly Bar Chart */}
      <div className="glass rounded-2xl p-6">
        <h2 className="text-lg font-semibold heading-font mb-4">Weekly Overview</h2>
        <div className="flex items-end gap-2 h-40">
          {DAYS.map((day) => {
            const hours = dayHours[day];
            const standardPortion = overtimeEnabled ? Math.min(hours, standardHoursPerDay) : hours;
            const overtimePortion = overtimeEnabled ? Math.max(0, hours - standardHoursPerDay) : 0;
            const totalBarHeight = maxDayHours > 0 ? (hours / maxDayHours) * 100 : 0;
            const standardHeight = maxDayHours > 0 ? (standardPortion / maxDayHours) * 100 : 0;
            const overtimeHeight = maxDayHours > 0 ? (overtimePortion / maxDayHours) * 100 : 0;

            return (
              <div key={day} className="flex-1 flex flex-col items-center gap-1">
                <span className="text-[11px] text-white/50 mb-1">
                  {hours > 0 ? `${hours.toFixed(1)}h` : ''}
                </span>
                <div className="w-full flex flex-col justify-end h-28 relative">
                  {hours > 0 ? (
                    <div className="flex flex-col justify-end h-full">
                      {overtimeHeight > 0 && (
                        <div
                          className="w-full bg-gradient-to-t from-amber-500 to-amber-400 rounded-t-md transition-all duration-500"
                          style={{ height: `${overtimeHeight}%` }}
                        />
                      )}
                      <div
                        className={`w-full bg-gradient-to-t from-teal-600 to-teal-400 transition-all duration-500 ${
                          overtimeHeight > 0 ? '' : 'rounded-t-md'
                        } rounded-b-md`}
                        style={{ height: `${standardHeight}%` }}
                      />
                    </div>
                  ) : (
                    <div className="w-full h-1 bg-white/5 rounded-full mt-auto" />
                  )}
                </div>
                <span className="text-xs text-white/40 mt-1">{DAY_ABBREVS[day]}</span>
              </div>
            );
          })}
        </div>
        {overtimeEnabled && (
          <div className="flex items-center gap-4 mt-4 text-xs text-white/40">
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-sm bg-gradient-to-r from-teal-600 to-teal-400" />
              Standard
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-sm bg-gradient-to-r from-amber-500 to-amber-400" />
              Overtime
            </div>
          </div>
        )}
      </div>

      {/* Monthly Projection */}
      <div className="glass rounded-2xl p-6">
        <h2 className="text-lg font-semibold heading-font mb-4">Monthly &amp; Annual Projection</h2>
        <p className="text-xs text-white/40 mb-4">Based on this week repeated (x 4.33 weeks/month)</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="rounded-xl bg-white/[0.03] border border-white/10 p-4 text-center">
            <p className="text-sm text-white/50 mb-1">Monthly Hours</p>
            <p className="text-2xl font-bold heading-font text-white">{summary.monthlyHours.toFixed(0)}h</p>
          </div>
          <div className="rounded-xl bg-gradient-to-br from-teal-500/10 to-blue-500/10 border border-teal-500/20 p-4 text-center">
            <p className="text-sm text-teal-400/70 mb-1">Monthly Pay</p>
            <p className="text-2xl font-bold heading-font text-white">{formatCurrency(summary.monthlyPay)}</p>
          </div>
          <div className="rounded-xl bg-white/[0.03] border border-white/10 p-4 text-center">
            <p className="text-sm text-white/50 mb-1">Annual Projection</p>
            <p className="text-2xl font-bold heading-font text-white">{formatCurrency(summary.annualPay)}</p>
          </div>
        </div>
      </div>

      {/* Copy Button */}
      <div className="flex justify-center">
        <button
          onClick={copyToClipboard}
          className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
            copied
              ? 'bg-teal-500/20 border border-teal-500/30 text-teal-400'
              : 'bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white'
          }`}
        >
          {copied ? (
            <>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Copied!
            </>
          ) : (
            <>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                />
              </svg>
              Copy Timesheet to Clipboard
            </>
          )}
        </button>
      </div>
    </div>
  );
}

// --- Summary Card Sub-component ---
function SummaryCard({
  label,
  value,
  accent = 'default',
  large = false,
}: {
  label: string;
  value: string;
  accent?: 'teal' | 'blue' | 'amber' | 'default';
  large?: boolean;
}) {
  const borderColor = {
    teal: 'border-teal-500/20',
    blue: 'border-blue-500/20',
    amber: 'border-amber-500/20',
    default: 'border-white/10',
  }[accent];

  const bgColor = {
    teal: 'bg-teal-500/5',
    blue: 'bg-blue-500/5',
    amber: 'bg-amber-500/5',
    default: 'bg-white/[0.03]',
  }[accent];

  const labelColor = {
    teal: 'text-teal-400/70',
    blue: 'text-blue-400/70',
    amber: 'text-amber-400/70',
    default: 'text-white/50',
  }[accent];

  return (
    <div className={`rounded-xl border ${borderColor} ${bgColor} p-4 text-center`}>
      <p className={`text-xs ${labelColor} mb-1`}>{label}</p>
      <p className={`font-bold heading-font text-white ${large ? 'text-xl' : 'text-lg'}`}>{value}</p>
    </div>
  );
}
