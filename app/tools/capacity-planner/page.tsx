import type { Metadata } from 'next';
import Link from 'next/link';
import CapacityPlanner from './CapacityPlanner';
import RelatedTools from '../components/RelatedTools';
import EmailCapture from '../components/EmailCapture';
import BreadcrumbSchema from '../components/BreadcrumbSchema';

const title =
  'Work Capacity Planner | Free Freelance Workload Calculator — InvoiceFlow';
const description =
  'Free work capacity planner for Australian freelancers. Calculate how many clients you can handle, your utilisation rate, revenue projections, burnout risk, and optimal client mix. No signup required.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'freelance capacity planning calculator',
    'how many clients can a freelancer handle',
    'freelance workload calculator',
    'freelance utilisation rate calculator australia',
    'freelancer capacity planner',
    'freelance client capacity calculator',
    'work capacity calculator freelancer',
    'freelance burnout risk calculator',
    'freelance revenue projection calculator',
    'freelance time allocation planner',
    'freelance workload management australia',
    'freelancer client mix calculator',
  ],
  openGraph: {
    title: 'Work Capacity Planner — Free Freelance Workload Calculator | InvoiceFlow',
    description:
      'Calculate how many clients you can realistically handle, project your revenue, assess burnout risk, and get recommendations for optimal workload. Free — no signup required.',
    url: 'https://www.invoiceflow.au/tools/capacity-planner',
    siteName: 'InvoiceFlow',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Work Capacity Planner — Free Freelance Workload Calculator | InvoiceFlow',
    description:
      'Calculate your freelance capacity, revenue projections, and burnout risk. Free tool for Australian freelancers.',
  },
  alternates: {
    canonical: 'https://www.invoiceflow.au/tools/capacity-planner',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Work Capacity Planner for Freelancers',
  description:
    'Calculate how many clients and projects an Australian freelancer can realistically handle. Includes billable hours breakdown, revenue projections, burnout risk assessment, capacity utilisation meter, time allocation planner, and optimal client mix recommendations. Free — no signup required.',
  url: 'https://www.invoiceflow.au/tools/capacity-planner',
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

export default function CapacityPlannerPage() {
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
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-indigo-400/10 border border-indigo-400/20 rounded-full mb-6">
              <div className="w-2 h-2 bg-indigo-400 rounded-full" />
              <span className="text-indigo-400 text-sm font-medium">100% Free</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white heading-font mb-4">
              Work Capacity{' '}
              <span className="bg-gradient-to-r from-indigo-400 to-violet-500 bg-clip-text text-transparent">Planner</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Calculate how many clients you can realistically handle as a freelancer. See your
              billable hours breakdown, revenue projections, burnout risk, and get recommendations
              for taking on more work or raising your rates.
            </p>
          </div>

          {/* Capacity Planner Tool */}
          <CapacityPlanner />

          {/* SEO Content Sections */}
          <section className="mt-16 space-y-12">
            {/* Section 1: Why Capacity Planning Matters */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Why Capacity Planning Matters for Freelancers
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Most freelancers either take on too much work and burn out, or leave money on the
                  table by not filling their available capacity. Capacity planning bridges this gap by
                  giving you a clear, data-driven picture of exactly how many clients and projects you
                  can handle without sacrificing quality or your health.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-indigo-400 text-sm font-bold">01</span>
                      Prevent Burnout Before It Happens
                    </h4>
                    <p className="text-sm">
                      The Australian freelance market is competitive, and the temptation to say yes to
                      every project is real. But consistently operating above 85% capacity is a recipe
                      for burnout. Capacity planning gives you an objective measure of your workload so
                      you can set boundaries based on data, not gut feeling. Research shows that
                      freelancers who track their utilisation rate are significantly less likely to
                      experience chronic fatigue and work-related stress.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-indigo-400 text-sm font-bold">02</span>
                      Maximise Revenue Without Overcommitting
                    </h4>
                    <p className="text-sm">
                      Knowing your true capacity means you can fill it strategically. Instead of
                      guessing whether you have room for another project, you can see exactly how many
                      billable hours you have available and what that translates to in revenue. This
                      lets you make informed decisions about whether to accept new work, raise your
                      rates, or hire a subcontractor. Freelancers who plan capacity report higher
                      average project values because they choose better-fit clients instead of taking
                      whatever comes through the door.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-indigo-400 text-sm font-bold">03</span>
                      Protect Non-Billable Time
                    </h4>
                    <p className="text-sm">
                      Admin, marketing, professional development, invoicing, and business strategy are
                      essential but non-billable. Most freelancers underestimate how much time these
                      activities take — typically 25-35% of the working week. Without accounting for
                      non-billable time in your capacity plan, you end up doing admin on evenings and
                      weekends, which erodes the work-life balance that drew you to freelancing in the
                      first place. This tool makes non-billable time visible and non-negotiable.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-indigo-400 text-sm font-bold">04</span>
                      Communicate Clearly With Clients
                    </h4>
                    <p className="text-sm">
                      When a client asks for a rush job or wants to expand scope, knowing your
                      capacity lets you respond with confidence. Instead of a vague &ldquo;I might be
                      able to fit that in,&rdquo; you can say, &ldquo;I have 8 billable hours
                      available next week — that&apos;s enough for X but not Y.&rdquo; This
                      professionalism builds trust and positions you as a reliable, organised partner.
                      Australian clients, especially corporate and government clients, respect
                      freelancers who manage their workload transparently.
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-indigo-400/10 to-violet-500/10 border border-indigo-400/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-indigo-400 font-medium mb-2">The Bottom Line</p>
                  <p className="text-sm">
                    Capacity planning is not about working less — it is about working smarter. When
                    you know your numbers, you can price correctly, deliver consistently, and grow
                    sustainably. Use this tool weekly to stay on top of your workload and make
                    proactive decisions about your freelance business.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2: Understanding Utilisation Rate */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Understanding Utilisation Rate for Freelancers
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Your utilisation rate is the percentage of your available working hours that you
                  spend on billable, revenue-generating work. It is the single most important metric
                  for understanding whether you are at, above, or below capacity — and it directly
                  determines your income.
                </p>
                <div className="bg-white/5 rounded-xl p-5 mt-4">
                  <h4 className="text-white font-semibold mb-3">How to Calculate Utilisation Rate</h4>
                  <div className="bg-white/5 rounded-lg p-4 font-mono text-sm text-center text-indigo-300 mb-4">
                    Utilisation Rate = (Billable Hours / Total Available Hours) x 100
                  </div>
                  <p className="text-sm">
                    For example, if you work 40 hours per week and spend 28 hours on billable client
                    work, your utilisation rate is 70%. The remaining 12 hours go to admin, marketing,
                    learning, and other non-billable activities. This is a healthy, sustainable rate
                    for most freelancers.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-5 mt-4">
                  <h4 className="text-white font-semibold mb-3">Utilisation Rate Benchmarks</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-emerald-400 flex-shrink-0" />
                      <div>
                        <span className="text-white font-medium text-sm">60-75% — Healthy</span>
                        <p className="text-xs text-slate-500 mt-0.5">
                          Sustainable long-term. Enough non-billable time for admin, marketing, and
                          professional development. Room to absorb deadline surges without working
                          overtime.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-amber-400 flex-shrink-0" />
                      <div>
                        <span className="text-white font-medium text-sm">76-85% — Stretched</span>
                        <p className="text-xs text-slate-500 mt-0.5">
                          Manageable for short periods but not sustainable year-round. Non-billable
                          tasks start getting squeezed. Admin and marketing slip. Scope for new
                          clients is limited.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-red-400 flex-shrink-0" />
                      <div>
                        <span className="text-white font-medium text-sm">86%+ — Burnout Risk</span>
                        <p className="text-xs text-slate-500 mt-0.5">
                          Unsustainable. Almost no time for marketing, learning, or business
                          development. Quality starts to suffer. Client relationships become
                          transactional. Recovery time is minimal. If sustained for more than a few
                          weeks, burnout is likely.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-blue-400 flex-shrink-0" />
                      <div>
                        <span className="text-white font-medium text-sm">Below 60% — Underutilised</span>
                        <p className="text-xs text-slate-500 mt-0.5">
                          You have capacity to take on more clients or projects. This may be
                          intentional (winding down, building systems) or a sign that you need to
                          invest more in marketing and lead generation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-indigo-400/10 to-violet-500/10 border border-indigo-400/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-indigo-400 font-medium mb-2">For Australian Freelancers</p>
                  <p className="text-sm">
                    Australian freelancers typically have 48 billable weeks per year (52 weeks minus
                    4 weeks leave). At 40 hours per week with a 70% utilisation rate, that is 1,344
                    billable hours per year. If your hourly rate is $150, that gives you $201,600 in
                    gross revenue. Understanding these numbers is the foundation of sustainable
                    freelancing.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3: How Many Clients Can a Freelancer Handle */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                How Many Clients Can a Freelancer Realistically Handle?
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  The answer depends on the nature of your work, the size of each engagement, and
                  how much context-switching you can tolerate. There is no universal number, but
                  there are frameworks to help you find yours.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-indigo-400 text-sm font-bold">01</span>
                      High-Touch Services (2-4 clients)
                    </h4>
                    <p className="text-sm">
                      If your work involves deep strategy, ongoing collaboration, or complex
                      deliverables — think brand strategy, custom software development, or
                      management consulting — each client demands significant weekly hours and
                      mental bandwidth. Two to four concurrent clients is typical. More than that
                      and quality suffers.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-indigo-400 text-sm font-bold">02</span>
                      Medium-Touch Services (4-8 clients)
                    </h4>
                    <p className="text-sm">
                      Graphic design, copywriting, web development, and marketing services typically
                      fall here. Each project requires focused blocks but not continuous daily
                      attention. With good project management, four to eight concurrent clients is
                      achievable without sacrificing quality.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-indigo-400 text-sm font-bold">03</span>
                      Low-Touch / Retainer Services (8-15 clients)
                    </h4>
                    <p className="text-sm">
                      Social media management, bookkeeping, virtual assistance, and maintenance
                      retainers are lower-touch. Each client might need only 2-5 hours per week.
                      With systemised processes and good templates, handling 8 to 15 retainer clients
                      is realistic.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-indigo-400 text-sm font-bold">04</span>
                      The Context-Switching Tax
                    </h4>
                    <p className="text-sm">
                      Every additional client adds context-switching overhead — re-reading briefs,
                      adjusting to different brand voices, switching between tools. Research suggests
                      each context switch costs 15-25 minutes of productive time. With 10 clients,
                      that is 2.5-4 hours per day lost to switching alone. Factor this into your
                      capacity calculations.
                    </p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-5 mt-4">
                  <h4 className="text-white font-semibold mb-3">Quick Formula</h4>
                  <div className="bg-white/5 rounded-lg p-4 font-mono text-sm text-center text-indigo-300 mb-4">
                    Max Clients = Billable Hours Per Week / Average Hours Per Client Per Week
                  </div>
                  <p className="text-sm">
                    If you have 28 billable hours per week and each client needs 7 hours, you can
                    handle 4 concurrent clients. But always subtract 1 for breathing room — so
                    target 3 in this scenario. The capacity planner above calculates this for you
                    automatically, including the context-switching overhead.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4: Optimising Your Freelance Workload */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Optimising Your Freelance Workload: Practical Strategies
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Once you understand your capacity, the next step is optimising how you fill it.
                  The goal is not 100% utilisation — it is maximising revenue per hour while
                  maintaining quality, health, and growth potential. Here are strategies Australian
                  freelancers use to optimise their workload:
                </p>
                <div className="space-y-3 mt-4">
                  <div className="bg-white/5 rounded-xl p-4 flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-indigo-400/20 border border-indigo-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-indigo-400 text-xs font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">Raise Rates Before Adding Clients</h4>
                      <p className="text-xs text-slate-400 mt-1">
                        If you are consistently above 80% capacity, you have pricing power. A 20%
                        rate increase with the same hours generates 20% more revenue without adding
                        any workload. Australian freelancers who raise rates annually grow their
                        income faster than those who chase volume.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-indigo-400/20 border border-indigo-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-indigo-400 text-xs font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">Batch Similar Work Together</h4>
                      <p className="text-xs text-slate-400 mt-1">
                        Reduce context-switching by batching similar tasks. Do all writing on Monday,
                        all design on Tuesday, all client calls on Wednesday. This can recover 4-8
                        hours per week that would otherwise be lost to switching between different
                        types of work.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-indigo-400/20 border border-indigo-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-indigo-400 text-xs font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">Move to Retainer and Package Pricing</h4>
                      <p className="text-xs text-slate-400 mt-1">
                        One-off projects create feast-and-famine cycles. Retainers provide predictable
                        monthly revenue and reduce the time spent on proposals and sales. Package
                        pricing lets you standardise delivery and reduce scope creep. Both models
                        improve capacity utilisation.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-indigo-400/20 border border-indigo-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-indigo-400 text-xs font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">Automate Non-Billable Work</h4>
                      <p className="text-xs text-slate-400 mt-1">
                        Invoicing, scheduling, proposal templates, client onboarding checklists,
                        and time tracking can all be systemised. Reducing non-billable time from 30%
                        to 20% of your week frees up 4 additional billable hours. At $150/hour, that
                        is $600 per week or $28,800 per year in recovered revenue.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-indigo-400/20 border border-indigo-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-indigo-400 text-xs font-bold">5</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">Build a Waitlist and Pipeline</h4>
                      <p className="text-xs text-slate-400 mt-1">
                        When you are at capacity, do not turn clients away — add them to a waitlist.
                        This creates demand signals, lets you select the best-fit projects, and
                        ensures you have work lined up when current projects end. A 2-4 week pipeline
                        is ideal for most freelancers.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-indigo-400/20 border border-indigo-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-indigo-400 text-xs font-bold">6</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">Subcontract Overflow Work</h4>
                      <p className="text-xs text-slate-400 mt-1">
                        When demand exceeds your capacity, subcontracting lets you maintain client
                        relationships and earn a margin on delegated work. This is the first step
                        towards building an agency model. Make sure subcontractors sign agreements
                        covering scope, quality, and confidentiality.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-indigo-400/10 to-violet-500/10 border border-indigo-400/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-indigo-400 font-medium mb-2">Weekly Habit</p>
                  <p className="text-sm">
                    Review your capacity every Friday. Update this calculator with your current
                    workload, check your utilisation rate, and decide whether to accept new enquiries
                    for the coming week. A 10-minute weekly review prevents the slow creep towards
                    overcommitment that catches many freelancers off guard.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-16 text-center glass rounded-2xl p-10">
            <h3 className="text-3xl font-bold text-white heading-font mb-4">
              Plan your capacity and{' '}
              <span className="bg-gradient-to-r from-indigo-400 to-violet-500 bg-clip-text text-transparent">get paid on time</span>
            </h3>
            <p className="text-slate-300 max-w-xl mx-auto mb-6">
              InvoiceFlow handles your invoicing, GST calculations, and payment tracking — so you
              can focus on the billable work that matters. Professional invoices, on time, every
              time.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/signup"
                className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold hover:opacity-90 transition-opacity"
              >
                Start Free — 5 Invoices/Month
              </Link>
              <Link
                href="/tools/billable-hours-calculator"
                className="inline-block px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all"
              >
                Try Billable Hours Calculator
              </Link>
            </div>
          </section>
        
        <RelatedTools currentSlug="capacity-planner" category="Business Analytics" />
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
