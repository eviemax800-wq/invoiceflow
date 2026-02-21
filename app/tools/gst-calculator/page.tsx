import type { Metadata } from 'next';
import Link from 'next/link';
import GSTCalculator from './GSTCalculator';

export const metadata: Metadata = {
  title: 'Free GST Calculator Australia — Add or Remove GST Instantly | InvoiceFlow',
  description:
    'Free Australian GST calculator. Add 10% GST, remove GST from totals, or calculate the GST component of any amount. Perfect for freelancers, contractors, and small businesses.',
  keywords: [
    'GST calculator',
    'GST calculator Australia',
    'Australian GST calculator',
    'add GST',
    'remove GST',
    'calculate GST',
    'GST 10%',
    'BAS GST',
    'freelancer GST',
    'ABN GST',
  ],
  openGraph: {
    title: 'Free GST Calculator Australia | InvoiceFlow',
    description:
      'Add or remove 10% GST instantly. Free tool for Australian freelancers and small businesses.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free GST Calculator Australia | InvoiceFlow',
    description:
      'Add or remove 10% GST instantly. Free tool for Australian freelancers and small businesses.',
  },
  alternates: {
    canonical: '/tools/gst-calculator',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'InvoiceFlow GST Calculator',
  description: 'Free Australian GST calculator for freelancers and small businesses',
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'Any',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'AUD' },
  creator: {
    '@type': 'Organization',
    name: 'InvoiceFlow',
    url: 'https://invoiceflow.app',
  },
};

export default function GSTCalculatorPage() {
  return (
    <div className="min-h-screen page-bg">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
            <Link
              href="/pricing"
              className="text-sm text-slate-400 hover:text-white transition-colors px-3 py-2"
            >
              Pricing
            </Link>
            <Link
              href="/signup"
              className="text-sm font-medium px-4 py-2 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white hover:opacity-90 transition-opacity"
            >
              Get Started Free
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-slate-200 mb-6">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            100% free — no signup required
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white heading-font mb-4">
            Australian <span className="gradient-text">GST Calculator</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Add or remove 10% GST from any amount instantly. Built for Australian freelancers,
            contractors, and small businesses.
          </p>
        </div>

        <GSTCalculator />

        {/* GST Info Section - SEO content */}
        <section className="mt-16 space-y-12">
          <div className="glass rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white heading-font mb-4">
              How GST Works in Australia
            </h3>
            <div className="space-y-4 text-slate-300">
              <p>
                Goods and Services Tax (GST) is a broad-based tax of <strong className="text-white">10%</strong> on
                most goods, services, and other items sold or consumed in Australia. If your business
                has a GST turnover of $75,000 or more ($150,000 for non-profit organisations), you
                must register for GST.
              </p>
              <p>
                As a registered business, you charge GST on your sales and claim credits for the GST
                included in the price of goods and services you purchase for your business. You report
                and pay GST amounts to the Australian Taxation Office (ATO) through your Business
                Activity Statement (BAS).
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass rounded-2xl p-6">
              <h4 className="text-lg font-bold text-white heading-font mb-3">
                GST Formula — Adding GST
              </h4>
              <div className="space-y-2 text-slate-300 text-sm">
                <p>
                  <span className="text-teal-400 font-mono">GST Amount</span> = Price ex-GST × 0.10
                </p>
                <p>
                  <span className="text-teal-400 font-mono">Price inc-GST</span> = Price ex-GST × 1.10
                </p>
                <p className="text-slate-400 mt-3">
                  Example: $1,000 ex-GST → $100 GST → $1,100 inc-GST
                </p>
              </div>
            </div>
            <div className="glass rounded-2xl p-6">
              <h4 className="text-lg font-bold text-white heading-font mb-3">
                GST Formula — Removing GST
              </h4>
              <div className="space-y-2 text-slate-300 text-sm">
                <p>
                  <span className="text-teal-400 font-mono">Price ex-GST</span> = Price inc-GST ÷ 1.10
                </p>
                <p>
                  <span className="text-teal-400 font-mono">GST Amount</span> = Price inc-GST ÷ 11
                </p>
                <p className="text-slate-400 mt-3">
                  Example: $1,100 inc-GST → $100 GST → $1,000 ex-GST
                </p>
              </div>
            </div>
          </div>

          <div className="glass rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white heading-font mb-4">
              Do Freelancers Need to Charge GST?
            </h3>
            <div className="space-y-4 text-slate-300">
              <p>
                If your annual GST turnover is <strong className="text-white">$75,000 or more</strong>,
                you must register for GST and charge it on your invoices. Below that threshold,
                registration is optional — but you can still register voluntarily to claim GST credits
                on business purchases.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mt-4">
                <div className="bg-white/5 rounded-xl p-4">
                  <div className="text-teal-400 font-semibold mb-2">Must register if:</div>
                  <ul className="space-y-1 text-sm">
                    <li>• Annual turnover ≥ $75,000</li>
                    <li>• Non-profit turnover ≥ $150,000</li>
                    <li>• Taxi/rideshare driver (any turnover)</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <div className="text-cyan-400 font-semibold mb-2">Optional registration:</div>
                  <ul className="space-y-1 text-sm">
                    <li>• Annual turnover &lt; $75,000</li>
                    <li>• Can claim GST credits on purchases</li>
                    <li>• Makes business appear more established</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="glass rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white heading-font mb-4">
              BAS Reporting Dates 2026
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-slate-300">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 text-white font-semibold">Quarter</th>
                    <th className="text-left py-3 text-white font-semibold">Period</th>
                    <th className="text-left py-3 text-white font-semibold">Due Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/5">
                    <td className="py-3">Q3 FY2025-26</td>
                    <td className="py-3">Jan – Mar 2026</td>
                    <td className="py-3">28 April 2026</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3">Q4 FY2025-26</td>
                    <td className="py-3">Apr – Jun 2026</td>
                    <td className="py-3">28 July 2026</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3">Q1 FY2026-27</td>
                    <td className="py-3">Jul – Sep 2026</td>
                    <td className="py-3">28 October 2026</td>
                  </tr>
                  <tr>
                    <td className="py-3">Q2 FY2026-27</td>
                    <td className="py-3">Oct – Dec 2026</td>
                    <td className="py-3">28 February 2027</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-16 text-center glass rounded-2xl p-10">
          <h3 className="text-3xl font-bold text-white heading-font mb-4">
            Automate Your <span className="gradient-text">Invoicing</span>
          </h3>
          <p className="text-slate-300 max-w-xl mx-auto mb-6">
            Stop manually calculating GST on every invoice. InvoiceFlow automatically adds GST,
            generates tax-compliant invoices, and tracks everything for BAS time.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/signup"
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold hover:opacity-90 transition-opacity"
            >
              Start Free — 5 Invoices/Month
            </Link>
            <Link
              href="/pricing"
              className="px-6 py-3 rounded-lg glass text-white font-medium hover:bg-white/10 transition-colors"
            >
              See Pricing
            </Link>
          </div>
          <p className="text-sm text-slate-500 mt-4">
            No credit card required. Free tier includes GST-compliant invoices.
          </p>
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
