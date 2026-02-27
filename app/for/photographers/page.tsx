import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Invoicing Software for Photographers Australia — InvoiceFlow',
  description:
    'Free invoicing software built for Australian photographers. Deposit tracking, milestone payments, usage rights on invoices, and AI-powered invoice management for wedding, portrait, commercial and event photographers.',
  alternates: { canonical: '/for/photographers' },
  openGraph: {
    title: 'InvoiceFlow for Photographers — Shoot. Invoice. Get Paid.',
    description:
      'Stop spending hours on admin after a shoot. InvoiceFlow gives photographers deposit tracking, milestone invoicing, and usage rights management — starting free.',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://invoiceflow-teal.vercel.app' },
    { '@type': 'ListItem', position: 2, name: 'For Photographers', item: 'https://invoiceflow-teal.vercel.app/for/photographers' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why do photographers need invoicing software?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Photographers juggle deposits, retainers, milestone payments, licensing fees, and print orders across multiple clients simultaneously. Generic spreadsheets and handwritten invoices make it easy to lose track of who has paid what, forget to chase outstanding balances, and mismanage usage rights. Dedicated invoicing software like InvoiceFlow automates payment reminders, tracks deposits against final balances, and lets you clearly state licensing terms on every invoice — so you get paid properly and protect your creative work.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can InvoiceFlow handle wedding photography deposits and milestone payments?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. InvoiceFlow supports milestone-based invoicing with built-in deposit tracking, which is ideal for wedding photographers. You can set up a booking deposit (typically 20-50% of the package), a second payment before the wedding day, and a final payment on gallery delivery. Each milestone is tracked automatically, and payment reminders are sent on your schedule so you never have to awkwardly chase a bride or groom for money.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is InvoiceFlow free for photographers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'InvoiceFlow offers a free forever tier with 5 invoices per month, Gmail sync, CSV export, and access to 100+ free business tools including an invoice generator, GST calculator, and ABN lookup. Most photographers starting out or doing a few shoots per month can operate entirely on the free plan. When your business grows, paid plans start at $19/month for unlimited invoices — significantly cheaper than HoneyBook or FreshBooks.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do photographers handle usage rights on invoices?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'InvoiceFlow lets you add detailed line items that clearly state usage terms and licensing agreements. For example, you can specify "Commercial usage rights — 12 months, digital only" or "Personal use licence — prints and social media" directly on the invoice. This creates a clear paper trail that protects both you and your client, and ensures licensing fees are properly documented for your records.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does InvoiceFlow support different pricing for prints vs digital?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. InvoiceFlow supports flexible line items so you can create separate entries for digital galleries, individual print orders, canvas prints, albums, and any other product or service you offer. You can save common items as templates so creating invoices for repeat product types takes seconds, not minutes. This is especially useful for portrait and family photographers who sell a mix of digital files and physical prints.',
      },
    },
  ],
};

const painPoints = [
  {
    problem: 'Chasing clients for final payment after delivering photos',
    solution: 'Automatic payment reminders sent on your schedule — before and after delivery.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    problem: 'Juggling deposits, retainers, and final payments across weddings',
    solution: 'Milestone invoicing with deposit tracking built in — every payment accounted for.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
      </svg>
    ),
  },
  {
    problem: 'Losing track of usage rights and licensing fees',
    solution: 'Invoice line items that clearly state usage terms and licensing — documented every time.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    problem: 'Paying $30+/month for software designed for accountants',
    solution: 'InvoiceFlow starts free. Built for creative professionals, not bookkeepers.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
];

const photographyTypes = [
  { name: 'Wedding Photography', icon: '💒' },
  { name: 'Portrait Studio', icon: '📸' },
  { name: 'Commercial Photography', icon: '🏢' },
  { name: 'Real Estate Photography', icon: '🏠' },
  { name: 'Event Photography', icon: '🎉' },
  { name: 'Product Photography', icon: '📦' },
  { name: 'Family Photography', icon: '👨‍👩‍👧‍👦' },
  { name: 'Fashion Photography', icon: '👗' },
];

const popularTools = [
  { name: 'Invoice Generator', href: '/tools/invoice-generator', desc: 'Create professional photography invoices instantly' },
  { name: 'GST Calculator', href: '/tools/gst-calculator', desc: 'Calculate GST on packages and print orders' },
  { name: 'Quote Generator', href: '/tools/invoice-generator', desc: 'Send professional quotes for shoots' },
  { name: 'Milestone Payment Calculator', href: '/tools/milestone-payment-calculator', desc: 'Split wedding packages into deposits and milestones' },
  { name: 'Late Payment Calculator', href: '/tools/late-payment-interest-calculator', desc: 'Calculate interest on overdue client invoices' },
  { name: 'ABN Lookup', href: '/tools/abn-lookup', desc: 'Verify client and vendor ABNs' },
];

export default function ForPhotographersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Navigation */}
      <nav className="border-b border-white/5 bg-slate-950/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
          <Link href="/" className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-sky-400 bg-clip-text text-transparent">
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
        <div className="inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-sm font-medium text-cyan-400 mb-8">
          Built for Australian Photographers
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Shoot. Invoice.{' '}
          <span className="bg-gradient-to-r from-cyan-400 to-sky-400 bg-clip-text text-transparent">
            Get paid.
          </span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-slate-400 mb-10">
          You spend hours behind the lens and days editing — you shouldn&apos;t spend more time on paperwork.
          InvoiceFlow handles deposits, milestone payments, and licensing invoices so you can focus on your craft.
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

      {/* Photography Types */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <p className="text-center text-slate-400 text-sm mb-6">Trusted by photographers across every specialty</p>
        <div className="flex flex-wrap justify-center gap-3">
          {photographyTypes.map((type) => (
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
          Photography invoicing shouldn&apos;t be this painful
        </h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          You&apos;re a photographer, not an accountant. You need to send invoices quickly, track deposits, and protect your licensing — not wrestle with spreadsheets.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {painPoints.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 hover:border-cyan-500/20 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-red-500/10 p-3 text-red-400 shrink-0">{item.icon}</div>
                <div>
                  <p className="text-red-300 text-sm font-medium mb-1 line-through decoration-red-500/50">
                    {item.problem}
                  </p>
                  <p className="text-cyan-300 font-semibold">{item.solution}</p>
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
            { number: '25K+', label: 'AU photographers', detail: 'And growing every year' },
            { number: '$3.5K', label: 'Avg wedding package', detail: 'Track every milestone payment' },
            { number: '30s', label: 'To create an invoice', detail: 'From your phone, between shoots' },
            { number: '$0', label: 'To start', detail: 'Free tier, forever' },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
              <p className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-sky-400 bg-clip-text text-transparent">
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
          How InvoiceFlow compares for photographers
        </h2>
        <p className="text-center text-slate-400 mb-10 max-w-2xl mx-auto">
          You don&apos;t need a full CRM or project management suite. You need fast invoices, deposit tracking, and licensing documentation that just works.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="py-4 px-4 text-slate-400 font-medium">Feature</th>
                <th className="py-4 px-4 text-cyan-400 font-bold">InvoiceFlow</th>
                <th className="py-4 px-4 text-slate-400 font-medium">HoneyBook ($19/mo)</th>
                <th className="py-4 px-4 text-slate-400 font-medium">FreshBooks ($24/mo)</th>
              </tr>
            </thead>
            <tbody className="text-slate-300">
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Free tier</td>
                <td className="py-3 px-4 text-cyan-400 font-semibold">5 invoices/mo forever</td>
                <td className="py-3 px-4 text-slate-500">7-day trial only</td>
                <td className="py-3 px-4 text-slate-500">30-day trial only</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Monthly price</td>
                <td className="py-3 px-4 text-cyan-400 font-semibold">$19/mo</td>
                <td className="py-3 px-4">$19/mo</td>
                <td className="py-3 px-4">$24/mo</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Deposit tracking</td>
                <td className="py-3 px-4 text-cyan-400">Built-in milestones</td>
                <td className="py-3 px-4 text-emerald-400">Yes</td>
                <td className="py-3 px-4 text-slate-500">Manual workaround</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Client gallery integration</td>
                <td className="py-3 px-4 text-cyan-400">Link in invoice</td>
                <td className="py-3 px-4 text-slate-500">No</td>
                <td className="py-3 px-4 text-slate-500">No</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Usage rights on invoices</td>
                <td className="py-3 px-4 text-cyan-400">Line item detail</td>
                <td className="py-3 px-4 text-slate-500">Contract only</td>
                <td className="py-3 px-4 text-slate-500">No</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Setup time</td>
                <td className="py-3 px-4 text-cyan-400">30 seconds</td>
                <td className="py-3 px-4">15-30 minutes</td>
                <td className="py-3 px-4">15-30 minutes</td>
              </tr>
              <tr>
                <td className="py-3 px-4">Annual cost</td>
                <td className="py-3 px-4 text-cyan-400 font-bold">$0 — $228/yr</td>
                <td className="py-3 px-4 text-red-300">$228/yr</td>
                <td className="py-3 px-4 text-red-300">$288/yr</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-6 text-center">
          <Link href="/compare" className="text-cyan-400 hover:text-cyan-300 text-sm font-medium">
            See full competitor comparisons &rarr;
          </Link>
        </div>
      </section>

      {/* Popular Tools */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">
          Free tools every photographer needs
        </h2>
        <p className="text-center text-slate-400 mb-10">
          No sign-up required. Use them right now, completely free.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {popularTools.map((tool) => (
            <Link
              key={tool.name}
              href={tool.href}
              className="rounded-xl border border-white/5 bg-white/[0.02] p-5 hover:border-cyan-500/20 hover:bg-white/[0.04] transition-all group"
            >
              <h3 className="font-semibold text-white group-hover:text-cyan-400 transition-colors">
                {tool.name}
              </h3>
              <p className="text-sm text-slate-400 mt-1">{tool.desc}</p>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/tools" className="text-cyan-400 hover:text-cyan-300 text-sm font-medium">
            Browse all 100+ free tools &rarr;
          </Link>
        </div>
      </section>

      {/* Guides */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">Guides for photographers</h2>
        <p className="text-center text-slate-400 mb-10">
          Plain-English articles on invoicing, GST, and running a photography business in Australia.
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
              className="rounded-xl border border-white/5 bg-white/[0.02] p-5 hover:border-cyan-500/20 hover:bg-white/[0.04] transition-all"
            >
              <p className="font-medium text-white text-sm">{article.title}</p>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/blog" className="text-cyan-400 hover:text-cyan-300 text-sm font-medium">
            Read all 125+ articles &rarr;
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Common questions from photographers
        </h2>
        <div className="space-y-6">
          {faqSchema.mainEntity.map((faq, i) => (
            <details key={i} className="group rounded-xl border border-white/5 bg-white/[0.02] overflow-hidden">
              <summary className="cursor-pointer p-5 font-medium text-white hover:text-cyan-400 transition-colors list-none flex justify-between items-center">
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
          Ready to stop chasing payments?
        </h2>
        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
          Join thousands of Australian photographers who invoice between shoots, track deposits automatically, and never chase a late-paying client again. Start free today.
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
