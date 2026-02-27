import type { Metadata } from 'next';
import Link from 'next/link';
import ProjectROICalculator from './ProjectROICalculator';
import RelatedTools from '../components/RelatedTools';
import EmailCapture from '../components/EmailCapture';

const title = 'Project ROI Calculator Australia | Free Freelance Profitability Tool — InvoiceFlow';
const description =
  'Calculate the real return on investment for freelance projects. Compare profitability across multiple projects, uncover hidden costs, and find your most profitable project types. Free Australian freelance ROI calculator.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'project ROI calculator',
    'freelance project profitability',
    'freelance ROI calculator',
    'was this project worth it calculator',
    'project profitability calculator',
    'freelance profit calculator',
    'effective hourly rate calculator',
    'project return on investment',
    'freelance opportunity cost',
    'project comparison tool',
  ],
  openGraph: {
    title: 'Project ROI Calculator — Free Tool | InvoiceFlow',
    description:
      'Was that project actually worth it? Calculate the real ROI for freelance projects and find your most profitable work.',
    url: 'https://www.invoiceflow.au/tools/project-roi-calculator',
    siteName: 'InvoiceFlow',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Project ROI Calculator — Free Tool | InvoiceFlow',
    description:
      'Calculate the real return on investment for freelance projects. Compare profitability and uncover hidden costs.',
  },
  alternates: {
    canonical: 'https://www.invoiceflow.au/tools/project-roi-calculator',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Project ROI Calculator',
  description:
    'Calculate the real return on investment for freelance projects. Compare profitability across multiple projects, uncover hidden costs, and find your most profitable project types.',
  url: 'https://www.invoiceflow.au/tools/project-roi-calculator',
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

export default function ProjectROICalculatorPage() {
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
              Project ROI{' '}
              <span className="gradient-text">Calculator</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Was that project actually worth it? Enter your freelance projects to calculate real
              ROI, compare profitability side-by-side, and discover which project types earn you the
              most per hour. Stop guessing — start measuring.
            </p>
          </div>

          {/* Calculator */}
          <ProjectROICalculator />

          {/* SEO Content Sections */}
          <section className="mt-16 space-y-12">
            {/* Section 1: Why Freelancers Should Calculate Project ROI */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Why Freelancers Should Calculate Project ROI
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  <strong className="text-white">Most freelancers know their revenue but have no idea about
                  their true profitability.</strong> A $10,000 project sounds great — until you realise you
                  spent 200 hours on it, paid $1,500 in subcontractor fees, and the effective hourly rate
                  ended up being $42.50. That same time spent on smaller, leaner projects might have
                  earned you $120/hour.
                </p>
                <p>
                  The 80/20 rule hits freelancers hard: roughly 80% of your profit typically comes from
                  20% of your projects. The problem is that without calculating ROI, you can&apos;t identify
                  which 20% that is. You end up saying yes to everything and wondering why you&apos;re
                  working 60-hour weeks but barely getting ahead.
                </p>
                <p>
                  Calculating project ROI forces you to confront the hidden costs — the unpaid revision
                  rounds, the scope creep you absorbed, the admin hours you never tracked. Once you see
                  the real numbers, you can make smarter decisions about which projects to pursue, which
                  clients to prioritise, and when to raise your rates.
                </p>
                <div className="bg-white/5 rounded-xl p-4 mt-4">
                  <h4 className="text-white font-semibold mb-2">The ROI Reality Check</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-teal-400 mt-0.5">1.</span>
                      <span>Revenue is vanity, profit is sanity — track what you actually keep</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-400 mt-0.5">2.</span>
                      <span>Your effective hourly rate is almost always lower than you think</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-400 mt-0.5">3.</span>
                      <span>The &ldquo;easy&rdquo; project with endless revisions often has the worst ROI</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-400 mt-0.5">4.</span>
                      <span>Knowing your ROI per project type transforms how you price and sell</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 2: How to Calculate Freelance Project ROI */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                How to Calculate Freelance Project ROI
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  The <strong className="text-white">Return on Investment (ROI)</strong> formula is simple
                  in theory but powerful in practice. For freelancers, the key is understanding that your
                  investment isn&apos;t just the money you spent — it&apos;s also the time you invested and the
                  opportunity cost of not doing something else.
                </p>
                <div className="bg-white/5 rounded-xl p-4 mt-4">
                  <h4 className="text-white font-semibold mb-2">The Formula</h4>
                  <p className="text-sm font-mono text-teal-400 mb-2">
                    ROI = (True Profit / Total Investment) x 100
                  </p>
                  <p className="text-sm mb-3">Where:</p>
                  <ul className="space-y-1 text-sm">
                    <li><strong className="text-white">True Profit</strong> = Revenue - Direct Costs - Opportunity Cost of Non-Billable Hours</li>
                    <li><strong className="text-white">Total Investment</strong> = Direct Costs + (Total Hours x Your Hourly Rate)</li>
                    <li><strong className="text-white">Opportunity Cost</strong> = Non-Billable Hours x Your Hourly Rate</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-4 mt-4">
                  <h4 className="text-white font-semibold mb-2">Worked Example</h4>
                  <p className="text-sm mb-2">
                    You complete a website project for $8,000. You spent 60 billable hours and 15
                    non-billable hours (meetings, revisions, admin). Direct costs were $500 for stock
                    photos and a premium plugin. Your hourly rate is $120.
                  </p>
                  <ul className="space-y-1 text-sm font-mono text-slate-400">
                    <li>Opportunity Cost = 15 x $120 = $1,800</li>
                    <li>True Profit = $8,000 - $500 - $1,800 = $5,700</li>
                    <li>Total Investment = $500 + (75 x $120) = $9,500</li>
                    <li className="text-teal-400">ROI = ($5,700 / $9,500) x 100 = 60%</li>
                    <li className="text-teal-400">Effective Rate = $8,000 - $500 / 75 hours = $100/hr</li>
                  </ul>
                  <p className="text-sm mt-2 text-slate-400">
                    Not bad — but those 15 non-billable hours cost you $1,800 in opportunity cost.
                    Tighter scope management could have pushed ROI above 100%.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3: The Hidden Costs Every Freelancer Forgets */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                The Hidden Costs Every Freelancer Forgets
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Revenue looks great on the invoice, but true profitability requires accounting for
                  every cost — visible and invisible. Here are the eight hidden costs that silently
                  erode your project ROI:
                </p>
                <div className="overflow-x-auto mt-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left text-white py-3 pr-4 font-semibold">Hidden Cost</th>
                        <th className="text-left text-white py-3 pr-4 font-semibold">What It Looks Like</th>
                        <th className="text-left text-white py-3 font-semibold">Typical Impact</th>
                      </tr>
                    </thead>
                    <tbody className="text-slate-300">
                      <tr className="border-b border-white/5">
                        <td className="py-3 pr-4 font-medium text-white">Scope Creep</td>
                        <td className="py-3 pr-4">&ldquo;Can you just add one more thing?&rdquo;</td>
                        <td className="py-3 text-rose-400 font-medium">10-40% extra hours</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="py-3 pr-4 font-medium text-white">Revision Rounds</td>
                        <td className="py-3 pr-4">Unlimited revisions in the contract</td>
                        <td className="py-3 text-rose-400 font-medium">15-25% extra hours</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="py-3 pr-4 font-medium text-white">Admin Time</td>
                        <td className="py-3 pr-4">Invoicing, file management, project setup</td>
                        <td className="py-3 text-amber-400 font-medium">5-10% of project time</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="py-3 pr-4 font-medium text-white">Communication Overhead</td>
                        <td className="py-3 pr-4">Emails, Slack, calls, status updates</td>
                        <td className="py-3 text-amber-400 font-medium">10-20% of project time</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="py-3 pr-4 font-medium text-white">Tool Costs</td>
                        <td className="py-3 pr-4">Software, subscriptions, hosting for dev</td>
                        <td className="py-3 text-amber-400 font-medium">$50-$500 per project</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="py-3 pr-4 font-medium text-white">Payment Delays</td>
                        <td className="py-3 pr-4">Net 30, 60, or &ldquo;cheque&apos;s in the mail&rdquo;</td>
                        <td className="py-3 text-amber-400 font-medium">Cash flow strain</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="py-3 pr-4 font-medium text-white">Tax on Revenue</td>
                        <td className="py-3 pr-4">GST, income tax, super contributions</td>
                        <td className="py-3 text-rose-400 font-medium">30-45% of gross</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-white">Unpaid Prep Time</td>
                        <td className="py-3 pr-4">Proposals, research, learning new tools</td>
                        <td className="py-3 text-amber-400 font-medium">5-15% of project time</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-slate-400 mt-2">
                  When you add these up, a project that looked profitable on paper can easily become a
                  break-even or even a loss. The solution isn&apos;t to avoid all costs — it&apos;s to track
                  them so you can price accordingly and set boundaries that protect your margins.
                </p>
              </div>
            </div>

            {/* Section 4: 5 Ways to Improve Your Project ROI */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                5 Ways to Improve Your Project ROI
              </h2>
              <div className="space-y-4 text-slate-300">
                <ol className="space-y-4 list-decimal list-inside">
                  <li>
                    <strong className="text-white">Raise your rates strategically.</strong> If your
                    effective hourly rate is consistently lower than your quoted rate, you&apos;re
                    undercharging. Use your ROI data to justify increases. A 20% rate increase on the
                    same work volume can double your profit margin.
                  </li>
                  <li>
                    <strong className="text-white">Reduce scope creep with a tight SOW.</strong> Define
                    deliverables, revision limits, and out-of-scope items in writing before starting.
                    Scope creep is the number one ROI killer — a clear Statement of Work is your best
                    defence. Use our{' '}
                    <a href="/tools/project-profitability" className="text-teal-400 hover:underline">
                      Project Profitability Calculator
                    </a>{' '}
                    to model different scope scenarios.
                  </li>
                  <li>
                    <strong className="text-white">Track your time obsessively.</strong> You can&apos;t
                    improve what you don&apos;t measure. Track every hour — billable and non-billable —
                    for at least 3 months. The data will surprise you and reveal exactly where your
                    profit leaks are.
                  </li>
                  <li>
                    <strong className="text-white">Say no to low-ROI project types.</strong> Once you
                    know which project types consistently deliver poor ROI, stop accepting them.
                    Redirect that capacity toward high-ROI work. It feels scary to turn down revenue,
                    but it&apos;s the single most powerful lever for improving profitability.
                  </li>
                  <li>
                    <strong className="text-white">Batch similar projects for efficiency.</strong> When
                    you do three website projects in a row, you build reusable templates, refine your
                    process, and reduce setup time. Batching can improve effective hourly rates by
                    20-40% compared to constantly context-switching between different project types.
                  </li>
                </ol>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-16 text-center glass rounded-2xl p-10">
            <h3 className="text-3xl font-bold text-white heading-font mb-4">
              Stop guessing. Start <span className="gradient-text">measuring</span>
            </h3>
            <p className="text-slate-300 max-w-xl mx-auto mb-6">
              InvoiceFlow tracks your project revenue, hours, and costs automatically — so you
              always know your real ROI. Professional invoicing with built-in profitability
              insights that help you earn more from every project.
            </p>
            <Link
              href="/signup"
              className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold hover:opacity-90 transition-opacity"
            >
              Start Free — 5 Invoices/Month
            </Link>
          </section>
        
        <RelatedTools currentSlug="project-roi-calculator" category="Business Analytics" />
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
