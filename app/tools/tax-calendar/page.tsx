import type { Metadata } from 'next';
import Link from 'next/link';
import TaxCalendar from './TaxCalendar';
import RelatedTools from '../components/RelatedTools';
import EmailCapture from '../components/EmailCapture';
import BreadcrumbSchema from '../components/BreadcrumbSchema';
import FAQSchema from '../components/FAQSchema';

const title = 'ATO Tax Calendar & BAS Deadline Tracker Australia | Free Tool — InvoiceFlow';
const description =
  'Never miss a BAS due date or ATO deadline again. Free interactive tax calendar for Australian freelancers and sole traders — quarterly BAS, PAYG instalments, super guarantee, income tax return dates for FY2025-26 and FY2026-27.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'BAS due dates 2026 australia',
    'freelance tax calendar australia',
    'quarterly BAS deadline',
    'ATO tax dates sole trader',
    'PAYG instalment due dates',
    'BAS lodgement dates',
    'ATO deadline tracker',
    'super guarantee due dates',
    'tax return due date australia',
    'GST reporting dates',
  ],
  openGraph: {
    title: 'ATO Tax Calendar & BAS Deadline Tracker — Free Tool | InvoiceFlow',
    description:
      'Free interactive tax calendar with every ATO deadline for Australian freelancers. BAS, PAYG, super, income tax — all in one place.',
    url: 'https://www.invoiceflow.au/tools/tax-calendar',
    siteName: 'InvoiceFlow',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ATO Tax Calendar & BAS Deadline Tracker — Free Tool | InvoiceFlow',
    description:
      'Never miss a BAS due date. Free interactive tax calendar for Australian freelancers and sole traders.',
  },
  alternates: {
    canonical: 'https://www.invoiceflow.au/tools/tax-calendar',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'ATO Tax Calendar & BAS Deadline Tracker Australia',
  description:
    'Free interactive tax calendar showing every ATO deadline for Australian freelancers and sole traders. Covers BAS, PAYG, super guarantee, income tax, and STP dates.',
  url: 'https://www.invoiceflow.au/tools/tax-calendar',
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

const faqs = [
  {
    question: "Is this tool free to use?",
    answer: "Yes, this tool is completely free with no account required. All calculations happen in your browser — we don't store any of your financial data."
  },
  {
    question: "Are the tax rates current for 2025-26?",
    answer: "Yes, this tool uses the latest ATO rates and thresholds for the 2025-26 financial year, including updated income tax brackets, Medicare levy rates, and the superannuation guarantee of 11.5%."
  },
  {
    question: "Can I use the results for my tax return or BAS?",
    answer: "This tool provides estimates to help you plan and prepare. For your official tax return or BAS lodgement, we recommend verifying figures with a registered tax agent or the ATO."
  }
];

export default function TaxCalendarPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FAQSchema faqs={faqs} />
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
              ATO <span className="gradient-text">Tax Calendar</span> &amp; BAS Deadlines
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Every ATO deadline that matters for Australian freelancers and sole traders — BAS
              lodgement dates, PAYG instalments, super guarantee, income tax returns — all in one
              interactive calendar. Never cop a late lodgement penalty again.
            </p>
          </div>

          {/* Calendar */}
          <TaxCalendar />

          {/* SEO Content Sections */}
          <section className="mt-16 space-y-12">
            {/* Section 1: Understanding BAS */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Understanding BAS for Australian Freelancers
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  A Business Activity Statement (BAS) is the form you lodge with the ATO to report
                  and pay several tax obligations, including GST, PAYG income tax instalments, and
                  PAYG withholding. If you&apos;re a sole trader or freelancer registered for GST,
                  you&apos;re required to lodge a BAS — either quarterly or monthly depending on your
                  annual turnover and registration preferences.
                </p>
                <p>
                  You must register for GST once your business turnover reaches $75,000 per year (or
                  $150,000 for non-profit organisations). Even if you&apos;re below the threshold, you
                  can voluntarily register to claim GST credits on business purchases. Most
                  freelancers lodge quarterly, but if your turnover exceeds $20 million, monthly
                  lodgement is mandatory.
                </p>
                <p>
                  Your BAS reports three key items: GST collected on sales minus GST paid on business
                  purchases (giving you your net GST position), PAYG income tax instalments (pay-as-you-go
                  amounts toward your annual tax bill), and PAYG withholding if you employ staff.
                  Getting these right and lodging on time is critical — the ATO issues penalties
                  starting at $313 per 28-day period overdue, up to a maximum of $1,565 per BAS
                  for small businesses.
                </p>
                <div className="grid sm:grid-cols-3 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-teal-400 mb-1">$65B</p>
                    <p className="text-sm">GST collected annually in Australia</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-amber-400 mb-1">2.4M</p>
                    <p className="text-sm">sole traders registered with the ATO</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-rose-400 mb-1">$1,110</p>
                    <p className="text-sm">max BAS late lodgement penalty</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: Key ATO Deadlines */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Key ATO Deadlines Every Sole Trader Must Know
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Missing an ATO deadline doesn&apos;t just cost you in penalties — it can trigger
                  audit flags, reduce your eligibility for payment plans, and damage your compliance
                  record. Here&apos;s a comprehensive breakdown of every major obligation, when
                  it&apos;s due, and what happens if you&apos;re late.
                </p>
                <div className="overflow-x-auto mt-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-3 px-4 text-slate-400 font-medium">Obligation</th>
                        <th className="text-left py-3 px-4 text-slate-400 font-medium">Due Date</th>
                        <th className="text-left py-3 px-4 text-slate-400 font-medium">Frequency</th>
                        <th className="text-left py-3 px-4 text-slate-400 font-medium">Penalty (Late)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      <tr>
                        <td className="py-3 px-4 text-white">BAS Q1 (Jul-Sep)</td>
                        <td className="py-3 px-4 text-teal-400">28 October</td>
                        <td className="py-3 px-4">Quarterly</td>
                        <td className="py-3 px-4 text-rose-400">$313 per 28 days</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-white">BAS Q2 (Oct-Dec)</td>
                        <td className="py-3 px-4 text-teal-400">28 February</td>
                        <td className="py-3 px-4">Quarterly</td>
                        <td className="py-3 px-4 text-rose-400">$313 per 28 days</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-white">BAS Q3 (Jan-Mar)</td>
                        <td className="py-3 px-4 text-teal-400">28 April</td>
                        <td className="py-3 px-4">Quarterly</td>
                        <td className="py-3 px-4 text-rose-400">$313 per 28 days</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-white">BAS Q4 (Apr-Jun)</td>
                        <td className="py-3 px-4 text-teal-400">28 August</td>
                        <td className="py-3 px-4">Quarterly</td>
                        <td className="py-3 px-4 text-rose-400">$313 per 28 days</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-white">Monthly BAS</td>
                        <td className="py-3 px-4 text-teal-400">21st of following month</td>
                        <td className="py-3 px-4">Monthly</td>
                        <td className="py-3 px-4 text-rose-400">$313 per 28 days</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-white">Income Tax Return (self)</td>
                        <td className="py-3 px-4 text-teal-400">31 October</td>
                        <td className="py-3 px-4">Annual</td>
                        <td className="py-3 px-4 text-rose-400">$313 per 28 days</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-white">Income Tax Return (agent)</td>
                        <td className="py-3 px-4 text-teal-400">15 May (following year)</td>
                        <td className="py-3 px-4">Annual</td>
                        <td className="py-3 px-4 text-rose-400">$313 per 28 days</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-white">PAYG Instalments Q1</td>
                        <td className="py-3 px-4 text-teal-400">28 October</td>
                        <td className="py-3 px-4">Quarterly</td>
                        <td className="py-3 px-4 text-rose-400">GIC interest daily</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-white">Super Guarantee Q1</td>
                        <td className="py-3 px-4 text-teal-400">28 October</td>
                        <td className="py-3 px-4">Quarterly</td>
                        <td className="py-3 px-4 text-rose-400">Super guarantee charge</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-white">Super Guarantee Q2</td>
                        <td className="py-3 px-4 text-teal-400">28 January</td>
                        <td className="py-3 px-4">Quarterly</td>
                        <td className="py-3 px-4 text-rose-400">Super guarantee charge</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-white">Super Guarantee Q3</td>
                        <td className="py-3 px-4 text-teal-400">28 April</td>
                        <td className="py-3 px-4">Quarterly</td>
                        <td className="py-3 px-4 text-rose-400">Super guarantee charge</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-white">Super Guarantee Q4</td>
                        <td className="py-3 px-4 text-teal-400">28 July</td>
                        <td className="py-3 px-4">Quarterly</td>
                        <td className="py-3 px-4 text-rose-400">Super guarantee charge</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-white">STP Finalisation</td>
                        <td className="py-3 px-4 text-teal-400">14 July</td>
                        <td className="py-3 px-4">Annual</td>
                        <td className="py-3 px-4 text-rose-400">$313 per 28 days</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-white">FBT Return</td>
                        <td className="py-3 px-4 text-teal-400">21 May</td>
                        <td className="py-3 px-4">Annual</td>
                        <td className="py-3 px-4 text-rose-400">$313 per 28 days</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="bg-gradient-to-r from-teal-500/10 to-blue-500/10 border border-teal-500/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-teal-400 font-medium mb-2">Tax Agent Extension</p>
                  <p className="text-sm">
                    If you use a registered tax agent, you typically get extended due dates for your
                    income tax return (up to 15 May the following year) and may receive BAS extensions
                    of up to 4 weeks. Make sure you&apos;re registered with your agent before the
                    original due date to qualify for the extension.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3: Tips */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Tips to Never Miss a Tax Deadline
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Late lodgement penalties, general interest charges, and the stress of last-minute
                  scrambling are entirely avoidable. Here are seven proven strategies that the most
                  organised freelancers and sole traders use to stay on top of their ATO obligations.
                </p>
                <div className="space-y-4 mt-2">
                  <div className="bg-white/5 rounded-xl p-5">
                    <h4 className="text-white font-semibold mb-2">1. Set Calendar Reminders 2 Weeks Early</h4>
                    <p className="text-sm">
                      Don&apos;t wait until the due date. Set a reminder 14 days before every BAS and
                      PAYG deadline. This gives you enough buffer to gather receipts, reconcile
                      accounts, and lodge without rushing. Use Google Calendar, Apple Reminders, or
                      your accounting software&apos;s built-in alerts.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-5">
                    <h4 className="text-white font-semibold mb-2">2. Use Cloud Accounting Software</h4>
                    <p className="text-sm">
                      Tools like Xero, MYOB, or QuickBooks connect directly to the ATO and can
                      pre-fill your BAS. They track GST automatically, categorise expenses, and send
                      you reminders when lodgement is due. The $30-50/month cost pays for itself in
                      time saved and penalties avoided.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-5">
                    <h4 className="text-white font-semibold mb-2">3. Do a Quarterly Review Routine</h4>
                    <p className="text-sm">
                      Block out 2 hours at the end of each quarter (September, December, March, June)
                      to review your income, expenses, GST position, and upcoming obligations. This
                      regular check-in prevents surprises and makes BAS lodgement a 15-minute task
                      instead of a full-day panic.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-5">
                    <h4 className="text-white font-semibold mb-2">4. Engage a BAS Agent or Tax Professional</h4>
                    <p className="text-sm">
                      A registered BAS agent can lodge on your behalf, often with extended due dates.
                      For most freelancers, a BAS agent costs $150-300 per quarter and handles
                      reconciliation, lodgement, and ATO correspondence. The extended deadlines alone
                      can save you significant stress.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-5">
                    <h4 className="text-white font-semibold mb-2">5. Keep Records Current (Not End-of-Year)</h4>
                    <p className="text-sm">
                      The ATO requires you to keep records for 5 years. The best approach is real-time
                      bookkeeping: photograph receipts immediately (apps like HubDoc or Dext work
                      well), reconcile bank feeds weekly, and categorise expenses as they happen.
                      End-of-year catch-ups lead to errors and missed deductions.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-5">
                    <h4 className="text-white font-semibold mb-2">6. Lodge Early, Even If You Can&apos;t Pay</h4>
                    <p className="text-sm">
                      Here&apos;s a critical distinction: the ATO penalises late lodgement separately
                      from late payment. If you can&apos;t afford to pay your BAS bill, lodge on time
                      anyway — you&apos;ll avoid the lodgement penalty and can then set up a payment
                      plan for the amount owed. The ATO is generally reasonable about payment
                      arrangements if you&apos;re proactive.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-5">
                    <h4 className="text-white font-semibold mb-2">7. Understand When Extensions Apply</h4>
                    <p className="text-sm">
                      If a due date falls on a weekend or public holiday, you generally have until the
                      next business day. Electronic lodgement via a tax agent can also extend certain
                      due dates. And if you&apos;re affected by a natural disaster or exceptional
                      circumstances, the ATO may grant individual extensions — but you need to apply
                      before the due date, not after.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-16 text-center glass rounded-2xl p-10">
            <h3 className="text-3xl font-bold text-white heading-font mb-4">
              Ready to <span className="gradient-text">stay on top of tax?</span>
            </h3>
            <p className="text-slate-300 max-w-xl mx-auto mb-6">
              InvoiceFlow helps Australian freelancers track income, automate GST calculations on
              every invoice, and keep clean records so BAS lodgement takes minutes, not hours.
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
                Try Tax Estimator Calculator
              </Link>
            </div>
          </section>
        
        <RelatedTools currentSlug="tax-calendar" category="Tax & Compliance" />
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
