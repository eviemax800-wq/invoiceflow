import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Cost of Goods Sold (COGS): What Freelancers Need to Know &mdash; InvoiceFlow',
  description:
    'What is Cost of Goods Sold? Learn how COGS works for service businesses and freelancers in Australia. Includes COGS calculation, worked examples by profession, COGS vs operating expenses, gross profit margin benchmarks, and AASB 102 context.',
  keywords: [
    'cost of goods sold meaning',
    'COGS service business',
    'cost of goods sold freelancer',
    'COGS calculation',
    'cost of goods sold formula',
    'COGS vs operating expenses',
    'gross profit margin freelancer',
    'AASB 102 inventory',
  ],
  alternates: { canonical: '/glossary/cost-of-goods-sold' },
  openGraph: {
    title: 'Cost of Goods Sold (COGS): What Freelancers Need to Know &mdash; InvoiceFlow',
    description:
      'What is Cost of Goods Sold? Learn how COGS works for service businesses and freelancers in Australia. Includes COGS calculation, worked examples, COGS vs operating expenses, and gross profit margin benchmarks.',
    url: 'https://invoiceflow-teal.vercel.app/glossary/cost-of-goods-sold',
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
    { '@type': 'ListItem', position: 3, name: 'Cost of Goods Sold', item: `${BASE_URL}/glossary/cost-of-goods-sold` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Cost of Goods Sold (COGS)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cost of Goods Sold (COGS) represents the direct costs attributable to producing or delivering the goods and services your business sells. For product businesses, this includes raw materials, manufacturing, and direct labour. For service businesses and freelancers, COGS includes subcontractor fees, project-specific software licences, stock imagery, printing costs, and any other expense directly tied to delivering a specific client project. COGS is deducted from revenue to calculate gross profit, which is the first measure of business profitability before overheads like rent, insurance, and marketing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do service businesses and freelancers have COGS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. While COGS is more obvious for product businesses (raw materials, manufacturing), service businesses and freelancers absolutely have COGS. Any cost directly tied to delivering a specific project counts: subcontractor fees for a developer you hired to help on a client project, stock photos purchased for a design job, printing costs for a photography client, studio rental for a specific shoot, or project-specific software licences. The key test is: would this cost exist if this specific project did not exist? If yes, it is COGS. If the cost exists regardless of any particular project (like your internet bill or general insurance), it is an operating expense, not COGS.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I calculate COGS as a freelancer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For freelancers, COGS is calculated by adding up all direct costs tied to delivering your services during a period. The traditional formula is: COGS = Opening Stock + Purchases - Closing Stock. For service-based freelancers who do not hold inventory, the simpler formula is: COGS = Direct Labour (subcontractors) + Direct Materials (project-specific purchases) + Other Direct Costs (client-specific licences, printing, travel for a project). Track these costs per project for accurate pricing, and aggregate them monthly or quarterly for your profit and loss statement. Most freelancers find their COGS ratio sits between 5% and 40% of revenue, depending on how much they subcontract or purchase materials.',
      },
    },
    {
      '@type': 'Question',
      name: "What's the difference between COGS and operating expenses?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The key distinction is directness. COGS are costs that vary directly with revenue and are tied to delivering specific projects or products. Operating expenses (OpEx) are indirect costs that exist regardless of how many projects you complete. For example: a subcontractor hired for a specific client project is COGS; your monthly accounting software subscription is OpEx. Stock photos bought for a design project are COGS; your general public liability insurance is OpEx. Both are tax-deductible through the ATO, but the distinction matters for calculating gross profit margin, setting accurate project prices, and understanding your true cost of service delivery.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where does COGS appear on financial statements?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'COGS appears on line two of your Profit and Loss statement (income statement), directly after revenue. The calculation is: Revenue - COGS = Gross Profit. Gross profit is the amount left over to cover your operating expenses, tax, superannuation, and personal income. A healthy gross profit margin for service-based freelancers is typically 60-95%, meaning COGS consumes only 5-40% of revenue. COGS does not appear on the balance sheet directly, but inventory (which feeds into the COGS calculation for product businesses) does. For Australian businesses, AASB 102 governs how inventory and COGS are measured and reported.',
      },
    },
  ],
};

const tocItems = [
  { id: 'what-is-cogs', label: '1. What Is Cost of Goods Sold?' },
  { id: 'cogs-service-vs-product', label: '2. COGS for Service vs Product Businesses' },
  { id: 'calculating-cogs', label: '3. Calculating COGS as a Freelancer' },
  { id: 'cogs-vs-opex', label: '4. COGS vs Operating Expenses' },
  { id: 'cogs-financial-statements', label: '5. COGS on Financial Statements' },
  { id: 'cogs-invoiceflow', label: '6. How InvoiceFlow Helps' },
];

const relatedTools = [
  {
    href: '/tools/profit-margin-calculator',
    name: 'Profit Margin Calculator',
    description: 'Calculate your gross and net profit margins after accounting for COGS and expenses.',
    icon: (
      <svg className="w-6 h-6 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    href: '/tools/profit-loss-statement',
    name: 'Profit &amp; Loss Generator',
    description: 'Generate a P&L statement that separates COGS from operating expenses for clearer reporting.',
    icon: (
      <svg className="w-6 h-6 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    href: '/tools/rate-calculator',
    name: 'Rate Calculator',
    description: 'Set freelance rates that cover your COGS, overheads, tax, super, and profit target.',
    icon: (
      <svg className="w-6 h-6 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zM6 3v.75M17.25 3v.75M3 16.5V6a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 6v10.5m-18 0h18" />
      </svg>
    ),
  },
  {
    href: '/tools/tax-estimator',
    name: 'Tax Estimator',
    description: 'Estimate your income tax after COGS deductions using current ATO rates.',
    icon: (
      <svg className="w-6 h-6 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18v-.008zm-12 0h.008v.008H6v-.008z" />
      </svg>
    ),
  },
];

const relatedGuides = [
  {
    href: '/guides/invoicing-101',
    name: 'Invoicing 101',
    description: 'The complete beginner&apos;s guide to invoicing, including how to account for COGS in your pricing.',
  },
  {
    href: '/guides/tax-guide-freelancers',
    name: 'Tax Guide for Freelancers',
    description: 'Income tax, deductions, BAS, and how COGS affects your taxable income as a sole trader.',
  },
  {
    href: '/guides/setting-freelance-rates',
    name: 'Setting Freelance Rates',
    description: 'How to calculate rates that cover COGS, overheads, tax, super, and your profit target.',
  },
];

export default function CostOfGoodsSoldGlossaryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative px-4 pt-20 pb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-rose-500/10 via-pink-500/10 to-rose-500/10 blur-3xl" />
        <div className="relative max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/glossary" className="hover:text-white transition-colors">Glossary</Link>
            <span>/</span>
            <span className="text-white">Cost of Goods Sold</span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            Glossary &mdash; Financial Reporting
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Cost of Goods Sold (COGS):{' '}
            <span className="bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">
              What Freelancers Need to Know
            </span>
          </h1>

          {/* Summary */}
          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            Cost of Goods Sold is the total direct cost of delivering your services or products. For freelancers, understanding COGS is the key to calculating gross profit, setting profitable rates, and knowing exactly how much each project actually costs you &mdash; before overheads, tax, and super even enter the picture.
          </p>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>11 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Financial Reporting</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
              </svg>
              <span>Updated March 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* In a Nutshell */}
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <div className="rounded-2xl bg-gradient-to-br from-rose-500/10 to-pink-500/10 border border-rose-500/20 p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-rose-500/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-white">In a Nutshell</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-rose-500/20 flex items-center justify-center text-rose-400 text-xs font-bold">COGS</span>
              <div>
                <p className="text-white font-medium text-sm">Direct Costs</p>
                <p className="text-gray-400 text-sm">The direct costs tied to delivering your services or products &mdash; not overheads</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-rose-500/20 flex items-center justify-center text-rose-400 text-xs font-bold">20&ndash;40%</span>
              <div>
                <p className="text-white font-medium text-sm">Typical COGS Range</p>
                <p className="text-gray-400 text-sm">Typical COGS range for service-based freelancers (varies by profession)</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-rose-500/20 flex items-center justify-center text-rose-400 text-xs font-bold">GP</span>
              <div>
                <p className="text-white font-medium text-sm">Gross Profit</p>
                <p className="text-gray-400 text-sm">Revenue minus COGS = Gross Profit (your margin before overheads)</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-rose-500/20 flex items-center justify-center text-rose-400 text-xs font-bold">102</span>
              <div>
                <p className="text-white font-medium text-sm">AASB 102</p>
                <p className="text-gray-400 text-sm">Australian accounting standard governing inventory and COGS measurement</p>
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
                className="flex items-center gap-2 text-gray-400 hover:text-rose-400 transition-colors text-sm py-1"
              >
                <svg className="w-4 h-4 text-rose-500/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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

        {/* Section 1: What Is Cost of Goods Sold? */}
        <section id="what-is-cogs">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center text-white text-sm font-bold">1</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">What Is Cost of Goods Sold?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Cost of Goods Sold (COGS) is the <strong className="text-white">total direct cost of producing or delivering the goods and services your business sells</strong>. It captures every dollar you spend that is directly tied to a specific product or project &mdash; raw materials, direct labour, subcontractor fees, project-specific purchases, and anything else consumed in the act of delivery.
            </p>
            <p className="text-gray-300 leading-relaxed">
              COGS is one of the most important numbers in your business because it sits between revenue and gross profit on your profit and loss statement. The formula is simple: <strong className="text-white">Revenue &minus; COGS = Gross Profit</strong>. Gross profit tells you how much money you have left after paying the direct costs of delivery &mdash; before overheads like rent, insurance, and marketing come out.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Under <strong className="text-white">AASB 102 (Inventories)</strong>, the Australian accounting standard that governs how COGS is measured, the cost of inventories includes all costs of purchase, costs of conversion, and other costs incurred in bringing the inventories to their present location and condition. While AASB 102 is primarily written for businesses that hold physical inventory, the principle applies equally to service businesses: COGS captures the direct costs of delivering what you sell.
            </p>

            <div className="rounded-xl bg-gray-800/50 border border-rose-500/30 p-6 mt-6">
              <h3 className="text-lg font-semibold text-white mb-3">The COGS Formula</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-rose-400 font-medium text-sm mb-2">Traditional (Product Businesses):</p>
                  <div className="bg-gray-900/60 rounded-lg p-4 text-center">
                    <p className="text-white font-mono text-lg">COGS = Opening Stock + Purchases &minus; Closing Stock</p>
                  </div>
                </div>
                <div>
                  <p className="text-pink-400 font-medium text-sm mb-2">Service Businesses &amp; Freelancers:</p>
                  <div className="bg-gray-900/60 rounded-lg p-4 text-center">
                    <p className="text-white font-mono text-lg">COGS = Direct Labour + Direct Materials + Subcontractor Costs</p>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-6">Why COGS Matters for Freelancers</h3>
            <p className="text-gray-300 leading-relaxed">
              Understanding your COGS is critical for three reasons. First, it determines your <strong className="text-white">gross profit margin</strong> &mdash; the percentage of each dollar of revenue that remains after covering direct costs. A freelancer with $100,000 in revenue and $15,000 in COGS has an 85% gross margin, meaning 85 cents of every dollar earned is available to cover overheads and generate profit.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Second, COGS drives <strong className="text-white">pricing decisions</strong>. If you are quoting a project at $5,000 but the subcontractor fees, stock images, and printing costs total $2,800, your gross profit on that project is only $2,200 (44% margin). That may or may not be enough to cover your share of overheads and leave you with a worthwhile profit. Without tracking COGS per project, you are pricing blind.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Third, COGS affects your <strong className="text-white">tax position</strong>. In Australia, COGS is fully tax-deductible through the ATO. Accurate COGS tracking ensures you claim every direct cost as a deduction, reducing your taxable income and your overall tax bill.
            </p>

            <div className="rounded-xl bg-rose-500/5 border border-rose-500/20 p-5 mt-6">
              <p className="text-rose-400 font-medium mb-2">Quick Example</p>
              <p className="text-gray-400 text-sm">
                You invoice a client <strong className="text-gray-200">$4,000 for a branding project</strong>. To deliver it, you spent $600 on stock imagery, $200 on premium fonts, and $1,200 on a subcontracted illustrator. Your COGS for that project is <strong className="text-gray-200">$2,000</strong>, giving you a gross profit of <strong className="text-gray-200">$2,000 (50% gross margin)</strong>. That $2,000 still needs to cover your share of rent, insurance, software subscriptions, tax, and super &mdash; so your net profit will be considerably less.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: COGS for Service Businesses vs Product Businesses */}
        <section id="cogs-service-vs-product">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center text-white text-sm font-bold">2</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">COGS for Service Businesses vs Product Businesses</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              The concept of COGS is straightforward for a bakery &mdash; flour, sugar, butter, and the baker&apos;s wages are obvious direct costs. For service businesses and freelancers, COGS is less intuitive because you are selling time and expertise rather than physical products. But the principle is identical: <strong className="text-white">any cost directly tied to delivering a specific project is COGS</strong>.
            </p>

            {/* Comparison Table */}
            <div className="overflow-x-auto mt-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-700/50">
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">Cost Type</th>
                    <th className="text-left py-3 px-4 text-rose-400 font-medium">Product Business</th>
                    <th className="text-left py-3 px-4 text-pink-400 font-medium">Service Business</th>
                    <th className="text-left py-3 px-4 text-rose-300 font-medium">Freelancer</th>
                  </tr>
                </thead>
                <tbody className="text-gray-400">
                  <tr className="border-b border-gray-800/50">
                    <td className="py-3 px-4 text-white font-medium">Materials</td>
                    <td className="py-3 px-4">Raw materials, components, packaging</td>
                    <td className="py-3 px-4">Project-specific supplies, printed materials</td>
                    <td className="py-3 px-4">Stock photos, fonts, printing</td>
                  </tr>
                  <tr className="border-b border-gray-800/50">
                    <td className="py-3 px-4 text-white font-medium">Labour</td>
                    <td className="py-3 px-4">Manufacturing wages, factory staff</td>
                    <td className="py-3 px-4">Project-specific employee time</td>
                    <td className="py-3 px-4">Subcontractor fees</td>
                  </tr>
                  <tr className="border-b border-gray-800/50">
                    <td className="py-3 px-4 text-white font-medium">Manufacturing</td>
                    <td className="py-3 px-4">Factory overhead, equipment</td>
                    <td className="py-3 px-4">N/A</td>
                    <td className="py-3 px-4">N/A</td>
                  </tr>
                  <tr className="border-b border-gray-800/50">
                    <td className="py-3 px-4 text-white font-medium">Freight</td>
                    <td className="py-3 px-4">Inbound freight, shipping to customer</td>
                    <td className="py-3 px-4">Delivery of project materials</td>
                    <td className="py-3 px-4">Courier for client deliverables</td>
                  </tr>
                  <tr className="border-b border-gray-800/50">
                    <td className="py-3 px-4 text-white font-medium">Third-Party Services</td>
                    <td className="py-3 px-4">Contract manufacturers</td>
                    <td className="py-3 px-4">Subcontractors, specialist consultants</td>
                    <td className="py-3 px-4">Subcontracted work (dev, design, writing)</td>
                  </tr>
                  <tr className="border-b border-gray-800/50">
                    <td className="py-3 px-4 text-white font-medium">Software/Licences</td>
                    <td className="py-3 px-4">Production-specific software</td>
                    <td className="py-3 px-4">Project-specific software licences</td>
                    <td className="py-3 px-4">Client-specific plugin or tool licences</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-white font-medium">Travel</td>
                    <td className="py-3 px-4">N/A (typically)</td>
                    <td className="py-3 px-4">Client-site travel for project delivery</td>
                    <td className="py-3 px-4">Travel to shoot location, client premises</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="rounded-xl bg-rose-500/5 border border-rose-500/20 p-5 mt-6">
              <p className="text-rose-400 font-medium mb-2">&quot;As a freelancer, do I even have COGS?&quot;</p>
              <p className="text-gray-400 text-sm">
                <strong className="text-gray-200">Yes.</strong> This is one of the most common misconceptions among solo operators. If you have ever hired a subcontractor for a client project, purchased stock imagery for a design job, paid for printing, rented a studio for a shoot, bought a client-specific domain name or plugin licence, or paid for travel to a project location &mdash; those are all COGS. The test is simple: <strong className="text-gray-200">would this cost exist if this specific project did not exist?</strong> If the answer is yes, it is COGS. If the cost exists regardless (like your Adobe Creative Cloud subscription you use across all projects), it is more likely an operating expense.
              </p>
            </div>

            <h3 className="text-lg font-semibold text-white mt-6">The Grey Area: Shared Software Subscriptions</h3>
            <p className="text-gray-300 leading-relaxed">
              Some costs sit in a grey area. Your Adobe Creative Cloud subscription is used across all projects &mdash; is it COGS or an operating expense? Strictly speaking, if the subscription exists regardless of any specific project, it is an <strong className="text-white">operating expense (OpEx)</strong>. However, if you purchase a specific plugin or font licence solely for one client project, that individual purchase is COGS. The practical approach for most freelancers is to treat general software subscriptions as OpEx and project-specific purchases as COGS. The ATO allows both as deductions regardless, but the distinction matters for accurate margin analysis.
            </p>
          </div>
        </section>

        {/* Section 3: Calculating COGS as a Freelancer */}
        <section id="calculating-cogs">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center text-white text-sm font-bold">3</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Calculating COGS as a Freelancer</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              For freelancers who do not hold physical inventory, calculating COGS is simpler than the traditional formula. You are adding up all <strong className="text-white">direct costs incurred to deliver your services</strong> during a period. Let&apos;s look at three worked examples across different freelance professions.
            </p>

            {/* Example 1: Graphic Designer */}
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 mt-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-rose-500/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold">Example 1: Graphic Designer</h3>
                  <p className="text-gray-400 text-sm">Annual revenue: $85,000</p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-gray-400">
                  <span>Stock photos &amp; illustrations</span>
                  <span className="text-rose-400 font-medium">$2,000</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Premium fonts (project-specific licences)</span>
                  <span className="text-rose-400 font-medium">$800</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Printing (client deliverables &mdash; business cards, brochures)</span>
                  <span className="text-rose-400 font-medium">$4,000</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Subcontractor (copywriter for branding projects)</span>
                  <span className="text-rose-400 font-medium">$5,200</span>
                </div>
                <div className="border-t border-gray-700/50 pt-2 flex justify-between">
                  <span className="text-white font-medium">Total COGS</span>
                  <span className="text-rose-400 font-bold">$12,000</span>
                </div>
                <div className="flex justify-between text-gray-500">
                  <span>COGS ratio ($12,000 / $85,000)</span>
                  <span className="text-pink-400 font-bold">14.1%</span>
                </div>
                <div className="flex justify-between text-gray-500">
                  <span>Gross profit</span>
                  <span className="text-emerald-400 font-bold">$73,000 (85.9% margin)</span>
                </div>
              </div>
            </div>

            {/* Example 2: Web Developer */}
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 mt-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-rose-500/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold">Example 2: Web Developer</h3>
                  <p className="text-gray-400 text-sm">Annual revenue: $120,000</p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-gray-400">
                  <span>Client-specific hosting (first year included in project price)</span>
                  <span className="text-rose-400 font-medium">$1,200</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Premium theme/plugin licences (client-specific)</span>
                  <span className="text-rose-400 font-medium">$2,000</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Subcontracted back-end developer</span>
                  <span className="text-rose-400 font-medium">$4,800</span>
                </div>
                <div className="border-t border-gray-700/50 pt-2 flex justify-between">
                  <span className="text-white font-medium">Total COGS</span>
                  <span className="text-rose-400 font-bold">$8,000</span>
                </div>
                <div className="flex justify-between text-gray-500">
                  <span>COGS ratio ($8,000 / $120,000)</span>
                  <span className="text-pink-400 font-bold">6.7%</span>
                </div>
                <div className="flex justify-between text-gray-500">
                  <span>Gross profit</span>
                  <span className="text-emerald-400 font-bold">$112,000 (93.3% margin)</span>
                </div>
              </div>
            </div>

            {/* Example 3: Photographer */}
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 mt-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-rose-500/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold">Example 3: Photographer</h3>
                  <p className="text-gray-400 text-sm">Annual revenue: $95,000</p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-gray-400">
                  <span>Equipment rental (lenses, lighting for specific shoots)</span>
                  <span className="text-rose-400 font-medium">$5,000</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Studio rental (per-shoot basis)</span>
                  <span className="text-rose-400 font-medium">$8,000</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Printing &amp; albums (client deliverables)</span>
                  <span className="text-rose-400 font-medium">$6,000</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Second shooter (subcontracted for events)</span>
                  <span className="text-rose-400 font-medium">$9,000</span>
                </div>
                <div className="border-t border-gray-700/50 pt-2 flex justify-between">
                  <span className="text-white font-medium">Total COGS</span>
                  <span className="text-rose-400 font-bold">$28,000</span>
                </div>
                <div className="flex justify-between text-gray-500">
                  <span>COGS ratio ($28,000 / $95,000)</span>
                  <span className="text-pink-400 font-bold">29.5%</span>
                </div>
                <div className="flex justify-between text-gray-500">
                  <span>Gross profit</span>
                  <span className="text-emerald-400 font-bold">$67,000 (70.5% margin)</span>
                </div>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-6">Per-Project COGS Tracking</h3>
            <p className="text-gray-300 leading-relaxed">
              While the examples above show annual totals, the real power of COGS tracking comes from <strong className="text-white">measuring it per project</strong>. When you know the COGS for each individual project, you can identify which types of work are most profitable, which clients generate the highest margins, and where your pricing needs adjustment.
            </p>
            <p className="text-gray-300 leading-relaxed">
              For example, a graphic designer might discover that branding projects (which require subcontracted copywriting) have a 45% COGS ratio, while social media design (no third-party costs) has a 3% COGS ratio. That insight should influence how you price each type of work and which projects you prioritise when your schedule is full.
            </p>

            <div className="rounded-xl bg-rose-500/5 border border-rose-500/20 p-5 mt-6">
              <p className="text-rose-400 font-medium mb-2">Practical Tip</p>
              <p className="text-gray-400 text-sm">
                Create a simple spreadsheet or use InvoiceFlow&apos;s expense tracking to log direct costs against each project. At minimum, record: <strong className="text-gray-200">project name, client, revenue, and total COGS</strong>. At the end of each quarter, review which project types and clients deliver the best gross margins. This takes 5 minutes per project but transforms your pricing strategy over time.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: COGS vs Operating Expenses */}
        <section id="cogs-vs-opex">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center text-white text-sm font-bold">4</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">COGS vs Operating Expenses</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              The distinction between COGS and operating expenses (OpEx) is one of the most important concepts in financial reporting. Both are costs of running your business, and both are tax-deductible, but they serve fundamentally different purposes in understanding your profitability.
            </p>
            <p className="text-gray-300 leading-relaxed">
              The key distinction: <strong className="text-white">COGS varies directly with revenue</strong> (the more projects you take on, the higher your COGS), while <strong className="text-white">OpEx stays relatively fixed regardless of revenue</strong> (your rent and insurance cost the same whether you complete 5 projects or 50).
            </p>

            {/* 8-row comparison table */}
            <div className="overflow-x-auto mt-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-700/50">
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">Expense</th>
                    <th className="text-center py-3 px-4 text-rose-400 font-medium">COGS</th>
                    <th className="text-center py-3 px-4 text-pink-400 font-medium">OpEx</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">Why</th>
                  </tr>
                </thead>
                <tbody className="text-gray-400">
                  <tr className="border-b border-gray-800/50">
                    <td className="py-3 px-4 text-white">Subcontractor for client project</td>
                    <td className="py-3 px-4 text-center text-emerald-400 font-medium">&#10003;</td>
                    <td className="py-3 px-4 text-center">&mdash;</td>
                    <td className="py-3 px-4">Directly tied to a specific deliverable</td>
                  </tr>
                  <tr className="border-b border-gray-800/50">
                    <td className="py-3 px-4 text-white">Adobe Creative Cloud subscription</td>
                    <td className="py-3 px-4 text-center">&mdash;</td>
                    <td className="py-3 px-4 text-center text-emerald-400 font-medium">&#10003;</td>
                    <td className="py-3 px-4">Used across all projects, not project-specific</td>
                  </tr>
                  <tr className="border-b border-gray-800/50">
                    <td className="py-3 px-4 text-white">Stock photos for a design job</td>
                    <td className="py-3 px-4 text-center text-emerald-400 font-medium">&#10003;</td>
                    <td className="py-3 px-4 text-center">&mdash;</td>
                    <td className="py-3 px-4">Purchased for a specific client project</td>
                  </tr>
                  <tr className="border-b border-gray-800/50">
                    <td className="py-3 px-4 text-white">Public liability insurance</td>
                    <td className="py-3 px-4 text-center">&mdash;</td>
                    <td className="py-3 px-4 text-center text-emerald-400 font-medium">&#10003;</td>
                    <td className="py-3 px-4">Fixed cost, exists regardless of project volume</td>
                  </tr>
                  <tr className="border-b border-gray-800/50">
                    <td className="py-3 px-4 text-white">Printing for client brochures</td>
                    <td className="py-3 px-4 text-center text-emerald-400 font-medium">&#10003;</td>
                    <td className="py-3 px-4 text-center">&mdash;</td>
                    <td className="py-3 px-4">Client-specific deliverable cost</td>
                  </tr>
                  <tr className="border-b border-gray-800/50">
                    <td className="py-3 px-4 text-white">Accounting software (Xero, MYOB)</td>
                    <td className="py-3 px-4 text-center">&mdash;</td>
                    <td className="py-3 px-4 text-center text-emerald-400 font-medium">&#10003;</td>
                    <td className="py-3 px-4">General business tool, not project-specific</td>
                  </tr>
                  <tr className="border-b border-gray-800/50">
                    <td className="py-3 px-4 text-white">Studio rental for a specific shoot</td>
                    <td className="py-3 px-4 text-center text-emerald-400 font-medium">&#10003;</td>
                    <td className="py-3 px-4 text-center">&mdash;</td>
                    <td className="py-3 px-4">Rented solely for one client&apos;s project</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-white">Home office internet</td>
                    <td className="py-3 px-4 text-center">&mdash;</td>
                    <td className="py-3 px-4 text-center text-emerald-400 font-medium">&#10003;</td>
                    <td className="py-3 px-4">General overhead, not tied to one project</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-lg font-semibold text-white mt-6">Grey Area Items</h3>
            <p className="text-gray-300 leading-relaxed">
              Some expenses genuinely sit between COGS and OpEx, and reasonable accountants may categorise them differently. Common grey-area items for freelancers include:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mt-3">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-rose-400 font-medium mb-2">Travel Costs</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Travel to a specific client site for project delivery is COGS. Your daily commute to a co-working space is OpEx. A client meeting could go either way &mdash; if it is for a specific project, lean towards COGS.
                </p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-pink-400 font-medium mb-2">Software Subscriptions</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  A general subscription (Figma, VS Code extensions) is OpEx. A licence purchased for one specific project is COGS. If you buy a premium Shopify theme for a client&apos;s store, that is COGS.
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-rose-500/5 border border-rose-500/20 p-5 mt-6">
              <p className="text-rose-400 font-medium mb-2">ATO Treatment</p>
              <p className="text-gray-400 text-sm">
                The good news: <strong className="text-gray-200">both COGS and OpEx are tax-deductible</strong> for Australian sole traders and businesses. The ATO does not penalise you for categorising an expense as COGS when it is really OpEx, or vice versa &mdash; your total deductions remain the same. However, the distinction matters for <strong className="text-gray-200">gross margin analysis, accurate project pricing, and financial reporting</strong>. If you want to know how profitable each project really is, you need to separate COGS from OpEx.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: COGS on Financial Statements */}
        <section id="cogs-financial-statements">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center text-white text-sm font-bold">5</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">COGS on Financial Statements</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              COGS appears on <strong className="text-white">line two of your Profit and Loss statement</strong> (also called an income statement), directly after revenue. This placement is deliberate &mdash; it separates gross profit from net profit, giving you two distinct views of profitability.
            </p>

            <div className="rounded-xl bg-gray-800/50 border border-rose-500/30 p-6 mt-6">
              <h3 className="text-lg font-semibold text-white mb-3">P&amp;L Structure</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-gray-400">
                  <span className="text-white font-medium">Revenue (total invoiced)</span>
                  <span className="text-white font-medium">$120,000</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span className="text-rose-400">&minus; Cost of Goods Sold (COGS)</span>
                  <span className="text-rose-400">($8,000)</span>
                </div>
                <div className="border-t border-gray-700/50 pt-2 flex justify-between">
                  <span className="text-emerald-400 font-medium">= Gross Profit</span>
                  <span className="text-emerald-400 font-bold">$112,000</span>
                </div>
                <div className="flex justify-between text-gray-400 pt-2">
                  <span>&minus; Operating Expenses</span>
                  <span>($32,000)</span>
                </div>
                <div className="border-t border-gray-700/50 pt-2 flex justify-between">
                  <span className="text-white font-medium">= Net Profit (before tax)</span>
                  <span className="text-white font-bold">$80,000</span>
                </div>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-6">Gross Profit Margin Benchmarks by Profession</h3>
            <p className="text-gray-300 leading-relaxed">
              Gross profit margin (Revenue &minus; COGS / Revenue &times; 100) varies significantly across freelance professions. Here are typical benchmarks to help you assess whether your COGS is in a healthy range:
            </p>

            <div className="overflow-x-auto mt-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-700/50">
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">Profession</th>
                    <th className="text-center py-3 px-4 text-gray-400 font-medium">Typical COGS %</th>
                    <th className="text-center py-3 px-4 text-gray-400 font-medium">Gross Margin</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">Primary COGS Drivers</th>
                  </tr>
                </thead>
                <tbody className="text-gray-400">
                  <tr className="border-b border-gray-800/50">
                    <td className="py-3 px-4 text-white">Web Developer</td>
                    <td className="py-3 px-4 text-center text-rose-400 font-medium">5&ndash;10%</td>
                    <td className="py-3 px-4 text-center text-emerald-400 font-medium">90&ndash;95%</td>
                    <td className="py-3 px-4">Hosting, plugin licences, subcontractors</td>
                  </tr>
                  <tr className="border-b border-gray-800/50">
                    <td className="py-3 px-4 text-white">Copywriter</td>
                    <td className="py-3 px-4 text-center text-rose-400 font-medium">2&ndash;8%</td>
                    <td className="py-3 px-4 text-center text-emerald-400 font-medium">92&ndash;98%</td>
                    <td className="py-3 px-4">Research tools, fact-checking services</td>
                  </tr>
                  <tr className="border-b border-gray-800/50">
                    <td className="py-3 px-4 text-white">Graphic Designer</td>
                    <td className="py-3 px-4 text-center text-rose-400 font-medium">10&ndash;20%</td>
                    <td className="py-3 px-4 text-center text-emerald-400 font-medium">80&ndash;90%</td>
                    <td className="py-3 px-4">Stock imagery, fonts, printing, subcontractors</td>
                  </tr>
                  <tr className="border-b border-gray-800/50">
                    <td className="py-3 px-4 text-white">Photographer</td>
                    <td className="py-3 px-4 text-center text-rose-400 font-medium">25&ndash;40%</td>
                    <td className="py-3 px-4 text-center text-emerald-400 font-medium">60&ndash;75%</td>
                    <td className="py-3 px-4">Studio rental, equipment hire, second shooters, printing</td>
                  </tr>
                  <tr className="border-b border-gray-800/50">
                    <td className="py-3 px-4 text-white">Marketing Consultant</td>
                    <td className="py-3 px-4 text-center text-rose-400 font-medium">15&ndash;30%</td>
                    <td className="py-3 px-4 text-center text-emerald-400 font-medium">70&ndash;85%</td>
                    <td className="py-3 px-4">Ad spend (if managed), subcontracted specialists</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-white">Videographer</td>
                    <td className="py-3 px-4 text-center text-rose-400 font-medium">20&ndash;35%</td>
                    <td className="py-3 px-4 text-center text-emerald-400 font-medium">65&ndash;80%</td>
                    <td className="py-3 px-4">Equipment hire, crew, locations, music licences</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-lg font-semibold text-white mt-6">Monthly vs Annual COGS Tracking</h3>
            <p className="text-gray-300 leading-relaxed">
              <strong className="text-white">Monthly tracking</strong> gives you the most responsive view of your business. If your COGS suddenly spikes in a particular month, you can investigate immediately &mdash; perhaps a large subcontractor invoice came through, or you over-spent on materials for a project. Monthly COGS tracking also helps you identify seasonal patterns. Many freelancers find that COGS is higher in busy months (more subcontracting) and lower in quiet months.
            </p>
            <p className="text-gray-300 leading-relaxed">
              <strong className="text-white">Annual tracking</strong> is the minimum required for tax reporting and financial analysis. Your annual COGS feeds directly into your P&amp;L, your tax return, and your year-over-year comparisons. If your COGS ratio has been climbing each year, it may indicate that you are subcontracting more (potentially a scaling strategy) or that your input costs are rising without corresponding price increases.
            </p>

            <h3 className="text-lg font-semibold text-white mt-6">Impact on Tax</h3>
            <p className="text-gray-300 leading-relaxed">
              In Australia, COGS is fully deductible from your assessable income. The ATO treats COGS as a legitimate business expense, reducing your taxable income dollar for dollar. For sole traders, this means COGS reduces the net business income that flows through to your individual tax return. For companies, COGS reduces the profit subject to the 25% company tax rate (for base rate entities with turnover under $50 million).
            </p>
            <p className="text-gray-300 leading-relaxed">
              If you are GST-registered, you can also claim <strong className="text-white">input tax credits</strong> on the GST component of your COGS purchases. This means you recover the GST you paid on subcontractor invoices, stock images, printing, and other direct costs &mdash; effectively reducing your COGS by 1/11th for GST-inclusive purchases.
            </p>

            <h3 className="text-lg font-semibold text-white mt-6">Inventory Accounting Methods</h3>
            <p className="text-gray-300 leading-relaxed">
              For product businesses that hold physical inventory, the method used to value that inventory affects COGS. The three primary methods under AASB 102 are:
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mt-3">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-rose-400 font-medium mb-2">FIFO</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  <strong className="text-gray-200">First In, First Out.</strong> Assumes the oldest inventory is sold first. In periods of rising prices, FIFO results in lower COGS and higher reported profit.
                </p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-pink-400 font-medium mb-2">LIFO</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  <strong className="text-gray-200">Last In, First Out.</strong> Assumes the newest inventory is sold first. Note: LIFO is not permitted under Australian Accounting Standards (AASB 102 prohibits it).
                </p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-rose-300 font-medium mb-2">Weighted Average</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  <strong className="text-gray-200">Average cost of all units.</strong> Calculates a weighted average cost based on all inventory purchased. Smooths out price fluctuations.
                </p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mt-4">
              For most service-based freelancers, inventory accounting methods are <strong className="text-white">not directly relevant</strong> because you do not hold physical stock. However, understanding these methods is important context if you sell physical products alongside services (e.g., a photographer who also sells prints), or if you are reading financial statements from product-based businesses.
            </p>
          </div>
        </section>

        {/* Section 6: How InvoiceFlow Helps */}
        <section id="cogs-invoiceflow">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center text-white text-sm font-bold">6</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">How InvoiceFlow Helps</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Tracking COGS manually is tedious and error-prone. InvoiceFlow automates the process, connecting your invoicing data with your expense records to give you <strong className="text-white">real-time visibility into project profitability, gross margins, and COGS trends</strong>.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="w-10 h-10 rounded-xl bg-rose-500/20 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18v-.008zm-12 0h.008v.008H6v-.008z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold mb-2">Per-Project COGS Tracking</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Attach direct costs to specific projects and invoices. See the gross margin on every job before you even send the invoice &mdash; so you can adjust pricing in real time.
                </p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="w-10 h-10 rounded-xl bg-rose-500/20 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold mb-2">Automatic P&amp;L Generation</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Generate profit and loss statements that properly separate COGS from operating expenses. See your gross profit margin trend monthly, quarterly, or annually.
                </p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="w-10 h-10 rounded-xl bg-rose-500/20 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold mb-2">Rate Optimisation</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  InvoiceFlow analyses your COGS data and recommends rate adjustments. If your COGS ratio is climbing, you will get an alert to review your pricing before margins erode.
                </p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="w-10 h-10 rounded-xl bg-rose-500/20 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold mb-2">Tax-Ready Reports</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Export COGS summaries for your accountant or BAS preparation. All direct costs are categorised, dated, and linked to specific invoices for ATO compliance.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Email Capture */}
      <section className="max-w-4xl mx-auto px-4 pb-16">
        <EmailCapture />
      </section>

      {/* FAQ Section */}
      <section className="max-w-3xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {(faqSchema.mainEntity as Array<{ '@type': string; name: string; acceptedAnswer: { text: string } }>).map((faq, i) => (
            <details key={i} className="group rounded-xl bg-gray-800/40 border border-gray-700/40">
              <summary className="flex items-center justify-between cursor-pointer px-6 py-4 text-white font-medium hover:text-rose-400 transition-colors">
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

      {/* Related Tools */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-white mb-2 text-center">Related Tools</h2>
        <p className="text-gray-400 text-center mb-8">Free tools to help you track COGS and improve profitability.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {relatedTools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:border-rose-500/50 hover:bg-gray-800/80 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center mb-4">
                {tool.icon}
              </div>
              <h3 className="text-white font-medium mb-2 group-hover:text-rose-400 transition-colors">{tool.name}</h3>
              <p className="text-sm text-gray-400">{tool.description}</p>
              <div className="mt-4 text-rose-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
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
        <p className="text-gray-400 text-center mb-8">In-depth guides on pricing, tax, and financial management for freelancers.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {relatedGuides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group p-6 rounded-2xl bg-gray-800/40 border border-gray-700/40 hover:border-rose-500/40 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h3 className="text-white font-medium mb-2 group-hover:text-rose-400 transition-colors">{guide.name}</h3>
              <p className="text-sm text-gray-400">{guide.description}</p>
              <div className="mt-4 text-rose-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                Read guide
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 pb-20 text-center">
        <div className="rounded-2xl bg-gradient-to-br from-rose-500/10 to-pink-500/10 border border-rose-500/20 p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Track COGS on Every Invoice
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Stop guessing your project profitability. InvoiceFlow tracks your direct costs alongside your invoicing, giving you real-time gross margins and COGS analysis &mdash; so every project is priced for profit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button>Start Free &mdash; No Card Required</Button>
            </Link>
            <Link href="/tools/profit-margin-calculator">
              <Button variant="secondary">Calculate Your Margins</Button>
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
