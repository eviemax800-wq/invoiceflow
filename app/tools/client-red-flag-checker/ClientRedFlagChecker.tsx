'use client';

import { useState, useMemo } from 'react';

/* ---- Types ---- */

type Step = 1 | 2 | 3;

interface Question {
  id: string;
  label: string;
  options: { text: string; score: number }[];
  category: 'communication' | 'payment' | 'scope' | 'professional';
}

interface Answers {
  [questionId: string]: number;
}

interface RedFlag {
  label: string;
  explanation: string;
  severity: 'critical' | 'high' | 'moderate';
}

interface GreenFlag {
  label: string;
  explanation: string;
}

interface ProtectionItem {
  label: string;
  description: string;
}

interface CategoryScore {
  category: string;
  label: string;
  score: number;
  maxScore: number;
  percentage: number;
  color: string;
  bgColor: string;
}

interface Results {
  totalScore: number;
  maxPossible: number;
  percentage: number;
  riskLevel: 'low' | 'moderate' | 'high' | 'critical';
  riskLabel: string;
  riskColor: string;
  riskBgColor: string;
  riskBorderColor: string;
  categories: CategoryScore[];
  redFlags: RedFlag[];
  greenFlags: GreenFlag[];
  recommendation: string;
  protectionChecklist: ProtectionItem[];
}

/* ---- Questions ---- */

const COMMUNICATION_QUESTIONS: Question[] = [
  {
    id: 'response_time',
    label: 'How quickly does the client respond to your messages?',
    category: 'communication',
    options: [
      { text: 'Within hours', score: 0 },
      { text: '1-2 days', score: 1 },
      { text: '3-7 days', score: 2 },
      { text: 'Weeks or ghosting', score: 3 },
    ],
  },
  {
    id: 'brief_clarity',
    label: 'How clear is their project brief?',
    category: 'scope',
    options: [
      { text: 'Detailed written brief', score: 0 },
      { text: 'Verbal brief, some notes', score: 1 },
      { text: 'Vague \u2014 "just make it look good"', score: 2 },
      { text: 'No brief at all', score: 3 },
    ],
  },
  {
    id: 'decision_maker',
    label: 'Who makes the final decisions?',
    category: 'communication',
    options: [
      { text: 'Single decision maker', score: 0 },
      { text: 'Small team (2-3)', score: 1 },
      { text: 'Committee (4+)', score: 2 },
      { text: 'Unclear who decides', score: 3 },
    ],
  },
  {
    id: 'communication_style',
    label: 'How would you describe their communication style?',
    category: 'professional',
    options: [
      { text: 'Professional and respectful', score: 0 },
      { text: 'Mostly fine, occasional pressure', score: 1 },
      { text: 'Demanding/urgent always', score: 2 },
      { text: 'Rude or disrespectful', score: 3 },
    ],
  },
  {
    id: 'scope_discussion',
    label: 'How do they handle scope discussions?',
    category: 'scope',
    options: [
      { text: 'Happy to define scope upfront', score: 0 },
      { text: 'Flexible but willing', score: 1 },
      { text: 'Keeps adding things', score: 2 },
      { text: 'Refuses to commit', score: 3 },
    ],
  },
];

const PAYMENT_QUESTIONS: Question[] = [
  {
    id: 'budget_discussion',
    label: 'How do they discuss budget?',
    category: 'payment',
    options: [
      { text: 'Clear budget, paid deposits before', score: 0 },
      { text: 'Has budget, willing to share', score: 1 },
      { text: 'Vague about budget', score: 2 },
      { text: 'Pushes back on every price', score: 3 },
    ],
  },
  {
    id: 'payment_terms',
    label: 'What payment terms do they want?',
    category: 'payment',
    options: [
      { text: 'Happy with your terms', score: 0 },
      { text: 'Wants Net 30', score: 1 },
      { text: 'Wants Net 60+', score: 2 },
      { text: 'Asks to pay "when the project is done"', score: 3 },
    ],
  },
  {
    id: 'contract_attitude',
    label: 'What is their attitude toward contracts?',
    category: 'professional',
    options: [
      { text: 'Welcomes a contract', score: 0 },
      { text: 'Will sign if asked', score: 1 },
      { text: 'Hesitant about contracts', score: 2 },
      { text: 'Refuses to sign', score: 3 },
    ],
  },
  {
    id: 'past_freelancers',
    label: 'What is their experience with past freelancers?',
    category: 'professional',
    options: [
      { text: 'Great reviews of past freelancers', score: 0 },
      { text: 'Some experience, neutral', score: 1 },
      { text: 'Complains about past freelancers', score: 2 },
      { text: 'Has churned through many freelancers', score: 3 },
    ],
  },
  {
    id: 'business_legitimacy',
    label: 'How legitimate does their business appear?',
    category: 'professional',
    options: [
      { text: 'Established business, easy to verify', score: 0 },
      { text: 'Small but legitimate', score: 1 },
      { text: 'Hard to find online', score: 2 },
      { text: 'Red flags in business history', score: 3 },
    ],
  },
];

const ALL_QUESTIONS = [...COMMUNICATION_QUESTIONS, ...PAYMENT_QUESTIONS];

/* ---- Helpers ---- */

function getRiskLevel(percentage: number): { level: Results['riskLevel']; label: string; color: string; bgColor: string; borderColor: string } {
  if (percentage <= 25) return { level: 'low', label: 'Low Risk', color: 'text-green-400', bgColor: 'bg-green-400', borderColor: 'border-green-400/20' };
  if (percentage <= 50) return { level: 'moderate', label: 'Moderate Risk', color: 'text-yellow-400', bgColor: 'bg-yellow-400', borderColor: 'border-yellow-400/20' };
  if (percentage <= 75) return { level: 'high', label: 'High Risk', color: 'text-orange-400', bgColor: 'bg-orange-400', borderColor: 'border-orange-400/20' };
  return { level: 'critical', label: 'Critical Risk', color: 'text-red-400', bgColor: 'bg-red-400', borderColor: 'border-red-400/20' };
}

function getCategoryColor(category: string): { color: string; bgColor: string } {
  switch (category) {
    case 'communication': return { color: 'text-blue-400', bgColor: 'bg-blue-400' };
    case 'payment': return { color: 'text-amber-400', bgColor: 'bg-amber-400' };
    case 'scope': return { color: 'text-purple-400', bgColor: 'bg-purple-400' };
    case 'professional': return { color: 'text-rose-400', bgColor: 'bg-rose-400' };
    default: return { color: 'text-slate-400', bgColor: 'bg-slate-400' };
  }
}

function getCategoryLabel(category: string): string {
  switch (category) {
    case 'communication': return 'Communication Risk';
    case 'payment': return 'Payment Risk';
    case 'scope': return 'Scope Risk';
    case 'professional': return 'Professional Risk';
    default: return category;
  }
}

/* ---- Component ---- */

export default function ClientRedFlagChecker() {
  const [step, setStep] = useState<Step>(1);
  const [calculated, setCalculated] = useState(false);
  const [copied, setCopied] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});

  const setAnswer = (questionId: string, score: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: score }));
  };

  const step1Complete = COMMUNICATION_QUESTIONS.every((q) => answers[q.id] !== undefined);
  const step2Complete = PAYMENT_QUESTIONS.every((q) => answers[q.id] !== undefined);

  const results: Results = useMemo(() => {
    const maxPossible = ALL_QUESTIONS.length * 3; // max 3 per question
    const totalScore = Object.values(answers).reduce((sum, v) => sum + v, 0);
    const percentage = maxPossible > 0 ? Math.round((totalScore / maxPossible) * 100) : 0;
    const risk = getRiskLevel(percentage);

    // Category scores
    const categoryMap: Record<string, { score: number; max: number }> = {};
    ALL_QUESTIONS.forEach((q) => {
      if (!categoryMap[q.category]) categoryMap[q.category] = { score: 0, max: 0 };
      categoryMap[q.category].max += 3;
      if (answers[q.id] !== undefined) {
        categoryMap[q.category].score += answers[q.id];
      }
    });

    const categories: CategoryScore[] = Object.entries(categoryMap).map(([cat, data]) => {
      const colors = getCategoryColor(cat);
      return {
        category: cat,
        label: getCategoryLabel(cat),
        score: data.score,
        maxScore: data.max,
        percentage: data.max > 0 ? Math.round((data.score / data.max) * 100) : 0,
        color: colors.color,
        bgColor: colors.bgColor,
      };
    });

    // Identify red flags
    const redFlags: RedFlag[] = [];
    const greenFlags: GreenFlag[] = [];

    // Response time
    if (answers.response_time === 3) {
      redFlags.push({ label: 'Extreme communication delays', explanation: 'A client who ghosts during the sales process will be worse during the project. Expect delayed feedback, missed deadlines, and stalled timelines.', severity: 'critical' });
    } else if (answers.response_time === 2) {
      redFlags.push({ label: 'Slow response times', explanation: 'Taking 3-7 days to respond slows the entire project. Build buffer time into your timeline and use milestone-based billing to protect your cash flow.', severity: 'moderate' });
    } else if (answers.response_time === 0) {
      greenFlags.push({ label: 'Fast communicator', explanation: 'Quick responses indicate an engaged client who will keep the project moving.' });
    }

    // Brief clarity
    if (answers.brief_clarity === 3) {
      redFlags.push({ label: 'No project brief', explanation: 'Without any brief, scope is undefined and revisions are unlimited. You are essentially guessing what they want and will be blamed when you guess wrong.', severity: 'critical' });
    } else if (answers.brief_clarity === 2) {
      redFlags.push({ label: 'Vague project brief', explanation: '"Just make it look good" means unlimited revisions until an undefined target is met. Insist on a written brief before quoting or starting.', severity: 'high' });
    } else if (answers.brief_clarity === 0) {
      greenFlags.push({ label: 'Detailed written brief', explanation: 'A clear brief shows they have thought about what they need and can measure success objectively.' });
    }

    // Decision maker
    if (answers.decision_maker === 3) {
      redFlags.push({ label: 'No clear decision maker', explanation: 'When nobody is empowered to approve, nothing gets approved. Expect contradictory feedback, endless revision rounds, and delayed sign-off.', severity: 'high' });
    } else if (answers.decision_maker === 2) {
      redFlags.push({ label: 'Committee decision making', explanation: 'Four or more approvers means conflicting opinions and diluted creative direction. Factor in extra revision rounds when quoting.', severity: 'moderate' });
    } else if (answers.decision_maker === 0) {
      greenFlags.push({ label: 'Single decision maker', explanation: 'One point of authority means faster approvals, consistent feedback, and cleaner execution.' });
    }

    // Communication style
    if (answers.communication_style === 3) {
      redFlags.push({ label: 'Rude or disrespectful tone', explanation: 'Disrespect during the pitch phase only escalates during the project. This is a strong signal to walk away.', severity: 'critical' });
    } else if (answers.communication_style === 2) {
      redFlags.push({ label: 'Constant urgency and pressure', explanation: 'Everything being "urgent" is a manipulation tactic to get you to skip your process and overdeliver without charging rush rates.', severity: 'high' });
    } else if (answers.communication_style === 0) {
      greenFlags.push({ label: 'Professional communication', explanation: 'Respectful, professional communication predicts a healthy working relationship.' });
    }

    // Scope discussion
    if (answers.scope_discussion === 3) {
      redFlags.push({ label: 'Refuses to define scope', explanation: 'A client who refuses to commit to scope will expand it indefinitely. Without boundaries, your fixed-price project becomes unlimited hourly work.', severity: 'critical' });
    } else if (answers.scope_discussion === 2) {
      redFlags.push({ label: 'Scope creep during sales', explanation: 'If scope is already growing during the proposal stage, it will be far worse during the project. Include a change order process in your contract.', severity: 'high' });
    } else if (answers.scope_discussion === 0) {
      greenFlags.push({ label: 'Scope-conscious client', explanation: 'Willingness to define scope upfront shows respect for your time and a realistic understanding of the project.' });
    }

    // Budget discussion
    if (answers.budget_discussion === 3) {
      redFlags.push({ label: 'Price resistance on everything', explanation: 'A client who pushes back on every line item will challenge every invoice. Budget negotiations are normal, but blanket resistance signals they cannot or will not pay what you are worth.', severity: 'high' });
    } else if (answers.budget_discussion === 2) {
      redFlags.push({ label: 'Vague about budget', explanation: 'Budget vagueness can mean they have not allocated funds, are price-shopping, or want to see your number first to negotiate down.', severity: 'moderate' });
    } else if (answers.budget_discussion === 0) {
      greenFlags.push({ label: 'Clear budget and payment history', explanation: 'A client with a defined budget and history of paying deposits is a strong positive signal.' });
    }

    // Payment terms
    if (answers.payment_terms === 3) {
      redFlags.push({ label: 'Wants to pay only on completion', explanation: '"Pay when done" puts 100% of the financial risk on you. Professional clients understand that freelancers need cash flow during the project.', severity: 'critical' });
    } else if (answers.payment_terms === 2) {
      redFlags.push({ label: 'Wants Net 60+ payment terms', explanation: 'Net 60+ terms mean you are essentially financing their project for free. For freelancers, this is a significant cash flow risk.', severity: 'high' });
    } else if (answers.payment_terms === 0) {
      greenFlags.push({ label: 'Accepts your payment terms', explanation: 'No pushback on payment terms signals a client who values the relationship and pays fairly.' });
    }

    // Contract attitude
    if (answers.contract_attitude === 3) {
      redFlags.push({ label: 'Refuses to sign a contract', explanation: 'This is one of the strongest red flags. A client who refuses legal protection for both parties may be planning to dispute your work or not pay.', severity: 'critical' });
    } else if (answers.contract_attitude === 2) {
      redFlags.push({ label: 'Hesitant about contracts', explanation: 'Hesitancy about contracts suggests they may not take the agreement seriously. Push for a signed contract before any work begins.', severity: 'high' });
    } else if (answers.contract_attitude === 0) {
      greenFlags.push({ label: 'Welcomes a contract', explanation: 'A client who proactively welcomes a contract shows professionalism and accountability.' });
    }

    // Past freelancers
    if (answers.past_freelancers === 3) {
      redFlags.push({ label: 'High freelancer churn', explanation: 'When every previous freelancer was "terrible", the common denominator is the client. You are unlikely to be the exception.', severity: 'critical' });
    } else if (answers.past_freelancers === 2) {
      redFlags.push({ label: 'Negative about past freelancers', explanation: 'Complaining about previous freelancers signals either unrealistic expectations or poor client-side management.', severity: 'moderate' });
    } else if (answers.past_freelancers === 0) {
      greenFlags.push({ label: 'Positive freelancer history', explanation: 'Clients who speak well of past collaborators tend to be better to work with.' });
    }

    // Business legitimacy
    if (answers.business_legitimacy === 3) {
      redFlags.push({ label: 'Business legitimacy concerns', explanation: 'Red flags in business history, unverifiable credentials, or questionable practices significantly increase your risk of non-payment.', severity: 'critical' });
    } else if (answers.business_legitimacy === 2) {
      redFlags.push({ label: 'Hard to verify online', explanation: 'A business with no online presence removes a layer of accountability. Not always a red flag for new businesses, but worth noting.', severity: 'moderate' });
    } else if (answers.business_legitimacy === 0) {
      greenFlags.push({ label: 'Established, verifiable business', explanation: 'An established business with an online presence and reviews is easier to vet and more accountable.' });
    }

    // Recommendation
    let recommendation = '';
    if (risk.level === 'low') {
      recommendation = 'This client shows strong positive signals across communication, payment, and professionalism. Proceed with your standard contract and payment terms. A 25-30% deposit and Net 14 terms are appropriate. Focus on delivering great work and building a long-term relationship.';
    } else if (risk.level === 'moderate') {
      recommendation = 'This client shows some yellow flags that warrant caution. Proceed with tighter protections: require a 40% deposit, use milestone payments, limit revisions to 2 rounds with additional rounds billed hourly, and ensure the scope is extremely well-defined in your contract. Consider a small paid discovery phase before committing to the full project.';
    } else if (risk.level === 'high') {
      recommendation = 'This client shows multiple warning signs. If you decide to proceed, require at least 50% upfront before any work begins. Use weekly billing so your exposure is never more than one week of work. Add a work-stoppage clause for overdue invoices, a late payment interest clause, and reduce the initial scope to a small paid discovery phase. Set firm boundaries early.';
    } else {
      recommendation = 'This client shows critical red flags across multiple areas. Strongly consider declining this engagement. If you must proceed (financial necessity or strategic reasons), require 75-100% payment upfront for small projects. Keep the initial engagement tiny and paid in full before starting. Never invest more time or money than you can afford to lose.';
    }

    // Protection checklist
    const protectionChecklist: ProtectionItem[] = [];
    if (risk.level === 'low') {
      protectionChecklist.push(
        { label: 'Standard contract', description: 'Use your standard freelance contract with defined scope, deliverables, and revision policy.' },
        { label: '25-30% deposit', description: 'Collect a deposit before starting work to confirm commitment.' },
        { label: 'Net 14 payment terms', description: 'Standard payment terms are appropriate for low-risk clients.' },
        { label: '2-3 revision rounds', description: 'Include 2-3 rounds of revisions in the project scope.' },
      );
    } else if (risk.level === 'moderate') {
      protectionChecklist.push(
        { label: '40% deposit required', description: 'Higher deposit to protect against mid-project abandonment.' },
        { label: 'Milestone payments', description: '40% deposit, 30% midpoint, 30% completion — never have too much unbilled work.' },
        { label: 'Detailed scope document', description: 'Extremely specific scope with examples and acceptance criteria.' },
        { label: 'Change order process', description: 'Any scope additions require a signed change order with new pricing.' },
        { label: '2 revision rounds only', description: 'Limit included revisions, with additional rounds billed hourly.' },
        { label: 'Kill fee clause', description: '50% of remaining contract value if the client cancels mid-project.' },
      );
    } else if (risk.level === 'high') {
      protectionChecklist.push(
        { label: '50%+ upfront payment', description: 'Minimum 50% of the total project value before any work starts.' },
        { label: 'Weekly billing cycle', description: 'Bill weekly to limit your exposure to one week of work at most.' },
        { label: 'Work-stoppage clause', description: 'Work pauses immediately if any invoice is overdue by more than 7 days.' },
        { label: 'Late payment interest', description: 'Include a 2% per month late payment interest clause in the contract.' },
        { label: 'Paid discovery phase', description: 'Start with a small, paid discovery phase (5-10% of project value) to test the relationship.' },
        { label: 'IP retention until paid', description: 'You retain all intellectual property rights until final payment is received.' },
        { label: 'Strict scope boundaries', description: 'Extremely tight scope with no room for interpretation.' },
      );
    } else {
      protectionChecklist.push(
        { label: 'Consider declining', description: 'The safest option is to politely decline this engagement.' },
        { label: '75-100% upfront', description: 'If you proceed, require near-full payment before starting any work.' },
        { label: 'Micro-engagement first', description: 'Start with a tiny deliverable ($500-$1,000 max) paid in full upfront to test the relationship.' },
        { label: 'All protections from High Risk', description: 'Apply weekly billing, work-stoppage clause, late payment interest, and IP retention.' },
        { label: 'Written approval on everything', description: 'Get written sign-off on every decision, deliverable, and direction change.' },
        { label: 'Exit strategy ready', description: 'Have a clear termination clause and be prepared to use it.' },
        { label: 'No financial overexposure', description: 'Never have more than one week of unpaid work with this client at any time.' },
      );
    }

    return {
      totalScore,
      maxPossible,
      percentage,
      riskLevel: risk.level,
      riskLabel: risk.label,
      riskColor: risk.color,
      riskBgColor: risk.bgColor,
      riskBorderColor: risk.borderColor,
      categories,
      redFlags,
      greenFlags,
      recommendation,
      protectionChecklist,
    };
  }, [answers]);

  const handleCalculate = () => {
    setCalculated(true);
    setStep(3);
  };

  // Copy report to clipboard
  const generateReport = (): string => {
    const lines: string[] = [];
    lines.push('='.repeat(60));
    lines.push('CLIENT RED FLAG ASSESSMENT REPORT');
    lines.push('='.repeat(60));
    lines.push('');
    lines.push('OVERALL RISK ASSESSMENT');
    lines.push('-'.repeat(45));
    lines.push(`Risk Score:    ${results.percentage}/100`);
    lines.push(`Risk Level:    ${results.riskLabel}`);
    lines.push('');
    lines.push('RISK BY CATEGORY');
    lines.push('-'.repeat(45));
    results.categories.forEach((c) => {
      lines.push(`${c.label.padEnd(25)} ${c.percentage}% (${c.score}/${c.maxScore})`);
    });
    lines.push('');
    if (results.redFlags.length > 0) {
      lines.push('RED FLAGS IDENTIFIED');
      lines.push('-'.repeat(45));
      results.redFlags.forEach((f, i) => {
        lines.push(`${i + 1}. [${f.severity.toUpperCase()}] ${f.label}`);
        lines.push(`   ${f.explanation}`);
      });
      lines.push('');
    }
    if (results.greenFlags.length > 0) {
      lines.push('GREEN FLAGS IDENTIFIED');
      lines.push('-'.repeat(45));
      results.greenFlags.forEach((f, i) => {
        lines.push(`${i + 1}. ${f.label}: ${f.explanation}`);
      });
      lines.push('');
    }
    lines.push('RECOMMENDATION');
    lines.push('-'.repeat(45));
    lines.push(results.recommendation);
    lines.push('');
    lines.push('PROTECTION CHECKLIST');
    lines.push('-'.repeat(45));
    results.protectionChecklist.forEach((item, i) => {
      lines.push(`[ ] ${i + 1}. ${item.label}: ${item.description}`);
    });
    lines.push('');
    lines.push('-'.repeat(60));
    lines.push('Generated by InvoiceFlow Client Red Flag Checker');
    lines.push('https://www.invoiceflow.au/tools/client-red-flag-checker');
    lines.push('-'.repeat(60));
    return lines.join('\n');
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateReport()).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const renderQuestion = (question: Question, index: number) => {
    const selectedScore = answers[question.id];
    return (
      <div key={question.id} className="bg-white/[0.04] border border-white/[0.06] rounded-xl p-5">
        <div className="flex items-start gap-3 mb-4">
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-amber-400/20 to-orange-500/20 border border-amber-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
            <span className="text-amber-400 text-xs font-bold">{index + 1}</span>
          </div>
          <p className="text-sm font-medium text-white leading-relaxed">{question.label}</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-2 ml-10">
          {question.options.map((option, optIdx) => {
            const isSelected = selectedScore === option.score;
            const riskColor =
              option.score === 0
                ? 'border-green-400/40 bg-green-400/10 text-green-300'
                : option.score === 1
                  ? 'border-yellow-400/40 bg-yellow-400/10 text-yellow-300'
                  : option.score === 2
                    ? 'border-orange-400/40 bg-orange-400/10 text-orange-300'
                    : 'border-red-400/40 bg-red-400/10 text-red-300';
            return (
              <button
                key={optIdx}
                onClick={() => setAnswer(question.id, option.score)}
                className={`px-4 py-3 rounded-xl text-left text-sm font-medium transition-all ${
                  isSelected
                    ? riskColor
                    : 'bg-white/[0.03] border border-white/[0.08] text-slate-400 hover:bg-white/[0.06] hover:text-white hover:border-white/15'
                }`}
              >
                {option.text}
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-8">
      {/* Step Indicator */}
      <div className="flex items-center justify-center gap-2 sm:gap-4 mb-4">
        {([1, 2, 3] as const).map((s) => (
          <button
            key={s}
            onClick={() => { if (s < 3 || calculated) setStep(s); }}
            className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
              step === s
                ? 'bg-gradient-to-r from-amber-400/20 to-orange-500/20 border border-amber-400/40 text-amber-300'
                : s < step || (s === 3 && calculated)
                  ? 'bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10'
                  : 'bg-white/[0.02] border border-white/[0.05] text-slate-600 cursor-default'
            }`}
          >
            <div className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${
              step === s
                ? 'bg-amber-400/30 text-amber-300'
                : s < step || (s === 3 && calculated)
                  ? 'bg-white/10 text-slate-400'
                  : 'bg-white/5 text-slate-600'
            }`}>
              {s < step ? '\u2713' : s}
            </div>
            <span className="hidden sm:inline">
              {s === 1 ? 'Communication' : s === 2 ? 'Payment & Business' : 'Risk Assessment'}
            </span>
          </button>
        ))}
      </div>

      {/* Step 1: Communication Patterns */}
      {step === 1 && (
        <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
          <h3 className="text-lg font-bold text-white heading-font mb-2">Communication Patterns</h3>
          <p className="text-sm text-slate-400 mb-6">
            Assess how the client communicates during the sales and proposal stage. These patterns
            are strong predictors of how the project will go.
          </p>

          <div className="space-y-5">
            {COMMUNICATION_QUESTIONS.map((q, i) => renderQuestion(q, i))}
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={() => setStep(2)}
              disabled={!step1Complete}
              className={`rounded-xl px-10 py-4 font-semibold text-lg transition-all ${
                step1Complete
                  ? 'bg-gradient-to-r from-amber-400 to-orange-500 text-white hover:from-amber-300 hover:to-orange-400 shadow-lg shadow-amber-500/20'
                  : 'bg-white/5 border border-white/10 text-slate-600 cursor-not-allowed'
              }`}
            >
              Next: Payment &amp; Business Signals
            </button>
            {!step1Complete && (
              <p className="text-xs text-slate-500 mt-3">
                Answer all 5 questions to continue
              </p>
            )}
          </div>
        </div>
      )}

      {/* Step 2: Payment & Business Signals */}
      {step === 2 && (
        <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
          <h3 className="text-lg font-bold text-white heading-font mb-2">Payment &amp; Business Signals</h3>
          <p className="text-sm text-slate-400 mb-6">
            Evaluate the client&apos;s payment behaviour, contract attitude, and business legitimacy.
            These factors directly predict whether you will get paid on time (or at all).
          </p>

          <div className="space-y-5">
            {PAYMENT_QUESTIONS.map((q, i) => renderQuestion(q, i + 5))}
          </div>

          <div className="mt-8 flex items-center justify-center gap-3">
            <button
              onClick={() => setStep(1)}
              className="px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-slate-300 font-medium hover:bg-white/10 transition-all"
            >
              Back
            </button>
            <button
              onClick={handleCalculate}
              disabled={!step2Complete}
              className={`rounded-xl px-10 py-4 font-semibold text-lg transition-all ${
                step2Complete
                  ? 'bg-gradient-to-r from-amber-400 to-orange-500 text-white hover:from-amber-300 hover:to-orange-400 shadow-lg shadow-amber-500/20'
                  : 'bg-white/5 border border-white/10 text-slate-600 cursor-not-allowed'
              }`}
            >
              Get Risk Assessment
            </button>
          </div>
          {!step2Complete && (
            <p className="text-xs text-slate-500 mt-3 text-center">
              Answer all 5 questions to continue
            </p>
          )}
        </div>
      )}

      {/* Step 3: Results */}
      {step === 3 && calculated && (
        <>
          {/* Overall Risk Score */}
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white heading-font mb-6 text-center">
              Client Risk Assessment
            </h3>

            {/* Risk Score Gauge */}
            <div className="text-center mb-8">
              <div className="relative inline-flex items-center justify-center w-48 h-48 mb-4">
                {/* Background circle */}
                <div className="absolute inset-0 rounded-full border-[12px] border-white/5" />
                {/* Progress circle */}
                <svg className="absolute inset-0 w-48 h-48 -rotate-90" viewBox="0 0 192 192">
                  <circle
                    cx="96"
                    cy="96"
                    r="84"
                    fill="none"
                    stroke={
                      results.riskLevel === 'low' ? '#4ade80'
                        : results.riskLevel === 'moderate' ? '#facc15'
                          : results.riskLevel === 'high' ? '#fb923c'
                            : '#f87171'
                    }
                    strokeWidth="12"
                    strokeDasharray={`${(results.percentage / 100) * 528} 528`}
                    strokeLinecap="round"
                    className="transition-all duration-1000"
                  />
                </svg>
                <div className="text-center z-10">
                  <p className={`text-4xl font-bold ${results.riskColor}`}>{results.percentage}</p>
                  <p className="text-xs text-slate-500">out of 100</p>
                </div>
              </div>
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${
                results.riskLevel === 'low' ? 'bg-green-400/10 border border-green-400/20'
                  : results.riskLevel === 'moderate' ? 'bg-yellow-400/10 border border-yellow-400/20'
                    : results.riskLevel === 'high' ? 'bg-orange-400/10 border border-orange-400/20'
                      : 'bg-red-400/10 border border-red-400/20'
              }`}>
                <div className={`w-2.5 h-2.5 rounded-full ${results.riskBgColor}`} />
                <span className={`text-sm font-semibold ${results.riskColor}`}>{results.riskLabel}</span>
              </div>
            </div>

            {/* Risk Scale */}
            <div className="max-w-md mx-auto mb-6">
              <div className="h-3 rounded-full overflow-hidden flex">
                <div className="flex-1 bg-green-400/60" />
                <div className="flex-1 bg-yellow-400/60" />
                <div className="flex-1 bg-orange-400/60" />
                <div className="flex-1 bg-red-400/60" />
              </div>
              <div className="flex justify-between mt-1.5">
                <span className="text-xs text-green-400">Low</span>
                <span className="text-xs text-yellow-400">Moderate</span>
                <span className="text-xs text-orange-400">High</span>
                <span className="text-xs text-red-400">Critical</span>
              </div>
              {/* Score marker */}
              <div className="relative h-0 -mt-7">
                <div
                  className="absolute -translate-x-1/2 w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[6px] border-t-white transition-all duration-700"
                  style={{ left: `${results.percentage}%` }}
                />
              </div>
            </div>
          </div>

          {/* Category Breakdown */}
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white heading-font mb-6">Risk Breakdown by Category</h3>

            <div className="space-y-5">
              {results.categories.map((cat) => (
                <div key={cat.category}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${cat.bgColor}`} />
                      <span className="text-sm font-medium text-white">{cat.label}</span>
                    </div>
                    <span className={`text-sm font-bold ${cat.color}`}>{cat.percentage}%</span>
                  </div>
                  <div className="h-4 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-700 ${cat.bgColor}`}
                      style={{ width: `${cat.percentage}%`, opacity: 0.7 }}
                    />
                  </div>
                  <p className="text-xs text-slate-500 mt-1">
                    {cat.percentage <= 25
                      ? 'Low concern'
                      : cat.percentage <= 50
                        ? 'Some concerns'
                        : cat.percentage <= 75
                          ? 'Significant concerns'
                          : 'Critical concerns'}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Red Flags */}
          {results.redFlags.length > 0 && (
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
              <h3 className="text-lg font-bold text-white heading-font mb-6">
                Red Flags Identified ({results.redFlags.length})
              </h3>
              <div className="space-y-3">
                {results.redFlags.map((flag, i) => (
                  <div key={i} className={`rounded-xl p-4 flex items-start gap-3 ${
                    flag.severity === 'critical'
                      ? 'bg-red-400/5 border border-red-400/15'
                      : flag.severity === 'high'
                        ? 'bg-orange-400/5 border border-orange-400/15'
                        : 'bg-yellow-400/5 border border-yellow-400/15'
                  }`}>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      flag.severity === 'critical'
                        ? 'bg-red-400/20 border border-red-400/30'
                        : flag.severity === 'high'
                          ? 'bg-orange-400/20 border border-orange-400/30'
                          : 'bg-yellow-400/20 border border-yellow-400/30'
                    }`}>
                      <span className={`text-xs font-bold ${
                        flag.severity === 'critical'
                          ? 'text-red-400'
                          : flag.severity === 'high'
                            ? 'text-orange-400'
                            : 'text-yellow-400'
                      }`}>!</span>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <p className="text-sm font-medium text-white">{flag.label}</p>
                        <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                          flag.severity === 'critical'
                            ? 'bg-red-400/10 text-red-400'
                            : flag.severity === 'high'
                              ? 'bg-orange-400/10 text-orange-400'
                              : 'bg-yellow-400/10 text-yellow-400'
                        }`}>
                          {flag.severity}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400">{flag.explanation}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Green Flags */}
          {results.greenFlags.length > 0 && (
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
              <h3 className="text-lg font-bold text-white heading-font mb-6">
                Green Flags Identified ({results.greenFlags.length})
              </h3>
              <div className="space-y-3">
                {results.greenFlags.map((flag, i) => (
                  <div key={i} className="bg-green-400/5 border border-green-400/15 rounded-xl p-4 flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-400/20 border border-green-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-400 text-xs font-bold">{'\u2713'}</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-green-300 mb-1">{flag.label}</p>
                      <p className="text-xs text-slate-400">{flag.explanation}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Recommendation */}
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white heading-font mb-4">Recommendation</h3>
            <div className={`rounded-xl p-5 ${
              results.riskLevel === 'low'
                ? 'bg-gradient-to-r from-green-400/10 to-emerald-500/10 border border-green-400/20'
                : results.riskLevel === 'moderate'
                  ? 'bg-gradient-to-r from-yellow-400/10 to-amber-500/10 border border-yellow-400/20'
                  : results.riskLevel === 'high'
                    ? 'bg-gradient-to-r from-orange-400/10 to-amber-500/10 border border-orange-400/20'
                    : 'bg-gradient-to-r from-red-400/10 to-rose-500/10 border border-red-400/20'
            }`}>
              <div className="flex items-center gap-2 mb-3">
                <span className={`text-lg ${
                  results.riskLevel === 'low' ? 'text-green-400'
                    : results.riskLevel === 'moderate' ? 'text-yellow-400'
                      : results.riskLevel === 'high' ? 'text-orange-400'
                        : 'text-red-400'
                }`}>
                  {results.riskLevel === 'low' ? 'Proceed with standard contract'
                    : results.riskLevel === 'moderate' ? 'Proceed with caution'
                      : results.riskLevel === 'high' ? 'Proceed with strong protections'
                        : 'Consider declining this client'}
                </span>
              </div>
              <p className="text-sm text-slate-300">{results.recommendation}</p>
            </div>
          </div>

          {/* Protection Checklist */}
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white heading-font mb-2">Protection Checklist</h3>
            <p className="text-sm text-slate-400 mb-6">
              Based on this client&apos;s risk level, here are the specific protections to put in place
              before signing.
            </p>
            <div className="space-y-3">
              {results.protectionChecklist.map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-white/5 rounded-xl p-4">
                  <div className={`w-6 h-6 rounded flex items-center justify-center flex-shrink-0 mt-0.5 border ${
                    results.riskLevel === 'low' ? 'border-green-400/30 bg-green-400/10'
                      : results.riskLevel === 'moderate' ? 'border-yellow-400/30 bg-yellow-400/10'
                        : results.riskLevel === 'high' ? 'border-orange-400/30 bg-orange-400/10'
                          : 'border-red-400/30 bg-red-400/10'
                  }`}>
                    <span className={`text-xs font-bold ${
                      results.riskLevel === 'low' ? 'text-green-400'
                        : results.riskLevel === 'moderate' ? 'text-yellow-400'
                          : results.riskLevel === 'high' ? 'text-orange-400'
                            : 'text-red-400'
                    }`}>{i + 1}</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">{item.label}</p>
                    <p className="text-xs text-slate-400 mt-0.5">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Copy Report & Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={handleCopy}
              className="bg-gradient-to-r from-amber-400 to-orange-500 text-white font-semibold rounded-xl px-8 py-4 hover:from-amber-300 hover:to-orange-400 transition-all"
            >
              {copied ? 'Copied to Clipboard!' : 'Copy Risk Report'}
            </button>
            <button
              onClick={() => { setCalculated(false); setAnswers({}); setStep(1); }}
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
                href="/tools/contract-generator"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-amber-400/30 rounded-xl p-4 transition-all group"
              >
                <p className="text-white font-medium text-sm group-hover:text-amber-300 transition-colors">
                  Freelance Contract Generator
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Generate a professional contract with all the right clauses
                </p>
              </a>
              <a
                href="/tools/client-onboarding-checklist"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-amber-400/30 rounded-xl p-4 transition-all group"
              >
                <p className="text-white font-medium text-sm group-hover:text-amber-300 transition-colors">
                  Client Onboarding Checklist
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Professional onboarding process for new client relationships
                </p>
              </a>
              <a
                href="/tools/scope-change-calculator"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-amber-400/30 rounded-xl p-4 transition-all group"
              >
                <p className="text-white font-medium text-sm group-hover:text-amber-300 transition-colors">
                  Scope Change Calculator
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Calculate cost and timeline impact of scope changes
                </p>
              </a>
            </div>
          </div>

          <div className="text-center">
            <p className="text-xs text-slate-500 max-w-2xl mx-auto">
              This tool provides a general risk assessment based on common freelancer-client
              relationship patterns. Every situation is unique — use the results as a guide
              alongside your own judgement and experience. This is not legal or financial advice.
            </p>
          </div>
        </>
      )}
    </div>
  );
}
