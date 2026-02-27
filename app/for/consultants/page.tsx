import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Invoicing Software for Australian Consultants — InvoiceFlow',
  description:
    'Free invoicing tools for Australian consultants. Retainer tracking, hourly billing, project-based invoicing, and AI-powered invoice management for management, IT, and business consultants.',
  alternates: { canonical: '/for/consultants' },
  openGraph: {
    title: 'InvoiceFlow for Consultants — Professional Invoicing Without the Overhead',
    description:
      'Stop wasting billable hours on admin. InvoiceFlow gives consultants retainer tracking, time-based billing, and automatic GST — starting free.',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://invoiceflow-teal.vercel.app' },
    { '@type': 'ListItem', position: 2, name: 'For Consultants', item: 'https://invoiceflow-teal.vercel.app/for/consultants' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What invoicing software do Australian consultants use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Many Australian consultants use Xero ($35/mo) or FreshBooks ($24/mo), but these are designed for businesses with complex accounting needs. InvoiceFlow is purpose-built for consultants who need professional invoicing, retainer tracking, and time-based billing without the accounting overhead. It starts free and the Pro plan is $19/month — saving you $200+/year vs Xero.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does InvoiceFlow support retainer-based billing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. InvoiceFlow supports recurring invoicing for retainer clients, letting you set up automatic monthly or quarterly invoices with pre-defined amounts. Track retainer hours used vs available, and generate end-of-period summaries for clients. Perfect for management consultants, IT consultants, and advisory professionals on monthly retainers.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I track billable hours in InvoiceFlow?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'InvoiceFlow supports time-based invoicing where you can itemise hours by task, apply different hourly rates for different service types, and generate detailed invoices showing exactly what the client is paying for. This is essential for consultants who bill by the hour and need transparent, audit-ready records.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is InvoiceFlow free for consultants?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'InvoiceFlow offers a free forever tier with 5 invoices per month — enough for consultants with a small number of high-value clients. The free tier includes Gmail sync, CSV export, and access to 100+ free business tools. Paid plans start at $19/month for unlimited invoices and AI-powered features.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does InvoiceFlow handle GST for consulting services?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Consulting services in Australia are subject to 10% GST once you exceed the $75,000 annual turnover threshold. InvoiceFlow automatically adds GST to every invoice, tracks your annual revenue against the threshold, ensures all invoices include your ABN and GST details as required by the ATO, and generates BAS-ready data for quarterly lodgement.',
      },
    },
  ],
};

const painPoints = [
  {
    problem: 'Spending billable hours on invoice admin',
    solution: 'Create professional invoices in 30 seconds. More time consulting, less time invoicing.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    problem: 'Clients questioning vague invoices',
    solution: 'Detailed time-based invoices with task breakdowns. Full transparency, no disputes.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
      </svg>
    ),
  },
  {
    problem: 'Managing retainers across multiple clients',
    solution: 'Retainer tracking with hours used, remaining balance, and automatic monthly invoicing.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>
    ),
  },
  {
    problem: 'Paying for accounting features you never touch',
    solution: 'InvoiceFlow starts free. Pro is $19/month — save $200+/yr vs Xero or FreshBooks.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
];

const consultingTypes = [
  { name: 'Management Consulting', icon: '📊' },
  { name: 'IT Consulting', icon: '💻' },
  { name: 'Business Strategy', icon: '🎯' },
  { name: 'HR & Recruitment', icon: '👥' },
  { name: 'Marketing & Digital', icon: '📱' },
  { name: 'Financial Advisory', icon: '📈' },
  { name: 'Change Management', icon: '🔄' },
  { name: 'Project Management', icon: '📋' },
];

const popularTools = [
  { name: 'Hourly Rate Calculator', href: '/tools/rate-calculator', desc: 'Find your ideal consulting rate' },
  { name: 'Invoice Generator', href: '/tools/invoice-generator', desc: 'Professional tax invoices' },
  { name: 'Profit Margin Calculator', href: '/tools/profit-margin-calculator', desc: 'Track project profitability' },
  { name: 'Service Package Builder', href: '/tools/service-package-builder', desc: 'Create tiered service offerings' },
  { name: 'GST Calculator', href: '/tools/gst-calculator', desc: 'Instant GST calculations' },
  { name: 'Client Red Flag Checker', href: '/tools/client-red-flag-checker', desc: 'Vet potential clients' },
];

export default function ForConsultantsPage() {
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
          Built for Australian Consultants
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Stop trading{' '}
          <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
            billable hours
          </span>{' '}
          for invoice admin
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-slate-400 mb-10">
          Every hour you spend on invoicing is an hour you&apos;re not consulting. InvoiceFlow handles retainer
          tracking, time-based billing, and GST — so you can focus on delivering value to clients.
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

      {/* Consulting Types */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <p className="text-center text-slate-400 text-sm mb-6">Used by consultants across every specialisation</p>
        <div className="flex flex-wrap justify-center gap-3">
          {consultingTypes.map((type) => (
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
          Consultant invoicing shouldn&apos;t eat into billable time
        </h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          Your expertise is worth $150-$500+/hour. Why are you spending that time wrestling with invoices and spreadsheets?
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
            { number: '$200+', label: 'Saved per year vs Xero', detail: 'On average for consultants' },
            { number: '100+', label: 'Free business tools', detail: 'Rate calculators, templates & more' },
            { number: '5 min', label: 'Monthly invoice time', detail: 'Down from hours of admin' },
            { number: '$0', label: 'To start', detail: 'Free tier, forever' },
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
          How InvoiceFlow compares for consultants
        </h2>
        <p className="text-center text-slate-400 mb-10 max-w-2xl mx-auto">
          Full accounting suites are overkill for consultants. You need professional invoicing, not a bookkeeping platform.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="py-4 px-4 text-slate-400 font-medium">Feature</th>
                <th className="py-4 px-4 text-violet-400 font-bold">InvoiceFlow</th>
                <th className="py-4 px-4 text-slate-400 font-medium">FreshBooks ($24/mo)</th>
                <th className="py-4 px-4 text-slate-400 font-medium">Xero ($35/mo)</th>
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
                <td className="py-3 px-4">$24/mo</td>
                <td className="py-3 px-4">$35/mo</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Time-based billing</td>
                <td className="py-3 px-4 text-violet-400">Task-level detail</td>
                <td className="py-3 px-4 text-emerald-400">Built-in timer</td>
                <td className="py-3 px-4 text-slate-500">Add-on required</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">AI invoice extraction</td>
                <td className="py-3 px-4 text-violet-400">Included</td>
                <td className="py-3 px-4 text-slate-500">Not included</td>
                <td className="py-3 px-4 text-slate-500">Hubdoc add-on</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Free business tools</td>
                <td className="py-3 px-4 text-violet-400 font-semibold">100+ tools</td>
                <td className="py-3 px-4 text-slate-500">None</td>
                <td className="py-3 px-4 text-slate-500">None</td>
              </tr>
              <tr>
                <td className="py-3 px-4">Annual cost</td>
                <td className="py-3 px-4 text-violet-400 font-bold">$0 — $228/yr</td>
                <td className="py-3 px-4 text-red-300">$288/yr</td>
                <td className="py-3 px-4 text-red-300">$420/yr</td>
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

      {/* Popular Tools */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">
          Free tools for consultants
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

      {/* Guides */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">Consultant business guides</h2>
        <p className="text-center text-slate-400 mb-10">
          Practical articles on billing, pricing, and running a consulting practice in Australia.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { title: 'How to Set Your Consulting Rate', href: '/blog/how-to-set-freelance-rates-australia' },
            { title: 'GST Guide for Australian Freelancers', href: '/blog/gst-guide-australian-freelancers' },
            { title: 'How Much Tax Do Freelancers Pay?', href: '/blog/how-much-tax-freelancers-pay-australia' },
            { title: 'Tax Deductions for Freelancers', href: '/blog/tax-deductions-australian-freelancers' },
            { title: 'Sole Trader vs Company in Australia', href: '/blog/sole-trader-vs-company-australia' },
            { title: 'BAS Guide for Sole Traders', href: '/blog/bas-guide-australian-freelancers' },
          ].map((article) => (
            <Link
              key={article.href}
              href={article.href}
              className="rounded-xl border border-white/5 bg-white/[0.02] p-5 hover:border-violet-500/20 hover:bg-white/[0.04] transition-all"
            >
              <p className="font-medium text-white text-sm">{article.title}</p>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/blog" className="text-violet-400 hover:text-violet-300 text-sm font-medium">
            Read all 125+ articles &rarr;
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Common questions from consultants
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
          Ready to reclaim your billable hours?
        </h2>
        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
          Join consultants across Australia who switched from overpriced accounting software to InvoiceFlow. Spend 5 minutes on invoicing instead of 5 hours.
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
