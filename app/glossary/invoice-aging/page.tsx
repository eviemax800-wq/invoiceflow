import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Invoice Aging: Aging Reports & AR Management Guide for Freelancers — InvoiceFlow',
  description:
    'What is invoice aging? Learn how to use aging reports to track overdue invoices, prioritise collections, and improve cash flow. Includes aging bucket breakdown, collection strategies, and Australian-specific tips.',
  keywords: [
    'invoice aging report',
    'accounts receivable aging',
    'aging receivables',
    'invoice aging meaning',
    'overdue invoice tracking',
    'aging schedule',
    'AR aging report',
    'accounts receivable management',
    'invoice aging buckets',
    'invoice aging freelancer',
    'how to track overdue invoices',
    'aging report template',
  ],
  alternates: { canonical: '/glossary/invoice-aging' },
  openGraph: {
    title: 'Invoice Aging: Aging Reports & AR Management Guide for Freelancers — InvoiceFlow',
    description:
      'Everything about invoice aging: what it means, how aging buckets work (current/30/60/90+), collection strategies for each bucket, DSO calculation, and how to reduce your aging receivables.',
    url: 'https://invoiceflow-teal.vercel.app/glossary/invoice-aging',
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
    { '@type': 'ListItem', position: 3, name: 'Invoice Aging', item: `${BASE_URL}/glossary/invoice-aging` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is an invoice aging report?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An invoice aging report (also called an accounts receivable aging report or aging schedule) is a document that categorises all your outstanding invoices by how long they have been unpaid. Invoices are sorted into "buckets" based on days past the due date: Current (not yet due), 1-30 days overdue, 31-60 days overdue, 61-90 days overdue, and 90+ days overdue. Each bucket shows the total dollar amount outstanding in that time range. This allows you to see at a glance where your collection problems are, which clients are chronically late, and how much of your receivables are at risk of becoming bad debt.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are invoice aging buckets?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Aging buckets are the time categories used to classify unpaid invoices. Standard buckets are: Current (within payment terms, not yet overdue), 1-30 days past due, 31-60 days past due, 61-90 days past due, and Over 90 days past due. Each bucket represents a different level of collection risk. Current invoices are normal. 1-30 days might just need a reminder. 31-60 days needs escalation. 61-90 days is a serious warning sign. Over 90 days has a very high risk of becoming a bad debt — research shows that the probability of collecting an invoice drops below 50% after 90 days.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is DSO (Days Sales Outstanding)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'DSO (Days Sales Outstanding) is a key metric calculated from your aging data that tells you the average number of days it takes to collect payment after an invoice is issued. The formula is: DSO = (Total Accounts Receivable / Total Credit Sales) x Number of Days. For example, if you have $25,000 in outstanding invoices and your total revenue for the last 90 days was $45,000, your DSO is ($25,000 / $45,000) x 90 = 50 days. The lower your DSO, the faster you are getting paid. A DSO under 30 is excellent, 30-45 is typical for Australian freelancers, and above 45 signals a collection problem that needs attention.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can I reduce my invoice aging?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'To reduce aging receivables: (1) Set shorter payment terms — move from Net 30 to Net 14 or Net 7. (2) Send automated reminders before the due date and immediately after. (3) Request deposits of 30-50% upfront to reduce the total amount at risk. (4) Invoice immediately when work is completed — do not delay. (5) Offer incentives for early payment, like a 2% discount for payment within 7 days. (6) Escalate systematically — friendly reminder, formal reminder, phone call, letter of demand, small claims court. (7) Review your aging report weekly and contact clients in the 31-60 day bucket before they slip to 90+. (8) Consider requiring payment before delivery for new or unreliable clients.',
      },
    },
    {
      '@type': 'Question',
      name: 'When should I write off an aged invoice as bad debt?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Under ATO rules (Section 25-35 of ITAA 1997), you can write off a debt as bad when you have taken reasonable steps to recover it and there is little or no chance of receiving payment. Practically, consider writing off after: (1) The invoice is 180+ days overdue, (2) You have sent at least 3-4 follow-ups including a formal letter of demand, (3) The client has ceased trading, gone into administration, or is unreachable, (4) The cost of pursuing the debt exceeds the debt value (e.g. small claims court costs vs invoice amount). When you write off a bad debt, it becomes a tax deduction. If you previously remitted GST on the invoice, you can also claim a GST adjustment (1/11th of the written-off amount) on your next BAS.',
      },
    },
  ],
};

const tocItems = [
  { id: 'what-is-invoice-aging', label: '1. What Is Invoice Aging?' },
  { id: 'aging-buckets', label: '2. Understanding Aging Buckets' },
  { id: 'dso-metric', label: '3. Days Sales Outstanding (DSO)' },
  { id: 'collection-strategies', label: '4. Collection Strategies by Bucket' },
  { id: 'bad-debt-threshold', label: '5. When Aged Invoices Become Bad Debt' },
  { id: 'invoiceflow-aging', label: '6. How InvoiceFlow Helps' },
];

const relatedTools = [
  {
    href: '/tools/late-payment-calculator',
    name: 'Late Payment Calculator',
    description: 'Calculate interest on overdue invoices using the ATO General Interest Charge rate — know exactly what late-paying clients owe.',
    icon: (
      <svg className="w-6 h-6 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    href: '/tools/overdue-invoice-follow-up-generator',
    name: 'Overdue Follow-Up Generator',
    description: 'Generate professional overdue invoice reminder emails at every escalation stage — polite, firm, or formal.',
    icon: (
      <svg className="w-6 h-6 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    href: '/tools/letter-of-demand-generator',
    name: 'Letter of Demand Generator',
    description: 'Generate a formal letter of demand for invoices in the 60-90+ day bucket — the last step before legal action.',
    icon: (
      <svg className="w-6 h-6 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    href: '/tools/invoice-generator',
    name: 'Invoice Generator',
    description: 'Create professional invoices with clear payment terms and due dates — reducing the chance of invoices aging in the first place.',
    icon: (
      <svg className="w-6 h-6 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
];

const relatedGuides = [
  {
    href: '/guides/getting-paid-faster',
    name: 'Getting Paid Faster',
    description: 'Proven strategies to prevent invoices from aging — shorter terms, deposits, follow-up frameworks, and payment methods.',
  },
  {
    href: '/guides/invoicing-101',
    name: 'Invoicing 101',
    description: 'How to create clear, compliant invoices with strong payment terms that reduce overdue rates from day one.',
  },
  {
    href: '/guides/gst-for-freelancers',
    name: 'GST for Freelancers',
    description: 'How to handle GST on overdue and written-off invoices — including BAS adjustments for bad debts.',
  },
];

export default function InvoiceAgingGlossaryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative px-4 pt-20 pb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-rose-500/10 via-pink-500/10 to-rose-500/10 blur-3xl" />
        <div className="relative max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/glossary" className="hover:text-white transition-colors">Glossary</Link>
            <span>/</span>
            <span className="text-white">Invoice Aging</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            Glossary &mdash; Cash Flow &amp; Payments
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Invoice Aging{' '}
            <span className="bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">
              Explained for Freelancers
            </span>
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            Invoice aging tracks how long your invoices have been unpaid. This guide covers aging buckets (current/30/60/90+ days), how to read an aging report, DSO calculation, collection strategies for each stage, and when to write off bad debt &mdash; with Australian-specific thresholds and legal options.
          </p>

          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>9 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Australia-Focused 2025-26</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
              </svg>
              <span>Updated March 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* In a Nutshell */}
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <div className="rounded-2xl bg-gradient-to-br from-rose-500/10 to-pink-500/10 border border-rose-500/20 p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-rose-500/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-white">In a Nutshell</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-rose-500/20 flex items-center justify-center text-rose-400 text-xs font-bold">$26B</span>
              <div>
                <p className="text-white font-medium text-sm">$26 Billion in Unpaid Invoices</p>
                <p className="text-gray-400 text-sm">Australian small businesses are collectively owed $26B in aging receivables</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-rose-500/20 flex items-center justify-center text-rose-400 text-xs font-bold">90d</span>
              <div>
                <p className="text-white font-medium text-sm">90+ Days = Danger Zone</p>
                <p className="text-gray-400 text-sm">Collection probability drops below 50% after 90 days overdue</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-rose-500/20 flex items-center justify-center text-rose-400 text-xs font-bold">34d</span>
              <div>
                <p className="text-white font-medium text-sm">Average AU Payment: 34 Days</p>
                <p className="text-gray-400 text-sm">Australian SMEs wait an average of 34 days to be paid</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-rose-500/20 flex items-center justify-center text-rose-400 text-xs font-bold">5</span>
              <div>
                <p className="text-white font-medium text-sm">5 Standard Aging Buckets</p>
                <p className="text-gray-400 text-sm">Current, 1-30, 31-60, 61-90, and 90+ days past due</p>
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
              <a key={item.id} href={`#${item.id}`} className="flex items-center gap-2 text-gray-400 hover:text-rose-400 transition-colors text-sm py-1">
                <svg className="w-4 h-4 text-rose-500/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
        <section id="what-is-invoice-aging">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center text-white text-sm font-bold">1</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">What Is Invoice Aging?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Invoice aging is the practice of <strong className="text-white">categorising your outstanding invoices by how long they have been unpaid</strong>. An aging report (also called an accounts receivable aging report or aging schedule) organises every unpaid invoice into time-based &ldquo;buckets&rdquo; so you can see at a glance which invoices need attention.
            </p>
            <p className="text-gray-300 leading-relaxed">
              For freelancers, aging reports are the <strong className="text-white">single most important tool for managing collections</strong>. Without one, overdue invoices slip through the cracks, cash flow suffers, and you discover problems too late. With one, you can proactively address late payments before they become <Link href="/glossary/bad-debt" className="text-rose-400 hover:text-rose-300 underline underline-offset-2">bad debts</Link>.
            </p>
            <p className="text-gray-300 leading-relaxed">
              The longer an invoice remains unpaid, the less likely you are to collect it. Industry data shows that collection probability drops from <strong className="text-white">95% for current invoices to below 50% after 90 days</strong>. This is why aging reports are not just a bookkeeping tool &mdash; they are an early warning system for your cash flow.
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section id="aging-buckets">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center text-white text-sm font-bold">2</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Understanding Aging Buckets</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <div className="space-y-4 mt-6">
              {[
                { bucket: 'Current', days: 'Not yet due', risk: 'None', color: 'text-green-400', bg: 'bg-green-500/10', border: 'border-green-500/20', prob: '95%+', desc: 'Invoice is within its payment terms. No action needed — but a friendly pre-due reminder can speed up payment.' },
                { bucket: '1-30 Days', days: '1-30 days past due', risk: 'Low', color: 'text-yellow-400', bg: 'bg-yellow-500/10', border: 'border-yellow-500/20', prob: '85-90%', desc: 'Common and usually not malicious — the client may have simply overlooked it. A polite reminder email typically resolves 80% of invoices in this bucket.' },
                { bucket: '31-60 Days', days: '31-60 days past due', risk: 'Medium', color: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/20', prob: '70-80%', desc: 'Concerning. The client has been reminded and still has not paid. Time to escalate: phone call, firmer email, and a review of whether to continue work with this client.' },
                { bucket: '61-90 Days', days: '61-90 days past due', risk: 'High', color: 'text-red-400', bg: 'bg-red-500/10', border: 'border-red-500/20', prob: '50-65%', desc: 'Serious. Consider sending a formal letter of demand, pausing any active work, and calculating interest owed. This is the last window before collection probability drops sharply.' },
                { bucket: '90+ Days', days: 'Over 90 days past due', risk: 'Critical', color: 'text-red-500', bg: 'bg-red-500/10', border: 'border-red-500/20', prob: '<50%', desc: 'Danger zone. Evaluate whether to pursue via small claims tribunal, engage a debt collector, or write off as bad debt. Each option has costs and time implications.' },
              ].map((item, i) => (
                <div key={i} className={`rounded-xl ${item.bg} border ${item.border} p-6`}>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <h3 className={`text-lg font-semibold ${item.color}`}>{item.bucket}</h3>
                      <span className="text-xs text-gray-500">{item.days}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`text-xs px-2 py-0.5 rounded-full ${item.bg} ${item.color}`}>Risk: {item.risk}</span>
                      <span className="text-xs text-gray-500">Collection: {item.prob}</span>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Sample Aging Report */}
            <h3 className="text-xl font-bold text-white mt-8 mb-4">Sample Aging Report</h3>
            <div className="rounded-2xl border border-gray-700/50 overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-800/80">
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Client</th>
                    <th className="text-right text-sm font-medium text-green-400 px-4 py-4">Current</th>
                    <th className="text-right text-sm font-medium text-yellow-400 px-4 py-4">1-30</th>
                    <th className="text-right text-sm font-medium text-amber-400 px-4 py-4">31-60</th>
                    <th className="text-right text-sm font-medium text-red-400 px-4 py-4">61-90</th>
                    <th className="text-right text-sm font-medium text-red-500 px-4 py-4">90+</th>
                    <th className="text-right text-sm font-medium text-gray-300 px-6 py-4">Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700/50">
                  {[
                    { client: 'Acme Corp', current: '$3,500', d30: '$0', d60: '$0', d90: '$0', d90p: '$0', total: '$3,500' },
                    { client: 'TechStart Pty Ltd', current: '$0', d30: '$2,200', d60: '$0', d90: '$0', d90p: '$0', total: '$2,200' },
                    { client: 'CloudNine Agency', current: '$0', d30: '$0', d60: '$4,800', d90: '$0', d90p: '$0', total: '$4,800' },
                    { client: 'DataFlow Inc', current: '$0', d30: '$0', d60: '$0', d90: '$1,500', d90p: '$3,200', total: '$4,700' },
                  ].map((row, i) => (
                    <tr key={i} className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-gray-300 text-sm font-medium">{row.client}</td>
                      <td className="px-4 py-3 text-green-400 text-sm text-right">{row.current}</td>
                      <td className="px-4 py-3 text-yellow-400 text-sm text-right">{row.d30}</td>
                      <td className="px-4 py-3 text-amber-400 text-sm text-right">{row.d60}</td>
                      <td className="px-4 py-3 text-red-400 text-sm text-right">{row.d90}</td>
                      <td className="px-4 py-3 text-red-500 text-sm text-right">{row.d90p}</td>
                      <td className="px-6 py-3 text-white text-sm text-right font-bold">{row.total}</td>
                    </tr>
                  ))}
                  <tr className="bg-rose-900/10">
                    <td className="px-6 py-3 text-rose-400 text-sm font-bold">TOTAL</td>
                    <td className="px-4 py-3 text-green-400 text-sm text-right font-bold">$3,500</td>
                    <td className="px-4 py-3 text-yellow-400 text-sm text-right font-bold">$2,200</td>
                    <td className="px-4 py-3 text-amber-400 text-sm text-right font-bold">$4,800</td>
                    <td className="px-4 py-3 text-red-400 text-sm text-right font-bold">$1,500</td>
                    <td className="px-4 py-3 text-red-500 text-sm text-right font-bold">$3,200</td>
                    <td className="px-6 py-3 text-white text-sm text-right font-bold">$15,200</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="rounded-xl bg-rose-500/5 border border-rose-500/20 p-5 mt-4">
              <p className="text-rose-400 font-medium mb-2">What This Report Tells You</p>
              <p className="text-gray-400 text-sm">
                In this example, <strong className="text-gray-200">$9,500 (63%) of outstanding invoices are 31+ days overdue</strong>. DataFlow Inc is the biggest concern with $4,700 spread across the 61-90 and 90+ buckets &mdash; collection probability is declining rapidly. CloudNine&rsquo;s $4,800 in the 31-60 bucket needs immediate escalation before it slides further. Only $3,500 (23%) is current and healthy.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section id="dso-metric">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center text-white text-sm font-bold">3</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Days Sales Outstanding (DSO)</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              DSO is the key metric derived from your aging data. It tells you the <strong className="text-white">average number of days it takes to collect payment</strong> after invoicing.
            </p>

            <div className="rounded-xl bg-rose-500/10 border border-rose-500/20 p-6 text-center mt-6">
              <p className="text-rose-300 font-mono text-lg font-semibold">
                DSO = (Accounts Receivable &divide; Total Revenue) &times; Days in Period
              </p>
            </div>

            <div className="rounded-2xl border border-gray-700/50 overflow-hidden mt-6">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-800/80">
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">DSO Range</th>
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Assessment</th>
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">What It Means</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700/50">
                  {[
                    { dso: 'Under 20 days', assessment: 'Excellent', meaning: 'You are getting paid very quickly. Likely using deposits, short terms, or payment-before-delivery.' },
                    { dso: '20-30 days', assessment: 'Good', meaning: 'Healthy collection speed. Most invoices are being paid within terms.' },
                    { dso: '30-45 days', assessment: 'Average', meaning: 'Typical for Australian freelancers. Room for improvement through shorter terms or automated reminders.' },
                    { dso: '45-60 days', assessment: 'Needs attention', meaning: 'Clients are consistently paying late. Review your payment terms and follow-up process.' },
                    { dso: 'Over 60 days', assessment: 'Problem', meaning: 'Significant cash flow risk. Likely have invoices deep in the 60-90+ buckets. Needs immediate action.' },
                  ].map((row, i) => (
                    <tr key={i} className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-rose-400 text-sm font-bold">{row.dso}</td>
                      <td className="px-6 py-3 text-gray-300 text-sm font-medium">{row.assessment}</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">{row.meaning}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section id="collection-strategies">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center text-white text-sm font-bold">4</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Collection Strategies by Bucket</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              {[
                { bucket: '1-30 Days', action: 'Gentle Reminder', steps: ['Send polite email reminder the day after due date', 'Resend the original invoice with "Reminder" in subject', 'Include the payment link or bank details for easy action', 'Follow up again at 14 days with a slightly firmer tone'], color: 'text-yellow-400' },
                { bucket: '31-60 Days', action: 'Escalation', steps: ['Phone call to the client (not just email)', 'Send formal overdue notice with interest warning', 'Pause any active work for this client', 'Request a specific payment date commitment in writing'], color: 'text-amber-400' },
                { bucket: '61-90 Days', action: 'Formal Action', steps: ['Send a formal letter of demand (keep a copy)', 'Calculate and communicate interest owed under contract', 'Inform client of legal options you may pursue', 'Set a firm deadline (14 days) in the demand letter'], color: 'text-red-400' },
                { bucket: '90+ Days', action: 'Resolution', steps: ['Evaluate: is the amount worth pursuing legally?', 'Small claims tribunal (state-specific, $3K-$25K limits)', 'Engage a debt collector (typically 10-25% commission)', 'Write off as bad debt (tax deduction + GST adjustment)'], color: 'text-red-500' },
              ].map((item, i) => (
                <div key={i} className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                  <h4 className={`${item.color} font-semibold mb-1`}>{item.bucket}: {item.action}</h4>
                  <ul className="space-y-2 mt-3">
                    {item.steps.map((step, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-gray-400">
                        <svg className={`w-4 h-4 ${item.color} flex-shrink-0 mt-0.5`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5 */}
        <section id="bad-debt-threshold">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center text-white text-sm font-bold">5</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">When Aged Invoices Become Bad Debt</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Not every overdue invoice will be collected. At some point, an aged invoice becomes a <Link href="/glossary/bad-debt" className="text-rose-400 hover:text-rose-300 underline underline-offset-2">bad debt</Link>. Knowing when to write off is both a financial and tax decision.
            </p>

            <div className="rounded-2xl border border-gray-700/50 overflow-hidden mt-6">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-800/80">
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">State/Territory</th>
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Tribunal</th>
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Small Claims Limit</th>
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Filing Fee</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700/50">
                  {[
                    { state: 'NSW', tribunal: 'NCAT', limit: '$10,000', fee: '$53-$124' },
                    { state: 'VIC', tribunal: 'VCAT', limit: '$15,000', fee: '$75-$223' },
                    { state: 'QLD', tribunal: 'QCAT', limit: '$25,000', fee: '$72-$547' },
                    { state: 'SA', tribunal: 'SACAT', limit: '$12,000', fee: '$84-$169' },
                    { state: 'WA', tribunal: 'SAT', limit: '$10,000', fee: '$74-$185' },
                    { state: 'TAS', tribunal: 'Magistrates', limit: '$5,000', fee: '$72-$130' },
                    { state: 'NT', tribunal: 'NTCAT', limit: '$25,000', fee: '$68-$130' },
                    { state: 'ACT', tribunal: 'ACAT', limit: '$25,000', fee: '$60-$155' },
                  ].map((row, i) => (
                    <tr key={i} className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-gray-300 text-sm font-medium">{row.state}</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">{row.tribunal}</td>
                      <td className="px-6 py-3 text-rose-400 text-sm font-medium">{row.limit}</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">{row.fee}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="rounded-xl bg-rose-500/5 border border-rose-500/20 p-5 mt-6">
              <p className="text-rose-400 font-medium mb-2">Tax Benefit of Bad Debt Write-Off</p>
              <p className="text-gray-400 text-sm">
                When you write off a bad debt, it becomes a <strong className="text-gray-200">tax deduction</strong> (Section 25-35 ITAA 1997). If you previously remitted GST on that invoice, you can also claim a <strong className="text-gray-200">GST adjustment of 1/11th</strong> of the written-off amount on your next BAS (label 1C). You must be able to demonstrate that you took reasonable steps to recover the debt. Keep records of all follow-up emails, letters of demand, and phone calls.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6 */}
        <section id="invoiceflow-aging">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center text-white text-sm font-bold">6</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">How InvoiceFlow Helps</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              InvoiceFlow automates invoice aging tracking so you never lose visibility over your receivables.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              {[
                { title: 'Automatic Aging Reports', desc: 'Every invoice is automatically categorised into aging buckets. Your dashboard shows a real-time aging summary — no spreadsheets needed.' },
                { title: 'Automated Reminders', desc: 'Set up automatic payment reminders at key intervals — before due date, on due date, 7 days overdue, 14 days overdue. Clients receive professional reminders without you doing anything.' },
                { title: 'Client Payment History', desc: 'See each client\'s payment track record at a glance — average payment time, overdue frequency, total outstanding. Identify problem clients before they cause cash flow issues.' },
                { title: 'DSO Tracking', desc: 'InvoiceFlow calculates your DSO automatically and tracks it over time, so you can see whether your collection efficiency is improving or deteriorating.' },
              ].map((item, i) => (
                <div key={i} className="rounded-xl bg-gray-800/50 border border-rose-500/20 p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center">
                      <svg className="w-4 h-4 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
                  { label: 'Accounts Receivable', href: '/glossary/accounts-receivable' },
                  { label: 'Overdue Invoice', href: '/glossary/overdue-invoice' },
                  { label: 'Bad Debt', href: '/glossary/bad-debt' },
                  { label: 'Cash Flow', href: '/glossary/cash-flow' },
                  { label: 'Payment Terms', href: '/glossary/payment-terms' },
                  { label: 'Late Payment Interest', href: '/glossary/late-payment-interest' },
                  { label: 'Working Capital', href: '/glossary/working-capital' },
                ].map((term) => (
                  <Link key={term.href} href={term.href} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-400 text-sm font-medium hover:bg-rose-500/20 transition-colors">
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
        <p className="text-gray-400 text-center mb-8">Free tools to help you manage aging invoices and recover overdue payments.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {relatedTools.map((tool) => (
            <Link key={tool.href} href={tool.href} className="group p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:border-rose-500/50 hover:bg-gray-800/80 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center mb-4">{tool.icon}</div>
              <h3 className="text-white font-medium mb-2 group-hover:text-rose-400 transition-colors">{tool.name}</h3>
              <p className="text-sm text-gray-400">{tool.description}</p>
              <div className="mt-4 text-rose-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
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
        <p className="text-gray-400 text-center mb-8">In-depth guides on getting paid faster and managing overdue invoices.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {relatedGuides.map((guide) => (
            <Link key={guide.href} href={guide.href} className="group p-6 rounded-2xl bg-gray-800/40 border border-gray-700/40 hover:border-rose-500/40 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h3 className="text-white font-medium mb-2 group-hover:text-rose-400 transition-colors">{guide.name}</h3>
              <p className="text-sm text-gray-400">{guide.description}</p>
              <div className="mt-4 text-rose-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
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
              <summary className="flex items-center justify-between cursor-pointer px-6 py-4 text-white font-medium hover:text-rose-400 transition-colors">
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
        <div className="rounded-2xl bg-gradient-to-br from-rose-500/10 to-pink-500/10 border border-rose-500/20 p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Never Lose Track of an Overdue Invoice
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            InvoiceFlow automatically tracks invoice aging, sends payment reminders, and gives you a real-time view of your outstanding receivables &mdash; so nothing falls through the cracks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button>Start Free &mdash; No Card Required</Button>
            </Link>
            <Link href="/tools/late-payment-calculator">
              <Button variant="secondary">Calculate Late Payment Interest</Button>
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
