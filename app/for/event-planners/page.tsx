import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Invoicing Software for Event Planners in Australia — InvoiceFlow',
  description:
    'Free invoicing tools built for Australian event planners. Deposit tracking, milestone payments, vendor reimbursements, and branded invoices for wedding planners, corporate event managers, party planners and more.',
  alternates: { canonical: '/for/event-planners' },
  keywords: [
    'invoicing software event planners australia',
    'event planning invoice template',
    'wedding planner invoicing australia',
  ],
  openGraph: {
    title: 'InvoiceFlow for Event Planners — Bill Your Clients, Create Unforgettable Events',
    description:
      'Stop drowning in deposit tracking and payment admin. InvoiceFlow gives event planners milestone billing, vendor reimbursement invoicing, and GST compliance — starting free.',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://invoiceflow-teal.vercel.app' },
    { '@type': 'ListItem', position: 2, name: 'For Event Planners', item: 'https://invoiceflow-teal.vercel.app/for/event-planners' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do event planners need invoicing software?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Event planners juggle deposits, progress payments, final invoices, and vendor reimbursements across multiple events at once. Professional invoicing software helps you track every payment milestone, send GST-compliant tax invoices to corporate clients, and keep clean records for BAS time. Without it, you risk losing track of who has paid their deposit, which events have outstanding balances, and how much GST you owe at the end of each quarter. InvoiceFlow automates all of this so you can focus on creating unforgettable events, not chasing payments.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can InvoiceFlow handle deposit and progress payments?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. InvoiceFlow supports milestone billing, so you can set up a payment schedule that matches your event planning workflow — for example, 30% deposit on booking, 40% progress payment four weeks before the event, and 30% final payment on the day. Each milestone generates its own invoice automatically, and you can track which milestones have been paid and which are still outstanding across all your events. You can also collect partial payments and split invoices however your client contracts require.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is InvoiceFlow free for event planners?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'InvoiceFlow offers a free forever tier with 5 invoices per month, Gmail sync, CSV export, and access to 100+ free business tools including a GST calculator, invoice generator, and ABN lookup. This is ideal for event planners just starting out or those managing a handful of events per month. Paid plans start at $19/month for unlimited invoices, milestone billing, recurring payments, and full client management — perfect for established event planning businesses handling multiple events simultaneously.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I send invoices for vendor reimbursements separately?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. InvoiceFlow lets you create itemised invoices that clearly separate your service fees from pass-through vendor costs. You can list your event planning fee as one line item and then add separate line items for florist costs, catering deposits, venue hire, entertainment, and any other vendor expenses you are passing through to your client. This keeps your accounts clean, makes it clear to clients exactly what they are paying for, and ensures GST is only applied to your service fees — not to vendor reimbursements where the vendor has already charged GST.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does InvoiceFlow help event planners with GST?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'InvoiceFlow automatically adds 10% GST to your event planning service fees on every invoice, tracks your annual turnover against the $75,000 GST registration threshold, and generates BAS-ready reports at the end of each quarter. For event planners, GST can be tricky — your service fees attract GST, but reimbursable vendor expenses may not need GST added again if the vendor has already charged it. InvoiceFlow lets you configure line items as taxable or non-taxable so your invoices are always accurate and ATO-compliant.',
      },
    },
  ],
};

const painPoints = [
  {
    problem: 'Juggling deposits, progress payments, and final invoices for each event',
    solution: 'Milestone billing that tracks every payment stage — deposits, progress, and final invoices all in one place.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0112 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 15.75h7.5" />
      </svg>
    ),
  },
  {
    problem: 'Tracking vendor reimbursements vs your service fees',
    solution: 'Itemised invoices that separate your planning fees from pass-through vendor costs — clear for you and your clients.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
  {
    problem: 'Managing seasonal cash flow with bookings months in advance',
    solution: 'Scheduled invoices and deposit collection — secure revenue upfront and forecast cash flow across your event calendar.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
  },
  {
    problem: 'No professional invoice for corporate clients who require tax invoices',
    solution: 'GST-compliant tax invoices with your branding — ABN, payment terms, and line items that meet corporate procurement standards.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
];

const eventTypes = [
  { name: 'Wedding Planner', icon: '💒' },
  { name: 'Corporate Event Manager', icon: '🏢' },
  { name: 'Party Planner', icon: '🎉' },
  { name: 'Conference Organiser', icon: '🎤' },
  { name: 'Festival Coordinator', icon: '🎪' },
  { name: 'Exhibition Manager', icon: '🖼️' },
  { name: 'Fundraising Event Planner', icon: '🎗️' },
  { name: 'Venue Stylist', icon: '✨' },
];

const popularTools = [
  { name: 'GST Calculator', href: '/tools/gst-calculator', desc: 'Calculate GST on event planning fees and vendor costs' },
  { name: 'Invoice Generator', href: '/tools/invoice-generator', desc: 'Create professional event planning invoices instantly' },
  { name: 'Milestone Payment Calculator', href: '/tools/milestone-payment-calculator', desc: 'Split event payments into deposit and progress milestones' },
  { name: 'Quote Generator', href: '/tools/invoice-generator', desc: 'Send event proposals and package quotes to clients' },
  { name: 'Late Payment Calculator', href: '/tools/late-payment-interest-calculator', desc: 'Calculate interest on overdue event invoices' },
  { name: 'ABN Lookup', href: '/tools/abn-lookup', desc: 'Verify client and vendor ABNs for tax invoices' },
];

export default function ForEventPlannersPage() {
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
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
          </div>
          <Link href="/signup">
            <Button size="sm">Start Free</Button>
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-16 text-center">
        <div className="inline-block rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-sm font-medium text-amber-400 mb-8">
          Built for Australian Event Planners
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Bill your clients.{' '}
          <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
            Create unforgettable events.
          </span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-slate-400 mb-10">
          Stop drowning in deposit tracking and payment admin. InvoiceFlow lets wedding planners, corporate event managers, and
          every event planning professional invoice clients with milestone billing, vendor reimbursements, and GST compliance — in 30 seconds.
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
          Free tier: 5 invoices/month, Gmail sync, CSV export, 100+ free tools
        </p>
      </section>

      {/* Event Types */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <p className="text-center text-slate-400 text-sm mb-6">Trusted by event professionals across every specialty</p>
        <div className="flex flex-wrap justify-center gap-3">
          {eventTypes.map((type) => (
            <span
              key={type.name}
              className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-300"
            >
              {type.icon} {type.name}
            </span>
          ))}
        </div>
      </section>

      {/* Pain Points */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">
          Event planning invoicing shouldn&apos;t be this painful
        </h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          You&apos;re an event planner, not a bookkeeper. You need to bill clients quickly, track deposits and milestones, and get back to creating spectacular events.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {painPoints.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 hover:border-amber-500/20 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-red-500/10 p-3 text-red-400 shrink-0">{item.icon}</div>
                <div>
                  <p className="text-red-300 text-sm font-medium mb-1 line-through decoration-red-500/50">
                    {item.problem}
                  </p>
                  <p className="text-amber-300 font-semibold">{item.solution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Key Numbers */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { number: '18K+', label: 'Event professionals in Australia', detail: 'A thriving industry' },
            { number: '$32B', label: 'Australian events industry', detail: 'And growing every year' },
            { number: '30s', label: 'To create an invoice', detail: 'Between client meetings' },
            { number: '$0', label: 'To start', detail: 'Free tier, forever' },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
              <p className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                {stat.number}
              </p>
              <p className="text-white font-medium mt-2">{stat.label}</p>
              <p className="text-slate-500 text-sm mt-1">{stat.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">
          How InvoiceFlow compares for event planners
        </h2>
        <p className="text-center text-slate-400 mb-10 max-w-2xl mx-auto">
          You don&apos;t need bloated project management software. You need milestone invoicing, deposit tracking, and professional tax invoices that impress corporate clients.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="py-4 px-4 text-slate-400 font-medium">Feature</th>
                <th className="py-4 px-4 text-amber-400 font-bold">InvoiceFlow</th>
                <th className="py-4 px-4 text-slate-400 font-medium">HoneyBook ($19/mo)</th>
                <th className="py-4 px-4 text-slate-400 font-medium">Dubsado ($40/mo)</th>
              </tr>
            </thead>
            <tbody className="text-slate-300">
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Free tier</td>
                <td className="py-3 px-4 text-amber-400 font-semibold">5 invoices/mo forever</td>
                <td className="py-3 px-4 text-slate-500">7-day trial only</td>
                <td className="py-3 px-4 text-slate-500">3 clients trial only</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Monthly price</td>
                <td className="py-3 px-4 text-amber-400 font-semibold">$19/mo</td>
                <td className="py-3 px-4">$19/mo</td>
                <td className="py-3 px-4">$40/mo</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Deposit tracking</td>
                <td className="py-3 px-4 text-amber-400">Built-in milestones</td>
                <td className="py-3 px-4 text-amber-400">Supported</td>
                <td className="py-3 px-4 text-amber-400">Supported</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Milestone payments</td>
                <td className="py-3 px-4 text-amber-400">Native support</td>
                <td className="py-3 px-4 text-amber-400">Supported</td>
                <td className="py-3 px-4 text-amber-400">Supported</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Client management</td>
                <td className="py-3 px-4 text-amber-400">Built-in</td>
                <td className="py-3 px-4 text-amber-400">Built-in</td>
                <td className="py-3 px-4 text-amber-400">Built-in</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Workflow automation</td>
                <td className="py-3 px-4 text-amber-400">Auto reminders</td>
                <td className="py-3 px-4 text-amber-400">Full workflows</td>
                <td className="py-3 px-4 text-amber-400">Full workflows</td>
              </tr>
              <tr>
                <td className="py-3 px-4">Annual cost</td>
                <td className="py-3 px-4 text-amber-400 font-bold">$0 — $228/yr</td>
                <td className="py-3 px-4 text-red-300">$228/yr</td>
                <td className="py-3 px-4 text-red-300">$480/yr</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-6 text-center">
          <Link href="/compare" className="text-amber-400 hover:text-amber-300 text-sm font-medium">
            See full competitor comparisons &rarr;
          </Link>
        </div>
      </section>

      {/* Popular Tools */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">
          Free tools every event planner needs
        </h2>
        <p className="text-center text-slate-400 mb-10">
          No sign-up required. Use them right now, completely free.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {popularTools.map((tool) => (
            <Link
              key={tool.name}
              href={tool.href}
              className="rounded-xl border border-white/5 bg-white/[0.02] p-5 hover:border-amber-500/20 hover:bg-white/[0.04] transition-all group"
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

      {/* Guides */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">Guides for event planners</h2>
        <p className="text-center text-slate-400 mb-10">
          Plain-English articles on invoicing, GST, and running an event planning business in Australia.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { title: 'GST Guide for Australian Freelancers', href: '/blog/gst-guide-australian-freelancers' },
            { title: 'How Much Tax Do Freelancers Pay?', href: '/blog/how-much-tax-freelancers-pay-australia' },
            { title: 'Tax Deductions for Freelancers', href: '/blog/tax-deductions-australian-freelancers' },
            { title: 'How to Start Freelancing in Australia', href: '/blog/how-to-start-freelancing-australia' },
            { title: 'BAS Guide for Sole Traders', href: '/blog/bas-guide-australian-freelancers' },
            { title: 'Late Payment Interest Guide', href: '/blog/late-payment-interest-australia' },
          ].map((article) => (
            <Link
              key={article.href}
              href={article.href}
              className="rounded-xl border border-white/5 bg-white/[0.02] p-5 hover:border-amber-500/20 hover:bg-white/[0.04] transition-all"
            >
              <p className="font-medium text-white text-sm">{article.title}</p>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/blog" className="text-amber-400 hover:text-amber-300 text-sm font-medium">
            Read all 125+ articles &rarr;
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Common questions from event planners
        </h2>
        <div className="space-y-6">
          {faqSchema.mainEntity.map((faq, i) => (
            <details key={i} className="group rounded-xl border border-white/5 bg-white/[0.02] overflow-hidden">
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

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Ready to professionalise your event planning invoices?
        </h2>
        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
          Join thousands of Australian event planners who track deposits automatically, send milestone invoices, and never chase a late payer again. Start free today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/signup">
            <Button size="lg">Start Free — 5 Invoices/Month</Button>
          </Link>
          <Link href="/pricing">
            <Button variant="secondary" size="lg">View Pricing</Button>
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
