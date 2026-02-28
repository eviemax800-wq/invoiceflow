import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Bookkeeping: Complete Guide for Australian Freelancers & Sole Traders — InvoiceFlow',
  description:
    'What is bookkeeping? Learn how to do bookkeeping as a sole trader in Australia — ATO record-keeping requirements, cash vs accrual basis, essential tasks (weekly, monthly, quarterly, annual), common mistakes, and how invoicing software simplifies bookkeeping for freelancers.',
  keywords: [
    'bookkeeping for freelancers australia',
    'sole trader bookkeeping',
    'freelance bookkeeping basics',
    'how to do bookkeeping as a sole trader',
    'bookkeeping requirements australia',
    'ATO record keeping sole trader',
    'cash basis vs accrual basis',
    'bookkeeping methods freelancers',
    'freelance bookkeeping mistakes',
    'bookkeeping software freelancers australia',
    'sole trader record keeping requirements',
    'bookkeeping checklist freelancer',
  ],
  alternates: { canonical: '/glossary/bookkeeping' },
  openGraph: {
    title: 'Bookkeeping: Complete Guide for Australian Freelancers & Sole Traders — InvoiceFlow',
    description:
      'Everything you need to know about bookkeeping as an Australian freelancer: ATO requirements, what records to keep, bookkeeping methods, essential tasks, common mistakes, and how InvoiceFlow simplifies the process.',
    url: 'https://invoiceflow-teal.vercel.app/glossary/bookkeeping',
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
    { '@type': 'ListItem', position: 3, name: 'Bookkeeping', item: `${BASE_URL}/glossary/bookkeeping` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is bookkeeping in simple terms?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bookkeeping is the systematic recording of all financial transactions in your business. Every time money comes in (client payments, sales) or goes out (expenses, tax, supplies), bookkeeping captures that transaction with the date, amount, and category. It is the foundation of your financial records — without accurate bookkeeping, you cannot prepare a tax return, lodge a BAS, track profitability, or make informed business decisions. Bookkeeping is different from accounting: bookkeeping records the transactions, while accounting interprets and reports on them.',
      },
    },
    {
      '@type': 'Question',
      name: 'What records does the ATO require sole traders to keep?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The ATO requires sole traders to keep records of all business income (every invoice you issue), all business expenses (receipts for purchases, subscriptions, supplies), bank statements for all business accounts, BAS records if registered for GST, PAYG instalment records, motor vehicle logbooks (if claiming car expenses via the logbook method), and home office records (hours worked from home or actual expense calculations). Records must be kept for at least 5 years from the date you lodge your tax return. The ATO accepts digital records — you do not need to keep paper copies if you have clear digital versions.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should freelancers use cash basis or accrual basis bookkeeping?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most Australian freelancers with turnover under $10 million can choose cash basis bookkeeping, and it is usually the simpler option. Cash basis records income when you actually receive payment and expenses when you actually pay them. Accrual basis records income when you invoice (even if the client has not paid yet) and expenses when you receive a bill (even if you have not paid it yet). Cash basis is simpler, gives a clearer picture of actual money in your bank, and avoids paying GST on invoices you have not been paid for yet. Accrual gives a more accurate picture of earned revenue and obligations but is more complex to manage.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does bookkeeping cost for a freelancer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There are three main options with different costs: DIY bookkeeping costs $0 in fees but typically takes 2-5 hours per week of your time; hiring a bookkeeper costs $50-$80 per hour (most freelancers spend $200-$500 per month); using bookkeeping or invoicing software costs $0-$50 per month depending on the platform. For most freelancers starting out, a combination of invoicing software (like InvoiceFlow) for income tracking and a simple spreadsheet or accounting app for expenses is the most cost-effective approach. As your business grows and transactions increase, hiring a bookkeeper becomes worthwhile because the time you save can be spent on billable work.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does InvoiceFlow help with bookkeeping?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'InvoiceFlow automates the most time-consuming parts of bookkeeping for freelancers: (1) Every invoice you create is automatically recorded as an income entry with date, amount, client, and GST breakdown, (2) Payment tracking shows you exactly what has been paid, what is pending, and what is overdue, (3) GST calculations are built into every invoice so your BAS figures are always ready, (4) BAS-ready reports summarise your GST collected and paid for each quarter, (5) Expense categorisation helps you organise deductible expenses, and (6) Receipt storage keeps digital copies of receipts attached to the right transactions. Instead of spending hours on manual data entry, InvoiceFlow turns your invoicing workflow into your bookkeeping foundation.',
      },
    },
  ],
};

const tocItems = [
  { id: 'what-is-bookkeeping', label: '1. What Is Bookkeeping?' },
  { id: 'records-freelancers-need', label: '2. What Records Do Freelancers Need to Keep?' },
  { id: 'bookkeeping-methods', label: '3. Bookkeeping Methods for Freelancers' },
  { id: 'essential-tasks', label: '4. Essential Bookkeeping Tasks' },
  { id: 'common-mistakes', label: '5. Common Bookkeeping Mistakes Freelancers Make' },
  { id: 'simplified-bookkeeping', label: '6. Simplified Bookkeeping with InvoiceFlow' },
];

const relatedTools = [
  {
    href: '/tools/profit-and-loss-generator',
    name: 'Profit & Loss Generator',
    description: 'Generate a professional P&L statement from your income and expenses — essential for understanding your business health.',
    icon: (
      <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    href: '/tools/bas-preparation-checklist',
    name: 'BAS Preparation Checklist',
    description: 'Step-by-step checklist to prepare your BAS accurately — covers GST, PAYG, and all the labels you need to complete.',
    icon: (
      <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    href: '/tools/tax-deduction-finder',
    name: 'Tax Deduction Finder',
    description: 'Discover every tax deduction you can claim as an Australian freelancer — stop leaving money on the table.',
    icon: (
      <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
  {
    href: '/tools/freelance-business-scorecard',
    name: 'Freelance Business Scorecard',
    description: 'Score your freelance business health across revenue, expenses, savings, and compliance — find your blind spots.',
    icon: (
      <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
];

const relatedGuides = [
  {
    href: '/guides/tax-guide-freelancers',
    name: 'Tax Guide for Freelancers',
    description: 'Income tax, deductions, BAS, and everything else you need to know as an Australian sole trader.',
  },
  {
    href: '/guides/gst-for-freelancers',
    name: 'GST for Freelancers',
    description: 'When to register, how to charge GST, BAS lodgement, and common GST mistakes to avoid.',
  },
  {
    href: '/guides/eofy-guide',
    name: 'EOFY Guide for Freelancers',
    description: 'End of financial year checklist — reconciliation, deductions, lodgement deadlines, and tax planning.',
  },
];

export default function BookkeepingGlossaryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative px-4 pt-20 pb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-teal-500/10 to-cyan-500/10 blur-3xl" />
        <div className="relative max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/glossary" className="hover:text-white transition-colors">Glossary</Link>
            <span>/</span>
            <span className="text-white">Bookkeeping</span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            Glossary &mdash; Financial Reporting
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Bookkeeping{' '}
            <span className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent">
              Explained for Freelancers
            </span>
          </h1>

          {/* Summary */}
          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            Bookkeeping is the foundation of every financially healthy freelance business. It&apos;s the systematic recording of every dollar in and every dollar out &mdash; and the ATO requires you to do it. This guide covers what bookkeeping actually involves, what records you must keep, which methods work best for freelancers, and how to avoid the mistakes that cost sole traders money.
          </p>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>14 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>ATO-Accurate 2025-26</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
              </svg>
              <span>Updated March 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* In a Nutshell */}
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <div className="rounded-2xl bg-gradient-to-br from-cyan-500/10 to-teal-500/10 border border-cyan-500/20 p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-white">In a Nutshell</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-xs font-bold">5yr</span>
              <div>
                <p className="text-white font-medium text-sm">ATO Record Retention</p>
                <p className="text-gray-400 text-sm">You must keep all business records for at least 5 years from lodgement</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-xs font-bold">2-5h</span>
              <div>
                <p className="text-white font-medium text-sm">DIY Bookkeeping Time</p>
                <p className="text-gray-400 text-sm">Hours per week most freelancers spend on bookkeeping without software</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-xs font-bold">$10M</span>
              <div>
                <p className="text-white font-medium text-sm">Cash Basis Threshold</p>
                <p className="text-gray-400 text-sm">Freelancers under $10M turnover can use the simpler cash basis method</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-xs font-bold">67c</span>
              <div>
                <p className="text-white font-medium text-sm">Home Office Fixed Rate</p>
                <p className="text-gray-400 text-sm">Per hour deduction for working from home (revised fixed rate method 2025-26)</p>
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
                className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors text-sm py-1"
              >
                <svg className="w-4 h-4 text-cyan-500/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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

        {/* Section 1: What Is Bookkeeping? */}
        <section id="what-is-bookkeeping">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center text-white text-sm font-bold">1</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">What Is Bookkeeping?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Bookkeeping is the <strong className="text-white">systematic recording of all financial transactions</strong> in your business. Every time a client pays an invoice, every time you buy a subscription, every time you pay for fuel or a business lunch &mdash; bookkeeping captures that transaction with the date, amount, category, and description. It is the financial diary of your business, and without it, everything else falls apart.
            </p>
            <p className="text-gray-300 leading-relaxed">
              There is an important distinction between <strong className="text-white">bookkeeping and accounting</strong> that many freelancers confuse. Bookkeeping is the <em>recording</em> of transactions &mdash; it is data entry, categorisation, and organisation. Accounting is the <em>interpretation and reporting</em> of that data &mdash; preparing financial statements, analysing profitability, tax planning, and lodging returns. Think of bookkeeping as writing down what happened; accounting is making sense of it.
            </p>
            <p className="text-gray-300 leading-relaxed">
              For freelancers in Australia, bookkeeping is not optional. The <strong className="text-white">ATO requires every sole trader to keep records of all business transactions for at least 5 years</strong> from the date you lodge the tax return that includes those transactions. Failure to maintain adequate records can result in penalties, estimated assessments (where the ATO guesses your income and it is rarely in your favour), and difficulty claiming legitimate deductions.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-cyan-500/20 p-5">
                <h4 className="text-cyan-400 font-semibold mb-2">Single-Entry Bookkeeping</h4>
                <p className="text-gray-400 text-sm">The simpler method &mdash; each transaction is recorded once, like a chequebook register. Income in one column, expenses in another. Suitable for most freelancers and sole traders with straightforward finances. This is essentially what you are doing when you track income and expenses in a spreadsheet.</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-gray-300 font-semibold mb-2">Double-Entry Bookkeeping</h4>
                <p className="text-gray-400 text-sm">Every transaction is recorded in two accounts &mdash; a debit and a credit. More complex but provides a complete financial picture and self-checking mechanism. Used by larger businesses, companies, and anyone who needs full financial statements. Most accounting software uses double-entry behind the scenes.</p>
              </div>
            </div>

            <div className="rounded-xl bg-cyan-500/5 border border-cyan-500/20 p-5 mt-6">
              <p className="text-cyan-400 font-medium mb-2">Why Freelancers Must Take Bookkeeping Seriously</p>
              <p className="text-gray-400 text-sm">
                As a sole trader, <strong className="text-gray-200">there is no employer, payroll team, or finance department handling your money</strong>. You are the business. If you do not record your income, you cannot accurately report it. If you do not record your expenses, you cannot claim deductions. If you do not track GST, your BAS will be wrong. Good bookkeeping is not just about compliance &mdash; it is the difference between running a business and guessing.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: What Records Do Freelancers Need to Keep? */}
        <section id="records-freelancers-need">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center text-white text-sm font-bold">2</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">What Records Do Freelancers Need to Keep?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              The ATO has clear requirements for what records sole traders must maintain. Missing even one category can result in <strong className="text-white">disallowed deductions, penalties, or a painful audit</strong>. Here is the complete list:
            </p>

            <div className="space-y-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                    <span className="text-cyan-400 font-bold text-sm">1</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Income Records</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Every invoice you issue, every payment you receive, and every source of business income must be recorded. This includes <strong className="text-gray-200">all invoices (paid and unpaid), payment receipts, bank deposits, and any other income</strong> such as interest on your business account or government grants. If you use invoicing software, this is largely automated &mdash; every invoice created is a record.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                    <span className="text-cyan-400 font-bold text-sm">2</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Expense Records</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Keep receipts for <strong className="text-gray-200">every business expense, regardless of amount</strong>. This includes software subscriptions, office supplies, professional development, insurance, phone bills, internet, travel, meals (business-related), and any other cost of running your business. Digital photos of receipts are acceptable &mdash; use an app to photograph and store them immediately after purchase.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                    <span className="text-cyan-400 font-bold text-sm">3</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Bank Statements</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Retain statements for all business bank accounts and credit cards. These serve as a <strong className="text-gray-200">cross-reference for your income and expense records</strong> and are essential for bank reconciliation. If you use a dedicated business account (which you should), your statements become a clean audit trail of every business transaction.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                    <span className="text-cyan-400 font-bold text-sm">4</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">BAS &amp; GST Records</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  If you are registered for GST, keep records of all <strong className="text-gray-200">GST collected on sales and GST paid on purchases</strong>. You need these to complete your BAS accurately each quarter (or monthly). This includes tax invoices received from suppliers, your own tax invoices issued to clients, and your BAS lodgement confirmations. Records should clearly show the GST component of each transaction.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                    <span className="text-cyan-400 font-bold text-sm">5</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Motor Vehicle &amp; Home Office Records</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  If claiming car expenses via the logbook method, you need a <strong className="text-gray-200">logbook maintained for at least 12 continuous weeks</strong> showing business vs personal use. For home office deductions, you can use the <strong className="text-gray-200">fixed rate method (67 cents per hour)</strong> &mdash; keep a record of hours worked from home &mdash; or the <strong className="text-gray-200">actual cost method</strong>, which requires records of all running expenses (electricity, internet, phone, depreciation of furniture) and the percentage of floor space used for business.
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-cyan-500/5 border border-cyan-500/20 p-5 mt-6">
              <p className="text-cyan-400 font-medium mb-2">Digital vs Paper Records</p>
              <p className="text-gray-400 text-sm">
                The ATO <strong className="text-gray-200">fully accepts digital records</strong> &mdash; you do not need to keep paper copies. A photograph of a receipt stored in a cloud app is just as valid as the paper original. However, digital records must be legible, complete, and stored securely with backups. The key requirement is that records are kept for <strong className="text-gray-200">at least 5 years from the date of lodgement</strong> of the tax return that includes those transactions. For a 2025-26 tax return lodged in October 2026, records must be kept until at least October 2031.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Bookkeeping Methods for Freelancers */}
        <section id="bookkeeping-methods">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center text-white text-sm font-bold">3</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Bookkeeping Methods for Freelancers</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              The first decision you need to make is whether to use <strong className="text-white">cash basis or accrual basis</strong> bookkeeping. For most freelancers, this choice has real implications for when you report income, when you owe GST, and how complex your books are.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-cyan-500/20 p-5">
                <h4 className="text-cyan-400 font-semibold mb-3">Cash Basis</h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-3">
                  Record income when the <strong className="text-gray-200">money hits your bank account</strong> and expenses when you <strong className="text-gray-200">actually pay them</strong>. Simple, intuitive, and closely mirrors your bank balance. Available to businesses with turnover under $10 million.
                </p>
                <div className="rounded-lg bg-gray-900/60 p-3 text-sm text-cyan-300">
                  Invoice sent 1 March. Client pays 28 March. Income recorded: 28 March.
                </div>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-teal-500/20 p-5">
                <h4 className="text-teal-400 font-semibold mb-3">Accrual Basis</h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-3">
                  Record income when you <strong className="text-gray-200">earn it (send the invoice)</strong> and expenses when you <strong className="text-gray-200">incur them (receive the bill)</strong>, regardless of when money changes hands. More accurate but more complex.
                </p>
                <div className="rounded-lg bg-gray-900/60 p-3 text-sm text-teal-300">
                  Invoice sent 1 March. Client pays 28 March. Income recorded: 1 March.
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 mt-6">
              <h4 className="text-white font-semibold mb-4">Which Is Right for You?</h4>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                <strong className="text-gray-200">Most freelancers should use cash basis.</strong> It is simpler, gives a clearer picture of actual money available, and &mdash; crucially &mdash; means you only owe GST on invoices you have actually been paid for. With accrual basis, you could owe GST on a $10,000 invoice that the client has not paid yet. Cash basis eliminates this timing trap.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Choose accrual basis if you need a more accurate picture of earned revenue (useful for businesses with long project timelines), if your accountant recommends it for your specific situation, or if you are required to (turnover over $10 million, though most freelancers are nowhere near this threshold).
              </p>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">DIY vs Bookkeeper vs Software</h3>
            <p className="text-gray-300 leading-relaxed">
              The second decision is <strong className="text-white">who does the bookkeeping</strong>. Each approach has trade-offs:
            </p>

            {/* Cost Comparison Table */}
            <div className="rounded-2xl border border-gray-700/50 overflow-hidden mt-4">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-800/80">
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Approach</th>
                    <th className="text-left text-sm font-medium text-cyan-400 px-6 py-4">Cost</th>
                    <th className="text-left text-sm font-medium text-teal-400 px-6 py-4">Time Investment</th>
                    <th className="text-left text-sm font-medium text-gray-400 px-6 py-4">Best For</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700/50">
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm font-medium">DIY (spreadsheet)</td>
                    <td className="px-6 py-3 text-cyan-400 font-medium text-sm">$0</td>
                    <td className="px-6 py-3 text-teal-400 text-sm">2-5 hrs/week</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">New freelancers, simple finances</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm font-medium">Bookkeeper</td>
                    <td className="px-6 py-3 text-cyan-400 font-medium text-sm">$200-$500/mo</td>
                    <td className="px-6 py-3 text-teal-400 text-sm">30 min/week</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">Busy freelancers, many transactions</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm font-medium">Software (e.g. InvoiceFlow)</td>
                    <td className="px-6 py-3 text-cyan-400 font-medium text-sm">$0-$50/mo</td>
                    <td className="px-6 py-3 text-teal-400 text-sm">30-60 min/week</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">Most freelancers &mdash; best value</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="rounded-xl bg-cyan-500/5 border border-cyan-500/20 p-5 mt-6">
              <p className="text-cyan-400 font-medium mb-2">The Smart Approach</p>
              <p className="text-gray-400 text-sm">
                For most Australian freelancers, the best starting point is <strong className="text-gray-200">invoicing software for income tracking + a simple spreadsheet or accounting app for expenses</strong>. As your business grows past $100K revenue or your transactions become complex (multiple income streams, employees, inventory), transition to a full bookkeeper. The key is to <strong className="text-gray-200">start with something</strong> &mdash; even a basic spreadsheet is infinitely better than doing nothing.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Essential Bookkeeping Tasks */}
        <section id="essential-tasks">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center text-white text-sm font-bold">4</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Essential Bookkeeping Tasks</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Good bookkeeping is not a once-a-year event &mdash; it is an <strong className="text-white">ongoing rhythm of weekly, monthly, quarterly, and annual tasks</strong>. Here is the complete checklist that keeps your finances clean and audit-ready:
            </p>

            <div className="space-y-4 mt-6">
              {/* Weekly */}
              <div className="rounded-xl bg-gray-800/50 border border-cyan-500/20 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Weekly Tasks</h3>
                  <span className="text-xs text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-full">~30 min</span>
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="flex items-start gap-2 text-sm text-gray-400">
                    <svg className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Record all income received this week</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-400">
                    <svg className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Record and categorise all expenses</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-400">
                    <svg className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>File and store all receipts (digital or paper)</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-400">
                    <svg className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Send any outstanding invoices</span>
                  </div>
                </div>
              </div>

              {/* Monthly */}
              <div className="rounded-xl bg-gray-800/50 border border-cyan-500/20 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Monthly Tasks</h3>
                  <span className="text-xs text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-full">~1-2 hours</span>
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="flex items-start gap-2 text-sm text-gray-400">
                    <svg className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Reconcile bank accounts against your records</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-400">
                    <svg className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Review cash flow &mdash; money in vs money out</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-400">
                    <svg className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Follow up on overdue invoices</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-400">
                    <svg className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Check that no receipts or transactions are missing</span>
                  </div>
                </div>
              </div>

              {/* Quarterly */}
              <div className="rounded-xl bg-gray-800/50 border border-cyan-500/20 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Quarterly Tasks</h3>
                  <span className="text-xs text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-full">~2-4 hours</span>
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="flex items-start gap-2 text-sm text-gray-400">
                    <svg className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Prepare and lodge BAS (if GST-registered)</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-400">
                    <svg className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Review PAYG instalment obligations</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-400">
                    <svg className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Review super contributions (if making voluntary payments)</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-400">
                    <svg className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Verify GST labels (G1, G11, 1A) are accurate</span>
                  </div>
                </div>
              </div>

              {/* Annual */}
              <div className="rounded-xl bg-gray-800/50 border border-cyan-500/20 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Annual Tasks (EOFY)</h3>
                  <span className="text-xs text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-full">~4-8 hours</span>
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="flex items-start gap-2 text-sm text-gray-400">
                    <svg className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Prepare profit &amp; loss statement for the year</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-400">
                    <svg className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Reconcile all bank accounts for the full year</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-400">
                    <svg className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Review and finalise all deductions</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-400">
                    <svg className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Prepare records for tax return lodgement</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-400">
                    <svg className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Update depreciation schedule for all assets</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-400">
                    <svg className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Archive records securely for the required 5-year period</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-cyan-500/5 border border-cyan-500/20 p-5 mt-6">
              <p className="text-cyan-400 font-medium mb-2">GST-Specific Bookkeeping for Registered Businesses</p>
              <p className="text-gray-400 text-sm">
                If you are registered for GST, every transaction needs a <strong className="text-gray-200">GST classification</strong>: GST-free, GST-inclusive, input-taxed, or not reportable. When preparing your BAS, you need to know the totals for key labels: <strong className="text-gray-200">G1 (total sales)</strong>, <strong className="text-gray-200">G11 (non-capital purchases)</strong>, and <strong className="text-gray-200">1A (GST on sales)</strong>. Proper bookkeeping means these numbers are ready when BAS time arrives &mdash; not a frantic scramble through receipts.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Common Bookkeeping Mistakes Freelancers Make */}
        <section id="common-mistakes">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center text-white text-sm font-bold">5</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Common Bookkeeping Mistakes Freelancers Make</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Even freelancers who try to keep good records make these mistakes. Each one can <strong className="text-white">cost you money through missed deductions, ATO penalties, or inaccurate financial decisions</strong>. Here are the ten most common:
            </p>

            <div className="space-y-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <span className="text-red-400 font-bold text-sm">1</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Mixing Personal and Business Expenses</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Using one bank account for everything makes it nearly impossible to separate business and personal spending. During an audit, the ATO can disallow deductions if you cannot clearly prove an expense was business-related. <strong className="text-gray-200">Solution: Open a dedicated business bank account</strong> and use it exclusively for business transactions. Pay yourself a regular transfer to your personal account.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <span className="text-red-400 font-bold text-sm">2</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Not Keeping Receipts Under $82.50</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  There is a common myth that you do not need receipts for expenses under $82.50 (GST-inclusive). While the ATO does not require a tax invoice to claim a GST credit for purchases of $82.50 or less, <strong className="text-gray-200">you still need evidence of the expense itself</strong>. A bank statement entry is not enough on its own. Keep a receipt, photograph, or note for every business expense. Small expenses add up &mdash; a $15 lunch, a $30 parking fee, a $50 USB adapter &mdash; and without records, you cannot claim them.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <span className="text-red-400 font-bold text-sm">3</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Forgetting to Record Cash Payments</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Cash payments do not appear on bank statements, so they are easy to forget. If a client pays you in cash and you do not record it, you are <strong className="text-gray-200">underreporting income</strong> &mdash; which is a serious offence. Conversely, if you pay for something in cash and do not record it, you miss a deduction. Record cash transactions immediately, and deposit business cash into your business account.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <span className="text-red-400 font-bold text-sm">4</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Not Reconciling Regularly</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Reconciliation means matching your recorded transactions against your bank statement to ensure nothing is missing, duplicated, or incorrect. Freelancers who skip this step often discover <strong className="text-gray-200">errors, missing transactions, or fraud</strong> months too late. Reconcile monthly at minimum &mdash; weekly if possible. It takes 10-15 minutes and prevents small errors from becoming big problems.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <span className="text-red-400 font-bold text-sm">5</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Incorrect GST Classification</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Not all expenses include GST, and not all income should have GST added. Common errors include <strong className="text-gray-200">claiming GST credits on GST-free items</strong> (like bank fees, government charges, and some insurance), adding GST to invoices for overseas clients (exports are GST-free), or miscategorising input-taxed supplies. Incorrect GST classification means your BAS is wrong, which can trigger an ATO review.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <span className="text-red-400 font-bold text-sm">6</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Missing PAYG Instalments</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  If the ATO sends you PAYG instalment notices, they expect you to set aside and pay income tax progressively throughout the year. Forgetting or ignoring these can result in <strong className="text-gray-200">interest charges and penalties</strong>, plus a large tax bill at year-end. Track your PAYG obligations as part of your quarterly bookkeeping.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <span className="text-red-400 font-bold text-sm">7</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Not Backing Up Digital Records</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Storing all your records on a single device with no backup is a disaster waiting to happen. A stolen laptop, a hard drive failure, or a ransomware attack can destroy years of records. <strong className="text-gray-200">Use cloud storage with automatic backups</strong> &mdash; Google Drive, Dropbox, iCloud, or your accounting software&apos;s built-in backup. The ATO requires you to keep records for 5 years; make sure they actually survive that long.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <span className="text-red-400 font-bold text-sm">8</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Waiting Until Tax Time to Do Everything</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  The &quot;shoebox method&quot; &mdash; throwing all receipts in a box and dealing with it at tax time &mdash; is the single most expensive bookkeeping mistake. Doing 12 months of bookkeeping in one sitting means you will <strong className="text-gray-200">miss receipts, forget context, miscategorise expenses, and overpay your accountant</strong> (because they charge by the hour and a mess takes longer to sort). Bookkeeping done weekly takes 30 minutes. Bookkeeping done annually takes days and costs you deductions.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <span className="text-red-400 font-bold text-sm">9</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Not Tracking Mileage and Travel</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  If you drive for business purposes &mdash; client meetings, site visits, supply runs &mdash; those kilometres are deductible. But without a record, you cannot claim them. The ATO allows <strong className="text-gray-200">72 cents per kilometre (2024-25)</strong> for up to 5,000 business kilometres, or the logbook method for higher usage. Either way, you need a record of each trip: date, destination, purpose, and kilometres. An app like the ATO&apos;s myDeductions makes this simple.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <span className="text-red-400 font-bold text-sm">10</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Not Separating GST from Expense Records</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  If you are GST-registered, you need to know the <strong className="text-gray-200">GST component of every expense</strong> to claim input tax credits on your BAS. Recording &quot;$110 for software&quot; is not enough &mdash; you need to record $100 expense + $10 GST. If you do not separate these, your BAS will be inaccurate, and you may under-claim GST credits (leaving money on the table) or over-claim (triggering ATO scrutiny).
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-cyan-500/5 border border-cyan-500/20 p-5 mt-6">
              <p className="text-cyan-400 font-medium mb-2">The Cost of Bad Bookkeeping</p>
              <p className="text-gray-400 text-sm">
                Every mistake above has a <strong className="text-gray-200">direct financial cost</strong>. Missed deductions mean you overpay tax. Incorrect GST means ATO interest and penalties. Missing records mean you cannot prove legitimate claims. A freelancer earning $100,000 who misses just 5% of deductible expenses overpays their tax by roughly <strong className="text-gray-200">$1,500-$2,000 per year</strong>. Good bookkeeping pays for itself many times over.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: Simplified Bookkeeping with InvoiceFlow */}
        <section id="simplified-bookkeeping">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center text-white text-sm font-bold">6</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Simplified Bookkeeping with InvoiceFlow</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              The hardest part of bookkeeping for freelancers is not the concept &mdash; it is the <strong className="text-white">consistency and manual effort</strong>. InvoiceFlow automates the most time-consuming parts, turning your invoicing workflow into the foundation of your bookkeeping system.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-cyan-500/20 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                  </div>
                  <h4 className="text-white font-semibold">Automatic Income Recording</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Every invoice you create in InvoiceFlow is automatically logged as an income record with the date, amount, client name, description, and GST breakdown. No manual data entry, no forgotten invoices, no scrambling at tax time. Your income bookkeeping is done the moment you send an invoice.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-cyan-500/20 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="text-white font-semibold">GST Calculations Built-In</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  GST is automatically calculated and separated on every invoice. You always know exactly how much GST you have collected, making BAS preparation straightforward. No more manually calculating 1/11th of every transaction or second-guessing whether an item is GST-free.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-cyan-500/20 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                    </svg>
                  </div>
                  <h4 className="text-white font-semibold">BAS-Ready Reports</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Pull up a summary of your GST collected and paid for any quarter with one click. InvoiceFlow organises your data in the format your BAS requires &mdash; total sales, GST on sales, and the figures you need for lodgement. BAS preparation goes from hours to minutes.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-cyan-500/20 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
                    </svg>
                  </div>
                  <h4 className="text-white font-semibold">Expense Categorisation</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Categorise your expenses with pre-built categories aligned to ATO deduction types. Software subscriptions, professional development, travel, insurance &mdash; each expense is tagged so your tax return preparation is fast and accurate.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-cyan-500/20 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h4 className="text-white font-semibold">Payment Tracking</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Know exactly which invoices are paid, pending, or overdue at any moment. Payment tracking is a core bookkeeping task that InvoiceFlow handles automatically &mdash; no manual status updates, no checking bank statements against invoices, no guessing.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-cyan-500/20 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13" />
                    </svg>
                  </div>
                  <h4 className="text-white font-semibold">Receipt Storage</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Attach digital receipts directly to transactions. No more lost paper receipts, no more photos scattered across your phone. Everything is stored in one place, linked to the right expense, and backed up in the cloud for the required 5-year retention period.
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-cyan-500/5 border border-cyan-500/20 p-5 mt-6">
              <p className="text-cyan-400 font-medium mb-2">Start with Invoicing, Build Your Bookkeeping Foundation</p>
              <p className="text-gray-400 text-sm">
                For most freelancers, <strong className="text-gray-200">invoicing is the single biggest source of bookkeeping data</strong>. Every invoice is an income record. Every payment is a receipt. Every GST calculation is a BAS input. By starting with proper invoicing software, you are automatically building the most important half of your bookkeeping system. Add basic expense tracking, and you have a <strong className="text-gray-200">complete, audit-ready financial record</strong> with minimal effort.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Related Tools */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-white mb-2 text-center">Related Tools</h2>
        <p className="text-gray-400 text-center mb-8">Free tools to help you manage bookkeeping and financial reporting.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {relatedTools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:border-cyan-500/50 hover:bg-gray-800/80 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-4">
                {tool.icon}
              </div>
              <h3 className="text-white font-medium mb-2 group-hover:text-cyan-400 transition-colors">{tool.name}</h3>
              <p className="text-sm text-gray-400">{tool.description}</p>
              <div className="mt-4 text-cyan-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
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
        <p className="text-gray-400 text-center mb-8">In-depth guides on tax, GST, and end-of-year planning for Australian freelancers.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {relatedGuides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group p-6 rounded-2xl bg-gray-800/40 border border-gray-700/40 hover:border-cyan-500/40 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h3 className="text-white font-medium mb-2 group-hover:text-cyan-400 transition-colors">{guide.name}</h3>
              <p className="text-sm text-gray-400">{guide.description}</p>
              <div className="mt-4 text-cyan-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
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
              <summary className="flex items-center justify-between cursor-pointer px-6 py-4 text-white font-medium hover:text-cyan-400 transition-colors">
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
        <div className="rounded-2xl bg-gradient-to-br from-cyan-500/10 to-teal-500/10 border border-cyan-500/20 p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Turn Your Invoicing Into Your Bookkeeping System
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            InvoiceFlow automatically records income, calculates GST, tracks payments, and generates BAS-ready reports. Stop doing bookkeeping manually &mdash; let your invoicing software do the heavy lifting.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button>Start Free &mdash; No Card Required</Button>
            </Link>
            <Link href="/tools/profit-and-loss-generator">
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
