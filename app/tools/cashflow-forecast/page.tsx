import type { Metadata } from 'next';
import Link from 'next/link';
import CashFlowForecast from './CashFlowForecast';
import RelatedTools from '../components/RelatedTools';

const title = 'Freelance Cash Flow Forecast Calculator Australia | Free Tool — InvoiceFlow';
const description =
  'Free cash flow forecast tool for Australian freelancers. Project your cash position over 3-12 months with income, expenses, payment terms, tax provisions, and outstanding invoices.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'freelance cash flow calculator',
    'small business cash flow forecast australia',
    'freelancer cash flow planning',
    'cash flow projection tool',
    'sole trader cash flow calculator',
    'business cash flow forecast free',
    'freelance financial planning calculator',
    'cash runway calculator freelance',
    'payment terms cash flow impact',
    'australian freelancer cash management',
    'invoice cash flow calculator',
    'freelance budget forecast tool',
  ],
  openGraph: {
    title: 'Freelance Cash Flow Forecast — Free Tool | InvoiceFlow',
    description:
      'Forecast your cash position over 3-12 months. Factor in payment terms, expenses, tax, and outstanding invoices. Free for Australian freelancers.',
    url: 'https://www.invoiceflow.au/tools/cashflow-forecast',
    siteName: 'InvoiceFlow',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Freelance Cash Flow Forecast — Free Tool | InvoiceFlow',
    description:
      'Forecast your freelance cash position over 3-12 months. Free Australian cash flow calculator.',
  },
  alternates: {
    canonical: 'https://www.invoiceflow.au/tools/cashflow-forecast',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Freelance Cash Flow Forecast Calculator',
  description:
    'Project your freelance cash position over 3-12 months with income, expenses, payment terms, tax provisions, and outstanding invoices.',
  url: 'https://www.invoiceflow.au/tools/cashflow-forecast',
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

export default function CashFlowForecastPage() {
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
              Cash Flow{' '}
              <span className="gradient-text">Forecast Calculator</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              See where your money is going before it gets there. Project your cash position over
              3-12 months, factor in payment delays, and spot shortfalls before they hit. Built for
              Australian freelancers and sole traders.
            </p>
          </div>

          {/* Calculator */}
          <CashFlowForecast />

          {/* SEO Content Sections */}
          <section className="mt-16 space-y-12">
            {/* Why Cash Flow Matters */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Why Cash Flow Is the #1 Freelancer Killer
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Revenue is vanity. Profit is sanity. But{' '}
                  <strong className="text-white">cash flow is reality</strong>. You can have $50,000 in
                  outstanding invoices and still not be able to pay rent — because invoices aren&apos;t
                  cash until they&apos;re paid.
                </p>
                <p>
                  According to the Australian Bureau of Statistics, <strong className="text-white">
                  late payments are the leading cause of cash flow problems</strong> for small
                  businesses. The average Australian invoice is paid 26 days late, and 1 in 5 invoices
                  over $10,000 are paid more than 60 days past due.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Cash Flow vs Revenue</h4>
                    <p className="text-sm">
                      Revenue is what you invoice. Cash flow is what actually lands in your bank
                      account, and <strong className="text-white">when</strong>. A $10K month means
                      nothing if the money arrives 60 days late.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">The 3-Month Buffer Rule</h4>
                    <p className="text-sm">
                      Aim to keep <strong className="text-white">3 months of expenses</strong> in your
                      business account at all times. This covers late payments, seasonal dips, and
                      unexpected costs.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Terms Impact */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                How Payment Terms Affect Your Cash Flow
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Your payment terms directly control when money arrives. Here&apos;s how different
                  terms affect your cash position on a $10,000/month freelance income:
                </p>
                <div className="overflow-x-auto mt-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-2 text-slate-400 font-medium">Terms</th>
                        <th className="text-right py-2 text-slate-400 font-medium">Cash Gap</th>
                        <th className="text-right py-2 text-slate-400 font-medium">Buffer Needed</th>
                        <th className="text-left py-2 text-slate-400 font-medium pl-4">Best For</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      <tr>
                        <td className="py-2 text-white">Due on Receipt</td>
                        <td className="py-2 text-right text-emerald-400">0-7 days</td>
                        <td className="py-2 text-right text-emerald-400">$2,500</td>
                        <td className="py-2 text-sm text-slate-400 pl-4">New clients, small projects</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-white">Net 7</td>
                        <td className="py-2 text-right text-emerald-400">7-14 days</td>
                        <td className="py-2 text-right text-emerald-400">$5,000</td>
                        <td className="py-2 text-sm text-slate-400 pl-4">Ongoing retainers</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-white">Net 14</td>
                        <td className="py-2 text-right text-teal-400">14-21 days</td>
                        <td className="py-2 text-right text-teal-400">$7,500</td>
                        <td className="py-2 text-sm text-slate-400 pl-4">Standard freelance work</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-white">Net 30</td>
                        <td className="py-2 text-right text-amber-400">30-45 days</td>
                        <td className="py-2 text-right text-amber-400">$15,000</td>
                        <td className="py-2 text-sm text-slate-400 pl-4">Corporate clients (common)</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-white">Net 60</td>
                        <td className="py-2 text-right text-rose-400">60-75 days</td>
                        <td className="py-2 text-right text-rose-400">$25,000</td>
                        <td className="py-2 text-sm text-slate-400 pl-4">Enterprise / government</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm mt-2">
                  <strong className="text-white">Pro tip:</strong> Offer a 2-5% early payment discount
                  for clients who pay within 7 days. It costs you a small margin but dramatically
                  improves cash flow.
                </p>
              </div>
            </div>

            {/* Cash Flow Tips */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                7 Ways to Improve Your Freelance Cash Flow
              </h2>
              <div className="space-y-4 text-slate-300">
                <ol className="space-y-4 list-decimal list-inside">
                  <li>
                    <strong className="text-white">Invoice immediately.</strong> Don&apos;t wait until
                    end of month. Invoice as soon as the work is delivered or the milestone is complete.
                    Every day you delay invoicing is a day longer until payment.
                  </li>
                  <li>
                    <strong className="text-white">Request deposits upfront.</strong> 30-50% upfront on
                    new projects. This covers your initial costs and proves client commitment.
                  </li>
                  <li>
                    <strong className="text-white">Use milestone billing.</strong> Break large projects
                    into 3-4 payment milestones. This smooths out cash flow and reduces risk on both
                    sides.
                  </li>
                  <li>
                    <strong className="text-white">Automate payment reminders.</strong> Send reminders 3
                    days before due, on the due date, and 3 days after. Most late payments are just
                    forgotten, not malicious.
                  </li>
                  <li>
                    <strong className="text-white">Shorten payment terms for new clients.</strong> Start
                    with Net 7 or 14 and extend to Net 30 once trust is established.
                  </li>
                  <li>
                    <strong className="text-white">Build a tax reserve.</strong> Set aside 25-35% of
                    every payment into a separate account for tax, Medicare, and super. Don&apos;t touch
                    it.
                  </li>
                  <li>
                    <strong className="text-white">Diversify income timing.</strong> Mix retainer
                    clients (predictable monthly income) with project clients. Aim for 40-60% retainer
                    income for stability.
                  </li>
                </ol>
              </div>
            </div>

            {/* Tax Provisions */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Tax Provisions for Australian Freelancers
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  One of the biggest cash flow shocks for new freelancers is the ATO tax bill. Unlike
                  employees where tax is withheld automatically, freelancers must{' '}
                  <strong className="text-white">save for tax proactively</strong>.
                </p>
                <div className="space-y-3 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-1">Income Tax (16-45%)</h4>
                    <p className="text-sm">
                      Set aside based on your bracket. Most freelancers earning $45K-$135K should save
                      around 30% for income tax. Use our{' '}
                      <a href="/tools/tax-estimator" className="text-teal-400 underline hover:text-teal-300">
                        Tax Estimator
                      </a>{' '}
                      for your exact rate.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-1">PAYG Instalments</h4>
                    <p className="text-sm">
                      Once you lodge your first tax return, the ATO may put you on quarterly PAYG
                      instalments. This improves your cash flow by spreading the tax bill across the
                      year.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-1">BAS / GST Cycle</h4>
                    <p className="text-sm">
                      If GST registered, you&apos;ll remit GST quarterly. Track your GST collected vs
                      paid carefully — the BAS amount due can be a cash flow shock if you haven&apos;t
                      set it aside.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-16 text-center glass rounded-2xl p-10">
            <h3 className="text-3xl font-bold text-white heading-font mb-4">
              Never get <span className="gradient-text">caught short</span> again
            </h3>
            <p className="text-slate-300 max-w-xl mx-auto mb-6">
              InvoiceFlow tracks your invoices, payments, and cash position in real time. See
              who&apos;s paid, who&apos;s overdue, and what&apos;s coming — with automated reminders
              that get you paid faster.
            </p>
            <Link
              href="/signup"
              className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold hover:opacity-90 transition-opacity"
            >
              Start Free — 5 Invoices/Month
            </Link>
          </section>
        
        <RelatedTools currentSlug="cashflow-forecast" category="Financial Planning" />
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
