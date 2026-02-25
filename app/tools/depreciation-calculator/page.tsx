import type { Metadata } from 'next';
import Link from 'next/link';
import DepreciationCalculator from './DepreciationCalculator';

const title = 'Depreciation Calculator Australia | Free ATO Tool — InvoiceFlow';
const description =
  'Free depreciation calculator for Australian freelancers and sole traders. Calculate instant asset write-off, diminishing value, and prime cost depreciation using ATO rules. Year-by-year schedules and tax savings.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'depreciation calculator australia',
    'ato depreciation',
    'instant asset write off calculator',
    'diminishing value method calculator',
    'prime cost depreciation',
    'business asset depreciation ato',
    'freelancer depreciation',
    'sole trader asset write off',
    'equipment depreciation calculator',
    'small business depreciation',
  ],
  openGraph: {
    title: 'Depreciation Calculator Australia — Free ATO Tool | InvoiceFlow',
    description:
      'Calculate ATO depreciation on business assets. Instant write-off, diminishing value, and prime cost methods.',
    url: 'https://www.invoiceflow.au/tools/depreciation-calculator',
    siteName: 'InvoiceFlow',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Depreciation Calculator Australia — Free ATO Tool | InvoiceFlow',
    description:
      'Calculate ATO depreciation on business assets. Free Australian tool for freelancers.',
  },
  alternates: {
    canonical: 'https://www.invoiceflow.au/tools/depreciation-calculator',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Depreciation Calculator Australia',
  description:
    'Calculate ATO depreciation on business assets using instant asset write-off, diminishing value, and prime cost methods. Year-by-year schedules and tax savings for Australian freelancers.',
  url: 'https://www.invoiceflow.au/tools/depreciation-calculator',
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

export default function DepreciationCalculatorPage() {
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
              Depreciation{' '}
              <span className="gradient-text">Calculator</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Calculate ATO depreciation on your business assets using the instant asset write-off,
              diminishing value, or prime cost method. Get year-by-year schedules, method comparisons,
              and real tax savings. Built for Australian freelancers, contractors, and sole traders.
            </p>
          </div>

          {/* Calculator */}
          <DepreciationCalculator />

          {/* SEO Content Sections */}
          <section className="mt-16 space-y-12">
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                ATO Depreciation Methods Explained
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  The Australian Taxation Office allows businesses to claim deductions for the decline
                  in value of depreciating assets. There are{' '}
                  <strong className="text-white">three main methods</strong> to calculate depreciation,
                  each with different advantages depending on your situation.
                </p>
                <div className="grid gap-4 mt-4">
                  <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4">
                    <h4 className="text-emerald-400 font-semibold mb-2">Instant Asset Write-Off</h4>
                    <p className="text-sm text-slate-400">
                      Eligible small businesses can immediately deduct the full cost of assets costing
                      less than the threshold in the income year the asset is first used or installed
                      ready for use. For the 2024-25 financial year, the threshold is{' '}
                      <strong className="text-white">$20,000</strong> (ex GST) for businesses with
                      aggregated turnover under $10 million.
                    </p>
                  </div>
                  <div className="bg-teal-500/10 border border-teal-500/20 rounded-xl p-4">
                    <h4 className="text-teal-400 font-semibold mb-2">Diminishing Value Method</h4>
                    <p className="text-sm text-slate-400">
                      This method assumes the asset declines in value more in the earlier years of its
                      effective life. The formula is:{' '}
                      <em className="text-white">
                        Base Value &times; (Days Held &divide; 365) &times; (200% &divide; Effective Life)
                      </em>
                      . This front-loads your deductions, giving you larger claims in the first few years
                      and smaller claims later. Best for assets that lose value quickly like technology.
                    </p>
                  </div>
                  <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4">
                    <h4 className="text-blue-400 font-semibold mb-2">Prime Cost Method</h4>
                    <p className="text-sm text-slate-400">
                      This method spreads the deduction equally across the asset&apos;s effective life.
                      The formula is:{' '}
                      <em className="text-white">
                        Cost &times; (Days Held &divide; 365) &times; (100% &divide; Effective Life)
                      </em>
                      . Each year you claim the same amount (pro-rated for partial years). Best for
                      assets with a long useful life like furniture and fitouts.
                    </p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 mt-4">
                  <h4 className="text-white font-semibold mb-2">Which Method Should You Choose?</h4>
                  <p className="text-sm text-slate-400">
                    Once you choose a method for an asset, you generally can&apos;t switch. The
                    diminishing value method gives you bigger deductions early on (great for cash flow),
                    while the prime cost method provides consistent, predictable deductions. If the
                    asset costs less than $20,000 and you&apos;re eligible for the instant asset
                    write-off, that&apos;s almost always the best option as you get the full deduction
                    immediately.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Instant Asset Write-Off for Small Business
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  The instant asset write-off is one of the most valuable tax concessions available to
                  Australian small businesses. Here&apos;s what you need to know for the{' '}
                  <strong className="text-white">2024-25 financial year</strong>:
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Eligibility</h4>
                    <ul className="text-sm space-y-2 text-slate-400">
                      <li>Aggregated turnover under <strong className="text-white">$10 million</strong></li>
                      <li>Asset costs less than <strong className="text-white">$20,000</strong> (ex GST if registered)</li>
                      <li>Asset is first used or installed ready for use in the relevant FY</li>
                      <li>Available to sole traders, partnerships, companies, and trusts</li>
                    </ul>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">How It Works</h4>
                    <ul className="text-sm space-y-2 text-slate-400">
                      <li>Deduct the <strong className="text-white">full business-use portion</strong> in the year of purchase</li>
                      <li>No need to calculate depreciation over multiple years</li>
                      <li>Each asset is assessed individually (not combined)</li>
                      <li>Can claim for multiple assets in the same year</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 mt-4">
                  <h4 className="text-amber-400 font-semibold mb-2">Important Note on Thresholds</h4>
                  <p className="text-sm text-slate-400">
                    The instant asset write-off threshold has changed multiple times. The $20,000
                    threshold applies for the 2024-25 income year (1 July 2024 to 30 June 2025).
                    Previously it was $150,000 during COVID stimulus measures. Always check the ATO
                    website for the current threshold as it may change with each Federal Budget.
                    Assets costing $20,000 or more must be depreciated using the diminishing value or
                    prime cost method.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Common Depreciable Assets for Freelancers
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  The ATO publishes effective life determinations for most business assets. Here are
                  the most common assets claimed by Australian freelancers and their standard
                  effective lives:
                </p>
                <div className="overflow-x-auto mt-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left text-white py-3 pr-4 font-semibold">Asset</th>
                        <th className="text-center text-white py-3 px-4 font-semibold">Effective Life</th>
                        <th className="text-center text-white py-3 px-4 font-semibold">DV Rate</th>
                        <th className="text-center text-white py-3 font-semibold">PC Rate</th>
                      </tr>
                    </thead>
                    <tbody className="text-slate-300">
                      <tr className="border-b border-white/5">
                        <td className="py-3 pr-4">Laptop / Notebook</td>
                        <td className="py-3 px-4 text-center text-teal-400 font-medium">4 years</td>
                        <td className="py-3 px-4 text-center">50%</td>
                        <td className="py-3 text-center">25%</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="py-3 pr-4">Desktop Computer</td>
                        <td className="py-3 px-4 text-center text-teal-400 font-medium">4 years</td>
                        <td className="py-3 px-4 text-center">50%</td>
                        <td className="py-3 text-center">25%</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="py-3 pr-4">Mobile Phone</td>
                        <td className="py-3 px-4 text-center text-teal-400 font-medium">3 years</td>
                        <td className="py-3 px-4 text-center">66.67%</td>
                        <td className="py-3 text-center">33.33%</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="py-3 pr-4">Camera (Digital)</td>
                        <td className="py-3 px-4 text-center text-teal-400 font-medium">6 years</td>
                        <td className="py-3 px-4 text-center">33.33%</td>
                        <td className="py-3 text-center">16.67%</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="py-3 pr-4">Office Desk / Furniture</td>
                        <td className="py-3 px-4 text-center text-teal-400 font-medium">10 years</td>
                        <td className="py-3 px-4 text-center">20%</td>
                        <td className="py-3 text-center">10%</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="py-3 pr-4">Monitor / Display</td>
                        <td className="py-3 px-4 text-center text-teal-400 font-medium">4 years</td>
                        <td className="py-3 px-4 text-center">50%</td>
                        <td className="py-3 text-center">25%</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="py-3 pr-4">Software (General)</td>
                        <td className="py-3 px-4 text-center text-teal-400 font-medium">2.5 years</td>
                        <td className="py-3 px-4 text-center">80%</td>
                        <td className="py-3 text-center">40%</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="py-3 pr-4">Motor Vehicle</td>
                        <td className="py-3 px-4 text-center text-teal-400 font-medium">8 years</td>
                        <td className="py-3 px-4 text-center">25%</td>
                        <td className="py-3 text-center">12.5%</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4">Printer / Scanner</td>
                        <td className="py-3 px-4 text-center text-teal-400 font-medium">5 years</td>
                        <td className="py-3 px-4 text-center">40%</td>
                        <td className="py-3 text-center">20%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm mt-2">
                  <strong className="text-white">DV Rate</strong> = 200% &divide; Effective Life.{' '}
                  <strong className="text-white">PC Rate</strong> = 100% &divide; Effective Life.
                  You can choose to self-assess a shorter effective life if you can demonstrate the
                  asset will be used for a shorter period in your specific circumstances.
                </p>
              </div>
            </div>

            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Tips to Maximise Your Depreciation Claims
              </h2>
              <div className="space-y-4 text-slate-300">
                <ol className="space-y-4 list-decimal list-inside">
                  <li>
                    <strong className="text-white">Time your purchases strategically.</strong> Buy
                    assets just before 30 June to claim depreciation for the full financial year
                    (even partial-year claims can be significant). Conversely, buying on 1 July means
                    waiting a full year for your first claim.
                  </li>
                  <li>
                    <strong className="text-white">Keep assets under the write-off threshold.</strong>{' '}
                    If you&apos;re buying a $22,000 setup, consider purchasing components separately
                    (e.g. laptop, monitor, accessories as individual items) if they genuinely function
                    independently. Each asset under $20,000 qualifies for instant write-off.
                  </li>
                  <li>
                    <strong className="text-white">Track business-use percentage accurately.</strong>{' '}
                    If you use an asset for both business and personal purposes, you can only claim the
                    business-use portion. Keep a logbook or diary for the first 4 weeks to establish
                    your business-use percentage, then review it annually.
                  </li>
                  <li>
                    <strong className="text-white">Choose diminishing value for tech assets.</strong>{' '}
                    Technology depreciates rapidly in practice. The diminishing value method matches
                    real-world value decline and front-loads your tax deductions, improving cash flow
                    in the years you need it most.
                  </li>
                  <li>
                    <strong className="text-white">Don&apos;t forget low-value pools.</strong> Assets
                    costing less than $1,000 (or those that have depreciated below $1,000) can be
                    allocated to a low-value pool and depreciated at a flat rate of 37.5% (18.75% in
                    the first year). This simplifies record-keeping for small items.
                  </li>
                  <li>
                    <strong className="text-white">Keep purchase records forever.</strong> The ATO
                    can audit depreciation claims for up to 4 years (or longer in some cases). Keep
                    receipts, invoices, and proof of business use for every depreciating asset. Digital
                    copies stored in your accounting software are perfectly acceptable.
                  </li>
                </ol>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-16 text-center glass rounded-2xl p-10">
            <h3 className="text-3xl font-bold text-white heading-font mb-4">
              Track every <span className="gradient-text">business asset</span> effortlessly
            </h3>
            <p className="text-slate-300 max-w-xl mx-auto mb-6">
              InvoiceFlow automatically tracks your business expenses, calculates depreciation,
              and prepares everything for tax time. GST, BAS, and depreciation schedules all in
              one place. Built for Australian freelancers and sole traders.
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
