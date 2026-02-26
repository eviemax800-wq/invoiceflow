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
  const day = String(d.getDate()).padStart(2, '0');
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const year = d.getFullYear();
  return `${day}/${month}/${year}`;
}

function todayISO(): string {
  const d = new Date();
  return d.toISOString().split('T')[0];
}

/* ---- Types ---- */

type DisputeType =
  | 'amount-disputed'
  | 'quality-questioned'
  | 'scope-disagreement'
  | 'services-not-received'
  | 'duplicate-invoice'
  | 'unauthorised-charges'
  | 'other';

type Tone = 'collaborative' | 'firm' | 'formal';

type Evidence =
  | 'signed-contract'
  | 'scope-document'
  | 'email-trail'
  | 'timesheet'
  | 'deliverable-receipts'
  | 'previous-approval';

type Resolution =
  | 'full-payment'
  | 'partial-settlement'
  | 'payment-plan'
  | 'mediation'
  | 'revised-scope';

const DISPUTE_TYPE_LABELS: Record<DisputeType, string> = {
  'amount-disputed': 'Amount disputed',
  'quality-questioned': 'Work quality questioned',
  'scope-disagreement': 'Scope disagreement',
  'services-not-received': 'Services not received (claimed)',
  'duplicate-invoice': 'Duplicate invoice (claimed)',
  'unauthorised-charges': 'Unauthorised charges (claimed)',
  other: 'Other',
};

const TONE_LABELS: Record<Tone, string> = {
  collaborative: 'Collaborative',
  firm: 'Firm but fair',
  formal: 'Formal / escalation',
};

const EVIDENCE_LABELS: Record<Evidence, string> = {
  'signed-contract': 'Signed contract/agreement',
  'scope-document': 'Scope of work document',
  'email-trail': 'Email/message trail',
  timesheet: 'Timesheet/work logs',
  'deliverable-receipts': 'Deliverable receipts',
  'previous-approval': 'Previous approval/sign-off',
};

const RESOLUTION_LABELS: Record<Resolution, string> = {
  'full-payment': 'Full payment requested',
  'partial-settlement': 'Partial settlement offered',
  'payment-plan': 'Payment plan proposed',
  mediation: 'Mediation suggested',
  'revised-scope': 'Revised scope/credit note',
};

/* ---- Component ---- */

export default function InvoiceDisputeResolution() {
  // Your details
  const [businessName, setBusinessName] = useState('');
  const [abn, setAbn] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');

  // Client details
  const [clientName, setClientName] = useState('');
  const [clientContactPerson, setClientContactPerson] = useState('');

  // Original invoice
  const [invoiceNumber, setInvoiceNumber] = useState('');
  const [invoiceDate, setInvoiceDate] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [originalAmount, setOriginalAmount] = useState(0);
  const [includesGST, setIncludesGST] = useState(true);
  const [workDescription, setWorkDescription] = useState('');

  // Dispute details
  const [disputeType, setDisputeType] = useState<DisputeType>('amount-disputed');
  const [clientReason, setClientReason] = useState('');
  const [disputeDate, setDisputeDate] = useState('');
  const [partialPayment, setPartialPayment] = useState(0);

  // Your response
  const [tone, setTone] = useState<Tone>('firm');
  const [evidence, setEvidence] = useState<Evidence[]>([]);
  const [resolution, setResolution] = useState<Resolution>('full-payment');
  const [responseDeadline, setResponseDeadline] = useState(14);

  // UI state
  const [generated, setGenerated] = useState(false);
  const [copied, setCopied] = useState(false);

  const toggleEvidence = (item: Evidence) => {
    setEvidence((prev) =>
      prev.includes(item) ? prev.filter((e) => e !== item) : [...prev, item]
    );
  };

  // Calculate outstanding amount
  const outstandingAmount = useMemo(() => {
    return Math.max(0, originalAmount - partialPayment);
  }, [originalAmount, partialPayment]);

  // Generate the response letter
  const generatedText = useMemo(() => {
    const sender = businessName || '[Your Business Name]';
    const abnLine = abn ? `ABN: ${abn}` : '';
    const email = contactEmail || '[your@email.com]';
    const phone = contactPhone || '[Your Phone]';
    const client = clientName || '[Client Name / Company]';
    const contactPerson = clientContactPerson || '';
    const inv = invoiceNumber || '[Invoice Number]';
    const invDate = invoiceDate ? formatDateAU(invoiceDate) : '[Invoice Date]';
    const due = dueDate ? formatDateAU(dueDate) : '[Due Date]';
    const dispDate = disputeDate ? formatDateAU(disputeDate) : '[Dispute Date]';
    const work = workDescription || '[description of services provided]';
    const today = formatDateAU(todayISO());

    // Calculate response deadline date
    const deadlineDate = new Date();
    deadlineDate.setDate(deadlineDate.getDate() + responseDeadline);
    const deadline = formatDateAU(deadlineDate.toISOString().split('T')[0]);

    // Tone-specific language
    const greeting =
      tone === 'formal'
        ? `Dear ${contactPerson || client},`
        : tone === 'collaborative'
          ? `Dear ${contactPerson || client},`
          : `Dear ${contactPerson || client},`;

    const openingLine =
      tone === 'collaborative'
        ? `Thank you for bringing your concerns regarding Invoice ${inv} to my attention. I value our working relationship and want to address your concerns thoroughly to reach a mutually satisfactory resolution.`
        : tone === 'firm'
          ? `I am writing in response to your dispute of Invoice ${inv}, raised on ${dispDate}. I take all client concerns seriously and have carefully reviewed the matter against our records and the original agreement.`
          : `This letter constitutes my formal response to the dispute raised on ${dispDate} regarding Invoice ${inv}. I have conducted a thorough review of all documentation pertaining to this engagement and present my findings below.`;

    // Dispute-specific response paragraph
    const disputeResponseMap: Record<DisputeType, string> = {
      'amount-disputed': `You have indicated that the invoiced amount of ${formatCurrency(originalAmount)} is disputed. I would like to clarify that this amount was calculated in accordance with the terms agreed upon at the commencement of this engagement. The amount reflects the full scope of work delivered as outlined below, and is consistent with the original quotation and/or agreed rate structure.`,
      'quality-questioned': `You have raised concerns regarding the quality of the work delivered under this engagement. I take quality very seriously and stand behind the standard of work provided. The deliverables were completed in accordance with the agreed specifications and were presented for review at the appropriate stages of the project.`,
      'scope-disagreement': `You have indicated that the invoiced work falls outside the agreed scope of engagement. I have carefully reviewed the original scope of work documentation and can confirm that all invoiced items fall within the parameters agreed upon at the commencement of the project. Where additional work was requested during the engagement, this was discussed and approved before being undertaken.`,
      'services-not-received': `You have claimed that the invoiced services were not received. I can confirm that all deliverables were completed and provided to you as per the agreed delivery method. I hold records of delivery confirmations and project communications that substantiate this.`,
      'duplicate-invoice': `You have indicated that Invoice ${inv} may be a duplicate of a previously issued and/or paid invoice. I have reviewed my records and can confirm that this invoice is unique and corresponds to a distinct body of work. No prior payment has been received for the services covered by this invoice.`,
      'unauthorised-charges': `You have indicated that the charges on Invoice ${inv} were not authorised. I would like to clarify that all work performed was carried out in accordance with our agreement and/or subsequent written instructions. The services invoiced were requested, approved, and delivered as documented in our correspondence.`,
      other: `You have raised concerns regarding Invoice ${inv}. I have carefully reviewed all relevant documentation and project records to provide a thorough response to the issues you have raised.`,
    };

    // Evidence paragraph
    let evidenceParagraph = '';
    if (evidence.length > 0) {
      const evidenceItems = evidence.map((e) => EVIDENCE_LABELS[e].toLowerCase());
      evidenceParagraph = `\nSUPPORTING DOCUMENTATION\n${'─'.repeat(50)}\n\nTo substantiate my position, I am able to provide the following supporting evidence:\n\n`;
      evidence.forEach((e, i) => {
        evidenceParagraph += `  ${i + 1}. ${EVIDENCE_LABELS[e]}\n`;
      });
      evidenceParagraph += `\nI am happy to provide copies of ${evidenceItems.length > 1 ? 'these documents' : 'this document'} upon request and encourage you to review them at your earliest convenience.\n`;
    }

    // Resolution paragraph
    const resolutionMap: Record<Resolution, string> = {
      'full-payment': `Having reviewed all documentation and evidence, I respectfully maintain that the full invoiced amount of ${formatCurrency(originalAmount)}${partialPayment > 0 ? ` (less the ${formatCurrency(partialPayment)} already received, leaving ${formatCurrency(outstandingAmount)} outstanding)` : ''} is due and payable. The work was completed in accordance with our agreement and delivered to the agreed standard.`,
      'partial-settlement': `In the interest of resolving this matter efficiently and maintaining our professional relationship, I am prepared to offer a partial settlement. I believe a fair resolution would be a revised payment amount that reflects the value delivered and addresses your concerns. I propose we discuss a specific settlement figure that works for both parties.`,
      'payment-plan': `I understand that the full amount may present a financial challenge at this time. In the interest of reaching a resolution, I am prepared to offer a structured payment plan for the outstanding amount of ${formatCurrency(outstandingAmount)}. I propose we agree on a schedule of regular payments over an appropriate timeframe.`,
      mediation: `Given the nature of this dispute, I believe it would be beneficial for both parties to engage a neutral mediator to facilitate a resolution. In Australia, community justice centres offer affordable mediation services, and I am happy to share the cost of this process. Mediation is typically faster and less costly than tribunal proceedings and allows both parties to have their concerns heard.`,
      'revised-scope': `After careful review, I acknowledge that there may be elements of this engagement that warrant further discussion. I am prepared to review the scope of work and, if appropriate, issue a credit note for any items that can be reasonably adjusted. I propose we schedule a brief meeting to walk through the invoice line by line and agree on a fair revised amount.`,
    };

    // Escalation paragraph based on tone
    const escalationMap: Record<Tone, string> = {
      collaborative: `I am confident that we can resolve this matter to our mutual satisfaction through open communication. If you would like to discuss this further, I am happy to arrange a phone call or meeting at your convenience.`,
      firm: `I trust that the evidence and documentation outlined above demonstrates that the invoiced amount is fair and properly owed. I expect this matter to be resolved within the timeframe specified below.`,
      formal: `Please be advised that if this matter is not resolved within the specified timeframe, I reserve the right to pursue formal recovery options, including but not limited to filing a claim with the relevant state civil and administrative tribunal (such as VCAT in Victoria, NCAT in NSW, or QCAT in Queensland). I would strongly prefer to avoid this outcome and encourage you to engage with this response constructively.`,
    };

    // Build the letter
    let text = '';
    text += `${sender}\n`;
    if (abnLine) text += `${abnLine}\n`;
    text += `${email}\n`;
    if (phone && phone !== '[Your Phone]') text += `${phone}\n`;
    text += `\n`;
    text += `${today}\n\n`;
    text += `${client}\n`;
    if (contactPerson) text += `Attention: ${contactPerson}\n`;
    text += `\n`;

    text += `RE: RESPONSE TO DISPUTE — INVOICE ${inv}\n`;
    text += `${'═'.repeat(50)}\n\n`;

    text += `${greeting}\n\n`;
    text += `${openingLine}\n\n`;

    text += `ORIGINAL INVOICE DETAILS\n`;
    text += `${'─'.repeat(50)}\n`;
    text += `Invoice Number:       ${inv}\n`;
    text += `Invoice Date:         ${invDate}\n`;
    text += `Due Date:             ${due}\n`;
    text += `Services Provided:    ${work}\n`;
    text += `Original Amount:      ${formatCurrency(originalAmount)}`;
    if (includesGST) text += ` (incl. GST)`;
    text += `\n`;
    if (partialPayment > 0) {
      text += `Partial Payment Received: ${formatCurrency(partialPayment)}\n`;
      text += `Outstanding Balance:  ${formatCurrency(outstandingAmount)}\n`;
    }
    text += `${'─'.repeat(50)}\n\n`;

    text += `DISPUTE RAISED\n`;
    text += `${'─'.repeat(50)}\n`;
    text += `Date of Dispute:      ${dispDate}\n`;
    text += `Dispute Type:         ${DISPUTE_TYPE_LABELS[disputeType]}\n`;
    if (clientReason) {
      text += `Client's Stated Reason:\n`;
      text += `"${clientReason}"\n`;
    }
    text += `${'─'.repeat(50)}\n\n`;

    text += `MY RESPONSE\n`;
    text += `${'─'.repeat(50)}\n\n`;
    text += `${disputeResponseMap[disputeType]}\n`;

    if (evidenceParagraph) {
      text += `\n${evidenceParagraph}`;
    }

    text += `\nPROPOSED RESOLUTION\n`;
    text += `${'─'.repeat(50)}\n\n`;
    text += `${resolutionMap[resolution]}\n\n`;

    text += `${escalationMap[tone]}\n\n`;

    text += `RESPONSE REQUESTED BY ${deadline}\n`;
    text += `${'─'.repeat(50)}\n\n`;
    text += `I kindly request your written response to this letter within ${responseDeadline} calendar days — that is, by ${deadline}. `;
    if (tone === 'formal') {
      text += `If no response is received by this date, I will proceed with formal recovery action without further notice.\n\n`;
    } else if (tone === 'firm') {
      text += `If we are unable to reach an agreement within this timeframe, I may need to consider formal recovery options including a letter of demand and/or tribunal proceedings.\n\n`;
    } else {
      text += `I believe we can resolve this matter constructively and look forward to hearing from you.\n\n`;
    }

    text += `Please direct all correspondence regarding this matter to ${email}.\n\n`;

    if (tone === 'formal') {
      text += `This letter has been retained for my records and may be presented as evidence in any future proceedings.\n\n`;
    }

    text += `Yours ${tone === 'collaborative' ? 'sincerely' : 'faithfully'},\n\n\n`;
    text += `${sender}\n`;
    if (abnLine) text += `${abnLine}\n`;

    return text;
  }, [
    businessName, abn, contactEmail, contactPhone,
    clientName, clientContactPerson,
    invoiceNumber, invoiceDate, dueDate, originalAmount, includesGST, workDescription,
    disputeType, clientReason, disputeDate, partialPayment,
    tone, evidence, resolution, responseDeadline,
    outstandingAmount,
  ]);

  const handleGenerate = () => setGenerated(true);

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const inputClass =
    'w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-slate-600 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/25 transition-all text-sm';
  const labelClass = 'block text-sm font-medium text-slate-300 mb-1.5';

  return (
    <div className="space-y-8">
      {/* Your Details */}
      <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
        <h3 className="text-lg font-bold text-white heading-font mb-6">Your Details</h3>
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className={labelClass}>Business Name</label>
            <input
              type="text"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              className={inputClass}
              placeholder="e.g. Sarah Mitchell Design"
            />
          </div>
          <div>
            <label className={labelClass}>ABN</label>
            <input
              type="text"
              value={abn}
              onChange={(e) => setAbn(e.target.value)}
              className={inputClass}
              placeholder="e.g. 12 345 678 901"
            />
          </div>
          <div>
            <label className={labelClass}>Contact Email</label>
            <input
              type="email"
              value={contactEmail}
              onChange={(e) => setContactEmail(e.target.value)}
              className={inputClass}
              placeholder="e.g. sarah@mitchelldesign.com.au"
            />
          </div>
          <div>
            <label className={labelClass}>Contact Phone</label>
            <input
              type="tel"
              value={contactPhone}
              onChange={(e) => setContactPhone(e.target.value)}
              className={inputClass}
              placeholder="e.g. 0412 345 678"
            />
          </div>
        </div>
      </div>

      {/* Client Details */}
      <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
        <h3 className="text-lg font-bold text-white heading-font mb-6">Client Details</h3>
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className={labelClass}>Client Name / Company</label>
            <input
              type="text"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              className={inputClass}
              placeholder="e.g. Acme Solutions Pty Ltd"
            />
          </div>
          <div>
            <label className={labelClass}>Contact Person (optional)</label>
            <input
              type="text"
              value={clientContactPerson}
              onChange={(e) => setClientContactPerson(e.target.value)}
              className={inputClass}
              placeholder="e.g. John Smith"
            />
          </div>
        </div>
      </div>

      {/* Original Invoice */}
      <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
        <h3 className="text-lg font-bold text-white heading-font mb-6">Original Invoice</h3>
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className={labelClass}>Invoice Number</label>
            <input
              type="text"
              value={invoiceNumber}
              onChange={(e) => setInvoiceNumber(e.target.value)}
              className={inputClass}
              placeholder="e.g. INV-2026-042"
            />
          </div>
          <div>
            <label className={labelClass}>Invoice Date</label>
            <input
              type="date"
              value={invoiceDate}
              onChange={(e) => setInvoiceDate(e.target.value)}
              className={inputClass}
            />
          </div>
          <div>
            <label className={labelClass}>Due Date</label>
            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className={inputClass}
            />
          </div>
          <div>
            <label className={labelClass}>Original Amount (AUD)</label>
            <input
              type="number"
              value={originalAmount || ''}
              onChange={(e) => setOriginalAmount(Math.max(0, parseFloat(e.target.value) || 0))}
              className={inputClass}
              min="0"
              step="100"
              placeholder="e.g. 5000"
            />
          </div>
          <div className="sm:col-span-2">
            <label className={labelClass}>Description of Work Performed</label>
            <textarea
              value={workDescription}
              onChange={(e) => setWorkDescription(e.target.value)}
              className={inputClass + ' min-h-[80px] resize-y'}
              placeholder="e.g. Website design and development including 5 pages, responsive layout, CMS integration, and 2 rounds of revisions as per proposal dated 15/01/2026"
            />
          </div>
        </div>

        {/* GST Toggle */}
        <div className="mt-6 flex items-center justify-between py-3 px-4 rounded-xl bg-white/5">
          <div>
            <span className="text-slate-300 text-sm">Amount includes GST?</span>
            <p className="text-xs text-slate-500 mt-0.5">Toggle if the amount above includes 10% GST</p>
          </div>
          <button
            onClick={() => setIncludesGST(!includesGST)}
            className={`relative w-14 h-7 rounded-full transition-all ${
              includesGST ? 'bg-gradient-to-r from-purple-500 to-indigo-500' : 'bg-white/10'
            }`}
          >
            <div
              className={`absolute top-0.5 left-0.5 h-6 w-6 rounded-full bg-white shadow-md transition-transform ${
                includesGST ? 'translate-x-7' : 'translate-x-0'
              }`}
            />
          </button>
        </div>
      </div>

      {/* Dispute Details */}
      <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
        <h3 className="text-lg font-bold text-white heading-font mb-6">Dispute Details</h3>
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className={labelClass}>Dispute Type</label>
            <select
              value={disputeType}
              onChange={(e) => setDisputeType(e.target.value as DisputeType)}
              className={inputClass}
            >
              {Object.entries(DISPUTE_TYPE_LABELS).map(([value, label]) => (
                <option key={value} value={value} className="bg-slate-800">
                  {label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className={labelClass}>Date Dispute Was Raised</label>
            <input
              type="date"
              value={disputeDate}
              onChange={(e) => setDisputeDate(e.target.value)}
              className={inputClass}
            />
          </div>
          <div className="sm:col-span-2">
            <label className={labelClass}>Client&apos;s Stated Reason</label>
            <textarea
              value={clientReason}
              onChange={(e) => setClientReason(e.target.value)}
              className={inputClass + ' min-h-[80px] resize-y'}
              placeholder="e.g. Client claims the website redesign did not include mobile responsiveness, which they say was part of the original scope"
            />
          </div>
          <div>
            <label className={labelClass}>Partial Payment Received (AUD, optional)</label>
            <input
              type="number"
              value={partialPayment || ''}
              onChange={(e) => setPartialPayment(Math.max(0, parseFloat(e.target.value) || 0))}
              className={inputClass}
              min="0"
              step="100"
              placeholder="e.g. 2000"
            />
          </div>
        </div>

        {/* Outstanding amount summary */}
        {originalAmount > 0 && (
          <div className="mt-6 bg-white/5 rounded-xl p-4 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-slate-400">Original Invoice Amount</span>
              <span className="text-white font-mono">{formatCurrency(originalAmount)}</span>
            </div>
            {partialPayment > 0 && (
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Partial Payment Received</span>
                <span className="text-green-400 font-mono">-{formatCurrency(partialPayment)}</span>
              </div>
            )}
            <div className="flex justify-between text-sm border-t border-white/10 pt-2">
              <span className="text-white font-semibold">Outstanding Balance</span>
              <span className="text-purple-400 font-mono font-bold text-lg">
                {formatCurrency(outstandingAmount)}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Your Response */}
      <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
        <h3 className="text-lg font-bold text-white heading-font mb-6">Your Response</h3>

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className={labelClass}>Response Tone</label>
            <select
              value={tone}
              onChange={(e) => setTone(e.target.value as Tone)}
              className={inputClass}
            >
              {Object.entries(TONE_LABELS).map(([value, label]) => (
                <option key={value} value={value} className="bg-slate-800">
                  {label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className={labelClass}>Response Deadline</label>
            <select
              value={responseDeadline}
              onChange={(e) => setResponseDeadline(parseInt(e.target.value))}
              className={inputClass}
            >
              <option value="7" className="bg-slate-800">7 days</option>
              <option value="14" className="bg-slate-800">14 days (recommended)</option>
              <option value="21" className="bg-slate-800">21 days</option>
            </select>
          </div>
          <div>
            <label className={labelClass}>Proposed Resolution</label>
            <select
              value={resolution}
              onChange={(e) => setResolution(e.target.value as Resolution)}
              className={inputClass}
            >
              {Object.entries(RESOLUTION_LABELS).map(([value, label]) => (
                <option key={value} value={value} className="bg-slate-800">
                  {label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Supporting Evidence Checkboxes */}
        <div className="mt-6">
          <label className={labelClass}>Supporting Evidence Available</label>
          <p className="text-xs text-slate-500 mb-3">Select all evidence you can provide to support your response</p>
          <div className="grid sm:grid-cols-2 gap-3">
            {(Object.entries(EVIDENCE_LABELS) as [Evidence, string][]).map(([value, label]) => (
              <button
                key={value}
                onClick={() => toggleEvidence(value)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl border text-left transition-all text-sm ${
                  evidence.includes(value)
                    ? 'bg-purple-500/10 border-purple-500/30 text-white'
                    : 'bg-white/5 border-white/10 text-slate-400 hover:bg-white/10'
                }`}
              >
                <div
                  className={`w-5 h-5 rounded flex items-center justify-center flex-shrink-0 transition-all ${
                    evidence.includes(value)
                      ? 'bg-gradient-to-r from-purple-500 to-indigo-500'
                      : 'bg-white/10 border border-white/20'
                  }`}
                >
                  {evidence.includes(value) && (
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Tone Guide */}
        <div className="mt-6 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 border border-purple-500/20 rounded-xl p-5">
          <p className="text-sm text-purple-400 font-medium mb-2">Tone Guide</p>
          <div className="space-y-2 text-sm text-slate-400">
            <p>
              <strong className="text-white">Collaborative</strong> — Best for clients you want to
              keep. Focuses on finding a mutually agreeable solution while maintaining the relationship.
            </p>
            <p>
              <strong className="text-white">Firm but fair</strong> — Best for most disputes. Professional
              and evidence-based. Clearly states your position while remaining open to discussion.
            </p>
            <p>
              <strong className="text-white">Formal / escalation</strong> — For disputes where previous
              attempts at resolution have failed. Includes references to legal options and tribunals.
            </p>
          </div>
        </div>
      </div>

      {/* Generate Button */}
      <div className="flex justify-center">
        <button
          onClick={handleGenerate}
          className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold rounded-xl px-8 py-4 hover:from-purple-400 hover:to-indigo-400 transition-all text-lg"
        >
          Generate Dispute Response
        </button>
      </div>

      {/* Generated Output */}
      {generated && (
        <>
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-white heading-font">Response Letter Preview</h3>
              <span className="text-xs px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 font-medium">
                {TONE_LABELS[tone]}
              </span>
            </div>

            <div className="bg-slate-900/50 border border-white/10 rounded-xl p-6 font-mono text-sm whitespace-pre-wrap text-slate-300 leading-relaxed">
              {generatedText}
            </div>

            <div className="flex justify-center mt-6">
              <button
                onClick={handleCopy}
                className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold rounded-xl px-8 py-4 hover:from-purple-400 hover:to-indigo-400 transition-all"
              >
                {copied ? 'Copied to Clipboard!' : 'Copy to Clipboard'}
              </button>
            </div>
          </div>

          {/* Important Notice */}
          <div className="bg-amber-500/5 border border-amber-500/20 rounded-2xl p-6">
            <h4 className="text-amber-400 font-semibold mb-2">Important Notice</h4>
            <ul className="text-sm text-slate-400 space-y-2">
              <li>This template is for general guidance only and does not constitute legal advice.</li>
              <li>Always keep copies of your dispute response and all supporting documentation.</li>
              <li>Send your response via email <strong className="text-white">and</strong> retain a copy for your records — consider also sending via registered post for important disputes.</li>
              <li>If the dispute cannot be resolved through direct negotiation, consider mediation before escalating to tribunal proceedings.</li>
              <li>For disputes involving amounts over <strong className="text-white">$15,000</strong> (varies by state), consider seeking professional legal advice.</li>
              <li>If your response is ignored, the next step is a formal <a href="/tools/letter-of-demand" className="text-purple-400 hover:underline">letter of demand</a>.</li>
            </ul>
          </div>

          {/* Related Tools */}
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white heading-font mb-4">Related Tools</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <a
                href="/tools/letter-of-demand"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/30 rounded-xl p-4 transition-all group"
              >
                <p className="text-white font-medium text-sm group-hover:text-purple-400 transition-colors">
                  Letter of Demand
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Formal demand when disputes go unresolved
                </p>
              </a>
              <a
                href="/tools/overdue-follow-up"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/30 rounded-xl p-4 transition-all group"
              >
                <p className="text-white font-medium text-sm group-hover:text-purple-400 transition-colors">
                  Overdue Follow-Up
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Payment reminder emails for overdue invoices
                </p>
              </a>
              <a
                href="/tools/contract-generator"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/30 rounded-xl p-4 transition-all group"
              >
                <p className="text-white font-medium text-sm group-hover:text-purple-400 transition-colors">
                  Contract Generator
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Prevent disputes with solid contracts
                </p>
              </a>
              <a
                href="/tools/scope-of-work-generator"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/30 rounded-xl p-4 transition-all group"
              >
                <p className="text-white font-medium text-sm group-hover:text-purple-400 transition-colors">
                  Scope of Work
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Define project scope to avoid disagreements
                </p>
              </a>
            </div>
          </div>

          <div className="text-center">
            <p className="text-xs text-slate-500 max-w-2xl mx-auto">
              This tool generates invoice dispute response letter templates for Australian freelancers
              and sole traders. A professional dispute response is the first step in resolving invoice
              disagreements while protecting your right to payment. Always maintain thorough records
              and consider professional legal advice for significant disputes.
            </p>
          </div>
        </>
      )}
    </div>
  );
}
