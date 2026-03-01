import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Cash Flow Statement: Template & Guide for Australian Freelancers — InvoiceFlow',
  description:
    'What is a cash flow statement? Learn how to read and create one, the three sections (operating, investing, financing), direct vs indirect method, difference from P&L, and key metrics. Includes worked examples, templates, and tips for Australian freelancers and sole traders.',
  keywords: [
    'cash flow statement template',
    'statement of cash flows explained',
    'cash flow statement small business',
    'cash flow statement vs profit and loss',
    'direct vs indirect cash flow statement',
    'cash flow statement example australia',
    'operating cash flow freelancer',
    'how to prepare cash flow statement',
  ],
  alternates: { canonical: '/glossary/cash-flow-statement' },
  openGraph: {
    title: 'Cash Flow Statement: Template & Guide for Australian Freelancers — InvoiceFlow',
    description:
      'Everything you need to know about cash flow statements: definition (AASB 107), the three sections, direct vs indirect method, how to read key metrics, comparison with other financial reports, and how InvoiceFlow automates cash flow tracking for freelancers.',
    url: 'https://invoiceflow-teal.vercel.app/glossary/cash-flow-statement',
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
    { '@type': 'ListItem', position: 3, name: 'Cash Flow Statement', item: `${BASE_URL}/glossary/cash-flow-statement` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do freelancers and sole traders need a cash flow statement?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Freelancers and sole traders are not legally required to prepare a formal cash flow statement for the ATO unless they operate through a company (Pty Ltd) that meets certain reporting thresholds. However, preparing one is strongly recommended in several situations: when applying for a business loan or line of credit (banks almost always require one), when completing a financial health check to understand whether your business is generating or consuming cash, when preparing for BAS lodgement to reconcile your actual cash position against your GST obligations, and when reviewing your business annually to identify trends in operating cash flow. Even a simple quarterly cash flow statement gives you visibility into where your money actually went versus where your profit and loss statement says it went. The ATO does not require sole traders to lodge a cash flow statement, but your accountant or bank may request one.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between a cash flow statement and a profit and loss statement?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A cash flow statement tracks the actual movement of cash into and out of your business during a period, while a profit and loss (P&L) statement records revenue earned and expenses incurred regardless of whether cash has changed hands. The key difference is timing. If you invoice a client $10,000 in March but they pay in May, your P&L records $10,000 revenue in March (when earned) while your cash flow statement records $10,000 as a cash inflow in May (when received). This is why a business can show a healthy profit on the P&L but have no cash in the bank. The cash flow statement answers "how much money do I actually have?" while the P&L answers "how much did I earn and spend on paper?" For freelancers on cash basis accounting, the two reports are more closely aligned because revenue is only recorded when payment is received. For those on accrual accounting, the gap between P&L profit and actual cash can be significant.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I use the direct or indirect method for my cash flow statement?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For Australian freelancers and sole traders, the direct method is almost always the better choice. The direct method lists actual cash receipts (money received from clients, interest income, tax refunds) and actual cash payments (rent paid, software subscriptions, insurance premiums, subcontractor payments). It is straightforward and mirrors what you see in your bank statements. The indirect method starts with net profit from your P&L and then adjusts for non-cash items like depreciation, changes in accounts receivable, and changes in accounts payable. While the indirect method is popular with larger companies because it reconciles profit to cash, it is unnecessarily complex for most sole traders. AASB 107 (the Australian accounting standard for cash flow statements) actually encourages the direct method, and the ATO prefers it for small business reporting. Unless your accountant specifically requests the indirect method or you operate a company with significant non-cash transactions, stick with direct.',
      },
    },
    {
      '@type': 'Question',
      name: 'How often should I prepare a cash flow statement?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The ideal frequency depends on your business size and cash flow volatility. For most freelancers, a quarterly cash flow statement aligned with your BAS quarters (July-September, October-December, January-March, April-June) is the sweet spot. This gives you four snapshots per financial year, aligns with your tax reporting obligations, and is frequent enough to catch trends early. If your business has volatile cash flow, high expenses, or you are in a growth phase, consider monthly statements for tighter visibility. Annual statements are the bare minimum and are typically prepared as part of end-of-financial-year reporting. The key distinction: a cash flow statement is a backward-looking report of what actually happened, while a cash flow forecast is a forward-looking projection. You need both. Prepare the statement quarterly to understand reality, and maintain a rolling 13-week forecast to plan ahead.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does negative operating cash flow mean for my freelance business?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Negative operating cash flow means your core business activities consumed more cash than they generated during the period. For a freelancer, this means the cash you received from client payments was less than the cash you paid out for business expenses (rent, software, insurance, subcontractors, supplies, etc.). This is a serious warning sign if it persists across multiple periods because operating activities are your primary source of cash. However, negative operating cash flow is not always alarming in isolation. It can occur in a single quarter due to timing — for example, if several large invoices were sent in late June but not paid until July, your April-June quarter would show low receipts despite strong billing. It can also happen during seasonal dips like the December-January quiet period. The critical question is whether the pattern is temporary or chronic. One quarter of negative operating cash flow with a clear cause is manageable. Three consecutive quarters of negative operating cash flow means your business model, pricing, or expense structure needs urgent review.',
      },
    },
  ],
};

const tocItems = [
  { id: 'what-is-cash-flow-statement', label: '1. What Is a Cash Flow Statement?' },
  { id: 'three-sections', label: '2. The Three Sections Explained' },
  { id: 'direct-vs-indirect', label: '3. Direct vs Indirect Method' },
  { id: 'reading-cash-flow-statement', label: '4. Reading a Cash Flow Statement' },
  { id: 'cash-flow-statement-vs-other-reports', label: '5. Cash Flow Statement vs Other Reports' },
  { id: 'invoiceflow-cash-flow-tracking', label: '6. How InvoiceFlow Helps' },
];

const relatedTools = [
  {
    href: '/tools/invoice-generator',
    name: 'Invoice Generator',
    description: 'Create professional invoices instantly and track every payment to build an accurate picture of your operating cash flow.',
    icon: (
      <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    href: '/tools/gst-calculator',
    name: 'GST Calculator',
    description: 'Calculate GST on your invoices and reconcile your quarterly BAS obligations against your actual cash flow statement.',
    icon: (
      <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    href: '/tools/profit-margin-calculator',
    name: 'Profit Margin Calculator',
    description: 'Understand your profit margin alongside your cash flow to spot the gap between paper profit and actual cash in the bank.',
    icon: (
      <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    href: '/tools/bas-lodgement-checklist',
    name: 'BAS Lodgement Checklist',
    description: 'Step-by-step BAS checklist that uses your cash flow statement data to ensure accurate quarterly GST reporting.',
    icon: (
      <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const relatedGuides = [
  {
    href: '/guides/getting-paid-faster',
    name: 'Getting Paid Faster',
    description: 'Proven strategies to reduce payment delays, chase overdue invoices, and improve the operating section of your cash flow statement.',
  },
  {
    href: '/guides/gst-for-freelancers',
    name: 'GST for Freelancers',
    description: 'How GST works for freelancers, BAS reporting, and how GST payments appear in your cash flow statement.',
  },
  {
    href: '/guides/tax-guide-freelancers',
    name: 'Tax Guide for Freelancers',
    description: 'Complete guide to income tax, PAYG, superannuation, and how tax payments impact your statement of cash flows.',
  },
];

export default function CashFlowStatementGlossaryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative px-4 pt-20 pb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-green-500/10 to-emerald-500/10 blur-3xl" />
        <div className="relative max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/glossary" className="hover:text-white transition-colors">Glossary</Link>
            <span>/</span>
            <span className="text-white">Cash Flow Statement</span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            Glossary &mdash; Financial Reporting
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Cash Flow Statement{' '}
            <span className="bg-gradient-to-r from-emerald-500 to-green-500 bg-clip-text text-transparent">
              Explained for Freelancers
            </span>
          </h1>

          {/* Summary */}
          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            A cash flow statement shows where your money actually went &mdash; not where your books say it went. This guide covers everything: what a cash flow statement is under AASB 107, the three sections (operating, investing, financing), direct vs indirect methods, how to read key metrics, and how it compares to your P&amp;L, balance sheet, and BAS.
          </p>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>14 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Australia-Focused 2025-26</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
              </svg>
              <span>Updated March 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* In a Nutshell */}
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <div className="rounded-2xl bg-gradient-to-br from-emerald-500/10 to-green-500/10 border border-emerald-500/20 p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-white">In a Nutshell</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs font-bold">AASB</span>
              <div>
                <p className="text-white font-medium text-sm">AASB 107</p>
                <p className="text-gray-400 text-sm">The Australian accounting standard governing cash flow statement presentation and requirements</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs font-bold">3</span>
              <div>
                <p className="text-white font-medium text-sm">3 Sections</p>
                <p className="text-gray-400 text-sm">Operating, Investing, and Financing &mdash; every cash movement falls into one of these categories</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs font-bold">82%</span>
              <div>
                <p className="text-white font-medium text-sm">Of Small Business Failures</p>
                <p className="text-gray-400 text-sm">Of small business failures are linked to cash flow problems, not profitability</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs font-bold">Direct</span>
              <div>
                <p className="text-white font-medium text-sm">Recommended Method</p>
                <p className="text-gray-400 text-sm">The direct method is simpler and recommended for Australian sole traders and small freelancers</p>
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
                className="flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition-colors text-sm py-1"
              >
                <svg className="w-4 h-4 text-emerald-500/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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

        {/* Section 1: What Is a Cash Flow Statement? */}
        <section id="what-is-cash-flow-statement">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center text-white text-sm font-bold">1</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">What Is a Cash Flow Statement?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              A cash flow statement (also called a <strong className="text-white">statement of cash flows</strong>) is a financial report that summarises the <strong className="text-white">actual movement of cash into and out of your business</strong> over a specific period &mdash; typically a month, quarter, or financial year. It answers the fundamental question: <em>&quot;Where did my money actually go?&quot;</em>
            </p>
            <p className="text-gray-300 leading-relaxed">
              Under <strong className="text-white">AASB 107 &mdash; Statement of Cash Flows</strong>, the Australian accounting standard that governs this report, every cash movement is classified into one of three categories: operating activities, investing activities, and financing activities. Together, these three sections account for every dollar that entered or left your bank account during the reporting period.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-emerald-500/20 p-5">
                <h4 className="text-emerald-400 font-semibold mb-2">Operating Activities</h4>
                <p className="text-gray-400 text-sm">Cash generated from your core business &mdash; client payments received, business expenses paid. The most important section for freelancers.</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-gray-300 font-semibold mb-2">Investing Activities</h4>
                <p className="text-gray-400 text-sm">Cash spent on or received from long-term assets &mdash; buying a laptop, selling equipment, purchasing investments.</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-gray-300 font-semibold mb-2">Financing Activities</h4>
                <p className="text-gray-400 text-sm">Cash from loans, credit facilities, owner contributions coming in, and loan repayments or owner drawings going out.</p>
              </div>
            </div>

            <h3 className="text-xl font-bold text-white mt-8 mb-4">Cash Flow Statement vs Profit &amp; Loss</h3>
            <p className="text-gray-300 leading-relaxed">
              The most important distinction in business finance: <strong className="text-white">profit does not equal cash</strong>. Your profit and loss statement records revenue when earned and expenses when incurred, regardless of when cash changes hands. Your cash flow statement only records money when it actually moves. You can be profitable on paper and completely out of cash at the same time &mdash; this is why <strong className="text-white">82% of small business failures are linked to cash flow problems</strong>, not a lack of profitability.
            </p>

            <div className="rounded-2xl border border-gray-700/50 overflow-hidden mt-6">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-800/80">
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-3">Aspect</th>
                    <th className="text-left text-sm font-medium text-emerald-400 px-6 py-3">Cash Flow Statement</th>
                    <th className="text-left text-sm font-medium text-green-400 px-6 py-3">Profit &amp; Loss Statement</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700/50">
                  {[
                    { aspect: 'Tracks', cfs: 'Actual cash movements', pnl: 'Revenue earned & expenses incurred' },
                    { aspect: 'Timing', cfs: 'When cash is received/paid', pnl: 'When revenue is earned/expenses incurred' },
                    { aspect: 'Key Question', cfs: '"Where did the money go?"', pnl: '"Was the business profitable?"' },
                    { aspect: 'Includes Depreciation?', cfs: 'No (non-cash item)', pnl: 'Yes (reduces profit)' },
                    { aspect: 'Includes Unpaid Invoices?', cfs: 'No (only records payment)', pnl: 'Yes (records revenue at invoice date)' },
                    { aspect: 'Best For', cfs: 'Solvency & liquidity check', pnl: 'Profitability assessment' },
                  ].map((row, i) => (
                    <tr key={i} className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-2 text-gray-300 text-sm font-medium">{row.aspect}</td>
                      <td className="px-6 py-2 text-gray-400 text-sm">{row.cfs}</td>
                      <td className="px-6 py-2 text-gray-400 text-sm">{row.pnl}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-bold text-white mt-8 mb-4">When Freelancers Need a Cash Flow Statement</h3>
            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-emerald-400 font-semibold mb-2">Bank Loans &amp; Credit</h4>
                <p className="text-gray-400 text-sm">Banks and lenders almost always request a cash flow statement when you apply for a business loan, line of credit, or mortgage as a self-employed borrower. It proves your business generates real cash, not just paper profit.</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-emerald-400 font-semibold mb-2">BAS Reconciliation</h4>
                <p className="text-gray-400 text-sm">Reconciling your cash flow statement against your BAS each quarter ensures your GST collected and GST paid figures match your actual cash position &mdash; catching errors before the ATO does.</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-emerald-400 font-semibold mb-2">Financial Health Checks</h4>
                <p className="text-gray-400 text-sm">A quarterly cash flow statement reveals whether your business is actually generating cash or consuming it. Your P&amp;L can mask cash problems that the statement of cash flows exposes immediately.</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-emerald-400 font-semibold mb-2">End-of-Year Reporting</h4>
                <p className="text-gray-400 text-sm">Your accountant uses the cash flow statement to reconcile your tax return, identify deductions, verify income, and ensure your financial records tell a consistent story to the ATO.</p>
              </div>
            </div>

            <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-5 mt-6">
              <p className="text-emerald-400 font-medium mb-2">The 82% Statistic</p>
              <p className="text-gray-400 text-sm">
                Research consistently shows that <strong className="text-gray-200">82% of small business failures are linked to poor cash flow management</strong>, not a lack of customers or revenue. These businesses were generating sales &mdash; they just could not convert those sales into timely cash. A cash flow statement is how you catch this problem before it becomes fatal.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: The Three Sections Explained */}
        <section id="three-sections">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center text-white text-sm font-bold">2</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">The Three Sections Explained</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Every cash flow statement is divided into three sections under AASB 107. Each section captures a different <em>type</em> of cash movement. Together, they account for every dollar that entered or left your business.
            </p>

            {/* Operating Activities */}
            <div className="rounded-xl bg-gray-800/50 border border-emerald-500/20 p-6 mt-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                  <span className="text-emerald-400 font-bold text-sm">A</span>
                </div>
                <h3 className="text-lg font-semibold text-white">Operating Activities</h3>
                <span className="text-xs text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">Most Important</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Cash generated from your <strong className="text-gray-200">core business operations</strong>. For freelancers, this is the section that matters most &mdash; it shows whether your day-to-day business is generating or consuming cash.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="rounded-lg bg-green-500/5 border border-green-500/20 p-4">
                  <p className="text-green-400 text-sm font-bold mb-2">Cash Inflows</p>
                  <ul className="text-gray-400 text-sm space-y-1">
                    <li>Client payments received</li>
                    <li>Retainer fees collected</li>
                    <li>Interest income earned</li>
                    <li>GST collected from clients</li>
                    <li>Tax refunds received</li>
                    <li>Grant or government payments</li>
                  </ul>
                </div>
                <div className="rounded-lg bg-red-500/5 border border-red-500/20 p-4">
                  <p className="text-red-400 text-sm font-bold mb-2">Cash Outflows</p>
                  <ul className="text-gray-400 text-sm space-y-1">
                    <li>Rent and office costs paid</li>
                    <li>Software subscriptions paid</li>
                    <li>Insurance premiums paid</li>
                    <li>Subcontractor payments</li>
                    <li>GST remitted to ATO</li>
                    <li>Income tax and PAYG payments</li>
                    <li>Superannuation contributions</li>
                    <li>Phone, internet, utilities</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Investing Activities */}
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 mt-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gray-700/50 flex items-center justify-center">
                  <span className="text-gray-300 font-bold text-sm">B</span>
                </div>
                <h3 className="text-lg font-semibold text-white">Investing Activities</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Cash spent on or received from <strong className="text-gray-200">long-term assets and investments</strong>. For freelancers, this is typically less active but still relevant when you buy or sell equipment.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="rounded-lg bg-green-500/5 border border-green-500/20 p-4">
                  <p className="text-green-400 text-sm font-bold mb-2">Cash Inflows</p>
                  <ul className="text-gray-400 text-sm space-y-1">
                    <li>Sale of equipment or tools</li>
                    <li>Sale of business vehicle</li>
                    <li>Redemption of investments</li>
                    <li>Sale of intellectual property</li>
                    <li>Proceeds from asset disposal</li>
                    <li>Return of security deposits</li>
                  </ul>
                </div>
                <div className="rounded-lg bg-red-500/5 border border-red-500/20 p-4">
                  <p className="text-red-400 text-sm font-bold mb-2">Cash Outflows</p>
                  <ul className="text-gray-400 text-sm space-y-1">
                    <li>Purchase of laptop or computer</li>
                    <li>Camera or studio equipment</li>
                    <li>Business vehicle purchase</li>
                    <li>Office furniture or fit-out</li>
                    <li>Software licence (perpetual)</li>
                    <li>Security deposits paid</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Financing Activities */}
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 mt-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gray-700/50 flex items-center justify-center">
                  <span className="text-gray-300 font-bold text-sm">C</span>
                </div>
                <h3 className="text-lg font-semibold text-white">Financing Activities</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Cash from <strong className="text-gray-200">loans, owner contributions, and debt repayments</strong>. This section shows how the business is funded beyond its operations.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="rounded-lg bg-green-500/5 border border-green-500/20 p-4">
                  <p className="text-green-400 text-sm font-bold mb-2">Cash Inflows</p>
                  <ul className="text-gray-400 text-sm space-y-1">
                    <li>Business loan proceeds</li>
                    <li>Line of credit drawdowns</li>
                    <li>Owner capital contributions</li>
                    <li>Equipment finance received</li>
                    <li>Personal funds injected</li>
                    <li>Investor contributions</li>
                  </ul>
                </div>
                <div className="rounded-lg bg-red-500/5 border border-red-500/20 p-4">
                  <p className="text-red-400 text-sm font-bold mb-2">Cash Outflows</p>
                  <ul className="text-gray-400 text-sm space-y-1">
                    <li>Loan repayments (principal)</li>
                    <li>Interest payments on loans</li>
                    <li>Owner drawings / distributions</li>
                    <li>Equipment lease payments</li>
                    <li>Line of credit repayments</li>
                    <li>Dividend payments (Pty Ltd)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Classification Table */}
            <h3 className="text-xl font-bold text-white mt-8 mb-4">What Goes Where? Quick Reference</h3>
            <div className="rounded-2xl border border-gray-700/50 overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-800/80">
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-3">Transaction</th>
                    <th className="text-left text-sm font-medium text-emerald-400 px-6 py-3">Section</th>
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-3">Direction</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700/50">
                  {[
                    { item: 'Client pays $5,000 invoice', section: 'Operating', dir: 'Inflow' },
                    { item: 'Pay $220/mo for Adobe Creative Cloud', section: 'Operating', dir: 'Outflow' },
                    { item: 'Buy a $3,500 MacBook Pro', section: 'Investing', dir: 'Outflow' },
                    { item: 'Sell old camera for $800', section: 'Investing', dir: 'Inflow' },
                    { item: 'Take a $10,000 business loan', section: 'Financing', dir: 'Inflow' },
                    { item: 'Repay $500/mo on equipment finance', section: 'Financing', dir: 'Outflow' },
                    { item: 'Owner draws $4,000 for personal use', section: 'Financing', dir: 'Outflow' },
                    { item: 'Remit $2,700 GST to ATO via BAS', section: 'Operating', dir: 'Outflow' },
                    { item: 'Receive $1,200 ATO tax refund', section: 'Operating', dir: 'Inflow' },
                    { item: 'Inject $5,000 personal savings into business', section: 'Financing', dir: 'Inflow' },
                  ].map((row, i) => (
                    <tr key={i} className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-2 text-gray-300 text-sm">{row.item}</td>
                      <td className="px-6 py-2 text-sm">
                        <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                          row.section === 'Operating' ? 'bg-emerald-500/10 text-emerald-400' :
                          row.section === 'Investing' ? 'bg-blue-500/10 text-blue-400' :
                          'bg-purple-500/10 text-purple-400'
                        }`}>{row.section}</span>
                      </td>
                      <td className={`px-6 py-2 text-sm font-medium ${row.dir === 'Inflow' ? 'text-green-400' : 'text-red-400'}`}>{row.dir}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-5 mt-6">
              <p className="text-emerald-400 font-medium mb-2">The Golden Rule</p>
              <p className="text-gray-400 text-sm">
                If a cash movement relates to your <strong className="text-gray-200">day-to-day business</strong>, it goes in Operating. If it involves a <strong className="text-gray-200">long-term asset</strong>, it goes in Investing. If it involves <strong className="text-gray-200">debt or ownership</strong>, it goes in Financing. When in doubt, ask: &quot;Is this part of running the business, buying/selling assets, or funding the business?&quot;
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Direct vs Indirect Method */}
        <section id="direct-vs-indirect">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center text-white text-sm font-bold">3</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Direct vs Indirect Method</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              There are two accepted methods for preparing the operating activities section of a cash flow statement. Both produce the same final number, but they take very different paths to get there. AASB 107 allows both methods but <strong className="text-white">encourages the direct method</strong> for Australian businesses.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-6">
                <h4 className="text-emerald-400 font-semibold mb-3">Direct Method</h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-3">
                  Lists the <strong className="text-gray-200">actual cash receipts and cash payments</strong> from operating activities. You simply report what came in and what went out &mdash; exactly as it appears in your bank statement.
                </p>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>+ Cash received from clients</li>
                  <li>+ Interest received</li>
                  <li>+ Other operating receipts</li>
                  <li>- Cash paid to suppliers</li>
                  <li>- Cash paid for operating costs</li>
                  <li>- Tax payments made</li>
                  <li>= Net operating cash flow</li>
                </ul>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <h4 className="text-gray-300 font-semibold mb-3">Indirect Method</h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-3">
                  Starts with <strong className="text-gray-200">net profit from the P&amp;L</strong> and adjusts for non-cash items and changes in working capital to arrive at actual cash flow.
                </p>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>Net profit (from P&amp;L)</li>
                  <li>+ Depreciation (add back)</li>
                  <li>+ Loss on asset disposal</li>
                  <li>- Increase in accounts receivable</li>
                  <li>+ Increase in accounts payable</li>
                  <li>- Increase in prepaid expenses</li>
                  <li>= Net operating cash flow</li>
                </ul>
              </div>
            </div>

            {/* Comparison Table */}
            <h3 className="text-xl font-bold text-white mt-8 mb-4">Side-by-Side Comparison</h3>
            <div className="rounded-2xl border border-gray-700/50 overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-800/80">
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-3">Aspect</th>
                    <th className="text-left text-sm font-medium text-emerald-400 px-6 py-3">Direct Method</th>
                    <th className="text-left text-sm font-medium text-gray-400 px-6 py-3">Indirect Method</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700/50">
                  {[
                    { aspect: 'Starting Point', direct: 'Actual bank transactions', indirect: 'Net profit from P&L' },
                    { aspect: 'Complexity', direct: 'Simple — mirrors bank statement', indirect: 'Complex — requires adjustments' },
                    { aspect: 'Data Required', direct: 'Bank statement / receipt records', indirect: 'P&L + balance sheet changes' },
                    { aspect: 'Transparency', direct: 'High — shows actual cash flows', indirect: 'Lower — shows adjustments' },
                    { aspect: 'AASB 107 Preference', direct: 'Encouraged', indirect: 'Permitted' },
                    { aspect: 'Best For', direct: 'Sole traders & small freelancers', indirect: 'Larger companies & corporates' },
                    { aspect: 'Preparation Time', direct: '30 min — 1 hour (quarterly)', indirect: '1 — 2 hours (quarterly)' },
                    { aspect: 'ATO Preference', direct: 'Preferred for small business', indirect: 'Acceptable' },
                  ].map((row, i) => (
                    <tr key={i} className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-2 text-gray-300 text-sm font-medium">{row.aspect}</td>
                      <td className="px-6 py-2 text-gray-400 text-sm">{row.direct}</td>
                      <td className="px-6 py-2 text-gray-400 text-sm">{row.indirect}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Worked Example */}
            <h3 className="text-xl font-bold text-white mt-8 mb-4">Worked Example: $120K Freelancer (Quarterly)</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Jordan is a freelance web developer in Sydney earning ~$120,000/year. Here is the same quarter (January&ndash;March) shown using both methods:
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-5">
                <h4 className="text-emerald-400 font-semibold mb-3">Direct Method</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-gray-300"><span>Cash from clients</span><span className="text-green-400">+$28,500</span></div>
                  <div className="flex justify-between text-gray-300"><span>Interest received</span><span className="text-green-400">+$120</span></div>
                  <div className="flex justify-between text-gray-300"><span>Software &amp; tools paid</span><span className="text-red-400">-$1,860</span></div>
                  <div className="flex justify-between text-gray-300"><span>Rent &amp; office costs</span><span className="text-red-400">-$2,400</span></div>
                  <div className="flex justify-between text-gray-300"><span>Insurance paid</span><span className="text-red-400">-$375</span></div>
                  <div className="flex justify-between text-gray-300"><span>Phone &amp; internet</span><span className="text-red-400">-$360</span></div>
                  <div className="flex justify-between text-gray-300"><span>Subcontractor paid</span><span className="text-red-400">-$3,200</span></div>
                  <div className="flex justify-between text-gray-300"><span>GST remitted to ATO</span><span className="text-red-400">-$2,590</span></div>
                  <div className="flex justify-between text-gray-300"><span>PAYG instalment</span><span className="text-red-400">-$4,200</span></div>
                  <div className="border-t border-gray-700/50 pt-2 flex justify-between font-bold"><span className="text-white">Net Operating Cash Flow</span><span className="text-emerald-400">+$13,635</span></div>
                </div>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-gray-300 font-semibold mb-3">Indirect Method</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-gray-300"><span>Net profit (from P&amp;L)</span><span className="text-green-400">+$16,450</span></div>
                  <div className="flex justify-between text-gray-300"><span>+ Depreciation</span><span className="text-green-400">+$425</span></div>
                  <div className="flex justify-between text-gray-300"><span>- Increase in receivables</span><span className="text-red-400">-$3,800</span></div>
                  <div className="flex justify-between text-gray-300"><span>+ Decrease in prepayments</span><span className="text-green-400">+$200</span></div>
                  <div className="flex justify-between text-gray-300"><span>+ Increase in payables</span><span className="text-green-400">+$360</span></div>
                  <div className="flex justify-between text-gray-300 opacity-50"><span>&nbsp;</span><span>&nbsp;</span></div>
                  <div className="flex justify-between text-gray-300 opacity-50"><span>&nbsp;</span><span>&nbsp;</span></div>
                  <div className="flex justify-between text-gray-300 opacity-50"><span>&nbsp;</span><span>&nbsp;</span></div>
                  <div className="flex justify-between text-gray-300 opacity-50"><span>&nbsp;</span><span>&nbsp;</span></div>
                  <div className="border-t border-gray-700/50 pt-2 flex justify-between font-bold"><span className="text-white">Net Operating Cash Flow</span><span className="text-emerald-400">+$13,635</span></div>
                </div>
              </div>
            </div>
            <p className="text-gray-500 text-xs mt-2 italic">* Both methods arrive at the same $13,635 net operating cash flow. The direct method shows exactly where cash came from and went. The indirect method explains why profit ($16,450) differed from cash ($13,635) &mdash; primarily because $3,800 of invoiced revenue had not been paid yet.</p>

            <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-5 mt-6">
              <p className="text-emerald-400 font-medium mb-2">Which Method Should Sole Traders Use?</p>
              <p className="text-gray-400 text-sm">
                <strong className="text-gray-200">Use the direct method.</strong> It is simpler, mirrors your bank statements, is preferred by AASB 107 and the ATO for small businesses, and gives you clearer visibility into where your cash is actually going. The indirect method is better suited to larger companies with complex accounting. Unless your accountant specifically requests the indirect method, the direct method is the right choice for every Australian freelancer and sole trader.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Reading a Cash Flow Statement */}
        <section id="reading-cash-flow-statement">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center text-white text-sm font-bold">4</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Reading a Cash Flow Statement</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Knowing how to prepare a cash flow statement is only half the skill &mdash; you also need to know how to <strong className="text-white">read it and extract actionable insights</strong>. Here are the three key metrics every freelancer should track, with traffic light thresholds to assess your financial health.
            </p>

            {/* Key Metrics */}
            <div className="space-y-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Operating Cash Flow Ratio</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  <strong className="text-gray-200">Formula: Operating Cash Flow / Current Liabilities</strong>. This measures whether your business generates enough cash from operations to cover its short-term obligations (BAS, upcoming bills, loan repayments due). A ratio above 1.0 means you are generating more operating cash than you owe in the short term.
                </p>
                <div className="grid sm:grid-cols-3 gap-3">
                  <div className="rounded-lg bg-green-500/10 border border-green-500/20 p-3 text-center">
                    <p className="text-green-400 text-xs font-bold mb-1">GREEN: Above 1.5</p>
                    <p className="text-gray-500 text-xs">Comfortably covering obligations from operations</p>
                  </div>
                  <div className="rounded-lg bg-amber-500/10 border border-amber-500/20 p-3 text-center">
                    <p className="text-amber-400 text-xs font-bold mb-1">AMBER: 1.0 &mdash; 1.5</p>
                    <p className="text-gray-500 text-xs">Covering obligations but tight. Build buffer.</p>
                  </div>
                  <div className="rounded-lg bg-red-500/10 border border-red-500/20 p-3 text-center">
                    <p className="text-red-400 text-xs font-bold mb-1">RED: Below 1.0</p>
                    <p className="text-gray-500 text-xs">Operations not covering obligations. Act now.</p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Cash Burn Rate</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  <strong className="text-gray-200">Formula: Total Cash Outflows / Number of Months</strong>. Cash burn rate tells you how much cash your business consumes per month on average. Combined with your current cash balance, it tells you how many months of runway you have: <strong className="text-gray-200">Runway = Cash Balance / Monthly Burn Rate</strong>.
                </p>
                <div className="grid sm:grid-cols-3 gap-3">
                  <div className="rounded-lg bg-green-500/10 border border-green-500/20 p-3 text-center">
                    <p className="text-green-400 text-xs font-bold mb-1">GREEN: 6+ Months Runway</p>
                    <p className="text-gray-500 text-xs">Healthy buffer for seasonal dips and gaps</p>
                  </div>
                  <div className="rounded-lg bg-amber-500/10 border border-amber-500/20 p-3 text-center">
                    <p className="text-amber-400 text-xs font-bold mb-1">AMBER: 3 &mdash; 6 Months</p>
                    <p className="text-gray-500 text-xs">Adequate but build reserves when possible</p>
                  </div>
                  <div className="rounded-lg bg-red-500/10 border border-red-500/20 p-3 text-center">
                    <p className="text-red-400 text-xs font-bold mb-1">RED: Under 3 Months</p>
                    <p className="text-gray-500 text-xs">Tight. Reduce expenses or increase income urgently.</p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Free Cash Flow</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  <strong className="text-gray-200">Formula: Operating Cash Flow &minus; Capital Expenditures (Investing Outflows)</strong>. Free cash flow is what remains after running the business and maintaining your equipment. This is the cash available for savings, debt repayment, owner drawings, or reinvestment. For freelancers, it represents your true financial flexibility.
                </p>
                <div className="grid sm:grid-cols-3 gap-3">
                  <div className="rounded-lg bg-green-500/10 border border-green-500/20 p-3 text-center">
                    <p className="text-green-400 text-xs font-bold mb-1">GREEN: Consistently Positive</p>
                    <p className="text-gray-500 text-xs">Business generating surplus cash each period</p>
                  </div>
                  <div className="rounded-lg bg-amber-500/10 border border-amber-500/20 p-3 text-center">
                    <p className="text-amber-400 text-xs font-bold mb-1">AMBER: Breakeven / Volatile</p>
                    <p className="text-gray-500 text-xs">Fluctuating. Review pricing and expenses.</p>
                  </div>
                  <div className="rounded-lg bg-red-500/10 border border-red-500/20 p-3 text-center">
                    <p className="text-red-400 text-xs font-bold mb-1">RED: Consistently Negative</p>
                    <p className="text-gray-500 text-xs">Business consuming capital. Unsustainable.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Worked Example */}
            <h3 className="text-xl font-bold text-white mt-8 mb-4">Worked Example: $120K Freelancer Metrics</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Using Jordan&apos;s quarterly figures from Section 3, here is how the key metrics look:
            </p>
            <div className="rounded-2xl border border-gray-700/50 overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-800/80">
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-3">Metric</th>
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-3">Calculation</th>
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-3">Result</th>
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-3">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700/50">
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-emerald-400 text-sm font-bold">Operating Cash Flow Ratio</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">$13,635 / $8,200</td>
                    <td className="px-6 py-3 text-white text-sm font-bold">1.66</td>
                    <td className="px-6 py-3"><span className="bg-green-500/10 text-green-400 text-xs px-2 py-0.5 rounded-full font-medium">Green</span></td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-emerald-400 text-sm font-bold">Monthly Burn Rate</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">$14,985 / 3 months</td>
                    <td className="px-6 py-3 text-white text-sm font-bold">$4,995/mo</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">Baseline</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-emerald-400 text-sm font-bold">Cash Runway</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">$22,000 / $4,995</td>
                    <td className="px-6 py-3 text-white text-sm font-bold">4.4 months</td>
                    <td className="px-6 py-3"><span className="bg-amber-500/10 text-amber-400 text-xs px-2 py-0.5 rounded-full font-medium">Amber</span></td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-emerald-400 text-sm font-bold">Free Cash Flow</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">$13,635 - $0 (no capex)</td>
                    <td className="px-6 py-3 text-white text-sm font-bold">$13,635</td>
                    <td className="px-6 py-3"><span className="bg-green-500/10 text-green-400 text-xs px-2 py-0.5 rounded-full font-medium">Green</span></td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* 5 Warning Signs */}
            <h3 className="text-xl font-bold text-white mt-8 mb-4">5 Warning Signs in Your Cash Flow Statement</h3>
            <div className="space-y-3">
              {[
                {
                  num: '1',
                  title: 'Negative Operating Cash Flow',
                  desc: 'Your core business is consuming more cash than it generates. If this persists for two or more consecutive quarters, your pricing, expenses, or client payment terms need urgent review.',
                },
                {
                  num: '2',
                  title: 'Positive P&L but Negative Cash Flow',
                  desc: 'Your books show profit but your bank account is shrinking. This usually means invoices are going unpaid (rising accounts receivable) or you have significant non-cash expenses like depreciation masking the cash reality.',
                },
                {
                  num: '3',
                  title: 'Operating Cash Flow Declining Quarter-on-Quarter',
                  desc: 'Even if operating cash flow is still positive, a downward trend signals deterioration. Revenue could be falling, expenses rising, or clients paying slower. Catch this trend early.',
                },
                {
                  num: '4',
                  title: 'Financing Inflows Propping Up Operations',
                  desc: 'If you are regularly injecting personal funds, drawing on credit, or taking loans to cover operating shortfalls, your business is not self-sustaining. Financing should fund growth, not survival.',
                },
                {
                  num: '5',
                  title: 'Cash Balance Below 2 Months of Expenses',
                  desc: 'Your closing cash balance divided by monthly burn rate gives you runway. Below 2 months means one slow quarter, one lost client, or one unexpected expense could leave you unable to meet obligations.',
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 rounded-xl bg-gray-800/50 border border-gray-700/50 p-4">
                  <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-red-400 font-bold text-sm">{item.num}</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm mb-1">{item.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-5 mt-6">
              <p className="text-emerald-400 font-medium mb-2">The Single Most Powerful Insight</p>
              <p className="text-gray-400 text-sm">
                Compare your <strong className="text-gray-200">P&amp;L profit to your operating cash flow</strong> each quarter. If profit is $15,000 but operating cash flow is only $8,000, that $7,000 gap is cash that exists on paper but not in your bank. Track this gap over time &mdash; if it is growing, your receivables management needs attention.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Cash Flow Statement vs Other Reports */}
        <section id="cash-flow-statement-vs-other-reports">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center text-white text-sm font-bold">5</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Cash Flow Statement vs Other Reports</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Freelancers encounter several financial reports throughout the year. Understanding how the cash flow statement relates to each one prevents confusion and helps you use the right report for the right decision.
            </p>

            <div className="rounded-2xl border border-gray-700/50 overflow-hidden mt-6 overflow-x-auto">
              <table className="w-full min-w-[800px]">
                <thead>
                  <tr className="bg-gray-800/80">
                    <th className="text-left text-sm font-medium text-gray-300 px-4 py-3">Aspect</th>
                    <th className="text-left text-sm font-medium text-emerald-400 px-4 py-3">Cash Flow Statement</th>
                    <th className="text-left text-sm font-medium text-green-400 px-4 py-3">Profit &amp; Loss</th>
                    <th className="text-left text-sm font-medium text-blue-400 px-4 py-3">Balance Sheet</th>
                    <th className="text-left text-sm font-medium text-purple-400 px-4 py-3">Cash Flow Forecast</th>
                    <th className="text-left text-sm font-medium text-amber-400 px-4 py-3">BAS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700/50">
                  {[
                    {
                      aspect: 'Purpose',
                      cfs: 'Where cash actually went',
                      pnl: 'Profit or loss earned',
                      bs: 'Snapshot of assets/liabilities',
                      fcf: 'Projected future cash',
                      bas: 'GST & PAYG reporting',
                    },
                    {
                      aspect: 'Time Period',
                      cfs: 'Past (monthly/quarterly)',
                      pnl: 'Past (monthly/annual)',
                      bs: 'Point in time (snapshot)',
                      fcf: 'Future (13-week rolling)',
                      bas: 'Past quarter',
                    },
                    {
                      aspect: 'Method',
                      cfs: 'Direct or indirect',
                      pnl: 'Accrual or cash basis',
                      bs: 'Assets = Liabilities + Equity',
                      fcf: 'Estimated inflows/outflows',
                      bas: 'Cash or accrual basis',
                    },
                    {
                      aspect: 'Who Uses It',
                      cfs: 'Owner, bank, accountant',
                      pnl: 'Owner, ATO, accountant',
                      bs: 'Owner, bank, investors',
                      fcf: 'Owner (internal planning)',
                      bas: 'ATO',
                    },
                    {
                      aspect: 'Frequency',
                      cfs: 'Quarterly recommended',
                      pnl: 'Monthly or annually',
                      bs: 'Annually (or as needed)',
                      fcf: 'Weekly updates',
                      bas: 'Quarterly (or monthly)',
                    },
                    {
                      aspect: 'Required by ATO?',
                      cfs: 'No (companies only)',
                      pnl: 'Yes (via tax return)',
                      bs: 'Companies only',
                      fcf: 'No',
                      bas: 'Yes (if GST registered)',
                    },
                    {
                      aspect: 'Format',
                      cfs: '3 sections (O/I/F)',
                      pnl: 'Revenue - Expenses',
                      bs: 'A = L + E',
                      fcf: 'Week-by-week projection',
                      bas: 'ATO form (1A, 1B, etc.)',
                    },
                    {
                      aspect: 'Key Metric',
                      cfs: 'Net cash increase/decrease',
                      pnl: 'Net profit/loss',
                      bs: 'Net equity',
                      fcf: 'Projected closing balance',
                      bas: 'GST refund/payable',
                    },
                  ].map((row, i) => (
                    <tr key={i} className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-4 py-2 text-gray-300 text-sm font-medium">{row.aspect}</td>
                      <td className="px-4 py-2 text-gray-400 text-sm">{row.cfs}</td>
                      <td className="px-4 py-2 text-gray-400 text-sm">{row.pnl}</td>
                      <td className="px-4 py-2 text-gray-400 text-sm">{row.bs}</td>
                      <td className="px-4 py-2 text-gray-400 text-sm">{row.fcf}</td>
                      <td className="px-4 py-2 text-gray-400 text-sm">{row.bas}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-5 mt-6">
              <p className="text-emerald-400 font-medium mb-2">How They Work Together</p>
              <p className="text-gray-400 text-sm">
                Think of these reports as different lenses on the same business. The <strong className="text-gray-200">P&amp;L tells you if you are profitable</strong>. The <strong className="text-gray-200">cash flow statement tells you if you are solvent</strong>. The <strong className="text-gray-200">balance sheet tells you what you own and owe</strong>. The <strong className="text-gray-200">forecast tells you where you are heading</strong>. The <strong className="text-gray-200">BAS tells the ATO what you owe them</strong>. A profitable business can be insolvent (positive P&amp;L, negative cash flow). A solvent business can be unprofitable short-term (negative P&amp;L, positive cash flow from deposits). You need all the lenses to see clearly.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-emerald-400 font-semibold mb-2">Backward-Looking Reports</h4>
                <p className="text-gray-400 text-sm">
                  Cash Flow Statement, P&amp;L, Balance Sheet, and BAS all look at <strong className="text-gray-200">what already happened</strong>. Use them for analysis, reporting, tax obligations, and understanding historical performance. Prepare quarterly at minimum.
                </p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-emerald-400 font-semibold mb-2">Forward-Looking Reports</h4>
                <p className="text-gray-400 text-sm">
                  The Cash Flow Forecast is the only <strong className="text-gray-200">forward-looking</strong> report in this list. It takes the patterns revealed by your historical reports and projects them into the future. Update weekly for the best early warning system.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: How InvoiceFlow Helps */}
        <section id="invoiceflow-cash-flow-tracking">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center text-white text-sm font-bold">6</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">How InvoiceFlow Helps</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Preparing a cash flow statement manually means exporting bank transactions, categorising every line item, and reconciling against your invoices. InvoiceFlow automates the heavy lifting so you get cash flow visibility without the spreadsheet headaches.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              {[
                {
                  title: 'Automatic Cash Flow Tracking from Invoices',
                  desc: 'Every invoice you send and every payment you receive is automatically categorised and tracked. InvoiceFlow builds a running record of your operating cash inflows in real-time, so half your cash flow statement is already done without any manual data entry.',
                },
                {
                  title: 'Real-Time Operating Cash Flow Dashboard',
                  desc: 'See your operating cash flow position at a glance: total received this period, total outstanding, overdue amounts, and net cash position. The dashboard updates live as payments come in, giving you an always-current view of your cash health.',
                },
                {
                  title: 'Cash Flow Reports for Bank Applications',
                  desc: 'Generate professional cash flow summaries formatted for bank loan and credit applications. InvoiceFlow compiles your invoice history, payment records, and cash flow trends into a clean report that demonstrates your business generates reliable cash.',
                },
                {
                  title: 'Integration with BAS Reporting',
                  desc: 'Your cash flow data automatically feeds into BAS-ready reports. GST collected on invoices, GST paid on expenses, and PAYG figures are tracked and reconciled against your actual cash movements, making quarterly BAS lodgement faster and more accurate.',
                },
              ].map((item, i) => (
                <div key={i} className="rounded-xl bg-gray-800/50 border border-emerald-500/20 p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                      <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
                  { label: 'Cash Flow', href: '/glossary/cash-flow' },
                  { label: 'Cash Flow Forecast', href: '/glossary/cash-flow-forecast' },
                  { label: 'Profit and Loss', href: '/glossary/profit-and-loss' },
                  { label: 'Balance Sheet', href: '/glossary/balance-sheet' },
                  { label: 'BAS', href: '/glossary/bas' },
                  { label: 'Revenue', href: '/glossary/revenue' },
                ].map((term) => (
                  <Link key={term.href} href={term.href} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium hover:bg-emerald-500/20 transition-colors">
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
        <p className="text-gray-400 text-center mb-8">Free tools to help you track cash flow and manage your freelance finances.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {relatedTools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:border-emerald-500/50 hover:bg-gray-800/80 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4">
                {tool.icon}
              </div>
              <h3 className="text-white font-medium mb-2 group-hover:text-emerald-400 transition-colors">{tool.name}</h3>
              <p className="text-sm text-gray-400">{tool.description}</p>
              <div className="mt-4 text-emerald-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
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
        <p className="text-gray-400 text-center mb-8">In-depth guides on getting paid, GST, and tax planning for Australian freelancers.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {relatedGuides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group p-6 rounded-2xl bg-gray-800/40 border border-gray-700/40 hover:border-emerald-500/40 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h3 className="text-white font-medium mb-2 group-hover:text-emerald-400 transition-colors">{guide.name}</h3>
              <p className="text-sm text-gray-400">{guide.description}</p>
              <div className="mt-4 text-emerald-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
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
              <summary className="flex items-center justify-between cursor-pointer px-6 py-4 text-white font-medium hover:text-emerald-400 transition-colors">
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
        <div className="rounded-2xl bg-gradient-to-br from-emerald-500/10 to-green-500/10 border border-emerald-500/20 p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stop Guessing &mdash; See Where Your Cash Actually Goes
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            InvoiceFlow helps Australian freelancers track cash flow automatically from their invoices. Real-time dashboards, BAS-ready reports, and cash flow summaries for bank applications &mdash; all in one place.
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
