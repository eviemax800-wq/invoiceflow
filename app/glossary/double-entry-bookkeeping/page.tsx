import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Double-Entry Bookkeeping: Complete Guide with Examples for Freelancers — InvoiceFlow',
  description:
    'What is double-entry bookkeeping? Learn debits and credits, the DEAD CLIC mnemonic, T-accounts, journal entries, and how double-entry accounting works for Australian freelancers and sole traders. Includes real examples, chart of accounts mapping, and GST recording. Updated 2025-26.',
  keywords: [
    'double entry bookkeeping explained',
    'double entry bookkeeping examples',
    'what is double entry bookkeeping',
    'double entry vs single entry bookkeeping',
    'double entry accounting for freelancers',
    'debit and credit rules',
    'double entry bookkeeping tutorial',
    'double entry bookkeeping australia',
  ],
  alternates: { canonical: '/glossary/double-entry-bookkeeping' },
  openGraph: {
    title: 'Double-Entry Bookkeeping: Complete Guide with Examples for Freelancers — InvoiceFlow',
    description:
      'What is double-entry bookkeeping? Learn debits and credits, T-accounts, journal entries, and how double-entry accounting works for Australian freelancers. Includes the DEAD CLIC mnemonic, real transaction examples, and GST recording.',
    url: 'https://invoiceflow-teal.vercel.app/glossary/double-entry-bookkeeping',
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
    { '@type': 'ListItem', position: 3, name: 'Double-Entry Bookkeeping', item: `${BASE_URL}/glossary/double-entry-bookkeeping` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is double-entry bookkeeping in simple terms?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Double-entry bookkeeping is an accounting method where every financial transaction is recorded in at least two accounts — a debit in one account and a credit in another. The total debits must always equal the total credits. For example, when a client pays you $1,000, you debit your Bank account (increasing it by $1,000) and credit your Revenue account (also increasing it by $1,000). This creates a self-balancing system that catches errors automatically. If your debits and credits don\'t match, you know something has been recorded incorrectly.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do Australian freelancers need to use double-entry bookkeeping?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The ATO does not mandate double-entry bookkeeping for sole traders with turnover under $10 million. Single-entry bookkeeping (recording income and expenses in a simple register) is acceptable for most freelancers. However, double-entry is considered best practice because it provides better error detection, a complete financial picture through balance sheets, and makes BAS and tax lodgement more accurate. If you use any accounting software like InvoiceFlow, Xero, or MYOB, you are already using double-entry bookkeeping behind the scenes — the software handles the debits and credits automatically.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between a debit and a credit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Debits and credits are not simply "money in" and "money out." They are entries on the left (debit) and right (credit) sides of an account. The effect depends on the account type: Asset and Expense accounts increase with debits and decrease with credits. Liability, Equity, and Revenue accounts increase with credits and decrease with debits. A helpful mnemonic is DEAD CLIC: Debits increase Expenses, Assets, and Dividends; Credits increase Liabilities, Income, and Capital. Every transaction must have equal debits and credits to keep the accounting equation (Assets = Liabilities + Equity) in balance.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the DEAD CLIC mnemonic for debits and credits?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'DEAD CLIC is a mnemonic device that helps remember which accounts increase with debits and which increase with credits. DEAD stands for: Debits increase Expenses, Assets, and Dividends (or Drawings for sole traders). CLIC stands for: Credits increase Liabilities, Income, and Capital (or Equity). So when you buy a laptop for $2,000 — the Equipment account (asset) increases with a $2,000 debit, and the Bank account (also an asset) decreases with a $2,000 credit. Both entries are $2,000, keeping the books balanced.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does double-entry bookkeeping handle GST in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In double-entry bookkeeping, GST is recorded using separate accounts: GST Collected (a liability account for the 10% GST you charge clients) and GST Paid (an asset account for the GST you pay on business purchases). When you invoice a client $1,100 including GST, you debit Accounts Receivable $1,100, credit Revenue $1,000, and credit GST Collected $100. When you buy supplies for $220 including GST, you debit the Expense account $200, debit GST Paid $20, and credit Bank $220. At BAS time, the difference between GST Collected and GST Paid is the net amount you owe (or are owed by) the ATO.',
      },
    },
  ],
};

const tocItems = [
  { id: 'what-is-double-entry', label: '1. What Is Double-Entry Bookkeeping?' },
  { id: 'debits-and-credits', label: '2. Debits and Credits Explained' },
  { id: 'chart-of-accounts-and-double-entry', label: '3. The Chart of Accounts & Double-Entry' },
  { id: 'double-entry-australian-freelancers', label: '4. Double-Entry for Australian Freelancers' },
  { id: 'common-mistakes', label: '5. Common Mistakes & How to Avoid Them' },
  { id: 'how-invoiceflow-helps', label: '6. How InvoiceFlow Helps' },
];

const relatedTools = [
  {
    href: '/tools/gst-calculator',
    name: 'GST Calculator',
    description: 'Calculate GST-inclusive and GST-exclusive amounts instantly. Essential for recording accurate double-entry journal entries.',
    icon: (
      <svg className="w-6 h-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
      </svg>
    ),
  },
  {
    href: '/tools/profit-loss-statement-generator',
    name: 'Profit & Loss Generator',
    description: 'Generate professional P&L statements from your income and expense accounts — the output of double-entry bookkeeping.',
    icon: (
      <svg className="w-6 h-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    href: '/tools/bas-preparation-checklist',
    name: 'BAS Preparation Checklist',
    description: 'Step-by-step checklist for preparing your BAS. Double-entry makes every GST figure verifiable and audit-ready.',
    icon: (
      <svg className="w-6 h-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    href: '/tools/tax-estimator',
    name: 'Tax Estimator',
    description: 'Estimate your income tax and super obligations based on your revenue and expense accounts from your double-entry records.',
    icon: (
      <svg className="w-6 h-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const relatedGuides = [
  {
    href: '/guides/bookkeeping-basics',
    name: 'Bookkeeping Basics',
    description: 'Foundational bookkeeping concepts including single vs double-entry, journals, ledgers, and chart of accounts setup for freelancers.',
  },
  {
    href: '/guides/gst-for-freelancers',
    name: 'GST for Freelancers',
    description: 'Complete GST guide covering registration thresholds, BAS lodgement, input tax credits, and how to record GST using double-entry.',
  },
  {
    href: '/guides/tax-guide-freelancers',
    name: 'Tax Guide for Freelancers',
    description: 'Income tax, deductions, PAYG, and financial reporting requirements for Australian sole traders and freelancers.',
  },
];

export default function DoubleEntryBookkeepingGlossaryPage() {
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
            <span className="text-white">Double-Entry Bookkeeping</span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            Glossary &mdash; Accounting
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Double-Entry Bookkeeping{' '}
            <span className="bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent">
              Explained for Freelancers
            </span>
          </h1>

          {/* Summary */}
          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            Every transaction has two sides &mdash; a debit and a credit. Double-entry bookkeeping is the 500-year-old system that keeps the world&apos;s finances in balance, from multinational corporations to one-person freelance businesses. This guide breaks down how it works, why it matters for Australian freelancers, how to read debits and credits without confusion, and how modern invoicing software handles it all for you automatically.
          </p>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>15 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>ATO 2025-26 Rules Covered</span>
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
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center text-violet-400 text-xs font-bold">2</span>
              <div>
                <p className="text-white font-medium text-sm">Two Entries Per Transaction</p>
                <p className="text-gray-400 text-sm">Every transaction records a debit and a credit of equal value</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center text-violet-400 text-xs font-bold">1494</span>
              <div>
                <p className="text-white font-medium text-sm">Year Codified</p>
                <p className="text-gray-400 text-sm">Luca Pacioli published the system &mdash; still used 530+ years later</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center text-violet-400 text-xs font-bold">A=L+E</span>
              <div>
                <p className="text-white font-medium text-sm">The Accounting Equation</p>
                <p className="text-gray-400 text-sm">Assets = Liabilities + Equity &mdash; must always balance</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center text-violet-400 text-xs font-bold">5</span>
              <div>
                <p className="text-white font-medium text-sm">Account Types</p>
                <p className="text-gray-400 text-sm">Assets, Liabilities, Equity, Income, Expenses</p>
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

        {/* Section 1: What Is Double-Entry Bookkeeping? */}
        <section id="what-is-double-entry">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold">1</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">What Is Double-Entry Bookkeeping?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Double-entry bookkeeping is an accounting method where <strong className="text-white">every financial transaction is recorded in at least two accounts &mdash; one as a debit and one as a credit</strong>. The total value of all debits must always equal the total value of all credits. This creates a self-balancing system that catches errors automatically and provides a complete picture of your financial position at any point in time.
            </p>
            <p className="text-gray-300 leading-relaxed">
              When a client pays you $5,000, two things happen simultaneously: your bank account <em>increases</em> by $5,000 (a debit to an asset account) and your revenue <em>increases</em> by $5,000 (a credit to an income account). Both sides of the equation move together. If they don&apos;t, something is wrong &mdash; and you know immediately.
            </p>
            <p className="text-gray-300 leading-relaxed">
              This system dates back to <strong className="text-white">1494, when the Italian mathematician Luca Pacioli</strong> published <em>Summa de Arithmetica</em>, which included the first written description of double-entry bookkeeping. Venetian merchants had been using it for centuries before that. Over 530 years later, every listed company, every bank, every government, and every accounting software package in the world still uses this same fundamental system. It has endured because nothing better has been invented.
            </p>
            <p className="text-gray-300 leading-relaxed">
              The foundation of double-entry is the <strong className="text-white">accounting equation</strong>:
            </p>

            <div className="rounded-xl bg-violet-500/5 border border-violet-500/20 p-6 text-center">
              <p className="text-2xl md:text-3xl font-bold text-violet-400 mb-2">Assets = Liabilities + Equity</p>
              <p className="text-gray-400 text-sm">This equation must always be true. Every double-entry transaction keeps it in balance.</p>
            </div>

            <p className="text-gray-300 leading-relaxed">
              Why is double-entry the global standard? Because it is <strong className="text-white">self-balancing and self-checking</strong>. If you accidentally record a $1,000 expense as $10,000, your trial balance (the sum of all debits minus all credits) will not equal zero &mdash; flagging the error immediately. Single-entry bookkeeping has no such safety net. You could have a mistake hiding in your records for months without knowing it.
            </p>

            {/* Single-entry vs double-entry comparison */}
            <h3 className="text-xl font-semibold text-white mt-8 mb-4">Single-Entry vs Double-Entry Bookkeeping</h3>
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-700/50">
                      <th className="text-left p-4 text-gray-400 font-medium">Feature</th>
                      <th className="text-left p-4 text-gray-400 font-medium">Single-Entry</th>
                      <th className="text-left p-4 text-violet-400 font-medium">Double-Entry</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700/30">
                    {[
                      { feature: 'Accuracy', single: 'Prone to undetected errors', double: 'Self-balancing — errors flagged automatically' },
                      { feature: 'Error Detection', single: 'Manual review only', double: 'Trial balance catches mismatches instantly' },
                      { feature: 'Complexity', single: 'Simple — like a chequebook register', double: 'Moderate — requires understanding debits/credits' },
                      { feature: 'Financial Reporting', single: 'Income & expense summary only', double: 'Full P&L, balance sheet, cash flow statement' },
                      { feature: 'ATO Acceptance', single: 'Acceptable for sole traders under $10M', double: 'Accepted and preferred for all business types' },
                      { feature: 'Audit Readiness', single: 'Difficult — no cross-referencing', double: 'Built-in audit trail with linked entries' },
                      { feature: 'Scalability', single: 'Breaks down as transactions increase', double: 'Scales to any business size' },
                      { feature: 'Cost', single: 'Free (spreadsheet) to low', double: 'Free (software handles it) to moderate' },
                    ].map((row) => (
                      <tr key={row.feature}>
                        <td className="p-4 text-white font-medium">{row.feature}</td>
                        <td className="p-4 text-gray-400">{row.single}</td>
                        <td className="p-4 text-gray-300">{row.double}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="rounded-xl bg-violet-500/5 border border-violet-500/20 p-5 mt-6">
              <p className="text-violet-400 font-medium mb-2">The Practical Reality</p>
              <p className="text-gray-400 text-sm">
                If you use <em>any</em> modern invoicing or accounting software &mdash; InvoiceFlow, Xero, MYOB, QuickBooks &mdash; you are already using double-entry bookkeeping. The software creates the debits and credits for you every time you issue an invoice, record a payment, or log an expense. Understanding what happens under the hood helps you catch mistakes, communicate with your accountant, and make smarter financial decisions.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Debits and Credits Explained */}
        <section id="debits-and-credits">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold">2</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Debits and Credits Explained</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Debits and credits are the most confusing concept in accounting for beginners &mdash; but they don&apos;t need to be. Forget &quot;debit = money in&quot; or &quot;credit = money out.&quot; Those shortcuts will lead you astray. Here is how they actually work.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Every account has two sides: a <strong className="text-white">left side (debit)</strong> and a <strong className="text-white">right side (credit)</strong>. Whether a debit or credit <em>increases</em> or <em>decreases</em> the account depends on the <strong className="text-white">type of account</strong>.
            </p>

            {/* Debit/Credit rules */}
            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-emerald-500/20 p-5">
                <h4 className="text-emerald-400 font-semibold mb-3">Increase with DEBITS</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0" />
                    <span><strong className="text-gray-200">Asset</strong> accounts (bank, equipment, receivables)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0" />
                    <span><strong className="text-gray-200">Expense</strong> accounts (rent, software, insurance)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0" />
                    <span><strong className="text-gray-200">Drawings</strong> / Dividends (money taken out)</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-purple-500/20 p-5">
                <h4 className="text-purple-400 font-semibold mb-3">Increase with CREDITS</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-purple-400 flex-shrink-0" />
                    <span><strong className="text-gray-200">Liability</strong> accounts (GST collected, loans, payables)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-purple-400 flex-shrink-0" />
                    <span><strong className="text-gray-200">Income / Revenue</strong> accounts (service fees, sales)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-purple-400 flex-shrink-0" />
                    <span><strong className="text-gray-200">Capital / Equity</strong> accounts (owner&apos;s equity)</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* DEAD CLIC Mnemonic */}
            <div className="rounded-xl bg-gradient-to-br from-violet-500/10 to-purple-500/10 border border-violet-500/20 p-6 mt-6">
              <h4 className="text-xl font-bold text-white mb-4 text-center">The DEAD CLIC Mnemonic</h4>
              <p className="text-gray-400 text-sm text-center mb-6">The easiest way to remember which accounts increase with debits and which increase with credits.</p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="text-center">
                  <p className="text-3xl font-bold text-emerald-400 mb-3">DEAD</p>
                  <p className="text-sm text-gray-400 mb-1"><strong className="text-white">D</strong>ebits increase:</p>
                  <div className="space-y-1 text-sm">
                    <p className="text-emerald-300"><strong>E</strong>xpenses</p>
                    <p className="text-emerald-300"><strong>A</strong>ssets</p>
                    <p className="text-emerald-300"><strong>D</strong>ividends / Drawings</p>
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-purple-400 mb-3">CLIC</p>
                  <p className="text-sm text-gray-400 mb-1"><strong className="text-white">C</strong>redits increase:</p>
                  <div className="space-y-1 text-sm">
                    <p className="text-purple-300"><strong>L</strong>iabilities</p>
                    <p className="text-purple-300"><strong>I</strong>ncome</p>
                    <p className="text-purple-300"><strong>C</strong>apital / Equity</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 6 T-Account Examples */}
            <h3 className="text-xl font-semibold text-white mt-8 mb-4">6 Real Freelancer Transaction Examples</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              The best way to understand debits and credits is to see them in action. Here are six common freelancer transactions shown as T-account entries &mdash; the visual format accountants use to represent debits (left) and credits (right).
            </p>

            {/* Example 1: Client pays invoice */}
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 mb-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center">
                  <span className="text-violet-400 font-bold text-sm">1</span>
                </div>
                <h4 className="text-white font-semibold">Client Pays Your $5,500 Invoice (incl. GST)</h4>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 mb-3">
                <div className="rounded-lg bg-gray-900/60 p-4">
                  <p className="text-xs text-gray-500 mb-2 uppercase tracking-wide">Debit (Left)</p>
                  <p className="text-emerald-400 font-mono text-sm">Bank Account &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $5,500</p>
                  <p className="text-xs text-gray-500 mt-1">Asset increases &uarr;</p>
                </div>
                <div className="rounded-lg bg-gray-900/60 p-4">
                  <p className="text-xs text-gray-500 mb-2 uppercase tracking-wide">Credit (Right)</p>
                  <p className="text-purple-400 font-mono text-sm">Service Revenue &nbsp;&nbsp; $5,000</p>
                  <p className="text-purple-400 font-mono text-sm">GST Collected &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $500</p>
                  <p className="text-xs text-gray-500 mt-1">Income increases &uarr; / Liability increases &uarr;</p>
                </div>
              </div>
              <p className="text-gray-400 text-xs">Your bank goes up by $5,500. Revenue increases by $5,000. You owe the ATO $500 in GST.</p>
            </div>

            {/* Example 2: Buy laptop */}
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 mb-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center">
                  <span className="text-violet-400 font-bold text-sm">2</span>
                </div>
                <h4 className="text-white font-semibold">Buy a $2,200 Laptop for Business (incl. GST)</h4>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 mb-3">
                <div className="rounded-lg bg-gray-900/60 p-4">
                  <p className="text-xs text-gray-500 mb-2 uppercase tracking-wide">Debit (Left)</p>
                  <p className="text-emerald-400 font-mono text-sm">Equipment &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $2,000</p>
                  <p className="text-emerald-400 font-mono text-sm">GST Paid &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $200</p>
                  <p className="text-xs text-gray-500 mt-1">Asset increases &uarr; / Asset increases &uarr;</p>
                </div>
                <div className="rounded-lg bg-gray-900/60 p-4">
                  <p className="text-xs text-gray-500 mb-2 uppercase tracking-wide">Credit (Right)</p>
                  <p className="text-purple-400 font-mono text-sm">Bank Account &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $2,200</p>
                  <p className="text-xs text-gray-500 mt-1">Asset decreases &darr;</p>
                </div>
              </div>
              <p className="text-gray-400 text-xs">Your bank goes down by $2,200. You gain a $2,000 equipment asset and $200 in GST credits to claim back.</p>
            </div>

            {/* Example 3: Pay insurance */}
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 mb-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center">
                  <span className="text-violet-400 font-bold text-sm">3</span>
                </div>
                <h4 className="text-white font-semibold">Pay $1,100 Professional Indemnity Insurance (incl. GST)</h4>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 mb-3">
                <div className="rounded-lg bg-gray-900/60 p-4">
                  <p className="text-xs text-gray-500 mb-2 uppercase tracking-wide">Debit (Left)</p>
                  <p className="text-emerald-400 font-mono text-sm">Insurance Expense &nbsp; $1,000</p>
                  <p className="text-emerald-400 font-mono text-sm">GST Paid &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $100</p>
                  <p className="text-xs text-gray-500 mt-1">Expense increases &uarr; / Asset increases &uarr;</p>
                </div>
                <div className="rounded-lg bg-gray-900/60 p-4">
                  <p className="text-xs text-gray-500 mb-2 uppercase tracking-wide">Credit (Right)</p>
                  <p className="text-purple-400 font-mono text-sm">Bank Account &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $1,100</p>
                  <p className="text-xs text-gray-500 mt-1">Asset decreases &darr;</p>
                </div>
              </div>
              <p className="text-gray-400 text-xs">Bank decreases by $1,100. You record a $1,000 deductible expense and $100 GST credit for your next BAS.</p>
            </div>

            {/* Example 4: Receive bank loan */}
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 mb-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center">
                  <span className="text-violet-400 font-bold text-sm">4</span>
                </div>
                <h4 className="text-white font-semibold">Receive a $10,000 Business Loan</h4>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 mb-3">
                <div className="rounded-lg bg-gray-900/60 p-4">
                  <p className="text-xs text-gray-500 mb-2 uppercase tracking-wide">Debit (Left)</p>
                  <p className="text-emerald-400 font-mono text-sm">Bank Account &nbsp;&nbsp;&nbsp;&nbsp; $10,000</p>
                  <p className="text-xs text-gray-500 mt-1">Asset increases &uarr;</p>
                </div>
                <div className="rounded-lg bg-gray-900/60 p-4">
                  <p className="text-xs text-gray-500 mb-2 uppercase tracking-wide">Credit (Right)</p>
                  <p className="text-purple-400 font-mono text-sm">Business Loan &nbsp;&nbsp;&nbsp; $10,000</p>
                  <p className="text-xs text-gray-500 mt-1">Liability increases &uarr;</p>
                </div>
              </div>
              <p className="text-gray-400 text-xs">Your bank goes up by $10,000, but so does your debt. A = L + E remains balanced. No GST on loans.</p>
            </div>

            {/* Example 5: Pay yourself (drawings) */}
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 mb-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center">
                  <span className="text-violet-400 font-bold text-sm">5</span>
                </div>
                <h4 className="text-white font-semibold">Pay Yourself $3,000 (Owner&apos;s Drawings)</h4>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 mb-3">
                <div className="rounded-lg bg-gray-900/60 p-4">
                  <p className="text-xs text-gray-500 mb-2 uppercase tracking-wide">Debit (Left)</p>
                  <p className="text-emerald-400 font-mono text-sm">Owner&apos;s Drawings &nbsp;&nbsp; $3,000</p>
                  <p className="text-xs text-gray-500 mt-1">Equity decreases (contra-equity increases &uarr;)</p>
                </div>
                <div className="rounded-lg bg-gray-900/60 p-4">
                  <p className="text-xs text-gray-500 mb-2 uppercase tracking-wide">Credit (Right)</p>
                  <p className="text-purple-400 font-mono text-sm">Bank Account &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $3,000</p>
                  <p className="text-xs text-gray-500 mt-1">Asset decreases &darr;</p>
                </div>
              </div>
              <p className="text-gray-400 text-xs">This is not an expense &mdash; it is a withdrawal of equity. Your bank and your ownership stake in the business both decrease. No GST, no tax deduction.</p>
            </div>

            {/* Example 6: Write off bad debt */}
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 mb-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center">
                  <span className="text-violet-400 font-bold text-sm">6</span>
                </div>
                <h4 className="text-white font-semibold">Write Off a $2,200 Unpaid Invoice as Bad Debt (incl. GST)</h4>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 mb-3">
                <div className="rounded-lg bg-gray-900/60 p-4">
                  <p className="text-xs text-gray-500 mb-2 uppercase tracking-wide">Debit (Left)</p>
                  <p className="text-emerald-400 font-mono text-sm">Bad Debt Expense &nbsp;&nbsp; $2,000</p>
                  <p className="text-emerald-400 font-mono text-sm">GST Collected &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $200</p>
                  <p className="text-xs text-gray-500 mt-1">Expense increases &uarr; / Liability decreases &darr;</p>
                </div>
                <div className="rounded-lg bg-gray-900/60 p-4">
                  <p className="text-xs text-gray-500 mb-2 uppercase tracking-wide">Credit (Right)</p>
                  <p className="text-purple-400 font-mono text-sm">Accounts Receivable $2,200</p>
                  <p className="text-xs text-gray-500 mt-1">Asset decreases &darr;</p>
                </div>
              </div>
              <p className="text-gray-400 text-xs">The client will never pay. You remove the receivable, record the loss as a deductible expense, and reverse the GST liability you previously reported (adjustable on your next BAS).</p>
            </div>

            <div className="rounded-xl bg-violet-500/5 border border-violet-500/20 p-5 mt-6">
              <p className="text-violet-400 font-medium mb-2">The Golden Rule</p>
              <p className="text-gray-400 text-sm">
                For every transaction, total debits <strong className="text-gray-200">must</strong> equal total credits. If they don&apos;t, the entry is wrong. In Example 1, $5,500 debit = $5,000 + $500 credits. In Example 2, $2,000 + $200 debits = $2,200 credit. Every time, without exception.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: The Chart of Accounts & Double-Entry */}
        <section id="chart-of-accounts-and-double-entry">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold">3</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">The Chart of Accounts &amp; Double-Entry</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Double-entry bookkeeping does not work without a <strong className="text-white">chart of accounts (CoA)</strong> &mdash; the structured list of all accounts where transactions are recorded. Every debit and credit entry lands in a specific account within this chart. Understanding how accounts are organised and what their &quot;normal balances&quot; are is essential to using double-entry correctly.
            </p>

            {/* The 5 Account Types and Normal Balances */}
            <h3 className="text-xl font-semibold text-white mt-6 mb-4">The 5 Account Types and Their Normal Balances</h3>
            <div className="space-y-3">
              {[
                { type: 'Assets', range: '1000-1999', normal: 'Debit', colour: 'emerald', examples: 'Bank, equipment, accounts receivable, prepaid expenses' },
                { type: 'Liabilities', range: '2000-2999', normal: 'Credit', colour: 'red', examples: 'GST collected, loans, accounts payable, credit cards' },
                { type: 'Equity', range: '3000-3999', normal: 'Credit', colour: 'blue', examples: "Owner's equity, retained earnings, drawings (contra)" },
                { type: 'Income', range: '4000-4999', normal: 'Credit', colour: 'purple', examples: 'Service revenue, interest income, product sales' },
                { type: 'Expenses', range: '5000-6999', normal: 'Debit', colour: 'amber', examples: 'Rent, software, insurance, travel, depreciation' },
              ].map((account) => (
                <div key={account.type} className={`rounded-xl bg-gray-800/50 border border-${account.colour}-500/20 p-4 flex flex-col sm:flex-row sm:items-center gap-3`}>
                  <div className="flex items-center gap-3 min-w-[200px]">
                    <span className={`text-${account.colour}-400 font-mono text-xs bg-${account.colour}-500/10 px-2 py-1 rounded`}>{account.range}</span>
                    <span className="text-white font-medium">{account.type}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`text-xs px-2 py-0.5 rounded-full ${account.normal === 'Debit' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-purple-500/10 text-purple-400'}`}>
                      Normal: {account.normal}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm">{account.examples}</p>
                </div>
              ))}
            </div>

            {/* Practical Freelancer Chart of Accounts */}
            <h3 className="text-xl font-semibold text-white mt-8 mb-4">Practical Freelancer Chart of Accounts (15 Essential Accounts)</h3>
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-700/50">
                      <th className="text-left p-3 text-gray-400 font-medium">No.</th>
                      <th className="text-left p-3 text-gray-400 font-medium">Account Name</th>
                      <th className="text-left p-3 text-gray-400 font-medium">Type</th>
                      <th className="text-left p-3 text-gray-400 font-medium">Normal Balance</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700/30">
                    {[
                      { no: '1000', name: 'Business Bank Account', type: 'Asset', normal: 'Debit' },
                      { no: '1100', name: 'Accounts Receivable', type: 'Asset', normal: 'Debit' },
                      { no: '1200', name: 'GST Paid (Input Tax Credits)', type: 'Asset', normal: 'Debit' },
                      { no: '1300', name: 'Equipment', type: 'Asset', normal: 'Debit' },
                      { no: '2000', name: 'GST Collected', type: 'Liability', normal: 'Credit' },
                      { no: '2100', name: 'PAYG Withholding Payable', type: 'Liability', normal: 'Credit' },
                      { no: '2200', name: 'Credit Card', type: 'Liability', normal: 'Credit' },
                      { no: '3000', name: "Owner's Equity", type: 'Equity', normal: 'Credit' },
                      { no: '3100', name: "Owner's Drawings", type: 'Equity (Contra)', normal: 'Debit' },
                      { no: '4000', name: 'Service Revenue', type: 'Income', normal: 'Credit' },
                      { no: '4100', name: 'Interest Income', type: 'Income', normal: 'Credit' },
                      { no: '5000', name: 'Software & Subscriptions', type: 'Expense', normal: 'Debit' },
                      { no: '5100', name: 'Insurance', type: 'Expense', normal: 'Debit' },
                      { no: '5200', name: 'Professional Development', type: 'Expense', normal: 'Debit' },
                      { no: '5300', name: 'Home Office Expenses', type: 'Expense', normal: 'Debit' },
                    ].map((row) => (
                      <tr key={row.no}>
                        <td className="p-3 text-violet-400 font-mono">{row.no}</td>
                        <td className="p-3 text-white font-medium">{row.name}</td>
                        <td className="p-3 text-gray-400">{row.type}</td>
                        <td className="p-3">
                          <span className={`text-xs px-2 py-0.5 rounded-full ${row.normal === 'Debit' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-purple-500/10 text-purple-400'}`}>
                            {row.normal}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Transaction Flow Pipeline */}
            <h3 className="text-xl font-semibold text-white mt-8 mb-4">How a Transaction Flows Through the System</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Every transaction follows the same pipeline from initial entry to financial statements. Understanding this flow helps you see how double-entry creates a complete audit trail.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-4">
              {[
                { step: '1', title: 'Source Document', desc: 'Invoice, receipt, bank statement' },
                { step: '2', title: 'Journal Entry', desc: 'Record debits and credits' },
                { step: '3', title: 'Ledger', desc: 'Post to individual accounts' },
                { step: '4', title: 'Trial Balance', desc: 'Verify debits = credits' },
                { step: '5', title: 'Financial Statements', desc: 'P&L, Balance Sheet, Cash Flow' },
              ].map((item, idx) => (
                <div key={item.step} className="flex-1 flex flex-col items-center text-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold mb-2">{item.step}</div>
                  <p className="text-white text-sm font-medium mb-1">{item.title}</p>
                  <p className="text-gray-400 text-xs">{item.desc}</p>
                  {idx < 4 && (
                    <svg className="w-5 h-5 text-violet-500/40 mt-2 rotate-90 sm:rotate-0 hidden sm:block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  )}
                </div>
              ))}
            </div>

            <div className="rounded-xl bg-violet-500/5 border border-violet-500/20 p-5 mt-6">
              <p className="text-violet-400 font-medium mb-2">Journal Entry vs Ledger</p>
              <p className="text-gray-400 text-sm">
                A <strong className="text-gray-200">journal entry</strong> records a transaction chronologically &mdash; &quot;On 15 March, debit Bank $5,500, credit Revenue $5,000, credit GST Collected $500.&quot; The <strong className="text-gray-200">ledger</strong> then organises these entries by account, so you can see every transaction that affected your Bank account in one place, every Revenue entry in another, and so on. Modern accounting software maintains both automatically &mdash; you enter the transaction once and the software posts it everywhere.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Double-Entry for Australian Freelancers */}
        <section id="double-entry-australian-freelancers">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold">4</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Double-Entry for Australian Freelancers</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Do freelancers <em>actually</em> need double-entry bookkeeping? The short answer: <strong className="text-white">the ATO does not mandate it for sole traders with turnover under $10 million</strong>. You are legally permitted to use single-entry bookkeeping (a simple income and expense register). But &quot;legally permitted&quot; and &quot;best practice&quot; are not the same thing.
            </p>

            {/* When single-entry is sufficient */}
            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-gray-300 font-semibold mb-3">When Single-Entry Is Sufficient</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-gray-500 mt-0.5">&#8226;</span>
                    <span>Fewer than 50 transactions per month</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-500 mt-0.5">&#8226;</span>
                    <span>No inventory, equipment, or complex assets</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-500 mt-0.5">&#8226;</span>
                    <span>One income stream, limited expense categories</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-500 mt-0.5">&#8226;</span>
                    <span>Not registered for GST (under $75K turnover)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-500 mt-0.5">&#8226;</span>
                    <span>No plans to apply for business loans or finance</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-violet-500/20 p-5">
                <h4 className="text-violet-400 font-semibold mb-3">When You Need Double-Entry</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-violet-400 mt-0.5">&#8226;</span>
                    <span>Registered for GST (tracking GST Collected vs Paid)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-violet-400 mt-0.5">&#8226;</span>
                    <span>Own business equipment, vehicles, or other assets</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-violet-400 mt-0.5">&#8226;</span>
                    <span>Multiple income streams or client retainers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-violet-400 mt-0.5">&#8226;</span>
                    <span>Applying for loans (lenders want a balance sheet)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-violet-400 mt-0.5">&#8226;</span>
                    <span>Planning to grow, hire subcontractors, or convert to Pty Ltd</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* GST Recording in Double-Entry */}
            <h3 className="text-xl font-semibold text-white mt-8 mb-4">GST Recording in Double-Entry</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              GST is where double-entry really shines for Australian freelancers. Instead of manually tracking GST in a separate spreadsheet, double-entry builds it into every transaction automatically using two key accounts.
            </p>

            <div className="space-y-3">
              <div className="rounded-xl bg-gray-800/50 border border-violet-500/20 p-5">
                <h4 className="text-violet-400 font-semibold mb-2">GST Collected (Account 2000) &mdash; Liability</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Every time you charge GST on an invoice, the 10% GST component is credited to this account. It is a <strong className="text-gray-200">liability</strong> because that money is not yours &mdash; you are collecting it on behalf of the ATO. When you invoice a client $1,100 (incl. GST), $100 goes to GST Collected.
                </p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-violet-500/20 p-5">
                <h4 className="text-violet-400 font-semibold mb-2">GST Paid (Account 1200) &mdash; Asset</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Every time you pay GST on a business purchase, the GST component is debited to this account. It is an <strong className="text-gray-200">asset</strong> because it is money the ATO owes you (input tax credits). When you buy $550 of supplies (incl. GST), $50 goes to GST Paid.
                </p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-violet-500/20 p-5">
                <h4 className="text-violet-400 font-semibold mb-2">BAS Settlement</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  At the end of each BAS period (quarterly for most freelancers), you calculate: <strong className="text-gray-200">GST Collected minus GST Paid = Net GST Payable</strong>. If GST Collected is $3,000 and GST Paid is $800, you owe the ATO $2,200. You debit GST Collected $3,000, debit GST Paid $800 (clearing both accounts), and credit Bank $2,200. The settlement journal entry zeros out both GST accounts for the new quarter.
                </p>
              </div>
            </div>

            {/* Accountant expectations */}
            <div className="rounded-xl bg-violet-500/5 border border-violet-500/20 p-5 mt-6">
              <p className="text-violet-400 font-medium mb-2">What Your Accountant Expects</p>
              <p className="text-gray-400 text-sm">
                Most Australian accountants and tax agents prefer clients who use double-entry bookkeeping &mdash; even if the ATO does not mandate it. A <strong className="text-gray-200">trial balance from a double-entry system</strong> tells your accountant everything they need to prepare your tax return in minutes. Single-entry records require the accountant to reconstruct your financial position from scratch, which takes longer and costs you more. The Australian Accounting Standards Board (AASB) standards are all built on double-entry principles, so professional accounting inherently expects this system.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Common Mistakes & How to Avoid Them */}
        <section id="common-mistakes">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold">5</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Common Mistakes &amp; How to Avoid Them</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Double-entry bookkeeping is elegant when done correctly &mdash; but these six mistakes can quietly corrupt your records, throw off your BAS, and create costly problems at tax time. Each one is preventable.
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
                    <h4 className="text-white font-semibold mb-1">Unbalanced Entries</h4>
                    <p className="text-sm text-gray-400 leading-relaxed mb-2">
                      Recording a $1,000 debit but only a $900 credit, or forgetting the second entry entirely. This is the most fundamental error in double-entry and it breaks everything downstream &mdash; your trial balance will not reconcile, your balance sheet will be wrong, and your accountant will charge you to find the discrepancy.
                    </p>
                    <p className="text-sm text-emerald-400">
                      <strong>Solution:</strong> Always verify that total debits = total credits for every journal entry before posting. Use software that enforces balanced entries automatically &mdash; InvoiceFlow will not let you save an unbalanced transaction.
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
                    <h4 className="text-white font-semibold mb-1">Mixing Personal and Business Transactions</h4>
                    <p className="text-sm text-gray-400 leading-relaxed mb-2">
                      Using your business bank account to pay for personal groceries, Netflix, or gym memberships without recording them as Owner&apos;s Drawings. This inflates your business expenses, understates your equity, and can trigger ATO audit flags if personal expenses are claimed as deductions.
                    </p>
                    <p className="text-sm text-emerald-400">
                      <strong>Solution:</strong> Use a separate bank account for business. Any personal spending from the business account must be debited to Owner&apos;s Drawings (3100), not an expense account. Better yet, don&apos;t use the business account for personal purchases at all.
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
                    <h4 className="text-white font-semibold mb-1">Wrong Account Classification</h4>
                    <p className="text-sm text-gray-400 leading-relaxed mb-2">
                      Recording a laptop purchase as an expense instead of an asset (equipment), or classifying Owner&apos;s Drawings as a salary expense. Misclassification distorts your financial statements &mdash; your P&amp;L shows incorrect profit, your balance sheet shows wrong asset values, and your tax return may over- or under-state deductions.
                    </p>
                    <p className="text-sm text-emerald-400">
                      <strong>Solution:</strong> Items over $300 used for more than one year are generally assets, not expenses (unless you qualify for the instant asset write-off). Payments to yourself as a sole trader are drawings, not wages. When in doubt, check the ATO&apos;s classification guidance or ask your accountant.
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
                    <h4 className="text-white font-semibold mb-1">Forgetting GST Entries</h4>
                    <p className="text-sm text-gray-400 leading-relaxed mb-2">
                      Recording the total invoice amount to revenue without separating the GST component, or recording a business purchase as one lump sum without extracting the GST paid. This means your GST Collected and GST Paid accounts are incomplete, and your BAS figures will be wrong &mdash; potentially leading to underpayment penalties or missed input tax credits.
                    </p>
                    <p className="text-sm text-emerald-400">
                      <strong>Solution:</strong> Every GST-inclusive transaction should be split: the GST-exclusive amount goes to the income or expense account, and the GST component goes to GST Collected (for sales) or GST Paid (for purchases). To calculate: GST = Total &divide; 11. Use InvoiceFlow&apos;s built-in GST calculator to split automatically.
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
                    <h4 className="text-white font-semibold mb-1">Not Reconciling Regularly</h4>
                    <p className="text-sm text-gray-400 leading-relaxed mb-2">
                      Going months without comparing your books to your bank statements. Small errors compound over time &mdash; a missed deposit here, a duplicated expense there. By the time you reconcile at EOFY, you could have dozens of unexplained discrepancies that take hours to untangle.
                    </p>
                    <p className="text-sm text-emerald-400">
                      <strong>Solution:</strong> Reconcile your bank account weekly (15 minutes) or at minimum monthly. Match every transaction in your books to the corresponding bank statement entry. Any discrepancy should be investigated immediately, not left for later.
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
                    <h4 className="text-white font-semibold mb-1">Incorrect Closing Entries</h4>
                    <p className="text-sm text-gray-400 leading-relaxed mb-2">
                      Not closing income and expense accounts at the end of the financial year, or closing them to the wrong equity account. Income and expense accounts are <em>temporary</em> &mdash; they track activity for one financial year only. At 30 June, their balances must be transferred to Retained Earnings (or Owner&apos;s Equity for sole traders) so they start the new year at zero.
                    </p>
                    <p className="text-sm text-emerald-400">
                      <strong>Solution:</strong> At EOFY, create closing journal entries: debit all income accounts to zero (crediting the balances to Retained Earnings), and credit all expense accounts to zero (debiting the balances to Retained Earnings). Most accounting software handles this automatically during the year-end process.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Trial Balance Checklist */}
            <div className="rounded-xl bg-violet-500/5 border border-violet-500/20 p-5 mt-6">
              <p className="text-violet-400 font-medium mb-3">Balanced Trial Balance Checklist</p>
              <ul className="space-y-2 text-sm text-gray-400">
                {[
                  'Total debits = Total credits (if not, an entry is unbalanced)',
                  'All asset accounts have debit balances (except contra accounts like Accumulated Depreciation)',
                  'All liability accounts have credit balances',
                  'All income accounts have credit balances',
                  'All expense accounts have debit balances',
                  'GST Collected and GST Paid balances match your BAS working papers',
                  'Bank account balance matches your bank statement after reconciliation',
                  'No accounts have unexpected negative balances',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-violet-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
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
              You should not need an accounting degree to keep your books balanced. InvoiceFlow handles double-entry bookkeeping <strong className="text-white">under the hood</strong>, so you get all the benefits &mdash; self-balancing records, GST accuracy, audit-ready data &mdash; without writing a single journal entry.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-violet-500/20 p-5">
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">Automatic Double-Entry</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Every invoice you create automatically generates the correct journal entries &mdash; debiting Accounts Receivable and crediting Revenue and GST Collected. When a payment is received, Bank is debited and Receivable is credited. You never touch a T-account.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-violet-500/20 p-5">
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">GST Split on Every Transaction</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  InvoiceFlow automatically separates the GST component from every invoice and expense. Your GST Collected and GST Paid accounts are always accurate &mdash; so your BAS figures are ready to go without manual calculations or spreadsheet reconciliation.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-violet-500/20 p-5">
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">Real-Time Trial Balance</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  See your trial balance at any time &mdash; not just at EOFY. Every debit and credit is tracked in real time, so you always know if your books are balanced. Discrepancies are flagged instantly instead of hiding for months.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-violet-500/20 p-5">
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">Accountant-Ready Exports</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Export a clean trial balance, general ledger, or transaction journal in standard formats (CSV, PDF). Your accountant receives pre-categorised, double-entry data that maps directly to ATO tax return labels &mdash; which means faster preparation and lower fees for you.
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-violet-500/5 border border-violet-500/20 p-5 mt-6">
              <p className="text-violet-400 font-medium mb-2">Double-Entry Without the Complexity</p>
              <p className="text-gray-400 text-sm">
                The entire point of InvoiceFlow is to give freelancers <strong className="text-gray-200">the accuracy and power of double-entry bookkeeping without requiring you to understand debits and credits</strong>. You create an invoice, record a payment, log an expense &mdash; and the software creates the correct journal entries, maintains your ledger, and keeps your trial balance in check. All you see is a clean dashboard. All your accountant sees is perfectly structured data.
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
              { href: '/glossary/chart-of-accounts', label: 'Chart of Accounts' },
              { href: '/glossary/balance-sheet', label: 'Balance Sheet' },
              { href: '/glossary/profit-and-loss', label: 'Profit & Loss' },
              { href: '/glossary/accounts-receivable', label: 'Accounts Receivable' },
              { href: '/glossary/accounts-payable', label: 'Accounts Payable' },
              { href: '/glossary/gst', label: 'GST' },
              { href: '/glossary/bas', label: 'BAS' },
              { href: '/glossary/depreciation', label: 'Depreciation' },
              { href: '/glossary/bank-reconciliation', label: 'Bank Reconciliation' },
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
        <p className="text-gray-400 text-center mb-8">Free tools to help you apply double-entry bookkeeping principles to your freelance business.</p>
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
        <p className="text-gray-400 text-center mb-8">In-depth guides on bookkeeping, GST, and financial management for Australian freelancers.</p>
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
            Double-Entry Bookkeeping on Autopilot &mdash; Start Free
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            InvoiceFlow handles debits, credits, GST splits, and trial balances automatically for Australian freelancers. Create an invoice and your double-entry journal writes itself. No accounting degree required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button>Start Free &mdash; No Card Required</Button>
            </Link>
            <Link href="/tools/gst-calculator">
              <Button variant="secondary">Try the GST Calculator</Button>
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
