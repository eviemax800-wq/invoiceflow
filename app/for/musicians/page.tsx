import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Invoicing Software for Musicians & Performers in Australia — InvoiceFlow',
  description:
    'Free invoicing tools built for Australian musicians and performing artists. Gig invoicing, multi-income tracking, session fee billing, and royalty management for freelance musicians, DJs, vocalists and more.',
  alternates: { canonical: '/for/musicians' },
  keywords: [
    'invoicing software musicians australia',
    'musician invoice template',
    'performer billing software',
    'gig invoicing freelance musician',
  ],
  openGraph: {
    title: 'InvoiceFlow for Musicians — Play Your Best. Get Paid on Time.',
    description:
      'Stop chasing gig payments with awkward texts. InvoiceFlow gives musicians professional invoicing, multi-income tracking, and GST compliance — starting free.',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://invoiceflow-teal.vercel.app' },
    { '@type': 'ListItem', position: 2, name: 'For Musicians', item: 'https://invoiceflow-teal.vercel.app/for/musicians' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do musicians need invoicing software?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Musicians regularly deal with gig payments, royalties, session fees, and venue payments — many of which are cash or informal arrangements. Without proper invoicing, it becomes incredibly difficult to maintain accurate tax records, prove your income for loans or rentals, or track what you\u2019re actually owed. Dedicated invoicing software like InvoiceFlow lets you create professional invoices for every gig, session, and royalty payment so you have a complete paper trail at tax time.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can InvoiceFlow handle different types of music income?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Musicians typically earn from multiple sources — live gigs, studio sessions, private teaching, licensing deals, and royalty payments. InvoiceFlow lets you tag every invoice by income type so you can see exactly how much you\u2019re earning from each revenue stream. This makes tax reporting significantly easier and helps you understand which parts of your music career are most profitable. You can filter reports by income type, client, or date range to get a clear picture of your finances.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is InvoiceFlow free for musicians?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'InvoiceFlow offers a free forever tier with 5 invoices per month, Gmail sync, CSV export, and access to 100+ free business tools including an invoice generator, rate calculator, and GST calculator. Many gigging musicians can run on the free tier. Paid plans start at $19/month for unlimited invoices, multi-income tracking, and full client management. That\u2019s significantly cheaper than music business management tools like Vampr Pro or generic accounting platforms that charge $30-50/month for features musicians don\u2019t need.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I invoice for a gig as a musician in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'To invoice for a gig in Australia, you need an ABN (Australian Business Number) if you\u2019re earning over $75 in a single transaction as a sole trader. If your total annual income exceeds $75,000, you must also register for GST and include it on your invoices. A proper gig invoice should include your ABN, the venue or client\u2019s details, date of performance, description of services (e.g. "Live performance — 3-hour set"), your fee, GST if applicable, and your payment terms. InvoiceFlow pre-fills all of this so you can create a compliant gig invoice in 30 seconds.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I track music equipment as business expenses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. As a professional musician in Australia, you can claim tax deductions for instrument purchases, repairs and maintenance, travel to gigs and rehearsals, gear hire, studio hire, sheet music, software subscriptions, and insurance for your equipment. InvoiceFlow helps you track these expenses alongside your income so you have a complete financial picture at tax time. You can categorise expenses by type and export reports for your accountant, making it easy to maximise your deductions and reduce your tax bill.',
      },
    },
  ],
};

const painPoints = [
  {
    problem: 'Getting paid properly for gigs when venues pay cash or delay payments',
    solution: 'Professional gig invoicing with payment terms, automatic reminders, and payment tracking.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
  {
    problem: 'Tracking diverse income streams from gigs, sessions, teaching, and royalties',
    solution: 'Multi-source income tracking — tag every invoice by type for clean tax reporting.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
      </svg>
    ),
  },
  {
    problem: 'Not having an ABN or understanding GST obligations as a performing artist',
    solution: 'Built-in ABN and GST guidance with Australian tax compliance for sole trader musicians.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    problem: 'Spending creative time on admin instead of making music',
    solution: 'Create and send invoices in 30 seconds between rehearsals — more time creating, less time chasing payments.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const musicianTypes = [
  { name: 'Session Musician', icon: '\uD83C\uDFB8' },
  { name: 'Singer/Vocalist', icon: '\uD83C\uDFA4' },
  { name: 'DJ/Producer', icon: '\uD83C\uDFA7' },
  { name: 'Music Teacher', icon: '\uD83C\uDFB5' },
  { name: 'Composer/Songwriter', icon: '\u270D\uFE0F' },
  { name: 'Sound Engineer', icon: '\uD83D\uDD0A' },
  { name: 'Orchestra/Classical', icon: '\uD83C\uDFBB' },
  { name: 'Band (Collective)', icon: '\uD83E\uDD41' },
];

const popularTools = [
  { name: 'GST Calculator', href: '/tools/gst-calculator', desc: 'Calculate GST on gig fees and music income instantly' },
  { name: 'Invoice Generator', href: '/tools/invoice-generator', desc: 'Create professional gig invoices in seconds' },
  { name: 'Rate Calculator', href: '/tools/hourly-rate-calculator', desc: 'Calculate your ideal rate per gig or session' },
  { name: 'Tax Deduction Finder', href: '/tools/tax-deduction-finder', desc: 'Find every deduction for music equipment and travel' },
  { name: 'ABN Lookup', href: '/tools/abn-lookup', desc: 'Verify ABNs for venues, agents, and clients' },
  { name: 'Income Proof Generator', href: '/tools/income-proof-generator', desc: 'Generate income proof for rentals and loans' },
];

export default function ForMusiciansPage() {
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
        <div className="inline-block rounded-full border border-rose-500/30 bg-rose-500/10 px-4 py-1.5 text-sm font-medium text-rose-400 mb-8">
          Built for Australian Musicians &amp; Performers
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Play your best.{' '}
          <span className="bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">
            Get paid on time.
          </span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-slate-400 mb-10">
          Stop chasing gig payments with awkward texts. InvoiceFlow streamlines invoicing for live gigs, studio sessions,
          teaching, and royalties — in 30 seconds. GST, ABN, and multi-income tracking sorted automatically for Australian musicians.
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

      {/* Musician Types */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <p className="text-center text-slate-400 text-sm mb-6">Trusted by music professionals across every genre and specialty</p>
        <div className="flex flex-wrap justify-center gap-3">
          {musicianTypes.map((type) => (
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
          Music invoicing shouldn&apos;t be harder than the gig itself
        </h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          You&apos;re a musician, not a bookkeeper. You need to invoice gigs quickly, track multiple income streams accurately, and get back to the creative work that matters.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {painPoints.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 hover:border-rose-500/20 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-red-500/10 p-3 text-red-400 shrink-0">{item.icon}</div>
                <div>
                  <p className="text-red-300 text-sm font-medium mb-1 line-through decoration-red-500/50">
                    {item.problem}
                  </p>
                  <p className="text-rose-300 font-semibold">{item.solution}</p>
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
            { number: '50K+', label: 'Professional musicians in AU', detail: 'Freelance & performing' },
            { number: '$7B', label: 'AU music industry', detail: 'Live, recorded & publishing' },
            { number: '30s', label: 'To create an invoice', detail: 'Between rehearsals' },
            { number: '$0', label: 'To start', detail: 'Free tier, forever' },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
              <p className="text-3xl font-bold bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">
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
          How InvoiceFlow compares for musicians
        </h2>
        <p className="text-center text-slate-400 mb-10 max-w-2xl mx-auto">
          You don&apos;t need expensive music business software just to send an invoice after a gig. You need fast, professional invoicing with multi-income tracking that actually works.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="py-4 px-4 text-slate-400 font-medium">Feature</th>
                <th className="py-4 px-4 text-rose-400 font-bold">InvoiceFlow ($19/mo)</th>
                <th className="py-4 px-4 text-slate-400 font-medium">Wave (Free)</th>
                <th className="py-4 px-4 text-slate-400 font-medium">FreshBooks ($24/mo)</th>
              </tr>
            </thead>
            <tbody className="text-slate-300">
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Free tier</td>
                <td className="py-3 px-4 text-rose-400 font-semibold">5 invoices/mo forever</td>
                <td className="py-3 px-4 text-rose-400">Free (ad-supported)</td>
                <td className="py-3 px-4 text-slate-500">No free tier</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Monthly price</td>
                <td className="py-3 px-4 text-rose-400 font-semibold">$19/mo</td>
                <td className="py-3 px-4">Free</td>
                <td className="py-3 px-4">$24/mo</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Multi-income tracking</td>
                <td className="py-3 px-4 text-rose-400">Tag by income type</td>
                <td className="py-3 px-4 text-slate-500">Manual categories</td>
                <td className="py-3 px-4 text-slate-500">Basic categories</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Gig invoicing</td>
                <td className="py-3 px-4 text-rose-400">Built-in</td>
                <td className="py-3 px-4 text-rose-400">Supported</td>
                <td className="py-3 px-4 text-rose-400">Supported</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Equipment tracking</td>
                <td className="py-3 px-4 text-rose-400">Invoicing focused</td>
                <td className="py-3 px-4 text-slate-500">Basic expense tracking</td>
                <td className="py-3 px-4 text-rose-400">Full expense tracking</td>
              </tr>
              <tr>
                <td className="py-3 px-4">Annual cost</td>
                <td className="py-3 px-4 text-rose-400 font-bold">$0 — $228/yr</td>
                <td className="py-3 px-4 text-green-300">$0</td>
                <td className="py-3 px-4 text-red-300">$288/yr</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-6 text-center">
          <Link href="/compare" className="text-rose-400 hover:text-rose-300 text-sm font-medium">
            See full competitor comparisons &rarr;
          </Link>
        </div>
      </section>

      {/* Popular Tools */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">
          Free tools every musician needs
        </h2>
        <p className="text-center text-slate-400 mb-10">
          No sign-up required. Use them right now, completely free.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {popularTools.map((tool) => (
            <Link
              key={tool.name}
              href={tool.href}
              className="rounded-xl border border-white/5 bg-white/[0.02] p-5 hover:border-rose-500/20 hover:bg-white/[0.04] transition-all group"
            >
              <h3 className="font-semibold text-white group-hover:text-rose-400 transition-colors">
                {tool.name}
              </h3>
              <p className="text-sm text-slate-400 mt-1">{tool.desc}</p>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/tools" className="text-rose-400 hover:text-rose-300 text-sm font-medium">
            Browse all 100+ free tools &rarr;
          </Link>
        </div>
      </section>

      {/* Guides */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">Guides for musicians</h2>
        <p className="text-center text-slate-400 mb-10">
          Plain-English articles on invoicing, GST, tax deductions, and running a music career in Australia.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { title: 'GST Guide for Australian Freelancers', href: '/blog/gst-guide-australian-freelancers' },
            { title: 'Tax Deductions for Freelancers', href: '/blog/tax-deductions-australian-freelancers' },
            { title: 'How to Start Freelancing in Australia', href: '/blog/how-to-start-freelancing-australia' },
            { title: 'Invoice Payment Terms Guide', href: '/blog/invoice-payment-terms-guide' },
            { title: 'Pricing Guide for Freelancers', href: '/blog/pricing-guide-freelancers-australia' },
            { title: 'Client Communication Templates', href: '/blog/how-to-raise-rates-freelancer' },
          ].map((article) => (
            <Link
              key={article.href}
              href={article.href}
              className="rounded-xl border border-white/5 bg-white/[0.02] p-5 hover:border-rose-500/20 hover:bg-white/[0.04] transition-all"
            >
              <p className="font-medium text-white text-sm">{article.title}</p>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/blog" className="text-rose-400 hover:text-rose-300 text-sm font-medium">
            Read all 125+ articles &rarr;
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Common questions from musicians
        </h2>
        <div className="space-y-6">
          {faqSchema.mainEntity.map((faq, i) => (
            <details key={i} className="group rounded-xl border border-white/5 bg-white/[0.02] overflow-hidden">
              <summary className="cursor-pointer p-5 font-medium text-white hover:text-rose-400 transition-colors list-none flex justify-between items-center">
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
          Ready to get paid properly for your music?
        </h2>
        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
          Join thousands of Australian musicians who invoice gigs professionally, track every income stream, and never chase a late payment again. Start free today.
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
