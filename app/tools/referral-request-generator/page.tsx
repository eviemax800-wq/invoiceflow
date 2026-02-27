import type { Metadata } from 'next';
import Link from 'next/link';
import ReferralRequestGenerator from './ReferralRequestGenerator';
import RelatedTools from '../components/RelatedTools';
import EmailCapture from '../components/EmailCapture';
import BreadcrumbSchema from '../components/BreadcrumbSchema';
import FAQSchema from '../components/FAQSchema';

const title =
  'Client Referral Request Generator | Free Freelance Tool — InvoiceFlow';
const description =
  'Free referral request generator for freelancers. Create professional emails asking clients for referrals at the right moment — after project completion, milestones, or annual reviews. Copy and send — no signup required.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'how to ask for referrals freelancer',
    'client referral email template',
    'referral request letter template',
    'freelance referral program template',
    'ask clients for referrals politely',
    'referral email generator',
    'client referral request template',
    'word of mouth marketing freelancer',
    'freelance referral strategy',
    'post project referral request email',
  ],
  openGraph: {
    title:
      'Client Referral Request Generator — Free Freelance Tool | InvoiceFlow',
    description:
      'Generate professional referral request emails for your clients. Choose the scenario, tone, and incentive — copy and send instantly.',
    url: 'https://www.invoiceflow.au/tools/referral-request-generator',
    siteName: 'InvoiceFlow',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Client Referral Request Generator — Free Freelance Tool | InvoiceFlow',
    description:
      'Generate professional referral request emails. Choose scenario, tone, and incentive. Free for freelancers.',
  },
  alternates: {
    canonical:
      'https://www.invoiceflow.au/tools/referral-request-generator',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Client Referral Request Generator for Freelancers',
  description:
    'A 4-step wizard that helps freelancers generate professional referral request emails. Choose the timing scenario, tone, optional referral incentive, and get a personalised email ready to send to your best clients. Free — no signup required.',
  url: 'https://www.invoiceflow.au/tools/referral-request-generator',
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

const faqs = [
  {
    question: "Is this tool free to use?",
    answer: "Yes, this tool is completely free with no account needed. Enter your details and get instant analysis."
  },
  {
    question: "How current is the data used?",
    answer: "This tool uses the latest available Australian business data and ATO 2025-26 rates. Industry benchmarks are based on current market research."
  },
  {
    question: "Can I export or save my results?",
    answer: "You can copy results to your clipboard or print the page directly from your browser. For ongoing tracking and analytics, InvoiceFlow offers a free plan."
  }
];

export default function ReferralRequestGeneratorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FAQSchema faqs={faqs} />
      <div className="page-bg min-h-screen">
        {/* Header */}
        <header className="border-b border-white/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-teal-400 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">IF</span>
              </div>
              <span className="text-white font-semibold text-lg heading-font">
                InvoiceFlow
              </span>
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
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-violet-500/10 border border-violet-500/20 rounded-full mb-6">
              <div className="w-2 h-2 bg-violet-400 rounded-full" />
              <span className="text-violet-400 text-sm font-medium">
                100% Free
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white heading-font mb-4">
              Client Referral Request{' '}
              <span className="bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent">
                Generator
              </span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Turn your happiest clients into your most powerful growth engine.
              Generate professional, perfectly-timed referral request emails
              tailored to your scenario, tone, and incentive structure — ready
              to copy and send.
            </p>
          </div>

          {/* Generator Tool */}
          <ReferralRequestGenerator />

          {/* SEO Content Sections */}
          <section className="mt-16 space-y-12">
            {/* Section 1: Why Referrals Are the Most Powerful Growth Channel */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Why Referrals Are the Most Powerful Growth Channel for
                Freelancers
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Every freelancer eventually hits a ceiling with cold outreach.
                  You can only send so many proposals on job boards, post so
                  many times on social media, or run so many ads before the
                  cost of acquiring a new client starts eating into your
                  profits. Referrals break through that ceiling entirely —
                  because a warm introduction from a trusted source does what
                  no amount of cold outreach can: it establishes credibility
                  before you even say hello.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-violet-400 text-sm font-bold">
                        01
                      </span>
                      3-5x Higher Conversion Rates
                    </h4>
                    <p className="text-sm">
                      Referred leads convert at three to five times the rate of
                      cold leads. When a potential client hears about you from
                      someone they trust, the sales process is dramatically
                      shortened. They&apos;re not comparing you against ten
                      other proposals — they&apos;re already predisposed to
                      hire you. Research from the Wharton School of Business
                      found that referred customers have a 16% higher lifetime
                      value and are 18% less likely to churn. For freelancers,
                      this translates to higher project values, fewer
                      negotiations, and longer client relationships.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-violet-400 text-sm font-bold">
                        02
                      </span>
                      The Trust Transfer Effect
                    </h4>
                    <p className="text-sm">
                      When a client refers you, they&apos;re lending you their
                      reputation. This creates what psychologists call
                      &ldquo;transitive trust&rdquo; — the new prospect trusts
                      you because they trust the person who recommended you.
                      This is why referred clients skip the skepticism phase
                      that cold prospects go through. They arrive pre-sold on
                      your competence and character, which means you spend less
                      time justifying your rates and more time discussing how
                      you can help them. The trust transfer is so powerful that
                      referred clients are typically willing to pay 10-20%
                      more than clients who found you through cold channels.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-violet-400 text-sm font-bold">
                        03
                      </span>
                      Near-Zero Acquisition Cost
                    </h4>
                    <p className="text-sm">
                      The average freelancer spends 15-25% of their working
                      time on business development — writing proposals,
                      networking, following up on leads. At a $100/hour rate,
                      that&apos;s $15-25 per hour in hidden acquisition costs.
                      Referrals cost virtually nothing beyond the effort of
                      asking. Even if you offer a referral incentive (a
                      discount, a bonus, a gift), the cost is a fraction of
                      what you&apos;d spend on paid advertising, job board
                      subscriptions, or the hours lost to cold pitching.
                      Referral-based businesses consistently report customer
                      acquisition costs 50-80% lower than those relying on
                      traditional marketing channels.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-violet-400 text-sm font-bold">
                        04
                      </span>
                      Why Most Freelancers Still Don&apos;t Ask
                    </h4>
                    <p className="text-sm">
                      Despite the overwhelming evidence that referrals are the
                      most effective growth channel, most freelancers never
                      systematically ask for them. The reasons are
                      psychological, not strategic: fear of seeming pushy,
                      discomfort with self-promotion, uncertainty about when or
                      how to ask, or simply forgetting once a project ends.
                      Texas Tech University research found that 83% of
                      satisfied customers are willing to provide referrals —
                      but only 29% actually do, because nobody asks them. The
                      gap between willingness and action is your opportunity.
                      A simple, well-timed, professionally-worded request is
                      all it takes to unlock a growth channel that most of your
                      competitors are leaving completely untapped.
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-violet-500/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-violet-400 font-medium mb-2">
                    The Bottom Line
                  </p>
                  <p className="text-sm">
                    Referrals are not a bonus — they should be the foundation
                    of your freelance growth strategy. A single happy client
                    can introduce you to three or four more, each of whom can
                    do the same. The compounding effect means that a handful of
                    strong referral relationships can sustain your entire
                    pipeline. But it starts with asking.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2: When and How to Ask for Referrals */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                When and How to Ask for Referrals Without Being Awkward
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Timing is the single biggest factor in whether a referral
                  request succeeds or falls flat. Ask too early, and
                  you&apos;ll seem presumptuous. Ask too late, and the goodwill
                  has faded. Ask in the wrong way, and you&apos;ll make a
                  loyal client uncomfortable. Here are the five best moments to
                  ask, along with practical advice on framing the request so it
                  feels natural, not transactional.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">
                      After Project Delivery
                    </h4>
                    <p className="text-sm text-slate-400">
                      The moment a project wraps up successfully is the single
                      best time to ask for a referral. The client has just
                      experienced the full value of your work, satisfaction is
                      at its peak, and they&apos;re most likely to have you
                      top-of-mind. Wait 2-5 days after final delivery — long
                      enough for the results to sink in, but not so long that
                      the excitement fades. Frame it as a natural extension of
                      the project: &ldquo;Now that we&apos;ve wrapped up, I
                      wanted to ask...&rdquo; This timing feels organic
                      because the project provides a natural conversation
                      hook.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">
                      After Positive Feedback
                    </h4>
                    <p className="text-sm text-slate-400">
                      When a client proactively tells you they&apos;re happy —
                      via email, a testimonial, a kind word on a call — that
                      is your golden window. They&apos;ve just articulated
                      their satisfaction out loud, which means they&apos;re
                      psychologically primed to back it up with action.
                      Respond to the praise, thank them genuinely, and then
                      bridge to the ask: &ldquo;It means a lot to hear that.
                      If you know anyone who could benefit from similar work,
                      I&apos;d love an introduction.&rdquo; The transition is
                      seamless because they&apos;ve already opened the door
                      by expressing satisfaction.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">
                      At Milestone Achievements
                    </h4>
                    <p className="text-sm text-slate-400">
                      When your work produces measurable results — 50% more
                      leads, a successful product launch, traffic doubling —
                      you have concrete evidence to anchor your referral
                      request. This is powerful because you&apos;re not just
                      asking based on feelings; you&apos;re asking based on
                      proof. Mention the specific result in your request:
                      &ldquo;Since we launched, your site traffic has doubled.
                      If you know anyone who&apos;d want similar results, I&apos;d
                      love to help them too.&rdquo; Data-backed asks convert
                      at a significantly higher rate because they give the
                      client something tangible to share with their contact.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">
                      During Quarterly or Annual Reviews
                    </h4>
                    <p className="text-sm text-slate-400">
                      If you have ongoing clients — retainer arrangements,
                      long-term projects, or recurring work — schedule
                      quarterly or annual check-ins specifically to review
                      progress and discuss future needs. These are natural
                      moments to weave in a referral ask, because you&apos;re
                      already in a reflective, relationship-oriented
                      conversation. It also signals that you value the
                      relationship beyond the transaction, which strengthens
                      loyalty and makes the client more willing to advocate
                      for you.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 sm:col-span-2">
                    <h4 className="text-white font-semibold mb-2">
                      When a Client Mentions They Know Someone
                    </h4>
                    <p className="text-sm text-slate-400">
                      Sometimes the opportunity presents itself. A client says
                      &ldquo;I was talking to my friend who needs a new
                      website&rdquo; or &ldquo;My colleague was complaining
                      about their branding.&rdquo; When this happens, lean
                      in immediately — don&apos;t let the moment pass. Say
                      something like: &ldquo;I&apos;d love to help them out.
                      Would you be comfortable making an introduction?&rdquo;
                      This is the easiest referral scenario because the client
                      has already identified a need and connected it to your
                      services in their mind. All you have to do is make the
                      next step easy for them.
                    </p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 mt-4">
                  <h4 className="text-white font-semibold mb-3">
                    What NOT to Do When Asking for Referrals
                  </h4>
                  <div className="grid sm:grid-cols-3 gap-3">
                    <div className="text-sm">
                      <p className="text-red-400 font-medium mb-1">
                        Don&apos;t be vague
                      </p>
                      <p className="text-slate-400 text-xs">
                        &ldquo;Know anyone who needs help?&rdquo; is too broad.
                        Be specific about who you help and what you do. Give
                        the client a clear picture so they can identify the
                        right person in their network.
                      </p>
                    </div>
                    <div className="text-sm">
                      <p className="text-red-400 font-medium mb-1">
                        Don&apos;t ask too early
                      </p>
                      <p className="text-slate-400 text-xs">
                        Never ask for a referral before the client has
                        experienced the value of your work. Asking mid-project
                        or before delivery is presumptuous and puts the
                        relationship at risk.
                      </p>
                    </div>
                    <div className="text-sm">
                      <p className="text-red-400 font-medium mb-1">
                        Don&apos;t make it about you
                      </p>
                      <p className="text-slate-400 text-xs">
                        Frame the ask around value for the referred person, not
                        your need for new clients. &ldquo;I could really help
                        them&rdquo; beats &ldquo;I need more work&rdquo; every
                        time.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-violet-500/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-violet-400 font-medium mb-2">
                    Pro Tip
                  </p>
                  <p className="text-sm">
                    Build referral asks into your standard project close-out
                    process. When it&apos;s a routine step — not a special
                    request — it feels natural for both you and the client.
                    Add it to your project completion checklist: final
                    delivery, collect feedback (use our{' '}
                    <a
                      href="/tools/client-feedback-survey"
                      className="text-violet-400 hover:underline"
                    >
                      Client Feedback Survey Generator
                    </a>
                    ), then send a referral request 3-5 days later.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3: How InvoiceFlow Helps Build a Referral-Powered Business */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                How InvoiceFlow Helps You Build a Referral-Powered Business
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Generating a referral request email is the first step. But
                  building a sustainable, referral-driven freelance business
                  requires a system — one that tracks which clients are your
                  strongest advocates, automates follow-ups at the right
                  moments, and gives you visibility into how referrals are
                  actually contributing to your revenue. That&apos;s where
                  InvoiceFlow comes in.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-violet-400 text-sm font-bold">
                        01
                      </span>
                      Track Client Satisfaction Signals
                    </h4>
                    <p className="text-sm">
                      InvoiceFlow lets you log client feedback, satisfaction
                      scores, and testimonials alongside your project and
                      invoice data. When you can see at a glance which clients
                      rated you 9/10 or higher, you know exactly who to ask
                      for referrals — and who to follow up with first. No more
                      guessing which clients are happy enough to recommend
                      you. The data tells you, and it takes the awkwardness
                      out of the decision entirely.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-violet-400 text-sm font-bold">
                        02
                      </span>
                      Automated Follow-Up Reminders
                    </h4>
                    <p className="text-sm">
                      The biggest reason freelancers don&apos;t ask for
                      referrals is simply forgetting. InvoiceFlow&apos;s
                      automated workflow triggers a reminder 3-5 days after
                      you mark a project as complete, prompting you to send a
                      referral request. You can customise the timing, set
                      recurring reminders for retainer clients, and ensure
                      that no happy client slips through the cracks without
                      being asked.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-violet-400 text-sm font-bold">
                        03
                      </span>
                      Referral Source Tracking
                    </h4>
                    <p className="text-sm">
                      When a new client comes from a referral, tag them in
                      InvoiceFlow with the referring client&apos;s name. Over
                      time, this builds a clear picture of your referral
                      network — which clients generate the most introductions,
                      which industries produce the highest-value referrals,
                      and what your referral conversion rate actually is. This
                      data helps you focus your referral efforts on the
                      relationships that produce the best results, rather
                      than spreading your energy evenly across all clients.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-violet-400 text-sm font-bold">
                        04
                      </span>
                      Client Relationship Management
                    </h4>
                    <p className="text-sm">
                      Referrals happen in the context of strong relationships.
                      InvoiceFlow&apos;s client management tools let you track
                      every interaction — projects completed, invoices paid,
                      feedback received, referrals made — so you can nurture
                      relationships over the long term. Send a thank-you note
                      when a referral converts. Check in quarterly with your
                      top advocates. The freelancers who build the strongest
                      referral pipelines are the ones who treat their client
                      relationships as assets, not transactions. InvoiceFlow
                      gives you the system to do that consistently.
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-violet-500/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-violet-400 font-medium mb-2">
                    The Referral Flywheel
                  </p>
                  <p className="text-sm">
                    Deliver excellent work. Collect feedback. Ask for referrals.
                    Track the results. Thank the referrer. Repeat. When you
                    systemise this cycle with InvoiceFlow, referrals stop being
                    an occasional bonus and become a predictable, scalable
                    growth engine for your freelance business.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-16 text-center glass rounded-2xl p-10">
            <h3 className="text-3xl font-bold text-white heading-font mb-4">
              Happy clients are your best sales team.{' '}
              <span className="bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent">
                Ask them.
              </span>
            </h3>
            <p className="text-slate-300 max-w-xl mx-auto mb-6">
              InvoiceFlow handles your invoicing, payment tracking, and client
              management — so you can focus on delivering great work and turning
              every satisfied client into a referral source.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/signup"
                className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold hover:opacity-90 transition-opacity"
              >
                Start Free — 5 Invoices/Month
              </Link>
              <Link
                href="/tools/client-feedback-survey"
                className="inline-block px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all"
              >
                Try Client Feedback Survey
              </Link>
            </div>
          </section>
        
        <RelatedTools currentSlug="referral-request-generator" category="Business Analytics" />
      </main>

        <footer className="border-t border-white/10 mt-20 py-8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
            <p>
              &copy; {new Date().getFullYear()} InvoiceFlow. Built in
              Melbourne.
            </p>
            <div className="flex gap-6">
              <Link
                href="/tools"
                className="hover:text-white transition-colors"
              >
                Free Tools
              </Link>
              <Link
                href="/privacy"
                className="hover:text-white transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="hover:text-white transition-colors"
              >
                Terms
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
