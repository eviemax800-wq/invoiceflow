import type { Metadata } from 'next';
import Link from 'next/link';
import VehicleLogbookGenerator from './VehicleLogbookGenerator';
import RelatedTools from '../components/RelatedTools';

const title =
  'Motor Vehicle Logbook Generator | ATO-Compliant Car Expense Tracker — InvoiceFlow';
const description =
  'Free ATO-compliant motor vehicle logbook generator for Australian freelancers. Generate a 12-week logbook, calculate business use percentage, and compare the logbook method vs 85 cents per km to maximise your car expense deduction.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'ATO motor vehicle logbook template australia',
    'car logbook for tax freelancer',
    'vehicle logbook generator free',
    'ATO logbook method calculator',
    'freelance car deduction logbook',
    'motor vehicle logbook 12 week period',
    '85 cents per km method vs logbook',
    'ato car expense deduction freelancer',
    'sole trader vehicle logbook template',
    'business car use percentage calculator',
  ],
  openGraph: {
    title:
      'Motor Vehicle Logbook Generator — ATO-Compliant Car Expense Tracker | InvoiceFlow',
    description:
      'Generate an ATO-compliant 12-week motor vehicle logbook. Calculate business use percentage and compare deduction methods. Free tool for Australian freelancers.',
    url: 'https://www.invoiceflow.au/tools/vehicle-logbook-generator',
    siteName: 'InvoiceFlow',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Motor Vehicle Logbook Generator — Free Freelance Tool | InvoiceFlow',
    description:
      'ATO-compliant vehicle logbook generator. Track trips, calculate business use %, and compare logbook vs cents-per-km methods. Free for Australian freelancers.',
  },
  alternates: { canonical: 'https://www.invoiceflow.au/tools/vehicle-logbook-generator' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Motor Vehicle Logbook Generator for Australian Freelancers',
  description:
    'A 4-step tool that generates an ATO-compliant 12-week motor vehicle logbook for Australian freelancers and sole traders. Enter vehicle details and trips, view business use percentage with visual breakdown, compare logbook method vs 85 cents per km deduction method, and generate a professional formatted logbook document ready to copy or print. Includes ATO compliance notes and record-keeping requirements. Free — no signup required.',
  url: 'https://www.invoiceflow.au/tools/vehicle-logbook-generator',
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

export default function VehicleLogbookGeneratorPage() {
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
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-400/10 border border-amber-400/20 rounded-full mb-6">
              <div className="w-2 h-2 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full" />
              <span className="text-amber-400 text-sm font-medium">100% Free</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white heading-font mb-4">
              Motor Vehicle Logbook{' '}
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                Generator
              </span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Generate an ATO-compliant 12-week motor vehicle logbook, calculate your business use
              percentage, and compare the logbook method vs 85 cents per km — so you claim the
              maximum car expense deduction as a freelancer or sole trader.
            </p>
          </div>

          {/* Generator Tool */}
          <VehicleLogbookGenerator />

          {/* SEO Content Sections */}
          <section className="mt-16 space-y-12">
            {/* Section 1: ATO Vehicle Deduction Methods Explained */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                ATO Vehicle Deduction Methods Explained
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  The ATO offers two methods for claiming motor vehicle expenses as a tax deduction.
                  Choosing the right one can mean a difference of thousands of dollars at tax time.
                  Your choice depends on how much you use your car for business, how much the car
                  costs to run, and how willing you are to keep detailed records.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-5">
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent text-sm font-bold">85c/km</span>
                      Cents Per Kilometre Method
                    </h4>
                    <div className="space-y-2 text-sm">
                      <p className="text-slate-400">
                        <span className="text-white font-medium">How it works:</span> Claim 85 cents
                        for every business kilometre you drive, up to a maximum of 5,000 business km
                        per year. Maximum deduction: $4,250/year (5,000 km x 85c).
                      </p>
                      <p className="text-slate-400">
                        <span className="text-white font-medium">Record keeping:</span> You need to be
                        able to show how you calculated your business kilometres, but you do not need a
                        formal logbook. A reasonable estimate based on your typical work patterns is
                        acceptable.
                      </p>
                      <p className="text-slate-400">
                        <span className="text-white font-medium">Best for:</span> Freelancers who
                        drive under 5,000 business km per year, or those who want the simplest possible
                        claiming method. Also suits freelancers whose cars are cheap to run (low fuel,
                        low insurance, no finance costs).
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-5">
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent text-sm font-bold">LOG</span>
                      Logbook Method
                    </h4>
                    <div className="space-y-2 text-sm">
                      <p className="text-slate-400">
                        <span className="text-white font-medium">How it works:</span> Keep a logbook
                        for a continuous 12-week period to establish your business use percentage. Then
                        apply that percentage to all car running costs — fuel, registration, insurance,
                        servicing, tyres, finance interest, and depreciation.
                      </p>
                      <p className="text-slate-400">
                        <span className="text-white font-medium">Record keeping:</span> A compliant
                        12-week logbook recording every trip (business and personal), odometer readings
                        at the start and end of the period, and receipts for all car expenses throughout
                        the year. The logbook is valid for 5 years unless your circumstances change.
                      </p>
                      <p className="text-slate-400">
                        <span className="text-white font-medium">Best for:</span> Freelancers who
                        drive more than 5,000 business km per year, own expensive cars with high running
                        costs, or have a high business use percentage (over 40%). The logbook method has
                        no cap on deduction amount.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-amber-400/10 to-orange-500/10 border border-amber-400/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-amber-400 font-medium mb-2">When Is the Logbook Method Better?</p>
                  <p className="text-sm">
                    As a rule of thumb: if your total annual car running costs exceed $5,300 and your
                    business use percentage is above 40%, the logbook method will almost certainly
                    produce a larger deduction than the 85c/km cap of $4,250. For a freelancer
                    spending $12,000/year on car costs with 60% business use, the logbook deduction
                    would be $7,200 — nearly double the cents-per-km maximum. This calculator helps
                    you compare both methods with your actual numbers.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2: How to Keep an ATO-Compliant Logbook */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                How to Keep an ATO-Compliant Logbook
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  The ATO has specific requirements for a motor vehicle logbook to be valid. Getting
                  this wrong can mean your entire car expense deduction is disallowed in an audit.
                  Here is exactly what you need to record and the common mistakes to avoid.
                </p>
                <div className="space-y-4 mt-2">
                  <div className="bg-white/5 rounded-xl p-5">
                    <h4 className="text-white font-semibold mb-3">
                      The 12-Week Rule
                    </h4>
                    <p className="text-sm mb-3">
                      Your logbook must cover a minimum continuous period of 12 weeks (84 days). You
                      choose when to start — the ATO does not specify a particular time of year. The
                      12-week period should be representative of your typical driving pattern
                      throughout the year. If your work is seasonal, pick a period that reflects your
                      average, not your busiest or quietest time.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      <div className="bg-white/5 rounded-lg p-3">
                        <p className="text-xs text-slate-400">
                          <span className="text-white font-medium">Valid for 5 years:</span> Once
                          completed, your logbook is valid for 5 years. You do not need to redo it
                          each year unless your work circumstances change significantly (new job,
                          new home, change in business travel patterns).
                        </p>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3">
                        <p className="text-xs text-slate-400">
                          <span className="text-white font-medium">Start fresh if needed:</span> If
                          your circumstances do change, you must start a new 12-week logbook period.
                          Common triggers: moving house, changing your primary client base, switching
                          from office-based to mobile work.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-5">
                    <h4 className="text-white font-semibold mb-3">
                      What to Record for Every Trip
                    </h4>
                    <p className="text-sm mb-3">
                      For each journey during the 12-week period, you must record all of the
                      following. Missing any of these fields can invalidate the logbook entry.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      <div className="bg-white/5 rounded-lg p-3">
                        <p className="text-xs text-slate-400">
                          <span className="text-white font-medium">Required fields:</span> Date of
                          trip, odometer reading at the start and end, kilometres travelled,
                          purpose of the trip (business or personal), and for business trips — a
                          description of the business reason (e.g. &quot;Client meeting — Smith
                          Accounting, CBD&quot;).
                        </p>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3">
                        <p className="text-xs text-slate-400">
                          <span className="text-white font-medium">Personal trips too:</span> You
                          must record personal trips as well, not just business ones. The ATO needs
                          both to calculate the business use percentage. Simply recording
                          &quot;Personal&quot; as the purpose is sufficient — you do not need to
                          detail where you went for personal trips.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-5">
                    <h4 className="text-white font-semibold mb-3">
                      Common Logbook Mistakes
                    </h4>
                    <div className="grid sm:grid-cols-3 gap-3">
                      <div className="bg-white/5 rounded-lg p-3">
                        <p className="text-xs text-amber-400 font-medium mb-1">Gaps in records</p>
                        <p className="text-xs text-slate-400">
                          Every trip must be logged — no exceptions. If you miss a few days, the
                          logbook may not be representative. Record trips at the time of travel, not
                          retrospectively at the end of the week.
                        </p>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3">
                        <p className="text-xs text-amber-400 font-medium mb-1">No personal trips</p>
                        <p className="text-xs text-slate-400">
                          A logbook showing 100% business use will be flagged by the ATO. You must
                          record personal trips including commuting. Commuting from home to your
                          regular place of business is personal, not business travel.
                        </p>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3">
                        <p className="text-xs text-amber-400 font-medium mb-1">Period too short</p>
                        <p className="text-xs text-slate-400">
                          The logbook must cover a full 12 consecutive weeks. An 11-week logbook is
                          invalid. Start your logbook period with a clear date and ensure you reach
                          at least 84 days of continuous records.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-amber-400/10 to-orange-500/10 border border-amber-400/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-amber-400 font-medium mb-2">Disclaimer</p>
                  <p className="text-sm">
                    This tool generates a logbook template based on the trips you enter. It is
                    designed to follow ATO guidelines for motor vehicle logbook record keeping, but
                    it is not a substitute for professional tax advice. Always verify your logbook
                    records with a registered tax agent and ensure your actual driving records match
                    what you submit to the ATO.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3: How InvoiceFlow Helps */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                How InvoiceFlow Helps Track Vehicle Expenses
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Your vehicle logbook establishes your business use percentage — but you also need
                  to track the actual costs throughout the year to claim the deduction. InvoiceFlow
                  helps Australian freelancers and sole traders keep their vehicle expense records
                  organised and audit-ready.
                </p>
                <div className="grid sm:grid-cols-3 gap-3 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold text-sm mb-2">
                      Expense Categorisation
                    </h4>
                    <p className="text-xs text-slate-400">
                      Log fuel, servicing, registration, insurance, tolls, and car wash expenses as
                      categorised vehicle costs. InvoiceFlow automatically separates vehicle
                      expenses from other business costs for clean reporting.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold text-sm mb-2">
                      Business Use Percentage
                    </h4>
                    <p className="text-xs text-slate-400">
                      Set your logbook-established business use percentage once, and InvoiceFlow
                      applies it to all vehicle expense calculations. Your deductible portion is
                      always visible alongside your total spend.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold text-sm mb-2">
                      BAS-Ready Reports
                    </h4>
                    <p className="text-xs text-slate-400">
                      Generate quarterly reports that separate vehicle deductions for your BAS
                      lodgement. GST-registered freelancers can see the GST credit on deductible
                      vehicle expenses at a glance.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold text-sm mb-2">
                      Receipt Tracking
                    </h4>
                    <p className="text-xs text-slate-400">
                      Attach digital copies of fuel receipts, service invoices, and registration
                      notices to each expense entry. If the ATO audits your vehicle deduction
                      claim, your supporting documents are already organised.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold text-sm mb-2">
                      Method Comparison
                    </h4>
                    <p className="text-xs text-slate-400">
                      InvoiceFlow tracks your total vehicle expenses and business km, so at tax
                      time you can compare the logbook method deduction against the 85c/km method
                      and choose whichever gives you the larger claim.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold text-sm mb-2">
                      Year-Over-Year Trends
                    </h4>
                    <p className="text-xs text-slate-400">
                      See how your vehicle costs and deductions track over multiple financial
                      years. Know when your logbook is due for renewal (every 5 years or when
                      circumstances change) and whether your business use percentage is still
                      accurate.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-16 text-center glass rounded-2xl p-10">
            <h3 className="text-3xl font-bold text-white heading-font mb-4">
              Track every trip.{' '}
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                Claim every dollar.
              </span>
            </h3>
            <p className="text-slate-300 max-w-xl mx-auto mb-6">
              InvoiceFlow helps Australian freelancers invoice clients, track income, and categorise
              deductible expenses — including vehicle costs — so you never leave money on the table
              at tax time.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/signup"
                className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-amber-400 to-orange-500 text-white font-semibold hover:opacity-90 transition-opacity"
              >
                Start Free — 5 Invoices/Month
              </Link>
              <Link
                href="/tools/hourly-rate-calculator"
                className="inline-block px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all"
              >
                Try Hourly Rate Calculator
              </Link>
            </div>
          </section>
        
        <RelatedTools currentSlug="vehicle-logbook-generator" category="Tax & Compliance" />
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
