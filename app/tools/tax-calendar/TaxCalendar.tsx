'use client';

import { useState, useMemo } from 'react';

// ── Types ──────────────────────────────────────────────────────────────────────

type BASFrequency = 'quarterly' | 'monthly';

interface Deadline {
  date: Date;
  label: string;
  category: 'bas' | 'payg' | 'tax' | 'super' | 'stp' | 'fbt';
  description: string;
}

type FinancialYear = '2025-26' | '2026-27';

// ── Helpers ────────────────────────────────────────────────────────────────────

const MONTHS = [
  'July', 'August', 'September', 'October', 'November', 'December',
  'January', 'February', 'March', 'April', 'May', 'June',
];

const CATEGORY_LABELS: Record<Deadline['category'], string> = {
  bas: 'BAS',
  payg: 'PAYG',
  tax: 'Tax Return',
  super: 'Super',
  stp: 'STP',
  fbt: 'FBT',
};

const CATEGORY_COLORS: Record<Deadline['category'], string> = {
  bas: 'bg-teal-500/20 text-teal-400 border-teal-500/30',
  payg: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  tax: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
  super: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
  stp: 'bg-pink-500/20 text-pink-400 border-pink-500/30',
  fbt: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
};

function formatDate(date: Date): string {
  return date.toLocaleDateString('en-AU', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

function formatDateShort(date: Date): string {
  return date.toLocaleDateString('en-AU', {
    day: 'numeric',
    month: 'short',
  });
}

function daysBetween(a: Date, b: Date): number {
  const msPerDay = 1000 * 60 * 60 * 24;
  const aStart = new Date(a.getFullYear(), a.getMonth(), a.getDate());
  const bStart = new Date(b.getFullYear(), b.getMonth(), b.getDate());
  return Math.round((bStart.getTime() - aStart.getTime()) / msPerDay);
}

function getDeadlineStatus(date: Date, today: Date): 'overdue' | 'soon' | 'upcoming' | 'future' {
  const days = daysBetween(today, date);
  if (days < 0) return 'overdue';
  if (days <= 30) return 'soon';
  if (days <= 90) return 'upcoming';
  return 'future';
}

function statusColor(status: ReturnType<typeof getDeadlineStatus>): string {
  switch (status) {
    case 'overdue': return 'text-rose-400';
    case 'soon': return 'text-amber-400';
    case 'upcoming': return 'text-teal-400';
    case 'future': return 'text-slate-500';
  }
}

function statusDot(status: ReturnType<typeof getDeadlineStatus>): string {
  switch (status) {
    case 'overdue': return 'bg-rose-400';
    case 'soon': return 'bg-amber-400';
    case 'upcoming': return 'bg-teal-400';
    case 'future': return 'bg-slate-600';
  }
}

// ── Deadline Generator ─────────────────────────────────────────────────────────

function generateDeadlines(
  fy: FinancialYear,
  gstRegistered: boolean,
  basFrequency: BASFrequency,
  paygInstalments: boolean,
  isEmployer: boolean,
): Deadline[] {
  const deadlines: Deadline[] = [];
  // FY2025-26 starts July 2025, FY2026-27 starts July 2026
  const startYear = fy === '2025-26' ? 2025 : 2026;
  const endYear = startYear + 1;

  // ── BAS Quarterly ────────────────────────────────────────────────────────
  if (gstRegistered && basFrequency === 'quarterly') {
    deadlines.push({
      date: new Date(startYear, 9, 28), // 28 October
      label: 'BAS Q1 (Jul-Sep)',
      category: 'bas',
      description: `Lodge and pay quarterly BAS for July-September ${startYear}. Report GST collected, GST paid, and net GST position.`,
    });
    deadlines.push({
      date: new Date(endYear, 1, 28), // 28 February
      label: 'BAS Q2 (Oct-Dec)',
      category: 'bas',
      description: `Lodge and pay quarterly BAS for October-December ${startYear}. Report GST collected, GST paid, and net GST position.`,
    });
    deadlines.push({
      date: new Date(endYear, 3, 28), // 28 April
      label: 'BAS Q3 (Jan-Mar)',
      category: 'bas',
      description: `Lodge and pay quarterly BAS for January-March ${endYear}. Report GST collected, GST paid, and net GST position.`,
    });
    deadlines.push({
      date: new Date(endYear, 7, 28), // 28 August
      label: 'BAS Q4 (Apr-Jun)',
      category: 'bas',
      description: `Lodge and pay quarterly BAS for April-June ${endYear}. Report GST collected, GST paid, and net GST position.`,
    });
  }

  // ── BAS Monthly ──────────────────────────────────────────────────────────
  if (gstRegistered && basFrequency === 'monthly') {
    // July through June: due 21st of following month
    // Exception: December BAS due 21 February (not 21 January)
    const monthPairs: { period: string; dueMonth: number; dueYear: number }[] = [
      { period: `Jul ${startYear}`, dueMonth: 7, dueYear: startYear },      // Aug 21
      { period: `Aug ${startYear}`, dueMonth: 8, dueYear: startYear },      // Sep 21
      { period: `Sep ${startYear}`, dueMonth: 9, dueYear: startYear },      // Oct 21
      { period: `Oct ${startYear}`, dueMonth: 10, dueYear: startYear },     // Nov 21
      { period: `Nov ${startYear}`, dueMonth: 11, dueYear: startYear },     // Dec 21
      { period: `Dec ${startYear}`, dueMonth: 1, dueYear: endYear },        // Feb 21 (exception)
      { period: `Jan ${endYear}`, dueMonth: 1, dueYear: endYear },          // Feb 21
      { period: `Feb ${endYear}`, dueMonth: 2, dueYear: endYear },          // Mar 21
      { period: `Mar ${endYear}`, dueMonth: 3, dueYear: endYear },          // Apr 21
      { period: `Apr ${endYear}`, dueMonth: 4, dueYear: endYear },          // May 21
      { period: `May ${endYear}`, dueMonth: 5, dueYear: endYear },          // Jun 21
      { period: `Jun ${endYear}`, dueMonth: 6, dueYear: endYear },          // Jul 21
    ];

    monthPairs.forEach((mp) => {
      // December BAS is due 21 February, not 21 January
      // January BAS is also due 21 February — but to simplify, the ATO rule is:
      // Dec BAS due date moves to 21 Feb. We handle this with the dueMonth mapping above.
      let dueDate: Date;
      if (mp.period === `Dec ${startYear}`) {
        dueDate = new Date(endYear, 1, 21); // 21 February
      } else if (mp.period === `Jan ${endYear}`) {
        dueDate = new Date(endYear, 1, 21); // 21 February (same date — ATO combines Dec+Jan)
      } else {
        dueDate = new Date(mp.dueYear, mp.dueMonth, 21);
      }

      deadlines.push({
        date: dueDate,
        label: `Monthly BAS (${mp.period})`,
        category: 'bas',
        description: `Lodge and pay monthly BAS for ${mp.period}. Due by the 21st of the following month.`,
      });
    });
  }

  // ── PAYG Instalments ─────────────────────────────────────────────────────
  if (paygInstalments) {
    deadlines.push({
      date: new Date(startYear, 9, 28), // 28 October
      label: 'PAYG Instalment Q1',
      category: 'payg',
      description: `Pay PAYG income tax instalment for Q1 (July-September ${startYear}). Based on your instalment rate or amount from your latest assessment.`,
    });
    deadlines.push({
      date: new Date(endYear, 1, 28), // 28 February
      label: 'PAYG Instalment Q2',
      category: 'payg',
      description: `Pay PAYG income tax instalment for Q2 (October-December ${startYear}).`,
    });
    deadlines.push({
      date: new Date(endYear, 3, 28), // 28 April
      label: 'PAYG Instalment Q3',
      category: 'payg',
      description: `Pay PAYG income tax instalment for Q3 (January-March ${endYear}).`,
    });
    deadlines.push({
      date: new Date(endYear, 7, 28), // 28 August
      label: 'PAYG Instalment Q4',
      category: 'payg',
      description: `Pay PAYG income tax instalment for Q4 (April-June ${endYear}).`,
    });
  }

  // ── Income Tax Return ────────────────────────────────────────────────────
  deadlines.push({
    date: new Date(startYear, 9, 31), // 31 October
    label: 'Income Tax Return (Self-Lodge)',
    category: 'tax',
    description: `Lodge your individual income tax return for FY${fy} if self-lodging. If you use a tax agent, your extended due date is 15 May ${endYear}.`,
  });
  deadlines.push({
    date: new Date(endYear, 4, 15), // 15 May
    label: 'Income Tax Return (Tax Agent)',
    category: 'tax',
    description: `Extended due date for income tax return if lodging through a registered tax agent for FY${fy}.`,
  });

  // ── Super Guarantee (Employers Only) ─────────────────────────────────────
  if (isEmployer) {
    deadlines.push({
      date: new Date(startYear, 9, 28), // 28 October
      label: 'Super Guarantee Q1',
      category: 'super',
      description: `Pay superannuation guarantee contributions for Q1 (July-September ${startYear}). Rate: 12% of ordinary time earnings.`,
    });
    deadlines.push({
      date: new Date(endYear, 0, 28), // 28 January
      label: 'Super Guarantee Q2',
      category: 'super',
      description: `Pay superannuation guarantee contributions for Q2 (October-December ${startYear}).`,
    });
    deadlines.push({
      date: new Date(endYear, 3, 28), // 28 April
      label: 'Super Guarantee Q3',
      category: 'super',
      description: `Pay superannuation guarantee contributions for Q3 (January-March ${endYear}).`,
    });
    deadlines.push({
      date: new Date(endYear, 6, 28), // 28 July
      label: 'Super Guarantee Q4',
      category: 'super',
      description: `Pay superannuation guarantee contributions for Q4 (April-June ${endYear}).`,
    });

    // ── STP Finalisation ─────────────────────────────────────────────────────
    deadlines.push({
      date: new Date(endYear, 6, 14), // 14 July
      label: 'STP Finalisation',
      category: 'stp',
      description: `Finalise Single Touch Payroll data for FY${fy}. This makes payment summaries available to employees and the ATO.`,
    });
  }

  // ── FBT Return ───────────────────────────────────────────────────────────
  // FBT year runs April to March — 21 May deadline
  deadlines.push({
    date: new Date(endYear, 4, 21), // 21 May
    label: 'FBT Return',
    category: 'fbt',
    description: `Lodge Fringe Benefits Tax return for the FBT year ending 31 March ${endYear}, if applicable. Only required if you provide fringe benefits to employees or associates.`,
  });

  return deadlines.sort((a, b) => a.date.getTime() - b.date.getTime());
}

// ── Component ──────────────────────────────────────────────────────────────────

export default function TaxCalendar() {
  const [financialYear, setFinancialYear] = useState<FinancialYear>('2025-26');
  const [gstRegistered, setGstRegistered] = useState(true);
  const [basFrequency, setBasFrequency] = useState<BASFrequency>('quarterly');
  const [paygInstalments, setPaygInstalments] = useState(false);
  const [isEmployer, setIsEmployer] = useState(false);
  const [copied, setCopied] = useState(false);

  const today = useMemo(() => new Date(), []);

  const deadlines = useMemo(
    () => generateDeadlines(financialYear, gstRegistered, basFrequency, paygInstalments, isEmployer),
    [financialYear, gstRegistered, basFrequency, paygInstalments, isEmployer],
  );

  // Group deadlines by month (July=0 index through June=11 index)
  const startYear = financialYear === '2025-26' ? 2025 : 2026;
  const deadlinesByMonth = useMemo(() => {
    const grouped: Record<number, Deadline[]> = {};
    for (let i = 0; i < 12; i++) grouped[i] = [];

    deadlines.forEach((d) => {
      const monthNum = d.date.getMonth(); // 0-11
      const year = d.date.getFullYear();
      // Map to FY month index: July(6)=0, Aug(7)=1, ..., Dec(11)=5, Jan(0)=6, ..., Jun(5)=11
      let fyIndex: number;
      if (monthNum >= 6) {
        // July-December: must be in start year
        fyIndex = monthNum - 6;
      } else {
        // January-June: must be in end year
        fyIndex = monthNum + 6;
      }
      // Also handle deadlines that fall in the following FY year (e.g., August of endYear+1 for Q4 BAS)
      if (year === startYear + 1 && monthNum >= 6) {
        fyIndex = monthNum - 6; // July, August of endYear → map to July(0), August(1) but that's next FY
        // These deadlines (like Q4 BAS due 28 August of endYear) fall outside the 12-month grid
        // We'll add them to the last available month (June) as overflow
        fyIndex = 11;
      }
      if (grouped[fyIndex]) {
        grouped[fyIndex].push(d);
      }
    });

    return grouped;
  }, [deadlines, startYear]);

  // Upcoming deadlines (next 5 from today)
  const upcomingDeadlines = useMemo(() => {
    return deadlines
      .filter((d) => d.date >= today || daysBetween(today, d.date) === 0)
      .slice(0, 5);
  }, [deadlines, today]);

  // Key metrics
  const metrics = useMemo(() => {
    const total = deadlines.length;
    const completed = deadlines.filter((d) => d.date < today).length;
    const remaining = total - completed;
    const nextDeadline = deadlines.find((d) => d.date >= today);
    const nextDays = nextDeadline ? daysBetween(today, nextDeadline.date) : null;

    return { total, completed, remaining, nextDeadline, nextDays };
  }, [deadlines, today]);

  // Copy all deadlines
  const handleCopy = () => {
    const lines = [
      `ATO Tax Calendar — FY${financialYear} — InvoiceFlow`,
      '================================================',
      '',
      `GST Registered: ${gstRegistered ? 'Yes' : 'No'}`,
      ...(gstRegistered ? [`BAS Frequency: ${basFrequency}`] : []),
      `PAYG Instalments: ${paygInstalments ? 'Yes' : 'No'}`,
      `Employer: ${isEmployer ? 'Yes' : 'No'}`,
      '',
      '--- Deadlines ---',
      '',
      ...deadlines.map((d) => `${formatDate(d.date)}  |  ${d.label}  |  ${d.description}`),
      '',
      `Total obligations: ${metrics.total}`,
      `Completed: ${metrics.completed}  |  Remaining: ${metrics.remaining}`,
      '',
      'Generated at invoiceflow.au/tools/tax-calendar',
    ];
    navigator.clipboard.writeText(lines.join('\n')).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const toggleClass = (active: boolean) =>
    `relative w-12 h-6 rounded-full transition-colors ${active ? 'bg-teal-500' : 'bg-white/20'}`;
  const toggleDot = (active: boolean) =>
    `absolute top-0.5 w-5 h-5 rounded-full bg-white transition-transform ${active ? 'translate-x-6' : 'translate-x-0.5'}`;

  return (
    <div className="space-y-8">
      {/* ── Financial Year Selector ─────────────────────────────────────────── */}
      <div className="glass rounded-2xl p-6 sm:p-8 space-y-6">
        <h2 className="text-xl font-bold text-white heading-font">Financial Year</h2>
        <div className="flex gap-3">
          {(['2025-26', '2026-27'] as FinancialYear[]).map((fy) => (
            <button
              key={fy}
              onClick={() => setFinancialYear(fy)}
              className={`px-5 py-2.5 rounded-xl border text-sm font-medium transition-all ${
                financialYear === fy
                  ? 'bg-gradient-to-r from-teal-500 to-blue-500 border-transparent text-white'
                  : 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
              }`}
            >
              FY{fy}
            </button>
          ))}
        </div>
      </div>

      {/* ── Registration Status Toggles ─────────────────────────────────────── */}
      <div className="glass rounded-2xl p-6 sm:p-8 space-y-5">
        <h2 className="text-xl font-bold text-white heading-font">Your Tax Obligations</h2>
        <p className="text-sm text-slate-400">
          Toggle on the obligations that apply to you. The calendar will update automatically.
        </p>

        {/* GST */}
        <div className="flex items-center justify-between bg-white/5 rounded-xl px-4 py-3">
          <div>
            <p className="text-sm text-white font-medium">Registered for GST?</p>
            <p className="text-xs text-slate-500">Required if turnover exceeds $75,000/year</p>
          </div>
          <button onClick={() => setGstRegistered(!gstRegistered)} className={toggleClass(gstRegistered)}>
            <div className={toggleDot(gstRegistered)} />
          </button>
        </div>

        {/* BAS Frequency (only if GST registered) */}
        {gstRegistered && (
          <div className="flex items-center justify-between bg-white/5 rounded-xl px-4 py-3">
            <div>
              <p className="text-sm text-white font-medium">BAS Lodgement Frequency</p>
              <p className="text-xs text-slate-500">Monthly required if turnover exceeds $20M</p>
            </div>
            <div className="flex gap-2">
              {(['quarterly', 'monthly'] as BASFrequency[]).map((freq) => (
                <button
                  key={freq}
                  onClick={() => setBasFrequency(freq)}
                  className={`text-xs px-3 py-1.5 rounded-lg border transition-all capitalize ${
                    basFrequency === freq
                      ? 'bg-gradient-to-r from-teal-500 to-blue-500 border-transparent text-white'
                      : 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {freq}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* PAYG Instalments */}
        <div className="flex items-center justify-between bg-white/5 rounded-xl px-4 py-3">
          <div>
            <p className="text-sm text-white font-medium">PAYG Instalments?</p>
            <p className="text-xs text-slate-500">ATO notifies you if you need to pay these</p>
          </div>
          <button onClick={() => setPaygInstalments(!paygInstalments)} className={toggleClass(paygInstalments)}>
            <div className={toggleDot(paygInstalments)} />
          </button>
        </div>

        {/* Employer */}
        <div className="flex items-center justify-between bg-white/5 rounded-xl px-4 py-3">
          <div>
            <p className="text-sm text-white font-medium">Employer?</p>
            <p className="text-xs text-slate-500">Adds super guarantee + STP finalisation deadlines</p>
          </div>
          <button onClick={() => setIsEmployer(!isEmployer)} className={toggleClass(isEmployer)}>
            <div className={toggleDot(isEmployer)} />
          </button>
        </div>
      </div>

      {/* ── Key Metrics Bar ─────────────────────────────────────────────────── */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="glass rounded-xl p-4 text-center">
          <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">Total Obligations</p>
          <p className="text-2xl font-bold text-white">{metrics.total}</p>
        </div>
        <div className="glass rounded-xl p-4 text-center">
          <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">Next Deadline</p>
          {metrics.nextDeadline ? (
            <>
              <p className="text-lg font-bold text-teal-400">{formatDateShort(metrics.nextDeadline.date)}</p>
              <p className="text-xs text-slate-500">{metrics.nextDays === 0 ? 'Today' : `${metrics.nextDays} days`}</p>
            </>
          ) : (
            <p className="text-lg font-bold text-slate-500">--</p>
          )}
        </div>
        <div className="glass rounded-xl p-4 text-center">
          <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">Remaining</p>
          <p className="text-2xl font-bold text-amber-400">{metrics.remaining}</p>
        </div>
        <div className="glass rounded-xl p-4 text-center">
          <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">Completed</p>
          <p className="text-2xl font-bold text-teal-400">{metrics.completed}</p>
        </div>
      </div>

      {/* ── Upcoming Deadlines List ─────────────────────────────────────────── */}
      {upcomingDeadlines.length > 0 && (
        <div className="glass rounded-2xl p-6 sm:p-8 space-y-4">
          <h2 className="text-xl font-bold text-white heading-font">Upcoming Deadlines</h2>
          <div className="space-y-3">
            {upcomingDeadlines.map((d, i) => {
              const days = daysBetween(today, d.date);
              const status = getDeadlineStatus(d.date, today);
              return (
                <div
                  key={`upcoming-${i}`}
                  className="flex items-start gap-4 bg-white/5 rounded-xl p-4"
                >
                  <div className={`w-2 h-2 mt-2 rounded-full shrink-0 ${statusDot(status)}`} />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-white font-medium text-sm">{d.label}</span>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full border ${CATEGORY_COLORS[d.category]}`}
                      >
                        {CATEGORY_LABELS[d.category]}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">{d.description}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className={`text-sm font-semibold ${statusColor(status)}`}>
                      {formatDateShort(d.date)}
                    </p>
                    <p className="text-xs text-slate-500">
                      {days === 0 ? 'Due today' : days === 1 ? '1 day' : `${days} days`}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ── Calendar Grid ───────────────────────────────────────────────────── */}
      <div className="glass rounded-2xl p-6 sm:p-8 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-white heading-font">
            FY{financialYear} Calendar
          </h2>
          <button
            onClick={handleCopy}
            className="flex items-center gap-2 text-sm px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all"
          >
            {copied ? <span className="text-emerald-400">Copied</span> : <>Copy All Deadlines</>}
          </button>
        </div>

        {/* Status legend */}
        <div className="flex flex-wrap gap-4 text-xs text-slate-500">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-rose-400" />
            Overdue
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            Due within 30 days
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-teal-400" />
            Upcoming (30-90 days)
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-slate-600" />
            Future
          </span>
        </div>

        {/* Month Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {MONTHS.map((month, idx) => {
            const monthDeadlines = deadlinesByMonth[idx] || [];
            // Determine year for display
            const displayYear = idx < 6 ? startYear : startYear + 1;

            return (
              <div
                key={month}
                className="bg-white/5 rounded-xl p-4 space-y-2"
              >
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-sm font-semibold text-white">{month}</h3>
                  <span className="text-xs text-slate-600">{displayYear}</span>
                </div>
                {monthDeadlines.length === 0 ? (
                  <p className="text-xs text-slate-600 italic">No deadlines</p>
                ) : (
                  <div className="space-y-1.5">
                    {monthDeadlines.map((d, i) => {
                      const status = getDeadlineStatus(d.date, today);
                      return (
                        <div
                          key={`${month}-${i}`}
                          className="flex items-start gap-2"
                          title={`${d.label} — ${formatDate(d.date)}\n${d.description}`}
                        >
                          <span className={`w-1.5 h-1.5 mt-1.5 rounded-full shrink-0 ${statusDot(status)}`} />
                          <div className="min-w-0">
                            <p className={`text-xs font-medium truncate ${statusColor(status)}`}>
                              {formatDateShort(d.date)}
                            </p>
                            <p className="text-[10px] text-slate-500 truncate">{d.label}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Full Deadline List ───────────────────────────────────────────────── */}
      <div className="glass rounded-2xl p-6 sm:p-8 space-y-4">
        <h2 className="text-xl font-bold text-white heading-font">All Deadlines</h2>
        <p className="text-sm text-slate-400">
          Complete list of {metrics.total} obligations for FY{financialYear}, sorted by date.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-3 px-3 text-slate-400 font-medium w-6"></th>
                <th className="text-left py-3 px-3 text-slate-400 font-medium">Date</th>
                <th className="text-left py-3 px-3 text-slate-400 font-medium">Obligation</th>
                <th className="text-left py-3 px-3 text-slate-400 font-medium hidden sm:table-cell">Type</th>
                <th className="text-right py-3 px-3 text-slate-400 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {deadlines.map((d, i) => {
                const status = getDeadlineStatus(d.date, today);
                const days = daysBetween(today, d.date);
                return (
                  <tr key={`list-${i}`}>
                    <td className="py-3 px-3">
                      <span className={`w-2 h-2 rounded-full inline-block ${statusDot(status)}`} />
                    </td>
                    <td className={`py-3 px-3 font-medium whitespace-nowrap ${statusColor(status)}`}>
                      {formatDate(d.date)}
                    </td>
                    <td className="py-3 px-3 text-white">{d.label}</td>
                    <td className="py-3 px-3 hidden sm:table-cell">
                      <span className={`text-xs px-2 py-0.5 rounded-full border ${CATEGORY_COLORS[d.category]}`}>
                        {CATEGORY_LABELS[d.category]}
                      </span>
                    </td>
                    <td className="py-3 px-3 text-right">
                      {status === 'overdue' ? (
                        <span className="text-xs text-rose-400 font-medium">Overdue</span>
                      ) : days === 0 ? (
                        <span className="text-xs text-amber-400 font-medium">Due Today</span>
                      ) : (
                        <span className={`text-xs ${statusColor(status)}`}>{days} days</span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
