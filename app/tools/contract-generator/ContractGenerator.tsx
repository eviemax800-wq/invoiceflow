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

/* ---- Types ---- */

type ProjectType =
  | 'web-development'
  | 'design'
  | 'copywriting'
  | 'marketing'
  | 'consulting'
  | 'photography'
  | 'video-production'
  | 'other';

type PaymentType = 'fixed' | 'hourly' | 'retainer';

type PaymentTerms = '50-50' | '30-40-30' | 'net-14' | 'net-30' | 'on-completion';

type RevisionRounds = '1' | '2' | '3' | 'unlimited';

type AustralianState = 'NSW' | 'VIC' | 'QLD' | 'SA' | 'WA' | 'TAS' | 'NT' | 'ACT';

type LatePaymentRate = '2' | '5' | '10';

interface ClauseOptions {
  ipAssignment: boolean;
  confidentiality: boolean;
  termination: boolean;
  latePayment: boolean;
  limitationOfLiability: boolean;
  forceMajeure: boolean;
  nonSolicitation: boolean;
}

const PROJECT_TYPES: { value: ProjectType; label: string }[] = [
  { value: 'web-development', label: 'Web Development' },
  { value: 'design', label: 'Design' },
  { value: 'copywriting', label: 'Copywriting' },
  { value: 'marketing', label: 'Marketing' },
  { value: 'consulting', label: 'Consulting' },
  { value: 'photography', label: 'Photography' },
  { value: 'video-production', label: 'Video Production' },
  { value: 'other', label: 'Other' },
];

const PAYMENT_TERMS_OPTIONS: { value: PaymentTerms; label: string }[] = [
  { value: '50-50', label: '50/50 (Deposit + Final)' },
  { value: '30-40-30', label: '30/40/30 (Three Milestones)' },
  { value: 'net-14', label: 'Net 14 (Due in 14 days)' },
  { value: 'net-30', label: 'Net 30 (Due in 30 days)' },
  { value: 'on-completion', label: 'On Completion' },
];

const STATES: { value: AustralianState; label: string }[] = [
  { value: 'NSW', label: 'New South Wales' },
  { value: 'VIC', label: 'Victoria' },
  { value: 'QLD', label: 'Queensland' },
  { value: 'SA', label: 'South Australia' },
  { value: 'WA', label: 'Western Australia' },
  { value: 'TAS', label: 'Tasmania' },
  { value: 'NT', label: 'Northern Territory' },
  { value: 'ACT', label: 'Australian Capital Territory' },
];

const STATE_FULL_NAMES: Record<AustralianState, string> = {
  NSW: 'New South Wales',
  VIC: 'Victoria',
  QLD: 'Queensland',
  SA: 'South Australia',
  WA: 'Western Australia',
  TAS: 'Tasmania',
  NT: 'Northern Territory',
  ACT: 'Australian Capital Territory',
};

/* ---- Component ---- */

export default function ContractGenerator() {
  // Provider details
  const [providerName, setProviderName] = useState('');
  const [providerABN, setProviderABN] = useState('');
  const [providerEmail, setProviderEmail] = useState('');

  // Client details
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');

  // Project details
  const [projectType, setProjectType] = useState<ProjectType>('web-development');
  const [projectDescription, setProjectDescription] = useState('');
  const [scopeOfWork, setScopeOfWork] = useState('');
  const [outOfScope, setOutOfScope] = useState('');

  // Timeline
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [isOngoing, setIsOngoing] = useState(false);

  // Payment
  const [paymentType, setPaymentType] = useState<PaymentType>('fixed');
  const [amount, setAmount] = useState<number>(0);
  const [includeGST, setIncludeGST] = useState(true);
  const [paymentTerms, setPaymentTerms] = useState<PaymentTerms>('50-50');
  const [revisionRounds, setRevisionRounds] = useState<RevisionRounds>('2');

  // Clauses
  const [clauses, setClauses] = useState<ClauseOptions>({
    ipAssignment: true,
    confidentiality: true,
    termination: true,
    latePayment: true,
    limitationOfLiability: false,
    forceMajeure: false,
    nonSolicitation: false,
  });

  // Legal
  const [governingState, setGoverningState] = useState<AustralianState>('VIC');
  const [latePaymentRate, setLatePaymentRate] = useState<LatePaymentRate>('2');

  // UI
  const [generated, setGenerated] = useState(false);
  const [copied, setCopied] = useState(false);

  const toggleClause = (key: keyof ClauseOptions) => {
    setClauses((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // GST calculations
  const gstCalcs = useMemo(() => {
    const base = amount || 0;
    const gst = includeGST ? base * 0.1 : 0;
    const total = base + gst;
    return { base, gst, total };
  }, [amount, includeGST]);

  // Payment type labels
  const paymentTypeLabel = useMemo(() => {
    switch (paymentType) {
      case 'fixed':
        return 'Fixed Price';
      case 'hourly':
        return 'per hour';
      case 'retainer':
        return 'per month';
    }
  }, [paymentType]);

  // Build the contract text
  const generatedText = useMemo(() => {
    const provider = providerName || '[Your Name / Business Name]';
    const provABN = providerABN || '[Your ABN]';
    const provEmail = providerEmail || '[your@email.com]';
    const client = clientName || '[Client Name / Business Name]';
    const cliEmail = clientEmail || '[client@email.com]';
    const projTypeLabel =
      PROJECT_TYPES.find((p) => p.value === projectType)?.label || 'Services';
    const projDesc = projectDescription || '[Project description]';
    const scope = scopeOfWork || '[Scope of work details]';
    const excluded = outOfScope || '[Out of scope items]';
    const start = startDate ? formatDateAU(startDate) : '[Start Date]';
    const end = isOngoing ? 'Ongoing (no fixed end date)' : endDate ? formatDateAU(endDate) : '[End Date]';
    const today = formatDateAU(todayISO());
    const stateFullName = STATE_FULL_NAMES[governingState];
    const amt = amount || 0;

    let sectionNum = 0;
    const section = () => {
      sectionNum++;
      return sectionNum;
    };

    let text = '';

    // Title
    text += `${'='.repeat(60)}\n`;
    text += `SERVICE AGREEMENT\n`;
    text += `${'='.repeat(60)}\n\n`;

    text += `Date: ${today}\n`;
    text += `Agreement Reference: SA-${todayISO().replace(/-/g, '')}\n\n`;

    // Parties
    text += `${section()}. PARTIES\n`;
    text += `${'─'.repeat(45)}\n\n`;
    text += `This Service Agreement ("Agreement") is entered into as of ${start} by and between:\n\n`;
    text += `SERVICE PROVIDER ("Provider"):\n`;
    text += `  Name:    ${provider}\n`;
    text += `  ABN:     ${provABN}\n`;
    text += `  Email:   ${provEmail}\n\n`;
    text += `CLIENT ("Client"):\n`;
    text += `  Name:    ${client}\n`;
    text += `  Email:   ${cliEmail}\n\n`;
    text += `The Provider and Client are collectively referred to as the "Parties."\n\n`;

    // Scope of Work
    const scopeNum = section();
    text += `${scopeNum}. SCOPE OF WORK\n`;
    text += `${'─'.repeat(45)}\n\n`;
    text += `${scopeNum}.1 Project Type: ${projTypeLabel}\n\n`;
    text += `${scopeNum}.2 Project Description:\n`;
    text += `${projDesc}\n\n`;
    text += `${scopeNum}.3 Deliverables & Included Work:\n`;
    text += `${scope}\n\n`;

    // Out of Scope
    const outNum = section();
    text += `${outNum}. OUT OF SCOPE\n`;
    text += `${'─'.repeat(45)}\n\n`;
    text += `The following items are expressly excluded from this Agreement. Any work outside the scope defined in Section ${scopeNum} will require a separate agreement or a written amendment to this Agreement, and may be subject to additional fees.\n\n`;
    text += `${excluded}\n\n`;

    // Timeline & Deliverables
    const timeNum = section();
    text += `${timeNum}. TIMELINE & DELIVERABLES\n`;
    text += `${'─'.repeat(45)}\n\n`;
    text += `${timeNum}.1 Commencement Date: ${start}\n`;
    text += `${timeNum}.2 ${isOngoing ? 'Duration: Ongoing — this Agreement continues until terminated by either Party in accordance with the termination provisions below.' : `Completion Date: ${end}`}\n\n`;
    text += `${timeNum}.3 The Provider will use reasonable endeavours to meet the agreed timeline. Delays caused by the Client (including late provision of materials, delayed feedback, or scope changes) may extend the timeline accordingly.\n\n`;
    text += `${timeNum}.4 Final deliverables will be provided in industry-standard formats unless otherwise agreed in writing.\n\n`;

    // Payment Terms
    const payNum = section();
    text += `${payNum}. PAYMENT TERMS\n`;
    text += `${'─'.repeat(45)}\n\n`;

    if (paymentType === 'fixed') {
      text += `${payNum}.1 Total Project Fee: ${formatCurrency(amt)}`;
      if (includeGST) {
        text += ` (ex. GST)\n`;
        text += `     GST (10%):        ${formatCurrency(gstCalcs.gst)}\n`;
        text += `     Total (inc. GST): ${formatCurrency(gstCalcs.total)}\n`;
      } else {
        text += `\n`;
      }
    } else if (paymentType === 'hourly') {
      text += `${payNum}.1 Hourly Rate: ${formatCurrency(amt)} per hour`;
      if (includeGST) {
        text += ` (ex. GST)\n`;
        text += `     GST (10%):            ${formatCurrency(gstCalcs.gst)} per hour\n`;
        text += `     Rate (inc. GST):      ${formatCurrency(gstCalcs.total)} per hour\n`;
      } else {
        text += `\n`;
      }
    } else {
      text += `${payNum}.1 Monthly Retainer: ${formatCurrency(amt)} per month`;
      if (includeGST) {
        text += ` (ex. GST)\n`;
        text += `     GST (10%):               ${formatCurrency(gstCalcs.gst)} per month\n`;
        text += `     Retainer (inc. GST):     ${formatCurrency(gstCalcs.total)} per month\n`;
      } else {
        text += `\n`;
      }
    }

    text += `\n${payNum}.2 Payment Schedule:\n`;
    switch (paymentTerms) {
      case '50-50':
        text += `  - 50% deposit (${formatCurrency(gstCalcs.total * 0.5)}${includeGST ? ' inc. GST' : ''}) due upon signing this Agreement, before work commences.\n`;
        text += `  - 50% final payment (${formatCurrency(gstCalcs.total * 0.5)}${includeGST ? ' inc. GST' : ''}) due upon delivery of final deliverables.\n`;
        break;
      case '30-40-30':
        text += `  - 30% deposit (${formatCurrency(gstCalcs.total * 0.3)}${includeGST ? ' inc. GST' : ''}) due upon signing this Agreement.\n`;
        text += `  - 40% midpoint payment (${formatCurrency(gstCalcs.total * 0.4)}${includeGST ? ' inc. GST' : ''}) due upon delivery of the first draft or midpoint milestone.\n`;
        text += `  - 30% final payment (${formatCurrency(gstCalcs.total * 0.3)}${includeGST ? ' inc. GST' : ''}) due upon delivery of final deliverables.\n`;
        break;
      case 'net-14':
        text += `  - Payment is due within 14 days of the invoice date.\n`;
        text += `  - Invoices will be issued ${paymentType === 'hourly' ? 'fortnightly for hours worked' : paymentType === 'retainer' ? 'monthly in advance' : 'upon delivery of final deliverables'}.\n`;
        break;
      case 'net-30':
        text += `  - Payment is due within 30 days of the invoice date.\n`;
        text += `  - Invoices will be issued ${paymentType === 'hourly' ? 'monthly for hours worked' : paymentType === 'retainer' ? 'monthly in advance' : 'upon delivery of final deliverables'}.\n`;
        break;
      case 'on-completion':
        text += `  - Full payment (${formatCurrency(gstCalcs.total)}${includeGST ? ' inc. GST' : ''}) is due upon delivery and acceptance of final deliverables.\n`;
        break;
    }

    text += `\n${payNum}.3 Payment Method: Bank transfer or as otherwise agreed in writing. All invoices will include the Provider's ABN${includeGST ? ' and will be issued as tax invoices for GST purposes' : ''}.\n\n`;

    text += `${payNum}.4 The Provider reserves the right to pause or suspend work if any payment is overdue by more than 14 days.\n\n`;

    // IP Assignment
    if (clauses.ipAssignment) {
      const ipNum = section();
      text += `${ipNum}. INTELLECTUAL PROPERTY\n`;
      text += `${'─'.repeat(45)}\n\n`;
      text += `${ipNum}.1 Upon receipt of full and final payment, all intellectual property rights in the deliverables created under this Agreement shall be assigned to the Client. This includes copyright, design rights, and any other applicable intellectual property rights.\n\n`;
      text += `${ipNum}.2 Prior to full payment, all intellectual property rights remain with the Provider.\n\n`;
      text += `${ipNum}.3 The Provider retains the right to use the deliverables in their portfolio, case studies, and marketing materials unless the Client requests otherwise in writing.\n\n`;
      text += `${ipNum}.4 Any pre-existing intellectual property, tools, frameworks, or libraries owned by the Provider and used in the deliverables ("Provider Tools") remain the property of the Provider. The Client is granted a non-exclusive, perpetual licence to use Provider Tools solely as part of the deliverables.\n\n`;
    }

    // Confidentiality
    if (clauses.confidentiality) {
      const confNum = section();
      text += `${confNum}. CONFIDENTIALITY\n`;
      text += `${'─'.repeat(45)}\n\n`;
      text += `${confNum}.1 Each Party agrees to keep confidential all information disclosed by the other Party that is designated as confidential or that reasonably should be understood to be confidential ("Confidential Information").\n\n`;
      text += `${confNum}.2 Confidential Information includes, but is not limited to: business strategies, financial information, customer data, trade secrets, technical specifications, unpublished materials, and proprietary processes.\n\n`;
      text += `${confNum}.3 The receiving Party shall not disclose Confidential Information to any third party without the prior written consent of the disclosing Party, except as required by law or to professional advisors bound by confidentiality obligations.\n\n`;
      text += `${confNum}.4 This confidentiality obligation survives termination of this Agreement and continues for a period of two (2) years from the date of disclosure.\n\n`;
    }

    // Revisions & Changes
    const revNum = section();
    text += `${revNum}. REVISIONS & CHANGES\n`;
    text += `${'─'.repeat(45)}\n\n`;
    if (revisionRounds === 'unlimited') {
      text += `${revNum}.1 This Agreement includes unlimited revision rounds for the deliverables within the defined scope of work.\n\n`;
    } else {
      text += `${revNum}.1 This Agreement includes ${revisionRounds} round${revisionRounds === '1' ? '' : 's'} of revisions for the deliverables within the defined scope of work.\n\n`;
      text += `${revNum}.2 Additional revision rounds beyond the included ${revisionRounds} round${revisionRounds === '1' ? '' : 's'} will be billed at the Provider's standard ${paymentType === 'hourly' ? `hourly rate of ${formatCurrency(amt)}${includeGST ? ' + GST' : ''} per hour` : `hourly rate (to be agreed in writing)`}.\n\n`;
    }
    text += `${revNum}.${revisionRounds === 'unlimited' ? '2' : '3'} Revisions must be requested within 14 days of delivery of each draft or milestone. Revisions not requested within this period shall be deemed accepted.\n\n`;
    text += `${revNum}.${revisionRounds === 'unlimited' ? '3' : '4'} Scope changes (work not included in Section ${scopeNum}) are not considered revisions and will require a written change order with revised fees and timeline.\n\n`;

    // Termination
    if (clauses.termination) {
      const termNum = section();
      text += `${termNum}. TERMINATION\n`;
      text += `${'─'.repeat(45)}\n\n`;
      text += `${termNum}.1 Either Party may terminate this Agreement by providing fourteen (14) days' written notice to the other Party.\n\n`;
      text += `${termNum}.2 Upon termination:\n`;
      text += `  (a) The Client shall pay the Provider for all work completed up to the date of termination, calculated on a pro-rata basis for fixed-price engagements or based on hours worked for hourly engagements.\n`;
      text += `  (b) Any deposits or milestone payments already made for work not yet completed shall be refunded on a pro-rata basis, less the value of work already delivered.\n`;
      text += `  (c) The Provider shall deliver all work-in-progress materials to the Client within seven (7) days of the termination date.\n`;
      text += `  (d) Intellectual property in completed and paid-for deliverables transfers to the Client as per the IP provisions above.\n\n`;
      text += `${termNum}.3 Either Party may terminate this Agreement immediately if the other Party:\n`;
      text += `  (a) Commits a material breach of this Agreement and fails to remedy such breach within seven (7) days of written notice; or\n`;
      text += `  (b) Becomes insolvent, enters into administration, or is otherwise unable to meet its obligations.\n\n`;
    }

    // Late Payment
    if (clauses.latePayment) {
      const lateNum = section();
      text += `${lateNum}. LATE PAYMENT\n`;
      text += `${'─'.repeat(45)}\n\n`;
      text += `${lateNum}.1 If any payment is not received by the due date, the Provider may charge interest on the overdue amount at a rate of ${latePaymentRate}% per annum, calculated daily from the due date until payment is received in full.\n\n`;
      text += `${lateNum}.2 If payment is overdue by more than 14 days, the Provider reserves the right to:\n`;
      text += `  (a) Suspend all work under this Agreement until payment is received;\n`;
      text += `  (b) Withhold delivery of completed work and retain intellectual property rights until payment is received; and\n`;
      text += `  (c) Recover reasonable costs incurred in collecting the overdue payment, including debt collection fees and legal costs.\n\n`;
      text += `${lateNum}.3 The Client shall remain liable for all fees due under this Agreement regardless of whether a purchase order or other internal approval process is required by the Client's organisation.\n\n`;
    }

    // Limitation of Liability
    if (clauses.limitationOfLiability) {
      const liabNum = section();
      text += `${liabNum}. LIMITATION OF LIABILITY\n`;
      text += `${'─'.repeat(45)}\n\n`;
      text += `${liabNum}.1 To the maximum extent permitted by law, the Provider's total aggregate liability under or in connection with this Agreement, whether in contract, tort (including negligence), breach of statutory duty, or otherwise, shall not exceed the total fees paid by the Client under this Agreement.\n\n`;
      text += `${liabNum}.2 The Provider shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, revenue, data, business opportunity, or goodwill, even if advised of the possibility of such damages.\n\n`;
      text += `${liabNum}.3 Nothing in this clause limits liability for fraud, wilful misconduct, or any liability that cannot be excluded or limited under Australian law (including the Australian Consumer Law).\n\n`;
    }

    // Force Majeure
    if (clauses.forceMajeure) {
      const forceNum = section();
      text += `${forceNum}. FORCE MAJEURE\n`;
      text += `${'─'.repeat(45)}\n\n`;
      text += `${forceNum}.1 Neither Party shall be liable for any failure or delay in performing their obligations under this Agreement where such failure or delay results from circumstances beyond the reasonable control of that Party ("Force Majeure Event").\n\n`;
      text += `${forceNum}.2 Force Majeure Events include, but are not limited to: natural disasters, fire, flood, epidemic, pandemic, government actions or orders, war, terrorism, civil unrest, power failure, internet or telecommunications outage, and cyberattack.\n\n`;
      text += `${forceNum}.3 The affected Party must notify the other Party promptly of the Force Majeure Event and use reasonable endeavours to mitigate its effects. If a Force Majeure Event continues for more than thirty (30) days, either Party may terminate this Agreement by written notice.\n\n`;
    }

    // Non-Solicitation
    if (clauses.nonSolicitation) {
      const nonSolNum = section();
      text += `${nonSolNum}. NON-SOLICITATION\n`;
      text += `${'─'.repeat(45)}\n\n`;
      text += `${nonSolNum}.1 During the term of this Agreement and for a period of twelve (12) months following its termination, neither Party shall directly or indirectly solicit, recruit, or hire any employee, contractor, or agent of the other Party who was involved in the performance of this Agreement.\n\n`;
      text += `${nonSolNum}.2 This clause does not apply to general public advertising for employment or contracting opportunities, nor to any person who approaches a Party on their own initiative without solicitation.\n\n`;
    }

    // General Provisions
    const genNum = section();
    text += `${genNum}. GENERAL PROVISIONS\n`;
    text += `${'─'.repeat(45)}\n\n`;
    text += `${genNum}.1 Independent Contractor: The Provider is an independent contractor and not an employee, partner, or agent of the Client. Nothing in this Agreement creates an employment relationship, partnership, or joint venture.\n\n`;
    text += `${genNum}.2 Entire Agreement: This Agreement constitutes the entire agreement between the Parties and supersedes all prior negotiations, representations, warranties, commitments, and understandings, whether written or oral.\n\n`;
    text += `${genNum}.3 Amendments: Any amendments to this Agreement must be in writing and signed by both Parties.\n\n`;
    text += `${genNum}.4 Severability: If any provision of this Agreement is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.\n\n`;
    text += `${genNum}.5 Notices: All notices under this Agreement must be in writing and sent to the email addresses specified above, or to such other address as a Party may notify in writing.\n\n`;

    // Governing Law
    const govNum = section();
    text += `${govNum}. GOVERNING LAW\n`;
    text += `${'─'.repeat(45)}\n\n`;
    text += `${govNum}.1 This Agreement is governed by and construed in accordance with the laws of ${stateFullName}, Australia.\n\n`;
    text += `${govNum}.2 The Parties submit to the exclusive jurisdiction of the courts of ${stateFullName} and any courts that may hear appeals from those courts.\n\n`;
    text += `${govNum}.3 Before commencing legal proceedings, the Parties agree to attempt to resolve any dispute through good-faith negotiation for a period of at least fourteen (14) days.\n\n`;

    // Acceptance / Signature
    text += `${'='.repeat(60)}\n`;
    text += `ACCEPTANCE & SIGNATURES\n`;
    text += `${'='.repeat(60)}\n\n`;
    text += `By signing below, the Parties acknowledge that they have read, understood, and agree to be bound by the terms and conditions of this Service Agreement.\n\n\n`;
    text += `SERVICE PROVIDER:\n\n`;
    text += `Signed: ________________________________\n\n`;
    text += `Name:   ${provider}\n`;
    text += `ABN:    ${provABN}\n`;
    text += `Date:   ________________________________\n\n\n`;
    text += `CLIENT:\n\n`;
    text += `Signed: ________________________________\n\n`;
    text += `Name:   ${client}\n`;
    text += `Date:   ________________________________\n\n\n`;

    // Disclaimer
    text += `${'─'.repeat(60)}\n`;
    text += `DISCLAIMER: This document is a template generated by InvoiceFlow\n`;
    text += `and is provided for informational purposes only. It does not\n`;
    text += `constitute legal advice. You should review this agreement carefully\n`;
    text += `and seek independent legal advice before relying on it. InvoiceFlow\n`;
    text += `accepts no liability for any loss or damage arising from the use\n`;
    text += `of this template.\n`;
    text += `${'─'.repeat(60)}\n`;

    return text;
  }, [
    providerName,
    providerABN,
    providerEmail,
    clientName,
    clientEmail,
    projectType,
    projectDescription,
    scopeOfWork,
    outOfScope,
    startDate,
    endDate,
    isOngoing,
    paymentType,
    amount,
    includeGST,
    paymentTerms,
    revisionRounds,
    clauses,
    governingState,
    latePaymentRate,
    gstCalcs,
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
  const selectClass =
    'w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/25 transition-all text-sm appearance-none';

  return (
    <div className="space-y-8">
      {/* Provider Details */}
      <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
        <h3 className="text-lg font-bold text-white heading-font mb-6">Your Details (Provider)</h3>
        <div className="grid sm:grid-cols-2 gap-5">
          <div className="sm:col-span-2">
            <label className={labelClass}>Your Name / Business Name</label>
            <input
              type="text"
              value={providerName}
              onChange={(e) => setProviderName(e.target.value)}
              className={inputClass}
              placeholder="e.g. Sarah Mitchell Design"
            />
          </div>
          <div>
            <label className={labelClass}>ABN</label>
            <input
              type="text"
              value={providerABN}
              onChange={(e) => setProviderABN(e.target.value)}
              className={inputClass}
              placeholder="e.g. 12 345 678 901"
            />
          </div>
          <div>
            <label className={labelClass}>Email</label>
            <input
              type="email"
              value={providerEmail}
              onChange={(e) => setProviderEmail(e.target.value)}
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
            <label className={labelClass}>Client Email</label>
            <input
              type="email"
              value={clientEmail}
              onChange={(e) => setClientEmail(e.target.value)}
              className={inputClass}
              placeholder="e.g. contact@acmesolutions.com.au"
            />
          </div>
        </div>
      </div>

      {/* Project Details */}
      <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
        <h3 className="text-lg font-bold text-white heading-font mb-6">Project Details</h3>

        {/* Project Type */}
        <div className="mb-6">
          <label className={labelClass}>Project Type</label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {PROJECT_TYPES.map((option) => (
              <button
                key={option.value}
                onClick={() => setProjectType(option.value)}
                className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  projectType === option.value
                    ? 'bg-gradient-to-r from-teal-500/30 to-blue-500/30 border border-teal-500/40 text-teal-400'
                    : 'bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-5">
          <div>
            <label className={labelClass}>Project Description</label>
            <textarea
              value={projectDescription}
              onChange={(e) => setProjectDescription(e.target.value)}
              className={`${inputClass} min-h-[80px] resize-y`}
              placeholder="e.g. Redesign and rebuild the client's business website to improve UX, modernise the visual design, and optimise for SEO and mobile performance."
            />
          </div>
          <div>
            <label className={labelClass}>Scope of Work (What&apos;s Included)</label>
            <textarea
              value={scopeOfWork}
              onChange={(e) => setScopeOfWork(e.target.value)}
              className={`${inputClass} min-h-[100px] resize-y`}
              placeholder={`e.g.\n- Design and develop a 5-page responsive website (Home, About, Services, Portfolio, Contact)\n- Custom theme development with mobile-first approach\n- SEO setup (meta tags, sitemap, schema markup)\n- Content migration from existing site\n- Browser testing (Chrome, Safari, Firefox, Edge)`}
            />
          </div>
          <div>
            <label className={labelClass}>Out of Scope (What&apos;s NOT Included)</label>
            <textarea
              value={outOfScope}
              onChange={(e) => setOutOfScope(e.target.value)}
              className={`${inputClass} min-h-[80px] resize-y`}
              placeholder={`e.g.\n- Copywriting or content creation\n- Photography or stock image sourcing\n- Ongoing maintenance or hosting\n- E-commerce functionality\n- Social media integration beyond basic links`}
            />
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
        <h3 className="text-lg font-bold text-white heading-font mb-6">Timeline</h3>
        <div className="grid sm:grid-cols-2 gap-5">
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
            <label className={labelClass}>End Date</label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className={inputClass}
              disabled={isOngoing}
            />
          </div>
        </div>

        {/* Ongoing Toggle */}
        <div className="mt-5 flex items-center justify-between py-3 px-4 rounded-xl bg-white/5">
          <div>
            <span className="text-slate-300 text-sm">Ongoing Engagement</span>
            <p className="text-xs text-slate-500 mt-0.5">No fixed end date — continues until terminated</p>
          </div>
          <button
            onClick={() => setIsOngoing(!isOngoing)}
            className={`relative w-14 h-7 rounded-full transition-all ${
              isOngoing ? 'bg-gradient-to-r from-teal-500 to-blue-500' : 'bg-white/10'
            }`}
          >
            <div
              className={`absolute top-0.5 left-0.5 h-6 w-6 rounded-full bg-white shadow-md transition-transform ${
                isOngoing ? 'translate-x-7' : 'translate-x-0'
              }`}
            />
          </button>
        </div>
      </div>

      {/* Payment Details */}
      <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
        <h3 className="text-lg font-bold text-white heading-font mb-6">Payment Details</h3>

        {/* Payment Type */}
        <div className="mb-6">
          <label className={labelClass}>Payment Type</label>
          <div className="flex gap-2">
            {([
              { value: 'fixed' as const, label: 'Fixed Price' },
              { value: 'hourly' as const, label: 'Hourly Rate' },
              { value: 'retainer' as const, label: 'Monthly Retainer' },
            ]).map((option) => (
              <button
                key={option.value}
                onClick={() => setPaymentType(option.value)}
                className={`flex-1 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  paymentType === option.value
                    ? 'bg-gradient-to-r from-teal-500/30 to-blue-500/30 border border-teal-500/40 text-teal-400'
                    : 'bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className={labelClass}>
              {paymentType === 'fixed'
                ? 'Total Project Fee (AUD)'
                : paymentType === 'hourly'
                  ? 'Hourly Rate (AUD)'
                  : 'Monthly Retainer (AUD)'}
            </label>
            <input
              type="number"
              value={amount || ''}
              onChange={(e) => setAmount(Math.max(0, parseFloat(e.target.value) || 0))}
              className={inputClass}
              min="0"
              step="10"
              placeholder={
                paymentType === 'fixed'
                  ? 'e.g. 5000'
                  : paymentType === 'hourly'
                    ? 'e.g. 120'
                    : 'e.g. 3000'
              }
            />
          </div>
          <div>
            <label className={labelClass}>Payment Terms</label>
            <select
              value={paymentTerms}
              onChange={(e) => setPaymentTerms(e.target.value as PaymentTerms)}
              className={selectClass}
            >
              {PAYMENT_TERMS_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value} className="bg-[#0B1120]">
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* GST Toggle */}
        <div className="mt-5 flex items-center justify-between py-3 px-4 rounded-xl bg-white/5">
          <div>
            <span className="text-slate-300 text-sm">Include GST (10%)</span>
            <p className="text-xs text-slate-500 mt-0.5">Add 10% GST on top of your fee</p>
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

        {/* Payment Preview */}
        {amount > 0 && (
          <div className="mt-5 bg-white/5 rounded-xl p-4 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-slate-400">
                {paymentType === 'fixed' ? 'Project fee' : paymentType === 'hourly' ? 'Hourly rate' : 'Monthly retainer'}
              </span>
              <span className="text-white font-mono">
                {formatCurrency(amount)}
                {includeGST && <span className="text-slate-500"> (ex. GST)</span>}
              </span>
            </div>
            {includeGST && (
              <>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">GST (10%)</span>
                  <span className="text-white font-mono">{formatCurrency(gstCalcs.gst)}</span>
                </div>
                <div className="flex justify-between text-sm border-t border-white/10 pt-2">
                  <span className="text-white font-semibold">Total (inc. GST)</span>
                  <span className="text-teal-400 font-mono font-bold">
                    {formatCurrency(gstCalcs.total)}
                  </span>
                </div>
              </>
            )}
          </div>
        )}
      </div>

      {/* Revision Rounds & Clauses */}
      <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
        <h3 className="text-lg font-bold text-white heading-font mb-6">Revisions & Clauses</h3>

        {/* Revision Rounds */}
        <div className="mb-6">
          <label className={labelClass}>Revision Rounds Included</label>
          <div className="flex gap-2">
            {([
              { value: '1' as const, label: '1 Round' },
              { value: '2' as const, label: '2 Rounds' },
              { value: '3' as const, label: '3 Rounds' },
              { value: 'unlimited' as const, label: 'Unlimited' },
            ]).map((option) => (
              <button
                key={option.value}
                onClick={() => setRevisionRounds(option.value)}
                className={`flex-1 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  revisionRounds === option.value
                    ? 'bg-gradient-to-r from-teal-500/30 to-blue-500/30 border border-teal-500/40 text-teal-400'
                    : 'bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* Clause Checkboxes */}
        <div className="mb-6">
          <label className={labelClass}>Include Clauses</label>
          <div className="space-y-2 mt-2">
            {([
              { key: 'ipAssignment' as const, label: 'IP Assignment (transfer ownership to client upon payment)' },
              { key: 'confidentiality' as const, label: 'Confidentiality / NDA (protect sensitive information)' },
              { key: 'termination' as const, label: 'Termination clause (exit provisions for both parties)' },
              { key: 'latePayment' as const, label: 'Late payment terms (interest and suspension rights)' },
              { key: 'limitationOfLiability' as const, label: 'Limitation of liability (cap financial exposure)' },
              { key: 'forceMajeure' as const, label: 'Force majeure (protection from unforeseeable events)' },
              { key: 'nonSolicitation' as const, label: 'Non-solicitation (prevent poaching of team members)' },
            ]).map((clause) => (
              <label
                key={clause.key}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={clauses[clause.key]}
                    onChange={() => toggleClause(clause.key)}
                    className="sr-only peer"
                  />
                  <div className="w-5 h-5 rounded-md bg-white/5 border border-white/10 peer-checked:bg-teal-500/30 peer-checked:border-teal-500/50 transition-all flex items-center justify-center">
                    <svg
                      className={`w-3 h-3 text-teal-400 transition-opacity ${
                        clauses[clause.key] ? 'opacity-100' : 'opacity-0'
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <span className="text-sm text-slate-300 group-hover:text-white transition-colors">
                  {clause.label}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Governing State & Late Payment Rate */}
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className={labelClass}>Governing State / Territory</label>
            <select
              value={governingState}
              onChange={(e) => setGoverningState(e.target.value as AustralianState)}
              className={selectClass}
            >
              {STATES.map((s) => (
                <option key={s.value} value={s.value} className="bg-[#0B1120]">
                  {s.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className={labelClass}>Late Payment Interest Rate</label>
            <div className="flex gap-2">
              {([
                { value: '2' as const, label: '2% p.a.' },
                { value: '5' as const, label: '5% p.a.' },
                { value: '10' as const, label: '10% p.a.' },
              ]).map((option) => (
                <button
                  key={option.value}
                  onClick={() => setLatePaymentRate(option.value)}
                  className={`flex-1 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    latePaymentRate === option.value
                      ? 'bg-gradient-to-r from-teal-500/30 to-blue-500/30 border border-teal-500/40 text-teal-400'
                      : 'bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Generate Button */}
      <div className="flex justify-center">
        <button
          onClick={handleGenerate}
          className="bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold rounded-xl px-8 py-4 hover:from-teal-400 hover:to-blue-400 transition-all text-lg"
        >
          Generate Service Agreement
        </button>
      </div>

      {/* Generated Output */}
      {generated && (
        <>
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-white heading-font">Contract Preview</h3>
              <span className="text-xs px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 font-medium">
                {PROJECT_TYPES.find((p) => p.value === projectType)?.label || 'Service'} Agreement
              </span>
            </div>

            <div className="bg-slate-900/50 border border-white/10 rounded-xl p-6 font-mono text-sm whitespace-pre-wrap text-slate-300 leading-relaxed max-h-[600px] overflow-y-auto">
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

          {/* Tips */}
          <div className="bg-teal-500/5 border border-teal-500/20 rounded-2xl p-6">
            <h4 className="text-teal-400 font-semibold mb-2">Before You Send</h4>
            <ul className="text-sm text-slate-400 space-y-2">
              <li>Review every clause carefully and customise the language to match your specific engagement.</li>
              <li>This is a template, not legal advice. For high-value projects, consider having a solicitor review the agreement.</li>
              <li>Both parties should sign before any work begins. Digital signatures (DocuSign, HelloSign) are legally valid in Australia under the Electronic Transactions Act.</li>
              <li>Keep a signed copy of every contract for at least 5 years (ATO record-keeping requirement).</li>
              <li>If the scope changes during the project, create a written amendment or change order — don&apos;t rely on verbal agreements.</li>
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
                  Create professional invoices for your projects
                </p>
              </a>
              <a
                href="/tools/quote-calculator"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-500/30 rounded-xl p-4 transition-all group"
              >
                <p className="text-white font-medium text-sm group-hover:text-teal-400 transition-colors">
                  Quote Calculator
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Generate accurate project quotes
                </p>
              </a>
              <a
                href="/tools/price-increase-letter"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-500/30 rounded-xl p-4 transition-all group"
              >
                <p className="text-white font-medium text-sm group-hover:text-teal-400 transition-colors">
                  Price Increase Letter
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Notify clients of rate changes professionally
                </p>
              </a>
            </div>
          </div>

          <div className="text-center">
            <p className="text-xs text-slate-500 max-w-2xl mx-auto">
              This tool generates service agreement templates for Australian freelancers and sole traders.
              The generated contract is a template — review and customise it before use. This does not
              constitute legal advice. For complex or high-value engagements, seek independent legal counsel.
            </p>
          </div>
        </>
      )}
    </div>
  );
}
