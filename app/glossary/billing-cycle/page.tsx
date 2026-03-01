import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Billing Cycle: Recurring Invoice Schedules & Billing Periods for Freelancers — InvoiceFlow',
  description:
    'What is a billing cycle? Learn about billing periods (weekly, monthly, quarterly), how to choose the right cycle for freelancers, best practices for consistent invoicing, and common billing cycle mistakes to avoid.',
  keywords: [
    'billing cycle meaning',
    'invoice billing cycle',
    'billing period explained',
    'recurring billing cycle',
    'billing cycle freelancer',
    'monthly billing cycle',
    'billing schedule',
    'invoice frequency',
    'billing cycle vs payment terms',
    'recurring invoicing schedule',
    'freelancer billing period',
    'how often to invoice clients',
  ],
  alternates: { canonical: '/glossary/billing-cycle' },
  openGraph: {
    title: 'Billing Cycle: Recurring Invoice Schedules & Billing Periods for Freelancers — InvoiceFlow',
    description:
      'Everything about billing cycles: what they mean, types (time-based, milestone, retainer, usage-based), how to choose the right cycle, best practices, and common problems freelancers face with billing frequency.',
    url: 'https://invoiceflow-teal.vercel.app/glossary/billing-cycle',
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
    { '@type': 'ListItem', position: 3, name: 'Billing Cycle', item: `${BASE_URL}/glossary/billing-cycle` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best billing cycle for freelancers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For most freelancers, a monthly billing cycle is the best default. It is predictable, aligns with most business accounting periods, and creates 12 revenue events per year. However, the ideal cycle depends on your situation: new or untrusted clients should be billed weekly or fortnightly to reduce risk, large projects benefit from milestone-based billing tied to deliverables, and ongoing retainer clients are best billed monthly at the start of each period. The key principle is shorter cycles = faster cash flow, so when in doubt, invoice more frequently rather than less.',
      },
    },
    {
      '@type': 'Question',
      name: 'How often should freelancers invoice their clients?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most freelancers should invoice at least monthly, but the ideal frequency depends on the work type. For hourly or day-rate work, weekly or fortnightly invoicing prevents large unpaid balances from accumulating. For project work, invoice at each milestone (typically 3-5 invoices per project). For retainer clients, invoice at the start of each month before the work begins. Research shows that 40% of freelancers forget to invoice on time, and those who invoice weekly get paid 15-20 days faster on average than those who invoice monthly. The golden rule: never let more than 30 days of unbilled work accumulate.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between billing cycle and payment terms?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A billing cycle and payment terms are related but different concepts. The billing cycle is the recurring interval at which you issue invoices (e.g., monthly, fortnightly, per milestone). Payment terms are the timeframe the client has to pay after receiving the invoice (e.g., Net 14, Net 30, Due on Receipt). For example, if your billing cycle is monthly and your payment terms are Net 14, you issue an invoice on the 1st of each month and the client has until the 15th to pay. The billing date is when you send the invoice, the due date is when payment is expected based on your terms, and the cycle restarts when the next billing period begins.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I bill at the start or end of the month?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You should bill at the start of the month whenever possible. Invoicing on the 1st (or first business day) has several advantages: (1) it catches clients when their monthly budgets are fresh and approval queues are short, (2) it aligns with standard accounting periods so your invoice does not get deferred to the next cycle, (3) it gives you maximum time within the month for follow-up if payment is late, and (4) for retainer work, billing in advance (start of month) means you are never working unpaid. End-of-month invoicing often results in payments being pushed into the following month because approval teams are busy closing their own books.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I handle clients with different billing cycles?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Managing multiple billing cycles is one of the most common challenges for freelancers with several clients. The best approach is: (1) standardise where possible — try to align all clients to the same billing date (e.g., 1st of the month), (2) for clients who insist on different cycles, create a billing calendar that maps out every invoice date for the quarter, (3) use invoicing software with recurring invoice automation so each client is invoiced automatically on their specific schedule, (4) batch your billing — set aside one day per week (e.g., Monday morning) to review and send all pending invoices. Tools like InvoiceFlow can automate different cycles per client so you never miss a billing date regardless of how many schedules you manage.',
      },
    },
  ],
};

const tocItems = [
  { id: 'what-is-billing-cycle', label: '1. What Is a Billing Cycle?' },
  { id: 'types-of-billing-cycles', label: '2. Types of Billing Cycles for Freelancers' },
  { id: 'choosing-the-right-cycle', label: '3. Choosing the Right Billing Cycle' },
  { id: 'billing-cycle-best-practices', label: '4. Billing Cycle Best Practices' },
  { id: 'common-billing-cycle-problems', label: '5. Common Billing Cycle Problems' },
  { id: 'invoiceflow-billing-cycles', label: '6. How InvoiceFlow Helps' },
];

const relatedTools = [
  {
    href: '/tools/invoice-generator',
    name: 'Invoice Generator',
    description: 'Create professional invoices on any billing schedule — one-off, milestone, or recurring. Set your cycle and let the tool handle the rest.',
    icon: (
      <svg className="w-6 h-6 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    href: '/guides/recurring-invoices-guide',
    name: 'Recurring Invoices Guide',
    description: 'Set up automated recurring invoices that fire on schedule every billing cycle — never forget to invoice again.',
    icon: (
      <svg className="w-6 h-6 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
      </svg>
    ),
  },
  {
    href: '/tools/invoice-numbering-system-generator',
    name: 'Invoice Numbering Generator',
    description: 'Create a consistent numbering system that tracks invoices across billing cycles — sequential, date-based, or client-coded.',
    icon: (
      <svg className="w-6 h-6 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5" />
      </svg>
    ),
  },
  {
    href: '/tools/rate-calculator',
    name: 'Rate Calculator',
    description: 'Calculate your ideal hourly, daily, or project rate — then align it with the right billing cycle for maximum cash flow.',
    icon: (
      <svg className="w-6 h-6 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
      </svg>
    ),
  },
];

const relatedGuides = [
  {
    href: '/guides/invoicing-101',
    name: 'Invoicing 101',
    description: 'The complete guide to creating professional invoices — including how to set billing dates, payment terms, and follow-up schedules.',
  },
  {
    href: '/guides/getting-paid-faster',
    name: 'Getting Paid Faster',
    description: 'Proven strategies to shorten your billing-to-payment gap — shorter terms, deposits, automated reminders, and payment methods.',
  },
  {
    href: '/guides/setting-freelance-rates',
    name: 'Setting Freelance Rates',
    description: 'How to calculate your rates and align them with the right billing cycle — hourly, daily, project, or retainer.',
  },
];

export default function BillingCycleGlossaryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative px-4 pt-20 pb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-500/10 via-blue-500/10 to-sky-500/10 blur-3xl" />
        <div className="relative max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/glossary" className="hover:text-white transition-colors">Glossary</Link>
            <span>/</span>
            <span className="text-white">Billing Cycle</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            Glossary &mdash; Pricing &amp; Billing
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Billing Cycle{' '}
            <span className="bg-gradient-to-r from-sky-500 to-blue-500 bg-clip-text text-transparent">
              Explained for Freelancers
            </span>
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            A billing cycle is the recurring interval between invoices. This guide covers every type of billing cycle (weekly, monthly, milestone, retainer), how to choose the right one for your freelance business, best practices for consistent invoicing, and common billing mistakes that hurt your cash flow.
          </p>

          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>8 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Australia-Focused 2025-26</span>
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
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-sky-500/20 flex items-center justify-center text-sky-400 text-xs font-bold">Mo</span>
              <div>
                <p className="text-white font-medium text-sm">Monthly = Most Common</p>
                <p className="text-gray-400 text-sm">Monthly billing is the most popular cycle for freelancers and small businesses</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-sky-500/20 flex items-center justify-center text-sky-400 text-xs font-bold">14d</span>
              <div>
                <p className="text-white font-medium text-sm">14-30 Day Payment Gap</p>
                <p className="text-gray-400 text-sm">Typical gap between billing date and actual payment receipt for freelancers</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-sky-500/20 flex items-center justify-center text-sky-400 text-xs font-bold">40%</span>
              <div>
                <p className="text-white font-medium text-sm">Forget to Invoice on Time</p>
                <p className="text-gray-400 text-sm">40% of freelancers miss their billing cycle and invoice late or inconsistently</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-sky-500/20 flex items-center justify-center text-sky-400 text-xs font-bold">12x</span>
              <div>
                <p className="text-white font-medium text-sm">12 Revenue Events Per Year</p>
                <p className="text-gray-400 text-sm">Monthly billing creates 12 predictable revenue events vs 4 for quarterly billing</p>
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
              <a key={item.id} href={`#${item.id}`} className="flex items-center gap-2 text-gray-400 hover:text-sky-400 transition-colors text-sm py-1">
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

        {/* Section 1 */}
        <section id="what-is-billing-cycle">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold">1</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">What Is a Billing Cycle?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              A billing cycle is the <strong className="text-white">recurring interval between the dates you issue invoices</strong> to a client. It defines how frequently you bill for your work &mdash; whether that is weekly, fortnightly, monthly, quarterly, or at project milestones. The billing cycle is the rhythm of your freelance revenue.
            </p>
            <p className="text-gray-300 leading-relaxed">
              For freelancers, your billing cycle directly impacts your <Link href="/glossary/cash-flow" className="text-sky-400 hover:text-sky-300 underline underline-offset-2">cash flow</Link>. A shorter billing cycle means money arrives sooner. A longer cycle means larger invoices but longer waits between payments. Getting this right is one of the most important financial decisions in your freelance business.
            </p>

            <h3 className="text-xl font-bold text-white mt-8 mb-4">Standard Billing Cycles</h3>
            <div className="rounded-2xl border border-gray-700/50 overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-800/80">
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Cycle</th>
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Frequency</th>
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Invoices/Year</th>
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Best For</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700/50">
                  {[
                    { cycle: 'Weekly', freq: 'Every 7 days', count: '52', best: 'Hourly/daily contractors, new clients' },
                    { cycle: 'Fortnightly', freq: 'Every 14 days', count: '26', best: 'Regular project work, ongoing engagements' },
                    { cycle: 'Monthly', freq: 'Every 30 days', count: '12', best: 'Retainers, most freelance work' },
                    { cycle: 'Quarterly', freq: 'Every 90 days', count: '4', best: 'Long-term advisory, large enterprises' },
                    { cycle: 'Annually', freq: 'Every 12 months', count: '1', best: 'SaaS subscriptions, annual retainers' },
                  ].map((row, i) => (
                    <tr key={i} className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-sky-400 text-sm font-bold">{row.cycle}</td>
                      <td className="px-6 py-3 text-gray-300 text-sm">{row.freq}</td>
                      <td className="px-6 py-3 text-gray-300 text-sm">{row.count}</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">{row.best}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-bold text-white mt-8 mb-4">Billing Date vs Due Date vs Payment Terms</h3>
            <p className="text-gray-300 leading-relaxed">
              These three concepts are closely related but distinct. The <strong className="text-white">billing date</strong> is when you issue the invoice (the start of each billing cycle). The <strong className="text-white">payment terms</strong> define how long the client has to pay (e.g., Net 14, Net 30). The <strong className="text-white">due date</strong> is the billing date plus the payment terms. For example, if your billing cycle is monthly (billing date: 1st of each month) with Net 14 terms, the due date is the 15th.
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section id="types-of-billing-cycles">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold">2</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Types of Billing Cycles for Freelancers</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Not all freelance work fits the same billing rhythm. Here are the six main billing cycle types, when to use each, and their trade-offs.
            </p>

            <div className="space-y-4 mt-6">
              {[
                { type: 'Time-Based', bestFor: 'Hourly/daily/weekly contractors', color: 'text-sky-400', bg: 'bg-sky-500/10', border: 'border-sky-500/20', pros: 'Fast cash flow, transparent pricing, easy to track', cons: 'Administrative overhead, income fluctuates with hours', example: 'Web developer billing $120/hr, invoicing weekly every Friday for the previous week\'s hours' },
                { type: 'Milestone-Based', bestFor: 'Project work with defined phases', color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/20', pros: 'Aligned with deliverables, manageable risk, clear expectations', cons: 'Requires well-defined scope, delays push out billing', example: 'Brand designer billing 30% at concept, 40% at design delivery, 30% at final sign-off' },
                { type: 'Retainer (Monthly Fixed)', bestFor: 'Ongoing advisory, maintenance, support', color: 'text-indigo-400', bg: 'bg-indigo-500/10', border: 'border-indigo-500/20', pros: 'Predictable income, client loyalty, reduced sales effort', cons: 'Risk of scope creep, can undervalue your time', example: 'Marketing consultant on a $5,000/month retainer, billed on the 1st, covering up to 40 hours' },
                { type: 'Usage-Based', bestFor: 'Per-deliverable or per-unit work', color: 'text-cyan-400', bg: 'bg-cyan-500/10', border: 'border-cyan-500/20', pros: 'Fair pricing, scales with demand, transparent', cons: 'Unpredictable income, requires accurate tracking', example: 'Copywriter charging $250 per blog post, invoicing at end of month for all posts delivered' },
                { type: 'Subscription', bestFor: 'Recurring digital products or services', color: 'text-teal-400', bg: 'bg-teal-500/10', border: 'border-teal-500/20', pros: 'Automatic recurring revenue, low admin, scalable', cons: 'Requires payment gateway setup, churn risk', example: 'UX audit service charging $199/month for ongoing usability reviews and recommendations' },
                { type: 'Hybrid', bestFor: 'Complex engagements with mixed work types', color: 'text-violet-400', bg: 'bg-violet-500/10', border: 'border-violet-500/20', pros: 'Flexible, covers different work types, balanced risk', cons: 'Complex to manage, requires clear contracts', example: 'Developer on $3,000/month retainer plus milestone billing for major feature builds' },
              ].map((item, i) => (
                <div key={i} className={`rounded-xl ${item.bg} border ${item.border} p-6`}>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className={`text-lg font-semibold ${item.color}`}>{item.type}</h3>
                    <span className="text-xs text-gray-500">Best for: {item.bestFor}</span>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3 mb-3">
                    <div>
                      <p className="text-xs text-green-400 font-medium mb-1">Pros</p>
                      <p className="text-gray-400 text-sm">{item.pros}</p>
                    </div>
                    <div>
                      <p className="text-xs text-amber-400 font-medium mb-1">Cons</p>
                      <p className="text-gray-400 text-sm">{item.cons}</p>
                    </div>
                  </div>
                  <div className="rounded-lg bg-gray-800/50 p-3">
                    <p className="text-xs text-gray-500 font-medium mb-1">Example</p>
                    <p className="text-gray-300 text-sm">{item.example}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section id="choosing-the-right-cycle">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold">3</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Choosing the Right Billing Cycle</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              The right billing cycle depends on five key factors. Getting this wrong can mean waiting weeks longer than necessary for payment or creating unnecessary administrative burden.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              {[
                { factor: 'Cash Flow Needs', icon: '$', desc: 'If cash flow is tight (as it is for most early-stage freelancers), choose shorter cycles. Weekly billing means money arrives 3-4x faster than monthly billing. Every extra week between invoices is a week you are essentially extending credit to your client.' },
                { factor: 'Client Expectations', icon: 'C', desc: 'Enterprise clients often prefer monthly billing that aligns with their accounting periods. Small businesses may be more flexible. Always ask during the proposal stage what billing frequency the client prefers — then negotiate if it does not suit your cash flow.' },
                { factor: 'Project Type', icon: 'P', desc: 'Short engagements (under 2 weeks) should be billed on completion or even upfront. Medium projects suit milestone billing. Ongoing work suits monthly cycles. The work structure should dictate the billing structure.' },
                { factor: 'Admin Overhead', icon: 'A', desc: 'Weekly billing means 52 invoices per client per year vs 12 for monthly. If you have multiple clients, the admin burden of weekly invoicing can be significant — unless you automate it. Factor in time spent creating, sending, and tracking invoices.' },
              ].map((item, i) => (
                <div key={i} className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-sky-500/20 flex items-center justify-center text-sky-400 text-sm font-bold">{item.icon}</div>
                    <h4 className="text-white font-semibold">{item.factor}</h4>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-bold text-white mt-8 mb-4">Decision Matrix</h3>
            <div className="rounded-2xl border border-gray-700/50 overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-800/80">
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Scenario</th>
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Recommended Cycle</th>
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Why</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700/50">
                  {[
                    { scenario: 'New client (no payment history)', cycle: 'Weekly or fortnightly', why: 'Minimises exposure until trust is established. If they do not pay, you lose 1-2 weeks of work, not months.' },
                    { scenario: 'Established client (good track record)', cycle: 'Monthly or flexible', why: 'Trust has been built. Monthly invoicing reduces admin for both sides and keeps the relationship professional.' },
                    { scenario: 'Large project ($10K+)', cycle: 'Milestone-based', why: 'Ties payment to deliverables. Protects both parties — client pays for completed work, you get paid as you deliver.' },
                    { scenario: 'Ongoing retainer work', cycle: 'Monthly (bill in advance)', why: 'Predictable for both sides. Billing in advance means you never work unpaid — the month is funded before it starts.' },
                    { scenario: 'Seasonal or irregular work', cycle: 'Per-project or hybrid', why: 'Avoids empty billing cycles. Invoice when work happens rather than on a fixed schedule that may not align with the work.' },
                  ].map((row, i) => (
                    <tr key={i} className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-gray-300 text-sm font-medium">{row.scenario}</td>
                      <td className="px-6 py-3 text-sky-400 text-sm font-bold">{row.cycle}</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">{row.why}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section id="billing-cycle-best-practices">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold">4</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Billing Cycle Best Practices</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Consistent billing is one of the highest-leverage habits a freelancer can develop. These seven practices will help you get paid faster and more reliably.
            </p>

            <div className="space-y-4 mt-6">
              {[
                { num: '1', title: 'Invoice on the Same Day Every Cycle', desc: 'Consistency builds expectation. If clients know your invoice always arrives on the 1st, their accounts team can plan for it. Random billing dates create confusion and delays. Pick a day and stick to it.' },
                { num: '2', title: 'Align with Client Accounting Periods', desc: 'Most businesses run on monthly accounting cycles. If your invoice arrives on the 28th, it may get pushed to the next month\'s payment run. Billing on the 1st-5th of the month gives you the best chance of being included in the current cycle.' },
                { num: '3', title: 'Bill at the Start of the Month, Not the End', desc: 'Start-of-month invoicing catches budgets when they are fresh. End-of-month invoicing competes with month-end close processes and often gets deferred. For retainer work, billing in advance (1st of month for the upcoming month) is the gold standard.' },
                { num: '4', title: 'Use Auto-Recurring for Retainers', desc: 'If you bill the same amount every cycle, set it up as a recurring invoice in your invoicing software. This eliminates the risk of forgetting and ensures invoices go out on time, every time, without manual effort.' },
                { num: '5', title: 'Set Clear Cycle Dates in Contracts', desc: 'Your contract should explicitly state: billing frequency, billing date, payment terms, and what happens if the cycle is disrupted (e.g., scope changes). Ambiguity in billing terms leads to disputes and late payments.' },
                { num: '6', title: 'Review and Adjust Quarterly', desc: 'Your billing cycle is not set in stone. Every quarter, review: Are clients paying on time? Is cash flow adequate? Has the scope changed? If a monthly cycle is causing cash flow strain, discuss moving to fortnightly with the client.' },
                { num: '7', title: 'Track Cycle-Over-Cycle Trends', desc: 'Compare revenue, payment speed, and outstanding amounts cycle over cycle. Are your receivables growing? Is your DSO increasing? Cycle-over-cycle trending helps you catch problems early — before they become crises.' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-sky-500/20 flex items-center justify-center text-sky-400 text-sm font-bold">{item.num}</div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5 */}
        <section id="common-billing-cycle-problems">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold">5</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Common Billing Cycle Problems</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Even experienced freelancers make billing cycle mistakes. Here are the six most common problems and how to fix them.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              {[
                { problem: 'Cycle Mismatch with Clients', symptom: 'You bill monthly but the client processes payments quarterly', fix: 'Ask about their payment schedule during onboarding. If they pay quarterly, either negotiate or adjust your terms (e.g., larger deposits, shorter work commitments).', color: 'text-amber-400' },
                { problem: 'Inconsistent Billing Dates', symptom: 'You invoice on the 3rd one month, the 18th the next', fix: 'Set a recurring calendar reminder or use automated invoicing. Inconsistency signals unprofessionalism and makes it harder for clients to budget for your invoices.', color: 'text-amber-400' },
                { problem: 'Not Adjusting for Scope Changes', symptom: 'Scope doubled but billing cycle stayed the same', fix: 'When scope increases significantly, renegotiate the billing cycle. More work should mean more frequent billing or milestone payments for the additional scope.', color: 'text-amber-400' },
                { problem: 'Forgetting to Invoice (Cycle Drift)', symptom: 'You let 6-8 weeks pass before realising you have not invoiced', fix: 'This is the #1 billing problem for freelancers. Automate recurring invoices and set hard calendar deadlines. Some freelancers lose thousands per year simply by forgetting to bill.', color: 'text-red-400' },
                { problem: 'Too-Long Cycles Hurting Cash Flow', symptom: 'Quarterly billing leaves you cash-poor for months', fix: 'Switch to monthly or fortnightly. If the client insists on quarterly, request 50% upfront and the remainder at the end of the quarter. Never fund 90 days of work from your own pocket.', color: 'text-red-400' },
                { problem: 'No Late-Cycle Follow-Up', symptom: 'You invoice on time but never follow up until 30+ days overdue', fix: 'Build reminders into your cycle: send a pre-due reminder 3 days before, a same-day reminder on the due date, and an overdue notice within 48 hours. Automated reminders solve this entirely.', color: 'text-red-400' },
              ].map((item, i) => (
                <div key={i} className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                  <h4 className={`${item.color} font-semibold mb-1`}>{item.problem}</h4>
                  <p className="text-gray-500 text-xs mb-3 italic">{item.symptom}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.fix}</p>
                </div>
              ))}
            </div>

            <div className="rounded-xl bg-sky-500/5 border border-sky-500/20 p-5 mt-4">
              <p className="text-sky-400 font-medium mb-2">The Real Cost of Billing Cycle Drift</p>
              <p className="text-gray-400 text-sm">
                Research shows that <strong className="text-gray-200">40% of freelancers invoice late or inconsistently</strong>. If you bill $5,000/month and your average billing delay is 10 days, you are losing roughly <strong className="text-gray-200">$1,600/year in time-value of money</strong> at standard interest rates &mdash; plus the compounding effect of later payment from clients who process your late invoice in their next payment cycle, not the current one.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6 */}
        <section id="invoiceflow-billing-cycles">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold">6</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">How InvoiceFlow Helps</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              InvoiceFlow takes the manual effort out of billing cycle management so you can focus on delivering great work.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              {[
                { title: 'Recurring Invoice Scheduling', desc: 'Set up automated recurring invoices on any schedule — weekly, fortnightly, monthly, or custom. Each invoice is generated and sent automatically on your chosen billing date, with no manual intervention.' },
                { title: 'Automated Billing Cycles', desc: 'Define a billing cycle per client. InvoiceFlow tracks where you are in each cycle, auto-generates invoices at the right time, and adjusts for weekends and public holidays so invoices always arrive on a business day.' },
                { title: 'Cycle Tracking Dashboard', desc: 'See all your active billing cycles in one view — which clients are due, which invoices are pending, and which cycles have been completed. Never lose track of where you are in a billing period.' },
                { title: 'Payment Pattern Analytics', desc: 'InvoiceFlow tracks how quickly each client pays across billing cycles, helping you identify trends. If a client\'s payment speed is deteriorating cycle over cycle, you will see it in the analytics before it becomes a problem.' },
              ].map((item, i) => (
                <div key={i} className="rounded-xl bg-gray-800/50 border border-sky-500/20 p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-sky-500/10 flex items-center justify-center">
                      <svg className="w-4 h-4 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
                  { label: 'Payment Terms', href: '/glossary/payment-terms' },
                  { label: 'Retainer', href: '/glossary/retainer' },
                  { label: 'Billable Hours', href: '/glossary/billable-hours' },
                  { label: 'Invoice', href: '/glossary/invoice' },
                  { label: 'Accounts Receivable', href: '/glossary/accounts-receivable' },
                  { label: 'Scope Creep', href: '/glossary/scope-creep' },
                ].map((term) => (
                  <Link key={term.href} href={term.href} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm font-medium hover:bg-sky-500/20 transition-colors">
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
        <p className="text-gray-400 text-center mb-8">Free tools to help you set up and manage your billing cycles effectively.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {relatedTools.map((tool) => (
            <Link key={tool.href} href={tool.href} className="group p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:border-sky-500/50 hover:bg-gray-800/80 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center mb-4">{tool.icon}</div>
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
        <p className="text-gray-400 text-center mb-8">In-depth guides on invoicing, billing schedules, and getting paid on time.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {relatedGuides.map((guide) => (
            <Link key={guide.href} href={guide.href} className="group p-6 rounded-2xl bg-gray-800/40 border border-gray-700/40 hover:border-sky-500/40 transition-all duration-300">
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
            Never Miss a Billing Cycle Again
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            InvoiceFlow automates your billing schedule with recurring invoices, cycle reminders, and payment tracking &mdash; so every billing period is covered and every dollar is accounted for.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button>Start Free &mdash; No Card Required</Button>
            </Link>
            <Link href="/tools/invoice-generator">
              <Button variant="secondary">Create Your First Invoice</Button>
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
