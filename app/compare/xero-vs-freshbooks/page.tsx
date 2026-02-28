import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Xero vs FreshBooks 2026: Best Invoicing for Freelancers? | InvoiceFlow',
  description:
    'Xero ($35/mo) vs FreshBooks ($24/mo) compared for Australian freelancers. Features, pricing, GST compliance, and a simpler alternative from $0/mo.',
  alternates: { canonical: '/compare/xero-vs-freshbooks' },
  keywords: ['xero vs freshbooks', 'xero vs freshbooks australia', 'xero or freshbooks for freelancers', 'freshbooks vs xero pricing'],
  openGraph: {
    title: 'Xero vs FreshBooks 2026 — Which Is Better for Australian Freelancers?',
    description: 'Full comparison of Xero and FreshBooks for freelancers. Pricing, features, GST compliance. Plus a simpler alternative.',
  },
};

const siteUrl = 'https://invoiceflow-teal.vercel.app';

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
    { '@type': 'ListItem', position: 2, name: 'Compare', item: `${siteUrl}/compare` },
    { '@type': 'ListItem', position: 3, name: 'Xero vs FreshBooks', item: `${siteUrl}/compare/xero-vs-freshbooks` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is Xero or FreshBooks better for Australian freelancers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Xero is better for freelancers who need full accounting with strong Australian compliance (BAS, Single Touch Payroll). FreshBooks is better for freelancers who want simpler time-tracking and project management. However, both are expensive for basic invoicing needs. InvoiceFlow offers a free tier with full GST compliance, designed specifically for freelancers who primarily need invoicing.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much cheaper is FreshBooks vs Xero?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'FreshBooks starts at $24/mo (Lite, 5 clients) vs Xero at $35/mo (Ignite, 20 invoices). However, FreshBooks Lite caps you at 5 clients. For unlimited clients, FreshBooks Plus costs $44/mo vs Xero Grow at $75/mo. InvoiceFlow is significantly cheaper at $19/mo for unlimited invoicing, or free for 5 invoices per month.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does FreshBooks work in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'FreshBooks works in Australia but is a Canadian product primarily designed for North American markets. It supports basic GST but lacks the deep Australian compliance features of Xero (BAS preparation, Single Touch Payroll, ATO integration). InvoiceFlow is built from the ground up for Australian freelancers with full GST and ABN compliance.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Xero have a free plan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, Xero does not offer a permanent free plan. They occasionally run promotions (75% off for 3 months) but after the promo period, you pay full price starting at $35/mo. FreshBooks also has no free plan. InvoiceFlow offers a permanent free tier with 5 invoices per month, no credit card required.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use InvoiceFlow with my accountant who uses Xero?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Many freelancers use InvoiceFlow for day-to-day invoicing and give their accountant access to Xero for year-end accounting and BAS preparation. InvoiceFlow handles the invoicing workflow you interact with daily, while your accountant manages the books. This can save you $420-660/year compared to running Xero yourself.',
      },
    },
  ],
};

const features = [
  { feature: 'Starting price', xero: '$35/mo', freshbooks: '$24/mo', invoiceflow: 'Free', winner: 'invoiceflow' },
  { feature: 'Client limit (entry plan)', xero: 'Unlimited', freshbooks: '5 clients', invoiceflow: 'Unlimited', winner: 'both-xf' },
  { feature: 'Invoice limit (entry plan)', xero: '20/month', freshbooks: 'Unlimited', invoiceflow: '5/month', winner: 'freshbooks' },
  { feature: 'Free tier', xero: 'No', freshbooks: 'No', invoiceflow: 'Yes (5/mo)', winner: 'invoiceflow' },
  { feature: 'GST compliance (AU)', xero: 'Full', freshbooks: 'Basic', invoiceflow: 'Full', winner: 'xero-if' },
  { feature: 'BAS preparation', xero: 'Full BAS', freshbooks: 'No', invoiceflow: 'GST summary', winner: 'xero' },
  { feature: 'Time tracking', xero: 'Basic', freshbooks: 'Built-in', invoiceflow: 'Not included', winner: 'freshbooks' },
  { feature: 'AI features', xero: 'JAX AI', freshbooks: 'None', invoiceflow: 'Gemini AI', winner: 'xero-if' },
  { feature: 'Project management', xero: 'Xero Projects ($75+)', freshbooks: 'Built-in', invoiceflow: 'Not included', winner: 'freshbooks' },
  { feature: 'Bank feeds (AU)', xero: '200+ banks', freshbooks: 'Limited AU', invoiceflow: 'Not included', winner: 'xero' },
  { feature: 'Mobile app', xero: '4.3/5 stars', freshbooks: '4.5/5 stars', invoiceflow: 'Web responsive', winner: 'freshbooks' },
  { feature: 'Ease of use', xero: 'Moderate', freshbooks: 'Easy', invoiceflow: 'Simplest', winner: 'invoiceflow' },
];

export default function XeroVsFreshBooksPage() {
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
          <span className="text-slate-200">Xero vs FreshBooks</span>
        </nav>

        {/* Hero */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-slate-200 mb-6">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Accounting Giant vs Invoicing Specialist
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 heading-font">
            <span className="text-blue-400">Xero</span> vs <span className="text-green-400">FreshBooks</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-4">
            Full accounting suite ($35/mo) vs invoicing-first platform ($24/mo). But if you&apos;re a
            freelancer who just needs to send invoices, both might be overkill.
          </p>
          <p className="text-sm text-slate-500">Updated February 2026</p>
        </div>

        {/* Quick Verdict */}
        <div className="glass rounded-3xl p-8 mb-12 border border-emerald-500/20">
          <h3 className="text-xl font-bold text-emerald-400 mb-4 heading-font">Quick Verdict</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400 mb-1">Xero</div>
              <p className="text-sm text-slate-300">Best for AU accounting compliance. BAS prep, bank feeds, ATO integration. Overkill if you just need invoicing.</p>
              <div className="text-xs text-slate-500 mt-2">From $35/mo</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400 mb-1">FreshBooks</div>
              <p className="text-sm text-slate-300">Best for time tracking + invoicing. Good UI, project management built-in. 5-client cap on entry plan, limited AU compliance.</p>
              <div className="text-xs text-slate-500 mt-2">From $24/mo</div>
            </div>
            <div className="text-center border-2 border-teal-500/30 rounded-xl p-3 -m-3">
              <div className="text-2xl font-bold text-teal-400 mb-1">InvoiceFlow</div>
              <p className="text-sm text-slate-300">Best for pure invoicing. Free tier, AI-powered, full GST compliance. No accounting or time-tracking bloat.</p>
              <div className="text-xs text-teal-400 mt-2">Free or $19/mo</div>
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div className="glass rounded-3xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-white mb-6 heading-font">Pricing Breakdown</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl bg-blue-500/5 border border-blue-500/20 p-6">
              <div className="text-lg font-bold text-blue-400 mb-4">Xero</div>
              <div className="space-y-3">
                {[
                  { tier: 'Ignite', price: '$35/mo', note: '20 invoices, limited bank feeds' },
                  { tier: 'Grow', price: '$75/mo', note: 'Unlimited, multi-currency' },
                  { tier: 'Comprehensive', price: '$105/mo', note: 'Projects, analytics' },
                ].map((t) => (
                  <div key={t.tier} className="flex justify-between items-center">
                    <div><div className="text-white text-sm font-medium">{t.tier}</div><div className="text-xs text-slate-500">{t.note}</div></div>
                    <div className="text-blue-300 font-semibold text-sm">{t.price}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl bg-green-500/5 border border-green-500/20 p-6">
              <div className="text-lg font-bold text-green-400 mb-4">FreshBooks</div>
              <div className="space-y-3">
                {[
                  { tier: 'Lite', price: '$24/mo', note: '5 clients max' },
                  { tier: 'Plus', price: '$44/mo', note: '50 clients, proposals' },
                  { tier: 'Premium', price: '$70/mo', note: 'Unlimited clients' },
                ].map((t) => (
                  <div key={t.tier} className="flex justify-between items-center">
                    <div><div className="text-white text-sm font-medium">{t.tier}</div><div className="text-xs text-slate-500">{t.note}</div></div>
                    <div className="text-green-300 font-semibold text-sm">{t.price}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-green-500/20 text-xs text-slate-400">70% promo bait-and-switch. $125M debt (2025).</div>
            </div>
            <div className="rounded-2xl bg-teal-500/10 border-2 border-teal-500/30 p-6">
              <div className="text-lg font-bold text-teal-400 mb-4">InvoiceFlow</div>
              <div className="space-y-3">
                {[
                  { tier: 'Free', price: '$0/mo', note: '5 invoices/month' },
                  { tier: 'Pro', price: '$19/mo', note: 'Unlimited invoices' },
                  { tier: 'Premium', price: '$39/mo', note: 'Multi-business, priority' },
                ].map((t) => (
                  <div key={t.tier} className="flex justify-between items-center">
                    <div><div className="text-white text-sm font-medium">{t.tier}</div><div className="text-xs text-slate-500">{t.note}</div></div>
                    <div className="text-teal-300 font-semibold text-sm">{t.price}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-teal-500/20 text-xs text-teal-300">No credit card. AI-powered. Purpose-built.</div>
            </div>
          </div>
          <div className="mt-6 text-center">
            <p className="text-sm text-slate-400">
              <span className="text-emerald-400 font-semibold">Save $60-$612/year</span> vs FreshBooks.{' '}
              <span className="text-emerald-400 font-semibold">Save $192-$792/year</span> vs Xero.
            </p>
          </div>
        </div>

        {/* Feature Table */}
        <div className="glass rounded-3xl p-6 lg:p-8 mb-12 overflow-x-auto">
          <h3 className="text-2xl font-bold text-white mb-6 heading-font">Feature-by-Feature Comparison</h3>
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-3 px-4 text-slate-400 font-medium">Feature</th>
                <th className="text-left py-3 px-4 text-blue-400 font-semibold">Xero</th>
                <th className="text-left py-3 px-4 text-green-400 font-semibold">FreshBooks</th>
                <th className="text-left py-3 px-4 text-teal-400 font-semibold bg-teal-500/5 rounded-t-xl">InvoiceFlow</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {features.map((row, i) => (
                <tr key={row.feature} className={i < features.length - 1 ? 'border-b border-white/5' : ''}>
                  <td className="py-3 px-4 text-slate-300 font-medium">{row.feature}</td>
                  <td className={`py-3 px-4 ${row.winner.includes('xero') ? 'text-blue-300 font-semibold' : 'text-slate-400'}`}>{row.xero}</td>
                  <td className={`py-3 px-4 ${row.winner === 'freshbooks' ? 'text-green-300 font-semibold' : 'text-slate-400'}`}>{row.freshbooks}</td>
                  <td className={`py-3 px-4 bg-teal-500/5 ${row.winner === 'invoiceflow' || row.winner === 'xero-if' ? 'text-teal-300 font-semibold' : 'text-slate-400'}`}>{row.invoiceflow}</td>
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
              <li className="flex gap-2"><span className="text-blue-400">+</span>You need full AU accounting compliance</li>
              <li className="flex gap-2"><span className="text-blue-400">+</span>Your accountant requires Xero access</li>
              <li className="flex gap-2"><span className="text-blue-400">+</span>You need bank feed reconciliation</li>
              <li className="flex gap-2"><span className="text-blue-400">+</span>You file your own BAS</li>
            </ul>
          </div>
          <div className="glass rounded-2xl p-6 border border-green-500/20">
            <h4 className="text-lg font-bold text-green-400 mb-3 heading-font">Choose FreshBooks If...</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex gap-2"><span className="text-green-400">+</span>You need built-in time tracking</li>
              <li className="flex gap-2"><span className="text-green-400">+</span>You want project management features</li>
              <li className="flex gap-2"><span className="text-green-400">+</span>You work with fewer than 5 clients</li>
              <li className="flex gap-2"><span className="text-green-400">+</span>You prioritise UX and mobile app</li>
            </ul>
          </div>
          <div className="glass rounded-2xl p-6 border-2 border-teal-500/30 bg-teal-500/5">
            <h4 className="text-lg font-bold text-teal-400 mb-3 heading-font">Choose InvoiceFlow If...</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex gap-2"><span className="text-teal-400">+</span>Invoicing is your primary need</li>
              <li className="flex gap-2"><span className="text-teal-400">+</span>You want to start for free</li>
              <li className="flex gap-2"><span className="text-teal-400">+</span>You need full GST + ABN compliance</li>
              <li className="flex gap-2"><span className="text-teal-400">+</span>You want AI-powered invoice creation</li>
            </ul>
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

        {/* Related Links */}
        <div className="glass rounded-3xl p-8 mb-12">
          <h3 className="text-lg font-bold text-white mb-4 heading-font">Related Comparisons</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { label: 'Xero Alternative', href: '/alternative-to/xero' },
              { label: 'FreshBooks Alternative', href: '/alternative-to/freshbooks' },
              { label: 'Xero vs MYOB', href: '/compare/xero-vs-myob' },
              { label: 'FreshBooks vs Wave', href: '/compare/freshbooks-vs-wave' },
              { label: 'MYOB vs QuickBooks', href: '/compare/myob-vs-quickbooks' },
              { label: 'Setting Rates Guide', href: '/guides/setting-freelance-rates' },
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

        {/* CTA */}
        <div className="glass rounded-3xl p-10 text-center mt-12">
          <h3 className="text-3xl font-bold text-white heading-font mb-4">
            Invoicing shouldn&apos;t cost $35/mo
          </h3>
          <p className="text-slate-300 max-w-xl mx-auto mb-8">
            Start free. No credit card, no 5-client cap, no invoice limits on Pro.
            Just simple, GST-compliant invoicing for Australian freelancers.
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
