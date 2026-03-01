import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Equity: Owner\u0027s Equity Explained for Australian Freelancers & Small Business — InvoiceFlow',
  description:
    'What is equity in business? Learn how owner\u0027s equity works for Australian sole traders and small businesses: the accounting equation, equity vs assets vs liabilities, how equity changes, balance sheet examples, and common mistakes. Includes worked examples and the owner\u0027s equity formula.',
  keywords: [
    'equity meaning in business',
    'owner equity sole trader',
    'equity vs assets',
    'equity in business definition',
    'owner equity formula',
    'equity on balance sheet',
    'retained earnings freelancer',
    'business equity calculation australia',
  ],
  alternates: { canonical: '/glossary/equity' },
  openGraph: {
    title: 'Equity: Owner\u0027s Equity Explained for Australian Freelancers & Small Business — InvoiceFlow',
    description:
      'Everything Australian freelancers need to know about equity: the accounting equation, owner\u0027s equity for sole traders, equity types for Pty Ltd, how equity changes over time, balance sheet examples, and managing equity with InvoiceFlow.',
    url: 'https://invoiceflow-teal.vercel.app/glossary/equity',
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
    { '@type': 'ListItem', position: 3, name: 'Equity', item: `${BASE_URL}/glossary/equity` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is equity in business for a sole trader?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For a sole trader, equity is called "owner\'s equity" and represents your total ownership stake in the business. It is calculated as: Assets minus Liabilities. Owner\'s equity is made up of capital you\'ve contributed to the business, plus accumulated profits (retained earnings), minus any drawings (money you\'ve taken out for personal use). Unlike a Pty Ltd company, there are no shares or shareholders — you are the sole owner, and your equity reflects the net worth of your business. If you sold everything the business owns and paid off all debts, your equity is what you\'d walk away with.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the accounting equation and how does equity fit in?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The fundamental accounting equation is: Assets = Liabilities + Equity. This equation must always balance — it is the foundation of double-entry bookkeeping and every balance sheet. Rearranged for equity, it becomes: Equity = Assets - Liabilities. For example, if your freelance business has $80,000 in assets (cash, equipment, unpaid invoices) and $25,000 in liabilities (tax payable, loan), your equity is $55,000. Every financial transaction you record must maintain this balance. The equation is codified in the AASB Conceptual Framework for Financial Reporting and underpins all Australian accounting standards.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do drawings affect equity?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Drawings reduce equity directly. When you take money from your business for personal use as a sole trader, it is not recorded as an expense — it is a capital withdrawal that decreases your owner\'s equity. For example, if your equity is $50,000 and you take $5,000 in drawings, your equity drops to $45,000. This is important because drawings do not appear on the profit and loss statement — they only appear on the balance sheet as a reduction in equity. Taking excessive drawings can push your equity negative, which signals financial distress and can affect your ability to secure business loans or credit.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can equity be negative and what does it mean?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, equity can be negative, and it is a serious warning sign. Negative equity means your business owes more than it owns — your liabilities exceed your assets. For freelancers, this typically happens when you take too many drawings relative to profits, accumulate losses over multiple periods, or take on debt that exceeds your asset base. Negative equity can make it very difficult to obtain business loans, may signal insolvency if sustained, and indicates the business is technically worth less than nothing. If you encounter negative equity, you should reduce drawings immediately, increase revenue or cut expenses to generate profit, and consider injecting personal capital back into the business.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a good debt-to-equity ratio for a freelance business?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For a freelance or small service-based business in Australia, a debt-to-equity ratio below 1.0 is generally considered healthy. This means you have more equity than debt — your business owns more than it owes. A ratio of 0.5 or lower is excellent, indicating strong financial health. Above 1.0 means you have more debt than equity, which increases financial risk. Above 2.0 is a red flag for most service businesses. However, context matters: asset-heavy businesses (like those with significant equipment) may carry higher ratios. Lenders typically look at this ratio when assessing loan applications, so maintaining a healthy ratio below 1.0 improves your borrowing capacity.',
      },
    },
  ],
};

const tocItems = [
  { id: 'what-is-equity', label: '1. What Is Equity?' },
  { id: 'types-of-equity', label: '2. Types of Equity' },
  { id: 'how-equity-changes', label: '3. How Equity Changes' },
  { id: 'equity-on-balance-sheet', label: '4. Equity on the Balance Sheet' },
  { id: 'common-mistakes', label: '5. Common Equity Mistakes' },
  { id: 'how-invoiceflow-helps', label: '6. How InvoiceFlow Helps' },
];

const relatedTools = [
  {
    href: '/tools/invoice-generator',
    name: 'Invoice Generator',
    description: 'Create professional invoices that feed directly into your equity tracking and revenue reporting.',
    icon: (
      <svg className="w-6 h-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    href: '/tools/profit-margin-calculator',
    name: 'Profit Margin Calculator',
    description: 'Calculate your profit margins to understand how much of your revenue is building equity in the business.',
    icon: (
      <svg className="w-6 h-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    href: '/tools/gst-calculator',
    name: 'GST Calculator',
    description: 'Calculate GST obligations to keep your liability figures accurate and your equity calculations correct.',
    icon: (
      <svg className="w-6 h-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    href: '/tools/balance-sheet-template',
    name: 'Balance Sheet Template',
    description: 'Generate a balance sheet showing your assets, liabilities, and equity position at any point in time.',
    icon: (
      <svg className="w-6 h-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
      </svg>
    ),
  },
];

const relatedGuides = [
  {
    href: '/guides/bookkeeping-basics',
    name: 'Bookkeeping Basics',
    description: 'Foundational bookkeeping concepts including the accounting equation, journals, ledgers, and balance sheet preparation.',
  },
  {
    href: '/guides/tax-guide-freelancers',
    name: 'Tax Guide for Freelancers',
    description: 'Complete guide to income tax, deductions, BAS, and financial reporting requirements for Australian sole traders.',
  },
  {
    href: '/guides/financial-reporting',
    name: 'Financial Reporting Guide',
    description: 'How to prepare and interpret financial statements including balance sheets, P&L reports, and equity statements.',
  },
];

export default function EquityGlossaryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative px-4 pt-20 pb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-purple-500/10 to-violet-500/10 blur-3xl" />
        <div className="relative max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/glossary" className="hover:text-white transition-colors">Glossary</Link>
            <span>/</span>
            <span className="text-white">Equity</span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            Glossary &mdash; Financial Statements
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Owner&apos;s Equity{' '}
            <span className="bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent">
              Explained for Freelancers
            </span>
          </h1>

          {/* Summary */}
          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            Equity is the owner&apos;s residual interest in the business after deducting all liabilities from assets. For Australian freelancers and sole traders, equity represents the true net worth of your business &mdash; what you&apos;d walk away with if you sold everything and paid off every debt. Here&apos;s how the accounting equation works, how equity changes over time, and how to track it.
          </p>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>15 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>AASB-Compliant 2025-26</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
              </svg>
              <span>Updated March 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* In a Nutshell */}
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <div className="rounded-2xl bg-gradient-to-br from-violet-500/10 to-purple-500/10 border border-violet-500/20 p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-violet-500/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-white">In a Nutshell</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center text-violet-400 text-xs font-bold">A=L+E</span>
              <div>
                <p className="text-white font-medium text-sm">The Fundamental Accounting Equation</p>
                <p className="text-gray-400 text-sm">Equity is what&apos;s left after subtracting Liabilities from Assets</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center text-violet-400 text-[9px] font-bold leading-tight text-center">OE</span>
              <div>
                <p className="text-white font-medium text-sm">Owner&apos;s Equity</p>
                <p className="text-gray-400 text-sm">For sole traders, equity represents your total ownership stake in the business</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center text-violet-400 text-[9px] font-bold leading-tight text-center">DR</span>
              <div>
                <p className="text-white font-medium text-sm">Drawings</p>
                <p className="text-gray-400 text-sm">When you take money from your business, it reduces equity &mdash; not an expense, but a capital withdrawal</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center text-violet-400 text-xs font-bold">&lt;1.0</span>
              <div>
                <p className="text-white font-medium text-sm">Target Debt-to-Equity Ratio</p>
                <p className="text-gray-400 text-sm">A healthy freelance business has more equity than debt</p>
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
                className="flex items-center gap-2 text-gray-400 hover:text-violet-400 transition-colors text-sm py-1"
              >
                <svg className="w-4 h-4 text-violet-500/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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

        {/* Section 1: What Is Equity? */}
        <section id="what-is-equity">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold">1</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">What Is Equity?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Equity is the <strong className="text-white">owner&apos;s residual interest in the assets of a business after deducting all liabilities</strong>. In plain English, it is what the business is worth to the owner &mdash; the amount you would walk away with if you sold every asset and paid off every debt. Under the AASB Conceptual Framework for Financial Reporting, equity is defined as the residual interest in the assets of the entity after deducting all its liabilities.
            </p>
            <p className="text-gray-300 leading-relaxed">
              The concept is built on the <strong className="text-white">fundamental accounting equation</strong>: Assets = Liabilities + Equity. Rearranged for equity, this gives us: <strong className="text-white">Equity = Assets &minus; Liabilities</strong>. This equation must always balance &mdash; it is the foundation of double-entry bookkeeping and every balance sheet ever produced.
            </p>
            <p className="text-gray-300 leading-relaxed">
              A helpful real-world analogy is <strong className="text-white">home equity</strong>. If your home is valued at $800,000 and you owe $500,000 on the mortgage, your home equity is $300,000. Business equity works the same way: your business assets (cash, equipment, receivables) minus your business liabilities (loans, tax payable, supplier debts) equals your equity.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Equity goes by many names depending on the context. For sole traders, it is called <strong className="text-white">owner&apos;s equity</strong> or <strong className="text-white">proprietor&apos;s equity</strong>. For companies, it is <strong className="text-white">shareholders&apos; equity</strong>. Accountants may also use the term <strong className="text-white">net assets</strong>, which is mathematically identical &mdash; assets minus liabilities. Under AASB 101 Presentation of Financial Statements, the equity section of the balance sheet must disclose issued capital, retained earnings, and any reserves.
            </p>

            {/* Accounting Equation Visual */}
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 mt-6">
              <h4 className="text-white font-semibold mb-4">The Accounting Equation</h4>
              <div className="grid sm:grid-cols-3 gap-4 text-center">
                <div className="rounded-xl bg-violet-500/10 border border-violet-500/20 p-4">
                  <p className="text-violet-400 text-2xl font-bold mb-1">Assets</p>
                  <p className="text-gray-400 text-sm">What you own</p>
                </div>
                <div className="flex items-center justify-center">
                  <span className="text-gray-500 text-2xl font-bold">=</span>
                </div>
                <div className="rounded-xl bg-gray-700/30 border border-gray-600/30 p-4">
                  <p className="text-gray-300 text-lg font-bold mb-1">Liabilities + Equity</p>
                  <p className="text-gray-400 text-sm">What you owe + what you&apos;re worth</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-700/30 text-center">
                <p className="text-violet-400 font-medium text-lg">Equity = Assets &minus; Liabilities</p>
                <p className="text-gray-500 text-sm mt-1">The owner&apos;s formula</p>
              </div>
            </div>

            <div className="rounded-xl bg-violet-500/5 border border-violet-500/20 p-5 mt-6">
              <p className="text-violet-400 font-medium mb-2">AASB Framework Reference</p>
              <p className="text-gray-400 text-sm">
                The AASB Conceptual Framework (paragraph 4.63) defines equity as <strong className="text-gray-200">&quot;the residual interest in the assets of the entity after deducting all its liabilities.&quot;</strong> This definition applies to all Australian reporting entities, from multinational corporations to sole-trader freelancers. While sole traders aren&apos;t required to prepare AASB-compliant financial statements, understanding the framework ensures your records are consistent with how lenders, investors, and the ATO interpret your finances.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Types of Equity */}
        <section id="types-of-equity">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold">2</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Types of Equity</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Equity is not a single number &mdash; it is made up of several components, and those components differ depending on your <strong className="text-white">business structure</strong>. Whether you are a sole trader, Pty Ltd, partnership, or trust, the equity section of your balance sheet looks different.
            </p>

            {/* Sole Trader Equity */}
            <div className="rounded-xl bg-gray-800/50 border border-violet-500/20 p-6 mt-6">
              <h4 className="text-violet-400 font-semibold mb-3">Sole Trader Equity Components</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-violet-500/20 flex items-center justify-center text-violet-400 text-xs font-bold">1</span>
                  <div>
                    <p className="text-white text-sm font-medium">Owner&apos;s Capital</p>
                    <p className="text-gray-400 text-sm">Money and assets you contribute to the business &mdash; your initial investment plus any additional capital injections over time.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-violet-500/20 flex items-center justify-center text-violet-400 text-xs font-bold">2</span>
                  <div>
                    <p className="text-white text-sm font-medium">Retained Earnings</p>
                    <p className="text-gray-400 text-sm">Accumulated profits from previous financial years that have been kept in the business rather than withdrawn as drawings.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-violet-500/20 flex items-center justify-center text-violet-400 text-xs font-bold">3</span>
                  <div>
                    <p className="text-white text-sm font-medium">Current Year Profit (less Drawings)</p>
                    <p className="text-gray-400 text-sm">Profit earned in the current financial year minus any drawings you have taken. Drawings are <strong className="text-gray-200">not expenses</strong> &mdash; they are capital withdrawals that directly reduce your equity.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pty Ltd Equity */}
            <div className="rounded-xl bg-gray-800/50 border border-purple-500/20 p-6 mt-4">
              <h4 className="text-purple-400 font-semibold mb-3">Pty Ltd Equity Components</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 text-xs font-bold">1</span>
                  <div>
                    <p className="text-white text-sm font-medium">Share Capital</p>
                    <p className="text-gray-400 text-sm">The value of shares issued to shareholders. For a typical freelancer Pty Ltd, this is often just $1 for one ordinary share.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 text-xs font-bold">2</span>
                  <div>
                    <p className="text-white text-sm font-medium">Retained Earnings</p>
                    <p className="text-gray-400 text-sm">Accumulated after-tax profits that have not been distributed as dividends. This is typically the largest equity component for profitable companies.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 text-xs font-bold">3</span>
                  <div>
                    <p className="text-white text-sm font-medium">Reserves</p>
                    <p className="text-gray-400 text-sm">Amounts set aside for specific purposes such as asset revaluation reserves, general reserves, or foreign currency translation reserves. Less common for small companies.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Comparison Table */}
            <div className="rounded-2xl border border-gray-700/50 overflow-hidden mt-6">
              <div className="bg-gray-800/80 px-6 py-4">
                <h4 className="text-white font-semibold">Equity Components by Business Structure</h4>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-800/60">
                      <th className="text-left text-sm font-medium text-gray-300 px-6 py-3">Component</th>
                      <th className="text-center text-sm font-medium text-gray-300 px-4 py-3">Sole Trader</th>
                      <th className="text-center text-sm font-medium text-gray-300 px-4 py-3">Pty Ltd</th>
                      <th className="text-center text-sm font-medium text-gray-300 px-4 py-3">Partnership</th>
                      <th className="text-center text-sm font-medium text-gray-300 px-4 py-3">Trust</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700/50">
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-white font-medium text-sm">Owner&apos;s capital</td>
                      <td className="px-4 py-3 text-center text-violet-400 text-sm">Yes</td>
                      <td className="px-4 py-3 text-center text-gray-500 text-sm">&mdash;</td>
                      <td className="px-4 py-3 text-center text-violet-400 text-sm">Per partner</td>
                      <td className="px-4 py-3 text-center text-gray-500 text-sm">&mdash;</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-white font-medium text-sm">Share capital</td>
                      <td className="px-4 py-3 text-center text-gray-500 text-sm">&mdash;</td>
                      <td className="px-4 py-3 text-center text-violet-400 text-sm">Yes</td>
                      <td className="px-4 py-3 text-center text-gray-500 text-sm">&mdash;</td>
                      <td className="px-4 py-3 text-center text-gray-500 text-sm">&mdash;</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-white font-medium text-sm">Retained earnings</td>
                      <td className="px-4 py-3 text-center text-violet-400 text-sm">Yes</td>
                      <td className="px-4 py-3 text-center text-violet-400 text-sm">Yes</td>
                      <td className="px-4 py-3 text-center text-violet-400 text-sm">Per partner</td>
                      <td className="px-4 py-3 text-center text-violet-400 text-sm">Undistributed</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-white font-medium text-sm">Drawings</td>
                      <td className="px-4 py-3 text-center text-red-400 text-sm">Reduces equity</td>
                      <td className="px-4 py-3 text-center text-gray-500 text-sm">N/A (dividends)</td>
                      <td className="px-4 py-3 text-center text-red-400 text-sm">Per partner</td>
                      <td className="px-4 py-3 text-center text-gray-500 text-sm">Distributions</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-white font-medium text-sm">Reserves</td>
                      <td className="px-4 py-3 text-center text-gray-500 text-sm">Rare</td>
                      <td className="px-4 py-3 text-center text-violet-400 text-sm">Yes</td>
                      <td className="px-4 py-3 text-center text-gray-500 text-sm">Rare</td>
                      <td className="px-4 py-3 text-center text-violet-400 text-sm">Possible</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Worked Example */}
            <div className="rounded-xl bg-violet-500/5 border border-violet-500/20 p-6 mt-6">
              <h4 className="text-violet-400 font-semibold mb-4">Worked Example: Freelance Web Developer Earning $120K</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm border-b border-gray-700/30 pb-2">
                  <span className="text-gray-400">Total assets (cash + equipment + receivables)</span>
                  <span className="text-white font-medium">$50,000</span>
                </div>
                <div className="flex justify-between items-center text-sm border-b border-gray-700/30 pb-2">
                  <span className="text-gray-400">Total liabilities (tax payable + credit card + software subs)</span>
                  <span className="text-red-400 font-medium">- $15,000</span>
                </div>
                <div className="flex justify-between items-center text-sm pt-1">
                  <span className="text-white font-bold">Owner&apos;s Equity</span>
                  <span className="text-violet-400 font-bold text-lg">$35,000</span>
                </div>
              </div>
              <p className="text-gray-500 text-xs mt-3">
                This $35,000 is the freelancer&apos;s true net worth in the business. If they closed the business tomorrow, sold all assets, and paid all debts, $35,000 is what they&apos;d take home.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: How Equity Changes */}
        <section id="how-equity-changes">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold">3</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">How Equity Changes</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Equity is not static &mdash; it moves with every business transaction. Understanding what <strong className="text-white">increases</strong> and <strong className="text-white">decreases</strong> your equity is essential for making informed financial decisions and keeping your business healthy.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              {/* Increases */}
              <div className="rounded-xl bg-gray-800/50 border border-emerald-500/20 p-6">
                <h4 className="text-emerald-400 font-semibold mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
                  </svg>
                  Increases Equity
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-2 text-sm text-gray-400">
                    <span className="text-emerald-400 font-bold flex-shrink-0">1.</span>
                    <span><strong className="text-gray-200">Net profit</strong> &mdash; revenue exceeding expenses adds to retained earnings</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-400">
                    <span className="text-emerald-400 font-bold flex-shrink-0">2.</span>
                    <span><strong className="text-gray-200">Capital contributions</strong> &mdash; money or assets you inject into the business</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-400">
                    <span className="text-emerald-400 font-bold flex-shrink-0">3.</span>
                    <span><strong className="text-gray-200">Asset appreciation</strong> &mdash; equipment or property increasing in value (revaluation)</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-400">
                    <span className="text-emerald-400 font-bold flex-shrink-0">4.</span>
                    <span><strong className="text-gray-200">Debt repayment</strong> &mdash; paying off liabilities increases equity (assets stay, liabilities drop)</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-400">
                    <span className="text-emerald-400 font-bold flex-shrink-0">5.</span>
                    <span><strong className="text-gray-200">Collecting receivables</strong> &mdash; converting unpaid invoices to cash (maintains equity while improving liquidity)</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-400">
                    <span className="text-emerald-400 font-bold flex-shrink-0">6.</span>
                    <span><strong className="text-gray-200">Share issuance</strong> &mdash; for Pty Ltd, issuing new shares for cash increases share capital</span>
                  </div>
                </div>
              </div>

              {/* Decreases */}
              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-6">
                <h4 className="text-red-400 font-semibold mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                  </svg>
                  Decreases Equity
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-2 text-sm text-gray-400">
                    <span className="text-red-400 font-bold flex-shrink-0">1.</span>
                    <span><strong className="text-gray-200">Net losses</strong> &mdash; expenses exceeding revenue erodes retained earnings</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-400">
                    <span className="text-red-400 font-bold flex-shrink-0">2.</span>
                    <span><strong className="text-gray-200">Owner&apos;s drawings</strong> &mdash; personal withdrawals directly reduce equity (sole traders)</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-400">
                    <span className="text-red-400 font-bold flex-shrink-0">3.</span>
                    <span><strong className="text-gray-200">Dividends paid</strong> &mdash; profit distributions to shareholders reduce retained earnings (Pty Ltd)</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-400">
                    <span className="text-red-400 font-bold flex-shrink-0">4.</span>
                    <span><strong className="text-gray-200">Asset depreciation</strong> &mdash; equipment losing value over time reduces total assets</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-400">
                    <span className="text-red-400 font-bold flex-shrink-0">5.</span>
                    <span><strong className="text-gray-200">Bad debts written off</strong> &mdash; uncollectable invoices reduce asset value and equity</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-400">
                    <span className="text-red-400 font-bold flex-shrink-0">6.</span>
                    <span><strong className="text-gray-200">Taking on new debt</strong> &mdash; borrowing without acquiring equal assets reduces equity position</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 12-Month Worked Example */}
            <div className="rounded-xl bg-gray-800/50 border border-violet-500/30 p-6 mt-6">
              <h4 className="text-white font-semibold mb-4">Worked Example: Equity Movement Over 12 Months (Freelance Graphic Designer)</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm border-b border-gray-700/30 pb-2">
                  <span className="text-gray-400">Opening equity (1 July 2025)</span>
                  <span className="text-white font-medium">$28,000</span>
                </div>
                <div className="flex justify-between items-center text-sm border-b border-gray-700/30 pb-2">
                  <span className="text-gray-400">+ Net profit for the year (revenue $110K &minus; expenses $52K)</span>
                  <span className="text-emerald-400 font-medium">+ $58,000</span>
                </div>
                <div className="flex justify-between items-center text-sm border-b border-gray-700/30 pb-2">
                  <span className="text-gray-400">+ Capital contributed (new equipment purchased personally, transferred to business)</span>
                  <span className="text-emerald-400 font-medium">+ $4,500</span>
                </div>
                <div className="flex justify-between items-center text-sm border-b border-gray-700/30 pb-2">
                  <span className="text-gray-400">&minus; Owner&apos;s drawings (personal living expenses, 12 monthly transfers)</span>
                  <span className="text-red-400 font-medium">&minus; $48,000</span>
                </div>
                <div className="flex justify-between items-center text-sm border-b border-gray-700/30 pb-2">
                  <span className="text-gray-400">&minus; Equipment depreciation</span>
                  <span className="text-red-400 font-medium">&minus; $2,500</span>
                </div>
                <div className="flex justify-between items-center text-sm pt-2">
                  <span className="text-white font-bold">Closing equity (30 June 2026)</span>
                  <span className="text-violet-400 font-bold text-lg">$40,000</span>
                </div>
              </div>
              <p className="text-gray-500 text-xs mt-3">
                Equity grew by $12,000 over the year. The freelancer earned $58K profit, took $48K in drawings, contributed $4.5K in assets, and lost $2.5K to depreciation. Net equity increase: $12,000.
              </p>
            </div>

            {/* GST, Tax, and Super Impact */}
            <div className="rounded-xl bg-violet-500/5 border border-violet-500/20 p-5 mt-6">
              <p className="text-violet-400 font-medium mb-2">How GST, Tax, and Super Affect Equity</p>
              <p className="text-gray-400 text-sm">
                <strong className="text-gray-200">GST</strong> does not directly affect equity &mdash; it is collected on behalf of the ATO and held as a liability (GST payable) or claimed as an asset (input tax credits). However, failing to lodge BAS on time can result in penalties that reduce profit and therefore equity. <strong className="text-gray-200">Income tax provisions</strong> are a liability that reduces your equity calculation &mdash; always set aside your estimated tax to avoid overstating equity. <strong className="text-gray-200">Superannuation</strong> (if you voluntarily contribute as a sole trader) is a personal expense via drawings, not a business expense &mdash; so it reduces equity through the drawings mechanism, not through the P&amp;L.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Equity on the Balance Sheet */}
        <section id="equity-on-balance-sheet">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold">4</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Equity on the Balance Sheet</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Equity appears as the <strong className="text-white">third and final section of the balance sheet</strong>, after assets and liabilities. It represents the balancing figure &mdash; the amount that makes the accounting equation hold true. Understanding where equity sits and how to read it gives you a clear picture of your business&apos;s financial health.
            </p>
            <p className="text-gray-300 leading-relaxed">
              For companies, AASB 101 also requires a <strong className="text-white">Statement of Changes in Equity</strong> &mdash; a separate financial statement showing how each equity component moved during the reporting period. For sole traders, this information is typically shown as a simple reconciliation within the balance sheet equity section, tracking opening balance, plus profit, minus drawings, to arrive at the closing balance.
            </p>

            {/* Example Balance Sheet */}
            <div className="rounded-2xl border border-gray-700/50 overflow-hidden mt-6">
              <div className="bg-gray-800/80 px-6 py-4">
                <h4 className="text-white font-semibold">Example: Freelance Copywriter &mdash; Balance Sheet as at 30 June 2026</h4>
              </div>
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-800/60">
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-3">Item</th>
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-3">Category</th>
                    <th className="text-right text-sm font-medium text-gray-300 px-6 py-3">Amount (AUD)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700/50">
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-white font-medium text-sm">Business Bank Account</td>
                    <td className="px-6 py-3 text-gray-300 text-sm">Current Asset</td>
                    <td className="px-6 py-3 text-violet-400 font-medium text-sm text-right">$32,000</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-white font-medium text-sm">Accounts Receivable</td>
                    <td className="px-6 py-3 text-gray-300 text-sm">Current Asset</td>
                    <td className="px-6 py-3 text-violet-400 font-medium text-sm text-right">$18,000</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-white font-medium text-sm">MacBook Pro + Monitor</td>
                    <td className="px-6 py-3 text-gray-300 text-sm">Non-Current Asset</td>
                    <td className="px-6 py-3 text-violet-400 font-medium text-sm text-right">$6,500</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-white font-medium text-sm">Office Furniture</td>
                    <td className="px-6 py-3 text-gray-300 text-sm">Non-Current Asset</td>
                    <td className="px-6 py-3 text-violet-400 font-medium text-sm text-right">$3,500</td>
                  </tr>
                  <tr className="bg-violet-500/5">
                    <td className="px-6 py-3 text-white font-bold text-sm" colSpan={2}>Total Assets</td>
                    <td className="px-6 py-3 text-violet-400 font-bold text-sm text-right">$80,000</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-white font-medium text-sm">GST Payable</td>
                    <td className="px-6 py-3 text-gray-300 text-sm">Current Liability</td>
                    <td className="px-6 py-3 text-red-400 font-medium text-sm text-right">$4,200</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-white font-medium text-sm">Income Tax Provision</td>
                    <td className="px-6 py-3 text-gray-300 text-sm">Current Liability</td>
                    <td className="px-6 py-3 text-red-400 font-medium text-sm text-right">$12,800</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-white font-medium text-sm">Equipment Finance</td>
                    <td className="px-6 py-3 text-gray-300 text-sm">Non-Current Liability</td>
                    <td className="px-6 py-3 text-red-400 font-medium text-sm text-right">$8,000</td>
                  </tr>
                  <tr className="bg-red-500/5">
                    <td className="px-6 py-3 text-white font-bold text-sm" colSpan={2}>Total Liabilities</td>
                    <td className="px-6 py-3 text-red-400 font-bold text-sm text-right">$25,000</td>
                  </tr>
                  <tr className="bg-violet-500/10">
                    <td className="px-6 py-3 text-white font-bold text-sm" colSpan={2}>Owner&apos;s Equity (Assets &minus; Liabilities)</td>
                    <td className="px-6 py-3 text-violet-400 font-bold text-lg text-right">$55,000</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Key Ratios */}
            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-violet-500/20 p-6">
                <h4 className="text-violet-400 font-semibold mb-3">Debt-to-Equity Ratio</h4>
                <p className="text-white text-3xl font-bold mb-2">0.45</p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  <strong className="text-gray-200">Formula:</strong> Total Liabilities &divide; Total Equity = $25,000 &divide; $55,000 = 0.45. <strong className="text-gray-200">Target: below 1.0.</strong> This freelancer&apos;s ratio of 0.45 is excellent &mdash; for every dollar of equity, they owe only 45 cents in debt. Lenders view this favourably.
                </p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-purple-500/20 p-6">
                <h4 className="text-purple-400 font-semibold mb-3">Return on Equity (ROE)</h4>
                <p className="text-white text-3xl font-bold mb-2">21.8%</p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  <strong className="text-gray-200">Formula:</strong> Net Profit &divide; Average Equity. If this freelancer earned $12,000 net profit with average equity of $55,000, ROE = 21.8%. <strong className="text-gray-200">Target: 15-25%</strong> for a healthy service business. This indicates the business is generating strong returns on the owner&apos;s investment.
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-violet-500/5 border border-violet-500/20 p-5 mt-6">
              <p className="text-violet-400 font-medium mb-2">Reading the Balance Sheet</p>
              <p className="text-gray-400 text-sm">
                When reviewing your balance sheet, always check three things: <strong className="text-gray-200">(1) Is equity growing year over year?</strong> This signals a healthy, profitable business. <strong className="text-gray-200">(2) Is the debt-to-equity ratio below 1.0?</strong> This means you own more than you owe. <strong className="text-gray-200">(3) Is equity positive?</strong> Negative equity is a red flag that requires immediate attention. Together, these three checks give you a quick health score for your business.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Common Equity Mistakes */}
        <section id="common-mistakes">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold">5</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Common Equity Mistakes</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Misunderstanding equity can lead to poor financial decisions, rejected loan applications, and an inaccurate picture of your business health. Here are the <strong className="text-white">six most common equity mistakes</strong> freelancers make &mdash; and how to fix each one.
            </p>

            <div className="space-y-4 mt-6">
              {/* Mistake 1 */}
              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-6">
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center text-red-400 font-bold text-sm">1</span>
                  <div>
                    <h4 className="text-red-400 font-semibold mb-2">Confusing Equity with Cash</h4>
                    <p className="text-gray-400 text-sm leading-relaxed mb-2">
                      <strong className="text-gray-200">Problem:</strong> Many freelancers assume that if they have $55,000 in equity, they have $55,000 in the bank. Equity includes non-liquid assets like equipment, unpaid invoices, and prepaid expenses &mdash; these are not cash.
                    </p>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      <strong className="text-emerald-400">Fix:</strong> Track your <strong className="text-gray-200">cash position separately from equity</strong>. Your bank balance tells you what you can spend today; equity tells you what the business is worth. You can have high equity and still face a cash crunch if most of your assets are tied up in unpaid invoices.
                    </p>
                  </div>
                </div>
              </div>

              {/* Mistake 2 */}
              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-6">
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center text-red-400 font-bold text-sm">2</span>
                  <div>
                    <h4 className="text-red-400 font-semibold mb-2">Taking Too Many Drawings</h4>
                    <p className="text-gray-400 text-sm leading-relaxed mb-2">
                      <strong className="text-gray-200">Problem:</strong> Withdrawing more money than the business earns in profit steadily erodes equity. If drawings exceed profit year after year, equity goes negative &mdash; meaning you owe more than the business owns.
                    </p>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      <strong className="text-emerald-400">Fix:</strong> Set a <strong className="text-gray-200">drawings budget</strong> that is always less than your net profit. A common rule: keep drawings below 80% of expected annual profit, leaving at least 20% to grow equity. Review your equity position monthly.
                    </p>
                  </div>
                </div>
              </div>

              {/* Mistake 3 */}
              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-6">
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center text-red-400 font-bold text-sm">3</span>
                  <div>
                    <h4 className="text-red-400 font-semibold mb-2">Not Tracking Owner Contributions</h4>
                    <p className="text-gray-400 text-sm leading-relaxed mb-2">
                      <strong className="text-gray-200">Problem:</strong> When you put personal money into the business (buying equipment, covering a shortfall), failing to record it as a capital contribution understates your equity and creates messy records for your accountant.
                    </p>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      <strong className="text-emerald-400">Fix:</strong> Record <strong className="text-gray-200">every personal-to-business transfer as a capital contribution</strong>. This increases your equity correctly and creates a clear audit trail. If you later withdraw that money, it is treated as drawings &mdash; not a loan repayment.
                    </p>
                  </div>
                </div>
              </div>

              {/* Mistake 4 */}
              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-6">
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center text-red-400 font-bold text-sm">4</span>
                  <div>
                    <h4 className="text-red-400 font-semibold mb-2">Ignoring Negative Equity Warning</h4>
                    <p className="text-gray-400 text-sm leading-relaxed mb-2">
                      <strong className="text-gray-200">Problem:</strong> Negative equity (liabilities exceeding assets) is a serious red flag. Some freelancers don&apos;t prepare balance sheets and never discover their equity has gone negative until a loan application is rejected.
                    </p>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      <strong className="text-emerald-400">Fix:</strong> Prepare a <strong className="text-gray-200">balance sheet at least quarterly</strong> (aligned with BAS dates). If equity is negative, immediately reduce drawings, cut unnecessary expenses, and consider injecting personal capital. Sustained negative equity may indicate the business is insolvent.
                    </p>
                  </div>
                </div>
              </div>

              {/* Mistake 5 */}
              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-6">
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center text-red-400 font-bold text-sm">5</span>
                  <div>
                    <h4 className="text-red-400 font-semibold mb-2">Mixing Personal and Business Assets</h4>
                    <p className="text-gray-400 text-sm leading-relaxed mb-2">
                      <strong className="text-gray-200">Problem:</strong> Using a personal bank account for business transactions, or claiming personal assets as business assets, inflates or deflates your equity figure and creates compliance issues with the ATO.
                    </p>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      <strong className="text-emerald-400">Fix:</strong> Maintain a <strong className="text-gray-200">dedicated business bank account</strong> and only include genuinely business-related assets on your balance sheet. If you use a personal asset (like a car) partly for business, only include the business-use percentage.
                    </p>
                  </div>
                </div>
              </div>

              {/* Mistake 6 */}
              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-6">
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center text-red-400 font-bold text-sm">6</span>
                  <div>
                    <h4 className="text-red-400 font-semibold mb-2">Not Understanding Equity for Loan Applications</h4>
                    <p className="text-gray-400 text-sm leading-relaxed mb-2">
                      <strong className="text-gray-200">Problem:</strong> Lenders assess your debt-to-equity ratio when evaluating loan applications. Freelancers who don&apos;t track equity cannot demonstrate financial health and are often rejected for business credit, overdrafts, or equipment finance.
                    </p>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      <strong className="text-emerald-400">Fix:</strong> Keep your <strong className="text-gray-200">balance sheet current and debt-to-equity ratio below 1.0</strong>. Before applying for any business loan, review your equity position and ensure it shows a healthy, growing trend. Lenders want to see that your business is worth more than it owes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: How InvoiceFlow Helps */}
        <section id="how-invoiceflow-helps">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold">6</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">How InvoiceFlow Helps</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Tracking equity manually is tedious and error-prone. <strong className="text-white">InvoiceFlow</strong> automates the hard parts &mdash; from recording invoice revenue to generating balance sheet reports &mdash; so you always know exactly what your business is worth.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18v-.008zm-12 0h.008v.008H6v-.008z" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">Automatic Equity Tracking</h4>
                <p className="text-gray-400 text-sm">Every invoice you create and payment you receive automatically feeds into your equity calculation. InvoiceFlow tracks revenue as it flows in, giving you a real-time view of how your invoicing activity is building business equity.</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">Drawings &amp; Contribution Recording</h4>
                <p className="text-gray-400 text-sm">Record owner&apos;s drawings and capital contributions with a single click. InvoiceFlow automatically adjusts your equity position, so you always know the net impact of personal withdrawals on your business net worth.</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">Balance Sheet Reports</h4>
                <p className="text-gray-400 text-sm">Generate balance sheet reports showing your complete equity position at any point in time. See assets, liabilities, and equity broken down by category &mdash; ready to share with your accountant or lender.</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">Financial Health Scoring</h4>
                <p className="text-gray-400 text-sm">InvoiceFlow calculates your debt-to-equity ratio, return on equity, and equity growth trend automatically. Get a clear financial health score based on your equity position &mdash; with alerts if your ratio moves into unhealthy territory.</p>
              </div>
            </div>

            <div className="rounded-xl bg-violet-500/5 border border-violet-500/20 p-5 mt-6">
              <p className="text-violet-400 font-medium mb-2">Equity Tracking Without the Complexity</p>
              <p className="text-gray-400 text-sm">
                The entire point of InvoiceFlow is to give freelancers <strong className="text-gray-200">the financial visibility of a full accounting system without requiring you to be an accountant</strong>. You create invoices, record payments, log expenses and drawings &mdash; and InvoiceFlow calculates your equity, generates balance sheet reports, and flags potential issues before they become problems. All you see is a clean, intuitive dashboard. All your accountant sees is well-structured, export-ready data.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Related Glossary Terms */}
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <div className="rounded-2xl bg-gray-800/50 border border-gray-700/50 p-8">
          <h2 className="text-lg font-bold text-white mb-4">Related Glossary Terms</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { href: '/glossary/balance-sheet', label: 'Balance Sheet' },
              { href: '/glossary/profit-and-loss', label: 'Profit and Loss' },
              { href: '/glossary/net-income', label: 'Net Income' },
              { href: '/glossary/dividend', label: 'Dividend' },
              { href: '/glossary/revenue', label: 'Revenue' },
              { href: '/glossary/pty-ltd', label: 'Pty Ltd' },
            ].map((term) => (
              <Link
                key={term.href}
                href={term.href}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gray-700/30 border border-gray-600/30 text-gray-300 text-sm hover:border-violet-500/40 hover:text-violet-400 transition-all"
              >
                <svg className="w-3.5 h-3.5 text-violet-500/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
                {term.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Related Tools */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-white mb-2 text-center">Related Tools</h2>
        <p className="text-gray-400 text-center mb-8">Free tools to help you track equity, generate balance sheets, and manage business finances.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {relatedTools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:border-violet-500/50 hover:bg-gray-800/80 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-4">
                {tool.icon}
              </div>
              <h3 className="text-white font-medium mb-2 group-hover:text-violet-400 transition-colors">{tool.name}</h3>
              <p className="text-sm text-gray-400">{tool.description}</p>
              <div className="mt-4 text-violet-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
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
        <p className="text-gray-400 text-center mb-8">In-depth guides on bookkeeping, tax, and financial reporting for Australian freelancers.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {relatedGuides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group p-6 rounded-2xl bg-gray-800/40 border border-gray-700/40 hover:border-violet-500/40 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h3 className="text-white font-medium mb-2 group-hover:text-violet-400 transition-colors">{guide.name}</h3>
              <p className="text-sm text-gray-400">{guide.description}</p>
              <div className="mt-4 text-violet-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
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
              <summary className="flex items-center justify-between cursor-pointer px-6 py-4 text-white font-medium hover:text-violet-400 transition-colors">
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
        <div className="rounded-2xl bg-gradient-to-br from-violet-500/10 to-purple-500/10 border border-violet-500/20 p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Know What Your Business Is Worth &mdash; Track Equity Automatically
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Stop guessing and start knowing. InvoiceFlow tracks your revenue, expenses, drawings, and contributions to give you a real-time equity position. Generate balance sheet reports, monitor your debt-to-equity ratio, and make smarter financial decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button>Start Free &mdash; No Card Required</Button>
            </Link>
            <Link href="/tools/balance-sheet-template">
              <Button variant="secondary">Try the Balance Sheet Template</Button>
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
