import type { Metadata } from 'next';
import Link from 'next/link';
import SavingsGoalClient from './SavingsGoalClient';
import RelatedTools from '../components/RelatedTools';

const title = 'Free Savings Goal Calculator for Freelancers | InvoiceFlow';
const description =
  'Free savings goal calculator for Australian freelancers. Plan multiple savings goals, set priorities, track progress, and calculate how many extra billable hours you need. Built for sole traders and contractors.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'freelance savings calculator',
    'savings goal planner',
    'freelancer financial goals',
    'freelance savings goal calculator',
    'savings goal tracker',
    'freelancer savings plan',
    'australian freelancer savings',
    'sole trader savings goals',
    'emergency fund calculator freelancer',
    'freelance financial planning',
    'savings priority planner',
    'contractor savings calculator',
  ],
  openGraph: {
    title: 'Freelance Savings Goal Calculator — Free Tool | InvoiceFlow',
    description:
      'Plan and track multiple savings goals with priority-based allocation. Built for Australian freelancers.',
    url: 'https://www.invoiceflow.au/tools/savings-goal-calculator',
    siteName: 'InvoiceFlow',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Freelance Savings Goal Calculator — Free Tool | InvoiceFlow',
    description:
      'Plan multiple savings goals with priority allocation. Free tool for Australian freelancers.',
  },
  alternates: {
    canonical: 'https://www.invoiceflow.au/tools/savings-goal-calculator',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Freelance Savings Goal Calculator',
  description:
    'Savings goal calculator for Australian freelancers. Plan multiple goals, set priority-based allocation, track progress, and calculate extra billable hours needed to reach targets faster.',
  url: 'https://www.invoiceflow.au/tools/savings-goal-calculator',
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

export default function SavingsGoalCalculatorPage() {
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
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/tools" className="hover:text-white transition-colors">Free Tools</Link>
            <span>/</span>
            <span className="text-slate-300">Savings Goal Calculator</span>
          </nav>

          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-teal-500/10 border border-teal-500/20 rounded-full mb-6">
              <div className="w-2 h-2 bg-teal-400 rounded-full" />
              <span className="text-teal-400 text-sm font-medium">100% Free</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white heading-font mb-4">
              Savings Goal{' '}
              <span className="gradient-text">Calculator</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Plan multiple savings goals with priority-based allocation. See exactly how long each
              goal will take, how much to save per month, and how many extra billable hours you need
              to reach your targets faster. Built for Australian freelancers and sole traders.
            </p>
          </div>

          {/* Calculator */}
          <SavingsGoalClient />

          {/* SEO Content Sections */}
          <section className="mt-16 space-y-12">
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Financial Goal Setting for Freelancers
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  As a freelancer, your financial reality is fundamentally different from a salaried
                  employee. There is no employer-matched super, no paid sick leave, no annual leave
                  loading, and no predictable fortnightly pay cycle. Every dollar you save has to be
                  deliberately planned — because nobody is doing it for you.
                </p>
                <p>
                  Structured savings goals give your freelance income a{' '}
                  <strong className="text-white">purpose beyond just paying bills</strong>. When you
                  assign every surplus dollar to a specific goal — whether that is an emergency fund,
                  new equipment, or a home deposit — you stop spending reactively and start building
                  real financial security.
                </p>
                <div className="bg-white/5 rounded-xl p-4 mt-4">
                  <h4 className="text-white font-semibold mb-2">Why Freelancers Need Structured Savings</h4>
                  <ul className="text-sm space-y-1.5">
                    <li>
                      <strong className="text-teal-400">Irregular income</strong> — you cannot rely on
                      a set amount hitting your account each fortnight
                    </li>
                    <li>
                      <strong className="text-teal-400">No employer super match</strong> — the 11.5%
                      SG contribution that employees receive is entirely your responsibility
                    </li>
                    <li>
                      <strong className="text-teal-400">No paid leave</strong> — sick days, holidays,
                      and downtime all come out of your savings buffer
                    </li>
                    <li>
                      <strong className="text-teal-400">Tax obligations</strong> — quarterly BAS
                      lodgements and annual tax bills require dedicated reserves
                    </li>
                    <li>
                      <strong className="text-teal-400">Business reinvestment</strong> — equipment
                      upgrades, courses, and growth all need to be self-funded
                    </li>
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
                  The traditional 50/30/20 rule (50% needs, 30% wants, 20% savings) is a starting
                  point, but freelancers need to rethink these allocations. With tax obligations, super
                  contributions, and business expenses, the split looks more like:
                </p>
                <div className="grid sm:grid-cols-3 gap-4 mt-4">
                  <div className="bg-blue-500/5 border border-blue-500/20 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-blue-400">50%</p>
                    <p className="text-sm text-white font-medium mt-1">Essentials</p>
                    <p className="text-xs text-slate-500 mt-1">
                      Rent, bills, groceries, insurance, transport — your non-negotiable living costs
                    </p>
                  </div>
                  <div className="bg-amber-500/5 border border-amber-500/20 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-amber-400">30%</p>
                    <p className="text-sm text-white font-medium mt-1">Tax + Super</p>
                    <p className="text-xs text-slate-500 mt-1">
                      Income tax reserve, Medicare levy, voluntary super contributions
                    </p>
                  </div>
                  <div className="bg-teal-500/5 border border-teal-500/20 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-teal-400">20%</p>
                    <p className="text-sm text-white font-medium mt-1">Savings + Growth</p>
                    <p className="text-xs text-slate-500 mt-1">
                      Emergency fund, equipment, courses, holiday fund, business reinvestment
                    </p>
                  </div>
                </div>
                <p className="text-sm mt-2">
                  <strong className="text-white">The key shift:</strong> salaried workers can allocate 30%
                  to &ldquo;wants&rdquo; because their employer handles tax and super. As a freelancer, that 30%
                  needs to go to tax reserves and super first — lifestyle spending comes from what remains
                  after your obligations are covered.
                </p>
              </div>
            </div>

            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Priority-Based Savings Allocation
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Not all savings goals are equal. When you have limited surplus each month, you need a
                  system to decide where the money goes first. Priority-based allocation ensures your
                  most critical goals get funded before nice-to-haves.
                </p>
                <div className="space-y-3 mt-4">
                  <div className="bg-teal-500/5 border border-teal-500/20 rounded-xl p-4">
                    <h4 className="text-teal-400 font-semibold mb-1">High Priority (60% of savings)</h4>
                    <p className="text-sm">
                      Financial safety nets and obligations — emergency fund, tax reserve, critical
                      equipment replacements. These protect your ability to keep freelancing.
                    </p>
                  </div>
                  <div className="bg-amber-500/5 border border-amber-500/20 rounded-xl p-4">
                    <h4 className="text-amber-400 font-semibold mb-1">Medium Priority (30% of savings)</h4>
                    <p className="text-sm">
                      Growth and improvement goals — business investment, education, home deposit. These
                      improve your long-term position but are not immediately urgent.
                    </p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <h4 className="text-slate-400 font-semibold mb-1">Low Priority (10% of savings)</h4>
                    <p className="text-sm">
                      Lifestyle and aspirational goals — holidays, luxury purchases, passion projects.
                      Important for wellbeing, but only funded once higher priorities are covered.
                    </p>
                  </div>
                </div>
                <p className="text-sm mt-2">
                  The allocation percentages are fully adjustable in the calculator above. The 60/30/10
                  default is a sensible starting point, but you should adjust based on your personal
                  situation and how close each goal is to completion.
                </p>
              </div>
            </div>

            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                5 Savings Goals Every Australian Freelancer Should Have
              </h2>
              <div className="space-y-4 text-slate-300">
                <ol className="space-y-4 list-decimal list-inside">
                  <li>
                    <strong className="text-white">Emergency Fund ($15K-$30K)</strong>
                    <p className="text-sm mt-1 ml-5">
                      Your financial lifeline. Covers 3-6 months of essential expenses when clients dry
                      up, you get sick, or unexpected costs hit. This should be your first priority as a
                      freelancer — before investing, before upgrades, before holidays.
                    </p>
                  </li>
                  <li>
                    <strong className="text-white">Tax Reserve ($5K-$15K)</strong>
                    <p className="text-sm mt-1 ml-5">
                      A dedicated fund for your ATO obligations. Set aside 25-30% of every invoice into
                      a separate high-interest savings account. Never mix tax money with spending money.
                      This prevents the dreaded tax-time scramble.
                    </p>
                  </li>
                  <li>
                    <strong className="text-white">Super Top-Up ($5K-$10K/year)</strong>
                    <p className="text-sm mt-1 ml-5">
                      As a sole trader, no employer is contributing 11.5% to your super. Make voluntary
                      contributions to close the gap — these are tax-deductible up to $30,000 per year
                      and compound significantly over your working life.
                    </p>
                  </li>
                  <li>
                    <strong className="text-white">Equipment Fund ($2K-$5K)</strong>
                    <p className="text-sm mt-1 ml-5">
                      Laptops, cameras, software licences, office furniture — your tools wear out and
                      need replacing. A rolling equipment fund means you can upgrade proactively rather
                      than scrambling when something breaks mid-project.
                    </p>
                  </li>
                  <li>
                    <strong className="text-white">Growth Fund ($3K-$10K)</strong>
                    <p className="text-sm mt-1 ml-5">
                      Courses, certifications, conference tickets, mentorship programs, marketing
                      campaigns. Investing in your skills and visibility is how freelancers increase
                      their rates over time. Budget for at least one significant upskill per year.
                    </p>
                  </li>
                </ol>
              </div>
            </div>

            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                How to Save When Income Is Irregular
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  The biggest challenge freelancers face with savings is income variability. A fixed
                  savings amount per month does not work when your income swings between $3,000 and
                  $15,000. Instead, use one of these two approaches:
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-teal-500/5 border border-teal-500/20 rounded-xl p-4">
                    <h4 className="text-teal-400 font-semibold mb-2">Percentage-Based (Recommended)</h4>
                    <p className="text-sm">
                      Save a fixed percentage of every invoice — typically 15-25% of gross income. High
                      months generate more savings automatically, and low months contribute less without
                      creating financial stress.
                    </p>
                    <div className="bg-white/5 rounded-lg p-3 mt-3">
                      <p className="text-xs">
                        <strong className="text-white">Example:</strong> 20% savings rate on a $10K month
                        = $2,000 saved. On a $4K month = $800 saved. Both are proportional and sustainable.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Baseline + Surplus Method</h4>
                    <p className="text-sm">
                      Set a minimum monthly savings amount (e.g., $500) that you commit to regardless of
                      income. When income exceeds your average, save the entire surplus above your baseline
                      living costs.
                    </p>
                    <div className="bg-white/5 rounded-lg p-3 mt-3">
                      <p className="text-xs">
                        <strong className="text-white">Example:</strong> Baseline costs = $5K. On a $12K month,
                        save $7K above baseline. On a $5.5K month, save the $500 minimum.
                      </p>
                    </div>
                  </div>
                </div>
                <p className="text-sm mt-2">
                  <strong className="text-white">Pro tip:</strong> Automate your savings on invoice payment.
                  When a client payment clears, immediately transfer the savings percentage to a separate
                  account before you have a chance to spend it.
                </p>
              </div>
            </div>

            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Emergency Fund Benchmarks for Freelancers
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Your emergency fund is the foundation of financial security as a freelancer. Unlike
                  employees who might need 2-3 months of expenses saved, freelancers face more risk
                  and need a larger buffer:
                </p>
                <div className="grid sm:grid-cols-3 gap-4 mt-4">
                  <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-amber-400">3 months</p>
                    <p className="text-sm text-white font-medium mt-1">Minimum</p>
                    <p className="text-xs text-slate-500 mt-1">
                      Bare minimum for freelancers with stable retainer clients and predictable income
                    </p>
                  </div>
                  <div className="bg-teal-500/10 border border-teal-500/20 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-teal-400">6 months</p>
                    <p className="text-sm text-white font-medium mt-1">Ideal</p>
                    <p className="text-xs text-slate-500 mt-1">
                      Recommended for most freelancers — covers client loss, illness, and seasonal dips
                    </p>
                  </div>
                  <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-emerald-400">12 months</p>
                    <p className="text-sm text-white font-medium mt-1">Bulletproof</p>
                    <p className="text-xs text-slate-500 mt-1">
                      For freelancers in volatile industries, single-client dependencies, or high-cost cities
                    </p>
                  </div>
                </div>
                <p className="text-sm mt-2">
                  Calculate your emergency fund target based on your{' '}
                  <strong className="text-white">essential monthly expenses</strong> — rent, utilities,
                  insurance, food, transport, and minimum business costs. Lifestyle spending is excluded
                  from this calculation because you would cut discretionary spending in an actual emergency.
                </p>
                <div className="bg-white/5 rounded-xl p-4 mt-2">
                  <h4 className="text-white font-semibold mb-2">Where to Keep Your Emergency Fund</h4>
                  <ul className="text-sm space-y-1.5">
                    <li>A <strong className="text-teal-400">high-interest savings account</strong> with instant access — not locked in a term deposit</li>
                    <li><strong className="text-teal-400">Separate from your everyday account</strong> — remove the temptation to dip into it for non-emergencies</li>
                    <li>Consider offset accounts if you have a mortgage — <strong className="text-teal-400">earn effective interest</strong> while maintaining liquidity</li>
                    <li><strong className="text-teal-400">Never invest</strong> your emergency fund in shares or crypto — it needs to be risk-free and instantly accessible</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-16 text-center glass rounded-2xl p-10">
            <h3 className="text-3xl font-bold text-white heading-font mb-4">
              Track your income and plan savings with{' '}
              <span className="gradient-text">InvoiceFlow</span>
            </h3>
            <p className="text-slate-300 max-w-xl mx-auto mb-6">
              InvoiceFlow tracks every invoice, payment, and expense so you always know your real
              income and savings capacity. Automatic GST calculations, real-time dashboards, and
              financial insights make goal-based saving effortless for Australian freelancers.
            </p>
            <Link
              href="/signup"
              className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold hover:opacity-90 transition-opacity"
            >
              Start Free — 5 Invoices/Month
            </Link>
          </section>
        
        <RelatedTools currentSlug="savings-goal-calculator" category="Financial Planning" />
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
