import type { Metadata } from 'next';
import Link from 'next/link';
import AnnualBusinessReview from './AnnualBusinessReview';
import RelatedTools from '../components/RelatedTools';
import EmailCapture from '../components/EmailCapture';
import BreadcrumbSchema from '../components/BreadcrumbSchema';

const title =
  'Annual Business Review Generator | Free Freelance Tool — InvoiceFlow';
const description =
  'Free annual business review generator for Australian freelancers and sole traders. Create a professional year-in-review report with revenue analysis, client metrics, wins, lessons, and goals for next year. No signup required.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'freelance annual review template',
    'business review generator',
    'year in review template freelancer',
    'sole trader annual review',
    'freelance business report template',
    'end of year business review',
    'freelance year review template',
    'annual business review template',
    'freelance performance review',
    'business health review freelancer',
  ],
  openGraph: {
    title:
      'Annual Business Review Generator — Free Freelance Tool | InvoiceFlow',
    description:
      'Create a professional year-in-review report with revenue analysis, client metrics, wins, lessons, and goals. Free for Australian freelancers — no signup required.',
    url: 'https://www.invoiceflow.au/tools/annual-business-review',
    siteName: 'InvoiceFlow',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Annual Business Review Generator — Free Freelance Tool | InvoiceFlow',
    description:
      'Generate a professional annual business review with revenue analysis, client metrics, and growth goals. Free for Australian freelancers.',
  },
  alternates: {
    canonical: 'https://www.invoiceflow.au/tools/annual-business-review',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Annual Business Review Generator for Freelancers',
  description:
    'A 5-step annual business review generator that helps freelancers create professional year-in-review reports. Covers business overview, revenue and financials, clients and services, wins, lessons, and goals. Generates a formatted report with executive summary, revenue analysis, client portfolio breakdown, service mix, and next-year plan. Includes quarterly revenue charts and colour-coded performance metrics. Free — no signup required.',
  url: 'https://www.invoiceflow.au/tools/annual-business-review',
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

export default function AnnualBusinessReviewPage() {
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
              <div className="w-8 h-8 bg-gradient-to-br from-sky-400 to-blue-500 rounded-lg flex items-center justify-center">
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
                className="px-4 py-2 bg-gradient-to-r from-sky-400 to-blue-500 text-white text-sm font-medium rounded-lg hover:from-sky-300 hover:to-blue-400 transition-all"
              >
                Get Started
              </Link>
            </nav>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sky-500/10 border border-sky-500/20 rounded-full mb-6">
              <div className="w-2 h-2 bg-sky-400 rounded-full" />
              <span className="text-sky-400 text-sm font-medium">
                100% Free
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white heading-font mb-4">
              Annual Business{' '}
              <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
                Review Generator
              </span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Create a professional year-in-review report for your freelance
              business. Analyse revenue, review clients, celebrate wins, learn
              from challenges, and set informed goals for the year ahead.
            </p>
          </div>

          {/* Tool */}
          <AnnualBusinessReview />

          {/* SEO Content Sections */}
          <section className="mt-16 space-y-12">
            {/* Section 1: Why Every Freelancer Needs an Annual Business Review */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Why Every Freelancer Needs an Annual Business Review
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Most freelancers just wing it year to year. They have a vague
                  sense of whether things are &quot;going well&quot; or
                  &quot;could be better,&quot; but they never sit down and
                  actually measure what happened. This is like running a
                  business with the dashboard lights covered up — you might feel
                  the engine running, but you have no idea if you&apos;re about
                  to overheat or run out of fuel.
                </p>
                <p>
                  An annual business review is the single most valuable exercise
                  you can do as a freelancer. It forces you to look at the
                  numbers honestly, identify what actually drove your revenue
                  (versus what you think drove it), and make decisions about next
                  year based on evidence rather than gut feeling. The freelancers
                  who consistently grow their income year over year almost always
                  have some form of structured annual reflection.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">
                      Identify Your Best Clients
                    </h4>
                    <p className="text-sm">
                      When you review client data across an entire year, patterns
                      emerge that are invisible month to month. You&apos;ll
                      discover which clients generated the most revenue, which
                      ones were the most profitable per hour, and which ones
                      consumed disproportionate time relative to what they paid.
                      This clarity lets you intentionally seek more of your best
                      clients and gracefully phase out the ones dragging your
                      business down.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">
                      Calculate Your True Hourly Rate
                    </h4>
                    <p className="text-sm">
                      Your quoted rate and your actual effective hourly rate are
                      almost never the same number. Scope creep, unpaid revisions,
                      admin time, and project overruns all erode your real
                      earnings. An annual review that divides total revenue by
                      total hours worked gives you the honest number — and that
                      number is what should drive your pricing decisions for next
                      year.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">
                      Spot Revenue Trends and Seasonality
                    </h4>
                    <p className="text-sm">
                      Quarterly revenue data reveals seasonality you might not
                      have noticed. Many freelancers experience a slowdown in
                      December-January and a surge in March-April as businesses
                      finalise budgets. Knowing your seasonal pattern lets you
                      plan cash reserves for quiet months and double down on
                      marketing before your busy season. It also helps you avoid
                      the panic of a slow month that is actually perfectly normal
                      for your business cycle.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">
                      Set Informed Goals (Not Wishful Thinking)
                    </h4>
                    <p className="text-sm">
                      Goals set without data are just wishes. When you know that
                      you grew revenue 15% last year by adding three new clients
                      and raising your rate by $10/hour, you can set a realistic
                      target for next year based on similar levers. Top
                      freelancers who conduct annual reviews regularly report 2-3x
                      revenue growth over a five-year period compared to those who
                      never review — because informed goals lead to focused action,
                      and focused action compounds over time.
                    </p>
                  </div>
                </div>
                <p>
                  The review process does not need to be complicated or
                  time-consuming. Set aside 60-90 minutes at the end of your
                  financial year, gather your numbers, and use this generator to
                  create a structured document you can reference throughout the
                  next twelve months. The ROI on that 90 minutes is enormous.
                </p>
              </div>
            </div>

            {/* Section 2: What to Include in Your Freelance Annual Review */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                What to Include in Your Freelance Annual Review
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  A comprehensive annual review covers eight key areas. You
                  do not need to go deep on every single one — focus on the
                  areas most relevant to your business stage and goals. But
                  at minimum, touch on each so you have a complete picture.
                </p>
                <div className="space-y-6 mt-4">
                  <div className="bg-white/5 rounded-xl p-5">
                    <h4 className="text-white font-semibold mb-2">
                      1. Revenue and Income Analysis
                    </h4>
                    <p className="text-sm">
                      This is the foundation. Total revenue, total expenses,
                      net profit, and profit margin. Compare against last year
                      if you have data. Calculate your average invoice value,
                      your collection rate (invoices paid versus sent), and
                      your revenue per client. These numbers tell you whether
                      your business is growing, stagnant, or declining — and
                      more importantly, they tell you <em>why</em>. A 20%
                      revenue increase driven by one large client is very
                      different from a 20% increase driven by ten new small
                      clients.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-5">
                    <h4 className="text-white font-semibold mb-2">
                      2. Client Portfolio Review
                    </h4>
                    <p className="text-sm">
                      How many clients did you work with? How many were new
                      versus repeat? What was your client retention rate?
                      Freelancers with high retention rates (above 80%) tend
                      to have more stable and predictable income. If your
                      retention is low, investigate why — are clients leaving
                      because of pricing, quality, communication, or simply
                      because they were one-off projects? Understanding your
                      client mix helps you decide whether to invest in
                      acquisition (finding new clients) or retention (keeping
                      existing ones).
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-5">
                    <h4 className="text-white font-semibold mb-2">
                      3. Service Mix Analysis
                    </h4>
                    <p className="text-sm">
                      What services did you offer? Which ones generated the
                      most revenue? Did you add or drop any services during
                      the year? Service mix analysis often reveals that 80%
                      of revenue comes from 20% of your services. This is
                      useful for deciding where to focus your marketing and
                      whether to specialise further or diversify. If one
                      service is significantly more profitable than others,
                      it might be worth repositioning your entire business
                      around it.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-5">
                    <h4 className="text-white font-semibold mb-2">
                      4. Pricing Effectiveness
                    </h4>
                    <p className="text-sm">
                      Did you raise your rates this year? If so, did you lose
                      any clients as a result, or did they accept the increase
                      without pushback? What was your effective hourly rate
                      (total revenue divided by total hours worked)? Pricing
                      is the highest-leverage thing you can change in a
                      freelance business. A 10% rate increase on the same
                      client base drops straight to your bottom line with zero
                      additional work.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-5">
                    <h4 className="text-white font-semibold mb-2">
                      5. Operational Efficiency
                    </h4>
                    <p className="text-sm">
                      How much time did you spend on non-billable activities —
                      invoicing, quoting, admin, chasing payments? Did you
                      invest in any tools or systems that saved time? Operational
                      improvements compound over years. Automating your invoicing
                      saves 2 hours a week, which is 100+ hours a year — the
                      equivalent of two and a half extra billable weeks.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-5">
                    <h4 className="text-white font-semibold mb-2">
                      6. Professional Development
                    </h4>
                    <p className="text-sm">
                      What new skills did you learn? What courses, certifications,
                      or training did you complete? Which skills directly
                      contributed to winning new work or increasing your rate?
                      Professional development is an investment — track the return
                      on it like any other business expense.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-5">
                    <h4 className="text-white font-semibold mb-2">
                      7. Work-Life Balance Assessment
                    </h4>
                    <p className="text-sm">
                      Freelancing burnout is real and common. How many hours did
                      you work per week on average? Did you take adequate leave?
                      Were there periods where work consumed your weekends or
                      evenings? A sustainable business is one that does not
                      require you to sacrifice your health, relationships, or
                      mental wellbeing. If the numbers show you worked 55-hour
                      weeks to earn the same as a 40-hour employee role, something
                      needs to change.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-5">
                    <h4 className="text-white font-semibold mb-2">
                      8. Market Positioning
                    </h4>
                    <p className="text-sm">
                      How does your pricing compare to the market? Are your
                      services in growing or declining demand? Did any industry
                      trends affect your work this year? Understanding your
                      position in the market helps you anticipate changes rather
                      than react to them. If AI tools are transforming your
                      industry, for example, your annual review should include a
                      plan for how you will adapt — whether that means adopting
                      those tools, pivoting your service mix, or doubling down on
                      the human elements that cannot be automated.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3: How InvoiceFlow Makes Annual Reviews Easy */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                How InvoiceFlow Makes Annual Reviews Easy
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  The hardest part of an annual review is not the analysis — it
                  is gathering the data. If your invoices are scattered across
                  email threads, PDFs in random folders, and half-remembered
                  bank transfers, pulling together accurate numbers for a full
                  year is painful enough that most freelancers simply skip it.
                  InvoiceFlow eliminates that data-gathering problem entirely.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-gradient-to-br from-sky-500/10 to-blue-500/10 border border-sky-500/20 rounded-xl p-5">
                    <h4 className="text-white font-semibold mb-2">
                      Automatic Revenue Tracking
                    </h4>
                    <p className="text-sm">
                      Every invoice you send through InvoiceFlow is automatically
                      logged with the amount, date, client, and payment status.
                      At the end of the year, your total revenue, average invoice
                      value, and collection rate are available at the click of a
                      button — no spreadsheets, no manual tallying, no missed
                      invoices. You can filter by date range, client, or status
                      to slice the data any way you need.
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-sky-500/10 to-blue-500/10 border border-sky-500/20 rounded-xl p-5">
                    <h4 className="text-white font-semibold mb-2">
                      Client Analytics Dashboard
                    </h4>
                    <p className="text-sm">
                      InvoiceFlow tracks which clients generate the most
                      revenue, how frequently they engage you, and their
                      average project value. The client analytics dashboard
                      gives you the retention rate, new versus repeat client
                      breakdown, and revenue concentration data you need for a
                      thorough portfolio review. Knowing that 60% of your
                      revenue comes from two clients is critical information for
                      risk management and growth planning.
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-sky-500/10 to-blue-500/10 border border-sky-500/20 rounded-xl p-5">
                    <h4 className="text-white font-semibold mb-2">
                      Complete Invoice History
                    </h4>
                    <p className="text-sm">
                      Need to check a specific project&apos;s value from eight
                      months ago? InvoiceFlow keeps your complete invoice history
                      searchable and accessible. You can review invoice details,
                      payment timelines, and outstanding amounts instantly. This
                      history is also invaluable for tax time — your accountant
                      will thank you for having clean, organised records instead
                      of a shoebox of receipts.
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-sky-500/10 to-blue-500/10 border border-sky-500/20 rounded-xl p-5">
                    <h4 className="text-white font-semibold mb-2">
                      Export and Year-Over-Year Comparison
                    </h4>
                    <p className="text-sm">
                      Export your data to CSV for your accountant or import it
                      into your own spreadsheets for deeper analysis. Once you
                      have been using InvoiceFlow for two or more years, the
                      year-over-year comparison features become incredibly
                      powerful — you can track revenue growth, client retention
                      trends, pricing effectiveness, and seasonal patterns across
                      multiple financial years. This longitudinal view is what
                      separates freelancers who grow strategically from those who
                      just survive.
                    </p>
                  </div>
                </div>
                <p>
                  The free annual review generator on this page works brilliantly
                  as a standalone tool. But when you pair it with InvoiceFlow&apos;s
                  automated data collection, the annual review process goes from
                  a 90-minute data-gathering exercise to a 15-minute strategic
                  reflection — because all the numbers are already there waiting
                  for you.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-16 text-center glass rounded-2xl p-10">
            <h3 className="text-3xl font-bold text-white heading-font mb-4">
              Know your numbers.{' '}
              <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
                Grow your business.
              </span>
            </h3>
            <p className="text-slate-300 max-w-xl mx-auto mb-6">
              InvoiceFlow tracks your revenue, clients, and invoices
              automatically — so your next annual review writes itself. Start
              today and have a full year of clean data for next year&apos;s review.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/signup"
                className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-sky-400 to-blue-500 text-white font-semibold hover:opacity-90 transition-opacity"
              >
                Start Free — 5 Invoices/Month
              </Link>
              <Link
                href="/tools/revenue-goal-planner"
                className="inline-block px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all"
              >
                Try the Revenue Goal Planner
              </Link>
            </div>
          </section>
        
        <RelatedTools currentSlug="annual-business-review" category="Business Analytics" />
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
