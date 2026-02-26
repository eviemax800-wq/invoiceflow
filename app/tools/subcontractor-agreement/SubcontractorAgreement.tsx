'use client';

import { useState, useMemo, useCallback } from 'react';

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

type PaymentType = 'fixed' | 'hourly' | 'daily' | 'milestone';

type PaymentTerms = 'net-7' | 'net-14' | 'net-30';

type IPOwnership = 'contractor-retains' | 'client-owns' | 'shared';

type NonCompetePeriod = 'none' | '3-months' | '6-months' | '12-months';

type ConfidentialityLevel = 'standard' | 'enhanced';

type NoticePeriod = '7-days' | '14-days' | '30-days';

type WorkLocation = 'remote' | 'on-site' | 'hybrid';

type AustralianState = 'NSW' | 'VIC' | 'QLD' | 'SA' | 'WA' | 'TAS' | 'NT' | 'ACT';

/* ---- Constants ---- */

const PAYMENT_TYPE_OPTIONS: { value: PaymentType; label: string }[] = [
  { value: 'fixed', label: 'Fixed Fee' },
  { value: 'hourly', label: 'Hourly' },
  { value: 'daily', label: 'Daily' },
  { value: 'milestone', label: 'Milestone' },
];

const PAYMENT_TERMS_OPTIONS: { value: PaymentTerms; label: string }[] = [
  { value: 'net-7', label: 'Net 7 (7 days)' },
  { value: 'net-14', label: 'Net 14 (14 days)' },
  { value: 'net-30', label: 'Net 30 (30 days)' },
];

const IP_OPTIONS: { value: IPOwnership; label: string; desc: string }[] = [
  { value: 'contractor-retains', label: 'Contractor Retains', desc: 'Subcontractor keeps all IP created' },
  { value: 'client-owns', label: 'Client Owns', desc: 'All IP transfers to your business on payment' },
  { value: 'shared', label: 'Shared', desc: 'Both parties can use the work product' },
];

const NONCOMPETE_OPTIONS: { value: NonCompetePeriod; label: string }[] = [
  { value: 'none', label: 'None' },
  { value: '3-months', label: '3 Months' },
  { value: '6-months', label: '6 Months' },
  { value: '12-months', label: '12 Months' },
];

const WORK_LOCATION_OPTIONS: { value: WorkLocation; label: string }[] = [
  { value: 'remote', label: 'Remote' },
  { value: 'on-site', label: 'On-Site' },
  { value: 'hybrid', label: 'Hybrid' },
];

const NOTICE_OPTIONS: { value: NoticePeriod; label: string }[] = [
  { value: '7-days', label: '7 Days' },
  { value: '14-days', label: '14 Days' },
  { value: '30-days', label: '30 Days' },
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

export default function SubcontractorAgreement() {
  // Your business details (principal)
  const [principalName, setPrincipalName] = useState('');
  const [principalABN, setPrincipalABN] = useState('');
  const [principalAddress, setPrincipalAddress] = useState('');

  // Subcontractor details
  const [subcontractorName, setSubcontractorName] = useState('');
  const [subcontractorABN, setSubcontractorABN] = useState('');
  const [subcontractorAddress, setSubcontractorAddress] = useState('');

  // Project details
  const [serviceDescription, setServiceDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [isOngoing, setIsOngoing] = useState(false);

  // Payment
  const [paymentType, setPaymentType] = useState<PaymentType>('fixed');
  const [paymentAmount, setPaymentAmount] = useState<number>(0);
  const [paymentTerms, setPaymentTerms] = useState<PaymentTerms>('net-14');
  const [principalGST, setPrincipalGST] = useState(true);
  const [subcontractorGST, setSubcontractorGST] = useState(true);

  // Work arrangements
  const [workLocation, setWorkLocation] = useState<WorkLocation>('remote');

  // Legal terms
  const [ipOwnership, setIPOwnership] = useState<IPOwnership>('client-owns');
  const [nonCompetePeriod, setNonCompetePeriod] = useState<NonCompetePeriod>('none');
  const [nonCompeteRadius, setNonCompeteRadius] = useState('');
  const [confidentiality, setConfidentiality] = useState<ConfidentialityLevel>('standard');
  const [insuranceRequired, setInsuranceRequired] = useState(false);
  const [insurancePI, setInsurancePI] = useState(true);
  const [insurancePublicLiability, setInsurancePublicLiability] = useState(false);
  const [noticePeriod, setNoticePeriod] = useState<NoticePeriod>('14-days');
  const [governingState, setGoverningState] = useState<AustralianState>('VIC');

  // UI state
  const [generated, setGenerated] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activeSection, setActiveSection] = useState(0);

  // Payment label
  const paymentTypeLabel = useMemo(() => {
    switch (paymentType) {
      case 'fixed': return 'fixed fee';
      case 'hourly': return 'per hour';
      case 'daily': return 'per day';
      case 'milestone': return 'per milestone';
    }
  }, [paymentType]);

  // GST calculations
  const gstCalcs = useMemo(() => {
    const base = paymentAmount || 0;
    const gst = subcontractorGST ? base * 0.1 : 0;
    const total = base + gst;
    return { base, gst, total };
  }, [paymentAmount, subcontractorGST]);

  // Notice period text
  const noticePeriodText = useMemo(() => {
    switch (noticePeriod) {
      case '7-days': return 'seven (7) days';
      case '14-days': return 'fourteen (14) days';
      case '30-days': return 'thirty (30) days';
    }
  }, [noticePeriod]);

  // Non-compete period text
  const nonCompeteText = useMemo(() => {
    switch (nonCompetePeriod) {
      case 'none': return '';
      case '3-months': return 'three (3) months';
      case '6-months': return 'six (6) months';
      case '12-months': return 'twelve (12) months';
    }
  }, [nonCompetePeriod]);

  // Build agreement text
  const generatedText = useMemo(() => {
    const principal = principalName || '[Your Business Name]';
    const prinABN = principalABN || '[Your ABN]';
    const prinAddress = principalAddress || '[Your Business Address]';
    const sub = subcontractorName || '[Subcontractor Name]';
    const subABN = subcontractorABN || '[Subcontractor ABN]';
    const subAddress = subcontractorAddress || '[Subcontractor Address]';
    const services = serviceDescription || '[Description of services to be performed]';
    const start = startDate ? formatDateAU(startDate) : '[Start Date]';
    const end = isOngoing ? 'Ongoing (no fixed end date)' : endDate ? formatDateAU(endDate) : '[End Date]';
    const today = formatDateAU(todayISO());
    const stateFullName = STATE_FULL_NAMES[governingState];
    const amt = paymentAmount || 0;

    let sectionNum = 0;
    const section = () => {
      sectionNum++;
      return sectionNum;
    };

    let text = '';

    // Title
    text += `${'='.repeat(60)}\n`;
    text += `SUBCONTRACTOR AGREEMENT\n`;
    text += `${'='.repeat(60)}\n\n`;

    text += `Date: ${today}\n`;
    text += `Agreement Reference: SCA-${todayISO().replace(/-/g, '')}\n\n`;

    // 1. Parties
    const partiesNum = section();
    text += `${partiesNum}. PARTIES\n`;
    text += `${'─'.repeat(45)}\n\n`;
    text += `This Subcontractor Agreement ("Agreement") is entered into as of ${start} by and between:\n\n`;
    text += `PRINCIPAL ("Principal"):\n`;
    text += `  Business Name:  ${principal}\n`;
    text += `  ABN:            ${prinABN}\n`;
    text += `  Address:        ${prinAddress}\n`;
    text += `  GST Registered: ${principalGST ? 'Yes' : 'No'}\n\n`;
    text += `SUBCONTRACTOR ("Subcontractor"):\n`;
    text += `  Business Name:  ${sub}\n`;
    text += `  ABN:            ${subABN}\n`;
    text += `  Address:        ${subAddress}\n`;
    text += `  GST Registered: ${subcontractorGST ? 'Yes' : 'No'}\n\n`;
    text += `The Principal and Subcontractor are collectively referred to as the "Parties."\n\n`;

    // 2. Engagement & Services
    const engNum = section();
    text += `${engNum}. ENGAGEMENT & SERVICES\n`;
    text += `${'─'.repeat(45)}\n\n`;
    text += `${engNum}.1 The Principal engages the Subcontractor to perform the following services ("Services"):\n\n`;
    text += `${services}\n\n`;
    text += `${engNum}.2 The Subcontractor shall perform the Services with due care, skill, and diligence in accordance with industry standards and any specific requirements communicated by the Principal in writing.\n\n`;
    text += `${engNum}.3 Work Location: ${workLocation === 'remote' ? 'The Subcontractor will perform the Services remotely from their own premises.' : workLocation === 'on-site' ? 'The Subcontractor will perform the Services on-site at the Principal\'s premises or a location specified by the Principal.' : 'The Subcontractor will perform the Services using a combination of remote work and on-site attendance as agreed between the Parties.'}\n\n`;
    text += `${engNum}.4 The Subcontractor shall provide their own equipment, tools, and resources necessary to perform the Services unless otherwise agreed in writing.\n\n`;

    // 3. Term
    const termNum = section();
    text += `${termNum}. TERM\n`;
    text += `${'─'.repeat(45)}\n\n`;
    text += `${termNum}.1 Commencement Date: ${start}\n`;
    text += `${termNum}.2 ${isOngoing ? 'Duration: This Agreement continues on an ongoing basis until terminated by either Party in accordance with the termination provisions of this Agreement.' : `End Date: ${end}. This Agreement expires on the End Date unless extended by written agreement of both Parties.`}\n\n`;

    // 4. Payment Terms
    const payNum = section();
    text += `${payNum}. PAYMENT TERMS\n`;
    text += `${'─'.repeat(45)}\n\n`;

    if (paymentType === 'fixed') {
      text += `${payNum}.1 Total Fee: ${formatCurrency(amt)}`;
      if (subcontractorGST) {
        text += ` (ex. GST)\n`;
        text += `     GST (10%):        ${formatCurrency(gstCalcs.gst)}\n`;
        text += `     Total (inc. GST): ${formatCurrency(gstCalcs.total)}\n`;
      } else {
        text += ` (GST not applicable — Subcontractor is not registered for GST)\n`;
      }
    } else if (paymentType === 'hourly') {
      text += `${payNum}.1 Hourly Rate: ${formatCurrency(amt)} per hour`;
      if (subcontractorGST) {
        text += ` (ex. GST)\n`;
        text += `     GST (10%):           ${formatCurrency(gstCalcs.gst)} per hour\n`;
        text += `     Rate (inc. GST):     ${formatCurrency(gstCalcs.total)} per hour\n`;
      } else {
        text += ` (GST not applicable)\n`;
      }
    } else if (paymentType === 'daily') {
      text += `${payNum}.1 Daily Rate: ${formatCurrency(amt)} per day`;
      if (subcontractorGST) {
        text += ` (ex. GST)\n`;
        text += `     GST (10%):           ${formatCurrency(gstCalcs.gst)} per day\n`;
        text += `     Rate (inc. GST):     ${formatCurrency(gstCalcs.total)} per day\n`;
      } else {
        text += ` (GST not applicable)\n`;
      }
    } else {
      text += `${payNum}.1 Milestone Payments: ${formatCurrency(amt)} per milestone`;
      if (subcontractorGST) {
        text += ` (ex. GST)\n`;
        text += `     GST (10%):                   ${formatCurrency(gstCalcs.gst)} per milestone\n`;
        text += `     Per milestone (inc. GST):     ${formatCurrency(gstCalcs.total)}\n`;
      } else {
        text += ` (GST not applicable)\n`;
      }
      text += `\n${payNum}.2 Milestones and deliverables for each payment shall be agreed in writing between the Parties prior to commencement of the relevant stage of work.\n`;
    }

    const paymentDays = paymentTerms === 'net-7' ? 'seven (7)' : paymentTerms === 'net-14' ? 'fourteen (14)' : 'thirty (30)';
    const nextSub = paymentType === 'milestone' ? 3 : 2;
    text += `\n${payNum}.${nextSub} Payment is due within ${paymentDays} days of receipt of a valid tax invoice from the Subcontractor.\n\n`;
    text += `${payNum}.${nextSub + 1} The Subcontractor shall submit invoices that include:\n`;
    text += `  (a) The Subcontractor's name, ABN, and address;\n`;
    text += `  (b) A description of Services performed;\n`;
    text += `  (c) The period covered by the invoice;\n`;
    if (paymentType === 'hourly') {
      text += `  (d) A detailed record of hours worked;\n`;
    } else if (paymentType === 'daily') {
      text += `  (d) A detailed record of days worked;\n`;
    }
    text += `  ${paymentType === 'hourly' || paymentType === 'daily' ? '(e)' : '(d)'} The total amount due${subcontractorGST ? ', showing GST as a separate line item' : ''}; and\n`;
    text += `  ${paymentType === 'hourly' || paymentType === 'daily' ? '(f)' : '(e)'} Payment details (bank account for EFT).\n\n`;

    if (subcontractorGST) {
      text += `${payNum}.${nextSub + 2} GST: The Subcontractor is registered for GST and will charge GST at the prevailing rate (currently 10%) on all invoices. The Principal will pay the GST component in addition to the fee.\n\n`;
    } else {
      text += `${payNum}.${nextSub + 2} GST: The Subcontractor is not registered for GST. No GST will be charged on invoices. If the Subcontractor becomes registered for GST during the term of this Agreement, they must notify the Principal immediately.\n\n`;
    }

    // 5. Independent Contractor Status
    const icNum = section();
    text += `${icNum}. INDEPENDENT CONTRACTOR STATUS\n`;
    text += `${'─'.repeat(45)}\n\n`;
    text += `${icNum}.1 The Subcontractor is engaged as an independent contractor, not as an employee, partner, agent, or joint venturer of the Principal. Nothing in this Agreement creates an employment relationship.\n\n`;
    text += `${icNum}.2 The Subcontractor:\n`;
    text += `  (a) Controls the manner, means, and methods by which the Services are performed;\n`;
    text += `  (b) Is free to determine their own working hours, subject to reasonable deadlines agreed with the Principal;\n`;
    text += `  (c) Provides their own tools, equipment, and resources;\n`;
    text += `  (d) Is responsible for their own taxation obligations, including income tax, GST (if applicable), and any other statutory obligations;\n`;
    text += `  (e) Is not entitled to employee benefits including superannuation contributions, annual leave, sick leave, long service leave, or workers' compensation from the Principal;\n`;
    text += `  (f) May engage employees or sub-subcontractors to assist in performing the Services, provided the Subcontractor remains responsible for the quality and timeliness of all work; and\n`;
    text += `  (g) Is free to perform work for other clients, subject to any non-competition provisions in this Agreement.\n\n`;
    text += `${icNum}.3 The Subcontractor is responsible for obtaining and maintaining their own ABN, public liability insurance (if required), professional indemnity insurance (if required), and any licences or registrations required to perform the Services.\n\n`;
    text += `${icNum}.4 If the Australian Taxation Office (ATO) or any court or tribunal determines that the relationship between the Parties is one of employment, the Parties agree to negotiate in good faith to restructure the arrangement to preserve the independent contractor relationship, or to terminate this Agreement.\n\n`;

    // 6. Intellectual Property
    const ipNum = section();
    text += `${ipNum}. INTELLECTUAL PROPERTY\n`;
    text += `${'─'.repeat(45)}\n\n`;

    if (ipOwnership === 'client-owns') {
      text += `${ipNum}.1 All intellectual property rights in any work product, materials, deliverables, or output created by the Subcontractor in the performance of the Services ("Work Product") shall, upon creation, vest in and be the exclusive property of the Principal.\n\n`;
      text += `${ipNum}.2 To the extent that any intellectual property rights in the Work Product do not automatically vest in the Principal, the Subcontractor hereby assigns all such rights to the Principal upon receipt of full payment for the relevant Services.\n\n`;
      text += `${ipNum}.3 The Subcontractor waives all moral rights in the Work Product to the maximum extent permitted by the Copyright Act 1968 (Cth).\n\n`;
    } else if (ipOwnership === 'contractor-retains') {
      text += `${ipNum}.1 All intellectual property rights in any work product, materials, deliverables, or output created by the Subcontractor in the performance of the Services ("Work Product") shall remain the property of the Subcontractor.\n\n`;
      text += `${ipNum}.2 The Subcontractor grants the Principal a non-exclusive, perpetual, irrevocable, royalty-free licence to use, reproduce, modify, and display the Work Product for the Principal's business purposes.\n\n`;
    } else {
      text += `${ipNum}.1 All intellectual property rights in any work product, materials, deliverables, or output created by the Subcontractor in the performance of the Services ("Work Product") shall be jointly owned by the Principal and the Subcontractor.\n\n`;
      text += `${ipNum}.2 Each Party may use, reproduce, modify, and display the Work Product for their own business purposes without the consent of the other Party.\n\n`;
      text += `${ipNum}.3 Neither Party may assign, licence, or transfer their interest in the Work Product to a third party without the prior written consent of the other Party.\n\n`;
    }

    text += `${ipNum}.${ipOwnership === 'shared' ? '4' : '3'} Pre-Existing IP: Any intellectual property owned by the Subcontractor prior to the commencement of this Agreement ("Pre-Existing IP") remains the property of the Subcontractor. Where Pre-Existing IP is incorporated into the Work Product, the Subcontractor grants the Principal a non-exclusive, perpetual, royalty-free licence to use the Pre-Existing IP solely as part of the Work Product.\n\n`;

    // 7. Confidentiality
    const confNum = section();
    text += `${confNum}. CONFIDENTIALITY\n`;
    text += `${'─'.repeat(45)}\n\n`;
    text += `${confNum}.1 Each Party agrees to keep confidential all information disclosed by the other Party that is designated as confidential, or that a reasonable person would understand to be confidential given the nature of the information and the circumstances of disclosure ("Confidential Information").\n\n`;
    text += `${confNum}.2 Confidential Information includes, but is not limited to: business strategies, financial information, client lists, pricing structures, trade secrets, technical specifications, proprietary processes, and unpublished materials.\n\n`;
    text += `${confNum}.3 The receiving Party shall:\n`;
    text += `  (a) Not disclose Confidential Information to any third party without the prior written consent of the disclosing Party;\n`;
    text += `  (b) Use Confidential Information solely for the purposes of performing obligations under this Agreement;\n`;
    text += `  (c) Take reasonable measures to protect the confidentiality of the information, using at least the same degree of care used to protect its own confidential information; and\n`;
    text += `  (d) Promptly notify the disclosing Party if it becomes aware of any unauthorised disclosure.\n\n`;

    if (confidentiality === 'enhanced') {
      text += `${confNum}.4 Enhanced Confidentiality Provisions:\n`;
      text += `  (a) The Subcontractor shall not retain any copies of Confidential Information after the termination or expiry of this Agreement, and shall certify in writing that all copies have been destroyed or returned;\n`;
      text += `  (b) The Subcontractor shall not discuss the existence or nature of this engagement with any third party without the Principal's prior written consent;\n`;
      text += `  (c) The Subcontractor shall implement appropriate technical and organisational security measures to protect digital Confidential Information, including encryption of stored data and secure deletion procedures; and\n`;
      text += `  (d) Any breach of this confidentiality clause shall entitle the disclosing Party to seek injunctive relief in addition to any other remedies available at law.\n\n`;
      text += `${confNum}.5 The obligations in this clause survive termination of this Agreement and continue for a period of five (5) years from the date of disclosure.\n\n`;
    } else {
      text += `${confNum}.4 Exceptions: The confidentiality obligations do not apply to information that:\n`;
      text += `  (a) Is or becomes publicly available through no fault of the receiving Party;\n`;
      text += `  (b) Was already known to the receiving Party prior to disclosure;\n`;
      text += `  (c) Is independently developed by the receiving Party without reference to the Confidential Information; or\n`;
      text += `  (d) Is required to be disclosed by law, regulation, or court order (provided the receiving Party gives prompt notice to the disclosing Party).\n\n`;
      text += `${confNum}.5 The obligations in this clause survive termination of this Agreement and continue for a period of two (2) years from the date of disclosure.\n\n`;
    }

    // 8. Non-Competition / Non-Solicitation (if applicable)
    if (nonCompetePeriod !== 'none') {
      const ncNum = section();
      text += `${ncNum}. NON-COMPETITION & NON-SOLICITATION\n`;
      text += `${'─'.repeat(45)}\n\n`;
      text += `${ncNum}.1 Non-Competition: During the term of this Agreement and for a period of ${nonCompeteText} following its termination or expiry, the Subcontractor shall not directly or indirectly engage in, or provide services to, any business that competes with the Principal's business`;
      if (nonCompeteRadius && nonCompeteRadius.toLowerCase() !== 'nationwide') {
        text += ` within a ${nonCompeteRadius} kilometre radius of the Principal's primary business address.\n\n`;
      } else if (nonCompeteRadius && nonCompeteRadius.toLowerCase() === 'nationwide') {
        text += ` anywhere in Australia.\n\n`;
      } else {
        text += `.\n\n`;
      }
      text += `${ncNum}.2 Non-Solicitation: During the term of this Agreement and for a period of ${nonCompeteText} following its termination or expiry, the Subcontractor shall not directly or indirectly:\n`;
      text += `  (a) Solicit, entice, or attempt to solicit or entice any client or customer of the Principal with whom the Subcontractor had contact during the term of this Agreement; or\n`;
      text += `  (b) Solicit, recruit, or hire any employee, contractor, or agent of the Principal who was involved in the performance of this Agreement.\n\n`;
      text += `${ncNum}.3 The Subcontractor acknowledges that these restrictions are reasonable and necessary to protect the Principal's legitimate business interests, including client relationships and confidential information.\n\n`;
      text += `${ncNum}.4 If any court or tribunal finds that these restrictions are unenforceable in their current form, the Parties agree that the court may modify the restrictions to the minimum extent necessary to make them enforceable.\n\n`;
    }

    // 9. Insurance & Indemnity
    const insNum = section();
    text += `${insNum}. INSURANCE & INDEMNITY\n`;
    text += `${'─'.repeat(45)}\n\n`;

    if (insuranceRequired) {
      const insuranceTypes: string[] = [];
      if (insurancePI) insuranceTypes.push('Professional Indemnity Insurance');
      if (insurancePublicLiability) insuranceTypes.push('Public Liability Insurance');

      text += `${insNum}.1 The Subcontractor shall obtain and maintain the following insurance policies for the duration of this Agreement and for a period of twelve (12) months following its termination:\n`;
      insuranceTypes.forEach((type, i) => {
        text += `  (${String.fromCharCode(97 + i)}) ${type} with a minimum coverage of $1,000,000 per claim;\n`;
      });
      text += `\n${insNum}.2 The Subcontractor shall provide evidence of current insurance coverage to the Principal upon request.\n\n`;
    } else {
      text += `${insNum}.1 The Principal does not require the Subcontractor to hold specific insurance policies for the purposes of this Agreement. However, the Principal recommends that the Subcontractor maintains appropriate professional indemnity and/or public liability insurance for their own protection.\n\n`;
    }

    text += `${insNum}.${insuranceRequired ? '3' : '2'} Indemnity: The Subcontractor indemnifies the Principal against all claims, losses, damages, costs, and expenses (including legal costs on a solicitor-client basis) arising from or in connection with:\n`;
    text += `  (a) Any breach of this Agreement by the Subcontractor;\n`;
    text += `  (b) Any negligent or wilful act or omission of the Subcontractor in the performance of the Services;\n`;
    text += `  (c) Any claim by a third party arising from the Subcontractor's performance of the Services; and\n`;
    text += `  (d) Any claim that the Work Product infringes the intellectual property rights of a third party.\n\n`;
    text += `${insNum}.${insuranceRequired ? '4' : '3'} The Principal's total liability under this Agreement shall not exceed the total fees paid or payable to the Subcontractor under this Agreement.\n\n`;

    // 10. Termination
    const termEndNum = section();
    text += `${termEndNum}. TERMINATION\n`;
    text += `${'─'.repeat(45)}\n\n`;
    text += `${termEndNum}.1 Either Party may terminate this Agreement by providing ${noticePeriodText}' written notice to the other Party.\n\n`;
    text += `${termEndNum}.2 Either Party may terminate this Agreement immediately by written notice if the other Party:\n`;
    text += `  (a) Commits a material breach of this Agreement and fails to remedy such breach within seven (7) days of receiving written notice of the breach;\n`;
    text += `  (b) Becomes insolvent, enters into administration or liquidation, or is otherwise unable to meet its obligations; or\n`;
    text += `  (c) Engages in conduct that brings the other Party into disrepute.\n\n`;
    text += `${termEndNum}.3 Upon termination:\n`;
    text += `  (a) The Subcontractor shall be paid for all Services satisfactorily completed up to the date of termination;\n`;
    text += `  (b) The Subcontractor shall promptly deliver to the Principal all Work Product (including work in progress) created up to the date of termination;\n`;
    text += `  (c) Each Party shall return or destroy all Confidential Information of the other Party; and\n`;
    text += `  (d) All provisions that by their nature should survive termination shall continue in full force and effect, including confidentiality, intellectual property, indemnity, and dispute resolution.\n\n`;

    // 11. Dispute Resolution
    const dispNum = section();
    text += `${dispNum}. DISPUTE RESOLUTION\n`;
    text += `${'─'.repeat(45)}\n\n`;
    text += `${dispNum}.1 Negotiation: If a dispute arises between the Parties in connection with this Agreement, the Parties shall first attempt to resolve the dispute through good-faith negotiation within fourteen (14) days of one Party notifying the other of the dispute.\n\n`;
    text += `${dispNum}.2 Mediation: If the dispute is not resolved through negotiation, the Parties agree to submit the dispute to mediation administered by the Resolution Institute (or a similar mediation service) before commencing any legal proceedings. The costs of mediation shall be shared equally.\n\n`;
    text += `${dispNum}.3 Courts: If the dispute is not resolved through mediation within thirty (30) days of referral, either Party may commence proceedings in the courts of ${stateFullName}, Australia.\n\n`;

    // 12. General Provisions
    const genNum = section();
    text += `${genNum}. GENERAL PROVISIONS\n`;
    text += `${'─'.repeat(45)}\n\n`;
    text += `${genNum}.1 Governing Law: This Agreement is governed by and construed in accordance with the laws of ${stateFullName}, Australia. The Parties submit to the exclusive jurisdiction of the courts of ${stateFullName}.\n\n`;
    text += `${genNum}.2 Entire Agreement: This Agreement constitutes the entire agreement between the Parties in respect of its subject matter and supersedes all prior negotiations, representations, warranties, commitments, and understandings, whether written or oral.\n\n`;
    text += `${genNum}.3 Amendments: Any amendments to this Agreement must be in writing and signed by both Parties.\n\n`;
    text += `${genNum}.4 Severability: If any provision of this Agreement is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.\n\n`;
    text += `${genNum}.5 Notices: All notices under this Agreement must be in writing and sent to the addresses specified above, or to such other address as a Party may notify in writing.\n\n`;
    text += `${genNum}.6 Assignment: Neither Party may assign or transfer this Agreement or any rights or obligations under it without the prior written consent of the other Party.\n\n`;
    text += `${genNum}.7 Waiver: A failure or delay by a Party in exercising any right or remedy under this Agreement does not constitute a waiver of that right or remedy.\n\n`;

    // Acceptance / Signature
    text += `${'='.repeat(60)}\n`;
    text += `ACCEPTANCE & SIGNATURES\n`;
    text += `${'='.repeat(60)}\n\n`;
    text += `By signing below, the Parties acknowledge that they have read, understood, and agree to be bound by the terms and conditions of this Subcontractor Agreement.\n\n\n`;
    text += `PRINCIPAL:\n\n`;
    text += `Signed: ________________________________\n\n`;
    text += `Name:   ${principal}\n`;
    text += `ABN:    ${prinABN}\n`;
    text += `Date:   ________________________________\n\n\n`;
    text += `SUBCONTRACTOR:\n\n`;
    text += `Signed: ________________________________\n\n`;
    text += `Name:   ${sub}\n`;
    text += `ABN:    ${subABN}\n`;
    text += `Date:   ________________________________\n\n\n`;

    // Disclaimer
    text += `${'─'.repeat(60)}\n`;
    text += `DISCLAIMER: This document is a template generated by InvoiceFlow\n`;
    text += `and is provided for informational purposes only. It does not\n`;
    text += `constitute legal advice. You should review this agreement\n`;
    text += `carefully and consult a qualified solicitor for your specific\n`;
    text += `situation. InvoiceFlow accepts no liability for any loss or\n`;
    text += `damage arising from the use of this template.\n`;
    text += `${'─'.repeat(60)}\n`;

    return text;
  }, [
    principalName, principalABN, principalAddress,
    subcontractorName, subcontractorABN, subcontractorAddress,
    serviceDescription, startDate, endDate, isOngoing,
    paymentType, paymentAmount, paymentTerms,
    principalGST, subcontractorGST, gstCalcs,
    workLocation, ipOwnership,
    nonCompetePeriod, nonCompeteRadius, nonCompeteText,
    confidentiality, insuranceRequired, insurancePI, insurancePublicLiability,
    noticePeriod, noticePeriodText, governingState,
  ]);

  const handleGenerate = () => setGenerated(true);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(generatedText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  }, [generatedText]);

  const inputClass =
    'w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/25 transition-all text-sm';
  const labelClass = 'block text-sm font-medium text-slate-300 mb-1.5';
  const selectClass =
    'w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/25 transition-all text-sm appearance-none';

  const sections = [
    'Business Details',
    'Project & Payment',
    'Legal Terms',
  ];

  return (
    <div className="space-y-8">
      {/* Progress Steps */}
      <div className="flex items-center justify-center gap-2 mb-4">
        {sections.map((label, idx) => (
          <button
            key={label}
            onClick={() => setActiveSection(idx)}
            className="flex items-center gap-2"
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                idx === activeSection
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                  : idx < activeSection
                    ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                    : 'bg-white/5 text-slate-500 border border-white/10'
              }`}
            >
              {idx < activeSection ? (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                idx + 1
              )}
            </div>
            <span
              className={`text-sm font-medium hidden sm:inline transition-colors ${
                idx === activeSection ? 'text-white' : 'text-slate-500'
              }`}
            >
              {label}
            </span>
            {idx < sections.length - 1 && (
              <div className={`w-8 h-px mx-1 ${idx < activeSection ? 'bg-cyan-500/40' : 'bg-white/10'}`} />
            )}
          </button>
        ))}
      </div>

      {/* Section 0: Business Details */}
      {activeSection === 0 && (
        <>
          {/* Your Business Details */}
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white heading-font mb-6">Your Business Details (Principal)</h3>
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="sm:col-span-2">
                <label className={labelClass}>Business Name</label>
                <input
                  type="text"
                  value={principalName}
                  onChange={(e) => setPrincipalName(e.target.value)}
                  className={inputClass}
                  placeholder="e.g. Mitchell Digital Pty Ltd"
                />
              </div>
              <div>
                <label className={labelClass}>ABN</label>
                <input
                  type="text"
                  value={principalABN}
                  onChange={(e) => setPrincipalABN(e.target.value)}
                  className={inputClass}
                  placeholder="e.g. 12 345 678 901"
                />
              </div>
              <div>
                <label className={labelClass}>Business Address</label>
                <input
                  type="text"
                  value={principalAddress}
                  onChange={(e) => setPrincipalAddress(e.target.value)}
                  className={inputClass}
                  placeholder="e.g. 123 Collins St, Melbourne VIC 3000"
                />
              </div>
            </div>
            {/* GST Toggle */}
            <div className="mt-5 flex items-center justify-between py-3 px-4 rounded-xl bg-white/5">
              <div>
                <span className="text-slate-300 text-sm">GST Registered</span>
                <p className="text-xs text-slate-500 mt-0.5">Your business is registered for GST</p>
              </div>
              <button
                onClick={() => setPrincipalGST(!principalGST)}
                className={`relative w-14 h-7 rounded-full transition-all ${
                  principalGST ? 'bg-gradient-to-r from-cyan-500 to-blue-500' : 'bg-white/10'
                }`}
              >
                <div
                  className={`absolute top-0.5 left-0.5 h-6 w-6 rounded-full bg-white shadow-md transition-transform ${
                    principalGST ? 'translate-x-7' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Subcontractor Details */}
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white heading-font mb-6">Subcontractor Details</h3>
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="sm:col-span-2">
                <label className={labelClass}>Subcontractor Name / Business Name</label>
                <input
                  type="text"
                  value={subcontractorName}
                  onChange={(e) => setSubcontractorName(e.target.value)}
                  className={inputClass}
                  placeholder="e.g. Jane Smith Design"
                />
              </div>
              <div>
                <label className={labelClass}>ABN</label>
                <input
                  type="text"
                  value={subcontractorABN}
                  onChange={(e) => setSubcontractorABN(e.target.value)}
                  className={inputClass}
                  placeholder="e.g. 98 765 432 109"
                />
              </div>
              <div>
                <label className={labelClass}>Address</label>
                <input
                  type="text"
                  value={subcontractorAddress}
                  onChange={(e) => setSubcontractorAddress(e.target.value)}
                  className={inputClass}
                  placeholder="e.g. 45 Queen St, Brisbane QLD 4000"
                />
              </div>
            </div>
            {/* GST Toggle */}
            <div className="mt-5 flex items-center justify-between py-3 px-4 rounded-xl bg-white/5">
              <div>
                <span className="text-slate-300 text-sm">GST Registered</span>
                <p className="text-xs text-slate-500 mt-0.5">The subcontractor is registered for GST</p>
              </div>
              <button
                onClick={() => setSubcontractorGST(!subcontractorGST)}
                className={`relative w-14 h-7 rounded-full transition-all ${
                  subcontractorGST ? 'bg-gradient-to-r from-cyan-500 to-blue-500' : 'bg-white/10'
                }`}
              >
                <div
                  className={`absolute top-0.5 left-0.5 h-6 w-6 rounded-full bg-white shadow-md transition-transform ${
                    subcontractorGST ? 'translate-x-7' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Next Button */}
          <div className="flex justify-end">
            <button
              onClick={() => setActiveSection(1)}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl px-6 py-3 hover:from-cyan-400 hover:to-blue-400 transition-all"
            >
              Next: Project &amp; Payment
            </button>
          </div>
        </>
      )}

      {/* Section 1: Project & Payment */}
      {activeSection === 1 && (
        <>
          {/* Project Details */}
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white heading-font mb-6">Project Details</h3>
            <div className="space-y-5">
              <div>
                <label className={labelClass}>Service Description</label>
                <textarea
                  value={serviceDescription}
                  onChange={(e) => setServiceDescription(e.target.value)}
                  className={`${inputClass} min-h-[120px] resize-y`}
                  placeholder={`Describe the services the subcontractor will perform. Be specific.\n\ne.g. Design and develop responsive front-end components for the client's e-commerce platform using React and Tailwind CSS. Includes:\n- 12 product page templates\n- Shopping cart UI\n- Checkout flow (4 steps)\n- Mobile-responsive design for all components`}
                />
              </div>

              {/* Work Location */}
              <div>
                <label className={labelClass}>Work Location</label>
                <div className="flex gap-2">
                  {WORK_LOCATION_OPTIONS.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setWorkLocation(option.value)}
                      className={`flex-1 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                        workLocation === option.value
                          ? 'bg-gradient-to-r from-cyan-500/30 to-blue-500/30 border border-cyan-500/40 text-cyan-400'
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
            <div className="mt-5 flex items-center justify-between py-3 px-4 rounded-xl bg-white/5">
              <div>
                <span className="text-slate-300 text-sm">Ongoing Engagement</span>
                <p className="text-xs text-slate-500 mt-0.5">No fixed end date — continues until terminated</p>
              </div>
              <button
                onClick={() => setIsOngoing(!isOngoing)}
                className={`relative w-14 h-7 rounded-full transition-all ${
                  isOngoing ? 'bg-gradient-to-r from-cyan-500 to-blue-500' : 'bg-white/10'
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
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {PAYMENT_TYPE_OPTIONS.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setPaymentType(option.value)}
                    className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                      paymentType === option.value
                        ? 'bg-gradient-to-r from-cyan-500/30 to-blue-500/30 border border-cyan-500/40 text-cyan-400'
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
                    ? 'Total Fee (AUD)'
                    : paymentType === 'hourly'
                      ? 'Hourly Rate (AUD)'
                      : paymentType === 'daily'
                        ? 'Daily Rate (AUD)'
                        : 'Per Milestone (AUD)'}
                </label>
                <input
                  type="number"
                  value={paymentAmount || ''}
                  onChange={(e) => setPaymentAmount(Math.max(0, parseFloat(e.target.value) || 0))}
                  className={inputClass}
                  min="0"
                  step="10"
                  placeholder={
                    paymentType === 'fixed'
                      ? 'e.g. 8000'
                      : paymentType === 'hourly'
                        ? 'e.g. 120'
                        : paymentType === 'daily'
                          ? 'e.g. 900'
                          : 'e.g. 2000'
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

            {/* Payment Preview */}
            {paymentAmount > 0 && (
              <div className="mt-5 bg-white/5 rounded-xl p-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">
                    {paymentType === 'fixed' ? 'Total fee' : paymentType === 'hourly' ? 'Hourly rate' : paymentType === 'daily' ? 'Daily rate' : 'Per milestone'}
                  </span>
                  <span className="text-white font-mono">
                    {formatCurrency(paymentAmount)}
                    {subcontractorGST && <span className="text-slate-500"> (ex. GST)</span>}
                  </span>
                </div>
                {subcontractorGST && (
                  <>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-400">GST (10%)</span>
                      <span className="text-white font-mono">{formatCurrency(gstCalcs.gst)}</span>
                    </div>
                    <div className="flex justify-between text-sm border-t border-white/10 pt-2">
                      <span className="text-white font-semibold">Total (inc. GST)</span>
                      <span className="text-cyan-400 font-mono font-bold">
                        {formatCurrency(gstCalcs.total)} {paymentType !== 'fixed' ? paymentTypeLabel : ''}
                      </span>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>

          {/* Navigation */}
          <div className="flex justify-between">
            <button
              onClick={() => setActiveSection(0)}
              className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all"
            >
              Back
            </button>
            <button
              onClick={() => setActiveSection(2)}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl px-6 py-3 hover:from-cyan-400 hover:to-blue-400 transition-all"
            >
              Next: Legal Terms
            </button>
          </div>
        </>
      )}

      {/* Section 2: Legal Terms */}
      {activeSection === 2 && (
        <>
          {/* IP Ownership */}
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white heading-font mb-6">Intellectual Property</h3>
            <div className="space-y-3">
              {IP_OPTIONS.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setIPOwnership(option.value)}
                  className={`w-full text-left px-5 py-4 rounded-xl transition-all ${
                    ipOwnership === option.value
                      ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/40'
                      : 'bg-white/5 border border-white/10 hover:bg-white/[0.08]'
                  }`}
                >
                  <span className={`text-sm font-semibold ${ipOwnership === option.value ? 'text-cyan-400' : 'text-white'}`}>
                    {option.label}
                  </span>
                  <p className="text-xs text-slate-400 mt-1">{option.desc}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Confidentiality */}
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white heading-font mb-6">Confidentiality</h3>
            <div className="flex gap-2">
              {([
                { value: 'standard' as const, label: 'Standard', desc: '2-year obligation, standard exceptions' },
                { value: 'enhanced' as const, label: 'Enhanced', desc: '5-year obligation, stricter controls, data destruction' },
              ]).map((option) => (
                <button
                  key={option.value}
                  onClick={() => setConfidentiality(option.value)}
                  className={`flex-1 text-left px-5 py-4 rounded-xl transition-all ${
                    confidentiality === option.value
                      ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/40'
                      : 'bg-white/5 border border-white/10 hover:bg-white/[0.08]'
                  }`}
                >
                  <span className={`text-sm font-semibold ${confidentiality === option.value ? 'text-cyan-400' : 'text-white'}`}>
                    {option.label}
                  </span>
                  <p className="text-xs text-slate-400 mt-1">{option.desc}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Non-Compete */}
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white heading-font mb-6">Non-Competition</h3>
            <div className="mb-5">
              <label className={labelClass}>Non-Compete Period</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {NONCOMPETE_OPTIONS.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setNonCompetePeriod(option.value)}
                    className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                      nonCompetePeriod === option.value
                        ? 'bg-gradient-to-r from-cyan-500/30 to-blue-500/30 border border-cyan-500/40 text-cyan-400'
                        : 'bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
            {nonCompetePeriod !== 'none' && (
              <div>
                <label className={labelClass}>Non-Compete Radius</label>
                <input
                  type="text"
                  value={nonCompeteRadius}
                  onChange={(e) => setNonCompeteRadius(e.target.value)}
                  className={inputClass}
                  placeholder='e.g. 50 (km) or "nationwide"'
                />
                <p className="text-xs text-slate-500 mt-1">Enter a distance in km, or type &quot;nationwide&quot; for all of Australia</p>
              </div>
            )}
          </div>

          {/* Insurance */}
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white heading-font mb-6">Insurance Requirements</h3>
            <div className="flex items-center justify-between py-3 px-4 rounded-xl bg-white/5 mb-4">
              <div>
                <span className="text-slate-300 text-sm">Insurance Required</span>
                <p className="text-xs text-slate-500 mt-0.5">Require the subcontractor to hold insurance</p>
              </div>
              <button
                onClick={() => setInsuranceRequired(!insuranceRequired)}
                className={`relative w-14 h-7 rounded-full transition-all ${
                  insuranceRequired ? 'bg-gradient-to-r from-cyan-500 to-blue-500' : 'bg-white/10'
                }`}
              >
                <div
                  className={`absolute top-0.5 left-0.5 h-6 w-6 rounded-full bg-white shadow-md transition-transform ${
                    insuranceRequired ? 'translate-x-7' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
            {insuranceRequired && (
              <div className="space-y-2">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <div className="relative">
                    <input
                      type="checkbox"
                      checked={insurancePI}
                      onChange={() => setInsurancePI(!insurancePI)}
                      className="sr-only peer"
                    />
                    <div className="w-5 h-5 rounded-md bg-white/5 border border-white/10 peer-checked:bg-cyan-500/30 peer-checked:border-cyan-500/50 transition-all flex items-center justify-center">
                      <svg
                        className={`w-3 h-3 text-cyan-400 transition-opacity ${insurancePI ? 'opacity-100' : 'opacity-0'}`}
                        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <span className="text-sm text-slate-300 group-hover:text-white transition-colors">
                    Professional Indemnity (PI) Insurance
                  </span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <div className="relative">
                    <input
                      type="checkbox"
                      checked={insurancePublicLiability}
                      onChange={() => setInsurancePublicLiability(!insurancePublicLiability)}
                      className="sr-only peer"
                    />
                    <div className="w-5 h-5 rounded-md bg-white/5 border border-white/10 peer-checked:bg-cyan-500/30 peer-checked:border-cyan-500/50 transition-all flex items-center justify-center">
                      <svg
                        className={`w-3 h-3 text-cyan-400 transition-opacity ${insurancePublicLiability ? 'opacity-100' : 'opacity-0'}`}
                        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <span className="text-sm text-slate-300 group-hover:text-white transition-colors">
                    Public Liability Insurance
                  </span>
                </label>
              </div>
            )}
          </div>

          {/* Termination & Governing Law */}
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white heading-font mb-6">Termination &amp; Governing Law</h3>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className={labelClass}>Notice Period for Termination</label>
                <div className="flex gap-2">
                  {NOTICE_OPTIONS.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setNoticePeriod(option.value)}
                      className={`flex-1 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                        noticePeriod === option.value
                          ? 'bg-gradient-to-r from-cyan-500/30 to-blue-500/30 border border-cyan-500/40 text-cyan-400'
                          : 'bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
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
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between">
            <button
              onClick={() => setActiveSection(1)}
              className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all"
            >
              Back
            </button>
            <button
              onClick={handleGenerate}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl px-8 py-3 hover:from-cyan-400 hover:to-blue-400 transition-all text-lg"
            >
              Generate Agreement
            </button>
          </div>
        </>
      )}

      {/* Generated Output */}
      {generated && (
        <>
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-white heading-font">Agreement Preview</h3>
              <span className="text-xs px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 font-medium">
                Subcontractor Agreement
              </span>
            </div>

            <div className="bg-slate-900/50 border border-white/10 rounded-xl p-6 font-mono text-sm whitespace-pre-wrap text-slate-300 leading-relaxed max-h-[600px] overflow-y-auto">
              {generatedText}
            </div>

            <div className="flex justify-center mt-6">
              <button
                onClick={handleCopy}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl px-8 py-4 hover:from-cyan-400 hover:to-blue-400 transition-all"
              >
                {copied ? 'Copied to Clipboard!' : 'Copy to Clipboard'}
              </button>
            </div>
          </div>

          {/* Key Clause Summary Cards */}
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white heading-font mb-4">Key Clauses Summary</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              <div className="bg-white/5 rounded-xl p-4">
                <p className="text-cyan-400 text-xs font-semibold uppercase tracking-wide mb-1">Payment</p>
                <p className="text-white text-sm font-medium">
                  {formatCurrency(paymentAmount)} {paymentTypeLabel}
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  {paymentTerms === 'net-7' ? '7-day' : paymentTerms === 'net-14' ? '14-day' : '30-day'} payment terms
                  {subcontractorGST ? ' + GST' : ''}
                </p>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <p className="text-cyan-400 text-xs font-semibold uppercase tracking-wide mb-1">IP Ownership</p>
                <p className="text-white text-sm font-medium">
                  {ipOwnership === 'client-owns' ? 'Principal Owns' : ipOwnership === 'contractor-retains' ? 'Subcontractor Retains' : 'Shared Ownership'}
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  {ipOwnership === 'client-owns' ? 'All IP transfers on payment' : ipOwnership === 'contractor-retains' ? 'Principal gets licence to use' : 'Both parties can use freely'}
                </p>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <p className="text-cyan-400 text-xs font-semibold uppercase tracking-wide mb-1">Confidentiality</p>
                <p className="text-white text-sm font-medium">
                  {confidentiality === 'standard' ? 'Standard NDA' : 'Enhanced NDA'}
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  {confidentiality === 'standard' ? '2-year obligation' : '5-year obligation with data destruction'}
                </p>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <p className="text-cyan-400 text-xs font-semibold uppercase tracking-wide mb-1">Termination</p>
                <p className="text-white text-sm font-medium">
                  {noticePeriod === '7-days' ? '7 Days' : noticePeriod === '14-days' ? '14 Days' : '30 Days'} Notice
                </p>
                <p className="text-xs text-slate-500 mt-1">Immediate termination available for breach</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <p className="text-cyan-400 text-xs font-semibold uppercase tracking-wide mb-1">Non-Compete</p>
                <p className="text-white text-sm font-medium">
                  {nonCompetePeriod === 'none' ? 'None' : nonCompetePeriod === '3-months' ? '3 Months' : nonCompetePeriod === '6-months' ? '6 Months' : '12 Months'}
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  {nonCompetePeriod === 'none' ? 'No restriction on competition' : nonCompeteRadius ? (nonCompeteRadius.toLowerCase() === 'nationwide' ? 'Australia-wide' : `${nonCompeteRadius}km radius`) : 'No geographic limit specified'}
                </p>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <p className="text-cyan-400 text-xs font-semibold uppercase tracking-wide mb-1">Governing Law</p>
                <p className="text-white text-sm font-medium">{STATE_FULL_NAMES[governingState]}</p>
                <p className="text-xs text-slate-500 mt-1">Dispute resolution: negotiate, mediate, then courts</p>
              </div>
            </div>
          </div>

          {/* Tips */}
          <div className="bg-cyan-500/5 border border-cyan-500/20 rounded-2xl p-6">
            <h4 className="text-cyan-400 font-semibold mb-2">Before You Send</h4>
            <ul className="text-sm text-slate-400 space-y-2">
              <li>Review every clause carefully and customise the language to match your specific engagement.</li>
              <li>This is a template, not legal advice. For high-value engagements, have a qualified solicitor review the agreement.</li>
              <li>Both parties should sign before any work begins. Digital signatures (DocuSign, HelloSign) are legally valid in Australia under the Electronic Transactions Act 1999.</li>
              <li>Verify both ABNs on the Australian Business Register (abr.business.gov.au) before signing.</li>
              <li>Keep a signed copy for at least 5 years (ATO record-keeping requirement).</li>
              <li>If the scope changes during the project, create a written amendment — don&apos;t rely on verbal agreements.</li>
            </ul>
          </div>

          {/* Related Tools */}
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white heading-font mb-4">Related Tools</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <a
                href="/tools/contract-generator"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/30 rounded-xl p-4 transition-all group"
              >
                <p className="text-white font-medium text-sm group-hover:text-cyan-400 transition-colors">
                  Contract Generator
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Generate client-facing service agreements
                </p>
              </a>
              <a
                href="/tools/contractor-employee-calculator"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/30 rounded-xl p-4 transition-all group"
              >
                <p className="text-white font-medium text-sm group-hover:text-cyan-400 transition-colors">
                  Contractor vs Employee
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Check if your arrangement is truly contracting
                </p>
              </a>
              <a
                href="/tools/scope-of-work-generator"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/30 rounded-xl p-4 transition-all group"
              >
                <p className="text-white font-medium text-sm group-hover:text-cyan-400 transition-colors">
                  Scope of Work Generator
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Define project deliverables and boundaries
                </p>
              </a>
              <a
                href="/tools/invoice-generator"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/30 rounded-xl p-4 transition-all group"
              >
                <p className="text-white font-medium text-sm group-hover:text-cyan-400 transition-colors">
                  Invoice Generator
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Create professional invoices for subcontractor payments
                </p>
              </a>
            </div>
          </div>

          <div className="text-center">
            <p className="text-xs text-slate-500 max-w-2xl mx-auto">
              This template is for informational purposes only and does not constitute legal advice.
              Consult a qualified solicitor for your specific situation. InvoiceFlow accepts no
              liability for any loss or damage arising from the use of this template.
            </p>
          </div>
        </>
      )}
    </div>
  );
}
