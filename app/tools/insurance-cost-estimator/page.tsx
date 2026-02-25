import type { Metadata } from 'next';
import Link from 'next/link';
import InsuranceCostEstimator from './InsuranceCostEstimator';

const title = 'Freelance Insurance Cost Estimator Australia | Free Business Insurance Calculator — InvoiceFlow';
const description =
  'Estimate insurance costs for Australian freelancers and sole traders. Calculate professional indemnity, public liability, cyber liability, income protection, and more. Free freelance insurance cost calculator.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'freelance insurance cost calculator australia',
    'professional indemnity insurance calculator',
    'public liability insurance freelancer',
    'business insurance cost estimator australia',
    'freelance insurance australia',
    'sole trader insurance calculator',
    'professional indemnity insurance cost',
    'public liability insurance cost',
    'cyber liability insurance freelancer',
    'income protection insurance freelancer',
    'business insurance tax deduction australia',
    'freelancer insurance guide australia',
  ],
  openGraph: {
    title: 'Freelance Insurance Cost Estimator — Free Tool | InvoiceFlow',
    description:
      'Estimate insurance costs for Australian freelancers. Calculate PI, public liability, cyber, income protection, and more in minutes.',
    url: 'https://www.invoiceflow.au/tools/insurance-cost-estimator',
    siteName: 'InvoiceFlow',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Freelance Insurance Cost Estimator — Free Tool | InvoiceFlow',
    description:
      'Estimate insurance costs for Australian freelancers. Professional indemnity, public liability, cyber, income protection, and more.',
  },
  alternates: {
    canonical: 'https://www.invoiceflow.au/tools/insurance-cost-estimator',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Freelance Insurance Cost Estimator',
  description:
    'Estimate insurance costs for Australian freelancers and sole traders. Calculate professional indemnity, public liability, cyber liability, income protection, and business equipment insurance costs.',
  url: 'https://www.invoiceflow.au/tools/insurance-cost-estimator',
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

export default function InsuranceCostEstimatorPage() {
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
              Freelance Insurance{' '}
              <span className="gradient-text">Cost Estimator</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Find out what insurance you need and how much it costs as an Australian freelancer or
              sole trader. Get estimates for professional indemnity, public liability, cyber, income
              protection, and more — in under 2 minutes.
            </p>
          </div>

          {/* Calculator */}
          <InsuranceCostEstimator />

          {/* SEO Content Sections */}
          <section className="mt-16 space-y-12">
            {/* Section 1: Insurance Every Australian Freelancer Needs */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Insurance Every Australian Freelancer Needs
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  <strong className="text-white">
                    Most freelancers skip insurance until something goes wrong.
                  </strong>{' '}
                  A client claims your advice cost them money. Someone trips over your camera bag at
                  a shoot. A hacker breaches your client&apos;s data through your laptop. Without the
                  right cover, a single incident can wipe out years of freelance earnings.
                </p>
                <p>
                  The good news: freelance insurance in Australia is more affordable than most people
                  think. A basic professional indemnity policy for a web developer earning $100K might
                  cost around $500-$700 per year — less than $2 per day for protection against claims
                  that could reach six figures.
                </p>
                <div className="bg-white/5 rounded-xl p-4 mt-4">
                  <h4 className="text-white font-semibold mb-3">The Six Key Insurance Types</h4>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-teal-400 mt-0.5 font-bold">1.</span>
                      <span>
                        <strong className="text-white">Professional Indemnity (PI)</strong> — Covers
                        claims of negligence, errors, or bad advice. Essential for anyone providing
                        professional services: consultants, developers, designers, accountants. Many
                        enterprise clients and government contracts require it.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-400 mt-0.5 font-bold">2.</span>
                      <span>
                        <strong className="text-white">Public Liability (PL)</strong> — Covers
                        third-party injury or property damage. Essential if you ever work on-site,
                        attend client meetings, or host events. Often required for co-working spaces
                        and office leases.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-400 mt-0.5 font-bold">3.</span>
                      <span>
                        <strong className="text-white">Cyber Liability</strong> — Covers data
                        breaches, hacking, ransomware, and privacy violations. Increasingly important
                        as the Privacy Act 1988 reforms expand obligations for businesses handling
                        personal data.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-400 mt-0.5 font-bold">4.</span>
                      <span>
                        <strong className="text-white">Income Protection</strong> — Covers lost
                        income if you can&apos;t work due to illness or injury. Unlike employees,
                        freelancers have no sick leave or workers&apos; comp safety net. Premiums are
                        tax deductible for self-employed Australians.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-400 mt-0.5 font-bold">5.</span>
                      <span>
                        <strong className="text-white">Business Equipment</strong> — Covers your
                        laptop, camera gear, tools, and other work equipment against theft, damage,
                        and accidental loss. Especially important for photographers, videographers,
                        and anyone carrying expensive gear to client sites.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-400 mt-0.5 font-bold">6.</span>
                      <span>
                        <strong className="text-white">Workers Compensation</strong> — Legally
                        required if you have employees. Managed at the state level (WorkSafe in VIC,
                        icare in NSW, WorkCover in QLD). Rates vary by industry and claims history.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 2: How Much Does Freelance Insurance Actually Cost? */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                How Much Does Freelance Insurance Actually Cost?
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Insurance premiums vary significantly based on your profession, revenue, claims
                  history, and the level of cover you choose. Here are realistic annual cost ranges
                  for common freelance professions in Australia as of 2025/2026:
                </p>
                <div className="overflow-x-auto mt-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left text-white py-3 pr-4 font-semibold">Profession</th>
                        <th className="text-left text-white py-3 pr-4 font-semibold">PI (Annual)</th>
                        <th className="text-left text-white py-3 pr-4 font-semibold">PL (Annual)</th>
                        <th className="text-left text-white py-3 pr-4 font-semibold">Cyber (Annual)</th>
                        <th className="text-left text-white py-3 font-semibold">Income Protection</th>
                      </tr>
                    </thead>
                    <tbody className="text-slate-300">
                      <tr className="border-b border-white/5">
                        <td className="py-3 pr-4 font-medium text-white">Web Developer</td>
                        <td className="py-3 pr-4">$450 - $900</td>
                        <td className="py-3 pr-4">$250 - $500</td>
                        <td className="py-3 pr-4">$500 - $1,000</td>
                        <td className="py-3">1.5 - 2.5% of income</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="py-3 pr-4 font-medium text-white">Graphic Designer</td>
                        <td className="py-3 pr-4">$350 - $700</td>
                        <td className="py-3 pr-4">$200 - $450</td>
                        <td className="py-3 pr-4">$400 - $800</td>
                        <td className="py-3">1.5 - 2.5% of income</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="py-3 pr-4 font-medium text-white">Business Consultant</td>
                        <td className="py-3 pr-4">$600 - $1,500</td>
                        <td className="py-3 pr-4">$250 - $500</td>
                        <td className="py-3 pr-4">$500 - $1,200</td>
                        <td className="py-3">2 - 3% of income</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="py-3 pr-4 font-medium text-white">Photographer</td>
                        <td className="py-3 pr-4">$300 - $600</td>
                        <td className="py-3 pr-4">$300 - $600</td>
                        <td className="py-3 pr-4">$350 - $700</td>
                        <td className="py-3">1.5 - 2.5% of income</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="py-3 pr-4 font-medium text-white">Accountant / Bookkeeper</td>
                        <td className="py-3 pr-4">$700 - $1,500</td>
                        <td className="py-3 pr-4">$200 - $450</td>
                        <td className="py-3 pr-4">$600 - $1,200</td>
                        <td className="py-3">2 - 3% of income</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-white">Trades / Construction</td>
                        <td className="py-3 pr-4">$500 - $1,200</td>
                        <td className="py-3 pr-4">$400 - $800</td>
                        <td className="py-3 pr-4">$300 - $600</td>
                        <td className="py-3">2.5 - 4% of income</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-slate-400 mt-2">
                  These are indicative ranges based on typical cover levels ($1M-$2M PI, $10M-$20M PL).
                  Actual premiums depend on your specific circumstances, provider, excess, and claims
                  history. Always obtain quotes from multiple providers.
                </p>
              </div>
            </div>

            {/* Section 3: PI vs PL — What's the Difference? */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Professional Indemnity vs Public Liability — What&apos;s the Difference?
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  This is one of the most common points of confusion for freelancers. Both protect
                  you from claims, but they cover completely different risks.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-teal-400 font-semibold mb-2">Professional Indemnity (PI)</h4>
                    <p className="text-sm mb-3">
                      Protects you when your <strong className="text-white">professional work or advice</strong>{' '}
                      causes a client financial loss.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-teal-400 mt-0.5">-</span>
                        <span>Your code crashes a client&apos;s e-commerce store, costing them $50K in lost sales</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-400 mt-0.5">-</span>
                        <span>Your accounting advice leads to an ATO penalty</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-400 mt-0.5">-</span>
                        <span>Your marketing campaign uses unlicensed imagery and the client gets sued</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-400 mt-0.5">-</span>
                        <span>You miss a project deadline and the client loses a contract</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-blue-400 font-semibold mb-2">Public Liability (PL)</h4>
                    <p className="text-sm mb-3">
                      Protects you when someone is <strong className="text-white">physically injured or their property is damaged</strong>{' '}
                      because of your business activities.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-400 mt-0.5">-</span>
                        <span>A client trips over your equipment at a photoshoot</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-400 mt-0.5">-</span>
                        <span>You spill coffee on a client&apos;s laptop during a meeting</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-400 mt-0.5">-</span>
                        <span>Your tools damage a client&apos;s property during a renovation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-400 mt-0.5">-</span>
                        <span>Someone slips on a wet floor at your workshop or studio</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 mt-4">
                  <h4 className="text-white font-semibold mb-2">Which Do You Need?</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-teal-400 mt-0.5">-</span>
                      <span>
                        <strong className="text-white">Work from home, digital services only?</strong>{' '}
                        PI is your priority. PL is optional but still smart if you ever attend client meetings.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-400 mt-0.5">-</span>
                      <span>
                        <strong className="text-white">Visit client sites regularly?</strong>{' '}
                        You need both PI and PL. Many clients will require certificates of currency before you step on-site.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-400 mt-0.5">-</span>
                      <span>
                        <strong className="text-white">Trades or physical work?</strong>{' '}
                        PL is absolutely essential — and may need higher limits ($20M+). PI is also recommended for professional advice components.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 4: 5 Insurance Mistakes Freelancers Make */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                5 Insurance Mistakes Freelancers Make
              </h2>
              <div className="space-y-4 text-slate-300">
                <ol className="space-y-4 list-decimal list-inside">
                  <li>
                    <strong className="text-white">Assuming &ldquo;it won&apos;t happen to me.&rdquo;</strong>{' '}
                    It doesn&apos;t take a catastrophic failure to trigger a claim. A delayed project,
                    a misunderstood brief, a typo in financial advice — these mundane situations generate
                    real lawsuits. In Australia, professional negligence claims average $15,000-$50,000
                    in defence costs alone, regardless of whether you were actually at fault.
                  </li>
                  <li>
                    <strong className="text-white">Choosing the cheapest policy without reading the PDS.</strong>{' '}
                    The Product Disclosure Statement reveals what&apos;s actually covered and excluded.
                    A $200/year policy might exclude the exact claim scenarios relevant to your work.
                    Pay attention to retroactive dates, geographical limits, and sub-limits for specific
                    claim types.
                  </li>
                  <li>
                    <strong className="text-white">Underinsuring to save on premiums.</strong>{' '}
                    A $250K PI policy costs less than a $1M one — but if a claim exceeds your limit, you
                    pay the difference personally. For freelancers working with enterprise clients or
                    government, $1M-$2M PI is the standard expectation. Skimping here is false economy.
                  </li>
                  <li>
                    <strong className="text-white">Forgetting to update cover as your business grows.</strong>{' '}
                    Your insurance needs at $50K revenue are very different from your needs at $200K.
                    Review your policies annually. If you&apos;ve added employees, started handling more
                    client data, or taken on bigger contracts, your cover needs to scale with you.
                  </li>
                  <li>
                    <strong className="text-white">Not bundling policies for savings.</strong>{' '}
                    Most business insurance providers offer package deals (often called &ldquo;Business
                    Packs&rdquo;) that combine PI, PL, and cyber at a 15-25% discount compared to
                    buying each separately. Providers like BizCover, Aon, and CGU offer freelancer-specific
                    packages worth comparing.
                  </li>
                </ol>
              </div>
            </div>

            {/* Section 5: Tax Deductibility of Business Insurance */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Tax Deductibility of Business Insurance
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  <strong className="text-white">
                    All business-related insurance premiums are tax deductible for Australian freelancers
                    and sole traders.
                  </strong>{' '}
                  Under Section 8-1 of the Income Tax Assessment Act 1997 (ITAA 1997), you can claim a
                  deduction for expenses incurred in gaining or producing assessable income, provided
                  they are not capital, private, or domestic in nature.
                </p>
                <div className="bg-white/5 rounded-xl p-4 mt-4">
                  <h4 className="text-white font-semibold mb-2">What You Can Claim</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 mt-0.5">&#10003;</span>
                      <span>
                        <strong className="text-white">Professional Indemnity Insurance</strong> — Fully
                        deductible. Claim the full annual premium.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 mt-0.5">&#10003;</span>
                      <span>
                        <strong className="text-white">Public Liability Insurance</strong> — Fully
                        deductible. Claim the full annual premium.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 mt-0.5">&#10003;</span>
                      <span>
                        <strong className="text-white">Cyber Liability Insurance</strong> — Fully
                        deductible as a business expense.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 mt-0.5">&#10003;</span>
                      <span>
                        <strong className="text-white">Income Protection Insurance</strong> — Premiums
                        are tax deductible for self-employed individuals under Section 295-460 ITAA 1997.
                        This is one of the biggest tax advantages of being a sole trader.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 mt-0.5">&#10003;</span>
                      <span>
                        <strong className="text-white">Business Equipment Insurance</strong> — Fully
                        deductible as a business expense.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 mt-0.5">&#10003;</span>
                      <span>
                        <strong className="text-white">Workers Compensation</strong> — Fully deductible
                        as a statutory business expense.
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-4 mt-4">
                  <h4 className="text-white font-semibold mb-2">How Much You Actually Save</h4>
                  <p className="text-sm">
                    The tax saving depends on your marginal tax rate. For a freelancer earning $120,000
                    (taxable income), the marginal rate is 37% (plus 2% Medicare levy = 39%). If your
                    total insurance costs are $2,500 per year, your actual after-tax cost is just $1,525.
                    At higher income levels (over $190,000), the effective saving is even greater at 47%
                    (plus Medicare). Use our{' '}
                    <a href="/tools/net-income-calculator" className="text-teal-400 hover:underline">
                      Net Income Calculator
                    </a>{' '}
                    to find your exact marginal rate, and our{' '}
                    <a href="/tools/expense-deduction-finder" className="text-teal-400 hover:underline">
                      Expense Deduction Calculator
                    </a>{' '}
                    to discover other deductions you might be missing.
                  </p>
                </div>
                <p className="text-sm text-slate-400 mt-2">
                  Note: This is general information only and not tax advice. Insurance deductibility
                  rules can vary based on your specific circumstances and business structure. Consult
                  a registered tax agent for advice tailored to your situation.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-16 text-center glass rounded-2xl p-10">
            <h3 className="text-3xl font-bold text-white heading-font mb-4">
              Protect your business. <span className="gradient-text">Track your costs.</span>
            </h3>
            <p className="text-slate-300 max-w-xl mx-auto mb-6">
              InvoiceFlow helps freelancers track expenses, send professional invoices, and stay on
              top of business costs — including insurance. Keep all your business finances in one
              place with built-in tax deduction tracking.
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
