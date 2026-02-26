'use client';

import { useState, useRef } from 'react';

/* ---- Types ---- */

type Step = 1 | 2 | 3 | 4;

type MeetingType =
  | 'discovery_call'
  | 'project_kickoff'
  | 'progress_review'
  | 'feedback_revision'
  | 'project_wrapup'
  | 'strategy_session'
  | 'quarterly_checkin'
  | 'adhoc_other';

type Duration = '15' | '30' | '45' | '60' | '90' | '120';

type Platform =
  | 'google_meet'
  | 'zoom'
  | 'microsoft_teams'
  | 'phone_call'
  | 'in_person'
  | 'other';

interface AgendaItem {
  id: string;
  topic: string;
  duration: number;
  notes: string;
}

interface Attendee {
  id: string;
  name: string;
}

interface MeetingDetails {
  meetingType: MeetingType | '';
  meetingTitle: string;
  date: string;
  time: string;
  duration: Duration | '';
  platform: Platform | '';
  yourName: string;
  clientName: string;
  projectName: string;
}

interface AdditionalOptions {
  attendees: Attendee[];
  preparationNotes: string;
  meetingObjectives: string;
  includeActionItems: boolean;
  includeTimeAllocations: boolean;
  includeMeetingRules: boolean;
}

/* ---- Constants ---- */

const MEETING_TYPE_LABELS: Record<MeetingType, string> = {
  discovery_call: 'Discovery Call',
  project_kickoff: 'Project Kickoff',
  progress_review: 'Progress Review',
  feedback_revision: 'Feedback / Revision Review',
  project_wrapup: 'Project Wrap-Up',
  strategy_session: 'Strategy Session',
  quarterly_checkin: 'Quarterly Check-In',
  adhoc_other: 'Ad-Hoc / Other',
};

const MEETING_TITLE_SUGGESTIONS: Record<MeetingType, string> = {
  discovery_call: 'Discovery Call',
  project_kickoff: 'Project Kickoff Meeting',
  progress_review: 'Progress Review',
  feedback_revision: 'Feedback & Revision Review',
  project_wrapup: 'Project Wrap-Up Meeting',
  strategy_session: 'Strategy Session',
  quarterly_checkin: 'Quarterly Check-In',
  adhoc_other: 'Meeting',
};

const DURATION_LABELS: Record<Duration, string> = {
  '15': '15 minutes',
  '30': '30 minutes',
  '45': '45 minutes',
  '60': '1 hour',
  '90': '1.5 hours',
  '120': '2 hours',
};

const PLATFORM_LABELS: Record<Platform, string> = {
  google_meet: 'Google Meet',
  zoom: 'Zoom',
  microsoft_teams: 'Microsoft Teams',
  phone_call: 'Phone Call',
  in_person: 'In Person',
  other: 'Other',
};

/* ---- Default Agenda Items by Meeting Type ---- */

const DEFAULT_AGENDA_ITEMS: Record<MeetingType, Omit<AgendaItem, 'id'>[]> = {
  discovery_call: [
    { topic: 'Introductions', duration: 5, notes: 'Brief introductions — who you are, what you do, how you work' },
    { topic: "Client's business overview", duration: 10, notes: "Understand the client's business, industry, and current situation" },
    { topic: 'Project goals & pain points', duration: 10, notes: 'What problem are they trying to solve? What does success look like?' },
    { topic: 'Scope & timeline discussion', duration: 10, notes: 'High-level scope, desired timeline, and any hard deadlines' },
    { topic: 'Budget discussion', duration: 5, notes: 'Budget range, payment preferences, and any constraints' },
    { topic: 'Next steps', duration: 5, notes: 'Agree on next steps — proposal, follow-up call, or decision timeline' },
    { topic: 'Q&A', duration: 5, notes: 'Open floor for any remaining questions from either side' },
  ],
  project_kickoff: [
    { topic: 'Welcome & introductions', duration: 5, notes: 'Introduce all stakeholders and confirm roles' },
    { topic: 'Project scope recap', duration: 10, notes: 'Walk through the agreed scope, deliverables, and boundaries' },
    { topic: 'Timeline & milestones', duration: 10, notes: 'Review the project timeline, key dates, and milestone deadlines' },
    { topic: 'Communication plan', duration: 5, notes: 'Confirm communication channel, frequency, and response time expectations' },
    { topic: 'Tools & file sharing', duration: 5, notes: 'Agree on tools for collaboration, file sharing, and feedback' },
    { topic: 'Roles & responsibilities', duration: 5, notes: 'Clarify who is responsible for what — both freelancer and client side' },
    { topic: 'Questions & next steps', duration: 10, notes: 'Address any open questions and confirm immediate next actions' },
  ],
  progress_review: [
    { topic: 'Project status update', duration: 10, notes: 'Summary of progress since last check-in — what was planned vs. completed' },
    { topic: 'Completed deliverables review', duration: 10, notes: 'Walk through completed work and demonstrate deliverables where possible' },
    { topic: 'Upcoming milestones', duration: 5, notes: 'Preview the next phase of work and what to expect' },
    { topic: 'Blockers & risks', duration: 5, notes: 'Flag any blockers, risks, or dependencies that could impact the timeline' },
    { topic: 'Timeline check', duration: 5, notes: 'Confirm we are on track or discuss any schedule adjustments needed' },
    { topic: 'Action items', duration: 5, notes: 'Assign clear action items with owners and due dates' },
  ],
  feedback_revision: [
    { topic: 'Deliverable walkthrough', duration: 10, notes: 'Present the deliverable in context — walk through the work, not just show it' },
    { topic: 'Structured feedback collection', duration: 15, notes: 'Collect specific, actionable feedback — document every point in real time' },
    { topic: 'Clarify revision vs. scope change', duration: 5, notes: 'Confirm which items are revisions (included) vs. new scope (requires quote)' },
    { topic: 'Prioritise feedback items', duration: 5, notes: 'Rank feedback items by priority — must-have vs. nice-to-have changes' },
    { topic: 'Revision timeline', duration: 5, notes: 'Agree on when revised deliverables will be ready for re-review' },
    { topic: 'Next steps', duration: 5, notes: 'Confirm what happens after revisions — next phase, sign-off, or further review' },
  ],
  project_wrapup: [
    { topic: 'Deliverables recap', duration: 10, notes: 'Walk through all deliverables and confirm everything has been received' },
    { topic: 'Handover documentation', duration: 10, notes: 'Review any handover docs, access credentials, or maintenance guides' },
    { topic: 'Final approval & sign-off', duration: 5, notes: 'Confirm the client is satisfied and the project is formally complete' },
    { topic: 'Retrospective — what went well', duration: 5, notes: 'Discuss what worked well and what both parties can improve for next time' },
    { topic: 'Future opportunities', duration: 5, notes: 'Discuss ongoing needs, future projects, or retainer arrangements' },
    { topic: 'Testimonial & referral request', duration: 5, notes: 'Ask for a testimonial or referral if the client is happy with the work' },
  ],
  strategy_session: [
    { topic: 'Context setting', duration: 10, notes: 'Review current situation, recent data, and what prompted this strategy discussion' },
    { topic: 'Key challenges & opportunities', duration: 15, notes: 'Identify the top challenges to address and opportunities to pursue' },
    { topic: 'Strategic options', duration: 15, notes: 'Present and discuss strategic options with pros, cons, and resource requirements' },
    { topic: 'Decision & prioritisation', duration: 10, notes: 'Agree on strategic direction and prioritise initiatives' },
    { topic: 'Action plan & next steps', duration: 10, notes: 'Define immediate actions, responsibilities, and follow-up schedule' },
  ],
  quarterly_checkin: [
    { topic: 'Quarter in review', duration: 10, notes: 'Summary of work completed, milestones hit, and metrics achieved this quarter' },
    { topic: 'Relationship health check', duration: 5, notes: 'Open discussion about how the working relationship is going for both sides' },
    { topic: 'Upcoming quarter priorities', duration: 10, notes: 'Discuss planned projects, budget allocation, and priorities for next quarter' },
    { topic: 'Process improvements', duration: 5, notes: 'Identify any workflow or communication improvements to implement' },
    { topic: 'Budget & invoicing review', duration: 5, notes: 'Review spend to date, outstanding payments, and budget for upcoming work' },
    { topic: 'Action items & scheduling', duration: 5, notes: 'Confirm action items and schedule the next quarterly check-in' },
  ],
  adhoc_other: [
    { topic: 'Meeting purpose & context', duration: 5, notes: 'Clarify the purpose of this meeting and desired outcome' },
    { topic: 'Discussion item 1', duration: 10, notes: 'Primary topic for discussion' },
    { topic: 'Discussion item 2', duration: 10, notes: 'Secondary topic for discussion' },
    { topic: 'Decisions & action items', duration: 5, notes: 'Summarise any decisions made and assign action items with owners' },
  ],
};

const MEETING_RULES = [
  'Start and end on time — respect everyone\'s schedule',
  'One person speaks at a time — no interrupting',
  'Phones on silent — minimise distractions',
  'Stay on topic — park tangential items for follow-up',
  'Document decisions and action items as they happen',
];

/* ---- Helpers ---- */

function generateId(): string {
  return Math.random().toString(36).substring(2, 9);
}

function formatDate(dateStr: string): string {
  if (!dateStr) return 'TBD';
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' });
}

function formatTime(timeStr: string): string {
  if (!timeStr) return 'TBD';
  const [hours, minutes] = timeStr.split(':').map(Number);
  const period = hours >= 12 ? 'PM' : 'AM';
  const displayHours = hours % 12 || 12;
  return `${displayHours}:${minutes.toString().padStart(2, '0')} ${period}`;
}

/* ---- Step Indicator Component ---- */

function StepIndicator({ step }: { step: Step }) {
  const steps = [
    { num: 1, label: 'Details' },
    { num: 2, label: 'Agenda' },
    { num: 3, label: 'Options' },
    { num: 4, label: 'Output' },
  ];

  return (
    <div className="flex items-center justify-center gap-0 mb-10">
      {steps.map((s, i) => (
        <div key={s.num} className="flex items-center">
          <div className="flex flex-col items-center">
            <div
              className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                step > s.num
                  ? 'bg-indigo-500 text-white'
                  : step === s.num
                  ? 'bg-gradient-to-br from-indigo-400 to-violet-500 text-white ring-4 ring-indigo-400/20'
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
                step === s.num ? 'text-indigo-400' : step > s.num ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              {s.label}
            </span>
          </div>
          {i < steps.length - 1 && (
            <div
              className={`w-10 sm:w-16 h-0.5 mb-5 mx-1.5 transition-all ${
                step > s.num ? 'bg-indigo-500' : 'bg-white/10'
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
  optional,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  hint?: string;
  optional?: boolean;
}) {
  return (
    <div>
      <Label>
        {label}
        {optional && <span className="text-slate-500 font-normal ml-1">(optional)</span>}
      </Label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition-all"
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
        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition-all resize-none"
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
        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition-all appearance-none"
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

/* ---- Time Allocation Bar ---- */

function TimeAllocationBar({ usedMinutes, totalMinutes }: { usedMinutes: number; totalMinutes: number }) {
  const percentage = totalMinutes > 0 ? Math.min((usedMinutes / totalMinutes) * 100, 100) : 0;
  const overflowPercentage = totalMinutes > 0 && usedMinutes > totalMinutes ? Math.min(((usedMinutes - totalMinutes) / totalMinutes) * 100, 100) : 0;
  const isOver = usedMinutes > totalMinutes;
  const isAt = usedMinutes === totalMinutes;

  const barColor = isOver
    ? 'from-red-500 to-red-400'
    : isAt
    ? 'from-amber-500 to-amber-400'
    : 'from-emerald-500 to-emerald-400';

  const textColor = isOver ? 'text-red-400' : isAt ? 'text-amber-400' : 'text-emerald-400';

  return (
    <div className="bg-white/5 rounded-xl border border-white/10 p-4">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-slate-300 font-medium">Time allocation</span>
        <span className={`text-sm font-bold ${textColor}`}>
          {usedMinutes} / {totalMinutes} min
          {isOver && ` (+${usedMinutes - totalMinutes} min over)`}
        </span>
      </div>
      <div className="w-full h-2.5 bg-white/10 rounded-full overflow-hidden">
        <div
          className={`h-full bg-gradient-to-r ${barColor} rounded-full transition-all duration-500`}
          style={{ width: `${Math.min(percentage + overflowPercentage, 100)}%` }}
        />
      </div>
      <p className="text-xs text-slate-500 mt-1.5">
        {isOver
          ? 'Your agenda items exceed the allocated meeting time. Consider trimming topics or extending the meeting.'
          : isAt
          ? 'Your agenda perfectly fills the allocated time. No buffer for overrun — consider trimming 5 minutes.'
          : `${totalMinutes - usedMinutes} minutes of buffer remaining. Good for overrun and wrap-up.`}
      </p>
    </div>
  );
}

/* ---- Agenda Text Generator ---- */

function generateAgendaText(
  details: MeetingDetails,
  agendaItems: AgendaItem[],
  options: AdditionalOptions
): string {
  const divider = '────────────────────────────────────────────────────────────';
  const nl = '\n';

  const meetingTypeName = details.meetingType ? MEETING_TYPE_LABELS[details.meetingType] : 'Meeting';
  const platformName = details.platform ? PLATFORM_LABELS[details.platform] : 'TBD';
  const durationLabel = details.duration ? DURATION_LABELS[details.duration] : 'TBD';
  const totalAgendaTime = agendaItems.reduce((sum, item) => sum + item.duration, 0);

  let text = '';

  // Header
  text += `MEETING AGENDA${nl}`;
  text += divider + nl + nl;
  text += `Meeting:     ${details.meetingTitle || meetingTypeName}${nl}`;
  text += `Type:        ${meetingTypeName}${nl}`;
  text += `Date:        ${formatDate(details.date)}${nl}`;
  text += `Time:        ${formatTime(details.time)}${nl}`;
  text += `Duration:    ${durationLabel}${nl}`;
  text += `Location:    ${platformName}${nl}`;
  if (details.projectName) text += `Project:     ${details.projectName}${nl}`;
  text += `Organiser:   ${details.yourName || 'TBD'}${nl}`;
  text += `Client:      ${details.clientName || 'TBD'}${nl}`;
  text += `Prepared:    ${new Date().toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' })}`;

  text += nl + nl + divider + nl;

  // Attendees
  const allAttendees: string[] = [];
  if (details.yourName) allAttendees.push(details.yourName);
  if (details.clientName) allAttendees.push(details.clientName);
  options.attendees.forEach((a) => {
    if (a.name.trim()) allAttendees.push(a.name.trim());
  });

  if (allAttendees.length > 0) {
    text += nl + `ATTENDEES${nl}${divider}${nl}${nl}`;
    allAttendees.forEach((name) => {
      text += `  - ${name}${nl}`;
    });
  }

  // Meeting Objectives
  if (options.meetingObjectives.trim()) {
    text += nl + `MEETING OBJECTIVES${nl}${divider}${nl}${nl}`;
    text += options.meetingObjectives.trim() + nl;
  }

  // Pre-meeting Preparation
  if (options.preparationNotes.trim()) {
    text += nl + `PRE-MEETING PREPARATION${nl}${divider}${nl}${nl}`;
    text += options.preparationNotes.trim() + nl;
  }

  // Agenda Items
  text += nl + `AGENDA${nl}${divider}${nl}${nl}`;

  if (agendaItems.length > 0) {
    if (options.includeTimeAllocations) {
      // Table format with time
      const topicWidth = 40;
      const durationWidth = 10;

      text += `  ${'Topic'.padEnd(topicWidth)}${'Duration'.padEnd(durationWidth)}Notes${nl}`;
      text += `  ${''.padEnd(topicWidth, '-')}${''.padEnd(durationWidth, '-')}${''.padEnd(30, '-')}${nl}`;

      agendaItems.forEach((item, i) => {
        const num = `${i + 1}. `;
        const topicText = num + item.topic;
        const truncatedTopic = topicText.length > topicWidth - 1 ? topicText.substring(0, topicWidth - 4) + '...' : topicText;
        const durationText = `${item.duration} min`;
        text += `  ${truncatedTopic.padEnd(topicWidth)}${durationText.padEnd(durationWidth)}${item.notes || ''}${nl}`;
      });

      text += nl;
      text += `  Total: ${totalAgendaTime} minutes`;
      if (details.duration) {
        const allocated = parseInt(details.duration);
        if (totalAgendaTime > allocated) {
          text += ` (${totalAgendaTime - allocated} min over allocated time)`;
        } else if (totalAgendaTime < allocated) {
          text += ` (${allocated - totalAgendaTime} min buffer)`;
        }
      }
      text += nl;
    } else {
      // Simple numbered list without time
      agendaItems.forEach((item, i) => {
        text += `  ${i + 1}. ${item.topic}${nl}`;
        if (item.notes) text += `     ${item.notes}${nl}`;
        text += nl;
      });
    }
  } else {
    text += `  No agenda items defined.${nl}`;
  }

  // Meeting Rules
  if (options.includeMeetingRules) {
    text += nl + `MEETING RULES${nl}${divider}${nl}${nl}`;
    MEETING_RULES.forEach((rule) => {
      text += `  - ${rule}${nl}`;
    });
  }

  // Action Items
  if (options.includeActionItems) {
    text += nl + `ACTION ITEMS${nl}${divider}${nl}${nl}`;
    text += `  ${'Action'.padEnd(35)}${'Owner'.padEnd(20)}Due Date${nl}`;
    text += `  ${''.padEnd(35, '-')}${''.padEnd(20, '-')}${''.padEnd(15, '-')}${nl}`;
    for (let i = 0; i < 5; i++) {
      text += `  ${''.padEnd(35)}${''.padEnd(20)}${nl}`;
    }
  }

  // Footer
  text += nl + divider + nl;
  text += `Agenda created with InvoiceFlow — invoiceflow.au/tools/meeting-agenda-generator`;

  return text;
}

/* ---- Main Component ---- */

export default function MeetingAgendaGenerator() {
  const [step, setStep] = useState<Step>(1);
  const [copied, setCopied] = useState(false);
  const briefRef = useRef<HTMLPreElement>(null);

  /* Step 1: Meeting Details */
  const [details, setDetails] = useState<MeetingDetails>({
    meetingType: '',
    meetingTitle: '',
    date: '',
    time: '',
    duration: '',
    platform: '',
    yourName: '',
    clientName: '',
    projectName: '',
  });

  /* Step 2: Agenda Items */
  const [agendaItems, setAgendaItems] = useState<AgendaItem[]>([]);
  const [agendaLoaded, setAgendaLoaded] = useState(false);

  /* Step 3: Additional Options */
  const [options, setOptions] = useState<AdditionalOptions>({
    attendees: [],
    preparationNotes: '',
    meetingObjectives: '',
    includeActionItems: true,
    includeTimeAllocations: true,
    includeMeetingRules: false,
  });

  /* Step 1 validation */
  const step1Valid =
    details.meetingType !== '' &&
    details.yourName.trim() !== '' &&
    details.clientName.trim() !== '';

  /* Load default agenda items when entering Step 2 */
  const loadDefaultAgendaItems = () => {
    if (!agendaLoaded && details.meetingType) {
      const defaults = DEFAULT_AGENDA_ITEMS[details.meetingType];
      const withIds = defaults.map((item) => ({ ...item, id: generateId() }));
      setAgendaItems(withIds);
      setAgendaLoaded(true);
    }
  };

  /* Computed values */
  const totalAgendaMinutes = agendaItems.reduce((sum, item) => sum + item.duration, 0);
  const allocatedMinutes = details.duration ? parseInt(details.duration) : 0;

  /* Agenda item management */
  const addAgendaItem = () => {
    setAgendaItems((prev) => [...prev, { id: generateId(), topic: '', duration: 5, notes: '' }]);
  };

  const updateAgendaItem = (id: string, field: keyof Omit<AgendaItem, 'id'>, value: string | number) => {
    setAgendaItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  const removeAgendaItem = (id: string) => {
    setAgendaItems((prev) => prev.filter((item) => item.id !== id));
  };

  const moveAgendaItem = (index: number, direction: 'up' | 'down') => {
    const newIndex = direction === 'up' ? index - 1 : index + 1;
    if (newIndex < 0 || newIndex >= agendaItems.length) return;
    const updated = [...agendaItems];
    const temp = updated[index];
    updated[index] = updated[newIndex];
    updated[newIndex] = temp;
    setAgendaItems(updated);
  };

  /* Attendee management */
  const addAttendee = () => {
    setOptions((prev) => ({
      ...prev,
      attendees: [...prev.attendees, { id: generateId(), name: '' }],
    }));
  };

  const updateAttendee = (id: string, name: string) => {
    setOptions((prev) => ({
      ...prev,
      attendees: prev.attendees.map((a) => (a.id === id ? { ...a, name } : a)),
    }));
  };

  const removeAttendee = (id: string) => {
    setOptions((prev) => ({
      ...prev,
      attendees: prev.attendees.filter((a) => a.id !== id),
    }));
  };

  /* Navigation */
  const goToStep = (target: Step) => {
    if (target === 2) loadDefaultAgendaItems();
    setStep(target);
  };

  /* Copy to clipboard */
  const copyAgenda = async () => {
    const agendaText = generateAgendaText(details, agendaItems, options);
    try {
      await navigator.clipboard.writeText(agendaText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      const el = document.createElement('textarea');
      el.value = agendaText;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  /* Print */
  const printAgenda = () => {
    const agendaText = generateAgendaText(details, agendaItems, options);
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>Meeting Agenda — ${details.meetingTitle || 'Meeting'}</title>
            <style>
              body { font-family: 'Courier New', monospace; font-size: 13px; line-height: 1.6; padding: 40px; color: #1a1a1a; max-width: 800px; margin: 0 auto; }
              @media print { body { padding: 20px; } }
            </style>
          </head>
          <body><pre>${agendaText.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</pre></body>
        </html>
      `);
      printWindow.document.close();
      printWindow.print();
    }
  };

  /* Generated agenda text for Step 4 */
  const agendaText = step === 4 ? generateAgendaText(details, agendaItems, options) : '';

  return (
    <div className="glass rounded-2xl p-6 sm:p-8">
      <StepIndicator step={step} />

      {/* ---- STEP 1: Meeting Details ---- */}
      {step === 1 && (
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-bold text-white heading-font mb-1">Meeting Details</h2>
            <p className="text-sm text-slate-400">Start with the basics. The meeting type determines suggested agenda items in the next step.</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <SelectField
              label="Meeting type"
              value={details.meetingType}
              onChange={(v) => {
                const newType = v as MeetingType;
                setDetails((p) => ({
                  ...p,
                  meetingType: newType,
                  meetingTitle: p.meetingTitle || MEETING_TITLE_SUGGESTIONS[newType],
                }));
                setAgendaLoaded(false);
              }}
              options={Object.entries(MEETING_TYPE_LABELS).map(([value, label]) => ({ value: value as MeetingType, label }))}
              hint="Determines suggested agenda items in Step 2"
            />
            <InputField
              label="Meeting title"
              value={details.meetingTitle}
              onChange={(v) => setDetails((p) => ({ ...p, meetingTitle: v }))}
              placeholder="e.g. Website Redesign — Kickoff Meeting"
              hint="Auto-suggested based on meeting type"
            />
            <InputField
              label="Date"
              value={details.date}
              onChange={(v) => setDetails((p) => ({ ...p, date: v }))}
              type="date"
            />
            <InputField
              label="Time"
              value={details.time}
              onChange={(v) => setDetails((p) => ({ ...p, time: v }))}
              type="time"
            />
            <SelectField
              label="Duration"
              value={details.duration}
              onChange={(v) => setDetails((p) => ({ ...p, duration: v }))}
              options={Object.entries(DURATION_LABELS).map(([value, label]) => ({ value: value as Duration, label }))}
            />
            <SelectField
              label="Location / platform"
              value={details.platform}
              onChange={(v) => setDetails((p) => ({ ...p, platform: v }))}
              options={Object.entries(PLATFORM_LABELS).map(([value, label]) => ({ value: value as Platform, label }))}
            />
            <InputField
              label="Your name"
              value={details.yourName}
              onChange={(v) => setDetails((p) => ({ ...p, yourName: v }))}
              placeholder="e.g. Alex Thompson"
            />
            <InputField
              label="Client name"
              value={details.clientName}
              onChange={(v) => setDetails((p) => ({ ...p, clientName: v }))}
              placeholder="e.g. Sarah Chen, Acme Corp"
            />
            <InputField
              label="Project name"
              value={details.projectName}
              onChange={(v) => setDetails((p) => ({ ...p, projectName: v }))}
              placeholder="e.g. Website Redesign Q1 2026"
              optional
            />
          </div>

          <div className="flex justify-end pt-2">
            <button
              onClick={() => goToStep(2)}
              disabled={!step1Valid}
              className="px-6 py-2.5 bg-gradient-to-r from-indigo-500 to-violet-500 text-white text-sm font-semibold rounded-lg hover:from-indigo-400 hover:to-violet-400 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Next: Agenda Items
            </button>
          </div>
        </div>
      )}

      {/* ---- STEP 2: Agenda Items ---- */}
      {step === 2 && (
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-bold text-white heading-font mb-1">Agenda Items</h2>
            <p className="text-sm text-slate-400">
              {details.meetingType
                ? `Pre-populated for a ${MEETING_TYPE_LABELS[details.meetingType].toLowerCase()}. Edit, reorder, add, or remove items to match your meeting.`
                : 'Define the topics you need to cover. Add time allocations to keep the meeting on track.'}
            </p>
          </div>

          {/* Time Allocation Bar */}
          {allocatedMinutes > 0 && (
            <TimeAllocationBar usedMinutes={totalAgendaMinutes} totalMinutes={allocatedMinutes} />
          )}

          {/* Agenda Items List */}
          <div className="space-y-3">
            {agendaItems.map((item, i) => (
              <div key={item.id} className="bg-white/5 rounded-xl border border-white/10 p-4">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-xs font-bold text-indigo-400 bg-indigo-400/10 border border-indigo-400/20 rounded-full px-2.5 py-0.5">
                    Item {i + 1}
                  </span>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => moveAgendaItem(i, 'up')}
                      disabled={i === 0}
                      className="text-slate-500 hover:text-indigo-400 transition-colors text-sm p-1 disabled:opacity-30 disabled:cursor-not-allowed"
                      title="Move up"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                      </svg>
                    </button>
                    <button
                      onClick={() => moveAgendaItem(i, 'down')}
                      disabled={i === agendaItems.length - 1}
                      className="text-slate-500 hover:text-indigo-400 transition-colors text-sm p-1 disabled:opacity-30 disabled:cursor-not-allowed"
                      title="Move down"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={() => removeAgendaItem(item.id)}
                      className="text-slate-500 hover:text-red-400 transition-colors text-sm p-1 ml-1"
                      title="Remove item"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <div className="flex-1">
                      <input
                        type="text"
                        value={item.topic}
                        onChange={(e) => updateAgendaItem(item.id, 'topic', e.target.value)}
                        placeholder="Topic name"
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white font-medium placeholder-slate-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition-all"
                      />
                    </div>
                    <div className="w-24">
                      <div className="relative">
                        <input
                          type="number"
                          value={item.duration}
                          onChange={(e) => updateAgendaItem(item.id, 'duration', Math.max(1, parseInt(e.target.value) || 1))}
                          min={1}
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white text-center focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition-all"
                        />
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-500">min</span>
                      </div>
                    </div>
                  </div>
                  <input
                    type="text"
                    value={item.notes}
                    onChange={(e) => updateAgendaItem(item.id, 'notes', e.target.value)}
                    placeholder="Notes / description (optional)"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition-all"
                  />
                </div>
              </div>
            ))}

            <button
              onClick={addAgendaItem}
              className="w-full py-3 border border-dashed border-white/20 rounded-xl text-sm text-slate-400 hover:text-indigo-400 hover:border-indigo-400/30 transition-all flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Add Agenda Item
            </button>
          </div>

          {/* Time Summary */}
          {agendaItems.length > 0 && (
            <div className="flex items-center justify-between text-sm bg-white/5 rounded-lg border border-white/10 px-4 py-3">
              <span className="text-slate-400">Total agenda time</span>
              <span className="text-white font-bold">{totalAgendaMinutes} minutes</span>
            </div>
          )}

          <div className="flex justify-between pt-2">
            <button
              onClick={() => goToStep(1)}
              className="px-5 py-2.5 bg-white/5 border border-white/10 text-slate-300 text-sm font-medium rounded-lg hover:bg-white/10 transition-all"
            >
              Back
            </button>
            <button
              onClick={() => goToStep(3)}
              className="px-6 py-2.5 bg-gradient-to-r from-indigo-500 to-violet-500 text-white text-sm font-semibold rounded-lg hover:from-indigo-400 hover:to-violet-400 transition-all"
            >
              Next: Additional Options
            </button>
          </div>
        </div>
      )}

      {/* ---- STEP 3: Additional Options ---- */}
      {step === 3 && (
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-bold text-white heading-font mb-1">Additional Options</h2>
            <p className="text-sm text-slate-400">Add attendees, preparation notes, and customise the output format. All fields are optional.</p>
          </div>

          {/* Attendees */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <div>
                <Label>Additional attendees</Label>
                <p className="text-xs text-slate-500">Your name and the client name are already included. Add anyone else attending.</p>
              </div>
            </div>
            <div className="space-y-2">
              {options.attendees.map((a) => (
                <div key={a.id} className="flex gap-2">
                  <input
                    type="text"
                    value={a.name}
                    onChange={(e) => updateAttendee(a.id, e.target.value)}
                    placeholder="Attendee name"
                    className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition-all"
                  />
                  <button
                    onClick={() => removeAttendee(a.id)}
                    className="text-slate-500 hover:text-red-400 transition-colors p-2"
                    title="Remove attendee"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              ))}
              <button
                onClick={addAttendee}
                className="w-full py-2.5 border border-dashed border-white/20 rounded-lg text-sm text-slate-400 hover:text-indigo-400 hover:border-indigo-400/30 transition-all flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Add Attendee
              </button>
            </div>
          </div>

          {/* Pre-meeting Preparation */}
          <TextAreaField
            label="Pre-meeting preparation notes"
            value={options.preparationNotes}
            onChange={(v) => setOptions((p) => ({ ...p, preparationNotes: v }))}
            placeholder="What should attendees prepare or bring? e.g. 'Review the wireframes shared on Monday. Prepare a list of top-priority feedback items. Have brand guidelines document accessible.'"
            rows={3}
            optional
            hint="Tells the client what to prepare before the meeting"
          />

          {/* Meeting Objectives */}
          <TextAreaField
            label="Meeting objectives"
            value={options.meetingObjectives}
            onChange={(v) => setOptions((p) => ({ ...p, meetingObjectives: v }))}
            placeholder="What does success look like for this meeting? e.g. 'Align on project scope and deliverables. Agree on communication cadence. Confirm timeline and first milestone date.'"
            rows={3}
            optional
            hint="Defines what success looks like for this meeting"
          />

          {/* Toggle Options */}
          <div className="space-y-3">
            <p className="text-sm text-slate-300 font-medium">Output options</p>
            <div className="space-y-2">
              <label className="flex items-center gap-3 bg-white/5 rounded-lg border border-white/10 p-4 cursor-pointer hover:bg-white/[0.07] transition-all">
                <input
                  type="checkbox"
                  checked={options.includeActionItems}
                  onChange={(e) => setOptions((p) => ({ ...p, includeActionItems: e.target.checked }))}
                  className="w-4 h-4 rounded border-white/20 bg-white/5 text-indigo-500 focus:ring-indigo-500/20 focus:ring-offset-0"
                />
                <div>
                  <span className="text-sm text-white font-medium">Include action items section</span>
                  <p className="text-xs text-slate-500 mt-0.5">Adds a blank table with Action, Owner, and Due Date columns for meeting follow-ups</p>
                </div>
              </label>
              <label className="flex items-center gap-3 bg-white/5 rounded-lg border border-white/10 p-4 cursor-pointer hover:bg-white/[0.07] transition-all">
                <input
                  type="checkbox"
                  checked={options.includeTimeAllocations}
                  onChange={(e) => setOptions((p) => ({ ...p, includeTimeAllocations: e.target.checked }))}
                  className="w-4 h-4 rounded border-white/20 bg-white/5 text-indigo-500 focus:ring-indigo-500/20 focus:ring-offset-0"
                />
                <div>
                  <span className="text-sm text-white font-medium">Include time allocations in output</span>
                  <p className="text-xs text-slate-500 mt-0.5">Shows duration in minutes next to each agenda item in the generated document</p>
                </div>
              </label>
              <label className="flex items-center gap-3 bg-white/5 rounded-lg border border-white/10 p-4 cursor-pointer hover:bg-white/[0.07] transition-all">
                <input
                  type="checkbox"
                  checked={options.includeMeetingRules}
                  onChange={(e) => setOptions((p) => ({ ...p, includeMeetingRules: e.target.checked }))}
                  className="w-4 h-4 rounded border-white/20 bg-white/5 text-indigo-500 focus:ring-indigo-500/20 focus:ring-offset-0"
                />
                <div>
                  <span className="text-sm text-white font-medium">Include meeting rules section</span>
                  <p className="text-xs text-slate-500 mt-0.5">Adds ground rules like &quot;phones off&quot;, &quot;one person speaks at a time&quot;, and &quot;stay on topic&quot;</p>
                </div>
              </label>
            </div>
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
              className="px-6 py-2.5 bg-gradient-to-r from-indigo-500 to-violet-500 text-white text-sm font-semibold rounded-lg hover:from-indigo-400 hover:to-violet-400 transition-all"
            >
              Generate Agenda
            </button>
          </div>
        </div>
      )}

      {/* ---- STEP 4: Generated Agenda ---- */}
      {step === 4 && (
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-bold text-white heading-font mb-1">Your Meeting Agenda</h2>
            <p className="text-sm text-slate-400">
              Ready to share with attendees. Copy the text below or print a clean version.
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-3">
            <button
              onClick={copyAgenda}
              className={`px-5 py-2.5 text-sm font-semibold rounded-lg transition-all flex items-center gap-2 ${
                copied
                  ? 'bg-emerald-500/20 border border-emerald-500/30 text-emerald-400'
                  : 'bg-gradient-to-r from-indigo-500 to-violet-500 text-white hover:from-indigo-400 hover:to-violet-400'
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
              onClick={printAgenda}
              className="px-5 py-2.5 bg-white/5 border border-white/10 text-slate-300 text-sm font-medium rounded-lg hover:bg-white/10 transition-all flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>
              Print
            </button>
          </div>

          {/* Agenda preview */}
          <div className="bg-slate-950/50 rounded-xl border border-white/10 overflow-hidden">
            <div className="px-5 py-3 border-b border-white/10 flex items-center justify-between">
              <span className="text-xs text-slate-400 font-medium">
                MEETING AGENDA — {details.meetingTitle || 'Meeting'}
              </span>
              <span className="text-xs text-slate-500">
                {agendaItems.length} items | {totalAgendaMinutes} min
              </span>
            </div>
            <pre
              ref={briefRef}
              className="p-5 text-sm text-slate-300 font-mono leading-relaxed overflow-x-auto whitespace-pre-wrap break-words max-h-[600px] overflow-y-auto"
            >
              {agendaText}
            </pre>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-white/5 rounded-xl border border-white/10 p-4 text-center">
              <p className="text-2xl font-bold text-white">{agendaItems.length}</p>
              <p className="text-xs text-slate-400 mt-1">Agenda Items</p>
            </div>
            <div className="bg-white/5 rounded-xl border border-white/10 p-4 text-center">
              <p className="text-2xl font-bold text-white">{totalAgendaMinutes}</p>
              <p className="text-xs text-slate-400 mt-1">Total Minutes</p>
            </div>
            <div className="bg-white/5 rounded-xl border border-white/10 p-4 text-center">
              <p className="text-2xl font-bold text-white">
                {(details.yourName ? 1 : 0) + (details.clientName ? 1 : 0) + options.attendees.filter((a) => a.name.trim()).length}
              </p>
              <p className="text-xs text-slate-400 mt-1">Attendees</p>
            </div>
            <div className="bg-white/5 rounded-xl border border-white/10 p-4 text-center">
              <p className="text-2xl font-bold text-white">
                {details.meetingType ? MEETING_TYPE_LABELS[details.meetingType].split(' ')[0] : 'N/A'}
              </p>
              <p className="text-xs text-slate-400 mt-1">Meeting Type</p>
            </div>
          </div>

          {/* Tip */}
          <div className="bg-gradient-to-r from-indigo-400/10 to-violet-500/10 border border-indigo-400/20 rounded-xl p-5">
            <p className="text-sm text-indigo-400 font-medium mb-2">Pro tip: Send the agenda 24 hours before</p>
            <p className="text-sm text-slate-300">
              Share this agenda with all attendees at least one day before the meeting. This gives
              everyone time to prepare, add items, and flag any topics that need to be reprioritised.
              Meetings that start with a shared agenda run an average of 30 percent faster and produce
              twice as many actionable outcomes.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              onClick={() => goToStep(3)}
              className="flex-1 py-2.5 bg-white/5 border border-white/10 text-slate-300 text-sm font-medium rounded-lg hover:bg-white/10 transition-all"
            >
              Edit Options
            </button>
            <button
              onClick={() => goToStep(2)}
              className="flex-1 py-2.5 bg-white/5 border border-white/10 text-slate-300 text-sm font-medium rounded-lg hover:bg-white/10 transition-all"
            >
              Edit Agenda Items
            </button>
            <button
              onClick={() => {
                setStep(1);
                setDetails({
                  meetingType: '',
                  meetingTitle: '',
                  date: '',
                  time: '',
                  duration: '',
                  platform: '',
                  yourName: '',
                  clientName: '',
                  projectName: '',
                });
                setAgendaItems([]);
                setAgendaLoaded(false);
                setOptions({
                  attendees: [],
                  preparationNotes: '',
                  meetingObjectives: '',
                  includeActionItems: true,
                  includeTimeAllocations: true,
                  includeMeetingRules: false,
                });
              }}
              className="flex-1 py-2.5 bg-white/5 border border-white/10 text-slate-300 text-sm font-medium rounded-lg hover:bg-white/10 transition-all"
            >
              Start New Agenda
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
