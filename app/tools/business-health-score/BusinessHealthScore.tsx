'use client';

import { useState, useMemo } from 'react';

interface Question {
  id: string;
  category: string;
  label: string;
  options: { label: string; score: number; description: string }[];
}

const QUESTIONS: Question[] = [
  {
    id: 'income',
    category: 'Income Stability',
    label: 'How predictable is your monthly income?',
    options: [
      { label: 'Very unpredictable', score: 3, description: 'Varies wildly month to month, no recurring revenue' },
      { label: 'Somewhat unpredictable', score: 8, description: 'Mostly project-based, some repeat clients' },
      { label: 'Fairly stable', score: 14, description: 'Mix of projects and retainers, moderate variation' },
      { label: 'Very stable', score: 17, description: 'Mostly retainers or long-term contracts, predictable' },
    ],
  },
  {
    id: 'clients',
    category: 'Client Diversification',
    label: 'What percentage of your revenue comes from your largest single client?',
    options: [
      { label: 'Over 50%', score: 3, description: 'One client dominates — very high risk if they leave' },
      { label: '30-50%', score: 8, description: 'Concentrated but not critical — still risky' },
      { label: '15-30%', score: 14, description: 'Reasonably diversified across several clients' },
      { label: 'Under 15%', score: 17, description: 'Well diversified — no single client can sink you' },
    ],
  },
  {
    id: 'pricing',
    category: 'Pricing Power',
    label: 'When did you last raise your rates?',
    options: [
      { label: 'Never / 2+ years ago', score: 3, description: 'Rates are stale — you\'re losing money to inflation' },
      { label: '12-24 months ago', score: 8, description: 'Due for a review — market rates have likely moved' },
      { label: '6-12 months ago', score: 14, description: 'Fairly current — keep reviewing annually' },
      { label: 'Within 6 months', score: 17, description: 'Actively managing your pricing — strong position' },
    ],
  },
  {
    id: 'reserves',
    category: 'Financial Reserves',
    label: 'How many months of expenses could you cover with zero new income?',
    options: [
      { label: 'Less than 1 month', score: 3, description: 'Living invoice to invoice — very fragile' },
      { label: '1-2 months', score: 8, description: 'Thin buffer — one slow month causes stress' },
      { label: '3-5 months', score: 14, description: 'Solid buffer — can weather a slow quarter' },
      { label: '6+ months', score: 17, description: 'Strong reserves — you can make decisions from strength' },
    ],
  },
  {
    id: 'cashflow',
    category: 'Cash Flow Health',
    label: 'How quickly do your clients typically pay invoices?',
    options: [
      { label: '60+ days or often chase', score: 3, description: 'Constantly chasing payments — draining your time and cash' },
      { label: '30-60 days', score: 8, description: 'Standard but slow — impacts your cash position' },
      { label: '14-30 days', score: 14, description: 'Good payment discipline from clients' },
      { label: 'Under 14 days or upfront', score: 17, description: 'Excellent — cash comes in fast, minimal chasing' },
    ],
  },
  {
    id: 'growth',
    category: 'Growth Trajectory',
    label: 'How has your revenue changed in the last 12 months?',
    options: [
      { label: 'Declined significantly', score: 3, description: 'Down 20%+ — urgent action needed' },
      { label: 'Flat or slight decline', score: 8, description: 'Stagnant — not growing, not shrinking' },
      { label: 'Moderate growth (5-20%)', score: 14, description: 'Healthy growth — building momentum' },
      { label: 'Strong growth (20%+)', score: 17, description: 'Rapid growth — focus on sustainability' },
    ],
  },
];

function getOverallGrade(score: number): { label: string; color: string; bgColor: string; borderColor: string } {
  if (score >= 80) return { label: 'Excellent', color: 'text-emerald-400', bgColor: 'from-emerald-500/20 to-teal-500/20', borderColor: 'border-emerald-500/30' };
  if (score >= 60) return { label: 'Good', color: 'text-teal-400', bgColor: 'from-teal-500/20 to-blue-500/20', borderColor: 'border-teal-500/30' };
  if (score >= 40) return { label: 'Fair', color: 'text-amber-400', bgColor: 'from-amber-500/20 to-orange-500/20', borderColor: 'border-amber-500/30' };
  return { label: 'Needs Work', color: 'text-rose-400', bgColor: 'from-rose-500/20 to-pink-500/20', borderColor: 'border-rose-500/30' };
}

function getCategoryColor(score: number): string {
  if (score >= 14) return 'text-teal-400';
  if (score >= 8) return 'text-amber-400';
  return 'text-rose-400';
}

function getCategoryBarColor(score: number): string {
  if (score >= 14) return 'bg-gradient-to-r from-teal-500 to-blue-500';
  if (score >= 8) return 'bg-gradient-to-r from-amber-500 to-orange-500';
  return 'bg-gradient-to-r from-rose-500 to-pink-500';
}

function getRecommendation(id: string, score: number): string | null {
  if (score >= 14) return null; // Good or excellent — no reco needed
  const recos: Record<string, Record<number, string>> = {
    income: {
      3: 'Your income is too volatile. Pursue 1-2 retainer clients to create a predictable base. Even $2-3K/month in retainers transforms your stability.',
      8: 'You have some stability but it\'s project-dependent. Aim to convert your best repeat clients into monthly retainer agreements.',
    },
    clients: {
      3: 'Dangerous client concentration. If your top client leaves, you\'re in trouble. Immediately start pursuing 2-3 new clients to reduce this risk.',
      8: 'Your largest client is still too dominant. Set a goal to bring them below 25% of total revenue within 6 months by growing other accounts.',
    },
    pricing: {
      3: 'Your rates are outdated. Research current market rates for your skill level and raise by at least 15-20%. Start with new clients, then existing.',
      8: 'You\'re overdue for a rate review. Inflation alone means you\'ve taken a real pay cut. Schedule rate increases for all clients this quarter.',
    },
    reserves: {
      3: 'You\'re one bad month from crisis. Start saving 10-15% of every invoice immediately. Open a separate high-interest savings account today.',
      8: 'Your buffer is thin. Build toward 3 months of expenses. Automate a weekly transfer to a savings account — even $200/week adds up fast.',
    },
    cashflow: {
      3: 'Slow-paying clients are draining your business. Switch to Net 14 terms, require 50% deposits, and automate payment reminders from day one.',
      8: 'Tighten your payment terms. Move new clients to Net 14. Add early payment discounts (2% for payment within 7 days) to incentivise faster payment.',
    },
    growth: {
      3: 'Revenue decline is a red flag. Audit your client pipeline — are you losing clients? Not marketing enough? Consider a new service offering or market.',
      8: 'Flat revenue means you\'re falling behind (costs always rise). Set a 15% growth target and identify 2-3 specific actions to get there.',
    },
  };
  return recos[id]?.[score] || null;
}

export default function BusinessHealthScore() {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [copied, setCopied] = useState(false);

  const allAnswered = QUESTIONS.every((q) => answers[q.id] !== undefined);

  const results = useMemo(() => {
    if (!allAnswered) return null;

    const totalScore = Object.values(answers).reduce((sum, v) => sum + v, 0);
    const maxScore = QUESTIONS.length * 17;
    const normalizedScore = Math.round((totalScore / maxScore) * 100);
    const grade = getOverallGrade(normalizedScore);

    const categories = QUESTIONS.map((q) => ({
      id: q.id,
      category: q.category,
      score: answers[q.id] || 0,
      maxScore: 17,
      pct: Math.round(((answers[q.id] || 0) / 17) * 100),
      recommendation: getRecommendation(q.id, answers[q.id] || 0),
    }));

    // Weakest areas (sorted ascending)
    const weakAreas = [...categories].sort((a, b) => a.score - b.score).filter((c) => c.score < 14);

    return {
      totalScore: normalizedScore,
      grade,
      categories,
      weakAreas,
      strongAreas: categories.filter((c) => c.score >= 14),
    };
  }, [answers, allAnswered]);

  const handleCopy = () => {
    if (!results) return;
    const lines = [
      'Freelance Business Health Score — InvoiceFlow',
      '================================================',
      '',
      `Overall Score: ${results.totalScore}/100 (${results.grade.label})`,
      '',
      '--- Category Scores ---',
    ];
    results.categories.forEach((c) => {
      lines.push(`${c.category}: ${c.pct}% (${c.score}/${c.maxScore})`);
    });
    if (results.weakAreas.length > 0) {
      lines.push('');
      lines.push('--- Recommendations ---');
      results.weakAreas.forEach((c) => {
        if (c.recommendation) {
          lines.push(`${c.category}: ${c.recommendation}`);
        }
      });
    }
    lines.push('');
    lines.push('Generated at invoiceflow.au/tools/business-health-score');

    navigator.clipboard.writeText(lines.join('\n')).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="space-y-8">
      {/* Questions */}
      <div className="glass rounded-2xl p-6 sm:p-8 space-y-8">
        <h2 className="text-xl font-bold text-white heading-font">Your Business Assessment</h2>
        <p className="text-sm text-slate-400">
          Answer each question honestly. The more accurate your answers, the more useful your
          recommendations will be. Your data stays in your browser — nothing is sent to a server.
        </p>

        <div className="space-y-8">
          {QUESTIONS.map((q, qIdx) => (
            <div key={q.id}>
              <div className="flex items-center gap-2 mb-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/10 text-xs text-slate-400 font-medium">
                  {qIdx + 1}
                </span>
                <span className="text-xs text-teal-400 uppercase tracking-wide font-medium">
                  {q.category}
                </span>
              </div>
              <h3 className="text-white font-semibold mb-3">{q.label}</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {q.options.map((opt) => {
                  const isSelected = answers[q.id] === opt.score;
                  return (
                    <button
                      key={opt.score}
                      onClick={() => setAnswers({ ...answers, [q.id]: opt.score })}
                      className={`text-left p-4 rounded-xl border transition-all ${
                        isSelected
                          ? 'bg-teal-500/10 border-teal-500/30 ring-1 ring-teal-400/20'
                          : 'bg-white/5 border-white/10 hover:bg-white/[0.08] hover:border-white/20'
                      }`}
                    >
                      <p className={`text-sm font-medium ${isSelected ? 'text-teal-400' : 'text-white'}`}>
                        {opt.label}
                      </p>
                      <p className="text-xs text-slate-500 mt-1">{opt.description}</p>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Results — only show when all answered */}
      {results && (
        <>
          {/* Overall Score */}
          <div className={`glass rounded-2xl p-6 sm:p-8 bg-gradient-to-br ${results.grade.bgColor} border ${results.grade.borderColor}`}>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-white heading-font">Your Health Score</h2>
              <button
                onClick={handleCopy}
                className="flex items-center gap-2 text-sm px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all"
              >
                {copied ? <span className="text-emerald-400">Copied</span> : <>Copy Results</>}
              </button>
            </div>
            <div className="text-center py-6">
              <p className={`text-7xl sm:text-8xl font-bold ${results.grade.color}`}>
                {results.totalScore}
              </p>
              <p className="text-slate-400 text-lg mt-2">out of 100</p>
              <p className={`text-xl font-semibold ${results.grade.color} mt-1`}>
                {results.grade.label}
              </p>
            </div>
          </div>

          {/* Category Breakdown */}
          <div className="glass rounded-2xl p-6 sm:p-8 space-y-6">
            <h2 className="text-xl font-bold text-white heading-font">Category Breakdown</h2>
            <div className="space-y-4">
              {results.categories.map((c) => (
                <div key={c.id}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-sm font-medium text-white">{c.category}</span>
                    <span className={`text-sm font-bold ${getCategoryColor(c.score)}`}>{c.pct}%</span>
                  </div>
                  <div className="w-full bg-white/5 rounded-full h-3">
                    <div
                      className={`h-3 rounded-full transition-all duration-700 ${getCategoryBarColor(c.score)}`}
                      style={{ width: `${Math.max(c.pct, 2)}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recommendations */}
          {results.weakAreas.length > 0 && (
            <div className="glass rounded-2xl p-6 sm:p-8 space-y-6">
              <h2 className="text-xl font-bold text-white heading-font">Recommendations</h2>
              <p className="text-sm text-slate-400">
                Focus on these areas first — they&apos;re your biggest opportunities for improvement.
              </p>
              <div className="space-y-4">
                {results.weakAreas.map((area) => {
                  if (!area.recommendation) return null;
                  const isUrgent = area.score <= 3;
                  return (
                    <div
                      key={area.id}
                      className={`rounded-xl p-5 border ${
                        isUrgent
                          ? 'bg-rose-500/10 border-rose-500/20'
                          : 'bg-amber-500/10 border-amber-500/20'
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`text-xs font-medium uppercase tracking-wide ${isUrgent ? 'text-rose-400' : 'text-amber-400'}`}>
                          {isUrgent ? 'Urgent' : 'Improve'}
                        </span>
                        <span className="text-white font-semibold text-sm">{area.category}</span>
                      </div>
                      <p className="text-sm text-slate-300">{area.recommendation}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Strong Areas */}
          {results.strongAreas.length > 0 && (
            <div className="glass rounded-2xl p-6 sm:p-8 space-y-4">
              <h2 className="text-xl font-bold text-white heading-font">Your Strengths</h2>
              <div className="flex flex-wrap gap-3">
                {results.strongAreas.map((area) => (
                  <div
                    key={area.id}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20"
                  >
                    <div className="w-2 h-2 bg-teal-400 rounded-full" />
                    <span className="text-teal-400 text-sm font-medium">{area.category}</span>
                    <span className="text-slate-500 text-xs">{area.pct}%</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )}

      {/* Not yet answered */}
      {!allAnswered && (
        <div className="glass rounded-2xl p-8 text-center">
          <p className="text-slate-400">
            Answer all 6 questions above to see your health score and personalised recommendations.
          </p>
          <p className="text-sm text-slate-500 mt-2">
            {QUESTIONS.filter((q) => answers[q.id] !== undefined).length} of {QUESTIONS.length} answered
          </p>
        </div>
      )}
    </div>
  );
}
