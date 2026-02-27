import type { Metadata } from 'next';
import Link from 'next/link';
import TaxDeductionFinder from './TaxDeductionFinder';
import RelatedTools from '../components/RelatedTools';
import EmailCapture from '../components/EmailCapture';
import BreadcrumbSchema from '../components/BreadcrumbSchema';

const title =
  'Tax Deduction Finder for Australian Freelancers | Free Sole Trader Deductions Checklist — InvoiceFlow';
const description =
  'Free tax deduction finder for Australian freelancers and sole traders. Identify every ATO-eligible deduction based on your industry, work arrangements, and income — home office, vehicle, equipment, insurance, and more. No signup required.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'freelance tax deductions australia 2025',
    'sole trader tax deductions list australia',
    'what can I claim as a freelancer australia',
    'freelance business deductions checklist',
    'ATO tax deductions self employed',
    'freelancer tax claims australia',
    'home office deduction freelancer australia',
    'vehicle deduction sole trader',
    'instant asset write-off 2025',
    'tax deductions checklist australia',
  ],
  openGraph: {
    title: 'Tax Deduction Finder — Free Freelancer Deductions Checklist | InvoiceFlow',
    description:
      'Identify every tax deduction you can claim as an Australian freelancer. Personalised checklist based on your industry, work setup, and income bracket. Free — no signup required.',
    url: 'https://www.invoiceflow.au/tools/tax-deduction-finder',
    siteName: 'InvoiceFlow',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tax Deduction Finder — Free Freelancer Deductions Checklist | InvoiceFlow',
    description:
      'Identify every tax deduction you can claim as an Australian freelancer. Personalised checklist based on your industry and work arrangements.',
  },
  alternates: {
    canonical: 'https://www.invoiceflow.au/tools/tax-deduction-finder',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Tax Deduction Finder for Australian Freelancers',
  description:
    'Free interactive tool that helps Australian freelancers and sole traders identify every ATO-eligible tax deduction based on their industry, work arrangements, and income. Covers home office, vehicle, equipment, professional development, insurance, software, and industry-specific deductions with estimated savings.',
  url: 'https://www.invoiceflow.au/tools/tax-deduction-finder',
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

export default function TaxDeductionFinderPage() {
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
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-lg flex items-center justify-center">
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
                className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-emerald-400 text-white text-sm font-medium rounded-lg hover:from-emerald-400 hover:to-emerald-300 transition-all"
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
              Tax Deduction{' '}
              <span className="bg-gradient-to-r from-emerald-400 to-emerald-500 bg-clip-text text-transparent">Finder</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Discover every tax deduction you can claim as an Australian freelancer. Tell us your
              industry and work setup, and we&apos;ll generate a personalised deduction checklist
              with estimated savings based on ATO 2025&ndash;26 rules.
            </p>
          </div>

          {/* Tool */}
          <TaxDeductionFinder />

          {/* SEO Content Sections */}
          <section className="mt-16 space-y-12">
            {/* Section 1: Complete Guide to Tax Deductions for Australian Freelancers */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Complete Guide to Tax Deductions for Australian Freelancers
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  As a freelancer or sole trader in Australia, you are entitled to claim tax deductions
                  for expenses that are directly related to earning your assessable income. The Australian
                  Taxation Office (ATO) allows deductions for costs you incur in the course of running
                  your business, provided you can substantiate them with receipts, invoices, or other
                  records. Understanding what you can claim is the difference between overpaying thousands
                  in tax and keeping more of your hard-earned income.
                </p>
                <p>
                  Tax deductions reduce your taxable income, not your tax bill directly. For example, if
                  you earn $120,000 and claim $15,000 in legitimate deductions, you are only taxed on
                  $105,000. At the 32.5% marginal rate, that $15,000 in deductions saves you $4,875 in
                  tax. The higher your marginal rate, the more valuable each deduction becomes.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-emerald-400 text-sm font-bold">01</span>
                      Home Office Deductions
                    </h4>
                    <p className="text-sm">
                      If you work from home, you can claim a deduction using the ATO&apos;s revised
                      fixed rate method at 67 cents per hour. This covers electricity, phone, internet,
                      stationery, and computer consumables. Alternatively, the actual cost method lets
                      you calculate each expense separately — often resulting in a larger claim if you
                      have a dedicated home office. You must keep a record of hours worked from home
                      for the entire income year (a timesheet, diary, or roster is acceptable).
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-emerald-400 text-sm font-bold">02</span>
                      Vehicle and Travel
                    </h4>
                    <p className="text-sm">
                      If you use your vehicle for business purposes — travelling to client sites, picking
                      up supplies, or visiting your co-working space — you can claim a deduction using
                      the cents per kilometre method (85 cents/km for 2025&ndash;26, up to 5,000 km without
                      a logbook) or the logbook method for higher-mileage claims. Business travel
                      including flights, accommodation, and meals is also deductible when you travel
                      overnight for work.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-emerald-400 text-sm font-bold">03</span>
                      Equipment and Technology
                    </h4>
                    <p className="text-sm">
                      Under the instant asset write-off, sole traders can immediately deduct the full
                      cost of assets costing less than $20,000 each (2025&ndash;26 threshold). This covers
                      laptops, monitors, cameras, software licences, office furniture, and other tools
                      of trade. Assets above the threshold are depreciated over their effective life.
                      If an asset is used for both business and personal purposes, you can only claim
                      the business-use percentage.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-emerald-400 text-sm font-bold">04</span>
                      Professional Development
                    </h4>
                    <p className="text-sm">
                      Courses, workshops, conferences, certifications, books, and subscriptions that
                      maintain or improve your skills in your current field are deductible. This includes
                      online courses, industry conferences, professional memberships, and technical
                      certifications. The cost must relate to your current income-producing activity —
                      you cannot claim study for a completely new career.
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-emerald-500/10 to-emerald-400/10 border border-emerald-500/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-emerald-400 font-medium mb-2">Key Principle</p>
                  <p className="text-sm">
                    The ATO&apos;s golden rule: you can claim a deduction if the expense was incurred in
                    the course of earning your assessable income, you have a record to prove it, and
                    the expense is not private, domestic, or capital in nature (unless it qualifies for
                    an immediate write-off). When in doubt, keep the receipt and record the business
                    purpose. Deductions cannot create or increase a tax loss from non-commercial activities.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2: Most Commonly Missed Deductions */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Most Commonly Missed Deductions
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  The ATO estimates that Australian small businesses and sole traders miss billions in
                  legitimate deductions each year — not because they are not eligible, but because they
                  simply do not know what they can claim or fail to keep adequate records. Here are the
                  deductions freelancers miss most often:
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Phone and Internet — Business Portion</h4>
                    <p className="text-sm text-slate-400">
                      Most freelancers use their personal phone and internet for business, but many
                      forget to claim the business-use percentage. If 60% of your phone usage is for
                      work, you can claim 60% of the cost. Keep a four-week diary each year to establish
                      your usage pattern, then apply that percentage to the full year. On a $150/month
                      phone plan, that is $1,080 in deductions at 60% business use.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Professional Memberships and Subscriptions</h4>
                    <p className="text-sm text-slate-400">
                      Industry association fees, professional body memberships, trade journal
                      subscriptions, and even relevant online community memberships are deductible.
                      This includes groups like the Australian Computer Society, Design Institute of
                      Australia, or Freelancers Union. If it helps you stay current in your field or
                      find work, it is likely deductible.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Bank Fees and Interest</h4>
                    <p className="text-sm text-slate-400">
                      Fees on your business bank account, merchant fees from payment processors
                      (Stripe, PayPal, Square), interest on business loans or lines of credit, and
                      even the annual fee on a credit card used predominantly for business are all
                      deductible. If the card is mixed-use, claim the business percentage. These small
                      amounts add up — $30/month in bank fees alone is $360 per year.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Income Protection and Sickness Insurance</h4>
                    <p className="text-sm text-slate-400">
                      Income protection insurance premiums are tax deductible if the policy replaces
                      your income should you be unable to work due to illness or injury. Freelancers
                      without employer-provided sick leave often overlook this. At typical premiums of
                      $1,500&ndash;$3,000 per year, this is a significant deduction that also protects
                      your livelihood.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Marketing and Advertising Costs</h4>
                    <p className="text-sm text-slate-400">
                      Your website hosting, domain registration, portfolio platform fees, social media
                      advertising, Google Ads, business card printing, and freelance marketplace fees
                      (Upwork, Fiverr, 99designs) are all deductible marketing expenses. Many
                      freelancers forget to claim platform service fees, which can be 10&ndash;20% of
                      their revenue on marketplace platforms.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Tax Agent and Accounting Fees</h4>
                    <p className="text-sm text-slate-400">
                      The cost of having a tax agent prepare and lodge your tax return is deductible in
                      the year you pay it. This includes BAS preparation fees, bookkeeping services,
                      and accounting software subscriptions (Xero, MYOB, QuickBooks). If you use a tax
                      agent and pay $500&ndash;$1,500 annually, that is a deduction many freelancers
                      forget because they pay it once a year.
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-emerald-500/10 to-emerald-400/10 border border-emerald-500/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-emerald-400 font-medium mb-2">The Numbers</p>
                  <p className="text-sm">
                    ATO data shows the average sole trader claims approximately $12,000&ndash;$18,000 in
                    deductions per year, but many are eligible for significantly more. At the 32.5%
                    marginal rate, every $1,000 in missed deductions costs you $325 in unnecessary tax.
                    Over five years, that compounds to thousands of dollars left on the table. Use the
                    tool above to identify what you might be missing.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3: ATO Record-Keeping Requirements */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                ATO Record-Keeping Requirements
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Claiming deductions is only half the equation. The ATO requires you to substantiate
                  every deduction with adequate records. If you are audited and cannot produce records,
                  the deduction will be disallowed — and you may face penalties. Here is what the ATO
                  expects:
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-emerald-400 text-sm font-bold">01</span>
                      Receipt and Invoice Requirements
                    </h4>
                    <p className="text-sm">
                      For expenses of $10 or more, you must keep a receipt or invoice showing the
                      supplier&apos;s name, the amount, the nature of the goods or services, the date,
                      and the GST amount (if applicable). Digital copies are acceptable — the ATO
                      accepts photos, scans, and records from apps like the ATO app, Dext, or Hubdoc.
                      For expenses under $10, a diary entry is sufficient. You must keep records for
                      five years from the date you lodge your tax return.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-emerald-400 text-sm font-bold">02</span>
                      Home Office Records
                    </h4>
                    <p className="text-sm">
                      If using the fixed rate method (67c/hour), you must keep a record of the total
                      hours you worked from home for the entire financial year. A timesheet, roster,
                      diary, or time-tracking app is acceptable. If using the actual cost method, you
                      need records of every individual expense (electricity bills, internet bills, etc.)
                      and a reasonable basis for calculating the business-use proportion (such as floor
                      area of your dedicated office space).
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-emerald-400 text-sm font-bold">03</span>
                      Vehicle Logbook
                    </h4>
                    <p className="text-sm">
                      If you use the logbook method for vehicle deductions, you must keep a logbook
                      for a continuous 12-week period that covers each journey — date, start and end
                      odometer readings, kilometres driven, purpose, and start and end locations. The
                      logbook is valid for five years unless your circumstances change significantly.
                      For the cents per kilometre method (up to 5,000 km), you need a reasonable basis
                      for your estimate but no formal logbook.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-emerald-400 text-sm font-bold">04</span>
                      Mixed-Use Asset Apportionment
                    </h4>
                    <p className="text-sm">
                      If an asset or expense is used for both business and personal purposes, you can
                      only claim the business-use percentage. For phones and internet, keep a four-week
                      diary to establish the pattern. For laptops and equipment, estimate the business
                      percentage based on actual usage. The ATO may ask you to justify your
                      apportionment, so keep notes explaining how you calculated the split.
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-emerald-500/10 to-emerald-400/10 border border-emerald-500/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-emerald-400 font-medium mb-2">Five-Year Rule</p>
                  <p className="text-sm">
                    The ATO can audit your tax return for up to four years after the notice of assessment
                    is issued (two years for simple affairs). Keep all records — receipts, invoices,
                    bank statements, logbooks, and diary entries — for at least five years from the date
                    you lodge. Digital storage is fine. Use cloud-based accounting software or a receipt
                    scanning app to make this effortless. Losing records is the single biggest reason
                    deductions are disallowed during audits.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4: When to Use a Tax Agent vs Self-Lodge */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                When to Use a Tax Agent vs Self-Lodge
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Australian freelancers can lodge their own tax return through myTax (the ATO&apos;s
                  free online tool) or engage a registered tax agent. Both approaches are valid, but
                  the right choice depends on the complexity of your situation and the value of
                  professional expertise for your circumstances.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Self-Lodge with myTax</h4>
                    <p className="text-sm text-slate-400 mb-3">
                      Suitable if your freelance income is straightforward, you have few deduction
                      categories, no complex capital gains, and you are confident in your record-keeping.
                      myTax pre-fills income from employers, banks, and health insurers. The ATO has
                      improved myTax significantly for sole traders, and it handles business income
                      schedules well.
                    </p>
                    <div className="bg-white/5 rounded-lg p-3">
                      <p className="text-xs text-slate-500 font-medium mb-1">Best for:</p>
                      <ul className="text-xs text-slate-400 space-y-1">
                        <li>Single income source, under $100k revenue</li>
                        <li>Simple deductions (home office, equipment)</li>
                        <li>No capital gains or investment properties</li>
                        <li>Confident with numbers and ATO rules</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Engage a Tax Agent</h4>
                    <p className="text-sm text-slate-400 mb-3">
                      Recommended if you have multiple income streams, complex deductions, investments,
                      capital gains, or if you are unsure about what you can claim. A good tax agent
                      will identify deductions you did not know about, ensure compliance, and represent
                      you if the ATO raises queries. Their fee is also tax deductible.
                    </p>
                    <div className="bg-white/5 rounded-lg p-3">
                      <p className="text-xs text-slate-500 font-medium mb-1">Best for:</p>
                      <ul className="text-xs text-slate-400 space-y-1">
                        <li>Revenue over $100k or multiple income streams</li>
                        <li>Complex deductions (vehicle, depreciation, home office actual)</li>
                        <li>Investment properties, shares, or crypto</li>
                        <li>First year of freelancing or changing business structure</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="overflow-x-auto mt-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-3 px-4 text-slate-400 font-semibold">Factor</th>
                        <th className="text-left py-3 px-4 text-slate-400 font-semibold">Self-Lodge</th>
                        <th className="text-left py-3 px-4 text-slate-400 font-semibold">Tax Agent</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      <tr>
                        <td className="py-3 px-4 text-white font-medium">Cost</td>
                        <td className="py-3 px-4">Free (myTax)</td>
                        <td className="py-3 px-4">$300&ndash;$1,500+ (tax deductible)</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-white font-medium">Lodgement Deadline</td>
                        <td className="py-3 px-4">31 October</td>
                        <td className="py-3 px-4">Extended to May (via agent)</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-white font-medium">Deduction Optimisation</td>
                        <td className="py-3 px-4">Limited to your knowledge</td>
                        <td className="py-3 px-4">Professional expertise</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-white font-medium">Audit Support</td>
                        <td className="py-3 px-4">Handle it yourself</td>
                        <td className="py-3 px-4">Agent represents you</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="bg-gradient-to-r from-emerald-500/10 to-emerald-400/10 border border-emerald-500/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-emerald-400 font-medium mb-2">Our Recommendation</p>
                  <p className="text-sm">
                    If your total deductions are likely to exceed $10,000 or your situation involves
                    any complexity beyond straightforward freelance income, a tax agent will almost
                    certainly save you more than they cost. Use the deduction finder above to estimate
                    your total deductions — if the number surprises you, a tax agent will likely find
                    even more. Their fee pays for itself many times over, and the extended lodgement
                    deadline gives you breathing room after the end of the financial year.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-16 text-center glass rounded-2xl p-10">
            <h3 className="text-3xl font-bold text-white heading-font mb-4">
              Track your deductions and{' '}
              <span className="bg-gradient-to-r from-emerald-400 to-emerald-500 bg-clip-text text-transparent">maximise your refund</span>
            </h3>
            <p className="text-slate-300 max-w-xl mx-auto mb-6">
              InvoiceFlow automatically categorises your income and expenses, tracks GST, and
              generates reports that make tax time effortless. Know exactly what you can claim,
              all year round.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/signup"
                className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-emerald-500 to-emerald-400 text-white font-semibold hover:opacity-90 transition-opacity"
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
        
        <RelatedTools currentSlug="tax-deduction-finder" category="Tax & Compliance" />
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
