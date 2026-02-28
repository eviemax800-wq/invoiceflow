import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'MYOB vs Zoho Invoice 2026: Australian Legacy vs Free Option | InvoiceFlow',
  description:
    'MYOB ($34/mo, 30+ years in AU) vs Zoho Invoice (free, 500/yr cap). Which invoicing tool suits Australian freelancers? Plus a free alternative.',
  alternates: { canonical: '/compare/myob-vs-zoho' },
  keywords: ['myob vs zoho invoice', 'myob vs zoho', 'zoho invoice vs myob', 'myob alternative free', 'best invoicing software australia freelancers'],
  openGraph: {
    title: 'MYOB vs Zoho Invoice 2026 — AU Legacy vs Free Global Tool',
    description: 'MYOB charges $34/mo with 30+ years of AU heritage. Zoho Invoice is free but capped at 500/year with no AU compliance. Plus a free alternative.',
  },
};

const siteUrl = 'https://invoiceflow-teal.vercel.app';

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
    { '@type': 'ListItem', position: 2, name: 'Compare', item: `${siteUrl}/compare` },
    { '@type': 'ListItem', position: 3, name: 'MYOB vs Zoho Invoice', item: `${siteUrl}/compare/myob-vs-zoho` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is MYOB worth the price compared to Zoho Invoice?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MYOB at $34/mo+ offers deep AU compliance, BAS reporting, and phone support that Zoho Invoice doesn\'t have. But for freelancers who just need to send invoices and track payments, MYOB is expensive overkill. InvoiceFlow offers AU compliance with a free tier — the invoicing features without the accounting price tag.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Zoho Invoice support Australian GST?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Zoho Invoice has basic tax rate support but lacks ATO-specific features like BAS reporting, bank feed integration with AU banks, and ABN validation. It was designed for the Indian and US markets. For Australian freelancers, InvoiceFlow or MYOB are better choices for GST compliance.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is MYOB\'s Trustpilot rating so low?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MYOB\'s 2.1/5 Trustpilot score reflects complaints about pricing increases since KKR\'s acquisition, declining customer service quality, and an interface that hasn\'t kept pace with modern competitors. Many long-term customers feel the product quality has dropped while prices increased.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I switch from MYOB to a free alternative?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. For invoicing needs, InvoiceFlow offers a free tier with full Australian GST compliance. You\'ll lose MYOB\'s accounting features (BAS lodgement, payroll, bank reconciliation) but if you only use MYOB for invoicing, you\'ll save $400+/year. Zoho Invoice is also free but lacks AU compliance.',
      },
    },
    {
      '@type': 'Question',
      name: 'What\'s the best invoicing software for Australian sole traders?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For AU sole traders who need invoicing (not full accounting): InvoiceFlow (free, full GST/ABN, AI-powered), MYOB ($34/mo, full accounting), or Xero ($35/mo, full accounting). Zoho Invoice is free but lacks AU compliance. InvoiceFlow is the best value for pure invoicing with AU compliance.',
      },
    },
  ],
};

const features = [
  { feature: 'Starting price', myob: '$34/mo (Lite)', zoho: 'Free', invoiceflow: 'Free', winner: 'zoho-if' },
  { feature: 'Invoice limit', myob: 'Unlimited', zoho: '500/year', invoiceflow: '5/mo free, unlimited Pro', winner: 'myob' },
  { feature: 'Client limit', myob: 'Unlimited', zoho: '5 (Free)', invoiceflow: 'Unlimited', winner: 'myob-if' },
  { feature: 'Free tier', myob: 'No', zoho: 'Yes (capped)', invoiceflow: 'Yes (5/mo)', winner: 'zoho-if' },
  { feature: 'GST compliance (AU)', myob: 'Excellent (30+ yrs)', zoho: 'None', invoiceflow: 'Full', winner: 'myob-if' },
  { feature: 'AI features', myob: 'None', zoho: 'None', invoiceflow: 'Gemini AI', winner: 'invoiceflow' },
  { feature: 'BAS reporting', myob: 'Built-in', zoho: 'None', invoiceflow: 'Guided', winner: 'myob' },
  { feature: 'Phone support', myob: 'Yes (AU-based)', zoho: 'Email only', invoiceflow: 'Email', winner: 'myob' },
  { feature: 'Payroll', myob: 'Built-in (extra)', zoho: 'Via Zoho Payroll', invoiceflow: 'Not included', winner: 'myob' },
  { feature: 'Bank feeds', myob: 'Yes (AU banks)', zoho: 'Limited', invoiceflow: 'Via Stripe', winner: 'myob' },
  { feature: 'Trustpilot', myob: '2.1/5', zoho: '4.0/5', invoiceflow: 'New', winner: 'zoho' },
  { feature: 'Best for', myob: 'Established AU SMBs', zoho: 'Micro businesses', invoiceflow: 'AU freelancers', winner: 'invoiceflow' },
];

export default function MyobVsZohoPage() {
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
          <span className="text-slate-200">MYOB vs Zoho Invoice</span>
        </nav>

        {/* Hero */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-slate-200 mb-6">
            <span className="h-2 w-2 rounded-full bg-amber-400" />
            AU Legacy vs Global Free Tier
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 heading-font">
            <span className="text-purple-400">MYOB</span> vs <span className="text-orange-400">Zoho Invoice</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-4">
            MYOB has 30+ years of Australian accounting heritage at $34/mo. Zoho Invoice is free — but capped
            at 500 invoices/year with no Australian tax compliance. There&apos;s a smarter third option.
          </p>
          <p className="text-sm text-slate-500">Updated February 2026 with latest pricing and features</p>
        </div>

        {/* Quick Verdict */}
        <div className="glass rounded-3xl p-8 mb-12 border border-amber-500/20">
          <h3 className="text-xl font-bold text-amber-400 mb-4 heading-font">Quick Verdict</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400 mb-1">MYOB</div>
              <p className="text-sm text-slate-300">Australia&apos;s oldest accounting software. 30+ years of AU compliance, phone support, BAS integration. But $34/mo minimum, 2.1/5 Trustpilot, and slow to innovate.</p>
              <div className="text-xs text-slate-500 mt-2">From $34/mo</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-400 mb-1">Zoho Invoice</div>
              <p className="text-sm text-slate-300">Free invoicing with decent basics. But 500/year cap, 5 clients, no ATO integration, and eventual push to Zoho Books. Built for Indian/US markets.</p>
              <div className="text-xs text-slate-500 mt-2">Free (500/yr cap)</div>
            </div>
            <div className="text-center border-2 border-teal-500/30 rounded-xl p-3 -m-3">
              <div className="text-2xl font-bold text-teal-400 mb-1">InvoiceFlow</div>
              <p className="text-sm text-slate-300">Free tier with full Australian compliance — the AU focus MYOB charges $34/mo for, without Zoho&apos;s caps. AI-powered. Modern.</p>
              <div className="text-xs text-teal-400 mt-2">Free or $19/mo</div>
            </div>
          </div>
        </div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="rounded-2xl bg-red-500/10 border border-red-500/20 p-6">
            <h3 className="text-lg font-bold text-red-400 mb-2 heading-font">MYOB&apos;s Legacy Tax</h3>
            <p className="text-sm text-slate-400 mb-3">Paying for 30 years of history:</p>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex gap-2"><span className="text-red-400">!</span>$34/mo minimum just for invoicing</li>
              <li className="flex gap-2"><span className="text-red-400">!</span>2.1/5 on Trustpilot — declining satisfaction</li>
              <li className="flex gap-2"><span className="text-red-400">!</span>Owned by KKR since 2019 — cost-cutting focus</li>
              <li className="flex gap-2"><span className="text-red-400">!</span>Interface feels dated compared to modern tools</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-orange-500/10 border border-orange-500/20 p-6">
            <h3 className="text-lg font-bold text-orange-400 mb-2 heading-font">Zoho&apos;s Australian Gap</h3>
            <p className="text-sm text-slate-400 mb-3">Free but not built for AU:</p>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex gap-2"><span className="text-orange-400">!</span>No ATO integration or BAS reporting</li>
              <li className="flex gap-2"><span className="text-orange-400">!</span>ABN validation not supported</li>
              <li className="flex gap-2"><span className="text-orange-400">!</span>500 invoices/year hard cap</li>
              <li className="flex gap-2"><span className="text-orange-400">!</span>Forced migration to Zoho Books ($15+/mo)</li>
            </ul>
          </div>
        </div>

        {/* Annual Cost Comparison */}
        <div className="glass rounded-3xl p-8 mb-12 border border-amber-500/20">
          <h3 className="text-xl font-bold text-amber-400 mb-6 heading-font">Annual Cost Comparison</h3>
          <div className="space-y-4">
            {/* MYOB */}
            <div className="flex flex-col md:flex-row md:items-center justify-between p-4 rounded-xl bg-white/5">
              <div className="flex items-center gap-3 mb-2 md:mb-0">
                <div className="text-lg font-bold text-purple-400">MYOB</div>
              </div>
              <div className="flex flex-wrap gap-6 text-sm">
                <div><span className="text-slate-400">Year 1:</span> <span className="text-purple-300 font-semibold">$408</span> <span className="text-xs text-slate-500">(Lite)</span></div>
                <div><span className="text-slate-400">Year 2:</span> <span className="text-purple-300 font-semibold">$408</span></div>
                <div><span className="text-slate-400">Total:</span> <span className="text-purple-300 font-bold">$816</span></div>
                <div className="text-xs text-red-400 self-center">+ declining satisfaction</div>
              </div>
            </div>
            {/* Zoho */}
            <div className="flex flex-col md:flex-row md:items-center justify-between p-4 rounded-xl bg-white/5">
              <div className="flex items-center gap-3 mb-2 md:mb-0">
                <div className="text-lg font-bold text-orange-400">Zoho</div>
              </div>
              <div className="flex flex-wrap gap-6 text-sm">
                <div><span className="text-slate-400">Year 1:</span> <span className="text-orange-300 font-semibold">$0</span> <span className="text-xs text-slate-500">(under 500)</span></div>
                <div><span className="text-slate-400">Year 2:</span> <span className="text-orange-300 font-semibold">$180</span> <span className="text-xs text-slate-500">(Zoho Books)</span></div>
                <div><span className="text-slate-400">Total:</span> <span className="text-orange-300 font-bold">$180</span></div>
                <div className="text-xs text-red-400 self-center">+ no AU compliance</div>
              </div>
            </div>
            {/* InvoiceFlow */}
            <div className="flex flex-col md:flex-row md:items-center justify-between p-4 rounded-xl bg-teal-500/10 border border-teal-500/20">
              <div className="flex items-center gap-3 mb-2 md:mb-0">
                <div className="text-lg font-bold text-teal-400">InvoiceFlow</div>
              </div>
              <div className="flex flex-wrap gap-6 text-sm">
                <div><span className="text-slate-400">Year 1:</span> <span className="text-teal-300 font-semibold">$0</span></div>
                <div><span className="text-slate-400">Year 2:</span> <span className="text-teal-300 font-semibold">$0-228</span></div>
                <div><span className="text-slate-400">Total:</span> <span className="text-teal-300 font-bold">$0-228</span></div>
                <div className="text-xs text-teal-300 self-center">Full AU compliance included</div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Comparison Table */}
        <div className="glass rounded-3xl p-6 lg:p-8 mb-12 overflow-x-auto">
          <h3 className="text-2xl font-bold text-white mb-6 heading-font">Feature-by-Feature Comparison</h3>
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-3 px-4 text-slate-400 font-medium">Feature</th>
                <th className="text-left py-3 px-4 text-purple-400 font-semibold">MYOB</th>
                <th className="text-left py-3 px-4 text-orange-400 font-semibold">Zoho Invoice</th>
                <th className="text-left py-3 px-4 text-teal-400 font-semibold bg-teal-500/5 rounded-t-xl">InvoiceFlow</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {features.map((row, i) => (
                <tr key={row.feature} className={i < features.length - 1 ? 'border-b border-white/5' : ''}>
                  <td className="py-3 px-4 text-slate-300 font-medium">{row.feature}</td>
                  <td className={`py-3 px-4 ${row.winner.includes('myob') ? 'text-purple-300 font-semibold' : 'text-slate-400'}`}>{row.myob}</td>
                  <td className={`py-3 px-4 ${row.winner.includes('zoho') ? 'text-orange-300 font-semibold' : 'text-slate-400'}`}>{row.zoho}</td>
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
              <li className="flex gap-2"><span className="text-purple-400">+</span>You need full AU accounting suite</li>
              <li className="flex gap-2"><span className="text-purple-400">+</span>Your accountant is on MYOB</li>
              <li className="flex gap-2"><span className="text-purple-400">+</span>You need AU payroll built-in</li>
              <li className="flex gap-2"><span className="text-purple-400">+</span>You want phone support</li>
            </ul>
          </div>
          <div className="glass rounded-2xl p-6 border border-orange-500/20">
            <h4 className="text-lg font-bold text-orange-400 mb-3 heading-font">Choose Zoho If...</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex gap-2"><span className="text-orange-400">+</span>You send fewer than 42 invoices/month</li>
              <li className="flex gap-2"><span className="text-orange-400">+</span>Budget is your #1 priority</li>
              <li className="flex gap-2"><span className="text-orange-400">+</span>You&apos;re already in Zoho&apos;s ecosystem</li>
              <li className="flex gap-2"><span className="text-orange-400">+</span>You don&apos;t need AU tax compliance</li>
            </ul>
          </div>
          <div className="glass rounded-2xl p-6 border-2 border-teal-500/30 bg-teal-500/5">
            <h4 className="text-lg font-bold text-teal-400 mb-3 heading-font">Choose InvoiceFlow If...</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex gap-2"><span className="text-teal-400">+</span>You want MYOB&apos;s AU compliance for free</li>
              <li className="flex gap-2"><span className="text-teal-400">+</span>You&apos;re a sole trader or freelancer</li>
              <li className="flex gap-2"><span className="text-teal-400">+</span>You want AI-powered invoice creation</li>
              <li className="flex gap-2"><span className="text-teal-400">+</span>Simple invoicing without accounting bloat</li>
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
              { label: 'MYOB Alternative', href: '/alternative-to/myob' },
              { label: 'Zoho Alternative', href: '/alternative-to/zoho' },
              { label: 'MYOB vs Xero', href: '/compare/xero-vs-myob' },
              { label: 'MYOB vs FreshBooks', href: '/compare/myob-vs-freshbooks' },
              { label: 'MYOB vs Wave', href: '/compare/myob-vs-wave' },
              { label: 'Xero vs Zoho', href: '/compare/xero-vs-zoho' },
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
            AU compliance without the legacy price tag
          </h3>
          <p className="text-slate-300 max-w-xl mx-auto mb-8">
            Get MYOB&apos;s Australian compliance without paying $408/year. No Zoho caps or forced migrations.
            Just clean, AI-powered invoicing built for Australian freelancers.
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
