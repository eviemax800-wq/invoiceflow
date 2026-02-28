import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Xero vs MYOB 2026: Which Is Better for Australian Freelancers? | InvoiceFlow',
  description:
    'Xero vs MYOB compared for Australian freelancers. Pricing ($35 vs $34/mo), features, GST compliance, ease of use. Plus a simpler alternative from $0/mo.',
  alternates: { canonical: '/compare/xero-vs-myob' },
  keywords: ['xero vs myob', 'xero vs myob australia', 'xero or myob for sole trader', 'xero vs myob pricing', 'xero vs myob for freelancers'],
  openGraph: {
    title: 'Xero vs MYOB 2026 — Which One Is Right for You?',
    description: 'Xero charges $35/mo. MYOB charges $34/mo. Both are overkill for freelancers who just need invoicing. See the full comparison.',
  },
};

const siteUrl = 'https://invoiceflow-teal.vercel.app';

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
    { '@type': 'ListItem', position: 2, name: 'Compare', item: `${siteUrl}/compare` },
    { '@type': 'ListItem', position: 3, name: 'Xero vs MYOB', item: `${siteUrl}/compare/xero-vs-myob` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is Xero or MYOB better for Australian freelancers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For freelancers who primarily need invoicing, neither is ideal. Xero starts at $35/mo and caps invoices at 20/month on the entry plan. MYOB starts at $34/mo with no free tier. Both are full accounting suites designed for businesses with employees. InvoiceFlow offers a free tier with 5 invoices/month and Pro at $19/mo, purpose-built for freelancer invoicing with GST compliance.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does Xero cost vs MYOB in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Xero Ignite starts at $35/mo (20 invoice cap), Xero Grow at $75/mo, and Xero Comprehensive at $105/mo. MYOB Business Lite is $34/mo, Business Pro $54/mo, and AccountRight Plus $69/mo. Both have increased prices significantly since 2021. InvoiceFlow offers a free tier and Pro at $19/mo for unlimited invoicing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I switch from Xero or MYOB to InvoiceFlow?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. InvoiceFlow is designed for freelancers who find Xero and MYOB overly complex and expensive for their needs. You can start free with 5 invoices per month, import your client details, and be sending GST-compliant invoices within minutes. Many freelancers keep their accountant on Xero/MYOB for year-end while using InvoiceFlow for day-to-day invoicing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do Xero and MYOB have free plans?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Neither Xero nor MYOB offers a permanent free plan. Xero occasionally offers 75% off for 3 months as a promotional deal, then reverts to full pricing ($35/mo minimum). MYOB has no free tier at all. InvoiceFlow offers a permanent free tier with 5 invoices per month, no credit card required.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which is easier to use, Xero or MYOB?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Xero is generally considered easier to use than MYOB, with a more modern interface and better mobile app. However, both are full accounting suites with features most freelancers never use (payroll, inventory, project tracking). For pure invoicing simplicity, InvoiceFlow is designed specifically for freelancers with a clean, modern interface focused on sending invoices and getting paid.',
      },
    },
  ],
};

const features = [
  { feature: 'Starting price', xero: '$35/mo (Ignite)', myob: '$34/mo (Lite)', invoiceflow: 'Free (5 inv/mo)', winner: 'invoiceflow' },
  { feature: 'Unlimited invoicing', xero: '$75/mo (Grow)', myob: '$34/mo', invoiceflow: '$19/mo (Pro)', winner: 'invoiceflow' },
  { feature: 'Free tier', xero: 'No (promo only)', myob: 'No', invoiceflow: 'Yes (5/mo)', winner: 'invoiceflow' },
  { feature: 'GST compliance', xero: 'Full', myob: 'Full', invoiceflow: 'Full', winner: 'all' },
  { feature: 'BAS preparation', xero: 'Full BAS', myob: 'Full BAS', invoiceflow: 'GST summary', winner: 'tie' },
  { feature: 'AI features', xero: 'JAX AI (accounting)', myob: 'None', invoiceflow: 'Gemini AI extraction', winner: 'mixed' },
  { feature: 'Payroll', xero: 'Included ($75+)', myob: '+$2/emp/mo', invoiceflow: 'Not included', winner: 'xero' },
  { feature: 'Mobile app', xero: 'Good (4.3/5)', myob: 'Average (3.2/5)', invoiceflow: 'Web responsive', winner: 'xero' },
  { feature: 'Bank feeds', xero: '200+ AU banks', myob: '180+ AU banks', invoiceflow: 'Not included', winner: 'xero' },
  { feature: 'Ease of use', xero: 'Moderate', myob: 'Complex', invoiceflow: 'Simple', winner: 'invoiceflow' },
  { feature: 'Trustpilot rating', xero: '3.8/5', myob: '2.1/5', invoiceflow: 'New', winner: 'xero' },
  { feature: 'AU support', xero: 'Chat + email', myob: 'Phone + chat', invoiceflow: 'Email + self-serve', winner: 'myob' },
];

export default function XeroVsMyobPage() {
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
          <span className="text-slate-200">Xero vs MYOB</span>
        </nav>

        {/* Hero */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-slate-200 mb-6">
            <span className="h-2 w-2 rounded-full bg-blue-400" />
            Head-to-Head Comparison for Australian Freelancers
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 heading-font">
            <span className="text-blue-400">Xero</span> vs <span className="text-purple-400">MYOB</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-4">
            Australia&apos;s two biggest accounting platforms go head-to-head. But if you&apos;re a freelancer
            who just needs invoicing, there&apos;s a simpler option.
          </p>
          <p className="text-sm text-slate-500">Updated February 2026 with latest pricing and features</p>
        </div>

        {/* Quick Verdict */}
        <div className="glass rounded-3xl p-8 mb-12 border border-amber-500/20">
          <h3 className="text-xl font-bold text-amber-400 mb-4 heading-font">Quick Verdict</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400 mb-1">Xero</div>
              <p className="text-sm text-slate-300">Best for freelancers who need accounting + invoicing in one platform. Better UI, stronger ecosystem.</p>
              <div className="text-xs text-slate-500 mt-2">From $35/mo</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400 mb-1">MYOB</div>
              <p className="text-sm text-slate-300">Best for freelancers who want phone support and traditional AU accounting. Stronger payroll integration.</p>
              <div className="text-xs text-slate-500 mt-2">From $34/mo</div>
            </div>
            <div className="text-center border-2 border-teal-500/30 rounded-xl p-3 -m-3">
              <div className="text-2xl font-bold text-teal-400 mb-1">InvoiceFlow</div>
              <p className="text-sm text-slate-300">Best for freelancers who just need invoicing. Free tier, AI-powered, no accounting bloat.</p>
              <div className="text-xs text-teal-400 mt-2">Free or $19/mo</div>
            </div>
          </div>
        </div>

        {/* Pricing Face-Off */}
        <div className="glass rounded-3xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-white mb-6 heading-font">Pricing Breakdown</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Xero */}
            <div className="rounded-2xl bg-blue-500/5 border border-blue-500/20 p-6">
              <div className="text-lg font-bold text-blue-400 mb-4">Xero Pricing</div>
              <div className="space-y-3">
                {[
                  { tier: 'Ignite', price: '$35/mo', note: '20 invoice cap' },
                  { tier: 'Grow', price: '$75/mo', note: 'Unlimited invoices' },
                  { tier: 'Comprehensive', price: '$105/mo', note: 'Multi-currency, projects' },
                ].map((t) => (
                  <div key={t.tier} className="flex justify-between items-center">
                    <div>
                      <div className="text-white text-sm font-medium">{t.tier}</div>
                      <div className="text-xs text-slate-500">{t.note}</div>
                    </div>
                    <div className="text-blue-300 font-semibold text-sm">{t.price}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-blue-500/20 text-xs text-slate-400">
                +169% since 2021. Ignite caps invoices at 20/mo.
              </div>
            </div>

            {/* MYOB */}
            <div className="rounded-2xl bg-purple-500/5 border border-purple-500/20 p-6">
              <div className="text-lg font-bold text-purple-400 mb-4">MYOB Pricing</div>
              <div className="space-y-3">
                {[
                  { tier: 'Business Lite', price: '$34/mo', note: 'Basic invoicing' },
                  { tier: 'Business Pro', price: '$54/mo', note: 'Invoicing + expenses' },
                  { tier: 'AccountRight Plus', price: '$69/mo', note: 'Multi-user, inventory' },
                ].map((t) => (
                  <div key={t.tier} className="flex justify-between items-center">
                    <div>
                      <div className="text-white text-sm font-medium">{t.tier}</div>
                      <div className="text-xs text-slate-500">{t.note}</div>
                    </div>
                    <div className="text-purple-300 font-semibold text-sm">{t.price}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-purple-500/20 text-xs text-slate-400">
                KKR-owned. Price increase confirmed Mar 2026. Payroll +$2/emp/mo.
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
              <span className="text-emerald-400 font-semibold">Save $180-$660/year</span> vs Xero.{' '}
              <span className="text-emerald-400 font-semibold">Save $180-$600/year</span> vs MYOB.
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
                <th className="text-left py-3 px-4 text-blue-400 font-semibold">Xero</th>
                <th className="text-left py-3 px-4 text-purple-400 font-semibold">MYOB</th>
                <th className="text-left py-3 px-4 text-teal-400 font-semibold bg-teal-500/5 rounded-t-xl">InvoiceFlow</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {features.map((row, i) => (
                <tr key={row.feature} className={i < features.length - 1 ? 'border-b border-white/5' : ''}>
                  <td className="py-3 px-4 text-slate-300 font-medium">{row.feature}</td>
                  <td className={`py-3 px-4 ${row.winner === 'xero' || row.winner === 'all' ? 'text-blue-300 font-semibold' : 'text-slate-400'}`}>{row.xero}</td>
                  <td className={`py-3 px-4 ${row.winner === 'myob' || row.winner === 'all' ? 'text-purple-300 font-semibold' : 'text-slate-400'}`}>{row.myob}</td>
                  <td className={`py-3 px-4 bg-teal-500/5 ${row.winner === 'invoiceflow' || row.winner === 'all' ? 'text-teal-300 font-semibold' : 'text-slate-400'}`}>{row.invoiceflow}</td>
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
              <li className="flex gap-2"><span className="text-blue-400">+</span>You need full accounting + invoicing</li>
              <li className="flex gap-2"><span className="text-blue-400">+</span>Your accountant prefers Xero</li>
              <li className="flex gap-2"><span className="text-blue-400">+</span>You need bank feeds and reconciliation</li>
              <li className="flex gap-2"><span className="text-blue-400">+</span>You send 20+ invoices/month</li>
            </ul>
            <div className="mt-4 pt-4 border-t border-blue-500/10">
              <div className="text-xs text-slate-500">Keep in mind:</div>
              <ul className="text-xs text-slate-400 mt-1 space-y-1">
                <li>- Entry plan caps at 20 invoices/month</li>
                <li>- Price increased +169% since 2021</li>
                <li>- Complex for simple invoicing needs</li>
              </ul>
            </div>
          </div>

          <div className="glass rounded-2xl p-6 border border-purple-500/20">
            <h4 className="text-lg font-bold text-purple-400 mb-3 heading-font">Choose MYOB If...</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex gap-2"><span className="text-purple-400">+</span>You want phone support</li>
              <li className="flex gap-2"><span className="text-purple-400">+</span>You need integrated payroll</li>
              <li className="flex gap-2"><span className="text-purple-400">+</span>Your accountant uses MYOB</li>
              <li className="flex gap-2"><span className="text-purple-400">+</span>You need desktop software (AccountRight)</li>
            </ul>
            <div className="mt-4 pt-4 border-t border-purple-500/10">
              <div className="text-xs text-slate-500">Keep in mind:</div>
              <ul className="text-xs text-slate-400 mt-1 space-y-1">
                <li>- Trustpilot 2.1/5 (support complaints)</li>
                <li>- No free tier at all</li>
                <li>- Price increase coming March 2026</li>
              </ul>
            </div>
          </div>

          <div className="glass rounded-2xl p-6 border-2 border-teal-500/30 bg-teal-500/5">
            <h4 className="text-lg font-bold text-teal-400 mb-3 heading-font">Choose InvoiceFlow If...</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex gap-2"><span className="text-teal-400">+</span>You primarily need invoicing, not accounting</li>
              <li className="flex gap-2"><span className="text-teal-400">+</span>You want to start free, no credit card</li>
              <li className="flex gap-2"><span className="text-teal-400">+</span>You want AI to speed up invoice creation</li>
              <li className="flex gap-2"><span className="text-teal-400">+</span>You want a simple, modern interface</li>
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
              { value: '$420-$660', label: 'Annual savings vs Xero', color: 'text-blue-400' },
              { value: '$180-$600', label: 'Annual savings vs MYOB', color: 'text-purple-400' },
              { value: '2.4M+', label: 'AU sole traders', color: 'text-emerald-400' },
              { value: '72%', label: 'Only need basic invoicing', color: 'text-amber-400' },
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
              { label: 'Xero Alternative', href: '/alternative-to/xero' },
              { label: 'MYOB Alternative', href: '/alternative-to/myob' },
              { label: 'Xero vs FreshBooks', href: '/compare/xero-vs-freshbooks' },
              { label: 'MYOB vs QuickBooks', href: '/compare/myob-vs-quickbooks' },
              { label: 'FreshBooks vs Wave', href: '/compare/freshbooks-vs-wave' },
              { label: 'GST Guide', href: '/guides/gst-for-freelancers' },
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
            Skip the accounting bloat
          </h3>
          <p className="text-slate-300 max-w-xl mx-auto mb-8">
            You don&apos;t need a $35/mo accounting suite to send invoices. Start free with InvoiceFlow
            and upgrade to Pro ($19/mo) when you need unlimited invoicing.
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
