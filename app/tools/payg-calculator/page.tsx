import type { Metadata } from 'next';
import Link from 'next/link';
import PAYGCalculator from './PAYGCalculator';
import RelatedTools from '../components/RelatedTools';

export const metadata: Metadata = {
  title: 'Free PAYG Installment Calculator Australia 2025-26 — Quarterly Tax Payments | InvoiceFlow',
  description:
    'Free PAYG installment calculator for Australian freelancers and sole traders. Calculate quarterly BAS tax payments, compare PAYG installments vs actual tax liability, and plan your cash flow using 2025-26 ATO rates.',
  keywords: [
    'PAYG installment calculator freelancer',
    'PAYG installments calculator australia',
    'quarterly tax payment calculator sole trader',
    'BAS PAYG calculation',
    'how much PAYG do I pay freelancer',
    'PAYG rate method calculator',
    'PAYG amount method calculator',
    'quarterly BAS installment',
    'sole trader quarterly tax australia',
    'PAYG variation calculator',
  ],
  openGraph: {
    title: 'Free PAYG Installment Calculator Australia 2025-26 | InvoiceFlow',
    description:
      'Calculate your quarterly PAYG installments, compare them to your estimated tax liability, and plan your cash flow as an Australian freelancer or sole trader.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free PAYG Installment Calculator Australia 2025-26 | InvoiceFlow',
    description:
      'Calculate your quarterly PAYG installments and plan your cash flow as an Australian freelancer or sole trader.',
  },
  alternates: {
    canonical: 'https://www.invoiceflow.au/tools/payg-calculator',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'InvoiceFlow PAYG Installment Calculator',
  description: 'Free Australian PAYG installment calculator for freelancers and sole traders — 2025-26 ATO rates',
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'Any',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'AUD' },
  creator: {
    '@type': 'Organization',
    name: 'InvoiceFlow',
    url: 'https://invoiceflow.app',
  },
};

export default function PAYGCalculatorPage() {
  return (
    <div className="min-h-screen page-bg">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="border-b border-white/10 backdrop-blur-sm bg-black/30">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-teal-400 to-blue-500" />
            <h1 className="text-2xl font-bold gradient-text heading-font">InvoiceFlow</h1>
          </Link>
          <div className="flex gap-3">
            <Link
              href="/tools"
              className="text-sm text-slate-400 hover:text-white transition-colors px-3 py-2"
            >
              Free Tools
            </Link>
            <Link
              href="/pricing"
              className="text-sm text-slate-400 hover:text-white transition-colors px-3 py-2"
            >
              Pricing
            </Link>
            <Link
              href="/signup"
              className="text-sm font-medium px-4 py-2 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white hover:opacity-90 transition-opacity"
            >
              Get Started Free
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-slate-200 mb-6">
            <span className="h-2 w-2 rounded-full bg-violet-400" />
            100% free — no signup required
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white heading-font mb-4">
            PAYG Installment <span className="bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent">Calculator</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Calculate your quarterly PAYG installments, compare them against your estimated tax
            liability, and plan your cash flow. Built for Australian freelancers and sole traders
            using 2025-26 ATO rates.
          </p>
        </div>

        <PAYGCalculator />

        {/* SEO Content Sections */}
        <section className="mt-16 space-y-12">
          {/* What Are PAYG Installments? */}
          <div className="glass rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white heading-font mb-4">
              What Are PAYG Installments?
            </h3>
            <div className="space-y-4 text-slate-300">
              <p>
                PAYG (Pay As You Go) installments are regular prepayments of your expected annual
                income tax. Instead of facing a large tax bill at the end of the financial year, the
                ATO requires eligible taxpayers to pay their estimated tax in{' '}
                <strong className="text-white">quarterly installments</strong> throughout the year.
              </p>
              <p>
                You&apos;ll typically be entered into the PAYG installment system after your first
                tax return shows a tax liability above a certain threshold (generally when your
                business or investment income results in tax of $500 or more). The ATO will notify
                you of your obligation and provide either an{' '}
                <strong className="text-white">installment rate</strong> (a percentage to apply to
                your income) or an <strong className="text-white">installment amount</strong> (a
                fixed dollar figure per quarter).
              </p>
              <p>
                For freelancers and sole traders, PAYG installments are reported and paid through
                your{' '}
                <strong className="text-white">Business Activity Statement (BAS)</strong>, which is
                due quarterly. If you&apos;re also registered for GST, your PAYG installment is
                included on the same BAS form alongside your GST obligations.
              </p>
              <p>
                The amount you pay in PAYG installments throughout the year is credited against your
                final tax liability when you lodge your annual income tax return. If you&apos;ve
                overpaid, you&apos;ll receive a refund. If you&apos;ve underpaid, you&apos;ll owe
                the difference.
              </p>
            </div>
          </div>

          {/* Rate Method vs Amount Method */}
          <div className="glass rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white heading-font mb-4">
              Rate Method vs Amount Method
            </h3>
            <div className="space-y-4 text-slate-300">
              <p>
                The ATO offers two methods for calculating your PAYG installments. Understanding
                which one suits your situation can make a significant difference to your cash flow.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mt-4">
                <div className="bg-white/5 rounded-xl p-5">
                  <div className="text-violet-400 font-semibold mb-2">Rate Method</div>
                  <p className="text-sm mb-3">
                    You apply your ATO-provided <strong className="text-white">installment rate</strong>{' '}
                    (a percentage) to your actual business income for the quarter. The installment
                    amount changes with your income — if you have a quiet quarter, you pay less.
                  </p>
                  <div className="text-xs text-slate-500">
                    <span className="text-emerald-400 font-semibold">Best for:</span> Freelancers
                    with variable or seasonal income. Automatically adjusts to your earnings.
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-5">
                  <div className="text-violet-400 font-semibold mb-2">Amount Method</div>
                  <p className="text-sm mb-3">
                    You pay a <strong className="text-white">fixed dollar amount</strong> each quarter,
                    calculated by the ATO based on your most recent tax return. The amount stays the
                    same regardless of how much you actually earn.
                  </p>
                  <div className="text-xs text-slate-500">
                    <span className="text-emerald-400 font-semibold">Best for:</span> Freelancers
                    with consistent, predictable income. Simpler to budget for.
                  </div>
                </div>
              </div>
              <p className="text-sm mt-4">
                You can switch between methods or{' '}
                <strong className="text-white">request a variation</strong> if your circumstances
                change. To vary your installment, lodge a variation through your BAS or the ATO
                online portal. The ATO generally won&apos;t penalise you for varying as long as your
                varied amount is at least 85% of your actual tax liability for the year.
              </p>
            </div>
          </div>

          {/* PAYG Installment Due Dates and Penalties */}
          <div className="glass rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white heading-font mb-4">
              PAYG Installment Due Dates and Penalties
            </h3>
            <div className="space-y-4 text-slate-300">
              <p>
                PAYG installments are due quarterly, aligned with the standard BAS reporting
                periods. Missing these dates can result in penalties and interest charges.
              </p>
              <div className="overflow-x-auto mt-4">
                <table className="w-full text-sm text-slate-300">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-3 text-white font-semibold">Quarter</th>
                      <th className="text-left py-3 text-white font-semibold">Period</th>
                      <th className="text-left py-3 text-white font-semibold">BAS Due Date</th>
                      <th className="text-left py-3 text-white font-semibold">Electronic Extension</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/5">
                      <td className="py-3 font-mono text-violet-400">Q1</td>
                      <td className="py-3">July - September</td>
                      <td className="py-3">28 October</td>
                      <td className="py-3">~11 November</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-3 font-mono text-violet-400">Q2</td>
                      <td className="py-3">October - December</td>
                      <td className="py-3">28 February</td>
                      <td className="py-3">~14 March</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-3 font-mono text-violet-400">Q3</td>
                      <td className="py-3">January - March</td>
                      <td className="py-3">28 April</td>
                      <td className="py-3">~12 May</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-mono text-violet-400">Q4</td>
                      <td className="py-3">April - June</td>
                      <td className="py-3">28 July</td>
                      <td className="py-3">~11 August</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm mt-4">
                Taxpayers who lodge electronically (including through a tax agent) may receive an
                additional <strong className="text-white">2-week extension</strong> on these due
                dates. Check the ATO website or your registered agent for the exact dates each year.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mt-4">
                <div className="bg-white/5 rounded-xl p-4">
                  <div className="text-red-400 font-semibold mb-2">Failure to Lodge (FTL) Penalty</div>
                  <p className="text-sm">
                    If you fail to lodge your BAS on time, the ATO can charge a penalty of{' '}
                    <strong className="text-white">$313 per 28-day period</strong> (or part thereof),
                    up to a maximum of 5 penalty units. This applies even if you have nothing to pay.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <div className="text-red-400 font-semibold mb-2">General Interest Charge (GIC)</div>
                  <p className="text-sm">
                    Outstanding PAYG amounts attract the General Interest Charge, currently around{' '}
                    <strong className="text-white">11-12% per annum</strong>, calculated daily on
                    the unpaid balance. This adds up quickly on larger amounts.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Tips to Manage Your PAYG Cash Flow */}
          <div className="glass rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white heading-font mb-4">
              Tips to Manage Your PAYG Cash Flow
            </h3>
            <div className="space-y-4 text-slate-300">
              <p>
                Managing quarterly tax payments is one of the biggest financial challenges for
                freelancers. Here are proven strategies to stay on top of your PAYG obligations
                without straining your cash flow.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mt-4">
                <div className="bg-white/5 rounded-xl p-4">
                  <div className="text-violet-400 font-semibold mb-2">Separate Tax Savings Account</div>
                  <p className="text-sm">
                    Open a dedicated high-interest savings account just for tax. Every time you
                    receive a payment, transfer your estimated tax percentage immediately. Automate
                    this if possible — out of sight, out of mind.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <div className="text-violet-400 font-semibold mb-2">Monthly Tax Allocation</div>
                  <p className="text-sm">
                    Rather than scrambling each quarter, break your PAYG installment into monthly
                    transfers. If your quarterly installment is $3,000, move $1,000 per month into
                    your tax account. This smooths out the cash flow impact.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <div className="text-violet-400 font-semibold mb-2">Review Your Rate Regularly</div>
                  <p className="text-sm">
                    Your PAYG rate is based on your most recent tax return. If your income changes
                    significantly (up or down), the rate may no longer be accurate. Review it each
                    quarter and vary if needed to avoid a big surprise at tax time.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <div className="text-violet-400 font-semibold mb-2">Vary When Income Changes</div>
                  <p className="text-sm">
                    If you land a big contract or lose a major client, vary your PAYG installment
                    through the ATO portal. There&apos;s no penalty for varying as long as your total
                    installments are at least 85% of your actual tax for the year.
                  </p>
                </div>
              </div>
              <p className="text-sm text-slate-400 mt-2">
                Remember: PAYG installments are not an additional tax — they&apos;re prepayments
                of your expected income tax. Any amount you overpay will be refunded when you lodge
                your annual tax return.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-16 text-center glass rounded-2xl p-10">
          <h3 className="text-3xl font-bold text-white heading-font mb-4">
            Stay on Top of Your <span className="bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent">Quarterly Obligations</span>
          </h3>
          <p className="text-slate-300 max-w-xl mx-auto mb-6">
            InvoiceFlow tracks your freelance income in real time, calculates GST automatically,
            and gives you clear visibility into your quarterly BAS obligations — so you always
            know exactly how much to set aside.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/signup"
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-violet-500 to-purple-500 text-white font-semibold hover:opacity-90 transition-opacity"
            >
              Start Free — 5 Invoices/Month
            </Link>
            <Link
              href="/tools/bas-preparation-checklist"
              className="px-6 py-3 rounded-lg glass text-white font-medium hover:bg-white/10 transition-colors"
            >
              BAS Preparation Checklist
            </Link>
          </div>
          <p className="text-sm text-slate-500 mt-4">
            No credit card required. Free tier includes GST-compliant invoices and BAS reporting.
          </p>
        </section>
      
        <RelatedTools currentSlug="payg-calculator" category="Tax & Compliance" />
      </main>

      <footer className="border-t border-white/10 mt-20 py-8">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} InvoiceFlow. Built in Melbourne.</p>
          <div className="flex gap-6">
            <Link href="/tools" className="hover:text-white transition-colors">
              Free Tools
            </Link>
            <Link href="/compare" className="hover:text-white transition-colors">
              Compare
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
  );
}
