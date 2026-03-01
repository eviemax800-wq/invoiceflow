import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Invoice Template Australia: Free Templates, ATO Requirements & Types 2025-26 — InvoiceFlow',
  description:
    'What is an invoice template? Download free Australian invoice templates for sole traders, freelancers, and small businesses. Learn ATO requirements, template types, common mistakes, and how invoicing software replaces static templates.',
  keywords: [
    'invoice template australia free',
    'free invoice template download',
    'tax invoice template sole trader',
    'invoice template freelancer',
    'how to create an invoice template',
    'australian tax invoice template',
    'gst invoice template',
    'invoice template word excel pdf',
  ],
  alternates: { canonical: '/glossary/invoice-template' },
  openGraph: {
    title: 'Invoice Template Australia: Free Templates, ATO Requirements & Types 2025-26 — InvoiceFlow',
    description:
      'Complete guide to Australian invoice templates for freelancers and sole traders. Covers ATO-compliant templates, types of invoice templates, common mistakes, and why invoicing software like InvoiceFlow replaces static templates.',
    url: 'https://invoiceflow-teal.vercel.app/glossary/invoice-template',
    type: 'article',
  },
};

const BASE_URL = 'https://invoiceflow-teal.vercel.app';

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Glossary', item: `${BASE_URL}/glossary` },
    { '@type': 'ListItem', position: 3, name: 'Invoice Template', item: `${BASE_URL}/glossary/invoice-template` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What must be included in an Australian invoice template?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An Australian invoice template must include your business name, Australian Business Number (ABN), the date of issue, a unique invoice number, a description of goods or services supplied, the amount charged (excluding GST and including GST if you are GST-registered), the GST amount, payment terms, and your bank details for payment. For tax invoices over $1,000, the buyer\'s name and address must also be included. These requirements are set by the ATO to ensure invoices are valid for GST credit claims.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between a tax invoice and a regular invoice?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A tax invoice is a specific type of invoice required by the ATO for GST-registered businesses. It must include GST details (the GST amount and total price including GST) and the supplier\'s ABN. A regular invoice is a general billing document that does not include GST breakdowns and is used by businesses that are not registered for GST. If you are GST-registered, you must issue tax invoices for all taxable supplies over $82.50. Your customers need valid tax invoices to claim GST credits (input tax credits) on their BAS.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use a Word or Excel invoice template?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, you can use a Word or Excel invoice template for your invoicing. These templates are free, easy to customise, and work well for businesses that send only a few invoices per month. However, manual templates carry risks: you may forget required fields (like your ABN), miscalculate GST amounts, duplicate invoice numbers, or lose track of which invoices have been paid. As your business grows, the time spent managing manual templates increases significantly. Invoicing software like InvoiceFlow automates these tasks, reduces errors, and provides payment tracking.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a different invoice template for GST and non-GST invoices?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, GST-registered and non-GST-registered businesses should use different invoice templates. If you are GST-registered, your tax invoice must show the GST amount separately, display the total price including GST, and include the words "Tax Invoice" at the top. If you are not registered for GST, your invoice should clearly state "GST not applicable" or "Not registered for GST" and must not show any GST component. Using the wrong template can confuse clients and cause incorrect GST credit claims, which may trigger ATO scrutiny.',
      },
    },
    {
      '@type': 'Question',
      name: 'How often should I update my invoice template?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You should review and update your invoice template at least once a year, or whenever your business details change. Key triggers for updating include: a change of business name or ABN, new bank account details, changes to your GST registration status, updated hourly rates or pricing, new payment terms, changes to your business address, or the start of a new financial year. An outdated template with incorrect details can cause payment delays, trigger the 47% no-ABN withholding rule, or result in invalid tax invoices that your clients cannot use for GST credits.',
      },
    },
  ],
};

const tocItems = [
  { id: 'what-is-invoice-template', label: '1. What Is an Invoice Template?' },
  { id: 'essential-elements', label: '2. Essential Elements of an AU Template' },
  { id: 'types-of-templates', label: '3. Types of Invoice Templates' },
  { id: 'template-vs-generator-vs-software', label: '4. Template vs Generator vs Software' },
  { id: 'common-mistakes', label: '5. Common Invoice Template Mistakes' },
  { id: 'invoiceflow-replaces-templates', label: '6. How InvoiceFlow Replaces Templates' },
];

const relatedTools = [
  {
    href: '/tools/invoice-generator',
    name: 'Invoice Generator',
    description: 'Create ATO-compliant tax invoices instantly with your ABN, GST, and payment details pre-filled.',
    icon: (
      <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    href: '/tools/gst-calculator',
    name: 'GST Calculator',
    description: 'Calculate GST-inclusive and GST-exclusive amounts instantly for your Australian invoices.',
    icon: (
      <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
      </svg>
    ),
  },
  {
    href: '/tools/abn-lookup',
    name: 'ABN Lookup',
    description: 'Verify any Australian Business Number instantly and check GST registration status.',
    icon: (
      <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
  {
    href: '/tools/tax-estimator',
    name: 'Tax Estimator',
    description: 'Estimate your income tax, Medicare levy, and take-home pay as an Australian sole trader.',
    icon: (
      <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18v-.008zm-12 0h.008v.008H6v-.008z" />
      </svg>
    ),
  },
];

const relatedGuides = [
  {
    href: '/guides/invoicing-101',
    name: 'Invoicing 101',
    description: 'The complete beginner\'s guide to invoicing in Australia — from creating your first invoice to getting paid on time.',
  },
  {
    href: '/guides/gst-for-freelancers',
    name: 'GST Guide for Freelancers',
    description: 'When to register for GST, how to charge it on invoices, and how to lodge your BAS correctly.',
  },
  {
    href: '/guides/getting-paid-faster',
    name: 'Getting Paid Faster',
    description: 'Proven strategies to reduce payment delays, set better terms, and follow up on overdue invoices.',
  },
];

export default function InvoiceTemplateGlossaryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative px-4 pt-20 pb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-blue-500/10 blur-3xl" />
        <div className="relative max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/glossary" className="hover:text-white transition-colors">Glossary</Link>
            <span>/</span>
            <span className="text-white">Invoice Template</span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            Glossary &mdash; Invoicing &amp; Templates
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Invoice Template{' '}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
              Australia
            </span>
          </h1>

          {/* Summary */}
          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            An invoice template is a pre-formatted document layout you reuse every time you bill a client. For Australian freelancers and sole traders, using the right template means faster invoicing, fewer errors, and full ATO compliance. This guide covers what your template needs, the different types, common mistakes, and why invoicing software is the smarter long-term choice.
          </p>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>14 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>ATO-Compliant 2025-26</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
              </svg>
              <span>Updated March 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* In a Nutshell */}
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <div className="rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-white">In a Nutshell</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 text-xs font-bold">7+</span>
              <div>
                <p className="text-white font-medium text-sm">Essential Fields</p>
                <p className="text-gray-400 text-sm">Required on every Australian tax invoice &mdash; ABN, date, invoice number, description, amounts, GST, and payment terms</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 text-xs font-bold">$82</span>
              <div>
                <p className="text-white font-medium text-sm">Simplified Invoice Threshold</p>
                <p className="text-gray-400 text-sm">Tax invoices under $82.50 (inc GST) do not need the buyer&apos;s name or address</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 text-xs font-bold">47%</span>
              <div>
                <p className="text-white font-medium text-sm">No-ABN Withholding</p>
                <p className="text-gray-400 text-sm">If your ABN is missing from the invoice, your client must withhold 47% of the payment</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 text-xs font-bold">5 yrs</span>
              <div>
                <p className="text-white font-medium text-sm">Record-Keeping Requirement</p>
                <p className="text-gray-400 text-sm">The ATO requires you to keep copies of all invoices for at least 5 years</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <div className="rounded-2xl bg-gray-800/50 border border-gray-700/50 p-8">
          <h2 className="text-lg font-bold text-white mb-4">Table of Contents</h2>
          <nav className="grid sm:grid-cols-2 gap-2">
            {tocItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors text-sm py-1"
              >
                <svg className="w-4 h-4 text-blue-500/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Content Sections */}
      <div className="max-w-4xl mx-auto px-4 pb-16 space-y-16">

        {/* Section 1: What Is an Invoice Template? */}
        <section id="what-is-invoice-template">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-sm font-bold">1</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">What Is an Invoice Template?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              An invoice template is a <strong className="text-white">pre-formatted document layout</strong> that contains the standard fields needed for billing. It is not the invoice itself &mdash; it is the reusable structure you fill in each time you need to bill a client. Think of it as a blank form with placeholders for your business details, the client&apos;s details, line items, totals, and payment instructions.
            </p>
            <p className="text-gray-300 leading-relaxed">
              For Australian freelancers and sole traders, a good invoice template saves considerable time. Instead of building each <Link href="/glossary/invoice" className="text-blue-400 hover:text-blue-300 underline decoration-blue-500/30">invoice</Link> from scratch, you open your template, fill in the client-specific details &mdash; the description, quantity, rate, and dates &mdash; and send. Your business name, <Link href="/glossary/abn" className="text-blue-400 hover:text-blue-300 underline decoration-blue-500/30">ABN</Link>, bank details, and <Link href="/glossary/payment-terms" className="text-blue-400 hover:text-blue-300 underline decoration-blue-500/30">payment terms</Link> are already locked in.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Templates come in many formats. The most common are <strong className="text-white">Word documents (.docx), Excel spreadsheets (.xlsx), Google Docs or Sheets, PDF fillable forms, and HTML/web-based templates</strong>. Each format has trade-offs in terms of customisation, portability, and ease of use.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-blue-500/20 p-5">
                <h4 className="text-blue-400 font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  What a Template Provides
                </h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>Consistent layout and branding on every invoice</li>
                  <li>Pre-filled business details (name, ABN, bank info)</li>
                  <li>Standard fields that meet ATO requirements</li>
                  <li>Faster invoicing &mdash; fill in the blanks, not the structure</li>
                  <li>Professional appearance for client-facing documents</li>
                </ul>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-cyan-500/20 p-5">
                <h4 className="text-cyan-400 font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                  What a Template Does Not Provide
                </h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>Automatic invoice numbering (you track this manually)</li>
                  <li>Payment tracking or reminders</li>
                  <li>Automatic GST calculations</li>
                  <li>Client database or saved contact details</li>
                  <li>Integration with accounting or banking tools</li>
                </ul>
              </div>
            </div>

            <div className="rounded-xl bg-blue-500/5 border border-blue-500/20 p-5 mt-6">
              <p className="text-blue-400 font-medium mb-2">Template vs Invoice</p>
              <p className="text-gray-400 text-sm">
                A template is the <strong className="text-gray-200">reusable structure</strong>. An invoice is the <strong className="text-gray-200">completed document</strong> you send to a specific client for a specific job. You can create hundreds of invoices from a single template. The template stays the same &mdash; only the variable details (client, description, amount, date) change each time. See <Link href="/glossary/invoice" className="text-blue-400 hover:text-blue-300 underline decoration-blue-500/30">Invoice</Link> for the complete definition of what an invoice is and how it functions in business.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Essential Elements of an Australian Invoice Template */}
        <section id="essential-elements">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-sm font-bold">2</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Essential Elements of an Australian Invoice Template</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              The ATO has specific requirements for what must appear on an Australian <Link href="/glossary/tax-invoice" className="text-blue-400 hover:text-blue-300 underline decoration-blue-500/30">tax invoice</Link>. If your template is missing any of these elements, your invoices may not be valid for <Link href="/glossary/gst" className="text-blue-400 hover:text-blue-300 underline decoration-blue-500/30">GST</Link> credit purposes &mdash; and your clients may refuse to pay or withhold 47% if the ABN is absent. Here is every element your template must include.
            </p>

            {/* Required Fields Table */}
            <div className="rounded-2xl border border-gray-700/50 overflow-hidden mt-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-800/80">
                      <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Field</th>
                      <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Required?</th>
                      <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Details</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700/50">
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-4 text-white font-medium">Business name</td>
                      <td className="px-6 py-4 text-green-400 font-medium text-sm">Always</td>
                      <td className="px-6 py-4 text-gray-300 text-sm">Your registered business or trading name</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-4 text-white font-medium">ABN</td>
                      <td className="px-6 py-4 text-green-400 font-medium text-sm">Always</td>
                      <td className="px-6 py-4 text-gray-300 text-sm">Your 11-digit Australian Business Number &mdash; omitting this triggers 47% withholding</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-4 text-white font-medium">Date of issue</td>
                      <td className="px-6 py-4 text-green-400 font-medium text-sm">Always</td>
                      <td className="px-6 py-4 text-gray-300 text-sm">The date the invoice was created or issued</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-4 text-white font-medium">Invoice number</td>
                      <td className="px-6 py-4 text-green-400 font-medium text-sm">Always</td>
                      <td className="px-6 py-4 text-gray-300 text-sm">A unique sequential number for tracking and record-keeping</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-4 text-white font-medium">Description of goods/services</td>
                      <td className="px-6 py-4 text-green-400 font-medium text-sm">Always</td>
                      <td className="px-6 py-4 text-gray-300 text-sm">Clear description of what was supplied, with quantity and unit price</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-4 text-white font-medium">Amount (ex-GST)</td>
                      <td className="px-6 py-4 text-green-400 font-medium text-sm">If GST-registered</td>
                      <td className="px-6 py-4 text-gray-300 text-sm">The price excluding GST for each line item</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-4 text-white font-medium">GST amount</td>
                      <td className="px-6 py-4 text-green-400 font-medium text-sm">If GST-registered</td>
                      <td className="px-6 py-4 text-gray-300 text-sm">The GST component shown separately (10% of the ex-GST amount)</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-4 text-white font-medium">Total amount (inc-GST)</td>
                      <td className="px-6 py-4 text-green-400 font-medium text-sm">If GST-registered</td>
                      <td className="px-6 py-4 text-gray-300 text-sm">The total payable amount including GST</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-4 text-white font-medium">Payment terms</td>
                      <td className="px-6 py-4 text-blue-400 font-medium text-sm">Recommended</td>
                      <td className="px-6 py-4 text-gray-300 text-sm">Due date or payment window (e.g. &quot;Net 14&quot;, &quot;Due within 30 days&quot;)</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-4 text-white font-medium">Bank details</td>
                      <td className="px-6 py-4 text-blue-400 font-medium text-sm">Recommended</td>
                      <td className="px-6 py-4 text-gray-300 text-sm">BSB, account number, and account name for direct bank transfer</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-4 text-white font-medium">Buyer&apos;s name &amp; address</td>
                      <td className="px-6 py-4 text-yellow-400 font-medium text-sm">Over $1,000</td>
                      <td className="px-6 py-4 text-gray-300 text-sm">Required on tax invoices for $1,000 or more (inc GST)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8 mb-3">Under $1,000 vs Over $1,000</h3>
            <p className="text-gray-300 leading-relaxed">
              The ATO distinguishes between <strong className="text-white">tax invoices under $1,000</strong> and those at or above $1,000 (including GST). For invoices under $1,000, you need all the fields listed above except the buyer&apos;s identity &mdash; the buyer&apos;s name and address are optional. For invoices of $1,000 or more, the buyer&apos;s name and address (or ABN) <strong className="text-white">must be included</strong> for the invoice to be a valid tax invoice that the buyer can use to claim <Link href="/glossary/input-tax-credits" className="text-blue-400 hover:text-blue-300 underline decoration-blue-500/30">input tax credits</Link>.
            </p>

            <h3 className="text-lg font-semibold text-white mt-8 mb-3">The &quot;Tax Invoice&quot; Label</h3>
            <p className="text-gray-300 leading-relaxed">
              If you are registered for GST, your invoice must include the words <strong className="text-white">&quot;Tax Invoice&quot;</strong> prominently &mdash; typically at the top of the document. This is an ATO requirement. Without this label, the document is technically not a valid tax invoice and your client cannot use it to claim GST credits on their <Link href="/glossary/bas" className="text-blue-400 hover:text-blue-300 underline decoration-blue-500/30">BAS</Link>. If you are <em>not</em> GST-registered, do not label your invoice as a &quot;Tax Invoice&quot; &mdash; simply use &quot;Invoice&quot; instead.
            </p>

            <div className="rounded-xl bg-blue-500/5 border border-blue-500/20 p-5 mt-6">
              <p className="text-blue-400 font-medium mb-2">Not GST-Registered?</p>
              <p className="text-gray-400 text-sm">
                If your annual turnover is under $75,000 and you are not registered for GST, your template is simpler. You do not need to show GST amounts, and you should include a line stating <strong className="text-gray-200">&quot;GST not applicable &mdash; not registered for GST&quot;</strong>. You still need your business name, ABN, date, invoice number, description, total amount, and payment details. See <Link href="/glossary/gst" className="text-blue-400 hover:text-blue-300 underline decoration-blue-500/30">GST</Link> for registration thresholds and obligations.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Types of Invoice Templates */}
        <section id="types-of-templates">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-sm font-bold">3</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Types of Invoice Templates</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Not all invoicing situations are the same. Different types of work &mdash; one-off projects, ongoing retainers, milestone-based contracts, corrections &mdash; require different template structures. Here are the seven most common types of invoice templates used by Australian freelancers and small businesses.
            </p>

            {/* Types Comparison Table */}
            <div className="rounded-2xl border border-gray-700/50 overflow-hidden mt-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-800/80">
                      <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Template Type</th>
                      <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Use Case</th>
                      <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Key Feature</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700/50">
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-4 text-white font-medium">Tax Invoice</td>
                      <td className="px-6 py-4 text-gray-300 text-sm">GST-registered businesses billing for taxable supplies</td>
                      <td className="px-6 py-4 text-blue-400 text-sm">Includes GST breakdown, ABN, &quot;Tax Invoice&quot; label</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-4 text-white font-medium">Simplified Tax Invoice</td>
                      <td className="px-6 py-4 text-gray-300 text-sm">Transactions under $82.50 (inc GST)</td>
                      <td className="px-6 py-4 text-blue-400 text-sm">No buyer details required &mdash; less admin for small amounts</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-4 text-white font-medium">Recipient-Created Tax Invoice</td>
                      <td className="px-6 py-4 text-gray-300 text-sm">Buyer creates the invoice instead of the supplier</td>
                      <td className="px-6 py-4 text-blue-400 text-sm">Requires written agreement &mdash; common in agriculture and mining</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-4 text-white font-medium"><Link href="/glossary/credit-note" className="text-blue-400 hover:text-blue-300 underline decoration-blue-500/30">Credit Note</Link> Template</td>
                      <td className="px-6 py-4 text-gray-300 text-sm">Correcting errors, issuing refunds, or adjusting invoices</td>
                      <td className="px-6 py-4 text-blue-400 text-sm">References original invoice &mdash; adjusts GST and total</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-4 text-white font-medium">Proforma Invoice</td>
                      <td className="px-6 py-4 text-gray-300 text-sm">Pre-sale estimate or quotation in invoice format</td>
                      <td className="px-6 py-4 text-blue-400 text-sm">Not a demand for payment &mdash; used for quotes and customs</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-4 text-white font-medium">Recurring Invoice</td>
                      <td className="px-6 py-4 text-gray-300 text-sm"><Link href="/glossary/retainer" className="text-blue-400 hover:text-blue-300 underline decoration-blue-500/30">Retainer</Link> agreements, monthly services, subscriptions</td>
                      <td className="px-6 py-4 text-blue-400 text-sm">Same structure repeated on a schedule &mdash; only dates change</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-4 text-white font-medium">Progress / Milestone Invoice</td>
                      <td className="px-6 py-4 text-gray-300 text-sm">Large projects billed in stages (e.g. 30/30/40 split)</td>
                      <td className="px-6 py-4 text-blue-400 text-sm">References project total, shows milestone completed and balance remaining</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8 mb-3">Tax Invoice Template</h3>
            <p className="text-gray-300 leading-relaxed">
              The <Link href="/glossary/tax-invoice" className="text-blue-400 hover:text-blue-300 underline decoration-blue-500/30">tax invoice</Link> is the most common template for GST-registered Australian businesses. It must include the &quot;Tax Invoice&quot; header, your ABN, GST amounts shown separately, and all the standard fields outlined in Section 2 above. This is the template most freelancers will use for the majority of their billing.
            </p>

            <h3 className="text-lg font-semibold text-white mt-8 mb-3">Simplified Tax Invoice</h3>
            <p className="text-gray-300 leading-relaxed">
              For transactions under <strong className="text-white">$82.50 including GST</strong> (i.e. $75 excluding GST), you can issue a simplified tax invoice. This version does not require the buyer&apos;s name, address, or ABN. It still needs your business details, ABN, date, description, and total amount. This is useful for retail transactions, small service jobs, or point-of-sale situations where collecting buyer details would be impractical.
            </p>

            <h3 className="text-lg font-semibold text-white mt-8 mb-3">Progress / Milestone Invoice Template</h3>
            <p className="text-gray-300 leading-relaxed">
              Freelancers working on large projects &mdash; website builds, branding packages, consulting engagements &mdash; often bill in stages. A milestone template includes a <strong className="text-white">reference to the total project value</strong>, the specific milestone being billed (e.g. &quot;Phase 2: Design approval &mdash; 30% of $15,000 = $4,500&quot;), the amount paid to date, and the remaining balance. This gives both you and the client a clear picture of where the project stands financially.
            </p>

            <div className="rounded-xl bg-blue-500/5 border border-blue-500/20 p-5 mt-6">
              <p className="text-blue-400 font-medium mb-2">Choosing the Right Template</p>
              <p className="text-gray-400 text-sm">
                Most freelancers only need <strong className="text-gray-200">two or three template types</strong>: a standard tax invoice (or non-GST invoice if not registered), a recurring invoice for retainer clients, and optionally a credit note template for corrections. Start simple. You can always add more specialised templates as your business grows. InvoiceFlow supports all seven types automatically &mdash; you select the type when creating an invoice and the correct fields are displayed.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Invoice Template vs Invoice Generator vs Invoicing Software */}
        <section id="template-vs-generator-vs-software">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-sm font-bold">4</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Invoice Template vs Invoice Generator vs Invoicing Software</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              When freelancers search for &quot;invoice template,&quot; they often discover three distinct approaches to invoicing. Understanding the difference helps you choose the right tool for your stage of business. Here is a direct comparison.
            </p>

            {/* 8-Row Comparison Table */}
            <div className="rounded-2xl border border-gray-700/50 overflow-hidden mt-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-800/80">
                      <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Feature</th>
                      <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Static Template</th>
                      <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Online Generator</th>
                      <th className="text-left text-sm font-medium text-blue-400 px-6 py-4">InvoiceFlow</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700/50">
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-4 text-white font-medium text-sm">Cost</td>
                      <td className="px-6 py-4 text-gray-300 text-sm">Free (Word, Excel, Google Docs)</td>
                      <td className="px-6 py-4 text-gray-300 text-sm">Free (basic) or paid tiers</td>
                      <td className="px-6 py-4 text-blue-400 text-sm">Free tier (5 invoices/mo), paid plans</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-4 text-white font-medium text-sm">Customisation</td>
                      <td className="px-6 py-4 text-gray-300 text-sm">Full control (but manual)</td>
                      <td className="px-6 py-4 text-gray-300 text-sm">Limited to pre-built fields</td>
                      <td className="px-6 py-4 text-blue-400 text-sm">Custom branding, colours, layout</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-4 text-white font-medium text-sm">Automation</td>
                      <td className="px-6 py-4 text-red-400 text-sm">None &mdash; all manual</td>
                      <td className="px-6 py-4 text-yellow-400 text-sm">Basic (auto-fill some fields)</td>
                      <td className="px-6 py-4 text-green-400 text-sm">Full &mdash; numbering, GST calc, recurring</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-4 text-white font-medium text-sm">ATO Compliance</td>
                      <td className="px-6 py-4 text-red-400 text-sm">Your responsibility entirely</td>
                      <td className="px-6 py-4 text-yellow-400 text-sm">Depends on the tool</td>
                      <td className="px-6 py-4 text-green-400 text-sm">Built-in &mdash; ABN, GST, tax invoice rules</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-4 text-white font-medium text-sm">Payment Tracking</td>
                      <td className="px-6 py-4 text-red-400 text-sm">None &mdash; use a separate spreadsheet</td>
                      <td className="px-6 py-4 text-red-400 text-sm">Usually none</td>
                      <td className="px-6 py-4 text-green-400 text-sm">Automatic &mdash; paid, overdue, outstanding</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-4 text-white font-medium text-sm">Storage &amp; Records</td>
                      <td className="px-6 py-4 text-gray-300 text-sm">Local files (you manage backups)</td>
                      <td className="px-6 py-4 text-gray-300 text-sm">Downloaded PDFs (no central store)</td>
                      <td className="px-6 py-4 text-green-400 text-sm">Cloud-based &mdash; all invoices in one place</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-4 text-white font-medium text-sm">Scalability</td>
                      <td className="px-6 py-4 text-red-400 text-sm">Breaks down at 10+ invoices/month</td>
                      <td className="px-6 py-4 text-yellow-400 text-sm">Adequate for occasional use</td>
                      <td className="px-6 py-4 text-green-400 text-sm">Handles unlimited invoices</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-4 text-white font-medium text-sm">Best For</td>
                      <td className="px-6 py-4 text-gray-300 text-sm">Very first invoice, one-off jobs</td>
                      <td className="px-6 py-4 text-gray-300 text-sm">Quick invoice, no account needed</td>
                      <td className="px-6 py-4 text-blue-400 text-sm font-medium">Ongoing freelancing, growing business</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8 mb-3">Static Templates (Word / Excel / PDF)</h3>
            <p className="text-gray-300 leading-relaxed">
              Static templates are the simplest starting point. You download a file, fill in your business details, and save it as your master template. Each time you invoice, you open the template, enter the client details and line items, and export or print the completed invoice. The advantage is <strong className="text-white">zero cost and full control</strong>. The disadvantage is that <em>everything</em> is manual &mdash; numbering, calculations, tracking, and record-keeping.
            </p>

            <h3 className="text-lg font-semibold text-white mt-8 mb-3">Online Invoice Generators</h3>
            <p className="text-gray-300 leading-relaxed">
              Free online generators like the <Link href="/tools/invoice-generator" className="text-blue-400 hover:text-blue-300 underline decoration-blue-500/30">InvoiceFlow Invoice Generator</Link> let you fill in a web form and download a PDF. They handle basic formatting and sometimes calculate GST automatically. They are great for creating a quick invoice without installing software or creating an account. However, they typically do not save your data, track payments, or handle recurring invoices.
            </p>

            <h3 className="text-lg font-semibold text-white mt-8 mb-3">Full Invoicing Software (InvoiceFlow)</h3>
            <p className="text-gray-300 leading-relaxed">
              Invoicing software replaces templates entirely. Instead of managing files and spreadsheets, you <strong className="text-white">create invoices inside the app</strong>. Your business details are saved in your profile. Client details are stored in your contact database. Invoice numbers are auto-generated. GST is calculated automatically. Recurring invoices are scheduled. Payments are tracked. Everything is stored in the cloud and accessible from any device. This is the natural progression for any freelancer sending more than a handful of invoices per month.
            </p>

            <div className="rounded-xl bg-blue-500/5 border border-blue-500/20 p-5 mt-6">
              <p className="text-blue-400 font-medium mb-2">The Progression</p>
              <p className="text-gray-400 text-sm">
                Most freelancers follow this path: <strong className="text-gray-200">static template &rarr; online generator &rarr; invoicing software</strong>. The transition usually happens when manual tracking becomes painful &mdash; forgotten invoice numbers, missed payments, GST calculation errors, or scrambling at BAS time. If you are at that point, InvoiceFlow&apos;s free tier lets you try it with no commitment.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Common Invoice Template Mistakes */}
        <section id="common-mistakes">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-sm font-bold">5</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Common Invoice Template Mistakes</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Even experienced freelancers make invoice template mistakes that cost them money, delay payments, or create compliance issues. Here are the eight most common errors, their consequences, and how to fix them.
            </p>

            <div className="space-y-4 mt-6">
              {/* Mistake 1 */}
              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-6">
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center text-red-400 text-sm font-bold">1</span>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Missing ABN</h4>
                    <p className="text-gray-400 text-sm mb-2">
                      <strong className="text-red-400">Consequence:</strong> Your client is legally required to withhold <strong className="text-gray-200">47% of the payment</strong> and remit it to the ATO. You only receive 53 cents in every dollar until you lodge your tax return and claim the credit. See <Link href="/glossary/withholding-tax" className="text-blue-400 hover:text-blue-300 underline decoration-blue-500/30">Withholding Tax</Link> for the full breakdown.
                    </p>
                    <p className="text-gray-400 text-sm">
                      <strong className="text-green-400">Fix:</strong> Hard-code your ABN into the template. It should be permanently visible in the header, not a field you fill in each time.
                    </p>
                  </div>
                </div>
              </div>

              {/* Mistake 2 */}
              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-6">
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center text-red-400 text-sm font-bold">2</span>
                  <div>
                    <h4 className="text-white font-semibold mb-2">No GST Breakdown</h4>
                    <p className="text-gray-400 text-sm mb-2">
                      <strong className="text-red-400">Consequence:</strong> If you are GST-registered but your invoice does not show the GST amount separately, it is <strong className="text-gray-200">not a valid tax invoice</strong>. Your client cannot claim <Link href="/glossary/input-tax-credits" className="text-blue-400 hover:text-blue-300 underline decoration-blue-500/30">input tax credits</Link> on their BAS, and they may request a corrected invoice before paying.
                    </p>
                    <p className="text-gray-400 text-sm">
                      <strong className="text-green-400">Fix:</strong> Always include three amount lines on GST invoices: subtotal (ex-GST), GST amount (10%), and total (inc-GST). Use formulas in Excel or let software calculate it.
                    </p>
                  </div>
                </div>
              </div>

              {/* Mistake 3 */}
              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-6">
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center text-red-400 text-sm font-bold">3</span>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Unclear Payment Terms</h4>
                    <p className="text-gray-400 text-sm mb-2">
                      <strong className="text-red-400">Consequence:</strong> Without a clear due date, clients have no obligation to pay promptly. Vague terms like &quot;upon receipt&quot; or no terms at all lead to <strong className="text-gray-200">late payments and cash flow problems</strong>. You also have weaker grounds if you need to charge <Link href="/glossary/late-payment-interest" className="text-blue-400 hover:text-blue-300 underline decoration-blue-500/30">late payment interest</Link>.
                    </p>
                    <p className="text-gray-400 text-sm">
                      <strong className="text-green-400">Fix:</strong> Include a specific due date (e.g. &quot;Due: 15 March 2026&quot;) or a clear payment term (e.g. &quot;Payment due within 14 days of invoice date&quot;). See <Link href="/glossary/payment-terms" className="text-blue-400 hover:text-blue-300 underline decoration-blue-500/30">Payment Terms</Link> for standard options.
                    </p>
                  </div>
                </div>
              </div>

              {/* Mistake 4 */}
              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-6">
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center text-red-400 text-sm font-bold">4</span>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Missing or Duplicate Invoice Number</h4>
                    <p className="text-gray-400 text-sm mb-2">
                      <strong className="text-red-400">Consequence:</strong> The ATO requires unique, sequential invoice numbers for record-keeping. Missing numbers create gaps that may <strong className="text-gray-200">raise red flags in an audit</strong>. Duplicate numbers cause confusion for both you and your client, and make reconciliation difficult.
                    </p>
                    <p className="text-gray-400 text-sm">
                      <strong className="text-green-400">Fix:</strong> Use a consistent numbering system (e.g. INV-001, INV-002) and track the last number used. Better yet, use invoicing software that auto-increments.
                    </p>
                  </div>
                </div>
              </div>

              {/* Mistake 5 */}
              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-6">
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center text-red-400 text-sm font-bold">5</span>
                  <div>
                    <h4 className="text-white font-semibold mb-2">No Due Date</h4>
                    <p className="text-gray-400 text-sm mb-2">
                      <strong className="text-red-400">Consequence:</strong> A payment term without a specific date is ambiguous. &quot;Net 30&quot; is fine if the invoice date is clear, but <strong className="text-gray-200">a specific due date removes all ambiguity</strong>. Without it, clients may interpret the payment window differently or simply deprioritise your invoice.
                    </p>
                    <p className="text-gray-400 text-sm">
                      <strong className="text-green-400">Fix:</strong> Include both the payment term and the calculated due date. For example: &quot;Terms: Net 14 | Due Date: 15 March 2026.&quot;
                    </p>
                  </div>
                </div>
              </div>

              {/* Mistake 6 */}
              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-6">
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center text-red-400 text-sm font-bold">6</span>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Wrong or Outdated Business Details</h4>
                    <p className="text-gray-400 text-sm mb-2">
                      <strong className="text-red-400">Consequence:</strong> If your business name, ABN, or contact details have changed but your template has not been updated, clients may <strong className="text-gray-200">pay to the wrong account, reject the invoice, or query your identity</strong>. Outdated ABN details can also trigger withholding.
                    </p>
                    <p className="text-gray-400 text-sm">
                      <strong className="text-green-400">Fix:</strong> Review your template whenever business details change. Set a calendar reminder for an annual review at minimum.
                    </p>
                  </div>
                </div>
              </div>

              {/* Mistake 7 */}
              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-6">
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center text-red-400 text-sm font-bold">7</span>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Not Including Bank Details</h4>
                    <p className="text-gray-400 text-sm mb-2">
                      <strong className="text-red-400">Consequence:</strong> If your invoice does not include your BSB, account number, and account name, the client has to <strong className="text-gray-200">contact you to ask how to pay</strong>. This adds friction and delays payment &mdash; sometimes by days or weeks. Some clients will simply wait until you provide the details.
                    </p>
                    <p className="text-gray-400 text-sm">
                      <strong className="text-green-400">Fix:</strong> Include a &quot;Payment Details&quot; section at the bottom of every invoice with your BSB, account number, account name, and optionally a PayID or payment link.
                    </p>
                  </div>
                </div>
              </div>

              {/* Mistake 8 */}
              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-6">
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center text-red-400 text-sm font-bold">8</span>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Using a Non-Compliant Format</h4>
                    <p className="text-gray-400 text-sm mb-2">
                      <strong className="text-red-400">Consequence:</strong> A template downloaded from a non-Australian source may not include ATO-required fields (ABN, GST breakdown, &quot;Tax Invoice&quot; label). Using it means your invoices are <strong className="text-gray-200">technically invalid as tax invoices</strong> and your clients cannot claim GST credits. This can damage your professional reputation and cause payment disputes.
                    </p>
                    <p className="text-gray-400 text-sm">
                      <strong className="text-green-400">Fix:</strong> Always use a template designed for Australian businesses, or verify that your template includes all ATO-required fields before sending your first invoice.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-red-500/5 border border-red-500/20 p-5 mt-6">
              <p className="text-red-400 font-medium mb-2">The Cost of Mistakes</p>
              <p className="text-gray-400 text-sm">
                Invoice errors do not just cause compliance issues &mdash; they <strong className="text-gray-200">directly impact your cash flow</strong>. A client who receives an invalid invoice will request a corrected one before paying. That correction cycle can add 7 to 14 days to your payment timeline. Multiply that across multiple clients and you are looking at thousands of dollars in delayed revenue every quarter. Prevention is always cheaper than correction.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: How InvoiceFlow Replaces Templates */}
        <section id="invoiceflow-replaces-templates">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-sm font-bold">6</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">How InvoiceFlow Replaces Templates</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Invoice templates served their purpose when freelancing was simpler. But as your business grows, managing templates becomes a liability &mdash; forgotten fields, manual calculations, disconnected records. InvoiceFlow replaces the entire template workflow with a <strong className="text-white">system that handles compliance, calculations, and tracking automatically</strong>.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-blue-500/20 p-6">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">Auto-Generated Compliant Invoices</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Every invoice InvoiceFlow creates is <strong className="text-gray-200">ATO-compliant by default</strong>. Your ABN is always displayed, the &quot;Tax Invoice&quot; header is added automatically for GST-registered users, GST is calculated correctly, and invoice numbers are auto-incremented. You never need to worry about missing a required field.
                </p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-blue-500/20 p-6">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">Saved Client Details</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Add a client once and their details &mdash; name, address, email, ABN, <Link href="/glossary/payment-terms" className="text-blue-400 hover:text-blue-300 underline decoration-blue-500/30">payment terms</Link> &mdash; are <strong className="text-gray-200">saved for every future invoice</strong>. No more retyping. No more copy-paste errors. Select the client from your list and start adding line items immediately.
                </p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-blue-500/20 p-6">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">Recurring Invoice Schedules</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  For <Link href="/glossary/retainer" className="text-blue-400 hover:text-blue-300 underline decoration-blue-500/30">retainer</Link> clients or monthly services, set up a recurring schedule and InvoiceFlow <strong className="text-gray-200">generates and sends invoices automatically</strong>. Weekly, fortnightly, monthly, quarterly &mdash; choose the frequency and let the system handle the rest. No more forgetting to send an invoice.
                </p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-blue-500/20 p-6">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18v-.008zm-12 0h.008v.008H6v-.008z" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">Payment Tracking Dashboard</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  See all your invoices in one place: <strong className="text-gray-200">draft, sent, viewed, paid, and overdue</strong>. Know exactly how much revenue is outstanding, what is due this week, and which clients are consistently late. This visibility is impossible with static templates and spreadsheets.
                </p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-blue-500/20 p-6 sm:col-span-2">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">Professional Design Without Effort</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  InvoiceFlow&apos;s templates are designed by professionals. Your invoices look polished and branded without you spending hours in Word or InDesign. Add your logo, choose your brand colours, and every invoice you send <strong className="text-gray-200">reflects the quality of your work</strong>. First impressions matter &mdash; a professional invoice signals a professional business.
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-blue-500/5 border border-blue-500/20 p-5 mt-6">
              <p className="text-blue-400 font-medium mb-2">Why Software Beats Templates</p>
              <p className="text-gray-400 text-sm">
                Templates are a <strong className="text-gray-200">tool</strong>. Software is a <strong className="text-gray-200">system</strong>. A tool helps you do one task. A system handles the entire workflow &mdash; creation, compliance, delivery, tracking, and reporting. If you are spending more than 30 minutes a week on invoicing admin, you have outgrown templates. InvoiceFlow&apos;s free tier handles up to 5 invoices per month at no cost, so there is no reason not to make the switch.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Related Tools */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-white mb-2 text-center">Related Tools</h2>
        <p className="text-gray-400 text-center mb-8">Free tools to help you create compliant invoices and manage your billing.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {relatedTools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:border-blue-500/50 hover:bg-gray-800/80 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4">
                {tool.icon}
              </div>
              <h3 className="text-white font-medium mb-2 group-hover:text-blue-400 transition-colors">{tool.name}</h3>
              <p className="text-sm text-gray-400">{tool.description}</p>
              <div className="mt-4 text-blue-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                Use tool
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Related Guides */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-white mb-2 text-center">Related Guides</h2>
        <p className="text-gray-400 text-center mb-8">In-depth guides on invoicing, GST, and getting paid in Australia.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {relatedGuides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group p-6 rounded-2xl bg-gray-800/40 border border-gray-700/40 hover:border-blue-500/40 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h3 className="text-white font-medium mb-2 group-hover:text-blue-400 transition-colors">{guide.name}</h3>
              <p className="text-sm text-gray-400">{guide.description}</p>
              <div className="mt-4 text-blue-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                Read guide
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-3xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {(faqSchema.mainEntity as Array<{ '@type': string; name: string; acceptedAnswer: { text: string } }>).map((faq, i) => (
            <details key={i} className="group rounded-xl bg-gray-800/40 border border-gray-700/40">
              <summary className="flex items-center justify-between cursor-pointer px-6 py-4 text-white font-medium hover:text-blue-400 transition-colors">
                {faq.name}
                <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-gray-400 text-sm leading-relaxed">
                {faq.acceptedAnswer.text}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Email Capture */}
      <section className="max-w-4xl mx-auto px-4 pb-16">
        <EmailCapture />
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 pb-20 text-center">
        <div className="rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stop Managing Templates. Start Sending Invoices.
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            InvoiceFlow replaces your Word docs, Excel sheets, and manual tracking with a single system that creates ATO-compliant invoices, saves client details, calculates GST, and tracks payments automatically.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button>Start Free &mdash; No Card Required</Button>
            </Link>
            <Link href="/tools/invoice-generator">
              <Button variant="secondary">Try the Free Invoice Generator</Button>
            </Link>
          </div>
          <p className="mt-6 text-sm text-gray-500">
            Free plan includes 5 invoices per month. No credit card required.
          </p>
        </div>
      </section>
    </div>
  );
}
