'use client';

import { useState, useMemo, useCallback } from 'react';

function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

type Priority = 'high' | 'medium' | 'low';

interface SavingsGoal {
  id: string;
  name: string;
  target: string;
  current: string;
  priority: Priority;
}

const goalPresets: { label: string; icon: string; target: number }[] = [
  { label: 'Emergency Fund', icon: 'shield', target: 15000 },
  { label: 'New Equipment', icon: 'laptop', target: 3000 },
  { label: 'Holiday', icon: 'plane', target: 5000 },
  { label: 'Home Deposit', icon: 'home', target: 50000 },
  { label: 'Education/Course', icon: 'book', target: 2000 },
  { label: 'Business Investment', icon: 'chart', target: 10000 },
  { label: 'Tax Reserve', icon: 'dollar', target: 8000 },
];

const priorityColors: Record<Priority, { bg: string; border: string; text: string; bar: string; dot: string }> = {
  high: { bg: 'bg-teal-500/10', border: 'border-teal-500/20', text: 'text-teal-400', bar: 'bg-gradient-to-r from-teal-500 to-teal-400', dot: 'bg-teal-400' },
  medium: { bg: 'bg-amber-500/10', border: 'border-amber-500/20', text: 'text-amber-400', bar: 'bg-gradient-to-r from-amber-500 to-amber-400', dot: 'bg-amber-400' },
  low: { bg: 'bg-slate-500/10', border: 'border-slate-500/20', text: 'text-slate-400', bar: 'bg-gradient-to-r from-slate-500 to-slate-400', dot: 'bg-slate-400' },
};

function PresetIcon({ icon }: { icon: string }) {
  switch (icon) {
    case 'shield':
      return (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
        </svg>
      );
    case 'laptop':
      return (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25A2.25 2.25 0 0 1 5.25 3h13.5A2.25 2.25 0 0 1 21 5.25Z" />
        </svg>
      );
    case 'plane':
      return (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
        </svg>
      );
    case 'home':
      return (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
      );
    case 'book':
      return (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
        </svg>
      );
    case 'chart':
      return (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
        </svg>
      );
    case 'dollar':
      return (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      );
    default:
      return null;
  }
}

let idCounter = 0;
function generateId(): string {
  idCounter += 1;
  return `goal-${Date.now()}-${idCounter}`;
}

export default function SavingsGoalClient() {
  const [goals, setGoals] = useState<SavingsGoal[]>([
    { id: generateId(), name: 'Emergency Fund', target: '15000', current: '3000', priority: 'high' },
    { id: generateId(), name: 'New Equipment', target: '3000', current: '500', priority: 'medium' },
  ]);

  const [monthlyIncome, setMonthlyIncome] = useState('8000');
  const [monthlyExpenses, setMonthlyExpenses] = useState('');
  const [expenseRatio, setExpenseRatio] = useState(65);
  const [useAutoExpenses, setUseAutoExpenses] = useState(true);
  const [hourlyRate, setHourlyRate] = useState('100');
  const [avgProjectValue, setAvgProjectValue] = useState('2000');
  const [highPct, setHighPct] = useState(60);
  const [medPct, setMedPct] = useState(30);
  const [lowPct, setLowPct] = useState(10);
  const [copied, setCopied] = useState(false);

  const addGoal = useCallback(() => {
    setGoals(prev => [...prev, {
      id: generateId(),
      name: '',
      target: '',
      current: '0',
      priority: 'medium' as Priority,
    }]);
  }, []);

  const addPreset = useCallback((preset: typeof goalPresets[0]) => {
    const exists = goals.some(g => g.name.toLowerCase() === preset.label.toLowerCase());
    if (exists) return;
    setGoals(prev => [...prev, {
      id: generateId(),
      name: preset.label,
      target: String(preset.target),
      current: '0',
      priority: preset.label === 'Emergency Fund' || preset.label === 'Tax Reserve' ? 'high' as Priority : preset.label === 'Home Deposit' || preset.label === 'Business Investment' ? 'medium' as Priority : 'low' as Priority,
    }]);
  }, [goals]);

  const updateGoal = useCallback((id: string, field: keyof SavingsGoal, value: string) => {
    setGoals(prev => prev.map(g => g.id === id ? { ...g, [field]: value } : g));
  }, []);

  const removeGoal = useCallback((id: string) => {
    setGoals(prev => prev.filter(g => g.id !== id));
  }, []);

  const handleAllocationChange = useCallback((priority: Priority, value: number) => {
    if (priority === 'high') {
      const remaining = 100 - value;
      const medRatio = medPct / (medPct + lowPct) || 0.75;
      setHighPct(value);
      setMedPct(Math.round(remaining * medRatio));
      setLowPct(remaining - Math.round(remaining * medRatio));
    } else if (priority === 'medium') {
      const remaining = 100 - value;
      const highRatio = highPct / (highPct + lowPct) || 0.85;
      setMedPct(value);
      setHighPct(Math.round(remaining * highRatio));
      setLowPct(remaining - Math.round(remaining * highRatio));
    } else {
      const remaining = 100 - value;
      const highRatio = highPct / (highPct + medPct) || 0.67;
      setLowPct(value);
      setHighPct(Math.round(remaining * highRatio));
      setMedPct(remaining - Math.round(remaining * highRatio));
    }
  }, [highPct, medPct, lowPct]);

  const results = useMemo(() => {
    const income = parseFloat(monthlyIncome) || 0;
    if (income <= 0) return null;

    const expenses = useAutoExpenses
      ? income * (expenseRatio / 100)
      : (parseFloat(monthlyExpenses) || 0);

    const monthlySavingsCapacity = Math.max(0, income - expenses);
    if (monthlySavingsCapacity <= 0) return null;

    const rate = parseFloat(hourlyRate) || 0;
    const projectVal = parseFloat(avgProjectValue) || 0;

    // Group goals by priority
    const highGoals = goals.filter(g => g.priority === 'high');
    const medGoals = goals.filter(g => g.priority === 'medium');
    const lowGoals = goals.filter(g => g.priority === 'low');

    // Total allocation by priority
    const highAllocation = monthlySavingsCapacity * (highPct / 100);
    const medAllocation = monthlySavingsCapacity * (medPct / 100);
    const lowAllocation = monthlySavingsCapacity * (lowPct / 100);

    // Per-goal calculations
    const goalResults = goals.map(g => {
      const target = parseFloat(g.target) || 0;
      const current = parseFloat(g.current) || 0;
      const remaining = Math.max(0, target - current);
      const progress = target > 0 ? Math.min(100, (current / target) * 100) : 0;

      // Calculate this goal's monthly allocation
      let priorityPool: number;
      let goalsInPool: number;
      if (g.priority === 'high') {
        priorityPool = highAllocation;
        goalsInPool = highGoals.length;
      } else if (g.priority === 'medium') {
        priorityPool = medAllocation;
        goalsInPool = medGoals.length;
      } else {
        priorityPool = lowAllocation;
        goalsInPool = lowGoals.length;
      }

      // Split equally within the priority tier (proportional to remaining amount)
      const totalRemainingInPool = goals
        .filter(og => og.priority === g.priority)
        .reduce((sum, og) => sum + Math.max(0, (parseFloat(og.target) || 0) - (parseFloat(og.current) || 0)), 0);

      const monthlyAllocation = totalRemainingInPool > 0
        ? priorityPool * (remaining / totalRemainingInPool)
        : goalsInPool > 0
        ? priorityPool / goalsInPool
        : 0;

      const monthsToGoal = monthlyAllocation > 0 ? Math.ceil(remaining / monthlyAllocation) : Infinity;

      const completionDate = new Date();
      if (monthsToGoal !== Infinity && monthsToGoal > 0) {
        completionDate.setMonth(completionDate.getMonth() + monthsToGoal);
      }

      const extraHours = rate > 0 ? remaining / rate : 0;
      const extraProjects = projectVal > 0 ? Math.ceil(remaining / projectVal) : 0;

      // Milestone markers
      const milestones = [25, 50, 75, 100].map(pct => {
        const milestoneAmount = target * (pct / 100);
        const milestoneRemaining = Math.max(0, milestoneAmount - current);
        const milestoneMonths = monthlyAllocation > 0 ? Math.ceil(milestoneRemaining / monthlyAllocation) : Infinity;
        const reached = current >= milestoneAmount;
        return { pct, amount: milestoneAmount, months: milestoneMonths, reached };
      });

      return {
        ...g,
        target,
        current,
        remaining,
        progress,
        monthlyAllocation,
        monthsToGoal,
        completionDate,
        extraHours,
        extraProjects,
        milestones,
      };
    });

    const totalTarget = goalResults.reduce((sum, g) => sum + g.target, 0);
    const totalCurrent = goalResults.reduce((sum, g) => sum + g.current, 0);
    const totalRemaining = goalResults.reduce((sum, g) => sum + g.remaining, 0);
    const maxMonths = goalResults.reduce((max, g) => g.monthsToGoal !== Infinity ? Math.max(max, g.monthsToGoal) : max, 0);
    const overallCompletionDate = new Date();
    if (maxMonths > 0) {
      overallCompletionDate.setMonth(overallCompletionDate.getMonth() + maxMonths);
    }

    return {
      income,
      expenses,
      monthlySavingsCapacity,
      goalResults,
      totalTarget,
      totalCurrent,
      totalRemaining,
      maxMonths,
      overallCompletionDate,
      highAllocation,
      medAllocation,
      lowAllocation,
      rate,
      projectVal,
    };
  }, [goals, monthlyIncome, monthlyExpenses, expenseRatio, useAutoExpenses, hourlyRate, avgProjectValue, highPct, medPct, lowPct]);

  const handleCopy = useCallback(() => {
    if (!results) return;
    const lines = [
      'FREELANCE SAVINGS GOAL PLAN',
      '===========================',
      '',
      `Monthly Income: ${formatCurrency(results.income)}`,
      `Monthly Expenses: ${formatCurrency(results.expenses)}`,
      `Monthly Savings Capacity: ${formatCurrency(results.monthlySavingsCapacity)}`,
      '',
      `Allocation Split: High ${highPct}% | Medium ${medPct}% | Low ${lowPct}%`,
      '',
      'GOALS:',
      ...results.goalResults.map(g => [
        `  ${g.name} [${g.priority.toUpperCase()}]`,
        `    Target: ${formatCurrency(g.target)} | Current: ${formatCurrency(g.current)} | Remaining: ${formatCurrency(g.remaining)}`,
        `    Monthly Allocation: ${formatCurrency(g.monthlyAllocation)}`,
        `    Progress: ${g.progress.toFixed(0)}%`,
        g.monthsToGoal !== Infinity
          ? `    Estimated Completion: ${g.monthsToGoal} months (${g.completionDate.toLocaleDateString('en-AU', { month: 'short', year: 'numeric' })})`
          : '    Estimated Completion: N/A',
        results.rate > 0 ? `    Extra Hours Needed: ${g.extraHours.toFixed(0)} billable hours` : '',
        results.projectVal > 0 ? `    Extra Projects Needed: ${g.extraProjects}` : '',
      ].filter(Boolean).join('\n')).flat(),
      '',
      'SUMMARY:',
      `  Total Goals: ${results.goalResults.length}`,
      `  Total Target: ${formatCurrency(results.totalTarget)}`,
      `  Total Saved: ${formatCurrency(results.totalCurrent)}`,
      `  Total Remaining: ${formatCurrency(results.totalRemaining)}`,
      results.maxMonths > 0
        ? `  All Goals Complete: ${results.maxMonths} months (${results.overallCompletionDate.toLocaleDateString('en-AU', { month: 'short', year: 'numeric' })})`
        : '',
      '',
      'Generated by InvoiceFlow — invoiceflow.au/tools/savings-goal-calculator',
    ];
    navigator.clipboard.writeText(lines.filter(l => l !== undefined).join('\n'));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [results, highPct, medPct, lowPct]);

  const inputClass = 'w-full bg-white/5 border border-white/10 rounded-lg px-3 pl-7 py-2.5 text-white focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/30 outline-none transition-colors';
  const inputClassNoDollar = 'w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-white focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/30 outline-none transition-colors';

  return (
    <div className="space-y-8">
      {/* Goal Presets */}
      <div className="glass rounded-2xl p-6">
        <h3 className="text-lg font-bold text-white heading-font mb-2">Quick Add — Goal Presets</h3>
        <p className="text-xs text-slate-500 mb-4">Click to add a common savings goal with a recommended target amount.</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {goalPresets.map((preset) => {
            const exists = goals.some(g => g.name.toLowerCase() === preset.label.toLowerCase());
            return (
              <button
                key={preset.label}
                onClick={() => addPreset(preset)}
                disabled={exists}
                className={`flex flex-col items-center gap-1.5 p-3 rounded-xl border transition-all text-center ${
                  exists
                    ? 'bg-white/5 border-white/5 text-slate-600 cursor-not-allowed'
                    : 'bg-white/5 hover:bg-white/10 border-white/10 hover:border-teal-500/30 text-slate-300 hover:text-white'
                }`}
              >
                <span className={exists ? 'text-slate-600' : 'text-teal-400'}>
                  <PresetIcon icon={preset.icon} />
                </span>
                <span className="text-xs font-medium leading-tight">{preset.label}</span>
                <span className="text-[10px] text-slate-500">{formatCurrency(preset.target)}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Your Savings Goals */}
      <div className="glass rounded-2xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-white heading-font">Your Savings Goals</h3>
          <button
            onClick={addGoal}
            className="px-3 py-1.5 rounded-lg bg-teal-500/10 hover:bg-teal-500/20 border border-teal-500/20 hover:border-teal-500/40 transition-all text-teal-400 text-sm font-medium"
          >
            + Add Goal
          </button>
        </div>

        {goals.length === 0 && (
          <p className="text-slate-500 text-sm text-center py-8">
            No savings goals added yet. Use the presets above or click &ldquo;Add Goal&rdquo; to get started.
          </p>
        )}

        <div className="space-y-4">
          {goals.map((goal, index) => (
            <div key={goal.id} className={`rounded-xl p-4 border ${priorityColors[goal.priority].bg} ${priorityColors[goal.priority].border}`}>
              <div className="flex items-start justify-between mb-3">
                <span className="text-xs text-slate-500 font-medium">Goal {index + 1}</span>
                <button
                  onClick={() => removeGoal(goal.id)}
                  className="text-slate-600 hover:text-rose-400 transition-colors p-1"
                  aria-label="Remove goal"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="sm:col-span-2">
                  <label className="block text-xs text-slate-400 mb-1">Goal Name</label>
                  <input
                    type="text"
                    value={goal.name}
                    onChange={(e) => updateGoal(goal.id, 'name', e.target.value)}
                    className={inputClassNoDollar}
                    placeholder="e.g., Emergency Fund"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-1">Target Amount</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">$</span>
                    <input
                      type="number"
                      value={goal.target}
                      onChange={(e) => updateGoal(goal.id, 'target', e.target.value)}
                      className={inputClass}
                      placeholder="10000"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-1">Current Savings</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">$</span>
                    <input
                      type="number"
                      value={goal.current}
                      onChange={(e) => updateGoal(goal.id, 'current', e.target.value)}
                      className={inputClass}
                      placeholder="0"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs text-slate-400 mb-1.5">Priority</label>
                  <div className="flex gap-2">
                    {(['high', 'medium', 'low'] as Priority[]).map((p) => (
                      <button
                        key={p}
                        onClick={() => updateGoal(goal.id, 'priority', p)}
                        className={`flex-1 px-3 py-2 rounded-lg text-xs font-medium transition-all capitalize ${
                          goal.priority === p
                            ? `${priorityColors[p].bar} text-white`
                            : 'bg-white/5 text-slate-400 hover:text-white'
                        }`}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Income & Expenses */}
      <div className="glass rounded-2xl p-6">
        <h3 className="text-lg font-bold text-white heading-font mb-4">Income &amp; Expenses</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-slate-300 mb-1.5">Monthly Income (AUD)</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">$</span>
              <input
                type="number"
                value={monthlyIncome}
                onChange={(e) => setMonthlyIncome(e.target.value)}
                className={inputClass}
                placeholder="8000"
              />
            </div>
            <p className="text-xs text-slate-500 mt-1">Average monthly freelance income before tax.</p>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="block text-sm text-slate-300">Monthly Expenses</label>
              <button
                onClick={() => setUseAutoExpenses(!useAutoExpenses)}
                className="text-xs text-teal-400 hover:text-teal-300 transition-colors"
              >
                {useAutoExpenses ? 'Enter manually' : 'Auto-calculate'}
              </button>
            </div>
            {useAutoExpenses ? (
              <div>
                <div className="flex items-center gap-3">
                  <input
                    type="range"
                    min={50}
                    max={90}
                    value={expenseRatio}
                    onChange={(e) => setExpenseRatio(parseInt(e.target.value))}
                    className="flex-1 accent-teal-400"
                  />
                  <span className="text-white font-medium text-sm w-12 text-right">{expenseRatio}%</span>
                </div>
                <div className="flex justify-between mt-1">
                  <p className="text-xs text-slate-500">Expense ratio of income</p>
                  <p className="text-xs text-teal-400 font-medium">
                    {formatCurrency((parseFloat(monthlyIncome) || 0) * (expenseRatio / 100))}/mo
                  </p>
                </div>
              </div>
            ) : (
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">$</span>
                <input
                  type="number"
                  value={monthlyExpenses}
                  onChange={(e) => setMonthlyExpenses(e.target.value)}
                  className={inputClass}
                  placeholder="5200"
                />
              </div>
            )}
          </div>

          <div>
            <label className="block text-sm text-slate-300 mb-1.5">Hourly Rate</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">$</span>
              <input
                type="number"
                value={hourlyRate}
                onChange={(e) => setHourlyRate(e.target.value)}
                className={inputClass}
                placeholder="100"
              />
            </div>
            <p className="text-xs text-slate-500 mt-1">Used to calculate extra billable hours needed.</p>
          </div>

          <div>
            <label className="block text-sm text-slate-300 mb-1.5">Average Project Value</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">$</span>
              <input
                type="number"
                value={avgProjectValue}
                onChange={(e) => setAvgProjectValue(e.target.value)}
                className={inputClass}
                placeholder="2000"
              />
            </div>
            <p className="text-xs text-slate-500 mt-1">Used to calculate extra projects needed per goal.</p>
          </div>
        </div>

        {/* Auto-calculated savings capacity */}
        {(parseFloat(monthlyIncome) || 0) > 0 && (
          <div className="mt-4 bg-teal-500/5 border border-teal-500/20 rounded-xl p-4 flex justify-between items-center">
            <div>
              <span className="text-slate-300 text-sm font-medium">Monthly Savings Capacity</span>
              <p className="text-xs text-slate-500">Income minus expenses — your total available for savings goals</p>
            </div>
            <span className="text-teal-400 font-bold text-xl">
              {formatCurrency(Math.max(0, (parseFloat(monthlyIncome) || 0) - (useAutoExpenses ? (parseFloat(monthlyIncome) || 0) * (expenseRatio / 100) : (parseFloat(monthlyExpenses) || 0))))}
            </span>
          </div>
        )}
      </div>

      {/* Priority Allocation */}
      <div className="glass rounded-2xl p-6">
        <h3 className="text-lg font-bold text-white heading-font mb-2">Priority Allocation</h3>
        <p className="text-xs text-slate-500 mb-4">
          How to split your monthly savings across priority tiers. Adjust the sliders to change the allocation.
        </p>
        <div className="space-y-4">
          {([
            { label: 'High Priority', priority: 'high' as Priority, value: highPct, color: 'teal' },
            { label: 'Medium Priority', priority: 'medium' as Priority, value: medPct, color: 'amber' },
            { label: 'Low Priority', priority: 'low' as Priority, value: lowPct, color: 'slate' },
          ]).map(({ label, priority, value }) => (
            <div key={priority}>
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <div className={`w-2.5 h-2.5 rounded-full ${priorityColors[priority].dot}`} />
                  <span className="text-sm text-slate-300">{label}</span>
                  <span className="text-xs text-slate-500">
                    ({goals.filter(g => g.priority === priority).length} goal{goals.filter(g => g.priority === priority).length !== 1 ? 's' : ''})
                  </span>
                </div>
                <span className={`text-sm font-bold ${priorityColors[priority].text}`}>{value}%</span>
              </div>
              <input
                type="range"
                min={0}
                max={100}
                value={value}
                onChange={(e) => handleAllocationChange(priority, parseInt(e.target.value))}
                className="w-full accent-teal-400"
              />
            </div>
          ))}
          <div className="bg-white/5 rounded-xl p-3">
            <div className="h-4 rounded-full overflow-hidden flex">
              <div className="bg-gradient-to-r from-teal-600 to-teal-400 h-full transition-all duration-300" style={{ width: `${highPct}%` }} />
              <div className="bg-gradient-to-r from-amber-600 to-amber-400 h-full transition-all duration-300" style={{ width: `${medPct}%` }} />
              <div className="bg-gradient-to-r from-slate-600 to-slate-400 h-full transition-all duration-300" style={{ width: `${lowPct}%` }} />
            </div>
            {(highPct + medPct + lowPct) !== 100 && (
              <p className="text-xs text-rose-400 mt-2">
                Allocation totals {highPct + medPct + lowPct}% — should equal 100%.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Results */}
      {results && results.goalResults.length > 0 && (
        <>
          {/* Summary Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="glass rounded-xl p-4 text-center">
              <p className="text-xs text-slate-400 mb-1">Total Goals</p>
              <p className="text-2xl font-bold text-white">{results.goalResults.length}</p>
            </div>
            <div className="glass rounded-xl p-4 text-center">
              <p className="text-xs text-slate-400 mb-1">Total Target</p>
              <p className="text-xl font-bold text-white">{formatCurrency(results.totalTarget)}</p>
            </div>
            <div className="glass rounded-xl p-4 text-center">
              <p className="text-xs text-slate-400 mb-1">Monthly Savings</p>
              <p className="text-xl font-bold text-teal-400">{formatCurrency(results.monthlySavingsCapacity)}</p>
            </div>
            <div className="glass rounded-xl p-4 text-center">
              <p className="text-xs text-slate-400 mb-1">All Goals Complete</p>
              <p className="text-lg font-bold text-white">
                {results.maxMonths > 0
                  ? `${results.maxMonths} mo`
                  : 'N/A'}
              </p>
              {results.maxMonths > 0 && (
                <p className="text-[10px] text-slate-500">
                  {results.overallCompletionDate.toLocaleDateString('en-AU', { month: 'short', year: 'numeric' })}
                </p>
              )}
            </div>
          </div>

          {/* Goal Progress Bars */}
          <div className="glass rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white heading-font mb-4">Goal Progress</h3>
            <div className="space-y-5">
              {results.goalResults.map((g) => (
                <div key={g.id}>
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${priorityColors[g.priority].dot}`} />
                      <span className="text-white text-sm font-medium">{g.name || 'Unnamed Goal'}</span>
                      <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${priorityColors[g.priority].bg} ${priorityColors[g.priority].text} font-medium capitalize`}>
                        {g.priority}
                      </span>
                    </div>
                    <span className="text-slate-400 text-xs">
                      {formatCurrency(g.current)} / {formatCurrency(g.target)}
                    </span>
                  </div>
                  {/* Progress bar with milestones */}
                  <div className="relative">
                    <div className="h-3 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${priorityColors[g.priority].bar}`}
                        style={{ width: `${Math.min(100, g.progress)}%` }}
                      />
                    </div>
                    {/* Milestone markers */}
                    <div className="absolute inset-0 h-3">
                      {[25, 50, 75].map(pct => (
                        <div
                          key={pct}
                          className="absolute top-0 h-full w-px bg-white/20"
                          style={{ left: `${pct}%` }}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between mt-1">
                    <span className={`text-xs font-medium ${priorityColors[g.priority].text}`}>
                      {g.progress.toFixed(0)}% complete
                    </span>
                    <span className="text-xs text-slate-500">
                      {g.monthsToGoal !== Infinity
                        ? `${g.monthsToGoal} months remaining`
                        : 'No allocation'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline Visualization */}
          <div className="glass rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white heading-font mb-4">Goal Timeline</h3>
            <p className="text-xs text-slate-500 mb-4">
              Horizontal bars show when each goal will be reached based on current savings allocation.
            </p>
            <div className="space-y-3">
              {results.goalResults
                .filter(g => g.monthsToGoal !== Infinity && g.monthsToGoal > 0)
                .sort((a, b) => a.monthsToGoal - b.monthsToGoal)
                .map((g) => {
                  const maxDisplay = results.maxMonths || 1;
                  const barWidth = (g.monthsToGoal / maxDisplay) * 100;
                  return (
                    <div key={g.id} className="flex items-center gap-3">
                      <span className="text-xs text-slate-400 w-28 sm:w-36 truncate shrink-0 text-right">
                        {g.name || 'Unnamed'}
                      </span>
                      <div className="flex-1 relative">
                        <div className="h-7 bg-white/5 rounded-lg overflow-hidden">
                          <div
                            className={`h-full rounded-lg transition-all duration-500 flex items-center px-2 ${priorityColors[g.priority].bar}`}
                            style={{ width: `${Math.max(barWidth, 8)}%` }}
                          >
                            <span className="text-[10px] font-medium text-white whitespace-nowrap">
                              {g.monthsToGoal}mo
                            </span>
                          </div>
                        </div>
                        {/* Milestone tick marks */}
                        {g.milestones.filter(m => m.pct < 100 && !m.reached).map(m => {
                          const tickPos = m.months !== Infinity ? (m.months / maxDisplay) * 100 : 0;
                          if (tickPos <= 0 || tickPos > 100) return null;
                          return (
                            <div
                              key={m.pct}
                              className="absolute top-0 h-7 flex items-end"
                              style={{ left: `${tickPos}%` }}
                            >
                              <div className="w-px h-2 bg-white/30" />
                            </div>
                          );
                        })}
                      </div>
                      <span className="text-[10px] text-slate-500 w-16 shrink-0">
                        {g.completionDate.toLocaleDateString('en-AU', { month: 'short', year: '2-digit' })}
                      </span>
                    </div>
                  );
                })}
              {results.goalResults.filter(g => g.monthsToGoal === Infinity || g.monthsToGoal <= 0).length > 0 && (
                <div className="bg-white/5 rounded-lg p-3 mt-2">
                  <p className="text-xs text-slate-500">
                    {results.goalResults.filter(g => g.progress >= 100).length > 0 && (
                      <span className="text-emerald-400">
                        {results.goalResults.filter(g => g.progress >= 100).map(g => g.name || 'Unnamed').join(', ')} already reached.{' '}
                      </span>
                    )}
                    {results.goalResults.filter(g => g.monthsToGoal === Infinity && g.progress < 100).length > 0 && (
                      <span className="text-slate-500">
                        {results.goalResults.filter(g => g.monthsToGoal === Infinity && g.progress < 100).map(g => g.name || 'Unnamed').join(', ')} — no allocation in this priority tier.
                      </span>
                    )}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Savings Allocation Breakdown */}
          <div className="glass rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white heading-font mb-4">Monthly Savings Allocation</h3>
            <div className="space-y-2">
              {results.goalResults.filter(g => g.monthlyAllocation > 0).map((g) => {
                const pct = results.monthlySavingsCapacity > 0
                  ? (g.monthlyAllocation / results.monthlySavingsCapacity) * 100
                  : 0;
                return (
                  <div key={g.id}>
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${priorityColors[g.priority].dot}`} />
                        <span className="text-sm text-slate-300">{g.name || 'Unnamed'}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-slate-500">{pct.toFixed(1)}%</span>
                        <span className="text-sm text-white font-medium">{formatCurrency(g.monthlyAllocation)}</span>
                      </div>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-300 ${priorityColors[g.priority].bar}`}
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                );
              })}
              <div className="flex justify-between pt-3 mt-2 border-t border-white/10">
                <span className="text-white font-medium text-sm">Total Monthly Savings</span>
                <span className="text-teal-400 font-bold">{formatCurrency(results.monthlySavingsCapacity)}</span>
              </div>
            </div>

            {/* Visual allocation bar */}
            <div className="mt-4 bg-white/5 rounded-xl p-3">
              <div className="h-6 rounded-full overflow-hidden flex">
                {results.goalResults.filter(g => g.monthlyAllocation > 0).map((g) => {
                  const pct = results.monthlySavingsCapacity > 0
                    ? (g.monthlyAllocation / results.monthlySavingsCapacity) * 100
                    : 0;
                  return (
                    <div
                      key={g.id}
                      className={`h-full transition-all duration-300 ${priorityColors[g.priority].bar} border-r border-white/10 last:border-r-0 flex items-center justify-center`}
                      style={{ width: `${pct}%` }}
                      title={`${g.name}: ${formatCurrency(g.monthlyAllocation)}/mo`}
                    >
                      {pct >= 12 && (
                        <span className="text-[10px] font-medium text-white truncate px-1">{g.name}</span>
                      )}
                    </div>
                  );
                })}
              </div>
              <div className="flex flex-wrap gap-3 mt-2">
                {results.goalResults.filter(g => g.monthlyAllocation > 0).map((g) => (
                  <div key={g.id} className="flex items-center gap-1.5">
                    <div className={`w-2.5 h-2.5 rounded-sm ${priorityColors[g.priority].dot}`} />
                    <span className="text-[10px] text-slate-400">{g.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Extra Hours Panel */}
          {results.rate > 0 && (
            <div className="glass rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white heading-font mb-2">Extra Billable Hours</h3>
              <p className="text-xs text-slate-500 mb-4">
                How many extra hours or projects you would need to complete to reach each goal immediately, at your current rates.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {results.goalResults.filter(g => g.remaining > 0).map((g) => (
                  <div key={g.id} className={`rounded-xl p-4 border ${priorityColors[g.priority].bg} ${priorityColors[g.priority].border}`}>
                    <div className="flex items-center gap-2 mb-2">
                      <div className={`w-2 h-2 rounded-full ${priorityColors[g.priority].dot}`} />
                      <span className="text-white text-sm font-medium">{g.name || 'Unnamed'}</span>
                    </div>
                    <div className="space-y-1.5">
                      <div className="flex justify-between">
                        <span className="text-xs text-slate-400">Remaining</span>
                        <span className="text-xs text-white font-medium">{formatCurrency(g.remaining)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-xs text-slate-400">Extra Hours</span>
                        <span className={`text-xs font-medium ${priorityColors[g.priority].text}`}>
                          {g.extraHours.toFixed(0)} hrs @ {formatCurrency(results.rate)}/hr
                        </span>
                      </div>
                      {results.projectVal > 0 && (
                        <div className="flex justify-between">
                          <span className="text-xs text-slate-400">Extra Projects</span>
                          <span className={`text-xs font-medium ${priorityColors[g.priority].text}`}>
                            {g.extraProjects} @ {formatCurrency(results.projectVal)}/ea
                          </span>
                        </div>
                      )}
                      {g.monthsToGoal !== Infinity && g.monthsToGoal > 3 && (
                        <div className="mt-2 bg-white/5 rounded-lg p-2">
                          <p className="text-[10px] text-slate-400">
                            To reach this goal <span className="text-white font-medium">3 months faster</span>, work{' '}
                            <span className={`font-medium ${priorityColors[g.priority].text}`}>
                              {(g.remaining / (g.monthsToGoal - 3) - g.monthlyAllocation > 0
                                ? (g.remaining / (g.monthsToGoal - 3) - g.monthlyAllocation) / results.rate
                                : 0
                              ).toFixed(1)} extra hours/month
                            </span>
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Detailed Goal Breakdown */}
          <div className="glass rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white heading-font mb-4">Milestone Breakdown</h3>
            <div className="space-y-6">
              {results.goalResults.map((g) => (
                <div key={g.id}>
                  <div className="flex items-center gap-2 mb-3">
                    <div className={`w-2.5 h-2.5 rounded-full ${priorityColors[g.priority].dot}`} />
                    <span className="text-white font-medium">{g.name || 'Unnamed'}</span>
                    <span className="text-xs text-slate-500">({formatCurrency(g.monthlyAllocation)}/mo)</span>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {g.milestones.map((m) => (
                      <div
                        key={m.pct}
                        className={`rounded-lg p-2.5 text-center border transition-all ${
                          m.reached
                            ? 'bg-emerald-500/10 border-emerald-500/20'
                            : 'bg-white/5 border-white/5'
                        }`}
                      >
                        <p className={`text-xs font-bold ${m.reached ? 'text-emerald-400' : 'text-slate-400'}`}>
                          {m.pct}%
                        </p>
                        <p className="text-[10px] text-slate-500">
                          {formatCurrency(m.amount)}
                        </p>
                        <p className={`text-[10px] mt-0.5 ${m.reached ? 'text-emerald-400' : 'text-slate-500'}`}>
                          {m.reached
                            ? 'Reached'
                            : m.months !== Infinity
                            ? `${m.months}mo`
                            : '---'}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Related Tools */}
          <div className="glass rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white heading-font mb-4">Related Tools</h3>
            <div className="grid sm:grid-cols-3 gap-3">
              <a
                href="/tools/budget-planner"
                className="rounded-xl p-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-500/30 transition-all group"
              >
                <p className="text-white font-medium text-sm group-hover:text-teal-400 transition-colors">Budget Planner</p>
                <p className="text-xs text-slate-500 mt-1">Plan your monthly freelance budget with irregular income.</p>
              </a>
              <a
                href="/tools/revenue-goal-planner"
                className="rounded-xl p-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-500/30 transition-all group"
              >
                <p className="text-white font-medium text-sm group-hover:text-teal-400 transition-colors">Revenue Goal Planner</p>
                <p className="text-xs text-slate-500 mt-1">Set and track your freelance revenue targets.</p>
              </a>
              <a
                href="/tools/net-income-calculator"
                className="rounded-xl p-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-500/30 transition-all group"
              >
                <p className="text-white font-medium text-sm group-hover:text-teal-400 transition-colors">Net Income Calculator</p>
                <p className="text-xs text-slate-500 mt-1">Calculate your take-home pay after tax and expenses.</p>
              </a>
            </div>
          </div>

          {/* Copy Button */}
          <div className="flex justify-center">
            <button
              onClick={handleCopy}
              className="px-6 py-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-500/30 transition-all text-white font-medium"
            >
              {copied ? 'Copied!' : 'Copy Savings Plan to Clipboard'}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
