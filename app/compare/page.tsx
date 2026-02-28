import Link from 'next/link';
import Button from '@/components/ui/Button';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'InvoiceFlow vs QuickBooks, Xero, MYOB, Zoho & More | Compare',
  description: 'See how InvoiceFlow compares to QuickBooks, Xero, MYOB, Zoho, FreshBooks, Wave, Bonsai, and HoneyBook. Free tier, AI-powered, no hidden fees.',
  openGraph: {
    title: 'InvoiceFlow vs The Big 8 — Honest Comparison',
    description: 'Free tier, AI-powered invoice management. See how InvoiceFlow stacks up against QuickBooks, Xero, MYOB, Zoho, FreshBooks, Wave, Bonsai, and HoneyBook.',
  },
};

const competitors = [
  {
    name: 'QuickBooks',
    minPrice: '$20/mo',
    freeInvoices: '2',
    trustpilot: '1.1/5',
    trustpilotColor: 'text-red-400',
    aiFeatures: 'Basic (error-prone)',
    hiddenFees: 'None',
    painPoint: 'Prices up 40-88% since 2020. Solopreneur plan caps at 2 invoices. Forced UI overhaul universally hated.',
    slug: 'quickbooks',
  },
  {
    name: 'Xero',
    minPrice: '$35/mo',
    freeInvoices: '20 (capped)',
    trustpilot: '3.8/5',
    trustpilotColor: 'text-yellow-400',
    aiFeatures: 'Accounting-focused',
    hiddenFees: 'API pricing backlash',
    painPoint: 'Entry plan +169% since 2021. Ignite $35/mo caps at 20 invoices — forces $75/mo for unlimited. JAX AI is accounting-focused, not invoicing.',
    slug: 'xero',
  },
  {
    name: 'MYOB',
    minPrice: '$34/mo',
    freeInvoices: '0',
    trustpilot: '2.1/5',
    trustpilotColor: 'text-red-400',
    aiFeatures: 'None',
    hiddenFees: 'Payroll unbundled (+$2/emp/mo)',
    painPoint: 'Taken private by KKR for A$2B. Business Lite $34/mo minimum for basic invoicing. Price increase Mar 2026 confirmed. Support rated "Poor" on Trustpilot.',
    slug: 'myob',
  },
  {
    name: 'FreshBooks',
    minPrice: '$24/mo',
    freeInvoices: '0',
    trustpilot: '3.4/5',
    trustpilotColor: 'text-yellow-400',
    aiFeatures: 'None',
    hiddenFees: '70% promo bait-and-switch',
    painPoint: 'No free tier. 5-client cap on Lite. $125M debt (Mar 2025). Declining headcount. Zero native AI features.',
    slug: 'freshbooks',
  },
  {
    name: 'Wave',
    minPrice: '$19/mo',
    freeInvoices: '0 (Pro)',
    trustpilot: '1.2/5',
    trustpilotColor: 'text-red-400',
    aiFeatures: 'None',
    hiddenFees: 'Payment holds up to 7 months',
    painPoint: 'Acquired by H&R Block for $405M. Payment holds of $50K+ lasting 6-7 months. Zero support for free users. 2025 payroll disaster.',
    slug: 'wave',
  },
  {
    name: 'Bonsai',
    minPrice: '$25/mo',
    freeInvoices: '0',
    trustpilot: '4.1/5',
    trustpilotColor: 'text-green-400',
    aiFeatures: 'None',
    hiddenFees: '+1% platform fee on Stripe',
    painPoint: 'Acquired by Zoom (Nov 2025). Basic $15/mo has NO invoicing. Per-user pricing. Only 2 net-new features in 5 years.',
    slug: 'bonsai',
  },
  {
    name: 'Zoho Invoice',
    minPrice: 'Free',
    freeInvoices: '500/yr cap',
    trustpilot: '4.0/5',
    trustpilotColor: 'text-green-400',
    aiFeatures: 'None (Zia in Books only)',
    hiddenFees: 'Forced migration to Zoho Books',
    painPoint: 'Free but capped at 500 invoices/year. Outgrow it and you\'re pushed to Zoho Books — a different product. No AI. Auth issues. Limited integrations.',
    slug: 'zoho',
  },
  {
    name: 'HoneyBook',
    minPrice: '$36/mo',
    freeInvoices: '0',
    trustpilot: '3.5/5',
    trustpilotColor: 'text-yellow-400',
    aiFeatures: 'CRM-focused only',
    hiddenFees: '2.9% + $0.25 per transaction',
    painPoint: '89% price hike Feb 2025 (Starter $19→$36/mo). Bloated all-in-one forces you to pay for CRM, contracts, scheduling you don\'t need.',
    slug: 'honeybook',
  },
];

const invoiceflow = {
  name: 'InvoiceFlow',
  minPrice: 'Free / $19',
  freeInvoices: '5/mo free',
  trustpilot: 'New',
  trustpilotColor: 'text-teal-400',
  aiFeatures: 'Gemini AI extraction',
  hiddenFees: 'None — ever',
};

export default function ComparePage() {
  const siteUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://invoiceflow-teal.vercel.app';

  const compareJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'InvoiceFlow vs QuickBooks, Xero, MYOB & More',
    description: 'See how InvoiceFlow compares to the Big 8 invoicing tools. Free tier, AI-powered, no hidden fees.',
    url: `${siteUrl}/compare`,
    inLanguage: 'en-AU',
    numberOfItems: competitors.length,
    isPartOf: { '@type': 'WebSite', name: 'InvoiceFlow', url: siteUrl },
    about: {
      '@type': 'SoftwareApplication',
      name: 'InvoiceFlow',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
    },
  };

  return (
    <div className="min-h-screen page-bg">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(compareJsonLd) }} />
      <header className="border-b border-white/10 backdrop-blur-sm bg-black/30">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-teal-400 to-blue-500" />
            <h1 className="text-2xl font-bold gradient-text heading-font">InvoiceFlow</h1>
          </Link>
          <div className="flex gap-4">
            <Link href="/pricing">
              <Button variant="ghost">Pricing</Button>
            </Link>
            <Link href="/signup">
              <Button>Get Started Free</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16 max-w-6xl">
        {/* Hero */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-slate-200 mb-6">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Based on real user reviews and public pricing data
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 heading-font">
            InvoiceFlow vs <span className="gradient-text">The Big 8</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Tired of overpriced invoicing tools that keep raising prices? InvoiceFlow gives you
            AI-powered invoice management with a free tier and no hidden fees.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {[
            { label: 'Free tier', value: '5 invoices/mo', icon: '🆓' },
            { label: 'Pro pricing', value: '$19/mo', icon: '💰' },
            { label: 'AI extraction', value: 'Gemini-powered', icon: '🧠' },
            { label: 'Hidden fees', value: 'Zero', icon: '✅' },
          ].map((stat) => (
            <div key={stat.label} className="glass rounded-2xl p-5 text-center">
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-white font-semibold">{stat.value}</div>
              <div className="text-sm text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="glass rounded-3xl p-6 lg:p-8 mb-16 overflow-x-auto">
          <h3 className="text-2xl font-bold text-white mb-6 heading-font">Side-by-Side Comparison</h3>
          <table className="w-full min-w-[800px]">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-3 px-4 text-slate-400 font-medium">Feature</th>
                <th className="text-left py-3 px-4 text-teal-400 font-semibold bg-teal-500/5 rounded-t-xl">InvoiceFlow</th>
                {competitors.map((c) => (
                  <th key={c.name} className="text-left py-3 px-4 text-slate-400 font-medium">{c.name}</th>
                ))}
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b border-white/5">
                <td className="py-3 px-4 text-slate-300">Min. price</td>
                <td className="py-3 px-4 text-white font-semibold bg-teal-500/5">Free / $19</td>
                {competitors.map((c) => (
                  <td key={c.name} className="py-3 px-4 text-slate-300">{c.minPrice}</td>
                ))}
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4 text-slate-300">Free invoices</td>
                <td className="py-3 px-4 text-emerald-400 font-semibold bg-teal-500/5">5/mo</td>
                {competitors.map((c) => (
                  <td key={c.name} className="py-3 px-4 text-slate-300">{c.freeInvoices}</td>
                ))}
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4 text-slate-300">Trustpilot</td>
                <td className="py-3 px-4 text-teal-400 bg-teal-500/5">New</td>
                {competitors.map((c) => (
                  <td key={c.name} className={`py-3 px-4 ${c.trustpilotColor}`}>{c.trustpilot}</td>
                ))}
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4 text-slate-300">AI features</td>
                <td className="py-3 px-4 text-emerald-400 font-semibold bg-teal-500/5">Gemini AI</td>
                {competitors.map((c) => (
                  <td key={c.name} className="py-3 px-4 text-slate-400">{c.aiFeatures}</td>
                ))}
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4 text-slate-300">Hidden fees</td>
                <td className="py-3 px-4 text-emerald-400 bg-teal-500/5">None</td>
                {competitors.map((c) => (
                  <td key={c.name} className="py-3 px-4 text-red-400/80 text-xs">{c.hiddenFees}</td>
                ))}
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4 text-slate-300">AU compliance</td>
                <td className="py-3 px-4 text-emerald-400 bg-teal-500/5">GST + ABN</td>
                {competitors.map((c) => (
                  <td key={c.name} className="py-3 px-4 text-slate-400">
                    {c.name === 'Xero' || c.name === 'MYOB' ? 'Yes' : c.name === 'HoneyBook' ? 'US/CA only' : c.name === 'Zoho Invoice' ? 'Basic GST' : 'Limited'}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="py-3 px-4 text-slate-300">Focus</td>
                <td className="py-3 px-4 text-white font-semibold bg-teal-500/5 rounded-b-xl">Invoicing only</td>
                {competitors.map((c) => (
                  <td key={c.name} className="py-3 px-4 text-slate-400">
                    {c.name === 'QuickBooks' || c.name === 'Xero' || c.name === 'Wave' || c.name === 'MYOB' ? 'Full accounting' :
                     c.name === 'HoneyBook' ? 'CRM + invoicing' : c.name === 'Zoho Invoice' ? 'Ecosystem upsell' : 'All-in-one'}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        {/* Head-to-Head Comparisons */}
        <h3 className="text-2xl font-bold text-white mb-6 heading-font">Head-to-Head Comparisons</h3>
        <p className="text-slate-400 mb-6">See how the big players stack up against each other — and why InvoiceFlow is the smarter choice for freelancers.</p>
        <div className="grid md:grid-cols-2 gap-4 mb-16">
          {[
            { title: 'Xero vs MYOB', desc: 'Australia\'s two biggest accounting platforms compared. Both $34-35/mo for basic invoicing.', href: '/compare/xero-vs-myob', colors: 'from-blue-500/20 to-purple-500/20' },
            { title: 'Xero vs FreshBooks', desc: 'Full accounting suite ($35/mo) vs invoicing-first platform ($24/mo). Which wins for freelancers?', href: '/compare/xero-vs-freshbooks', colors: 'from-blue-500/20 to-green-500/20' },
            { title: 'FreshBooks vs Wave', desc: 'Wave killed their free plan. Now both charge — but there\'s still a free option.', href: '/compare/freshbooks-vs-wave', colors: 'from-green-500/20 to-cyan-500/20' },
            { title: 'MYOB vs QuickBooks', desc: '30 years of AU heritage vs the $108B Intuit giant. Both overbuilt for freelancers.', href: '/compare/myob-vs-quickbooks', colors: 'from-purple-500/20 to-red-500/20' },
            { title: 'Xero vs QuickBooks', desc: 'AU market leader ($35/mo) vs global giant ($20/mo). Xero has 78% AU share, QuickBooks has 1.1/5 Trustpilot.', href: '/compare/xero-vs-quickbooks', colors: 'from-blue-500/20 to-red-500/20' },
            { title: 'QuickBooks vs FreshBooks', desc: 'Two invoicing-focused tools go head-to-head. QuickBooks caps at 2 invoices, FreshBooks caps at 5 clients.', href: '/compare/quickbooks-vs-freshbooks', colors: 'from-red-500/20 to-green-500/20' },
            { title: 'QuickBooks vs Wave', desc: 'Both rated under 1.5/5 on Trustpilot. Wave has payment holds, QuickBooks has a 2-invoice cap.', href: '/compare/quickbooks-vs-wave', colors: 'from-red-500/20 to-cyan-500/20' },
            { title: 'MYOB vs FreshBooks', desc: 'AU legacy giant meets Canadian challenger. MYOB has phone support, FreshBooks has better UX.', href: '/compare/myob-vs-freshbooks', colors: 'from-purple-500/20 to-green-500/20' },
          ].map((item) => (
            <Link key={item.href} href={item.href} className={`glass rounded-2xl p-6 hover:border-teal-400/20 border border-transparent transition-colors bg-gradient-to-br ${item.colors}`}>
              <h4 className="text-lg font-semibold text-white heading-font mb-2">{item.title}</h4>
              <p className="text-sm text-slate-400 mb-3">{item.desc}</p>
              <span className="text-xs text-teal-400">View full comparison →</span>
            </Link>
          ))}
        </div>

        {/* Individual Competitor Breakdowns */}
        <h3 className="text-2xl font-bold text-white mb-8 heading-font">Why Freelancers Are Switching</h3>
        <div className="grid lg:grid-cols-2 gap-6 mb-16">
          {competitors.map((c) => (
            <Link key={c.name} href={`/compare/${c.slug}`} className="glass rounded-2xl p-6 hover:border-teal-400/20 border border-transparent transition-colors">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-lg font-semibold text-white heading-font">
                  InvoiceFlow vs {c.name}
                </h4>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  parseFloat(c.trustpilot) <= 2 ? 'bg-red-500/20 text-red-400' :
                  parseFloat(c.trustpilot) <= 3.5 ? 'bg-yellow-500/20 text-yellow-400' :
                  'bg-green-500/20 text-green-400'
                }`}>
                  {c.trustpilot.includes('/') ? `Trustpilot ${c.trustpilot}` : c.trustpilot}
                </span>
              </div>
              <p className="text-sm text-slate-400 mb-4">{c.painPoint}</p>
              <div className="flex items-center justify-between">
                <div className="text-xs text-slate-500">
                  {c.name}: <span className="text-slate-300">{c.minPrice}/mo</span>
                  {' → '}
                  InvoiceFlow: <span className="text-emerald-400">Free or $19/mo</span>
                </div>
                <span className="text-xs text-teal-400">Full comparison →</span>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="glass rounded-3xl p-10 text-center">
          <h3 className="text-3xl lg:text-4xl font-bold text-white heading-font mb-4">
            Ready to simplify your invoicing?
          </h3>
          <p className="text-slate-300 max-w-xl mx-auto mb-8">
            No credit card required. Start with 5 free invoices per month.
            Upgrade to Pro for $19/mo when you need unlimited.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/signup">
              <Button size="lg">Start Free</Button>
            </Link>
            <Link href="/pricing">
              <Button variant="secondary" size="lg">See All Plans</Button>
            </Link>
          </div>
        </div>
      </main>

      <footer className="border-t border-white/10 mt-24">
        <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between text-slate-400 text-sm">
          <span>&copy; 2026 InvoiceFlow. All rights reserved.</span>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/pricing" className="hover:text-white">Pricing</Link>
            <Link href="/compare" className="hover:text-white">Compare</Link>
            <Link href="/privacy" className="hover:text-white">Privacy</Link>
            <Link href="/terms" className="hover:text-white">Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
