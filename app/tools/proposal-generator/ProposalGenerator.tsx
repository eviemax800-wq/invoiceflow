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

/* ─── Types ─── */

type ProjectType =
  | 'website-design'
  | 'web-application'
  | 'brand-identity'
  | 'marketing-campaign'
  | 'consulting'
  | 'content-creation'
  | 'custom';

type PaymentTerms = '50-50' | '3-milestones' | '100-upfront' | 'net-30';

interface Deliverable {
  id: string;
  name: string;
  description: string;
  price: string;
}

interface SellingPoint {
  id: string;
  text: string;
}

interface PortfolioLink {
  id: string;
  label: string;
  url: string;
}

interface TermsConfig {
  revisionRounds: string;
  revisionTurnaround: string;
  cancellationNotice: string;
  ipTransferOnPayment: boolean;
  customTerms: string[];
}

/* ─── Helpers ─── */

let _nextId = 1;
function genId(prefix = 'item') {
  return `${prefix}-${_nextId++}`;
}

const PROJECT_TYPE_OPTIONS: { value: ProjectType; label: string }[] = [
  { value: 'website-design', label: 'Website Design' },
  { value: 'web-application', label: 'Web Application' },
  { value: 'brand-identity', label: 'Brand Identity' },
  { value: 'marketing-campaign', label: 'Marketing Campaign' },
  { value: 'consulting', label: 'Consulting Engagement' },
  { value: 'content-creation', label: 'Content Creation' },
  { value: 'custom', label: 'Custom' },
];

const PAYMENT_TERMS_OPTIONS: { value: PaymentTerms; label: string; description: string }[] = [
  { value: '50-50', label: '50/50 Split', description: '50% deposit upfront, 50% on delivery' },
  { value: '3-milestones', label: '3 Milestones', description: '33% upfront, 33% mid-project, 34% on delivery' },
  { value: '100-upfront', label: '100% Upfront', description: 'Full payment before work begins' },
  { value: 'net-30', label: 'Net 30', description: 'Full payment within 30 days of delivery' },
];

const DELIVERABLE_PRESETS: Record<ProjectType, { name: string; description: string; price: string }[]> = {
  'website-design': [
    { name: 'Discovery & Strategy', description: 'Initial consultation, competitor analysis, sitemap, and wireframes', price: '800' },
    { name: 'Homepage Design', description: 'Custom homepage design with responsive mockups for desktop and mobile', price: '1500' },
    { name: 'Inner Page Templates', description: 'Design and development of up to 4 inner page templates (About, Services, Contact, Blog)', price: '2000' },
    { name: 'Development & Launch', description: 'Frontend development, CMS integration, browser testing, and deployment', price: '2500' },
    { name: 'Post-Launch Support', description: '2 weeks of bug fixes and minor adjustments after launch', price: '500' },
  ],
  'web-application': [
    { name: 'Requirements & Architecture', description: 'Technical requirements gathering, system architecture, and database schema design', price: '2000' },
    { name: 'UI/UX Design', description: 'User flow mapping, wireframes, and high-fidelity design mockups for all screens', price: '3000' },
    { name: 'Frontend Development', description: 'Responsive frontend build with component library and state management', price: '4000' },
    { name: 'Backend & API Development', description: 'Server-side logic, database implementation, API endpoints, and authentication', price: '4000' },
    { name: 'Testing & Deployment', description: 'QA testing, performance optimisation, CI/CD setup, and production deployment', price: '2000' },
  ],
  'brand-identity': [
    { name: 'Brand Discovery', description: 'Brand workshop, competitor audit, mood board, and positioning strategy', price: '600' },
    { name: 'Logo Design', description: '3 initial logo concepts with 2 rounds of refinement on the selected direction', price: '1500' },
    { name: 'Brand Guidelines', description: 'Comprehensive brand guidelines document covering logo usage, colours, typography, and tone of voice', price: '1200' },
    { name: 'Collateral Design', description: 'Business card, letterhead, email signature, and social media templates', price: '800' },
  ],
  'marketing-campaign': [
    { name: 'Campaign Strategy', description: 'Target audience research, channel selection, messaging framework, and campaign brief', price: '600' },
    { name: 'Creative Assets', description: 'Design of ad creatives, social media graphics, and email templates for up to 3 platforms', price: '1200' },
    { name: 'Copywriting', description: 'Ad copy, email sequences, and landing page copy optimised for conversion', price: '800' },
    { name: 'Campaign Setup & Launch', description: 'Platform setup, audience targeting, A/B test configuration, and campaign launch', price: '600' },
    { name: 'Performance Report', description: 'End-of-campaign analytics report with ROI analysis and recommendations for next steps', price: '400' },
  ],
  consulting: [
    { name: 'Discovery Audit', description: 'Comprehensive review of current systems, processes, and pain points', price: '600' },
    { name: 'Strategy & Recommendations', description: 'Detailed strategy document with prioritised action items and implementation roadmap', price: '900' },
    { name: 'Implementation Support', description: 'Up to 3 working sessions to support your team during implementation', price: '900' },
  ],
  'content-creation': [
    { name: 'Content Strategy', description: 'Audience research, keyword analysis, content calendar, and topic plan', price: '400' },
    { name: 'Content Production', description: 'Writing, editing, and formatting of up to 8 pieces of content (blog posts, articles, or guides)', price: '1200' },
    { name: 'SEO Optimisation', description: 'On-page SEO optimisation including meta tags, internal linking, and schema markup', price: '300' },
  ],
  custom: [],
};

const SELLING_POINT_PRESETS: Record<ProjectType, string[]> = {
  'website-design': [
    'Over 5 years of experience designing websites for Australian businesses',
    'Mobile-first approach — every site is responsive from the ground up',
    'Proven track record of delivering projects on time and within budget',
    'Ongoing support and maintenance available after launch',
  ],
  'web-application': [
    'Full-stack development expertise with modern frameworks (React, Next.js, Node.js)',
    'Experience building scalable applications used by thousands of users',
    'Clean, maintainable code with comprehensive documentation',
    'Post-launch support and optional maintenance plans available',
  ],
  'brand-identity': [
    'Designed brand identities for 50+ businesses across diverse industries',
    'Strategic approach that connects brand visuals to business objectives',
    'All source files delivered in every format you will ever need',
    'Collaborative process with clear milestones and feedback loops',
  ],
  'marketing-campaign': [
    'Data-driven approach with measurable KPIs and transparent reporting',
    'Experience managing campaigns across Google, Meta, LinkedIn, and TikTok',
    'Track record of delivering positive ROI within the first campaign cycle',
    'Continuous optimisation throughout the campaign for best results',
  ],
  consulting: [
    'Senior-level consulting with 10+ years of industry experience',
    'Actionable recommendations — not just theory, but implementation-ready plans',
    'Flexible engagement structure that adapts to your needs',
    'Confidential, independent advice with no vendor affiliations',
  ],
  'content-creation': [
    'SEO-first approach that drives organic traffic and conversions',
    'Published work in major industry publications and high-authority blogs',
    'Research-driven content that builds authority and trust with your audience',
    'Quick turnaround times without compromising on quality',
  ],
  custom: [
    'Dedicated communication throughout the project with regular updates',
    'Quality-focused approach with attention to detail on every deliverable',
    'Flexible process that adapts to your feedback and priorities',
  ],
};

/* ─── Component ─── */

export default function ProposalGenerator() {
  /* ── Tab 0: Your Details ── */
  const [businessName, setBusinessName] = useState('');
  const [abn, setAbn] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [website, setWebsite] = useState('');

  /* ── Tab 1: Client Details ── */
  const [clientName, setClientName] = useState('');
  const [clientCompany, setClientCompany] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [projectTitle, setProjectTitle] = useState('');

  /* ── Tab 2: Project Overview ── */
  const [projectType, setProjectType] = useState<ProjectType>('website-design');
  const [projectDescription, setProjectDescription] = useState('');
  const [objectives, setObjectives] = useState<string[]>(['']);
  const [startDate, setStartDate] = useState('');
  const [durationWeeks, setDurationWeeks] = useState('6');

  /* ── Tab 3: Deliverables & Pricing ── */
  const [deliverables, setDeliverables] = useState<Deliverable[]>([
    { id: genId('d'), name: '', description: '', price: '' },
  ]);
  const [includeGST, setIncludeGST] = useState(false);
  const [discountPercent, setDiscountPercent] = useState('');
  const [paymentTerms, setPaymentTerms] = useState<PaymentTerms>('50-50');
  const [validityDays, setValidityDays] = useState('14');

  /* ── Tab 4: Why Choose Me ── */
  const [sellingPoints, setSellingPoints] = useState<SellingPoint[]>([
    { id: genId('sp'), text: '' },
  ]);
  const [portfolioLinks, setPortfolioLinks] = useState<PortfolioLink[]>([]);
  const [testimonialQuote, setTestimonialQuote] = useState('');
  const [testimonialAuthor, setTestimonialAuthor] = useState('');

  /* ── Tab 5: Terms & Conditions ── */
  const [terms, setTerms] = useState<TermsConfig>({
    revisionRounds: '2',
    revisionTurnaround: '3',
    cancellationNotice: '14',
    ipTransferOnPayment: true,
    customTerms: [],
  });

  /* ── UI State ── */
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  /* ── Computed Values ── */
  const subtotal = useMemo(() => {
    return deliverables.reduce((sum, d) => sum + (parseFloat(d.price) || 0), 0);
  }, [deliverables]);

  const discountAmount = useMemo(() => {
    const pct = parseFloat(discountPercent) || 0;
    return subtotal * (pct / 100);
  }, [subtotal, discountPercent]);

  const gstAmount = useMemo(() => {
    return includeGST ? (subtotal - discountAmount) * 0.1 : 0;
  }, [subtotal, discountAmount, includeGST]);

  const totalValue = useMemo(() => {
    return subtotal - discountAmount + gstAmount;
  }, [subtotal, discountAmount, gstAmount]);

  const endDate = useMemo(() => {
    if (!startDate) return '';
    const start = new Date(startDate);
    const weeks = parseInt(durationWeeks) || 0;
    start.setDate(start.getDate() + weeks * 7);
    return start.toISOString().split('T')[0];
  }, [startDate, durationWeeks]);

  const paymentMilestones = useMemo(() => {
    switch (paymentTerms) {
      case '50-50':
        return [
          { label: 'Deposit (on acceptance)', amount: totalValue * 0.5 },
          { label: 'Final payment (on delivery)', amount: totalValue * 0.5 },
        ];
      case '3-milestones':
        return [
          { label: 'Deposit (on acceptance)', amount: totalValue * 0.33 },
          { label: 'Mid-project milestone', amount: totalValue * 0.33 },
          { label: 'Final payment (on delivery)', amount: totalValue * 0.34 },
        ];
      case '100-upfront':
        return [{ label: 'Full payment (before project starts)', amount: totalValue }];
      case 'net-30':
        return [{ label: 'Full payment (within 30 days of delivery)', amount: totalValue }];
    }
  }, [paymentTerms, totalValue]);

  /* ── Format date for display ── */
  const formatDate = (dateStr: string) => {
    if (!dateStr) return 'TBD';
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' });
  };

  /* ── Load Presets ── */
  const loadDeliverablePresets = () => {
    const presets = DELIVERABLE_PRESETS[projectType];
    if (presets.length === 0) return;
    setDeliverables(
      presets.map((p) => ({
        id: genId('d'),
        name: p.name,
        description: p.description,
        price: p.price,
      }))
    );
  };

  const loadSellingPointPresets = () => {
    const presets = SELLING_POINT_PRESETS[projectType] || SELLING_POINT_PRESETS.custom;
    setSellingPoints(presets.map((text) => ({ id: genId('sp'), text })));
  };

  /* ── Deliverable Actions ── */
  const addDeliverable = () => {
    setDeliverables([...deliverables, { id: genId('d'), name: '', description: '', price: '' }]);
  };
  const removeDeliverable = (id: string) => {
    if (deliverables.length > 1) setDeliverables(deliverables.filter((d) => d.id !== id));
  };
  const updateDeliverable = (id: string, field: keyof Deliverable, value: string) => {
    setDeliverables(deliverables.map((d) => (d.id === id ? { ...d, [field]: value } : d)));
  };

  /* ── Objective Actions ── */
  const addObjective = () => setObjectives([...objectives, '']);
  const removeObjective = (idx: number) => {
    if (objectives.length > 1) setObjectives(objectives.filter((_, i) => i !== idx));
  };
  const updateObjective = (idx: number, value: string) =>
    setObjectives(objectives.map((item, i) => (i === idx ? value : item)));

  /* ── Selling Point Actions ── */
  const addSellingPoint = () => {
    setSellingPoints([...sellingPoints, { id: genId('sp'), text: '' }]);
  };
  const removeSellingPoint = (id: string) => {
    if (sellingPoints.length > 1) setSellingPoints(sellingPoints.filter((sp) => sp.id !== id));
  };
  const updateSellingPoint = (id: string, value: string) => {
    setSellingPoints(sellingPoints.map((sp) => (sp.id === id ? { ...sp, text: value } : sp)));
  };

  /* ── Portfolio Link Actions ── */
  const addPortfolioLink = () => {
    setPortfolioLinks([...portfolioLinks, { id: genId('pl'), label: '', url: '' }]);
  };
  const removePortfolioLink = (id: string) => {
    setPortfolioLinks(portfolioLinks.filter((pl) => pl.id !== id));
  };
  const updatePortfolioLink = (id: string, field: 'label' | 'url', value: string) => {
    setPortfolioLinks(portfolioLinks.map((pl) => (pl.id === id ? { ...pl, [field]: value } : pl)));
  };

  /* ── Custom Terms Actions ── */
  const addCustomTerm = () => setTerms({ ...terms, customTerms: [...terms.customTerms, ''] });
  const removeCustomTerm = (idx: number) =>
    setTerms({ ...terms, customTerms: terms.customTerms.filter((_, i) => i !== idx) });
  const updateCustomTerm = (idx: number, value: string) =>
    setTerms({ ...terms, customTerms: terms.customTerms.map((t, i) => (i === idx ? value : t)) });

  /* ── Generate Plain-Text Proposal ── */
  const generateProposalText = () => {
    const divider = '================================================================';
    const sectionDivider = '----------------------------------------------------------------';
    const lines: string[] = [];

    lines.push(divider);
    lines.push('PROJECT PROPOSAL');
    lines.push(divider);
    lines.push('');

    // Your Details
    lines.push(`From: ${businessName || '[Your Business Name]'}`);
    if (abn) lines.push(`ABN: ${abn}`);
    if (contactEmail) lines.push(`Email: ${contactEmail}`);
    if (contactPhone) lines.push(`Phone: ${contactPhone}`);
    if (website) lines.push(`Website: ${website}`);
    lines.push('');

    // Client Details
    lines.push(`To: ${clientName || '[Client Name]'}`);
    if (clientCompany) lines.push(`Company: ${clientCompany}`);
    if (clientEmail) lines.push(`Email: ${clientEmail}`);
    lines.push('');
    lines.push(`Project: ${projectTitle || 'Untitled Project'}`);
    lines.push(`Date: ${formatDate(new Date().toISOString().split('T')[0])}`);
    if (validityDays) lines.push(`Proposal Valid For: ${validityDays} days`);
    lines.push('');

    // Project Overview
    lines.push('PROJECT OVERVIEW');
    lines.push(sectionDivider);
    if (projectDescription) {
      lines.push(projectDescription);
      lines.push('');
    }
    const filledObjectives = objectives.filter(Boolean);
    if (filledObjectives.length > 0) {
      lines.push('Objectives:');
      filledObjectives.forEach((obj, i) => {
        lines.push(`  ${i + 1}. ${obj}`);
      });
      lines.push('');
    }
    lines.push(`Timeline: ${durationWeeks} weeks`);
    lines.push(`Start Date: ${formatDate(startDate)}`);
    lines.push(`Estimated Completion: ${endDate ? formatDate(endDate) : 'TBD'}`);
    lines.push('');

    // Deliverables & Pricing
    lines.push('DELIVERABLES & PRICING');
    lines.push(sectionDivider);
    const filledDeliverables = deliverables.filter((d) => d.name);
    filledDeliverables.forEach((d, i) => {
      const price = parseFloat(d.price) || 0;
      lines.push(`${i + 1}. ${d.name} — ${formatCurrency(price)}`);
      if (d.description) lines.push(`   ${d.description}`);
    });
    lines.push('');
    lines.push(`Subtotal: ${formatCurrency(subtotal)}`);
    if (discountAmount > 0) {
      lines.push(`Discount (${discountPercent}%): -${formatCurrency(discountAmount)}`);
    }
    if (includeGST) {
      lines.push(`GST (10%): ${formatCurrency(gstAmount)}`);
    }
    lines.push(`TOTAL: ${formatCurrency(totalValue)}${includeGST ? ' (incl. GST)' : ' (ex. GST)'}`);
    lines.push('');

    // Payment Terms
    lines.push('PAYMENT SCHEDULE');
    lines.push(sectionDivider);
    const termsOption = PAYMENT_TERMS_OPTIONS.find((o) => o.value === paymentTerms);
    lines.push(`Payment Structure: ${termsOption?.label || paymentTerms}`);
    paymentMilestones.forEach((m, i) => {
      lines.push(`  ${i + 1}. ${m.label} — ${formatCurrency(Math.round(m.amount))}`);
    });
    lines.push('');

    // Why Choose Me
    const filledSellingPoints = sellingPoints.filter((sp) => sp.text);
    const filledPortfolioLinks = portfolioLinks.filter((pl) => pl.label || pl.url);
    if (filledSellingPoints.length > 0 || testimonialQuote || filledPortfolioLinks.length > 0) {
      lines.push('WHY CHOOSE ME');
      lines.push(sectionDivider);
      filledSellingPoints.forEach((sp) => {
        lines.push(`  * ${sp.text}`);
      });
      if (filledPortfolioLinks.length > 0) {
        lines.push('');
        lines.push('Portfolio:');
        filledPortfolioLinks.forEach((pl) => {
          lines.push(`  - ${pl.label || 'Link'}: ${pl.url}`);
        });
      }
      if (testimonialQuote) {
        lines.push('');
        lines.push(`"${testimonialQuote}"`);
        if (testimonialAuthor) lines.push(`  — ${testimonialAuthor}`);
      }
      lines.push('');
    }

    // Terms & Conditions
    lines.push('TERMS & CONDITIONS');
    lines.push(sectionDivider);
    lines.push(`* ${terms.revisionRounds} rounds of revisions included in the project fee.`);
    lines.push(`* Revisions will be turned around within ${terms.revisionTurnaround} business days.`);
    lines.push(`* Either party may cancel with ${terms.cancellationNotice} days written notice.`);
    if (terms.ipTransferOnPayment) {
      lines.push('* All intellectual property transfers to the client upon receipt of final payment.');
    }
    lines.push('* Additional revisions beyond the included rounds will be quoted separately.');
    lines.push('* This proposal is valid for ' + (validityDays || '14') + ' days from the date above.');
    terms.customTerms.filter(Boolean).forEach((t) => {
      lines.push(`* ${t}`);
    });
    lines.push('');

    // Next Steps
    lines.push('NEXT STEPS');
    lines.push(sectionDivider);
    lines.push('To proceed with this project:');
    lines.push('  1. Reply to confirm your acceptance of this proposal');
    lines.push('  2. I will send a formal contract/scope of work for signing');
    lines.push('  3. Upon signing, the deposit invoice will be issued');
    lines.push('  4. Work begins on the agreed start date');
    lines.push('');
    lines.push('I look forward to working with you.');
    lines.push('');
    lines.push(divider);
    lines.push('Generated at invoiceflow.au/tools/proposal-generator');

    return lines.join('\n');
  };

  /* ── Copy Handlers ── */
  const handleCopyFull = () => {
    navigator.clipboard.writeText(generateProposalText()).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const handleCopySection = (key: string, text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedSection(key);
      setTimeout(() => setCopiedSection(null), 2000);
    });
  };

  /* ── Styles ── */
  const inputClass =
    'w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500/40 focus:border-teal-500/40 transition-all text-sm';
  const labelClass = 'block text-xs font-medium text-slate-400 mb-1.5';

  const tabs = [
    'Your Details',
    'Client Details',
    'Project Overview',
    'Deliverables & Pricing',
    'Why Choose Me',
    'Terms & Conditions',
    'Preview',
  ];

  const projectTypeLabel = PROJECT_TYPE_OPTIONS.find((o) => o.value === projectType)?.label || 'Custom';

  return (
    <div className="space-y-6">
      {/* Tab Navigation */}
      <div className="glass rounded-2xl p-4">
        <div className="flex flex-wrap gap-2">
          {tabs.map((tab, i) => (
            <button
              key={tab}
              onClick={() => setActiveTab(i)}
              className={`text-sm px-4 py-2 rounded-lg transition-all ${
                activeTab === i
                  ? 'bg-gradient-to-r from-teal-500 to-blue-500 text-white font-medium'
                  : 'bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Key Metrics Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="bg-gradient-to-br from-teal-500/10 to-blue-500/10 border border-teal-500/20 rounded-xl p-3 text-center">
          <p className="text-xs text-teal-400/70 uppercase tracking-wide">Total Value</p>
          <p className="text-lg font-bold gradient-text">{formatCurrency(totalValue)}</p>
        </div>
        <div className="bg-white/5 rounded-xl p-3 text-center">
          <p className="text-xs text-slate-500 uppercase tracking-wide">Deliverables</p>
          <p className="text-lg font-bold text-white">{deliverables.filter((d) => d.name).length}</p>
        </div>
        <div className="bg-white/5 rounded-xl p-3 text-center">
          <p className="text-xs text-slate-500 uppercase tracking-wide">Duration</p>
          <p className="text-lg font-bold text-white">
            {durationWeeks} <span className="text-xs text-slate-500">weeks</span>
          </p>
        </div>
        <div className="bg-white/5 rounded-xl p-3 text-center">
          <p className="text-xs text-slate-500 uppercase tracking-wide">Milestones</p>
          <p className="text-lg font-bold text-white">{paymentMilestones.length}</p>
        </div>
      </div>

      {/* Tab 0: Your Details */}
      {activeTab === 0 && (
        <div className="glass rounded-2xl p-6 sm:p-8 space-y-6">
          <h2 className="text-xl font-bold text-white heading-font">Your Details</h2>
          <p className="text-sm text-slate-400">
            Your business information appears in the proposal header. Include your ABN for
            credibility with Australian clients.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Business Name</label>
              <input
                type="text"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                className={inputClass}
                placeholder="e.g. Jane Smith Design"
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
                placeholder="e.g. hello@janesmith.com.au"
              />
            </div>
            <div>
              <label className={labelClass}>Phone</label>
              <input
                type="tel"
                value={contactPhone}
                onChange={(e) => setContactPhone(e.target.value)}
                className={inputClass}
                placeholder="e.g. 0400 123 456"
              />
            </div>
            <div className="sm:col-span-2">
              <label className={labelClass}>Website</label>
              <input
                type="url"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                className={inputClass}
                placeholder="e.g. https://janesmith.com.au"
              />
            </div>
          </div>

          <div className="flex justify-end">
            <button
              onClick={() => setActiveTab(1)}
              className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Next: Client Details
            </button>
          </div>
        </div>
      )}

      {/* Tab 1: Client Details */}
      {activeTab === 1 && (
        <div className="glass rounded-2xl p-6 sm:p-8 space-y-6">
          <h2 className="text-xl font-bold text-white heading-font">Client Details</h2>
          <p className="text-sm text-slate-400">
            Personalising the proposal with the client&apos;s name and project title makes it
            feel tailored — not templated.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Client Name</label>
              <input
                type="text"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                className={inputClass}
                placeholder="e.g. John Davis"
              />
            </div>
            <div>
              <label className={labelClass}>Company</label>
              <input
                type="text"
                value={clientCompany}
                onChange={(e) => setClientCompany(e.target.value)}
                className={inputClass}
                placeholder="e.g. Acme Pty Ltd"
              />
            </div>
            <div>
              <label className={labelClass}>Client Email</label>
              <input
                type="email"
                value={clientEmail}
                onChange={(e) => setClientEmail(e.target.value)}
                className={inputClass}
                placeholder="e.g. john@acme.com.au"
              />
            </div>
            <div>
              <label className={labelClass}>Project Title</label>
              <input
                type="text"
                value={projectTitle}
                onChange={(e) => setProjectTitle(e.target.value)}
                className={inputClass}
                placeholder="e.g. Website Redesign for Acme"
              />
            </div>
          </div>

          <div className="flex justify-between">
            <button
              onClick={() => setActiveTab(0)}
              className="px-5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-white/10 transition-all"
            >
              Back
            </button>
            <button
              onClick={() => setActiveTab(2)}
              className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Next: Project Overview
            </button>
          </div>
        </div>
      )}

      {/* Tab 2: Project Overview */}
      {activeTab === 2 && (
        <div className="glass rounded-2xl p-6 sm:p-8 space-y-6">
          <h2 className="text-xl font-bold text-white heading-font">Project Overview</h2>
          <p className="text-sm text-slate-400">
            Describe what the project involves, its objectives, and the expected timeline.
            This sets context for the deliverables and pricing that follow.
          </p>

          <div>
            <label className={labelClass}>Project Type</label>
            <select
              value={projectType}
              onChange={(e) => setProjectType(e.target.value as ProjectType)}
              className={inputClass}
            >
              {PROJECT_TYPE_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value} className="bg-slate-800">
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className={labelClass}>Project Description</label>
            <textarea
              value={projectDescription}
              onChange={(e) => setProjectDescription(e.target.value)}
              className={`${inputClass} min-h-[120px] resize-y`}
              placeholder="Describe the project, its goals, and the problem it solves for the client..."
              rows={5}
            />
          </div>

          {/* Objectives */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className={labelClass}>Project Objectives</label>
              <button
                onClick={addObjective}
                className="text-xs px-3 py-1 rounded-lg bg-teal-500/20 border border-teal-500/30 text-teal-400 hover:bg-teal-500/30 transition-all"
              >
                + Add Objective
              </button>
            </div>
            {objectives.map((obj, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <span className="text-teal-400 text-sm flex-shrink-0 w-6 text-center">{idx + 1}.</span>
                <input
                  type="text"
                  value={obj}
                  onChange={(e) => updateObjective(idx, e.target.value)}
                  className={inputClass}
                  placeholder="e.g. Increase online conversions by 30%"
                />
                {objectives.length > 1 && (
                  <button
                    onClick={() => removeObjective(idx)}
                    className="text-slate-500 hover:text-rose-400 transition-colors text-xs flex-shrink-0 px-2"
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Timeline */}
          <div className="grid sm:grid-cols-3 gap-4">
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
              <label className={labelClass}>Duration (weeks)</label>
              <input
                type="number"
                value={durationWeeks}
                onChange={(e) => setDurationWeeks(e.target.value)}
                className={inputClass}
                placeholder="6"
                min="1"
                max="52"
              />
            </div>
            <div>
              <label className={labelClass}>Estimated Completion</label>
              <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-slate-300 text-sm">
                {endDate ? formatDate(endDate) : 'Set start date & duration'}
              </div>
            </div>
          </div>

          <div className="flex justify-between">
            <button
              onClick={() => setActiveTab(1)}
              className="px-5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-white/10 transition-all"
            >
              Back
            </button>
            <button
              onClick={() => setActiveTab(3)}
              className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Next: Deliverables &amp; Pricing
            </button>
          </div>
        </div>
      )}

      {/* Tab 3: Deliverables & Pricing */}
      {activeTab === 3 && (
        <div className="glass rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-white heading-font">Deliverables &amp; Pricing</h2>
            <div className="flex gap-2">
              <button
                onClick={loadDeliverablePresets}
                className="text-xs px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-all"
              >
                Load {projectTypeLabel} Presets
              </button>
              <button
                onClick={addDeliverable}
                className="flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white hover:opacity-90 transition-opacity"
              >
                + Add Item
              </button>
            </div>
          </div>
          <p className="text-sm text-slate-400">
            List every deliverable with a clear description and price. Specific deliverables
            build client confidence and protect against scope creep.
          </p>

          {/* Deliverable Items */}
          <div className="space-y-3">
            {deliverables.map((d, idx) => (
              <div key={d.id} className="bg-white/5 rounded-xl p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-slate-500">Deliverable {idx + 1}</span>
                  {deliverables.length > 1 && (
                    <button
                      onClick={() => removeDeliverable(d.id)}
                      className="text-slate-500 hover:text-rose-400 transition-colors text-xs"
                    >
                      Remove
                    </button>
                  )}
                </div>
                <div className="grid sm:grid-cols-3 gap-3">
                  <div>
                    <label className={labelClass}>Name</label>
                    <input
                      type="text"
                      value={d.name}
                      onChange={(e) => updateDeliverable(d.id, 'name', e.target.value)}
                      className={inputClass}
                      placeholder="e.g. Homepage Design"
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Description</label>
                    <input
                      type="text"
                      value={d.description}
                      onChange={(e) => updateDeliverable(d.id, 'description', e.target.value)}
                      className={inputClass}
                      placeholder="e.g. Custom responsive design"
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Price ($)</label>
                    <input
                      type="number"
                      value={d.price}
                      onChange={(e) => updateDeliverable(d.id, 'price', e.target.value)}
                      className={inputClass}
                      placeholder="1500"
                      min="0"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pricing Summary */}
          <div className="bg-white/5 rounded-xl p-4 space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-400">Subtotal</span>
              <span className="text-white font-medium">{formatCurrency(subtotal)}</span>
            </div>

            {/* GST Toggle */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIncludeGST(!includeGST)}
                  className={`relative w-12 h-6 rounded-full transition-colors ${includeGST ? 'bg-teal-500' : 'bg-white/20'}`}
                >
                  <div className={`absolute top-0.5 w-5 h-5 rounded-full bg-white transition-transform ${includeGST ? 'translate-x-6' : 'translate-x-0.5'}`} />
                </button>
                <span className="text-sm text-slate-400">Include GST (10%)</span>
              </div>
              {includeGST && (
                <span className="text-sm text-white">{formatCurrency(gstAmount)}</span>
              )}
            </div>

            {/* Discount */}
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3 flex-1">
                <label className="text-sm text-slate-400 flex-shrink-0">Discount</label>
                <div className="relative max-w-[100px]">
                  <input
                    type="number"
                    value={discountPercent}
                    onChange={(e) => setDiscountPercent(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/40 focus:border-teal-500/40"
                    placeholder="0"
                    min="0"
                    max="100"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 text-xs">%</span>
                </div>
              </div>
              {discountAmount > 0 && (
                <span className="text-sm text-rose-400">-{formatCurrency(discountAmount)}</span>
              )}
            </div>

            <div className="border-t border-white/10 pt-3 flex items-center justify-between">
              <span className="text-white font-semibold">Total</span>
              <span className="text-lg font-bold gradient-text">
                {formatCurrency(totalValue)}
                <span className="text-xs text-slate-500 ml-1">
                  {includeGST ? '(incl. GST)' : '(ex. GST)'}
                </span>
              </span>
            </div>
          </div>

          {/* Payment Terms */}
          <div>
            <label className={labelClass}>Payment Terms</label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-1">
              {PAYMENT_TERMS_OPTIONS.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setPaymentTerms(opt.value)}
                  className={`text-sm py-2.5 px-2 rounded-xl border transition-all text-center ${
                    paymentTerms === opt.value
                      ? 'bg-gradient-to-r from-teal-500/20 to-blue-500/20 border-teal-500/40 text-white font-medium'
                      : 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <p className="font-medium text-xs">{opt.label}</p>
                </button>
              ))}
            </div>
            <div className="mt-3 space-y-2">
              {paymentMilestones.map((m, i) => (
                <div key={i} className="bg-white/5 rounded-lg p-3 flex items-center justify-between text-sm">
                  <span className="text-slate-300">{m.label}</span>
                  <span className="text-white font-medium">{formatCurrency(Math.round(m.amount))}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Validity Period */}
          <div className="max-w-xs">
            <label className={labelClass}>Proposal Validity (days)</label>
            <input
              type="number"
              value={validityDays}
              onChange={(e) => setValidityDays(e.target.value)}
              className={inputClass}
              placeholder="14"
              min="1"
              max="90"
            />
          </div>

          <div className="flex justify-between">
            <button
              onClick={() => setActiveTab(2)}
              className="px-5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-white/10 transition-all"
            >
              Back
            </button>
            <button
              onClick={() => setActiveTab(4)}
              className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Next: Why Choose Me
            </button>
          </div>
        </div>
      )}

      {/* Tab 4: Why Choose Me */}
      {activeTab === 4 && (
        <div className="glass rounded-2xl p-6 sm:p-8 space-y-6">
          <h2 className="text-xl font-bold text-white heading-font">Why Choose Me</h2>
          <p className="text-sm text-slate-400">
            This is your chance to differentiate. Highlight your strengths, link to relevant
            work, and include social proof.
          </p>

          {/* Selling Points */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-white font-semibold text-sm">Selling Points</h3>
              <div className="flex gap-2">
                <button
                  onClick={loadSellingPointPresets}
                  className="text-xs px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-all"
                >
                  Load {projectTypeLabel} Presets
                </button>
                <button
                  onClick={addSellingPoint}
                  className="text-xs px-3 py-1 rounded-lg bg-teal-500/20 border border-teal-500/30 text-teal-400 hover:bg-teal-500/30 transition-all"
                >
                  + Add
                </button>
              </div>
            </div>
            {sellingPoints.map((sp) => (
              <div key={sp.id} className="flex items-center gap-2">
                <span className="text-teal-400 text-sm flex-shrink-0">*</span>
                <input
                  type="text"
                  value={sp.text}
                  onChange={(e) => updateSellingPoint(sp.id, e.target.value)}
                  className={inputClass}
                  placeholder="e.g. 10+ years experience building websites for Australian businesses"
                />
                {sellingPoints.length > 1 && (
                  <button
                    onClick={() => removeSellingPoint(sp.id)}
                    className="text-slate-500 hover:text-rose-400 transition-colors text-xs flex-shrink-0 px-2"
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Portfolio Links */}
          <div className="space-y-3 pt-4 border-t border-white/5">
            <div className="flex items-center justify-between">
              <h3 className="text-white font-semibold text-sm">Portfolio Links</h3>
              <button
                onClick={addPortfolioLink}
                className="text-xs px-3 py-1 rounded-lg bg-teal-500/20 border border-teal-500/30 text-teal-400 hover:bg-teal-500/30 transition-all"
              >
                + Add Link
              </button>
            </div>
            {portfolioLinks.length === 0 && (
              <p className="text-xs text-slate-500">No portfolio links added. Click &ldquo;+ Add Link&rdquo; to include examples of your work.</p>
            )}
            {portfolioLinks.map((pl) => (
              <div key={pl.id} className="flex items-center gap-2">
                <input
                  type="text"
                  value={pl.label}
                  onChange={(e) => updatePortfolioLink(pl.id, 'label', e.target.value)}
                  className={`${inputClass} max-w-[200px]`}
                  placeholder="Label"
                />
                <input
                  type="url"
                  value={pl.url}
                  onChange={(e) => updatePortfolioLink(pl.id, 'url', e.target.value)}
                  className={inputClass}
                  placeholder="https://..."
                />
                <button
                  onClick={() => removePortfolioLink(pl.id)}
                  className="text-slate-500 hover:text-rose-400 transition-colors text-xs flex-shrink-0 px-2"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Testimonial */}
          <div className="space-y-3 pt-4 border-t border-white/5">
            <h3 className="text-white font-semibold text-sm">Client Testimonial (optional)</h3>
            <div>
              <label className={labelClass}>Quote</label>
              <textarea
                value={testimonialQuote}
                onChange={(e) => setTestimonialQuote(e.target.value)}
                className={`${inputClass} min-h-[80px] resize-y`}
                placeholder="e.g. Working with Jane was a fantastic experience. She delivered on time, communicated clearly, and the final product exceeded our expectations."
                rows={3}
              />
            </div>
            <div className="max-w-xs">
              <label className={labelClass}>Author</label>
              <input
                type="text"
                value={testimonialAuthor}
                onChange={(e) => setTestimonialAuthor(e.target.value)}
                className={inputClass}
                placeholder="e.g. Sarah L., CEO at TechCorp"
              />
            </div>
          </div>

          <div className="flex justify-between">
            <button
              onClick={() => setActiveTab(3)}
              className="px-5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-white/10 transition-all"
            >
              Back
            </button>
            <button
              onClick={() => setActiveTab(5)}
              className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Next: Terms &amp; Conditions
            </button>
          </div>
        </div>
      )}

      {/* Tab 5: Terms & Conditions */}
      {activeTab === 5 && (
        <div className="glass rounded-2xl p-6 sm:p-8 space-y-6">
          <h2 className="text-xl font-bold text-white heading-font">Terms &amp; Conditions</h2>
          <p className="text-sm text-slate-400">
            Set clear expectations around revisions, cancellations, and intellectual property.
            These defaults cover the essentials — customise as needed.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Revision Rounds Included</label>
              <input
                type="number"
                value={terms.revisionRounds}
                onChange={(e) => setTerms({ ...terms, revisionRounds: e.target.value })}
                className={inputClass}
                placeholder="2"
                min="0"
                max="10"
              />
            </div>
            <div>
              <label className={labelClass}>Revision Turnaround (business days)</label>
              <input
                type="number"
                value={terms.revisionTurnaround}
                onChange={(e) => setTerms({ ...terms, revisionTurnaround: e.target.value })}
                className={inputClass}
                placeholder="3"
                min="1"
                max="30"
              />
            </div>
            <div>
              <label className={labelClass}>Cancellation Notice Period (days)</label>
              <input
                type="number"
                value={terms.cancellationNotice}
                onChange={(e) => setTerms({ ...terms, cancellationNotice: e.target.value })}
                className={inputClass}
                placeholder="14"
                min="1"
                max="90"
              />
            </div>
            <div className="flex items-center gap-3 self-end pb-1">
              <button
                onClick={() => setTerms({ ...terms, ipTransferOnPayment: !terms.ipTransferOnPayment })}
                className={`relative w-12 h-6 rounded-full transition-colors ${terms.ipTransferOnPayment ? 'bg-teal-500' : 'bg-white/20'}`}
              >
                <div className={`absolute top-0.5 w-5 h-5 rounded-full bg-white transition-transform ${terms.ipTransferOnPayment ? 'translate-x-6' : 'translate-x-0.5'}`} />
              </button>
              <span className="text-sm text-slate-400">IP transfers to client on final payment</span>
            </div>
          </div>

          {/* Default Terms Preview */}
          <div className="bg-white/5 rounded-xl p-4 space-y-2">
            <p className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-2">Included Terms</p>
            <div className="space-y-1.5 text-sm text-slate-300">
              <p className="flex items-start gap-2">
                <span className="text-slate-500 mt-0.5 flex-shrink-0">&bull;</span>
                {terms.revisionRounds} rounds of revisions included in the project fee.
              </p>
              <p className="flex items-start gap-2">
                <span className="text-slate-500 mt-0.5 flex-shrink-0">&bull;</span>
                Revisions will be turned around within {terms.revisionTurnaround} business days.
              </p>
              <p className="flex items-start gap-2">
                <span className="text-slate-500 mt-0.5 flex-shrink-0">&bull;</span>
                Either party may cancel with {terms.cancellationNotice} days written notice.
              </p>
              {terms.ipTransferOnPayment && (
                <p className="flex items-start gap-2">
                  <span className="text-slate-500 mt-0.5 flex-shrink-0">&bull;</span>
                  All intellectual property transfers to the client upon receipt of final payment.
                </p>
              )}
              <p className="flex items-start gap-2">
                <span className="text-slate-500 mt-0.5 flex-shrink-0">&bull;</span>
                Additional revisions beyond the included rounds will be quoted separately.
              </p>
              <p className="flex items-start gap-2">
                <span className="text-slate-500 mt-0.5 flex-shrink-0">&bull;</span>
                This proposal is valid for {validityDays || '14'} days from the date of issue.
              </p>
            </div>
          </div>

          {/* Custom Terms */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-white font-semibold text-sm">Additional Terms</h3>
              <button
                onClick={addCustomTerm}
                className="text-xs px-3 py-1 rounded-lg bg-teal-500/20 border border-teal-500/30 text-teal-400 hover:bg-teal-500/30 transition-all"
              >
                + Add Term
              </button>
            </div>
            {terms.customTerms.length === 0 && (
              <p className="text-xs text-slate-500">
                No additional terms. Click &ldquo;+ Add Term&rdquo; to include custom clauses.
              </p>
            )}
            {terms.customTerms.map((t, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <span className="text-slate-500 text-sm flex-shrink-0">&bull;</span>
                <input
                  type="text"
                  value={t}
                  onChange={(e) => updateCustomTerm(idx, e.target.value)}
                  className={inputClass}
                  placeholder="e.g. All content must be provided by the client within 2 weeks of project start"
                />
                <button
                  onClick={() => removeCustomTerm(idx)}
                  className="text-slate-500 hover:text-rose-400 transition-colors text-xs flex-shrink-0 px-2"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="flex justify-between">
            <button
              onClick={() => setActiveTab(4)}
              className="px-5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-white/10 transition-all"
            >
              Back
            </button>
            <button
              onClick={() => setActiveTab(6)}
              className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Generate Proposal Preview
            </button>
          </div>
        </div>
      )}

      {/* Tab 6: Preview */}
      {activeTab === 6 && (
        <div className="glass rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-white heading-font">Proposal Preview</h2>
            <button
              onClick={handleCopyFull}
              className="flex items-center gap-2 text-sm px-4 py-2 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white hover:opacity-90 transition-opacity"
            >
              {copied ? 'Copied!' : 'Copy Full Proposal'}
            </button>
          </div>

          {/* Preview Document */}
          <div className="bg-slate-900/50 rounded-2xl border border-white/10 overflow-hidden">
            {/* Document Header */}
            <div className="bg-gradient-to-r from-teal-500/10 to-blue-500/10 border-b border-white/10 p-6 sm:p-8">
              <p className="text-xs text-teal-400 uppercase tracking-widest mb-2">Project Proposal</p>
              <h3 className="text-2xl font-bold text-white heading-font">
                {projectTitle || 'Untitled Project'}
              </h3>
              <p className="text-slate-400 mt-1">
                Prepared for {clientName || 'Client Name'}
                {clientCompany ? ` at ${clientCompany}` : ''} &middot; {projectTypeLabel}
              </p>
              <div className="flex flex-wrap gap-4 mt-4 text-xs text-slate-500">
                <span>From: {businessName || 'Your Business Name'}</span>
                {abn && <span>ABN: {abn}</span>}
                <span>Date: {formatDate(new Date().toISOString().split('T')[0])}</span>
                <span>Valid for: {validityDays || '14'} days</span>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-8">
              {/* Section: Project Overview */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-white font-semibold flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-teal-500/20 text-teal-400 text-xs flex items-center justify-center font-bold">1</span>
                    Project Overview
                  </h4>
                  <button
                    onClick={() => {
                      let text = 'PROJECT OVERVIEW\n\n';
                      if (projectDescription) text += projectDescription + '\n\n';
                      const filled = objectives.filter(Boolean);
                      if (filled.length > 0) {
                        text += 'Objectives:\n';
                        filled.forEach((o, i) => { text += `  ${i + 1}. ${o}\n`; });
                        text += '\n';
                      }
                      text += `Timeline: ${durationWeeks} weeks\nStart: ${formatDate(startDate)}\nCompletion: ${endDate ? formatDate(endDate) : 'TBD'}`;
                      handleCopySection('overview', text);
                    }}
                    className="text-xs px-2 py-1 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white transition-all"
                  >
                    {copiedSection === 'overview' ? <span className="text-emerald-400">Copied</span> : 'Copy'}
                  </button>
                </div>
                {projectDescription && (
                  <p className="text-sm text-slate-300 mb-3 whitespace-pre-line">{projectDescription}</p>
                )}
                {objectives.filter(Boolean).length > 0 && (
                  <div className="mb-3">
                    <p className="text-xs text-slate-500 uppercase tracking-wide mb-2">Objectives</p>
                    <ul className="space-y-1.5">
                      {objectives.filter(Boolean).map((obj, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                          <span className="text-teal-400 flex-shrink-0">{i + 1}.</span>
                          {obj}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="flex items-center gap-4 text-sm">
                    <div className="text-center">
                      <p className="text-xs text-slate-500">Start</p>
                      <p className="text-white font-medium">{formatDate(startDate)}</p>
                    </div>
                    <div className="flex-1 h-px bg-gradient-to-r from-teal-500 to-blue-500" />
                    <div className="text-center">
                      <p className="text-xs text-slate-500">Completion</p>
                      <p className="text-white font-medium">{endDate ? formatDate(endDate) : 'TBD'}</p>
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 text-center mt-2">{durationWeeks} weeks</p>
                </div>
              </div>

              {/* Section: Deliverables & Pricing */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-white font-semibold flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-teal-500/20 text-teal-400 text-xs flex items-center justify-center font-bold">2</span>
                    Deliverables &amp; Pricing
                  </h4>
                  <button
                    onClick={() => {
                      let text = 'DELIVERABLES & PRICING\n\n';
                      deliverables.filter((d) => d.name).forEach((d, i) => {
                        text += `${i + 1}. ${d.name} — ${formatCurrency(parseFloat(d.price) || 0)}\n`;
                        if (d.description) text += `   ${d.description}\n`;
                      });
                      text += `\nTotal: ${formatCurrency(totalValue)}${includeGST ? ' (incl. GST)' : ' (ex. GST)'}`;
                      handleCopySection('deliverables', text);
                    }}
                    className="text-xs px-2 py-1 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white transition-all"
                  >
                    {copiedSection === 'deliverables' ? <span className="text-emerald-400">Copied</span> : 'Copy'}
                  </button>
                </div>
                <div className="space-y-2">
                  {deliverables.filter((d) => d.name).map((d, i) => (
                    <div key={d.id} className="bg-white/5 rounded-lg p-3 flex items-center justify-between">
                      <div className="flex items-start gap-3 flex-1 min-w-0">
                        <span className="text-teal-400 font-bold text-sm mt-0.5 flex-shrink-0">{i + 1}.</span>
                        <div className="min-w-0">
                          <p className="text-white text-sm font-medium">{d.name}</p>
                          {d.description && (
                            <p className="text-xs text-slate-500 mt-0.5">{d.description}</p>
                          )}
                        </div>
                      </div>
                      <p className="text-white font-bold text-sm flex-shrink-0 ml-4">
                        {formatCurrency(parseFloat(d.price) || 0)}
                      </p>
                    </div>
                  ))}
                  {deliverables.filter((d) => d.name).length === 0 && (
                    <p className="text-sm text-slate-500 italic">No deliverables added yet.</p>
                  )}
                </div>

                {/* Pricing Summary */}
                <div className="mt-3 space-y-2">
                  <div className="bg-white/5 rounded-lg p-3 flex items-center justify-between text-sm">
                    <span className="text-slate-400">Subtotal</span>
                    <span className="text-white">{formatCurrency(subtotal)}</span>
                  </div>
                  {discountAmount > 0 && (
                    <div className="bg-white/5 rounded-lg p-3 flex items-center justify-between text-sm">
                      <span className="text-slate-400">Discount ({discountPercent}%)</span>
                      <span className="text-rose-400">-{formatCurrency(discountAmount)}</span>
                    </div>
                  )}
                  {includeGST && (
                    <div className="bg-white/5 rounded-lg p-3 flex items-center justify-between text-sm">
                      <span className="text-slate-400">GST (10%)</span>
                      <span className="text-white">{formatCurrency(gstAmount)}</span>
                    </div>
                  )}
                  <div className="bg-gradient-to-r from-teal-500/10 to-blue-500/10 border border-teal-500/20 rounded-lg p-3 flex items-center justify-between">
                    <span className="text-teal-400 font-medium text-sm">Total</span>
                    <span className="text-white font-bold">
                      {formatCurrency(totalValue)}
                      <span className="text-xs text-slate-500 ml-1">
                        {includeGST ? '(incl. GST)' : '(ex. GST)'}
                      </span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Section: Payment Schedule */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-white font-semibold flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-teal-500/20 text-teal-400 text-xs flex items-center justify-center font-bold">3</span>
                    Payment Schedule
                  </h4>
                  <button
                    onClick={() => {
                      let text = 'PAYMENT SCHEDULE\n\n';
                      const opt = PAYMENT_TERMS_OPTIONS.find((o) => o.value === paymentTerms);
                      text += `Structure: ${opt?.label || paymentTerms}\n\n`;
                      paymentMilestones.forEach((m, i) => {
                        text += `${i + 1}. ${m.label} — ${formatCurrency(Math.round(m.amount))}\n`;
                      });
                      handleCopySection('payment', text);
                    }}
                    className="text-xs px-2 py-1 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white transition-all"
                  >
                    {copiedSection === 'payment' ? <span className="text-emerald-400">Copied</span> : 'Copy'}
                  </button>
                </div>
                <div className="space-y-2">
                  {paymentMilestones.map((m, i) => (
                    <div key={i} className="bg-white/5 rounded-lg p-3 flex items-center justify-between">
                      <div>
                        <p className="text-white text-sm font-medium">{m.label}</p>
                      </div>
                      <p className="text-white font-bold text-sm">{formatCurrency(Math.round(m.amount))}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section: Why Choose Me */}
              {(sellingPoints.some((sp) => sp.text) || testimonialQuote || portfolioLinks.some((pl) => pl.url)) && (
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-white font-semibold flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-teal-500/20 text-teal-400 text-xs flex items-center justify-center font-bold">4</span>
                      Why Choose Me
                    </h4>
                    <button
                      onClick={() => {
                        let text = 'WHY CHOOSE ME\n\n';
                        sellingPoints.filter((sp) => sp.text).forEach((sp) => {
                          text += `* ${sp.text}\n`;
                        });
                        if (portfolioLinks.filter((pl) => pl.url).length > 0) {
                          text += '\nPortfolio:\n';
                          portfolioLinks.filter((pl) => pl.url).forEach((pl) => {
                            text += `- ${pl.label || 'Link'}: ${pl.url}\n`;
                          });
                        }
                        if (testimonialQuote) {
                          text += `\n"${testimonialQuote}"`;
                          if (testimonialAuthor) text += `\n  — ${testimonialAuthor}`;
                        }
                        handleCopySection('whyme', text);
                      }}
                      className="text-xs px-2 py-1 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white transition-all"
                    >
                      {copiedSection === 'whyme' ? <span className="text-emerald-400">Copied</span> : 'Copy'}
                    </button>
                  </div>
                  {sellingPoints.filter((sp) => sp.text).length > 0 && (
                    <div className="bg-white/5 rounded-lg p-4 mb-3">
                      <ul className="space-y-2 text-sm">
                        {sellingPoints.filter((sp) => sp.text).map((sp) => (
                          <li key={sp.id} className="flex items-start gap-2">
                            <span className="text-teal-400 mt-0.5 flex-shrink-0">*</span>
                            <span className="text-slate-300">{sp.text}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {portfolioLinks.filter((pl) => pl.url).length > 0 && (
                    <div className="bg-white/5 rounded-lg p-4 mb-3">
                      <p className="text-xs text-slate-500 uppercase tracking-wide mb-2">Portfolio</p>
                      <div className="space-y-1.5">
                        {portfolioLinks.filter((pl) => pl.url).map((pl) => (
                          <p key={pl.id} className="text-sm text-teal-400">
                            {pl.label || 'Link'}: <span className="text-slate-300">{pl.url}</span>
                          </p>
                        ))}
                      </div>
                    </div>
                  )}
                  {testimonialQuote && (
                    <div className="bg-gradient-to-r from-teal-500/10 to-blue-500/10 border border-teal-500/20 rounded-lg p-4">
                      <p className="text-sm text-slate-300 italic">&ldquo;{testimonialQuote}&rdquo;</p>
                      {testimonialAuthor && (
                        <p className="text-xs text-teal-400 mt-2">&mdash; {testimonialAuthor}</p>
                      )}
                    </div>
                  )}
                </div>
              )}

              {/* Section: Terms & Conditions */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-white font-semibold flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-teal-500/20 text-teal-400 text-xs flex items-center justify-center font-bold">5</span>
                    Terms &amp; Conditions
                  </h4>
                  <button
                    onClick={() => {
                      let text = 'TERMS & CONDITIONS\n\n';
                      text += `* ${terms.revisionRounds} rounds of revisions included in the project fee.\n`;
                      text += `* Revisions will be turned around within ${terms.revisionTurnaround} business days.\n`;
                      text += `* Either party may cancel with ${terms.cancellationNotice} days written notice.\n`;
                      if (terms.ipTransferOnPayment) text += '* All intellectual property transfers to the client upon receipt of final payment.\n';
                      text += '* Additional revisions beyond the included rounds will be quoted separately.\n';
                      text += `* This proposal is valid for ${validityDays || '14'} days from the date of issue.\n`;
                      terms.customTerms.filter(Boolean).forEach((t) => { text += `* ${t}\n`; });
                      handleCopySection('terms', text);
                    }}
                    className="text-xs px-2 py-1 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white transition-all"
                  >
                    {copiedSection === 'terms' ? <span className="text-emerald-400">Copied</span> : 'Copy'}
                  </button>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li className="flex items-start gap-2">
                      <span className="text-slate-500 mt-0.5 flex-shrink-0">&bull;</span>
                      {terms.revisionRounds} rounds of revisions included in the project fee.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-slate-500 mt-0.5 flex-shrink-0">&bull;</span>
                      Revisions will be turned around within {terms.revisionTurnaround} business days.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-slate-500 mt-0.5 flex-shrink-0">&bull;</span>
                      Either party may cancel with {terms.cancellationNotice} days written notice.
                    </li>
                    {terms.ipTransferOnPayment && (
                      <li className="flex items-start gap-2">
                        <span className="text-slate-500 mt-0.5 flex-shrink-0">&bull;</span>
                        All intellectual property transfers to the client upon receipt of final payment.
                      </li>
                    )}
                    <li className="flex items-start gap-2">
                      <span className="text-slate-500 mt-0.5 flex-shrink-0">&bull;</span>
                      Additional revisions beyond the included rounds will be quoted separately.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-slate-500 mt-0.5 flex-shrink-0">&bull;</span>
                      This proposal is valid for {validityDays || '14'} days from the date of issue.
                    </li>
                    {terms.customTerms.filter(Boolean).map((t, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-slate-500 mt-0.5 flex-shrink-0">&bull;</span>
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Section: Next Steps */}
              <div>
                <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-teal-500/20 text-teal-400 text-xs flex items-center justify-center font-bold">6</span>
                  Next Steps
                </h4>
                <div className="bg-white/5 rounded-lg p-4">
                  <p className="text-sm text-slate-300 mb-3">To proceed with this project:</p>
                  <ol className="space-y-2 text-sm text-slate-300">
                    <li className="flex items-start gap-2">
                      <span className="text-teal-400 font-bold flex-shrink-0">1.</span>
                      Reply to confirm your acceptance of this proposal
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-400 font-bold flex-shrink-0">2.</span>
                      I will send a formal contract/scope of work for signing
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-400 font-bold flex-shrink-0">3.</span>
                      Upon signing, the deposit invoice will be issued
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-400 font-bold flex-shrink-0">4.</span>
                      Work begins on the agreed start date
                    </li>
                  </ol>
                  <p className="text-sm text-slate-400 mt-4 italic">
                    I look forward to working with you.
                  </p>
                </div>
              </div>

              {/* Contact Footer */}
              <div className="border-t border-white/10 pt-4">
                <div className="flex flex-wrap gap-x-6 gap-y-1 text-xs text-slate-500">
                  <span>{businessName || 'Your Business Name'}</span>
                  {contactEmail && <span>{contactEmail}</span>}
                  {contactPhone && <span>{contactPhone}</span>}
                  {website && <span>{website}</span>}
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between">
            <button
              onClick={() => setActiveTab(5)}
              className="px-5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-white/10 transition-all"
            >
              Back to Edit
            </button>
            <button
              onClick={handleCopyFull}
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white text-sm font-medium hover:opacity-90 transition-opacity"
            >
              {copied ? 'Copied!' : 'Copy Full Proposal'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
