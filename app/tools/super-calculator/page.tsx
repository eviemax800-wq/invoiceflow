import type { Metadata } from 'next';
import Link from 'next/link';
import SuperCalculator from './SuperCalculator';
import RelatedTools from '../components/RelatedTools';
import FAQSchema from '../components/FAQSchema';

const title = 'Self-Employed Superannuation Calculator Australia | Free Tool — InvoiceFlow';
const description =
  'Free superannuation calculator for Australian sole traders and freelancers. Calculate your recommended super contributions, tax savings, and payment schedule. 2025-26 rates with concessional cap tracking.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'self employed super calculator',
    'sole trader superannuation calculator australia',
    'freelancer super contributions',
    'voluntary super contributions calculator',
    'concessional super contributions calculator',
    'super tax deduction calculator australia',
    'superannuation guarantee rate 2025',
    'sole trader super payments',
    'freelance super obligation australia',
    'self employed retirement australia',
    'contractor superannuation calculator',
    'super contribution tax benefit',
  ],
  openGraph: {
    title: 'Self-Employed Superannuation Calculator — Free Tool | InvoiceFlow',
    description:
      'Calculate your recommended super contributions and tax savings as a sole trader or freelancer. 2025-26 ATO rates.',
    url: 'https://www.invoiceflow.au/tools/super-calculator',
    siteName: 'InvoiceFlow',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Self-Employed Superannuation Calculator — Free Tool | InvoiceFlow',
    description:
      'Calculate your super contributions and tax benefit as a sole trader. Free Australian calculator.',
  },
  alternates: {
    canonical: 'https://www.invoiceflow.au/tools/super-calculator',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Self-Employed Superannuation Calculator',
  description:
    'Calculate recommended super contributions, tax savings, and payment schedules for Australian sole traders and freelancers. 2025-26 ATO rates.',
  url: 'https://www.invoiceflow.au/tools/super-calculator',
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

const faqs = [
  {
    question: 'Do sole traders have to pay super in Australia?',
    answer:
      'Sole traders are not legally required to make superannuation contributions for themselves. However, the ATO strongly recommends voluntary contributions for retirement savings, and they offer significant tax benefits. If you operate through a company and pay yourself a salary, or you have employees, super obligations do apply.',
  },
  {
    question: 'How much super should freelancers contribute?',
    answer:
      'Most financial advisors recommend freelancers contribute at least the Superannuation Guarantee rate of 11.5% of their net income to maintain parity with employees. High earners ($100K+) may benefit from contributing 15-20% or up to the $30,000 concessional cap to maximise their tax deduction.',
  },
  {
    question: 'Is super tax deductible for sole traders?',
    answer:
      'Yes. Personal super contributions are tax deductible up to the concessional contributions cap of $30,000 per year for 2025-26. You must lodge a "Notice of Intent to Claim" with your super fund before filing your tax return. The contribution is taxed at just 15% inside the fund, compared to your marginal tax rate of up to 45%.',
  },
  {
    question: 'What is the concessional super cap for 2025-26?',
    answer:
      'The concessional (before-tax) contributions cap for 2025-26 is $30,000 per year. This includes both employer contributions and personal deductible contributions. If you have unused cap amounts from previous years (since 2019-20) and your total super balance is under $500,000, you can carry forward the unused amounts for up to 5 years.',
  },
  {
    question: 'When should freelancers pay their super?',
    answer:
      'Freelancers can make voluntary super contributions at any time during the financial year. Many sole traders pay quarterly to align with BAS lodgement, while others make a lump sum before 30 June to maximise their tax deduction. Contributions must be received by your super fund before 30 June to count for that financial year.',
  },
];

export default function SuperCalculatorPage() {
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
              Self-Employed Super{' '}
              <span className="gradient-text">Calculator</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Calculate your recommended superannuation contributions, see the tax benefit, and plan
              your payment schedule. Built for Australian sole traders, freelancers, and contractors
              using 2025-26 ATO rates.
            </p>
          </div>

          {/* Calculator */}
          <SuperCalculator />

          {/* SEO Content Sections */}
          <section className="mt-16 space-y-12">
            {/* Do sole traders have to pay super */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Do Sole Traders Have to Pay Superannuation?
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Unlike employees, <strong className="text-white">sole traders and freelancers are not legally
                  required</strong> to make superannuation contributions for themselves. However, the ATO
                  strongly recommends it — and the tax benefits make it one of the smartest financial
                  moves you can make.
                </p>
                <p>
                  If you&apos;re a sole trader paying yourself a salary through a company structure, or if
                  you&apos;re a contractor who is &quot;primarily for labour&quot; (paid mainly for your personal
                  effort), the rules change — the hiring entity may be required to pay super for you at
                  the current Superannuation Guarantee (SG) rate of <strong className="text-white">11.5%</strong>.
                </p>
                <div className="bg-white/5 rounded-xl p-4 mt-4">
                  <h4 className="text-white font-semibold mb-2">When super IS mandatory for sole traders</h4>
                  <ul className="space-y-1 text-sm list-disc list-inside">
                    <li>You operate through a company and pay yourself a salary</li>
                    <li>You have employees (must pay SG for them at 11.5%)</li>
                    <li>You&apos;re a contractor paid primarily for personal labour</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Tax benefits */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Tax Benefits of Voluntary Super Contributions
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Voluntary super contributions are one of the most effective tax strategies available
                  to Australian freelancers. Here&apos;s why:
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Tax Deduction</h4>
                    <p className="text-sm">
                      Personal super contributions are tax-deductible (up to the concessional cap).
                      You lodge a &quot;Notice of Intent to Claim&quot; with your super fund, then claim the
                      deduction on your tax return.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Lower Tax Rate</h4>
                    <p className="text-sm">
                      Super contributions are taxed at just 15% inside the fund — compared to your
                      marginal tax rate of up to 45%. The bigger the gap, the bigger the benefit.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Concessional Cap: $30,000</h4>
                    <p className="text-sm">
                      For 2025-26, you can contribute up to $30,000 per year in concessional
                      (pre-tax) contributions. This includes both employer and personal contributions.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Carry-Forward Rule</h4>
                    <p className="text-sm">
                      If you didn&apos;t use your full $30K cap in previous years (from 2019-20 onwards)
                      and your total super balance is under $500K, you can carry forward unused amounts
                      for up to 5 years.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* How much should you contribute */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                How Much Super Should a Sole Trader Contribute?
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  There&apos;s no one-size-fits-all answer, but here are common strategies:
                </p>
                <div className="overflow-x-auto mt-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-2 text-slate-400 font-medium">Strategy</th>
                        <th className="text-right py-2 text-slate-400 font-medium">Rate</th>
                        <th className="text-left py-2 text-slate-400 font-medium pl-4">Best for</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      <tr>
                        <td className="py-2 text-white">Match SG rate</td>
                        <td className="py-2 text-right text-teal-400">11.5%</td>
                        <td className="py-2 pl-4">Parity with employees, minimum recommendation</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-white">Tax optimised</td>
                        <td className="py-2 text-right text-teal-400">15-20%</td>
                        <td className="py-2 pl-4">High earners ($100K+) maximising tax benefit</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-white">Max concessional</td>
                        <td className="py-2 text-right text-amber-400">To $30K cap</td>
                        <td className="py-2 pl-4">Maximum tax deduction, strong retirement focus</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-white">Catch-up</td>
                        <td className="py-2 text-right text-amber-400">Variable</td>
                        <td className="py-2 pl-4">Using carry-forward unused cap from prior years</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* How to claim */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                How to Claim Super as a Tax Deduction
              </h2>
              <div className="space-y-4 text-slate-300">
                <ol className="space-y-4 list-decimal list-inside">
                  <li>
                    <strong className="text-white">Make the contribution</strong> — Transfer funds to
                    your super fund as a personal (voluntary) contribution. Most funds accept BPAY,
                    direct debit, or bank transfer.
                  </li>
                  <li>
                    <strong className="text-white">Lodge a Notice of Intent</strong> — Complete a
                    &quot;Notice of intent to claim or vary a deduction for personal super contributions&quot;
                    form (available from your super fund) and submit it <em>before</em> you lodge your
                    tax return or roll over the funds.
                  </li>
                  <li>
                    <strong className="text-white">Receive acknowledgement</strong> — Your super fund
                    must acknowledge the notice in writing before you can claim.
                  </li>
                  <li>
                    <strong className="text-white">Claim on your tax return</strong> — Enter the
                    amount at &quot;D12 — Personal superannuation contributions&quot; on your tax return.
                    This reduces your taxable income.
                  </li>
                </ol>
                <div className="bg-white/5 rounded-xl p-4 mt-4">
                  <p className="text-sm">
                    <strong className="text-amber-400">Deadline:</strong> You must lodge your Notice of
                    Intent by the earlier of: (1) the day you lodge your tax return, or (2) the end of
                    the financial year following the contribution year.
                  </p>
                </div>
              </div>
            </div>

            {/* Super rates table */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Superannuation Guarantee Rates — Historical & Projected
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  The SG rate has been gradually increasing to reach the legislated target of 12%.
                  As a sole trader, matching at least the current SG rate ensures you&apos;re building
                  retirement savings at the same pace as employees.
                </p>
                <div className="overflow-x-auto mt-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-2 text-slate-400 font-medium">Financial Year</th>
                        <th className="text-right py-2 text-slate-400 font-medium">SG Rate</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      <tr>
                        <td className="py-2 text-white">2023-24</td>
                        <td className="py-2 text-right">11.0%</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-white">2024-25</td>
                        <td className="py-2 text-right">11.5%</td>
                      </tr>
                      <tr className="bg-teal-500/5">
                        <td className="py-2 text-teal-400 font-semibold">2025-26 (current)</td>
                        <td className="py-2 text-right text-teal-400 font-semibold">11.5%</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-white">2026-27 onwards</td>
                        <td className="py-2 text-right text-emerald-400">12.0%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          <RelatedTools currentSlug="super-calculator" category="Tax & Compliance" />

          {/* CTA */}
          <section className="mt-16 text-center glass rounded-2xl p-10">
            <h3 className="text-3xl font-bold text-white heading-font mb-4">
              Track your super with{' '}
              <span className="gradient-text">smart invoicing</span>
            </h3>
            <p className="text-slate-300 max-w-xl mx-auto mb-6">
              InvoiceFlow automatically sets aside your super allocation on every invoice, so you
              never forget a contribution. Pair it with automated tax estimates and BAS prep for
              complete financial visibility.
            </p>
            <Link
              href="/signup"
              className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold hover:opacity-90 transition-opacity"
            >
              Start Free — 5 Invoices/Month
            </Link>
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
