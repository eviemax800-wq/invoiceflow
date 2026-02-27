import type { Metadata } from 'next';
import Link from 'next/link';
import ClientOnboardingChecklist from './ClientOnboardingChecklist';
import RelatedTools from '../components/RelatedTools';
import EmailCapture from '../components/EmailCapture';
import BreadcrumbSchema from '../components/BreadcrumbSchema';

const title =
  'Client Onboarding Checklist Generator | Free Freelance Project Setup Template — InvoiceFlow';
const description =
  'Free client onboarding checklist generator for freelancers. Create a personalised project kickoff checklist covering communication, payments, deliverables, and legal setup. No signup required.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'client onboarding checklist freelancer',
    'new client checklist template freelancer',
    'freelance client onboarding template',
    'freelance project kickoff checklist',
    'how to onboard a new client freelancer',
    'client onboarding process freelancer',
    'freelance project setup checklist',
  ],
  openGraph: {
    title:
      'Client Onboarding Checklist Generator — Free Tool for Freelancers | InvoiceFlow',
    description:
      'Generate a personalised client onboarding checklist for your freelance projects. Communication setup, payment terms, deliverables, legal admin — all in one checklist.',
    url: 'https://www.invoiceflow.au/tools/client-onboarding-checklist',
    siteName: 'InvoiceFlow',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Client Onboarding Checklist Generator — Free Freelance Tool | InvoiceFlow',
    description:
      'Create a personalised client onboarding checklist for your freelance projects. Free tool — no signup required.',
  },
  alternates: {
    canonical: 'https://www.invoiceflow.au/tools/client-onboarding-checklist',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Client Onboarding Checklist Generator for Freelancers',
  description:
    'A 4-step wizard that generates a personalised client onboarding checklist for freelancers. Covers project details, communication setup, payment and legal, and produces a comprehensive checklist across six categories: Pre-Start, Communication Setup, Payment Setup, Project Kickoff, Deliverables & Timeline, and Legal & Admin. Free — no signup required.',
  url: 'https://www.invoiceflow.au/tools/client-onboarding-checklist',
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

export default function ClientOnboardingChecklistPage() {
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
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-400/10 border border-emerald-400/20 rounded-full mb-6">
              <div className="w-2 h-2 bg-emerald-400 rounded-full" />
              <span className="text-emerald-400 text-sm font-medium">100% Free</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white heading-font mb-4">
              Client Onboarding{' '}
              <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
                Checklist Generator
              </span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Generate a personalised project onboarding checklist in 4 steps. Cover every
              base — communication, payment terms, legal setup, deliverables, and kickoff
              tasks. Built for Australian freelancers who want to start every project right.
            </p>
          </div>

          {/* Tool */}
          <ClientOnboardingChecklist />

          {/* SEO Content Sections */}
          <section className="mt-16 space-y-12">
            {/* Section 1: Why Client Onboarding Matters for Freelancers */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Why Client Onboarding Matters for Freelancers
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  The first 72 hours of a new client relationship shape everything that follows.
                  Freelancers who invest in a structured onboarding process consistently report
                  fewer payment disputes, less scope creep, faster project turnarounds, and higher
                  client satisfaction scores. Those who skip it spend twice as much time managing
                  confusion, chasing approvals, and defending boundaries.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-emerald-400 text-sm font-bold">01</span>
                      Setting Expectations Early
                    </h4>
                    <p className="text-sm">
                      Most freelancer-client conflicts are not about the work — they are about
                      mismatched expectations. Onboarding gives you a structured opportunity to
                      align on scope, timelines, communication style, and what &ldquo;done&rdquo;
                      actually means before a single hour of billable work begins. Written
                      agreement, not verbal assumption, is the foundation of a clean project.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-emerald-400 text-sm font-bold">02</span>
                      Preventing Scope Creep
                    </h4>
                    <p className="text-sm">
                      Scope creep is the single biggest profit killer for Australian freelancers.
                      A documented scope of work, signed during onboarding, gives you a clear
                      reference point when clients request additions. Without it, every
                      &ldquo;small extra thing&rdquo; is a negotiation you will likely lose. With
                      it, scope changes become billable variations — not free favours.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-emerald-400 text-sm font-bold">03</span>
                      Establishing Professionalism
                    </h4>
                    <p className="text-sm">
                      Clients judge your professionalism in the first interaction. A polished
                      onboarding process — with a structured checklist, signed agreement, and clear
                      payment process — signals that you operate a serious business, not a hobby.
                      This directly impacts what clients are willing to pay you and how they treat
                      you throughout the project.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-emerald-400 text-sm font-bold">04</span>
                      Legal and Financial Protection
                    </h4>
                    <p className="text-sm">
                      In Australia, verbal agreements are technically enforceable under contract
                      law — but extremely difficult to prove. A signed contract and deposit payment
                      processed during onboarding creates the paper trail you need if a client
                      disputes scope, refuses to pay, or claims ownership of your intellectual
                      property. Protection costs 10 minutes. Disputes cost weeks.
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-emerald-400/10 to-teal-500/10 border border-emerald-400/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-emerald-400 font-medium mb-2">
                    The Professional Edge
                  </p>
                  <p className="text-sm">
                    According to Australian freelance surveys, freelancers who use a structured
                    client onboarding process are 60% less likely to experience late or non-payment
                    and report significantly higher client retention rates. The investment is
                    minimal — a good checklist and 30 minutes at the start of every project.
                    The return is a business that runs cleanly, pays reliably, and scales without
                    drama.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2: What to Include in Your Client Onboarding Process */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                What to Include in Your Client Onboarding Process
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  A complete client onboarding process for Australian freelancers covers six
                  distinct areas. The specific tasks within each area vary by service type —
                  a web developer needs hosting credentials, a photographer needs shot list
                  confirmation, a consultant needs access to the relevant business data — but
                  the framework is universal.
                </p>
                <div className="space-y-3 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-emerald-400 font-bold">1.</span>
                      Communication Channels and Cadence
                    </h4>
                    <p className="text-sm">
                      Agree upfront on how you will communicate (email, Slack, phone calls —
                      not text messages after hours), how often you will provide updates, and
                      what the client should expect from your response times. Set your working
                      hours in writing. Unspoken communication expectations are the source of
                      most client frustration.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-emerald-400 font-bold">2.</span>
                      Payment Setup and Deposit Collection
                    </h4>
                    <p className="text-sm">
                      Never begin work without a deposit. Industry standard for Australian
                      freelancers is 25–50% upfront. Send your deposit invoice the moment
                      the contract is signed and make work commencement conditional on payment
                      clearing. Confirm the client&apos;s preferred payment method, GST registration
                      status, and invoicing contact at this stage.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-emerald-400 font-bold">3.</span>
                      Scope of Work Documentation
                    </h4>
                    <p className="text-sm">
                      Your scope document should be specific enough that a stranger could read
                      it and understand exactly what is and is not included. List deliverables,
                      exclusions, revision rounds, turnaround times, and dependencies. A vague
                      scope is an open invitation to scope creep. A specific scope is your
                      protection against it.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-emerald-400 font-bold">4.</span>
                      Legal Protections
                    </h4>
                    <p className="text-sm">
                      At minimum: a signed service agreement covering IP ownership, cancellation
                      terms, and late payment fees. For projects involving sensitive information,
                      add an NDA. For retainer arrangements, define the monthly deliverables and
                      rollover policy clearly. Australian Consumer Law (ACL) requires service
                      providers to be transparent about what they are delivering — your contract
                      is how you meet that obligation.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-emerald-400 font-bold">5.</span>
                      Asset and Access Collection
                    </h4>
                    <p className="text-sm">
                      Collect every login, brand asset, and piece of content you need before
                      the project timeline starts. Every hour spent chasing down a logo file
                      or waiting for hosting credentials is a delay you will be blamed for,
                      even if it was the client&apos;s fault. Create a clear asset checklist
                      and make it a prerequisite for the project start date.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3: Common Client Onboarding Mistakes Freelancers Make */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Common Client Onboarding Mistakes Freelancers Make
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Most painful freelance experiences can be traced back to a specific onboarding
                  failure. Here are the five most costly mistakes Australian freelancers make when
                  starting new projects — and exactly how to avoid each one.
                </p>
                <div className="space-y-3 mt-4">
                  <div className="bg-white/5 rounded-xl p-4 border-l-2 border-rose-500/40">
                    <h4 className="text-white font-semibold mb-1">
                      Mistake 1 — Starting work without a signed contract
                    </h4>
                    <p className="text-sm">
                      This is the most expensive mistake a freelancer can make. Without a signed
                      agreement, you have no legal protection if the client ghosts, disputes scope,
                      claims your work as their own, or refuses to pay. &ldquo;But we discussed it
                      over email&rdquo; is not a contract. A signed service agreement takes 10
                      minutes to set up and can save you thousands. Make it non-negotiable.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border-l-2 border-rose-500/40">
                    <h4 className="text-white font-semibold mb-1">
                      Mistake 2 — Skipping the deposit
                    </h4>
                    <p className="text-sm">
                      A deposit serves two purposes: immediate cash flow, and client commitment
                      filtering. Clients who resist paying a deposit are statistically more likely
                      to be late on final payment, request excessive revisions, and disappear after
                      delivery. Australian freelancers should require 25–50% upfront on all
                      projects over $500. No deposit cleared, no work started. Full stop.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border-l-2 border-rose-500/40">
                    <h4 className="text-white font-semibold mb-1">
                      Mistake 3 — Unclear timelines and no kill fee
                    </h4>
                    <p className="text-sm">
                      Projects without defined milestones and completion dates drag on
                      indefinitely. Clients deprioritise your project, go quiet for weeks, then
                      expect an urgent turnaround. Establish a clear project timeline at kickoff
                      and include a kill fee clause in your contract — typically 25–50% of the
                      remaining project value if the client cancels after work has begun. This
                      protects your time and keeps clients accountable.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border-l-2 border-rose-500/40">
                    <h4 className="text-white font-semibold mb-1">
                      Mistake 4 — Not setting communication boundaries
                    </h4>
                    <p className="text-sm">
                      If you do not specify your working hours and communication channels during
                      onboarding, clients will call you at 9pm on a Sunday and expect immediate
                      responses. Specify in writing: your working hours, your preferred contact
                      method (email or Slack — not mobile unless urgent), and your target response
                      time. Clients who get this information upfront respect it. Clients who are
                      never told will always push boundaries.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border-l-2 border-rose-500/40">
                    <h4 className="text-white font-semibold mb-1">
                      Mistake 5 — Treating retainers like individual projects
                    </h4>
                    <p className="text-sm">
                      Retainer clients require different onboarding than one-off project clients.
                      For ongoing arrangements, you need to define the monthly deliverable scope
                      clearly (what is included, what is billable as extra), establish a monthly
                      reporting cadence, and set a rollover policy for unused hours or tasks. Without
                      this, retainers quietly balloon in scope until they are no longer profitable.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 4: How InvoiceFlow Streamlines Client Management */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                How InvoiceFlow Streamlines Client Management
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  A great onboarding process is only the beginning. Managing clients well across
                  the full project lifecycle — from first invoice to final payment — is where
                  InvoiceFlow gives Australian freelancers a real edge.
                </p>
                <div className="grid sm:grid-cols-3 gap-3 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold text-sm mb-2 flex items-center gap-2">
                      <span className="text-emerald-400 text-lg">1.</span> Professional Invoicing
                    </h4>
                    <p className="text-xs text-slate-400">
                      Send polished invoices with your ABN, GST details, and payment terms
                      instantly. First impressions matter — professional invoices signal a
                      professional business and get paid faster.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold text-sm mb-2 flex items-center gap-2">
                      <span className="text-emerald-400 text-lg">2.</span> Deposit Tracking
                    </h4>
                    <p className="text-xs text-slate-400">
                      Track deposits, milestone payments, and final invoices in one place. Always
                      know what has been paid, what is outstanding, and what is overdue — without
                      digging through spreadsheets.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold text-sm mb-2 flex items-center gap-2">
                      <span className="text-emerald-400 text-lg">3.</span> Automated Reminders
                    </h4>
                    <p className="text-xs text-slate-400">
                      Stop chasing late payments manually. InvoiceFlow sends automatic payment
                      reminders at the intervals you set — so you get paid without the awkward
                      follow-up conversations.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold text-sm mb-2 flex items-center gap-2">
                      <span className="text-emerald-400 text-lg">4.</span> Client Records
                    </h4>
                    <p className="text-xs text-slate-400">
                      Keep a complete record of every client — contact details, project history,
                      payment records, and notes. When a client returns 12 months later, you
                      have the full context at your fingertips.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold text-sm mb-2 flex items-center gap-2">
                      <span className="text-emerald-400 text-lg">5.</span> GST-Ready Reports
                    </h4>
                    <p className="text-xs text-slate-400">
                      Generate BAS-ready income and GST reports with one click. Every invoice
                      feeds into real-time financial dashboards that make tax time straightforward
                      instead of stressful.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold text-sm mb-2 flex items-center gap-2">
                      <span className="text-emerald-400 text-lg">6.</span> Late Payment Protection
                    </h4>
                    <p className="text-xs text-slate-400">
                      Built-in late payment fee calculations and overdue invoice tracking give
                      you the tools to enforce your payment terms professionally — without
                      needing a debt collector.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-16 text-center glass rounded-2xl p-10">
            <h3 className="text-3xl font-bold text-white heading-font mb-4">
              Onboard clients like a pro.{' '}
              <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
                Get paid like one too.
              </span>
            </h3>
            <p className="text-slate-300 max-w-xl mx-auto mb-6">
              InvoiceFlow handles everything from first invoice to final payment — so you can
              focus on doing great work and stop chasing money. Built for Australian freelancers
              who run serious businesses.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/signup"
                className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold hover:opacity-90 transition-opacity"
              >
                Start Free — 5 Invoices/Month
              </Link>
              <Link
                href="/tools/scope-of-work-generator"
                className="inline-block px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all"
              >
                Try Scope of Work Generator
              </Link>
            </div>
          </section>
        
        <RelatedTools currentSlug="client-onboarding-checklist" category="Business Analytics" />
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
