import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Invoicing Software for IT Consultants & Tech Professionals in Australia — InvoiceFlow',
  description:
    'Free invoicing tools built for Australian IT consultants and technology professionals. Hourly and project billing, PAYG withholding, retainer management, and multi-project time tracking for cloud consultants, cybersecurity experts, and DevOps engineers.',
  keywords: [
    'invoicing software IT consultants australia',
    'IT contractor invoice template',
    'technology consultant billing',
    'IT freelancer invoicing',
    'IT consultant billing software',
  ],
  alternates: { canonical: '/for/it-consultants' },
  openGraph: {
    title: 'InvoiceFlow for IT Consultants — Deploy Invoices, Not Spreadsheets',
    description:
      'Stop wrestling with complex billing across clients. InvoiceFlow gives IT consultants flexible hourly, project, and retainer invoicing with PAYG withholding — starting free.',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://invoiceflow-teal.vercel.app' },
    { '@type': 'ListItem', position: 2, name: 'For IT Consultants', item: 'https://invoiceflow-teal.vercel.app/for/it-consultants' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do IT consultants need specialised invoicing software?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. IT consultants deal with unique billing challenges that generic invoicing tools don\u2019t handle well. You might bill one client hourly, another on a fixed-price project basis, and a third on a monthly retainer \u2014 all at the same time. If you\u2019re an IT contractor, you may also need to handle PAYG withholding under a voluntary agreement, which requires specific fields on your invoices. InvoiceFlow supports all of these billing models natively, lets you switch between them per client, and includes PAYG withholding fields aligned with ATO requirements. This means you spend less time managing invoices and more time delivering technology solutions.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can InvoiceFlow handle hourly and project-based billing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. InvoiceFlow offers flexible billing that adapts to how IT consultants actually work. You can bill hourly (with automatic time-to-invoice calculation), daily rates for on-site engagements, fixed-price for defined projects, milestone-based for phased deliverables, or monthly retainers for ongoing support contracts. You can switch between billing models per client \u2014 so your cloud migration project can be fixed-price while your ongoing infrastructure support is billed hourly, and your managed services client is on a retainer. Every invoice includes GST, ABN, and professional formatting.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is InvoiceFlow free for IT consultants?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. InvoiceFlow offers a permanent free tier that includes 5 invoices per month, Gmail sync, CSV export, and access to 100+ free tools. This is ideal for IT consultants just starting out or those with a small number of clients. The Pro plan at $19/month unlocks unlimited invoices, recurring billing, and advanced features. Compare that to professional services automation (PSA) tools like ConnectWise at $129/month or even simpler tools like Harvest at $12/month per seat \u2014 InvoiceFlow gives you purpose-built invoicing at a fraction of the cost, without the bloat of project management features you don\u2019t need.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do IT contractors handle PAYG withholding on invoices?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When an IT contractor enters into a voluntary agreement with a client (payer) for PAYG withholding, the payer withholds tax from payments at an agreed rate before paying the contractor. Your invoices need to show the gross amount, the withholding rate and amount, and the net payment due. In some cases, clients may issue Recipient Created Tax Invoices (RCTIs) instead. InvoiceFlow includes built-in PAYG withholding fields where you can set the withholding rate per client, and the system automatically calculates the gross amount, withholding amount, and net payable on every invoice. This keeps you compliant with ATO requirements without manual calculations.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I manage multiple client retainers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Many IT consultants manage multiple retainer clients simultaneously \u2014 for example, providing ongoing infrastructure support to three different businesses on monthly retainers. InvoiceFlow lets you set up retainer tracking per client with a defined hours bank (e.g., 20 hours/month at $150/hr). You can track hours used against the retainer, automatically bill for overage hours at your agreed rate, and generate monthly reconciliation invoices showing hours used, hours remaining, and any additional charges. Recurring invoices are sent automatically on your chosen schedule, so you never miss a billing cycle.',
      },
    },
  ],
};

const painPoints = [
  {
    problem: 'Managing different billing models across clients — hourly, daily, fixed-price, and retainers',
    solution: 'Flexible billing per client — switch between hourly, daily, milestone, and retainer with automatic calculations.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
      </svg>
    ),
  },
  {
    problem: 'PAYG withholding compliance as an IT contractor',
    solution: 'Built-in PAYG withholding fields with ATO-aligned rates and voluntary agreement tracking.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    problem: 'Scope creep without documented change orders or variation billing',
    solution: 'Scope change documentation with variation invoicing — bill for approved extras before they stack up.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    ),
  },
  {
    problem: 'Tracking billable hours across multiple concurrent projects',
    solution: 'Multi-project time tracking with per-client billable hour logs and automated invoice generation.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const consultantTypes = [
  { name: 'Cloud Consultant', icon: '☁️' },
  { name: 'Cybersecurity', icon: '🔒' },
  { name: 'Data Engineer', icon: '📊' },
  { name: 'DevOps', icon: '🚀' },
  { name: 'SAP/ERP Consultant', icon: '🏗️' },
  { name: 'IT Project Manager', icon: '📋' },
  { name: 'Network Engineer', icon: '🌐' },
  { name: 'Solutions Architect', icon: '💡' },
];

const popularTools = [
  { name: 'GST Calculator', href: '/tools/gst-calculator', desc: 'Calculate GST on consulting fees and project charges' },
  { name: 'Invoice Generator', href: '/tools/invoice-generator', desc: 'Create professional IT consulting invoices instantly' },
  { name: 'Rate Calculator', href: '/tools/rate-calculator', desc: 'Calculate your ideal hourly or daily consulting rate' },
  { name: 'Service Package Builder', href: '/tools/service-package-builder', desc: 'Build tiered IT service packages with clear pricing' },
  { name: 'ABN Lookup', href: '/tools/abn-lookup', desc: 'Verify client ABNs before issuing invoices' },
  { name: 'Freelance Benefits Calculator', href: '/tools/freelance-benefits-calculator', desc: 'Compare contracting income vs permanent salary' },
];

export default function ForITConsultantsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Navigation */}
      <nav className="border-b border-white/5 bg-slate-950/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
          <Link href="/" className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
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
        <div className="inline-block rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm font-medium text-emerald-400 mb-8">
          Built for Australian IT Consultants &amp; Tech Professionals
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Deploy solutions.{' '}
          <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
            Get paid faster.
          </span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-slate-400 mb-10">
          Stop wrestling with spreadsheets between client engagements. InvoiceFlow lets IT consultants, contractors, and
          technology professionals invoice for hourly, project, and retainer work — in 30 seconds. GST and PAYG sorted automatically.
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

      {/* Consultant Types */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <p className="text-center text-slate-400 text-sm mb-6">Trusted by IT consultants and tech professionals across every specialisation</p>
        <div className="flex flex-wrap justify-center gap-3">
          {consultantTypes.map((type) => (
            <span
              key={type.name}
              className="rounded-full border border-emerald-500/20 bg-emerald-500/[0.05] px-4 py-2 text-sm text-slate-300"
            >
              <span className="mr-1.5">{type.icon}</span> {type.name}
            </span>
          ))}
        </div>
      </section>

      {/* Pain Points */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">
          IT consulting invoicing shouldn&apos;t be this painful
        </h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          You&apos;re a technology expert, not an accountant. You need to bill clients flexibly, track hours across projects, and get back to solving complex problems.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {painPoints.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 hover:border-emerald-500/20 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-red-500/10 p-3 text-red-400 shrink-0">{item.icon}</div>
                <div>
                  <p className="text-red-300 text-sm font-medium mb-1 line-through decoration-red-500/50">
                    {item.problem}
                  </p>
                  <p className="text-emerald-300 font-semibold">{item.solution}</p>
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
            { number: '120K+', label: 'IT contractors in AU', detail: 'And growing every year' },
            { number: '$50B', label: 'AU IT services industry', detail: 'Massive market opportunity' },
            { number: '30s', label: 'To create an invoice', detail: 'Faster than a deploy pipeline' },
            { number: '$0', label: 'To start', detail: '5 invoices/month free forever' },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
              <p className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
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
          How InvoiceFlow compares for IT consultants
        </h2>
        <p className="text-center text-slate-400 mb-10 max-w-2xl mx-auto">
          You don&apos;t need bloated PSA software. You need flexible invoicing that handles hourly, project, and retainer billing without the enterprise price tag.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="py-4 px-4 text-slate-400 font-medium">Feature</th>
                <th className="py-4 px-4 text-emerald-400 font-bold">InvoiceFlow ($19/mo)</th>
                <th className="py-4 px-4 text-slate-400 font-medium">ConnectWise ($129/mo)</th>
                <th className="py-4 px-4 text-slate-400 font-medium">Harvest ($12/mo)</th>
              </tr>
            </thead>
            <tbody className="text-slate-300">
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Free tier</td>
                <td className="py-3 px-4 text-emerald-400 font-semibold">✓ 5 invoices/mo forever</td>
                <td className="py-3 px-4 text-slate-500">No</td>
                <td className="py-3 px-4 text-slate-500">1 seat free</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Monthly price</td>
                <td className="py-3 px-4 text-emerald-400 font-semibold">$19/mo</td>
                <td className="py-3 px-4">$129/mo</td>
                <td className="py-3 px-4">$12/mo</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Flexible billing models</td>
                <td className="py-3 px-4 text-emerald-400">Hourly, daily, project, retainer</td>
                <td className="py-3 px-4 text-emerald-400">Full PSA suite</td>
                <td className="py-3 px-4 text-slate-500">Time tracking + invoicing</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">PAYG withholding</td>
                <td className="py-3 px-4 text-emerald-400">Built-in ATO fields</td>
                <td className="py-3 px-4 text-slate-500">Manual</td>
                <td className="py-3 px-4 text-slate-500">Not supported</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Resource management</td>
                <td className="py-3 px-4 text-emerald-400">Invoicing focused</td>
                <td className="py-3 px-4 text-emerald-400">Full resource mgmt</td>
                <td className="py-3 px-4 text-slate-500">Basic capacity</td>
              </tr>
              <tr>
                <td className="py-3 px-4">Annual cost</td>
                <td className="py-3 px-4 text-emerald-400 font-bold">$0 — $228/yr</td>
                <td className="py-3 px-4 text-red-300">$1,548/yr</td>
                <td className="py-3 px-4 text-red-300">$144/yr</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-6 text-center">
          <Link href="/compare" className="text-emerald-400 hover:text-emerald-300 text-sm font-medium">
            See full competitor comparisons &rarr;
          </Link>
        </div>
      </section>

      {/* Popular Tools */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">
          Free tools every IT consultant needs
        </h2>
        <p className="text-center text-slate-400 mb-10">
          No sign-up required. Use them right now, completely free.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {popularTools.map((tool) => (
            <Link
              key={tool.name}
              href={tool.href}
              className="rounded-xl border border-white/5 bg-white/[0.02] p-5 hover:border-emerald-500/20 hover:bg-white/[0.04] transition-all group"
            >
              <h3 className="font-semibold text-white group-hover:text-emerald-400 transition-colors">
                {tool.name}
              </h3>
              <p className="text-sm text-slate-400 mt-1">{tool.desc}</p>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/tools" className="text-emerald-400 hover:text-emerald-300 text-sm font-medium">
            Browse all 100+ free tools &rarr;
          </Link>
        </div>
      </section>

      {/* Guides */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">Guides for IT consultants</h2>
        <p className="text-center text-slate-400 mb-10">
          Plain-English articles on invoicing, GST, and running a technology consulting business in Australia.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { title: 'GST Guide for Australian Freelancers', href: '/blog/gst-guide-australian-freelancers' },
            { title: 'How Much Tax Do Freelancers Pay?', href: '/blog/how-much-tax-freelancers-pay-australia' },
            { title: 'BAS Guide for Sole Traders', href: '/blog/bas-guide-australian-freelancers' },
            { title: 'Tax Deductions for Freelancers', href: '/blog/tax-deductions-australian-freelancers' },
            { title: 'Late Payment Interest Guide', href: '/blog/late-payment-interest-australia' },
            { title: 'How to Start Freelancing in Australia', href: '/blog/how-to-start-freelancing-australia' },
          ].map((article) => (
            <Link
              key={article.href}
              href={article.href}
              className="rounded-xl border border-white/5 bg-white/[0.02] p-5 hover:border-emerald-500/20 hover:bg-white/[0.04] transition-all"
            >
              <p className="font-medium text-white text-sm">{article.title}</p>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/blog" className="text-emerald-400 hover:text-emerald-300 text-sm font-medium">
            Read all 125+ articles &rarr;
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Common questions from IT consultants
        </h2>
        <div className="space-y-6">
          {faqSchema.mainEntity.map((faq, i) => (
            <details key={i} className="group rounded-xl border border-white/5 bg-white/[0.02] overflow-hidden">
              <summary className="cursor-pointer p-5 font-medium text-white hover:text-emerald-400 transition-colors list-none flex justify-between items-center">
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
          Ready to professionalise your IT consulting invoices?
        </h2>
        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
          Join thousands of Australian IT consultants who bill clients flexibly, track retainer hours automatically, and never chase a late payer again. Start free today.
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
