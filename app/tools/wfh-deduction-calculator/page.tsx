import type { Metadata } from 'next';
import Link from 'next/link';
import WfhDeductionCalculator from './WfhDeductionCalculator';
import RelatedTools from '../components/RelatedTools';
import EmailCapture from '../components/EmailCapture';
import BreadcrumbSchema from '../components/BreadcrumbSchema';

const title =
  'Working from Home Tax Deduction Calculator Australia | Free WFH Tool — InvoiceFlow';
const description =
  'Free WFH deduction calculator for Australian freelancers and sole traders. Compare the ATO fixed rate method (67c/hr) vs actual cost method. Calculate your home office tax savings using 2025-26 tax brackets, equipment depreciation, and floor area apportionment.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'working from home tax deduction calculator australia',
    'wfh deduction calculator ato',
    '67 cents per hour working from home',
    'home office deduction calculator australia',
    'work from home tax deduction 2025 2026',
    'ato home office expenses',
    'fixed rate method 67c per hour',
    'actual cost method home office',
    'home office tax claim calculator',
    'freelancer wfh deduction australia',
    'sole trader home office deduction',
    'work from home expenses ato',
  ],
  openGraph: {
    title:
      'WFH Tax Deduction Calculator Australia — Free Tool | InvoiceFlow',
    description:
      'Compare ATO fixed rate (67c/hr) vs actual cost method for home office deductions. Free calculator for Australian freelancers with 2025-26 tax brackets.',
    url: 'https://www.invoiceflow.au/tools/wfh-deduction-calculator',
    siteName: 'InvoiceFlow',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'WFH Tax Deduction Calculator — Free Tool | InvoiceFlow',
    description:
      'Calculate your working from home tax deduction using both ATO methods. Free for Australian freelancers and sole traders.',
  },
  alternates: {
    canonical: 'https://www.invoiceflow.au/tools/wfh-deduction-calculator',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Working from Home Tax Deduction Calculator Australia',
  description:
    'Free WFH deduction calculator comparing the ATO fixed rate method (67c/hr) and actual cost method. Includes equipment depreciation, floor area apportionment, and 2025-26 tax savings calculation.',
  url: 'https://www.invoiceflow.au/tools/wfh-deduction-calculator',
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

export default function WfhDeductionCalculatorPage() {
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
              Working from Home{' '}
              <span className="gradient-text">Tax Deduction</span> Calculator
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Compare the ATO&apos;s fixed rate method (67 cents per hour) against the actual
              cost method to find which gives you the bigger home office deduction. Includes
              equipment depreciation, floor area apportionment, and real tax savings using
              2025-26 brackets.
            </p>
          </div>

          {/* Calculator */}
          <WfhDeductionCalculator />

          {/* SEO Content Sections */}
          <section className="mt-16 space-y-12">
            {/* Section 1: Understanding WFH Deductions */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Understanding Working from Home Deductions in Australia
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  If you work from home as a freelancer, sole trader, or employee, the ATO allows
                  you to claim deductions for the additional expenses you incur. These deductions
                  reduce your taxable income, which means you pay less tax. From 1 July 2022, the
                  ATO revised the rules and now offers two methods for calculating your home office
                  deduction: the <strong className="text-white">fixed rate method</strong> (67 cents
                  per hour) and the <strong className="text-white">actual cost method</strong>.
                </p>
                <p>
                  To claim any WFH deduction, you must meet several conditions. You must have
                  incurred additional expenses as a result of working from home — simply having a
                  desk at home isn&apos;t enough. You need a dedicated work area (this doesn&apos;t
                  have to be a separate room, but it must be identifiable as your work space). And
                  critically, you must keep records to prove your claim.
                </p>
                <p>
                  The type of records you need depends on which method you choose. For the fixed
                  rate method, you need a record of actual hours worked from home (a timesheet,
                  roster, diary, or time-tracking app). For the actual cost method, you need
                  receipts for every expense you claim, plus evidence of how you calculated the
                  business-use percentage.
                </p>
                <div className="grid sm:grid-cols-3 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-teal-400 mb-1">67c/hr</p>
                    <p className="text-sm">ATO fixed rate from 1 July 2022</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-amber-400 mb-1">4.5M</p>
                    <p className="text-sm">Australians working from home regularly</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-rose-400 mb-1">5 years</p>
                    <p className="text-sm">ATO record-keeping requirement</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: Fixed Rate vs Actual Cost */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Fixed Rate vs Actual Cost: Which Method Is Better?
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  There&apos;s no universal answer — the best method depends on your specific
                  situation. Here&apos;s a detailed comparison to help you decide.
                </p>
                <div className="overflow-x-auto mt-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-3 px-4 text-slate-400 font-medium">Feature</th>
                        <th className="text-left py-3 px-4 text-slate-400 font-medium">Fixed Rate (67c/hr)</th>
                        <th className="text-left py-3 px-4 text-slate-400 font-medium">Actual Cost</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      <tr>
                        <td className="py-3 px-4 text-white">Calculation</td>
                        <td className="py-3 px-4">Hours worked x $0.67</td>
                        <td className="py-3 px-4">Each expense x business use %</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-white">Covers</td>
                        <td className="py-3 px-4">Electricity, phone, internet, stationery, computer consumables</td>
                        <td className="py-3 px-4">Internet, phone, electricity, insurance, rent interest, cleaning, depreciation</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-white">Separate claims allowed</td>
                        <td className="py-3 px-4 text-teal-400">Equipment depreciation, office furniture repairs</td>
                        <td className="py-3 px-4 text-teal-400">Everything already included</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-white">Record keeping</td>
                        <td className="py-3 px-4">Timesheet or diary of hours</td>
                        <td className="py-3 px-4">Receipts + floor plan + usage diaries</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-white">Best when</td>
                        <td className="py-3 px-4 text-teal-400">Simple setup, moderate hours, low actual costs</td>
                        <td className="py-3 px-4 text-teal-400">High expenses, dedicated room, good record keeping</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-white">Complexity</td>
                        <td className="py-3 px-4">Low — just track hours</td>
                        <td className="py-3 px-4">High — receipts, calculations, floor measurements</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="bg-gradient-to-r from-teal-500/10 to-blue-500/10 border border-teal-500/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-teal-400 font-medium mb-2">Real-World Example</p>
                  <p className="text-sm">
                    A graphic designer works from home 35 hours/week, 48 weeks/year. Under the
                    fixed rate method, their deduction is 35 x 48 x $0.67 = <strong className="text-white">$1,126</strong>.
                    Under the actual cost method — with $1,800/year internet (60% business),
                    $1,200 phone (50% business), $2,400 electricity (floor area 15%), and $800
                    in depreciation — their deduction is $1,080 + $600 + $360 + $800 = <strong className="text-white">$2,840</strong>.
                    In this case, the actual cost method wins by over $1,700.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3: Record Keeping Requirements */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Record Keeping Requirements for WFH Deductions
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  The ATO is increasingly data-matching home office claims against reported income.
                  Having solid records isn&apos;t optional — without them, your deduction can be
                  disallowed in an audit. Here&apos;s what you need for each method.
                </p>
                <div className="space-y-4 mt-2">
                  <div className="bg-white/5 rounded-xl p-5">
                    <h4 className="text-white font-semibold mb-2">Fixed Rate Method (67c/hr) — Records Required</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-teal-400 mt-0.5 shrink-0">*</span>
                        <span>
                          <strong className="text-white">Record of actual hours worked from home</strong> — a
                          timesheet, roster, diary, or time-tracking app for the entire income year. You
                          can no longer estimate or use a representative 4-week period.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-400 mt-0.5 shrink-0">*</span>
                        <span>
                          <strong className="text-white">Receipts for separate claims</strong> — if you
                          also claim equipment depreciation or office furniture repairs (which are allowed
                          on top of the 67c rate), keep purchase receipts and depreciation schedules.
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white/5 rounded-xl p-5">
                    <h4 className="text-white font-semibold mb-2">Actual Cost Method — Records Required</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-teal-400 mt-0.5 shrink-0">*</span>
                        <span>
                          <strong className="text-white">Receipts for every expense claimed</strong> — internet
                          bills, phone bills, electricity bills, insurance policies, rent or mortgage
                          interest statements.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-400 mt-0.5 shrink-0">*</span>
                        <span>
                          <strong className="text-white">Floor plan or measurements</strong> — you need to
                          measure your work area and total home area in square metres to calculate the
                          floor area percentage for occupancy expenses (rent, insurance, electricity if
                          using floor area method).
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-400 mt-0.5 shrink-0">*</span>
                        <span>
                          <strong className="text-white">Usage diary for phone and internet</strong> — keep
                          a 4-week representative diary showing business vs personal usage to determine
                          your business-use percentage.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-400 mt-0.5 shrink-0">*</span>
                        <span>
                          <strong className="text-white">Depreciation schedule</strong> — for any office
                          equipment or furniture, maintain a schedule showing purchase date, cost,
                          effective life, and annual depreciation amount.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 4: Common WFH Deduction Mistakes */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                7 Common WFH Deduction Mistakes to Avoid
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  The ATO flags home office claims as a top area of concern every tax season. Avoid
                  these common mistakes that can trigger audits or result in disallowed deductions.
                </p>
                <div className="space-y-4 mt-2">
                  <div className="bg-white/5 rounded-xl p-5">
                    <h4 className="text-white font-semibold mb-2">1. Claiming rent or mortgage interest without apportionment</h4>
                    <p className="text-sm">
                      You can only claim the portion of rent or mortgage interest that relates to your
                      dedicated work area. If your office is 10% of your home&apos;s floor area, you
                      claim 10% — not the full amount. And you can only claim this under the actual
                      cost method, not the fixed rate method.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-5">
                    <h4 className="text-white font-semibold mb-2">2. Not keeping a record of hours worked from home</h4>
                    <p className="text-sm">
                      From 1 July 2022, the ATO requires you to keep a record of <em>actual</em> hours
                      worked from home for the entire year if using the fixed rate method. Estimates,
                      4-week representative diaries, or &quot;I usually work 40 hours&quot; statements
                      are no longer accepted.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-5">
                    <h4 className="text-white font-semibold mb-2">3. Double-dipping on the fixed rate method</h4>
                    <p className="text-sm">
                      The 67c/hour rate already covers electricity, phone, internet, stationery, and
                      computer consumables. You cannot claim these expenses separately if you use the
                      fixed rate method. You <em>can</em> claim equipment depreciation and furniture
                      repairs on top, but nothing that&apos;s already covered by the rate.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-5">
                    <h4 className="text-white font-semibold mb-2">4. Claiming without a dedicated work area</h4>
                    <p className="text-sm">
                      You need an identifiable area of your home set up for work. Working from the
                      couch or kitchen table occasionally doesn&apos;t qualify. The area doesn&apos;t
                      need to be a separate room, but it must be clearly your workspace.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-5">
                    <h4 className="text-white font-semibold mb-2">5. Mixing up occupancy and running expenses</h4>
                    <p className="text-sm">
                      Occupancy expenses (rent, mortgage interest, rates, insurance) can only be
                      claimed under the actual cost method, and only if you have a dedicated room used
                      <em> exclusively</em> or <em>almost exclusively</em> for work. Running expenses
                      (electricity, phone, internet) are easier to claim and are covered by both methods.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-5">
                    <h4 className="text-white font-semibold mb-2">6. Forgetting capital gains tax implications</h4>
                    <p className="text-sm">
                      If you claim occupancy expenses (rent or mortgage interest) for a home you own,
                      you may be liable for capital gains tax on the proportion of your home used for
                      business when you sell. This can be a significant cost. Talk to your accountant
                      before claiming occupancy expenses on a property you own.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-5">
                    <h4 className="text-white font-semibold mb-2">7. Claiming the full cost of equipment in year one</h4>
                    <p className="text-sm">
                      Assets costing $300 or less (for items used solely for work) can be immediately
                      deducted. Assets over $300 must be depreciated over their effective life. A $2,500
                      laptop with a 4-year effective life means a $625/year deduction, not a $2,500
                      deduction in the first year. The exception: small businesses can use the instant
                      asset write-off for assets under $20,000.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-16 text-center glass rounded-2xl p-10">
            <h3 className="text-3xl font-bold text-white heading-font mb-4">
              Track your WFH expenses{' '}
              <span className="gradient-text">year-round</span>
            </h3>
            <p className="text-slate-300 max-w-xl mx-auto mb-6">
              Don&apos;t scramble at tax time trying to calculate your home office deduction.
              InvoiceFlow tracks your income, expenses, and working hours throughout the year —
              so your WFH claim is ready when you need it.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/signup"
                className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold hover:opacity-90 transition-opacity"
              >
                Start Free — 5 Invoices/Month
              </Link>
              <Link
                href="/tools/expense-deduction-calculator"
                className="inline-block px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all"
              >
                Try Expense Deduction Calculator
              </Link>
            </div>
          </section>
        
        <RelatedTools currentSlug="wfh-deduction-calculator" category="Tax & Compliance" />
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
