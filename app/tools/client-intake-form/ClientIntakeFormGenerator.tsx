'use client';

import { useState, useRef, useCallback } from 'react';

/* ─────────────────────────── Types ─────────────────────────── */

type Step = 1 | 2 | 3 | 4;

type ServiceType =
  | 'web_design'
  | 'development'
  | 'copywriting'
  | 'graphic_design'
  | 'video_production'
  | 'social_media'
  | 'consulting'
  | 'photography'
  | 'other';

type Duration = '1_2_weeks' | '2_4_weeks' | '1_2_months' | '2_3_months' | '3_6_months' | '6_plus_months';

type BudgetRange = 'under_1k' | '1k_3k' | '3k_5k' | '5k_10k' | '10k_25k' | '25k_plus' | 'tbd';

type SectionId =
  | 'company_info'
  | 'project_goals'
  | 'brand_guidelines'
  | 'content_assets'
  | 'technical_requirements'
  | 'budget_timeline'
  | 'communication'
  | 'competitor_references';

type ResponseType = 'text' | 'multiple_choice' | 'yes_no' | 'file_upload';

interface CustomQuestion {
  id: string;
  question: string;
  responseType: ResponseType;
}

/* ─────────────────────────── Constants ─────────────────────────── */

const SERVICE_LABELS: Record<ServiceType, string> = {
  web_design: 'Web Design',
  development: 'Development',
  copywriting: 'Copywriting',
  graphic_design: 'Graphic Design',
  video_production: 'Video Production',
  social_media: 'Social Media',
  consulting: 'Consulting',
  photography: 'Photography',
  other: 'Other',
};

const DURATION_LABELS: Record<Duration, string> = {
  '1_2_weeks': '1-2 Weeks',
  '2_4_weeks': '2-4 Weeks',
  '1_2_months': '1-2 Months',
  '2_3_months': '2-3 Months',
  '3_6_months': '3-6 Months',
  '6_plus_months': '6+ Months',
};

const BUDGET_LABELS: Record<BudgetRange, string> = {
  under_1k: 'Under $1,000',
  '1k_3k': '$1,000 - $3,000',
  '3k_5k': '$3,000 - $5,000',
  '5k_10k': '$5,000 - $10,000',
  '10k_25k': '$10,000 - $25,000',
  '25k_plus': '$25,000+',
  tbd: 'To Be Discussed',
};

const RESPONSE_TYPE_LABELS: Record<ResponseType, string> = {
  text: 'Text Answer',
  multiple_choice: 'Multiple Choice',
  yes_no: 'Yes / No',
  file_upload: 'File Upload',
};

/* ── Section Definitions ── */

interface SectionDef {
  id: SectionId;
  title: string;
  description: string;
  questions: string[];
}

const SECTIONS: SectionDef[] = [
  {
    id: 'company_info',
    title: 'Company Information',
    description: 'Basic details about the client and their business',
    questions: [
      'What is your business name?',
      'What industry are you in?',
      'What is your website URL (if applicable)?',
      'How many employees does your company have?',
      'Who is your target market or ideal customer?',
      'What are your main products or services?',
    ],
  },
  {
    id: 'project_goals',
    title: 'Project Goals',
    description: 'Understanding what the client wants to achieve',
    questions: [
      'What problem are you trying to solve with this project?',
      'What does success look like for this project?',
      'Are there specific KPIs or metrics you want to improve?',
      'What is your desired timeline for completion?',
      'What inspired this project — why now?',
    ],
  },
  {
    id: 'brand_guidelines',
    title: 'Brand Guidelines',
    description: 'Visual identity and brand consistency requirements',
    questions: [
      'Do you have existing brand guidelines we should follow?',
      'Are there preferred colours or fonts we should use?',
      'How would you describe your brand tone of voice?',
      'Are there brands you admire that we can use as inspiration?',
      'Are there specific brand elements we must include (logo, tagline, etc.)?',
    ],
  },
  {
    id: 'content_assets',
    title: 'Content & Assets',
    description: 'Materials the client will provide or needs created',
    questions: [
      'Will you provide the written content and copy, or do you need us to create it?',
      'Do you have existing images, videos, or graphics we can use?',
      'Do you have your logo in vector format (SVG, AI, EPS)?',
      'Are there any existing assets or materials we should avoid using?',
      'What is your deadline for providing content and assets to us?',
    ],
  },
  {
    id: 'technical_requirements',
    title: 'Technical Requirements',
    description: 'Platform, integration, and technical specifications',
    questions: [
      'Do you have a preferred platform or technology stack?',
      'Are there existing systems or tools this project needs to integrate with?',
      'Do you have hosting preferences or an existing hosting provider?',
      'What are your requirements for mobile responsiveness?',
      'Are there specific accessibility requirements we need to meet?',
    ],
  },
  {
    id: 'budget_timeline',
    title: 'Budget & Timeline',
    description: 'Financial and scheduling expectations',
    questions: [
      'What is your confirmed budget range for this project?',
      'Is your budget flexible or fixed?',
      'When would you like the project to start?',
      'Is there a hard deadline we need to work towards?',
      'Who are the decision-makers involved in approving deliverables and budget?',
    ],
  },
  {
    id: 'communication',
    title: 'Communication Preferences',
    description: 'How the client prefers to collaborate',
    questions: [
      'What is your preferred method of communication (email, Slack, phone, etc.)?',
      'What are the best times to reach you?',
      'Who is the primary point of contact for this project?',
      'What is your typical turnaround time for reviewing and approving deliverables?',
      'Do you prefer video calls, phone calls, or in-person meetings for check-ins?',
    ],
  },
  {
    id: 'competitor_references',
    title: 'Competitor References',
    description: 'Market context and competitive positioning',
    questions: [
      'Who are your top 3 competitors?',
      'What do you like about their approach or online presence?',
      'What would you do differently from your competitors?',
      'How do you want to be positioned in the market relative to them?',
    ],
  },
];

/* ── Default sections by service type ── */

const DEFAULT_SECTIONS: Record<ServiceType, SectionId[]> = {
  web_design: ['company_info', 'project_goals', 'brand_guidelines', 'content_assets', 'technical_requirements', 'budget_timeline', 'communication'],
  development: ['company_info', 'project_goals', 'technical_requirements', 'content_assets', 'budget_timeline', 'communication'],
  copywriting: ['company_info', 'project_goals', 'brand_guidelines', 'content_assets', 'competitor_references', 'budget_timeline', 'communication'],
  graphic_design: ['company_info', 'project_goals', 'brand_guidelines', 'content_assets', 'competitor_references', 'budget_timeline', 'communication'],
  video_production: ['company_info', 'project_goals', 'brand_guidelines', 'content_assets', 'budget_timeline', 'communication'],
  social_media: ['company_info', 'project_goals', 'brand_guidelines', 'content_assets', 'competitor_references', 'budget_timeline', 'communication'],
  consulting: ['company_info', 'project_goals', 'competitor_references', 'budget_timeline', 'communication'],
  photography: ['company_info', 'project_goals', 'brand_guidelines', 'content_assets', 'budget_timeline', 'communication'],
  other: ['company_info', 'project_goals', 'budget_timeline', 'communication'],
};

/* ─────────────────────────── Helpers ─────────────────────────── */

function generateId(): string {
  return Math.random().toString(36).substring(2, 9);
}

/* ─────────────────────────── Step Indicator ─────────────────────────── */

function StepIndicator({ step }: { step: Step }) {
  const steps = [
    { num: 1, label: 'Services' },
    { num: 2, label: 'Sections' },
    { num: 3, label: 'Custom Qs' },
    { num: 4, label: 'Form' },
  ];

  return (
    <div className="flex items-center justify-center gap-0 mb-10">
      {steps.map((s, i) => (
        <div key={s.num} className="flex items-center">
          <div className="flex flex-col items-center">
            <div
              className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                step > s.num
                  ? 'bg-teal-500 text-white'
                  : step === s.num
                  ? 'bg-gradient-to-br from-cyan-400 to-teal-500 text-white ring-4 ring-cyan-400/20'
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
                step === s.num ? 'text-cyan-400' : step > s.num ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              {s.label}
            </span>
          </div>
          {i < steps.length - 1 && (
            <div
              className={`w-10 sm:w-16 h-0.5 mb-5 mx-1.5 transition-all ${
                step > s.num ? 'bg-teal-500' : 'bg-white/10'
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
}

/* ─────────────────────────── Form Generation ─────────────────────────── */

function generateFormText(
  serviceType: ServiceType,
  duration: Duration | '',
  budgetRange: BudgetRange | '',
  selectedSections: SectionId[],
  customQuestions: CustomQuestion[]
): string {
  const divider = '────────────────────────────────────────────────────────────';
  const subDivider = '──────────────────────────────────';

  let form = '';

  // Header
  form += `CLIENT INTAKE QUESTIONNAIRE\n`;
  form += divider + '\n\n';
  form += `Service Type:       ${SERVICE_LABELS[serviceType]}\n`;
  if (duration) form += `Typical Duration:   ${DURATION_LABELS[duration]}\n`;
  if (budgetRange) form += `Budget Range:       ${BUDGET_LABELS[budgetRange]}\n`;
  form += `Date Prepared:      ${new Date().toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' })}\n`;
  form += '\n' + divider + '\n';

  form += '\nPlease complete this questionnaire as thoroughly as possible.\n';
  form += 'Your answers help us understand your needs and deliver the best results.\n';

  // Selected sections
  let sectionNum = 1;
  for (const sectionId of selectedSections) {
    const section = SECTIONS.find((s) => s.id === sectionId);
    if (!section) continue;

    form += '\n\n';
    form += `${sectionNum}. ${section.title.toUpperCase()}\n`;
    form += subDivider + '\n';

    section.questions.forEach((q, qi) => {
      form += `\n  ${sectionNum}.${qi + 1}  ${q}\n`;
      form += `       Answer: _______________________________________________\n`;
    });

    sectionNum++;
  }

  // Custom questions
  if (customQuestions.length > 0) {
    const customWithText = customQuestions.filter((q) => q.question.trim() !== '');
    if (customWithText.length > 0) {
      form += '\n\n';
      form += `${sectionNum}. ADDITIONAL QUESTIONS\n`;
      form += subDivider + '\n';

      customWithText.forEach((q, qi) => {
        form += `\n  ${sectionNum}.${qi + 1}  ${q.question}\n`;
        if (q.responseType === 'yes_no') {
          form += `       Answer: [ ] Yes   [ ] No\n`;
        } else if (q.responseType === 'multiple_choice') {
          form += `       Answer: [ ] Option A   [ ] Option B   [ ] Option C   [ ] Other: ____\n`;
        } else if (q.responseType === 'file_upload') {
          form += `       Please attach file(s): ________________________________\n`;
        } else {
          form += `       Answer: _______________________________________________\n`;
        }
      });
    }
  }

  // Footer
  form += '\n\n' + divider + '\n';
  form += '\nThank you for taking the time to complete this questionnaire.\n';
  form += 'We will review your responses and follow up within 1-2 business days.\n';
  form += '\n' + divider + '\n';
  form += `Generated with InvoiceFlow — invoiceflow.au/tools/client-intake-form`;

  return form;
}

/* ─────────────────────────── Main Component ─────────────────────────── */

export default function ClientIntakeFormGenerator() {
  const [step, setStep] = useState<Step>(1);
  const [copied, setCopied] = useState(false);
  const resultRef = useRef<HTMLDivElement>(null);

  /* Step 1: Your Services */
  const [serviceType, setServiceType] = useState<ServiceType>('web_design');
  const [duration, setDuration] = useState<Duration | ''>('');
  const [budgetRange, setBudgetRange] = useState<BudgetRange | ''>('');

  /* Step 2: Sections */
  const [selectedSections, setSelectedSections] = useState<SectionId[]>([...DEFAULT_SECTIONS.web_design]);
  const [sectionsInitialised, setSectionsInitialised] = useState(false);

  /* Step 3: Custom Questions */
  const [customQuestions, setCustomQuestions] = useState<CustomQuestion[]>([]);

  /* Toggle section */
  const toggleSection = (id: SectionId) => {
    setSelectedSections((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  /* Add custom question */
  const addCustomQuestion = () => {
    if (customQuestions.length >= 5) return;
    setCustomQuestions((prev) => [
      ...prev,
      { id: generateId(), question: '', responseType: 'text' },
    ]);
  };

  /* Update custom question */
  const updateCustomQuestion = (id: string, field: keyof Omit<CustomQuestion, 'id'>, value: string) => {
    setCustomQuestions((prev) =>
      prev.map((q) => (q.id === id ? { ...q, [field]: value } : q))
    );
  };

  /* Remove custom question */
  const removeCustomQuestion = (id: string) => {
    setCustomQuestions((prev) => prev.filter((q) => q.id !== id));
  };

  /* Navigation */
  const goToStep = (target: Step) => {
    if (target === 2 && !sectionsInitialised) {
      setSelectedSections([...DEFAULT_SECTIONS[serviceType]]);
      setSectionsInitialised(true);
    }
    if (target === 4) {
      setStep(target);
      setTimeout(() => {
        resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
      return;
    }
    setStep(target);
  };

  /* Copy */
  const copyForm = useCallback(async () => {
    const text = generateFormText(serviceType, duration, budgetRange, selectedSections, customQuestions);
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      const el = document.createElement('textarea');
      el.value = text;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  }, [serviceType, duration, budgetRange, selectedSections, customQuestions]);

  /* Print */
  const printForm = useCallback(() => {
    const text = generateFormText(serviceType, duration, budgetRange, selectedSections, customQuestions);
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>Client Intake Form — ${SERVICE_LABELS[serviceType]}</title>
            <style>
              body { font-family: 'Courier New', monospace; font-size: 13px; line-height: 1.6; padding: 40px; color: #1a1a1a; max-width: 800px; margin: 0 auto; }
              @media print { body { padding: 20px; } }
            </style>
          </head>
          <body><pre>${text.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</pre></body>
        </html>
      `);
      printWindow.document.close();
      printWindow.print();
    }
  }, [serviceType, duration, budgetRange, selectedSections, customQuestions]);

  /* Email subject line */
  const emailSubject = `New Project Questionnaire — ${SERVICE_LABELS[serviceType]} Project`;
  const emailBody = encodeURIComponent(
    `Hi,\n\nThank you for your interest in working together. To help me understand your project and prepare the best possible proposal, please take a few minutes to answer the questions in the attached intake form.\n\nThis typically takes about 15 minutes to complete. Once I receive your responses, I will review them and follow up within 1-2 business days.\n\nLooking forward to learning more about your project.\n\nBest regards`
  );

  /* Generated form text */
  const formText = step === 4 ? generateFormText(serviceType, duration, budgetRange, selectedSections, customQuestions) : '';

  /* Total question count */
  const totalQuestions = selectedSections.reduce((sum, sId) => {
    const sec = SECTIONS.find((s) => s.id === sId);
    return sum + (sec ? sec.questions.length : 0);
  }, 0) + customQuestions.filter((q) => q.question.trim() !== '').length;

  return (
    <div className="glass rounded-2xl p-6 sm:p-8" ref={resultRef}>
      <StepIndicator step={step} />

      {/* ──── STEP 1: Your Services ──── */}
      {step === 1 && (
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-bold text-white heading-font mb-1">Your Services</h2>
            <p className="text-sm text-slate-400">
              Tell us about the type of work you do. This determines which questionnaire sections are
              pre-selected for you.
            </p>
          </div>

          {/* Service Type */}
          <div>
            <label className="block text-sm text-slate-300 font-medium mb-2">Service type</label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {(Object.keys(SERVICE_LABELS) as ServiceType[]).map((t) => (
                <button
                  key={t}
                  onClick={() => {
                    setServiceType(t);
                    setSectionsInitialised(false);
                  }}
                  className={`text-sm py-2.5 px-3 rounded-xl border transition-all text-center ${
                    serviceType === t
                      ? 'bg-gradient-to-r from-cyan-500/20 to-teal-500/20 border-cyan-500/40 text-white font-medium'
                      : 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {SERVICE_LABELS[t]}
                </button>
              ))}
            </div>
          </div>

          {/* Duration */}
          <div>
            <label className="block text-sm text-slate-300 font-medium mb-2">Typical project duration</label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {(Object.keys(DURATION_LABELS) as Duration[]).map((d) => (
                <button
                  key={d}
                  onClick={() => setDuration(duration === d ? '' : d)}
                  className={`text-sm py-2.5 px-3 rounded-xl border transition-all text-center ${
                    duration === d
                      ? 'bg-gradient-to-r from-cyan-500/20 to-teal-500/20 border-cyan-500/40 text-white font-medium'
                      : 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {DURATION_LABELS[d]}
                </button>
              ))}
            </div>
          </div>

          {/* Budget Range */}
          <div>
            <label className="block text-sm text-slate-300 font-medium mb-2">Typical budget range</label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {(Object.keys(BUDGET_LABELS) as BudgetRange[]).map((b) => (
                <button
                  key={b}
                  onClick={() => setBudgetRange(budgetRange === b ? '' : b)}
                  className={`text-sm py-2.5 px-3 rounded-xl border transition-all text-center ${
                    budgetRange === b
                      ? 'bg-gradient-to-r from-cyan-500/20 to-teal-500/20 border-cyan-500/40 text-white font-medium'
                      : 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {BUDGET_LABELS[b]}
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-end pt-2">
            <button
              onClick={() => goToStep(2)}
              className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-teal-500 text-white text-sm font-semibold rounded-lg hover:from-cyan-400 hover:to-teal-400 transition-all"
            >
              Next: Questionnaire Sections
            </button>
          </div>
        </div>
      )}

      {/* ──── STEP 2: Questionnaire Sections ──── */}
      {step === 2 && (
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-bold text-white heading-font mb-1">Questionnaire Sections</h2>
            <p className="text-sm text-slate-400">
              Toggle the sections you want in your intake form. Defaults are pre-selected based on
              your service type ({SERVICE_LABELS[serviceType]}).
            </p>
          </div>

          <div className="space-y-3">
            {SECTIONS.map((section) => {
              const isSelected = selectedSections.includes(section.id);
              return (
                <div
                  key={section.id}
                  className={`rounded-xl border transition-all ${
                    isSelected
                      ? 'bg-cyan-500/5 border-cyan-500/20'
                      : 'bg-white/5 border-white/10'
                  }`}
                >
                  <div className="flex items-start gap-4 p-4">
                    {/* Toggle */}
                    <button
                      type="button"
                      role="switch"
                      aria-checked={isSelected}
                      onClick={() => toggleSection(section.id)}
                      className={`relative w-11 h-6 rounded-full flex-shrink-0 mt-0.5 transition-colors ${
                        isSelected ? 'bg-gradient-to-r from-cyan-500 to-teal-500' : 'bg-white/15'
                      }`}
                    >
                      <span
                        className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform ${
                          isSelected ? 'translate-x-5' : 'translate-x-0'
                        }`}
                      />
                    </button>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="text-white font-semibold text-sm">{section.title}</h4>
                        <span className="text-xs text-slate-500">{section.questions.length} questions</span>
                      </div>
                      <p className="text-xs text-slate-400 mb-2">{section.description}</p>

                      {/* Preview questions (collapsed) */}
                      {isSelected && (
                        <div className="mt-2 space-y-1">
                          {section.questions.map((q, qi) => (
                            <p key={qi} className="text-xs text-slate-500 flex items-start gap-2">
                              <span className="text-cyan-400/60 font-mono flex-shrink-0">{qi + 1}.</span>
                              {q}
                            </p>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Section count */}
          <div className="bg-white/5 rounded-xl border border-white/10 p-4 flex items-center justify-between">
            <span className="text-sm text-slate-400">
              {selectedSections.length} section{selectedSections.length !== 1 ? 's' : ''} selected
            </span>
            <span className="text-sm text-cyan-400 font-medium">
              {selectedSections.reduce((sum, sId) => {
                const sec = SECTIONS.find((s) => s.id === sId);
                return sum + (sec ? sec.questions.length : 0);
              }, 0)}{' '}
              questions total
            </span>
          </div>

          <div className="flex justify-between pt-2">
            <button
              onClick={() => goToStep(1)}
              className="px-5 py-2.5 bg-white/5 border border-white/10 text-slate-300 text-sm font-medium rounded-lg hover:bg-white/10 transition-all"
            >
              Back
            </button>
            <button
              onClick={() => goToStep(3)}
              disabled={selectedSections.length === 0}
              className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-teal-500 text-white text-sm font-semibold rounded-lg hover:from-cyan-400 hover:to-teal-400 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Next: Custom Questions
            </button>
          </div>
        </div>
      )}

      {/* ──── STEP 3: Custom Questions ──── */}
      {step === 3 && (
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-bold text-white heading-font mb-1">Custom Questions</h2>
            <p className="text-sm text-slate-400">
              Add up to 5 additional questions that are specific to your workflow or this particular
              client. These appear at the end of the questionnaire.
            </p>
          </div>

          {/* Existing custom questions */}
          <div className="space-y-3">
            {customQuestions.map((q, i) => (
              <div key={q.id} className="bg-white/5 rounded-xl border border-white/10 p-4">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-xs font-bold text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 rounded-full px-2.5 py-0.5">
                    Question {i + 1}
                  </span>
                  <button
                    onClick={() => removeCustomQuestion(q.id)}
                    className="text-slate-500 hover:text-red-400 transition-colors text-sm p-1"
                    title="Remove question"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="space-y-3">
                  <div>
                    <label className="block text-xs text-slate-400 mb-1">Question text</label>
                    <input
                      type="text"
                      value={q.question}
                      onChange={(e) => updateCustomQuestion(q.id, 'question', e.target.value)}
                      placeholder="e.g. Do you have an existing analytics setup we should be aware of?"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-400 mb-1">Response type</label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {(Object.keys(RESPONSE_TYPE_LABELS) as ResponseType[]).map((rt) => (
                        <button
                          key={rt}
                          onClick={() => updateCustomQuestion(q.id, 'responseType', rt)}
                          className={`text-xs py-2 px-2 rounded-lg border transition-all text-center ${
                            q.responseType === rt
                              ? 'bg-gradient-to-r from-cyan-500/20 to-teal-500/20 border-cyan-500/40 text-white font-medium'
                              : 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                          }`}
                        >
                          {RESPONSE_TYPE_LABELS[rt]}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Add button */}
            {customQuestions.length < 5 && (
              <button
                onClick={addCustomQuestion}
                className="w-full py-3 border border-dashed border-white/20 rounded-xl text-sm text-slate-400 hover:text-cyan-400 hover:border-cyan-400/30 transition-all flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Add Custom Question ({customQuestions.length}/5)
              </button>
            )}

            {customQuestions.length === 0 && (
              <div className="bg-white/5 rounded-xl border border-white/10 p-5 text-center">
                <p className="text-sm text-slate-400">
                  No custom questions added yet. You can skip this step and generate the form with
                  just the standard sections, or add questions specific to your workflow.
                </p>
              </div>
            )}
          </div>

          <div className="flex justify-between pt-2">
            <button
              onClick={() => goToStep(2)}
              className="px-5 py-2.5 bg-white/5 border border-white/10 text-slate-300 text-sm font-medium rounded-lg hover:bg-white/10 transition-all"
            >
              Back
            </button>
            <button
              onClick={() => goToStep(4)}
              className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-teal-500 text-white text-sm font-semibold rounded-lg hover:from-cyan-400 hover:to-teal-400 transition-all"
            >
              Generate Intake Form
            </button>
          </div>
        </div>
      )}

      {/* ──── STEP 4: Generated Form ──── */}
      {step === 4 && (
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-bold text-white heading-font mb-1">Your Client Intake Form</h2>
            <p className="text-sm text-slate-400">
              Ready to send to your client. Copy the questionnaire, print it, or email it using the
              suggested subject line below.
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-3">
            <button
              onClick={copyForm}
              className={`px-5 py-2.5 text-sm font-semibold rounded-lg transition-all flex items-center gap-2 ${
                copied
                  ? 'bg-emerald-500/20 border border-emerald-500/30 text-emerald-400'
                  : 'bg-gradient-to-r from-cyan-500 to-teal-500 text-white hover:from-cyan-400 hover:to-teal-400'
              }`}
            >
              {copied ? (
                <>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  Copied to Clipboard
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  Copy to Clipboard
                </>
              )}
            </button>
            <button
              onClick={printForm}
              className="px-5 py-2.5 bg-white/5 border border-white/10 text-slate-300 text-sm font-medium rounded-lg hover:bg-white/10 transition-all flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>
              Print
            </button>
            <a
              href={`mailto:?subject=${encodeURIComponent(emailSubject)}&body=${emailBody}`}
              className="px-5 py-2.5 bg-white/5 border border-white/10 text-slate-300 text-sm font-medium rounded-lg hover:bg-white/10 transition-all flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email to Client
            </a>
          </div>

          {/* Email subject suggestion */}
          <div className="bg-white/5 rounded-xl border border-white/10 p-4">
            <p className="text-xs text-slate-400 mb-1">Suggested email subject line:</p>
            <p className="text-sm text-white font-medium">{emailSubject}</p>
          </div>

          {/* Form preview */}
          <div className="bg-slate-950/50 rounded-xl border border-white/10 overflow-hidden">
            <div className="px-5 py-3 border-b border-white/10 flex items-center justify-between">
              <span className="text-xs text-slate-400 font-medium">
                CLIENT INTAKE FORM — {SERVICE_LABELS[serviceType]}
              </span>
              <span className="text-xs text-slate-500">
                {selectedSections.length} section{selectedSections.length !== 1 ? 's' : ''} | {totalQuestions} questions
              </span>
            </div>
            <pre className="p-5 text-sm text-slate-300 font-mono leading-relaxed overflow-x-auto whitespace-pre-wrap break-words max-h-[600px] overflow-y-auto">
              {formText}
            </pre>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-white/5 rounded-xl border border-white/10 p-4 text-center">
              <p className="text-2xl font-bold text-white">{selectedSections.length}</p>
              <p className="text-xs text-slate-400 mt-1">Sections</p>
            </div>
            <div className="bg-white/5 rounded-xl border border-white/10 p-4 text-center">
              <p className="text-2xl font-bold text-white">{totalQuestions}</p>
              <p className="text-xs text-slate-400 mt-1">Questions</p>
            </div>
            <div className="bg-white/5 rounded-xl border border-white/10 p-4 text-center">
              <p className="text-2xl font-bold text-white">{customQuestions.filter((q) => q.question.trim()).length}</p>
              <p className="text-xs text-slate-400 mt-1">Custom Qs</p>
            </div>
            <div className="bg-white/5 rounded-xl border border-white/10 p-4 text-center">
              <p className="text-2xl font-bold text-white">~{Math.max(5, Math.round(totalQuestions * 0.8))}m</p>
              <p className="text-xs text-slate-400 mt-1">Est. Completion</p>
            </div>
          </div>

          {/* Tip */}
          <div className="bg-gradient-to-r from-cyan-400/10 to-teal-500/10 border border-cyan-400/20 rounded-xl p-5">
            <p className="text-sm text-cyan-400 font-medium mb-2">Pro tip: Send this before your discovery call</p>
            <p className="text-sm text-slate-300">
              Send this intake form to your client as soon as they express interest. When they
              complete it before your first meeting, you walk into the conversation already informed.
              This lets you skip the basic questions and focus on strategy, creative direction, and
              building rapport — making the meeting dramatically more productive for both parties.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              onClick={() => goToStep(3)}
              className="flex-1 py-2.5 bg-white/5 border border-white/10 text-slate-300 text-sm font-medium rounded-lg hover:bg-white/10 transition-all"
            >
              Edit Custom Questions
            </button>
            <button
              onClick={() => goToStep(2)}
              className="flex-1 py-2.5 bg-white/5 border border-white/10 text-slate-300 text-sm font-medium rounded-lg hover:bg-white/10 transition-all"
            >
              Edit Sections
            </button>
            <button
              onClick={() => {
                setStep(1);
                setServiceType('web_design');
                setDuration('');
                setBudgetRange('');
                setSelectedSections([...DEFAULT_SECTIONS.web_design]);
                setSectionsInitialised(false);
                setCustomQuestions([]);
              }}
              className="flex-1 py-2.5 bg-white/5 border border-white/10 text-slate-300 text-sm font-medium rounded-lg hover:bg-white/10 transition-all"
            >
              Start New Form
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
