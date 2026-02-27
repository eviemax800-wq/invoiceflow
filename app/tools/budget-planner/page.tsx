import type { Metadata } from 'next';
import Link from 'next/link';
import BudgetPlanner from './BudgetPlanner';
import RelatedTools from '../components/RelatedTools';
import EmailCapture from '../components/EmailCapture';

const title = 'Freelance Budget Planner Australia | Free Tool — InvoiceFlow';
const description =
  'Free budget planner for Australian freelancers with irregular income. Calculate tax reserves, emergency funds, and monthly budget allocations. Designed for sole traders and contractors.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'freelance budget planner',
    'freelancer budget calculator',
    'irregular income budget',
    'sole trader budget australia',
    'freelance financial planning',
    'contractor budget planner',
    'self employed budget tool',
    'freelance tax reserve calculator',
    'emergency fund calculator freelancer',
    'freelance money management',
    'variable income budgeting',
    'australian freelancer budget',
  ],
  openGraph: {
    title: 'Freelance Budget Planner — Free Tool | InvoiceFlow',
    description:
      'Budget for irregular freelance income. Tax reserves, emergency fund, monthly allocations.',
    url: 'https://www.invoiceflow.au/tools/budget-planner',
    siteName: 'InvoiceFlow',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Freelance Budget Planner — Free Tool | InvoiceFlow',
    description:
      'Plan your freelance budget with irregular income. Free Australian tool.',
  },
  alternates: {
    canonical: 'https://www.invoiceflow.au/tools/budget-planner',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Freelance Budget Planner',
  description:
    'Budget planner for Australian freelancers with irregular income. Calculate tax reserves, emergency fund targets, and monthly budget allocations.',
  url: 'https://www.invoiceflow.au/tools/budget-planner',
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

export default function BudgetPlannerPage() {
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
              Freelance Budget{' '}
              <span className="gradient-text">Planner</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Budget smarter with irregular income. Calculate your tax reserves, build an emergency
              fund, and see exactly where every dollar goes. Built specifically for Australian
              freelancers, contractors, and sole traders.
            </p>
          </div>

          {/* Calculator */}
          <BudgetPlanner />

          {/* SEO Content Sections */}
          <section className="mt-16 space-y-12">
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Why Freelancers Need a Different Budget
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Traditional budgeting advice assumes a{' '}
                  <strong className="text-white">steady, predictable salary</strong> hitting your
                  account every fortnight. But as a freelancer, your income can swing wildly from
                  month to month. One month you might invoice $15,000, the next just $3,000. Standard
                  budgeting tools break down immediately.
                </p>
                <p>
                  Freelance budgeting requires a fundamentally different approach. You need to account
                  for <strong className="text-white">income variability</strong>, set aside tax and
                  super reserves from every payment (because the ATO won&apos;t do it for you), and
                  maintain a much larger emergency buffer than a salaried worker.
                </p>
                <div className="bg-white/5 rounded-xl p-4 mt-4">
                  <h4 className="text-white font-semibold mb-2">Key Differences</h4>
                  <ul className="text-sm space-y-1">
                    <li>No employer withholding tax — you must reserve it yourself</li>
                    <li>No paid leave — sick days and holidays come out of your buffer</li>
                    <li>Seasonal income fluctuations require a bigger emergency fund</li>
                    <li>Business expenses are intertwined with personal finances</li>
                    <li>Super contributions are your responsibility (no employer 11.5%)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                The 50/30/20 Rule Adapted for Freelancers
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  The classic 50/30/20 budget rule (50% needs, 30% wants, 20% savings) needs
                  significant adjustment for freelancers. After tax and super reserves, your
                  allocations should look more like:
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Salaried Worker</h4>
                    <ul className="text-sm space-y-2">
                      <li className="flex justify-between">
                        <span>Needs (essentials)</span>
                        <span className="text-white font-medium">50%</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Wants (lifestyle)</span>
                        <span className="text-white font-medium">30%</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Savings &amp; debt</span>
                        <span className="text-white font-medium">20%</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-teal-500/5 border border-teal-500/20 rounded-xl p-4">
                    <h4 className="text-teal-400 font-semibold mb-2">Freelancer (Recommended)</h4>
                    <ul className="text-sm space-y-2">
                      <li className="flex justify-between">
                        <span>Tax &amp; super reserve</span>
                        <span className="text-teal-400 font-medium">30-35%</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Essentials &amp; business</span>
                        <span className="text-teal-400 font-medium">35-40%</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Lifestyle</span>
                        <span className="text-teal-400 font-medium">15-20%</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Savings &amp; emergency fund</span>
                        <span className="text-teal-400 font-medium">10-15%</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                How Much Tax Should Freelancers Set Aside?
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  As a sole trader, you&apos;re responsible for paying your own income tax plus the
                  2% Medicare levy. The ATO uses a progressive tax system for 2024-25:
                </p>
                <div className="overflow-x-auto mt-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left text-white py-3 pr-4 font-semibold">Taxable Income</th>
                        <th className="text-left text-white py-3 font-semibold">Tax Rate</th>
                      </tr>
                    </thead>
                    <tbody className="text-slate-300">
                      <tr className="border-b border-white/5">
                        <td className="py-3 pr-4">$0 - $18,200</td>
                        <td className="py-3 text-emerald-400 font-medium">0%</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="py-3 pr-4">$18,201 - $45,000</td>
                        <td className="py-3 text-amber-400 font-medium">16%</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="py-3 pr-4">$45,001 - $135,000</td>
                        <td className="py-3 text-amber-400 font-medium">30%</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="py-3 pr-4">$135,001 - $190,000</td>
                        <td className="py-3 text-rose-400 font-medium">37%</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4">$190,001+</td>
                        <td className="py-3 text-rose-400 font-medium">45%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm mt-2">
                  <strong className="text-white">Rule of thumb:</strong> Most freelancers earning
                  $60K-$120K should set aside <strong className="text-teal-400">25-30%</strong> of
                  gross income for tax and Medicare levy. Higher earners ($120K+) should reserve
                  closer to <strong className="text-teal-400">30-35%</strong>. This calculator
                  estimates your reserve automatically based on your income.
                </p>
              </div>
            </div>

            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Building an Emergency Fund on Irregular Income
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  An emergency fund is even more critical for freelancers than employees. With no
                  employer safety net, you need a buffer to cover dry spells, unexpected expenses,
                  and slow payment cycles.
                </p>
                <div className="grid sm:grid-cols-3 gap-4 mt-4">
                  <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-emerald-400">3 months</p>
                    <p className="text-sm text-slate-400 mt-1">Minimum target</p>
                    <p className="text-xs text-slate-500">Stable clients, low variability</p>
                  </div>
                  <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-amber-400">4-5 months</p>
                    <p className="text-sm text-slate-400 mt-1">Recommended</p>
                    <p className="text-xs text-slate-500">Moderate income swings</p>
                  </div>
                  <div className="bg-teal-500/10 border border-teal-500/20 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-teal-400">6 months</p>
                    <p className="text-sm text-slate-400 mt-1">Ideal buffer</p>
                    <p className="text-xs text-slate-500">Highly variable or seasonal work</p>
                  </div>
                </div>
                <ol className="space-y-3 list-decimal list-inside mt-4">
                  <li>
                    <strong className="text-white">Start with one month.</strong> Calculate your
                    minimum monthly essentials and aim to have that saved first. Even one
                    month&apos;s buffer dramatically reduces financial stress.
                  </li>
                  <li>
                    <strong className="text-white">Save on good months.</strong> When income exceeds
                    your average, route the surplus directly into your emergency fund before
                    increasing lifestyle spending.
                  </li>
                  <li>
                    <strong className="text-white">Keep it separate.</strong> Use a dedicated
                    high-interest savings account for your emergency fund. Out of sight, out of the
                    spending temptation.
                  </li>
                  <li>
                    <strong className="text-white">Replenish immediately.</strong> If you dip into
                    your emergency fund, make rebuilding it your top savings priority until it&apos;s
                    back to target.
                  </li>
                </ol>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-16 text-center glass rounded-2xl p-10">
            <h3 className="text-3xl font-bold text-white heading-font mb-4">
              Stay on top of your <span className="gradient-text">freelance finances</span>
            </h3>
            <p className="text-slate-300 max-w-xl mx-auto mb-6">
              InvoiceFlow tracks every invoice, payment, and expense so you always know your real
              income. Automatic GST calculations, BAS prep, and real-time dashboards make
              budgeting effortless.
            </p>
            <Link
              href="/signup"
              className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold hover:opacity-90 transition-opacity"
            >
              Start Free — 5 Invoices/Month
            </Link>
          </section>
        
        <RelatedTools currentSlug="budget-planner" category="Financial Planning" />
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
