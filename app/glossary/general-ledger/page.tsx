import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'General Ledger: Meaning, Template & Guide for Small Business — InvoiceFlow',
  description:
    'What is a general ledger? Learn how GL entries, T-accounts, and the accounting cycle work for Australian freelancers and sole traders. Free general ledger template with worked journal entries, account types, and common mistakes. Updated 2025-26.',
  keywords: [
    'general ledger meaning',
    'general ledger template small business',
    'general ledger example',
    'what is a general ledger in accounting',
    'GL entries explained',
    'general ledger vs journal',
    'ledger accounts for sole trader',
    'general ledger template australia',
  ],
  alternates: { canonical: '/glossary/general-ledger' },
  openGraph: {
    title: 'General Ledger: Meaning, Template & Guide for Small Business — InvoiceFlow',
    description:
      'What is a general ledger? Learn how GL entries, T-accounts, and the accounting cycle work for Australian freelancers and sole traders. Free general ledger template with worked journal entries and common mistakes to avoid.',
    url: 'https://invoiceflow-teal.vercel.app/glossary/general-ledger',
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
    { '@type': 'ListItem', position: 3, name: 'General Ledger', item: `${BASE_URL}/glossary/general-ledger` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a general ledger in accounting?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "A general ledger (GL) is the master record of all financial transactions in a business. It organises every transaction by account — assets, liabilities, equity, revenue, and expenses — so you can see the complete financial picture at any point in time. Every journal entry gets 'posted' to the relevant GL accounts, and financial statements like the profit and loss, balance sheet, and trial balance are generated from the GL.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between a general ledger and a journal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "A journal records transactions in chronological order — like a diary of every financial event. The general ledger organises those same transactions by account. The journal answers 'what happened today?' while the GL answers 'what is the balance of each account?' The journal is the book of original entry; the GL is the book of final entry. Both are essential for accurate bookkeeping.",
      },
    },
    {
      '@type': 'Question',
      name: 'How many general ledger accounts does a freelancer need?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most freelancers need between 15 and 20 GL accounts — far fewer than the 100+ used by larger businesses. The essentials are: a business bank account, accounts receivable, GST collected, GST paid, owner equity and drawings, service revenue, and 8-12 expense accounts. Your chart of accounts defines the structure; your GL holds the data.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do Australian sole traders need to maintain a general ledger?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The ATO requires all businesses to keep records that explain all transactions and enable accurate income tax returns and BAS. While the ATO doesn't mandate a 'general ledger' by name, maintaining one is the most practical way to meet these obligations. If you use any accounting or invoicing software, a general ledger is maintained automatically. Records must be kept for 5 years from the date of lodgement.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is a trial balance and how does it relate to the general ledger?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "A trial balance lists every GL account and its balance (debit or credit) at a specific point in time. Its purpose is to verify that total debits equal total credits — confirming double-entry bookkeeping has been maintained correctly. If it doesn't balance, there is an error in the GL. The trial balance is generated directly from the general ledger and serves as the foundation for preparing financial statements.",
      },
    },
  ],
};

const tocItems = [
  { id: 'what-is-general-ledger', label: '1. What Is a General Ledger?' },
  { id: 'how-general-ledger-works', label: '2. How a General Ledger Works' },
  { id: 'gl-accounts-for-freelancers', label: '3. GL Accounts for Freelancers' },
  { id: 'gl-journal-entries', label: '4. GL Journal Entries: Common Transactions' },
  { id: 'common-mistakes', label: '5. Common General Ledger Mistakes' },
  { id: 'how-invoiceflow-helps', label: '6. How InvoiceFlow Helps' },
];

const relatedTools = [
  {
    href: '/tools/invoice-generator',
    name: 'Invoice Generator',
    description: 'Create professional invoices that automatically generate the correct GL journal entries for revenue and GST.',
    icon: (
      <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    href: '/tools/gst-calculator',
    name: 'GST Calculator',
    description: 'Calculate GST-inclusive and GST-exclusive amounts for accurate GL postings to your GST accounts.',
    icon: (
      <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
      </svg>
    ),
  },
  {
    href: '/tools/chart-of-accounts-template',
    name: 'Chart of Accounts Template',
    description: 'Download a pre-built chart of accounts that defines the structure your general ledger is built on.',
    icon: (
      <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
      </svg>
    ),
  },
  {
    href: '/tools/profit-margin-calculator',
    name: 'Profit Margin Calculator',
    description: 'Calculate gross and net profit margins using revenue and expense data from your general ledger.',
    icon: (
      <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
];

const relatedGuides = [
  {
    href: '/guides/bookkeeping-basics',
    name: 'Bookkeeping Basics',
    description: 'Foundational bookkeeping concepts including journals, ledgers, chart of accounts, and double-entry accounting for freelancers.',
  },
  {
    href: '/guides/gst-for-freelancers',
    name: 'GST for Freelancers',
    description: 'Complete GST guide covering registration thresholds, BAS lodgement, input tax credits, and how GST flows through your GL.',
  },
  {
    href: '/guides/tax-guide-freelancers',
    name: 'Tax Guide for Freelancers',
    description: 'Income tax, deductions, PAYG, and financial reporting requirements for Australian sole traders and freelancers.',
  },
];

/* Helper: renders a compact Dr/Cr journal table */
function JournalTable({ rows }: { rows: { account: string; dr?: string; cr?: string }[] }) {
  return (
    <div className="rounded-lg bg-gray-900/50 overflow-hidden">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-gray-700/30">
            <th className="text-left p-3 text-gray-500 font-medium">Account</th>
            <th className="text-right p-3 text-emerald-500 font-medium">Debit</th>
            <th className="text-right p-3 text-purple-400 font-medium">Credit</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-800/50">
          {rows.map((r, i) => (
            <tr key={i}>
              <td className="p-3 text-gray-300">{r.account}</td>
              <td className="p-3 text-right font-mono">{r.dr ? <span className="text-emerald-400">{r.dr}</span> : <span className="text-gray-600">&mdash;</span>}</td>
              <td className="p-3 text-right font-mono">{r.cr ? <span className="text-purple-400">{r.cr}</span> : <span className="text-gray-600">&mdash;</span>}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function GeneralLedgerGlossaryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative px-4 pt-20 pb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/10 blur-3xl" />
        <div className="relative max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/glossary" className="hover:text-white transition-colors">Glossary</Link>
            <span>/</span>
            <span className="text-white">General Ledger</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            Glossary &mdash; Bookkeeping Fundamentals
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            General Ledger{' '}
            <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">for Small Business</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            The general ledger is the master record of every financial transaction in your business &mdash; the single source of truth from which your profit and loss, balance sheet, and BAS are generated. This guide explains what a GL is, how it works with T-accounts and journal entries, the accounts every freelancer needs, and the common mistakes that cost sole traders time and money at EOFY.
          </p>
          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span>18 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span>ATO-Accurate 2025-26</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" /></svg>
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
              <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>
            </div>
            <h2 className="text-xl font-bold text-white">In a Nutshell</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { badge: 'GL', title: 'Master Record', desc: 'The General Ledger is the master record of every financial transaction in your business' },
              { badge: '5', title: '5 Account Types', desc: 'Assets, Liabilities, Equity, Revenue, and Expenses \u2014 every GL account falls into one of these' },
              { badge: 'Dr=Cr', title: 'Debits Equal Credits', desc: 'Every transaction has equal debits and credits \u2014 the fundamental rule of double-entry bookkeeping' },
              { badge: '15-20', title: 'Accounts for Freelancers', desc: 'The number of GL accounts a typical freelancer needs \u2014 far fewer than the 100+ used by larger businesses' },
            ].map((card) => (
              <div key={card.badge} className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 text-xs font-bold">{card.badge}</span>
                <div>
                  <p className="text-white font-medium text-sm">{card.title}</p>
                  <p className="text-gray-400 text-sm">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <div className="rounded-2xl bg-gray-800/50 border border-gray-700/50 p-8">
          <h2 className="text-lg font-bold text-white mb-4">Table of Contents</h2>
          <nav className="grid sm:grid-cols-2 gap-2">
            {tocItems.map((item) => (
              <a key={item.id} href={`#${item.id}`} className="flex items-center gap-2 text-gray-400 hover:text-amber-400 transition-colors text-sm py-1">
                <svg className="w-4 h-4 text-amber-500/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Content Sections */}
      <div className="max-w-4xl mx-auto px-4 pb-16 space-y-16">

        {/* Section 1 */}
        <section id="what-is-general-ledger">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold">1</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">What Is a General Ledger?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              A general ledger (GL) is <strong className="text-white">the master record of ALL financial transactions in your business</strong>. Every dollar earned, spent, owed, or owned is recorded here, organised by account. It is the single source of financial truth &mdash; the database from which your profit and loss statement, balance sheet, trial balance, and BAS are generated.
            </p>
            <p className="text-gray-300 leading-relaxed">
              The concept is older than most people realise. <strong className="text-white">Medieval Italian merchants</strong> &mdash; particularly in Venice, Genoa, and Florence &mdash; developed ledger-based bookkeeping systems in the 13th and 14th centuries. Luca Pacioli codified the system in 1494, and the fundamental structure has barely changed since. The paper ledger became a spreadsheet, the spreadsheet became software, but the underlying principle remains: <strong className="text-white">one central book that records everything, organised by account</strong>.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Your <strong className="text-white">chart of accounts (CoA)</strong> is the structure &mdash; the index of account names and numbers. The GL is the <strong className="text-white">data</strong> &mdash; the actual transactions posted to each of those accounts. The CoA is the filing cabinet; the GL is the contents of every folder.
            </p>
            <p className="text-gray-300 leading-relaxed">
              A <strong className="text-white">journal</strong> records transactions chronologically. The general ledger reorganises them by account. The journal answers &quot;what happened today?&quot; while the GL answers &quot;what is the balance of my bank account?&quot;
            </p>
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 overflow-hidden mt-6">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-700/50">
                      <th className="text-left p-4 text-gray-400 font-medium">Feature</th>
                      <th className="text-left p-4 text-gray-400 font-medium">Journal</th>
                      <th className="text-left p-4 text-amber-400 font-medium">General Ledger</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700/30">
                    {[
                      { feature: 'Organisation', journal: 'Chronological (by date)', gl: 'By account (Assets, Revenue, etc.)' },
                      { feature: 'Purpose', journal: 'Record transactions as they occur', gl: 'Show running balance per account' },
                      { feature: 'Also called', journal: 'Book of original entry', gl: 'Book of final entry' },
                      { feature: 'Answers', journal: '"What happened on 15 March?"', gl: '"What is my bank balance?"' },
                      { feature: 'Reports generated', journal: 'Transaction listing / audit trail', gl: 'Trial balance, P&L, balance sheet' },
                    ].map((row) => (
                      <tr key={row.feature}>
                        <td className="p-4 text-white font-medium">{row.feature}</td>
                        <td className="p-4 text-gray-400">{row.journal}</td>
                        <td className="p-4 text-gray-300">{row.gl}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="rounded-xl bg-amber-500/5 border border-amber-500/20 p-5 mt-6">
              <p className="text-amber-400 font-medium mb-2">Why It Matters for Freelancers</p>
              <p className="text-gray-400 text-sm">
                Every invoicing and accounting application &mdash; InvoiceFlow, Xero, MYOB &mdash; maintains a GL automatically. When you issue an invoice, the GL records revenue and GST. Understanding what happens under the hood helps you spot mistakes, reconcile your BAS, and communicate clearly with your accountant.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section id="how-general-ledger-works">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold">2</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">How a General Ledger Works</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              The GL sits at the heart of the <strong className="text-white">accounting cycle</strong> &mdash; the repeating process that turns raw transactions into financial statements, using <Link href="/glossary/double-entry-bookkeeping" className="text-amber-400 hover:text-amber-300 underline underline-offset-2">double-entry bookkeeping</Link>.
            </p>
            <div className="rounded-xl bg-gray-800/50 border border-amber-500/20 p-6 mt-6">
              <h3 className="text-amber-400 font-semibold mb-4 text-lg">The Accounting Cycle</h3>
              <div className="space-y-3">
                {[
                  { step: '1', title: 'Transaction occurs', desc: 'You invoice a client, pay a subscription, or buy equipment.' },
                  { step: '2', title: 'Journal entry created', desc: 'The transaction is recorded with debits, credits, date, and description.' },
                  { step: '3', title: 'Posted to the General Ledger', desc: 'Each debit and credit is posted to its respective GL account.' },
                  { step: '4', title: 'Trial balance prepared', desc: 'All GL account balances are listed. Total debits must equal total credits.' },
                  { step: '5', title: 'Financial statements generated', desc: 'The trial balance feeds into your P&L, balance sheet, and cash flow statement.' },
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 text-xs font-bold">{item.step}</span>
                    <div>
                      <p className="text-white font-medium text-sm">{item.title}</p>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white mt-8 mb-4">T-Account Illustrations</h3>
            <p className="text-gray-300 leading-relaxed">
              A <strong className="text-white">T-account</strong> is the visual representation of a GL account &mdash; left side for debits, right side for credits. Here are five example transactions for a freelance designer.
            </p>
            {[
              { title: '1. Invoice a client $2,200 (inc. GST)', desc: 'Logo design: $2,000 + $200 GST.', accounts: [
                { label: '1100 Accounts Receivable', dr: '$2,200' },
                { label: '4000 Service Revenue', cr: '$2,000' },
                { label: '2000 GST Collected', cr: '$200' },
              ]},
              { title: '2. Client pays the $2,200 invoice', desc: 'Bank transfer received.', accounts: [
                { label: '1000 Business Bank', dr: '$2,200' },
                { label: '1100 Accounts Receivable', cr: '$2,200' },
              ]},
              { title: '3. Pay Adobe Creative Cloud ($54.99 inc. GST)', desc: '$49.99 + $5.00 GST.', accounts: [
                { label: '5100 Software & Subs', dr: '$49.99' },
                { label: '2010 GST Paid', dr: '$5.00' },
                { label: '1000 Business Bank', cr: '$54.99' },
              ]},
              { title: '4. Buy a monitor ($660 inc. GST)', desc: '$600 equipment + $60 GST.', accounts: [
                { label: '1300 Equipment', dr: '$600' },
                { label: '2010 GST Paid', dr: '$60' },
                { label: '1000 Business Bank', cr: '$660' },
              ]},
              { title: '5. Owner draws $3,000 for personal use', desc: 'Transfer to personal account.', accounts: [
                { label: '3100 Owner\u2019s Drawings', dr: '$3,000' },
                { label: '1000 Business Bank', cr: '$3,000' },
              ]},
            ].map((tx) => (
              <div key={tx.title} className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-white font-semibold mb-1">{tx.title}</h4>
                <p className="text-gray-400 text-sm mb-3">{tx.desc}</p>
                <div className="grid sm:grid-cols-3 gap-3">
                  {tx.accounts.map((a) => (
                    <div key={a.label} className="rounded-lg bg-gray-900/50 p-3 text-center">
                      <p className="text-amber-400 text-xs font-bold mb-2">{a.label}</p>
                      <div className="flex text-xs">
                        <div className="flex-1 border-r border-gray-700 p-1">
                          <p className="text-gray-500 mb-1">Dr</p>
                          <p className={a.dr ? 'text-emerald-400 font-mono' : 'text-gray-600'}>{a.dr || '\u2014'}</p>
                        </div>
                        <div className="flex-1 p-1">
                          <p className="text-gray-500 mb-1">Cr</p>
                          <p className={a.cr ? 'text-emerald-400 font-mono' : 'text-gray-600'}>{a.cr || '\u2014'}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <div className="rounded-xl bg-amber-500/5 border border-amber-500/20 p-5 mt-4">
              <p className="text-amber-400 font-medium mb-2">The Golden Rule</p>
              <p className="text-gray-400 text-sm">In every transaction above, <strong className="text-gray-200">total debits equal total credits</strong>. If your trial balance shows an imbalance, there is a posting error somewhere in the GL that must be corrected before financial statements can be trusted.</p>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section id="gl-accounts-for-freelancers">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold">3</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">General Ledger Accounts for Freelancers</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Every GL account falls into one of <strong className="text-white">five account types</strong>. Your <Link href="/glossary/chart-of-accounts" className="text-amber-400 hover:text-amber-300 underline underline-offset-2">chart of accounts</Link> defines the structure; the GL holds the transaction data.
            </p>
            <div className="space-y-4 mt-6">
              {[
                { color: 'emerald', title: 'Assets (1000\u20131999)', subtitle: 'What You Own \u2014 increase with debits', accounts: [
                  '1000 Business Bank Account', '1010 Business Savings', '1100 Accounts Receivable', '1200 Prepaid Expenses', '1300 Computer Equipment', '1310 Accumulated Depreciation',
                ]},
                { color: 'red', title: 'Liabilities (2000\u20132999)', subtitle: 'What You Owe \u2014 increase with credits', accounts: [
                  '2000 GST Collected', '2010 GST Paid (Input Tax Credits)', '2100 PAYG Withholding Payable', '2200 Accounts Payable',
                ]},
                { color: 'blue', title: 'Equity (3000\u20133999)', subtitle: 'Your Ownership Stake \u2014 increase with credits', accounts: [
                  '3000 Owner\u2019s Equity / Capital', '3100 Owner\u2019s Drawings', '3200 Retained Earnings',
                ]},
                { color: 'amber', title: 'Revenue (4000\u20134999)', subtitle: 'Money Earned \u2014 increase with credits', accounts: [
                  '4000 Service Revenue', '4100 Interest Income',
                ]},
                { color: 'orange', title: 'Expenses (5000\u20136999)', subtitle: 'Costs of Running Your Business \u2014 increase with debits', accounts: [
                  '5000 Advertising & Marketing', '5100 Software & Subscriptions', '5200 Home Office Expenses', '5300 Professional Development', '5400 Insurance', '5500 Accounting & Legal Fees', '5600 Travel & Transport', '5700 Phone & Internet', '5800 Depreciation Expense', '6000 Bad Debts Written Off',
                ]},
              ].map((group) => (
                <div key={group.title} className={`rounded-xl bg-gray-800/50 border border-${group.color}-500/20 p-5`}>
                  <h3 className={`text-${group.color}-400 font-semibold mb-1 text-lg`}>{group.title}</h3>
                  <p className="text-sm text-gray-400 mb-3">{group.subtitle}</p>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {group.accounts.map((a) => (
                      <div key={a} className="flex items-center gap-2 p-2 rounded-lg bg-gray-900/50">
                        <span className={`text-${group.color}-400 font-mono text-xs flex-shrink-0`}>{a.split(' ')[0]}</span>
                        <span className="text-white text-sm">{a.substring(a.indexOf(' ') + 1)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <h3 className="text-xl font-semibold text-white mt-8 mb-4">Freelancer GL vs Larger Business GL</h3>
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-700/50">
                      <th className="text-left p-4 text-gray-400 font-medium">Category</th>
                      <th className="text-left p-4 text-amber-400 font-medium">Freelancer</th>
                      <th className="text-left p-4 text-gray-400 font-medium">Larger Business</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700/30">
                    {[
                      { cat: 'Bank Accounts', f: '1 account', l: 'Multiple accounts' },
                      { cat: 'Accounts Receivable', f: 'Yes', l: 'Yes + sub-ledger' },
                      { cat: 'Inventory', f: 'Rarely', l: 'Yes + COGS tracking' },
                      { cat: 'Fixed Assets', f: '1-2 accounts', l: '10+ categories' },
                      { cat: 'Payroll Liabilities', f: 'No (sole trader)', l: 'Yes (PAYG, super, leave)' },
                      { cat: 'Revenue Streams', f: '1-2 accounts', l: '10+ categories' },
                      { cat: 'Operating Expenses', f: '8-12 accounts', l: '30-50+ accounts' },
                      { cat: 'Total Accounts', f: '15-20', l: '100-500+' },
                    ].map((row) => (
                      <tr key={row.cat}>
                        <td className="p-4 text-white font-medium">{row.cat}</td>
                        <td className="p-4 text-gray-300">{row.f}</td>
                        <td className="p-4 text-gray-400">{row.l}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section id="gl-journal-entries">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold">4</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">GL Journal Entries: Common Freelancer Transactions</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">Eight worked journal entries covering the most common freelancer transactions. Each shows the debit and credit accounts with amounts.</p>
            <div className="space-y-4 mt-6">
              {[
                { n: 1, title: 'Invoice a client $5,500 (inc. GST)', desc: 'Issue a tax invoice for $5,000 design work + $500 GST.', rows: [
                  { account: '1100 Accounts Receivable', dr: '$5,500' }, { account: '4000 Service Revenue', cr: '$5,000' }, { account: '2000 GST Collected', cr: '$500' },
                ]},
                { n: 2, title: 'Receive payment from client', desc: 'Client pays the $5,500 invoice in full via bank transfer.', rows: [
                  { account: '1000 Business Bank', dr: '$5,500' }, { account: '1100 Accounts Receivable', cr: '$5,500' },
                ]},
                { n: 3, title: 'Pay for software subscription ($55 inc. GST)', desc: 'Monthly Figma: $50 + $5 GST.', rows: [
                  { account: '5100 Software & Subscriptions', dr: '$50' }, { account: '2010 GST Paid', dr: '$5' }, { account: '1000 Business Bank', cr: '$55' },
                ]},
                { n: 4, title: 'Claim home office deduction ($200/month)', desc: 'ATO fixed-rate method (67c/hr). No GST component.', rows: [
                  { account: '5200 Home Office Expenses', dr: '$200' }, { account: '3000 Owner\u2019s Equity', cr: '$200' },
                ]},
                { n: 5, title: 'Quarterly BAS GST payment ($1,200)', desc: 'GST Collected ($1,800) minus GST Paid ($600) = $1,200 to ATO.', rows: [
                  { account: '2000 GST Collected', dr: '$1,800' }, { account: '2010 GST Paid', cr: '$600' }, { account: '1000 Business Bank', cr: '$1,200' },
                ]},
                { n: 6, title: 'Transfer to personal (drawings) \u2014 $4,000', desc: 'Owner withdrawal. Not an expense \u2014 reduces equity.', rows: [
                  { account: '3100 Owner\u2019s Drawings', dr: '$4,000' }, { account: '1000 Business Bank', cr: '$4,000' },
                ]},
                { n: 7, title: 'Buy a laptop \u2014 $2,200 (inc. GST, instant write-off)', desc: '$2,000 + $200 GST. Instant asset write-off under ATO provisions for assets under $20,000.', rows: [
                  { account: '5800 Depreciation (Instant Write-Off)', dr: '$2,000' }, { account: '2010 GST Paid', dr: '$200' }, { account: '1000 Business Bank', cr: '$2,200' },
                ]},
                { n: 8, title: 'Write off bad debt \u2014 $1,650 (inc. GST)', desc: '$1,500 + $150 GST invoice overdue 12+ months, deemed unrecoverable.', rows: [
                  { account: '6000 Bad Debts Written Off', dr: '$1,500' }, { account: '2000 GST Collected', dr: '$150' }, { account: '1100 Accounts Receivable', cr: '$1,650' },
                ]},
              ].map((entry) => (
                <div key={entry.n} className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 text-xs font-bold">{entry.n}</span>
                    <h4 className="text-white font-semibold">{entry.title}</h4>
                  </div>
                  <p className="text-gray-400 text-sm mb-3">{entry.desc}</p>
                  <JournalTable rows={entry.rows} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5 */}
        <section id="common-mistakes">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold">5</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Common General Ledger Mistakes</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">Six mistakes that cost freelancers time and money &mdash; each with the problem, symptoms, and fix.</p>
            <div className="space-y-4 mt-6">
              {[
                { title: 'Posting to the Wrong Account', problem: 'Recording a software subscription as "Office Supplies" or a client payment as "Other Income."', symptom: 'P&L shows inflated expenses in one category and understated in another. Accountant reclassifies everything at EOFY, increasing fees.', fix: 'Use consistent categorisation rules. Set up auto-rules in your software. Review your GL monthly and correct mispostings immediately.' },
                { title: 'Not Reconciling Regularly', problem: 'Only checking your GL against bank statements once a year (or never).', symptom: 'GL bank balance doesn\u2019t match actual bank balance. BAS figures are unreliable. Trial balance has unexplained variances.', fix: 'Reconcile at least monthly. Match every GL transaction to a bank statement entry. Do bank reconciliation quarterly at minimum.' },
                { title: 'Mixing Personal and Business Transactions', problem: 'Running personal expenses through your business bank account without recording them as Owner\u2019s Drawings.', symptom: 'Inflated business expenses, incorrect GST claims, ATO audit risk. P&L shows non-deductible expenses.', fix: 'Use a separate business bank account. Record any personal spending through the business as 3100 Owner\u2019s Drawings \u2014 never as a business expense.' },
                { title: 'Ignoring GST Accounts', problem: 'Recording expenses and income at GST-inclusive amounts without separating GST into dedicated GL accounts.', symptom: 'BAS lodgement becomes guesswork. Expenses appear 10% higher than they actually are.', fix: 'Always separate GST. Record $110 expense as $100 to expense + $10 to GST Paid. Select the correct tax code in your software.' },
                { title: 'Not Maintaining Sub-Ledgers for AR/AP', problem: 'Using a single Accounts Receivable line without tracking which clients owe what.', symptom: 'Can\u2019t tell which invoices are overdue. AR balance doesn\u2019t match outstanding invoices. Cash flow surprises.', fix: 'Use sub-ledgers or your invoicing software\u2019s client tracking. The GL shows the total; the sub-ledger shows the detail per client.' },
                { title: 'Failing to Close Out at Year-End', problem: 'Revenue and expense accounts carry their balances into the next financial year instead of being reset to zero.', symptom: 'Next year\u2019s P&L includes last year\u2019s figures. Revenue looks double. Comparative reporting is meaningless.', fix: 'At 30 June (EOFY), close all revenue and expense accounts to Retained Earnings (3200). Most software handles this automatically \u2014 check that it\u2019s been done.' },
              ].map((m) => (
                <div key={m.title} className="rounded-xl bg-gray-800/50 border border-red-500/20 p-5">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                      <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" /></svg>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">{m.title}</h4>
                      <p className="text-sm text-gray-500 mb-2"><strong className="text-gray-300">Problem:</strong> {m.problem}</p>
                      <p className="text-sm text-gray-500 mb-2"><strong className="text-gray-300">Symptom:</strong> {m.symptom}</p>
                      <p className="text-sm text-gray-400"><strong className="text-gray-200">Fix:</strong> {m.fix}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6 */}
        <section id="how-invoiceflow-helps">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold">6</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">How InvoiceFlow Helps</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">InvoiceFlow is purpose-built for Australian freelancers. Instead of manually creating journal entries and posting to a GL, everything happens automatically from the moment you create an invoice.</p>
            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              {[
                { title: 'Automatic GL Posting from Invoices', desc: 'Every invoice generates the correct journal entry \u2014 debiting Accounts Receivable, crediting Revenue and GST Collected. Payment updates the GL automatically. No manual posting.', icon: 'M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z' },
                { title: 'GST Tracking in Dedicated GL Accounts', desc: 'GST Collected and GST Paid are tracked in separate accounts on every transaction. See your net GST position in real time. BAS figures are ready \u2014 no manual calculation.', icon: 'M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
                { title: 'Trial Balance and Account Reports', desc: 'Generate a trial balance at any time. View account-level reports showing every transaction. Export to CSV or PDF for your accountant \u2014 clean, pre-categorised, ATO-ready.', icon: 'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z' },
                { title: 'Integrated Chart of Accounts', desc: 'Your GL is built on a pre-configured CoA designed for Australian freelancers. Account numbers follow the 1000-6999 system, mapped to ATO tax return labels. Customise as you grow.', icon: 'M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z' },
              ].map((feature) => (
                <div key={feature.title} className="rounded-xl bg-gray-800/50 border border-amber-500/20 p-5">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-3">
                    <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d={feature.icon} /></svg>
                  </div>
                  <h4 className="text-white font-semibold mb-2">{feature.title}</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
            <div className="rounded-xl bg-amber-500/5 border border-amber-500/20 p-5 mt-6">
              <p className="text-amber-400 font-medium mb-2">Zero-Effort General Ledger</p>
              <p className="text-gray-400 text-sm">With InvoiceFlow, you never need to manually create a journal entry or post to a GL account. <strong className="text-gray-200">Issue invoices, record payments, log expenses &mdash; the general ledger builds itself.</strong> Pull a trial balance, view account details, or export your full transaction history at any time.</p>
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
              { href: '/glossary/chart-of-accounts', label: 'Chart of Accounts' },
              { href: '/glossary/double-entry-bookkeeping', label: 'Double-Entry Bookkeeping' },
              { href: '/glossary/bookkeeping', label: 'Bookkeeping' },
              { href: '/glossary/balance-sheet', label: 'Balance Sheet' },
              { href: '/glossary/profit-and-loss', label: 'Profit & Loss' },
              { href: '/glossary/bank-reconciliation', label: 'Bank Reconciliation' },
            ].map((term) => (
              <Link key={term.href} href={term.href} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gray-700/30 border border-gray-600/30 text-gray-300 text-sm hover:border-amber-500/40 hover:text-amber-400 transition-all">
                <svg className="w-3.5 h-3.5 text-amber-500/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                {term.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Related Tools */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-white mb-2 text-center">Related Tools</h2>
        <p className="text-gray-400 text-center mb-8">Free tools to help you manage your general ledger and bookkeeping.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {relatedTools.map((tool) => (
            <Link key={tool.href} href={tool.href} className="group p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:border-amber-500/50 hover:bg-gray-800/80 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-4">{tool.icon}</div>
              <h3 className="text-white font-medium mb-2 group-hover:text-amber-400 transition-colors">{tool.name}</h3>
              <p className="text-sm text-gray-400">{tool.description}</p>
              <div className="mt-4 text-amber-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                Use tool
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
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
            <Link key={guide.href} href={guide.href} className="group p-6 rounded-2xl bg-gray-800/40 border border-gray-700/40 hover:border-amber-500/40 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></svg>
              </div>
              <h3 className="text-white font-medium mb-2 group-hover:text-amber-400 transition-colors">{guide.name}</h3>
              <p className="text-sm text-gray-400">{guide.description}</p>
              <div className="mt-4 text-amber-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                Read guide
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
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
                <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
              </summary>
              <div className="px-6 pb-4 text-gray-400 text-sm leading-relaxed">{faq.acceptedAnswer.text}</div>
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
          <h2 className="text-3xl font-bold text-white mb-4">Automatic General Ledger &mdash; Start Free</h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            InvoiceFlow gives Australian freelancers an automatic general ledger, GST tracking in dedicated accounts, trial balance reports, and a pre-configured chart of accounts mapped to ATO labels. Stop doing manual bookkeeping &mdash; start invoicing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup"><Button>Start Free &mdash; No Card Required</Button></Link>
            <Link href="/tools/invoice-generator"><Button variant="secondary">Try the Invoice Generator</Button></Link>
          </div>
          <p className="mt-6 text-sm text-gray-500">Free plan includes 5 invoices per month. No credit card required.</p>
        </div>
      </section>
    </div>
  );
}
