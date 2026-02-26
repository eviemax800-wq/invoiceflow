'use client';

import { useState, useMemo } from 'react';

/* ---- Helpers ---- */

function todayISO(): string {
  const d = new Date();
  return d.toISOString().split('T')[0];
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

/* ---- Types ---- */

type AustralianState = 'VIC' | 'NSW' | 'QLD' | 'SA' | 'WA' | 'TAS' | 'NT' | 'ACT';
type BusinessType = 'sole-trader' | 'company' | 'partnership' | 'trust';
type PaymentTerms = 'upfront' | 'net-7' | 'net-14' | 'net-30' | 'milestone' | 'retainer';
type RefundPolicy = 'no-refunds' | '7-days' | '14-days' | '30-days' | 'pro-rata' | 'custom';
type IPOwnership = 'transfers' | 'licensed' | 'retained';
type RevisionPolicy = 'unlimited' | 'limited' | 'none';
type LiabilityCap = 'project-value' | '2x-project-value' | 'no-cap' | 'custom';
type DisputeResolution = 'mediation' | 'court' | 'arbitration';
type TerminationNotice = '7' | '14' | '30' | 'cause-only';
type WarrantyType = 'none' | 'limited' | 'statutory';
type ContentOwnership = 'user-retains' | 'platform-license' | 'platform-owns';

interface ServiceTypes {
  digitalServices: boolean;
  physicalProducts: boolean;
  digitalProducts: boolean;
  consulting: boolean;
  subscription: boolean;
  saas: boolean;
}

interface Step4Options {
  acceptableUse: boolean;
  userAccounts: boolean;
  contentOwnership: ContentOwnership;
  thirdPartyLinks: boolean;
  cookieNotice: boolean;
}

const STATES: { value: AustralianState; label: string }[] = [
  { value: 'VIC', label: 'Victoria' },
  { value: 'NSW', label: 'New South Wales' },
  { value: 'QLD', label: 'Queensland' },
  { value: 'SA', label: 'South Australia' },
  { value: 'WA', label: 'Western Australia' },
  { value: 'TAS', label: 'Tasmania' },
  { value: 'NT', label: 'Northern Territory' },
  { value: 'ACT', label: 'Australian Capital Territory' },
];

const STATE_FULL_NAMES: Record<AustralianState, string> = {
  VIC: 'Victoria',
  NSW: 'New South Wales',
  QLD: 'Queensland',
  SA: 'South Australia',
  WA: 'Western Australia',
  TAS: 'Tasmania',
  NT: 'Northern Territory',
  ACT: 'Australian Capital Territory',
};

const BUSINESS_TYPE_LABELS: { value: BusinessType; label: string }[] = [
  { value: 'sole-trader', label: 'Sole Trader' },
  { value: 'company', label: 'Company (Pty Ltd)' },
  { value: 'partnership', label: 'Partnership' },
  { value: 'trust', label: 'Trust' },
];

const PAYMENT_TERMS_LABELS: { value: PaymentTerms; label: string }[] = [
  { value: 'upfront', label: 'Upfront' },
  { value: 'net-7', label: 'Net 7' },
  { value: 'net-14', label: 'Net 14' },
  { value: 'net-30', label: 'Net 30' },
  { value: 'milestone', label: 'Milestone-Based' },
  { value: 'retainer', label: 'Retainer' },
];

const REFUND_POLICY_LABELS: { value: RefundPolicy; label: string }[] = [
  { value: 'no-refunds', label: 'No Refunds' },
  { value: '7-days', label: 'Within 7 Days' },
  { value: '14-days', label: 'Within 14 Days' },
  { value: '30-days', label: 'Within 30 Days' },
  { value: 'pro-rata', label: 'Pro-Rata' },
  { value: 'custom', label: 'Custom' },
];

const IP_OPTIONS: { value: IPOwnership; label: string; desc: string }[] = [
  { value: 'transfers', label: 'Transfers to Client', desc: 'Full ownership transfers to the client upon final payment' },
  { value: 'licensed', label: 'Licensed to Client', desc: 'Client receives a license to use the work; you retain ownership' },
  { value: 'retained', label: 'Retained by Provider', desc: 'You retain all intellectual property rights' },
];

const LIABILITY_CAP_LABELS: { value: LiabilityCap; label: string }[] = [
  { value: 'project-value', label: 'Capped at Project Value' },
  { value: '2x-project-value', label: 'Capped at 2x Project Value' },
  { value: 'no-cap', label: 'No Cap' },
  { value: 'custom', label: 'Custom Amount' },
];

const DISPUTE_LABELS: { value: DisputeResolution; label: string }[] = [
  { value: 'mediation', label: 'Mediation First' },
  { value: 'court', label: 'Direct to Court' },
  { value: 'arbitration', label: 'Arbitration' },
];

const TERMINATION_LABELS: { value: TerminationNotice; label: string }[] = [
  { value: '7', label: '7 Days Notice' },
  { value: '14', label: '14 Days Notice' },
  { value: '30', label: '30 Days Notice' },
  { value: 'cause-only', label: 'For Cause Only' },
];

const WARRANTY_LABELS: { value: WarrantyType; label: string }[] = [
  { value: 'none', label: 'No Warranties' },
  { value: 'limited', label: 'Limited Warranty' },
  { value: 'statutory', label: 'Statutory Warranties Only' },
];

const SERVICE_TYPE_LABELS: { key: keyof ServiceTypes; label: string }[] = [
  { key: 'digitalServices', label: 'Digital services (web dev, design, marketing)' },
  { key: 'physicalProducts', label: 'Physical products' },
  { key: 'digitalProducts', label: 'Digital products (templates, downloads)' },
  { key: 'consulting', label: 'Consulting / advisory' },
  { key: 'subscription', label: 'Subscription services' },
  { key: 'saas', label: 'SaaS / online platform' },
];

/* ---- Component ---- */

export default function TermsOfServiceGenerator() {
  // Step tracking
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5;

  // Step 1: Business Details
  const [businessName, setBusinessName] = useState('');
  const [abn, setAbn] = useState('');
  const [businessType, setBusinessType] = useState<BusinessType>('sole-trader');
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [state, setState] = useState<AustralianState>('VIC');
  const [serviceTypes, setServiceTypes] = useState<ServiceTypes>({
    digitalServices: true,
    physicalProducts: false,
    digitalProducts: false,
    consulting: false,
    subscription: false,
    saas: false,
  });

  // Step 2: Service Terms
  const [paymentTerms, setPaymentTerms] = useState<PaymentTerms>('net-14');
  const [gstRegistered, setGstRegistered] = useState(false);
  const [latePaymentRate, setLatePaymentRate] = useState('10');
  const [gracePeriod, setGracePeriod] = useState('14');
  const [refundPolicy, setRefundPolicy] = useState<RefundPolicy>('no-refunds');
  const [customRefund, setCustomRefund] = useState('');
  const [ipOwnership, setIpOwnership] = useState<IPOwnership>('transfers');
  const [revisionPolicy, setRevisionPolicy] = useState<RevisionPolicy>('limited');
  const [revisionCount, setRevisionCount] = useState('2');

  // Step 3: Liability & Legal
  const [liabilityCap, setLiabilityCap] = useState<LiabilityCap>('project-value');
  const [customLiabilityAmount, setCustomLiabilityAmount] = useState('');
  const [forceMajeure, setForceMajeure] = useState(true);
  const [disputeResolution, setDisputeResolution] = useState<DisputeResolution>('mediation');
  const [terminationNotice, setTerminationNotice] = useState<TerminationNotice>('14');
  const [warrantyType, setWarrantyType] = useState<WarrantyType>('statutory');
  const [indemnification, setIndemnification] = useState(true);
  const [confidentiality, setConfidentiality] = useState(true);

  // Step 4: Website/Platform Terms
  const [step4Options, setStep4Options] = useState<Step4Options>({
    acceptableUse: false,
    userAccounts: false,
    contentOwnership: 'user-retains',
    thirdPartyLinks: true,
    cookieNotice: true,
  });

  // UI State
  const [generated, setGenerated] = useState(false);
  const [copied, setCopied] = useState(false);

  const toggleServiceType = (key: keyof ServiceTypes) => {
    setServiceTypes((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const hasWebPlatform = serviceTypes.saas || serviceTypes.subscription;

  // Step navigation
  const nextStep = () => {
    if (currentStep < totalSteps) {
      // Skip step 4 if no web/platform services
      if (currentStep === 3 && !hasWebPlatform) {
        setCurrentStep(5);
      } else {
        setCurrentStep(currentStep + 1);
      }
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      // Skip step 4 going back if no web/platform services
      if (currentStep === 5 && !hasWebPlatform) {
        setCurrentStep(3);
      } else {
        setCurrentStep(currentStep - 1);
      }
    }
  };

  // Build the business type text
  const businessTypeText = useMemo(() => {
    switch (businessType) {
      case 'sole-trader': return 'a sole trader';
      case 'company': return 'a company registered under the Corporations Act 2001 (Cth)';
      case 'partnership': return 'a partnership';
      case 'trust': return 'a trust';
    }
  }, [businessType]);

  // Build the services description
  const servicesDescription = useMemo(() => {
    const services: string[] = [];
    if (serviceTypes.digitalServices) services.push('digital services including web development, design, and marketing');
    if (serviceTypes.physicalProducts) services.push('physical products');
    if (serviceTypes.digitalProducts) services.push('digital products including templates and downloadable resources');
    if (serviceTypes.consulting) services.push('consulting and advisory services');
    if (serviceTypes.subscription) services.push('subscription-based services');
    if (serviceTypes.saas) services.push('software as a service (SaaS) and online platform access');
    return services.length > 0 ? services.join('; ') : 'services as described on the website';
  }, [serviceTypes]);

  // Build the terms of service text
  const generatedText = useMemo(() => {
    const bName = businessName || '[Business Name]';
    const bAbn = abn ? ` (ABN: ${abn})` : '';
    const bWebsite = websiteUrl || '[website URL]';
    const bEmail = contactEmail || '[contact@email.com]';
    const stateFullName = STATE_FULL_NAMES[state];
    const today = formatDateAU(todayISO());

    let sectionNum = 0;
    const section = () => {
      sectionNum++;
      return sectionNum;
    };

    let text = '';

    // Title
    text += `${'='.repeat(60)}\n`;
    text += `TERMS OF SERVICE\n`;
    text += `${'='.repeat(60)}\n\n`;
    text += `${bName}${bAbn}\n`;
    text += `Effective Date: ${today}\n`;
    text += `Last Updated: ${today}\n\n`;

    // 1. Introduction
    const introNum = section();
    text += `${introNum}. INTRODUCTION\n`;
    text += `${'─'.repeat(45)}\n\n`;
    text += `${introNum}.1 These Terms of Service ("Terms") govern your access\n    to and use of the services, products, and website\n    provided by ${bName}${bAbn} ("we", "us", "our",\n    "the Provider"), ${businessTypeText} operating in\n    ${stateFullName}, Australia.\n\n`;
    text += `${introNum}.2 Our website is located at ${bWebsite}.\n\n`;
    text += `${introNum}.3 By accessing our website, engaging our services, or\n    purchasing our products, you ("you", "the Client",\n    "the Customer") agree to be bound by these Terms. If\n    you do not agree with any part of these Terms, you\n    must not use our services.\n\n`;
    text += `${introNum}.4 We reserve the right to update these Terms at any\n    time. Changes will be effective when posted on our\n    website. Your continued use of our services after\n    changes are posted constitutes acceptance of the\n    updated Terms.\n\n`;

    // 2. Definitions
    const defNum = section();
    text += `${defNum}. DEFINITIONS\n`;
    text += `${'─'.repeat(45)}\n\n`;
    text += `${defNum}.1 "Services" means ${servicesDescription},\n    as offered by the Provider and described on the\n    Provider's website or in any proposal, quote, or\n    agreement between the parties.\n\n`;
    text += `${defNum}.2 "Agreement" means these Terms together with any\n    proposal, quote, scope of work, or other document\n    agreed between the parties in relation to the\n    Services.\n\n`;
    text += `${defNum}.3 "Deliverables" means any work product, output,\n    materials, documents, or items produced by the\n    Provider in the course of providing the Services.\n\n`;
    text += `${defNum}.4 "Fees" means the amounts payable by the Client to\n    the Provider for the Services, as set out in the\n    relevant quote, proposal, or invoice.\n\n`;
    text += `${defNum}.5 "Business Day" means a day that is not a Saturday,\n    Sunday, or public holiday in ${stateFullName},\n    Australia.\n\n`;

    // 3. Services
    const svcNum = section();
    text += `${svcNum}. SERVICES\n`;
    text += `${'─'.repeat(45)}\n\n`;
    text += `${svcNum}.1 The Provider agrees to supply the Services to the\n    Client in accordance with these Terms and any\n    additional agreement between the parties.\n\n`;
    text += `${svcNum}.2 The specific scope, deliverables, timeline, and\n    requirements for each engagement will be set out in\n    a separate proposal, quote, or scope of work document\n    agreed between the parties.\n\n`;
    text += `${svcNum}.3 The Provider will perform the Services with\n    reasonable care and skill, in a professional and\n    timely manner consistent with generally accepted\n    industry standards.\n\n`;
    text += `${svcNum}.4 Any timeframes or deadlines provided by the\n    Provider are estimates only, unless expressly stated\n    as fixed deadlines in the relevant agreement. The\n    Provider will use reasonable efforts to meet\n    estimated timeframes but shall not be liable for\n    delays caused by factors outside its reasonable\n    control, including delays caused by the Client.\n\n`;

    // 4. Fees and Payment
    const payNum = section();
    text += `${payNum}. FEES AND PAYMENT\n`;
    text += `${'─'.repeat(45)}\n\n`;
    text += `${payNum}.1 Fees for the Services will be as quoted in the\n    relevant proposal, quote, or invoice issued by the\n    Provider. All amounts are in Australian Dollars\n    (AUD).\n\n`;

    // Payment terms clause
    switch (paymentTerms) {
      case 'upfront':
        text += `${payNum}.2 Payment is required in full before commencement of\n    the Services. Work will not begin until payment has\n    been received and cleared.\n\n`;
        break;
      case 'net-7':
        text += `${payNum}.2 Payment is due within seven (7) days of the date\n    of invoice ("Due Date").\n\n`;
        break;
      case 'net-14':
        text += `${payNum}.2 Payment is due within fourteen (14) days of the\n    date of invoice ("Due Date").\n\n`;
        break;
      case 'net-30':
        text += `${payNum}.2 Payment is due within thirty (30) days of the\n    date of invoice ("Due Date").\n\n`;
        break;
      case 'milestone':
        text += `${payNum}.2 Payment is due on a milestone basis as set out in\n    the relevant proposal or scope of work. Each\n    milestone payment must be received before work on\n    the next milestone commences.\n\n`;
        break;
      case 'retainer':
        text += `${payNum}.2 The Client agrees to pay a recurring retainer fee\n    as set out in the relevant agreement. Retainer fees\n    are due in advance at the start of each billing\n    period. Unused retainer hours do not roll over to\n    the next period unless otherwise agreed in writing.\n\n`;
        break;
    }

    text += `${payNum}.3 Late Payment: If payment is not received within\n    ${gracePeriod} day${parseInt(gracePeriod) !== 1 ? 's' : ''} of the Due Date, the Provider reserves the\n    right to:\n\n`;
    text += `    (a) charge interest on the overdue amount at a rate\n        of ${latePaymentRate}% per annum, calculated daily\n        from the Due Date until payment is received in\n        full;\n\n`;
    text += `    (b) suspend or cease provision of the Services until\n        all outstanding amounts are paid; and\n\n`;
    text += `    (c) recover all reasonable costs of debt collection,\n        including legal fees, from the Client.\n\n`;

    // GST
    if (gstRegistered) {
      const gstNum = section();
      text += `${gstNum}. GOODS AND SERVICES TAX (GST)\n`;
      text += `${'─'.repeat(45)}\n\n`;
      text += `${gstNum}.1 The Provider is registered for GST. Unless\n    otherwise stated, all Fees quoted are exclusive of\n    GST.\n\n`;
      text += `${gstNum}.2 Where the supply of Services is a taxable supply\n    under A New Tax System (Goods and Services Tax) Act\n    1999 (Cth), the Client must pay an additional\n    amount equal to the GST payable on the supply.\n\n`;
      text += `${gstNum}.3 The Provider will issue tax invoices that comply\n    with the requirements of the GST legislation.\n\n`;
    } else {
      const gstNum = section();
      text += `${gstNum}. GOODS AND SERVICES TAX (GST)\n`;
      text += `${'─'.repeat(45)}\n\n`;
      text += `${gstNum}.1 The Provider is not currently registered for GST.\n    All Fees quoted are GST-exclusive. Should the\n    Provider become registered for GST, the Client will\n    be notified and GST will be added to subsequent\n    invoices as required by law.\n\n`;
    }

    // Intellectual Property
    const ipNum = section();
    text += `${ipNum}. INTELLECTUAL PROPERTY\n`;
    text += `${'─'.repeat(45)}\n\n`;

    switch (ipOwnership) {
      case 'transfers':
        text += `${ipNum}.1 Upon receipt of full and final payment for the\n    Services, all intellectual property rights in the\n    Deliverables shall transfer to and vest in the\n    Client.\n\n`;
        text += `${ipNum}.2 Until full payment is received, all intellectual\n    property rights in the Deliverables remain with the\n    Provider. The Client must not use, reproduce, or\n    distribute any Deliverables until payment is\n    complete.\n\n`;
        text += `${ipNum}.3 Notwithstanding the above, the Provider retains\n    the right to use the Deliverables in its portfolio,\n    case studies, and marketing materials, unless the\n    Client requests otherwise in writing.\n\n`;
        break;
      case 'licensed':
        text += `${ipNum}.1 The Provider retains all intellectual property\n    rights in the Deliverables. Upon receipt of full\n    and final payment, the Provider grants the Client a\n    non-exclusive, perpetual, royalty-free license to\n    use the Deliverables for the Client's business\n    purposes.\n\n`;
        text += `${ipNum}.2 The Client must not sublicense, resell, or\n    distribute the Deliverables to third parties without\n    the Provider's prior written consent.\n\n`;
        text += `${ipNum}.3 The Provider may use the Deliverables or similar\n    work for other clients and in its portfolio, case\n    studies, and marketing materials.\n\n`;
        break;
      case 'retained':
        text += `${ipNum}.1 All intellectual property rights in the\n    Deliverables and all work produced by the Provider\n    shall remain the exclusive property of the Provider\n    at all times.\n\n`;
        text += `${ipNum}.2 The Client receives a limited, non-exclusive\n    license to use the Deliverables solely for the\n    purposes set out in the relevant agreement. This\n    license does not include the right to modify,\n    sublicense, resell, or distribute the Deliverables.\n\n`;
        text += `${ipNum}.3 The Provider may use the Deliverables or\n    substantially similar work for other clients and\n    purposes without restriction.\n\n`;
        break;
    }

    text += `${ipNum}.${ipOwnership === 'transfers' ? '4' : '4'} Pre-Existing IP: Any intellectual property owned by\n    the Provider prior to the commencement of the\n    Services ("Pre-Existing IP") remains the property\n    of the Provider. Where Pre-Existing IP is\n    incorporated into the Deliverables, the Provider\n    grants the Client a non-exclusive license to use\n    that Pre-Existing IP solely as part of the\n    Deliverables.\n\n`;
    text += `${ipNum}.${ipOwnership === 'transfers' ? '5' : '5'} Third-Party IP: Where the Deliverables incorporate\n    third-party materials (e.g. stock images, open-source\n    software, fonts), the Client's use of those materials\n    is subject to the applicable third-party license\n    terms.\n\n`;

    // Revisions (if applicable)
    if (revisionPolicy !== 'none') {
      const revNum = section();
      text += `${revNum}. REVISIONS\n`;
      text += `${'─'.repeat(45)}\n\n`;

      if (revisionPolicy === 'unlimited') {
        text += `${revNum}.1 The Provider will undertake reasonable revisions\n    to the Deliverables as requested by the Client at\n    no additional charge, provided that the revision\n    requests fall within the original scope of work.\n\n`;
        text += `${revNum}.2 Revision requests that fall outside the original\n    scope of work will be treated as additional work and\n    quoted separately.\n\n`;
      } else {
        text += `${revNum}.1 The Fees include up to ${revisionCount} round${parseInt(revisionCount) !== 1 ? 's' : ''} of revisions\n    to the Deliverables. A "round of revisions" means\n    a consolidated set of feedback provided by the\n    Client at one time.\n\n`;
        text += `${revNum}.2 Additional revisions beyond the included rounds\n    will be charged at the Provider's standard hourly\n    rate or as otherwise agreed in writing.\n\n`;
        text += `${revNum}.3 Revision requests must fall within the original\n    scope of work. Requests that constitute new or\n    additional work will be quoted separately.\n\n`;
      }

      text += `${revNum}.${revisionPolicy === 'unlimited' ? '3' : '4'} Revision requests must be submitted within\n    fourteen (14) days of the Deliverables being\n    provided to the Client. After this period, the\n    Deliverables will be deemed accepted.\n\n`;
    }

    // Client Obligations
    const clientNum = section();
    text += `${clientNum}. CLIENT OBLIGATIONS\n`;
    text += `${'─'.repeat(45)}\n\n`;
    text += `${clientNum}.1 The Client agrees to:\n\n`;
    text += `    (a) provide the Provider with all information,\n        materials, access, and approvals reasonably\n        required for the Provider to perform the Services\n        in a timely manner;\n\n`;
    text += `    (b) respond to requests for feedback, approvals, or\n        information within a reasonable timeframe;\n\n`;
    text += `    (c) ensure that all information and materials\n        provided to the Provider are accurate, complete,\n        and do not infringe any third-party rights;\n\n`;
    text += `    (d) comply with all applicable laws and regulations\n        in connection with the use of the Services and\n        Deliverables; and\n\n`;
    text += `    (e) pay all Fees when due in accordance with these\n        Terms.\n\n`;
    text += `${clientNum}.2 Delays caused by the Client's failure to meet its\n    obligations under this clause may result in extended\n    timelines and additional Fees.\n\n`;

    // Refund Policy
    const refundNum = section();
    text += `${refundNum}. REFUND POLICY\n`;
    text += `${'─'.repeat(45)}\n\n`;

    switch (refundPolicy) {
      case 'no-refunds':
        text += `${refundNum}.1 All Fees paid are non-refundable. Once work has\n    commenced, no refunds will be issued.\n\n`;
        text += `${refundNum}.2 In the event of early termination by the Client,\n    any Fees paid for incomplete work are not refundable.\n    The Provider will deliver all work completed up to\n    the date of termination.\n\n`;
        break;
      case '7-days':
        text += `${refundNum}.1 The Client may request a full refund within seven\n    (7) days of payment, provided that the Provider has\n    not commenced substantive work on the Services.\n\n`;
        text += `${refundNum}.2 Where the Provider has commenced work, a partial\n    refund may be issued at the Provider's discretion,\n    less the value of work already completed.\n\n`;
        break;
      case '14-days':
        text += `${refundNum}.1 The Client may request a full refund within\n    fourteen (14) days of payment, provided that the\n    Provider has not commenced substantive work on the\n    Services.\n\n`;
        text += `${refundNum}.2 Where the Provider has commenced work, a partial\n    refund may be issued at the Provider's discretion,\n    less the value of work already completed.\n\n`;
        break;
      case '30-days':
        text += `${refundNum}.1 The Client may request a full refund within\n    thirty (30) days of payment, provided that the\n    Provider has not commenced substantive work on the\n    Services.\n\n`;
        text += `${refundNum}.2 Where the Provider has commenced work, a partial\n    refund may be issued at the Provider's discretion,\n    less the value of work already completed.\n\n`;
        break;
      case 'pro-rata':
        text += `${refundNum}.1 In the event of early termination, the Client is\n    entitled to a pro-rata refund based on the\n    proportion of Services not yet delivered as at the\n    date of termination.\n\n`;
        text += `${refundNum}.2 The pro-rata calculation will be based on the\n    Provider's reasonable assessment of work completed\n    at the time of termination.\n\n`;
        break;
      case 'custom':
        text += `${refundNum}.1 ${customRefund || 'Refund terms to be specified in the relevant agreement between the parties.'}\n\n`;
        break;
    }

    text += `${refundNum}.${refundPolicy === 'custom' ? '2' : '3'} Nothing in this clause excludes or limits any\n    rights the Client may have under the Australian\n    Consumer Law (Schedule 2 of the Competition and\n    Consumer Act 2010 (Cth)), including consumer\n    guarantees that cannot be excluded by agreement.\n\n`;

    // Limitation of Liability
    const liabNum = section();
    text += `${liabNum}. LIMITATION OF LIABILITY\n`;
    text += `${'─'.repeat(45)}\n\n`;
    text += `${liabNum}.1 To the maximum extent permitted by law, the\n    Provider's total aggregate liability to the Client\n    under or in connection with these Terms, whether in\n    contract, tort (including negligence), statute, or\n    otherwise, shall not exceed:\n\n`;

    switch (liabilityCap) {
      case 'project-value':
        text += `    the total Fees paid by the Client to the Provider\n    under the relevant agreement.\n\n`;
        break;
      case '2x-project-value':
        text += `    two (2) times the total Fees paid by the Client to\n    the Provider under the relevant agreement.\n\n`;
        break;
      case 'no-cap':
        text += `    the amount determined by a court of competent\n    jurisdiction.\n\n`;
        break;
      case 'custom':
        text += `    AUD $${customLiabilityAmount || '[Amount]'}.\n\n`;
        break;
    }

    text += `${liabNum}.2 The Provider shall not be liable for any:\n\n`;
    text += `    (a) indirect, incidental, special, or consequential\n        loss or damage;\n\n`;
    text += `    (b) loss of profits, revenue, business, anticipated\n        savings, or goodwill;\n\n`;
    text += `    (c) loss of data or corruption of data; or\n\n`;
    text += `    (d) loss arising from any delay or failure by the\n        Client to meet its obligations under these Terms.\n\n`;
    text += `${liabNum}.3 Nothing in these Terms excludes or limits liability\n    that cannot be excluded or limited under applicable\n    law, including the Australian Consumer Law. Where the\n    Client is a "consumer" within the meaning of the\n    Australian Consumer Law, the Provider's liability for\n    failure to comply with a consumer guarantee is\n    limited (where permitted) to:\n\n`;
    text += `    (a) in the case of services — the cost of supplying\n        the services again or payment of the cost of\n        having the services supplied again; and\n\n`;
    text += `    (b) in the case of goods — the cost of replacing the\n        goods, supplying equivalent goods, or having the\n        goods repaired.\n\n`;

    // Warranties
    const warNum = section();
    text += `${warNum}. WARRANTIES\n`;
    text += `${'─'.repeat(45)}\n\n`;

    switch (warrantyType) {
      case 'none':
        text += `${warNum}.1 The Services are provided on an "as is" basis.\n    To the maximum extent permitted by law, the Provider\n    disclaims all warranties, representations, and\n    guarantees, whether express or implied.\n\n`;
        break;
      case 'limited':
        text += `${warNum}.1 The Provider warrants that the Services will be\n    performed with reasonable care and skill and in a\n    professional manner consistent with generally\n    accepted industry standards.\n\n`;
        text += `${warNum}.2 If the Client identifies a material defect in the\n    Deliverables within thirty (30) days of delivery,\n    the Provider will use reasonable efforts to correct\n    the defect at no additional charge.\n\n`;
        break;
      case 'statutory':
        text += `${warNum}.1 The Provider makes no express warranties beyond\n    those implied by law. Where the Australian Consumer\n    Law applies, the Client is entitled to statutory\n    consumer guarantees that cannot be excluded.\n\n`;
        break;
    }

    text += `${warNum}.${warrantyType === 'limited' ? '3' : '2'} Nothing in these Terms is intended to exclude,\n    restrict, or modify any consumer guarantee or right\n    under the Australian Consumer Law (Schedule 2 of\n    the Competition and Consumer Act 2010 (Cth)) that\n    cannot be excluded, restricted, or modified by\n    agreement.\n\n`;

    // Indemnification
    if (indemnification) {
      const indemNum = section();
      text += `${indemNum}. INDEMNIFICATION\n`;
      text += `${'─'.repeat(45)}\n\n`;
      text += `${indemNum}.1 The Client agrees to indemnify, defend, and hold\n    harmless the Provider and its officers, employees,\n    agents, and contractors from and against any and\n    all claims, liabilities, damages, losses, costs,\n    and expenses (including reasonable legal fees)\n    arising out of or in connection with:\n\n`;
      text += `    (a) the Client's breach of these Terms;\n\n`;
      text += `    (b) the Client's use of the Deliverables;\n\n`;
      text += `    (c) any information, materials, or content provided\n        by the Client to the Provider, including any\n        claim that such materials infringe the\n        intellectual property rights or other rights of\n        a third party; and\n\n`;
      text += `    (d) any claim by a third party arising from the\n        Client's use of the Services.\n\n`;
      text += `${indemNum}.2 This indemnity survives the termination or expiry\n    of these Terms.\n\n`;
    }

    // Confidentiality
    if (confidentiality) {
      const confNum = section();
      text += `${confNum}. CONFIDENTIALITY\n`;
      text += `${'─'.repeat(45)}\n\n`;
      text += `${confNum}.1 Each party ("Receiving Party") agrees to keep\n    confidential all information received from the other\n    party ("Disclosing Party") that is designated as\n    confidential or that reasonably should be understood\n    to be confidential ("Confidential Information").\n\n`;
      text += `${confNum}.2 The Receiving Party must:\n\n`;
      text += `    (a) use the Confidential Information solely for the\n        purposes of performing its obligations or\n        exercising its rights under these Terms;\n\n`;
      text += `    (b) not disclose the Confidential Information to any\n        third party without the prior written consent of\n        the Disclosing Party; and\n\n`;
      text += `    (c) take all reasonable steps to protect the\n        Confidential Information from unauthorised\n        access, use, or disclosure.\n\n`;
      text += `${confNum}.3 This obligation does not apply to information that:\n\n`;
      text += `    (a) is or becomes publicly available through no\n        fault of the Receiving Party;\n\n`;
      text += `    (b) was already known to the Receiving Party;\n\n`;
      text += `    (c) is independently developed by the Receiving\n        Party; or\n\n`;
      text += `    (d) is required to be disclosed by law.\n\n`;
      text += `${confNum}.4 This confidentiality obligation survives the\n    termination or expiry of these Terms for a period\n    of two (2) years.\n\n`;
    }

    // Termination
    const termNum = section();
    text += `${termNum}. TERMINATION\n`;
    text += `${'─'.repeat(45)}\n\n`;

    if (terminationNotice === 'cause-only') {
      text += `${termNum}.1 Either party may terminate the Agreement\n    immediately by written notice if the other party:\n\n`;
      text += `    (a) commits a material breach of these Terms and\n        fails to remedy that breach within fourteen (14)\n        days of receiving written notice specifying the\n        breach; or\n\n`;
      text += `    (b) becomes insolvent, enters into liquidation,\n        has a receiver or administrator appointed, or\n        is otherwise unable to pay its debts as they\n        fall due.\n\n`;
    } else {
      text += `${termNum}.1 Either party may terminate the Agreement by\n    providing ${terminationNotice === '7' ? 'seven (7)' : terminationNotice === '14' ? 'fourteen (14)' : 'thirty (30)'} days' written notice to the other\n    party.\n\n`;
      text += `${termNum}.2 Either party may terminate the Agreement\n    immediately by written notice if the other party:\n\n`;
      text += `    (a) commits a material breach of these Terms and\n        fails to remedy that breach within fourteen (14)\n        days of receiving written notice specifying the\n        breach; or\n\n`;
      text += `    (b) becomes insolvent, enters into liquidation,\n        has a receiver or administrator appointed, or\n        is otherwise unable to pay its debts as they\n        fall due.\n\n`;
    }

    text += `${termNum}.${terminationNotice === 'cause-only' ? '2' : '3'} Upon termination:\n\n`;
    text += `    (a) the Client must pay for all Services provided\n        up to the date of termination;\n\n`;
    text += `    (b) the Provider will deliver all completed and\n        partially completed Deliverables to the Client\n        (subject to payment); and\n\n`;
    text += `    (c) each party must return or destroy any\n        Confidential Information belonging to the other\n        party.\n\n`;
    text += `${termNum}.${terminationNotice === 'cause-only' ? '3' : '4'} Termination does not affect any rights or\n    obligations that have accrued prior to the date of\n    termination, including the right to claim damages\n    for any breach of these Terms.\n\n`;

    // Force Majeure
    if (forceMajeure) {
      const fmNum = section();
      text += `${fmNum}. FORCE MAJEURE\n`;
      text += `${'─'.repeat(45)}\n\n`;
      text += `${fmNum}.1 Neither party shall be liable for any failure or\n    delay in performing its obligations under these\n    Terms where such failure or delay results from a\n    Force Majeure Event.\n\n`;
      text += `${fmNum}.2 "Force Majeure Event" means any event beyond the\n    reasonable control of the affected party, including\n    but not limited to: natural disasters, pandemics,\n    government actions, war, terrorism, cyberattacks,\n    power failures, internet outages, and industrial\n    disputes.\n\n`;
      text += `${fmNum}.3 The affected party must:\n\n`;
      text += `    (a) notify the other party as soon as reasonably\n        practicable of the Force Majeure Event and its\n        expected duration; and\n\n`;
      text += `    (b) use reasonable efforts to mitigate the impact\n        of the Force Majeure Event.\n\n`;
      text += `${fmNum}.4 If a Force Majeure Event continues for more than\n    sixty (60) days, either party may terminate the\n    affected agreement by written notice.\n\n`;
    }

    // Dispute Resolution
    const dispNum = section();
    text += `${dispNum}. DISPUTE RESOLUTION\n`;
    text += `${'─'.repeat(45)}\n\n`;

    switch (disputeResolution) {
      case 'mediation':
        text += `${dispNum}.1 If a dispute arises under or in connection with\n    these Terms ("Dispute"), the parties agree to\n    attempt to resolve the Dispute in good faith through\n    negotiation within fourteen (14) days of one party\n    notifying the other of the Dispute.\n\n`;
        text += `${dispNum}.2 If the Dispute is not resolved through negotiation,\n    the parties agree to submit the Dispute to mediation\n    administered by the Australian Disputes Centre (ADC)\n    or an equivalent mediation service in ${stateFullName},\n    before commencing legal proceedings.\n\n`;
        text += `${dispNum}.3 The costs of mediation shall be shared equally\n    between the parties unless the mediator determines\n    otherwise.\n\n`;
        text += `${dispNum}.4 Nothing in this clause prevents either party from\n    seeking urgent injunctive or interlocutory relief\n    from a court of competent jurisdiction.\n\n`;
        break;
      case 'court':
        text += `${dispNum}.1 Any dispute arising under or in connection with\n    these Terms shall be submitted to the exclusive\n    jurisdiction of the courts of ${stateFullName},\n    Australia, and any courts that may hear appeals\n    from those courts.\n\n`;
        text += `${dispNum}.2 Before commencing proceedings, the parties agree\n    to attempt to resolve the dispute through good-faith\n    negotiation for a period of at least fourteen (14)\n    days.\n\n`;
        break;
      case 'arbitration':
        text += `${dispNum}.1 Any dispute arising under or in connection with\n    these Terms shall be referred to and finally resolved\n    by arbitration administered by the Australian Centre\n    for International Commercial Arbitration (ACICA)\n    in accordance with its Arbitration Rules.\n\n`;
        text += `${dispNum}.2 The seat of arbitration shall be\n    ${stateFullName === 'Victoria' ? 'Melbourne' : stateFullName === 'New South Wales' ? 'Sydney' : stateFullName === 'Queensland' ? 'Brisbane' : stateFullName === 'South Australia' ? 'Adelaide' : stateFullName === 'Western Australia' ? 'Perth' : stateFullName === 'Tasmania' ? 'Hobart' : stateFullName === 'Northern Territory' ? 'Darwin' : 'Canberra'}, ${stateFullName}.\n    The arbitration shall be conducted by a single\n    arbitrator appointed in accordance with the ACICA\n    Rules.\n\n`;
        text += `${dispNum}.3 The decision of the arbitrator shall be final and\n    binding on both parties.\n\n`;
        text += `${dispNum}.4 Nothing in this clause prevents either party from\n    seeking urgent injunctive or interlocutory relief\n    from a court of competent jurisdiction.\n\n`;
        break;
    }

    // Website/Platform terms (Step 4)
    if (hasWebPlatform && step4Options.acceptableUse) {
      const auNum = section();
      text += `${auNum}. ACCEPTABLE USE POLICY\n`;
      text += `${'─'.repeat(45)}\n\n`;
      text += `${auNum}.1 In using our website, platform, or services, you\n    must not:\n\n`;
      text += `    (a) use the services for any unlawful purpose or in\n        violation of any applicable law or regulation;\n\n`;
      text += `    (b) attempt to gain unauthorised access to any\n        part of the services, other users' accounts, or\n        any systems or networks connected to the\n        services;\n\n`;
      text += `    (c) transmit any viruses, malware, or other harmful\n        code;\n\n`;
      text += `    (d) interfere with or disrupt the integrity or\n        performance of the services;\n\n`;
      text += `    (e) use the services to harass, defame, or\n        threaten any person;\n\n`;
      text += `    (f) scrape, data mine, or use automated tools to\n        access or collect data from the services without\n        our prior written consent; or\n\n`;
      text += `    (g) use the services in any manner that could\n        damage, disable, or impair the services.\n\n`;
      text += `${auNum}.2 We reserve the right to suspend or terminate your\n    access to the services immediately if we reasonably\n    believe you have breached this Acceptable Use Policy.\n\n`;
    }

    if (hasWebPlatform && step4Options.userAccounts) {
      const uaNum = section();
      text += `${uaNum}. USER ACCOUNTS\n`;
      text += `${'─'.repeat(45)}\n\n`;
      text += `${uaNum}.1 To access certain features of the services, you\n    may be required to create an account. You agree to:\n\n`;
      text += `    (a) provide accurate, current, and complete\n        information during registration;\n\n`;
      text += `    (b) maintain and promptly update your account\n        information to keep it accurate and complete;\n\n`;
      text += `    (c) keep your login credentials confidential and\n        not share them with any third party; and\n\n`;
      text += `    (d) notify us immediately of any unauthorised use\n        of your account.\n\n`;
      text += `${uaNum}.2 You are responsible for all activity that occurs\n    under your account. We are not liable for any loss\n    or damage arising from unauthorised use of your\n    account.\n\n`;
      text += `${uaNum}.3 We reserve the right to suspend or terminate your\n    account at our discretion if we reasonably believe\n    that you have breached these Terms.\n\n`;
    }

    if (hasWebPlatform && step4Options.contentOwnership !== 'user-retains') {
      const coNum = section();
      text += `${coNum}. USER CONTENT\n`;
      text += `${'─'.repeat(45)}\n\n`;

      if (step4Options.contentOwnership === 'platform-license') {
        text += `${coNum}.1 You retain ownership of any content you submit,\n    upload, or post through the services ("User\n    Content").\n\n`;
        text += `${coNum}.2 By submitting User Content, you grant us a\n    non-exclusive, worldwide, royalty-free, transferable\n    license to use, reproduce, modify, display, and\n    distribute your User Content solely for the purpose\n    of operating and improving the services.\n\n`;
      } else {
        text += `${coNum}.1 By submitting, uploading, or posting content\n    through the services ("User Content"), you assign\n    to us all intellectual property rights in the User\n    Content.\n\n`;
        text += `${coNum}.2 You warrant that you have the right to assign\n    such rights and that the User Content does not\n    infringe the intellectual property rights or other\n    rights of any third party.\n\n`;
      }

      text += `${coNum}.3 You represent and warrant that your User Content:\n\n`;
      text += `    (a) does not infringe any intellectual property\n        rights, privacy rights, or other rights of any\n        third party;\n\n`;
      text += `    (b) does not contain any unlawful, defamatory,\n        obscene, or harmful material; and\n\n`;
      text += `    (c) complies with all applicable laws and\n        regulations.\n\n`;
    }

    if (hasWebPlatform && step4Options.thirdPartyLinks) {
      const tpNum = section();
      text += `${tpNum}. THIRD-PARTY LINKS\n`;
      text += `${'─'.repeat(45)}\n\n`;
      text += `${tpNum}.1 Our website or services may contain links to\n    third-party websites, services, or resources that\n    are not owned or controlled by us.\n\n`;
      text += `${tpNum}.2 We have no control over, and assume no\n    responsibility for, the content, privacy policies,\n    or practices of any third-party websites or\n    services.\n\n`;
      text += `${tpNum}.3 Your use of third-party websites and services is\n    at your own risk and subject to the terms and\n    conditions of those third parties.\n\n`;
    }

    if (hasWebPlatform && step4Options.cookieNotice) {
      const ckNum = section();
      text += `${ckNum}. COOKIES AND ANALYTICS\n`;
      text += `${'─'.repeat(45)}\n\n`;
      text += `${ckNum}.1 Our website uses cookies and similar technologies\n    to enhance your experience, analyse usage, and\n    assist with marketing efforts.\n\n`;
      text += `${ckNum}.2 By using our website, you consent to the use of\n    cookies in accordance with our Privacy Policy.\n\n`;
      text += `${ckNum}.3 You can manage your cookie preferences through\n    your browser settings. Please note that disabling\n    cookies may affect the functionality of our website.\n\n`;
    }

    // Privacy Policy Reference
    const privNum = section();
    text += `${privNum}. PRIVACY\n`;
    text += `${'─'.repeat(45)}\n\n`;
    text += `${privNum}.1 The Provider collects, uses, and discloses personal\n    information in accordance with its Privacy Policy,\n    available at ${bWebsite}/privacy (or upon request).\n\n`;
    text += `${privNum}.2 The Provider handles personal information in\n    accordance with the Privacy Act 1988 (Cth) and the\n    Australian Privacy Principles (APPs).\n\n`;
    text += `${privNum}.3 By engaging the Provider's Services, the Client\n    consents to the collection and use of personal\n    information as described in the Privacy Policy.\n\n`;

    // Amendment
    const amendNum = section();
    text += `${amendNum}. AMENDMENT\n`;
    text += `${'─'.repeat(45)}\n\n`;
    text += `${amendNum}.1 The Provider may amend these Terms at any time by\n    publishing updated Terms on its website.\n\n`;
    text += `${amendNum}.2 The Provider will use reasonable efforts to notify\n    the Client of material changes to these Terms.\n\n`;
    text += `${amendNum}.3 The Client's continued use of the Services after\n    the updated Terms have been published constitutes\n    acceptance of the updated Terms.\n\n`;
    text += `${amendNum}.4 For existing engagements with a signed agreement,\n    no amendment to these Terms shall apply without the\n    written agreement of both parties.\n\n`;

    // Governing Law
    const govNum = section();
    text += `${govNum}. GOVERNING LAW\n`;
    text += `${'─'.repeat(45)}\n\n`;
    text += `${govNum}.1 These Terms are governed by and construed in\n    accordance with the laws of ${stateFullName},\n    Australia.\n\n`;
    text += `${govNum}.2 The parties submit to the exclusive jurisdiction of\n    the courts of ${stateFullName} and any courts that\n    may hear appeals from those courts.\n\n`;

    // Entire Agreement
    const entireNum = section();
    text += `${entireNum}. ENTIRE AGREEMENT\n`;
    text += `${'─'.repeat(45)}\n\n`;
    text += `${entireNum}.1 These Terms, together with any proposal, quote,\n    scope of work, or other agreement between the\n    parties, constitute the entire agreement between\n    the parties with respect to their subject matter.\n\n`;
    text += `${entireNum}.2 These Terms supersede all prior negotiations,\n    representations, warranties, understandings, and\n    agreements between the parties, whether written or\n    oral, in relation to their subject matter.\n\n`;
    text += `${entireNum}.3 Severability: If any provision of these Terms is\n    found to be invalid, illegal, or unenforceable by a\n    court of competent jurisdiction, the remaining\n    provisions shall continue in full force and effect.\n\n`;
    text += `${entireNum}.4 Waiver: A failure or delay by either party to\n    exercise any right under these Terms does not\n    constitute a waiver of that right.\n\n`;
    text += `${entireNum}.5 Assignment: The Client may not assign or transfer\n    its rights or obligations under these Terms without\n    the Provider's prior written consent.\n\n`;

    // Contact Information
    const contactNum = section();
    text += `${contactNum}. CONTACT INFORMATION\n`;
    text += `${'─'.repeat(45)}\n\n`;
    text += `For questions about these Terms, please contact:\n\n`;
    text += `${bName}${bAbn}\n`;
    if (websiteUrl) text += `Website: ${bWebsite}\n`;
    text += `Email:   ${bEmail}\n`;
    text += `State:   ${stateFullName}, Australia\n\n`;

    // Disclaimer
    text += `${'─'.repeat(60)}\n`;
    text += `DISCLAIMER: This document is a template generated by InvoiceFlow\n`;
    text += `and is provided for informational purposes only. It does not\n`;
    text += `constitute legal advice. You should review this document carefully\n`;
    text += `and seek independent legal advice before relying on it. InvoiceFlow\n`;
    text += `accepts no liability for any loss or damage arising from the use\n`;
    text += `of this template.\n`;
    text += `${'─'.repeat(60)}\n`;

    return text;
  }, [
    businessName, abn, businessType, websiteUrl, contactEmail, state,
    serviceTypes, paymentTerms, gstRegistered, latePaymentRate, gracePeriod,
    refundPolicy, customRefund, ipOwnership, revisionPolicy, revisionCount,
    liabilityCap, customLiabilityAmount, forceMajeure, disputeResolution,
    terminationNotice, warrantyType, indemnification, confidentiality,
    hasWebPlatform, step4Options, businessTypeText, servicesDescription,
  ]);

  const handleGenerate = () => setGenerated(true);

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const inputClass =
    'w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-slate-600 focus:outline-none focus:border-amber-400/50 focus:ring-1 focus:ring-amber-400/25 transition-all text-sm';
  const labelClass = 'block text-sm font-medium text-slate-300 mb-1.5';
  const selectClass =
    'w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-amber-400/50 focus:ring-1 focus:ring-amber-400/25 transition-all text-sm appearance-none';

  const checkboxEl = (checked: boolean, onChange: () => void, label: string) => (
    <label className="flex items-center gap-3 cursor-pointer group">
      <div className="relative">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="sr-only peer"
        />
        <div className="w-5 h-5 rounded-md bg-white/5 border border-white/10 peer-checked:bg-amber-400/30 peer-checked:border-amber-400/50 transition-all flex items-center justify-center">
          <svg
            className={`w-3 h-3 text-amber-300 transition-opacity ${checked ? 'opacity-100' : 'opacity-0'}`}
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
        {label}
      </span>
    </label>
  );

  const stepIndicator = (
    <div className="flex items-center justify-center gap-2 mb-8">
      {Array.from({ length: totalSteps }, (_, i) => {
        const stepNum = i + 1;
        const isActive = stepNum === currentStep;
        const isComplete = stepNum < currentStep;
        // Handle skipped step 4
        const isSkipped = stepNum === 4 && !hasWebPlatform;
        if (isSkipped && currentStep !== 4) {
          return (
            <div key={stepNum} className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                <span className="text-xs text-slate-600">4</span>
              </div>
              {stepNum < totalSteps && <div className="w-8 h-0.5 bg-white/10" />}
            </div>
          );
        }
        return (
          <div key={stepNum} className="flex items-center gap-2">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                isActive
                  ? 'bg-gradient-to-r from-amber-400 to-orange-500 text-white'
                  : isComplete
                  ? 'bg-amber-400/20 border border-amber-400/40 text-amber-300'
                  : 'bg-white/5 border border-white/10 text-slate-500'
              }`}
            >
              {isComplete ? (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <span className="text-xs font-medium">{stepNum}</span>
              )}
            </div>
            {stepNum < totalSteps && (
              <div className={`w-8 h-0.5 ${isComplete ? 'bg-amber-400/40' : 'bg-white/10'}`} />
            )}
          </div>
        );
      })}
    </div>
  );

  const stepLabels = ['Business Details', 'Service Terms', 'Liability & Legal', 'Website/Platform', 'Review & Generate'];

  return (
    <div className="space-y-8">
      {/* Step Indicator */}
      {!generated && (
        <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
          {stepIndicator}
          <p className="text-center text-sm text-slate-400">
            Step {currentStep} of {totalSteps}: <span className="text-white font-medium">{stepLabels[currentStep - 1]}</span>
          </p>
        </div>
      )}

      {/* Step 1: Business Details */}
      {!generated && currentStep === 1 && (
        <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
          <h3 className="text-lg font-bold text-white heading-font mb-6">Business Details</h3>
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="sm:col-span-2">
              <label className={labelClass}>Business Name</label>
              <input
                type="text"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                className={inputClass}
                placeholder="e.g. Sarah Mitchell Design Studio"
              />
            </div>
            <div>
              <label className={labelClass}>ABN (optional)</label>
              <input
                type="text"
                value={abn}
                onChange={(e) => setAbn(e.target.value)}
                className={inputClass}
                placeholder="e.g. 12 345 678 901"
              />
            </div>
            <div>
              <label className={labelClass}>Business Type</label>
              <select
                value={businessType}
                onChange={(e) => setBusinessType(e.target.value as BusinessType)}
                className={selectClass}
              >
                {BUSINESS_TYPE_LABELS.map((bt) => (
                  <option key={bt.value} value={bt.value} className="bg-[#0B1120]">
                    {bt.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className={labelClass}>Website URL</label>
              <input
                type="text"
                value={websiteUrl}
                onChange={(e) => setWebsiteUrl(e.target.value)}
                className={inputClass}
                placeholder="e.g. https://sarahmitchell.com.au"
              />
            </div>
            <div>
              <label className={labelClass}>Contact Email</label>
              <input
                type="email"
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
                className={inputClass}
                placeholder="e.g. hello@sarahmitchell.com.au"
              />
            </div>
            <div className="sm:col-span-2">
              <label className={labelClass}>State / Territory</label>
              <select
                value={state}
                onChange={(e) => setState(e.target.value as AustralianState)}
                className={selectClass}
              >
                {STATES.map((s) => (
                  <option key={s.value} value={s.value} className="bg-[#0B1120]">
                    {s.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className={labelClass}>What do you provide?</label>
              <p className="text-xs text-slate-500 mb-3">Select all that apply</p>
              <div className="grid sm:grid-cols-2 gap-2">
                {SERVICE_TYPE_LABELS.map((item) => (
                  <div key={item.key}>
                    {checkboxEl(serviceTypes[item.key], () => toggleServiceType(item.key), item.label)}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Step 2: Service Terms */}
      {!generated && currentStep === 2 && (
        <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
          <h3 className="text-lg font-bold text-white heading-font mb-6">Service Terms</h3>
          <div className="space-y-6">
            {/* Payment Terms */}
            <div>
              <label className={labelClass}>Payment Terms</label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {PAYMENT_TERMS_LABELS.map((pt) => (
                  <button
                    key={pt.value}
                    onClick={() => setPaymentTerms(pt.value)}
                    className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                      paymentTerms === pt.value
                        ? 'bg-gradient-to-r from-amber-400/30 to-orange-500/30 border border-amber-400/40 text-amber-300'
                        : 'bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {pt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* GST */}
            <div>
              <label className={labelClass}>GST Registered?</label>
              <div className="flex gap-3">
                <button
                  onClick={() => setGstRegistered(true)}
                  className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    gstRegistered
                      ? 'bg-gradient-to-r from-amber-400/30 to-orange-500/30 border border-amber-400/40 text-amber-300'
                      : 'bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  Yes
                </button>
                <button
                  onClick={() => setGstRegistered(false)}
                  className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    !gstRegistered
                      ? 'bg-gradient-to-r from-amber-400/30 to-orange-500/30 border border-amber-400/40 text-amber-300'
                      : 'bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  No
                </button>
              </div>
            </div>

            {/* Late Payment */}
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className={labelClass}>Late Payment Interest Rate (% p.a.)</label>
                <input
                  type="number"
                  value={latePaymentRate}
                  onChange={(e) => setLatePaymentRate(e.target.value)}
                  className={inputClass}
                  placeholder="10"
                  min="0"
                  max="100"
                />
              </div>
              <div>
                <label className={labelClass}>Grace Period (days)</label>
                <input
                  type="number"
                  value={gracePeriod}
                  onChange={(e) => setGracePeriod(e.target.value)}
                  className={inputClass}
                  placeholder="14"
                  min="0"
                  max="90"
                />
              </div>
            </div>

            {/* Refund Policy */}
            <div>
              <label className={labelClass}>Refund Policy</label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {REFUND_POLICY_LABELS.map((rp) => (
                  <button
                    key={rp.value}
                    onClick={() => setRefundPolicy(rp.value)}
                    className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                      refundPolicy === rp.value
                        ? 'bg-gradient-to-r from-amber-400/30 to-orange-500/30 border border-amber-400/40 text-amber-300'
                        : 'bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {rp.label}
                  </button>
                ))}
              </div>
              {refundPolicy === 'custom' && (
                <div className="mt-3">
                  <input
                    type="text"
                    value={customRefund}
                    onChange={(e) => setCustomRefund(e.target.value)}
                    className={inputClass}
                    placeholder="Describe your refund policy..."
                  />
                </div>
              )}
            </div>

            {/* IP Ownership */}
            <div>
              <label className={labelClass}>Intellectual Property Ownership</label>
              <div className="space-y-2">
                {IP_OPTIONS.map((ip) => (
                  <button
                    key={ip.value}
                    onClick={() => setIpOwnership(ip.value)}
                    className={`w-full px-4 py-3 rounded-xl text-left transition-all ${
                      ipOwnership === ip.value
                        ? 'bg-gradient-to-r from-amber-400/20 to-orange-500/20 border border-amber-400/40'
                        : 'bg-white/5 border border-white/10 hover:bg-white/10'
                    }`}
                  >
                    <p className={`text-sm font-semibold ${ipOwnership === ip.value ? 'text-amber-300' : 'text-slate-400'}`}>
                      {ip.label}
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">{ip.desc}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Revision Policy */}
            <div>
              <label className={labelClass}>Revision Policy</label>
              <div className="flex gap-2 flex-wrap">
                <button
                  onClick={() => setRevisionPolicy('unlimited')}
                  className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    revisionPolicy === 'unlimited'
                      ? 'bg-gradient-to-r from-amber-400/30 to-orange-500/30 border border-amber-400/40 text-amber-300'
                      : 'bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  Unlimited
                </button>
                <button
                  onClick={() => setRevisionPolicy('limited')}
                  className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    revisionPolicy === 'limited'
                      ? 'bg-gradient-to-r from-amber-400/30 to-orange-500/30 border border-amber-400/40 text-amber-300'
                      : 'bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  Limited
                </button>
                <button
                  onClick={() => setRevisionPolicy('none')}
                  className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    revisionPolicy === 'none'
                      ? 'bg-gradient-to-r from-amber-400/30 to-orange-500/30 border border-amber-400/40 text-amber-300'
                      : 'bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  None Included
                </button>
              </div>
              {revisionPolicy === 'limited' && (
                <div className="mt-3">
                  <label className={labelClass}>Number of Revisions</label>
                  <div className="flex gap-2">
                    {['1', '2', '3', '4', '5'].map((n) => (
                      <button
                        key={n}
                        onClick={() => setRevisionCount(n)}
                        className={`w-10 h-10 rounded-lg text-sm font-medium transition-all ${
                          revisionCount === n
                            ? 'bg-gradient-to-r from-amber-400/30 to-orange-500/30 border border-amber-400/40 text-amber-300'
                            : 'bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                        }`}
                      >
                        {n}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Step 3: Liability & Legal */}
      {!generated && currentStep === 3 && (
        <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
          <h3 className="text-lg font-bold text-white heading-font mb-6">Liability & Legal</h3>
          <div className="space-y-6">
            {/* Limitation of Liability */}
            <div>
              <label className={labelClass}>Limitation of Liability</label>
              <div className="grid grid-cols-2 gap-2">
                {LIABILITY_CAP_LABELS.map((lc) => (
                  <button
                    key={lc.value}
                    onClick={() => setLiabilityCap(lc.value)}
                    className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                      liabilityCap === lc.value
                        ? 'bg-gradient-to-r from-amber-400/30 to-orange-500/30 border border-amber-400/40 text-amber-300'
                        : 'bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {lc.label}
                  </button>
                ))}
              </div>
              {liabilityCap === 'custom' && (
                <div className="mt-3">
                  <label className={labelClass}>Custom Liability Cap (AUD)</label>
                  <input
                    type="text"
                    value={customLiabilityAmount}
                    onChange={(e) => setCustomLiabilityAmount(e.target.value)}
                    className={inputClass}
                    placeholder="e.g. 50,000"
                  />
                </div>
              )}
            </div>

            {/* Force Majeure */}
            <div>
              <label className={labelClass}>Force Majeure Clause?</label>
              <div className="flex gap-3">
                <button
                  onClick={() => setForceMajeure(true)}
                  className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    forceMajeure
                      ? 'bg-gradient-to-r from-amber-400/30 to-orange-500/30 border border-amber-400/40 text-amber-300'
                      : 'bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  Yes
                </button>
                <button
                  onClick={() => setForceMajeure(false)}
                  className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    !forceMajeure
                      ? 'bg-gradient-to-r from-amber-400/30 to-orange-500/30 border border-amber-400/40 text-amber-300'
                      : 'bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  No
                </button>
              </div>
            </div>

            {/* Dispute Resolution */}
            <div>
              <label className={labelClass}>Dispute Resolution</label>
              <div className="flex gap-2 flex-wrap">
                {DISPUTE_LABELS.map((d) => (
                  <button
                    key={d.value}
                    onClick={() => setDisputeResolution(d.value)}
                    className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                      disputeResolution === d.value
                        ? 'bg-gradient-to-r from-amber-400/30 to-orange-500/30 border border-amber-400/40 text-amber-300'
                        : 'bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {d.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Termination */}
            <div>
              <label className={labelClass}>Termination Notice Period</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {TERMINATION_LABELS.map((t) => (
                  <button
                    key={t.value}
                    onClick={() => setTerminationNotice(t.value)}
                    className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                      terminationNotice === t.value
                        ? 'bg-gradient-to-r from-amber-400/30 to-orange-500/30 border border-amber-400/40 text-amber-300'
                        : 'bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Warranties */}
            <div>
              <label className={labelClass}>Warranties</label>
              <div className="flex gap-2 flex-wrap">
                {WARRANTY_LABELS.map((w) => (
                  <button
                    key={w.value}
                    onClick={() => setWarrantyType(w.value)}
                    className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                      warrantyType === w.value
                        ? 'bg-gradient-to-r from-amber-400/30 to-orange-500/30 border border-amber-400/40 text-amber-300'
                        : 'bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {w.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Indemnification & Confidentiality */}
            <div className="space-y-3">
              {checkboxEl(indemnification, () => setIndemnification(!indemnification), 'Include indemnification clause')}
              {checkboxEl(confidentiality, () => setConfidentiality(!confidentiality), 'Include confidentiality clause')}
            </div>
          </div>
        </div>
      )}

      {/* Step 4: Website/Platform Terms */}
      {!generated && currentStep === 4 && hasWebPlatform && (
        <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
          <h3 className="text-lg font-bold text-white heading-font mb-6">Website / Platform Terms</h3>
          <p className="text-sm text-slate-400 mb-6">
            These clauses apply because you selected subscription services or SaaS / online platform.
          </p>
          <div className="space-y-4">
            {checkboxEl(
              step4Options.acceptableUse,
              () => setStep4Options((prev) => ({ ...prev, acceptableUse: !prev.acceptableUse })),
              'Include Acceptable Use Policy'
            )}
            {checkboxEl(
              step4Options.userAccounts,
              () => setStep4Options((prev) => ({ ...prev, userAccounts: !prev.userAccounts })),
              'Include User Accounts terms'
            )}

            <div className="mt-4">
              <label className={labelClass}>Content Ownership</label>
              <div className="space-y-2">
                <button
                  onClick={() => setStep4Options((prev) => ({ ...prev, contentOwnership: 'user-retains' }))}
                  className={`w-full px-4 py-3 rounded-xl text-left transition-all ${
                    step4Options.contentOwnership === 'user-retains'
                      ? 'bg-gradient-to-r from-amber-400/20 to-orange-500/20 border border-amber-400/40'
                      : 'bg-white/5 border border-white/10 hover:bg-white/10'
                  }`}
                >
                  <p className={`text-sm font-semibold ${step4Options.contentOwnership === 'user-retains' ? 'text-amber-300' : 'text-slate-400'}`}>
                    User Retains Ownership
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">Users keep full ownership of their content</p>
                </button>
                <button
                  onClick={() => setStep4Options((prev) => ({ ...prev, contentOwnership: 'platform-license' }))}
                  className={`w-full px-4 py-3 rounded-xl text-left transition-all ${
                    step4Options.contentOwnership === 'platform-license'
                      ? 'bg-gradient-to-r from-amber-400/20 to-orange-500/20 border border-amber-400/40'
                      : 'bg-white/5 border border-white/10 hover:bg-white/10'
                  }`}
                >
                  <p className={`text-sm font-semibold ${step4Options.contentOwnership === 'platform-license' ? 'text-amber-300' : 'text-slate-400'}`}>
                    Platform License
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">Users retain ownership but grant you a license to use their content</p>
                </button>
                <button
                  onClick={() => setStep4Options((prev) => ({ ...prev, contentOwnership: 'platform-owns' }))}
                  className={`w-full px-4 py-3 rounded-xl text-left transition-all ${
                    step4Options.contentOwnership === 'platform-owns'
                      ? 'bg-gradient-to-r from-amber-400/20 to-orange-500/20 border border-amber-400/40'
                      : 'bg-white/5 border border-white/10 hover:bg-white/10'
                  }`}
                >
                  <p className={`text-sm font-semibold ${step4Options.contentOwnership === 'platform-owns' ? 'text-amber-300' : 'text-slate-400'}`}>
                    Platform Owns
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">Content submitted to the platform becomes platform property</p>
                </button>
              </div>
            </div>

            <div className="mt-4 space-y-3">
              {checkboxEl(
                step4Options.thirdPartyLinks,
                () => setStep4Options((prev) => ({ ...prev, thirdPartyLinks: !prev.thirdPartyLinks })),
                'Include Third-Party Links disclaimer'
              )}
              {checkboxEl(
                step4Options.cookieNotice,
                () => setStep4Options((prev) => ({ ...prev, cookieNotice: !prev.cookieNotice })),
                'Include Cookie Notice reference'
              )}
            </div>
          </div>
        </div>
      )}

      {/* Step 5: Review & Generate */}
      {!generated && currentStep === 5 && (
        <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
          <h3 className="text-lg font-bold text-white heading-font mb-6">Review Your Selections</h3>
          <div className="space-y-4">
            {/* Business Details Summary */}
            <div className="bg-white/5 rounded-xl p-4">
              <h4 className="text-amber-300 font-semibold text-sm mb-2">Business Details</h4>
              <div className="grid sm:grid-cols-2 gap-2 text-sm">
                <div><span className="text-slate-500">Name:</span> <span className="text-slate-300">{businessName || 'Not set'}</span></div>
                <div><span className="text-slate-500">ABN:</span> <span className="text-slate-300">{abn || 'Not provided'}</span></div>
                <div><span className="text-slate-500">Type:</span> <span className="text-slate-300">{BUSINESS_TYPE_LABELS.find(b => b.value === businessType)?.label}</span></div>
                <div><span className="text-slate-500">State:</span> <span className="text-slate-300">{STATE_FULL_NAMES[state]}</span></div>
                <div><span className="text-slate-500">Website:</span> <span className="text-slate-300">{websiteUrl || 'Not set'}</span></div>
                <div><span className="text-slate-500">Email:</span> <span className="text-slate-300">{contactEmail || 'Not set'}</span></div>
              </div>
              <div className="mt-2">
                <span className="text-slate-500 text-sm">Services: </span>
                <span className="text-slate-300 text-sm">
                  {SERVICE_TYPE_LABELS.filter(s => serviceTypes[s.key]).map(s => s.label).join(', ') || 'None selected'}
                </span>
              </div>
            </div>

            {/* Service Terms Summary */}
            <div className="bg-white/5 rounded-xl p-4">
              <h4 className="text-amber-300 font-semibold text-sm mb-2">Service Terms</h4>
              <div className="grid sm:grid-cols-2 gap-2 text-sm">
                <div><span className="text-slate-500">Payment:</span> <span className="text-slate-300">{PAYMENT_TERMS_LABELS.find(p => p.value === paymentTerms)?.label}</span></div>
                <div><span className="text-slate-500">GST Registered:</span> <span className="text-slate-300">{gstRegistered ? 'Yes' : 'No'}</span></div>
                <div><span className="text-slate-500">Late Interest:</span> <span className="text-slate-300">{latePaymentRate}% p.a.</span></div>
                <div><span className="text-slate-500">Grace Period:</span> <span className="text-slate-300">{gracePeriod} days</span></div>
                <div><span className="text-slate-500">Refund:</span> <span className="text-slate-300">{REFUND_POLICY_LABELS.find(r => r.value === refundPolicy)?.label}</span></div>
                <div><span className="text-slate-500">IP:</span> <span className="text-slate-300">{IP_OPTIONS.find(i => i.value === ipOwnership)?.label}</span></div>
                <div><span className="text-slate-500">Revisions:</span> <span className="text-slate-300">{revisionPolicy === 'unlimited' ? 'Unlimited' : revisionPolicy === 'limited' ? `${revisionCount} rounds` : 'None included'}</span></div>
              </div>
            </div>

            {/* Liability & Legal Summary */}
            <div className="bg-white/5 rounded-xl p-4">
              <h4 className="text-amber-300 font-semibold text-sm mb-2">Liability & Legal</h4>
              <div className="grid sm:grid-cols-2 gap-2 text-sm">
                <div><span className="text-slate-500">Liability Cap:</span> <span className="text-slate-300">{LIABILITY_CAP_LABELS.find(l => l.value === liabilityCap)?.label}</span></div>
                <div><span className="text-slate-500">Force Majeure:</span> <span className="text-slate-300">{forceMajeure ? 'Included' : 'Not included'}</span></div>
                <div><span className="text-slate-500">Disputes:</span> <span className="text-slate-300">{DISPUTE_LABELS.find(d => d.value === disputeResolution)?.label}</span></div>
                <div><span className="text-slate-500">Termination:</span> <span className="text-slate-300">{TERMINATION_LABELS.find(t => t.value === terminationNotice)?.label}</span></div>
                <div><span className="text-slate-500">Warranties:</span> <span className="text-slate-300">{WARRANTY_LABELS.find(w => w.value === warrantyType)?.label}</span></div>
                <div><span className="text-slate-500">Indemnification:</span> <span className="text-slate-300">{indemnification ? 'Included' : 'Not included'}</span></div>
                <div><span className="text-slate-500">Confidentiality:</span> <span className="text-slate-300">{confidentiality ? 'Included' : 'Not included'}</span></div>
              </div>
            </div>

            {/* Website/Platform Summary */}
            {hasWebPlatform && (
              <div className="bg-white/5 rounded-xl p-4">
                <h4 className="text-amber-300 font-semibold text-sm mb-2">Website / Platform</h4>
                <div className="grid sm:grid-cols-2 gap-2 text-sm">
                  <div><span className="text-slate-500">Acceptable Use:</span> <span className="text-slate-300">{step4Options.acceptableUse ? 'Included' : 'Not included'}</span></div>
                  <div><span className="text-slate-500">User Accounts:</span> <span className="text-slate-300">{step4Options.userAccounts ? 'Included' : 'Not included'}</span></div>
                  <div><span className="text-slate-500">Content:</span> <span className="text-slate-300">{step4Options.contentOwnership === 'user-retains' ? 'User Retains' : step4Options.contentOwnership === 'platform-license' ? 'Platform License' : 'Platform Owns'}</span></div>
                  <div><span className="text-slate-500">Third-Party Links:</span> <span className="text-slate-300">{step4Options.thirdPartyLinks ? 'Included' : 'Not included'}</span></div>
                  <div><span className="text-slate-500">Cookie Notice:</span> <span className="text-slate-300">{step4Options.cookieNotice ? 'Included' : 'Not included'}</span></div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Navigation Buttons */}
      {!generated && (
        <div className="flex items-center justify-between">
          <button
            onClick={prevStep}
            disabled={currentStep === 1}
            className={`px-6 py-3 rounded-xl text-sm font-medium transition-all ${
              currentStep === 1
                ? 'bg-white/5 border border-white/10 text-slate-600 cursor-not-allowed'
                : 'bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 hover:text-white'
            }`}
          >
            Previous
          </button>
          {currentStep < 5 ? (
            <button
              onClick={nextStep}
              className="px-6 py-3 rounded-xl text-sm font-medium bg-gradient-to-r from-amber-400 to-orange-500 text-white hover:from-amber-300 hover:to-orange-400 transition-all"
            >
              Next Step
            </button>
          ) : (
            <button
              onClick={handleGenerate}
              className="px-8 py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-amber-400 to-orange-500 text-white hover:from-amber-300 hover:to-orange-400 transition-all"
            >
              Generate Terms of Service
            </button>
          )}
        </div>
      )}

      {/* Generated Output */}
      {generated && (
        <>
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-white heading-font">Terms of Service Preview</h3>
              <span className="text-xs px-3 py-1 rounded-full bg-amber-400/10 text-amber-300 font-medium">
                {businessName || 'Your T&C'}
              </span>
            </div>

            <div className="bg-slate-900/50 border border-white/10 rounded-xl p-6 font-mono text-sm whitespace-pre-wrap text-slate-300 leading-relaxed max-h-[600px] overflow-y-auto">
              {generatedText}
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-3 mt-6">
              <button
                onClick={handleCopy}
                className="bg-gradient-to-r from-amber-400 to-orange-500 text-white font-semibold rounded-xl px-8 py-4 hover:from-amber-300 hover:to-orange-400 transition-all"
              >
                {copied ? 'Copied to Clipboard!' : 'Copy to Clipboard'}
              </button>
              <button
                onClick={() => {
                  setGenerated(false);
                  setCurrentStep(1);
                }}
                className="bg-white/5 border border-white/10 text-slate-300 font-semibold rounded-xl px-8 py-4 hover:bg-white/10 hover:text-white transition-all"
              >
                Start Over
              </button>
            </div>
          </div>

          {/* Tips */}
          <div className="bg-amber-400/5 border border-amber-400/20 rounded-2xl p-6">
            <h4 className="text-amber-300 font-semibold mb-2">Before You Publish</h4>
            <ul className="text-sm text-slate-400 space-y-2">
              <li>Review every clause carefully and customise the language to match your specific business and the services you provide.</li>
              <li>This is a template, not legal advice. For complex businesses or regulated industries, have a solicitor review the document.</li>
              <li>Publish your Terms of Service on your website and link to it from your footer. Make it easily accessible to all clients and visitors.</li>
              <li>Reference your Terms in proposals, quotes, and invoices so clients are aware of the terms before engaging your services.</li>
              <li>Review and update your Terms at least annually, or whenever your business model, pricing, or services change.</li>
              <li>Under Australian Consumer Law, certain consumer guarantees cannot be excluded. Ensure your Terms comply with the ACL.</li>
            </ul>
          </div>

          {/* Related Tools */}
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white heading-font mb-4">Related Tools</h3>
            <div className="grid sm:grid-cols-3 gap-3">
              <a
                href="/tools/contract-generator"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-amber-400/30 rounded-xl p-4 transition-all group"
              >
                <p className="text-white font-medium text-sm group-hover:text-amber-300 transition-colors">
                  Contract Generator
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Generate full service agreements with scope and payment terms
                </p>
              </a>
              <a
                href="/tools/nda-generator"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-amber-400/30 rounded-xl p-4 transition-all group"
              >
                <p className="text-white font-medium text-sm group-hover:text-amber-300 transition-colors">
                  NDA Generator
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Create non-disclosure agreements for client engagements
                </p>
              </a>
              <a
                href="/tools/privacy-policy-generator"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-amber-400/30 rounded-xl p-4 transition-all group"
              >
                <p className="text-white font-medium text-sm group-hover:text-amber-300 transition-colors">
                  Privacy Policy Generator
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Generate a privacy policy that complies with Australian law
                </p>
              </a>
            </div>
          </div>

          <div className="text-center">
            <p className="text-xs text-slate-500 max-w-2xl mx-auto">
              This tool generates terms of service templates for Australian freelancers and small businesses.
              The generated document is a template only and does not constitute legal advice. Review and customise
              it before use. For complex or regulated businesses, seek independent legal counsel.
            </p>
          </div>
        </>
      )}
    </div>
  );
}
