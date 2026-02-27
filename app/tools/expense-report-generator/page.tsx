import type { Metadata } from 'next';
import Link from 'next/link';
import ExpenseReportGenerator from './ExpenseReportGenerator';
import RelatedTools from '../components/RelatedTools';

const title = 'Freelance Expense Report Generator Australia | Free Sole Trader Expense Tool — InvoiceFlow';
const description =
  'Generate formatted expense reports for tax time, client billing, or personal records. Track ATO-aligned categories, GST credits, and missing receipts. Free Australian freelancer expense report template.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'freelance expense report generator',
    'sole trader expense report template australia',
    'freelance tax expense tracker',
    'ATO expense categories',
    'freelance expense report',
    'sole trader tax deductions',
    'GST expense tracker',
    'freelance tax report generator',
    'australian freelancer expenses',
    'business expense report template',
  ],
  openGraph: {
    title: 'Freelance Expense Report Generator — Free Tool | InvoiceFlow',
    description:
      'Generate professional expense reports for tax time. Track ATO categories, GST credits, and never miss a deduction.',
    url: 'https://www.invoiceflow.au/tools/expense-report-generator',
    siteName: 'InvoiceFlow',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Freelance Expense Report Generator — Free Tool | InvoiceFlow',
    description:
      'Generate formatted expense reports with ATO-aligned categories, GST tracking, and receipt management. Free tool for Australian freelancers.',
  },
  alternates: {
    canonical: 'https://www.invoiceflow.au/tools/expense-report-generator',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Freelance Expense Report Generator',
  description:
    'Generate formatted expense reports for tax time, client billing, or personal records. Track ATO-aligned categories, GST credits, and missing receipts.',
  url: 'https://www.invoiceflow.au/tools/expense-report-generator',
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

export default function ExpenseReportGeneratorPage() {
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
              Freelance Expense{' '}
              <span className="gradient-text">Report Generator</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Generate professional expense reports for tax time, client billing, or your own
              records. Add expenses with ATO-aligned categories, track GST credits, flag
              missing receipts, and copy a formatted report in seconds. Built for Australian
              freelancers and sole traders.
            </p>
          </div>

          {/* Calculator */}
          <ExpenseReportGenerator />

          {/* SEO Content Sections */}
          <section className="mt-16 space-y-12">
            {/* Section 1: Why Freelancers Need Expense Reports */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Why Freelancers Need Expense Reports
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  <strong className="text-white">Australian freelancers leave an estimated $7.9 billion in
                  unclaimed tax deductions on the table every year.</strong> The number one reason? Poor
                  expense tracking. Without a structured expense report, legitimate business costs slip
                  through the cracks at tax time — and you pay more tax than you should.
                </p>
                <p>
                  Expense reports aren&apos;t just for tax season. They give you real-time visibility into
                  where your money is going, help you identify unnecessary spending, and provide the
                  documentation you need if the ATO ever audits your returns. For freelancers who bill
                  expenses to clients, a clean report is the difference between getting reimbursed promptly
                  and chasing payments for weeks.
                </p>
                <div className="bg-white/5 rounded-xl p-4 mt-4">
                  <h4 className="text-white font-semibold mb-2">The Four Reasons Every Freelancer Needs Expense Reports</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-teal-400 mt-0.5 font-bold">1.</span>
                      <span><strong className="text-white">Tax deductions</strong> — Claim every legitimate expense and reduce your taxable income. The average sole trader claims $12,000-$18,000 in deductions annually.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-400 mt-0.5 font-bold">2.</span>
                      <span><strong className="text-white">Cash flow visibility</strong> — Know exactly where your money goes each month. Spot overspending on subscriptions, identify cost-saving opportunities.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-400 mt-0.5 font-bold">3.</span>
                      <span><strong className="text-white">Client billing</strong> — Bill project expenses to clients with a professional, itemised report. No more guessing or forgetting to include costs.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-400 mt-0.5 font-bold">4.</span>
                      <span><strong className="text-white">ATO compliance</strong> — The ATO requires records for all business expenses. A structured report makes BAS lodgement and end-of-year tax returns straightforward.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 2: ATO Expense Categories Explained */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                ATO Expense Categories Explained
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Understanding which categories the ATO recognises is critical to claiming correctly.
                  Here&apos;s a breakdown of the 12 key categories for Australian freelancers and sole
                  traders, with common deductions and gotchas for each.
                </p>
                <div className="space-y-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-1">Home Office</h4>
                    <p className="text-sm">Electricity, internet (business portion), dedicated office furniture, cleaning of home office. <span className="text-amber-400">Gotcha:</span> You must have a dedicated workspace — the couch doesn&apos;t count. Use the ATO fixed-rate method (67c/hour) or actual cost method.</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-1">Equipment &amp; Technology</h4>
                    <p className="text-sm">Laptops, monitors, keyboards, printers, hard drives. Items under $300 are instant write-offs. <span className="text-amber-400">Gotcha:</span> If personal use exceeds 50%, you can only claim the business portion. Keep a usage log.</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-1">Software &amp; Subscriptions</h4>
                    <p className="text-sm">Adobe Creative Cloud, Slack, project management tools, cloud storage, domain names, hosting. <span className="text-amber-400">Gotcha:</span> Netflix and Spotify are NOT deductible unless you&apos;re a content creator and they&apos;re directly used for work.</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-1">Phone &amp; Internet</h4>
                    <p className="text-sm">Mobile phone plans, home internet (business percentage), work-only phone lines. <span className="text-amber-400">Gotcha:</span> You must apportion personal vs business use. The ATO accepts a 4-week diary sample to determine the split.</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-1">Vehicle &amp; Travel</h4>
                    <p className="text-sm">Client site visits, conferences, business travel, car expenses (logbook or cents-per-km method). <span className="text-amber-400">Gotcha:</span> Commuting from home to a regular workplace is NOT deductible. Only travel between workplaces or to client sites counts.</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-1">Insurance</h4>
                    <p className="text-sm">Professional indemnity, public liability, income protection (if for business), business contents insurance. <span className="text-amber-400">Gotcha:</span> Health insurance and life insurance premiums are NOT business deductions (though you may get the private health rebate separately).</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-1">Professional Development</h4>
                    <p className="text-sm">Courses, certifications, conferences, books, and workshops related to your current work. <span className="text-amber-400">Gotcha:</span> Study must relate to your current income-producing activity. A web developer can&apos;t claim a cooking course.</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-1">Marketing &amp; Advertising</h4>
                    <p className="text-sm">Website costs, Google/Meta ads, business cards, portfolio hosting, SEO tools, social media tools. <span className="text-amber-400">Gotcha:</span> Personal social media costs are not deductible, even if you occasionally post about work.</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-1">Accounting &amp; Legal</h4>
                    <p className="text-sm">Tax agent fees, bookkeeping software, legal advice, contract drafting, ABN registration. <span className="text-amber-400">Gotcha:</span> The cost of managing your tax affairs is deductible — including what you pay your accountant to prepare your return.</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-1">Coworking &amp; Office</h4>
                    <p className="text-sm">Coworking memberships, hot desk fees, short-term office leases, meeting room bookings. <span className="text-amber-400">Gotcha:</span> Coffee from the coworking cafe is not deductible as a work expense. Only the actual workspace cost counts.</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-1">Superannuation</h4>
                    <p className="text-sm">Voluntary super contributions as a sole trader (claim as a personal deduction). <span className="text-amber-400">Gotcha:</span> You must lodge a &ldquo;Notice of intent to claim&rdquo; form with your super fund BEFORE lodging your tax return. Many freelancers miss this step and lose the deduction entirely.</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-1">Other</h4>
                    <p className="text-sm">Bank fees (business account), postage, stationery, client gifts (under $300 non-entertainment), union/association memberships. <span className="text-amber-400">Gotcha:</span> Entertainment expenses (meals with clients, event tickets) are generally NOT deductible for sole traders.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3: 5 Expense Tracking Mistakes */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                5 Expense Tracking Mistakes That Cost Freelancers Money
              </h2>
              <div className="space-y-4 text-slate-300">
                <ol className="space-y-4 list-decimal list-inside">
                  <li>
                    <strong className="text-white">Missing receipts.</strong> The ATO requires records for
                    every claim over $10, and the burden of proof is on you. Without receipts, your deductions
                    get disallowed in an audit. The fix: photograph receipts immediately using your phone and
                    store them in a dedicated folder. Our tool flags items without receipts so you know
                    exactly what documentation you&apos;re missing.
                  </li>
                  <li>
                    <strong className="text-white">Mixing personal and business expenses.</strong> Using one
                    bank account and one credit card for everything makes it nearly impossible to separate
                    deductible business expenses from personal spending. Open a dedicated business account
                    (most banks offer free sole trader accounts) and run all business transactions through it.
                  </li>
                  <li>
                    <strong className="text-white">Forgetting small expenses.</strong> A $15 domain renewal
                    here, a $25 parking fee there — individually they&apos;re small, but they add up. The
                    average freelancer forgets $2,000-$4,000 in small expenses annually. That&apos;s $600-$1,500
                    in lost tax savings at the 30% marginal rate.
                  </li>
                  <li>
                    <strong className="text-white">Wrong financial year allocation.</strong> An expense paid in
                    June vs July can land in different financial years. If you&apos;re cash-basis (most sole
                    traders are), the deduction belongs in the year you paid, not the year you were invoiced.
                    Double-check dates around June 30.
                  </li>
                  <li>
                    <strong className="text-white">Not claiming GST credits.</strong> If you&apos;re registered
                    for GST, every business expense with GST in the price is a credit you can claim on your
                    BAS. Forgetting to track and claim GST credits is essentially paying 10% too much on
                    every purchase. Use the{' '}
                    <a href="/tools/expense-deduction-calculator" className="text-teal-400 hover:underline">
                      Expense &amp; Deduction Calculator
                    </a>{' '}
                    to estimate your total claimable deductions.
                  </li>
                </ol>
              </div>
            </div>

            {/* Section 4: Record Keeping Requirements */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Record Keeping Requirements for Australian Freelancers
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  The ATO is clear: <strong className="text-white">you must keep records for 5 years</strong> from
                  the date you lodge your tax return (or from the date the expense was incurred, whichever is
                  later). Failing to keep adequate records can result in deductions being disallowed and
                  penalties of up to $1,100 per offence.
                </p>
                <div className="bg-white/5 rounded-xl p-4 mt-4">
                  <h4 className="text-white font-semibold mb-2">What Counts as a Receipt?</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-teal-400 mt-0.5">&#10003;</span>
                      <span>Tax invoices from suppliers (must include ABN, date, description, amount, GST amount)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-400 mt-0.5">&#10003;</span>
                      <span>Bank and credit card statements showing the transaction</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-400 mt-0.5">&#10003;</span>
                      <span>Email confirmations for online purchases and subscriptions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-400 mt-0.5">&#10003;</span>
                      <span>Photos of physical receipts (the ATO accepts digital copies)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-400 mt-0.5">&#10003;</span>
                      <span>Diary entries for expenses under $10 (or where a receipt is unavailable)</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-4 mt-4">
                  <h4 className="text-white font-semibold mb-2">Digital vs Paper Records</h4>
                  <p className="text-sm">
                    Good news: the ATO has fully accepted digital records since 2019. You don&apos;t need to
                    keep paper receipts as long as your digital copies are legible and stored securely. Use
                    cloud storage (Google Drive, Dropbox, iCloud) and back up regularly. The ATO&apos;s own
                    myDeductions app is free and lets you photograph and categorise receipts on the go.
                  </p>
                </div>
                <div className="grid sm:grid-cols-3 gap-4 mt-4">
                  <div className="bg-teal-500/10 border border-teal-500/20 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-teal-400">5 years</p>
                    <p className="text-sm text-slate-400 mt-1">Record retention period</p>
                  </div>
                  <div className="bg-teal-500/10 border border-teal-500/20 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-teal-400">$1,100</p>
                    <p className="text-sm text-slate-400 mt-1">Max penalty per offence</p>
                  </div>
                  <div className="bg-teal-500/10 border border-teal-500/20 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-teal-400">100%</p>
                    <p className="text-sm text-slate-400 mt-1">Digital records accepted</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-16 text-center glass rounded-2xl p-10">
            <h3 className="text-3xl font-bold text-white heading-font mb-4">
              Take control of your <span className="gradient-text">business expenses</span>
            </h3>
            <p className="text-slate-300 max-w-xl mx-auto mb-6">
              InvoiceFlow automatically categorises expenses, tracks GST credits, flags missing
              receipts, and generates tax-ready reports. Stop leaving deductions on the table —
              professional invoicing and expense management in one platform.
            </p>
            <Link
              href="/signup"
              className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold hover:opacity-90 transition-opacity"
            >
              Start Free — 5 Invoices/Month
            </Link>
          </section>
        
        <RelatedTools currentSlug="expense-report-generator" category="Business Analytics" />
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
