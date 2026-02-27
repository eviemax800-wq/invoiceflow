import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import PricingCards from '@/components/pricing/PricingCards';

export const metadata: Metadata = {
  title: 'Pricing — InvoiceFlow | Free Invoicing for Australian Freelancers',
  description:
    'Start free with 5 invoices/month. Pro plan $19/mo for unlimited invoices. Compare InvoiceFlow vs Xero ($35/mo), FreshBooks ($24/mo), and MYOB ($36/mo).',
  alternates: { canonical: '/pricing' },
  openGraph: {
    title: 'InvoiceFlow Pricing — Start Free, Upgrade When Ready',
    description:
      'Free tier: 5 invoices/mo. Pro: $19/mo unlimited. Premium: $39/mo with QuickBooks export. Compare to Xero, FreshBooks, MYOB.',
  },
};

const pricingFaqs = [
  {
    question: 'Is there really a free plan?',
    answer:
      'Yes. The free plan includes Gmail sync, AI invoice detection, and CSV export for up to 5 invoices per month. No credit card required, no time limit.',
  },
  {
    question: 'How does InvoiceFlow compare to Xero on price?',
    answer:
      'Xero Starter costs $35/month and limits you to 20 invoices. InvoiceFlow Pro is $19/month with unlimited invoices — that\'s 46% cheaper with no invoice cap.',
  },
  {
    question: 'Can I cancel anytime?',
    answer:
      'Yes. All paid plans are month-to-month with no lock-in contracts. Cancel anytime from your dashboard and you keep access until the end of your billing period.',
  },
  {
    question: 'Do you offer a discount for annual billing?',
    answer:
      'Annual billing is coming soon. Sign up for monthly now and we\'ll automatically apply the annual discount (2 months free) when it launches.',
  },
  {
    question: 'Is InvoiceFlow GST-compliant?',
    answer:
      'Yes. All invoices include proper GST fields, ABN display, and ATO-compliant formatting. We also include a free GST calculator tool.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: pricingFaqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
};

const competitors = [
  { name: 'InvoiceFlow Free', price: '$0', invoices: '5/mo', ai: true, gst: true, gmail: true, export: 'CSV', highlight: false },
  { name: 'InvoiceFlow Pro', price: '$19/mo', invoices: 'Unlimited', ai: true, gst: true, gmail: true, export: 'CSV + QB', highlight: true },
  { name: 'Xero Starter', price: '$35/mo', invoices: '20/mo', ai: false, gst: true, gmail: false, export: 'CSV', highlight: false },
  { name: 'FreshBooks Lite', price: '$24/mo', invoices: '5 clients', ai: false, gst: true, gmail: false, export: 'CSV', highlight: false },
  { name: 'MYOB Essentials', price: '$36/mo', invoices: 'Unlimited', ai: false, gst: true, gmail: false, export: 'CSV', highlight: false },
];

export const dynamic = 'force-dynamic';
export default function PricingPage() {
  return (
    <div className="min-h-screen page-bg">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <header className="border-b border-white/10 backdrop-blur-sm bg-black/30">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-teal-400 to-blue-500" />
            <h1 className="text-2xl font-bold gradient-text heading-font">InvoiceFlow</h1>
          </Link>
          <div className="flex gap-3">
            <Link
              href="/tools"
              className="text-sm text-slate-400 hover:text-white transition-colors px-3 py-2"
            >
              Free Tools
            </Link>
            <Link href="/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link href="/signup">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-20 max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-slate-200 mb-6">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            No credit card required
          </div>
          <h2 className="text-5xl font-bold text-white mb-4 heading-font">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-300">
            Start free. Upgrade when you need unlimited invoices.
          </p>
        </div>

        <PricingCards />

        <div className="mt-8 text-center">
          <p className="text-gray-400 mb-2">
            All plans include Gmail sync, secure OAuth, and CSV export.
          </p>
          <p className="text-sm text-gray-500">
            Secure payment processing by Stripe. Prices in AUD.
          </p>
        </div>

        {/* Competitor Comparison */}
        <section className="mt-24">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-white heading-font mb-3">
              How We Compare
            </h3>
            <p className="text-slate-400 max-w-2xl mx-auto">
              InvoiceFlow is built specifically for Australian freelancers. Here&apos;s how we stack up
              against the big names.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-4 text-white font-semibold">Plan</th>
                  <th className="text-center py-4 px-3 text-white font-semibold">Price</th>
                  <th className="text-center py-4 px-3 text-white font-semibold">Invoices</th>
                  <th className="text-center py-4 px-3 text-white font-semibold">AI Extraction</th>
                  <th className="text-center py-4 px-3 text-white font-semibold">Gmail Sync</th>
                  <th className="text-center py-4 px-3 text-white font-semibold">GST</th>
                  <th className="text-center py-4 px-3 text-white font-semibold">Export</th>
                </tr>
              </thead>
              <tbody>
                {competitors.map((c) => (
                  <tr
                    key={c.name}
                    className={`border-b border-white/5 ${
                      c.highlight
                        ? 'bg-gradient-to-r from-teal-500/10 to-blue-500/10'
                        : ''
                    }`}
                  >
                    <td className="py-4 px-4">
                      <span className={c.highlight ? 'text-teal-300 font-semibold' : 'text-slate-300'}>
                        {c.name}
                      </span>
                      {c.highlight && (
                        <span className="ml-2 text-xs bg-teal-500/20 text-teal-300 px-2 py-0.5 rounded-full">
                          Best Value
                        </span>
                      )}
                    </td>
                    <td className="text-center py-4 px-3 text-white font-medium">{c.price}</td>
                    <td className="text-center py-4 px-3 text-slate-300">{c.invoices}</td>
                    <td className="text-center py-4 px-3">
                      {c.ai ? (
                        <span className="text-emerald-400">Yes</span>
                      ) : (
                        <span className="text-slate-600">No</span>
                      )}
                    </td>
                    <td className="text-center py-4 px-3">
                      {c.gmail ? (
                        <span className="text-emerald-400">Yes</span>
                      ) : (
                        <span className="text-slate-600">No</span>
                      )}
                    </td>
                    <td className="text-center py-4 px-3">
                      {c.gst ? (
                        <span className="text-emerald-400">Yes</span>
                      ) : (
                        <span className="text-slate-600">No</span>
                      )}
                    </td>
                    <td className="text-center py-4 px-3 text-slate-300">{c.export}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-4 text-center">
            Prices as of February 2026. Competitor pricing may vary. All prices in AUD.
          </p>
        </section>

        {/* Trust Signals */}
        <section className="mt-20 grid sm:grid-cols-3 gap-6">
          <div className="glass rounded-2xl p-6 text-center">
            <div className="text-2xl mb-3">&#128274;</div>
            <h4 className="text-white font-semibold mb-2">Bank-Grade Security</h4>
            <p className="text-slate-400 text-sm">
              OAuth 2.0 authentication. Read-only Gmail access. Your data stays encrypted.
            </p>
          </div>
          <div className="glass rounded-2xl p-6 text-center">
            <div className="text-2xl mb-3">&#9889;</div>
            <h4 className="text-white font-semibold mb-2">Set Up in 30 Seconds</h4>
            <p className="text-slate-400 text-sm">
              Connect your Gmail account and InvoiceFlow starts detecting invoices immediately.
            </p>
          </div>
          <div className="glass rounded-2xl p-6 text-center">
            <div className="text-2xl mb-3">&#127462;&#127482;</div>
            <h4 className="text-white font-semibold mb-2">Built for Australia</h4>
            <p className="text-slate-400 text-sm">
              GST-compliant, ABN-ready, ATO-friendly. Plus 100 free business tools.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-24">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-white heading-font mb-3">
              Frequently Asked Questions
            </h3>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {pricingFaqs.map((faq) => (
              <div key={faq.question} className="glass rounded-xl p-6">
                <h4 className="text-white font-semibold mb-2">{faq.question}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="mt-20 glass rounded-3xl p-10 text-center">
          <h3 className="text-4xl font-semibold text-white heading-font mb-4">
            Ready to simplify your invoicing?
          </h3>
          <p className="text-slate-300 max-w-2xl mx-auto mb-8">
            Join Australian freelancers who spend less time on invoices and more time on billable work.
            Start free — no credit card required.
          </p>
          <Link href="/signup">
            <Button size="lg">Start Free — 5 Invoices/Month</Button>
          </Link>
        </section>
      </main>

      <footer className="border-t border-white/10 mt-20 py-8">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} InvoiceFlow. Built in Melbourne.</p>
          <div className="flex gap-6">
            <Link href="/tools" className="hover:text-white transition-colors">
              Free Tools
            </Link>
            <Link href="/compare" className="hover:text-white transition-colors">
              Compare
            </Link>
            <Link href="/blog" className="hover:text-white transition-colors">
              Blog
            </Link>
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
