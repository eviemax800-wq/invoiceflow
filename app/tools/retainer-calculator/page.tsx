import type { Metadata } from 'next';
import Link from 'next/link';
import RetainerCalculator from './RetainerCalculator';
import RelatedTools from '../components/RelatedTools';
import EmailCapture from '../components/EmailCapture';
import BreadcrumbSchema from '../components/BreadcrumbSchema';
import FAQSchema from '../components/FAQSchema';

const title = 'Client Retainer Calculator Australia | Monthly Retainer Pricing — InvoiceFlow';
const description =
  'Free retainer calculator for Australian freelancers. Calculate monthly retainer pricing, compare retainer tiers, and project annual revenue from retainer clients.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'freelance retainer calculator',
    'how to price a retainer',
    'monthly retainer pricing',
    'retainer agreement calculator australia',
    'freelance retainer model',
    'retainer vs hourly',
  ],
  openGraph: {
    title: 'Client Retainer Calculator — Free Tool | InvoiceFlow',
    description:
      'Calculate your ideal retainer pricing, compare tiers, and see how retainer clients build predictable income. Free for Australian freelancers.',
    url: 'https://www.invoiceflow.au/tools/retainer-calculator',
    siteName: 'InvoiceFlow',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Client Retainer Calculator — Free Tool | InvoiceFlow',
    description:
      'How much should you charge for a retainer? Free Australian freelance retainer pricing calculator.',
  },
  alternates: {
    canonical: 'https://www.invoiceflow.au/tools/retainer-calculator',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Client Retainer Calculator Australia',
  description:
    'Calculate monthly retainer pricing, compare retainer tiers, and project annual revenue from retainer clients. Built for Australian freelancers.',
  url: 'https://www.invoiceflow.au/tools/retainer-calculator',
  applicationCategory: 'FinanceApplication',
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
    answer: "Yes, this tool is completely free with no registration needed. All calculations are performed privately in your browser."
  },
  {
    question: "How accurate are the calculations?",
    answer: "Calculations use current Australian tax rates (2025-26 ATO brackets), industry benchmarks, and standard business formulas. Results are estimates to help you make informed pricing decisions."
  },
  {
    question: "Do I need an ABN to use this tool?",
    answer: "No ABN is required. This tool works for anyone planning freelance pricing — whether you're already registered or exploring freelancing as a career option."
  }
];

export default function RetainerCalculatorPage() {
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
              Client <span className="gradient-text">Retainer</span> Calculator
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Price your retainer packages with confidence. See exactly what to charge, compare tier
              options, and project how retainer clients build predictable, recurring revenue for your
              freelance business.
            </p>
          </div>

          {/* Calculator */}
          <RetainerCalculator />

          {/* SEO Content Sections */}
          <section className="mt-16 space-y-12">
            {/* How to Price a Retainer */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                How to Price a Retainer as a Freelancer
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  A retainer is a recurring agreement where a client pays a fixed monthly fee in
                  exchange for a guaranteed block of your time. Instead of quoting project by project,
                  you agree on a set number of hours per month at a slightly discounted rate — giving
                  the client cost certainty and giving you income predictability.
                </p>
                <p>
                  <strong className="text-white">When to offer a retainer:</strong> Retainers work
                  best when a client has ongoing, recurring needs — website maintenance, content
                  creation, design support, bookkeeping, or advisory work. If the work is predictable
                  and the client needs you consistently, a retainer is the right model.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Pros of Retainers</h4>
                    <ul className="text-sm space-y-1.5">
                      <li className="flex items-start gap-2">
                        <span className="text-teal-400 mt-0.5">+</span>
                        Predictable monthly income you can plan around
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-400 mt-0.5">+</span>
                        Less time spent quoting, pitching, and chasing new work
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-400 mt-0.5">+</span>
                        Deeper client relationships and better work quality
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-400 mt-0.5">+</span>
                        Clients commit long-term, reducing revenue volatility
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Cons of Retainers</h4>
                    <ul className="text-sm space-y-1.5">
                      <li className="flex items-start gap-2">
                        <span className="text-rose-400 mt-0.5">-</span>
                        Discounted rate means lower per-hour earnings
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-rose-400 mt-0.5">-</span>
                        Risk of scope creep if boundaries aren&apos;t clear
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-rose-400 mt-0.5">-</span>
                        Can limit capacity for higher-paying project work
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-rose-400 mt-0.5">-</span>
                        Unused hours can create awkward conversations
                      </li>
                    </ul>
                  </div>
                </div>
                <p className="text-sm mt-2">
                  The key is pricing your retainer so the discount is meaningful enough for the client
                  to commit, but not so deep that you&apos;re undervaluing your time. Most freelancers
                  offer a 5-15% discount off their standard hourly rate. Use the calculator above to
                  find the right balance.
                </p>
              </div>
            </div>

            {/* Retainer vs Hourly */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Retainer vs Hourly: Which Is Better?
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Neither model is universally better — it depends on the type of work, the client
                  relationship, and your business stage. Here&apos;s a head-to-head comparison to help
                  you decide:
                </p>
                <div className="overflow-x-auto mt-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-3 px-4 text-slate-400 font-medium">Factor</th>
                        <th className="text-left py-3 px-4 text-teal-400 font-medium">Retainer</th>
                        <th className="text-left py-3 px-4 text-blue-400 font-medium">Hourly</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      <tr>
                        <td className="py-3 px-4 text-white font-medium">Income predictability</td>
                        <td className="py-3 px-4 text-teal-400">High — fixed monthly amount</td>
                        <td className="py-3 px-4">Variable — depends on hours booked</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-white font-medium">Earning potential</td>
                        <td className="py-3 px-4">Slightly lower per-hour rate</td>
                        <td className="py-3 px-4 text-blue-400">Full rate, no discount</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-white font-medium">Admin overhead</td>
                        <td className="py-3 px-4 text-teal-400">Low — same invoice each month</td>
                        <td className="py-3 px-4">Higher — time tracking, variable invoices</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-white font-medium">Client relationship</td>
                        <td className="py-3 px-4 text-teal-400">Deep, long-term partnership</td>
                        <td className="py-3 px-4">Transactional, project-based</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-white font-medium">Scope risk</td>
                        <td className="py-3 px-4">Higher — needs clear boundaries</td>
                        <td className="py-3 px-4 text-blue-400">Lower — you bill for all time</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-white font-medium">Best for</td>
                        <td className="py-3 px-4 text-teal-400">Ongoing, recurring work</td>
                        <td className="py-3 px-4 text-blue-400">One-off or irregular projects</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-white font-medium">Cash flow</td>
                        <td className="py-3 px-4 text-teal-400">Smooth and predictable</td>
                        <td className="py-3 px-4">Lumpy — feast or famine cycles</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm mt-4">
                  <strong className="text-white">The smart play:</strong> Use retainers as your
                  revenue foundation (covering 50-70% of your income target) and fill the rest with
                  higher-margin project work. This gives you stability without capping your upside.
                  Use the{' '}
                  <Link href="/tools/rate-calculator" className="text-teal-400 hover:underline">
                    Rate Calculator
                  </Link>{' '}
                  to make sure your hourly rate supports both models.
                </p>
              </div>
            </div>

            {/* Setting Up a Retainer Agreement */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Setting Up a Retainer Agreement
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  A retainer without a clear agreement is a recipe for scope creep and client
                  frustration. Every retainer should be documented with these key elements:
                </p>
                <div className="space-y-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-5">
                    <h4 className="text-white font-semibold mb-2">1. Scope and Deliverables</h4>
                    <p className="text-sm">
                      Be specific about what&apos;s included and what isn&apos;t. &ldquo;20 hours of
                      web development per month&rdquo; is vague. &ldquo;20 hours covering bug fixes,
                      feature updates, and performance optimisation for the client&apos;s Next.js
                      application&rdquo; is much better. List out-of-scope work explicitly — new
                      feature builds, third-party integrations, or strategy work that requires
                      separate quoting.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-5">
                    <h4 className="text-white font-semibold mb-2">2. Rollover Hours Policy</h4>
                    <p className="text-sm">
                      What happens if the client doesn&apos;t use all their hours? Most freelancers
                      allow 20-25% of unused hours to roll over to the next month, with a cap of one
                      month&apos;s accumulation. This prevents clients from banking hours indefinitely
                      while showing good faith. Be clear: unused hours beyond the rollover cap expire.
                      Hours do not roll backwards — you can&apos;t &ldquo;borrow&rdquo; from next
                      month.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-5">
                    <h4 className="text-white font-semibold mb-2">3. Scope Boundaries and Overages</h4>
                    <p className="text-sm">
                      Define what happens when the client needs more than their retainer hours. A
                      common approach: overage hours are billed at your standard (non-discounted) rate
                      and invoiced separately at the end of the month. Set a threshold (e.g., 10%
                      buffer) before overage billing kicks in as a goodwill gesture.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-5">
                    <h4 className="text-white font-semibold mb-2">4. Review Cadence</h4>
                    <p className="text-sm">
                      Build in quarterly reviews to assess whether the retainer is working for both
                      parties. Is the client consistently using all their hours? Do they need more?
                      Less? Has the scope evolved? Quarterly check-ins prevent retainers from going
                      stale and give you a natural moment to adjust pricing or hours. Most retainer
                      agreements include a 30-day notice period for changes.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-5">
                    <h4 className="text-white font-semibold mb-2">5. Payment Terms and Cancellation</h4>
                    <p className="text-sm">
                      Retainers are paid in advance — the client pays at the start of the month (or
                      quarter) for the upcoming period. Include a cancellation clause: typically 30
                      days written notice, with the current billing period non-refundable. If the
                      client wants to exit mid-cycle, they&apos;ve already paid and you honour the
                      remaining hours. Use{' '}
                      <Link href="/signup" className="text-teal-400 hover:underline">
                        InvoiceFlow
                      </Link>{' '}
                      to automate recurring retainer invoices so payments are never missed.
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-teal-500/10 to-blue-500/10 border border-teal-500/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-teal-400 font-medium mb-2">Pro Tip: The 3-Month Trial</p>
                  <p className="text-sm">
                    Start new retainers with a 3-month trial period. This gives both sides a chance
                    to test the arrangement with a clear exit point. If it works, convert to an
                    ongoing agreement with quarterly reviews. If it doesn&apos;t, you both walk away
                    cleanly. Most clients who make it past the trial become long-term retainer clients.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-16 text-center glass rounded-2xl p-10">
            <h3 className="text-3xl font-bold text-white heading-font mb-4">
              Ready to <span className="gradient-text">lock in retainer revenue?</span>
            </h3>
            <p className="text-slate-300 max-w-xl mx-auto mb-6">
              InvoiceFlow makes retainers effortless — set up recurring invoices, track hours against
              retainer allocations, and get paid on time every month without chasing clients.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/signup"
                className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold hover:opacity-90 transition-opacity"
              >
                Start Free — 5 Invoices/Month
              </Link>
              <Link
                href="/tools/rate-calculator"
                className="inline-block px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all"
              >
                Try the Rate Calculator
              </Link>
            </div>
          </section>
        
        <RelatedTools currentSlug="retainer-calculator" category="Pricing & Rates" />
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
