import type { Metadata } from 'next';
import Link from 'next/link';
import ClientLifetimeValue from './ClientLifetimeValue';
import RelatedTools from '../components/RelatedTools';
import EmailCapture from '../components/EmailCapture';

const title = 'Client Lifetime Value Calculator Australia | Free CLV Tool — InvoiceFlow';
const description =
  'Calculate the lifetime value of your freelance clients. See total revenue, profit, referral value, CLV:CAC ratio, and payback period. Understand which clients are worth investing in. Free Australian calculator.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'client lifetime value calculator',
    'CLV calculator freelance',
    'customer lifetime value calculator',
    'client value calculator',
    'freelance client worth',
    'CLV CAC ratio calculator',
    'client acquisition cost calculator',
    'freelance client retention value',
    'customer value analysis',
    'client profitability calculator australia',
  ],
  openGraph: {
    title: 'Client Lifetime Value Calculator — Free Tool | InvoiceFlow',
    description:
      'How much is each client worth to your freelance business? Calculate CLV, referral value, and acquisition ROI.',
    url: 'https://www.invoiceflow.au/tools/client-lifetime-value',
    siteName: 'InvoiceFlow',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Client Lifetime Value Calculator — Free Tool | InvoiceFlow',
    description:
      'Calculate the true lifetime value of your freelance clients. Free Australian CLV calculator.',
  },
  alternates: {
    canonical: 'https://www.invoiceflow.au/tools/client-lifetime-value',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Client Lifetime Value Calculator',
  description:
    'Calculate the lifetime value of your freelance clients including referral value, CLV:CAC ratio, and payback period.',
  url: 'https://www.invoiceflow.au/tools/client-lifetime-value',
  applicationCategory: 'BusinessApplication',
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

export default function ClientLifetimeValuePage() {
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
              Client Lifetime{' '}
              <span className="gradient-text">Value Calculator</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              How much is each client really worth to your business? Calculate the total lifetime
              revenue, profit, referral value, and acquisition ROI for different client types.
              Make smarter decisions about where to invest your time and marketing budget.
            </p>
          </div>

          {/* Calculator */}
          <ClientLifetimeValue />

          {/* SEO Content Sections */}
          <section className="mt-16 space-y-12">
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                What Is Client Lifetime Value (CLV)?
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  <strong className="text-white">Client Lifetime Value (CLV)</strong> measures the total
                  profit a client generates over their entire relationship with your business. It&apos;s
                  one of the most important metrics for freelancers because it shifts your thinking from
                  &ldquo;how much is this project worth?&rdquo; to &ldquo;how much is this client worth
                  over time?&rdquo;
                </p>
                <p>
                  Understanding CLV helps you make better decisions about which clients to pursue, how
                  much to spend on acquisition, when to invest extra effort in retention, and where to
                  focus your marketing budget.
                </p>
                <div className="bg-white/5 rounded-xl p-4 mt-4">
                  <h4 className="text-white font-semibold mb-2">The Basic Formula</h4>
                  <p className="text-sm font-mono text-teal-400">
                    CLV = (Avg Project Value x Projects/Year x Avg Lifespan) x Profit Margin - Acquisition Cost
                  </p>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Understanding the CLV:CAC Ratio
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  The <strong className="text-white">CLV:CAC ratio</strong> compares the lifetime value
                  of a client to what you spent to acquire them. It tells you whether your client
                  acquisition is sustainable and profitable.
                </p>
                <div className="grid sm:grid-cols-3 gap-4 mt-4">
                  <div className="bg-rose-500/10 border border-rose-500/20 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-rose-400">&lt;1:1</p>
                    <p className="text-sm text-slate-400 mt-1">Losing money</p>
                    <p className="text-xs text-slate-500">Acquisition costs exceed value</p>
                  </div>
                  <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-amber-400">1:1 — 3:1</p>
                    <p className="text-sm text-slate-400 mt-1">Acceptable</p>
                    <p className="text-xs text-slate-500">Profitable but room to improve</p>
                  </div>
                  <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-emerald-400">3:1+</p>
                    <p className="text-sm text-slate-400 mt-1">Healthy</p>
                    <p className="text-xs text-slate-500">Strong unit economics</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                5 Ways to Increase Client Lifetime Value
              </h2>
              <div className="space-y-4 text-slate-300">
                <ol className="space-y-4 list-decimal list-inside">
                  <li>
                    <strong className="text-white">Improve client retention.</strong> Extending the
                    average client lifespan by just one year can increase CLV by 25-50%. Regular check-ins,
                    proactive suggestions, and excellent delivery keep clients coming back.
                  </li>
                  <li>
                    <strong className="text-white">Increase project frequency.</strong> Look for
                    opportunities to offer ongoing services: monthly retainers, quarterly reviews,
                    annual refreshes. A client who hires you 4x/year is worth 4x a one-off client.
                  </li>
                  <li>
                    <strong className="text-white">Upsell and cross-sell.</strong> If you build websites,
                    offer SEO or content services. If you design brands, offer marketing collateral.
                    Expanding your service offerings to existing clients is the lowest-cost growth strategy.
                  </li>
                  <li>
                    <strong className="text-white">Generate referrals.</strong> Happy clients refer other
                    clients — and referred clients typically have lower acquisition costs and higher
                    retention rates. Ask for referrals explicitly; don&apos;t wait for them to happen.
                  </li>
                  <li>
                    <strong className="text-white">Raise your rates.</strong> Higher project values
                    directly increase CLV. If you&apos;re delivering consistent results, annual rate
                    increases are expected and reasonable. Use our{' '}
                    <a href="/tools/rate-calculator" className="text-teal-400 hover:underline">
                      Rate Calculator
                    </a>{' '}
                    to benchmark your rates.
                  </li>
                </ol>
              </div>
            </div>

            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Client Acquisition Cost (CAC) Benchmarks
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  How much should you spend to acquire a new client? Here are typical ranges for
                  Australian freelancers:
                </p>
                <div className="overflow-x-auto mt-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left text-white py-3 pr-4 font-semibold">Channel</th>
                        <th className="text-left text-white py-3 pr-4 font-semibold">Typical CAC</th>
                        <th className="text-left text-white py-3 font-semibold">Notes</th>
                      </tr>
                    </thead>
                    <tbody className="text-slate-300">
                      <tr className="border-b border-white/5">
                        <td className="py-3 pr-4">Referrals</td>
                        <td className="py-3 pr-4 text-emerald-400 font-medium">$0-$50</td>
                        <td className="py-3">Lowest cost, highest quality</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="py-3 pr-4">Content / SEO</td>
                        <td className="py-3 pr-4 text-emerald-400 font-medium">$50-$200</td>
                        <td className="py-3">Time investment, compounds over time</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="py-3 pr-4">Networking / events</td>
                        <td className="py-3 pr-4 text-amber-400 font-medium">$100-$500</td>
                        <td className="py-3">Event costs + time</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="py-3 pr-4">Upwork / Fiverr</td>
                        <td className="py-3 pr-4 text-amber-400 font-medium">$200-$800</td>
                        <td className="py-3">Platform fees + proposal time</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="py-3 pr-4">Paid advertising</td>
                        <td className="py-3 pr-4 text-rose-400 font-medium">$500-$2,000+</td>
                        <td className="py-3">Google/Meta ads, high competition</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4">Cold outreach</td>
                        <td className="py-3 pr-4 text-amber-400 font-medium">$100-$400</td>
                        <td className="py-3">Time-intensive, low conversion</td>
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
              Maximise your <span className="gradient-text">client value</span>
            </h3>
            <p className="text-slate-300 max-w-xl mx-auto mb-6">
              InvoiceFlow helps you track revenue per client, automate follow-ups, and identify
              your most valuable relationships. Professional invoicing that keeps clients coming back.
            </p>
            <Link
              href="/signup"
              className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold hover:opacity-90 transition-opacity"
            >
              Start Free — 5 Invoices/Month
            </Link>
          </section>
        
        <RelatedTools currentSlug="client-lifetime-value" category="Business Analytics" />
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
