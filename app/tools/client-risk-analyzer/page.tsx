import type { Metadata } from 'next';
import Link from 'next/link';
import ClientRiskAnalyzer from './ClientRiskAnalyzer';
import RelatedTools from '../components/RelatedTools';
import EmailCapture from '../components/EmailCapture';

const title = 'Client Concentration Risk Analyzer Australia | Free Portfolio Risk Tool — InvoiceFlow';
const description =
  'Analyze your freelance client portfolio for revenue concentration risk. Calculate HHI score, identify dangerous client dependency, and get diversification strategies. Free Australian business risk calculator.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'client concentration risk',
    'freelance client diversification',
    'business risk calculator',
    'client dependency calculator',
    'HHI calculator freelance',
    'revenue concentration risk',
    'client portfolio analysis',
    'freelance business risk',
    'client diversification tool',
    'herfindahl hirschman index calculator',
  ],
  openGraph: {
    title: 'Client Concentration Risk Analyzer — Free Tool | InvoiceFlow',
    description:
      'Are you too dependent on one client? Analyze your revenue concentration risk and get a diversification plan.',
    url: 'https://www.invoiceflow.au/tools/client-risk-analyzer',
    siteName: 'InvoiceFlow',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Client Concentration Risk Analyzer — Free Tool | InvoiceFlow',
    description:
      'Analyze your freelance client portfolio for dangerous revenue concentration. Free Australian business risk tool.',
  },
  alternates: {
    canonical: 'https://www.invoiceflow.au/tools/client-risk-analyzer',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Client Concentration Risk Analyzer',
  description:
    'Analyze your freelance client portfolio for revenue concentration risk. Calculate HHI score, identify client dependency, and get diversification strategies.',
  url: 'https://www.invoiceflow.au/tools/client-risk-analyzer',
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

export default function ClientRiskAnalyzerPage() {
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
              Client Concentration{' '}
              <span className="gradient-text">Risk Analyzer</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Are you dangerously dependent on one client? Enter your client portfolio to
              uncover revenue concentration risk, calculate your HHI score, and get a
              personalised diversification plan. Know your risk before it becomes a crisis.
            </p>
          </div>

          {/* Calculator */}
          <ClientRiskAnalyzer />

          {/* SEO Content Sections */}
          <section className="mt-16 space-y-12">
            {/* Section 1: Why Client Concentration Kills Freelancers */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Why Client Concentration Kills Freelance Businesses
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  <strong className="text-white">The single biggest risk to a freelancer&apos;s income isn&apos;t bad
                  marketing or low rates — it&apos;s client concentration.</strong> When one client accounts for
                  40%, 50%, or even 70% of your revenue, you don&apos;t have a business — you have a job
                  disguised as freelancing, with none of the protections.
                </p>
                <p>
                  Research from the Freelancers Union found that 63% of freelancers have experienced a
                  client suddenly ending a contract without warning. For those with high concentration,
                  the average income drop was 45% — enough to miss rent, skip superannuation contributions,
                  and trigger a financial crisis.
                </p>
                <p>
                  Australian freelancers are particularly exposed. The ABS reports that around 1 in 5
                  independent contractors derive more than 80% of their income from a single client. At
                  that level of dependency, you&apos;re effectively an employee without leave entitlements,
                  redundancy pay, or notice periods.
                </p>
                <div className="bg-white/5 rounded-xl p-4 mt-4">
                  <h4 className="text-white font-semibold mb-2">The Warning Signs</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-rose-400 mt-0.5">1.</span>
                      <span>One client accounts for more than 30% of your annual revenue</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rose-400 mt-0.5">2.</span>
                      <span>You turn down other work because your main client keeps you too busy</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rose-400 mt-0.5">3.</span>
                      <span>You haven&apos;t won a new client in 6+ months</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rose-400 mt-0.5">4.</span>
                      <span>Losing your top client would force you to dip into savings within 30 days</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 2: Understanding the HHI Index */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Understanding the HHI Index for Freelancers
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  The <strong className="text-white">Herfindahl-Hirschman Index (HHI)</strong> is a widely
                  used measure of market concentration. Originally developed for antitrust economics, it
                  works brilliantly for measuring freelancer client concentration too.
                </p>
                <div className="bg-white/5 rounded-xl p-4 mt-4">
                  <h4 className="text-white font-semibold mb-2">How It&apos;s Calculated</h4>
                  <p className="text-sm font-mono text-teal-400 mb-2">
                    HHI = S1&sup2; + S2&sup2; + S3&sup2; + ... + Sn&sup2;
                  </p>
                  <p className="text-sm">
                    Where S is each client&apos;s percentage share of your total revenue. For example,
                    if you have two clients at 50% each: HHI = 50&sup2; + 50&sup2; = 5,000.
                    If you have four clients at 25% each: HHI = 25&sup2; x 4 = 2,500.
                  </p>
                </div>
                <div className="grid sm:grid-cols-4 gap-4 mt-4">
                  <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-emerald-400">&lt;1,500</p>
                    <p className="text-sm text-slate-400 mt-1">Low Risk</p>
                    <p className="text-xs text-slate-500">Well diversified</p>
                  </div>
                  <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-amber-400">1,500&ndash;2,500</p>
                    <p className="text-sm text-slate-400 mt-1">Moderate</p>
                    <p className="text-xs text-slate-500">Some concentration</p>
                  </div>
                  <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-orange-400">2,500&ndash;4,000</p>
                    <p className="text-sm text-slate-400 mt-1">High</p>
                    <p className="text-xs text-slate-500">Significant risk</p>
                  </div>
                  <div className="bg-rose-500/10 border border-rose-500/20 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-rose-400">&gt;4,000</p>
                    <p className="text-sm text-slate-400 mt-1">Critical</p>
                    <p className="text-xs text-slate-500">Dangerously concentrated</p>
                  </div>
                </div>
                <p className="text-sm text-slate-400 mt-2">
                  The theoretical maximum HHI is 10,000 (one client = 100% of revenue). The lower
                  your HHI, the more diversified your income. As a rule of thumb, freelancers should
                  aim for an HHI below 1,500 and never let it exceed 2,500.
                </p>
              </div>
            </div>

            {/* Section 3: 5 Ways to Diversify */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                5 Ways to Diversify Your Client Base
              </h2>
              <div className="space-y-4 text-slate-300">
                <ol className="space-y-4 list-decimal list-inside">
                  <li>
                    <strong className="text-white">Set a client revenue cap.</strong> Decide that no single
                    client should exceed 25-30% of your revenue. When a client approaches that threshold,
                    redirect your growth energy toward landing new clients instead of taking on more work
                    from the same source.
                  </li>
                  <li>
                    <strong className="text-white">Productise a service offering.</strong> Create a
                    fixed-scope, fixed-price package (e.g., &ldquo;Brand Audit for $2,000&rdquo; or
                    &ldquo;Monthly SEO Report for $800/mo&rdquo;). Productised services attract a broader
                    range of smaller clients and are easier to sell than custom proposals.
                  </li>
                  <li>
                    <strong className="text-white">Diversify across industries.</strong> If all your clients
                    are in one sector (say, real estate), a market downturn could hit them all
                    simultaneously. Spread across 3-4 industries so economic shocks in one area don&apos;t
                    collapse your entire pipeline.
                  </li>
                  <li>
                    <strong className="text-white">Build a referral system.</strong> Ask every satisfied
                    client for one introduction. Referred clients close faster, pay more, and stay longer.
                    Even a 20% referral rate can add 1-2 new clients per year organically. Use our{' '}
                    <a href="/tools/client-lifetime-value" className="text-teal-400 hover:underline">
                      Client Lifetime Value Calculator
                    </a>{' '}
                    to see the compounding effect of referrals.
                  </li>
                  <li>
                    <strong className="text-white">Maintain a sales pipeline — always.</strong> The biggest
                    mistake freelancers make is stopping their marketing when they&apos;re busy. Dedicate
                    10-15% of your time to business development, even during peak periods. When a big
                    client leaves, you&apos;ll have warm leads ready instead of starting from zero.
                  </li>
                </ol>
              </div>
            </div>

            {/* Section 4: Healthy vs Unhealthy Portfolios */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Healthy vs Unhealthy Client Portfolios
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  How does your portfolio stack up? Here&apos;s a comparison of what healthy
                  diversification looks like versus a dangerously concentrated portfolio:
                </p>
                <div className="overflow-x-auto mt-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left text-white py-3 pr-4 font-semibold">Metric</th>
                        <th className="text-left text-white py-3 pr-4 font-semibold">
                          <span className="text-emerald-400">Healthy</span>
                        </th>
                        <th className="text-left text-white py-3 font-semibold">
                          <span className="text-rose-400">Risky</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-slate-300">
                      <tr className="border-b border-white/5">
                        <td className="py-3 pr-4">Top client share</td>
                        <td className="py-3 pr-4 text-emerald-400 font-medium">&lt;25%</td>
                        <td className="py-3 text-rose-400 font-medium">&gt;40%</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="py-3 pr-4">Number of active clients</td>
                        <td className="py-3 pr-4 text-emerald-400 font-medium">6-10+</td>
                        <td className="py-3 text-rose-400 font-medium">1-3</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="py-3 pr-4">HHI Score</td>
                        <td className="py-3 pr-4 text-emerald-400 font-medium">&lt;1,500</td>
                        <td className="py-3 text-rose-400 font-medium">&gt;2,500</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="py-3 pr-4">Industry diversity</td>
                        <td className="py-3 pr-4 text-emerald-400 font-medium">3-4 industries</td>
                        <td className="py-3 text-rose-400 font-medium">1 industry</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4">Survival if top client leaves</td>
                        <td className="py-3 pr-4 text-emerald-400 font-medium">Minimal disruption</td>
                        <td className="py-3 text-rose-400 font-medium">Financial crisis</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-slate-400 mt-2">
                  The goal isn&apos;t to have dozens of tiny clients — that creates its own problems
                  (admin overhead, context switching). The sweet spot is 5-8 clients with no single
                  client exceeding 25% of revenue, spread across at least 3 different industries.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-16 text-center glass rounded-2xl p-10">
            <h3 className="text-3xl font-bold text-white heading-font mb-4">
              Take control of your <span className="gradient-text">client risk</span>
            </h3>
            <p className="text-slate-300 max-w-xl mx-auto mb-6">
              InvoiceFlow helps you track revenue per client, spot concentration trends early,
              and maintain a healthy, diversified freelance business. Professional invoicing
              that gives you the data you need to make smarter decisions.
            </p>
            <Link
              href="/signup"
              className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold hover:opacity-90 transition-opacity"
            >
              Start Free — 5 Invoices/Month
            </Link>
          </section>
        
        <RelatedTools currentSlug="client-risk-analyzer" category="Business Analytics" />
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
