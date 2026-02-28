import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Xero vs QuickBooks 2026: Which Is Better for Australian Freelancers? | InvoiceFlow',
  description:
    'Xero vs QuickBooks compared for Australian freelancers. Pricing ($35 vs $20/mo), features, GST compliance, Trustpilot ratings. Plus a simpler alternative from $0/mo.',
  alternates: { canonical: '/compare/xero-vs-quickbooks' },
  keywords: ['xero vs quickbooks', 'xero vs quickbooks australia', 'xero or quickbooks for freelancers', 'xero vs quickbooks pricing 2026'],
  openGraph: {
    title: 'Xero vs QuickBooks 2026 — Which One Is Right for You?',
    description: 'Xero charges $35/mo. QuickBooks charges $20/mo. Both are overkill for freelancers who just need invoicing. See the full comparison.',
  },
};

const siteUrl = 'https://invoiceflow-teal.vercel.app';

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
    { '@type': 'ListItem', position: 2, name: 'Compare', item: `${siteUrl}/compare` },
    { '@type': 'ListItem', position: 3, name: 'Xero vs QuickBooks', item: `${siteUrl}/compare/xero-vs-quickbooks` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is Xero or QuickBooks better for Australian freelancers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For Australian freelancers, Xero is the stronger choice. It holds 78% AU market share, has deeper GST and BAS integration, and connects to 200+ Australian bank feeds. QuickBooks is a global giant backed by Intuit ($108B), but its Australian compliance and local support are limited. That said, both are full accounting suites. If you primarily need invoicing, InvoiceFlow offers a free tier purpose-built for freelancers with full GST compliance.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does Xero cost vs QuickBooks in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Xero Ignite starts at $35/mo (20 invoice cap), Grow at $75/mo, and Comprehensive at $105/mo — prices have risen 169% since 2021. QuickBooks Solopreneur starts at $20/mo (only 2 invoices!), Simple Start at $30/mo, Essentials at $44/mo, and Plus at $60/mo — prices up 40-88% since 2020. InvoiceFlow offers a free tier (5 invoices/month) and Pro at $19/mo for unlimited invoicing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which has better reviews, Xero or QuickBooks?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Xero has a Trustpilot rating of 3.8 out of 5 stars, which is respectable for accounting software. QuickBooks has a Trustpilot rating of just 1.1 out of 5 stars — the worst in the accounting software category. Common QuickBooks complaints include billing issues, poor customer support, and difficulty cancelling subscriptions. If customer satisfaction matters to you, Xero is the clear winner between the two.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I switch from Xero or QuickBooks to InvoiceFlow?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. InvoiceFlow is designed for freelancers who find Xero and QuickBooks overly complex and expensive for their needs. You can start free with 5 invoices per month, import your client details, and be sending GST-compliant invoices within minutes. Many freelancers keep their accountant on Xero/QuickBooks for year-end while using InvoiceFlow for day-to-day invoicing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does QuickBooks work well in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'QuickBooks works in Australia but has limitations compared to Xero and MYOB. Its AU market share is small, local bank feed coverage is more limited, BAS preparation features are less mature, and Australian-specific support can be slower. QuickBooks is primarily designed for the US market. If you need strong Australian compliance and local ecosystem support, Xero is the better full-accounting option, while InvoiceFlow handles GST-compliant invoicing at a fraction of the cost.',
      },
    },
  ],
};

const features = [
  { feature: 'Starting price', xero: '$35/mo (Ignite)', quickbooks: '$20/mo (Solopreneur)', invoiceflow: 'Free (5 inv/mo)', winner: 'invoiceflow' },
  { feature: 'Unlimited invoicing', xero: '$75/mo (Grow)', quickbooks: '$30/mo (Simple Start)', invoiceflow: '$19/mo (Pro)', winner: 'invoiceflow' },
  { feature: 'Free tier', xero: 'No (promo only)', quickbooks: 'No', invoiceflow: 'Yes (5/mo)', winner: 'invoiceflow' },
  { feature: 'GST compliance', xero: 'Full', quickbooks: 'Basic', invoiceflow: 'Full', winner: 'xero' },
  { feature: 'BAS preparation', xero: 'Full BAS', quickbooks: 'Limited', invoiceflow: 'GST summary', winner: 'xero' },
  { feature: 'AI features', xero: 'JAX AI (accounting)', quickbooks: 'QB Assistant (basic)', invoiceflow: 'Gemini AI extraction', winner: 'mixed' },
  { feature: 'Payroll', xero: 'Included ($75+)', quickbooks: 'Essentials+ ($44+)', invoiceflow: 'Not included', winner: 'xero' },
  { feature: 'Mobile app', xero: 'Good (4.3/5)', quickbooks: 'Good (4.2/5)', invoiceflow: 'Web responsive', winner: 'xero' },
  { feature: 'Bank feeds', xero: '200+ AU banks', quickbooks: 'Limited AU banks', invoiceflow: 'Not included', winner: 'xero' },
  { feature: 'Ease of use', xero: 'Moderate', quickbooks: 'Moderate', invoiceflow: 'Simple', winner: 'invoiceflow' },
  { feature: 'Trustpilot rating', xero: '3.8/5', quickbooks: '1.1/5', invoiceflow: 'New', winner: 'xero' },
  { feature: 'AU market presence', xero: '78% market share', quickbooks: 'Small AU share', invoiceflow: 'Growing', winner: 'xero' },
];

export default function XeroVsQuickBooksPage() {
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
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8">
          <Link href="/" className="hover:text-white">Home</Link>
          <span>/</span>
          <Link href="/compare" className="hover:text-white">Compare</Link>
          <span>/</span>
          <span className="text-slate-200">Xero vs QuickBooks</span>
        </nav>

        {/* Hero */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-slate-200 mb-6">
            <span className="h-2 w-2 rounded-full bg-blue-400" />
            Head-to-Head Comparison for Australian Freelancers
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 heading-font">
            <span className="text-blue-400">Xero</span> vs <span className="text-red-400">QuickBooks</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-4">
            The AU market leader vs the global giant backed by $108B Intuit. But if you&apos;re a freelancer
            who just needs invoicing, there&apos;s a smarter option.
          </p>
          <p className="text-sm text-slate-500">Updated February 2026 with latest pricing and features</p>
        </div>

        {/* Quick Verdict */}
        <div className="glass rounded-3xl p-8 mb-12 border border-amber-500/20">
          <h3 className="text-xl font-bold text-amber-400 mb-4 heading-font">Quick Verdict</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400 mb-1">Xero</div>
              <p className="text-sm text-slate-300">Best for AU freelancers who need accounting + invoicing. Stronger AU ecosystem with 78% market share.</p>
              <div className="text-xs text-slate-500 mt-2">From $35/mo</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-400 mb-1">QuickBooks</div>
              <p className="text-sm text-slate-300">Best for US-oriented businesses. Globally popular but weak AU support. 1.1/5 Trustpilot rating.</p>
              <div className="text-xs text-slate-500 mt-2">From $20/mo</div>
            </div>
            <div className="text-center border-2 border-teal-500/30 rounded-xl p-3 -m-3">
              <div className="text-2xl font-bold text-teal-400 mb-1">InvoiceFlow</div>
              <p className="text-sm text-slate-300">Best for freelancers who just need invoicing. Free tier, AI-powered, no accounting bloat.</p>
              <div className="text-xs text-teal-400 mt-2">Free or $19/mo</div>
            </div>
          </div>
        </div>

        {/* Pricing Face-Off */}
        <div className="glass rounded-3xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-white mb-6 heading-font">Pricing Breakdown</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Xero */}
            <div className="rounded-2xl bg-blue-500/5 border border-blue-500/20 p-6">
              <div className="text-lg font-bold text-blue-400 mb-4">Xero Pricing</div>
              <div className="space-y-3">
                {[
                  { tier: 'Ignite', price: '$35/mo', note: '20 invoice cap' },
                  { tier: 'Grow', price: '$75/mo', note: 'Unlimited invoices' },
                  { tier: 'Comprehensive', price: '$105/mo', note: 'Multi-currency, projects' },
                ].map((t) => (
                  <div key={t.tier} className="flex justify-between items-center">
                    <div>
                      <div className="text-white text-sm font-medium">{t.tier}</div>
                      <div className="text-xs text-slate-500">{t.note}</div>
                    </div>
                    <div className="text-blue-300 font-semibold text-sm">{t.price}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-blue-500/20 text-xs text-slate-400">
                +169% since 2021. Ignite caps invoices at 20/mo. 78% AU market share.
              </div>
            </div>

            {/* QuickBooks */}
            <div className="rounded-2xl bg-red-500/5 border border-red-500/20 p-6">
              <div className="text-lg font-bold text-red-400 mb-4">QuickBooks Pricing</div>
              <div className="space-y-3">
                {[
                  { tier: 'Solopreneur', price: '$20/mo', note: '2 invoice cap!' },
                  { tier: 'Simple Start', price: '$30/mo', note: 'Basic invoicing' },
                  { tier: 'Essentials', price: '$44/mo', note: 'Multi-user, bills' },
                  { tier: 'Plus', price: '$60/mo', note: 'Inventory, projects' },
                ].map((t) => (
                  <div key={t.tier} className="flex justify-between items-center">
                    <div>
                      <div className="text-white text-sm font-medium">{t.tier}</div>
                      <div className="text-xs text-slate-500">{t.note}</div>
                    </div>
                    <div className="text-red-300 font-semibold text-sm">{t.price}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-red-500/20 text-xs text-slate-400">
                Prices up 40-88% since 2020. Solopreneur caps at just 2 invoices/mo. Trustpilot 1.1/5.
              </div>
            </div>

            {/* InvoiceFlow */}
            <div className="rounded-2xl bg-teal-500/10 border-2 border-teal-500/30 p-6">
              <div className="text-lg font-bold text-teal-400 mb-4">InvoiceFlow Pricing</div>
              <div className="space-y-3">
                {[
                  { tier: 'Free', price: '$0/mo', note: '5 invoices/month' },
                  { tier: 'Pro', price: '$19/mo', note: 'Unlimited invoices' },
                  { tier: 'Premium', price: '$39/mo', note: 'Multi-business, priority' },
                ].map((t) => (
                  <div key={t.tier} className="flex justify-between items-center">
                    <div>
                      <div className="text-white text-sm font-medium">{t.tier}</div>
                      <div className="text-xs text-slate-500">{t.note}</div>
                    </div>
                    <div className="text-teal-300 font-semibold text-sm">{t.price}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-teal-500/20 text-xs text-teal-300">
                No credit card required. AI-powered. Purpose-built for freelancers.
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-slate-400">
              <span className="text-emerald-400 font-semibold">Save $192-$492/year</span> vs Xero.{' '}
              <span className="text-emerald-400 font-semibold">Save $12-$492/year</span> vs QuickBooks.
            </p>
          </div>
        </div>

        {/* Feature Comparison Table */}
        <div className="glass rounded-3xl p-6 lg:p-8 mb-12 overflow-x-auto">
          <h3 className="text-2xl font-bold text-white mb-6 heading-font">Feature-by-Feature Comparison</h3>
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-3 px-4 text-slate-400 font-medium">Feature</th>
                <th className="text-left py-3 px-4 text-blue-400 font-semibold">Xero</th>
                <th className="text-left py-3 px-4 text-red-400 font-semibold">QuickBooks</th>
                <th className="text-left py-3 px-4 text-teal-400 font-semibold bg-teal-500/5 rounded-t-xl">InvoiceFlow</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {features.map((row, i) => (
                <tr key={row.feature} className={i < features.length - 1 ? 'border-b border-white/5' : ''}>
                  <td className="py-3 px-4 text-slate-300 font-medium">{row.feature}</td>
                  <td className={`py-3 px-4 ${row.winner === 'xero' || row.winner === 'all' ? 'text-blue-300 font-semibold' : 'text-slate-400'}`}>{row.xero}</td>
                  <td className={`py-3 px-4 ${row.winner === 'quickbooks' || row.winner === 'all' ? 'text-red-300 font-semibold' : 'text-slate-400'}`}>{row.quickbooks}</td>
                  <td className={`py-3 px-4 bg-teal-500/5 ${row.winner === 'invoiceflow' || row.winner === 'all' ? 'text-teal-300 font-semibold' : 'text-slate-400'}`}>{row.invoiceflow}</td>
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
              <li className="flex gap-2"><span className="text-blue-400">+</span>You need full accounting + invoicing</li>
              <li className="flex gap-2"><span className="text-blue-400">+</span>Your accountant prefers Xero</li>
              <li className="flex gap-2"><span className="text-blue-400">+</span>You need 200+ AU bank feeds</li>
              <li className="flex gap-2"><span className="text-blue-400">+</span>You want strong AU GST/BAS support</li>
            </ul>
            <div className="mt-4 pt-4 border-t border-blue-500/10">
              <div className="text-xs text-slate-500">Keep in mind:</div>
              <ul className="text-xs text-slate-400 mt-1 space-y-1">
                <li>- Entry plan caps at 20 invoices/month</li>
                <li>- Price increased +169% since 2021</li>
                <li>- Complex for simple invoicing needs</li>
              </ul>
            </div>
          </div>

          <div className="glass rounded-2xl p-6 border border-red-500/20">
            <h4 className="text-lg font-bold text-red-400 mb-3 heading-font">Choose QuickBooks If...</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex gap-2"><span className="text-red-400">+</span>You work with US-based clients</li>
              <li className="flex gap-2"><span className="text-red-400">+</span>You need global multi-currency</li>
              <li className="flex gap-2"><span className="text-red-400">+</span>Your accountant uses QuickBooks</li>
              <li className="flex gap-2"><span className="text-red-400">+</span>You want the cheapest entry price</li>
            </ul>
            <div className="mt-4 pt-4 border-t border-red-500/10">
              <div className="text-xs text-slate-500">Keep in mind:</div>
              <ul className="text-xs text-slate-400 mt-1 space-y-1">
                <li>- Trustpilot 1.1/5 (worst in category)</li>
                <li>- Solopreneur only allows 2 invoices/mo</li>
                <li>- AU compliance and support limited</li>
              </ul>
            </div>
          </div>

          <div className="glass rounded-2xl p-6 border-2 border-teal-500/30 bg-teal-500/5">
            <h4 className="text-lg font-bold text-teal-400 mb-3 heading-font">Choose InvoiceFlow If...</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex gap-2"><span className="text-teal-400">+</span>You primarily need invoicing, not accounting</li>
              <li className="flex gap-2"><span className="text-teal-400">+</span>You want to start free, no credit card</li>
              <li className="flex gap-2"><span className="text-teal-400">+</span>You want AI to speed up invoice creation</li>
              <li className="flex gap-2"><span className="text-teal-400">+</span>You want a simple, modern interface</li>
            </ul>
            <div className="mt-4 pt-4 border-t border-teal-500/20">
              <div className="text-xs text-teal-300 font-medium">Best for freelancers who:</div>
              <ul className="text-xs text-slate-300 mt-1 space-y-1">
                <li>+ Send 1-50 invoices per month</li>
                <li>+ Need GST + ABN compliance</li>
                <li>+ Don&apos;t need payroll or inventory</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Key Numbers */}
        <div className="glass rounded-3xl p-8 mb-12">
          <h3 className="text-xl font-bold text-white mb-6 heading-font">By The Numbers</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { value: '$192-$492', label: 'Annual savings vs Xero', color: 'text-blue-400' },
              { value: '$12-$492', label: 'Annual savings vs QuickBooks', color: 'text-red-400' },
              { value: '2.4M+', label: 'AU sole traders', color: 'text-emerald-400' },
              { value: '78%', label: 'Xero AU market share', color: 'text-amber-400' },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-4 rounded-2xl bg-white/5">
                <div className={`text-2xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                <div className="text-xs text-slate-400">{stat.label}</div>
              </div>
            ))}
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
              { label: 'Xero vs MYOB', href: '/compare/xero-vs-myob' },
              { label: 'Xero vs FreshBooks', href: '/compare/xero-vs-freshbooks' },
              { label: 'MYOB vs QuickBooks', href: '/compare/myob-vs-quickbooks' },
              { label: 'FreshBooks vs Wave', href: '/compare/freshbooks-vs-wave' },
              { label: 'Xero Alternative', href: '/alternative-to/xero' },
              { label: 'QuickBooks Alternative', href: '/alternative-to/quickbooks' },
              { label: 'GST Guide', href: '/guides/gst-for-freelancers' },
              { label: 'All Comparisons', href: '/compare' },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="glass rounded-xl px-4 py-3 text-sm text-slate-300 hover:text-white hover:border-teal-400/20 border border-transparent transition-colors text-center">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Email Capture */}
        <EmailCapture />

        {/* CTA */}
        <div className="glass rounded-3xl p-10 text-center mt-12">
          <h3 className="text-3xl font-bold text-white heading-font mb-4">
            Skip the accounting bloat
          </h3>
          <p className="text-slate-300 max-w-xl mx-auto mb-8">
            You don&apos;t need a $35/mo accounting suite to send invoices. Start free with InvoiceFlow
            and upgrade to Pro ($19/mo) when you need unlimited invoicing.
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
