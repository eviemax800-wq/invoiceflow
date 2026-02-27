import type { Metadata } from 'next';
import Link from 'next/link';
import DebtRecoveryCostCalculator from './DebtRecoveryCostCalculator';
import RelatedTools from '../components/RelatedTools';

const title =
  'Debt Recovery Cost Calculator | Free Unpaid Invoice Recovery Tool for Australian Freelancers — InvoiceFlow';
const description =
  'Free debt recovery cost calculator for Australian freelancers. Compare Letters of Demand, debt collection agencies, VCAT, NCAT, QCAT, small claims courts and mediation. Calculate whether it is worth pursuing an unpaid invoice with real cost-benefit analysis. No signup required.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'debt recovery cost calculator australia',
    'is it worth pursuing unpaid invoice',
    'small claims court cost australia',
    'VCAT application cost freelancer',
    'debt recovery options freelancer',
    'unpaid invoice recovery cost',
    'letter of demand cost australia',
    'debt collection agency fees australia',
    'NCAT filing fee NSW',
    'QCAT application cost',
    'freelancer unpaid invoice options',
    'debt recovery cost benefit analysis',
  ],
  openGraph: {
    title: 'Debt Recovery Cost Calculator — Free Unpaid Invoice Recovery Tool for Australian Freelancers | InvoiceFlow',
    description:
      'Compare debt recovery options with real Australian costs. Letters of Demand, debt collection agencies, tribunals, courts and mediation — calculate whether pursuing your unpaid invoice is worth it. Free — no signup required.',
    url: 'https://www.invoiceflow.au/tools/debt-recovery-calculator',
    siteName: 'InvoiceFlow',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Debt Recovery Cost Calculator — Free Tool for Australian Freelancers | InvoiceFlow',
    description:
      'Compare debt recovery options with real Australian costs. Calculate whether pursuing your unpaid invoice is worth it. Free tool for freelancers.',
  },
  alternates: {
    canonical: 'https://www.invoiceflow.au/tools/debt-recovery-calculator',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Debt Recovery Cost Calculator for Australian Freelancers',
  description:
    'Multi-step calculator that helps Australian freelancers determine whether it is cost-effective to pursue debt recovery for an unpaid invoice. Compares Letters of Demand, debt collection agencies, state tribunals (VCAT, NCAT, QCAT, SACAT, SAT, NTCAT, ACAT), courts, and mediation with real costs, success rates, and timelines. Includes cost-benefit analysis and recommended action plan. Free — no signup required.',
  url: 'https://www.invoiceflow.au/tools/debt-recovery-calculator',
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

export default function DebtRecoveryCalculatorPage() {
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
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-red-400/10 border border-red-400/20 rounded-full mb-6">
              <div className="w-2 h-2 bg-red-400 rounded-full" />
              <span className="text-red-400 text-sm font-medium">100% Free</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white heading-font mb-4">
              Debt Recovery Cost{' '}
              <span className="bg-gradient-to-r from-red-400 to-rose-500 bg-clip-text text-transparent">Calculator</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Is it worth chasing that unpaid invoice? Enter your invoice details and compare recovery
              options with real Australian costs, success rates, and timelines to make an informed decision
              before spending money on debt recovery.
            </p>
          </div>

          {/* Calculator Tool */}
          <DebtRecoveryCostCalculator />

          {/* SEO Content Sections */}
          <section className="mt-16 space-y-12">
            {/* Section 1: Understanding Debt Recovery Options */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Understanding Debt Recovery Options in Australia
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  When a client does not pay an invoice, Australian freelancers have several legal and
                  non-legal options for recovering the debt. The right approach depends on the amount owed,
                  how long it has been overdue, the type of debtor, and your appetite for time and cost
                  investment. Understanding each option before committing money is critical — many
                  freelancers spend more on recovery than the debt is actually worth.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-red-400 text-sm font-bold">01</span>
                      Informal Recovery (Free to Low Cost)
                    </h4>
                    <p className="text-sm">
                      Start with polite but firm follow-up emails, phone calls, and a formal Letter
                      of Demand. A DIY Letter of Demand costs nothing but your time and resolves 40-60%
                      of overdue invoices. If you want more weight, a solicitor-drafted Letter of Demand
                      typically costs $200-$500 and increases the response rate to 60-75%. This should
                      always be your first step regardless of the amount owed — it is the cheapest option
                      and often the most effective.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-red-400 text-sm font-bold">02</span>
                      Debt Collection Agencies
                    </h4>
                    <p className="text-sm">
                      Professional debt collectors charge 10-25% of the recovered amount (no win, no fee
                      in most cases). They handle all communication with the debtor, send formal demands,
                      and can escalate to legal action. Best for debts over $500 where you want a hands-off
                      approach. The downside is the percentage fee reduces your net recovery, and agencies
                      have no magic — if the debtor genuinely cannot pay, a collection agency will not
                      change that.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-red-400 text-sm font-bold">03</span>
                      State Tribunals (VCAT, NCAT, QCAT, etc.)
                    </h4>
                    <p className="text-sm">
                      Every Australian state has a civil and administrative tribunal that handles smaller
                      disputes without the formality and cost of a court. Filing fees range from $42 to
                      $650 depending on the state and amount claimed. Tribunals are designed to be
                      accessible without a lawyer, making them ideal for freelancers. Processing time
                      is typically 2-6 months, and success rates are 60-80% when you have clear
                      documentation (contracts, invoices, email trails).
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-red-400 text-sm font-bold">04</span>
                      Local and District Courts
                    </h4>
                    <p className="text-sm">
                      For larger debts ($25,000+), you may need to file in a Local or District Court.
                      Filing fees range from $200 to $2,000+ depending on the amount and jurisdiction.
                      Court proceedings are more formal, take longer (3-12 months), and you will likely
                      need legal representation which adds significant cost. However, court orders carry
                      stronger enforcement powers including garnishment of wages and seizure of assets.
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-red-400/10 to-rose-500/10 border border-red-400/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-red-400 font-medium mb-2">The 6-Year Limitation Period</p>
                  <p className="text-sm">
                    In Australia, the limitation period for recovering a contract debt is generally 6 years
                    from the date the debt became due (varies slightly by state). After this period, you
                    lose the right to pursue the debt through the courts. However, the longer you wait, the
                    harder recovery becomes — debtor circumstances change, businesses close, and evidence
                    fades. The best time to start recovery action is within the first 90 days of the
                    invoice becoming overdue.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2: State-by-State Court & Tribunal Costs */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                State-by-State Court &amp; Tribunal Costs
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Each Australian state and territory has its own civil and administrative tribunal with
                  different filing fees, monetary limits, and processes. Here is a breakdown of what it
                  costs to file a claim in each jurisdiction as of 2025-2026.
                </p>
                <div className="space-y-3 mt-4">
                  <div className="bg-white/5 rounded-xl p-4 flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-red-400/20 border border-red-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-red-400 text-xs font-bold">NSW</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">NCAT (NSW Civil &amp; Administrative Tribunal)</h4>
                      <p className="text-xs text-slate-400 mt-1">
                        Filing fees range from $53 for claims under $10,000 to approximately $500 for
                        larger claims up to $40,000 in the Consumer and Commercial Division. NCAT handles
                        consumer claims, home building disputes, and general civil claims. The process is
                        relatively informal and you do not need a lawyer. For debts over $40,000, you
                        would need to file in the Local Court or District Court of NSW.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-red-400/20 border border-red-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-red-400 text-xs font-bold">VIC</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">VCAT (Victorian Civil &amp; Administrative Tribunal)</h4>
                      <p className="text-xs text-slate-400 mt-1">
                        Filing fees range from $65 for smaller claims to approximately $650 for claims
                        approaching the $100,000 civil limit. VCAT is one of the most accessible tribunals
                        in Australia with a high monetary limit. It handles disputes between consumers
                        and traders, building disputes, and general civil claims. VCAT is particularly
                        freelancer-friendly — the process is designed for self-representation.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-red-400/20 border border-red-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-red-400 text-xs font-bold">QLD</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">QCAT (Queensland Civil &amp; Administrative Tribunal)</h4>
                      <p className="text-xs text-slate-400 mt-1">
                        Filing fees range from $75 for minor civil disputes (under $25,000) to $380
                        for larger claims. QCAT&apos;s minor civil dispute jurisdiction covers most
                        freelancer invoices. The process includes a mandatory conciliation/mediation step
                        before a hearing, which often resolves disputes without a formal decision.
                      </p>
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3 mt-2">
                    <div className="bg-white/5 rounded-xl p-4">
                      <h4 className="text-white font-semibold text-sm mb-1 flex items-center gap-2">
                        <span className="text-red-400 text-xs font-bold bg-red-400/20 border border-red-400/30 rounded-full w-6 h-6 flex items-center justify-center">SA</span>
                        SACAT
                      </h4>
                      <p className="text-xs text-slate-400">
                        Filing fees from $42 to $283. South Australia&apos;s tribunal handles minor civil
                        claims efficiently with a straightforward application process.
                      </p>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4">
                      <h4 className="text-white font-semibold text-sm mb-1 flex items-center gap-2">
                        <span className="text-red-400 text-xs font-bold bg-red-400/20 border border-red-400/30 rounded-full w-6 h-6 flex items-center justify-center">WA</span>
                        SAT
                      </h4>
                      <p className="text-xs text-slate-400">
                        Filing fees from $45 to $240. Western Australia&apos;s State Administrative Tribunal
                        handles civil disputes with a focus on accessibility.
                      </p>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4">
                      <h4 className="text-white font-semibold text-sm mb-1 flex items-center gap-2">
                        <span className="text-red-400 text-xs font-bold bg-red-400/20 border border-red-400/30 rounded-full w-6 h-6 flex items-center justify-center">TAS</span>
                        Magistrates Court
                      </h4>
                      <p className="text-xs text-slate-400">
                        Filing fees from $80 to $200. Tasmania uses the Magistrates Court for smaller
                        civil claims rather than a dedicated tribunal.
                      </p>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4">
                      <h4 className="text-white font-semibold text-sm mb-1 flex items-center gap-2">
                        <span className="text-red-400 text-xs font-bold bg-red-400/20 border border-red-400/30 rounded-full w-6 h-6 flex items-center justify-center">NT</span>
                        NTCAT
                      </h4>
                      <p className="text-xs text-slate-400">
                        Filing fees from $50 to $150. The NT Civil and Administrative Tribunal handles
                        minor civil disputes with relatively low filing costs.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 flex items-start gap-3 mt-2">
                    <div className="w-8 h-8 rounded-full bg-red-400/20 border border-red-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-red-400 text-xs font-bold">ACT</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">ACAT (ACT Civil &amp; Administrative Tribunal)</h4>
                      <p className="text-xs text-slate-400 mt-1">
                        Filing fees from $48 to $340. ACAT handles civil disputes in the Australian
                        Capital Territory with a straightforward online application process and
                        mandatory pre-hearing conferences to encourage resolution.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3: When Is It Worth Pursuing */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                When Is It Worth Pursuing an Unpaid Invoice?
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  The decision to pursue debt recovery is fundamentally a cost-benefit calculation. You
                  need to weigh the amount owed against the cost of recovery (financial and time), the
                  probability of success, and the opportunity cost of the hours you will spend on the
                  process instead of billable work. Here are the key factors to consider.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-green-400 text-sm font-bold">$$$</span>
                      The Amount Owed
                    </h4>
                    <p className="text-sm">
                      As a general rule, debts under $500 are rarely worth pursuing beyond a Letter of
                      Demand. The filing fees, time investment, and stress simply do not justify the
                      potential recovery. For debts between $500 and $5,000, a tribunal claim can make
                      sense if you have strong documentation. Above $5,000, the economics of recovery
                      become more favourable, especially through tribunals where the process is designed
                      for self-representation.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-red-400 text-sm font-bold">TIME</span>
                      Your Time and Opportunity Cost
                    </h4>
                    <p className="text-sm">
                      Pursuing a debt through a tribunal can consume 10-30 hours of your time over 2-6
                      months — preparing the application, gathering evidence, attending hearings, and
                      potentially enforcing the order. At a typical freelance rate of $100-$200 per hour,
                      that is $1,000-$6,000 in opportunity cost. If you are turning down paid work to
                      attend hearings, the real cost of recovery escalates quickly.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-amber-400 text-sm font-bold">DOCS</span>
                      Strength of Your Evidence
                    </h4>
                    <p className="text-sm">
                      Your chances of success are directly correlated to the quality of your documentation.
                      A signed contract, clear invoice, email trail showing delivery of work, and a formal
                      Letter of Demand create a strong case. Without a written contract, you can still
                      succeed on the basis of email correspondence, but your case is weaker and the
                      debtor has more room to dispute the agreed terms.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-purple-400 text-sm font-bold">CAN</span>
                      Debtor&apos;s Ability to Pay
                    </h4>
                    <p className="text-sm">
                      Even if you win a tribunal or court order, you still need to collect. If the debtor
                      is insolvent, has no assets, or has gone into administration, a court order is just
                      a piece of paper. Before investing in recovery, do a basic check — is the business
                      still operating? Are there assets to attach? A judgment against an empty company
                      is worthless and will only cost you the filing fees.
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-red-400/10 to-rose-500/10 border border-red-400/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-red-400 font-medium mb-2">The Break-Even Formula</p>
                  <p className="text-sm">
                    To calculate whether pursuing a debt is worth it, use this formula: <strong className="text-white">Net
                    Expected Recovery = (Debt Amount x Success Probability) - Recovery Costs - (Hours x
                    Your Hourly Rate)</strong>. If the result is positive and significant enough to justify
                    the stress and disruption, it is worth pursuing. If it is negative or marginal, a Letter
                    of Demand may be your best and only step. This calculator automates this analysis for you.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4: DIY vs Professional Debt Recovery */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                DIY vs Professional Debt Recovery
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  One of the biggest decisions freelancers face is whether to handle debt recovery
                  themselves or hire a professional. Both approaches have clear advantages and
                  drawbacks that depend on your situation.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-green-400/5 border border-green-400/15 rounded-xl p-5">
                    <h4 className="text-green-400 font-semibold mb-3">DIY Debt Recovery</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-start gap-2">
                        <span className="text-green-400 text-xs mt-1 flex-shrink-0">+</span>
                        <p>No percentage fee — you keep 100% of what you recover</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-green-400 text-xs mt-1 flex-shrink-0">+</span>
                        <p>Tribunals are designed for self-representation — no lawyer needed</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-green-400 text-xs mt-1 flex-shrink-0">+</span>
                        <p>You control the timeline, tone, and strategy</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-red-400 text-xs mt-1 flex-shrink-0">-</span>
                        <p>Significant time investment (10-30 hours for a tribunal claim)</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-red-400 text-xs mt-1 flex-shrink-0">-</span>
                        <p>Emotional toll — dealing with a difficult debtor is stressful</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-red-400 text-xs mt-1 flex-shrink-0">-</span>
                        <p>Learning curve if you have not navigated the system before</p>
                      </div>
                    </div>
                    <p className="text-xs text-green-400/80 mt-3 font-medium">Best for: debts under $10K with strong documentation</p>
                  </div>
                  <div className="bg-red-400/5 border border-red-400/15 rounded-xl p-5">
                    <h4 className="text-red-400 font-semibold mb-3">Professional Debt Recovery</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-start gap-2">
                        <span className="text-green-400 text-xs mt-1 flex-shrink-0">+</span>
                        <p>Hands-off — they handle everything from demand letters to legal action</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-green-400 text-xs mt-1 flex-shrink-0">+</span>
                        <p>Professional letters carry more weight and urgency</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-green-400 text-xs mt-1 flex-shrink-0">+</span>
                        <p>No cost if they do not recover (no win, no fee)</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-red-400 text-xs mt-1 flex-shrink-0">-</span>
                        <p>10-25% commission on recovered amount</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-red-400 text-xs mt-1 flex-shrink-0">-</span>
                        <p>Less control over the approach and client relationship</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-red-400 text-xs mt-1 flex-shrink-0">-</span>
                        <p>Some agencies charge upfront fees in addition to commission</p>
                      </div>
                    </div>
                    <p className="text-xs text-red-400/80 mt-3 font-medium">Best for: debts over $5K where you want a hands-off approach</p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-red-400/10 to-rose-500/10 border border-red-400/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-red-400 font-medium mb-2">Mediation: The Middle Ground</p>
                  <p className="text-sm">
                    Mediation offers a middle ground between DIY and adversarial recovery. A professional
                    mediator facilitates a negotiation between you and the debtor, aiming for a mutually
                    acceptable resolution. Costs range from $500 to $2,000 and the process typically takes
                    2-4 weeks. Mediation has a 65-80% success rate and preserves the business relationship
                    — making it ideal for situations where you may want to work with the client again, or
                    where the debtor disputes part of the amount owed.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 5: How InvoiceFlow Helps */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                How InvoiceFlow Helps Prevent Payment Issues
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  The best debt recovery strategy is prevention. InvoiceFlow is built specifically for
                  Australian freelancers with features designed to reduce late payments and protect your
                  cash flow before invoices become overdue.
                </p>
                <div className="grid sm:grid-cols-3 gap-3 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold text-sm mb-2 flex items-center gap-2">
                      <span className="text-red-400 text-lg">1.</span> Professional Invoices
                    </h4>
                    <p className="text-xs text-slate-400">
                      Branded, professional invoices with clear payment terms, due dates, and bank details.
                      Clients take professional invoices more seriously — they signal that you run a real
                      business and expect timely payment.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold text-sm mb-2 flex items-center gap-2">
                      <span className="text-red-400 text-lg">2.</span> Automated Reminders
                    </h4>
                    <p className="text-xs text-slate-400">
                      Automatic payment reminders at configurable intervals — before due date, on due date,
                      and at escalating intervals after. Persistent, polite reminders recover the majority
                      of overdue invoices without any manual effort.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold text-sm mb-2 flex items-center gap-2">
                      <span className="text-red-400 text-lg">3.</span> Payment Tracking
                    </h4>
                    <p className="text-xs text-slate-400">
                      Real-time visibility into which invoices are paid, pending, or overdue. Spot problem
                      patterns early — if a client is consistently late, you can tighten terms or require
                      deposits before the situation escalates to debt recovery.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold text-sm mb-2 flex items-center gap-2">
                      <span className="text-red-400 text-lg">4.</span> Late Payment Interest
                    </h4>
                    <p className="text-xs text-slate-400">
                      Automatically calculate and apply late payment interest to overdue invoices. Having
                      an interest clause in your terms incentivises clients to pay on time and compensates
                      you for the cost of delayed payment.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold text-sm mb-2 flex items-center gap-2">
                      <span className="text-red-400 text-lg">5.</span> Deposit Invoicing
                    </h4>
                    <p className="text-xs text-slate-400">
                      Create deposit and milestone invoices to collect payment throughout the project
                      rather than waiting until the end. This reduces your exposure and ensures you are
                      never more than one milestone behind on payment.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold text-sm mb-2 flex items-center gap-2">
                      <span className="text-red-400 text-lg">6.</span> Documentation Trail
                    </h4>
                    <p className="text-xs text-slate-400">
                      Every invoice, reminder, and payment is logged and timestamped. If you ever need
                      to pursue debt recovery, InvoiceFlow provides the complete paper trail that tribunals
                      and courts require to support your claim.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-16 text-center glass rounded-2xl p-10">
            <h3 className="text-3xl font-bold text-white heading-font mb-4">
              Stop chasing payments,{' '}
              <span className="bg-gradient-to-r from-red-400 to-rose-500 bg-clip-text text-transparent">start preventing them</span>
            </h3>
            <p className="text-slate-300 max-w-xl mx-auto mb-6">
              InvoiceFlow handles your invoicing, automated reminders, and payment tracking — so you
              get paid on time without the awkward follow-ups. Professional invoices, deposit invoicing,
              and real-time payment status for Australian freelancers.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/signup"
                className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold hover:opacity-90 transition-opacity"
              >
                Start Free — 5 Invoices/Month
              </Link>
              <Link
                href="/tools/late-payment-interest-calculator"
                className="inline-block px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all"
              >
                Try Late Payment Calculator
              </Link>
            </div>
          </section>
        
        <RelatedTools currentSlug="debt-recovery-calculator" category="Invoicing & Documents" />
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
