import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Invoicing Software Hobart — Invoice App for Hobart Freelancers & Small Business | InvoiceFlow',
  description:
    'Simple invoicing software for Hobart freelancers, sole traders and small businesses. GST-compliant invoices, BAS-ready exports, and 100+ free tools. Built for Tasmanian businesses — from Salamanca to Battery Point. Starts free.',
  alternates: { canonical: '/in/hobart' },
  openGraph: {
    title: 'InvoiceFlow Hobart — Invoicing Built for Tasmanian Freelancers',
    description:
      'Hobart freelancers and sole traders: stop overpaying for Xero. InvoiceFlow handles invoicing, GST, and BAS exports — starting free. Built for the Apple Isle.',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://invoiceflow-teal.vercel.app' },
    { '@type': 'ListItem', position: 2, name: 'Hobart', item: 'https://invoiceflow-teal.vercel.app/in/hobart' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What invoicing software do Hobart freelancers use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hobart freelancers are switching from Xero ($35/mo) and MYOB ($36/mo) to InvoiceFlow. It offers GST-compliant invoicing, BAS-ready exports, and 100+ free business tools starting from $0/month. Tasmania\'s thriving creative and tourism sectors need fast, affordable invoicing — not bloated accounting suites.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does InvoiceFlow handle GST for Tasmanian businesses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. InvoiceFlow automatically calculates 10% GST on every invoice, tracks your $75,000 registration threshold, and generates BAS-ready reports. Whether you\'re a MONA tour guide, a Salamanca Market stallholder, or a web developer in Battery Point, GST compliance is handled automatically.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is InvoiceFlow suitable for seasonal tourism businesses in Tasmania?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Perfectly suited. Many Tasmanian freelancers work seasonally around Dark Mofo, the Taste of Tasmania, and summer tourism. InvoiceFlow\'s free tier means you only pay when business justifies it. No wasting money on software subscriptions during quiet months.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is InvoiceFlow free for Hobart sole traders?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'InvoiceFlow offers a free forever tier with 5 invoices per month, Gmail sync, CSV export, and access to 100+ free business tools. The Pro plan is $19/month — less than half the cost of Xero. That\'s money better spent at Farm Gate Market.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does InvoiceFlow compare to Xero for Hobart businesses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Xero costs $35/month ($420/year) and includes full accounting features most freelancers never use. InvoiceFlow starts free and the Pro plan is $19/month ($228/year) — saving $192/year. For Hobart\'s growing creative sector, artisan food producers, and tourism operators who just need professional invoicing, InvoiceFlow is the smarter choice.',
      },
    },
  ],
};

const painPoints = [
  {
    problem: 'Paying $35+/month for accounting features you never touch',
    solution: 'InvoiceFlow starts free. Pro is $19/mo — half the cost of Xero. Tasmania\'s tight margins need lean tools.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
  {
    problem: 'Seasonal tourism income makes fixed software costs painful',
    solution: 'Free tier for quiet months. Upgrade only when business picks up. Pay for what you use.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
  },
  {
    problem: 'Chasing late payments from mainland clients and agencies',
    solution: 'Automated payment reminders with professional templates. Get paid faster without the discomfort.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    problem: 'Approaching the $75K GST threshold and not sure what to do',
    solution: 'Free GST threshold tracker shows exactly where you stand. No surprises at BAS time.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
      </svg>
    ),
  },
];

const popularTools = [
  { name: 'GST Calculator', href: '/tools/gst-calculator', desc: 'Calculate GST instantly' },
  { name: 'Invoice Generator', href: '/tools/invoice-generator', desc: 'Create tax invoices' },
  { name: 'ABN Lookup', href: '/tools/abn-lookup', desc: 'Verify ABNs for GST' },
  { name: 'Rate Calculator', href: '/tools/rate-calculator', desc: 'Set your hourly rate' },
  { name: 'Tax Estimator', href: '/tools/tax-estimator', desc: 'Estimate your tax bill' },
  { name: 'BAS Preparation', href: '/tools/bas-preparation', desc: 'Quarterly BAS prep' },
];

export default function InHobartPage() {
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
        <div className="inline-block rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-sm font-medium text-teal-400 mb-8">
          Built for Hobart Businesses
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Invoicing software{' '}
          <span className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
            Hobart freelancers
          </span>{' '}
          actually love
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-slate-400 mb-10">
          From Salamanca to Battery Point, Tasmania&apos;s freelancers and small businesses deserve invoicing
          that&apos;s as creative as the island itself. GST-compliant, BAS-ready, and built for the Apple Isle.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/signup">
            <Button size="lg">Start Free — No Credit Card</Button>
          </Link>
          <Link href="/tools/gst-calculator">
            <Button variant="secondary" size="lg">Try the GST Calculator</Button>
          </Link>
        </div>
        <p className="mt-4 text-sm text-slate-500">
          Free tier: 5 invoices/month, Gmail sync, CSV export, 100+ free tools
        </p>
      </section>

      {/* Industry Badges */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="flex flex-wrap justify-center gap-3">
          {['Tourism & Hospitality', 'Arts & Culture', 'Food & Wine', 'Photography', 'Trades & Construction', 'Agriculture', 'Marine & Fishing', 'Creative Services'].map((industry) => (
            <span key={industry} className="rounded-full border border-teal-500/20 bg-teal-500/5 px-4 py-1.5 text-sm text-teal-300">
              {industry}
            </span>
          ))}
        </div>
      </section>

      {/* Pain Points */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">
          Tasmanian invoicing shouldn&apos;t cost more than a Salamanca coffee
        </h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          Tasmania&apos;s creative economy is booming. Your invoicing tool should support seasonal work, not penalise it with monthly subscriptions.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {painPoints.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 hover:border-teal-500/20 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-teal-500/10 p-3 text-teal-400 shrink-0">{item.icon}</div>
                <div>
                  <p className="text-red-300 text-sm font-medium mb-1 line-through decoration-red-500/50">
                    {item.problem}
                  </p>
                  <p className="text-teal-300 font-semibold">{item.solution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Key Numbers */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { stat: '35K+', label: 'TAS sole traders' },
            { stat: '$75K', label: 'GST threshold' },
            { stat: '$19/mo', label: 'Pro plan' },
            { stat: '100+', label: 'Free tools' },
          ].map((item) => (
            <div key={item.label} className="text-center rounded-2xl border border-white/5 bg-white/[0.02] p-6">
              <p className="text-3xl font-bold bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
                {item.stat}
              </p>
              <p className="text-sm text-slate-400 mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">
          How InvoiceFlow compares for Hobart businesses
        </h2>
        <p className="text-center text-slate-400 mb-10 max-w-2xl mx-auto">
          You don&apos;t need a full accounting suite to invoice clients after a market day or a Dark Mofo commission.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="py-4 px-4 text-slate-400 font-medium">Feature</th>
                <th className="py-4 px-4 text-teal-400 font-bold">InvoiceFlow</th>
                <th className="py-4 px-4 text-slate-400 font-medium">Xero ($35/mo)</th>
                <th className="py-4 px-4 text-slate-400 font-medium">MYOB ($36/mo)</th>
              </tr>
            </thead>
            <tbody className="text-slate-300">
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Free tier</td>
                <td className="py-3 px-4 text-teal-400 font-semibold">5 invoices/mo forever</td>
                <td className="py-3 px-4 text-slate-500">30-day trial only</td>
                <td className="py-3 px-4 text-slate-500">30-day trial only</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Pro price</td>
                <td className="py-3 px-4 text-teal-400 font-semibold">$19/mo</td>
                <td className="py-3 px-4">$35/mo</td>
                <td className="py-3 px-4">$36/mo</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">GST calculation</td>
                <td className="py-3 px-4 text-teal-400">Automatic</td>
                <td className="py-3 px-4 text-teal-400">Automatic</td>
                <td className="py-3 px-4 text-teal-400">Automatic</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">AI invoice extraction</td>
                <td className="py-3 px-4 text-teal-400">Included</td>
                <td className="py-3 px-4 text-slate-500">Hubdoc add-on</td>
                <td className="py-3 px-4 text-slate-500">Not included</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Setup time</td>
                <td className="py-3 px-4 text-teal-400">30 seconds</td>
                <td className="py-3 px-4">30-60 minutes</td>
                <td className="py-3 px-4">30-60 minutes</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Free business tools</td>
                <td className="py-3 px-4 text-teal-400 font-semibold">100+ tools</td>
                <td className="py-3 px-4 text-slate-500">None</td>
                <td className="py-3 px-4 text-slate-500">None</td>
              </tr>
              <tr>
                <td className="py-3 px-4">Annual cost</td>
                <td className="py-3 px-4 text-teal-400 font-bold">$0 — $228/yr</td>
                <td className="py-3 px-4 text-red-300">$420/yr</td>
                <td className="py-3 px-4 text-red-300">$432/yr</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-6 text-center">
          <Link href="/compare" className="text-teal-400 hover:text-teal-300 text-sm font-medium">
            See full competitor comparisons &rarr;
          </Link>
        </div>
      </section>

      {/* Persona Pages */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">InvoiceFlow for your industry</h2>
        <p className="text-center text-slate-400 mb-10">
          Purpose-built invoicing guides for every type of Tasmanian business.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { title: 'For Creatives', href: '/for/creatives', desc: 'Artists, designers, and makers' },
            { title: 'For Photographers', href: '/for/photographers', desc: 'Landscape, wedding, and portrait' },
            { title: 'For Tradies', href: '/for/tradies', desc: 'Builders, plumbers, electricians' },
            { title: 'For Sole Traders', href: '/for/sole-traders', desc: 'ABN holders and solo operators' },
            { title: 'For Freelancers', href: '/for/freelancers', desc: 'Digital and creative freelancers' },
            { title: 'For Coaches', href: '/for/coaches', desc: 'Life, wellness, and fitness coaches' },
          ].map((persona) => (
            <Link
              key={persona.href}
              href={persona.href}
              className="rounded-xl border border-white/5 bg-white/[0.02] p-5 hover:border-teal-500/20 hover:bg-white/[0.04] transition-all group"
            >
              <h3 className="font-semibold text-white group-hover:text-teal-400 transition-colors">
                {persona.title}
              </h3>
              <p className="text-sm text-slate-400 mt-1">{persona.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Popular Tools */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">
          Free tools for Hobart businesses
        </h2>
        <p className="text-center text-slate-400 mb-10">
          No sign-up required. Use them right now, completely free.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {popularTools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="rounded-xl border border-white/5 bg-white/[0.02] p-5 hover:border-teal-500/20 hover:bg-white/[0.04] transition-all group"
            >
              <h3 className="font-semibold text-white group-hover:text-teal-400 transition-colors">
                {tool.name}
              </h3>
              <p className="text-sm text-slate-400 mt-1">{tool.desc}</p>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/tools" className="text-teal-400 hover:text-teal-300 text-sm font-medium">
            Browse all 100+ free tools &rarr;
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Common questions from Hobart businesses
        </h2>
        <div className="space-y-6">
          {faqSchema.mainEntity.map((faq, i) => (
            <details key={i} className="group rounded-xl border border-white/5 bg-white/[0.02] overflow-hidden">
              <summary className="cursor-pointer p-5 font-medium text-white hover:text-teal-400 transition-colors list-none flex justify-between items-center">
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
          Join Hobart freelancers who invoice smarter
        </h2>
        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
          Whether you&apos;re in Battery Point, Sandy Bay, North Hobart, or Launceston — InvoiceFlow helps you
          get paid faster and keep more of what you earn. Start free, upgrade when you&apos;re ready.
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
