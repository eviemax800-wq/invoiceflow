import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Xero vs Wave 2026: Which Is Better for Australian Freelancers? | InvoiceFlow',
  description:
    'Xero ($35/mo) vs Wave ($19/mo) compared for Australian freelancers. Features, pricing, GST compliance, and a smarter free alternative.',
  alternates: { canonical: '/compare/xero-vs-wave' },
  keywords: ['xero vs wave', 'xero vs wave accounting', 'wave vs xero for freelancers', 'best invoicing software australia 2026'],
  openGraph: {
    title: 'Xero vs Wave 2026 — AU Market Leader vs Former Free Platform',
    description: 'Xero charges $35/mo. Wave charges $19/mo (and used to be free). Which is better? Plus a free Australian alternative.',
  },
};

const siteUrl = 'https://invoiceflow-teal.vercel.app';

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
    { '@type': 'ListItem', position: 2, name: 'Compare', item: `${siteUrl}/compare` },
    { '@type': 'ListItem', position: 3, name: 'Xero vs Wave', item: `${siteUrl}/compare/xero-vs-wave` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is Xero better than Wave for Australian businesses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Xero is significantly better for Australian businesses. Xero holds 78% of the Australian cloud accounting market, has deep ATO integration, supports Single Touch Payroll, and is built for Australian tax compliance. Wave was designed for the North American market and has minimal Australian compliance features. However, both are overbuilt for freelancers who just need invoicing — InvoiceFlow offers full GST/ABN compliance at $0-19/mo.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Wave still free in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Wave removed its free plan after being acquired by H&R Block for $405M. Wave Pro now costs $19/mo. The free tier that made Wave popular has been discontinued. Many users also report payment holds lasting 3-7 months on amounts over $50K. For Australian freelancers wanting genuinely free invoicing, InvoiceFlow offers 5 invoices/month at no cost.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is Xero so expensive for just invoicing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Xero is a full accounting suite, not just an invoicing tool. The entry-level Ignite plan at $35/mo includes double-entry bookkeeping, bank reconciliation, BAS preparation, and payroll — features most freelancers never use. It also caps invoicing at 20 per month, forcing you to upgrade to $75/mo for unlimited. InvoiceFlow focuses purely on invoicing at $0-19/mo.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I migrate from Wave to Xero or InvoiceFlow?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Wave allows CSV export of your invoices, clients, and transactions. Xero has a migration tool for importing from other platforms. InvoiceFlow supports client and invoice data import. If you\'re a freelancer leaving Wave, InvoiceFlow is the faster migration path — purpose-built for invoicing without the accounting overhead of Xero.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which has better payment processing: Xero or Wave?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Xero integrates with Stripe and GoCardless for payment processing but charges through those providers. Wave has built-in payments at 2.9% + $0.60 per transaction, but users report payment holds lasting months. InvoiceFlow lets you connect your own Stripe account with no platform fees on top — you only pay Stripe\'s standard rates.',
      },
    },
  ],
};

const features = [
  { feature: 'Starting price', xero: '$35/mo (Ignite)', wave: '$19/mo (Pro)', invoiceflow: 'Free', winner: 'invoiceflow' },
  { feature: 'Free tier', xero: 'No', wave: 'No (removed)', invoiceflow: 'Yes (5/mo)', winner: 'invoiceflow' },
  { feature: 'Invoice cap', xero: '20/mo (Ignite)', wave: 'Unlimited', invoiceflow: 'Unlimited (Pro)', winner: 'wave-if' },
  { feature: 'GST compliance (AU)', xero: 'Full (ATO integrated)', wave: 'Minimal', invoiceflow: 'Full', winner: 'xero' },
  { feature: 'AU market share', xero: '78%', wave: '<1%', invoiceflow: 'New', winner: 'xero' },
  { feature: 'Bank reconciliation', xero: 'Built-in', wave: 'Basic', invoiceflow: 'Not included', winner: 'xero' },
  { feature: 'AI features', xero: 'JAX (accounting)', wave: 'None', invoiceflow: 'Gemini AI', winner: 'invoiceflow' },
  { feature: 'Payment processing', xero: 'Stripe/GoCardless', wave: '2.9% + $0.60', invoiceflow: 'Your own Stripe', winner: 'invoiceflow' },
  { feature: 'Payment hold risk', xero: 'None', wave: 'High (3-7 months)', invoiceflow: 'None', winner: 'xero-if' },
  { feature: 'Trustpilot', xero: '3.8/5', wave: '1.2/5', invoiceflow: 'New', winner: 'xero' },
  { feature: 'Single Touch Payroll', xero: 'Yes', wave: 'No', invoiceflow: 'Not needed', winner: 'xero' },
  { feature: 'Ease of use', xero: 'Moderate', wave: 'Simple', invoiceflow: 'Simplest', winner: 'invoiceflow' },
];

export default function XeroVsWavePage() {
  return (
    <div className="min-h-screen page-bg">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <header className="border-b border-white/10 backdrop-blur-sm bg-black/30">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-teal-400 to-blue-500" />
            <h1 className="text-2xl font-bold gradient-text heading-font">InvoiceFlow</h1>
          </Link>
          <div className="flex gap-4">
            <Link href="/compare"><Button variant="ghost">Compare</Button></Link>
            <Link href="/signup"><Button>Get Started Free</Button></Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16 max-w-5xl">
        <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8">
          <Link href="/" className="hover:text-white">Home</Link>
          <span>/</span>
          <Link href="/compare" className="hover:text-white">Compare</Link>
          <span>/</span>
          <span className="text-slate-200">Xero vs Wave</span>
        </nav>

        {/* Hero */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-slate-200 mb-6">
            <span className="h-2 w-2 rounded-full bg-blue-400" />
            AU Market Leader vs Former Free Platform
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 heading-font">
            <span className="text-blue-400">Xero</span> vs <span className="text-cyan-400">Wave</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-4">
            Xero dominates Australia with 78% market share at $35/mo. Wave was the free alternative — until
            H&amp;R Block acquired it and killed the free tier. Neither is ideal for freelancers who just need invoicing.
          </p>
          <p className="text-sm text-slate-500">Updated February 2026</p>
        </div>

        {/* Quick Verdict */}
        <div className="glass rounded-3xl p-8 mb-12 border border-blue-500/20">
          <h3 className="text-xl font-bold text-blue-400 mb-4 heading-font">Quick Verdict</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400 mb-1">Xero</div>
              <p className="text-sm text-slate-300">Australia&apos;s standard for accounting. Excellent GST/BAS integration. But $35/mo minimum, 20-invoice cap, and overkill if you only need invoicing.</p>
              <div className="text-xs text-slate-500 mt-2">From $35/mo</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-400 mb-1">Wave</div>
              <p className="text-sm text-slate-300">Was the budget hero. Now $19/mo with 1.2/5 Trustpilot, payment holds lasting months, and almost no Australian compliance. Not what it used to be.</p>
              <div className="text-xs text-slate-500 mt-2">From $19/mo</div>
            </div>
            <div className="text-center border-2 border-teal-500/30 rounded-xl p-3 -m-3">
              <div className="text-2xl font-bold text-teal-400 mb-1">InvoiceFlow</div>
              <p className="text-sm text-slate-300">Full GST compliance like Xero, free tier like Wave used to be. Purpose-built for Australian freelancers who need invoicing without accounting overhead.</p>
              <div className="text-xs text-teal-400 mt-2">Free or $19/mo</div>
            </div>
          </div>
        </div>

        {/* Key Numbers */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {[
            { label: 'Xero AU share', value: '78%', sub: 'of cloud accounting' },
            { label: 'Wave Trustpilot', value: '1.2/5', sub: 'after H&R Block' },
            { label: 'Price difference', value: '$192/yr', sub: 'Xero vs Wave' },
            { label: 'InvoiceFlow', value: '$0', sub: 'to start' },
          ].map((stat) => (
            <div key={stat.label} className="glass rounded-2xl p-4 text-center">
              <div className="text-xl font-bold text-white">{stat.value}</div>
              <div className="text-xs text-slate-400">{stat.label}</div>
              <div className="text-xs text-slate-500">{stat.sub}</div>
            </div>
          ))}
        </div>

        {/* Wave Warning */}
        <div className="rounded-2xl bg-red-500/10 border border-red-500/20 p-6 mb-12">
          <h3 className="text-lg font-bold text-red-400 mb-3 heading-font">Wave: Not What It Used To Be</h3>
          <p className="text-sm text-slate-300 mb-3">
            Wave was beloved as the free invoicing tool. Since H&amp;R Block acquired it for $405M in 2019,
            the platform has deteriorated significantly:
          </p>
          <ul className="grid md:grid-cols-2 gap-2 text-sm text-slate-400">
            <li className="flex gap-2"><span className="text-red-400">!</span>Free plan completely removed</li>
            <li className="flex gap-2"><span className="text-red-400">!</span>Payment holds of 3-7 months on $50K+</li>
            <li className="flex gap-2"><span className="text-red-400">!</span>Trustpilot crashed from ~4/5 to 1.2/5</li>
            <li className="flex gap-2"><span className="text-red-400">!</span>Minimal Australian tax compliance</li>
          </ul>
        </div>

        {/* Feature Table */}
        <div className="glass rounded-3xl p-6 lg:p-8 mb-12 overflow-x-auto">
          <h3 className="text-2xl font-bold text-white mb-6 heading-font">Feature-by-Feature Comparison</h3>
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-3 px-4 text-slate-400 font-medium">Feature</th>
                <th className="text-left py-3 px-4 text-blue-400 font-semibold">Xero</th>
                <th className="text-left py-3 px-4 text-cyan-400 font-semibold">Wave</th>
                <th className="text-left py-3 px-4 text-teal-400 font-semibold bg-teal-500/5 rounded-t-xl">InvoiceFlow</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {features.map((row, i) => (
                <tr key={row.feature} className={i < features.length - 1 ? 'border-b border-white/5' : ''}>
                  <td className="py-3 px-4 text-slate-300 font-medium">{row.feature}</td>
                  <td className={`py-3 px-4 ${row.winner.includes('xero') ? 'text-blue-300 font-semibold' : 'text-slate-400'}`}>{row.xero}</td>
                  <td className={`py-3 px-4 ${row.winner.includes('wave') ? 'text-cyan-300 font-semibold' : 'text-slate-400'}`}>{row.wave}</td>
                  <td className={`py-3 px-4 bg-teal-500/5 ${row.winner === 'invoiceflow' || row.winner.includes('-if') ? 'text-teal-300 font-semibold' : 'text-slate-400'}`}>{row.invoiceflow}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* When to Choose */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="glass rounded-2xl p-6 border border-blue-500/20">
            <h4 className="text-lg font-bold text-blue-400 mb-3 heading-font">Choose Xero If...</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex gap-2"><span className="text-blue-400">+</span>You need full double-entry accounting</li>
              <li className="flex gap-2"><span className="text-blue-400">+</span>Your accountant requires Xero</li>
              <li className="flex gap-2"><span className="text-blue-400">+</span>You have employees (STP payroll)</li>
              <li className="flex gap-2"><span className="text-blue-400">+</span>You do 1,000+ transactions/month</li>
            </ul>
          </div>
          <div className="glass rounded-2xl p-6 border border-cyan-500/20">
            <h4 className="text-lg font-bold text-cyan-400 mb-3 heading-font">Choose Wave If...</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex gap-2"><span className="text-cyan-400">+</span>You&apos;re in North America</li>
              <li className="flex gap-2"><span className="text-cyan-400">+</span>You need basic bookkeeping</li>
              <li className="flex gap-2"><span className="text-cyan-400">+</span>You accept the payment hold risk</li>
              <li className="flex gap-2"><span className="text-cyan-400">+</span>You invoice under $50K total</li>
            </ul>
          </div>
          <div className="glass rounded-2xl p-6 border-2 border-teal-500/30 bg-teal-500/5">
            <h4 className="text-lg font-bold text-teal-400 mb-3 heading-font">Choose InvoiceFlow If...</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex gap-2"><span className="text-teal-400">+</span>You want Xero&apos;s GST compliance at $0</li>
              <li className="flex gap-2"><span className="text-teal-400">+</span>You just need invoicing, not accounting</li>
              <li className="flex gap-2"><span className="text-teal-400">+</span>You want AI-powered invoice creation</li>
              <li className="flex gap-2"><span className="text-teal-400">+</span>No payment holds, no invoice caps</li>
            </ul>
          </div>
        </div>

        {/* Cost Comparison */}
        <div className="glass rounded-3xl p-8 mb-12 border border-amber-500/20">
          <h3 className="text-xl font-bold text-amber-400 mb-4 heading-font">Annual Cost Comparison</h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-400">$420</div>
              <div className="text-sm text-slate-400">Xero Ignite (20 invoices/mo)</div>
              <div className="text-xs text-slate-500 mt-1">$900/yr for unlimited invoicing</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-400">$228</div>
              <div className="text-sm text-slate-400">Wave Pro</div>
              <div className="text-xs text-slate-500 mt-1">+ 2.9% + $0.60 per payment</div>
            </div>
            <div className="border-2 border-teal-500/30 rounded-xl p-3 -m-3">
              <div className="text-3xl font-bold text-teal-400">$0</div>
              <div className="text-sm text-slate-400">InvoiceFlow Free (5/mo)</div>
              <div className="text-xs text-teal-400 mt-1">$228/yr Pro for unlimited</div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="glass rounded-3xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-white mb-6 heading-font">Frequently Asked Questions</h3>
          <div className="space-y-4">
            {faqSchema.mainEntity.map((faq) => (
              <details key={faq.name} className="group">
                <summary className="cursor-pointer text-white font-medium py-3 flex justify-between items-center hover:text-teal-400 transition-colors">
                  {faq.name}
                  <span className="text-slate-400 group-open:rotate-180 transition-transform">&#9660;</span>
                </summary>
                <p className="text-sm text-slate-300 pb-4 leading-relaxed">{faq.acceptedAnswer.text}</p>
              </details>
            ))}
          </div>
        </div>

        {/* Related */}
        <div className="glass rounded-3xl p-8 mb-12">
          <h3 className="text-lg font-bold text-white mb-4 heading-font">Related Comparisons</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { label: 'Xero Alternative', href: '/alternative-to/xero' },
              { label: 'Wave Alternative', href: '/alternative-to/wave' },
              { label: 'Xero vs MYOB', href: '/compare/xero-vs-myob' },
              { label: 'FreshBooks vs Wave', href: '/compare/freshbooks-vs-wave' },
              { label: 'Xero vs FreshBooks', href: '/compare/xero-vs-freshbooks' },
              { label: 'QuickBooks vs Wave', href: '/compare/quickbooks-vs-wave' },
              { label: 'Free Tools', href: '/tools' },
              { label: 'All Comparisons', href: '/compare' },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="glass rounded-xl px-4 py-3 text-sm text-slate-300 hover:text-white hover:border-teal-400/20 border border-transparent transition-colors text-center">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <EmailCapture />

        <div className="glass rounded-3xl p-10 text-center mt-12">
          <h3 className="text-3xl font-bold text-white heading-font mb-4">
            Xero&apos;s compliance. Wave&apos;s simplicity. $0 to start.
          </h3>
          <p className="text-slate-300 max-w-xl mx-auto mb-8">
            Get full GST/ABN compliance without Xero&apos;s $420/year price tag. Get free invoicing
            without Wave&apos;s payment hold nightmares. InvoiceFlow. Simple.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/signup"><Button size="lg">Start Free</Button></Link>
            <Link href="/pricing"><Button variant="secondary" size="lg">See All Plans</Button></Link>
          </div>
        </div>
      </main>

      <footer className="border-t border-white/10 mt-24">
        <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between text-slate-400 text-sm">
          <span>&copy; 2026 InvoiceFlow. All rights reserved.</span>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/compare" className="hover:text-white">Compare</Link>
            <Link href="/alternative-to" className="hover:text-white">Alternatives</Link>
            <Link href="/pricing" className="hover:text-white">Pricing</Link>
            <Link href="/privacy" className="hover:text-white">Privacy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
