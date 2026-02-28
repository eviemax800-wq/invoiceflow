import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Cash Flow: Complete Guide for Freelancers & Small Business Australia — InvoiceFlow',
  description:
    'What is cash flow? Learn the difference between cash flow and profit, how to manage irregular freelance income, build a 13-week cash flow forecast, and fix late payment problems. Includes tips for Australian freelancers and small businesses.',
  keywords: [
    'what is cash flow',
    'cash flow management freelancer',
    'cash flow for small business australia',
    'positive cash flow vs negative cash flow',
    'cash flow forecast template',
    'cash flow vs profit',
    'freelancer cash flow tips',
    'cash flow problems small business',
    'cash flow statement australia',
    'irregular income management',
    'late payments freelancer australia',
    'cash flow forecast 13 week',
  ],
  alternates: { canonical: '/glossary/cash-flow' },
  openGraph: {
    title: 'Cash Flow: Complete Guide for Freelancers & Small Business Australia — InvoiceFlow',
    description:
      'Everything you need to know about cash flow: definition, cash flow vs profit, positive vs negative cash flow, freelancer challenges, management strategies, and forecasting methods.',
    url: 'https://invoiceflow-teal.vercel.app/glossary/cash-flow',
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
    { '@type': 'ListItem', position: 3, name: 'Cash Flow', item: `${BASE_URL}/glossary/cash-flow` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is cash flow in simple terms?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cash flow is the movement of money into and out of your business over a specific period. Money coming in (from client payments, sales, or other income) is called a cash inflow. Money going out (for rent, software, supplies, tax, or other expenses) is called a cash outflow. If more money comes in than goes out, you have positive cash flow. If more goes out than comes in, you have negative cash flow. Unlike profit, which is an accounting concept, cash flow tracks the actual money available in your bank account at any given time.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why can a profitable business have cash flow problems?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A business can be profitable on paper yet still run out of cash because profit and cash flow are measured differently. Profit is recorded when revenue is earned (when you send the invoice), but cash flow only counts when money actually hits your bank account. If you invoice $20,000 in a month but clients take 60 days to pay, your books show a profit while your bank account is empty. This is the number one reason profitable small businesses fail — they run out of cash before their invoices get paid. Other factors include seasonal revenue dips, large upfront costs, tax payments timing, and rapid growth requiring investment before revenue catches up.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do freelancers manage irregular cash flow?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Freelancers can manage irregular cash flow through several strategies: (1) Build a 3-6 month emergency fund to cover lean periods, (2) Invoice immediately upon completing work rather than waiting, (3) Request deposits of 30-50% before starting projects, (4) Diversify income streams across multiple clients and revenue types, (5) Track cash flow weekly rather than monthly to catch problems early, (6) Separate business and personal bank accounts to see true business cash position, (7) Set up payment terms of 14 days rather than 30, and (8) Use invoicing software with automatic payment reminders to reduce late payments.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a cash flow forecast and do I need one?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A cash flow forecast is a projection of how much money you expect to receive and spend over a future period, usually 13 weeks (one quarter). It helps you predict when you might run short on cash so you can take action before it happens. As a freelancer, you absolutely need one — even a simple spreadsheet works. List your expected income week by week (confirmed projects, recurring clients, expected payments), subtract your expected expenses (rent, software, insurance, tax set-asides, super contributions), and calculate the running balance. If the balance dips below your comfort threshold at any point, you know to line up more work or cut expenses before the crunch hits.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does InvoiceFlow help with cash flow management?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'InvoiceFlow helps improve cash flow in several ways: (1) Fast invoice creation means you send invoices the same day you finish work, not days or weeks later, (2) Automatic payment reminders nudge late-paying clients without awkward manual follow-ups, (3) Payment tracking shows you exactly which invoices are outstanding and how much is owed, (4) Deposit invoicing lets you request upfront deposits before starting work, (5) Overdue management highlights problem invoices so you can take action quickly, and (6) Payment analytics help you identify which clients consistently pay late so you can adjust your terms. Faster invoicing plus automated follow-ups means money hits your account sooner.',
      },
    },
  ],
};

const tocItems = [
  { id: 'what-is-cash-flow', label: '1. What Is Cash Flow?' },
  { id: 'positive-vs-negative', label: '2. Positive vs Negative Cash Flow' },
  { id: 'freelancer-challenges', label: '3. Cash Flow Challenges for Freelancers' },
  { id: 'how-to-manage', label: '4. How to Manage Cash Flow as a Freelancer' },
  { id: 'cash-flow-forecasting', label: '5. Cash Flow Forecasting' },
  { id: 'invoiceflow-cash-flow', label: '6. How InvoiceFlow Improves Cash Flow' },
];

const relatedTools = [
  {
    href: '/tools/rate-calculator',
    name: 'Rate Calculator',
    description: 'Calculate your ideal hourly or daily rate to ensure your pricing covers all costs and supports healthy cash flow.',
    icon: (
      <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    href: '/tools/emergency-fund-calculator',
    name: 'Emergency Fund Calculator',
    description: 'Work out exactly how much you need saved to weather cash flow dry spells without stress.',
    icon: (
      <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
      </svg>
    ),
  },
  {
    href: '/tools/profit-margin-calculator',
    name: 'Profit Margin Calculator',
    description: 'Understand the difference between your profit margin and your actual cash position.',
    icon: (
      <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    href: '/tools/pay-yourself-calculator',
    name: 'Pay Yourself Calculator',
    description: 'Figure out how much to pay yourself while keeping enough cash in the business to stay healthy.',
    icon: (
      <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18v-.008zm-12 0h.008v.008H6v-.008z" />
      </svg>
    ),
  },
];

const relatedGuides = [
  {
    href: '/guides/getting-paid-faster',
    name: 'Getting Paid Faster',
    description: 'Proven strategies to reduce payment delays, chase overdue invoices, and keep cash flowing into your business.',
  },
  {
    href: '/guides/setting-freelance-rates',
    name: 'Setting Your Freelance Rates',
    description: 'How to calculate profitable rates that cover tax, super, business costs, and still leave healthy cash flow.',
  },
  {
    href: '/guides/invoicing-101',
    name: 'Invoicing 101',
    description: 'Everything you need to know about creating compliant invoices that get paid on time in Australia.',
  },
];

export default function CashFlowGlossaryPage() {
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
            <span className="text-white">Cash Flow</span>
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
            Cash Flow{' '}
            <span className="bg-gradient-to-r from-emerald-500 to-green-500 bg-clip-text text-transparent">
              Explained for Freelancers
            </span>
          </h1>

          {/* Summary */}
          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            Cash flow is the lifeblood of every freelance business. It&apos;s not about how much you earn &mdash; it&apos;s about when the money actually arrives. This guide covers everything: what cash flow really means, why profitable businesses still fail, and exactly how to manage it as a freelancer in Australia.
          </p>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>12 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Australia-Focused 2025-26</span>
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
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs font-bold">$26B</span>
              <div>
                <p className="text-white font-medium text-sm">Late Payments to AU SMEs</p>
                <p className="text-gray-400 text-sm">Total owed in overdue invoices to Australian small businesses at any given time</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs font-bold">60%</span>
              <div>
                <p className="text-white font-medium text-sm">Freelancers Hit by Cash Flow Issues</p>
                <p className="text-gray-400 text-sm">Percentage of freelancers who experience cash flow problems each year</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs font-bold">3-6mo</span>
              <div>
                <p className="text-white font-medium text-sm">Recommended Emergency Fund</p>
                <p className="text-gray-400 text-sm">Months of expenses every freelancer should have saved for cash flow gaps</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs font-bold">33d</span>
              <div>
                <p className="text-white font-medium text-sm">Average AU Invoice Payment Time</p>
                <p className="text-gray-400 text-sm">Average number of days Australian businesses take to pay an invoice</p>
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

        {/* Section 1: What Is Cash Flow? */}
        <section id="what-is-cash-flow">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center text-white text-sm font-bold">1</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">What Is Cash Flow?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Cash flow is the <strong className="text-white">movement of money into and out of your business</strong> over a specific period. It tracks the actual cash arriving in your bank account (inflows) and the actual cash leaving it (outflows). If more comes in than goes out, you have positive cash flow. If more goes out than comes in, you have negative cash flow.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Here&apos;s the critical distinction that trips up most freelancers: <strong className="text-white">cash flow is not the same as profit</strong>. Profit is an accounting concept &mdash; it&apos;s revenue minus expenses on paper. Cash flow is what&apos;s actually in your bank account right now. You can be &quot;profitable&quot; on your books while having zero dollars available to pay your rent, because your clients haven&apos;t actually paid their invoices yet.
            </p>
            <p className="text-gray-300 leading-relaxed">
              There are <strong className="text-white">three types of cash flow</strong> in accounting, though as a freelancer you&apos;ll primarily deal with the first:
            </p>

            <div className="grid sm:grid-cols-3 gap-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-emerald-500/20 p-5">
                <h4 className="text-emerald-400 font-semibold mb-2">Operating Cash Flow</h4>
                <p className="text-gray-400 text-sm">Money generated from your core business activities &mdash; client payments coming in, business expenses going out. This is the one that matters most for freelancers.</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-gray-300 font-semibold mb-2">Investing Cash Flow</h4>
                <p className="text-gray-400 text-sm">Money spent on or received from long-term assets &mdash; buying equipment, selling a vehicle, investing in another business. Less common for freelancers.</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-gray-300 font-semibold mb-2">Financing Cash Flow</h4>
                <p className="text-gray-400 text-sm">Money from loans, credit lines, or investor funding coming in, and loan repayments or dividend payments going out. Relevant if you borrow to fund your business.</p>
              </div>
            </div>

            <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-5 mt-6">
              <p className="text-emerald-400 font-medium mb-2">Why Freelancers Must Understand Cash Flow</p>
              <p className="text-gray-400 text-sm">
                As a freelancer, <strong className="text-gray-200">you are your own finance department</strong>. There is no payroll team ensuring money lands in your account on the 15th and 30th. Your income is irregular, your expenses are ongoing, and the gap between doing work and getting paid can be weeks or months. Understanding cash flow is not optional &mdash; it is the single most important financial skill for staying solvent as a freelancer.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Positive vs Negative Cash Flow */}
        <section id="positive-vs-negative">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center text-white text-sm font-bold">2</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Positive vs Negative Cash Flow</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              The difference between positive and negative cash flow is simple in theory but devastating in practice. One keeps your business alive; the other kills it &mdash; regardless of what your profit and loss statement says.
            </p>

            {/* Comparison Table */}
            <div className="rounded-2xl border border-gray-700/50 overflow-hidden mt-6">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-800/80">
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Aspect</th>
                    <th className="text-left text-sm font-medium text-emerald-400 px-6 py-4">Positive Cash Flow</th>
                    <th className="text-left text-sm font-medium text-red-400 px-6 py-4">Negative Cash Flow</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700/50">
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm font-medium">Definition</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">More money coming in than going out</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">More money going out than coming in</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm font-medium">Bank Account</td>
                    <td className="px-6 py-3 text-emerald-400 text-sm font-medium">Balance growing</td>
                    <td className="px-6 py-3 text-red-400 text-sm font-medium">Balance shrinking</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm font-medium">Can Pay Bills?</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">Yes &mdash; obligations met on time</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">Struggling &mdash; may need to delay or borrow</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm font-medium">Stress Level</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">Manageable &mdash; buffer exists</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">High &mdash; constant scramble for cash</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm font-medium">Growth Potential</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">Can invest in tools, marketing, upskilling</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">Stuck in survival mode</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm font-medium">Tax &amp; Super</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">Set aside regularly &mdash; no surprises</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">Often raids tax savings to cover shortfalls</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-5 mt-6">
              <p className="text-emerald-400 font-medium mb-2">Profit Doesn&apos;t Pay the Bills &mdash; Cash Does</p>
              <p className="text-gray-400 text-sm">
                This is the most important insight in business finance: <strong className="text-gray-200">profitable businesses fail every day because they run out of cash</strong>. Imagine you complete $30,000 of work in January. Your books show $30,000 revenue, $10,000 expenses, and a healthy $20,000 profit. But your clients are on 60-day payment terms. It is now February, rent is due, your software subscriptions are charging, you owe GST from last quarter &mdash; and you have $0 in the bank. You are profitable and broke at the same time. This is negative cash flow, and it is the number one killer of small businesses in Australia.
              </p>
            </div>

            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 mt-6">
              <h4 className="text-white font-semibold mb-3">When Negative Cash Flow Is Normal</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Not all negative cash flow is bad. It is normal and expected in certain situations: when you are <strong className="text-gray-200">starting a business</strong> (investing before revenue arrives), during <strong className="text-gray-200">seasonal dips</strong> (December-January for many Australian freelancers), or when you make a <strong className="text-gray-200">strategic investment</strong> (buying equipment, enrolling in a course). The problem is when negative cash flow is <strong className="text-gray-200">chronic and unplanned</strong> &mdash; when you are consistently spending more than you receive with no plan to reverse it.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Cash Flow Challenges for Freelancers */}
        <section id="freelancer-challenges">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center text-white text-sm font-bold">3</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Cash Flow Challenges for Freelancers</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Freelancers face a unique set of cash flow challenges that salaried employees never have to think about. Unlike a regular paycheck that arrives like clockwork, freelance income is <strong className="text-white">irregular, unpredictable, and often delayed</strong>. Here are the biggest cash flow killers:
            </p>

            <div className="space-y-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <span className="text-emerald-400 font-bold text-sm">1</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Irregular Income</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  One month you earn $12,000. The next, $3,000. The month after, $8,000. Freelance income is inherently lumpy &mdash; projects start and end at different times, some months are packed while others are quiet. Your expenses, however, stay consistent: rent, internet, insurance, software, food. This mismatch between <strong className="text-gray-200">variable income and fixed expenses</strong> is the core cash flow challenge for every freelancer.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <span className="text-emerald-400 font-bold text-sm">2</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Late-Paying Clients</h3>
                  <span className="text-xs text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">$26B problem</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Australian small businesses are owed an estimated <strong className="text-gray-200">$26 billion in late payments</strong> at any given time. The average invoice takes 33 days to get paid &mdash; and many take far longer. As a freelancer, every day a client delays payment is a day you are essentially providing an interest-free loan. Late payments are the single biggest external cause of cash flow problems for Australian freelancers.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <span className="text-emerald-400 font-bold text-sm">3</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Seasonal Work Patterns</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Many industries have seasonal patterns that create predictable cash flow valleys. December and January are notoriously quiet in Australia &mdash; clients go on holiday, budgets freeze, and new projects stall until February. If you are a web designer, accountants dry up after October tax season. If you serve the education sector, summer break means no work. These <strong className="text-gray-200">seasonal dips can last 6-8 weeks</strong> while your expenses continue uninterrupted.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <span className="text-emerald-400 font-bold text-sm">4</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">GST &amp; BAS Timing Mismatch</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  If you are registered for GST, you collect 10% GST on your invoices and remit it to the ATO quarterly via your BAS. The problem: <strong className="text-gray-200">you owe the GST when you invoice, not when you get paid</strong> (if you report on an accruals basis). So you might owe $3,000 in GST for the quarter, but $10,000 of your invoices are still unpaid. You are paying GST on money you have not received yet. This is a cash flow trap that catches many freelancers off guard, especially in their first year.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <span className="text-emerald-400 font-bold text-sm">5</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">The Work-to-Payment Gap</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  There is a significant delay between <strong className="text-gray-200">doing the work and getting paid for it</strong>. Consider the timeline: you spend two weeks on a project, then a few days preparing the invoice, the client has 30-day payment terms, and they pay on day 28. That is nearly <strong className="text-gray-200">7 weeks between starting the work and seeing the money</strong>. During all of that time, you are covering your own costs out of pocket. Multiply this across several projects at different stages and you can see how even a busy freelancer can have cash flow problems.
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-5 mt-6">
              <p className="text-emerald-400 font-medium mb-2">The Compounding Effect</p>
              <p className="text-gray-400 text-sm">
                These challenges do not exist in isolation &mdash; they compound. A freelancer dealing with irregular income AND late-paying clients AND a seasonal dip AND a BAS payment due is facing a <strong className="text-gray-200">perfect storm of cash flow pressure</strong>. This is why proactive cash flow management is not a nice-to-have. It is survival.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: How to Manage Cash Flow as a Freelancer */}
        <section id="how-to-manage">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center text-white text-sm font-bold">4</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">How to Manage Cash Flow as a Freelancer</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Good cash flow management is not about earning more &mdash; it&apos;s about <strong className="text-white">controlling the timing of money in and money out</strong>. Here are six proven strategies that every Australian freelancer should implement:
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-emerald-500/20 p-5">
                <h4 className="text-emerald-400 font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                  </svg>
                  Build a 3-6 Month Emergency Fund
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  This is the single most important thing you can do. Calculate your monthly business and personal expenses, then save 3-6 months&apos; worth in a separate high-interest savings account. This buffer absorbs the shocks of irregular income, seasonal dips, and late payments. Start with one month and build from there &mdash; even $5,000 provides meaningful breathing room.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-emerald-500/20 p-5">
                <h4 className="text-emerald-400 font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                  Invoice Immediately &mdash; Do Not Wait
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Every day you delay sending an invoice is a day added to your payment timeline. Finish the work on Friday? Send the invoice on Friday, not the following Monday. Completed a milestone? Invoice that day. The fastest way to improve cash flow is to <strong className="text-gray-200">shrink the gap between work done and invoice sent to zero</strong>. Use invoicing software to make this instant.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-emerald-500/20 p-5">
                <h4 className="text-emerald-400 font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18v-.008zm-12 0h.008v.008H6v-.008z" />
                  </svg>
                  Request Deposits (30-50%)
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  For any project over $1,000, request a deposit of 30-50% before starting work. This is standard practice and most clients expect it. Deposits serve two purposes: they give you cash upfront to cover costs during the project, and they confirm the client is serious and financially committed. Frame it as <strong className="text-gray-200">&quot;50% to commence, 50% on delivery&quot;</strong> &mdash; simple, professional, non-negotiable.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-emerald-500/20 p-5">
                <h4 className="text-emerald-400 font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
                  </svg>
                  Diversify Income Streams
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Relying on one or two clients is a cash flow disaster waiting to happen. If your biggest client pauses work or switches providers, your income drops 40-60% overnight. Aim for <strong className="text-gray-200">no single client representing more than 30% of your revenue</strong>. Also consider adding recurring revenue streams: retainers, maintenance agreements, productised services, or digital products that provide baseline income.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-emerald-500/20 p-5">
                <h4 className="text-emerald-400 font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
                  </svg>
                  Track Cash Flow Weekly
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Do not wait until the end of the month to check your finances. Set a weekly 15-minute &quot;cash flow check-in&quot; &mdash; every Monday morning, review: what came in last week, what is going out this week, what invoices are outstanding, and what your balance will look like in 2-4 weeks. <strong className="text-gray-200">Weekly tracking catches problems before they become emergencies.</strong> Monthly tracking often catches them too late.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-emerald-500/20 p-5">
                <h4 className="text-emerald-400 font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                  </svg>
                  Separate Business &amp; Personal Accounts
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  If your business income and personal spending are in the same account, you have no visibility into your true business cash position. Open a <strong className="text-gray-200">dedicated business bank account</strong> and route all client payments into it. Pay yourself a regular &quot;salary&quot; transfer to your personal account. This one change gives you instant clarity on whether your business has positive or negative cash flow &mdash; and makes BAS time significantly less painful.
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-5 mt-6">
              <p className="text-emerald-400 font-medium mb-2">Pro Tip: The 50/30/20 Freelancer Split</p>
              <p className="text-gray-400 text-sm">
                When money comes in, immediately split it: <strong className="text-gray-200">50% for operating expenses and your pay</strong>, <strong className="text-gray-200">30% for tax and super</strong> (set aside in a separate savings account &mdash; do not touch it), and <strong className="text-gray-200">20% for your emergency fund and business savings</strong>. Once your emergency fund is fully stocked, redirect that 20% to growth investments or additional super contributions. This system prevents the feast-or-famine cycle that traps most freelancers.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Cash Flow Forecasting */}
        <section id="cash-flow-forecasting">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center text-white text-sm font-bold">5</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Cash Flow Forecasting</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              A cash flow forecast is your <strong className="text-white">financial crystal ball</strong>. It projects how much cash you expect to receive and spend over the coming weeks or months, so you can spot problems before they arrive and take action while you still have time.
            </p>

            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 mt-6">
              <h4 className="text-white font-semibold mb-4">The 13-Week Cash Flow Forecast</h4>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                The 13-week forecast (one quarter) is the gold standard for freelancers. It is long enough to see trends but short enough to be reasonably accurate. Here is how to build one:
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-2 text-sm text-gray-400">
                  <svg className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                  <span><strong className="text-gray-200">Row 1 &mdash; Opening balance:</strong> How much cash you have right now in your business account.</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-gray-400">
                  <svg className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                  <span><strong className="text-gray-200">Row 2 &mdash; Expected inflows:</strong> Confirmed project payments, retainer fees, recurring revenue, any other money expected. Be conservative &mdash; only include confirmed work.</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-gray-400">
                  <svg className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                  <span><strong className="text-gray-200">Row 3 &mdash; Expected outflows:</strong> Rent, software subscriptions, insurance, phone, internet, professional development, marketing spend, and other regular costs.</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-gray-400">
                  <svg className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                  <span><strong className="text-gray-200">Row 4 &mdash; Tax &amp; super set-asides:</strong> Estimated income tax (use your marginal rate), GST collected, superannuation contributions (11.5% of your pay in 2025-26).</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-gray-400">
                  <svg className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                  <span><strong className="text-gray-200">Row 5 &mdash; Closing balance:</strong> Opening balance + inflows - outflows - tax/super = your projected cash position at the end of each week.</span>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 mt-6">
              <h4 className="text-white font-semibold mb-4">Cash Flow Statement Basics</h4>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                While a forecast looks forward, a <strong className="text-gray-200">cash flow statement</strong> looks backward. It summarises the actual cash movements over a past period (usually monthly or quarterly). The structure mirrors the three types of cash flow:
              </p>
              <div className="grid sm:grid-cols-3 gap-3">
                <div className="rounded-lg bg-gray-900/50 p-4">
                  <p className="text-emerald-400 text-sm font-medium mb-1">Operating Activities</p>
                  <p className="text-gray-500 text-xs">Client payments received minus business expenses paid</p>
                </div>
                <div className="rounded-lg bg-gray-900/50 p-4">
                  <p className="text-gray-300 text-sm font-medium mb-1">Investing Activities</p>
                  <p className="text-gray-500 text-xs">Equipment purchases, asset sales, long-term investments</p>
                </div>
                <div className="rounded-lg bg-gray-900/50 p-4">
                  <p className="text-gray-300 text-sm font-medium mb-1">Financing Activities</p>
                  <p className="text-gray-500 text-xs">Loans received, loan repayments, owner draws/contributions</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-5 mt-6">
              <p className="text-emerald-400 font-medium mb-2">Tools for Forecasting</p>
              <p className="text-gray-400 text-sm">
                You do not need expensive software to forecast cash flow. A <strong className="text-gray-200">simple Google Sheet or Excel spreadsheet</strong> with 13 columns (one per week) and 5 rows (opening balance, inflows, outflows, tax/super, closing balance) is enough to get started. For more advanced tracking, tools like Xero, MYOB, or QuickBooks offer built-in cash flow forecasting features. The key is not the tool &mdash; it is the <strong className="text-gray-200">habit of updating it weekly</strong> and actually using it to make decisions.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: How InvoiceFlow Improves Cash Flow */}
        <section id="invoiceflow-cash-flow">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center text-white text-sm font-bold">6</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">How InvoiceFlow Improves Cash Flow</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Every cash flow strategy above depends on one thing: <strong className="text-white">getting paid faster</strong>. InvoiceFlow is designed to eliminate the friction between doing work and receiving payment. Here&apos;s how it directly impacts your cash flow:
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-emerald-500/20 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                    </svg>
                  </div>
                  <h4 className="text-white font-semibold">Faster Invoicing</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Create and send professional invoices in under 60 seconds. Pre-filled client details, saved templates, and one-click sending mean you invoice the moment work is complete &mdash; not days later when you &quot;get around to it.&quot; Faster invoicing means faster payment.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-emerald-500/20 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                    </svg>
                  </div>
                  <h4 className="text-white font-semibold">Automatic Reminders</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Stop chasing payments manually. InvoiceFlow sends polite, professional payment reminders automatically when invoices approach or pass their due date. No awkward emails, no forgetting to follow up, no letting invoices slip through the cracks.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-emerald-500/20 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h4 className="text-white font-semibold">Payment Tracking</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  See exactly which invoices are paid, pending, or overdue at a glance. Know your total outstanding receivables and expected payment dates. This visibility is essential for accurate cash flow forecasting and catching overdue invoices early.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-emerald-500/20 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="text-white font-semibold">Deposit Invoicing</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Create deposit invoices for upfront payments with a single click. Request 30%, 50%, or any custom percentage before starting work. Deposit invoicing is one of the most effective ways to improve cash flow, and InvoiceFlow makes it effortless to implement.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-emerald-500/20 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                    </svg>
                  </div>
                  <h4 className="text-white font-semibold">Overdue Management</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Overdue invoices are flagged immediately with clear visual indicators. See how many days past due each invoice is, the total overdue amount, and which clients are repeat offenders. Take action before small delays become serious cash flow problems.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-emerald-500/20 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                    </svg>
                  </div>
                  <h4 className="text-white font-semibold">Payment Analytics</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Understand your payment patterns over time. Which clients pay fastest? Which consistently pay late? What is your average days-to-payment? Use these insights to adjust payment terms, prioritise reliable clients, and build more accurate cash flow forecasts.
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-5 mt-6">
              <p className="text-emerald-400 font-medium mb-2">The Bottom Line</p>
              <p className="text-gray-400 text-sm">
                Faster invoicing + automatic reminders + payment tracking = <strong className="text-gray-200">money in your account sooner</strong>. Even reducing your average payment time by 5 days can have a dramatic impact on cash flow. If you invoice $10,000/month and get paid 5 days faster, that is $10,000 of improved cash positioning across your year &mdash; cash you can use to cover expenses, invest in growth, or simply sleep better at night.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Related Tools */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-white mb-2 text-center">Related Tools</h2>
        <p className="text-gray-400 text-center mb-8">Free tools to help you manage cash flow and plan your freelance finances.</p>
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
        <p className="text-gray-400 text-center mb-8">In-depth guides on getting paid, pricing, and invoicing for Australian freelancers.</p>
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
            Stop Chasing Payments &mdash; Start Managing Cash Flow
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            InvoiceFlow helps Australian freelancers invoice faster, get paid sooner, and keep cash flowing. Automatic reminders, payment tracking, and deposit invoicing &mdash; all in one place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button>Start Free &mdash; No Card Required</Button>
            </Link>
            <Link href="/tools/rate-calculator">
              <Button variant="secondary">Try the Rate Calculator</Button>
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
