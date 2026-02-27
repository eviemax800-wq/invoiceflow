import type { Metadata } from 'next';
import Link from 'next/link';
import EmailCapture from '../tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Free Business Templates for Australian Freelancers (2026) | InvoiceFlow',
  description:
    'Free invoice templates, contract templates, proposal templates, and 25+ business document generators for Australian freelancers and sole traders. GST-compliant, ATO-ready. No signup required.',
  keywords: [
    'free invoice template australia',
    'invoice template freelancer',
    'freelance contract template australia',
    'quote template freelancer',
    'proposal template freelancer',
    'receipt template free',
    'NDA template australia',
    'terms of service template freelancer',
    'privacy policy generator',
    'letter of demand template',
    'credit note template australia',
    'scope of work template',
    'client onboarding checklist',
    'project brief template',
    'rate card template',
  ],
  openGraph: {
    title: 'Free Business Templates — Invoice, Contract, Proposal & More',
    description:
      '28 free, customisable business document generators for Australian freelancers. Invoice templates, contracts, proposals, NDAs, and more. GST-compliant.',
    type: 'website',
  },
  alternates: {
    canonical: '/templates',
  },
};

const TEMPLATE_CATEGORIES = [
  {
    name: 'Invoicing & Billing',
    description: 'GST-compliant invoice, receipt, and billing templates',
    color: 'from-teal-400 to-cyan-500',
    icon: '💰',
    templates: [
      { title: 'Invoice Template Generator', href: '/tools/invoice-generator', description: 'Professional, GST-compliant invoices with your ABN. Download as PDF instantly.' },
      { title: 'Credit Note Generator', href: '/tools/credit-note-generator', description: 'Issue GST-compliant credit notes for refunds, corrections, or adjustments.' },
      { title: 'Payment Receipt Generator', href: '/tools/receipt-generator', description: 'Generate professional payment receipts with GST breakdown.' },
      { title: 'Invoice Email Templates', href: '/tools/invoice-email-template', description: '6 email types (new invoice, overdue, follow-up) with 3 tone options.' },
      { title: 'Invoice Numbering System', href: '/tools/invoice-numbering-system', description: 'Design a professional numbering scheme with date codes and prefixes.' },
      { title: 'Payment Reminder Templates', href: '/tools/payment-reminder-generator', description: 'Professional overdue payment reminders in 4 escalation tones.' },
      { title: 'Letter of Demand Generator', href: '/tools/letter-of-demand', description: 'Formal demand letters for unpaid invoices with interest calculations.' },
    ],
  },
  {
    name: 'Contracts & Agreements',
    description: 'Legally sound contracts, NDAs, and service agreements',
    color: 'from-violet-400 to-purple-500',
    icon: '📋',
    templates: [
      { title: 'Freelance Contract Generator', href: '/tools/contract-generator', description: 'Full service agreements with scope, payment, IP, confidentiality, and termination clauses.' },
      { title: 'Subcontractor Agreement', href: '/tools/subcontractor-agreement', description: 'Multi-section agreements for hiring other freelancers, all 8 states/territories.' },
      { title: 'NDA / Confidentiality Agreement', href: '/tools/nda-generator', description: 'Mutual or one-way NDAs with 9 confidential info categories.' },
      { title: 'Contract Clause Generator', href: '/tools/contract-clause-generator', description: 'Individual clauses for payment terms, IP, liability, and more.' },
      { title: 'Terms of Service Generator', href: '/tools/terms-of-service-generator', description: 'Professional T&Cs with payment terms, IP, liability, and ACL compliance.' },
      { title: 'Privacy Policy Generator', href: '/tools/privacy-policy-generator', description: 'Australian Privacy Act 1988 compliant privacy policies with GDPR option.' },
    ],
  },
  {
    name: 'Proposals & Briefs',
    description: 'Win more clients with polished proposals and briefs',
    color: 'from-blue-400 to-indigo-500',
    icon: '📝',
    templates: [
      { title: 'Proposal Template Generator', href: '/tools/proposal-generator', description: '7 project type presets with Australian pricing. Professional proposal documents.' },
      { title: 'Scope of Work Generator', href: '/tools/scope-of-work-generator', description: 'Detailed scope documents that prevent scope creep and protect your time.' },
      { title: 'Project Brief Generator', href: '/tools/project-brief-generator', description: 'Capture goals, scope, deliverables, and timelines in a professional brief.' },
      { title: 'Rate Card Generator', href: '/tools/rate-card-generator', description: 'Hourly, project, day rate, and retainer pricing cards.' },
      { title: 'Service Package Builder', href: '/tools/service-package-builder', description: '3-tier service packages with smart pricing multipliers.' },
    ],
  },
  {
    name: 'Client Management',
    description: 'Onboard, communicate, and manage clients professionally',
    color: 'from-emerald-400 to-green-500',
    icon: '🤝',
    templates: [
      { title: 'Client Intake Form Generator', href: '/tools/client-intake-form', description: '8 pre-built question sections with smart defaults by service type.' },
      { title: 'Client Onboarding Checklist', href: '/tools/client-onboarding-checklist', description: 'Personalised onboarding checklists across 6 categories with progress tracking.' },
      { title: 'Client Communication Templates', href: '/tools/client-communication-templates', description: '9 scenarios (delays, scope changes, rate increases) with 3 tone options.' },
      { title: 'Client Referral Request', href: '/tools/referral-request-generator', description: 'Professional referral requests with optional incentive structures.' },
      { title: 'Client Feedback Survey', href: '/tools/client-feedback-survey', description: 'Post-project surveys with NPS scoring and testimonial requests.' },
    ],
  },
  {
    name: 'Project Delivery',
    description: 'Manage milestones, handovers, and project completion',
    color: 'from-amber-400 to-orange-500',
    icon: '🚀',
    templates: [
      { title: 'Project Handover Generator', href: '/tools/project-handover-generator', description: 'Comprehensive handover documents with deliverables inventory and credentials.' },
      { title: 'Project Completion Certificate', href: '/tools/project-completion-certificate', description: 'Professional sign-off documents that trigger final payment.' },
      { title: 'Meeting Agenda Generator', href: '/tools/meeting-agenda-generator', description: 'Structured agendas for kickoffs, reviews, feedback, and wrap-ups.' },
      { title: 'Price Increase Letter', href: '/tools/price-increase-letter', description: 'Professional rate increase letters with reasoning and transition timeline.' },
    ],
  },
  {
    name: 'Business Operations',
    description: 'Essential documents for running your freelance business',
    color: 'from-rose-400 to-pink-500',
    icon: '📊',
    templates: [
      { title: 'Income Proof Generator', href: '/tools/income-proof-generator', description: 'Self-employed income declaration letters for rental, mortgage, or loan applications.' },
      { title: 'Vehicle Logbook Generator', href: '/tools/vehicle-logbook-generator', description: 'ATO-compliant 12-week motor vehicle logbooks for tax deductions.' },
      { title: 'Annual Business Review', href: '/tools/annual-business-review', description: 'Comprehensive year-in-review reports for strategic planning.' },
    ],
  },
];

const FAQS = [
  {
    q: 'Are these templates really free?',
    a: 'Yes, all 28 template generators are completely free with no signup required. Generate as many documents as you need — invoices, contracts, proposals, NDAs, and more. Every template is customisable and includes Australian GST calculations where applicable.',
  },
  {
    q: 'Are these templates compliant with Australian tax law?',
    a: 'Yes. All invoicing and financial templates use current ATO requirements for the 2025-26 financial year. Invoice templates include mandatory fields (ABN, GST amounts, payment terms). Contract templates reference Australian Consumer Law. Privacy policies comply with the Australian Privacy Act 1988.',
  },
  {
    q: 'Can I use these templates for my business?',
    a: 'Absolutely. Every template is designed for Australian freelancers, sole traders, contractors, and small businesses. You can customise all fields, add your branding details, and download or copy the output. While our templates follow best practices, we recommend having important legal documents (contracts, NDAs) reviewed by a solicitor for your specific situation.',
  },
  {
    q: 'What format do the templates come in?',
    a: 'Most templates generate formatted text that you can copy to your clipboard or print directly from the browser. The invoice generator creates downloadable PDFs. All generators let you preview the output before downloading, and you can regenerate with different settings as many times as needed.',
  },
  {
    q: 'How do these compare to paid template services?',
    a: 'Many paid template services charge $5-$30 per template download. Our generators are free and more flexible — instead of static templates, they create customised documents based on your inputs. You get ATO-compliant Australian formats, not generic US templates. Plus, you can regenerate with different settings unlimited times.',
  },
];

const totalTemplates = TEMPLATE_CATEGORIES.reduce((sum, cat) => sum + cat.templates.length, 0);

export default function TemplatesPage() {
  const siteUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://invoiceflow-teal.vercel.app';

  const allTemplates = TEMPLATE_CATEGORIES.flatMap((cat) => cat.templates);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Free Business Templates for Australian Freelancers',
    description: 'Free invoice templates, contract templates, proposal templates, and business document generators.',
    url: `${siteUrl}/templates`,
    inLanguage: 'en-AU',
    numberOfItems: totalTemplates,
    isPartOf: { '@type': 'WebSite', name: 'InvoiceFlow', url: siteUrl },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: totalTemplates,
      itemListElement: allTemplates.map((t, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: t.title,
        url: `${siteUrl}${t.href}`,
        description: t.description,
      })),
    },
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Templates', item: `${siteUrl}/templates` },
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  };

  return (
    <div className="min-h-screen page-bg">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Header */}
      <header className="border-b border-white/10 backdrop-blur-sm bg-black/30">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-teal-400 to-blue-500" />
            <h1 className="text-2xl font-bold gradient-text heading-font">InvoiceFlow</h1>
          </Link>
          <div className="flex gap-3">
            <Link href="/tools" className="text-sm text-slate-400 hover:text-white transition-colors px-3 py-2">
              All Tools
            </Link>
            <Link href="/pricing" className="text-sm text-slate-400 hover:text-white transition-colors px-3 py-2">
              Pricing
            </Link>
            <Link
              href="/signup"
              className="text-sm font-medium px-4 py-2 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white hover:opacity-90 transition-opacity"
            >
              Get Started Free
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16 max-w-5xl">
        {/* Hero */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-slate-200 mb-6">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            {totalTemplates} free templates — no signup required
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white heading-font mb-4">
            Free <span className="gradient-text">Business Templates</span> for
            <br />
            Australian Freelancers
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Professional invoice templates, contracts, proposals, NDAs, and more.
            GST-compliant, ATO-ready, and customised to your business. Generate unlimited
            documents — completely free.
          </p>
        </div>

        {/* Key stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { value: `${totalTemplates}+`, label: 'Free Templates' },
            { value: '$0', label: 'No Hidden Fees' },
            { value: 'ATO', label: 'Compliant' },
            { value: '0', label: 'Signup Required' },
          ].map((stat) => (
            <div key={stat.label} className="glass rounded-xl p-4 text-center">
              <div className="text-2xl font-bold gradient-text heading-font">{stat.value}</div>
              <div className="text-sm text-slate-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Category quick-nav */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {TEMPLATE_CATEGORIES.map((cat) => (
            <a
              key={cat.name}
              href={`#${cat.name.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`}
              className="text-sm px-4 py-2 rounded-full glass text-slate-400 hover:text-white border border-white/5 hover:border-white/20 transition-all"
            >
              {cat.icon} {cat.name}
            </a>
          ))}
        </div>

        {/* Template categories */}
        {TEMPLATE_CATEGORIES.map((category) => (
          <section
            key={category.name}
            id={category.name.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}
            className="mb-16"
          >
            <div className="flex items-center gap-4 mb-6">
              <div
                className={`h-12 w-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-xl shrink-0`}
              >
                {category.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white heading-font">{category.name}</h3>
                <p className="text-sm text-slate-400">{category.description}</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {category.templates.map((template) => (
                <Link
                  key={template.href}
                  href={template.href}
                  className="block glass rounded-xl p-5 hover:bg-white/[0.08] hover:border-teal-500/30 border border-transparent transition-all group"
                >
                  <h4 className="text-base font-semibold text-white group-hover:text-teal-400 transition-colors mb-1">
                    {template.title}
                  </h4>
                  <p className="text-sm text-slate-400 leading-relaxed">{template.description}</p>
                  <span className="inline-flex items-center gap-1 text-xs text-teal-400 mt-3 group-hover:translate-x-1 transition-transform">
                    Generate free &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </section>
        ))}

        <EmailCapture />

        {/* Why use our templates */}
        <section className="mt-16 glass rounded-2xl p-8 md:p-10">
          <h3 className="text-2xl font-bold text-white heading-font mb-6 text-center">
            Why Freelancers Choose Our Templates
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Built for Australia',
                desc: 'Every template uses current ATO rules, Australian Consumer Law references, and state-specific details. Not generic US templates with "GST" slapped on.',
              },
              {
                title: 'Customisable Generators',
                desc: 'Unlike static templates, our generators create documents based on YOUR inputs — business name, ABN, rates, payment terms, and industry.',
              },
              {
                title: 'Always Up to Date',
                desc: '2025-26 tax rates, $75,000 GST threshold, 11.5% super guarantee, 67c/hr WFH rate. Updated every financial year.',
              },
              {
                title: 'No Signup, No Fees',
                desc: 'Generate unlimited documents without creating an account. No paywall, no credit card, no "free trial" tricks.',
              },
              {
                title: 'Professional Quality',
                desc: 'Clean formatting, proper legal language, and comprehensive sections. Documents your clients will take seriously.',
              },
              {
                title: 'Copy, Print, Download',
                desc: 'Every template can be copied to clipboard, printed, or saved. Invoice templates generate downloadable PDFs.',
              },
            ].map((item) => (
              <div key={item.title} className="space-y-2">
                <h4 className="text-base font-semibold text-white">{item.title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Most popular templates */}
        <section className="mt-16">
          <h3 className="text-2xl font-bold text-white heading-font mb-6 text-center">
            Most Popular Templates
          </h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { title: 'Invoice Template', href: '/tools/invoice-generator', searches: '14,800/mo', icon: '💰' },
              { title: 'Contract Template', href: '/tools/contract-generator', searches: '9,900/mo', icon: '📋' },
              { title: 'Proposal Template', href: '/tools/proposal-generator', searches: '6,600/mo', icon: '📝' },
              { title: 'NDA Template', href: '/tools/nda-generator', searches: '5,400/mo', icon: '🔒' },
              { title: 'Receipt Template', href: '/tools/receipt-generator', searches: '4,400/mo', icon: '🧾' },
              { title: 'Quote Template', href: '/tools/scope-of-work-generator', searches: '3,600/mo', icon: '📄' },
            ].map((t) => (
              <Link
                key={t.href}
                href={t.href}
                className="glass rounded-xl p-5 text-center hover:bg-white/[0.08] hover:border-teal-500/30 border border-transparent transition-all group"
              >
                <div className="text-3xl mb-2">{t.icon}</div>
                <h4 className="text-base font-semibold text-white group-hover:text-teal-400 transition-colors">
                  {t.title}
                </h4>
                <p className="text-xs text-slate-500 mt-1">~{t.searches} AU searches</p>
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-16">
          <h3 className="text-2xl font-bold text-white heading-font mb-8 text-center">
            Frequently Asked Questions
          </h3>
          <div className="space-y-4 max-w-3xl mx-auto">
            {FAQS.map((faq) => (
              <div key={faq.q} className="glass rounded-xl p-6">
                <h4 className="text-base font-semibold text-white mb-2">{faq.q}</h4>
                <p className="text-sm text-slate-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-16 text-center glass rounded-2xl p-10">
          <h3 className="text-3xl font-bold text-white heading-font mb-4">
            Ready to <span className="gradient-text">automate</span> your invoicing?
          </h3>
          <p className="text-slate-300 max-w-xl mx-auto mb-6">
            These templates are just the start. InvoiceFlow automates invoice creation, GST
            calculations, payment tracking, and BAS prep — powered by AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/signup"
              className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold hover:opacity-90 transition-opacity"
            >
              Start Free — 5 Invoices/Month
            </Link>
            <Link
              href="/tools"
              className="inline-block px-6 py-3 rounded-lg glass text-white font-semibold hover:bg-white/10 transition-colors"
            >
              Browse All 100 Tools
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 mt-20 py-8">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} InvoiceFlow. Built in Melbourne.</p>
          <div className="flex gap-6">
            <Link href="/tools" className="hover:text-white transition-colors">Tools</Link>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <Link href="/compare" className="hover:text-white transition-colors">Compare</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
