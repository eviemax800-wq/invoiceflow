'use client';

import { useState, useRef, useMemo, useCallback } from 'react';

/* ─── Types ────────────────────────────────────────────────────────────────── */

interface Question {
  id: string;
  label: string;
  helper: string;
  lowLabel: string;
  highLabel: string;
}

interface Section {
  id: string;
  title: string;
  icon: string;
  questions: Question[];
}

/* ─── Data ─────────────────────────────────────────────────────────────────── */

const SECTIONS: Section[] = [
  {
    id: 'revenue',
    title: 'Revenue Stability',
    icon: '$',
    questions: [
      {
        id: 'rev_consistency',
        label: 'How consistent is your monthly income?',
        helper: 'Think about your income variation over the past 6-12 months.',
        lowLabel: 'Very inconsistent',
        highLabel: 'Very consistent',
      },
      {
        id: 'rev_diversified',
        label: 'Do you have revenue from multiple sources or clients?',
        helper: 'Consider how spread your income is across different clients or revenue streams.',
        lowLabel: 'Single client',
        highLabel: 'Well diversified',
      },
      {
        id: 'rev_growth',
        label: 'Is your revenue growing year over year?',
        helper: 'Compare your last 12 months of revenue to the 12 months before that.',
        lowLabel: 'Declining',
        highLabel: 'Growing 20%+',
      },
    ],
  },
  {
    id: 'clients',
    title: 'Client Portfolio',
    icon: '\u{1F465}',
    questions: [
      {
        id: 'cli_retention',
        label: 'How strong is your client retention rate?',
        helper: 'What percentage of clients come back for repeat work or stay on retainer?',
        lowLabel: 'Most are one-off',
        highLabel: '80%+ return',
      },
      {
        id: 'cli_icp',
        label: 'Do you have an ideal client profile?',
        helper: 'Do you know exactly who you serve best and turn down misaligned work?',
        lowLabel: 'Take any work',
        highLabel: 'Clear ICP, only aligned',
      },
      {
        id: 'cli_satisfaction',
        label: 'How satisfied are your clients?',
        helper: 'Consider testimonials, repeat work, referrals, and direct feedback.',
        lowLabel: 'Mixed reviews',
        highLabel: 'Consistently excellent',
      },
    ],
  },
  {
    id: 'pricing',
    title: 'Pricing Power',
    icon: '\u{1F3F7}',
    questions: [
      {
        id: 'pri_raised',
        label: 'When did you last raise your rates?',
        helper: 'If you haven\'t raised rates in 12+ months, inflation means you\'ve taken a pay cut.',
        lowLabel: 'Never / 2+ years',
        highLabel: 'Within last 6 months',
      },
      {
        id: 'pri_market',
        label: 'How do your rates compare to market?',
        helper: 'Research what others with your experience and skills charge in your market.',
        lowLabel: 'Well below market',
        highLabel: 'Premium / above market',
      },
      {
        id: 'pri_pushback',
        label: 'Do clients push back on your pricing?',
        helper: 'Frequent pushback may signal misaligned positioning or underconfidence.',
        lowLabel: 'Frequently',
        highLabel: 'Rarely / never',
      },
    ],
  },
  {
    id: 'marketing',
    title: 'Marketing Pipeline',
    icon: '\u{1F4E3}',
    questions: [
      {
        id: 'mkt_source',
        label: 'How do most clients find you?',
        helper: 'Relying on luck or referrals alone is fragile. Systems are sustainable.',
        lowLabel: 'Random / luck',
        highLabel: 'Consistent lead system',
      },
      {
        id: 'mkt_pipeline',
        label: 'Do you have a waitlist or pipeline?',
        helper: 'Can you see where your next 1-3 months of work is coming from?',
        lowLabel: 'Always looking for work',
        highLabel: 'Booked 4+ weeks out',
      },
      {
        id: 'mkt_presence',
        label: 'How strong is your online presence?',
        helper: 'Website, portfolio, LinkedIn, content, SEO, social proof.',
        lowLabel: 'No website / portfolio',
        highLabel: 'Strong SEO, content, social',
      },
    ],
  },
  {
    id: 'operations',
    title: 'Operational Efficiency',
    icon: '\u{2699}',
    questions: [
      {
        id: 'ops_admin',
        label: 'How much time do you spend on admin per week?',
        helper: 'Admin includes invoicing, chasing payments, bookkeeping, scheduling, and emails.',
        lowLabel: '10+ hours',
        highLabel: 'Under 2 hours',
      },
      {
        id: 'ops_systems',
        label: 'Do you use systems and tools for invoicing, contracts, and project management?',
        helper: 'Manual processes waste time and introduce errors.',
        lowLabel: 'All manual',
        highLabel: 'Fully systematised',
      },
      {
        id: 'ops_invoicing',
        label: 'How quickly can you send an invoice after completing work?',
        helper: 'Delayed invoicing means delayed payment and cash flow problems.',
        lowLabel: 'Days / weeks',
        highLabel: 'Same day / automated',
      },
    ],
  },
  {
    id: 'financial',
    title: 'Financial Health',
    icon: '\u{1F6E1}',
    questions: [
      {
        id: 'fin_savings',
        label: 'Do you have 3+ months of expenses saved?',
        helper: 'Your emergency fund is the difference between a slow month and a crisis.',
        lowLabel: 'No savings',
        highLabel: '6+ months runway',
      },
      {
        id: 'fin_tax',
        label: 'Do you set aside money for tax and super regularly?',
        helper: 'Tax surprises are one of the top reasons freelancers struggle financially.',
        lowLabel: 'Never',
        highLabel: 'Automatic every pay cycle',
      },
      {
        id: 'fin_margin',
        label: 'Do you know your profit margin?',
        helper: 'Revenue means nothing if you don\'t know what you actually keep.',
        lowLabel: 'No idea',
        highLabel: 'Track it monthly',
      },
    ],
  },
  {
    id: 'growth',
    title: 'Growth Trajectory',
    icon: '\u{2191}',
    questions: [
      {
        id: 'gro_development',
        label: 'Do you invest in professional development?',
        helper: 'Courses, coaching, conferences, books, certifications.',
        lowLabel: 'Never',
        highLabel: 'Regularly, with ROI tracking',
      },
      {
        id: 'gro_assets',
        label: 'Are you building assets (courses, templates, productised services)?',
        helper: 'Trading time for money caps your income. Assets create leverage.',
        lowLabel: 'Pure services only',
        highLabel: 'Multiple passive streams',
      },
      {
        id: 'gro_plan',
        label: 'Do you have a 12-month business plan?',
        helper: 'Even a simple plan reviewed quarterly keeps you moving forward intentionally.',
        lowLabel: 'No plan',
        highLabel: 'Written plan, reviewed quarterly',
      },
    ],
  },
  {
    id: 'worklife',
    title: 'Work-Life Sustainability',
    icon: '\u{2696}',
    questions: [
      {
        id: 'wl_hours',
        label: 'How many hours do you work per week?',
        helper: 'Sustained overwork leads to burnout, worse decisions, and lower quality output.',
        lowLabel: '55+ hours',
        highLabel: 'Under 40 hours',
      },
      {
        id: 'wl_timeoff',
        label: 'Do you take regular time off?',
        helper: 'Holidays, weekends off, mental health days. Rest is productive.',
        lowLabel: 'Never / rarely',
        highLabel: '4+ weeks per year',
      },
      {
        id: 'wl_stress',
        label: 'How would you rate your stress level?',
        helper: 'Chronic stress is unsustainable and eventually breaks something.',
        lowLabel: 'Constantly stressed',
        highLabel: 'Calm and in control',
      },
    ],
  },
];

const TOTAL_QUESTIONS = SECTIONS.reduce((acc, s) => acc + s.questions.length, 0);
const MAX_SCORE = TOTAL_QUESTIONS * 5; // 24 questions x 5 = 120

/* ─── Helpers ──────────────────────────────────────────────────────────────── */

function getGrade(pct: number): { letter: string; label: string; color: string; bg: string; border: string } {
  if (pct >= 90) return { letter: 'A+', label: 'Outstanding', color: 'text-emerald-400', bg: 'from-emerald-500/20 to-teal-500/20', border: 'border-emerald-500/30' };
  if (pct >= 80) return { letter: 'A', label: 'Excellent', color: 'text-emerald-400', bg: 'from-emerald-500/20 to-teal-500/20', border: 'border-emerald-500/30' };
  if (pct >= 70) return { letter: 'B', label: 'Good', color: 'text-teal-400', bg: 'from-teal-500/20 to-blue-500/20', border: 'border-teal-500/30' };
  if (pct >= 55) return { letter: 'C', label: 'Fair', color: 'text-amber-400', bg: 'from-amber-500/20 to-orange-500/20', border: 'border-amber-500/30' };
  if (pct >= 40) return { letter: 'D', label: 'Needs Work', color: 'text-orange-400', bg: 'from-orange-500/20 to-red-500/20', border: 'border-orange-500/30' };
  return { letter: 'F', label: 'Critical', color: 'text-rose-400', bg: 'from-rose-500/20 to-pink-500/20', border: 'border-rose-500/30' };
}

function getSectionGrade(pct: number): { letter: string; color: string; barColor: string } {
  if (pct >= 90) return { letter: 'A+', color: 'text-emerald-400', barColor: 'bg-gradient-to-r from-emerald-500 to-teal-400' };
  if (pct >= 80) return { letter: 'A', color: 'text-emerald-400', barColor: 'bg-gradient-to-r from-emerald-500 to-teal-400' };
  if (pct >= 70) return { letter: 'B', color: 'text-teal-400', barColor: 'bg-gradient-to-r from-teal-500 to-blue-400' };
  if (pct >= 55) return { letter: 'C', color: 'text-amber-400', barColor: 'bg-gradient-to-r from-amber-500 to-yellow-400' };
  if (pct >= 40) return { letter: 'D', color: 'text-orange-400', barColor: 'bg-gradient-to-r from-orange-500 to-amber-400' };
  return { letter: 'F', color: 'text-rose-400', barColor: 'bg-gradient-to-r from-rose-500 to-pink-400' };
}

function getSectionRecommendation(sectionId: string, pct: number): string {
  const recos: Record<string, Record<string, string>> = {
    revenue: {
      low: 'Your income is dangerously unpredictable. Focus on converting your best clients to retainer agreements and diversifying your revenue sources. Even one retainer client providing 30% of your income transforms your stability.',
      mid: 'Your revenue foundation is developing but still fragile. Aim to build 2-3 recurring revenue streams and set a growth target of 15-20% for the next 12 months.',
    },
    clients: {
      low: 'Your client portfolio needs urgent attention. Define your ideal client profile, implement a feedback system, and focus on delivering exceptional results to increase retention above 60%.',
      mid: 'You have a reasonable client base but room to improve. Refine your ideal client profile and start politely declining misaligned work. Invest in client relationships to boost retention.',
    },
    pricing: {
      low: 'You are likely undercharging significantly. Research current market rates for your skill level, raise your rates by at least 15-20% starting with new clients, and stop discounting. Your experience has value.',
      mid: 'Your pricing is in a reasonable range but could be stronger. Schedule annual rate reviews, position yourself on value rather than hours, and test higher rates with new prospects.',
    },
    marketing: {
      low: 'You have no reliable lead generation system. Build a basic online presence (portfolio site + LinkedIn), start creating content around your expertise, and develop at least one repeatable client acquisition channel.',
      mid: 'Your marketing is functional but inconsistent. Systematise your best-performing channel, build a pipeline tracker, and aim to be booked 4+ weeks in advance consistently.',
    },
    operations: {
      low: 'Too much of your time is wasted on admin. Invest in tools like InvoiceFlow for automated invoicing, use project management software, create templates for contracts and proposals, and batch your admin tasks.',
      mid: 'Your operations are decent but could be tighter. Automate your invoicing, create standard operating procedures for common tasks, and aim to reduce admin time to under 3 hours per week.',
    },
    financial: {
      low: 'Your financial health is at risk. Open a separate business savings account today, start setting aside 25-30% of every payment for tax and super, and build toward 3 months of emergency expenses.',
      mid: 'You have some financial foundations but gaps remain. Track your profit margin monthly, automate your tax savings, and build your emergency fund to at least 3 months of expenses.',
    },
    growth: {
      low: 'You are stuck trading time for money with no plan. Write a simple 12-month business plan, invest in one course or coaching programme, and start building at least one productised service or digital asset.',
      mid: 'You are growing but need more intentionality. Review your business plan quarterly, identify one asset you can build this quarter (template, course, or productised service), and track your development ROI.',
    },
    worklife: {
      low: 'You are on the path to burnout. This is not sustainable. Set hard boundaries on working hours, block out at least one full day off per week, and schedule real holidays. A burnt-out freelancer produces worse work and makes worse decisions.',
      mid: 'Your work-life balance needs attention. Aim to consistently work under 45 hours per week, take at least 3 weeks off per year, and build stress management practices into your routine.',
    },
  };

  if (pct >= 70) return `Strong performance here. Keep doing what you're doing and look for small optimisations.`;
  if (pct >= 55) return recos[sectionId]?.mid || 'Room for improvement. Focus on incremental gains in this area.';
  return recos[sectionId]?.low || 'This area needs significant attention. Prioritise improvements here.';
}

/* ─── Radar Chart (SVG) ───────────────────────────────────────────────────── */

function RadarChart({ values, labels }: { values: number[]; labels: string[] }) {
  const cx = 150;
  const cy = 150;
  const r = 110;
  const levels = 5;
  const n = values.length;
  const angleStep = (2 * Math.PI) / n;

  function polarToCart(angle: number, radius: number) {
    return {
      x: cx + radius * Math.cos(angle - Math.PI / 2),
      y: cy + radius * Math.sin(angle - Math.PI / 2),
    };
  }

  // Grid lines
  const gridLines: string[] = [];
  for (let lvl = 1; lvl <= levels; lvl++) {
    const lr = (r / levels) * lvl;
    const points = Array.from({ length: n }, (_, i) => {
      const p = polarToCart(i * angleStep, lr);
      return `${p.x},${p.y}`;
    }).join(' ');
    gridLines.push(points);
  }

  // Axis lines
  const axes = Array.from({ length: n }, (_, i) => polarToCart(i * angleStep, r));

  // Data polygon
  const dataPoints = values.map((v, i) => {
    const vr = (v / 100) * r;
    return polarToCart(i * angleStep, vr);
  });
  const dataPolygon = dataPoints.map((p) => `${p.x},${p.y}`).join(' ');

  // Label positions (slightly outside)
  const labelPositions = labels.map((_, i) => {
    const lp = polarToCart(i * angleStep, r + 22);
    return lp;
  });

  return (
    <svg viewBox="0 0 300 300" className="w-full max-w-[340px] mx-auto">
      {/* Grid polygons */}
      {gridLines.map((pts, i) => (
        <polygon
          key={i}
          points={pts}
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="1"
        />
      ))}

      {/* Axis lines */}
      {axes.map((a, i) => (
        <line
          key={i}
          x1={cx}
          y1={cy}
          x2={a.x}
          y2={a.y}
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="1"
        />
      ))}

      {/* Data polygon */}
      <polygon
        points={dataPolygon}
        fill="rgba(251,113,133,0.15)"
        stroke="url(#radarGrad)"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />

      {/* Data points */}
      {dataPoints.map((p, i) => (
        <circle
          key={i}
          cx={p.x}
          cy={p.y}
          r="4"
          fill="#fb7185"
          stroke="#1e1e2e"
          strokeWidth="2"
        />
      ))}

      {/* Labels */}
      {labelPositions.map((pos, i) => (
        <text
          key={i}
          x={pos.x}
          y={pos.y}
          textAnchor="middle"
          dominantBaseline="middle"
          className="fill-slate-400 text-[8px] font-medium"
        >
          {labels[i]}
        </text>
      ))}

      <defs>
        <linearGradient id="radarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fb7185" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/* ─── Star Rating Component ────────────────────────────────────────────────── */

function StarRating({
  value,
  onChange,
  lowLabel,
  highLabel,
}: {
  value: number;
  onChange: (v: number) => void;
  lowLabel: string;
  highLabel: string;
}) {
  return (
    <div>
      <div className="flex items-center gap-1.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => onChange(star)}
            className="group relative p-1 transition-transform hover:scale-110"
            aria-label={`Rate ${star} out of 5`}
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              className={`transition-colors ${
                star <= value
                  ? 'fill-rose-400 stroke-rose-400'
                  : 'fill-transparent stroke-slate-600 group-hover:stroke-rose-300'
              }`}
              strokeWidth="1.5"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </button>
        ))}
      </div>
      <div className="flex justify-between mt-1.5 px-1">
        <span className="text-[10px] text-slate-500">{lowLabel}</span>
        <span className="text-[10px] text-slate-500">{highLabel}</span>
      </div>
    </div>
  );
}

/* ─── Main Component ───────────────────────────────────────────────────────── */

export default function FreelanceScorecard() {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [copied, setCopied] = useState(false);
  const resultsRef = useRef<HTMLDivElement>(null);

  const answeredCount = Object.keys(answers).length;
  const allAnswered = answeredCount === TOTAL_QUESTIONS;

  const setAnswer = useCallback((id: string, value: number) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  }, []);

  /* ─── Results computation ────────────────────────────────────────────── */

  const results = useMemo(() => {
    const totalRaw = Object.values(answers).reduce((sum, v) => sum + v, 0);
    const overallPct = TOTAL_QUESTIONS > 0 ? Math.round((totalRaw / MAX_SCORE) * 100) : 0;
    const grade = getGrade(overallPct);

    const sectionResults = SECTIONS.map((section) => {
      const sectionMax = section.questions.length * 5;
      const sectionRaw = section.questions.reduce((sum, q) => sum + (answers[q.id] || 0), 0);
      const sectionPct = sectionMax > 0 ? Math.round((sectionRaw / sectionMax) * 100) : 0;
      const sGrade = getSectionGrade(sectionPct);
      return {
        id: section.id,
        title: section.title,
        icon: section.icon,
        raw: sectionRaw,
        max: sectionMax,
        pct: sectionPct,
        grade: sGrade,
        recommendation: getSectionRecommendation(section.id, sectionPct),
      };
    });

    const sorted = [...sectionResults].sort((a, b) => b.pct - a.pct);
    const strengths = sorted.filter((s) => s.pct >= 60).slice(0, 3);
    const weaknesses = [...sectionResults].sort((a, b) => a.pct - b.pct).filter((s) => s.pct < 70).slice(0, 3);

    return {
      totalRaw,
      maxScore: MAX_SCORE,
      overallPct,
      grade,
      sections: sectionResults,
      strengths,
      weaknesses,
      radarValues: sectionResults.map((s) => s.pct),
      radarLabels: sectionResults.map((s) => s.title.split(' ')[0]),
    };
  }, [answers]);

  /* ─── Copy Results ───────────────────────────────────────────────────── */

  const handleCopy = useCallback(() => {
    if (!allAnswered) return;
    const lines = [
      'Freelance Business Scorecard Results',
      '======================================',
      '',
      `Overall Score: ${results.totalRaw}/${results.maxScore} (${results.overallPct}%) — Grade: ${results.grade.letter} (${results.grade.label})`,
      '',
      '--- Section Scores ---',
    ];
    results.sections.forEach((s) => {
      lines.push(`${s.title}: ${s.pct}% (${s.grade.letter}) — ${s.raw}/${s.max}`);
    });
    if (results.strengths.length > 0) {
      lines.push('');
      lines.push('--- Top Strengths ---');
      results.strengths.forEach((s) => lines.push(`+ ${s.title} (${s.pct}%)`));
    }
    if (results.weaknesses.length > 0) {
      lines.push('');
      lines.push('--- Areas for Improvement ---');
      results.weaknesses.forEach((s) => {
        lines.push(`- ${s.title} (${s.pct}%): ${s.recommendation}`);
      });
    }
    lines.push('');
    lines.push('Generated at invoiceflow.au/tools/freelance-scorecard');

    navigator.clipboard.writeText(lines.join('\n')).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  }, [allAnswered, results]);

  /* ─── Print ──────────────────────────────────────────────────────────── */

  const handlePrint = useCallback(() => {
    window.print();
  }, []);

  /* ─── Render ─────────────────────────────────────────────────────────── */

  return (
    <div className="relative">
      {/* Floating Score Indicator */}
      <div className="fixed bottom-6 right-6 z-50 print:hidden">
        <div className="glass rounded-2xl p-4 border border-white/10 shadow-2xl min-w-[140px] text-center backdrop-blur-xl">
          <p className="text-[10px] uppercase tracking-wider text-slate-500 mb-1">Live Score</p>
          <p className={`text-3xl font-bold ${answeredCount > 0 ? results.grade.color : 'text-slate-600'}`}>
            {results.overallPct}%
          </p>
          <p className="text-xs text-slate-500 mt-0.5">
            {answeredCount}/{TOTAL_QUESTIONS} answered
          </p>
          {allAnswered && (
            <p className={`text-sm font-semibold mt-1 ${results.grade.color}`}>
              {results.grade.letter}
            </p>
          )}
        </div>
      </div>

      {/* Assessment Sections */}
      <div className="space-y-6">
        <div className="glass rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white heading-font mb-2">Your Business Assessment</h2>
          <p className="text-sm text-slate-400 mb-2">
            Rate your freelance business across 8 key areas. Answer each question honestly on a 1-5 scale
            using the star ratings. Your data stays in your browser — nothing is sent to a server.
          </p>
          <p className="text-xs text-slate-500">
            {answeredCount} of {TOTAL_QUESTIONS} questions answered
            {answeredCount > 0 && !allAnswered && (
              <span className="text-rose-400/60 ml-2">
                ({TOTAL_QUESTIONS - answeredCount} remaining)
              </span>
            )}
          </p>
        </div>

        {SECTIONS.map((section, sIdx) => {
          const sectionAnswered = section.questions.filter((q) => answers[q.id] !== undefined).length;
          const sectionComplete = sectionAnswered === section.questions.length;
          const sectionRaw = section.questions.reduce((sum, q) => sum + (answers[q.id] || 0), 0);
          const sectionMax = section.questions.length * 5;
          const sectionPct = sectionMax > 0 ? Math.round((sectionRaw / sectionMax) * 100) : 0;

          return (
            <div key={section.id} className="glass rounded-2xl p-6 sm:p-8">
              {/* Section Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-500/20 to-pink-500/20 border border-rose-500/20 flex items-center justify-center text-lg">
                    {section.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white heading-font">{section.title}</h3>
                    <p className="text-xs text-slate-500">Section {sIdx + 1} of 8</p>
                  </div>
                </div>
                {sectionComplete && (
                  <div className={`text-sm font-bold ${getSectionGrade(sectionPct).color}`}>
                    {sectionPct}%
                  </div>
                )}
              </div>

              {/* Questions */}
              <div className="space-y-6">
                {section.questions.map((question, qIdx) => (
                  <div key={question.id} className="bg-white/[0.03] rounded-xl p-4 sm:p-5">
                    <div className="flex items-start gap-3 mb-3">
                      <span className="flex-shrink-0 mt-0.5 flex items-center justify-center w-5 h-5 rounded-full bg-white/10 text-[10px] text-slate-500 font-medium">
                        {qIdx + 1}
                      </span>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-white leading-snug">{question.label}</p>
                        <p className="text-xs text-slate-500 mt-1">{question.helper}</p>
                      </div>
                    </div>
                    <div className="ml-8">
                      <StarRating
                        value={answers[question.id] || 0}
                        onChange={(v) => setAnswer(question.id, v)}
                        lowLabel={question.lowLabel}
                        highLabel={question.highLabel}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Section Progress Bar */}
              <div className="mt-5">
                <div className="w-full bg-white/5 rounded-full h-1.5">
                  <div
                    className="h-1.5 rounded-full bg-gradient-to-r from-rose-500 to-pink-400 transition-all duration-500"
                    style={{ width: `${(sectionAnswered / section.questions.length) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Results Section */}
      <div ref={resultsRef} className="mt-10 space-y-6">
        {allAnswered ? (
          <>
            {/* Overall Score Card */}
            <div className={`glass rounded-2xl p-6 sm:p-8 bg-gradient-to-br ${results.grade.bg} border ${results.grade.border}`}>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-white heading-font">Your Scorecard Results</h2>
                <div className="flex gap-2">
                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-2 text-sm px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all"
                  >
                    {copied ? (
                      <span className="text-emerald-400">Copied!</span>
                    ) : (
                      <>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                        </svg>
                        Copy
                      </>
                    )}
                  </button>
                  <button
                    onClick={handlePrint}
                    className="flex items-center gap-2 text-sm px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all print:hidden"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 6 2 18 2 18 9" />
                      <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                      <rect x="6" y="14" width="12" height="8" />
                    </svg>
                    Print
                  </button>
                </div>
              </div>

              <div className="text-center py-8">
                <p className={`text-7xl sm:text-8xl font-bold ${results.grade.color}`}>
                  {results.overallPct}<span className="text-3xl sm:text-4xl text-slate-500">%</span>
                </p>
                <p className="text-slate-400 mt-2">
                  {results.totalRaw} out of {results.maxScore} points
                </p>
                <div className="flex items-center justify-center gap-3 mt-3">
                  <span className={`text-2xl font-bold ${results.grade.color}`}>
                    Grade: {results.grade.letter}
                  </span>
                  <span className="text-slate-500">—</span>
                  <span className={`text-lg ${results.grade.color}`}>
                    {results.grade.label}
                  </span>
                </div>
              </div>
            </div>

            {/* Radar Chart */}
            <div className="glass rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl font-bold text-white heading-font mb-4">Business Profile</h2>
              <p className="text-sm text-slate-400 mb-6">
                Your radar chart shows how balanced your freelance business is across all 8 pillars. A wider, more even shape indicates a healthier, more resilient business.
              </p>
              <RadarChart values={results.radarValues} labels={results.radarLabels} />
            </div>

            {/* Section Breakdown */}
            <div className="glass rounded-2xl p-6 sm:p-8 space-y-5">
              <h2 className="text-xl font-bold text-white heading-font">Section Breakdown</h2>
              <div className="space-y-4">
                {results.sections.map((s) => (
                  <div key={s.id} className="bg-white/[0.03] rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-base">{s.icon}</span>
                        <span className="text-sm font-medium text-white">{s.title}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className={`text-sm font-bold ${s.grade.color}`}>{s.pct}%</span>
                        <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${s.grade.color} bg-white/5`}>
                          {s.grade.letter}
                        </span>
                      </div>
                    </div>
                    <div className="w-full bg-white/5 rounded-full h-2.5 mb-2">
                      <div
                        className={`h-2.5 rounded-full transition-all duration-700 ${s.grade.barColor}`}
                        style={{ width: `${Math.max(s.pct, 2)}%` }}
                      />
                    </div>
                    <p className="text-xs text-slate-400 mt-2">{s.recommendation}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Strengths */}
            {results.strengths.length > 0 && (
              <div className="glass rounded-2xl p-6 sm:p-8">
                <h2 className="text-xl font-bold text-white heading-font mb-4">
                  Top Strengths
                </h2>
                <div className="space-y-3">
                  {results.strengths.map((s, i) => (
                    <div
                      key={s.id}
                      className="flex items-center gap-3 bg-emerald-500/5 border border-emerald-500/10 rounded-xl p-4"
                    >
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 text-sm font-bold">
                        {i + 1}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="text-base">{s.icon}</span>
                          <span className="text-sm font-semibold text-white">{s.title}</span>
                        </div>
                      </div>
                      <span className="text-sm font-bold text-emerald-400">{s.pct}%</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Areas for Improvement */}
            {results.weaknesses.length > 0 && (
              <div className="glass rounded-2xl p-6 sm:p-8">
                <h2 className="text-xl font-bold text-white heading-font mb-2">
                  Areas for Improvement
                </h2>
                <p className="text-sm text-slate-400 mb-4">
                  Focus on these areas first — they represent your biggest opportunities for growth.
                </p>
                <div className="space-y-4">
                  {results.weaknesses.map((s, i) => {
                    const isUrgent = s.pct < 40;
                    return (
                      <div
                        key={s.id}
                        className={`rounded-xl p-5 border ${
                          isUrgent
                            ? 'bg-rose-500/5 border-rose-500/15'
                            : 'bg-amber-500/5 border-amber-500/15'
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-xs font-bold text-slate-400">
                            {i + 1}
                          </span>
                          <span className={`text-xs font-medium uppercase tracking-wide ${isUrgent ? 'text-rose-400' : 'text-amber-400'}`}>
                            {isUrgent ? 'Urgent' : 'Improve'}
                          </span>
                          <span className="text-base">{s.icon}</span>
                          <span className="text-sm font-semibold text-white">{s.title}</span>
                          <span className={`ml-auto text-sm font-bold ${s.grade.color}`}>{s.pct}%</span>
                        </div>
                        <p className="text-sm text-slate-300 ml-8">{s.recommendation}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </>
        ) : (
          /* Placeholder when not all answered */
          <div className="glass rounded-2xl p-8 text-center">
            <p className="text-slate-400">
              Answer all {TOTAL_QUESTIONS} questions above to see your full scorecard with radar chart,
              grades, and personalised recommendations.
            </p>
            <p className="text-sm text-slate-500 mt-2">
              {answeredCount} of {TOTAL_QUESTIONS} answered
            </p>
            <div className="w-full max-w-xs mx-auto mt-4 bg-white/5 rounded-full h-2">
              <div
                className="h-2 rounded-full bg-gradient-to-r from-rose-500 to-pink-400 transition-all duration-500"
                style={{ width: `${(answeredCount / TOTAL_QUESTIONS) * 100}%` }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
