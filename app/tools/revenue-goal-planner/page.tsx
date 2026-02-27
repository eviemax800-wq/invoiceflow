import type { Metadata } from 'next';
import Link from 'next/link';
import RevenueGoalPlanner from './RevenueGoalPlanner';
import RelatedTools from '../components/RelatedTools';
import EmailCapture from '../components/EmailCapture';
import BreadcrumbSchema from '../components/BreadcrumbSchema';

const title = 'Freelance Revenue Goal Planner Australia | Free Income Calculator — InvoiceFlow';
const description =
  'Free revenue goal planner for Australian freelancers. Break your annual income target into monthly, weekly, and daily billing targets. Factor in tax, super, expenses, and leave.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'freelance revenue goal planner',
    'freelance income calculator australia',
    'annual revenue target calculator',
    'freelance billing target calculator',
    'how much to bill freelancer australia',
    'freelance income goal setting',
    'freelancer revenue calculator',
  ],
  openGraph: {
    title: 'Freelance Revenue Goal Planner — Free Tool | InvoiceFlow',
    description:
      'Break your annual income goal into actionable billing targets. Accounts for tax, super, expenses, and leave. Free for Australian freelancers.',
    url: 'https://www.invoiceflow.au/tools/revenue-goal-planner',
    siteName: 'InvoiceFlow',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Freelance Revenue Goal Planner — Free Tool | InvoiceFlow',
    description:
      'How much do you really need to bill to hit your income goal? Free Australian freelance revenue planner.',
  },
  alternates: {
    canonical: 'https://www.invoiceflow.au/tools/revenue-goal-planner',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Freelance Revenue Goal Planner Australia',
  description:
    'Break your annual income goal into actionable monthly, weekly, and daily billing targets. Accounts for tax, super, expenses, and leave.',
  url: 'https://www.invoiceflow.au/tools/revenue-goal-planner',
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

export default function RevenueGoalPlannerPage() {
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
              Annual <span className="gradient-text">Revenue Goal</span> Planner
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Turn your income goal into a concrete billing plan. Find out exactly how much you need
              to bill each month, week, and day — after accounting for tax, super, expenses, leave,
              and non-billable time.
            </p>
          </div>

          {/* Calculator */}
          <RevenueGoalPlanner />

          {/* SEO Content Sections */}
          <section className="mt-16 space-y-12">
            {/* How to Set Freelance Income Goals */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                How to Set Freelance Income Goals
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Most freelancers set income goals the wrong way — they pick a round number and hope
                  for the best. Smart goal-setting starts with understanding the gap between what you
                  want to <em>take home</em> and what you need to <em>bill</em>. Here are the three
                  most common mistakes:
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Not Accounting for Tax</h4>
                    <p className="text-sm">
                      If you want $100,000 in your pocket, you need to earn significantly more than
                      $100K in revenue. Income tax plus the Medicare levy can consume 25-35% of your
                      income depending on your bracket. Your revenue goal must include the tax you owe
                      on that revenue.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Ignoring Leave and Downtime</h4>
                    <p className="text-sm">
                      You won&apos;t bill 52 weeks per year. Between annual leave, sick days, public
                      holidays, and client gaps, most freelancers have 44-46 billable weeks. Setting
                      targets based on 52 weeks means you&apos;ll fall short every single year.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Setting Goals on Gross, Not Net</h4>
                    <p className="text-sm">
                      A $150K revenue year sounds impressive until you subtract $25K in tax, $17K in
                      super, $15K in expenses, and $3K in Medicare levy. Your actual take-home is
                      closer to $90K. Always start with the net number you want and work backwards.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Forgetting Super Contributions</h4>
                    <p className="text-sm">
                      Unlike employees, nobody pays your superannuation for you. At 11.5%, that&apos;s
                      a significant chunk of revenue that needs to come from your billings. Skipping
                      super to hit a revenue target is just borrowing from your future self.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* The Revenue Math */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                The Revenue Math Most Freelancers Get Wrong
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  There&apos;s a reason so many freelancers feel like they&apos;re working hard but
                  not getting ahead. The gap between what you want to earn and what you need to bill
                  is much larger than most people expect.
                </p>
                <div className="bg-gradient-to-r from-teal-500/10 to-blue-500/10 border border-teal-500/20 rounded-xl p-6 my-6">
                  <p className="text-sm text-teal-400 mb-3">Example: $100K Take-Home Goal</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Take-home goal</span>
                      <span className="text-white font-medium">$100,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>+ Income tax (on ~$155K taxable)</span>
                      <span className="text-rose-400">~$37,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>+ Medicare levy</span>
                      <span className="text-amber-400">~$3,100</span>
                    </div>
                    <div className="flex justify-between">
                      <span>+ Super contributions (11.5%)</span>
                      <span className="text-blue-400">~$17,800</span>
                    </div>
                    <div className="flex justify-between">
                      <span>+ Business expenses</span>
                      <span className="text-purple-400">~$12,000</span>
                    </div>
                    <hr className="border-white/10 my-2" />
                    <div className="flex justify-between text-white font-bold text-base">
                      <span>Gross revenue needed</span>
                      <span className="text-teal-400">~$170,000</span>
                    </div>
                  </div>
                </div>
                <p>
                  That&apos;s a <strong className="text-white">70% uplift</strong> from your
                  take-home goal to your billing target. And this is before accounting for
                  non-billable time — if 25% of your week is spent on admin, marketing, and quoting,
                  you need to earn that $170K in just 75% of your working hours.
                </p>
                <p>
                  This is why the calculator above is so important. Guessing your revenue target
                  almost always leads to undercharging or overworking. Use the{' '}
                  <Link href="/tools/rate-calculator" className="text-teal-400 hover:underline">
                    Rate Calculator
                  </Link>{' '}
                  to find the hourly rate that supports your goals, and the{' '}
                  <Link href="/tools/billable-hours-calculator" className="text-teal-400 hover:underline">
                    Billable Hours Calculator
                  </Link>{' '}
                  to understand your true capacity.
                </p>
              </div>
            </div>

            {/* 5 Ways to Close the Rate Gap */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                5 Ways to Close the Rate Gap
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  If the calculator shows your required hourly rate is higher than what you&apos;re
                  currently charging, don&apos;t panic. Here are five practical strategies to close
                  that gap:
                </p>
                <ol className="space-y-4 list-decimal list-inside">
                  <li>
                    <strong className="text-white">Raise your prices.</strong> This is the most
                    direct lever. If you&apos;re charging $80/hr but need $110/hr, start quoting
                    $110 for new clients immediately. Most freelancers undercharge because they set
                    rates early and never revisit them. Your existing clients can be moved up
                    gradually — 10-15% per year is standard.
                  </li>
                  <li>
                    <strong className="text-white">Reduce non-billable time.</strong> Every hour
                    spent on admin is an hour not earning revenue. Automate invoicing with{' '}
                    <Link href="/signup" className="text-teal-400 hover:underline">
                      InvoiceFlow
                    </Link>
                    , batch your marketing, use templates for proposals, and block your calendar for
                    deep work. Moving from 75% to 85% utilisation can close a significant rate gap.
                  </li>
                  <li>
                    <strong className="text-white">Cut unnecessary expenses.</strong> Audit every
                    subscription and overhead line item. Do you actually need that $99/month tool?
                    Can you work from home instead of renting a co-working desk? Reducing expenses
                    by $5,000/year directly lowers your required billing rate.
                  </li>
                  <li>
                    <strong className="text-white">Increase your working hours (temporarily).</strong>{' '}
                    This isn&apos;t sustainable long-term, but if you&apos;re building toward a
                    higher rate, putting in a few extra billable hours per week for 6-12 months can
                    bridge the gap while you grow your client base at better rates.
                  </li>
                  <li>
                    <strong className="text-white">Add passive or recurring income.</strong>{' '}
                    Productise your expertise — create templates, courses, or retainer packages that
                    generate income without trading hours. Even $1,000/month in passive income
                    reduces the pressure on your hourly billing significantly.
                  </li>
                </ol>
                <p className="text-sm mt-4">
                  Use the{' '}
                  <Link href="/tools/cashflow-forecast" className="text-teal-400 hover:underline">
                    Cash Flow Forecast
                  </Link>{' '}
                  tool to model how these changes would affect your income over the coming months.
                </p>
              </div>
            </div>

            {/* Quarterly Check-In Template */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Quarterly Check-In Template
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Setting an annual goal is only useful if you track progress against it. Every
                  quarter, sit down for 30 minutes and answer these questions honestly:
                </p>
                <div className="bg-white/5 rounded-xl p-5 space-y-4 mt-4">
                  <div>
                    <h4 className="text-white font-semibold mb-1">Revenue vs Target</h4>
                    <p className="text-sm">
                      Am I on track for my annual revenue target? Compare actual billings for the
                      quarter against your quarterly target (annual target / 4). If you&apos;re
                      behind, calculate the adjusted monthly target for the remaining months.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Rate Effectiveness</h4>
                    <p className="text-sm">
                      What was my effective hourly rate this quarter? Divide total revenue by total
                      hours worked (not just billable hours). If this number is below your required
                      rate, something needs to change.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Utilisation Rate</h4>
                    <p className="text-sm">
                      What percentage of my available hours were actually billable? If utilisation
                      dropped below your target, identify the cause — was it client gaps, scope
                      creep, or too much admin?
                    </p>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Expense Review</h4>
                    <p className="text-sm">
                      Are my actual expenses in line with what I budgeted? Any new recurring costs
                      that weren&apos;t planned? Any subscriptions I can cut? Use the{' '}
                      <Link href="/tools/expense-deduction-calculator" className="text-teal-400 hover:underline">
                        Expense Deduction Calculator
                      </Link>{' '}
                      to check deductibility.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Pipeline Health</h4>
                    <p className="text-sm">
                      Do I have enough confirmed or likely work to hit next quarter&apos;s target?
                      If not, increase marketing and outreach now — don&apos;t wait until the gap
                      hits. A healthy pipeline covers at least 60% of next quarter&apos;s target.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Goal Adjustment</h4>
                    <p className="text-sm">
                      Has anything changed — new expenses, lifestyle changes, market shifts — that
                      means your annual goal needs updating? Re-run the planner above with current
                      numbers to recalibrate.
                    </p>
                  </div>
                </div>
                <p className="text-sm mt-2">
                  Block 30 minutes in your calendar at the start of each quarter. Treat it like a
                  board meeting for your business — because that&apos;s exactly what it is.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-16 text-center glass rounded-2xl p-10">
            <h3 className="text-3xl font-bold text-white heading-font mb-4">
              Ready to <span className="gradient-text">hit your revenue goal?</span>
            </h3>
            <p className="text-slate-300 max-w-xl mx-auto mb-6">
              InvoiceFlow helps you send professional invoices, track payments, and monitor your
              cash flow in real time — so you always know where you stand against your annual target.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/signup"
                className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold hover:opacity-90 transition-opacity"
              >
                Start Free — 5 Invoices/Month
              </Link>
              <Link
                href="/tools/rate-calculator"
                className="inline-block px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all"
              >
                Try the Rate Calculator
              </Link>
            </div>
          </section>
        
        <RelatedTools currentSlug="revenue-goal-planner" category="Financial Planning" />
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
