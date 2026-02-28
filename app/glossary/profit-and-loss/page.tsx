import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Profit and Loss Statement: Complete Guide for Australian Freelancers — InvoiceFlow',
  description:
    'What is a profit and loss statement? Learn how to create, read, and use a P&L statement as an Australian freelancer or sole trader. Includes income categories, expense categories, worked example, and how P&L connects to your BAS and tax return.',
  keywords: [
    'profit and loss statement template',
    'P&L statement freelancer australia',
    'income statement sole trader',
    'profit and loss report small business',
    'how to read profit and loss statement',
    'P&L meaning',
    'freelance profit and loss',
    'income and expense statement',
  ],
  alternates: { canonical: '/glossary/profit-and-loss' },
  openGraph: {
    title: 'Profit and Loss Statement: Complete Guide for Australian Freelancers — InvoiceFlow',
    description:
      'What is a profit and loss statement? Learn how to create, read, and use a P&L statement as an Australian freelancer or sole trader. Includes income categories, expense categories, worked example, and how P&L connects to your BAS and tax return.',
    url: 'https://invoiceflow-teal.vercel.app/glossary/profit-and-loss',
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
    { '@type': 'ListItem', position: 3, name: 'Profit and Loss Statement', item: `${BASE_URL}/glossary/profit-and-loss` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a profit and loss statement?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "A P&L (also called an income statement) summarises your business income and expenses over a period, showing whether you made a profit or loss. For freelancers, it's the clearest picture of business health — total revenue minus total expenses = net profit (or loss). The ATO doesn't require sole traders to prepare formal P&L statements, but preparing one quarterly helps you track performance, estimate tax obligations, prepare BAS, and make informed business decisions.",
      },
    },
    {
      '@type': 'Question',
      name: 'How often should freelancers prepare a P&L?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most accountants recommend quarterly P&L statements, aligned with your BAS reporting periods (Jul-Sep, Oct-Dec, Jan-Mar, Apr-Jun). This gives you regular snapshots of business performance. Monthly is even better if you have variable income. At minimum, prepare an annual P&L before tax time to summarise total income and deductible expenses. InvoiceFlow can generate P&L reports automatically from your invoicing data.',
      },
    },
    {
      '@type': 'Question',
      name: "What's the difference between profit and cash flow?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Profit (from the P&L) is income minus expenses over a period — it's an accounting measure. Cash flow is actual money moving in and out of your bank account. You can be profitable but cash-poor if clients haven't paid yet (accounts receivable). Conversely, you can have positive cash flow but be unprofitable if you received advance payments for future work. Both matter: profit determines tax obligations, cash flow determines whether you can pay rent.",
      },
    },
    {
      '@type': 'Question',
      name: 'What expenses can freelancers include in their P&L?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Australian freelancers can include any expense directly related to earning income: home office costs (67c/hr fixed rate or actual costs method), vehicle expenses (85c/km or logbook), equipment and software, professional development, insurance (PI, public liability), marketing and advertising, accounting fees, phone and internet (business portion), subscriptions and tools, travel, and the instant asset write-off for items under $20,000. Keep records and receipts for 5 years.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does a P&L connect to my tax return?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Your P&L directly feeds into your Individual Tax Return (ITR) at the Business and Professional Items schedule. Total revenue goes into business income, total deductible expenses go into business deductions, and the net profit (revenue minus expenses) is added to your taxable income and taxed at individual rates. If you are GST-registered, the P&L also helps verify your BAS reporting — your quarterly GST collected and GST paid should align with your P&L income and expenses.',
      },
    },
  ],
};

const tocItems = [
  { id: 'what-is-pnl', label: '1. What Is a Profit and Loss Statement?' },
  { id: 'pnl-structure', label: '2. P&L Structure: Income, Expenses, and Net Profit' },
  { id: 'worked-example', label: '3. Building Your Freelance P&L (Worked Example)' },
  { id: 'reading-pnl', label: '4. Reading and Analysing Your P&L' },
  { id: 'tax-and-bas', label: '5. P&L for Tax and BAS Reporting' },
  { id: 'pnl-invoiceflow', label: '6. P&L Tracking with InvoiceFlow' },
];

const relatedTools = [
  {
    href: '/tools/profit-margin-calculator',
    name: 'Profit Margin Calculator',
    description: 'Calculate your true profit margin after expenses, tax, and super.',
    icon: (
      <svg className="w-6 h-6 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18v-.008zm-12 0h.008v.008H6v-.008z" />
      </svg>
    ),
  },
  {
    href: '/tools/freelance-tax-estimator',
    name: 'Tax Estimator',
    description: 'Estimate your income tax based on your P&L net profit using 2025-26 ATO rates.',
    icon: (
      <svg className="w-6 h-6 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zM6 3v.75M17.25 3v.75M3 16.5V6a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 6v10.5m-18 0h18" />
      </svg>
    ),
  },
  {
    href: '/tools/bas-preparation-checklist',
    name: 'BAS Preparation Checklist',
    description: 'Use your P&L data to prepare accurate quarterly BAS lodgements.',
    icon: (
      <svg className="w-6 h-6 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    href: '/tools/rate-calculator',
    name: 'Rate Calculator',
    description: 'Set rates that deliver your target net profit after all expenses.',
    icon: (
      <svg className="w-6 h-6 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
];

const relatedGuides = [
  {
    href: '/guides/tax-guide-freelancers',
    name: 'Tax Guide for Freelancers',
    description: 'How your P&L connects to your annual tax return and deductions.',
  },
  {
    href: '/guides/eofy-guide',
    name: 'EOFY Guide',
    description: 'Year-end P&L preparation, maximising deductions, and lodging your return.',
  },
  {
    href: '/guides/setting-freelance-rates',
    name: 'Setting Freelance Rates',
    description: 'Use P&L analysis to ensure your rates deliver target profitability.',
  },
];

export default function ProfitAndLossGlossaryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative px-4 pt-20 pb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-lime-500/10 via-green-500/10 to-lime-500/10 blur-3xl" />
        <div className="relative max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/glossary" className="hover:text-white transition-colors">Glossary</Link>
            <span>/</span>
            <span className="text-white">Profit and Loss Statement</span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lime-500/10 border border-lime-500/20 text-lime-400 text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            Glossary &mdash; Business Finance
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Profit and Loss Statement{' '}
            <span className="bg-gradient-to-r from-lime-500 to-green-500 bg-clip-text text-transparent">
              for Freelancers
            </span>
          </h1>

          {/* Summary */}
          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            A profit and loss statement (P&amp;L) is the simplest, most powerful tool for understanding your freelance business health. This guide covers how to build one, read it, use it for tax and BAS, and turn your invoicing data into automatic P&amp;L reports &mdash; with a complete worked example for an Australian sole trader.
          </p>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>16 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>ATO-Accurate 2025-26</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
              </svg>
              <span>Updated March 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* In a Nutshell */}
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <div className="rounded-2xl bg-gradient-to-br from-lime-500/10 to-green-500/10 border border-lime-500/20 p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-lime-500/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-white">In a Nutshell</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-lime-500/20 flex items-center justify-center text-lime-400 text-xs font-bold">P&amp;L</span>
              <div>
                <p className="text-white font-medium text-sm">Income Statement</p>
                <p className="text-gray-400 text-sm">Revenue minus expenses over a period &mdash; shows if your business made a profit or a loss</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-lime-500/20 flex items-center justify-center text-lime-400 text-xs font-bold">50%+</span>
              <div>
                <p className="text-white font-medium text-sm">Healthy Net Margin</p>
                <p className="text-gray-400 text-sm">Service-based freelancers should aim for 50-70% net margins &mdash; below 40% signals a problem</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-lime-500/20 flex items-center justify-center text-lime-400 text-xs font-bold">QTR</span>
              <div>
                <p className="text-white font-medium text-sm">Prepare Quarterly</p>
                <p className="text-gray-400 text-sm">Align with BAS periods (Jul-Sep, Oct-Dec, Jan-Mar, Apr-Jun) for maximum usefulness</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-lime-500/20 flex items-center justify-center text-lime-400 text-xs font-bold">ITR</span>
              <div>
                <p className="text-white font-medium text-sm">Feeds Your Tax Return</p>
                <p className="text-gray-400 text-sm">P&amp;L net profit goes directly into your Individual Tax Return business schedule</p>
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
                className="flex items-center gap-2 text-gray-400 hover:text-lime-400 transition-colors text-sm py-1"
              >
                <svg className="w-4 h-4 text-lime-500/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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

        {/* Section 1: What Is a Profit and Loss Statement? */}
        <section id="what-is-pnl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-lime-500 to-green-500 flex items-center justify-center text-white text-sm font-bold">1</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">What Is a Profit and Loss Statement?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              A profit and loss statement (P&amp;L) &mdash; also called an <strong className="text-white">income statement</strong> &mdash; is a financial report that summarises your business <strong className="text-white">income, expenses, and resulting profit or loss over a specific period</strong>. It answers the most fundamental question in business: did you make money or lose money during that time?
            </p>
            <p className="text-gray-300 leading-relaxed">
              The formula is deceptively simple: <strong className="text-white">Total Revenue &minus; Total Expenses = Net Profit (or Loss)</strong>. But within that formula lies every decision you make as a freelancer &mdash; what you charge, what you spend, which clients you take on, and which expenses you invest in. A well-prepared P&amp;L transforms scattered invoices and receipts into a clear story about your business performance.
            </p>
            <p className="text-gray-300 leading-relaxed">
              For Australian sole traders and freelancers, the ATO does not legally require you to prepare a formal P&amp;L statement. However, <strong className="text-white">every accountant will tell you to prepare one</strong> &mdash; and here is why: without a P&amp;L, you are flying blind. You might feel busy and be sending invoices regularly, but have no idea whether your business is actually profitable after all expenses. Many freelancers discover at tax time that their net profit is far lower than they expected because they never tracked expenses against income.
            </p>
            <p className="text-gray-300 leading-relaxed">
              A P&amp;L is also fundamentally different from a <strong className="text-white">balance sheet</strong>. The P&amp;L covers a <em>period</em> (a quarter, a year) and shows performance over time. A balance sheet captures a <em>moment</em> (a specific date) and shows your financial position &mdash; what you own, what you owe, and the difference (equity). As a freelancer, your P&amp;L is far more actionable because it tells you whether your business model is working.
            </p>

            <div className="rounded-xl bg-lime-500/5 border border-lime-500/20 p-5 mt-6">
              <p className="text-lime-400 font-medium mb-2">Quick Facts</p>
              <ul className="text-gray-400 text-sm space-y-2">
                <li><strong className="text-gray-200">P&amp;L covers a period</strong> (quarter, year) &mdash; not a single moment in time</li>
                <li><strong className="text-gray-200">It shows revenue earned vs expenses incurred</strong> during that period, regardless of when cash actually moved</li>
                <li><strong className="text-gray-200">Balance sheet = position</strong>, P&amp;L = performance &mdash; freelancers need both, but P&amp;L comes first</li>
                <li><strong className="text-gray-200">Not legally required</strong> for sole traders, but essential for informed decision-making and tax preparation</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 2: P&L Structure: Income, Expenses, and Net Profit */}
        <section id="pnl-structure">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-lime-500 to-green-500 flex items-center justify-center text-white text-sm font-bold">2</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">P&amp;L Structure: Income, Expenses, and Net Profit</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Every P&amp;L follows the same top-to-bottom flow: <strong className="text-white">revenue at the top, expenses in the middle, net profit at the bottom</strong>. Understanding each layer helps you identify exactly where your money goes and where to optimise.
            </p>

            {/* Visual P&L Structure */}
            <div className="rounded-2xl border border-gray-700/50 overflow-hidden mt-6">
              <div className="bg-green-500/10 border-b border-gray-700/50 px-6 py-4">
                <div className="flex items-center justify-between">
                  <span className="text-green-400 font-bold text-sm uppercase tracking-wide">Revenue / Income</span>
                  <span className="text-green-400 font-mono text-sm">$120,000</span>
                </div>
                <p className="text-gray-400 text-xs mt-1">All money earned from services, projects, retainers, and product sales</p>
              </div>
              <div className="bg-yellow-500/5 border-b border-gray-700/50 px-6 py-4">
                <div className="flex items-center justify-between">
                  <span className="text-yellow-400 font-bold text-sm uppercase tracking-wide">&minus; Direct Costs (Cost of Revenue)</span>
                  <span className="text-yellow-400 font-mono text-sm">($18,600)</span>
                </div>
                <p className="text-gray-400 text-xs mt-1">Subcontractors, materials, and software directly tied to client work</p>
              </div>
              <div className="bg-lime-500/10 border-b border-gray-700/50 px-6 py-4">
                <div className="flex items-center justify-between">
                  <span className="text-lime-400 font-bold text-sm uppercase tracking-wide">= Gross Profit</span>
                  <span className="text-lime-400 font-mono text-sm">$101,400</span>
                </div>
                <p className="text-gray-400 text-xs mt-1">Revenue minus direct costs &mdash; your margin before overhead</p>
              </div>
              <div className="bg-orange-500/5 border-b border-gray-700/50 px-6 py-4">
                <div className="flex items-center justify-between">
                  <span className="text-orange-400 font-bold text-sm uppercase tracking-wide">&minus; Operating Expenses</span>
                  <span className="text-orange-400 font-mono text-sm">($17,250)</span>
                </div>
                <p className="text-gray-400 text-xs mt-1">Home office, vehicle, insurance, software, accounting, marketing, etc.</p>
              </div>
              <div className="bg-green-500/15 px-6 py-5">
                <div className="flex items-center justify-between">
                  <span className="text-green-400 font-bold text-base uppercase tracking-wide">= Net Profit</span>
                  <span className="text-green-400 font-mono text-base font-bold">$84,150</span>
                </div>
                <p className="text-gray-400 text-xs mt-1">Your taxable business income &mdash; this goes on your tax return</p>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">Revenue / Income Categories</h3>
            <p className="text-gray-300 leading-relaxed">
              For freelancers, revenue typically falls into these categories:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mt-3">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-lime-400 font-medium mb-3">Service Income</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><strong className="text-gray-200">Hourly/daily fees</strong> &mdash; billed time at your hourly or day rate</li>
                  <li><strong className="text-gray-200">Project fees</strong> &mdash; fixed-price project deliverables</li>
                  <li><strong className="text-gray-200">Retainer income</strong> &mdash; recurring monthly fees from ongoing clients</li>
                  <li><strong className="text-gray-200">Consulting fees</strong> &mdash; advisory, strategy, or coaching sessions</li>
                </ul>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-green-400 font-medium mb-3">Other Income</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><strong className="text-gray-200">Product sales</strong> &mdash; templates, courses, digital downloads</li>
                  <li><strong className="text-gray-200">Affiliate income</strong> &mdash; commissions from referrals or partnerships</li>
                  <li><strong className="text-gray-200">Interest income</strong> &mdash; business savings account interest</li>
                  <li><strong className="text-gray-200">Reimbursements</strong> &mdash; client-reimbursed expenses (pass-through)</li>
                </ul>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">Direct Costs (Cost of Revenue)</h3>
            <p className="text-gray-300 leading-relaxed">
              Direct costs are expenses <strong className="text-white">directly tied to delivering client work</strong>. If you did not have the client, you would not have the expense. This includes subcontractor payments (if you outsource part of a project), materials purchased for a specific job, and software tools used exclusively for client deliverables. Separating direct costs from operating expenses gives you your <strong className="text-white">gross profit</strong> &mdash; a crucial measure of how efficiently you deliver services.
            </p>

            <h3 className="text-lg font-semibold text-white mt-8">Operating Expenses (with AU Numbers)</h3>
            <p className="text-gray-300 leading-relaxed">
              Operating expenses are the <strong className="text-white">costs of running your business regardless of client work</strong>. Here are the common categories with realistic Australian figures:
            </p>

            <div className="rounded-2xl border border-gray-700/50 overflow-hidden mt-4">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-800/80">
                      <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Expense Category</th>
                      <th className="text-left text-sm font-medium text-lime-400 px-6 py-4">ATO Method / Rate</th>
                      <th className="text-left text-sm font-medium text-green-400 px-6 py-4">Typical Annual Cost</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700/50">
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-white text-sm font-medium">Home Office</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">67c/hr (fixed rate) or actual costs</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">$2,500 &ndash; $5,000</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-white text-sm font-medium">Vehicle / Travel</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">85c/km or logbook method</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">$1,000 &ndash; $5,000</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-white text-sm font-medium">Phone &amp; Internet</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Business % of total bill</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">$600 &ndash; $1,500</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-white text-sm font-medium">Insurance (PI)</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Fully deductible</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">$300 &ndash; $700</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-white text-sm font-medium">Insurance (Public Liability)</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Fully deductible</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">$400 &ndash; $1,200</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-white text-sm font-medium">Software &amp; Subscriptions</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Fully deductible</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">$1,200 &ndash; $4,000</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-white text-sm font-medium">Professional Development</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Fully deductible if work-related</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">$500 &ndash; $3,000</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-white text-sm font-medium">Accounting Fees</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Fully deductible</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">$500 &ndash; $2,000</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-white text-sm font-medium">Marketing &amp; Advertising</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Fully deductible</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">$500 &ndash; $5,000</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-white text-sm font-medium">Equipment (under $20K)</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Instant asset write-off</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">$0 &ndash; $20,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="rounded-xl bg-lime-500/5 border border-lime-500/20 p-5 mt-6">
              <p className="text-lime-400 font-medium mb-2">Net Profit = Gross Profit &minus; Operating Expenses</p>
              <p className="text-gray-400 text-sm">
                Your net profit is the final number at the bottom of the P&amp;L. This is your <strong className="text-gray-200">taxable business income</strong> that gets added to your Individual Tax Return. It is also the number you use to calculate your tax obligation, determine your super contributions (if voluntary), and assess whether your rates are sustainable.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Building Your Freelance P&L (Worked Example) */}
        <section id="worked-example">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-lime-500 to-green-500 flex items-center justify-center text-white text-sm font-bold">3</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Building Your Freelance P&amp;L (Worked Example)</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Let us walk through a <strong className="text-white">complete P&amp;L for a freelance web developer</strong> earning $120,000 per year in gross revenue. This example uses realistic Australian figures and shows exactly how to structure each line item.
            </p>

            {/* Worked Example P&L Card */}
            <div className="rounded-2xl border border-lime-500/30 overflow-hidden mt-6">
              <div className="bg-gradient-to-r from-lime-500/10 to-green-500/10 px-6 py-4 border-b border-gray-700/50">
                <h3 className="text-white font-bold text-lg">Annual P&amp;L &mdash; Freelance Web Developer (FY 2025-26)</h3>
                <p className="text-gray-400 text-sm mt-1">Period: 1 July 2025 &ndash; 30 June 2026</p>
              </div>

              {/* Revenue */}
              <div className="px-6 py-4 border-b border-gray-700/50">
                <p className="text-lime-400 font-bold text-xs uppercase tracking-wide mb-3">Revenue</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-gray-400">
                    <span>Retainer clients (3 clients x $5,000/mo x 12 months)</span>
                    <span className="text-gray-200 font-mono">$60,000</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Project work (various clients)</span>
                    <span className="text-gray-200 font-mono">$60,000</span>
                  </div>
                  <div className="flex justify-between text-white font-medium pt-2 border-t border-gray-700/30">
                    <span>Total Revenue</span>
                    <span className="text-lime-400 font-mono font-bold">$120,000</span>
                  </div>
                </div>
              </div>

              {/* Direct Costs */}
              <div className="px-6 py-4 border-b border-gray-700/50">
                <p className="text-yellow-400 font-bold text-xs uppercase tracking-wide mb-3">Direct Costs (Cost of Revenue)</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-gray-400">
                    <span>Subcontractor (design work for projects)</span>
                    <span className="text-gray-200 font-mono">$15,000</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Hosting, domains, client-specific tools</span>
                    <span className="text-gray-200 font-mono">$3,600</span>
                  </div>
                  <div className="flex justify-between text-white font-medium pt-2 border-t border-gray-700/30">
                    <span>Total Direct Costs</span>
                    <span className="text-yellow-400 font-mono font-bold">($18,600)</span>
                  </div>
                </div>
              </div>

              {/* Gross Profit */}
              <div className="px-6 py-3 border-b border-gray-700/50 bg-lime-500/5">
                <div className="flex justify-between text-white font-bold">
                  <span>Gross Profit</span>
                  <span className="text-lime-400 font-mono">$101,400</span>
                </div>
                <p className="text-gray-500 text-xs mt-1">Gross Margin: 84.5%</p>
              </div>

              {/* Operating Expenses */}
              <div className="px-6 py-4 border-b border-gray-700/50">
                <p className="text-orange-400 font-bold text-xs uppercase tracking-wide mb-3">Operating Expenses</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-gray-400">
                    <span>Home office (67c/hr x 1,800 hrs)</span>
                    <span className="text-gray-200 font-mono">$1,206</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Phone &amp; internet (60% business use)</span>
                    <span className="text-gray-200 font-mono">$1,080</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Vehicle (85c/km x 2,000 km)</span>
                    <span className="text-gray-200 font-mono">$1,700</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Professional indemnity insurance</span>
                    <span className="text-gray-200 font-mono">$550</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Public liability insurance</span>
                    <span className="text-gray-200 font-mono">$480</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Software &amp; subscriptions (Adobe, Figma, etc.)</span>
                    <span className="text-gray-200 font-mono">$3,600</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Professional development &amp; courses</span>
                    <span className="text-gray-200 font-mono">$1,500</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Accounting fees</span>
                    <span className="text-gray-200 font-mono">$1,200</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Marketing &amp; website</span>
                    <span className="text-gray-200 font-mono">$2,400</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Equipment depreciation (laptop, monitor)</span>
                    <span className="text-gray-200 font-mono">$1,800</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Stationery &amp; office supplies</span>
                    <span className="text-gray-200 font-mono">$350</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Bank fees &amp; merchant charges</span>
                    <span className="text-gray-200 font-mono">$384</span>
                  </div>
                  <div className="flex justify-between text-white font-medium pt-2 border-t border-gray-700/30">
                    <span>Total Operating Expenses</span>
                    <span className="text-orange-400 font-mono font-bold">($17,250)</span>
                  </div>
                </div>
              </div>

              {/* Net Profit */}
              <div className="px-6 py-5 bg-green-500/10">
                <div className="flex justify-between text-white font-bold text-lg">
                  <span>Net Profit (Taxable Business Income)</span>
                  <span className="text-green-400 font-mono">$84,150</span>
                </div>
                <p className="text-gray-500 text-xs mt-1">Net Margin: 70.1% &mdash; Total expenses: $35,850 (29.9% of revenue)</p>
              </div>
            </div>

            {/* Tax estimate */}
            <div className="rounded-xl bg-gray-800/50 border border-lime-500/30 p-6 mt-6">
              <h4 className="text-lg font-semibold text-white mb-3">Estimated Tax on This P&amp;L (2025-26 Rates)</h4>
              <p className="text-gray-400 text-sm mb-4">
                Assuming this is the sole income source, no private health insurance, and the $18,200 tax-free threshold:
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-gray-400">
                  <span>Taxable income (net profit)</span>
                  <span className="text-gray-200 font-mono">$84,150</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Income tax (2025-26 individual rates)</span>
                  <span className="text-gray-200 font-mono">$17,547</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Medicare levy (2%)</span>
                  <span className="text-gray-200 font-mono">$1,683</span>
                </div>
                <div className="flex justify-between text-white font-medium pt-2 border-t border-gray-700/30">
                  <span>Total estimated tax</span>
                  <span className="text-lime-400 font-mono font-bold">$19,230</span>
                </div>
                <div className="flex justify-between text-white font-medium">
                  <span>After-tax income</span>
                  <span className="text-green-400 font-mono font-bold">$64,920</span>
                </div>
              </div>
              <p className="text-gray-500 text-xs mt-3">
                Effective tax rate: 22.9%. Note: this is a simplified estimate. Consult your accountant for exact figures including offsets, levies, and PAYG instalments.
              </p>
            </div>

            <div className="rounded-xl bg-lime-500/5 border border-lime-500/20 p-5 mt-6">
              <p className="text-lime-400 font-medium mb-2">Why This Example Matters</p>
              <p className="text-gray-400 text-sm">
                On $120,000 gross revenue, this freelancer&apos;s <strong className="text-gray-200">take-home pay is roughly $64,920</strong> after business expenses and tax. That is a 54% take-home rate. Without a P&amp;L, many freelancers assume they will keep 70-80% of gross revenue and are shocked at tax time. Building a P&amp;L quarterly means no surprises &mdash; you can see exactly where every dollar goes and adjust your rates or expenses accordingly.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Reading and Analysing Your P&L */}
        <section id="reading-pnl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-lime-500 to-green-500 flex items-center justify-center text-white text-sm font-bold">4</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Reading and Analysing Your P&amp;L</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              A P&amp;L is only useful if you know how to <strong className="text-white">read the numbers and act on them</strong>. Raw dollar amounts tell part of the story, but the real insights come from ratios, trends, and period-over-period comparisons.
            </p>

            <h3 className="text-lg font-semibold text-white mt-6">Key Ratios Every Freelancer Should Track</h3>
            <div className="space-y-4 mt-3">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-lime-500/10 flex items-center justify-center">
                    <span className="text-lime-400 font-bold text-sm">%</span>
                  </div>
                  <h4 className="text-lg font-semibold text-white">Gross Margin %</h4>
                </div>
                <div className="rounded-lg bg-gray-900/60 p-3 text-sm font-mono text-lime-300 mb-3">
                  Gross Margin = (Gross Profit / Revenue) x 100
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Measures how efficiently you deliver services before overhead. In our example: ($101,400 / $120,000) x 100 = <strong className="text-gray-200">84.5%</strong>. For freelancers with no subcontractors, this is often 90-100%. If your gross margin is below 70%, you are spending too much on direct costs relative to what you charge &mdash; consider raising rates or reducing subcontractor reliance.
                </p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-lime-500/10 flex items-center justify-center">
                    <span className="text-lime-400 font-bold text-sm">%</span>
                  </div>
                  <h4 className="text-lg font-semibold text-white">Net Margin %</h4>
                </div>
                <div className="rounded-lg bg-gray-900/60 p-3 text-sm font-mono text-lime-300 mb-3">
                  Net Margin = (Net Profit / Revenue) x 100
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  The bottom line &mdash; what percentage of every dollar you earn do you actually keep (before tax)? In our example: ($84,150 / $120,000) x 100 = <strong className="text-gray-200">70.1%</strong>. For service-based freelancers, <strong className="text-gray-200">50-70% is healthy</strong>. Below 40% is a warning sign that your expenses are too high relative to income. Above 75% is excellent and means your business runs lean.
                </p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-lime-500/10 flex items-center justify-center">
                    <span className="text-lime-400 font-bold text-sm">%</span>
                  </div>
                  <h4 className="text-lg font-semibold text-white">Expense Ratio</h4>
                </div>
                <div className="rounded-lg bg-gray-900/60 p-3 text-sm font-mono text-lime-300 mb-3">
                  Expense Ratio = (Total Expenses / Revenue) x 100
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  The inverse of net margin &mdash; how much of every dollar goes to expenses? In our example: ($35,850 / $120,000) x 100 = <strong className="text-gray-200">29.9%</strong>. Track this quarterly. If your expense ratio is growing while revenue stays flat, your business is becoming less efficient. Aim to keep total expenses under 40% of revenue for a sustainable freelance business.
                </p>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">Red Flags to Watch For</h3>
            <div className="grid sm:grid-cols-2 gap-4 mt-3">
              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-5">
                <h4 className="text-red-400 font-medium mb-3">Warning Signs</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><strong className="text-gray-200">Declining revenue trend</strong> &mdash; Q2 lower than Q1, two quarters in a row</li>
                  <li><strong className="text-gray-200">Expenses growing faster than income</strong> &mdash; your margin is shrinking</li>
                  <li><strong className="text-gray-200">Negative net profit</strong> &mdash; you are losing money and need immediate action</li>
                  <li><strong className="text-gray-200">One client &gt; 50% of revenue</strong> &mdash; dangerous concentration risk</li>
                  <li><strong className="text-gray-200">Net margin below 40%</strong> &mdash; unsustainable for a service business</li>
                </ul>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-green-500/20 p-5">
                <h4 className="text-green-400 font-medium mb-3">Healthy Signs</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><strong className="text-gray-200">Revenue growing quarter over quarter</strong> &mdash; even 5-10% is progress</li>
                  <li><strong className="text-gray-200">Stable or improving margins</strong> &mdash; expenses controlled as you grow</li>
                  <li><strong className="text-gray-200">Diversified income sources</strong> &mdash; no single client dominates</li>
                  <li><strong className="text-gray-200">Net margin 50-70%</strong> &mdash; strong for a freelance service business</li>
                  <li><strong className="text-gray-200">Retainer income &gt; 40% of total</strong> &mdash; predictable recurring revenue</li>
                </ul>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">Comparing P&amp;L Periods</h3>
            <p className="text-gray-300 leading-relaxed">
              The real power of a P&amp;L emerges when you <strong className="text-white">compare periods side by side</strong>: Q1 vs Q2, or this year vs last year. Create a simple two-column P&amp;L showing both periods and calculate the dollar change and percentage change for each line item. This reveals trends you would never spot from a single statement. For example, you might discover that your software costs have increased 40% year-over-year without a corresponding revenue increase &mdash; a clear signal to audit your subscriptions.
            </p>

            <h3 className="text-lg font-semibold text-white mt-6">Using Your P&amp;L to Make Decisions</h3>
            <div className="space-y-3 mt-3">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-lime-500/20 flex items-center justify-center text-lime-400 text-xs font-bold">1</span>
                <div>
                  <p className="text-white font-medium text-sm">Raise Your Rates</p>
                  <p className="text-gray-400 text-sm">If your net margin is below 50%, your rates are too low relative to your costs. Use the P&amp;L to calculate exactly how much you need to increase to hit a target margin.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-lime-500/20 flex items-center justify-center text-lime-400 text-xs font-bold">2</span>
                <div>
                  <p className="text-white font-medium text-sm">Cut Unnecessary Expenses</p>
                  <p className="text-gray-400 text-sm">Review each expense line. Are you paying for software you no longer use? Is that coworking membership worth it if you only go twice a month? The P&amp;L makes these decisions objective.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-lime-500/20 flex items-center justify-center text-lime-400 text-xs font-bold">3</span>
                <div>
                  <p className="text-white font-medium text-sm">Fire Unprofitable Clients</p>
                  <p className="text-gray-400 text-sm">If a client requires heavy subcontracting, frequent revisions, or pays late, their effective margin might be far below your average. Build per-client mini P&amp;Ls to identify which clients are worth keeping.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-lime-500/20 flex items-center justify-center text-lime-400 text-xs font-bold">4</span>
                <div>
                  <p className="text-white font-medium text-sm">Invest Strategically</p>
                  <p className="text-gray-400 text-sm">When your P&amp;L shows healthy margins, you can confidently invest in growth &mdash; better tools, marketing, professional development &mdash; knowing exactly how much room you have before profitability is affected.</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-lime-500/5 border border-lime-500/20 p-5 mt-6">
              <p className="text-lime-400 font-medium mb-2">Pro Tip: Per-Client Profitability</p>
              <p className="text-gray-400 text-sm">
                Build a <strong className="text-gray-200">mini P&amp;L for each client</strong> by allocating direct costs and a fair share of overhead. You may discover that your highest-revenue client is actually your least profitable once you factor in scope creep, revisions, and subcontractor costs. The numbers do not lie &mdash; and they often surprise.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: P&L for Tax and BAS Reporting */}
        <section id="tax-and-bas">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-lime-500 to-green-500 flex items-center justify-center text-white text-sm font-bold">5</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">P&amp;L for Tax and BAS Reporting</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Your P&amp;L is not just a management tool &mdash; it <strong className="text-white">directly feeds into your tax obligations</strong>. Understanding the connection between your P&amp;L and the ATO&apos;s requirements saves time at tax time and reduces the risk of errors.
            </p>

            <h3 className="text-lg font-semibold text-white mt-6">How P&amp;L Maps to Your Tax Return</h3>
            <p className="text-gray-300 leading-relaxed">
              As a sole trader, your business income is reported on your <strong className="text-white">Individual Tax Return (ITR)</strong> under the <strong className="text-white">Business and Professional Items schedule</strong>. The mapping is straightforward:
            </p>

            <div className="rounded-2xl border border-gray-700/50 overflow-hidden mt-4">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-800/80">
                      <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">P&amp;L Line Item</th>
                      <th className="text-left text-sm font-medium text-lime-400 px-6 py-4">Tax Return Field</th>
                      <th className="text-left text-sm font-medium text-green-400 px-6 py-4">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700/50">
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-white text-sm font-medium">Total Revenue</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Gross business income</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Include all income sources, GST-exclusive if registered</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-white text-sm font-medium">Total Expenses</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Business deductions</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Itemised by category (motor vehicle, home office, etc.)</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-white text-sm font-medium">Net Profit</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Net business income</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Added to your total taxable income, taxed at individual rates</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">GST Reconciliation with Your P&amp;L</h3>
            <p className="text-gray-300 leading-relaxed">
              If you are GST-registered (mandatory once turnover exceeds $75,000), your P&amp;L should be prepared on a <strong className="text-white">GST-exclusive basis</strong> &mdash; all income and expense figures exclude GST. The GST component is reported separately on your BAS. Here is how they align:
            </p>

            <div className="space-y-3 mt-3">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-lime-500/20 flex items-center justify-center text-lime-400 text-xs font-bold">G1</span>
                <div>
                  <p className="text-white font-medium text-sm">Total Sales (BAS G1)</p>
                  <p className="text-gray-400 text-sm">Should match your P&amp;L total revenue (GST-inclusive) &mdash; this is the total you invoiced including GST.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-lime-500/20 flex items-center justify-center text-lime-400 text-xs font-bold">1A</span>
                <div>
                  <p className="text-white font-medium text-sm">GST Collected (BAS 1A)</p>
                  <p className="text-gray-400 text-sm">The GST portion of your P&amp;L revenue. On $120,000 GST-exclusive revenue, this would be $12,000 in GST collected.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-lime-500/20 flex items-center justify-center text-lime-400 text-xs font-bold">1B</span>
                <div>
                  <p className="text-white font-medium text-sm">GST Paid on Expenses (BAS 1B)</p>
                  <p className="text-gray-400 text-sm">The GST you paid on business purchases. Should align with your P&amp;L expense categories that include GST (not all do &mdash; insurance and some fees are GST-free).</p>
                </div>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">Quarterly P&amp;L to Quarterly BAS Alignment</h3>
            <p className="text-gray-300 leading-relaxed">
              This is why accountants recommend <strong className="text-white">quarterly P&amp;L statements aligned with BAS periods</strong>. When you prepare your Q1 P&amp;L (July-September), the income and expense totals should reconcile directly with your Q1 BAS. If they do not match, something is missing &mdash; either unreported income, unclaimed expenses, or data entry errors. The P&amp;L serves as a cross-check on your BAS and vice versa.
            </p>

            <h3 className="text-lg font-semibold text-white mt-8">Record Keeping Requirements</h3>
            <div className="grid sm:grid-cols-2 gap-4 mt-3">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-lime-400 font-medium mb-3">What to Keep</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><strong className="text-gray-200">All invoices issued</strong> &mdash; every invoice is a revenue record</li>
                  <li><strong className="text-gray-200">Receipts for all expenses</strong> &mdash; digital or physical, for every business purchase</li>
                  <li><strong className="text-gray-200">Bank statements</strong> &mdash; showing all business transactions</li>
                  <li><strong className="text-gray-200">Vehicle logbook</strong> &mdash; if using the logbook method for motor vehicle claims</li>
                  <li><strong className="text-gray-200">Home office records</strong> &mdash; hours worked (for 67c/hr method) or actual cost records</li>
                </ul>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-green-400 font-medium mb-3">How Long</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><strong className="text-gray-200">5 years</strong> from the date you lodge the tax return for that year</li>
                  <li><strong className="text-gray-200">Digital records</strong> are acceptable &mdash; photos of receipts, electronic invoices, cloud storage</li>
                  <li><strong className="text-gray-200">ATO can audit</strong> up to 4 years back (or longer if they suspect fraud)</li>
                  <li><strong className="text-gray-200">Penalties for poor records</strong> &mdash; the ATO can disallow deductions if you cannot substantiate them</li>
                </ul>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">Common Mistakes</h3>
            <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-6 mt-3">
              <ul className="space-y-3 text-sm text-gray-400">
                <li>
                  <strong className="text-red-400">Mixing personal and business expenses.</strong>{' '}
                  <span>If you use your personal credit card for a business purchase, you must still record the business expense separately. Better yet, use a dedicated business account and card to keep things clean.</span>
                </li>
                <li>
                  <strong className="text-red-400">Forgetting to include all income sources.</strong>{' '}
                  <span>The ATO receives data from banks, payment platforms (PayPal, Stripe), and third parties. If you earn $50 in interest or $200 from a one-off gig, it must be on your P&amp;L and tax return. Omitting income is the fastest way to trigger an audit.</span>
                </li>
                <li>
                  <strong className="text-red-400">Claiming 100% of mixed-use expenses.</strong>{' '}
                  <span>Your phone, internet, and vehicle are likely used for both personal and business purposes. Only the business portion is deductible. Common splits: phone 60-80%, internet 50-70%, vehicle per logbook records.</span>
                </li>
                <li>
                  <strong className="text-red-400">Not reconciling P&amp;L with BAS.</strong>{' '}
                  <span>If your annual P&amp;L revenue does not match the sum of your four quarterly BAS G1 totals, there is a discrepancy the ATO may investigate. Always reconcile before lodging your tax return.</span>
                </li>
                <li>
                  <strong className="text-red-400">Reporting GST-inclusive figures on the P&amp;L.</strong>{' '}
                  <span>If you are GST-registered, your P&amp;L should show GST-exclusive amounts. The GST is not your income or expense &mdash; it is collected and remitted to the ATO.</span>
                </li>
              </ul>
            </div>

            <div className="rounded-xl bg-lime-500/5 border border-lime-500/20 p-5 mt-6">
              <p className="text-lime-400 font-medium mb-2">Prepare Quarterly, Lodge Confidently</p>
              <p className="text-gray-400 text-sm">
                If you prepare a P&amp;L every quarter and reconcile it with your BAS, <strong className="text-gray-200">tax time becomes a 30-minute task instead of a 3-day panic</strong>. Your accountant will thank you, your fees will be lower (accountants charge by the hour), and your risk of ATO penalties drops to near zero. The quarterly habit is the single highest-ROI financial practice for freelancers.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: P&L Tracking with InvoiceFlow */}
        <section id="pnl-invoiceflow">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-lime-500 to-green-500 flex items-center justify-center text-white text-sm font-bold">6</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">P&amp;L Tracking with InvoiceFlow</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Building a P&amp;L manually from spreadsheets and bank statements is tedious. InvoiceFlow <strong className="text-white">generates your P&amp;L automatically from your invoicing and expense data</strong>, giving you real-time visibility into your business profitability without the manual work.
            </p>

            <div className="space-y-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-lime-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Automatic Income Tracking</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Every invoice you create in InvoiceFlow is automatically recorded as a revenue entry in your P&amp;L. When the invoice is marked as paid, the income is confirmed. You never need to manually enter revenue &mdash; your invoicing activity <em>is</em> your income record. The system tracks totals by client, by project type, and by period, giving you instant visibility into where your money comes from.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-lime-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Expense Categorisation</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Log business expenses directly in InvoiceFlow and categorise them using ATO-aligned categories: home office, vehicle, phone and internet, insurance, software, professional development, accounting, marketing, and more. Snap photos of receipts for digital record keeping. The system auto-calculates totals by category, making BAS preparation and tax time straightforward. Categories match the Business and Professional Items schedule on your tax return.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-lime-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Quarterly and Annual P&amp;L Reports</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Generate P&amp;L reports for any period with a single click &mdash; monthly, quarterly (aligned with BAS periods), or annual. Each report shows the full P&amp;L structure: revenue breakdown, direct costs, gross profit, operating expenses by category, and net profit. Compare periods side-by-side to spot trends. Export as PDF for your accountant or download the data as CSV for your own analysis.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-lime-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">BAS-Ready Data Export</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  When BAS time arrives, InvoiceFlow exports your quarterly data in a format that maps directly to your BAS fields: total sales (G1), GST on sales (1A), total purchases (G11), and GST on purchases (1B). No manual calculations, no cross-referencing spreadsheets. The data is pre-reconciled with your P&amp;L so you can lodge with confidence that the numbers are consistent.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-lime-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Tax-Time Preparation</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  At EOFY, InvoiceFlow generates a complete annual P&amp;L summary that your accountant can use directly. It includes total income by category, total expenses by ATO-aligned category, net profit, and supporting detail for each line item. Share the report with your accountant via a secure link or PDF export. The result: lower accounting fees (less time spent organising your records), faster tax return preparation, and maximum legitimate deductions captured.
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-lime-500/5 border border-lime-500/20 p-5 mt-6">
              <p className="text-lime-400 font-medium mb-2">From Invoices to Insights</p>
              <p className="text-gray-400 text-sm">
                Most freelancers think of invoicing as a billing task. With InvoiceFlow, <strong className="text-gray-200">every invoice becomes a data point in your P&amp;L</strong>. You go from &quot;I sent 12 invoices this month&quot; to &quot;my net margin this quarter is 68%, up from 62% last quarter, and my retainer income now represents 55% of total revenue.&quot; That shift from billing to business intelligence is what separates freelancers who grow from those who stay stuck.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Related Tools */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-white mb-2 text-center">Related Tools</h2>
        <p className="text-gray-400 text-center mb-8">Free tools to help you track profitability and prepare for tax.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {relatedTools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:border-lime-500/50 hover:bg-gray-800/80 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-lime-500/10 border border-lime-500/20 flex items-center justify-center mb-4">
                {tool.icon}
              </div>
              <h3 className="text-white font-medium mb-2 group-hover:text-lime-400 transition-colors">{tool.name}</h3>
              <p className="text-sm text-gray-400">{tool.description}</p>
              <div className="mt-4 text-lime-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
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
        <p className="text-gray-400 text-center mb-8">In-depth guides on tax, profitability, and freelancing in Australia.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {relatedGuides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group p-6 rounded-2xl bg-gray-800/40 border border-gray-700/40 hover:border-lime-500/40 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-lime-500/10 border border-lime-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h3 className="text-white font-medium mb-2 group-hover:text-lime-400 transition-colors">{guide.name}</h3>
              <p className="text-sm text-gray-400">{guide.description}</p>
              <div className="mt-4 text-lime-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
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
              <summary className="flex items-center justify-between cursor-pointer px-6 py-4 text-white font-medium hover:text-lime-400 transition-colors">
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
        <div className="rounded-2xl bg-gradient-to-br from-lime-500/10 to-green-500/10 border border-lime-500/20 p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Track Your Profit &mdash; Not Just Your Invoices
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            InvoiceFlow auto-generates P&amp;L reports from your invoicing data. See your real profit margins, track expenses by ATO category, and export BAS-ready data &mdash; all from the same tool you use to send invoices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button>Start Free &mdash; No Card Required</Button>
            </Link>
            <Link href="/tools/profit-margin-calculator">
              <Button variant="secondary">Calculate Your Profit Margin</Button>
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
