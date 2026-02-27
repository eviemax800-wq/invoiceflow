import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Invoicing Software for Architects & Design Professionals in Australia — InvoiceFlow',
  description:
    'Free invoicing tools built for Australian architects and design professionals. Stage-based billing, percentage completion tracking, variation claims, and disbursement management for architecture firms and sole practitioners.',
  alternates: { canonical: '/for/architects' },
  keywords: [
    'invoicing software architects australia',
    'architecture firm billing',
    'architect invoice template',
    'design professional invoicing',
  ],
  openGraph: {
    title: 'InvoiceFlow for Architects — Design Buildings, Not Invoices',
    description:
      'Stop spending billable hours on admin. InvoiceFlow gives architects stage-based billing, variation tracking, and disbursement management — starting free.',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://invoiceflow-teal.vercel.app' },
    { '@type': 'ListItem', position: 2, name: 'For Architects', item: 'https://invoiceflow-teal.vercel.app/for/architects' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do architects need specialised invoicing software?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Architecture projects involve staged billing, percentage-of-completion invoicing, variation claims, and reimbursable expenses — none of which generic invoicing tools handle well. Architects need to bill across project stages (schematic design, design development, documentation, contract administration), track scope changes, and recover disbursements like printing and council fees. InvoiceFlow is built to handle all of these billing patterns in one system, so you can invoice accurately without juggling spreadsheets or retrofitting accounting software.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can InvoiceFlow handle percentage-of-completion billing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. InvoiceFlow supports stage-based fee invoicing aligned with standard architecture fee structures — schematic design (15%), design development (20%), documentation (40%), and contract administration (25%). You can set up your project fee, define stage percentages, and invoice each stage as it completes. The system tracks what\'s been billed, what\'s outstanding, and what\'s remaining — giving you and your client full visibility across the life of the project.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is InvoiceFlow free for architects?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'InvoiceFlow offers a free forever tier with 5 invoices per month, Gmail sync, CSV export, and access to 100+ free business tools including a GST calculator, invoice generator, and ABN lookup. Many sole-practitioner architects just starting their practice can run on the free tier. Paid plans start at $19/month for unlimited invoices, stage billing, variation tracking, and multi-project management — compared to ArchiOffice at $149/month or Xero at $35/month.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does InvoiceFlow handle variation claims?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Architecture projects rarely stay within the original scope. InvoiceFlow lets you track variations as they arise — additional service fees, scope changes, and extra work requests — with documented records attached to each project. You can generate variation invoices that reference the original scope, show the additional work performed, and calculate adjusted fees automatically. This creates a clear audit trail for both you and your client, reducing disputes and ensuring you get paid for every hour of additional work.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I invoice for reimbursable expenses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. InvoiceFlow supports disbursement tracking for all the reimbursable expenses architects typically incur — printing and plotting costs, council and planning fees, consultant fees (structural, hydraulic, electrical), travel expenses, and model-making costs. You can log disbursements against specific projects, add markup if your contract allows it, and include them on your stage invoices or bill them separately. Clients get transparent reporting showing exactly what was spent and why.',
      },
    },
  ],
};

const painPoints = [
  {
    problem: 'Staged billing across long-running projects spanning months or years',
    solution: 'Stage-based invoicing with percentage completion tracking and milestone billing',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
      </svg>
    ),
  },
  {
    problem: 'Managing variation claims when scope inevitably changes mid-project',
    solution: 'Variation tracking with automatic fee adjustment and documented scope changes',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    problem: 'Tracking reimbursable expenses like printing, council fees, and consultant costs',
    solution: 'Disbursement tracking with automatic cost recovery and transparent client reporting',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
  {
    problem: 'Juggling multiple projects at different stages with different billing schedules',
    solution: 'Multi-project dashboard with per-project billing status, stage tracking, and automated reminders',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122" />
      </svg>
    ),
  },
];

const professionalTypes = [
  { name: 'Residential Architect', icon: '\u{1F3E0}' },
  { name: 'Commercial Architect', icon: '\u{1F3E2}' },
  { name: 'Landscape Architect', icon: '\u{1F333}' },
  { name: 'Interior Designer', icon: '\u{1F3A8}' },
  { name: 'Urban Planner', icon: '\u{1F5FA}\u{FE0F}' },
  { name: 'Heritage Architect', icon: '\u{1F3DB}\u{FE0F}' },
  { name: 'Sustainable Design', icon: '\u{1F331}' },
  { name: 'Project Manager', icon: '\u{1F4CB}' },
];

const popularTools = [
  { name: 'GST Calculator', href: '/tools/gst-calculator', desc: 'Calculate GST on architecture fees and disbursements' },
  { name: 'Invoice Generator', href: '/tools/invoice-generator', desc: 'Create professional architecture practice invoices' },
  { name: 'Rate Calculator', href: '/tools/hourly-rate-calculator', desc: 'Calculate your ideal hourly or project rate' },
  { name: 'Project Timeline Calculator', href: '/tools/project-timeline-calculator', desc: 'Estimate project stages and billing milestones' },
  { name: 'ABN Lookup', href: '/tools/abn-lookup', desc: 'Verify architecture practice and contractor ABNs' },
  { name: 'Project Brief Generator', href: '/tools/project-brief-generator', desc: 'Create structured project briefs for new commissions' },
];

export default function ForArchitectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Navigation */}
      <nav className="border-b border-white/5 bg-slate-950/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
          <Link href="/" className="text-xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
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
          Built for Australian Architects &amp; Design Professionals
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Design buildings.{' '}
          <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
            Not invoices.
          </span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-slate-400 mb-10">
          Stop spending billable hours on admin. InvoiceFlow streamlines stage-based billing, variation claims, and disbursement
          tracking for Australian architects and design professionals — in 30 seconds between site visits.
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

      {/* Professional Types */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <p className="text-center text-slate-400 text-sm mb-6">Trusted by architecture and design professionals across every discipline</p>
        <div className="flex flex-wrap justify-center gap-3">
          {professionalTypes.map((type) => (
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
          Project billing shouldn&apos;t eat into design time
        </h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          You&apos;re an architect, not a billing clerk. You need to invoice staged fees, track variations, and recover disbursements quickly so you can get back to the design work that matters.
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
            { number: '13K+', label: 'Registered architects in AU', detail: 'Licensed practitioners' },
            { number: '$15B', label: 'AU architecture services', detail: 'Design + documentation + admin' },
            { number: '30s', label: 'To create an invoice', detail: 'Between site visits' },
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
          How InvoiceFlow compares for architects
        </h2>
        <p className="text-center text-slate-400 mb-10 max-w-2xl mx-auto">
          You don&apos;t need a full practice management suite just to bill your clients. You need fast invoicing, stage billing, and variation tracking.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="py-4 px-4 text-slate-400 font-medium">Feature</th>
                <th className="py-4 px-4 text-amber-400 font-bold">InvoiceFlow</th>
                <th className="py-4 px-4 text-slate-400 font-medium">ArchiOffice ($149/mo)</th>
                <th className="py-4 px-4 text-slate-400 font-medium">Xero ($35/mo)</th>
              </tr>
            </thead>
            <tbody className="text-slate-300">
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Free tier</td>
                <td className="py-3 px-4 text-amber-400 font-semibold">5 invoices/mo forever</td>
                <td className="py-3 px-4 text-slate-500">No free tier</td>
                <td className="py-3 px-4 text-slate-500">No free tier</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Monthly price</td>
                <td className="py-3 px-4 text-amber-400 font-semibold">$19/mo</td>
                <td className="py-3 px-4">$149/mo</td>
                <td className="py-3 px-4">$35/mo</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Stage billing</td>
                <td className="py-3 px-4 text-amber-400">Percentage completion</td>
                <td className="py-3 px-4 text-amber-400">Supported</td>
                <td className="py-3 px-4 text-slate-500">Manual only</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Variation tracking</td>
                <td className="py-3 px-4 text-amber-400">Built-in tracking</td>
                <td className="py-3 px-4 text-amber-400">Supported</td>
                <td className="py-3 px-4 text-slate-500">Not supported</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Project management</td>
                <td className="py-3 px-4 text-slate-500">Invoicing focused</td>
                <td className="py-3 px-4 text-amber-400">Full suite</td>
                <td className="py-3 px-4 text-slate-500">Not supported</td>
              </tr>
              <tr>
                <td className="py-3 px-4">Annual cost</td>
                <td className="py-3 px-4 text-amber-400 font-bold">$0 — $228/yr</td>
                <td className="py-3 px-4 text-red-300">$1,788/yr</td>
                <td className="py-3 px-4 text-red-300">$420/yr</td>
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
          Free tools every architect needs
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
        <h2 className="text-3xl font-bold text-center mb-4">Guides for architects and design professionals</h2>
        <p className="text-center text-slate-400 mb-10">
          Plain-English articles on invoicing, GST, stage billing, and running an architecture practice in Australia.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { title: 'GST Guide for Australian Freelancers', href: '/blog/gst-guide-australian-freelancers' },
            { title: 'How Much Tax Do Freelancers Pay?', href: '/blog/how-much-tax-freelancers-pay-australia' },
            { title: 'Tax Deductions for Freelancers', href: '/blog/tax-deductions-australian-freelancers' },
            { title: 'Superannuation Guide for the Self-Employed', href: '/blog/superannuation-guide-self-employed-australia' },
            { title: 'How to Start Freelancing in Australia', href: '/blog/how-to-start-freelancing-australia' },
            { title: 'BAS Guide for Sole Traders', href: '/blog/bas-guide-australian-freelancers' },
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
          Common questions from architects
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
          Ready to simplify your practice billing?
        </h2>
        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
          Join thousands of Australian architects who invoice staged fees, track variations, and recover disbursements in seconds. Start free today.
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
