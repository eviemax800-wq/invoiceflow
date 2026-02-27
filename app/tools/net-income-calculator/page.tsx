import type { Metadata } from 'next';
import Link from 'next/link';
import NetIncomeCalculator from './NetIncomeCalculator';
import RelatedTools from '../components/RelatedTools';

const title = 'Freelance Net Income Calculator Australia | Free Tool — InvoiceFlow';
const description =
  'Free net income calculator for Australian freelancers. See your actual take-home pay after income tax, Medicare levy, super contributions, business expenses, and GST. Built for sole traders, contractors, and ABN holders.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'freelance net income calculator',
    'freelancer take home pay',
    'sole trader income after tax',
    'freelance income calculator australia',
    'contractor net pay calculator',
    'self employed net income',
    'freelance tax take home',
    'what freelancers actually earn',
    'ABN income calculator',
    'freelance salary calculator',
  ],
  openGraph: {
    title: 'Freelance Net Income Calculator — Free Tool | InvoiceFlow',
    description:
      'See your actual take-home pay after all deductions. Tax, Medicare, super, GST, and expenses.',
    url: 'https://www.invoiceflow.au/tools/net-income-calculator',
    siteName: 'InvoiceFlow',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Freelance Net Income Calculator — Free Tool | InvoiceFlow',
    description:
      'Calculate your real take-home pay as an Australian freelancer. Free tool.',
  },
  alternates: {
    canonical: 'https://www.invoiceflow.au/tools/net-income-calculator',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Freelance Net Income Calculator',
  description:
    'Calculate your actual take-home pay as an Australian freelancer after income tax, Medicare levy, superannuation, GST, and business expenses.',
  url: 'https://www.invoiceflow.au/tools/net-income-calculator',
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

export default function NetIncomeCalculatorPage() {
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
              Freelance Net Income{' '}
              <span className="gradient-text">Calculator</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              See what you actually take home after every deduction — income tax, Medicare levy,
              superannuation, GST, and business expenses. The number your bank account cares about,
              not the number on your invoices.
            </p>
          </div>

          {/* Calculator */}
          <NetIncomeCalculator />

          {/* SEO Content Sections */}
          <section className="mt-16 space-y-12">
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                What Freelancers Actually Take Home
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  There is a significant gap between what you invoice and what lands in your bank
                  account. Most freelancers earning{' '}
                  <strong className="text-white">$100,000 in gross revenue</strong> will take home
                  somewhere between $55,000 and $70,000 after all deductions — that is 55-70 cents
                  on every dollar invoiced.
                </p>
                <p>
                  The exact amount depends on your{' '}
                  <strong className="text-white">business expenses, super contribution rate,
                  GST status, and whether you have HELP debt</strong>. Many first-year freelancers
                  are shocked by the gap because they are used to seeing net pay on an employee
                  payslip where everything is already deducted.
                </p>
                <div className="bg-white/5 rounded-xl p-4 mt-4">
                  <h4 className="text-white font-semibold mb-2">Typical Net-to-Gross Ratios</h4>
                  <ul className="text-sm space-y-1">
                    <li>$50,000 gross: ~75-80% take-home ($37,500-$40,000)</li>
                    <li>$100,000 gross: ~60-68% take-home ($60,000-$68,000)</li>
                    <li>$150,000 gross: ~55-62% take-home ($82,500-$93,000)</li>
                    <li>$200,000 gross: ~50-58% take-home ($100,000-$116,000)</li>
                  </ul>
                  <p className="text-xs text-slate-500 mt-2">
                    Ranges depend on expense levels, super rate, and HELP debt status.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Understanding Your Freelance Deductions
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Every deduction between your gross income and your net take-home serves a
                  different purpose. Understanding each one helps you plan better and identify
                  opportunities to keep more of what you earn.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-amber-400 font-semibold mb-2">Income Tax</h4>
                    <p className="text-sm">
                      Progressive rates from 0% to 45%. The tax-free threshold ($18,200) means your
                      first dollars are untaxed. Effective rate is always lower than your marginal rate.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-blue-400 font-semibold mb-2">Medicare Levy</h4>
                    <p className="text-sm">
                      A flat 2% on taxable income above $24,276. Plus a surcharge of 1-1.5% if you
                      earn over $93,000 and do not have private health insurance.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-teal-400 font-semibold mb-2">Superannuation</h4>
                    <p className="text-sm">
                      Not compulsory for sole traders, but strongly recommended. Contributing 11.5%
                      (the employee equivalent) to super reduces your taxable income and builds
                      retirement savings.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-emerald-400 font-semibold mb-2">GST</h4>
                    <p className="text-sm">
                      If registered (compulsory over $75K turnover), you collect 10% GST on invoices
                      but remit it to the ATO. It is not your income — it passes through your accounts.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-rose-400 font-semibold mb-2">Business Expenses</h4>
                    <p className="text-sm">
                      Home office, equipment, software, travel, insurance, and professional
                      development. These reduce your taxable income, saving you tax at your marginal rate.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-violet-400 font-semibold mb-2">HELP/HECS Debt</h4>
                    <p className="text-sm">
                      Compulsory repayments of 1-10% once your repayment income exceeds $54,435. This
                      is often forgotten by freelancers and can be a nasty surprise at tax time.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                How to Maximize Your Net Income
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  You cannot avoid tax, but you can legally{' '}
                  <strong className="text-white">structure your deductions to keep more</strong> of
                  what you earn. Here are the most effective strategies for Australian freelancers:
                </p>
                <ol className="space-y-3 list-decimal list-inside mt-4">
                  <li>
                    <strong className="text-white">Claim every legitimate deduction.</strong> Many
                    freelancers under-claim because they are not sure what qualifies. Home office,
                    phone, internet, professional memberships, courses, software subscriptions, and
                    travel to client sites are all deductible. Keep receipts for everything.
                  </li>
                  <li>
                    <strong className="text-white">Prepay deductible expenses before June 30.</strong>{' '}
                    Bringing forward expenses like insurance premiums, software annual plans, or
                    professional development into the current financial year reduces this year&apos;s
                    taxable income.
                  </li>
                  <li>
                    <strong className="text-white">Contribute to super strategically.</strong>{' '}
                    Personal super contributions are taxed at just 15% inside the fund — far less than
                    your marginal rate. You can claim a tax deduction for contributions up to $30,000
                    per year (including any employer contributions from other jobs).
                  </li>
                  <li>
                    <strong className="text-white">Time your invoices.</strong> If you are approaching
                    a higher tax bracket, consider whether delaying an invoice by a few days (into the
                    next financial year) could save you thousands in tax. This is perfectly legal for
                    cash-basis taxpayers.
                  </li>
                  <li>
                    <strong className="text-white">Get private health insurance if earning over $93K.</strong>{' '}
                    The Medicare Levy Surcharge (1-1.5%) often costs more than a basic hospital cover
                    policy. Compare the numbers — health cover may save you money.
                  </li>
                </ol>
              </div>
            </div>

            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Net Income Benchmarks by Profession
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  How does your take-home compare? Here are typical gross-to-net figures for common
                  freelance professions in Australia, assuming standard deductions and 11.5% super:
                </p>
                <div className="overflow-x-auto mt-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left text-white py-3 pr-4 font-semibold">Profession</th>
                        <th className="text-left text-white py-3 pr-4 font-semibold">Typical Gross</th>
                        <th className="text-left text-white py-3 pr-4 font-semibold">Expenses</th>
                        <th className="text-left text-white py-3 font-semibold">Est. Net Take-Home</th>
                      </tr>
                    </thead>
                    <tbody className="text-slate-300">
                      <tr className="border-b border-white/5">
                        <td className="py-3 pr-4">Graphic Designer</td>
                        <td className="py-3 pr-4">$70,000</td>
                        <td className="py-3 pr-4 text-slate-400">$8,000</td>
                        <td className="py-3 text-emerald-400 font-medium">$47,500</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="py-3 pr-4">Web Developer</td>
                        <td className="py-3 pr-4">$120,000</td>
                        <td className="py-3 pr-4 text-slate-400">$12,000</td>
                        <td className="py-3 text-emerald-400 font-medium">$73,000</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="py-3 pr-4">Copywriter</td>
                        <td className="py-3 pr-4">$85,000</td>
                        <td className="py-3 pr-4 text-slate-400">$5,000</td>
                        <td className="py-3 text-emerald-400 font-medium">$56,000</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="py-3 pr-4">IT Consultant</td>
                        <td className="py-3 pr-4">$180,000</td>
                        <td className="py-3 pr-4 text-slate-400">$20,000</td>
                        <td className="py-3 text-emerald-400 font-medium">$101,000</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="py-3 pr-4">Photographer</td>
                        <td className="py-3 pr-4">$65,000</td>
                        <td className="py-3 pr-4 text-slate-400">$15,000</td>
                        <td className="py-3 text-emerald-400 font-medium">$39,000</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4">Marketing Consultant</td>
                        <td className="py-3 pr-4">$140,000</td>
                        <td className="py-3 pr-4 text-slate-400">$15,000</td>
                        <td className="py-3 text-emerald-400 font-medium">$82,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-500 mt-2">
                  Estimates based on 2024-25 ATO tax rates, 2% Medicare levy, 11.5% voluntary super,
                  GST registered, no HELP debt, no Medicare Levy Surcharge. Your actual figures will
                  vary based on deductions and personal circumstances.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-16 text-center glass rounded-2xl p-10">
            <h3 className="text-3xl font-bold text-white heading-font mb-4">
              Track every dollar from{' '}
              <span className="gradient-text">invoice to bank account</span>
            </h3>
            <p className="text-slate-300 max-w-xl mx-auto mb-6">
              InvoiceFlow automatically calculates GST, tracks expenses, and shows your real net
              income in real-time. Stop guessing what you actually earned — see it on your dashboard
              the moment a client pays.
            </p>
            <Link
              href="/signup"
              className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold hover:opacity-90 transition-opacity"
            >
              Start Free — 5 Invoices/Month
            </Link>
          </section>
        
        <RelatedTools currentSlug="net-income-calculator" category="Tax & Compliance" />
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
