import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Xero vs Zoho Invoice 2026: Market Leader vs Free Option | InvoiceFlow',
  description:
    'Xero ($35/mo, 78% AU market share) vs Zoho Invoice (free, 500/yr cap) — which is better for Australian freelancers? Plus a free alternative.',
  alternates: { canonical: '/compare/xero-vs-zoho' },
  keywords: ['xero vs zoho invoice', 'xero vs zoho', 'zoho invoice vs xero', 'xero alternative free', 'best invoicing software australia 2026'],
  openGraph: {
    title: 'Xero vs Zoho Invoice 2026 — Market Leader vs Free Option',
    description: 'Xero charges $35/mo with 78% AU market share. Zoho Invoice is free but capped at 500/year. Which is better for Australian freelancers?',
  },
};

const siteUrl = 'https://invoiceflow-teal.vercel.app';

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
    { '@type': 'ListItem', position: 2, name: 'Compare', item: `${siteUrl}/compare` },
    { '@type': 'ListItem', position: 3, name: 'Xero vs Zoho Invoice', item: `${siteUrl}/compare/xero-vs-zoho` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is Xero worth the price compared to Zoho Invoice?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Xero at $35/mo+ offers full accounting, but most freelancers only need invoicing. Zoho is free but capped at 500/year. For invoicing-only needs, InvoiceFlow gives you full AU compliance free.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Zoho Invoice work well in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Zoho Invoice was built for Indian/US markets. It has basic tax support but lacks deep ATO integration, ABN validation, and BAS reporting that Xero offers. InvoiceFlow is purpose-built for Australian freelancers with full GST compliance.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can Zoho Invoice replace Xero for freelancers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For basic invoicing yes, but you lose BAS reporting, bank reconciliation, and AU payroll. For sole traders who just need to send professional invoices and track payments, InvoiceFlow offers the invoicing features without Xero\'s complexity or Zoho\'s caps.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens when I hit Zoho Invoice\'s 500/year limit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You\'re forced to upgrade to Zoho Books ($15/mo+), which is a full accounting suite with a different interface. Your data migrates but the experience changes. InvoiceFlow\'s Pro plan ($19/mo) gives unlimited invoicing without platform migration.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which is the best free invoicing software in Australia for 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Best genuinely free options: InvoiceFlow (5/mo, full GST, AI, no client cap), Zoho Invoice (500/yr, 5 clients, no AU focus), Wave (no longer free). For AU freelancers, InvoiceFlow\'s free tier is the strongest with full ABN/GST compliance.',
      },
    },
  ],
};

const features = [
  { feature: 'Starting price', xero: '$35/mo (Starter)', zoho: 'Free', invoiceflow: 'Free', winner: 'zoho-if' },
  { feature: 'Invoice limit', xero: '5/mo (Starter)', zoho: '500/year', invoiceflow: '5/mo free, unlimited Pro', winner: 'zoho' },
  { feature: 'Client limit', xero: 'Unlimited', zoho: '5 (Free)', invoiceflow: 'Unlimited', winner: 'xero-if' },
  { feature: 'Free tier', xero: 'No', zoho: 'Yes (capped)', invoiceflow: 'Yes (5/mo)', winner: 'zoho-if' },
  { feature: 'GST compliance (AU)', xero: 'Excellent', zoho: 'Basic', invoiceflow: 'Full', winner: 'xero-if' },
  { feature: 'AI features', xero: 'None', zoho: 'None', invoiceflow: 'Gemini AI', winner: 'invoiceflow' },
  { feature: 'BAS reporting', xero: 'Built-in', zoho: 'None', invoiceflow: 'Guided', winner: 'xero' },
  { feature: 'Ecosystem lock-in', xero: 'Moderate (advisors)', zoho: 'High (Zoho Books)', invoiceflow: 'None', winner: 'invoiceflow' },
  { feature: 'Multi-currency', xero: '160+ currencies', zoho: 'Yes', invoiceflow: 'AUD + major', winner: 'xero' },
  { feature: 'Payroll', xero: 'Built-in (extra cost)', zoho: 'Via Zoho Payroll', invoiceflow: 'Not included', winner: 'xero' },
  { feature: 'Trustpilot', xero: '1.8/5', zoho: '4.0/5', invoiceflow: 'New', winner: 'zoho' },
  { feature: 'Best for', xero: 'Growing businesses', zoho: 'Very small freelancers', invoiceflow: 'AU freelancers', winner: 'invoiceflow' },
];

export default function XeroVsZohoPage() {
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
          <span className="text-slate-200">Xero vs Zoho Invoice</span>
        </nav>

        {/* Hero */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-slate-200 mb-6">
            <span className="h-2 w-2 rounded-full bg-blue-400" />
            Market Leader vs Free Tier
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 heading-font">
            <span className="text-blue-400">Xero</span> vs <span className="text-orange-400">Zoho Invoice</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-4">
            Xero dominates Australia with 78% market share at $35-78/mo. Zoho Invoice is free but caps you
            at 500 invoices/year and 5 clients. One is overkill, the other is a funnel. Is there a better option?
          </p>
          <p className="text-sm text-slate-500">Updated February 2026</p>
        </div>

        {/* Quick Verdict */}
        <div className="glass rounded-3xl p-8 mb-12 border border-blue-500/20">
          <h3 className="text-xl font-bold text-blue-400 mb-4 heading-font">Quick Verdict</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400 mb-1">Xero</div>
              <p className="text-sm text-slate-300">AU market leader with 78% market share. Full ATO integration, BAS, payroll. But $35-78/mo is overkill for solo freelancers.</p>
              <div className="text-xs text-slate-500 mt-2">From $35/mo</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-400 mb-1">Zoho Invoice</div>
              <p className="text-sm text-slate-300">Free with basic invoicing. But 500/year cap, 5 clients, and eventual push to Zoho Books ($15+/mo). Built for Indian/US markets, not AU.</p>
              <div className="text-xs text-slate-500 mt-2">Free (500/yr cap)</div>
            </div>
            <div className="text-center border-2 border-teal-500/30 rounded-xl p-3 -m-3">
              <div className="text-2xl font-bold text-teal-400 mb-1">InvoiceFlow</div>
              <p className="text-sm text-slate-300">Free tier with full Australian compliance. No ecosystem trap, no accounting bloat. Just invoicing, done right.</p>
              <div className="text-xs text-teal-400 mt-2">Free or $19/mo</div>
            </div>
          </div>
        </div>

        {/* The Problem With Both */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="rounded-2xl bg-blue-500/10 border border-blue-500/20 p-6">
            <h3 className="text-lg font-bold text-blue-400 mb-3 heading-font">Xero&apos;s Overkill Problem</h3>
            <p className="text-sm text-slate-300 mb-3">Paying for accounting you don&apos;t need:</p>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex gap-2"><span className="text-blue-400">!</span>Starts at $35/mo just for invoicing</li>
              <li className="flex gap-2"><span className="text-blue-400">!</span>Full accounting suite when you need simple invoices</li>
              <li className="flex gap-2"><span className="text-blue-400">!</span>78% AU market share = complacency on pricing</li>
              <li className="flex gap-2"><span className="text-blue-400">!</span>Small plans limited to 5 invoices/month</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-orange-500/10 border border-orange-500/20 p-6">
            <h3 className="text-lg font-bold text-orange-400 mb-3 heading-font">Zoho&apos;s Ecosystem Funnel</h3>
            <p className="text-sm text-slate-300 mb-3">Free today, locked in tomorrow:</p>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex gap-2"><span className="text-orange-400">!</span>500 invoices/year hard cap</li>
              <li className="flex gap-2"><span className="text-orange-400">!</span>Only 5 clients on free plan</li>
              <li className="flex gap-2"><span className="text-orange-400">!</span>Designed for Indian/US markets, not Australia</li>
              <li className="flex gap-2"><span className="text-orange-400">!</span>Forced migration to Zoho Books ($15+/mo)</li>
            </ul>
          </div>
        </div>

        {/* Cost Over Time */}
        <div className="glass rounded-3xl p-8 mb-12 border border-amber-500/20">
          <h3 className="text-xl font-bold text-amber-400 mb-4 heading-font">Real Cost Over 2 Years</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass rounded-xl p-5 text-center">
              <div className="text-sm font-semibold text-blue-400 mb-3">Xero</div>
              <div className="text-xs text-slate-400 space-y-1">
                <div>Year 1: <span className="text-white">$420</span> (Starter) or <span className="text-white">$936</span> (Standard)</div>
                <div>Year 2: <span className="text-white">$420-$936</span></div>
                <div className="pt-2 border-t border-white/10">Total: <span className="text-blue-300 font-bold">$420-$936</span></div>
                <div className="text-blue-400 text-xs mt-2">Overkill for invoicing only</div>
              </div>
            </div>
            <div className="glass rounded-xl p-5 text-center">
              <div className="text-sm font-semibold text-orange-400 mb-3">Zoho Invoice &rarr; Books</div>
              <div className="text-xs text-slate-400 space-y-1">
                <div>Year 1: <span className="text-white">$0</span> (under 500)</div>
                <div>Year 2: <span className="text-white">$180</span> (Zoho Books needed)</div>
                <div className="pt-2 border-t border-white/10">Total: <span className="text-orange-300 font-bold">$180</span></div>
                <div className="text-orange-400 text-xs mt-2">+ ecosystem lock-in</div>
              </div>
            </div>
            <div className="glass rounded-xl p-5 text-center border-2 border-teal-500/30">
              <div className="text-sm font-semibold text-teal-400 mb-3">InvoiceFlow</div>
              <div className="text-xs text-slate-400 space-y-1">
                <div>Year 1: <span className="text-white">$0</span> (free tier)</div>
                <div>Year 2: <span className="text-white">$0-228</span> (free or Pro)</div>
                <div className="pt-2 border-t border-white/10">Total: <span className="text-teal-300 font-bold">$0-228</span></div>
                <div className="text-teal-400 text-xs mt-2">No lock-in</div>
              </div>
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
                <th className="text-left py-3 px-4 text-blue-400 font-semibold">Xero</th>
                <th className="text-left py-3 px-4 text-orange-400 font-semibold">Zoho Invoice</th>
                <th className="text-left py-3 px-4 text-teal-400 font-semibold bg-teal-500/5 rounded-t-xl">InvoiceFlow</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {features.map((row, i) => (
                <tr key={row.feature} className={i < features.length - 1 ? 'border-b border-white/5' : ''}>
                  <td className="py-3 px-4 text-slate-300 font-medium">{row.feature}</td>
                  <td className={`py-3 px-4 ${row.winner.includes('xero') ? 'text-blue-300 font-semibold' : 'text-slate-400'}`}>{row.xero}</td>
                  <td className={`py-3 px-4 ${row.winner.includes('zoho') ? 'text-orange-300 font-semibold' : 'text-slate-400'}`}>{row.zoho}</td>
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
              <li className="flex gap-2"><span className="text-blue-400">+</span>You need full accounting suite</li>
              <li className="flex gap-2"><span className="text-blue-400">+</span>You work with a BAS agent already on Xero</li>
              <li className="flex gap-2"><span className="text-blue-400">+</span>You need payroll built-in</li>
              <li className="flex gap-2"><span className="text-blue-400">+</span>Budget isn&apos;t a concern</li>
            </ul>
          </div>
          <div className="glass rounded-2xl p-6 border border-orange-500/20">
            <h4 className="text-lg font-bold text-orange-400 mb-3 heading-font">Choose Zoho If...</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex gap-2"><span className="text-orange-400">+</span>You send fewer than 42 invoices/month</li>
              <li className="flex gap-2"><span className="text-orange-400">+</span>You already use other Zoho tools</li>
              <li className="flex gap-2"><span className="text-orange-400">+</span>You want free time tracking</li>
              <li className="flex gap-2"><span className="text-orange-400">+</span>You&apos;re comfortable with ecosystem migration</li>
            </ul>
          </div>
          <div className="glass rounded-2xl p-6 border-2 border-teal-500/30 bg-teal-500/5">
            <h4 className="text-lg font-bold text-teal-400 mb-3 heading-font">Choose InvoiceFlow If...</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex gap-2"><span className="text-teal-400">+</span>You want free without the traps</li>
              <li className="flex gap-2"><span className="text-teal-400">+</span>You&apos;re an Australian freelancer (GST + ABN)</li>
              <li className="flex gap-2"><span className="text-teal-400">+</span>You want AI-powered invoice creation</li>
              <li className="flex gap-2"><span className="text-teal-400">+</span>No accounting bloat, just invoicing</li>
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
              { label: 'Xero Alternative', href: '/alternative-to/xero' },
              { label: 'Zoho Alternative', href: '/alternative-to/zoho' },
              { label: 'Xero vs MYOB', href: '/compare/xero-vs-myob' },
              { label: 'Xero vs FreshBooks', href: '/compare/xero-vs-freshbooks' },
              { label: 'Xero vs Wave', href: '/compare/xero-vs-wave' },
              { label: 'FreshBooks vs Zoho', href: '/compare/freshbooks-vs-zoho' },
              { label: 'All Comparisons', href: '/compare' },
              { label: 'Free Tools', href: '/tools' },
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
            Xero&apos;s compliance without the price. Zoho&apos;s free tier without the trap.
          </h3>
          <p className="text-slate-300 max-w-xl mx-auto mb-8">
            Xero is overkill for invoicing. Zoho funnels you into their ecosystem. InvoiceFlow gives you
            free invoicing with full Australian compliance, AI-powered creation, and zero lock-in.
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
