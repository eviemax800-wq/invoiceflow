import type { Metadata } from 'next';
import Link from 'next/link';
import BusinessValuationCalculator from './BusinessValuationCalculator';
import RelatedTools from '../components/RelatedTools';
import EmailCapture from '../components/EmailCapture';

const title = 'Freelance Business Valuation Calculator Australia | How Much Is My Business Worth — InvoiceFlow';
const description =
  'Free business valuation calculator for Australian freelancers and small businesses. Estimate your business value using SDE multiples, revenue multiples, and asset-based methods. Understand what drives value and how to increase it.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'freelance business valuation calculator',
    'how much is my freelance business worth',
    'small business valuation calculator australia',
    'value of freelance business',
    'business valuation calculator',
    'sole trader business value',
    'freelance business worth calculator',
    'sell freelance business australia',
    'SDE multiple calculator',
    'small business valuation methods',
  ],
  openGraph: {
    title: 'Freelance Business Valuation Calculator — Free Tool | InvoiceFlow',
    description:
      'How much is your freelance business worth? Free Australian business valuation calculator using SDE multiples, revenue multiples, and more.',
    url: 'https://www.invoiceflow.au/tools/business-valuation-calculator',
    siteName: 'InvoiceFlow',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Freelance Business Valuation Calculator — Free Tool | InvoiceFlow',
    description:
      'Estimate the value of your freelance or small business. Free Australian calculator with multiple valuation methods.',
  },
  alternates: {
    canonical: 'https://www.invoiceflow.au/tools/business-valuation-calculator',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Freelance Business Valuation Calculator Australia',
  description:
    'Estimate the value of your freelance or small business using SDE multiples, revenue multiples, and asset-based valuation methods. Free for Australian freelancers.',
  url: 'https://www.invoiceflow.au/tools/business-valuation-calculator',
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

export default function BusinessValuationCalculatorPage() {
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
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-500/10 border border-amber-500/20 rounded-full mb-6">
              <div className="w-2 h-2 bg-amber-400 rounded-full" />
              <span className="text-amber-400 text-sm font-medium">100% Free</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white heading-font mb-4">
              Business Valuation{' '}
              <span className="gradient-text">Calculator</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              How much is your freelance or small business worth? Enter your financials and get an
              estimated valuation range using three proven methods — SDE multiples, revenue multiples,
              and asset-based analysis. Built for Australian freelancers and sole traders.
            </p>
          </div>

          {/* Calculator */}
          <BusinessValuationCalculator />

          {/* SEO Content Sections */}
          <section className="mt-16 space-y-12">
            {/* How to Value a Freelance Business */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                How to Value a Freelance Business in Australia
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Valuing a freelance or service-based business is different from valuing a product company.
                  There&apos;s no warehouse of inventory or patented technology. The value is in your client
                  relationships, recurring revenue, systems, reputation, and the cash flow the business generates.
                </p>
                <p>
                  There are three common methods used to value small service businesses in Australia:
                </p>
                <div className="grid sm:grid-cols-3 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">SDE Multiple Method</h4>
                    <p className="text-sm">
                      The most common approach for owner-operated businesses. Seller&apos;s Discretionary
                      Earnings (SDE) represents the true economic benefit to the owner — your profit plus
                      your salary plus any personal expenses run through the business. This figure is then
                      multiplied by a factor (typically 1.5x to 3.5x for service businesses) based on
                      risk, growth, and transferability.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Revenue Multiple Method</h4>
                    <p className="text-sm">
                      Values the business as a multiple of annual revenue, typically 0.5x to 1.5x for
                      freelance and service businesses. This method is simpler but less precise because
                      it doesn&apos;t account for profitability. A business earning $200K with 60% margins
                      is worth far more than one earning $200K with 20% margins.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Asset-Based Method</h4>
                    <p className="text-sm">
                      Calculates value based on what the business owns — equipment, intellectual property,
                      client contracts, and brand value — minus liabilities. For service businesses this
                      often produces the lowest valuation because the main &ldquo;asset&rdquo; is the
                      owner&apos;s expertise.
                    </p>
                  </div>
                </div>
                <p className="text-sm mt-4">
                  In practice, buyers and business brokers will look at all three methods and weight them
                  based on the type of business. For most Australian freelance businesses, the SDE multiple
                  method carries the most weight because it best reflects the cash-generating ability of
                  the business.
                </p>
              </div>
            </div>

            {/* Key Factors That Affect Business Value */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Key Factors That Affect Business Value
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Two businesses with identical revenue can have vastly different valuations. Here are the
                  factors that push your multiple higher or lower:
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Recurring Revenue</h4>
                    <p className="text-sm">
                      Retainer agreements and subscription revenue are the single biggest value driver.
                      A business with 60%+ recurring revenue commands significantly higher multiples
                      because the income is predictable and transferable.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Client Concentration</h4>
                    <p className="text-sm">
                      If one client represents more than 30% of revenue, it&apos;s a red flag for buyers.
                      Well-diversified client bases (no single client over 15%) reduce risk and increase
                      value.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Growth Trajectory</h4>
                    <p className="text-sm">
                      Businesses growing at 15%+ annually are more attractive than flat or declining
                      businesses. Consistent, documented growth signals a healthy market position and
                      strong demand.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Owner Dependency</h4>
                    <p className="text-sm">
                      If the business can&apos;t operate without you, it&apos;s hard to sell. Documented
                      processes, SOPs, templates, and systems that a new owner can follow make the business
                      transferable and more valuable.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Track Record</h4>
                    <p className="text-sm">
                      Businesses with 3+ years of clean financial records, consistent profitability, and
                      a strong reputation command higher multiples. Buyers want proof that the revenue
                      will continue after the sale.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Industry &amp; Niche</h4>
                    <p className="text-sm">
                      Some service niches are more in demand than others. Web development, digital marketing,
                      and consulting businesses with specialised expertise tend to attract higher multiples
                      than commoditised services.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* When to Get a Professional Valuation */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                When to Get a Professional Valuation
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  This calculator gives you a useful ballpark estimate, but there are situations where
                  you should invest in a formal business valuation from a qualified professional:
                </p>
                <div className="space-y-3 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-1">You&apos;re Actively Selling</h4>
                    <p className="text-sm">
                      If you&apos;re listing your business for sale, a formal valuation from a registered
                      business valuer or broker gives buyers confidence and helps you negotiate from a
                      position of strength. In Australia, look for members of the{' '}
                      <strong className="text-white">Australian Institute of Business Brokers (AIBB)</strong>{' '}
                      or registered business valuers.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-1">Partnership Changes</h4>
                    <p className="text-sm">
                      Bringing on a business partner, buying out a co-founder, or restructuring ownership
                      all require an agreed-upon valuation. An independent valuation prevents disputes.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-1">Tax &amp; Legal Purposes</h4>
                    <p className="text-sm">
                      If you&apos;re selling a business in Australia, Capital Gains Tax (CGT) applies.
                      The ATO requires accurate valuations. You may be eligible for the small business
                      CGT concessions if your business has a net asset value under $6 million — potentially
                      reducing your CGT significantly. A registered tax agent can help you navigate this.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-1">Revenue Over $500K</h4>
                    <p className="text-sm">
                      Once your business crosses $500K in annual revenue, the stakes are high enough
                      that a professional valuation (typically $2,000-$10,000) is a worthwhile investment.
                      The cost is tax-deductible and can pay for itself many times over in a well-negotiated
                      sale.
                    </p>
                  </div>
                </div>
                <p className="text-sm mt-4">
                  For businesses under $500K in revenue, this calculator combined with conversations with
                  a business broker (many offer free initial consultations) can give you a solid understanding
                  of your position.
                </p>
              </div>
            </div>

            {/* Related Tools */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Related Tools for Business Owners
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Understanding your business value is just one piece of the puzzle. These tools help you
                  build the financial clarity that drives higher valuations:
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <Link
                    href="/tools/profit-loss-statement"
                    className="bg-white/5 rounded-xl p-4 hover:bg-white/[0.08] transition-colors group"
                  >
                    <h4 className="text-white font-semibold mb-1 group-hover:text-teal-400 transition-colors">
                      Profit &amp; Loss Statement
                    </h4>
                    <p className="text-sm">
                      Generate a clean P&amp;L statement — the foundation of any business valuation.
                      Buyers will ask for this first.
                    </p>
                  </Link>
                  <Link
                    href="/tools/annual-revenue-report"
                    className="bg-white/5 rounded-xl p-4 hover:bg-white/[0.08] transition-colors group"
                  >
                    <h4 className="text-white font-semibold mb-1 group-hover:text-teal-400 transition-colors">
                      Annual Revenue Report
                    </h4>
                    <p className="text-sm">
                      Track and document your revenue trends over time. Consistent growth history
                      increases your business multiple.
                    </p>
                  </Link>
                  <Link
                    href="/tools/client-lifetime-value"
                    className="bg-white/5 rounded-xl p-4 hover:bg-white/[0.08] transition-colors group"
                  >
                    <h4 className="text-white font-semibold mb-1 group-hover:text-teal-400 transition-colors">
                      Client Lifetime Value Calculator
                    </h4>
                    <p className="text-sm">
                      Understand how much each client is worth over time. Higher CLV means a more
                      valuable client base for buyers.
                    </p>
                  </Link>
                  <Link
                    href="/tools/business-health-score"
                    className="bg-white/5 rounded-xl p-4 hover:bg-white/[0.08] transition-colors group"
                  >
                    <h4 className="text-white font-semibold mb-1 group-hover:text-teal-400 transition-colors">
                      Business Health Score
                    </h4>
                    <p className="text-sm">
                      Score your business across 6 key dimensions. A healthier business commands
                      a higher valuation.
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-16 text-center glass rounded-2xl p-10">
            <h3 className="text-3xl font-bold text-white heading-font mb-4">
              Build a business <span className="gradient-text">worth selling</span>
            </h3>
            <p className="text-slate-300 max-w-xl mx-auto mb-6">
              InvoiceFlow helps you build the financial systems buyers look for — professional invoicing,
              payment tracking, revenue reporting, and client management. Clean books increase your
              valuation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/signup"
                className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-900 font-semibold hover:opacity-90 transition-opacity"
              >
                Start Free — 5 Invoices/Month
              </Link>
              <Link
                href="/tools/profit-loss-statement"
                className="inline-block px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all"
              >
                Try Profit &amp; Loss Statement
              </Link>
            </div>
          </section>
        
        <RelatedTools currentSlug="business-valuation-calculator" category="Business Analytics" />
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
