import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Invoicing Software for Virtual Assistants Australia — InvoiceFlow',
  description:
    'Free invoicing and time tracking built for Australian virtual assistants. Track hours across multiple clients, auto-generate invoices, and get paid faster — starting free.',
  alternates: { canonical: '/for/virtual-assistants' },
  openGraph: {
    title: 'InvoiceFlow for Virtual Assistants — Track Hours, Invoice Clients, Get Paid',
    description:
      'Stop juggling spreadsheets and time trackers. InvoiceFlow gives VAs per-client rate tracking, automatic hour-to-invoice conversion, and professional invoicing — starting free.',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://invoiceflow-teal.vercel.app' },
    { '@type': 'ListItem', position: 2, name: 'For Virtual Assistants', item: 'https://invoiceflow-teal.vercel.app/for/virtual-assistants' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do virtual assistants need invoicing software?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. As a virtual assistant — whether you are a sole trader or running an ABN — the ATO requires you to keep records of all business income and expenses for at least 5 years. Proper invoicing software ensures your tax invoices meet ATO requirements, tracks GST if you are registered, and keeps clean records across multiple clients. Spreadsheets and manual tracking become unmanageable once you have more than two or three clients with different hourly rates.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can InvoiceFlow handle multiple clients with different hourly rates?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. InvoiceFlow lets you set up per-client profiles with custom hourly rates, preferred payment terms, and recurring invoice schedules. If you charge $45/hour for admin work, $65/hour for social media management, and $80/hour for project management, each client and service type gets its own rate. When you log time, InvoiceFlow automatically calculates the correct amount based on the client and task type.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is InvoiceFlow free for virtual assistants?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'InvoiceFlow offers a free forever tier with 5 invoices per month, Gmail sync, CSV export, and access to 100+ free business tools including an invoice generator, hourly rate calculator, and ABN lookup. Most VAs just starting out or with a couple of clients can run entirely on the free tier. Paid plans start at $19/month for unlimited invoices, time tracking, and automatic payment reminders.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do VAs bill for different types of work on one invoice?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'InvoiceFlow supports itemised invoicing, so you can list multiple line items on a single invoice — for example, 5 hours of inbox management at $45/hour, 3 hours of social media scheduling at $65/hour, and 2 hours of bookkeeping at $55/hour. Each line item shows the description, hours, rate, and subtotal. This gives your clients full transparency and reduces invoice disputes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does InvoiceFlow help VAs track time and convert to invoices?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. InvoiceFlow includes built-in time tracking that links directly to your invoicing. Start a timer when you begin a task, stop it when you finish, and your tracked hours are automatically converted into invoice line items at the correct client rate. No more manually transferring hours from a spreadsheet or separate time tracker into your invoicing tool — it all happens in one platform.',
      },
    },
  ],
};

const painPoints = [
  {
    problem: 'Tracking hours across 5+ clients with different rates',
    solution: 'Per-client rate tracking with automatic hour-to-invoice conversion.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    problem: 'Chasing late payments while trying to be "professional"',
    solution: 'Automatic follow-up emails — firm but friendly, without the awkwardness.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    problem: 'Switching between time trackers, spreadsheets, and invoicing tools',
    solution: 'One platform: track time, create invoices, get paid.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
  },
  {
    problem: 'Undercharging because you lose track of scope creep',
    solution: 'Clear scope documentation on every invoice line item.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
];

const vaTypes = [
  { name: 'General Virtual Assistant', icon: '💼' },
  { name: 'Executive VA', icon: '👔' },
  { name: 'Social Media VA', icon: '📱' },
  { name: 'Bookkeeping VA', icon: '📊' },
  { name: 'Online Business Manager', icon: '🎯' },
  { name: 'Tech VA', icon: '💻' },
  { name: 'Customer Service VA', icon: '🎧' },
  { name: 'Project Management VA', icon: '📋' },
];

const popularTools = [
  { name: 'Invoice Generator', href: '/tools/invoice-generator', desc: 'Create professional VA invoices instantly' },
  { name: 'Hourly Rate Calculator', href: '/tools/hourly-rate-calculator', desc: 'Find your ideal hourly rate' },
  { name: 'Late Payment Calculator', href: '/tools/late-payment-interest-calculator', desc: 'Interest on overdue invoices' },
  { name: 'GST Calculator', href: '/tools/gst-calculator', desc: 'Calculate GST on your services' },
  { name: 'ABN Lookup', href: '/tools/abn-lookup', desc: 'Verify client and supplier ABNs' },
  { name: 'Milestone Payment Calculator', href: '/tools/milestone-payment-calculator', desc: 'Split project payments into milestones' },
];

export default function ForVirtualAssistantsPage() {
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
        <div className="inline-block rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-sm font-medium text-indigo-400 mb-8">
          Built for Virtual Assistants
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Track hours. Invoice clients.{' '}
          <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
            Scale your VA business.
          </span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-slate-400 mb-10">
          You manage multiple clients remotely, juggle different hourly rates, and somehow find time to send invoices too.
          InvoiceFlow handles the invoicing so you can focus on the work that actually pays.
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

      {/* VA Types */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <p className="text-center text-slate-400 text-sm mb-6">Trusted by virtual assistants across every specialisation</p>
        <div className="flex flex-wrap justify-center gap-3">
          {vaTypes.map((va) => (
            <span
              key={va.name}
              className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-300"
            >
              {va.icon} {va.name}
            </span>
          ))}
        </div>
      </section>

      {/* Pain Points */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">
          VA invoicing shouldn&apos;t be this painful
        </h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          You&apos;re a virtual assistant, not an accountant. You need to track hours, send clean invoices, and get paid without chasing clients.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {painPoints.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 hover:border-indigo-500/20 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-red-500/10 p-3 text-red-400 shrink-0">{item.icon}</div>
                <div>
                  <p className="text-red-300 text-sm font-medium mb-1 line-through decoration-red-500/50">
                    {item.problem}
                  </p>
                  <p className="text-indigo-300 font-semibold">{item.solution}</p>
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
            { number: '45K+', label: 'AU VAs & remote workers', detail: 'And growing every year' },
            { number: '78%', label: 'VAs with 3+ clients', detail: 'Multi-client is the norm' },
            { number: '30s', label: 'To create an invoice', detail: 'From tracked hours to sent' },
            { number: '$0', label: 'To start', detail: 'Free tier, forever' },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
              <p className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
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
          How InvoiceFlow compares for virtual assistants
        </h2>
        <p className="text-center text-slate-400 mb-10 max-w-2xl mx-auto">
          You don&apos;t need enterprise accounting software. You need fast invoicing, time tracking, and multi-client management in one place.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="py-4 px-4 text-slate-400 font-medium">Feature</th>
                <th className="py-4 px-4 text-indigo-400 font-bold">InvoiceFlow</th>
                <th className="py-4 px-4 text-slate-400 font-medium">FreshBooks ($24/mo)</th>
                <th className="py-4 px-4 text-slate-400 font-medium">Wave (Free but limited)</th>
              </tr>
            </thead>
            <tbody className="text-slate-300">
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Free tier</td>
                <td className="py-3 px-4 text-indigo-400 font-semibold">5 invoices/mo forever</td>
                <td className="py-3 px-4 text-slate-500">30-day trial only</td>
                <td className="py-3 px-4 text-emerald-400">Free (basic)</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Monthly price</td>
                <td className="py-3 px-4 text-indigo-400 font-semibold">$19/mo</td>
                <td className="py-3 px-4">$24/mo</td>
                <td className="py-3 px-4">Free</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Built-in time tracking</td>
                <td className="py-3 px-4 text-indigo-400">Yes — auto-converts to invoices</td>
                <td className="py-3 px-4 text-emerald-400">Yes</td>
                <td className="py-3 px-4 text-slate-500">No</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Multi-client management</td>
                <td className="py-3 px-4 text-indigo-400">Per-client rates & profiles</td>
                <td className="py-3 px-4 text-emerald-400">Client profiles</td>
                <td className="py-3 px-4 text-slate-500">Basic only</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Recurring invoices</td>
                <td className="py-3 px-4 text-indigo-400">Unlimited</td>
                <td className="py-3 px-4 text-emerald-400">Yes</td>
                <td className="py-3 px-4 text-emerald-400">Yes</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Setup time</td>
                <td className="py-3 px-4 text-indigo-400">30 seconds</td>
                <td className="py-3 px-4">15-30 minutes</td>
                <td className="py-3 px-4">10-20 minutes</td>
              </tr>
              <tr>
                <td className="py-3 px-4">Annual cost</td>
                <td className="py-3 px-4 text-indigo-400 font-bold">$0 — $228/yr</td>
                <td className="py-3 px-4 text-red-300">$288/yr</td>
                <td className="py-3 px-4">$0 (limited features)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-6 text-center">
          <Link href="/compare" className="text-indigo-400 hover:text-indigo-300 text-sm font-medium">
            See full competitor comparisons &rarr;
          </Link>
        </div>
      </section>

      {/* Popular Tools */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">
          Free tools every VA needs
        </h2>
        <p className="text-center text-slate-400 mb-10">
          No sign-up required. Use them right now, completely free.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {popularTools.map((tool) => (
            <Link
              key={tool.name}
              href={tool.href}
              className="rounded-xl border border-white/5 bg-white/[0.02] p-5 hover:border-indigo-500/20 hover:bg-white/[0.04] transition-all group"
            >
              <h3 className="font-semibold text-white group-hover:text-indigo-400 transition-colors">
                {tool.name}
              </h3>
              <p className="text-sm text-slate-400 mt-1">{tool.desc}</p>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/tools" className="text-indigo-400 hover:text-indigo-300 text-sm font-medium">
            Browse all 100+ free tools &rarr;
          </Link>
        </div>
      </section>

      {/* Guides */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">Guides for virtual assistants</h2>
        <p className="text-center text-slate-400 mb-10">
          Plain-English articles on invoicing, time tracking, and running a VA business in Australia.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { title: 'GST Guide for Australian Freelancers', href: '/blog/gst-guide-australian-freelancers' },
            { title: 'How Much Tax Do Freelancers Pay?', href: '/blog/how-much-tax-freelancers-pay-australia' },
            { title: 'How to Start Freelancing in Australia', href: '/blog/how-to-start-freelancing-australia' },
            { title: 'Late Payment Interest Guide', href: '/blog/late-payment-interest-australia' },
            { title: 'Tax Deductions for Freelancers', href: '/blog/tax-deductions-australian-freelancers' },
            { title: 'BAS Guide for Sole Traders', href: '/blog/bas-guide-australian-freelancers' },
          ].map((article) => (
            <Link
              key={article.href}
              href={article.href}
              className="rounded-xl border border-white/5 bg-white/[0.02] p-5 hover:border-indigo-500/20 hover:bg-white/[0.04] transition-all"
            >
              <p className="font-medium text-white text-sm">{article.title}</p>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/blog" className="text-indigo-400 hover:text-indigo-300 text-sm font-medium">
            Read all 125+ articles &rarr;
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Common questions from virtual assistants
        </h2>
        <div className="space-y-6">
          {faqSchema.mainEntity.map((faq, i) => (
            <details key={i} className="group rounded-xl border border-white/5 bg-white/[0.02] overflow-hidden">
              <summary className="cursor-pointer p-5 font-medium text-white hover:text-indigo-400 transition-colors list-none flex justify-between items-center">
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
          Ready to stop chasing invoices and start scaling?
        </h2>
        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
          Join thousands of Australian virtual assistants who track hours, invoice clients automatically, and never chase a late payment again. Start free today.
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
