import type { Metadata } from 'next';
import Link from 'next/link';
import RecurringRevenueClient from './RecurringRevenueClient';
import RelatedTools from '../components/RelatedTools';
import EmailCapture from '../components/EmailCapture';
import BreadcrumbSchema from '../components/BreadcrumbSchema';
import FAQSchema from '../components/FAQSchema';

const title = 'Free Recurring Revenue Calculator for Freelancers | InvoiceFlow';
const description =
  'Free recurring revenue calculator for Australian freelancers. Calculate MRR, ARR, churn impact, and 12-month projections. Track client concentration risk and build stable freelance income.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'recurring revenue calculator',
    'MRR calculator freelance',
    'freelance ARR calculator',
    'monthly recurring revenue calculator',
    'freelance recurring income',
    'churn rate calculator',
    'retainer revenue calculator',
    'freelance revenue projections',
  ],
  openGraph: {
    title: 'Recurring Revenue Calculator — Free Tool | InvoiceFlow',
    description:
      'Calculate your MRR, ARR, churn impact, and 12-month revenue projections. Free for Australian freelancers.',
    url: 'https://www.invoiceflow.au/tools/recurring-revenue-calculator',
    siteName: 'InvoiceFlow',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Recurring Revenue Calculator — Free Tool | InvoiceFlow',
    description:
      'Track MRR, ARR, and churn projections for your freelance business. See 12-month revenue forecasts and client concentration risk.',
  },
  alternates: {
    canonical: 'https://www.invoiceflow.au/tools/recurring-revenue-calculator',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Recurring Revenue Calculator for Freelancers',
  description:
    'Calculate MRR, ARR, churn impact, client concentration risk, and 12-month revenue projections for your freelance business. Free tool for Australian freelancers.',
  url: 'https://www.invoiceflow.au/tools/recurring-revenue-calculator',
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
    answer: "Yes, this tool is completely free. No account or credit card needed — just enter your details and get instant results."
  },
  {
    question: "How reliable are the projections?",
    answer: "Projections use standard financial formulas and current ATO rates for the 2025-26 financial year. They're designed for planning purposes — consult a financial adviser for complex decisions."
  },
  {
    question: "Is my financial data stored anywhere?",
    answer: "No. All calculations happen locally in your browser. InvoiceFlow never sends, stores, or shares your financial information from free tools."
  }
];

export default function RecurringRevenueCalculatorPage() {
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
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/tools" className="hover:text-white transition-colors">Free Tools</Link>
            <span>/</span>
            <span className="text-slate-300">Recurring Revenue Calculator</span>
          </nav>

          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-teal-500/10 border border-teal-500/20 rounded-full mb-6">
              <div className="w-2 h-2 bg-teal-400 rounded-full" />
              <span className="text-teal-400 text-sm font-medium">100% Free</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white heading-font mb-4">
              Recurring Revenue <span className="gradient-text">Calculator</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Track your Monthly Recurring Revenue, project 12-month growth, monitor client
              concentration risk, and build a more predictable freelance income.
            </p>
          </div>

          {/* Calculator */}
          <RecurringRevenueClient />

          {/* SEO Content Sections */}
          <section className="mt-16 space-y-12">
            {/* The Freelancer's Guide to Recurring Revenue */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                The Freelancer&apos;s Guide to Recurring Revenue
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Most freelancers live in a constant cycle of feast and famine — big projects followed
                  by anxious gaps where the pipeline runs dry. Recurring revenue changes this entirely.
                  Instead of starting each month from zero, you begin with a predictable baseline of
                  income that covers your core expenses and gives you the confidence to invest in growth.
                </p>
                <p>
                  The shift from project-based to recurring revenue is the single most impactful change
                  a freelancer can make. It transforms your business from a series of transactions into
                  a sustainable, scalable operation. Companies pay premium multiples for businesses with
                  recurring revenue — and the same principle applies to your freelance practice.
                </p>
                <p>
                  In Australia, where the freelance economy is growing rapidly, building recurring revenue
                  streams is especially important. With GST obligations, superannuation contributions, and
                  the high cost of living in cities like Melbourne and Sydney, predictable monthly income
                  isn&apos;t a luxury — it&apos;s a necessity.
                </p>
              </div>
            </div>

            {/* MRR vs ARR Explained */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                MRR vs ARR Explained
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  <strong className="text-white">Monthly Recurring Revenue (MRR)</strong> is the total
                  predictable revenue you earn each month from ongoing client engagements. It includes
                  retainers, maintenance contracts, subscription services, and any other recurring billing
                  arrangement. MRR is your pulse — it tells you how healthy your business is right now.
                </p>
                <p>
                  <strong className="text-white">Annual Recurring Revenue (ARR)</strong> is simply MRR
                  multiplied by 12. It represents your annualised run rate if current conditions hold
                  steady. ARR is the metric investors and acquirers care most about, but for freelancers
                  it&apos;s also the number that tells you whether your recurring income alone can sustain
                  your lifestyle.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-teal-400 font-semibold mb-2">MRR — Use When</h4>
                    <ul className="text-sm space-y-1.5 list-disc list-inside">
                      <li>Tracking month-to-month performance</li>
                      <li>Measuring the impact of new client wins</li>
                      <li>Calculating churn and growth rates</li>
                      <li>Setting short-term cash flow targets</li>
                    </ul>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-blue-400 font-semibold mb-2">ARR — Use When</h4>
                    <ul className="text-sm space-y-1.5 list-disc list-inside">
                      <li>Planning annual budgets and expenses</li>
                      <li>Evaluating business valuation</li>
                      <li>Comparing against annual revenue goals</li>
                      <li>Communicating business scale to partners</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* 5 Ways to Build Recurring Revenue */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                5 Ways to Build Recurring Revenue as a Freelancer
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Transitioning to recurring revenue doesn&apos;t mean abandoning project work overnight.
                  It means strategically layering predictable income streams into your existing practice.
                  Here are five proven models Australian freelancers use:
                </p>
                <ol className="space-y-4 list-decimal list-inside">
                  <li>
                    <strong className="text-white">Monthly Retainers.</strong>{' '}
                    The classic model — a client pays a fixed monthly fee for an agreed block of hours
                    or deliverables. Retainers work best for ongoing services like design, development
                    support, marketing, or consulting. Start by offering retainers to your best existing
                    project clients once the initial engagement wraps. A $2,000-$5,000/month retainer is
                    common for experienced Australian freelancers. Use the{' '}
                    <Link href="/tools/retainer-calculator" className="text-teal-400 hover:underline">
                      Retainer Calculator
                    </Link>{' '}
                    to price yours.
                  </li>
                  <li>
                    <strong className="text-white">Website &amp; App Maintenance Plans.</strong>{' '}
                    If you build websites or applications, offer a monthly maintenance plan covering
                    updates, security patches, hosting management, uptime monitoring, and minor changes.
                    Maintenance plans typically run $200-$800/month depending on complexity. Clients love
                    the peace of mind, and you love the recurring income.
                  </li>
                  <li>
                    <strong className="text-white">Subscription Content Packages.</strong>{' '}
                    For copywriters, content strategists, and social media managers, monthly content packages
                    are a natural fit. Offer a set number of blog posts, social media posts, or email
                    newsletters per month for a fixed price. Structure packages in tiers (e.g. 4 posts/month,
                    8 posts/month, 12 posts/month) so clients can scale up as they see results.
                  </li>
                  <li>
                    <strong className="text-white">Advisory &amp; Fractional Roles.</strong>{' '}
                    As you build expertise, offer ongoing advisory or fractional leadership roles. A
                    fractional CTO, CMO, or CFO arrangement might be half a day per week for $3,000-$8,000/month.
                    These roles provide enormous recurring value and position you as a strategic partner
                    rather than a task executor.
                  </li>
                  <li>
                    <strong className="text-white">Productised Services.</strong>{' '}
                    Package a specific deliverable at a fixed recurring price — unlimited design requests,
                    weekly SEO audits, monthly financial reporting, etc. Productised services are easy to
                    sell because clients know exactly what they get and exactly what they pay. They&apos;re
                    also easier to delegate as you grow.
                  </li>
                </ol>
              </div>
            </div>

            {/* Churn Benchmarks */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Churn Rate Benchmarks for Freelancers
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Churn is the percentage of recurring revenue you lose each month as clients cancel,
                  downgrade, or don&apos;t renew. Understanding your churn rate — and how it compares to
                  benchmarks — is critical for sustainable growth. Every dollar lost to churn is a dollar
                  you need to replace before you can grow.
                </p>
                <div className="overflow-x-auto mt-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-3 px-4 text-slate-400 font-semibold">Monthly Churn</th>
                        <th className="text-left py-3 px-4 text-slate-400 font-semibold">Rating</th>
                        <th className="text-left py-3 px-4 text-slate-400 font-semibold">Annual Impact</th>
                        <th className="text-left py-3 px-4 text-slate-400 font-semibold">What It Means</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      <tr>
                        <td className="py-3 px-4 text-emerald-400 font-semibold">&lt; 3%</td>
                        <td className="py-3 px-4">
                          <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-medium">
                            Excellent
                          </span>
                        </td>
                        <td className="py-3 px-4 text-slate-300">&lt; 31% annual revenue at risk</td>
                        <td className="py-3 px-4 text-slate-300">
                          Strong client relationships and sticky services. You&apos;re retaining almost
                          everything — focus on growth.
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-teal-400 font-semibold">3% - 5%</td>
                        <td className="py-3 px-4">
                          <span className="px-2 py-0.5 rounded-full bg-teal-500/10 text-teal-400 text-xs font-medium">
                            Good
                          </span>
                        </td>
                        <td className="py-3 px-4 text-slate-300">31% - 46% annual revenue at risk</td>
                        <td className="py-3 px-4 text-slate-300">
                          Typical for freelancers with solid retainers. Room to improve with longer
                          contracts and deeper client integration.
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-amber-400 font-semibold">5% - 10%</td>
                        <td className="py-3 px-4">
                          <span className="px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 text-xs font-medium">
                            Concerning
                          </span>
                        </td>
                        <td className="py-3 px-4 text-slate-300">46% - 72% annual revenue at risk</td>
                        <td className="py-3 px-4 text-slate-300">
                          You&apos;re replacing nearly half your revenue base each year. Investigate why
                          clients leave and consider value-adds or longer commitments.
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-red-400 font-semibold">&gt; 10%</td>
                        <td className="py-3 px-4">
                          <span className="px-2 py-0.5 rounded-full bg-red-500/10 text-red-400 text-xs font-medium">
                            Critical
                          </span>
                        </td>
                        <td className="py-3 px-4 text-slate-300">&gt; 72% annual revenue at risk</td>
                        <td className="py-3 px-4 text-slate-300">
                          Unsustainable. Your recurring revenue is essentially project work in disguise.
                          Rethink your offering, pricing, or client selection.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm mt-4">
                  Remember: churn compounds. A 10% monthly churn rate doesn&apos;t mean you lose 100% of
                  clients per year — it means you lose about 72% of your starting MRR due to compounding
                  (0.9^12 = 0.28, so 72% loss). The calculator above models this compounding effect
                  in the 12-month projection.
                </p>
              </div>
            </div>

            {/* How to Transition to Recurring Revenue */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                How to Transition from Project-Based to Recurring Revenue
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  You don&apos;t need to flip a switch. The smartest approach is a gradual transition
                  that protects your cash flow while building your recurring base. Here&apos;s a
                  step-by-step framework:
                </p>
                <ol className="space-y-4 list-decimal list-inside">
                  <li>
                    <strong className="text-white">Audit your existing clients.</strong>{' '}
                    Look at your last 12 months of invoicing. Which clients have hired you more than
                    once? Which projects had natural follow-on work? These are your best candidates for
                    retainer conversions. Use the{' '}
                    <Link href="/tools/client-lifetime-value" className="text-teal-400 hover:underline">
                      Client Lifetime Value Calculator
                    </Link>{' '}
                    to identify your most valuable relationships.
                  </li>
                  <li>
                    <strong className="text-white">Design 2-3 retainer packages.</strong>{' '}
                    Create tiered packages (e.g. 10hrs/month, 20hrs/month, 40hrs/month) with clear
                    inclusions, response times, and value propositions. Price them at a slight discount
                    to your standard hourly rate — the predictability premium is worth more than the
                    margin you give up.
                  </li>
                  <li>
                    <strong className="text-white">Pitch at project completion.</strong>{' '}
                    The moment a project wraps successfully is the highest-trust point in your client
                    relationship. Use it. Before the final handoff, present your maintenance or retainer
                    options. Frame it as &quot;protecting their investment&quot; — because it genuinely is.
                  </li>
                  <li>
                    <strong className="text-white">Set a target mix.</strong>{' '}
                    Aim for 50% recurring / 50% project revenue within 12 months. Once you hit that,
                    push toward 70/30. Track it monthly using the calculator above. Each new retainer
                    client raises your floor and reduces your dependence on the sales pipeline.
                  </li>
                  <li>
                    <strong className="text-white">Lock in longer contracts.</strong>{' '}
                    Offer a discount for 6-month or 12-month commitments. A 10% discount on a 12-month
                    retainer is far more valuable than full rate on a month-to-month arrangement that
                    could churn at any time. Longer contracts directly reduce your churn rate and improve
                    your revenue stability score.
                  </li>
                  <li>
                    <strong className="text-white">Automate your invoicing.</strong>{' '}
                    Once you have multiple recurring clients, manual invoicing becomes a bottleneck.
                    Set up automatic recurring invoices so payments happen on schedule without you chasing
                    them. This is exactly what{' '}
                    <Link href="/signup" className="text-teal-400 hover:underline">
                      InvoiceFlow
                    </Link>{' '}
                    was built for.
                  </li>
                </ol>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-16 text-center glass rounded-2xl p-10">
            <h3 className="text-3xl font-bold text-white heading-font mb-4">
              Track recurring invoices <span className="gradient-text">automatically</span>
            </h3>
            <p className="text-slate-300 max-w-xl mx-auto mb-6">
              InvoiceFlow automates recurring invoices for retainer clients, sends payment reminders
              before each due date, and tracks your MRR in real time — so you always know where your
              revenue stands.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/signup"
                className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold hover:opacity-90 transition-opacity"
              >
                Start Free — 5 Invoices/Month
              </Link>
              <Link
                href="/tools/retainer-calculator"
                className="inline-block px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all"
              >
                Price Your Retainer Packages
              </Link>
            </div>
          </section>
        
        <RelatedTools currentSlug="recurring-revenue-calculator" category="Financial Planning" />
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
