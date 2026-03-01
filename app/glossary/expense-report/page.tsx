import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Expense Report: Business Expense Tracking & Tax Deductions for Freelancers — InvoiceFlow',
  description:
    'What is an expense report? Learn how to track business expenses, claim ATO deductions (home office, vehicle, equipment), create effective expense reports, and prepare for tax time as an Australian freelancer.',
  keywords: [
    'expense report template',
    'business expense report',
    'expense report freelancer',
    'expense tracking report',
    'expense report for tax australia',
    'ATO expense deductions',
    'freelancer tax deductions',
    'business expense categories',
    'expense report template australia',
    'home office deduction',
    'vehicle expense deduction',
    'BAS expense tracking',
  ],
  alternates: { canonical: '/glossary/expense-report' },
  openGraph: {
    title: 'Expense Report: Business Expense Tracking & Tax Deductions for Freelancers — InvoiceFlow',
    description:
      'Everything about expense reports: what they are, ATO-compliant expense categories (home office, vehicle, equipment), record-keeping requirements, tax-time strategies, and how to automate expense tracking.',
    url: 'https://invoiceflow-teal.vercel.app/glossary/expense-report',
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
    { '@type': 'ListItem', position: 3, name: 'Expense Report', item: `${BASE_URL}/glossary/expense-report` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What expenses can freelancers claim in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Australian freelancers can claim any expense that is directly related to earning their income. Common deductible expenses include: home office costs (67 cents per hour fixed rate or actual cost method), vehicle expenses (85 cents per km or logbook method), equipment and technology (instant asset write-off up to $20,000), professional development (courses, conferences, books), professional services (accountant, lawyer fees), insurance (professional indemnity, public liability), marketing and advertising costs, communication expenses (business percentage of phone and internet), software subscriptions, bank fees and merchant charges, and travel expenses for business purposes. The key ATO rule is that the expense must have a direct connection (nexus) to your income-earning activity.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long do I need to keep expense receipts for the ATO?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The ATO requires you to keep records of all business expenses for 5 years from the date you lodge your tax return (not 5 years from the date of the expense). For example, if you incur an expense in July 2025 and lodge your 2025-26 tax return in October 2026, you must keep that receipt until October 2031. Records can be kept digitally — the ATO accepts scanned receipts, photos, and digital records as long as they are legible and show the date, amount, supplier name, nature of goods/services, and GST amount (if applicable). The ATO app can also be used to photograph and store receipts. Failing to keep adequate records can result in penalties of $313 per 28-day period under the Failure to Lodge (FTL) penalty framework.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need receipts for expenses under $300?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It depends on the context. For work-related expenses claimed by employees, there is a $300 threshold below which you do not need written evidence (receipts) — but you must still be able to show how you calculated the claim and that the expense was genuinely incurred. However, for freelancers and sole traders claiming business deductions, the ATO expects you to keep records for ALL expenses regardless of amount. The $82.50 threshold is more relevant for GST: you can only claim Input Tax Credits (ITCs) on your BAS for purchases over $82.50 (including GST) if you have a valid tax invoice. For purchases of $82.50 or less, you can claim the GST credit without a tax invoice, but you still need some form of record (bank statement, receipt) to substantiate the expense itself.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between an expense report and a profit and loss statement?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An expense report and a profit and loss (P&L) statement serve different purposes. An expense report is a detailed document listing individual business expenses over a specific period — it tracks what you spent money on, with receipt references and category breakdowns. It is primarily used for tax deductions, BAS claims, and reimbursements. A profit and loss statement (also called an income statement) is a broader financial summary that shows your total revenue minus total expenses to calculate your net profit or loss over a period. The P&L uses aggregated expense data (often sourced from expense reports) but also includes income. Think of it this way: expense reports are the raw data input, and the P&L is the summary output. Both are essential — expense reports for compliance, P&L for understanding your overall financial health.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I track expenses for BAS and GST claims?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'To track expenses for BAS (Business Activity Statement) and GST claims, you need to: (1) Record every business purchase with the date, supplier, amount, GST component, and category. (2) Keep all tax invoices — for purchases over $82.50 (including GST), you must have a valid tax invoice to claim Input Tax Credits (ITCs). (3) Separate GST-inclusive and GST-free expenses, as only GST-inclusive purchases generate ITCs. (4) Track the business-use percentage for shared expenses (e.g., if your phone is 60% business use, you can only claim 60% of the GST). (5) Reconcile monthly so your BAS preparation is not a scramble. (6) Report at labels 1B (GST on purchases) and 1C (adjustments) on your BAS. Using expense tracking software that automatically categorises GST amounts makes this process significantly easier and reduces the risk of errors that could trigger an ATO audit.',
      },
    },
  ],
};

const tocItems = [
  { id: 'what-is-expense-report', label: '1. What Is an Expense Report?' },
  { id: 'types-of-expenses', label: '2. Types of Expenses for Freelancers' },
  { id: 'creating-expense-report', label: '3. Creating an Effective Expense Report' },
  { id: 'ato-requirements', label: '4. ATO Requirements for Expense Records' },
  { id: 'expense-report-tax-time', label: '5. Expense Report for Tax Time' },
  { id: 'invoiceflow-expenses', label: '6. How InvoiceFlow Helps' },
];

const relatedTools = [
  {
    href: '/tools/profit-and-loss-generator',
    name: 'Profit & Loss Generator',
    description: 'Generate a complete P&L statement from your income and expense data — see your net profit at a glance.',
    icon: (
      <svg className="w-6 h-6 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    href: '/tools/profit-margin-calculator',
    name: 'Profit Margin Calculator',
    description: 'Calculate your profit margin after expenses — understand how much you actually keep from every dollar earned.',
    icon: (
      <svg className="w-6 h-6 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
      </svg>
    ),
  },
  {
    href: '/tools/freelance-tax-estimator',
    name: 'Freelance Tax Estimator',
    description: 'Estimate your tax liability including deductions from your expense report — know what you owe before tax time.',
    icon: (
      <svg className="w-6 h-6 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
  {
    href: '/tools/bas-preparation-checklist',
    name: 'BAS Preparation Checklist',
    description: 'Step-by-step checklist to prepare your BAS — including expense categorisation, GST reconciliation, and ITC claims.',
    icon: (
      <svg className="w-6 h-6 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const relatedGuides = [
  {
    href: '/guides/tax-guide-freelancers',
    name: 'Tax Guide for Freelancers',
    description: 'Complete guide to Australian tax for freelancers — income tax, GST, BAS, deductions, and how to minimise your tax legally.',
  },
  {
    href: '/guides/eofy-guide',
    name: 'EOFY Guide',
    description: 'End of financial year preparation checklist — prepay expenses, reconcile records, maximise deductions before 30 June.',
  },
  {
    href: '/guides/gst-for-freelancers',
    name: 'GST for Freelancers',
    description: 'How to register for GST, charge it on invoices, claim Input Tax Credits on expenses, and lodge your BAS correctly.',
  },
];

export default function ExpenseReportGlossaryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative px-4 pt-20 pb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-lime-500/10 via-green-500/10 to-lime-500/10 blur-3xl" />
        <div className="relative max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/glossary" className="hover:text-white transition-colors">Glossary</Link>
            <span>/</span>
            <span className="text-white">Expense Report</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lime-500/10 border border-lime-500/20 text-lime-400 text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            Glossary &mdash; Financial Reporting
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Expense Report{' '}
            <span className="bg-gradient-to-r from-lime-500 to-green-500 bg-clip-text text-transparent">
              Explained for Freelancers
            </span>
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            An expense report summarises your business expenses over a period for tax deductions, BAS claims, and financial analysis. This guide covers ATO-compliant expense categories, home office and vehicle deductions, record-keeping requirements, and how to maximise your deductions at tax time.
          </p>

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
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-lime-500/20 flex items-center justify-center text-lime-400 text-xs font-bold">67c</span>
              <div>
                <p className="text-white font-medium text-sm">67c/hr Home Office Rate</p>
                <p className="text-gray-400 text-sm">ATO fixed rate method for home office deductions in 2025-26</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-lime-500/20 flex items-center justify-center text-lime-400 text-xs font-bold">85c</span>
              <div>
                <p className="text-white font-medium text-sm">85c/km Vehicle Deduction</p>
                <p className="text-gray-400 text-sm">ATO cents-per-kilometre rate for business travel in 2025-26</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-lime-500/20 flex items-center justify-center text-lime-400 text-xs font-bold">5yr</span>
              <div>
                <p className="text-white font-medium text-sm">5-Year Record Retention</p>
                <p className="text-gray-400 text-sm">ATO requires expense records to be kept for 5 years from lodgement</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-lime-500/20 flex items-center justify-center text-lime-400 text-xs font-bold">$20K</span>
              <div>
                <p className="text-white font-medium text-sm">$20K Instant Asset Write-Off</p>
                <p className="text-gray-400 text-sm">Immediately deduct assets costing less than $20,000 each</p>
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
              <a key={item.id} href={`#${item.id}`} className="flex items-center gap-2 text-gray-400 hover:text-lime-400 transition-colors text-sm py-1">
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

        {/* Section 1 */}
        <section id="what-is-expense-report">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-lime-500 to-green-500 flex items-center justify-center text-white text-sm font-bold">1</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">What Is an Expense Report?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              An expense report is a <strong className="text-white">document that summarises all business expenses incurred over a specific period</strong>. It categorises each expense by type, records the amount (including GST where applicable), references the receipt or tax invoice, and provides running totals for each category and the overall period.
            </p>
            <p className="text-gray-300 leading-relaxed">
              For freelancers, expense reports serve four critical purposes: <strong className="text-white">claiming tax deductions</strong> on your annual return, <strong className="text-white">claiming Input Tax Credits</strong> on your BAS, <strong className="text-white">analysing your spending</strong> to identify where money goes, and <strong className="text-white">billing clients</strong> for reimbursable expenses. Without a structured expense report, you almost certainly leave money on the table at tax time.
            </p>

            <h3 className="text-xl font-bold text-white mt-8 mb-4">Expense Report vs Receipt vs Invoice vs P&amp;L</h3>
            <div className="rounded-2xl border border-gray-700/50 overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-800/80">
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Document</th>
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">What It Is</th>
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Purpose</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700/50">
                  {[
                    { doc: 'Receipt', what: 'Proof of a single purchase from a supplier', purpose: 'Evidence for ATO substantiation' },
                    { doc: 'Tax Invoice', what: 'Formal invoice from a GST-registered supplier', purpose: 'Required to claim Input Tax Credits on BAS' },
                    { doc: 'Expense Report', what: 'Summary of multiple expenses over a period', purpose: 'Tax deductions, BAS prep, financial analysis' },
                    { doc: 'Profit & Loss', what: 'Revenue minus expenses = net profit', purpose: 'Overall financial health assessment' },
                  ].map((row, i) => (
                    <tr key={i} className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-lime-400 text-sm font-bold">{row.doc}</td>
                      <td className="px-6 py-3 text-gray-300 text-sm">{row.what}</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">{row.purpose}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section id="types-of-expenses">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-lime-500 to-green-500 flex items-center justify-center text-white text-sm font-bold">2</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Types of Expenses for Freelancers</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              The ATO allows freelancers to deduct expenses that are <strong className="text-white">directly related to earning your income</strong>. Here are the main categories with current rates and rules for the 2025-26 financial year.
            </p>

            <div className="space-y-4 mt-6">
              {[
                { category: 'Home Office', rate: '67c/hr OR actual cost', color: 'text-lime-400', bg: 'bg-lime-500/10', border: 'border-lime-500/20', desc: 'Fixed rate method: claim 67 cents per hour worked from home (covers electricity, phone, internet, stationery, depreciation of furniture). Actual cost method: calculate the exact costs of your home office including the floor area percentage of rent/mortgage interest, electricity, internet, and depreciation. You must keep a record of hours worked from home for either method.', typical: '$2,000-$5,000/yr' },
                { category: 'Vehicle', rate: '85c/km OR logbook', color: 'text-green-400', bg: 'bg-green-500/10', border: 'border-green-500/20', desc: 'Cents per km method: claim 85 cents per business kilometre (max 5,000 km/year = $4,250). Logbook method: keep a 12-week logbook to establish business-use percentage, then claim that percentage of all car costs (fuel, registration, insurance, depreciation, repairs). The logbook method has no km cap and is usually better for heavy business use.', typical: '$2,000-$8,000/yr' },
                { category: 'Equipment & Technology', rate: '$20K instant write-off', color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', desc: 'Assets costing less than $20,000 each can be instantly written off in the year of purchase (not depreciated over time). This includes laptops, monitors, cameras, phones, software licenses, desks, and chairs. Assets over $20,000 must be depreciated over their effective life. For items used partly for personal use, only the business percentage is deductible.', typical: '$1,000-$10,000/yr' },
                { category: 'Professional Development', rate: 'Fully deductible', color: 'text-teal-400', bg: 'bg-teal-500/10', border: 'border-teal-500/20', desc: 'Courses, certifications, conferences, workshops, and books that are directly related to your current income-earning activity are fully deductible. This includes online courses (Udemy, Coursera), industry conferences, professional memberships, and technical books. Note: courses that lead to a new profession (e.g., an accountant studying law) are NOT deductible.', typical: '$500-$3,000/yr' },
                { category: 'Professional Services', rate: 'Fully deductible', color: 'text-cyan-400', bg: 'bg-cyan-500/10', border: 'border-cyan-500/20', desc: 'Fees paid to accountants, tax agents, lawyers, business coaches, and other professional advisors for business purposes. Your accountant\'s fee for preparing your tax return is deductible (but claimed in the year you pay it, not the year it relates to). Legal fees for contract review and business structure advice are also deductible.', typical: '$1,000-$5,000/yr' },
                { category: 'Insurance', rate: 'Fully deductible', color: 'text-sky-400', bg: 'bg-sky-500/10', border: 'border-sky-500/20', desc: 'Professional indemnity (PI) insurance, public liability (PLI) insurance, and income protection insurance premiums are all deductible. PI insurance is essential for most freelancers and is often required by clients. The premiums typically range from $300-$2,000/year depending on your profession and coverage level.', typical: '$500-$2,500/yr' },
                { category: 'Marketing & Advertising', rate: 'Fully deductible', color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/20', desc: 'Website hosting, domain names, social media advertising, Google Ads, business cards, portfolio hosting, email marketing tools, and design tools (Figma, Canva Pro). All marketing expenses directly related to promoting your freelance business are deductible in the year incurred.', typical: '$500-$5,000/yr' },
                { category: 'Communication', rate: 'Business % only', color: 'text-indigo-400', bg: 'bg-indigo-500/10', border: 'border-indigo-500/20', desc: 'Phone bills, internet service, and video conferencing subscriptions (Zoom, Teams). Only the business-use percentage is deductible. If your phone is 70% business use, you can claim 70% of the total bill. You need to establish a reasonable basis for the percentage (e.g., a 4-week usage log) and keep it on file for ATO review.', typical: '$500-$2,000/yr' },
              ].map((item, i) => (
                <div key={i} className={`rounded-xl ${item.bg} border ${item.border} p-6`}>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className={`text-lg font-semibold ${item.color}`}>{item.category}</h3>
                    <div className="flex items-center gap-2">
                      <span className={`text-xs px-2 py-0.5 rounded-full ${item.bg} ${item.color}`}>{item.rate}</span>
                      <span className="text-xs text-gray-500">Typical: {item.typical}</span>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section id="creating-expense-report">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-lime-500 to-green-500 flex items-center justify-center text-white text-sm font-bold">3</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Creating an Effective Expense Report</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              A well-structured expense report makes tax time painless and BAS preparation straightforward. Here are the key elements every freelancer expense report should include.
            </p>

            <h3 className="text-xl font-bold text-white mt-8 mb-4">Essential Elements</h3>
            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              {[
                { element: 'Period Covered', desc: 'The date range the report covers (e.g., 1 July - 30 September 2025). Align with your BAS periods (monthly or quarterly) for easiest reconciliation.' },
                { element: 'Category Breakdown', desc: 'Group expenses by ATO category (home office, vehicle, equipment, etc.). This maps directly to your tax return labels and makes deduction claims straightforward.' },
                { element: 'Receipt References', desc: 'Each line item should reference the receipt number or file name. This creates an audit trail from your expense report back to the source document.' },
                { element: 'GST Amounts', desc: 'Record the GST component separately for every expense. This is critical for claiming Input Tax Credits on your BAS. Non-GST expenses (bank fees, some insurance) should be marked as GST-free.' },
                { element: 'Running Totals', desc: 'Category subtotals and a grand total for the period. Include separate totals for GST-inclusive amount, GST amount, and GST-exclusive amount.' },
                { element: 'Notes & Descriptions', desc: 'Brief notes explaining the business purpose of each expense. This is especially important for expenses that could be seen as personal (meals, travel, phone).' },
              ].map((item, i) => (
                <div key={i} className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                  <h4 className="text-white font-semibold mb-2">{item.element}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-bold text-white mt-8 mb-4">Sample Expense Report</h3>
            <div className="rounded-2xl border border-gray-700/50 overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-800/80">
                    <th className="text-left text-sm font-medium text-gray-300 px-4 py-4">Date</th>
                    <th className="text-left text-sm font-medium text-gray-300 px-4 py-4">Category</th>
                    <th className="text-left text-sm font-medium text-gray-300 px-4 py-4">Description</th>
                    <th className="text-right text-sm font-medium text-gray-300 px-4 py-4">Excl. GST</th>
                    <th className="text-right text-sm font-medium text-gray-300 px-4 py-4">GST</th>
                    <th className="text-right text-sm font-medium text-gray-300 px-4 py-4">Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700/50">
                  {[
                    { date: '3 Jul', cat: 'Equipment', desc: 'MacBook Pro 14"', exGst: '$2,635.45', gst: '$263.55', total: '$2,899.00' },
                    { date: '5 Jul', cat: 'Software', desc: 'Figma Pro (annual)', exGst: '$163.64', gst: '$16.36', total: '$180.00' },
                    { date: '12 Jul', cat: 'Insurance', desc: 'PI Insurance (annual)', exGst: '$845.45', gst: '$84.55', total: '$930.00' },
                    { date: '15 Jul', cat: 'Communication', desc: 'Phone bill (70% business)', exGst: '$63.64', gst: '$6.36', total: '$70.00' },
                    { date: '20 Jul', cat: 'Vehicle', desc: '185km client meetings', exGst: '$157.25', gst: '$0.00', total: '$157.25' },
                    { date: '31 Jul', cat: 'Home Office', desc: '160 hours @ 67c/hr', exGst: '$107.20', gst: '$0.00', total: '$107.20' },
                  ].map((row, i) => (
                    <tr key={i} className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-4 py-3 text-gray-300 text-sm">{row.date}</td>
                      <td className="px-4 py-3 text-lime-400 text-sm font-medium">{row.cat}</td>
                      <td className="px-4 py-3 text-gray-300 text-sm">{row.desc}</td>
                      <td className="px-4 py-3 text-gray-400 text-sm text-right">{row.exGst}</td>
                      <td className="px-4 py-3 text-gray-400 text-sm text-right">{row.gst}</td>
                      <td className="px-4 py-3 text-white text-sm text-right font-bold">{row.total}</td>
                    </tr>
                  ))}
                  <tr className="bg-lime-900/10">
                    <td colSpan={3} className="px-4 py-3 text-lime-400 text-sm font-bold">TOTAL (July 2025)</td>
                    <td className="px-4 py-3 text-gray-300 text-sm text-right font-bold">$3,972.63</td>
                    <td className="px-4 py-3 text-gray-300 text-sm text-right font-bold">$370.82</td>
                    <td className="px-4 py-3 text-white text-sm text-right font-bold">$4,343.45</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="rounded-xl bg-lime-500/5 border border-lime-500/20 p-5 mt-4">
              <p className="text-lime-400 font-medium mb-2">Monthly vs Quarterly vs Annual</p>
              <p className="text-gray-400 text-sm">
                <strong className="text-gray-200">Monthly expense reports</strong> are ideal for freelancers who lodge monthly BAS or want tight financial control. <strong className="text-gray-200">Quarterly</strong> aligns with quarterly BAS lodgement and is the most common for sole traders. <strong className="text-gray-200">Annual</strong> is the bare minimum for tax returns but makes BAS preparation much harder. The sweet spot for most freelancers is quarterly, reconciled monthly.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section id="ato-requirements">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-lime-500 to-green-500 flex items-center justify-center text-white text-sm font-bold">4</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">ATO Requirements for Expense Records</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              The ATO has specific rules about what records you must keep, how long to keep them, and what constitutes valid evidence for expense claims. Getting this wrong can result in penalties and disallowed deductions.
            </p>

            <div className="space-y-4 mt-6">
              {[
                { rule: '5-Year Retention Rule', desc: 'You must keep records of all business expenses for 5 years from the date you lodge your tax return. If you lodge your 2025-26 return in October 2026, records must be kept until October 2031. This applies to both income and expense records.', icon: '5Y' },
                { rule: 'Valid Receipt Requirements', desc: 'A valid receipt or tax invoice must show: supplier name and ABN, date of purchase, description of goods/services, amount paid, and GST amount (if the supplier is GST-registered). For purchases over $82.50 (including GST), you need a tax invoice to claim Input Tax Credits.', icon: 'R' },
                { rule: '$82.50 GST Threshold', desc: 'For purchases of $82.50 or less (including GST), you can claim GST credits without a tax invoice. However, you still need some form of record (bank statement, receipt) to substantiate the expense. For purchases over $82.50, a valid tax invoice is mandatory for ITC claims.', icon: 'G' },
                { rule: 'Substantiation Rules', desc: 'You must be able to prove every deduction you claim. This means keeping the receipt, recording the business purpose, and (for shared expenses) documenting the business-use percentage. The ATO can ask for substantiation at any time within the 5-year window.', icon: 'S' },
                { rule: 'Travel Diary Requirements', desc: 'If you travel for business for 6 or more consecutive nights, you must keep a travel diary recording each day: where you were, what business activities you undertook, and the duration. Without a diary, travel expenses for trips of 6+ nights are not deductible.', icon: 'T' },
                { rule: 'Vehicle Logbook', desc: 'If using the logbook method for vehicle deductions, you must keep a logbook for a continuous 12-week period showing every trip (date, odometer readings, km travelled, business purpose). The logbook is valid for 5 years unless your circumstances change significantly.', icon: 'V' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-lime-500/20 flex items-center justify-center text-lime-400 text-xs font-bold">{item.icon}</div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">{item.rule}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-xl bg-red-500/5 border border-red-500/20 p-5 mt-6">
              <p className="text-red-400 font-medium mb-2">Penalties for Poor Record Keeping</p>
              <p className="text-gray-400 text-sm">
                The ATO can impose a <strong className="text-gray-200">Failure to Lodge (FTL) penalty of $313 per 28-day period</strong> for not keeping adequate records. More seriously, if you cannot substantiate deductions during an audit, the ATO will disallow those deductions and you will owe additional tax plus interest (the General Interest Charge, currently around 11.36% p.a.). In severe cases, intentional false record-keeping can result in penalties of up to 75% of the tax shortfall.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5 */}
        <section id="expense-report-tax-time">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-lime-500 to-green-500 flex items-center justify-center text-white text-sm font-bold">5</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Expense Report for Tax Time</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Your expense report is the foundation of your tax return deductions. Here is how to maximise your legitimate deductions and avoid common mistakes that leave money on the table.
            </p>

            <h3 className="text-xl font-bold text-white mt-8 mb-4">How Expenses Feed Into Your Tax Return</h3>
            <div className="rounded-2xl border border-gray-700/50 overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-800/80">
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Expense Category</th>
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Tax Return Label</th>
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">BAS Label</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700/50">
                  {[
                    { cat: 'All business expenses', taxLabel: 'D — Deductions', basLabel: '1B (GST on purchases)' },
                    { cat: 'Home office (fixed rate)', taxLabel: 'D5 — Other work-related expenses', basLabel: 'N/A (no GST component)' },
                    { cat: 'Vehicle (cents/km)', taxLabel: 'D1 — Work-related car expenses', basLabel: 'N/A (no GST component)' },
                    { cat: 'Equipment (under $20K)', taxLabel: 'D2 — Work-related travel expenses', basLabel: '1B (GST on purchases)' },
                    { cat: 'Depreciation (over $20K)', taxLabel: 'D — Capital allowances', basLabel: '1B (GST on purchase year only)' },
                    { cat: 'Professional services', taxLabel: 'D10 — Cost of managing tax affairs', basLabel: '1B (GST on purchases)' },
                  ].map((row, i) => (
                    <tr key={i} className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-gray-300 text-sm font-medium">{row.cat}</td>
                      <td className="px-6 py-3 text-lime-400 text-sm">{row.taxLabel}</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">{row.basLabel}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-bold text-white mt-8 mb-4">Commonly Missed Deductions</h3>
            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              {[
                { missed: 'Bank & Merchant Fees', desc: 'Transaction fees on business accounts, Stripe/PayPal fees, credit card annual fees (business % only). These are fully deductible and often forgotten.' },
                { missed: 'Software Subscriptions', desc: 'Adobe Creative Cloud, Slack, Notion, GitHub, project management tools, cloud storage, accounting software. If you use it for work, it is deductible.' },
                { missed: 'Work % of Shared Costs', desc: 'Internet, phone, rent (if home office), electricity. Many freelancers claim 0% because they think shared costs cannot be deducted. The business-use percentage IS deductible.' },
                { missed: 'Prepaid Expenses Before 30 June', desc: 'You can prepay up to 12 months of expenses before June 30 and claim them in the current financial year. This includes insurance, subscriptions, and professional memberships.' },
              ].map((item, i) => (
                <div key={i} className="rounded-xl bg-gray-800/50 border border-lime-500/20 p-5">
                  <h4 className="text-lime-400 font-semibold mb-2">{item.missed}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="rounded-xl bg-lime-500/5 border border-lime-500/20 p-5 mt-6">
              <p className="text-lime-400 font-medium mb-2">The $300 Rule for Employees vs Freelancers</p>
              <p className="text-gray-400 text-sm">
                Many freelancers confuse the employee <strong className="text-gray-200">$300 threshold</strong> with sole trader rules. For employees, work-related expenses under $300 in total do not require written receipts (but still need to be genuinely incurred). For <strong className="text-gray-200">sole traders and freelancers claiming business deductions, the ATO expects substantiation for ALL expenses</strong> regardless of amount. Do not assume the $300 rule applies to your business deductions &mdash; keep every receipt.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6 */}
        <section id="invoiceflow-expenses">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-lime-500 to-green-500 flex items-center justify-center text-white text-sm font-bold">6</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">How InvoiceFlow Helps</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              InvoiceFlow makes expense tracking effortless so you never miss a deduction or scramble at tax time.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              {[
                { title: 'Automated Expense Categorisation', desc: 'InvoiceFlow automatically categorises your expenses into ATO-compliant categories as you log them. No more sorting through a year of receipts at tax time — every expense is pre-classified.' },
                { title: 'Receipt Capture & Storage', desc: 'Snap a photo of any receipt and InvoiceFlow extracts the key details (date, amount, supplier, GST). Receipts are stored digitally for the required 5-year retention period, linked to the expense entry.' },
                { title: 'GST Tracking & ITC Calculation', desc: 'Every expense is automatically split into GST-inclusive amount, GST component, and GST-exclusive amount. When BAS time comes, your Input Tax Credits are already calculated and ready to lodge.' },
                { title: 'BAS-Ready & Tax-Time Export', desc: 'Export your expense data in a format your accountant can use directly — categorised by ATO labels, with GST separated, and receipt references attached. Turns a 3-hour BAS prep into a 15-minute export.' },
              ].map((item, i) => (
                <div key={i} className="rounded-xl bg-gray-800/50 border border-lime-500/20 p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-lime-500/10 flex items-center justify-center">
                      <svg className="w-4 h-4 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
                  { label: 'Business Expenses', href: '/glossary/business-expenses' },
                  { label: 'Tax Deduction', href: '/glossary/tax-deduction' },
                  { label: 'Record Keeping', href: '/glossary/record-keeping' },
                  { label: 'Profit and Loss', href: '/glossary/profit-and-loss' },
                  { label: 'BAS', href: '/glossary/bas' },
                  { label: 'Input Tax Credits', href: '/glossary/input-tax-credits' },
                ].map((term) => (
                  <Link key={term.href} href={term.href} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-lime-500/10 border border-lime-500/20 text-lime-400 text-sm font-medium hover:bg-lime-500/20 transition-colors">
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
        <p className="text-gray-400 text-center mb-8">Free tools to help you track expenses, calculate profit margins, and prepare for tax time.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {relatedTools.map((tool) => (
            <Link key={tool.href} href={tool.href} className="group p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:border-lime-500/50 hover:bg-gray-800/80 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-lime-500/10 border border-lime-500/20 flex items-center justify-center mb-4">{tool.icon}</div>
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
        <p className="text-gray-400 text-center mb-8">In-depth guides on Australian tax, GST, and end-of-financial-year preparation.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {relatedGuides.map((guide) => (
            <Link key={guide.href} href={guide.href} className="group p-6 rounded-2xl bg-gray-800/40 border border-gray-700/40 hover:border-lime-500/40 transition-all duration-300">
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
            Track Every Expense, Claim Every Deduction
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            InvoiceFlow automatically categorises your expenses, captures receipts, tracks GST, and generates BAS-ready reports &mdash; so you never miss a deduction or scramble at tax time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button>Start Free &mdash; No Card Required</Button>
            </Link>
            <Link href="/tools/profit-and-loss-generator">
              <Button variant="secondary">Generate Your P&amp;L Statement</Button>
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
