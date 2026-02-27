import type { Metadata } from 'next';
import Link from 'next/link';
import TaxEstimator from './TaxEstimator';
import RelatedTools from '../components/RelatedTools';
import EmailCapture from '../components/EmailCapture';
import FAQSchema from '../components/FAQSchema';

export const metadata: Metadata = {
  title: 'Free Freelance Tax Calculator Australia 2025-26 — Income Tax Estimator | InvoiceFlow',
  description:
    'Free Australian freelance tax calculator. Estimate income tax, Medicare levy, super obligations, and quarterly BAS installments for sole traders and freelancers using 2025-26 ATO tax brackets.',
  keywords: [
    'freelance tax calculator australia',
    'sole trader tax calculator',
    'freelancer income tax estimator',
    'australian freelance tax',
    'self employed tax calculator australia',
    'sole trader income tax',
    'freelancer tax brackets 2025',
    'BAS installment calculator',
    'medicare levy calculator',
    'contractor tax australia',
  ],
  openGraph: {
    title: 'Free Freelance Tax Calculator Australia 2025-26 | InvoiceFlow',
    description:
      'Estimate your income tax, Medicare levy, and super obligations as an Australian freelancer or sole trader. Uses official 2025-26 ATO tax brackets.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Freelance Tax Calculator Australia 2025-26 | InvoiceFlow',
    description:
      'Estimate your income tax, Medicare levy, and super obligations as an Australian freelancer or sole trader.',
  },
  alternates: {
    canonical: '/tools/tax-estimator',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'InvoiceFlow Freelance Tax Estimator',
  description: 'Free Australian freelance tax calculator for sole traders and contractors — 2025-26 tax brackets',
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'Any',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'AUD' },
  creator: {
    '@type': 'Organization',
    name: 'InvoiceFlow',
    url: 'https://invoiceflow.app',
  },
};

const faqs = [
  {
    question: 'How much tax do freelancers pay in Australia?',
    answer:
      'Freelancers and sole traders pay individual income tax on their net business income (gross income minus deductible expenses) at marginal tax rates ranging from 0% to 45%, plus a 2% Medicare levy. As a rough guide, freelancers earning $80,000-$120,000 net typically pay an effective tax rate of around 25-30% including Medicare.',
  },
  {
    question: 'What are the 2025-26 Australian tax brackets?',
    answer:
      'For the 2025-26 financial year: $0-$18,200 is tax-free; $18,201-$45,000 is taxed at 16%; $45,001-$135,000 at 30%; $135,001-$190,000 at 37%; and $190,001+ at 45%. These rates reflect the Stage 3 tax cuts which reduced the 32.5% bracket to 30% and raised the upper threshold from $120,000 to $135,000.',
  },
  {
    question: 'Do sole traders pay Medicare levy?',
    answer:
      'Yes, all Australian taxpayers including sole traders and freelancers pay a 2% Medicare levy on their taxable income. If you earn above $97,000 (singles) and do not hold private hospital cover, you also pay an additional Medicare Levy Surcharge of 1-1.5% depending on your income tier.',
  },
  {
    question: 'How do freelancers pay quarterly tax in Australia?',
    answer:
      'After lodging your first tax return, the ATO will calculate your Pay As You Go (PAYG) installment amount, typically your estimated annual tax divided into four quarterly payments. You pay these through your Business Activity Statement (BAS) each quarter — due 28 days after the end of each quarter.',
  },
  {
    question: 'What deductions can freelancers claim in Australia?',
    answer:
      'Freelancers can claim deductions for expenses directly related to earning income, including home office costs, internet and phone (business percentage), software subscriptions, professional development, accounting fees, business insurance, equipment, and travel for client meetings. Keep receipts for 5 years and note that items over $300 may need to be depreciated.',
  },
];

export default function TaxEstimatorPage() {
  return (
    <div className="min-h-screen page-bg">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FAQSchema faqs={faqs} />

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
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            100% free — no signup required
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white heading-font mb-4">
            Freelance <span className="gradient-text">Tax Estimator</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Estimate your Australian income tax, Medicare levy, and super obligations as a
            freelancer or sole trader. Uses official 2025-26 ATO tax brackets.
          </p>
        </div>

        <TaxEstimator />

        {/* SEO Content Sections */}
        <section className="mt-16 space-y-12">
          {/* How Freelancers Are Taxed */}
          <div className="glass rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white heading-font mb-4">
              How Freelancers Are Taxed in Australia
            </h3>
            <div className="space-y-4 text-slate-300">
              <p>
                As a freelancer or sole trader in Australia, you don&apos;t pay a separate
                &quot;business tax.&quot; Instead, your freelance income flows directly into your{' '}
                <strong className="text-white">personal income tax return</strong>. The ATO treats
                your net business income (gross income minus deductible expenses) as part of your
                overall assessable income.
              </p>
              <p>
                This means if you earn $80,000 from freelancing and have $15,000 in legitimate
                business expenses, your taxable freelance income is $65,000 — which gets taxed at
                your personal marginal rate. If you also have employment income, it all stacks
                together.
              </p>
              <p>
                Unlike employees, freelancers don&apos;t have tax withheld from payments. You&apos;re
                responsible for setting aside money for tax throughout the year and paying it either
                as a lump sum at tax time or through quarterly{' '}
                <strong className="text-white">Pay As You Go (PAYG) installments</strong> via your
                Business Activity Statement (BAS).
              </p>
            </div>
          </div>

          {/* 2025-26 Tax Brackets */}
          <div className="glass rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white heading-font mb-4">
              2025-26 Income Tax Rates
            </h3>
            <p className="text-slate-300 mb-4">
              These are the current Australian resident individual income tax rates for the 2025-26
              financial year (1 July 2025 to 30 June 2026), reflecting the Stage 3 tax cuts.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-slate-300">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 text-white font-semibold">Taxable Income</th>
                    <th className="text-left py-3 text-white font-semibold">Tax Rate</th>
                    <th className="text-left py-3 text-white font-semibold">Tax On This Bracket</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/5">
                    <td className="py-3 font-mono text-teal-400">$0 - $18,200</td>
                    <td className="py-3">Nil</td>
                    <td className="py-3 font-mono">$0</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 font-mono text-teal-400">$18,201 - $45,000</td>
                    <td className="py-3">16c per $1 over $18,200</td>
                    <td className="py-3 font-mono">Up to $4,288</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 font-mono text-teal-400">$45,001 - $135,000</td>
                    <td className="py-3">$4,288 + 30c per $1 over $45,000</td>
                    <td className="py-3 font-mono">Up to $31,288</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 font-mono text-teal-400">$135,001 - $190,000</td>
                    <td className="py-3">$31,288 + 37c per $1 over $135,000</td>
                    <td className="py-3 font-mono">Up to $51,638</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-mono text-teal-400">$190,001+</td>
                    <td className="py-3">$51,638 + 45c per $1 over $190,000</td>
                    <td className="py-3 font-mono">No cap</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Medicare Levy & Surcharge */}
          <div className="glass rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white heading-font mb-4">
              Medicare Levy & Surcharge
            </h3>
            <div className="space-y-4 text-slate-300">
              <p>
                All Australian taxpayers pay a{' '}
                <strong className="text-white">2% Medicare levy</strong> on their taxable income.
                This funds Australia&apos;s public healthcare system. There is a low-income threshold
                below which the levy is reduced or not payable, but most freelancers earning a
                living income will pay the full 2%.
              </p>
              <p>
                On top of this, if your income exceeds certain thresholds and you{' '}
                <strong className="text-white">don&apos;t have private health insurance</strong>{' '}
                (hospital cover), you&apos;ll pay an additional Medicare Levy Surcharge (MLS):
              </p>
            </div>
            <div className="overflow-x-auto mt-4">
              <table className="w-full text-sm text-slate-300">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 text-white font-semibold">Taxable Income (Singles)</th>
                    <th className="text-left py-3 text-white font-semibold">MLS Rate</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/5">
                    <td className="py-3 font-mono text-teal-400">$0 - $97,000</td>
                    <td className="py-3">Nil</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 font-mono text-teal-400">$97,001 - $113,000</td>
                    <td className="py-3">1.0%</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 font-mono text-teal-400">$113,001 - $151,000</td>
                    <td className="py-3">1.25%</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-mono text-teal-400">$151,001+</td>
                    <td className="py-3">1.5%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-slate-400 mt-4">
              Getting private hospital cover can save you money if you&apos;re near or above the
              $97,000 threshold. The surcharge often exceeds the cost of a basic hospital policy.
            </p>
          </div>

          {/* Setting Aside Money for Tax */}
          <div className="glass rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white heading-font mb-4">
              Setting Aside Money for Tax
            </h3>
            <div className="space-y-4 text-slate-300">
              <p>
                One of the biggest challenges for freelancers is managing cash flow for tax. Unlike
                employees who have PAYG withholding taken from each paycheck, freelancers receive
                their full invoice amount and must set aside tax themselves.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mt-4">
                <div className="bg-white/5 rounded-xl p-4">
                  <div className="text-teal-400 font-semibold mb-2">Rule of 30%</div>
                  <p className="text-sm">
                    A common rule of thumb is to set aside <strong className="text-white">30% of
                    every payment</strong> you receive into a separate tax savings account. This
                    covers income tax, Medicare levy, and gives a buffer for GST and super.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <div className="text-teal-400 font-semibold mb-2">Quarterly BAS Installments</div>
                  <p className="text-sm">
                    Once you lodge your first tax return, the ATO will calculate your{' '}
                    <strong className="text-white">PAYG installment amount</strong> — typically
                    your estimated tax divided by four. Pay this each quarter with your BAS to avoid
                    a big tax bill at year-end.
                  </p>
                </div>
              </div>
              <p className="text-sm text-slate-400 mt-2">
                Use our calculator above to estimate your quarterly BAS installment amount and plan
                your cash flow accordingly.
              </p>
            </div>
          </div>

          {/* Common Freelancer Tax Deductions */}
          <div className="glass rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white heading-font mb-4">
              Common Freelancer Tax Deductions
            </h3>
            <p className="text-slate-300 mb-4">
              As a sole trader, you can claim business expenses that are directly related to earning
              your income. These deductions reduce your taxable income and therefore your tax bill.
              Make sure you keep receipts and records for everything you claim.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white/5 rounded-xl p-4">
                <div className="text-teal-400 font-semibold mb-2">Home Office</div>
                <ul className="space-y-1 text-sm text-slate-300">
                  <li>- Dedicated workspace (percentage of rent/mortgage interest)</li>
                  <li>- Internet and phone (business percentage)</li>
                  <li>- Electricity and heating</li>
                  <li>- Office furniture and equipment</li>
                </ul>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <div className="text-teal-400 font-semibold mb-2">Technology & Tools</div>
                <ul className="space-y-1 text-sm text-slate-300">
                  <li>- Computer, laptop, monitors</li>
                  <li>- Software subscriptions (Adobe, etc.)</li>
                  <li>- Cloud hosting and domains</li>
                  <li>- Professional tools and licences</li>
                </ul>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <div className="text-teal-400 font-semibold mb-2">Professional Development</div>
                <ul className="space-y-1 text-sm text-slate-300">
                  <li>- Courses and training</li>
                  <li>- Books and publications</li>
                  <li>- Conference and event tickets</li>
                  <li>- Industry memberships</li>
                </ul>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <div className="text-teal-400 font-semibold mb-2">Business Operations</div>
                <ul className="space-y-1 text-sm text-slate-300">
                  <li>- Accounting and tax agent fees</li>
                  <li>- Business insurance</li>
                  <li>- Marketing and advertising</li>
                  <li>- Travel for client meetings</li>
                </ul>
              </div>
            </div>
            <p className="text-sm text-slate-400 mt-4">
              Note: Items over $300 may need to be depreciated over their useful life rather than
              claimed in full in the year of purchase. Consult a registered tax agent for
              personalised advice.
            </p>
          </div>
        </section>

        <EmailCapture />
        <RelatedTools currentSlug="tax-estimator" category="Tax & Compliance" />

        {/* CTA */}
        <section className="mt-16 text-center glass rounded-2xl p-10">
          <h3 className="text-3xl font-bold text-white heading-font mb-4">
            Automate Your <span className="gradient-text">Invoicing</span>
          </h3>
          <p className="text-slate-300 max-w-xl mx-auto mb-6">
            Stop guessing your tax obligations. InvoiceFlow tracks your freelance income, calculates
            GST automatically, and gives you real-time visibility into your earnings — so you always
            know what you owe.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/signup"
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold hover:opacity-90 transition-opacity"
            >
              Start Free — 5 Invoices/Month
            </Link>
            <Link
              href="/pricing"
              className="px-6 py-3 rounded-lg glass text-white font-medium hover:bg-white/10 transition-colors"
            >
              See Pricing
            </Link>
          </div>
          <p className="text-sm text-slate-500 mt-4">
            No credit card required. Free tier includes GST-compliant invoices.
          </p>
        </section>
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
