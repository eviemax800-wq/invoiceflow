import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'QuickBooks vs Wave 2026: Which Is Better for Australian Freelancers? | InvoiceFlow',
  description:
    'QuickBooks vs Wave compared for Australian freelancers. Pricing ($20 vs $19/mo), Trustpilot ratings (1.1 vs 1.2/5), payment holds, and a free alternative.',
  alternates: { canonical: '/compare/quickbooks-vs-wave' },
  keywords: ['quickbooks vs wave', 'quickbooks vs wave accounting', 'quickbooks vs wave for freelancers', 'best free invoicing software australia'],
  openGraph: {
    title: 'QuickBooks vs Wave 2026 — Both Under 1.5/5 on Trustpilot',
    description: 'QuickBooks starts at $20/mo with a 2-invoice cap. Wave killed its free plan and holds payments for months. See the full comparison.',
  },
};

const siteUrl = 'https://invoiceflow-teal.vercel.app';

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
    { '@type': 'ListItem', position: 2, name: 'Compare', item: `${siteUrl}/compare` },
    { '@type': 'ListItem', position: 3, name: 'QuickBooks vs Wave', item: `${siteUrl}/compare/quickbooks-vs-wave` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is QuickBooks or Wave better for freelancers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Neither is ideal for freelancers in 2026. QuickBooks starts at $20/mo but caps invoices at just 2 per month on the Solopreneur plan, and has a 1.1/5 Trustpilot rating. Wave now charges $19/mo after killing its free plan in 2024, has payment holds lasting up to 7 months, and scores 1.2/5 on Trustpilot. InvoiceFlow offers a genuinely free tier (5 invoices/month), AI-powered invoice creation, no payment holds, and is purpose-built for freelancers.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Wave still free in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Wave ended its free plan in 2024 after being acquired by H&R Block for $405M. Wave Pro now costs $19/mo. Free users who relied on Wave for years were forced to upgrade or leave. Wave also provides zero customer support for users on legacy free accounts. InvoiceFlow offers a permanent free tier with 5 invoices per month, no credit card required.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are Wave\'s payment holds a real problem?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Wave payment holds are a well-documented problem. Users have reported payment holds lasting up to 7 months on amounts exceeding $50,000. Wave can freeze your payment processing with little warning or explanation, leaving freelancers unable to access money their clients have already paid. This is a major reason Wave has a 1.2/5 Trustpilot rating. InvoiceFlow has no payment processing holds.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which is cheaper, QuickBooks or Wave?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wave Pro costs $19/mo. QuickBooks Solopreneur costs $20/mo but only allows 2 invoices per month. QuickBooks Simple Start at $30/mo is more comparable but still more expensive. However, both have significant drawbacks: QuickBooks prices have risen 40-88% since 2020, and Wave killed its free plan. InvoiceFlow is the cheapest option with a free tier (5 invoices/month) and Pro at $19/mo for unlimited invoicing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a free alternative to both QuickBooks and Wave?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. InvoiceFlow offers a permanent free tier with 5 invoices per month, no credit card required. Unlike Wave (which killed its free plan) and QuickBooks (which never had one), InvoiceFlow is purpose-built for freelancers who need simple, GST-compliant invoicing without paying $20-60/mo for accounting features they will never use.',
      },
    },
  ],
};

const features = [
  { feature: 'Starting price', quickbooks: '$20/mo (Solopreneur)', wave: '$19/mo (Pro)', invoiceflow: 'Free (5 inv/mo)', winner: 'invoiceflow' },
  { feature: 'Free tier', quickbooks: 'No', wave: 'No (killed in 2024)', invoiceflow: 'Yes (5/mo)', winner: 'invoiceflow' },
  { feature: 'GST compliance', quickbooks: 'Full', wave: 'Full', invoiceflow: 'Full', winner: 'all' },
  { feature: 'Payment processing', quickbooks: 'Via Intuit Payments', wave: 'Built-in (with holds!)', invoiceflow: 'Stripe integration', winner: 'mixed' },
  { feature: 'AI features', quickbooks: 'QB Assistant (basic)', wave: 'None', invoiceflow: 'Gemini AI extraction', winner: 'invoiceflow' },
  { feature: 'Bank feeds', quickbooks: 'Yes (all plans)', wave: 'Yes (Pro only)', invoiceflow: 'Not included', winner: 'quickbooks' },
  { feature: 'Payroll', quickbooks: '+$6/emp/mo', wave: 'US/Canada only', invoiceflow: 'Not included', winner: 'quickbooks' },
  { feature: 'Mobile app', quickbooks: 'Good (4.0/5)', wave: 'Basic (3.1/5)', invoiceflow: 'Web responsive', winner: 'quickbooks' },
  { feature: 'Customer support', quickbooks: 'Chat + phone', wave: 'Zero for free users', invoiceflow: 'Email + self-serve', winner: 'quickbooks' },
  { feature: 'Payment holds', quickbooks: 'No', wave: 'Yes (up to 7 months!)', invoiceflow: 'No', winner: 'quickbooks' },
  { feature: 'Trustpilot rating', quickbooks: '1.1/5', wave: '1.2/5', invoiceflow: 'New', winner: 'none' },
  { feature: 'AU focus', quickbooks: 'Global (AU supported)', wave: 'US-first (AU supported)', invoiceflow: 'AU-first', winner: 'invoiceflow' },
];

export default function QuickBooksVsWavePage() {
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
          <span className="text-slate-200">QuickBooks vs Wave</span>
        </nav>

        {/* Hero */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-slate-200 mb-6">
            <span className="h-2 w-2 rounded-full bg-red-400" />
            Head-to-Head Comparison for Australian Freelancers
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 heading-font">
            <span className="text-red-400">QuickBooks</span> vs <span className="text-cyan-400">Wave</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-4">
            A $108B corporation vs an acquired startup &mdash; both scoring under 1.5/5 on Trustpilot.
            If you&apos;re a freelancer, there&apos;s a better option.
          </p>
          <p className="text-sm text-slate-500">Updated February 2026 with latest pricing and features</p>
        </div>

        {/* Quick Verdict */}
        <div className="glass rounded-3xl p-8 mb-12 border border-amber-500/20">
          <h3 className="text-xl font-bold text-amber-400 mb-4 heading-font">Quick Verdict</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-red-400 mb-1">QuickBooks</div>
              <p className="text-sm text-slate-300">Best if you need full accounting and can afford $20-60/mo. But 1.1/5 Trustpilot and prices up 40-88% since 2020.</p>
              <div className="text-xs text-slate-500 mt-2">From $20/mo (2 invoice cap!)</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-400 mb-1">Wave</div>
              <p className="text-sm text-slate-300">Was the free champion &mdash; now $19/mo with terrible reviews. 1.2/5 Trustpilot, payment holds up to 7 months.</p>
              <div className="text-xs text-slate-500 mt-2">$19/mo (free plan killed 2024)</div>
            </div>
            <div className="text-center border-2 border-teal-500/30 rounded-xl p-3 -m-3">
              <div className="text-2xl font-bold text-teal-400 mb-1">InvoiceFlow</div>
              <p className="text-sm text-slate-300">The actually free invoicing tool. No payment holds, AI-powered, purpose-built for freelancers.</p>
              <div className="text-xs text-teal-400 mt-2">Free or $19/mo</div>
            </div>
          </div>
        </div>

        {/* Pricing Face-Off */}
        <div className="glass rounded-3xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-white mb-6 heading-font">Pricing Breakdown</h3>
          <div className="grid md:grid-cols-3 gap-6">
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
                Prices up 40-88% since 2020. Owned by $108B Intuit. Solopreneur caps at 2 invoices/mo.
              </div>
            </div>

            {/* Wave */}
            <div className="rounded-2xl bg-cyan-500/5 border border-cyan-500/20 p-6">
              <div className="text-lg font-bold text-cyan-400 mb-4">Wave Pricing</div>
              <div className="space-y-3">
                {[
                  { tier: 'Pro', price: '$19/mo', note: 'Was free until 2024' },
                  { tier: 'Payments', price: '2.9% + $0.60', note: 'Per transaction' },
                  { tier: 'Payroll', price: '$40/mo', note: 'US/Canada only' },
                ].map((t) => (
                  <div key={t.tier} className="flex justify-between items-center">
                    <div>
                      <div className="text-white text-sm font-medium">{t.tier}</div>
                      <div className="text-xs text-slate-500">{t.note}</div>
                    </div>
                    <div className="text-cyan-300 font-semibold text-sm">{t.price}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-cyan-500/20 text-xs text-slate-400">
                Acquired by H&R Block for $405M. Free plan killed 2024. Payment holds up to 7 months. 2025 payroll disaster.
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
                No credit card required. AI-powered. No payment holds. Purpose-built for freelancers.
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-slate-400">
              <span className="text-emerald-400 font-semibold">Save $240-$720/year</span> vs QuickBooks.{' '}
              <span className="text-emerald-400 font-semibold">Same price or free</span> vs Wave &mdash; without the payment holds.
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
                <th className="text-left py-3 px-4 text-red-400 font-semibold">QuickBooks</th>
                <th className="text-left py-3 px-4 text-cyan-400 font-semibold">Wave</th>
                <th className="text-left py-3 px-4 text-teal-400 font-semibold bg-teal-500/5 rounded-t-xl">InvoiceFlow</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {features.map((row, i) => (
                <tr key={row.feature} className={i < features.length - 1 ? 'border-b border-white/5' : ''}>
                  <td className="py-3 px-4 text-slate-300 font-medium">{row.feature}</td>
                  <td className={`py-3 px-4 ${row.winner === 'quickbooks' || row.winner === 'all' ? 'text-red-300 font-semibold' : 'text-slate-400'}`}>{row.quickbooks}</td>
                  <td className={`py-3 px-4 ${row.winner === 'wave' || row.winner === 'all' ? 'text-cyan-300 font-semibold' : 'text-slate-400'}`}>{row.wave}</td>
                  <td className={`py-3 px-4 bg-teal-500/5 ${row.winner === 'invoiceflow' || row.winner === 'all' ? 'text-teal-300 font-semibold' : 'text-slate-400'}`}>{row.invoiceflow}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* When to Choose */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="glass rounded-2xl p-6 border border-red-500/20">
            <h4 className="text-lg font-bold text-red-400 mb-3 heading-font">Choose QuickBooks If...</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex gap-2"><span className="text-red-400">+</span>You need full accounting + payroll</li>
              <li className="flex gap-2"><span className="text-red-400">+</span>Your accountant prefers QuickBooks</li>
              <li className="flex gap-2"><span className="text-red-400">+</span>You need bank feeds on all plans</li>
              <li className="flex gap-2"><span className="text-red-400">+</span>You can afford $30-60/mo</li>
            </ul>
            <div className="mt-4 pt-4 border-t border-red-500/10">
              <div className="text-xs text-slate-500">Keep in mind:</div>
              <ul className="text-xs text-slate-400 mt-1 space-y-1">
                <li>- 1.1/5 Trustpilot rating</li>
                <li>- Solopreneur caps at 2 invoices/month</li>
                <li>- Prices up 40-88% since 2020</li>
              </ul>
            </div>
          </div>

          <div className="glass rounded-2xl p-6 border border-cyan-500/20">
            <h4 className="text-lg font-bold text-cyan-400 mb-3 heading-font">Choose Wave If...</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex gap-2"><span className="text-cyan-400">+</span>You want accounting + invoicing combined</li>
              <li className="flex gap-2"><span className="text-cyan-400">+</span>You need built-in payment processing</li>
              <li className="flex gap-2"><span className="text-cyan-400">+</span>You&apos;re a very small operation</li>
              <li className="flex gap-2"><span className="text-cyan-400">+</span>You accept the payment hold risk</li>
            </ul>
            <div className="mt-4 pt-4 border-t border-cyan-500/10">
              <div className="text-xs text-slate-500">Keep in mind:</div>
              <ul className="text-xs text-slate-400 mt-1 space-y-1">
                <li>- 1.2/5 Trustpilot (payment holds!)</li>
                <li>- Free plan killed in 2024</li>
                <li>- Payment holds up to 7 months ($50K+)</li>
              </ul>
            </div>
          </div>

          <div className="glass rounded-2xl p-6 border-2 border-teal-500/30 bg-teal-500/5">
            <h4 className="text-lg font-bold text-teal-400 mb-3 heading-font">Choose InvoiceFlow If...</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex gap-2"><span className="text-teal-400">+</span>You want actually free invoicing</li>
              <li className="flex gap-2"><span className="text-teal-400">+</span>You want zero payment hold risk</li>
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
              { value: '<1.5/5', label: 'Both on Trustpilot', color: 'text-red-400' },
              { value: '7 months', label: 'Wave payment holds', color: 'text-cyan-400' },
              { value: '2 invoices', label: 'QuickBooks Solopreneur cap', color: 'text-amber-400' },
              { value: 'Free forever', label: 'InvoiceFlow free tier', color: 'text-teal-400' },
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
              { label: 'FreshBooks vs Wave', href: '/compare/freshbooks-vs-wave' },
              { label: 'MYOB vs QuickBooks', href: '/compare/myob-vs-quickbooks' },
              { label: 'Xero vs QuickBooks', href: '/compare/xero-vs-quickbooks' },
              { label: 'Wave Alternative', href: '/alternative-to/wave' },
              { label: 'QuickBooks Alternative', href: '/alternative-to/quickbooks' },
              { label: 'Getting Paid Faster', href: '/guides/getting-paid-faster' },
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
            Both rated under 1.5/5 on Trustpilot
          </h3>
          <p className="text-slate-300 max-w-xl mx-auto mb-8">
            QuickBooks charges $20-60/mo. Wave killed its free plan and holds your payments.
            InvoiceFlow is free, AI-powered, and built for freelancers who just need to get paid.
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
