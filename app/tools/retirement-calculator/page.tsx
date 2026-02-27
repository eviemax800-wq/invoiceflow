import type { Metadata } from 'next';
import Link from 'next/link';
import RetirementCalculator from './RetirementCalculator';
import RelatedTools from '../components/RelatedTools';

const title = 'Freelance Retirement Calculator Australia | Super & Retirement Planning for Self-Employed — InvoiceFlow';
const description =
  'Free retirement calculator for Australian freelancers and sole traders. Project your super balance, calculate contribution gaps, estimate tax savings from salary sacrifice, and plan your retirement without employer super contributions.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'freelance retirement calculator australia',
    'self-employed super calculator',
    'sole trader retirement planning',
    'freelancer superannuation calculator',
    'voluntary super contributions calculator',
    'retirement gap analysis freelancer',
    'super tax savings calculator',
    'self-employed retirement australia',
    'concessional contributions calculator',
    'freelance super contributions',
  ],
  openGraph: {
    title: 'Freelance Retirement Calculator — Free Tool | InvoiceFlow',
    description:
      'Plan your retirement as an Australian freelancer. Project your super balance, find contribution gaps, and maximise tax savings. No employer super? No problem.',
    url: 'https://www.invoiceflow.au/tools/retirement-calculator',
    siteName: 'InvoiceFlow',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Freelance Retirement Calculator — Free Tool | InvoiceFlow',
    description:
      'Project your super balance, calculate contribution gaps, and plan retirement as a self-employed Australian. Free calculator with Australian tax rates.',
  },
  alternates: {
    canonical: 'https://www.invoiceflow.au/tools/retirement-calculator',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Freelance Retirement Calculator Australia',
  description:
    'Project your superannuation balance at retirement, calculate contribution gaps, and estimate tax savings from voluntary super contributions. Built for Australian freelancers and sole traders.',
  url: 'https://www.invoiceflow.au/tools/retirement-calculator',
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

export default function RetirementCalculatorPage() {
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
              Freelance Retirement{' '}
              <span className="gradient-text">Calculator</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              No employer super contributions? Plan your own retirement with confidence. Project your
              superannuation balance, identify contribution gaps, and discover tax savings from
              voluntary contributions. Built specifically for Australian freelancers, contractors,
              and sole traders.
            </p>
          </div>

          {/* Calculator */}
          <RetirementCalculator />

          {/* SEO Content Sections */}
          <section className="mt-16 space-y-12">
            {/* Why Freelancers Need to Plan Retirement Differently */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Why Freelancers Need to Plan Retirement Differently
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  If you&apos;re a PAYG employee in Australia, your employer is legally required to contribute
                  11.5% of your ordinary time earnings into your super fund (as of 2024-25). This happens
                  automatically — you don&apos;t have to think about it. Over a 30-year career, these
                  contributions alone can build a retirement balance of $500,000 or more.
                </p>
                <p>
                  As a freelancer, contractor, or sole trader, none of this happens automatically. There&apos;s
                  no employer making contributions on your behalf. If you don&apos;t proactively set aside money
                  for retirement, your super balance will stagnate — or worse, you&apos;ll reach retirement
                  age with nothing beyond the Age Pension.
                </p>
                <div className="grid sm:grid-cols-3 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">No Automatic Super</h4>
                    <p className="text-sm">
                      Unlike employees who receive 11.5% super guarantee from their employer, freelancers
                      must make their own contributions voluntarily. Every dollar you don&apos;t contribute
                      is a dollar your retirement misses out on decades of compound growth.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Variable Income</h4>
                    <p className="text-sm">
                      Freelance income fluctuates month to month. It&apos;s tempting to skip super
                      contributions during lean months, but inconsistency compounds over time. Setting a
                      percentage-based contribution (rather than a fixed dollar amount) helps smooth this out.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Tax Advantages</h4>
                    <p className="text-sm">
                      The upside: voluntary super contributions are tax-deductible for self-employed
                      Australians. You can claim a deduction for personal super contributions, reducing
                      your taxable income while building your retirement nest egg. It&apos;s one of the
                      best tax strategies available to freelancers.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Understanding Super for Self-Employed Australians */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Understanding Super for Self-Employed Australians
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  The Australian superannuation system offers significant benefits for self-employed
                  individuals — but only if you understand the rules and take action. Here are the key
                  things every freelancer needs to know:
                </p>
                <div className="space-y-3 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-1">Concessional Contribution Cap: $30,000/year</h4>
                    <p className="text-sm">
                      For 2024-25, you can contribute up to $30,000 per year in concessional (before-tax)
                      contributions. These are taxed at just 15% inside your super fund — far less than most
                      freelancers&apos; marginal tax rates (32.5% to 45%). This means for every $10,000 you
                      contribute, you could save $1,750 to $3,000 in tax compared to taking the income personally.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-1">Carry-Forward Unused Cap Amounts</h4>
                    <p className="text-sm">
                      If your total super balance is under $500,000, you can carry forward unused concessional
                      cap amounts from the previous 5 financial years. This is powerful for freelancers who
                      have a big year — you could potentially contribute well over $30,000 in a single year
                      by using carried-forward amounts, supercharging your retirement savings during peak
                      earning periods.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-1">Non-Concessional Contributions: $120,000/year</h4>
                    <p className="text-sm">
                      After-tax (non-concessional) contributions have a cap of $120,000 per year. These don&apos;t
                      provide a tax deduction but the investment earnings inside super are taxed at a maximum
                      of 15% — much lower than personal investment tax rates. A bring-forward rule also allows
                      up to $360,000 in a single year if you&apos;re under 75.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-1">Age Pension: Safety Net at 67</h4>
                    <p className="text-sm">
                      The Age Pension is currently available from age 67. It&apos;s means-tested — your
                      assets and income determine how much you receive. The maximum single rate is approximately
                      $28,514 per year (2024-25). Most freelancers should plan to supplement the Age Pension
                      with their own super, not rely on it entirely.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* How to Maximise Your Super Tax Benefits */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                How to Maximise Your Super Tax Benefits
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Super isn&apos;t just a retirement vehicle — it&apos;s one of the most powerful tax planning
                  tools available to Australian freelancers. Here&apos;s how to make the most of it:
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Claim the Tax Deduction</h4>
                    <p className="text-sm">
                      As a self-employed person, you can claim a tax deduction for personal super contributions
                      by submitting a &ldquo;Notice of intent to claim a deduction&rdquo; (Section 290-170 form) to
                      your super fund before lodging your tax return. This converts your contribution from
                      non-concessional to concessional, saving you significant tax.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Time Your Contributions</h4>
                    <p className="text-sm">
                      Had a particularly profitable quarter? Making a larger super contribution before June 30
                      can reduce your taxable income for that financial year. If you&apos;re approaching a
                      higher tax bracket, a well-timed contribution can keep you in the lower bracket while
                      building your retirement savings.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Use Carry-Forward Strategically</h4>
                    <p className="text-sm">
                      Track your unused concessional cap amounts from previous years. If you have a windfall
                      year (large project, asset sale, bonus income), you can contribute above the $30,000 cap
                      using carried-forward amounts — turning a big tax bill into a big retirement boost.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Consider a Self-Managed Super Fund</h4>
                    <p className="text-sm">
                      Once your super balance exceeds $200,000-$300,000, a self-managed super fund (SMSF) may
                      give you more control over investments and potentially lower fees. However, SMSFs come
                      with compliance obligations — consult a financial adviser before making the switch.
                    </p>
                  </div>
                </div>
                <p className="text-sm mt-4">
                  <strong className="text-white">Important:</strong> This calculator provides general
                  information only. Super rules change frequently. Always check the{' '}
                  <strong className="text-emerald-400">ATO website</strong> or consult a registered tax agent
                  for advice specific to your situation.
                </p>
              </div>
            </div>

            {/* Related Tools */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Related Financial Planning Tools
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Retirement planning is one piece of your financial picture. These tools help you build
                  a complete view of your freelance finances:
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <Link
                    href="/tools/super-calculator"
                    className="bg-white/5 rounded-xl p-4 hover:bg-white/[0.08] transition-colors group"
                  >
                    <h4 className="text-white font-semibold mb-1 group-hover:text-teal-400 transition-colors">
                      Super Calculator
                    </h4>
                    <p className="text-sm">
                      Calculate your super guarantee obligations and voluntary contribution options.
                      Understand what you should be setting aside each quarter.
                    </p>
                  </Link>
                  <Link
                    href="/tools/tax-estimator"
                    className="bg-white/5 rounded-xl p-4 hover:bg-white/[0.08] transition-colors group"
                  >
                    <h4 className="text-white font-semibold mb-1 group-hover:text-teal-400 transition-colors">
                      Tax Estimator
                    </h4>
                    <p className="text-sm">
                      Estimate your income tax liability for the current financial year. See how super
                      contributions reduce your taxable income and overall tax bill.
                    </p>
                  </Link>
                  <Link
                    href="/tools/savings-goal-calculator"
                    className="bg-white/5 rounded-xl p-4 hover:bg-white/[0.08] transition-colors group"
                  >
                    <h4 className="text-white font-semibold mb-1 group-hover:text-teal-400 transition-colors">
                      Savings Goal Calculator
                    </h4>
                    <p className="text-sm">
                      Set and track savings targets beyond super — emergency fund, equipment upgrades,
                      or business investments. Every freelancer needs a cash buffer.
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
                      Score your freelance business across key financial dimensions. A healthy business
                      today means a more secure retirement tomorrow.
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-16 text-center glass rounded-2xl p-10">
            <h3 className="text-3xl font-bold text-white heading-font mb-4">
              Secure your future with{' '}
              <span className="gradient-text">better financial tracking</span>
            </h3>
            <p className="text-slate-300 max-w-xl mx-auto mb-6">
              InvoiceFlow helps freelancers track income, manage invoices, and build the financial
              clarity you need to plan for retirement. Know exactly what you&apos;re earning so you
              can contribute with confidence.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/signup"
                className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-emerald-400 to-teal-500 text-slate-900 font-semibold hover:opacity-90 transition-opacity"
              >
                Start Free — 5 Invoices/Month
              </Link>
              <Link
                href="/tools/super-calculator"
                className="inline-block px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all"
              >
                Try Super Calculator
              </Link>
            </div>
          </section>
        
        <RelatedTools currentSlug="retirement-calculator" category="Financial Planning" />
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
