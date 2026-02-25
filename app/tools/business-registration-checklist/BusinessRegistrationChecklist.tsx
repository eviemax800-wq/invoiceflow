'use client';

import { useState, useMemo, useCallback } from 'react';

/* ---- Types ---- */

type BusinessType = 'sole-trader' | 'partnership' | 'company' | 'trust';
type Industry =
  | 'Web Development'
  | 'Design'
  | 'Copywriting'
  | 'Marketing'
  | 'Consulting'
  | 'Photography'
  | 'Accounting'
  | 'Trades'
  | 'Other';
type AustralianState = 'NSW' | 'VIC' | 'QLD' | 'SA' | 'WA' | 'TAS' | 'NT' | 'ACT';
type Priority = 'Essential' | 'Recommended' | 'Optional';

interface ChecklistItem {
  id: string;
  title: string;
  description: string;
  priority: Priority;
  estimatedTime: string;
  externalLink?: string;
  externalLinkLabel?: string;
  checked: boolean;
}

interface ChecklistSection {
  id: string;
  title: string;
  icon: string;
  items: ChecklistItem[];
}

/* ---- Constants ---- */

const BUSINESS_TYPES: { value: BusinessType; label: string; description: string }[] = [
  { value: 'sole-trader', label: 'Sole Trader', description: 'Simplest structure — you and the business are the same legal entity' },
  { value: 'partnership', label: 'Partnership', description: 'Two or more people running a business together' },
  { value: 'company', label: 'Company', description: 'Separate legal entity (Pty Ltd) — liability protection but more compliance' },
  { value: 'trust', label: 'Trust', description: 'Complex structure for income distribution — consult an accountant first' },
];

const INDUSTRIES: { value: Industry; label: string }[] = [
  { value: 'Web Development', label: 'Web Development' },
  { value: 'Design', label: 'Design' },
  { value: 'Copywriting', label: 'Copywriting' },
  { value: 'Marketing', label: 'Marketing' },
  { value: 'Consulting', label: 'Consulting' },
  { value: 'Photography', label: 'Photography' },
  { value: 'Accounting', label: 'Accounting' },
  { value: 'Trades', label: 'Trades' },
  { value: 'Other', label: 'Other' },
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

const REVENUE_MARKS = [0, 25000, 50000, 75000, 100000, 150000, 200000];

const PRIORITY_STYLES: Record<Priority, { bg: string; text: string; border: string }> = {
  Essential: { bg: 'bg-teal-500/15', text: 'text-teal-400', border: 'border-teal-500/30' },
  Recommended: { bg: 'bg-blue-500/15', text: 'text-blue-400', border: 'border-blue-500/30' },
  Optional: { bg: 'bg-slate-500/15', text: 'text-slate-400', border: 'border-slate-500/30' },
};

/* ---- Checklist Builder ---- */

let _nextId = 1;
function genId(): string {
  return `breg-${_nextId++}-${Date.now()}`;
}

function buildChecklist(
  businessType: BusinessType,
  industry: Industry,
  revenue: number,
  state: AustralianState
): ChecklistSection[] {
  const sections: ChecklistSection[] = [];
  const needsGst = revenue >= 75000;
  const isHighRevenue = revenue >= 100000;
  const isCompanyOrTrust = businessType === 'company' || businessType === 'trust';
  const needsPublicLiability = ['Photography', 'Trades'].includes(industry);
  const needsProfessionalIndemnity = ['Web Development', 'Design', 'Consulting', 'Marketing', 'Accounting', 'Copywriting'].includes(industry);
  const handlesCyberData = ['Web Development', 'Marketing', 'Consulting', 'Accounting'].includes(industry);

  // 1. Legal & Registration
  const legalItems: ChecklistItem[] = [
    {
      id: genId(),
      title: 'Register your ABN',
      description: 'Apply for an Australian Business Number through the Australian Business Register. Free and usually approved instantly online. Required to invoice without PAYG withholding.',
      priority: 'Essential',
      estimatedTime: '10-15 minutes',
      externalLink: 'https://www.abr.gov.au/business-super-funds-702/applying-abn',
      externalLinkLabel: 'Apply at abr.gov.au',
      checked: false,
    },
    {
      id: genId(),
      title: 'Confirm your TFN is current',
      description: 'You already have a Tax File Number from employment. Confirm it\'s active and linked correctly. Sole traders use their personal TFN — no separate business TFN needed.',
      priority: 'Essential',
      estimatedTime: '5 minutes',
      externalLink: 'https://www.ato.gov.au/individuals-and-families/tax-file-number',
      externalLinkLabel: 'Check at ato.gov.au',
      checked: false,
    },
  ];

  // Business name — only if trading under a name other than their own
  legalItems.push({
    id: genId(),
    title: 'Register a business name (if applicable)',
    description: 'Only required if you\'re trading under a name other than your own legal name. Costs $39/year or $92/3 years through ASIC. Must be unique and not misleading.',
    priority: 'Recommended',
    estimatedTime: '15-20 minutes',
    externalLink: 'https://www.asic.gov.au/for-business/registering-a-business-name/',
    externalLinkLabel: 'Register at ASIC',
    checked: false,
  });

  // Company-specific registrations
  if (isCompanyOrTrust) {
    legalItems.push({
      id: genId(),
      title: businessType === 'company' ? 'Register your company with ASIC' : 'Establish trust deed and register with ATO',
      description: businessType === 'company'
        ? 'Register a Pty Ltd company through ASIC. Costs $576 (2024-25). You\'ll need a registered office address, at least one director, and a company constitution or replaceable rules.'
        : 'Engage a solicitor or accountant to draft a trust deed and register the trust with the ATO. Typical cost: $1,500-$3,000 for setup including deed and TFN/ABN applications.',
      priority: 'Essential',
      estimatedTime: businessType === 'company' ? '30-60 minutes' : '1-2 weeks',
      externalLink: businessType === 'company' ? 'https://www.asic.gov.au/for-business/registering-a-company/' : undefined,
      externalLinkLabel: businessType === 'company' ? 'Register at ASIC' : undefined,
      checked: false,
    });
  }

  // Partnership agreement
  if (businessType === 'partnership') {
    legalItems.push({
      id: genId(),
      title: 'Draft and sign a partnership agreement',
      description: 'A written partnership agreement defines profit sharing, decision-making rights, dispute resolution, and exit terms. Without one, you default to state partnership legislation which may not suit your arrangement.',
      priority: 'Essential',
      estimatedTime: '2-5 hours',
      checked: false,
    });
  }

  legalItems.push({
    id: genId(),
    title: 'Register a domain name',
    description: 'Secure a .com.au or .com domain matching your business name. A .com.au requires a valid ABN. Professional email and web presence builds client trust.',
    priority: 'Recommended',
    estimatedTime: '10 minutes',
    checked: false,
  });

  // State-specific licence check
  legalItems.push({
    id: genId(),
    title: `Check ${state} licence requirements for your industry`,
    description: `Some industries require specific state licences or registrations in ${state}. Trades, accounting, and financial services often have mandatory licensing. Check with your state\'s business licensing authority.`,
    priority: industry === 'Trades' || industry === 'Accounting' ? 'Essential' : 'Recommended',
    estimatedTime: '15-30 minutes',
    externalLink: 'https://ablis.business.gov.au/',
    externalLinkLabel: 'Check at ABLIS',
    checked: false,
  });

  sections.push({
    id: 'legal-registration',
    title: 'Legal & Registration',
    icon: 'M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z',
    items: legalItems,
  });

  // 2. Tax & Compliance
  const taxItems: ChecklistItem[] = [];

  if (needsGst) {
    taxItems.push({
      id: genId(),
      title: 'Register for GST',
      description: `Your estimated revenue of $${revenue.toLocaleString()} exceeds the $75,000 threshold. GST registration is mandatory. You'll charge 10% GST on services and can claim GST credits on business purchases.`,
      priority: 'Essential',
      estimatedTime: '10 minutes (via ABR)',
      externalLink: 'https://www.ato.gov.au/businesses-and-organisations/gst-excise-and-indirect-taxes/gst/registering-for-gst',
      externalLinkLabel: 'Register at ATO',
      checked: false,
    });
  } else {
    taxItems.push({
      id: genId(),
      title: 'Consider voluntary GST registration',
      description: `At $${revenue.toLocaleString()} estimated revenue, GST registration is optional. Benefits: claim GST credits on expenses, appear more established to B2B clients. Downside: quarterly BAS lodgement and 10% price increase for non-GST clients.`,
      priority: 'Optional',
      estimatedTime: '10 minutes (via ABR)',
      externalLink: 'https://www.ato.gov.au/businesses-and-organisations/gst-excise-and-indirect-taxes/gst/registering-for-gst',
      externalLinkLabel: 'Learn more at ATO',
      checked: false,
    });
  }

  taxItems.push({
    id: genId(),
    title: needsGst ? 'Set up quarterly BAS lodgement' : 'Understand BAS obligations if you register for GST',
    description: needsGst
      ? 'BAS is due quarterly (28 days after each quarter). Reports GST collected, GST paid, and PAYG instalments. Use accounting software to make this a 15-minute task.'
      : 'If you register for GST, you\'ll need to lodge a Business Activity Statement (BAS) — typically quarterly. This reports GST collected and paid, plus PAYG income tax instalments.',
    priority: needsGst ? 'Essential' : 'Optional',
    estimatedTime: '15 minutes per quarter',
    externalLink: 'https://www.ato.gov.au/businesses-and-organisations/preparing-lodging-and-paying/business-activity-statements-bas',
    externalLinkLabel: 'BAS info at ATO',
    checked: false,
  });

  taxItems.push({
    id: genId(),
    title: 'Understand PAYG instalments',
    description: 'The ATO may require you to make quarterly PAYG income tax instalments based on your prior year income. This prevents a large tax bill at EOFY. Your first instalment notice usually arrives after your first tax return as a sole trader.',
    priority: 'Recommended',
    estimatedTime: '10 minutes to understand',
    externalLink: 'https://www.ato.gov.au/businesses-and-organisations/preparing-lodging-and-paying/payg-instalments',
    externalLinkLabel: 'PAYG info at ATO',
    checked: false,
  });

  taxItems.push({
    id: genId(),
    title: 'Plan for income tax obligations',
    description: isCompanyOrTrust
      ? 'Companies pay a flat 25% tax rate (base rate entity) or 30%. Trusts distribute income to beneficiaries who pay at their marginal rates. Consult your accountant for optimal tax structuring.'
      : 'As a sole trader, your business income is taxed at individual marginal rates (19%-45% plus Medicare levy). Set aside 25-30% of income for tax. Consider quarterly tax savings transfers to avoid EOFY surprises.',
    priority: 'Essential',
    estimatedTime: '30 minutes to plan',
    checked: false,
  });

  if (isCompanyOrTrust) {
    taxItems.push({
      id: genId(),
      title: 'Apply for a separate TFN for your entity',
      description: businessType === 'company'
        ? 'Companies need their own TFN, separate from the director\'s personal TFN. Apply through the ATO after ASIC registration.'
        : 'Trusts need their own TFN. Apply through the ATO after the trust is established. Include this in your trust setup process.',
      priority: 'Essential',
      estimatedTime: '10-15 minutes',
      externalLink: 'https://www.ato.gov.au/businesses-and-organisations/registering-for-tax/tfn-registration-for-businesses',
      externalLinkLabel: 'Apply at ATO',
      checked: false,
    });
  }

  sections.push({
    id: 'tax-compliance',
    title: 'Tax & Compliance',
    icon: 'M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z',
    items: taxItems,
  });

  // 3. Financial Setup
  const financialItems: ChecklistItem[] = [
    {
      id: genId(),
      title: 'Open a separate business bank account',
      description: 'Even sole traders should separate personal and business finances. Makes tax time easier, gives clear cash flow visibility, and looks professional. Most AU banks offer fee-free sole trader accounts.',
      priority: 'Essential',
      estimatedTime: '20-30 minutes',
      checked: false,
    },
    {
      id: genId(),
      title: 'Set up accounting and invoicing software',
      description: 'You need software that handles invoicing, expense tracking, GST calculations, and reporting. InvoiceFlow is purpose-built for Australian freelancers — professional invoices, automatic GST, and BAS-ready reports.',
      priority: 'Essential',
      estimatedTime: '15-30 minutes',
      externalLink: 'https://www.invoiceflow.au/signup',
      externalLinkLabel: 'Try InvoiceFlow free',
      checked: false,
    },
    {
      id: genId(),
      title: 'Create your first invoice template',
      description: 'Your invoice must include your ABN, business name, date, description of services, amount (GST-inclusive or exclusive), and payment details. Having a template ready means you can invoice immediately when you land your first client.',
      priority: 'Essential',
      estimatedTime: '10 minutes',
      externalLink: '/tools/invoice-generator',
      externalLinkLabel: 'Use free invoice generator',
      checked: false,
    },
    {
      id: genId(),
      title: 'Set up payment methods',
      description: 'At minimum, offer bank transfer (BSB + account number on invoices). Consider adding Stripe or PayPal for credit card payments — clients pay faster when payment is easy. Factor in processing fees (1.75-2.9%) when setting your rates.',
      priority: 'Essential',
      estimatedTime: '20-30 minutes',
      checked: false,
    },
    {
      id: genId(),
      title: 'Create a system for tracking expenses',
      description: 'Every business expense is a potential tax deduction. Track them from day one using your accounting software. Photograph receipts immediately (the ATO accepts digital copies). Categories: equipment, software, travel, home office, professional development.',
      priority: 'Essential',
      estimatedTime: '15 minutes to set up',
      checked: false,
    },
    {
      id: genId(),
      title: 'Set up a tax savings account',
      description: 'Open a high-interest savings account and transfer 25-30% of every payment received. This prevents the EOFY tax shock that catches most first-year freelancers. Automate the transfer if possible.',
      priority: 'Recommended',
      estimatedTime: '10 minutes',
      checked: false,
    },
  ];

  sections.push({
    id: 'financial-setup',
    title: 'Financial Setup',
    icon: 'M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    items: financialItems,
  });

  // 4. Insurance
  const insuranceItems: ChecklistItem[] = [];

  if (needsProfessionalIndemnity) {
    insuranceItems.push({
      id: genId(),
      title: 'Get professional indemnity (PI) insurance',
      description: `Essential for ${industry.toLowerCase()} professionals. Protects you if a client claims your work or advice caused them financial loss. Many enterprise and government clients require it. Typical cost: $300-$800/year for sole traders.`,
      priority: 'Essential',
      estimatedTime: '30-60 minutes for quotes',
      checked: false,
    });
  } else {
    insuranceItems.push({
      id: genId(),
      title: 'Consider professional indemnity (PI) insurance',
      description: 'Protects you if a client claims your work or advice caused them financial loss. Not always required for your industry but provides valuable peace of mind. Typical cost: $300-$800/year for sole traders.',
      priority: 'Recommended',
      estimatedTime: '30-60 minutes for quotes',
      checked: false,
    });
  }

  if (needsPublicLiability) {
    insuranceItems.push({
      id: genId(),
      title: 'Get public liability insurance',
      description: `Essential for ${industry.toLowerCase()} professionals who work on-site or with the public. Covers claims for personal injury or property damage related to your business activities. Many venues and clients require proof of coverage. Typical cost: $300-$600/year.`,
      priority: 'Essential',
      estimatedTime: '30-60 minutes for quotes',
      checked: false,
    });
  } else {
    insuranceItems.push({
      id: genId(),
      title: 'Consider public liability insurance',
      description: 'Covers claims for personal injury or property damage related to your business. More relevant if you work on-site or meet clients in person. Typical cost: $300-$600/year.',
      priority: 'Optional',
      estimatedTime: '30 minutes for quotes',
      checked: false,
    });
  }

  if (handlesCyberData) {
    insuranceItems.push({
      id: genId(),
      title: 'Consider cyber liability insurance',
      description: `As a ${industry.toLowerCase()} professional, you may handle client data, access credentials, or sensitive information. Cyber insurance covers data breaches, hacking incidents, and associated legal costs. Increasingly important as clients ask about your data security practices.`,
      priority: 'Recommended',
      estimatedTime: '20-30 minutes for quotes',
      checked: false,
    });
  } else {
    insuranceItems.push({
      id: genId(),
      title: 'Consider cyber liability insurance',
      description: 'Covers data breaches, hacking incidents, and associated legal costs. More relevant if you handle client data or sensitive information digitally.',
      priority: 'Optional',
      estimatedTime: '20 minutes for quotes',
      checked: false,
    });
  }

  insuranceItems.push({
    id: genId(),
    title: 'Look into income protection insurance',
    description: 'Replaces a portion of your income if you\'re unable to work due to illness or injury. Unlike employees, freelancers have no sick leave or workers\' comp. Premiums are tax-deductible. Typical cost: 1-3% of your annual income.',
    priority: 'Recommended',
    estimatedTime: '30-60 minutes for quotes',
    checked: false,
  });

  sections.push({
    id: 'insurance',
    title: 'Insurance',
    icon: 'M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z',
    items: insuranceItems,
  });

  // 5. Superannuation
  const superItems: ChecklistItem[] = [];

  if (businessType === 'sole-trader' || businessType === 'partnership') {
    superItems.push({
      id: genId(),
      title: 'Plan voluntary super contributions',
      description: 'As a sole trader, super is voluntary but highly recommended. Contributions are tax-deductible up to the $30,000 concessional cap. Even contributing 11.5% (matching the employee SG rate) builds significant long-term wealth. You can use your existing super fund.',
      priority: 'Recommended',
      estimatedTime: '30 minutes to plan',
      checked: false,
    });
    superItems.push({
      id: genId(),
      title: 'Confirm your existing super fund details',
      description: 'You don\'t need a new super fund to make voluntary contributions. Log in to your existing fund and confirm your member number, contribution reference, and BPAY/EFT details. Set up a recurring transfer aligned with your invoicing cycle.',
      priority: 'Recommended',
      estimatedTime: '15 minutes',
      checked: false,
    });
  }

  if (businessType === 'company' || businessType === 'trust') {
    superItems.push({
      id: genId(),
      title: 'Understand director/beneficiary super obligations',
      description: businessType === 'company'
        ? 'If the company pays you a salary as a director, the company must pay the 11.5% Superannuation Guarantee (SG) on top. This is a legal obligation, not optional. Factor it into your cost structure.'
        : 'If the trust pays wages to beneficiaries, the trustee must pay the 11.5% SG. Distributions (not wages) don\'t attract SG. Structure with your accountant.',
      priority: 'Essential',
      estimatedTime: '20 minutes to understand',
      checked: false,
    });
  }

  superItems.push({
    id: genId(),
    title: 'Understand the concessional contributions cap',
    description: 'The concessional (before-tax) super cap is $30,000 per year (2024-25). This includes employer contributions from any other employment. Contributions above the cap are taxed at your marginal rate plus an excess contributions charge.',
    priority: 'Recommended',
    estimatedTime: '10 minutes',
    externalLink: 'https://www.ato.gov.au/individuals-and-families/super/growing-and-keeping-track-of-your-super/caps-on-super-contributions',
    externalLinkLabel: 'Caps info at ATO',
    checked: false,
  });

  if (isHighRevenue) {
    superItems.push({
      id: genId(),
      title: 'Consider a super contribution strategy with your accountant',
      description: `At $${revenue.toLocaleString()} estimated revenue, maximising concessional super contributions ($30K) can significantly reduce your tax bill. Each dollar contributed is taxed at 15% inside super instead of your marginal rate. Discuss timing and amount with your accountant.`,
      priority: 'Recommended',
      estimatedTime: '1-hour meeting',
      checked: false,
    });
  }

  sections.push({
    id: 'superannuation',
    title: 'Superannuation',
    icon: 'M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125',
    items: superItems,
  });

  // 6. Business Essentials
  const essentialsItems: ChecklistItem[] = [
    {
      id: genId(),
      title: 'Build a portfolio or website',
      description: 'You don\'t need a fancy website to start, but you need somewhere to send potential clients. A simple one-page portfolio with your services, past work, and contact details is enough. Can be as simple as a Notion page or a basic landing page.',
      priority: 'Recommended',
      estimatedTime: '2-8 hours',
      checked: false,
    },
    {
      id: genId(),
      title: 'Create a standard service contract',
      description: 'Every freelance engagement should start with a signed agreement covering scope, payment terms, IP ownership, revision limits, and termination clauses. Having a template ready means you can respond to opportunities quickly.',
      priority: 'Essential',
      estimatedTime: '15 minutes with a generator',
      externalLink: '/tools/contract-generator',
      externalLinkLabel: 'Use free contract generator',
      checked: false,
    },
    {
      id: genId(),
      title: 'Set up a client onboarding process',
      description: 'Create a repeatable process for onboarding new clients: collecting their details, signing contracts, processing deposits, and gathering project requirements. Systematise this early to look professional from day one.',
      priority: 'Recommended',
      estimatedTime: '30 minutes to plan',
      externalLink: '/tools/client-onboarding-checklist',
      externalLinkLabel: 'Use free onboarding checklist',
      checked: false,
    },
    {
      id: genId(),
      title: 'Define your pricing structure',
      description: 'Decide whether you\'ll charge hourly, project-based, retainer, or value-based rates. Research market rates for your industry and experience level. Don\'t undercharge — factor in tax, super, insurance, and unbillable time.',
      priority: 'Essential',
      estimatedTime: '1-2 hours to research',
      externalLink: '/tools/rate-calculator',
      externalLinkLabel: 'Use free rate calculator',
      checked: false,
    },
    {
      id: genId(),
      title: 'Set up professional communication channels',
      description: 'Get a professional email address (you@yourbusiness.com.au), set up a dedicated phone number or virtual number if needed, and choose your client communication tools (email, Slack, etc.). First impressions matter.',
      priority: 'Recommended',
      estimatedTime: '30-60 minutes',
      checked: false,
    },
    {
      id: genId(),
      title: 'Create a simple business plan',
      description: 'Doesn\'t need to be formal — a one-page document covering your target clients, services, pricing, revenue goals, and marketing approach. Revisit quarterly. Having a plan keeps you focused and prevents chasing every opportunity.',
      priority: 'Optional',
      estimatedTime: '1-2 hours',
      checked: false,
    },
  ];

  // Industry-specific items
  if (industry === 'Trades') {
    essentialsItems.push({
      id: genId(),
      title: 'Obtain required trade licences and certifications',
      description: `Most trades in ${state} require specific licences to operate legally. Check your state's licensing body for requirements. Operating without a licence can result in fines and inability to collect payment.`,
      priority: 'Essential',
      estimatedTime: 'Varies by trade',
      externalLink: 'https://ablis.business.gov.au/',
      externalLinkLabel: 'Check at ABLIS',
      checked: false,
    });
  }

  if (industry === 'Accounting') {
    essentialsItems.push({
      id: genId(),
      title: 'Register with relevant professional bodies',
      description: 'Registered tax agents must be registered with the Tax Practitioners Board. CPA, CA, or IPA membership provides credibility and access to professional development. BAS agents also need TPB registration.',
      priority: 'Essential',
      estimatedTime: '1-2 hours',
      externalLink: 'https://www.tpb.gov.au/',
      externalLinkLabel: 'Tax Practitioners Board',
      checked: false,
    });
  }

  sections.push({
    id: 'business-essentials',
    title: 'Business Essentials',
    icon: 'M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z',
    items: essentialsItems,
  });

  return sections;
}

/* ---- Formatting Helpers ---- */

function formatRevenue(value: number): string {
  if (value >= 200000) return '$200K+';
  if (value >= 1000) return `$${(value / 1000).toFixed(0)}K`;
  return `$${value}`;
}

/* ---- Main Component ---- */

export default function BusinessRegistrationChecklist() {
  /* Form State */
  const [businessType, setBusinessType] = useState<BusinessType>('sole-trader');
  const [industry, setIndustry] = useState<Industry>('Web Development');
  const [revenue, setRevenue] = useState(50000);
  const [state, setState] = useState<AustralianState>('VIC');
  const [hasGenerated, setHasGenerated] = useState(false);

  /* Checklist State */
  const [sections, setSections] = useState<ChecklistSection[]>([]);
  const [copied, setCopied] = useState(false);

  /* Generate Checklist */
  const handleGenerate = useCallback(() => {
    _nextId = 1; // reset ID counter
    const newSections = buildChecklist(businessType, industry, revenue, state);
    setSections(newSections);
    setHasGenerated(true);
  }, [businessType, industry, revenue, state]);

  /* Toggle Item */
  const toggleItem = useCallback((sectionId: string, itemId: string) => {
    setSections((prev) =>
      prev.map((s) =>
        s.id === sectionId
          ? { ...s, items: s.items.map((it) => (it.id === itemId ? { ...it, checked: !it.checked } : it)) }
          : s
      )
    );
  }, []);

  /* Stats */
  const stats = useMemo(() => {
    const allItems = sections.flatMap((s) => s.items);
    const checkedItems = allItems.filter((it) => it.checked);
    const total = allItems.length;
    const checked = checkedItems.length;
    const percentage = total > 0 ? Math.round((checked / total) * 100) : 0;
    return { total, checked, percentage };
  }, [sections]);

  /* Copy to Clipboard */
  const handleDownload = useCallback(() => {
    const divider = '════════════════════════════════════════════════════════';
    const sectionDivider = '────────────────────────────────────────────────────────';
    const lines: string[] = [];

    lines.push(divider);
    lines.push('FREELANCE BUSINESS REGISTRATION CHECKLIST');
    lines.push(divider);
    lines.push('');
    lines.push(`Business Type: ${BUSINESS_TYPES.find((t) => t.value === businessType)?.label}`);
    lines.push(`Industry: ${industry}`);
    lines.push(`Estimated Annual Revenue: ${formatRevenue(revenue)}`);
    lines.push(`State: ${STATES.find((s) => s.value === state)?.label}`);
    lines.push(`GST Registration: ${revenue >= 75000 ? 'Required (above $75K threshold)' : 'Optional (below $75K threshold)'}`);
    lines.push('');

    sections.forEach((section) => {
      lines.push(section.title.toUpperCase());
      lines.push(sectionDivider);
      section.items.forEach((item) => {
        const priorityTag = `[${item.priority}]`;
        lines.push(`  [${item.checked ? 'x' : ' '}] ${item.title} ${priorityTag}`);
        lines.push(`      ${item.description}`);
        lines.push(`      Time: ${item.estimatedTime}`);
        if (item.externalLink && !item.externalLink.startsWith('/')) {
          lines.push(`      Link: ${item.externalLink}`);
        }
        lines.push('');
      });
      lines.push('');
    });

    lines.push(`Progress: ${stats.checked}/${stats.total} items complete (${stats.percentage}%)`);
    lines.push('');
    lines.push(divider);
    lines.push('Generated at invoiceflow.au/tools/business-registration-checklist');

    navigator.clipboard.writeText(lines.join('\n')).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  }, [sections, stats, businessType, industry, revenue, state]);

  /* Input Styles */
  const inputClass =
    'w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition-colors';
  const labelClass = 'block text-xs font-medium text-slate-400 mb-1.5';

  return (
    <div className="space-y-8">
      {/* Business Type Selector */}
      <div className="glass rounded-2xl p-6">
        <h3 className="text-lg font-bold text-white heading-font mb-2">Business Structure</h3>
        <p className="text-sm text-slate-400 mb-5">Select how you plan to operate your freelance business.</p>
        <div className="grid sm:grid-cols-2 gap-3">
          {BUSINESS_TYPES.map((type) => (
            <button
              key={type.value}
              onClick={() => setBusinessType(type.value)}
              className={`text-left p-4 rounded-xl border transition-all ${
                businessType === type.value
                  ? 'bg-gradient-to-r from-teal-500/20 to-blue-500/20 border-teal-500/40'
                  : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
              }`}
            >
              <p className={`font-semibold text-sm ${businessType === type.value ? 'text-white' : 'text-slate-300'}`}>
                {type.label}
              </p>
              <p className="text-xs text-slate-500 mt-1">{type.description}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Industry Selector */}
      <div className="glass rounded-2xl p-6">
        <h3 className="text-lg font-bold text-white heading-font mb-2">Industry</h3>
        <p className="text-sm text-slate-400 mb-5">Your industry affects insurance, licensing, and compliance requirements.</p>
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
          {INDUSTRIES.map((ind) => (
            <button
              key={ind.value}
              onClick={() => setIndustry(ind.value)}
              className={`text-sm py-2.5 px-3 rounded-xl border transition-all text-center ${
                industry === ind.value
                  ? 'bg-gradient-to-r from-teal-500/20 to-blue-500/20 border-teal-500/40 text-white font-medium'
                  : 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {ind.label}
            </button>
          ))}
        </div>
      </div>

      {/* Revenue Estimate */}
      <div className="glass rounded-2xl p-6">
        <h3 className="text-lg font-bold text-white heading-font mb-2">Estimated Annual Revenue</h3>
        <p className="text-sm text-slate-400 mb-5">
          This determines your GST obligations. The mandatory threshold is $75,000.
        </p>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-white">{formatRevenue(revenue)}</span>
            {revenue >= 75000 ? (
              <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-teal-500/15 text-teal-400 border border-teal-500/30">
                GST Required
              </span>
            ) : (
              <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-slate-500/15 text-slate-400 border border-slate-500/30">
                GST Optional
              </span>
            )}
          </div>
          <input
            type="range"
            min={0}
            max={200000}
            step={5000}
            value={revenue}
            onChange={(e) => setRevenue(parseInt(e.target.value))}
            className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer accent-teal-500 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gradient-to-r [&::-webkit-slider-thumb]:from-teal-400 [&::-webkit-slider-thumb]:to-blue-500 [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:cursor-pointer"
          />
          <div className="flex justify-between text-xs text-slate-600">
            {REVENUE_MARKS.map((mark) => (
              <span key={mark} className={revenue >= mark ? 'text-slate-400' : ''}>
                {mark === 0 ? '$0' : mark >= 200000 ? '$200K+' : `$${mark / 1000}K`}
              </span>
            ))}
          </div>
          {/* $75K threshold indicator */}
          <div className="relative h-1">
            <div
              className="absolute top-0 h-6 border-l-2 border-dashed border-teal-500/40"
              style={{ left: `${(75000 / 200000) * 100}%` }}
            >
              <span className="absolute -top-1 left-2 text-[10px] text-teal-500/60 whitespace-nowrap">$75K threshold</span>
            </div>
          </div>
        </div>
      </div>

      {/* Location Selector */}
      <div className="glass rounded-2xl p-6">
        <h3 className="text-lg font-bold text-white heading-font mb-2">Location</h3>
        <p className="text-sm text-slate-400 mb-5">Your state affects licensing requirements and governing jurisdiction.</p>
        <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
          {STATES.map((s) => (
            <button
              key={s.value}
              onClick={() => setState(s.value)}
              className={`text-sm py-2.5 px-3 rounded-xl border transition-all text-center ${
                state === s.value
                  ? 'bg-gradient-to-r from-teal-500/20 to-blue-500/20 border-teal-500/40 text-white font-medium'
                  : 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {s.value}
            </button>
          ))}
        </div>
      </div>

      {/* Generate Button */}
      <div className="flex justify-center">
        <button
          onClick={handleGenerate}
          className="px-8 py-4 rounded-xl bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold text-lg hover:from-teal-400 hover:to-blue-400 transition-all shadow-lg shadow-teal-500/20 hover:shadow-teal-500/30"
        >
          {hasGenerated ? 'Regenerate Checklist' : 'Generate My Checklist'}
        </button>
      </div>

      {/* Results */}
      {hasGenerated && sections.length > 0 && (
        <>
          {/* Progress Tracker */}
          <div className="glass rounded-2xl p-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-bold text-white heading-font">Your Registration Progress</h3>
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

          {/* Summary Card */}
          <div className="glass rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white heading-font mb-4">Your Business Profile</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="bg-white/5 rounded-lg p-3">
                <p className="text-xs text-slate-500">Structure</p>
                <p className="text-white font-semibold text-sm">{BUSINESS_TYPES.find((t) => t.value === businessType)?.label}</p>
              </div>
              <div className="bg-white/5 rounded-lg p-3">
                <p className="text-xs text-slate-500">Industry</p>
                <p className="text-white font-semibold text-sm">{industry}</p>
              </div>
              <div className="bg-white/5 rounded-lg p-3">
                <p className="text-xs text-slate-500">Estimated Revenue</p>
                <p className="text-white font-semibold text-sm">{formatRevenue(revenue)}/year</p>
              </div>
              <div className="bg-white/5 rounded-lg p-3">
                <p className="text-xs text-slate-500">Location</p>
                <p className="text-white font-semibold text-sm">{STATES.find((s) => s.value === state)?.label}</p>
              </div>
              <div className="bg-white/5 rounded-lg p-3 sm:col-span-2">
                <p className="text-xs text-slate-500">GST Status</p>
                <p className={`font-semibold text-sm ${revenue >= 75000 ? 'text-teal-400' : 'text-slate-300'}`}>
                  {revenue >= 75000
                    ? `Mandatory — revenue exceeds $75K threshold`
                    : `Optional — revenue below $75K threshold`}
                </p>
              </div>
            </div>
          </div>

          {/* Checklist Sections */}
          <div className="space-y-6">
            {sections.map((section) => (
              <div key={section.id} className="glass rounded-2xl overflow-hidden">
                {/* Section Header */}
                <div className="p-5 border-b border-white/5 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500/20 to-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={section.icon} />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-white text-sm">{section.title}</h3>
                    <p className="text-xs text-slate-500">
                      {section.items.filter((i) => i.checked).length} of {section.items.length} complete
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <span className="text-sm font-bold text-teal-400">
                      {section.items.length > 0
                        ? Math.round((section.items.filter((i) => i.checked).length / section.items.length) * 100)
                        : 0}%
                    </span>
                  </div>
                </div>

                {/* Section Items */}
                <div className="p-4 space-y-2">
                  {section.items.map((item) => {
                    const priorityStyle = PRIORITY_STYLES[item.priority];
                    return (
                      <div
                        key={item.id}
                        className={`p-4 rounded-xl transition-all ${
                          item.checked ? 'bg-teal-500/5' : 'bg-white/5 hover:bg-white/[0.07]'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          {/* Checkbox */}
                          <button
                            onClick={() => toggleItem(section.id, item.id)}
                            className="relative mt-0.5 flex-shrink-0"
                          >
                            <div
                              className={`w-5 h-5 rounded-md border-2 transition-all flex items-center justify-center ${
                                item.checked
                                  ? 'bg-teal-500 border-teal-500'
                                  : 'border-white/20 hover:border-teal-500/50'
                              }`}
                            >
                              {item.checked && (
                                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                              )}
                            </div>
                          </button>

                          {/* Content */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-2 mb-1">
                              <h4 className={`font-semibold text-sm transition-all ${item.checked ? 'text-slate-500 line-through' : 'text-white'}`}>
                                {item.title}
                              </h4>
                              <span className={`inline-flex items-center text-[10px] font-semibold px-2 py-0.5 rounded-full border flex-shrink-0 ${priorityStyle.bg} ${priorityStyle.text} ${priorityStyle.border}`}>
                                {item.priority}
                              </span>
                            </div>
                            <p className={`text-xs transition-all ${item.checked ? 'text-slate-600' : 'text-slate-400'}`}>
                              {item.description}
                            </p>
                            <div className="flex items-center gap-3 mt-2">
                              <span className="inline-flex items-center gap-1 text-[10px] text-slate-500">
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                {item.estimatedTime}
                              </span>
                              {item.externalLink && (
                                <a
                                  href={item.externalLink}
                                  target={item.externalLink.startsWith('/') ? '_self' : '_blank'}
                                  rel={item.externalLink.startsWith('/') ? undefined : 'noopener noreferrer'}
                                  className="inline-flex items-center gap-1 text-[10px] text-teal-400 hover:text-teal-300 transition-colors"
                                >
                                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                  </svg>
                                  {item.externalLinkLabel || 'Learn more'}
                                </a>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Download / Copy Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handleDownload}
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white font-medium hover:from-teal-400 hover:to-blue-400 transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              {copied ? 'Copied to Clipboard!' : 'Download Checklist'}
            </button>
            <button
              onClick={handleGenerate}
              className="px-6 py-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-500/30 transition-all text-white font-medium"
            >
              Regenerate with New Settings
            </button>
          </div>

          {/* Related Tools */}
          <div className="glass rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white heading-font mb-4">Related Free Tools</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <a
                href="/tools/invoice-generator"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-500/30 rounded-xl p-4 transition-all group"
              >
                <p className="text-white font-medium text-sm group-hover:text-teal-400 transition-colors">
                  Invoice Generator
                </p>
                <p className="text-xs text-slate-500 mt-1">Create your first professional invoice</p>
              </a>
              <a
                href="/tools/contract-generator"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-500/30 rounded-xl p-4 transition-all group"
              >
                <p className="text-white font-medium text-sm group-hover:text-teal-400 transition-colors">
                  Contract Generator
                </p>
                <p className="text-xs text-slate-500 mt-1">Create a freelance service agreement</p>
              </a>
              <a
                href="/tools/rate-calculator"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-500/30 rounded-xl p-4 transition-all group"
              >
                <p className="text-white font-medium text-sm group-hover:text-teal-400 transition-colors">
                  Rate Calculator
                </p>
                <p className="text-xs text-slate-500 mt-1">Calculate your ideal hourly rate</p>
              </a>
              <a
                href="/tools/gst-calculator"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-500/30 rounded-xl p-4 transition-all group"
              >
                <p className="text-white font-medium text-sm group-hover:text-teal-400 transition-colors">
                  GST Calculator
                </p>
                <p className="text-xs text-slate-500 mt-1">Calculate GST on your invoices</p>
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
