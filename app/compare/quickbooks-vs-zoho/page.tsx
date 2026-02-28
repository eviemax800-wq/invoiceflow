import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'QuickBooks vs Zoho Invoice 2026: Paid vs Free — Worth It? | InvoiceFlow',
  description:
    'QuickBooks ($35/mo, 1.1/5 Trustpilot) vs Zoho Invoice (free, 500/yr cap). Which invoicing tool is better for Australian freelancers? Plus a free alternative.',
  alternates: { canonical: '/compare/quickbooks-vs-zoho' },
  keywords: ['quickbooks vs zoho invoice', 'quickbooks vs zoho', 'zoho invoice vs quickbooks', 'quickbooks alternative free', 'cheapest invoicing software australia'],
  openGraph: {
    title: 'QuickBooks vs Zoho Invoice 2026 — Paid vs Free Showdown',
    description: 'QuickBooks charges $35/mo with 1.1/5 on Trustpilot. Zoho Invoice is free but capped at 500/year. Which is better for freelancers?',
  },
};

const siteUrl = 'https://invoiceflow-teal.vercel.app';

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
    { '@type': 'ListItem', position: 2, name: 'Compare', item: `${siteUrl}/compare` },
    { '@type': 'ListItem', position: 3, name: 'QuickBooks vs Zoho', item: `${siteUrl}/compare/quickbooks-vs-zoho` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is QuickBooks better than Zoho Invoice?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'QuickBooks has more features (full accounting, tax, payroll) but costs $35+/mo and has 1.1/5 on Trustpilot. Zoho Invoice is free but capped. For pure invoicing, InvoiceFlow gives you free AU-compliant invoicing without either\'s downsides.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why does QuickBooks have such bad reviews?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'QuickBooks\' 1.1/5 Trustpilot score stems from billing disputes, poor customer service, hidden fees, and auto-renewal complaints. Many of these issues relate to Intuit\'s corporate practices rather than the software itself. InvoiceFlow offers transparent pricing with no surprises.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can Zoho Invoice handle Australian GST?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Zoho Invoice has basic tax support but wasn\'t designed for Australian compliance. It lacks ATO integration, ABN validation, and BAS reporting. For AU-specific tax compliance, InvoiceFlow is purpose-built for Australian freelancers.',
      },
    },
    {
      '@type': 'Question',
      name: 'What\'s the real cost of Zoho Invoice long-term?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Zoho Invoice is free up to 500 invoices/year and 5 clients. Once you exceed these limits, you\'re migrated to Zoho Books ($15/mo+). Over 2 years, expect $180+ as you grow. InvoiceFlow\'s free tier has no forced migration path.',
      },
    },
    {
      '@type': 'Question',
      name: 'What\'s the best invoicing software for Australian freelancers in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For AU freelancers specifically: InvoiceFlow (free, full GST/ABN, AI), Xero ($35/mo, full accounting), or MYOB ($34/mo, AU legacy). QuickBooks and Zoho weren\'t built for the Australian market. InvoiceFlow is the only free option with full AU compliance.',
      },
    },
  ],
};

const features = [
  { feature: 'Starting price', quickbooks: '$35/mo (Simple Start)', zoho: 'Free', invoiceflow: 'Free', winner: 'zoho-if' },
  { feature: 'Invoice limit', quickbooks: '2/mo (Simple Start)', zoho: '500/year', invoiceflow: '5/mo free, unlimited Pro', winner: 'zoho' },
  { feature: 'Client limit', quickbooks: 'Unlimited', zoho: '5 (Free)', invoiceflow: 'Unlimited', winner: 'quickbooks-if' },
  { feature: 'Free tier', quickbooks: 'No', zoho: 'Yes (capped)', invoiceflow: 'Yes (5/mo)', winner: 'zoho-if' },
  { feature: 'GST compliance (AU)', quickbooks: 'Limited', zoho: 'Basic', invoiceflow: 'Full', winner: 'invoiceflow' },
  { feature: 'AI features', quickbooks: 'Limited', zoho: 'None', invoiceflow: 'Gemini AI', winner: 'invoiceflow' },
  { feature: 'Accounting', quickbooks: 'Full suite', zoho: 'Via Zoho Books', invoiceflow: 'Not included', winner: 'quickbooks' },
  { feature: 'Ecosystem lock-in', quickbooks: 'Moderate (Intuit)', zoho: 'High (Zoho Books)', invoiceflow: 'None', winner: 'invoiceflow' },
  { feature: 'Multi-currency', quickbooks: 'Yes', zoho: 'Yes', invoiceflow: 'AUD + major', winner: 'quickbooks-zoho' },
  { feature: 'Mobile app', quickbooks: 'Full-featured', zoho: 'Basic', invoiceflow: 'Progressive Web', winner: 'quickbooks' },
  { feature: 'Trustpilot', quickbooks: '1.1/5', zoho: '4.0/5', invoiceflow: 'New', winner: 'zoho' },
  { feature: 'Best for', quickbooks: 'US businesses', zoho: 'Very small freelancers', invoiceflow: 'AU freelancers', winner: 'invoiceflow' },
];

export default function QuickBooksVsZohoPage() {
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
          <span className="text-slate-200">QuickBooks vs Zoho Invoice</span>
        </nav>

        {/* Hero */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-slate-200 mb-6">
            <span className="h-2 w-2 rounded-full bg-amber-400" />
            Overpriced vs Overcapped
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 heading-font">
            <span className="text-red-400">QuickBooks</span> vs <span className="text-orange-400">Zoho Invoice</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-4">
            QuickBooks charges $35/mo with a 1.1/5 Trustpilot rating. Zoho Invoice is free — but capped
            at 500 invoices/year and designed to funnel you into Zoho Books. There&apos;s a third option.
          </p>
          <p className="text-sm text-slate-500">Updated February 2026</p>
        </div>

        {/* Quick Verdict */}
        <div className="glass rounded-3xl p-8 mb-12 border border-amber-500/20">
          <h3 className="text-xl font-bold text-amber-400 mb-4 heading-font">Quick Verdict</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-red-400 mb-1">QuickBooks</div>
              <p className="text-sm text-slate-300">Global giant with extensive features. But $35/mo minimum, 1.1/5 on Trustpilot, 2-invoice cap on cheapest plan, and poor AU compliance.</p>
              <div className="text-xs text-slate-500 mt-2">From $35/mo</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-400 mb-1">Zoho Invoice</div>
              <p className="text-sm text-slate-300">Free with decent features. But 500/year cap, 5 clients max, and funnels you into Zoho Books ecosystem. Built for Indian/US markets.</p>
              <div className="text-xs text-slate-500 mt-2">Free (500/yr cap)</div>
            </div>
            <div className="text-center border-2 border-teal-500/30 rounded-xl p-3 -m-3">
              <div className="text-2xl font-bold text-teal-400 mb-1">InvoiceFlow</div>
              <p className="text-sm text-slate-300">Free tier with full Australian compliance. No Intuit&apos;s 1.1/5 reputation issues, no Zoho&apos;s ecosystem funnel. Built for AU freelancers.</p>
              <div className="text-xs text-teal-400 mt-2">Free or $19/mo</div>
            </div>
          </div>
        </div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="rounded-2xl bg-red-500/10 border border-red-500/20 p-6">
            <h3 className="text-lg font-bold text-red-400 mb-2 heading-font">QuickBooks&apos; Reputation Crisis</h3>
            <p className="text-sm text-slate-400 mb-4">1.1 out of 5 on Trustpilot:</p>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex gap-2"><span className="text-red-400">-</span>$35/mo minimum for basic invoicing</li>
              <li className="flex gap-2"><span className="text-red-400">-</span>Only 2 invoices on cheapest plan</li>
              <li className="flex gap-2"><span className="text-red-400">-</span>1.1/5 Trustpilot — one of the lowest-rated tools</li>
              <li className="flex gap-2"><span className="text-red-400">-</span>Designed for US market, poor AU compliance</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-orange-500/10 border border-orange-500/20 p-6">
            <h3 className="text-lg font-bold text-orange-400 mb-2 heading-font">Zoho&apos;s Growth Ceiling</h3>
            <p className="text-sm text-slate-400 mb-4">Free until you need more:</p>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex gap-2"><span className="text-orange-400">-</span>500 invoices/year hard limit</li>
              <li className="flex gap-2"><span className="text-orange-400">-</span>Only 5 clients on free plan</li>
              <li className="flex gap-2"><span className="text-orange-400">-</span>No ATO integration or BAS support</li>
              <li className="flex gap-2"><span className="text-orange-400">-</span>Forced to Zoho Books when you outgrow</li>
            </ul>
          </div>
        </div>

        {/* Annual Cost Comparison */}
        <div className="glass rounded-3xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-white mb-6 heading-font">Annual Cost Comparison</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl bg-red-500/5 border border-red-500/20 p-6">
              <div className="text-lg font-bold text-red-400 mb-4">QuickBooks</div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <div className="text-white text-sm font-medium">Year 1</div>
                  <div className="text-red-300 font-semibold text-sm">$420</div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-white text-sm font-medium">Year 2</div>
                  <div className="text-red-300 font-semibold text-sm">$420</div>
                </div>
                <div className="flex justify-between items-center border-t border-red-500/20 pt-3">
                  <div className="text-white text-sm font-bold">Total (2 years)</div>
                  <div className="text-red-300 font-bold">$840</div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-red-500/20 text-xs text-slate-400">
                + 1.1/5 Trustpilot risk. Prices have risen 40-88% since 2020.
              </div>
            </div>
            <div className="rounded-2xl bg-orange-500/5 border border-orange-500/20 p-6">
              <div className="text-lg font-bold text-orange-400 mb-4">Zoho Invoice</div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <div className="text-white text-sm font-medium">Year 1</div>
                  <div className="text-orange-300 font-semibold text-sm">$0</div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-white text-sm font-medium">Year 2</div>
                    <div className="text-xs text-slate-500">Zoho Books migration</div>
                  </div>
                  <div className="text-orange-300 font-semibold text-sm">$180</div>
                </div>
                <div className="flex justify-between items-center border-t border-orange-500/20 pt-3">
                  <div className="text-white text-sm font-bold">Total (2 years)</div>
                  <div className="text-orange-300 font-bold">$180</div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-orange-500/20 text-xs text-slate-400">
                + ecosystem lock-in. Forced migration to Zoho Books when you grow.
              </div>
            </div>
            <div className="rounded-2xl bg-teal-500/10 border-2 border-teal-500/30 p-6">
              <div className="text-lg font-bold text-teal-400 mb-4">InvoiceFlow</div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <div className="text-white text-sm font-medium">Year 1</div>
                  <div className="text-teal-300 font-semibold text-sm">$0</div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-white text-sm font-medium">Year 2</div>
                  <div className="text-teal-300 font-semibold text-sm">$0–228</div>
                </div>
                <div className="flex justify-between items-center border-t border-teal-500/20 pt-3">
                  <div className="text-white text-sm font-bold">Total (2 years)</div>
                  <div className="text-teal-300 font-bold">$0–228</div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-teal-500/20 text-xs text-teal-300">
                No lock-in, no risk. Free tier forever. Pro only if you need it.
              </div>
            </div>
          </div>
          <div className="mt-6 text-center">
            <p className="text-sm text-slate-400">
              <span className="text-emerald-400 font-semibold">Save up to $840/year</span> vs QuickBooks.{' '}
              <span className="text-emerald-400 font-semibold">No forced migration</span> vs Zoho.
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
                <th className="text-left py-3 px-4 text-orange-400 font-semibold">Zoho Invoice</th>
                <th className="text-left py-3 px-4 text-teal-400 font-semibold bg-teal-500/5 rounded-t-xl">InvoiceFlow</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {features.map((row, i) => (
                <tr key={row.feature} className={i < features.length - 1 ? 'border-b border-white/5' : ''}>
                  <td className="py-3 px-4 text-slate-300 font-medium">{row.feature}</td>
                  <td className={`py-3 px-4 ${row.winner === 'quickbooks' || row.winner.includes('quickbooks-') ? 'text-red-300 font-semibold' : 'text-slate-400'}`}>{row.quickbooks}</td>
                  <td className={`py-3 px-4 ${row.winner === 'zoho' || row.winner.includes('zoho-') || row.winner.includes('-zoho') ? 'text-orange-300 font-semibold' : 'text-slate-400'}`}>{row.zoho}</td>
                  <td className={`py-3 px-4 bg-teal-500/5 ${row.winner === 'invoiceflow' || row.winner.includes('-if') ? 'text-teal-300 font-semibold' : 'text-slate-400'}`}>{row.invoiceflow}</td>
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
              <li className="flex gap-2"><span className="text-red-400">+</span>You need full accounting + tax</li>
              <li className="flex gap-2"><span className="text-red-400">+</span>You&apos;re US-based</li>
              <li className="flex gap-2"><span className="text-red-400">+</span>Your accountant requires QuickBooks</li>
              <li className="flex gap-2"><span className="text-red-400">+</span>You need extensive integrations</li>
            </ul>
          </div>
          <div className="glass rounded-2xl p-6 border border-orange-500/20">
            <h4 className="text-lg font-bold text-orange-400 mb-3 heading-font">Choose Zoho If...</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex gap-2"><span className="text-orange-400">+</span>You send fewer than 42 invoices/month</li>
              <li className="flex gap-2"><span className="text-orange-400">+</span>You already use Zoho CRM/Books</li>
              <li className="flex gap-2"><span className="text-orange-400">+</span>Free is non-negotiable</li>
              <li className="flex gap-2"><span className="text-orange-400">+</span>You want basic time tracking</li>
            </ul>
          </div>
          <div className="glass rounded-2xl p-6 border-2 border-teal-500/30 bg-teal-500/5">
            <h4 className="text-lg font-bold text-teal-400 mb-3 heading-font">Choose InvoiceFlow If...</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex gap-2"><span className="text-teal-400">+</span>You&apos;re an Australian freelancer</li>
              <li className="flex gap-2"><span className="text-teal-400">+</span>You want free without caps or traps</li>
              <li className="flex gap-2"><span className="text-teal-400">+</span>You want AI-powered invoice creation</li>
              <li className="flex gap-2"><span className="text-teal-400">+</span>You need GST/ABN compliance built-in</li>
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

        {/* Related Comparisons */}
        <div className="glass rounded-3xl p-8 mb-12">
          <h3 className="text-lg font-bold text-white mb-4 heading-font">Related Comparisons</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { label: 'QuickBooks Alternative', href: '/alternative-to/quickbooks' },
              { label: 'Zoho Alternative', href: '/alternative-to/zoho' },
              { label: 'QuickBooks vs FreshBooks', href: '/compare/quickbooks-vs-freshbooks' },
              { label: 'QuickBooks vs Wave', href: '/compare/quickbooks-vs-wave' },
              { label: 'Xero vs Zoho', href: '/compare/xero-vs-zoho' },
              { label: 'MYOB vs Zoho', href: '/compare/myob-vs-zoho' },
              { label: 'Free Tools', href: '/tools' },
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
            Free invoicing without the reputation risk
          </h3>
          <p className="text-slate-300 max-w-xl mx-auto mb-8">
            QuickBooks costs $35/mo with a 1.1/5 Trustpilot score. Zoho is free until you outgrow it.
            InvoiceFlow gives you free AU-compliant invoicing — no caps, no traps, no ecosystem lock-in.
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
