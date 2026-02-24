import type { Metadata } from 'next';
import Link from 'next/link';
import ProfitMarginCalculator from './ProfitMarginCalculator';

const title = 'Freelance Profit Margin Calculator Australia | Free Tool — InvoiceFlow';
const description =
  'Free profit margin calculator for Australian freelancers. Calculate your real take-home profit after costs, income tax, Medicare levy, and super. Per-project and annual views with 2025-26 ATO tax brackets.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'freelance profit margin calculator',
    'freelancer profit calculator australia',
    'project profit margin calculator',
    'freelance take home calculator',
    'sole trader profit calculator',
    'freelance project costing',
    'contractor profit margin',
    'freelance hourly rate profit',
    'business profit calculator australia',
    'freelance income after tax',
    'project profitability calculator',
    'freelance net income calculator',
  ],
  openGraph: {
    title: 'Freelance Profit Margin Calculator — Free Tool | InvoiceFlow',
    description:
      'Calculate your real take-home profit after costs, tax, Medicare, and super. Built for Australian freelancers and sole traders.',
    url: 'https://www.invoiceflow.au/tools/profit-margin-calculator',
    siteName: 'InvoiceFlow',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Freelance Profit Margin Calculator — Free Tool | InvoiceFlow',
    description:
      'Calculate your real freelance profit after costs, tax, and super. Free Australian calculator.',
  },
  alternates: {
    canonical: 'https://www.invoiceflow.au/tools/profit-margin-calculator',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Freelance Profit Margin Calculator',
  description:
    'Calculate real take-home profit for Australian freelancers after costs, income tax, Medicare levy, and superannuation.',
  url: 'https://www.invoiceflow.au/tools/profit-margin-calculator',
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

export default function ProfitMarginCalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
              Freelance Profit Margin{' '}
              <span className="gradient-text">Calculator</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Find out what you actually take home after costs, income tax, Medicare levy, and
              superannuation. Analyse projects or your annual freelance income — built for Australian
              sole traders and contractors.
            </p>
          </div>

          {/* Calculator */}
          <ProfitMarginCalculator />

          {/* SEO Content Sections */}
          <section className="mt-16 space-y-12">
            {/* Understanding Profit Margins */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Understanding Freelance Profit Margins
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Many freelancers confuse <strong className="text-white">revenue</strong> with{' '}
                  <strong className="text-white">profit</strong>. If you invoice a client $5,000 for a
                  project, that&apos;s not $5,000 in your pocket. After direct costs, allocated
                  overheads, tax, Medicare, and super, your actual take-home could be significantly
                  less.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Gross Profit Margin</h4>
                    <p className="text-sm">
                      Revenue minus all direct and allocated costs. Tells you how efficiently you
                      deliver work. Aim for <strong className="text-white">50%+</strong> on
                      service-based freelance work.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Net Profit Margin</h4>
                    <p className="text-sm">
                      What you actually keep after tax, Medicare, and super. The{' '}
                      <strong className="text-white">real measure</strong> of your freelance
                      profitability. Healthy range: 25-40%.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Healthy Margin Benchmarks */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Profit Margin Benchmarks by Industry
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  What constitutes a &quot;good&quot; profit margin depends on your industry. Service-based
                  freelancers typically have higher margins than those with material costs.
                </p>
                <div className="overflow-x-auto mt-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-2 text-slate-400 font-medium">Industry</th>
                        <th className="text-right py-2 text-slate-400 font-medium">Typical Gross</th>
                        <th className="text-right py-2 text-slate-400 font-medium">Typical Net</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      <tr>
                        <td className="py-2 text-white">Software / Web Dev</td>
                        <td className="py-2 text-right text-emerald-400">70-85%</td>
                        <td className="py-2 text-right text-teal-400">35-50%</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-white">Consulting</td>
                        <td className="py-2 text-right text-emerald-400">65-80%</td>
                        <td className="py-2 text-right text-teal-400">30-45%</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-white">Graphic / UI Design</td>
                        <td className="py-2 text-right text-emerald-400">60-75%</td>
                        <td className="py-2 text-right text-teal-400">30-40%</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-white">Copywriting / Content</td>
                        <td className="py-2 text-right text-emerald-400">65-80%</td>
                        <td className="py-2 text-right text-teal-400">30-45%</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-white">Photography / Video</td>
                        <td className="py-2 text-right text-amber-400">40-60%</td>
                        <td className="py-2 text-right text-amber-400">20-35%</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-white">Trades (Electrician, Plumber)</td>
                        <td className="py-2 text-right text-amber-400">35-55%</td>
                        <td className="py-2 text-right text-amber-400">15-30%</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-white">Catering / Events</td>
                        <td className="py-2 text-right text-amber-400">30-45%</td>
                        <td className="py-2 text-right text-amber-400">10-25%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* How to Improve Margins */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                5 Ways to Improve Your Freelance Profit Margins
              </h2>
              <div className="space-y-4 text-slate-300">
                <ol className="space-y-4 list-decimal list-inside">
                  <li>
                    <strong className="text-white">Track every cost ruthlessly.</strong> Most
                    freelancers underestimate their true costs. Include software subscriptions,
                    internet, home office, insurance, professional development, and the hidden cost of
                    unbillable hours (admin, marketing, invoicing).
                  </li>
                  <li>
                    <strong className="text-white">Increase billable hours ratio.</strong> If you work
                    40 hours but only bill 25, your effective rate is 37.5% lower than your hourly
                    rate. Automate admin, batch similar tasks, and streamline your invoicing.
                  </li>
                  <li>
                    <strong className="text-white">Raise prices strategically.</strong> A 10% price
                    increase on a 50% margin project increases your profit by 20%. Price based on value
                    delivered, not hours spent.
                  </li>
                  <li>
                    <strong className="text-white">Productise your services.</strong> Create packages
                    and fixed-price offerings. This caps your time investment and lets you earn more
                    as you get faster.
                  </li>
                  <li>
                    <strong className="text-white">Claim all legitimate deductions.</strong> Home
                    office, equipment depreciation, professional insurance, training, travel, and
                    software are all deductible. Every dollar deducted reduces your tax bill.
                  </li>
                </ol>
              </div>
            </div>

            {/* Tax Obligations */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Australian Freelancer Tax Obligations That Affect Margins
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  As an Australian sole trader, your net profit is reduced by several mandatory
                  obligations that this calculator accounts for:
                </p>
                <div className="space-y-3 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-1">Income Tax (16-45%)</h4>
                    <p className="text-sm">
                      Progressive rates on your taxable income after deductions. The tax-free
                      threshold is $18,200. Using 2025-26 ATO brackets.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-1">Medicare Levy (2%)</h4>
                    <p className="text-sm">
                      Flat 2% on taxable income. Plus a surcharge of 1-1.5% if you earn above
                      $97,000 and don&apos;t have private health insurance.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-1">Superannuation (11.5%)</h4>
                    <p className="text-sm">
                      While not mandatory for sole traders, contributing 11.5% of net income is
                      strongly recommended (and tax-deductible up to $30,000/year).
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-1">GST (10%)</h4>
                    <p className="text-sm">
                      If registered for GST (mandatory above $75K turnover), you collect and remit
                      10% GST. This doesn&apos;t directly affect profit (it&apos;s pass-through) but
                      affects cash flow.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-16 text-center glass rounded-2xl p-10">
            <h3 className="text-3xl font-bold text-white heading-font mb-4">
              Track your <span className="gradient-text">real profits</span> automatically
            </h3>
            <p className="text-slate-300 max-w-xl mx-auto mb-6">
              Stop guessing your margins. InvoiceFlow tracks your invoices, expenses, and payments
              so you always know your true profitability. Automated GST calculations and BAS prep
              included.
            </p>
            <Link
              href="/signup"
              className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold hover:opacity-90 transition-opacity"
            >
              Start Free — 5 Invoices/Month
            </Link>
          </section>
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
