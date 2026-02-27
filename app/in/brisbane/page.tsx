import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Invoicing Software Brisbane — Free for Small Business | InvoiceFlow',
  description:
    'Free invoicing software for Brisbane freelancers, tradies, and small businesses. GST calculator, invoice generator, ABN lookup and 100+ free tools. Built for Queensland sole traders.',
  alternates: { canonical: '/in/brisbane' },
  openGraph: {
    title: 'InvoiceFlow Brisbane — Invoice Smarter, Get Paid Faster',
    description:
      'Brisbane businesses are switching from Xero and MYOB to InvoiceFlow. Free tier available, automatic GST, BAS-ready exports. Built for the Sunshine State.',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://invoiceflow-teal.vercel.app' },
    { '@type': 'ListItem', position: 2, name: 'Brisbane', item: 'https://invoiceflow-teal.vercel.app/in/brisbane' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best invoicing software for Brisbane small businesses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'InvoiceFlow is purpose-built for Australian small businesses including Brisbane sole traders, freelancers, and tradies. Unlike Xero ($35/mo) or MYOB ($36/mo), InvoiceFlow focuses on fast invoicing with automatic GST, BAS-ready exports, and 100+ free business tools. It starts free with 5 invoices per month — perfect for Brisbane contractors and startups getting off the ground.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do Brisbane sole traders need invoicing software?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Queensland has over 280,000 sole traders, and the ATO requires all of them to keep records of business income and expenses for at least 5 years. Whether you are a Brisbane tradie, consultant, or creative freelancer, proper invoicing software ensures you meet tax invoice requirements, charge GST correctly when registered, and have clean records for quarterly BAS lodgement.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is InvoiceFlow free for Brisbane freelancers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. InvoiceFlow offers a free forever tier with 5 invoices per month, Gmail sync, CSV export, and access to 100+ free business tools including a GST calculator, invoice generator, and ABN lookup. Most Brisbane freelancers and sole traders doing a handful of jobs per week can start completely free. Paid plans start at $19/month for unlimited invoices.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does InvoiceFlow help Brisbane businesses with GST and BAS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'InvoiceFlow automatically adds 10% GST to every invoice, tracks your annual turnover against the $75,000 GST registration threshold, flags missing ABNs (which trigger 47% withholding), and generates BAS-ready reports. At the end of each quarter, export your data for BAS lodgement instead of spending hours sorting through receipts and bank statements.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can Brisbane construction businesses use InvoiceFlow for progress claims?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. With Brisbane experiencing a massive infrastructure boom ahead of the 2032 Olympics, construction businesses need reliable progress claim management. InvoiceFlow supports milestone-based invoicing with percentage or fixed-amount stages, tracks invoiced vs outstanding amounts, and maintains a clear audit trail — essential for QBCC compliance and large-scale project management.',
      },
    },
  ],
};

const painPoints = [
  {
    problem: 'Spending weekends on invoicing instead of enjoying Brisbane',
    solution: 'Create and send professional invoices in 30 seconds — from your phone, anywhere.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    problem: 'Chasing payments across multiple construction or service jobs',
    solution: 'Automatic payment reminders at 7, 14, and 30 days. Never chase a late payer again.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
  {
    problem: 'Paying $35+/month for bloated accounting software',
    solution: 'InvoiceFlow starts free. Pro is $19/month — less than a flat white at South Bank.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185z" />
      </svg>
    ),
  },
  {
    problem: 'Scrambling for BAS paperwork every quarter',
    solution: 'Automatic GST tracking and BAS-ready exports. One click, done — more time for the business.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
];

const industries = [
  { name: 'Construction & Building', icon: '🏗️' },
  { name: 'Mining Services', icon: '⛏️' },
  { name: 'Tourism & Hospitality', icon: '🌴' },
  { name: 'Tech Startups', icon: '💻' },
  { name: 'Agriculture & Farming', icon: '🌾' },
  { name: 'Trades & Services', icon: '🔧' },
  { name: 'Creative & Media', icon: '🎬' },
  { name: 'Health & Wellness', icon: '🏥' },
];

const personaPages = [
  { name: 'Freelancers', href: '/for/freelancers', desc: 'Designers, developers, writers and more' },
  { name: 'Sole Traders', href: '/for/sole-traders', desc: 'ABN holders running their own show' },
  { name: 'Tradies', href: '/for/tradies', desc: 'Plumbers, sparkies, builders and every trade' },
  { name: 'Contractors', href: '/for/contractors', desc: 'IT, engineering, and project contractors' },
  { name: 'Consultants', href: '/for/consultants', desc: 'Management, strategy, and advisory pros' },
  { name: 'Creatives', href: '/for/creatives', desc: 'Photographers, videographers, artists' },
];

const popularTools = [
  { name: 'GST Calculator', href: '/tools/gst-calculator', desc: 'Calculate GST on any amount instantly' },
  { name: 'Invoice Generator', href: '/tools/invoice-generator', desc: 'Create ATO-compliant tax invoices' },
  { name: 'ABN Lookup', href: '/tools/abn-lookup', desc: 'Verify client and supplier ABNs' },
  { name: 'Late Payment Calculator', href: '/tools/late-payment-interest-calculator', desc: 'Interest on overdue invoices' },
  { name: 'Hourly Rate Calculator', href: '/tools/rate-calculator', desc: 'Price your services right' },
  { name: 'Milestone Payment Calculator', href: '/tools/milestone-payment-calculator', desc: 'Progress claim amounts' },
];

export default function InBrisbanePage() {
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
        <div className="inline-block rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-sm font-medium text-orange-400 mb-8">
          Invoicing Software for Brisbane Businesses
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Brisbane&apos;s booming.{' '}
          <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
            Your invoicing should keep up.
          </span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-slate-400 mb-10">
          Australia&apos;s fastest-growing city deserves invoicing that moves just as fast. InvoiceFlow gives Brisbane
          freelancers, tradies, and small businesses professional invoicing with automatic GST — starting free.
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
      <section className="mx-auto max-w-6xl px-6 py-12">
        <p className="text-center text-slate-400 text-sm mb-6">Trusted by Brisbane businesses across every industry</p>
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
          Brisbane businesses shouldn&apos;t waste time on invoicing
        </h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          You&apos;re building something in Australia&apos;s fastest-growing city. Spend your energy on growth, not paperwork.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {painPoints.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 hover:border-orange-500/20 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-red-500/10 p-3 text-red-400 shrink-0">{item.icon}</div>
                <div>
                  <p className="text-red-300 text-sm font-medium mb-1 line-through decoration-red-500/50">
                    {item.problem}
                  </p>
                  <p className="text-orange-300 font-semibold">{item.solution}</p>
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
            { number: '280K+', label: 'QLD sole traders', detail: 'And growing every year' },
            { number: '$75K', label: 'GST threshold', detail: 'We track it for you' },
            { number: '$19/mo', label: 'Pro plan price', detail: 'Less than half of Xero' },
            { number: '100+', label: 'Free business tools', detail: 'No sign-up required' },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
              <p className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
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
          How InvoiceFlow compares for Brisbane businesses
        </h2>
        <p className="text-center text-slate-400 mb-10 max-w-2xl mx-auto">
          You don&apos;t need a full accounting suite. You need fast invoicing, automatic GST, and money in the bank.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="py-4 px-4 text-slate-400 font-medium">Feature</th>
                <th className="py-4 px-4 text-orange-400 font-bold">InvoiceFlow</th>
                <th className="py-4 px-4 text-slate-400 font-medium">Xero ($35/mo)</th>
                <th className="py-4 px-4 text-slate-400 font-medium">MYOB ($36/mo)</th>
              </tr>
            </thead>
            <tbody className="text-slate-300">
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Free tier</td>
                <td className="py-3 px-4 text-orange-400 font-semibold">5 invoices/mo forever</td>
                <td className="py-3 px-4 text-slate-500">30-day trial only</td>
                <td className="py-3 px-4 text-slate-500">30-day trial only</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Monthly price</td>
                <td className="py-3 px-4 text-orange-400 font-semibold">$19/mo</td>
                <td className="py-3 px-4">$35/mo</td>
                <td className="py-3 px-4">$36/mo</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Mobile invoicing</td>
                <td className="py-3 px-4 text-orange-400">Yes — no app needed</td>
                <td className="py-3 px-4 text-emerald-400">App required</td>
                <td className="py-3 px-4 text-emerald-400">App required</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">GST auto-calculation</td>
                <td className="py-3 px-4 text-orange-400">Automatic</td>
                <td className="py-3 px-4 text-emerald-400">Automatic</td>
                <td className="py-3 px-4 text-emerald-400">Automatic</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Progress claims</td>
                <td className="py-3 px-4 text-orange-400">Built-in</td>
                <td className="py-3 px-4 text-slate-500">Manual workaround</td>
                <td className="py-3 px-4 text-slate-500">Manual workaround</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Setup time</td>
                <td className="py-3 px-4 text-orange-400">30 seconds</td>
                <td className="py-3 px-4">30-60 minutes</td>
                <td className="py-3 px-4">30-60 minutes</td>
              </tr>
              <tr>
                <td className="py-3 px-4">Annual cost</td>
                <td className="py-3 px-4 text-orange-400 font-bold">$0 — $228/yr</td>
                <td className="py-3 px-4 text-red-300">$420/yr</td>
                <td className="py-3 px-4 text-red-300">$432/yr</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-6 text-center">
          <Link href="/compare" className="text-orange-400 hover:text-orange-300 text-sm font-medium">
            See full competitor comparisons &rarr;
          </Link>
        </div>
      </section>

      {/* Persona Pages */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">
          InvoiceFlow for every type of Brisbane business
        </h2>
        <p className="text-center text-slate-400 mb-10 max-w-2xl mx-auto">
          Whether you&apos;re a Fortitude Valley creative or a Northside tradie, we&apos;ve built invoicing for your workflow.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {personaPages.map((persona) => (
            <Link
              key={persona.href}
              href={persona.href}
              className="rounded-xl border border-white/5 bg-white/[0.02] p-5 hover:border-orange-500/20 hover:bg-white/[0.04] transition-all group"
            >
              <h3 className="font-semibold text-white group-hover:text-orange-400 transition-colors">
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
          Free tools for Brisbane businesses
        </h2>
        <p className="text-center text-slate-400 mb-10">
          No sign-up required. Use them right now, completely free.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {popularTools.map((tool) => (
            <Link
              key={tool.name}
              href={tool.href}
              className="rounded-xl border border-white/5 bg-white/[0.02] p-5 hover:border-orange-500/20 hover:bg-white/[0.04] transition-all group"
            >
              <h3 className="font-semibold text-white group-hover:text-orange-400 transition-colors">
                {tool.name}
              </h3>
              <p className="text-sm text-slate-400 mt-1">{tool.desc}</p>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/tools" className="text-orange-400 hover:text-orange-300 text-sm font-medium">
            Browse all 100+ free tools &rarr;
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Brisbane invoicing FAQ
        </h2>
        <div className="space-y-6">
          {faqSchema.mainEntity.map((faq, i) => (
            <details key={i} className="group rounded-xl border border-white/5 bg-white/[0.02] overflow-hidden">
              <summary className="cursor-pointer p-5 font-medium text-white hover:text-orange-400 transition-colors list-none flex justify-between items-center">
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
          From South Bank to Paddington — Brisbane invoices smarter with InvoiceFlow
        </h2>
        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
          Join thousands of Brisbane businesses — from Fortitude Valley startups to West End creatives — who&apos;ve
          ditched spreadsheets for professional invoicing. Start free today.
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
