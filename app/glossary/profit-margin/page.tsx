import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Profit Margin: What It Is, How to Calculate It & Benchmarks for Freelancers — InvoiceFlow',
  description:
    'What is profit margin? Learn how to calculate gross vs net profit margin, what a good profit margin is for freelancers (50-70%), and how to improve your margin as an Australian freelancer or sole trader.',
  keywords: [
    'profit margin meaning',
    'what is a good profit margin freelancer',
    'profit margin calculator freelancer',
    'gross vs net profit margin',
    'freelance profit margin australia',
    'how to calculate profit margin',
    'net profit margin formula',
    'freelancer profit margin benchmarks',
    'improve profit margin freelancer',
    'profit margin sole trader australia',
    'service business profit margin',
    'freelance business profitability',
  ],
  alternates: { canonical: '/glossary/profit-margin' },
  openGraph: {
    title: 'Profit Margin: What It Is, How to Calculate It & Benchmarks for Freelancers — InvoiceFlow',
    description:
      'Everything Australian freelancers need to know about profit margin: gross vs net, healthy benchmarks (50-70%), step-by-step calculation, and strategies to improve your margin.',
    url: 'https://invoiceflow-teal.vercel.app/glossary/profit-margin',
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
    { '@type': 'ListItem', position: 3, name: 'Profit Margin', item: `${BASE_URL}/glossary/profit-margin` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a good profit margin for a freelancer in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Service-based freelancers should target 50-70% net profit margin (before income tax). This accounts for superannuation (11.5%), insurance, software subscriptions, home office costs, and marketing expenses. Below 40% indicates pricing or expense problems that need immediate attention. Product-based freelance businesses typically have lower margins of 20-40% due to higher direct costs.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I calculate profit margin on GST-inclusive income?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Always calculate profit margin on GST-exclusive figures. If you invoice $11,000 including GST, your revenue for margin calculation is $10,000. GST is not your money — it passes through to the ATO. Including GST inflates your apparent margin and gives misleading results. For example, a freelancer who invoices $132,000 including GST actually has $120,000 in revenue for profit margin purposes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I include superannuation when calculating profit margin?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Even though superannuation contributions are voluntary for sole traders, super is a real business cost that reduces your available profit. At 11.5% of income for the 2025-26 financial year, super significantly impacts your net margin. Include it in your expenses to get an accurate picture of your business profitability. A freelancer earning $120,000 who contributes 11.5% super is paying $13,800 in super alone.',
      },
    },
    {
      '@type': 'Question',
      name: 'How often should I review my profit margin?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Review your profit margin quarterly at minimum, ideally monthly. This allows you to spot trends early — a declining margin over 2-3 months signals a problem with pricing, expenses, or client mix that needs addressing before it becomes critical. InvoiceFlow provides real-time margin tracking so you can see your profitability at any time without waiting for quarterly reports.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is my profit margin different from my take-home pay?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Your profit margin shows business profitability before income tax. To calculate take-home pay, you need to subtract income tax (using ATO 2025-26 tax brackets), Medicare levy (2%), any HELP/HECS debt repayments, and voluntary superannuation contributions from your net profit. A freelancer with a 70% net profit margin earning $120,000 in revenue keeps approximately $64,920 after all taxes and levies — an effective take-home rate of about 54%.',
      },
    },
  ],
};

const tocItems = [
  { id: 'what-is-profit-margin', label: '1. What Is Profit Margin?' },
  { id: 'gross-vs-net-profit-margin', label: '2. Gross vs Net Profit Margin' },
  { id: 'good-profit-margin-freelancers', label: '3. What\u2019s a Good Profit Margin for Freelancers?' },
  { id: 'how-to-calculate-profit-margin', label: '4. How to Calculate Your Profit Margin' },
  { id: 'how-to-improve-profit-margin', label: '5. How to Improve Your Profit Margin' },
  { id: 'tracking-with-invoiceflow', label: '6. Tracking Profit Margin with InvoiceFlow' },
];

const relatedTools = [
  {
    href: '/tools/profit-margin-calculator',
    name: 'Profit Margin Calculator',
    description: 'Calculate your gross and net profit margin instantly with our free tool.',
    icon: (
      <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm2.25-4.5h.008v.008H10.5v-.008zm0 2.25h.008v.008H10.5v-.008zm0 2.25h.008v.008H10.5v-.008zm2.25-4.5h.008v.008H12.75v-.008zm0 2.25h.008v.008H12.75v-.008zm2.25-4.5h.008v.008H15v-.008zm0 2.25h.008v.008H15v-.008zM6 18.75a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 18.75V6a2.25 2.25 0 00-2.25-2.25h-7.5A2.25 2.25 0 006 6v12.75zM3.75 18.75V6A4.5 4.5 0 018.25 1.5h7.5A4.5 4.5 0 0120.25 6v12.75a4.5 4.5 0 01-4.5 4.5h-7.5a4.5 4.5 0 01-4.5-4.5z" />
      </svg>
    ),
  },
  {
    href: '/tools/profit-and-loss-generator',
    name: 'Profit & Loss Statement Generator',
    description: 'Generate a professional P&L statement for your freelance business.',
    icon: (
      <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    href: '/tools/rate-calculator',
    name: 'Rate Calculator',
    description: 'Calculate the right hourly or project rate to hit your target profit margin.',
    icon: (
      <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    href: '/tools/freelance-business-scorecard',
    name: 'Freelance Business Scorecard',
    description: 'Assess your overall business health including profitability and margin analysis.',
    icon: (
      <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
];

const relatedGuides = [
  {
    href: '/guides/setting-freelance-rates',
    name: 'Setting Freelance Rates',
    description: 'Set rates that protect your profit margin and reflect your true value.',
  },
  {
    href: '/guides/gst-for-freelancers',
    name: 'GST for Freelancers',
    description: 'Understand how GST affects your revenue calculations and profit margin.',
  },
  {
    href: '/guides/tax-guide-freelancers',
    name: 'Tax Guide for Freelancers',
    description: 'Navigate Australian tax obligations and understand the difference between margin and take-home pay.',
  },
];

export default function ProfitMarginGlossaryPage() {
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
            <span className="text-white">Profit Margin</span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            Glossary &mdash; Financial Reporting
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Profit Margin{' '}
            <span className="bg-gradient-to-r from-emerald-500 to-green-500 bg-clip-text text-transparent">
              for Australian Freelancers
            </span>
          </h1>

          {/* Summary */}
          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            Profit margin is the percentage of revenue that remains as profit after all expenses. It is the single most important metric for measuring how efficiently your freelance business converts revenue into profit. This guide covers gross vs net profit margin, healthy benchmarks, step-by-step calculation, and strategies to improve your margin.
          </p>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>13 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Worked Examples Included</span>
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
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs font-bold">50-70%</span>
              <div>
                <p className="text-white font-medium text-sm">Healthy Net Margin</p>
                <p className="text-gray-400 text-sm">Service-based freelancers should target 50&ndash;70% net profit margin before income tax</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs font-bold">40%</span>
              <div>
                <p className="text-white font-medium text-sm">Danger Zone Threshold</p>
                <p className="text-gray-400 text-sm">Below 40% net profit margin means you need to review pricing or cut expenses immediately</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs font-bold">63%</span>
              <div>
                <p className="text-white font-medium text-sm">Consultant Average</p>
                <p className="text-gray-400 text-sm">Average net profit margin for Australian consultants and professional service freelancers</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-green-400 text-xs font-bold">$84K</span>
              <div>
                <p className="text-white font-medium text-sm">Net Profit Example</p>
                <p className="text-gray-400 text-sm">Net profit on $120K revenue at 70% margin &mdash; before income tax</p>
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

        {/* Section 1: What Is Profit Margin? */}
        <section id="what-is-profit-margin">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center text-white text-sm font-bold">1</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">What Is Profit Margin?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Profit margin is the <strong className="text-white">percentage of revenue that remains as profit after expenses are deducted</strong>. It measures how efficiently your business converts revenue into actual profit &mdash; the money you get to keep. A higher profit margin means more of every dollar you earn stays in your pocket; a lower margin means expenses are eating into your earnings.
            </p>
            <p className="text-gray-300 leading-relaxed">
              For freelancers and sole traders, profit margin is the single most important metric for business health. Revenue alone is meaningless if your expenses consume most of it. A freelancer earning $200,000 with a 30% margin keeps $60,000. A freelancer earning $120,000 with a 70% margin keeps $84,000. <strong className="text-white">Margin matters more than revenue.</strong>
            </p>

            <h3 className="text-lg font-semibold text-white mt-8">The Two Main Types</h3>
            <p className="text-gray-300 leading-relaxed">
              There are two primary types of profit margin that every freelancer should understand:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mt-3">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-emerald-400 font-medium mb-2">Gross Profit Margin</h4>
                <p className="text-gray-400 text-sm">Revenue minus <strong className="text-gray-200">direct costs</strong> (costs directly tied to delivering your service), divided by revenue. Shows how profitable your core service delivery is before overhead.</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-green-400 font-medium mb-2">Net Profit Margin</h4>
                <p className="text-gray-400 text-sm">Revenue minus <strong className="text-gray-200">all expenses</strong> (direct costs + overhead + insurance + super + marketing), divided by revenue. Shows your true business profitability.</p>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">The Formula</h3>
            <div className="rounded-xl bg-gray-800/50 border border-emerald-500/20 p-6 mt-3">
              <div className="space-y-4">
                <div>
                  <p className="text-emerald-400 font-medium text-sm mb-1">Gross Profit Margin</p>
                  <p className="text-white font-mono text-lg">(Revenue &minus; Direct Costs) &divide; Revenue &times; 100</p>
                </div>
                <div className="border-t border-gray-700/50 pt-4">
                  <p className="text-green-400 font-medium text-sm mb-1">Net Profit Margin</p>
                  <p className="text-white font-mono text-lg">(Revenue &minus; All Expenses) &divide; Revenue &times; 100</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-5 mt-6">
              <p className="text-emerald-400 font-medium mb-2">Why This Matters for Freelancers</p>
              <p className="text-gray-400 text-sm">
                Unlike employees who receive a fixed salary, freelancers bear all their own business costs &mdash; superannuation, insurance, software, marketing, home office, equipment, and professional development. Without tracking profit margin, you could be earning impressive revenue while actually keeping less than a salaried employee in the same role. <strong className="text-gray-200">Profit margin tells you the truth about your business.</strong>
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Gross vs Net Profit Margin */}
        <section id="gross-vs-net-profit-margin">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center text-white text-sm font-bold">2</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Gross vs Net Profit Margin</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Understanding the distinction between gross and net profit margin is critical for making informed business decisions. Each tells you something different about your freelance business.
            </p>

            <h3 className="text-lg font-semibold text-white mt-6">Gross Profit Margin</h3>
            <p className="text-gray-300 leading-relaxed">
              Gross profit margin measures revenue minus <strong className="text-white">direct costs only</strong> &mdash; the costs directly tied to delivering your service. For freelancers, direct costs include:
            </p>
            <ul className="space-y-2 text-sm text-gray-400 mt-3">
              <li><strong className="text-gray-200">Software subscriptions</strong> required for delivery (e.g., Adobe Creative Cloud, GitHub, Figma)</li>
              <li><strong className="text-gray-200">Stock images, fonts, or assets</strong> purchased for client projects</li>
              <li><strong className="text-gray-200">Subcontractor costs</strong> &mdash; if you outsource part of a project</li>
              <li><strong className="text-gray-200">Project-specific materials</strong> &mdash; printing, hosting costs billed to a specific client</li>
            </ul>

            <h3 className="text-lg font-semibold text-white mt-8">Net Profit Margin</h3>
            <p className="text-gray-300 leading-relaxed">
              Net profit margin measures revenue minus <strong className="text-white">all costs</strong> &mdash; direct costs plus every overhead expense your business incurs. This includes:
            </p>
            <ul className="space-y-2 text-sm text-gray-400 mt-3">
              <li>Everything in direct costs, <strong className="text-gray-200">plus</strong>:</li>
              <li><strong className="text-gray-200">Home office costs</strong> &mdash; rent proportion, internet, electricity, desk, chair</li>
              <li><strong className="text-gray-200">Insurance</strong> &mdash; professional indemnity, public liability</li>
              <li><strong className="text-gray-200">Superannuation</strong> &mdash; 11.5% of income (2025&ndash;26 rate)</li>
              <li><strong className="text-gray-200">Marketing and advertising</strong> &mdash; website hosting, SEO tools, paid ads</li>
              <li><strong className="text-gray-200">Professional development</strong> &mdash; courses, conferences, books</li>
              <li><strong className="text-gray-200">Accounting and bookkeeping</strong> fees</li>
              <li><strong className="text-gray-200">Equipment depreciation</strong> &mdash; laptop, monitors, camera, tools</li>
            </ul>

            <h3 className="text-lg font-semibold text-white mt-8">Worked Example: $150K Freelance Revenue</h3>
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
                    <tr>
                      <td className="py-3 px-4 text-white font-medium">Revenue (GST-exclusive)</td>
                      <td className="py-3 px-4 text-white text-right font-medium">$150,000</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-gray-300">Direct Costs (software, stock, subcontractors)</td>
                      <td className="py-3 px-4 text-red-400 text-right">&minus;$15,000</td>
                    </tr>
                    <tr className="bg-emerald-500/5">
                      <td className="py-3 px-4 text-emerald-400 font-medium">Gross Profit</td>
                      <td className="py-3 px-4 text-emerald-400 text-right font-medium">$135,000 (90%)</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-gray-300">Home office &amp; rent</td>
                      <td className="py-3 px-4 text-red-400 text-right">&minus;$6,000</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-gray-300">Insurance (PI + PLI)</td>
                      <td className="py-3 px-4 text-red-400 text-right">&minus;$1,500</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-gray-300">Marketing &amp; advertising</td>
                      <td className="py-3 px-4 text-red-400 text-right">&minus;$3,000</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-gray-300">Superannuation (11.5%)</td>
                      <td className="py-3 px-4 text-red-400 text-right">&minus;$17,250</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-gray-300">Other overhead (accounting, equipment, misc)</td>
                      <td className="py-3 px-4 text-red-400 text-right">&minus;$11,750</td>
                    </tr>
                    <tr className="bg-green-500/5">
                      <td className="py-3 px-4 text-green-400 font-medium">Net Profit (before income tax)</td>
                      <td className="py-3 px-4 text-green-400 text-right font-medium">$95,500 (63.7%)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="px-4 py-3 bg-gray-900/40 border-t border-gray-700/30">
                <p className="text-xs text-gray-500">This example shows a healthy freelance business with strong gross margin (90%) and solid net margin (63.7%). Income tax is calculated separately on the net profit figure.</p>
              </div>
            </div>

            {/* Visual Flow Card */}
            <h3 className="text-lg font-semibold text-white mt-8">The Profit Flow</h3>
            <div className="flex flex-col sm:flex-row items-center gap-3 mt-4">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-4 text-center flex-1 w-full">
                <p className="text-xs text-gray-500 mb-1">Total</p>
                <p className="text-white font-bold text-lg">Revenue</p>
                <p className="text-gray-400 text-sm">$150,000</p>
              </div>
              <svg className="w-6 h-6 text-gray-600 rotate-90 sm:rotate-0 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
              <div className="rounded-xl bg-emerald-500/10 border border-emerald-500/20 p-4 text-center flex-1 w-full">
                <p className="text-xs text-emerald-500 mb-1">Minus Direct Costs</p>
                <p className="text-emerald-400 font-bold text-lg">Gross Profit</p>
                <p className="text-gray-400 text-sm">$135,000 (90%)</p>
              </div>
              <svg className="w-6 h-6 text-gray-600 rotate-90 sm:rotate-0 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
              <div className="rounded-xl bg-green-500/10 border border-green-500/20 p-4 text-center flex-1 w-full">
                <p className="text-xs text-green-500 mb-1">Minus All Overhead</p>
                <p className="text-green-400 font-bold text-lg">Net Profit</p>
                <p className="text-gray-400 text-sm">$95,500 (63.7%)</p>
              </div>
            </div>

            <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-5 mt-6">
              <p className="text-emerald-400 font-medium mb-2">Which One Should You Track?</p>
              <p className="text-gray-400 text-sm">
                <strong className="text-gray-200">Track both, but prioritise net profit margin.</strong> Gross margin tells you if your service delivery is efficient. Net margin tells you if your overall business is profitable. A freelancer with 95% gross margin but 25% net margin has an overhead problem. A freelancer with 70% gross margin and 60% net margin has a lean, well-run business.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: What's a Good Profit Margin for Freelancers? */}
        <section id="good-profit-margin-freelancers">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center text-white text-sm font-bold">3</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">What&apos;s a Good Profit Margin for Freelancers?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Service-based freelancers should target a <strong className="text-white">50&ndash;70% net profit margin</strong> (before income tax). This range accounts for superannuation, insurance, software, home office, marketing, and professional development costs while leaving healthy profit. Here is how to interpret your margin:
            </p>

            <h3 className="text-lg font-semibold text-white mt-6">Margin Health Zones</h3>
            <div className="space-y-3 mt-3">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-red-500/5 border border-red-500/20">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center text-red-400 text-xs font-bold">&lt;40%</span>
                <div>
                  <p className="text-red-400 font-medium text-sm">Danger Zone</p>
                  <p className="text-gray-400 text-sm">Your expenses are consuming too much revenue. Review your pricing immediately &mdash; you may be undercharging, over-servicing clients, or carrying unnecessary costs. At this margin, after income tax you are likely earning less than a comparable salaried employee.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-amber-500/5 border border-amber-500/20">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 text-xs font-bold">40-50%</span>
                <div>
                  <p className="text-amber-400 font-medium text-sm">Adequate, But Room to Improve</p>
                  <p className="text-gray-400 text-sm">You are covering your costs and making a reasonable profit, but there is significant room for improvement. Look for opportunities to raise rates, reduce overhead, or eliminate low-margin clients. A 10% margin improvement at $120K revenue means an extra $12,000 in your pocket.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs font-bold">50-70%</span>
                <div>
                  <p className="text-emerald-400 font-medium text-sm">Healthy &mdash; The Sweet Spot</p>
                  <p className="text-gray-400 text-sm">This is the target range for most service-based freelancers. You are earning well above your costs, have buffer for quiet periods, and can invest in growth. Most successful Australian freelancers operate in this range.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-blue-500/5 border border-blue-500/20">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 text-xs font-bold">&gt;70%</span>
                <div>
                  <p className="text-blue-400 font-medium text-sm">Excellent &mdash; But Check Your Investments</p>
                  <p className="text-gray-400 text-sm">Outstanding margin. However, margins above 70% may indicate you are underinvesting in growth &mdash; marketing, tools, professional development, or outsourcing tasks that free up your time. Make sure high margins are not coming at the cost of long-term business growth.</p>
                </div>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">Industry Benchmarks (Net Profit Margin, Before Income Tax)</h3>
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 overflow-hidden mt-4">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-700/50">
                      <th className="text-left text-gray-400 font-medium py-3 px-4">Freelance Profession</th>
                      <th className="text-left text-gray-400 font-medium py-3 px-4">Typical Net Margin</th>
                      <th className="text-left text-gray-400 font-medium py-3 px-4">Key Cost Drivers</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700/30">
                    <tr>
                      <td className="py-3 px-4 text-white">Consultants</td>
                      <td className="py-3 px-4"><span className="text-emerald-400 text-xs font-medium bg-emerald-500/10 px-2 py-0.5 rounded-full">60&ndash;75%</span></td>
                      <td className="py-3 px-4 text-gray-400">Low direct costs, mainly super + insurance + travel</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white">Writers / Copywriters</td>
                      <td className="py-3 px-4"><span className="text-emerald-400 text-xs font-medium bg-emerald-500/10 px-2 py-0.5 rounded-full">60&ndash;75%</span></td>
                      <td className="py-3 px-4 text-gray-400">Minimal direct costs, mainly software + super</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white">Web Developers</td>
                      <td className="py-3 px-4"><span className="text-emerald-400 text-xs font-medium bg-emerald-500/10 px-2 py-0.5 rounded-full">55&ndash;70%</span></td>
                      <td className="py-3 px-4 text-gray-400">Software subscriptions, hosting, equipment</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white">Graphic Designers</td>
                      <td className="py-3 px-4"><span className="text-amber-400 text-xs font-medium bg-amber-500/10 px-2 py-0.5 rounded-full">50&ndash;65%</span></td>
                      <td className="py-3 px-4 text-gray-400">Adobe suite, stock assets, fonts, equipment</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white">Personal Trainers</td>
                      <td className="py-3 px-4"><span className="text-amber-400 text-xs font-medium bg-amber-500/10 px-2 py-0.5 rounded-full">45&ndash;60%</span></td>
                      <td className="py-3 px-4 text-gray-400">Gym hire, equipment, insurance, certifications</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white">Photographers</td>
                      <td className="py-3 px-4"><span className="text-orange-400 text-xs font-medium bg-orange-500/10 px-2 py-0.5 rounded-full">40&ndash;55%</span></td>
                      <td className="py-3 px-4 text-gray-400">Equipment depreciation, editing software, insurance, travel</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="px-4 py-3 bg-gray-900/40 border-t border-gray-700/30">
                <p className="text-xs text-gray-500">Benchmarks based on Australian freelancer data. Product-based businesses typically have lower margins (20&ndash;40%) due to higher cost of goods sold.</p>
              </div>
            </div>

            <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-5 mt-6">
              <p className="text-emerald-400 font-medium mb-2">Product vs Service Businesses</p>
              <p className="text-gray-400 text-sm">
                The 50&ndash;70% benchmark applies to <strong className="text-gray-200">service-based freelancers</strong> where the primary input is your time and expertise. If you sell physical or digital products (e-commerce, print-on-demand, handmade goods), typical margins are <strong className="text-gray-200">20&ndash;40%</strong> due to significantly higher cost of goods sold. Do not compare your product margins to service benchmarks &mdash; they are fundamentally different business models.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: How to Calculate Your Profit Margin */}
        <section id="how-to-calculate-profit-margin">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center text-white text-sm font-bold">4</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">How to Calculate Your Profit Margin</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Follow these three steps to calculate your profit margin accurately. This walkthrough uses Australian-specific figures and includes common expenses freelancers forget.
            </p>

            <h3 className="text-lg font-semibold text-white mt-6">Step 1: Calculate Your Total Revenue</h3>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50 mt-3">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs font-bold">1</span>
              <div>
                <p className="text-white font-medium text-sm">Total all invoiced income</p>
                <p className="text-gray-400 text-sm">Add up all revenue from client invoices for the period (monthly, quarterly, or annually). <strong className="text-gray-200">Critical: if you are registered for GST, use GST-exclusive figures.</strong> If you invoiced $132,000 including GST, your revenue is $120,000. GST is not your money &mdash; it passes through to the ATO and inflates your apparent margin if included.</p>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">Step 2: List All Expenses</h3>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50 mt-3">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs font-bold">2</span>
              <div>
                <p className="text-white font-medium text-sm">Capture every business expense</p>
                <p className="text-gray-400 text-sm">Include direct costs (software, subcontractors, assets) and indirect costs (insurance, super, home office, vehicle, marketing, professional development, equipment depreciation, accounting fees, and miscellaneous). The most commonly missed expenses are superannuation, home office costs, and equipment depreciation.</p>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">Step 3: Calculate</h3>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50 mt-3">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs font-bold">3</span>
              <div>
                <p className="text-white font-medium text-sm">Subtract expenses from revenue, then divide by revenue</p>
                <p className="text-gray-400 text-sm">Net Profit = Revenue &minus; All Expenses. Net Profit Margin = Net Profit &divide; Revenue &times; 100. This gives you the percentage of every dollar you keep as profit before income tax.</p>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">Worked Example: $120K Freelancer</h3>
            <p className="text-gray-300 leading-relaxed">
              Let&apos;s walk through a realistic calculation for a freelance web developer earning $120,000 per year (GST-exclusive):
            </p>
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 overflow-hidden mt-4">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-700/50">
                      <th className="text-left text-gray-400 font-medium py-3 px-4">Expense Category</th>
                      <th className="text-left text-gray-400 font-medium py-3 px-4">Details</th>
                      <th className="text-right text-gray-400 font-medium py-3 px-4">Annual Cost</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700/30">
                    <tr className="bg-emerald-500/5">
                      <td className="py-3 px-4 text-emerald-400 font-medium" colSpan={2}>Revenue (GST-exclusive)</td>
                      <td className="py-3 px-4 text-emerald-400 text-right font-medium">$120,000</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white">Software &amp; subscriptions</td>
                      <td className="py-3 px-4 text-gray-400">Hosting, GitHub, Figma, tools</td>
                      <td className="py-3 px-4 text-red-400 text-right">&minus;$3,000</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white">Insurance (PI + PLI)</td>
                      <td className="py-3 px-4 text-gray-400">Professional indemnity + public liability</td>
                      <td className="py-3 px-4 text-red-400 text-right">&minus;$1,200</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white">Superannuation (11.5%)</td>
                      <td className="py-3 px-4 text-gray-400">Voluntary but essential for retirement</td>
                      <td className="py-3 px-4 text-red-400 text-right">&minus;$13,800</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white">Marketing</td>
                      <td className="py-3 px-4 text-gray-400">Website, SEO, portfolio, networking</td>
                      <td className="py-3 px-4 text-red-400 text-right">&minus;$2,000</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white">Home office</td>
                      <td className="py-3 px-4 text-gray-400">67c/hr &times; 7,200 hrs (ATO shortcut method)</td>
                      <td className="py-3 px-4 text-red-400 text-right">&minus;$4,824</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white">Vehicle &amp; travel</td>
                      <td className="py-3 px-4 text-gray-400">Client meetings, co-working visits</td>
                      <td className="py-3 px-4 text-red-400 text-right">&minus;$2,000</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white">Professional development</td>
                      <td className="py-3 px-4 text-gray-400">Courses, conferences, books</td>
                      <td className="py-3 px-4 text-red-400 text-right">&minus;$1,500</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white">Equipment depreciation</td>
                      <td className="py-3 px-4 text-gray-400">Laptop, monitors, peripherals</td>
                      <td className="py-3 px-4 text-red-400 text-right">&minus;$3,000</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white">Miscellaneous</td>
                      <td className="py-3 px-4 text-gray-400">Accounting, phone, bank fees, misc</td>
                      <td className="py-3 px-4 text-red-400 text-right">&minus;$4,526</td>
                    </tr>
                    <tr className="bg-gray-700/20">
                      <td className="py-3 px-4 text-gray-300 font-medium" colSpan={2}>Total Expenses</td>
                      <td className="py-3 px-4 text-red-400 text-right font-medium">&minus;$35,850</td>
                    </tr>
                    <tr className="bg-green-500/5">
                      <td className="py-3 px-4 text-green-400 font-medium" colSpan={2}>Net Profit (before income tax)</td>
                      <td className="py-3 px-4 text-green-400 text-right font-medium">$84,150</td>
                    </tr>
                    <tr className="bg-green-500/5">
                      <td className="py-3 px-4 text-green-400 font-medium" colSpan={2}>Net Profit Margin</td>
                      <td className="py-3 px-4 text-green-400 text-right font-bold text-lg">70.1%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">After Income Tax</h3>
            <p className="text-gray-300 leading-relaxed">
              Net profit margin is calculated <strong className="text-white">before income tax</strong> because tax varies based on individual circumstances (deductions, offsets, HELP debt). However, it is useful to know the after-tax picture:
            </p>
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5 mt-3">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Net Profit (before tax)</span>
                  <span className="text-white font-medium">$84,150</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Estimated income tax (ATO 2025&ndash;26 brackets)</span>
                  <span className="text-red-400">&minus;$17,547</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Medicare levy (2%)</span>
                  <span className="text-red-400">&minus;$1,683</span>
                </div>
                <div className="flex justify-between border-t border-gray-700/50 pt-2 mt-2">
                  <span className="text-green-400 font-medium">After-Tax Profit</span>
                  <span className="text-green-400 font-bold">$64,920</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">After-Tax Margin</span>
                  <span className="text-gray-300 font-medium">54.1%</span>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-5 mt-6">
              <p className="text-emerald-400 font-medium mb-2">ATO Home Office Method</p>
              <p className="text-gray-400 text-sm">
                The home office figure above uses the ATO&apos;s <strong className="text-gray-200">revised fixed rate method at 67 cents per hour</strong> (updated from the previous 52c/hr rate). This covers electricity, phone, internet, stationery, and depreciation of home office furniture. If you work 36 hours per week for 50 weeks, that is 1,800 hours &times; $0.67 = $1,206 per quarter, or $4,824 per year. You can also use the actual cost method if your real costs are higher.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: How to Improve Your Profit Margin */}
        <section id="how-to-improve-profit-margin">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center text-white text-sm font-bold">5</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">How to Improve Your Profit Margin</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Improving your profit margin is the fastest way to increase your take-home pay without working more hours. Here are eight proven strategies, ordered by impact:
            </p>

            <div className="space-y-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <span className="text-emerald-400 text-sm font-bold">1</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Raise Your Rates</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  The single highest-impact lever you have. A <strong className="text-gray-200">10% rate increase on $120K revenue adds $12,000 to your bottom line</strong> with zero additional work. Most freelancers undercharge. If you have not raised rates in the past 12 months, you are effectively taking a pay cut due to inflation. Review rates annually at minimum, and increase them for new clients immediately.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <span className="text-emerald-400 text-sm font-bold">2</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Reduce Scope Creep</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Scope creep is the silent margin killer. Every hour of free work you deliver for a client <strong className="text-gray-200">directly reduces your profit margin</strong>. Use clear contracts with defined scope, charge for out-of-scope work, and track time on every project. If you are spending 20% more time than quoted on projects, your effective margin is 20% lower than you think.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <span className="text-emerald-400 text-sm font-bold">3</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Productise Your Services</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Move from hourly billing to <strong className="text-gray-200">fixed-price packages</strong>. Packages allow you to capture efficiency gains &mdash; as you get faster at delivering a service, your effective hourly rate increases while the client pays the same price. A website package priced at $5,000 that takes you 25 hours earns $200/hr. If you get that down to 18 hours through templates and processes, you are earning $278/hr.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <span className="text-emerald-400 text-sm font-bold">4</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Cut Underperforming Expenses</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Audit every subscription and expense quarterly. Cancel tools you no longer use, downgrade plans you are not fully utilising, and look for cheaper alternatives. Most freelancers carry <strong className="text-gray-200">$1,000&ndash;$3,000 per year in unnecessary subscriptions</strong> they have forgotten about. That is pure margin improvement with zero downside.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <span className="text-emerald-400 text-sm font-bold">5</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Increase Billable Utilisation</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Billable utilisation is the percentage of your working hours that generate revenue. Target <strong className="text-gray-200">65% or higher</strong>. If you work 40 hours a week but only bill 20, your utilisation is 50% &mdash; meaning half your time generates zero revenue. Reduce admin time through automation, batch similar tasks, and streamline your sales process to spend more time on paid work.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <span className="text-emerald-400 text-sm font-bold">6</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Fire Low-Margin Clients</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  The bottom 20% of your clients often consume <strong className="text-gray-200">80% of your admin time</strong> &mdash; endless revisions, late payments, scope creep, and communication overhead. Calculate your profit margin per client. If certain clients are consistently below your target margin, raise their rates or let them go. Replacing a $5,000 client at 20% margin with a $5,000 client at 60% margin puts an extra $2,000 in your pocket.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <span className="text-emerald-400 text-sm font-bold">7</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Automate Admin Work</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Every hour spent on invoicing, bookkeeping, scheduling, and chasing payments is an hour that does not generate revenue. <strong className="text-gray-200">Automating admin tasks directly improves your billable utilisation</strong> and therefore your margin. Use tools like InvoiceFlow for invoicing, automated payment reminders, and expense tracking. Even saving 3 hours per week frees up 150 billable hours per year.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <span className="text-emerald-400 text-sm font-bold">8</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Review Quarterly, Not Annually</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  If you only check your profit margin at tax time, you are <strong className="text-gray-200">flying blind for 11 months of the year</strong>. Review monthly if possible, quarterly at minimum. A declining margin over 2&ndash;3 months is an early warning signal that pricing, expenses, or client mix needs adjustment. Quarterly reviews let you course-correct before small problems become large ones.
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-5 mt-6">
              <p className="text-emerald-400 font-medium mb-2">The Compound Effect</p>
              <p className="text-gray-400 text-sm">
                These strategies compound. A 10% rate increase + eliminating $2,000 in unnecessary subscriptions + improving utilisation from 50% to 65% can easily add <strong className="text-gray-200">$25,000&ndash;$40,000 to your annual profit</strong> without working a single extra hour. Focus on margin, not just revenue.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: Tracking Profit Margin with InvoiceFlow */}
        <section id="tracking-with-invoiceflow">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center text-white text-sm font-bold">6</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Tracking Profit Margin with InvoiceFlow</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              InvoiceFlow gives Australian freelancers the tools to track, analyse, and improve profit margins without spreadsheets or manual calculations. Here is how it supports your profitability:
            </p>

            <div className="space-y-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Automated Profit Tracking</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  InvoiceFlow automatically calculates your profit margin in real-time as you send invoices and log expenses. No spreadsheets, no manual formulas. Your <strong className="text-gray-200">gross and net profit margins update live</strong> on your dashboard, showing you exactly where your business stands at any moment. Set margin targets and get alerted when you fall below your threshold.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Expense Categorisation</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Categorise expenses as direct costs or overhead so InvoiceFlow can calculate both <strong className="text-gray-200">gross and net profit margins separately</strong>. Smart categorisation suggestions learn from your spending patterns, and recurring expenses like software subscriptions are tracked automatically. See exactly which expense categories have the biggest impact on your margin.
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
                  <h3 className="text-lg font-semibold text-white">Real-Time Margin Dashboard</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Your InvoiceFlow dashboard shows your <strong className="text-gray-200">current margin, margin trend over time, and margin by month</strong>. Visual charts make it easy to spot declining margins before they become a problem. Compare month-on-month and quarter-on-quarter to identify seasonal patterns and the impact of rate changes or new expenses.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Per-Client Profitability Analysis</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Not all clients are equally profitable. InvoiceFlow calculates <strong className="text-gray-200">profit margin for each client</strong> based on invoiced revenue and time tracked against that client. Quickly identify your most and least profitable clients. Use this data to make informed decisions about rate increases, client retention, and which types of clients to pursue.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Quarterly P&amp;L Reports</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Generate professional <strong className="text-gray-200">profit and loss statements</strong> for any period with one click. Use these for quarterly margin reviews, loan applications, or discussions with your accountant. InvoiceFlow formats the data in a standard P&amp;L layout that accountants and banks recognise, saving you hours of manual preparation.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">BAS-Ready Data</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  All revenue and expense data is <strong className="text-gray-200">organised for your quarterly BAS lodgement</strong>. GST is separated automatically, expense categories align with ATO requirements, and you can export everything your accountant needs in one click. No more reconciling spreadsheets or digging through bank statements at BAS time.
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-5 mt-6">
              <p className="text-emerald-400 font-medium mb-2">Know Your Numbers</p>
              <p className="text-gray-400 text-sm">
                The most successful freelancers know their profit margin at all times. They do not wait until tax time to discover they earned less than expected. InvoiceFlow puts your <strong className="text-gray-200">profit margin front and centre on your dashboard</strong> so you can make informed decisions about pricing, expenses, and growth every day &mdash; not just once a year.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Related Tools */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-white mb-2 text-center">Related Tools</h2>
        <p className="text-gray-400 text-center mb-8">Free tools to help you track and improve your profit margin.</p>
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
        <p className="text-gray-400 text-center mb-8">In-depth guides on freelance business profitability.</p>
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
            Know Your Numbers. Grow Your Profit.
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            InvoiceFlow gives Australian freelancers real-time profit margin tracking, per-client profitability analysis, and automated expense categorisation &mdash; so you always know exactly how much you are keeping.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button>Start Free &mdash; No Card Required</Button>
            </Link>
            <Link href="/tools/profit-margin-calculator">
              <Button variant="secondary">Try the Profit Margin Calculator</Button>
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
