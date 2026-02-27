import type { Metadata } from 'next';
import Link from 'next/link';
import StartupCostCalculator from './StartupCostCalculator';
import RelatedTools from '../components/RelatedTools';
import EmailCapture from '../components/EmailCapture';
import BreadcrumbSchema from '../components/BreadcrumbSchema';
import FAQSchema from '../components/FAQSchema';

const title = 'Free Freelance Startup Cost Calculator Australia — How Much to Start Freelancing | InvoiceFlow';
const description =
  'Calculate the total cost to start freelancing in Australia. One-time setup costs, monthly ongoing expenses, break-even timeline, and cash flow projections. Presets for web developers, designers, writers, and more.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'freelance startup cost calculator australia',
    'cost to start freelancing australia',
    'freelance business setup costs',
    'how much to start freelancing',
    'sole trader startup costs australia',
    'freelance budget planner',
    'freelance break even calculator',
    'startup expenses freelancer',
    'ABN registration cost',
    'freelance monthly expenses australia',
    'freelance cash flow projection',
    'new freelancer budget',
  ],
  openGraph: {
    title: 'Freelance Startup Cost Calculator — Free Tool | InvoiceFlow',
    description:
      'Calculate the total investment to start freelancing in Australia. One-time costs, monthly expenses, break-even timeline, and cash flow projections.',
    url: 'https://www.invoiceflow.au/tools/startup-cost-calculator',
    siteName: 'InvoiceFlow',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Freelance Startup Cost Calculator — Free Tool | InvoiceFlow',
    description:
      'Calculate the total investment to start freelancing in Australia. Presets for developers, designers, writers, and more.',
  },
  alternates: {
    canonical: 'https://www.invoiceflow.au/tools/startup-cost-calculator',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Freelance Startup Cost Calculator',
  description:
    'Calculate the total cost to start freelancing in Australia. One-time setup costs, monthly ongoing expenses, break-even timeline, and cash flow projections for new freelancers.',
  url: 'https://www.invoiceflow.au/tools/startup-cost-calculator',
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

export default function StartupCostCalculatorPage() {
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

        <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-teal-500/10 border border-teal-500/20 rounded-full mb-6">
              <div className="w-2 h-2 bg-teal-400 rounded-full" />
              <span className="text-teal-400 text-sm font-medium">100% Free</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white heading-font mb-4">
              Freelance Startup Cost{' '}
              <span className="gradient-text">Calculator</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Calculate exactly how much it costs to start freelancing in Australia. Get a
              personalised breakdown of one-time setup costs, monthly ongoing expenses,
              break-even timeline, and a 6-month cash flow projection for your business type.
            </p>
          </div>

          {/* Calculator */}
          <StartupCostCalculator />

          {/* SEO Content Sections */}
          <section className="mt-16 space-y-12">
            {/* Section 1: How Much Does It Cost to Start Freelancing in Australia? */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                How Much Does It Cost to Start Freelancing in Australia?
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  <strong className="text-white">The good news: starting a freelance business in
                  Australia is one of the cheapest businesses you can launch.</strong> Unlike a
                  retail store or restaurant, you don&apos;t need a lease, fit-out, or inventory. Most
                  freelancers can get started for under $5,000 — and many start for under $2,000 if
                  they already own a laptop.
                </p>
                <p>
                  The actual cost depends heavily on your profession, the quality of equipment you
                  need, and whether you plan to work from home or rent a coworking space. A web
                  developer needs different tools than a photographer, and a marketing consultant has
                  different software subscriptions than a virtual assistant.
                </p>
                <div className="grid sm:grid-cols-3 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-teal-400 mb-1">$0</p>
                    <p className="text-sm">ABN registration — completely free through the ATO. Takes 10 minutes online.</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-amber-400 mb-1">$2,000 - $5,000</p>
                    <p className="text-sm">Typical total one-time investment for most freelancers starting from scratch</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-emerald-400 mb-1">$300 - $800/mo</p>
                    <p className="text-sm">Typical monthly ongoing costs including software, insurance, and marketing</p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-teal-500/10 to-blue-500/10 border border-teal-500/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-teal-400 font-medium mb-2">The Real Question Is Runway, Not Cost</p>
                  <p className="text-sm">
                    The total setup cost matters less than how long your savings can sustain you while
                    you build a client base. Most new freelancers take 2-4 months to reach consistent
                    income. Use the calculator above to see exactly how many months of runway your
                    savings provide — and what you need to earn in month one to stay afloat.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2: Essential vs Nice-to-Have */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Essential vs Nice-to-Have: Prioritising Your Startup Spending
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  When you&apos;re starting out, every dollar matters. The key is separating what you
                  genuinely need on day one from what can wait until you have paying clients. Here&apos;s
                  how experienced Australian freelancers prioritise their startup spending:
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-sm font-bold">ESSENTIAL</span>
                      Day One Must-Haves
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-teal-400 mt-0.5 shrink-0">&#10003;</span>
                        <span><strong className="text-white">ABN registration</strong> — free, takes 10 minutes at abr.gov.au</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-400 mt-0.5 shrink-0">&#10003;</span>
                        <span><strong className="text-white">A reliable laptop</strong> — your primary tool. Budget $1,500-$2,500 for something that&apos;ll last 3-4 years</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-400 mt-0.5 shrink-0">&#10003;</span>
                        <span><strong className="text-white">Core software</strong> — the tools you literally cannot deliver work without (e.g., Adobe CC for designers)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-400 mt-0.5 shrink-0">&#10003;</span>
                        <span><strong className="text-white">Internet connection</strong> — reliable NBN or 5G. Budget $70-100/mo</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-400 mt-0.5 shrink-0">&#10003;</span>
                        <span><strong className="text-white">Professional indemnity insurance</strong> — protects you from client claims. From $30/mo</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-amber-400 text-sm font-bold">LATER</span>
                      Can Wait 3-6 Months
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-amber-400 mt-0.5 shrink-0">&#8594;</span>
                        <span><strong className="text-white">Custom branding & logo</strong> — use a clean, simple design initially. Invest in branding when revenue is consistent</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-400 mt-0.5 shrink-0">&#8594;</span>
                        <span><strong className="text-white">Premium website</strong> — a one-page site or strong LinkedIn profile works early on</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-400 mt-0.5 shrink-0">&#8594;</span>
                        <span><strong className="text-white">Coworking space</strong> — work from home initially. A $300-500/mo coworking desk can wait until you can afford it</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-400 mt-0.5 shrink-0">&#8594;</span>
                        <span><strong className="text-white">Paid marketing</strong> — focus on free channels (LinkedIn, referrals, cold outreach) before spending on ads</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-400 mt-0.5 shrink-0">&#8594;</span>
                        <span><strong className="text-white">Professional development courses</strong> — invest in learning once you know exactly what skills the market needs from you</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-teal-500/10 to-blue-500/10 border border-teal-500/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-teal-400 font-medium mb-2">The Lean Launch Principle</p>
                  <p className="text-sm">
                    Start with the minimum viable setup and upgrade as revenue comes in. Every dollar
                    you don&apos;t spend on day one is another day of runway. A freelancer with a $2,000
                    setup and $10,000 in savings has 5 months more runway than one with a $7,000 setup
                    and the same savings. Use the calculator above to see exactly how your spending
                    choices affect your runway.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3: Tax Deductions for Freelance Startup Costs */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Tax Deductions for Freelance Startup Costs
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  <strong className="text-white">Most of your freelance startup costs are
                  tax-deductible under Australian tax law.</strong> The ATO allows sole traders and
                  freelancers to claim business expenses that are directly related to earning assessable
                  income. Here&apos;s what you need to know:
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Immediately Deductible</h4>
                    <p className="text-sm">
                      Under the instant asset write-off (currently $20,000 per asset for small
                      businesses), you can claim the full cost of assets under the threshold in the
                      year of purchase. This includes laptops, monitors, cameras, and software licences.
                      Business registration fees, insurance premiums, and marketing costs are also
                      fully deductible in the year you pay them.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Depreciable Assets</h4>
                    <p className="text-sm">
                      Assets over the instant write-off threshold are depreciated over their effective
                      life. For example, a $3,000 laptop has an effective life of 4 years under ATO
                      guidelines. You can use the diminishing value or prime cost method. Use our{' '}
                      <Link href="/tools/depreciation-calculator" className="text-teal-400 hover:underline">
                        Depreciation Calculator
                      </Link>
                      {' '}to see the year-by-year breakdown.
                    </p>
                  </div>
                </div>
                <div className="overflow-x-auto mt-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-3 px-4 text-white font-semibold">Startup Expense</th>
                        <th className="text-left py-3 px-4 text-white font-semibold">Deductible?</th>
                        <th className="text-left py-3 px-4 text-white font-semibold">How to Claim</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      <tr>
                        <td className="py-3 px-4">Laptop, monitor, peripherals</td>
                        <td className="py-3 px-4 text-emerald-400">Yes</td>
                        <td className="py-3 px-4">Instant write-off if under $20K, otherwise depreciate</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4">Software subscriptions</td>
                        <td className="py-3 px-4 text-emerald-400">Yes</td>
                        <td className="py-3 px-4">Fully deductible in the year paid</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4">Domain name &amp; hosting</td>
                        <td className="py-3 px-4 text-emerald-400">Yes</td>
                        <td className="py-3 px-4">Fully deductible in the year paid</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4">Business name registration ($39)</td>
                        <td className="py-3 px-4 text-emerald-400">Yes</td>
                        <td className="py-3 px-4">Fully deductible as a business expense</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4">Insurance premiums</td>
                        <td className="py-3 px-4 text-emerald-400">Yes</td>
                        <td className="py-3 px-4">Section 8-1 ITAA 1997 — business insurance is fully deductible</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4">Phone &amp; internet</td>
                        <td className="py-3 px-4 text-amber-400">Partial</td>
                        <td className="py-3 px-4">Business-use percentage only (e.g., 60% if 60% business use)</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4">Professional development</td>
                        <td className="py-3 px-4 text-emerald-400">Yes</td>
                        <td className="py-3 px-4">If directly related to your current business activities</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="bg-gradient-to-r from-teal-500/10 to-blue-500/10 border border-teal-500/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-teal-400 font-medium mb-2">Keep Every Receipt</p>
                  <p className="text-sm">
                    The ATO requires records for all business expenses over $10. Use a dedicated
                    business bank account from day one and keep digital copies of all receipts. At a
                    32% marginal tax rate, every $1,000 in deductible expenses saves you $320 in tax.
                    Use our{' '}
                    <Link href="/tools/expense-deduction-calculator" className="text-teal-400 hover:underline">
                      Expense Deduction Calculator
                    </Link>
                    {' '}to estimate your total tax savings.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4: Your First 90 Days: Cash Flow Survival Guide */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Your First 90 Days: Cash Flow Survival Guide
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  The first three months of freelancing are the hardest financially. You&apos;re
                  spending money on setup, you likely don&apos;t have paying clients yet, and even when
                  you land your first project, you might not get paid for 30-60 days. Here&apos;s a
                  practical roadmap:
                </p>
                <div className="grid sm:grid-cols-3 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-sm font-bold">Month 1</span>
                      Setup &amp; Outreach
                    </h4>
                    <ul className="space-y-1 text-sm">
                      <li>Register your ABN (free, 10 min)</li>
                      <li>Set up a business bank account</li>
                      <li>Get essential equipment and software</li>
                      <li>Create your portfolio or LinkedIn profile</li>
                      <li>Start reaching out to your network</li>
                      <li>Send 20-30 cold pitches or applications</li>
                    </ul>
                    <p className="mt-3 text-xs text-slate-500">Expected income: $0 - $2,000</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-sm font-bold">Month 2</span>
                      First Clients
                    </h4>
                    <ul className="space-y-1 text-sm">
                      <li>Land your first 1-3 clients</li>
                      <li>Deliver exceptional work (referrals start here)</li>
                      <li>Send your first invoices with clear payment terms</li>
                      <li>Start tracking all expenses for tax</li>
                      <li>Refine your pricing based on market feedback</li>
                      <li>Continue outreach — don&apos;t stop when you get one client</li>
                    </ul>
                    <p className="mt-3 text-xs text-slate-500">Expected income: $2,000 - $5,000</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-sm font-bold">Month 3</span>
                      Building Momentum
                    </h4>
                    <ul className="space-y-1 text-sm">
                      <li>First invoice payments arriving</li>
                      <li>Repeat clients and referrals kicking in</li>
                      <li>Review and adjust your rates</li>
                      <li>Set up a tax reserve (25-30% of income)</li>
                      <li>Consider GST registration if approaching $75K</li>
                      <li>Plan your pipeline for months 4-6</li>
                    </ul>
                    <p className="mt-3 text-xs text-slate-500">Expected income: $4,000 - $8,000</p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-teal-500/10 to-blue-500/10 border border-teal-500/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-teal-400 font-medium mb-2">The #1 Cash Flow Rule for New Freelancers</p>
                  <p className="text-sm">
                    Have at least 3 months of living expenses saved before you go full-time freelance.
                    This isn&apos;t just a safety net — it&apos;s negotiating power. When you&apos;re not
                    desperate for cash, you can negotiate better rates, choose better clients, and say
                    no to projects that don&apos;t fit. Use our{' '}
                    <Link href="/tools/cashflow-forecast" className="text-teal-400 hover:underline">
                      Cash Flow Forecast
                    </Link>
                    {' '}tool to project your finances month by month, and our{' '}
                    <Link href="/tools/rate-calculator" className="text-teal-400 hover:underline">
                      Rate Calculator
                    </Link>
                    {' '}to make sure your pricing covers all your costs.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-16 text-center glass rounded-2xl p-10">
            <h3 className="text-3xl font-bold text-white heading-font mb-4">
              Launch your freelance business <span className="gradient-text">with confidence</span>
            </h3>
            <p className="text-slate-300 max-w-xl mx-auto mb-6">
              InvoiceFlow handles your invoicing, expense tracking, and tax reporting from day one.
              Professional invoices, automated payment reminders, and real-time profit tracking
              — so you can focus on landing clients, not chasing payments.
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
                Try Rate Calculator
              </Link>
            </div>
          </section>
        
        <RelatedTools currentSlug="startup-cost-calculator" category="Financial Planning" />
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
