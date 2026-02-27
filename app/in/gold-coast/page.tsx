import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Invoicing Software Gold Coast — InvoiceFlow for Small Business',
  description:
    'Free invoicing software for Gold Coast freelancers, sole traders, and small businesses. GST calculator, AI invoice extraction, 100+ free tools. Built for tourism, hospitality, construction, and more.',
  alternates: { canonical: '/in/gold-coast' },
  openGraph: {
    title: 'InvoiceFlow Gold Coast — Invoicing for the Coast&apos;s Best Businesses',
    description:
      'AI-powered invoicing built for Gold Coast small businesses. Handle seasonal peaks, tourism clients, and construction projects with automatic GST, payment reminders, and BAS-ready exports.',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://invoiceflow-teal.vercel.app' },
    { '@type': 'ListItem', position: 2, name: 'Gold Coast', item: 'https://invoiceflow-teal.vercel.app/in/gold-coast' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do Gold Coast tourism businesses handle seasonal invoicing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Gold Coast tourism businesses face huge seasonal swings — school holidays and summer bring 3-4x normal revenue. InvoiceFlow helps you batch-invoice during peak periods, set up recurring invoices for regular clients, and track cashflow across quiet and busy seasons. BAS-ready exports mean your quarterly lodgements stay clean even when you\'re processing hundreds of invoices in December-January.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best invoicing app for Gold Coast small businesses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'InvoiceFlow is purpose-built for Australian small businesses. Unlike Xero ($35/mo) or MYOB ($36/mo), InvoiceFlow focuses on what sole traders and small businesses actually need: professional invoicing, automatic GST, payment tracking, and BAS-ready exports. It starts free with 5 invoices per month — perfect for Gold Coast freelancers testing the waters or running a seasonal side hustle.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do Gold Coast sole traders need to charge GST on invoices?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You must register for GST once your annual turnover reaches $75,000 (or $150,000 for non-profit). Many Gold Coast sole traders in tourism and hospitality hit this threshold during peak season without realising. InvoiceFlow tracks your cumulative income and alerts you as you approach $75K so you can register on time and avoid ATO penalties.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do Gold Coast construction businesses manage progress claims?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Gold Coast construction boom means builders, subbies, and trades are juggling multiple projects with milestone-based payments. InvoiceFlow supports progress claim invoicing — set up stages with percentages or fixed amounts, track what\'s been invoiced vs outstanding per project, and maintain a clear audit trail. Critical for QBCC compliance and dispute resolution.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can InvoiceFlow handle multiple Gold Coast business locations or ABNs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Many Gold Coast operators run multiple ventures — a surf school and a cafe, or a property maintenance business and a cleaning company. InvoiceFlow Premium ($39/mo) supports multi-business management with separate ABNs, branding, and reporting under one login. Each business gets its own invoice numbering, client list, and BAS data.',
      },
    },
  ],
};

const industries = [
  { name: 'Tourism & Events', icon: '🏖️' },
  { name: 'Hospitality & Dining', icon: '🍽️' },
  { name: 'Property & Construction', icon: '🏗️' },
  { name: 'Health & Wellness', icon: '💪' },
  { name: 'Marine & Water Sports', icon: '🚤' },
  { name: 'Film & Creative', icon: '🎬' },
  { name: 'Tech & Startups', icon: '💻' },
  { name: 'Fitness & Personal Training', icon: '🏃' },
];

const painPoints = [
  {
    problem: 'Seasonal cashflow chaos — feast in summer, famine in winter',
    solution: 'Track income trends across seasons. Know your quiet months in advance and plan ahead with cashflow forecasting.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
  {
    problem: 'Peak season overwhelm — 100 invoices in January, no time to chase payments',
    solution: 'Batch-create invoices in seconds. Automatic payment reminders chase late payers so you can focus on customers.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    problem: 'Tourism clients who vanish after their holiday ends',
    solution: 'Send invoices instantly on-site. Collect payment before clients leave the Coast — no more chasing interstate tourists.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    problem: 'Paying $35+/month for accounting software when you only need invoicing',
    solution: 'InvoiceFlow starts free. Pro is $19/month — save $200+/year vs Xero or MYOB.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
];

const personaLinks = [
  { name: 'Freelancers', href: '/for/freelancers', desc: 'Designers, developers, writers, photographers' },
  { name: 'Sole Traders', href: '/for/sole-traders', desc: 'One-person businesses across every industry' },
  { name: 'Tradies', href: '/for/tradies', desc: 'Plumbers, sparkies, builders, painters' },
  { name: 'Consultants', href: '/for/consultants', desc: 'Management, IT, marketing, HR consultants' },
  { name: 'Contractors', href: '/for/contractors', desc: 'Independent contractors and subcontractors' },
  { name: 'Creatives', href: '/for/creatives', desc: 'Artists, musicians, filmmakers, content creators' },
];

const popularTools = [
  { name: 'Invoice Generator', href: '/tools/invoice-generator', desc: 'Create professional invoices instantly' },
  { name: 'GST Calculator', href: '/tools/gst-calculator', desc: 'Calculate GST on any amount' },
  { name: 'Rate Calculator', href: '/tools/rate-calculator', desc: 'Price your services right' },
  { name: 'ABN Lookup', href: '/tools/abn-lookup', desc: 'Verify any Australian ABN' },
  { name: 'Tax Estimator', href: '/tools/tax-estimator', desc: 'Estimate your tax bill' },
  { name: 'Late Payment Calculator', href: '/tools/late-payment-calculator', desc: 'Calculate interest on overdue invoices' },
];

export default function InGoldCoastPage() {
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
          Invoicing Software for Gold Coast Businesses
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Gold Coast invoicing,{' '}
          <span className="bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent">
            built for the hustle
          </span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-slate-400 mb-10">
          From Surfers Paradise surf schools to Robina construction sites — InvoiceFlow handles seasonal peaks,
          tourism clients, and everything in between. Automatic GST, instant invoices, and BAS-ready exports.
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

      {/* Industry Badges */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <p className="text-center text-slate-400 text-sm mb-6">Trusted by Gold Coast businesses across every industry</p>
        <div className="flex flex-wrap justify-center gap-3">
          {industries.map((industry) => (
            <span
              key={industry.name}
              className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-300"
            >
              {industry.icon} {industry.name}
            </span>
          ))}
        </div>
      </section>

      {/* Pain Points */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">
          Gold Coast business invoicing shouldn&apos;t be this hard
        </h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          You&apos;re running a business in one of Australia&apos;s fastest-growing cities. You need invoicing that keeps up with seasonal demand, not software designed for a desk job.
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
            { number: '45K+', label: 'Gold Coast sole traders', detail: 'One of QLD\u2019s biggest freelancer hubs' },
            { number: '$75K', label: 'GST threshold', detail: 'We alert you before you hit it' },
            { number: '$19/mo', label: 'Pro plan', detail: 'Save $200+/yr vs Xero or MYOB' },
            { number: '100+', label: 'Free tools', detail: 'No sign-up, no strings attached' },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
              <p className="text-3xl font-bold bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent">
                {stat.number}
              </p>
              <p className="text-white font-medium mt-2">{stat.label}</p>
              <p className="text-slate-500 text-sm mt-1">{stat.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">
          How InvoiceFlow compares for Gold Coast businesses
        </h2>
        <p className="text-center text-slate-400 mb-10 max-w-2xl mx-auto">
          You don&apos;t need full accounting software to send professional invoices. Stop overpaying for features you&apos;ll never use.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="py-4 px-4 text-slate-400 font-medium">Feature</th>
                <th className="py-4 px-4 text-sky-400 font-bold">InvoiceFlow</th>
                <th className="py-4 px-4 text-slate-400 font-medium">Xero ($35/mo)</th>
                <th className="py-4 px-4 text-slate-400 font-medium">MYOB ($36/mo)</th>
              </tr>
            </thead>
            <tbody className="text-slate-300">
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Free tier</td>
                <td className="py-3 px-4 text-sky-400 font-semibold">5 invoices/mo forever</td>
                <td className="py-3 px-4 text-slate-500">30-day trial only</td>
                <td className="py-3 px-4 text-slate-500">30-day trial only</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Monthly price</td>
                <td className="py-3 px-4 text-sky-400 font-semibold">$19/mo</td>
                <td className="py-3 px-4">$35/mo</td>
                <td className="py-3 px-4">$36/mo</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Seasonal batch invoicing</td>
                <td className="py-3 px-4 text-sky-400">Built-in</td>
                <td className="py-3 px-4 text-slate-500">Manual only</td>
                <td className="py-3 px-4 text-slate-500">Manual only</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">GST auto-calculation</td>
                <td className="py-3 px-4 text-sky-400">Automatic</td>
                <td className="py-3 px-4 text-emerald-400">Automatic</td>
                <td className="py-3 px-4 text-emerald-400">Automatic</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">AI invoice extraction</td>
                <td className="py-3 px-4 text-sky-400">Gmail auto-detect</td>
                <td className="py-3 px-4 text-slate-500">Manual upload</td>
                <td className="py-3 px-4 text-slate-500">Manual upload</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Setup time</td>
                <td className="py-3 px-4 text-sky-400">30 seconds</td>
                <td className="py-3 px-4">30-60 minutes</td>
                <td className="py-3 px-4">30-60 minutes</td>
              </tr>
              <tr>
                <td className="py-3 px-4">Annual cost</td>
                <td className="py-3 px-4 text-sky-400 font-bold">$0 — $228/yr</td>
                <td className="py-3 px-4 text-red-300">$420/yr</td>
                <td className="py-3 px-4 text-red-300">$432/yr</td>
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

      {/* Persona Links */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">
          InvoiceFlow for every type of Gold Coast business
        </h2>
        <p className="text-center text-slate-400 mb-10 max-w-2xl mx-auto">
          Whether you&apos;re a Burleigh-based creative or a Southport contractor, we&apos;ve got you covered.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {personaLinks.map((persona) => (
            <Link
              key={persona.href}
              href={persona.href}
              className="rounded-xl border border-white/5 bg-white/[0.02] p-5 hover:border-sky-500/20 hover:bg-white/[0.04] transition-all group"
            >
              <h3 className="font-semibold text-white group-hover:text-sky-400 transition-colors mb-1">
                {persona.name}
              </h3>
              <p className="text-xs text-slate-500">{persona.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Popular Tools */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">
          Free tools for Gold Coast businesses
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

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Gold Coast invoicing FAQ
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
          From Surfers Paradise to Coolangatta — invoice smarter
        </h2>
        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
          Gold Coast businesses in Surfers Paradise, Burleigh Heads, Broadbeach, and Coolangatta are switching from
          spreadsheets and overpriced accounting software to InvoiceFlow. Start free today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/signup">
            <Button size="lg">Start Free — 5 Invoices/Month</Button>
          </Link>
          <Link href="/tools" className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-sky-400 hover:text-sky-300 transition-colors">
            Or try our free tools first &rarr;
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
