'use client';

import { useState, useMemo } from 'react';

/* ---- Helpers ---- */

function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

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
  const d = new Date();
  return d.toISOString().split('T')[0];
}

function generateCertNumber(): string {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, '0');
  const seq = String(Math.floor(Math.random() * 9000) + 1000);
  return `PCC-${y}${m}-${seq}`;
}

/* ---- Types ---- */

type PaymentTerms = 'on-signoff' | 'net7' | 'net14' | 'net30';
type WarrantyPeriod = 'none' | '7-days' | '14-days' | '30-days' | '90-days';

interface Deliverable {
  name: string;
  description: string;
}

const PAYMENT_TERMS_LABELS: Record<PaymentTerms, string> = {
  'on-signoff': 'Due on sign-off',
  'net7': 'Net 7',
  'net14': 'Net 14',
  'net30': 'Net 30',
};

const WARRANTY_LABELS: Record<WarrantyPeriod, string> = {
  'none': 'None',
  '7-days': '7 days',
  '14-days': '14 days',
  '30-days': '30 days',
  '90-days': '90 days',
};

/* ---- Component ---- */

export default function ProjectCompletionCertificate() {
  // Freelancer details
  const [yourName, setYourName] = useState('');
  const [yourABN, setYourABN] = useState('');
  const [yourEmail, setYourEmail] = useState('');

  // Client details
  const [clientName, setClientName] = useState('');
  const [clientContact, setClientContact] = useState('');
  const [clientEmail, setClientEmail] = useState('');

  // Project details
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [completionDate, setCompletionDate] = useState(todayISO());

  // Deliverables
  const [deliverables, setDeliverables] = useState<Deliverable[]>([
    { name: '', description: '' },
  ]);

  // Financial
  const [projectValue, setProjectValue] = useState('');
  const [includeGST, setIncludeGST] = useState(true);
  const [amountPaid, setAmountPaid] = useState('');
  const [finalPaymentDue, setFinalPaymentDue] = useState('');
  const [paymentTerms, setPaymentTerms] = useState<PaymentTerms>('on-signoff');

  // Warranty & Certificate
  const [warrantyPeriod, setWarrantyPeriod] = useState<WarrantyPeriod>('30-days');
  const [certificateNumber, setCertificateNumber] = useState(generateCertNumber);

  // UI state
  const [generated, setGenerated] = useState(false);
  const [copied, setCopied] = useState(false);

  // Add deliverable
  const addDeliverable = () => {
    setDeliverables((prev) => [...prev, { name: '', description: '' }]);
  };

  // Remove deliverable
  const removeDeliverable = (index: number) => {
    if (deliverables.length <= 1) return;
    setDeliverables((prev) => prev.filter((_, i) => i !== index));
  };

  // Update deliverable
  const updateDeliverable = (index: number, field: keyof Deliverable, value: string) => {
    setDeliverables((prev) =>
      prev.map((d, i) => (i === index ? { ...d, [field]: value } : d))
    );
  };

  // Financial calculations
  const financials = useMemo(() => {
    const total = parseFloat(projectValue) || 0;
    const paid = parseFloat(amountPaid) || 0;
    const finalDue = parseFloat(finalPaymentDue) || Math.max(0, total - paid);
    const gstOnTotal = includeGST ? total * 0.1 : 0;
    const totalIncGST = total + gstOnTotal;
    const gstOnFinal = includeGST ? finalDue * 0.1 : 0;
    const finalIncGST = finalDue + gstOnFinal;

    return {
      total,
      paid,
      finalDue,
      gstOnTotal,
      totalIncGST,
      gstOnFinal,
      finalIncGST,
    };
  }, [projectValue, amountPaid, finalPaymentDue, includeGST]);

  // Auto-calculate final payment when project value or amount paid changes
  const effectiveFinalDue = finalPaymentDue
    ? parseFloat(finalPaymentDue) || 0
    : Math.max(0, financials.total - financials.paid);

  // Generate certificate text
  const generatedText = useMemo(() => {
    const divider = '════════════════════════════════════════════════════════════';
    const sectionDivider = '────────────────────────────────────────────────────────────';
    const lines: string[] = [];

    lines.push(divider);
    lines.push('');
    lines.push('              CERTIFICATE OF PROJECT COMPLETION');
    lines.push('');
    lines.push(divider);
    lines.push('');
    lines.push(`Certificate No:    ${certificateNumber}`);
    lines.push(`Date of Issue:     ${formatDateAU(todayISO())}`);
    lines.push('');
    lines.push(sectionDivider);
    lines.push('  PROJECT DETAILS');
    lines.push(sectionDivider);
    lines.push('');
    lines.push(`Project Name:      ${projectName || '[Project Name]'}`);
    if (projectDescription) {
      lines.push(`Description:       ${projectDescription}`);
    }
    lines.push(`Start Date:        ${startDate ? formatDateAU(startDate) : '[Start Date]'}`);
    lines.push(`Completion Date:   ${completionDate ? formatDateAU(completionDate) : '[Completion Date]'}`);
    lines.push('');

    lines.push(sectionDivider);
    lines.push('  PARTIES');
    lines.push(sectionDivider);
    lines.push('');
    lines.push('  Contractor / Freelancer:');
    lines.push(`    Name:          ${yourName || '[Your Name / Business Name]'}`);
    if (yourABN) {
      lines.push(`    ABN:           ${yourABN}`);
    }
    if (yourEmail) {
      lines.push(`    Email:         ${yourEmail}`);
    }
    lines.push('');
    lines.push('  Client:');
    lines.push(`    Name:          ${clientName || '[Client Name / Business Name]'}`);
    if (clientContact) {
      lines.push(`    Contact:       ${clientContact}`);
    }
    if (clientEmail) {
      lines.push(`    Email:         ${clientEmail}`);
    }
    lines.push('');

    lines.push(sectionDivider);
    lines.push('  DELIVERABLES COMPLETED');
    lines.push(sectionDivider);
    lines.push('');

    const validDeliverables = deliverables.filter((d) => d.name.trim());
    if (validDeliverables.length > 0) {
      validDeliverables.forEach((d, i) => {
        lines.push(`  [x]  ${i + 1}. ${d.name}`);
        if (d.description) {
          lines.push(`       ${d.description}`);
        }
      });
    } else {
      lines.push('  [x]  1. [Deliverable Name]');
    }
    lines.push('');
    lines.push(`  All ${validDeliverables.length || 1} deliverables have been completed and`);
    lines.push('  accepted by the client.');
    lines.push('');

    lines.push(sectionDivider);
    lines.push('  FINANCIAL SUMMARY');
    lines.push(sectionDivider);
    lines.push('');

    const total = financials.total;
    const paid = financials.paid;
    const finalDue = effectiveFinalDue;

    lines.push(`  Total Project Value:     ${formatCurrency(total)} (ex. GST)`);
    if (includeGST) {
      lines.push(`  GST (10%):               ${formatCurrency(total * 0.1)}`);
      lines.push(`  Total (inc. GST):        ${formatCurrency(total + total * 0.1)}`);
    }
    lines.push('');
    lines.push(`  Amount Already Paid:     ${formatCurrency(paid)}`);
    lines.push(`  Final Payment Due:       ${formatCurrency(finalDue)}`);
    if (includeGST && finalDue > 0) {
      lines.push(`  GST on Final Payment:    ${formatCurrency(finalDue * 0.1)}`);
      lines.push(`  Final Amount (inc. GST): ${formatCurrency(finalDue + finalDue * 0.1)}`);
    }
    lines.push(`  Payment Terms:           ${PAYMENT_TERMS_LABELS[paymentTerms]}`);
    lines.push('');

    if (warrantyPeriod !== 'none') {
      lines.push(sectionDivider);
      lines.push('  WARRANTY / SUPPORT PERIOD');
      lines.push(sectionDivider);
      lines.push('');
      lines.push(`  Duration:  ${WARRANTY_LABELS[warrantyPeriod]} from the date of this certificate`);
      lines.push('');
      lines.push('  During the warranty period, the contractor will address any');
      lines.push('  defects or bugs in the delivered work at no additional cost.');
      lines.push('  New features, enhancements, or changes beyond the original');
      lines.push('  scope are not covered under warranty and will be quoted');
      lines.push('  separately.');
      lines.push('');
    }

    lines.push(sectionDivider);
    lines.push('  SIGN-OFF');
    lines.push(sectionDivider);
    lines.push('');
    lines.push('  By signing below, both parties confirm that all deliverables');
    lines.push('  listed above have been completed to satisfaction and the');
    lines.push('  project is formally closed.');
    lines.push('');
    lines.push('');
    lines.push(`  Contractor: ${yourName || '[Your Name / Business Name]'}`);
    lines.push('');
    lines.push('  Signature:  ________________________________');
    lines.push('');
    lines.push('  Date:       ________________________________');
    lines.push('');
    lines.push('');
    lines.push(`  Client:     ${clientName || '[Client Name / Business Name]'}`);
    if (clientContact) {
      lines.push(`  Attn:       ${clientContact}`);
    }
    lines.push('');
    lines.push('  Signature:  ________________________________');
    lines.push('');
    lines.push('  Date:       ________________________________');
    lines.push('');
    lines.push('');
    lines.push(divider);
    lines.push(`  Certificate No: ${certificateNumber}`);
    lines.push(`  Issued: ${formatDateAU(todayISO())}`);
    lines.push(divider);
    lines.push('');
    lines.push('Generated by InvoiceFlow — invoiceflow.au/tools/project-completion-certificate');

    return lines.join('\n');
  }, [
    yourName, yourABN, yourEmail,
    clientName, clientContact, clientEmail,
    projectName, projectDescription, startDate, completionDate,
    deliverables, financials, effectiveFinalDue, includeGST,
    paymentTerms, warrantyPeriod, certificateNumber,
  ]);

  const handleGenerate = () => setGenerated(true);

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const inputClass =
    'w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-slate-600 focus:outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/25 transition-all text-sm';
  const labelClass = 'block text-sm font-medium text-slate-300 mb-1.5';

  return (
    <div className="space-y-8">
      {/* Your Details */}
      <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
        <h3 className="text-lg font-bold text-white heading-font mb-6">Your Details</h3>
        <div className="grid sm:grid-cols-2 gap-5">
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
            <label className={labelClass}>ABN (optional)</label>
            <input
              type="text"
              value={yourABN}
              onChange={(e) => setYourABN(e.target.value)}
              className={inputClass}
              placeholder="e.g. 12 345 678 901"
            />
          </div>
          <div>
            <label className={labelClass}>Your Email</label>
            <input
              type="email"
              value={yourEmail}
              onChange={(e) => setYourEmail(e.target.value)}
              className={inputClass}
              placeholder="e.g. sarah@mitchelldesign.com.au"
            />
          </div>
        </div>
      </div>

      {/* Client Details */}
      <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
        <h3 className="text-lg font-bold text-white heading-font mb-6">Client Details</h3>
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className={labelClass}>Client Name / Business Name</label>
            <input
              type="text"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              className={inputClass}
              placeholder="e.g. Acme Solutions Pty Ltd"
            />
          </div>
          <div>
            <label className={labelClass}>Client Contact Name (optional)</label>
            <input
              type="text"
              value={clientContact}
              onChange={(e) => setClientContact(e.target.value)}
              className={inputClass}
              placeholder="e.g. James Chen"
            />
          </div>
          <div>
            <label className={labelClass}>Client Email (optional)</label>
            <input
              type="email"
              value={clientEmail}
              onChange={(e) => setClientEmail(e.target.value)}
              className={inputClass}
              placeholder="e.g. james@acmesolutions.com.au"
            />
          </div>
        </div>
      </div>

      {/* Project Details */}
      <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
        <h3 className="text-lg font-bold text-white heading-font mb-6">Project Details</h3>
        <div className="grid sm:grid-cols-2 gap-5">
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
          <div className="sm:col-span-2">
            <label className={labelClass}>Project Description</label>
            <textarea
              value={projectDescription}
              onChange={(e) => setProjectDescription(e.target.value)}
              className={`${inputClass} min-h-[80px] resize-y`}
              placeholder="e.g. Complete redesign and development of the company website including homepage, about, services, and contact pages with responsive design and CMS integration."
              rows={3}
            />
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
            <label className={labelClass}>Project Completion Date</label>
            <input
              type="date"
              value={completionDate}
              onChange={(e) => setCompletionDate(e.target.value)}
              className={inputClass}
            />
          </div>
        </div>
      </div>

      {/* Deliverables */}
      <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-bold text-white heading-font">Deliverables</h3>
          <span className="text-sm text-slate-400">
            {deliverables.filter((d) => d.name.trim()).length} item{deliverables.filter((d) => d.name.trim()).length !== 1 ? 's' : ''}
          </span>
        </div>

        <div className="space-y-3">
          {deliverables.map((deliverable, index) => (
            <div key={index} className="bg-white/5 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-teal-400/20 to-blue-500/20 border border-teal-500/30 flex items-center justify-center text-xs font-bold text-teal-400 mt-1 shrink-0">
                  {index + 1}
                </div>
                <div className="flex-1 space-y-3">
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1">Deliverable Name</label>
                    <input
                      type="text"
                      value={deliverable.name}
                      onChange={(e) => updateDeliverable(index, 'name', e.target.value)}
                      className={inputClass}
                      placeholder="e.g. Responsive homepage design and development"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1">Description (optional)</label>
                    <input
                      type="text"
                      value={deliverable.description}
                      onChange={(e) => updateDeliverable(index, 'description', e.target.value)}
                      className={inputClass}
                      placeholder="e.g. Fully responsive, mobile-first design with hero section, testimonials, and contact form"
                    />
                  </div>
                </div>
                {deliverables.length > 1 && (
                  <button
                    onClick={() => removeDeliverable(index)}
                    className="mt-1 w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-500 hover:text-rose-400 hover:border-rose-500/30 transition-all shrink-0"
                    title="Remove deliverable"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={addDeliverable}
          className="mt-4 w-full py-3 rounded-xl border border-dashed border-white/10 text-sm text-slate-400 hover:text-teal-400 hover:border-teal-500/30 transition-all"
        >
          + Add Deliverable
        </button>
      </div>

      {/* Financial Details */}
      <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
        <h3 className="text-lg font-bold text-white heading-font mb-6">Financial Details</h3>
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className={labelClass}>Total Project Value (AUD, ex. GST)</label>
            <input
              type="number"
              value={projectValue}
              onChange={(e) => setProjectValue(e.target.value)}
              className={inputClass}
              min="0"
              step="100"
              placeholder="e.g. 12000"
            />
          </div>
          <div>
            <label className={labelClass}>Amount Already Paid (AUD)</label>
            <input
              type="number"
              value={amountPaid}
              onChange={(e) => setAmountPaid(e.target.value)}
              className={inputClass}
              min="0"
              step="100"
              placeholder="e.g. 7200"
            />
          </div>
          <div>
            <label className={labelClass}>Final Payment Due (AUD, ex. GST)</label>
            <input
              type="number"
              value={finalPaymentDue}
              onChange={(e) => setFinalPaymentDue(e.target.value)}
              className={inputClass}
              min="0"
              step="100"
              placeholder={`Auto: ${formatCurrency(Math.max(0, (parseFloat(projectValue) || 0) - (parseFloat(amountPaid) || 0)))}`}
            />
            <p className="text-xs text-slate-500 mt-1">Leave blank to auto-calculate from total minus paid</p>
          </div>
          <div>
            <label className={labelClass}>Payment Terms (Final Payment)</label>
            <select
              value={paymentTerms}
              onChange={(e) => setPaymentTerms(e.target.value as PaymentTerms)}
              className={inputClass}
            >
              <option value="on-signoff" className="bg-slate-800">Due on sign-off</option>
              <option value="net7" className="bg-slate-800">Net 7</option>
              <option value="net14" className="bg-slate-800">Net 14</option>
              <option value="net30" className="bg-slate-800">Net 30</option>
            </select>
          </div>
        </div>

        {/* GST Toggle */}
        <div className="mt-6 flex items-center justify-between py-3 px-4 rounded-xl bg-white/5">
          <div>
            <span className="text-slate-300 text-sm">Include GST (10%)</span>
            <p className="text-xs text-slate-500 mt-0.5">Add 10% GST to financial summary</p>
          </div>
          <button
            onClick={() => setIncludeGST(!includeGST)}
            className={`relative w-14 h-7 rounded-full transition-all ${
              includeGST ? 'bg-gradient-to-r from-teal-500 to-blue-500' : 'bg-white/10'
            }`}
          >
            <div
              className={`absolute top-0.5 left-0.5 h-6 w-6 rounded-full bg-white shadow-md transition-transform ${
                includeGST ? 'translate-x-7' : 'translate-x-0'
              }`}
            />
          </button>
        </div>

        {/* Financial Summary */}
        {financials.total > 0 && (
          <div className="mt-6 bg-white/5 rounded-xl p-4 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-slate-400">Total Project Value (ex. GST)</span>
              <span className="text-white font-mono">{formatCurrency(financials.total)}</span>
            </div>
            {includeGST && (
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">GST (10%)</span>
                <span className="text-teal-400 font-mono">{formatCurrency(financials.gstOnTotal)}</span>
              </div>
            )}
            {includeGST && (
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Total (inc. GST)</span>
                <span className="text-white font-mono">{formatCurrency(financials.totalIncGST)}</span>
              </div>
            )}
            <div className="flex justify-between text-sm border-t border-white/10 pt-2">
              <span className="text-slate-400">Amount Paid</span>
              <span className="text-emerald-400 font-mono">{formatCurrency(financials.paid)}</span>
            </div>
            <div className="flex justify-between text-sm border-t border-white/10 pt-2">
              <span className="text-white font-semibold">Final Payment Due</span>
              <span className="text-white font-mono font-bold text-lg">
                {formatCurrency(includeGST ? effectiveFinalDue + effectiveFinalDue * 0.1 : effectiveFinalDue)}
              </span>
            </div>
            {includeGST && effectiveFinalDue > 0 && (
              <div className="flex justify-between text-xs">
                <span className="text-slate-500">({formatCurrency(effectiveFinalDue)} + {formatCurrency(effectiveFinalDue * 0.1)} GST)</span>
                <span className="text-slate-500">{PAYMENT_TERMS_LABELS[paymentTerms]}</span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Warranty & Certificate */}
      <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
        <h3 className="text-lg font-bold text-white heading-font mb-6">Warranty &amp; Certificate</h3>
        <div className="grid sm:grid-cols-2 gap-5">
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
              <option value="90-days" className="bg-slate-800">90 days</option>
            </select>
            <p className="text-xs text-slate-500 mt-1">
              Covers defects and bugs in delivered work. Does not cover new features or scope changes.
            </p>
          </div>
          <div>
            <label className={labelClass}>Certificate Number</label>
            <input
              type="text"
              value={certificateNumber}
              onChange={(e) => setCertificateNumber(e.target.value)}
              className={inputClass}
              placeholder="Auto-generated"
            />
            <p className="text-xs text-slate-500 mt-1">Auto-generated. Edit if you have your own numbering system.</p>
          </div>
        </div>
      </div>

      {/* Generate Button */}
      <div className="flex justify-center">
        <button
          onClick={handleGenerate}
          className="bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold rounded-xl px-8 py-4 hover:from-teal-400 hover:to-blue-400 transition-all text-lg"
        >
          Generate Completion Certificate
        </button>
      </div>

      {/* Generated Output */}
      {generated && (
        <>
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-white heading-font">Certificate Preview</h3>
              <span className="text-xs px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 font-medium">
                {certificateNumber}
              </span>
            </div>

            <div className="bg-slate-900/50 border border-white/10 rounded-xl p-6 font-mono text-sm whitespace-pre-wrap text-slate-300 leading-relaxed">
              {generatedText}
            </div>

            <div className="flex justify-center mt-6">
              <button
                onClick={handleCopy}
                className="bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold rounded-xl px-8 py-4 hover:from-teal-400 hover:to-blue-400 transition-all"
              >
                {copied ? 'Copied to Clipboard!' : 'Copy to Clipboard'}
              </button>
            </div>
          </div>

          {/* Important Notice */}
          <div className="bg-amber-500/5 border border-amber-500/20 rounded-2xl p-6">
            <h4 className="text-amber-400 font-semibold mb-2">Important Notes</h4>
            <ul className="text-sm text-slate-400 space-y-2">
              <li>This certificate is a professional document template for project sign-off. It does not constitute legal advice.</li>
              <li>Ensure both parties <strong className="text-white">sign and date</strong> the certificate to confirm acceptance.</li>
              <li>Keep a copy with your project files — the ATO requires business records to be retained for <strong className="text-white">at least 5 years</strong>.</li>
              <li>If GST is included, ensure your final invoice matches the financial summary on this certificate.</li>
              <li>The warranty period covers defects only — new work or scope changes should be quoted separately.</li>
            </ul>
          </div>

          {/* Related Tools */}
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white heading-font mb-4">Related Tools</h3>
            <div className="grid sm:grid-cols-3 gap-3">
              <a
                href="/tools/invoice-generator"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-500/30 rounded-xl p-4 transition-all group"
              >
                <p className="text-white font-medium text-sm group-hover:text-teal-400 transition-colors">
                  Invoice Generator
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Generate the final invoice for the remaining balance
                </p>
              </a>
              <a
                href="/tools/milestone-payment-calculator"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-500/30 rounded-xl p-4 transition-all group"
              >
                <p className="text-white font-medium text-sm group-hover:text-teal-400 transition-colors">
                  Milestone Payment Calculator
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Plan milestone payments for your next project
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
                  Define project scope and deliverables upfront
                </p>
              </a>
            </div>
          </div>

          <div className="text-center">
            <p className="text-xs text-slate-500 max-w-2xl mx-auto">
              This tool generates project completion certificate templates for Australian freelancers
              and sole traders. A completion certificate formally closes a project, confirms
              deliverables, and triggers the final payment. Always retain signed copies for your
              business records.
            </p>
          </div>
        </>
      )}
    </div>
  );
}
