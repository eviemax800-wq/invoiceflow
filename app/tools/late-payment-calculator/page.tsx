import type { Metadata } from 'next';
import Link from 'next/link';
import LatePaymentCalculator from './LatePaymentCalculator';

const title = 'Late Payment Interest Calculator Australia | Free Invoice Tool — InvoiceFlow';
const description =
  'Calculate interest on overdue invoices for Australian businesses. Free late payment interest calculator with simple, monthly, and daily compounding. Know exactly what you\'re owed.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'late payment interest calculator australia',
    'overdue invoice interest calculator',
    'calculate interest on late payment',
    'late payment penalty calculator',
    'invoice interest calculator australia',
    'overdue invoice calculator',
    'late payment interest rate australia',
    'invoice late fee calculator',
    'debt interest calculator australia',
    'business invoice interest',
    'compound interest late payment',
    'simple interest overdue invoice',
  ],
  openGraph: {
    title: 'Late Payment Interest Calculator — Free Tool | InvoiceFlow',
    description:
      'Calculate interest on overdue invoices instantly. Free Australian late payment interest calculator with simple, monthly, and daily compounding options.',
    url: 'https://www.invoiceflow.au/tools/late-payment-calculator',
    siteName: 'InvoiceFlow',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Late Payment Interest Calculator — Free Tool | InvoiceFlow',
    description:
      'Calculate interest on overdue invoices instantly. Free Australian late payment interest calculator.',
  },
  alternates: {
    canonical: 'https://www.invoiceflow.au/tools/late-payment-calculator',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Late Payment Interest Calculator',
  description:
    'Calculate interest on overdue invoices for Australian businesses. Supports simple, monthly, and daily compounding.',
  url: 'https://www.invoiceflow.au/tools/late-payment-calculator',
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

export default function LatePaymentCalculatorPage() {
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
              Late Payment Interest{' '}
              <span className="gradient-text">Calculator</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Calculate exactly how much interest is owed on overdue invoices. Supports simple,
              monthly, and daily compounding — built for Australian businesses and freelancers.
            </p>
          </div>

          {/* Calculator Component */}
          <LatePaymentCalculator />

          {/* SEO Content Sections */}
          <div className="mt-20 space-y-16">
            {/* Section 1: Understanding Late Payment Interest */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-white heading-font mb-6">
                Understanding Late Payment Interest in Australia
              </h2>
              <div className="glass rounded-2xl p-6 sm:p-8 border border-white/10 space-y-4 text-slate-300 leading-relaxed">
                <p>
                  In Australia, businesses have the right to charge interest on overdue invoices — but only if this
                  right is established in the original contract, terms of trade, or on the invoice itself. Unlike some
                  jurisdictions, Australia does not have a statutory right to late payment interest for business-to-business
                  transactions without a contractual basis.
                </p>
                <p>
                  The key legislation that governs debt recovery and late payments includes the{' '}
                  <strong className="text-white">Competition and Consumer Act 2010</strong>,
                  state-level fair trading legislation, and common law principles around contract enforcement.
                  For government contracts, the <strong className="text-white">Payment Times Reporting Act 2020</strong>{' '}
                  requires large businesses to publicly report their payment practices to small business suppliers.
                </p>
                <p>
                  When setting your late payment interest terms, it is essential to include clear language in your
                  contracts and invoices. A typical clause might read: &ldquo;Interest will be charged at a rate of 10% per
                  annum on any amount outstanding after the due date.&rdquo; Without this clause, recovering interest
                  through legal channels becomes significantly more difficult.
                </p>
                <p>
                  Small businesses are particularly affected by late payments. According to the Australian Small
                  Business and Family Enterprise Ombudsman, payment times averaging 30 to 60 days are common, but
                  many businesses experience delays well beyond their agreed terms. This calculator helps you
                  understand the true cost of those delays.
                </p>
              </div>
            </section>

            {/* Section 2: How to Calculate Interest */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-white heading-font mb-6">
                How to Calculate Interest on Overdue Invoices
              </h2>
              <div className="glass rounded-2xl p-6 sm:p-8 border border-white/10 space-y-6 text-slate-300 leading-relaxed">
                <p>
                  There are three common methods for calculating interest on overdue invoices. The method you use
                  should be specified in your contract or payment terms.
                </p>

                <div className="bg-white/5 rounded-xl p-5">
                  <h3 className="text-lg font-semibold text-white mb-3">Simple Interest</h3>
                  <p className="text-sm text-slate-400 mb-3">
                    The most common and straightforward method. Interest is calculated only on the original
                    principal amount.
                  </p>
                  <div className="bg-white/5 rounded-lg p-4 font-mono text-teal-400 text-sm">
                    Interest = Principal x Annual Rate x (Days Overdue / 365)
                  </div>
                  <p className="text-sm text-slate-400 mt-3">
                    <strong className="text-slate-300">Example:</strong> A $5,000 invoice that is 45 days overdue at 10% p.a.
                    = $5,000 x 0.10 x (45/365) = <strong className="text-teal-400">$61.64</strong>
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-5">
                  <h3 className="text-lg font-semibold text-white mb-3">Monthly Compound Interest</h3>
                  <p className="text-sm text-slate-400 mb-3">
                    Interest is calculated on the principal plus any previously accrued interest, compounded
                    each month.
                  </p>
                  <div className="bg-white/5 rounded-lg p-4 font-mono text-teal-400 text-sm">
                    Interest = Principal x (1 + Rate/12)^months - Principal
                  </div>
                  <p className="text-sm text-slate-400 mt-3">
                    <strong className="text-slate-300">Example:</strong> A $5,000 invoice that is 90 days (approx. 3 months)
                    overdue at 10% p.a. = $5,000 x (1 + 0.10/12)^3 - $5,000 = <strong className="text-teal-400">$125.52</strong>
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-5">
                  <h3 className="text-lg font-semibold text-white mb-3">Daily Compound Interest</h3>
                  <p className="text-sm text-slate-400 mb-3">
                    Interest compounds every day. This results in the highest interest amount and is less common
                    in standard business contracts.
                  </p>
                  <div className="bg-white/5 rounded-lg p-4 font-mono text-teal-400 text-sm">
                    Interest = Principal x (1 + Rate/365)^days - Principal
                  </div>
                  <p className="text-sm text-slate-400 mt-3">
                    <strong className="text-slate-300">Example:</strong> A $5,000 invoice that is 90 days overdue at 10% p.a.
                    = $5,000 x (1 + 0.10/365)^90 - $5,000 = <strong className="text-teal-400">$124.06</strong>
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3: Late Payment Clauses */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-white heading-font mb-6">
                Late Payment Clauses in Your Contract
              </h2>
              <div className="glass rounded-2xl p-6 sm:p-8 border border-white/10 space-y-4 text-slate-300 leading-relaxed">
                <p>
                  Including a well-drafted late payment clause in your contracts and invoices is the single most
                  important step you can take to protect your cash flow. Without this clause, you have limited
                  legal recourse to claim interest on overdue amounts.
                </p>

                <h3 className="text-lg font-semibold text-white pt-2">What to Include</h3>
                <ul className="list-disc list-inside space-y-2 text-slate-400">
                  <li>
                    <strong className="text-slate-300">The interest rate:</strong> Specify the exact percentage per annum
                    (e.g., &ldquo;10% p.a.&rdquo;) or reference a benchmark rate (e.g., &ldquo;Reserve Bank of Australia cash rate
                    plus 8%&rdquo;).
                  </li>
                  <li>
                    <strong className="text-slate-300">When interest begins:</strong> Typically from the day after the due
                    date until the date of actual payment.
                  </li>
                  <li>
                    <strong className="text-slate-300">Compounding method:</strong> State whether interest is simple or
                    compound, and if compound, the frequency (daily, monthly).
                  </li>
                  <li>
                    <strong className="text-slate-300">Recovery costs:</strong> Include a clause allowing recovery of
                    reasonable debt collection costs, legal fees, and administrative charges.
                  </li>
                  <li>
                    <strong className="text-slate-300">Suspension of services:</strong> Reserve the right to suspend or
                    withhold further services until outstanding amounts are settled.
                  </li>
                </ul>

                <h3 className="text-lg font-semibold text-white pt-2">Example Clause</h3>
                <div className="bg-white/5 rounded-xl p-5 text-sm text-slate-400 italic border-l-2 border-teal-500/40">
                  &ldquo;If payment is not received by the due date specified on the invoice, interest will accrue on the
                  outstanding amount at a rate of 10% per annum, calculated daily from the date payment was due until
                  the date payment is received in full. The Client agrees to pay all reasonable costs of recovery,
                  including but not limited to collection agency fees and legal costs.&rdquo;
                </div>

                <p className="text-sm text-slate-500">
                  Always have your payment terms reviewed by a legal professional to ensure compliance with
                  Australian consumer law and your specific industry regulations.
                </p>
              </div>
            </section>

            {/* Section 4: What Interest Rate Can You Charge? */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-white heading-font mb-6">
                What Interest Rate Can You Charge in Australia?
              </h2>
              <div className="glass rounded-2xl p-6 sm:p-8 border border-white/10 space-y-4 text-slate-300 leading-relaxed">
                <p>
                  Australia does not prescribe a specific statutory interest rate for late commercial payments.
                  The rate you charge must be &ldquo;reasonable&rdquo; and clearly agreed upon in your contract. Charging
                  an unreasonably high rate could be deemed unconscionable under Australian Consumer Law.
                </p>

                <h3 className="text-lg font-semibold text-white pt-2">Common Rates in Practice</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { rate: '2% – 5% p.a.', desc: 'Conservative — close to bank deposit rates. Rarely used as it provides little incentive for timely payment.' },
                    { rate: '8% – 10% p.a.', desc: 'Most common range for B2B contracts in Australia. Seen as fair and commercially reasonable.' },
                    { rate: '10% – 12% p.a.', desc: 'Standard for freelancers, trades, and professional services. Compensates for the opportunity cost of unpaid funds.' },
                    { rate: '12% – 15% p.a.', desc: 'Upper end — typically used in construction, larger contracts, or where payment risk is higher.' },
                  ].map((item) => (
                    <div key={item.rate} className="bg-white/5 rounded-xl p-4">
                      <div className="text-teal-400 font-semibold font-mono text-sm mb-1">{item.rate}</div>
                      <div className="text-xs text-slate-400">{item.desc}</div>
                    </div>
                  ))}
                </div>

                <h3 className="text-lg font-semibold text-white pt-2">Reference: Reserve Bank Cash Rate</h3>
                <p>
                  Some contracts reference the RBA cash rate as a benchmark. As of early 2026, the Reserve Bank
                  of Australia&apos;s official cash rate sits at 4.10%. A common approach is to set your late payment
                  rate as the RBA cash rate plus a margin (e.g., &ldquo;RBA cash rate + 6%&rdquo;), which currently would
                  equal approximately 10.10% p.a.
                </p>

                <h3 className="text-lg font-semibold text-white pt-2">Penalty Interest in Court</h3>
                <p>
                  If you pursue debt recovery through the courts, penalty interest rates are set by each state
                  and territory. For example, in Victoria, the Penalty Interest Rates Act 1983 sets a rate
                  published in the Government Gazette (typically around 10% p.a.). These rates apply when the
                  court awards interest on an unpaid debt, regardless of what was specified in the contract.
                </p>
              </div>
            </section>
          </div>

          {/* CTA Section */}
          <section className="mt-20 text-center">
            <div className="glass rounded-2xl p-8 sm:p-12 border border-white/10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white heading-font mb-4">
                Automate Your Invoicing
              </h2>
              <p className="text-slate-400 mb-8 max-w-xl mx-auto">
                Stop chasing late payments manually. InvoiceFlow automatically tracks overdue invoices,
                calculates interest, and sends professional payment reminders — so you get paid faster.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/signup"
                  className="px-8 py-4 bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold rounded-xl hover:from-teal-400 hover:to-blue-400 transition-all transform hover:scale-[1.02] shadow-lg shadow-teal-500/20"
                >
                  Start Free Trial
                </Link>
                <Link
                  href="/tools"
                  className="px-8 py-4 bg-white/5 border border-white/10 text-slate-300 font-semibold rounded-xl hover:bg-white/10 hover:text-white transition-all"
                >
                  Explore More Tools
                </Link>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t border-white/10 mt-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-gradient-to-br from-teal-400 to-blue-500 rounded-md flex items-center justify-center">
                  <span className="text-white font-bold text-xs">IF</span>
                </div>
                <span className="text-slate-400 text-sm">
                  &copy; {new Date().getFullYear()} InvoiceFlow. All rights reserved.
                </span>
              </div>
              <div className="flex items-center gap-6 text-sm">
                <Link href="/tools/gst-calculator" className="text-slate-500 hover:text-slate-300 transition-colors">
                  GST Calculator
                </Link>
                <Link href="/tools/abn-lookup" className="text-slate-500 hover:text-slate-300 transition-colors">
                  ABN Lookup
                </Link>
                <Link href="/tools/invoice-generator" className="text-slate-500 hover:text-slate-300 transition-colors">
                  Invoice Generator
                </Link>
                <Link href="/privacy" className="text-slate-500 hover:text-slate-300 transition-colors">
                  Privacy
                </Link>
                <Link href="/terms" className="text-slate-500 hover:text-slate-300 transition-colors">
                  Terms
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
