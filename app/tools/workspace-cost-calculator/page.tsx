import type { Metadata } from 'next';
import Link from 'next/link';
import WorkspaceCostCalculator from './WorkspaceCostCalculator';

const title =
  'Workspace Cost Calculator | Home Office vs Coworking vs Private Office — InvoiceFlow';
const description =
  'Free workspace cost comparison calculator for Australian freelancers. Compare home office, coworking, and private office costs including tax deductions, net cost after savings, and a personalised recommendation.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'home office vs coworking cost calculator',
    'freelance workspace cost comparison',
    'coworking space cost australia',
    'home office deduction calculator australia',
    'should freelancer rent office',
    'freelance workspace tax deduction',
    'work from home vs coworking comparison',
    'home office tax deduction 67 cents per hour',
    'ato home office deduction 2025',
    'coworking space melbourne cost',
    'freelancer office options australia',
    'self employed workspace comparison',
  ],
  openGraph: {
    title:
      'Workspace Cost Calculator — Compare Home Office, Coworking & Private Office | InvoiceFlow',
    description:
      'Compare workspace costs for freelancers. Home office vs coworking vs private office with Australian tax deductions and break-even analysis.',
    url: 'https://www.invoiceflow.au/tools/workspace-cost-calculator',
    siteName: 'InvoiceFlow',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Workspace Cost Calculator — Free Freelance Tool | InvoiceFlow',
    description:
      'Compare home office, coworking, and private office costs with tax deductions. Free tool for Australian freelancers.',
  },
  alternates: { canonical: 'https://www.invoiceflow.au/tools/workspace-cost-calculator' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Workspace Cost Calculator for Australian Freelancers',
  description:
    'A 3-step calculator that compares home office, coworking space, and private office costs for Australian freelancers. Includes ATO tax deduction calculations using the 67c/hr fixed rate and actual cost methods, net cost after tax savings at marginal tax rates, side-by-side comparison, and a personalised recommendation with break-even income analysis. Free — no signup required.',
  url: 'https://www.invoiceflow.au/tools/workspace-cost-calculator',
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

export default function WorkspaceCostCalculatorPage() {
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
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sky-400/10 border border-sky-400/20 rounded-full mb-6">
              <div className="w-2 h-2 bg-sky-400 rounded-full" />
              <span className="text-sky-400 text-sm font-medium">100% Free</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white heading-font mb-4">
              Workspace Cost{' '}
              <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
                Calculator
              </span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Compare the real cost of working from home, coworking, or renting a private office —
              including Australian tax deductions, net savings, and a personalised recommendation.
              Built for freelancers and sole traders.
            </p>
          </div>

          {/* Calculator Tool */}
          <WorkspaceCostCalculator />

          {/* SEO Content Sections */}
          <section className="mt-16 space-y-12">
            {/* Section 1: Real Costs */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Home Office vs Coworking vs Private Office: The Real Costs
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  For Australian freelancers, choosing a workspace is one of the most impactful
                  financial decisions you will make. The obvious costs — rent, memberships,
                  utilities — are only part of the picture. Hidden costs like commuting, lost
                  productivity, tax implications, and opportunity cost can completely change which
                  option makes financial sense for your situation.
                </p>
                <div className="grid sm:grid-cols-3 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <span className="text-sky-400 text-sm font-bold">HOME</span>
                      Home Office
                    </h4>
                    <div className="space-y-2 text-sm">
                      <p className="text-slate-400">
                        <span className="text-white font-medium">Visible costs:</span> A portion of
                        your rent or mortgage, utilities, internet, and any home office furniture or
                        equipment you have purchased.
                      </p>
                      <p className="text-slate-400">
                        <span className="text-white font-medium">Hidden costs:</span> Isolation,
                        difficulty separating work from home life, slower client trust-building, and
                        potential distraction from household activity.
                      </p>
                      <p className="text-slate-400">
                        <span className="text-white font-medium">Real Melbourne range:</span> $200–
                        $800/month depending on home size, rent, and work-use percentage.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <span className="text-sky-400 text-sm font-bold">CO</span>
                      Coworking Space
                    </h4>
                    <div className="space-y-2 text-sm">
                      <p className="text-slate-400">
                        <span className="text-white font-medium">Visible costs:</span> Monthly
                        membership ($300–$800/month in Melbourne), commute, and daily coffee or food
                        expenses.
                      </p>
                      <p className="text-slate-400">
                        <span className="text-white font-medium">Hidden costs:</span> Variable
                        availability, noise in shared spaces, and costs escalate if you upgrade tiers
                        or use meeting rooms frequently.
                      </p>
                      <p className="text-slate-400">
                        <span className="text-white font-medium">Real Melbourne range:</span> $350–
                        $1,100/month including commute and incidentals.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <span className="text-sky-400 text-sm font-bold">PVT</span>
                      Private Office
                    </h4>
                    <div className="space-y-2 text-sm">
                      <p className="text-slate-400">
                        <span className="text-white font-medium">Visible costs:</span> Monthly rent
                        ($900–$2,500/month in Melbourne CBD), utilities, internet, cleaning, and
                        commute.
                      </p>
                      <p className="text-slate-400">
                        <span className="text-white font-medium">Hidden costs:</span> Lease lock-in,
                        fitout costs, and the overhead burden during slow months when revenue dips.
                      </p>
                      <p className="text-slate-400">
                        <span className="text-white font-medium">Real Melbourne range:</span> $1,100–
                        $3,000+/month all-in depending on location and size.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-sky-400/10 to-blue-500/10 border border-sky-400/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-sky-400 font-medium mb-2">The True Cost Principle</p>
                  <p className="text-sm">
                    The cheapest workspace on paper is not always the cheapest in practice. A home
                    office costs almost nothing in cash, but if it costs you one client per year
                    because you cannot meet professionally, the economic loss may far exceed a
                    coworking membership. Conversely, a $500/month coworking desk only makes sense if
                    it generates productivity or client access that justifies the expense. This
                    calculator helps you see the full picture — not just the invoice.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2: Tax Deductions */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Tax Deductions for Freelance Workspaces in Australia
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  The ATO allows Australian freelancers and sole traders to claim tax deductions for
                  workspace expenses — but the rules differ significantly depending on where you work.
                  Understanding which method applies to your situation can save thousands of dollars
                  per year.
                </p>
                <div className="space-y-4 mt-2">
                  <div className="bg-white/5 rounded-xl p-5">
                    <h4 className="text-white font-semibold mb-3">
                      Home Office: The 67 Cents Per Hour Fixed Rate Method (2025-26)
                    </h4>
                    <p className="text-sm mb-3">
                      From 1 July 2022, the ATO consolidated the fixed rate method to 67 cents per
                      hour. For 2025-26, this rate remains in effect and covers electricity, gas,
                      internet, phone, stationery, and computer consumables. It does not cover
                      occupancy costs (rent/mortgage) or equipment depreciation — those are claimed
                      separately.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      <div className="bg-white/5 rounded-lg p-3">
                        <p className="text-xs text-slate-400">
                          <span className="text-white font-medium">Example:</span> If you work 40
                          hours/week for 48 weeks = 1,920 hours/year. At 67c/hr = $1,286.40 tax
                          deduction. At 30% marginal rate, that saves $385.92 in tax.
                        </p>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3">
                        <p className="text-xs text-slate-400">
                          <span className="text-white font-medium">Record keeping:</span> The ATO
                          requires a representative 4-week diary to show your typical work pattern.
                          You must keep this updated — it cannot be reconstructed at tax time.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-5">
                    <h4 className="text-white font-semibold mb-3">
                      Home Office: The Actual Cost Method
                    </h4>
                    <p className="text-sm mb-3">
                      The actual cost method lets you claim the precise work-related portion of each
                      expense separately — electricity, gas, internet, phone, cleaning, and the
                      decline in value of equipment. You apportion based on floor area (for occupancy
                      costs) and actual usage (for running costs). This method produces a higher
                      deduction for most freelancers who use a dedicated room.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      <div className="bg-white/5 rounded-lg p-3">
                        <p className="text-xs text-slate-400">
                          <span className="text-white font-medium">Apportionment:</span> If your
                          home office is 10% of your home's floor area and you work 8 of 16 waking
                          hours there, your work-use percentage is approximately 50% of that 10% =
                          5% of total occupancy costs.
                        </p>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3">
                        <p className="text-xs text-slate-400">
                          <span className="text-white font-medium">Caution:</span> If you own your
                          home and claim occupancy costs, it can affect your CGT main residence
                          exemption. Renters are not affected. Always seek advice from a registered
                          tax agent.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-5">
                    <h4 className="text-white font-semibold mb-3">
                      Coworking and Private Office: Fully Deductible
                    </h4>
                    <p className="text-sm mb-3">
                      Coworking memberships, private office rent, utilities, internet, cleaning, and
                      commute costs are generally fully deductible as business expenses under section
                      8-1 of ITAA 1997. This is one of the key financial advantages of renting
                      external workspace — there is no apportionment required and no CGT
                      implications.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      <div className="bg-white/5 rounded-lg p-3">
                        <p className="text-xs text-slate-400">
                          <span className="text-white font-medium">GST registered:</span> If you are
                          registered for GST, you can also claim the GST credit on your workspace
                          expenses, effectively reducing the net cost by another 9.09%.
                        </p>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3">
                        <p className="text-xs text-slate-400">
                          <span className="text-white font-medium">Commute note:</span> Travel from
                          home to a regular place of business (coworking or office) is NOT deductible
                          — this is a common mistake. Travel between work locations during the day is
                          deductible.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-sky-400/10 to-blue-500/10 border border-sky-400/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-sky-400 font-medium mb-2">Disclaimer</p>
                  <p className="text-sm">
                    This tool provides general estimates based on ATO published rates for 2025-26. It
                    is not tax advice. Tax outcomes depend on your individual circumstances, income
                    structure, and record keeping. Always consult a registered tax agent or BAS agent
                    before making decisions based on tax deduction estimates.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3: Career Stage */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Choosing the Right Workspace for Your Freelance Career Stage
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  The right workspace is not just about the cheapest option — it is about the option
                  that best supports your income, productivity, and professional positioning at your
                  current stage. Most successful freelancers move through a predictable progression
                  as their business grows.
                </p>
                <div className="space-y-3 mt-2">
                  <div className="bg-white/5 rounded-xl p-5">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-sky-400/20 border border-sky-400/30 flex items-center justify-center flex-shrink-0">
                        <span className="text-sky-400 text-sm font-bold">1</span>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-2">
                          Starting Out (Under $60K/year): Home Office First
                        </h4>
                        <p className="text-sm">
                          When you are building your client base and income is inconsistent, the home
                          office is almost always the right call. Keep your fixed costs low, maximise
                          the ATO 67c/hr deduction, and invest your savings into marketing,
                          upskilling, and tools that generate more revenue. The only exception: if
                          you are in a client-facing role where professional meeting space is
                          critical, consider a pay-as-you-go coworking day pass instead of a full
                          membership.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-5">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-sky-400/20 border border-sky-400/30 flex items-center justify-center flex-shrink-0">
                        <span className="text-sky-400 text-sm font-bold">2</span>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-2">
                          Growth Phase ($60K–$120K/year): Coworking Sweet Spot
                        </h4>
                        <p className="text-sm">
                          At this income level, a coworking hot desk or dedicated desk starts to
                          make economic sense. The networking benefits, professional environment, and
                          separation of work from home typically improve productivity by 15–25% —
                          which at $80K/year can easily be worth $12,000–$20,000 in additional
                          output. Melbourne coworking options at this stage include Cluster, Hub
                          Australia, WeWork, and Storey — with dedicated desks ranging from $450–
                          $650/month in accessible inner-city locations.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-5">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-sky-400/20 border border-sky-400/30 flex items-center justify-center flex-shrink-0">
                        <span className="text-sky-400 text-sm font-bold">3</span>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-2">
                          Established ($120K+/year): Private Office or Premium Coworking
                        </h4>
                        <p className="text-sm">
                          When your income is strong and consistent, a private office begins to make
                          sense — particularly if you have subcontractors, require confidential client
                          meetings, or need a space that signals seniority and permanence to clients.
                          At this income level, a $1,500/month private office represents only 15% of
                          annual revenue and is fully deductible — a reasonable cost of operating a
                          serious business. The alternative at this stage is a premium coworking
                          private office ($700–$900/month), which offers the prestige of a private
                          space with more flexibility.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-5">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-sky-400/20 border border-sky-400/30 flex items-center justify-center flex-shrink-0">
                        <span className="text-sky-400 text-sm font-bold">H</span>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-2">
                          Hybrid Approach: The Best of Both Worlds
                        </h4>
                        <p className="text-sm">
                          Many experienced Melbourne freelancers use a hybrid model — primarily
                          working from home (3–4 days/week) with a coworking day pass for client
                          meeting days or when they need a change of environment. This costs $30–$60
                          per day as a casual visitor, and typically 2–3 visits per week comes out
                          well under a full membership. If you need meeting rooms specifically, most
                          coworking spaces offer pay-per-use rooms at $15–$40/hour — far cheaper than
                          a full membership just for occasional meetings.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 4: InvoiceFlow CTA */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                How InvoiceFlow Helps Track Workspace Expenses
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Whichever workspace you choose, keeping accurate records of your expenses is
                  non-negotiable at tax time. InvoiceFlow helps Australian freelancers track
                  workspace costs as deductible business expenses — so your ATO deductions are
                  maximised and your records are audit-ready.
                </p>
                <div className="grid sm:grid-cols-3 gap-3 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold text-sm mb-2">
                      Expense Tracking
                    </h4>
                    <p className="text-xs text-slate-400">
                      Log your coworking membership, office rent, utilities, and internet as
                      categorised business expenses. InvoiceFlow keeps a clean record that maps
                      directly to your tax deduction claims.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold text-sm mb-2">
                      Income vs Overhead View
                    </h4>
                    <p className="text-xs text-slate-400">
                      See your workspace cost as a percentage of your monthly income. When your
                      overhead ratio is climbing, it is a signal that either your pricing needs
                      reviewing or your workspace choice needs reconsidering.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold text-sm mb-2">
                      BAS-Ready Reports
                    </h4>
                    <p className="text-xs text-slate-400">
                      Generate expense reports that align with your quarterly BAS lodgements. For
                      GST-registered freelancers, InvoiceFlow captures the GST on workspace expenses
                      so you never miss an input tax credit.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold text-sm mb-2">
                      Client Invoicing
                    </h4>
                    <p className="text-xs text-slate-400">
                      If your workspace choice affects how you present to clients — professional
                      invoices with your business address, ABN, and clear payment terms signal that
                      you run a serious operation, regardless of whether you work from home or a
                      private office.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold text-sm mb-2">
                      Revenue Trend Monitoring
                    </h4>
                    <p className="text-xs text-slate-400">
                      Track your monthly revenue trend alongside your fixed workspace costs. When
                      your income consistently exceeds the break-even threshold for upgrading your
                      workspace, InvoiceFlow makes the case visible in your dashboard.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold text-sm mb-2">
                      Financial Paper Trail
                    </h4>
                    <p className="text-xs text-slate-400">
                      If you are ever audited by the ATO, having a complete record of workspace
                      expenses with corresponding invoices, receipts, and payment records is your
                      strongest defence. InvoiceFlow keeps that record automatically.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-16 text-center glass rounded-2xl p-10">
            <h3 className="text-3xl font-bold text-white heading-font mb-4">
              Know your costs.{' '}
              <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
                Track every dollar.
              </span>
            </h3>
            <p className="text-slate-300 max-w-xl mx-auto mb-6">
              InvoiceFlow helps Australian freelancers invoice clients, track income, and categorise
              deductible expenses — so you are always ready for tax time and always know your real
              bottom line.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/signup"
                className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold hover:opacity-90 transition-opacity"
              >
                Start Free — 5 Invoices/Month
              </Link>
              <Link
                href="/tools/hourly-rate-calculator"
                className="inline-block px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all"
              >
                Try Hourly Rate Calculator
              </Link>
            </div>
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
