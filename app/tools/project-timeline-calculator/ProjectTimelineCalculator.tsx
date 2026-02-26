'use client';

import { useState, useMemo, useCallback } from 'react';

/* ---- Types ---- */

type Step = 1 | 2 | 3 | 4;

type ProjectType = 'website' | 'mobile-app' | 'branding' | 'content' | 'marketing' | 'consulting' | 'development' | 'custom';
type ClientResponseTime = 'same-day' | '1-2-days' | '3-5-days' | '1-week-plus';
type ComplexityFactor = 0.8 | 1.0 | 1.3 | 1.6;

interface Task {
  id: string;
  name: string;
  optimistic: number;
  realistic: number;
  pessimistic: number;
}

interface ProjectSetup {
  name: string;
  type: ProjectType;
  hourlyRate: number;
  hoursPerWeek: number;
  activeProjects: number;
}

interface Adjustments {
  clientResponseTime: ClientResponseTime;
  revisionRounds: number;
  bufferPercent: number;
  unavailableDays: number;
  complexity: ComplexityFactor;
}

interface TaskResult {
  name: string;
  optimistic: number;
  realistic: number;
  pessimistic: number;
  expected: number;
  standardDeviation: number;
  calendarDays: number;
}

interface TimelineResults {
  tasks: TaskResult[];
  totalOptimisticHours: number;
  totalRealisticHours: number;
  totalPessimisticHours: number;
  totalExpectedHours: number;
  totalStandardDeviation: number;
  bufferHours: number;
  revisionHours: number;
  clientDelayDays: number;
  totalCalendarDays: number;
  optimisticCalendarDays: number;
  pessimisticCalendarDays: number;
  optimisticDate: Date;
  expectedDate: Date;
  pessimisticDate: Date;
  confidence68Start: Date;
  confidence68End: Date;
  confidence95Start: Date;
  confidence95End: Date;
  projectValue: number;
  effectiveDailyRate: number;
  effectiveHoursPerDay: number;
}

/* ---- Constants ---- */

const PROJECT_TYPE_LABELS: Record<ProjectType, string> = {
  'website': 'Website',
  'mobile-app': 'Mobile App',
  'branding': 'Branding / Design',
  'content': 'Content / Copywriting',
  'marketing': 'Marketing Campaign',
  'consulting': 'Consulting',
  'development': 'Development',
  'custom': 'Custom',
};

const TASK_TEMPLATES: Record<string, Task[]> = {
  'website': [
    { id: crypto.randomUUID?.() || '1', name: 'Discovery & Requirements', optimistic: 4, realistic: 8, pessimistic: 16 },
    { id: crypto.randomUUID?.() || '2', name: 'Wireframes', optimistic: 8, realistic: 16, pessimistic: 32 },
    { id: crypto.randomUUID?.() || '3', name: 'Visual Design', optimistic: 16, realistic: 32, pessimistic: 64 },
    { id: crypto.randomUUID?.() || '4', name: 'Development', optimistic: 24, realistic: 48, pessimistic: 96 },
    { id: crypto.randomUUID?.() || '5', name: 'Content', optimistic: 8, realistic: 16, pessimistic: 32 },
    { id: crypto.randomUUID?.() || '6', name: 'Testing & QA', optimistic: 4, realistic: 8, pessimistic: 16 },
    { id: crypto.randomUUID?.() || '7', name: 'Revisions', optimistic: 8, realistic: 16, pessimistic: 32 },
    { id: crypto.randomUUID?.() || '8', name: 'Launch', optimistic: 2, realistic: 4, pessimistic: 8 },
  ],
  'mobile-app': [
    { id: crypto.randomUUID?.() || '1', name: 'Requirements & Planning', optimistic: 8, realistic: 16, pessimistic: 32 },
    { id: crypto.randomUUID?.() || '2', name: 'UI Design', optimistic: 16, realistic: 32, pessimistic: 64 },
    { id: crypto.randomUUID?.() || '3', name: 'Frontend Development', optimistic: 32, realistic: 64, pessimistic: 128 },
    { id: crypto.randomUUID?.() || '4', name: 'Backend Development', optimistic: 24, realistic: 48, pessimistic: 96 },
    { id: crypto.randomUUID?.() || '5', name: 'Testing & QA', optimistic: 16, realistic: 32, pessimistic: 64 },
    { id: crypto.randomUUID?.() || '6', name: 'App Store Setup', optimistic: 4, realistic: 8, pessimistic: 16 },
  ],
  'branding': [
    { id: crypto.randomUUID?.() || '1', name: 'Discovery & Briefing', optimistic: 4, realistic: 8, pessimistic: 16 },
    { id: crypto.randomUUID?.() || '2', name: 'Market Research', optimistic: 8, realistic: 12, pessimistic: 20 },
    { id: crypto.randomUUID?.() || '3', name: 'Concept Development', optimistic: 12, realistic: 20, pessimistic: 40 },
    { id: crypto.randomUUID?.() || '4', name: 'Refinement', optimistic: 8, realistic: 16, pessimistic: 24 },
    { id: crypto.randomUUID?.() || '5', name: 'Brand Guidelines', optimistic: 8, realistic: 16, pessimistic: 32 },
    { id: crypto.randomUUID?.() || '6', name: 'Final Deliverables', optimistic: 4, realistic: 8, pessimistic: 16 },
  ],
  'content': [
    { id: crypto.randomUUID?.() || '1', name: 'Content Strategy', optimistic: 4, realistic: 8, pessimistic: 16 },
    { id: crypto.randomUUID?.() || '2', name: 'Research', optimistic: 8, realistic: 16, pessimistic: 24 },
    { id: crypto.randomUUID?.() || '3', name: 'Writing / Creation', optimistic: 12, realistic: 24, pessimistic: 48 },
    { id: crypto.randomUUID?.() || '4', name: 'Editing & Proofing', optimistic: 4, realistic: 8, pessimistic: 16 },
    { id: crypto.randomUUID?.() || '5', name: 'Design & Layout', optimistic: 4, realistic: 8, pessimistic: 16 },
    { id: crypto.randomUUID?.() || '6', name: 'Publishing & Handoff', optimistic: 2, realistic: 4, pessimistic: 8 },
  ],
};

const CLIENT_RESPONSE_LABELS: Record<ClientResponseTime, string> = {
  'same-day': 'Same day',
  '1-2-days': '1-2 days',
  '3-5-days': '3-5 days',
  '1-week-plus': '1+ week',
};

const CLIENT_RESPONSE_DAYS: Record<ClientResponseTime, number> = {
  'same-day': 0,
  '1-2-days': 1.5,
  '3-5-days': 4,
  '1-week-plus': 7,
};

const COMPLEXITY_LABELS: { value: ComplexityFactor; label: string; description: string }[] = [
  { value: 0.8, label: 'Simple', description: 'Repeat work, familiar tech' },
  { value: 1.0, label: 'Standard', description: 'Typical project complexity' },
  { value: 1.3, label: 'Complex', description: 'New tech, integrations' },
  { value: 1.6, label: 'Highly Complex', description: 'Cutting-edge, many unknowns' },
];

const GANTT_COLORS = [
  'bg-indigo-500',
  'bg-cyan-500',
  'bg-violet-500',
  'bg-sky-500',
  'bg-blue-500',
  'bg-teal-500',
  'bg-purple-500',
  'bg-emerald-500',
];

/* ---- Helpers ---- */

function generateId(): string {
  return Math.random().toString(36).substring(2, 11) + Date.now().toString(36);
}

function pertExpected(o: number, r: number, p: number): number {
  return (o + 4 * r + p) / 6;
}

function pertStdDev(o: number, p: number): number {
  return (p - o) / 6;
}

function addWorkingDays(start: Date, days: number): Date {
  const result = new Date(start);
  let added = 0;
  while (added < days) {
    result.setDate(result.getDate() + 1);
    const dow = result.getDay();
    if (dow !== 0 && dow !== 6) {
      added++;
    }
  }
  return result;
}

function formatDate(date: Date): string {
  return date.toLocaleDateString('en-AU', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

/* ---- Component ---- */

export default function ProjectTimelineCalculator() {
  const [step, setStep] = useState<Step>(1);
  const [calculated, setCalculated] = useState(false);
  const [copied, setCopied] = useState(false);

  // Step 1: Project Setup
  const [setup, setSetup] = useState<ProjectSetup>({
    name: '',
    type: 'website',
    hourlyRate: 100,
    hoursPerWeek: 30,
    activeProjects: 1,
  });

  // Step 2: Tasks
  const [tasks, setTasks] = useState<Task[]>(() =>
    TASK_TEMPLATES['website'].map((t) => ({ ...t, id: generateId() }))
  );

  // Step 3: Adjustments
  const [adjustments, setAdjustments] = useState<Adjustments>({
    clientResponseTime: '1-2-days',
    revisionRounds: 2,
    bufferPercent: 20,
    unavailableDays: 0,
    complexity: 1.0,
  });

  // Load template when project type changes
  const handleProjectTypeChange = (type: ProjectType) => {
    setSetup((prev) => ({ ...prev, type }));
    const template = TASK_TEMPLATES[type];
    if (template) {
      setTasks(template.map((t) => ({ ...t, id: generateId() })));
    } else {
      setTasks([{ id: generateId(), name: 'Task 1', optimistic: 4, realistic: 8, pessimistic: 16 }]);
    }
  };

  const addTask = () => {
    setTasks((prev) => [
      ...prev,
      { id: generateId(), name: `Task ${prev.length + 1}`, optimistic: 4, realistic: 8, pessimistic: 16 },
    ]);
  };

  const removeTask = (id: string) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const updateTask = (id: string, field: keyof Task, value: string | number) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, [field]: value } : t))
    );
  };

  const moveTask = (index: number, direction: 'up' | 'down') => {
    const newTasks = [...tasks];
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= newTasks.length) return;
    [newTasks[index], newTasks[targetIndex]] = [newTasks[targetIndex], newTasks[index]];
    setTasks(newTasks);
  };

  // Calculations
  const results: TimelineResults | null = useMemo(() => {
    if (!calculated || tasks.length === 0) return null;

    const complexity = adjustments.complexity;
    const contextSwitchPenalty = setup.activeProjects > 1 ? 1 + (setup.activeProjects - 1) * 0.1 : 1;
    const effectiveHoursPerWeek = setup.hoursPerWeek / contextSwitchPenalty;
    const effectiveHoursPerDay = effectiveHoursPerWeek / 5;

    const taskResults: TaskResult[] = tasks.map((task) => {
      const o = task.optimistic * complexity;
      const r = task.realistic * complexity;
      const p = task.pessimistic * complexity;
      const expected = pertExpected(o, r, p);
      const sd = pertStdDev(o, p);
      const calendarDays = Math.ceil(expected / effectiveHoursPerDay);
      return {
        name: task.name,
        optimistic: Math.round(o * 10) / 10,
        realistic: Math.round(r * 10) / 10,
        pessimistic: Math.round(p * 10) / 10,
        expected: Math.round(expected * 10) / 10,
        standardDeviation: Math.round(sd * 10) / 10,
        calendarDays,
      };
    });

    const totalOptimisticHours = taskResults.reduce((s, t) => s + t.optimistic, 0);
    const totalRealisticHours = taskResults.reduce((s, t) => s + t.realistic, 0);
    const totalPessimisticHours = taskResults.reduce((s, t) => s + t.pessimistic, 0);
    const totalExpectedHours = taskResults.reduce((s, t) => s + t.expected, 0);

    // Combined standard deviation (square root of sum of variances)
    const totalStandardDeviation = Math.sqrt(
      taskResults.reduce((s, t) => s + t.standardDeviation * t.standardDeviation, 0)
    );

    // Buffer
    const bufferHours = totalExpectedHours * (adjustments.bufferPercent / 100);

    // Revision time (each revision round adds ~15% of total expected hours, weighted by round)
    const revisionHours = adjustments.revisionRounds * totalExpectedHours * 0.08;

    // Total hours with buffer and revisions
    const totalAdjustedHours = totalExpectedHours + bufferHours + revisionHours;

    // Calendar days from work hours
    const baseCalendarDays = Math.ceil(totalAdjustedHours / effectiveHoursPerDay);

    // Client delay days (per feedback point = roughly per task that needs approval)
    const feedbackPoints = Math.min(tasks.length, 6); // not every task needs feedback
    const clientDelayDays = feedbackPoints * CLIENT_RESPONSE_DAYS[adjustments.clientResponseTime] * adjustments.revisionRounds;

    // Total calendar days
    const totalCalendarDays = Math.ceil(baseCalendarDays + clientDelayDays + adjustments.unavailableDays);

    // Optimistic and pessimistic calendar days
    const optimisticHoursAdjusted = totalOptimisticHours * complexity + (totalOptimisticHours * complexity * adjustments.bufferPercent / 200);
    const pessimisticHoursAdjusted = totalPessimisticHours * complexity + bufferHours + revisionHours * 1.5;
    const optimisticCalendarDays = Math.ceil(optimisticHoursAdjusted / effectiveHoursPerDay) + Math.ceil(adjustments.unavailableDays * 0.5);
    const pessimisticCalendarDays = Math.ceil(pessimisticHoursAdjusted / effectiveHoursPerDay) + Math.ceil(clientDelayDays * 1.5) + adjustments.unavailableDays;

    const today = new Date();
    const optimisticDate = addWorkingDays(today, optimisticCalendarDays);
    const expectedDate = addWorkingDays(today, totalCalendarDays);
    const pessimisticDate = addWorkingDays(today, pessimisticCalendarDays);

    // Confidence intervals using standard deviation
    const sdDays = Math.ceil(totalStandardDeviation / effectiveHoursPerDay);
    const confidence68Start = addWorkingDays(today, Math.max(optimisticCalendarDays, totalCalendarDays - sdDays));
    const confidence68End = addWorkingDays(today, totalCalendarDays + sdDays);
    const confidence95Start = addWorkingDays(today, Math.max(optimisticCalendarDays, totalCalendarDays - 2 * sdDays));
    const confidence95End = addWorkingDays(today, totalCalendarDays + 2 * sdDays);

    const projectValue = totalAdjustedHours * setup.hourlyRate;
    const effectiveDailyRate = totalCalendarDays > 0 ? projectValue / totalCalendarDays : 0;

    return {
      tasks: taskResults,
      totalOptimisticHours: Math.round(totalOptimisticHours),
      totalRealisticHours: Math.round(totalRealisticHours),
      totalPessimisticHours: Math.round(totalPessimisticHours),
      totalExpectedHours: Math.round(totalExpectedHours),
      totalStandardDeviation: Math.round(totalStandardDeviation * 10) / 10,
      bufferHours: Math.round(bufferHours),
      revisionHours: Math.round(revisionHours),
      clientDelayDays: Math.round(clientDelayDays),
      totalCalendarDays,
      optimisticCalendarDays,
      pessimisticCalendarDays,
      optimisticDate,
      expectedDate,
      pessimisticDate,
      confidence68Start,
      confidence68End,
      confidence95Start,
      confidence95End,
      projectValue,
      effectiveDailyRate: Math.round(effectiveDailyRate),
      effectiveHoursPerDay: Math.round(effectiveHoursPerDay * 10) / 10,
    };
  }, [calculated, tasks, setup, adjustments]);

  const handleCalculate = () => {
    setCalculated(true);
    setStep(4);
  };

  // Validation
  const step1Valid = setup.name.trim().length > 0 && setup.hourlyRate > 0 && setup.hoursPerWeek >= 5;
  const step2Valid = tasks.length > 0 && tasks.every((t) => t.name.trim().length > 0 && t.optimistic > 0 && t.realistic > 0 && t.pessimistic > 0 && t.optimistic <= t.realistic && t.realistic <= t.pessimistic);

  // Copy summary
  const generateSummary = useCallback((): string => {
    if (!results) return '';
    const lines: string[] = [];
    lines.push('='.repeat(60));
    lines.push(`PROJECT TIMELINE ESTIMATE: ${setup.name.toUpperCase()}`);
    lines.push('='.repeat(60));
    lines.push('');
    lines.push('SUMMARY');
    lines.push('-'.repeat(45));
    lines.push(`Project Type:          ${PROJECT_TYPE_LABELS[setup.type]}`);
    lines.push(`Total Estimated Hours: ${results.totalExpectedHours}h (PERT weighted)`);
    lines.push(`Buffer Time:           ${results.bufferHours}h (${adjustments.bufferPercent}%)`);
    lines.push(`Revision Time:         ${results.revisionHours}h (${adjustments.revisionRounds} rounds)`);
    lines.push(`Project Value:         ${formatCurrency(results.projectValue)}`);
    lines.push('');
    lines.push('DELIVERY DATES');
    lines.push('-'.repeat(45));
    lines.push(`Optimistic:  ${formatDate(results.optimisticDate)} (${results.optimisticCalendarDays} working days)`);
    lines.push(`Expected:    ${formatDate(results.expectedDate)} (${results.totalCalendarDays} working days)`);
    lines.push(`Pessimistic: ${formatDate(results.pessimisticDate)} (${results.pessimisticCalendarDays} working days)`);
    lines.push('');
    lines.push('TASK BREAKDOWN');
    lines.push('-'.repeat(45));
    results.tasks.forEach((t, i) => {
      lines.push(`${(i + 1).toString().padStart(2)}. ${t.name.padEnd(30)} ${t.expected}h expected (${t.optimistic}-${t.realistic}-${t.pessimistic}h)`);
    });
    lines.push('');
    lines.push('ASSUMPTIONS');
    lines.push('-'.repeat(45));
    lines.push(`Hours available per week:  ${setup.hoursPerWeek}h`);
    lines.push(`Active projects:           ${setup.activeProjects}`);
    lines.push(`Client response time:      ${CLIENT_RESPONSE_LABELS[adjustments.clientResponseTime]}`);
    lines.push(`Complexity:                ${COMPLEXITY_LABELS.find((c) => c.value === adjustments.complexity)?.label}`);
    lines.push(`Unavailable days:          ${adjustments.unavailableDays}`);
    lines.push('');
    lines.push('-'.repeat(60));
    lines.push('Generated by InvoiceFlow Project Timeline Calculator');
    lines.push('https://www.invoiceflow.au/tools/project-timeline-calculator');
    lines.push('-'.repeat(60));
    return lines.join('\n');
  }, [results, setup, adjustments]);

  const handleCopy = () => {
    navigator.clipboard.writeText(generateSummary()).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const stepLabels = ['Project Setup', 'Task Breakdown', 'Adjustments', 'Results'];

  return (
    <div className="space-y-8">
      {/* Step Indicator */}
      <div className="flex items-center justify-center gap-1.5 sm:gap-3 mb-4">
        {([1, 2, 3, 4] as const).map((s) => (
          <button
            key={s}
            onClick={() => {
              if (s < step || (s === 4 && calculated)) setStep(s);
            }}
            className={`flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
              step === s
                ? 'bg-gradient-to-r from-indigo-400/20 to-cyan-500/20 border border-indigo-400/40 text-indigo-300'
                : s < step || (s === 4 && calculated)
                  ? 'bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10'
                  : 'bg-white/[0.02] border border-white/[0.05] text-slate-600 cursor-default'
            }`}
          >
            <div
              className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${
                step === s
                  ? 'bg-indigo-400/30 text-indigo-300'
                  : s < step || (s === 4 && calculated)
                    ? 'bg-white/10 text-slate-400'
                    : 'bg-white/5 text-slate-600'
              }`}
            >
              {s < step ? '\u2713' : s}
            </div>
            <span className="hidden sm:inline">{stepLabels[s - 1]}</span>
          </button>
        ))}
      </div>

      {/* ===================== STEP 1: PROJECT SETUP ===================== */}
      {step === 1 && (
        <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
          <h3 className="text-lg font-bold text-white heading-font mb-2">Project Setup</h3>
          <p className="text-sm text-slate-400 mb-6">
            Start with the basics. The project type will pre-populate a task template you can
            customise in the next step.
          </p>

          <div className="space-y-6">
            {/* Project Name */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Project Name</label>
              <input
                type="text"
                value={setup.name}
                onChange={(e) => setSetup((prev) => ({ ...prev, name: e.target.value }))}
                placeholder="e.g., Company Website Redesign"
                className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-indigo-400/50 focus:ring-1 focus:ring-indigo-400/20 transition-all text-sm"
              />
            </div>

            {/* Project Type */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Project Type</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {(Object.entries(PROJECT_TYPE_LABELS) as [ProjectType, string][]).map(([value, label]) => (
                  <button
                    key={value}
                    onClick={() => handleProjectTypeChange(value)}
                    className={`px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                      setup.type === value
                        ? 'bg-gradient-to-r from-indigo-400/20 to-cyan-500/20 border border-indigo-400/40 text-indigo-300'
                        : 'bg-white/[0.03] border border-white/[0.08] text-slate-400 hover:bg-white/[0.06] hover:text-white hover:border-white/15'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Hourly Rate */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Your Hourly Rate (AUD)
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm">$</span>
                <input
                  type="number"
                  value={setup.hourlyRate || ''}
                  onChange={(e) => setSetup((prev) => ({ ...prev, hourlyRate: Math.max(0, Number(e.target.value)) }))}
                  min={0}
                  className="w-full pl-8 pr-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-indigo-400/50 focus:ring-1 focus:ring-indigo-400/20 transition-all text-sm"
                />
              </div>
              <p className="text-xs text-slate-500 mt-1">Used to calculate project value and effective daily rate</p>
            </div>

            {/* Hours per Week */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-medium text-slate-300">
                  Hours Available Per Week for This Project
                </label>
                <span className="text-sm font-bold text-indigo-400">{setup.hoursPerWeek}h</span>
              </div>
              <input
                type="range"
                min={5}
                max={60}
                step={1}
                value={setup.hoursPerWeek}
                onChange={(e) => setSetup((prev) => ({ ...prev, hoursPerWeek: Number(e.target.value) }))}
                className="w-full accent-indigo-400"
              />
              <div className="flex justify-between text-xs text-slate-600 mt-1">
                <span>5h (part-time)</span>
                <span>30h (standard)</span>
                <span>60h (intense)</span>
              </div>
            </div>

            {/* Active Projects */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                How Many Other Active Projects?
              </label>
              <div className="flex flex-wrap gap-2">
                {Array.from({ length: 11 }, (_, i) => i).map((n) => (
                  <button
                    key={n}
                    onClick={() => setSetup((prev) => ({ ...prev, activeProjects: n }))}
                    className={`w-10 h-10 rounded-xl text-sm font-medium transition-all ${
                      setup.activeProjects === n
                        ? 'bg-gradient-to-r from-indigo-400/20 to-cyan-500/20 border border-indigo-400/40 text-indigo-300'
                        : 'bg-white/[0.03] border border-white/[0.08] text-slate-400 hover:bg-white/[0.06] hover:text-white'
                    }`}
                  >
                    {n}
                  </button>
                ))}
              </div>
              {setup.activeProjects > 0 && (
                <p className="text-xs text-slate-500 mt-2">
                  Context switching penalty: ~{Math.round(setup.activeProjects * 10)}% efficiency loss applied
                </p>
              )}
            </div>
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={() => setStep(2)}
              disabled={!step1Valid}
              className={`rounded-xl px-10 py-4 font-semibold text-lg transition-all ${
                step1Valid
                  ? 'bg-gradient-to-r from-indigo-400 to-cyan-500 text-white hover:from-indigo-300 hover:to-cyan-400 shadow-lg shadow-indigo-500/20'
                  : 'bg-white/5 border border-white/10 text-slate-600 cursor-not-allowed'
              }`}
            >
              Next: Task Breakdown
            </button>
            {!step1Valid && (
              <p className="text-xs text-slate-500 mt-3">
                Enter a project name and hourly rate to continue
              </p>
            )}
          </div>
        </div>
      )}

      {/* ===================== STEP 2: TASK BREAKDOWN ===================== */}
      {step === 2 && (
        <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
          <h3 className="text-lg font-bold text-white heading-font mb-2">Task Breakdown</h3>
          <p className="text-sm text-slate-400 mb-2">
            Break your project into phases. For each task, provide three estimates: optimistic
            (best case), realistic (normal), and pessimistic (worst case).
          </p>
          <p className="text-xs text-slate-500 mb-6">
            PERT formula: Expected = (Optimistic + 4 x Realistic + Pessimistic) / 6
          </p>

          {/* Task Header */}
          <div className="hidden sm:grid grid-cols-[2fr_1fr_1fr_1fr_auto_auto] gap-2 px-2 mb-2">
            <span className="text-xs text-slate-500 font-medium">Task Name</span>
            <span className="text-xs text-slate-500 font-medium text-center">Optimistic (h)</span>
            <span className="text-xs text-slate-500 font-medium text-center">Realistic (h)</span>
            <span className="text-xs text-slate-500 font-medium text-center">Pessimistic (h)</span>
            <span className="text-xs text-slate-500 font-medium text-center w-16">Expected</span>
            <span className="w-20" />
          </div>

          {/* Tasks */}
          <div className="space-y-3">
            {tasks.map((task, index) => {
              const expected = pertExpected(task.optimistic, task.realistic, task.pessimistic);
              const validOrder = task.optimistic <= task.realistic && task.realistic <= task.pessimistic;
              return (
                <div
                  key={task.id}
                  className={`rounded-xl p-3 sm:p-4 transition-all ${
                    validOrder
                      ? 'bg-white/[0.04] border border-white/[0.06]'
                      : 'bg-red-400/5 border border-red-400/20'
                  }`}
                >
                  {/* Mobile: stacked, Desktop: grid */}
                  <div className="sm:grid sm:grid-cols-[2fr_1fr_1fr_1fr_auto_auto] sm:gap-2 sm:items-center space-y-3 sm:space-y-0">
                    {/* Task Name */}
                    <input
                      type="text"
                      value={task.name}
                      onChange={(e) => updateTask(task.id, 'name', e.target.value)}
                      className="w-full px-3 py-2 bg-white/[0.04] border border-white/[0.08] rounded-lg text-white text-sm focus:outline-none focus:border-indigo-400/50 transition-all"
                      placeholder="Task name"
                    />

                    {/* Mobile labels + inputs */}
                    <div className="grid grid-cols-3 gap-2 sm:contents">
                      <div>
                        <label className="block text-xs text-green-400/70 mb-1 sm:hidden">Best</label>
                        <input
                          type="number"
                          value={task.optimistic || ''}
                          onChange={(e) => updateTask(task.id, 'optimistic', Math.max(0, Number(e.target.value)))}
                          min={0}
                          className="w-full px-2 py-2 bg-green-400/5 border border-green-400/15 rounded-lg text-green-300 text-sm text-center focus:outline-none focus:border-green-400/40 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-indigo-400/70 mb-1 sm:hidden">Normal</label>
                        <input
                          type="number"
                          value={task.realistic || ''}
                          onChange={(e) => updateTask(task.id, 'realistic', Math.max(0, Number(e.target.value)))}
                          min={0}
                          className="w-full px-2 py-2 bg-indigo-400/5 border border-indigo-400/15 rounded-lg text-indigo-300 text-sm text-center focus:outline-none focus:border-indigo-400/40 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-red-400/70 mb-1 sm:hidden">Worst</label>
                        <input
                          type="number"
                          value={task.pessimistic || ''}
                          onChange={(e) => updateTask(task.id, 'pessimistic', Math.max(0, Number(e.target.value)))}
                          min={0}
                          className="w-full px-2 py-2 bg-red-400/5 border border-red-400/15 rounded-lg text-red-300 text-sm text-center focus:outline-none focus:border-red-400/40 transition-all"
                        />
                      </div>
                    </div>

                    {/* Expected (PERT) */}
                    <div className="text-center w-16 hidden sm:block">
                      <span className="text-sm font-bold text-cyan-400">
                        {Math.round(expected * 10) / 10}h
                      </span>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-1 justify-end sm:w-20">
                      <span className="sm:hidden text-sm font-bold text-cyan-400 mr-auto">
                        Expected: {Math.round(expected * 10) / 10}h
                      </span>
                      <button
                        onClick={() => moveTask(index, 'up')}
                        disabled={index === 0}
                        className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all flex items-center justify-center text-xs"
                        title="Move up"
                      >
                        {'\u2191'}
                      </button>
                      <button
                        onClick={() => moveTask(index, 'down')}
                        disabled={index === tasks.length - 1}
                        className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all flex items-center justify-center text-xs"
                        title="Move down"
                      >
                        {'\u2193'}
                      </button>
                      <button
                        onClick={() => removeTask(task.id)}
                        disabled={tasks.length <= 1}
                        className="w-7 h-7 rounded-lg bg-red-400/10 border border-red-400/20 text-red-400 hover:bg-red-400/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all flex items-center justify-center text-xs"
                        title="Remove task"
                      >
                        {'\u2715'}
                      </button>
                    </div>
                  </div>
                  {!validOrder && (
                    <p className="text-xs text-red-400 mt-2 ml-1">
                      Estimates must be in order: Optimistic &le; Realistic &le; Pessimistic
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          {/* Add Task Button */}
          <button
            onClick={addTask}
            className="mt-4 w-full py-3 rounded-xl border-2 border-dashed border-white/10 text-slate-400 text-sm font-medium hover:border-indigo-400/30 hover:text-indigo-400 transition-all"
          >
            + Add Task
          </button>

          {/* Total Summary */}
          <div className="mt-6 bg-white/[0.04] border border-white/[0.06] rounded-xl p-4">
            <div className="grid grid-cols-4 gap-4 text-center">
              <div>
                <p className="text-xs text-slate-500 mb-1">Tasks</p>
                <p className="text-lg font-bold text-white">{tasks.length}</p>
              </div>
              <div>
                <p className="text-xs text-green-400/70 mb-1">Optimistic</p>
                <p className="text-lg font-bold text-green-400">
                  {Math.round(tasks.reduce((s, t) => s + t.optimistic, 0))}h
                </p>
              </div>
              <div>
                <p className="text-xs text-indigo-400/70 mb-1">Expected (PERT)</p>
                <p className="text-lg font-bold text-indigo-400">
                  {Math.round(tasks.reduce((s, t) => s + pertExpected(t.optimistic, t.realistic, t.pessimistic), 0))}h
                </p>
              </div>
              <div>
                <p className="text-xs text-red-400/70 mb-1">Pessimistic</p>
                <p className="text-lg font-bold text-red-400">
                  {Math.round(tasks.reduce((s, t) => s + t.pessimistic, 0))}h
                </p>
              </div>
            </div>
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
              disabled={!step2Valid}
              className={`rounded-xl px-10 py-4 font-semibold text-lg transition-all ${
                step2Valid
                  ? 'bg-gradient-to-r from-indigo-400 to-cyan-500 text-white hover:from-indigo-300 hover:to-cyan-400 shadow-lg shadow-indigo-500/20'
                  : 'bg-white/5 border border-white/10 text-slate-600 cursor-not-allowed'
              }`}
            >
              Next: Adjustments
            </button>
          </div>
          {!step2Valid && (
            <p className="text-xs text-slate-500 mt-3 text-center">
              Ensure all tasks have names and estimates in the correct order (Optimistic &le; Realistic &le; Pessimistic)
            </p>
          )}
        </div>
      )}

      {/* ===================== STEP 3: ADJUSTMENTS ===================== */}
      {step === 3 && (
        <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
          <h3 className="text-lg font-bold text-white heading-font mb-2">Adjustments</h3>
          <p className="text-sm text-slate-400 mb-6">
            Fine-tune your timeline estimate with real-world factors that affect delivery dates.
          </p>

          <div className="space-y-6">
            {/* Client Response Time */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Client Response Time
              </label>
              <p className="text-xs text-slate-500 mb-3">
                How quickly does your client typically respond to feedback requests?
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {(Object.entries(CLIENT_RESPONSE_LABELS) as [ClientResponseTime, string][]).map(
                  ([value, label]) => (
                    <button
                      key={value}
                      onClick={() => setAdjustments((prev) => ({ ...prev, clientResponseTime: value }))}
                      className={`px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                        adjustments.clientResponseTime === value
                          ? 'bg-gradient-to-r from-indigo-400/20 to-cyan-500/20 border border-indigo-400/40 text-indigo-300'
                          : 'bg-white/[0.03] border border-white/[0.08] text-slate-400 hover:bg-white/[0.06] hover:text-white'
                      }`}
                    >
                      {label}
                    </button>
                  )
                )}
              </div>
            </div>

            {/* Revision Rounds */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-medium text-slate-300">Expected Revision Rounds</label>
                <span className="text-sm font-bold text-indigo-400">{adjustments.revisionRounds}</span>
              </div>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((n) => (
                  <button
                    key={n}
                    onClick={() => setAdjustments((prev) => ({ ...prev, revisionRounds: n }))}
                    className={`flex-1 py-2.5 rounded-xl text-sm font-medium transition-all ${
                      adjustments.revisionRounds === n
                        ? 'bg-gradient-to-r from-indigo-400/20 to-cyan-500/20 border border-indigo-400/40 text-indigo-300'
                        : 'bg-white/[0.03] border border-white/[0.08] text-slate-400 hover:bg-white/[0.06] hover:text-white'
                    }`}
                  >
                    {n}
                  </button>
                ))}
              </div>
              <p className="text-xs text-slate-500 mt-1">
                Each revision round adds ~8% to your estimated hours plus client feedback wait time
              </p>
            </div>

            {/* Buffer Percentage */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-medium text-slate-300">Buffer / Contingency</label>
                <span className="text-sm font-bold text-indigo-400">{adjustments.bufferPercent}%</span>
              </div>
              <input
                type="range"
                min={0}
                max={50}
                step={5}
                value={adjustments.bufferPercent}
                onChange={(e) => setAdjustments((prev) => ({ ...prev, bufferPercent: Number(e.target.value) }))}
                className="w-full accent-indigo-400"
              />
              <div className="flex justify-between text-xs text-slate-600 mt-1">
                <span>0% (risky)</span>
                <span>20% (recommended)</span>
                <span>50% (conservative)</span>
              </div>
            </div>

            {/* Unavailable Days */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Holidays / Unavailable Days
              </label>
              <input
                type="number"
                value={adjustments.unavailableDays || ''}
                onChange={(e) => setAdjustments((prev) => ({ ...prev, unavailableDays: Math.max(0, Number(e.target.value)) }))}
                min={0}
                max={90}
                placeholder="0"
                className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-indigo-400/50 focus:ring-1 focus:ring-indigo-400/20 transition-all text-sm"
              />
              <p className="text-xs text-slate-500 mt-1">
                Public holidays, personal leave, or any days you will not work on this project
              </p>
            </div>

            {/* Complexity Factor */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Complexity Factor
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {COMPLEXITY_LABELS.map((c) => (
                  <button
                    key={c.value}
                    onClick={() => setAdjustments((prev) => ({ ...prev, complexity: c.value }))}
                    className={`px-3 py-3 rounded-xl text-left transition-all ${
                      adjustments.complexity === c.value
                        ? 'bg-gradient-to-r from-indigo-400/20 to-cyan-500/20 border border-indigo-400/40'
                        : 'bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.06]'
                    }`}
                  >
                    <p className={`text-sm font-medium ${
                      adjustments.complexity === c.value ? 'text-indigo-300' : 'text-slate-300'
                    }`}>
                      {c.label} ({c.value}x)
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">{c.description}</p>
                  </button>
                ))}
              </div>
            </div>
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
              className="rounded-xl px-10 py-4 font-semibold text-lg bg-gradient-to-r from-indigo-400 to-cyan-500 text-white hover:from-indigo-300 hover:to-cyan-400 shadow-lg shadow-indigo-500/20 transition-all"
            >
              Calculate Timeline
            </button>
          </div>
        </div>
      )}

      {/* ===================== STEP 4: RESULTS DASHBOARD ===================== */}
      {step === 4 && calculated && results && (
        <>
          {/* Delivery Dates Overview */}
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white heading-font mb-6 text-center">
              {setup.name} &mdash; Timeline Estimate
            </h3>

            {/* Three Date Cards */}
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-green-400/5 border border-green-400/15 rounded-xl p-5 text-center">
                <p className="text-xs text-green-400/70 font-medium mb-1">Optimistic</p>
                <p className="text-lg font-bold text-green-400">{formatDate(results.optimisticDate)}</p>
                <p className="text-xs text-slate-500 mt-1">{results.optimisticCalendarDays} working days</p>
              </div>
              <div className="bg-indigo-400/10 border border-indigo-400/30 rounded-xl p-5 text-center relative">
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-indigo-500 rounded text-xs font-bold text-white">
                  EXPECTED
                </div>
                <p className="text-xs text-indigo-400/70 font-medium mb-1">Expected</p>
                <p className="text-xl font-bold text-indigo-400">{formatDate(results.expectedDate)}</p>
                <p className="text-xs text-slate-500 mt-1">{results.totalCalendarDays} working days</p>
              </div>
              <div className="bg-red-400/5 border border-red-400/15 rounded-xl p-5 text-center">
                <p className="text-xs text-red-400/70 font-medium mb-1">Pessimistic</p>
                <p className="text-lg font-bold text-red-400">{formatDate(results.pessimisticDate)}</p>
                <p className="text-xs text-slate-500 mt-1">{results.pessimisticCalendarDays} working days</p>
              </div>
            </div>

            {/* Visual Timeline Bar */}
            <div className="mb-6">
              <p className="text-xs text-slate-500 font-medium mb-3">Delivery Window</p>
              <div className="relative h-10 bg-white/5 rounded-full overflow-hidden">
                {/* Full range is pessimistic */}
                <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-green-400/30 to-indigo-400/30 rounded-full transition-all"
                  style={{
                    width: `${Math.min(100, (results.totalCalendarDays / results.pessimisticCalendarDays) * 100)}%`,
                  }}
                />
                {/* Optimistic marker */}
                <div
                  className="absolute top-0 bottom-0 w-0.5 bg-green-400"
                  style={{
                    left: `${Math.min(100, (results.optimisticCalendarDays / results.pessimisticCalendarDays) * 100)}%`,
                  }}
                />
                {/* Expected marker */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-indigo-400"
                  style={{
                    left: `${Math.min(100, (results.totalCalendarDays / results.pessimisticCalendarDays) * 100)}%`,
                  }}
                />
                {/* Pessimistic marker */}
                <div className="absolute top-0 bottom-0 right-0 w-0.5 bg-red-400" />
              </div>
              <div className="flex justify-between mt-1.5">
                <span className="text-xs text-green-400">Today</span>
                <span className="text-xs text-red-400">{formatDate(results.pessimisticDate)}</span>
              </div>
            </div>

            {/* Confidence Intervals */}
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="bg-white/[0.04] border border-white/[0.06] rounded-xl p-4">
                <p className="text-xs text-slate-500 font-medium mb-1">68% Confidence Interval</p>
                <p className="text-sm text-white">
                  {formatDate(results.confidence68Start)} &mdash; {formatDate(results.confidence68End)}
                </p>
              </div>
              <div className="bg-white/[0.04] border border-white/[0.06] rounded-xl p-4">
                <p className="text-xs text-slate-500 font-medium mb-1">95% Confidence Interval</p>
                <p className="text-sm text-white">
                  {formatDate(results.confidence95Start)} &mdash; {formatDate(results.confidence95End)}
                </p>
              </div>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white heading-font mb-6">Key Metrics</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-white/[0.04] border border-white/[0.06] rounded-xl p-4 text-center">
                <p className="text-xs text-slate-500 mb-1">Total Hours (PERT)</p>
                <p className="text-2xl font-bold text-white">{results.totalExpectedHours}h</p>
                <p className="text-xs text-slate-600 mt-1">+ {results.bufferHours}h buffer</p>
              </div>
              <div className="bg-white/[0.04] border border-white/[0.06] rounded-xl p-4 text-center">
                <p className="text-xs text-slate-500 mb-1">Calendar Duration</p>
                <p className="text-2xl font-bold text-white">{results.totalCalendarDays}</p>
                <p className="text-xs text-slate-600 mt-1">working days</p>
              </div>
              <div className="bg-white/[0.04] border border-white/[0.06] rounded-xl p-4 text-center">
                <p className="text-xs text-slate-500 mb-1">Project Value</p>
                <p className="text-2xl font-bold text-indigo-400">{formatCurrency(results.projectValue)}</p>
                <p className="text-xs text-slate-600 mt-1">at ${setup.hourlyRate}/h</p>
              </div>
              <div className="bg-white/[0.04] border border-white/[0.06] rounded-xl p-4 text-center">
                <p className="text-xs text-slate-500 mb-1">Effective Daily Rate</p>
                <p className="text-2xl font-bold text-cyan-400">{formatCurrency(results.effectiveDailyRate)}</p>
                <p className="text-xs text-slate-600 mt-1">per calendar day</p>
              </div>
            </div>

            {/* Hours Breakdown Summary */}
            <div className="mt-4 bg-white/[0.04] border border-white/[0.06] rounded-xl p-4">
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-center text-sm">
                <div>
                  <p className="text-xs text-slate-500">Base Hours</p>
                  <p className="font-bold text-white">{results.totalExpectedHours}h</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500">Buffer ({adjustments.bufferPercent}%)</p>
                  <p className="font-bold text-yellow-400">+{results.bufferHours}h</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500">Revisions ({adjustments.revisionRounds}x)</p>
                  <p className="font-bold text-orange-400">+{results.revisionHours}h</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500">Client Delays</p>
                  <p className="font-bold text-red-400">+{results.clientDelayDays} days</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500">Unavailable</p>
                  <p className="font-bold text-slate-400">+{adjustments.unavailableDays} days</p>
                </div>
              </div>
            </div>
          </div>

          {/* Gantt-style Timeline Chart */}
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white heading-font mb-6">Project Timeline</h3>

            <div className="space-y-3">
              {(() => {
                const maxHours = Math.max(...results.tasks.map((t) => t.expected));
                let cumulativeDays = 0;
                return results.tasks.map((task, i) => {
                  const barWidth = maxHours > 0 ? (task.expected / maxHours) * 100 : 0;
                  const startDay = cumulativeDays;
                  cumulativeDays += task.calendarDays;
                  return (
                    <div key={i} className="group">
                      <div className="flex items-center gap-3 mb-1.5">
                        <span className="text-xs text-slate-500 w-5 text-right flex-shrink-0">{i + 1}.</span>
                        <span className="text-sm text-white font-medium flex-1 truncate">{task.name}</span>
                        <span className="text-xs text-slate-500 flex-shrink-0">
                          {task.expected}h &middot; {task.calendarDays}d
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="w-5 flex-shrink-0" />
                        <div className="flex-1 h-7 bg-white/5 rounded-lg overflow-hidden relative">
                          <div
                            className={`h-full rounded-lg ${GANTT_COLORS[i % GANTT_COLORS.length]} opacity-70 transition-all duration-700`}
                            style={{ width: `${barWidth}%` }}
                          />
                          <div className="absolute inset-0 flex items-center px-2">
                            <span className="text-xs text-white/80 font-medium truncate">
                              Day {startDay + 1}-{startDay + task.calendarDays}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                });
              })()}
            </div>

            {/* Week markers */}
            <div className="mt-6 pt-4 border-t border-white/5">
              <p className="text-xs text-slate-500 font-medium mb-2">Project Weeks</p>
              <div className="flex gap-1 flex-wrap">
                {Array.from({ length: Math.ceil(results.totalCalendarDays / 5) }, (_, i) => (
                  <div
                    key={i}
                    className={`px-2.5 py-1.5 rounded-lg text-xs font-medium ${
                      i < Math.ceil(results.optimisticCalendarDays / 5)
                        ? 'bg-green-400/10 text-green-400 border border-green-400/20'
                        : i < Math.ceil(results.totalCalendarDays / 5) - 1
                          ? 'bg-indigo-400/10 text-indigo-400 border border-indigo-400/20'
                          : 'bg-cyan-400/10 text-cyan-400 border border-cyan-400/20'
                    }`}
                  >
                    W{i + 1}
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-4 mt-2">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded bg-green-400/20 border border-green-400/30" />
                  <span className="text-xs text-slate-500">Optimistic range</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded bg-indigo-400/20 border border-indigo-400/30" />
                  <span className="text-xs text-slate-500">Expected range</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded bg-cyan-400/20 border border-cyan-400/30" />
                  <span className="text-xs text-slate-500">Buffer range</span>
                </div>
              </div>
            </div>
          </div>

          {/* Hours Breakdown by Phase (Horizontal Bar Chart) */}
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white heading-font mb-6">Hours Breakdown by Phase</h3>
            <div className="space-y-4">
              {results.tasks.map((task, i) => {
                const totalWithBufferAndRevisions = results.totalExpectedHours + results.bufferHours + results.revisionHours;
                const percentage = totalWithBufferAndRevisions > 0
                  ? Math.round((task.expected / totalWithBufferAndRevisions) * 100)
                  : 0;
                return (
                  <div key={i}>
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${GANTT_COLORS[i % GANTT_COLORS.length]}`} />
                        <span className="text-sm font-medium text-white">{task.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-slate-300">{task.expected}h</span>
                        <span className="text-xs text-slate-500">({percentage}%)</span>
                      </div>
                    </div>
                    <div className="h-4 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${GANTT_COLORS[i % GANTT_COLORS.length]} opacity-60 transition-all duration-700`}
                        style={{ width: `${Math.max(2, percentage)}%` }}
                      />
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-green-400/60">Best: {task.optimistic}h</span>
                      <span className="text-xs text-slate-600">&middot;</span>
                      <span className="text-xs text-indigo-400/60">Normal: {task.realistic}h</span>
                      <span className="text-xs text-slate-600">&middot;</span>
                      <span className="text-xs text-red-400/60">Worst: {task.pessimistic}h</span>
                      <span className="text-xs text-slate-600">&middot;</span>
                      <span className="text-xs text-slate-500">SD: &plusmn;{task.standardDeviation}h</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Copy & Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={handleCopy}
              className="bg-gradient-to-r from-indigo-400 to-cyan-500 text-white font-semibold rounded-xl px-8 py-4 hover:from-indigo-300 hover:to-cyan-400 transition-all"
            >
              {copied ? 'Copied to Clipboard!' : 'Copy Client Summary'}
            </button>
            <button
              onClick={() => {
                setCalculated(false);
                setStep(1);
              }}
              className="px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-slate-300 font-medium hover:bg-white/10 transition-all"
            >
              Start Over
            </button>
          </div>

          {/* Related Tools */}
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white heading-font mb-4">Related Tools</h3>
            <div className="grid sm:grid-cols-3 gap-3">
              <a
                href="/tools/scope-change-calculator"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-indigo-400/30 rounded-xl p-4 transition-all group"
              >
                <p className="text-white font-medium text-sm group-hover:text-indigo-300 transition-colors">
                  Scope Change Calculator
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Calculate the cost and timeline impact of scope changes
                </p>
              </a>
              <a
                href="/tools/freelance-rate-calculator"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-indigo-400/30 rounded-xl p-4 transition-all group"
              >
                <p className="text-white font-medium text-sm group-hover:text-indigo-300 transition-colors">
                  Freelance Rate Calculator
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Calculate your ideal hourly and project rates
                </p>
              </a>
              <a
                href="/tools/project-profitability-analyzer"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-indigo-400/30 rounded-xl p-4 transition-all group"
              >
                <p className="text-white font-medium text-sm group-hover:text-indigo-300 transition-colors">
                  Project Profitability Analyzer
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Analyze whether a project is worth taking on
                </p>
              </a>
            </div>
          </div>

          <div className="text-center">
            <p className="text-xs text-slate-500 max-w-2xl mx-auto">
              This calculator provides estimates based on PERT three-point estimation methodology.
              Actual project timelines vary based on factors including client responsiveness,
              scope changes, and unforeseen complexity. Use these estimates as a planning tool
              alongside your professional judgement. This is not a contractual commitment.
            </p>
          </div>
        </>
      )}
    </div>
  );
}
