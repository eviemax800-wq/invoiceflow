'use client';

import { useState, useMemo, useCallback } from 'react';

/* ─── Helpers ─── */

function formatDateAU(dateStr: string): string {
  if (!dateStr) return '';
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('en-AU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

function todayISO(): string {
  return new Date().toISOString().split('T')[0];
}

function generateDocNumber(): string {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, '0');
  const seq = String(Math.floor(Math.random() * 9000) + 1000);
  return `PHD-${y}${m}-${seq}`;
}

/* ─── Types ─── */

type ProjectType =
  | 'Website/Web App'
  | 'Mobile App'
  | 'Brand/Logo Design'
  | 'Marketing Campaign'
  | 'Content/Copywriting'
  | 'Photography/Video'
  | 'Consulting/Strategy'
  | 'Software Development'
  | 'Other';

type DeliverableStatus = 'Complete' | 'Pending minor revision' | 'N/A';
type AccessLevel = 'Owner' | 'Admin' | 'Editor' | 'Viewer';
type TransferStatus = 'Transferred' | 'Pending transfer' | 'Not applicable';
type WarrantyPeriod = 'none' | '7-days' | '14-days' | '30-days' | '60-days' | '90-days';

interface Deliverable {
  id: number;
  name: string;
  description: string;
  format: string;
  location: string;
  status: DeliverableStatus;
}

interface AccessItem {
  id: number;
  platform: string;
  accessLevel: AccessLevel;
  transferStatus: TransferStatus;
  notes: string;
}

interface ThirdPartyContact {
  id: number;
  service: string;
  contact: string;
  notes: string;
}

type SupportOption =
  | 'Bug fixes'
  | 'Minor text changes'
  | 'Performance issues'
  | 'Security updates'
  | 'Training/walkthrough'
  | 'Additional features — extra cost';

/* ─── Constants ─── */

const PROJECT_TYPES: ProjectType[] = [
  'Website/Web App',
  'Mobile App',
  'Brand/Logo Design',
  'Marketing Campaign',
  'Content/Copywriting',
  'Photography/Video',
  'Consulting/Strategy',
  'Software Development',
  'Other',
];

const WARRANTY_LABELS: Record<WarrantyPeriod, string> = {
  'none': 'None',
  '7-days': '7 days',
  '14-days': '14 days',
  '30-days': '30 days',
  '60-days': '60 days',
  '90-days': '90 days',
};

const SUPPORT_OPTIONS: SupportOption[] = [
  'Bug fixes',
  'Minor text changes',
  'Performance issues',
  'Security updates',
  'Training/walkthrough',
  'Additional features — extra cost',
];

const DELIVERABLE_PRESETS: Record<ProjectType, { name: string; format: string }[]> = {
  'Website/Web App': [
    { name: 'Source code', format: 'Git repository' },
    { name: 'Design files', format: 'Figma / PSD' },
    { name: 'Content / copy', format: 'Google Docs / Word' },
    { name: 'Technical documentation', format: 'PDF / Markdown' },
    { name: 'Analytics access', format: 'Google Analytics' },
  ],
  'Mobile App': [
    { name: 'Source code', format: 'Git repository' },
    { name: 'App store listing assets', format: 'PNG / JPEG' },
    { name: 'Design files', format: 'Figma / Sketch' },
    { name: 'API documentation', format: 'PDF / Markdown' },
    { name: 'Test accounts', format: 'Credentials document' },
  ],
  'Brand/Logo Design': [
    { name: 'Logo files (all formats)', format: 'AI / SVG / PNG / EPS' },
    { name: 'Brand guidelines', format: 'PDF' },
    { name: 'Colour palette', format: 'PDF / ASE file' },
    { name: 'Typography specifications', format: 'PDF' },
    { name: 'Collateral templates', format: 'AI / InDesign' },
  ],
  'Marketing Campaign': [
    { name: 'Campaign strategy document', format: 'PDF / Slides' },
    { name: 'Creative assets', format: 'PSD / PNG / MP4' },
    { name: 'Ad copy and headlines', format: 'Google Docs' },
    { name: 'Performance report', format: 'PDF / Spreadsheet' },
    { name: 'Audience data / targeting specs', format: 'Spreadsheet' },
  ],
  'Content/Copywriting': [
    { name: 'Written content (all pieces)', format: 'Google Docs / Word' },
    { name: 'SEO keyword research', format: 'Spreadsheet' },
    { name: 'Content calendar', format: 'Spreadsheet' },
    { name: 'Style guide', format: 'PDF' },
    { name: 'Image assets / captions', format: 'Folder / Docs' },
  ],
  'Photography/Video': [
    { name: 'Edited photos / videos', format: 'JPEG / MP4 / MOV' },
    { name: 'Raw files', format: 'RAW / ProRes' },
    { name: 'Shot list / project brief', format: 'PDF' },
    { name: 'Usage rights documentation', format: 'PDF' },
    { name: 'Social media edits', format: 'MP4 / JPEG' },
  ],
  'Consulting/Strategy': [
    { name: 'Strategy document', format: 'PDF / Slides' },
    { name: 'Research findings', format: 'PDF / Spreadsheet' },
    { name: 'Recommendations report', format: 'PDF' },
    { name: 'Presentation deck', format: 'PowerPoint / Google Slides' },
    { name: 'Workshop recordings', format: 'MP4 / Zoom recording' },
  ],
  'Software Development': [
    { name: 'Source code', format: 'Git repository' },
    { name: 'Technical documentation', format: 'Markdown / PDF' },
    { name: 'API documentation', format: 'OpenAPI / Swagger' },
    { name: 'Database schema', format: 'SQL / ERD' },
    { name: 'Deployment guide', format: 'Markdown / PDF' },
  ],
  'Other': [
    { name: 'Project deliverables', format: 'Various' },
    { name: 'Documentation', format: 'PDF' },
    { name: 'Project files', format: 'Various' },
  ],
};

/* ─── Component ─── */

let _nextId = 1;
function nextId(): number {
  return _nextId++;
}

export default function ProjectHandoverGenerator() {
  /* ── Step 1: Project Overview ── */
  const [projectName, setProjectName] = useState('');
  const [clientName, setClientName] = useState('');
  const [clientCompany, setClientCompany] = useState('');
  const [yourName, setYourName] = useState('');
  const [projectType, setProjectType] = useState<ProjectType>('Website/Web App');
  const [startDate, setStartDate] = useState('');
  const [handoverDate, setHandoverDate] = useState(todayISO());

  /* ── Step 2: Deliverables ── */
  const [deliverables, setDeliverables] = useState<Deliverable[]>([
    { id: nextId(), name: '', description: '', format: '', location: '', status: 'Complete' },
  ]);

  /* ── Step 3: Access & Credentials ── */
  const [accessItems, setAccessItems] = useState<AccessItem[]>([
    { id: nextId(), platform: '', accessLevel: 'Admin', transferStatus: 'Transferred', notes: '' },
  ]);
  const [hostingProvider, setHostingProvider] = useState('');
  const [hostingRenewalDate, setHostingRenewalDate] = useState('');
  const [hostingMonthlyCost, setHostingMonthlyCost] = useState('');

  /* ── Step 4: Maintenance & Support ── */
  const [warrantyPeriod, setWarrantyPeriod] = useState<WarrantyPeriod>('30-days');
  const [supportInclusions, setSupportInclusions] = useState<SupportOption[]>(['Bug fixes', 'Performance issues', 'Security updates']);
  const [maintenanceNotes, setMaintenanceNotes] = useState('');
  const [thirdPartyContacts, setThirdPartyContacts] = useState<ThirdPartyContact[]>([]);

  /* ── UI State ── */
  const [activeStep, setActiveStep] = useState(0);
  const [copied, setCopied] = useState(false);
  const [docNumber] = useState(generateDocNumber);

  const steps = ['Project Overview', 'Deliverables & Assets', 'Access & Credentials', 'Maintenance & Support', 'Handover Document'];

  /* ── Deliverable Actions ── */
  const addDeliverable = () => {
    setDeliverables((prev) => [
      ...prev,
      { id: nextId(), name: '', description: '', format: '', location: '', status: 'Complete' },
    ]);
  };

  const removeDeliverable = (id: number) => {
    if (deliverables.length <= 1) return;
    setDeliverables((prev) => prev.filter((d) => d.id !== id));
  };

  const updateDeliverable = (id: number, field: keyof Deliverable, value: string) => {
    setDeliverables((prev) =>
      prev.map((d) => (d.id === id ? { ...d, [field]: value } : d))
    );
  };

  const loadDeliverablePresets = useCallback(() => {
    const presets = DELIVERABLE_PRESETS[projectType];
    if (!presets || presets.length === 0) return;
    setDeliverables(
      presets.map((p) => ({
        id: nextId(),
        name: p.name,
        description: '',
        format: p.format,
        location: '',
        status: 'Complete' as DeliverableStatus,
      }))
    );
  }, [projectType]);

  /* ── Access Actions ── */
  const addAccessItem = () => {
    setAccessItems((prev) => [
      ...prev,
      { id: nextId(), platform: '', accessLevel: 'Admin', transferStatus: 'Transferred', notes: '' },
    ]);
  };

  const removeAccessItem = (id: number) => {
    if (accessItems.length <= 1) return;
    setAccessItems((prev) => prev.filter((a) => a.id !== id));
  };

  const updateAccessItem = (id: number, field: keyof AccessItem, value: string) => {
    setAccessItems((prev) =>
      prev.map((a) => (a.id === id ? { ...a, [field]: value } : a))
    );
  };

  /* ── Third-Party Contact Actions ── */
  const addThirdPartyContact = () => {
    setThirdPartyContacts((prev) => [
      ...prev,
      { id: nextId(), service: '', contact: '', notes: '' },
    ]);
  };

  const removeThirdPartyContact = (id: number) => {
    setThirdPartyContacts((prev) => prev.filter((c) => c.id !== id));
  };

  const updateThirdPartyContact = (id: number, field: keyof ThirdPartyContact, value: string) => {
    setThirdPartyContacts((prev) =>
      prev.map((c) => (c.id === id ? { ...c, [field]: value } : c))
    );
  };

  /* ── Support Toggle ── */
  const toggleSupport = (option: SupportOption) => {
    setSupportInclusions((prev) =>
      prev.includes(option) ? prev.filter((o) => o !== option) : [...prev, option]
    );
  };

  /* ── Generate Handover Document Text ── */
  const generatedText = useMemo(() => {
    const divider = '================================================================';
    const sectionDivider = '----------------------------------------------------------------';
    const lines: string[] = [];

    lines.push(divider);
    lines.push('');
    lines.push('              PROJECT HANDOVER DOCUMENT');
    lines.push('');
    lines.push(divider);
    lines.push('');
    lines.push(`Document No:       ${docNumber}`);
    lines.push(`Date of Issue:     ${formatDateAU(todayISO())}`);
    lines.push('');

    // Section 1: Project Summary
    lines.push(sectionDivider);
    lines.push('  1. PROJECT SUMMARY');
    lines.push(sectionDivider);
    lines.push('');
    lines.push(`  Project Name:    ${projectName || '[Project Name]'}`);
    lines.push(`  Project Type:    ${projectType}`);
    lines.push(`  Start Date:      ${startDate ? formatDateAU(startDate) : '[Start Date]'}`);
    lines.push(`  Handover Date:   ${handoverDate ? formatDateAU(handoverDate) : '[Handover Date]'}`);
    lines.push('');
    lines.push('  Contractor / Freelancer:');
    lines.push(`    Name:          ${yourName || '[Your Name / Business Name]'}`);
    lines.push('');
    lines.push('  Client:');
    lines.push(`    Name:          ${clientName || '[Client Name]'}`);
    if (clientCompany) {
      lines.push(`    Company:       ${clientCompany}`);
    }
    lines.push('');

    // Section 2: Deliverables Inventory
    lines.push(sectionDivider);
    lines.push('  2. DELIVERABLES INVENTORY');
    lines.push(sectionDivider);
    lines.push('');

    const validDeliverables = deliverables.filter((d) => d.name.trim());
    if (validDeliverables.length > 0) {
      lines.push('  No.  Deliverable                Format              Status');
      lines.push('  ---  -------------------------  ------------------  ----------------------');
      validDeliverables.forEach((d, i) => {
        const num = String(i + 1).padEnd(5);
        const name = d.name.padEnd(27).substring(0, 27);
        const format = (d.format || '—').padEnd(20).substring(0, 20);
        lines.push(`  ${num}${name}${format}${d.status}`);
        if (d.description) {
          lines.push(`       ${d.description}`);
        }
        if (d.location) {
          lines.push(`       Location: ${d.location}`);
        }
      });
    } else {
      lines.push('  No deliverables listed.');
    }
    lines.push('');

    // Section 3: Access & Credentials Register
    lines.push(sectionDivider);
    lines.push('  3. ACCESS & CREDENTIALS REGISTER');
    lines.push(sectionDivider);
    lines.push('');
    lines.push('  IMPORTANT: This document does not contain passwords.');
    lines.push('  Credentials should be transferred securely and separately.');
    lines.push('');

    const validAccess = accessItems.filter((a) => a.platform.trim());
    if (validAccess.length > 0) {
      validAccess.forEach((a, i) => {
        lines.push(`  ${i + 1}. ${a.platform}`);
        lines.push(`     Access Level:    ${a.accessLevel}`);
        lines.push(`     Transfer Status: ${a.transferStatus}`);
        if (a.notes) {
          lines.push(`     Notes:           ${a.notes}`);
        }
        lines.push('');
      });
    } else {
      lines.push('  No access items listed.');
      lines.push('');
    }

    // Section 4: Hosting & Infrastructure
    lines.push(sectionDivider);
    lines.push('  4. HOSTING & INFRASTRUCTURE');
    lines.push(sectionDivider);
    lines.push('');
    if (hostingProvider) {
      lines.push(`  Hosting Provider:  ${hostingProvider}`);
      if (hostingRenewalDate) {
        lines.push(`  Renewal Date:      ${formatDateAU(hostingRenewalDate)}`);
      }
      if (hostingMonthlyCost) {
        lines.push(`  Monthly Cost:      $${hostingMonthlyCost}`);
      }
    } else {
      lines.push('  No hosting details provided.');
    }
    lines.push('');

    // Section 5: Warranty & Support Terms
    lines.push(sectionDivider);
    lines.push('  5. WARRANTY & SUPPORT TERMS');
    lines.push(sectionDivider);
    lines.push('');
    if (warrantyPeriod === 'none') {
      lines.push('  No warranty or support period included.');
    } else {
      lines.push(`  Support Period:  ${WARRANTY_LABELS[warrantyPeriod]} from the date of this document`);
      lines.push('');
      if (supportInclusions.length > 0) {
        lines.push('  What is included during the support period:');
        supportInclusions.forEach((s) => {
          lines.push(`    [x] ${s}`);
        });
      }
      lines.push('');
      const excluded = SUPPORT_OPTIONS.filter((o) => !supportInclusions.includes(o));
      if (excluded.length > 0) {
        lines.push('  Not included:');
        excluded.forEach((s) => {
          lines.push(`    [ ] ${s}`);
        });
      }
    }
    lines.push('');

    // Section 6: Maintenance Recommendations
    lines.push(sectionDivider);
    lines.push('  6. MAINTENANCE RECOMMENDATIONS');
    lines.push(sectionDivider);
    lines.push('');
    if (maintenanceNotes.trim()) {
      maintenanceNotes.split('\n').forEach((line) => {
        lines.push(`  ${line}`);
      });
    } else {
      lines.push('  No specific maintenance recommendations provided.');
    }
    lines.push('');

    // Third-Party Contacts
    const validContacts = thirdPartyContacts.filter((c) => c.service.trim());
    if (validContacts.length > 0) {
      lines.push('  Key Contacts for Third-Party Services:');
      lines.push('');
      validContacts.forEach((c, i) => {
        lines.push(`  ${i + 1}. ${c.service}`);
        lines.push(`     Contact: ${c.contact}`);
        if (c.notes) {
          lines.push(`     Notes:   ${c.notes}`);
        }
      });
      lines.push('');
    }

    // Section 7: Next Steps / Recommendations
    lines.push(sectionDivider);
    lines.push('  7. NEXT STEPS');
    lines.push(sectionDivider);
    lines.push('');
    lines.push('  The client should complete the following after receiving');
    lines.push('  this handover document:');
    lines.push('');
    lines.push('  [ ] Review all deliverables listed in Section 2');
    lines.push('  [ ] Verify all access credentials have been transferred');
    lines.push('  [ ] Schedule a walkthrough session if needed');
    lines.push('  [ ] Confirm acceptance in writing');
    lines.push('  [ ] Process final payment');
    lines.push('');

    // Section 8: Sign-off
    lines.push(sectionDivider);
    lines.push('  8. SIGN-OFF');
    lines.push(sectionDivider);
    lines.push('');
    lines.push('  By signing below, both parties confirm that all deliverables');
    lines.push('  have been handed over and the project is formally complete.');
    lines.push('');
    lines.push('');
    lines.push(`  Contractor:  ${yourName || '[Your Name / Business Name]'}`);
    lines.push('');
    lines.push('  Signature:   ________________________________');
    lines.push('');
    lines.push('  Date:        ________________________________');
    lines.push('');
    lines.push('');
    lines.push(`  Client:      ${clientName || '[Client Name]'}`);
    if (clientCompany) {
      lines.push(`  Company:     ${clientCompany}`);
    }
    lines.push('');
    lines.push('  Signature:   ________________________________');
    lines.push('');
    lines.push('  Date:        ________________________________');
    lines.push('');
    lines.push('');
    lines.push(divider);
    lines.push(`  Document No: ${docNumber}`);
    lines.push(`  Issued: ${formatDateAU(todayISO())}`);
    lines.push(divider);
    lines.push('');
    lines.push('Generated by InvoiceFlow — invoiceflow.au/tools/project-handover-generator');

    return lines.join('\n');
  }, [
    docNumber, projectName, projectType, startDate, handoverDate,
    yourName, clientName, clientCompany,
    deliverables, accessItems,
    hostingProvider, hostingRenewalDate, hostingMonthlyCost,
    warrantyPeriod, supportInclusions, maintenanceNotes, thirdPartyContacts,
  ]);

  /* ── Copy to Clipboard ── */
  const handleCopy = () => {
    navigator.clipboard.writeText(generatedText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  /* ── Styles ── */
  const inputClass =
    'w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500/40 focus:border-teal-500/40 transition-all text-sm';
  const labelClass = 'block text-xs font-medium text-slate-400 mb-1.5';

  const stepBtnClass = (idx: number) =>
    `text-sm px-4 py-2 rounded-lg transition-all ${
      activeStep === idx
        ? 'bg-gradient-to-r from-teal-400 to-cyan-500 text-white font-medium'
        : 'bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
    }`;

  return (
    <div className="space-y-6">
      {/* Step Navigation */}
      <div className="glass rounded-2xl p-4">
        <div className="flex flex-wrap gap-2">
          {steps.map((s, i) => (
            <button key={s} onClick={() => setActiveStep(i)} className={stepBtnClass(i)}>
              <span className="hidden sm:inline">{s}</span>
              <span className="sm:hidden">{i + 1}. {s.split(' ')[0]}</span>
            </button>
          ))}
        </div>
        <div className="mt-3 flex items-center gap-2">
          <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-teal-400 to-cyan-500 rounded-full transition-all duration-500"
              style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
            />
          </div>
          <span className="text-xs text-slate-500">{activeStep + 1}/{steps.length}</span>
        </div>
      </div>

      {/* ── Step 1: Project Overview ── */}
      {activeStep === 0 && (
        <div className="glass rounded-2xl p-6 sm:p-8 space-y-6">
          <h2 className="text-xl font-bold text-white heading-font">Project Overview</h2>
          <p className="text-sm text-slate-400">
            Enter the basic project details. This information forms the header of your handover document.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="sm:col-span-2">
              <label className={labelClass}>Project Name</label>
              <input
                type="text"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                className={inputClass}
                placeholder="e.g. Website Redesign for Acme Solutions"
              />
            </div>
            <div>
              <label className={labelClass}>Client Name</label>
              <input
                type="text"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                className={inputClass}
                placeholder="e.g. James Chen"
              />
            </div>
            <div>
              <label className={labelClass}>Client Company</label>
              <input
                type="text"
                value={clientCompany}
                onChange={(e) => setClientCompany(e.target.value)}
                className={inputClass}
                placeholder="e.g. Acme Solutions Pty Ltd"
              />
            </div>
            <div>
              <label className={labelClass}>Your Name / Business Name</label>
              <input
                type="text"
                value={yourName}
                onChange={(e) => setYourName(e.target.value)}
                className={inputClass}
                placeholder="e.g. Sarah Mitchell Design"
              />
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
            <div>
              <label className={labelClass}>Project Start Date</label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>Handover Date</label>
              <input
                type="date"
                value={handoverDate}
                onChange={(e) => setHandoverDate(e.target.value)}
                className={inputClass}
              />
            </div>
          </div>

          <div className="flex justify-end">
            <button
              onClick={() => setActiveStep(1)}
              className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-teal-400 to-cyan-500 text-white text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Next: Deliverables &amp; Assets
            </button>
          </div>
        </div>
      )}

      {/* ── Step 2: Deliverables & Assets ── */}
      {activeStep === 1 && (
        <div className="glass rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-white heading-font">Deliverables &amp; Assets</h2>
            <div className="flex gap-2">
              <button
                onClick={loadDeliverablePresets}
                className="text-xs px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-all"
              >
                Load {projectType.split('/')[0]} Presets
              </button>
              <button
                onClick={addDeliverable}
                className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-gradient-to-r from-teal-400 to-cyan-500 text-white hover:opacity-90 transition-opacity"
              >
                + Add
              </button>
            </div>
          </div>
          <p className="text-sm text-slate-400">
            List every deliverable you are handing over. Be specific about formats and where the client can find them.
          </p>

          <div className="space-y-3">
            {deliverables.map((d, idx) => (
              <div key={d.id} className="bg-white/5 rounded-xl p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-teal-400/20 to-cyan-500/20 border border-teal-500/30 flex items-center justify-center text-xs font-bold text-teal-400 shrink-0">
                      {idx + 1}
                    </div>
                    <span className="text-xs font-medium text-slate-500">Deliverable {idx + 1}</span>
                  </div>
                  {deliverables.length > 1 && (
                    <button
                      onClick={() => removeDeliverable(d.id)}
                      className="text-slate-500 hover:text-rose-400 transition-colors text-xs"
                    >
                      Remove
                    </button>
                  )}
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <label className={labelClass}>Deliverable Name</label>
                    <input
                      type="text"
                      value={d.name}
                      onChange={(e) => updateDeliverable(d.id, 'name', e.target.value)}
                      className={inputClass}
                      placeholder="e.g. Source code"
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Format / Type</label>
                    <input
                      type="text"
                      value={d.format}
                      onChange={(e) => updateDeliverable(d.id, 'format', e.target.value)}
                      className={inputClass}
                      placeholder="e.g. Figma file, React codebase"
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Description (short)</label>
                    <input
                      type="text"
                      value={d.description}
                      onChange={(e) => updateDeliverable(d.id, 'description', e.target.value)}
                      className={inputClass}
                      placeholder="e.g. Complete Next.js application with all pages"
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Location / URL</label>
                    <input
                      type="text"
                      value={d.location}
                      onChange={(e) => updateDeliverable(d.id, 'location', e.target.value)}
                      className={inputClass}
                      placeholder="e.g. github.com/project or Google Drive link"
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Status</label>
                    <select
                      value={d.status}
                      onChange={(e) => updateDeliverable(d.id, 'status', e.target.value)}
                      className={inputClass}
                    >
                      <option value="Complete" className="bg-slate-800">Complete</option>
                      <option value="Pending minor revision" className="bg-slate-800">Pending minor revision</option>
                      <option value="N/A" className="bg-slate-800">N/A</option>
                    </select>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={addDeliverable}
            className="w-full py-3 rounded-xl border border-dashed border-white/10 text-sm text-slate-400 hover:text-teal-400 hover:border-teal-500/30 transition-all"
          >
            + Add Another Deliverable
          </button>

          <div className="bg-white/5 rounded-xl p-4 flex items-center justify-between">
            <span className="text-sm text-slate-400">Total Deliverables</span>
            <span className="text-lg font-bold text-white">{deliverables.filter((d) => d.name.trim()).length}</span>
          </div>

          <div className="flex justify-between">
            <button
              onClick={() => setActiveStep(0)}
              className="px-5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-white/10 transition-all"
            >
              Back
            </button>
            <button
              onClick={() => setActiveStep(2)}
              className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-teal-400 to-cyan-500 text-white text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Next: Access &amp; Credentials
            </button>
          </div>
        </div>
      )}

      {/* ── Step 3: Access & Credentials ── */}
      {activeStep === 2 && (
        <div className="glass rounded-2xl p-6 sm:p-8 space-y-6">
          <h2 className="text-xl font-bold text-white heading-font">Access &amp; Credentials</h2>

          {/* Security Notice */}
          <div className="bg-amber-500/5 border border-amber-500/20 rounded-xl p-4">
            <p className="text-sm text-amber-400 font-medium mb-1">Security Notice</p>
            <p className="text-xs text-slate-400">
              Never include actual passwords in this document. Use placeholder descriptions instead
              (e.g. &quot;Shared via LastPass&quot; or &quot;Sent separately via secure channel&quot;).
              Transfer credentials through a password manager or encrypted channel.
            </p>
          </div>

          <div className="space-y-3">
            {accessItems.map((a, idx) => (
              <div key={a.id} className="bg-white/5 rounded-xl p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-slate-500">Access Item {idx + 1}</span>
                  {accessItems.length > 1 && (
                    <button
                      onClick={() => removeAccessItem(a.id)}
                      className="text-slate-500 hover:text-rose-400 transition-colors text-xs"
                    >
                      Remove
                    </button>
                  )}
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <label className={labelClass}>Platform / Service</label>
                    <input
                      type="text"
                      value={a.platform}
                      onChange={(e) => updateAccessItem(a.id, 'platform', e.target.value)}
                      className={inputClass}
                      placeholder="e.g. Hosting - Vercel, Domain registrar"
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Access Level</label>
                    <select
                      value={a.accessLevel}
                      onChange={(e) => updateAccessItem(a.id, 'accessLevel', e.target.value)}
                      className={inputClass}
                    >
                      <option value="Owner" className="bg-slate-800">Owner</option>
                      <option value="Admin" className="bg-slate-800">Admin</option>
                      <option value="Editor" className="bg-slate-800">Editor</option>
                      <option value="Viewer" className="bg-slate-800">Viewer</option>
                    </select>
                  </div>
                  <div>
                    <label className={labelClass}>Transfer Status</label>
                    <select
                      value={a.transferStatus}
                      onChange={(e) => updateAccessItem(a.id, 'transferStatus', e.target.value)}
                      className={inputClass}
                    >
                      <option value="Transferred" className="bg-slate-800">Transferred</option>
                      <option value="Pending transfer" className="bg-slate-800">Pending transfer</option>
                      <option value="Not applicable" className="bg-slate-800">Not applicable</option>
                    </select>
                  </div>
                  <div>
                    <label className={labelClass}>Notes</label>
                    <input
                      type="text"
                      value={a.notes}
                      onChange={(e) => updateAccessItem(a.id, 'notes', e.target.value)}
                      className={inputClass}
                      placeholder="e.g. Credentials shared via LastPass"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={addAccessItem}
            className="w-full py-3 rounded-xl border border-dashed border-white/10 text-sm text-slate-400 hover:text-teal-400 hover:border-teal-500/30 transition-all"
          >
            + Add Access Item
          </button>

          {/* Hosting Details */}
          <div className="border-t border-white/5 pt-6">
            <h3 className="text-white font-semibold text-sm mb-4">Hosting Details</h3>
            <div className="grid sm:grid-cols-3 gap-4">
              <div>
                <label className={labelClass}>Hosting Provider</label>
                <input
                  type="text"
                  value={hostingProvider}
                  onChange={(e) => setHostingProvider(e.target.value)}
                  className={inputClass}
                  placeholder="e.g. Vercel, AWS, Netlify"
                />
              </div>
              <div>
                <label className={labelClass}>Renewal Date (optional)</label>
                <input
                  type="date"
                  value={hostingRenewalDate}
                  onChange={(e) => setHostingRenewalDate(e.target.value)}
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>Monthly Cost (optional)</label>
                <input
                  type="number"
                  value={hostingMonthlyCost}
                  onChange={(e) => setHostingMonthlyCost(e.target.value)}
                  className={inputClass}
                  placeholder="e.g. 20"
                  min="0"
                  step="1"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-between">
            <button
              onClick={() => setActiveStep(1)}
              className="px-5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-white/10 transition-all"
            >
              Back
            </button>
            <button
              onClick={() => setActiveStep(3)}
              className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-teal-400 to-cyan-500 text-white text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Next: Maintenance &amp; Support
            </button>
          </div>
        </div>
      )}

      {/* ── Step 4: Maintenance & Support ── */}
      {activeStep === 3 && (
        <div className="glass rounded-2xl p-6 sm:p-8 space-y-6">
          <h2 className="text-xl font-bold text-white heading-font">Maintenance &amp; Support</h2>
          <p className="text-sm text-slate-400">
            Define what support you are offering after handover, and include any ongoing maintenance
            recommendations for the client.
          </p>

          <div>
            <label className={labelClass}>Warranty / Support Period</label>
            <select
              value={warrantyPeriod}
              onChange={(e) => setWarrantyPeriod(e.target.value as WarrantyPeriod)}
              className={inputClass}
            >
              <option value="none" className="bg-slate-800">None</option>
              <option value="7-days" className="bg-slate-800">7 days</option>
              <option value="14-days" className="bg-slate-800">14 days</option>
              <option value="30-days" className="bg-slate-800">30 days (recommended)</option>
              <option value="60-days" className="bg-slate-800">60 days</option>
              <option value="90-days" className="bg-slate-800">90 days</option>
            </select>
          </div>

          {/* Support Inclusions */}
          <div>
            <label className={labelClass}>What is included in support?</label>
            <div className="grid sm:grid-cols-2 gap-2 mt-1">
              {SUPPORT_OPTIONS.map((option) => (
                <button
                  key={option}
                  onClick={() => toggleSupport(option)}
                  className={`text-left text-sm px-4 py-3 rounded-xl border transition-all ${
                    supportInclusions.includes(option)
                      ? 'bg-teal-400/10 border-teal-400/30 text-teal-400'
                      : 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span className="mr-2">{supportInclusions.includes(option) ? '[x]' : '[ ]'}</span>
                  {option}
                </button>
              ))}
            </div>
          </div>

          {/* Maintenance Recommendations */}
          <div>
            <label className={labelClass}>Ongoing Maintenance Recommendations</label>
            <textarea
              value={maintenanceNotes}
              onChange={(e) => setMaintenanceNotes(e.target.value)}
              className={`${inputClass} min-h-[100px] resize-y`}
              placeholder="e.g. Update WordPress plugins monthly. Renew SSL certificate before expiry. Run security scans quarterly. Consider upgrading hosting plan if traffic exceeds 50k visits/month."
              rows={4}
            />
          </div>

          {/* Third-Party Contacts */}
          <div className="border-t border-white/5 pt-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white font-semibold text-sm">Key Contacts for Third-Party Services</h3>
              <button
                onClick={addThirdPartyContact}
                className="text-xs px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-all"
              >
                + Add Contact
              </button>
            </div>

            {thirdPartyContacts.length === 0 && (
              <div className="bg-white/5 rounded-xl p-4 text-center">
                <p className="text-sm text-slate-500">
                  No third-party contacts added. Click &quot;+ Add Contact&quot; if the client needs
                  contact details for hosting, domain, or other services.
                </p>
              </div>
            )}

            <div className="space-y-3">
              {thirdPartyContacts.map((c, idx) => (
                <div key={c.id} className="bg-white/5 rounded-xl p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-slate-500">Contact {idx + 1}</span>
                    <button
                      onClick={() => removeThirdPartyContact(c.id)}
                      className="text-slate-500 hover:text-rose-400 transition-colors text-xs"
                    >
                      Remove
                    </button>
                  </div>
                  <div className="grid sm:grid-cols-3 gap-3">
                    <div>
                      <label className={labelClass}>Service Name</label>
                      <input
                        type="text"
                        value={c.service}
                        onChange={(e) => updateThirdPartyContact(c.id, 'service', e.target.value)}
                        className={inputClass}
                        placeholder="e.g. Domain registrar"
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Contact</label>
                      <input
                        type="text"
                        value={c.contact}
                        onChange={(e) => updateThirdPartyContact(c.id, 'contact', e.target.value)}
                        className={inputClass}
                        placeholder="e.g. support@namecheap.com"
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Notes</label>
                      <input
                        type="text"
                        value={c.notes}
                        onChange={(e) => updateThirdPartyContact(c.id, 'notes', e.target.value)}
                        className={inputClass}
                        placeholder="e.g. Account under client email"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-between">
            <button
              onClick={() => setActiveStep(2)}
              className="px-5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-white/10 transition-all"
            >
              Back
            </button>
            <button
              onClick={() => setActiveStep(4)}
              className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-teal-400 to-cyan-500 text-white text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Generate Handover Document
            </button>
          </div>
        </div>
      )}

      {/* ── Step 5: Generated Document ── */}
      {activeStep === 4 && (
        <div className="space-y-6">
          {/* Document Preview */}
          <div className="glass rounded-2xl p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-white heading-font">Handover Document Preview</h2>
              <span className="text-xs px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 font-medium">
                {docNumber}
              </span>
            </div>

            {/* Visual Preview */}
            <div className="bg-slate-900/50 rounded-2xl border border-white/10 overflow-hidden">
              {/* Document Header */}
              <div className="bg-gradient-to-r from-teal-400/10 to-cyan-500/10 border-b border-white/10 p-6 sm:p-8">
                <p className="text-xs text-teal-400 uppercase tracking-widest mb-2">Project Handover Document</p>
                <h3 className="text-2xl font-bold text-white heading-font">
                  {projectName || 'Untitled Project'}
                </h3>
                <p className="text-slate-400 mt-1">
                  Prepared for {clientName || 'Client Name'}
                  {clientCompany ? ` at ${clientCompany}` : ''} &middot; {projectType}
                </p>
                <p className="text-xs text-slate-500 mt-2">
                  {startDate ? formatDateAU(startDate) : 'Start Date'} &mdash; {handoverDate ? formatDateAU(handoverDate) : 'Handover Date'}
                </p>
              </div>

              <div className="p-6 sm:p-8 space-y-8">
                {/* Deliverables Table */}
                <div>
                  <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-teal-500/20 text-teal-400 text-xs flex items-center justify-center font-bold">1</span>
                    Deliverables Inventory
                  </h4>
                  <div className="space-y-2">
                    {deliverables.filter((d) => d.name.trim()).map((d, i) => (
                      <div key={d.id} className="bg-white/5 rounded-lg p-3">
                        <div className="flex items-center justify-between mb-1">
                          <div className="flex items-center gap-2">
                            <span className="text-teal-400 font-bold text-sm">{i + 1}.</span>
                            <p className="text-white text-sm font-medium">{d.name}</p>
                          </div>
                          <span className={`text-xs px-2 py-0.5 rounded-full ${
                            d.status === 'Complete'
                              ? 'bg-emerald-500/10 text-emerald-400'
                              : d.status === 'Pending minor revision'
                              ? 'bg-amber-500/10 text-amber-400'
                              : 'bg-white/5 text-slate-500'
                          }`}>
                            {d.status}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-500">
                          {d.format && <span>Format: {d.format}</span>}
                          {d.location && <span>Location: {d.location}</span>}
                          {d.description && <span>{d.description}</span>}
                        </div>
                      </div>
                    ))}
                    {deliverables.filter((d) => d.name.trim()).length === 0 && (
                      <p className="text-sm text-slate-500 italic">No deliverables added yet.</p>
                    )}
                  </div>
                </div>

                {/* Access Register */}
                <div>
                  <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-teal-500/20 text-teal-400 text-xs flex items-center justify-center font-bold">2</span>
                    Access &amp; Credentials Register
                  </h4>
                  <div className="space-y-2">
                    {accessItems.filter((a) => a.platform.trim()).map((a, i) => (
                      <div key={a.id} className="bg-white/5 rounded-lg p-3 flex items-center justify-between">
                        <div>
                          <p className="text-white text-sm font-medium">{a.platform}</p>
                          <p className="text-xs text-slate-500">
                            {a.accessLevel} &middot; {a.notes || 'No notes'}
                          </p>
                        </div>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${
                          a.transferStatus === 'Transferred'
                            ? 'bg-emerald-500/10 text-emerald-400'
                            : a.transferStatus === 'Pending transfer'
                            ? 'bg-amber-500/10 text-amber-400'
                            : 'bg-white/5 text-slate-500'
                        }`}>
                          {a.transferStatus}
                        </span>
                      </div>
                    ))}
                    {accessItems.filter((a) => a.platform.trim()).length === 0 && (
                      <p className="text-sm text-slate-500 italic">No access items listed.</p>
                    )}
                  </div>
                </div>

                {/* Hosting */}
                {hostingProvider && (
                  <div>
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-teal-500/20 text-teal-400 text-xs flex items-center justify-center font-bold">3</span>
                      Hosting &amp; Infrastructure
                    </h4>
                    <div className="grid sm:grid-cols-3 gap-3">
                      <div className="bg-white/5 rounded-lg p-3">
                        <p className="text-xs text-slate-500">Provider</p>
                        <p className="text-white font-medium text-sm">{hostingProvider}</p>
                      </div>
                      {hostingRenewalDate && (
                        <div className="bg-white/5 rounded-lg p-3">
                          <p className="text-xs text-slate-500">Renewal Date</p>
                          <p className="text-white font-medium text-sm">{formatDateAU(hostingRenewalDate)}</p>
                        </div>
                      )}
                      {hostingMonthlyCost && (
                        <div className="bg-white/5 rounded-lg p-3">
                          <p className="text-xs text-slate-500">Monthly Cost</p>
                          <p className="text-white font-medium text-sm">${hostingMonthlyCost}/month</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Support Terms */}
                <div>
                  <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-teal-500/20 text-teal-400 text-xs flex items-center justify-center font-bold">{hostingProvider ? '4' : '3'}</span>
                    Warranty &amp; Support Terms
                  </h4>
                  {warrantyPeriod === 'none' ? (
                    <div className="bg-white/5 rounded-lg p-4 text-sm text-slate-400">
                      No warranty or support period included with this handover.
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <div className="bg-gradient-to-r from-teal-400/10 to-cyan-500/10 border border-teal-400/20 rounded-lg p-4">
                        <p className="text-teal-400 font-medium text-sm">
                          {WARRANTY_LABELS[warrantyPeriod]} support period from handover date
                        </p>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {SUPPORT_OPTIONS.map((option) => (
                          <div key={option} className={`rounded-lg p-3 text-sm ${
                            supportInclusions.includes(option)
                              ? 'bg-emerald-500/5 border border-emerald-500/15 text-emerald-400'
                              : 'bg-white/5 border border-white/5 text-slate-500 line-through'
                          }`}>
                            <span className="mr-2">{supportInclusions.includes(option) ? '[x]' : '[ ]'}</span>
                            {option}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Maintenance */}
                {maintenanceNotes.trim() && (
                  <div>
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-teal-500/20 text-teal-400 text-xs flex items-center justify-center font-bold">{hostingProvider ? '5' : '4'}</span>
                      Maintenance Recommendations
                    </h4>
                    <div className="bg-white/5 rounded-lg p-4 text-sm text-slate-300 whitespace-pre-wrap">
                      {maintenanceNotes}
                    </div>
                  </div>
                )}

                {/* Third-Party Contacts */}
                {thirdPartyContacts.filter((c) => c.service.trim()).length > 0 && (
                  <div>
                    <h4 className="text-white font-semibold mb-3">Third-Party Service Contacts</h4>
                    <div className="space-y-2">
                      {thirdPartyContacts.filter((c) => c.service.trim()).map((c) => (
                        <div key={c.id} className="bg-white/5 rounded-lg p-3">
                          <p className="text-white text-sm font-medium">{c.service}</p>
                          <p className="text-xs text-slate-500">
                            {c.contact}{c.notes ? ` — ${c.notes}` : ''}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Sign-off */}
                <div className="border-t border-white/10 pt-6">
                  <h4 className="text-white font-semibold mb-4">Sign-off</h4>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="bg-white/5 rounded-lg p-4">
                      <p className="text-xs text-slate-500 mb-1">Contractor</p>
                      <p className="text-white text-sm font-medium">{yourName || '[Your Name]'}</p>
                      <div className="border-b border-white/10 mt-6 mb-1" />
                      <p className="text-xs text-slate-600">Signature / Date</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                      <p className="text-xs text-slate-500 mb-1">Client</p>
                      <p className="text-white text-sm font-medium">
                        {clientName || '[Client Name]'}
                        {clientCompany ? ` — ${clientCompany}` : ''}
                      </p>
                      <div className="border-b border-white/10 mt-6 mb-1" />
                      <p className="text-xs text-slate-600">Signature / Date</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Copy Button */}
            <div className="flex justify-center">
              <button
                onClick={handleCopy}
                className="bg-gradient-to-r from-teal-400 to-cyan-500 text-white font-semibold rounded-xl px-8 py-4 hover:opacity-90 transition-opacity"
              >
                {copied ? 'Copied to Clipboard!' : 'Copy to Clipboard'}
              </button>
            </div>
          </div>

          {/* What To Do Next Checklist */}
          <div className="glass rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white heading-font mb-4">What To Do Next</h3>
            <p className="text-sm text-slate-400 mb-4">
              Share this checklist with your client alongside the handover document.
            </p>
            <div className="space-y-2">
              {[
                'Review all deliverables listed in the document',
                'Verify all access credentials have been transferred',
                'Schedule a walkthrough session if needed',
                'Confirm acceptance in writing',
                'Process final payment',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-white/5 rounded-xl p-3">
                  <div className="w-6 h-6 rounded-lg border border-white/10 flex items-center justify-center text-xs text-slate-500 flex-shrink-0">
                    {i + 1}
                  </div>
                  <span className="text-sm text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Important Notes */}
          <div className="bg-amber-500/5 border border-amber-500/20 rounded-2xl p-6">
            <h4 className="text-amber-400 font-semibold mb-2">Important Notes</h4>
            <ul className="text-sm text-slate-400 space-y-2">
              <li>This is a professional handover template, not legal advice. Consider having a lawyer review for high-value projects.</li>
              <li>Ensure both parties <strong className="text-white">sign and date</strong> the document to confirm acceptance.</li>
              <li>Keep a copy with your project files. The ATO requires business records for <strong className="text-white">at least 5 years</strong>.</li>
              <li>Never include actual passwords in handover documents. Transfer credentials through a secure channel.</li>
              <li>The warranty period covers defects only. New features or scope changes should be quoted separately.</li>
            </ul>
          </div>

          {/* Related Tools */}
          <div className="glass rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white heading-font mb-4">Related Tools</h3>
            <div className="grid sm:grid-cols-3 gap-3">
              <a
                href="/tools/project-completion-certificate"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-500/30 rounded-xl p-4 transition-all group"
              >
                <p className="text-white font-medium text-sm group-hover:text-teal-400 transition-colors">
                  Project Completion Certificate
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Generate a formal certificate of project completion
                </p>
              </a>
              <a
                href="/tools/invoice-generator"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-500/30 rounded-xl p-4 transition-all group"
              >
                <p className="text-white font-medium text-sm group-hover:text-teal-400 transition-colors">
                  Invoice Generator
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Create the final invoice for the remaining balance
                </p>
              </a>
              <a
                href="/tools/scope-of-work-generator"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-500/30 rounded-xl p-4 transition-all group"
              >
                <p className="text-white font-medium text-sm group-hover:text-teal-400 transition-colors">
                  Scope of Work Generator
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Define project scope and deliverables for your next project
                </p>
              </a>
            </div>
          </div>

          {/* Back to Edit */}
          <div className="flex justify-between">
            <button
              onClick={() => setActiveStep(3)}
              className="px-5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-white/10 transition-all"
            >
              Back to Edit
            </button>
            <button
              onClick={handleCopy}
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-teal-400 to-cyan-500 text-white text-sm font-medium hover:opacity-90 transition-opacity"
            >
              {copied ? 'Copied!' : 'Copy to Clipboard'}
            </button>
          </div>

          <div className="text-center">
            <p className="text-xs text-slate-500 max-w-2xl mx-auto">
              This tool generates project handover document templates for freelancers and sole traders.
              A handover document professionally closes a project by documenting all deliverables,
              access credentials, and support terms. Always retain signed copies for your business records.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
