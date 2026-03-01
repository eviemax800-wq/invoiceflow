import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Cash Basis Accounting: Complete Guide for Australian Freelancers & Sole Traders — InvoiceFlow',
  description:
    'What is cash basis accounting and how does it work in Australia? Learn cash vs accrual accounting, BAS reporting on cash basis, GST timing rules, and when freelancers and sole traders should use each method. Updated 2025-26 guide.',
  keywords: [
    'cash basis accounting australia',
    'cash basis vs accrual accounting',
    'cash accounting freelancer',
    'sole trader accounting method',
    'cash basis BAS reporting',
    'cash vs accrual accounting australia',
    'cash accounting method sole trader',
    'cash basis GST reporting',
    'freelancer accounting method australia',
    'small business cash accounting',
    'BAS cash basis',
    'ATO cash accounting',
  ],
  alternates: { canonical: '/glossary/cash-basis-accounting' },
  openGraph: {
    title: 'Cash Basis Accounting: Complete Guide for Australian Freelancers & Sole Traders — InvoiceFlow',
    description:
      'Everything Australian freelancers need to know about cash basis accounting: how it works, cash vs accrual comparison, BAS and GST reporting, best practices, and when to use each method.',
    url: 'https://invoiceflow-teal.vercel.app/glossary/cash-basis-accounting',
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
    { '@type': 'ListItem', position: 3, name: 'Cash Basis Accounting', item: `${BASE_URL}/glossary/cash-basis-accounting` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the difference between cash and accrual accounting?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cash basis accounting records transactions when money actually changes hands — income is recorded when payment is received, and expenses are recorded when payment is made. Accrual accounting records transactions when they occur, regardless of payment timing — income is recorded when you invoice a client (even if they have not paid yet), and expenses are recorded when you receive a bill (even if you have not paid it yet). Cash basis is simpler and aligns with actual cash flow, while accrual gives a more accurate picture of financial obligations.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can sole traders use cash basis accounting in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, businesses with annual turnover under $10 million can choose to use cash basis accounting in Australia. Since most sole traders and freelancers fall well below this threshold, cash basis is the most common and recommended accounting method for them. You do not need to apply for approval — you simply choose to report on a cash basis when you lodge your BAS and tax return.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does cash basis accounting affect my BAS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — when you use cash basis accounting, you report GST on sales when payment is actually received from clients, not when invoices are issued. Similarly, you claim GST credits on purchases when you actually pay for them, not when you receive the supplier invoice. This means your BAS figures may differ from your invoicing records if there are unpaid invoices or outstanding bills at the end of the quarter.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is cash basis accounting better for freelancers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Generally yes — cash basis accounting is better for most freelancers because it is simpler to manage, aligns with actual cash flow, and provides a significant tax timing advantage: you do not pay tax on invoices that have not been paid yet. If a client is slow to pay, you are not out of pocket for tax on income you have not received. For the vast majority of sole traders and freelancers, cash basis is the recommended method.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I switch from cash to accrual accounting?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, you can switch from cash to accrual accounting (or vice versa), but you must notify the ATO and there may be transitional adjustments required to prevent income or expenses being counted twice or missed entirely. The ATO requires you to account for any overlap during the transition period. It is strongly recommended that you consult your accountant before switching methods, as the transitional calculations can be complex.',
      },
    },
  ],
};

const tocItems = [
  { id: 'what-is-cash-basis-accounting', label: '1. What Is Cash Basis Accounting?' },
  { id: 'cash-vs-accrual-compared', label: '2. Cash vs Accrual Accounting Compared' },
  { id: 'which-method-freelancers', label: '3. Which Method Should Freelancers Use?' },
  { id: 'cash-basis-bas-gst', label: '4. Cash Basis Accounting for BAS & GST' },
  { id: 'best-practices', label: '5. Cash Basis Accounting Best Practices' },
  { id: 'invoiceflow-cash-basis', label: '6. How InvoiceFlow Supports Cash Basis Accounting' },
];

const relatedTools = [
  {
    href: '/tools/bas-preparation-checklist',
    name: 'BAS Preparation Checklist',
    description: 'Step-by-step checklist to lodge your BAS on time with accurate cash basis figures.',
    icon: (
      <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    href: '/tools/profit-and-loss-generator',
    name: 'Profit & Loss Generator',
    description: 'Generate a cash-basis profit and loss statement based on actual payments received and made.',
    icon: (
      <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    href: '/tools/gst-calculator',
    name: 'GST Calculator',
    description: 'Add or remove GST from any amount and understand the timing of GST on cash basis.',
    icon: (
      <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
      </svg>
    ),
  },
  {
    href: '/tools/tax-estimator',
    name: 'Tax Estimator',
    description: 'Estimate your income tax based on cash received, not invoiced — aligned with cash basis reporting.',
    icon: (
      <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
];

const relatedGuides = [
  {
    href: '/guides/gst-for-freelancers',
    name: 'GST for Freelancers',
    description: 'The complete guide to GST registration, BAS lodgement, tax invoices, and claiming credits on cash basis.',
  },
  {
    href: '/guides/tax-guide-freelancers',
    name: 'Tax Guide for Freelancers',
    description: 'Income tax, deductions, PAYG, super, and everything else sole traders need to know — including accounting method choice.',
  },
  {
    href: '/guides/invoicing-101',
    name: 'Invoicing 101',
    description: 'How to create professional invoices, track payments, and manage cash flow as an Australian freelancer.',
  },
];

export default function CashBasisAccountingGlossaryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative px-4 pt-20 pb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/10 blur-3xl" />
        <div className="relative max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/glossary" className="hover:text-white transition-colors">Glossary</Link>
            <span>/</span>
            <span className="text-white">Cash Basis Accounting</span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            Glossary &mdash; Accounting &amp; Bookkeeping
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Cash Basis{' '}
            <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
              Accounting
            </span>
          </h1>

          {/* Summary */}
          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            Cash basis accounting is the simplest accounting method &mdash; you record income when cash is received and expenses when cash is paid, not when invoiced. Most Australian sole traders and freelancers use cash basis because it aligns with actual cash flow and offers a real tax timing advantage.
          </p>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>15 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>ATO-Accurate 2025-26</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
              </svg>
              <span>Updated March 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* In a Nutshell */}
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <div className="rounded-2xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20 p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-white">In a Nutshell</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 text-xs font-bold">Simple</span>
              <div>
                <p className="text-white font-medium text-sm">Simplest Method</p>
                <p className="text-gray-400 text-sm">Record income when paid, expenses when spent &mdash; the simplest accounting method</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 text-xs font-bold">$10M</span>
              <div>
                <p className="text-white font-medium text-sm">Turnover Threshold</p>
                <p className="text-gray-400 text-sm">Turnover threshold below which you can choose cash basis accounting in Australia</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center text-orange-400 text-xs font-bold">BAS</span>
              <div>
                <p className="text-white font-medium text-sm">GST Timing</p>
                <p className="text-gray-400 text-sm">Cash basis affects when you report GST on sales and claim input tax credits</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center text-orange-400 text-xs font-bold">Tax</span>
              <div>
                <p className="text-white font-medium text-sm">Tax Advantage</p>
                <p className="text-gray-400 text-sm">You only pay tax on income you have actually received, not invoices you have sent</p>
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
                className="flex items-center gap-2 text-gray-400 hover:text-amber-400 transition-colors text-sm py-1"
              >
                <svg className="w-4 h-4 text-amber-500/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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

        {/* Section 1: What Is Cash Basis Accounting? */}
        <section id="what-is-cash-basis-accounting">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold">1</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">What Is Cash Basis Accounting?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Cash basis accounting is an accounting method where <strong className="text-white">income is recorded when cash is actually received</strong> and <strong className="text-white">expenses are recorded when cash is actually paid</strong> &mdash; not when an invoice is issued or received. It is the simplest form of accounting and the method used by the majority of <Link href="/glossary/sole-trader" className="text-amber-400 underline decoration-amber-400/30 hover:decoration-amber-400 transition-colors">sole traders</Link> and freelancers in Australia.
            </p>
            <p className="text-gray-300 leading-relaxed">
              The alternative is <strong className="text-white">accrual accounting</strong>, where revenue is recorded when it is earned (when you invoice a client) and expenses are recorded when they are incurred (when you receive a supplier invoice) &mdash; regardless of when money actually changes hands. Accrual accounting gives a more complete picture of financial obligations, but it is significantly more complex to manage.
            </p>
            <p className="text-gray-300 leading-relaxed">
              For a freelancer, the difference is practical and immediate. Imagine you send a client an invoice in May, and the client pays you in June:
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              <div className="rounded-xl bg-gray-800/50 border border-amber-500/20 p-5">
                <h4 className="text-amber-400 font-semibold mb-3">Cash Basis</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  You record the income in <strong className="text-gray-200">June</strong> &mdash; when you actually received the payment. Until money hits your bank account, it does not exist in your books.
                </p>
                <p className="text-xs text-gray-500 mt-3">Income recognised: June (payment received)</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-orange-500/20 p-5">
                <h4 className="text-orange-400 font-semibold mb-3">Accrual Basis</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  You record the income in <strong className="text-gray-200">May</strong> &mdash; when you issued the invoice and the revenue was &quot;earned.&quot; The payment itself does not change when the income is recorded.
                </p>
                <p className="text-xs text-gray-500 mt-3">Income recognised: May (invoice issued)</p>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed">
              This distinction matters enormously for tax, <Link href="/glossary/bas" className="text-amber-400 underline decoration-amber-400/30 hover:decoration-amber-400 transition-colors">BAS reporting</Link>, and <Link href="/glossary/cash-flow" className="text-amber-400 underline decoration-amber-400/30 hover:decoration-amber-400 transition-colors">cash flow</Link> management. On cash basis, your accounting records always reflect the actual money you have &mdash; not money you are owed. This makes it easier to know exactly where you stand financially at any given moment.
            </p>

            <div className="rounded-xl bg-amber-500/5 border border-amber-500/20 p-5 mt-6">
              <p className="text-amber-400 font-medium mb-2">Why Most Freelancers Prefer Cash Basis</p>
              <p className="text-gray-400 text-sm">
                Cash basis accounting means you <strong className="text-gray-200">never pay tax on money you have not received</strong>. If a client takes 60 days to pay a $10,000 invoice, you do not owe income tax or <Link href="/glossary/gst" className="text-amber-400 underline decoration-amber-400/30 hover:decoration-amber-400 transition-colors">GST</Link> on that $10,000 until the payment clears your bank account. On accrual basis, you would owe tax in the period you invoiced &mdash; even if the client has not paid yet.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Cash vs Accrual Accounting Compared */}
        <section id="cash-vs-accrual-compared">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold">2</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Cash vs Accrual Accounting Compared</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Understanding the differences between cash and accrual accounting is essential for choosing the right method. Here is a comprehensive side-by-side comparison covering all the key factors:
            </p>

            <div className="rounded-2xl border border-gray-700/50 overflow-hidden mt-6">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-800/80">
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Factor</th>
                    <th className="text-left text-sm font-medium text-amber-400 px-6 py-4">Cash Basis</th>
                    <th className="text-left text-sm font-medium text-orange-400 px-6 py-4">Accrual Basis</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700/50">
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm font-medium">When income recorded</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">When payment is received</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">When invoice is issued (revenue earned)</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm font-medium">When expenses recorded</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">When payment is made</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">When bill is received (expense incurred)</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm font-medium">Complexity</td>
                    <td className="px-6 py-3 text-amber-400 text-sm font-medium">Simple</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">More complex</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm font-medium">Who typically uses it</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">Sole traders, freelancers, small businesses</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">Companies, larger businesses, those with inventory</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm font-medium">ATO requirement</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">Optional if turnover under $10M</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">Required if turnover over $10M</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm font-medium">BAS reporting</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">GST reported when cash changes hands</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">GST reported when invoices are issued/received</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm font-medium">Cash flow visibility</td>
                    <td className="px-6 py-3 text-amber-400 text-sm font-medium">Excellent &mdash; reflects actual cash position</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">Can be misleading &mdash; shows earned but not received</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm font-medium">Tax timing advantage</td>
                    <td className="px-6 py-3 text-amber-400 text-sm font-medium">Yes &mdash; tax only on cash received</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">No &mdash; tax on invoiced amounts regardless of payment</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm font-medium">Financial accuracy</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">Less accurate for long-term financial picture</td>
                    <td className="px-6 py-3 text-orange-400 text-sm font-medium">More accurate &mdash; matches revenue with expenses</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm font-medium">Scalability</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">Best for small, simple operations</td>
                    <td className="px-6 py-3 text-orange-400 text-sm font-medium">Better for growing businesses</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm font-medium">Suitable for</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">Service-based freelancers, consultants, contractors</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">Product businesses, inventory, complex contracts</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm font-medium">ATO eligibility</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">Turnover under $10 million</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">Available to all businesses, required over $10M</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="rounded-xl bg-amber-500/5 border border-amber-500/20 p-5 mt-6">
              <p className="text-amber-400 font-medium mb-2">Bottom Line</p>
              <p className="text-gray-400 text-sm">
                For the vast majority of Australian freelancers and sole traders, <strong className="text-gray-200">cash basis accounting is the better choice</strong>. It is simpler to manage, gives you a clear picture of actual cash on hand, and ensures you never pay tax on money you have not received. Accrual accounting is only worth considering if you have complex business operations, large inventory, or are approaching the $10 million turnover threshold.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Which Method Should Australian Freelancers Use? */}
        <section id="which-method-freelancers">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold">3</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Which Method Should Australian Freelancers Use?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              The ATO allows businesses with <strong className="text-white">annual turnover under $10 million</strong> to choose cash basis accounting. Since most sole traders and freelancers earn well below this threshold, the choice is yours. Here is why most freelancers should choose cash basis &mdash; and when accrual might make more sense.
            </p>

            <h3 className="text-lg font-semibold text-white mt-8 mb-3">Why Cash Basis Is Usually the Right Choice</h3>

            <ul className="space-y-3 ml-1">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-300"><strong className="text-white">Simpler record keeping:</strong> You only need to track when money comes in and goes out. No need to manage <Link href="/glossary/accounts-receivable" className="text-amber-400 underline decoration-amber-400/30 hover:decoration-amber-400 transition-colors">accounts receivable</Link> or accounts payable ledgers &mdash; your bank statements essentially are your books.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-300"><strong className="text-white">Tax timing advantage:</strong> You do not pay <Link href="/glossary/income-tax" className="text-amber-400 underline decoration-amber-400/30 hover:decoration-amber-400 transition-colors">income tax</Link> or GST on unpaid invoices. If a client takes 90 days to pay, you defer your tax obligation until the cash actually arrives. This is a real cash flow benefit.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-300"><strong className="text-white">Aligns with actual cash flow:</strong> Your books reflect the real money in your bank account, making it easier to manage day-to-day finances, set aside tax, and plan spending.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-300"><strong className="text-white">Lower accountant costs:</strong> Cash basis books are faster and cheaper for accountants to review, reconcile, and lodge. Accrual books with adjusting entries cost more to maintain.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-300"><strong className="text-white">No bad debt complications:</strong> If a client never pays, you never recorded the income in the first place. On accrual basis, you would need to write off the <Link href="/glossary/bad-debt" className="text-amber-400 underline decoration-amber-400/30 hover:decoration-amber-400 transition-colors">bad debt</Link> and potentially claim back GST already remitted.</span>
              </li>
            </ul>

            <h3 className="text-lg font-semibold text-white mt-8 mb-3">When to Consider Accrual Accounting</h3>
            <p className="text-gray-300 leading-relaxed">
              There are specific situations where accrual accounting may be the better fit, even for small businesses:
            </p>

            <ul className="space-y-3 ml-1 mt-4">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                </svg>
                <span className="text-gray-300"><strong className="text-white">Large inventory:</strong> If you sell physical products and hold significant stock, accrual accounting better matches the cost of goods sold with the revenue they generate.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                </svg>
                <span className="text-gray-300"><strong className="text-white">Complex contracts:</strong> Long-term contracts with milestone payments, progress billing, or revenue recognition rules may require accrual accounting for accuracy.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                </svg>
                <span className="text-gray-300"><strong className="text-white">Preparing for investment or sale:</strong> Investors and buyers want accrual-based financial statements because they give a truer picture of the business&apos;s financial position.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                </svg>
                <span className="text-gray-300"><strong className="text-white">Approaching $10M turnover:</strong> If your business is growing rapidly and you may exceed the $10 million threshold, transitioning to accrual early avoids a disruptive mid-year switch.</span>
              </li>
            </ul>

            <h3 className="text-lg font-semibold text-white mt-8 mb-3">Decision Framework: 5 Questions</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Answer these five questions to determine which method is right for you:
            </p>

            <div className="space-y-3">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <div className="flex items-center gap-3 mb-2">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 text-xs font-bold">1</span>
                  <h4 className="text-white font-medium">Is your annual turnover under $10 million?</h4>
                </div>
                <p className="text-sm text-gray-400 ml-10">If yes, you can choose either method. If no, you must use accrual.</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <div className="flex items-center gap-3 mb-2">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 text-xs font-bold">2</span>
                  <h4 className="text-white font-medium">Do you sell services rather than physical products?</h4>
                </div>
                <p className="text-sm text-gray-400 ml-10">Service-based businesses almost always benefit from cash basis. Product businesses with inventory may need accrual.</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <div className="flex items-center gap-3 mb-2">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 text-xs font-bold">3</span>
                  <h4 className="text-white font-medium">Do clients typically pay after you invoice (not upfront)?</h4>
                </div>
                <p className="text-sm text-gray-400 ml-10">If clients pay late, cash basis protects you from paying tax before you receive the income. This is a strong argument for cash basis.</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <div className="flex items-center gap-3 mb-2">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 text-xs font-bold">4</span>
                  <h4 className="text-white font-medium">Are you seeking external investment or planning to sell?</h4>
                </div>
                <p className="text-sm text-gray-400 ml-10">If yes, accrual-based financial statements are preferred by investors and buyers. If no, cash basis is fine.</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <div className="flex items-center gap-3 mb-2">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 text-xs font-bold">5</span>
                  <h4 className="text-white font-medium">Do you want to minimise bookkeeping time and cost?</h4>
                </div>
                <p className="text-sm text-gray-400 ml-10">Cash basis is significantly less time-consuming to maintain. If you want simplicity and lower accountant fees, cash basis wins.</p>
              </div>
            </div>

            <div className="rounded-xl bg-amber-500/5 border border-amber-500/20 p-5 mt-6">
              <p className="text-amber-400 font-medium mb-2">Recommendation</p>
              <p className="text-gray-400 text-sm">
                If you answered &quot;yes&quot; to questions 1, 2, 3, and 5 &mdash; and &quot;no&quot; to question 4 &mdash; <strong className="text-gray-200">cash basis accounting is the right choice for you</strong>. This covers the vast majority of Australian freelancers, consultants, and sole traders.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Cash Basis Accounting for BAS & GST */}
        <section id="cash-basis-bas-gst">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold">4</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Cash Basis Accounting for BAS &amp; GST</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Your choice of accounting method directly affects how and when you report <Link href="/glossary/gst" className="text-amber-400 underline decoration-amber-400/30 hover:decoration-amber-400 transition-colors">GST</Link> on your <Link href="/glossary/bas" className="text-amber-400 underline decoration-amber-400/30 hover:decoration-amber-400 transition-colors">Business Activity Statement (BAS)</Link>. If you use cash basis for income tax, you should also use cash basis for GST reporting to keep everything consistent.
            </p>

            <h3 className="text-lg font-semibold text-white mt-8 mb-3">How Cash Basis Affects GST Reporting</h3>
            <p className="text-gray-300 leading-relaxed">
              On cash basis GST reporting:
            </p>
            <ul className="space-y-3 ml-1 mt-2">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-300"><strong className="text-white">GST on sales (label 1A):</strong> You report GST on income <em>when payment is received</em> from clients, not when you send the invoice.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-300"><strong className="text-white"><Link href="/glossary/input-tax-credits" className="text-amber-400 underline decoration-amber-400/30 hover:decoration-amber-400 transition-colors">Input tax credits</Link> (label 1B):</strong> You claim GST credits on purchases <em>when you actually pay</em> the supplier, not when you receive the invoice.</span>
              </li>
            </ul>

            <p className="text-gray-300 leading-relaxed mt-4">
              This means your BAS can show different numbers than your invoicing records. If you issued $50,000 in invoices during the quarter but only received $35,000 in payments, your BAS only reports GST on the $35,000 received.
            </p>

            <h3 className="text-lg font-semibold text-white mt-8 mb-3">BAS Labels Affected by Cash Basis</h3>
            <div className="space-y-3 mt-4">
              <div className="rounded-xl bg-gray-800/50 border border-amber-500/20 p-5">
                <div className="flex items-center gap-3 mb-2">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 text-xs font-bold">G1</span>
                  <h4 className="text-white font-medium">Total Sales</h4>
                </div>
                <p className="text-sm text-gray-400">On cash basis: report only the total amount received from clients during the period, not total invoiced. Include GST-inclusive amounts.</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-amber-500/20 p-5">
                <div className="flex items-center gap-3 mb-2">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 text-xs font-bold">1A</span>
                  <h4 className="text-white font-medium">GST on Sales</h4>
                </div>
                <p className="text-sm text-gray-400">On cash basis: the GST component of payments received. Calculate as total payments received &divide; 11 (for GST-inclusive amounts).</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-amber-500/20 p-5">
                <div className="flex items-center gap-3 mb-2">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 text-xs font-bold">1B</span>
                  <h4 className="text-white font-medium">GST on Purchases</h4>
                </div>
                <p className="text-sm text-gray-400">On cash basis: the GST component of expenses you actually paid during the period. Only include payments made, not invoices received but unpaid.</p>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8 mb-3">Worked Example: Cash vs Accrual BAS for the Same Quarter</h3>
            <p className="text-gray-300 leading-relaxed">
              Let&apos;s look at how the same quarter looks on a BAS under each method. Freelance web developer, Q2 (October&ndash;December):
            </p>

            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 mt-4">
              <div className="text-sm space-y-3">
                <p className="text-gray-300 font-medium">Quarter Activity:</p>
                <ul className="space-y-1 text-gray-400 ml-4 list-disc">
                  <li>Invoiced clients: <strong className="text-white">$44,000</strong> (inc. GST)</li>
                  <li>Payments received from clients: <strong className="text-white">$33,000</strong> (inc. GST) &mdash; $11,000 still outstanding</li>
                  <li>Supplier invoices received: <strong className="text-white">$8,800</strong> (inc. GST)</li>
                  <li>Supplier invoices actually paid: <strong className="text-white">$5,500</strong> (inc. GST) &mdash; $3,300 unpaid</li>
                </ul>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              <div className="rounded-xl bg-gray-800/50 border border-amber-500/30 p-5">
                <h4 className="text-amber-400 font-semibold mb-4">Cash Basis BAS</h4>
                <div className="text-sm space-y-2">
                  <div className="flex justify-between text-gray-400">
                    <span>G1 (Total sales)</span>
                    <span className="text-white">$33,000</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>1A (GST on sales)</span>
                    <span className="text-white">$3,000</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>1B (GST on purchases)</span>
                    <span className="text-white">$500</span>
                  </div>
                  <div className="flex justify-between border-t border-gray-700 pt-2 mt-2">
                    <span className="text-white font-medium">Net GST payable</span>
                    <span className="text-amber-400 font-bold">$2,500</span>
                  </div>
                </div>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-orange-500/30 p-5">
                <h4 className="text-orange-400 font-semibold mb-4">Accrual Basis BAS</h4>
                <div className="text-sm space-y-2">
                  <div className="flex justify-between text-gray-400">
                    <span>G1 (Total sales)</span>
                    <span className="text-white">$44,000</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>1A (GST on sales)</span>
                    <span className="text-white">$4,000</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>1B (GST on purchases)</span>
                    <span className="text-white">$800</span>
                  </div>
                  <div className="flex justify-between border-t border-gray-700 pt-2 mt-2">
                    <span className="text-white font-medium">Net GST payable</span>
                    <span className="text-orange-400 font-bold">$3,200</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-amber-500/5 border border-amber-500/20 p-5 mt-6">
              <p className="text-amber-400 font-medium mb-2">The Difference: $700</p>
              <p className="text-gray-400 text-sm">
                On cash basis, this freelancer owes <strong className="text-gray-200">$2,500 in GST</strong> this quarter. On accrual basis, they would owe <strong className="text-gray-200">$3,200</strong> &mdash; a $700 difference. That $700 represents GST on the $11,000 in unpaid invoices minus the $300 GST credit on unpaid supplier bills. The freelancer still owes this GST eventually (when clients pay), but on cash basis, the obligation is deferred until the money arrives.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Cash Basis Accounting Best Practices */}
        <section id="best-practices">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold">5</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Cash Basis Accounting Best Practices</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Even though cash basis accounting is simpler than accrual, it still requires discipline to maintain accurate records. Follow these eight best practices to keep your books clean and your <Link href="/glossary/bas" className="text-amber-400 underline decoration-amber-400/30 hover:decoration-amber-400 transition-colors">BAS</Link> accurate:
            </p>

            <div className="space-y-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 text-sm font-bold">1</span>
                  <h3 className="text-lg font-semibold text-white">Reconcile Bank Statements Weekly</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Since cash basis accounting is tied to actual bank transactions, <strong className="text-gray-200">weekly bank reconciliation is essential</strong>. Compare your accounting records against your bank statement every week. This catches errors, missed transactions, and duplicate entries before they snowball. Monthly reconciliation is too infrequent &mdash; by the time you catch an error, you may have already lodged an incorrect BAS.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 text-sm font-bold">2</span>
                  <h3 className="text-lg font-semibold text-white">Separate Business and Personal Accounts</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  This is non-negotiable for any accounting method, but especially important for cash basis. All business income should flow into a <strong className="text-gray-200">dedicated business bank account</strong>, and all business expenses should be paid from that account. Mixing personal and business transactions makes reconciliation a nightmare and is a red flag for ATO audits.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 text-sm font-bold">3</span>
                  <h3 className="text-lg font-semibold text-white">Track Invoices AND Payments Separately</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Even though cash basis only records transactions when cash changes hands, you still need to <strong className="text-gray-200">track outstanding invoices</strong>. Why? Because you need to know how much money is owed to you (for cash flow forecasting) and because the ATO may ask to see your invoicing records. Maintain an invoice register alongside your cash records.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 text-sm font-bold">4</span>
                  <h3 className="text-lg font-semibold text-white">Maintain a Cash Flow Forecast</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  One limitation of cash basis is that your books only show what has <em>already</em> happened, not what is coming. Maintain a simple <Link href="/glossary/cash-flow" className="text-amber-400 underline decoration-amber-400/30 hover:decoration-amber-400 transition-colors">cash flow forecast</Link> that projects expected payments from outstanding invoices and upcoming expenses. This gives you the forward visibility that cash basis accounting alone does not provide.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 text-sm font-bold">5</span>
                  <h3 className="text-lg font-semibold text-white">Set Aside Tax from Each Payment Received</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  The <strong className="text-gray-200">30% rule of thumb</strong>: every time you receive a payment, immediately transfer 30% to a separate savings account for tax. This covers your income tax, GST, and any Medicare levy. Cash basis makes this easy because you set aside tax on actual cash received, not projected income. Never spend the full amount of a payment &mdash; the ATO&apos;s portion is not your money.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 text-sm font-bold">6</span>
                  <h3 className="text-lg font-semibold text-white">Record Expense Date as Payment Date</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  On cash basis, the date of an expense is the date <strong className="text-gray-200">you paid for it</strong> &mdash; not the date on the supplier invoice. If you receive an invoice dated 15 November but pay it on 3 December, the expense is recorded on 3 December. This is a common error that can shift expenses between quarters and affect your BAS.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 text-sm font-bold">7</span>
                  <h3 className="text-lg font-semibold text-white">Use Accounting Software, Not Spreadsheets</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Spreadsheets are error-prone and lack the automation that modern accounting software provides. Use dedicated <Link href="/glossary/bookkeeping" className="text-amber-400 underline decoration-amber-400/30 hover:decoration-amber-400 transition-colors">bookkeeping</Link> software (or InvoiceFlow) that supports cash basis accounting. It will automatically track payment dates, calculate GST components, generate BAS summaries, and maintain an audit trail &mdash; all things that spreadsheets cannot do reliably.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 text-sm font-bold">8</span>
                  <h3 className="text-lg font-semibold text-white">Review Quarterly Before BAS Lodgement</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Before lodging each BAS, do a thorough review: reconcile your bank account for the full quarter, verify that all income and expenses are recorded on the correct payment dates, check that GST components are calculated correctly, and confirm that no personal expenses have been included. This 30-minute review can save you from costly BAS amendments and ATO penalties.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: How InvoiceFlow Supports Cash Basis Accounting */}
        <section id="invoiceflow-cash-basis">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold">6</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">How InvoiceFlow Supports Cash Basis Accounting</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              InvoiceFlow is built from the ground up for Australian freelancers and sole traders who use cash basis accounting. Every feature is designed around the cash basis workflow &mdash; tracking when money actually moves, not when invoices are issued.
            </p>

            <div className="space-y-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Payment-Date Recording</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  InvoiceFlow records income on the <strong className="text-gray-200">date payment is received</strong>, not the invoice date. When a client pays an invoice, InvoiceFlow automatically timestamps the transaction and assigns it to the correct BAS quarter. No manual date juggling &mdash; the system handles cash basis timing by default.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Real-Time Cash Position</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Your dashboard shows your <strong className="text-gray-200">actual cash position at all times</strong> &mdash; money in the bank, not money owed. InvoiceFlow separates &quot;invoiced&quot; from &quot;received&quot; so you always know exactly how much cash you have available, how much is outstanding, and what your true financial position is right now.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">BAS-Ready Reports on Cash Received</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  At the end of each quarter, InvoiceFlow generates a <strong className="text-gray-200">BAS summary based entirely on actual cash received and expenses paid</strong>. Your 1A (GST on sales) and 1B (GST on purchases) figures are calculated from payment dates, not invoice dates. Copy the numbers straight into your BAS or hand the report to your accountant &mdash; no manual reconciliation needed.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Income vs Invoiced Tracking</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  InvoiceFlow gives you <strong className="text-gray-200">two views of your revenue</strong>: total invoiced (what you have billed) and total received (what you have actually been paid). This dual view is essential for cash basis freelancers &mdash; your books report on cash received, but you still need to track outstanding invoices for follow-up and cash flow forecasting.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Expense Payment Tracking</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Record expenses with their actual <strong className="text-gray-200">payment date</strong>, not the supplier invoice date. InvoiceFlow ensures every expense is assigned to the correct BAS quarter based on when you paid, maintaining cash basis accuracy. If you receive a December invoice but pay in January, the expense automatically falls in the January quarter.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-amber-500/30 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Quarterly P&amp;L on Cash Basis</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  InvoiceFlow generates a <Link href="/glossary/profit-and-loss" className="text-amber-400 underline decoration-amber-400/30 hover:decoration-amber-400 transition-colors">profit and loss statement</Link> based on <strong className="text-gray-200">actual cash received and cash paid</strong>. This gives you a true picture of your profitability on a cash basis &mdash; how much money you actually received versus how much you actually spent. No inflated revenue from unpaid invoices, no phantom expenses from bills you have not paid yet.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Cross-Links Section */}
      <section className="max-w-4xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-white mb-2 text-center">Related Glossary Terms</h2>
        <p className="text-gray-400 text-center mb-8">Explore related accounting and tax concepts for Australian freelancers.</p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {[
            { href: '/glossary/bas', label: 'BAS' },
            { href: '/glossary/gst', label: 'GST' },
            { href: '/glossary/income-tax', label: 'Income Tax' },
            { href: '/glossary/profit-and-loss', label: 'Profit & Loss' },
            { href: '/glossary/accounts-receivable', label: 'Accounts Receivable' },
            { href: '/glossary/cash-flow', label: 'Cash Flow' },
            { href: '/glossary/input-tax-credits', label: 'Input Tax Credits' },
          ].map((term) => (
            <Link
              key={term.href}
              href={term.href}
              className="group flex items-center gap-2 p-3 rounded-xl bg-gray-800/40 border border-gray-700/40 hover:border-amber-500/40 transition-all duration-300"
            >
              <svg className="w-4 h-4 text-amber-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
              <span className="text-gray-300 text-sm group-hover:text-amber-400 transition-colors">{term.label}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Related Tools */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-white mb-2 text-center">Related Tools</h2>
        <p className="text-gray-400 text-center mb-8">Free tools to help you manage cash basis accounting and BAS reporting.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {relatedTools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:border-amber-500/50 hover:bg-gray-800/80 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-4">
                {tool.icon}
              </div>
              <h3 className="text-white font-medium mb-2 group-hover:text-amber-400 transition-colors">{tool.name}</h3>
              <p className="text-sm text-gray-400">{tool.description}</p>
              <div className="mt-4 text-amber-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
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
        <p className="text-gray-400 text-center mb-8">In-depth guides on accounting, tax, and invoicing for Australian freelancers.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {relatedGuides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group p-6 rounded-2xl bg-gray-800/40 border border-gray-700/40 hover:border-amber-500/40 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h3 className="text-white font-medium mb-2 group-hover:text-amber-400 transition-colors">{guide.name}</h3>
              <p className="text-sm text-gray-400">{guide.description}</p>
              <div className="mt-4 text-amber-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
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
              <summary className="flex items-center justify-between cursor-pointer px-6 py-4 text-white font-medium hover:text-amber-400 transition-colors">
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
        <div className="rounded-2xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20 p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Cash Basis Accounting Made Effortless
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            InvoiceFlow tracks payments as they happen, generates BAS-ready reports on actual cash received, and gives you a real-time view of your cash position. Stop guessing &mdash; know exactly where you stand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button>Start Free &mdash; No Card Required</Button>
            </Link>
            <Link href="/tools/bas-preparation-checklist">
              <Button variant="secondary">Try the BAS Checklist</Button>
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
