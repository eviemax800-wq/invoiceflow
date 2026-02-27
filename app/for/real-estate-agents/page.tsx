import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Invoicing Software for Real Estate Agents in Australia — InvoiceFlow',
  description:
    'Free invoicing tools built for Australian real estate agents and property managers. Commission tracking, settlement invoicing, vendor-paid advertising reimbursements, and branded invoices for residential agents, commercial agents, property managers and more.',
  alternates: { canonical: '/for/real-estate-agents' },
  keywords: [
    'invoicing software real estate agents australia',
    'real estate commission invoice template',
    'property manager invoicing',
  ],
  openGraph: {
    title: 'InvoiceFlow for Real Estate Agents — Invoice Commissions, Track VPA, Get Paid Faster',
    description:
      'Stop losing track of commissions and VPA reimbursements. InvoiceFlow gives real estate agents and property managers automated commission invoicing, settlement tracking, and GST-ready reports — starting free.',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://invoiceflow-teal.vercel.app' },
    { '@type': 'ListItem', position: 2, name: 'For Real Estate Agents', item: 'https://invoiceflow-teal.vercel.app/for/real-estate-agents' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do real estate agents need invoicing software?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Real estate agents deal with complex invoicing requirements — tracking commissions on variable sale prices, billing for vendor-paid advertising (VPA), managing property management fees across dozens of tenants, and issuing invoices for settlement disbursements. Many agents still use spreadsheets or rely on their agency\'s outdated systems. InvoiceFlow gives you a fast, professional way to create commission invoices, track VPA reimbursements, and manage recurring property management billing — all with automatic GST calculations and BAS-ready reports.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can InvoiceFlow handle commission-based invoicing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. InvoiceFlow supports percentage-based calculations so you can invoice commissions based on sale price. Whether you\'re billing a standard 2% commission on a $800,000 residential sale, splitting commissions with a conjunctional agent, or calculating tiered commission structures, InvoiceFlow handles the maths automatically. You can also set up split commission invoices where multiple agents share the fee, and each agent gets their own professional invoice to send to the vendor.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is InvoiceFlow free for real estate agents?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'InvoiceFlow offers a free forever tier with 5 invoices per month, Gmail sync, CSV export, and access to 100+ free business tools including a GST calculator, invoice generator, and ABN lookup. Many new agents or sole operators can run on the free tier while they build their portfolio. Paid plans start at $19/month for unlimited invoices, commission tracking, recurring billing for property management fees, and full client management features.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I invoice for vendor-paid advertising (VPA)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. InvoiceFlow lets you create separate VPA invoices for each listing, itemising advertising costs like REA listings, Domain features, photography, styling, print advertising, and signage. You can track which vendors have paid their VPA and which are outstanding, making it easy to reconcile advertising spend across multiple active listings. This is especially useful for agents managing 10+ listings simultaneously who need to keep VPA reimbursements organised and on time.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does InvoiceFlow help real estate agents with GST?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'InvoiceFlow automatically adds 10% GST to every commission invoice, tracks your collected and paid GST amounts, and generates BAS-ready reports at the end of each quarter. For real estate agents, this means your commission invoices, VPA reimbursement invoices, and property management fee invoices all include correct GST treatment automatically. You can export quarterly GST summaries, track your annual turnover against the $75,000 GST threshold, and ensure every invoice is ATO-compliant — no manual calculations required.',
      },
    },
  ],
};

const painPoints = [
  {
    problem: 'Calculating commission splits and GST on variable sale prices manually',
    solution: 'Percentage-based commission invoicing — enter the sale price, set your rate, and InvoiceFlow calculates the fee plus GST automatically.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008H15.75v-.008zm0 2.25h.008v.008H15.75V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
      </svg>
    ),
  },
  {
    problem: 'Chasing vendor-paid advertising reimbursements across multiple listings',
    solution: 'Itemised VPA invoices per listing with payment tracking — see at a glance which vendors have paid and which are outstanding.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
  {
    problem: 'Managing property management fees across dozens of rental properties',
    solution: 'Recurring invoices for every managed property — set the fee schedule once and InvoiceFlow bills tenants and landlords automatically.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
      </svg>
    ),
  },
  {
    problem: 'Losing track of which settlements have been invoiced and paid',
    solution: 'Real-time invoice status dashboard — see paid, pending, and overdue invoices at a glance with automatic payment reminders.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
  },
];

const agentTypes = [
  { name: 'Residential Sales Agent', icon: '\u{1F3E0}' },
  { name: 'Commercial Agent', icon: '\u{1F3E2}' },
  { name: 'Property Manager', icon: '\u{1F511}' },
  { name: 'Buyer\'s Agent', icon: '\u{1F50D}' },
  { name: 'Auctioneer', icon: '\u{1F528}' },
  { name: 'Leasing Consultant', icon: '\u{1F4CB}' },
  { name: 'Development Sales', icon: '\u{1F3D7}\u{FE0F}' },
  { name: 'Rural & Regional Agent', icon: '\u{1F33E}' },
];

const popularTools = [
  { name: 'GST Calculator', href: '/tools/gst-calculator', desc: 'Calculate GST on commissions and fees' },
  { name: 'Invoice Generator', href: '/tools/invoice-generator', desc: 'Create professional real estate invoices' },
  { name: 'Rate Calculator', href: '/tools/hourly-rate-calculator', desc: 'Calculate your ideal commission structures' },
  { name: 'Profit Margin Calculator', href: '/tools/profit-margin-calculator', desc: 'Track profitability per listing' },
  { name: 'Payment Receipt Generator', href: '/tools/payment-receipt-generator', desc: 'Issue receipts for deposits and settlements' },
  { name: 'ABN Lookup', href: '/tools/abn-lookup', desc: 'Verify agent and agency ABNs' },
];

export default function ForRealEstateAgentsPage() {
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
          Built for Australian Real Estate Professionals
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Invoice commissions. Track VPA.{' '}
          <span className="bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
            Get paid faster.
          </span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-slate-400 mb-10">
          Streamline commission invoicing, vendor-paid advertising reimbursements, and property management billing for
          Australian real estate agents. GST calculated automatically. BAS-ready reports in one click.
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

      {/* Agent Types */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <p className="text-center text-slate-400 text-sm mb-6">Trusted by real estate professionals across every specialty</p>
        <div className="flex flex-wrap justify-center gap-3">
          {agentTypes.map((type) => (
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
          Commission invoicing shouldn&apos;t slow down your sales
        </h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          You&apos;re a real estate agent, not an accounts clerk. You need to invoice commissions quickly, track VPA reimbursements, and get back to listing and selling properties.
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
            { number: '85K+', label: 'Real estate agents in Australia', detail: 'Licensed professionals' },
            { number: '$9.2B', label: 'AU real estate services industry', detail: 'Commission-based' },
            { number: '30s', label: 'To create an invoice', detail: 'Between inspections' },
            { number: '$0', label: 'To start', detail: 'Free tier, forever' },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
              <p className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
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
          How InvoiceFlow compares for real estate agents
        </h2>
        <p className="text-center text-slate-400 mb-10 max-w-2xl mx-auto">
          You don&apos;t need a full property management platform just to invoice commissions and track VPA. You need fast invoicing, commission calculations, and recurring billing for managed properties.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="py-4 px-4 text-slate-400 font-medium">Feature</th>
                <th className="py-4 px-4 text-amber-400 font-bold">InvoiceFlow ($19/mo)</th>
                <th className="py-4 px-4 text-slate-400 font-medium">Console Cloud ($99/mo)</th>
                <th className="py-4 px-4 text-slate-400 font-medium">PropertyMe ($75/mo)</th>
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
                <td className="py-3 px-4">$99/mo</td>
                <td className="py-3 px-4">$75/mo</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Commission tracking</td>
                <td className="py-3 px-4 text-amber-400">Built-in</td>
                <td className="py-3 px-4 text-amber-400">Built-in</td>
                <td className="py-3 px-4 text-amber-400">Built-in</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Property management billing</td>
                <td className="py-3 px-4 text-amber-400">Built-in</td>
                <td className="py-3 px-4 text-amber-400">Built-in</td>
                <td className="py-3 px-4 text-amber-400">Built-in</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Recurring invoices</td>
                <td className="py-3 px-4 text-amber-400">One-click setup</td>
                <td className="py-3 px-4 text-amber-400">Supported</td>
                <td className="py-3 px-4 text-amber-400">Supported</td>
              </tr>
              <tr>
                <td className="py-3 px-4">Annual cost</td>
                <td className="py-3 px-4 text-amber-400 font-bold">$0 — $228/yr</td>
                <td className="py-3 px-4 text-red-300">$1,188/yr</td>
                <td className="py-3 px-4 text-red-300">$900/yr</td>
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
          Free tools every real estate agent needs
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
        <h2 className="text-3xl font-bold text-center mb-4">Guides for real estate agents</h2>
        <p className="text-center text-slate-400 mb-10">
          Plain-English articles on invoicing, GST, commissions, and running a real estate business in Australia.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { title: 'GST Guide for Australian Freelancers', href: '/blog/gst-guide-australian-freelancers' },
            { title: 'How Much Tax Do Freelancers Pay?', href: '/blog/how-much-tax-freelancers-pay-australia' },
            { title: 'Invoice Payment Terms Guide', href: '/blog/invoice-payment-terms-guide' },
            { title: 'Late Payment Interest Calculator', href: '/blog/late-payment-interest-calculator' },
            { title: 'How to Start Freelancing in Australia', href: '/blog/how-to-start-freelancing-australia' },
            { title: 'Tax Deductions for Freelancers', href: '/blog/tax-deductions-australian-freelancers' },
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
          Common questions from real estate agents
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
          Ready to streamline your real estate invoicing?
        </h2>
        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
          Join thousands of Australian real estate agents and property managers who invoice commissions automatically, track VPA reimbursements, and never chase a late payer again. Start free today.
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
