import type { Metadata } from 'next';
import Link from 'next/link';
import BusinessHealthScore from './BusinessHealthScore';
import RelatedTools from '../components/RelatedTools';

const title = 'Freelance Business Health Score Australia | Free Business Scorecard — InvoiceFlow';
const description =
  'Free business health scorecard for Australian freelancers. Score your business across 6 key areas: income stability, client diversification, pricing, financial reserves, cash flow, and growth. Get personalised recommendations.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'freelance business health check',
    'business health score freelancer',
    'freelance business scorecard',
    'am i charging enough freelancer',
    'freelance business assessment australia',
    'sole trader business health',
  ],
  openGraph: {
    title: 'Freelance Business Health Score — Free Tool | InvoiceFlow',
    description:
      'Score your freelance business across 6 key areas and get personalised recommendations. Free for Australian freelancers.',
    url: 'https://www.invoiceflow.au/tools/business-health-score',
    siteName: 'InvoiceFlow',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Freelance Business Health Score — Free Tool | InvoiceFlow',
    description:
      'How healthy is your freelance business? Free scorecard across 6 key areas with personalised recommendations.',
  },
  alternates: {
    canonical: 'https://www.invoiceflow.au/tools/business-health-score',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Freelance Business Health Score Australia',
  description:
    'Score your freelance business across income stability, client diversification, pricing, financial reserves, cash flow, and growth. Get personalised recommendations.',
  url: 'https://www.invoiceflow.au/tools/business-health-score',
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

export default function BusinessHealthScorePage() {
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
              Freelance Business <span className="gradient-text">Health Score</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Answer 6 quick questions about your business. Get an overall health score out of
              100 with specific, actionable recommendations to strengthen your freelance operation.
            </p>
          </div>

          {/* Calculator */}
          <BusinessHealthScore />

          {/* SEO Content Sections */}
          <section className="mt-16 space-y-12">
            {/* What Makes a Healthy Freelance Business */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                What Makes a Healthy Freelance Business?
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Revenue alone doesn&apos;t make a healthy business. A freelancer earning $150K
                  from one client with no savings and thin margins is more fragile than one
                  earning $80K from five clients with three months of runway. Health is about
                  resilience, not just revenue.
                </p>
                <p>
                  This scorecard evaluates your business across six dimensions that matter most for
                  long-term sustainability:
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Income Stability</h4>
                    <p className="text-sm">
                      How predictable is your monthly income? Volatile income leads to stress, poor
                      decisions, and feast-or-famine cycles.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Client Diversification</h4>
                    <p className="text-sm">
                      How spread is your income across clients? If one client disappears, can you
                      survive without panic?
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Pricing Power</h4>
                    <p className="text-sm">
                      Are you charging enough? Are your rates keeping up with your experience, market
                      rates, and the value you deliver?
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Financial Reserves</h4>
                    <p className="text-sm">
                      How long could you survive with zero new income? Cash reserves are the
                      difference between a slow month and a crisis.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Cash Flow Health</h4>
                    <p className="text-sm">
                      How quickly do clients pay you? Slow payers drain your runway even when
                      revenue looks strong on paper.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Growth Trajectory</h4>
                    <p className="text-sm">
                      Is your business growing, stagnant, or shrinking? Are you building systems
                      that scale, or trading time for money forever?
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* How to Improve Each Area */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                How to Improve Your Score
              </h2>
              <div className="space-y-4 text-slate-300">
                <div className="space-y-4 mt-2">
                  <div className="bg-white/5 rounded-xl p-5">
                    <h4 className="text-white font-semibold mb-2">Income Stability: Build Recurring Revenue</h4>
                    <p className="text-sm">
                      Move from project-to-project work toward retainer agreements, maintenance
                      contracts, or subscription-based services. Even converting 30% of your income
                      to recurring revenue dramatically smooths out cash flow. Use the{' '}
                      <Link href="/tools/retainer-calculator" className="text-teal-400 hover:underline">
                        Retainer Calculator
                      </Link>{' '}
                      to price your retainer packages.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-5">
                    <h4 className="text-white font-semibold mb-2">Client Diversification: The 25% Rule</h4>
                    <p className="text-sm">
                      No single client should represent more than 25% of your revenue. If they do,
                      actively pursue new clients until that percentage drops. It&apos;s not about
                      firing big clients — it&apos;s about growing the rest of your business so no
                      one client has the power to sink you.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-5">
                    <h4 className="text-white font-semibold mb-2">Pricing Power: Raise Rates Annually</h4>
                    <p className="text-sm">
                      If you haven&apos;t raised your rates in the last 12 months, you&apos;ve taken
                      a pay cut (inflation alone is 3-5% in Australia). Use the{' '}
                      <Link href="/tools/rate-calculator" className="text-teal-400 hover:underline">
                        Rate Calculator
                      </Link>{' '}
                      to benchmark your rates and the{' '}
                      <Link href="/tools/salary-to-hourly" className="text-teal-400 hover:underline">
                        Salary Converter
                      </Link>{' '}
                      to compare against equivalent employee compensation.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-5">
                    <h4 className="text-white font-semibold mb-2">Financial Reserves: 3 Months Minimum</h4>
                    <p className="text-sm">
                      Every freelancer should have at least 3 months of living expenses in a
                      high-interest savings account. This isn&apos;t investment money — it&apos;s
                      survival money. Calculate your runway with the{' '}
                      <Link href="/tools/cashflow-forecast" className="text-teal-400 hover:underline">
                        Cash Flow Forecast
                      </Link>{' '}
                      tool.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-5">
                    <h4 className="text-white font-semibold mb-2">Cash Flow: Tighten Payment Terms</h4>
                    <p className="text-sm">
                      Move from Net 30 to Net 14 or Net 7 for new clients. Require deposits (30-50%
                      upfront) for project work. Automate payment reminders and offer early payment
                      discounts. Use the{' '}
                      <Link href="/tools/payment-terms-calculator" className="text-teal-400 hover:underline">
                        Payment Terms Calculator
                      </Link>{' '}
                      to model the impact on your cash flow.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-5">
                    <h4 className="text-white font-semibold mb-2">Growth: Create Leverage</h4>
                    <p className="text-sm">
                      If your income only grows when you work more hours, you&apos;re capped.
                      Create leverage through productised services (fixed scope, fixed price),
                      digital products, templates, or subcontracting. The goal is to decouple
                      income from time over the next 12 months.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Score Benchmarks */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Score Benchmarks
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Here&apos;s what your overall score tells you about your freelance business:
                </p>
                <div className="overflow-x-auto mt-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-3 px-4 text-slate-400 font-medium">Score</th>
                        <th className="text-left py-3 px-4 text-slate-400 font-medium">Rating</th>
                        <th className="text-left py-3 px-4 text-slate-400 font-medium">What It Means</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      <tr>
                        <td className="py-3 px-4 text-emerald-400 font-bold">80-100</td>
                        <td className="py-3 px-4 text-white font-medium">Excellent</td>
                        <td className="py-3 px-4">Resilient, well-diversified, properly priced. Focus on scaling.</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-teal-400 font-bold">60-79</td>
                        <td className="py-3 px-4 text-white font-medium">Good</td>
                        <td className="py-3 px-4">Solid foundation with 1-2 areas to strengthen. You&apos;re on the right track.</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-amber-400 font-bold">40-59</td>
                        <td className="py-3 px-4 text-white font-medium">Fair</td>
                        <td className="py-3 px-4">Functional but fragile. One bad month could cause serious problems.</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-rose-400 font-bold">0-39</td>
                        <td className="py-3 px-4 text-white font-medium">Needs Work</td>
                        <td className="py-3 px-4">High risk. Multiple areas need immediate attention to build sustainability.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm mt-4">
                  Most freelancers in their first year score 30-50. By year three, healthy businesses
                  typically reach 60-80. The goal isn&apos;t perfection — it&apos;s steady improvement
                  across all six dimensions.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-16 text-center glass rounded-2xl p-10">
            <h3 className="text-3xl font-bold text-white heading-font mb-4">
              Ready to <span className="gradient-text">strengthen your business?</span>
            </h3>
            <p className="text-slate-300 max-w-xl mx-auto mb-6">
              InvoiceFlow gives you the tools to improve every dimension — automated invoicing,
              payment tracking, client management, and financial reporting built for freelancers.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/signup"
                className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold hover:opacity-90 transition-opacity"
              >
                Start Free — 5 Invoices/Month
              </Link>
              <Link
                href="/tools/revenue-goal-planner"
                className="inline-block px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all"
              >
                Try Revenue Goal Planner
              </Link>
            </div>
          </section>
        
        <RelatedTools currentSlug="business-health-score" category="Business Analytics" />
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
