import type { Metadata } from 'next';
import Link from 'next/link';
import VehicleExpenseCalculator from './VehicleExpenseCalculator';
import RelatedTools from '../components/RelatedTools';
import EmailCapture from '../components/EmailCapture';
import BreadcrumbSchema from '../components/BreadcrumbSchema';

const title = 'Vehicle & Travel Expense Calculator Australia | Free ATO Tool — InvoiceFlow';
const description = 'Free vehicle and travel expense calculator for Australian freelancers. Compare ATO cents-per-km vs logbook methods. Calculate business travel deductions, fuel costs, and car expense claims for sole traders and contractors.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'vehicle expense calculator australia',
    'ato cents per km calculator',
    'logbook method calculator',
    'car expense deduction calculator',
    'freelance travel expenses',
    'sole trader vehicle deduction',
    'business mileage calculator australia',
    'ato car expense claim',
    'contractor travel deduction',
    'motor vehicle tax deduction calculator',
  ],
  openGraph: {
    title: 'Vehicle & Travel Expense Calculator — Free ATO Tool | InvoiceFlow',
    description: 'Compare ATO cents-per-km vs logbook methods for your vehicle deductions.',
    url: 'https://www.invoiceflow.au/tools/vehicle-expense-calculator',
    siteName: 'InvoiceFlow',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vehicle & Travel Expense Calculator — Free ATO Tool | InvoiceFlow',
    description: 'Calculate your vehicle and travel tax deductions. Free tool.',
  },
  alternates: {
    canonical: 'https://www.invoiceflow.au/tools/vehicle-expense-calculator',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Vehicle & Travel Expense Calculator',
  description: 'Calculate vehicle and travel expense deductions for Australian freelancers using ATO cents-per-km and logbook methods.',
  url: 'https://www.invoiceflow.au/tools/vehicle-expense-calculator',
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'Any',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'AUD' },
  creator: { '@type': 'Organization', name: 'InvoiceFlow', url: 'https://www.invoiceflow.au' },
};

export default function VehicleExpenseCalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#0B1120]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="heading-font text-xl font-bold text-white tracking-tight">
            Invoice<span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">Flow</span>
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/tools" className="text-sm text-gray-400 hover:text-white transition-colors">
              Free Tools
            </Link>
            <Link href="/pricing" className="text-sm text-gray-400 hover:text-white transition-colors">
              Pricing
            </Link>
            <Link
              href="/signup"
              className="rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 px-4 py-2 text-sm font-medium text-white transition-all hover:shadow-lg hover:shadow-teal-500/25"
            >
              Get Started Free
            </Link>
          </div>
        </div>
      </header>

      <main className="min-h-screen bg-[#0B1120] pt-24 pb-20">
        {/* Hero */}
        <section className="mx-auto max-w-4xl px-6 text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-sm text-teal-300 mb-6">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            100% Free
          </div>
          <h1 className="heading-font text-4xl md:text-5xl font-bold text-white mb-4">
            Vehicle & Travel{' '}
            <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
              Expense Calculator
            </span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Compare ATO cents-per-km vs logbook methods for your vehicle deductions.
            Calculate business travel expenses and find which method saves you more on tax.
          </p>
        </section>

        {/* Calculator */}
        <section className="mx-auto max-w-5xl px-6 mb-20">
          <VehicleExpenseCalculator />
        </section>

        {/* SEO Content Sections */}
        <section className="mx-auto max-w-4xl px-6 space-y-10 mb-20">
          {/* Section 1: ATO Vehicle Expense Methods */}
          <div className="glass rounded-2xl p-8">
            <h2 className="heading-font text-2xl font-bold text-white mb-4">
              ATO Vehicle Expense Methods Explained
            </h2>
            <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
              <p>
                The Australian Taxation Office provides two methods for claiming motor vehicle expenses
                as a tax deduction. Each method has distinct advantages depending on your usage patterns,
                record-keeping habits, and the proportion of business versus personal driving.
              </p>
              <div>
                <h3 className="text-white font-semibold mb-2">Cents Per Kilometre Method</h3>
                <p>
                  The cents-per-km method allows you to claim a set rate for every business kilometre
                  driven, up to a maximum of 5,000 km per year. For the 2024-25 financial year, the ATO
                  rate is <strong className="text-teal-300">85 cents per kilometre</strong> (up from 78 cents
                  in 2023-24). This gives a maximum deduction of $4,250. The beauty of this method is its
                  simplicity — you do not need to keep receipts for individual expenses. However, you must
                  be able to demonstrate how you calculated your business kilometres, such as diary entries
                  or a record of regular trips.
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Logbook Method</h3>
                <p>
                  The logbook method allows you to claim the business-use percentage of your actual vehicle
                  running costs. This requires maintaining a logbook for a continuous 12-week period to
                  establish your business-use percentage. Once established, the logbook is valid for 5 years
                  unless your circumstances change significantly. You must keep receipts for all vehicle
                  expenses you claim, including fuel, registration, insurance, servicing, and depreciation.
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">When to Use Each Method</h3>
                <p>
                  Use cents-per-km if you drive fewer than 5,000 business kilometres per year and want
                  minimal record keeping. Use the logbook method if you drive extensively for business,
                  have high running costs (e.g. a newer or larger vehicle), or your business-use percentage
                  is high. For many freelancers who regularly visit clients, the logbook method yields a
                  significantly larger deduction.
                </p>
              </div>
            </div>
          </div>

          {/* Section 2: What Travel Expenses Can Freelancers Claim? */}
          <div className="glass rounded-2xl p-8">
            <h2 className="heading-font text-2xl font-bold text-white mb-4">
              What Travel Expenses Can Freelancers Claim?
            </h2>
            <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
              <p>
                Australian freelancers, sole traders, and contractors can claim a range of travel expenses
                that are directly related to earning their income. The key requirement is a clear connection
                between the travel and your business activities.
              </p>
              <div>
                <h3 className="text-white font-semibold mb-2">Eligible Expenses</h3>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Travelling between separate workplaces (e.g. your home office to a client site)</li>
                  <li>Travelling to meet clients, attend conferences, or collect supplies</li>
                  <li>Flights, trains, buses, and taxis for business trips</li>
                  <li>Accommodation for overnight business travel</li>
                  <li>Meals during overnight business travel (not day trips)</li>
                  <li>Car hire and rideshare costs for business purposes</li>
                  <li>Tolls and parking fees for business travel</li>
                  <li>Bridge and road-user charges</li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Not Eligible</h3>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Travel between your home and your regular place of work (commuting)</li>
                  <li>Private or personal travel, even if combined with a business trip</li>
                  <li>Meals during day trips (no overnight stay)</li>
                  <li>Fines, penalties, or speeding tickets</li>
                  <li>Travel expenses your client reimburses or pays directly</li>
                </ul>
              </div>
              <p>
                If a trip is partly for business and partly personal, you can only claim the
                business-related portion. Keep detailed records to substantiate your claims.
              </p>
            </div>
          </div>

          {/* Section 3: Logbook Method: The 12-Week Requirement */}
          <div className="glass rounded-2xl p-8">
            <h2 className="heading-font text-2xl font-bold text-white mb-4">
              Logbook Method: The 12-Week Requirement
            </h2>
            <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
              <p>
                To use the logbook method, the ATO requires you to keep a logbook for a minimum continuous
                period of 12 weeks. This logbook establishes your business-use percentage, which you then
                apply to your total vehicle running costs for the entire financial year.
              </p>
              <div>
                <h3 className="text-white font-semibold mb-2">What Your Logbook Must Include</h3>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>The start date and odometer reading when the logbook period begins</li>
                  <li>The end date and odometer reading when the logbook period ends</li>
                  <li>For each business trip: date, start and end odometer readings, kilometres travelled,
                      reason for the trip (e.g. &quot;client meeting at XYZ Corp&quot;)</li>
                  <li>The make, model, and registration number of the car</li>
                  <li>The total kilometres for the logbook period (business + personal)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Validity and Renewal</h3>
                <p>
                  A valid logbook remains effective for 5 years. You do not need to redo it each year unless
                  your circumstances change materially — for example, changing jobs, moving house, or
                  significantly altering your pattern of business travel. The ATO recommends recording
                  odometer readings at the start and end of each financial year to confirm your annual
                  kilometres, even in years where you rely on an existing logbook.
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Tips for a Solid Logbook</h3>
                <p>
                  Choose a 12-week period that is representative of your typical driving pattern. Avoid
                  holiday periods or unusually busy/quiet times. Many freelancers use a smartphone app to
                  make logging trips easier and more accurate. The more detailed and consistent your logbook,
                  the stronger your position if the ATO ever queries your claim.
                </p>
              </div>
            </div>
          </div>

          {/* Section 4: Record Keeping for Vehicle Expenses */}
          <div className="glass rounded-2xl p-8">
            <h2 className="heading-font text-2xl font-bold text-white mb-4">
              Record Keeping for Vehicle Expenses
            </h2>
            <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
              <p>
                Proper record keeping is essential for substantiating your vehicle and travel expense claims.
                The ATO can request evidence at any time within the retention period, and inadequate records
                can result in your entire deduction being disallowed.
              </p>
              <div>
                <h3 className="text-white font-semibold mb-2">What to Keep</h3>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Receipts or invoices for fuel, servicing, repairs, insurance, and registration</li>
                  <li>Loan or lease statements showing interest and payments</li>
                  <li>Purchase documents for the vehicle (for depreciation calculations)</li>
                  <li>Odometer readings at the start and end of each financial year</li>
                  <li>Your completed logbook (if using the logbook method)</li>
                  <li>A diary or calendar showing business trip details (if using cents-per-km)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Retention Period</h3>
                <p>
                  The ATO requires you to keep records for <strong className="text-teal-300">5 years</strong> from
                  the date you lodge your tax return. For depreciating assets like vehicles, you may need to keep
                  purchase records for even longer — until 5 years after the last return that includes a
                  depreciation claim for that asset. Digital copies of receipts are accepted, provided they are
                  legible and complete.
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Using InvoiceFlow for Record Keeping</h3>
                <p>
                  InvoiceFlow helps Australian freelancers track income and expenses in one place. While this
                  calculator gives you an estimate, linking your accounts in InvoiceFlow lets you automatically
                  categorise vehicle expenses throughout the year — so you are always ready at tax time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mx-auto max-w-3xl px-6 text-center mb-20">
          <div className="glass rounded-2xl p-10">
            <h2 className="heading-font text-3xl font-bold text-white mb-4">
              Track All Your Freelance Expenses in One Place
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Stop guessing at tax time. InvoiceFlow automatically categorises your vehicle and travel
              expenses, generates ATO-ready reports, and helps you maximise every deduction.
            </p>
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-teal-500 to-blue-500 px-8 py-3.5 text-base font-semibold text-white transition-all hover:shadow-xl hover:shadow-teal-500/25 hover:-translate-y-0.5"
            >
              Start Free — No Credit Card
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 py-10">
          <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <Link href="/" className="heading-font text-lg font-bold text-white tracking-tight">
              Invoice<span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">Flow</span>
            </Link>
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <Link href="/tools" className="hover:text-gray-300 transition-colors">Free Tools</Link>
              <Link href="/pricing" className="hover:text-gray-300 transition-colors">Compare</Link>
              <Link href="/privacy" className="hover:text-gray-300 transition-colors">Privacy</Link>
              <Link href="/terms" className="hover:text-gray-300 transition-colors">Terms</Link>
            </div>
            <p className="text-sm text-gray-600">&copy; {new Date().getFullYear()} InvoiceFlow</p>
          </div>
        </footer>
      
        <RelatedTools currentSlug="vehicle-expense-calculator" category="Tax & Compliance" />
      </main>
    </>
  );
}
