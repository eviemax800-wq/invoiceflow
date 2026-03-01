import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Subcontractor: Definition, Tax Obligations & Invoicing in Australia — InvoiceFlow',
  description:
    'What is a subcontractor in Australia? Learn the difference between subcontractors, contractors, and employees. Covers ABN requirements, GST, TPAR reporting, super obligations, invoicing rules, and the Closing Loopholes Act 2024. Updated for 2025-26.',
  keywords: [
    'subcontractor vs contractor australia',
    'subcontractor obligations',
    'subcontractor invoicing',
    'what is a subcontractor',
    'subcontractor tax australia',
    'subcontractor ABN requirements',
    'TPAR subcontractor reporting',
  ],
  alternates: { canonical: '/glossary/subcontractor' },
  openGraph: {
    title: 'Subcontractor: Definition, Tax Obligations & Invoicing in Australia — InvoiceFlow',
    description:
      'The complete guide to subcontracting in Australia: definition, tax obligations, invoicing requirements, TPAR reporting, super rules, and legal protections under the Closing Loopholes Act 2024.',
    url: 'https://invoiceflow-teal.vercel.app/glossary/subcontractor',
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
    { '@type': 'ListItem', position: 3, name: 'Subcontractor', item: `${BASE_URL}/glossary/subcontractor` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the difference between a subcontractor and a contractor?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A contractor is hired directly by the end client to deliver a project or service. A subcontractor is hired by the contractor (not the end client) to perform part of that project. For example, if a client hires a building company to renovate their kitchen, the building company is the contractor. If the building company then hires an electrician to do the wiring, the electrician is a subcontractor. Both must have their own ABN and manage their own tax, but the contractual relationship differs — the subcontractor\'s agreement is with the contractor, not the client.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do subcontractors need an ABN?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, subcontractors in Australia must have an Australian Business Number (ABN) and quote it on every invoice. If a subcontractor does not provide their ABN, the hiring contractor is legally required to withhold 47% of the payment (the top marginal tax rate of 45% plus the 2% Medicare levy) and remit it to the ATO under the no-ABN withholding rules. Registering for an ABN is free and can be done online at abr.gov.au in about 10 minutes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to pay super as a subcontractor?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If you are a sole trader subcontractor, paying your own superannuation is not mandatory — but it is strongly recommended for your retirement. However, the hiring contractor may be required to pay the 11.5% Superannuation Guarantee (SG) on your behalf if the contract is "wholly or principally for the labour of the person." This typically applies when the subcontractor is paid by the hour (not for a result), must perform work personally, and uses the contractor\'s tools. If you operate through a company or trust and pay yourself a salary, you must pay SG on that salary.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is TPAR and does it affect subcontractors?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Taxable Payments Annual Report (TPAR) is a report that businesses in certain industries must lodge with the ATO by 28 August each year. It details all payments made to subcontractors during the financial year. Industries that must lodge TPAR include building and construction, cleaning, courier and delivery, IT services, security, investigation and surveillance, and road freight. The TPAR helps the ATO match income reported by subcontractors against payments reported by the businesses that hire them. Subcontractors should be aware that their income is being reported and ensure their own tax returns match.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do subcontractors invoice for their work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Subcontractors should issue a tax invoice that includes: their ABN, business name, invoice number, date of issue, description of services performed, hours and rate (or fixed fee), GST amount if GST-registered (with "Tax Invoice" heading), total amount including GST, payment terms (typically 14-30 days), and bank account details. If not registered for GST, the invoice should not include GST and does not need the "Tax Invoice" heading. Using invoicing software like InvoiceFlow ensures compliance with ATO requirements and creates a professional, auditable record of all work performed.',
      },
    },
  ],
};

const tocItems = [
  { id: 'what-is-a-subcontractor', label: '1. What Is a Subcontractor?' },
  { id: 'subcontractor-vs-contractor-vs-employee', label: '2. Subcontractor vs Contractor vs Employee' },
  { id: 'tax-obligations', label: '3. Tax Obligations for Subcontractors' },
  { id: 'invoicing-as-a-subcontractor', label: '4. Invoicing as a Subcontractor' },
  { id: 'rights-and-protections', label: '5. Subcontractor Rights & Protections' },
  { id: 'how-invoiceflow-helps', label: '6. How InvoiceFlow Helps' },
];

const relatedTools = [
  {
    href: '/tools/subcontractor-agreement-generator',
    name: 'Subcontractor Agreement Generator',
    description: 'Generate a professional subcontractor agreement that covers scope, payment terms, IP, and compliance.',
    icon: (
      <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    href: '/tools/invoice-generator',
    name: 'Invoice Generator',
    description: 'Create ATO-compliant tax invoices with your ABN, GST, and proper subcontractor payment terms.',
    icon: (
      <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18v-.008zm-12 0h.008v.008H6v-.008z" />
      </svg>
    ),
  },
  {
    href: '/tools/abn-lookup',
    name: 'ABN Lookup',
    description: 'Verify any Australian Business Number instantly and check GST registration status.',
    icon: (
      <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
  {
    href: '/tools/contractor-vs-employee-calculator',
    name: 'Contractor vs Employee Calculator',
    description: 'Answer a few questions to determine whether a working arrangement is contractor or employee.',
    icon: (
      <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
  },
];

const relatedGuides = [
  {
    href: '/guides/gst-for-freelancers',
    name: 'GST for Freelancers',
    description: 'When to register for GST, how to charge it on invoices, claim input tax credits, and lodge your BAS.',
  },
  {
    href: '/guides/abn-guide',
    name: 'ABN Guide',
    description: 'How to register for an ABN, when you need one, and how to use it on invoices as a subcontractor.',
  },
  {
    href: '/guides/invoicing-101',
    name: 'Invoicing 101',
    description: 'Everything you need to know about creating professional, ATO-compliant invoices in Australia.',
  },
];

export default function SubcontractorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative px-4 pt-20 pb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/10 blur-3xl" />
        <div className="relative max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/glossary" className="hover:text-white transition-colors">Glossary</Link>
            <span>/</span>
            <span className="text-white">Subcontractor</span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            Glossary &mdash; Business Structure
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Subcontractor{' '}
            <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
              in Australia
            </span>
          </h1>

          {/* Summary */}
          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            A subcontractor is hired by a contractor &mdash; not the end client &mdash; to perform part of a project. With approximately 2.5 million independent contractors and subcontractors operating across Australia, understanding the distinction, tax obligations, and invoicing requirements is essential for anyone in construction, IT, design, marketing, or professional services.
          </p>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>16 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>ATO-Accurate 2025-26</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
              </svg>
              <span>Updated March 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* In a Nutshell */}
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <div className="rounded-2xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20 p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-white">In a Nutshell</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 text-xs font-bold">2.5M</span>
              <div>
                <p className="text-white font-medium text-sm">Independent Workers in Australia</p>
                <p className="text-gray-400 text-sm">Approximately 2.5 million people operate as independent contractors or subcontractors</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 text-xs font-bold">47%</span>
              <div>
                <p className="text-white font-medium text-sm">No-ABN Withholding Rate</p>
                <p className="text-gray-400 text-sm">Tax withheld if a subcontractor fails to quote their ABN on an invoice</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 text-xs font-bold">$75K</span>
              <div>
                <p className="text-white font-medium text-sm">GST Registration Threshold</p>
                <p className="text-gray-400 text-sm">Must register for GST once annual turnover exceeds $75,000</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 text-xs font-bold">28 Aug</span>
              <div>
                <p className="text-white font-medium text-sm">TPAR Lodgement Deadline</p>
                <p className="text-gray-400 text-sm">Annual deadline for contractors to report all payments to subcontractors</p>
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
                className="flex items-center gap-2 text-gray-400 hover:text-amber-400 transition-colors text-sm py-1"
              >
                <svg className="w-4 h-4 text-amber-500/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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

        {/* Section 1: What Is a Subcontractor? */}
        <section id="what-is-a-subcontractor">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold">1</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">What Is a Subcontractor?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              A subcontractor is a <strong className="text-white">person or business hired by a contractor &mdash; not the end client &mdash; to perform part of a project</strong>. This is the key distinction: contractors work directly for clients, while subcontractors work for contractors. The subcontractor has no direct contractual relationship with the end client.
            </p>
            <p className="text-gray-300 leading-relaxed">
              In Australia, approximately <strong className="text-white">2.5 million workers</strong> operate as independent contractors or subcontractors across a wide range of industries. Subcontracting is particularly common in <strong className="text-white">construction, IT, design, marketing, and professional services</strong> &mdash; any industry where a primary contractor wins a project and then brings in specialists to deliver specific components of the work.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Subcontractors are <strong className="text-white">not employees</strong>. They must have their own Australian Business Number (ABN) and are fully responsible for their own tax, superannuation, and insurance. They typically provide their own tools and equipment, set their own hours, and have the freedom to work for multiple contractors simultaneously.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-amber-500/20 p-5">
                <h4 className="text-amber-400 font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                  How Subcontracting Works
                </h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>Client hires a <strong className="text-gray-200">contractor</strong> to deliver a project</li>
                  <li>Contractor hires a <strong className="text-gray-200">subcontractor</strong> for specific tasks</li>
                  <li>Subcontractor invoices the contractor (not the client)</li>
                  <li>Contractor is responsible for the overall project delivery</li>
                  <li>Subcontractor is responsible for their specific scope of work</li>
                </ul>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-emerald-500/20 p-5">
                <h4 className="text-emerald-400 font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0" />
                  </svg>
                  Common Industries
                </h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><strong className="text-gray-200">Construction:</strong> Electricians, plumbers, tilers, painters</li>
                  <li><strong className="text-gray-200">IT:</strong> Developers, QA testers, security consultants</li>
                  <li><strong className="text-gray-200">Design:</strong> Graphic designers, UX/UI specialists</li>
                  <li><strong className="text-gray-200">Marketing:</strong> Copywriters, SEO specialists, videographers</li>
                  <li><strong className="text-gray-200">Professional Services:</strong> Accountants, lawyers, engineers</li>
                </ul>
              </div>
            </div>

            <div className="rounded-xl bg-amber-500/5 border border-amber-500/20 p-5 mt-6">
              <p className="text-amber-400 font-medium mb-2">Practical Example</p>
              <p className="text-gray-400 text-sm">
                A Melbourne homeowner hires <strong className="text-gray-200">ABC Building Pty Ltd</strong> to renovate their kitchen for $80,000. ABC Building is the <strong className="text-gray-200">contractor</strong>. ABC Building then hires an independent plumber to do the plumbing work for $12,000. The plumber is a <strong className="text-gray-200">subcontractor</strong>. The plumber invoices ABC Building (not the homeowner), uses their own tools, holds their own ABN, and manages their own tax. ABC Building must report the $12,000 payment on their TPAR lodgement.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Subcontractor vs Contractor vs Employee */}
        <section id="subcontractor-vs-contractor-vs-employee">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold">2</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Subcontractor vs Contractor vs Employee</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Understanding the differences between a subcontractor, a contractor, and an employee is critical for <strong className="text-white">tax compliance, legal protection, and correct invoicing</strong>. While subcontractors and contractors share many characteristics, their contractual relationships differ. Employees are an entirely separate classification with significantly different rights and obligations.
            </p>

            {/* Comparison Table */}
            <div className="overflow-x-auto mt-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr>
                    <th className="text-left p-4 bg-gray-800/80 border border-gray-700/50 text-gray-400 font-medium">Factor</th>
                    <th className="text-left p-4 bg-amber-500/10 border border-gray-700/50 text-amber-400 font-medium">Contractor</th>
                    <th className="text-left p-4 bg-orange-500/10 border border-gray-700/50 text-orange-400 font-medium">Subcontractor</th>
                    <th className="text-left p-4 bg-gray-800/80 border border-gray-700/50 text-gray-400 font-medium">Employee</th>
                  </tr>
                </thead>
                <tbody className="text-gray-400">
                  <tr>
                    <td className="p-4 border border-gray-700/50 bg-gray-800/30 font-medium text-gray-300">Hired by</td>
                    <td className="p-4 border border-gray-700/50 bg-gray-800/20">End client directly</td>
                    <td className="p-4 border border-gray-700/50 bg-gray-800/20">Contractor (not the client)</td>
                    <td className="p-4 border border-gray-700/50 bg-gray-800/20">Employer</td>
                  </tr>
                  <tr>
                    <td className="p-4 border border-gray-700/50 bg-gray-800/30 font-medium text-gray-300">ABN required</td>
                    <td className="p-4 border border-gray-700/50 bg-gray-800/20">Yes</td>
                    <td className="p-4 border border-gray-700/50 bg-gray-800/20">Yes</td>
                    <td className="p-4 border border-gray-700/50 bg-gray-800/20">No (uses TFN)</td>
                  </tr>
                  <tr>
                    <td className="p-4 border border-gray-700/50 bg-gray-800/30 font-medium text-gray-300">Tax withholding</td>
                    <td className="p-4 border border-gray-700/50 bg-gray-800/20">Self-managed</td>
                    <td className="p-4 border border-gray-700/50 bg-gray-800/20">Self-managed</td>
                    <td className="p-4 border border-gray-700/50 bg-gray-800/20">PAYG withheld by employer</td>
                  </tr>
                  <tr>
                    <td className="p-4 border border-gray-700/50 bg-gray-800/30 font-medium text-gray-300">Super guarantee</td>
                    <td className="p-4 border border-gray-700/50 bg-gray-800/20">Self-funded*</td>
                    <td className="p-4 border border-gray-700/50 bg-gray-800/20">Self-funded*</td>
                    <td className="p-4 border border-gray-700/50 bg-gray-800/20">Employer pays 11.5%</td>
                  </tr>
                  <tr>
                    <td className="p-4 border border-gray-700/50 bg-gray-800/30 font-medium text-gray-300">Leave entitlements</td>
                    <td className="p-4 border border-gray-700/50 bg-gray-800/20">None</td>
                    <td className="p-4 border border-gray-700/50 bg-gray-800/20">None</td>
                    <td className="p-4 border border-gray-700/50 bg-gray-800/20">Annual, sick, long service</td>
                  </tr>
                  <tr>
                    <td className="p-4 border border-gray-700/50 bg-gray-800/30 font-medium text-gray-300">Insurance</td>
                    <td className="p-4 border border-gray-700/50 bg-gray-800/20">Self-arranged</td>
                    <td className="p-4 border border-gray-700/50 bg-gray-800/20">Self-arranged</td>
                    <td className="p-4 border border-gray-700/50 bg-gray-800/20">Employer provides WorkCover</td>
                  </tr>
                  <tr>
                    <td className="p-4 border border-gray-700/50 bg-gray-800/30 font-medium text-gray-300">GST</td>
                    <td className="p-4 border border-gray-700/50 bg-gray-800/20">Register if $75K+ turnover</td>
                    <td className="p-4 border border-gray-700/50 bg-gray-800/20">Register if $75K+ turnover</td>
                    <td className="p-4 border border-gray-700/50 bg-gray-800/20">N/A</td>
                  </tr>
                  <tr>
                    <td className="p-4 border border-gray-700/50 bg-gray-800/30 font-medium text-gray-300">Work hours</td>
                    <td className="p-4 border border-gray-700/50 bg-gray-800/20">Sets own hours</td>
                    <td className="p-4 border border-gray-700/50 bg-gray-800/20">Sets own hours</td>
                    <td className="p-4 border border-gray-700/50 bg-gray-800/20">Employer directs</td>
                  </tr>
                  <tr>
                    <td className="p-4 border border-gray-700/50 bg-gray-800/30 font-medium text-gray-300">Tools/equipment</td>
                    <td className="p-4 border border-gray-700/50 bg-gray-800/20">Provides own</td>
                    <td className="p-4 border border-gray-700/50 bg-gray-800/20">Provides own</td>
                    <td className="p-4 border border-gray-700/50 bg-gray-800/20">Employer provides</td>
                  </tr>
                  <tr>
                    <td className="p-4 border border-gray-700/50 bg-gray-800/30 font-medium text-gray-300">Risk of loss</td>
                    <td className="p-4 border border-gray-700/50 bg-gray-800/20">Bears business risk</td>
                    <td className="p-4 border border-gray-700/50 bg-gray-800/20">Bears business risk</td>
                    <td className="p-4 border border-gray-700/50 bg-gray-800/20">No business risk</td>
                  </tr>
                  <tr>
                    <td className="p-4 border border-gray-700/50 bg-gray-800/30 font-medium text-gray-300">Invoices for work</td>
                    <td className="p-4 border border-gray-700/50 bg-gray-800/20">Yes &mdash; invoices client</td>
                    <td className="p-4 border border-gray-700/50 bg-gray-800/20">Yes &mdash; invoices contractor</td>
                    <td className="p-4 border border-gray-700/50 bg-gray-800/20">No &mdash; receives payslip</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-400 text-sm mt-4">
              <strong className="text-amber-400">*Super exception:</strong> If a subcontractor or contractor works under a contract that is &quot;wholly or principally for the labour of the person&quot; and produces a &quot;result,&quot; the hiring business may be required to pay the 11.5% superannuation guarantee on top of payments. This commonly applies when the worker is paid by the hour, must perform work personally, and uses the hirer&apos;s tools.
            </p>

            <div className="rounded-2xl bg-gradient-to-br from-red-900/20 to-red-800/10 border border-red-500/30 p-6 mt-6">
              <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
                Sham Contracting Warning
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                The ATO and Fair Work Ombudsman actively target <strong className="text-gray-200">misclassification of employees as subcontractors</strong>. If a working arrangement has the characteristics of employment (directed hours, employer&apos;s tools, no delegation rights, no business risk), calling the worker a &quot;subcontractor&quot; does not make them one. Sham contracting penalties can reach <strong className="text-gray-200">$469,500 per contravention for a company</strong> and <strong className="text-gray-200">$93,900 per contravention for an individual</strong> under the Fair Work Act 2009.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Tax Obligations for Subcontractors */}
        <section id="tax-obligations">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold">3</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Tax Obligations for Subcontractors</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              As an independent business operator, subcontractors are <strong className="text-white">fully responsible for their own tax compliance</strong>. There is no employer withholding tax on your behalf, no automatic super contributions, and no one lodging your BAS for you. Here is a comprehensive breakdown of every tax obligation you need to manage.
            </p>

            <div className="grid gap-4 mt-6">
              {/* ABN */}
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-bold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-full">ABN</span>
                  <h3 className="text-lg font-semibold text-white">Australian Business Number</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  An ABN is <strong className="text-gray-200">mandatory for all subcontractors</strong>. It identifies you as a business entity and must be quoted on every invoice. Without an ABN, the hiring contractor is legally required to withhold <strong className="text-gray-200">47% of the total payment</strong> (the top marginal tax rate of 45% plus the 2% Medicare levy) and remit it to the ATO. Registration is free at abr.gov.au and takes approximately 10 minutes.
                </p>
              </div>

              {/* GST */}
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-bold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-full">GST</span>
                  <h3 className="text-lg font-semibold text-white">Goods and Services Tax</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  You <strong className="text-gray-200">must register for GST</strong> if your GST turnover (gross income from all business activities) exceeds <strong className="text-gray-200">$75,000 per year</strong>. Once registered, you charge 10% GST on all invoices, claim input tax credits on business expenses, and lodge a Business Activity Statement (BAS) quarterly. Even if you are below the threshold, you can register voluntarily to claim input tax credits on tools, software, and other business expenses.
                </p>
              </div>

              {/* Income Tax */}
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-bold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-full">INCOME TAX</span>
                  <h3 className="text-lg font-semibold text-white">Income Tax</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  You pay income tax on your <strong className="text-gray-200">net business income</strong> (total revenue minus allowable deductions). As a sole trader, this flows through to your personal tax return at individual marginal rates. Budget <strong className="text-gray-200">25-35% of net income</strong> for tax to avoid a surprise bill at tax time. Common deductions include tools, vehicle expenses, home office, software licences, professional development, and insurance premiums.
                </p>
              </div>

              {/* PAYG Instalments */}
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-bold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-full">PAYG</span>
                  <h3 className="text-lg font-semibold text-white">PAYG Instalments</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  The ATO may require you to make <strong className="text-gray-200">quarterly PAYG instalment payments</strong> based on your previous year&apos;s income. These are pre-payments of your expected annual tax liability, reported on your BAS. You can use the instalment rate method (percentage of current income) or the instalment amount method (fixed quarterly amount). This prevents a large tax bill at the end of the financial year.
                </p>
              </div>

              {/* Super */}
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-bold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-full">SUPER</span>
                  <h3 className="text-lg font-semibold text-white">Superannuation</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-3">
                  Paying super is <strong className="text-gray-200">not mandatory for sole trader subcontractors</strong> paying themselves, but it is strongly recommended. You can make voluntary concessional contributions (up to $30,000/year) and claim a tax deduction by lodging a &quot;Notice of Intent to Claim&quot; with your super fund.
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  <strong className="text-gray-200">Important exception:</strong> If the contract is &quot;wholly or principally for the labour of the person,&quot; the <strong className="text-gray-200">hiring contractor may be required to pay SG (11.5%)</strong> on your behalf. This typically applies when you are paid by the hour, must perform work personally, and use the hirer&apos;s tools.
                </p>
              </div>

              {/* TPAR */}
              <div className="rounded-xl bg-gray-800/50 border border-amber-500/20 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-bold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-full">TPAR</span>
                  <h3 className="text-lg font-semibold text-white">Taxable Payments Annual Report</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-3">
                  Contractors in specific industries must lodge a <strong className="text-gray-200">Taxable Payments Annual Report (TPAR)</strong> by <strong className="text-gray-200">28 August each year</strong>, reporting all payments made to subcontractors during the financial year. The ATO uses this data to cross-match income declared by subcontractors.
                </p>
                <p className="text-amber-400 text-sm font-medium mb-2">Industries that must lodge TPAR:</p>
                <div className="grid sm:grid-cols-2 gap-2">
                  <ul className="space-y-1 text-sm text-gray-400">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                      Building and construction
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                      Cleaning services
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                      Courier and delivery
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                      IT services
                    </li>
                  </ul>
                  <ul className="space-y-1 text-sm text-gray-400">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                      Security, investigation, surveillance
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                      Road freight
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                      Government entities (all industries)
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-amber-500/5 border border-amber-500/20 p-5 mt-6">
              <p className="text-amber-400 font-medium mb-2">Tax Compliance Checklist for Subcontractors</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Register for an ABN (free at abr.gov.au)</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Register for GST if turnover exceeds $75,000</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Lodge BAS quarterly (report GST and PAYG instalments)</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Set aside 25-35% of net income for tax</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Make voluntary super contributions and claim the deduction</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Keep records for 5 years (ATO requirement)</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 4: Invoicing as a Subcontractor */}
        <section id="invoicing-as-a-subcontractor">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold">4</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Invoicing as a Subcontractor</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Professional, compliant invoicing is not optional for subcontractors &mdash; it is a <strong className="text-white">legal requirement and a business essential</strong>. Your invoices are your primary documentation for the work performed, and they must meet ATO requirements to ensure you are paid correctly and your income is properly reported.
            </p>

            {/* What to Include */}
            <div className="rounded-xl bg-gray-800/50 border border-amber-500/20 p-6 mt-6">
              <h4 className="text-amber-400 font-semibold mb-4">What Every Subcontractor Invoice Must Include</h4>
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="space-y-2 text-sm text-gray-400">
                  <div className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Your <strong className="text-gray-200">ABN</strong></span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Your <strong className="text-gray-200">business name</strong></span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Unique <strong className="text-gray-200">invoice number</strong></span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span><strong className="text-gray-200">Date of issue</strong></span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span><strong className="text-gray-200">Description of services</strong></span>
                  </div>
                </div>
                <div className="space-y-2 text-sm text-gray-400">
                  <div className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span><strong className="text-gray-200">Hours/rate</strong> or fixed fee</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span><strong className="text-gray-200">GST amount</strong> (if registered)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span><strong className="text-gray-200">Payment terms</strong></span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span><strong className="text-gray-200">Bank account details</strong></span>
                  </div>
                </div>
              </div>
            </div>

            {/* Tax Invoice Requirements */}
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 mt-4">
              <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>
                Tax Invoice Requirements (If GST-Registered)
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed mb-3">
                If you are registered for GST, your invoices must meet the ATO&apos;s <strong className="text-gray-200">tax invoice requirements</strong>. A valid tax invoice must include:
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold text-xs flex-shrink-0 mt-0.5">1</span>
                  <span>The words <strong className="text-gray-200">&quot;Tax Invoice&quot;</strong> prominently displayed at the top</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold text-xs flex-shrink-0 mt-0.5">2</span>
                  <span>Your <strong className="text-gray-200">ABN</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold text-xs flex-shrink-0 mt-0.5">3</span>
                  <span>The <strong className="text-gray-200">GST amount</strong> shown separately (or a statement that the total price includes GST)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold text-xs flex-shrink-0 mt-0.5">4</span>
                  <span>The <strong className="text-gray-200">total amount including GST</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold text-xs flex-shrink-0 mt-0.5">5</span>
                  <span>For invoices over $1,000: the buyer&apos;s identity or ABN</span>
                </li>
              </ul>
            </div>

            {/* No-ABN Withholding */}
            <div className="rounded-2xl bg-gradient-to-br from-red-900/20 to-red-800/10 border border-red-500/30 p-6 mt-4">
              <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
                No-ABN Withholding: 47% of Your Payment
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                If you do not quote your ABN on an invoice, the hiring contractor is legally required to <strong className="text-gray-200">withhold 47% of the payment</strong> and remit it to the ATO. This is not negotiable &mdash; it is a legal obligation on the payer. The withheld amount is credited against your tax liability when you lodge your return, but it means severely reduced cash flow in the meantime. <strong className="text-gray-200">Always include your ABN on every invoice.</strong>
              </p>
            </div>

            {/* RCTI */}
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 mt-4">
              <h4 className="text-white font-semibold mb-3">Recipient-Created Tax Invoices (RCTI)</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                In some industries &mdash; particularly <strong className="text-gray-200">construction</strong> &mdash; the hiring contractor creates the invoice on the subcontractor&apos;s behalf. This is called a Recipient-Created Tax Invoice (RCTI). Both parties must have a <strong className="text-gray-200">written RCTI agreement</strong> in place before this can occur. The subcontractor must not issue their own tax invoice for the same supply. RCTIs are common where the contractor manages progress claims and milestone payments.
              </p>
            </div>

            {/* Payment Terms */}
            <div className="rounded-xl bg-amber-500/5 border border-amber-500/20 p-5 mt-4">
              <p className="text-amber-400 font-medium mb-2">Payment Terms and Security of Payment</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Standard payment terms for subcontractors are <strong className="text-gray-200">14 to 30 days</strong>. In the construction industry, each Australian state has <strong className="text-gray-200">Security of Payment legislation</strong> (Building and Construction Industry Security of Payment Act) that provides critical protections: the right to progress payments, a formal adjudication process for payment disputes, and mandated payment timeframes (typically 10-15 business days after a valid payment claim). If a contractor is not paying you on time, these Acts provide a fast-track dispute resolution mechanism that is significantly quicker and cheaper than going to court.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Subcontractor Rights & Protections */}
        <section id="rights-and-protections">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold">5</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Subcontractor Rights &amp; Protections</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              While subcontractors do not receive employee entitlements like leave and redundancy pay, Australian law provides <strong className="text-white">significant protections</strong> against unfair treatment, sham contracting, and non-payment. Here are the key pieces of legislation every subcontractor should know.
            </p>

            <div className="grid gap-4 mt-6">
              {/* Independent Contractors Act */}
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-bold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-full">LEGISLATION</span>
                  <h3 className="text-lg font-semibold text-white">Independent Contractors Act 2006</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  This federal legislation protects independent contractors (including subcontractors) against <strong className="text-gray-200">unfair contracts and sham arrangements</strong>. It allows contractors to apply to a court to have a contract varied or set aside if it is found to be harsh, unfair, or unconscionable. It also prohibits employers from coercing employees into becoming independent contractors.
                </p>
              </div>

              {/* Closing Loopholes Act */}
              <div className="rounded-xl bg-gray-800/50 border border-amber-500/20 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-bold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-full">NEW 2024</span>
                  <h3 className="text-lg font-semibold text-white">Closing Loopholes Act 2024</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-3">
                  This landmark legislation introduced <strong className="text-gray-200">significant new protections</strong> for independent contractors and gig workers:
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span><strong className="text-gray-200">Unfair contract terms:</strong> New protections against unfair terms in services contracts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span><strong className="text-gray-200">Platform deactivation:</strong> Right to challenge unfair deactivation from digital platforms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span><strong className="text-gray-200">&quot;Employee-like&quot; definition:</strong> New classification for gig workers that provides minimum standards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span><strong className="text-gray-200">Strengthened sham contracting provisions:</strong> Easier to prove and harder to defend</span>
                  </li>
                </ul>
              </div>

              {/* Security of Payment */}
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-bold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-full">CONSTRUCTION</span>
                  <h3 className="text-lg font-semibold text-white">Security of Payment Acts</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Each Australian state and territory has its own <strong className="text-gray-200">Building and Construction Industry Security of Payment Act</strong>. These Acts provide powerful protections for subcontractors in the construction industry: the right to <strong className="text-gray-200">progress payments</strong> for work performed, a rapid <strong className="text-gray-200">adjudication process</strong> for payment disputes (decisions typically within 10 business days), and mandated <strong className="text-gray-200">payment timeframes of 10-15 business days</strong>. If a contractor is not paying you, these Acts are often more effective than traditional litigation.
                </p>
              </div>

              {/* Sham Contracting */}
              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-bold text-red-400 bg-red-500/10 px-2.5 py-1 rounded-full">WARNING</span>
                  <h3 className="text-lg font-semibold text-white">Sham Contracting</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-3">
                  Sham contracting occurs when an employer <strong className="text-gray-200">misrepresents an employment relationship as a subcontracting arrangement</strong> to avoid paying employee entitlements (super, leave, WorkCover). Under sections 357-359 of the Fair Work Act 2009, this is illegal.
                </p>
                <div className="grid sm:grid-cols-2 gap-3 mt-3">
                  <div className="rounded-lg bg-gray-900/50 p-3 border border-red-500/10">
                    <p className="text-red-400 text-xs font-semibold mb-2">COMPANY PENALTY</p>
                    <p className="text-white text-lg font-bold">$469,500</p>
                    <p className="text-gray-400 text-xs">per contravention</p>
                  </div>
                  <div className="rounded-lg bg-gray-900/50 p-3 border border-red-500/10">
                    <p className="text-red-400 text-xs font-semibold mb-2">INDIVIDUAL PENALTY</p>
                    <p className="text-white text-lg font-bold">$93,900</p>
                    <p className="text-gray-400 text-xs">per contravention</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mt-3">
                  The Fair Work Ombudsman (FWO) actively enforces sham contracting provisions. If you believe you are being treated as an employee but engaged as a subcontractor, you can lodge a complaint with the FWO or use the ATO&apos;s free <strong className="text-gray-200">Employee/Contractor Decision Tool</strong> at ato.gov.au to assess your situation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: How InvoiceFlow Helps */}
        <section id="how-invoiceflow-helps">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold">6</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">How InvoiceFlow Helps</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              InvoiceFlow is built specifically for Australian freelancers, contractors, and subcontractors. It handles the compliance, formatting, and tracking so you can focus on delivering great work.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-amber-500/20 p-6">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                  </svg>
                </div>
                <h3 className="text-white font-medium mb-2">Create Compliant Tax Invoices</h3>
                <p className="text-sm text-gray-400">Generate ATO-compliant tax invoices with your ABN, GST calculations, and proper formatting &mdash; every time, automatically.</p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-amber-500/20 p-6">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18v-.008zm-12 0h.008v.008H6v-.008z" />
                  </svg>
                </div>
                <h3 className="text-white font-medium mb-2">Track Payments from Multiple Contractors</h3>
                <p className="text-sm text-gray-400">Manage invoices across multiple contractors you work for. See who has paid, what is outstanding, and chase overdue payments.</p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-amber-500/20 p-6">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
                  </svg>
                </div>
                <h3 className="text-white font-medium mb-2">GST-Ready Invoicing and BAS Data</h3>
                <p className="text-sm text-gray-400">Automatically calculate GST, track input tax credits, and export BAS-ready data for your quarterly lodgement.</p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-amber-500/20 p-6">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                  </svg>
                </div>
                <h3 className="text-white font-medium mb-2">TPAR-Ready Payment Reporting</h3>
                <p className="text-sm text-gray-400">If you hire subcontractors yourself, InvoiceFlow tracks all payments and generates TPAR-ready data for your 28 August lodgement.</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Related Glossary Terms */}
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <div className="rounded-2xl bg-gray-800/50 border border-gray-700/50 p-8">
          <h2 className="text-lg font-bold text-white mb-4">Related Glossary Terms</h2>
          <div className="flex flex-wrap gap-2">
            {[
              { href: '/glossary/contractor-vs-employee', label: 'Contractor vs Employee' },
              { href: '/glossary/abn', label: 'ABN' },
              { href: '/glossary/gst', label: 'GST' },
              { href: '/glossary/payg', label: 'PAYG' },
              { href: '/glossary/withholding-tax', label: 'Withholding Tax' },
              { href: '/glossary/workers-compensation', label: 'Workers Compensation' },
            ].map((term) => (
              <Link
                key={term.href}
                href={term.href}
                className="px-4 py-2 rounded-lg bg-gray-700/50 border border-gray-600/50 text-gray-300 text-sm hover:border-amber-500/50 hover:text-amber-400 transition-all"
              >
                {term.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Related Tools */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-white mb-2 text-center">Related Tools</h2>
        <p className="text-gray-400 text-center mb-8">Free tools to help you operate as a compliant, professional subcontractor.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {relatedTools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:border-amber-500/50 hover:bg-gray-800/80 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-4">
                {tool.icon}
              </div>
              <h3 className="text-white font-medium mb-2 group-hover:text-amber-400 transition-colors">{tool.name}</h3>
              <p className="text-sm text-gray-400">{tool.description}</p>
              <div className="mt-4 text-amber-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
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
        <p className="text-gray-400 text-center mb-8">In-depth guides on GST, ABN registration, and invoicing for Australian subcontractors.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {relatedGuides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group p-6 rounded-2xl bg-gray-800/40 border border-gray-700/40 hover:border-amber-500/40 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h3 className="text-white font-medium mb-2 group-hover:text-amber-400 transition-colors">{guide.name}</h3>
              <p className="text-sm text-gray-400">{guide.description}</p>
              <div className="mt-4 text-amber-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
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
              <summary className="flex items-center justify-between cursor-pointer px-6 py-4 text-white font-medium hover:text-amber-400 transition-colors">
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
        <div className="rounded-2xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20 p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Invoice Like a Professional Subcontractor
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            InvoiceFlow helps Australian subcontractors create compliant tax invoices, track payments across multiple contractors, and stay on top of GST and BAS obligations &mdash; so you can focus on the work, not the paperwork. Start for free &mdash; no accountant required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button>Start Free &mdash; No Card Required</Button>
            </Link>
            <Link href="/tools/invoice-generator">
              <Button variant="secondary">Try the Invoice Generator</Button>
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
