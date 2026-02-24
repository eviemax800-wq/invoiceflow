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

/* ─── Types ─── */

type ProjectType =
  | 'Website'
  | 'Web App'
  | 'Mobile App'
  | 'Branding/Design'
  | 'Marketing Campaign'
  | 'Consulting'
  | 'Content Creation'
  | 'Custom';

type PaymentStructure = '50/50' | '3-milestone' | '4-milestone' | 'custom';

interface Deliverable {
  id: string;
  description: string;
  estimatedHours: string;
  dueWeek: string;
}

interface Milestone {
  id: string;
  name: string;
  amount: string;
  whenDue: string;
}

/* ─── Helpers ─── */

let _nextId = 1;
function genId(prefix = 'item') {
  return `${prefix}-${_nextId++}`;
}

const PROJECT_TYPES: ProjectType[] = [
  'Website',
  'Web App',
  'Mobile App',
  'Branding/Design',
  'Marketing Campaign',
  'Consulting',
  'Content Creation',
  'Custom',
];

const DELIVERABLE_PRESETS: Record<ProjectType, { description: string; hours: string; week: string }[]> = {
  Website: [
    { description: 'Wireframes & site map', hours: '6', week: '1' },
    { description: 'Homepage design mockup', hours: '8', week: '2' },
    { description: 'Inner page designs (up to 4 pages)', hours: '12', week: '3' },
    { description: 'Frontend development', hours: '20', week: '4' },
    { description: 'Content integration & testing', hours: '6', week: '5' },
    { description: 'Launch & handover', hours: '4', week: '6' },
  ],
  'Web App': [
    { description: 'Requirements & user flow documentation', hours: '8', week: '1' },
    { description: 'UI/UX wireframes & prototypes', hours: '12', week: '2' },
    { description: 'Frontend development', hours: '24', week: '4' },
    { description: 'Backend API & database', hours: '20', week: '5' },
    { description: 'Integration testing & QA', hours: '10', week: '7' },
    { description: 'Deployment & documentation', hours: '6', week: '8' },
  ],
  'Mobile App': [
    { description: 'App architecture & wireframes', hours: '10', week: '1' },
    { description: 'UI design (all screens)', hours: '16', week: '3' },
    { description: 'Core feature development', hours: '30', week: '5' },
    { description: 'API integration', hours: '12', week: '6' },
    { description: 'Testing & bug fixes', hours: '10', week: '7' },
    { description: 'App store submission & launch', hours: '6', week: '8' },
  ],
  'Branding/Design': [
    { description: 'Brand discovery & mood board', hours: '6', week: '1' },
    { description: 'Logo concepts (3 options)', hours: '10', week: '2' },
    { description: 'Selected logo refinement', hours: '6', week: '3' },
    { description: 'Brand guidelines document', hours: '8', week: '4' },
    { description: 'Collateral design (business cards, letterhead)', hours: '6', week: '5' },
    { description: 'Final file delivery (all formats)', hours: '2', week: '5' },
  ],
  'Marketing Campaign': [
    { description: 'Campaign strategy & brief', hours: '6', week: '1' },
    { description: 'Creative concepts & copy', hours: '10', week: '2' },
    { description: 'Design assets (social, email, ads)', hours: '12', week: '3' },
    { description: 'Campaign setup & targeting', hours: '6', week: '4' },
    { description: 'Launch & monitoring', hours: '4', week: '4' },
    { description: 'Performance report & recommendations', hours: '4', week: '6' },
  ],
  Consulting: [
    { description: 'Discovery workshop / audit', hours: '4', week: '1' },
    { description: 'Research & analysis', hours: '8', week: '2' },
    { description: 'Strategy document / recommendations', hours: '10', week: '3' },
    { description: 'Presentation / walkthrough session', hours: '3', week: '4' },
    { description: 'Implementation support (2 sessions)', hours: '4', week: '5' },
  ],
  'Content Creation': [
    { description: 'Content strategy & topic plan', hours: '4', week: '1' },
    { description: 'Content research & outlines', hours: '6', week: '2' },
    { description: 'Draft content (batch 1)', hours: '10', week: '3' },
    { description: 'Draft content (batch 2)', hours: '10', week: '4' },
    { description: 'Revisions & final edits', hours: '6', week: '5' },
    { description: 'Final delivery & publishing', hours: '2', week: '5' },
  ],
  Custom: [],
};

const INCLUSION_PRESETS: Record<ProjectType, string[]> = {
  Website: [
    'Up to 5 custom-designed pages',
    'Mobile-responsive design',
    'Contact form with email notifications',
    'Basic on-page SEO setup',
    'CMS setup for client content editing',
    'Cross-browser testing (Chrome, Safari, Firefox)',
    'Google Analytics integration',
  ],
  'Web App': [
    'Custom UI/UX design for all screens',
    'Frontend and backend development',
    'User authentication and account management',
    'Database design and setup',
    'API development and documentation',
    'Deployment to production hosting',
    'Post-launch bug fixes (14 days)',
  ],
  'Mobile App': [
    'Native or cross-platform app development',
    'UI design for all screens and states',
    'Push notification setup',
    'API integration with backend services',
    'App store submission (iOS and/or Android)',
    'Testing on 3 device sizes',
    'Post-launch bug fixes (14 days)',
  ],
  'Branding/Design': [
    'Logo design (3 initial concepts)',
    'Brand colour palette and typography',
    'Brand guidelines document (PDF)',
    'Business card and letterhead design',
    'Social media profile templates',
    'All source files (AI, PSD, SVG, PNG)',
  ],
  'Marketing Campaign': [
    'Campaign strategy document',
    'Creative assets for up to 3 platforms',
    'Ad copy and headlines',
    'Campaign setup and targeting',
    'Weekly performance monitoring',
    'End-of-campaign performance report',
  ],
  Consulting: [
    'Discovery workshop or audit session',
    'Written strategy and recommendations',
    'Presentation walkthrough',
    'Up to 2 implementation support sessions',
    'Email support during engagement period',
  ],
  'Content Creation': [
    'Content strategy and topic plan',
    'Up to 10 pieces of written content',
    'SEO keyword research per piece',
    'One round of revisions per piece',
    'Final formatted files (Word/Google Docs)',
  ],
  Custom: [
    'Project deliverables as described above',
    'Communication via email and scheduled calls',
    'Project files delivered in standard formats',
  ],
};

const EXCLUSION_PRESETS: Record<ProjectType, string[]> = {
  Website: [
    'Content writing or copywriting',
    'Stock photography or illustration',
    'Ongoing website maintenance or hosting',
    'E-commerce functionality',
    'Custom animations or video production',
    'Domain registration and DNS management',
  ],
  'Web App': [
    'Content creation or data entry',
    'Third-party API subscription costs',
    'Ongoing hosting or server costs',
    'Marketing or SEO services',
    'Native mobile app development',
    'Ongoing feature development beyond scope',
  ],
  'Mobile App': [
    'Backend/server development (unless specified)',
    'App store developer account fees',
    'Ongoing maintenance or updates',
    'Content creation or data entry',
    'Marketing or app store optimisation',
    'Wearable device compatibility',
  ],
  'Branding/Design': [
    'Website design or development',
    'Ongoing design work beyond deliverables',
    'Print production or manufacturing',
    'Photography or video production',
    'Trademark registration',
    'Social media management',
  ],
  'Marketing Campaign': [
    'Ad spend or media buying budget',
    'Ongoing campaign management beyond scope',
    'Website or landing page development',
    'Photography or video production',
    'Influencer partnerships or outreach',
    'CRM setup or email list management',
  ],
  Consulting: [
    'Implementation of recommendations',
    'Ongoing advisory beyond agreed sessions',
    'Software or tool purchases',
    'Staff training beyond walkthrough',
    'Legal or financial advice',
  ],
  'Content Creation': [
    'Graphic design or illustration',
    'Video or audio production',
    'Social media management or posting',
    'Website updates or publishing',
    'Paid promotion or advertising',
    'Stock photography',
  ],
  Custom: [
    'Work outside the deliverables listed above',
    'Third-party software or subscription costs',
    'Ongoing maintenance or support beyond scope',
  ],
};

/* ─── Component ─── */

export default function ScopeOfWorkGenerator() {
  /* ── Project Details ── */
  const [projectName, setProjectName] = useState('');
  const [clientName, setClientName] = useState('');
  const [projectType, setProjectType] = useState<ProjectType>('Website');
  const [startDate, setStartDate] = useState('');
  const [durationWeeks, setDurationWeeks] = useState('6');

  /* ── Deliverables ── */
  const [deliverables, setDeliverables] = useState<Deliverable[]>([
    { id: genId('d'), description: '', estimatedHours: '', dueWeek: '1' },
  ]);

  /* ── Payment ── */
  const [hourlyRate, setHourlyRate] = useState('100');
  const [totalFeeOverride, setTotalFeeOverride] = useState('');
  const [paymentStructure, setPaymentStructure] = useState<PaymentStructure>('50/50');
  const [milestones, setMilestones] = useState<Milestone[]>([]);

  /* ── Inclusions / Exclusions ── */
  const [inclusions, setInclusions] = useState<string[]>([]);
  const [exclusions, setExclusions] = useState<string[]>([]);

  /* ── Revision Policy ── */
  const [revisionRounds, setRevisionRounds] = useState('2');
  const [additionalRevisionRate, setAdditionalRevisionRate] = useState('75');
  const [revisionTurnaround, setRevisionTurnaround] = useState('3');

  /* ── UI state ── */
  const [showPreview, setShowPreview] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activeSection, setActiveSection] = useState<number>(0);

  /* ── Computed Values ── */
  const totalHours = useMemo(() => {
    return deliverables.reduce((sum, d) => sum + (parseFloat(d.estimatedHours) || 0), 0);
  }, [deliverables]);

  const calculatedFee = useMemo(() => {
    return totalHours * (parseFloat(hourlyRate) || 0);
  }, [totalHours, hourlyRate]);

  const totalFee = useMemo(() => {
    const override = parseFloat(totalFeeOverride);
    return override > 0 ? override : calculatedFee;
  }, [totalFeeOverride, calculatedFee]);

  const effectiveRate = useMemo(() => {
    return totalHours > 0 ? totalFee / totalHours : 0;
  }, [totalFee, totalHours]);

  const endDate = useMemo(() => {
    if (!startDate) return '';
    const start = new Date(startDate);
    const weeks = parseInt(durationWeeks) || 0;
    start.setDate(start.getDate() + weeks * 7);
    return start.toISOString().split('T')[0];
  }, [startDate, durationWeeks]);

  /* ── Auto-generate milestones from payment structure ── */
  const computedMilestones = useMemo(() => {
    if (paymentStructure === 'custom') return milestones;

    const splits: { name: string; pct: number; when: string }[] = [];
    if (paymentStructure === '50/50') {
      splits.push({ name: 'Deposit (project start)', pct: 50, when: 'On signing' });
      splits.push({ name: 'Final payment', pct: 50, when: 'On delivery' });
    } else if (paymentStructure === '3-milestone') {
      splits.push({ name: 'Deposit (project start)', pct: 33, when: 'On signing' });
      splits.push({ name: 'Mid-project milestone', pct: 33, when: 'Mid-project' });
      splits.push({ name: 'Final payment', pct: 34, when: 'On delivery' });
    } else if (paymentStructure === '4-milestone') {
      splits.push({ name: 'Deposit (project start)', pct: 25, when: 'On signing' });
      splits.push({ name: 'Phase 1 completion', pct: 25, when: 'Week 2' });
      splits.push({ name: 'Phase 2 completion', pct: 25, when: 'Week 4' });
      splits.push({ name: 'Final payment', pct: 25, when: 'On delivery' });
    }

    return splits.map((s) => ({
      id: s.name,
      name: s.name,
      amount: String(Math.round(totalFee * (s.pct / 100))),
      whenDue: s.when,
    }));
  }, [paymentStructure, milestones, totalFee]);

  /* ── Deliverable Actions ── */
  const addDeliverable = () => {
    setDeliverables([
      ...deliverables,
      { id: genId('d'), description: '', estimatedHours: '', dueWeek: String(parseInt(durationWeeks) || 1) },
    ]);
  };

  const removeDeliverable = (id: string) => {
    if (deliverables.length > 1) {
      setDeliverables(deliverables.filter((d) => d.id !== id));
    }
  };

  const updateDeliverable = (id: string, field: keyof Deliverable, value: string) => {
    setDeliverables(deliverables.map((d) => (d.id === id ? { ...d, [field]: value } : d)));
  };

  /* ── Load Presets ── */
  const loadDeliverablePresets = useCallback(() => {
    const presets = DELIVERABLE_PRESETS[projectType];
    if (presets.length === 0) return;
    setDeliverables(
      presets.map((p) => ({
        id: genId('d'),
        description: p.description,
        estimatedHours: p.hours,
        dueWeek: p.week,
      }))
    );
  }, [projectType]);

  const loadInclusionPresets = useCallback(() => {
    setInclusions(INCLUSION_PRESETS[projectType] || INCLUSION_PRESETS.Custom);
  }, [projectType]);

  const loadExclusionPresets = useCallback(() => {
    setExclusions(EXCLUSION_PRESETS[projectType] || EXCLUSION_PRESETS.Custom);
  }, [projectType]);

  /* ── Inclusions / Exclusions Actions ── */
  const addInclusion = () => setInclusions([...inclusions, '']);
  const removeInclusion = (idx: number) => setInclusions(inclusions.filter((_, i) => i !== idx));
  const updateInclusion = (idx: number, value: string) =>
    setInclusions(inclusions.map((item, i) => (i === idx ? value : item)));

  const addExclusion = () => setExclusions([...exclusions, '']);
  const removeExclusion = (idx: number) => setExclusions(exclusions.filter((_, i) => i !== idx));
  const updateExclusion = (idx: number, value: string) =>
    setExclusions(exclusions.map((item, i) => (i === idx ? value : item)));

  /* ── Custom Milestone Actions ── */
  const addMilestone = () => {
    setMilestones([...milestones, { id: genId('m'), name: '', amount: '', whenDue: '' }]);
  };
  const removeMilestone = (id: string) => {
    setMilestones(milestones.filter((m) => m.id !== id));
  };
  const updateMilestone = (id: string, field: keyof Milestone, value: string) => {
    setMilestones(milestones.map((m) => (m.id === id ? { ...m, [field]: value } : m)));
  };

  /* ── Format date for display ── */
  const formatDate = (dateStr: string) => {
    if (!dateStr) return 'TBD';
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' });
  };

  /* ── Copy to Clipboard ── */
  const handleCopy = () => {
    const lines: string[] = [];
    const divider = '════════════════════════════════════════════════════════';
    const sectionDivider = '────────────────────────────────────────────────────────';

    lines.push(divider);
    lines.push('SCOPE OF WORK');
    lines.push(divider);
    lines.push('');

    lines.push('PROJECT OVERVIEW');
    lines.push(sectionDivider);
    lines.push(`Project:      ${projectName || 'Untitled Project'}`);
    lines.push(`Client:       ${clientName || 'Client Name'}`);
    lines.push(`Project Type: ${projectType}`);
    lines.push(`Start Date:   ${formatDate(startDate)}`);
    lines.push(`End Date:     ${endDate ? formatDate(endDate) : 'TBD'}`);
    lines.push(`Duration:     ${durationWeeks} weeks`);
    lines.push(`Total Value:  ${formatCurrency(totalFee)}`);
    lines.push('');

    lines.push('SCOPE & DELIVERABLES');
    lines.push(sectionDivider);
    deliverables.forEach((d, i) => {
      if (d.description) {
        lines.push(`${i + 1}. ${d.description}`);
        lines.push(`   Estimated Hours: ${d.estimatedHours || '—'}  |  Due: Week ${d.dueWeek}`);
      }
    });
    lines.push('');

    lines.push('TIMELINE');
    lines.push(sectionDivider);
    lines.push(`Project Duration: ${durationWeeks} weeks`);
    lines.push(`Start: ${formatDate(startDate)}  →  End: ${endDate ? formatDate(endDate) : 'TBD'}`);
    lines.push('');

    lines.push('PAYMENT SCHEDULE');
    lines.push(sectionDivider);
    lines.push(`Total Project Fee: ${formatCurrency(totalFee)}`);
    lines.push(`Payment Structure: ${paymentStructure === 'custom' ? 'Custom' : paymentStructure}`);
    lines.push('');
    computedMilestones.forEach((m, i) => {
      lines.push(`  ${i + 1}. ${m.name} — ${formatCurrency(parseFloat(m.amount) || 0)} (${m.whenDue})`);
    });
    lines.push('');

    if (inclusions.filter(Boolean).length > 0) {
      lines.push("WHAT'S INCLUDED");
      lines.push(sectionDivider);
      inclusions.filter(Boolean).forEach((item) => {
        lines.push(`  ✓ ${item}`);
      });
      lines.push('');
    }

    if (exclusions.filter(Boolean).length > 0) {
      lines.push("WHAT'S NOT INCLUDED");
      lines.push(sectionDivider);
      exclusions.filter(Boolean).forEach((item) => {
        lines.push(`  ✗ ${item}`);
      });
      lines.push('');
    }

    lines.push('REVISION POLICY');
    lines.push(sectionDivider);
    lines.push(`Revision Rounds Included: ${revisionRounds}`);
    lines.push(`Additional Revision Rate: ${formatCurrency(parseFloat(additionalRevisionRate) || 0)}/hour`);
    lines.push(`Revision Turnaround Time: ${revisionTurnaround} business days`);
    lines.push('');

    lines.push('TERMS & CONDITIONS');
    lines.push(sectionDivider);
    lines.push('• This SOW becomes effective upon written acceptance by both parties.');
    lines.push('• Changes to scope require a written change order with adjusted pricing.');
    lines.push('• Intellectual property transfers to the client upon final payment.');
    lines.push('• Either party may terminate with 14 days written notice; work completed to date is billable.');
    lines.push('• Confidential information shared during the project remains confidential.');
    lines.push('');
    lines.push(divider);
    lines.push('Generated at invoiceflow.au/tools/scope-of-work-generator');

    navigator.clipboard.writeText(lines.join('\n')).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  /* ── Styles ── */
  const inputClass =
    'w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500/40 focus:border-teal-500/40 transition-all text-sm';
  const labelClass = 'block text-xs font-medium text-slate-400 mb-1.5';
  const sectionBtnClass = (idx: number) =>
    `text-sm px-4 py-2 rounded-lg transition-all ${
      activeSection === idx
        ? 'bg-gradient-to-r from-teal-500 to-blue-500 text-white font-medium'
        : 'bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
    }`;

  const sections = ['Project', 'Deliverables', 'Payment', 'Inclusions', 'Revisions', 'Preview'];

  return (
    <div className="space-y-6">
      {/* Section Navigation */}
      <div className="glass rounded-2xl p-4">
        <div className="flex flex-wrap gap-2">
          {sections.map((s, i) => (
            <button key={s} onClick={() => setActiveSection(i)} className={sectionBtnClass(i)}>
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Key Metrics Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
        <div className="bg-gradient-to-br from-teal-500/10 to-blue-500/10 border border-teal-500/20 rounded-xl p-3 text-center">
          <p className="text-xs text-teal-400/70 uppercase tracking-wide">Total Value</p>
          <p className="text-lg font-bold gradient-text">{formatCurrency(totalFee)}</p>
        </div>
        <div className="bg-white/5 rounded-xl p-3 text-center">
          <p className="text-xs text-slate-500 uppercase tracking-wide">Effective Rate</p>
          <p className="text-lg font-bold text-white">
            {effectiveRate > 0 ? formatCurrency(effectiveRate) : '—'}
            {effectiveRate > 0 && <span className="text-xs text-slate-500">/hr</span>}
          </p>
        </div>
        <div className="bg-white/5 rounded-xl p-3 text-center">
          <p className="text-xs text-slate-500 uppercase tracking-wide">Duration</p>
          <p className="text-lg font-bold text-white">{durationWeeks} <span className="text-xs text-slate-500">weeks</span></p>
        </div>
        <div className="bg-white/5 rounded-xl p-3 text-center">
          <p className="text-xs text-slate-500 uppercase tracking-wide">Deliverables</p>
          <p className="text-lg font-bold text-white">{deliverables.filter((d) => d.description).length}</p>
        </div>
        <div className="bg-white/5 rounded-xl p-3 text-center">
          <p className="text-xs text-slate-500 uppercase tracking-wide">Milestones</p>
          <p className="text-lg font-bold text-white">{computedMilestones.length}</p>
        </div>
      </div>

      {/* Section 0: Project Details */}
      {activeSection === 0 && (
        <div className="glass rounded-2xl p-6 sm:p-8 space-y-6">
          <h2 className="text-xl font-bold text-white heading-font">Project Details</h2>
          <p className="text-sm text-slate-400">
            Start by entering the basic project information. This forms the header of your SOW document.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Project Name</label>
              <input
                type="text"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                className={inputClass}
                placeholder="e.g. Website Redesign for Acme Co"
              />
            </div>
            <div>
              <label className={labelClass}>Client Name</label>
              <input
                type="text"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                className={inputClass}
                placeholder="e.g. Acme Corporation"
              />
            </div>
          </div>

          <div>
            <label className={labelClass}>Project Type</label>
            <select
              value={projectType}
              onChange={(e) => setProjectType(e.target.value as ProjectType)}
              className={inputClass}
            >
              {PROJECT_TYPES.map((t) => (
                <option key={t} value={t} className="bg-slate-800">
                  {t}
                </option>
              ))}
            </select>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            <div>
              <label className={labelClass}>Start Date</label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>Duration (weeks)</label>
              <input
                type="number"
                value={durationWeeks}
                onChange={(e) => setDurationWeeks(e.target.value)}
                className={inputClass}
                placeholder="6"
                min="1"
                max="52"
              />
            </div>
            <div>
              <label className={labelClass}>Estimated End Date</label>
              <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-slate-300 text-sm">
                {endDate ? formatDate(endDate) : 'Set start date & duration'}
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              onClick={() => setActiveSection(1)}
              className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Next: Deliverables
            </button>
          </div>
        </div>
      )}

      {/* Section 1: Deliverables */}
      {activeSection === 1 && (
        <div className="glass rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-white heading-font">Deliverables</h2>
            <div className="flex gap-2">
              <button
                onClick={loadDeliverablePresets}
                className="text-xs px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-all"
              >
                Load {projectType} Presets
              </button>
              <button
                onClick={addDeliverable}
                className="flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white hover:opacity-90 transition-opacity"
              >
                + Add Item
              </button>
            </div>
          </div>
          <p className="text-sm text-slate-400">
            List every deliverable the client will receive. Be specific — vague deliverables lead to scope disputes.
          </p>

          <div className="space-y-3">
            {deliverables.map((d, idx) => (
              <div key={d.id} className="bg-white/5 rounded-xl p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-slate-500">Deliverable {idx + 1}</span>
                  {deliverables.length > 1 && (
                    <button
                      onClick={() => removeDeliverable(d.id)}
                      className="text-slate-500 hover:text-rose-400 transition-colors text-xs"
                    >
                      Remove
                    </button>
                  )}
                </div>
                <div>
                  <label className={labelClass}>Description</label>
                  <input
                    type="text"
                    value={d.description}
                    onChange={(e) => updateDeliverable(d.id, 'description', e.target.value)}
                    className={inputClass}
                    placeholder="e.g. Homepage design mockup"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className={labelClass}>Estimated Hours</label>
                    <input
                      type="number"
                      value={d.estimatedHours}
                      onChange={(e) => updateDeliverable(d.id, 'estimatedHours', e.target.value)}
                      className={inputClass}
                      placeholder="8"
                      min="0"
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Due (Week #)</label>
                    <input
                      type="number"
                      value={d.dueWeek}
                      onChange={(e) => updateDeliverable(d.id, 'dueWeek', e.target.value)}
                      className={inputClass}
                      placeholder="1"
                      min="1"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white/5 rounded-xl p-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-400">Total Estimated Hours</span>
              <span className="text-lg font-bold text-white">{totalHours}</span>
            </div>
          </div>

          <div className="flex justify-between">
            <button
              onClick={() => setActiveSection(0)}
              className="px-5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-white/10 transition-all"
            >
              Back
            </button>
            <button
              onClick={() => setActiveSection(2)}
              className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Next: Payment
            </button>
          </div>
        </div>
      )}

      {/* Section 2: Payment Terms */}
      {activeSection === 2 && (
        <div className="glass rounded-2xl p-6 sm:p-8 space-y-6">
          <h2 className="text-xl font-bold text-white heading-font">Payment Terms</h2>
          <p className="text-sm text-slate-400">
            Define how and when you&apos;ll be paid. Tie payments to milestones — never agree to 100% on completion.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Hourly Rate ($)</label>
              <input
                type="number"
                value={hourlyRate}
                onChange={(e) => setHourlyRate(e.target.value)}
                className={inputClass}
                placeholder="100"
                min="0"
              />
            </div>
            <div>
              <label className={labelClass}>Calculated Fee (Rate x Hours)</label>
              <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-slate-300 text-sm">
                {formatCurrency(calculatedFee)}
              </div>
            </div>
          </div>

          <div>
            <label className={labelClass}>Total Project Fee Override (leave blank to use calculated fee)</label>
            <input
              type="number"
              value={totalFeeOverride}
              onChange={(e) => setTotalFeeOverride(e.target.value)}
              className={inputClass}
              placeholder={`Auto: ${formatCurrency(calculatedFee)}`}
              min="0"
            />
          </div>

          <div>
            <label className={labelClass}>Payment Structure</label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-1">
              {(
                [
                  { value: '50/50', label: '50/50' },
                  { value: '3-milestone', label: '3 Milestones' },
                  { value: '4-milestone', label: '4 Milestones' },
                  { value: 'custom', label: 'Custom' },
                ] as const
              ).map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => {
                    setPaymentStructure(opt.value);
                    if (opt.value === 'custom' && milestones.length === 0) {
                      setMilestones([
                        { id: genId('m'), name: 'Deposit', amount: String(Math.round(totalFee * 0.5)), whenDue: 'On signing' },
                        { id: genId('m'), name: 'Final payment', amount: String(Math.round(totalFee * 0.5)), whenDue: 'On delivery' },
                      ]);
                    }
                  }}
                  className={`text-sm py-2.5 rounded-xl border transition-all text-center ${
                    paymentStructure === opt.value
                      ? 'bg-gradient-to-r from-teal-500/20 to-blue-500/20 border-teal-500/40 text-white font-medium'
                      : 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Milestone Preview / Custom Editor */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className={labelClass}>Payment Milestones</label>
              {paymentStructure === 'custom' && (
                <button
                  onClick={addMilestone}
                  className="text-xs px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-all"
                >
                  + Add Milestone
                </button>
              )}
            </div>
            {paymentStructure !== 'custom' ? (
              <div className="space-y-2">
                {computedMilestones.map((m, i) => (
                  <div key={i} className="bg-white/5 rounded-xl p-4 flex items-center justify-between">
                    <div>
                      <p className="text-white text-sm font-medium">{m.name}</p>
                      <p className="text-xs text-slate-500">{m.whenDue}</p>
                    </div>
                    <p className="text-white font-bold">{formatCurrency(parseFloat(m.amount) || 0)}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-3">
                {milestones.map((m, idx) => (
                  <div key={m.id} className="bg-white/5 rounded-xl p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-slate-500">Milestone {idx + 1}</span>
                      {milestones.length > 1 && (
                        <button
                          onClick={() => removeMilestone(m.id)}
                          className="text-slate-500 hover:text-rose-400 transition-colors text-xs"
                        >
                          Remove
                        </button>
                      )}
                    </div>
                    <div className="grid sm:grid-cols-3 gap-3">
                      <div>
                        <label className={labelClass}>Milestone Name</label>
                        <input
                          type="text"
                          value={m.name}
                          onChange={(e) => updateMilestone(m.id, 'name', e.target.value)}
                          className={inputClass}
                          placeholder="e.g. Deposit"
                        />
                      </div>
                      <div>
                        <label className={labelClass}>Amount ($)</label>
                        <input
                          type="number"
                          value={m.amount}
                          onChange={(e) => updateMilestone(m.id, 'amount', e.target.value)}
                          className={inputClass}
                          placeholder="2500"
                          min="0"
                        />
                      </div>
                      <div>
                        <label className={labelClass}>When Due</label>
                        <input
                          type="text"
                          value={m.whenDue}
                          onChange={(e) => updateMilestone(m.id, 'whenDue', e.target.value)}
                          className={inputClass}
                          placeholder="e.g. On signing"
                        />
                      </div>
                    </div>
                  </div>
                ))}
                {milestones.length > 0 && (
                  <div className="bg-white/5 rounded-xl p-4 flex items-center justify-between">
                    <span className="text-sm text-slate-400">Custom milestone total</span>
                    <span className={`text-lg font-bold ${
                      milestones.reduce((s, m) => s + (parseFloat(m.amount) || 0), 0) === totalFee
                        ? 'text-teal-400'
                        : 'text-amber-400'
                    }`}>
                      {formatCurrency(milestones.reduce((s, m) => s + (parseFloat(m.amount) || 0), 0))}
                      <span className="text-xs text-slate-500 ml-2">/ {formatCurrency(totalFee)}</span>
                    </span>
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="flex justify-between">
            <button
              onClick={() => setActiveSection(1)}
              className="px-5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-white/10 transition-all"
            >
              Back
            </button>
            <button
              onClick={() => setActiveSection(3)}
              className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Next: Inclusions
            </button>
          </div>
        </div>
      )}

      {/* Section 3: Inclusions & Exclusions */}
      {activeSection === 3 && (
        <div className="glass rounded-2xl p-6 sm:p-8 space-y-6">
          <h2 className="text-xl font-bold text-white heading-font">Inclusions &amp; Exclusions</h2>
          <p className="text-sm text-slate-400">
            Be explicit about what&apos;s in scope and what isn&apos;t. This is your strongest defence against
            scope creep.
          </p>

          {/* Inclusions */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-white font-semibold text-sm">What&apos;s Included</h3>
              <div className="flex gap-2">
                <button
                  onClick={loadInclusionPresets}
                  className="text-xs px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-all"
                >
                  Load {projectType} Presets
                </button>
                <button
                  onClick={addInclusion}
                  className="text-xs px-3 py-1 rounded-lg bg-teal-500/20 border border-teal-500/30 text-teal-400 hover:bg-teal-500/30 transition-all"
                >
                  + Add
                </button>
              </div>
            </div>
            {inclusions.length === 0 && (
              <div className="bg-white/5 rounded-xl p-4 text-center">
                <p className="text-sm text-slate-500">
                  No inclusions added yet. Click &ldquo;Load {projectType} Presets&rdquo; to get started.
                </p>
              </div>
            )}
            {inclusions.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <span className="text-teal-400 text-sm flex-shrink-0">+</span>
                <input
                  type="text"
                  value={item}
                  onChange={(e) => updateInclusion(idx, e.target.value)}
                  className={inputClass}
                  placeholder="e.g. Mobile-responsive design"
                />
                <button
                  onClick={() => removeInclusion(idx)}
                  className="text-slate-500 hover:text-rose-400 transition-colors text-xs flex-shrink-0 px-2"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Exclusions */}
          <div className="space-y-3 pt-4 border-t border-white/5">
            <div className="flex items-center justify-between">
              <h3 className="text-white font-semibold text-sm">What&apos;s NOT Included</h3>
              <div className="flex gap-2">
                <button
                  onClick={loadExclusionPresets}
                  className="text-xs px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-all"
                >
                  Load {projectType} Presets
                </button>
                <button
                  onClick={addExclusion}
                  className="text-xs px-3 py-1 rounded-lg bg-rose-500/20 border border-rose-500/30 text-rose-400 hover:bg-rose-500/30 transition-all"
                >
                  + Add
                </button>
              </div>
            </div>
            {exclusions.length === 0 && (
              <div className="bg-white/5 rounded-xl p-4 text-center">
                <p className="text-sm text-slate-500">
                  No exclusions added yet. Click &ldquo;Load {projectType} Presets&rdquo; to get started.
                </p>
              </div>
            )}
            {exclusions.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <span className="text-rose-400 text-sm flex-shrink-0">-</span>
                <input
                  type="text"
                  value={item}
                  onChange={(e) => updateExclusion(idx, e.target.value)}
                  className={inputClass}
                  placeholder="e.g. Ongoing website maintenance"
                />
                <button
                  onClick={() => removeExclusion(idx)}
                  className="text-slate-500 hover:text-rose-400 transition-colors text-xs flex-shrink-0 px-2"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="flex justify-between">
            <button
              onClick={() => setActiveSection(2)}
              className="px-5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-white/10 transition-all"
            >
              Back
            </button>
            <button
              onClick={() => setActiveSection(4)}
              className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Next: Revisions
            </button>
          </div>
        </div>
      )}

      {/* Section 4: Revision Policy */}
      {activeSection === 4 && (
        <div className="glass rounded-2xl p-6 sm:p-8 space-y-6">
          <h2 className="text-xl font-bold text-white heading-font">Revision Policy</h2>
          <p className="text-sm text-slate-400">
            Clear revision limits protect your time. Without them, clients can request endless changes
            and you have no grounds to push back.
          </p>

          <div className="grid sm:grid-cols-3 gap-4">
            <div>
              <label className={labelClass}>Revision Rounds Included</label>
              <input
                type="number"
                value={revisionRounds}
                onChange={(e) => setRevisionRounds(e.target.value)}
                className={inputClass}
                placeholder="2"
                min="0"
                max="10"
              />
            </div>
            <div>
              <label className={labelClass}>Additional Revision Rate ($/hr)</label>
              <input
                type="number"
                value={additionalRevisionRate}
                onChange={(e) => setAdditionalRevisionRate(e.target.value)}
                className={inputClass}
                placeholder="75"
                min="0"
              />
            </div>
            <div>
              <label className={labelClass}>Turnaround Time (business days)</label>
              <input
                type="number"
                value={revisionTurnaround}
                onChange={(e) => setRevisionTurnaround(e.target.value)}
                className={inputClass}
                placeholder="3"
                min="1"
                max="30"
              />
            </div>
          </div>

          <div className="bg-gradient-to-r from-teal-500/10 to-blue-500/10 border border-teal-500/20 rounded-xl p-5">
            <p className="text-sm text-teal-400 font-medium mb-2">Pro Tip: Define What Counts as a Revision</p>
            <p className="text-sm text-slate-300">
              A &ldquo;revision&rdquo; is a change to already-approved work. New requests (adding a
              page, changing project direction, additional features) are scope changes — not revisions.
              Make this distinction clear in your SOW to avoid the &ldquo;but I still have revisions
              left&rdquo; argument.
            </p>
          </div>

          <div className="flex justify-between">
            <button
              onClick={() => setActiveSection(3)}
              className="px-5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-white/10 transition-all"
            >
              Back
            </button>
            <button
              onClick={() => {
                setShowPreview(true);
                setActiveSection(5);
              }}
              className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Generate SOW Preview
            </button>
          </div>
        </div>
      )}

      {/* Section 5: Preview */}
      {activeSection === 5 && (
        <div className="glass rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-white heading-font">SOW Preview</h2>
            <button
              onClick={handleCopy}
              className="flex items-center gap-2 text-sm px-4 py-2 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white hover:opacity-90 transition-opacity"
            >
              {copied ? 'Copied!' : 'Copy to Clipboard'}
            </button>
          </div>

          {/* Preview Document */}
          <div className="bg-slate-900/50 rounded-2xl border border-white/10 overflow-hidden">
            {/* Document Header */}
            <div className="bg-gradient-to-r from-teal-500/10 to-blue-500/10 border-b border-white/10 p-6 sm:p-8">
              <p className="text-xs text-teal-400 uppercase tracking-widest mb-2">Scope of Work</p>
              <h3 className="text-2xl font-bold text-white heading-font">
                {projectName || 'Untitled Project'}
              </h3>
              <p className="text-slate-400 mt-1">
                Prepared for {clientName || 'Client Name'} &middot; {projectType}
              </p>
            </div>

            <div className="p-6 sm:p-8 space-y-8">
              {/* Project Overview */}
              <div>
                <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-teal-500/20 text-teal-400 text-xs flex items-center justify-center font-bold">1</span>
                  Project Overview
                </h4>
                <div className="grid sm:grid-cols-2 gap-3 text-sm">
                  <div className="bg-white/5 rounded-lg p-3">
                    <span className="text-slate-500">Project</span>
                    <p className="text-white">{projectName || 'Untitled Project'}</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3">
                    <span className="text-slate-500">Client</span>
                    <p className="text-white">{clientName || 'Client Name'}</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3">
                    <span className="text-slate-500">Start Date</span>
                    <p className="text-white">{formatDate(startDate)}</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3">
                    <span className="text-slate-500">End Date</span>
                    <p className="text-white">{endDate ? formatDate(endDate) : 'TBD'}</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3">
                    <span className="text-slate-500">Duration</span>
                    <p className="text-white">{durationWeeks} weeks</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3">
                    <span className="text-slate-500">Total Value</span>
                    <p className="text-white font-bold">{formatCurrency(totalFee)}</p>
                  </div>
                </div>
              </div>

              {/* Scope & Deliverables */}
              <div>
                <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-teal-500/20 text-teal-400 text-xs flex items-center justify-center font-bold">2</span>
                  Scope &amp; Deliverables
                </h4>
                <div className="space-y-2">
                  {deliverables.filter((d) => d.description).map((d, i) => (
                    <div key={d.id} className="bg-white/5 rounded-lg p-3 flex items-center justify-between">
                      <div className="flex items-start gap-3">
                        <span className="text-teal-400 font-bold text-sm mt-0.5">{i + 1}.</span>
                        <div>
                          <p className="text-white text-sm">{d.description}</p>
                          <p className="text-xs text-slate-500">
                            {d.estimatedHours ? `${d.estimatedHours} hours` : '—'} &middot; Week {d.dueWeek}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                  {deliverables.filter((d) => d.description).length === 0 && (
                    <p className="text-sm text-slate-500 italic">No deliverables added yet.</p>
                  )}
                </div>
                <div className="mt-3 bg-white/5 rounded-lg p-3 flex items-center justify-between text-sm">
                  <span className="text-slate-400">Total Estimated Hours</span>
                  <span className="text-white font-bold">{totalHours} hours</span>
                </div>
              </div>

              {/* Timeline */}
              <div>
                <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-teal-500/20 text-teal-400 text-xs flex items-center justify-center font-bold">3</span>
                  Timeline
                </h4>
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="flex items-center gap-4 text-sm">
                    <div className="text-center">
                      <p className="text-xs text-slate-500">Start</p>
                      <p className="text-white font-medium">{formatDate(startDate)}</p>
                    </div>
                    <div className="flex-1 h-px bg-gradient-to-r from-teal-500 to-blue-500" />
                    <div className="text-center">
                      <p className="text-xs text-slate-500">End</p>
                      <p className="text-white font-medium">{endDate ? formatDate(endDate) : 'TBD'}</p>
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 text-center mt-3">{durationWeeks} weeks total</p>
                </div>
              </div>

              {/* Payment Schedule */}
              <div>
                <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-teal-500/20 text-teal-400 text-xs flex items-center justify-center font-bold">4</span>
                  Payment Schedule
                </h4>
                <div className="space-y-2">
                  {computedMilestones.map((m, i) => (
                    <div key={i} className="bg-white/5 rounded-lg p-3 flex items-center justify-between">
                      <div>
                        <p className="text-white text-sm font-medium">{m.name}</p>
                        <p className="text-xs text-slate-500">{m.whenDue}</p>
                      </div>
                      <p className="text-white font-bold text-sm">{formatCurrency(parseFloat(m.amount) || 0)}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-3 bg-gradient-to-r from-teal-500/10 to-blue-500/10 border border-teal-500/20 rounded-lg p-3 flex items-center justify-between text-sm">
                  <span className="text-teal-400">Total Project Fee</span>
                  <span className="text-white font-bold">{formatCurrency(totalFee)}</span>
                </div>
              </div>

              {/* What's Included */}
              {inclusions.filter(Boolean).length > 0 && (
                <div>
                  <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-teal-500/20 text-teal-400 text-xs flex items-center justify-center font-bold">5</span>
                    What&apos;s Included
                  </h4>
                  <div className="bg-white/5 rounded-lg p-4">
                    <ul className="space-y-2 text-sm">
                      {inclusions.filter(Boolean).map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-teal-400 mt-0.5 flex-shrink-0">+</span>
                          <span className="text-slate-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* What's Not Included */}
              {exclusions.filter(Boolean).length > 0 && (
                <div>
                  <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-rose-500/20 text-rose-400 text-xs flex items-center justify-center font-bold">6</span>
                    What&apos;s Not Included
                  </h4>
                  <div className="bg-white/5 rounded-lg p-4">
                    <ul className="space-y-2 text-sm">
                      {exclusions.filter(Boolean).map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-rose-400 mt-0.5 flex-shrink-0">-</span>
                          <span className="text-slate-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Revision Policy */}
              <div>
                <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-teal-500/20 text-teal-400 text-xs flex items-center justify-center font-bold">7</span>
                  Revision Policy
                </h4>
                <div className="grid sm:grid-cols-3 gap-3">
                  <div className="bg-white/5 rounded-lg p-3">
                    <p className="text-xs text-slate-500">Rounds Included</p>
                    <p className="text-white font-bold">{revisionRounds}</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3">
                    <p className="text-xs text-slate-500">Additional Rate</p>
                    <p className="text-white font-bold">
                      {formatCurrency(parseFloat(additionalRevisionRate) || 0)}/hr
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3">
                    <p className="text-xs text-slate-500">Turnaround</p>
                    <p className="text-white font-bold">{revisionTurnaround} business days</p>
                  </div>
                </div>
              </div>

              {/* Terms & Conditions */}
              <div>
                <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-teal-500/20 text-teal-400 text-xs flex items-center justify-center font-bold">8</span>
                  Terms &amp; Conditions
                </h4>
                <div className="bg-white/5 rounded-lg p-4">
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li className="flex items-start gap-2">
                      <span className="text-slate-500 mt-0.5 flex-shrink-0">&bull;</span>
                      This SOW becomes effective upon written acceptance by both parties.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-slate-500 mt-0.5 flex-shrink-0">&bull;</span>
                      Changes to scope require a written change order with adjusted pricing.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-slate-500 mt-0.5 flex-shrink-0">&bull;</span>
                      Intellectual property transfers to the client upon final payment.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-slate-500 mt-0.5 flex-shrink-0">&bull;</span>
                      Either party may terminate with 14 days written notice; work completed to date is billable.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-slate-500 mt-0.5 flex-shrink-0">&bull;</span>
                      Confidential information shared during the project remains confidential.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between">
            <button
              onClick={() => setActiveSection(4)}
              className="px-5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-white/10 transition-all"
            >
              Back to Edit
            </button>
            <button
              onClick={handleCopy}
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white text-sm font-medium hover:opacity-90 transition-opacity"
            >
              {copied ? 'Copied!' : 'Copy to Clipboard'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
