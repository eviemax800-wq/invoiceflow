import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Balance Sheet: What It Is, How to Read It & Why Freelancers Need One (Australia) — InvoiceFlow',
  description:
    'What is a balance sheet? Learn how to read assets, liabilities, and equity. Simple balance sheet guide for Australian freelancers and sole traders with examples and templates. Updated 2025-26.',
  keywords: [
    'balance sheet explained simply',
    'balance sheet template small business',
    'freelancer balance sheet',
    'what is a balance sheet australia',
    'balance sheet vs profit and loss',
    'assets liabilities equity',
    'balance sheet sole trader',
    'how to read a balance sheet',
    'balance sheet for freelancers',
    'statement of financial position',
  ],
  alternates: { canonical: '/glossary/balance-sheet' },
  openGraph: {
    title: 'Balance Sheet: What It Is, How to Read It & Why Freelancers Need One (Australia) — InvoiceFlow',
    description:
      'What is a balance sheet? Learn how to read assets, liabilities, and equity. Simple balance sheet guide for Australian freelancers and sole traders with examples and templates.',
    url: 'https://invoiceflow-teal.vercel.app/glossary/balance-sheet',
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
    { '@type': 'ListItem', position: 3, name: 'Balance Sheet', item: `${BASE_URL}/glossary/balance-sheet` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do sole traders need a balance sheet?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Sole traders aren't legally required to prepare a balance sheet for tax purposes (unlike Pty Ltd companies). However, having one is valuable for: tracking business growth, applying for loans, understanding net worth, and making informed financial decisions. If you're GST-registered and earning over $75K, a balance sheet helps demonstrate financial health to lenders and potential clients.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is the balance sheet equation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Assets = Liabilities + Equity. This must always balance. Assets are what you own (cash, equipment, receivables). Liabilities are what you owe (loans, tax payable, supplier bills). Equity is what's left — your net worth in the business. For sole traders, equity is called \"owner's equity\" and includes capital introduced plus retained earnings minus drawings.",
      },
    },
    {
      '@type': 'Question',
      name: 'How is a balance sheet different from a profit and loss statement?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "A P&L shows income and expenses over a period (like a video of the year). A balance sheet shows your financial position at a single point in time (like a snapshot photo). The P&L tells you if you're profitable; the balance sheet tells you if you're financially healthy. Together they give the complete picture.",
      },
    },
    {
      '@type': 'Question',
      name: 'How often should I prepare a balance sheet?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "At minimum, prepare a balance sheet at the end of each financial year (30 June). For better financial management, prepare quarterly balance sheets aligned with your BAS lodgement dates. Monthly balance sheets are ideal if you're actively growing or managing debt. InvoiceFlow can generate balance sheet data automatically from your invoicing records.",
      },
    },
    {
      '@type': 'Question',
      name: 'What are current vs non-current assets on a balance sheet?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Current assets are items you expect to convert to cash within 12 months: bank accounts, accounts receivable (unpaid invoices), and inventory. Non-current assets are long-term items like equipment, vehicles, property, and intellectual property with a useful life beyond 12 months. The distinction matters for assessing liquidity — your ability to pay short-term debts.',
      },
    },
  ],
};

const tocItems = [
  { id: 'what-is-balance-sheet', label: '1. What Is a Balance Sheet?' },
  { id: 'the-three-components', label: '2. The Three Components' },
  { id: 'reading-a-balance-sheet', label: '3. Reading a Balance Sheet' },
  { id: 'balance-sheet-vs-pl', label: '4. Balance Sheet vs Profit & Loss' },
  { id: 'common-mistakes', label: '5. Common Mistakes' },
  { id: 'how-invoiceflow-helps', label: '6. How InvoiceFlow Helps' },
];

const relatedTools = [
  {
    href: '/tools/profit-loss-statement-generator',
    name: 'P&L Generator',
    description: 'Generate profit and loss statements to complement your balance sheet and get the full financial picture.',
    icon: (
      <svg className="w-6 h-6 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    href: '/tools/freelance-tax-estimator',
    name: 'Freelance Tax Estimator',
    description: 'Estimate your income tax, Medicare levy, and super obligations to keep your balance sheet liabilities accurate.',
    icon: (
      <svg className="w-6 h-6 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    href: '/tools/business-valuation-calculator',
    name: 'Business Valuation Calculator',
    description: 'Use your balance sheet data to estimate what your freelance business is worth based on assets and equity.',
    icon: (
      <svg className="w-6 h-6 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
      </svg>
    ),
  },
  {
    href: '/tools/emergency-fund-calculator',
    name: 'Emergency Fund Calculator',
    description: 'Calculate how much cash reserve you need based on your balance sheet liabilities and monthly expenses.',
    icon: (
      <svg className="w-6 h-6 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
];

const relatedGuides = [
  {
    href: '/guides/bookkeeping-basics',
    name: 'Bookkeeping Basics',
    description: 'Foundational bookkeeping concepts including double-entry accounting, journals, ledgers, and balance sheet preparation.',
  },
  {
    href: '/guides/tax-guide-freelancers',
    name: 'Tax Guide for Freelancers',
    description: 'Complete guide to income tax, deductions, BAS, and financial reporting requirements for Australian sole traders.',
  },
  {
    href: '/guides/financial-reporting',
    name: 'Financial Reporting Guide',
    description: 'How to prepare and interpret financial statements including balance sheets, P&L reports, and cash flow statements.',
  },
];

export default function BalanceSheetGlossaryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative px-4 pt-20 pb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-500/10 via-blue-500/10 to-sky-500/10 blur-3xl" />
        <div className="relative max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/glossary" className="hover:text-white transition-colors">Glossary</Link>
            <span>/</span>
            <span className="text-white">Balance Sheet</span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            Glossary &mdash; Financial Statements
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Balance Sheet{' '}
            <span className="bg-gradient-to-r from-sky-500 to-blue-500 bg-clip-text text-transparent">
              for Freelancers
            </span>
          </h1>

          {/* Summary */}
          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            A financial statement showing what your business owns (assets), owes (liabilities), and is worth (equity) at a specific point in time. Also known as the Statement of Financial Position under AASB 101. Here&apos;s how to read one, why it matters, and how freelancers can use it to make smarter financial decisions.
          </p>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>14 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>ATO-Accurate 2025-26</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
              </svg>
              <span>Updated March 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* In a Nutshell */}
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <div className="rounded-2xl bg-gradient-to-br from-sky-500/10 to-blue-500/10 border border-sky-500/20 p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-sky-500/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-white">In a Nutshell</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-sky-500/20 flex items-center justify-center text-sky-400 text-xs font-bold">A=L+E</span>
              <div>
                <p className="text-white font-medium text-sm">The Balance Sheet Equation</p>
                <p className="text-gray-400 text-sm">Assets = Liabilities + Equity &mdash; must always balance</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-sky-500/20 flex items-center justify-center text-sky-400 text-xs font-bold">AASB</span>
              <div>
                <p className="text-white font-medium text-sm">AASB 101</p>
                <p className="text-gray-400 text-sm">Australian Accounting Standard governing financial statements</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-sky-500/20 flex items-center justify-center text-sky-400 text-xs font-bold">$0</span>
              <div>
                <p className="text-white font-medium text-sm">Net Difference</p>
                <p className="text-gray-400 text-sm">Assets minus liabilities minus equity always equals zero</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-sky-500/20 flex items-center justify-center text-sky-400 text-xs font-bold">30 Jun</span>
              <div>
                <p className="text-white font-medium text-sm">Standard Balance Sheet Date</p>
                <p className="text-gray-400 text-sm">End of the Australian financial year &mdash; standard reporting date</p>
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
                className="flex items-center gap-2 text-gray-400 hover:text-sky-400 transition-colors text-sm py-1"
              >
                <svg className="w-4 h-4 text-sky-500/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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

        {/* Section 1: What Is a Balance Sheet? */}
        <section id="what-is-balance-sheet">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold">1</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">What Is a Balance Sheet?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              A balance sheet is a financial statement that shows <strong className="text-white">what a business owns (assets), owes (liabilities), and is worth (equity) at a specific point in time</strong>. Unlike a profit and loss statement which covers a period, a balance sheet is a snapshot &mdash; it tells you exactly where you stand financially on a single date.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Formally known as the <strong className="text-white">Statement of Financial Position</strong> under AASB 101 (the Australian Accounting Standard for Presentation of Financial Statements), the balance sheet is one of the three core financial statements every business should understand. The other two are the profit and loss statement (income statement) and the cash flow statement.
            </p>
            <p className="text-gray-300 leading-relaxed">
              The fundamental equation that underpins every balance sheet is: <strong className="text-white">Assets = Liabilities + Equity</strong>. This equation must always balance &mdash; hence the name. If you own $50,000 in assets and owe $20,000 in liabilities, your equity (net worth in the business) is $30,000. Every transaction you record must maintain this balance.
            </p>
            <p className="text-gray-300 leading-relaxed">
              For sole traders and freelancers, a balance sheet provides a clear picture of <strong className="text-white">business wealth at any given moment</strong>. It answers questions like: How much do clients owe me? What equipment do I own? How much debt am I carrying? And ultimately &mdash; is my business growing or shrinking? Even if you&apos;re not legally required to prepare one, a balance sheet is one of the most powerful tools for understanding your financial health.
            </p>
            <div className="rounded-xl bg-sky-500/5 border border-sky-500/20 p-5 mt-6">
              <p className="text-sky-400 font-medium mb-2">Key Distinction</p>
              <p className="text-gray-400 text-sm">
                A balance sheet answers the question <strong className="text-gray-200">&quot;What is my business worth right now?&quot;</strong> rather than &quot;How much did I earn this year?&quot; It&apos;s the difference between checking your bank balance (a snapshot) and reviewing your transaction history (a period). Both are essential, but the balance sheet gives you the foundation for every major financial decision.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: The Three Components */}
        <section id="the-three-components">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold">2</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">The Three Components</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Every balance sheet is built on three components: assets, liabilities, and equity. Understanding what falls into each category &mdash; and how they relate to each other &mdash; is the key to reading any balance sheet with confidence.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              {/* Assets Card */}
              <div className="rounded-xl bg-gray-800/50 border border-sky-500/20 p-5">
                <h4 className="text-sky-400 font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18v-.008zm-12 0h.008v.008H6v-.008z" />
                  </svg>
                  Assets &mdash; What You Own
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed mb-3">
                  Assets are resources your business controls that have economic value. They&apos;re split into two categories:
                </p>
                <p className="text-sm text-gray-400 leading-relaxed">
                  <strong className="text-gray-200">Current assets</strong> (convertible to cash within 12 months): cash and bank accounts, accounts receivable (unpaid invoices), prepaid expenses, and inventory. <strong className="text-gray-200">Non-current assets</strong> (long-term): equipment, vehicles, property, and intangible assets like intellectual property or website domains.
                </p>
              </div>

              {/* Liabilities Card */}
              <div className="rounded-xl bg-gray-800/50 border border-sky-500/20 p-5">
                <h4 className="text-sky-400 font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Liabilities &mdash; What You Owe
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed mb-3">
                  Liabilities are your business obligations &mdash; amounts you owe to others. Also split into two categories:
                </p>
                <p className="text-sm text-gray-400 leading-relaxed">
                  <strong className="text-gray-200">Current liabilities</strong> (due within 12 months): accounts payable (supplier bills), tax payable (GST, income tax), short-term loans, and credit card balances. <strong className="text-gray-200">Non-current liabilities</strong> (long-term): equipment finance agreements, long-term business loans, and vehicle leases.
                </p>
              </div>

              {/* Equity Card */}
              <div className="rounded-xl bg-gray-800/50 border border-sky-500/20 p-5 sm:col-span-2">
                <h4 className="text-sky-400 font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                  </svg>
                  Equity &mdash; What You&apos;re Worth
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Equity is the residual interest in your business after subtracting liabilities from assets. For sole traders, this is called <strong className="text-gray-200">owner&apos;s equity</strong> and is calculated as: capital contributed (money you put into the business) + retained earnings (accumulated profits) - drawings (money you take out for personal use). Equity represents your true net worth in the business &mdash; what you&apos;d walk away with if you sold everything and paid off all debts.
                </p>
              </div>
            </div>

            {/* Example Balance Sheet Table */}
            <div className="rounded-2xl border border-gray-700/50 overflow-hidden mt-6">
              <div className="bg-gray-800/80 px-6 py-4">
                <h4 className="text-white font-semibold">Example: Freelance Web Developer &mdash; Balance Sheet as at 30 June 2026</h4>
              </div>
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-800/60">
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-3">Item</th>
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-3">Category</th>
                    <th className="text-right text-sm font-medium text-gray-300 px-6 py-3">Amount (AUD)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700/50">
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-white font-medium text-sm">Business Bank Account</td>
                    <td className="px-6 py-3 text-gray-300 text-sm">Current Asset</td>
                    <td className="px-6 py-3 text-sky-400 font-medium text-sm text-right">$18,500</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-white font-medium text-sm">Accounts Receivable (Unpaid Invoices)</td>
                    <td className="px-6 py-3 text-gray-300 text-sm">Current Asset</td>
                    <td className="px-6 py-3 text-sky-400 font-medium text-sm text-right">$12,200</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-white font-medium text-sm">MacBook Pro &amp; Monitors</td>
                    <td className="px-6 py-3 text-gray-300 text-sm">Non-Current Asset</td>
                    <td className="px-6 py-3 text-sky-400 font-medium text-sm text-right">$5,800</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-white font-medium text-sm">Office Furniture</td>
                    <td className="px-6 py-3 text-gray-300 text-sm">Non-Current Asset</td>
                    <td className="px-6 py-3 text-sky-400 font-medium text-sm text-right">$2,400</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-white font-medium text-sm">Credit Card Balance</td>
                    <td className="px-6 py-3 text-gray-300 text-sm">Current Liability</td>
                    <td className="px-6 py-3 text-red-400 font-medium text-sm text-right">($1,800)</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-white font-medium text-sm">GST Payable</td>
                    <td className="px-6 py-3 text-gray-300 text-sm">Current Liability</td>
                    <td className="px-6 py-3 text-red-400 font-medium text-sm text-right">($3,200)</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-white font-medium text-sm">Income Tax Payable</td>
                    <td className="px-6 py-3 text-gray-300 text-sm">Current Liability</td>
                    <td className="px-6 py-3 text-red-400 font-medium text-sm text-right">($8,400)</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-white font-medium text-sm">Equipment Finance (Remaining)</td>
                    <td className="px-6 py-3 text-gray-300 text-sm">Non-Current Liability</td>
                    <td className="px-6 py-3 text-red-400 font-medium text-sm text-right">($2,500)</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-white font-medium text-sm">Owner&apos;s Equity</td>
                    <td className="px-6 py-3 text-gray-300 text-sm">Equity</td>
                    <td className="px-6 py-3 text-sky-400 font-medium text-sm text-right">$23,000</td>
                  </tr>
                  <tr className="bg-gray-800/60">
                    <td className="px-6 py-3 text-white font-bold text-sm" colSpan={2}>Total Assets: $38,900 &nbsp;|&nbsp; Total Liabilities: $15,900 &nbsp;|&nbsp; Equity: $23,000</td>
                    <td className="px-6 py-3 text-sky-400 font-bold text-sm text-right">Balanced</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="rounded-xl bg-sky-500/5 border border-sky-500/20 p-5 mt-6">
              <p className="text-sky-400 font-medium mb-2">Freelancer Tip</p>
              <p className="text-gray-400 text-sm">
                Notice how accounts receivable ($12,200) is a significant asset. For freelancers, <strong className="text-gray-200">unpaid invoices are real assets</strong> on your balance sheet. This is why tracking receivables is so important &mdash; they directly affect your financial position and your ability to secure finance.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Reading a Balance Sheet */}
        <section id="reading-a-balance-sheet">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold">3</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Reading a Balance Sheet</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Reading a balance sheet isn&apos;t just about checking the totals. The real insights come from <strong className="text-white">ratios and relationships between the numbers</strong>. Here are the key metrics every freelancer should understand.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              {/* Current Ratio */}
              <div className="rounded-xl bg-gray-800/50 border border-sky-500/20 p-5">
                <h4 className="text-sky-400 font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                  </svg>
                  Current Ratio
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  <strong className="text-gray-200">Current Assets / Current Liabilities</strong>. This measures your ability to pay short-term debts. A healthy current ratio for freelancers is <strong className="text-gray-200">1.5 to 2.0</strong>. Using the example above: $30,700 / $13,400 = 2.29 &mdash; very healthy. A ratio below 1.0 means you can&apos;t cover your short-term obligations, which is a serious warning sign.
                </p>
              </div>

              {/* Debt-to-Equity */}
              <div className="rounded-xl bg-gray-800/50 border border-sky-500/20 p-5">
                <h4 className="text-sky-400 font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
                  </svg>
                  Debt-to-Equity Ratio
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  <strong className="text-gray-200">Total Liabilities / Total Equity</strong>. This shows how much of your business is funded by debt versus your own money. For sole traders, <strong className="text-gray-200">lower is better</strong> &mdash; a ratio under 1.0 means you own more than you owe. In the example: $15,900 / $23,000 = 0.69 &mdash; a solid position with more equity than debt.
                </p>
              </div>

              {/* Working Capital */}
              <div className="rounded-xl bg-gray-800/50 border border-sky-500/20 p-5">
                <h4 className="text-sky-400 font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18v-.008zm-12 0h.008v.008H6v-.008z" />
                  </svg>
                  Working Capital
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  <strong className="text-gray-200">Current Assets - Current Liabilities</strong>. This is the cash available to run your business day-to-day. Positive working capital means you can cover expenses without dipping into savings or borrowing. In the example: $30,700 - $13,400 = <strong className="text-gray-200">$17,300</strong> in working capital &mdash; a comfortable buffer for a freelancer.
                </p>
              </div>

              {/* Warning Signs */}
              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-5">
                <h4 className="text-red-400 font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                  Warning Signs to Watch
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Red flags on a balance sheet include: <strong className="text-gray-200">current ratio below 1.0</strong> (can&apos;t pay short-term debts), <strong className="text-gray-200">negative equity</strong> (you owe more than you own), <strong className="text-gray-200">growing receivables</strong> with flat revenue (clients paying slower), and <strong className="text-gray-200">declining working capital</strong> over consecutive periods. If you spot these trends, take action immediately.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Balance Sheet vs Profit & Loss */}
        <section id="balance-sheet-vs-pl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold">4</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Balance Sheet vs Profit &amp; Loss</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              These two statements work together to give you the full financial picture. The P&amp;L tells you if you&apos;re <strong className="text-white">profitable</strong>; the balance sheet tells you if you&apos;re <strong className="text-white">financially healthy</strong>. You can be profitable but cash-poor (lots of unpaid invoices), or financially healthy but unprofitable in a given period (e.g., investing in new equipment). Here&apos;s how they compare.
            </p>

            {/* Comparison Table */}
            <div className="rounded-2xl border border-gray-700/50 overflow-hidden mt-6">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-800/80">
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Aspect</th>
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Balance Sheet</th>
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Profit &amp; Loss</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700/50">
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">Time Period</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">Point in time (snapshot on a specific date)</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">Period of time (e.g., month, quarter, year)</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">What It Shows</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">Assets, liabilities, and equity</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">Revenue, expenses, and net profit/loss</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">Analogy</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">A photograph &mdash; freezes one moment</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">A video &mdash; records what happened over time</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">Key Question</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">&quot;What is my business worth?&quot;</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">&quot;Did I make money this period?&quot;</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">Frequency</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">End of period (monthly, quarterly, annually)</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">Over each period (monthly, quarterly, annually)</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">Includes</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">Cash, equipment, debts, receivables, equity</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">Sales, fees, costs, overheads, depreciation</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">Used For</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">Loan applications, business valuation, health checks</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">Tax returns, performance tracking, pricing decisions</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">How They Connect</td>
                    <td className="px-6 py-4 text-sky-400 font-medium text-sm">Net profit from P&amp;L flows into equity</td>
                    <td className="px-6 py-4 text-sky-400 font-medium text-sm">Profit increases equity on the balance sheet</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="rounded-xl bg-sky-500/5 border border-sky-500/20 p-5 mt-6">
              <p className="text-sky-400 font-medium mb-2">How They Connect</p>
              <p className="text-gray-400 text-sm">
                The <strong className="text-gray-200">net profit from your P&amp;L statement flows directly into the equity section</strong> of your balance sheet as retained earnings. If you earn $80K revenue and have $50K expenses, your $30K profit increases your equity by $30K (minus any drawings). This is why both statements must be prepared together &mdash; the P&amp;L feeds the balance sheet, and the balance sheet shows the cumulative impact of all your P&amp;L periods.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Common Mistakes */}
        <section id="common-mistakes">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold">5</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Common Mistakes</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Freelancers often make avoidable errors when preparing (or ignoring) their balance sheet. Here are the six most common mistakes and how to fix each one.
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
                    <h4 className="text-white font-semibold mb-1">Mixing Personal and Business Assets</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      Including personal savings, personal vehicles, or your home in the business balance sheet. As a sole trader, you <strong className="text-gray-200">must separate business and personal finances</strong> for the balance sheet to be meaningful. Only include assets used for business purposes. If an asset is shared (like a car used 60% for business), only record the business portion.
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
                    <h4 className="text-white font-semibold mb-1">Not Recording Depreciation</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      Listing equipment at its original purchase price year after year. Assets like laptops, cameras, and office furniture <strong className="text-gray-200">lose value over time through depreciation</strong>. A $4,000 MacBook bought in 2024 isn&apos;t worth $4,000 in 2026. Use the ATO&apos;s depreciation schedules (or the instant asset write-off for items under $20,000) to keep your asset values accurate.
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
                    <h4 className="text-white font-semibold mb-1">Forgetting Accounts Receivable</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      Not including unpaid invoices as assets on the balance sheet. If you&apos;ve issued a $5,000 invoice that hasn&apos;t been paid yet, that <strong className="text-gray-200">$5,000 is still an asset</strong> &mdash; it&apos;s money owed to you. Failing to record receivables understates your assets and distorts your current ratio. Track every outstanding invoice as a current asset until it&apos;s paid or written off.
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
                    <h4 className="text-white font-semibold mb-1">Ignoring Tax Payable as a Liability</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      Many freelancers forget to record <strong className="text-gray-200">estimated income tax and GST as liabilities</strong>. If you earned $100K this year, you likely owe $20K+ in income tax and potentially thousands in GST. These are real obligations that must appear on your balance sheet. Not recording them makes your equity look higher than it actually is &mdash; a dangerous illusion when making spending decisions.
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
                    <h4 className="text-white font-semibold mb-1">Not Updating Equipment Values</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      Keeping assets on the balance sheet long after they&apos;ve been sold, scrapped, or fully depreciated. If you sold your old monitor or upgraded your laptop, <strong className="text-gray-200">remove the old asset and add the new one</strong>. Stale asset values inflate your balance sheet and give a false picture of your net worth. Review your asset register at least quarterly.
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
                    <h4 className="text-white font-semibold mb-1">Confusing Revenue with Assets</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      Revenue (income earned from services) belongs on the P&amp;L statement, <strong className="text-gray-200">not directly on the balance sheet</strong>. The balance sheet only shows the result of revenue &mdash; either as cash (if paid) or accounts receivable (if unpaid). Many freelancers mistakenly list their annual revenue as a balance sheet item. Revenue affects the balance sheet indirectly through retained earnings in equity.
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
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold">6</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">How InvoiceFlow Helps</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              InvoiceFlow is built specifically for Australian freelancers and sole traders. Here&apos;s how it helps you build and maintain an accurate balance sheet without needing an accounting degree.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-sky-500/20 p-5">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">Automatic Receivables Tracking</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Every invoice you send through InvoiceFlow is automatically tracked as an account receivable until it&apos;s paid. Your balance sheet always reflects the true value of outstanding invoices, with aging reports showing which are current, 30 days, 60 days, or 90+ days overdue.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-sky-500/20 p-5">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">Asset Register</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Record and track your business assets with automatic depreciation calculations using ATO-compliant schedules. InvoiceFlow maintains your asset register so your non-current assets are always valued correctly on your balance sheet.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-sky-500/20 p-5">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">Liability Monitoring</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Track GST payable, estimated income tax, and other liabilities in real time. InvoiceFlow calculates your tax obligations as you invoice, so your balance sheet liabilities section is always up to date &mdash; no end-of-year surprises.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-sky-500/20 p-5">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">Balance Sheet Reports</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Generate professional balance sheet reports with one click. Compare balance sheets across periods to track growth, monitor key ratios, and export bank-ready financial statements for loan applications &mdash; all automatically calculated from your invoicing data.
                </p>
              </div>
            </div>

            {/* Bonus Feature */}
            <div className="rounded-xl bg-sky-500/5 border border-sky-500/20 p-5 mt-6">
              <p className="text-sky-400 font-medium mb-2">Real-Time Financial Position</p>
              <p className="text-gray-400 text-sm">
                Unlike traditional accounting software that requires manual journal entries, InvoiceFlow <strong className="text-gray-200">builds your balance sheet automatically from your invoicing activity</strong>. Every invoice sent, payment received, and expense recorded updates your balance sheet in real time. See your current ratio, working capital, and equity at a glance &mdash; without waiting for your accountant.
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
              { href: '/glossary/profit-and-loss', label: 'Profit & Loss' },
              { href: '/glossary/accounts-receivable', label: 'Accounts Receivable' },
              { href: '/glossary/accounts-payable', label: 'Accounts Payable' },
              { href: '/glossary/depreciation', label: 'Depreciation' },
              { href: '/glossary/working-capital', label: 'Working Capital' },
              { href: '/glossary/bookkeeping', label: 'Bookkeeping' },
            ].map((term) => (
              <Link
                key={term.href}
                href={term.href}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gray-700/30 border border-gray-600/30 text-gray-300 text-sm hover:border-sky-500/40 hover:text-sky-400 transition-all"
              >
                <svg className="w-3.5 h-3.5 text-sky-500/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
        <p className="text-gray-400 text-center mb-8">Free calculators to help you build and understand your balance sheet.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {relatedTools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:border-sky-500/50 hover:bg-gray-800/80 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center mb-4">
                {tool.icon}
              </div>
              <h3 className="text-white font-medium mb-2 group-hover:text-sky-400 transition-colors">{tool.name}</h3>
              <p className="text-sm text-gray-400">{tool.description}</p>
              <div className="mt-4 text-sky-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
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
        <p className="text-gray-400 text-center mb-8">In-depth guides on financial statements, bookkeeping, and reporting for freelancers.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {relatedGuides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group p-6 rounded-2xl bg-gray-800/40 border border-gray-700/40 hover:border-sky-500/40 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h3 className="text-white font-medium mb-2 group-hover:text-sky-400 transition-colors">{guide.name}</h3>
              <p className="text-sm text-gray-400">{guide.description}</p>
              <div className="mt-4 text-sky-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
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
              <summary className="flex items-center justify-between cursor-pointer px-6 py-4 text-white font-medium hover:text-sky-400 transition-colors">
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
        <div className="rounded-2xl bg-gradient-to-br from-sky-500/10 to-blue-500/10 border border-sky-500/20 p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Build Your Balance Sheet Without the Complexity
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            InvoiceFlow helps Australian freelancers track assets, liabilities, and equity automatically from your invoicing data. See your financial position at a glance and generate bank-ready reports. Start for free.
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
