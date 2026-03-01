import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Revenue: What It Is, Types, Recognition Rules & Tracking for Freelancers — InvoiceFlow',
  description:
    'What is revenue? Learn the difference between revenue vs profit vs income, gross vs net revenue, AASB 15 revenue recognition rules in Australia, types of freelance revenue, and how to track revenue for tax and BAS reporting.',
  keywords: [
    'what is revenue in business',
    'revenue vs profit vs income',
    'revenue meaning accounting',
    'gross revenue vs net revenue',
    'revenue recognition australia',
    'freelance revenue tracking',
    'revenue definition business',
    'types of revenue freelancer',
    'revenue recognition AASB 15',
    'freelance revenue australia',
    'revenue for sole traders',
    'how to track freelance revenue',
  ],
  alternates: { canonical: '/glossary/revenue' },
  openGraph: {
    title: 'Revenue: What It Is, Types, Recognition Rules & Tracking for Freelancers — InvoiceFlow',
    description:
      'Everything Australian freelancers need to know about revenue: definition, revenue vs profit vs income, types of freelance revenue, AASB 15 recognition rules, key metrics, and how to track it all.',
    url: 'https://invoiceflow-teal.vercel.app/glossary/revenue',
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
    { '@type': 'ListItem', position: 3, name: 'Revenue', item: `${BASE_URL}/glossary/revenue` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the difference between revenue and profit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Revenue is the total amount of money your business earns from selling services or products before any expenses are deducted. It is the "top line" on your profit and loss statement. Profit is what remains after you subtract all expenses from revenue. Gross profit is revenue minus direct costs (like subcontractor fees or project-specific software). Net profit is revenue minus all expenses including overhead, insurance, superannuation, and marketing. For example, a freelancer who invoices $120,000 in a year has $120,000 in revenue. If their total expenses are $36,000, their net profit is $84,000. Revenue tells you how much you earned; profit tells you how much you kept.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do freelancers calculate revenue for tax purposes in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For Australian tax purposes, most freelancers and sole traders report revenue on a cash basis — meaning you count income when you actually receive payment, not when you issue the invoice. To calculate your annual revenue, add up all business payments received during the financial year (1 July to 30 June). If you are registered for GST, report your revenue as GST-exclusive figures — the GST component passes through to the ATO and is not your income. For example, if you received $132,000 in total payments including GST during the financial year, your assessable revenue is $120,000. This figure goes on your individual tax return at the business income section, and forms the basis for your quarterly BAS reporting.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is revenue recognition under AASB 15?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AASB 15 Revenue from Contracts with Customers is the Australian accounting standard that governs when and how revenue should be recognised (recorded) in financial statements. It follows a five-step model: (1) Identify the contract with the customer, (2) Identify the performance obligations in the contract, (3) Determine the transaction price, (4) Allocate the transaction price to performance obligations, (5) Recognise revenue when (or as) performance obligations are satisfied. For most freelancers operating as sole traders with turnover under $10 million, AASB 15 is not mandatory — the ATO allows cash basis accounting. However, understanding the principles helps with accurate financial reporting, especially if you use accrual accounting or plan to grow your business beyond the small business threshold.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much revenue do I need before registering for GST?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You must register for GST if your GST turnover (gross revenue from all business activities) is $75,000 or more in the current financial year, or if you project it will reach $75,000 or more based on your current month\'s turnover. This is based on GST-exclusive revenue. If you are a taxi driver or ride-sharing driver, you must register for GST regardless of turnover. You can voluntarily register for GST below the $75,000 threshold, which allows you to claim input tax credits on business purchases but means you must charge GST on your invoices and lodge quarterly BAS returns. Once registered, you remain registered until you cancel (which you can do if turnover drops below $75,000).',
      },
    },
    {
      '@type': 'Question',
      name: 'Should freelancers track gross or net revenue?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Freelancers should track both gross and net revenue, but for different purposes. Gross revenue (total invoiced amount before any deductions) is useful for understanding your market position, setting growth targets, and determining GST registration thresholds. Net revenue (gross revenue minus refunds, discounts, and write-offs) gives you a more accurate picture of actual business performance. For tax purposes, the ATO requires you to report assessable income, which is essentially your net revenue on a GST-exclusive basis. For BAS reporting, you need GST-inclusive gross figures. The most important practice is to always separate GST from your revenue figures — GST collected is not your money, it belongs to the ATO. Track your revenue GST-exclusive for business decisions and profitability analysis.',
      },
    },
  ],
};

const tocItems = [
  { id: 'what-is-revenue', label: '1. What Is Revenue?' },
  { id: 'revenue-vs-profit-vs-income', label: '2. Revenue vs Profit vs Income' },
  { id: 'types-of-revenue', label: '3. Types of Revenue for Freelancers' },
  { id: 'revenue-recognition', label: '4. Revenue Recognition Rules' },
  { id: 'revenue-tracking-metrics', label: '5. Revenue Tracking & Metrics' },
  { id: 'invoiceflow-revenue', label: '6. How InvoiceFlow Helps' },
];

const relatedTools = [
  {
    href: '/tools/gst-calculator',
    name: 'GST Calculator',
    description: 'Calculate GST on your revenue instantly and separate GST-inclusive from GST-exclusive figures.',
    icon: (
      <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm2.25-4.5h.008v.008H10.5v-.008zm0 2.25h.008v.008H10.5v-.008zm0 2.25h.008v.008H10.5v-.008zm2.25-4.5h.008v.008H12.75v-.008zm0 2.25h.008v.008H12.75v-.008zm2.25-4.5h.008v.008H15v-.008zm0 2.25h.008v.008H15v-.008zM6 18.75a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 18.75V6a2.25 2.25 0 00-2.25-2.25h-7.5A2.25 2.25 0 006 6v12.75zM3.75 18.75V6A4.5 4.5 0 018.25 1.5h7.5A4.5 4.5 0 0120.25 6v12.75a4.5 4.5 0 01-4.5 4.5h-7.5a4.5 4.5 0 01-4.5-4.5z" />
      </svg>
    ),
  },
  {
    href: '/tools/rate-calculator',
    name: 'Rate Calculator',
    description: 'Calculate the right hourly or project rate to hit your target annual revenue.',
    icon: (
      <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    href: '/tools/profit-margin-calculator',
    name: 'Profit Margin Calculator',
    description: 'Calculate how much of your revenue you actually keep as profit after all expenses.',
    icon: (
      <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    href: '/tools/tax-estimator',
    name: 'Tax Estimator',
    description: 'Estimate your income tax liability based on your annual revenue and deductions.',
    icon: (
      <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
];

const relatedGuides = [
  {
    href: '/guides/gst-for-freelancers',
    name: 'GST for Freelancers',
    description: 'Understand how GST affects your revenue, when to register, and how to report correctly on your BAS.',
  },
  {
    href: '/guides/setting-freelance-rates',
    name: 'Setting Freelance Rates',
    description: 'Set rates that generate sustainable revenue while covering all your costs and growth targets.',
  },
  {
    href: '/guides/tax-guide-freelancers',
    name: 'Tax Guide for Freelancers',
    description: 'Navigate Australian tax obligations, understand assessable income, and maximise your deductions.',
  },
];

export default function RevenueGlossaryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative px-4 pt-20 pb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-green-500/10 to-emerald-500/10 blur-3xl" />
        <div className="relative max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/glossary" className="hover:text-white transition-colors">Glossary</Link>
            <span>/</span>
            <span className="text-white">Revenue</span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            Glossary &mdash; Financial Fundamentals
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Revenue{' '}
            <span className="bg-gradient-to-r from-emerald-500 to-green-500 bg-clip-text text-transparent">
              for Australian Freelancers
            </span>
          </h1>

          {/* Summary */}
          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            Revenue is the total income your business earns from selling services or products &mdash; before any expenses are deducted. It is the starting point for every financial calculation in your freelance business. This guide covers what revenue really means, how it differs from profit and income, the types of freelance revenue, Australian recognition rules, and how to track it effectively.
          </p>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>14 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>AASB 15 &amp; ATO Rules Covered</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
              </svg>
              <span>Updated March 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* In a Nutshell */}
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <div className="rounded-2xl bg-gradient-to-br from-emerald-500/10 to-green-500/10 border border-emerald-500/20 p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-white">In a Nutshell</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs font-bold">$78K</span>
              <div>
                <p className="text-white font-medium text-sm">Average Freelancer Revenue</p>
                <p className="text-gray-400 text-sm">Median annual revenue for Australian freelancers across all industries</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs font-bold">$75K</span>
              <div>
                <p className="text-white font-medium text-sm">GST Registration Threshold</p>
                <p className="text-gray-400 text-sm">You must register for GST once your annual revenue reaches $75,000</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs font-bold">Top</span>
              <div>
                <p className="text-white font-medium text-sm">Revenue = The Top Line</p>
                <p className="text-gray-400 text-sm">Revenue sits at the very top of your profit and loss statement &mdash; everything flows down from it</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-green-400 text-xs font-bold">&ne;</span>
              <div>
                <p className="text-white font-medium text-sm">Revenue &ne; Profit</p>
                <p className="text-gray-400 text-sm">Revenue is what you earn; profit is what you keep after expenses &mdash; a critical distinction</p>
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
                className="flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition-colors text-sm py-1"
              >
                <svg className="w-4 h-4 text-emerald-500/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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

        {/* Section 1: What Is Revenue? */}
        <section id="what-is-revenue">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center text-white text-sm font-bold">1</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">What Is Revenue?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Revenue is the <strong className="text-white">total income a business earns from its normal business activities</strong> &mdash; primarily the sale of goods or services &mdash; before any costs or expenses are deducted. It is the first number on your profit and loss statement, which is why accountants call it <strong className="text-white">&ldquo;the top line.&rdquo;</strong> Everything else in your financials &mdash; gross profit, net profit, taxable income &mdash; flows down from revenue.
            </p>
            <p className="text-gray-300 leading-relaxed">
              For freelancers and sole traders, revenue is the total amount you invoice clients for your services or products during a given period. If you are a freelance graphic designer who invoiced $10,000 in January, your January revenue is $10,000. If you are registered for GST, this figure should be <strong className="text-white">GST-exclusive</strong> &mdash; the GST component is not your money; it passes through to the ATO.
            </p>

            <h3 className="text-lg font-semibold text-white mt-8">Revenue in Australian Accounting Standards</h3>
            <p className="text-gray-300 leading-relaxed">
              In Australian accounting, revenue is governed by <strong className="text-white">AASB 15 Revenue from Contracts with Customers</strong>. This standard defines revenue as income arising in the course of an entity&apos;s ordinary activities. It replaced the older AASB 118 Revenue standard in 2019 and applies to all entities that enter into contracts with customers to transfer goods or services. While most sole traders do not need to comply with AASB 15 directly (the ATO allows simpler reporting for small businesses), understanding its principles helps you think about revenue more accurately.
            </p>

            <h3 className="text-lg font-semibold text-white mt-8">The Top Line vs The Bottom Line</h3>
            <p className="text-gray-300 leading-relaxed">
              You will often hear business people refer to &ldquo;the top line&rdquo; and &ldquo;the bottom line.&rdquo; These terms come directly from the profit and loss statement:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mt-3">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-emerald-400 font-medium mb-2">The Top Line = Revenue</h4>
                <p className="text-gray-400 text-sm">The very first line on your P&amp;L statement. It represents the total value of all sales and services before anything is subtracted. &ldquo;Growing the top line&rdquo; means increasing your total sales.</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-green-400 font-medium mb-2">The Bottom Line = Net Profit</h4>
                <p className="text-gray-400 text-sm">The very last line on your P&amp;L statement. It represents what is left after all expenses, taxes, and deductions are subtracted from revenue. &ldquo;Improving the bottom line&rdquo; means increasing profitability.</p>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">A Critical Distinction: Revenue &ne; Profit &ne; Income</h3>
            <p className="text-gray-300 leading-relaxed">
              These three terms are frequently used interchangeably in casual conversation, but they mean different things in accounting. Getting them confused can lead to serious financial miscalculations:
            </p>
            <div className="space-y-3 mt-3">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs font-bold">R</span>
                <div>
                  <p className="text-white font-medium text-sm">Revenue</p>
                  <p className="text-gray-400 text-sm">Total earned from sales/services before any deductions. Also called &ldquo;gross income,&rdquo; &ldquo;turnover,&rdquo; or &ldquo;sales.&rdquo; Example: You invoiced $120,000 this year.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs font-bold">P</span>
                <div>
                  <p className="text-white font-medium text-sm">Profit</p>
                  <p className="text-gray-400 text-sm">What remains after expenses are subtracted from revenue. Gross profit = revenue minus direct costs. Net profit = revenue minus all costs. Example: $120,000 revenue minus $36,000 expenses = $84,000 net profit.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs font-bold">I</span>
                <div>
                  <p className="text-white font-medium text-sm">Income (Taxable Income)</p>
                  <p className="text-gray-400 text-sm">In Australian tax law, &ldquo;income&rdquo; specifically means assessable income for tax purposes. For sole traders, this is your net business income (revenue minus allowable deductions) plus any other assessable income. The ATO calculates your tax liability on this figure.</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-5 mt-6">
              <p className="text-emerald-400 font-medium mb-2">Why This Matters for Freelancers</p>
              <p className="text-gray-400 text-sm">
                If someone asks &ldquo;How much do you earn?&rdquo; and you answer with your revenue figure, you are overstating your actual earnings. A freelancer with $150,000 in revenue and $50,000 in expenses actually earns $100,000 in net profit &mdash; and after income tax and Medicare levy, takes home approximately $74,000. <strong className="text-gray-200">Revenue is vanity; profit is sanity; cash in the bank is reality.</strong> Always be clear about which number you are discussing.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Revenue vs Profit vs Income */}
        <section id="revenue-vs-profit-vs-income">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center text-white text-sm font-bold">2</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Revenue vs Profit vs Income</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Understanding the precise differences between revenue, profit, and income is essential for making sound financial decisions. Each concept sits at a different level of your profit and loss statement, and each tells you something different about your business health. Let&apos;s use a <strong className="text-white">$120,000 freelancer scenario</strong> to illustrate each layer.
            </p>

            <h3 className="text-lg font-semibold text-white mt-6">The Financial Waterfall</h3>
            <p className="text-gray-300 leading-relaxed">
              Think of your finances as a waterfall. Revenue starts at the top, and as it flows down, various costs and deductions reduce it at each level until you reach the final figure &mdash; what you actually keep.
            </p>

            {/* Visual Flow */}
            <div className="flex flex-col items-center gap-3 mt-6">
              <div className="rounded-xl bg-emerald-500/10 border border-emerald-500/30 p-4 text-center w-full max-w-md">
                <p className="text-xs text-emerald-500 mb-1">Total Sales (GST-exclusive)</p>
                <p className="text-emerald-400 font-bold text-xl">Revenue &mdash; $120,000</p>
              </div>
              <svg className="w-6 h-6 text-gray-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
              </svg>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-4 text-center w-full max-w-md">
                <p className="text-xs text-gray-500 mb-1">Minus Direct Costs ($8,000)</p>
                <p className="text-white font-bold text-lg">Gross Profit &mdash; $112,000</p>
              </div>
              <svg className="w-6 h-6 text-gray-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
              </svg>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-4 text-center w-full max-w-md">
                <p className="text-xs text-gray-500 mb-1">Minus Operating Expenses ($28,000)</p>
                <p className="text-green-400 font-bold text-lg">Net Profit &mdash; $84,000</p>
              </div>
              <svg className="w-6 h-6 text-gray-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
              </svg>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-4 text-center w-full max-w-md">
                <p className="text-xs text-gray-500 mb-1">Plus/Minus Tax Adjustments</p>
                <p className="text-white font-bold text-lg">Taxable Income &mdash; $84,000</p>
              </div>
              <svg className="w-6 h-6 text-gray-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
              </svg>
              <div className="rounded-xl bg-green-500/10 border border-green-500/30 p-4 text-center w-full max-w-md">
                <p className="text-xs text-green-500 mb-1">Minus Income Tax &amp; Medicare ($18,267 + $1,680)</p>
                <p className="text-green-400 font-bold text-xl">Take-Home &mdash; $64,053</p>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">Detailed Comparison Table</h3>
            <p className="text-gray-300 leading-relaxed">
              This table breaks down every financial layer using the $120,000 freelancer scenario. Study it carefully &mdash; understanding these distinctions is foundational to managing your business finances.
            </p>

            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 overflow-hidden mt-4">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-700/50">
                      <th className="text-left text-gray-400 font-medium py-3 px-4">Term</th>
                      <th className="text-left text-gray-400 font-medium py-3 px-4">Definition</th>
                      <th className="text-left text-gray-400 font-medium py-3 px-4">Formula</th>
                      <th className="text-right text-gray-400 font-medium py-3 px-4">Example ($120K)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700/30">
                    <tr>
                      <td className="py-3 px-4 text-emerald-400 font-medium">Revenue (Gross Revenue)</td>
                      <td className="py-3 px-4 text-gray-400">Total invoiced amount for all services and products, GST-exclusive</td>
                      <td className="py-3 px-4 text-gray-400">Sum of all invoices (ex. GST)</td>
                      <td className="py-3 px-4 text-white text-right font-medium">$120,000</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white font-medium">Net Revenue</td>
                      <td className="py-3 px-4 text-gray-400">Revenue minus refunds, discounts, and write-offs</td>
                      <td className="py-3 px-4 text-gray-400">Gross Revenue &minus; Refunds &minus; Discounts</td>
                      <td className="py-3 px-4 text-white text-right font-medium">$118,500</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white font-medium">Gross Profit</td>
                      <td className="py-3 px-4 text-gray-400">Revenue minus direct costs of delivering your services</td>
                      <td className="py-3 px-4 text-gray-400">Revenue &minus; COGS / Direct Costs</td>
                      <td className="py-3 px-4 text-white text-right font-medium">$112,000</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-green-400 font-medium">Net Profit</td>
                      <td className="py-3 px-4 text-gray-400">Revenue minus all expenses (direct + overhead + super + insurance)</td>
                      <td className="py-3 px-4 text-gray-400">Gross Profit &minus; All Operating Expenses</td>
                      <td className="py-3 px-4 text-green-400 text-right font-medium">$84,000</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white font-medium">Taxable Income</td>
                      <td className="py-3 px-4 text-gray-400">Net profit plus adjustments minus additional deductions per ATO rules</td>
                      <td className="py-3 px-4 text-gray-400">Net Profit &plusmn; Tax Adjustments</td>
                      <td className="py-3 px-4 text-white text-right font-medium">$84,000</td>
                    </tr>
                    <tr className="bg-green-500/5">
                      <td className="py-3 px-4 text-green-400 font-medium">Take-Home Pay</td>
                      <td className="py-3 px-4 text-gray-400">What you actually receive after income tax and Medicare levy</td>
                      <td className="py-3 px-4 text-gray-400">Taxable Income &minus; Tax &minus; Medicare</td>
                      <td className="py-3 px-4 text-green-400 text-right font-bold">$64,053</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="px-4 py-3 bg-gray-900/40 border-t border-gray-700/30">
                <p className="text-xs text-gray-500">Example assumes a freelance web developer, GST-registered, using 2025&ndash;26 ATO tax brackets. Taxable income equals net profit in this simplified example (no additional adjustments). $1,500 in refunds/discounts given during the year. Direct costs include software and subcontractors ($8,000). Operating expenses include super (11.5%), insurance, home office, marketing, and professional development ($28,000).</p>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">Worked Example Breakdown</h3>
            <p className="text-gray-300 leading-relaxed">
              Here is the full expense breakdown for the $120,000 freelancer scenario shown above, so you can see exactly where the money goes at each level:
            </p>
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 overflow-hidden mt-4">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-700/50">
                      <th className="text-left text-gray-400 font-medium py-3 px-4">Line Item</th>
                      <th className="text-right text-gray-400 font-medium py-3 px-4">Amount</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700/30">
                    <tr className="bg-emerald-500/5">
                      <td className="py-3 px-4 text-emerald-400 font-medium">Revenue (GST-exclusive)</td>
                      <td className="py-3 px-4 text-emerald-400 text-right font-medium">$120,000</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-gray-300">Refunds and discounts</td>
                      <td className="py-3 px-4 text-red-400 text-right">&minus;$1,500</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white font-medium">Net Revenue</td>
                      <td className="py-3 px-4 text-white text-right font-medium">$118,500</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-gray-300">Software subscriptions (Figma, GitHub, hosting)</td>
                      <td className="py-3 px-4 text-red-400 text-right">&minus;$3,200</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-gray-300">Subcontractor costs</td>
                      <td className="py-3 px-4 text-red-400 text-right">&minus;$4,800</td>
                    </tr>
                    <tr className="bg-emerald-500/5">
                      <td className="py-3 px-4 text-emerald-400 font-medium">Gross Profit</td>
                      <td className="py-3 px-4 text-emerald-400 text-right font-medium">$112,000 (93.3%)</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-gray-300">Superannuation (11.5%)</td>
                      <td className="py-3 px-4 text-red-400 text-right">&minus;$13,800</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-gray-300">Insurance (professional indemnity + public liability)</td>
                      <td className="py-3 px-4 text-red-400 text-right">&minus;$1,400</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-gray-300">Home office (67c/hr &times; 1,800 hrs)</td>
                      <td className="py-3 px-4 text-red-400 text-right">&minus;$4,824</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-gray-300">Marketing and website</td>
                      <td className="py-3 px-4 text-red-400 text-right">&minus;$2,400</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-gray-300">Professional development</td>
                      <td className="py-3 px-4 text-red-400 text-right">&minus;$1,200</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-gray-300">Equipment depreciation</td>
                      <td className="py-3 px-4 text-red-400 text-right">&minus;$2,500</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-gray-300">Accounting, phone, bank fees, miscellaneous</td>
                      <td className="py-3 px-4 text-red-400 text-right">&minus;$1,876</td>
                    </tr>
                    <tr className="bg-green-500/5">
                      <td className="py-3 px-4 text-green-400 font-medium">Net Profit (before income tax)</td>
                      <td className="py-3 px-4 text-green-400 text-right font-bold">$84,000 (70.0%)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-5 mt-6">
              <p className="text-emerald-400 font-medium mb-2">Revenue Is the Starting Point, Not the Destination</p>
              <p className="text-gray-400 text-sm">
                Many freelancers focus obsessively on growing revenue without paying attention to what happens below the top line. A freelancer earning $180,000 in revenue with $120,000 in expenses takes home less than a freelancer earning $120,000 with $36,000 in expenses. <strong className="text-gray-200">Revenue growth only matters if your profit margin stays healthy.</strong> Always think in layers: revenue, then costs, then profit, then tax, then take-home.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Types of Revenue for Freelancers */}
        <section id="types-of-revenue">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center text-white text-sm font-bold">3</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Types of Revenue for Freelancers</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Not all revenue is created equal. Different types of revenue carry different levels of predictability, scalability, and risk. Understanding these categories helps you build a <strong className="text-white">more resilient and diversified freelance business</strong>. Here are the six main types of revenue Australian freelancers typically earn:
            </p>

            <div className="space-y-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <span className="text-emerald-400 font-bold text-sm">1</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Service Revenue (Primary)</h3>
                  <span className="text-xs text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">70&ndash;90% of income</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  This is the bread and butter for most freelancers &mdash; <strong className="text-gray-200">revenue from invoiced client work</strong>. It includes hourly billing, day rates, and fixed-price project fees. Service revenue is typically the largest component of a freelancer&apos;s total revenue, often representing 70&ndash;90% of income. It is directly tied to your time and expertise. The limitation: service revenue scales linearly with hours worked, creating a natural ceiling.
                </p>
                <div className="mt-3 p-3 rounded-lg bg-gray-900/50">
                  <p className="text-xs text-gray-500"><strong className="text-gray-400">Examples:</strong> Web development project ($8,000), copywriting for a brand ($3,500), consulting engagement ($15,000), photography shoot ($2,200)</p>
                </div>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <span className="text-emerald-400 font-bold text-sm">2</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Recurring Revenue (Retainers &amp; Subscriptions)</h3>
                  <span className="text-xs text-green-400 bg-green-500/10 px-2 py-0.5 rounded-full">Most valuable</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Recurring revenue is income that repeats on a regular schedule &mdash; <strong className="text-gray-200">monthly retainers, maintenance contracts, or subscription-based services</strong>. This is the most valuable type of revenue because it is predictable, making cash flow management significantly easier. A freelancer with $3,000/month in retainers knows they have $36,000 in guaranteed annual revenue before taking on a single project.
                </p>
                <div className="mt-3 p-3 rounded-lg bg-gray-900/50">
                  <p className="text-xs text-gray-500"><strong className="text-gray-400">Examples:</strong> Monthly social media management ($2,500/mo), website maintenance retainer ($800/mo), ongoing content writing ($1,500/mo), bookkeeping services ($600/mo)</p>
                </div>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <span className="text-emerald-400 font-bold text-sm">3</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Project Revenue (One-Off Deliverables)</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Project revenue comes from <strong className="text-gray-200">defined-scope, one-time engagements</strong> with a clear start and end date. Unlike retainers, project revenue is not recurring &mdash; once the project is delivered, the revenue stops. This type is common for freelancers who build websites, design brands, create video content, or complete specific consulting engagements. The challenge with project-based revenue is the &ldquo;feast or famine&rdquo; cycle: busy months followed by quiet periods while you find the next project.
                </p>
                <div className="mt-3 p-3 rounded-lg bg-gray-900/50">
                  <p className="text-xs text-gray-500"><strong className="text-gray-400">Examples:</strong> Brand identity project ($12,000), e-commerce website build ($18,000), marketing strategy document ($5,000), mobile app design ($25,000)</p>
                </div>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <span className="text-emerald-400 font-bold text-sm">4</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Passive Revenue (Digital Products)</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Passive revenue comes from <strong className="text-gray-200">digital products, online courses, templates, ebooks, or other assets</strong> that you create once and sell repeatedly without additional time investment per sale. It is not truly &ldquo;passive&rdquo; &mdash; creating the product requires significant upfront effort, and marketing it requires ongoing work. But once established, passive revenue can generate income while you sleep, breaking the time-for-money ceiling that limits service revenue.
                </p>
                <div className="mt-3 p-3 rounded-lg bg-gray-900/50">
                  <p className="text-xs text-gray-500"><strong className="text-gray-400">Examples:</strong> Notion template pack ($49/sale), online photography course ($299/student), design asset kit ($79/license), freelance business ebook ($29/copy)</p>
                </div>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <span className="text-emerald-400 font-bold text-sm">5</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Commission &amp; Referral Revenue</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Commission and referral revenue comes from <strong className="text-gray-200">recommending other businesses, products, or services</strong> to your clients or audience. This includes affiliate marketing commissions, referral fees from other freelancers or agencies, and finder&apos;s fees. Many freelancers earn commission revenue without realising it is a legitimate income stream they could actively cultivate. Common in industries where freelancers regularly refer work they cannot take on.
                </p>
                <div className="mt-3 p-3 rounded-lg bg-gray-900/50">
                  <p className="text-xs text-gray-500"><strong className="text-gray-400">Examples:</strong> Affiliate commissions on tools you recommend ($50&ndash;$500/referral), referral fees from agencies (10&ndash;15% of project value), hosting reseller commissions ($10&ndash;$50/mo per client)</p>
                </div>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <span className="text-emerald-400 font-bold text-sm">6</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Interest &amp; Investment Revenue</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Interest and investment revenue comes from <strong className="text-gray-200">returns on business savings, term deposits, or investments</strong> made through your business. While typically a small component of total freelancer revenue, it becomes meaningful as your business grows and accumulates cash reserves. Interest earned on your business savings account, returns from a business investment portfolio, or dividends from shares held through a company structure all qualify.
                </p>
                <div className="mt-3 p-3 rounded-lg bg-gray-900/50">
                  <p className="text-xs text-gray-500"><strong className="text-gray-400">Examples:</strong> Interest on business savings account ($800&ndash;$2,000/yr), term deposit returns on emergency fund ($1,500&ndash;$3,000/yr), share dividends if operating via a Pty Ltd ($500+/yr)</p>
                </div>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">Revenue Mix: Typical Australian Freelancer</h3>
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 overflow-hidden mt-4">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-700/50">
                      <th className="text-left text-gray-400 font-medium py-3 px-4">Revenue Type</th>
                      <th className="text-left text-gray-400 font-medium py-3 px-4">Typical %</th>
                      <th className="text-left text-gray-400 font-medium py-3 px-4">Predictability</th>
                      <th className="text-left text-gray-400 font-medium py-3 px-4">Scalability</th>
                      <th className="text-right text-gray-400 font-medium py-3 px-4">Example ($120K)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700/30">
                    <tr>
                      <td className="py-3 px-4 text-white">Service Revenue</td>
                      <td className="py-3 px-4"><span className="text-emerald-400 text-xs font-medium bg-emerald-500/10 px-2 py-0.5 rounded-full">50&ndash;70%</span></td>
                      <td className="py-3 px-4 text-gray-400">Medium</td>
                      <td className="py-3 px-4 text-gray-400">Low (time-bound)</td>
                      <td className="py-3 px-4 text-white text-right">$72,000</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white">Recurring Revenue</td>
                      <td className="py-3 px-4"><span className="text-green-400 text-xs font-medium bg-green-500/10 px-2 py-0.5 rounded-full">15&ndash;30%</span></td>
                      <td className="py-3 px-4 text-emerald-400 font-medium">High</td>
                      <td className="py-3 px-4 text-gray-400">Medium</td>
                      <td className="py-3 px-4 text-white text-right">$24,000</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white">Project Revenue</td>
                      <td className="py-3 px-4"><span className="text-amber-400 text-xs font-medium bg-amber-500/10 px-2 py-0.5 rounded-full">10&ndash;25%</span></td>
                      <td className="py-3 px-4 text-gray-400">Low</td>
                      <td className="py-3 px-4 text-gray-400">Low</td>
                      <td className="py-3 px-4 text-white text-right">$18,000</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white">Passive Revenue</td>
                      <td className="py-3 px-4"><span className="text-gray-400 text-xs font-medium bg-gray-500/10 px-2 py-0.5 rounded-full">2&ndash;10%</span></td>
                      <td className="py-3 px-4 text-gray-400">Medium</td>
                      <td className="py-3 px-4 text-emerald-400 font-medium">High</td>
                      <td className="py-3 px-4 text-white text-right">$3,600</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white">Commission / Referral</td>
                      <td className="py-3 px-4"><span className="text-gray-400 text-xs font-medium bg-gray-500/10 px-2 py-0.5 rounded-full">1&ndash;5%</span></td>
                      <td className="py-3 px-4 text-gray-400">Low</td>
                      <td className="py-3 px-4 text-gray-400">Medium</td>
                      <td className="py-3 px-4 text-white text-right">$1,800</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white">Interest / Investment</td>
                      <td className="py-3 px-4"><span className="text-gray-400 text-xs font-medium bg-gray-500/10 px-2 py-0.5 rounded-full">0.5&ndash;2%</span></td>
                      <td className="py-3 px-4 text-emerald-400 font-medium">High</td>
                      <td className="py-3 px-4 text-gray-400">Low</td>
                      <td className="py-3 px-4 text-white text-right">$600</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="px-4 py-3 bg-gray-900/40 border-t border-gray-700/30">
                <p className="text-xs text-gray-500">Percentages are indicative for a typical Australian freelancer earning $120K. Actual mix varies significantly by industry, experience level, and business model. Freelancers with strong productised offerings may have much higher recurring and passive revenue percentages.</p>
              </div>
            </div>

            <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-5 mt-6">
              <p className="text-emerald-400 font-medium mb-2">The Revenue Diversification Rule</p>
              <p className="text-gray-400 text-sm">
                <strong className="text-gray-200">Aim for at least 20% of your revenue from recurring sources.</strong> This provides a predictable baseline that covers your essential expenses regardless of project flow. The most financially stable freelancers have a healthy mix of recurring retainers (predictability), project work (growth), and passive income (scalability). If 100% of your revenue comes from one-off projects, your business is fragile &mdash; one quiet month can create a cash crisis.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Revenue Recognition Rules */}
        <section id="revenue-recognition">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center text-white text-sm font-bold">4</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Revenue Recognition Rules</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Revenue recognition determines <strong className="text-white">when revenue is officially &ldquo;earned&rdquo; and recorded in your books</strong>. This is not just an academic accounting question &mdash; it directly affects your tax obligations, BAS reporting, and cash flow management. Getting it wrong can result in paying tax on money you have not received or underreporting income to the ATO.
            </p>

            <h3 className="text-lg font-semibold text-white mt-6">Cash Basis vs Accrual Basis</h3>
            <p className="text-gray-300 leading-relaxed">
              There are two fundamental methods for recognising revenue. The method you use determines when income appears on your books and when you owe tax on it.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              <div className="rounded-xl bg-gray-800/50 border border-emerald-500/20 p-5">
                <h4 className="text-emerald-400 font-semibold mb-3">Cash Basis Accounting</h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-3">
                  Revenue is recognised <strong className="text-gray-200">when payment is received</strong>, not when the invoice is issued or the work is performed. This is the simpler method and the one most Australian sole traders and small businesses use.
                </p>
                <div className="space-y-2 text-xs text-gray-500">
                  <p><strong className="text-gray-400">Best for:</strong> Sole traders, freelancers, small businesses under $10M turnover</p>
                  <p><strong className="text-gray-400">Advantage:</strong> You only pay tax on money you have actually received</p>
                  <p><strong className="text-gray-400">Disadvantage:</strong> Does not show the full picture of money owed to you</p>
                </div>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-white font-semibold mb-3">Accrual Basis Accounting</h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-3">
                  Revenue is recognised <strong className="text-gray-200">when the service is delivered or earned</strong>, regardless of when payment is received. This gives a more accurate picture of business performance but means you may owe tax on unpaid invoices.
                </p>
                <div className="space-y-2 text-xs text-gray-500">
                  <p><strong className="text-gray-400">Best for:</strong> Larger businesses, companies (Pty Ltd), businesses over $10M turnover (required)</p>
                  <p><strong className="text-gray-400">Advantage:</strong> More accurate picture of business performance and receivables</p>
                  <p><strong className="text-gray-400">Disadvantage:</strong> May owe tax on invoices not yet paid &mdash; cash flow risk</p>
                </div>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">AASB 15: The Five-Step Model</h3>
            <p className="text-gray-300 leading-relaxed">
              <strong className="text-white">AASB 15 Revenue from Contracts with Customers</strong> is the Australian accounting standard that provides a comprehensive framework for revenue recognition. While most sole traders are not required to follow AASB 15, understanding its five-step model gives you a solid framework for thinking about when revenue is truly &ldquo;earned.&rdquo;
            </p>

            <div className="space-y-3 mt-4">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs font-bold">1</span>
                <div>
                  <p className="text-white font-medium text-sm">Identify the Contract</p>
                  <p className="text-gray-400 text-sm">A contract exists when both parties have approved the agreement, rights and payment terms are identified, the contract has commercial substance, and it is probable that payment will be collected. For freelancers, this is your signed proposal, statement of work, or engagement letter.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs font-bold">2</span>
                <div>
                  <p className="text-white font-medium text-sm">Identify Performance Obligations</p>
                  <p className="text-gray-400 text-sm">What are the distinct deliverables in your contract? A website project might have multiple performance obligations: wireframes, design mockups, development, and launch support. Each distinct deliverable is a separate performance obligation that can be recognised independently.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs font-bold">3</span>
                <div>
                  <p className="text-white font-medium text-sm">Determine the Transaction Price</p>
                  <p className="text-gray-400 text-sm">The total amount you expect to receive for delivering your services. For fixed-price projects, this is straightforward. For variable pricing (hourly rates, performance bonuses), estimate the expected consideration based on the most likely outcome.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs font-bold">4</span>
                <div>
                  <p className="text-white font-medium text-sm">Allocate Price to Performance Obligations</p>
                  <p className="text-gray-400 text-sm">If the contract has multiple deliverables, allocate the total price to each obligation based on their standalone selling prices. For a $10,000 project with design ($4,000 value) and development ($6,000 value), revenue should be allocated proportionally.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs font-bold">5</span>
                <div>
                  <p className="text-white font-medium text-sm">Recognise Revenue When Obligations Are Satisfied</p>
                  <p className="text-gray-400 text-sm">Revenue is recognised when control of the deliverable transfers to the client. This can happen at a point in time (handing over the final website) or over time (ongoing consulting services where the client benefits as you perform the work).</p>
                </div>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">ATO Rules for Sole Traders</h3>
            <p className="text-gray-300 leading-relaxed">
              The ATO allows sole traders and small businesses with aggregated turnover under <strong className="text-white">$10 million to use cash basis accounting</strong>. This is a significant simplification that most Australian freelancers should take advantage of. Under cash basis:
            </p>
            <ul className="space-y-2 text-sm text-gray-400 mt-3">
              <li><strong className="text-gray-200">Income is reported when received</strong> &mdash; if a client pays your December invoice in January, it counts as January income</li>
              <li><strong className="text-gray-200">Expenses are deducted when paid</strong> &mdash; if you pay your annual insurance in July, it is a July expense regardless of what period it covers</li>
              <li><strong className="text-gray-200">GST follows the same timing</strong> &mdash; on cash basis, GST is reported when payment is received/made (not when invoiced)</li>
              <li><strong className="text-gray-200">BAS reporting aligns with cash</strong> &mdash; your quarterly BAS reports actual cash received and paid, making reconciliation simpler</li>
            </ul>

            <h3 className="text-lg font-semibold text-white mt-8">GST Timing Implications</h3>
            <p className="text-gray-300 leading-relaxed">
              Your GST reporting method must match your accounting method. If you use <strong className="text-white">cash basis accounting, you report GST on a cash basis too</strong> &mdash; you only report GST collected when the client actually pays. If you use accrual basis, you must report GST when the invoice is issued, even if the client has not paid yet. This can create a cash flow trap where you owe the ATO GST on unpaid invoices.
            </p>

            <h3 className="text-lg font-semibold text-white mt-8">Worked Example: $5,000 Web Development Project</h3>
            <p className="text-gray-300 leading-relaxed">
              Let&apos;s trace a real project through both accounting methods to see how revenue recognition timing differs:
            </p>

            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 overflow-hidden mt-4">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-700/50">
                      <th className="text-left text-gray-400 font-medium py-3 px-4">Event</th>
                      <th className="text-left text-gray-400 font-medium py-3 px-4">Date</th>
                      <th className="text-center text-emerald-400 font-medium py-3 px-4">Cash Basis Revenue</th>
                      <th className="text-center text-gray-300 font-medium py-3 px-4">Accrual Basis Revenue</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700/30">
                    <tr>
                      <td className="py-3 px-4 text-white">Contract signed</td>
                      <td className="py-3 px-4 text-gray-400">1 March</td>
                      <td className="py-3 px-4 text-gray-500 text-center">$0</td>
                      <td className="py-3 px-4 text-gray-500 text-center">$0</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white">50% deposit invoice issued ($2,750 inc. GST)</td>
                      <td className="py-3 px-4 text-gray-400">3 March</td>
                      <td className="py-3 px-4 text-gray-500 text-center">$0</td>
                      <td className="py-3 px-4 text-emerald-400 text-center font-medium">$2,500</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white">Deposit payment received</td>
                      <td className="py-3 px-4 text-gray-400">7 March</td>
                      <td className="py-3 px-4 text-emerald-400 text-center font-medium">$2,500</td>
                      <td className="py-3 px-4 text-gray-500 text-center">&mdash;</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white">Project delivered and approved</td>
                      <td className="py-3 px-4 text-gray-400">28 March</td>
                      <td className="py-3 px-4 text-gray-500 text-center">$0</td>
                      <td className="py-3 px-4 text-gray-500 text-center">&mdash;</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white">Final invoice issued ($2,750 inc. GST)</td>
                      <td className="py-3 px-4 text-gray-400">28 March</td>
                      <td className="py-3 px-4 text-gray-500 text-center">$0</td>
                      <td className="py-3 px-4 text-emerald-400 text-center font-medium">$2,500</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white">Final payment received</td>
                      <td className="py-3 px-4 text-gray-400">15 April</td>
                      <td className="py-3 px-4 text-emerald-400 text-center font-medium">$2,500</td>
                      <td className="py-3 px-4 text-gray-500 text-center">&mdash;</td>
                    </tr>
                    <tr className="bg-emerald-500/5">
                      <td className="py-3 px-4 text-emerald-400 font-medium" colSpan={2}>March Quarter Revenue (Q3)</td>
                      <td className="py-3 px-4 text-emerald-400 text-center font-bold">$2,500</td>
                      <td className="py-3 px-4 text-white text-center font-bold">$5,000</td>
                    </tr>
                    <tr className="bg-emerald-500/5">
                      <td className="py-3 px-4 text-emerald-400 font-medium" colSpan={2}>April Quarter Revenue (Q4)</td>
                      <td className="py-3 px-4 text-emerald-400 text-center font-bold">$2,500</td>
                      <td className="py-3 px-4 text-white text-center font-bold">$0</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="px-4 py-3 bg-gray-900/40 border-t border-gray-700/30">
                <p className="text-xs text-gray-500">All revenue figures are GST-exclusive. Under cash basis, the $5,000 project is split across two quarters because payment arrived in different periods. Under accrual basis, the full $5,000 is recognised in March when the invoices were raised. This timing difference directly affects your BAS reporting and quarterly GST obligations.</p>
              </div>
            </div>

            <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-5 mt-6">
              <p className="text-emerald-400 font-medium mb-2">Which Method Should Freelancers Use?</p>
              <p className="text-gray-400 text-sm">
                <strong className="text-gray-200">Cash basis accounting for most freelancers.</strong> It is simpler, aligns with actual money in your bank account, and means you only pay tax on money you have actually received. The ATO allows it for sole traders and small businesses under $10M turnover. Switch to accrual only if your accountant specifically recommends it for your situation (e.g., you are operating through a company structure or have complex multi-period contracts).
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Revenue Tracking & Metrics */}
        <section id="revenue-tracking-metrics">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center text-white text-sm font-bold">5</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Revenue Tracking &amp; Metrics</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Tracking revenue is not just about knowing how much you invoiced &mdash; it is about understanding the <strong className="text-white">patterns, trends, and composition of your income</strong> so you can make informed decisions about pricing, client mix, and growth. Here are the key revenue metrics every freelancer should monitor.
            </p>

            <h3 className="text-lg font-semibold text-white mt-6">Key Revenue Metrics</h3>
            <div className="space-y-4 mt-4">
              <div className="rounded-xl bg-gray-800/50 border border-emerald-500/20 p-6">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-emerald-400 font-semibold">Monthly Recurring Revenue (MRR)</h4>
                  <span className="text-xs text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">Critical metric</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-3">
                  The total predictable revenue you receive every month from retainers, subscriptions, and maintenance contracts. MRR is the foundation of your financial stability.
                </p>
                <div className="rounded-lg bg-gray-900/60 border border-gray-700/30 p-4">
                  <p className="text-emerald-400 font-medium text-sm mb-1">Formula</p>
                  <p className="text-white font-mono text-lg">MRR = Sum of All Monthly Recurring Contracts</p>
                  <p className="text-gray-500 text-xs mt-2">Example: 3 retainers ($2,500 + $1,500 + $800) = $4,800 MRR</p>
                </div>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-emerald-500/20 p-6">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-emerald-400 font-semibold">Annual Recurring Revenue (ARR)</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-3">
                  MRR multiplied by 12. ARR tells you the annualised value of your recurring revenue streams and provides a baseline for annual financial planning.
                </p>
                <div className="rounded-lg bg-gray-900/60 border border-gray-700/30 p-4">
                  <p className="text-emerald-400 font-medium text-sm mb-1">Formula</p>
                  <p className="text-white font-mono text-lg">ARR = MRR &times; 12</p>
                  <p className="text-gray-500 text-xs mt-2">Example: $4,800 MRR &times; 12 = $57,600 ARR (guaranteed baseline before any project work)</p>
                </div>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-emerald-500/20 p-6">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-emerald-400 font-semibold">Revenue Per Client</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-3">
                  Average revenue generated from each client over a period. This helps you understand client value and identify opportunities to increase per-client spending through upselling or expanded services.
                </p>
                <div className="rounded-lg bg-gray-900/60 border border-gray-700/30 p-4">
                  <p className="text-emerald-400 font-medium text-sm mb-1">Formula</p>
                  <p className="text-white font-mono text-lg">Revenue Per Client = Total Revenue &divide; Number of Active Clients</p>
                  <p className="text-gray-500 text-xs mt-2">Example: $120,000 &divide; 8 clients = $15,000 average revenue per client</p>
                </div>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-emerald-500/20 p-6">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-emerald-400 font-semibold">Revenue Per Hour</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-3">
                  Your actual revenue divided by total hours worked (not just billable hours). This gives the true revenue productivity of your time, including the unbillable hours spent on admin, marketing, and business development.
                </p>
                <div className="rounded-lg bg-gray-900/60 border border-gray-700/30 p-4">
                  <p className="text-emerald-400 font-medium text-sm mb-1">Formula</p>
                  <p className="text-white font-mono text-lg">Revenue Per Hour = Total Revenue &divide; Total Hours Worked</p>
                  <p className="text-gray-500 text-xs mt-2">Example: $120,000 &divide; 1,800 hours worked = $66.67/hr (compared to a $120/hr billed rate at 55.6% utilisation)</p>
                </div>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-emerald-500/20 p-6">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-emerald-400 font-semibold">Revenue Growth Rate</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-3">
                  The percentage increase (or decrease) in revenue compared to a previous period. Track this monthly, quarterly, and annually to understand your growth trajectory and seasonal patterns.
                </p>
                <div className="rounded-lg bg-gray-900/60 border border-gray-700/30 p-4">
                  <p className="text-emerald-400 font-medium text-sm mb-1">Formula</p>
                  <p className="text-white font-mono text-lg">Growth Rate = ((Current Period &minus; Previous Period) &divide; Previous Period) &times; 100</p>
                  <p className="text-gray-500 text-xs mt-2">Example: Q2 revenue $35,000 vs Q1 revenue $28,000 = ((35,000 - 28,000) / 28,000) &times; 100 = 25% quarterly growth</p>
                </div>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-6">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-red-400 font-semibold">Revenue Concentration Risk</h4>
                  <span className="text-xs text-red-400 bg-red-500/10 px-2 py-0.5 rounded-full">Watch this</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-3">
                  The percentage of your total revenue that comes from a single client. <strong className="text-gray-200">If any single client represents more than 30% of your revenue, you have a concentration risk.</strong> If that client leaves, pauses work, or goes under, your business takes a devastating hit.
                </p>
                <div className="rounded-lg bg-gray-900/60 border border-gray-700/30 p-4">
                  <p className="text-red-400 font-medium text-sm mb-1">Formula</p>
                  <p className="text-white font-mono text-lg">Concentration % = (Client Revenue &divide; Total Revenue) &times; 100</p>
                  <p className="text-gray-500 text-xs mt-2">Example: Client A pays $45,000 / $120,000 total = 37.5% concentration (above the 30% risk threshold &mdash; actively diversify)</p>
                </div>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">Quarterly Revenue Tracking for BAS Reporting</h3>
            <p className="text-gray-300 leading-relaxed">
              If you are registered for GST, you must lodge a Business Activity Statement (BAS) quarterly. Your BAS requires you to report revenue figures for each quarter of the financial year. Tracking revenue by quarter is essential for accurate and stress-free BAS lodgement.
            </p>

            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 overflow-hidden mt-4">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-700/50">
                      <th className="text-left text-gray-400 font-medium py-3 px-4">Quarter</th>
                      <th className="text-left text-gray-400 font-medium py-3 px-4">Period</th>
                      <th className="text-left text-gray-400 font-medium py-3 px-4">BAS Due Date</th>
                      <th className="text-left text-gray-400 font-medium py-3 px-4">What to Report</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700/30">
                    <tr>
                      <td className="py-3 px-4 text-white font-medium">Q1</td>
                      <td className="py-3 px-4 text-gray-400">1 Jul &ndash; 30 Sep</td>
                      <td className="py-3 px-4 text-gray-400">28 October</td>
                      <td className="py-3 px-4 text-gray-400">Total sales (GST-inclusive), GST collected, GST paid on purchases</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white font-medium">Q2</td>
                      <td className="py-3 px-4 text-gray-400">1 Oct &ndash; 31 Dec</td>
                      <td className="py-3 px-4 text-gray-400">28 February</td>
                      <td className="py-3 px-4 text-gray-400">Total sales (GST-inclusive), GST collected, GST paid on purchases</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white font-medium">Q3</td>
                      <td className="py-3 px-4 text-gray-400">1 Jan &ndash; 31 Mar</td>
                      <td className="py-3 px-4 text-gray-400">28 April</td>
                      <td className="py-3 px-4 text-gray-400">Total sales (GST-inclusive), GST collected, GST paid on purchases</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white font-medium">Q4</td>
                      <td className="py-3 px-4 text-gray-400">1 Apr &ndash; 30 Jun</td>
                      <td className="py-3 px-4 text-gray-400">28 July</td>
                      <td className="py-3 px-4 text-gray-400">Total sales (GST-inclusive), GST collected, GST paid on purchases</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="px-4 py-3 bg-gray-900/40 border-t border-gray-700/30">
                <p className="text-xs text-gray-500">If you lodge through a registered tax agent, you may receive extended due dates. The ATO also offers monthly BAS lodgement for businesses that prefer more frequent reporting. Late BAS lodgement incurs a penalty of one penalty unit ($313 in 2025&ndash;26) for each 28-day period the BAS is overdue, up to a maximum of five penalty units ($1,565).</p>
              </div>
            </div>

            <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-5 mt-6">
              <p className="text-emerald-400 font-medium mb-2">Track Revenue Weekly, Review Monthly, Report Quarterly</p>
              <p className="text-gray-400 text-sm">
                The most effective revenue tracking cadence for freelancers: <strong className="text-gray-200">update your numbers weekly</strong> (takes 5 minutes if you use invoicing software), <strong className="text-gray-200">review metrics monthly</strong> (are you on track for your targets? any concentration risks emerging?), and <strong className="text-gray-200">report quarterly</strong> for BAS. This rhythm catches problems early &mdash; if January revenue is tracking 30% below target, you have February and March to course-correct before it impacts your quarterly numbers.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: How InvoiceFlow Helps */}
        <section id="invoiceflow-revenue">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center text-white text-sm font-bold">6</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">How InvoiceFlow Helps</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              InvoiceFlow is built to make revenue tracking automatic, accurate, and actionable for Australian freelancers. Every invoice you send, every payment you receive, and every financial metric you need is captured and calculated in real time &mdash; so you always know exactly where your revenue stands.
            </p>

            <div className="space-y-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Automatic Revenue Tracking</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Every invoice you create in InvoiceFlow is automatically tracked as revenue. No manual data entry, no spreadsheets, no forgetting to log income. Your <strong className="text-gray-200">total revenue, monthly revenue, and quarterly revenue are calculated in real time</strong> and displayed on your dashboard. When a client pays, the payment is matched to the invoice and your received revenue updates instantly. You always know exactly how much you have invoiced, how much has been paid, and how much is outstanding.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Revenue Dashboards</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Your InvoiceFlow dashboard gives you a <strong className="text-gray-200">visual overview of revenue trends</strong> &mdash; month-on-month growth, quarterly comparisons, year-to-date totals, and revenue by client. See at a glance whether you are tracking above or below your annual target. Interactive charts show seasonal patterns so you can plan ahead for historically slow periods and capitalise on busy ones.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">BAS-Ready Revenue Reports</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  When BAS time arrives, InvoiceFlow has your numbers ready. <strong className="text-gray-200">Quarterly revenue reports with GST breakdowns</strong> are generated automatically. Total sales (GST-inclusive), GST collected on sales, and GST paid on purchases are all calculated and formatted exactly as the ATO requires. No more reconciling spreadsheets at midnight on the due date &mdash; export your BAS figures in one click and lodge with confidence.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Client Revenue Analysis</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  InvoiceFlow breaks down your <strong className="text-gray-200">revenue by client</strong> so you can see who your most valuable clients are, identify concentration risks (any client over 30%), and spot opportunities for growth. Track revenue per client over time to understand lifecycle patterns &mdash; is a client spending more or less with you? Are they at risk of churning? Use this data to prioritise relationship management and make strategic decisions about client retention.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Revenue Forecasting</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Based on your historical revenue data, active retainers, and outstanding invoices, InvoiceFlow provides <strong className="text-gray-200">forward-looking revenue projections</strong>. See projected revenue for the current month, quarter, and year based on confirmed work and payment patterns. This helps you make proactive decisions &mdash; if projected Q3 revenue is below target, you know to ramp up business development now rather than discovering the shortfall after the quarter ends.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">GST-Inclusive vs GST-Exclusive Views</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Toggle between <strong className="text-gray-200">GST-inclusive and GST-exclusive revenue views</strong> with one click. GST-inclusive for BAS reporting and client-facing figures. GST-exclusive for true business performance analysis and profit calculations. InvoiceFlow automatically calculates both from every invoice, so you never have to manually separate GST &mdash; a common source of errors for freelancers who use spreadsheets.
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-5 mt-6">
              <p className="text-emerald-400 font-medium mb-2">Revenue Intelligence, Not Just Revenue Tracking</p>
              <p className="text-gray-400 text-sm">
                Most freelancers know their approximate annual revenue. Few know their MRR, revenue per client, concentration risk, or growth rate. InvoiceFlow transforms raw invoice data into <strong className="text-gray-200">actionable revenue intelligence</strong> that helps you make better pricing decisions, identify at-risk clients, spot growth opportunities, and plan your business with confidence. Know your numbers &mdash; not just the top-line total, but the full story behind it.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Related Glossary Terms */}
      <section className="max-w-4xl mx-auto px-4 pb-16">
        <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
          <h2 className="text-white font-semibold mb-4">Related Glossary Terms</h2>
          <div className="flex flex-wrap gap-2">
            {[
              { label: 'Profit Margin', href: '/glossary/profit-margin' },
              { label: 'Cash Flow', href: '/glossary/cash-flow' },
              { label: 'Income Tax', href: '/glossary/income-tax' },
              { label: 'Net Income', href: '/glossary/net-income' },
              { label: 'Billable Hours', href: '/glossary/billable-hours' },
              { label: 'Break-Even Point', href: '/glossary/break-even-point' },
            ].map((term) => (
              <Link key={term.href} href={term.href} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium hover:bg-emerald-500/20 transition-colors">
                {term.label}
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Related Tools */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-white mb-2 text-center">Related Tools</h2>
        <p className="text-gray-400 text-center mb-8">Free tools to help you track and grow your freelance revenue.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {relatedTools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:border-emerald-500/50 hover:bg-gray-800/80 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4">
                {tool.icon}
              </div>
              <h3 className="text-white font-medium mb-2 group-hover:text-emerald-400 transition-colors">{tool.name}</h3>
              <p className="text-sm text-gray-400">{tool.description}</p>
              <div className="mt-4 text-emerald-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
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
        <p className="text-gray-400 text-center mb-8">In-depth guides on revenue, tax, and pricing for Australian freelancers.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {relatedGuides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group p-6 rounded-2xl bg-gray-800/40 border border-gray-700/40 hover:border-emerald-500/40 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h3 className="text-white font-medium mb-2 group-hover:text-emerald-400 transition-colors">{guide.name}</h3>
              <p className="text-sm text-gray-400">{guide.description}</p>
              <div className="mt-4 text-emerald-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
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
              <summary className="flex items-center justify-between cursor-pointer px-6 py-4 text-white font-medium hover:text-emerald-400 transition-colors">
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
        <div className="rounded-2xl bg-gradient-to-br from-emerald-500/10 to-green-500/10 border border-emerald-500/20 p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Track Every Dollar. Grow Your Revenue.
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            InvoiceFlow gives Australian freelancers automatic revenue tracking, BAS-ready reports, client revenue analysis, and GST-inclusive/exclusive views &mdash; so you always know exactly where your business stands.
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
