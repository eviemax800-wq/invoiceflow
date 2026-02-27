import type { Metadata } from 'next';
import Link from 'next/link';
import MeetingCostCalculator from './MeetingCostCalculator';
import RelatedTools from '../components/RelatedTools';
import EmailCapture from '../components/EmailCapture';

const title = 'Meeting Cost Calculator Australia | How Much Do Meetings Cost? — InvoiceFlow';
const description =
  'Calculate the true cost of meetings for your business. See per-minute costs, annual impact, and how much you could save by making meetings more efficient. Free calculator for Australian businesses.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'meeting cost calculator',
    'how much do meetings cost',
    'meeting roi calculator',
    'meeting time calculator',
    'cost of meetings business',
  ],
  openGraph: {
    title: 'Meeting Cost Calculator — Free Tool | InvoiceFlow',
    description:
      'See the real cost of your meetings. Free calculator for Australian businesses and freelancers.',
    url: 'https://www.invoiceflow.au/tools/meeting-cost-calculator',
    siteName: 'InvoiceFlow',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Meeting Cost Calculator — Free Tool | InvoiceFlow',
    description:
      'How much do your meetings really cost? Find out with this free calculator.',
  },
  alternates: {
    canonical: 'https://www.invoiceflow.au/tools/meeting-cost-calculator',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Meeting Cost Calculator Australia',
  description:
    'Calculate the true cost of meetings. See per-minute costs, annual impact, and potential savings from more efficient meetings.',
  url: 'https://www.invoiceflow.au/tools/meeting-cost-calculator',
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

export default function MeetingCostCalculatorPage() {
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
              Meeting <span className="gradient-text">Cost</span> Calculator
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Meetings aren&apos;t free. Calculate exactly what they cost your business per minute,
              per person, and per year — then find ways to get that time (and money) back.
            </p>
          </div>

          {/* Calculator */}
          <MeetingCostCalculator />

          {/* SEO Content Sections */}
          <section className="mt-16 space-y-12">
            {/* The Hidden Cost of Meetings */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                The Hidden Cost of Meetings
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  The average Australian professional spends 6.5 hours per week in meetings — and
                  estimates that more than half of that time is unproductive. For a team of four
                  billing at $100/hour, that&apos;s over $67,000 per year spent sitting in rooms
                  (or on Zoom calls) that may not need to happen.
                </p>
                <p>
                  The cost isn&apos;t just salaries. Every meeting carries hidden expenses: the
                  preparation time before, the follow-up after, the context-switching penalty when
                  people return to deep work, and the opportunity cost of what everyone could have
                  been doing instead.
                </p>
                <div className="grid sm:grid-cols-3 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-teal-400 mb-1">$37B</p>
                    <p className="text-sm">lost annually to unnecessary meetings in Australia</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-amber-400 mb-1">67%</p>
                    <p className="text-sm">of meetings are considered unnecessary by attendees</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-rose-400 mb-1">23 min</p>
                    <p className="text-sm">average time to refocus after a meeting interruption</p>
                  </div>
                </div>
                <p className="text-sm mt-2">
                  For freelancers and small business owners, the impact is even more acute. Every
                  hour in a meeting is an hour you&apos;re not billing a client, shipping a
                  deliverable, or growing your business. Use the calculator above to put a real
                  dollar figure on your meeting habit — the number might surprise you.
                </p>
              </div>
            </div>

            {/* 7 Ways to Make Meetings Worth the Cost */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                7 Ways to Make Meetings Worth the Cost
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Not all meetings are wasteful — some are essential for alignment, decision-making,
                  and relationship-building. The goal isn&apos;t to eliminate meetings, but to make
                  every minute count. Here are seven proven strategies:
                </p>
                <div className="space-y-4 mt-2">
                  <div className="bg-white/5 rounded-xl p-5">
                    <h4 className="text-white font-semibold mb-2">1. Always Set an Agenda</h4>
                    <p className="text-sm">
                      No agenda, no meeting. Share a written agenda at least 24 hours in advance
                      with specific topics, time allocations, and desired outcomes. Meetings
                      without agendas run 30-40% longer and produce fewer actionable results.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-5">
                    <h4 className="text-white font-semibold mb-2">2. Limit Attendees Ruthlessly</h4>
                    <p className="text-sm">
                      Amazon&apos;s &ldquo;two-pizza rule&rdquo; works: if you can&apos;t feed the
                      group with two pizzas, there are too many people. Every additional attendee
                      increases cost linearly but often decreases decision quality. Invite only
                      decision-makers; send everyone else a summary.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-5">
                    <h4 className="text-white font-semibold mb-2">3. Timebox Everything</h4>
                    <p className="text-sm">
                      Set a timer. When time&apos;s up, the meeting ends — no exceptions. Default
                      to 25-minute meetings instead of 30, or 50 minutes instead of 60. The
                      constraint forces efficiency and gives people a buffer before their next
                      commitment.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-5">
                    <h4 className="text-white font-semibold mb-2">4. Try Async Alternatives</h4>
                    <p className="text-sm">
                      Status updates, FYI announcements, and simple decisions don&apos;t need a
                      meeting. Use Loom for walkthroughs, Slack threads for discussions, and shared
                      docs for collaborative work. Reserve synchronous time for debates, brainstorms,
                      and relationship-building.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-5">
                    <h4 className="text-white font-semibold mb-2">5. Stand Up (Literally)</h4>
                    <p className="text-sm">
                      Standing meetings are 34% shorter than seated ones, according to research
                      from Washington University. The slight physical discomfort naturally
                      discourages rambling and keeps discussions focused.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-5">
                    <h4 className="text-white font-semibold mb-2">6. Institute No-Meeting Days</h4>
                    <p className="text-sm">
                      Designate at least one day per week as meeting-free. This gives your team
                      (or yourself) guaranteed blocks of deep work time. Many companies report a
                      40% productivity boost on no-meeting days.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-5">
                    <h4 className="text-white font-semibold mb-2">7. Run Quarterly Meeting Audits</h4>
                    <p className="text-sm">
                      Every quarter, review all recurring meetings. Ask three questions for each:
                      (1) Is this still necessary? (2) Can the frequency be reduced? (3) Can
                      anyone be removed? Most teams find they can eliminate 20-30% of recurring
                      meetings without any negative impact.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* When to Meet vs When to Email */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                When to Meet vs When to Email
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Not every interaction needs a meeting. Use this framework to decide whether a
                  live discussion is worth the cost, or whether an asynchronous alternative would
                  be more effective:
                </p>
                <div className="overflow-x-auto mt-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-3 px-4 text-slate-400 font-medium">Scenario</th>
                        <th className="text-left py-3 px-4 text-slate-400 font-medium">Meeting</th>
                        <th className="text-left py-3 px-4 text-slate-400 font-medium">Email / Async</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      <tr>
                        <td className="py-3 px-4 text-white">Status update</td>
                        <td className="py-3 px-4 text-rose-400">Avoid</td>
                        <td className="py-3 px-4 text-teal-400">Slack/email summary</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-white">Complex decision with debate</td>
                        <td className="py-3 px-4 text-teal-400">Yes, small group</td>
                        <td className="py-3 px-4 text-rose-400">Too slow for nuance</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-white">Project kickoff</td>
                        <td className="py-3 px-4 text-teal-400">Yes, sets alignment</td>
                        <td className="py-3 px-4 text-amber-400">Follow up with doc</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-white">FYI / announcement</td>
                        <td className="py-3 px-4 text-rose-400">Avoid</td>
                        <td className="py-3 px-4 text-teal-400">Email or Loom</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-white">Brainstorming</td>
                        <td className="py-3 px-4 text-teal-400">Yes, energy matters</td>
                        <td className="py-3 px-4 text-amber-400">Async board first</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-white">Feedback / reviews</td>
                        <td className="py-3 px-4 text-amber-400">If sensitive</td>
                        <td className="py-3 px-4 text-teal-400">Written for clarity</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-white">Client relationship check-in</td>
                        <td className="py-3 px-4 text-teal-400">Yes, builds trust</td>
                        <td className="py-3 px-4 text-rose-400">Feels impersonal</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-white">Recurring standup</td>
                        <td className="py-3 px-4 text-amber-400">15 min max</td>
                        <td className="py-3 px-4 text-teal-400">Bot/async standup</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="bg-gradient-to-r from-teal-500/10 to-blue-500/10 border border-teal-500/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-teal-400 font-medium mb-2">The 5-Minute Rule</p>
                  <p className="text-sm">
                    Before scheduling any meeting, spend 5 minutes trying to solve it asynchronously
                    first. Write the email, draft the doc, or record the Loom. If you can resolve it
                    without pulling people into a room, you&apos;ve just saved everyone time. If not,
                    you now have a much clearer agenda for the meeting you do schedule.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-16 text-center glass rounded-2xl p-10">
            <h3 className="text-3xl font-bold text-white heading-font mb-4">
              Ready to <span className="gradient-text">reclaim your time?</span>
            </h3>
            <p className="text-slate-300 max-w-xl mx-auto mb-6">
              InvoiceFlow helps freelancers track billable hours, automate invoicing, and ensure
              every minute of client work is accounted for — so your time goes to revenue, not
              unnecessary meetings.
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
        
        <RelatedTools currentSlug="meeting-cost-calculator" category="Business Analytics" />
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
