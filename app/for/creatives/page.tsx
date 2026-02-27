import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Invoicing Software for Creative Professionals — InvoiceFlow',
  description:
    'Free invoicing tools for Australian designers, photographers, videographers, and creative professionals. Project-based billing, milestone payments, usage rights tracking, and AI-powered invoice management.',
  alternates: { canonical: '/for/creatives' },
  openGraph: {
    title: 'InvoiceFlow for Creatives — Beautiful Invoicing for Beautiful Work',
    description:
      'Stop using ugly spreadsheets to invoice for beautiful work. InvoiceFlow gives creatives project-based billing, deposit tracking, and automatic GST — starting free.',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://invoiceflow-teal.vercel.app' },
    { '@type': 'ListItem', position: 2, name: 'For Creatives', item: 'https://invoiceflow-teal.vercel.app/for/creatives' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What invoicing software do Australian creatives use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Many Australian creatives use FreshBooks, Wave, or Xero, but these tools are designed for general business accounting. InvoiceFlow is built for creative professionals who need project-based invoicing, deposit and milestone tracking, and usage rights documentation. It starts free and Pro is $19/month — significantly less than Xero ($35/mo) or FreshBooks ($24/mo).',
      },
    },
    {
      '@type': 'Question',
      name: 'Does InvoiceFlow support deposit and milestone payments?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. InvoiceFlow supports split invoicing for creative projects — send a deposit invoice upfront (commonly 30-50%), milestone invoices during the project, and a final balance invoice on delivery. Track payment status across each stage and see the total project value at a glance.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I include usage rights and licensing terms on invoices?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'InvoiceFlow allows you to add custom notes and terms to every invoice, making it easy to document usage rights, licensing scope, exclusivity periods, and deliverable specifications. This protects both you and your client and creates a clear paper trail for IP ownership.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is InvoiceFlow free for freelance designers and photographers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'InvoiceFlow offers a free forever tier with 5 invoices per month — often enough for creatives working on fewer, higher-value projects. The free tier includes Gmail sync, CSV export, and access to 100+ free business tools including a rate calculator, contract generator, and project brief template. Paid plans start at $19/month.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do creative professionals handle GST in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Creative services (design, photography, videography, illustration) are subject to 10% GST once your annual turnover exceeds $75,000. Many creatives are surprised when they cross this threshold. InvoiceFlow tracks your revenue automatically, alerts you when you approach $75K, and ensures all invoices are GST-compliant with proper ABN display as required by the ATO.',
      },
    },
  ],
};

const painPoints = [
  {
    problem: 'Ugly spreadsheet invoices for beautiful creative work',
    solution: 'Clean, professional invoices that match the quality of your portfolio.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
  {
    problem: 'Clients who "forgot" about the remaining 50% payment',
    solution: 'Milestone invoicing with automatic reminders. Payment tracked at every stage.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    problem: 'Scope creep with no paper trail',
    solution: 'Detailed project invoices with deliverables, revisions, and usage rights documented.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    problem: 'Paying $35/month for features designed for accountants',
    solution: 'InvoiceFlow starts free. Pro is $19/month — more money for gear and software.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
];

const creativeTypes = [
  { name: 'Graphic Design', icon: '🎨' },
  { name: 'Photography', icon: '📸' },
  { name: 'Videography', icon: '🎬' },
  { name: 'Illustration', icon: '✏️' },
  { name: 'Web Design', icon: '🌐' },
  { name: 'Copywriting', icon: '✍️' },
  { name: 'Animation & Motion', icon: '🎞️' },
  { name: 'Brand Identity', icon: '💎' },
];

const popularTools = [
  { name: 'Hourly Rate Calculator', href: '/tools/rate-calculator', desc: 'Find your ideal creative rate' },
  { name: 'Invoice Generator', href: '/tools/invoice-generator', desc: 'Professional project invoices' },
  { name: 'Project Brief Generator', href: '/tools/project-brief-generator', desc: 'Client brief templates' },
  { name: 'Contract Generator', href: '/tools/contract-generator', desc: 'Service agreements with IP clauses' },
  { name: 'Service Package Builder', href: '/tools/service-package-builder', desc: 'Tiered creative packages' },
  { name: 'Client Onboarding Checklist', href: '/tools/client-onboarding-checklist', desc: 'Onboarding workflow' },
];

export default function ForCreativesPage() {
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
          Built for Creative Professionals
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Beautiful invoicing for{' '}
          <span className="bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">
            beautiful work
          </span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-slate-400 mb-10">
          Your work is stunning. Your invoices should be too. InvoiceFlow gives designers, photographers,
          and videographers project-based billing, deposit tracking, and automatic GST — without the accounting bloat.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/signup">
            <Button size="lg">Start Free — No Credit Card</Button>
          </Link>
          <Link href="/tools/rate-calculator">
            <Button variant="secondary" size="lg">Calculate Your Rate</Button>
          </Link>
        </div>
        <p className="mt-4 text-sm text-slate-500">
          Free tier: 5 invoices/month, Gmail sync, CSV export, 100+ free tools
        </p>
      </section>

      {/* Creative Types */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <p className="text-center text-slate-400 text-sm mb-6">Used by creatives across every discipline</p>
        <div className="flex flex-wrap justify-center gap-3">
          {creativeTypes.map((type) => (
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
          Creative invoicing has unique challenges
        </h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          Deposits, milestone payments, usage rights, scope creep — creative work isn&apos;t like selling widgets. Your invoicing tool should understand that.
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
            { number: '30-50%', label: 'Typical creative deposit', detail: 'Track it automatically' },
            { number: '$75K', label: 'GST threshold', detail: 'We track your revenue' },
            { number: '100+', label: 'Free creative tools', detail: 'Briefs, contracts, rates & more' },
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
          How InvoiceFlow compares for creatives
        </h2>
        <p className="text-center text-slate-400 mb-10 max-w-2xl mx-auto">
          You need project billing and deposit tracking, not double-entry accounting and payroll management.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="py-4 px-4 text-slate-400 font-medium">Feature</th>
                <th className="py-4 px-4 text-rose-400 font-bold">InvoiceFlow</th>
                <th className="py-4 px-4 text-slate-400 font-medium">HoneyBook ($19/mo)</th>
                <th className="py-4 px-4 text-slate-400 font-medium">FreshBooks ($24/mo)</th>
              </tr>
            </thead>
            <tbody className="text-slate-300">
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Free tier</td>
                <td className="py-3 px-4 text-rose-400 font-semibold">5 invoices/mo forever</td>
                <td className="py-3 px-4 text-slate-500">7-day trial only</td>
                <td className="py-3 px-4 text-slate-500">30-day trial only</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Monthly price</td>
                <td className="py-3 px-4 text-rose-400 font-semibold">$19/mo</td>
                <td className="py-3 px-4">$19/mo (USD)</td>
                <td className="py-3 px-4">$24/mo</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Deposit invoicing</td>
                <td className="py-3 px-4 text-rose-400">Built-in milestones</td>
                <td className="py-3 px-4 text-emerald-400">Built-in</td>
                <td className="py-3 px-4 text-emerald-400">Partial payments</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Australian GST</td>
                <td className="py-3 px-4 text-rose-400">Automatic, ATO-compliant</td>
                <td className="py-3 px-4 text-slate-500">US-focused</td>
                <td className="py-3 px-4 text-emerald-400">Supported</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Free business tools</td>
                <td className="py-3 px-4 text-rose-400 font-semibold">100+ tools</td>
                <td className="py-3 px-4 text-slate-500">None</td>
                <td className="py-3 px-4 text-slate-500">None</td>
              </tr>
              <tr>
                <td className="py-3 px-4">Annual cost</td>
                <td className="py-3 px-4 text-rose-400 font-bold">$0 — $228/yr</td>
                <td className="py-3 px-4 text-red-300">~$360/yr (USD)</td>
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
          Free tools for creative professionals
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
        <h2 className="text-3xl font-bold text-center mb-4">Guides for creative professionals</h2>
        <p className="text-center text-slate-400 mb-10">
          Practical business advice for designers, photographers, and other creatives in Australia.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { title: 'How to Set Your Creative Rate', href: '/blog/how-to-set-freelance-rates-australia' },
            { title: 'Freelance Contract Essentials', href: '/blog/freelance-contracts-australia' },
            { title: 'GST Guide for Australian Freelancers', href: '/blog/gst-guide-australian-freelancers' },
            { title: 'Tax Deductions for Freelancers', href: '/blog/tax-deductions-australian-freelancers' },
            { title: 'How Much Tax Do Freelancers Pay?', href: '/blog/how-much-tax-freelancers-pay-australia' },
            { title: 'How to Start Freelancing in Australia', href: '/blog/how-to-start-freelancing-australia' },
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
          Common questions from creatives
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
          Ready to invoice like a professional creative?
        </h2>
        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
          Join creative professionals across Australia who send polished invoices, track project payments, and spend more time creating. Start free today.
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
