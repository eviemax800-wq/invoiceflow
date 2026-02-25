'use client';

import { useState, useMemo, useCallback } from 'react';

/* ---- Helpers ---- */

function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

/* ---- Types ---- */

type ProjectType =
  | 'Web Development'
  | 'Design/Branding'
  | 'Consulting'
  | 'Photography/Video'
  | 'Marketing'
  | 'Content Writing'
  | 'Accounting/Bookkeeping'
  | 'Custom';

type PaymentTerms = '50/50' | '3-milestone' | 'net-14' | 'net-30';

interface ChecklistItem {
  id: string;
  label: string;
  checked: boolean;
  isCustom?: boolean;
}

interface ChecklistSection {
  id: string;
  title: string;
  enabled: boolean;
  items: ChecklistItem[];
}

/* ---- Section Presets ---- */

const SECTION_PRESETS: Record<string, { title: string; items: string[] }> = {
  clientInfo: {
    title: 'Client Information Gathering',
    items: [
      'Full legal business name and ABN collected',
      'Primary contact name, email, and phone confirmed',
      'Billing address and invoicing email obtained',
      'Brand assets received (logo, fonts, guidelines)',
      'Preferred communication channel agreed',
    ],
  },
  contractLegal: {
    title: 'Contract & Legal',
    items: [
      'Service agreement / contract sent and signed',
      'Non-disclosure agreement (NDA) signed if required',
      'Intellectual property ownership terms agreed',
      'Scope of work document reviewed and approved',
      'Cancellation and dispute resolution terms confirmed',
    ],
  },
  paymentSetup: {
    title: 'Payment Setup',
    items: [
      'Deposit invoice sent and paid',
      'Payment method confirmed (bank transfer, Stripe, etc.)',
      'Payment terms and schedule agreed in writing',
      'Late payment fee policy communicated',
      'GST registration status confirmed',
    ],
  },
  projectKickoff: {
    title: 'Project Kickoff',
    items: [
      'Project brief and scope confirmed by client',
      'Timeline and key milestones agreed',
      'Communication channel set up (Slack, email, etc.)',
      'Project management tool access shared',
      'Kickoff meeting or call scheduled',
      'Revision policy and feedback process explained',
    ],
  },
  technicalRequirements: {
    title: 'Technical Requirements',
    items: [
      'Hosting / server access credentials received',
      'Domain registrar access or DNS details provided',
      'CMS login credentials shared securely',
      'Analytics (Google Analytics, Search Console) access granted',
      'Third-party API keys or integrations documented',
    ],
  },
  brandAssets: {
    title: 'Brand Assets',
    items: [
      'Logo files received (SVG, PNG, AI formats)',
      'Brand guidelines document provided',
      'Typography / font files shared',
      'Colour palette with hex codes confirmed',
      'Existing marketing materials collected for reference',
    ],
  },
  contentRequirements: {
    title: 'Content Requirements',
    items: [
      'Content brief and objectives documented',
      'Tone of voice and brand voice guidelines received',
      'Target audience personas defined',
      'SEO keywords or topics list provided',
      'Content approval workflow and sign-off process agreed',
    ],
  },
};

/* ---- Project Type → Default Enabled Sections ---- */

const PROJECT_TYPE_SECTIONS: Record<ProjectType, string[]> = {
  'Web Development': ['clientInfo', 'contractLegal', 'paymentSetup', 'projectKickoff', 'technicalRequirements'],
  'Design/Branding': ['clientInfo', 'contractLegal', 'paymentSetup', 'projectKickoff', 'brandAssets'],
  Consulting: ['clientInfo', 'contractLegal', 'paymentSetup', 'projectKickoff'],
  'Photography/Video': ['clientInfo', 'contractLegal', 'paymentSetup', 'projectKickoff', 'brandAssets'],
  Marketing: ['clientInfo', 'contractLegal', 'paymentSetup', 'projectKickoff', 'contentRequirements', 'brandAssets'],
  'Content Writing': ['clientInfo', 'contractLegal', 'paymentSetup', 'projectKickoff', 'contentRequirements'],
  'Accounting/Bookkeeping': ['clientInfo', 'contractLegal', 'paymentSetup', 'projectKickoff'],
  Custom: ['clientInfo', 'contractLegal', 'paymentSetup', 'projectKickoff'],
};

const PROJECT_TYPES: ProjectType[] = [
  'Web Development', 'Design/Branding', 'Consulting', 'Photography/Video',
  'Marketing', 'Content Writing', 'Accounting/Bookkeeping', 'Custom',
];

const PAYMENT_TERMS: { value: PaymentTerms; label: string; desc: string }[] = [
  { value: '50/50', label: '50/50', desc: '50% deposit, 50% on completion' },
  { value: '3-milestone', label: '3 Milestones', desc: '33% deposit, 33% mid, 34% final' },
  { value: 'net-14', label: 'Net 14', desc: 'Full payment within 14 days' },
  { value: 'net-30', label: 'Net 30', desc: 'Full payment within 30 days' },
];

let _nextId = 1;
function genId() {
  return `item-${_nextId++}-${Date.now()}`;
}

/* ---- Main Component ---- */

export default function ClientOnboardingChecklist() {
  /* ── Form State ── */
  const [businessName, setBusinessName] = useState('');
  const [abn, setAbn] = useState('');
  const [projectType, setProjectType] = useState<ProjectType>('Web Development');
  const [clientName, setClientName] = useState('');
  const [projectValue, setProjectValue] = useState('');
  const [paymentTerms, setPaymentTerms] = useState<PaymentTerms>('50/50');

  /* ── Sections State ── */
  const [sections, setSections] = useState<ChecklistSection[]>(() => buildSections('Web Development'));
  const [showPreview, setShowPreview] = useState(false);
  const [copied, setCopied] = useState(false);
  const [customItemInputs, setCustomItemInputs] = useState<Record<string, string>>({});

  /* ── Build sections from project type ── */
  function buildSections(type: ProjectType): ChecklistSection[] {
    const enabledIds = PROJECT_TYPE_SECTIONS[type];
    return Object.entries(SECTION_PRESETS).map(([id, preset]) => ({
      id,
      title: preset.title,
      enabled: enabledIds.includes(id),
      items: preset.items.map((label) => ({
        id: genId(),
        label,
        checked: false,
      })),
    }));
  }

  /* ── Handlers ── */
  const handleProjectTypeChange = (type: ProjectType) => {
    setProjectType(type);
    setSections(buildSections(type));
  };

  const toggleSection = (sectionId: string) => {
    setSections((prev) =>
      prev.map((s) => (s.id === sectionId ? { ...s, enabled: !s.enabled } : s))
    );
  };

  const toggleItem = (sectionId: string, itemId: string) => {
    setSections((prev) =>
      prev.map((s) =>
        s.id === sectionId
          ? { ...s, items: s.items.map((it) => (it.id === itemId ? { ...it, checked: !it.checked } : it)) }
          : s
      )
    );
  };

  const addCustomItem = (sectionId: string) => {
    const text = (customItemInputs[sectionId] || '').trim();
    if (!text) return;
    setSections((prev) =>
      prev.map((s) =>
        s.id === sectionId
          ? { ...s, items: [...s.items, { id: genId(), label: text, checked: false, isCustom: true }] }
          : s
      )
    );
    setCustomItemInputs((prev) => ({ ...prev, [sectionId]: '' }));
  };

  const removeCustomItem = (sectionId: string, itemId: string) => {
    setSections((prev) =>
      prev.map((s) =>
        s.id === sectionId
          ? { ...s, items: s.items.filter((it) => it.id !== itemId || !it.isCustom) }
          : s
      )
    );
  };

  /* ── Stats ── */
  const stats = useMemo(() => {
    const enabledSections = sections.filter((s) => s.enabled);
    const allItems = enabledSections.flatMap((s) => s.items);
    const checkedItems = allItems.filter((it) => it.checked);
    const total = allItems.length;
    const checked = checkedItems.length;
    const percentage = total > 0 ? Math.round((checked / total) * 100) : 0;
    return { total, checked, percentage };
  }, [sections]);

  /* ── Payment description ── */
  const paymentDescription = useMemo(() => {
    const val = parseFloat(projectValue) || 0;
    if (val === 0) return '';
    const term = PAYMENT_TERMS.find((t) => t.value === paymentTerms);
    if (!term) return '';

    switch (paymentTerms) {
      case '50/50':
        return `${formatCurrency(val * 0.5)} deposit + ${formatCurrency(val * 0.5)} on completion`;
      case '3-milestone':
        return `${formatCurrency(Math.round(val * 0.33))} deposit + ${formatCurrency(Math.round(val * 0.33))} mid-project + ${formatCurrency(val - Math.round(val * 0.33) * 2)} final`;
      case 'net-14':
        return `${formatCurrency(val)} due within 14 days of invoice`;
      case 'net-30':
        return `${formatCurrency(val)} due within 30 days of invoice`;
      default:
        return '';
    }
  }, [projectValue, paymentTerms]);

  /* ── Copy to Clipboard ── */
  const handleCopy = useCallback(() => {
    const divider = '════════════════════════════════════════════════════════';
    const sectionDivider = '────────────────────────────────────────────────────────';
    const lines: string[] = [];

    lines.push(divider);
    lines.push('CLIENT ONBOARDING CHECKLIST');
    lines.push(divider);
    lines.push('');
    if (businessName) lines.push(`Business: ${businessName}${abn ? ` (ABN: ${abn})` : ''}`);
    lines.push(`Client: ${clientName || 'Client Name'}`);
    lines.push(`Project Type: ${projectType}`);
    if (projectValue) {
      lines.push(`Project Value: ${formatCurrency(parseFloat(projectValue) || 0)}`);
      lines.push(`Payment Terms: ${PAYMENT_TERMS.find((t) => t.value === paymentTerms)?.label} — ${paymentDescription}`);
    }
    lines.push('');

    sections
      .filter((s) => s.enabled)
      .forEach((section) => {
        lines.push(section.title.toUpperCase());
        lines.push(sectionDivider);
        section.items.forEach((item) => {
          lines.push(`  [${item.checked ? 'x' : ' '}] ${item.label}`);
        });
        lines.push('');
      });

    lines.push(`Progress: ${stats.checked}/${stats.total} items complete (${stats.percentage}%)`);
    lines.push('');
    lines.push(divider);
    lines.push('Generated at invoiceflow.au/tools/client-onboarding-checklist');

    navigator.clipboard.writeText(lines.join('\n')).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  }, [sections, stats, businessName, abn, clientName, projectType, projectValue, paymentTerms, paymentDescription]);

  /* ── Input Styles ── */
  const inputClass =
    'w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500/50 transition-all text-sm';
  const labelClass = 'block text-xs font-medium text-slate-400 mb-1.5';

  return (
    <div className="space-y-8">
      {/* Input Section */}
      <div className="glass rounded-2xl p-6">
        <h3 className="text-lg font-bold text-white heading-font mb-6">Project Details</h3>
        <div className="space-y-5">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Your Business Name</label>
              <input
                type="text"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                className={inputClass}
                placeholder="e.g. Acme Digital Studio"
              />
            </div>
            <div>
              <label className={labelClass}>ABN (Optional)</label>
              <input
                type="text"
                value={abn}
                onChange={(e) => setAbn(e.target.value)}
                className={inputClass}
                placeholder="e.g. 12 345 678 901"
              />
            </div>
          </div>

          <div>
            <label className={labelClass}>Project Type</label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {PROJECT_TYPES.map((type) => (
                <button
                  key={type}
                  onClick={() => handleProjectTypeChange(type)}
                  className={`text-sm py-2.5 px-3 rounded-xl border transition-all text-center ${
                    projectType === type
                      ? 'bg-gradient-to-r from-teal-500/20 to-blue-500/20 border-teal-500/40 text-white font-medium'
                      : 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Client Name</label>
              <input
                type="text"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                className={inputClass}
                placeholder="e.g. Jane Smith / Smith Corp"
              />
            </div>
            <div>
              <label className={labelClass}>Project Value (AUD)</label>
              <input
                type="number"
                value={projectValue}
                onChange={(e) => setProjectValue(e.target.value)}
                className={inputClass}
                placeholder="e.g. 5000"
                min="0"
              />
            </div>
          </div>

          <div>
            <label className={labelClass}>Payment Terms</label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {PAYMENT_TERMS.map((term) => (
                <button
                  key={term.value}
                  onClick={() => setPaymentTerms(term.value)}
                  className={`text-sm py-2.5 px-3 rounded-xl border transition-all text-center ${
                    paymentTerms === term.value
                      ? 'bg-gradient-to-r from-teal-500/20 to-blue-500/20 border-teal-500/40 text-white font-medium'
                      : 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {term.label}
                </button>
              ))}
            </div>
            {paymentDescription && (
              <p className="text-xs text-slate-500 mt-2">{paymentDescription}</p>
            )}
          </div>
        </div>
      </div>

      {/* Progress Bar + Stats */}
      <div className="glass rounded-2xl p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-bold text-white heading-font">Progress</h3>
          <span className="text-sm font-bold text-teal-400">{stats.percentage}%</span>
        </div>
        <div className="w-full bg-white/5 rounded-full h-3 overflow-hidden mb-4">
          <div
            className="h-full rounded-full bg-gradient-to-r from-teal-500 to-blue-500 transition-all duration-500 ease-out"
            style={{ width: `${Math.max(stats.percentage, 1)}%` }}
          />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <p className="text-2xl font-bold text-white">{stats.total}</p>
            <p className="text-xs text-slate-500">Total Items</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-teal-400">{stats.checked}</p>
            <p className="text-xs text-slate-500">Completed</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-slate-400">{stats.total - stats.checked}</p>
            <p className="text-xs text-slate-500">Remaining</p>
          </div>
        </div>
      </div>

      {/* Checklist Sections */}
      <div className="space-y-4">
        {sections.map((section) => (
          <div key={section.id} className="glass rounded-2xl overflow-hidden">
            {/* Section Header with Toggle */}
            <button
              onClick={() => toggleSection(section.id)}
              className="w-full flex items-center justify-between p-5 hover:bg-white/5 transition-all"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`relative w-11 h-6 rounded-full transition-colors ${
                    section.enabled ? 'bg-teal-500' : 'bg-white/10'
                  }`}
                >
                  <span
                    className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform ${
                      section.enabled ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </div>
                <h3 className={`font-semibold text-sm ${section.enabled ? 'text-white' : 'text-slate-500'}`}>
                  {section.title}
                </h3>
              </div>
              {section.enabled && (
                <span className="text-xs text-slate-500">
                  {section.items.filter((i) => i.checked).length}/{section.items.length}
                </span>
              )}
            </button>

            {/* Section Items */}
            {section.enabled && (
              <div className="px-5 pb-5 space-y-2">
                {section.items.map((item) => (
                  <label
                    key={item.id}
                    className="flex items-start gap-3 p-3 bg-white/5 rounded-xl cursor-pointer hover:bg-white/10 transition-all group"
                  >
                    <div className="relative mt-0.5 flex-shrink-0">
                      <input
                        type="checkbox"
                        checked={item.checked}
                        onChange={() => toggleItem(section.id, item.id)}
                        className="sr-only"
                      />
                      <div
                        className={`w-5 h-5 rounded-md border-2 transition-all flex items-center justify-center ${
                          item.checked
                            ? 'bg-teal-500 border-teal-500'
                            : 'border-white/20 group-hover:border-teal-500/50'
                        }`}
                      >
                        {item.checked && (
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                    </div>
                    <span className={`text-sm transition-all ${item.checked ? 'text-slate-500 line-through' : 'text-slate-300'}`}>
                      {item.label}
                    </span>
                    {item.isCustom && (
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          removeCustomItem(section.id, item.id);
                        }}
                        className="ml-auto text-xs text-slate-600 hover:text-rose-400 transition-colors flex-shrink-0"
                      >
                        Remove
                      </button>
                    )}
                  </label>
                ))}

                {/* Add Custom Item */}
                <div className="flex items-center gap-2 mt-3">
                  <input
                    type="text"
                    value={customItemInputs[section.id] || ''}
                    onChange={(e) => setCustomItemInputs((prev) => ({ ...prev, [section.id]: e.target.value }))}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') addCustomItem(section.id);
                    }}
                    className="flex-1 px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500/50 transition-all text-sm"
                    placeholder="Add custom item..."
                  />
                  <button
                    onClick={() => addCustomItem(section.id)}
                    className="px-3 py-2 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white text-sm font-medium hover:from-teal-400 hover:to-blue-400 transition-all flex-shrink-0"
                  >
                    Add
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Preview Toggle */}
      <div className="flex justify-center">
        <button
          onClick={() => setShowPreview(!showPreview)}
          className="px-6 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white font-medium hover:from-teal-400 hover:to-blue-400 transition-all"
        >
          {showPreview ? 'Hide Preview' : 'Show Professional Preview'}
        </button>
      </div>

      {/* Professional Preview */}
      {showPreview && (
        <div className="glass rounded-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-teal-500/10 to-blue-500/10 border-b border-white/10 p-6 sm:p-8">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs text-teal-400 uppercase tracking-widest mb-2">Client Onboarding Checklist</p>
                <h3 className="text-2xl font-bold text-white heading-font">
                  {clientName || 'Client Name'}
                </h3>
                <p className="text-slate-400 mt-1">
                  {projectType} &middot; {businessName || 'Your Business'}
                  {abn ? ` (ABN: ${abn})` : ''}
                </p>
              </div>
              <div className="text-right flex-shrink-0 ml-4">
                <p className="text-xs text-slate-500">Completion</p>
                <p className="text-2xl font-bold gradient-text">{stats.percentage}%</p>
              </div>
            </div>
            {projectValue && (
              <div className="mt-4 grid sm:grid-cols-2 gap-3">
                <div className="bg-white/5 rounded-lg p-3">
                  <p className="text-xs text-slate-500">Project Value</p>
                  <p className="text-white font-bold">{formatCurrency(parseFloat(projectValue) || 0)}</p>
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <p className="text-xs text-slate-500">Payment Terms</p>
                  <p className="text-white font-bold">{PAYMENT_TERMS.find((t) => t.value === paymentTerms)?.label}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{paymentDescription}</p>
                </div>
              </div>
            )}
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            {sections
              .filter((s) => s.enabled)
              .map((section, idx) => (
                <div key={section.id}>
                  <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-teal-500/20 text-teal-400 text-xs flex items-center justify-center font-bold">
                      {idx + 1}
                    </span>
                    {section.title}
                    <span className="text-xs text-slate-500 ml-auto">
                      {section.items.filter((i) => i.checked).length}/{section.items.length}
                    </span>
                  </h4>
                  <div className="space-y-1.5">
                    {section.items.map((item) => (
                      <div
                        key={item.id}
                        className={`flex items-start gap-2.5 p-2.5 rounded-lg text-sm ${
                          item.checked ? 'bg-teal-500/5' : 'bg-white/5'
                        }`}
                      >
                        <span className={`mt-0.5 flex-shrink-0 ${item.checked ? 'text-teal-400' : 'text-slate-600'}`}>
                          {item.checked ? (
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                          ) : (
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <rect x="3" y="3" width="18" height="18" rx="3" strokeWidth={1.5} />
                            </svg>
                          )}
                        </span>
                        <span className={item.checked ? 'text-slate-500 line-through' : 'text-slate-300'}>
                          {item.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
          </div>

          {/* Preview Footer */}
          <div className="border-t border-white/10 p-6 sm:p-8 flex items-center justify-between">
            <p className="text-xs text-slate-500">
              Generated with InvoiceFlow &middot; invoiceflow.au
            </p>
            <button
              onClick={handleCopy}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white text-sm font-medium hover:from-teal-400 hover:to-blue-400 transition-all"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              {copied ? 'Copied!' : 'Copy Checklist'}
            </button>
          </div>
        </div>
      )}

      {/* Bottom Copy Button */}
      <div className="flex justify-center">
        <button
          onClick={handleCopy}
          className="px-6 py-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-500/30 transition-all text-white font-medium"
        >
          {copied ? 'Copied to Clipboard!' : 'Copy Checklist to Clipboard'}
        </button>
      </div>

      {/* Related Tools */}
      <div className="glass rounded-2xl p-6">
        <h3 className="text-lg font-bold text-white heading-font mb-4">Related Tools</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <a
            href="/tools/scope-of-work-generator"
            className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-500/30 rounded-xl p-4 transition-all group"
          >
            <p className="text-white font-medium text-sm group-hover:text-teal-400 transition-colors">
              Scope of Work Generator
            </p>
            <p className="text-xs text-slate-500 mt-1">Create a detailed SOW document</p>
          </a>
          <a
            href="/tools/contract-clause-generator"
            className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-500/30 rounded-xl p-4 transition-all group"
          >
            <p className="text-white font-medium text-sm group-hover:text-teal-400 transition-colors">
              Contract Clause Generator
            </p>
            <p className="text-xs text-slate-500 mt-1">Build professional contract clauses</p>
          </a>
          <a
            href="/tools/proposal-generator"
            className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-500/30 rounded-xl p-4 transition-all group"
          >
            <p className="text-white font-medium text-sm group-hover:text-teal-400 transition-colors">
              Proposal Generator
            </p>
            <p className="text-xs text-slate-500 mt-1">Create winning client proposals</p>
          </a>
          <a
            href="/tools/payment-terms-calculator"
            className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-500/30 rounded-xl p-4 transition-all group"
          >
            <p className="text-white font-medium text-sm group-hover:text-teal-400 transition-colors">
              Payment Terms Calculator
            </p>
            <p className="text-xs text-slate-500 mt-1">Optimise your payment terms</p>
          </a>
        </div>
      </div>
    </div>
  );
}
