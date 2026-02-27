import type { Metadata } from 'next';
import Link from 'next/link';
import ClientRedFlagChecker from './ClientRedFlagChecker';
import RelatedTools from '../components/RelatedTools';

const title =
  'Client Red Flag Checker | Free Client Risk Assessment Quiz for Freelancers — InvoiceFlow';
const description =
  'Free interactive quiz to assess potential client risk before signing a contract. Evaluate communication patterns, payment signals, and business legitimacy to get a risk score with actionable advice. No signup required.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'client red flags freelancer',
    'how to vet clients freelancer',
    'bad client warning signs freelancer',
    'freelance client risk assessment',
    'should I take this client quiz',
    'freelance client screening checklist',
    'client red flags before signing contract',
    'freelance client vetting tool',
    'problem client warning signs',
    'freelance client risk score calculator',
    'bad client quiz freelancer',
    'freelance client screening tool free',
  ],
  openGraph: {
    title: 'Client Red Flag Checker — Free Client Risk Assessment for Freelancers | InvoiceFlow',
    description:
      'Interactive quiz to assess potential client risk before signing a contract. Evaluate communication, payment signals, and business legitimacy for a risk score with recommendations. Free — no signup required.',
    url: 'https://www.invoiceflow.au/tools/client-red-flag-checker',
    siteName: 'InvoiceFlow',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Client Red Flag Checker — Free Client Risk Assessment for Freelancers | InvoiceFlow',
    description:
      'Interactive quiz to vet potential clients before signing a contract. Get a risk score and actionable advice. Free tool for freelancers.',
  },
  alternates: {
    canonical: 'https://www.invoiceflow.au/tools/client-red-flag-checker',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Client Red Flag Checker for Freelancers',
  description:
    'Interactive quiz-style tool that helps freelancers assess potential client risk before signing a contract. Input client behaviours and communication patterns, get a risk score with actionable advice including contract clauses, payment structures, and communication protocols. Free — no signup required.',
  url: 'https://www.invoiceflow.au/tools/client-red-flag-checker',
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

export default function ClientRedFlagCheckerPage() {
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
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-400/10 border border-amber-400/20 rounded-full mb-6">
              <div className="w-2 h-2 bg-amber-400 rounded-full" />
              <span className="text-amber-400 text-sm font-medium">100% Free</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white heading-font mb-4">
              Client Red Flag{' '}
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Checker</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Should you take this client? Answer 10 quick questions about their communication
              and payment signals to get a risk score with specific recommendations on contract
              clauses, payment structures, and whether to proceed.
            </p>
          </div>

          {/* Checker Tool */}
          <ClientRedFlagChecker />

          {/* SEO Content Sections */}
          <section className="mt-16 space-y-12">
            {/* Section 1: Why Vet Clients */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Why Every Freelancer Should Vet Clients Before Signing
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  The excitement of landing a new project can blind even experienced freelancers to
                  warning signs that are obvious in hindsight. A bad client does not just waste your
                  time on one project — they drain energy, create stress, delay payments, inflate
                  scope, and occupy the mental space you need for good clients. The real cost of a
                  problem client is the opportunity cost of the better client you could not take on
                  because you were buried in revisions, chasing payments, or managing unreasonable
                  expectations.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-amber-400 text-sm font-bold">01</span>
                      The 80/20 Rule of Client Problems
                    </h4>
                    <p className="text-sm">
                      Research consistently shows that roughly 20% of clients cause 80% of
                      freelancer stress. These problem clients request the most revisions, pay the
                      slowest, respect boundaries the least, and leave the worst reviews. The
                      goal is not to avoid every possible risk — it is to identify the clients who
                      are most likely to fall into that 20% before you commit your time and
                      reputation. A 15-minute vetting process can save you weeks of frustration
                      and thousands of dollars in unpaid work.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-amber-400 text-sm font-bold">02</span>
                      Red Flags Are Patterns, Not Judgements
                    </h4>
                    <p className="text-sm">
                      Vetting clients is not about being judgemental or elitist — it is about
                      recognising behavioural patterns that predict project outcomes. A client who
                      is vague about scope in the sales process will be vague about scope during
                      the project. A client who pushes back on your standard payment terms will
                      be difficult about paying invoices. A client who has churned through multiple
                      freelancers is likely to churn through you too. These patterns are reliable
                      predictors, and this tool helps you assess them systematically rather than
                      relying on gut feeling alone.
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-amber-400/10 to-orange-500/10 border border-amber-400/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-amber-400 font-medium mb-2">The Cost of a Bad Client</p>
                  <p className="text-sm">
                    A study by AND CO (now part of Fiverr) found that 71% of freelancers have
                    struggled to collect payment at some point in their career, and the average
                    freelancer spends over 20 hours per year chasing overdue invoices. At even a
                    modest hourly rate of $100, that is $2,000 per year in lost productivity — not
                    counting the actual unpaid invoices. Screening clients upfront is not paranoia,
                    it is a business practice that directly protects your revenue and mental health.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2: The 12 Most Common Red Flags */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                12 Client Red Flags Every Freelancer Should Know
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  These are the most common warning signs that a potential client may be difficult
                  to work with. Any single red flag can be explained away, but when multiple flags
                  appear together, the risk compounds significantly.
                </p>
                <div className="space-y-3 mt-4">
                  <div className="bg-white/5 rounded-xl p-4 flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-400/20 border border-red-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-red-400 text-xs font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">Vague or Non-Existent Brief</h4>
                      <p className="text-xs text-slate-400 mt-1">
                        &ldquo;Just make it look good&rdquo; or &ldquo;I will know it when I see
                        it&rdquo; are phrases that predict unlimited revisions. Clients who cannot
                        articulate what they want will never be satisfied with what you deliver,
                        because their internal vision shifts with every revision. Always insist on
                        a written brief before starting — if they refuse, that is your answer.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-400/20 border border-red-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-red-400 text-xs font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">Resistance to Contracts or Deposits</h4>
                      <p className="text-xs text-slate-400 mt-1">
                        A legitimate client who values your work will have no problem signing a
                        contract and paying a deposit. Pushback on either of these is one of the
                        strongest predictors of payment problems. The contract protects both parties
                        — if they see it as a threat rather than a safeguard, they may be planning
                        to dispute your invoice or walk away without paying.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-400/20 border border-red-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-red-400 text-xs font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">Constant Urgency Without Planning</h4>
                      <p className="text-xs text-slate-400 mt-1">
                        Everything is &ldquo;urgent&rdquo; and &ldquo;ASAP&rdquo; but there is
                        no planning, no timeline, and no clear priority. These clients create
                        artificial urgency to pressure you into dropping your process, skipping
                        steps, and working unpaid overtime. Real urgency comes with a willingness
                        to pay rush rates — fake urgency comes with pressure to absorb the cost.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-400/20 border border-red-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-red-400 text-xs font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">Badmouthing Previous Freelancers</h4>
                      <p className="text-xs text-slate-400 mt-1">
                        &ldquo;Our last designer was terrible&rdquo; or &ldquo;We have been through
                        three developers and none of them got it right.&rdquo; When every previous
                        freelancer was the problem, the common denominator is the client. This
                        pattern suggests unrealistic expectations, poor communication, or a
                        management style that sets freelancers up to fail.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-amber-400/20 border border-amber-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-amber-400 text-xs font-bold">5</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">Scope Creep Before the Project Starts</h4>
                      <p className="text-xs text-slate-400 mt-1">
                        If the scope is already expanding during the proposal stage — &ldquo;Oh,
                        can you also do X, Y, and Z?&rdquo; — it will be far worse during the
                        project. Clients who add requirements before signing a contract will
                        continue adding them after. This is manageable with strong boundaries and
                        change order processes, but only if the client is willing to respect them.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-amber-400/20 border border-amber-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-amber-400 text-xs font-bold">6</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">Committee Decision Making</h4>
                      <p className="text-xs text-slate-400 mt-1">
                        When four or more people need to approve your work, revision rounds
                        multiply. Each stakeholder has different preferences, and consensus often
                        means diluting your best work into something nobody loves. Ask who the
                        final decision maker is — if there is no single point of authority, factor
                        in extra time and revisions, or charge accordingly.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-3 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold text-sm mb-2 flex items-center gap-2">
                      <span className="text-red-400 text-lg">7.</span> Price-Only Focus
                    </h4>
                    <p className="text-xs text-slate-400">
                      If the only question is &ldquo;how much?&rdquo; without interest in your
                      process, portfolio, or expertise, you are being treated as a commodity. These
                      clients will always find someone cheaper and will squeeze your margins.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold text-sm mb-2 flex items-center gap-2">
                      <span className="text-red-400 text-lg">8.</span> Slow Response Times
                    </h4>
                    <p className="text-xs text-slate-400">
                      If they take a week to respond during the sales process when they are
                      motivated, expect longer delays during the project. Slow feedback loops
                      kill timelines and cash flow.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold text-sm mb-2 flex items-center gap-2">
                      <span className="text-amber-400 text-lg">9.</span> &ldquo;Pay When Done&rdquo;
                    </h4>
                    <p className="text-xs text-slate-400">
                      Refusing to pay deposits or milestones and insisting on payment only upon
                      completion puts all financial risk on you. Professional clients understand
                      that freelancers need cash flow during the project, not after.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold text-sm mb-2 flex items-center gap-2">
                      <span className="text-amber-400 text-lg">10.</span> No Online Presence
                    </h4>
                    <p className="text-xs text-slate-400">
                      A business with no website, no LinkedIn, and no online reviews is harder to
                      verify. This does not automatically mean bad news, but it removes a layer
                      of accountability and makes it harder to assess legitimacy.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold text-sm mb-2 flex items-center gap-2">
                      <span className="text-amber-400 text-lg">11.</span> Disrespectful Communication
                    </h4>
                    <p className="text-xs text-slate-400">
                      Rudeness, condescension, or micromanagement during the pitch phase only gets
                      worse during the project. If they do not respect your time and expertise
                      before you start, they will not respect it after.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold text-sm mb-2 flex items-center gap-2">
                      <span className="text-red-400 text-lg">12.</span> The &ldquo;Exposure&rdquo; Offer
                    </h4>
                    <p className="text-xs text-slate-400">
                      &ldquo;We cannot pay much but it will be great exposure.&rdquo; Professional
                      clients pay professional rates. Exposure does not pay rent, and the clients
                      who offer it rarely have the audience they claim.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3: How to Protect Yourself */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                How to Protect Yourself When Taking On Risky Clients
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Sometimes you need the work, or the project is too interesting to pass up despite
                  some warning signs. In these situations, the answer is not always to decline — it
                  is to adjust your risk mitigation to match the risk level. Here are the specific
                  measures you can take, escalating with the risk score.
                </p>
                <div className="space-y-3 mt-4">
                  <div className="bg-white/5 rounded-xl p-4 flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-400/20 border border-green-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-400 text-xs font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">Low Risk: Standard Contract + Terms</h4>
                      <p className="text-xs text-slate-400 mt-1">
                        For low-risk clients, your standard freelance contract with Net 14 payment
                        terms, a defined scope, and 2-3 included revision rounds is sufficient.
                        Collect a 25-30% deposit before starting work. This is your baseline — every
                        client should get at least this level of protection.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-yellow-400/20 border border-yellow-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-yellow-400 text-xs font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">Moderate Risk: Tighter Scope + Milestones</h4>
                      <p className="text-xs text-slate-400 mt-1">
                        For moderate-risk clients, tighten the scope definition in your contract
                        to eliminate ambiguity. Use milestone payments instead of a single final
                        invoice — 40% deposit, 30% at midpoint, 30% on completion. Limit revisions
                        to 2 rounds with additional revisions billed hourly. Include a kill fee
                        clause (50% of remaining contract value if they cancel mid-project).
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-orange-400/20 border border-orange-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-orange-400 text-xs font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">High Risk: 50%+ Upfront + Weekly Billing</h4>
                      <p className="text-xs text-slate-400 mt-1">
                        For high-risk clients, require at least 50% upfront before any work begins.
                        Bill weekly rather than on milestones so your exposure is never more than
                        one week of work. Add a late payment interest clause (2% per month) and a
                        work-stoppage clause — work pauses immediately if any invoice is overdue.
                        Reduce the initial scope to a small paid discovery phase before committing
                        to the full project.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-400/20 border border-red-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-red-400 text-xs font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">Critical Risk: Seriously Consider Declining</h4>
                      <p className="text-xs text-slate-400 mt-1">
                        If the risk score is critical, the safest option is to decline politely. If
                        you must proceed (financial necessity, strategic reasons), require 100%
                        payment upfront for small projects or 75% upfront for larger ones. Keep the
                        initial engagement tiny — a single deliverable, paid in full before you
                        start. If they perform well on the small engagement, you can gradually
                        increase scope. Never invest more than you can afford to lose.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-amber-400/10 to-orange-500/10 border border-amber-400/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-amber-400 font-medium mb-2">The Discovery Phase Strategy</p>
                  <p className="text-sm">
                    One of the most effective risk mitigation strategies is to start every new client
                    relationship with a small, paid discovery phase — typically 5-10% of the total
                    project value. This could be a strategy document, wireframes, a brand audit, or
                    a technical assessment. The discovery phase tests the client relationship before
                    you commit to the full engagement. If communication is poor, feedback is vague,
                    or payment is late on this small invoice, you know exactly what the full project
                    will be like — and you can walk away having lost very little.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4: Green Flags */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Green Flags: Signs of a Great Client
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  It is just as important to recognise great clients as it is to spot bad ones.
                  These green flags indicate a client who will respect your work, pay on time, and
                  make the project enjoyable. When you find a client with most of these traits,
                  invest in the relationship — great clients are worth more than any marketing
                  channel.
                </p>
                <div className="grid sm:grid-cols-2 gap-3 mt-4">
                  <div className="bg-green-400/5 border border-green-400/15 rounded-xl p-4">
                    <h4 className="text-green-400 font-semibold text-sm mb-1">Clear Written Brief</h4>
                    <p className="text-xs text-slate-400">
                      They have thought about what they need and can articulate it. They share
                      examples, brand guidelines, and specific goals.
                    </p>
                  </div>
                  <div className="bg-green-400/5 border border-green-400/15 rounded-xl p-4">
                    <h4 className="text-green-400 font-semibold text-sm mb-1">Respects Your Process</h4>
                    <p className="text-xs text-slate-400">
                      They ask about your workflow, follow your onboarding process, and trust your
                      expertise to guide the project.
                    </p>
                  </div>
                  <div className="bg-green-400/5 border border-green-400/15 rounded-xl p-4">
                    <h4 className="text-green-400 font-semibold text-sm mb-1">Fast, Responsive Communication</h4>
                    <p className="text-xs text-slate-400">
                      They respond within 24 hours, provide feedback when requested, and keep the
                      project moving forward.
                    </p>
                  </div>
                  <div className="bg-green-400/5 border border-green-400/15 rounded-xl p-4">
                    <h4 className="text-green-400 font-semibold text-sm mb-1">Happy to Sign and Pay</h4>
                    <p className="text-xs text-slate-400">
                      They welcome contracts, pay deposits without pushback, and settle invoices
                      promptly. Money conversations are straightforward.
                    </p>
                  </div>
                  <div className="bg-green-400/5 border border-green-400/15 rounded-xl p-4">
                    <h4 className="text-green-400 font-semibold text-sm mb-1">Single Decision Maker</h4>
                    <p className="text-xs text-slate-400">
                      One person has final authority on approvals. Feedback is consolidated and
                      consistent, not contradictory.
                    </p>
                  </div>
                  <div className="bg-green-400/5 border border-green-400/15 rounded-xl p-4">
                    <h4 className="text-green-400 font-semibold text-sm mb-1">Positive About Past Freelancers</h4>
                    <p className="text-xs text-slate-400">
                      They speak well of previous collaborators and can explain why they are
                      looking for someone new without blaming everyone else.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-16 text-center glass rounded-2xl p-10">
            <h3 className="text-3xl font-bold text-white heading-font mb-4">
              Vet your clients, then{' '}
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">get paid on time</span>
            </h3>
            <p className="text-slate-300 max-w-xl mx-auto mb-6">
              InvoiceFlow handles your invoicing, contracts, and payment tracking — so you
              can focus on working with great clients. Professional invoices, automated reminders,
              and real-time payment status.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/signup"
                className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold hover:opacity-90 transition-opacity"
              >
                Start Free — 5 Invoices/Month
              </Link>
              <Link
                href="/tools/contract-generator"
                className="inline-block px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all"
              >
                Try Contract Generator
              </Link>
            </div>
          </section>
        
        <RelatedTools currentSlug="client-red-flag-checker" category="Business Analytics" />
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
