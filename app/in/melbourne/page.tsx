import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Invoicing Software for Melbourne Freelancers & Small Business — InvoiceFlow',
  description:
    'Free invoicing tools built for Melbourne freelancers, tradies, and small businesses. GST calculator, invoice generator, BAS-ready exports. Used by sole traders across Melbourne.',
  alternates: { canonical: '/in/melbourne' },
  openGraph: {
    title: 'InvoiceFlow Melbourne — Invoice Smarter, Get Paid Faster',
    description:
      'Melbourne\'s favourite free invoicing software. Create professional invoices in 30 seconds, track GST automatically, and get paid faster. Start free today.',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://invoiceflow-teal.vercel.app' },
    { '@type': 'ListItem', position: 2, name: 'Melbourne', item: 'https://invoiceflow-teal.vercel.app/in/melbourne' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What invoicing software do Melbourne freelancers use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Melbourne freelancers increasingly choose InvoiceFlow for its simplicity and Australian-first design. Unlike Xero ($35/mo) or MYOB ($36/mo), InvoiceFlow starts free with 5 invoices per month, includes automatic GST calculation, and offers 100+ free business tools. It\'s built in Melbourne for Australian businesses, so every feature — from ABN validation to BAS-ready exports — is designed for how Australians actually work.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to register for GST as a Melbourne freelancer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You must register for GST if your annual turnover reaches $75,000 (or $150,000 for non-profit). Many Melbourne freelancers, especially in high-demand sectors like tech, design, and consulting, hit this threshold within their first year. InvoiceFlow automatically tracks your turnover and alerts you when you\'re approaching the threshold, so you\'re never caught off-guard.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is InvoiceFlow free for Melbourne small businesses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. InvoiceFlow offers a permanent free tier — 5 invoices per month, Gmail sync, CSV export, and access to 100+ free business tools including a GST calculator, invoice generator, and ABN lookup. For unlimited invoices, plans start at $19/month — almost half the cost of Xero or MYOB.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does InvoiceFlow compare to accounting software for Melbourne businesses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most Melbourne freelancers and sole traders don\'t need full accounting software. Xero and MYOB are powerful but expensive ($35-$36/month) and complex. InvoiceFlow focuses on what you actually need: professional invoicing, automatic GST, payment tracking, and BAS-ready exports. If you just need to send invoices and get paid, InvoiceFlow is faster, cheaper, and simpler.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use InvoiceFlow for my Melbourne-based trade business?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. InvoiceFlow is used by Melbourne tradies across all trades — plumbers in Footscray, sparkies in Dandenong, builders in the outer suburbs. Create invoices from your phone on-site, include materials and labour line items, track progress claims, and get automatic payment reminders. All with correct GST handling.',
      },
    },
  ],
};

// Melbourne-specific data
const melbourneIndustries = [
  { name: 'Creative & Design', icon: '🎨' },
  { name: 'Tech & Startups', icon: '💻' },
  { name: 'Hospitality & Food', icon: '☕' },
  { name: 'Trades & Construction', icon: '🔧' },
  { name: 'Professional Services', icon: '📊' },
  { name: 'Health & Wellness', icon: '🏥' },
  { name: 'Education & Tutoring', icon: '📚' },
  { name: 'Events & Entertainment', icon: '🎭' },
];

const painPoints = [
  {
    problem: 'Melbourne\'s high cost of living means every dollar counts',
    solution: 'Start free. Pro is $19/mo — less than a brunch in Fitzroy.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
  {
    problem: 'Juggling multiple clients across Melbourne\'s sprawling suburbs',
    solution: 'Track every invoice, every client, every payment — from one dashboard.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25a2.25 2.25 0 01-2.25-2.25v-2.25z" />
      </svg>
    ),
  },
  {
    problem: 'Spending weekends on BAS and GST instead of at the MCG',
    solution: 'Automatic GST tracking and BAS-ready exports. One click, done.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    problem: 'Paying $35+/month for accounting software you barely use',
    solution: 'Simple invoicing without the accounting bloat. Just what you need.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const popularTools = [
  { name: 'GST Calculator', href: '/tools/gst-calculator', desc: 'Calculate GST on any amount — inclusive or exclusive' },
  { name: 'Invoice Generator', href: '/tools/invoice-generator', desc: 'Create professional invoices instantly' },
  { name: 'ABN Lookup', href: '/tools/abn-lookup', desc: 'Verify client and supplier ABNs' },
  { name: 'Freelance Rate Calculator', href: '/tools/rate-calculator', desc: 'Find your ideal hourly rate for Melbourne' },
  { name: 'BAS Preparation Checklist', href: '/tools/bas-preparation-checklist', desc: 'Quarterly BAS made simple' },
  { name: 'Tax Deduction Finder', href: '/tools/tax-deduction-finder', desc: 'Find deductions you\'re missing' },
];

export default function InMelbournePage() {
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
          Built in Melbourne, for Melbourne
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Melbourne&apos;s invoicing software.{' '}
          <span className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
            Simple. Free. Australian.
          </span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-slate-400 mb-10">
          Built by a Melbourne team for Melbourne freelancers, tradies, and small businesses.
          Create professional invoices in 30 seconds, track GST automatically, and stop overpaying for Xero.
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
          Free tier: 5 invoices/month, Gmail sync, CSV export, 100+ free business tools
        </p>
      </section>

      {/* Melbourne Industries */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <p className="text-center text-slate-400 text-sm mb-6">Used by Melbourne businesses across every industry</p>
        <div className="flex flex-wrap justify-center gap-3">
          {melbourneIndustries.map((industry) => (
            <span
              key={industry.name}
              className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-300"
            >
              {industry.icon} {industry.name}
            </span>
          ))}
        </div>
      </section>

      {/* Key Numbers — Melbourne-specific */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">
          Melbourne by the numbers
        </h2>
        <p className="text-center text-slate-400 mb-10 max-w-2xl mx-auto">
          Melbourne is Australia&apos;s fastest-growing city with a thriving freelance economy. Here&apos;s what matters for invoicing.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { number: '340K+', label: 'Sole traders in Victoria', detail: 'ABS 2024 data' },
            { number: '$75K', label: 'GST registration threshold', detail: 'InvoiceFlow tracks it for you' },
            { number: '$19', label: 'Per month for unlimited invoicing', detail: 'vs $35 for Xero' },
            { number: '100+', label: 'Free business tools', detail: 'GST calculator, templates & more' },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
              <p className="text-3xl font-bold bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
                {stat.number}
              </p>
              <p className="text-white font-medium mt-2">{stat.label}</p>
              <p className="text-slate-500 text-sm mt-1">{stat.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pain Points */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">
          Why Melbourne businesses choose InvoiceFlow
        </h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          Whether you&apos;re a designer in Fitzroy, a tradie in Dandenong, or a consultant in the CBD — invoicing should be the easy part.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {painPoints.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 hover:border-teal-500/20 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-red-500/10 p-3 text-red-400 shrink-0">{item.icon}</div>
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

      {/* Comparison */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">
          How InvoiceFlow compares for Melbourne businesses
        </h2>
        <p className="text-center text-slate-400 mb-10 max-w-2xl mx-auto">
          You don&apos;t need full accounting software to send invoices. Here&apos;s how we stack up against what most Melbourne businesses use.
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
                <td className="py-3 px-4">Monthly price</td>
                <td className="py-3 px-4 text-teal-400 font-semibold">$19/mo</td>
                <td className="py-3 px-4">$35/mo</td>
                <td className="py-3 px-4">$36/mo</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Setup time</td>
                <td className="py-3 px-4 text-teal-400">30 seconds</td>
                <td className="py-3 px-4">30-60 minutes</td>
                <td className="py-3 px-4">30-60 minutes</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Built for Australia</td>
                <td className="py-3 px-4 text-teal-400">Yes — Melbourne team</td>
                <td className="py-3 px-4 text-emerald-400">NZ-based, AU support</td>
                <td className="py-3 px-4 text-emerald-400">Australian</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Free business tools</td>
                <td className="py-3 px-4 text-teal-400 font-semibold">100+ tools included</td>
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

      {/* Melbourne personas */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">InvoiceFlow for every Melbourne business</h2>
        <p className="text-center text-slate-400 mb-10">
          Tailored features for how Melbourne professionals actually work.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { name: 'Freelancers', href: '/for/freelancers', desc: 'Designers, developers, writers — invoice clients professionally' },
            { name: 'Sole Traders', href: '/for/sole-traders', desc: 'Simple invoicing with GST tracking for sole trader ABNs' },
            { name: 'Tradies', href: '/for/tradies', desc: 'Invoice on-site from your phone after every job' },
            { name: 'Contractors', href: '/for/contractors', desc: 'ABN compliance, PAYG tracking, subcontractor invoicing' },
            { name: 'Consultants', href: '/for/consultants', desc: 'Retainer invoicing, time-based billing, professional templates' },
            { name: 'Creatives', href: '/for/creatives', desc: 'Deposit invoicing, milestone payments, portfolio-ready invoices' },
          ].map((persona) => (
            <Link
              key={persona.name}
              href={persona.href}
              className="rounded-xl border border-white/5 bg-white/[0.02] p-5 hover:border-teal-500/20 hover:bg-white/[0.04] transition-all group"
            >
              <h3 className="font-semibold text-white group-hover:text-teal-400 transition-colors">
                {persona.name}
              </h3>
              <p className="text-sm text-slate-400 mt-1">{persona.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Popular Tools */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">
          Free tools for Melbourne businesses
        </h2>
        <p className="text-center text-slate-400 mb-10">
          No sign-up required. Use them right now, completely free.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {popularTools.map((tool) => (
            <Link
              key={tool.name}
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
          Common questions from Melbourne businesses
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
          Join Melbourne&apos;s smartest freelancers
        </h2>
        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
          From Brunswick to Brighton, Footscray to Frankston — Melbourne businesses are switching to simpler invoicing. Start free today.
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
