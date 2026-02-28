import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'QuickBooks vs FreshBooks 2026: Which Is Better for Australian Freelancers? | InvoiceFlow',
  description:
    'QuickBooks vs FreshBooks compared for Australian freelancers. Pricing ($20 vs $24/mo), features, GST compliance, ease of use. Plus a simpler alternative from $0/mo.',
  alternates: { canonical: '/compare/quickbooks-vs-freshbooks' },
  keywords: ['quickbooks vs freshbooks', 'quickbooks vs freshbooks australia', 'quickbooks vs freshbooks for freelancers', 'quickbooks vs freshbooks pricing'],
  openGraph: {
    title: 'QuickBooks vs FreshBooks 2026 — Which One Is Right for You?',
    description: 'QuickBooks starts at $20/mo (2-invoice cap!). FreshBooks starts at $24/mo (5-client cap!). Both punish freelancers on entry plans. See the full comparison.',
  },
};

const siteUrl = 'https://invoiceflow-teal.vercel.app';

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
    { '@type': 'ListItem', position: 2, name: 'Compare', item: `${siteUrl}/compare` },
    { '@type': 'ListItem', position: 3, name: 'QuickBooks vs FreshBooks', item: `${siteUrl}/compare/quickbooks-vs-freshbooks` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is QuickBooks or FreshBooks better for freelancers in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It depends on what you need. QuickBooks is a full accounting suite with stronger reporting and tax features, but its entry plan only allows 2 invoices per month and has a 1.1/5 Trustpilot rating. FreshBooks is more invoicing-focused with a cleaner UX, but caps clients at 5 on the Lite plan and has no free tier. For Australian freelancers who primarily need invoicing with GST compliance, InvoiceFlow offers a free tier with 5 invoices/month and Pro at $19/mo with no caps.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does QuickBooks cost vs FreshBooks in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'QuickBooks Solopreneur starts at $20/mo (2-invoice cap), Simple Start at $30/mo, Essentials at $44/mo, and Plus at $60/mo. QuickBooks prices have increased 40-88% since 2020. FreshBooks Lite is $24/mo (5-client cap), Plus $42/mo, and Premium $54/mo. FreshBooks often advertises a 70% promo that reverts to full price. InvoiceFlow offers Free (5 invoices/mo), Pro at $19/mo, and Premium at $39/mo.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which is easier to use, QuickBooks or FreshBooks?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'FreshBooks is widely regarded as easier to use than QuickBooks. FreshBooks was built invoicing-first with a clean, intuitive interface that freelancers love. QuickBooks is more powerful but has a steeper learning curve, especially for users without accounting knowledge. However, both are more complex than necessary for freelancers who just need to send invoices. InvoiceFlow is purpose-built for freelancer invoicing with the simplest interface of all three.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do QuickBooks and FreshBooks have free plans?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Neither QuickBooks nor FreshBooks offers a permanent free plan. QuickBooks offers a 30-day free trial, then starts at $20/mo for the Solopreneur plan (limited to 2 invoices). FreshBooks offers a 30-day free trial and frequently runs a 70% off promo for 4 months, but then reverts to full pricing ($24/mo minimum). InvoiceFlow offers a permanent free tier with 5 invoices per month, no credit card required.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I switch from QuickBooks or FreshBooks to InvoiceFlow?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. InvoiceFlow is designed for freelancers who find QuickBooks and FreshBooks too expensive or complex for their invoicing needs. You can start free with 5 invoices per month, import your client details, and be sending GST-compliant invoices within minutes. Many freelancers keep their accountant on QuickBooks or use FreshBooks for time tracking while using InvoiceFlow for day-to-day invoicing.',
      },
    },
  ],
};

const features = [
  { feature: 'Starting price', quickbooks: '$20/mo (Solopreneur)', freshbooks: '$24/mo (Lite)', invoiceflow: 'Free (5 inv/mo)', winner: 'invoiceflow' },
  { feature: 'Unlimited invoicing', quickbooks: '$30/mo (Simple Start)', freshbooks: '$42/mo (Plus)', invoiceflow: '$19/mo (Pro)', winner: 'invoiceflow' },
  { feature: 'Free tier', quickbooks: 'No (trial only)', freshbooks: 'No (trial only)', invoiceflow: 'Yes (5/mo)', winner: 'invoiceflow' },
  { feature: 'Client cap', quickbooks: 'None (but 2 inv cap!)', freshbooks: '5 clients (Lite)', invoiceflow: 'None', winner: 'invoiceflow' },
  { feature: 'GST compliance', quickbooks: 'Limited AU support', freshbooks: 'Basic GST', invoiceflow: 'Full AU GST', winner: 'invoiceflow' },
  { feature: 'AI features', quickbooks: 'QB Assistant (basic)', freshbooks: 'None', invoiceflow: 'Gemini AI extraction', winner: 'invoiceflow' },
  { feature: 'Time tracking', quickbooks: 'Included ($30+)', freshbooks: 'Included (all plans)', invoiceflow: 'Not included', winner: 'freshbooks' },
  { feature: 'Mobile app', quickbooks: 'Good (4.5/5)', freshbooks: 'Good (4.5/5)', invoiceflow: 'Web responsive', winner: 'tie' },
  { feature: 'Expense tracking', quickbooks: 'Full (receipt scan)', freshbooks: 'Full (receipt scan)', invoiceflow: 'Basic', winner: 'tie' },
  { feature: 'Ease of use', quickbooks: 'Moderate', freshbooks: 'Easy', invoiceflow: 'Simplest', winner: 'invoiceflow' },
  { feature: 'Trustpilot rating', quickbooks: '1.1/5', freshbooks: '3.4/5', invoiceflow: 'New', winner: 'freshbooks' },
  { feature: 'AU support', quickbooks: 'Chat + community', freshbooks: 'Phone + email', invoiceflow: 'Email + self-serve', winner: 'freshbooks' },
];

export default function QuickBooksVsFreshBooksPage() {
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
          <span className="text-slate-200">QuickBooks vs FreshBooks</span>
        </nav>

        {/* Hero */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-slate-200 mb-6">
            <span className="h-2 w-2 rounded-full bg-red-400" />
            Head-to-Head Comparison for Australian Freelancers
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 heading-font">
            <span className="text-red-400">QuickBooks</span> vs <span className="text-green-400">FreshBooks</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-4">
            Two of the biggest invoicing platforms in the world go head-to-head. But if you&apos;re an Australian
            freelancer, both have entry plans that punish you with caps. There&apos;s a better way.
          </p>
          <p className="text-sm text-slate-500">Updated February 2026 with latest pricing and features</p>
        </div>

        {/* Quick Verdict */}
        <div className="glass rounded-3xl p-8 mb-12 border border-amber-500/20">
          <h3 className="text-xl font-bold text-amber-400 mb-4 heading-font">Quick Verdict</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-red-400 mb-1">QuickBooks</div>
              <p className="text-sm text-slate-300">Best for freelancers who want full accounting. But 1.1/5 Trustpilot and a 2-invoice cap on the entry plan make it hard to recommend.</p>
              <div className="text-xs text-slate-500 mt-2">From $20/mo</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400 mb-1">FreshBooks</div>
              <p className="text-sm text-slate-300">Best for freelancers wanting invoicing-first UX. But 5-client cap on Lite, no free tier, and $125M in debt raise concerns.</p>
              <div className="text-xs text-slate-500 mt-2">From $24/mo</div>
            </div>
            <div className="text-center border-2 border-teal-500/30 rounded-xl p-3 -m-3">
              <div className="text-2xl font-bold text-teal-400 mb-1">InvoiceFlow</div>
              <p className="text-sm text-slate-300">Best for freelancers who want simple invoicing at the right price. Free tier, AI-powered, no client caps.</p>
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
                  { tier: 'Simple Start', price: '$30/mo', note: 'Unlimited invoices' },
                  { tier: 'Essentials', price: '$44/mo', note: '3 users, bill pay' },
                  { tier: 'Plus', price: '$60/mo', note: '5 users, inventory' },
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
                Prices up 40-88% since 2020. $108B Intuit. Trustpilot 1.1/5.
              </div>
            </div>

            {/* FreshBooks */}
            <div className="rounded-2xl bg-green-500/5 border border-green-500/20 p-6">
              <div className="text-lg font-bold text-green-400 mb-4">FreshBooks Pricing</div>
              <div className="space-y-3">
                {[
                  { tier: 'Lite', price: '$24/mo', note: '5 client cap!' },
                  { tier: 'Plus', price: '$42/mo', note: '50 clients' },
                  { tier: 'Premium', price: '$54/mo', note: 'Unlimited clients' },
                ].map((t) => (
                  <div key={t.tier} className="flex justify-between items-center">
                    <div>
                      <div className="text-white text-sm font-medium">{t.tier}</div>
                      <div className="text-xs text-slate-500">{t.note}</div>
                    </div>
                    <div className="text-green-300 font-semibold text-sm">{t.price}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-green-500/20 text-xs text-slate-400">
                70% promo then full price. $125M debt. Declining headcount. Zero AI features.
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
              <span className="text-emerald-400 font-semibold">Save $12-$492/year</span> vs QuickBooks.{' '}
              <span className="text-emerald-400 font-semibold">Save $60-$420/year</span> vs FreshBooks.
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
                <th className="text-left py-3 px-4 text-green-400 font-semibold">FreshBooks</th>
                <th className="text-left py-3 px-4 text-teal-400 font-semibold bg-teal-500/5 rounded-t-xl">InvoiceFlow</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {features.map((row, i) => (
                <tr key={row.feature} className={i < features.length - 1 ? 'border-b border-white/5' : ''}>
                  <td className="py-3 px-4 text-slate-300 font-medium">{row.feature}</td>
                  <td className={`py-3 px-4 ${row.winner === 'quickbooks' || row.winner === 'all' ? 'text-red-300 font-semibold' : 'text-slate-400'}`}>{row.quickbooks}</td>
                  <td className={`py-3 px-4 ${row.winner === 'freshbooks' || row.winner === 'all' ? 'text-green-300 font-semibold' : 'text-slate-400'}`}>{row.freshbooks}</td>
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
              <li className="flex gap-2"><span className="text-red-400">+</span>You need full double-entry accounting</li>
              <li className="flex gap-2"><span className="text-red-400">+</span>You want extensive reporting and tax prep</li>
              <li className="flex gap-2"><span className="text-red-400">+</span>Your accountant prefers QuickBooks</li>
              <li className="flex gap-2"><span className="text-red-400">+</span>You need inventory and payroll</li>
            </ul>
            <div className="mt-4 pt-4 border-t border-red-500/10">
              <div className="text-xs text-slate-500">Keep in mind:</div>
              <ul className="text-xs text-slate-400 mt-1 space-y-1">
                <li>- Solopreneur plan limited to 2 invoices/month</li>
                <li>- Trustpilot rating is 1.1/5 (worst in class)</li>
                <li>- Prices increased 40-88% since 2020</li>
              </ul>
            </div>
          </div>

          <div className="glass rounded-2xl p-6 border border-green-500/20">
            <h4 className="text-lg font-bold text-green-400 mb-3 heading-font">Choose FreshBooks If...</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex gap-2"><span className="text-green-400">+</span>You want the best invoicing UX</li>
              <li className="flex gap-2"><span className="text-green-400">+</span>You need built-in time tracking</li>
              <li className="flex gap-2"><span className="text-green-400">+</span>You want phone support included</li>
              <li className="flex gap-2"><span className="text-green-400">+</span>You work with fewer than 5 clients</li>
            </ul>
            <div className="mt-4 pt-4 border-t border-green-500/10">
              <div className="text-xs text-slate-500">Keep in mind:</div>
              <ul className="text-xs text-slate-400 mt-1 space-y-1">
                <li>- Lite plan capped at 5 clients</li>
                <li>- $125M in debt, declining headcount</li>
                <li>- 70% promo reverts to full price</li>
              </ul>
            </div>
          </div>

          <div className="glass rounded-2xl p-6 border-2 border-teal-500/30 bg-teal-500/5">
            <h4 className="text-lg font-bold text-teal-400 mb-3 heading-font">Choose InvoiceFlow If...</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex gap-2"><span className="text-teal-400">+</span>You primarily need invoicing, not accounting</li>
              <li className="flex gap-2"><span className="text-teal-400">+</span>You want to start free, no credit card</li>
              <li className="flex gap-2"><span className="text-teal-400">+</span>You want AI to speed up invoice creation</li>
              <li className="flex gap-2"><span className="text-teal-400">+</span>You want no client or invoice caps on Pro</li>
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
              { value: '$12-$492', label: 'Annual savings vs QuickBooks', color: 'text-red-400' },
              { value: '$60-$420', label: 'Annual savings vs FreshBooks', color: 'text-green-400' },
              { value: '1.1/5', label: 'QuickBooks Trustpilot rating', color: 'text-amber-400' },
              { value: '5 clients', label: 'FreshBooks Lite cap', color: 'text-emerald-400' },
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
              { label: 'Xero vs QuickBooks', href: '/compare/xero-vs-quickbooks' },
              { label: 'MYOB vs QuickBooks', href: '/compare/myob-vs-quickbooks' },
              { label: 'Xero vs FreshBooks', href: '/compare/xero-vs-freshbooks' },
              { label: 'FreshBooks vs Wave', href: '/compare/freshbooks-vs-wave' },
              { label: 'QuickBooks Alternative', href: '/alternative-to/quickbooks' },
              { label: 'FreshBooks Alternative', href: '/alternative-to/freshbooks' },
              { label: 'Invoicing 101', href: '/guides/invoicing-101' },
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
            Stop paying for features you don&apos;t use
          </h3>
          <p className="text-slate-300 max-w-xl mx-auto mb-8">
            QuickBooks caps you at 2 invoices on its cheapest plan. FreshBooks caps you at 5 clients.
            InvoiceFlow gives you 5 invoices/month free with no caps on Pro ($19/mo).
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
