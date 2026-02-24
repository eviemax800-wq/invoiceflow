'use client';

import { useState, useMemo } from 'react';

function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

type PaymentTerms = '50-50' | '3-milestones' | 'net-14' | 'net-30' | 'net-7' | 'custom';
type IPOwnership = 'transfer' | 'licence' | 'shared';
type ConfidentialityDuration = '1-year' | '2-years' | '5-years' | 'indefinite';
type NoticePeriod = '7-days' | '14-days' | '30-days';
type LiabilityCap = 'project-value' | '2x-project-value' | '10k' | '50k' | 'uncapped';
type DisputeMethod = 'mediation' | 'arbitration' | 'court';
type Jurisdiction = 'VIC' | 'NSW' | 'QLD' | 'SA' | 'WA' | 'TAS' | 'ACT' | 'NT';
type ProjectType = 'website' | 'web-app' | 'mobile-app' | 'branding' | 'marketing' | 'consulting' | 'content' | 'photo-video' | 'custom';

const PROJECT_TYPE_OPTIONS: { value: ProjectType; label: string }[] = [
  { value: 'website', label: 'Website' },
  { value: 'web-app', label: 'Web App' },
  { value: 'mobile-app', label: 'Mobile App' },
  { value: 'branding', label: 'Branding & Design' },
  { value: 'marketing', label: 'Marketing' },
  { value: 'consulting', label: 'Consulting' },
  { value: 'content', label: 'Content Creation' },
  { value: 'photo-video', label: 'Photography/Video' },
  { value: 'custom', label: 'Custom' },
];

const PAYMENT_TERMS_OPTIONS: { value: PaymentTerms; label: string }[] = [
  { value: '50-50', label: '50% Upfront / 50% on Completion' },
  { value: '3-milestones', label: '3 Milestones (33/33/34%)' },
  { value: 'net-14', label: 'Net 14 Days' },
  { value: 'net-30', label: 'Net 30 Days' },
  { value: 'net-7', label: 'Net 7 Days' },
  { value: 'custom', label: 'Custom Terms' },
];

const IP_OPTIONS: { value: IPOwnership; label: string; desc: string }[] = [
  { value: 'transfer', label: 'Transfer to Client', desc: 'Full ownership transfers on final payment' },
  { value: 'licence', label: 'Licence Only', desc: 'You retain ownership, client gets usage licence' },
  { value: 'shared', label: 'Shared Ownership', desc: 'Both parties retain rights to the work' },
];

const CONFIDENTIALITY_OPTIONS: { value: ConfidentialityDuration; label: string }[] = [
  { value: '1-year', label: '1 Year' },
  { value: '2-years', label: '2 Years' },
  { value: '5-years', label: '5 Years' },
  { value: 'indefinite', label: 'Indefinite' },
];

const NOTICE_PERIOD_OPTIONS: { value: NoticePeriod; label: string }[] = [
  { value: '7-days', label: '7 Days' },
  { value: '14-days', label: '14 Days' },
  { value: '30-days', label: '30 Days' },
];

const LIABILITY_CAP_OPTIONS: { value: LiabilityCap; label: string }[] = [
  { value: 'project-value', label: 'Project Value' },
  { value: '2x-project-value', label: '2x Project Value' },
  { value: '10k', label: '$10,000' },
  { value: '50k', label: '$50,000' },
  { value: 'uncapped', label: 'Uncapped' },
];

const DISPUTE_OPTIONS: { value: DisputeMethod; label: string }[] = [
  { value: 'mediation', label: 'Mediation First' },
  { value: 'arbitration', label: 'Arbitration' },
  { value: 'court', label: 'Court Proceedings' },
];

const JURISDICTION_OPTIONS: { value: Jurisdiction; label: string }[] = [
  { value: 'VIC', label: 'Victoria' },
  { value: 'NSW', label: 'New South Wales' },
  { value: 'QLD', label: 'Queensland' },
  { value: 'SA', label: 'South Australia' },
  { value: 'WA', label: 'Western Australia' },
  { value: 'TAS', label: 'Tasmania' },
  { value: 'ACT', label: 'Australian Capital Territory' },
  { value: 'NT', label: 'Northern Territory' },
];

interface ClauseConfig {
  scopeOfWork: boolean;
  paymentTerms: boolean;
  intellectualProperty: boolean;
  confidentiality: boolean;
  termination: boolean;
  liability: boolean;
  revisions: boolean;
  disputeResolution: boolean;
  forceMajeure: boolean;
  independentContractor: boolean;
}

export default function ContractClauseGenerator() {
  // Business details
  const [businessName, setBusinessName] = useState('');
  const [abn, setAbn] = useState('');
  const [clientName, setClientName] = useState('');
  const [projectType, setProjectType] = useState<ProjectType>('website');
  const [projectValue, setProjectValue] = useState('5000');

  // Clause toggles
  const [clauses, setClauses] = useState<ClauseConfig>({
    scopeOfWork: true,
    paymentTerms: true,
    intellectualProperty: true,
    confidentiality: true,
    termination: true,
    liability: true,
    revisions: true,
    disputeResolution: true,
    forceMajeure: true,
    independentContractor: true,
  });

  // Clause details
  const [scopeDescription, setScopeDescription] = useState('');
  const [paymentTerms, setPaymentTerms] = useState<PaymentTerms>('50-50');
  const [customPaymentTerms, setCustomPaymentTerms] = useState('');
  const [lateInterestRate, setLateInterestRate] = useState('10');
  const [ipOwnership, setIpOwnership] = useState<IPOwnership>('transfer');
  const [confidentialityDuration, setConfidentialityDuration] = useState<ConfidentialityDuration>('2-years');
  const [noticePeriod, setNoticePeriod] = useState<NoticePeriod>('14-days');
  const [killFeePercent, setKillFeePercent] = useState('25');
  const [liabilityCap, setLiabilityCap] = useState<LiabilityCap>('project-value');
  const [includedRevisions, setIncludedRevisions] = useState('2');
  const [additionalRevisionRate, setAdditionalRevisionRate] = useState('150');
  const [disputeMethod, setDisputeMethod] = useState<DisputeMethod>('mediation');
  const [jurisdiction, setJurisdiction] = useState<Jurisdiction>('VIC');

  // Copy state
  const [copiedFull, setCopiedFull] = useState(false);
  const [copiedClause, setCopiedClause] = useState<string | null>(null);

  const toggleClause = (key: keyof ClauseConfig) => {
    setClauses((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const projectTypeLabel = PROJECT_TYPE_OPTIONS.find((o) => o.value === projectType)?.label || 'Custom';
  const jurisdictionLabel = JURISDICTION_OPTIONS.find((o) => o.value === jurisdiction)?.label || 'Victoria';
  const noticeLabel = NOTICE_PERIOD_OPTIONS.find((o) => o.value === noticePeriod)?.label || '14 Days';
  const confidentialityLabel = CONFIDENTIALITY_OPTIONS.find((o) => o.value === confidentialityDuration)?.label || '2 Years';

  const getLiabilityCapText = () => {
    const val = parseFloat(projectValue) || 0;
    switch (liabilityCap) {
      case 'project-value': return formatCurrency(val);
      case '2x-project-value': return formatCurrency(val * 2);
      case '10k': return formatCurrency(10000);
      case '50k': return formatCurrency(50000);
      case 'uncapped': return 'uncapped';
    }
  };

  const getPaymentTermsText = () => {
    const val = parseFloat(projectValue) || 0;
    switch (paymentTerms) {
      case '50-50':
        return `Payment shall be made in two instalments: ${formatCurrency(val * 0.5)} (50%) due upon signing of this Agreement, and ${formatCurrency(val * 0.5)} (50%) due upon completion and delivery of all agreed deliverables.`;
      case '3-milestones':
        return `Payment shall be made in three milestone instalments: ${formatCurrency(val * 0.33)} (33%) due upon signing of this Agreement, ${formatCurrency(val * 0.33)} (33%) due upon completion of the midpoint milestone, and ${formatCurrency(val * 0.34)} (34%) due upon final delivery of all agreed deliverables.`;
      case 'net-7':
        return `The total project fee of ${formatCurrency(val)} shall be invoiced upon completion of the project. Payment is due within 7 days of the invoice date.`;
      case 'net-14':
        return `The total project fee of ${formatCurrency(val)} shall be invoiced upon completion of the project. Payment is due within 14 days of the invoice date.`;
      case 'net-30':
        return `The total project fee of ${formatCurrency(val)} shall be invoiced upon completion of the project. Payment is due within 30 days of the invoice date.`;
      case 'custom':
        return customPaymentTerms || 'Payment terms to be agreed between the parties.';
    }
  };

  // Generate individual clause texts
  const clauseTexts = useMemo(() => {
    const contractor = businessName || '[CONTRACTOR NAME]';
    const abnText = abn || '[ABN]';
    const client = clientName || '[CLIENT NAME]';
    const val = parseFloat(projectValue) || 0;
    const sections: { key: string; title: string; text: string }[] = [];
    let sectionNumber = 1;

    if (clauses.scopeOfWork) {
      const desc = scopeDescription || `[Describe the project deliverables, milestones, timeline, and any exclusions here.]`;
      sections.push({
        key: 'scopeOfWork',
        title: `${sectionNumber}. Scope of Work`,
        text: `${contractor} agrees to provide ${projectTypeLabel.toLowerCase()} services to ${client} as described below. Any work not explicitly included in this scope is excluded and will require a separate written agreement or change order.\n\nProject Description:\n${desc}\n\nAny changes to the scope of work must be agreed upon in writing by both parties before work commences on the changed items. Changes may affect the project timeline and total fee.`,
      });
      sectionNumber++;
    }

    if (clauses.paymentTerms) {
      sections.push({
        key: 'paymentTerms',
        title: `${sectionNumber}. Payment Terms`,
        text: `The total fee for this project is ${formatCurrency(val)} (AUD), exclusive of GST where applicable.\n\n${getPaymentTermsText()}\n\nAll payments shall be made via bank transfer or other method agreed upon by both parties. If any payment is not received by the due date, interest will accrue on the outstanding amount at a rate of ${lateInterestRate}% per annum, calculated daily from the due date until payment is received in full. ${contractor} reserves the right to suspend work if any payment is more than 14 days overdue.`,
      });
      sectionNumber++;
    }

    if (clauses.intellectualProperty) {
      let ipText = '';
      switch (ipOwnership) {
        case 'transfer':
          ipText = `Upon receipt of full and final payment, all intellectual property rights in the deliverables created under this Agreement shall transfer from ${contractor} to ${client}. Until full payment is received, all intellectual property rights remain with ${contractor}. ${contractor} retains the right to display the work in portfolios, case studies, and award submissions unless otherwise agreed in writing.`;
          break;
        case 'licence':
          ipText = `${contractor} retains all intellectual property rights in the deliverables created under this Agreement. Upon receipt of full and final payment, ${client} is granted a perpetual, non-exclusive, non-transferable licence to use the deliverables for the purposes outlined in the Scope of Work. ${client} may not modify, sublicence, or resell the deliverables without prior written consent from ${contractor}.`;
          break;
        case 'shared':
          ipText = `Both ${contractor} and ${client} shall retain rights to the deliverables created under this Agreement. ${client} receives full rights to use, modify, and distribute the deliverables for their business purposes. ${contractor} retains the right to use the deliverables in portfolios, case studies, derivative works, and for other commercial purposes, provided that ${client}'s confidential information is not disclosed.`;
          break;
      }
      sections.push({
        key: 'intellectualProperty',
        title: `${sectionNumber}. Intellectual Property`,
        text: ipText,
      });
      sectionNumber++;
    }

    if (clauses.confidentiality) {
      const durText = confidentialityDuration === 'indefinite'
        ? 'indefinitely'
        : `for a period of ${confidentialityLabel.toLowerCase()} from the date of this Agreement`;
      sections.push({
        key: 'confidentiality',
        title: `${sectionNumber}. Confidentiality`,
        text: `Both parties agree to keep confidential all proprietary or sensitive information disclosed during the course of this engagement. This obligation shall remain in effect ${durText}.\n\nConfidential information includes, but is not limited to: business plans, customer data, financial information, technical specifications, trade secrets, and any materials marked as confidential. This obligation does not apply to information that: (a) is or becomes publicly available through no fault of the receiving party; (b) was already known to the receiving party prior to disclosure; or (c) is required to be disclosed by law or regulatory authority.`,
      });
      sectionNumber++;
    }

    if (clauses.termination) {
      const killFee = parseFloat(killFeePercent) || 0;
      sections.push({
        key: 'termination',
        title: `${sectionNumber}. Termination`,
        text: `Either party may terminate this Agreement by providing ${noticeLabel.toLowerCase()} written notice to the other party.\n\nIf ${client} terminates this Agreement before the project is complete, ${client} shall pay for all work completed up to the date of termination, plus a termination fee of ${killFee}% of the remaining project value. If ${contractor} terminates this Agreement, ${contractor} shall deliver all completed work to ${client} and refund any fees paid for work not yet performed.\n\nUpon termination, all confidentiality and intellectual property provisions of this Agreement shall continue to apply.`,
      });
      sectionNumber++;
    }

    if (clauses.liability) {
      const capText = liabilityCap === 'uncapped'
        ? `${contractor} accepts full liability for damages arising from this Agreement without cap.`
        : `The total aggregate liability of ${contractor} under this Agreement, whether in contract, tort (including negligence), or otherwise, shall not exceed ${getLiabilityCapText()}.`;
      sections.push({
        key: 'liability',
        title: `${sectionNumber}. Limitation of Liability`,
        text: `${capText}\n\nIn no event shall ${contractor} be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, revenue, data, or business opportunities, regardless of the cause of action or the theory of liability. ${client} acknowledges that the fees charged reflect this allocation of risk.`,
      });
      sectionNumber++;
    }

    if (clauses.revisions) {
      const revCount = parseInt(includedRevisions) || 2;
      const revRate = parseFloat(additionalRevisionRate) || 0;
      sections.push({
        key: 'revisions',
        title: `${sectionNumber}. Revisions and Change Requests`,
        text: `This project includes ${revCount} round${revCount !== 1 ? 's' : ''} of revisions at no additional cost. A revision is defined as a modification to existing approved work within the original scope. Requests for new features, additional pages, or changes to previously approved deliverables are considered change requests and will be quoted separately.\n\nAdditional revisions beyond the included ${revCount} round${revCount !== 1 ? 's' : ''} will be charged at ${formatCurrency(revRate)} per hour (or as otherwise agreed). ${client} must provide consolidated revision feedback within 7 business days of receiving each deliverable; feedback received after this period may be treated as an additional revision round.`,
      });
      sectionNumber++;
    }

    if (clauses.disputeResolution) {
      let disputeText = '';
      switch (disputeMethod) {
        case 'mediation':
          disputeText = `In the event of a dispute arising out of or in connection with this Agreement, the parties agree to first attempt resolution through good-faith negotiation. If the dispute cannot be resolved within 14 days, the parties agree to submit the matter to mediation administered by an accredited mediator in ${jurisdictionLabel}, Australia, before pursuing any other form of legal action. The costs of mediation shall be shared equally between the parties.`;
          break;
        case 'arbitration':
          disputeText = `Any dispute arising out of or in connection with this Agreement shall be referred to and finally resolved by arbitration in ${jurisdictionLabel}, Australia, in accordance with the rules of the Australian Centre for International Commercial Arbitration. The arbitrator's decision shall be final and binding on both parties. The costs of arbitration shall be borne by the unsuccessful party unless the arbitrator determines otherwise.`;
          break;
        case 'court':
          disputeText = `Any dispute arising out of or in connection with this Agreement shall be subject to the exclusive jurisdiction of the courts of ${jurisdictionLabel}, Australia. Both parties irrevocably submit to the jurisdiction of those courts and agree not to challenge the exercise of that jurisdiction.`;
          break;
      }
      sections.push({
        key: 'disputeResolution',
        title: `${sectionNumber}. Dispute Resolution`,
        text: `${disputeText}\n\nThis Agreement is governed by the laws of the State of ${jurisdictionLabel}, Australia.`,
      });
      sectionNumber++;
    }

    if (clauses.forceMajeure) {
      sections.push({
        key: 'forceMajeure',
        title: `${sectionNumber}. Force Majeure`,
        text: `Neither party shall be liable for any failure or delay in performing their obligations under this Agreement if such failure or delay results from circumstances beyond the reasonable control of that party, including but not limited to: natural disasters, pandemics, government actions, war, terrorism, power outages, internet disruptions, or industrial disputes.\n\nThe affected party must promptly notify the other party of the force majeure event and take reasonable steps to mitigate its impact. If a force majeure event continues for more than 30 consecutive days, either party may terminate this Agreement with written notice.`,
      });
      sectionNumber++;
    }

    if (clauses.independentContractor) {
      sections.push({
        key: 'independentContractor',
        title: `${sectionNumber}. Independent Contractor Status`,
        text: `${contractor} (ABN: ${abnText}) is engaged as an independent contractor, not an employee of ${client}. Nothing in this Agreement creates an employment relationship, partnership, joint venture, or agency relationship between the parties.\n\n${contractor} is responsible for their own taxation obligations, including GST, income tax, and superannuation. ${contractor} maintains their own tools, equipment, and workspace. ${contractor} is free to engage other clients and subcontractors, provided such engagements do not conflict with the obligations under this Agreement. This clause is included for compliance with Australian Taxation Office (ATO) guidelines on contractor vs employee determinations.`,
      });
      sectionNumber++;
    }

    return sections;
  }, [
    clauses, businessName, abn, clientName, projectType, projectValue,
    scopeDescription, paymentTerms, customPaymentTerms, lateInterestRate,
    ipOwnership, confidentialityDuration, noticePeriod, killFeePercent,
    liabilityCap, includedRevisions, additionalRevisionRate, disputeMethod,
    jurisdiction, projectTypeLabel, jurisdictionLabel, noticeLabel,
    confidentialityLabel,
  ]);

  // Full contract text
  const fullContractText = useMemo(() => {
    const contractor = businessName || '[CONTRACTOR NAME]';
    const abnText = abn || '[ABN]';
    const client = clientName || '[CLIENT NAME]';

    let contract = `INDEPENDENT CONTRACTOR AGREEMENT\n`;
    contract += `${'='.repeat(50)}\n\n`;
    contract += `Date: [DATE]\n\n`;
    contract += `Between:\n`;
    contract += `  Contractor: ${contractor}\n`;
    contract += `  ABN: ${abnText}\n\n`;
    contract += `  Client: ${client}\n\n`;
    contract += `Project Type: ${projectTypeLabel}\n`;
    contract += `Project Value: ${formatCurrency(parseFloat(projectValue) || 0)} AUD\n\n`;
    contract += `${'—'.repeat(50)}\n\n`;

    for (const section of clauseTexts) {
      contract += `${section.title}\n\n`;
      contract += `${section.text}\n\n`;
    }

    contract += `${'—'.repeat(50)}\n\n`;
    contract += `SIGNATURES\n\n`;
    contract += `Contractor: ${contractor}\n`;
    contract += `Signature: [SIGNATURE]\n`;
    contract += `Date: [DATE]\n\n`;
    contract += `Client: ${client}\n`;
    contract += `Signature: [SIGNATURE]\n`;
    contract += `Date: [DATE]\n\n`;
    contract += `${'—'.repeat(50)}\n`;
    contract += `DISCLAIMER: This document is a template generated by InvoiceFlow and does not constitute legal advice. We strongly recommend having any contract reviewed by a qualified legal professional before use. InvoiceFlow accepts no liability for the use of this template.\n`;
    contract += `\nGenerated at invoiceflow.au/tools/contract-clause-generator`;

    return contract;
  }, [clauseTexts, businessName, abn, clientName, projectTypeLabel, projectValue]);

  const handleCopyFull = () => {
    navigator.clipboard.writeText(fullContractText).then(() => {
      setCopiedFull(true);
      setTimeout(() => setCopiedFull(false), 2000);
    });
  };

  const handleCopyClause = (key: string, text: string, title: string) => {
    const clauseText = `${title}\n\n${text}\n\nGenerated at invoiceflow.au/tools/contract-clause-generator`;
    navigator.clipboard.writeText(clauseText).then(() => {
      setCopiedClause(key);
      setTimeout(() => setCopiedClause(null), 2000);
    });
  };

  const inputClass =
    'w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500/40 focus:border-teal-500/40 transition-all text-sm';
  const labelClass = 'block text-sm font-medium text-slate-400 mb-1.5';
  const selectClass =
    'w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-teal-500/40 focus:border-teal-500/40 transition-all text-sm appearance-none cursor-pointer';

  const enabledCount = Object.values(clauses).filter(Boolean).length;

  return (
    <div className="space-y-8">
      {/* Business Details */}
      <div className="glass rounded-2xl p-6 sm:p-8 space-y-6">
        <h2 className="text-xl font-bold text-white heading-font">Business Details</h2>

        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label className={labelClass}>Your Business Name</label>
            <input
              type="text"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              className={inputClass}
              placeholder="e.g. Jane Smith Design"
            />
          </div>
          <div>
            <label className={labelClass}>Your ABN</label>
            <input
              type="text"
              value={abn}
              onChange={(e) => setAbn(e.target.value)}
              className={inputClass}
              placeholder="e.g. 12 345 678 901"
            />
          </div>
          <div>
            <label className={labelClass}>Client Name</label>
            <input
              type="text"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              className={inputClass}
              placeholder="e.g. Acme Pty Ltd"
            />
          </div>
          <div>
            <label className={labelClass}>Project Type</label>
            <select
              value={projectType}
              onChange={(e) => setProjectType(e.target.value as ProjectType)}
              className={selectClass}
            >
              {PROJECT_TYPE_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value} className="bg-slate-900">
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className={labelClass}>Project Value (AUD)</label>
          <div className="relative max-w-xs">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm">$</span>
            <input
              type="number"
              value={projectValue}
              onChange={(e) => setProjectValue(e.target.value)}
              className={`${inputClass} pl-8`}
              placeholder="5000"
              min="0"
            />
          </div>
          <p className="text-xs text-slate-500 mt-1.5">
            Used for payment calculations and liability cap references
          </p>
        </div>
      </div>

      {/* Clause Selection */}
      <div className="glass rounded-2xl p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-white heading-font">Contract Clauses</h2>
          <span className="text-sm text-slate-400">{enabledCount}/10 enabled</span>
        </div>

        <div className="space-y-4">
          {/* 1. Scope of Work */}
          <div className="bg-white/5 rounded-xl p-5 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-white font-semibold text-sm">Scope of Work</h4>
                <p className="text-xs text-slate-500">Define what you are delivering</p>
              </div>
              <button
                onClick={() => toggleClause('scopeOfWork')}
                className={`relative w-12 h-6 rounded-full transition-colors ${clauses.scopeOfWork ? 'bg-teal-500' : 'bg-white/20'}`}
              >
                <div className={`absolute top-0.5 w-5 h-5 rounded-full bg-white transition-transform ${clauses.scopeOfWork ? 'translate-x-6' : 'translate-x-0.5'}`} />
              </button>
            </div>
            {clauses.scopeOfWork && (
              <div>
                <label className={labelClass}>Project Description</label>
                <textarea
                  value={scopeDescription}
                  onChange={(e) => setScopeDescription(e.target.value)}
                  className={`${inputClass} min-h-[100px] resize-y`}
                  placeholder="Describe the deliverables, milestones, timeline, and any exclusions..."
                  rows={4}
                />
              </div>
            )}
          </div>

          {/* 2. Payment Terms */}
          <div className="bg-white/5 rounded-xl p-5 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-white font-semibold text-sm">Payment Terms</h4>
                <p className="text-xs text-slate-500">How and when you get paid</p>
              </div>
              <button
                onClick={() => toggleClause('paymentTerms')}
                className={`relative w-12 h-6 rounded-full transition-colors ${clauses.paymentTerms ? 'bg-teal-500' : 'bg-white/20'}`}
              >
                <div className={`absolute top-0.5 w-5 h-5 rounded-full bg-white transition-transform ${clauses.paymentTerms ? 'translate-x-6' : 'translate-x-0.5'}`} />
              </button>
            </div>
            {clauses.paymentTerms && (
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Payment Schedule</label>
                  <select
                    value={paymentTerms}
                    onChange={(e) => setPaymentTerms(e.target.value as PaymentTerms)}
                    className={selectClass}
                  >
                    {PAYMENT_TERMS_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value} className="bg-slate-900">
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={labelClass}>Late Payment Interest (% p.a.)</label>
                  <input
                    type="number"
                    value={lateInterestRate}
                    onChange={(e) => setLateInterestRate(e.target.value)}
                    className={inputClass}
                    placeholder="10"
                    min="0"
                    max="30"
                  />
                </div>
                {paymentTerms === 'custom' && (
                  <div className="sm:col-span-2">
                    <label className={labelClass}>Custom Payment Terms</label>
                    <textarea
                      value={customPaymentTerms}
                      onChange={(e) => setCustomPaymentTerms(e.target.value)}
                      className={`${inputClass} min-h-[80px] resize-y`}
                      placeholder="Describe your custom payment schedule..."
                      rows={3}
                    />
                  </div>
                )}
              </div>
            )}
          </div>

          {/* 3. Intellectual Property */}
          <div className="bg-white/5 rounded-xl p-5 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-white font-semibold text-sm">Intellectual Property</h4>
                <p className="text-xs text-slate-500">Who owns the work product</p>
              </div>
              <button
                onClick={() => toggleClause('intellectualProperty')}
                className={`relative w-12 h-6 rounded-full transition-colors ${clauses.intellectualProperty ? 'bg-teal-500' : 'bg-white/20'}`}
              >
                <div className={`absolute top-0.5 w-5 h-5 rounded-full bg-white transition-transform ${clauses.intellectualProperty ? 'translate-x-6' : 'translate-x-0.5'}`} />
              </button>
            </div>
            {clauses.intellectualProperty && (
              <div className="space-y-2">
                {IP_OPTIONS.map((opt) => (
                  <label
                    key={opt.value}
                    className={`flex items-start gap-3 p-3 rounded-lg cursor-pointer transition-all ${
                      ipOwnership === opt.value
                        ? 'bg-teal-500/10 border border-teal-500/20'
                        : 'bg-white/5 border border-transparent hover:bg-white/10'
                    }`}
                  >
                    <input
                      type="radio"
                      name="ip-ownership"
                      value={opt.value}
                      checked={ipOwnership === opt.value}
                      onChange={(e) => setIpOwnership(e.target.value as IPOwnership)}
                      className="mt-0.5 accent-teal-500"
                    />
                    <div>
                      <p className="text-sm text-white font-medium">{opt.label}</p>
                      <p className="text-xs text-slate-500">{opt.desc}</p>
                    </div>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* 4. Confidentiality */}
          <div className="bg-white/5 rounded-xl p-5 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-white font-semibold text-sm">Confidentiality</h4>
                <p className="text-xs text-slate-500">Protect sensitive business information</p>
              </div>
              <button
                onClick={() => toggleClause('confidentiality')}
                className={`relative w-12 h-6 rounded-full transition-colors ${clauses.confidentiality ? 'bg-teal-500' : 'bg-white/20'}`}
              >
                <div className={`absolute top-0.5 w-5 h-5 rounded-full bg-white transition-transform ${clauses.confidentiality ? 'translate-x-6' : 'translate-x-0.5'}`} />
              </button>
            </div>
            {clauses.confidentiality && (
              <div>
                <label className={labelClass}>Duration</label>
                <select
                  value={confidentialityDuration}
                  onChange={(e) => setConfidentialityDuration(e.target.value as ConfidentialityDuration)}
                  className={`${selectClass} max-w-xs`}
                >
                  {CONFIDENTIALITY_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value} className="bg-slate-900">
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>

          {/* 5. Termination */}
          <div className="bg-white/5 rounded-xl p-5 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-white font-semibold text-sm">Termination</h4>
                <p className="text-xs text-slate-500">How either party can exit the agreement</p>
              </div>
              <button
                onClick={() => toggleClause('termination')}
                className={`relative w-12 h-6 rounded-full transition-colors ${clauses.termination ? 'bg-teal-500' : 'bg-white/20'}`}
              >
                <div className={`absolute top-0.5 w-5 h-5 rounded-full bg-white transition-transform ${clauses.termination ? 'translate-x-6' : 'translate-x-0.5'}`} />
              </button>
            </div>
            {clauses.termination && (
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Notice Period</label>
                  <select
                    value={noticePeriod}
                    onChange={(e) => setNoticePeriod(e.target.value as NoticePeriod)}
                    className={selectClass}
                  >
                    {NOTICE_PERIOD_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value} className="bg-slate-900">
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={labelClass}>Early Termination Kill Fee (%)</label>
                  <input
                    type="number"
                    value={killFeePercent}
                    onChange={(e) => setKillFeePercent(e.target.value)}
                    className={inputClass}
                    placeholder="25"
                    min="0"
                    max="100"
                  />
                  <p className="text-xs text-slate-500 mt-1">Percentage of remaining project value</p>
                </div>
              </div>
            )}
          </div>

          {/* 6. Limitation of Liability */}
          <div className="bg-white/5 rounded-xl p-5 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-white font-semibold text-sm">Limitation of Liability</h4>
                <p className="text-xs text-slate-500">Cap your financial exposure</p>
              </div>
              <button
                onClick={() => toggleClause('liability')}
                className={`relative w-12 h-6 rounded-full transition-colors ${clauses.liability ? 'bg-teal-500' : 'bg-white/20'}`}
              >
                <div className={`absolute top-0.5 w-5 h-5 rounded-full bg-white transition-transform ${clauses.liability ? 'translate-x-6' : 'translate-x-0.5'}`} />
              </button>
            </div>
            {clauses.liability && (
              <div>
                <label className={labelClass}>Liability Cap</label>
                <select
                  value={liabilityCap}
                  onChange={(e) => setLiabilityCap(e.target.value as LiabilityCap)}
                  className={`${selectClass} max-w-xs`}
                >
                  {LIABILITY_CAP_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value} className="bg-slate-900">
                      {opt.label}
                    </option>
                  ))}
                </select>
                {liabilityCap !== 'uncapped' && (
                  <p className="text-xs text-slate-500 mt-1.5">
                    Cap amount: {getLiabilityCapText()}
                  </p>
                )}
              </div>
            )}
          </div>

          {/* 7. Revisions & Changes */}
          <div className="bg-white/5 rounded-xl p-5 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-white font-semibold text-sm">Revisions &amp; Changes</h4>
                <p className="text-xs text-slate-500">Set boundaries around revision rounds</p>
              </div>
              <button
                onClick={() => toggleClause('revisions')}
                className={`relative w-12 h-6 rounded-full transition-colors ${clauses.revisions ? 'bg-teal-500' : 'bg-white/20'}`}
              >
                <div className={`absolute top-0.5 w-5 h-5 rounded-full bg-white transition-transform ${clauses.revisions ? 'translate-x-6' : 'translate-x-0.5'}`} />
              </button>
            </div>
            {clauses.revisions && (
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Included Revision Rounds</label>
                  <input
                    type="number"
                    value={includedRevisions}
                    onChange={(e) => setIncludedRevisions(e.target.value)}
                    className={inputClass}
                    placeholder="2"
                    min="0"
                    max="10"
                  />
                </div>
                <div>
                  <label className={labelClass}>Additional Revision Rate ($/hr)</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm">$</span>
                    <input
                      type="number"
                      value={additionalRevisionRate}
                      onChange={(e) => setAdditionalRevisionRate(e.target.value)}
                      className={`${inputClass} pl-8`}
                      placeholder="150"
                      min="0"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 8. Dispute Resolution */}
          <div className="bg-white/5 rounded-xl p-5 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-white font-semibold text-sm">Dispute Resolution</h4>
                <p className="text-xs text-slate-500">How disagreements get resolved</p>
              </div>
              <button
                onClick={() => toggleClause('disputeResolution')}
                className={`relative w-12 h-6 rounded-full transition-colors ${clauses.disputeResolution ? 'bg-teal-500' : 'bg-white/20'}`}
              >
                <div className={`absolute top-0.5 w-5 h-5 rounded-full bg-white transition-transform ${clauses.disputeResolution ? 'translate-x-6' : 'translate-x-0.5'}`} />
              </button>
            </div>
            {clauses.disputeResolution && (
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Resolution Method</label>
                  <select
                    value={disputeMethod}
                    onChange={(e) => setDisputeMethod(e.target.value as DisputeMethod)}
                    className={selectClass}
                  >
                    {DISPUTE_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value} className="bg-slate-900">
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={labelClass}>Jurisdiction</label>
                  <select
                    value={jurisdiction}
                    onChange={(e) => setJurisdiction(e.target.value as Jurisdiction)}
                    className={selectClass}
                  >
                    {JURISDICTION_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value} className="bg-slate-900">
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            )}
          </div>

          {/* 9. Force Majeure */}
          <div className="bg-white/5 rounded-xl p-5">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-white font-semibold text-sm">Force Majeure</h4>
                <p className="text-xs text-slate-500">Protection for events beyond your control</p>
              </div>
              <button
                onClick={() => toggleClause('forceMajeure')}
                className={`relative w-12 h-6 rounded-full transition-colors ${clauses.forceMajeure ? 'bg-teal-500' : 'bg-white/20'}`}
              >
                <div className={`absolute top-0.5 w-5 h-5 rounded-full bg-white transition-transform ${clauses.forceMajeure ? 'translate-x-6' : 'translate-x-0.5'}`} />
              </button>
            </div>
          </div>

          {/* 10. Independent Contractor Status */}
          <div className="bg-white/5 rounded-xl p-5">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-white font-semibold text-sm">Independent Contractor Status</h4>
                <p className="text-xs text-slate-500">ATO compliance — confirms you are not an employee</p>
              </div>
              <button
                onClick={() => toggleClause('independentContractor')}
                className={`relative w-12 h-6 rounded-full transition-colors ${clauses.independentContractor ? 'bg-teal-500' : 'bg-white/20'}`}
              >
                <div className={`absolute top-0.5 w-5 h-5 rounded-full bg-white transition-transform ${clauses.independentContractor ? 'translate-x-6' : 'translate-x-0.5'}`} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Generated Contract Preview */}
      <div className="glass rounded-2xl p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-white heading-font">Generated Contract</h2>
          <button
            onClick={handleCopyFull}
            className="flex items-center gap-2 text-sm px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all"
          >
            {copiedFull ? <span className="text-emerald-400">Copied</span> : <>Copy Full Contract</>}
          </button>
        </div>

        {/* Disclaimer */}
        <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4">
          <p className="text-sm text-amber-400 font-medium mb-1">Disclaimer</p>
          <p className="text-xs text-amber-300/80">
            This is a template generated by InvoiceFlow, not legal advice. We strongly recommend
            having any contract reviewed by a qualified legal professional before use. InvoiceFlow
            accepts no liability for the use of this template.
          </p>
        </div>

        {/* Contract Header */}
        <div className="bg-gradient-to-br from-teal-500/10 to-blue-500/10 border border-teal-500/20 rounded-2xl p-6 sm:p-8">
          <h3 className="text-lg font-bold text-white text-center mb-4 uppercase tracking-wider">
            Independent Contractor Agreement
          </h3>
          <div className="text-sm text-slate-300 space-y-1 mb-6">
            <p><span className="text-slate-500">Date:</span> [DATE]</p>
            <p><span className="text-slate-500">Contractor:</span> {businessName || '[CONTRACTOR NAME]'} (ABN: {abn || '[ABN]'})</p>
            <p><span className="text-slate-500">Client:</span> {clientName || '[CLIENT NAME]'}</p>
            <p><span className="text-slate-500">Project Type:</span> {projectTypeLabel}</p>
            <p><span className="text-slate-500">Project Value:</span> {formatCurrency(parseFloat(projectValue) || 0)} AUD</p>
          </div>
          <div className="border-t border-white/10 mb-6" />

          {/* Clause Sections */}
          {clauseTexts.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-slate-500 text-sm">Enable at least one clause above to generate your contract.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {clauseTexts.map((section) => (
                <div key={section.key} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="text-white font-semibold text-sm">{section.title}</h4>
                    <button
                      onClick={() => handleCopyClause(section.key, section.text, section.title)}
                      className="text-xs px-2 py-1 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white transition-all shrink-0 ml-4"
                    >
                      {copiedClause === section.key ? (
                        <span className="text-emerald-400">Copied</span>
                      ) : (
                        'Copy'
                      )}
                    </button>
                  </div>
                  <p className="text-sm text-slate-300 whitespace-pre-line leading-relaxed">
                    {section.text}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Signatures */}
          {clauseTexts.length > 0 && (
            <>
              <div className="border-t border-white/10 mt-8 pt-6">
                <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Signatures</h4>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2 text-sm text-slate-300">
                    <p><span className="text-slate-500">Contractor:</span> {businessName || '[CONTRACTOR NAME]'}</p>
                    <p><span className="text-slate-500">Signature:</span> [SIGNATURE]</p>
                    <p><span className="text-slate-500">Date:</span> [DATE]</p>
                  </div>
                  <div className="space-y-2 text-sm text-slate-300">
                    <p><span className="text-slate-500">Client:</span> {clientName || '[CLIENT NAME]'}</p>
                    <p><span className="text-slate-500">Signature:</span> [SIGNATURE]</p>
                    <p><span className="text-slate-500">Date:</span> [DATE]</p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Copy Full Contract Button (bottom) */}
        {clauseTexts.length > 0 && (
          <div className="flex justify-center">
            <button
              onClick={handleCopyFull}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold hover:opacity-90 transition-opacity text-sm"
            >
              {copiedFull ? 'Copied to Clipboard' : 'Copy Full Contract to Clipboard'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
