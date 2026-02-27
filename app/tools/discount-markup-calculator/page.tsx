import type { Metadata } from 'next';
import Link from 'next/link';
import DiscountMarkupCalculator from './DiscountMarkupCalculator';
import RelatedTools from '../components/RelatedTools';
import EmailCapture from '../components/EmailCapture';
import BreadcrumbSchema from '../components/BreadcrumbSchema';
import FAQSchema from '../components/FAQSchema';

const title = 'Discount & Markup Calculator Australia | Free Tool — InvoiceFlow';
const description =
  'Free discount and markup calculator for Australian businesses. Calculate sale prices, markups, profit margins, and convert between margin and markup. Includes GST, batch discounts, and a margin-to-markup reference table.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'discount calculator',
    'markup calculator australia',
    'profit margin markup calculator',
    'percentage discount calculator',
    'price markup calculator',
    'margin vs markup',
    'gst markup calculator',
    'freelance pricing calculator',
    'business markup calculator',
    'sale price calculator',
    'batch discount calculator',
    'margin to markup converter',
  ],
  openGraph: {
    title: 'Discount & Markup Calculator — Free Tool | InvoiceFlow',
    description:
      'Calculate discounts, markups, and convert between margin and markup. Includes GST and batch mode.',
    url: 'https://www.invoiceflow.au/tools/discount-markup-calculator',
    siteName: 'InvoiceFlow',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Discount & Markup Calculator — Free Tool | InvoiceFlow',
    description:
      'Calculate discounts, markups, and profit margins. Free Australian calculator with GST support.',
  },
  alternates: {
    canonical: 'https://www.invoiceflow.au/tools/discount-markup-calculator',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Discount & Markup Calculator',
  description:
    'Calculate discounts, markups, profit margins, and convert between margin and markup for Australian businesses.',
  url: 'https://www.invoiceflow.au/tools/discount-markup-calculator',
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'Any',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'AUD',
  },
  creator: {
    '@type': 'Organization',
    name: 'InvoiceFlow',
    url: 'https://www.invoiceflow.au',
  },
};

const faqs = [
  {
    question: "Is this tool free to use?",
    answer: "Yes, this tool is completely free with no registration needed. All calculations are performed privately in your browser."
  },
  {
    question: "How accurate are the calculations?",
    answer: "Calculations use current Australian tax rates (2025-26 ATO brackets), industry benchmarks, and standard business formulas. Results are estimates to help you make informed pricing decisions."
  },
  {
    question: "Do I need an ABN to use this tool?",
    answer: "No ABN is required. This tool works for anyone planning freelance pricing — whether you're already registered or exploring freelancing as a career option."
  }
];

export default function DiscountMarkupCalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FAQSchema faqs={faqs} />
      <div className="page-bg min-h-screen">
        {/* Header */}
        <header className="border-b border-white/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-teal-400 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">IF</span>
              </div>
              <span className="text-white font-semibold text-lg heading-font">InvoiceFlow</span>
            </Link>
            <nav className="flex items-center gap-6">
              <Link
                href="/tools"
                className="text-slate-400 hover:text-white text-sm transition-colors"
              >
                Free Tools
              </Link>
              <Link
                href="/pricing"
                className="text-slate-400 hover:text-white text-sm transition-colors"
              >
                Pricing
              </Link>
              <Link
                href="/signup"
                className="px-4 py-2 bg-gradient-to-r from-teal-500 to-blue-500 text-white text-sm font-medium rounded-lg hover:from-teal-400 hover:to-blue-400 transition-all"
              >
                Get Started
              </Link>
            </nav>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-teal-500/10 border border-teal-500/20 rounded-full mb-6">
              <div className="w-2 h-2 bg-teal-400 rounded-full" />
              <span className="text-teal-400 text-sm font-medium">100% Free</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white heading-font mb-4">
              Discount & Markup{' '}
              <span className="gradient-text">Calculator</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Calculate discounts, markups, and profit margins in one place. Convert between margin
              and markup, handle GST, and batch-calculate discounts across multiple items. Built for
              Australian freelancers and businesses.
            </p>
          </div>

          {/* Calculator */}
          <DiscountMarkupCalculator />

          {/* SEO Content Sections */}
          <section className="mt-16 space-y-12">
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Markup vs Margin — What&apos;s the Difference?
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  <strong className="text-white">Markup</strong> and{' '}
                  <strong className="text-white">margin</strong> are the two most confused terms in
                  business pricing. They sound similar but are calculated differently, and confusing
                  them can cost you money.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Markup</h4>
                    <p className="text-sm mb-2">
                      The percentage added <strong className="text-white">to your cost</strong> to
                      arrive at the selling price.
                    </p>
                    <p className="text-xs font-mono text-teal-400">
                      Markup = ((Selling Price - Cost) / Cost) x 100
                    </p>
                    <p className="text-xs text-slate-400 mt-2">
                      Example: $500 cost + 50% markup = $750 selling price
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Profit Margin</h4>
                    <p className="text-sm mb-2">
                      The percentage of your <strong className="text-white">selling price</strong>{' '}
                      that is profit.
                    </p>
                    <p className="text-xs font-mono text-teal-400">
                      Margin = ((Selling Price - Cost) / Selling Price) x 100
                    </p>
                    <p className="text-xs text-slate-400 mt-2">
                      Example: $750 selling price with $500 cost = 33.3% margin
                    </p>
                  </div>
                </div>
                <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 mt-4">
                  <p className="text-sm">
                    <strong className="text-amber-400">Common mistake:</strong> A 50% markup does NOT
                    equal a 50% profit margin. A 50% markup actually gives you a 33.3% margin. To
                    achieve a 50% margin, you need a 100% markup (double your cost).
                  </p>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                How to Price Your Freelance Services
              </h2>
              <div className="space-y-4 text-slate-300">
                <ol className="space-y-4 list-decimal list-inside">
                  <li>
                    <strong className="text-white">Calculate your true cost.</strong> Include your
                    time at your hourly rate, any software or tools used, subcontractor costs, and a
                    share of your annual overheads allocated to the project.
                  </li>
                  <li>
                    <strong className="text-white">Add your target markup.</strong> Service-based
                    freelancers should target at least a 50% markup (33% margin). Higher for
                    specialised skills where you have pricing power.
                  </li>
                  <li>
                    <strong className="text-white">Factor in GST.</strong> If you&apos;re GST
                    registered (required above $75K turnover), add 10% GST on top. The GST is
                    pass-through — your profit doesn&apos;t change, but clients need the inc-GST
                    price.
                  </li>
                  <li>
                    <strong className="text-white">Offer strategic discounts.</strong> Early-payment
                    discounts (2-5%) encourage faster payment. Volume discounts (10-20%) incentivise
                    larger engagements. Never discount without a strategic reason.
                  </li>
                </ol>
              </div>
            </div>

            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Industry Standard Markups in Australia
              </h2>
              <div className="space-y-4 text-slate-300">
                <div className="overflow-x-auto mt-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-2 text-slate-400 font-medium">Industry</th>
                        <th className="text-right py-2 text-slate-400 font-medium">Typical Markup</th>
                        <th className="text-right py-2 text-slate-400 font-medium">Equiv. Margin</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      <tr>
                        <td className="py-2 text-white">Consulting / Advisory</td>
                        <td className="py-2 text-right text-teal-400">100-300%</td>
                        <td className="py-2 text-right text-slate-400">50-75%</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-white">Software Development</td>
                        <td className="py-2 text-right text-teal-400">100-200%</td>
                        <td className="py-2 text-right text-slate-400">50-67%</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-white">Design & Creative</td>
                        <td className="py-2 text-right text-teal-400">80-150%</td>
                        <td className="py-2 text-right text-slate-400">44-60%</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-white">Marketing Services</td>
                        <td className="py-2 text-right text-teal-400">50-100%</td>
                        <td className="py-2 text-right text-slate-400">33-50%</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-white">Retail / E-commerce</td>
                        <td className="py-2 text-right text-amber-400">50-100%</td>
                        <td className="py-2 text-right text-slate-400">33-50%</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-white">Construction / Trades</td>
                        <td className="py-2 text-right text-amber-400">15-30%</td>
                        <td className="py-2 text-right text-slate-400">13-23%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-16 text-center glass rounded-2xl p-10">
            <h3 className="text-3xl font-bold text-white heading-font mb-4">
              Price your work <span className="gradient-text">with confidence</span>
            </h3>
            <p className="text-slate-300 max-w-xl mx-auto mb-6">
              Stop undercharging. InvoiceFlow helps you create professional invoices with the right
              pricing, track margins across all your projects, and automate GST calculations. See
              your true profitability in real time.
            </p>
            <Link
              href="/signup"
              className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold hover:opacity-90 transition-opacity"
            >
              Start Free — 5 Invoices/Month
            </Link>
          </section>
        
        <RelatedTools currentSlug="discount-markup-calculator" category="Pricing & Rates" />
      </main>

        <footer className="border-t border-white/10 mt-20 py-8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
            <p>&copy; {new Date().getFullYear()} InvoiceFlow. Built in Melbourne.</p>
            <div className="flex gap-6">
              <Link href="/tools" className="hover:text-white transition-colors">
                Free Tools
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
    </>
  );
}
