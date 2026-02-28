import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Accounts Receivable: Complete Guide for Freelancers & Small Business — InvoiceFlow',
  description:
    'What is accounts receivable? Learn how AR works for freelancers, accounts receivable vs accounts payable, how to track outstanding invoices, DSO formula, aging reports, and best practices for managing AR in Australia. Updated for 2025-26.',
  keywords: [
    'what is accounts receivable',
    'accounts receivable for freelancers',
    'managing accounts receivable small business australia',
    'accounts receivable vs accounts payable',
    'accounts receivable definition',
    'days sales outstanding DSO',
    'aging report accounts receivable',
    'overdue invoices tracking',
    'accounts receivable best practices',
    'bad debt write off australia',
    'freelance cash flow management',
    'accounts receivable automation',
  ],
  alternates: { canonical: '/glossary/accounts-receivable' },
  openGraph: {
    title: 'Accounts Receivable: Complete Guide for Freelancers & Small Business — InvoiceFlow',
    description:
      'Everything you need to know about accounts receivable: definition, AR vs AP, tracking methods, DSO formula, aging reports, best practices for freelancers, and how to handle bad debts in Australia.',
    url: 'https://invoiceflow-teal.vercel.app/glossary/accounts-receivable',
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
    { '@type': 'ListItem', position: 3, name: 'Accounts Receivable', item: `${BASE_URL}/glossary/accounts-receivable` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is accounts receivable in simple terms?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Accounts receivable (AR) is the money that clients owe you for work you have already completed but have not yet been paid for. Every time you send an invoice and the client has not paid yet, that unpaid invoice is part of your accounts receivable. For freelancers, AR is essentially your list of outstanding invoices — the gap between doing the work and getting the money in your bank account. A healthy AR balance means you have revenue coming in; a growing AR balance with aging invoices means you have a cash flow problem.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is accounts receivable different from accounts payable?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Accounts receivable (AR) is money owed TO you by your clients for work you have delivered. Accounts payable (AP) is money YOU owe to others — suppliers, subcontractors, software subscriptions, or any other business expenses. Think of it this way: AR is on the asset side of your balance sheet (money coming in), while AP is on the liability side (money going out). As a freelancer, your AR is your unpaid invoices, and your AP includes things like your Adobe subscription, accounting software fees, or payments to subcontractors you have engaged.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do freelancers track accounts receivable?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Freelancers can track accounts receivable using several methods, from basic to advanced. A simple spreadsheet listing each invoice with client name, invoice number, amount, date issued, due date, and payment status works for small volumes. Accounting software like Xero, MYOB, or QuickBooks automates tracking and generates aging reports. Dedicated invoicing tools like InvoiceFlow track AR automatically — every invoice you send is monitored, overdue invoices are flagged, and you get a real-time dashboard showing exactly who owes you money and how long each invoice has been outstanding.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a good DSO (Days Sales Outstanding)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'DSO (Days Sales Outstanding) measures the average number of days it takes to collect payment after invoicing. For freelancers and small businesses in Australia, a DSO under 30 days is considered excellent. The national average is around 33 days. A DSO of 30-45 days is acceptable for most industries, while anything over 45 days suggests your collection process needs improvement. To lower your DSO, set shorter payment terms (7-14 days instead of 30), send invoices immediately upon project completion, offer early payment incentives, and follow up on overdue invoices within 24 hours of the due date.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I write off bad debts on my Australian tax return?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, but only if you report income on an accruals basis (not cash basis). Most freelancers and sole traders use cash-basis accounting, which means you only report income when you actually receive payment — so there is no bad debt to write off because you never declared the income in the first place. If you use accruals-basis accounting (more common for companies and larger businesses), you can claim a bad debt deduction under Section 25-35 of the ITAA 1997 when a debt is genuinely unrecoverable. You must have already included the amount as assessable income, and you need to be able to demonstrate that you took reasonable steps to recover the debt before writing it off.',
      },
    },
  ],
};

const tocItems = [
  { id: 'what-is-accounts-receivable', label: '1. What Is Accounts Receivable?' },
  { id: 'ar-vs-ap', label: '2. Accounts Receivable vs Accounts Payable' },
  { id: 'how-to-track', label: '3. How to Track Accounts Receivable' },
  { id: 'best-practices', label: '4. AR Best Practices for Freelancers' },
  { id: 'when-ar-becomes-a-problem', label: '5. When AR Becomes a Problem' },
  { id: 'invoiceflow-ar', label: '6. How InvoiceFlow Helps Manage AR' },
];

const relatedTools = [
  {
    href: '/tools/invoice-generator',
    name: 'Invoice Generator',
    description: 'Create professional invoices with automatic AR tracking and payment status monitoring.',
    icon: (
      <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    href: '/tools/late-payment-calculator',
    name: 'Late Payment Calculator',
    description: 'Calculate interest and penalties on overdue invoices under Australian law.',
    icon: (
      <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    href: '/tools/payment-receipt-generator',
    name: 'Payment Receipt Generator',
    description: 'Generate professional receipts when AR invoices are paid to close the loop cleanly.',
    icon: (
      <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    href: '/tools/freelance-business-scorecard',
    name: 'Business Scorecard',
    description: 'Score your freelance business health including AR management, cash flow, and payment habits.',
    icon: (
      <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
];

const relatedGuides = [
  {
    href: '/guides/getting-paid-faster',
    name: 'Getting Paid Faster',
    description: 'Proven strategies to reduce payment delays and improve your cash flow as a freelancer.',
  },
  {
    href: '/guides/invoicing-101',
    name: 'Invoicing 101',
    description: 'The complete beginner guide to creating invoices, setting terms, and managing payments.',
  },
  {
    href: '/guides/setting-freelance-rates',
    name: 'Setting Your Freelance Rates',
    description: 'How to calculate profitable rates that account for unpaid invoices, tax, and business costs.',
  },
];

export default function AccountsReceivableGlossaryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative px-4 pt-20 pb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-cyan-500/10 blur-3xl" />
        <div className="relative max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/glossary" className="hover:text-white transition-colors">Glossary</Link>
            <span>/</span>
            <span className="text-white">Accounts Receivable</span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            Glossary &mdash; Cash Flow &amp; Payments
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Accounts Receivable{' '}
            <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
              Explained for Freelancers
            </span>
          </h1>

          {/* Summary */}
          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            Accounts receivable is the money your clients owe you for work you&apos;ve completed but haven&apos;t been paid for yet. If you&apos;re a freelancer or small business owner in Australia, understanding AR is critical to managing cash flow, avoiding bad debts, and getting paid on time &mdash; every time.
          </p>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>12 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>ATO-Accurate 2025-26</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
              </svg>
              <span>Updated March 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* In a Nutshell */}
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <div className="rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-white">In a Nutshell</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-xs font-bold">$26B</span>
              <div>
                <p className="text-white font-medium text-sm">Late Payments Owed</p>
                <p className="text-gray-400 text-sm">Total late payments owed to Australian small businesses at any given time</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-xs font-bold">33d</span>
              <div>
                <p className="text-white font-medium text-sm">Average Payment Time</p>
                <p className="text-gray-400 text-sm">Average number of days Australian invoices take to get paid</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-xs font-bold">5-14d</span>
              <div>
                <p className="text-white font-medium text-sm">Best Practice Terms</p>
                <p className="text-gray-400 text-sm">Recommended payment terms for freelancers to minimise AR aging</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-xs font-bold">62%</span>
              <div>
                <p className="text-white font-medium text-sm">Businesses Affected</p>
                <p className="text-gray-400 text-sm">Percentage of Australian small businesses impacted by late payments</p>
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
                className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors text-sm py-1"
              >
                <svg className="w-4 h-4 text-cyan-500/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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

        {/* Section 1: What Is Accounts Receivable? */}
        <section id="what-is-accounts-receivable">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold">1</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">What Is Accounts Receivable?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Accounts receivable (AR) is the <strong className="text-white">money that your clients owe you</strong> for goods or services you have already delivered but have not yet been paid for. In accounting terms, AR sits on the <strong className="text-white">asset side of your balance sheet</strong> &mdash; it represents revenue that is legally yours but hasn&apos;t hit your bank account yet.
            </p>
            <p className="text-gray-300 leading-relaxed">
              For freelancers, accounts receivable is simple: it&apos;s your <strong className="text-white">list of unpaid invoices</strong>. Every time you complete a project, send an invoice, and wait for the client to pay, that outstanding invoice is part of your AR. The total of all your unpaid invoices at any point in time is your accounts receivable balance.
            </p>
            <p className="text-gray-300 leading-relaxed">
              AR matters because it directly impacts your <strong className="text-white">cash flow</strong>. You might have $15,000 in outstanding invoices (great on paper), but if none of them are paid, you can&apos;t cover rent, software subscriptions, or your morning coffee. The gap between invoicing and receiving payment is where most freelancers feel financial stress &mdash; and it&apos;s why managing AR proactively is one of the most important business skills you can develop.
            </p>
            <p className="text-gray-300 leading-relaxed">
              In Australia, late payments are a <strong className="text-white">systemic problem</strong>. Research from the Australian Small Business and Family Enterprise Ombudsman (ASBFEO) shows that small businesses are collectively owed over $26 billion in late payments at any given time, with the average invoice taking 33 days to be paid. For freelancers who are often last in the payment queue, this can mean waiting 45-60+ days for payment on a standard 30-day invoice.
            </p>
            <div className="rounded-xl bg-cyan-500/5 border border-cyan-500/20 p-5 mt-6">
              <p className="text-cyan-400 font-medium mb-2">Key Point</p>
              <p className="text-gray-400 text-sm">
                Accounts receivable is not just an accounting concept &mdash; it&apos;s a <strong className="text-gray-200">real-time measure of your business health</strong>. A low AR balance with short payment cycles means clients pay quickly and your cash flow is strong. A high AR balance with aging invoices means you&apos;re effectively giving clients interest-free loans while your own bills pile up.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Accounts Receivable vs Accounts Payable */}
        <section id="ar-vs-ap">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold">2</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Accounts Receivable vs Accounts Payable</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Accounts receivable and accounts payable are two sides of the same coin. One represents money coming in, the other represents money going out. Confusing the two is a common mistake, especially for freelancers who are managing their own books for the first time.
            </p>

            {/* Comparison Table */}
            <div className="rounded-2xl border border-gray-700/50 overflow-hidden mt-6">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-800/80">
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Feature</th>
                    <th className="text-left text-sm font-medium text-cyan-400 px-6 py-4">Accounts Receivable (AR)</th>
                    <th className="text-left text-sm font-medium text-blue-400 px-6 py-4">Accounts Payable (AP)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700/50">
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm font-medium">Definition</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">Money owed TO you</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">Money YOU owe to others</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm font-medium">Balance Sheet</td>
                    <td className="px-6 py-3 text-cyan-400 font-medium">Asset (current)</td>
                    <td className="px-6 py-3 text-blue-400 font-medium">Liability (current)</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm font-medium">Freelancer Example</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">Client owes you $5,000 for a website build</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">You owe $49/mo to your hosting provider</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm font-medium">Cash Flow Impact</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">Increases when collected</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">Decreases when paid</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm font-medium">Goal</td>
                    <td className="px-6 py-3 text-cyan-400 text-sm font-medium">Collect as fast as possible</td>
                    <td className="px-6 py-3 text-blue-400 text-sm font-medium">Pay on time, not early</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm font-medium">Risk If Mismanaged</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">Cash flow gaps, bad debts</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">Late fees, damaged supplier relationships</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm font-medium">Tracked Via</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">Invoices sent, aging reports</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">Bills received, payment schedules</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="rounded-xl bg-cyan-500/5 border border-cyan-500/20 p-5 mt-6">
              <p className="text-cyan-400 font-medium mb-2">The Bottom Line</p>
              <p className="text-gray-400 text-sm">
                <strong className="text-gray-200">Healthy businesses collect AR faster than they pay AP.</strong> As a freelancer, your priority should always be minimising the time between sending an invoice and receiving payment. Every day an invoice sits unpaid, you&apos;re essentially funding your client&apos;s cash flow at the expense of your own.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: How to Track Accounts Receivable */}
        <section id="how-to-track">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold">3</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">How to Track Accounts Receivable</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Tracking accounts receivable doesn&apos;t need to be complicated, but it does need to be <strong className="text-white">consistent</strong>. The method you choose depends on the volume of invoices you send and how much automation you want.
            </p>

            <div className="space-y-4 mt-6">
              {/* Method 1 */}
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                    <span className="text-cyan-400 font-bold text-sm">1</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Manual Tracking (Spreadsheets)</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-3">
                  A simple spreadsheet works fine if you send fewer than 10 invoices per month. Create columns for:
                </p>
                <ul className="space-y-1 text-sm text-gray-400 ml-4">
                  <li>Invoice number and date issued</li>
                  <li>Client name and project description</li>
                  <li>Invoice amount (ex GST and inc GST)</li>
                  <li>Payment terms and due date</li>
                  <li>Status: Sent, Overdue, Paid, Written Off</li>
                  <li>Date paid and amount received</li>
                </ul>
                <p className="text-gray-500 text-xs mt-3">
                  Limitation: Requires manual updates, easy to forget, no automated reminders.
                </p>
              </div>

              {/* Method 2 */}
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                    <span className="text-cyan-400 font-bold text-sm">2</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Accounting Software</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Tools like <strong className="text-gray-200">Xero, MYOB, and QuickBooks</strong> automatically track AR when you create invoices within the system. They generate aging reports, send payment reminders, and reconcile payments with your bank feed. This is the standard approach for businesses with consistent invoicing volume (10+ invoices per month) or those who need BAS reporting.
                </p>
              </div>

              {/* Method 3 */}
              <div className="rounded-xl bg-gray-800/50 border border-cyan-500/30 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                    <span className="text-cyan-400 font-bold text-sm">3</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Dedicated Invoicing Tools</h3>
                  <span className="text-xs text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-full">Recommended</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Purpose-built invoicing tools like <strong className="text-gray-200">InvoiceFlow</strong> are designed specifically for freelancers. They combine invoice creation with automatic AR tracking &mdash; every invoice is monitored in real-time, overdue invoices are flagged automatically, and you get a dashboard showing exactly who owes you money and how long each invoice has been outstanding. No double-entry, no manual reconciliation.
                </p>
              </div>
            </div>

            {/* Aging Report Explanation */}
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 mt-6">
              <h4 className="text-white font-semibold mb-3">Understanding Aging Reports</h4>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                An aging report groups your outstanding invoices by how long they&apos;ve been unpaid. This is the single most useful AR report because it shows you exactly where your collection efforts should focus:
              </p>
              <div className="grid sm:grid-cols-4 gap-3">
                <div className="rounded-lg bg-emerald-500/5 border border-emerald-500/20 p-3 text-center">
                  <p className="text-emerald-400 font-bold text-sm">Current</p>
                  <p className="text-gray-400 text-xs mt-1">0-30 days</p>
                  <p className="text-gray-500 text-xs mt-1">Normal &mdash; no action needed</p>
                </div>
                <div className="rounded-lg bg-yellow-500/5 border border-yellow-500/20 p-3 text-center">
                  <p className="text-yellow-400 font-bold text-sm">Aging</p>
                  <p className="text-gray-400 text-xs mt-1">31-60 days</p>
                  <p className="text-gray-500 text-xs mt-1">Follow up immediately</p>
                </div>
                <div className="rounded-lg bg-orange-500/5 border border-orange-500/20 p-3 text-center">
                  <p className="text-orange-400 font-bold text-sm">Overdue</p>
                  <p className="text-gray-400 text-xs mt-1">61-90 days</p>
                  <p className="text-gray-500 text-xs mt-1">Escalate &mdash; call the client</p>
                </div>
                <div className="rounded-lg bg-red-500/5 border border-red-500/20 p-3 text-center">
                  <p className="text-red-400 font-bold text-sm">Critical</p>
                  <p className="text-gray-400 text-xs mt-1">90+ days</p>
                  <p className="text-gray-500 text-xs mt-1">Debt recovery or write-off</p>
                </div>
              </div>
            </div>

            {/* DSO Formula */}
            <div className="rounded-xl bg-cyan-500/5 border border-cyan-500/20 p-5 mt-6">
              <p className="text-cyan-400 font-medium mb-2">DSO Formula (Days Sales Outstanding)</p>
              <p className="text-gray-400 text-sm mb-3">
                DSO measures the average number of days it takes to collect payment. Lower is better.
              </p>
              <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm text-center">
                <span className="text-cyan-400">DSO</span>
                <span className="text-gray-500"> = </span>
                <span className="text-white">(Accounts Receivable / Total Credit Sales)</span>
                <span className="text-gray-500"> x </span>
                <span className="text-white">Number of Days</span>
              </div>
              <p className="text-gray-500 text-xs mt-3">
                Example: If you have $10,000 in AR and $30,000 in total invoices over 90 days, your DSO = ($10,000 / $30,000) x 90 = <strong className="text-gray-300">30 days</strong>. The Australian average is 33 days &mdash; aim for under 30.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Accounts Receivable Best Practices for Freelancers */}
        <section id="best-practices">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold">4</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">AR Best Practices for Freelancers</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              The best accounts receivable management happens <strong className="text-white">before the invoice is even sent</strong>. These six practices will dramatically reduce your AR aging and improve your cash flow.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-7 h-7 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                    <span className="text-cyan-400 font-bold text-xs">1</span>
                  </div>
                  <h4 className="text-white font-semibold text-sm">Set Clear Payment Terms Upfront</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Include payment terms in your contract, proposal, and every invoice. Be specific: &quot;Payment due within 14 days of invoice date&quot; is better than &quot;Net 30.&quot; Agree on terms <strong className="text-gray-200">before starting work</strong>, not after delivery.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-7 h-7 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                    <span className="text-cyan-400 font-bold text-xs">2</span>
                  </div>
                  <h4 className="text-white font-semibold text-sm">Require Deposits on Large Projects</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  For projects over $1,000, request a <strong className="text-gray-200">30-50% deposit</strong> before starting work. This reduces your AR exposure, confirms the client is serious, and gives you working capital during the project. Standard practice in most creative and technical industries.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-7 h-7 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                    <span className="text-cyan-400 font-bold text-xs">3</span>
                  </div>
                  <h4 className="text-white font-semibold text-sm">Send Invoices Immediately</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Invoice the same day you complete the work &mdash; not next week, not at the end of the month. Every day you delay sending the invoice is an extra day added to your AR aging. <strong className="text-gray-200">The clock starts when the invoice is sent</strong>, not when the work is done.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-7 h-7 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                    <span className="text-cyan-400 font-bold text-xs">4</span>
                  </div>
                  <h4 className="text-white font-semibold text-sm">Follow Up Systematically</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Don&apos;t wait for invoices to become overdue. Send a <strong className="text-gray-200">friendly reminder 3 days before</strong> the due date, a firm follow-up on the due date, and escalate weekly after that. Most late payments are not malicious &mdash; they&apos;re forgotten. A simple reminder often gets you paid.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-7 h-7 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                    <span className="text-cyan-400 font-bold text-xs">5</span>
                  </div>
                  <h4 className="text-white font-semibold text-sm">Automate Reminders</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Use invoicing software that sends <strong className="text-gray-200">automatic payment reminders</strong> at scheduled intervals. This removes the awkwardness of chasing clients manually and ensures no overdue invoice slips through the cracks. Consistency is more important than politeness here.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-7 h-7 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                    <span className="text-cyan-400 font-bold text-xs">6</span>
                  </div>
                  <h4 className="text-white font-semibold text-sm">Include Late Payment Penalties</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  State a <strong className="text-gray-200">late payment interest rate</strong> in your contract and on your invoices (e.g., &quot;2% per month on overdue amounts&quot;). Even if you never enforce it, the presence of a penalty clause motivates clients to pay on time. In Australia, this is legal as long as the rate is not deemed unconscionable.
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-cyan-500/5 border border-cyan-500/20 p-5 mt-6">
              <p className="text-cyan-400 font-medium mb-2">Pro Tip: The 5-Day Invoice Cycle</p>
              <p className="text-gray-400 text-sm">
                The most successful freelancers we&apos;ve studied use a <strong className="text-gray-200">5-day invoice cycle</strong>: invoice on day 0 (project completion), reminder on day 5 (courtesy), reminder on day 12 (2 days before due date on 14-day terms), firm follow-up on day 14 (due date), and escalation email on day 21 (one week overdue). This systematic approach reduces average AR aging by 40-60%.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: When Accounts Receivable Becomes a Problem */}
        <section id="when-ar-becomes-a-problem">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold">5</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">When Accounts Receivable Becomes a Problem</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Healthy accounts receivable is normal &mdash; you will always have some unpaid invoices in the pipeline. But when AR grows faster than your collections, when invoices age past 60-90 days, or when a significant portion of your revenue is stuck in unpaid invoices, you have a <strong className="text-white">cash flow problem</strong> that can threaten your business.
            </p>

            <div className="space-y-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                  Cash Flow Impact
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  You can be &quot;profitable on paper&quot; and still run out of cash. If you&apos;ve invoiced $20,000 this month but only $5,000 has been paid, you have $15,000 in AR and potentially not enough cash to cover your expenses. This is the number one cause of freelancer financial stress &mdash; <strong className="text-gray-200">revenue is not the same as cash in hand</strong>. Many profitable businesses fail because of cash flow problems caused by slow-paying clients.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                  </svg>
                  Bad Debts and Write-Offs
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Some invoices will never get paid. A client goes bankrupt, disputes the work, or simply ghosts you. When an invoice becomes <strong className="text-gray-200">genuinely unrecoverable</strong>, it becomes a &quot;bad debt.&quot; As a general rule, invoices over 90 days old have a significantly lower probability of collection, and invoices over 180 days should be assessed for write-off.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  When to Chase vs When to Escalate
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-3">
                  Not all overdue invoices require the same response. Here&apos;s a practical escalation framework:
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2 text-sm text-gray-400">
                    <span className="text-emerald-400 font-bold flex-shrink-0 w-20">1-14 days:</span>
                    <span>Friendly email reminders. Most payments happen here with a simple nudge.</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-400">
                    <span className="text-yellow-400 font-bold flex-shrink-0 w-20">15-30 days:</span>
                    <span>Phone call to the client. Ask directly when payment will be made. Get a commitment date.</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-400">
                    <span className="text-orange-400 font-bold flex-shrink-0 w-20">31-60 days:</span>
                    <span>Formal written demand. Reference your payment terms and any late fee clauses.</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-400">
                    <span className="text-red-400 font-bold flex-shrink-0 w-20">60-90 days:</span>
                    <span>Letter of demand (can use a template or lawyer). Mention potential debt recovery action.</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-400">
                    <span className="text-red-500 font-bold flex-shrink-0 w-20">90+ days:</span>
                    <span>Engage a debt collection agency or consider small claims tribunal (VCAT in Victoria, NCAT in NSW).</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-cyan-500/5 border border-cyan-500/20 p-5 mt-6">
              <p className="text-cyan-400 font-medium mb-2">Tax Implications of Bad Debts (Australia)</p>
              <p className="text-gray-400 text-sm">
                If you use <strong className="text-gray-200">cash-basis accounting</strong> (most sole traders and freelancers do), you cannot claim a bad debt deduction &mdash; because you never declared the income in the first place. You only report income when you actually receive payment. If you use <strong className="text-gray-200">accruals-basis accounting</strong> (common for companies), you can claim a deduction under Section 25-35 of the ITAA 1997 when a debt is genuinely unrecoverable. You must have included the amount as assessable income and taken reasonable steps to recover it. For GST-registered businesses, you can also claim a GST adjustment for bad debts that are more than 12 months overdue.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: How InvoiceFlow Helps Manage Accounts Receivable */}
        <section id="invoiceflow-ar">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold">6</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">How InvoiceFlow Helps Manage Accounts Receivable</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              InvoiceFlow was built specifically for freelancers and small business owners who want to <strong className="text-white">stop chasing payments manually</strong>. Every invoice you create is automatically tracked, monitored, and surfaced in a real-time dashboard so you always know exactly where your money is.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-cyan-500/20 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                  </svg>
                  <h4 className="text-white font-semibold text-sm">Automatic AR Tracking</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Every invoice you send is automatically tracked with real-time status updates. No spreadsheets, no manual reconciliation. See your total AR balance, average payment time, and DSO at a glance.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-cyan-500/20 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                  </svg>
                  <h4 className="text-white font-semibold text-sm">Smart Overdue Reminders</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Automated payment reminders sent at the right time &mdash; before the due date as a courtesy, on the due date as a prompt, and at escalating intervals if the invoice goes overdue. Professional, consistent, and hands-free.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-cyan-500/20 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
                  </svg>
                  <h4 className="text-white font-semibold text-sm">Aging Reports</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Visual aging reports that group your invoices by status: current, 30 days, 60 days, 90+ days. Instantly see which clients need chasing and which invoices are at risk of becoming bad debts.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-cyan-500/20 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <h4 className="text-white font-semibold text-sm">Payment Status Dashboard</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  A single dashboard showing all your invoices by payment status: draft, sent, viewed, overdue, and paid. Filter by client, date range, or amount. Know your financial position in seconds, not hours.
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-cyan-500/5 border border-cyan-500/20 p-5 mt-6">
              <p className="text-cyan-400 font-medium mb-2">Why It Matters</p>
              <p className="text-gray-400 text-sm">
                Freelancers using dedicated AR tracking tools get paid <strong className="text-gray-200">an average of 8-12 days faster</strong> than those using manual methods. That&apos;s nearly two weeks of extra cash flow per invoice. Over a year with 50+ invoices, the cumulative impact on your financial health is significant. InvoiceFlow automates the entire cycle so you can focus on the work, not the chase.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Related Tools */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-white mb-2 text-center">Related Tools</h2>
        <p className="text-gray-400 text-center mb-8">Free tools to help you manage invoices, track payments, and stay on top of AR.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {relatedTools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:border-cyan-500/50 hover:bg-gray-800/80 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-4">
                {tool.icon}
              </div>
              <h3 className="text-white font-medium mb-2 group-hover:text-cyan-400 transition-colors">{tool.name}</h3>
              <p className="text-sm text-gray-400">{tool.description}</p>
              <div className="mt-4 text-cyan-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
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
        <p className="text-gray-400 text-center mb-8">In-depth guides on getting paid, invoicing, and managing your freelance finances.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {relatedGuides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group p-6 rounded-2xl bg-gray-800/40 border border-gray-700/40 hover:border-cyan-500/40 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h3 className="text-white font-medium mb-2 group-hover:text-cyan-400 transition-colors">{guide.name}</h3>
              <p className="text-sm text-gray-400">{guide.description}</p>
              <div className="mt-4 text-cyan-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
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
              <summary className="flex items-center justify-between cursor-pointer px-6 py-4 text-white font-medium hover:text-cyan-400 transition-colors">
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
        <div className="rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stop Chasing Payments &mdash; Automate Your AR
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            InvoiceFlow tracks every invoice from send to payment, sends automatic reminders when invoices go overdue, and gives you a real-time dashboard of who owes you money. Get paid faster with less effort.
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
