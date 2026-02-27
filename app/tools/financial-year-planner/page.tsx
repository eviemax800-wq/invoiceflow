import type { Metadata } from 'next';
import Link from 'next/link';
import FinancialYearPlanner from './FinancialYearPlanner';
import RelatedTools from '../components/RelatedTools';
import EmailCapture from '../components/EmailCapture';
import BreadcrumbSchema from '../components/BreadcrumbSchema';

const title =
  'Financial Year Planner | Free FY2025-26 Planning Tool for Freelancers — InvoiceFlow';
const description =
  'Free financial year planner for Australian freelancers and sole traders. Plan FY2025-26 with quarterly revenue targets, ATO deadline calendar, tax reserves, super set-aside, billable hours breakdown, and cash reserve recommendations. No signup required.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'financial year planner freelancer australia',
    'freelance annual planning template 2025-26',
    'sole trader FY planning',
    'quarterly goals planner freelancer',
    'freelance business planning calendar',
    'australian financial year planner sole trader',
    'freelance quarterly revenue targets',
    'FY2025-26 planner freelancer',
    'freelance tax deadline calendar australia',
    'sole trader annual business plan',
    'freelance cash flow planning quarterly',
    'australian freelancer BAS deadline planner',
  ],
  openGraph: {
    title: 'Financial Year Planner — Free FY2025-26 Planning for Freelancers | InvoiceFlow',
    description:
      'Plan your full financial year as an Australian freelancer. Quarterly revenue targets, ATO deadlines, tax reserves, and billable hours breakdown. Free — no signup required.',
    url: 'https://www.invoiceflow.au/tools/financial-year-planner',
    siteName: 'InvoiceFlow',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Financial Year Planner — Free FY2025-26 Planning for Freelancers | InvoiceFlow',
    description:
      'Plan your FY2025-26 with quarterly targets, ATO deadlines, tax reserves, and billable hours. Free tool for Australian freelancers.',
  },
  alternates: {
    canonical: 'https://www.invoiceflow.au/tools/financial-year-planner',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Financial Year Planner for Freelancers',
  description:
    'Interactive financial year planner for Australian freelancers and sole traders. Plan FY2025-26 with quarterly revenue targets, ATO deadline calendar (BAS, super, income tax, EOFY), tax reserve calculations using ATO 2025-26 brackets, superannuation set-aside at 11.5%, GST reserves, billable hours breakdown, cash reserve recommendations, and quarterly action items. Free — no signup required.',
  url: 'https://www.invoiceflow.au/tools/financial-year-planner',
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

export default function FinancialYearPlannerPage() {
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
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-rose-400/10 border border-rose-400/20 rounded-full mb-6">
              <div className="w-2 h-2 bg-rose-400 rounded-full" />
              <span className="text-rose-400 text-sm font-medium">100% Free</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white heading-font mb-4">
              Financial Year{' '}
              <span className="bg-gradient-to-r from-rose-400 to-pink-500 bg-clip-text text-transparent">Planner</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Plan your full FY2025-26 as an Australian freelancer. Set quarterly revenue targets,
              track every ATO deadline, calculate your tax reserves and super, and see exactly how
              many billable hours you need each week to hit your goals.
            </p>
          </div>

          {/* Planner Tool */}
          <FinancialYearPlanner />

          {/* SEO Content Sections */}
          <section className="mt-16 space-y-12">
            {/* Section 1: Why Plan Your Financial Year */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Why Every Freelancer Needs a Financial Year Plan
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  The Australian financial year runs from 1 July to 30 June — twelve months that
                  determine your tax obligations, superannuation contributions, and business growth
                  trajectory. Most freelancers operate reactively, dealing with tax bills and cash
                  flow crises as they arise. A structured FY plan transforms this chaos into a
                  predictable system where you know exactly what you need to earn each quarter, how
                  much to set aside for the ATO, and when every deadline falls. The difference
                  between freelancers who build wealth and those who perpetually scramble is almost
                  always planning.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-rose-400 text-sm font-bold">01</span>
                      Quarterly Thinking Beats Monthly Panic
                    </h4>
                    <p className="text-sm">
                      Freelance income is lumpy — a $20,000 month followed by a $3,000 month is
                      normal. Monthly targets create anxiety because any single month can be an
                      outlier. Quarterly targets smooth the variance. If your Q1 target is $30,000
                      and you bill $18,000 in July, you know you need $12,000 across August and
                      September, which is entirely achievable. This longer horizon reduces emotional
                      decision-making and lets you focus on the work rather than constantly checking
                      your bank balance. Align your quarters with BAS periods (Jul-Sep, Oct-Dec,
                      Jan-Mar, Apr-Jun) to kill two birds with one stone.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-rose-400 text-sm font-bold">02</span>
                      The ATO Deadline Trap
                    </h4>
                    <p className="text-sm">
                      Australian freelancers face a maze of recurring deadlines: quarterly BAS
                      lodgements, quarterly super contributions, PAYG instalments, and annual income
                      tax. Miss a BAS deadline and you face penalties starting at $313 per 28-day
                      period. Miss super deadlines and you lose the tax deduction for that quarter.
                      Most freelancers know these dates vaguely but do not track them systematically.
                      A financial year plan puts every deadline on a timeline so you can prepare
                      weeks in advance rather than scrambling the night before. The cost of being
                      late is not just penalties — it is the stress and context-switching that
                      destroys your productivity.
                    </p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-5 mt-4">
                  <h4 className="text-white font-semibold mb-3">Revenue Targets Drive Behaviour</h4>
                  <p className="text-sm">
                    Setting an annual revenue target is the foundation, but it only becomes useful
                    when broken down into quarterly and monthly sub-targets. If you need $150,000
                    for the year and your average project is $5,000, you know you need 30 projects —
                    roughly 7-8 per quarter. If your hourly rate is $150 and you can bill 25 hours
                    per week, your maximum weekly capacity is $3,750, meaning you need roughly 40
                    billable weeks to hit target. These numbers shape your pipeline management,
                    marketing activity, and pricing decisions. Without them, you are guessing. With
                    them, you are executing a plan.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-rose-400/10 to-pink-500/10 border border-rose-400/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-rose-400 font-medium mb-2">The Rule of Three Reserves</p>
                  <p className="text-sm">
                    Every Australian freelancer should maintain three financial reserves: a Tax
                    Reserve (covering estimated income tax, Medicare levy, and PAYG instalments), a
                    Super Reserve (11.5% of your pay, contributed quarterly), and a Cash Reserve
                    (three months of fixed expenses for emergencies and slow periods). This planner
                    calculates all three based on your inputs, so you know exactly how much to set
                    aside each month. The peace of mind from having these reserves in place is worth
                    more than any amount of revenue growth — it is the difference between a
                    sustainable business and a house of cards.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2: Australian FY Timeline */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Key ATO Dates for Freelancers in FY2025-26
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  The Australian Tax Office operates on a strict calendar of deadlines that every
                  sole trader must follow. Missing these dates means penalties, lost deductions, and
                  unnecessary stress. Here is the complete timeline for FY2025-26, broken down by
                  quarter to align with your business planning.
                </p>
                <div className="space-y-3 mt-4">
                  <div className="bg-white/5 rounded-xl p-4 flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-rose-400/20 border border-rose-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-rose-400 text-xs font-bold">Q1</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">July - September 2025</h4>
                      <p className="text-xs text-slate-400 mt-1">
                        The start of a new financial year. Lodge your previous year income tax return
                        by 31 October (or 15 March if using a registered tax agent). Q4 of the
                        previous year BAS is due 28 July if you have not already lodged. Super for
                        Q4 of the previous year is due 28 July. This is also the ideal time to set
                        your annual targets and establish your reserve accounts if you have not
                        already. Review your hourly rate, update your service agreements, and
                        consider whether a rate increase is due. Most Australian freelancers find
                        Q1 moderately busy as businesses return from EOFY slowdowns.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-rose-400/20 border border-rose-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-rose-400 text-xs font-bold">Q2</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">October - December 2025</h4>
                      <p className="text-xs text-slate-400 mt-1">
                        Q1 BAS is due 28 October. Q1 super contribution deadline is 28 October.
                        Income tax return deadline is 31 October (self-lodgers). This is typically
                        the busiest quarter for many freelancers as businesses push to complete
                        projects before the Christmas shutdown. December often brings a natural
                        slowdown as clients go on holiday. Use December to plan Q3 and Q4, review
                        your year-to-date performance against targets, and adjust your plan if
                        needed. If you are ahead of target, consider making additional super
                        contributions before 30 June to maximise your tax deduction.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-rose-400/20 border border-rose-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-rose-400 text-xs font-bold">Q3</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">January - March 2026</h4>
                      <p className="text-xs text-slate-400 mt-1">
                        Q2 BAS is due 28 February. Q2 super contribution deadline is 28 January.
                        Income tax return deadline for tax agent lodgements is 15 March (if you had
                        a prior year lodgement obligation). January is typically slow as Australian
                        businesses restart after the holiday period. February and March usually see
                        a strong pickup. This is the mid-year checkpoint — if you are behind your
                        annual target, you have two quarters to adjust. Consider whether you need
                        to increase marketing activity, raise rates, or take on additional project
                        types to close the gap.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-rose-400/20 border border-rose-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-rose-400 text-xs font-bold">Q4</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">April - June 2026</h4>
                      <p className="text-xs text-slate-400 mt-1">
                        Q3 BAS is due 28 April. Q3 super contribution deadline is 28 April. EOFY
                        is 30 June — the most important date in the Australian tax calendar. Before
                        30 June, review all deductible expenses, prepay any annual subscriptions,
                        make final super contributions, purchase any business assets under the
                        instant asset write-off threshold, and ensure all invoices are issued for
                        work completed. Q4 is also when you should plan your FY2026-27 targets
                        based on the year just completed. Most freelancers find Q4 moderately busy
                        as businesses rush to spend their own budgets before EOFY.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-rose-400/10 to-pink-500/10 border border-rose-400/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-rose-400 font-medium mb-2">Set Calendar Reminders Two Weeks Early</p>
                  <p className="text-sm">
                    The single best practice for ATO compliance is to set calendar reminders two
                    weeks before every deadline. BAS due 28 October? Set a reminder for 14 October
                    to start preparing. Super due 28 January? Reminder on 14 January. This buffer
                    gives you time to gather records, reconcile accounts, and lodge without stress.
                    Late BAS lodgement penalties start at $313 and escalate to $1,565 for
                    medium-sized entities. Late super contributions lose their tax deductibility for
                    that quarter. Two weeks of buffer eliminates these risks entirely.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3: How to Build Your FY Plan */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                How to Build Your Freelance Financial Year Plan
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  A good financial year plan is not a rigid budget — it is a living framework that
                  guides your decisions and adapts as circumstances change. Here is a practical,
                  step-by-step approach to building your FY2025-26 plan as an Australian freelancer.
                </p>
                <div className="space-y-3 mt-4">
                  <div className="bg-white/5 rounded-xl p-4 flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-rose-400/20 border border-rose-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-rose-400 text-xs font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">Start with Your Target Take-Home Pay</h4>
                      <p className="text-xs text-slate-400 mt-1">
                        Work backwards from what you need to live comfortably. If you need $80,000
                        after tax, factor in your marginal tax rate, Medicare levy, and super
                        contributions to calculate the gross revenue required. For most sole traders
                        earning $80,000-$150,000, you will need to earn roughly 40-50% more in
                        gross revenue than your desired take-home. This tool calculates the exact
                        amount based on ATO 2025-26 brackets. Your revenue target should be
                        achievable but stretching — if you earned $120,000 last year, a target of
                        $140,000 represents healthy 17% growth without being unrealistic.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-rose-400/20 border border-rose-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-rose-400 text-xs font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">Distribute Revenue Across Quarters</h4>
                      <p className="text-xs text-slate-400 mt-1">
                        Not all quarters are equal. Most Australian freelancers find Q2 (Oct-Dec)
                        and Q4 (Apr-Jun) strongest due to end-of-calendar-year and end-of-financial-year
                        spending. Q1 (Jul-Sep) is moderate, and Q3 (Jan-Mar) is often the weakest
                        due to the January holiday period. A common split for a $120,000 target is
                        Q1: $28,000, Q2: $34,000, Q3: $25,000, Q4: $33,000. This weighted
                        distribution prevents you from setting unrealistic targets in slow periods
                        and leaves room for overperformance in busy ones.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-rose-400/20 border border-rose-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-rose-400 text-xs font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">Calculate Your Reserve Requirements</h4>
                      <p className="text-xs text-slate-400 mt-1">
                        Three reserves protect your business: Tax Reserve (income tax + Medicare
                        levy, calculated on your gross revenue minus deductible expenses), Super
                        Reserve (11.5% of your deemed salary), and Cash Reserve (three months of
                        fixed expenses). If your monthly fixed expenses are $4,000, your cash reserve
                        target is $12,000. Build these reserves gradually — if starting from zero,
                        allocate an extra 5-10% of each payment received until you reach the target.
                        Once funded, you only need to top up as expenses change. These reserves
                        eliminate the two biggest sources of freelancer financial stress: unexpected
                        tax bills and income gaps.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-rose-400/20 border border-rose-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-rose-400 text-xs font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">Set Quarterly Action Items</h4>
                      <p className="text-xs text-slate-400 mt-1">
                        Each quarter should have specific action items beyond just hitting a revenue
                        number. Q1 might focus on client acquisition to build pipeline. Q2 might
                        prioritise existing client work during the busy season. Q3 could be your
                        marketing and business development quarter while things are quieter. Q4 is
                        tax planning and EOFY preparation. Assign 2-3 concrete, measurable actions
                        per quarter: &ldquo;Pitch 5 new clients,&rdquo; &ldquo;Launch new service
                        offering,&rdquo; &ldquo;Increase rate to $X for new clients,&rdquo; or
                        &ldquo;Prepay annual subscriptions before June 30.&rdquo;
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-5 mt-4">
                  <h4 className="text-white font-semibold mb-3">Worked Example: Melbourne Freelance Developer</h4>
                  <p className="text-sm mb-3">
                    Sam is a freelance web developer in Melbourne targeting $140,000 for FY2025-26.
                    Monthly fixed expenses are $3,500. Average hourly rate is $160. Average project
                    value is $8,000.
                  </p>
                  <div className="bg-white/5 rounded-lg p-4 text-sm space-y-1 font-mono">
                    <p className="text-rose-300">Annual target:         $140,000</p>
                    <p className="text-pink-300">Monthly needed:        $11,667</p>
                    <p className="text-amber-300">Weekly billable hrs:   ~18 hours at $160/hr</p>
                    <p className="text-sky-300">Tax reserve (est):     $32,800/year = $2,733/month</p>
                    <p className="text-emerald-300">Super (11.5%):         $16,100/year = $1,342/month</p>
                    <p className="text-slate-300">Cash reserve target:   $10,500 (3 months x $3,500)</p>
                    <p className="text-white">Net take-home:         ~$91,100/year = $7,592/month</p>
                  </div>
                  <p className="text-sm mt-3">
                    With these numbers, Sam knows they need approximately 18 billable hours per week,
                    or about 4 projects per quarter. They set aside $2,733/month for tax and
                    $1,342/month for super, leaving a healthy take-home of $7,592/month. The cash
                    reserve of $10,500 provides nearly three months of runway if projects dry up.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4: Common Planning Mistakes */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Common Financial Year Planning Mistakes (And How to Avoid Them)
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Planning is only useful if it accounts for the realities of freelance life.
                  Here are the most common mistakes Australian freelancers make when planning
                  their financial year, and how to avoid each one.
                </p>
                <div className="space-y-3 mt-4">
                  <div className="bg-white/5 rounded-xl p-4 flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-400/20 border border-red-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-red-400 text-xs font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">Planning on Revenue, Not Capacity</h4>
                      <p className="text-xs text-slate-400 mt-1">
                        Setting a $200,000 revenue target sounds ambitious, but if you can only bill
                        25 hours per week at $120/hour for 46 weeks, your maximum capacity is
                        $138,000. No amount of goal-setting can overcome a capacity ceiling. Always
                        validate your revenue target against your billable hours capacity, hourly
                        rate, and realistic project pipeline. If the target exceeds your capacity,
                        you either need to raise your rates, increase your billable hours, or reduce
                        the target to something achievable.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-400/20 border border-red-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-red-400 text-xs font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">Ignoring Seasonality</h4>
                      <p className="text-xs text-slate-400 mt-1">
                        Dividing your annual target by four and expecting equal quarters is a recipe
                        for disappointment. Australian businesses have predictable seasonal patterns:
                        January is slow, pre-Christmas is rushed, and EOFY creates a budget-spending
                        spike. Your plan should weight quarters differently based on your industry
                        and past experience. If you have invoicing data from previous years, use it
                        to calibrate your quarterly split. A realistic uneven split is far more
                        useful than an optimistic even one.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-400/20 border border-red-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-red-400 text-xs font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">Forgetting About Leave and Downtime</h4>
                      <p className="text-xs text-slate-400 mt-1">
                        Employees get four weeks of paid leave. Freelancers get zero. If you plan
                        for 52 billable weeks and then take two weeks holiday plus sick days and
                        personal time, your plan falls short. Realistic planning assumes 44-46
                        billable weeks per year, accounting for holidays, illness, admin days, and
                        professional development. This tool factors in leave weeks when calculating
                        your billable hours requirements. Planning for 46 weeks and billing 48 is
                        far better than planning for 52 weeks and falling short.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-400/20 border border-red-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-red-400 text-xs font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">Not Reviewing Quarterly</h4>
                      <p className="text-xs text-slate-400 mt-1">
                        A plan you create in July and never revisit is just a wish. The power of
                        FY planning is the quarterly review cycle — every three months, compare
                        actual performance against targets, adjust upcoming quarter targets if
                        needed, and update your reserve balances. Align these reviews with your BAS
                        lodgement dates since you are already looking at your numbers. A 30-minute
                        review every quarter keeps your plan relevant and your business on track.
                        Most freelancers who abandon their plans do so because they never reviewed
                        them — not because the plans were bad.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-rose-400/10 to-pink-500/10 border border-rose-400/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-rose-400 font-medium mb-2">The 80/20 Rule of Planning</p>
                  <p className="text-sm">
                    You do not need a perfect plan — you need a good-enough plan that you actually
                    follow. Spending hours tweaking percentages and projections is less valuable than
                    spending 30 minutes setting reasonable targets and then executing against them.
                    This planner gives you a comprehensive plan in under five minutes. Use it as a
                    starting point, review it quarterly, and adjust as you learn more about your
                    business patterns. The freelancers who build sustainable businesses are not the
                    ones with the most detailed spreadsheets — they are the ones who consistently
                    check their numbers and make adjustments.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-16 text-center glass rounded-2xl p-10">
            <h3 className="text-3xl font-bold text-white heading-font mb-4">
              Plan the year, then{' '}
              <span className="bg-gradient-to-r from-rose-400 to-pink-500 bg-clip-text text-transparent">get paid on time</span>
            </h3>
            <p className="text-slate-300 max-w-xl mx-auto mb-6">
              InvoiceFlow handles your invoicing, GST calculations, and payment tracking — so you
              can focus on executing your financial year plan. Professional invoices, automated
              reminders, and real-time payment status.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/signup"
                className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold hover:opacity-90 transition-opacity"
              >
                Start Free — 5 Invoices/Month
              </Link>
              <Link
                href="/tools/profit-first-calculator"
                className="inline-block px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all"
              >
                Try Profit First Calculator
              </Link>
            </div>
          </section>
        
        <RelatedTools currentSlug="financial-year-planner" category="Financial Planning" />
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
