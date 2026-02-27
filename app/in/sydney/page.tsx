import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Invoicing Software Sydney — Invoice App for Sydney Freelancers & Small Business | InvoiceFlow',
  description:
    'Free invoicing software for Sydney freelancers and small businesses. GST calculator, AI invoice extraction, ATO-compliant templates, and 100+ free tools. Trusted by sole traders across NSW.',
  alternates: { canonical: '/in/sydney' },
  openGraph: {
    title: 'InvoiceFlow Sydney — Invoicing Built for Sydney Small Business',
    description:
      'Sydney freelancers and sole traders use InvoiceFlow to create professional invoices, auto-calculate GST, track payments, and export BAS-ready data. Free tier available.',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://invoiceflow-teal.vercel.app' },
    { '@type': 'ListItem', position: 2, name: 'Sydney', item: 'https://invoiceflow-teal.vercel.app/in/sydney' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best invoicing software for Sydney freelancers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'InvoiceFlow is purpose-built for Australian freelancers and small businesses, including those in Sydney. Unlike Xero ($35/mo) or MYOB ($36/mo) which are full accounting platforms, InvoiceFlow focuses on what Sydney freelancers actually need: professional invoicing, automatic GST calculations, AI-powered invoice extraction from Gmail, and BAS-ready exports. It starts free with 5 invoices per month — ideal for Sydney sole traders watching their overheads in a high-cost city.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many sole traders and freelancers are in Sydney and NSW?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'NSW has over 450,000 registered sole traders, with a significant concentration in Greater Sydney. The city is Australia\'s largest freelance market, with strong demand across fintech, professional services, construction, media, property, and the creative industries. Sydney freelancers typically charge 15-25% higher rates than the national average due to the higher cost of living.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do Sydney freelancers need to charge GST on their invoices?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You must register for GST once your annual turnover reaches $75,000. Given Sydney\'s higher rates — many freelancers charge $100-200+/hour — you can hit this threshold quickly, sometimes within a few months of full-time freelancing. InvoiceFlow tracks your cumulative income and alerts you as you approach the $75K mark, so you never miss the registration deadline.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can InvoiceFlow handle invoicing for Sydney construction and property businesses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Sydney\'s booming construction and property sector often requires milestone-based invoicing and progress claims. InvoiceFlow supports percentage-based and fixed-amount progress billing, retention tracking, and project-level reporting. Whether you are a Parramatta builder or a North Shore architect, you can manage multi-stage projects with proper audit trails.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does invoicing software cost for a Sydney small business?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Traditional accounting software like Xero ($35/mo) and MYOB ($36/mo) costs $420-432/year. InvoiceFlow offers a free tier (5 invoices/month) and Pro at $19/month ($228/year) — saving Sydney businesses $200+/year. In a city where rent, transport, and living costs are already high, keeping software overheads low makes a real difference to your bottom line.',
      },
    },
  ],
};

const painPoints = [
  {
    problem: 'Losing hours each week on invoicing instead of billable client work',
    solution: 'Create and send professional invoices in 30 seconds. AI extracts invoice data from Gmail automatically.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    problem: 'Paying $35+/month for bloated accounting software you barely use',
    solution: 'InvoiceFlow starts free. Pro is $19/month — less than a flat white at a Surry Hills cafe.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
  {
    problem: 'Hitting the $75K GST threshold without realising until BAS time',
    solution: 'Automatic GST tracking and threshold alerts. Know exactly where you stand, every day.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    ),
  },
  {
    problem: 'Chasing late payments while juggling Sydney living costs',
    solution: 'Automated payment reminders at 7, 14, and 30 days. Get paid on time, every time.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
];

const sydneyIndustries = [
  { name: 'Fintech', icon: '💳' },
  { name: 'Property', icon: '🏙️' },
  { name: 'Media & Advertising', icon: '📺' },
  { name: 'Construction', icon: '🏗️' },
  { name: 'Professional Services', icon: '💼' },
  { name: 'Health & Allied', icon: '⚕️' },
  { name: 'Legal', icon: '⚖️' },
  { name: 'Hospitality', icon: '🍽️' },
];

const popularTools = [
  { name: 'Invoice Generator', href: '/tools/invoice-generator', desc: 'Create ATO-compliant invoices' },
  { name: 'GST Calculator', href: '/tools/gst-calculator', desc: 'Calculate GST on any amount' },
  { name: 'Hourly Rate Calculator', href: '/tools/rate-calculator', desc: 'Price for Sydney market rates' },
  { name: 'ABN Lookup', href: '/tools/abn-lookup', desc: 'Verify client and supplier ABNs' },
  { name: 'Tax Estimator', href: '/tools/tax-estimator', desc: 'Estimate your annual tax bill' },
  { name: 'Late Payment Calculator', href: '/tools/late-payment-interest-calculator', desc: 'Interest on overdue invoices' },
];

const personaPages = [
  { name: 'Freelancers', href: '/for/freelancers', desc: 'Designers, developers, writers, and more' },
  { name: 'Sole Traders', href: '/for/sole-traders', desc: 'ABN holders running their own show' },
  { name: 'Contractors', href: '/for/contractors', desc: 'IT, engineering, and project-based work' },
  { name: 'Tradies', href: '/for/tradies', desc: 'Plumbers, sparkies, builders across Sydney' },
  { name: 'Consultants', href: '/for/consultants', desc: 'Management, strategy, and advisory' },
  { name: 'Creatives', href: '/for/creatives', desc: 'Photographers, videographers, artists' },
];

export default function InSydneyPage() {
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
        <div className="inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-400 mb-8">
          Invoicing Software for Sydney
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Sydney&apos;s smartest freelancers{' '}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            don&apos;t waste time on invoicing
          </span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-slate-400 mb-10">
          In a city where the cost of living is high and competition is fierce, every billable hour counts.
          InvoiceFlow automates invoicing, GST, and payment tracking so Sydney freelancers and small businesses
          can focus on earning — not admin.
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

      {/* Sydney Industry Badges */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <p className="text-center text-slate-400 text-sm mb-6">Trusted by Sydney professionals across every industry</p>
        <div className="flex flex-wrap justify-center gap-3">
          {sydneyIndustries.map((industry) => (
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
          Sydney&apos;s overheads are high enough without expensive software
        </h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          Between rent, transport, and the cost of doing business in Australia&apos;s most expensive city,
          the last thing you need is bloated accounting software eating into your margins.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {painPoints.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 hover:border-blue-500/20 transition-colors"
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
        <h2 className="text-3xl font-bold text-center mb-10">
          Sydney by the numbers
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { number: '450K+', label: 'Sole traders in NSW', detail: 'Australia\'s largest freelance market' },
            { number: '$150+/hr', label: 'Average Sydney freelancer rate', detail: '15-25% above national average' },
            { number: '$75K', label: 'GST threshold', detail: 'Hit it fast at Sydney rates' },
            { number: '$0', label: 'To get started', detail: 'Free tier, no credit card' },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
              <p className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
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
          How InvoiceFlow compares in Sydney
        </h2>
        <p className="text-center text-slate-400 mb-10 max-w-2xl mx-auto">
          Sydney businesses don&apos;t need enterprise accounting platforms. You need fast invoicing, accurate GST, and reliable payment tracking.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="py-4 px-4 text-slate-400 font-medium">Feature</th>
                <th className="py-4 px-4 text-blue-400 font-bold">InvoiceFlow</th>
                <th className="py-4 px-4 text-slate-400 font-medium">Xero ($35/mo)</th>
                <th className="py-4 px-4 text-slate-400 font-medium">MYOB ($36/mo)</th>
              </tr>
            </thead>
            <tbody className="text-slate-300">
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Free tier</td>
                <td className="py-3 px-4 text-blue-400 font-semibold">5 invoices/mo forever</td>
                <td className="py-3 px-4 text-slate-500">30-day trial only</td>
                <td className="py-3 px-4 text-slate-500">30-day trial only</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Monthly price</td>
                <td className="py-3 px-4 text-blue-400 font-semibold">$19/mo</td>
                <td className="py-3 px-4">$35/mo</td>
                <td className="py-3 px-4">$36/mo</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">AI invoice extraction</td>
                <td className="py-3 px-4 text-blue-400">Gmail auto-detect</td>
                <td className="py-3 px-4 text-slate-500">Manual upload only</td>
                <td className="py-3 px-4 text-slate-500">Manual upload only</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">GST auto-calculation</td>
                <td className="py-3 px-4 text-blue-400">Automatic + threshold alerts</td>
                <td className="py-3 px-4 text-emerald-400">Automatic</td>
                <td className="py-3 px-4 text-emerald-400">Automatic</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Setup time</td>
                <td className="py-3 px-4 text-blue-400">30 seconds</td>
                <td className="py-3 px-4">30-60 minutes</td>
                <td className="py-3 px-4">30-60 minutes</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Free business tools</td>
                <td className="py-3 px-4 text-blue-400 font-semibold">100+ included</td>
                <td className="py-3 px-4 text-slate-500">None</td>
                <td className="py-3 px-4 text-slate-500">None</td>
              </tr>
              <tr>
                <td className="py-3 px-4">Annual cost</td>
                <td className="py-3 px-4 text-blue-400 font-bold">$0 — $228/yr</td>
                <td className="py-3 px-4 text-red-300">$420/yr</td>
                <td className="py-3 px-4 text-red-300">$432/yr</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-6 text-center">
          <Link href="/compare" className="text-blue-400 hover:text-blue-300 text-sm font-medium">
            See full competitor comparisons &rarr;
          </Link>
        </div>
      </section>

      {/* Persona Pages */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">
          InvoiceFlow for every type of Sydney worker
        </h2>
        <p className="text-center text-slate-400 mb-10 max-w-2xl mx-auto">
          Whether you&apos;re a Surry Hills creative, a Parramatta contractor, or a North Shore consultant — we&apos;ve built invoicing for the way you work.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {personaPages.map((persona) => (
            <Link
              key={persona.href}
              href={persona.href}
              className="rounded-xl border border-white/5 bg-white/[0.02] p-5 hover:border-blue-500/20 hover:bg-white/[0.04] transition-all group"
            >
              <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors mb-1">
                {persona.name}
              </h3>
              <p className="text-sm text-slate-400">{persona.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Popular Tools */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">
          Free tools for Sydney businesses
        </h2>
        <p className="text-center text-slate-400 mb-10">
          No sign-up required. Use them right now, completely free.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {popularTools.map((tool) => (
            <Link
              key={tool.name}
              href={tool.href}
              className="rounded-xl border border-white/5 bg-white/[0.02] p-5 hover:border-blue-500/20 hover:bg-white/[0.04] transition-all group"
            >
              <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors">
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

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Sydney invoicing FAQ
        </h2>
        <div className="space-y-6">
          {faqSchema.mainEntity.map((faq, i) => (
            <details key={i} className="group rounded-xl border border-white/5 bg-white/[0.02] overflow-hidden">
              <summary className="cursor-pointer p-5 font-medium text-white hover:text-blue-400 transition-colors list-none flex justify-between items-center">
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
          From Surry Hills to Parramatta, Bondi to the North Shore
        </h2>
        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
          Sydney&apos;s freelancers and small businesses are switching from overpriced accounting software to InvoiceFlow.
          Start free today and keep more of what you earn in this city.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/signup">
            <Button size="lg">Start Free — 5 Invoices/Month</Button>
          </Link>
          <Link href="/tools" className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors">
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
