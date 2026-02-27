import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Invoicing Software for Accountants & Bookkeepers in Australia — InvoiceFlow',
  description:
    'Free invoicing tools built for Australian accountants and bookkeepers. Hourly billing, recurring retainers, client management, and branded invoices for tax accountants, BAS agents, bookkeepers and more.',
  alternates: { canonical: '/for/accountants' },
  keywords: [
    'invoicing software accountants australia',
    'accounting practice invoicing',
    'bookkeeper invoice template australia',
  ],
  openGraph: {
    title: 'InvoiceFlow for Accountants — Bill Your Clients, Run Your Practice',
    description:
      'Stop spending billable hours on admin. InvoiceFlow gives accountants and bookkeepers automated billing, time tracking, and recurring retainer invoicing — starting free.',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://invoiceflow-teal.vercel.app' },
    { '@type': 'ListItem', position: 2, name: 'For Accountants', item: 'https://invoiceflow-teal.vercel.app/for/accountants' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do accountants need separate invoicing software?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Many accountants use expensive practice management suites like Xero Practice Manager or MYOB Practice that bundle invoicing with features they don\'t need — and charge $65-$99/month for it. If you already have your own accounting workflow and just need a fast, professional way to bill clients, InvoiceFlow handles invoicing at a fraction of the cost. You get branded invoices, automated payment reminders, time tracking, and GST-ready reports without paying for a full practice management platform.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can InvoiceFlow handle hourly billing for accounting work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. InvoiceFlow includes built-in time tracking so you can log billable hours against each client, set your hourly rate (or different rates per service type), and automatically calculate the total when you generate the invoice. Whether you\'re billing $150/hour for tax return preparation or $80/hour for bookkeeping, InvoiceFlow tracks every minute and converts it into a professional, itemised invoice ready to send.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is InvoiceFlow free for accountants?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'InvoiceFlow offers a free forever tier with 5 invoices per month, Gmail sync, CSV export, and access to 100+ free business tools including a GST calculator, invoice generator, and ABN lookup. Many sole-practitioner accountants and bookkeepers just starting out can run on the free tier. Paid plans start at $19/month for unlimited invoices, recurring billing, time tracking, and full client management features.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I set up recurring invoices for bookkeeping retainers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. InvoiceFlow lets you create recurring invoices that are automatically sent to your clients on a schedule you choose — weekly, fortnightly, monthly, or custom. This is perfect for bookkeepers with monthly retainer clients, accountants billing quarterly BAS preparation fees, or any ongoing advisory engagement. Set it once and InvoiceFlow handles the rest, including automatic payment reminders if an invoice goes overdue.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does InvoiceFlow help accountants with BAS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'InvoiceFlow automatically adds 10% GST to every invoice, tracks your collected and paid GST amounts, and generates BAS-ready reports at the end of each quarter. For accountants and BAS agents, this means your own practice invoicing is always audit-ready. You can export quarterly GST summaries, track your annual turnover, and ensure every invoice you send to clients includes the correct GST treatment — no manual calculations required.',
      },
    },
  ],
};

const painPoints = [
  {
    problem: 'Tracking billable hours across multiple clients manually',
    solution: 'Built-in time tracking per client — log hours, set rates, and auto-generate itemised invoices.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    problem: 'Chasing payments from clients who only call at tax time',
    solution: 'Automatic payment reminders and overdue notifications — get paid without the awkward follow-ups.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
  {
    problem: 'Spending time on admin instead of advisory services',
    solution: 'One-click invoicing and recurring billing — create, send, and track invoices in 30 seconds flat.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
      </svg>
    ),
  },
  {
    problem: 'Managing recurring monthly bookkeeping retainers manually',
    solution: 'Automated retainer billing on any schedule — weekly, fortnightly, or monthly. Set once, get paid on time.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
      </svg>
    ),
  },
];

const accountantTypes = [
  { name: 'Tax Accountant', icon: '🧾' },
  { name: 'Bookkeeper', icon: '📒' },
  { name: 'BAS Agent', icon: '📋' },
  { name: 'Financial Planner', icon: '📈' },
  { name: 'Auditor', icon: '🔍' },
  { name: 'Management Accountant', icon: '📊' },
  { name: 'Forensic Accountant', icon: '🕵️' },
  { name: 'Tax Agent', icon: '🏛️' },
];

const popularTools = [
  { name: 'GST Calculator', href: '/tools/gst-calculator', desc: 'Calculate GST on accounting fees and client invoices' },
  { name: 'Invoice Generator', href: '/tools/invoice-generator', desc: 'Create professional accounting invoices instantly' },
  { name: 'Rate Calculator', href: '/tools/hourly-rate-calculator', desc: 'Calculate your ideal hourly or fixed-fee rate' },
  { name: 'BAS Preparation Checklist', href: '/tools/bas-preparation-checklist', desc: 'Step-by-step checklist for quarterly BAS lodgement' },
  { name: 'Tax Deduction Finder', href: '/tools/tax-deduction-finder', desc: 'Find every deduction for your accounting practice' },
  { name: 'ABN Lookup', href: '/tools/abn-lookup', desc: 'Verify client and supplier ABNs instantly' },
];

export default function ForAccountantsPage() {
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
        <div className="inline-block rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-1.5 text-sm font-medium text-sky-400 mb-8">
          Built for Australian Accountants &amp; Bookkeepers
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Bill your clients.{' '}
          <span className="bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent">
            Run your practice.
          </span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-slate-400 mb-10">
          Stop spending billable hours on admin. InvoiceFlow lets accounting practices, bookkeeping firms, and tax agents
          invoice clients for hourly work, retainers, and advisory services — in 30 seconds. GST and BAS sorted automatically.
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

      {/* Accountant Types */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <p className="text-center text-slate-400 text-sm mb-6">Trusted by accounting professionals across every specialty</p>
        <div className="flex flex-wrap justify-center gap-3">
          {accountantTypes.map((type) => (
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
          Practice invoicing shouldn&apos;t eat into billable hours
        </h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          You&apos;re an accountant, not an invoicing clerk. You need to bill clients quickly, track hours accurately, and get back to advisory work that grows your practice.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {painPoints.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 hover:border-sky-500/20 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-red-500/10 p-3 text-red-400 shrink-0">{item.icon}</div>
                <div>
                  <p className="text-red-300 text-sm font-medium mb-1 line-through decoration-red-500/50">
                    {item.problem}
                  </p>
                  <p className="text-sky-300 font-semibold">{item.solution}</p>
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
            { number: '45K+', label: 'Accountants in Australia', detail: 'Registered practitioners' },
            { number: '$65B', label: 'Australian accounting industry', detail: 'And growing every year' },
            { number: '30s', label: 'To create an invoice', detail: 'Between client meetings' },
            { number: '$0', label: 'To start', detail: 'Free tier, forever' },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
              <p className="text-3xl font-bold bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent">
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
          How InvoiceFlow compares for accountants
        </h2>
        <p className="text-center text-slate-400 mb-10 max-w-2xl mx-auto">
          You don&apos;t need a full practice management suite just to bill your clients. You need fast invoicing, time tracking that works, and recurring billing for retainers.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="py-4 px-4 text-slate-400 font-medium">Feature</th>
                <th className="py-4 px-4 text-sky-400 font-bold">InvoiceFlow</th>
                <th className="py-4 px-4 text-slate-400 font-medium">Xero Practice Manager ($65/mo)</th>
                <th className="py-4 px-4 text-slate-400 font-medium">MYOB Practice ($99/mo)</th>
              </tr>
            </thead>
            <tbody className="text-slate-300">
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Free tier</td>
                <td className="py-3 px-4 text-sky-400 font-semibold">5 invoices/mo forever</td>
                <td className="py-3 px-4 text-slate-500">No free tier</td>
                <td className="py-3 px-4 text-slate-500">No free tier</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Monthly price</td>
                <td className="py-3 px-4 text-sky-400 font-semibold">$19/mo</td>
                <td className="py-3 px-4">$65/mo</td>
                <td className="py-3 px-4">$99/mo</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Time tracking</td>
                <td className="py-3 px-4 text-sky-400">Built-in</td>
                <td className="py-3 px-4 text-sky-400">Built-in</td>
                <td className="py-3 px-4 text-sky-400">Built-in</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Client management</td>
                <td className="py-3 px-4 text-sky-400">Built-in</td>
                <td className="py-3 px-4 text-sky-400">Built-in</td>
                <td className="py-3 px-4 text-sky-400">Built-in</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Practice management</td>
                <td className="py-3 px-4 text-slate-500">Invoicing focused</td>
                <td className="py-3 px-4 text-sky-400">Full suite</td>
                <td className="py-3 px-4 text-sky-400">Full suite</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Recurring billing</td>
                <td className="py-3 px-4 text-sky-400">One-click setup</td>
                <td className="py-3 px-4 text-sky-400">Supported</td>
                <td className="py-3 px-4 text-sky-400">Supported</td>
              </tr>
              <tr>
                <td className="py-3 px-4">Annual cost</td>
                <td className="py-3 px-4 text-sky-400 font-bold">$0 — $228/yr</td>
                <td className="py-3 px-4 text-red-300">$780/yr</td>
                <td className="py-3 px-4 text-red-300">$1,188/yr</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-6 text-center">
          <Link href="/compare" className="text-sky-400 hover:text-sky-300 text-sm font-medium">
            See full competitor comparisons &rarr;
          </Link>
        </div>
      </section>

      {/* Popular Tools */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">
          Free tools every accountant needs
        </h2>
        <p className="text-center text-slate-400 mb-10">
          No sign-up required. Use them right now, completely free.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {popularTools.map((tool) => (
            <Link
              key={tool.name}
              href={tool.href}
              className="rounded-xl border border-white/5 bg-white/[0.02] p-5 hover:border-sky-500/20 hover:bg-white/[0.04] transition-all group"
            >
              <h3 className="font-semibold text-white group-hover:text-sky-400 transition-colors">
                {tool.name}
              </h3>
              <p className="text-sm text-slate-400 mt-1">{tool.desc}</p>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/tools" className="text-sky-400 hover:text-sky-300 text-sm font-medium">
            Browse all 100+ free tools &rarr;
          </Link>
        </div>
      </section>

      {/* Guides */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">Guides for accountants</h2>
        <p className="text-center text-slate-400 mb-10">
          Plain-English articles on invoicing, GST, BAS, and running an accounting practice in Australia.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { title: 'GST Guide for Australian Freelancers', href: '/blog/gst-guide-australian-freelancers' },
            { title: 'How Much Tax Do Freelancers Pay?', href: '/blog/how-much-tax-freelancers-pay-australia' },
            { title: 'BAS Guide for Sole Traders', href: '/blog/bas-guide-australian-freelancers' },
            { title: 'Tax Deductions for Freelancers', href: '/blog/tax-deductions-australian-freelancers' },
            { title: 'Superannuation Guide for the Self-Employed', href: '/blog/superannuation-guide-self-employed-australia' },
            { title: 'How to Start Freelancing in Australia', href: '/blog/how-to-start-freelancing-australia' },
          ].map((article) => (
            <Link
              key={article.href}
              href={article.href}
              className="rounded-xl border border-white/5 bg-white/[0.02] p-5 hover:border-sky-500/20 hover:bg-white/[0.04] transition-all"
            >
              <p className="font-medium text-white text-sm">{article.title}</p>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/blog" className="text-sky-400 hover:text-sky-300 text-sm font-medium">
            Read all 125+ articles &rarr;
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Common questions from accountants
        </h2>
        <div className="space-y-6">
          {faqSchema.mainEntity.map((faq, i) => (
            <details key={i} className="group rounded-xl border border-white/5 bg-white/[0.02] overflow-hidden">
              <summary className="cursor-pointer p-5 font-medium text-white hover:text-sky-400 transition-colors list-none flex justify-between items-center">
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
          Ready to professionalise your practice invoicing?
        </h2>
        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
          Join thousands of Australian accountants and bookkeepers who bill clients automatically, track billable hours, and never chase a late payer again. Start free today.
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
