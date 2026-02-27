import type { Metadata } from 'next';
import Link from 'next/link';
import FreelanceScorecard from './FreelanceScorecard';
import RelatedTools from '../components/RelatedTools';
import EmailCapture from '../components/EmailCapture';

const title = 'Freelance Business Scorecard | Free Assessment Tool — InvoiceFlow';
const description =
  'Free freelance business scorecard and health assessment. Rate your business across 8 key areas — revenue, clients, pricing, marketing, operations, finances, growth, and work-life balance. Get a personalised score with actionable recommendations. No signup required.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'freelance business scorecard',
    'freelance business health check',
    'freelance business assessment tool',
    'how healthy is my freelance business',
    'freelance business score',
    'sole trader business assessment',
    'freelance business audit tool',
    'freelance success metrics',
    'freelance business checkup',
    'freelance business performance tracker',
  ],
  openGraph: {
    title: 'Freelance Business Scorecard — Free Assessment Tool | InvoiceFlow',
    description:
      'Rate your freelance business across 8 key areas and get a personalised score with actionable recommendations. Free for freelancers — no signup required.',
    url: 'https://www.invoiceflow.au/tools/freelance-scorecard',
    siteName: 'InvoiceFlow',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Freelance Business Scorecard — Free Assessment Tool | InvoiceFlow',
    description:
      'How healthy is your freelance business? Free scorecard across 8 key pillars with personalised grades and recommendations.',
  },
  alternates: {
    canonical: 'https://www.invoiceflow.au/tools/freelance-scorecard',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Freelance Business Scorecard',
  description:
    'Rate your freelance business across 8 key areas — revenue stability, client portfolio, pricing power, marketing pipeline, operational efficiency, financial health, growth trajectory, and work-life sustainability. Get a personalised score with actionable recommendations.',
  url: 'https://www.invoiceflow.au/tools/freelance-scorecard',
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

export default function FreelanceScorecardPage() {
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
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-rose-500/10 border border-rose-500/20 rounded-full mb-6">
              <div className="w-2 h-2 bg-rose-400 rounded-full" />
              <span className="text-rose-400 text-sm font-medium">100% Free</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white heading-font mb-4">
              Freelance Business{' '}
              <span className="bg-gradient-to-r from-rose-400 to-pink-500 bg-clip-text text-transparent">
                Scorecard
              </span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Get a 360-degree health check of your freelance business. Rate yourself across 8
              critical pillars, receive personalised grades for each area, and get actionable
              recommendations to strengthen your operation — all in under 5 minutes.
            </p>
          </div>

          {/* Scorecard Component */}
          <FreelanceScorecard />

          {/* SEO Content Sections */}
          <section className="mt-16 space-y-12">
            {/* Section 1: Why You Need a Freelance Business Scorecard */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Why You Need a Freelance Business Scorecard
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Most freelancers measure their business health by a single metric: revenue. If money
                  is coming in, everything must be fine. But revenue alone is a dangerously incomplete
                  picture. A freelancer earning $180,000 a year from a single client, with no emergency
                  fund, no pipeline, and working 60-hour weeks, is far more fragile than one earning
                  $90,000 from five clients with three months of savings and a waitlist. The first
                  freelancer is one phone call away from crisis. The second has built a resilient
                  business.
                </p>
                <p>
                  A freelance business scorecard forces you to look at your business across multiple
                  dimensions simultaneously — what we call the 8 pillars of freelance business health.
                  Each pillar represents a critical aspect of business sustainability: revenue stability,
                  client portfolio quality, pricing power, marketing pipeline strength, operational
                  efficiency, financial health, growth trajectory, and work-life sustainability.
                  Weakness in any single pillar creates vulnerability, even if the others are strong.
                </p>
                <p>
                  Gut feeling is a notoriously unreliable measure of business health. Humans are
                  remarkably good at normalising slow declines. You might not notice that your client
                  concentration has crept up to dangerous levels, or that you have not raised your rates
                  in two years, or that your emergency fund has been slowly draining. These changes
                  happen gradually, and without a structured assessment, they go undetected until they
                  become crises. A quarterly scorecard catches these trends early, when they are still
                  easy to fix.
                </p>
                <p>
                  This scorecard is designed specifically for freelancers, contractors, and sole traders.
                  It is not a generic small business assessment — it focuses on the unique challenges of
                  running a one-person or small-team service business. The questions are calibrated to
                  surface the issues that actually matter: Are you too dependent on one client? Are you
                  undercharging? Is your pipeline dry? Are you heading toward burnout? These are the
                  questions that determine whether your freelance business will thrive or merely survive.
                </p>
                <p>
                  We recommend completing this scorecard at least once per quarter. Save your results,
                  track your scores over time, and use the recommendations as your quarterly action plan.
                  The freelancers who consistently score above 70% across all 8 pillars tend to have
                  businesses that are not only more profitable, but significantly less stressful to run.
                  They have built systems, diversified their income, priced their work properly, and
                  created enough buffer to weather slow periods without panic.
                </p>
                <p>
                  The assessment takes under 5 minutes to complete. There is no signup required, your
                  data stays in your browser, and you will receive a detailed breakdown with specific
                  recommendations for each area where your score falls below the healthy threshold.
                  Think of it as a business check-up — the kind of honest self-assessment that most
                  freelancers never do, but the successful ones do regularly.
                </p>
              </div>
            </div>

            {/* Section 2: The 8 Pillars of a Thriving Freelance Business */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                The 8 Pillars of a Thriving Freelance Business
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  A truly thriving freelance business is not built on talent alone. It requires
                  strength across eight interconnected dimensions, each reinforcing the others. When
                  all eight pillars are solid, your business becomes resilient to market shifts, client
                  churn, and personal setbacks. When even one pillar is weak, it creates a crack that
                  can widen under pressure. Here is what each pillar represents and why it matters.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-5">
                    <h4 className="text-white font-semibold mb-2">Revenue Stability</h4>
                    <p className="text-sm">
                      Consistent, predictable income is the foundation of a sustainable freelance
                      business. Revenue stability means you can plan ahead, invest in growth, and make
                      decisions from a position of strength rather than desperation. It is measured by
                      month-to-month variance, source diversification, and year-over-year growth
                      trajectory. Freelancers with strong revenue stability typically have a mix of
                      retainers, repeat project clients, and growing income streams.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-5">
                    <h4 className="text-white font-semibold mb-2">Client Portfolio</h4>
                    <p className="text-sm">
                      Your clients are your business&apos;s most important asset, and the quality of
                      your client portfolio matters more than the quantity. High retention rates, a
                      well-defined ideal client profile, and consistently positive feedback indicate a
                      healthy portfolio. When you know exactly who you serve best and attract those
                      clients reliably, you spend less time on sales, deliver better results, and
                      command higher rates.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-5">
                    <h4 className="text-white font-semibold mb-2">Pricing Power</h4>
                    <p className="text-sm">
                      Pricing power is your ability to charge what you are worth and have clients pay
                      it without significant pushback. It reflects your market positioning, confidence,
                      and the perceived value of your work. Freelancers with strong pricing power raise
                      their rates regularly, charge at or above market rates, and rarely face pricing
                      objections. Weak pricing power often stems from imposter syndrome, poor
                      positioning, or working in a commoditised market.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-5">
                    <h4 className="text-white font-semibold mb-2">Marketing Pipeline</h4>
                    <p className="text-sm">
                      A strong marketing pipeline means you always know where your next client is
                      coming from. It is the difference between scrambling for work when a project ends
                      and choosing from a waitlist. This pillar evaluates your lead generation systems,
                      pipeline depth, and online presence. Freelancers who score well here have built
                      repeatable channels — whether through content marketing, referral systems, SEO,
                      or strategic networking.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-5">
                    <h4 className="text-white font-semibold mb-2">Operational Efficiency</h4>
                    <p className="text-sm">
                      Every hour you spend on admin is an hour not spent on billable work or business
                      development. Operational efficiency measures how well you have systematised the
                      non-creative parts of your business — invoicing, contracts, project management,
                      communication, and bookkeeping. The most efficient freelancers spend fewer than
                      three hours per week on admin because they have invested in tools and templates
                      that handle the repetitive work.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-5">
                    <h4 className="text-white font-semibold mb-2">Financial Health</h4>
                    <p className="text-sm">
                      Financial health goes beyond revenue. It encompasses your emergency reserves, tax
                      preparedness, and understanding of your actual profit margin. Many freelancers
                      earn good revenue but have no savings, get blindsided by tax bills, and have no
                      idea what percentage of their income they actually keep. Strong financial health
                      means you have a buffer, your taxes are handled, and you know your numbers.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-5">
                    <h4 className="text-white font-semibold mb-2">Growth Trajectory</h4>
                    <p className="text-sm">
                      Growth trajectory measures whether your business is evolving or stagnating. It
                      evaluates your investment in professional development, whether you are building
                      income-generating assets beyond pure services, and whether you have a strategic
                      plan. Freelancers who score well here are not just working in their business —
                      they are working on it. They are building courses, templates, productised
                      services, or other assets that create leverage.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-5">
                    <h4 className="text-white font-semibold mb-2">Work-Life Sustainability</h4>
                    <p className="text-sm">
                      The final pillar is often the most neglected, but it determines how long you can
                      sustain your freelance career. Working 55+ hours a week, never taking holidays,
                      and living in a state of constant stress is not a badge of honour — it is a
                      countdown to burnout. Sustainable freelancing means consistent hours under 45 per
                      week, regular time off, and manageable stress levels. This is not optional — it
                      is the pillar that keeps all the others from collapsing.
                    </p>
                  </div>
                </div>
                <p className="mt-4">
                  The radar chart generated by this scorecard gives you an instant visual of where your
                  business is balanced and where it is lopsided. A wide, even shape indicates a
                  resilient business. A spiky, uneven shape reveals vulnerabilities. The goal is not
                  perfection in every area — it is steady, intentional progress toward a more balanced
                  and sustainable operation.
                </p>
              </div>
            </div>

            {/* Section 3: How InvoiceFlow Improves Your Business Score */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                How InvoiceFlow Improves Your Business Score
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Your scorecard results are not just a diagnosis — they are a roadmap. And several of
                  the most common weak areas for freelancers are directly addressable with the right
                  tools. InvoiceFlow was built specifically to strengthen the pillars that most
                  freelancers struggle with: operational efficiency, financial health, revenue
                  stability, and cash flow management.
                </p>
                <p>
                  <strong className="text-white">Operational Efficiency:</strong> If you scored low on
                  operational efficiency, you are almost certainly spending too much time on invoicing,
                  payment tracking, and financial admin. InvoiceFlow automates invoice creation, sends
                  professional invoices in seconds, and tracks payment status automatically. Freelancers
                  who switch from manual invoicing to InvoiceFlow typically recover 4-6 hours per month
                  — time that goes directly back into billable work or business development. Automated
                  payment reminders mean you never have to awkwardly chase a client for payment again.
                  The system handles it professionally and consistently, every time.
                </p>
                <p>
                  <strong className="text-white">Financial Health:</strong> Knowing your profit margin,
                  tracking your revenue trends, and understanding your cash position are fundamental to
                  financial health. InvoiceFlow provides a real-time dashboard showing your outstanding
                  invoices, average payment times, monthly revenue trends, and client-by-client
                  breakdowns. Instead of logging into your bank account and trying to piece together
                  your financial picture from transaction data, you get a clean, purpose-built view of
                  your freelance finances. This visibility makes it dramatically easier to set aside
                  money for tax, spot declining revenue early, and track which clients are most
                  profitable.
                </p>
                <p>
                  <strong className="text-white">Revenue Stability and Client Portfolio:</strong>{' '}
                  InvoiceFlow&apos;s client analytics help you understand your revenue concentration
                  at a glance. You can see exactly what percentage of your income comes from each
                  client, identify clients whose spending is declining, and spot opportunities to
                  upsell or cross-sell existing clients. This data-driven view of your client portfolio
                  is essential for making smart decisions about where to focus your business
                  development efforts. If your largest client represents 50% of your revenue,
                  InvoiceFlow will make that concentration visible before it becomes a crisis.
                </p>
                <p>
                  <strong className="text-white">Work-Life Sustainability:</strong> The time you save
                  on admin directly improves your work-life balance. When invoicing takes 30 seconds
                  instead of 30 minutes, when payment reminders send themselves, and when your
                  financial reporting is automatic, you reclaim hours every week. Those hours can go
                  toward shorter working days, more time off, or simply reducing the mental load of
                  running your business. Many freelancers underestimate how much cognitive energy goes
                  into admin tasks — even when the actual time is modest, the mental overhead of
                  remembering to send invoices, chase payments, and reconcile records creates
                  low-grade stress that compounds over time.
                </p>
                <p>
                  The combination of automated invoicing, payment tracking, client analytics, and
                  financial reporting means InvoiceFlow directly improves at least four of the eight
                  pillars measured by this scorecard. It will not fix your pricing strategy or write
                  your business plan — but it will give you the operational foundation and financial
                  visibility to focus on those higher-level decisions with confidence. Try the{' '}
                  <Link href="/tools/business-health-score" className="text-rose-400 hover:underline">
                    Business Health Score
                  </Link>{' '}
                  tool for a complementary six-question quick assessment, or explore our full suite
                  of{' '}
                  <Link href="/tools" className="text-rose-400 hover:underline">
                    free freelance tools
                  </Link>{' '}
                  to start strengthening your business today.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="mt-16 text-center glass rounded-2xl p-10">
            <h3 className="text-3xl font-bold text-white heading-font mb-4">
              Score it. Fix it.{' '}
              <span className="bg-gradient-to-r from-rose-400 to-pink-500 bg-clip-text text-transparent">
                Grow it.
              </span>
            </h3>
            <p className="text-slate-300 max-w-xl mx-auto mb-6">
              Your scorecard is the diagnosis. InvoiceFlow is the treatment. Automated invoicing,
              payment tracking, client analytics, and financial reporting — all built for freelancers
              who want a stronger, more resilient business.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/signup"
                className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-rose-500 to-pink-500 text-white font-semibold hover:opacity-90 transition-opacity"
              >
                Start Free — 5 Invoices/Month
              </Link>
              <Link
                href="/tools/business-health-score"
                className="inline-block px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all"
              >
                Try Business Health Score
              </Link>
            </div>
          </section>
        
        <RelatedTools currentSlug="freelance-scorecard" category="Business Analytics" />
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
