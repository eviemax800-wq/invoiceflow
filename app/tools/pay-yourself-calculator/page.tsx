import type { Metadata } from 'next';
import Link from 'next/link';
import PayYourselfCalculator from './PayYourselfCalculator';
import RelatedTools from '../components/RelatedTools';

const title =
  'Free Freelance Pay Yourself Calculator Australia | Income Smoothing for Sole Traders — InvoiceFlow';
const description =
  'Free pay yourself calculator for Australian freelancers with variable income. Calculate a consistent monthly salary, tax set-aside, super contributions, GST reserve, and profit buffer using 2025-26 ATO rates. No signup required.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'how to pay yourself as a freelancer australia',
    'freelance income smoothing calculator',
    'variable income budget freelancer',
    'freelance salary calculator sole trader',
    'pay yourself first freelancer australia',
    'freelancer monthly salary calculator',
    'sole trader income smoothing',
    'freelance budget variable income australia',
    'freelancer pay yourself strategy',
    'how much to pay yourself freelancer',
    'freelance income stability calculator',
    'sole trader salary australia',
  ],
  openGraph: {
    title: 'Freelance Pay Yourself Calculator — Free Income Smoothing Tool | InvoiceFlow',
    description:
      'Calculate a consistent monthly salary from variable freelance income. Tax, super, GST reserve, and profit buffer — all using 2025-26 ATO rates. Free — no signup required.',
    url: 'https://www.invoiceflow.au/tools/pay-yourself-calculator',
    siteName: 'InvoiceFlow',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Freelance Pay Yourself Calculator — Free Income Smoothing Tool | InvoiceFlow',
    description:
      'Calculate a consistent monthly salary from variable freelance income. Tax, super, GST, and buffer — using 2025-26 ATO rates.',
  },
  alternates: {
    canonical: 'https://www.invoiceflow.au/tools/pay-yourself-calculator',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Freelance Pay Yourself Calculator Australia',
  description:
    'Calculate a consistent monthly salary from variable freelance income. Includes tax set-aside using 2025-26 ATO brackets, 11.5% super contributions, GST reserve, business expense buffer, income stability scoring, and cash runway projections. Free — no signup required.',
  url: 'https://www.invoiceflow.au/tools/pay-yourself-calculator',
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

export default function PayYourselfCalculatorPage() {
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
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-lime-400/10 border border-lime-400/20 rounded-full mb-6">
              <div className="w-2 h-2 bg-lime-400 rounded-full" />
              <span className="text-lime-400 text-sm font-medium">100% Free</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white heading-font mb-4">
              Freelance Pay Yourself{' '}
              <span className="bg-gradient-to-r from-lime-400 to-green-500 bg-clip-text text-transparent">
                Calculator
              </span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Turn variable freelance income into a consistent monthly salary. Enter your past
              6-12 months of income and get a complete breakdown — tax set-aside, super
              contributions, GST reserve, expense buffer, and your recommended take-home pay.
              Built for Australian sole traders using 2025-26 ATO rates.
            </p>
          </div>

          {/* Calculator Tool */}
          <PayYourselfCalculator />

          {/* SEO Content Sections */}
          <section className="mt-16 space-y-12">
            {/* Section 1: Why Freelancers Need Income Smoothing */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Why Freelancers Need to Pay Themselves a Consistent Salary
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  One of the biggest financial challenges freelancers face is income variability.
                  You might earn $15,000 one month and $3,000 the next. Without a system, this
                  feast-or-famine cycle leads to overspending in good months, panic in lean months,
                  and chronic financial stress — even when your annual income is strong.
                </p>
                <p>
                  The solution is <strong className="text-white">income smoothing</strong>: treating
                  your freelance business like an employer and paying yourself a fixed monthly
                  &quot;salary&quot; regardless of what comes in. The surplus in good months builds a
                  buffer that covers lean months. The result is predictable personal finances, better
                  budgeting, and significantly reduced anxiety.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-lime-400 text-sm font-bold">01</span>
                      Predictable Personal Finances
                    </h4>
                    <p className="text-sm">
                      When you know exactly how much hits your personal account each month, you can
                      set up automatic mortgage payments, direct debits for bills, and consistent
                      savings contributions. No more juggling payment dates based on when invoices
                      clear. Your personal financial life becomes as stable as a salaried
                      employee&apos;s — while keeping all the benefits of freelancing.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-lime-400 text-sm font-bold">02</span>
                      Better Tax and Super Management
                    </h4>
                    <p className="text-sm">
                      Paying yourself a fixed salary makes it easy to set aside the right amount
                      for tax and super every month. Instead of scrambling at BAS time or EOFY, you
                      have a dedicated tax reserve that grows steadily. Super contributions become
                      consistent and automated. The ATO never catches you off guard because your
                      obligations are funded in real time.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-lime-400 text-sm font-bold">03</span>
                      Protects Against Lean Months
                    </h4>
                    <p className="text-sm">
                      Every freelancer has quiet months — December-January slowdowns, project gaps,
                      or client delays. Without income smoothing, these months mean cutting personal
                      spending or dipping into savings. With a salary buffer, your personal income
                      stays the same regardless. The business absorbs the variability so you
                      do not have to.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-lime-400 text-sm font-bold">04</span>
                      Builds Business Reserves
                    </h4>
                    <p className="text-sm">
                      The gap between what you earn and what you pay yourself becomes your business
                      reserve. This fund covers equipment purchases, professional development,
                      marketing spend, and unexpected costs without touching your personal salary.
                      It also provides runway — the number of months you can sustain your salary
                      without any new income.
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-lime-400/10 to-green-500/10 border border-lime-400/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-lime-400 font-medium mb-2">The Rule of Thumb</p>
                  <p className="text-sm">
                    Most financial advisers recommend freelancers pay themselves 60-80% of their
                    average monthly income. The conservative end (60%) builds reserves faster and
                    provides more cushion. The aggressive end (80%) maximises take-home pay but
                    leaves less buffer. Use this calculator to find the right balance for your
                    situation — factoring in tax, super, GST, and expenses.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2: How the Calculator Works */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                How to Calculate Your Freelance Salary: Step by Step
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Calculating the right salary to pay yourself requires looking at your actual
                  income history, not projections or hopes. Here is the methodology this calculator
                  uses, aligned with Australian tax obligations:
                </p>
                <div className="space-y-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-5">
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <span className="w-7 h-7 rounded-full bg-lime-400/20 border border-lime-400/30 flex items-center justify-center flex-shrink-0">
                        <span className="text-lime-400 text-xs font-bold">1</span>
                      </span>
                      Enter 6-12 Months of Actual Income
                    </h4>
                    <p className="text-sm">
                      The more months you include, the more accurate your average. Six months is the
                      minimum for a meaningful calculation. Twelve months captures seasonal
                      variations — December slowdowns, EOFY rushes, and project cycles. Include
                      all business income before tax and expenses.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-5">
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <span className="w-7 h-7 rounded-full bg-lime-400/20 border border-lime-400/30 flex items-center justify-center flex-shrink-0">
                        <span className="text-lime-400 text-xs font-bold">2</span>
                      </span>
                      Choose Your Salary Percentage
                    </h4>
                    <p className="text-sm">
                      The calculator offers three tiers: conservative (60%), moderate (70%), and
                      aggressive (80%). Conservative is best for freelancers with high income
                      variability or thin reserves. Moderate suits most established freelancers.
                      Aggressive is for those with very stable retainer income and strong reserves.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-5">
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <span className="w-7 h-7 rounded-full bg-lime-400/20 border border-lime-400/30 flex items-center justify-center flex-shrink-0">
                        <span className="text-lime-400 text-xs font-bold">3</span>
                      </span>
                      Tax, Super, and GST Are Calculated Automatically
                    </h4>
                    <p className="text-sm">
                      Based on your annualised salary, the calculator applies{' '}
                      <strong className="text-white">2025-26 ATO income tax brackets</strong>{' '}
                      (including the 2% Medicare levy), calculates{' '}
                      <strong className="text-white">11.5% superannuation</strong> on your salary,
                      and optionally reserves{' '}
                      <strong className="text-white">GST collected</strong> (1/11th of GST-inclusive
                      income). Everything is broken down monthly so you know exactly what to set
                      aside.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-5">
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <span className="w-7 h-7 rounded-full bg-lime-400/20 border border-lime-400/30 flex items-center justify-center flex-shrink-0">
                        <span className="text-lime-400 text-xs font-bold">4</span>
                      </span>
                      Income Stability Score and Cash Runway
                    </h4>
                    <p className="text-sm">
                      The calculator analyses your income variance to produce a stability score — a
                      measure of how consistent your earnings are. It also calculates your cash
                      runway: how many months your current buffer could sustain your salary if
                      all income stopped. These metrics help you decide which salary tier is
                      appropriate for your risk profile.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3: Australian Tax Considerations */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Australian Tax Considerations for Freelancer Income
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  As a sole trader, you and your business are the same legal entity for tax purposes.
                  You cannot technically &quot;pay yourself a salary&quot; the way a company does — but
                  you can and should <strong className="text-white">manage your drawings</strong> as
                  if you were. Here is what to account for:
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Income Tax (2025-26)</h4>
                    <div className="text-sm space-y-1.5 mt-3">
                      <div className="flex justify-between text-slate-400">
                        <span>$0 - $18,200</span>
                        <span className="text-white">Nil</span>
                      </div>
                      <div className="flex justify-between text-slate-400">
                        <span>$18,201 - $45,000</span>
                        <span className="text-white">16c per $1 over $18,200</span>
                      </div>
                      <div className="flex justify-between text-slate-400">
                        <span>$45,001 - $135,000</span>
                        <span className="text-white">$4,288 + 30c over $45,000</span>
                      </div>
                      <div className="flex justify-between text-slate-400">
                        <span>$135,001 - $190,000</span>
                        <span className="text-white">$31,288 + 37c over $135,000</span>
                      </div>
                      <div className="flex justify-between text-slate-400">
                        <span>$190,001+</span>
                        <span className="text-white">$51,638 + 45c over $190,000</span>
                      </div>
                    </div>
                    <p className="text-xs text-slate-500 mt-3">
                      Plus 2% Medicare levy on total taxable income.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Superannuation (11.5%)</h4>
                    <p className="text-sm">
                      Sole traders are not legally required to pay themselves super, but it is
                      strongly recommended. Contributing 11.5% of your salary to a super fund is
                      tax-deductible — reducing your taxable income and building retirement savings.
                      The concessional (before-tax) contribution cap for 2025-26 is $30,000 per
                      year. Contributions above this are taxed at your marginal rate plus 15%.
                    </p>
                    <p className="text-sm mt-2">
                      If you pay yourself $80,000/year, your super contribution would be $9,200 —
                      well within the cap, and reducing your taxable income to $70,800.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">GST Reserve</h4>
                    <p className="text-sm">
                      If you are registered for GST (mandatory when turnover exceeds $75,000), one
                      eleventh of every GST-inclusive payment belongs to the ATO. This is not your
                      money — treat it as a liability from the moment it arrives. The calculator
                      reserves this amount automatically so it is accounted for before you set your
                      salary. Lodge your BAS quarterly and remit the balance.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">PAYG Installments</h4>
                    <p className="text-sm">
                      Once you lodge your first tax return showing a liability above $500, the ATO
                      will enter you into the PAYG installment system. You will prepay estimated
                      tax quarterly through your BAS. The tax set-aside calculated here effectively
                      funds these payments. If your installments exceed or fall short of your
                      actual liability, the difference is settled at EOFY.
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-lime-400/10 to-green-500/10 border border-lime-400/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-lime-400 font-medium mb-2">Separate Your Accounts</p>
                  <p className="text-sm">
                    The most effective approach is to maintain three bank accounts: (1) a{' '}
                    <strong className="text-white">business operating account</strong> where all
                    income lands, (2) a{' '}
                    <strong className="text-white">tax and GST holding account</strong> where you
                    transfer tax, super, and GST reserves immediately, and (3) your{' '}
                    <strong className="text-white">personal account</strong> where your fixed monthly
                    salary is deposited. This physical separation prevents you from accidentally
                    spending money earmarked for the ATO.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4: Income Stability and Risk */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Understanding Income Stability and Choosing the Right Salary Level
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Not all freelance income patterns are equal. A web developer with three retainer
                  clients earning $7,000-$9,000 per month has very different risk than a wedding
                  photographer earning $0-$20,000 depending on the season. The salary percentage
                  you choose should reflect your income stability.
                </p>
                <div className="overflow-x-auto mt-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-2 text-slate-400 font-medium">Profile</th>
                        <th className="text-left py-2 text-slate-400 font-medium">Stability</th>
                        <th className="text-left py-2 text-slate-400 font-medium">Recommended %</th>
                        <th className="text-left py-2 text-slate-400 font-medium">Buffer Priority</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      <tr>
                        <td className="py-3 text-white font-medium">Retainer clients, consistent monthly billing</td>
                        <td className="py-3">
                          <span className="text-emerald-400">High</span>
                        </td>
                        <td className="py-3">75-80%</td>
                        <td className="py-3">2-3 months expenses</td>
                      </tr>
                      <tr>
                        <td className="py-3 text-white font-medium">Mix of retainer and project work</td>
                        <td className="py-3">
                          <span className="text-lime-400">Medium-High</span>
                        </td>
                        <td className="py-3">70-75%</td>
                        <td className="py-3">3-4 months expenses</td>
                      </tr>
                      <tr>
                        <td className="py-3 text-white font-medium">Mostly project-based, several clients</td>
                        <td className="py-3">
                          <span className="text-amber-400">Medium</span>
                        </td>
                        <td className="py-3">65-70%</td>
                        <td className="py-3">4-6 months expenses</td>
                      </tr>
                      <tr>
                        <td className="py-3 text-white font-medium">Highly seasonal or feast-or-famine</td>
                        <td className="py-3">
                          <span className="text-rose-400">Low</span>
                        </td>
                        <td className="py-3">55-65%</td>
                        <td className="py-3">6-9 months expenses</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm mt-4">
                  The <strong className="text-white">income stability score</strong> in this
                  calculator is based on the coefficient of variation (standard deviation divided
                  by mean) of your monthly income. A lower CV means more consistent income and
                  supports a higher salary percentage. A higher CV means more variability and
                  suggests a more conservative approach.
                </p>
                <div className="grid sm:grid-cols-3 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 text-sm">Conservative (60%)</h4>
                    <p className="text-xs text-slate-400">
                      Best for: new freelancers, highly variable income, thin reserves. Builds
                      buffer quickly. You may feel underpaid initially, but your financial security
                      compounds fast.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 text-sm">Moderate (70%)</h4>
                    <p className="text-xs text-slate-400">
                      Best for: established freelancers with moderate income consistency and 3+
                      months of reserves. Balances take-home pay with buffer growth. The default
                      for most freelancers.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 text-sm">Aggressive (80%)</h4>
                    <p className="text-xs text-slate-400">
                      Best for: freelancers with very stable retainer income and 6+ months of
                      reserves already built. Maximises take-home but leaves minimal margin for
                      downturns.
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-lime-400/10 to-green-500/10 border border-lime-400/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-lime-400 font-medium mb-2">Related Tools</p>
                  <p className="text-sm">
                    Use our{' '}
                    <a href="/tools/emergency-fund-calculator" className="text-lime-400 hover:underline">
                      Emergency Fund Calculator
                    </a>{' '}
                    to determine your ideal safety net, the{' '}
                    <a href="/tools/cashflow-forecast" className="text-lime-400 hover:underline">
                      Cashflow Forecast
                    </a>{' '}
                    to project future income, and the{' '}
                    <a href="/tools/budget-planner" className="text-lime-400 hover:underline">
                      Budget Planner
                    </a>{' '}
                    to allocate your salary across personal expenses.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-16 text-center glass rounded-2xl p-10">
            <h3 className="text-3xl font-bold text-white heading-font mb-4">
              Smooth your income and{' '}
              <span className="bg-gradient-to-r from-lime-400 to-green-500 bg-clip-text text-transparent">
                get paid consistently
              </span>
            </h3>
            <p className="text-slate-300 max-w-xl mx-auto mb-6">
              InvoiceFlow tracks your freelance income in real time, automates GST calculations,
              and sends payment reminders — so more money arrives on time and your salary buffer
              stays healthy.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/signup"
                className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-lime-500 to-green-500 text-white font-semibold hover:opacity-90 transition-opacity"
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
        
        <RelatedTools currentSlug="pay-yourself-calculator" category="Financial Planning" />
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
