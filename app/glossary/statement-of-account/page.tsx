import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Statement of Account: When and How to Send One (Complete Guide) — InvoiceFlow',
  description:
    'What is a statement of account? Learn when to send one, what to include, how it differs from an invoice, and how to use statements to manage overdue payments. Free guide for Australian freelancers and small businesses. Updated 2025-26.',
  keywords: [
    'statement of account meaning',
    'statement of account vs invoice',
    'statement of account template australia',
    'what is a statement of account',
    'account statement example',
    'statement of account format',
    'debtor statement template',
    'monthly statement of account',
    'statement of account freelancer',
    'when to send statement of account',
    'overdue account statement',
    'statement of account vs receipt',
  ],
  alternates: { canonical: '/glossary/statement-of-account' },
  openGraph: {
    title: 'Statement of Account: When and How to Send One (Complete Guide) — InvoiceFlow',
    description:
      'Everything Australian freelancers and small businesses need to know about statements of account — what to include, when to send them, how they differ from invoices, and how to use them to recover overdue payments.',
    url: 'https://invoiceflow-teal.vercel.app/glossary/statement-of-account',
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
    { '@type': 'ListItem', position: 3, name: 'Statement of Account', item: `${BASE_URL}/glossary/statement-of-account` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is a statement of account the same as an invoice?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. An invoice is a request for payment for a specific piece of work or delivery, issued once per transaction. A statement of account is a summary document that lists all invoices, payments, credits, and the outstanding balance over a period of time. Think of the invoice as one line item and the statement as the full ledger between you and a client. Invoices are legally required for GST purposes; statements are optional but useful for collections and reconciliation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to send statements as a freelancer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There is no legal requirement for freelancers to send statements of account in Australia. However, they are highly recommended if you have clients with ongoing work, multiple outstanding invoices, or overdue payments. Statements serve as a professional, non-confrontational way to remind clients of their total balance and provide a clear record of all transactions. Many clients — especially larger businesses — expect to receive regular statements as part of normal accounting processes.',
      },
    },
    {
      '@type': 'Question',
      name: 'How often should I send statements of account?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Monthly statements are the most common frequency for clients with ongoing work. Send them at the beginning of each month covering the previous month\'s activity. For clients with less frequent billing, quarterly statements may be appropriate. If a payment is overdue, send a statement immediately — do not wait for the next scheduled cycle. At the end of the financial year (30 June in Australia), send a year-end statement to all clients with any outstanding balance for reconciliation purposes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does a statement of account include GST?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. A statement of account should show all invoice amounts inclusive of GST, all payments received, any credit notes applied, and the GST-inclusive outstanding balance. Since the statement is a summary of previously issued tax invoices (which already include GST details), the statement itself reflects those GST-inclusive figures. The statement is not a tax invoice and does not need to separately itemise GST, but the amounts should match your GST-inclusive invoices for accurate reconciliation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use a statement as evidence for debt recovery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. A statement of account showing a clear history of invoices sent, payment terms, payments received (or not received), and the outstanding balance is useful supporting evidence in debt recovery proceedings, small claims tribunals (like VCAT in Victoria or NCAT in NSW), and dispute resolution. While the original invoices and contract are your primary evidence, a statement provides a concise summary that courts and mediators can quickly review. It also demonstrates that you maintained professional records and communicated the debt clearly to the client.',
      },
    },
  ],
};

const tocItems = [
  { id: 'what-is-statement-of-account', label: '1. What Is a Statement of Account?' },
  { id: 'statement-vs-invoice-vs-receipt', label: '2. Statement vs Invoice vs Receipt' },
  { id: 'what-to-include', label: '3. What to Include in a Statement' },
  { id: 'when-to-send', label: '4. When to Send a Statement' },
  { id: 'managing-overdue-payments', label: '5. Using Statements for Overdue Payments' },
  { id: 'invoiceflow-statements', label: '6. Creating Statements with InvoiceFlow' },
];

const relatedTools = [
  {
    href: '/tools/invoice-generator',
    name: 'Invoice Generator',
    description: 'Create professional tax invoices that feed into your statement of account history.',
    icon: (
      <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    href: '/tools/late-payment-calculator',
    name: 'Late Payment Calculator',
    description: 'Calculate interest and penalties on overdue invoices to include in your statements.',
    icon: (
      <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    href: '/tools/overdue-invoice-follow-up-generator',
    name: 'Overdue Follow-Up Generator',
    description: 'Generate professional follow-up emails to send alongside your statements of account.',
    icon: (
      <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    href: '/tools/credit-note-generator',
    name: 'Credit Note Generator',
    description: 'Create credit notes that adjust your statement balances and keep records clean.',
    icon: (
      <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185zM9.75 9h.008v.008H9.75V9zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 4.5h.008v.008h-.008V13.5zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
    ),
  },
];

const relatedGuides = [
  {
    href: '/guides/getting-paid-faster',
    name: 'Getting Paid Faster',
    description: 'Proven strategies to reduce payment delays and improve your cash flow as a freelancer.',
  },
  {
    href: '/guides/invoicing-101',
    name: 'Invoicing 101',
    description: 'The complete beginner guide to creating invoices, setting terms, and managing payments.',
  },
  {
    href: '/guides/gst-for-freelancers',
    name: 'GST for Freelancers',
    description: 'When to register, how to charge GST, and how to lodge your BAS correctly.',
  },
];

export default function StatementOfAccountGlossaryPage() {
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
            <span className="text-white">Statement of Account</span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            Glossary &mdash; Invoicing &amp; Documents
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Statement of Account{' '}
            <span className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent">
              Complete Guide
            </span>
          </h1>

          {/* Summary */}
          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            A statement of account summarises every invoice, payment, credit, and outstanding balance between you and a client over a set period. It&apos;s not a payment request &mdash; it&apos;s a powerful reconciliation and collections tool. Here&apos;s when to send one, what to include, and how to use statements to recover overdue payments.
          </p>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>10 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>AU-Focused 2025-26</span>
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
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-xs font-bold">SOA</span>
              <div>
                <p className="text-white font-medium text-sm">Document Type</p>
                <p className="text-gray-400 text-sm">Statement of Account &mdash; a summary of all transactions, not a payment request</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-xs font-bold">30d</span>
              <div>
                <p className="text-white font-medium text-sm">Common Statement Period</p>
                <p className="text-gray-400 text-sm">Monthly statements are the most common frequency for ongoing client relationships</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-xs font-bold">$26B</span>
              <div>
                <p className="text-white font-medium text-sm">AU Late Payments</p>
                <p className="text-gray-400 text-sm">Annual unpaid invoices owed to Australian small businesses &mdash; statements help recover this</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-xs font-bold">90+</span>
              <div>
                <p className="text-white font-medium text-sm">Red Flag Threshold</p>
                <p className="text-gray-400 text-sm">Invoices over 90 days old require escalated collection action beyond statements</p>
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

        {/* Section 1: What Is a Statement of Account? */}
        <section id="what-is-statement-of-account">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center text-white text-sm font-bold">1</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">What Is a Statement of Account?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              A <strong className="text-white">statement of account</strong> (sometimes called a <strong className="text-white">debtor statement</strong> or <strong className="text-white">account summary</strong>) is a document that shows <strong className="text-white">all financial transactions between you and a specific client over a defined period</strong>. It lists every invoice you&apos;ve issued, every payment the client has made, any credit notes applied, and the resulting outstanding balance.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Think of it as a <strong className="text-white">mini ledger</strong> for a single client relationship. While an invoice says &ldquo;you owe me $2,200 for this specific project,&rdquo; a statement of account says &ldquo;here is everything that has happened between us this month &mdash; three invoices totalling $6,600, one payment of $2,200, one credit note of $330, and your current balance is $4,070.&rdquo;
            </p>
            <p className="text-gray-300 leading-relaxed">
              Statements of account are <strong className="text-white">not invoices</strong>. They do not request payment for specific work. Instead, they serve three critical purposes: <strong className="text-white">reconciliation</strong> (both you and your client can verify that your records match), <strong className="text-white">reminders</strong> (a professional way to highlight outstanding balances without sending a &ldquo;chaser&rdquo; email), and <strong className="text-white">record keeping</strong> (a single document that captures the full history of a client account).
            </p>
            <p className="text-gray-300 leading-relaxed">
              In business-to-business (B2B) relationships, statements of account are standard practice. Larger companies with accounts payable departments expect to receive them, and their internal reconciliation processes often depend on them. For freelancers, statements are less common but arguably more valuable &mdash; they provide a structured, professional way to keep clients aware of what they owe without the awkwardness of repeated payment chaser emails.
            </p>
            <p className="text-gray-300 leading-relaxed">
              In Australia, there is no legal requirement to send statements of account. Unlike tax invoices (which are required for GST purposes), statements are entirely optional. However, they are an incredibly useful tool in your collections arsenal, especially when dealing with slow-paying clients or managing multiple projects for the same client simultaneously.
            </p>
            <div className="rounded-xl bg-cyan-500/5 border border-cyan-500/20 p-5 mt-6">
              <p className="text-cyan-400 font-medium mb-2">Key Point</p>
              <p className="text-gray-400 text-sm">
                A statement of account is a <strong className="text-gray-200">summary document, not a payment request</strong>. It shows the complete picture of a client&apos;s account &mdash; all invoices issued, all payments received, all credits applied, and the net balance. Send invoices to request payment for specific work; send statements to provide the big-picture view and keep clients informed of their total outstanding balance.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Statement of Account vs Invoice vs Receipt */}
        <section id="statement-vs-invoice-vs-receipt">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center text-white text-sm font-bold">2</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Statement of Account vs Invoice vs Receipt</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Freelancers often confuse statements of account with invoices, receipts, and quotes. While they are all financial documents, each serves a distinct purpose in the billing lifecycle. Understanding the differences ensures you send the right document at the right time &mdash; and keeps your records clean for BAS reporting and tax time.
            </p>

            {/* Comparison Table */}
            <div className="rounded-2xl border border-gray-700/50 overflow-hidden mt-6">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-800/80">
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Feature</th>
                    <th className="text-left text-sm font-medium text-cyan-400 px-6 py-4">Statement</th>
                    <th className="text-left text-sm font-medium text-teal-400 px-6 py-4">Invoice</th>
                    <th className="text-left text-sm font-medium text-emerald-400 px-6 py-4">Receipt</th>
                    <th className="text-left text-sm font-medium text-blue-400 px-6 py-4">Quote</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700/50">
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm font-medium">Purpose</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">Summarise all activity</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">Request payment</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">Confirm payment</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">Estimate cost</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm font-medium">Scope</td>
                    <td className="px-6 py-3 text-cyan-400 text-sm font-medium">All transactions</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">One transaction</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">One payment</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">Proposed work</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm font-medium">Legally Required?</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">No</td>
                    <td className="px-6 py-3 text-teal-400 text-sm font-medium">Yes (for GST)</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">No (but recommended)</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">No</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm font-medium">When Sent</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">Monthly / on demand</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">After work delivered</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">After payment received</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">Before work begins</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm font-medium">Shows Balance?</td>
                    <td className="px-6 py-3 text-cyan-400 text-sm font-medium">Yes &mdash; running total</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">Only for that invoice</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">No &mdash; payment only</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">No &mdash; estimate only</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm font-medium">GST Implications</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">Shows GST-inclusive amounts</td>
                    <td className="px-6 py-3 text-teal-400 text-sm font-medium">Must itemise GST</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">References paid invoice</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">Should indicate GST</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm font-medium">Best Use</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">Reconciliation, reminders</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">Billing for specific work</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">Proof of payment</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">Pre-approval of scope</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="rounded-xl bg-amber-500/5 border border-amber-500/20 p-6 mt-6">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-amber-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
                <div>
                  <h4 className="text-amber-400 font-semibold mb-1">Important Distinction</h4>
                  <p className="text-sm text-gray-300">
                    A statement of account should <strong className="text-white">never replace an invoice</strong>. If you are GST-registered, you are legally required to issue a tax invoice for each taxable sale. Sending a statement alone is not sufficient for GST purposes &mdash; always issue invoices first, then use statements as a summary and reconciliation tool on top.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: What to Include in a Statement of Account */}
        <section id="what-to-include">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center text-white text-sm font-bold">3</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">What to Include in a Statement of Account</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              A well-structured statement of account should give your client a <strong className="text-white">complete, at-a-glance view</strong> of their account status. While there is no legally mandated format in Australia (unlike tax invoices), the best statements are clear, comprehensive, and professional. Here is everything you should include:
            </p>

            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 my-6">
              <h3 className="text-lg font-semibold text-white mb-4">Required Fields</h3>
              <div className="space-y-4 text-sm">
                <div className="rounded-lg bg-gray-900/50 p-4 border-l-4 border-cyan-400">
                  <p className="text-cyan-400 font-semibold mb-1">Your Business Details</p>
                  <p className="text-gray-400">Business name, ABN (11-digit Australian Business Number), contact details (email, phone, address). These should match your invoices exactly for consistency.</p>
                </div>
                <div className="rounded-lg bg-gray-900/50 p-4 border-l-4 border-teal-400">
                  <p className="text-teal-400 font-semibold mb-1">Client Details</p>
                  <p className="text-gray-400">Client business name, ABN (if known), billing contact name, and billing address. Match these to your invoice records for clean reconciliation.</p>
                </div>
                <div className="rounded-lg bg-gray-900/50 p-4 border-l-4 border-cyan-300">
                  <p className="text-cyan-300 font-semibold mb-1">Statement Date &amp; Period</p>
                  <p className="text-gray-400">The date the statement was generated and the period it covers (e.g., &ldquo;Statement for the period 1 February 2026 to 28 February 2026&rdquo;). This tells the client exactly what timeframe the statement represents.</p>
                </div>
                <div className="rounded-lg bg-gray-900/50 p-4 border-l-4 border-emerald-400">
                  <p className="text-emerald-400 font-semibold mb-1">Opening Balance</p>
                  <p className="text-gray-400">The amount the client owed at the start of the statement period. This is the closing balance from the previous statement (or $0.00 if this is the first statement).</p>
                </div>
                <div className="rounded-lg bg-gray-900/50 p-4 border-l-4 border-teal-300">
                  <p className="text-teal-300 font-semibold mb-1">Itemised Transactions</p>
                  <p className="text-gray-400">A chronological list of all activity during the period: invoices issued (with number, date, description, and GST-inclusive amount), payments received (with date, amount, and payment reference), and credit notes applied (with CN number, date, and amount). Each entry should be on its own row.</p>
                </div>
                <div className="rounded-lg bg-gray-900/50 p-4 border-l-4 border-cyan-500">
                  <p className="text-cyan-500 font-semibold mb-1">Closing / Outstanding Balance</p>
                  <p className="text-gray-400">The total amount the client currently owes after all transactions are accounted for. This is the most important number on the statement &mdash; make it prominent.</p>
                </div>
                <div className="rounded-lg bg-gray-900/50 p-4 border-l-4 border-teal-500">
                  <p className="text-teal-500 font-semibold mb-1">Payment Terms &amp; Instructions</p>
                  <p className="text-gray-400">Your standard payment terms (e.g., &ldquo;Net 14&rdquo;), accepted payment methods, and bank details or payment link. Make it as easy as possible for the client to pay.</p>
                </div>
              </div>
            </div>

            {/* Aging Summary */}
            <div className="rounded-xl bg-cyan-500/5 border border-cyan-500/20 p-6 my-6">
              <h3 className="text-lg font-semibold text-white mb-4">Optional but Recommended: Aging Summary</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                An aging summary breaks the outstanding balance into buckets based on how long each amount has been overdue. This is a powerful visual tool that immediately shows the client (and you) which invoices need urgent attention.
              </p>
              <div className="grid sm:grid-cols-4 gap-3">
                <div className="rounded-lg bg-emerald-500/5 border border-emerald-500/20 p-3 text-center">
                  <p className="text-emerald-400 font-bold text-sm">Current</p>
                  <p className="text-gray-400 text-xs mt-1">0-30 days</p>
                  <p className="text-gray-500 text-xs mt-1">Not yet due</p>
                </div>
                <div className="rounded-lg bg-yellow-500/5 border border-yellow-500/20 p-3 text-center">
                  <p className="text-yellow-400 font-bold text-sm">30 Days</p>
                  <p className="text-gray-400 text-xs mt-1">31-60 days</p>
                  <p className="text-gray-500 text-xs mt-1">Overdue &mdash; follow up</p>
                </div>
                <div className="rounded-lg bg-orange-500/5 border border-orange-500/20 p-3 text-center">
                  <p className="text-orange-400 font-bold text-sm">60 Days</p>
                  <p className="text-gray-400 text-xs mt-1">61-90 days</p>
                  <p className="text-gray-500 text-xs mt-1">Escalate &mdash; call client</p>
                </div>
                <div className="rounded-lg bg-red-500/5 border border-red-500/20 p-3 text-center">
                  <p className="text-red-400 font-bold text-sm">90+ Days</p>
                  <p className="text-gray-400 text-xs mt-1">Over 90 days</p>
                  <p className="text-gray-500 text-xs mt-1">Final notice required</p>
                </div>
              </div>
            </div>

            {/* Template Layout */}
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 my-6">
              <h3 className="text-lg font-semibold text-white mb-4">Statement of Account Template Layout</h3>
              <div className="rounded-lg bg-gray-900/70 p-6 font-mono text-xs text-gray-400 space-y-3 overflow-x-auto">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-cyan-400 font-bold text-sm">STATEMENT OF ACCOUNT</p>
                    <p className="text-gray-500 mt-1">Your Business Name</p>
                    <p className="text-gray-500">ABN: 12 345 678 901</p>
                    <p className="text-gray-500">your@email.com</p>
                  </div>
                  <div className="text-right">
                    <p>Statement Date: <span className="text-gray-200">1 March 2026</span></p>
                    <p>Period: <span className="text-gray-200">1 Feb &ndash; 28 Feb 2026</span></p>
                    <p>Account: <span className="text-gray-200">Client Pty Ltd</span></p>
                  </div>
                </div>
                <hr className="border-gray-700" />
                <div>
                  <p className="text-gray-500 mb-1">Bill To:</p>
                  <p className="text-gray-200">Client Business Pty Ltd</p>
                  <p className="text-gray-500">ABN: 98 765 432 109</p>
                </div>
                <hr className="border-gray-700" />
                <div className="grid grid-cols-5 gap-2 text-right">
                  <p className="text-left text-gray-500">Date</p>
                  <p className="text-left text-gray-500">Description</p>
                  <p className="text-gray-500">Charges</p>
                  <p className="text-gray-500">Payments</p>
                  <p className="text-gray-500">Balance</p>

                  <p className="text-left text-gray-300">01 Feb</p>
                  <p className="text-left text-gray-300">Opening Balance</p>
                  <p className="text-gray-400">&mdash;</p>
                  <p className="text-gray-400">&mdash;</p>
                  <p className="text-gray-200">$2,200.00</p>

                  <p className="text-left text-gray-300">05 Feb</p>
                  <p className="text-left text-gray-300">INV-0051 &mdash; Website redesign</p>
                  <p className="text-cyan-400">$3,300.00</p>
                  <p className="text-gray-400">&mdash;</p>
                  <p className="text-gray-200">$5,500.00</p>

                  <p className="text-left text-gray-300">12 Feb</p>
                  <p className="text-left text-gray-300">Payment received &mdash; Ref: TFR-8821</p>
                  <p className="text-gray-400">&mdash;</p>
                  <p className="text-emerald-400">$2,200.00</p>
                  <p className="text-gray-200">$3,300.00</p>

                  <p className="text-left text-gray-300">18 Feb</p>
                  <p className="text-left text-gray-300">INV-0054 &mdash; SEO audit</p>
                  <p className="text-cyan-400">$1,100.00</p>
                  <p className="text-gray-400">&mdash;</p>
                  <p className="text-gray-200">$4,400.00</p>

                  <p className="text-left text-gray-300">25 Feb</p>
                  <p className="text-left text-gray-300">CN-0012 &mdash; Discount applied</p>
                  <p className="text-rose-400">-$330.00</p>
                  <p className="text-gray-400">&mdash;</p>
                  <p className="text-gray-200">$4,070.00</p>
                </div>
                <hr className="border-gray-700" />
                <div className="text-right space-y-1">
                  <p>Opening Balance: <span className="text-gray-200">$2,200.00</span></p>
                  <p>Total Charges: <span className="text-cyan-400">$4,400.00</span></p>
                  <p>Total Payments: <span className="text-emerald-400">-$2,200.00</span></p>
                  <p>Total Credits: <span className="text-rose-400">-$330.00</span></p>
                  <p className="text-gray-200 font-bold">Closing Balance: <span className="text-cyan-400">$4,070.00</span></p>
                </div>
                <hr className="border-gray-700" />
                <div className="text-gray-500 text-xs">
                  <p>Aging: Current $1,100.00 | 30 days $2,970.00 | 60 days $0.00 | 90+ days $0.00</p>
                  <p className="mt-1">Payment terms: Net 14 | BSB: 063-000 | Acc: 1234 5678 | Ref: Client Name</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-cyan-500/5 border border-cyan-500/20 p-5 mt-6">
              <p className="text-cyan-400 font-medium mb-2">Formatting Tip</p>
              <p className="text-gray-400 text-sm">
                Keep your statement <strong className="text-gray-200">clean, scannable, and professional</strong>. Use consistent date formatting (DD MMM YYYY), right-align monetary columns, clearly distinguish between charges and payments (use colour coding if sending digitally), and make the closing balance the most prominent element on the page. Your statement should be understandable in under 10 seconds.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: When to Send a Statement of Account */}
        <section id="when-to-send">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center text-white text-sm font-bold">4</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">When to Send a Statement of Account</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Timing matters. Sending statements at the right moments maximises their impact and keeps your accounts receivable healthy. Here are the key scenarios when a statement of account adds real value:
            </p>

            <div className="space-y-4 my-6">
              {[
                {
                  title: 'Monthly (For Ongoing Clients)',
                  desc: 'If you have a client with regular, ongoing work, send a monthly statement at the beginning of each month covering the previous month\'s activity. This establishes a rhythm, gives the client a predictable reconciliation document, and ensures no invoice falls through the cracks. Monthly statements are the gold standard for retainer clients and long-term engagements.',
                  icon: (
                    <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                    </svg>
                  ),
                },
                {
                  title: 'Quarterly (For Less Frequent Billing)',
                  desc: 'For clients you bill irregularly or only a few times per year, a quarterly statement keeps the account tidy without being excessive. Send at the end of each quarter (September, December, March, June in Australia) or whenever the balance changes significantly.',
                  icon: (
                    <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                    </svg>
                  ),
                },
                {
                  title: 'When Payment Is Overdue',
                  desc: 'As soon as an invoice passes its due date, a statement of account is one of the most professional and effective ways to remind the client. Unlike a blunt "your payment is overdue" email, a statement presents the facts neutrally — here are all the invoices, here are the payments, here is what\'s outstanding. The client can see the situation for themselves without feeling accused.',
                  icon: (
                    <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                },
                {
                  title: 'End of Financial Year',
                  desc: 'Send a year-end statement (covering 1 July to 30 June) to every client with any activity during the financial year. This helps both parties reconcile their books for tax purposes, catch any discrepancies before BAS or tax returns are lodged, and close out the year cleanly. Many accountants and bookkeepers specifically request these.',
                  icon: (
                    <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                    </svg>
                  ),
                },
                {
                  title: 'When a Client Disputes Charges',
                  desc: 'If a client questions an amount or says they\'ve already paid, a statement of account is your best response. It lays out the complete transaction history — every invoice, every payment, every credit — so both parties can identify the discrepancy. Statements are factual, not emotional, which makes them ideal for resolving billing disputes professionally.',
                  icon: (
                    <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                    </svg>
                  ),
                },
              ].map((scenario, i) => (
                <div key={i} className="rounded-xl bg-gray-800/40 border border-gray-700/40 p-5">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      {scenario.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">{scenario.title}</h4>
                      <p className="text-sm text-gray-400">{scenario.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-xl bg-amber-500/5 border border-amber-500/20 p-6 my-6">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-amber-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
                <div>
                  <h4 className="text-amber-400 font-semibold mb-1">Important Rule</h4>
                  <p className="text-sm text-gray-300">
                    <strong className="text-white">Never send a statement instead of an invoice</strong>. Statements are a summary and reconciliation tool &mdash; they sit on top of your invoicing process, not in place of it. Always issue individual tax invoices for each piece of work first. Then use statements to give your client the big-picture view of their account.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Using Statements to Manage Overdue Payments */}
        <section id="managing-overdue-payments">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center text-white text-sm font-bold">5</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Using Statements to Manage Overdue Payments</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Late payments are one of the biggest challenges facing Australian freelancers and small businesses. According to the Australian Small Business and Family Enterprise Ombudsman (ASBFEO), small businesses are collectively owed over <strong className="text-white">$26 billion in late payments</strong> at any given time. Statements of account are one of your most effective tools for tackling this problem &mdash; they work as a <strong className="text-white">professional, non-confrontational reminder</strong> that clearly shows what is owed and how long it has been outstanding.
            </p>

            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 my-6">
              <h3 className="text-lg font-semibold text-white mb-4">Aging Analysis: Your Early Warning System</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                The aging summary on your statement is your most powerful collections tool. It groups the outstanding balance into time-based buckets, making it immediately obvious which amounts are current and which are overdue. Here is how to interpret and act on each bucket:
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-2 text-sm text-gray-400">
                  <span className="text-emerald-400 font-bold flex-shrink-0 w-24">Current:</span>
                  <span>0-30 days. These invoices are within normal payment terms. No action needed &mdash; the statement itself serves as confirmation that the invoice has been received and is expected.</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-gray-400">
                  <span className="text-yellow-400 font-bold flex-shrink-0 w-24">30 Days:</span>
                  <span>31-60 days overdue. The invoice is past its due date. The statement acts as a gentle, professional reminder. Most clients will pay at this stage when they see the aging clearly laid out. Follow up with a brief email referencing the statement.</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-gray-400">
                  <span className="text-orange-400 font-bold flex-shrink-0 w-24">60 Days:</span>
                  <span>61-90 days overdue. This is a serious concern. Send the statement alongside a phone call to the client. Ask for a specific payment date and document the commitment. The statement provides the factual basis for the conversation.</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-gray-400">
                  <span className="text-red-400 font-bold flex-shrink-0 w-24">90+ Days:</span>
                  <span>Over 90 days overdue. This requires escalation beyond statements. Issue a formal letter of demand, consider engaging a debt collection agency, or prepare for small claims (VCAT in Victoria, NCAT in NSW). The statement serves as evidence of the debt history.</span>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-cyan-500/5 border border-cyan-500/20 p-6 my-6">
              <h3 className="text-lg font-semibold text-white mb-4">Escalation Strategy Using Statements</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                A systematic escalation approach ensures no overdue invoice is forgotten and that you maintain professionalism at every stage:
              </p>
              <div className="space-y-4">
                <div className="rounded-lg bg-gray-800/50 border border-emerald-500/20 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-7 h-7 rounded-full bg-emerald-500/10 flex items-center justify-center text-xs font-bold text-emerald-400">1</span>
                    <h4 className="text-emerald-400 font-semibold text-sm">30 Days Overdue: Friendly Statement</h4>
                  </div>
                  <p className="text-gray-400 text-sm">Send your regular monthly statement. The aging summary will naturally highlight the overdue amount. Include a brief, friendly note: &ldquo;Please note that invoice INV-0042 is now past its due date. If this has already been paid, please disregard this notice.&rdquo; Most payments are collected at this stage.</p>
                </div>
                <div className="rounded-lg bg-gray-800/50 border border-yellow-500/20 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-7 h-7 rounded-full bg-yellow-500/10 flex items-center justify-center text-xs font-bold text-yellow-400">2</span>
                    <h4 className="text-yellow-400 font-semibold text-sm">60 Days Overdue: Statement + Phone Call</h4>
                  </div>
                  <p className="text-gray-400 text-sm">Send an updated statement and follow up with a direct phone call. Reference the statement in the call: &ldquo;I&apos;ve sent through an updated statement showing the current balance. Could we arrange payment this week?&rdquo; Get a specific commitment date and note it down.</p>
                </div>
                <div className="rounded-lg bg-gray-800/50 border border-red-500/20 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-7 h-7 rounded-full bg-red-500/10 flex items-center justify-center text-xs font-bold text-red-400">3</span>
                    <h4 className="text-red-400 font-semibold text-sm">90 Days Overdue: Final Notice + Letter of Demand</h4>
                  </div>
                  <p className="text-gray-400 text-sm">Send a final statement marked &ldquo;FINAL NOTICE&rdquo; alongside a formal letter of demand. The statement provides the evidence; the letter of demand provides the legal intent. State clearly that if payment is not received within 14 days, you will pursue debt recovery action. Keep copies of everything.</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-teal-500/5 border border-teal-500/20 p-6 my-6">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-teal-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
                <div>
                  <h4 className="text-teal-400 font-semibold mb-1">Statements as Evidence</h4>
                  <p className="text-sm text-gray-300">
                    In debt recovery proceedings, a statement of account showing a clear history of invoices sent, payment terms, payments received (or not), and the outstanding balance is <strong className="text-white">valuable supporting evidence</strong>. It demonstrates that you maintained professional records, communicated the debt clearly, and gave the client ample opportunity to pay. Courts and tribunals view this favourably &mdash; it shows you acted reasonably and in good faith.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed">
              The beauty of using statements for collections is that they are <strong className="text-white">factual, not emotional</strong>. You are not accusing the client of anything &mdash; you are simply presenting the numbers. This makes them far more effective than angry emails or passive-aggressive reminders. The statement speaks for itself: here is what was invoiced, here is what was paid, here is what remains. The client can see the situation clearly and respond accordingly.
            </p>
          </div>
        </section>

        {/* Section 6: Creating Statements with InvoiceFlow */}
        <section id="invoiceflow-statements">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center text-white text-sm font-bold">6</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Creating Statements with InvoiceFlow</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              InvoiceFlow takes the manual work out of statement generation. Because every invoice, payment, and credit note is already tracked in the system, generating a statement of account is a <strong className="text-white">one-click operation</strong> &mdash; no spreadsheets, no manual calculations, no missed transactions.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-cyan-500/20 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                  <h4 className="text-white font-semibold text-sm">Auto-Generated Statements</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Select a client and a date range, and InvoiceFlow instantly compiles a complete statement from your invoice history. Every invoice, payment, and credit note is automatically included &mdash; nothing to type, nothing to calculate, nothing to miss.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-cyan-500/20 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
                  </svg>
                  <h4 className="text-white font-semibold text-sm">Built-In Aging Reports</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Every statement includes an automatic aging summary (current, 30, 60, 90+ days). At a glance, both you and your client can see exactly which invoices are current and which need urgent attention. No manual bucketing required.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-cyan-500/20 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                  </svg>
                  <h4 className="text-white font-semibold text-sm">One-Click Send to Client</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Send statements directly to your client via email with a single click. The statement is attached as a professional PDF and the email body includes a summary of the outstanding balance. Clients can view it on any device without needing to log in to anything.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-cyan-500/20 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                  <h4 className="text-white font-semibold text-sm">PDF Export &amp; Branded Templates</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Export any statement as a professionally formatted PDF with your business branding &mdash; logo, colours, and contact details. Use it for your records, attach it to a letter of demand, or upload it to your accounting software for cross-referencing.
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              <div className="rounded-xl bg-gray-800/50 border border-cyan-500/20 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                  </svg>
                  <h4 className="text-white font-semibold text-sm">Client-Level Tracking</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  See which clients need statements at a glance. InvoiceFlow flags clients with overdue balances, tracks which clients have received statements recently, and surfaces those who need follow-up. Never lose track of an outstanding balance again.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-cyan-500/20 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                  </svg>
                  <h4 className="text-white font-semibold text-sm">Automated Statement Scheduling</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Set up automatic monthly statements for your retainer clients. InvoiceFlow generates and sends them on the schedule you choose &mdash; first of the month, end of the month, or any day in between. Set it once and let the system handle the rest.
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-cyan-500/5 border border-cyan-500/20 p-5 mt-6">
              <p className="text-cyan-400 font-medium mb-2">Why It Matters</p>
              <p className="text-gray-400 text-sm">
                Manually creating statements from spreadsheets is time-consuming and error-prone. A single missed transaction or calculation error can undermine the entire document&apos;s credibility &mdash; and your client&apos;s trust. InvoiceFlow eliminates these risks by <strong className="text-gray-200">auto-generating statements from your existing invoice data</strong>, ensuring every transaction is accounted for and every number is accurate. Spend your time on client work, not paperwork.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Related Tools */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-white mb-2 text-center">Related Tools</h2>
        <p className="text-gray-400 text-center mb-8">Free tools to create invoices, track payments, and manage your accounts.</p>
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
        <p className="text-gray-400 text-center mb-8">In-depth guides on getting paid, invoicing, and managing your freelance finances.</p>
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
            Generate Statements of Account in One Click
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            InvoiceFlow auto-generates statements from your invoice history, includes aging reports, and lets you send branded PDFs to clients instantly. Stop building spreadsheets &mdash; start getting paid.
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
