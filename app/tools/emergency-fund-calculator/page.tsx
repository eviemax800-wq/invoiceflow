import type { Metadata } from 'next';
import Link from 'next/link';
import EmergencyFundCalculator from './EmergencyFundCalculator';
import RelatedTools from '../components/RelatedTools';

const title =
  'Free Freelance Emergency Fund Calculator Australia — How Much Savings Do You Need? | InvoiceFlow';
const description =
  'Calculate your ideal emergency fund as an Australian freelancer or sole trader. Personalised savings targets based on expenses, income variability, dependents, and risk factors. Free, no signup required.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'emergency fund calculator freelancer',
    'how much savings freelancer australia',
    'freelance financial safety net calculator',
    'emergency savings calculator sole trader',
    'freelancer savings buffer calculator',
    'how much emergency fund do i need freelancer',
    'freelance income buffer calculator australia',
    'financial runway calculator freelancer',
    'freelance emergency savings australia',
    'sole trader emergency fund',
    'freelancer financial buffer',
    'irregular income savings calculator',
  ],
  openGraph: {
    title: 'Emergency Fund Calculator — Free Tool | InvoiceFlow',
    description:
      'Calculate your ideal emergency fund as an Australian freelancer. Personalised savings targets based on your risk profile. Free — no signup required.',
    url: 'https://www.invoiceflow.au/tools/emergency-fund-calculator',
    siteName: 'InvoiceFlow',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Emergency Fund Calculator — Free Tool | InvoiceFlow',
    description:
      'Calculate your ideal emergency fund as an Australian freelancer. Personalised savings targets based on your risk profile.',
  },
  alternates: {
    canonical: 'https://www.invoiceflow.au/tools/emergency-fund-calculator',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Freelance Emergency Fund Calculator',
  description:
    'Calculate how much emergency fund an Australian freelancer needs. Personalised savings targets based on monthly expenses, income variability, dependents, and risk profile with timeline projections.',
  url: 'https://www.invoiceflow.au/tools/emergency-fund-calculator',
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

export default function EmergencyFundCalculatorPage() {
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
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-6">
              <div className="w-2 h-2 bg-emerald-400 rounded-full" />
              <span className="text-emerald-400 text-sm font-medium">100% Free</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white heading-font mb-4">
              Freelance Emergency{' '}
              <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
                Fund Calculator
              </span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Calculate exactly how much emergency savings you need as an Australian freelancer.
              Personalised targets based on your expenses, income variability, dependents, and
              risk profile — with a timeline to get there.
            </p>
          </div>

          {/* Calculator Tool */}
          <EmergencyFundCalculator />

          {/* SEO Content Sections */}
          <section className="mt-16 space-y-12">
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Why Every Freelancer Needs an Emergency Fund
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Unlike salaried employees, freelancers and sole traders have no guaranteed income
                  from month to month. There is no employer-funded sick leave, no annual leave
                  accrual, and no redundancy payout if work dries up. An{' '}
                  <strong className="text-white">emergency fund</strong> is the single most important
                  financial safety net a freelancer can build — it is the difference between weathering
                  a slow quarter and a financial crisis.
                </p>
                <p>
                  The risks that make emergency savings critical for Australian freelancers include
                  irregular income cycles, client loss (especially if you depend on one or two key
                  accounts), seasonal fluctuations, unexpected equipment failure, and health issues
                  that prevent you from working. Unlike employees who receive superannuation
                  contributions, freelancers must fund their own super — meaning your savings
                  account is your only buffer.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Income Risks</h4>
                    <ul className="text-sm space-y-1.5 text-slate-400">
                      <li>Client projects ending without replacement lined up</li>
                      <li>Seasonal slowdowns (December-January, Easter)</li>
                      <li>Late payments creating cashflow gaps</li>
                      <li>Market downturns reducing demand for your services</li>
                      <li>Key client going bankrupt or cancelling contracts</li>
                    </ul>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Australian-Specific Costs</h4>
                    <ul className="text-sm space-y-1.5 text-slate-400">
                      <li>No employer super contributions on savings</li>
                      <li>Medicare does not cover all health expenses</li>
                      <li>Private health insurance premiums increasing yearly</li>
                      <li>High cost of living in Melbourne and Sydney</li>
                      <li>Professional indemnity insurance is mandatory in many fields</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                How Much Emergency Fund Do Australian Freelancers Need?
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  The general advice for employees is to save 3 months of expenses. For freelancers,
                  the recommendation is significantly higher — typically{' '}
                  <strong className="text-white">6 to 9 months</strong> of essential expenses, and
                  up to 12 months for those with highly variable income or significant dependents.
                  This is because freelancers face a double risk: not only can unexpected expenses
                  arise, but income can also disappear simultaneously.
                </p>
                <p>
                  The exact amount depends on your specific risk profile. A graphic designer with
                  two retainer clients and a partner in stable employment may be comfortable with
                  4-5 months of expenses. A photographer who relies entirely on project-based work
                  with no retainers and a family to support should aim for 9-12 months minimum.
                </p>
                <div className="overflow-x-auto mt-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-2 text-slate-400 font-medium">Profile</th>
                        <th className="text-left py-2 text-slate-400 font-medium">Risk Level</th>
                        <th className="text-left py-2 text-slate-400 font-medium">Recommended</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      <tr>
                        <td className="py-3 text-white font-medium">Retainer clients, partner income, no dependents</td>
                        <td className="py-3">Low</td>
                        <td className="py-3">3-4 months</td>
                      </tr>
                      <tr>
                        <td className="py-3 text-white font-medium">Mix of retainer and project work, single</td>
                        <td className="py-3">Medium</td>
                        <td className="py-3">5-6 months</td>
                      </tr>
                      <tr>
                        <td className="py-3 text-white font-medium">Project-based, 2-3 clients, dependents</td>
                        <td className="py-3">High</td>
                        <td className="py-3">7-9 months</td>
                      </tr>
                      <tr>
                        <td className="py-3 text-white font-medium">Feast-or-famine, single client, family</td>
                        <td className="py-3">Very High</td>
                        <td className="py-3">9-12 months</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="bg-gradient-to-r from-emerald-500/10 to-green-500/10 border border-emerald-500/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-emerald-400 font-medium mb-2">Key Insight</p>
                  <p className="text-sm">
                    The calculator above adjusts your target based on your actual expenses and
                    risk factors — not generic rules. A freelancer earning $120,000/year with
                    $4,000/month in expenses needs a very different fund than one earning $60,000
                    with $6,000/month in expenses and a mortgage.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Building Your Emergency Fund — A Practical Plan
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Building an emergency fund on variable income requires a different approach than
                  setting up a direct debit from a regular salary. The most effective strategy for
                  freelancers is the <strong className="text-white">&quot;pay yourself first&quot;</strong>{' '}
                  method combined with percentage-based saving during high-income months.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">The Percentage Method</h4>
                    <ul className="text-sm space-y-1.5 text-slate-400">
                      <li>Save 20-30% of every payment you receive</li>
                      <li>In feast months, increase to 40-50%</li>
                      <li>Set a baseline monthly transfer for famine months</li>
                      <li>Automate transfers on invoice payment dates</li>
                      <li>Treat savings like a non-negotiable expense</li>
                    </ul>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Where to Keep It</h4>
                    <ul className="text-sm space-y-1.5 text-slate-400">
                      <li>High-interest savings account (separate from operating)</li>
                      <li>Offset account if you have a mortgage</li>
                      <li>Avoid term deposits — you need instant access</li>
                      <li>Consider ING, Ubank, or Macquarie savings accounts</li>
                      <li>Keep it in AUD — no currency risk</li>
                    </ul>
                  </div>
                </div>
                <div className="grid sm:grid-cols-3 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 text-sm">Step 1: Calculate</h4>
                    <p className="text-xs text-slate-400">
                      Use the calculator above to determine your personalised target. Know your
                      minimum, recommended, and ideal amounts.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 text-sm">Step 2: Separate</h4>
                    <p className="text-xs text-slate-400">
                      Open a dedicated high-interest savings account. Name it &quot;Emergency
                      Fund&quot; — psychology matters. Never touch it for non-emergencies.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 text-sm">Step 3: Automate</h4>
                    <p className="text-xs text-slate-400">
                      Set automatic transfers on the 1st and 15th. In big months, manually top up.
                      Use our{' '}
                      <a href="/tools/budget-planner" className="text-teal-400 hover:underline">
                        Budget Planner
                      </a>{' '}
                      to allocate income.
                    </p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 mt-4">
                  <p className="text-sm">
                    <strong className="text-amber-400">Tax tip:</strong> Interest earned on your
                    emergency fund is assessable income. At the 32.5% marginal rate, earning 5%
                    interest on $30,000 costs you about $488 in tax per year. An offset account
                    avoids this entirely by reducing mortgage interest instead of earning
                    taxable savings interest.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Emergency Fund vs Income Smoothing — What&apos;s the Difference?
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Many freelancers confuse <strong className="text-white">income smoothing</strong>{' '}
                  with an <strong className="text-white">emergency fund</strong>, but they serve
                  fundamentally different purposes. Both are essential, and conflating them can
                  leave you dangerously exposed.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Income Smoothing</h4>
                    <p className="text-sm text-slate-400 mb-2">
                      Evening out feast-and-famine months so you can pay yourself a consistent
                      &quot;salary&quot; regardless of when clients actually pay.
                    </p>
                    <ul className="text-xs space-y-1 text-slate-500">
                      <li>Used every month</li>
                      <li>Covers predictable variability</li>
                      <li>Sits in your operating account</li>
                      <li>Replenished naturally from high months</li>
                    </ul>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Emergency Fund</h4>
                    <p className="text-sm text-slate-400 mb-2">
                      A safety net for genuine emergencies — health crises, market downturns,
                      key client bankruptcy, or extended inability to work.
                    </p>
                    <ul className="text-xs space-y-1 text-slate-500">
                      <li>Rarely touched (ideally never)</li>
                      <li>Covers unpredictable catastrophes</li>
                      <li>Sits in a separate account</li>
                      <li>Must be actively rebuilt after use</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-emerald-500/10 to-green-500/10 border border-emerald-500/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-emerald-400 font-medium mb-2">Related Tools</p>
                  <p className="text-sm">
                    Use our{' '}
                    <a href="/tools/cashflow-forecast" className="text-teal-400 hover:underline">
                      Cashflow Forecast
                    </a>{' '}
                    to project your income smoothing needs, the{' '}
                    <a href="/tools/budget-planner" className="text-teal-400 hover:underline">
                      Budget Planner
                    </a>{' '}
                    to allocate monthly income, and the{' '}
                    <a href="/tools/revenue-goal-planner" className="text-teal-400 hover:underline">
                      Revenue Goal Planner
                    </a>{' '}
                    to set income targets that fund both your smoothing buffer and emergency savings.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-16 text-center glass rounded-2xl p-10">
            <h3 className="text-3xl font-bold text-white heading-font mb-4">
              Take control of your <span className="gradient-text">freelance finances</span>
            </h3>
            <p className="text-slate-300 max-w-xl mx-auto mb-6">
              InvoiceFlow helps Australian freelancers get paid faster with professional invoices,
              automated reminders, and real-time payment tracking. Build your emergency fund faster
              by eliminating late payments.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/signup"
                className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold hover:opacity-90 transition-opacity"
              >
                Start Free — 5 Invoices/Month
              </Link>
              <Link
                href="/tools/budget-planner"
                className="inline-block px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all"
              >
                Try Budget Planner
              </Link>
            </div>
          </section>
        
        <RelatedTools currentSlug="emergency-fund-calculator" category="Financial Planning" />
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
