import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'FreshBooks vs Wave 2026: Best Budget Invoicing for Freelancers? | InvoiceFlow',
  description:
    'FreshBooks ($24/mo) vs Wave ($19/mo) compared. Features, pricing, payment processing, and a better free alternative for Australian freelancers.',
  alternates: { canonical: '/compare/freshbooks-vs-wave' },
  keywords: ['freshbooks vs wave', 'freshbooks vs wave accounting', 'wave vs freshbooks for freelancers', 'best free invoicing software australia'],
  openGraph: {
    title: 'FreshBooks vs Wave 2026 — Best Budget Invoicing Compared',
    description: 'FreshBooks charges $24/mo. Wave charges $19/mo (no longer free). Which is better for freelancers? Plus a free alternative.',
  },
};

const siteUrl = 'https://invoiceflow-teal.vercel.app';

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
    { '@type': 'ListItem', position: 2, name: 'Compare', item: `${siteUrl}/compare` },
    { '@type': 'ListItem', position: 3, name: 'FreshBooks vs Wave', item: `${siteUrl}/compare/freshbooks-vs-wave` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is Wave still free in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. After being acquired by H&R Block for $405M, Wave removed its free plan. Wave Pro now costs $19/mo for invoicing. The free tier only included basic features and was supported by payment processing fees (2.9% + $0.60). Many users reported payment holds lasting 6-7 months on amounts over $50K. InvoiceFlow offers a permanent free tier with 5 invoices per month.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is FreshBooks better than Wave for Australian freelancers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'FreshBooks has better features than Wave (time tracking, project management, proposals) but costs $24/mo with a 5-client cap. Wave is cheaper at $19/mo but has limited Australian compliance features and a history of payment holds. For Australian freelancers who need GST compliance, InvoiceFlow is a stronger option at $0-19/mo with full ABN and GST support.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happened to Wave Accounting?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wave was acquired by H&R Block in 2019 for $405M. Since then, Wave has transitioned from a free model to paid plans. Wave Pro costs $19/mo. The platform experienced significant issues including payment holds (some lasting 6-7 months), reduced support quality, and a payroll service disaster in 2025. Many former Wave users have switched to alternatives.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which is cheaper, FreshBooks or Wave?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wave Pro ($19/mo) is cheaper than FreshBooks Lite ($24/mo). However, Wave charges higher payment processing fees (2.9% + $0.60 vs FreshBooks 2.9% + $0.30). Over 50+ invoices per month, the processing fees can add up. InvoiceFlow is the cheapest option with a free tier (5 invoices/month) and Pro at $19/mo for unlimited invoicing with no payment processing fees built into the platform.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use FreshBooks or Wave in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Both work in Australia but were designed for North American markets. FreshBooks has basic GST support but lacks deep ATO integration. Wave has minimal Australian compliance features. For Australian freelancers who need GST-compliant tax invoices, ABN integration, and ATO-aligned reporting, InvoiceFlow is purpose-built for the Australian market.',
      },
    },
  ],
};

const features = [
  { feature: 'Starting price', freshbooks: '$24/mo (Lite)', wave: '$19/mo (Pro)', invoiceflow: 'Free', winner: 'invoiceflow' },
  { feature: 'Client limit', freshbooks: '5 (Lite)', wave: 'Unlimited', invoiceflow: 'Unlimited', winner: 'wave-if' },
  { feature: 'Free tier', freshbooks: 'No', wave: 'No (removed)', invoiceflow: 'Yes (5/mo)', winner: 'invoiceflow' },
  { feature: 'GST compliance (AU)', freshbooks: 'Basic', wave: 'Minimal', invoiceflow: 'Full', winner: 'invoiceflow' },
  { feature: 'Time tracking', freshbooks: 'Built-in', wave: 'No', invoiceflow: 'Not included', winner: 'freshbooks' },
  { feature: 'Payment processing', freshbooks: '2.9% + $0.30', wave: '2.9% + $0.60', invoiceflow: 'Your own Stripe', winner: 'freshbooks' },
  { feature: 'AI features', freshbooks: 'None', wave: 'None', invoiceflow: 'Gemini AI', winner: 'invoiceflow' },
  { feature: 'Expense tracking', freshbooks: 'Receipt scanning', wave: 'Basic', invoiceflow: 'Not included', winner: 'freshbooks' },
  { feature: 'Payment holds risk', freshbooks: 'Low', wave: 'High (6-7 months)', invoiceflow: 'None', winner: 'freshbooks-if' },
  { feature: 'Support quality', freshbooks: 'Good', wave: 'Poor', invoiceflow: 'Email + self-serve', winner: 'freshbooks' },
  { feature: 'Trustpilot', freshbooks: '3.4/5', wave: '1.2/5', invoiceflow: 'New', winner: 'freshbooks' },
  { feature: 'Ease of use', freshbooks: 'Easy', wave: 'Simple', invoiceflow: 'Simplest', winner: 'invoiceflow' },
];

export default function FreshBooksVsWavePage() {
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
          <span className="text-slate-200">FreshBooks vs Wave</span>
        </nav>

        {/* Hero */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-slate-200 mb-6">
            <span className="h-2 w-2 rounded-full bg-amber-400" />
            Budget Invoicing Showdown
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 heading-font">
            <span className="text-green-400">FreshBooks</span> vs <span className="text-cyan-400">Wave</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-4">
            Wave used to be the free option. Not anymore. Now FreshBooks ($24/mo) and Wave ($19/mo)
            are both paid — but there&apos;s still a genuinely free option for freelancers.
          </p>
          <p className="text-sm text-slate-500">Updated February 2026</p>
        </div>

        {/* Quick Verdict */}
        <div className="glass rounded-3xl p-8 mb-12 border border-amber-500/20">
          <h3 className="text-xl font-bold text-amber-400 mb-4 heading-font">Quick Verdict</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400 mb-1">FreshBooks</div>
              <p className="text-sm text-slate-300">Better features (time tracking, expenses, proposals) but 5-client cap and $24/mo minimum. Good for freelancers needing project management.</p>
              <div className="text-xs text-slate-500 mt-2">From $24/mo</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-400 mb-1">Wave</div>
              <p className="text-sm text-slate-300">Cheaper at $19/mo but Trustpilot 1.2/5, payment hold horror stories, and minimal AU compliance. No longer the budget winner.</p>
              <div className="text-xs text-slate-500 mt-2">From $19/mo</div>
            </div>
            <div className="text-center border-2 border-teal-500/30 rounded-xl p-3 -m-3">
              <div className="text-2xl font-bold text-teal-400 mb-1">InvoiceFlow</div>
              <p className="text-sm text-slate-300">Actually free. 5 invoices/month, full GST compliance, AI-powered. The budget option that FreshBooks and Wave used to be.</p>
              <div className="text-xs text-teal-400 mt-2">Free or $19/mo</div>
            </div>
          </div>
        </div>

        {/* Wave Warning */}
        <div className="rounded-2xl bg-red-500/10 border border-red-500/20 p-6 mb-12">
          <h3 className="text-lg font-bold text-red-400 mb-3 heading-font">Wave Payment Hold Warning</h3>
          <p className="text-sm text-slate-300 mb-3">
            Since H&amp;R Block acquired Wave, numerous freelancers have reported payment holds lasting
            3-7 months on amounts over $50,000. Wave&apos;s Trustpilot score is 1.2/5 with recurring complaints about:
          </p>
          <ul className="grid md:grid-cols-2 gap-2 text-sm text-slate-400">
            <li className="flex gap-2"><span className="text-red-400">!</span>Payments held for 6-7 months without explanation</li>
            <li className="flex gap-2"><span className="text-red-400">!</span>Support unresponsive during payment holds</li>
            <li className="flex gap-2"><span className="text-red-400">!</span>2025 payroll calculation errors</li>
            <li className="flex gap-2"><span className="text-red-400">!</span>Free plan removed after acquisition</li>
          </ul>
        </div>

        {/* Feature Table */}
        <div className="glass rounded-3xl p-6 lg:p-8 mb-12 overflow-x-auto">
          <h3 className="text-2xl font-bold text-white mb-6 heading-font">Feature-by-Feature Comparison</h3>
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-3 px-4 text-slate-400 font-medium">Feature</th>
                <th className="text-left py-3 px-4 text-green-400 font-semibold">FreshBooks</th>
                <th className="text-left py-3 px-4 text-cyan-400 font-semibold">Wave</th>
                <th className="text-left py-3 px-4 text-teal-400 font-semibold bg-teal-500/5 rounded-t-xl">InvoiceFlow</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {features.map((row, i) => (
                <tr key={row.feature} className={i < features.length - 1 ? 'border-b border-white/5' : ''}>
                  <td className="py-3 px-4 text-slate-300 font-medium">{row.feature}</td>
                  <td className={`py-3 px-4 ${row.winner.includes('freshbooks') ? 'text-green-300 font-semibold' : 'text-slate-400'}`}>{row.freshbooks}</td>
                  <td className={`py-3 px-4 ${row.winner.includes('wave') ? 'text-cyan-300 font-semibold' : 'text-slate-400'}`}>{row.wave}</td>
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
              <li className="flex gap-2"><span className="text-green-400">+</span>You need built-in time tracking</li>
              <li className="flex gap-2"><span className="text-green-400">+</span>You send proposals and estimates</li>
              <li className="flex gap-2"><span className="text-green-400">+</span>You work with fewer than 5 clients</li>
              <li className="flex gap-2"><span className="text-green-400">+</span>You want integrated expenses</li>
            </ul>
          </div>
          <div className="glass rounded-2xl p-6 border border-cyan-500/20">
            <h4 className="text-lg font-bold text-cyan-400 mb-3 heading-font">Choose Wave If...</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex gap-2"><span className="text-cyan-400">+</span>Budget is your #1 priority</li>
              <li className="flex gap-2"><span className="text-cyan-400">+</span>You need basic bookkeeping</li>
              <li className="flex gap-2"><span className="text-cyan-400">+</span>You&apos;re in North America</li>
              <li className="flex gap-2"><span className="text-cyan-400">+</span>You accept the payment hold risk</li>
            </ul>
          </div>
          <div className="glass rounded-2xl p-6 border-2 border-teal-500/30 bg-teal-500/5">
            <h4 className="text-lg font-bold text-teal-400 mb-3 heading-font">Choose InvoiceFlow If...</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex gap-2"><span className="text-teal-400">+</span>You want genuinely free invoicing</li>
              <li className="flex gap-2"><span className="text-teal-400">+</span>You&apos;re in Australia (GST + ABN)</li>
              <li className="flex gap-2"><span className="text-teal-400">+</span>You want AI-powered creation</li>
              <li className="flex gap-2"><span className="text-teal-400">+</span>No client cap, no payment holds</li>
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
              { label: 'Wave Alternative', href: '/alternative-to/wave' },
              { label: 'Xero vs MYOB', href: '/compare/xero-vs-myob' },
              { label: 'Xero vs FreshBooks', href: '/compare/xero-vs-freshbooks' },
              { label: 'MYOB vs QuickBooks', href: '/compare/myob-vs-quickbooks' },
              { label: 'Getting Paid Faster', href: '/guides/getting-paid-faster' },
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
            The actually free invoicing tool
          </h3>
          <p className="text-slate-300 max-w-xl mx-auto mb-8">
            Wave removed their free plan. FreshBooks never had one. InvoiceFlow gives you
            5 free invoices per month, forever. No credit card. No payment holds.
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
