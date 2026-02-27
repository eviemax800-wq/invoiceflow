import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Invoicing Software for Cleaners & Cleaning Businesses in Australia — InvoiceFlow',
  description:
    'Free invoicing tools built for Australian cleaning businesses. Quote to invoice, recurring billing, job tracking, and branded invoices for residential cleaners, commercial cleaners, end of lease cleaners and more.',
  alternates: { canonical: '/for/cleaners' },
  openGraph: {
    title: 'InvoiceFlow for Cleaners — Bill Your Clients, Grow Your Business',
    description:
      'Stop chasing payments from property managers and landlords. InvoiceFlow gives cleaners automated billing, quote-to-invoice workflows, and recurring invoicing — starting free.',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://invoiceflow-teal.vercel.app' },
    { '@type': 'ListItem', position: 2, name: 'For Cleaners', item: 'https://invoiceflow-teal.vercel.app/for/cleaners' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do cleaners need invoicing software?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Whether you run a residential cleaning business, commercial cleaning company, or end of lease cleaning service, professional invoicing software helps you stay compliant with the ATO, prove your income for loans or rental applications, and present a professional image to clients and property managers. Sending informal text messages or handwritten quotes makes it harder to track payments, enforce terms, and prepare your tax return. Invoicing software automates payment reminders, tracks outstanding balances, and generates tax-ready reports — so you can focus on cleaning, not paperwork.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can InvoiceFlow handle regular recurring cleaning clients?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. InvoiceFlow supports automated recurring invoices that are sent to your regular clients on a schedule you choose — weekly, fortnightly, monthly, or custom. This is perfect for cleaners with ongoing residential clients, weekly office cleaning contracts, or regular commercial arrangements. Set it once and InvoiceFlow handles the rest, including automatic payment reminders if an invoice goes overdue. You can also adjust the amount per cycle if the scope of the clean changes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is InvoiceFlow free for cleaners?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'InvoiceFlow offers a free forever tier with 5 invoices per month, Gmail sync, CSV export, and access to 100+ free business tools including a GST calculator, invoice generator, and ABN lookup. Most solo cleaners just starting out can run on the free tier. Paid plans start at $19/month for unlimited invoices, recurring billing, and client management features.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I create quotes and convert them to invoices?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. InvoiceFlow has a built-in quote-to-invoice workflow designed for cleaning businesses. You can create a detailed quote for a job — whether it is a one-off end of lease clean, a regular weekly service, or a commercial contract — and convert it to an invoice with one click once the client approves. This means no more scribbling quotes on paper and forgetting what was agreed. Every quote is tracked, and you have a clear record from estimate to payment.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does InvoiceFlow help cleaners with GST?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'InvoiceFlow automatically adds 10% GST to every invoice, tracks your annual turnover against the $75,000 GST registration threshold, and generates BAS-ready reports at the end of each quarter. Many cleaners cross the $75K threshold without realising it — InvoiceFlow monitors your revenue so you know exactly when you need to register for GST. For registered cleaning businesses, GST is calculated automatically on every invoice and quote — no manual maths required.',
      },
    },
  ],
};

const painPoints = [
  {
    problem: 'Scribbling quotes on paper and forgetting what was agreed',
    solution: 'Digital quotes that convert to invoices with one click — every job tracked from estimate to payment.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    problem: 'Chasing payments from property managers and landlords',
    solution: 'Automated payment reminders and overdue tracking — get paid without the awkward follow-ups.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
  {
    problem: 'No system for tracking regular weekly/fortnightly clients',
    solution: 'One-click recurring invoices for ongoing clients — set it once, get paid automatically every week.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182M2.985 19.644l3.181-3.182" />
      </svg>
    ),
  },
  {
    problem: "Can't prove income for loans or rental applications",
    solution: 'Professional invoice records and income reports — show the bank exactly what you earn.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
];

const cleanerTypes = [
  { name: 'Residential Cleaner', icon: '🏠' },
  { name: 'Commercial Cleaner', icon: '🏢' },
  { name: 'End of Lease Cleaner', icon: '🔑' },
  { name: 'Window Cleaner', icon: '🪟' },
  { name: 'Carpet Cleaner', icon: '🧹' },
  { name: 'Office Cleaner', icon: '🖥️' },
  { name: 'Industrial Cleaner', icon: '🏭' },
  { name: 'Pool Cleaner', icon: '🏊' },
];

const popularTools = [
  { name: 'GST Calculator', href: '/tools/gst-calculator', desc: 'Calculate GST on cleaning jobs and contracts' },
  { name: 'Invoice Generator', href: '/tools/invoice-generator', desc: 'Create professional cleaning invoices instantly' },
  { name: 'Rate Calculator', href: '/tools/rate-calculator', desc: 'Work out your ideal hourly or per-job cleaning rate' },
  { name: 'Quote Generator', href: '/tools/invoice-generator', desc: 'Send detailed cleaning quotes to clients and agents' },
  { name: 'Late Payment Calculator', href: '/tools/late-payment-interest-calculator', desc: 'Calculate interest on overdue cleaning invoices' },
  { name: 'ABN Lookup', href: '/tools/abn-lookup', desc: 'Verify client and property manager ABNs' },
];

export default function ForCleanersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Navigation */}
      <nav className="border-b border-white/5 bg-slate-950/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
          <Link href="/" className="text-xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
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
          Built for Australian Cleaning Businesses
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Bill your clients.{' '}
          <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
            Grow your business.
          </span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-slate-400 mb-10">
          Stop chasing payments from property managers and landlords. InvoiceFlow lets residential cleaners, commercial cleaners, and end of lease
          specialists invoice clients for jobs, contracts, and recurring cleans — in 30 seconds. GST sorted automatically.
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

      {/* Cleaner Types */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <p className="text-center text-slate-400 text-sm mb-6">Trusted by cleaning businesses across every specialty</p>
        <div className="flex flex-wrap justify-center gap-3">
          {cleanerTypes.map((cleaner) => (
            <span
              key={cleaner.name}
              className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-300"
            >
              {cleaner.icon} {cleaner.name}
            </span>
          ))}
        </div>
      </section>

      {/* Pain Points */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">
          Cleaning invoicing shouldn&apos;t be this painful
        </h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          You&apos;re a cleaner, not a bookkeeper. You need to bill clients quickly, track job payments, and get back to running your cleaning business.
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

      {/* Key Numbers */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { number: '120K+', label: 'Cleaners in Australia', detail: 'A massive workforce' },
            { number: '$12B', label: 'Australian cleaning industry', detail: 'And growing every year' },
            { number: '30s', label: 'To create an invoice', detail: 'Between cleaning jobs' },
            { number: '$0', label: 'To start', detail: 'Free tier, forever' },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
              <p className="text-3xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
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
          How InvoiceFlow compares for cleaners
        </h2>
        <p className="text-center text-slate-400 mb-10 max-w-2xl mx-auto">
          You don&apos;t need a bloated field service platform. You need invoices that look professional, recurring billing that works, and quotes that convert to invoices with one click.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="py-4 px-4 text-slate-400 font-medium">Feature</th>
                <th className="py-4 px-4 text-teal-400 font-bold">InvoiceFlow</th>
                <th className="py-4 px-4 text-slate-400 font-medium">ServiceM8 ($49/mo)</th>
                <th className="py-4 px-4 text-slate-400 font-medium">Jobber ($39/mo)</th>
              </tr>
            </thead>
            <tbody className="text-slate-300">
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Free tier</td>
                <td className="py-3 px-4 text-teal-400 font-semibold">5 invoices/mo forever</td>
                <td className="py-3 px-4 text-slate-500">14-day trial only</td>
                <td className="py-3 px-4 text-slate-500">14-day trial only</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Monthly price</td>
                <td className="py-3 px-4 text-teal-400 font-semibold">$19/mo</td>
                <td className="py-3 px-4">$49/mo</td>
                <td className="py-3 px-4">$39/mo</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Quote to invoice</td>
                <td className="py-3 px-4 text-teal-400">One-click convert</td>
                <td className="py-3 px-4 text-teal-400">Supported</td>
                <td className="py-3 px-4 text-teal-400">Supported</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Recurring billing</td>
                <td className="py-3 px-4 text-teal-400">One-click setup</td>
                <td className="py-3 px-4 text-teal-400">Supported</td>
                <td className="py-3 px-4 text-teal-400">Supported</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Job tracking</td>
                <td className="py-3 px-4 text-teal-400">Built-in</td>
                <td className="py-3 px-4 text-teal-400">Built-in</td>
                <td className="py-3 px-4 text-teal-400">Built-in</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Mobile-friendly</td>
                <td className="py-3 px-4 text-teal-400">Fully responsive</td>
                <td className="py-3 px-4 text-teal-400">Mobile app</td>
                <td className="py-3 px-4 text-teal-400">Mobile app</td>
              </tr>
              <tr>
                <td className="py-3 px-4">Annual cost</td>
                <td className="py-3 px-4 text-teal-400 font-bold">$0 — $228/yr</td>
                <td className="py-3 px-4 text-red-300">$588/yr</td>
                <td className="py-3 px-4 text-red-300">$468/yr</td>
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

      {/* Popular Tools */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">
          Free tools every cleaner needs
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

      {/* Guides */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">Guides for cleaners</h2>
        <p className="text-center text-slate-400 mb-10">
          Plain-English articles on invoicing, GST, and running a cleaning business in Australia.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { title: 'GST Guide for Australian Freelancers', href: '/blog/gst-guide-australian-freelancers' },
            { title: 'How Much Tax Do Freelancers Pay?', href: '/blog/how-much-tax-freelancers-pay-australia' },
            { title: 'Tax Deductions for Freelancers', href: '/blog/tax-deductions-australian-freelancers' },
            { title: 'How to Start Freelancing in Australia', href: '/blog/how-to-start-freelancing-australia' },
            { title: 'BAS Guide for Sole Traders', href: '/blog/bas-guide-australian-freelancers' },
            { title: 'Late Payment Interest Guide', href: '/blog/late-payment-interest-australia' },
          ].map((article) => (
            <Link
              key={article.href}
              href={article.href}
              className="rounded-xl border border-white/5 bg-white/[0.02] p-5 hover:border-teal-500/20 hover:bg-white/[0.04] transition-all"
            >
              <p className="font-medium text-white text-sm">{article.title}</p>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/blog" className="text-teal-400 hover:text-teal-300 text-sm font-medium">
            Read all 125+ articles &rarr;
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Common questions from cleaners
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
          Ready to professionalise your cleaning invoices?
        </h2>
        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
          Join thousands of Australian cleaners who bill clients automatically, track job payments, and never chase a late payer again. Start free today.
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
