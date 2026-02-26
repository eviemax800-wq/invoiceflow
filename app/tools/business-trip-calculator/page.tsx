import type { Metadata } from 'next';
import Link from 'next/link';
import BusinessTripCalculator from './BusinessTripCalculator';

const title =
  'Business Trip Expense Calculator | Free ATO Travel Deduction Calculator for Freelancers — InvoiceFlow';
const description =
  'Free business trip expense calculator for Australian freelancers and sole traders. Calculate deductible travel expenses using ATO reasonable travel allowance rates (TD 2025/3), separate personal vs business portions, estimate tax savings, and check compliance. No signup required.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'business travel expense calculator australia',
    'ATO travel deduction calculator freelancer',
    'business trip tax deduction calculator',
    'travel allowance calculator ATO rates',
    'freelance travel expense tracker',
    'work travel deduction sole trader australia',
    'ATO reasonable travel amounts 2025',
    'business trip deduction calculator',
    'travel diary ATO requirements',
    'mixed purpose trip deduction calculator',
    'ATO TD 2025/3 travel rates',
    'freelancer travel expense claim australia',
  ],
  openGraph: {
    title: 'Business Trip Expense Calculator — Free ATO Travel Deduction Calculator | InvoiceFlow',
    description:
      'Calculate your deductible business travel expenses using real ATO reasonable travel allowance rates. Handles mixed-purpose trips, tax savings estimates, and compliance checks. Free — no signup required.',
    url: 'https://www.invoiceflow.au/tools/business-trip-calculator',
    siteName: 'InvoiceFlow',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Business Trip Expense Calculator — Free ATO Travel Deduction Calculator | InvoiceFlow',
    description:
      'Calculate deductible business travel expenses with real ATO rates. Mixed-purpose trips, tax savings, compliance checks. Free tool for Australian freelancers.',
  },
  alternates: {
    canonical: 'https://www.invoiceflow.au/tools/business-trip-calculator',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Business Trip Expense Calculator for Australian Freelancers',
  description:
    'Calculate deductible business travel expenses using ATO reasonable travel allowance rates (TD 2025/3). Covers domestic and international trips, mixed-purpose apportionment, meal and accommodation rates, tax savings estimates, travel diary requirements, and compliance checks. Free — no signup required.',
  url: 'https://www.invoiceflow.au/tools/business-trip-calculator',
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

export default function BusinessTripCalculatorPage() {
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
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sky-400/10 border border-sky-400/20 rounded-full mb-6">
              <div className="w-2 h-2 bg-sky-400 rounded-full" />
              <span className="text-sky-400 text-sm font-medium">100% Free</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white heading-font mb-4">
              Business Trip Expense{' '}
              <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">Calculator</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Calculate your deductible business travel expenses using real ATO reasonable travel
              allowance rates. Handle mixed-purpose trips, estimate your tax savings, and check
              whether your claims are within ATO-compliant amounts.
            </p>
          </div>

          {/* Calculator Tool */}
          <BusinessTripCalculator />

          {/* SEO Content Sections */}
          <section className="mt-16 space-y-12">
            {/* Section 1: ATO Travel Deduction Rules */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                ATO Travel Deduction Rules for Freelancers
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  As an Australian freelancer or sole trader, you can claim a tax deduction for
                  travel expenses when you travel away from your home overnight for business
                  purposes. The ATO allows deductions for transport, accommodation, meals, and
                  incidental expenses — but only when the travel has a clear and direct connection
                  to earning your assessable income. Understanding these rules is critical to
                  maximising your legitimate deductions while staying compliant.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-sky-400 text-sm font-bold">01</span>
                      The Primary Purpose Test
                    </h4>
                    <p className="text-sm">
                      For a trip to be deductible, its primary purpose must be business-related.
                      If you travel to Sydney for a three-day client project and add two days of
                      sightseeing, the primary purpose is business, so transport costs (flights)
                      remain fully deductible. However, accommodation and meals for the personal
                      days are not deductible. The ATO looks at the dominant purpose of the trip
                      as a whole when determining transport deductibility. If the trip is primarily
                      personal with some incidental business activity, transport costs are not
                      deductible at all.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-sky-400 text-sm font-bold">02</span>
                      Record Keeping Requirements
                    </h4>
                    <p className="text-sm">
                      The ATO requires you to keep written evidence (receipts, invoices, or bank
                      statements) for all travel expenses you claim. For claims under $10, a
                      diary entry is acceptable if you cannot obtain a receipt. You must keep
                      records for five years from the date you lodge your tax return. Electronic
                      records are acceptable — photographed receipts stored in a cloud folder or
                      accounting app are perfectly valid. The key is that records must show the
                      date, amount, supplier, and nature of the expense.
                    </p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-5 mt-4">
                  <h4 className="text-white font-semibold mb-3">Travel Diary Rules (6+ Consecutive Nights)</h4>
                  <p className="text-sm">
                    If your business travel involves six or more consecutive nights away from home,
                    the ATO requires you to maintain a travel diary. The diary must record your
                    activities during the trip, including the nature of each activity (business or
                    personal), the date, the place, the duration, and the name of the person or
                    organisation you dealt with for business activities. This requirement exists so
                    the ATO can verify the business percentage of your trip. Without a travel diary
                    for trips of six or more nights, your travel deductions may be disallowed
                    entirely. Keep the diary in real time during the trip — do not reconstruct it
                    after returning home.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-sky-400/10 to-blue-500/10 border border-sky-400/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-sky-400 font-medium mb-2">Travel Allowance vs Reimbursement</p>
                  <p className="text-sm">
                    There is an important distinction for freelancers who also receive allowances
                    from clients. A travel allowance is a payment to cover expected travel costs
                    and is assessable income — you include it as income and then claim actual
                    expenses as deductions. A reimbursement is a payment for actual expenses
                    incurred and is not assessable income — you do not include it as income and
                    cannot claim the reimbursed expenses as deductions. As a sole trader billing
                    clients directly, most travel payments are reimbursements built into your
                    project fees. However, if a client pays you a separate travel allowance, you
                    must declare it as income.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2: ATO Reasonable Travel Amounts */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                ATO Reasonable Travel Amounts 2025-26
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Each year the ATO publishes a Tax Determination (TD 2025/3 for the 2025-26 income
                  year) setting out reasonable travel allowance amounts. If your travel expenses fall
                  within these amounts, you can claim them without needing to keep detailed written
                  evidence for each individual expense (though you must still keep a travel diary for
                  trips of 6+ nights). If you exceed these amounts, you must substantiate every
                  dollar with receipts.
                </p>
                <div className="bg-white/5 rounded-xl p-5 mt-4">
                  <h4 className="text-white font-semibold mb-3">Domestic Meal Rates (Per Day)</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between bg-white/5 rounded-lg px-4 py-2.5">
                      <span className="text-sm text-slate-300">Breakfast</span>
                      <span className="text-sm font-semibold text-white">$33.55</span>
                    </div>
                    <div className="flex items-center justify-between bg-white/5 rounded-lg px-4 py-2.5">
                      <span className="text-sm text-slate-300">Lunch</span>
                      <span className="text-sm font-semibold text-white">$47.30</span>
                    </div>
                    <div className="flex items-center justify-between bg-white/5 rounded-lg px-4 py-2.5">
                      <span className="text-sm text-slate-300">Dinner</span>
                      <span className="text-sm font-semibold text-white">$63.10</span>
                    </div>
                    <div className="flex items-center justify-between bg-white/5 rounded-lg px-4 py-2.5">
                      <span className="text-sm text-slate-300">Daily Meals Total</span>
                      <span className="text-sm font-semibold text-sky-400">$143.95</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-5 mt-4">
                  <h4 className="text-white font-semibold mb-3">Domestic Accommodation Rates (Per Night)</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between bg-white/5 rounded-lg px-4 py-2.5">
                      <span className="text-sm text-slate-300">Capital Cities (Sydney, Melbourne, Brisbane, Perth, Adelaide, Canberra)</span>
                      <span className="text-sm font-semibold text-white">$283.00</span>
                    </div>
                    <div className="flex items-center justify-between bg-white/5 rounded-lg px-4 py-2.5">
                      <span className="text-sm text-slate-300">High-Cost Regional (Gold Coast, Cairns, Darwin)</span>
                      <span className="text-sm font-semibold text-white">$200.00</span>
                    </div>
                    <div className="flex items-center justify-between bg-white/5 rounded-lg px-4 py-2.5">
                      <span className="text-sm text-slate-300">Other Regional Areas</span>
                      <span className="text-sm font-semibold text-white">$150.00</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-5 mt-4">
                  <h4 className="text-white font-semibold mb-3">Incidentals Rate</h4>
                  <div className="flex items-center justify-between bg-white/5 rounded-lg px-4 py-2.5">
                    <span className="text-sm text-slate-300">Incidentals (per day, domestic)</span>
                    <span className="text-sm font-semibold text-white">$22.65</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-2">
                    Incidentals cover minor expenses like laundry, tips, phone calls, and newspapers
                    incurred during travel.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-sky-400/10 to-blue-500/10 border border-sky-400/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-sky-400 font-medium mb-2">What Happens If You Exceed Reasonable Amounts?</p>
                  <p className="text-sm">
                    If your actual expenses exceed the ATO reasonable amounts, you can still claim
                    the full amount — but you must have receipts for every expense. The reasonable
                    amounts are not a cap on what you can claim. They are a threshold below which
                    substantiation is simplified. For example, if you spend $350 per night on
                    accommodation in Sydney (above the $283 reasonable amount), you can claim the
                    full $350 as long as you have the receipt. However, if you stayed within $283,
                    you would not need the receipt (though keeping it is always recommended). For
                    international travel, separate country-specific rates apply and are published
                    annually by the ATO.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3: Claiming Travel Deductions as Sole Trader */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Claiming Travel Deductions as a Sole Trader
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  As a sole trader, you report your business income and claim deductions in your
                  individual tax return. Travel expenses are claimed in the business section of your
                  return, reducing your taxable business income. There are two main approaches to
                  claiming travel costs, and understanding when to use each is key to maximising
                  your deductions.
                </p>
                <div className="space-y-3 mt-4">
                  <div className="bg-white/5 rounded-xl p-4 flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-sky-400/20 border border-sky-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-sky-400 text-xs font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">Actual Costs Method</h4>
                      <p className="text-xs text-slate-400 mt-1">
                        Claim the actual amount you spent on each travel expense. This requires
                        keeping receipts for every expense. Use this method when your actual costs
                        exceed the ATO reasonable amounts (for example, premium accommodation in
                        Sydney or business-class flights for international trips). This method gives
                        you the highest deduction when you have expensive but legitimate business
                        travel costs. You must keep every receipt for five years.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-sky-400/20 border border-sky-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-sky-400 text-xs font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">Reasonable Amounts Method</h4>
                      <p className="text-xs text-slate-400 mt-1">
                        Claim up to the ATO reasonable travel allowance amounts without needing
                        individual receipts. This is simpler but may result in a lower deduction
                        if your actual costs were higher. To use this method, you must receive a
                        travel allowance (which you declare as income) and your claims must not
                        exceed the ATO-published rates. You still need a travel diary for trips
                        of 6+ nights.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-sky-400/20 border border-sky-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-sky-400 text-xs font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">Mixed-Purpose Trip Apportionment</h4>
                      <p className="text-xs text-slate-400 mt-1">
                        When a trip includes both business and personal days, you must apportion
                        expenses between deductible and non-deductible portions. Transport to and
                        from the destination (flights, trains) is fully deductible if the primary
                        purpose of the trip is business. Day-specific expenses like accommodation
                        and meals are only deductible for business days. For example, a 7-night
                        trip with 5 business days and 2 personal days means you can claim 5/7
                        (71.4%) of accommodation and meals, but 100% of flights if the primary
                        purpose was business.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-sky-400/20 border border-sky-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-sky-400 text-xs font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">Records to Keep</h4>
                      <p className="text-xs text-slate-400 mt-1">
                        For every business trip, keep: receipts or bank statements for all expenses,
                        boarding passes and booking confirmations, a travel diary (mandatory for 6+
                        nights), your business itinerary showing meetings, clients, and activities,
                        evidence of the business purpose (emails from clients, conference
                        registrations, project briefs), and a log of business days vs personal days
                        for mixed-purpose trips. Store these electronically in a dedicated folder
                        per trip for easy retrieval during an ATO audit.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-5 mt-4">
                  <h4 className="text-white font-semibold mb-3">Overseas Travel: Special Rules</h4>
                  <p className="text-sm">
                    For international business travel, the same primary purpose test applies but the
                    ATO applies stricter scrutiny. If you travel overseas for business and the trip
                    is six or more consecutive nights, a travel diary is mandatory. The ATO publishes
                    separate reasonable travel amounts for international destinations, which vary by
                    country. Flights to international destinations are fully deductible if the
                    primary purpose is business, even if you add personal days. However, if the trip
                    is primarily personal (for example, a two-week holiday with one client meeting),
                    no transport costs are deductible. Only the expenses directly incurred on
                    business days would be claimable.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4: Common Mistakes */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Common Travel Deduction Mistakes to Avoid
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Travel deductions are one of the most commonly audited areas by the ATO for sole
                  traders and freelancers. Mistakes here can trigger reviews, penalties, and
                  disallowed claims. Here are the most frequent errors and how to avoid them.
                </p>
                <div className="space-y-3 mt-4">
                  <div className="bg-white/5 rounded-xl p-4 flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-400/20 border border-red-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-red-400 text-xs font-bold">!</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">Claiming Personal Travel as Business</h4>
                      <p className="text-xs text-slate-400 mt-1">
                        The most common and most penalised mistake. A weekend trip to the Gold
                        Coast to &ldquo;think about business strategy&rdquo; is not a deductible
                        business trip. You need a concrete, documented business purpose — a client
                        meeting, a conference, a project site visit. The ATO uses data matching
                        to compare travel claims against your income sources. If you claim a trip
                        to Perth but have no clients, projects, or business connections there, it
                        raises an immediate red flag.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-400/20 border border-red-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-red-400 text-xs font-bold">!</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">Missing the Travel Diary Requirement</h4>
                      <p className="text-xs text-slate-400 mt-1">
                        Many freelancers forget that trips of six or more consecutive nights require
                        a travel diary. Without one, the ATO can disallow your entire claim for
                        that trip — not just reduce it. The diary must be maintained during the trip,
                        not reconstructed afterwards. Set a daily reminder during long trips to log
                        your activities. A simple notes app entry each evening is sufficient as long
                        as it records the required details: activity, purpose, location, duration.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-400/20 border border-red-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-red-400 text-xs font-bold">!</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">Not Apportioning Mixed-Purpose Trips</h4>
                      <p className="text-xs text-slate-400 mt-1">
                        Claiming 100% of expenses on a trip that included personal days is a
                        common audit trigger. If you spent 5 days on business and 3 days exploring,
                        you must apportion daily expenses (accommodation, meals) at 5/8 (62.5%).
                        Transport may still be 100% deductible if the primary purpose was business.
                        Always calculate and document the business percentage before lodging.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-400/20 border border-red-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-red-400 text-xs font-bold">!</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">Failing to Keep Receipts</h4>
                      <p className="text-xs text-slate-400 mt-1">
                        If your claims exceed the ATO reasonable amounts, every dollar must be
                        substantiated with a receipt. Even if you are within reasonable amounts,
                        keeping receipts is best practice. Photograph receipts immediately — thermal
                        paper fades within months. Use an accounting app or a dedicated folder in
                        your cloud storage. The ATO can request records up to five years after you
                        lodge, and &ldquo;I lost the receipt&rdquo; is not an acceptable excuse.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-400/20 border border-red-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-red-400 text-xs font-bold">!</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">Claiming Beyond Reasonable Amounts Without Substantiation</h4>
                      <p className="text-xs text-slate-400 mt-1">
                        Some freelancers claim the ATO reasonable amount (for example, $283 per
                        night for accommodation) even when they stayed somewhere cheaper, or claim
                        above the reasonable amount without keeping receipts. Both are problematic.
                        You can only claim what you actually spent. If you spent $180 on a hotel,
                        you claim $180 — not the $283 reasonable amount. And if you spent $350,
                        you need the receipt to claim the full $350. The reasonable amount is not
                        a &ldquo;free deduction&rdquo; — it is a substantiation threshold.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-sky-400/10 to-blue-500/10 border border-sky-400/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-sky-400 font-medium mb-2">ATO Audit Tip</p>
                  <p className="text-sm">
                    The ATO uses sophisticated data matching across airlines, accommodation
                    providers, and financial institutions. They know if you flew to a destination,
                    how long you stayed, and what you spent. The best defence against an audit is
                    simple: claim only what you genuinely spent on genuine business travel, keep
                    all records, maintain travel diaries for long trips, and apportion
                    mixed-purpose trips honestly. Freelancers who do this have nothing to worry
                    about, even if selected for review.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-16 text-center glass rounded-2xl p-10">
            <h3 className="text-3xl font-bold text-white heading-font mb-4">
              Track your trips and{' '}
              <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">get paid on time</span>
            </h3>
            <p className="text-slate-300 max-w-xl mx-auto mb-6">
              InvoiceFlow handles your invoicing, GST calculations, and payment tracking — so you
              can focus on delivering great work for clients, wherever they are. Professional
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
                href="/tools/vehicle-expense-calculator"
                className="inline-block px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all"
              >
                Try Vehicle Expense Calculator
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
