import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Recurring Invoice Software for Australian Freelancers — InvoiceFlow',
  description:
    'Set up recurring invoices once and InvoiceFlow sends them automatically. Flexible frequencies, auto-GST, payment tracking, and client notifications. Built for Australian freelancers and sole traders. Free to start.',
  keywords: [
    'recurring invoice software australia',
    'automatic invoicing for freelancers',
    'subscription billing freelancer',
    'recurring billing software sole trader',
    'recurring invoice generator',
    'automatic invoice sending',
    'retainer invoicing software',
  ],
  alternates: { canonical: '/features/recurring-invoicing' },
  openGraph: {
    title: 'Recurring Invoice Software for Australian Freelancers — InvoiceFlow',
    description:
      'Automate your retainer and subscription billing. Set up recurring invoices once, and InvoiceFlow sends them on schedule with auto-GST and payment tracking. Free tier available.',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://invoiceflow-teal.vercel.app' },
    { '@type': 'ListItem', position: 2, name: 'Features', item: 'https://invoiceflow-teal.vercel.app/features' },
    { '@type': 'ListItem', position: 3, name: 'Recurring Invoicing', item: 'https://invoiceflow-teal.vercel.app/features/recurring-invoicing' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I set up recurring invoices in InvoiceFlow?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Setting up recurring invoices in InvoiceFlow takes under two minutes. Create an invoice as normal, then toggle "Make Recurring" and choose your frequency — weekly, fortnightly, monthly, or quarterly. Set a start date, an optional end date, and InvoiceFlow will automatically generate and send each invoice on schedule. You can preview upcoming invoices before they go out, and pause or cancel the schedule at any time.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I change the amount on a recurring invoice each month?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. InvoiceFlow supports both fixed and variable recurring invoices. For fixed retainers, lock in the amount and it stays the same every cycle. For variable billing, InvoiceFlow generates a draft before each send date so you can adjust line items, quantities, or rates before it goes out. You get a notification before each cycle so nothing is sent without your review if you choose variable mode.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if a recurring invoice isn\'t paid on time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'InvoiceFlow automatically tracks the payment status of every recurring invoice. If a payment is overdue, it flags the invoice in your dashboard and can send automatic payment reminders on a schedule you control — gentle nudges before escalating follow-ups. You\'ll see a clear view of which billing periods have been paid and which are outstanding, so you never lose track of retainer revenue.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does InvoiceFlow handle GST on recurring invoices?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. InvoiceFlow automatically calculates GST at 10% on every recurring invoice, just like one-off invoices. If your GST registration status changes mid-schedule — for example, you cross the $75,000 threshold and register — InvoiceFlow updates all future recurring invoices to include GST. Each invoice meets ATO tax invoice requirements with all 7 mandatory fields included automatically.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I set up recurring invoices for multiple clients?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. There is no limit on the number of recurring invoice schedules you can create on the Pro and Premium plans. Each client can have their own frequency, amount, and notification preferences. Your dashboard gives you a calendar view of all upcoming recurring invoices across every client, so you can see your projected recurring revenue at a glance and manage your cash flow effectively.',
      },
    },
  ],
};

const painPoints = [
  {
    pain: 'Manually re-creating the same invoice every month for retainer clients',
    fix: 'Set up once, InvoiceFlow sends it automatically on schedule',
  },
  {
    pain: 'Forgetting to send invoices and losing weeks of cash flow',
    fix: 'Never miss a billing cycle — automatic reminders and sends',
  },
  {
    pain: 'Each recurring invoice has slightly different amounts',
    fix: 'Flexible amounts — adjust before each send or lock in fixed rates',
  },
  {
    pain: 'Tracking which retainer clients have paid this month',
    fix: 'Real-time payment status per client per billing period',
  },
];

const capabilities = [
  {
    title: 'Set It and Forget It',
    description: 'Configure invoice frequency (weekly, fortnightly, monthly, quarterly) and InvoiceFlow sends them automatically. No manual intervention needed.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182M2.985 19.644l3.181-3.183" />
      </svg>
    ),
  },
  {
    title: 'Smart Scheduling',
    description: 'Pick your billing dates, set a start and end date, and InvoiceFlow handles the rest — including adjustments around public holidays.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
  },
  {
    title: 'Flexible Amounts',
    description: 'Fixed retainer amounts or variable amounts that you adjust each cycle before sending. Get a draft notification so nothing goes out without your review.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Auto-GST Updates',
    description: 'GST calculated correctly every cycle, even if your registration status changes. All 7 ATO tax invoice requirements included automatically.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: 'Payment Tracking',
    description: 'Automatic tracking of which recurring invoices have been paid and which are overdue. See payment status per client, per billing period.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Client Communication',
    description: 'Automatic email notifications when recurring invoices are generated, with customisable templates. Keep clients informed without lifting a finger.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
];

const keyStats = [
  { value: '12 hrs/yr', label: 'Saved per recurring client by automating invoices' },
  { value: '$3,800', label: 'Average annual retainer revenue at risk from late/missed invoicing' },
  { value: '3x faster', label: 'Payment when invoices are sent on a consistent schedule' },
  { value: '0', label: 'Missed invoices with automatic scheduling' },
];

const comparisonRows = [
  { feature: 'Recurring invoices', invoiceflow: true, xero: true, freshbooks: true, stripe: true },
  { feature: 'Flexible frequency', invoiceflow: true, xero: true, freshbooks: true, stripe: true },
  { feature: 'GST auto-calculation', invoiceflow: true, xero: true, freshbooks: false, stripe: false },
  { feature: 'Free tier available', invoiceflow: true, xero: false, freshbooks: false, stripe: false },
  { feature: 'No payment processing fees', invoiceflow: true, xero: false, freshbooks: false, stripe: false },
  { feature: 'Built for freelancers', invoiceflow: true, xero: false, freshbooks: true, stripe: false },
];

const personaPages = [
  { name: 'Consultants', href: '/for/consultants', desc: 'Retainer billing and milestone invoicing' },
  { name: 'Coaches', href: '/for/coaches', desc: 'Recurring session and package billing' },
  { name: 'Virtual Assistants', href: '/for/virtual-assistants', desc: 'Monthly retainer invoicing on autopilot' },
  { name: 'Personal Trainers', href: '/for/personal-trainers', desc: 'Weekly and monthly session billing' },
  { name: 'IT Consultants', href: '/for/it-consultants', desc: 'Support contract and retainer invoicing' },
  { name: 'Cleaners', href: '/for/cleaners', desc: 'Regular service billing for ongoing clients' },
];

const relatedTools = [
  { name: 'Invoice Generator', href: '/tools/invoice-generator', desc: 'Create professional invoices instantly' },
  { name: 'Recurring Invoice Template', href: '/tools/recurring-invoice-template', desc: 'Free recurring invoice template' },
  { name: 'Rate Calculator', href: '/tools/rate-calculator', desc: 'Find your ideal hourly or retainer rate' },
  { name: 'Payment Receipt Generator', href: '/tools/payment-receipt-generator', desc: 'Generate receipts for paid invoices' },
  { name: 'Invoice Numbering System', href: '/tools/invoice-numbering-system', desc: 'Set up a professional numbering scheme' },
  { name: 'Invoice Email Template Generator', href: '/tools/invoice-email-template-generator', desc: 'Write professional invoice emails' },
];

export default function RecurringInvoicingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Navigation */}
      <nav className="border-b border-white/5 bg-slate-950/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
          <Link href="/" className="text-xl font-bold bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
            InvoiceFlow
          </Link>
          <div className="hidden sm:flex items-center gap-6 text-sm text-slate-400">
            <Link href="/features" className="hover:text-white transition-colors">Features</Link>
            <Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link>
            <Link href="/tools" className="hover:text-white transition-colors">Free Tools</Link>
            <Link href="/guides" className="hover:text-white transition-colors">Guides</Link>
          </div>
          <Link href="/signup">
            <Button size="sm">Start Free</Button>
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-16 text-center">
        <div className="inline-block rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-sm font-medium text-amber-400 mb-8">
          Recurring Invoicing
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Set it once,{' '}
          <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
            get paid on repeat
          </span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-slate-400 mb-10">
          Stop re-creating the same invoice every month. InvoiceFlow automates your recurring invoices — retainers, subscriptions,
          ongoing services — so you get paid on time without lifting a finger. Built for Australian freelancers and sole traders.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/signup">
            <Button size="lg">Start Free — No Credit Card</Button>
          </Link>
          <Link href="/tools/invoice-generator">
            <Button variant="secondary" size="lg">Try the Invoice Generator</Button>
          </Link>
        </div>
        <p className="mt-4 text-sm text-slate-500">
          Free tier: 5 invoices/month, recurring schedules, auto-GST, 100+ free tools
        </p>
      </section>

      {/* Pain Points */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">
          The recurring invoicing problem
        </h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          Retainer clients are your most reliable revenue — but only if you actually send the invoices on time, every time.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {painPoints.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 hover:border-amber-500/20 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 mt-1">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-red-500/10">
                    <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="text-red-300 text-sm font-medium mb-2 line-through decoration-red-500/50">
                    {item.pain}
                  </p>
                  <div className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-emerald-300 font-semibold">{item.fix}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Feature Capabilities */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">
          Everything you need for recurring billing
        </h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          From simple monthly retainers to complex variable billing — InvoiceFlow handles every recurring invoicing scenario.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, i) => (
            <div key={i} className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 hover:border-amber-500/20 transition-colors">
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-gradient-to-br from-amber-400 to-orange-400 p-3 text-white shrink-0">
                  {cap.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">{cap.title}</h3>
                  <p className="text-sm text-slate-400">{cap.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Key Numbers */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">
          The cost of manual recurring invoicing
        </h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          Every missed or late invoice is money left on the table. Automation pays for itself from the first month.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {keyStats.map((stat, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 text-center hover:border-amber-500/20 transition-colors"
            >
              <p className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent mb-2">
                {stat.value}
              </p>
              <p className="text-sm text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Competitor Comparison Table */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">
          How InvoiceFlow compares for recurring billing
        </h2>
        <p className="text-center text-slate-400 mb-10 max-w-2xl mx-auto">
          Enterprise tools charge enterprise prices. InvoiceFlow gives freelancers recurring invoicing without the bloat or the bill.
        </p>
        <div className="rounded-2xl border border-white/5 bg-white/[0.02] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/5">
                  <th className="text-left p-4 text-slate-400 font-medium">Feature</th>
                  <th className="p-4 text-center">
                    <span className="text-amber-400 font-bold">InvoiceFlow</span>
                    <span className="block text-xs text-slate-500 mt-0.5">Free / $19</span>
                  </th>
                  <th className="p-4 text-center">
                    <span className="text-slate-300 font-medium">Xero</span>
                    <span className="block text-xs text-slate-500 mt-0.5">$35/mo</span>
                  </th>
                  <th className="p-4 text-center">
                    <span className="text-slate-300 font-medium">FreshBooks</span>
                    <span className="block text-xs text-slate-500 mt-0.5">$24/mo</span>
                  </th>
                  <th className="p-4 text-center">
                    <span className="text-slate-300 font-medium">Stripe Billing</span>
                    <span className="block text-xs text-slate-500 mt-0.5">0.5% + fees</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={i} className="border-b border-white/5 last:border-0">
                    <td className="p-4 text-slate-300">{row.feature}</td>
                    <td className="p-4 text-center">
                      {row.invoiceflow ? (
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-amber-500/20 text-amber-400">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                        </span>
                      ) : (
                        <span className="text-slate-600">&mdash;</span>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {row.xero ? (
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/5 text-slate-400">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                        </span>
                      ) : (
                        <span className="text-slate-600">&mdash;</span>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {row.freshbooks ? (
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/5 text-slate-400">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                        </span>
                      ) : (
                        <span className="text-slate-600">&mdash;</span>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {row.stripe ? (
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/5 text-slate-400">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                        </span>
                      ) : (
                        <span className="text-slate-600">&mdash;</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Related Persona Pages */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">
          Who uses recurring invoicing?
        </h2>
        <p className="text-center text-slate-400 mb-10 max-w-2xl mx-auto">
          Any freelancer or sole trader with ongoing clients can save hours every month with automated recurring invoices.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {personaPages.map((persona) => (
            <Link
              key={persona.href}
              href={persona.href}
              className="rounded-2xl border border-white/5 bg-white/[0.02] p-5 hover:border-amber-500/20 hover:bg-white/[0.04] transition-all group"
            >
              <h3 className="font-semibold text-white group-hover:text-amber-400 transition-colors">
                {persona.name}
              </h3>
              <p className="text-sm text-slate-400 mt-1">{persona.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Related Tools */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">
          Free invoicing tools
        </h2>
        <p className="text-center text-slate-400 mb-10">
          No sign-up required. Use them right now, completely free.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {relatedTools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="rounded-2xl border border-white/5 bg-white/[0.02] p-5 hover:border-amber-500/20 hover:bg-white/[0.04] transition-all group"
            >
              <h3 className="font-semibold text-white group-hover:text-amber-400 transition-colors">
                {tool.name}
              </h3>
              <p className="text-sm text-slate-400 mt-1">{tool.desc}</p>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/tools" className="text-amber-400 hover:text-amber-300 text-sm font-medium">
            Browse all 100+ free tools &rarr;
          </Link>
        </div>
      </section>

      {/* Email Capture */}
      <div className="mx-auto max-w-6xl px-6">
        <EmailCapture />
      </div>

      {/* Pricing */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">
          Simple pricing for recurring invoicing
        </h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          Start free. Upgrade when you need unlimited recurring schedules and advanced automation.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Free */}
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
            <h3 className="text-lg font-bold text-white mb-1">Free</h3>
            <div className="mb-4">
              <span className="text-3xl font-bold text-white">$0</span>
              <span className="text-slate-400 text-sm">/month</span>
            </div>
            <p className="text-sm text-slate-400 mb-6">Perfect for freelancers getting started with recurring billing.</p>
            <ul className="space-y-3 text-sm text-slate-300 mb-6">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                5 invoices per month
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                1 recurring schedule
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Automatic GST calculation
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Basic payment tracking
              </li>
            </ul>
            <Link href="/signup">
              <Button variant="secondary" size="md" className="w-full">Start Free</Button>
            </Link>
          </div>

          {/* Pro */}
          <div className="rounded-2xl border border-amber-500/30 bg-amber-500/[0.05] p-6 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-amber-400 to-orange-400 px-3 py-0.5 text-xs font-bold text-slate-900">
              Most Popular
            </div>
            <h3 className="text-lg font-bold text-white mb-1">Pro</h3>
            <div className="mb-4">
              <span className="text-3xl font-bold text-white">$19</span>
              <span className="text-slate-400 text-sm">/month</span>
            </div>
            <p className="text-sm text-slate-400 mb-6">Unlimited recurring invoicing with full automation and reminders.</p>
            <ul className="space-y-3 text-sm text-slate-300 mb-6">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Unlimited invoices
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Unlimited recurring schedules
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Auto payment reminders
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Variable amount drafts
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Custom email templates
              </li>
            </ul>
            <Link href="/signup">
              <Button size="md" className="w-full">Start Pro — 14-Day Trial</Button>
            </Link>
          </div>

          {/* Premium */}
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
            <h3 className="text-lg font-bold text-white mb-1">Premium</h3>
            <div className="mb-4">
              <span className="text-3xl font-bold text-white">$39</span>
              <span className="text-slate-400 text-sm">/month</span>
            </div>
            <p className="text-sm text-slate-400 mb-6">Multi-business recurring billing with advanced reporting and API access.</p>
            <ul className="space-y-3 text-sm text-slate-300 mb-6">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Everything in Pro
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Multiple business profiles
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Recurring revenue analytics
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                API access
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Priority support
              </li>
            </ul>
            <Link href="/signup">
              <Button variant="secondary" size="md" className="w-full">Start Premium</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Recurring invoicing FAQ
        </h2>
        <div className="space-y-4">
          {faqSchema.mainEntity.map((faq, i) => (
            <details key={i} className="group rounded-2xl border border-white/5 bg-white/[0.02] overflow-hidden">
              <summary className="cursor-pointer p-5 font-medium text-white hover:text-amber-400 transition-colors list-none flex justify-between items-center">
                {faq.name}
                <svg className="w-5 h-5 text-slate-500 group-open:rotate-180 transition-transform shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-5 pb-5 text-sm text-slate-400 leading-relaxed">
                {faq.acceptedAnswer.text}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Stop chasing retainers.{' '}
          <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
            Automate them.
          </span>
        </h2>
        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
          Set up your recurring invoices in under two minutes. InvoiceFlow handles the scheduling, sending, GST, and payment tracking — so you can focus on the work that earns the revenue.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/signup">
            <Button size="lg">Start Free — 5 Invoices/Month</Button>
          </Link>
          <Link href="/features" className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-amber-400 hover:text-amber-300 transition-colors">
            View all features &rarr;
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 px-6">
        <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between text-sm text-slate-500 gap-4">
          <p>&copy; {new Date().getFullYear()} InvoiceFlow. Built in Melbourne, Australia.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
