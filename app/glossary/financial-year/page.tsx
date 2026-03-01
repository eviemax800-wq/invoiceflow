import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Financial Year Australia: FY Dates, EOFY Checklist & Key Deadlines — InvoiceFlow',
  description:
    'What is the Australian financial year? Learn FY 2025-26 dates, quarterly BAS deadlines, EOFY preparation checklist for freelancers, and how the financial year affects your tax, super, and deductions.',
  keywords: [
    'financial year australia',
    'when does financial year start australia',
    'EOFY meaning',
    'financial year dates australia',
    'FY 2025-26 dates',
    'australian financial year',
    'end of financial year',
    'EOFY checklist freelancer',
    'BAS due dates 2025-26',
    'financial year vs calendar year',
    'tax return due date australia',
    'freelancer EOFY preparation',
  ],
  alternates: { canonical: '/glossary/financial-year' },
  openGraph: {
    title: 'Financial Year Australia: FY Dates, EOFY Checklist & Key Deadlines — InvoiceFlow',
    description:
      'Everything about the Australian financial year: FY 2025-26 dates (1 Jul to 30 Jun), quarterly BAS deadlines, super due dates, EOFY preparation checklist, and how the FY affects freelancer tax planning.',
    url: 'https://invoiceflow-teal.vercel.app/glossary/financial-year',
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
    { '@type': 'ListItem', position: 3, name: 'Financial Year', item: `${BASE_URL}/glossary/financial-year` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'When does the Australian financial year start and end?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Australian financial year runs from 1 July to 30 June. For example, FY 2025-26 starts on 1 July 2025 and ends on 30 June 2026. This applies to all individuals, sole traders, partnerships, and most companies. Some companies can apply to the ATO for a Substituted Accounting Period (SAP) to use a different 12-month period, but this is rare for freelancers and small businesses.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is EOFY and why does it matter for freelancers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'EOFY stands for End of Financial Year (30 June). It is the most important date in the Australian tax calendar because it is the cut-off for all income and deductions for the financial year. For freelancers, EOFY matters because: (1) All income earned up to 30 June counts in that FY, (2) Deductions must be incurred by 30 June to claim in that year, (3) The $30,000 concessional super cap resets on 1 July, (4) The $20,000 instant asset write-off must be used by 30 June, and (5) Your tax return for the FY is due by 31 October (self-lodging) or 15 May the following year (via a registered tax agent).',
      },
    },
    {
      '@type': 'Question',
      name: 'Can freelancers choose a different financial year?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sole traders and partnerships must use the standard Australian financial year (1 July to 30 June) — there is no option to choose a different period. Companies (Pty Ltd) can apply to the ATO for a Substituted Accounting Period (SAP) under section 18 of the Income Tax Assessment Act 1936, but this is typically only granted for subsidiaries of foreign companies whose parent uses a different year-end. In practice, virtually all Australian freelancers and small businesses use the standard 1 July to 30 June financial year.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the key tax deadlines in the 2025-26 financial year?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Key FY 2025-26 deadlines: Q1 BAS due 28 October 2025, Q2 BAS due 28 February 2026, Q3 BAS due 28 April 2026, Q4 BAS due 28 July 2026. Super guarantee payments are due the 28th day after each quarter (28 Oct, 28 Jan, 28 Apr, 28 Jul). PAYG instalments align with BAS quarters. The tax return is due 31 October 2026 if self-lodging, or 15 May 2027 if lodging through a registered tax agent (provided you are registered with the agent before 31 October).',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I prepare for end of financial year as a sole trader?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'EOFY preparation checklist for sole traders: (1) Reconcile all income — ensure every invoice issued is recorded and matches bank deposits, (2) Chase outstanding invoices before 30 June if using cash basis accounting, (3) Gather all receipts and categorise expenses, (4) Prepay deductible expenses (insurance, subscriptions, rent) before 30 June, (5) Review and top up super contributions toward the $30,000 concessional cap, (6) Purchase any needed business assets under the $20,000 instant write-off, (7) Update your depreciation schedule, (8) Reconcile bank accounts against your records, (9) Lodge your Q4 BAS by 28 July, and (10) Review your business structure for the new FY.',
      },
    },
  ],
};

const tocItems = [
  { id: 'what-is-financial-year', label: '1. What Is a Financial Year?' },
  { id: 'fy-2025-26-dates', label: '2. Key FY 2025-26 Dates' },
  { id: 'freelancer-impact', label: '3. How the Financial Year Affects Freelancers' },
  { id: 'eofy-checklist', label: '4. EOFY Preparation Checklist' },
  { id: 'fy-vs-calendar', label: '5. Financial Year vs Calendar Year' },
  { id: 'invoiceflow-fy', label: '6. How InvoiceFlow Helps' },
];

const relatedTools = [
  {
    href: '/tools/tax-estimator',
    name: 'Tax Estimator',
    description: 'Estimate your income tax, Medicare levy, and take-home pay for the current financial year based on your freelance income.',
    icon: (
      <svg className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
      </svg>
    ),
  },
  {
    href: '/tools/eofy-tax-checklist-generator',
    name: 'EOFY Tax Checklist Generator',
    description: 'Generate a personalised end-of-financial-year tax preparation checklist based on your business type and income.',
    icon: (
      <svg className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    href: '/tools/bas-preparation-checklist',
    name: 'BAS Preparation Checklist',
    description: 'Step-by-step checklist to prepare your quarterly Business Activity Statement with confidence.',
    icon: (
      <svg className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    href: '/tools/financial-year-planner',
    name: 'Financial Year Planner',
    description: 'Plan your income, expenses, and tax obligations across all four quarters of the financial year.',
    icon: (
      <svg className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
  },
];

const relatedGuides = [
  {
    href: '/guides/eofy-guide',
    name: 'EOFY Guide for Freelancers',
    description: 'Complete end-of-financial-year guide covering deductions, super contributions, asset write-offs, and lodgement deadlines.',
  },
  {
    href: '/guides/tax-guide-freelancers',
    name: 'Tax Guide for Freelancers',
    description: 'Everything you need to know about Australian tax obligations as a freelancer — from ABN to tax returns.',
  },
  {
    href: '/guides/gst-for-freelancers',
    name: 'GST for Freelancers',
    description: 'How to register, charge, report, and pay GST — including quarterly BAS lodgement aligned to the financial year.',
  },
];

export default function FinancialYearGlossaryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative px-4 pt-20 pb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-blue-500/10 to-indigo-500/10 blur-3xl" />
        <div className="relative max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/glossary" className="hover:text-white transition-colors">Glossary</Link>
            <span>/</span>
            <span className="text-white">Financial Year</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            Glossary &mdash; Tax &amp; Compliance
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Financial Year{' '}
            <span className="bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
              Explained for Freelancers
            </span>
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            The Australian financial year runs from 1 July to 30 June. This guide covers FY 2025-26 key dates, quarterly BAS and super deadlines, how the FY affects your income and deductions, a 10-item EOFY preparation checklist, and why Australia uses a different year to the US and UK.
          </p>

          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>10 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Australia-Focused 2025-26</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
              </svg>
              <span>Updated March 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* In a Nutshell */}
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <div className="rounded-2xl bg-gradient-to-br from-indigo-500/10 to-blue-500/10 border border-indigo-500/20 p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-white">In a Nutshell</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400 text-xs font-bold">1J</span>
              <div>
                <p className="text-white font-medium text-sm">1 Jul &ndash; 30 Jun</p>
                <p className="text-gray-400 text-sm">Australian financial year dates &mdash; different from the calendar year</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400 text-xs font-bold">$18K</span>
              <div>
                <p className="text-white font-medium text-sm">$18,200 Tax-Free Threshold</p>
                <p className="text-gray-400 text-sm">The amount you can earn each FY before paying any income tax</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400 text-xs font-bold">4Q</span>
              <div>
                <p className="text-white font-medium text-sm">4 Quarters per FY</p>
                <p className="text-gray-400 text-sm">BAS reporting periods: Q1 (Jul-Sep), Q2 (Oct-Dec), Q3 (Jan-Mar), Q4 (Apr-Jun)</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400 text-xs font-bold">31O</span>
              <div>
                <p className="text-white font-medium text-sm">31 Oct Tax Return Due</p>
                <p className="text-gray-400 text-sm">Self-lodging deadline &mdash; 15 May if lodging through a registered tax agent</p>
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
              <a key={item.id} href={`#${item.id}`} className="flex items-center gap-2 text-gray-400 hover:text-indigo-400 transition-colors text-sm py-1">
                <svg className="w-4 h-4 text-indigo-500/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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

        {/* Section 1 */}
        <section id="what-is-financial-year">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold">1</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">What Is a Financial Year?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              A financial year (also called a fiscal year) is the <strong className="text-white">12-month period used for tax reporting, accounting, and government budgeting</strong>. In Australia, the financial year runs from <strong className="text-white">1 July to 30 June</strong> &mdash; this is different from the calendar year (1 January to 31 December) used in everyday life.
            </p>
            <p className="text-gray-300 leading-relaxed">
              When Australians refer to &ldquo;FY 2025-26,&rdquo; they mean the period from 1 July 2025 to 30 June 2026. All income earned, deductions claimed, and <Link href="/glossary/superannuation" className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2">super contributions</Link> made during this window are reported on your tax return for that financial year.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Not every country uses the same financial year. The <strong className="text-white">United States uses 1 October to 30 September</strong> for its government fiscal year (though most US businesses use the calendar year for tax). The <strong className="text-white">United Kingdom uses 6 April to 5 April</strong>. Australia&rsquo;s July-June cycle dates back to British colonial administration and was influenced by agricultural harvest seasons in the southern hemisphere.
            </p>
            <p className="text-gray-300 leading-relaxed">
              For freelancers, the financial year is the fundamental framework for all tax planning. Every decision about income timing, expense prepayment, super contributions, and asset purchases needs to be made with the 30 June cut-off in mind.
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section id="fy-2025-26-dates">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold">2</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Key FY 2025-26 Dates</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              The financial year is divided into four quarters, each with its own <Link href="/glossary/bas" className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2">BAS</Link> lodgement and super guarantee deadlines. Missing these dates can result in penalties, interest charges, and the super guarantee charge (SGC).
            </p>

            {/* Quarterly BAS Dates */}
            <h3 className="text-xl font-bold text-white mt-8 mb-4">Quarterly BAS Due Dates</h3>
            <div className="rounded-2xl border border-gray-700/50 overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-800/80">
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Quarter</th>
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Period</th>
                    <th className="text-left text-sm font-medium text-indigo-400 px-6 py-4">BAS Due Date</th>
                    <th className="text-left text-sm font-medium text-blue-400 px-6 py-4">Super Due Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700/50">
                  {[
                    { quarter: 'Q1', period: '1 Jul – 30 Sep 2025', bas: '28 October 2025', super: '28 October 2025' },
                    { quarter: 'Q2', period: '1 Oct – 31 Dec 2025', bas: '28 February 2026', super: '28 January 2026' },
                    { quarter: 'Q3', period: '1 Jan – 31 Mar 2026', bas: '28 April 2026', super: '28 April 2026' },
                    { quarter: 'Q4', period: '1 Apr – 30 Jun 2026', bas: '28 July 2026', super: '28 July 2026' },
                  ].map((row, i) => (
                    <tr key={i} className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-indigo-400 text-sm font-bold">{row.quarter}</td>
                      <td className="px-6 py-3 text-gray-300 text-sm">{row.period}</td>
                      <td className="px-6 py-3 text-indigo-400 text-sm font-medium">{row.bas}</td>
                      <td className="px-6 py-3 text-blue-400 text-sm font-medium">{row.super}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Other Key Dates */}
            <h3 className="text-xl font-bold text-white mt-8 mb-4">Other Critical Deadlines</h3>
            <div className="space-y-3">
              {[
                { date: '30 June 2026', event: 'End of FY 2025-26', desc: 'Last day to earn income, claim deductions, make super contributions, and purchase assets for this financial year.' },
                { date: '1 July 2026', event: 'Start of FY 2026-27', desc: 'All caps and thresholds reset — $30K super cap, tax brackets, Medicare thresholds.' },
                { date: '31 October 2026', event: 'Tax return due (self-lodge)', desc: 'Deadline for lodging your own tax return through myGov/myTax. Late lodgement incurs a $313 penalty per 28-day period.' },
                { date: '15 May 2027', event: 'Tax return due (via agent)', desc: 'Extended deadline when lodging through a registered tax agent. Must be registered with the agent before 31 October.' },
                { date: '28th after each quarter', event: 'PAYG instalment due', desc: 'If the ATO has placed you on PAYG instalments, payments are due with your quarterly BAS.' },
              ].map((item, i) => (
                <div key={i} className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5 flex items-start gap-4">
                  <div className="flex-shrink-0 w-24 text-center">
                    <span className="text-indigo-400 text-sm font-bold">{item.date}</span>
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">{item.event}</p>
                    <p className="text-gray-400 text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section id="freelancer-impact">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold">3</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">How the Financial Year Affects Freelancers</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              The financial year is not just a reporting period &mdash; it fundamentally affects how and when freelancers recognise income, claim deductions, and make strategic financial decisions. Unlike employees who have tax withheld automatically via <Link href="/glossary/payg" className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2">PAYG</Link>, freelancers must manage their own tax timing.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              {[
                {
                  title: 'Income Recognition',
                  desc: 'If you use cash basis accounting (most sole traders), income is recognised when you receive payment — not when you issue the invoice. An invoice issued in June but paid in July falls in the next financial year. If you use accrual accounting, income is recognised when the invoice is issued regardless of payment date.',
                  icon: (
                    <svg className="w-5 h-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                    </svg>
                  ),
                },
                {
                  title: 'Deduction Timing',
                  desc: 'Deductions must be incurred before 30 June to be claimed in the current FY. Smart freelancers prepay next year\'s expenses before EOFY — professional subscriptions, insurance premiums, rent, and training courses. You can prepay up to 12 months in advance and claim the full amount in the current year under the prepayment rules.',
                  icon: (
                    <svg className="w-5 h-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185z" />
                    </svg>
                  ),
                },
                {
                  title: 'Super Contribution Timing',
                  desc: 'The $30,000 concessional super contribution cap resets on 1 July. Contributions must be received by your super fund (not just sent) before 30 June to count in that FY. Allow 3-5 business days for processing. If you have unused cap from previous years, you may be able to carry forward up to 5 years of unused amounts (if your total super balance is under $500,000).',
                  icon: (
                    <svg className="w-5 h-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                },
                {
                  title: 'Asset Write-Off Timing',
                  desc: 'The $20,000 instant asset write-off allows small businesses to immediately deduct the full cost of eligible assets. The asset must be installed and ready for use before 30 June to claim in the current FY. This applies per asset — you can purchase multiple assets under $20,000 each. Common freelancer purchases: laptops, monitors, cameras, office furniture, and software licences.',
                  icon: (
                    <svg className="w-5 h-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                    </svg>
                  ),
                },
              ].map((item, i) => (
                <div key={i} className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <h4 className="text-white font-semibold">{item.title}</h4>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section id="eofy-checklist">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold">4</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">EOFY Preparation Checklist</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Preparing for end of financial year should start in May &mdash; not the last week of June. Here is a 10-item checklist every freelancer should complete before 30 June to maximise deductions and ensure a clean tax return.
            </p>

            <div className="space-y-3 mt-6">
              {[
                { num: '01', title: 'Reconcile all income', desc: 'Cross-check every invoice issued against bank deposits. Identify any payments received that were not invoiced, and any invoices issued that remain unpaid. Your total income must match your bank records.' },
                { num: '02', title: 'Collect outstanding invoices', desc: 'Chase any overdue invoices before 30 June. If you use cash basis accounting, payment received before EOFY counts as income this FY. If you would prefer the income to fall next FY, do not chase until July.' },
                { num: '03', title: 'Gather all receipts and categorise expenses', desc: 'Collect receipts for every business expense: software subscriptions, phone bills, internet, office supplies, travel, professional development, insurance, and home office costs. Categorise them for your tax return.' },
                { num: '04', title: 'Prepay deductible expenses', desc: 'Pay next year\'s insurance, subscriptions, professional memberships, and rent before 30 June. Under the prepayment rules for small businesses, you can claim up to 12 months of prepaid expenses in the current FY.' },
                { num: '05', title: 'Review and top up superannuation', desc: 'Check your concessional super contributions year-to-date against the $30,000 cap. If you have room, make additional contributions before 30 June. Remember: the contribution must be received by your fund, not just sent. Allow 3-5 business days.' },
                { num: '06', title: 'Update your depreciation schedule', desc: 'Review all assets currently being depreciated. Add any new assets purchased during the year. Write off any assets disposed of, lost, or no longer in use. Check if any assets qualify for the $20,000 instant write-off.' },
                { num: '07', title: 'Conduct a stocktake (if applicable)', desc: 'If you sell physical products, count and value all stock on hand as at 30 June. You can use cost, market selling value, or replacement value — whichever is lowest. Stock on hand is not a deduction until sold.' },
                { num: '08', title: 'Reconcile bank accounts', desc: 'Ensure every transaction in your business bank account is accounted for. Identify any personal transactions that need to be excluded, and any business transactions from personal accounts that need to be included.' },
                { num: '09', title: 'Lodge Q4 BAS (due 28 July)', desc: 'While the Q4 BAS is technically due in July, preparing the data before 30 June makes EOFY much smoother. Reconcile GST collected vs GST paid, and ensure PAYG instalment amounts are correct.' },
                { num: '10', title: 'Review business structure for next FY', desc: 'Is sole trader still the right structure? If your income consistently exceeds $120,000, it may be worth discussing incorporation (Pty Ltd) with your accountant. The company tax rate of 25% can be significantly lower than the top marginal rate of 45%.' },
              ].map((item, i) => (
                <div key={i} className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5 flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center text-white text-xs font-bold">
                    {item.num}
                  </div>
                  <div>
                    <p className="text-white font-medium">{item.title}</p>
                    <p className="text-gray-400 text-sm mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-xl bg-indigo-500/5 border border-indigo-500/20 p-5 mt-6">
              <p className="text-indigo-400 font-medium mb-2">Pro Tip: The EOFY Sprint</p>
              <p className="text-gray-400 text-sm">
                Block out one full day in the last week of May to complete items 1-8. This gives you all of June to make strategic decisions about prepayments, super top-ups, and asset purchases &mdash; rather than scrambling on 29 June. The best <Link href="/glossary/tax-deduction" className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2">tax deductions</Link> come from planning, not panic.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5 */}
        <section id="fy-vs-calendar">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold">5</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Financial Year vs Calendar Year</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Understanding the difference between financial years and calendar years is essential &mdash; especially if you work with international clients or need to reconcile reports from different systems.
            </p>

            <div className="rounded-2xl border border-gray-700/50 overflow-hidden mt-6">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-800/80">
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Country</th>
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Financial Year</th>
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Reason</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700/50">
                  {[
                    { country: 'Australia', fy: '1 Jul – 30 Jun', reason: 'British colonial heritage, southern hemisphere agricultural cycles' },
                    { country: 'United Kingdom', fy: '6 Apr – 5 Apr', reason: 'Dates back to 1752 calendar reform — Gregorian calendar adoption shifted the tax year by 11 days' },
                    { country: 'United States', fy: '1 Oct – 30 Sep (govt)', reason: 'Government fiscal year; most businesses/individuals use calendar year (1 Jan – 31 Dec)' },
                    { country: 'New Zealand', fy: '1 Apr – 31 Mar', reason: 'British influence, aligned with government budget cycle' },
                    { country: 'Canada', fy: '1 Apr – 31 Mar (govt)', reason: 'Government fiscal year; individuals use calendar year for tax' },
                    { country: 'Japan', fy: '1 Apr – 31 Mar', reason: 'Aligned with the school year and government budget cycle' },
                    { country: 'India', fy: '1 Apr – 31 Mar', reason: 'British colonial heritage, agricultural season alignment' },
                  ].map((row, i) => (
                    <tr key={i} className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-indigo-400 text-sm font-bold">{row.country}</td>
                      <td className="px-6 py-3 text-gray-300 text-sm font-medium">{row.fy}</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">{row.reason}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="rounded-xl bg-indigo-500/5 border border-indigo-500/20 p-5 mt-6">
              <p className="text-indigo-400 font-medium mb-2">Implications for International Clients</p>
              <p className="text-gray-400 text-sm">
                If you freelance for US or UK clients, their &ldquo;year-end&rdquo; will be different from yours. A US client&rsquo;s &ldquo;Q4&rdquo; is October-December, while your Q2 spans the same period. When discussing annual budgets, contracts, or reporting periods, always clarify which financial year you are referring to. For your Australian tax return, all that matters is income received (cash basis) or earned (accrual basis) between 1 July and 30 June &mdash; regardless of what financial year your client is using.
              </p>
            </div>

            <h3 className="text-xl font-bold text-white mt-8 mb-4">Why Does Australia Use July-June?</h3>
            <p className="text-gray-300 leading-relaxed">
              Australia&rsquo;s July-June financial year dates back to <strong className="text-white">British colonial administration in the 19th century</strong>. The British government&rsquo;s fiscal year influenced colonial accounting practices. Additionally, the southern hemisphere&rsquo;s agricultural cycles &mdash; with harvests typically occurring in autumn (March-May) &mdash; made a mid-year tax assessment more practical than a January start. The July-June cycle was formally adopted at Federation in 1901 and has remained unchanged since.
            </p>
          </div>
        </section>

        {/* Section 6 */}
        <section id="invoiceflow-fy">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold">6</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">How InvoiceFlow Helps</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              InvoiceFlow is built around the Australian financial year, so your reporting, BAS data, and income tracking automatically align with ATO requirements.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              {[
                { title: 'Automatic FY Reporting', desc: 'All reports default to the current financial year (1 Jul – 30 Jun). Switch between financial years with one click. Compare FY-over-FY income, expenses, and profit without manual date filtering.' },
                { title: 'BAS-Ready Data', desc: 'InvoiceFlow automatically calculates your GST collected and GST paid for each quarter, ready to transfer directly to your BAS. No more adding up spreadsheets the night before the 28th.' },
                { title: 'Income Tracking by FY', desc: 'See your year-to-date income, projected annual income, and estimated tax liability in real time. Know exactly where you stand against the $18,200 tax-free threshold and each tax bracket boundary.' },
                { title: 'EOFY Export', desc: 'Export a complete financial year summary — all invoices, expenses, GST data, and client payment history — as a CSV or PDF to hand to your accountant. One click, every receipt accounted for.' },
              ].map((item, i) => (
                <div key={i} className="rounded-xl bg-gray-800/50 border border-indigo-500/20 p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center">
                      <svg className="w-4 h-4 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h4 className="text-white font-semibold">{item.title}</h4>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Related glossary terms */}
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 mt-6">
              <h4 className="text-white font-semibold mb-4">Related Glossary Terms</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  { label: 'BAS', href: '/glossary/bas' },
                  { label: 'PAYG', href: '/glossary/payg' },
                  { label: 'Income Tax', href: '/glossary/income-tax' },
                  { label: 'Tax Return', href: '/glossary/tax-return' },
                  { label: 'Superannuation', href: '/glossary/superannuation' },
                  { label: 'Tax Deduction', href: '/glossary/tax-deduction' },
                ].map((term) => (
                  <Link key={term.href} href={term.href} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium hover:bg-indigo-500/20 transition-colors">
                    {term.label}
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Related Tools */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-white mb-2 text-center">Related Tools</h2>
        <p className="text-gray-400 text-center mb-8">Free tools to help you manage your financial year obligations and EOFY preparation.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {relatedTools.map((tool) => (
            <Link key={tool.href} href={tool.href} className="group p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:border-indigo-500/50 hover:bg-gray-800/80 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-4">{tool.icon}</div>
              <h3 className="text-white font-medium mb-2 group-hover:text-indigo-400 transition-colors">{tool.name}</h3>
              <p className="text-sm text-gray-400">{tool.description}</p>
              <div className="mt-4 text-indigo-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
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
        <p className="text-gray-400 text-center mb-8">In-depth guides on Australian tax obligations and EOFY preparation for freelancers.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {relatedGuides.map((guide) => (
            <Link key={guide.href} href={guide.href} className="group p-6 rounded-2xl bg-gray-800/40 border border-gray-700/40 hover:border-indigo-500/40 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h3 className="text-white font-medium mb-2 group-hover:text-indigo-400 transition-colors">{guide.name}</h3>
              <p className="text-sm text-gray-400">{guide.description}</p>
              <div className="mt-4 text-indigo-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
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
              <summary className="flex items-center justify-between cursor-pointer px-6 py-4 text-white font-medium hover:text-indigo-400 transition-colors">
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
        <div className="rounded-2xl bg-gradient-to-br from-indigo-500/10 to-blue-500/10 border border-indigo-500/20 p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay on Top of Every Financial Year Deadline
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            InvoiceFlow automatically tracks your income by financial year, calculates BAS-ready GST data, and exports everything your accountant needs for EOFY &mdash; so you never miss a deadline or a deduction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button>Start Free &mdash; No Card Required</Button>
            </Link>
            <Link href="/tools/tax-estimator">
              <Button variant="secondary">Estimate Your Tax</Button>
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
