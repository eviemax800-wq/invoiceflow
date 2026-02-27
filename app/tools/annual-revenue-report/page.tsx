import type { Metadata } from 'next';
import Link from 'next/link';
import AnnualRevenueReport from './AnnualRevenueReport';
import RelatedTools from '../components/RelatedTools';
import EmailCapture from '../components/EmailCapture';
import BreadcrumbSchema from '../components/BreadcrumbSchema';
import FAQSchema from '../components/FAQSchema';

const title =
  'Free Annual Revenue Report Generator for Freelancers Australia — Income Summary | InvoiceFlow';
const description =
  'Generate a comprehensive annual revenue report for your freelance business. Client breakdown, monthly analysis, GST collected, profit margins, and key insights. Perfect for tax time and accountant preparation. Free — no signup required.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'freelance annual revenue report',
    'income summary template freelancer australia',
    'annual income report sole trader',
    'freelance revenue report generator',
    'tax return income summary australia',
    'freelance financial summary template',
    'annual revenue report generator free',
    'sole trader income report',
    'freelance income report for accountant',
    'end of year revenue summary freelancer',
    'freelance tax preparation summary',
    'client revenue breakdown template',
  ],
  openGraph: {
    title: 'Annual Revenue Report Generator — Free Tool | InvoiceFlow',
    description:
      'Generate a comprehensive annual revenue report for your freelance business. Client breakdown, monthly analysis, GST, and profit margins. Free for Australian freelancers.',
    url: 'https://www.invoiceflow.au/tools/annual-revenue-report',
    siteName: 'InvoiceFlow',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Annual Revenue Report Generator — Free Tool | InvoiceFlow',
    description:
      'Generate annual revenue reports for your freelance business. Client breakdown, GST, profit margins. Free for Australian freelancers.',
  },
  alternates: {
    canonical: 'https://www.invoiceflow.au/tools/annual-revenue-report',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Annual Revenue Report Generator',
  description:
    'Generate comprehensive annual revenue reports for Australian freelancers and sole traders. Client revenue breakdown, monthly analysis, GST collected, profit margins, and key business insights.',
  url: 'https://www.invoiceflow.au/tools/annual-revenue-report',
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

export default function AnnualRevenueReportPage() {
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
              Annual Revenue{' '}
              <span className="gradient-text">Report Generator</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Generate a comprehensive revenue report for your freelance business. Client
              breakdown, monthly trends, GST collected, and profit analysis — ready to
              share with your accountant or use for tax preparation.
            </p>
          </div>

          {/* Generator Tool */}
          <AnnualRevenueReport />

          {/* SEO Content Sections */}
          <section className="mt-16 space-y-12">
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Why Freelancers Need an Annual Revenue Report
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  As a freelancer or sole trader in Australia, understanding your annual revenue
                  is critical for <strong className="text-white">tax compliance, business
                  planning, and financial health</strong>. Unlike employees who get a payment
                  summary from their employer, freelancers are responsible for tracking their own
                  income and reporting it to the ATO.
                </p>
                <p>
                  An annual revenue report gives you a clear picture of where your money came
                  from, how it was distributed across clients and months, and whether your
                  business is growing or contracting. It&apos;s also the foundation your
                  accountant needs to prepare your tax return.
                </p>
                <div className="grid sm:grid-cols-3 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-teal-400">$75,000</p>
                    <p className="text-xs text-slate-500 mt-1">
                      GST registration threshold — must register if annual turnover exceeds this
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-amber-400">5 years</p>
                    <p className="text-xs text-slate-500 mt-1">
                      How long the ATO requires you to keep financial records
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-blue-400">Jun 30</p>
                    <p className="text-xs text-slate-500 mt-1">
                      Australian financial year end — deadline for annual reconciliation
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                What to Include in Your Freelance Revenue Report
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  A complete annual revenue report should capture more than just total income.
                  Breaking it down by client, month, and category reveals patterns that help
                  you make better business decisions.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Revenue Metrics</h4>
                    <ul className="text-sm space-y-1.5 text-slate-400">
                      <li>Gross revenue (total invoiced)</li>
                      <li>Revenue ex GST (your actual income)</li>
                      <li>GST collected (for BAS reporting)</li>
                      <li>Average invoice value</li>
                      <li>Number of invoices issued</li>
                    </ul>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Business Insights</h4>
                    <ul className="text-sm space-y-1.5 text-slate-400">
                      <li>Client concentration (risk analysis)</li>
                      <li>Monthly revenue trends</li>
                      <li>Best and worst performing months</li>
                      <li>Profit margin after expenses</li>
                      <li>Year-over-year growth comparison</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Preparing for Your Tax Return — What Your Accountant Needs
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  When you visit your accountant or registered tax agent for your annual tax
                  return, having a well-organised revenue report saves time (and money — most
                  accountants charge by the hour). Here&apos;s what they typically need:
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Income Documentation</h4>
                    <ul className="text-sm space-y-1.5 text-slate-400">
                      <li>Total gross income for the financial year</li>
                      <li>GST collected and GST paid (for BAS reconciliation)</li>
                      <li>Breakdown by client or income source</li>
                      <li>Any foreign income received</li>
                      <li>Interest income from business accounts</li>
                    </ul>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Expense Records</h4>
                    <ul className="text-sm space-y-1.5 text-slate-400">
                      <li>Business expenses with receipts</li>
                      <li>Home office expenses (fixed rate or actual cost)</li>
                      <li>Vehicle and travel expenses</li>
                      <li>Equipment depreciation schedule</li>
                      <li>Super contributions made</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-teal-500/10 to-blue-500/10 border border-teal-500/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-teal-400 font-medium mb-2">Save on Accounting Fees</p>
                  <p className="text-sm">
                    A well-prepared revenue report can save you 30-50% on accounting fees. Instead
                    of paying your accountant to sort through a shoebox of receipts and bank
                    statements, give them a clean summary. Most accountants charge $150-300/hour —
                    even saving one hour pays for itself many times over. Use this report alongside
                    our{' '}
                    <a href="/tools/expense-report-generator" className="text-teal-400 hover:underline">
                      Expense Report Generator
                    </a>{' '}
                    for a complete tax-ready package.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Client Concentration Risk — Why It Matters
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  One of the most overlooked risks in freelancing is <strong className="text-white">
                  client concentration</strong> — when too much of your revenue comes from a
                  single client. If that client cuts their budget, changes direction, or goes
                  under, your income drops dramatically overnight.
                </p>
                <p>
                  Financial advisors generally recommend that no single client should represent
                  more than 30% of your total revenue. If you find yourself above this threshold,
                  it&apos;s a signal to diversify — even if that top client is great to work with.
                </p>
                <div className="grid sm:grid-cols-3 gap-4 mt-4">
                  <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-xl p-4 text-center">
                    <p className="text-emerald-400 font-bold mb-1">Under 30%</p>
                    <p className="text-xs text-slate-400">Healthy diversification — no single client dominates</p>
                  </div>
                  <div className="bg-amber-500/5 border border-amber-500/20 rounded-xl p-4 text-center">
                    <p className="text-amber-400 font-bold mb-1">30% — 50%</p>
                    <p className="text-xs text-slate-400">Moderate risk — actively seek new clients to rebalance</p>
                  </div>
                  <div className="bg-rose-500/5 border border-rose-500/20 rounded-xl p-4 text-center">
                    <p className="text-rose-400 font-bold mb-1">Over 50%</p>
                    <p className="text-xs text-slate-400">High risk — losing this client would halve your income</p>
                  </div>
                </div>
                <p className="text-sm mt-4">
                  Use our{' '}
                  <a href="/tools/client-risk-analyzer" className="text-teal-400 hover:underline">
                    Client Concentration Risk Analyzer
                  </a>{' '}
                  for a detailed analysis with HHI scoring and a diversification plan.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-16 text-center glass rounded-2xl p-10">
            <h3 className="text-3xl font-bold text-white heading-font mb-4">
              Track revenue <span className="gradient-text">automatically</span>
            </h3>
            <p className="text-slate-300 max-w-xl mx-auto mb-6">
              InvoiceFlow generates your annual revenue report automatically from your invoicing
              data. Client breakdowns, monthly trends, GST calculations, and profit analysis —
              all updated in real-time as you invoice. No manual data entry needed.
            </p>
            <Link
              href="/signup"
              className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold hover:opacity-90 transition-opacity"
            >
              Start Free — 5 Invoices/Month
            </Link>
          </section>
        
        <RelatedTools currentSlug="annual-revenue-report" category="Financial Planning" />
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
