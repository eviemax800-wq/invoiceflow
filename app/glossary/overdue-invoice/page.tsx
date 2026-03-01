import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Overdue Invoice: How to Handle, Recover & Prevent Late Payments in Australia — InvoiceFlow',
  description:
    'What is an overdue invoice? Learn what to do when clients don\'t pay, how to handle overdue invoices professionally, your legal rights in Australia, recovery strategies, email templates, and prevention tips for freelancers and sole traders.',
  keywords: [
    'overdue invoice meaning',
    'how to handle overdue invoices',
    'overdue invoice email template',
    'what to do when client doesn\'t pay invoice',
    'late payment freelancer australia',
    'overdue invoice follow up',
    'overdue invoice letter',
    'overdue invoice interest australia',
    'chasing overdue invoices',
    'unpaid invoice recovery australia',
  ],
  alternates: { canonical: '/glossary/overdue-invoice' },
  openGraph: {
    title: 'Overdue Invoice: How to Handle, Recover & Prevent Late Payments in Australia — InvoiceFlow',
    description:
      'Everything you need to know about overdue invoices: definition, recovery process, legal rights in Australia, small claims thresholds by state, prevention strategies, and how to get paid faster as a freelancer.',
    url: 'https://invoiceflow-teal.vercel.app/glossary/overdue-invoice',
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
    { '@type': 'ListItem', position: 3, name: 'Overdue Invoice', item: `${BASE_URL}/glossary/overdue-invoice` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How long before an invoice is considered overdue?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An invoice becomes overdue the day after its payment due date has passed. This depends entirely on the payment terms stated on the invoice. If you set Net 30 terms, the invoice becomes overdue on day 31. If the terms are Net 14, it is overdue on day 15. If the terms are "Due on Receipt," the invoice is technically overdue if not paid immediately upon receipt. The most common payment term in Australia is Net 30, meaning most invoices become overdue after 30 days. Always state clear payment terms on every invoice so both you and the client know exactly when payment is expected.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I charge interest on overdue invoices in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, you can charge interest on overdue invoices in Australia, but only if the right to charge interest is stated in your original contract, terms of engagement, or terms of trade that the client agreed to before the work began. There is no automatic statutory right to charge interest on commercial debts in Australia. A widely accepted benchmark is the ATO General Interest Charge (GIC) rate, which is approximately 11.36% per annum for 2025-26. Most freelancers set their interest rate at 10-12% per annum, which is considered fair and enforceable. Include a clear late payment interest clause on every invoice and in your contract to establish your right to charge interest from the due date.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I do if a client ignores my overdue invoice reminders?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If a client ignores your overdue invoice reminders, you should escalate through a structured process. First, send a formal letter of demand giving the client 14 days to pay, clearly stating the total amount owed (including any accrued interest) and the consequences of non-payment. If the letter of demand is ignored, you have two main options: engage a debt collection agency (which typically charges 10-30% commission on recovered amounts) or file a claim in your state\'s small claims tribunal (NCAT in NSW up to $100,000, VCAT in Victoria up to $100,000, QCAT in Queensland up to $25,000). You do not need a lawyer for small claims. Filing fees are typically $50-$200 and can be recovered from the debtor if you win.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I stop working for a client with an overdue invoice?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, it is strongly recommended to pause all new work for a client who has an overdue invoice until payment is received. Continuing to work for a non-paying client only increases your financial exposure and signals that late payment has no consequences. Include a "suspension of work" clause in your contract that explicitly states work will be paused if any invoice remains unpaid beyond the due date. This protects you legally and gives you clear grounds to stop work without breaching the contract. When you pause work, notify the client in writing that work is suspended due to the outstanding payment and will resume once the balance is cleared.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can I prevent invoices from becoming overdue?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most effective strategies for preventing overdue invoices are: (1) Set clear payment terms upfront in your contract and on every invoice. (2) Request a 30-50% deposit before starting work — this reduces your risk and confirms the client is financially committed. (3) Use shorter payment terms like Net 14 instead of Net 30 — invoices with shorter terms are paid faster. (4) Offer multiple payment methods (bank transfer, PayID, credit card) to remove friction. (5) Invoice immediately on project completion, not days or weeks later. (6) Set up automated payment reminders before and after the due date. (7) Run credit checks on new clients for large projects. (8) Include a late payment interest clause in your contract — even if you never enforce it, it motivates clients to pay on time.',
      },
    },
  ],
};

const tocItems = [
  { id: 'what-is-overdue-invoice', label: '1. What Is an Overdue Invoice?' },
  { id: 'when-does-invoice-become-overdue', label: '2. When Does an Invoice Become Overdue?' },
  { id: 'overdue-recovery-process', label: '3. The Overdue Invoice Recovery Process' },
  { id: 'legal-rights-australia', label: '4. Your Legal Rights in Australia' },
  { id: 'how-to-prevent', label: '5. How to Prevent Overdue Invoices' },
  { id: 'invoiceflow-overdue', label: '6. How InvoiceFlow Helps with Overdue Invoices' },
];

const relatedTools = [
  {
    href: '/tools/late-payment-calculator',
    name: 'Late Payment Calculator',
    description: 'Calculate interest on overdue invoices instantly using ATO GIC rates or your own custom rate.',
    icon: (
      <svg className="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    href: '/tools/invoice-generator',
    name: 'Invoice Generator',
    description: 'Create professional invoices with clear payment terms and late payment clauses built in.',
    icon: (
      <svg className="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    href: '/tools/overdue-invoice-follow-up',
    name: 'Overdue Invoice Follow-Up Generator',
    description: 'Generate professional follow-up emails for every stage of the overdue invoice recovery process.',
    icon: (
      <svg className="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    href: '/tools/letter-of-demand',
    name: 'Letter of Demand Generator',
    description: 'Create a formal letter of demand with accrued interest totals and legal escalation language.',
    icon: (
      <svg className="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    ),
  },
];

const relatedGuides = [
  {
    href: '/guides/getting-paid-faster',
    name: 'Getting Paid Faster',
    description: 'Proven strategies to reduce payment delays, chase overdue invoices, and keep cash flowing into your business.',
  },
  {
    href: '/guides/invoicing-101',
    name: 'Invoicing 101',
    description: 'Everything you need to know about creating compliant invoices that get paid on time in Australia.',
  },
  {
    href: '/guides/gst-for-freelancers',
    name: 'GST for Freelancers',
    description: 'Understanding GST obligations including bad debt adjustments, BAS reporting, and input tax credits.',
  },
];

export default function OverdueInvoiceGlossaryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative px-4 pt-20 pb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-rose-500/10 to-red-500/10 blur-3xl" />
        <div className="relative max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/glossary" className="hover:text-white transition-colors">Glossary</Link>
            <span>/</span>
            <span className="text-white">Overdue Invoice</span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            Glossary &mdash; Cash Flow &amp; Payments
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Overdue Invoice:{' '}
            <span className="bg-gradient-to-r from-red-500 to-rose-500 bg-clip-text text-transparent">
              How to Handle, Recover &amp; Prevent Late Payments
            </span>
          </h1>

          {/* Summary */}
          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            An overdue invoice is an invoice that has not been paid by its due date. With $26 billion in unpaid invoices across Australian small businesses at any time, knowing how to handle overdue invoices &mdash; from the first friendly reminder to formal legal action &mdash; is essential for every freelancer.
          </p>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>14 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>ATO-Accurate 2025-26</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
              </svg>
              <span>Updated March 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* In a Nutshell */}
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <div className="rounded-2xl bg-gradient-to-br from-red-500/10 to-rose-500/10 border border-red-500/20 p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-white">In a Nutshell</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center text-red-400 text-xs font-bold">$26B</span>
              <div>
                <p className="text-white font-medium text-sm">Total Unpaid Invoices</p>
                <p className="text-gray-400 text-sm">Total unpaid invoices across Australian small businesses at any given time</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center text-red-400 text-xs font-bold">33%</span>
              <div>
                <p className="text-white font-medium text-sm">Freelancers With Late Payments</p>
                <p className="text-gray-400 text-sm">Freelancers who regularly experience late payments from clients</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center text-red-400 text-xs font-bold">~11%</span>
              <div>
                <p className="text-white font-medium text-sm">ATO GIC Rate (pa)</p>
                <p className="text-gray-400 text-sm">ATO General Interest Charge rate that can be applied to overdue invoices</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center text-red-400 text-xs font-bold">30d</span>
              <div>
                <p className="text-white font-medium text-sm">Most Common Payment Term</p>
                <p className="text-gray-400 text-sm">Net 30 is the most common payment term before an invoice becomes overdue</p>
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
                className="flex items-center gap-2 text-gray-400 hover:text-red-400 transition-colors text-sm py-1"
              >
                <svg className="w-4 h-4 text-red-500/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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

        {/* Section 1: What Is an Overdue Invoice? */}
        <section id="what-is-overdue-invoice">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-rose-500 flex items-center justify-center text-white text-sm font-bold">1</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">What Is an Overdue Invoice?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              An overdue invoice is an <strong className="text-white">invoice that has not been paid by its due date</strong>. The moment the payment deadline passes without the full amount being received, the invoice transitions from &quot;outstanding&quot; to &quot;overdue.&quot; This distinction is important &mdash; it triggers your right to escalate, charge interest (if your contract allows it), and ultimately pursue formal debt recovery.
            </p>
            <p className="text-gray-300 leading-relaxed">
              It is critical to understand the difference between <strong className="text-white">overdue and outstanding</strong>. An outstanding invoice is simply one that has been sent but not yet paid &mdash; it may or may not have passed its due date. An overdue invoice has specifically <strong className="text-white">passed its payment deadline</strong>. Every overdue invoice is outstanding, but not every outstanding invoice is overdue. This distinction matters for your accounting, your client communications, and your legal position.
            </p>
            <p className="text-gray-300 leading-relaxed">
              The scale of overdue invoices in Australia is staggering. At any given time, Australian small businesses are collectively owed approximately <strong className="text-white">$26 billion in unpaid invoices</strong>. The average small business owner is owed roughly <strong className="text-white">$53,000 in late payments</strong>, and <strong className="text-white">33% of freelancers</strong> report that clients regularly pay their invoices late. Late payment is not an edge case &mdash; it is a systemic challenge that every freelancer must plan for.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-5">
                <h4 className="text-red-400 font-semibold mb-2">Overdue (Past Due Date)</h4>
                <p className="text-gray-400 text-sm">The invoice&apos;s payment deadline has passed. The client owes you money and has not paid on time. You have the right to follow up, charge interest (if contractually agreed), and escalate to formal recovery. This is an active problem that requires action.</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-gray-300 font-semibold mb-2">Outstanding (Sent but Not Yet Due)</h4>
                <p className="text-gray-400 text-sm">The invoice has been sent and has not yet been paid, but the due date has not arrived. This is a normal state &mdash; the client is within their agreed payment window. No follow-up is needed yet, though a pre-due-date reminder can be helpful.</p>
              </div>
            </div>

            <div className="rounded-xl bg-red-500/5 border border-red-500/20 p-5 mt-6">
              <p className="text-red-400 font-medium mb-2">The Real Cost of Overdue Invoices</p>
              <p className="text-gray-400 text-sm">
                Every day an invoice stays unpaid is a day you are <strong className="text-gray-200">providing an interest-free loan to your client</strong>. For a freelancer earning $100,000 per year with 33% of invoices overdue by an average of 30 days, that is roughly $8,200 in outstanding payments at any given time &mdash; money that could be earning interest, covering business costs, or being invested. Overdue invoices are not just an inconvenience; they are a direct hit to your <Link href="/glossary/cash-flow" className="text-red-400 hover:text-red-300 underline underline-offset-2">cash flow</Link> and financial stability.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: When Does an Invoice Become Overdue? */}
        <section id="when-does-invoice-become-overdue">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-rose-500 flex items-center justify-center text-white text-sm font-bold">2</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">When Does an Invoice Become Overdue?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              An invoice becomes overdue the <strong className="text-white">day after its payment due date has passed</strong>. When that date arrives depends entirely on the <Link href="/glossary/payment-terms" className="text-red-400 hover:text-red-300 underline underline-offset-2">payment terms</Link> you set on the invoice. If your terms are Net 30 and you issue an invoice on 1 March, the due date is 31 March, and the invoice becomes overdue on 1 April.
            </p>
            <p className="text-gray-300 leading-relaxed">
              This is why <strong className="text-white">clear, unambiguous payment terms on every invoice are non-negotiable</strong>. Without stated terms, there is no agreed due date &mdash; and without a due date, there is no clear point at which the invoice becomes overdue. This weakens your position if you need to escalate, charge interest, or pursue legal recovery. Always state both the payment terms (e.g. &quot;Net 14&quot;) and the specific due date (e.g. &quot;Due: 15 March 2026&quot;) on every invoice.
            </p>

            {/* Payment Terms Table */}
            <div className="rounded-2xl border border-gray-700/50 overflow-hidden mt-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-800/80">
                      <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Payment Term</th>
                      <th className="text-left text-sm font-medium text-red-400 px-6 py-4">Due Date (Invoice Dated 1 March)</th>
                      <th className="text-left text-sm font-medium text-rose-400 px-6 py-4">Overdue From</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700/50">
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-white text-sm font-medium">Due on Receipt</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">1 March (immediately)</td>
                      <td className="px-6 py-3 text-red-400 text-sm font-medium">2 March (next day)</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-white text-sm font-medium">Net 7</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">8 March</td>
                      <td className="px-6 py-3 text-red-400 text-sm font-medium">9 March (day 8)</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-white text-sm font-medium">Net 14</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">15 March</td>
                      <td className="px-6 py-3 text-red-400 text-sm font-medium">16 March (day 15)</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-white text-sm font-medium">Net 30</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">31 March</td>
                      <td className="px-6 py-3 text-red-400 text-sm font-medium">1 April (day 31)</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-white text-sm font-medium">Net 60</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">30 April</td>
                      <td className="px-6 py-3 text-red-400 text-sm font-medium">1 May (day 61)</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-white text-sm font-medium">EOM + 30</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">30 April (end of March + 30 days)</td>
                      <td className="px-6 py-3 text-red-400 text-sm font-medium">1 May</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="rounded-xl bg-red-500/5 border border-red-500/20 p-5 mt-6">
              <p className="text-red-400 font-medium mb-2">Pro Tip: Shorter Terms = Faster Payment</p>
              <p className="text-gray-400 text-sm">
                Research consistently shows that invoices with shorter payment terms are paid faster &mdash; even when clients pay slightly late. An invoice with <strong className="text-gray-200">Net 14 terms is paid an average of 8 days faster</strong> than one with Net 30 terms. If you set Net 14, most clients will pay within 18-22 days. If you set Net 30, most clients will pay within 30-40 days. The shorter your terms, the shorter the actual payment delay &mdash; which means fewer overdue invoices and better cash flow.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: The Overdue Invoice Recovery Process */}
        <section id="overdue-recovery-process">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-rose-500 flex items-center justify-center text-white text-sm font-bold">3</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">The Overdue Invoice Recovery Process</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Recovering overdue invoices is a <strong className="text-white">structured escalation process</strong>. You start friendly and professional, and gradually increase the firmness and formality of your communications. The key is to be <strong className="text-white">consistent, documented, and professional</strong> at every stage. Emotional or aggressive messages damage client relationships and weaken your legal position. Let the process do the work.
            </p>

            <div className="space-y-4 mt-6">
              {/* Day 1 */}
              <div className="rounded-xl bg-gray-800/50 border border-emerald-500/30 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <span className="text-emerald-400 font-bold text-sm">D+1</span>
                  </div>
                  <h4 className="text-white font-semibold">Day 1 Overdue &mdash; Friendly Reminder</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-3">
                  Send a brief, friendly email the day after the due date. Assume it was an oversight &mdash; because most of the time, it is. The tone should be warm and helpful, not accusatory. Attach a copy of the original invoice for convenience.
                </p>
                <div className="rounded-lg bg-gray-900/60 p-4 text-sm text-gray-300 leading-relaxed font-mono">
                  <p>Subject: Friendly reminder &mdash; Invoice #[NUMBER] was due yesterday</p>
                  <p className="mt-2">Hi [Name],</p>
                  <p className="mt-2">Just a quick heads up that invoice #[NUMBER] for $[AMOUNT] was due on [DATE]. I&apos;ve attached a copy for your convenience. Could you let me know when I can expect payment?</p>
                  <p className="mt-2">Happy to answer any questions.</p>
                  <p className="mt-2">Thanks,<br />[Your Name]</p>
                </div>
                <p className="text-emerald-400 text-xs mt-3 font-medium">Over 60% of overdue invoices are paid after the first reminder.</p>
              </div>

              {/* Day 7 */}
              <div className="rounded-xl bg-gray-800/50 border border-yellow-500/30 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-yellow-500/10 flex items-center justify-center">
                    <span className="text-yellow-400 font-bold text-sm">D+7</span>
                  </div>
                  <h4 className="text-white font-semibold">Day 7 Overdue &mdash; Formal Follow-Up</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-3">
                  If the first reminder went unanswered, send a more formal follow-up. Reference your payment terms and the original invoice. Request a specific response with a timeline for payment. The tone shifts from casual to professional and direct.
                </p>
                <div className="rounded-lg bg-gray-900/60 p-4 text-sm text-gray-300 leading-relaxed font-mono">
                  <p>Subject: Overdue &mdash; Invoice #[NUMBER] is now 7 days past due</p>
                  <p className="mt-2">Hi [Name],</p>
                  <p className="mt-2">I&apos;m following up on invoice #[NUMBER] for $[AMOUNT], which was due on [DATE] and is now 7 days overdue. I sent a reminder on [DATE] but have not yet received payment or a response.</p>
                  <p className="mt-2">Could you please confirm when payment will be processed? I&apos;d appreciate an update within the next 48 hours.</p>
                  <p className="mt-2">Kind regards,<br />[Your Name]</p>
                </div>
                <p className="text-yellow-400 text-xs mt-3 font-medium">Try calling the client directly if emails go unanswered. A phone call is much harder to ignore.</p>
              </div>

              {/* Day 14 */}
              <div className="rounded-xl bg-gray-800/50 border border-orange-500/30 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center">
                    <span className="text-orange-400 font-bold text-sm">D+14</span>
                  </div>
                  <h4 className="text-white font-semibold">Day 14 Overdue &mdash; Firm Notice with Interest Mention</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-3">
                  At two weeks overdue, escalate the tone significantly. Reference your contractual right to charge interest, mention the accruing amount, and state that you will pause any current or future work until payment is received. This is where professionalism matters most &mdash; be firm but never aggressive.
                </p>
                <div className="rounded-lg bg-gray-900/60 p-4 text-sm text-gray-300 leading-relaxed font-mono">
                  <p>Subject: Urgent &mdash; Invoice #[NUMBER] is 14 days overdue</p>
                  <p className="mt-2">Hi [Name],</p>
                  <p className="mt-2">Invoice #[NUMBER] for $[AMOUNT] was due on [DATE] and remains unpaid after two follow-up reminders. As per our agreed terms, interest of [X]% per annum is now accruing on the outstanding balance.</p>
                  <p className="mt-2">Please arrange payment within 7 days to avoid further charges. I have paused all current work pending resolution of this outstanding balance.</p>
                  <p className="mt-2">If there is a reason for the delay, I am happy to discuss. Otherwise, please treat this as a matter of urgency.</p>
                  <p className="mt-2">Regards,<br />[Your Name]</p>
                </div>
              </div>

              {/* Day 30 */}
              <div className="rounded-xl bg-gray-800/50 border border-red-500/30 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <span className="text-red-400 font-bold text-sm">D+30</span>
                  </div>
                  <h4 className="text-white font-semibold">Day 30 Overdue &mdash; Final Notice / Letter of Demand</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  A formal letter of demand is a written notice giving the client a final deadline (typically 14 days) to pay the full amount, including any accrued interest. It should clearly state that failure to pay will result in formal debt recovery action. A letter of demand is not a legal document in itself, but it is an essential prerequisite before filing a claim in a tribunal &mdash; and it demonstrates to the court that you made every reasonable effort to resolve the matter.
                </p>
                <p className="text-gray-400 text-sm leading-relaxed mt-2">
                  The letter should include: your full name and ABN, the client&apos;s name and address, invoice number and original amount, total now owing including accrued <Link href="/glossary/late-payment-interest" className="text-red-400 hover:text-red-300 underline underline-offset-2">late payment interest</Link>, a 14-day payment deadline, and a statement that legal proceedings will commence without further notice if payment is not received.
                </p>
                <p className="text-gray-400 text-sm leading-relaxed mt-2">
                  Use our <Link href="/tools/letter-of-demand" className="text-red-400 hover:text-red-300 underline underline-offset-2">Letter of Demand Generator</Link> to create a professional, legally-structured letter in minutes.
                </p>
              </div>

              {/* Day 60+ */}
              <div className="rounded-xl bg-gray-800/50 border border-red-600/30 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-red-600/10 flex items-center justify-center">
                    <span className="text-red-500 font-bold text-sm">60d+</span>
                  </div>
                  <h4 className="text-white font-semibold">Day 60+ Overdue &mdash; Debt Recovery / Small Claims</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  If the letter of demand fails, you have two main options: engage a <strong className="text-gray-200">debt collection agency</strong> (typically 10-30% commission on recovered amounts) or file a claim in your state&apos;s <strong className="text-gray-200">small claims tribunal</strong>. For debts under $1,000, the cost of recovery often exceeds the benefit &mdash; consider writing it off as a <Link href="/glossary/bad-debt" className="text-red-400 hover:text-red-300 underline underline-offset-2">bad debt</Link>. For debts over $2,000, formal recovery is almost always worthwhile.
                </p>
                <p className="text-gray-400 text-sm leading-relaxed mt-2">
                  Small claims tribunals are designed to be accessible without a lawyer, with filing fees typically between $50 and $200 (recoverable if you win). Keep all documentation: the original invoice, proof it was sent, every reminder email, phone call notes, and the letter of demand. This evidence trail is what wins tribunal cases.
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-red-500/5 border border-red-500/20 p-5 mt-6">
              <p className="text-red-400 font-medium mb-2">Document Everything</p>
              <p className="text-gray-400 text-sm">
                From the first reminder email to the final letter of demand, <strong className="text-gray-200">save every communication</strong>. If you make phone calls, follow up with an email summarising what was discussed and agreed. Courts and tribunals look favourably on creditors who followed a clear, documented, professional process. A well-documented paper trail is often the difference between winning and losing a debt recovery case.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Your Legal Rights for Late Payment in Australia */}
        <section id="legal-rights-australia">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-rose-500 flex items-center justify-center text-white text-sm font-bold">4</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Your Legal Rights for Late Payment in Australia</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Australian freelancers have several legal avenues to pursue overdue payments, but understanding <strong className="text-white">what you can and cannot do</strong> is essential. The legal framework for late payments in Australia is different from Europe and the US, so knowledge specific to Australian law is critical.
            </p>

            <h3 className="text-lg font-semibold text-white mt-6">Right to Charge Interest</h3>
            <p className="text-gray-300 leading-relaxed">
              You can charge interest on overdue invoices, but <strong className="text-white">only if the right to charge interest is stated in your original contract or terms of trade</strong> that the client agreed to before the work began. Unlike some European countries, Australia has no automatic statutory right to charge interest on commercial debts. The ATO&apos;s <strong className="text-white">General Interest Charge (GIC) rate</strong> of approximately 11.36% per annum (updated quarterly) is the widely accepted benchmark for commercial interest rates.
            </p>

            <h3 className="text-lg font-semibold text-white mt-6">Contractual Late Payment Fees</h3>
            <p className="text-gray-300 leading-relaxed">
              Flat late payment fees (e.g. a $50 admin fee for overdue invoices) are enforceable, but they <strong className="text-white">must be included in the original agreement</strong> and must represent a genuine pre-estimate of the administrative cost of chasing the payment. Excessive flat fees risk being challenged as penalties under Australian common law, which makes them unenforceable. Keep late fees reasonable and clearly linked to your actual costs.
            </p>

            <h3 className="text-lg font-semibold text-white mt-8">Small Claims Tribunal Thresholds by State</h3>
            <p className="text-gray-300 leading-relaxed">
              Each Australian state and territory has a civil and administrative tribunal where you can pursue unpaid invoices without needing a lawyer. These tribunals are designed to be accessible, affordable, and faster than formal court proceedings. Here are the current thresholds:
            </p>

            <div className="rounded-2xl border border-gray-700/50 overflow-hidden mt-4">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-800/80">
                      <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">State / Territory</th>
                      <th className="text-left text-sm font-medium text-red-400 px-6 py-4">Tribunal</th>
                      <th className="text-right text-sm font-medium text-rose-400 px-6 py-4">Threshold</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700/50">
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-gray-300 text-sm font-medium">NSW</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">NSW Civil and Administrative Tribunal (NCAT)</td>
                      <td className="px-6 py-3 text-red-400 text-sm font-medium text-right">$100,000</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-gray-300 text-sm font-medium">VIC</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Victorian Civil and Administrative Tribunal (VCAT)</td>
                      <td className="px-6 py-3 text-red-400 text-sm font-medium text-right">$100,000</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-gray-300 text-sm font-medium">QLD</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Queensland Civil and Administrative Tribunal (QCAT)</td>
                      <td className="px-6 py-3 text-red-400 text-sm font-medium text-right">$25,000</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-gray-300 text-sm font-medium">SA</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">South Australian Civil and Administrative Tribunal (SACAT)</td>
                      <td className="px-6 py-3 text-red-400 text-sm font-medium text-right">$25,000</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-gray-300 text-sm font-medium">WA</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">State Administrative Tribunal (SAT)</td>
                      <td className="px-6 py-3 text-red-400 text-sm font-medium text-right">$75,000</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-gray-300 text-sm font-medium">TAS</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Magistrates Court (Minor Civil Claims)</td>
                      <td className="px-6 py-3 text-red-400 text-sm font-medium text-right">$5,000</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-gray-300 text-sm font-medium">ACT</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">ACT Civil and Administrative Tribunal (ACAT)</td>
                      <td className="px-6 py-3 text-red-400 text-sm font-medium text-right">$25,000</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-gray-300 text-sm font-medium">NT</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Northern Territory Civil and Administrative Tribunal (NTCAT)</td>
                      <td className="px-6 py-3 text-red-400 text-sm font-medium text-right">$25,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">Letter of Demand as a Prerequisite</h3>
            <p className="text-gray-300 leading-relaxed">
              While a letter of demand is not technically a legal requirement before filing a tribunal claim, it is <strong className="text-white">considered essential in practice</strong>. Tribunals expect to see evidence that you made a genuine effort to resolve the dispute before seeking their intervention. A well-drafted letter of demand demonstrates reasonableness and often resolves the matter without the need for a hearing. Many clients pay immediately upon receiving a formal letter of demand &mdash; the shift from casual reminders to legal language creates urgency.
            </p>

            <h3 className="text-lg font-semibold text-white mt-6">Security of Payment Act</h3>
            <p className="text-gray-300 leading-relaxed">
              If you work in the <strong className="text-white">construction or building industry</strong>, you may have additional protections under your state&apos;s Security of Payment legislation (known as the Building and Construction Industry Security of Payment Act in most states). This legislation provides a rapid adjudication process specifically for payment disputes in the building industry, with decisions typically made within 10-15 business days. The adjudicator&apos;s decision is binding and immediately enforceable. If you are a subcontractor, building designer, or consultant in the construction sector, this is a powerful tool for recovering overdue payments.
            </p>

            <div className="rounded-xl bg-red-500/5 border border-red-500/20 p-5 mt-6">
              <p className="text-red-400 font-medium mb-2">Know Your Rights, But Start Professionally</p>
              <p className="text-gray-400 text-sm">
                While you have the legal right to pursue overdue payments through tribunals, debt collectors, and interest charges, the <strong className="text-gray-200">most effective approach is professional escalation</strong>. Most overdue invoices are the result of disorganisation, cash flow issues, or simple forgetfulness &mdash; not malicious non-payment. A friendly reminder resolves the majority. Reserve the legal tools for the minority of cases where the client is genuinely unresponsive or refuses to pay.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: How to Prevent Overdue Invoices */}
        <section id="how-to-prevent">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-rose-500 flex items-center justify-center text-white text-sm font-bold">5</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">How to Prevent Overdue Invoices</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              The best overdue invoice is the one that <strong className="text-white">never becomes overdue</strong>. Prevention is always cheaper, faster, and less stressful than recovery. Here are eight proven strategies that Australian freelancers use to dramatically reduce late payments.
            </p>

            <div className="space-y-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <span className="text-red-400 font-bold text-sm">1</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Set Clear Payment Terms Upfront</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Every engagement should start with a written contract or agreement that specifies payment terms, due dates, accepted payment methods, and consequences of late payment. Restate these terms on every <Link href="/glossary/invoice" className="text-red-400 hover:text-red-300 underline underline-offset-2">invoice</Link> you send. When clients know exactly when they need to pay and what happens if they do not, they are significantly more likely to pay on time. Ambiguity is the enemy of timely payment.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <span className="text-red-400 font-bold text-sm">2</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Request Deposits or Upfront Payments (30-50%)</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Requesting a <strong className="text-gray-200">30-50% deposit before starting work</strong> is the single most effective tool for preventing overdue invoices. It immediately reduces your financial exposure, confirms the client is financially committed, and provides working capital during the project. Freelancers who collect deposits have <strong className="text-gray-200">60% fewer bad debts</strong> than those who invoice entirely on completion. If a client refuses to pay a deposit, treat it as a red flag.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <span className="text-red-400 font-bold text-sm">3</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Use Shorter Payment Terms (Net 14 &gt; Net 30)</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Invoices with <strong className="text-gray-200">Net 14 terms are paid an average of 8 days faster</strong> than those with Net 30 terms. Start with Net 14 as your default and only extend to Net 30 if the client specifically requires it. Most small business clients will not push back on Net 14 &mdash; it only becomes an issue with large corporates that have rigid procurement cycles. See our full <Link href="/glossary/payment-terms" className="text-red-400 hover:text-red-300 underline underline-offset-2">payment terms</Link> guide for more.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <span className="text-red-400 font-bold text-sm">4</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Offer Multiple Payment Methods</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  The easier you make it to pay, the faster the payment arrives. Offer bank transfer, PayID, credit card, and any other method your clients prefer. Include your full bank details (BSB, account number, account name) directly on the invoice with a clear payment reference. Every extra step a client has to take adds days to your payment timeline. Remove all friction.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <span className="text-red-400 font-bold text-sm">5</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Invoice Immediately on Completion</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Send your invoice the <strong className="text-gray-200">same day you complete the work</strong>. Every day you delay invoicing is a day the client forgets about the project, a day their budget allocation might shift, and a day closer to their own cash flow pressures. Prompt invoicing signals professionalism and starts the payment clock immediately. Invoices sent within 24 hours of project completion are paid 30% faster than those sent a week later.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <span className="text-red-400 font-bold text-sm">6</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Set Up Automated Reminders</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Automated payment reminders are one of the most effective tools for preventing overdue invoices. Set up reminders to send <strong className="text-gray-200">3 days before the due date</strong> (a courtesy nudge), on the due date itself, and at escalating intervals after. Clients report that automated reminders reduce late payments by up to 30%. The automation removes the emotional burden of chasing payments &mdash; the system does it for you, consistently and professionally.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <span className="text-red-400 font-bold text-sm">7</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Run Credit Checks for Large Projects</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  For projects worth $5,000 or more, run a basic credit check on the client or their company before accepting the engagement. An ASIC company search costs $9 and reveals the company&apos;s financial health, director history, and any outstanding debts or legal actions. Services like CreditorWatch and Dun &amp; Bradstreet offer detailed credit reports. A few dollars spent on due diligence can save you thousands in unpaid invoices.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <span className="text-red-400 font-bold text-sm">8</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Include a Late Payment Interest Clause</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Include a <Link href="/glossary/late-payment-interest" className="text-red-400 hover:text-red-300 underline underline-offset-2">late payment interest</Link> clause in your contract and on every invoice. Even if you never enforce it, <strong className="text-gray-200">invoices with a stated interest clause are paid 15-20% faster</strong> than those without. The mere presence of the clause signals professionalism and reframes late payment from &quot;no big deal&quot; to &quot;this has financial consequences.&quot; Use the ATO GIC rate (~11.36% pa) as your benchmark.
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-red-500/5 border border-red-500/20 p-5 mt-6">
              <p className="text-red-400 font-medium mb-2">The Prevention Payoff</p>
              <p className="text-gray-400 text-sm">
                Freelancers who implement all eight prevention strategies report a <strong className="text-gray-200">dramatic reduction in overdue invoices</strong>. Deposits eliminate the worst-case scenario. Shorter terms accelerate payment. Automated reminders catch oversights before they become problems. And a late payment clause motivates clients to prioritise your invoice. Combined, these strategies can reduce your average <Link href="/glossary/accounts-receivable" className="text-red-400 hover:text-red-300 underline underline-offset-2">accounts receivable</Link> balance by 40-60%.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: How InvoiceFlow Helps with Overdue Invoices */}
        <section id="invoiceflow-overdue">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-rose-500 flex items-center justify-center text-white text-sm font-bold">6</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">How InvoiceFlow Helps with Overdue Invoices</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              InvoiceFlow automates the entire overdue invoice management workflow &mdash; from <strong className="text-white">prevention through to recovery</strong>. No more tracking due dates in spreadsheets, manually writing follow-up emails, or calculating interest on a calculator. The system handles it all so you can focus on billable work.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                    </svg>
                  </div>
                  <h4 className="text-white font-semibold">Automated Overdue Reminders</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Set up automatic payment reminders at configurable intervals: before the due date, on the due date, and at escalating intervals after. Professional, consistent reminder emails are sent without you lifting a finger. The system escalates tone automatically from friendly to firm based on how many days overdue.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                    </svg>
                  </div>
                  <h4 className="text-white font-semibold">Payment Status Dashboard</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  See every invoice at a glance: paid, outstanding, overdue, and at risk. Colour-coded from green (on time) to red (severely overdue) so problem invoices are impossible to miss. Track average days to payment by client, total outstanding amounts, and projected cash flow based on due dates.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
                    </svg>
                  </div>
                  <h4 className="text-white font-semibold">Late Payment Interest Calculator</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Set your interest rate once (or use the ATO GIC rate), and InvoiceFlow automatically calculates accrued interest on every overdue invoice, updated daily. When you send a follow-up or letter of demand, the exact interest amount is ready to include &mdash; no manual maths required.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="text-white font-semibold">Overdue Aging Reports</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Visual aging reports that group your outstanding invoices by how long they have been unpaid: current, 1-14 days, 15-30 days, 31-60 days, and 60+ days overdue. Instantly identify which invoices are at highest risk and where to focus your recovery efforts. Export reports for your accountant at tax time.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <h4 className="text-white font-semibold">One-Click Follow-Up Emails</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Send professional follow-up emails with a single click from your dashboard. InvoiceFlow generates the email with the correct invoice details, outstanding amount, days overdue, and accrued interest already populated. Choose from pre-written templates for each escalation stage &mdash; friendly reminder, formal follow-up, firm notice, and final demand.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18v-.008zm-12 0h.008v.008H6v-.008z" />
                    </svg>
                  </div>
                  <h4 className="text-white font-semibold">Payment Tracking &amp; Cash Flow Visibility</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Track partial payments, payment plans, and full settlements against each invoice. When a client makes a part-payment, InvoiceFlow updates the outstanding balance automatically and continues reminding for the remaining amount. See your real-time <Link href="/glossary/cash-flow" className="text-red-400 hover:text-red-300 underline underline-offset-2">cash flow</Link> position including projected income from outstanding invoices.
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-red-500/5 border border-red-500/20 p-5 mt-6">
              <p className="text-red-400 font-medium mb-2">The Bottom Line</p>
              <p className="text-gray-400 text-sm">
                Chasing overdue invoices is one of the least productive activities a freelancer can spend time on. InvoiceFlow removes the manual work by <strong className="text-gray-200">automating reminders, calculating interest, tracking payment status, and providing one-click follow-ups</strong>. The system handles the enforcement professionally and consistently &mdash; so you can focus on delivering great work and earning more revenue instead of chasing money you have already earned.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Related Tools */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-white mb-2 text-center">Related Tools</h2>
        <p className="text-gray-400 text-center mb-8">Free tools to help you manage overdue invoices and recover late payments.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {relatedTools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:border-red-500/50 hover:bg-gray-800/80 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-4">
                {tool.icon}
              </div>
              <h3 className="text-white font-medium mb-2 group-hover:text-red-400 transition-colors">{tool.name}</h3>
              <p className="text-sm text-gray-400">{tool.description}</p>
              <div className="mt-4 text-red-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
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
        <p className="text-gray-400 text-center mb-8">In-depth guides on getting paid, invoicing, and managing your freelance finances in Australia.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {relatedGuides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group p-6 rounded-2xl bg-gray-800/40 border border-gray-700/40 hover:border-red-500/40 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h3 className="text-white font-medium mb-2 group-hover:text-red-400 transition-colors">{guide.name}</h3>
              <p className="text-sm text-gray-400">{guide.description}</p>
              <div className="mt-4 text-red-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
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
              <summary className="flex items-center justify-between cursor-pointer px-6 py-4 text-white font-medium hover:text-red-400 transition-colors">
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
        <div className="rounded-2xl bg-gradient-to-br from-red-500/10 to-rose-500/10 border border-red-500/20 p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stop Chasing Overdue Invoices Manually
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            InvoiceFlow automates payment reminders, tracks every invoice from send to payment, calculates late interest, and gives you one-click follow-ups. Get paid faster without the awkward conversations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button>Start Free &mdash; No Card Required</Button>
            </Link>
            <Link href="/tools/late-payment-calculator">
              <Button variant="secondary">Try the Late Payment Calculator</Button>
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
