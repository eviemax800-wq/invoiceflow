import type { Metadata } from 'next';
import Link from 'next/link';
import ProjectTimelineCalculator from './ProjectTimelineCalculator';
import RelatedTools from '../components/RelatedTools';
import EmailCapture from '../components/EmailCapture';
import BreadcrumbSchema from '../components/BreadcrumbSchema';

const title =
  'Project Timeline Calculator | Free Freelance Project Duration Estimator — InvoiceFlow';
const description =
  'Free project timeline calculator for freelancers. Estimate realistic delivery dates using three-point PERT estimation, task breakdowns, buffer time, and client response delays. Get optimistic, expected, and pessimistic timelines with a visual Gantt chart. No signup required.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'freelance project timeline calculator',
    'project deadline estimator',
    'how long will my project take freelancer',
    'project duration calculator',
    'freelance project scheduling tool',
    'project timeline template freelancer',
    'estimate project delivery date',
    'freelance project planning calculator',
    'PERT estimation calculator freelance',
    'project gantt chart freelancer',
    'freelance project buffer calculator',
    'three point estimation tool',
  ],
  openGraph: {
    title: 'Project Timeline Calculator — Free Delivery Date Estimator for Freelancers | InvoiceFlow',
    description:
      'Estimate realistic freelance project timelines using PERT three-point estimation. Break down tasks, add buffer time, account for client delays, and get optimistic, expected, and pessimistic delivery dates with a visual Gantt chart. Free — no signup required.',
    url: 'https://www.invoiceflow.au/tools/project-timeline-calculator',
    siteName: 'InvoiceFlow',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Project Timeline Calculator — Free Delivery Date Estimator for Freelancers | InvoiceFlow',
    description:
      'Estimate realistic project delivery dates with PERT estimation, task breakdowns, and visual Gantt charts. Free tool for freelancers.',
  },
  alternates: {
    canonical: 'https://www.invoiceflow.au/tools/project-timeline-calculator',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Project Timeline Calculator for Freelancers',
  description:
    'Multi-step calculator that helps freelancers estimate realistic project timelines using PERT three-point estimation. Break projects into phases, add buffer time, account for client response delays and holidays, and get optimistic, expected, and pessimistic delivery dates with a visual Gantt chart. Free — no signup required.',
  url: 'https://www.invoiceflow.au/tools/project-timeline-calculator',
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

export default function ProjectTimelineCalculatorPage() {
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
              Project Timeline{' '}
              <span className="bg-gradient-to-r from-indigo-400 to-cyan-500 bg-clip-text text-transparent">Calculator</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Estimate realistic project delivery dates using PERT three-point estimation.
              Break your project into phases, add buffer time, account for client delays,
              and get a visual timeline you can share with your client.
            </p>
          </div>

          {/* Calculator Tool */}
          <ProjectTimelineCalculator />

          {/* SEO Content Sections */}
          <section className="mt-16 space-y-12">
            {/* Section 1: How to Estimate Freelance Project Timelines */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                How to Estimate Freelance Project Timelines
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Accurate project estimation is one of the hardest skills for freelancers to develop,
                  and one of the most important. Underestimate and you eat into your profit margin,
                  work unpaid overtime, and miss deadlines. Overestimate and you lose bids, appear
                  inexperienced, or scare clients away with inflated timelines. The sweet spot is a
                  realistic estimate that accounts for the work itself, the inevitable unknowns, and
                  the external factors you cannot control.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-indigo-400 text-sm font-bold">01</span>
                      The PERT Estimation Method
                    </h4>
                    <p className="text-sm">
                      The Program Evaluation and Review Technique (PERT) uses three estimates for
                      each task: optimistic (everything goes perfectly), realistic (normal conditions),
                      and pessimistic (everything that can go wrong does). The formula weights the
                      realistic estimate most heavily: Expected = (Optimistic + 4 x Realistic +
                      Pessimistic) / 6. This produces a statistically grounded estimate that accounts
                      for uncertainty without being overly conservative.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-indigo-400 text-sm font-bold">02</span>
                      Break Down Before You Estimate
                    </h4>
                    <p className="text-sm">
                      Never estimate a project as a single block. A &ldquo;website redesign&rdquo;
                      is not a task — it is a collection of tasks: discovery, wireframing, design,
                      development, content migration, testing, and launch. Each of these has different
                      complexity, different dependencies, and different risk profiles. Break the project
                      into phases of no more than 40 hours each, then estimate each phase individually.
                      The sum of well-estimated parts is always more accurate than a single guess at the
                      whole.
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-indigo-400/10 to-cyan-500/10 border border-indigo-400/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-indigo-400 font-medium mb-2">The Estimation Paradox</p>
                  <p className="text-sm">
                    Studies show that developers consistently underestimate tasks by 25-50%, a phenomenon
                    known as the &ldquo;planning fallacy.&rdquo; We tend to imagine the best-case
                    scenario when estimating and forget about context switching, meetings, debugging,
                    client feedback loops, and the cognitive overhead of managing multiple projects
                    simultaneously. This calculator uses PERT estimation and configurable buffer
                    percentages to counteract this bias and produce timelines that hold up in the real world.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2: Common Causes of Project Delays */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Common Causes of Project Delays
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Understanding why projects run late is the first step to preventing it. Most delays
                  are not caused by bad estimating — they are caused by factors that were never
                  included in the estimate in the first place. Here are the most common culprits.
                </p>
                <div className="space-y-3 mt-4">
                  <div className="bg-white/5 rounded-xl p-4 flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-indigo-400/20 border border-indigo-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-indigo-400 text-xs font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">Client Feedback Delays</h4>
                      <p className="text-xs text-slate-400 mt-1">
                        The number one cause of freelance project delays is not you — it is waiting
                        on client feedback. A client who takes a week to review each deliverable can
                        easily double a project timeline. This calculator lets you factor in client
                        response time so the dates you share already account for this reality.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-indigo-400/20 border border-indigo-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-indigo-400 text-xs font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">Scope Creep</h4>
                      <p className="text-xs text-slate-400 mt-1">
                        &ldquo;Can you also add...&rdquo; is the phrase that kills timelines. Every
                        addition that is not in the original scope pushes the deadline further out.
                        The best defence is a detailed scope document that both parties sign, with a
                        change order process for anything new. This calculator helps you build that
                        detailed task breakdown before the project starts.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-indigo-400/20 border border-indigo-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-indigo-400 text-xs font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">Revision Rounds</h4>
                      <p className="text-xs text-slate-400 mt-1">
                        Each round of revisions adds time — not just for the changes themselves, but
                        for the feedback loop: sending the deliverable, waiting for review, receiving
                        notes, interpreting feedback, making changes, and sending again. Two revision
                        rounds can easily add a week per phase to the project timeline.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-indigo-400/20 border border-indigo-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-indigo-400 text-xs font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">Context Switching</h4>
                      <p className="text-xs text-slate-400 mt-1">
                        Research shows it takes 23 minutes to regain focus after switching between
                        tasks. If you are juggling three or four projects, you lose significant
                        productive time to context switching alone. This calculator factors in how
                        many other active projects you have and adjusts available hours accordingly.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-3 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold text-sm mb-2 flex items-center gap-2">
                      <span className="text-indigo-400 text-lg">5.</span> Technical Unknowns
                    </h4>
                    <p className="text-xs text-slate-400">
                      Third-party API integrations, unfamiliar frameworks, or legacy code can
                      introduce unexpected complexity. If you are working with unfamiliar technology,
                      use the &ldquo;Complex&rdquo; or &ldquo;Highly Complex&rdquo; multiplier in
                      your estimate.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold text-sm mb-2 flex items-center gap-2">
                      <span className="text-indigo-400 text-lg">6.</span> Holidays and Downtime
                    </h4>
                    <p className="text-xs text-slate-400">
                      Public holidays, personal time off, and sick days are real and inevitable.
                      A project spanning December-January in Australia loses at least a week to
                      holidays. Always account for unavailable days in your timeline.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3: Building Buffer Time Into Your Estimates */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Building Buffer Time Into Your Estimates
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Buffer time is not padding — it is insurance against the unpredictable nature of
                  creative and technical work. The question is not whether something unexpected will
                  happen, but when. A well-structured buffer protects both your deadline and your
                  client relationship.
                </p>
                <div className="space-y-3 mt-4">
                  <div className="bg-white/5 rounded-xl p-4 flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-cyan-400/20 border border-cyan-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-cyan-400 text-xs font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">The 20% Rule</h4>
                      <p className="text-xs text-slate-400 mt-1">
                        As a starting point, add 20% buffer to your total estimated hours. This
                        accounts for minor scope adjustments, communication overhead, and the small
                        inefficiencies that accumulate over a project. For straightforward projects
                        with repeat clients, 10-15% may be sufficient. For new clients or unfamiliar
                        work, 25-30% is safer.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-cyan-400/20 border border-cyan-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-cyan-400 text-xs font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">Buffer at the Phase Level</h4>
                      <p className="text-xs text-slate-400 mt-1">
                        Rather than adding all your buffer at the end of the project, distribute it
                        across phases. This prevents a situation where you use all your buffer on early
                        phases and have none left for the critical final stages of testing and launch.
                        This calculator applies buffer proportionally across all tasks.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-cyan-400/20 border border-cyan-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-cyan-400 text-xs font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">Communicate Buffer Honestly</h4>
                      <p className="text-xs text-slate-400 mt-1">
                        You do not need to hide your buffer from clients. Frame it as &ldquo;contingency
                        time for revisions, feedback loops, and unexpected complexity.&rdquo; Professional
                        clients understand that projects have unknowns, and they prefer an honest
                        estimate that holds up over an optimistic one that falls apart.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-indigo-400/10 to-cyan-500/10 border border-indigo-400/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-indigo-400 font-medium mb-2">Under-Promise, Over-Deliver</p>
                  <p className="text-sm">
                    The best freelancers build their reputation on reliability, not speed. A client who
                    receives their project a few days early is delighted. A client who receives it a
                    few days late is disappointed — even if the total time was the same. By building
                    appropriate buffer into your estimates, you create the opportunity to consistently
                    deliver early, which builds trust and earns referrals.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4: Using Timelines to Set Client Expectations */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Using Timelines to Set Client Expectations
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  A detailed timeline is not just a project management tool — it is a communication
                  tool. Sharing a professional timeline with your client sets expectations, establishes
                  accountability on both sides, and prevents the most common source of client
                  frustration: uncertainty about when things will be done.
                </p>
                <div className="grid sm:grid-cols-2 gap-3 mt-4">
                  <div className="bg-indigo-400/5 border border-indigo-400/15 rounded-xl p-4">
                    <h4 className="text-indigo-400 font-semibold text-sm mb-1">Share the Full Timeline</h4>
                    <p className="text-xs text-slate-400">
                      Share the phase breakdown, not just the final date. When clients can see that
                      Week 3 is &ldquo;Design&rdquo; and Week 5 is &ldquo;Development,&rdquo; they
                      understand the process and feel informed rather than anxious.
                    </p>
                  </div>
                  <div className="bg-indigo-400/5 border border-indigo-400/15 rounded-xl p-4">
                    <h4 className="text-indigo-400 font-semibold text-sm mb-1">Highlight Client Dependencies</h4>
                    <p className="text-xs text-slate-400">
                      Make it clear which phases require client input and what the expected response
                      time is. If the client takes two weeks to review instead of two days, the
                      timeline shifts — and the client understands why.
                    </p>
                  </div>
                  <div className="bg-indigo-400/5 border border-indigo-400/15 rounded-xl p-4">
                    <h4 className="text-indigo-400 font-semibold text-sm mb-1">Use a Range, Not a Date</h4>
                    <p className="text-xs text-slate-400">
                      Instead of &ldquo;Delivery: March 15,&rdquo; say &ldquo;Expected delivery:
                      March 12-19.&rdquo; A date range is more honest, more professional, and gives
                      you breathing room without feeling like a missed deadline.
                    </p>
                  </div>
                  <div className="bg-indigo-400/5 border border-indigo-400/15 rounded-xl p-4">
                    <h4 className="text-indigo-400 font-semibold text-sm mb-1">Update the Timeline Proactively</h4>
                    <p className="text-xs text-slate-400">
                      If the timeline shifts — for any reason — update the client immediately with the
                      new expected dates and the reason for the change. Proactive communication builds
                      trust; silence breeds anxiety and frustration.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 5: How InvoiceFlow Helps Track Project Progress */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                How InvoiceFlow Helps Track Project Progress
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Planning the timeline is step one. Tracking progress and billing for your time
                  is the next challenge. InvoiceFlow connects your project planning to your invoicing
                  so you never lose track of hours, miss a milestone payment, or forget to bill for
                  scope changes.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-indigo-400 text-sm font-bold">01</span>
                      Milestone-Based Invoicing
                    </h4>
                    <p className="text-sm">
                      Set up milestone invoices that match your project phases. When you complete the
                      Design phase, send the corresponding invoice with one click. Your client sees
                      exactly what they are paying for and when.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-indigo-400 text-sm font-bold">02</span>
                      Time Tracking Integration
                    </h4>
                    <p className="text-sm">
                      Track time against project phases to compare estimated hours versus actual hours.
                      This data improves your future estimates and gives you evidence for scope change
                      conversations.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-indigo-400 text-sm font-bold">03</span>
                      Automated Payment Reminders
                    </h4>
                    <p className="text-sm">
                      Never chase invoices manually. InvoiceFlow sends professional payment reminders
                      automatically, so you stay focused on the project while your cash flow stays
                      on track.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-indigo-400 text-sm font-bold">04</span>
                      Client Portal
                    </h4>
                    <p className="text-sm">
                      Give clients a professional portal where they can view project status, approve
                      deliverables, and pay invoices. It replaces scattered emails with a single
                      source of truth for the entire engagement.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-16 text-center glass rounded-2xl p-10">
            <h3 className="text-3xl font-bold text-white heading-font mb-4">
              Plan your timeline, then{' '}
              <span className="bg-gradient-to-r from-indigo-400 to-cyan-500 bg-clip-text text-transparent">get paid on schedule</span>
            </h3>
            <p className="text-slate-300 max-w-xl mx-auto mb-6">
              InvoiceFlow connects your project timeline to milestone invoicing, time tracking,
              and automated payment reminders. Plan the project, bill each phase, and get paid
              on time — every time.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/signup"
                className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold hover:opacity-90 transition-opacity"
              >
                Start Free — 5 Invoices/Month
              </Link>
              <Link
                href="/tools/scope-change-calculator"
                className="inline-block px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all"
              >
                Try Scope Change Calculator
              </Link>
            </div>
          </section>
        
        <RelatedTools currentSlug="project-timeline-calculator" category="Business Analytics" />
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
