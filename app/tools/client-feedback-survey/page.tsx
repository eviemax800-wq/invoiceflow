import type { Metadata } from 'next';
import Link from 'next/link';
import ClientFeedbackSurvey from './ClientFeedbackSurvey';
import RelatedTools from '../components/RelatedTools';

const title =
  'Client Feedback Survey Generator | Free Template — InvoiceFlow';
const description =
  'Free client feedback survey generator for freelancers. Create professional post-project surveys to collect testimonials, measure satisfaction, and identify improvement areas. Customised to your service type.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'client feedback form template freelancer',
    'customer satisfaction survey freelance',
    'post project feedback form',
    'client testimonial request template',
    'freelance feedback survey generator',
    'project review form template',
    'client satisfaction questionnaire',
    'freelance client review template',
    'service feedback form generator',
    'post engagement survey freelancer',
  ],
  openGraph: {
    title: 'Client Feedback Survey Generator — Free Tool | InvoiceFlow',
    description:
      'Create professional client feedback surveys for freelancers. Collect testimonials, measure satisfaction, and identify improvement areas. Free — no signup required.',
    url: 'https://www.invoiceflow.au/tools/client-feedback-survey',
    siteName: 'InvoiceFlow',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Client Feedback Survey Generator — Free Tool | InvoiceFlow',
    description:
      'Create professional client feedback surveys for freelancers. Collect testimonials, measure satisfaction, and identify improvement areas.',
  },
  alternates: {
    canonical: 'https://www.invoiceflow.au/tools/client-feedback-survey',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Client Feedback Survey Generator',
  description:
    'Create professional client feedback surveys for freelancers. Generate post-project questionnaires to collect testimonials, measure client satisfaction, and identify areas for improvement. Customised to your service type.',
  url: 'https://www.invoiceflow.au/tools/client-feedback-survey',
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

export default function ClientFeedbackSurveyPage() {
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
              Client Feedback Survey{' '}
              <span className="gradient-text">Generator</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Create a professional post-project feedback survey customised to your service type.
              Collect testimonials, measure client satisfaction, and identify areas for improvement
              — ready to send the moment a project wraps up.
            </p>
          </div>

          {/* Generator Tool */}
          <ClientFeedbackSurvey />

          {/* SEO Content Sections */}
          <section className="mt-16 space-y-12">
            {/* Section 1: Why Freelancers Should Collect Client Feedback */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Why Freelancers Should Collect Client Feedback
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Most freelancers finish a project, send the final invoice, and move on. They never
                  ask the client how it went. That&apos;s a missed opportunity — structured feedback
                  is one of the highest-leverage activities you can build into your workflow.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-sm font-bold">01</span>
                      Testimonials for Marketing
                    </h4>
                    <p className="text-sm">
                      A well-timed feedback survey naturally produces testimonials you can use on your
                      website, LinkedIn profile, and proposals. Clients are most willing to share praise
                      within the first few days after a successful delivery — capture it while the
                      experience is fresh.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-sm font-bold">02</span>
                      Identify Blind Spots
                    </h4>
                    <p className="text-sm">
                      You might think communication was seamless, but the client felt left in the dark
                      during week two. Without asking, you&apos;ll never know. Structured questions
                      surface issues you can&apos;t see from your side of the project — and fixing
                      them before the next engagement makes you measurably better.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-sm font-bold">03</span>
                      Increase Repeat Business
                    </h4>
                    <p className="text-sm">
                      Asking for feedback signals that you care about the relationship, not just the
                      transaction. Clients who feel heard are significantly more likely to return for
                      future projects and refer you to their network. It&apos;s a retention strategy
                      disguised as a survey.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-sm font-bold">04</span>
                      Build Portfolio Evidence
                    </h4>
                    <p className="text-sm">
                      Quantified satisfaction scores (e.g., &ldquo;9/10 overall satisfaction across 15
                      projects&rdquo;) add credibility to your portfolio and proposals. They transform
                      vague claims like &ldquo;clients love my work&rdquo; into data-backed statements
                      that win new business.
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-teal-500/10 to-blue-500/10 border border-teal-500/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-teal-400 font-medium mb-2">The Bottom Line</p>
                  <p className="text-sm">
                    Freelancers who systematically collect feedback close more deals, retain more
                    clients, and raise their rates with confidence. It takes five minutes to send a
                    survey — and the compounding returns are enormous.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2: How to Ask Clients for Feedback Without Being Awkward */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                How to Ask Clients for Feedback Without Being Awkward
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Many freelancers avoid asking for feedback because it feels uncomfortable — like
                  fishing for compliments or inviting criticism. Here&apos;s how to make it natural
                  and professional:
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Timing Is Everything</h4>
                    <p className="text-sm text-slate-400">
                      Send the survey 1-3 days after final delivery — close enough that the project is
                      fresh in their mind, but not so immediate that they feel pressured. Avoid sending
                      it the same day as the final invoice; space them out so neither feels transactional.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Frame It as Improvement, Not Ego</h4>
                    <p className="text-sm text-slate-400">
                      Lead with &ldquo;I&apos;m always looking to improve my process&rdquo; rather than
                      &ldquo;Can you tell me how great I was?&rdquo; When clients see the survey is
                      genuinely about getting better, they&apos;re more honest and more willing to
                      participate. The best feedback comes from a growth-oriented framing.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Keep It Short</h4>
                    <p className="text-sm text-slate-400">
                      A 5-question survey gets completed. A 30-question survey gets ignored. Respect
                      your client&apos;s time — aim for something they can finish in under 5 minutes.
                      If you need detailed feedback, use a short survey first and follow up with a
                      call for clients who are willing to go deeper.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Make It Easy to Complete</h4>
                    <p className="text-sm text-slate-400">
                      Use rating scales and multiple-choice questions over open-ended essays. Provide
                      clear instructions and a simple way to return the survey — reply-to-email is
                      ideal. The fewer barriers you create, the higher your completion rate will be.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 sm:col-span-2">
                    <h4 className="text-white font-semibold mb-2">What to Do with Negative Feedback</h4>
                    <p className="text-sm text-slate-400">
                      Negative feedback is a gift — it tells you exactly where to improve. Don&apos;t
                      get defensive. Thank the client for their honesty, acknowledge the issue, and
                      explain what you&apos;ll do differently next time. Clients who see you act on
                      their feedback become your most loyal advocates. The worst outcome isn&apos;t
                      criticism — it&apos;s a client who silently never comes back.
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-teal-500/10 to-blue-500/10 border border-teal-500/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-teal-400 font-medium mb-2">Pro Tip</p>
                  <p className="text-sm">
                    Build feedback into your standard project close-out process. When it&apos;s a
                    routine step — not a special request — clients expect it and respond faster. Add
                    a line to your project kickoff email: &ldquo;At the end of this project,
                    I&apos;ll send a brief feedback survey to make sure everything met your
                    expectations.&rdquo;
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3: Using Client Feedback to Grow Your Freelance Business */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Using Client Feedback to Grow Your Freelance Business
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Collecting feedback is only half the equation. The real value comes from what you
                  do with it. Here are five ways to turn client responses into tangible business
                  growth:
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-sm font-bold">01</span>
                      Testimonials on Your Website and LinkedIn
                    </h4>
                    <p className="text-sm">
                      Pull the strongest quotes from survey responses and display them prominently on
                      your portfolio, LinkedIn featured section, and project proposals. Always ask
                      permission before publishing, and include the client&apos;s name and company
                      for maximum credibility.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-sm font-bold">02</span>
                      Identify Upsell Opportunities
                    </h4>
                    <p className="text-sm">
                      Feedback surveys often reveal unmet needs. A client who says &ldquo;I wish we
                      could have also covered social media&rdquo; is telling you exactly what to pitch
                      next. Use the follow-up project interest question to surface warm leads for
                      additional work without a hard sell.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-sm font-bold">03</span>
                      Improve Your Processes
                    </h4>
                    <p className="text-sm">
                      If multiple clients flag the same issue — slow response times, unclear project
                      updates, scope creep — that&apos;s a systemic problem worth fixing. Track
                      recurring themes across surveys and build process improvements into your
                      workflow. Incremental fixes compound into a dramatically better client experience.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-sm font-bold">04</span>
                      Raise Rates with Evidence
                    </h4>
                    <p className="text-sm">
                      &ldquo;My clients rate me 9.2/10 on average&rdquo; is a powerful justification
                      for a rate increase. Satisfaction data removes the guesswork from pricing
                      conversations and gives you confidence that your work justifies premium rates.
                      Use our{' '}
                      <a href="/tools/price-increase-letter" className="text-teal-400 hover:underline">
                        Price Increase Letter Generator
                      </a>{' '}
                      when you&apos;re ready.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 sm:col-span-2">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-sm font-bold">05</span>
                      Create Case Studies
                    </h4>
                    <p className="text-sm">
                      Combine project details with client feedback to build compelling case studies.
                      A case study that includes &ldquo;The client rated communication 10/10 and
                      deliverable quality 9/10&rdquo; is far more persuasive than one without
                      measurable outcomes. These become your most powerful sales assets for winning
                      larger projects and higher-value clients.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 4: The Net Promoter Score (NPS) for Freelancers */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                The Net Promoter Score (NPS) for Freelancers
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  The Net Promoter Score is the gold standard for measuring client loyalty. Originally
                  developed for large enterprises, it&apos;s equally powerful for freelancers — and
                  this survey generator includes an NPS question by default.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">What Is NPS?</h4>
                    <p className="text-sm text-slate-400">
                      NPS is based on a single question: &ldquo;On a scale of 0-10, how likely are
                      you to recommend [your service] to a colleague or friend?&rdquo; Respondents
                      are grouped into three categories: Promoters (9-10), Passives (7-8), and
                      Detractors (0-6). Your NPS is the percentage of Promoters minus the percentage
                      of Detractors, giving you a score from -100 to +100.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">How to Calculate It</h4>
                    <p className="text-sm text-slate-400">
                      If you&apos;ve surveyed 10 clients and 7 gave you a 9 or 10 (Promoters), 2 gave
                      you a 7 or 8 (Passives), and 1 gave you a 0-6 (Detractor), your NPS is: 70% -
                      10% = 60. That&apos;s an excellent score. Track this number over time to see
                      whether your client satisfaction is improving, stable, or declining.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Benchmarks for Service Businesses</h4>
                    <p className="text-sm text-slate-400">
                      For professional services, an NPS of 30-50 is good, 50-70 is excellent, and
                      70+ is world-class. Most freelancers who actively collect NPS data score between
                      50-80, because the personal nature of freelance work tends to generate strong
                      client relationships. If your NPS is below 30, there are systemic issues to
                      address.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Using Detractor and Promoter Feedback</h4>
                    <p className="text-sm text-slate-400">
                      Detractors tell you where to fix things — follow up personally and ask what went
                      wrong. Promoters tell you what to double down on — ask them for testimonials and
                      referrals. Passives are the most actionable group: they&apos;re satisfied but
                      not enthusiastic. A small improvement could convert them into promoters who
                      actively refer new business to you.
                    </p>
                  </div>
                </div>
                <div className="overflow-x-auto mt-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-3 px-4 text-slate-400 font-semibold">NPS Score</th>
                        <th className="text-left py-3 px-4 text-slate-400 font-semibold">Rating</th>
                        <th className="text-left py-3 px-4 text-slate-400 font-semibold">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      <tr>
                        <td className="py-3 px-4 text-white font-medium">70+</td>
                        <td className="py-3 px-4">World-class</td>
                        <td className="py-3 px-4">Ask promoters for referrals and case studies</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-white font-medium">50-69</td>
                        <td className="py-3 px-4">Excellent</td>
                        <td className="py-3 px-4">Collect testimonials and raise rates confidently</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-white font-medium">30-49</td>
                        <td className="py-3 px-4">Good</td>
                        <td className="py-3 px-4">Focus on converting passives to promoters</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-white font-medium">0-29</td>
                        <td className="py-3 px-4">Needs work</td>
                        <td className="py-3 px-4">Follow up with detractors and fix systemic issues</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-white font-medium">Below 0</td>
                        <td className="py-3 px-4">Critical</td>
                        <td className="py-3 px-4">Major service overhaul needed before taking new clients</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-16 text-center glass rounded-2xl p-10">
            <h3 className="text-3xl font-bold text-white heading-font mb-4">
              Collect feedback and{' '}
              <span className="gradient-text">grow your freelance business</span>
            </h3>
            <p className="text-slate-300 max-w-xl mx-auto mb-6">
              InvoiceFlow handles your invoicing, payment tracking, and client management — so you
              can focus on delivering great work and building lasting client relationships.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/signup"
                className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold hover:opacity-90 transition-opacity"
              >
                Start Free — 5 Invoices/Month
              </Link>
              <Link
                href="/tools/quote-calculator"
                className="inline-block px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all"
              >
                Try Quote Calculator
              </Link>
            </div>
          </section>
        
        <RelatedTools currentSlug="client-feedback-survey" category="Business Analytics" />
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
