import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Working Capital: Complete Guide for Freelancers & Small Business Australia — InvoiceFlow',
  description:
    'What is working capital? Learn the working capital formula (assets minus liabilities), healthy ratios, why freelancers struggle with cash, and 8 strategies to improve working capital. Australia-focused guide for sole traders and freelancers.',
  keywords: [
    'working capital meaning',
    'working capital management small business',
    'working capital for freelancers',
    'cash flow vs working capital',
    'working capital formula',
    'working capital ratio',
    'what is working capital australia',
    'working capital freelancer sole trader',
    'how to improve working capital',
    'working capital ratio interpretation',
    'current assets current liabilities',
    'freelancer financial planning australia',
  ],
  alternates: { canonical: '/glossary/working-capital' },
  openGraph: {
    title: 'Working Capital: Complete Guide for Freelancers & Small Business Australia — InvoiceFlow',
    description:
      'Everything you need to know about working capital: definition, formula, healthy ratio benchmarks, why freelancers struggle, 8 improvement strategies, and how it differs from cash flow.',
    url: 'https://invoiceflow-teal.vercel.app/glossary/working-capital',
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
    { '@type': 'ListItem', position: 3, name: 'Working Capital', item: `${BASE_URL}/glossary/working-capital` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is working capital in simple terms?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Working capital is the money left over after you subtract what you owe in the short term (current liabilities) from what you own in the short term (current assets). It is calculated as: Working Capital = Current Assets - Current Liabilities. For freelancers, current assets include cash in your bank account, outstanding invoices not yet paid, and prepaid expenses. Current liabilities include bills due in the next 12 months, tax owed to the ATO, GST you have collected but not yet remitted, and super contributions payable. Positive working capital means you have enough assets to cover short-term obligations. Negative working capital means your short-term debts exceed your available assets — a danger zone.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a good working capital ratio for a freelancer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The working capital ratio is calculated by dividing current assets by current liabilities. A ratio between 1.2 and 2.0 is considered healthy for most small businesses and freelancers. Below 1.0 is dangerous — it means your short-term liabilities exceed your short-term assets. A ratio above 2.0 is generally positive but may indicate too much idle cash that could be invested more productively. Aim to keep your ratio above 1.2 at all times, and ideally between 1.5 and 2.0 for comfortable financial health.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between working capital and cash flow?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Working capital is a snapshot — it measures your financial position at a specific point in time by comparing what you own versus what you owe in the short term. Cash flow is a movie — it measures the movement of money into and out of your business over a period of time. You can have strong working capital (lots of assets) but negative cash flow (money is not actually arriving fast enough). For example, if you have $20,000 in unpaid invoices, your working capital looks healthy — but if those clients are 60 days overdue, your actual cash flow is suffering. Both metrics matter and they tell you different things about your financial health.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do unpaid invoices affect working capital?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Outstanding invoices (accounts receivable) are counted as current assets when calculating working capital — so they improve your working capital ratio on paper. However, unpaid invoices represent money you are owed but have not received yet. If a large proportion of your current assets are tied up in unpaid invoices, your working capital may look healthy but you could still be struggling for actual cash. This is why improving invoice collection speed is critical: the faster clients pay, the faster your working capital converts to real cash you can use. Tools like InvoiceFlow help reduce the time between invoicing and payment through automatic reminders and clear payment terms.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can freelancers improve their working capital?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There are several effective strategies: (1) Shorten payment terms from Net 30 to Net 14 to get paid faster, (2) Request deposits of 30-50% before starting projects, (3) Invoice immediately when work is complete rather than waiting, (4) Follow up promptly on overdue invoices — politely but consistently, (5) Build a cash reserve of 3-6 months of operating expenses, (6) Reduce unnecessary business expenses to lower your current liabilities, (7) Automate tax savings — transfer 30% of every payment to a dedicated tax account so you always have enough set aside, and (8) Consider invoice factoring as a last resort if you have large amounts tied up in slow-paying receivables.',
      },
    },
  ],
};

const tocItems = [
  { id: 'what-is-working-capital', label: '1. What Is Working Capital?' },
  { id: 'formula-and-ratios', label: '2. Working Capital Formula & Ratios' },
  { id: 'freelancer-challenges', label: '3. Working Capital Challenges for Freelancers' },
  { id: 'improving-working-capital', label: '4. Improving Working Capital' },
  { id: 'working-capital-vs-cash-flow', label: '5. Working Capital vs Cash Flow' },
  { id: 'invoiceflow-working-capital', label: '6. How InvoiceFlow Helps' },
];

const relatedTools = [
  {
    href: '/tools/profit-margin-calculator',
    name: 'Profit Margin Calculator',
    description: 'Calculate your net profit margin and understand how expenses affect your overall financial health.',
    icon: (
      <svg className="w-6 h-6 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    href: '/tools/invoice-generator',
    name: 'Invoice Generator',
    description: 'Create and send professional invoices instantly to speed up collections and improve your working capital position.',
    icon: (
      <svg className="w-6 h-6 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    href: '/tools/late-payment-calculator',
    name: 'Late Payment Calculator',
    description: 'Calculate how much late-paying clients are costing you and the interest you are entitled to charge under Australian law.',
    icon: (
      <svg className="w-6 h-6 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    href: '/tools/rate-calculator',
    name: 'Rate Calculator',
    description: 'Set rates that account for tax, super, and expenses — ensuring your pricing supports a healthy working capital position.',
    icon: (
      <svg className="w-6 h-6 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const relatedGuides = [
  {
    href: '/guides/getting-paid-faster',
    name: 'Getting Paid Faster',
    description: 'Proven strategies to reduce payment delays, chase overdue invoices, and convert outstanding receivables into real cash sooner.',
  },
  {
    href: '/guides/invoicing-101',
    name: 'Invoicing 101',
    description: 'Everything Australian freelancers need to know about creating compliant invoices that get paid on time.',
  },
  {
    href: '/guides/setting-freelance-rates',
    name: 'Setting Your Freelance Rates',
    description: 'How to calculate rates that cover tax, super, and business costs — and leave you with healthy working capital.',
  },
];

export default function WorkingCapitalGlossaryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative px-4 pt-20 pb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-lime-500/10 via-green-500/10 to-lime-500/10 blur-3xl" />
        <div className="relative max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/glossary" className="hover:text-white transition-colors">Glossary</Link>
            <span>/</span>
            <span className="text-white">Working Capital</span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lime-500/10 border border-lime-500/20 text-lime-400 text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            Glossary &mdash; Financial Planning
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Working Capital{' '}
            <span className="bg-gradient-to-r from-lime-500 to-green-500 bg-clip-text text-transparent">
              Explained for Freelancers
            </span>
          </h1>

          {/* Summary */}
          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            Working capital is the financial buffer that keeps your freelance business alive between sending an invoice and getting paid. This guide covers what it means, how to calculate it, why freelancers struggle with it, and exactly how to improve it &mdash; with an Australian focus.
          </p>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>10 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Australia-Focused 2025-26</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
              </svg>
              <span>Updated March 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* In a Nutshell */}
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <div className="rounded-2xl bg-gradient-to-br from-lime-500/10 to-green-500/10 border border-lime-500/20 p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-lime-500/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-white">In a Nutshell</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-lime-500/20 flex items-center justify-center text-lime-400 text-xs font-bold">$</span>
              <div>
                <p className="text-white font-medium text-sm">Formula: Assets &minus; Liabilities</p>
                <p className="text-gray-400 text-sm">Current assets minus current liabilities equals your working capital position</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-lime-500/20 flex items-center justify-center text-lime-400 text-xs font-bold">1.5</span>
              <div>
                <p className="text-white font-medium text-sm">Healthy Ratio: 1.2&ndash;2.0</p>
                <p className="text-gray-400 text-sm">Working capital ratio in this range means you can comfortably cover short-term obligations</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-lime-500/20 flex items-center justify-center text-lime-400 text-xs font-bold">34d</span>
              <div>
                <p className="text-white font-medium text-sm">Average AU Payment: 34 Days</p>
                <p className="text-gray-400 text-sm">Average days Australian SMEs wait for invoice payment — capital tied up in receivables</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-lime-500/20 flex items-center justify-center text-lime-400 text-xs font-bold">3-6</span>
              <div>
                <p className="text-white font-medium text-sm">Recommended Reserve: 3&ndash;6 Months</p>
                <p className="text-gray-400 text-sm">Months of operating expenses every freelancer should hold as a working capital buffer</p>
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
                className="flex items-center gap-2 text-gray-400 hover:text-lime-400 transition-colors text-sm py-1"
              >
                <svg className="w-4 h-4 text-lime-500/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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

        {/* Section 1: What Is Working Capital? */}
        <section id="what-is-working-capital">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-lime-500 to-green-500 flex items-center justify-center text-white text-sm font-bold">1</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">What Is Working Capital?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Working capital is the <strong className="text-white">financial buffer between what you own in the short term and what you owe in the short term</strong>. It is calculated by subtracting your current liabilities from your current assets. A positive number means your business has more short-term resources than short-term debts &mdash; you are financially healthy. A negative number means the opposite &mdash; and it is a warning sign that should not be ignored.
            </p>
            <p className="text-gray-300 leading-relaxed">
              For freelancers, working capital is especially critical because it represents the gap between <strong className="text-white">sending an invoice and getting paid</strong>. When a client takes 30, 45, or 60 days to pay, you need working capital to cover your own expenses in the meantime. Without it, you are forced to delay bills, dip into personal savings, or take on debt just to stay afloat while waiting on money you are already owed.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Unlike salaried employees who receive a predictable fortnightly deposit, freelancers must <strong className="text-white">actively manage their own working capital</strong>. There is no payroll department, no guaranteed pay cycle, and no employer covering the gap. Understanding working capital &mdash; and keeping it healthy &mdash; is one of the most important financial skills a freelancer can develop.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-lime-500/20 p-5">
                <h4 className="text-lime-400 font-semibold mb-3">Current Assets (for freelancers)</h4>
                <ul className="space-y-2">
                  {[
                    'Cash in your business bank account',
                    'Outstanding invoices (accounts receivable)',
                    'Prepaid expenses (e.g. annual subscriptions)',
                    'Short-term investments or term deposits',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                      <svg className="w-4 h-4 text-lime-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-5">
                <h4 className="text-red-400 font-semibold mb-3">Current Liabilities (for freelancers)</h4>
                <ul className="space-y-2">
                  {[
                    'Bills due within the next 12 months',
                    'Income tax owed to the ATO',
                    'GST collected but not yet remitted',
                    'Superannuation contributions payable',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                      <svg className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="rounded-xl bg-lime-500/5 border border-lime-500/20 p-5 mt-6">
              <p className="text-lime-400 font-medium mb-2">Why Unpaid Invoices Matter More Than You Think</p>
              <p className="text-gray-400 text-sm">
                Outstanding invoices count as current assets &mdash; so they improve your working capital ratio on paper. But if those invoices are 60+ days overdue, that &ldquo;asset&rdquo; is not available to you. This is why <strong className="text-gray-200">fast invoice collection is the single most powerful lever</strong> for improving real-world working capital for freelancers. See our guide to{' '}
                <Link href="/glossary/accounts-receivable" className="text-lime-400 hover:text-lime-300 underline underline-offset-2">accounts receivable</Link>{' '}
                for strategies to speed up collections.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Working Capital Formula & Ratios */}
        <section id="formula-and-ratios">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-lime-500 to-green-500 flex items-center justify-center text-white text-sm font-bold">2</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Working Capital Formula &amp; Ratios</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              There are two key calculations every freelancer should know. The first tells you your absolute working capital position. The second tells you your relative position &mdash; which is more useful for comparing against benchmarks.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="rounded-xl bg-gray-900/60 border border-lime-500/30 p-6">
                <p className="text-xs text-lime-400 font-semibold uppercase tracking-widest mb-3">Formula 1</p>
                <h4 className="text-white font-bold text-lg mb-2">Working Capital</h4>
                <div className="rounded-lg bg-lime-500/10 border border-lime-500/20 px-4 py-3 mb-3">
                  <p className="text-lime-300 font-mono text-sm font-semibold">Current Assets &minus; Current Liabilities</p>
                </div>
                <p className="text-gray-400 text-sm">Tells you the absolute dollar amount of your short-term financial buffer. A positive result is good. A negative result is a warning.</p>
              </div>
              <div className="rounded-xl bg-gray-900/60 border border-green-500/30 p-6">
                <p className="text-xs text-green-400 font-semibold uppercase tracking-widest mb-3">Formula 2</p>
                <h4 className="text-white font-bold text-lg mb-2">Working Capital Ratio</h4>
                <div className="rounded-lg bg-green-500/10 border border-green-500/20 px-4 py-3 mb-3">
                  <p className="text-green-300 font-mono text-sm font-semibold">Current Assets &divide; Current Liabilities</p>
                </div>
                <p className="text-gray-400 text-sm">Tells you how many dollars of assets you have for every dollar of liability. Allows comparison across time and against benchmarks.</p>
              </div>
            </div>

            {/* Ratio Interpretation Table */}
            <h3 className="text-xl font-bold text-white mt-8 mb-4">Working Capital Ratio Interpretation</h3>
            <div className="rounded-2xl border border-gray-700/50 overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-800/80">
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Ratio</th>
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Interpretation</th>
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700/50">
                  <tr className="bg-red-900/10 hover:bg-red-900/20 transition-colors">
                    <td className="px-6 py-3 text-red-400 text-sm font-bold">&lt;1.0</td>
                    <td className="px-6 py-3 text-gray-300 text-sm font-medium">Danger Zone</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">Liabilities exceed assets. You may struggle to meet short-term obligations. Immediate action required.</td>
                  </tr>
                  <tr className="bg-yellow-900/10 hover:bg-yellow-900/20 transition-colors">
                    <td className="px-6 py-3 text-yellow-400 text-sm font-bold">1.0&ndash;1.2</td>
                    <td className="px-6 py-3 text-gray-300 text-sm font-medium">Tight</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">Technically solvent but very little buffer. A missed payment or unexpected expense could tip you negative.</td>
                  </tr>
                  <tr className="bg-lime-900/10 hover:bg-lime-900/20 transition-colors">
                    <td className="px-6 py-3 text-lime-400 text-sm font-bold">1.2&ndash;2.0</td>
                    <td className="px-6 py-3 text-gray-300 text-sm font-medium">Healthy ✓</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">Good position. You can comfortably cover short-term obligations with room to absorb unexpected costs.</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-blue-400 text-sm font-bold">&gt;2.0</td>
                    <td className="px-6 py-3 text-gray-300 text-sm font-medium">Strong (review)</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">Excellent buffer, but consider whether idle cash could be put to work — investing in skills, tools, or super.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Worked Example */}
            <h3 className="text-xl font-bold text-white mt-8 mb-4">Worked Example: A Freelance Designer</h3>
            <div className="rounded-xl bg-gray-800/50 border border-lime-500/20 p-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <p className="text-lime-400 font-semibold text-sm uppercase tracking-widest mb-3">Current Assets</p>
                  <div className="space-y-2">
                    {[
                      { label: 'Cash in business account', value: '$15,000' },
                      { label: 'Outstanding invoices (AR)', value: '$8,000' },
                      { label: 'Prepaid annual subscriptions', value: '$2,000' },
                    ].map((row, i) => (
                      <div key={i} className="flex justify-between text-sm">
                        <span className="text-gray-400">{row.label}</span>
                        <span className="text-white font-medium">{row.value}</span>
                      </div>
                    ))}
                    <div className="border-t border-lime-500/30 pt-2 flex justify-between text-sm font-bold">
                      <span className="text-lime-400">Total Current Assets</span>
                      <span className="text-lime-400">$25,000</span>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-red-400 font-semibold text-sm uppercase tracking-widest mb-3">Current Liabilities</p>
                  <div className="space-y-2">
                    {[
                      { label: 'Bills due this quarter', value: '$3,000' },
                      { label: 'Income tax reserve owed', value: '$5,000' },
                      { label: 'GST owed (next BAS)', value: '$2,000' },
                    ].map((row, i) => (
                      <div key={i} className="flex justify-between text-sm">
                        <span className="text-gray-400">{row.label}</span>
                        <span className="text-white font-medium">{row.value}</span>
                      </div>
                    ))}
                    <div className="border-t border-red-500/30 pt-2 flex justify-between text-sm font-bold">
                      <span className="text-red-400">Total Current Liabilities</span>
                      <span className="text-red-400">$10,000</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-700/50 grid sm:grid-cols-2 gap-4">
                <div className="rounded-lg bg-lime-500/10 border border-lime-500/20 p-4 text-center">
                  <p className="text-xs text-gray-400 mb-1">Working Capital</p>
                  <p className="text-2xl font-bold text-lime-400">$15,000</p>
                  <p className="text-xs text-gray-500 mt-1">$25K &minus; $10K</p>
                </div>
                <div className="rounded-lg bg-green-500/10 border border-green-500/20 p-4 text-center">
                  <p className="text-xs text-gray-400 mb-1">Working Capital Ratio</p>
                  <p className="text-2xl font-bold text-green-400">2.5</p>
                  <p className="text-xs text-gray-500 mt-1">$25K &divide; $10K &mdash; Strong position</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-lime-500/5 border border-lime-500/20 p-5 mt-4">
              <p className="text-lime-400 font-medium mb-2">Key Takeaway from the Example</p>
              <p className="text-gray-400 text-sm">
                This freelancer has a ratio of 2.5 &mdash; above the healthy range of 1.2&ndash;2.0. They have a strong buffer, but $8,000 of their assets are tied up in unpaid invoices. If those clients are slow to pay, that &ldquo;strong&rdquo; position could deteriorate quickly. This is why managing{' '}
                <Link href="/glossary/accounts-receivable" className="text-lime-400 hover:text-lime-300 underline underline-offset-2">accounts receivable</Link>{' '}
                is as important as the working capital number itself.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Working Capital Challenges for Freelancers */}
        <section id="freelancer-challenges">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-lime-500 to-green-500 flex items-center justify-center text-white text-sm font-bold">3</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Working Capital Challenges for Freelancers</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Freelancers face working capital challenges that corporate businesses with credit lines and steady revenue simply do not encounter. Here are the five biggest structural reasons freelancers struggle to maintain healthy working capital:
            </p>

            <div className="space-y-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-lime-500/10 flex items-center justify-center">
                    <span className="text-lime-400 font-bold text-sm">1</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Late-Paying Clients</h3>
                  <span className="text-xs text-lime-400 bg-lime-500/10 px-2 py-0.5 rounded-full">$26B problem</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Australian small businesses are owed an estimated <strong className="text-gray-200">$26 billion in unpaid invoices</strong> at any given time. The average Australian SME waits 34 days to be paid &mdash; but many wait far longer. Every day an invoice sits unpaid, it is counted as a current asset but provides zero real liquidity. Late payments are the primary reason freelancers with good revenue still find themselves short on working capital. See:{' '}
                  <Link href="/glossary/overdue-invoice" className="text-lime-400 hover:text-lime-300 underline underline-offset-2">overdue invoice</Link>,{' '}
                  <Link href="/glossary/payment-terms" className="text-lime-400 hover:text-lime-300 underline underline-offset-2">payment terms</Link>.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-lime-500/10 flex items-center justify-center">
                    <span className="text-lime-400 font-bold text-sm">2</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Irregular Income (Feast &amp; Famine Cycles)</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Freelance income is inherently lumpy. One month brings $15,000 in project completions; the next brings $2,000. But your liabilities &mdash; rent, software, insurance, tax &mdash; are consistent. This mismatch between <strong className="text-gray-200">variable assets and fixed liabilities</strong> makes working capital management harder for freelancers than almost any other type of business. Without a buffer, the feast months subsidise the famine months in an unplanned, stressful way.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-lime-500/10 flex items-center justify-center">
                    <span className="text-lime-400 font-bold text-sm">3</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Tax Timing (BAS, PAYG, and Annual Returns)</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Tax obligations create significant spikes in current liabilities. Quarterly BAS payments (GST), PAYG instalments, and the annual tax return can all come due simultaneously. If you have not been setting aside money throughout the year, a single ATO bill can destroy your working capital position overnight. The problem is compounded for freelancers registered for GST who report on an accruals basis &mdash; they owe GST the moment they invoice, not when they actually receive payment.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-lime-500/10 flex items-center justify-center">
                    <span className="text-lime-400 font-bold text-sm">4</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">No Credit Facilities</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  When working capital dips, larger businesses draw on overdraft facilities, business credit cards, or lines of credit to bridge the gap. As a sole trader or freelancer without a salary history or company balance sheet, <strong className="text-gray-200">accessing business credit is significantly harder</strong>. This makes a cash reserve non-negotiable &mdash; because when things go wrong, there is often no credit safety net to fall back on.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-lime-500/10 flex items-center justify-center">
                    <span className="text-lime-400 font-bold text-sm">5</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Seasonal Fluctuations</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Many Australian freelancers experience predictable dead zones: <strong className="text-gray-200">December to mid-January</strong> (clients on holiday, budgets unallocated) and <strong className="text-gray-200">early July</strong> (post-EOFY budget resets). These 4-6 week gaps with minimal incoming revenue create natural working capital squeezes. Planning for them in advance &mdash; by building reserves during busy months &mdash; is essential to avoiding cash stress during these predictable lulls.
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-lime-500/5 border border-lime-500/20 p-5 mt-4">
              <p className="text-lime-400 font-medium mb-2">The Compounding Effect</p>
              <p className="text-gray-400 text-sm">
                These challenges rarely appear in isolation. A freelancer facing a January dry spell, with two overdue invoices and a BAS due on 28 February is experiencing all five at once. This is precisely why proactive working capital management is not optional &mdash; it is survival planning.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Improving Working Capital */}
        <section id="improving-working-capital">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-lime-500 to-green-500 flex items-center justify-center text-white text-sm font-bold">4</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Improving Working Capital</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Improving working capital comes down to two levers: <strong className="text-white">increasing current assets</strong> (particularly actual cash) or <strong className="text-white">reducing current liabilities</strong>. Here are eight strategies that work specifically for freelancers:
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-lime-500/20 p-5">
                <h4 className="text-lime-400 font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  1. Shorten Payment Terms
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Switch from Net 30 to <strong className="text-gray-200">Net 14</strong> as your standard payment terms. You will be surprised how often clients simply pay within whatever timeframe is on the invoice. Reducing payment terms by 16 days on a $10,000 invoice means money in your account two weeks earlier &mdash; a direct improvement to working capital. For new clients, Net 7 is increasingly common in Australia.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-lime-500/20 p-5">
                <h4 className="text-lime-400 font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18v-.008zm-12 0h.008v.008H6v-.008z" />
                  </svg>
                  2. Request Deposits (30&ndash;50%)
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  For any project over $500, request a <strong className="text-gray-200">deposit of 30-50% before commencing work</strong>. Deposits convert future receivables into immediate cash assets, improving your working capital position before you have even started the project. Frame it as professional practice: &ldquo;I require a 50% deposit to book your project into my schedule.&rdquo; Most clients expect it.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-lime-500/20 p-5">
                <h4 className="text-lime-400 font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                  3. Invoice Immediately
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  The payment clock does not start until the invoice is sent. <strong className="text-gray-200">Invoice the same day work is completed</strong> &mdash; not at the end of the week, not &ldquo;when you get around to it.&rdquo; Every day of delay is a day added to your payment timeline and a day your working capital sits lower than it needs to be. Use invoicing software to make this frictionless.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-lime-500/20 p-5">
                <h4 className="text-lime-400 font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                  </svg>
                  4. Follow Up on Overdue Invoices Promptly
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  An overdue invoice is working capital that has been unlawfully borrowed by your client. Follow up <strong className="text-gray-200">the day after the due date</strong> with a polite reminder. Then again at 7 days, 14 days, and 30 days. Automated reminders (via invoicing software) remove the awkwardness and ensure nothing slips through the cracks. See:{' '}
                  <Link href="/glossary/overdue-invoice" className="text-lime-400 hover:text-lime-300 underline underline-offset-2">overdue invoice management</Link>.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-lime-500/20 p-5">
                <h4 className="text-lime-400 font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                  </svg>
                  5. Build a Cash Reserve (3&ndash;6 Months)
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Your cash reserve is the foundation of healthy working capital. Calculate your total monthly obligations (rent, software, insurance, personal draw, tax set-aside) and <strong className="text-gray-200">save 3-6 months&rsquo; worth in a dedicated business savings account</strong>. Start with one month if that is all you can manage. Even $5,000 provides significant working capital resilience during a lean period.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-lime-500/20 p-5">
                <h4 className="text-lime-400 font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H18v-.008zm0 2.25h.008v.008H18v-.008zM9 20.25h9A2.25 2.25 0 0020.25 18V6.75A2.25 2.25 0 0018 4.5H6A2.25 2.25 0 003.75 6.75V18A2.25 2.25 0 006 20.25h3z" />
                  </svg>
                  6. Reduce Unnecessary Expenses
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Reducing current liabilities is just as effective as increasing assets. Audit your subscriptions, tools, and overhead every quarter. Cancel anything you are not actively using. <strong className="text-gray-200">Every dollar of reduced monthly liability</strong> directly improves your working capital position without requiring a single extra invoice to be paid.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-lime-500/20 p-5">
                <h4 className="text-lime-400 font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18v-.008zm-12 0h.008v.008H6v-.008z" />
                  </svg>
                  7. Automate Tax Savings (30% Rule)
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Every time a client payment lands, <strong className="text-gray-200">immediately transfer 30% to a dedicated tax savings account</strong>. Do this automatically via a bank rule or manually within 24 hours. This ensures your tax obligations (income tax, GST, super) never catch you by surprise, and it prevents your apparent working capital from masking a hidden liability to the ATO.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-lime-500/20 p-5">
                <h4 className="text-lime-400 font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                  </svg>
                  8. Consider Invoice Factoring (Last Resort)
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  <Link href="/glossary/invoice-factoring" className="text-lime-400 hover:text-lime-300 underline underline-offset-2">Invoice factoring</Link>{' '}
                  involves selling your outstanding invoices to a third party at a discount (typically 70-90% of face value) in exchange for immediate cash. It is expensive &mdash; fees can be 2-5% of invoice value &mdash; but it converts receivables into immediate working capital. Use it as a <strong className="text-gray-200">last resort when a large invoice is overdue and you need cash urgently</strong>, not as a routine strategy.
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-lime-500/5 border border-lime-500/20 p-5 mt-4">
              <p className="text-lime-400 font-medium mb-2">The Highest-Impact Action: Speed Up Collections</p>
              <p className="text-gray-400 text-sm">
                Of all eight strategies, the one with the most immediate impact for most freelancers is <strong className="text-gray-200">getting paid faster</strong>. Shorter payment terms, deposits, and instant invoicing all accelerate the conversion of your work into real cash &mdash; which is the core of working capital management. Everything else builds the buffer to weather the inevitable delays.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Working Capital vs Cash Flow */}
        <section id="working-capital-vs-cash-flow">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-lime-500 to-green-500 flex items-center justify-center text-white text-sm font-bold">5</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Working Capital vs Cash Flow</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Working capital and <Link href="/glossary/cash-flow" className="text-lime-400 hover:text-lime-300 underline underline-offset-2">cash flow</Link> are related but distinct concepts. Many freelancers use them interchangeably &mdash; but they measure different things and tell you different stories about your financial health. You need both.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-lime-500/20 p-5">
                <h4 className="text-lime-400 font-semibold mb-3">Working Capital</h4>
                <ul className="space-y-2">
                  {[
                    'A snapshot — measured at a point in time',
                    'Balance sheet metric (assets vs liabilities)',
                    'Shows your financial buffer right now',
                    'Tells you if you can cover short-term debts',
                    'Calculated: Current Assets − Current Liabilities',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                      <svg className="w-4 h-4 text-lime-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-green-500/20 p-5">
                <h4 className="text-green-400 font-semibold mb-3">Cash Flow</h4>
                <ul className="space-y-2">
                  {[
                    'A movie — measured over a period of time',
                    'Income statement metric (inflows vs outflows)',
                    'Shows the movement of money in your business',
                    'Tells you if money is arriving fast enough',
                    'Calculated: Cash In − Cash Out over a period',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                      <svg className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Comparison Table */}
            <h3 className="text-xl font-bold text-white mt-8 mb-4">Key Differences at a Glance</h3>
            <div className="rounded-2xl border border-gray-700/50 overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-800/80">
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Aspect</th>
                    <th className="text-left text-sm font-medium text-lime-400 px-6 py-4">Working Capital</th>
                    <th className="text-left text-sm font-medium text-green-400 px-6 py-4">Cash Flow</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700/50">
                  {[
                    {
                      aspect: 'Time Dimension',
                      wc: 'Point in time (snapshot)',
                      cf: 'Over a period (ongoing)',
                    },
                    {
                      aspect: 'Source Document',
                      wc: 'Balance sheet',
                      cf: 'Cash flow statement',
                    },
                    {
                      aspect: 'What It Measures',
                      wc: 'Assets vs liabilities buffer',
                      cf: 'Money coming in and going out',
                    },
                    {
                      aspect: 'Includes Unpaid Invoices?',
                      wc: 'Yes — as current assets',
                      cf: 'No — only actual cash received',
                    },
                    {
                      aspect: 'Can Be Positive When the Other Is Negative?',
                      wc: 'Yes — if invoices tie up assets',
                      cf: 'Yes — if assets are liquid but spending spikes',
                    },
                    {
                      aspect: 'Key Analogy',
                      wc: 'Your financial cushion',
                      cf: 'Your financial heartbeat',
                    },
                  ].map((row, i) => (
                    <tr key={i} className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-gray-300 text-sm font-medium">{row.aspect}</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">{row.wc}</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">{row.cf}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="rounded-xl bg-lime-500/5 border border-lime-500/20 p-5 mt-6">
              <p className="text-lime-400 font-medium mb-2">The Critical Distinction: You Can Have Both Problems at Once</p>
              <p className="text-gray-400 text-sm">
                Here is the counterintuitive truth: <strong className="text-gray-200">you can have positive working capital but negative cash flow</strong>. If you have $25,000 in current assets but $20,000 of that is in unpaid invoices that are 60+ days overdue, your working capital looks healthy &mdash; but you have almost no actual cash to pay this month&rsquo;s bills. The reverse is also possible: a freelancer who just received three large payments in a row might have excellent cash flow but low working capital if they have upcoming tax bills and liabilities that exceed their assets. <strong className="text-gray-200">Working capital is your buffer. Cash flow is your engine. Both must be healthy.</strong>
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: How InvoiceFlow Helps */}
        <section id="invoiceflow-working-capital">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-lime-500 to-green-500 flex items-center justify-center text-white text-sm font-bold">6</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">How InvoiceFlow Helps</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Working capital for freelancers is fundamentally an <strong className="text-white">accounts receivable problem</strong> &mdash; money is earned but not yet collected. InvoiceFlow is built to attack this problem directly, speeding up the conversion of outstanding invoices into real cash and giving you visibility over your entire financial position.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-lime-500/20 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-lime-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h4 className="text-white font-semibold">Track Outstanding Invoices</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  See your total outstanding receivables at a glance &mdash; your single biggest current asset. Know exactly how much is owed, by whom, and how long it has been outstanding. This gives you a real-time view of your working capital position, not just your bank balance.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-lime-500/20 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-lime-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                    </svg>
                  </div>
                  <h4 className="text-white font-semibold">Automatic Payment Reminders</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Automated reminders chase overdue invoices without awkward manual follow-ups. The faster clients pay, the faster your receivables convert to cash &mdash; directly improving the quality of your working capital, not just the quantity.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-lime-500/20 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-lime-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                    </svg>
                  </div>
                  <h4 className="text-white font-semibold">Invoice Aging Reports</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  See which invoices are current, 30 days overdue, 60 days overdue, and 90+ days overdue at a glance. Invoice aging reports help you prioritise collection efforts and assess the true quality &mdash; not just quantity &mdash; of your receivables.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-lime-500/20 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-lime-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185z" />
                    </svg>
                  </div>
                  <h4 className="text-white font-semibold">Expense Tracking</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Track your business expenses to understand your current liabilities in real time. Knowing what is going out &mdash; and when &mdash; is just as important as knowing what is coming in when managing working capital.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-lime-500/20 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-lime-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="text-white font-semibold">GST &amp; Tax Reserve Visibility</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Understand exactly how much of your working capital is actually a liability to the ATO. InvoiceFlow helps you track GST collected and income earned so your tax reserve obligations never sneak up on you as a surprise current liability.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-lime-500/20 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-lime-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
                    </svg>
                  </div>
                  <h4 className="text-white font-semibold">Working Capital Dashboard</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Your InvoiceFlow dashboard gives you a single-screen view of your financial health &mdash; outstanding invoices, recent payments, overdue amounts, and upcoming obligations. Everything you need to assess your working capital position at a glance, without a spreadsheet or accountant.
                </p>
              </div>
            </div>

            {/* Related glossary terms */}
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 mt-6">
              <h4 className="text-white font-semibold mb-4">Related Glossary Terms</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  { label: 'Cash Flow', href: '/glossary/cash-flow' },
                  { label: 'Accounts Receivable', href: '/glossary/accounts-receivable' },
                  { label: 'Accounts Payable', href: '/glossary/accounts-payable' },
                  { label: 'Profit & Loss', href: '/glossary/profit-and-loss' },
                  { label: 'Invoice Factoring', href: '/glossary/invoice-factoring' },
                  { label: 'Overdue Invoice', href: '/glossary/overdue-invoice' },
                  { label: 'Payment Terms', href: '/glossary/payment-terms' },
                ].map((term) => (
                  <Link
                    key={term.href}
                    href={term.href}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-lime-500/10 border border-lime-500/20 text-lime-400 text-sm font-medium hover:bg-lime-500/20 transition-colors"
                  >
                    {term.label}
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-xl bg-lime-500/5 border border-lime-500/20 p-5 mt-4">
              <p className="text-lime-400 font-medium mb-2">The Bottom Line</p>
              <p className="text-gray-400 text-sm">
                Working capital is not a concept reserved for CFOs and finance teams. For freelancers, it is the difference between a thriving business and a stressful scramble. By understanding your position, acting to speed up collections, and building a reserve, you can maintain healthy working capital even through irregular income, late-paying clients, and seasonal dips. InvoiceFlow gives you the tools to make that possible.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Related Tools */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-white mb-2 text-center">Related Tools</h2>
        <p className="text-gray-400 text-center mb-8">Free tools to help you manage working capital and plan your freelance finances.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {relatedTools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:border-lime-500/50 hover:bg-gray-800/80 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-lime-500/10 border border-lime-500/20 flex items-center justify-center mb-4">
                {tool.icon}
              </div>
              <h3 className="text-white font-medium mb-2 group-hover:text-lime-400 transition-colors">{tool.name}</h3>
              <p className="text-sm text-gray-400">{tool.description}</p>
              <div className="mt-4 text-lime-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
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
        <p className="text-gray-400 text-center mb-8">In-depth guides on getting paid, pricing, and managing money as an Australian freelancer.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {relatedGuides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group p-6 rounded-2xl bg-gray-800/40 border border-gray-700/40 hover:border-lime-500/40 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-lime-500/10 border border-lime-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h3 className="text-white font-medium mb-2 group-hover:text-lime-400 transition-colors">{guide.name}</h3>
              <p className="text-sm text-gray-400">{guide.description}</p>
              <div className="mt-4 text-lime-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
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
              <summary className="flex items-center justify-between cursor-pointer px-6 py-4 text-white font-medium hover:text-lime-400 transition-colors">
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
        <div className="rounded-2xl bg-gradient-to-br from-lime-500/10 to-green-500/10 border border-lime-500/20 p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Take Control of Your Working Capital
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            InvoiceFlow helps Australian freelancers track outstanding invoices, chase overdue payments automatically, and get a clear picture of their financial health &mdash; all in one place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button>Start Free &mdash; No Card Required</Button>
            </Link>
            <Link href="/tools/invoice-generator">
              <Button variant="secondary">Try the Invoice Generator</Button>
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
