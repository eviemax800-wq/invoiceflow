import type { Metadata } from 'next';
import Link from 'next/link';
import ProfitFirstCalculator from './ProfitFirstCalculator';

const title =
  'Profit First Calculator | Free Income Allocation Calculator for Freelancers — InvoiceFlow';
const description =
  'Free Profit First calculator for Australian freelancers and sole traders. Allocate your revenue into Owner\'s Pay, Profit, Tax, OpEx, and Super using the Profit First methodology with ATO 2025-26 tax brackets. No signup required.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'profit first calculator freelancer',
    'profit first method australia',
    'income allocation calculator freelancer',
    'profit first percentages sole trader',
    'freelance income allocation calculator',
    'profit first system freelance business',
    'profit first bank accounts australia',
    'freelance revenue allocation calculator',
    'profit first methodology sole trader',
    'income splitting calculator freelancer australia',
    'profit first quarterly distribution calculator',
    'freelance profit allocation australia',
  ],
  openGraph: {
    title: 'Profit First Calculator — Free Income Allocation for Freelancers | InvoiceFlow',
    description:
      'Allocate your freelance income using the Profit First methodology. Calculate Owner\'s Pay, Profit, Tax, Super, and OpEx with Australian tax brackets. Free — no signup required.',
    url: 'https://www.invoiceflow.au/tools/profit-first-calculator',
    siteName: 'InvoiceFlow',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Profit First Calculator — Free Income Allocation for Freelancers | InvoiceFlow',
    description:
      'Allocate your freelance revenue using the Profit First method with ATO tax brackets and super. Free tool for Australian freelancers.',
  },
  alternates: {
    canonical: 'https://www.invoiceflow.au/tools/profit-first-calculator',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Profit First Calculator for Freelancers',
  description:
    'Allocate your freelance revenue using the Profit First methodology by Mike Michalowicz, adapted for Australian freelancers. Includes ATO 2025-26 tax bracket calculations, Medicare levy, superannuation, gap analysis between current and target allocations, quarterly profit distributions, and small-plate recommendations. Free — no signup required.',
  url: 'https://www.invoiceflow.au/tools/profit-first-calculator',
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

export default function ProfitFirstCalculatorPage() {
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
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-400/10 border border-green-400/20 rounded-full mb-6">
              <div className="w-2 h-2 bg-green-400 rounded-full" />
              <span className="text-green-400 text-sm font-medium">100% Free</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white heading-font mb-4">
              Profit First{' '}
              <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">Calculator</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Allocate your freelance revenue using the Profit First methodology. Calculate exactly how
              much to put into each bank account for Owner&apos;s Pay, Profit, Tax, Operating Expenses,
              and Super — with real ATO 2025-26 tax brackets built in.
            </p>
          </div>

          {/* Calculator Tool */}
          <ProfitFirstCalculator />

          {/* SEO Content Sections */}
          <section className="mt-16 space-y-12">
            {/* Section 1: What Is Profit First */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                What Is the Profit First Method for Freelancers?
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Profit First is a cash management methodology created by Mike Michalowicz that flips
                  the traditional accounting formula on its head. Instead of Revenue minus Expenses equals
                  Profit, Profit First uses Revenue minus Profit equals Expenses. The core idea is
                  deceptively simple: take your profit first, then figure out how to run your business on
                  what remains. For freelancers with irregular income, this approach provides a structural
                  framework that ensures you are always paying yourself, saving for tax, and building
                  profit — regardless of whether it is a feast or famine month.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-green-400 text-sm font-bold">01</span>
                      Why It Works for Irregular Income
                    </h4>
                    <p className="text-sm">
                      Most freelancers earn unevenly — a $15,000 month followed by a $3,000 month is
                      normal. Without a system, the $15,000 month feels abundant and spending inflates to
                      match. Profit First forces percentage-based allocation on every dollar that arrives,
                      so whether you invoice $3,000 or $30,000, the same proportions go to each account.
                      This smooths out the emotional rollercoaster of freelance income and builds financial
                      resilience over time. You stop spending first and saving whatever is left — you save
                      first and spend whatever is left.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-green-400 text-sm font-bold">02</span>
                      The Five Bank Accounts
                    </h4>
                    <p className="text-sm">
                      The system works by splitting every payment you receive into five separate bank
                      accounts: Income (a temporary holding account), Owner&apos;s Pay (your salary),
                      Profit (retained earnings for distributions), Tax (set aside for ATO obligations),
                      and Operating Expenses (everything needed to run the business). Some Australian
                      freelancers add a sixth account for Superannuation. Each account has a target
                      percentage, and you transfer on the 10th and 25th of each month. The physical
                      separation of money into different accounts is the behavioural trick that makes
                      the system work — out of sight, out of mind.
                    </p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-5 mt-4">
                  <h4 className="text-white font-semibold mb-3">Why Freelancers Need This More Than Employees</h4>
                  <p className="text-sm">
                    Employees have their tax withheld, super contributed by employers, and a predictable
                    fortnightly pay cycle. Freelancers have none of these guardrails. Every dollar arrives
                    as gross revenue and it is entirely your responsibility to carve out tax, super, and
                    profit before spending on business or personal expenses. Without a system, the most
                    common outcome is a painful tax bill in October that forces you into debt or depletes
                    your savings. Profit First eliminates this by making tax and super allocation automatic
                    and habitual. Australian freelancers who implement Profit First consistently report
                    less financial stress, better cash reserves, and the ability to take genuine holidays
                    without anxiety about money.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-green-400/10 to-emerald-500/10 border border-green-400/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-green-400 font-medium mb-2">The Parkinson&apos;s Law Principle</p>
                  <p className="text-sm">
                    Profit First is built on Parkinson&apos;s Law: work expands to fill the time available,
                    and spending expands to fill the money available. If all your revenue sits in one bank
                    account showing $40,000, you will unconsciously spend as if you have $40,000. But if
                    your operating expenses account only shows $16,000, you will naturally find ways to run
                    your business on $16,000. The constraint forces creativity, efficiency, and disciplined
                    spending. It is the same principle that makes freelancers more productive with tight
                    deadlines — limited resources drive better decisions.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2: Profit First Percentages for Australian Freelancers */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Profit First Percentages for Australian Freelancers
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  The original Profit First book provides target allocation percentages (TAPs) based on
                  revenue tiers. However, these are designed for American businesses and do not account for
                  Australian tax obligations, Medicare levy, or compulsory superannuation. This calculator
                  adapts the methodology specifically for Australian sole traders and freelancers, using
                  ATO 2025-26 tax brackets and current super rates.
                </p>
                <div className="bg-white/5 rounded-xl p-5 mt-4">
                  <h4 className="text-white font-semibold mb-3">Target Allocations by Revenue Tier</h4>
                  <div className="space-y-4">
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                        <span className="text-white font-medium text-sm">Under $250,000 Annual Revenue</span>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-xs">
                        <div className="bg-white/5 rounded-lg p-2 text-center">
                          <p className="text-slate-500">Owner&apos;s Pay</p>
                          <p className="text-green-400 font-bold text-sm">50%</p>
                        </div>
                        <div className="bg-white/5 rounded-lg p-2 text-center">
                          <p className="text-slate-500">Profit</p>
                          <p className="text-emerald-400 font-bold text-sm">5%</p>
                        </div>
                        <div className="bg-white/5 rounded-lg p-2 text-center">
                          <p className="text-slate-500">Tax</p>
                          <p className="text-amber-400 font-bold text-sm">ATO Rate</p>
                        </div>
                        <div className="bg-white/5 rounded-lg p-2 text-center">
                          <p className="text-slate-500">Super</p>
                          <p className="text-sky-400 font-bold text-sm">11.5%</p>
                        </div>
                        <div className="bg-white/5 rounded-lg p-2 text-center">
                          <p className="text-slate-500">OpEx</p>
                          <p className="text-slate-300 font-bold text-sm">Remainder</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                        <span className="text-white font-medium text-sm">$250,000 to $500,000 Annual Revenue</span>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-xs">
                        <div className="bg-white/5 rounded-lg p-2 text-center">
                          <p className="text-slate-500">Owner&apos;s Pay</p>
                          <p className="text-green-400 font-bold text-sm">35%</p>
                        </div>
                        <div className="bg-white/5 rounded-lg p-2 text-center">
                          <p className="text-slate-500">Profit</p>
                          <p className="text-emerald-400 font-bold text-sm">10%</p>
                        </div>
                        <div className="bg-white/5 rounded-lg p-2 text-center">
                          <p className="text-slate-500">Tax</p>
                          <p className="text-amber-400 font-bold text-sm">ATO Rate</p>
                        </div>
                        <div className="bg-white/5 rounded-lg p-2 text-center">
                          <p className="text-slate-500">Super</p>
                          <p className="text-sky-400 font-bold text-sm">11.5%</p>
                        </div>
                        <div className="bg-white/5 rounded-lg p-2 text-center">
                          <p className="text-slate-500">OpEx</p>
                          <p className="text-slate-300 font-bold text-sm">Remainder</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-purple-400" />
                        <span className="text-white font-medium text-sm">Over $500,000 Annual Revenue</span>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-xs">
                        <div className="bg-white/5 rounded-lg p-2 text-center">
                          <p className="text-slate-500">Owner&apos;s Pay</p>
                          <p className="text-green-400 font-bold text-sm">20%</p>
                        </div>
                        <div className="bg-white/5 rounded-lg p-2 text-center">
                          <p className="text-slate-500">Profit</p>
                          <p className="text-emerald-400 font-bold text-sm">15%</p>
                        </div>
                        <div className="bg-white/5 rounded-lg p-2 text-center">
                          <p className="text-slate-500">Tax</p>
                          <p className="text-amber-400 font-bold text-sm">ATO Rate</p>
                        </div>
                        <div className="bg-white/5 rounded-lg p-2 text-center">
                          <p className="text-slate-500">Super</p>
                          <p className="text-sky-400 font-bold text-sm">11.5%</p>
                        </div>
                        <div className="bg-white/5 rounded-lg p-2 text-center">
                          <p className="text-slate-500">OpEx</p>
                          <p className="text-slate-300 font-bold text-sm">Remainder</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-green-400/10 to-emerald-500/10 border border-green-400/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-green-400 font-medium mb-2">Australian Tax Considerations</p>
                  <p className="text-sm">
                    Unlike the US-centric Profit First percentages, Australian freelancers must account for
                    the 2% Medicare levy on top of income tax, compulsory superannuation contributions
                    (currently 11.5% of ordinary time earnings), and quarterly BAS obligations if registered
                    for GST. The tax allocation in this calculator uses actual ATO 2025-26 individual income
                    tax rates plus Medicare, applied to your Owner&apos;s Pay amount rather than total
                    revenue. Super is calculated as 11.5% of Owner&apos;s Pay to reflect the fact that as a
                    sole trader, you are both the employer and employee.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3: How to Implement */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                How to Implement Profit First as a Sole Trader
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Implementing Profit First is straightforward but requires discipline in the first few
                  months until it becomes habit. Here is a practical step-by-step guide specifically for
                  Australian sole traders and freelancers.
                </p>
                <div className="space-y-3 mt-4">
                  <div className="bg-white/5 rounded-xl p-4 flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-400/20 border border-green-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-400 text-xs font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">Open Five Bank Accounts</h4>
                      <p className="text-xs text-slate-400 mt-1">
                        Open five separate transaction accounts at your bank. Most Australian banks allow
                        multiple accounts at no extra cost — ING, Up, and Macquarie are popular choices for
                        zero-fee savings accounts. Label them: Income (main receiving account), Owner&apos;s
                        Pay, Profit, Tax, and Operating Expenses. Optionally add a sixth for Super. The key
                        is physical separation — seeing different balances in different accounts changes your
                        spending psychology. If your bank makes it difficult to open multiple accounts,
                        consider a neobank where it takes seconds to create sub-accounts.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-400/20 border border-green-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-400 text-xs font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">Set Up Automatic Transfers on the 10th and 25th</h4>
                      <p className="text-xs text-slate-400 mt-1">
                        Twice per month, calculate your total income received since the last transfer and
                        distribute it by percentage to each account. The 10th and 25th work well because
                        they split the month roughly in half and align with common Australian pay cycles.
                        Some freelancers automate this with scheduled transfers; others prefer to do it
                        manually to stay connected to their numbers. Either approach works as long as it
                        happens consistently. Start with your current allocations and adjust by 1% per
                        quarter toward your target percentages — this is the &ldquo;small plate&rdquo;
                        approach that prevents cash flow shock.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-400/20 border border-green-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-400 text-xs font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">Take Quarterly Profit Distributions</h4>
                      <p className="text-xs text-slate-400 mt-1">
                        Every quarter (aligned with BAS quarters: Jul-Sep, Oct-Dec, Jan-Mar, Apr-Jun),
                        take 50% of your Profit account as a distribution — this is your reward for running
                        a profitable business. The other 50% stays as a cash reserve. Use this distribution
                        for something enjoyable and memorable, not business expenses. This positive
                        reinforcement creates an emotional connection to profitability that sustains the
                        system long-term. If your Profit account has $2,000 at the end of Q1, take $1,000
                        and treat yourself — a weekend away, a new piece of equipment, or a fine dining
                        experience.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-400/20 border border-green-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-400 text-xs font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">Align Tax Account with BAS and PAYG</h4>
                      <p className="text-xs text-slate-400 mt-1">
                        Your Tax account should cover both your quarterly PAYG instalments and your annual
                        income tax liability. If you are registered for GST, you will also need to manage
                        GST collected versus GST credits — some freelancers keep a separate GST float
                        account. Each BAS quarter, pay your PAYG instalment directly from the Tax account.
                        At tax time, any surplus in the Tax account becomes an additional profit distribution
                        or rolls forward as a buffer. Having the money already set aside in a dedicated
                        account eliminates the October tax bill shock that plagues so many Australian
                        freelancers.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-5 mt-4">
                  <h4 className="text-white font-semibold mb-3">Worked Example: Melbourne Freelance Designer</h4>
                  <p className="text-sm mb-3">
                    Alex earns $120,000 per year as a freelance brand designer in Melbourne. Using the
                    Profit First method with under-$250K targets:
                  </p>
                  <div className="bg-white/5 rounded-lg p-4 text-sm space-y-1 font-mono">
                    <p className="text-green-300">Owner&apos;s Pay (50%):  $60,000/year = $5,000/month</p>
                    <p className="text-emerald-300">Profit (5%):           $6,000/year = $500/month</p>
                    <p className="text-amber-300">Tax (est. ~22%):       $26,400/year = $2,200/month</p>
                    <p className="text-sky-300">Super (11.5% of pay): $6,900/year = $575/month</p>
                    <p className="text-slate-300">OpEx (remainder):      $20,700/year = $1,725/month</p>
                  </div>
                  <p className="text-sm mt-3">
                    Alex now knows exactly how much they can spend on business expenses ($1,725/month), how
                    much to set aside for the ATO ($2,200/month), and that they are building $500/month in
                    profit reserves. Quarterly, Alex takes half the profit account ($750) as a personal
                    reward. This clarity transforms financial anxiety into financial confidence.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4: Common Mistakes */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Common Profit First Mistakes (And How to Avoid Them)
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Profit First is simple in concept but there are several traps that catch Australian
                  freelancers, especially in the first year of implementation. Here are the most common
                  mistakes and how to avoid them.
                </p>
                <div className="space-y-3 mt-4">
                  <div className="bg-white/5 rounded-xl p-4 flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-400/20 border border-red-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-red-400 text-xs font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">Setting Target Percentages Too Aggressively</h4>
                      <p className="text-xs text-slate-400 mt-1">
                        The biggest mistake is jumping straight to the target percentages from day one. If
                        you are currently spending 70% of revenue on operating expenses and the target is
                        30%, slashing your OpEx overnight will cripple your business. Instead, use the
                        &ldquo;small plate&rdquo; approach: assess your current actual allocations, then
                        shift by 1-2% per quarter toward targets. This calculator shows you both your
                        current state and the target, plus the recommended next step. It might take 18-24
                        months to reach target percentages, and that is perfectly fine. Sustainable change
                        beats dramatic failure.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-400/20 border border-red-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-red-400 text-xs font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">Forgetting About GST</h4>
                      <p className="text-xs text-slate-400 mt-1">
                        If you are registered for GST (mandatory over $75,000 revenue), the 10% GST on your
                        invoices is not your money — it belongs to the ATO. A common mistake is running
                        Profit First calculations on GST-inclusive revenue, which inflates all your accounts
                        by 10%. Always calculate your allocations on GST-exclusive revenue. If you invoiced
                        $11,000 including GST, your actual revenue for Profit First purposes is $10,000.
                        The $1,000 GST should go straight to a separate GST holding account or be factored
                        into your Tax account.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-400/20 border border-red-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-red-400 text-xs font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">Not Adjusting for Seasonal Income</h4>
                      <p className="text-xs text-slate-400 mt-1">
                        Many freelancers have seasonal patterns — web designers are quieter in January,
                        accountants peak before June 30, and photographers are busiest in spring. The
                        percentage-based system handles this naturally (lower revenue = lower absolute
                        allocations), but the mistake is panicking during slow months and raiding the Profit
                        or Tax accounts. Build a one-month operating expenses buffer in your OpEx account
                        during peak months. This buffer absorbs the seasonal dip without forcing you to
                        break the system. If you consistently have 2-3 slow months per year, factor that
                        into your annual revenue estimate when setting percentages.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-400/20 border border-red-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-red-400 text-xs font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">Skipping Quarterly Profit Distributions</h4>
                      <p className="text-xs text-slate-400 mt-1">
                        The quarterly distribution is not optional — it is the reward mechanism that makes
                        the entire system sustainable. Some freelancers skip it because they feel guilty
                        taking money out, or they want to reinvest everything back into the business. But
                        the purpose of the distribution is to create a positive emotional association with
                        profitability. Without it, Profit First feels like pure restriction. Take the 50%
                        distribution every quarter and spend it on something personally meaningful. The
                        other 50% stays as retained profit, building your cash reserves over time. Even if
                        the distribution is only $200 in your first quarter, take it and celebrate the fact
                        that your business is profitable.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-400/20 border border-red-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-red-400 text-xs font-bold">5</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">Using One Bank Account for Everything</h4>
                      <p className="text-xs text-slate-400 mt-1">
                        Some freelancers try to implement Profit First using a spreadsheet with one bank
                        account, tracking virtual sub-balances. This almost never works. The entire
                        behavioural power of the system comes from seeing separate, smaller balances in
                        physically different accounts. When your operating expenses account shows $4,000,
                        you make decisions differently than when one account shows $20,000 with a mental
                        note that $16,000 is &ldquo;allocated.&rdquo; Open the separate accounts — it takes
                        30 minutes and is the single most important implementation step.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-green-400/10 to-emerald-500/10 border border-green-400/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-green-400 font-medium mb-2">The 90-Day Rule</p>
                  <p className="text-sm">
                    Commit to running Profit First for a full 90 days before evaluating whether it works.
                    The first month will feel awkward and constraining. The second month, you will start
                    adapting your spending. By the third month, you will wonder how you ever managed money
                    without it. Most freelancers who quit Profit First do so in the first 30 days because
                    they set percentages too aggressively or tried to implement it during a slow month.
                    Start with where you are, not where you want to be. This calculator gives you both
                    your current reality and the path to your target.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-16 text-center glass rounded-2xl p-10">
            <h3 className="text-3xl font-bold text-white heading-font mb-4">
              Profit first, then{' '}
              <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">get paid on time</span>
            </h3>
            <p className="text-slate-300 max-w-xl mx-auto mb-6">
              InvoiceFlow handles your invoicing, GST calculations, and payment tracking — so you
              can focus on allocating revenue and building a profitable freelance business. Professional
              invoices, automated reminders, and real-time payment status.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/signup"
                className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold hover:opacity-90 transition-opacity"
              >
                Start Free — 5 Invoices/Month
              </Link>
              <Link
                href="/tools/pay-yourself-calculator"
                className="inline-block px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all"
              >
                Try Pay Yourself Calculator
              </Link>
            </div>
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
