'use client';

import { useState, useMemo } from 'react';

interface Factor {
  id: string;
  question: string;
  description: string;
  category: 'control' | 'financial' | 'independence';
  contractorAnswer: boolean; // true = contractor-leaning, false = employee-leaning
}

const factors: Factor[] = [
  // Control factors
  {
    id: 'hours',
    question: 'Do you set your own working hours?',
    description: 'You decide when and how many hours to work, not the client.',
    category: 'control',
    contractorAnswer: true,
  },
  {
    id: 'location',
    question: 'Can you choose where you work?',
    description: 'You can work from home, your office, or anywhere — not required to be at the client\'s premises.',
    category: 'control',
    contractorAnswer: true,
  },
  {
    id: 'howWork',
    question: 'Do you control how the work is done?',
    description: 'You decide the methods and processes, not just the end result the client wants.',
    category: 'control',
    contractorAnswer: true,
  },
  {
    id: 'delegation',
    question: 'Can you delegate or subcontract the work?',
    description: 'You can hire others to do the work (or parts of it) without the client\'s specific approval.',
    category: 'control',
    contractorAnswer: true,
  },
  {
    id: 'direction',
    question: 'Is the work directed by you (not the client)?',
    description: 'The client specifies the result, but you determine the tasks and sequence to get there.',
    category: 'control',
    contractorAnswer: true,
  },
  // Financial factors
  {
    id: 'tools',
    question: 'Do you provide your own tools and equipment?',
    description: 'You supply your own laptop, software, tools — not using the client\'s equipment.',
    category: 'financial',
    contractorAnswer: true,
  },
  {
    id: 'risk',
    question: 'Do you bear financial risk for the work?',
    description: 'If the work is defective, you fix it at your own cost. You risk making a loss.',
    category: 'financial',
    contractorAnswer: true,
  },
  {
    id: 'invoicing',
    question: 'Do you invoice for your work (not receive a payslip)?',
    description: 'You send invoices and the client pays them — not paid via the client\'s payroll.',
    category: 'financial',
    contractorAnswer: true,
  },
  {
    id: 'gst',
    question: 'Are you registered for GST (or above the $75K threshold)?',
    description: 'You have your own ABN and GST registration separate from the client.',
    category: 'financial',
    contractorAnswer: true,
  },
  {
    id: 'expenses',
    question: 'Do you pay your own business expenses?',
    description: 'You cover insurance, training, marketing, and other business costs yourself.',
    category: 'financial',
    contractorAnswer: true,
  },
  // Independence factors
  {
    id: 'multiClient',
    question: 'Do you (or can you) work for multiple clients?',
    description: 'You\'re free to take on other clients — not exclusively tied to one business.',
    category: 'independence',
    contractorAnswer: true,
  },
  {
    id: 'abn',
    question: 'Do you have your own ABN?',
    description: 'You operate under your own Australian Business Number.',
    category: 'independence',
    contractorAnswer: true,
  },
  {
    id: 'leave',
    question: 'Do you NOT receive paid leave from this client?',
    description: 'You don\'t get annual leave, sick leave, or public holiday pay from the client.',
    category: 'independence',
    contractorAnswer: true,
  },
  {
    id: 'super',
    question: 'Does the client NOT pay your superannuation?',
    description: 'You manage your own super contributions — the client doesn\'t contribute.',
    category: 'independence',
    contractorAnswer: true,
  },
  {
    id: 'termination',
    question: 'Can the contract end by completing the work (not by "firing")?',
    description: 'The arrangement ends when the project or contract period is complete.',
    category: 'independence',
    contractorAnswer: true,
  },
];

const categoryLabels: Record<string, string> = {
  control: 'Control & Direction',
  financial: 'Financial Arrangements',
  independence: 'Independence & Structure',
};

const categoryColors: Record<string, string> = {
  control: 'from-blue-400 to-cyan-500',
  financial: 'from-emerald-400 to-teal-500',
  independence: 'from-violet-400 to-purple-500',
};

export default function ContractorEmployeeCalculator() {
  const [answers, setAnswers] = useState<Record<string, boolean | null>>({});

  const toggleAnswer = (id: string, value: boolean) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  };

  const answeredCount = Object.values(answers).filter((v) => v !== null && v !== undefined).length;
  const totalQuestions = factors.length;

  const result = useMemo(() => {
    if (answeredCount < 8) return null; // need at least 8 answers

    let contractorScore = 0;
    let employeeScore = 0;

    const categoryScores: Record<string, { contractor: number; employee: number; total: number }> = {
      control: { contractor: 0, employee: 0, total: 0 },
      financial: { contractor: 0, employee: 0, total: 0 },
      independence: { contractor: 0, employee: 0, total: 0 },
    };

    for (const factor of factors) {
      const answer = answers[factor.id];
      if (answer === null || answer === undefined) continue;

      const isContractor = answer === factor.contractorAnswer;
      if (isContractor) {
        contractorScore++;
        categoryScores[factor.category].contractor++;
      } else {
        employeeScore++;
        categoryScores[factor.category].employee++;
      }
      categoryScores[factor.category].total++;
    }

    const total = contractorScore + employeeScore;
    const contractorPercent = total > 0 ? Math.round((contractorScore / total) * 100) : 0;

    let classification: 'contractor' | 'employee' | 'borderline';
    if (contractorPercent >= 70) classification = 'contractor';
    else if (contractorPercent <= 30) classification = 'employee';
    else classification = 'borderline';

    return {
      contractorScore,
      employeeScore,
      contractorPercent,
      employeePercent: 100 - contractorPercent,
      classification,
      categoryScores,
    };
  }, [answers, answeredCount]);

  return (
    <div className="space-y-8">
      {/* Progress */}
      <div className="glass rounded-2xl p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium text-slate-300">
            Questions answered: {answeredCount} / {totalQuestions}
          </span>
          {answeredCount >= 8 && (
            <span className="text-xs px-2 py-1 rounded-full bg-emerald-500/20 text-emerald-400">
              Ready to assess
            </span>
          )}
        </div>
        <div className="h-2 bg-white/5 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-teal-500 to-blue-500 rounded-full transition-all duration-500"
            style={{ width: `${(answeredCount / totalQuestions) * 100}%` }}
          />
        </div>
        <p className="text-xs text-slate-500 mt-2">
          Answer at least 8 questions for an assessment. More answers = more accurate result.
        </p>
      </div>

      {/* Questions by Category */}
      {(['control', 'financial', 'independence'] as const).map((category) => (
        <div key={category}>
          <div className="flex items-center gap-3 mb-4">
            <div className={`h-8 w-8 rounded-lg bg-gradient-to-br ${categoryColors[category]} flex items-center justify-center text-white text-sm font-bold`}>
              {category === 'control' ? '1' : category === 'financial' ? '2' : '3'}
            </div>
            <h3 className="text-lg font-bold text-white heading-font">
              {categoryLabels[category]}
            </h3>
          </div>
          <div className="space-y-3">
            {factors
              .filter((f) => f.category === category)
              .map((factor) => (
                <div
                  key={factor.id}
                  className="glass rounded-xl p-4 border border-transparent hover:border-white/10 transition-colors"
                >
                  <p className="text-white font-medium mb-1">{factor.question}</p>
                  <p className="text-sm text-slate-400 mb-3">{factor.description}</p>
                  <div className="flex gap-3">
                    <button
                      onClick={() => toggleAnswer(factor.id, true)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        answers[factor.id] === true
                          ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                          : 'bg-white/5 text-slate-400 hover:bg-white/10 border border-transparent'
                      }`}
                    >
                      Yes
                    </button>
                    <button
                      onClick={() => toggleAnswer(factor.id, false)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        answers[factor.id] === false
                          ? 'bg-rose-500/20 text-rose-400 border border-rose-500/30'
                          : 'bg-white/5 text-slate-400 hover:bg-white/10 border border-transparent'
                      }`}
                    >
                      No
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}

      {/* Result */}
      {result && (
        <div className="glass rounded-2xl p-8 border border-teal-500/20">
          <h3 className="text-2xl font-bold text-white heading-font mb-2">Assessment Result</h3>
          <p className="text-sm text-slate-400 mb-6">
            Based on {answeredCount} of {totalQuestions} ATO multi-factor test indicators
          </p>

          {/* Main Result */}
          <div className={`rounded-xl p-6 mb-6 ${
            result.classification === 'contractor'
              ? 'bg-emerald-500/10 border border-emerald-500/20'
              : result.classification === 'employee'
              ? 'bg-blue-500/10 border border-blue-500/20'
              : 'bg-amber-500/10 border border-amber-500/20'
          }`}>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-3xl">
                {result.classification === 'contractor' ? '✅' : result.classification === 'employee' ? '👔' : '⚠️'}
              </span>
              <div>
                <p className={`text-xl font-bold heading-font ${
                  result.classification === 'contractor'
                    ? 'text-emerald-400'
                    : result.classification === 'employee'
                    ? 'text-blue-400'
                    : 'text-amber-400'
                }`}>
                  {result.classification === 'contractor'
                    ? 'Likely an Independent Contractor'
                    : result.classification === 'employee'
                    ? 'Likely an Employee'
                    : 'Borderline — Seek Professional Advice'}
                </p>
                <p className="text-sm text-slate-400">
                  {result.contractorPercent}% contractor indicators / {result.employeePercent}% employee indicators
                </p>
              </div>
            </div>
          </div>

          {/* Score Bar */}
          <div className="mb-6">
            <div className="flex justify-between text-xs text-slate-400 mb-2">
              <span>Employee ({result.employeeScore})</span>
              <span>Contractor ({result.contractorScore})</span>
            </div>
            <div className="h-4 bg-white/5 rounded-full overflow-hidden flex">
              <div
                className="h-full bg-gradient-to-r from-blue-500 to-blue-400 transition-all duration-700"
                style={{ width: `${result.employeePercent}%` }}
              />
              <div
                className="h-full bg-gradient-to-r from-emerald-400 to-emerald-500 transition-all duration-700"
                style={{ width: `${result.contractorPercent}%` }}
              />
            </div>
          </div>

          {/* Category Breakdown */}
          <div className="grid sm:grid-cols-3 gap-4 mb-6">
            {(['control', 'financial', 'independence'] as const).map((cat) => {
              const score = result.categoryScores[cat];
              if (score.total === 0) return null;
              const pct = Math.round((score.contractor / score.total) * 100);
              return (
                <div key={cat} className="bg-white/5 rounded-xl p-4">
                  <p className="text-xs text-slate-400 mb-1">{categoryLabels[cat]}</p>
                  <p className="text-lg font-bold text-white">{pct}% contractor</p>
                  <div className="h-1.5 bg-white/5 rounded-full overflow-hidden mt-2">
                    <div
                      className={`h-full bg-gradient-to-r ${categoryColors[cat]} rounded-full transition-all`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <p className="text-xs text-slate-500 mt-1">
                    {score.contractor}/{score.total} contractor indicators
                  </p>
                </div>
              );
            })}
          </div>

          {/* Disclaimer */}
          <div className="bg-amber-500/5 border border-amber-500/20 rounded-xl p-4">
            <p className="text-sm text-amber-200/80">
              <strong className="text-amber-400">Important:</strong> This tool provides general guidance
              based on ATO multi-factor test indicators. It is not legal or tax advice. Worker
              classification depends on the totality of the working arrangement, not just individual
              factors. Always consult a qualified tax professional or the ATO for definitive guidance.
              Incorrect classification can result in penalties for both workers and businesses.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
