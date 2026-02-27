import type { Metadata } from 'next';
import Link from 'next/link';
import ProjectProfitabilityCalculator from './ProjectProfitabilityCalculator';
import RelatedTools from '../components/RelatedTools';
import EmailCapture from '../components/EmailCapture';
import BreadcrumbSchema from '../components/BreadcrumbSchema';
import FAQSchema from '../components/FAQSchema';

const title = 'Project Profitability Calculator Australia | Track Freelance Project Profits — InvoiceFlow';
const description =
  'Free project profitability calculator for Australian freelancers. Track revenue vs costs per project, compare profit margins, calculate effective hourly rates, and identify your most profitable work.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'project profitability calculator',
    'freelance project profit',
    'project profit margin calculator',
    'freelance project tracking australia',
    'effective hourly rate calculator',
    'project cost analysis freelancer',
  ],
  openGraph: {
    title: 'Project Profitability Calculator — Free Tool | InvoiceFlow',
    description:
      'Track revenue vs costs per project. Compare profit margins and find your most profitable freelance work. Free for Australian freelancers.',
    url: 'https://www.invoiceflow.au/tools/project-profitability',
    siteName: 'InvoiceFlow',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Project Profitability Calculator — Free Tool | InvoiceFlow',
    description:
      'Are your projects actually profitable? Free calculator to track freelance project revenue, costs, and effective hourly rate.',
  },
  alternates: {
    canonical: 'https://www.invoiceflow.au/tools/project-profitability',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Project Profitability Calculator Australia',
  description:
    'Track revenue vs costs per project, compare profit margins, and calculate effective hourly rates. Built for Australian freelancers.',
  url: 'https://www.invoiceflow.au/tools/project-profitability',
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

export default function ProjectProfitabilityPage() {
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
              Project <span className="gradient-text">Profitability</span> Calculator
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Revenue doesn&apos;t equal profit. Add your projects, track hours and expenses, and see
              which work actually makes you money — and which is costing you.
            </p>
          </div>

          {/* Calculator */}
          <ProjectProfitabilityCalculator />

          {/* SEO Content Sections */}
          <section className="mt-16 space-y-12">
            {/* Why Track Project Profitability */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Why Freelancers Need to Track Project Profitability
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Most freelancers track revenue but not profit. You might invoice $5,000 for a
                  project, but after accounting for the extra hours, software costs, revisions,
                  and scope creep — your effective hourly rate could be half what you think.
                </p>
                <p>
                  Tracking profitability per project reveals which clients, project types, and
                  services are actually worth your time. This data is the foundation for smarter
                  pricing, better client selection, and sustainable growth.
                </p>
                <div className="grid sm:grid-cols-3 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-teal-400 mb-1">43%</p>
                    <p className="text-sm">of freelancers don&apos;t track project costs at all</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-amber-400 mb-1">2.3x</p>
                    <p className="text-sm">profit difference between best and worst project types</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-rose-400 mb-1">28%</p>
                    <p className="text-sm">of freelance projects are unprofitable when fully costed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* What Counts as a Project Cost */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                What Counts as a Project Cost?
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  To get an accurate picture of project profitability, you need to account for
                  all costs — not just the obvious ones. Here&apos;s what to include:
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Direct Costs</h4>
                    <ul className="text-sm space-y-1.5">
                      <li className="flex items-start gap-2">
                        <span className="text-teal-400 mt-0.5">+</span>
                        Your time (billable hours at your internal rate)
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-400 mt-0.5">+</span>
                        Software and tools purchased for the project
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-400 mt-0.5">+</span>
                        Stock images, fonts, or assets
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-400 mt-0.5">+</span>
                        Subcontractor or outsourcing fees
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-400 mt-0.5">+</span>
                        Travel, printing, or shipping costs
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Hidden Costs (Often Missed)</h4>
                    <ul className="text-sm space-y-1.5">
                      <li className="flex items-start gap-2">
                        <span className="text-amber-400 mt-0.5">!</span>
                        Unpaid revision rounds beyond scope
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-400 mt-0.5">!</span>
                        Email, meetings, and communication time
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-400 mt-0.5">!</span>
                        Quoting and proposal time (pre-project)
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-400 mt-0.5">!</span>
                        Admin: invoicing, file management, follow-ups
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-400 mt-0.5">!</span>
                        Opportunity cost of turning down other work
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-teal-500/10 to-blue-500/10 border border-teal-500/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-teal-400 font-medium mb-2">Pro Tip: The 1.3x Rule</p>
                  <p className="text-sm">
                    Whatever hours you estimate for a project, multiply by 1.3. That extra 30% accounts
                    for communication, admin, revisions, and context switching that you&apos;ll never
                    bill for. Use the{' '}
                    <Link href="/tools/quote-calculator" className="text-teal-400 hover:underline">
                      Quote Calculator
                    </Link>{' '}
                    to build this buffer into your quotes upfront.
                  </p>
                </div>
              </div>
            </div>

            {/* 5 Signs a Project is Unprofitable */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                5 Signs a Freelance Project Is Unprofitable
              </h2>
              <div className="space-y-4 text-slate-300">
                <div className="space-y-4 mt-2">
                  <div className="bg-white/5 rounded-xl p-5">
                    <h4 className="text-white font-semibold mb-2">1. Your Effective Rate Drops Below Your Minimum</h4>
                    <p className="text-sm">
                      If you charged $3,000 for a project but spent 50 hours (not the 30 you quoted),
                      your effective rate is $60/hr — not the $100/hr you billed. Use the{' '}
                      <Link href="/tools/rate-calculator" className="text-teal-400 hover:underline">
                        Rate Calculator
                      </Link>{' '}
                      to know your minimum viable rate, and check projects against it.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-5">
                    <h4 className="text-white font-semibold mb-2">2. Scope Keeps Growing Without Price Adjustments</h4>
                    <p className="text-sm">
                      &ldquo;Can you just add one more thing?&rdquo; is the most expensive sentence in
                      freelancing. Every addition that doesn&apos;t come with a revised quote erodes your
                      margin. Track actual scope vs original scope for every project.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-5">
                    <h4 className="text-white font-semibold mb-2">3. Communication Eats More Time Than Building</h4>
                    <p className="text-sm">
                      If you&apos;re spending more than 20% of project time on emails, calls, and
                      meetings, the project is likely underwater. Set communication boundaries: weekly
                      check-ins instead of daily emails, async updates instead of live calls.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-5">
                    <h4 className="text-white font-semibold mb-2">4. You&apos;re Turning Down Better Work</h4>
                    <p className="text-sm">
                      Opportunity cost is real. If a low-margin project is consuming capacity that could
                      go to a higher-margin client, you&apos;re losing money twice — once on the thin
                      margin, and again on the opportunity you missed.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-5">
                    <h4 className="text-white font-semibold mb-2">5. The Project Margin Is Below 30%</h4>
                    <p className="text-sm">
                      A healthy freelance project should have a 40-60% profit margin after all costs.
                      Below 30%, you&apos;re barely covering business overheads (insurance, software,
                      accounting, super). Use the calculator above to check each project.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-16 text-center glass rounded-2xl p-10">
            <h3 className="text-3xl font-bold text-white heading-font mb-4">
              Ready to <span className="gradient-text">maximise project profits?</span>
            </h3>
            <p className="text-slate-300 max-w-xl mx-auto mb-6">
              InvoiceFlow tracks time, expenses, and revenue per project automatically — so you
              always know which work is making you money and which needs repricing.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/signup"
                className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold hover:opacity-90 transition-opacity"
              >
                Start Free — 5 Invoices/Month
              </Link>
              <Link
                href="/tools/profit-margin-calculator"
                className="inline-block px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all"
              >
                Try Profit Margin Calculator
              </Link>
            </div>
          </section>
        
        <RelatedTools currentSlug="project-profitability" category="Business Analytics" />
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
