import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Chart of Accounts: Setup, Categories & Templates for Freelancers — InvoiceFlow',
  description:
    'What is a chart of accounts? Learn how to set up account categories, numbering systems, and templates for Australian freelancers and sole traders. Free CoA template mapped to ATO tax return labels. Updated 2025-26.',
  keywords: [
    'chart of accounts meaning',
    'chart of accounts template australia',
    'chart of accounts sole trader',
    'how to set up chart of accounts',
    'chart of accounts small business',
    'accounting categories freelancer',
    'chart of accounts example',
    'CoA setup australia',
  ],
  alternates: { canonical: '/glossary/chart-of-accounts' },
  openGraph: {
    title: 'Chart of Accounts: Setup, Categories & Templates for Freelancers — InvoiceFlow',
    description:
      'What is a chart of accounts? Learn how to set up account categories, numbering systems, and templates for Australian freelancers and sole traders. Free CoA template mapped to ATO tax return labels.',
    url: 'https://invoiceflow-teal.vercel.app/glossary/chart-of-accounts',
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
    { '@type': 'ListItem', position: 3, name: 'Chart of Accounts', item: `${BASE_URL}/glossary/chart-of-accounts` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a chart of accounts and why do freelancers need one?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "A chart of accounts (CoA) is a structured list of all the financial accounts used to record transactions in your business. It organises your finances into categories: assets, liabilities, equity, income, and expenses. Each account has a unique number and name. Even as a sole trader, a well-organised CoA makes tax time easier, BAS reporting accurate, and financial decisions clearer. Without one, your bookkeeping is a shoebox of receipts — with one, it's a clear picture of your business health.",
      },
    },
    {
      '@type': 'Question',
      name: 'What are the 5 main account types in a chart of accounts?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '(1) Assets — what you own (bank accounts, equipment, accounts receivable, prepaid expenses). (2) Liabilities — what you owe (GST collected, credit cards, loans, accounts payable). (3) Equity — your ownership stake (owner\'s equity, drawings, retained earnings). (4) Income/Revenue — money earned (service income, interest, product sales). (5) Expenses — costs of running the business (rent, software, insurance, phone, travel). Each type typically has a number range: Assets 1000-1999, Liabilities 2000-2999, Equity 3000-3999, Income 4000-4999, Expenses 5000-6999.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I set up a chart of accounts for a freelance business?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Start with the standard 5 account types. Under each, create sub-accounts matching your actual business activities. Keep it simple — 20-40 accounts total is enough for most freelancers. Use a numbering system (1000-6999) for organisation. Match your expense categories to ATO tax return labels for easier tax prep. Review and adjust quarterly. Common freelancer accounts: 1000 Business Bank Account, 1100 Accounts Receivable, 2000 GST Collected, 2100 PAYG Withholding, 4000 Service Revenue, 5000 Software & Subscriptions, 5100 Home Office, 5200 Professional Development.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best chart of accounts numbering system?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most common system uses ranges: 1000-1999 for Assets, 2000-2999 for Liabilities, 3000-3999 for Equity, 4000-4999 for Income, 5000-6999 for Expenses. Leave gaps between account numbers (1000, 1010, 1020...) so you can insert new accounts later without renumbering. Some freelancers use a simpler 3-digit system (100-699). The key is consistency — pick a system and stick with it.',
      },
    },
    {
      '@type': 'Question',
      name: 'How often should I update my chart of accounts?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Review your CoA quarterly and make adjustments annually before EOFY. Add new accounts when you start a new type of expense or income. Delete or deactivate accounts you no longer use (don't delete if they have historical transactions). Common triggers to update: new income stream, new recurring expense, BAS/tax return showed missing categories, business structure change.",
      },
    },
  ],
};

const tocItems = [
  { id: 'what-is-chart-of-accounts', label: '1. What Is a Chart of Accounts?' },
  { id: 'the-five-account-types', label: '2. The Five Account Types' },
  { id: 'freelancer-coa-template', label: '3. Freelancer Chart of Accounts Template' },
  { id: 'setting-up-your-coa', label: '4. Setting Up Your Chart of Accounts' },
  { id: 'common-mistakes', label: '5. Common Mistakes to Avoid' },
  { id: 'how-invoiceflow-helps', label: '6. How InvoiceFlow Helps' },
];

const relatedTools = [
  {
    href: '/tools/profit-loss-statement-generator',
    name: 'Profit & Loss Generator',
    description: 'Generate profit and loss statements using account categories from your chart of accounts.',
    icon: (
      <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    href: '/tools/bas-preparation-checklist',
    name: 'BAS Preparation Checklist',
    description: 'Ensure your chart of accounts maps correctly to BAS labels with this step-by-step checklist.',
    icon: (
      <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    href: '/tools/expense-report-generator',
    name: 'Expense Report Generator',
    description: 'Generate expense reports categorised by your chart of accounts for cleaner bookkeeping.',
    icon: (
      <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    href: '/tools/tax-estimator',
    name: 'Tax Estimator',
    description: 'Estimate your income tax and super obligations based on your income and expense accounts.',
    icon: (
      <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const relatedGuides = [
  {
    href: '/guides/tax-guide-freelancers',
    name: 'Tax Guide for Freelancers',
    description: 'Complete guide to income tax, deductions, BAS, and financial reporting requirements for Australian sole traders.',
  },
  {
    href: '/guides/gst-for-freelancers',
    name: 'GST for Freelancers',
    description: 'Everything you need to know about GST registration, collection, BAS reporting, and input tax credits.',
  },
  {
    href: '/guides/bookkeeping-basics',
    name: 'Bookkeeping Basics',
    description: 'Foundational bookkeeping concepts including double-entry accounting, journals, ledgers, and chart of accounts setup.',
  },
];

export default function ChartOfAccountsGlossaryPage() {
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
            <span className="text-white">Chart of Accounts</span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            Glossary &mdash; Bookkeeping Fundamentals
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Chart of Accounts{' '}
            <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
              for Freelancers
            </span>
          </h1>

          {/* Summary */}
          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            A structured list of every financial account in your business &mdash; the backbone of organised bookkeeping. Your chart of accounts (CoA) categorises all transactions into assets, liabilities, equity, income, and expenses. Here&apos;s how to set one up, a ready-to-use template for Australian freelancers, and the common mistakes that cost sole traders time and money at EOFY.
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
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 text-xs font-bold">5</span>
              <div>
                <p className="text-white font-medium text-sm">5 Account Types</p>
                <p className="text-gray-400 text-sm">Assets, Liabilities, Equity, Income, Expenses</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 text-xs font-bold">20-40</span>
              <div>
                <p className="text-white font-medium text-sm">Accounts Needed</p>
                <p className="text-gray-400 text-sm">Typical freelancer needs &mdash; keep it simple</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 text-xs font-bold">1-6K</span>
              <div>
                <p className="text-white font-medium text-sm">Standard Numbering Range</p>
                <p className="text-gray-400 text-sm">1000&ndash;6999 with gaps for future accounts</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 text-xs font-bold">QTR</span>
              <div>
                <p className="text-white font-medium text-sm">Quarterly Review</p>
                <p className="text-gray-400 text-sm">Recommended review frequency for your CoA</p>
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

        {/* Section 1: What Is a Chart of Accounts? */}
        <section id="what-is-chart-of-accounts">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold">1</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">What Is a Chart of Accounts?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              A chart of accounts (CoA) is <strong className="text-white">a complete index of every financial account used to record transactions in your business</strong>. It&apos;s the backbone of double-entry bookkeeping &mdash; even if you don&apos;t do formal double-entry accounting, a CoA organises all your transactions into logical categories so you can track where money comes from and where it goes.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Every accounting software &mdash; from InvoiceFlow to Xero to MYOB &mdash; uses a chart of accounts under the hood. When you categorise an expense as &quot;Software &amp; Subscriptions&quot; or record income as &quot;Service Revenue&quot;, you&apos;re using your CoA. Each account has a <strong className="text-white">unique number and name</strong>, organised into five standard categories: assets, liabilities, equity, income, and expenses.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Think of your chart of accounts as a <strong className="text-white">filing system for your finances</strong>. Without labels on your folders, you can&apos;t find anything. Without a CoA, your bookkeeping is a shoebox of receipts &mdash; technically you have all the information, but it&apos;s unusable when the ATO comes knocking or when you need to lodge your BAS.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Even sole traders benefit from a well-structured CoA. It maps directly to your tax return, making EOFY preparation faster and cheaper. Your accountant charges less because the data is already categorised correctly. And critically, it gives you a <strong className="text-white">clear picture of your business health</strong> at any point in time &mdash; not just at tax time.
            </p>

            {/* Quick stats grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-amber-500/20 p-4 text-center">
                <p className="text-2xl font-bold text-amber-400">5</p>
                <p className="text-sm text-gray-400 mt-1">Account Types</p>
                <p className="text-xs text-gray-500">Assets, Liabilities, Equity, Income, Expenses</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-amber-500/20 p-4 text-center">
                <p className="text-2xl font-bold text-amber-400">20&ndash;40</p>
                <p className="text-sm text-gray-400 mt-1">Accounts</p>
                <p className="text-xs text-gray-500">Typical freelancer needs</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-amber-500/20 p-4 text-center">
                <p className="text-2xl font-bold text-amber-400">1000&ndash;6999</p>
                <p className="text-sm text-gray-400 mt-1">Numbering Range</p>
                <p className="text-xs text-gray-500">Standard numbering system</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-amber-500/20 p-4 text-center">
                <p className="text-2xl font-bold text-amber-400">Quarterly</p>
                <p className="text-sm text-gray-400 mt-1">Review Frequency</p>
                <p className="text-xs text-gray-500">Recommended review cycle</p>
              </div>
            </div>

            <div className="rounded-xl bg-amber-500/5 border border-amber-500/20 p-5 mt-6">
              <p className="text-amber-400 font-medium mb-2">Key Distinction</p>
              <p className="text-gray-400 text-sm">
                A chart of accounts is <strong className="text-gray-200">not</strong> a list of transactions &mdash; it&apos;s the structure that organises your transactions. Think of it as the table of contents for your financial records. The accounts themselves hold the data; the chart tells you where everything belongs. Set it up once, review it quarterly, and your bookkeeping becomes dramatically simpler.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: The Five Account Types */}
        <section id="the-five-account-types">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold">2</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">The Five Account Types</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Every chart of accounts is built on five fundamental account types. Understanding what belongs in each category &mdash; and the standard numbering ranges &mdash; is the foundation of organised bookkeeping.
            </p>

            {/* 1. Assets */}
            <div className="rounded-xl bg-gray-800/50 border border-emerald-500/20 p-6 mt-6">
              <h3 className="text-emerald-400 font-semibold mb-3 flex items-center gap-2 text-lg">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18v-.008zm-12 0h.008v.008H6v-.008z" />
                </svg>
                1. Assets (1000&ndash;1999) &mdash; What You Own
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-4">
                Things of value your business owns or is owed. These increase your net worth.
              </p>
              <div className="grid sm:grid-cols-2 gap-2">
                {[
                  { code: '1000', name: 'Business Bank Account', note: 'Cash in bank' },
                  { code: '1010', name: 'Business Savings Account', note: 'Reserve funds' },
                  { code: '1100', name: 'Accounts Receivable', note: 'Unpaid invoices' },
                  { code: '1200', name: 'Prepaid Expenses', note: 'Insurance, subscriptions paid ahead' },
                  { code: '1300', name: 'Equipment', note: 'Computer, camera, tools' },
                  { code: '1310', name: 'Accumulated Depreciation', note: 'Contra asset, reduces equipment value' },
                  { code: '1400', name: 'Motor Vehicle', note: 'If used for business' },
                ].map((account) => (
                  <div key={account.code} className="flex items-start gap-2 p-2 rounded-lg bg-gray-900/50">
                    <span className="text-emerald-400 font-mono text-xs mt-0.5 flex-shrink-0">{account.code}</span>
                    <div>
                      <p className="text-white text-sm font-medium">{account.name}</p>
                      <p className="text-gray-500 text-xs">{account.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. Liabilities */}
            <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-6">
              <h3 className="text-red-400 font-semibold mb-3 flex items-center gap-2 text-lg">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                2. Liabilities (2000&ndash;2999) &mdash; What You Owe
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-4">
                Debts and obligations your business must pay. These reduce your net worth.
              </p>
              <div className="grid sm:grid-cols-2 gap-2">
                {[
                  { code: '2000', name: 'GST Collected', note: 'Held for ATO' },
                  { code: '2010', name: 'GST Paid', note: 'Input tax credits' },
                  { code: '2020', name: 'Net GST Payable', note: 'Collected minus paid' },
                  { code: '2100', name: 'PAYG Withholding Payable', note: 'If applicable' },
                  { code: '2200', name: 'Credit Card', note: 'Outstanding balance' },
                  { code: '2300', name: 'Business Loan', note: 'Outstanding principal' },
                  { code: '2400', name: 'Superannuation Payable', note: 'If you pay yourself super' },
                  { code: '2500', name: 'Income Tax Provision', note: 'Set aside for tax' },
                ].map((account) => (
                  <div key={account.code} className="flex items-start gap-2 p-2 rounded-lg bg-gray-900/50">
                    <span className="text-red-400 font-mono text-xs mt-0.5 flex-shrink-0">{account.code}</span>
                    <div>
                      <p className="text-white text-sm font-medium">{account.name}</p>
                      <p className="text-gray-500 text-xs">{account.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Equity */}
            <div className="rounded-xl bg-gray-800/50 border border-blue-500/20 p-6">
              <h3 className="text-blue-400 font-semibold mb-3 flex items-center gap-2 text-lg">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>
                3. Equity (3000&ndash;3999) &mdash; Your Ownership Stake
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-4">
                The residual interest in your business after subtracting liabilities from assets. What you&apos;d walk away with if you sold everything and paid all debts.
              </p>
              <div className="grid sm:grid-cols-2 gap-2">
                {[
                  { code: '3000', name: "Owner's Equity / Capital", note: 'Money invested in the business' },
                  { code: '3100', name: "Owner's Drawings", note: 'Money taken out for personal use' },
                  { code: '3200', name: 'Retained Earnings', note: 'Accumulated profits kept in the business' },
                ].map((account) => (
                  <div key={account.code} className="flex items-start gap-2 p-2 rounded-lg bg-gray-900/50">
                    <span className="text-blue-400 font-mono text-xs mt-0.5 flex-shrink-0">{account.code}</span>
                    <div>
                      <p className="text-white text-sm font-medium">{account.name}</p>
                      <p className="text-gray-500 text-xs">{account.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. Income */}
            <div className="rounded-xl bg-gray-800/50 border border-emerald-500/20 p-6">
              <h3 className="text-emerald-400 font-semibold mb-3 flex items-center gap-2 text-lg">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                </svg>
                4. Income / Revenue (4000&ndash;4999) &mdash; Money Earned
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-4">
                All sources of business revenue. Tracked separately so you can see where your income comes from.
              </p>
              <div className="grid sm:grid-cols-2 gap-2">
                {[
                  { code: '4000', name: 'Service Revenue', note: 'Main freelance income' },
                  { code: '4010', name: 'Project-Based Income', note: 'Fixed-price project work' },
                  { code: '4020', name: 'Retainer Income', note: 'Ongoing monthly retainers' },
                  { code: '4030', name: 'Product Sales', note: 'Digital products, templates' },
                  { code: '4100', name: 'Interest Income', note: 'Bank interest earned' },
                  { code: '4200', name: 'Other Income', note: 'Tax refunds, grants, misc' },
                ].map((account) => (
                  <div key={account.code} className="flex items-start gap-2 p-2 rounded-lg bg-gray-900/50">
                    <span className="text-emerald-400 font-mono text-xs mt-0.5 flex-shrink-0">{account.code}</span>
                    <div>
                      <p className="text-white text-sm font-medium">{account.name}</p>
                      <p className="text-gray-500 text-xs">{account.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 5. Expenses */}
            <div className="rounded-xl bg-gray-800/50 border border-amber-500/20 p-6">
              <h3 className="text-amber-400 font-semibold mb-3 flex items-center gap-2 text-lg">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                </svg>
                5. Expenses (5000&ndash;6999) &mdash; Business Costs
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-4">
                The cost of running your business. This is the largest section for most freelancers &mdash; and the one that maps most directly to your ATO tax deductions.
              </p>
              <div className="grid sm:grid-cols-2 gap-2">
                {[
                  { code: '5000', name: 'Advertising & Marketing', note: 'Paid ads, content, sponsorships' },
                  { code: '5010', name: 'Bank Fees & Charges', note: 'Account fees, merchant fees' },
                  { code: '5020', name: 'Cleaning', note: 'Office cleaning services' },
                  { code: '5030', name: 'Computer & IT Expenses', note: 'Repairs, accessories, hosting' },
                  { code: '5040', name: 'Depreciation', note: 'Asset value write-down' },
                  { code: '5050', name: 'Education & Training', note: 'Courses, conferences, books' },
                  { code: '5060', name: 'Electricity & Gas', note: 'Business portion of utilities' },
                  { code: '5070', name: 'Home Office Expenses', note: '67c/hr or actual method' },
                  { code: '5080', name: 'Insurance', note: 'PI, PL, Income Protection' },
                  { code: '5090', name: 'Internet', note: 'Business portion of internet bill' },
                  { code: '5100', name: 'Legal & Accounting Fees', note: 'Tax agent, bookkeeper, legal' },
                  { code: '5110', name: 'Motor Vehicle Expenses', note: 'Fuel, rego, servicing (business %)' },
                  { code: '5120', name: 'Office Supplies & Stationery', note: 'Paper, pens, printer ink' },
                  { code: '5130', name: 'Phone & Mobile', note: 'Business portion of phone bill' },
                  { code: '5140', name: 'Postage & Courier', note: 'Shipping, postal charges' },
                  { code: '5150', name: 'Printing', note: 'Business cards, brochures' },
                  { code: '5160', name: 'Professional Memberships', note: 'Industry associations, unions' },
                  { code: '5170', name: 'Rent', note: 'If external office or coworking' },
                  { code: '5180', name: 'Repairs & Maintenance', note: 'Equipment and office repairs' },
                  { code: '5190', name: 'Software & Subscriptions', note: 'SaaS tools, cloud services' },
                  { code: '5200', name: 'Subcontractor Payments', note: 'Outsourced work' },
                  { code: '5210', name: 'Superannuation', note: 'Self-funded contributions' },
                  { code: '5220', name: 'Travel & Accommodation', note: 'Business travel, flights, hotels' },
                  { code: '5230', name: 'Meals & Entertainment', note: 'Limited deductibility applies' },
                ].map((account) => (
                  <div key={account.code} className="flex items-start gap-2 p-2 rounded-lg bg-gray-900/50">
                    <span className="text-amber-400 font-mono text-xs mt-0.5 flex-shrink-0">{account.code}</span>
                    <div>
                      <p className="text-white text-sm font-medium">{account.name}</p>
                      <p className="text-gray-500 text-xs">{account.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl bg-amber-500/5 border border-amber-500/20 p-5 mt-6">
              <p className="text-amber-400 font-medium mb-2">Pro Tip</p>
              <p className="text-gray-400 text-sm">
                Notice the gaps in numbering (1000, 1010, 1020 &mdash; not 1000, 1001, 1002). <strong className="text-gray-200">Always leave gaps between account numbers</strong> so you can insert new accounts later without renumbering your entire chart. This is especially important as your freelance business grows and you discover new expense categories.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Freelancer Chart of Accounts Template */}
        <section id="freelancer-coa-template">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold">3</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Freelancer Chart of Accounts Template</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Here&apos;s a ready-to-use chart of accounts template for Australian freelancers and sole traders. Each account is <strong className="text-white">mapped to the corresponding ATO tax return label</strong> so you can go from bookkeeping to tax lodgement with minimal reclassification. This template covers the P8 &mdash; Business and Professional Items section of the individual tax return (supplementary).
            </p>

            {/* Template Table */}
            <div className="rounded-2xl border border-gray-700/50 overflow-hidden mt-6">
              <div className="bg-gray-800/80 px-6 py-4">
                <h4 className="text-white font-semibold">Australian Freelancer CoA Template &mdash; Mapped to ATO Labels</h4>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-800/60">
                      <th className="text-left text-sm font-medium text-gray-300 px-4 py-3">Account #</th>
                      <th className="text-left text-sm font-medium text-gray-300 px-4 py-3">Account Name</th>
                      <th className="text-left text-sm font-medium text-gray-300 px-4 py-3">Type</th>
                      <th className="text-left text-sm font-medium text-gray-300 px-4 py-3">Tax Return Label</th>
                      <th className="text-left text-sm font-medium text-gray-300 px-4 py-3">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700/50">
                    {[
                      { num: '1000', name: 'Business Bank Account', type: 'Asset', tax: 'N/A', note: 'Main operating account' },
                      { num: '1100', name: 'Accounts Receivable', type: 'Asset', tax: 'N/A', note: 'Unpaid client invoices' },
                      { num: '1300', name: 'Equipment', type: 'Asset', tax: 'N/A', note: 'Depreciating assets' },
                      { num: '2000', name: 'GST Collected', type: 'Liability', tax: '1A on BAS', note: '10% of sales' },
                      { num: '2010', name: 'GST Paid', type: 'Liability', tax: '1B on BAS', note: 'GST on purchases' },
                      { num: '2500', name: 'Income Tax Provision', type: 'Liability', tax: 'N/A', note: 'Set aside for tax' },
                      { num: '3000', name: "Owner's Equity", type: 'Equity', tax: 'N/A', note: 'Your capital' },
                      { num: '3100', name: "Owner's Drawings", type: 'Equity', tax: 'N/A', note: 'Personal withdrawals' },
                      { num: '4000', name: 'Service Revenue', type: 'Income', tax: 'P8 Item 1', note: 'Main income' },
                      { num: '4100', name: 'Interest Income', type: 'Income', tax: 'Item 10', note: 'Bank interest' },
                      { num: '5000', name: 'Advertising', type: 'Expense', tax: 'P8 Item 2', note: 'Marketing costs' },
                      { num: '5030', name: 'Computer Expenses', type: 'Expense', tax: 'P8 Item 2', note: 'Software, repairs' },
                      { num: '5040', name: 'Depreciation', type: 'Expense', tax: 'P8 Item 5', note: 'Asset write-down' },
                      { num: '5070', name: 'Home Office', type: 'Expense', tax: 'P8 Item 2', note: '67c/hr or actual' },
                      { num: '5080', name: 'Insurance', type: 'Expense', tax: 'P8 Item 2', note: 'PI, PL, income protection' },
                      { num: '5100', name: 'Accounting Fees', type: 'Expense', tax: 'D10', note: 'Tax agent, bookkeeper' },
                      { num: '5130', name: 'Phone & Internet', type: 'Expense', tax: 'P8 Item 2', note: 'Business portion' },
                      { num: '5190', name: 'Software', type: 'Expense', tax: 'P8 Item 2', note: 'SaaS subscriptions' },
                      { num: '5200', name: 'Subcontractors', type: 'Expense', tax: 'P8 Item 2', note: 'Outsourced work' },
                      { num: '5210', name: 'Super', type: 'Expense', tax: 'P8 Item 6', note: 'Self-funded contributions' },
                    ].map((row) => (
                      <tr key={row.num} className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                        <td className="px-4 py-3 text-amber-400 font-mono text-sm">{row.num}</td>
                        <td className="px-4 py-3 text-white font-medium text-sm">{row.name}</td>
                        <td className="px-4 py-3 text-gray-300 text-sm">{row.type}</td>
                        <td className="px-4 py-3 text-gray-300 text-sm">{row.tax}</td>
                        <td className="px-4 py-3 text-gray-400 text-sm">{row.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Download CTA */}
            <div className="rounded-xl bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 p-6 mt-6 text-center">
              <p className="text-white font-semibold mb-2">Download This Template</p>
              <p className="text-gray-400 text-sm mb-4">
                Download this chart of accounts template and customise it for your business. Pre-mapped to ATO tax return labels for seamless EOFY lodgement.
              </p>
              <Link href="/signup">
                <Button>Get Template &mdash; Start Free</Button>
              </Link>
            </div>

            <div className="rounded-xl bg-amber-500/5 border border-amber-500/20 p-5 mt-6">
              <p className="text-amber-400 font-medium mb-2">ATO Mapping Note</p>
              <p className="text-gray-400 text-sm">
                The &quot;Tax Return Label&quot; column maps each account to the ATO individual tax return (supplementary section). <strong className="text-gray-200">P8 refers to the Business and Professional Items schedule</strong> &mdash; this is where sole traders report business income and expenses. Mapping your CoA to these labels upfront saves hours at EOFY and reduces your accountant&apos;s fees because they don&apos;t need to reclassify everything.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Setting Up Your Chart of Accounts */}
        <section id="setting-up-your-coa">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold">4</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Setting Up Your Chart of Accounts</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Setting up your CoA doesn&apos;t need to be complicated. Follow these seven steps to create a chart of accounts that works for your freelance business from day one.
            </p>

            {/* 7-Step Process */}
            <div className="space-y-4 mt-6">
              {[
                {
                  step: 1,
                  title: 'Choose your accounting software',
                  description: 'Pick a tool that suits your business size: InvoiceFlow for invoicing-first freelancers, Xero for more complex needs, MYOB if your accountant prefers it, or QuickBooks if you work with US clients. Most come with a default CoA you can customise.',
                },
                {
                  step: 2,
                  title: 'Start with the 5 standard account types',
                  description: 'Create the five top-level categories: Assets (1000s), Liabilities (2000s), Equity (3000s), Income (4000s), and Expenses (5000-6000s). This structure is universal and expected by every accountant and tax agent in Australia.',
                },
                {
                  step: 3,
                  title: 'Add sub-accounts for your actual business activities',
                  description: "Look at your last 3 months of bank statements. What types of income do you earn? What recurring expenses do you pay? Create accounts for each distinct category. Don't create accounts for hypothetical future expenses — add them when they actually occur.",
                },
                {
                  step: 4,
                  title: 'Map expense accounts to ATO tax return labels',
                  description: 'Download the ATO individual tax return supplementary section (P8 — Business and Professional Items). Match each of your expense accounts to the correct tax label. This single step saves more time at EOFY than any other bookkeeping activity.',
                },
                {
                  step: 5,
                  title: 'Set opening balances',
                  description: 'Enter your current bank account balance, any outstanding invoices (accounts receivable), equipment values, and existing debts. If you\'re starting mid-year, your accountant can help determine accurate opening balances. For a new business, most opening balances will be zero.',
                },
                {
                  step: 6,
                  title: 'Test with a few transactions',
                  description: 'Record 5-10 recent transactions and verify they land in the right accounts. Does service income go to 4000? Does a software subscription go to 5190? If anything feels wrong, adjust your account structure before you have hundreds of transactions to reclassify.',
                },
                {
                  step: 7,
                  title: 'Review monthly for the first quarter, then quarterly',
                  description: 'After your first month, check: Are there transactions you couldn\'t categorise easily? Do you need a new account? Are any accounts unused? After 3 months of monthly reviews, switch to quarterly reviews aligned with your BAS lodgement dates.',
                },
              ].map((item) => (
                <div key={item.step} className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white font-bold text-sm">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                      <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Tips Callout */}
            <div className="rounded-xl bg-amber-500/5 border border-amber-500/20 p-5 mt-6">
              <p className="text-amber-400 font-medium mb-3">Setup Tips for Freelancers</p>
              <ul className="space-y-2">
                {[
                  'Keep it simple — 20-40 accounts max. You can always add more later.',
                  "Use consistent naming — don't mix abbreviations with full names (pick one style).",
                  'Leave gaps in numbering (1000, 1010, 1020) so you can insert new accounts without renumbering.',
                  "Don't create an account for every possible expense — group small, infrequent items together.",
                  'Match ATO categories first — this single decision reduces tax-time effort by 80%.',
                ].map((tip, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                    <svg className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Section 5: Common Mistakes to Avoid */}
        <section id="common-mistakes">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold">5</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Common Mistakes to Avoid</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              A poorly structured chart of accounts causes more bookkeeping pain than having no chart at all. Here are the six most common mistakes freelancers make &mdash; and each one costs you real time and money.
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
                    <h4 className="text-white font-semibold mb-1">Too Many Accounts</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      Creating 200+ accounts when 30 would do. More accounts does not equal better tracking &mdash; it means more confusion and more reclassification errors. <strong className="text-gray-200">Every extra account is a decision point for every transaction.</strong> If you have separate accounts for &quot;blue pens&quot; and &quot;black pens&quot;, you&apos;re overcomplicating things. Group similar expenses together and keep the total under 40 accounts.
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
                    <h4 className="text-white font-semibold mb-1">Mixing Personal and Business</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      Using one bank account for everything &mdash; personal groceries, Netflix, and business expenses all mixed together. <strong className="text-gray-200">Separate bank accounts = clean books = happy accountant = lower fees.</strong> Your chart of accounts should only contain business transactions. Personal spending belongs in Owner&apos;s Drawings (3100), not scattered across expense accounts.
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
                    <h4 className="text-white font-semibold mb-1">Not Matching ATO Categories</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      Custom expense names that don&apos;t map to tax return fields. Your accountant has to reclassify everything at $200+/hr. <strong className="text-gray-200">If your CoA account names match ATO labels, tax prep is almost automatic.</strong> Use the template above as a starting point &mdash; it&apos;s already mapped to the P8 Business and Professional Items schedule.
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
                    <h4 className="text-white font-semibold mb-1">Ignoring GST Accounts</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      Not tracking GST collected vs GST paid separately. This makes BAS reconciliation a nightmare. <strong className="text-gray-200">You need at minimum three GST accounts</strong>: 2000 GST Collected (what you charge clients), 2010 GST Paid (what you pay on purchases), and 2020 Net GST Payable (the difference you owe the ATO). Without these, your quarterly BAS becomes guesswork.
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
                    <h4 className="text-white font-semibold mb-1">Never Reviewing</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      Setting up your CoA once and never updating it. Your business changes &mdash; your chart should too. <strong className="text-gray-200">Review quarterly and adjust annually before EOFY.</strong> Common triggers to update: new income stream (started selling templates alongside consulting), new recurring expense (hired a VA), or your tax return revealed missing categories.
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
                    <h4 className="text-white font-semibold mb-1">Deleting Accounts with History</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      Removing accounts that have historical transactions recorded against them. This corrupts your financial history and can cause reconciliation errors. <strong className="text-gray-200">Deactivate old accounts instead of deleting them.</strong> A deactivated account keeps its historical data intact but won&apos;t appear in dropdown menus for new transactions. Only delete accounts that have zero transactions.
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
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold">6</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">How InvoiceFlow Helps</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              InvoiceFlow is built specifically for Australian freelancers. Instead of starting from scratch, you get a <strong className="text-white">pre-configured chart of accounts that&apos;s already mapped to ATO labels</strong>. Here&apos;s how it makes your bookkeeping effortless.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-amber-500/20 p-5">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">Pre-Configured CoA</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Start with a chart of accounts designed for Australian freelancers. All 5 account types are set up, numbered correctly, and mapped to ATO tax return labels. No blank-slate anxiety &mdash; just customise what you need.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-amber-500/20 p-5">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">Automatic Categorisation</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  InvoiceFlow automatically categorises income and expenses as you create invoices and record transactions. Smart rules learn your patterns &mdash; after categorising &quot;Adobe Creative Cloud&quot; as Software once, it&apos;s automatic forever.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-amber-500/20 p-5">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">BAS-Ready Reporting</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Reports are mapped directly to BAS and ATO labels. When it&apos;s time to lodge your quarterly BAS, InvoiceFlow shows your GST collected (1A), GST paid (1B), and net payable &mdash; ready to enter into myGov or send to your accountant.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-amber-500/20 p-5">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">GST Tracking Built In</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  GST collected vs GST paid is tracked automatically on every transaction. No manual journal entries required. See your net GST position in real time and never be surprised by a BAS payment again.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-amber-500/20 p-5">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">Accountant Export</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Export your entire chart of accounts and transaction history in standard formats (CSV, PDF) that every Australian accountant can import. Your accountant sees clean, pre-categorised data &mdash; which means lower fees for you.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-amber-500/20 p-5">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">Customise to Your Business</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Add, rename, or deactivate accounts to match your specific freelance business. Whether you&apos;re a designer, developer, copywriter, or consultant, InvoiceFlow adapts the chart of accounts to your workflow.
                </p>
              </div>
            </div>

            {/* Bonus Feature */}
            <div className="rounded-xl bg-amber-500/5 border border-amber-500/20 p-5 mt-6">
              <p className="text-amber-400 font-medium mb-2">Zero-Setup Bookkeeping</p>
              <p className="text-gray-400 text-sm">
                Unlike traditional accounting software that dumps you in front of a blank chart of accounts, InvoiceFlow <strong className="text-gray-200">starts you with a working CoA from the moment you sign up</strong>. Every account is pre-numbered, pre-named, and pre-mapped to ATO labels. Just start invoicing &mdash; your chart of accounts builds itself from your business activity.
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
              { href: '/glossary/bookkeeping', label: 'Bookkeeping' },
              { href: '/glossary/balance-sheet', label: 'Balance Sheet' },
              { href: '/glossary/profit-and-loss', label: 'Profit & Loss' },
              { href: '/glossary/accounts-receivable', label: 'Accounts Receivable' },
              { href: '/glossary/accounts-payable', label: 'Accounts Payable' },
              { href: '/glossary/depreciation', label: 'Depreciation' },
              { href: '/glossary/gst', label: 'GST' },
              { href: '/glossary/bas', label: 'BAS' },
            ].map((term) => (
              <Link
                key={term.href}
                href={term.href}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gray-700/30 border border-gray-600/30 text-gray-300 text-sm hover:border-amber-500/40 hover:text-amber-400 transition-all"
              >
                <svg className="w-3.5 h-3.5 text-amber-500/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
        <p className="text-gray-400 text-center mb-8">Free tools to help you set up and manage your chart of accounts.</p>
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
        <p className="text-gray-400 text-center mb-8">In-depth guides on bookkeeping, tax, and financial management for freelancers.</p>
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
            Get a Pre-Built Chart of Accounts &mdash; Start Free
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            InvoiceFlow gives Australian freelancers a pre-configured chart of accounts mapped to ATO labels, automatic categorisation, and BAS-ready reporting. Stop building spreadsheets &mdash; start invoicing.
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
