import type { Metadata } from 'next';
import Link from 'next/link';
import InvoiceAgingReport from './InvoiceAgingReport';
import RelatedTools from '../components/RelatedTools';

const title = 'Invoice Aging Report Generator | Free Tool — InvoiceFlow';
const description =
  'Free invoice aging report for Australian freelancers. Track overdue invoices, analyze payment patterns, and prioritize collections. Aging buckets: current, 30, 60, 90+ days overdue.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'invoice aging report',
    'accounts receivable aging',
    'overdue invoice tracker',
    'invoice aging analysis',
    'freelance invoice tracker australia',
    'unpaid invoices report',
    'accounts receivable report',
    'debtor aging report',
    'payment tracking freelancer',
    'invoice collection tool',
    'overdue payment tracker',
    'freelance cash collection',
  ],
  openGraph: {
    title: 'Invoice Aging Report Generator — Free Tool | InvoiceFlow',
    description:
      'Track and analyze overdue invoices. Free aging report for Australian freelancers.',
    url: 'https://www.invoiceflow.au/tools/invoice-aging-report',
    siteName: 'InvoiceFlow',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Invoice Aging Report Generator — Free Tool | InvoiceFlow',
    description:
      'Track overdue invoices and prioritize collections. Free Australian tool.',
  },
  alternates: {
    canonical: 'https://www.invoiceflow.au/tools/invoice-aging-report',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Invoice Aging Report Generator',
  description:
    'Track and analyze overdue invoices for Australian freelancers. Aging buckets, payment priority, and collection recommendations.',
  url: 'https://www.invoiceflow.au/tools/invoice-aging-report',
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

export default function InvoiceAgingReportPage() {
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
              Invoice Aging{' '}
              <span className="gradient-text">Report</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Track which invoices are overdue and by how much. Get aging analysis across standard
              buckets, payment priority recommendations, and a clear picture of your outstanding
              receivables. Built for Australian freelancers and sole traders.
            </p>
          </div>

          {/* Calculator */}
          <InvoiceAgingReport />

          {/* SEO Content Sections */}
          <section className="mt-16 space-y-12">
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                What Is an Invoice Aging Report?
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  An <strong className="text-white">invoice aging report</strong> (also called an
                  accounts receivable aging report) is a financial document that categorises your
                  outstanding invoices by how long they&apos;ve been unpaid. It&apos;s one of the
                  most important cash flow management tools for any freelancer or small business.
                </p>
                <p>
                  The report groups invoices into time-based &quot;buckets&quot; — typically Current
                  (not yet due), 1-30 days overdue, 31-60 days, 61-90 days, and 90+ days overdue.
                  This gives you an instant snapshot of your receivables health and helps you
                  prioritise which clients to follow up with first.
                </p>
                <div className="bg-white/5 rounded-xl p-4 mt-4">
                  <h4 className="text-white font-semibold mb-2">Why It Matters</h4>
                  <p className="text-sm text-slate-400">
                    Research shows that the probability of collecting an invoice drops significantly
                    the longer it remains unpaid. An invoice at 30 days overdue has roughly a 95%
                    chance of collection. At 90 days, that falls to around 75%. Beyond 120 days,
                    collection rates can drop below 50%. An aging report helps you act before
                    invoices become uncollectable.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                How to Read Your Aging Report
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Each aging bucket tells you something different about your receivables:
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4">
                    <h4 className="text-emerald-400 font-semibold mb-1">Current (Not Due)</h4>
                    <p className="text-sm text-slate-400">
                      These invoices haven&apos;t reached their due date yet. No action needed — but
                      monitor them as they approach due dates.
                    </p>
                  </div>
                  <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4">
                    <h4 className="text-amber-400 font-semibold mb-1">1-30 Days Overdue</h4>
                    <p className="text-sm text-slate-400">
                      Recently overdue. Send a friendly payment reminder. Most invoices in this
                      bucket get paid with a simple nudge.
                    </p>
                  </div>
                  <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-4">
                    <h4 className="text-orange-400 font-semibold mb-1">31-60 Days Overdue</h4>
                    <p className="text-sm text-slate-400">
                      Getting serious. Follow up with a phone call or firmer email. Consider pausing
                      new work for this client until payment is received.
                    </p>
                  </div>
                  <div className="bg-rose-500/10 border border-rose-500/20 rounded-xl p-4">
                    <h4 className="text-rose-400 font-semibold mb-1">61-90+ Days Overdue</h4>
                    <p className="text-sm text-slate-400">
                      Critical. These need immediate escalation — formal demand letter, payment plan
                      offer, or engagement of a debt collection agency. In Australia, you can also
                      charge interest under the{' '}
                      <em>Competition and Consumer Act 2010</em>.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Tips for Reducing Overdue Invoices
              </h2>
              <div className="space-y-4 text-slate-300">
                <ol className="space-y-4 list-decimal list-inside">
                  <li>
                    <strong className="text-white">Invoice immediately.</strong> Send your invoice
                    the moment work is delivered. Every day you delay sending is an extra day before
                    you get paid. Same-day invoicing can reduce payment times by 2-3 weeks.
                  </li>
                  <li>
                    <strong className="text-white">Use clear payment terms.</strong> Specify exact
                    due dates (not &quot;Net 30&quot; but &quot;Due 15 March 2026&quot;). Include
                    your bank details on every invoice. Remove any friction from the payment process.
                  </li>
                  <li>
                    <strong className="text-white">Require deposits for large projects.</strong> A
                    30-50% upfront deposit protects your cash flow and signals client commitment.
                    Milestone payments for larger projects keep cash flowing throughout.
                  </li>
                  <li>
                    <strong className="text-white">Automate payment reminders.</strong> Set up
                    automatic reminders 3 days before, on the due date, and 7 days after. Most
                    late payments aren&apos;t malicious — clients simply forget.
                  </li>
                  <li>
                    <strong className="text-white">Offer early payment incentives.</strong> A small
                    2% discount for payment within 7 days can dramatically improve your cash flow.
                    The cost of the discount is often less than the cost of chasing overdue invoices.
                  </li>
                  <li>
                    <strong className="text-white">Screen clients carefully.</strong> Before taking
                    on large projects, check for ABN validity, company registration, and ask for
                    references. A quick credit check can save months of chasing.
                  </li>
                </ol>
              </div>
            </div>

            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Australian Late Payment Statistics
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Late payments are a systemic issue for Australian small businesses and freelancers.
                  Understanding the landscape helps you benchmark your own receivables:
                </p>
                <div className="grid sm:grid-cols-3 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-teal-400">53%</p>
                    <p className="text-sm text-slate-400 mt-1">
                      of Australian SMEs report being paid late regularly
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-amber-400">23 days</p>
                    <p className="text-sm text-slate-400 mt-1">
                      average days beyond terms that Australian invoices are paid
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-rose-400">$115B</p>
                    <p className="text-sm text-slate-400 mt-1">
                      estimated outstanding overdue invoices across Australian businesses
                    </p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 mt-4">
                  <h4 className="text-white font-semibold mb-2">Key Findings</h4>
                  <ul className="text-sm space-y-2">
                    <li>
                      The Australian Small Business and Family Enterprise Ombudsman (ASBFEO) found
                      that late payments cause 1 in 3 small business insolvencies.
                    </li>
                    <li>
                      The Payment Times Reporting Register (PTRR) requires large businesses to
                      publicly report their payment practices, increasing transparency.
                    </li>
                    <li>
                      Freelancers and sole traders are disproportionately affected, as they typically
                      lack the cash reserves to absorb delayed payments.
                    </li>
                    <li>
                      Government contracts average 30-day payment terms, but many corporate clients
                      impose 45-60+ day terms on small suppliers.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-16 text-center glass rounded-2xl p-10">
            <h3 className="text-3xl font-bold text-white heading-font mb-4">
              Never lose track of an <span className="gradient-text">overdue invoice</span> again
            </h3>
            <p className="text-slate-300 max-w-xl mx-auto mb-6">
              InvoiceFlow automatically tracks every invoice from sent to paid. Get real-time aging
              reports, automated payment reminders, and instant alerts when invoices go overdue.
              Built for Australian freelancers with GST and BAS support included.
            </p>
            <Link
              href="/signup"
              className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold hover:opacity-90 transition-opacity"
            >
              Start Free — 5 Invoices/Month
            </Link>
          </section>
        
        <RelatedTools currentSlug="invoice-aging-report" category="Invoicing & Documents" />
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
