import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Invoice Software for Freelancers Australia — InvoiceFlow',
  description:
    'Free invoice management built for Australian freelancers. 100+ free tools, GST calculator, AI invoice extraction, and professional invoice templates. Start free today.',
  alternates: { canonical: '/for/freelancers' },
  openGraph: {
    title: 'InvoiceFlow for Freelancers — Get Paid Faster, Spend Less on Admin',
    description:
      'AI-powered invoicing for Australian freelancers. Auto-detect invoices from Gmail, calculate GST, track payments, and export to CSV or QuickBooks. Free tier available.',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://invoiceflow-teal.vercel.app' },
    { '@type': 'ListItem', position: 2, name: 'For Freelancers', item: 'https://invoiceflow-teal.vercel.app/for/freelancers' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best invoicing app for freelancers in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'InvoiceFlow is purpose-built for Australian freelancers. Unlike Xero ($35/mo) or MYOB ($36/mo) which are full accounting platforms, InvoiceFlow focuses on what freelancers actually need: professional invoicing, automatic GST calculations, AI-powered invoice extraction from Gmail, and BAS-ready exports. It starts free with 5 invoices per month and includes 100+ free business tools.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do freelancers create invoices in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Australian freelancers must include specific details on tax invoices: your ABN, the date, description of services, GST amount (if registered), and total. InvoiceFlow\'s free invoice generator creates ATO-compliant invoices with all required fields pre-filled. For invoices over $1,000, additional details like buyer ABN and individual item amounts are required.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do Australian freelancers need to charge GST?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You must register for GST once your annual turnover reaches $75,000 (or $150,000 for non-profit). Below that threshold, GST registration is optional but can be beneficial if your clients are GST-registered businesses (they can claim the GST back). InvoiceFlow tracks your income and alerts you as you approach the threshold.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can InvoiceFlow help with BAS preparation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. InvoiceFlow tracks GST on every invoice and provides BAS-ready export data showing your total income, GST collected, and GST paid. This makes quarterly BAS preparation simple — export the data and enter it into the ATO portal or give it to your accountant. We also offer a free BAS Preparation Checklist tool.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does freelance invoicing software cost in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Prices range from free to $50+/month. Xero starts at $35/mo, FreshBooks at $24/mo, MYOB at $36/mo. InvoiceFlow offers a free tier (5 invoices/month) and Pro at $19/month with unlimited invoices. Most freelancers processing under 20 invoices/month save $200-400/year vs traditional accounting software.',
      },
    },
  ],
};

const features = [
  {
    title: 'AI Invoice Extraction',
    description: 'Connect Gmail and InvoiceFlow finds invoices automatically. AI extracts vendor, amount, date, ABN, and GST with 95%+ accuracy.',
    color: 'from-purple-500 to-pink-400',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
  },
  {
    title: 'GST Auto-Calculation',
    description: 'Every invoice gets automatic GST calculation. Track your $75K threshold and stay ATO-compliant without thinking about it.',
    color: 'from-emerald-500 to-teal-400',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: 'One-Click Export',
    description: 'Export to CSV, QuickBooks, or hand straight to your accountant. All data is BAS-ready with GST breakdowns.',
    color: 'from-blue-500 to-cyan-400',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
      </svg>
    ),
  },
  {
    title: '100+ Free Business Tools',
    description: 'GST calculator, invoice generator, rate calculator, ABN lookup, tax estimator, and 95+ more. All free, no sign-up needed.',
    color: 'from-amber-500 to-orange-400',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-3.06a1.5 1.5 0 010-2.58l5.1-3.06a1.5 1.5 0 011.639.065l4.472 3.06a1.5 1.5 0 010 2.45l-4.472 3.06a1.5 1.5 0 01-1.64.065z" />
      </svg>
    ),
  },
];

const freelancerTypes = [
  { type: 'Designers', tools: 'Invoice generator, rate calculator, service package builder', href: '/blog/invoicing-graphic-designers-australia' },
  { type: 'Developers', tools: 'Project timeline calculator, milestone payments, contract generator', href: '/blog/invoicing-web-developers-australia' },
  { type: 'Writers', tools: 'Rate calculator, invoice templates, tax deduction finder', href: '/blog/invoicing-copywriters-content-writers-australia' },
  { type: 'Photographers', tools: 'Quote generator, deposit invoicing, client intake forms', href: '/blog/invoicing-photographers-australia' },
  { type: 'Consultants', tools: 'Retainer calculator, rate card generator, NDA generator', href: '/blog/invoicing-consultants-australia' },
  { type: 'Trainers', tools: 'Session tracker, recurring invoices, payment reminders', href: '/blog/invoicing-personal-trainers-fitness-australia' },
];

const popularTools = [
  { name: 'Invoice Generator', href: '/tools/invoice-generator', desc: 'Create professional invoices' },
  { name: 'Hourly Rate Calculator', href: '/tools/rate-calculator', desc: 'Price your services right' },
  { name: 'GST Calculator', href: '/tools/gst-calculator', desc: 'Calculate GST instantly' },
  { name: 'Tax Estimator', href: '/tools/tax-estimator', desc: 'Know your tax bill' },
  { name: 'Contract Generator', href: '/tools/contract-generator', desc: 'Protect your work' },
  { name: 'Super Calculator', href: '/tools/super-calculator', desc: 'Plan your retirement' },
];

export default function ForFreelancersPage() {
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
        <div className="inline-block rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 text-sm font-medium text-purple-400 mb-8">
          Built for Australian Freelancers
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Spend less time on invoices,{' '}
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            more time on billable work
          </span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-slate-400 mb-10">
          InvoiceFlow automates the boring parts — finding invoices in Gmail, calculating GST, chasing payments.
          You focus on the work that actually pays.
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

      {/* Features */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">
          Everything a freelancer needs, nothing you don&apos;t
        </h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          We stripped out payroll, inventory, multi-entity accounting, and 47 other features you&apos;ll never use. What&apos;s left is exactly what freelancers need.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, i) => (
            <div key={i} className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 hover:border-purple-500/20 transition-colors">
              <div className="flex items-start gap-4">
                <div className={`rounded-xl bg-gradient-to-br ${feature.color} p-3 text-white shrink-0`}>
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">{feature.title}</h3>
                  <p className="text-sm text-slate-400">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/features" className="text-purple-400 hover:text-purple-300 text-sm font-medium">
            See all features &rarr;
          </Link>
        </div>
      </section>

      {/* By Profession */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">
          Tailored for your type of freelancing
        </h2>
        <p className="text-center text-slate-400 mb-10 max-w-2xl mx-auto">
          We&apos;ve written invoicing guides for 30+ professions. Here are some of the most popular.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {freelancerTypes.map((ft) => (
            <Link
              key={ft.href}
              href={ft.href}
              className="rounded-xl border border-white/5 bg-white/[0.02] p-5 hover:border-purple-500/20 hover:bg-white/[0.04] transition-all group"
            >
              <h3 className="font-semibold text-white group-hover:text-purple-400 transition-colors mb-1">
                {ft.type}
              </h3>
              <p className="text-xs text-slate-500">{ft.tools}</p>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/blog/profession-guides" className="text-teal-400 hover:text-teal-300 text-sm font-medium">
            View all 30+ profession guides &rarr;
          </Link>
        </div>
      </section>

      {/* Popular Tools */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">
          Free tools for freelancers
        </h2>
        <p className="text-center text-slate-400 mb-10">
          No sign-up. No strings. Just useful tools.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {popularTools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="rounded-xl border border-white/5 bg-white/[0.02] p-5 hover:border-purple-500/20 hover:bg-white/[0.04] transition-all group"
            >
              <h3 className="font-semibold text-white group-hover:text-purple-400 transition-colors">
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

      {/* Pricing */}
      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Simple pricing for freelancers</h2>
        <p className="text-slate-400 mb-10 max-w-xl mx-auto">
          No hidden fees. No long-term contracts. Cancel anytime.
        </p>
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
            <h3 className="font-bold text-white mb-1">Free</h3>
            <div className="text-3xl font-bold text-white mb-3">$0</div>
            <p className="text-sm text-slate-400 mb-4">5 invoices/mo, Gmail sync, CSV export, 100+ tools</p>
            <Link href="/signup"><Button variant="secondary" size="sm" className="w-full">Get Started</Button></Link>
          </div>
          <div className="rounded-2xl border border-purple-500/30 bg-purple-500/5 p-6 ring-1 ring-purple-500/20">
            <div className="text-xs text-purple-400 font-medium mb-2">MOST POPULAR</div>
            <h3 className="font-bold text-white mb-1">Pro</h3>
            <div className="text-3xl font-bold text-white mb-3">$19<span className="text-base font-normal text-slate-400">/mo</span></div>
            <p className="text-sm text-slate-400 mb-4">Unlimited invoices, priority AI, QuickBooks export</p>
            <Link href="/signup"><Button size="sm" className="w-full">Start Free Trial</Button></Link>
          </div>
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
            <h3 className="font-bold text-white mb-1">Premium</h3>
            <div className="text-3xl font-bold text-white mb-3">$39<span className="text-base font-normal text-slate-400">/mo</span></div>
            <p className="text-sm text-slate-400 mb-4">Everything in Pro + multi-business, API, white-label</p>
            <Link href="/signup"><Button variant="secondary" size="sm" className="w-full">Start Free Trial</Button></Link>
          </div>
        </div>
        <div className="mt-6">
          <Link href="/pricing" className="text-teal-400 hover:text-teal-300 text-sm font-medium">
            Compare plans in detail &rarr;
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Freelancer invoicing FAQ
        </h2>
        <div className="space-y-6">
          {faqSchema.mainEntity.map((faq, i) => (
            <details key={i} className="group rounded-xl border border-white/5 bg-white/[0.02] overflow-hidden">
              <summary className="cursor-pointer p-5 font-medium text-white hover:text-purple-400 transition-colors list-none flex justify-between items-center">
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
          Stop doing invoicing the hard way
        </h2>
        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
          Australian freelancers are switching from spreadsheets and overpriced accounting software to InvoiceFlow. Start free, upgrade when you&apos;re ready.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/signup">
            <Button size="lg">Start Free — 5 Invoices/Month</Button>
          </Link>
          <Link href="/tools" className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-teal-400 hover:text-teal-300 transition-colors">
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
