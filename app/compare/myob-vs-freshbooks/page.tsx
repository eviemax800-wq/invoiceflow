import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'MYOB vs FreshBooks 2026: Which Is Better for Australian Freelancers? | InvoiceFlow',
  description:
    'MYOB vs FreshBooks compared for Australian freelancers. Pricing ($34 vs $24/mo), features, GST compliance, support. Plus a simpler alternative from $0/mo.',
  alternates: { canonical: '/compare/myob-vs-freshbooks' },
  keywords: ['myob vs freshbooks', 'myob vs freshbooks australia', 'myob vs freshbooks for small business', 'myob vs freshbooks pricing'],
  openGraph: {
    title: 'MYOB vs FreshBooks 2026 — Which One Is Right for You?',
    description: 'MYOB charges $34/mo. FreshBooks charges $24/mo (but caps at 5 clients). Both are overkill for freelancers who just need invoicing. See the full comparison.',
  },
};

const siteUrl = 'https://invoiceflow-teal.vercel.app';

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
    { '@type': 'ListItem', position: 2, name: 'Compare', item: `${siteUrl}/compare` },
    { '@type': 'ListItem', position: 3, name: 'MYOB vs FreshBooks', item: `${siteUrl}/compare/myob-vs-freshbooks` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is MYOB or FreshBooks better for Australian freelancers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It depends on your priorities. MYOB has 30+ years of Australian heritage, phone support, and integrated payroll — ideal for traditional small businesses. FreshBooks has a more modern UX and is easier to learn, but caps clients at 5 on its Lite plan and has no free tier. For freelancers who primarily need invoicing, InvoiceFlow offers a free tier with 5 invoices/month and Pro at $19/mo, purpose-built for freelancer invoicing with full GST compliance.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does MYOB cost vs FreshBooks in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MYOB Business Lite starts at $34/mo, Business Pro at $54/mo, and AccountRight Plus at $69/mo — with a confirmed price increase coming March 2026. FreshBooks Lite starts at $24/mo (5-client cap), Plus at $42/mo, and Premium at $54/mo — but often uses 70% promotional pricing that reverts to full price. InvoiceFlow offers a permanent free tier and Pro at $19/mo for unlimited invoicing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does MYOB or FreshBooks have better support?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MYOB offers phone support alongside chat, which is rare among accounting platforms. However, its Trustpilot rating is just 2.1/5, with many complaints about long wait times and billing issues. FreshBooks scores 3.4/5 on Trustpilot and is known for responsive email and chat support, though it lacks phone support for lower-tier plans. InvoiceFlow provides email support and comprehensive self-serve documentation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do MYOB and FreshBooks have free plans?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Neither MYOB nor FreshBooks offers a permanent free plan. MYOB has no free tier at all. FreshBooks offers a 30-day free trial and frequently runs 70% off promotions for 3-6 months, but these revert to full pricing ($24-$54/mo). InvoiceFlow offers a permanent free tier with 5 invoices per month, no credit card required.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I switch from MYOB or FreshBooks to InvoiceFlow?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. InvoiceFlow is designed for freelancers who find MYOB and FreshBooks overly complex or expensive for their invoicing needs. You can start free with 5 invoices per month, import your client details, and be sending GST-compliant invoices within minutes. Many freelancers keep their accountant on MYOB for year-end while using InvoiceFlow for day-to-day invoicing.',
      },
    },
  ],
};

const features = [
  { feature: 'Starting price', myob: '$34/mo (Lite)', freshbooks: '$24/mo (Lite)', invoiceflow: 'Free (5 inv/mo)', winner: 'invoiceflow' },
  { feature: 'Unlimited invoicing', myob: '$34/mo', freshbooks: '$24/mo', invoiceflow: '$19/mo (Pro)', winner: 'invoiceflow' },
  { feature: 'Free tier', myob: 'No', freshbooks: 'No (promo only)', invoiceflow: 'Yes (5/mo)', winner: 'invoiceflow' },
  { feature: 'Client cap', myob: 'Unlimited', freshbooks: '5 clients (Lite!)', invoiceflow: 'Unlimited', winner: 'myob' },
  { feature: 'GST compliance', myob: 'Full', freshbooks: 'Full', invoiceflow: 'Full', winner: 'all' },
  { feature: 'BAS preparation', myob: 'Full BAS', freshbooks: 'Full BAS', invoiceflow: 'GST summary', winner: 'tie' },
  { feature: 'AI features', myob: 'None', freshbooks: 'None', invoiceflow: 'Gemini AI extraction', winner: 'invoiceflow' },
  { feature: 'Phone support', myob: 'Yes', freshbooks: 'Premium only', invoiceflow: 'No', winner: 'myob' },
  { feature: 'Mobile app', myob: 'Average (3.2/5)', freshbooks: 'Good (4.5/5)', invoiceflow: 'Web responsive', winner: 'freshbooks' },
  { feature: 'Payroll', myob: '+$2/emp/mo', freshbooks: 'Not included', invoiceflow: 'Not included', winner: 'myob' },
  { feature: 'Trustpilot rating', myob: '2.1/5', freshbooks: '3.4/5', invoiceflow: 'New', winner: 'freshbooks' },
  { feature: 'AU heritage', myob: '30+ years', freshbooks: 'Canadian (est. 2003)', invoiceflow: 'AU-built', winner: 'myob' },
];

export default function MyobVsFreshbooksPage() {
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
          <span className="text-slate-200">MYOB vs FreshBooks</span>
        </nav>

        {/* Hero */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-slate-200 mb-6">
            <span className="h-2 w-2 rounded-full bg-purple-400" />
            Head-to-Head Comparison for Australian Freelancers
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 heading-font">
            <span className="text-purple-400">MYOB</span> vs <span className="text-green-400">FreshBooks</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-4">
            Australia&apos;s legacy accounting giant takes on the Canadian challenger. But if you&apos;re a freelancer
            who just needs invoicing, there&apos;s a smarter option.
          </p>
          <p className="text-sm text-slate-500">Updated February 2026 with latest pricing and features</p>
        </div>

        {/* Quick Verdict */}
        <div className="glass rounded-3xl p-8 mb-12 border border-amber-500/20">
          <h3 className="text-xl font-bold text-amber-400 mb-4 heading-font">Quick Verdict</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400 mb-1">MYOB</div>
              <p className="text-sm text-slate-300">Best for traditional Australian businesses who want phone support and payroll. 30+ year AU heritage.</p>
              <div className="text-xs text-slate-500 mt-2">From $34/mo</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400 mb-1">FreshBooks</div>
              <p className="text-sm text-slate-300">Best for freelancers who want better UX than MYOB. But 5-client cap on Lite and no free tier.</p>
              <div className="text-xs text-slate-500 mt-2">From $24/mo</div>
            </div>
            <div className="text-center border-2 border-teal-500/30 rounded-xl p-3 -m-3">
              <div className="text-2xl font-bold text-teal-400 mb-1">InvoiceFlow</div>
              <p className="text-sm text-slate-300">Best for freelancers who just need invoicing. Free tier, AI-powered, no client caps, no accounting bloat.</p>
              <div className="text-xs text-teal-400 mt-2">Free or $19/mo</div>
            </div>
          </div>
        </div>

        {/* Pricing Face-Off */}
        <div className="glass rounded-3xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-white mb-6 heading-font">Pricing Breakdown</h3>
          <div className="grid md:grid-cols-3 gap-6">
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
                KKR-owned (A$2B acquisition). Price increase confirmed Mar 2026. Payroll +$2/emp/mo.
              </div>
            </div>

            {/* FreshBooks */}
            <div className="rounded-2xl bg-green-500/5 border border-green-500/20 p-6">
              <div className="text-lg font-bold text-green-400 mb-4">FreshBooks Pricing</div>
              <div className="space-y-3">
                {[
                  { tier: 'Lite', price: '$24/mo', note: '5 client cap!' },
                  { tier: 'Plus', price: '$42/mo', note: '50 clients' },
                  { tier: 'Premium', price: '$54/mo', note: 'Unlimited clients' },
                ].map((t) => (
                  <div key={t.tier} className="flex justify-between items-center">
                    <div>
                      <div className="text-white text-sm font-medium">{t.tier}</div>
                      <div className="text-xs text-slate-500">{t.note}</div>
                    </div>
                    <div className="text-green-300 font-semibold text-sm">{t.price}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-green-500/20 text-xs text-slate-400">
                $125M debt (Mar 2025). Declining headcount. 70% promo bait-and-switch pricing.
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
              <span className="text-emerald-400 font-semibold">Save $60-$600/year</span> vs FreshBooks.{' '}
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
                <th className="text-left py-3 px-4 text-purple-400 font-semibold">MYOB</th>
                <th className="text-left py-3 px-4 text-green-400 font-semibold">FreshBooks</th>
                <th className="text-left py-3 px-4 text-teal-400 font-semibold bg-teal-500/5 rounded-t-xl">InvoiceFlow</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {features.map((row, i) => (
                <tr key={row.feature} className={i < features.length - 1 ? 'border-b border-white/5' : ''}>
                  <td className="py-3 px-4 text-slate-300 font-medium">{row.feature}</td>
                  <td className={`py-3 px-4 ${row.winner === 'myob' || row.winner === 'all' ? 'text-purple-300 font-semibold' : 'text-slate-400'}`}>{row.myob}</td>
                  <td className={`py-3 px-4 ${row.winner === 'freshbooks' || row.winner === 'all' ? 'text-green-300 font-semibold' : 'text-slate-400'}`}>{row.freshbooks}</td>
                  <td className={`py-3 px-4 bg-teal-500/5 ${row.winner === 'invoiceflow' || row.winner === 'all' ? 'text-teal-300 font-semibold' : 'text-slate-400'}`}>{row.invoiceflow}</td>
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
              <li className="flex gap-2"><span className="text-purple-400">+</span>You want phone support for your questions</li>
              <li className="flex gap-2"><span className="text-purple-400">+</span>You need integrated payroll for employees</li>
              <li className="flex gap-2"><span className="text-purple-400">+</span>Your accountant uses MYOB</li>
              <li className="flex gap-2"><span className="text-purple-400">+</span>You value 30+ years of AU heritage</li>
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

          <div className="glass rounded-2xl p-6 border border-green-500/20">
            <h4 className="text-lg font-bold text-green-400 mb-3 heading-font">Choose FreshBooks If...</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex gap-2"><span className="text-green-400">+</span>You want a cleaner, more modern UX</li>
              <li className="flex gap-2"><span className="text-green-400">+</span>You work with fewer than 5 clients</li>
              <li className="flex gap-2"><span className="text-green-400">+</span>You need solid time tracking features</li>
              <li className="flex gap-2"><span className="text-green-400">+</span>You prefer a better mobile app experience</li>
            </ul>
            <div className="mt-4 pt-4 border-t border-green-500/10">
              <div className="text-xs text-slate-500">Keep in mind:</div>
              <ul className="text-xs text-slate-400 mt-1 space-y-1">
                <li>- 5-client cap on Lite plan ($24/mo)</li>
                <li>- 70% promo pricing reverts to full price</li>
                <li>- $125M debt, declining headcount</li>
              </ul>
            </div>
          </div>

          <div className="glass rounded-2xl p-6 border-2 border-teal-500/30 bg-teal-500/5">
            <h4 className="text-lg font-bold text-teal-400 mb-3 heading-font">Choose InvoiceFlow If...</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex gap-2"><span className="text-teal-400">+</span>You primarily need invoicing, not accounting</li>
              <li className="flex gap-2"><span className="text-teal-400">+</span>You want to start free, no credit card</li>
              <li className="flex gap-2"><span className="text-teal-400">+</span>You want AI to speed up invoice creation</li>
              <li className="flex gap-2"><span className="text-teal-400">+</span>You need unlimited clients from day one</li>
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
              { value: '$60-$600', label: 'Annual savings vs FreshBooks', color: 'text-green-400' },
              { value: '$180-$600', label: 'Annual savings vs MYOB', color: 'text-purple-400' },
              { value: '2.1/5', label: 'MYOB Trustpilot rating', color: 'text-amber-400' },
              { value: '5 clients', label: 'FreshBooks Lite cap', color: 'text-red-400' },
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
              { label: 'Xero vs MYOB', href: '/compare/xero-vs-myob' },
              { label: 'Xero vs FreshBooks', href: '/compare/xero-vs-freshbooks' },
              { label: 'MYOB vs QuickBooks', href: '/compare/myob-vs-quickbooks' },
              { label: 'FreshBooks vs Wave', href: '/compare/freshbooks-vs-wave' },
              { label: 'MYOB Alternative', href: '/alternative-to/myob' },
              { label: 'FreshBooks Alternative', href: '/alternative-to/freshbooks' },
              { label: 'GST Guide', href: '/guides/gst-for-freelancers' },
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
            You don&apos;t need a $34/mo accounting suite with a 2.1-star rating or a $24/mo tool that caps you at 5 clients. Start free with InvoiceFlow
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
