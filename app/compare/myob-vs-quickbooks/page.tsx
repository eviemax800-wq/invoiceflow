import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'MYOB vs QuickBooks 2026: Best Accounting for Australian Freelancers? | InvoiceFlow',
  description:
    'MYOB ($34/mo) vs QuickBooks ($20/mo) compared for Australia. Features, pricing, GST, support. Plus a simpler invoicing alternative from $0/mo.',
  alternates: { canonical: '/compare/myob-vs-quickbooks' },
  keywords: ['myob vs quickbooks', 'myob vs quickbooks australia', 'myob or quickbooks for sole trader', 'quickbooks vs myob pricing'],
  openGraph: {
    title: 'MYOB vs QuickBooks 2026 — Australian Freelancer Comparison',
    description: 'Australia\'s traditional accounting software vs the US giant. Which is better for freelancers? Full pricing and feature comparison.',
  },
};

const siteUrl = 'https://invoiceflow-teal.vercel.app';

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
    { '@type': 'ListItem', position: 2, name: 'Compare', item: `${siteUrl}/compare` },
    { '@type': 'ListItem', position: 3, name: 'MYOB vs QuickBooks', item: `${siteUrl}/compare/myob-vs-quickbooks` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is MYOB or QuickBooks better for Australian freelancers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MYOB has deeper Australian roots with better local support and Single Touch Payroll integration. QuickBooks is cheaper at $20/mo but has a 1.1/5 Trustpilot score and limited Australian compliance. However, both are full accounting suites. If you primarily need invoicing, InvoiceFlow offers a free tier with full GST compliance at a fraction of the cost.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is QuickBooks so cheap compared to MYOB?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'QuickBooks Solopreneur at $20/mo is cheap because it only allows 2 invoices per month — not usable for active freelancers. Simple Start ($35/mo) is the real comparable tier to MYOB Business Lite ($34/mo). QuickBooks also has fewer Australian-specific features, which reduces development costs but means less ATO compliance support.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does QuickBooks work well in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'QuickBooks works in Australia but is primarily designed for the US market. It supports basic GST but lacks the depth of Australian compliance that MYOB offers (decades of ATO integration, local payroll awards). QuickBooks has a 1.1/5 Trustpilot score with complaints about pricing increases, UI changes, and support quality. InvoiceFlow is built specifically for Australian freelancers with full GST and ABN compliance.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happened to MYOB pricing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MYOB was taken private by KKR (private equity) for A$2B in 2023. Since then, MYOB has increased prices and confirmed another price increase for March 2026. Business Lite is now $34/mo with no free tier. The move to private equity ownership typically signals continued price increases to service the acquisition debt.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I just use invoicing software instead of MYOB or QuickBooks?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Research shows 72% of Australian sole traders primarily need invoicing, not full accounting. If your main need is creating GST-compliant invoices, tracking payments, and managing clients, InvoiceFlow does this from $0/mo. You can keep your accountant using MYOB or QuickBooks for year-end while using InvoiceFlow for daily invoicing, saving $180-420/year.',
      },
    },
  ],
};

const features = [
  { feature: 'Starting price', myob: '$34/mo (Lite)', quickbooks: '$20/mo (Solo)', invoiceflow: 'Free', winner: 'invoiceflow' },
  { feature: 'Realistic entry tier', myob: '$34/mo', quickbooks: '$35/mo (Simple Start)', invoiceflow: '$0/mo', winner: 'invoiceflow' },
  { feature: 'Free tier', myob: 'No', quickbooks: 'No', invoiceflow: 'Yes (5/mo)', winner: 'invoiceflow' },
  { feature: 'Invoice limit (entry)', myob: 'Unlimited', quickbooks: '2/mo (Solo)', invoiceflow: '5/mo (free)', winner: 'myob' },
  { feature: 'AU compliance depth', myob: 'Deep (30+ years)', quickbooks: 'Basic', invoiceflow: 'Full GST + ABN', winner: 'myob' },
  { feature: 'BAS preparation', myob: 'Full', quickbooks: 'Full', invoiceflow: 'GST summary', winner: 'tie' },
  { feature: 'Payroll (AU)', myob: '+$2/emp/mo', quickbooks: 'Included ($65+)', invoiceflow: 'Not included', winner: 'quickbooks' },
  { feature: 'AI features', myob: 'None', quickbooks: 'Intuit Assist', invoiceflow: 'Gemini AI', winner: 'quickbooks-if' },
  { feature: 'Phone support', myob: 'Yes', quickbooks: 'Limited', invoiceflow: 'Email', winner: 'myob' },
  { feature: 'Trustpilot rating', myob: '2.1/5', quickbooks: '1.1/5', invoiceflow: 'New', winner: 'myob' },
  { feature: 'Desktop version', myob: 'AccountRight (desktop)', quickbooks: 'Online only', invoiceflow: 'Web only', winner: 'myob' },
  { feature: 'Ease of use', myob: 'Complex', quickbooks: 'Moderate', invoiceflow: 'Simple', winner: 'invoiceflow' },
];

export default function MyobVsQuickBooksPage() {
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
          <span className="text-slate-200">MYOB vs QuickBooks</span>
        </nav>

        {/* Hero */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-slate-200 mb-6">
            <span className="h-2 w-2 rounded-full bg-rose-400" />
            Australia&apos;s Veteran vs The Global Giant
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 heading-font">
            <span className="text-purple-400">MYOB</span> vs <span className="text-red-400">QuickBooks</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-4">
            30 years of Australian accounting heritage vs the $108B Intuit machine.
            Both charge $34-35/mo for basic invoicing. There&apos;s a simpler way.
          </p>
          <p className="text-sm text-slate-500">Updated February 2026</p>
        </div>

        {/* Quick Verdict */}
        <div className="glass rounded-3xl p-8 mb-12 border border-rose-500/20">
          <h3 className="text-xl font-bold text-rose-400 mb-4 heading-font">Quick Verdict</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400 mb-1">MYOB</div>
              <p className="text-sm text-slate-300">Best for freelancers who want deep AU compliance, phone support, and their accountant already uses MYOB. Higher quality AU-specific features.</p>
              <div className="text-xs text-slate-500 mt-2">From $34/mo</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-400 mb-1">QuickBooks</div>
              <p className="text-sm text-slate-300">Better for international freelancers or those wanting integrated payroll. Cheaper entry point but 2-invoice cap on Solo. 1.1/5 Trustpilot.</p>
              <div className="text-xs text-slate-500 mt-2">From $20/mo (2 invoices)</div>
            </div>
            <div className="text-center border-2 border-teal-500/30 rounded-xl p-3 -m-3">
              <div className="text-2xl font-bold text-teal-400 mb-1">InvoiceFlow</div>
              <p className="text-sm text-slate-300">Best for freelancers who need invoicing without accounting complexity. Free tier, AI-powered, full GST compliance, modern interface.</p>
              <div className="text-xs text-teal-400 mt-2">Free or $19/mo</div>
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div className="glass rounded-3xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-white mb-6 heading-font">Pricing Breakdown</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl bg-purple-500/5 border border-purple-500/20 p-6">
              <div className="text-lg font-bold text-purple-400 mb-4">MYOB</div>
              <div className="space-y-3">
                {[
                  { tier: 'Business Lite', price: '$34/mo', note: 'Basic invoicing + GST' },
                  { tier: 'Business Pro', price: '$54/mo', note: 'Expenses + bills' },
                  { tier: 'AccountRight Plus', price: '$69/mo', note: 'Multi-user, inventory' },
                ].map((t) => (
                  <div key={t.tier} className="flex justify-between items-center">
                    <div><div className="text-white text-sm font-medium">{t.tier}</div><div className="text-xs text-slate-500">{t.note}</div></div>
                    <div className="text-purple-300 font-semibold text-sm">{t.price}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-purple-500/20 text-xs text-slate-400">KKR-owned. Price increase Mar 2026. +$2/emp/mo payroll.</div>
            </div>
            <div className="rounded-2xl bg-red-500/5 border border-red-500/20 p-6">
              <div className="text-lg font-bold text-red-400 mb-4">QuickBooks</div>
              <div className="space-y-3">
                {[
                  { tier: 'Solopreneur', price: '$20/mo', note: '2 invoices only' },
                  { tier: 'Simple Start', price: '$35/mo', note: 'Basic accounting' },
                  { tier: 'Essentials', price: '$65/mo', note: 'Multi-currency, bills' },
                ].map((t) => (
                  <div key={t.tier} className="flex justify-between items-center">
                    <div><div className="text-white text-sm font-medium">{t.tier}</div><div className="text-xs text-slate-500">{t.note}</div></div>
                    <div className="text-red-300 font-semibold text-sm">{t.price}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-red-500/20 text-xs text-slate-400">Trustpilot 1.1/5. Prices up 40-88% since 2020.</div>
            </div>
            <div className="rounded-2xl bg-teal-500/10 border-2 border-teal-500/30 p-6">
              <div className="text-lg font-bold text-teal-400 mb-4">InvoiceFlow</div>
              <div className="space-y-3">
                {[
                  { tier: 'Free', price: '$0/mo', note: '5 invoices/month' },
                  { tier: 'Pro', price: '$19/mo', note: 'Unlimited invoicing' },
                  { tier: 'Premium', price: '$39/mo', note: 'Multi-business' },
                ].map((t) => (
                  <div key={t.tier} className="flex justify-between items-center">
                    <div><div className="text-white text-sm font-medium">{t.tier}</div><div className="text-xs text-slate-500">{t.note}</div></div>
                    <div className="text-teal-300 font-semibold text-sm">{t.price}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-teal-500/20 text-xs text-teal-300">No credit card. AI-powered. Made for AU freelancers.</div>
            </div>
          </div>
          <div className="mt-6 text-center">
            <p className="text-sm text-slate-400">
              <span className="text-emerald-400 font-semibold">Save $180-$600/year</span> vs MYOB.{' '}
              <span className="text-emerald-400 font-semibold">Save $12-$552/year</span> vs QuickBooks.
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
                <th className="text-left py-3 px-4 text-purple-400 font-semibold">MYOB</th>
                <th className="text-left py-3 px-4 text-red-400 font-semibold">QuickBooks</th>
                <th className="text-left py-3 px-4 text-teal-400 font-semibold bg-teal-500/5 rounded-t-xl">InvoiceFlow</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {features.map((row, i) => (
                <tr key={row.feature} className={i < features.length - 1 ? 'border-b border-white/5' : ''}>
                  <td className="py-3 px-4 text-slate-300 font-medium">{row.feature}</td>
                  <td className={`py-3 px-4 ${row.winner === 'myob' || row.winner === 'tie' ? 'text-purple-300 font-semibold' : 'text-slate-400'}`}>{row.myob}</td>
                  <td className={`py-3 px-4 ${row.winner.includes('quickbooks') ? 'text-red-300 font-semibold' : 'text-slate-400'}`}>{row.quickbooks}</td>
                  <td className={`py-3 px-4 bg-teal-500/5 ${row.winner === 'invoiceflow' || row.winner.includes('-if') ? 'text-teal-300 font-semibold' : 'text-slate-400'}`}>{row.invoiceflow}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Trustpilot Reality Check */}
        <div className="glass rounded-3xl p-8 mb-12">
          <h3 className="text-xl font-bold text-white mb-4 heading-font">Trustpilot Reality Check</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-red-500/5 border border-red-500/20 p-5">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl font-bold text-red-400">1.1/5</span>
                <span className="text-white font-medium">QuickBooks on Trustpilot</span>
              </div>
              <ul className="space-y-1 text-sm text-slate-400">
                <li>- Prices up 40-88% with no warning</li>
                <li>- Oct 2025 UI overhaul universally hated</li>
                <li>- Solopreneur: $20/mo for 2 invoices</li>
                <li>- Intuit Assist AI makes categorisation errors</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-purple-500/5 border border-purple-500/20 p-5">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl font-bold text-purple-400">2.1/5</span>
                <span className="text-white font-medium">MYOB on Trustpilot</span>
              </div>
              <ul className="space-y-1 text-sm text-slate-400">
                <li>- Support quality declining post-KKR</li>
                <li>- Price increases every year</li>
                <li>- Interface feels dated vs Xero</li>
                <li>- Payroll unbundled (+$2/employee)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* When to Choose */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="glass rounded-2xl p-6 border border-purple-500/20">
            <h4 className="text-lg font-bold text-purple-400 mb-3 heading-font">Choose MYOB If...</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex gap-2"><span className="text-purple-400">+</span>Your accountant uses MYOB</li>
              <li className="flex gap-2"><span className="text-purple-400">+</span>You want phone support</li>
              <li className="flex gap-2"><span className="text-purple-400">+</span>You need desktop software</li>
              <li className="flex gap-2"><span className="text-purple-400">+</span>Deep AU compliance matters</li>
            </ul>
          </div>
          <div className="glass rounded-2xl p-6 border border-red-500/20">
            <h4 className="text-lg font-bold text-red-400 mb-3 heading-font">Choose QuickBooks If...</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex gap-2"><span className="text-red-400">+</span>You need integrated payroll</li>
              <li className="flex gap-2"><span className="text-red-400">+</span>You work internationally</li>
              <li className="flex gap-2"><span className="text-red-400">+</span>You want Intuit ecosystem</li>
              <li className="flex gap-2"><span className="text-red-400">+</span>Budget is primary concern</li>
            </ul>
          </div>
          <div className="glass rounded-2xl p-6 border-2 border-teal-500/30 bg-teal-500/5">
            <h4 className="text-lg font-bold text-teal-400 mb-3 heading-font">Choose InvoiceFlow If...</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex gap-2"><span className="text-teal-400">+</span>Invoicing is your main need</li>
              <li className="flex gap-2"><span className="text-teal-400">+</span>You want to start free</li>
              <li className="flex gap-2"><span className="text-teal-400">+</span>You want AI invoice creation</li>
              <li className="flex gap-2"><span className="text-teal-400">+</span>You want a modern, simple UI</li>
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

        {/* Related */}
        <div className="glass rounded-3xl p-8 mb-12">
          <h3 className="text-lg font-bold text-white mb-4 heading-font">Related Comparisons</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { label: 'MYOB Alternative', href: '/alternative-to/myob' },
              { label: 'QuickBooks Alternative', href: '/alternative-to/quickbooks' },
              { label: 'Xero vs MYOB', href: '/compare/xero-vs-myob' },
              { label: 'Xero vs FreshBooks', href: '/compare/xero-vs-freshbooks' },
              { label: 'FreshBooks vs Wave', href: '/compare/freshbooks-vs-wave' },
              { label: 'Tax Guide', href: '/guides/tax-guide-freelancers' },
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
            Invoicing without the accounting tax
          </h3>
          <p className="text-slate-300 max-w-xl mx-auto mb-8">
            MYOB and QuickBooks charge $34-35/mo for accounting suites most freelancers don&apos;t need.
            InvoiceFlow gives you AI-powered invoicing from $0/mo.
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
