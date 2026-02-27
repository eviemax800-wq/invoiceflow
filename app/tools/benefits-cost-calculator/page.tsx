import type { Metadata } from 'next';
import Link from 'next/link';
import BenefitsCostCalculator from './BenefitsCostCalculator';
import RelatedTools from '../components/RelatedTools';
import EmailCapture from '../components/EmailCapture';
import BreadcrumbSchema from '../components/BreadcrumbSchema';

const title =
  'Freelance Benefits Cost Calculator Australia | Employee vs Contractor Comparison — InvoiceFlow';
const description =
  'Calculate the TRUE cost of freelancing in Australia. Compare employee benefits vs self-employment costs — super, leave, insurance, workers comp. See the minimum freelance rate to match any salary. Free calculator.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'freelance vs employee benefits calculator australia',
    'self employment benefits cost',
    'freelance rate vs salary comparison',
    'true cost of freelancing calculator',
    'contractor vs employee total compensation',
    'freelance benefits gap calculator',
    'employee hidden benefits value australia',
    'superannuation guarantee calculator freelancer',
    'freelance hourly rate vs salary comparison',
    'self employed insurance costs australia',
    'contractor rate calculator australia',
    'freelance vs full time comparison tool',
  ],
  openGraph: {
    title: 'Freelance Benefits Cost Calculator — Free Tool | InvoiceFlow',
    description:
      'See the TRUE cost of freelancing. Compare employee compensation (salary + super + leave + insurance) vs what you need to earn as a freelancer to match.',
    url: 'https://www.invoiceflow.au/tools/benefits-cost-calculator',
    siteName: 'InvoiceFlow',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Freelance Benefits Cost Calculator — Free Tool | InvoiceFlow',
    description:
      'Calculate the hidden value of employment benefits and find the minimum freelance rate to match any salary. Australian-specific with ATO rates.',
  },
  alternates: {
    canonical: 'https://www.invoiceflow.au/tools/benefits-cost-calculator',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Freelance Benefits Cost Calculator',
  description:
    'Calculate the true cost of freelancing in Australia by comparing employee benefits (super, leave, insurance, workers comp) with self-employment costs. Find the minimum freelance rate to match any employee salary.',
  url: 'https://www.invoiceflow.au/tools/benefits-cost-calculator',
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

export default function BenefitsCostCalculatorPage() {
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
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-6">
              <div className="w-2 h-2 bg-emerald-400 rounded-full" />
              <span className="text-emerald-400 text-sm font-medium">100% Free</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white heading-font mb-4">
              Freelance Benefits{' '}
              <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
                Cost Calculator
              </span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              See the TRUE cost of being self-employed in Australia. Compare the hidden value of
              employee benefits with what you need to earn as a freelancer to match — including
              super, leave, insurance, and more.
            </p>
          </div>

          {/* Calculator */}
          <BenefitsCostCalculator />

          {/* SEO Content Sections */}
          <section className="mt-16 space-y-12">
            {/* Section 1: The Hidden Cost of Freelancing */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                The Hidden Cost of Being Self-Employed in Australia
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  <strong className="text-white">
                    Most freelancers dramatically underestimate how much they need to earn to match
                    an employee salary.
                  </strong>{' '}
                  When you leave employment, you don&apos;t just lose a paycheck — you lose 30-45%
                  of additional compensation that your employer was funding on your behalf. Super
                  contributions, paid leave, workers comp insurance, training budgets, equipment —
                  it all adds up to a massive hidden cost.
                </p>
                <p>
                  A freelancer earning $100,000 is NOT equivalent to an employee earning $100,000.
                  The employee is receiving an additional $30,000-$45,000 in benefits that the
                  freelancer must fund themselves. Understanding this gap is the first step to
                  pricing your services correctly.
                </p>
                <div className="bg-white/5 rounded-xl p-4 mt-4">
                  <h4 className="text-white font-semibold mb-3">
                    Key Benefits Employers Provide (That You Now Fund Yourself)
                  </h4>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 mt-0.5 font-bold">1.</span>
                      <span>
                        <strong className="text-white">Superannuation (11.5% SG)</strong> — Your
                        employer contributes 11.5% of your salary on top of your base pay. From
                        July 2025, this rises to 12%. On a $100K salary, that&apos;s $11,500/yr
                        you&apos;re missing as a freelancer.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 mt-0.5 font-bold">2.</span>
                      <span>
                        <strong className="text-white">Annual Leave (4 weeks paid)</strong> — Worth
                        7.69% of salary. Employees earn $100K for 48 weeks of work. Freelancers
                        earn $0 during time off.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 mt-0.5 font-bold">3.</span>
                      <span>
                        <strong className="text-white">Sick/Personal Leave (10 days)</strong> — Worth
                        3.85% of salary. If you get sick as a freelancer, you don&apos;t get paid
                        and may lose clients.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 mt-0.5 font-bold">4.</span>
                      <span>
                        <strong className="text-white">Public Holidays (8-13 days)</strong> — Worth
                        3-5% of salary. Employees get paid to stay home. Freelancers lose billable
                        days.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 mt-0.5 font-bold">5.</span>
                      <span>
                        <strong className="text-white">Workers Comp + Insurance</strong> — Employers
                        pay 1.5-5% for workers comp plus other insurances. Freelancers must buy
                        income protection, PI, and PL out of their own pocket.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 2: The Freelance Rate Formula */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                How to Calculate Your Minimum Freelance Rate
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  The biggest pricing mistake freelancers make is dividing an employee salary by
                  2,080 hours (52 weeks x 40 hours) and calling it their hourly rate. That formula
                  is fundamentally broken because it ignores the massive benefits gap.
                </p>
                <div className="bg-white/5 rounded-xl p-4 mt-4">
                  <h4 className="text-white font-semibold mb-3">The Correct Formula</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-400 font-bold">Step 1:</span>
                      <span>
                        Calculate total employee compensation = Base Salary + Super + Leave Loading
                        + Insurance + Training + Equipment
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-400 font-bold">Step 2:</span>
                      <span>
                        Add your self-employment costs = Income Protection + PI Insurance + PL
                        Insurance + Voluntary Super + Equipment
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-400 font-bold">Step 3:</span>
                      <span>
                        Calculate actual billable hours = Total weeks (52) minus leave (4) minus
                        sick (2) minus public holidays (1.6) minus admin/marketing time (20-30%)
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-400 font-bold">Step 4:</span>
                      <span>
                        Minimum hourly rate = (Total compensation + Self-employment costs) /
                        Actual billable hours
                      </span>
                    </div>
                  </div>
                </div>
                <p>
                  For a $100,000 employee salary, the true compensation package is typically
                  $130,000-$145,000. After accounting for non-billable time, the minimum freelance
                  hourly rate to match is often $85-$110/hr — not the $48/hr you get from the
                  naive calculation. Use the calculator above to find your exact numbers.
                </p>
              </div>
            </div>

            {/* Section 3: Australian Employment Entitlements Explained */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Australian Employment Entitlements Explained
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Under the National Employment Standards (NES) and the Fair Work Act 2009, all
                  permanent employees in Australia receive minimum entitlements that contractors and
                  freelancers do not. Here&apos;s what each is worth:
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-emerald-400 font-semibold mb-2">Superannuation Guarantee</h4>
                    <p className="text-sm">
                      Currently 11.5% (2024-25 FY), rising to 12% from 1 July 2025. Paid on top
                      of Ordinary Time Earnings. On a $120K salary, that&apos;s $13,800/yr your
                      employer pays into your super fund. As a freelancer, you must make voluntary
                      concessional contributions (tax-deductible up to $30,000/yr cap).
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-emerald-400 font-semibold mb-2">Annual Leave</h4>
                    <p className="text-sm">
                      4 weeks (20 days) paid per year under the NES. Some awards and enterprise
                      agreements provide 5 weeks for shift workers. Annual leave loading of 17.5%
                      is common under many awards. When you take 4 weeks off as a freelancer,
                      you earn $0 — and may still have fixed costs running.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-emerald-400 font-semibold mb-2">
                      Personal/Carer&apos;s Leave
                    </h4>
                    <p className="text-sm">
                      10 days paid per year, accumulating year to year. Includes sick leave and
                      carer&apos;s leave. Freelancers have no safety net — one bad flu or a
                      family emergency means zero income and potentially strained client
                      relationships.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-emerald-400 font-semibold mb-2">Long Service Leave</h4>
                    <p className="text-sm">
                      Typically 8.67 weeks (2 months) paid leave after 10 years of continuous
                      service. Pro-rata access available from 7 years in most states. Accrues at
                      approximately 1.67% of salary per year. This benefit is essentially
                      invisible to freelancers but represents significant long-term value.
                    </p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 mt-4">
                  <h4 className="text-white font-semibold mb-2">
                    Public Holidays by State (2025)
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
                    <div>
                      <span className="text-emerald-400 font-medium">VIC:</span> 13 days
                      <span className="text-xs text-slate-500 block">
                        (incl. Melbourne Cup metro)
                      </span>
                    </div>
                    <div>
                      <span className="text-emerald-400 font-medium">NSW:</span> 8 days
                    </div>
                    <div>
                      <span className="text-emerald-400 font-medium">QLD:</span> 9 days
                      <span className="text-xs text-slate-500 block">(incl. Royal Queensland Show)</span>
                    </div>
                    <div>
                      <span className="text-emerald-400 font-medium">SA:</span> 12 days
                      <span className="text-xs text-slate-500 block">(incl. Proclamation Day)</span>
                    </div>
                    <div>
                      <span className="text-emerald-400 font-medium">WA:</span> 9 days
                    </div>
                    <div>
                      <span className="text-emerald-400 font-medium">TAS:</span> 9 days
                    </div>
                    <div>
                      <span className="text-emerald-400 font-medium">NT:</span> 11 days
                      <span className="text-xs text-slate-500 block">(incl. Show Day, Picnic Day)</span>
                    </div>
                    <div>
                      <span className="text-emerald-400 font-medium">ACT:</span> 10 days
                      <span className="text-xs text-slate-500 block">(incl. Reconciliation, Family &amp; Community)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 4: What Freelancers Should Fund Themselves */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Benefits Every Freelancer Should Fund Themselves
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Smart freelancers don&apos;t just ignore the benefits gap — they build their own
                  safety net. Here are the critical items to budget for, ranked by priority:
                </p>
                <div className="space-y-3 mt-4">
                  <div className="bg-white/5 rounded-xl p-4 border-l-4 border-emerald-500">
                    <h4 className="text-white font-semibold">
                      1. Voluntary Super Contributions (Critical)
                    </h4>
                    <p className="text-sm mt-1">
                      Make concessional (pre-tax) contributions up to $30,000/yr. These are tax
                      deductible, reducing your taxable income. At the 37% marginal rate, a $20K
                      super contribution saves $4,700 in tax while building your retirement fund.
                      Without employer SG, you need to actively manage this yourself.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border-l-4 border-emerald-500">
                    <h4 className="text-white font-semibold">
                      2. Income Protection Insurance (Critical)
                    </h4>
                    <p className="text-sm mt-1">
                      Covers up to 75% of your income if you can&apos;t work due to illness or
                      injury. Costs roughly $1,500-$3,000/yr depending on age, income, and
                      waiting period. 100% tax deductible for self-employed. This is your
                      replacement for sick leave AND workers compensation combined.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border-l-4 border-emerald-400">
                    <h4 className="text-white font-semibold">
                      3. Annual Leave Fund (Important)
                    </h4>
                    <p className="text-sm mt-1">
                      Set aside 7.69% of every invoice into a separate &ldquo;leave fund&rdquo;
                      bank account. On $120K income, that&apos;s $9,228/yr — enough to fund 4
                      weeks of time off without stressing about cash flow. Treat this as
                      non-negotiable, just like paying tax.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border-l-4 border-emerald-400">
                    <h4 className="text-white font-semibold">
                      4. Professional Indemnity + Public Liability (Important)
                    </h4>
                    <p className="text-sm mt-1">
                      PI covers claims of negligence or errors ($500-$2,000/yr). PL covers
                      third-party injury or property damage ($300-$800/yr). Many enterprise
                      clients require certificates of currency before engaging you. Use our{' '}
                      <a
                        href="/tools/insurance-cost-estimator"
                        className="text-emerald-400 hover:underline"
                      >
                        Insurance Cost Estimator
                      </a>{' '}
                      for a detailed breakdown.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border-l-4 border-slate-600">
                    <h4 className="text-white font-semibold">
                      5. Equipment + Professional Development (Recommended)
                    </h4>
                    <p className="text-sm mt-1">
                      Budget $3,000-$5,000/yr for hardware, software, and tools. Budget another
                      $2,000-$5,000/yr for courses, conferences, and certifications. These are all
                      tax deductible. Employers typically provide these at no cost — as a
                      freelancer, they come out of your revenue.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 5: Freelance Rate vs Employee Salary — Quick Reference */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Freelance Rate vs Employee Salary — Quick Reference
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Here&apos;s a quick guide to minimum freelance rates that match common Australian
                  employee salaries, assuming standard benefits loading of ~35% and 75% billable
                  utilisation:
                </p>
                <div className="overflow-x-auto mt-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left text-white py-3 pr-4 font-semibold">
                          Employee Salary
                        </th>
                        <th className="text-left text-white py-3 pr-4 font-semibold">
                          True Package Value
                        </th>
                        <th className="text-left text-white py-3 pr-4 font-semibold">
                          Min. Freelance Day Rate
                        </th>
                        <th className="text-left text-white py-3 font-semibold">
                          Min. Freelance Hourly
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-slate-300">
                      <tr className="border-b border-white/5">
                        <td className="py-3 pr-4 font-medium text-white">$70,000</td>
                        <td className="py-3 pr-4">$94,500</td>
                        <td className="py-3 pr-4">$500</td>
                        <td className="py-3">$63</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="py-3 pr-4 font-medium text-white">$90,000</td>
                        <td className="py-3 pr-4">$121,500</td>
                        <td className="py-3 pr-4">$644</td>
                        <td className="py-3">$80</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="py-3 pr-4 font-medium text-white">$110,000</td>
                        <td className="py-3 pr-4">$148,500</td>
                        <td className="py-3 pr-4">$788</td>
                        <td className="py-3">$98</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="py-3 pr-4 font-medium text-white">$130,000</td>
                        <td className="py-3 pr-4">$175,500</td>
                        <td className="py-3 pr-4">$931</td>
                        <td className="py-3">$116</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="py-3 pr-4 font-medium text-white">$150,000</td>
                        <td className="py-3 pr-4">$202,500</td>
                        <td className="py-3 pr-4">$1,074</td>
                        <td className="py-3">$134</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-white">$200,000</td>
                        <td className="py-3 pr-4">$270,000</td>
                        <td className="py-3 pr-4">$1,432</td>
                        <td className="py-3">$179</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-slate-400 mt-2">
                  Based on 35% benefits loading, 188.5 billable days/year (75% utilisation of 251
                  working days), and 8-hour billable days. Actual rates vary by industry, location,
                  and personal circumstances. Use the calculator above for a personalised estimate.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-16 text-center glass rounded-2xl p-10">
            <h3 className="text-3xl font-bold text-white heading-font mb-4">
              Price your services right.{' '}
              <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
                Get paid what you&apos;re worth.
              </span>
            </h3>
            <p className="text-slate-300 max-w-xl mx-auto mb-6">
              InvoiceFlow helps Australian freelancers send professional invoices, track expenses,
              and manage cash flow — so you can focus on earning what your skills are actually worth.
              Built for sole traders who understand the true cost of going independent.
            </p>
            <Link
              href="/signup"
              className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-emerald-500 to-green-500 text-white font-semibold hover:opacity-90 transition-opacity"
            >
              Start Free — 5 Invoices/Month
            </Link>
          </section>
        
        <RelatedTools currentSlug="benefits-cost-calculator" category="Pricing & Rates" />
      </main>

        <footer className="border-t border-white/10 mt-20 py-8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
            <p>&copy; 2025 InvoiceFlow. Built in Melbourne.</p>
            <div className="flex gap-6">
              <Link href="/tools" className="hover:text-white transition-colors">
                Free Tools
              </Link>
              <Link href="/blog" className="hover:text-white transition-colors">
                Blog
              </Link>
              <Link href="/pricing" className="hover:text-white transition-colors">
                Pricing
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
