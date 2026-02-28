import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Wave vs Zoho Invoice 2026: Budget Invoicing Showdown | InvoiceFlow',
  description:
    'Wave ($19/mo) vs Zoho Invoice (free, 500/yr cap) compared. Which budget invoicing tool is better for freelancers? Plus a free Australian alternative.',
  alternates: { canonical: '/compare/wave-vs-zoho' },
  keywords: ['wave vs zoho invoice', 'wave vs zoho', 'zoho invoice vs wave', 'cheapest invoicing software 2026', 'free invoice software comparison'],
  openGraph: {
    title: 'Wave vs Zoho Invoice 2026 — Budget Invoicing Battle',
    description: 'Wave costs $19/mo (no longer free). Zoho Invoice is free but capped at 500/year. Which is the real budget option?',
  },
};

const siteUrl = 'https://invoiceflow-teal.vercel.app';

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
    { '@type': 'ListItem', position: 2, name: 'Compare', item: `${siteUrl}/compare` },
    { '@type': 'ListItem', position: 3, name: 'Wave vs Zoho Invoice', item: `${siteUrl}/compare/wave-vs-zoho` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is Zoho Invoice better than Wave in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Zoho Invoice has a better Trustpilot rating (4.0/5 vs Wave\'s 1.2/5) and is actually free (Wave removed its free plan). However, Zoho caps you at 500 invoices/year and 5 clients, then pushes you to Zoho Books ($15/mo+). Wave has unlimited invoicing at $19/mo but carries payment hold risks. InvoiceFlow offers a free tier with no ecosystem lock-in and full Australian compliance.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which is cheaper: Wave or Zoho Invoice?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Zoho Invoice is technically cheaper because it\'s free (up to 500 invoices/year and 5 clients). Wave costs $19/mo since removing its free plan. However, once you outgrow Zoho Invoice, you\'re forced to Zoho Books ($15/mo+), making the long-term cost similar. InvoiceFlow offers 5 free invoices/month with no forced migration — Pro is $19/mo for unlimited.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Wave or Zoho Invoice work better in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Neither is ideal for Australia. Wave was designed for North America and has minimal GST support. Zoho Invoice has basic tax support but was primarily built for the Indian and US markets. Both lack deep ATO integration, ABN validation, and BAS reporting. For Australian freelancers, InvoiceFlow is purpose-built with full GST compliance and ABN support.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are Wave payment holds still happening in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Wave\'s payment hold issues continue in 2026. Multiple users report holds lasting 3-7 months on amounts exceeding $50,000, with minimal support response. Wave\'s Trustpilot score remains at 1.2/5, with payment holds being one of the most common complaints. If you process significant invoice payments, this is a serious business risk.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best free invoicing software in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The best genuinely free invoicing options in 2026: InvoiceFlow (5 invoices/month, full GST compliance, AI-powered, no caps on clients), Zoho Invoice (500 invoices/year, 5 clients, ecosystem lock-in risk), and Wave (no longer free — $19/mo). For Australian freelancers specifically, InvoiceFlow is the strongest free option due to its ABN/GST compliance and no migration trap.',
      },
    },
  ],
};

const features = [
  { feature: 'Starting price', wave: '$19/mo (Pro)', zoho: 'Free', invoiceflow: 'Free', winner: 'zoho-if' },
  { feature: 'Invoice limit', wave: 'Unlimited', zoho: '500/year', invoiceflow: '5/mo free, unlimited Pro', winner: 'wave' },
  { feature: 'Client limit', wave: 'Unlimited', zoho: '5 (Free)', invoiceflow: 'Unlimited', winner: 'wave-if' },
  { feature: 'Free tier', wave: 'No (removed)', zoho: 'Yes (capped)', invoiceflow: 'Yes (5/mo)', winner: 'zoho-if' },
  { feature: 'GST compliance (AU)', wave: 'Minimal', zoho: 'Basic', invoiceflow: 'Full', winner: 'invoiceflow' },
  { feature: 'AI features', wave: 'None', zoho: 'None', invoiceflow: 'Gemini AI', winner: 'invoiceflow' },
  { feature: 'Payment processing', wave: '2.9% + $0.60', zoho: 'PayPal/Stripe', invoiceflow: 'Your own Stripe', winner: 'invoiceflow' },
  { feature: 'Payment hold risk', wave: 'High (3-7 months)', zoho: 'None', invoiceflow: 'None', winner: 'zoho-if' },
  { feature: 'Ecosystem lock-in', wave: 'Low', zoho: 'High (Zoho Books)', invoiceflow: 'None', winner: 'invoiceflow' },
  { feature: 'Time tracking', wave: 'No', zoho: 'Built-in', invoiceflow: 'Not included', winner: 'zoho' },
  { feature: 'Trustpilot', wave: '1.2/5', zoho: '4.0/5', invoiceflow: 'New', winner: 'zoho' },
  { feature: 'Ease of use', wave: 'Simple', zoho: 'Moderate', invoiceflow: 'Simplest', winner: 'invoiceflow' },
];

export default function WaveVsZohoPage() {
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
          <span className="text-slate-200">Wave vs Zoho Invoice</span>
        </nav>

        {/* Hero */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-slate-200 mb-6">
            <span className="h-2 w-2 rounded-full bg-amber-400" />
            Budget Invoicing Battle
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 heading-font">
            <span className="text-cyan-400">Wave</span> vs <span className="text-orange-400">Zoho Invoice</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-4">
            Two budget invoicing tools with very different problems. Wave charges $19/mo with payment hold nightmares.
            Zoho is free but caps you at 500/year and funnels you into their ecosystem. Is there a better way?
          </p>
          <p className="text-sm text-slate-500">Updated February 2026</p>
        </div>

        {/* Quick Verdict */}
        <div className="glass rounded-3xl p-8 mb-12 border border-amber-500/20">
          <h3 className="text-xl font-bold text-amber-400 mb-4 heading-font">Quick Verdict</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-400 mb-1">Wave</div>
              <p className="text-sm text-slate-300">Unlimited invoicing at $19/mo. But 1.2/5 Trustpilot, payment holds lasting months, and the free plan is dead. The risk outweighs the savings.</p>
              <div className="text-xs text-slate-500 mt-2">From $19/mo</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-400 mb-1">Zoho Invoice</div>
              <p className="text-sm text-slate-300">Actually free, but 500 invoices/year and 5 clients. Outgrow it and you&apos;re pushed to Zoho Books. It&apos;s a lead gen tool disguised as a product.</p>
              <div className="text-xs text-slate-500 mt-2">Free (500/yr cap)</div>
            </div>
            <div className="text-center border-2 border-teal-500/30 rounded-xl p-3 -m-3">
              <div className="text-2xl font-bold text-teal-400 mb-1">InvoiceFlow</div>
              <p className="text-sm text-slate-300">Free tier without Wave&apos;s payment risks or Zoho&apos;s ecosystem trap. Full AU compliance. AI-powered. The budget option done right.</p>
              <div className="text-xs text-teal-400 mt-2">Free or $19/mo</div>
            </div>
          </div>
        </div>

        {/* The Problem With Both */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="rounded-2xl bg-red-500/10 border border-red-500/20 p-6">
            <h3 className="text-lg font-bold text-red-400 mb-3 heading-font">Wave&apos;s Payment Hold Problem</h3>
            <p className="text-sm text-slate-300 mb-3">Since H&amp;R Block&apos;s $405M acquisition:</p>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex gap-2"><span className="text-red-400">!</span>Payment holds of 3-7 months on $50K+</li>
              <li className="flex gap-2"><span className="text-red-400">!</span>Trustpilot crashed to 1.2/5</li>
              <li className="flex gap-2"><span className="text-red-400">!</span>Free plan completely removed</li>
              <li className="flex gap-2"><span className="text-red-400">!</span>2025 payroll calculation disasters</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-orange-500/10 border border-orange-500/20 p-6">
            <h3 className="text-lg font-bold text-orange-400 mb-3 heading-font">Zoho&apos;s Ecosystem Funnel</h3>
            <p className="text-sm text-slate-300 mb-3">Free today, locked in tomorrow:</p>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex gap-2"><span className="text-orange-400">!</span>500 invoices/year hard cap</li>
              <li className="flex gap-2"><span className="text-orange-400">!</span>Only 5 clients on free plan</li>
              <li className="flex gap-2"><span className="text-orange-400">!</span>Forced migration to Zoho Books</li>
              <li className="flex gap-2"><span className="text-orange-400">!</span>Authentication/login issues reported</li>
            </ul>
          </div>
        </div>

        {/* Cost Over Time */}
        <div className="glass rounded-3xl p-8 mb-12 border border-amber-500/20">
          <h3 className="text-xl font-bold text-amber-400 mb-4 heading-font">Real Cost Over 2 Years</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass rounded-xl p-5 text-center">
              <div className="text-sm font-semibold text-cyan-400 mb-3">Wave</div>
              <div className="text-xs text-slate-400 space-y-1">
                <div>Year 1: <span className="text-white">$228</span></div>
                <div>Year 2: <span className="text-white">$228</span></div>
                <div className="pt-2 border-t border-white/10">Total: <span className="text-cyan-300 font-bold">$456</span></div>
                <div className="text-red-400 text-xs mt-2">+ payment hold risk</div>
              </div>
            </div>
            <div className="glass rounded-xl p-5 text-center">
              <div className="text-sm font-semibold text-orange-400 mb-3">Zoho Invoice → Books</div>
              <div className="text-xs text-slate-400 space-y-1">
                <div>Year 1: <span className="text-white">$0</span> (under 500)</div>
                <div>Year 2: <span className="text-white">$180</span> (Zoho Books)</div>
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
                <div className="text-teal-400 text-xs mt-2">No lock-in, no risk</div>
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
                <th className="text-left py-3 px-4 text-cyan-400 font-semibold">Wave</th>
                <th className="text-left py-3 px-4 text-orange-400 font-semibold">Zoho Invoice</th>
                <th className="text-left py-3 px-4 text-teal-400 font-semibold bg-teal-500/5 rounded-t-xl">InvoiceFlow</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {features.map((row, i) => (
                <tr key={row.feature} className={i < features.length - 1 ? 'border-b border-white/5' : ''}>
                  <td className="py-3 px-4 text-slate-300 font-medium">{row.feature}</td>
                  <td className={`py-3 px-4 ${row.winner.includes('wave') ? 'text-cyan-300 font-semibold' : 'text-slate-400'}`}>{row.wave}</td>
                  <td className={`py-3 px-4 ${row.winner.includes('zoho') ? 'text-orange-300 font-semibold' : 'text-slate-400'}`}>{row.zoho}</td>
                  <td className={`py-3 px-4 bg-teal-500/5 ${row.winner === 'invoiceflow' || row.winner.includes('-if') ? 'text-teal-300 font-semibold' : 'text-slate-400'}`}>{row.invoiceflow}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* When to Choose */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="glass rounded-2xl p-6 border border-cyan-500/20">
            <h4 className="text-lg font-bold text-cyan-400 mb-3 heading-font">Choose Wave If...</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex gap-2"><span className="text-cyan-400">+</span>You need unlimited invoices now</li>
              <li className="flex gap-2"><span className="text-cyan-400">+</span>You&apos;re in North America</li>
              <li className="flex gap-2"><span className="text-cyan-400">+</span>You want built-in bookkeeping</li>
              <li className="flex gap-2"><span className="text-cyan-400">+</span>You accept the payment hold risk</li>
            </ul>
          </div>
          <div className="glass rounded-2xl p-6 border border-orange-500/20">
            <h4 className="text-lg font-bold text-orange-400 mb-3 heading-font">Choose Zoho If...</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex gap-2"><span className="text-orange-400">+</span>You send &lt;42 invoices/month</li>
              <li className="flex gap-2"><span className="text-orange-400">+</span>You already use Zoho products</li>
              <li className="flex gap-2"><span className="text-orange-400">+</span>You want free time tracking</li>
              <li className="flex gap-2"><span className="text-orange-400">+</span>You don&apos;t mind ecosystem lock-in</li>
            </ul>
          </div>
          <div className="glass rounded-2xl p-6 border-2 border-teal-500/30 bg-teal-500/5">
            <h4 className="text-lg font-bold text-teal-400 mb-3 heading-font">Choose InvoiceFlow If...</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex gap-2"><span className="text-teal-400">+</span>You want free without the traps</li>
              <li className="flex gap-2"><span className="text-teal-400">+</span>You&apos;re in Australia (GST + ABN)</li>
              <li className="flex gap-2"><span className="text-teal-400">+</span>You want AI-powered creation</li>
              <li className="flex gap-2"><span className="text-teal-400">+</span>No payment holds, no migration</li>
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
              { label: 'Wave Alternative', href: '/alternative-to/wave' },
              { label: 'Zoho Alternative', href: '/alternative-to/zoho' },
              { label: 'FreshBooks vs Wave', href: '/compare/freshbooks-vs-wave' },
              { label: 'FreshBooks vs Zoho', href: '/compare/freshbooks-vs-zoho' },
              { label: 'Xero vs Wave', href: '/compare/xero-vs-wave' },
              { label: 'QuickBooks vs Wave', href: '/compare/quickbooks-vs-wave' },
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
            Budget invoicing without the compromises
          </h3>
          <p className="text-slate-300 max-w-xl mx-auto mb-8">
            Wave has payment holds. Zoho has ecosystem lock-in. InvoiceFlow gives you
            free invoicing with full Australian compliance, AI-powered creation, and zero risk.
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
