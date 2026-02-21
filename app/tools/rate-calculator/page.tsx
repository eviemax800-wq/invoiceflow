import type { Metadata } from 'next';
import Link from 'next/link';
import RateCalculator from './RateCalculator';

export const metadata: Metadata = {
  title:
    'Freelance Rate Calculator Australia — Find Your Ideal Hourly Rate | InvoiceFlow',
  description:
    'Free freelance rate calculator for Australians. Calculate your ideal hourly rate based on income goals, expenses, super, and tax. Includes 2025-26 tax brackets and market rate benchmarks.',
  keywords: [
    'freelance rate calculator',
    'freelance hourly rate calculator',
    'freelance rate calculator Australia',
    'how much to charge freelance',
    'freelancer hourly rate',
    'contractor rate calculator',
    'freelance pricing calculator',
    'how to price freelance work Australia',
    'freelancer income calculator',
    'ABN rate calculator',
  ],
  openGraph: {
    title: 'Freelance Rate Calculator Australia | InvoiceFlow',
    description:
      'Calculate your ideal freelance hourly rate. Factors in tax, super, expenses, and non-billable time. Free for Australian freelancers.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Freelance Rate Calculator Australia | InvoiceFlow',
    description:
      'Calculate your ideal freelance hourly rate. Factors in tax, super, expenses, and non-billable time.',
  },
  alternates: {
    canonical: '/tools/rate-calculator',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'InvoiceFlow Freelance Rate Calculator',
  description:
    'Free freelance rate calculator for Australian freelancers, contractors, and sole traders',
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'Any',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'AUD' },
  creator: {
    '@type': 'Organization',
    name: 'InvoiceFlow',
    url: 'https://invoiceflow.app',
  },
};

export default function RateCalculatorPage() {
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

      <main className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-slate-200 mb-6">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            100% free — no signup required
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white heading-font mb-4">
            Freelance <span className="gradient-text">Rate Calculator</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Calculate your ideal hourly rate based on income goals, expenses, super, and
            Australian tax brackets. Stop undercharging.
          </p>
        </div>

        <RateCalculator />

        {/* SEO Content */}
        <section className="mt-16 space-y-12">
          <div className="glass rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white heading-font mb-4">
              How to Calculate Your Freelance Rate
            </h3>
            <div className="space-y-4 text-slate-300">
              <p>
                Setting the right freelance rate is the difference between a sustainable business
                and burnout. Most freelancers undercharge because they only think about their
                take-home pay — not the full cost of being self-employed.
              </p>
              <p>Here is what your rate needs to cover:</p>
              <div className="grid sm:grid-cols-2 gap-4 mt-4">
                <div className="bg-white/5 rounded-xl p-4">
                  <div className="text-teal-400 font-semibold mb-2">Direct costs</div>
                  <ul className="space-y-1 text-sm">
                    <li>&#8226; Your desired take-home salary</li>
                    <li>&#8226; Income tax (marginal rates)</li>
                    <li>&#8226; Superannuation (11.5% in 2025-26)</li>
                    <li>&#8226; Medicare levy (2%)</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <div className="text-cyan-400 font-semibold mb-2">Business costs</div>
                  <ul className="space-y-1 text-sm">
                    <li>&#8226; Software and tools</li>
                    <li>&#8226; Insurance (PI, public liability)</li>
                    <li>&#8226; Internet, phone, home office</li>
                    <li>&#8226; Professional development</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="glass rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white heading-font mb-4">
              Australian Tax Brackets 2025-26
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-slate-300">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 text-white font-semibold">Taxable Income</th>
                    <th className="text-left py-3 text-white font-semibold">Tax Rate</th>
                    <th className="text-left py-3 text-white font-semibold">Tax on Bracket</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/5">
                    <td className="py-3">$0 - $18,200</td>
                    <td className="py-3 text-teal-400">0%</td>
                    <td className="py-3">Nil</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3">$18,201 - $45,000</td>
                    <td className="py-3 text-teal-400">16%</td>
                    <td className="py-3">16c for each $1 over $18,200</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3">$45,001 - $135,000</td>
                    <td className="py-3 text-amber-400">30%</td>
                    <td className="py-3">$4,288 plus 30c for each $1 over $45,000</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3">$135,001 - $190,000</td>
                    <td className="py-3 text-orange-400">37%</td>
                    <td className="py-3">$31,288 plus 37c for each $1 over $135,000</td>
                  </tr>
                  <tr>
                    <td className="py-3">$190,001+</td>
                    <td className="py-3 text-red-400">45%</td>
                    <td className="py-3">$51,638 plus 45c for each $1 over $190,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-500 mt-4">
              Plus 2% Medicare levy on taxable income. These rates apply from 1 July 2025.
              The Stage 3 tax cuts (effective 1 July 2024) reduced the 32.5% bracket to 30%
              and raised the threshold from $120,000 to $135,000.
            </p>
          </div>

          <div className="glass rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white heading-font mb-4">
              5 Common Freelance Pricing Mistakes
            </h3>
            <div className="space-y-4 text-slate-300">
              <div className="flex gap-4">
                <span className="text-red-400 font-bold text-lg shrink-0">1.</span>
                <div>
                  <strong className="text-white">Matching employee salaries.</strong> Employees
                  get super, leave, equipment, and training paid for. A $100K employee costs their
                  employer $130K-$150K. Your rate needs to cover all of that.
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-red-400 font-bold text-lg shrink-0">2.</span>
                <div>
                  <strong className="text-white">Forgetting non-billable time.</strong> You will
                  not bill 40 hours a week. Admin, marketing, quoting, invoicing, and chasing
                  payments eat 25-35% of your time. Account for it.
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-red-400 font-bold text-lg shrink-0">3.</span>
                <div>
                  <strong className="text-white">Ignoring superannuation.</strong> As a sole
                  trader or contractor, nobody is paying your super. At 11.5%, that is $11,500 on
                  every $100K you need to set aside yourself.
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-red-400 font-bold text-lg shrink-0">4.</span>
                <div>
                  <strong className="text-white">Not accounting for unpaid leave.</strong> No
                  sick leave, no annual leave, no public holidays. Every day off is a day you are
                  not earning. Build in 4-6 weeks of non-earning time.
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-red-400 font-bold text-lg shrink-0">5.</span>
                <div>
                  <strong className="text-white">Racing to the bottom.</strong> Competing on
                  price attracts bad clients who undervalue your work. Charge what you are worth
                  and deliver quality. Premium clients pay premium rates — and are easier to work
                  with.
                </div>
              </div>
            </div>
          </div>

          <div className="glass rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white heading-font mb-4">
              Superannuation for Freelancers
            </h3>
            <div className="space-y-4 text-slate-300">
              <p>
                As a self-employed freelancer or sole trader, you are{' '}
                <strong className="text-white">not legally required</strong> to pay yourself
                superannuation — but you absolutely should. Without employer contributions, your
                retirement savings will fall significantly behind.
              </p>
              <p>
                The current super guarantee rate is{' '}
                <strong className="text-white">11.5% (2025-26)</strong>, rising to 12% from 1
                July 2026. Super contributions up to $30,000 per year are tax-deductible,
                meaning they reduce your taxable income.
              </p>
              <div className="bg-teal-500/10 border border-teal-500/20 rounded-xl p-4 mt-4">
                <p className="text-sm text-teal-300">
                  <strong>Example:</strong> On $150,000 taxable income, contributing $17,250
                  (11.5%) to super reduces your taxable income to $132,750 — saving you
                  approximately $5,175 in tax (at the 30% marginal rate). Your future self will
                  thank you.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-16 text-center glass rounded-2xl p-10">
          <h3 className="text-3xl font-bold text-white heading-font mb-4">
            Know Your Rate. <span className="gradient-text">Own Your Invoicing.</span>
          </h3>
          <p className="text-slate-300 max-w-xl mx-auto mb-6">
            Now that you know what to charge, make sure you are getting paid. InvoiceFlow
            creates professional, GST-compliant invoices in seconds — with built-in Stripe
            payments so clients can pay instantly.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/signup"
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold hover:opacity-90 transition-opacity"
            >
              Start Free — 5 Invoices/Month
            </Link>
            <Link
              href="/tools"
              className="px-6 py-3 rounded-lg glass text-white font-medium hover:bg-white/10 transition-colors"
            >
              More Free Tools
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
