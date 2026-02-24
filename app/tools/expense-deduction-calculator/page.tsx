import type { Metadata } from 'next';
import Link from 'next/link';
import ExpenseDeductionCalculator from './ExpenseDeductionCalculator';

const title = 'Freelance Expense & Tax Deduction Calculator Australia | Free Tool — InvoiceFlow';
const description =
  'Free tax deduction calculator for Australian freelancers. Enter your business expenses and instantly see your tax savings, effective cost, and deduction breakdown using 2025-26 ATO rates.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'freelance tax deductions australia',
    'sole trader deductions calculator',
    'freelance expense deduction calculator',
    'work from home deduction calculator australia',
    'self employed tax deductions',
    'business expense tax calculator',
    'ato deductions calculator',
    'freelancer tax write offs australia',
    'sole trader business expenses',
    'tax deduction calculator 2025 2026',
    'freelance expense tracker australia',
    'small business deduction calculator',
  ],
  openGraph: {
    title: 'Freelance Expense & Tax Deduction Calculator — Free Tool | InvoiceFlow',
    description:
      'See how much tax your business expenses save you. 12 ATO deduction categories with 2025-26 rates. Free for Australian freelancers.',
    url: 'https://www.invoiceflow.au/tools/expense-deduction-calculator',
    siteName: 'InvoiceFlow',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Freelance Expense & Tax Deduction Calculator — Free Tool | InvoiceFlow',
    description:
      'Calculate your tax savings from freelance business expenses. Free Australian deduction calculator.',
  },
  alternates: {
    canonical: 'https://www.invoiceflow.au/tools/expense-deduction-calculator',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Freelance Expense & Tax Deduction Calculator Australia',
  description:
    'Calculate your tax savings from business expenses. 12 ATO deduction categories with 2025-26 tax rates and Medicare levy.',
  url: 'https://www.invoiceflow.au/tools/expense-deduction-calculator',
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

export default function ExpenseDeductionCalculatorPage() {
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
              Freelance Expense &{' '}
              <span className="gradient-text">Tax Deduction</span> Calculator
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Every business expense you claim reduces your taxable income. Enter your expenses below
              to see exactly how much tax you&apos;ll save — with ATO-aligned categories and 2025-26
              tax rates.
            </p>
          </div>

          {/* Calculator */}
          <ExpenseDeductionCalculator />

          {/* SEO Content Sections */}
          <section className="mt-16 space-y-12">
            {/* What Can Freelancers Claim */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                What Can Australian Freelancers Claim as Tax Deductions?
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  As a sole trader or freelancer, you can claim deductions for expenses that are{' '}
                  <strong className="text-white">directly related to earning your income</strong>.
                  The ATO&apos;s golden rule: if you wouldn&apos;t have the expense without the
                  business, it&apos;s likely deductible.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Home Office (67c/hr)</h4>
                    <p className="text-sm">
                      The ATO&apos;s fixed rate method lets you claim 67 cents per hour worked from
                      home. This covers electricity, internet, phone, stationery, and computer
                      consumables. Keep a record of hours worked.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Vehicle (85c/km)</h4>
                    <p className="text-sm">
                      Claim 85 cents per kilometre for business travel (max 5,000 km/year with this
                      method). For heavier use, the logbook method tracks actual expenses over a
                      representative 12-week period.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Equipment (Instant Write-Off)</h4>
                    <p className="text-sm">
                      Assets under $300 can be claimed immediately. Assets over $300 are depreciated
                      over their effective life. Laptops, monitors, cameras — if it&apos;s for work,
                      it&apos;s deductible.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Super Contributions</h4>
                    <p className="text-sm">
                      Personal super contributions (up to $30,000/year concessional cap) are tax
                      deductible. This is one of the most powerful deductions — it reduces your tax
                      AND builds retirement savings.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Record Keeping */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                ATO Record Keeping Requirements
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  The ATO requires you to keep records for{' '}
                  <strong className="text-white">5 years</strong> from the date you lodge your tax
                  return. No records = no deduction. Here&apos;s what you need:
                </p>
                <div className="space-y-3 mt-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-teal-500/20 flex items-center justify-center text-xs text-teal-400 shrink-0 mt-0.5">
                      1
                    </div>
                    <div>
                      <p className="text-white font-medium">Receipts & Invoices</p>
                      <p className="text-sm">
                        Digital copies are fine (photos, scanned PDFs). Must show supplier, amount,
                        date, nature of goods/services, and GST amount.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-teal-500/20 flex items-center justify-center text-xs text-teal-400 shrink-0 mt-0.5">
                      2
                    </div>
                    <div>
                      <p className="text-white font-medium">Bank & Credit Card Statements</p>
                      <p className="text-sm">
                        Statements alone aren&apos;t enough for most claims, but they support your
                        receipts and help reconcile expenses.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-teal-500/20 flex items-center justify-center text-xs text-teal-400 shrink-0 mt-0.5">
                      3
                    </div>
                    <div>
                      <p className="text-white font-medium">Logbooks (Vehicle & Home Office)</p>
                      <p className="text-sm">
                        Vehicle logbook: 12 consecutive weeks, valid for 5 years. Home office: record
                        of hours worked from home (diary, timesheet, or app).
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-teal-500/20 flex items-center justify-center text-xs text-teal-400 shrink-0 mt-0.5">
                      4
                    </div>
                    <div>
                      <p className="text-white font-medium">Business Purpose Notes</p>
                      <p className="text-sm">
                        For mixed-use expenses (phone, internet, car), note the business percentage
                        and how you calculated it.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Common Mistakes */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                7 Tax Deduction Mistakes Freelancers Make
              </h2>
              <div className="space-y-4 text-slate-300">
                <ol className="space-y-4 list-decimal list-inside">
                  <li>
                    <strong className="text-white">Not claiming at all.</strong> Many freelancers
                    leave thousands on the table by not tracking business expenses. If it&apos;s for
                    work, claim it.
                  </li>
                  <li>
                    <strong className="text-white">Claiming personal expenses.</strong> The ATO uses
                    data matching to flag unusual claims. Only claim expenses with a genuine business
                    purpose.
                  </li>
                  <li>
                    <strong className="text-white">Forgetting super contributions.</strong>{' '}
                    Concessional super contributions up to $30K are deductible. At the 32.5% tax
                    bracket, a $10K super contribution saves you $3,250+ in tax.
                  </li>
                  <li>
                    <strong className="text-white">Mixing personal and business accounts.</strong>{' '}
                    Open a separate business bank account. It makes record keeping dramatically easier
                    and reduces audit risk.
                  </li>
                  <li>
                    <strong className="text-white">Not claiming the home office.</strong> If you work
                    from home even part-time, you can claim 67c/hour. Working 30 hours/week from home
                    = ~$1,000/year in deductions.
                  </li>
                  <li>
                    <strong className="text-white">Depreciation, not immediate write-off.</strong>{' '}
                    Assets under $300 are immediately deductible. But larger assets need to be
                    depreciated — don&apos;t claim the full cost of a $2,000 laptop in year one (use{' '}
                    <a
                      href="https://www.ato.gov.au/businesses-and-organisations/income-deductions-and-concessions/depreciation-and-capital-expenses-and-allowances"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-400 underline hover:text-teal-300"
                    >
                      ATO depreciation rules
                    </a>
                    ).
                  </li>
                  <li>
                    <strong className="text-white">Not claiming GST credits.</strong> If you&apos;re
                    GST registered, you can claim GST credits on business purchases. Use our{' '}
                    <a
                      href="/tools/gst-calculator"
                      className="text-teal-400 underline hover:text-teal-300"
                    >
                      GST Calculator
                    </a>{' '}
                    to separate GST from expense amounts.
                  </li>
                </ol>
              </div>
            </div>

            {/* Tax Brackets Quick Reference */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                2025-26 Tax Brackets — How Deductions Save You Money
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Your tax saving per dollar of deductions depends on your{' '}
                  <strong className="text-white">marginal tax rate</strong> — the rate you pay on
                  your last dollar of income.
                </p>
                <div className="overflow-x-auto mt-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-2 text-slate-400 font-medium">
                          Taxable Income
                        </th>
                        <th className="text-right py-2 text-slate-400 font-medium">Tax Rate</th>
                        <th className="text-right py-2 text-slate-400 font-medium">+ Medicare</th>
                        <th className="text-right py-2 text-slate-400 font-medium">
                          Per $1,000 Deducted
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      <tr>
                        <td className="py-2 text-white">$0 - $18,200</td>
                        <td className="py-2 text-right text-emerald-400">0%</td>
                        <td className="py-2 text-right text-emerald-400">0%</td>
                        <td className="py-2 text-right text-slate-400">$0</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-white">$18,201 - $45,000</td>
                        <td className="py-2 text-right text-emerald-400">19%</td>
                        <td className="py-2 text-right text-emerald-400">21%</td>
                        <td className="py-2 text-right text-teal-400">$210</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-white">$45,001 - $135,000</td>
                        <td className="py-2 text-right text-amber-400">32.5%</td>
                        <td className="py-2 text-right text-amber-400">34.5%</td>
                        <td className="py-2 text-right text-teal-400">$345</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-white">$135,001 - $190,000</td>
                        <td className="py-2 text-right text-orange-400">37%</td>
                        <td className="py-2 text-right text-orange-400">39%</td>
                        <td className="py-2 text-right text-teal-400">$390</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-white">$190,001+</td>
                        <td className="py-2 text-right text-rose-400">45%</td>
                        <td className="py-2 text-right text-rose-400">47%</td>
                        <td className="py-2 text-right text-teal-400">$470</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm mt-2">
                  <strong className="text-white">Example:</strong> If you earn $95,000 and claim
                  $15,000 in deductions, you save approximately $5,175 in tax (at the 32.5% + 2%
                  Medicare rate). That&apos;s real money back in your pocket.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-16 text-center glass rounded-2xl p-10">
            <h3 className="text-3xl font-bold text-white heading-font mb-4">
              Track expenses <span className="gradient-text">as you go</span>
            </h3>
            <p className="text-slate-300 max-w-xl mx-auto mb-6">
              Don&apos;t scramble at tax time. InvoiceFlow tracks your income and expenses
              throughout the year, categorises deductions automatically, and makes BAS prep painless.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/signup"
                className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold hover:opacity-90 transition-opacity"
              >
                Start Free — 5 Invoices/Month
              </Link>
              <Link
                href="/tools/tax-estimator"
                className="inline-block px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all"
              >
                Try the Tax Estimator
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
