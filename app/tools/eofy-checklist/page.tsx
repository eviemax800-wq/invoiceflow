import type { Metadata } from 'next';
import Link from 'next/link';
import EofyChecklist from './EofyChecklist';
import RelatedTools from '../components/RelatedTools';

const title =
  'Free EOFY Tax Checklist for Freelancers Australia — End of Financial Year Preparation | InvoiceFlow';
const description =
  'Generate a personalised End of Financial Year checklist for your freelance business. Tax deductions, BAS reconciliation, super contributions, record-keeping — everything Australian sole traders need before June 30.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'eofy checklist freelancer australia',
    'end of financial year checklist sole trader',
    'eofy tax preparation australia',
    'freelance eofy checklist 2026',
    'sole trader eofy tasks',
    'eofy deductions checklist',
    'australian freelancer tax preparation',
    'june 30 tax checklist',
    'eofy super contribution',
    'freelance bookkeeping eofy',
  ],
  openGraph: {
    title: 'EOFY Tax Checklist Generator — Free Tool | InvoiceFlow',
    description:
      'Generate a personalised End of Financial Year checklist for your freelance business. Tax deductions, BAS, super, record-keeping — everything before June 30.',
    url: 'https://www.invoiceflow.au/tools/eofy-checklist',
    siteName: 'InvoiceFlow',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EOFY Tax Checklist Generator — Free Tool | InvoiceFlow',
    description:
      'Generate a personalised EOFY checklist for Australian freelancers. Deductions, BAS, super, and more.',
  },
  alternates: {
    canonical: 'https://www.invoiceflow.au/tools/eofy-checklist',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'EOFY Tax Checklist Generator',
  description:
    'Generate a personalised End of Financial Year checklist for Australian freelancers and sole traders. Covers tax deductions, BAS reconciliation, superannuation, depreciation, and record-keeping.',
  url: 'https://www.invoiceflow.au/tools/eofy-checklist',
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

export default function EofyChecklistPage() {
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
              EOFY Tax{' '}
              <span className="gradient-text">Checklist</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Generate a personalised End of Financial Year preparation checklist for your
              freelance business. Cover every base — deductions, BAS, super, depreciation,
              and record-keeping — so nothing slips through before June 30.
            </p>
          </div>

          {/* Checklist Tool */}
          <EofyChecklist />

          {/* SEO Content Sections */}
          <section className="mt-16 space-y-12">
            {/* Section 1: What Is EOFY and Why Does It Matter */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                What Is EOFY and Why Does It Matter for Freelancers?
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  <strong className="text-white">
                    The Australian financial year ends on June 30.
                  </strong>{' '}
                  For freelancers and sole traders, this date is more than a calendar milestone — it
                  determines your tax return obligations, deduction claims, superannuation deadlines,
                  and BAS lodgement schedule. Missing the EOFY deadline or arriving unprepared can
                  mean missed deductions worth thousands, ATO penalties for late lodgement, and
                  scrambling to find receipts that should have been organised months ago.
                </p>
                <p>
                  The ATO expects sole traders to lodge their tax return by 31 October if
                  self-lodging, or by the extended deadline (typically May the following year) if
                  using a registered tax agent. But the real work happens in the weeks leading up to
                  June 30 — reconciling income, gathering receipts, making strategic super
                  contributions, and reviewing your deduction position while you can still act on it.
                </p>
                <p>
                  Freelancers who prepare early consistently pay less tax. The difference between a
                  reactive EOFY and a proactive one can be{' '}
                  <strong className="text-white">$2,000 to $10,000+</strong> in legitimate
                  deductions — especially when you factor in super contributions, prepaid expenses,
                  and instant asset write-offs timed before June 30.
                </p>
                <div className="grid sm:grid-cols-3 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-teal-400">$3,800</p>
                    <p className="text-xs text-slate-500 mt-1">
                      Average deductions missed by unprepared sole traders each year
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-teal-400">$313+</p>
                    <p className="text-xs text-slate-500 mt-1">
                      ATO penalty for failing to lodge on time (starts at $313 per 28-day period)
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-teal-400">5 years</p>
                    <p className="text-xs text-slate-500 mt-1">
                      Minimum record retention period required by the ATO for business documents
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: Essential EOFY Tax Deductions */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Essential EOFY Tax Deductions for Australian Freelancers
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Australian freelancers can claim a wide range of business deductions — but only if
                  the expense was incurred during the financial year, directly related to earning
                  income, and properly documented. Here are the most valuable deductions to review
                  before June 30.
                </p>
                <div className="overflow-x-auto mt-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-2 text-slate-400 font-medium">Deduction Category</th>
                        <th className="text-left py-2 text-slate-400 font-medium">Method / Rate</th>
                        <th className="text-right py-2 text-slate-400 font-medium">Typical Amount</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      <tr>
                        <td className="py-3 text-white">Home office expenses</td>
                        <td className="py-3">Fixed rate: 67c per hour worked from home</td>
                        <td className="py-3 text-right text-teal-400">$1,200 - $3,400</td>
                      </tr>
                      <tr>
                        <td className="py-3 text-white">Home office (actual cost method)</td>
                        <td className="py-3">Actual proportion of electricity, internet, phone, rent/mortgage interest</td>
                        <td className="py-3 text-right text-teal-400">$2,000 - $6,000+</td>
                      </tr>
                      <tr>
                        <td className="py-3 text-white">Equipment &amp; technology</td>
                        <td className="py-3">Instant write-off for items under $20,000 (2025-26 threshold)</td>
                        <td className="py-3 text-right text-teal-400">$500 - $20,000</td>
                      </tr>
                      <tr>
                        <td className="py-3 text-white">Vehicle expenses (cents/km)</td>
                        <td className="py-3">85 cents per business km (max 5,000 km without logbook)</td>
                        <td className="py-3 text-right text-teal-400">Up to $4,250</td>
                      </tr>
                      <tr>
                        <td className="py-3 text-white">Vehicle expenses (logbook)</td>
                        <td className="py-3">Business-use percentage of all running costs</td>
                        <td className="py-3 text-right text-teal-400">$3,000 - $12,000+</td>
                      </tr>
                      <tr>
                        <td className="py-3 text-white">Professional development</td>
                        <td className="py-3">Courses, certifications, conferences, books</td>
                        <td className="py-3 text-right text-teal-400">$200 - $5,000</td>
                      </tr>
                      <tr>
                        <td className="py-3 text-white">Insurance premiums</td>
                        <td className="py-3">Professional indemnity, public liability, income protection</td>
                        <td className="py-3 text-right text-teal-400">$500 - $3,000</td>
                      </tr>
                      <tr>
                        <td className="py-3 text-white">Software subscriptions</td>
                        <td className="py-3">SaaS tools, cloud storage, accounting software</td>
                        <td className="py-3 text-right text-teal-400">$500 - $4,000</td>
                      </tr>
                      <tr>
                        <td className="py-3 text-white">Marketing &amp; advertising</td>
                        <td className="py-3">Website hosting, domain names, paid ads, design tools</td>
                        <td className="py-3 text-right text-teal-400">$300 - $5,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="bg-white/5 rounded-xl p-4 mt-4">
                  <p className="text-sm">
                    <strong className="text-amber-400">Pro tip:</strong> If you need new equipment or
                    software, purchasing before June 30 lets you claim the deduction in the current
                    financial year rather than waiting 12 months. The $20,000 instant asset write-off
                    threshold means most freelancer purchases can be deducted immediately.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3: Super Contributions Before June 30 */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Super Contributions Before June 30
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Superannuation is one of the most powerful EOFY tax strategies for freelancers.
                  Voluntary concessional contributions reduce your taxable income dollar-for-dollar,
                  and the money inside super is taxed at just 15% — far less than your marginal rate.
                  But contributions must land in your super fund&apos;s bank account before June 30
                  to count for the current financial year.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Concessional Cap: $30,000</h4>
                    <p className="text-sm">
                      For 2025-26, the concessional contributions cap is $30,000. This includes any
                      employer contributions (if you also work part-time) plus your personal
                      deductible contributions. Every dollar contributed reduces your taxable income
                      and is taxed at 15% inside the fund instead.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Carry-Forward Unused Cap</h4>
                    <p className="text-sm">
                      If your total super balance is under $500,000, you can carry forward unused
                      concessional cap amounts from the previous five years (from 2019-20 onwards).
                      This means you could potentially contribute well above $30,000 in a single year
                      — ideal for freelancers who had lean years but are now earning well.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Notice of Intent Form</h4>
                    <p className="text-sm">
                      To claim your personal super contributions as a tax deduction, you must lodge a
                      &quot;Notice of Intent to Claim a Deduction&quot; with your super fund{' '}
                      <strong className="text-white">before</strong> you lodge your tax return. Your
                      fund must acknowledge the notice in writing. Without this step, you cannot claim
                      the deduction — no matter how much you contributed.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Deadline Warning</h4>
                    <p className="text-sm">
                      Super contributions are counted by when the money{' '}
                      <strong className="text-white">arrives</strong> in the fund, not when you
                      initiate the transfer. BPAY and bank transfers can take 2-5 business days.
                      Aim to make your contribution by June 25 at the latest to ensure it clears
                      before June 30.
                    </p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 mt-2">
                  <p className="text-sm">
                    Use our{' '}
                    <Link
                      href="/tools/super-calculator"
                      className="text-teal-400 hover:text-teal-300 underline transition-colors"
                    >
                      Self-Employed Super Calculator
                    </Link>{' '}
                    to calculate the exact tax benefit of making a voluntary contribution before
                    June 30. Even a $5,000 contribution can save a freelancer earning $100K over
                    $1,500 in tax.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4: Common EOFY Mistakes */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Common EOFY Mistakes That Cost Freelancers Money
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Every year, thousands of Australian freelancers overpay tax or face ATO penalties
                  because of avoidable EOFY mistakes. Here are the five most expensive — and how to
                  avoid each one.
                </p>
                <ol className="space-y-4 list-decimal list-inside">
                  <li>
                    <strong className="text-white">
                      Mixing personal and business expenses.
                    </strong>{' '}
                    Using one bank account for both personal and business transactions makes
                    reconciliation a nightmare and increases the risk of claiming non-deductible
                    expenses — or missing legitimate ones. The ATO flags sole traders who claim an
                    unusually high ratio of personal-looking expenses.{' '}
                    <em className="text-slate-400">
                      Fix: Open a separate business bank account. It takes 15 minutes and costs
                      nothing with most banks.
                    </em>
                  </li>
                  <li>
                    <strong className="text-white">
                      Forgetting to reconcile BAS before June 30.
                    </strong>{' '}
                    If you&apos;re registered for GST, your Q4 BAS (April-June) is due by 28 July.
                    But the real danger is not reconciling your earlier BAS statements. Errors in Q1-Q3
                    that go uncorrected mean your annual GST position is wrong, which flows through to
                    your tax return. Late BAS amendments attract interest charges from the ATO.{' '}
                    <em className="text-slate-400">
                      Fix: Reconcile all four BAS quarters before you prepare your tax return.
                    </em>
                  </li>
                  <li>
                    <strong className="text-white">
                      Not claiming all eligible deductions.
                    </strong>{' '}
                    Many freelancers forget to claim home office expenses, professional development,
                    insurance premiums, or software subscriptions. Others know they can claim them but
                    don&apos;t have receipts. The ATO allows deductions for any expense directly
                    related to earning your income — but you need documentation for everything over $10.{' '}
                    <em className="text-slate-400">
                      Fix: Review every bank transaction from July 1 to June 30 and categorise each
                      business expense.
                    </em>
                  </li>
                  <li>
                    <strong className="text-white">
                      Missing the super contribution deadline.
                    </strong>{' '}
                    Voluntary super contributions must arrive in your fund&apos;s account before June 30
                    to count for the current financial year. A BPAY transfer initiated on June 29 may
                    not arrive until July 2 — pushing your deduction into the next financial year. And
                    forgetting to submit your Notice of Intent form means no deduction at all.{' '}
                    <em className="text-slate-400">
                      Fix: Make super contributions by June 25 and lodge your Notice of Intent
                      immediately after.
                    </em>
                  </li>
                  <li>
                    <strong className="text-white">
                      Not reviewing your asset depreciation schedule.
                    </strong>{' '}
                    Assets you purchased in previous years may still have remaining depreciable value.
                    Assets you disposed of or scrapped during the year can be written off entirely. And
                    new purchases under $20,000 qualify for the instant asset write-off. Freelancers
                    who don&apos;t maintain an asset register leave money on the table every year.{' '}
                    <em className="text-slate-400">
                      Fix: Keep a simple spreadsheet listing every business asset, its purchase date,
                      cost, and current written-down value.
                    </em>
                  </li>
                </ol>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-16 text-center glass rounded-2xl p-10">
            <h3 className="text-3xl font-bold text-white heading-font mb-4">
              Finish EOFY with{' '}
              <span className="gradient-text">confidence</span>
            </h3>
            <p className="text-slate-300 max-w-xl mx-auto mb-6">
              InvoiceFlow tracks your income, expenses, and GST throughout the year — so when
              June 30 arrives, you&apos;re already prepared. Pair it with our{' '}
              <Link
                href="/tools/tax-estimator"
                className="text-teal-400 hover:text-teal-300 underline transition-colors"
              >
                Tax Estimator
              </Link>{' '}
              to know exactly what you&apos;ll owe before lodgement day.
            </p>
            <Link
              href="/signup"
              className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold hover:opacity-90 transition-opacity"
            >
              Start Free — 5 Invoices/Month
            </Link>
          </section>
        
        <RelatedTools currentSlug="eofy-checklist" category="Tax & Compliance" />
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
