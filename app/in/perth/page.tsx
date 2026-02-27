import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Invoicing Software for Perth Businesses — InvoiceFlow',
  description:
    'Free invoicing software built for Perth freelancers, contractors and small businesses. GST calculator, FIFO contractor invoicing, mining services billing, and 100+ free tools. Start free today.',
  alternates: { canonical: '/in/perth' },
  openGraph: {
    title: 'InvoiceFlow Perth — Invoice Smarter, Get Paid Faster',
    description:
      'Perth freelancers and contractors use InvoiceFlow to create professional invoices in 30 seconds, automate GST, and chase payments automatically. Free tier available.',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://invoiceflow-teal.vercel.app' },
    { '@type': 'ListItem', position: 2, name: 'Perth', item: 'https://invoiceflow-teal.vercel.app/in/perth' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do FIFO contractors invoice for fly-in fly-out work in WA?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'FIFO contractors should invoice per roster cycle (e.g., 2 weeks on / 1 week off) with clear date ranges, site location, and hourly or day rates. InvoiceFlow lets you create itemised invoices from your phone — even on-site in the Pilbara — with automatic GST, ABN validation, and PDF export. Keep your invoicing consistent so mining companies pay on time.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do Perth sole traders need invoicing software?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The ATO requires all sole traders to keep records of business income and expenses for at least 5 years. With over 180,000 sole traders in Western Australia, proper invoicing ensures you meet tax invoice requirements, charge GST correctly once you hit the $75,000 threshold, and have clean records for BAS lodgement. Spreadsheets and handwritten invoices increase your audit risk.',
      },
    },
    {
      '@type': 'Question',
      name: 'What invoicing rules apply to mining and resources contractors in WA?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Mining contractors in WA must issue valid tax invoices with their ABN, GST amount (if registered), payment terms, and a clear description of services. Many mining companies require 30-day payment terms and purchase order references on invoices. InvoiceFlow supports PO number fields, automatic GST calculation, and payment term tracking — so your invoices meet the standards large mining firms expect.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is InvoiceFlow free for Perth freelancers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'InvoiceFlow offers a free forever tier with 5 invoices per month, Gmail sync, CSV export, and access to 100+ free business tools including a GST calculator, invoice generator, and ABN lookup. Most Perth freelancers doing a handful of jobs per week can start free. Paid plans start at $19/month for unlimited invoices — less than a flat white at a Subiaco cafe.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does InvoiceFlow help Perth businesses with GST and BAS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'InvoiceFlow automatically adds 10% GST to every invoice, tracks your annual turnover against the $75,000 GST registration threshold, flags missing ABNs (which trigger 47% withholding), and generates BAS-ready reports. At the end of each quarter, export your data for BAS lodgement instead of spending hours sorting through receipts. Especially useful for Perth contractors juggling multiple mining clients.',
      },
    },
  ],
};

const painPoints = [
  {
    problem: 'Invoicing from remote mine sites with patchy internet',
    solution: 'Create invoices on your phone in 30 seconds — works on mobile data, send when you&apos;re back in range.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
      </svg>
    ),
  },
  {
    problem: 'Chasing payments across FIFO roster cycles',
    solution: 'Automatic payment reminders sent at 7, 14, and 30 days — you focus on the job, not the paperwork.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    problem: 'High day rates but messy records come BAS time',
    solution: 'Automatic GST tracking and BAS-ready exports. One click, sorted — even on $1,500/day rates.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    problem: 'Paying $35+/month for accounting software you barely use',
    solution: 'InvoiceFlow starts free. Pro is $19/month — less than a pint at a Fremantle pub.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
];

const industries = [
  { name: 'Mining Services', icon: '&#9874;' },
  { name: 'Oil & Gas', icon: '&#9981;' },
  { name: 'Construction', icon: '&#127959;' },
  { name: 'Agriculture', icon: '&#127806;' },
  { name: 'Tech & Startups', icon: '&#128187;' },
  { name: 'Marine & Shipping', icon: '&#9875;' },
  { name: 'FIFO Contractors', icon: '&#9992;' },
  { name: 'Trades & Services', icon: '&#128295;' },
];

const popularTools = [
  { name: 'GST Calculator', href: '/tools/gst-calculator', desc: 'Calculate GST on any invoice amount' },
  { name: 'Invoice Generator', href: '/tools/invoice-generator', desc: 'Create professional invoices instantly' },
  { name: 'ABN Lookup', href: '/tools/abn-lookup', desc: 'Verify client and contractor ABNs' },
  { name: 'Rate Calculator', href: '/tools/rate-calculator', desc: 'Calculate your ideal hourly or day rate' },
  { name: 'BAS Preparation', href: '/tools/bas-preparation', desc: 'Get BAS-ready reports in one click' },
  { name: 'Late Payment Calculator', href: '/tools/late-payment-calculator', desc: 'Interest on overdue invoices' },
];

export default function InPerthPage() {
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
        <div className="inline-block rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-sm font-medium text-violet-400 mb-8">
          Invoicing Software for Perth
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Perth&apos;s mining capital runs on{' '}
          <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
            fast invoicing.
          </span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-slate-400 mb-10">
          Whether you&apos;re a FIFO contractor flying into the Pilbara, a Fremantle tradie, or a Perth CBD consultant —
          InvoiceFlow lets you create professional invoices in 30 seconds, track GST automatically, and get paid faster.
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
        <p className="text-center text-slate-400 text-sm mb-6">Trusted across Perth&apos;s biggest industries</p>
        <div className="flex flex-wrap justify-center gap-3">
          {industries.map((industry) => (
            <span
              key={industry.name}
              className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-300"
            >
              <span dangerouslySetInnerHTML={{ __html: industry.icon }} /> {industry.name}
            </span>
          ))}
        </div>
      </section>

      {/* Pain Points */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">
          Perth invoicing has unique challenges
        </h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          Remote sites, FIFO rosters, and high day rates mean your invoicing needs to be bulletproof — not an afterthought scribbled at the airport.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {painPoints.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 hover:border-violet-500/20 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-red-500/10 p-3 text-red-400 shrink-0">{item.icon}</div>
                <div>
                  <p className="text-red-300 text-sm font-medium mb-1 line-through decoration-red-500/50">
                    {item.problem}
                  </p>
                  <p className="text-violet-300 font-semibold">{item.solution}</p>
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
            { number: '180K+', label: 'WA sole traders', detail: 'Growing every year' },
            { number: '$75K', label: 'GST threshold', detail: 'We track it for you' },
            { number: '$19/mo', label: 'Pro plan', detail: 'Or free forever tier' },
            { number: '100+', label: 'Free tools', detail: 'GST, ABN, BAS & more' },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
              <p className="text-3xl font-bold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
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
          How InvoiceFlow compares in Perth
        </h2>
        <p className="text-center text-slate-400 mb-10 max-w-2xl mx-auto">
          You don&apos;t need a full accounting suite to send invoices between rosters. You need something fast, mobile, and built for Australian tax rules.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="py-4 px-4 text-slate-400 font-medium">Feature</th>
                <th className="py-4 px-4 text-violet-400 font-bold">InvoiceFlow</th>
                <th className="py-4 px-4 text-slate-400 font-medium">Xero ($35/mo)</th>
                <th className="py-4 px-4 text-slate-400 font-medium">MYOB ($36/mo)</th>
              </tr>
            </thead>
            <tbody className="text-slate-300">
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Free tier</td>
                <td className="py-3 px-4 text-violet-400 font-semibold">5 invoices/mo forever</td>
                <td className="py-3 px-4 text-slate-500">30-day trial only</td>
                <td className="py-3 px-4 text-slate-500">30-day trial only</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Monthly price</td>
                <td className="py-3 px-4 text-violet-400 font-semibold">$19/mo</td>
                <td className="py-3 px-4">$35/mo</td>
                <td className="py-3 px-4">$36/mo</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Mobile invoicing</td>
                <td className="py-3 px-4 text-violet-400">Yes — no app needed</td>
                <td className="py-3 px-4 text-emerald-400">App required</td>
                <td className="py-3 px-4 text-emerald-400">App required</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">GST auto-calculation</td>
                <td className="py-3 px-4 text-violet-400">Automatic</td>
                <td className="py-3 px-4 text-emerald-400">Automatic</td>
                <td className="py-3 px-4 text-emerald-400">Automatic</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">FIFO roster invoicing</td>
                <td className="py-3 px-4 text-violet-400">Date range + site fields</td>
                <td className="py-3 px-4 text-slate-500">Manual workaround</td>
                <td className="py-3 px-4 text-slate-500">Manual workaround</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Setup time</td>
                <td className="py-3 px-4 text-violet-400">30 seconds</td>
                <td className="py-3 px-4">30-60 minutes</td>
                <td className="py-3 px-4">30-60 minutes</td>
              </tr>
              <tr>
                <td className="py-3 px-4">Annual cost</td>
                <td className="py-3 px-4 text-violet-400 font-bold">$0 — $228/yr</td>
                <td className="py-3 px-4 text-red-300">$420/yr</td>
                <td className="py-3 px-4 text-red-300">$432/yr</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-6 text-center">
          <Link href="/compare" className="text-violet-400 hover:text-violet-300 text-sm font-medium">
            See full competitor comparisons &rarr;
          </Link>
        </div>
      </section>

      {/* Persona Links */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">InvoiceFlow for your profession</h2>
        <p className="text-center text-slate-400 mb-10">
          Perth-specific guides for the way you work.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { name: 'Freelancers', href: '/for/freelancers', desc: 'Designers, writers and digital pros in Perth' },
            { name: 'Contractors', href: '/for/contractors', desc: 'FIFO, mining services and project contractors' },
            { name: 'Sole Traders', href: '/for/sole-traders', desc: '180K+ WA sole traders and counting' },
            { name: 'Tradies', href: '/for/tradies', desc: 'Sparkies, plumbers and builders across Perth' },
            { name: 'Consultants', href: '/for/consultants', desc: 'Oil & gas, engineering and management consultants' },
            { name: 'Creatives', href: '/for/creatives', desc: 'Photographers, videographers and artists' },
          ].map((persona) => (
            <Link
              key={persona.name}
              href={persona.href}
              className="rounded-xl border border-white/5 bg-white/[0.02] p-5 hover:border-violet-500/20 hover:bg-white/[0.04] transition-all group"
            >
              <h3 className="font-semibold text-white group-hover:text-violet-400 transition-colors">
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
          Free tools for Perth businesses
        </h2>
        <p className="text-center text-slate-400 mb-10">
          No sign-up required. Use them right now, completely free.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {popularTools.map((tool) => (
            <Link
              key={tool.name}
              href={tool.href}
              className="rounded-xl border border-white/5 bg-white/[0.02] p-5 hover:border-violet-500/20 hover:bg-white/[0.04] transition-all group"
            >
              <h3 className="font-semibold text-white group-hover:text-violet-400 transition-colors">
                {tool.name}
              </h3>
              <p className="text-sm text-slate-400 mt-1">{tool.desc}</p>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/tools" className="text-violet-400 hover:text-violet-300 text-sm font-medium">
            Browse all 100+ free tools &rarr;
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Common questions from Perth businesses
        </h2>
        <div className="space-y-6">
          {faqSchema.mainEntity.map((faq, i) => (
            <details key={i} className="group rounded-xl border border-white/5 bg-white/[0.02] overflow-hidden">
              <summary className="cursor-pointer p-5 font-medium text-white hover:text-violet-400 transition-colors list-none flex justify-between items-center">
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
          Ready to streamline your Perth business invoicing?
        </h2>
        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
          From Fremantle to Subiaco, Joondalup to Rockingham — Perth freelancers and contractors are switching to faster, simpler invoicing. Start free today.
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
