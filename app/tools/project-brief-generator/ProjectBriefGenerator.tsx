'use client';

import { useState, useRef } from 'react';

/* ---- Types ---- */

type Step = 1 | 2 | 3 | 4 | 5;

type ProjectType =
  | 'website'
  | 'mobile_app'
  | 'brand_identity'
  | 'marketing_campaign'
  | 'content_strategy'
  | 'software_development'
  | 'consulting'
  | 'other';

type Industry =
  | 'technology'
  | 'finance'
  | 'healthcare'
  | 'education'
  | 'retail'
  | 'real_estate'
  | 'creative'
  | 'professional_services'
  | 'other';

type BudgetRange = '1k_5k' | '5k_10k' | '10k_25k' | '25k_50k' | '50k_plus' | 'tbd';

type CommChannel = 'email' | 'slack' | 'teams' | 'whatsapp' | 'phone';

type CheckInFrequency = 'daily' | 'twice_weekly' | 'weekly' | 'fortnightly' | 'as_needed';

type ApprovalProcess = 'email_approval' | 'shared_doc_comments' | 'meeting_signoff';

interface ProjectOverview {
  projectName: string;
  clientName: string;
  projectType: ProjectType | '';
  industry: Industry | '';
  startDate: string;
  targetCompletionDate: string;
  budgetRange: BudgetRange | '';
}

interface GoalsBackground {
  projectBackground: string;
  primaryObjective: string;
  successMetric1: string;
  successMetric2: string;
  successMetric3: string;
  targetAudience: string;
  competitorReferences: string;
}

interface Deliverable {
  id: string;
  name: string;
  description: string;
  estimatedTimeline: string;
}

interface ScopeDeliverables {
  deliverables: Deliverable[];
  outOfScope: string;
  assumptions: string;
}

interface Phase {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  milestone: string;
}

interface Stakeholder {
  id: string;
  name: string;
  role: string;
  involvement: string;
}

interface TimelineCommunication {
  phases: Phase[];
  primaryContact: string;
  commChannel: CommChannel | '';
  checkInFrequency: CheckInFrequency | '';
  approvalProcess: ApprovalProcess | '';
  stakeholders: Stakeholder[];
}

/* ---- Constants ---- */

const PROJECT_TYPE_LABELS: Record<ProjectType, string> = {
  website: 'Website',
  mobile_app: 'Mobile App',
  brand_identity: 'Brand Identity',
  marketing_campaign: 'Marketing Campaign',
  content_strategy: 'Content Strategy',
  software_development: 'Software Development',
  consulting: 'Consulting',
  other: 'Other',
};

const INDUSTRY_LABELS: Record<Industry, string> = {
  technology: 'Technology',
  finance: 'Finance',
  healthcare: 'Healthcare',
  education: 'Education',
  retail: 'Retail',
  real_estate: 'Real Estate',
  creative: 'Creative',
  professional_services: 'Professional Services',
  other: 'Other',
};

const BUDGET_LABELS: Record<BudgetRange, string> = {
  '1k_5k': '$1,000 - $5,000',
  '5k_10k': '$5,000 - $10,000',
  '10k_25k': '$10,000 - $25,000',
  '25k_50k': '$25,000 - $50,000',
  '50k_plus': '$50,000+',
  tbd: 'To Be Determined',
};

const COMM_CHANNEL_LABELS: Record<CommChannel, string> = {
  email: 'Email',
  slack: 'Slack',
  teams: 'Microsoft Teams',
  whatsapp: 'WhatsApp',
  phone: 'Phone',
};

const CHECKIN_LABELS: Record<CheckInFrequency, string> = {
  daily: 'Daily',
  twice_weekly: 'Twice Weekly',
  weekly: 'Weekly',
  fortnightly: 'Fortnightly',
  as_needed: 'As Needed',
};

const APPROVAL_LABELS: Record<ApprovalProcess, string> = {
  email_approval: 'Email Approval',
  shared_doc_comments: 'Shared Doc Comments',
  meeting_signoff: 'Meeting Sign-off',
};

/* ---- Default Deliverables by Project Type ---- */

const DEFAULT_DELIVERABLES: Record<ProjectType, Omit<Deliverable, 'id'>[]> = {
  website: [
    { name: 'Wireframes', description: 'Low-fidelity wireframes for all key pages showing layout and content hierarchy', estimatedTimeline: '1 week' },
    { name: 'Design Mockups', description: 'High-fidelity UI designs for desktop and mobile breakpoints with brand styling applied', estimatedTimeline: '1-2 weeks' },
    { name: 'Responsive Build', description: 'Fully coded, responsive website built to approved designs with cross-browser testing', estimatedTimeline: '2-3 weeks' },
    { name: 'CMS Setup', description: 'Content management system configured so the client can update pages, blog posts, and media independently', estimatedTimeline: '1 week' },
    { name: 'Launch & Handover', description: 'Deployment to production, DNS configuration, SSL setup, and documentation handover', estimatedTimeline: '2-3 days' },
  ],
  mobile_app: [
    { name: 'User Flows', description: 'Detailed user flow diagrams covering all core journeys and edge cases', estimatedTimeline: '1 week' },
    { name: 'UI Design', description: 'Complete UI kit and screen designs following iOS/Android platform conventions', estimatedTimeline: '2-3 weeks' },
    { name: 'Frontend Development', description: 'Client-side app built with approved navigation, screens, and interactions', estimatedTimeline: '3-4 weeks' },
    { name: 'Backend & API', description: 'Server-side logic, database, authentication, and API endpoints to support the app', estimatedTimeline: '2-3 weeks' },
    { name: 'Testing & QA', description: 'Device testing across target platforms, bug fixes, and performance optimisation', estimatedTimeline: '1-2 weeks' },
    { name: 'App Store Submission', description: 'Prepare store listings, screenshots, metadata, and submit for review', estimatedTimeline: '3-5 days' },
  ],
  brand_identity: [
    { name: 'Logo Design', description: 'Primary logo, secondary mark, and favicon variations in multiple formats (SVG, PNG, EPS)', estimatedTimeline: '1-2 weeks' },
    { name: 'Colour Palette', description: 'Primary, secondary, and accent colours with hex, RGB, and CMYK values defined', estimatedTimeline: '3-5 days' },
    { name: 'Typography System', description: 'Primary and secondary typefaces selected with usage guidelines for headings, body, and UI', estimatedTimeline: '3-5 days' },
    { name: 'Brand Guide', description: 'Comprehensive brand guidelines document covering logo usage, spacing rules, colour system, tone of voice, and do/don\'t examples', estimatedTimeline: '1 week' },
    { name: 'Business Cards', description: 'Print-ready business card design in standard Australian size (90mm x 55mm)', estimatedTimeline: '2-3 days' },
    { name: 'Social Media Templates', description: 'Branded templates for Instagram, LinkedIn, and Facebook covers and post formats', estimatedTimeline: '1 week' },
  ],
  marketing_campaign: [
    { name: 'Strategy Document', description: 'Campaign strategy covering objectives, target audience, channels, messaging framework, and KPIs', estimatedTimeline: '1 week' },
    { name: 'Ad Creatives', description: 'Design and copy for paid ad placements across approved channels (social, search, display)', estimatedTimeline: '1-2 weeks' },
    { name: 'Landing Page', description: 'Dedicated campaign landing page with tracking, form capture, and conversion optimisation', estimatedTimeline: '1 week' },
    { name: 'Analytics Setup', description: 'Tracking pixels, UTM parameters, conversion events, and reporting dashboard configured', estimatedTimeline: '2-3 days' },
    { name: 'Campaign Report', description: 'Post-campaign performance report with metrics, insights, and recommendations for next iteration', estimatedTimeline: '3-5 days' },
  ],
  content_strategy: [
    { name: 'Content Audit', description: 'Analysis of existing content assets, performance data, and gap identification', estimatedTimeline: '1 week' },
    { name: 'Strategy Document', description: 'Content pillars, editorial calendar, channel strategy, and tone of voice guidelines', estimatedTimeline: '1-2 weeks' },
    { name: 'Content Calendar', description: 'Three-month editorial calendar with topics, formats, channels, and publish dates', estimatedTimeline: '1 week' },
    { name: 'Sample Content', description: 'Two to three hero content pieces produced to demonstrate the strategy in action', estimatedTimeline: '1-2 weeks' },
    { name: 'Performance Framework', description: 'KPIs, measurement cadence, and reporting template for ongoing content performance tracking', estimatedTimeline: '3-5 days' },
  ],
  software_development: [
    { name: 'Technical Specification', description: 'Detailed technical spec covering architecture, data model, API design, and technology choices', estimatedTimeline: '1-2 weeks' },
    { name: 'UI/UX Design', description: 'User interface designs and user experience flows for all core features', estimatedTimeline: '2-3 weeks' },
    { name: 'Core Development', description: 'Implementation of primary features, database setup, and business logic', estimatedTimeline: '4-6 weeks' },
    { name: 'Integration & APIs', description: 'Third-party service integrations, API development, and webhook configuration', estimatedTimeline: '1-2 weeks' },
    { name: 'Testing & QA', description: 'Unit tests, integration tests, user acceptance testing, and bug resolution', estimatedTimeline: '1-2 weeks' },
    { name: 'Deployment & Documentation', description: 'Production deployment, CI/CD setup, and technical documentation for ongoing maintenance', estimatedTimeline: '1 week' },
  ],
  consulting: [
    { name: 'Discovery & Research', description: 'Stakeholder interviews, current state analysis, and research to inform recommendations', estimatedTimeline: '1-2 weeks' },
    { name: 'Analysis & Findings', description: 'Detailed analysis document with findings, data visualisations, and identified opportunities', estimatedTimeline: '1-2 weeks' },
    { name: 'Recommendations Report', description: 'Strategic recommendations with prioritised action items, resource requirements, and expected outcomes', estimatedTimeline: '1 week' },
    { name: 'Presentation & Workshop', description: 'Executive presentation of findings and facilitated workshop to align stakeholders on next steps', estimatedTimeline: '2-3 days' },
  ],
  other: [
    { name: 'Discovery Phase', description: 'Initial research, stakeholder alignment, and requirements gathering', estimatedTimeline: '1 week' },
    { name: 'Deliverable 1', description: 'Primary project deliverable as agreed in scope', estimatedTimeline: '2-3 weeks' },
    { name: 'Review & Revision', description: 'Client review period with one round of revisions included', estimatedTimeline: '1 week' },
    { name: 'Final Delivery', description: 'Final files, documentation, and project handover', estimatedTimeline: '2-3 days' },
  ],
};

/* ---- Helpers ---- */

function generateId(): string {
  return Math.random().toString(36).substring(2, 9);
}

function formatDate(dateStr: string): string {
  if (!dateStr) return 'TBD';
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' });
}

/* ---- Step Indicator Component ---- */

function StepIndicator({ step }: { step: Step }) {
  const steps = [
    { num: 1, label: 'Overview' },
    { num: 2, label: 'Goals' },
    { num: 3, label: 'Scope' },
    { num: 4, label: 'Timeline' },
    { num: 5, label: 'Brief' },
  ];

  return (
    <div className="flex items-center justify-center gap-0 mb-10">
      {steps.map((s, i) => (
        <div key={s.num} className="flex items-center">
          <div className="flex flex-col items-center">
            <div
              className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                step > s.num
                  ? 'bg-violet-500 text-white'
                  : step === s.num
                  ? 'bg-gradient-to-br from-violet-400 to-purple-500 text-white ring-4 ring-violet-400/20'
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
                step === s.num ? 'text-violet-400' : step > s.num ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              {s.label}
            </span>
          </div>
          {i < steps.length - 1 && (
            <div
              className={`w-10 sm:w-16 h-0.5 mb-5 mx-1.5 transition-all ${
                step > s.num ? 'bg-violet-500' : 'bg-white/10'
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
}

/* ---- Field Components ---- */

function Label({ children }: { children: React.ReactNode }) {
  return <label className="block text-sm text-slate-300 font-medium mb-1.5">{children}</label>;
}

function InputField({
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
  hint,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  hint?: string;
}) {
  return (
    <div>
      <Label>{label}</Label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/20 transition-all"
      />
      {hint && <p className="text-xs text-slate-500 mt-1">{hint}</p>}
    </div>
  );
}

function TextAreaField({
  label,
  value,
  onChange,
  placeholder,
  rows = 3,
  hint,
  optional,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  rows?: number;
  hint?: string;
  optional?: boolean;
}) {
  return (
    <div>
      <Label>
        {label}
        {optional && <span className="text-slate-500 font-normal ml-1">(optional)</span>}
      </Label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/20 transition-all resize-none"
      />
      {hint && <p className="text-xs text-slate-500 mt-1">{hint}</p>}
    </div>
  );
}

function SelectField<T extends string>({
  label,
  value,
  onChange,
  options,
  hint,
}: {
  label: string;
  value: T | '';
  onChange: (v: T) => void;
  options: { value: T; label: string }[];
  hint?: string;
}) {
  return (
    <div>
      <Label>{label}</Label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as T)}
        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/20 transition-all appearance-none"
      >
        <option value="" className="bg-slate-900">Select...</option>
        {options.map((o) => (
          <option key={o.value} value={o.value} className="bg-slate-900">
            {o.label}
          </option>
        ))}
      </select>
      {hint && <p className="text-xs text-slate-500 mt-1">{hint}</p>}
    </div>
  );
}

/* ---- Brief Generator ---- */

function generateBriefText(
  overview: ProjectOverview,
  goals: GoalsBackground,
  scope: ScopeDeliverables,
  timeline: TimelineCommunication
): string {
  const divider = '────────────────────────────────────────────────────────────';
  const sectionBreak = '\n\n';

  const projectTypeName = overview.projectType ? PROJECT_TYPE_LABELS[overview.projectType] : 'Project';
  const industryName = overview.industry ? INDUSTRY_LABELS[overview.industry] : '';
  const budgetName = overview.budgetRange ? BUDGET_LABELS[overview.budgetRange] : 'TBD';
  const channelName = timeline.commChannel ? COMM_CHANNEL_LABELS[timeline.commChannel] : 'TBD';
  const frequencyName = timeline.checkInFrequency ? CHECKIN_LABELS[timeline.checkInFrequency] : 'TBD';
  const approvalName = timeline.approvalProcess ? APPROVAL_LABELS[timeline.approvalProcess] : 'TBD';

  let brief = '';

  // Header
  brief += `PROJECT BRIEF\n`;
  brief += divider + '\n\n';
  brief += `Project:     ${overview.projectName || 'Untitled Project'}\n`;
  brief += `Client:      ${overview.clientName || 'TBD'}\n`;
  brief += `Type:        ${projectTypeName}\n`;
  if (industryName) brief += `Industry:    ${industryName}\n`;
  brief += `Budget:      ${budgetName}\n`;
  brief += `Timeline:    ${formatDate(overview.startDate)} — ${formatDate(overview.targetCompletionDate)}\n`;
  brief += `Prepared:    ${new Date().toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' })}`;

  brief += sectionBreak;
  brief += divider;

  // Executive Summary
  brief += sectionBreak;
  brief += `1. EXECUTIVE SUMMARY\n${divider}\n\n`;
  brief += `This brief outlines the scope, objectives, and deliverables for the ${projectTypeName.toLowerCase()} project "${overview.projectName || 'Untitled'}" for ${overview.clientName || 'the client'}`;
  if (industryName) brief += ` in the ${industryName.toLowerCase()} sector`;
  brief += `. The project is scheduled to run from ${formatDate(overview.startDate)} to ${formatDate(overview.targetCompletionDate)} within a budget range of ${budgetName}.`;
  brief += sectionBreak;
  brief += `The primary objective is: ${goals.primaryObjective || 'To be defined.'}`;

  // Background
  brief += sectionBreak;
  brief += `2. BACKGROUND\n${divider}\n\n`;
  brief += goals.projectBackground || 'No background information provided.';

  if (goals.targetAudience) {
    brief += sectionBreak;
    brief += `Target Audience:\n${goals.targetAudience}`;
  }

  if (goals.competitorReferences) {
    brief += sectionBreak;
    brief += `Competitor References / Inspiration:\n${goals.competitorReferences}`;
  }

  // Objectives
  brief += sectionBreak;
  brief += `3. OBJECTIVES & SUCCESS CRITERIA\n${divider}\n\n`;
  brief += `Primary Objective:\n${goals.primaryObjective || 'To be defined.'}\n\n`;
  brief += `Key Success Metrics:\n`;
  if (goals.successMetric1) brief += `  1. ${goals.successMetric1}\n`;
  if (goals.successMetric2) brief += `  2. ${goals.successMetric2}\n`;
  if (goals.successMetric3) brief += `  3. ${goals.successMetric3}\n`;
  if (!goals.successMetric1 && !goals.successMetric2 && !goals.successMetric3) {
    brief += `  To be defined during project kickoff.\n`;
  }

  // Scope & Deliverables
  brief += sectionBreak;
  brief += `4. SCOPE & DELIVERABLES\n${divider}\n\n`;
  if (scope.deliverables.length > 0) {
    scope.deliverables.forEach((d, i) => {
      brief += `  ${i + 1}. ${d.name}\n`;
      if (d.description) brief += `     ${d.description}\n`;
      if (d.estimatedTimeline) brief += `     Timeline: ${d.estimatedTimeline}\n`;
      brief += '\n';
    });
  } else {
    brief += `  Deliverables to be defined.\n`;
  }

  // Out of Scope
  brief += sectionBreak;
  brief += `5. OUT OF SCOPE\n${divider}\n\n`;
  brief += scope.outOfScope || 'Not specified. Any work not explicitly listed in the deliverables above is considered out of scope.';

  // Assumptions
  brief += sectionBreak;
  brief += `6. ASSUMPTIONS\n${divider}\n\n`;
  brief += scope.assumptions || 'No assumptions documented. To be discussed during project kickoff.';

  // Timeline
  brief += sectionBreak;
  brief += `7. TIMELINE & MILESTONES\n${divider}\n\n`;
  if (timeline.phases.length > 0) {
    timeline.phases.forEach((p, i) => {
      brief += `  Phase ${i + 1}: ${p.name}\n`;
      brief += `    Start: ${formatDate(p.startDate)}  |  End: ${formatDate(p.endDate)}\n`;
      if (p.milestone) brief += `    Milestone: ${p.milestone}\n`;
      brief += '\n';
    });
  } else {
    brief += `  Project phases to be defined.\n`;
  }

  // Communication Plan
  brief += sectionBreak;
  brief += `8. COMMUNICATION PLAN\n${divider}\n\n`;
  brief += `  Primary Contact (Client):    ${timeline.primaryContact || 'TBD'}\n`;
  brief += `  Communication Channel:       ${channelName}\n`;
  brief += `  Check-in Frequency:          ${frequencyName}\n`;
  brief += `  Review/Approval Process:     ${approvalName}\n`;

  if (timeline.stakeholders.length > 0) {
    brief += `\n  Key Stakeholders:\n`;
    timeline.stakeholders.forEach((s) => {
      brief += `    - ${s.name} (${s.role}) — ${s.involvement}\n`;
    });
  }

  // Budget
  brief += sectionBreak;
  brief += `9. BUDGET\n${divider}\n\n`;
  brief += `  Agreed Range: ${budgetName}\n`;
  brief += `  Payment terms, milestones, and invoicing schedule to be confirmed in the project contract.`;

  // Sign-off
  brief += sectionBreak;
  brief += `10. SIGN-OFF\n${divider}\n\n`;
  brief += `By acknowledging this brief, both parties agree to the scope, timeline, and deliverables outlined above. Any changes to scope will be managed through a formal change request process.\n\n`;
  brief += `Client Signature:  ___________________________    Date: ___________\n\n`;
  brief += `Freelancer Signature: ________________________    Date: ___________\n`;

  brief += '\n\n' + divider + '\n';
  brief += `Generated with InvoiceFlow — invoiceflow.au/tools/project-brief-generator`;

  return brief;
}

/* ---- Main Component ---- */

export default function ProjectBriefGenerator() {
  const [step, setStep] = useState<Step>(1);
  const [copied, setCopied] = useState(false);
  const briefRef = useRef<HTMLPreElement>(null);

  /* Step 1: Project Overview */
  const [overview, setOverview] = useState<ProjectOverview>({
    projectName: '',
    clientName: '',
    projectType: '',
    industry: '',
    startDate: '',
    targetCompletionDate: '',
    budgetRange: '',
  });

  /* Step 2: Goals & Background */
  const [goals, setGoals] = useState<GoalsBackground>({
    projectBackground: '',
    primaryObjective: '',
    successMetric1: '',
    successMetric2: '',
    successMetric3: '',
    targetAudience: '',
    competitorReferences: '',
  });

  /* Step 3: Scope & Deliverables */
  const [scope, setScope] = useState<ScopeDeliverables>({
    deliverables: [],
    outOfScope: '',
    assumptions: '',
  });
  const [deliverablesLoaded, setDeliverablesLoaded] = useState(false);

  /* Step 4: Timeline & Communication */
  const [timeline, setTimeline] = useState<TimelineCommunication>({
    phases: [],
    primaryContact: '',
    commChannel: '',
    checkInFrequency: '',
    approvalProcess: '',
    stakeholders: [],
  });
  const [phasesGenerated, setPhasesGenerated] = useState(false);

  /* Step 1 validation */
  const step1Valid =
    overview.projectName.trim() !== '' &&
    overview.clientName.trim() !== '' &&
    overview.projectType !== '';

  /* Step 2 validation */
  const step2Valid =
    goals.primaryObjective.trim() !== '';

  /* Load default deliverables when entering Step 3 */
  const loadDefaultDeliverables = () => {
    if (!deliverablesLoaded && overview.projectType) {
      const defaults = DEFAULT_DELIVERABLES[overview.projectType];
      const withIds = defaults.map((d) => ({ ...d, id: generateId() }));
      setScope((prev) => ({ ...prev, deliverables: withIds }));
      setDeliverablesLoaded(true);
    }
  };

  /* Generate phases from deliverables when entering Step 4 */
  const generatePhases = () => {
    if (!phasesGenerated && scope.deliverables.length > 0) {
      const phases = scope.deliverables.map((d) => ({
        id: generateId(),
        name: d.name,
        startDate: '',
        endDate: '',
        milestone: `${d.name} complete and approved`,
      }));
      setTimeline((prev) => ({ ...prev, phases }));
      setPhasesGenerated(true);
    }
  };

  /* Deliverable management */
  const addDeliverable = () => {
    setScope((prev) => ({
      ...prev,
      deliverables: [...prev.deliverables, { id: generateId(), name: '', description: '', estimatedTimeline: '' }],
    }));
  };

  const updateDeliverable = (id: string, field: keyof Omit<Deliverable, 'id'>, value: string) => {
    setScope((prev) => ({
      ...prev,
      deliverables: prev.deliverables.map((d) => (d.id === id ? { ...d, [field]: value } : d)),
    }));
  };

  const removeDeliverable = (id: string) => {
    setScope((prev) => ({
      ...prev,
      deliverables: prev.deliverables.filter((d) => d.id !== id),
    }));
  };

  /* Phase management */
  const addPhase = () => {
    setTimeline((prev) => ({
      ...prev,
      phases: [...prev.phases, { id: generateId(), name: '', startDate: '', endDate: '', milestone: '' }],
    }));
  };

  const updatePhase = (id: string, field: keyof Omit<Phase, 'id'>, value: string) => {
    setTimeline((prev) => ({
      ...prev,
      phases: prev.phases.map((p) => (p.id === id ? { ...p, [field]: value } : p)),
    }));
  };

  const removePhase = (id: string) => {
    setTimeline((prev) => ({
      ...prev,
      phases: prev.phases.filter((p) => p.id !== id),
    }));
  };

  /* Stakeholder management */
  const addStakeholder = () => {
    setTimeline((prev) => ({
      ...prev,
      stakeholders: [...prev.stakeholders, { id: generateId(), name: '', role: '', involvement: '' }],
    }));
  };

  const updateStakeholder = (id: string, field: keyof Omit<Stakeholder, 'id'>, value: string) => {
    setTimeline((prev) => ({
      ...prev,
      stakeholders: prev.stakeholders.map((s) => (s.id === id ? { ...s, [field]: value } : s)),
    }));
  };

  const removeStakeholder = (id: string) => {
    setTimeline((prev) => ({
      ...prev,
      stakeholders: prev.stakeholders.filter((s) => s.id !== id),
    }));
  };

  /* Navigation */
  const goToStep = (target: Step) => {
    if (target === 3) loadDefaultDeliverables();
    if (target === 4) generatePhases();
    setStep(target);
  };

  /* Copy to clipboard */
  const copyBrief = async () => {
    const briefText = generateBriefText(overview, goals, scope, timeline);
    try {
      await navigator.clipboard.writeText(briefText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback for older browsers
      const el = document.createElement('textarea');
      el.value = briefText;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  /* Print */
  const printBrief = () => {
    const briefText = generateBriefText(overview, goals, scope, timeline);
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>Project Brief — ${overview.projectName || 'Untitled'}</title>
            <style>
              body { font-family: 'Courier New', monospace; font-size: 13px; line-height: 1.6; padding: 40px; color: #1a1a1a; max-width: 800px; margin: 0 auto; }
              @media print { body { padding: 20px; } }
            </style>
          </head>
          <body><pre>${briefText.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</pre></body>
        </html>
      `);
      printWindow.document.close();
      printWindow.print();
    }
  };

  /* Generated brief text for Step 5 */
  const briefText = step === 5 ? generateBriefText(overview, goals, scope, timeline) : '';

  return (
    <div className="glass rounded-2xl p-6 sm:p-8">
      <StepIndicator step={step} />

      {/* ---- STEP 1: Project Overview ---- */}
      {step === 1 && (
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-bold text-white heading-font mb-1">Project Overview</h2>
            <p className="text-sm text-slate-400">Start with the basics. This information forms the header of your project brief.</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <InputField
              label="Project name"
              value={overview.projectName}
              onChange={(v) => setOverview((p) => ({ ...p, projectName: v }))}
              placeholder="e.g. Website Redesign 2026"
            />
            <InputField
              label="Client name / company"
              value={overview.clientName}
              onChange={(v) => setOverview((p) => ({ ...p, clientName: v }))}
              placeholder="e.g. Acme Corporation"
            />
            <SelectField
              label="Project type"
              value={overview.projectType}
              onChange={(v) => {
                setOverview((p) => ({ ...p, projectType: v }));
                setDeliverablesLoaded(false);
                setPhasesGenerated(false);
              }}
              options={Object.entries(PROJECT_TYPE_LABELS).map(([value, label]) => ({ value: value as ProjectType, label }))}
              hint="Determines suggested deliverables in Step 3"
            />
            <SelectField
              label="Industry"
              value={overview.industry}
              onChange={(v) => setOverview((p) => ({ ...p, industry: v }))}
              options={Object.entries(INDUSTRY_LABELS).map(([value, label]) => ({ value: value as Industry, label }))}
            />
            <InputField
              label="Start date"
              value={overview.startDate}
              onChange={(v) => setOverview((p) => ({ ...p, startDate: v }))}
              type="date"
            />
            <InputField
              label="Target completion date"
              value={overview.targetCompletionDate}
              onChange={(v) => setOverview((p) => ({ ...p, targetCompletionDate: v }))}
              type="date"
            />
            <SelectField
              label="Budget range"
              value={overview.budgetRange}
              onChange={(v) => setOverview((p) => ({ ...p, budgetRange: v }))}
              options={Object.entries(BUDGET_LABELS).map(([value, label]) => ({ value: value as BudgetRange, label }))}
            />
          </div>

          <div className="flex justify-end pt-2">
            <button
              onClick={() => goToStep(2)}
              disabled={!step1Valid}
              className="px-6 py-2.5 bg-gradient-to-r from-violet-500 to-purple-500 text-white text-sm font-semibold rounded-lg hover:from-violet-400 hover:to-purple-400 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Next: Goals & Background
            </button>
          </div>
        </div>
      )}

      {/* ---- STEP 2: Goals & Background ---- */}
      {step === 2 && (
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-bold text-white heading-font mb-1">Goals & Background</h2>
            <p className="text-sm text-slate-400">Define why this project matters and what success looks like. The clearer you are here, the fewer misunderstandings later.</p>
          </div>

          <TextAreaField
            label="Project background"
            value={goals.projectBackground}
            onChange={(v) => setGoals((p) => ({ ...p, projectBackground: v }))}
            placeholder="Why is this project happening? What problem does it solve? What is the current situation?"
            rows={4}
            hint="Give context so anyone reading the brief understands the 'why'"
          />

          <TextAreaField
            label="Primary objective"
            value={goals.primaryObjective}
            onChange={(v) => setGoals((p) => ({ ...p, primaryObjective: v }))}
            placeholder="e.g. Launch a modern, conversion-optimised website that increases lead generation by 40% within 3 months of go-live"
            rows={3}
            hint="One clear, measurable goal that defines project success"
          />

          <div>
            <Label>Key success metrics</Label>
            <p className="text-xs text-slate-500 mb-3">Define 3 measurable outcomes that will indicate the project has succeeded</p>
            <div className="space-y-3">
              <input
                type="text"
                value={goals.successMetric1}
                onChange={(e) => setGoals((p) => ({ ...p, successMetric1: e.target.value }))}
                placeholder="e.g. Website load time under 2 seconds on mobile"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/20 transition-all"
              />
              <input
                type="text"
                value={goals.successMetric2}
                onChange={(e) => setGoals((p) => ({ ...p, successMetric2: e.target.value }))}
                placeholder="e.g. 25% increase in organic search traffic within 60 days"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/20 transition-all"
              />
              <input
                type="text"
                value={goals.successMetric3}
                onChange={(e) => setGoals((p) => ({ ...p, successMetric3: e.target.value }))}
                placeholder="e.g. Contact form submissions increase from 10 to 30 per month"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/20 transition-all"
              />
            </div>
          </div>

          <TextAreaField
            label="Target audience"
            value={goals.targetAudience}
            onChange={(v) => setGoals((p) => ({ ...p, targetAudience: v }))}
            placeholder="Who is this project ultimately for? Describe the end users or customers — demographics, needs, pain points, behaviours"
            rows={3}
          />

          <TextAreaField
            label="Competitor references / inspiration"
            value={goals.competitorReferences}
            onChange={(v) => setGoals((p) => ({ ...p, competitorReferences: v }))}
            placeholder="Links or names of competitors, or examples of work the client admires. Note what they like about each reference."
            rows={3}
            optional
          />

          <div className="flex justify-between pt-2">
            <button
              onClick={() => goToStep(1)}
              className="px-5 py-2.5 bg-white/5 border border-white/10 text-slate-300 text-sm font-medium rounded-lg hover:bg-white/10 transition-all"
            >
              Back
            </button>
            <button
              onClick={() => goToStep(3)}
              disabled={!step2Valid}
              className="px-6 py-2.5 bg-gradient-to-r from-violet-500 to-purple-500 text-white text-sm font-semibold rounded-lg hover:from-violet-400 hover:to-purple-400 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Next: Scope & Deliverables
            </button>
          </div>
        </div>
      )}

      {/* ---- STEP 3: Scope & Deliverables ---- */}
      {step === 3 && (
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-bold text-white heading-font mb-1">Scope & Deliverables</h2>
            <p className="text-sm text-slate-400">
              {overview.projectType
                ? `Pre-populated for a ${PROJECT_TYPE_LABELS[overview.projectType].toLowerCase()} project. Edit, add, or remove deliverables to match your actual scope.`
                : 'Define what you will deliver. Be specific — vague deliverables cause scope creep.'}
            </p>
          </div>

          {/* Deliverables */}
          <div className="space-y-3">
            {scope.deliverables.map((d, i) => (
              <div key={d.id} className="bg-white/5 rounded-xl border border-white/10 p-4">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-xs font-bold text-violet-400 bg-violet-400/10 border border-violet-400/20 rounded-full px-2.5 py-0.5">
                    Deliverable {i + 1}
                  </span>
                  <button
                    onClick={() => removeDeliverable(d.id)}
                    className="text-slate-500 hover:text-red-400 transition-colors text-sm p-1"
                    title="Remove deliverable"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="space-y-3">
                  <input
                    type="text"
                    value={d.name}
                    onChange={(e) => updateDeliverable(d.id, 'name', e.target.value)}
                    placeholder="Deliverable name"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white font-medium placeholder-slate-600 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/20 transition-all"
                  />
                  <textarea
                    value={d.description}
                    onChange={(e) => updateDeliverable(d.id, 'description', e.target.value)}
                    placeholder="What exactly will be delivered? Be specific."
                    rows={2}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/20 transition-all resize-none"
                  />
                  <input
                    type="text"
                    value={d.estimatedTimeline}
                    onChange={(e) => updateDeliverable(d.id, 'estimatedTimeline', e.target.value)}
                    placeholder="e.g. 1-2 weeks"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/20 transition-all"
                  />
                </div>
              </div>
            ))}

            <button
              onClick={addDeliverable}
              className="w-full py-3 border border-dashed border-white/20 rounded-xl text-sm text-slate-400 hover:text-violet-400 hover:border-violet-400/30 transition-all flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Add Deliverable
            </button>
          </div>

          <TextAreaField
            label="Out of scope"
            value={scope.outOfScope}
            onChange={(v) => setScope((p) => ({ ...p, outOfScope: v }))}
            placeholder="Explicitly state what is NOT included. e.g. 'Ongoing maintenance after launch is not included. Content writing and photography are the client's responsibility. SEO beyond on-page basics is out of scope.'"
            rows={4}
            hint="This section prevents scope creep. Be explicit about boundaries."
          />

          <TextAreaField
            label="Assumptions"
            value={scope.assumptions}
            onChange={(v) => setScope((p) => ({ ...p, assumptions: v }))}
            placeholder="e.g. 'Client will provide all written content within 5 business days of request. Feedback on each deliverable will be returned within 3 business days. A single round of revisions is included per deliverable.'"
            rows={4}
            hint="State what you are assuming to be true. If these change, scope may change."
          />

          <div className="flex justify-between pt-2">
            <button
              onClick={() => goToStep(2)}
              className="px-5 py-2.5 bg-white/5 border border-white/10 text-slate-300 text-sm font-medium rounded-lg hover:bg-white/10 transition-all"
            >
              Back
            </button>
            <button
              onClick={() => goToStep(4)}
              className="px-6 py-2.5 bg-gradient-to-r from-violet-500 to-purple-500 text-white text-sm font-semibold rounded-lg hover:from-violet-400 hover:to-purple-400 transition-all"
            >
              Next: Timeline & Communication
            </button>
          </div>
        </div>
      )}

      {/* ---- STEP 4: Timeline & Communication ---- */}
      {step === 4 && (
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-bold text-white heading-font mb-1">Timeline & Communication</h2>
            <p className="text-sm text-slate-400">Define project phases and how you will work together. Clear communication expectations prevent most project failures.</p>
          </div>

          {/* Project Phases */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <div>
                <Label>Project phases</Label>
                <p className="text-xs text-slate-500">Auto-generated from your deliverables. Edit dates and milestones to match your plan.</p>
              </div>
            </div>
            <div className="space-y-3">
              {timeline.phases.map((p, i) => (
                <div key={p.id} className="bg-white/5 rounded-xl border border-white/10 p-4">
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-xs font-bold text-violet-400 bg-violet-400/10 border border-violet-400/20 rounded-full px-2.5 py-0.5">
                      Phase {i + 1}
                    </span>
                    <button
                      onClick={() => removePhase(p.id)}
                      className="text-slate-500 hover:text-red-400 transition-colors text-sm p-1"
                      title="Remove phase"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      value={p.name}
                      onChange={(e) => updatePhase(p.id, 'name', e.target.value)}
                      placeholder="Phase name"
                      className="sm:col-span-2 w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white font-medium placeholder-slate-600 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/20 transition-all"
                    />
                    <div>
                      <span className="text-xs text-slate-500 mb-1 block">Start date</span>
                      <input
                        type="date"
                        value={p.startDate}
                        onChange={(e) => updatePhase(p.id, 'startDate', e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/20 transition-all"
                      />
                    </div>
                    <div>
                      <span className="text-xs text-slate-500 mb-1 block">End date</span>
                      <input
                        type="date"
                        value={p.endDate}
                        onChange={(e) => updatePhase(p.id, 'endDate', e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/20 transition-all"
                      />
                    </div>
                    <input
                      type="text"
                      value={p.milestone}
                      onChange={(e) => updatePhase(p.id, 'milestone', e.target.value)}
                      placeholder="Key milestone for this phase"
                      className="sm:col-span-2 w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/20 transition-all"
                    />
                  </div>
                </div>
              ))}

              <button
                onClick={addPhase}
                className="w-full py-3 border border-dashed border-white/20 rounded-xl text-sm text-slate-400 hover:text-violet-400 hover:border-violet-400/30 transition-all flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Add Phase
              </button>
            </div>
          </div>

          {/* Communication Plan */}
          <div className="bg-white/5 rounded-xl border border-white/10 p-5">
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-violet-400/20 flex items-center justify-center text-violet-400 text-xs font-bold">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </span>
              Communication Plan
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <InputField
                label="Primary contact (client side)"
                value={timeline.primaryContact}
                onChange={(v) => setTimeline((p) => ({ ...p, primaryContact: v }))}
                placeholder="e.g. Sarah Chen, Marketing Director"
              />
              <SelectField
                label="Preferred communication channel"
                value={timeline.commChannel}
                onChange={(v) => setTimeline((p) => ({ ...p, commChannel: v }))}
                options={Object.entries(COMM_CHANNEL_LABELS).map(([value, label]) => ({ value: value as CommChannel, label }))}
              />
              <SelectField
                label="Check-in frequency"
                value={timeline.checkInFrequency}
                onChange={(v) => setTimeline((p) => ({ ...p, checkInFrequency: v }))}
                options={Object.entries(CHECKIN_LABELS).map(([value, label]) => ({ value: value as CheckInFrequency, label }))}
              />
              <SelectField
                label="Review / approval process"
                value={timeline.approvalProcess}
                onChange={(v) => setTimeline((p) => ({ ...p, approvalProcess: v }))}
                options={Object.entries(APPROVAL_LABELS).map(([value, label]) => ({ value: value as ApprovalProcess, label }))}
              />
            </div>
          </div>

          {/* Key Stakeholders */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <div>
                <Label>Key stakeholders</Label>
                <p className="text-xs text-slate-500">Add anyone who has input, influence, or approval authority on this project</p>
              </div>
            </div>
            <div className="space-y-3">
              {timeline.stakeholders.map((s, i) => (
                <div key={s.id} className="bg-white/5 rounded-xl border border-white/10 p-4">
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-xs font-bold text-slate-400">Stakeholder {i + 1}</span>
                    <button
                      onClick={() => removeStakeholder(s.id)}
                      className="text-slate-500 hover:text-red-400 transition-colors text-sm p-1"
                      title="Remove stakeholder"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <div className="grid sm:grid-cols-3 gap-3">
                    <input
                      type="text"
                      value={s.name}
                      onChange={(e) => updateStakeholder(s.id, 'name', e.target.value)}
                      placeholder="Name"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/20 transition-all"
                    />
                    <input
                      type="text"
                      value={s.role}
                      onChange={(e) => updateStakeholder(s.id, 'role', e.target.value)}
                      placeholder="Role / title"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/20 transition-all"
                    />
                    <input
                      type="text"
                      value={s.involvement}
                      onChange={(e) => updateStakeholder(s.id, 'involvement', e.target.value)}
                      placeholder="e.g. Final approval"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/20 transition-all"
                    />
                  </div>
                </div>
              ))}

              <button
                onClick={addStakeholder}
                className="w-full py-3 border border-dashed border-white/20 rounded-xl text-sm text-slate-400 hover:text-violet-400 hover:border-violet-400/30 transition-all flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Add Stakeholder
              </button>
            </div>
          </div>

          <div className="flex justify-between pt-2">
            <button
              onClick={() => goToStep(3)}
              className="px-5 py-2.5 bg-white/5 border border-white/10 text-slate-300 text-sm font-medium rounded-lg hover:bg-white/10 transition-all"
            >
              Back
            </button>
            <button
              onClick={() => goToStep(5)}
              className="px-6 py-2.5 bg-gradient-to-r from-violet-500 to-purple-500 text-white text-sm font-semibold rounded-lg hover:from-violet-400 hover:to-purple-400 transition-all"
            >
              Generate Brief
            </button>
          </div>
        </div>
      )}

      {/* ---- STEP 5: Generated Brief ---- */}
      {step === 5 && (
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-bold text-white heading-font mb-1">Your Project Brief</h2>
            <p className="text-sm text-slate-400">
              Ready to share with your client. Copy the text below or print a clean version.
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-3">
            <button
              onClick={copyBrief}
              className={`px-5 py-2.5 text-sm font-semibold rounded-lg transition-all flex items-center gap-2 ${
                copied
                  ? 'bg-emerald-500/20 border border-emerald-500/30 text-emerald-400'
                  : 'bg-gradient-to-r from-violet-500 to-purple-500 text-white hover:from-violet-400 hover:to-purple-400'
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
              onClick={printBrief}
              className="px-5 py-2.5 bg-white/5 border border-white/10 text-slate-300 text-sm font-medium rounded-lg hover:bg-white/10 transition-all flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>
              Print
            </button>
          </div>

          {/* Brief preview */}
          <div className="bg-slate-950/50 rounded-xl border border-white/10 overflow-hidden">
            <div className="px-5 py-3 border-b border-white/10 flex items-center justify-between">
              <span className="text-xs text-slate-400 font-medium">PROJECT BRIEF — {overview.projectName || 'Untitled'}</span>
              <span className="text-xs text-slate-500">{scope.deliverables.length} deliverables | {timeline.phases.length} phases</span>
            </div>
            <pre
              ref={briefRef}
              className="p-5 text-sm text-slate-300 font-mono leading-relaxed overflow-x-auto whitespace-pre-wrap break-words max-h-[600px] overflow-y-auto"
            >
              {briefText}
            </pre>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-white/5 rounded-xl border border-white/10 p-4 text-center">
              <p className="text-2xl font-bold text-white">{scope.deliverables.length}</p>
              <p className="text-xs text-slate-400 mt-1">Deliverables</p>
            </div>
            <div className="bg-white/5 rounded-xl border border-white/10 p-4 text-center">
              <p className="text-2xl font-bold text-white">{timeline.phases.length}</p>
              <p className="text-xs text-slate-400 mt-1">Phases</p>
            </div>
            <div className="bg-white/5 rounded-xl border border-white/10 p-4 text-center">
              <p className="text-2xl font-bold text-white">{timeline.stakeholders.length}</p>
              <p className="text-xs text-slate-400 mt-1">Stakeholders</p>
            </div>
            <div className="bg-white/5 rounded-xl border border-white/10 p-4 text-center">
              <p className="text-2xl font-bold text-white">{overview.budgetRange ? BUDGET_LABELS[overview.budgetRange].split(' ')[0] : 'TBD'}</p>
              <p className="text-xs text-slate-400 mt-1">Budget</p>
            </div>
          </div>

          {/* Tip */}
          <div className="bg-gradient-to-r from-violet-400/10 to-purple-500/10 border border-violet-400/20 rounded-xl p-5">
            <p className="text-sm text-violet-400 font-medium mb-2">Pro tip: Make this brief a living document</p>
            <p className="text-sm text-slate-300">
              Send this brief to your client before the project kicks off. Ask them to confirm or suggest changes. Once both parties agree, use it as your single source of truth throughout the project. If scope changes are requested mid-project, update the brief and get sign-off before proceeding — this protects both you and your client.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              onClick={() => goToStep(4)}
              className="flex-1 py-2.5 bg-white/5 border border-white/10 text-slate-300 text-sm font-medium rounded-lg hover:bg-white/10 transition-all"
            >
              Edit Timeline
            </button>
            <button
              onClick={() => goToStep(3)}
              className="flex-1 py-2.5 bg-white/5 border border-white/10 text-slate-300 text-sm font-medium rounded-lg hover:bg-white/10 transition-all"
            >
              Edit Scope
            </button>
            <button
              onClick={() => {
                setStep(1);
                setOverview({ projectName: '', clientName: '', projectType: '', industry: '', startDate: '', targetCompletionDate: '', budgetRange: '' });
                setGoals({ projectBackground: '', primaryObjective: '', successMetric1: '', successMetric2: '', successMetric3: '', targetAudience: '', competitorReferences: '' });
                setScope({ deliverables: [], outOfScope: '', assumptions: '' });
                setTimeline({ phases: [], primaryContact: '', commChannel: '', checkInFrequency: '', approvalProcess: '', stakeholders: [] });
                setDeliverablesLoaded(false);
                setPhasesGenerated(false);
              }}
              className="flex-1 py-2.5 bg-white/5 border border-white/10 text-slate-300 text-sm font-medium rounded-lg hover:bg-white/10 transition-all"
            >
              Start New Brief
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
