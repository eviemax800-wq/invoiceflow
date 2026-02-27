import type { Metadata } from 'next';
import Link from 'next/link';
import BasPreparation from './BasPreparation';
import RelatedTools from '../components/RelatedTools';
import EmailCapture from '../components/EmailCapture';

const title =
  'Free BAS Preparation Checklist for Australian Freelancers — Quarterly BAS Lodgement Guide | InvoiceFlow';
const description =
  'Prepare your Business Activity Statement with a personalised BAS preparation checklist. GST reconciliation, PAYG instalments, income verification, expense review — everything Australian sole traders need before lodging their BAS.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'BAS preparation checklist',
    'how to lodge BAS sole trader',
    'quarterly BAS guide freelancer',
    'BAS lodgement checklist australia',
    'activity statement preparation freelancer',
    'BAS preparation sole trader',
    'GST reconciliation checklist',
    'quarterly BAS lodgement guide',
    'BAS checklist freelancer australia',
    'business activity statement preparation',
  ],
  openGraph: {
    title: 'BAS Preparation Checklist — Free Tool | InvoiceFlow',
    description:
      'Prepare your Business Activity Statement with a personalised BAS checklist. GST, PAYG, income verification, and expense review for Australian freelancers.',
    url: 'https://www.invoiceflow.au/tools/bas-preparation',
    siteName: 'InvoiceFlow',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BAS Preparation Checklist — Free Tool | InvoiceFlow',
    description:
      'Prepare your quarterly BAS with a personalised checklist for Australian freelancers and sole traders.',
  },
  alternates: {
    canonical: 'https://www.invoiceflow.au/tools/bas-preparation',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'BAS Preparation Checklist',
  description:
    'Generate a personalised Business Activity Statement preparation checklist for Australian freelancers and sole traders. Covers GST reconciliation, PAYG instalments, income verification, expense review, and final lodgement checks.',
  url: 'https://www.invoiceflow.au/tools/bas-preparation',
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

export default function BasPreparationPage() {
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
              BAS Preparation{' '}
              <span className="gradient-text">Checklist</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Generate a personalised Business Activity Statement preparation checklist for your
              freelance business. Reconciliation, GST calculations, income verification, expense
              review, PAYG instalments, and final lodgement checks — all in one place.
            </p>
          </div>

          {/* BAS Preparation Tool */}
          <BasPreparation />

          {/* SEO Content Sections */}
          <section className="mt-16 space-y-12">
            {/* Section 1: What Is a BAS and Who Needs to Lodge One? */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                What Is a BAS and Who Needs to Lodge One?
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  <strong className="text-white">
                    A Business Activity Statement (BAS) is a form submitted to the Australian
                    Taxation Office (ATO) to report your business tax obligations.
                  </strong>{' '}
                  If you&apos;re registered for GST — which is mandatory once your annual turnover
                  reaches $75,000 (or $150,000 for not-for-profit organisations) — you must lodge a
                  BAS either quarterly or monthly. Even if your turnover is below the threshold, you
                  can voluntarily register for GST and lodge BAS returns to claim GST credits on
                  business purchases.
                </p>
                <p>
                  Your BAS reports several key items: the GST you&apos;ve collected on sales, the
                  GST you&apos;ve paid on business purchases, your PAYG income tax instalments (if
                  applicable), PAYG withholding amounts (if you have employees), and in some cases
                  fuel tax credits. For most freelancers and sole traders, the primary focus is GST
                  collected, GST paid, and PAYG instalments.
                </p>
                <p>
                  Most small businesses lodge quarterly, but you can opt for monthly lodgement if
                  your turnover exceeds $20 million or if you prefer more frequent reporting. Your
                  reporting method — cash or accrual — determines when you recognise income and
                  expenses. Under the{' '}
                  <strong className="text-white">cash method</strong>, you report GST in the period
                  payment is received or made. Under the{' '}
                  <strong className="text-white">accrual method</strong>, you report GST when you
                  issue or receive an invoice, regardless of when payment occurs.
                </p>
                <div className="grid sm:grid-cols-3 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-teal-400">$75K</p>
                    <p className="text-xs text-slate-500 mt-1">
                      Annual turnover threshold for mandatory GST registration
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-teal-400">Quarterly</p>
                    <p className="text-xs text-slate-500 mt-1">
                      Most common BAS lodgement frequency for freelancers and sole traders
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-teal-400">Cash vs Accrual</p>
                    <p className="text-xs text-slate-500 mt-1">
                      Two reporting methods — cash basis is most common for small businesses
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: Key BAS Lodgement Deadlines */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Key BAS Lodgement Deadlines
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Missing a BAS lodgement deadline can result in ATO penalties and interest charges.
                  Quarterly lodgers have four deadlines per financial year, while monthly lodgers
                  must lodge by the 21st of the following month. If you lodge electronically (or
                  through a registered tax or BAS agent), you generally receive an additional four
                  weeks to lodge.
                </p>
                <div className="overflow-x-auto mt-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-2 text-slate-400 font-medium">Quarter</th>
                        <th className="text-left py-2 text-slate-400 font-medium">Period</th>
                        <th className="text-right py-2 text-slate-400 font-medium">Due Date</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      <tr>
                        <td className="py-3 text-white">Q1</td>
                        <td className="py-3">July - September</td>
                        <td className="py-3 text-right text-teal-400">28 October</td>
                      </tr>
                      <tr>
                        <td className="py-3 text-white">Q2</td>
                        <td className="py-3">October - December</td>
                        <td className="py-3 text-right text-teal-400">28 February</td>
                      </tr>
                      <tr>
                        <td className="py-3 text-white">Q3</td>
                        <td className="py-3">January - March</td>
                        <td className="py-3 text-right text-teal-400">28 April</td>
                      </tr>
                      <tr>
                        <td className="py-3 text-white">Q4</td>
                        <td className="py-3">April - June</td>
                        <td className="py-3 text-right text-teal-400">28 July</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="bg-white/5 rounded-xl p-4 mt-4">
                  <p className="text-sm">
                    <strong className="text-amber-400">Monthly lodgers:</strong> Monthly BAS is due
                    by the 21st of the following month (e.g., July BAS due 21 August). Electronic
                    lodgers typically receive an additional four weeks, but check the ATO&apos;s
                    specific due dates each period as extensions can vary.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-sm">
                    <strong className="text-amber-400">Tax agent extension:</strong> If you use a
                    registered tax agent or BAS agent to lodge, you may receive extended deadlines.
                    However, you must be registered with your agent{' '}
                    <strong className="text-white">before</strong> the original due date to qualify
                    for the extension. Check with your agent for their specific lodgement schedule.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3: Common BAS Mistakes That Trigger ATO Penalties */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Common BAS Mistakes That Trigger ATO Penalties
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  The ATO processes millions of BAS returns each year and uses data matching to
                  identify errors. Even honest mistakes can trigger reviews, penalties, or interest
                  charges. Here are the most common BAS errors freelancers make — and how to avoid
                  each one.
                </p>
                <ol className="space-y-4 list-decimal list-inside">
                  <li>
                    <strong className="text-white">
                      Mixing personal and business GST claims.
                    </strong>{' '}
                    One of the most common errors the ATO flags is claiming GST credits on
                    personal expenses. If you use a single bank account for personal and business
                    transactions, it&apos;s easy to accidentally include a personal grocery
                    receipt or private phone bill in your BAS. The ATO cross-references your
                    claims against industry benchmarks and supplier data — unusual patterns
                    trigger automatic reviews.{' '}
                    <em className="text-slate-400">
                      Fix: Use a dedicated business bank account and reconcile every transaction
                      before lodging.
                    </em>
                  </li>
                  <li>
                    <strong className="text-white">
                      Claiming GST on GST-free or input-taxed purchases.
                    </strong>{' '}
                    Not all business expenses include GST. Bank fees, government charges, wages,
                    superannuation contributions, insurance premiums (some), and interest on
                    business loans are typically GST-free or input-taxed. Claiming GST credits on
                    these items inflates your refund and creates an ATO liability when detected.{' '}
                    <em className="text-slate-400">
                      Fix: Check every supplier invoice for a valid ABN and GST amount before
                      including it in your BAS calculations.
                    </em>
                  </li>
                  <li>
                    <strong className="text-white">
                      Not reconciling before lodging.
                    </strong>{' '}
                    Lodging a BAS without reconciling your bank account against your accounting
                    records is a recipe for errors. Missing transactions mean under-reported income
                    or missed GST credits. Duplicate entries mean over-claimed deductions. The ATO
                    expects your BAS to match your actual business activity — and they have access
                    to your bank data to check.{' '}
                    <em className="text-slate-400">
                      Fix: Reconcile your bank account completely before running your BAS report.
                      Every transaction should be categorised and matched.
                    </em>
                  </li>
                  <li>
                    <strong className="text-white">
                      Using the wrong reporting method (cash vs accrual).
                    </strong>{' '}
                    Your reporting method determines when you recognise income and expenses for GST
                    purposes. If you elected the cash method but your accounting software is set to
                    accrual (or vice versa), your BAS figures will be wrong. This is especially
                    common when freelancers switch accounting software or set up a new system
                    without checking the GST reporting settings.{' '}
                    <em className="text-slate-400">
                      Fix: Confirm your elected reporting method with the ATO and ensure your
                      accounting software matches. You can check your method via your myGov
                      account.
                    </em>
                  </li>
                </ol>
                <div className="bg-white/5 rounded-xl p-4 mt-4">
                  <p className="text-sm">
                    <strong className="text-amber-400">Penalty warning:</strong> The ATO&apos;s
                    Failure to Lodge (FTL) penalty starts at $313 for each 28-day period (or part
                    thereof) that your BAS is overdue, up to a maximum of five penalty units. For
                    incorrect BAS statements, penalties range from 25% to 75% of the shortfall
                    amount depending on whether the error was due to a lack of reasonable care,
                    recklessness, or intentional disregard.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4: How InvoiceFlow Simplifies BAS Preparation */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                How InvoiceFlow Simplifies BAS Preparation
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  The hardest part of BAS preparation is gathering accurate data. When your
                  invoices, income, and GST are tracked automatically throughout the quarter, BAS
                  lodgement becomes a 15-minute task instead of a weekend ordeal.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Automatic GST Tracking</h4>
                    <p className="text-sm">
                      Every invoice you send through InvoiceFlow automatically calculates and
                      records GST. When BAS time arrives, your GST collected figure is ready —
                      no manual adding up invoices or cross-referencing spreadsheets.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Income Reconciliation</h4>
                    <p className="text-sm">
                      Track which invoices have been paid and when, making cash-method BAS
                      reporting accurate. You can instantly see your total income for any quarter
                      and match it against your bank statements.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Quarterly Reports</h4>
                    <p className="text-sm">
                      Generate quarterly income summaries broken down by client, GST collected,
                      and payment status. Export the data directly to your accountant or use it
                      to complete your BAS return in minutes.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Deadline Reminders</h4>
                    <p className="text-sm">
                      Never miss a BAS deadline. InvoiceFlow sends reminders before each quarterly
                      due date so you have time to reconcile and lodge without last-minute stress.
                    </p>
                  </div>
                </div>
                <p className="mt-2">
                  Pair this checklist with our{' '}
                  <Link
                    href="/tools/gst-calculator"
                    className="text-teal-400 hover:text-teal-300 underline transition-colors"
                  >
                    GST Calculator
                  </Link>{' '}
                  to verify your GST figures, and our{' '}
                  <Link
                    href="/tools/tax-estimator"
                    className="text-teal-400 hover:text-teal-300 underline transition-colors"
                  >
                    Tax Estimator
                  </Link>{' '}
                  to understand how your BAS quarter fits into your annual tax position.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-16 text-center glass rounded-2xl p-10">
            <h3 className="text-3xl font-bold text-white heading-font mb-4">
              Lodge your BAS with{' '}
              <span className="gradient-text">confidence</span>
            </h3>
            <p className="text-slate-300 max-w-xl mx-auto mb-6">
              InvoiceFlow tracks your income, GST, and payment status throughout the quarter — so
              when BAS time arrives, your numbers are already reconciled. Stop scrambling at
              deadline and start lodging with confidence.
            </p>
            <Link
              href="/signup"
              className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold hover:opacity-90 transition-opacity"
            >
              Start Free — 5 Invoices/Month
            </Link>
          </section>
        
        <RelatedTools currentSlug="bas-preparation" category="Tax & Compliance" />
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
