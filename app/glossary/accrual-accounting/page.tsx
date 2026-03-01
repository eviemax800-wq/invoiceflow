import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Accrual Accounting: Definition, Rules & When Freelancers Should Use It (Australia) — InvoiceFlow',
  description:
    'What is accrual accounting in Australia? Learn how accrual vs cash accounting works, when sole traders should use accrual basis, ATO requirements, GST and BAS implications, and common mistakes. Updated for 2025-26.',
  keywords: [
    'accrual accounting australia',
    'accrual vs cash accounting',
    'accrual basis freelancer',
    'when to use accrual accounting sole trader',
    'accrual accounting definition',
    'accrual accounting ATO',
    'accrual basis BAS reporting',
    'accrual accounting GST',
    'AASB 15 revenue recognition',
    'cash vs accrual small business australia',
  ],
  alternates: { canonical: '/glossary/accrual-accounting' },
  openGraph: {
    title: 'Accrual Accounting: Definition, Rules & When Freelancers Should Use It (Australia) — InvoiceFlow',
    description:
      'Everything Australian freelancers need to know about accrual accounting: how it works, when to use it, accrual vs cash comparison, tax and GST implications, common mistakes, and how InvoiceFlow helps.',
    url: 'https://invoiceflow-teal.vercel.app/glossary/accrual-accounting',
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
    { '@type': 'ListItem', position: 3, name: 'Accrual Accounting', item: `${BASE_URL}/glossary/accrual-accounting` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do freelancers in Australia have to use accrual accounting?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Freelancers and sole traders with an aggregated turnover under $10 million per year can choose either cash or accrual accounting for tax purposes. The ATO allows small businesses to use cash basis, which is simpler for most freelancers. However, if your turnover exceeds $10 million, you are generally required to use accrual accounting. You can also voluntarily choose accrual if it better reflects your business performance.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between accrual and cash accounting for GST?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Under accrual accounting, you report GST on your BAS when invoices are issued, regardless of whether you have received payment. Under cash accounting, you only report GST when payment is actually received or made. For freelancers who experience slow-paying clients, cash basis GST can be advantageous because you don\'t have to remit GST to the ATO before you\'ve collected it. Small businesses with turnover under $10 million can choose to account for GST on a cash basis.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I switch from cash to accrual accounting in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, you can switch between cash and accrual accounting methods, but you need to be careful about the transition. You should notify the ATO and ensure that no income or expenses are double-counted or missed during the changeover period. You may need to make adjusting entries for any amounts that have been recorded under one method but not the other. It is advisable to make the switch at the start of a new financial year and consult an accountant to ensure compliance.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does accrual accounting mean I pay tax on money I haven\'t received yet?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, under accrual accounting you recognise revenue when it is earned (i.e., when you issue an invoice or complete the work), not when you receive payment. This means you may need to pay income tax on amounts that clients have not yet paid you. This is one of the biggest drawbacks of accrual accounting for freelancers with slow-paying clients. However, you can also claim deductions for expenses you have incurred but not yet paid, which can partially offset this effect.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which accounting method do banks prefer when reviewing loan applications?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Banks and lenders generally prefer accrual-basis financial statements because they provide a more accurate picture of a business\'s financial performance over time. Accrual statements show revenue earned and expenses incurred in the period they relate to, rather than when cash moves. This gives lenders better insight into profitability trends, outstanding receivables, and the true financial health of the business. If you are planning to apply for a business loan or mortgage, having accrual-basis financials can strengthen your application.',
      },
    },
  ],
};

const tocItems = [
  { id: 'what-is-accrual-accounting', label: '1. What Is Accrual Accounting?' },
  { id: 'accrual-vs-cash', label: '2. Accrual vs Cash Accounting' },
  { id: 'when-freelancers-should-use', label: '3. When Should Freelancers Use Accrual?' },
  { id: 'tax-implications', label: '4. Tax Implications' },
  { id: 'common-mistakes', label: '5. Common Mistakes' },
  { id: 'how-invoiceflow-helps', label: '6. How InvoiceFlow Helps' },
];

const relatedTools = [
  {
    href: '/tools/tax-estimator',
    name: 'Tax Estimator',
    description: 'Estimate your income tax liability with support for both cash and accrual-based income recognition.',
    icon: (
      <svg className="w-6 h-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18v-.008zm-12 0h.008v.008H6v-.008z" />
      </svg>
    ),
  },
  {
    href: '/tools/bas-lodgement-checklist',
    name: 'BAS Lodgement Checklist',
    description: 'Step-by-step BAS preparation checklist covering accrual and cash basis GST reporting.',
    icon: (
      <svg className="w-6 h-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    href: '/tools/profit-loss-statement-generator',
    name: 'Profit & Loss Generator',
    description: 'Generate accrual-basis profit and loss statements that match revenue to the periods earned.',
    icon: (
      <svg className="w-6 h-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    href: '/tools/freelance-tax-estimator',
    name: 'Freelance Tax Estimator',
    description: 'All-in-one tax calculator for sole traders covering income tax, Medicare levy, super, and PAYG.',
    icon: (
      <svg className="w-6 h-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const relatedGuides = [
  {
    href: '/guides/tax-guide-freelancers',
    name: 'Tax Guide for Freelancers',
    description: 'Complete guide to income tax, deductions, accounting methods, and PAYG for sole traders.',
  },
  {
    href: '/guides/bas-guide',
    name: 'BAS Guide',
    description: 'How to prepare and lodge your BAS correctly under both cash and accrual accounting methods.',
  },
  {
    href: '/guides/bookkeeping-basics',
    name: 'Bookkeeping Basics',
    description: 'Foundational bookkeeping concepts including accrual vs cash accounting, journals, and ledgers.',
  },
];

export default function AccrualAccountingGlossaryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative px-4 pt-20 pb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-purple-500/10 to-violet-500/10 blur-3xl" />
        <div className="relative max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/glossary" className="hover:text-white transition-colors">Glossary</Link>
            <span>/</span>
            <span className="text-white">Accrual Accounting</span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            Glossary &mdash; Accounting Methods
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Accrual Accounting{' '}
            <span className="bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent">
              for Freelancers
            </span>
          </h1>

          {/* Summary */}
          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            The accounting method where revenue and expenses are recorded when they&apos;re earned or incurred &mdash; not when cash changes hands. Most businesses over $10M turnover must use it, but freelancers under $10M can choose. Here&apos;s when accrual basis makes sense for sole traders.
          </p>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>12 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>ATO-Accurate 2025-26</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
              </svg>
              <span>Updated March 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* In a Nutshell */}
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <div className="rounded-2xl bg-gradient-to-br from-violet-500/10 to-purple-500/10 border border-violet-500/20 p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-violet-500/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-white">In a Nutshell</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center text-violet-400 text-xs font-bold">$10M</span>
              <div>
                <p className="text-white font-medium text-sm">Mandatory Threshold</p>
                <p className="text-gray-400 text-sm">Businesses over $10M aggregated turnover must generally use accrual basis</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center text-violet-400 text-xs font-bold">AASB</span>
              <div>
                <p className="text-white font-medium text-sm">Governing Standard</p>
                <p className="text-gray-400 text-sm">AASB 15 Revenue from Contracts sets the rules for accrual revenue recognition</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center text-violet-400 text-xs font-bold">2</span>
              <div>
                <p className="text-white font-medium text-sm">Methods Available</p>
                <p className="text-gray-400 text-sm">Cash or accrual &mdash; freelancers under $10M can choose either method</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center text-violet-400 text-xs font-bold">P&L</span>
              <div>
                <p className="text-white font-medium text-sm">More Accurate Reporting</p>
                <p className="text-gray-400 text-sm">Matches revenue to the period it was earned, giving a true profitability picture</p>
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
                className="flex items-center gap-2 text-gray-400 hover:text-violet-400 transition-colors text-sm py-1"
              >
                <svg className="w-4 h-4 text-violet-500/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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

        {/* Section 1: What Is Accrual Accounting? */}
        <section id="what-is-accrual-accounting">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold">1</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">What Is Accrual Accounting?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Accrual accounting is an accounting method where <strong className="text-white">revenue is recorded when it is earned and expenses are recorded when they are incurred</strong>, regardless of when cash actually changes hands. This is the fundamental principle that distinguishes it from cash basis accounting, where transactions are only recognised when money is received or paid out.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Under accrual accounting, if you complete a $5,000 web design project in June but your client doesn&apos;t pay until August, you recognise that $5,000 as revenue in June &mdash; when the work was performed and the right to payment was established. Similarly, if you receive an electricity bill in June but don&apos;t pay it until July, the expense is recorded in June when the service was consumed.
            </p>
            <p className="text-gray-300 leading-relaxed">
              In Australia, accrual accounting is governed by the <strong className="text-white">Australian Accounting Standards Board (AASB)</strong> framework. Specifically, <strong className="text-white">AASB 15 Revenue from Contracts with Customers</strong> sets out the principles for recognising revenue under accrual basis, requiring that revenue be recognised when (or as) performance obligations are satisfied. While AASB 15 is primarily aimed at reporting entities, its principles inform how the ATO expects accrual-basis taxpayers to recognise income.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Most businesses with an aggregated turnover of <strong className="text-white">$10 million or more</strong> are required to use accrual accounting for tax purposes. However, small businesses and sole traders under this threshold have the flexibility to choose either cash or accrual basis. The choice of method can significantly impact your tax liability, cash flow management, and financial reporting in any given period.
            </p>
            <div className="rounded-xl bg-violet-500/5 border border-violet-500/20 p-5 mt-6">
              <p className="text-violet-400 font-medium mb-2">Key Distinction</p>
              <p className="text-gray-400 text-sm">
                Accrual accounting answers the question <strong className="text-gray-200">&quot;When was the economic event?&quot;</strong> rather than &quot;When did the money move?&quot; This approach provides a more accurate picture of your business&apos;s financial performance over any given period, because it matches revenues with the expenses incurred to generate them &mdash; a concept known as the matching principle.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Accrual vs Cash Accounting */}
        <section id="accrual-vs-cash">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold">2</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Accrual vs Cash Accounting</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              The two primary accounting methods in Australia are accrual and cash basis. Freelancers with an aggregated turnover under <strong className="text-white">$10 million</strong> can choose either method. The ATO allows small businesses to use cash basis, which is simpler for most sole traders. Here&apos;s a detailed side-by-side comparison to help you decide.
            </p>

            {/* Comparison Table */}
            <div className="rounded-2xl border border-gray-700/50 overflow-hidden mt-6">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-800/80">
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Aspect</th>
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Accrual Basis</th>
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Cash Basis</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700/50">
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">Revenue Recognition</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">When earned (invoice issued or work completed)</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">When cash is received</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">Expense Recognition</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">When incurred (bill received or obligation created)</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">When cash is paid</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">Simplicity</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">More complex &mdash; requires tracking receivables and payables</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">Simpler &mdash; just track bank transactions</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">ATO Requirements</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">Required for businesses over $10M turnover</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">Permitted for small businesses under $10M</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">Who Typically Uses It</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">Larger businesses, companies, growth-stage freelancers</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">Most sole traders, small freelancers, micro-businesses</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">BAS / GST Reporting</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">GST reported when invoices are issued</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">GST reported when payment is received or made</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">Financial Accuracy</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">Higher &mdash; matches revenue to the period earned</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">Lower &mdash; revenue timing depends on when clients pay</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">Tax Timing</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">Tax on invoiced amounts even if unpaid</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">Tax only on amounts actually received</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">Best For</td>
                    <td className="px-6 py-4 text-violet-400 font-medium text-sm">Accurate P&L, loan applications, project tracking</td>
                    <td className="px-6 py-4 text-violet-400 font-medium text-sm">Simplicity, cash flow visibility, small operations</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="rounded-xl bg-violet-500/5 border border-violet-500/20 p-5 mt-6">
              <p className="text-violet-400 font-medium mb-2">Freelancer Tip</p>
              <p className="text-gray-400 text-sm">
                Most Australian freelancers earning under $10M will find <strong className="text-gray-200">cash basis simpler and more cash-flow-friendly</strong>. However, if you&apos;re growing, applying for finance, or need accurate project profitability tracking, accrual basis gives you a significantly better picture. The best choice depends on your business complexity, not just your size.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: When Should Freelancers Use Accrual? */}
        <section id="when-freelancers-should-use">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold">3</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">When Should Freelancers Use Accrual?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              While cash basis works well for most sole traders, there are specific scenarios where accrual accounting becomes the better choice. Here&apos;s a decision framework to help you determine if switching to accrual makes sense for your freelance business.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              {/* Card 1 */}
              <div className="rounded-xl bg-gray-800/50 border border-violet-500/20 p-5">
                <h4 className="text-violet-400 font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18v-.008zm-12 0h.008v.008H6v-.008z" />
                  </svg>
                  Large Invoices with Long Payment Terms
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  If you regularly issue invoices of <strong className="text-gray-200">$5,000+ with 30-60 day payment terms</strong>, accrual accounting gives you a more realistic view of when revenue was actually earned. Under cash basis, a $20K project completed in June wouldn&apos;t show as revenue until the client pays in August &mdash; distorting your June P&L.
                </p>
              </div>

              {/* Card 2 */}
              <div className="rounded-xl bg-gray-800/50 border border-violet-500/20 p-5">
                <h4 className="text-violet-400 font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                  </svg>
                  Accurate P&amp;L Statements Needed
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  When you need financial statements that accurately reflect your business performance period-by-period, accrual is essential. It matches <strong className="text-gray-200">revenue to the period it was earned</strong> and expenses to the period they were incurred, giving you a true picture of profitability rather than a cash flow snapshot.
                </p>
              </div>

              {/* Card 3 */}
              <div className="rounded-xl bg-gray-800/50 border border-violet-500/20 p-5">
                <h4 className="text-violet-400 font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                  </svg>
                  Applying for Business Loans
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Banks and lenders <strong className="text-gray-200">strongly prefer accrual-basis financial statements</strong> when assessing loan or mortgage applications. Accrual statements show a more complete picture of your earning capacity, including outstanding receivables and committed expenses, giving lenders confidence in your business&apos;s financial health.
                </p>
              </div>

              {/* Card 4 */}
              <div className="rounded-xl bg-gray-800/50 border border-violet-500/20 p-5">
                <h4 className="text-violet-400 font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
                  </svg>
                  Tracking Project Profitability
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  If you run multi-month projects and need to understand whether each one is profitable, accrual accounting lets you <strong className="text-gray-200">match project revenue against project costs</strong> in the same period. This is critical for freelancers juggling multiple clients with different billing cycles and payment timelines.
                </p>
              </div>
            </div>

            {/* Decision Framework */}
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 mt-6">
              <h4 className="text-white font-semibold mb-3">Decision Framework: Should You Use Accrual?</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-violet-500/20 flex items-center justify-center text-violet-400 text-xs font-bold mt-0.5">?</span>
                  <p className="text-sm text-gray-400">Do your invoices regularly exceed <strong className="text-gray-200">$5,000</strong> with payment terms over 14 days?</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-violet-500/20 flex items-center justify-center text-violet-400 text-xs font-bold mt-0.5">?</span>
                  <p className="text-sm text-gray-400">Do revenue and expenses regularly <strong className="text-gray-200">span multiple reporting periods</strong>?</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-violet-500/20 flex items-center justify-center text-violet-400 text-xs font-bold mt-0.5">?</span>
                  <p className="text-sm text-gray-400">Are you planning to apply for a <strong className="text-gray-200">business loan, mortgage, or line of credit</strong>?</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-violet-500/20 flex items-center justify-center text-violet-400 text-xs font-bold mt-0.5">?</span>
                  <p className="text-sm text-gray-400">Do you need to report <strong className="text-gray-200">accurate project-level profitability</strong> to clients or stakeholders?</p>
                </div>
                <p className="text-sm text-gray-400 pt-2 border-t border-gray-700/50">
                  If you answered <strong className="text-violet-400">yes to two or more</strong>, accrual accounting is likely the better choice for your freelance business. If you answered no to all, cash basis will serve you well.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Tax Implications */}
        <section id="tax-implications">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold">4</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Tax Implications</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              The choice between accrual and cash accounting has significant tax consequences. Under accrual accounting, <strong className="text-white">you pay tax on income that has been invoiced or earned, even if the client hasn&apos;t paid you yet</strong>. This is the single biggest tax consideration for freelancers weighing up the two methods.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              {/* Income Tax Impact */}
              <div className="rounded-xl bg-gray-800/50 border border-violet-500/20 p-5">
                <h4 className="text-violet-400 font-semibold mb-3">Income Tax &amp; Taxable Income</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Under accrual, your taxable income includes all amounts you&apos;ve <strong className="text-gray-200">earned the right to receive</strong> during the financial year &mdash; not just amounts deposited in your bank. If you complete $50K of work in June but clients don&apos;t pay until July or August, that $50K is still taxable in the current financial year. This can create a cash flow mismatch where you owe tax on money you haven&apos;t received.
                </p>
              </div>

              {/* GST Impact */}
              <div className="rounded-xl bg-gray-800/50 border border-violet-500/20 p-5">
                <h4 className="text-violet-400 font-semibold mb-3">GST on Accrual vs Cash Basis</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Under accrual-basis GST, you must <strong className="text-gray-200">report and remit GST when the invoice is issued</strong>, not when you receive payment. This means you may need to pay GST to the ATO before your client has paid you. Under cash-basis GST (available for businesses under $10M turnover), you only report GST when payment is received or made &mdash; a significant cash flow advantage for freelancers.
                </p>
              </div>

              {/* BAS Implications */}
              <div className="rounded-xl bg-gray-800/50 border border-violet-500/20 p-5">
                <h4 className="text-violet-400 font-semibold mb-3">BAS Reporting Differences</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Your BAS lodgement is directly affected by your accounting method. On accrual basis, your BAS reflects <strong className="text-gray-200">all invoices issued during the period</strong>, while on cash basis it reflects only amounts received and paid. The ATO&apos;s Simpler BAS concession for small businesses (under $10M turnover) reduces reporting requirements regardless of method, but the underlying GST calculation still differs.
                </p>
              </div>

              {/* Trading Stock */}
              <div className="rounded-xl bg-gray-800/50 border border-violet-500/20 p-5">
                <h4 className="text-violet-400 font-semibold mb-3">Trading Stock &amp; Section 70-35 ITAA 1997</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  If your freelance business involves trading stock (e.g., selling physical products alongside services), <strong className="text-gray-200">Section 70-35 of the Income Tax Assessment Act 1997</strong> requires you to account for changes in trading stock value at year end. Under accrual accounting, this is standard practice. Even cash-basis taxpayers with trading stock must make end-of-year adjustments &mdash; another area where the two methods converge.
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-violet-500/5 border border-violet-500/20 p-5 mt-6">
              <p className="text-violet-400 font-medium mb-2">Critical Cash Flow Warning</p>
              <p className="text-gray-400 text-sm">
                If you use accrual accounting and a client doesn&apos;t pay a large invoice, you still owe tax on that amount. You can claim a <strong className="text-gray-200">bad debt deduction</strong> under Section 25-35 ITAA 1997 if the debt becomes unrecoverable, but only after you have taken reasonable steps to collect it. This means there can be a period where you&apos;re paying tax on income you may never receive. Factor this risk into your cash flow planning.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Common Mistakes */}
        <section id="common-mistakes">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold">5</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Common Mistakes</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Accrual accounting requires more discipline than cash basis. Here are the most common mistakes freelancers make when using (or switching to) accrual accounting &mdash; and how to avoid each one.
            </p>

            <div className="space-y-4 mt-6">
              {/* Mistake 1 */}
              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-5">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Mixing Methods Inconsistently</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      Recording some transactions on cash basis and others on accrual basis within the same period. Once you choose a method, you must apply it <strong className="text-gray-200">consistently across all transactions</strong>. The ATO expects consistency, and mixing methods leads to inaccurate financials and potential audit issues.
                    </p>
                  </div>
                </div>
              </div>

              {/* Mistake 2 */}
              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-5">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Forgetting Period-End Accruals</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      Failing to record accrued revenues and expenses at the end of each reporting period. If you completed work in June but haven&apos;t invoiced yet, you still need to <strong className="text-gray-200">accrue that revenue</strong>. Similarly, expenses incurred but not yet billed (like a contractor&apos;s work) must be recorded as accrued liabilities.
                    </p>
                  </div>
                </div>
              </div>

              {/* Mistake 3 */}
              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-5">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Not Adjusting for Bad Debts</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      Under accrual accounting, you recognise revenue when invoiced. But if a client never pays, you need to <strong className="text-gray-200">write off the bad debt</strong> and claim a deduction. Many freelancers forget this step, paying tax on income they never received. Review your receivables regularly and write off genuinely unrecoverable amounts.
                    </p>
                  </div>
                </div>
              </div>

              {/* Mistake 4 */}
              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-5">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Failing to Match Expenses to Revenue Periods</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      The core principle of accrual accounting is the <strong className="text-gray-200">matching principle</strong> &mdash; expenses should be recognised in the same period as the revenue they helped generate. If you pay for software subscriptions annually, you should spread that cost across 12 months, not record the full amount in the month you paid.
                    </p>
                  </div>
                </div>
              </div>

              {/* Mistake 5 */}
              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-5">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Switching Methods Without ATO Approval</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      Changing from cash to accrual (or vice versa) mid-year without proper notification can cause <strong className="text-gray-200">double-counting or missed transactions</strong>. You should notify the ATO, make the switch at the start of a financial year, and prepare adjusting entries for the transition. Consult an accountant to ensure nothing falls through the cracks.
                    </p>
                  </div>
                </div>
              </div>

              {/* Mistake 6 */}
              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-5">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Ignoring Prepayments &amp; Unearned Revenue</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      If a client pays you $10,000 upfront for a 3-month project, you cannot recognise the full amount as revenue immediately under accrual accounting. It must be recorded as <strong className="text-gray-200">unearned revenue (a liability)</strong> and recognised progressively as you deliver the work. Similarly, prepaid expenses (like insurance paid annually) must be spread across the relevant periods.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: How InvoiceFlow Helps */}
        <section id="how-invoiceflow-helps">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold">6</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">How InvoiceFlow Helps</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              InvoiceFlow is built specifically for Australian freelancers and sole traders. Whether you use cash or accrual accounting, here&apos;s how it helps you manage your books with confidence.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-violet-500/20 p-5">
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">Invoice Tracking Regardless of Payment Status</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Track every invoice from draft to paid. InvoiceFlow shows you exactly which invoices are outstanding, overdue, or partially paid &mdash; essential data for accrual-basis revenue recognition and receivables management.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-violet-500/20 p-5">
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">Receivables Aging Reports</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  See exactly how long each invoice has been outstanding with automatic aging buckets (current, 30 days, 60 days, 90+ days). Identify slow payers before they become bad debts and take action early to protect your cash flow.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-violet-500/20 p-5">
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">Automatic Accrual Reports</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Generate accrual-basis profit and loss statements, revenue recognition summaries, and expense matching reports. InvoiceFlow automatically calculates accrued revenue based on invoice dates, not payment dates.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-violet-500/20 p-5">
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">BAS-Ready Data</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  InvoiceFlow prepares your GST data for BAS lodgement under both cash and accrual methods. Switch between views to see how each method affects your GST liability for the quarter, and export BAS-ready figures directly.
                </p>
              </div>
            </div>

            {/* Bonus Feature */}
            <div className="rounded-xl bg-violet-500/5 border border-violet-500/20 p-5 mt-6">
              <p className="text-violet-400 font-medium mb-2">Switch Between Cash &amp; Accrual Views</p>
              <p className="text-gray-400 text-sm">
                Not sure which method suits you best? InvoiceFlow lets you <strong className="text-gray-200">toggle between cash and accrual views</strong> of your financial data without changing your underlying records. See your P&L, revenue, and tax estimates under both methods side by side &mdash; so you can make an informed decision about which accounting method to adopt.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Related Glossary Terms */}
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <div className="rounded-2xl bg-gray-800/50 border border-gray-700/50 p-8">
          <h2 className="text-lg font-bold text-white mb-4">Related Glossary Terms</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { href: '/glossary/cash-basis-accounting', label: 'Cash Basis Accounting' },
              { href: '/glossary/bookkeeping', label: 'Bookkeeping' },
              { href: '/glossary/bas', label: 'BAS' },
              { href: '/glossary/profit-and-loss', label: 'Profit & Loss' },
              { href: '/glossary/accounts-receivable', label: 'Accounts Receivable' },
              { href: '/glossary/income-tax', label: 'Income Tax' },
            ].map((term) => (
              <Link
                key={term.href}
                href={term.href}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gray-700/30 border border-gray-600/30 text-gray-300 text-sm hover:border-violet-500/40 hover:text-violet-400 transition-all"
              >
                <svg className="w-3.5 h-3.5 text-violet-500/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
                {term.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Related Tools */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-white mb-2 text-center">Related Tools</h2>
        <p className="text-gray-400 text-center mb-8">Free calculators to help you manage accrual accounting and stay on top of your tax obligations.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {relatedTools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:border-violet-500/50 hover:bg-gray-800/80 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-4">
                {tool.icon}
              </div>
              <h3 className="text-white font-medium mb-2 group-hover:text-violet-400 transition-colors">{tool.name}</h3>
              <p className="text-sm text-gray-400">{tool.description}</p>
              <div className="mt-4 text-violet-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
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
        <p className="text-gray-400 text-center mb-8">In-depth guides on accounting methods, bookkeeping, and financial planning for freelancers.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {relatedGuides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group p-6 rounded-2xl bg-gray-800/40 border border-gray-700/40 hover:border-violet-500/40 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h3 className="text-white font-medium mb-2 group-hover:text-violet-400 transition-colors">{guide.name}</h3>
              <p className="text-sm text-gray-400">{guide.description}</p>
              <div className="mt-4 text-violet-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
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
              <summary className="flex items-center justify-between cursor-pointer px-6 py-4 text-white font-medium hover:text-violet-400 transition-colors">
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
        <div className="rounded-2xl bg-gradient-to-br from-violet-500/10 to-purple-500/10 border border-violet-500/20 p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Master Accrual Accounting Without the Complexity
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            InvoiceFlow helps Australian freelancers track invoices, manage receivables, and generate accrual-basis reports &mdash; all without needing an accounting degree. Start for free and see your finances clearly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button>Start Free &mdash; No Card Required</Button>
            </Link>
            <Link href="/tools/profit-loss-statement-generator">
              <Button variant="secondary">Try the P&amp;L Generator</Button>
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
