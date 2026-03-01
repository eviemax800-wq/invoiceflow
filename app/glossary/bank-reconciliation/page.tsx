import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Bank Reconciliation: How to Reconcile Bank Statements for Freelancers (Australia) — InvoiceFlow',
  description:
    'What is bank reconciliation? Learn how to match your invoices and expenses against bank statements, catch errors, prevent fraud, and stay ATO-compliant. Step-by-step guide with templates for Australian freelancers.',
  keywords: [
    'bank reconciliation meaning',
    'how to reconcile bank statements',
    'bank reconciliation australia',
    'bank reconciliation freelancer',
    'bank reconciliation template',
    'bank reconciliation process',
    'bank reconciliation sole trader',
    'reconcile bank account',
    'bank reconciliation ATO',
    'bank reconciliation small business australia',
  ],
  alternates: { canonical: '/glossary/bank-reconciliation' },
  openGraph: {
    title: 'Bank Reconciliation: How to Reconcile Bank Statements for Freelancers (Australia) — InvoiceFlow',
    description:
      'Step-by-step bank reconciliation guide for Australian freelancers. Match invoices to payments, identify missing transactions, and keep ATO-compliant records. Includes worked examples and common issues.',
    url: 'https://invoiceflow-teal.vercel.app/glossary/bank-reconciliation',
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
    { '@type': 'ListItem', position: 3, name: 'Bank Reconciliation', item: `${BASE_URL}/glossary/bank-reconciliation` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How often should a freelancer reconcile their bank account?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'At a minimum, you should reconcile monthly. If you process a high volume of transactions (more than 50 per month), weekly reconciliation is recommended. Monthly reconciliation aligns with your bank statement cycle and helps catch errors before they compound. It also ensures your records are accurate before lodging your quarterly BAS. The ATO expects accurate financial records under Section 262A of the ITAA 1936, so regular reconciliation is not optional — it is a legal requirement.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between bank reconciliation and bookkeeping?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bookkeeping is the broader process of recording all financial transactions — invoices, expenses, receipts, and payments — into your accounting records. Bank reconciliation is a specific verification step within bookkeeping where you compare those recorded transactions against your actual bank statement to confirm they match. Think of bookkeeping as writing the story and bank reconciliation as fact-checking it against the source. You cannot do a proper reconciliation without bookkeeping records to compare against.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I do if my bank reconciliation does not balance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'First, check for timing differences — deposits or payments that have been recorded in your books but have not yet cleared the bank (or vice versa). Second, look for transposed numbers or data entry errors. Third, check for bank fees, interest charges, or direct debits that you may not have recorded. Fourth, verify that no duplicate entries exist. If you still cannot find the discrepancy, work backwards from the last period that did balance and check each transaction individually. Never simply adjust the difference to force a balance — the discrepancy always has a cause, and ignoring it can mask fraud or serious errors.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a separate business bank account for reconciliation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'While the ATO does not legally require sole traders to have a separate business bank account, it is strongly recommended. Mixing personal and business transactions makes reconciliation significantly harder and increases the risk of errors, missed deductions, and audit complications. With a dedicated business account, every transaction is business-related, making reconciliation straightforward. If you do use a mixed account, you must identify and separate business transactions from personal ones, applying private-use percentages where necessary — a time-consuming and error-prone process.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can bank reconciliation help during an ATO audit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. Regular bank reconciliation is one of the strongest defences during an ATO audit. It demonstrates that you have maintained accurate and verifiable financial records, as required under Section 262A of the ITAA 1936. Reconciled records show a clear audit trail from invoice to payment to bank deposit, making it easy to substantiate your reported income and claimed deductions. The ATO specifically looks for unexplained bank deposits and discrepancies between reported income and bank balances — reconciliation eliminates these red flags.',
      },
    },
  ],
};

const tocItems = [
  { id: 'what-is-bank-reconciliation', label: '1. What Is Bank Reconciliation?' },
  { id: 'how-to-reconcile', label: '2. How to Do a Bank Reconciliation' },
  { id: 'common-issues', label: '3. Common Reconciliation Issues' },
  { id: 'freelancer-reconciliation', label: '4. Bank Reconciliation for Freelancers' },
  { id: 'best-practices', label: '5. Best Practices' },
  { id: 'how-invoiceflow-helps', label: '6. How InvoiceFlow Helps' },
];

const relatedTools = [
  {
    href: '/tools/bas-lodgement-checklist',
    name: 'BAS Lodgement Checklist',
    description: 'Pre-lodgement checklist to ensure your BAS is accurate and your records are reconciled.',
    icon: (
      <svg className="w-6 h-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    href: '/tools/profit-loss-statement-generator',
    name: 'Profit & Loss Generator',
    description: 'Generate accurate P&L statements from your reconciled transaction data.',
    icon: (
      <svg className="w-6 h-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    href: '/tools/expense-tracker',
    name: 'Expense Tracker',
    description: 'Track and categorise business expenses to simplify your monthly reconciliation.',
    icon: (
      <svg className="w-6 h-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18v-.008zm-12 0h.008v.008H6v-.008z" />
      </svg>
    ),
  },
  {
    href: '/tools/freelance-tax-estimator',
    name: 'Freelance Tax Estimator',
    description: 'Estimate your income tax, Medicare levy, and PAYG from reconciled income figures.',
    icon: (
      <svg className="w-6 h-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const relatedGuides = [
  {
    href: '/guides/bookkeeping-basics',
    name: 'Bookkeeping Basics',
    description: 'Foundation guide to recording transactions, categorising expenses, and maintaining accurate books.',
  },
  {
    href: '/guides/bas-guide',
    name: 'BAS Guide',
    description: 'How to prepare and lodge your Business Activity Statement with reconciled, accurate data.',
  },
  {
    href: '/guides/tax-guide-freelancers',
    name: 'Tax Guide for Freelancers',
    description: 'Complete guide to income tax, deductions, and record-keeping obligations for sole traders.',
  },
];

export default function BankReconciliationGlossaryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative px-4 pt-20 pb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 via-emerald-500/10 to-teal-500/10 blur-3xl" />
        <div className="relative max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/glossary" className="hover:text-white transition-colors">Glossary</Link>
            <span>/</span>
            <span className="text-white">Bank Reconciliation</span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            Glossary &mdash; Accounting &amp; Bookkeeping
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Bank Reconciliation{' '}
            <span className="bg-gradient-to-r from-teal-500 to-emerald-500 bg-clip-text text-transparent">
              for Freelancers
            </span>
          </h1>

          {/* Summary */}
          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            The process of matching your accounting records against your bank statement to ensure every dollar is accounted for. Catches errors, identifies missing transactions, and keeps you ATO-compliant &mdash; because the ATO expects accurate records, not guesswork.
          </p>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>12 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>ATO-Compliant Guidance</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
              </svg>
              <span>Updated March 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* In a Nutshell */}
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <div className="rounded-2xl bg-gradient-to-br from-teal-500/10 to-emerald-500/10 border border-teal-500/20 p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-teal-500/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-white">In a Nutshell</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-teal-500/20 flex items-center justify-center text-teal-400 text-xs font-bold">42%</span>
              <div>
                <p className="text-white font-medium text-sm">Don&apos;t Reconcile Monthly</p>
                <p className="text-gray-400 text-sm">Nearly half of Australian small businesses skip monthly reconciliation</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-teal-500/20 flex items-center justify-center text-teal-400 text-xs font-bold">5yr</span>
              <div>
                <p className="text-white font-medium text-sm">ATO Retention Period</p>
                <p className="text-gray-400 text-sm">You must keep bank statements and reconciliation records for 5 years</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-teal-500/20 flex items-center justify-center text-teal-400 text-xs font-bold">262A</span>
              <div>
                <p className="text-white font-medium text-sm">ITAA 1936 Section</p>
                <p className="text-gray-400 text-sm">The legal requirement for accurate record-keeping in Australia</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-teal-500/20 flex items-center justify-center text-teal-400 text-xs font-bold">7</span>
              <div>
                <p className="text-white font-medium text-sm">Steps to Reconcile</p>
                <p className="text-gray-400 text-sm">A structured 7-step process from opening balance to confirmed closing balance</p>
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
                className="flex items-center gap-2 text-gray-400 hover:text-teal-400 transition-colors text-sm py-1"
              >
                <svg className="w-4 h-4 text-teal-500/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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

        {/* Section 1: What Is Bank Reconciliation? */}
        <section id="what-is-bank-reconciliation">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center text-white text-sm font-bold">1</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">What Is Bank Reconciliation?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Bank reconciliation is the process of <strong className="text-white">matching your accounting records &mdash; invoices sent, payments received, and expenses logged &mdash; against your actual bank statement</strong> to ensure they agree. It is one of the most fundamental accounting controls available to any business, regardless of size. If your books say you earned $15,000 last month but your bank shows $14,200 in deposits, reconciliation is how you find and explain the $800 difference.
            </p>
            <p className="text-gray-300 leading-relaxed">
              The purpose goes far beyond basic arithmetic. Reconciliation <strong className="text-white">catches data entry errors, identifies missing transactions, reveals unauthorised withdrawals, and prevents fraud</strong>. It is also the only reliable way to know your true cash position at any point in time. Without it, your profit and loss figures, BAS lodgements, and tax returns are based on assumptions rather than verified data.
            </p>
            <p className="text-gray-300 leading-relaxed">
              The industry standard is <strong className="text-white">monthly reconciliation</strong>, aligned with your bank statement cycle. However, high-volume businesses may reconcile weekly or even daily. The ATO expects accurate records under <strong className="text-white">Section 262A of the Income Tax Assessment Act 1936 (ITAA 1936)</strong>, which requires taxpayers to keep records that explain all transactions and enable their taxable income to be readily ascertained. Regular reconciliation is the most practical way to meet this obligation.
            </p>
            <p className="text-gray-300 leading-relaxed">
              For freelancers and sole traders, bank reconciliation is especially important because you typically lack the separation of duties that larger businesses rely on for internal controls. When you are the person issuing invoices, recording expenses, and accessing the bank account, reconciliation is your primary safeguard against errors and oversights going undetected.
            </p>
            <div className="rounded-xl bg-teal-500/5 border border-teal-500/20 p-5 mt-6">
              <p className="text-teal-400 font-medium mb-2">Key Distinction</p>
              <p className="text-gray-400 text-sm">
                Bank reconciliation is <strong className="text-gray-200">not the same as checking your bank balance</strong>. Your bank balance shows what the bank thinks you have. Your accounting records show what you think you have. Reconciliation confirms both sides agree &mdash; and when they don&apos;t, it tells you exactly where the discrepancy lies so you can investigate and correct it.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: How to Do a Bank Reconciliation */}
        <section id="how-to-reconcile">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center text-white text-sm font-bold">2</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">How to Do a Bank Reconciliation</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Follow this <strong className="text-white">7-step process</strong> to reconcile your bank account. Whether you use a spreadsheet, accounting software, or InvoiceFlow&apos;s built-in reconciliation tools, the logic is the same.
            </p>

            {/* Steps */}
            <div className="space-y-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-teal-500/20 p-5">
                <h4 className="text-teal-400 font-semibold mb-2 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-teal-500/20 flex items-center justify-center text-xs font-bold">1</span>
                  Get Your Bank Statement
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Download or obtain your bank statement for the reconciliation period (usually one calendar month). Most Australian banks provide PDF and CSV exports via online banking. CSV format is ideal if you&apos;re importing into accounting software.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-teal-500/20 p-5">
                <h4 className="text-teal-400 font-semibold mb-2 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-teal-500/20 flex items-center justify-center text-xs font-bold">2</span>
                  Compare the Opening Balance
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Verify that the opening balance on your bank statement matches the closing balance from your previous reconciliation. If this is your first reconciliation, confirm the opening balance matches the starting balance in your accounting records. Any discrepancy here means your previous reconciliation had an error.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-teal-500/20 p-5">
                <h4 className="text-teal-400 font-semibold mb-2 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-teal-500/20 flex items-center justify-center text-xs font-bold">3</span>
                  Match Deposits to Invoices and Income
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Go through each deposit on your bank statement and match it to a corresponding invoice payment or income entry in your records. Tick off each matched transaction. Look for partial payments, overpayments, or deposits you don&apos;t recognise.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-teal-500/20 p-5">
                <h4 className="text-teal-400 font-semibold mb-2 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-teal-500/20 flex items-center justify-center text-xs font-bold">4</span>
                  Match Withdrawals to Recorded Expenses
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Similarly, match each withdrawal, payment, or direct debit on your bank statement to a recorded expense in your books. Pay special attention to automatic payments, subscriptions, and bank fees that may not have been manually recorded.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-teal-500/20 p-5">
                <h4 className="text-teal-400 font-semibold mb-2 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-teal-500/20 flex items-center justify-center text-xs font-bold">5</span>
                  Identify Unmatched Items
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  After matching, review any remaining unmatched items on both sides. Common causes include: outstanding cheques not yet cleared, bank fees or interest not recorded, deposits in transit, direct debits you forgot to log, or merchant processing fees deducted from payments.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-teal-500/20 p-5">
                <h4 className="text-teal-400 font-semibold mb-2 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-teal-500/20 flex items-center justify-center text-xs font-bold">6</span>
                  Adjust Your Records
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  For each unmatched item, make the necessary adjustments. Add missing transactions to your books (e.g., bank fees you hadn&apos;t recorded). Correct any errors (wrong amounts, duplicate entries). Document every adjustment with a clear note explaining the reason.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-teal-500/20 p-5">
                <h4 className="text-teal-400 font-semibold mb-2 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-teal-500/20 flex items-center justify-center text-xs font-bold">7</span>
                  Confirm the Closing Balance Matches
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  After all adjustments, your adjusted book balance should match the bank statement closing balance (accounting for any legitimate timing differences like outstanding cheques). If it matches, your reconciliation is complete. If not, repeat steps 3&ndash;6 until you find the discrepancy.
                </p>
              </div>
            </div>

            {/* Worked Example */}
            <div className="rounded-2xl border border-teal-500/20 bg-gradient-to-br from-teal-900/10 to-emerald-900/10 p-6 mt-6">
              <h4 className="text-white font-semibold mb-4">Worked Example: February Reconciliation &mdash; Freelance Designer</h4>

              <div className="rounded-lg bg-gray-900/50 p-4 border border-gray-700/30 mb-4">
                <p className="text-teal-400 font-medium mb-3">Starting Position</p>
                <div className="text-sm font-mono space-y-1 text-gray-400">
                  <p>Bank statement opening balance (1 Feb): <span className="text-white">$8,450.00</span></p>
                  <p>Book balance (1 Feb): <span className="text-white">$8,450.00</span></p>
                  <p>Result: <span className="text-emerald-400 font-bold">Opening balances match</span></p>
                </div>
              </div>

              <div className="rounded-lg bg-gray-900/50 p-4 border border-gray-700/30 mb-4">
                <p className="text-teal-400 font-medium mb-3">Matching Transactions</p>
                <div className="text-sm font-mono space-y-1 text-gray-400">
                  <p>Deposits on bank statement: <span className="text-white">$12,300.00 (4 deposits)</span></p>
                  <p>Income recorded in books: <span className="text-white">$14,500.00 (5 invoices paid)</span></p>
                  <p>Withdrawals on bank statement: <span className="text-white">$6,820.00 (18 transactions)</span></p>
                  <p>Expenses recorded in books: <span className="text-white">$6,750.00 (16 transactions)</span></p>
                </div>
              </div>

              <div className="rounded-lg bg-gray-900/50 p-4 border border-gray-700/30 mb-4">
                <p className="text-teal-400 font-medium mb-3">Unmatched Items Found</p>
                <div className="text-sm font-mono space-y-1 text-gray-400">
                  <p>1. Invoice #047 ($2,200) &mdash; <span className="text-yellow-400">paid by client but not yet deposited (timing)</span></p>
                  <p>2. Bank account fee ($15) &mdash; <span className="text-yellow-400">not recorded in books</span></p>
                  <p>3. Stripe processing fee ($55) &mdash; <span className="text-yellow-400">deducted from deposit, not recorded</span></p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="rounded-lg bg-gray-900/50 border border-gray-700/30 p-4">
                  <p className="text-sm text-teal-400 font-medium mb-3">Bank Statement Closing Balance</p>
                  <div className="text-sm font-mono space-y-1 text-gray-400">
                    <p>Opening: <span className="text-white">$8,450.00</span></p>
                    <p>+ Deposits: <span className="text-white">$12,300.00</span></p>
                    <p>&minus; Withdrawals: <span className="text-white">$6,820.00</span></p>
                    <p className="pt-2 border-t border-gray-700/30">
                      Closing balance: <span className="text-teal-400 font-bold">$13,930.00</span>
                    </p>
                  </div>
                </div>
                <div className="rounded-lg bg-gray-900/50 border border-gray-700/30 p-4">
                  <p className="text-sm text-emerald-400 font-medium mb-3">Adjusted Book Balance</p>
                  <div className="text-sm font-mono space-y-1 text-gray-400">
                    <p>Opening: <span className="text-white">$8,450.00</span></p>
                    <p>+ Recorded income: <span className="text-white">$14,500.00</span></p>
                    <p>&minus; Recorded expenses: <span className="text-white">$6,750.00</span></p>
                    <p>&minus; Add bank fee: <span className="text-white">$15.00</span></p>
                    <p>&minus; Add Stripe fee: <span className="text-white">$55.00</span></p>
                    <p>&minus; Outstanding deposit: <span className="text-white">$2,200.00</span></p>
                    <p className="pt-2 border-t border-gray-700/30">
                      Adjusted balance: <span className="text-emerald-400 font-bold">$13,930.00</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-teal-500/20">
                <p className="text-sm text-gray-400">
                  <strong className="text-white">Outcome:</strong> After recording the $15 bank fee and $55 Stripe fee, and noting the $2,200 deposit in transit, both balances agree at <strong className="text-emerald-400">$13,930.00</strong>. The reconciliation is complete. The deposit in transit will be matched in next month&apos;s reconciliation when it clears.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Common Reconciliation Issues */}
        <section id="common-issues">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center text-white text-sm font-bold">3</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Common Reconciliation Issues</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Even experienced bookkeepers encounter reconciliation discrepancies. Understanding the most common issues helps you identify and resolve them quickly. Here are the eight issues that freelancers encounter most frequently.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-teal-500/20 p-5">
                <h4 className="text-teal-400 font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Timing Differences
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  The most common issue. Cheques written but not yet cashed, bank transfers initiated but not yet cleared, or deposits made after the bank&apos;s cut-off time. These transactions appear in your books but not on the bank statement (or vice versa). They are <strong className="text-gray-200">not errors</strong> &mdash; they resolve naturally in the next period.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-teal-500/20 p-5">
                <h4 className="text-teal-400 font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18v-.008zm-12 0h.008v.008H6v-.008z" />
                  </svg>
                  Unrecorded Bank Fees
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Monthly account fees, transaction fees, international transfer charges, and overdraft interest are deducted by the bank automatically. If you don&apos;t record these in your books, your records will always show a higher balance than the bank. Check your statement for <strong className="text-gray-200">every fee line item</strong>.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-teal-500/20 p-5">
                <h4 className="text-teal-400 font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                  Duplicate Entries
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Recording the same transaction twice &mdash; once when the invoice is paid and again when the deposit appears. This is especially common when importing bank feeds and also manually entering transactions. Your balance will appear inflated, and your income may be double-counted for BAS and tax purposes.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-teal-500/20 p-5">
                <h4 className="text-teal-400 font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185z" />
                  </svg>
                  GST Adjustments
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  If you record invoices inclusive of GST but your bank shows net amounts (after payment gateway fees), or if GST rounding creates small differences, these discrepancies accumulate over time. Ensure your GST treatment is <strong className="text-gray-200">consistent</strong> between your books and how transactions actually clear the bank.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-teal-500/20 p-5">
                <h4 className="text-teal-400 font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                  Personal vs Business Mixed
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Using one bank account for both personal and business transactions is the single biggest source of reconciliation headaches for freelancers. Every personal transaction must be identified and excluded, and shared expenses need private-use percentage calculations. A <strong className="text-gray-200">dedicated business account eliminates this entirely</strong>.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-teal-500/20 p-5">
                <h4 className="text-teal-400 font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                  </svg>
                  Foreign Currency Differences
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  If you invoice international clients in USD, GBP, or other currencies, the amount deposited in AUD will differ from the invoiced amount due to exchange rate fluctuations. You may also incur currency conversion fees. Record these as <strong className="text-gray-200">foreign exchange gains/losses</strong> and bank fees respectively.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-teal-500/20 p-5">
                <h4 className="text-teal-400 font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
                  </svg>
                  Forgotten Direct Debits
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Software subscriptions, insurance premiums, and other recurring direct debits are easy to forget when recording expenses. They silently debit your account each month. Set up <strong className="text-gray-200">recurring entries in your books</strong> for every active direct debit so they are never missed during reconciliation.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-teal-500/20 p-5">
                <h4 className="text-teal-400 font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                  </svg>
                  Merchant Processing Fees
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Payment gateways like Stripe, Square, and PayPal deduct their processing fees before depositing funds. If you invoice a client for $1,100 (inc. GST), Stripe might deposit $1,068.05 after its 2.9% + 30c fee. Record the full $1,100 as income and the $31.95 as a <strong className="text-gray-200">payment processing expense</strong>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Bank Reconciliation for Freelancers */}
        <section id="freelancer-reconciliation">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center text-white text-sm font-bold">4</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Bank Reconciliation for Freelancers</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              As a sole trader or freelancer, bank reconciliation is not just good practice &mdash; it is your <strong className="text-white">primary financial control mechanism</strong>. Without it, you are operating blind. Here is why it matters specifically for freelancers, and how to make it work with the reality of self-employment.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              {/* Card 1: ATO Audit Risk */}
              <div className="rounded-xl bg-gray-800/50 border border-teal-500/20 p-5">
                <h4 className="text-teal-400 font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                  ATO Audit Risk
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  The ATO uses data matching to compare your reported income against bank deposits, payment gateway records, and third-party data. If your tax return says you earned $80,000 but your bank received $95,000 in deposits, you will receive a &quot;please explain&quot; letter. <strong className="text-gray-200">Regular reconciliation ensures your reported figures match reality</strong> before the ATO notices discrepancies.
                </p>
              </div>

              {/* Card 2: Cash Flow Visibility */}
              <div className="rounded-xl bg-gray-800/50 border border-teal-500/20 p-5">
                <h4 className="text-teal-400 font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                  </svg>
                  Cash Flow Visibility
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Freelance income is irregular. You might have a $15,000 month followed by a $3,000 month. Without reconciliation, you don&apos;t know your <strong className="text-gray-200">true available cash</strong> &mdash; you only know what the bank says, which doesn&apos;t account for outstanding invoices, pending expenses, or tax obligations. Reconciliation gives you the real picture.
                </p>
              </div>

              {/* Card 3: BAS Accuracy */}
              <div className="rounded-xl bg-gray-800/50 border border-teal-500/20 p-5">
                <h4 className="text-teal-400 font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                  BAS Accuracy
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Your quarterly BAS reports GST collected and paid, plus PAYG instalments. If your records contain unreconciled errors &mdash; missed income, unrecorded expenses, duplicate entries &mdash; your BAS will be wrong. <strong className="text-gray-200">Reconciling before lodging each BAS</strong> is the simplest way to ensure accuracy and avoid penalties for incorrect reporting.
                </p>
              </div>

              {/* Card 4: Frequency Recommendation */}
              <div className="rounded-xl bg-gray-800/50 border border-teal-500/20 p-5">
                <h4 className="text-teal-400 font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                  </svg>
                  Recommended Frequency
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  <strong className="text-gray-200">Monthly minimum, weekly for high volume.</strong> If you process more than 50 transactions per month, weekly reconciliation prevents small errors from compounding into large, time-consuming discrepancies. A staggering <strong className="text-gray-200">42% of Australian small businesses</strong> don&apos;t reconcile monthly &mdash; don&apos;t be one of them.
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-teal-500/5 border border-teal-500/20 p-5 mt-6">
              <p className="text-teal-400 font-medium mb-2">Separate Business Account &mdash; Non-Negotiable</p>
              <p className="text-gray-400 text-sm">
                If you take away one thing from this guide, let it be this: <strong className="text-gray-200">open a dedicated business bank account</strong>. Many Australian banks offer free or low-cost business transaction accounts for sole traders. It instantly eliminates the biggest reconciliation headache &mdash; separating personal from business transactions. If you currently use a mixed account, you must apply private-use percentages to shared expenses and manually exclude personal transactions, which is time-consuming and error-prone.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Best Practices */}
        <section id="best-practices">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center text-white text-sm font-bold">5</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Best Practices</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Good reconciliation habits save hours of work and thousands of dollars in avoided errors, penalties, and accountant fees. Here are the seven best practices every Australian freelancer should follow.
            </p>

            <div className="space-y-4 mt-6">
              <div className="flex items-start gap-4 p-5 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-teal-500/20 flex items-center justify-center text-teal-400 text-sm font-bold">1</div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Use a Dedicated Business Account</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Separate business and personal finances completely. This makes every transaction on your statement business-relevant and eliminates the need to filter, categorise, or calculate private-use percentages. Most Australian banks offer sole trader accounts with no monthly fee for low transaction volumes.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-teal-500/20 flex items-center justify-center text-teal-400 text-sm font-bold">2</div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Reconcile at Least Monthly</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Set a recurring calendar reminder for the same day each month &mdash; ideally within 5 days of your statement date. Monthly reconciliation catches errors before they compound across multiple periods. If you process more than 50 transactions per month, switch to weekly.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-teal-500/20 flex items-center justify-center text-teal-400 text-sm font-bold">3</div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Investigate Discrepancies Immediately</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Never &quot;plug the gap&quot; by adding a balancing adjustment to force the reconciliation to balance. Every discrepancy has a cause &mdash; a missing transaction, a data entry error, a duplicate, or potentially fraud. <strong className="text-gray-200">Find the cause, fix it properly, and document what happened.</strong> Unexplained adjustments are a red flag in ATO audits.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-teal-500/20 flex items-center justify-center text-teal-400 text-sm font-bold">4</div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Keep Digital Copies of Statements &mdash; 5 Years</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    The ATO requires you to retain financial records for <strong className="text-gray-200">5 years from the date of lodgement</strong> of the relevant tax return (Section 262A, ITAA 1936). Download and store PDF copies of every bank statement. Do not rely on your bank&apos;s online portal &mdash; some banks only provide 2 years of history online.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-teal-500/20 flex items-center justify-center text-teal-400 text-sm font-bold">5</div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Automate with Bank Feeds Where Possible</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Modern accounting tools (including InvoiceFlow) can connect directly to your bank account and import transactions automatically. This eliminates manual data entry errors and ensures every bank transaction is captured in your records. You still need to <strong className="text-gray-200">review and categorise</strong> each transaction, but the matching process becomes far faster.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-teal-500/20 flex items-center justify-center text-teal-400 text-sm font-bold">6</div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Reconcile Before Lodging BAS</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Always complete your bank reconciliation <strong className="text-gray-200">before preparing your quarterly BAS</strong>. This ensures the GST collected, GST paid, and income figures you report are accurate and verifiable. Submitting a BAS based on unreconciled records is a recipe for amendment notices, penalties, and unnecessary interactions with the ATO.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-teal-500/20 flex items-center justify-center text-teal-400 text-sm font-bold">7</div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Document All Adjustments</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Every adjustment you make during reconciliation should have a note explaining what it is and why it was made. This creates an <strong className="text-gray-200">audit trail</strong> that supports your records if the ATO ever reviews them. Examples: &quot;Bank fee for Feb not previously recorded,&quot; &quot;Stripe processing fee on INV-042 deducted from deposit,&quot; &quot;Duplicate entry corrected &mdash; original and bank feed both recorded.&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: How InvoiceFlow Helps */}
        <section id="how-invoiceflow-helps">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center text-white text-sm font-bold">6</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">How InvoiceFlow Helps</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              InvoiceFlow is built specifically for Australian freelancers and sole traders. Here&apos;s how it takes the pain out of bank reconciliation and keeps your records audit-ready year-round.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-teal-500/20 p-5">
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m9.86-3.06a4.5 4.5 0 00-6.364-6.364L4.5 8.257m0 0l6.364 6.364" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">Automatic Bank Feed Matching</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Connect your bank account and InvoiceFlow automatically imports transactions daily. Our matching engine compares each deposit against your invoices and suggests matches based on amount, date, and reference &mdash; reducing manual work by up to 80%.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-teal-500/20 p-5">
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">Invoice-to-Payment Reconciliation</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  See exactly which invoices have been paid, which are partially paid, and which payments are unmatched &mdash; all in one view. Mark invoices as paid directly from the reconciliation screen and the books update automatically.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-teal-500/20 p-5">
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">Unmatched Transaction Alerts</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Get notified when bank transactions can&apos;t be automatically matched to any invoice or recorded expense. This catches bank fees, unexpected charges, and missing records before they become reconciliation headaches at month-end.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-teal-500/20 p-5">
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">BAS-Ready Reconciled Data</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Once reconciled, your data flows directly into BAS preparation. GST collected, GST paid, and total income figures are pre-calculated from verified, matched transactions &mdash; giving you confidence that your BAS is accurate before you lodge.
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-gray-800/50 border border-teal-500/20 p-5 mt-4">
              <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
              </div>
              <h4 className="text-white font-semibold mb-2">Exportable Reconciliation Reports</h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                Export detailed reconciliation reports in PDF or CSV format for your records or your accountant. Each report shows matched transactions, unmatched items, adjustments made, and the final reconciled balance &mdash; a complete audit trail that satisfies ATO record-keeping requirements.
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
              { href: '/glossary/accounts-receivable', label: 'Accounts Receivable' },
              { href: '/glossary/accounts-payable', label: 'Accounts Payable' },
              { href: '/glossary/cash-flow', label: 'Cash Flow' },
              { href: '/glossary/bas', label: 'BAS' },
              { href: '/glossary/record-keeping', label: 'Record Keeping' },
            ].map((term) => (
              <Link
                key={term.href}
                href={term.href}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gray-700/30 border border-gray-600/30 text-gray-300 text-sm hover:border-teal-500/40 hover:text-teal-400 transition-all"
              >
                <svg className="w-3.5 h-3.5 text-teal-500/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
        <p className="text-gray-400 text-center mb-8">Free tools to help you reconcile, track expenses, and stay on top of your finances.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {relatedTools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:border-teal-500/50 hover:bg-gray-800/80 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-4">
                {tool.icon}
              </div>
              <h3 className="text-white font-medium mb-2 group-hover:text-teal-400 transition-colors">{tool.name}</h3>
              <p className="text-sm text-gray-400">{tool.description}</p>
              <div className="mt-4 text-teal-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
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
        <p className="text-gray-400 text-center mb-8">In-depth guides on bookkeeping, BAS, and financial management for freelancers.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {relatedGuides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group p-6 rounded-2xl bg-gray-800/40 border border-gray-700/40 hover:border-teal-500/40 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h3 className="text-white font-medium mb-2 group-hover:text-teal-400 transition-colors">{guide.name}</h3>
              <p className="text-sm text-gray-400">{guide.description}</p>
              <div className="mt-4 text-teal-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
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
              <summary className="flex items-center justify-between cursor-pointer px-6 py-4 text-white font-medium hover:text-teal-400 transition-colors">
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
        <div className="rounded-2xl bg-gradient-to-br from-teal-500/10 to-emerald-500/10 border border-teal-500/20 p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stop Guessing, Start Reconciling
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            InvoiceFlow helps Australian freelancers match invoices to bank deposits, catch missing transactions, and keep ATO-compliant records &mdash; automatically. Start for free and reconcile with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button>Start Free &mdash; No Card Required</Button>
            </Link>
            <Link href="/tools/expense-tracker">
              <Button variant="secondary">Try the Expense Tracker</Button>
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
