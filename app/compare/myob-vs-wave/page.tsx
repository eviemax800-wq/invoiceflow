import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'MYOB vs Wave 2026: Australian Legacy vs Budget Invoicing | InvoiceFlow',
  description:
    'MYOB ($34/mo) vs Wave ($19/mo) compared for Australian freelancers. Features, GST compliance, pricing, and a better free alternative.',
  alternates: { canonical: '/compare/myob-vs-wave' },
  keywords: ['myob vs wave', 'myob vs wave accounting', 'wave vs myob for freelancers', 'cheapest invoicing software australia'],
  openGraph: {
    title: 'MYOB vs Wave 2026 — AU Legacy Giant vs Budget Platform',
    description: 'MYOB charges $34/mo with 30 years of AU heritage. Wave charges $19/mo with a 1.2/5 Trustpilot rating. Plus a free alternative.',
  },
};

const siteUrl = 'https://invoiceflow-teal.vercel.app';

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
    { '@type': 'ListItem', position: 2, name: 'Compare', item: `${siteUrl}/compare` },
    { '@type': 'ListItem', position: 3, name: 'MYOB vs Wave', item: `${siteUrl}/compare/myob-vs-wave` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is MYOB better than Wave for Australian freelancers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For Australian compliance, yes. MYOB has 30+ years of Australian tax expertise, deep ATO integration, BAS reporting, and Single Touch Payroll. Wave has minimal Australian features and was designed for the North American market. However, MYOB at $34/mo is expensive for freelancers who just need invoicing. InvoiceFlow offers full Australian compliance at $0-19/mo.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why did MYOB get so expensive?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'KKR (private equity) acquired MYOB for A$2 billion, taking it private. Since then, MYOB has focused on mid-market businesses with higher-margin pricing. Business Lite starts at $34/mo — there\'s no free or budget tier for freelancers. A price increase in March 2026 is confirmed. MYOB\'s Trustpilot rating is 2.1/5, with many complaints about pricing and support quality.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can Wave handle Australian GST and BAS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wave has basic multi-currency and tax rate support, but it was not designed for Australian tax compliance. It cannot generate BAS-ready reports, doesn\'t integrate with the ATO, and doesn\'t support ABN validation. If you\'re an Australian freelancer, Wave is a poor choice for compliance. InvoiceFlow provides full GST compliance, ABN integration, and ATO-aligned invoicing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Wave a good alternative to MYOB?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wave is significantly cheaper ($19/mo vs $34/mo) but lacks Australian compliance features and has serious trust issues (1.2/5 Trustpilot, payment holds). It\'s not a direct MYOB replacement if you need BAS reporting or STP. For freelancers who want to save money without sacrificing Australian compliance, InvoiceFlow at $0-19/mo is a better MYOB alternative than Wave.',
      },
    },
    {
      '@type': 'Question',
      name: 'What\'s the cheapest invoicing software for Australian freelancers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'InvoiceFlow offers the cheapest option with full Australian compliance: free for 5 invoices/month, $19/mo for unlimited Pro. Compare this to MYOB ($34/mo), Xero ($35/mo), FreshBooks ($24/mo), and Wave ($19/mo with minimal AU compliance). Zoho Invoice is free but capped at 500/year and pushes you to Zoho Books when you grow.',
      },
    },
  ],
};

const features = [
  { feature: 'Starting price', myob: '$34/mo (Business Lite)', wave: '$19/mo (Pro)', invoiceflow: 'Free', winner: 'invoiceflow' },
  { feature: 'Free tier', myob: 'No', wave: 'No (removed)', invoiceflow: 'Yes (5/mo)', winner: 'invoiceflow' },
  { feature: 'GST compliance (AU)', myob: 'Full (30+ years)', wave: 'Minimal', invoiceflow: 'Full', winner: 'myob' },
  { feature: 'BAS reporting', myob: 'Built-in', wave: 'No', invoiceflow: 'Guided', winner: 'myob' },
  { feature: 'Single Touch Payroll', myob: 'Yes', wave: 'No', invoiceflow: 'Not needed', winner: 'myob' },
  { feature: 'AI features', myob: 'None', wave: 'None', invoiceflow: 'Gemini AI', winner: 'invoiceflow' },
  { feature: 'Payment processing', myob: 'MYOB Payments', wave: '2.9% + $0.60', invoiceflow: 'Your own Stripe', winner: 'invoiceflow' },
  { feature: 'Payment hold risk', myob: 'Low', wave: 'High (3-7 months)', invoiceflow: 'None', winner: 'myob-if' },
  { feature: 'Bookkeeping', myob: 'Full accounting', wave: 'Basic', invoiceflow: 'Invoicing only', winner: 'myob' },
  { feature: 'Phone support', myob: 'Yes (paid plans)', wave: 'No', invoiceflow: 'Email + self-serve', winner: 'myob' },
  { feature: 'Trustpilot', myob: '2.1/5', wave: '1.2/5', invoiceflow: 'New', winner: 'myob' },
  { feature: 'Ease of use', myob: 'Complex', wave: 'Simple', invoiceflow: 'Simplest', winner: 'invoiceflow' },
];

export default function MYOBVsWavePage() {
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
          <span className="text-slate-200">MYOB vs Wave</span>
        </nav>

        {/* Hero */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-slate-200 mb-6">
            <span className="h-2 w-2 rounded-full bg-purple-400" />
            AU Legacy vs Budget Platform
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 heading-font">
            <span className="text-purple-400">MYOB</span> vs <span className="text-cyan-400">Wave</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-4">
            MYOB has served Australian businesses for 30+ years at $34/mo. Wave promised free invoicing
            until H&amp;R Block bought it and killed the free plan. Both have Trustpilot scores below 2.5/5.
          </p>
          <p className="text-sm text-slate-500">Updated February 2026</p>
        </div>

        {/* Quick Verdict */}
        <div className="glass rounded-3xl p-8 mb-12 border border-purple-500/20">
          <h3 className="text-xl font-bold text-purple-400 mb-4 heading-font">Quick Verdict</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400 mb-1">MYOB</div>
              <p className="text-sm text-slate-300">Deep Australian roots with full ATO integration. But $34/mo minimum (rising March 2026), complex interface, and 2.1/5 Trustpilot. Overbuilt for solo invoicing.</p>
              <div className="text-xs text-slate-500 mt-2">From $34/mo</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-400 mb-1">Wave</div>
              <p className="text-sm text-slate-300">Cheapest at $19/mo but no AU compliance, 1.2/5 Trustpilot, and payment holds that have cost freelancers thousands. Not safe for Australian business.</p>
              <div className="text-xs text-slate-500 mt-2">From $19/mo</div>
            </div>
            <div className="text-center border-2 border-teal-500/30 rounded-xl p-3 -m-3">
              <div className="text-2xl font-bold text-teal-400 mb-1">InvoiceFlow</div>
              <p className="text-sm text-slate-300">MYOB&apos;s Australian compliance at a fraction of the price. Free to start, $19/mo Pro. No payment holds, no accounting overhead, AI-powered.</p>
              <div className="text-xs text-teal-400 mt-2">Free or $19/mo</div>
            </div>
          </div>
        </div>

        {/* Key Numbers */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {[
            { label: 'MYOB heritage', value: '30+ yrs', sub: 'in Australia' },
            { label: 'Combined Trustpilot', value: '1.65/5', sub: 'MYOB + Wave avg' },
            { label: 'Price gap', value: '$180/yr', sub: 'MYOB vs Wave' },
            { label: 'InvoiceFlow', value: '$0', sub: 'to start' },
          ].map((stat) => (
            <div key={stat.label} className="glass rounded-2xl p-4 text-center">
              <div className="text-xl font-bold text-white">{stat.value}</div>
              <div className="text-xs text-slate-400">{stat.label}</div>
              <div className="text-xs text-slate-500">{stat.sub}</div>
            </div>
          ))}
        </div>

        {/* Both have problems */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="rounded-2xl bg-purple-500/10 border border-purple-500/20 p-6">
            <h3 className="text-lg font-bold text-purple-400 mb-3 heading-font">MYOB Frustrations</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex gap-2"><span className="text-purple-400">!</span>Taken private by KKR for A$2 billion</li>
              <li className="flex gap-2"><span className="text-purple-400">!</span>Price increase confirmed March 2026</li>
              <li className="flex gap-2"><span className="text-purple-400">!</span>Support rated &quot;Poor&quot; on Trustpilot</li>
              <li className="flex gap-2"><span className="text-purple-400">!</span>$34/mo minimum — no budget option</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-red-500/10 border border-red-500/20 p-6">
            <h3 className="text-lg font-bold text-red-400 mb-3 heading-font">Wave Risks</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex gap-2"><span className="text-red-400">!</span>Payment holds of 3-7 months ($50K+)</li>
              <li className="flex gap-2"><span className="text-red-400">!</span>1.2/5 Trustpilot — worst in category</li>
              <li className="flex gap-2"><span className="text-red-400">!</span>Free plan removed after acquisition</li>
              <li className="flex gap-2"><span className="text-red-400">!</span>Zero Australian tax compliance</li>
            </ul>
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
                <th className="text-left py-3 px-4 text-cyan-400 font-semibold">Wave</th>
                <th className="text-left py-3 px-4 text-teal-400 font-semibold bg-teal-500/5 rounded-t-xl">InvoiceFlow</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {features.map((row, i) => (
                <tr key={row.feature} className={i < features.length - 1 ? 'border-b border-white/5' : ''}>
                  <td className="py-3 px-4 text-slate-300 font-medium">{row.feature}</td>
                  <td className={`py-3 px-4 ${row.winner.includes('myob') ? 'text-purple-300 font-semibold' : 'text-slate-400'}`}>{row.myob}</td>
                  <td className={`py-3 px-4 ${row.winner.includes('wave') ? 'text-cyan-300 font-semibold' : 'text-slate-400'}`}>{row.wave}</td>
                  <td className={`py-3 px-4 bg-teal-500/5 ${row.winner === 'invoiceflow' || row.winner.includes('-if') ? 'text-teal-300 font-semibold' : 'text-slate-400'}`}>{row.invoiceflow}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* When to Choose */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="glass rounded-2xl p-6 border border-purple-500/20">
            <h4 className="text-lg font-bold text-purple-400 mb-3 heading-font">Choose MYOB If...</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex gap-2"><span className="text-purple-400">+</span>Your accountant mandates MYOB</li>
              <li className="flex gap-2"><span className="text-purple-400">+</span>You need payroll (STP)</li>
              <li className="flex gap-2"><span className="text-purple-400">+</span>You run a complex AU business</li>
              <li className="flex gap-2"><span className="text-purple-400">+</span>You want phone support</li>
            </ul>
          </div>
          <div className="glass rounded-2xl p-6 border border-cyan-500/20">
            <h4 className="text-lg font-bold text-cyan-400 mb-3 heading-font">Choose Wave If...</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex gap-2"><span className="text-cyan-400">+</span>You&apos;re in North America</li>
              <li className="flex gap-2"><span className="text-cyan-400">+</span>Budget is everything</li>
              <li className="flex gap-2"><span className="text-cyan-400">+</span>You accept the payment hold risk</li>
              <li className="flex gap-2"><span className="text-cyan-400">+</span>You don&apos;t need AU compliance</li>
            </ul>
          </div>
          <div className="glass rounded-2xl p-6 border-2 border-teal-500/30 bg-teal-500/5">
            <h4 className="text-lg font-bold text-teal-400 mb-3 heading-font">Choose InvoiceFlow If...</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex gap-2"><span className="text-teal-400">+</span>You want AU compliance at $0</li>
              <li className="flex gap-2"><span className="text-teal-400">+</span>You just need invoicing</li>
              <li className="flex gap-2"><span className="text-teal-400">+</span>You want AI-powered creation</li>
              <li className="flex gap-2"><span className="text-teal-400">+</span>No risk, no complexity</li>
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
              { label: 'Wave Alternative', href: '/alternative-to/wave' },
              { label: 'MYOB vs QuickBooks', href: '/compare/myob-vs-quickbooks' },
              { label: 'MYOB vs FreshBooks', href: '/compare/myob-vs-freshbooks' },
              { label: 'Xero vs Wave', href: '/compare/xero-vs-wave' },
              { label: 'FreshBooks vs Wave', href: '/compare/freshbooks-vs-wave' },
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
            Australian compliance without the MYOB price tag
          </h3>
          <p className="text-slate-300 max-w-xl mx-auto mb-8">
            Get full GST and ABN support without paying $408/year. No payment holds like Wave.
            No complexity like MYOB. Just clean, AI-powered invoicing.
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
