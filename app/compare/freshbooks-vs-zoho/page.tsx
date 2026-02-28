import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'FreshBooks vs Zoho Invoice 2026: Paid vs Free Invoicing Compared | InvoiceFlow',
  description:
    'FreshBooks ($24/mo) vs Zoho Invoice (free, 500/yr cap) compared. Features, pricing, limitations, and a better free alternative for Australian freelancers.',
  alternates: { canonical: '/compare/freshbooks-vs-zoho' },
  keywords: ['freshbooks vs zoho invoice', 'freshbooks vs zoho', 'zoho invoice vs freshbooks', 'best free invoicing software 2026'],
  openGraph: {
    title: 'FreshBooks vs Zoho Invoice 2026 — Paid vs Free Invoicing',
    description: 'FreshBooks charges $24/mo. Zoho Invoice is free but capped at 500/year. Which is better for freelancers?',
  },
};

const siteUrl = 'https://invoiceflow-teal.vercel.app';

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
    { '@type': 'ListItem', position: 2, name: 'Compare', item: `${siteUrl}/compare` },
    { '@type': 'ListItem', position: 3, name: 'FreshBooks vs Zoho', item: `${siteUrl}/compare/freshbooks-vs-zoho` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is Zoho Invoice really free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Zoho Invoice offers a free plan, but it comes with significant limitations. You\'re capped at 500 invoices per year (about 42/month) and 5 clients. Once you outgrow these limits, Zoho pushes you to migrate to Zoho Books — a different product that starts at $15/mo. InvoiceFlow also offers a free tier (5 invoices/month) with no forced migration to a different product.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is FreshBooks better than Zoho Invoice?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'FreshBooks has better UX and more features (time tracking, expenses, proposals) but costs $24/mo with a 5-client cap on the Lite plan. Zoho Invoice is free but has a dated interface, authentication issues, and pushes you toward the Zoho ecosystem. For freelancers who just need clean invoicing with Australian compliance, InvoiceFlow is simpler than both.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens when I outgrow Zoho Invoice?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When you exceed 500 invoices/year or 5 clients, Zoho pushes you to migrate to Zoho Books (from $15/mo). This is a different product with a different interface. Your data migrates, but the workflow changes significantly. This ecosystem lock-in strategy is by design — Zoho Invoice is a lead generation tool for the broader Zoho suite.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Zoho Invoice work well in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Zoho Invoice has basic GST support but was primarily designed for the Indian and US markets. It lacks deep ATO integration, Australian-specific BAS reporting, and ABN validation. For Australian freelancers, InvoiceFlow offers purpose-built GST compliance, ABN integration, and tools designed for the Australian tax system.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I pay for FreshBooks or use free Zoho Invoice?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If you need time tracking, expense management, and proposals, FreshBooks is worth the $24/mo. If you just need basic invoicing and can stay under 500/year, Zoho Invoice works. But neither is ideal for Australian freelancers — FreshBooks lacks deep AU compliance, and Zoho forces migration when you grow. InvoiceFlow gives you free invoicing with full GST compliance and no migration trap.',
      },
    },
  ],
};

const features = [
  { feature: 'Starting price', freshbooks: '$24/mo (Lite)', zoho: 'Free', invoiceflow: 'Free', winner: 'zoho-if' },
  { feature: 'Invoice limit', freshbooks: 'Unlimited', zoho: '500/year', invoiceflow: '5/mo free, unlimited Pro', winner: 'freshbooks' },
  { feature: 'Client limit', freshbooks: '5 (Lite)', zoho: '5 (Free)', invoiceflow: 'Unlimited', winner: 'invoiceflow' },
  { feature: 'GST compliance (AU)', freshbooks: 'Basic', zoho: 'Basic', invoiceflow: 'Full', winner: 'invoiceflow' },
  { feature: 'Time tracking', freshbooks: 'Built-in', zoho: 'Built-in', invoiceflow: 'Not included', winner: 'freshbooks-zoho' },
  { feature: 'Expense tracking', freshbooks: 'Receipt scanning', zoho: 'Basic', invoiceflow: 'Not included', winner: 'freshbooks' },
  { feature: 'AI features', freshbooks: 'None', zoho: 'None (Zia in Books)', invoiceflow: 'Gemini AI', winner: 'invoiceflow' },
  { feature: 'Proposals/estimates', freshbooks: 'Yes', zoho: 'Yes', invoiceflow: 'Quotes', winner: 'freshbooks-zoho' },
  { feature: 'Ecosystem lock-in', freshbooks: 'Low', zoho: 'High (Zoho Books)', invoiceflow: 'None', winner: 'invoiceflow' },
  { feature: 'Mobile app', freshbooks: 'Good (iOS/Android)', zoho: 'Basic', invoiceflow: 'Responsive web', winner: 'freshbooks' },
  { feature: 'Trustpilot', freshbooks: '3.4/5', zoho: '4.0/5', invoiceflow: 'New', winner: 'zoho' },
  { feature: 'Ease of use', freshbooks: 'Easy', zoho: 'Moderate', invoiceflow: 'Simplest', winner: 'invoiceflow' },
];

export default function FreshBooksVsZohoPage() {
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
          <span className="text-slate-200">FreshBooks vs Zoho Invoice</span>
        </nav>

        {/* Hero */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-slate-200 mb-6">
            <span className="h-2 w-2 rounded-full bg-green-400" />
            Paid Premium vs Free-but-Capped
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 heading-font">
            <span className="text-green-400">FreshBooks</span> vs <span className="text-orange-400">Zoho Invoice</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-4">
            FreshBooks charges $24/mo for polished invoicing with a 5-client cap. Zoho Invoice is free — but capped
            at 500 invoices/year and designed to funnel you into Zoho Books. There&apos;s a third option.
          </p>
          <p className="text-sm text-slate-500">Updated February 2026</p>
        </div>

        {/* Quick Verdict */}
        <div className="glass rounded-3xl p-8 mb-12 border border-green-500/20">
          <h3 className="text-xl font-bold text-green-400 mb-4 heading-font">Quick Verdict</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400 mb-1">FreshBooks</div>
              <p className="text-sm text-slate-300">Best UX of the three. Time tracking, expenses, proposals built in. But $24/mo with a 5-client cap means you&apos;ll outgrow it fast.</p>
              <div className="text-xs text-slate-500 mt-2">From $24/mo</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-400 mb-1">Zoho Invoice</div>
              <p className="text-sm text-slate-300">Free is great — until you hit the 500/year cap and get pushed to Zoho Books ($15/mo+). Dated UI, authentication issues, limited AU compliance.</p>
              <div className="text-xs text-slate-500 mt-2">Free (500/yr cap)</div>
            </div>
            <div className="text-center border-2 border-teal-500/30 rounded-xl p-3 -m-3">
              <div className="text-2xl font-bold text-teal-400 mb-1">InvoiceFlow</div>
              <p className="text-sm text-slate-300">Free tier with no ecosystem trap. Full GST compliance. AI-powered. No client caps on Pro. The invoicing tool that doesn&apos;t try to upsell you into accounting.</p>
              <div className="text-xs text-teal-400 mt-2">Free or $19/mo</div>
            </div>
          </div>
        </div>

        {/* Zoho Ecosystem Warning */}
        <div className="rounded-2xl bg-orange-500/10 border border-orange-500/20 p-6 mb-12">
          <h3 className="text-lg font-bold text-orange-400 mb-3 heading-font">The Zoho Ecosystem Trap</h3>
          <p className="text-sm text-slate-300 mb-3">
            Zoho Invoice isn&apos;t a standalone product — it&apos;s a gateway to the Zoho ecosystem. Here&apos;s what happens:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="glass rounded-xl p-4">
              <div className="text-sm font-semibold text-orange-300 mb-2">Stage 1: Free Hook</div>
              <p className="text-xs text-slate-400">Zoho Invoice free plan. 500 invoices/year, 5 clients. Looks great on paper.</p>
            </div>
            <div className="glass rounded-xl p-4">
              <div className="text-sm font-semibold text-orange-300 mb-2">Stage 2: Hit the Cap</div>
              <p className="text-xs text-slate-400">You exceed 42 invoices/month or 5 clients. Time to &quot;upgrade.&quot;</p>
            </div>
            <div className="glass rounded-xl p-4">
              <div className="text-sm font-semibold text-orange-300 mb-2">Stage 3: Forced Migration</div>
              <p className="text-xs text-slate-400">Zoho migrates you to Zoho Books ($15/mo+). Different product, different workflow.</p>
            </div>
            <div className="glass rounded-xl p-4">
              <div className="text-sm font-semibold text-orange-300 mb-2">Stage 4: Ecosystem Lock-in</div>
              <p className="text-xs text-slate-400">Now you&apos;re in the Zoho ecosystem. CRM, HR, email — all Zoho. Hard to leave.</p>
            </div>
          </div>
        </div>

        {/* Feature Table */}
        <div className="glass rounded-3xl p-6 lg:p-8 mb-12 overflow-x-auto">
          <h3 className="text-2xl font-bold text-white mb-6 heading-font">Feature-by-Feature Comparison</h3>
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-3 px-4 text-slate-400 font-medium">Feature</th>
                <th className="text-left py-3 px-4 text-green-400 font-semibold">FreshBooks</th>
                <th className="text-left py-3 px-4 text-orange-400 font-semibold">Zoho Invoice</th>
                <th className="text-left py-3 px-4 text-teal-400 font-semibold bg-teal-500/5 rounded-t-xl">InvoiceFlow</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {features.map((row, i) => (
                <tr key={row.feature} className={i < features.length - 1 ? 'border-b border-white/5' : ''}>
                  <td className="py-3 px-4 text-slate-300 font-medium">{row.feature}</td>
                  <td className={`py-3 px-4 ${row.winner.includes('freshbooks') ? 'text-green-300 font-semibold' : 'text-slate-400'}`}>{row.freshbooks}</td>
                  <td className={`py-3 px-4 ${row.winner.includes('zoho') ? 'text-orange-300 font-semibold' : 'text-slate-400'}`}>{row.zoho}</td>
                  <td className={`py-3 px-4 bg-teal-500/5 ${row.winner === 'invoiceflow' || row.winner.includes('-if') ? 'text-teal-300 font-semibold' : 'text-slate-400'}`}>{row.invoiceflow}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* When to Choose */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="glass rounded-2xl p-6 border border-green-500/20">
            <h4 className="text-lg font-bold text-green-400 mb-3 heading-font">Choose FreshBooks If...</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex gap-2"><span className="text-green-400">+</span>You need time tracking built in</li>
              <li className="flex gap-2"><span className="text-green-400">+</span>You send proposals and estimates</li>
              <li className="flex gap-2"><span className="text-green-400">+</span>You want receipt scanning</li>
              <li className="flex gap-2"><span className="text-green-400">+</span>You have fewer than 5 clients</li>
            </ul>
          </div>
          <div className="glass rounded-2xl p-6 border border-orange-500/20">
            <h4 className="text-lg font-bold text-orange-400 mb-3 heading-font">Choose Zoho If...</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex gap-2"><span className="text-orange-400">+</span>You send fewer than 500 invoices/year</li>
              <li className="flex gap-2"><span className="text-orange-400">+</span>You already use Zoho products</li>
              <li className="flex gap-2"><span className="text-orange-400">+</span>You don&apos;t mind the migration path</li>
              <li className="flex gap-2"><span className="text-orange-400">+</span>You want basic time tracking free</li>
            </ul>
          </div>
          <div className="glass rounded-2xl p-6 border-2 border-teal-500/30 bg-teal-500/5">
            <h4 className="text-lg font-bold text-teal-400 mb-3 heading-font">Choose InvoiceFlow If...</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex gap-2"><span className="text-teal-400">+</span>You want free with no ecosystem trap</li>
              <li className="flex gap-2"><span className="text-teal-400">+</span>You&apos;re in Australia (GST + ABN)</li>
              <li className="flex gap-2"><span className="text-teal-400">+</span>You want AI-powered creation</li>
              <li className="flex gap-2"><span className="text-teal-400">+</span>No client cap, no forced migration</li>
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
              { label: 'FreshBooks Alternative', href: '/alternative-to/freshbooks' },
              { label: 'Zoho Alternative', href: '/alternative-to/zoho' },
              { label: 'FreshBooks vs Wave', href: '/compare/freshbooks-vs-wave' },
              { label: 'Wave vs Zoho', href: '/compare/wave-vs-zoho' },
              { label: 'Xero vs FreshBooks', href: '/compare/xero-vs-freshbooks' },
              { label: 'QuickBooks vs FreshBooks', href: '/compare/quickbooks-vs-freshbooks' },
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
            Free invoicing without the trap
          </h3>
          <p className="text-slate-300 max-w-xl mx-auto mb-8">
            Zoho is free until you grow. FreshBooks costs $24/mo from day one.
            InvoiceFlow gives you free invoicing that scales — no ecosystem lock-in, no client caps.
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
