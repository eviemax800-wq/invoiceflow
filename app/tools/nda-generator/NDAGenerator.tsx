'use client';

import { useState, useMemo } from 'react';

/* ---- Helpers ---- */

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

type NDAType = 'mutual' | 'one-way-disclosing' | 'one-way-receiving';

type Duration = '1' | '2' | '3' | '5' | 'indefinite';

type AustralianState = 'VIC' | 'NSW' | 'QLD' | 'SA' | 'WA' | 'TAS' | 'NT' | 'ACT';

interface ConfidentialInfoOptions {
  businessPlans: boolean;
  financialInfo: boolean;
  clientLists: boolean;
  technicalData: boolean;
  marketingStrategies: boolean;
  tradeSecrets: boolean;
  intellectualProperty: boolean;
  personalData: boolean;
  other: boolean;
}

interface ExclusionOptions {
  publiclyAvailable: boolean;
  alreadyKnown: boolean;
  independentlyDeveloped: boolean;
  requiredByLaw: boolean;
}

interface AdditionalClauseOptions {
  nonSolicitation: boolean;
  nonCompete: boolean;
  returnOfMaterials: boolean;
  injunctiveRelief: boolean;
}

const NDA_TYPES: { value: NDAType; label: string; description: string }[] = [
  { value: 'mutual', label: 'Mutual NDA', description: 'Both parties share and protect confidential information' },
  { value: 'one-way-disclosing', label: 'One-Way (You Disclose)', description: 'You share confidential information with the other party' },
  { value: 'one-way-receiving', label: 'One-Way (You Receive)', description: 'The other party shares confidential information with you' },
];

const DURATION_OPTIONS: { value: Duration; label: string }[] = [
  { value: '1', label: '1 Year' },
  { value: '2', label: '2 Years' },
  { value: '3', label: '3 Years' },
  { value: '5', label: '5 Years' },
  { value: 'indefinite', label: 'Indefinite' },
];

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
  NSW: 'New South Wales',
  VIC: 'Victoria',
  QLD: 'Queensland',
  SA: 'South Australia',
  WA: 'Western Australia',
  TAS: 'Tasmania',
  NT: 'Northern Territory',
  ACT: 'Australian Capital Territory',
};

const CONFIDENTIAL_INFO_LABELS: { key: keyof ConfidentialInfoOptions; label: string }[] = [
  { key: 'businessPlans', label: 'Business plans and strategies' },
  { key: 'financialInfo', label: 'Financial information and records' },
  { key: 'clientLists', label: 'Client and customer lists' },
  { key: 'technicalData', label: 'Technical data, source code, and algorithms' },
  { key: 'marketingStrategies', label: 'Marketing strategies and campaigns' },
  { key: 'tradeSecrets', label: 'Trade secrets and proprietary processes' },
  { key: 'intellectualProperty', label: 'Intellectual property and inventions' },
  { key: 'personalData', label: 'Personal data and employee information' },
  { key: 'other', label: 'Other (specify below)' },
];

const EXCLUSION_LABELS: { key: keyof ExclusionOptions; label: string }[] = [
  { key: 'publiclyAvailable', label: 'Information that is or becomes publicly available (through no fault of the Receiving Party)' },
  { key: 'alreadyKnown', label: 'Information already known to the Receiving Party prior to disclosure' },
  { key: 'independentlyDeveloped', label: 'Information independently developed by the Receiving Party without reference to Confidential Information' },
  { key: 'requiredByLaw', label: 'Information required to be disclosed by law, regulation, or court order' },
];

const ADDITIONAL_CLAUSE_LABELS: { key: keyof AdditionalClauseOptions; label: string; description: string }[] = [
  { key: 'nonSolicitation', label: 'Non-solicitation', description: 'Prevent soliciting each other\'s employees or clients' },
  { key: 'nonCompete', label: 'Non-compete', description: 'Restrict competing activities during and after the NDA term' },
  { key: 'returnOfMaterials', label: 'Return of materials', description: 'Require return or destruction of all confidential materials on termination' },
  { key: 'injunctiveRelief', label: 'Injunctive relief', description: 'Allow seeking urgent court orders to prevent or stop a breach' },
];

/* ---- Component ---- */

export default function NDAGenerator() {
  // NDA Type
  const [ndaType, setNdaType] = useState<NDAType>('mutual');

  // Disclosing Party details
  const [disclosingName, setDisclosingName] = useState('');
  const [disclosingABN, setDisclosingABN] = useState('');
  const [disclosingAddress, setDisclosingAddress] = useState('');
  const [disclosingEmail, setDisclosingEmail] = useState('');

  // Receiving Party details
  const [receivingName, setReceivingName] = useState('');
  const [receivingABN, setReceivingABN] = useState('');
  const [receivingAddress, setReceivingAddress] = useState('');
  const [receivingEmail, setReceivingEmail] = useState('');

  // Purpose
  const [purpose, setPurpose] = useState('');

  // Confidential Information
  const [confidentialInfo, setConfidentialInfo] = useState<ConfidentialInfoOptions>({
    businessPlans: true,
    financialInfo: true,
    clientLists: false,
    technicalData: true,
    marketingStrategies: false,
    tradeSecrets: true,
    intellectualProperty: true,
    personalData: false,
    other: false,
  });
  const [otherConfidentialInfo, setOtherConfidentialInfo] = useState('');

  // Exclusions
  const [exclusions, setExclusions] = useState<ExclusionOptions>({
    publiclyAvailable: true,
    alreadyKnown: true,
    independentlyDeveloped: true,
    requiredByLaw: true,
  });

  // Duration
  const [duration, setDuration] = useState<Duration>('2');

  // Governing State
  const [governingState, setGoverningState] = useState<AustralianState>('VIC');

  // Additional Clauses
  const [additionalClauses, setAdditionalClauses] = useState<AdditionalClauseOptions>({
    nonSolicitation: false,
    nonCompete: false,
    returnOfMaterials: true,
    injunctiveRelief: true,
  });

  // UI
  const [generated, setGenerated] = useState(false);
  const [copied, setCopied] = useState(false);

  const toggleConfidentialInfo = (key: keyof ConfidentialInfoOptions) => {
    setConfidentialInfo((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleExclusion = (key: keyof ExclusionOptions) => {
    setExclusions((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleAdditionalClause = (key: keyof AdditionalClauseOptions) => {
    setAdditionalClauses((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Party role labels based on NDA type
  const partyLabels = useMemo(() => {
    switch (ndaType) {
      case 'mutual':
        return { first: 'First Party', second: 'Second Party' };
      case 'one-way-disclosing':
        return { first: 'Disclosing Party (You)', second: 'Receiving Party' };
      case 'one-way-receiving':
        return { first: 'Disclosing Party', second: 'Receiving Party (You)' };
    }
  }, [ndaType]);

  // Build the NDA text
  const generatedText = useMemo(() => {
    const discName = disclosingName || '[Disclosing Party Name]';
    const discABN = disclosingABN || '[ABN]';
    const discAddress = disclosingAddress || '[Address]';
    const discEmail = disclosingEmail || '[email@example.com]';
    const recName = receivingName || '[Receiving Party Name]';
    const recABN = receivingABN || '[ABN]';
    const recAddress = receivingAddress || '[Address]';
    const recEmail = receivingEmail || '[email@example.com]';
    const purposeText = purpose || '[Purpose of disclosure]';
    const today = formatDateAU(todayISO());
    const stateFullName = STATE_FULL_NAMES[governingState];
    const isMutual = ndaType === 'mutual';

    // Build confidential info list
    const selectedConfInfo: string[] = [];
    if (confidentialInfo.businessPlans) selectedConfInfo.push('business plans, proposals, and strategies');
    if (confidentialInfo.financialInfo) selectedConfInfo.push('financial information, records, projections, and budgets');
    if (confidentialInfo.clientLists) selectedConfInfo.push('client lists, customer databases, and contact information');
    if (confidentialInfo.technicalData) selectedConfInfo.push('technical data, source code, algorithms, software, and system architectures');
    if (confidentialInfo.marketingStrategies) selectedConfInfo.push('marketing strategies, campaigns, market research, and analytics');
    if (confidentialInfo.tradeSecrets) selectedConfInfo.push('trade secrets, proprietary processes, formulas, and methodologies');
    if (confidentialInfo.intellectualProperty) selectedConfInfo.push('intellectual property, inventions, designs, patents, and trademarks');
    if (confidentialInfo.personalData) selectedConfInfo.push('personal data, employee information, and human resources records');
    if (confidentialInfo.other && otherConfidentialInfo) selectedConfInfo.push(otherConfidentialInfo);

    // Build exclusions list
    const selectedExclusions: string[] = [];
    if (exclusions.publiclyAvailable) selectedExclusions.push('information that is or becomes generally available to the public other than as a result of a breach of this Agreement by the Receiving Party');
    if (exclusions.alreadyKnown) selectedExclusions.push('information that was already in the possession of the Receiving Party prior to disclosure by the Disclosing Party, as evidenced by written records');
    if (exclusions.independentlyDeveloped) selectedExclusions.push('information that is independently developed by the Receiving Party without reference to or use of the Confidential Information');
    if (exclusions.requiredByLaw) selectedExclusions.push('information that is required to be disclosed by applicable law, regulation, or order of a court or governmental authority, provided that the Receiving Party gives prompt written notice to the Disclosing Party prior to such disclosure');

    // Duration text
    const durationText = duration === 'indefinite'
      ? 'indefinitely from the date of this Agreement'
      : `for a period of ${duration === '1' ? 'one (1) year' : duration === '2' ? 'two (2) years' : duration === '3' ? 'three (3) years' : 'five (5) years'} from the date of this Agreement`;

    const confidentialityDuration = duration === 'indefinite'
      ? 'indefinitely'
      : `for a period of ${duration === '1' ? 'one (1) year' : duration === '2' ? 'two (2) years' : duration === '3' ? 'three (3) years' : 'five (5) years'} from the date of disclosure`;

    let sectionNum = 0;
    const section = () => {
      sectionNum++;
      return sectionNum;
    };

    let text = '';

    // Title
    text += `${'='.repeat(60)}\n`;
    text += isMutual
      ? `MUTUAL NON-DISCLOSURE AGREEMENT\n`
      : `NON-DISCLOSURE AGREEMENT\n`;
    text += `(CONFIDENTIALITY AGREEMENT)\n`;
    text += `${'='.repeat(60)}\n\n`;

    text += `Date: ${today}\n`;
    text += `Agreement Reference: NDA-${todayISO().replace(/-/g, '')}\n\n`;

    // Parties
    const partiesNum = section();
    text += `${partiesNum}. PARTIES\n`;
    text += `${'─'.repeat(45)}\n\n`;
    text += `This Non-Disclosure Agreement ("Agreement") is entered into\nas of ${today} by and between:\n\n`;

    if (isMutual) {
      text += `FIRST PARTY:\n`;
      text += `  Name:     ${discName}\n`;
      text += `  ABN:      ${discABN}\n`;
      text += `  Address:  ${discAddress}\n`;
      text += `  Email:    ${discEmail}\n\n`;
      text += `SECOND PARTY:\n`;
      text += `  Name:     ${recName}\n`;
      text += `  ABN:      ${recABN}\n`;
      text += `  Address:  ${recAddress}\n`;
      text += `  Email:    ${recEmail}\n\n`;
      text += `The First Party and Second Party are each referred to as a\n"Party" and collectively as the "Parties." Under this mutual\nagreement, each Party may act as both a Disclosing Party and\na Receiving Party.\n\n`;
    } else {
      text += `DISCLOSING PARTY:\n`;
      text += `  Name:     ${ndaType === 'one-way-disclosing' ? discName : recName}\n`;
      text += `  ABN:      ${ndaType === 'one-way-disclosing' ? discABN : recABN}\n`;
      text += `  Address:  ${ndaType === 'one-way-disclosing' ? discAddress : recAddress}\n`;
      text += `  Email:    ${ndaType === 'one-way-disclosing' ? discEmail : recEmail}\n\n`;
      text += `RECEIVING PARTY:\n`;
      text += `  Name:     ${ndaType === 'one-way-disclosing' ? recName : discName}\n`;
      text += `  ABN:      ${ndaType === 'one-way-disclosing' ? recABN : discABN}\n`;
      text += `  Address:  ${ndaType === 'one-way-disclosing' ? recAddress : discAddress}\n`;
      text += `  Email:    ${ndaType === 'one-way-disclosing' ? recEmail : discEmail}\n\n`;
    }

    // Recitals
    const recNum = section();
    text += `${recNum}. RECITALS\n`;
    text += `${'─'.repeat(45)}\n\n`;
    text += `WHEREAS:\n\n`;
    if (isMutual) {
      text += `(a) The Parties wish to explore and/or engage in a business\n    relationship relating to: ${purposeText}\n\n`;
      text += `(b) In the course of this relationship, each Party may\n    disclose to the other Party certain confidential and\n    proprietary information.\n\n`;
      text += `(c) The Parties wish to protect such confidential\n    information from unauthorised disclosure and use.\n\n`;
    } else {
      text += `(a) The Disclosing Party wishes to disclose certain\n    confidential and proprietary information to the Receiving\n    Party for the purpose of: ${purposeText}\n\n`;
      text += `(b) The Receiving Party wishes to receive such information\n    and agrees to protect it from unauthorised disclosure and\n    use.\n\n`;
    }
    text += `NOW, THEREFORE, in consideration of the mutual promises and\ncovenants contained herein, the Parties agree as follows:\n\n`;

    // Definitions
    const defNum = section();
    text += `${defNum}. DEFINITIONS\n`;
    text += `${'─'.repeat(45)}\n\n`;
    text += `${defNum}.1 "Confidential Information" means any and all\n    information disclosed by ${isMutual ? 'either Party (the "Disclosing Party")' : 'the Disclosing Party'}\n    to ${isMutual ? 'the other Party (the "Receiving Party")' : 'the Receiving Party'}, whether orally,\n    in writing, electronically, or by any other means, that\n    is designated as confidential or that reasonably should\n    be understood to be confidential given the nature of the\n    information and the circumstances of disclosure.\n\n`;
    text += `${defNum}.2 Without limiting the generality of the above,\n    Confidential Information includes:\n\n`;
    if (selectedConfInfo.length > 0) {
      selectedConfInfo.forEach((info, i) => {
        text += `    (${String.fromCharCode(97 + i)}) ${info};\n`;
      });
      text += `\n`;
    }
    text += `${defNum}.3 "Permitted Purpose" means: ${purposeText}\n\n`;
    text += `${defNum}.4 "Representative" means, in relation to a Party, that\n    Party's employees, officers, directors, agents,\n    contractors, advisors (including legal, financial, and\n    accounting advisors), and any other person who needs to\n    know the Confidential Information for the Permitted\n    Purpose.\n\n`;

    // Obligations
    const oblNum = section();
    text += `${oblNum}. OBLIGATIONS OF ${isMutual ? 'THE RECEIVING PARTY' : 'THE RECEIVING PARTY'}\n`;
    text += `${'─'.repeat(45)}\n\n`;
    text += `${oblNum}.1 The Receiving Party shall:\n\n`;
    text += `    (a) keep the Confidential Information strictly\n        confidential and not disclose it to any third party\n        without the prior written consent of the Disclosing\n        Party;\n\n`;
    text += `    (b) use the Confidential Information solely for the\n        Permitted Purpose and not for any other purpose;\n\n`;
    text += `    (c) take all reasonable measures to protect the secrecy\n        of the Confidential Information, using at least the\n        same degree of care as it uses to protect its own\n        confidential information of a similar nature, but in\n        no event less than reasonable care;\n\n`;
    text += `    (d) limit access to the Confidential Information to\n        those Representatives who have a genuine need to know\n        for the Permitted Purpose and who are bound by\n        confidentiality obligations no less restrictive than\n        those contained in this Agreement;\n\n`;
    text += `    (e) promptly notify the Disclosing Party in writing of\n        any unauthorised use, disclosure, or loss of\n        Confidential Information of which it becomes aware;\n        and\n\n`;
    text += `    (f) not copy or reproduce the Confidential Information\n        except as reasonably necessary for the Permitted\n        Purpose.\n\n`;
    text += `${oblNum}.2 The Receiving Party shall be responsible for any\n    breach of this Agreement by its Representatives.\n\n`;

    // Exclusions
    if (selectedExclusions.length > 0) {
      const exclNum = section();
      text += `${exclNum}. EXCLUSIONS FROM CONFIDENTIAL INFORMATION\n`;
      text += `${'─'.repeat(45)}\n\n`;
      text += `${exclNum}.1 The obligations in this Agreement do not apply to\n    information that:\n\n`;
      selectedExclusions.forEach((excl, i) => {
        text += `    (${String.fromCharCode(97 + i)}) ${excl};\n\n`;
      });
    }

    // Duration and Termination
    const durNum = section();
    text += `${durNum}. DURATION AND TERMINATION\n`;
    text += `${'─'.repeat(45)}\n\n`;
    text += `${durNum}.1 This Agreement shall commence on the date first\n    written above and shall continue in force ${durationText}${duration === 'indefinite' ? '' : ', unless terminated earlier in accordance with this clause'}.\n\n`;
    if (duration !== 'indefinite') {
      text += `${durNum}.2 Either Party may terminate this Agreement at any\n    time by providing thirty (30) days' written notice to the\n    other Party.\n\n`;
      text += `${durNum}.3 The confidentiality obligations set out in this\n    Agreement shall survive the termination or expiry of this\n    Agreement and continue ${confidentialityDuration}.\n\n`;
    } else {
      text += `${durNum}.2 Either Party may terminate this Agreement at any\n    time by providing thirty (30) days' written notice to the\n    other Party.\n\n`;
      text += `${durNum}.3 The confidentiality obligations set out in this\n    Agreement shall survive the termination of this Agreement\n    and continue indefinitely.\n\n`;
    }

    // Return/Destruction of Information
    const retNum = section();
    text += `${retNum}. RETURN AND DESTRUCTION OF INFORMATION\n`;
    text += `${'─'.repeat(45)}\n\n`;
    text += `${retNum}.1 Upon termination or expiry of this Agreement, or\n    upon written request by the Disclosing Party, the\n    Receiving Party shall promptly:\n\n`;
    text += `    (a) return to the Disclosing Party all documents,\n        materials, and other tangible items containing or\n        relating to the Confidential Information; or\n\n`;
    text += `    (b) destroy all such documents, materials, and items\n        (including all copies, extracts, and summaries) and\n        provide written certification of such destruction.\n\n`;
    text += `${retNum}.2 Notwithstanding the above, the Receiving Party may\n    retain copies of Confidential Information to the extent\n    required by applicable law or regulation, or as part of\n    routine electronic backup systems, provided that such\n    retained information remains subject to the\n    confidentiality obligations of this Agreement.\n\n`;

    // Remedies for Breach
    const remNum = section();
    text += `${remNum}. REMEDIES FOR BREACH\n`;
    text += `${'─'.repeat(45)}\n\n`;
    text += `${remNum}.1 The Parties acknowledge that a breach of this\n    Agreement may cause irreparable harm to the Disclosing\n    Party for which monetary damages alone may be an\n    inadequate remedy.\n\n`;
    text += `${remNum}.2 In the event of a breach or threatened breach of\n    this Agreement, the Disclosing Party shall be entitled\n    to seek:\n\n`;
    text += `    (a) injunctive or other equitable relief from a court\n        of competent jurisdiction, without the need to prove\n        actual damages or post a bond; and\n\n`;
    text += `    (b) any other remedies available at law or in equity,\n        including damages.\n\n`;
    text += `${remNum}.3 The rights and remedies provided in this Agreement\n    are cumulative and not exclusive of any other rights or\n    remedies available at law or in equity.\n\n`;

    // Additional Clauses
    if (additionalClauses.nonSolicitation) {
      const nsNum = section();
      text += `${nsNum}. NON-SOLICITATION\n`;
      text += `${'─'.repeat(45)}\n\n`;
      text += `${nsNum}.1 During the term of this Agreement and for a period\n    of twelve (12) months following its termination or\n    expiry, neither Party shall directly or indirectly\n    solicit, recruit, or hire any employee, contractor, or\n    agent of the other Party who was involved in the\n    exchange of Confidential Information under this\n    Agreement.\n\n`;
      text += `${nsNum}.2 This clause does not apply to general public\n    advertising for employment or contracting opportunities,\n    nor to any person who approaches a Party on their own\n    initiative without solicitation.\n\n`;
    }

    if (additionalClauses.nonCompete) {
      const ncNum = section();
      text += `${ncNum}. NON-COMPETE\n`;
      text += `${'─'.repeat(45)}\n\n`;
      text += `${ncNum}.1 During the term of this Agreement and for a period\n    of six (6) months following its termination or expiry,\n    the Receiving Party shall not, without the prior written\n    consent of the Disclosing Party, directly or indirectly\n    engage in any business activity that competes with the\n    Disclosing Party's business as it relates to the\n    Permitted Purpose.\n\n`;
      text += `${ncNum}.2 This restriction is limited to the geographic area\n    in which the Disclosing Party conducts its business and\n    is intended to protect the legitimate business interests\n    of the Disclosing Party.\n\n`;
      text += `${ncNum}.3 If any court determines that this non-compete\n    clause is unenforceable due to its scope, duration, or\n    geographic extent, the court may modify the clause to\n    the minimum extent necessary to make it enforceable.\n\n`;
    }

    if (additionalClauses.returnOfMaterials) {
      const romNum = section();
      text += `${romNum}. RETURN OF MATERIALS\n`;
      text += `${'─'.repeat(45)}\n\n`;
      text += `${romNum}.1 Upon the earlier of:\n\n`;
      text += `    (a) the termination or expiry of this Agreement;\n`;
      text += `    (b) the completion of the Permitted Purpose; or\n`;
      text += `    (c) written request by the Disclosing Party,\n\n`;
      text += `    the Receiving Party shall, within fourteen (14) days,\n    return or destroy (at the Disclosing Party's election)\n    all materials, documents, samples, prototypes, software,\n    data, and any other tangible or electronic items\n    containing Confidential Information, together with all\n    copies, notes, analyses, summaries, or extracts derived\n    therefrom.\n\n`;
      text += `${romNum}.2 The Receiving Party shall provide a written\n    certificate signed by an authorised officer confirming\n    that all such materials have been returned or destroyed\n    in accordance with this clause.\n\n`;
    }

    if (additionalClauses.injunctiveRelief) {
      const irNum = section();
      text += `${irNum}. INJUNCTIVE RELIEF\n`;
      text += `${'─'.repeat(45)}\n\n`;
      text += `${irNum}.1 The Parties agree that any breach or threatened\n    breach of this Agreement may cause the Disclosing Party\n    irreparable harm that cannot be adequately compensated\n    by monetary damages alone.\n\n`;
      text += `${irNum}.2 Accordingly, the Disclosing Party shall be\n    entitled to seek urgent injunctive relief, specific\n    performance, or other equitable remedies from any court\n    of competent jurisdiction, without the necessity of\n    proving actual damages, posting a bond, or providing\n    other security.\n\n`;
      text += `${irNum}.3 The right to seek injunctive relief is in\n    addition to, and not in substitution for, any other\n    rights or remedies that the Disclosing Party may have\n    at law or in equity.\n\n`;
    }

    // General Provisions
    const genNum = section();
    text += `${genNum}. GENERAL PROVISIONS\n`;
    text += `${'─'.repeat(45)}\n\n`;
    text += `${genNum}.1 Entire Agreement: This Agreement constitutes the\n    entire agreement between the Parties with respect to its\n    subject matter and supersedes all prior negotiations,\n    representations, warranties, understandings, and\n    agreements, whether written or oral.\n\n`;
    text += `${genNum}.2 Amendments: No amendment or variation of this\n    Agreement shall be effective unless made in writing and\n    signed by both Parties.\n\n`;
    text += `${genNum}.3 Severability: If any provision of this Agreement\n    is found to be invalid, illegal, or unenforceable, the\n    remaining provisions shall continue in full force and\n    effect. The invalid provision shall be modified to the\n    minimum extent necessary to make it valid and\n    enforceable while preserving the Parties' original\n    intent.\n\n`;
    text += `${genNum}.4 Waiver: A failure or delay by either Party to\n    exercise any right or remedy under this Agreement shall\n    not constitute a waiver of that right or remedy. A\n    waiver of any breach shall not constitute a waiver of\n    any subsequent breach.\n\n`;
    text += `${genNum}.5 Assignment: Neither Party may assign or transfer\n    its rights or obligations under this Agreement without\n    the prior written consent of the other Party, except in\n    connection with a merger, acquisition, or sale of\n    substantially all of its assets.\n\n`;
    text += `${genNum}.6 Notices: All notices under this Agreement must be\n    in writing and sent to the email addresses specified\n    above, or to such other address as a Party may notify\n    in writing. Notices are deemed received when actually\n    received by the recipient.\n\n`;
    text += `${genNum}.7 No Partnership or Agency: Nothing in this Agreement\n    creates a partnership, joint venture, agency, or\n    employment relationship between the Parties.\n\n`;
    text += `${genNum}.8 Counterparts: This Agreement may be executed in\n    counterparts, each of which shall constitute an\n    original, and all of which together shall constitute\n    one and the same agreement. Electronic signatures are\n    valid under the Electronic Transactions Act (Cth).\n\n`;

    // Governing Law
    const govNum = section();
    text += `${govNum}. GOVERNING LAW\n`;
    text += `${'─'.repeat(45)}\n\n`;
    text += `${govNum}.1 This Agreement is governed by and construed in\n    accordance with the laws of ${stateFullName},\n    Australia.\n\n`;
    text += `${govNum}.2 The Parties submit to the exclusive jurisdiction\n    of the courts of ${stateFullName} and any courts\n    that may hear appeals from those courts.\n\n`;
    text += `${govNum}.3 Before commencing legal proceedings, the Parties\n    agree to attempt to resolve any dispute arising out of\n    or in connection with this Agreement through good-faith\n    negotiation for a period of at least fourteen (14)\n    days.\n\n`;

    // Signature Blocks
    text += `${'='.repeat(60)}\n`;
    text += `ACCEPTANCE & SIGNATURES\n`;
    text += `${'='.repeat(60)}\n\n`;
    text += `By signing below, the Parties acknowledge that they have\nread, understood, and agree to be bound by the terms and\nconditions of this Non-Disclosure Agreement.\n\n\n`;

    if (isMutual) {
      text += `FIRST PARTY:\n\n`;
      text += `Signed: ________________________________\n\n`;
      text += `Name:   ${discName}\n`;
      text += `ABN:    ${discABN}\n`;
      text += `Date:   ________________________________\n\n\n`;
      text += `SECOND PARTY:\n\n`;
      text += `Signed: ________________________________\n\n`;
      text += `Name:   ${recName}\n`;
      text += `ABN:    ${recABN}\n`;
      text += `Date:   ________________________________\n\n\n`;
    } else {
      text += `DISCLOSING PARTY:\n\n`;
      text += `Signed: ________________________________\n\n`;
      text += `Name:   ${ndaType === 'one-way-disclosing' ? discName : recName}\n`;
      text += `ABN:    ${ndaType === 'one-way-disclosing' ? discABN : recABN}\n`;
      text += `Date:   ________________________________\n\n\n`;
      text += `RECEIVING PARTY:\n\n`;
      text += `Signed: ________________________________\n\n`;
      text += `Name:   ${ndaType === 'one-way-disclosing' ? recName : discName}\n`;
      text += `ABN:    ${ndaType === 'one-way-disclosing' ? recABN : discABN}\n`;
      text += `Date:   ________________________________\n\n\n`;
    }

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
    ndaType,
    disclosingName,
    disclosingABN,
    disclosingAddress,
    disclosingEmail,
    receivingName,
    receivingABN,
    receivingAddress,
    receivingEmail,
    purpose,
    confidentialInfo,
    otherConfidentialInfo,
    exclusions,
    duration,
    governingState,
    additionalClauses,
  ]);

  const handleGenerate = () => setGenerated(true);

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const inputClass =
    'w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-slate-600 focus:outline-none focus:border-slate-400/50 focus:ring-1 focus:ring-slate-400/25 transition-all text-sm';
  const labelClass = 'block text-sm font-medium text-slate-300 mb-1.5';
  const selectClass =
    'w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-slate-400/50 focus:ring-1 focus:ring-slate-400/25 transition-all text-sm appearance-none';

  return (
    <div className="space-y-8">
      {/* NDA Type */}
      <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
        <h3 className="text-lg font-bold text-white heading-font mb-6">NDA Type</h3>
        <div className="grid sm:grid-cols-3 gap-3">
          {NDA_TYPES.map((option) => (
            <button
              key={option.value}
              onClick={() => setNdaType(option.value)}
              className={`px-4 py-4 rounded-xl text-left transition-all ${
                ndaType === option.value
                  ? 'bg-gradient-to-r from-slate-400/20 to-zinc-500/20 border border-slate-400/40'
                  : 'bg-white/5 border border-white/10 hover:bg-white/10'
              }`}
            >
              <p className={`text-sm font-semibold mb-1 ${
                ndaType === option.value ? 'text-slate-300' : 'text-slate-400'
              }`}>
                {option.label}
              </p>
              <p className="text-xs text-slate-500">{option.description}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Disclosing Party Details */}
      <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
        <h3 className="text-lg font-bold text-white heading-font mb-6">{partyLabels.first} Details</h3>
        <div className="grid sm:grid-cols-2 gap-5">
          <div className="sm:col-span-2">
            <label className={labelClass}>Name / Business Name</label>
            <input
              type="text"
              value={disclosingName}
              onChange={(e) => setDisclosingName(e.target.value)}
              className={inputClass}
              placeholder="e.g. Sarah Mitchell Consulting"
            />
          </div>
          <div>
            <label className={labelClass}>ABN</label>
            <input
              type="text"
              value={disclosingABN}
              onChange={(e) => setDisclosingABN(e.target.value)}
              className={inputClass}
              placeholder="e.g. 12 345 678 901"
            />
          </div>
          <div>
            <label className={labelClass}>Email</label>
            <input
              type="email"
              value={disclosingEmail}
              onChange={(e) => setDisclosingEmail(e.target.value)}
              className={inputClass}
              placeholder="e.g. sarah@mitchellconsulting.com.au"
            />
          </div>
          <div className="sm:col-span-2">
            <label className={labelClass}>Address</label>
            <input
              type="text"
              value={disclosingAddress}
              onChange={(e) => setDisclosingAddress(e.target.value)}
              className={inputClass}
              placeholder="e.g. 123 Collins Street, Melbourne VIC 3000"
            />
          </div>
        </div>
      </div>

      {/* Receiving Party Details */}
      <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
        <h3 className="text-lg font-bold text-white heading-font mb-6">{partyLabels.second} Details</h3>
        <div className="grid sm:grid-cols-2 gap-5">
          <div className="sm:col-span-2">
            <label className={labelClass}>Name / Business Name</label>
            <input
              type="text"
              value={receivingName}
              onChange={(e) => setReceivingName(e.target.value)}
              className={inputClass}
              placeholder="e.g. Acme Solutions Pty Ltd"
            />
          </div>
          <div>
            <label className={labelClass}>ABN</label>
            <input
              type="text"
              value={receivingABN}
              onChange={(e) => setReceivingABN(e.target.value)}
              className={inputClass}
              placeholder="e.g. 98 765 432 109"
            />
          </div>
          <div>
            <label className={labelClass}>Email</label>
            <input
              type="email"
              value={receivingEmail}
              onChange={(e) => setReceivingEmail(e.target.value)}
              className={inputClass}
              placeholder="e.g. legal@acmesolutions.com.au"
            />
          </div>
          <div className="sm:col-span-2">
            <label className={labelClass}>Address</label>
            <input
              type="text"
              value={receivingAddress}
              onChange={(e) => setReceivingAddress(e.target.value)}
              className={inputClass}
              placeholder="e.g. 456 George Street, Sydney NSW 2000"
            />
          </div>
        </div>
      </div>

      {/* Purpose of Disclosure */}
      <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
        <h3 className="text-lg font-bold text-white heading-font mb-6">Purpose of Disclosure</h3>
        <div>
          <label className={labelClass}>What will the confidential information be used for?</label>
          <textarea
            value={purpose}
            onChange={(e) => setPurpose(e.target.value)}
            className={`${inputClass} min-h-[100px] resize-y`}
            placeholder="e.g. Evaluating a potential business collaboration between the parties to develop a joint software product for the Australian retail market. This includes sharing technical specifications, business models, customer research, and financial projections."
          />
        </div>
      </div>

      {/* Definition of Confidential Information */}
      <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
        <h3 className="text-lg font-bold text-white heading-font mb-6">Confidential Information</h3>
        <p className="text-sm text-slate-400 mb-4">
          Select the types of information that should be protected under this NDA.
        </p>
        <div className="space-y-2">
          {CONFIDENTIAL_INFO_LABELS.map((item) => (
            <label
              key={item.key}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className="relative">
                <input
                  type="checkbox"
                  checked={confidentialInfo[item.key]}
                  onChange={() => toggleConfidentialInfo(item.key)}
                  className="sr-only peer"
                />
                <div className="w-5 h-5 rounded-md bg-white/5 border border-white/10 peer-checked:bg-slate-400/30 peer-checked:border-slate-400/50 transition-all flex items-center justify-center">
                  <svg
                    className={`w-3 h-3 text-slate-300 transition-opacity ${
                      confidentialInfo[item.key] ? 'opacity-100' : 'opacity-0'
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
                {item.label}
              </span>
            </label>
          ))}
        </div>

        {/* Other text input */}
        {confidentialInfo.other && (
          <div className="mt-4">
            <label className={labelClass}>Specify other confidential information</label>
            <input
              type="text"
              value={otherConfidentialInfo}
              onChange={(e) => setOtherConfidentialInfo(e.target.value)}
              className={inputClass}
              placeholder="e.g. Product prototypes and unreleased product specifications"
            />
          </div>
        )}
      </div>

      {/* Exclusions */}
      <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
        <h3 className="text-lg font-bold text-white heading-font mb-6">Exclusions</h3>
        <p className="text-sm text-slate-400 mb-4">
          Select which standard exclusions to include. These define what is NOT considered confidential information.
        </p>
        <div className="space-y-3">
          {EXCLUSION_LABELS.map((item) => (
            <label
              key={item.key}
              className="flex items-start gap-3 cursor-pointer group"
            >
              <div className="relative mt-0.5">
                <input
                  type="checkbox"
                  checked={exclusions[item.key]}
                  onChange={() => toggleExclusion(item.key)}
                  className="sr-only peer"
                />
                <div className="w-5 h-5 rounded-md bg-white/5 border border-white/10 peer-checked:bg-slate-400/30 peer-checked:border-slate-400/50 transition-all flex items-center justify-center">
                  <svg
                    className={`w-3 h-3 text-slate-300 transition-opacity ${
                      exclusions[item.key] ? 'opacity-100' : 'opacity-0'
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
                {item.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Duration & Governing State */}
      <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
        <h3 className="text-lg font-bold text-white heading-font mb-6">Duration & Jurisdiction</h3>
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className={labelClass}>Confidentiality Duration</label>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
              {DURATION_OPTIONS.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setDuration(option.value)}
                  className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    duration === option.value
                      ? 'bg-gradient-to-r from-slate-400/30 to-zinc-500/30 border border-slate-400/40 text-slate-300'
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

      {/* Additional Clauses */}
      <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
        <h3 className="text-lg font-bold text-white heading-font mb-6">Additional Clauses</h3>
        <div className="space-y-3">
          {ADDITIONAL_CLAUSE_LABELS.map((clause) => (
            <label
              key={clause.key}
              className="flex items-start gap-3 cursor-pointer group"
            >
              <div className="relative mt-0.5">
                <input
                  type="checkbox"
                  checked={additionalClauses[clause.key]}
                  onChange={() => toggleAdditionalClause(clause.key)}
                  className="sr-only peer"
                />
                <div className="w-5 h-5 rounded-md bg-white/5 border border-white/10 peer-checked:bg-slate-400/30 peer-checked:border-slate-400/50 transition-all flex items-center justify-center">
                  <svg
                    className={`w-3 h-3 text-slate-300 transition-opacity ${
                      additionalClauses[clause.key] ? 'opacity-100' : 'opacity-0'
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
              <div>
                <span className="text-sm text-slate-300 group-hover:text-white transition-colors font-medium">
                  {clause.label}
                </span>
                <p className="text-xs text-slate-500 mt-0.5">{clause.description}</p>
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Generate Button */}
      <div className="flex justify-center">
        <button
          onClick={handleGenerate}
          className="bg-gradient-to-r from-slate-400 to-zinc-500 text-white font-semibold rounded-xl px-8 py-4 hover:from-slate-300 hover:to-zinc-400 transition-all text-lg"
        >
          Generate NDA
        </button>
      </div>

      {/* Generated Output */}
      {generated && (
        <>
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-white heading-font">NDA Preview</h3>
              <span className="text-xs px-3 py-1 rounded-full bg-slate-400/10 text-slate-400 font-medium">
                {NDA_TYPES.find((t) => t.value === ndaType)?.label || 'NDA'}
              </span>
            </div>

            <div className="bg-slate-900/50 border border-white/10 rounded-xl p-6 font-mono text-sm whitespace-pre-wrap text-slate-300 leading-relaxed max-h-[600px] overflow-y-auto">
              {generatedText}
            </div>

            <div className="flex justify-center mt-6">
              <button
                onClick={handleCopy}
                className="bg-gradient-to-r from-slate-400 to-zinc-500 text-white font-semibold rounded-xl px-8 py-4 hover:from-slate-300 hover:to-zinc-400 transition-all"
              >
                {copied ? 'Copied to Clipboard!' : 'Copy to Clipboard'}
              </button>
            </div>
          </div>

          {/* Tips */}
          <div className="bg-slate-400/5 border border-slate-400/20 rounded-2xl p-6">
            <h4 className="text-slate-300 font-semibold mb-2">Before You Send</h4>
            <ul className="text-sm text-slate-400 space-y-2">
              <li>Review every clause carefully and customise the language to match your specific engagement and the sensitivity of the information being shared.</li>
              <li>This is a template, not legal advice. For high-value partnerships or where trade secrets are at stake, have a solicitor review the agreement.</li>
              <li>Both parties should sign before any confidential information is exchanged. Digital signatures (DocuSign, HelloSign) are legally valid in Australia under the Electronic Transactions Act.</li>
              <li>Keep signed copies of all NDAs for at least 5 years. If your NDA has an indefinite duration, retain it for the life of the business relationship and beyond.</li>
              <li>If the scope of confidential information changes, create a written amendment rather than relying on verbal agreements.</li>
            </ul>
          </div>

          {/* Related Tools */}
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white heading-font mb-4">Related Tools</h3>
            <div className="grid sm:grid-cols-3 gap-3">
              <a
                href="/tools/contract-generator"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-slate-400/30 rounded-xl p-4 transition-all group"
              >
                <p className="text-white font-medium text-sm group-hover:text-slate-300 transition-colors">
                  Contract Generator
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Generate full service agreements with scope and payment terms
                </p>
              </a>
              <a
                href="/tools/invoice-generator"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-slate-400/30 rounded-xl p-4 transition-all group"
              >
                <p className="text-white font-medium text-sm group-hover:text-slate-300 transition-colors">
                  Invoice Generator
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Create professional invoices for your projects
                </p>
              </a>
              <a
                href="/tools/subcontractor-agreement-generator"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-slate-400/30 rounded-xl p-4 transition-all group"
              >
                <p className="text-white font-medium text-sm group-hover:text-slate-300 transition-colors">
                  Subcontractor Agreement
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Generate agreements for subcontractors you work with
                </p>
              </a>
            </div>
          </div>

          <div className="text-center">
            <p className="text-xs text-slate-500 max-w-2xl mx-auto">
              This tool generates non-disclosure agreement templates for Australian freelancers and sole traders.
              The generated NDA is a template — review and customise it before use. This does not
              constitute legal advice. For complex or high-value engagements, seek independent legal counsel.
            </p>
          </div>
        </>
      )}
    </div>
  );
}
