import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Business Expenses for Freelancers: Complete ATO Guide 2025-26 — InvoiceFlow',
  description:
    'What business expenses can freelancers claim in Australia? Complete 2025-26 guide to sole trader deductions — home office (67c/hr), vehicle (85c/km), $20K instant write-off, insurance, equipment, professional services. ATO rules, deduction categories, and common mistakes.',
  keywords: [
    'business expenses freelancer australia',
    'what can I claim as business expenses sole trader',
    'ATO business deductions',
    'freelance tax deductions australia 2025',
    'sole trader expenses list',
    'home office deduction australia',
    'business expense categories ATO',
    'freelancer deductible expenses',
    'self employed business expenses australia',
    'sole trader tax deductions list',
    'claiming business expenses australia',
    'ATO deduction rules freelancer',
  ],
  alternates: { canonical: '/glossary/business-expenses' },
  openGraph: {
    title: 'Business Expenses for Freelancers: Complete ATO Guide 2025-26 — InvoiceFlow',
    description:
      'Every business expense Australian freelancers can claim in 2025-26: home office, vehicle, equipment, insurance, professional services, and more. ATO rules, deduction categories, and common mistakes to avoid.',
    url: 'https://invoiceflow-teal.vercel.app/glossary/business-expenses',
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
    { '@type': 'ListItem', position: 3, name: 'Business Expenses', item: `${BASE_URL}/glossary/business-expenses` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What business expenses can a sole trader claim in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Australian sole traders can claim a wide range of business expenses as tax deductions, including: home office costs (67 cents per hour fixed rate or actual cost method), motor vehicle expenses (85 cents per kilometre up to 5,000 km, or logbook method), equipment and technology (computers, phones, software — instant asset write-off up to $20,000 per item), professional development (courses, conferences, books, certifications), business insurance (professional indemnity, public liability, income protection), professional services (accountant fees, tax agent fees, legal advice), marketing costs (website, advertising, domain names, hosting), and business travel (flights, accommodation, meals at ATO reasonable amounts). The key requirement is that every expense must be directly related to earning your assessable income, and you must keep receipts and records for at least 5 years.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much can I claim for working from home?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For the 2025-26 financial year, you can claim home office expenses using one of two methods. The Fixed Rate Method lets you claim 67 cents per hour worked from home, covering electricity, phone, internet, stationery, and computer consumables — you just need to keep a record of your hours. The Actual Cost Method requires you to calculate your real expenses and apportion them by business-use percentage (e.g., office floor area as a percentage of total home area). For example, at 1,600 hours per year the fixed rate gives you $1,072, while actual costs of $4,800 per year at 25% business use give you $1,200. The actual cost method can yield higher claims if you have a dedicated workspace and high running costs, but requires detailed records of all bills and expenses.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need receipts for every business expense?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, the ATO requires substantiation (receipts, tax invoices, or bank/credit card statements) for expenses over $10. You must keep all records for at least 5 years from the date you lodge your tax return. Digital copies are fully acceptable — photographing receipts on your phone or using accounting software to store them is ATO-compliant. For expenses of $10 or less, you do not need a receipt but should still keep a record. Without proper substantiation, the ATO can disallow your deduction entirely and may apply penalties of up to 75% of the tax shortfall if you are audited.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I claim my phone and internet as a business expense?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, you can claim your phone and internet costs as a business expense, but only the business-use percentage. If your phone is 70% business use, you can claim 70% of the total cost (plan, handset repayments, and excess charges). Similarly, if your home internet is 50% business use, you claim 50% of your monthly bill. You need a reasonable basis for your estimate — a 4-week usage diary is the gold standard, but the ATO will accept a reasonable and consistent estimate. Note: if you use the 67 cents per hour fixed rate method for home office, phone and internet are already included in that rate and cannot be claimed separately.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the instant asset write-off for 2025-26?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For the 2025-26 financial year, businesses with an aggregated turnover of less than $10 million can immediately deduct the full cost of eligible depreciable assets costing less than $20,000 each. The cost threshold is assessed per asset, so you can purchase multiple items under $20,000 each and claim them all. The asset must be first used or installed ready for use during the income year. Both new and second-hand assets qualify. Items costing $20,000 or more must be depreciated using the diminishing value or prime cost method over their ATO-determined effective life. Items costing $300 or less that are used predominantly for business can be claimed as an immediate deduction without using the write-off.',
      },
    },
  ],
};

const tocItems = [
  { id: 'what-are-business-expenses', label: '1. What Are Business Expenses?' },
  { id: 'ato-rules', label: '2. ATO Rules for Claiming Business Expenses' },
  { id: 'deductible-expenses-list', label: '3. Complete List of Deductible Business Expenses' },
  { id: 'home-office-deep-dive', label: '4. Home Office Deductions Deep Dive' },
  { id: 'common-mistakes', label: '5. Common Expense Claiming Mistakes' },
  { id: 'invoiceflow-tracking', label: '6. How InvoiceFlow Tracks Business Expenses' },
];

const relatedTools = [
  {
    href: '/tools/tax-deduction-finder',
    name: 'Tax Deduction Finder',
    description: 'Discover every business expense you can claim as an Australian freelancer or sole trader.',
    icon: (
      <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
  {
    href: '/tools/freelance-tax-estimator',
    name: 'Freelance Tax Estimator',
    description: 'See how your business expenses reduce your tax bill — includes deductions, super, and Medicare levy.',
    icon: (
      <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
      </svg>
    ),
  },
  {
    href: '/tools/profit-margin-calculator',
    name: 'Profit Margin Calculator',
    description: 'Calculate your real profit margins after accounting for all business expenses and deductions.',
    icon: (
      <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    href: '/tools/bas-preparation-checklist',
    name: 'BAS Preparation Checklist',
    description: 'Ensure every business expense is categorised and ready for your quarterly BAS lodgement.',
    icon: (
      <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
  },
];

const relatedGuides = [
  {
    href: '/guides/tax-guide-freelancers',
    name: 'Tax Guide for Freelancers',
    description: 'The complete guide to income tax, deductions, BAS, and everything else for Australian sole traders.',
  },
  {
    href: '/guides/eofy-guide',
    name: 'EOFY Guide for Freelancers',
    description: 'End of financial year checklist — deductions, lodgement deadlines, and last-minute tax planning tips.',
  },
  {
    href: '/guides/gst-for-freelancers',
    name: 'GST for Freelancers',
    description: 'When to register for GST, how to charge it, and how to claim input tax credits on your business expenses.',
  },
];

export default function BusinessExpensesGlossaryPage() {
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
            <span className="text-white">Business Expenses</span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            Glossary &mdash; Tax &amp; Deductions
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Business Expenses{' '}
            <span className="bg-gradient-to-r from-emerald-500 to-green-500 bg-clip-text text-transparent">
              for Australian Freelancers
            </span>
          </h1>

          {/* Summary */}
          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            Business expenses are your most effective way to reduce your taxable income and keep more of what you earn. This guide covers everything Australian freelancers and sole traders can claim in 2025-26 &mdash; ATO rules, deduction categories, home office methods, vehicle costs, and the common mistakes that trigger audits.
          </p>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>18 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>ATO-Accurate 2025-26</span>
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
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs font-bold">67c</span>
              <div>
                <p className="text-white font-medium text-sm">Home Office Fixed Rate</p>
                <p className="text-gray-400 text-sm">ATO fixed rate method per hour worked from home (2025-26)</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs font-bold">85c</span>
              <div>
                <p className="text-white font-medium text-sm">Motor Vehicle Rate</p>
                <p className="text-gray-400 text-sm">ATO cents per kilometre rate for motor vehicle deductions</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs font-bold">$20K</span>
              <div>
                <p className="text-white font-medium text-sm">Instant Asset Write-Off</p>
                <p className="text-gray-400 text-sm">Threshold for small businesses &mdash; deduct the full cost of eligible assets</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs font-bold">5 yr</span>
              <div>
                <p className="text-white font-medium text-sm">Record Keeping</p>
                <p className="text-gray-400 text-sm">ATO record-keeping requirement for all expense receipts</p>
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

        {/* Section 1: What Are Business Expenses? */}
        <section id="what-are-business-expenses">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center text-white text-sm font-bold">1</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">What Are Business Expenses?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Business expenses are <strong className="text-white">costs you incur in running your business that are deductible against your income for tax purposes</strong>. As an Australian freelancer or sole trader, every legitimate business expense reduces your taxable income &mdash; meaning you pay less <Link href="/glossary/income-tax" className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2">income tax</Link> to the ATO.
            </p>
            <p className="text-gray-300 leading-relaxed">
              The ATO&apos;s fundamental rule is <strong className="text-white">nexus</strong>: the expense must be directly related to earning your assessable income. If there is no connection between the expense and your business activity, it is not deductible. This nexus requirement is the foundation of every deduction claim you make.
            </p>
            <p className="text-gray-300 leading-relaxed">
              It is important to understand the difference between <strong className="text-white">revenue expenses and capital expenses</strong>. Revenue expenses are day-to-day running costs &mdash; internet bills, software subscriptions, stationery, insurance premiums. These are fully deductible in the year you incur them. Capital expenses are purchases of assets with a useful life beyond one year &mdash; laptops, cameras, vehicles, furniture. Capital items generally cannot be claimed in full in one year; instead, you claim them via <Link href="/glossary/depreciation" className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2">depreciation</Link> over the asset&apos;s effective life, unless the $20,000 instant asset write-off applies.
            </p>
            <p className="text-gray-300 leading-relaxed">
              The financial impact of claiming business expenses is significant. Consider this: a freelancer earning <strong className="text-white">$120,000 with $35,000 in legitimate deductions pays tax on $85,000 instead</strong>. At the 30% marginal rate (plus 2% Medicare levy), that represents a tax saving of approximately $11,200 per year. Over five years, that is $56,000 kept in your pocket rather than paid to the ATO.
            </p>

            {/* Worked Example */}
            <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-900/10 to-green-900/10 p-6 mt-6">
              <h4 className="text-white font-semibold mb-4">Worked Example: The Impact of Business Expenses</h4>
              <p className="text-gray-400 text-sm mb-4">
                Two freelancers both earn <strong className="text-gray-200">$120,000 gross income</strong> in 2025-26:
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-4">
                  <h5 className="text-red-400 font-medium mb-3">Freelancer A: Minimal Expenses Claimed</h5>
                  <div className="space-y-2 text-sm text-gray-400">
                    <div className="flex justify-between"><span>Gross income</span><span className="text-white font-medium">$120,000</span></div>
                    <div className="flex justify-between"><span>Business expenses claimed</span><span className="text-red-400 font-medium">$5,000</span></div>
                    <div className="flex justify-between"><span>Taxable income</span><span className="text-white font-medium">$115,000</span></div>
                    <div className="border-t border-gray-700/50 pt-2 flex justify-between"><span className="text-white font-medium">Total tax + Medicare</span><span className="text-red-400 font-bold">$27,588</span></div>
                  </div>
                </div>
                <div className="rounded-xl bg-gray-800/50 border border-emerald-500/20 p-4">
                  <h5 className="text-emerald-400 font-medium mb-3">Freelancer B: $35K in Expenses Claimed</h5>
                  <div className="space-y-2 text-sm text-gray-400">
                    <div className="flex justify-between"><span>Gross income</span><span className="text-white font-medium">$120,000</span></div>
                    <div className="flex justify-between"><span>Business expenses claimed</span><span className="text-emerald-400 font-medium">$35,000</span></div>
                    <div className="flex justify-between"><span>Taxable income</span><span className="text-white font-medium">$85,000</span></div>
                    <div className="border-t border-gray-700/50 pt-2 flex justify-between"><span className="text-white font-medium">Total tax + Medicare</span><span className="text-emerald-400 font-bold">$17,988</span></div>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-emerald-500/20">
                <p className="text-sm text-gray-400">
                  <strong className="text-white">Tax saving: $9,600 per year</strong> &mdash; Freelancer B keeps an extra $9,600 annually by claiming every legitimate business expense. Over five years, that is $48,000.
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-5 mt-6">
              <p className="text-emerald-400 font-medium mb-2">Revenue vs Capital: Quick Reference</p>
              <div className="grid sm:grid-cols-2 gap-4 mt-3">
                <div>
                  <p className="text-gray-200 font-medium text-sm mb-2">Revenue Expenses (Deduct Immediately)</p>
                  <ul className="space-y-1 text-sm text-gray-400">
                    <li>Internet and phone bills</li>
                    <li>Software subscriptions</li>
                    <li>Insurance premiums</li>
                    <li>Office supplies and stationery</li>
                    <li>Accountant and legal fees</li>
                  </ul>
                </div>
                <div>
                  <p className="text-gray-200 font-medium text-sm mb-2">Capital Expenses (Depreciate or Write-Off)</p>
                  <ul className="space-y-1 text-sm text-gray-400">
                    <li>Laptops and computers ($20K write-off)</li>
                    <li>Cameras and equipment</li>
                    <li>Office furniture (desks, chairs)</li>
                    <li>Motor vehicles</li>
                    <li>Items under $300 &mdash; immediate deduction</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: ATO Rules for Claiming Business Expenses */}
        <section id="ato-rules">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center text-white text-sm font-bold">2</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">ATO Rules for Claiming Business Expenses</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              The ATO has four golden rules for claiming <Link href="/glossary/tax-deduction" className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2">tax deductions</Link> on business expenses. Get these right and your claims will be bulletproof. Get them wrong and you risk disallowed deductions, penalties, and audit scrutiny.
            </p>

            <div className="space-y-4 mt-6">
              {/* Rule 1 */}
              <div className="rounded-xl bg-gray-800/50 border border-emerald-500/20 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <span className="text-emerald-400 font-bold text-sm">1</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">The Expense Must Be for Business, Not Private</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  The expense must be <strong className="text-gray-200">directly related to earning your assessable income</strong>. Your Netflix subscription, gym membership, personal clothing, and family dinners are not business expenses &mdash; even if you feel they help you work better. The ATO draws a clear line between business and private spending, and crossing it is the fastest way to trigger an audit.
                </p>
              </div>

              {/* Rule 2 */}
              <div className="rounded-xl bg-gray-800/50 border border-emerald-500/20 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <span className="text-emerald-400 font-bold text-sm">2</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">You Must Have Records (Receipts and Invoices)</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  The ATO requires <strong className="text-gray-200">substantiation for every deduction</strong>. You need receipts, tax invoices, or bank/credit card statements for expenses over $10. &quot;I know I spent that money&quot; is not enough. Digital copies are fully acceptable &mdash; photograph receipts on your phone or store them in your accounting software. Without records, the ATO can disallow the deduction and apply penalties of up to 75% of the tax shortfall.
                </p>
              </div>

              {/* Rule 3 */}
              <div className="rounded-xl bg-gray-800/50 border border-emerald-500/20 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <span className="text-emerald-400 font-bold text-sm">3</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">If Partly Private, Only Claim the Business Portion</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  If an expense is <strong className="text-gray-200">partly personal and partly business</strong>, you can only claim the business portion. Your phone bill might be 60% business &mdash; claim 60%. Your internet might be 50% business &mdash; claim 50%. Your car might be 40% business &mdash; claim 40%. You need a reasonable basis for the apportionment, and the ATO compares your claims against industry benchmarks.
                </p>
              </div>

              {/* Rule 4 */}
              <div className="rounded-xl bg-gray-800/50 border border-emerald-500/20 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <span className="text-emerald-400 font-bold text-sm">4</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Capital Expenses Cannot Be Claimed in Full (Unless Write-Off Applies)</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Capital items &mdash; assets with a useful life beyond one year &mdash; must be claimed via <Link href="/glossary/depreciation" className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2">depreciation</Link> over their effective life. The exception is the <strong className="text-gray-200">$20,000 instant asset write-off</strong>: small businesses (turnover under $10 million) can immediately deduct assets costing less than $20,000 each. Items costing $300 or less and used predominantly for business can also be claimed immediately without a depreciation schedule.
                </p>
              </div>
            </div>

            {/* Record Keeping */}
            <h3 className="text-lg font-semibold text-white mt-8">Record Keeping &amp; Substantiation Rules</h3>
            <p className="text-gray-300 leading-relaxed">
              The ATO requires you to <strong className="text-white">keep all business expense records for at least 5 years</strong> from the date you lodge your tax return. This applies to every receipt, invoice, bank statement, logbook, and diary entry. Here are the specific substantiation rules:
            </p>

            <div className="space-y-3 mt-4">
              <div className="flex items-start gap-3 text-sm text-gray-400">
                <svg className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong className="text-gray-200">Receipts:</strong> Required for all expenses over $10. Must show the supplier name, date, amount, nature of goods/services, and GST amount (if applicable).</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-400">
                <svg className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong className="text-gray-200">Travel diary:</strong> Required for overnight business travel &mdash; record the dates, places visited, purpose of travel, and expenses incurred.</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-400">
                <svg className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong className="text-gray-200">Motor vehicle logbook:</strong> A 12-consecutive-week logbook is required if using the logbook method. Record every trip with date, odometer readings, kilometres, and purpose.</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-400">
                <svg className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong className="text-gray-200">Home office hours:</strong> If using the 67c/hr fixed rate method, keep a contemporaneous record of hours worked from home &mdash; timesheets, diary, or time-tracking app.</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Complete List of Deductible Business Expenses */}
        <section id="deductible-expenses-list">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center text-white text-sm font-bold">3</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Complete List of Deductible Business Expenses</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              This is the comprehensive list of business expenses Australian freelancers and sole traders can claim as <Link href="/glossary/tax-deduction" className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2">tax deductions</Link>. Keep this reference handy at tax time &mdash; it is the difference between leaving money on the table and claiming every dollar you are entitled to.
            </p>

            {/* Comprehensive Expenses Table */}
            <div className="rounded-2xl border border-gray-700/50 overflow-hidden mt-6">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-800/80">
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Category</th>
                    <th className="text-left text-sm font-medium text-emerald-400 px-6 py-4">What You Can Claim</th>
                    <th className="text-left text-sm font-medium text-green-400 px-6 py-4">Rate / Limit</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700/50">
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium text-sm">Home Office</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">Electricity, phone, internet, stationery, computer consumables, furniture depreciation, cleaning</td>
                    <td className="px-6 py-4 text-emerald-400 font-medium text-sm">67c/hr fixed rate OR actual costs method</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium text-sm">Motor Vehicle</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">Business travel: client visits, meetings, supply runs, between work locations</td>
                    <td className="px-6 py-4 text-emerald-400 font-medium text-sm">85c/km (max 5,000 km) OR logbook method</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium text-sm">Equipment &amp; Technology</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">Laptops, computers, monitors, phones, cameras, printers, external drives</td>
                    <td className="px-6 py-4 text-emerald-400 font-medium text-sm">$20K instant write-off; under $300 immediate deduction</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium text-sm">Software &amp; Subscriptions</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">Adobe, Figma, Slack, Notion, cloud storage, hosting, domains, project management</td>
                    <td className="px-6 py-4 text-emerald-400 font-medium text-sm">100% if business-only; business % if mixed use</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium text-sm">Internet &amp; Phone</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">Business percentage of phone plan, home internet, mobile data, landline</td>
                    <td className="px-6 py-4 text-emerald-400 font-medium text-sm">Business-use % (e.g., 60% of $100/mo = $720/yr)</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium text-sm">Professional Development</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">Courses, conferences, workshops, books, certifications, memberships</td>
                    <td className="px-6 py-4 text-emerald-400 font-medium text-sm">100% if related to current work</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium text-sm">Insurance</td>
                    <td className="px-6 py-4 text-gray-300 text-sm"><Link href="/glossary/professional-indemnity" className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2">Professional indemnity</Link>, <Link href="/glossary/public-liability" className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2">public liability</Link>, income protection</td>
                    <td className="px-6 py-4 text-emerald-400 font-medium text-sm">100% of business insurance premiums</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium text-sm">Professional Services</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">Accountant fees, bookkeeper fees, tax agent fees, legal advice (business-related)</td>
                    <td className="px-6 py-4 text-emerald-400 font-medium text-sm">100% of business-related fees</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium text-sm">Marketing &amp; Advertising</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">Website development, Google Ads, social media ads, business cards, domain names, hosting</td>
                    <td className="px-6 py-4 text-emerald-400 font-medium text-sm">100% of business marketing costs</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium text-sm">Travel</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">Flights, accommodation, meals for business travel</td>
                    <td className="px-6 py-4 text-emerald-400 font-medium text-sm">Meals $33.55&ndash;$63.10/day; accommodation $150&ndash;$283/day (ATO reasonable amounts)</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium text-sm">Office Furniture</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">Desks, chairs, shelves, lamps, ergonomic accessories</td>
                    <td className="px-6 py-4 text-emerald-400 font-medium text-sm">$20K write-off or depreciate over 10&ndash;20 years</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium text-sm">Stationery &amp; Supplies</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">Ink, paper, notebooks, pens, postage, packaging materials</td>
                    <td className="px-6 py-4 text-emerald-400 font-medium text-sm">100% of business supplies</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium text-sm">Bank &amp; Finance</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">Business account fees, merchant fees, payment processing fees, interest on business loans</td>
                    <td className="px-6 py-4 text-emerald-400 font-medium text-sm">100% on business accounts</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium text-sm">Subcontractors</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">Payments to subcontractors, freelancers, or agencies you hire for business work</td>
                    <td className="px-6 py-4 text-emerald-400 font-medium text-sm">100% of business subcontractor costs</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium text-sm">Co-working &amp; Rent</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">Co-working space memberships, hot desk fees, studio or office rental</td>
                    <td className="px-6 py-4 text-emerald-400 font-medium text-sm">100% of business premises costs</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-5 mt-6">
              <p className="text-emerald-400 font-medium mb-2">Don&apos;t Forget <Link href="/glossary/gst" className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2">GST</Link> on Your Expenses</p>
              <p className="text-gray-400 text-sm">
                If you are registered for GST, the <Link href="/glossary/gst" className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2">GST</Link> included in your business purchases can be claimed as <Link href="/glossary/input-tax-credits" className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2">input tax credits</Link> on your quarterly <Link href="/glossary/bas" className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2">BAS</Link>. This means you effectively get the GST back on every business expense. A $110 software subscription includes $10 in GST &mdash; claim that $10 back on your BAS every quarter. Over a year, GST credits on all your expenses can add up to thousands of dollars.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Home Office Deductions Deep Dive */}
        <section id="home-office-deep-dive">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center text-white text-sm font-bold">4</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Home Office Deductions Deep Dive</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              For most freelancers working from home, the home office deduction is their <strong className="text-white">single largest expense category</strong>. The ATO offers two methods, and choosing the right one can mean hundreds &mdash; or even thousands &mdash; of dollars difference in your annual claim.
            </p>

            {/* Two Methods Comparison */}
            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-emerald-500/20 p-5">
                <h4 className="text-emerald-400 font-semibold mb-3">Fixed Rate Method: 67c per Hour</h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-3">
                  Claim <strong className="text-gray-200">67 cents for every hour</strong> you work from home. This single rate covers:
                </p>
                <ul className="space-y-1.5 text-sm text-gray-400">
                  <li>Electricity and gas for heating, cooling, and lighting</li>
                  <li>Phone usage (landline and mobile)</li>
                  <li>Internet data usage</li>
                  <li>Stationery and computer consumables (ink, paper)</li>
                </ul>
                <div className="mt-3 rounded-lg bg-gray-900/50 p-3 text-sm font-mono text-emerald-300">
                  1,600 hrs x $0.67 = $1,072/year
                </div>
                <p className="text-gray-500 text-xs mt-2">Based on 33.3 hrs/week x 48 weeks</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-green-500/20 p-5">
                <h4 className="text-green-400 font-semibold mb-3">Actual Cost Method</h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-3">
                  Calculate the <strong className="text-gray-200">actual costs</strong> you incur and apportion by business use. You claim:
                </p>
                <ul className="space-y-1.5 text-sm text-gray-400">
                  <li>Actual electricity/gas bills x floor area % x business use %</li>
                  <li>Actual phone and internet bills x business use %</li>
                  <li><Link href="/glossary/depreciation" className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2">Depreciation</Link> on office furniture (desk, chair, shelves)</li>
                  <li>Repairs, maintenance, and cleaning for your home office</li>
                </ul>
                <div className="mt-3 rounded-lg bg-gray-900/50 p-3 text-sm font-mono text-green-300">
                  $4,800 actual costs x 25% = $1,200/year
                </div>
                <p className="text-gray-500 text-xs mt-2">Requires detailed records and receipts for all expenses</p>
              </div>
            </div>

            {/* Worked Example */}
            <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-900/10 to-green-900/10 p-6 mt-6">
              <h4 className="text-white font-semibold mb-4">Worked Example: Which Method Pays More?</h4>
              <p className="text-gray-400 text-sm mb-4">
                Sarah is a freelance designer who works from home <strong className="text-gray-200">1,600 hours per year</strong>. Her actual home office running costs total <strong className="text-gray-200">$4,800/year</strong>, and her dedicated office is <strong className="text-gray-200">25% of the total floor area</strong>.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="rounded-xl bg-gray-800/50 border border-emerald-500/20 p-4">
                  <h5 className="text-emerald-400 font-medium mb-3">Fixed Rate Method</h5>
                  <div className="space-y-2 text-sm text-gray-400">
                    <div className="flex justify-between"><span>Hours worked from home</span><span className="text-white font-medium">1,600 hrs</span></div>
                    <div className="flex justify-between"><span>Rate per hour</span><span className="text-white font-medium">$0.67</span></div>
                    <div className="border-t border-gray-700/50 pt-2 flex justify-between"><span className="text-white font-medium">Total claim</span><span className="text-emerald-400 font-bold">$1,072</span></div>
                  </div>
                </div>
                <div className="rounded-xl bg-gray-800/50 border border-green-500/20 p-4">
                  <h5 className="text-green-400 font-medium mb-3">Actual Cost Method</h5>
                  <div className="space-y-2 text-sm text-gray-400">
                    <div className="flex justify-between"><span>Total actual costs</span><span className="text-white font-medium">$4,800</span></div>
                    <div className="flex justify-between"><span>Business use %</span><span className="text-white font-medium">25%</span></div>
                    <div className="border-t border-gray-700/50 pt-2 flex justify-between"><span className="text-white font-medium">Total claim</span><span className="text-green-400 font-bold">$1,200</span></div>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-emerald-500/20">
                <p className="text-sm text-gray-400">
                  In this case, the <strong className="text-white">actual cost method gives Sarah $128 more per year</strong>. However, it requires significantly more record-keeping. If Sarah&apos;s actual costs were lower or her floor area percentage smaller, the fixed rate method would be better. Calculate both before choosing.
                </p>
              </div>
            </div>

            {/* Comparison Table */}
            <h3 className="text-lg font-semibold text-white mt-8">Method Comparison</h3>
            <div className="rounded-2xl border border-gray-700/50 overflow-hidden mt-4">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-800/80">
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Factor</th>
                    <th className="text-left text-sm font-medium text-emerald-400 px-6 py-4">Fixed Rate (67c/hr)</th>
                    <th className="text-left text-sm font-medium text-green-400 px-6 py-4">Actual Cost</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700/50">
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm font-medium">Record keeping</td>
                    <td className="px-6 py-3 text-emerald-400 text-sm">Simple &mdash; just log your hours</td>
                    <td className="px-6 py-3 text-green-400 text-sm">Complex &mdash; all bills, receipts, floor plans</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm font-medium">Dedicated office needed?</td>
                    <td className="px-6 py-3 text-emerald-400 text-sm">No &mdash; kitchen table is fine</td>
                    <td className="px-6 py-3 text-green-400 text-sm">Recommended &mdash; need to calculate floor %</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm font-medium">Receipts needed for most items?</td>
                    <td className="px-6 py-3 text-emerald-400 text-sm">No &mdash; only need hours record</td>
                    <td className="px-6 py-3 text-green-400 text-sm">Yes &mdash; every bill and receipt required</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm font-medium">Separate equipment claim?</td>
                    <td className="px-6 py-3 text-emerald-400 text-sm">Yes &mdash; furniture depreciation claimed separately</td>
                    <td className="px-6 py-3 text-green-400 text-sm">Yes &mdash; included in actual cost calculation</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm font-medium">Best for</td>
                    <td className="px-6 py-3 text-emerald-400 text-sm">Most freelancers &mdash; simple, reliable</td>
                    <td className="px-6 py-3 text-green-400 text-sm">High costs, dedicated office, large workspace</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm font-medium">Typical annual claim</td>
                    <td className="px-6 py-3 text-emerald-400 text-sm">$1,000 &ndash; $1,500</td>
                    <td className="px-6 py-3 text-green-400 text-sm">$1,200 &ndash; $4,000+</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-5 mt-6">
              <p className="text-emerald-400 font-medium mb-2">Fixed Rate: What You Can Still Claim Separately</p>
              <p className="text-gray-400 text-sm">
                Even when using the 67c/hr fixed rate, you can still claim <strong className="text-gray-200">separate deductions</strong> for items the rate does not cover. This includes <Link href="/glossary/depreciation" className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2">depreciation</Link> on office furniture (desk, chair, bookshelf), equipment (monitor, printer), and cleaning expenses for your dedicated home office. The fixed rate only covers running expenses &mdash; not capital items.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Common Expense Claiming Mistakes */}
        <section id="common-mistakes">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center text-white text-sm font-bold">5</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Common Expense Claiming Mistakes</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              The ATO uses sophisticated data matching, analytics, and industry benchmarking to detect unusual or inflated expense claims. These are the eight most common mistakes freelancers make &mdash; and every one of them can trigger an audit, disallowed deductions, or penalties.
            </p>

            <div className="space-y-4 mt-6">
              {/* Mistake 1 */}
              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <span className="text-red-400 font-bold text-sm">1</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Claiming 100% of Mixed-Use Items</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Claiming your entire phone bill as a business expense when it is 60% personal use is a <strong className="text-gray-200">classic audit trigger</strong>. The same applies to your internet, laptop, and car. If something is used for both business and personal purposes, you can only claim the business percentage. A typical phone claim is 40-60% business, not 90%. The ATO compares your claims against industry benchmarks and will flag claims that seem unreasonable.
                </p>
              </div>

              {/* Mistake 2 */}
              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <span className="text-red-400 font-bold text-sm">2</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">No Receipts or Records</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Without substantiation, the ATO can <strong className="text-gray-200">disallow your entire claim</strong> and apply penalties of up to 75% of the tax shortfall. &quot;I know I spent the money&quot; is not enough. Photograph receipts on your phone the day you receive them, or use accounting software to capture them digitally. Thermal paper receipts fade within months &mdash; digital is the only reliable method. Keep everything for at least 5 years.
                </p>
              </div>

              {/* Mistake 3 */}
              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <span className="text-red-400 font-bold text-sm">3</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Claiming Capital Items as Revenue Expenses</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  A $3,000 laptop is a <strong className="text-gray-200">capital expense, not a revenue expense</strong>. You cannot simply claim the full $3,000 as a &quot;computer expense&quot; on your tax return. Capital items must be <Link href="/glossary/depreciation" className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2">depreciated</Link> over their effective life, or claimed using the $20,000 instant asset write-off. Getting this wrong can lead to incorrect deductions and ATO scrutiny.
                </p>
              </div>

              {/* Mistake 4 */}
              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <span className="text-red-400 font-bold text-sm">4</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Personal Expenses Disguised as Business</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Your Netflix subscription, gym membership, everyday clothing, and personal meals are <strong className="text-gray-200">not tax deductible</strong>. A meal with a client where you discuss a project may be deductible. Dinner with your partner is not, even if you discuss work. The ATO is increasingly using data matching to identify personal expenses being claimed as business costs.
                </p>
              </div>

              {/* Mistake 5 */}
              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <span className="text-red-400 font-bold text-sm">5</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Overclaiming Home Office Without Dedicated Space</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Claiming the actual cost method for home office expenses when you do not have a <strong className="text-gray-200">dedicated workspace</strong> is problematic. If you work from the kitchen table and share the space with family, calculating a floor area percentage becomes difficult to justify. The fixed rate method (67c/hr) is safer in this situation because it does not require a dedicated room &mdash; just a record of hours worked.
                </p>
              </div>

              {/* Mistake 6 */}
              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <span className="text-red-400 font-bold text-sm">6</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Not Claiming Enough (Leaving Money on the Table)</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Many freelancers are so worried about over-claiming that they <strong className="text-gray-200">under-claim significantly</strong>. They forget to claim bank fees, professional memberships, stationery, postage, co-working costs, and professional development. Every legitimate business expense you fail to claim is money left on the table. Use a comprehensive checklist at tax time to ensure you capture everything.
                </p>
              </div>

              {/* Mistake 7 */}
              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <span className="text-red-400 font-bold text-sm">7</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Missing the $20K Instant Asset Write-Off</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Some freelancers still <Link href="/glossary/depreciation" className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2">depreciate</Link> assets that could be <strong className="text-gray-200">instantly written off</strong>. If your laptop cost $2,500, you do not need to spread the deduction over 4 years. Claim the full amount in the year of purchase under the instant asset write-off. This gives you a larger deduction sooner and simplifies your records. The $20,000 threshold applies per asset, not in total.
                </p>
              </div>

              {/* Mistake 8 */}
              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <span className="text-red-400 font-bold text-sm">8</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Not Keeping a Motor Vehicle Logbook</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  If you drive more than 5,000 business kilometres per year, the <strong className="text-gray-200">logbook method will give you a much larger deduction</strong> than the 85c/km method (which caps at $4,250). But you need a valid 12-week logbook to use it. Many freelancers default to the cents-per-km method simply because they never kept a logbook &mdash; costing themselves potentially thousands of dollars in unclaimed deductions every year.
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-5 mt-6">
              <p className="text-emerald-400 font-medium mb-2">The ATO&apos;s Data Matching Program</p>
              <p className="text-gray-400 text-sm">
                The ATO receives data from banks, health insurers, share registries, state government agencies, online selling platforms, and payment processors. They use this to <strong className="text-gray-200">cross-check your claims</strong> against third-party data. If your expense claims do not match the data the ATO already holds, they will flag it for review. Honesty and accuracy are always the best policy &mdash; claim everything you are entitled to, but nothing more.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: How InvoiceFlow Tracks Business Expenses */}
        <section id="invoiceflow-tracking">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center text-white text-sm font-bold">6</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">How InvoiceFlow Tracks Business Expenses</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Tracking business expenses manually is tedious and error-prone. Spreadsheets get messy. Receipts get lost in shoeboxes. By the time tax season arrives, you are scrambling to reconstruct a year&apos;s worth of spending. InvoiceFlow is built to <strong className="text-white">solve this problem for freelancers</strong>.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-emerald-500/20 p-5">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">Expense Categories</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Log every business expense as it happens and categorise by deduction type &mdash; home office, vehicle, equipment, software, insurance, professional services, marketing, and travel. Everything is organised when tax time arrives, with no end-of-year scrambling.
                </p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-emerald-500/20 p-5">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">Receipt Storage</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Snap a photo of every receipt and attach it to the expense. Digital copies are ATO-compliant. No more shoeboxes of fading thermal paper. Every expense is substantiated and audit-ready from day one, with records kept securely for the required 5 years.
                </p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-emerald-500/20 p-5">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2"><Link href="/glossary/gst" className="text-white hover:text-emerald-400 transition-colors">GST</Link> Input Credit Tracking</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Automatically separates <Link href="/glossary/gst" className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2">GST</Link> on business purchases so you can claim <Link href="/glossary/input-tax-credits" className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2">input tax credits</Link> accurately on your quarterly <Link href="/glossary/bas" className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2">BAS</Link>. No more guessing which expenses include GST and which do not.
                </p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-emerald-500/20 p-5">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">BAS-Ready Expense Reports</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Generate quarterly expense reports pre-categorised for your <Link href="/glossary/bas" className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2">BAS</Link> lodgement. Expenses are automatically grouped by GST status, deduction category, and payment method. Lodge your BAS with confidence knowing every figure is accurate.
                </p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-emerald-500/20 p-5">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">Profit &amp; Loss Visibility</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  See your real <Link href="/glossary/profit-and-loss" className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2">profit and loss</Link> in real time. Income minus expenses equals your true profit. No more guessing whether you are actually making money. InvoiceFlow shows you the complete picture &mdash; revenue, expenses, tax liability, and net profit &mdash; updated as you go.
                </p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-emerald-500/20 p-5">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">Tax-Time Export</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  When EOFY arrives, export a complete business expense summary broken down by deduction category. Hand it to your accountant or use it to complete your own <Link href="/glossary/income-tax" className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2">tax return</Link>. Every dollar is accounted for, every receipt is attached, every claim is substantiated.
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-5 mt-6">
              <p className="text-emerald-400 font-medium mb-2">Real-Time Tax Estimate</p>
              <p className="text-gray-400 text-sm">
                InvoiceFlow tracks your income and business expenses in real time, so you always know your <strong className="text-gray-200">estimated tax liability</strong>. No surprises at tax time. See exactly how much to set aside each quarter for <Link href="/glossary/income-tax" className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2">income tax</Link>, and plan expense timing to minimise your bill. Use our <Link href="/tools/freelance-tax-estimator" className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2">freelance tax estimator</Link> to model the impact of your deductions right now.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Related Tools */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-white mb-2 text-center">Related Tools</h2>
        <p className="text-gray-400 text-center mb-8">Free tools to help you find, track, and manage your business expenses.</p>
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
        <p className="text-gray-400 text-center mb-8">In-depth guides on tax, expenses, and freelancing in Australia.</p>
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
            Track Every Business Expense Automatically
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            InvoiceFlow tracks every business expense, categorises it for your tax return and BAS, and ensures you claim every deduction you are entitled to. Stop leaving money on the table.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button>Start Free &mdash; No Card Required</Button>
            </Link>
            <Link href="/tools/tax-deduction-finder">
              <Button variant="secondary">Find Your Tax Deductions</Button>
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
