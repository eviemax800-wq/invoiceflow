import type { Metadata } from 'next';
import Link from 'next/link';
import ProfitLossStatement from './ProfitLossStatement';
import RelatedTools from '../components/RelatedTools';
import EmailCapture from '../components/EmailCapture';
import BreadcrumbSchema from '../components/BreadcrumbSchema';
import FAQSchema from '../components/FAQSchema';

const title = 'Free Profit & Loss Statement Generator for Freelancers — InvoiceFlow';
const description =
  'Generate a professional profit and loss statement for your freelance business. Calculate net profit, tax obligations, profit margins, and expense ratios with ATO-aligned categories. Free for Australian sole traders.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'profit and loss statement freelancer',
    'P&L statement generator free',
    'freelance profit loss calculator australia',
    'sole trader profit and loss template',
    'ATO profit and loss statement',
    'freelancer income expense report',
    'small business P&L generator',
    'australian freelance tax calculator',
    'freelance financial statement',
    'sole trader income statement',
  ],
  openGraph: {
    title: 'Profit & Loss Statement Generator — Free Tool | InvoiceFlow',
    description:
      'Generate a professional P&L statement for your freelance business. ATO-aligned categories, tax estimates, and financial ratios. Free for Australian freelancers.',
    url: 'https://www.invoiceflow.au/tools/profit-loss-statement',
    siteName: 'InvoiceFlow',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Profit & Loss Statement Generator — Free Tool | InvoiceFlow',
    description:
      'Generate a professional P&L statement for your freelance business with ATO-aligned categories and tax estimates.',
  },
  alternates: {
    canonical: 'https://www.invoiceflow.au/tools/profit-loss-statement',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Profit & Loss Statement Generator',
  description:
    'Generate a professional profit and loss statement for your freelance business with ATO-aligned expense categories, tax estimates, and financial ratios.',
  url: 'https://www.invoiceflow.au/tools/profit-loss-statement',
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

export default function ProfitLossStatementPage() {
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
              Profit &amp; Loss Statement{' '}
              <span className="gradient-text">Generator</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Generate a professional profit and loss statement for your freelance business.
              ATO-aligned expense categories, estimated tax obligations, and key financial
              ratios to help you understand your true profitability.
            </p>
          </div>

          {/* Generator */}
          <ProfitLossStatement />

          {/* SEO Content Sections */}
          <section className="mt-16 space-y-12">
            {/* Section 1: Why Every Freelancer Needs a P&L */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Why Every Freelancer Needs a Profit &amp; Loss Statement
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  <strong className="text-white">A profit and loss statement is the single
                  most important financial document for any freelance business.</strong> It tells
                  you whether you&apos;re actually making money — not just generating revenue, but
                  keeping enough after expenses and tax to build a sustainable business.
                </p>
                <p>
                  Many freelancers focus obsessively on top-line revenue while ignoring the expenses
                  eating into their margins. A P&amp;L statement strips away the illusion and shows
                  you the truth: your real take-home profit after every cost is accounted for.
                </p>
                <div className="grid sm:grid-cols-3 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-rose-400 mb-1">63%</p>
                    <p className="text-sm">of freelancers don&apos;t track expenses properly, leading to surprise tax bills and cash flow crises</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-amber-400 mb-1">$11,400</p>
                    <p className="text-sm">average annual tax deductions missed by Australian sole traders who don&apos;t maintain a P&amp;L</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-teal-400 mb-1">3x</p>
                    <p className="text-sm">more likely to secure a business loan or mortgage with a well-maintained profit and loss statement</p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-teal-500/10 to-blue-500/10 border border-teal-500/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-teal-400 font-medium mb-2">Beyond Tax Time</p>
                  <p className="text-sm">
                    Your P&amp;L isn&apos;t just for the ATO. Banks, lenders, and even potential
                    business partners will ask for it. If you&apos;re applying for a home loan as a
                    self-employed person in Australia, two years of P&amp;L statements are typically
                    required. Start generating them monthly now so you&apos;re always prepared.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2: Understanding Your P&L as an Australian Sole Trader */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Understanding Your P&amp;L as an Australian Sole Trader
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  As an Australian sole trader, your business income is reported on your personal
                  tax return. The ATO requires you to keep records of all business income and
                  expenses for at least five years. A profit and loss statement organises this
                  information into a clear, structured format.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-sm font-bold">01</span>
                      BAS Connection
                    </h4>
                    <p className="text-sm">
                      Your P&amp;L feeds directly into your Business Activity Statement. If
                      you&apos;re GST-registered, your income and expenses need to reconcile with
                      your quarterly BAS lodgement. Keeping a monthly P&amp;L makes BAS time
                      straightforward rather than a last-minute scramble.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-sm font-bold">02</span>
                      Deduction Categories
                    </h4>
                    <p className="text-sm">
                      The ATO allows sole traders to claim deductions for expenses directly related
                      to earning income. This includes home office costs, equipment depreciation,
                      vehicle expenses, and professional development. Our generator uses ATO-aligned
                      categories so nothing falls through the cracks.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-sm font-bold">03</span>
                      Tax Brackets &amp; Medicare Levy
                    </h4>
                    <p className="text-sm">
                      Your net profit (income minus expenses) determines your tax bracket. For
                      2024-25, Australian tax rates range from 0% (up to $18,200) to 45% (over
                      $190,000), plus the 2% Medicare levy. Understanding your bracket helps you
                      plan for quarterly PAYG instalments.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-sm font-bold">04</span>
                      Record Keeping
                    </h4>
                    <p className="text-sm">
                      The ATO can audit your records going back five years. A monthly P&amp;L
                      statement, combined with receipts and bank statements, gives you an airtight
                      paper trail. Use the copy-to-clipboard feature to save your P&amp;L alongside
                      your other financial records.
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-teal-500/10 to-blue-500/10 border border-teal-500/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-teal-400 font-medium mb-2">PAYG Instalments</p>
                  <p className="text-sm">
                    If your business income exceeds certain thresholds, the ATO will ask you to pay
                    quarterly PAYG instalments. Your P&amp;L statement helps you estimate these
                    payments accurately so you&apos;re never caught short. Use our{' '}
                    <Link href="/tools/tax-estimator" className="text-teal-400 hover:underline">
                      Tax Estimator
                    </Link>
                    {' '}for a detailed breakdown of your quarterly obligations.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3: Key Financial Ratios for Freelancers */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Key Financial Ratios for Freelancers
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Raw numbers only tell part of the story. Financial ratios help you benchmark your
                  performance against industry standards and track your business health over time.
                  Here are the ratios every freelancer should monitor:
                </p>
                <div className="overflow-x-auto mt-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-3 px-4 text-white font-semibold">Ratio</th>
                        <th className="text-left py-3 px-4 text-white font-semibold">Formula</th>
                        <th className="text-left py-3 px-4 text-teal-400 font-semibold">Healthy Range</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      <tr>
                        <td className="py-3 px-4 text-white font-medium">Profit Margin</td>
                        <td className="py-3 px-4 font-mono text-xs">Net Profit / Gross Income</td>
                        <td className="py-3 px-4 text-teal-400">40-60% for service businesses</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-white font-medium">Expense Ratio</td>
                        <td className="py-3 px-4 font-mono text-xs">Total Expenses / Gross Income</td>
                        <td className="py-3 px-4 text-teal-400">25-45% for freelancers</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-white font-medium">Effective Tax Rate</td>
                        <td className="py-3 px-4 font-mono text-xs">Total Tax / Net Profit</td>
                        <td className="py-3 px-4 text-teal-400">Varies by bracket (15-35%)</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-white font-medium">Take-Home Rate</td>
                        <td className="py-3 px-4 font-mono text-xs">After-Tax Profit / Gross Income</td>
                        <td className="py-3 px-4 text-teal-400">30-45% for most freelancers</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">By Industry</h4>
                    <p className="text-sm">
                      <strong className="text-white">Developers &amp; IT:</strong> Typically see
                      50-70% profit margins due to low overhead.{' '}
                      <strong className="text-white">Designers:</strong> 40-55% after software
                      subscriptions and equipment.{' '}
                      <strong className="text-white">Writers &amp; Content:</strong> 55-70% with
                      minimal tool costs.{' '}
                      <strong className="text-white">Consultants:</strong> 45-65% depending on
                      travel and entertainment expenses.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Tracking Over Time</h4>
                    <p className="text-sm">
                      Generate a P&amp;L monthly and track your ratios over 12 months. Look for
                      trends: is your profit margin improving or declining? Are expenses growing
                      faster than revenue? Seasonal patterns are normal — most Australian freelancers
                      see a dip in December-January and a peak in March-June (financial year end rush).
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 4: How to Use Your P&L to Grow Your Business */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                How to Use Your P&amp;L to Grow Your Business
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  A profit and loss statement isn&apos;t just a reporting tool — it&apos;s a
                  decision-making tool. Here&apos;s how successful freelancers use their P&amp;L
                  to make smarter business decisions:
                </p>
                <ol className="space-y-4 list-decimal list-inside">
                  <li>
                    <strong className="text-white">Set your rate based on real costs, not guesswork.</strong>{' '}
                    Your P&amp;L shows exactly how much it costs to run your business. If your
                    monthly expenses are $3,000 and you want to earn $8,000 after tax, you can
                    work backwards to calculate your minimum hourly rate. Use our{' '}
                    <Link href="/tools/rate-calculator" className="text-teal-400 hover:underline">
                      Rate Calculator
                    </Link>
                    {' '}to find your ideal rate based on your P&amp;L data.
                  </li>
                  <li>
                    <strong className="text-white">Identify expenses to cut or optimise.</strong>{' '}
                    When you see all your expenses in one place, wasteful spending becomes obvious.
                    That $200/month software subscription you barely use? The $150/month coworking
                    membership when you work from home 4 days a week? Your P&amp;L reveals the
                    fat you can trim without affecting your output.
                  </li>
                  <li>
                    <strong className="text-white">Plan for tax payments before they&apos;re due.</strong>{' '}
                    The estimated tax section of your P&amp;L helps you set aside the right amount
                    each month. A common rule of thumb for Australian freelancers: transfer 30% of
                    every payment received into a separate tax savings account. Your P&amp;L tells
                    you if that percentage should be higher or lower.
                  </li>
                  <li>
                    <strong className="text-white">Decide when to invest in growth.</strong>{' '}
                    Should you hire a subcontractor? Invest in a course? Upgrade your equipment? Your
                    P&amp;L tells you whether you can afford it. If your profit margin is 55% and
                    trending upward, you have room to invest. If it&apos;s 30% and flat, focus on
                    increasing revenue first.
                  </li>
                  <li>
                    <strong className="text-white">Build a case for raising your rates.</strong>{' '}
                    When your P&amp;L shows consistent profitability and growing expenses, it&apos;s
                    time to raise your rates. Historical P&amp;L data gives you the confidence (and
                    the data) to justify higher prices to clients. Freelancers who review their P&amp;L
                    quarterly raise rates 40% more often than those who don&apos;t.
                  </li>
                </ol>
                <div className="bg-gradient-to-r from-teal-500/10 to-blue-500/10 border border-teal-500/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-teal-400 font-medium mb-2">Monthly P&amp;L Habit</p>
                  <p className="text-sm">
                    Set a calendar reminder on the 1st of each month to generate your P&amp;L for
                    the previous month. It takes 10 minutes and gives you a clear picture of your
                    business health. Over 12 months, you&apos;ll build a financial history that&apos;s
                    invaluable for tax planning, loan applications, and strategic decisions. Pair it
                    with our{' '}
                    <Link href="/tools/cashflow-forecast" className="text-teal-400 hover:underline">
                      Cash Flow Forecast
                    </Link>
                    {' '}for a complete financial picture.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-16 text-center glass rounded-2xl p-10">
            <h3 className="text-3xl font-bold text-white heading-font mb-4">
              Track your P&amp;L <span className="gradient-text">automatically</span>
            </h3>
            <p className="text-slate-300 max-w-xl mx-auto mb-6">
              InvoiceFlow tracks your income and expenses in real time, generating profit and
              loss statements automatically. No more manual data entry — just send invoices,
              log expenses, and let InvoiceFlow do the rest.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/signup"
                className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold hover:opacity-90 transition-opacity"
              >
                Start Free — 5 Invoices/Month
              </Link>
              <Link
                href="/tools/expense-deduction-calculator"
                className="inline-block px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all"
              >
                Try Expense Deduction Calculator
              </Link>
            </div>
          </section>
        
        <RelatedTools currentSlug="profit-loss-statement" category="Financial Planning" />
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
