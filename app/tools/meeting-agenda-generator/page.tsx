import type { Metadata } from 'next';
import Link from 'next/link';
import MeetingAgendaGenerator from './MeetingAgendaGenerator';
import RelatedTools from '../components/RelatedTools';
import EmailCapture from '../components/EmailCapture';
import BreadcrumbSchema from '../components/BreadcrumbSchema';

const title = 'Meeting Agenda Generator | Free Freelance Tool — InvoiceFlow';
const description =
  'Free meeting agenda generator for freelancers. Create professional agendas for client kickoff meetings, progress reviews, feedback sessions, and project wrap-ups. Copy or print — no signup required.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'client meeting agenda template freelancer',
    'meeting agenda generator free',
    'project kickoff agenda template',
    'freelance client meeting template',
    'professional meeting agenda generator',
    'client progress review agenda',
    'freelance meeting notes template',
    'client call agenda template',
    'discovery call agenda freelancer',
    'project wrap up meeting template',
  ],
  openGraph: {
    title: 'Meeting Agenda Generator — Free Freelance Tool | InvoiceFlow',
    description:
      'Create professional meeting agendas in minutes. Pre-populated templates for discovery calls, kickoffs, reviews, and wrap-ups. Free for freelancers — no signup required.',
    url: 'https://www.invoiceflow.au/tools/meeting-agenda-generator',
    siteName: 'InvoiceFlow',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Meeting Agenda Generator — Free Freelance Tool | InvoiceFlow',
    description:
      'Create professional meeting agendas for client calls, kickoffs, and reviews. Free tool for freelancers.',
  },
  alternates: { canonical: 'https://www.invoiceflow.au/tools/meeting-agenda-generator' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Meeting Agenda Generator for Freelancers',
  description:
    'A 4-step meeting agenda generator that helps freelancers create professional agendas for client meetings. Covers discovery calls, project kickoffs, progress reviews, feedback sessions, strategy sessions, and project wrap-ups. Pre-populated agenda items with time allocations based on meeting type. Generates a formatted agenda document ready to copy or print. Free — no signup required.',
  url: 'https://www.invoiceflow.au/tools/meeting-agenda-generator',
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

export default function MeetingAgendaGeneratorPage() {
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
              <div className="w-2 h-2 bg-gradient-to-r from-indigo-400 to-violet-500 rounded-full" />
              <span className="text-indigo-400 text-sm font-medium">100% Free</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white heading-font mb-4">
              Meeting Agenda{' '}
              <span className="bg-gradient-to-r from-indigo-400 to-violet-500 bg-clip-text text-transparent">
                Generator
              </span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Create professional meeting agendas in minutes. Choose your meeting type, customise
              agenda items and time allocations, then copy or print a polished document ready to
              share with your client. Built for freelancers who run meetings that actually get
              results.
            </p>
          </div>

          {/* Generator Tool */}
          <MeetingAgendaGenerator />

          {/* SEO Content Sections */}
          <section className="mt-16 space-y-12">
            {/* Section 1: Why Freelancers Need Structured Meeting Agendas */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Why Freelancers Need Structured Meeting Agendas
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Meetings without agendas are the silent killer of freelance profitability. Every
                  minute you spend in an unstructured client call is a minute you are not billing,
                  not shipping, and not growing your business. Research consistently shows that
                  meetings without written agendas run 30 to 40 percent longer than necessary — and
                  for a freelancer charging $120 per hour, that is $60 to $80 burned every single
                  time a call drifts off topic.
                </p>
                <div className="grid sm:grid-cols-3 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <span className="bg-gradient-to-r from-indigo-400 to-violet-500 bg-clip-text text-transparent text-sm font-bold">01</span>
                      Meetings That Ramble Cost Money
                    </h4>
                    <p className="text-sm text-slate-400">
                      The average freelancer spends 4 to 6 hours per week in client meetings. Without
                      an agenda, at least half of that time is wasted on tangents, repeated context
                      setting, and circular discussions. Over a year, that adds up to 100 to 150
                      hours of unbillable time — the equivalent of three to four full project weeks
                      lost to conversations that could have been 20 minutes shorter. An agenda is not
                      bureaucracy; it is a financial tool that protects your most valuable asset:
                      your time.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <span className="bg-gradient-to-r from-indigo-400 to-violet-500 bg-clip-text text-transparent text-sm font-bold">02</span>
                      Agendas Show Professionalism
                    </h4>
                    <p className="text-sm text-slate-400">
                      Sending an agenda before a meeting instantly separates you from 90 percent of
                      freelancers who just show up and wing it. Clients notice this. It signals that
                      you respect their time, that you have thought about what needs to be covered,
                      and that you run your business with the same rigour as the agencies charging
                      three times your rate. This perception directly impacts your ability to command
                      premium pricing, negotiate better terms, and earn repeat business. The agenda
                      becomes part of your professional brand.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <span className="bg-gradient-to-r from-indigo-400 to-violet-500 bg-clip-text text-transparent text-sm font-bold">03</span>
                      Prevents Scope Creep in Real Time
                    </h4>
                    <p className="text-sm text-slate-400">
                      Scope creep does not happen in contracts — it happens in conversations. A
                      client casually mentions a new feature during a progress review. Without an
                      agenda, the discussion meanders into that new feature, expectations shift, and
                      suddenly you are committed to work you never quoted for. With an agenda, you
                      can say &quot;that sounds like a great addition — let me note it as a separate
                      discussion item and send you a revised quote after the meeting.&quot; The
                      agenda gives you a framework to acknowledge requests without accepting them on
                      the spot.
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-indigo-400/10 to-violet-500/10 border border-indigo-400/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-indigo-400 font-medium mb-2">Accountability Through Documentation</p>
                  <p className="text-sm">
                    A meeting agenda does double duty: it structures the conversation before the
                    meeting, and it becomes a reference document after. When both parties know what
                    was discussed, what was agreed, and what was explicitly deferred, there is no room
                    for &quot;I thought we agreed to...&quot; misunderstandings. This is especially
                    critical for freelancers who work with multiple clients simultaneously — the
                    agenda becomes your single source of truth for what happened in every client
                    interaction, making follow-up faster and more accurate.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2: The 5 Client Meetings Every Freelancer Should Master */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                The 5 Client Meetings Every Freelancer Should Master
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Not every client meeting is the same, and treating them all identically is a
                  mistake that leads to wasted time, missed opportunities, and confused clients. Each
                  meeting type has a distinct purpose, a different energy, and a specific set of
                  outcomes it needs to produce. Here are the five meetings you will run most often as
                  a freelancer, what each should cover, and the common mistakes to avoid.
                </p>
                <div className="space-y-4 mt-2">
                  <div className="bg-white/5 rounded-xl p-5">
                    <h4 className="text-white font-semibold mb-2">1. The Discovery / Sales Call</h4>
                    <p className="text-sm">
                      This is your first real conversation with a potential client. The goal is not to
                      sell — it is to listen. You need to understand their business, their problem, their
                      timeline, and their budget before you can determine whether the project is a good
                      fit. Cover introductions, ask about their business context, dig into the specific
                      pain points or goals driving this project, discuss rough scope and timeline
                      expectations, and agree on next steps. The most common mistake is talking too much
                      about yourself and your portfolio instead of asking questions. A good discovery call
                      is 70 percent listening and 30 percent talking. The second mistake is failing to
                      discuss budget — if the client has $2,000 and you are a $15,000 freelancer, both
                      parties benefit from knowing that early.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-5">
                    <h4 className="text-white font-semibold mb-2">2. The Project Kickoff</h4>
                    <p className="text-sm">
                      The kickoff sets the tone for the entire project. This is where you align on
                      scope, walk through deliverables, confirm the timeline, establish communication
                      expectations, and ensure everyone knows their role. Cover a quick welcome and
                      introductions (especially if there are stakeholders who were not on the sales
                      call), recap the agreed scope, walk through milestones and deadlines, confirm
                      the communication plan (channel, frequency, response times), discuss tools and
                      file sharing, and end with clear next steps. The biggest mistake is treating the
                      kickoff as a formality. If you rush through it, you will spend the rest of the
                      project correcting misalignments that should have been caught in the first 30
                      minutes.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-5">
                    <h4 className="text-white font-semibold mb-2">3. The Progress Review</h4>
                    <p className="text-sm">
                      Regular progress reviews keep the project on track and the client confident. Walk
                      through what has been completed since the last check-in, demonstrate deliverables
                      where possible, discuss any blockers or risks, confirm upcoming milestones, and
                      agree on action items. The common mistake here is turning every progress review
                      into a feedback session. Progress reviews are about status and direction — save
                      detailed creative feedback for a dedicated feedback meeting. Another mistake is
                      not flagging risks early. If you know a deadline is at risk, the progress review is
                      where you raise it — not the day before the due date.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-5">
                    <h4 className="text-white font-semibold mb-2">4. The Feedback / Revision Review</h4>
                    <p className="text-sm">
                      Feedback meetings require the most careful structure because they are where
                      emotions run highest and scope creep is most likely. Present the deliverable in
                      context (not just a Figma link — walk them through it), ask specific questions
                      rather than open-ended &quot;what do you think?&quot;, document every piece of
                      feedback in real time, clarify what is a revision versus what is a scope change,
                      and confirm the revision timeline. The fatal mistake is accepting verbal feedback
                      without documenting it. &quot;Make it more modern&quot; means something completely
                      different to every person in the room. Pin down specifics before ending the call,
                      or you will be guessing — and revising — indefinitely.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-5">
                    <h4 className="text-white font-semibold mb-2">5. The Project Wrap-Up</h4>
                    <p className="text-sm">
                      The wrap-up meeting is the most underrated meeting in freelancing. Most
                      freelancers just send final files and move on — missing a massive opportunity to
                      strengthen the relationship, collect testimonials, and set up future work. Cover a
                      recap of what was delivered, walk through any handover documentation, confirm that
                      all deliverables have been received and approved, discuss what went well and what
                      could be improved, ask about future projects or ongoing needs, and request a
                      testimonial or referral. The mistake is skipping this meeting entirely. A
                      10-minute wrap-up call can generate a testimonial, a referral, or a retainer
                      conversation that is worth more than the project itself.
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-indigo-400/10 to-violet-500/10 border border-indigo-400/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-indigo-400 font-medium mb-2">Match the Agenda to the Meeting</p>
                  <p className="text-sm">
                    This generator pre-populates agenda items based on your meeting type because
                    every meeting type demands a different structure. A discovery call needs open
                    questions and space for the client to talk. A progress review needs concise
                    status updates and risk flags. A feedback session needs structured review
                    criteria and a clear process for documenting changes. Using the same generic
                    agenda for every meeting is like using the same invoice template for a $500
                    logo and a $50,000 development project — it works, but it does not serve you
                    well.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3: How InvoiceFlow Connects Meetings to Invoicing */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                How InvoiceFlow Connects Meetings to Invoicing
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Meetings are not just conversations — they are business events that have a direct
                  relationship to your revenue. Every client call takes time that could be billed,
                  surfaces scope changes that need to be quoted, and creates commitments that drive
                  invoicing milestones. InvoiceFlow helps you close the loop between what happens in
                  meetings and what shows up on your invoices.
                </p>
                <div className="grid sm:grid-cols-3 gap-3 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold text-sm mb-2">
                      Track Billable Meeting Time
                    </h4>
                    <p className="text-xs text-slate-400">
                      If your contract includes billable meeting time — and it should — every client
                      call needs to be tracked and invoiced. InvoiceFlow lets you log meeting
                      durations against specific projects so that your time tracking is accurate and
                      your invoices reflect every hour of work, not just the hours spent at a desk.
                      Many freelancers leave 5 to 10 percent of their revenue on the table by not
                      billing for meeting time. An agenda with a clear duration makes it easy to
                      track exactly how long each meeting ran.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold text-sm mb-2">
                      Document Scope Changes Discussed
                    </h4>
                    <p className="text-xs text-slate-400">
                      When a client raises a new request during a meeting, it needs to go somewhere
                      other than your memory. InvoiceFlow connects scope change discussions to your
                      invoicing workflow. Flag the change in your meeting notes, generate a change
                      order quote, and send it before the next session. This ensures that every
                      &quot;could you also...&quot; moment in a meeting turns into a documented,
                      quoted, and invoiced piece of work — not an unpaid favour.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold text-sm mb-2">
                      Follow Up With Milestone Invoices
                    </h4>
                    <p className="text-xs text-slate-400">
                      Progress review meetings are natural invoicing triggers. When a milestone is
                      presented and approved in a meeting, the next step should be an invoice — not
                      a week of silence followed by an awkward payment request. InvoiceFlow lets you
                      tie invoices to project milestones so that every &quot;this phase is
                      complete&quot; conversation in a meeting has a corresponding invoice ready to
                      send. This keeps your cash flow healthy and your payment cycle predictable.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold text-sm mb-2">
                      Professional Client Experience
                    </h4>
                    <p className="text-xs text-slate-400">
                      Sending a polished agenda before the meeting and a professional invoice after
                      creates a consistent client experience that builds trust. Clients who
                      experience this level of professionalism are more likely to pay on time, refer
                      you to others, and return for future projects. InvoiceFlow handles the
                      invoicing side of this equation, so every touchpoint — from the first meeting
                      agenda to the final invoice — feels considered and competent.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold text-sm mb-2">
                      Meeting Cost Awareness
                    </h4>
                    <p className="text-xs text-slate-400">
                      Pair this agenda generator with our Meeting Cost Calculator to understand the
                      true financial impact of your client meetings. When you can see that a
                      one-hour meeting with two attendees costs $240 in billable time, you make
                      better decisions about which meetings to take, how long to run them, and
                      whether an email would have been more efficient. InvoiceFlow gives you the
                      data to treat meetings as a business cost, not a free activity.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold text-sm mb-2">
                      Tax-Ready Records
                    </h4>
                    <p className="text-xs text-slate-400">
                      Every invoice InvoiceFlow generates is ATO-compliant — ABN, GST amounts,
                      payment terms, and clear descriptions of services rendered. When meeting time
                      is tracked and invoiced properly, your records are already organised by client,
                      project, and financial year at tax time. No scrambling, no missed billable
                      hours, no deductions left on the table.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-16 text-center glass rounded-2xl p-10">
            <h3 className="text-3xl font-bold text-white heading-font mb-4">
              Run better meetings.{' '}
              <span className="bg-gradient-to-r from-indigo-400 to-violet-500 bg-clip-text text-transparent">
                Win better clients.
              </span>
            </h3>
            <p className="text-slate-300 max-w-xl mx-auto mb-6">
              InvoiceFlow helps Australian freelancers track billable time, invoice at milestones,
              and ensure every client interaction is accounted for — so your meetings lead to
              revenue, not regret.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/signup"
                className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold hover:opacity-90 transition-opacity"
              >
                Start Free — 5 Invoices/Month
              </Link>
              <Link
                href="/tools/meeting-cost-calculator"
                className="inline-block px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all"
              >
                Try Meeting Cost Calculator
              </Link>
            </div>
          </section>
        
        <RelatedTools currentSlug="meeting-agenda-generator" category="Business Analytics" />
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
