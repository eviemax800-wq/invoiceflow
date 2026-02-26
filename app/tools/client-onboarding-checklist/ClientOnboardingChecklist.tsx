'use client';

import { useState, useCallback } from 'react';

/* ─────────────────────────── Types ─────────────────────────── */

type ServiceType =
  | 'web-dev'
  | 'design'
  | 'marketing'
  | 'consulting'
  | 'writing'
  | 'photography'
  | 'other';

type ProjectCategory = 'new-build' | 'redesign' | 'retainer' | 'one-off';

type CommChannel = 'email' | 'slack' | 'teams' | 'whatsapp' | 'phone';

type UpdateFreq = 'daily' | 'twice-weekly' | 'weekly' | 'fortnightly' | 'milestone-only';

type MeetingTool = 'google-meet' | 'zoom' | 'teams' | 'in-person' | 'none';

type PaymentTerms = 'upfront' | '50-50' | 'milestone' | 'net-14' | 'net-30';

interface Step1 {
  serviceType: ServiceType;
  projectCategory: ProjectCategory;
  projectValue: string;
  projectDuration: string;
}

interface Step2 {
  commChannel: CommChannel;
  updateFreq: UpdateFreq;
  timezone: string;
  meetingTool: MeetingTool;
}

interface Step3 {
  paymentTerms: PaymentTerms;
  depositPercent: string;
  requireContract: boolean;
  includeNda: boolean;
}

interface ChecklistItem {
  id: string;
  label: string;
  checked: boolean;
}

interface ChecklistCategory {
  id: string;
  title: string;
  emoji: string;
  items: ChecklistItem[];
}

/* ─────────────────────── Label Maps ─────────────────────────── */

const SERVICE_LABELS: Record<ServiceType, string> = {
  'web-dev': 'Web Development',
  design: 'Design / Branding',
  marketing: 'Marketing',
  consulting: 'Consulting',
  writing: 'Content Writing',
  photography: 'Photography / Video',
  other: 'Other',
};

const CATEGORY_LABELS: Record<ProjectCategory, string> = {
  'new-build': 'New Build',
  redesign: 'Redesign',
  retainer: 'Ongoing Retainer',
  'one-off': 'One-Off Project',
};

const COMM_LABELS: Record<CommChannel, string> = {
  email: 'Email',
  slack: 'Slack',
  teams: 'Microsoft Teams',
  whatsapp: 'WhatsApp',
  phone: 'Phone / Calls',
};

const FREQ_LABELS: Record<UpdateFreq, string> = {
  daily: 'Daily Updates',
  'twice-weekly': 'Twice Weekly',
  weekly: 'Weekly',
  fortnightly: 'Fortnightly',
  'milestone-only': 'Milestone-Only',
};

const MEETING_LABELS: Record<MeetingTool, string> = {
  'google-meet': 'Google Meet',
  zoom: 'Zoom',
  teams: 'Microsoft Teams',
  'in-person': 'In-Person',
  none: 'No Meetings',
};

const PAYMENT_LABELS: Record<PaymentTerms, string> = {
  upfront: '100% Upfront',
  '50-50': '50% / 50%',
  milestone: 'Milestone-Based',
  'net-14': 'Net 14 Days',
  'net-30': 'Net 30 Days',
};

/* ─────────────────────── Checklist Builder ─────────────────────── */

let _uid = 1;
function uid(prefix: string) {
  return `${prefix}-${_uid++}`;
}

function item(label: string): ChecklistItem {
  return { id: uid('ci'), label, checked: false };
}

function buildChecklist(s1: Step1, s2: Step2, s3: Step3): ChecklistCategory[] {
  const isRetainer = s1.projectCategory === 'retainer';
  const isWebDev = s1.serviceType === 'web-dev';
  const isDesign = s1.serviceType === 'design';
  const isMarketing = s1.serviceType === 'marketing';
  const isWriting = s1.serviceType === 'writing';
  const isPhoto = s1.serviceType === 'photography';
  const isConsulting = s1.serviceType === 'consulting';
  const isMilestone = s3.paymentTerms === 'milestone';
  const is5050 = s3.paymentTerms === '50-50';
  const isUpfront = s3.paymentTerms === 'upfront';
  const needsDeposit = !isUpfront && parseFloat(s3.depositPercent || '0') > 0;
  const depositPct = s3.depositPercent ? `${s3.depositPercent}%` : 'deposit';

  /* ── Pre-Start ── */
  const preStart: ChecklistItem[] = [
    item("Confirm client's legal business name and ABN"),
    item('Collect primary contact name, email, and direct phone number'),
    item('Verify billing address and accounts-payable contact email'),
    item('Confirm GST registration status for correct invoicing'),
    item('Agree on official project start date in writing'),
  ];
  if (s1.projectCategory === 'redesign') {
    preStart.push(item('Request access to existing platform, files, or assets for review'));
    preStart.push(item('Document current state and pain points from client brief'));
  }
  if (isRetainer) {
    preStart.push(item('Define monthly deliverable scope and inclusions/exclusions clearly'));
    preStart.push(item('Agree on unused hours / tasks rollover policy'));
  }
  if (isWebDev) {
    preStart.push(item('Confirm hosting provider and existing domain setup'));
    preStart.push(item('Request current site credentials (if redesign) or confirm new setup'));
  }
  if (isDesign) {
    preStart.push(item('Collect any existing brand assets, style guides, or moodboards'));
  }
  if (isPhoto) {
    preStart.push(item('Confirm shoot date, location, and logistics details'));
    preStart.push(item('Discuss shot list and desired outcomes with client'));
  }
  if (isConsulting) {
    preStart.push(item('Request access to relevant business data, reports, or systems'));
    preStart.push(item('Define key stakeholders and reporting structure'));
  }

  /* ── Communication Setup ── */
  const commSetup: ChecklistItem[] = [
    item(`Set up ${COMM_LABELS[s2.commChannel]} channel or thread for the project`),
    item(`Confirm update frequency with client — ${FREQ_LABELS[s2.updateFreq]}`),
    item(`Communicate your working hours and response-time expectations in writing`),
  ];
  if (s2.timezone) {
    commSetup.push(item(`Confirm timezone difference and note scheduling implications (Client TZ: ${s2.timezone})`));
  }
  if (s2.meetingTool !== 'none') {
    commSetup.push(item(`Schedule kickoff meeting via ${MEETING_LABELS[s2.meetingTool]}`));
    commSetup.push(item(`Send calendar invite with agenda at least 24 hours in advance`));
  }
  commSetup.push(item('Establish feedback and revision submission process'));
  commSetup.push(item('Agree on escalation path for urgent issues outside business hours'));
  if (s2.updateFreq === 'daily' || s2.updateFreq === 'twice-weekly') {
    commSetup.push(item('Set up brief daily/weekly standup format and time slot'));
  }
  if (isMarketing || isWriting) {
    commSetup.push(item('Confirm content approval workflow and sign-off authority'));
  }

  /* ── Payment Setup ── */
  const paymentSetup: ChecklistItem[] = [];
  if (isUpfront) {
    paymentSetup.push(item('Send full project invoice — payment required before work begins'));
    paymentSetup.push(item('Confirm payment cleared before commencing any billable work'));
  } else if (is5050) {
    paymentSetup.push(item(`Send 50% deposit invoice — confirm payment before project start`));
    paymentSetup.push(item('Schedule final 50% invoice for project completion milestone'));
  } else if (isMilestone) {
    paymentSetup.push(item(`Send ${depositPct} deposit invoice — confirm payment before project start`));
    paymentSetup.push(item('Define milestone payment trigger points and deliverables in writing'));
    paymentSetup.push(item('Confirm schedule for each milestone invoice in the project plan'));
  } else {
    if (needsDeposit) {
      paymentSetup.push(item(`Send ${depositPct} deposit invoice — confirm payment before project start`));
    }
    paymentSetup.push(item(`Set up Net ${s3.paymentTerms === 'net-14' ? '14' : '30'} day invoice terms in invoicing system`));
  }
  paymentSetup.push(item('Confirm preferred payment method (bank transfer, credit card, etc.)'));
  paymentSetup.push(item('Communicate late payment fee policy in writing'));
  paymentSetup.push(item('Add client to invoicing system with correct billing contact'));
  if (isRetainer) {
    paymentSetup.push(item('Set up recurring monthly invoice for retainer fee'));
    paymentSetup.push(item('Confirm invoice send date and payment-due date each month'));
  }

  /* ── Project Kickoff ── */
  const kickoff: ChecklistItem[] = [
    item('Walk through the full project brief and confirm shared understanding'),
    item('Agree on key project milestones and target delivery dates'),
    item('Confirm your revision policy — number of rounds and process'),
    item('Explain what is out of scope and how change requests will be handled'),
  ];
  if (s2.meetingTool !== 'none') {
    kickoff.push(item('Hold kickoff meeting — take notes and send written summary to client'));
  } else {
    kickoff.push(item('Send written project brief summary and ask client to confirm in writing'));
  }
  kickoff.push(item('Share project management tool / task board access if applicable'));
  if (isWebDev) {
    kickoff.push(item('Confirm tech stack, CMS platform, and any third-party integrations required'));
    kickoff.push(item('Agree on SEO, performance, and accessibility requirements'));
  }
  if (isDesign) {
    kickoff.push(item('Share mood board or design direction for client approval before starting'));
    kickoff.push(item('Confirm file delivery formats (AI, SVG, PNG, PDF) and resolution requirements'));
  }
  if (isMarketing) {
    kickoff.push(item('Confirm campaign objectives, KPIs, and reporting metrics'));
    kickoff.push(item('Agree on target audience definitions and messaging hierarchy'));
  }
  if (isWriting) {
    kickoff.push(item('Confirm word counts, format, and publishing platform requirements'));
    kickoff.push(item('Collect tone of voice guide, audience personas, and any existing content'));
  }
  if (isPhoto) {
    kickoff.push(item('Review and finalise shot list with client before shoot day'));
    kickoff.push(item('Confirm delivery format — edited JPEGs, RAW files, video specs'));
  }

  /* ── Deliverables & Timeline ── */
  const deliverables: ChecklistItem[] = [
    item('Document all project deliverables in a shared project plan or SOW'),
    item('Confirm project timeline with buffer for client review rounds'),
    item('Set client expectations for feedback turnaround times (ideally 48-72 hours)'),
    item('Identify any dependencies — content, assets, or approvals needed from client'),
    item('Establish final delivery and handover process'),
  ];
  if (isRetainer) {
    deliverables.push(item('Create monthly deliverables tracker for retainer scope items'));
    deliverables.push(item('Set recurring review date to assess retainer value and scope each month'));
  }
  if (isMilestone) {
    deliverables.push(item('Document milestone acceptance criteria — what triggers each payment'));
    deliverables.push(item('Confirm milestone sign-off process and who has authority to approve'));
  }
  if (isWebDev) {
    deliverables.push(item('Agree on staging environment URL and testing protocol'));
    deliverables.push(item('Confirm go-live process, DNS transfer, and post-launch support terms'));
  }
  if (isDesign) {
    deliverables.push(item('Confirm number of design concepts and revision rounds per concept'));
  }
  if (isMarketing || isWriting) {
    deliverables.push(item('Agree on content calendar or publishing schedule'));
  }
  if (isPhoto) {
    deliverables.push(item('Confirm photo delivery timeline — typically 7-14 business days post-shoot'));
    deliverables.push(item('Agree on number of edited images / video duration included'));
  }

  /* ── Legal & Admin ── */
  const legal: ChecklistItem[] = [];
  if (s3.requireContract) {
    legal.push(item('Draft and send service agreement / freelance contract to client'));
    legal.push(item('Confirm client has read and signed the service agreement'));
    legal.push(item('Store signed contract copy in secure document system'));
  }
  if (s3.includeNda) {
    legal.push(item('Draft and send NDA covering project confidentiality requirements'));
    legal.push(item('Confirm NDA is signed before sharing any sensitive materials'));
  }
  legal.push(item('Confirm intellectual property ownership terms are documented and agreed'));
  legal.push(item('Communicate cancellation and kill fee policy in contract or in writing'));
  if (isWebDev || isDesign) {
    legal.push(item('Clarify licence vs. full ownership transfer for any third-party assets used'));
  }
  if (isMarketing || isWriting) {
    legal.push(item('Agree on content ownership and usage rights post-delivery'));
  }
  if (isConsulting) {
    legal.push(item('Confirm liability limitations and professional indemnity coverage is in place'));
  }
  legal.push(item('Save all onboarding correspondence and agreements to client folder'));
  legal.push(item('Set a project review reminder for 2 weeks post-kickoff'));

  return [
    { id: 'pre-start', title: 'Pre-Start', emoji: '🗂', items: preStart },
    { id: 'comm', title: 'Communication Setup', emoji: '💬', items: commSetup },
    { id: 'payment', title: 'Payment Setup', emoji: '💳', items: paymentSetup },
    { id: 'kickoff', title: 'Project Kickoff', emoji: '🚀', items: kickoff },
    { id: 'deliverables', title: 'Deliverables & Timeline', emoji: '📅', items: deliverables },
    { id: 'legal', title: 'Legal & Admin', emoji: '📋', items: legal },
  ];
}

/* ─────────────────────── Step Indicator ─────────────────────── */

function StepIndicator({ current, total }: { current: number; total: number }) {
  const stepLabels = ['Project Details', 'Communication', 'Payment & Legal', 'Your Checklist'];
  return (
    <div className="flex items-center justify-between mb-8 overflow-x-auto pb-1">
      {stepLabels.map((label, i) => {
        const step = i + 1;
        const isActive = step === current;
        const isComplete = step < current;
        return (
          <div key={step} className="flex items-center flex-1 last:flex-none">
            <div className="flex flex-col items-center min-w-[4rem]">
              <div
                className={`w-9 h-9 rounded-full border-2 flex items-center justify-center text-sm font-bold transition-all ${
                  isComplete
                    ? 'bg-emerald-500 border-emerald-500 text-white'
                    : isActive
                    ? 'bg-emerald-500/20 border-emerald-400 text-emerald-400'
                    : 'bg-white/5 border-white/15 text-slate-500'
                }`}
              >
                {isComplete ? (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  step
                )}
              </div>
              <p
                className={`text-xs mt-1.5 text-center leading-tight ${
                  isActive ? 'text-emerald-400 font-medium' : isComplete ? 'text-emerald-400/60' : 'text-slate-600'
                }`}
              >
                {label}
              </p>
            </div>
            {i < stepLabels.length - 1 && (
              <div
                className={`flex-1 h-0.5 mx-2 mt-[-1.25rem] transition-all ${
                  step < current ? 'bg-emerald-500' : 'bg-white/10'
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

/* ─────────────────────── Shared Input Styles ─────────────────── */

const inputCls =
  'w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all text-sm';
const labelCls = 'block text-xs font-medium text-slate-400 mb-1.5';

function OptionButton({
  selected,
  onClick,
  children,
}: {
  selected: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`text-sm py-2.5 px-3 rounded-xl border transition-all text-center ${
        selected
          ? 'bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border-emerald-500/40 text-white font-medium'
          : 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
      }`}
    >
      {children}
    </button>
  );
}

function Toggle({
  checked,
  onChange,
  label,
  sub,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  label: string;
  sub?: string;
}) {
  return (
    <label className="flex items-start gap-4 cursor-pointer p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/8 transition-all">
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={`relative w-11 h-6 rounded-full flex-shrink-0 transition-colors ${
          checked ? 'bg-emerald-500' : 'bg-white/15'
        }`}
      >
        <span
          className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform ${
            checked ? 'translate-x-5' : 'translate-x-0'
          }`}
        />
      </button>
      <div>
        <p className="text-sm text-white font-medium">{label}</p>
        {sub && <p className="text-xs text-slate-500 mt-0.5">{sub}</p>}
      </div>
    </label>
  );
}

/* ─────────────────────────── Main Component ─────────────────────────── */

export default function ClientOnboardingChecklist() {
  const [step, setStep] = useState(1);

  /* Step 1 */
  const [s1, setS1] = useState<Step1>({
    serviceType: 'web-dev',
    projectCategory: 'new-build',
    projectValue: '',
    projectDuration: '',
  });

  /* Step 2 */
  const [s2, setS2] = useState<Step2>({
    commChannel: 'email',
    updateFreq: 'weekly',
    timezone: '',
    meetingTool: 'google-meet',
  });

  /* Step 3 */
  const [s3, setS3] = useState<Step3>({
    paymentTerms: '50-50',
    depositPercent: '50',
    requireContract: true,
    includeNda: false,
  });

  /* Step 4 */
  const [checklist, setChecklist] = useState<ChecklistCategory[]>([]);
  const [copied, setCopied] = useState(false);

  /* Generate */
  const handleGenerate = () => {
    setChecklist(buildChecklist(s1, s2, s3));
    setStep(4);
  };

  /* Toggle item */
  const toggleItem = (catId: string, itemId: string) => {
    setChecklist((prev) =>
      prev.map((cat) =>
        cat.id === catId
          ? {
              ...cat,
              items: cat.items.map((it) =>
                it.id === itemId ? { ...it, checked: !it.checked } : it
              ),
            }
          : cat
      )
    );
  };

  /* Stats */
  const allItems = checklist.flatMap((c) => c.items);
  const checked = allItems.filter((i) => i.checked).length;
  const total = allItems.length;
  const pct = total > 0 ? Math.round((checked / total) * 100) : 0;

  /* Copy */
  const handleCopy = useCallback(() => {
    const lines: string[] = [];
    const div = '══════════════════════════════════════════════════════════';
    const sub = '──────────────────────────────────────────────────────────';
    lines.push(div);
    lines.push('CLIENT ONBOARDING CHECKLIST');
    lines.push(div);
    lines.push('');
    lines.push(`Service Type  : ${SERVICE_LABELS[s1.serviceType]}`);
    lines.push(`Project Type  : ${CATEGORY_LABELS[s1.projectCategory]}`);
    if (s1.projectValue) lines.push(`Project Value : AUD $${s1.projectValue}`);
    if (s1.projectDuration) lines.push(`Duration      : ${s1.projectDuration}`);
    lines.push(`Payment Terms : ${PAYMENT_LABELS[s3.paymentTerms]}`);
    lines.push(`Communication : ${COMM_LABELS[s2.commChannel]} — ${FREQ_LABELS[s2.updateFreq]}`);
    lines.push('');
    checklist.forEach((cat) => {
      lines.push(cat.title.toUpperCase());
      lines.push(sub);
      cat.items.forEach((it) => lines.push(`  [${it.checked ? 'x' : ' '}] ${it.label}`));
      lines.push('');
    });
    lines.push(`Progress: ${checked}/${total} items complete (${pct}%)`);
    lines.push('');
    lines.push(div);
    lines.push('Generated at invoiceflow.au/tools/client-onboarding-checklist');
    navigator.clipboard.writeText(lines.join('\n')).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  }, [checklist, checked, total, pct, s1, s2, s3]);

  /* Print */
  const handlePrint = () => window.print();

  /* ── STEP 1 ── */
  if (step === 1) {
    return (
      <div className="glass rounded-2xl p-6 sm:p-8">
        <StepIndicator current={1} total={4} />
        <h3 className="text-xl font-bold text-white heading-font mb-6">Project Details</h3>
        <div className="space-y-6">
          {/* Service Type */}
          <div>
            <label className={labelCls}>Service Type</label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {(Object.keys(SERVICE_LABELS) as ServiceType[]).map((t) => (
                <OptionButton
                  key={t}
                  selected={s1.serviceType === t}
                  onClick={() => setS1((p) => ({ ...p, serviceType: t }))}
                >
                  {SERVICE_LABELS[t]}
                </OptionButton>
              ))}
            </div>
          </div>

          {/* Project Category */}
          <div>
            <label className={labelCls}>Project Type</label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {(Object.keys(CATEGORY_LABELS) as ProjectCategory[]).map((c) => (
                <OptionButton
                  key={c}
                  selected={s1.projectCategory === c}
                  onClick={() => setS1((p) => ({ ...p, projectCategory: c }))}
                >
                  {CATEGORY_LABELS[c]}
                </OptionButton>
              ))}
            </div>
          </div>

          {/* Value + Duration */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className={labelCls}>Estimated Project Value (AUD)</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm">$</span>
                <input
                  type="number"
                  value={s1.projectValue}
                  onChange={(e) => setS1((p) => ({ ...p, projectValue: e.target.value }))}
                  className={`${inputCls} pl-8`}
                  placeholder="e.g. 5000"
                  min="0"
                />
              </div>
            </div>
            <div>
              <label className={labelCls}>Estimated Duration</label>
              <input
                type="text"
                value={s1.projectDuration}
                onChange={(e) => setS1((p) => ({ ...p, projectDuration: e.target.value }))}
                className={inputCls}
                placeholder="e.g. 4 weeks, 3 months"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-8">
          <button
            onClick={() => setStep(2)}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-medium hover:opacity-90 transition-all"
          >
            Next: Communication Setup →
          </button>
        </div>
      </div>
    );
  }

  /* ── STEP 2 ── */
  if (step === 2) {
    return (
      <div className="glass rounded-2xl p-6 sm:p-8">
        <StepIndicator current={2} total={4} />
        <h3 className="text-xl font-bold text-white heading-font mb-6">Communication Setup</h3>
        <div className="space-y-6">
          {/* Channel */}
          <div>
            <label className={labelCls}>Preferred Communication Channel</label>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
              {(Object.keys(COMM_LABELS) as CommChannel[]).map((c) => (
                <OptionButton
                  key={c}
                  selected={s2.commChannel === c}
                  onClick={() => setS2((p) => ({ ...p, commChannel: c }))}
                >
                  {COMM_LABELS[c]}
                </OptionButton>
              ))}
            </div>
          </div>

          {/* Update Frequency */}
          <div>
            <label className={labelCls}>Update Frequency</label>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
              {(Object.keys(FREQ_LABELS) as UpdateFreq[]).map((f) => (
                <OptionButton
                  key={f}
                  selected={s2.updateFreq === f}
                  onClick={() => setS2((p) => ({ ...p, updateFreq: f }))}
                >
                  {FREQ_LABELS[f]}
                </OptionButton>
              ))}
            </div>
          </div>

          {/* Timezone + Meeting Tool */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className={labelCls}>Client Timezone (optional)</label>
              <input
                type="text"
                value={s2.timezone}
                onChange={(e) => setS2((p) => ({ ...p, timezone: e.target.value }))}
                className={inputCls}
                placeholder="e.g. AEDT, GMT+8, EST"
              />
              <p className="text-xs text-slate-500 mt-1">Leave blank if same timezone</p>
            </div>
            <div>
              <label className={labelCls}>Meeting Tool Preference</label>
              <select
                value={s2.meetingTool}
                onChange={(e) => setS2((p) => ({ ...p, meetingTool: e.target.value as MeetingTool }))}
                className={inputCls}
              >
                {(Object.keys(MEETING_LABELS) as MeetingTool[]).map((m) => (
                  <option key={m} value={m} className="bg-slate-900">
                    {MEETING_LABELS[m]}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mt-8">
          <button
            onClick={() => setStep(1)}
            className="px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 text-sm transition-all"
          >
            ← Back
          </button>
          <button
            onClick={() => setStep(3)}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-medium hover:opacity-90 transition-all"
          >
            Next: Payment & Legal →
          </button>
        </div>
      </div>
    );
  }

  /* ── STEP 3 ── */
  if (step === 3) {
    const showDeposit =
      s3.paymentTerms !== 'upfront' && s3.paymentTerms !== 'net-14' && s3.paymentTerms !== 'net-30';
    return (
      <div className="glass rounded-2xl p-6 sm:p-8">
        <StepIndicator current={3} total={4} />
        <h3 className="text-xl font-bold text-white heading-font mb-6">Payment & Legal</h3>
        <div className="space-y-6">
          {/* Payment Terms */}
          <div>
            <label className={labelCls}>Payment Terms</label>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
              {(Object.keys(PAYMENT_LABELS) as PaymentTerms[]).map((t) => (
                <OptionButton
                  key={t}
                  selected={s3.paymentTerms === t}
                  onClick={() => setS3((p) => ({ ...p, paymentTerms: t }))}
                >
                  {PAYMENT_LABELS[t]}
                </OptionButton>
              ))}
            </div>
          </div>

          {/* Deposit % */}
          {showDeposit && (
            <div>
              <label className={labelCls}>Deposit Percentage</label>
              <div className="grid grid-cols-4 gap-2">
                {['25', '33', '50', '100'].map((pct) => (
                  <OptionButton
                    key={pct}
                    selected={s3.depositPercent === pct}
                    onClick={() => setS3((p) => ({ ...p, depositPercent: pct }))}
                  >
                    {pct}%
                  </OptionButton>
                ))}
              </div>
              <p className="text-xs text-slate-500 mt-2">
                Industry standard for Australian freelancers is 25–50% upfront. Clients who resist a deposit are a red flag.
              </p>
            </div>
          )}

          {/* Contract + NDA toggles */}
          <div className="space-y-3">
            <Toggle
              checked={s3.requireContract}
              onChange={(v) => setS3((p) => ({ ...p, requireContract: v }))}
              label="Require a signed service agreement / contract"
              sub="Strongly recommended. Covers scope, IP, payment terms, and cancellation."
            />
            <Toggle
              checked={s3.includeNda}
              onChange={(v) => setS3((p) => ({ ...p, includeNda: v }))}
              label="Include an NDA (Non-Disclosure Agreement)"
              sub="Use this when the project involves access to sensitive business information."
            />
          </div>
        </div>

        <div className="flex items-center justify-between mt-8">
          <button
            onClick={() => setStep(2)}
            className="px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 text-sm transition-all"
          >
            ← Back
          </button>
          <button
            onClick={handleGenerate}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold hover:opacity-90 transition-all"
          >
            Generate My Checklist →
          </button>
        </div>
      </div>
    );
  }

  /* ── STEP 4: Generated Checklist ── */
  return (
    <div className="space-y-6">
      {/* Header bar */}
      <div className="glass rounded-2xl p-5 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <p className="text-xs text-emerald-400 uppercase tracking-widest mb-1">Your Checklist</p>
            <h3 className="text-lg font-bold text-white heading-font">
              {SERVICE_LABELS[s1.serviceType]} — {CATEGORY_LABELS[s1.projectCategory]}
            </h3>
            <p className="text-sm text-slate-400 mt-0.5">
              {COMM_LABELS[s2.commChannel]} · {PAYMENT_LABELS[s3.paymentTerms]}
              {s1.projectValue && ` · AUD $${parseInt(s1.projectValue).toLocaleString()}`}
            </p>
          </div>
          <button
            onClick={() => setStep(1)}
            className="text-sm text-slate-500 hover:text-white transition-colors self-start sm:self-auto whitespace-nowrap"
          >
            ← Start Over
          </button>
        </div>

        {/* Progress bar */}
        <div className="mt-5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-slate-400">{checked} of {total} items complete</span>
            <span className="text-sm font-bold text-emerald-400">{pct}%</span>
          </div>
          <div className="w-full bg-white/5 rounded-full h-2.5 overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 transition-all duration-500"
              style={{ width: `${Math.max(pct, pct > 0 ? 2 : 0)}%` }}
            />
          </div>
        </div>
      </div>

      {/* Checklist Categories */}
      {checklist.map((cat) => {
        const catChecked = cat.items.filter((i) => i.checked).length;
        const catTotal = cat.items.length;
        return (
          <div key={cat.id} className="glass rounded-2xl overflow-hidden">
            {/* Category header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/8">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/20 flex items-center justify-center text-lg">
                  {cat.emoji}
                </div>
                <h4 className="font-semibold text-white text-sm">{cat.title}</h4>
              </div>
              <span className={`text-xs font-medium ${catChecked === catTotal ? 'text-emerald-400' : 'text-slate-500'}`}>
                {catChecked}/{catTotal}
              </span>
            </div>

            {/* Items */}
            <div className="p-4 space-y-2">
              {cat.items.map((it) => (
                <label
                  key={it.id}
                  className="flex items-start gap-3 p-3 bg-white/5 rounded-xl cursor-pointer hover:bg-white/8 transition-all group"
                >
                  <div className="relative mt-0.5 flex-shrink-0">
                    <input
                      type="checkbox"
                      checked={it.checked}
                      onChange={() => toggleItem(cat.id, it.id)}
                      className="sr-only"
                    />
                    <div
                      className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all ${
                        it.checked
                          ? 'bg-emerald-500 border-emerald-500'
                          : 'border-white/20 group-hover:border-emerald-500/50'
                      }`}
                    >
                      {it.checked && (
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                  </div>
                  <span
                    className={`text-sm leading-relaxed transition-all ${
                      it.checked ? 'text-slate-500 line-through' : 'text-slate-300'
                    }`}
                  >
                    {it.label}
                  </span>
                </label>
              ))}
            </div>
          </div>
        );
      })}

      {/* Action Buttons */}
      <div className="glass rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-400">
          {pct === 100
            ? 'All done — your client is fully onboarded.'
            : `${total - checked} item${total - checked !== 1 ? 's' : ''} remaining to complete onboarding.`}
        </p>
        <div className="flex items-center gap-3 flex-wrap justify-center">
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-white/10 transition-all"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
            </svg>
            Print Checklist
          </button>
          <button
            onClick={handleCopy}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-sm font-semibold hover:opacity-90 transition-all"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            {copied ? 'Copied!' : 'Copy to Clipboard'}
          </button>
        </div>
      </div>

      {/* Related Tools */}
      <div className="glass rounded-2xl p-6">
        <h3 className="text-base font-bold text-white heading-font mb-4">Related Free Tools</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {[
            {
              href: '/tools/scope-of-work-generator',
              title: 'Scope of Work Generator',
              sub: 'Build a detailed SOW document',
            },
            {
              href: '/tools/contract-clause-generator',
              title: 'Contract Clause Generator',
              sub: 'Build professional contract clauses',
            },
            {
              href: '/tools/proposal-generator',
              title: 'Proposal Generator',
              sub: 'Create winning client proposals',
            },
            {
              href: '/tools/payment-terms-calculator',
              title: 'Payment Terms Calculator',
              sub: 'Optimise your payment structure',
            },
          ].map((tool) => (
            <a
              key={tool.href}
              href={tool.href}
              className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-emerald-500/30 rounded-xl p-4 transition-all group"
            >
              <p className="text-white font-medium text-sm group-hover:text-emerald-400 transition-colors">
                {tool.title}
              </p>
              <p className="text-xs text-slate-500 mt-1">{tool.sub}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
