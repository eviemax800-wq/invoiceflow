import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Cash Flow Forecast: Complete Guide for Freelancers & Sole Traders Australia — InvoiceFlow',
  description:
    'What is a cash flow forecast? Learn how to build a 13-week cash flow forecast, project freelance income, plan for tax obligations, spot warning signs, and implement cash flow strategies. Includes templates, worked examples, and tips for Australian freelancers and sole traders.',
  keywords: [
    'cash flow forecast template',
    'cash flow projection freelancer',
    'cash flow forecast meaning',
    '13 week cash flow forecast',
    'cash flow planning small business australia',
    'cash flow forecast for sole traders',
    'cash flow forecast example',
    'freelancer cash flow projection',
    'cash flow forecast spreadsheet',
    'cash flow forecast vs cash flow statement',
    'small business cash flow planning',
    'quarterly cash flow forecast australia',
  ],
  alternates: { canonical: '/glossary/cash-flow-forecast' },
  openGraph: {
    title: 'Cash Flow Forecast: Complete Guide for Freelancers & Sole Traders Australia — InvoiceFlow',
    description:
      'Everything you need to know about cash flow forecasting: definition, types (13-week, monthly, annual, project-based), step-by-step guide to building a forecast, warning signs, strategies for Australian freelancers, and how InvoiceFlow automates the process.',
    url: 'https://invoiceflow-teal.vercel.app/glossary/cash-flow-forecast',
    type: 'article',
  },
};

const BASE_URL = 'https://invoiceflow-teal.vercel.app';

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Glossary', item: `${BASE_URL}/glossary` },
    { '@type': 'ListItem', position: 3, name: 'Cash Flow Forecast', item: `${BASE_URL}/glossary/cash-flow-forecast` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How far ahead should freelancers forecast their cash flow?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most freelancers should maintain a rolling 13-week (one quarter) cash flow forecast as their primary planning tool. This covers one full BAS quarter and is long enough to spot upcoming cash gaps while being short enough that estimates remain reasonably accurate. In addition, maintain a higher-level monthly forecast for 6-12 months ahead for bigger-picture planning like tax obligations, seasonal dips, and equipment purchases. Update both forecasts weekly — the 13-week forecast should be reviewed every Monday morning as part of your financial routine. For freelancers with highly irregular income (e.g., project-based work with long gaps), extending the detailed forecast to 26 weeks can provide better visibility.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best cash flow forecast method for sole traders?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The best method for most sole traders is the direct method 13-week rolling forecast. Start with your current bank balance, then list expected cash inflows week by week (confirmed project payments, retainer fees, recurring revenue) and subtract expected outflows (rent, software subscriptions, insurance, phone, internet, subcontractor costs). Add a separate row for tax obligations (estimated income tax, GST remittance, superannuation contributions). The closing balance each week becomes the opening balance for the next. Use probability weighting for unconfirmed income: 75% for proposals submitted, 50% for verbal agreements, 25% for pipeline leads. A simple Google Sheet or Excel spreadsheet with 13 columns works perfectly — you do not need expensive software. The key is updating it weekly and using conservative estimates for income.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I account for GST and BAS in my cash flow forecast?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'GST and BAS should be treated as a separate line item in your cash flow forecast, not lumped in with general expenses. If you report GST on a cash basis, you only owe GST on payments you have actually received — so your forecast should track GST collected on actual receipts. If you report on an accruals basis, you owe GST when you invoice, regardless of whether the client has paid. In your forecast, set aside 1/11th of every GST-inclusive payment received (or invoiced, if on accruals) into a dedicated tax savings account. Mark BAS due dates in your forecast (typically 28 days after the end of each quarter: 28 October, 28 February, 28 April, 28 July). Include PAYG instalments if you pay them quarterly. This prevents the common freelancer mistake of spending GST money and then scrambling to pay the BAS.',
      },
    },
    {
      '@type': 'Question',
      name: 'What percentage of income should freelancers keep as cash reserve?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Freelancers should maintain two separate reserves: a tax reserve and an emergency fund. For the tax reserve, set aside 30-35% of every dollar earned — this covers income tax (at your marginal rate), GST (if registered), Medicare Levy (2%), and voluntary superannuation contributions (11.5% recommended in 2025-26). Keep this in a separate high-interest savings account and do not touch it. For the emergency fund, aim for 3 months of total expenses (business plus personal) as the minimum, and 6 months as the target. If your monthly expenses are $5,000, that means $15,000-$30,000 in accessible savings. In total, a freelancer earning $120,000 per year should have approximately $36,000-$42,000 set aside for tax and $15,000-$30,000 in emergency reserves. Build these gradually — even starting with one month of expenses provides meaningful protection against cash flow gaps.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do seasonal income fluctuations affect cash flow forecasting?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Seasonal fluctuations are one of the most important factors in freelance cash flow forecasting, and failing to account for them is a common cause of cash crises. In Australia, December-January is notoriously quiet for most freelancers — clients go on holiday, budgets freeze, and new projects stall until February. This creates a 6-8 week revenue gap while expenses continue uninterrupted. To forecast for seasonality: (1) Review your income from the past 2-3 years and identify your quietest months, (2) Build a "seasonal adjustment" row in your forecast that reduces expected income by 30-50% during historically quiet periods, (3) During peak months, set aside extra cash specifically earmarked for quiet periods — treat it as a seasonal reserve separate from your emergency fund, (4) Consider offering discounts or promotions during quiet periods to attract counter-cyclical work, (5) Diversify into industries with different seasonal patterns to smooth out your income curve.',
      },
    },
  ],
};

const tocItems = [
  { id: 'what-is-cash-flow-forecast', label: '1. What Is a Cash Flow Forecast?' },
  { id: 'types-of-forecasts', label: '2. Types of Cash Flow Forecasts' },
  { id: 'how-to-build', label: '3. How to Build a Cash Flow Forecast' },
  { id: 'warning-signs', label: '4. Cash Flow Warning Signs' },
  { id: 'strategies', label: '5. Cash Flow Strategies for Australian Freelancers' },
  { id: 'invoiceflow-forecasting', label: '6. How InvoiceFlow Helps' },
];

const relatedTools = [
  {
    href: '/tools/gst-calculator',
    name: 'GST Calculator',
    description: 'Calculate GST on your invoices and forecast your quarterly BAS obligation — essential for accurate cash flow projections.',
    icon: (
      <svg className="w-6 h-6 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    href: '/tools/late-payment-calculator',
    name: 'Late Payment Calculator',
    description: 'Calculate the cost of late payments on your cash flow — see how overdue invoices impact your forecast accuracy.',
    icon: (
      <svg className="w-6 h-6 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    href: '/tools/profit-margin-calculator',
    name: 'Profit Margin Calculator',
    description: 'Understand your true profit margin to build more accurate revenue projections into your cash flow forecast.',
    icon: (
      <svg className="w-6 h-6 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    href: '/tools/tax-estimator',
    name: 'Tax Estimator',
    description: 'Estimate your income tax, Medicare Levy, and PAYG instalments to include accurate tax obligations in your forecast.',
    icon: (
      <svg className="w-6 h-6 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
      </svg>
    ),
  },
];

const relatedGuides = [
  {
    href: '/guides/getting-paid-faster',
    name: 'Getting Paid Faster',
    description: 'Proven strategies to reduce payment delays, chase overdue invoices, and keep cash flowing into your business on schedule.',
  },
  {
    href: '/guides/gst-for-freelancers',
    name: 'GST for Freelancers',
    description: 'How GST works for freelancers, when to register, BAS reporting, and how to account for GST in your cash flow forecast.',
  },
  {
    href: '/guides/tax-guide-freelancers',
    name: 'Tax Guide for Freelancers',
    description: 'Complete guide to income tax, PAYG, superannuation, and deductions for Australian freelancers and sole traders.',
  },
];

export default function CashFlowForecastGlossaryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative px-4 pt-20 pb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-500/10 via-blue-500/10 to-sky-500/10 blur-3xl" />
        <div className="relative max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/glossary" className="hover:text-white transition-colors">Glossary</Link>
            <span>/</span>
            <span className="text-white">Cash Flow Forecast</span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            Glossary &mdash; Financial Planning
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Cash Flow Forecast{' '}
            <span className="bg-gradient-to-r from-sky-500 to-blue-500 bg-clip-text text-transparent">
              Explained for Freelancers
            </span>
          </h1>

          {/* Summary */}
          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            A cash flow forecast is your financial early warning system &mdash; it projects when money will arrive, when it will leave, and whether you will have enough to cover your obligations. This guide covers everything: what cash flow forecasting means, the four types of forecasts, a step-by-step guide to building one, warning signs to watch, and proven strategies for Australian freelancers and sole traders.
          </p>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>14 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Australia-Focused 2025-26</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
              </svg>
              <span>Updated March 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* In a Nutshell */}
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <div className="rounded-2xl bg-gradient-to-br from-sky-500/10 to-blue-500/10 border border-sky-500/20 p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-sky-500/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-white">In a Nutshell</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-sky-500/20 flex items-center justify-center text-sky-400 text-xs font-bold">$26B</span>
              <div>
                <p className="text-white font-medium text-sm">Late Payments to AU SMEs</p>
                <p className="text-gray-400 text-sm">Total owed in overdue invoices to Australian small businesses &mdash; forecasting helps you plan for delays</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-sky-500/20 flex items-center justify-center text-sky-400 text-xs font-bold">33d</span>
              <div>
                <p className="text-white font-medium text-sm">Average AU Invoice Payment Time</p>
                <p className="text-gray-400 text-sm">Australian businesses take an average of 33 days to pay &mdash; your forecast must account for this lag</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-sky-500/20 flex items-center justify-center text-sky-400 text-xs font-bold">3mo</span>
              <div>
                <p className="text-white font-medium text-sm">Recommended Emergency Fund</p>
                <p className="text-gray-400 text-sm">Minimum 3 months of expenses saved as a buffer for cash flow gaps and seasonal dips</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-sky-500/20 flex items-center justify-center text-sky-400 text-xs font-bold">30-35%</span>
              <div>
                <p className="text-white font-medium text-sm">Tax Reserve Percentage</p>
                <p className="text-gray-400 text-sm">Set aside 30-35% of income for tax, GST, Medicare Levy, and superannuation contributions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <div className="rounded-2xl bg-gray-800/50 border border-gray-700/50 p-8">
          <h2 className="text-lg font-bold text-white mb-4">Table of Contents</h2>
          <nav className="grid sm:grid-cols-2 gap-2">
            {tocItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="flex items-center gap-2 text-gray-400 hover:text-sky-400 transition-colors text-sm py-1"
              >
                <svg className="w-4 h-4 text-sky-500/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Content Sections */}
      <div className="max-w-4xl mx-auto px-4 pb-16 space-y-16">

        {/* Section 1: What Is a Cash Flow Forecast? */}
        <section id="what-is-cash-flow-forecast">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold">1</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">What Is a Cash Flow Forecast?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              A cash flow forecast is a <strong className="text-white">projection of your future cash inflows and outflows over a specific period</strong>. It estimates when money will arrive, when it will leave, and what your running balance will look like at any future point. Think of it as a financial weather forecast &mdash; not perfect, but it tells you whether to expect sunshine or storms.
            </p>
            <p className="text-gray-300 leading-relaxed">
              The critical distinction: a <strong className="text-white">cash flow statement</strong> is <em>historical</em> (money that has already moved), while a <strong className="text-white">cash flow forecast</strong> is <em>predictive</em> (money you expect to receive and spend). The forecast is what prevents cash crises &mdash; it gives you time to act before problems hit.
            </p>

            <div className="rounded-2xl border border-gray-700/50 overflow-hidden mt-6">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-800/80">
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-3">Aspect</th>
                    <th className="text-left text-sm font-medium text-sky-400 px-6 py-3">Cash Flow Statement</th>
                    <th className="text-left text-sm font-medium text-blue-400 px-6 py-3">Cash Flow Forecast</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700/50">
                  {[
                    { aspect: 'Direction', statement: 'Looks backward (historical)', forecast: 'Looks forward (predictive)' },
                    { aspect: 'Data', statement: 'Actual transactions', forecast: 'Estimated future transactions' },
                    { aspect: 'Purpose', statement: 'Reporting & analysis', forecast: 'Planning & prevention' },
                    { aspect: 'Accuracy', statement: '100% (actual figures)', forecast: 'Estimated (improves with practice)' },
                    { aspect: 'Updates', statement: 'Monthly or quarterly', forecast: 'Weekly (rolling)' },
                    { aspect: 'Key Question', statement: '"Where did the money go?"', forecast: '"Will I have enough money?"' },
                  ].map((row, i) => (
                    <tr key={i} className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-2 text-gray-300 text-sm font-medium">{row.aspect}</td>
                      <td className="px-6 py-2 text-gray-400 text-sm">{row.statement}</td>
                      <td className="px-6 py-2 text-gray-400 text-sm">{row.forecast}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-bold text-white mt-8 mb-4">Why Freelancers Need a Cash Flow Forecast</h3>
            <p className="text-gray-300 leading-relaxed">
              Freelancers face a unique set of financial challenges that make forecasting not optional but <strong className="text-white">essential for survival</strong>. Unlike salaried employees with predictable fortnightly deposits, freelancers deal with:
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-sky-400 font-semibold mb-2">Irregular Income</h4>
                <p className="text-gray-400 text-sm">One month you earn $15,000, the next $3,000. Projects start and end unpredictably while expenses remain constant &mdash; rent, insurance, software, and food do not care about your revenue cycle.</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-sky-400 font-semibold mb-2">Seasonal Fluctuations</h4>
                <p className="text-gray-400 text-sm">December-January is notoriously quiet across most Australian industries. Clients holiday, budgets freeze, projects stall until February. This 6-8 week gap drains accounts without proper planning.</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-sky-400 font-semibold mb-2">Project Gaps</h4>
                <p className="text-gray-400 text-sm">A two-week gap between projects seems minor, but combined with 30-day payment terms on the completed project, you could face 6 weeks without income hitting your account.</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-sky-400 font-semibold mb-2">Tax Obligations</h4>
                <p className="text-gray-400 text-sm">Quarterly BAS, PAYG instalments, annual income tax, and super contributions create large outflows freelancers must plan for &mdash; or face ATO penalties and interest charges.</p>
              </div>
            </div>

            <div className="rounded-xl bg-sky-500/5 border border-sky-500/20 p-5 mt-6">
              <p className="text-sky-400 font-medium mb-2">The $26 Billion Problem</p>
              <p className="text-gray-400 text-sm">
                Australian SMEs are owed <strong className="text-gray-200">$26 billion in late payments</strong>, with invoices averaging 33 days to get paid. A forecast does not eliminate late payments, but it lets you <strong className="text-gray-200">plan around them</strong> instead of being blindsided.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Types of Cash Flow Forecasts */}
        <section id="types-of-forecasts">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold">2</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Types of Cash Flow Forecasts</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              The right forecast type depends on your planning horizon, detail level, and the decisions you need to make. Here are the four main types:
            </p>

            <div className="space-y-4 mt-6">
              {[
                {
                  type: '13-Week Rolling Forecast',
                  tag: 'Most Recommended',
                  color: 'text-sky-400',
                  bg: 'bg-sky-500/10',
                  border: 'border-sky-500/20',
                  bestFor: 'Day-to-day cash management, spotting upcoming gaps, BAS quarter planning',
                  detail: 'Weekly breakdown with individual income items and expense categories',
                  why: 'Covers one full BAS quarter, aligns with quarterly tax obligations, and is short enough that income estimates remain reasonably accurate. Updated weekly by rolling forward — week 1 drops off, a new week 13 is added. This is the gold standard for freelancer cash flow management.',
                },
                {
                  type: 'Monthly Forecast (3-12 Months)',
                  tag: 'Higher-level planning',
                  color: 'text-blue-400',
                  bg: 'bg-blue-500/10',
                  border: 'border-blue-500/20',
                  bestFor: 'Medium-term planning, seasonal preparation, tracking business growth trends',
                  detail: 'Monthly totals for income, expenses, and tax — less granular than weekly',
                  why: 'Broader view of your financial trajectory. Ideal for identifying seasonal patterns (the December-January dip), planning for annual expenses (insurance renewals, equipment upgrades), and setting savings targets.',
                },
                {
                  type: 'Annual Forecast',
                  tag: 'Budget planning',
                  color: 'text-indigo-400',
                  bg: 'bg-indigo-500/10',
                  border: 'border-indigo-500/20',
                  bestFor: 'Annual budgeting, tax estimates, financial year planning (1 Jul \u2013 30 Jun)',
                  detail: 'Quarterly or monthly summaries with broad revenue and expense categories',
                  why: 'Helps you set revenue targets, estimate total tax obligations, plan capital expenditures, and decide whether to increase rates. Critical for answering: "Am I building a sustainable business?"',
                },
                {
                  type: 'Project-Based Forecast',
                  tag: 'Per-project cash flow',
                  color: 'text-cyan-400',
                  bg: 'bg-cyan-500/10',
                  border: 'border-cyan-500/20',
                  bestFor: 'Large projects ($5K+), projects with subcontractors, milestone-based billing',
                  detail: 'Per-milestone income and expense tracking tied to project phases',
                  why: 'Maps timing of deposits, milestones, and final invoices against project expenses. Shows exactly when each project generates positive or negative cash flow — preventing the problem of funding costs out of pocket for weeks.',
                },
              ].map((item, i) => (
                <div key={i} className={`rounded-xl ${item.bg} border ${item.border} p-6`}>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className={`text-lg font-semibold ${item.color}`}>{item.type}</h3>
                    <span className="text-xs text-gray-500">{item.tag}</span>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3 mb-3">
                    <div>
                      <p className="text-xs text-green-400 font-medium mb-1">Best For</p>
                      <p className="text-gray-400 text-sm">{item.bestFor}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium mb-1">Detail Level</p>
                      <p className="text-gray-400 text-sm">{item.detail}</p>
                    </div>
                  </div>
                  <div className="rounded-lg bg-gray-800/50 p-3">
                    <p className="text-xs text-gray-500 font-medium mb-1">Why It Works</p>
                    <p className="text-gray-300 text-sm">{item.why}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Comparison Table */}
            <h3 className="text-xl font-bold text-white mt-8 mb-4">Forecast Type Comparison</h3>
            <div className="rounded-2xl border border-gray-700/50 overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-800/80">
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Type</th>
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Horizon</th>
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Detail</th>
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Accuracy</th>
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Update Cycle</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700/50">
                  {[
                    { type: '13-Week Rolling', horizon: '1 quarter', detail: 'High (weekly)', accuracy: 'High (85-95%)', update: 'Weekly' },
                    { type: 'Monthly', horizon: '3-12 months', detail: 'Medium (monthly)', accuracy: 'Medium (70-85%)', update: 'Monthly' },
                    { type: 'Annual', horizon: '12 months', detail: 'Low (quarterly)', accuracy: 'Lower (50-70%)', update: 'Quarterly' },
                    { type: 'Project-Based', horizon: 'Project duration', detail: 'High (per milestone)', accuracy: 'High (80-90%)', update: 'Per milestone' },
                  ].map((row, i) => (
                    <tr key={i} className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-sky-400 text-sm font-bold">{row.type}</td>
                      <td className="px-6 py-3 text-gray-300 text-sm">{row.horizon}</td>
                      <td className="px-6 py-3 text-gray-300 text-sm">{row.detail}</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">{row.accuracy}</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">{row.update}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="rounded-xl bg-sky-500/5 border border-sky-500/20 p-5 mt-6">
              <p className="text-sky-400 font-medium mb-2">Which One Should You Use?</p>
              <p className="text-gray-400 text-sm">
                If you only build one forecast, make it the <strong className="text-gray-200">13-week rolling forecast</strong>. It is the most actionable for freelancers because it covers one full BAS quarter, has enough detail to catch problems early, and is short enough that your estimates remain useful. Once you are comfortable with the 13-week forecast, add a <strong className="text-gray-200">monthly 6-12 month forecast</strong> for bigger-picture planning. Use project-based forecasts for any engagement over $5,000.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: How to Build a Cash Flow Forecast */}
        <section id="how-to-build">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold">3</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">How to Build a Cash Flow Forecast</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Building a forecast is simpler than most think. A spreadsheet and 30 minutes per week is enough &mdash; no expensive software required. Here is the step-by-step process:
            </p>

            <div className="space-y-4 mt-6">
              {/* Step 1 */}
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-500/10 flex items-center justify-center">
                    <span className="text-sky-400 font-bold text-sm">1</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">List Expected Income</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  List every expected income source. Be conservative &mdash; the biggest mistake is overestimating income. Apply <strong className="text-gray-200">probability weighting</strong> by confidence level:
                </p>
                <div className="grid sm:grid-cols-3 gap-3">
                  <div className="rounded-lg bg-green-500/10 border border-green-500/20 p-4">
                    <p className="text-green-400 text-sm font-bold mb-1">75% Confident</p>
                    <p className="text-gray-400 text-xs">Proposals submitted and likely to close. Quote accepted verbally but not signed. Include 75% of the value in your forecast.</p>
                  </div>
                  <div className="rounded-lg bg-amber-500/10 border border-amber-500/20 p-4">
                    <p className="text-amber-400 text-sm font-bold mb-1">50% Confident</p>
                    <p className="text-gray-400 text-xs">Verbal agreements or strong leads. Client has expressed interest but not committed. Include 50% of the value in your forecast.</p>
                  </div>
                  <div className="rounded-lg bg-red-500/10 border border-red-500/20 p-4">
                    <p className="text-red-400 text-sm font-bold mb-1">25% Confident</p>
                    <p className="text-gray-400 text-xs">Pipeline leads, initial conversations, repeat client who might have work. Include 25% of the value &mdash; or leave out entirely for a conservative forecast.</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mt-4">
                  <strong className="text-gray-200">Confirmed income</strong> (signed contracts, active retainers, sent invoices) goes in at 100%. Map each payment to the week you expect to <em>receive</em> it &mdash; not when you invoice, but when money actually lands based on the client&apos;s typical payment speed.
                </p>
              </div>

              {/* Step 2 */}
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-500/10 flex items-center justify-center">
                    <span className="text-sky-400 font-bold text-sm">2</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">List Expected Expenses</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  List every expense you expect during the forecast period. Separate them into <strong className="text-gray-200">fixed</strong> (predictable, recurring) and <strong className="text-gray-200">variable</strong> (changes based on work volume) categories:
                </p>
                <div className="rounded-2xl border border-gray-700/50 overflow-hidden">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-800/80">
                        <th className="text-left text-sm font-medium text-gray-300 px-6 py-3">Fixed Expenses</th>
                        <th className="text-right text-sm font-medium text-gray-300 px-6 py-3">Typical Cost</th>
                        <th className="text-left text-sm font-medium text-gray-300 px-6 py-3">Variable Expenses</th>
                        <th className="text-right text-sm font-medium text-gray-300 px-6 py-3">Typical Cost</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700/50">
                      {[
                        { fixed: 'Insurance (PI)', fixedCost: '$25/mo', variable: 'Subcontractors', varCost: 'Per project' },
                        { fixed: 'Software subscriptions', fixedCost: '$150-300/mo', variable: 'Materials & supplies', varCost: 'Per project' },
                        { fixed: 'Internet & phone', fixedCost: '$120/mo', variable: 'Travel & meetings', varCost: '$100-500/mo' },
                        { fixed: 'Co-working / home office', fixedCost: '$200-500/mo', variable: 'Marketing', varCost: '$0-500/mo' },
                        { fixed: 'Accounting software', fixedCost: '$30-60/mo', variable: 'Professional development', varCost: '$100-300/qtr' },
                      ].map((row, i) => (
                        <tr key={i} className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                          <td className="px-6 py-2 text-gray-300 text-sm">{row.fixed}</td>
                          <td className="px-6 py-2 text-sky-400 text-sm text-right">{row.fixedCost}</td>
                          <td className="px-6 py-2 text-gray-300 text-sm">{row.variable}</td>
                          <td className="px-6 py-2 text-sky-400 text-sm text-right">{row.varCost}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Step 3 */}
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-500/10 flex items-center justify-center">
                    <span className="text-sky-400 font-bold text-sm">3</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Add Tax Obligations</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  Tax catches most freelancers off guard. Include every obligation as a separate line item:
                </p>
                <div className="rounded-2xl border border-gray-700/50 overflow-hidden">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-800/80">
                        <th className="text-left text-sm font-medium text-gray-300 px-6 py-3">Obligation</th>
                        <th className="text-left text-sm font-medium text-gray-300 px-6 py-3">Frequency</th>
                        <th className="text-left text-sm font-medium text-gray-300 px-6 py-3">Key Detail</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700/50">
                      {[
                        { tax: 'BAS / GST', freq: 'Quarterly', detail: 'Due 28 days after quarter end. Set aside 1/11th of GST-inclusive payments.' },
                        { tax: 'PAYG Instalments', freq: 'Quarterly', detail: 'Income tax prepayments per ATO notice. Based on prior year income.' },
                        { tax: 'Income Tax', freq: 'Annual', detail: 'Due 31 Oct (self-lodging) or extended date via tax agent. Plan months ahead.' },
                        { tax: 'Superannuation', freq: 'Monthly/Quarterly', detail: '11.5% of income recommended (2025-26). Tax-deductible up to $30,000/year.' },
                      ].map((row, i) => (
                        <tr key={i} className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                          <td className="px-6 py-2 text-sky-400 text-sm font-bold">{row.tax}</td>
                          <td className="px-6 py-2 text-gray-300 text-sm">{row.freq}</td>
                          <td className="px-6 py-2 text-gray-400 text-sm">{row.detail}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Step 4 */}
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-500/10 flex items-center justify-center">
                    <span className="text-sky-400 font-bold text-sm">4</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Calculate Net Cash Flow Per Period</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  For each week (or month, depending on your forecast type), calculate: <strong className="text-gray-200">Net Cash Flow = Total Inflows - Total Outflows - Tax Set-Asides</strong>. A positive number means more money is coming in than going out that period. A negative number means you are spending more than you are receiving &mdash; which is normal in some weeks but becomes a problem if it persists. The net cash flow tells you whether your business is generating or consuming cash in each period.
                </p>
              </div>

              {/* Step 5 */}
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-500/10 flex items-center justify-center">
                    <span className="text-sky-400 font-bold text-sm">5</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Track Running Balance</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  The running balance is the most important number in your entire forecast. It answers the question: <strong className="text-gray-200">&quot;How much money will I actually have at any point in the future?&quot;</strong> Calculate it as: <strong className="text-gray-200">Closing Balance = Opening Balance + Net Cash Flow</strong>. The closing balance of each period becomes the opening balance of the next. If the running balance drops below your comfort threshold (typically 2 months of expenses) at any point in the forecast, you have a <em>cash flow gap</em> &mdash; and you now have time to address it.
                </p>
              </div>
            </div>

            {/* Worked Example */}
            <h3 className="text-xl font-bold text-white mt-8 mb-4">Worked Example: Freelance Designer Earning $120K/Year</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Sarah is a freelance graphic designer in Melbourne earning ~$120,000/year ($10,000/month average). She has two retainer clients and project work. Here is her quarterly forecast (January&ndash;March):
            </p>
            <div className="rounded-2xl border border-gray-700/50 overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-800/80">
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-3">Line Item</th>
                    <th className="text-right text-sm font-medium text-gray-300 px-4 py-3">Jan</th>
                    <th className="text-right text-sm font-medium text-gray-300 px-4 py-3">Feb</th>
                    <th className="text-right text-sm font-medium text-gray-300 px-4 py-3">Mar</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700/50">
                  {[
                    { item: 'Retainer Client A', jan: '$3,000', feb: '$3,000', mar: '$3,000', color: 'text-green-400' },
                    { item: 'Retainer Client B', jan: '$2,000', feb: '$2,000', mar: '$2,000', color: 'text-green-400' },
                    { item: 'Project Work (confirmed)', jan: '$0', feb: '$4,500', mar: '$6,000', color: 'text-green-400' },
                    { item: 'Pipeline (50% weighted)', jan: '$0', feb: '$0', mar: '$1,500', color: 'text-green-400' },
                  ].map((row, i) => (
                    <tr key={i} className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-2 text-gray-300 text-sm">{row.item}</td>
                      <td className={`px-4 py-2 ${row.color} text-sm text-right`}>{row.jan}</td>
                      <td className={`px-4 py-2 ${row.color} text-sm text-right`}>{row.feb}</td>
                      <td className={`px-4 py-2 ${row.color} text-sm text-right`}>{row.mar}</td>
                    </tr>
                  ))}
                  <tr className="bg-gray-800/50">
                    <td className="px-6 py-2 text-white text-sm font-bold">Total Inflows</td>
                    <td className="px-4 py-2 text-green-400 text-sm text-right font-bold">$5,000</td>
                    <td className="px-4 py-2 text-green-400 text-sm text-right font-bold">$9,500</td>
                    <td className="px-4 py-2 text-green-400 text-sm text-right font-bold">$12,500</td>
                  </tr>
                  <tr className="bg-gray-800/50">
                    <td className="px-6 py-2 text-white text-sm font-bold">Total Outflows</td>
                    <td className="px-4 py-2 text-red-400 text-sm text-right font-bold">$4,865</td>
                    <td className="px-4 py-2 text-red-400 text-sm text-right font-bold">$6,165</td>
                    <td className="px-4 py-2 text-red-400 text-sm text-right font-bold">$6,765</td>
                  </tr>
                  <tr className="bg-gray-800/30">
                    <td className="px-6 py-2 text-gray-300 text-sm">Tax reserve (30%)</td>
                    <td className="px-4 py-2 text-amber-400 text-sm text-right">$1,500</td>
                    <td className="px-4 py-2 text-amber-400 text-sm text-right">$2,850</td>
                    <td className="px-4 py-2 text-amber-400 text-sm text-right">$3,750</td>
                  </tr>
                  <tr className="bg-sky-900/20">
                    <td className="px-6 py-2 text-sky-400 text-sm font-bold">Net Cash Flow</td>
                    <td className="px-4 py-2 text-red-400 text-sm text-right font-bold">-$1,365</td>
                    <td className="px-4 py-2 text-green-400 text-sm text-right font-bold">+$485</td>
                    <td className="px-4 py-2 text-green-400 text-sm text-right font-bold">+$1,985</td>
                  </tr>
                  <tr className="bg-sky-900/30">
                    <td className="px-6 py-2 text-white text-sm font-bold">Running Balance</td>
                    <td className="px-4 py-2 text-white text-sm text-right font-bold">$10,635</td>
                    <td className="px-4 py-2 text-white text-sm text-right font-bold">$11,120</td>
                    <td className="px-4 py-2 text-white text-sm text-right font-bold">$13,105</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-500 text-xs mt-2 italic">* Opening balance: $12,000. Outflows include home office ($400), software ($220), insurance ($25), phone ($120), marketing ($100-200), subcontractors ($0-1,800), and personal drawings ($4,000). January dips due to seasonal slowdown but the emergency fund covers the gap.</p>

            <div className="rounded-xl bg-sky-500/5 border border-sky-500/20 p-5 mt-6">
              <p className="text-sky-400 font-medium mb-2">What This Forecast Reveals</p>
              <p className="text-gray-400 text-sm">
                Without a forecast, Sarah might panic in January when income drops to $5,000. But she forecast this seasonal dip and built a $12,000 buffer. Her running balance stays above $10,000 all quarter &mdash; well above the <strong className="text-gray-200">$9,730 minimum</strong> needed for 2 months of expenses. This is the power of forecasting: <strong className="text-gray-200">problems become manageable when you see them coming</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Cash Flow Warning Signs */}
        <section id="warning-signs">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold">4</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Cash Flow Warning Signs</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Your cash flow forecast is an early warning system &mdash; but only if you know what warning signs to look for. Here are six red flags every freelancer should monitor, with a traffic light system to help you assess severity:
            </p>

            <div className="space-y-4 mt-6">
              {[
                {
                  num: '1',
                  title: 'Running Balance Below 2 Months of Expenses',
                  desc: 'Your running balance is the most critical number in your forecast. Below two months of expenses means one late-paying client, one cancelled project, or one unexpected expense could leave you unable to cover your obligations.',
                  green: { label: 'GREEN: 3+ Months', text: 'Healthy buffer. Absorbs shocks.' },
                  amber: { label: 'AMBER: 1-2 Months', text: 'Tight. Prioritise building reserves.' },
                  red: { label: 'RED: Under 1 Month', text: 'Crisis territory. Take immediate action.' },
                },
                {
                  num: '2',
                  title: 'Revenue Concentration Above 30% from One Client',
                  desc: 'If more than 30% of your income comes from a single client, you have concentration risk. If they pause work, switch providers, or go under, your income drops by a third overnight and your forecast collapses.',
                  green: { label: 'GREEN: Under 20%', text: 'Well diversified. Low risk.' },
                  amber: { label: 'AMBER: 20-30%', text: 'Manageable but plan to diversify.' },
                  red: { label: 'RED: Over 30%', text: 'High risk. Actively seek new clients.' },
                },
                {
                  num: '3',
                  title: 'DSO (Days Sales Outstanding) Above 45 Days',
                  desc: 'DSO measures the average days between invoicing and payment. The Australian average is 33 days. Above 45 days means clients are consistently paying late, throwing off every income estimate in your forecast.',
                  green: { label: 'GREEN: Under 25 Days', text: 'Excellent. Clients pay promptly.' },
                  amber: { label: 'AMBER: 25-45 Days', text: 'Average. Room for improvement.' },
                  red: { label: 'RED: Over 45 Days', text: 'Problem. Review terms and follow-ups.' },
                },
                {
                  num: '4',
                  title: 'Tax Reserves Under 30% of Income',
                  desc: 'If you are not setting aside at least 30% of gross income for tax, you will face a cash crunch when BAS or income tax is due. Many freelancers underestimate their tax burden and face ATO debt with General Interest Charge penalties.',
                  green: { label: 'GREEN: 30-35%', text: 'Covers income tax + GST + super.' },
                  amber: { label: 'AMBER: 20-30%', text: 'May fall short. Increase immediately.' },
                  red: { label: 'RED: Under 20%', text: 'Underfunded. ATO debt likely.' },
                },
                {
                  num: '5',
                  title: 'No Confirmed Work Beyond 4 Weeks',
                  desc: 'The work-to-payment gap is 4-8 weeks (time to do work + time for client to pay). An empty pipeline at 4 weeks means an empty bank account at 8-12 weeks. Work you start selling today will not generate cash for over a month.',
                  green: { label: 'GREEN: 8+ Weeks Confirmed', text: 'Healthy pipeline. Continue selling.' },
                  amber: { label: 'AMBER: 4-8 Weeks', text: 'Adequate. Increase outreach.' },
                  red: { label: 'RED: Under 4 Weeks', text: 'Pipeline empty. Urgent sales needed.' },
                },
                {
                  num: '6',
                  title: 'Growing Gap Between Invoiced and Collected',
                  desc: 'If the total invoiced is growing faster than total collected, your accounts receivable balance is expanding. Money is stuck in the pipeline — you are invoicing but not getting paid at the same rate, eroding your cash position.',
                  green: { label: 'GREEN: Ratio Under 1.1', text: 'Collections keeping pace.' },
                  amber: { label: 'AMBER: Ratio 1.1-1.3', text: 'AR growing. Chase overdue invoices.' },
                  red: { label: 'RED: Ratio Over 1.3', text: 'Serious collection problem. Act now.' },
                },
              ].map((item, i) => (
                <div key={i} className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                      <span className="text-red-400 font-bold text-sm">{item.num}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{item.desc}</p>
                  <div className="grid sm:grid-cols-3 gap-3">
                    <div className="rounded-lg bg-green-500/10 border border-green-500/20 p-3 text-center">
                      <p className="text-green-400 text-xs font-bold mb-1">{item.green.label}</p>
                      <p className="text-gray-500 text-xs">{item.green.text}</p>
                    </div>
                    <div className="rounded-lg bg-amber-500/10 border border-amber-500/20 p-3 text-center">
                      <p className="text-amber-400 text-xs font-bold mb-1">{item.amber.label}</p>
                      <p className="text-gray-500 text-xs">{item.amber.text}</p>
                    </div>
                    <div className="rounded-lg bg-red-500/10 border border-red-500/20 p-3 text-center">
                      <p className="text-red-400 text-xs font-bold mb-1">{item.red.label}</p>
                      <p className="text-gray-500 text-xs">{item.red.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-xl bg-sky-500/5 border border-sky-500/20 p-5 mt-6">
              <p className="text-sky-400 font-medium mb-2">Warning Signs Compound</p>
              <p className="text-gray-400 text-sm">
                These rarely appear alone. High client concentration (2) + losing that client = pipeline problem (5) = declining balance (1) = raiding tax reserves (4). <strong className="text-gray-200">One weakness triggers a cascade.</strong> Review all six weekly &mdash; catching one early prevents the others.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Cash Flow Strategies for Australian Freelancers */}
        <section id="strategies">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold">5</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Cash Flow Strategies for Australian Freelancers</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              A forecast tells you <em>when</em> problems will occur. These eight strategies tell you <em>how to prevent them</em>. Each one directly improves the numbers in your cash flow forecast.
            </p>

            <div className="space-y-4 mt-6">
              {[
                {
                  num: '1',
                  title: 'Invoice Immediately on Delivery',
                  desc: 'Every day you delay sending an invoice is a day added to your payment timeline. Finish work on Friday? Invoice on Friday. The average freelancer delays invoicing by 5-7 days. On Net 30 terms, that turns a 30-day wait into 37 days. Over a year, that is 60-84 days of cash flow lost to procrastination.',
                  impact: 'Same-day invoicing cuts 5-7 days off every payment cycle (19% faster)',
                },
                {
                  num: '2',
                  title: 'Shorter Payment Terms (Net 14 vs Net 30)',
                  desc: 'Net 30 is a convention, not a law. Many freelancers use Net 14 or Net 7 for smaller invoices. Set the expectation during the proposal stage. For new clients, start with Net 14 and only extend if they specifically request it.',
                  impact: 'Net 14 terms: average payment at 18-20 days vs 33 days (40% faster)',
                },
                {
                  num: '3',
                  title: 'Upfront Deposits (30-50%)',
                  desc: 'For any project over $1,000, request 30-50% before starting. This is standard practice and most Australian clients expect it. Deposits provide upfront cash, confirm commitment, and reduce your exposure if the project is cancelled. Frame it as "50% to commence, 50% on delivery."',
                  impact: '$10K project with 50% deposit = $5,000 cash before work starts',
                },
                {
                  num: '4',
                  title: 'Milestone Billing for Large Projects',
                  desc: 'For projects over $5,000, break payments into milestones tied to deliverables: 30% deposit, 30% at midpoint, 40% on final delivery. This keeps cash flowing during the project and prevents doing $10K+ of work before seeing payment.',
                  impact: '$15K project: $4,500 upfront, $4,500 at midpoint, $6,000 on completion',
                },
                {
                  num: '5',
                  title: 'Build a 3-Month Emergency Fund',
                  desc: 'Calculate your total monthly expenses (business plus personal) and save three months\' worth in a separate high-interest savings account. If monthly expenses are $5,000, target $15,000. Start by saving $500/month — even one month of buffer provides meaningful protection against cash flow gaps.',
                  impact: '3-month buffer absorbs 90 days of income disruption without stress',
                },
                {
                  num: '6',
                  title: 'Separate Tax Reserve Account (30-35%)',
                  desc: 'Open a dedicated savings account and transfer 30-35% of every payment received into it. This covers income tax, GST, Medicare Levy, and super contributions. Never touch this money for expenses — it belongs to the ATO. Your operating balance then reflects your true spending power.',
                  impact: 'Tax money separated instantly: BAS payments fully funded before due date',
                },
                {
                  num: '7',
                  title: 'Diversify Your Client Base',
                  desc: 'No single client should represent more than 30% of your revenue. If your biggest client is 50% of income and they leave, your forecast shows an immediate 50% collapse. Build a broader pipeline across different industries and company sizes to reduce correlated risk.',
                  impact: '5 clients at 25/20/20/20/15% split — losing any one is manageable',
                },
                {
                  num: '8',
                  title: 'Recurring Revenue Retainers',
                  desc: 'Retainer agreements provide predictable income that makes your forecast dramatically more accurate. Even a small $1,000-2,000/month retainer creates a reliable baseline. Aim to build retainer income to cover at least 50% of monthly expenses — then treat project work as upside.',
                  impact: '$5K in retainers + project work: minimum $5K/month guaranteed',
                },
              ].map((item, i) => (
                <div key={i} className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-sky-500/10 flex items-center justify-center">
                      <span className="text-sky-400 font-bold text-sm">{item.num}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-3">{item.desc}</p>
                  <div className="rounded-lg bg-green-500/5 border border-green-500/20 p-3">
                    <p className="text-green-400 text-xs font-bold mb-1">Impact</p>
                    <p className="text-gray-400 text-xs">{item.impact}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-xl bg-sky-500/5 border border-sky-500/20 p-5 mt-6">
              <p className="text-sky-400 font-medium mb-2">The Combined Impact</p>
              <p className="text-gray-400 text-sm">
                Even three of these strategies transform your forecast. <strong className="text-gray-200">Same-day invoicing + Net 14 terms + 50% deposits</strong> means half your fee arrives before work starts, and the rest within 2-3 weeks of completion. Compared to a freelancer who delays invoicing, uses Net 30, and skips deposits &mdash; you get paid <strong className="text-gray-200">5-6 weeks faster</strong> on every project.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: How InvoiceFlow Helps */}
        <section id="invoiceflow-forecasting">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold">6</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">How InvoiceFlow Helps</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              InvoiceFlow is designed to make cash flow forecasting automatic, accurate, and effortless. Instead of manually tracking invoices in spreadsheets, InvoiceFlow gives you real-time visibility into your financial future.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              {[
                {
                  title: 'Automatic Cash Flow Projection',
                  desc: 'Projects your expected cash inflows from your invoice pipeline — sent invoices, pending payments, and overdue amounts. A visual timeline of when money is expected to arrive, updated in real-time.',
                },
                {
                  title: 'Overdue Payment Alerts',
                  desc: 'Automatic reminders to clients at configurable intervals — before due date, on due date, 7 days overdue, and 14 days overdue. Professional and polite, maintaining your client relationship while keeping cash flowing.',
                },
                {
                  title: 'Payment Tracking Dashboard',
                  desc: 'See all invoices in one view: paid, pending, and overdue. Track outstanding receivables, average days to payment, and payment trends. Know exactly how much is owed, who owes it, and when it is expected.',
                },
                {
                  title: 'BAS-Ready Financial Reports',
                  desc: 'Quarterly reports summarising income, GST collected, and GST paid — formatted for BAS lodgement. InvoiceFlow tracks GST automatically as invoices are issued and payments received.',
                },
                {
                  title: 'Revenue Forecasting',
                  desc: 'Based on invoicing history and current pipeline, projects expected revenue for coming weeks and months. Compare actual vs forecasted income to improve prediction accuracy over time.',
                },
                {
                  title: 'Client Payment History Analysis',
                  desc: 'Each client\'s payment track record at a glance — average payment time, on-time percentage, and reliability score. Set realistic payment expectations and identify clients needing shorter terms.',
                },
              ].map((item, i) => (
                <div key={i} className="rounded-xl bg-gray-800/50 border border-sky-500/20 p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-sky-500/10 flex items-center justify-center">
                      <svg className="w-4 h-4 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h4 className="text-white font-semibold">{item.title}</h4>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Related glossary terms */}
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 mt-6">
              <h4 className="text-white font-semibold mb-4">Related Glossary Terms</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  { label: 'Cash Flow', href: '/glossary/cash-flow' },
                  { label: 'Accounts Receivable', href: '/glossary/accounts-receivable' },
                  { label: 'Payment Terms', href: '/glossary/payment-terms' },
                  { label: 'Invoice Aging', href: '/glossary/invoice-aging' },
                  { label: 'Working Capital', href: '/glossary/working-capital' },
                  { label: 'Billing Cycle', href: '/glossary/billing-cycle' },
                ].map((term) => (
                  <Link key={term.href} href={term.href} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm font-medium hover:bg-sky-500/20 transition-colors">
                    {term.label}
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Related Tools */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-white mb-2 text-center">Related Tools</h2>
        <p className="text-gray-400 text-center mb-8">Free tools to help you forecast cash flow and plan your freelance finances.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {relatedTools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:border-sky-500/50 hover:bg-gray-800/80 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center mb-4">
                {tool.icon}
              </div>
              <h3 className="text-white font-medium mb-2 group-hover:text-sky-400 transition-colors">{tool.name}</h3>
              <p className="text-sm text-gray-400">{tool.description}</p>
              <div className="mt-4 text-sky-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                Use tool
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Related Guides */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-white mb-2 text-center">Related Guides</h2>
        <p className="text-gray-400 text-center mb-8">In-depth guides on getting paid, GST, and tax planning for Australian freelancers.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {relatedGuides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group p-6 rounded-2xl bg-gray-800/40 border border-gray-700/40 hover:border-sky-500/40 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h3 className="text-white font-medium mb-2 group-hover:text-sky-400 transition-colors">{guide.name}</h3>
              <p className="text-sm text-gray-400">{guide.description}</p>
              <div className="mt-4 text-sky-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                Read guide
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-3xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {(faqSchema.mainEntity as Array<{ '@type': string; name: string; acceptedAnswer: { text: string } }>).map((faq, i) => (
            <details key={i} className="group rounded-xl bg-gray-800/40 border border-gray-700/40">
              <summary className="flex items-center justify-between cursor-pointer px-6 py-4 text-white font-medium hover:text-sky-400 transition-colors">
                {faq.name}
                <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-gray-400 text-sm leading-relaxed">
                {faq.acceptedAnswer.text}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Email Capture */}
      <section className="max-w-4xl mx-auto px-4 pb-16">
        <EmailCapture />
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 pb-20 text-center">
        <div className="rounded-2xl bg-gradient-to-br from-sky-500/10 to-blue-500/10 border border-sky-500/20 p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stop Guessing &mdash; Start Forecasting Your Cash Flow
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            InvoiceFlow helps Australian freelancers project their cash flow automatically from their invoice pipeline. Overdue alerts, payment tracking, BAS-ready reports, and revenue forecasting &mdash; all in one place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button>Start Free &mdash; No Card Required</Button>
            </Link>
            <Link href="/tools/gst-calculator">
              <Button variant="secondary">Try the GST Calculator</Button>
            </Link>
          </div>
          <p className="mt-6 text-sm text-gray-500">
            Free plan includes 5 invoices per month. No credit card required.
          </p>
        </div>
      </section>
    </div>
  );
}
