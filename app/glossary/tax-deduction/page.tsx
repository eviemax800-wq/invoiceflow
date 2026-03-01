import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Tax Deductions for Freelancers: Complete Australian Guide 2025-26 — InvoiceFlow',
  description:
    'What tax deductions can freelancers claim in Australia? Complete 2025-26 guide to sole trader tax deductions — home office (67c/hr), vehicle (85c/km), $20K instant write-off, insurance, software, professional development. ATO-accurate with common mistakes to avoid.',
  keywords: [
    'tax deductions freelancer australia',
    'sole trader tax deductions list',
    'work from home deduction 2025',
    'freelance business expense claims',
    'home office deduction australia',
    'vehicle deduction freelancer',
    'instant asset write-off 2025',
    'ATO tax deductions sole trader',
    'freelancer tax deductions list australia',
    'self employed tax deductions',
    'work related expenses freelancer',
    'tax deductible expenses australia',
  ],
  alternates: { canonical: '/glossary/tax-deduction' },
  openGraph: {
    title: 'Tax Deductions for Freelancers: Complete Australian Guide 2025-26 — InvoiceFlow',
    description:
      'Every tax deduction Australian freelancers can claim in 2025-26: home office, vehicle, equipment, insurance, software, and more. ATO-accurate with common mistakes to avoid.',
    url: 'https://invoiceflow-teal.vercel.app/glossary/tax-deduction',
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
    { '@type': 'ListItem', position: 3, name: 'Tax Deduction', item: `${BASE_URL}/glossary/tax-deduction` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a tax deduction and how does it reduce my tax?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A tax deduction reduces your taxable income, not your tax bill directly. If you earn $120,000 and claim $30,000 in legitimate deductions, you only pay tax on $90,000. The actual tax saving depends on your marginal tax rate. At the 30% bracket (income between $45,001 and $135,000), every $1,000 in deductions saves you $300 in income tax plus $20 in Medicare levy — a total of $320. The ATO\'s golden rule is that a deduction must be directly related to earning your assessable income. You must have spent the money yourself (not been reimbursed), and you need records to prove it.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the most common tax deductions for Australian freelancers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most common tax deductions for Australian freelancers include: home office expenses (67 cents per hour fixed rate or actual cost method), vehicle expenses (85 cents per kilometre up to 5,000 km, or logbook method), equipment and technology (instant asset write-off up to $20,000 per item), internet and phone (business-use percentage), software subscriptions (100% if business-only), professional development (courses, conferences, books), business insurance (professional indemnity, public liability, income protection), and professional services (accountant fees, legal fees). You can also claim marketing costs, bank fees on business accounts, stationery, postage, and professional memberships.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I claim work from home deductions in 2025-26?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For the 2025-26 financial year, there are two methods for claiming home office deductions. The Fixed Rate Method lets you claim 67 cents per hour worked from home, covering electricity, gas, phone, internet, stationery, and computer consumables. You must keep a record of hours worked from home (timesheet, diary, or roster) and can still separately claim depreciation on office furniture and equipment. The Actual Cost Method requires you to calculate your actual expenses and apportion them by business-use percentage. This means measuring your home office as a percentage of total floor area, tracking actual bills, and claiming depreciation on dedicated items. The actual cost method requires more record-keeping but can yield higher deductions if you have a dedicated office space and high running costs.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I claim my car as a tax deduction as a freelancer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, you can claim vehicle expenses for business-related travel such as visiting clients, attending meetings, picking up supplies, or travelling between work locations. There are two methods: the Cents per Kilometre method (85 cents per km for 2025-26, capped at 5,000 business km per year for a maximum deduction of $4,250) and the Logbook method (maintain a 12-week logbook to establish your business-use percentage, then claim that percentage of all actual vehicle costs including fuel, insurance, registration, depreciation, and repairs with no kilometre cap). You cannot claim travel between your home and a regular place of work — that is considered commuting. Parking fees, tolls, and public transport fares for business trips are also deductible.',
      },
    },
    {
      '@type': 'Question',
      name: 'What mistakes should I avoid when claiming tax deductions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most common mistakes freelancers make with tax deductions include: claiming expenses without keeping receipts or records (the ATO requires substantiation for 5 years), claiming personal expenses as business deductions (e.g., personal phone calls, non-work clothing), overestimating the business-use percentage of shared items like phones and internet, not apportioning mixed-use assets correctly, missing the $20,000 instant asset write-off by depreciating items that could be written off immediately, forgetting to claim voluntary super contributions as a deduction, not claiming GST credits on eligible purchases when lodging your BAS, and not keeping records for the required 5-year retention period. The ATO uses data matching and analytics to detect unusual claims, so accuracy is essential.',
      },
    },
  ],
};

const tocItems = [
  { id: 'what-is-tax-deduction', label: '1. What Is a Tax Deduction?' },
  { id: 'common-deductions', label: '2. Common Deductions for Freelancers' },
  { id: 'home-office-deep-dive', label: '3. Home Office Deep Dive' },
  { id: 'vehicle-and-travel', label: '4. Vehicle & Travel Deductions' },
  { id: 'common-mistakes', label: '5. Common Mistakes to Avoid' },
  { id: 'invoiceflow-integration', label: '6. InvoiceFlow Integration' },
];

const relatedTools = [
  {
    href: '/tools/tax-deduction-finder',
    name: 'Tax Deduction Finder',
    description: 'Discover every tax deduction you can claim as an Australian freelancer or sole trader.',
    icon: (
      <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
  {
    href: '/tools/freelance-tax-estimator',
    name: 'Freelance Tax Estimator',
    description: 'Purpose-built tax calculator for freelancers — includes deductions, super, and Medicare levy.',
    icon: (
      <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
      </svg>
    ),
  },
  {
    href: '/tools/tax-estimator',
    name: 'Tax Estimator',
    description: 'Estimate your income tax, Medicare levy, and take-home pay as an Australian sole trader.',
    icon: (
      <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18v-.008zm-12 0h.008v.008H6v-.008z" />
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
    href: '/guides/setting-freelance-rates',
    name: 'Setting Your Freelance Rates',
    description: 'How to calculate profitable rates that cover tax, super, deductions, and all your business costs.',
  },
];

export default function TaxDeductionGlossaryPage() {
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
            <span className="text-white">Tax Deduction</span>
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
            Tax Deductions{' '}
            <span className="bg-gradient-to-r from-emerald-500 to-green-500 bg-clip-text text-transparent">
              for Australian Freelancers
            </span>
          </h1>

          {/* Summary */}
          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            Tax deductions are your most powerful tool for reducing what you owe the ATO. Every dollar you claim as a legitimate deduction is a dollar you don&apos;t pay tax on. This guide covers every deduction available to Australian freelancers and sole traders in 2025-26 &mdash; home office, vehicle, equipment, insurance, and more &mdash; with ATO rules, amounts, and common mistakes to avoid.
          </p>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>16 min read</span>
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
                <p className="text-gray-400 text-sm">Per hour worked from home &mdash; covers electricity, phone, internet, stationery</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs font-bold">85c</span>
              <div>
                <p className="text-white font-medium text-sm">Vehicle Per Kilometre</p>
                <p className="text-gray-400 text-sm">Per business kilometre &mdash; capped at 5,000 km ($4,250 max deduction)</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs font-bold">$20K</span>
              <div>
                <p className="text-white font-medium text-sm">Instant Asset Write-Off</p>
                <p className="text-gray-400 text-sm">Deduct the full cost of business assets under $20,000 in the year of purchase</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs font-bold">5 yr</span>
              <div>
                <p className="text-white font-medium text-sm">Record Keeping</p>
                <p className="text-gray-400 text-sm">ATO requires you to keep receipts and records for at least 5 years</p>
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

        {/* Section 1: What Is a Tax Deduction? */}
        <section id="what-is-tax-deduction">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center text-white text-sm font-bold">1</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">What Is a Tax Deduction?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              A tax deduction is an expense that <strong className="text-white">reduces your taxable income</strong>. It does not reduce your tax bill dollar-for-dollar &mdash; instead, it reduces the income on which your tax is calculated. If you earn $120,000 and claim $30,000 in legitimate deductions, you only pay tax on $90,000. The actual tax saving depends on your marginal tax rate.
            </p>
            <p className="text-gray-300 leading-relaxed">
              The ATO&apos;s golden rule for deductions is straightforward: the expense must have a <strong className="text-white">nexus (direct connection) to earning your assessable income</strong>. You must have spent the money yourself and not been reimbursed, and you need records to prove it. If an expense is partly personal and partly business, you can only claim the business portion.
            </p>
            <p className="text-gray-300 leading-relaxed">
              For freelancers, deductions are particularly powerful because you typically incur a <strong className="text-white">wide range of business expenses</strong> that employees do not. Your home office, your car, your equipment, your software, your insurance &mdash; all of these can reduce your taxable income. The difference between a freelancer who claims every legitimate deduction and one who does not can be <strong className="text-white">thousands of dollars in tax savings</strong> every year.
            </p>

            {/* Worked Example */}
            <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-900/10 to-green-900/10 p-6 mt-6">
              <h4 className="text-white font-semibold mb-4">Worked Example: The Power of Deductions</h4>
              <p className="text-gray-400 text-sm mb-4">
                Let&apos;s compare two freelancers who both earn <strong className="text-gray-200">$120,000 gross income</strong> in 2025-26:
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-4">
                  <h5 className="text-red-400 font-medium mb-3">Freelancer A: No Deductions</h5>
                  <div className="space-y-2 text-sm text-gray-400">
                    <div className="flex justify-between"><span>Taxable income</span><span className="text-white font-medium">$120,000</span></div>
                    <div className="flex justify-between"><span>Income tax</span><span className="text-red-400 font-medium">$26,788</span></div>
                    <div className="flex justify-between"><span>Medicare levy (2%)</span><span className="text-red-400 font-medium">$2,400</span></div>
                    <div className="border-t border-gray-700/50 pt-2 flex justify-between"><span className="text-white font-medium">Total tax</span><span className="text-red-400 font-bold">$29,188</span></div>
                  </div>
                </div>
                <div className="rounded-xl bg-gray-800/50 border border-emerald-500/20 p-4">
                  <h5 className="text-emerald-400 font-medium mb-3">Freelancer B: $30K in Deductions</h5>
                  <div className="space-y-2 text-sm text-gray-400">
                    <div className="flex justify-between"><span>Taxable income</span><span className="text-white font-medium">$90,000</span></div>
                    <div className="flex justify-between"><span>Income tax</span><span className="text-emerald-400 font-medium">$17,788</span></div>
                    <div className="flex justify-between"><span>Medicare levy (2%)</span><span className="text-emerald-400 font-medium">$1,800</span></div>
                    <div className="border-t border-gray-700/50 pt-2 flex justify-between"><span className="text-white font-medium">Total tax</span><span className="text-emerald-400 font-bold">$19,588</span></div>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-emerald-500/20">
                <p className="text-sm text-gray-400">
                  <strong className="text-white">Tax saving: $9,600 per year</strong> &mdash; just by claiming legitimate deductions. Freelancer B keeps an extra $9,600 in their pocket, every single year. Over five years, that is $48,000.
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-5 mt-6">
              <p className="text-emerald-400 font-medium mb-2">The Three Rules of Tax Deductions</p>
              <div className="space-y-2 text-gray-400 text-sm">
                <p><strong className="text-gray-200">1. Nexus:</strong> The expense must be directly related to earning your assessable income.</p>
                <p><strong className="text-gray-200">2. Not reimbursed:</strong> You must have paid for the expense yourself and not been reimbursed by a client.</p>
                <p><strong className="text-gray-200">3. Substantiation:</strong> You must have records (receipts, invoices, bank statements) to prove the expense. Keep them for 5 years.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Common Deductions for Freelancers */}
        <section id="common-deductions">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center text-white text-sm font-bold">2</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Common Deductions for Freelancers</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Here is a comprehensive breakdown of every major <Link href="/glossary/income-tax" className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2">tax deduction</Link> category available to Australian freelancers and sole traders in 2025-26. Keep this list handy at tax time &mdash; it is the difference between leaving money on the table and claiming every dollar you are entitled to.
            </p>

            {/* Comprehensive Deductions Table */}
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
                    <td className="px-6 py-4 text-gray-300 text-sm">Electricity, phone, internet, stationery, computer consumables</td>
                    <td className="px-6 py-4 text-emerald-400 font-medium text-sm">67c/hr fixed rate OR actual cost method</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium text-sm">Vehicle</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">Business travel: client visits, meetings, supply runs</td>
                    <td className="px-6 py-4 text-emerald-400 font-medium text-sm">85c/km (max 5,000 km) OR logbook method</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium text-sm">Equipment</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">Laptops, cameras, monitors, desks, chairs, printers</td>
                    <td className="px-6 py-4 text-emerald-400 font-medium text-sm">$20K instant write-off; &lt;$300 immediate deduction</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium text-sm">Internet &amp; Phone</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">Business percentage of phone plan, home internet, mobile data</td>
                    <td className="px-6 py-4 text-emerald-400 font-medium text-sm">Business-use % (e.g., 60% of $100/mo = $720/yr)</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium text-sm">Software &amp; Subscriptions</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">Adobe, Figma, Slack, Notion, cloud storage, hosting, domains</td>
                    <td className="px-6 py-4 text-emerald-400 font-medium text-sm">100% if business-only; business % if mixed use</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium text-sm">Professional Development</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">Courses, conferences, workshops, books, certifications</td>
                    <td className="px-6 py-4 text-emerald-400 font-medium text-sm">100% if related to current work</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium text-sm">Insurance</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">Professional indemnity, public liability, income protection</td>
                    <td className="px-6 py-4 text-emerald-400 font-medium text-sm">100% of business insurance premiums</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium text-sm">Professional Services</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">Accountant fees, tax agent fees, legal advice (business-related)</td>
                    <td className="px-6 py-4 text-emerald-400 font-medium text-sm">100% of business-related fees</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium text-sm">Super Contributions</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">Voluntary concessional contributions to your super fund</td>
                    <td className="px-6 py-4 text-emerald-400 font-medium text-sm">Up to $30,000/yr (carry-forward available)</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium text-sm">Marketing &amp; Advertising</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">Website costs, Google Ads, social media ads, business cards</td>
                    <td className="px-6 py-4 text-emerald-400 font-medium text-sm">100% of business marketing costs</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-5 mt-6">
              <p className="text-emerald-400 font-medium mb-2">Don&apos;t Forget These Often-Missed Deductions</p>
              <div className="grid sm:grid-cols-2 gap-3 mt-3">
                <ul className="space-y-1.5 text-sm text-gray-400">
                  <li>Bank fees on your business account</li>
                  <li>Professional membership and association fees</li>
                  <li>Stationery and postage costs</li>
                  <li>Co-working space fees or hot desk rental</li>
                </ul>
                <ul className="space-y-1.5 text-sm text-gray-400">
                  <li>Travel for work (flights, accommodation, meals)</li>
                  <li>Subscriptions to trade publications</li>
                  <li><Link href="/glossary/depreciation" className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2">Depreciation</Link> on assets over $20,000</li>
                  <li>Subcontractor payments</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Home Office Deep Dive */}
        <section id="home-office-deep-dive">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center text-white text-sm font-bold">3</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Home Office Deep Dive</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              For most freelancers, the home office deduction is their <strong className="text-white">single largest deduction category</strong>. Getting it right can mean thousands of dollars in tax savings. The ATO offers two methods &mdash; and choosing the right one depends on your situation.
            </p>

            {/* Two Methods Comparison */}
            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-emerald-500/20 p-5">
                <h4 className="text-emerald-400 font-semibold mb-3">Fixed Rate Method: 67c per Hour</h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-3">
                  Claim <strong className="text-gray-200">67 cents for every hour</strong> you work from home. This single rate covers:
                </p>
                <ul className="space-y-1.5 text-sm text-gray-400">
                  <li>Electricity and gas for heating/cooling/lighting</li>
                  <li>Phone usage (landline and mobile)</li>
                  <li>Internet data usage</li>
                  <li>Stationery and computer consumables (ink, paper)</li>
                </ul>
                <div className="mt-3 rounded-lg bg-gray-900/50 p-3 text-sm font-mono text-emerald-300">
                  1,800 hrs x $0.67 = $1,206/year
                </div>
                <p className="text-gray-500 text-xs mt-2">Based on 37.5 hrs/week x 48 weeks</p>
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
                  <li>Repairs and maintenance to your home office</li>
                </ul>
                <div className="mt-3 rounded-lg bg-gray-900/50 p-3 text-sm font-mono text-green-300">
                  Actual costs x business % = deduction
                </div>
                <p className="text-gray-500 text-xs mt-2">Requires detailed records and receipts for all expenses</p>
              </div>
            </div>

            {/* Comparison Table */}
            <h3 className="text-lg font-semibold text-white mt-8">Which Method Is Better?</h3>
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
                    <td className="px-6 py-3 text-green-400 text-sm">Recommended &mdash; easier to calculate floor %</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm font-medium">Separate equipment claim?</td>
                    <td className="px-6 py-3 text-emerald-400 text-sm">Yes &mdash; furniture and equipment depreciation claimed separately</td>
                    <td className="px-6 py-3 text-green-400 text-sm">Yes &mdash; included in actual cost calculation</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm font-medium">Best for</td>
                    <td className="px-6 py-3 text-emerald-400 text-sm">Most freelancers &mdash; simple, reliable</td>
                    <td className="px-6 py-3 text-green-400 text-sm">High costs, dedicated office, large home office</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm font-medium">Typical annual claim</td>
                    <td className="px-6 py-3 text-emerald-400 text-sm">$1,000 &ndash; $1,500</td>
                    <td className="px-6 py-3 text-green-400 text-sm">$1,500 &ndash; $4,000+</td>
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

            <h3 className="text-lg font-semibold text-white mt-6">Record Keeping Requirements</h3>
            <div className="space-y-3 mt-3">
              <div className="flex items-start gap-3 text-sm text-gray-400">
                <svg className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong className="text-gray-200">Fixed rate:</strong> Keep a record of hours worked from home for the full year &mdash; a timesheet, diary, roster, or time-tracking app. The ATO no longer accepts estimates.</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-400">
                <svg className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong className="text-gray-200">Actual cost:</strong> Keep all utility bills, internet bills, phone bills, and receipts for office supplies. Measure your home office as a percentage of total floor area. Document your business-use percentage with a reasonable basis.</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Vehicle & Travel */}
        <section id="vehicle-and-travel">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center text-white text-sm font-bold">4</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Vehicle &amp; Travel Deductions</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              If you use your car for business purposes &mdash; visiting clients, attending meetings, picking up supplies, or travelling between work locations &mdash; you can claim vehicle expenses. The ATO offers two methods, and choosing the right one can make a significant difference to your deduction.
            </p>

            {/* Two Methods */}
            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-emerald-500/20 p-5">
                <h4 className="text-emerald-400 font-semibold mb-3">Cents per Kilometre Method</h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-3">
                  Claim <strong className="text-gray-200">85 cents per business kilometre</strong> in 2025-26. This is a single rate that covers all vehicle running costs &mdash; fuel, depreciation, registration, insurance, repairs, and maintenance.
                </p>
                <div className="rounded-lg bg-gray-900/50 p-3 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Rate</span>
                    <span className="text-emerald-400 font-medium">85c per km</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Maximum km</span>
                    <span className="text-emerald-400 font-medium">5,000 km per year</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Maximum deduction</span>
                    <span className="text-emerald-400 font-medium">$4,250 per year</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Logbook needed?</span>
                    <span className="text-emerald-400 font-medium">No</span>
                  </div>
                </div>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-green-500/20 p-5">
                <h4 className="text-green-400 font-semibold mb-3">Logbook Method</h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-3">
                  Keep a <strong className="text-gray-200">12-week logbook</strong> recording every trip, then claim your established business-use percentage of all actual vehicle costs for the full year.
                </p>
                <div className="rounded-lg bg-gray-900/50 p-3 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Rate</span>
                    <span className="text-green-400 font-medium">Actual costs x business %</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Maximum km</span>
                    <span className="text-green-400 font-medium">No cap</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Costs claimable</span>
                    <span className="text-green-400 font-medium">Fuel, rego, insurance, depreciation, repairs</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Logbook needed?</span>
                    <span className="text-green-400 font-medium">Yes &mdash; 12 consecutive weeks</span>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">When to Use Each Method</h3>
            <div className="grid sm:grid-cols-2 gap-4 mt-3">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-emerald-400 font-medium mb-2">Choose Cents per Kilometre When:</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>You drive fewer than 5,000 business km per year</li>
                  <li>You want simple record-keeping (no logbook)</li>
                  <li>Your vehicle running costs are low (fuel-efficient car)</li>
                  <li>You cannot be bothered maintaining a 12-week logbook</li>
                </ul>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-green-400 font-medium mb-2">Choose Logbook Method When:</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>You drive more than 5,000 business km per year</li>
                  <li>Your vehicle costs are high (rego, insurance, fuel, loan interest)</li>
                  <li>Your business-use percentage is high (60%+)</li>
                  <li>You want to claim depreciation on the vehicle itself</li>
                </ul>
              </div>
            </div>

            {/* Other Travel */}
            <h3 className="text-lg font-semibold text-white mt-8">Other Travel Deductions</h3>
            <div className="grid sm:grid-cols-2 gap-4 mt-3">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-white font-semibold mb-3">Local Travel</h4>
                <ul className="space-y-1.5 text-sm text-gray-400">
                  <li>Parking fees at client sites or business meetings</li>
                  <li>Tolls for business-related road trips</li>
                  <li>Public transport fares for business travel (train, bus, tram)</li>
                  <li>Ride-share costs (Uber, DiDi) for business trips</li>
                </ul>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-white font-semibold mb-3">Overnight Travel</h4>
                <ul className="space-y-1.5 text-sm text-gray-400">
                  <li>Accommodation for business trips (hotels, Airbnb)</li>
                  <li>Meals during overnight business travel (ATO reasonable amounts)</li>
                  <li>Flights for business purposes (interstate client visits, conferences)</li>
                  <li>Travel insurance for business trips</li>
                </ul>
              </div>
            </div>

            <div className="rounded-xl bg-red-500/5 border border-red-500/20 p-5 mt-6">
              <p className="text-red-400 font-medium mb-2">What You Cannot Claim</p>
              <p className="text-gray-400 text-sm">
                <strong className="text-gray-200">Commuting costs</strong> between your home and a regular place of work are never deductible &mdash; even if you stop at a client&apos;s office on the way. Travel that is <strong className="text-gray-200">private in nature</strong> (holidays, personal errands) cannot be claimed. If a trip is partly business and partly personal, you can only claim the business portion. Meals during day trips (not overnight) are generally not deductible unless you are travelling for work purposes and your trip requires you to sleep away from home.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Common Mistakes to Avoid */}
        <section id="common-mistakes">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center text-white text-sm font-bold">5</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Common Mistakes to Avoid</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              The ATO uses sophisticated data matching, analytics, and benchmarking to detect unusual or inflated claims. These are the eight most common mistakes freelancers make with deductions &mdash; and every one of them can trigger an audit or result in penalties.
            </p>

            <div className="space-y-4 mt-6">
              {/* Mistake 1 */}
              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <span className="text-red-400 font-bold text-sm">1</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Claiming Without Receipts</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  The ATO requires <strong className="text-gray-200">substantiation for every deduction</strong>. &quot;I definitely spent that money&quot; is not enough. You need receipts, tax invoices, or bank/credit card statements. Digital copies are acceptable &mdash; photograph receipts on your phone the day you receive them. Without records, the ATO can disallow the deduction entirely and apply penalties of up to 75% of the tax shortfall.
                </p>
              </div>

              {/* Mistake 2 */}
              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <span className="text-red-400 font-bold text-sm">2</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Claiming Personal Expenses as Business</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Your Netflix subscription, gym membership, everyday clothing, and personal meals are <strong className="text-gray-200">not tax deductible</strong> &mdash; even if you think they help you work better. The ATO is very clear: the expense must have a direct nexus to earning your income. A meal with a client where you discuss business may be deductible. Dinner with your partner is not, even if you talk about work.
                </p>
              </div>

              {/* Mistake 3 */}
              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <span className="text-red-400 font-bold text-sm">3</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Overestimating Business-Use Percentage</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Claiming 100% business use on your phone when you also make personal calls, or 80% business use on your internet when your household streams movies every night &mdash; these are <strong className="text-gray-200">red flags for the ATO</strong>. Be honest and reasonable. A typical phone business-use claim is 40-60%, not 90%. The ATO compares your claims against industry benchmarks.
                </p>
              </div>

              {/* Mistake 4 */}
              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <span className="text-red-400 font-bold text-sm">4</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Not Apportioning Mixed-Use Assets</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  If you buy a laptop and use it 70% for business and 30% for personal use (gaming, social media, personal emails), you can only claim <strong className="text-gray-200">70% of the cost</strong>. The same applies to your car, phone, internet, and any other asset with mixed use. Claiming the full amount on a shared item is a common audit trigger.
                </p>
              </div>

              {/* Mistake 5 */}
              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <span className="text-red-400 font-bold text-sm">5</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Missing the $20K Instant Asset Write-Off</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Some freelancers still <Link href="/glossary/depreciation" className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2">depreciate</Link> items that could be <strong className="text-gray-200">instantly written off</strong>. If your laptop cost $2,500, you do not need to spread the deduction over 4 years &mdash; claim the full amount in the year of purchase under the instant asset write-off. This gives you a larger deduction sooner and simplifies your records.
                </p>
              </div>

              {/* Mistake 6 */}
              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <span className="text-red-400 font-bold text-sm">6</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Not Claiming Super Contributions</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  As a sole trader, voluntary super contributions up to <strong className="text-gray-200">$30,000 per year</strong> are tax deductible. Many freelancers either forget to make super contributions entirely, or forget to lodge the &quot;Notice of intent to claim a deduction&quot; form with their super fund. Without this notice lodged <em>before</em> you lodge your tax return, the deduction is lost.
                </p>
              </div>

              {/* Mistake 7 */}
              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <span className="text-red-400 font-bold text-sm">7</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Forgetting to Claim <Link href="/glossary/gst" className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2">GST</Link> Credits on <Link href="/glossary/bas" className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2">BAS</Link></h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  If you are registered for GST, you can claim <strong className="text-gray-200">input tax credits</strong> on the GST included in your business purchases. Every time you buy something for your business that includes GST, that GST amount is recoverable on your quarterly BAS. Failing to claim these credits means you are overpaying GST to the ATO every quarter.
                </p>
              </div>

              {/* Mistake 8 */}
              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <span className="text-red-400 font-bold text-sm">8</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Not Keeping Records for 5 Years</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  The ATO requires you to <strong className="text-gray-200">retain all records for at least 5 years</strong> from the date you lodge your tax return. This includes receipts, invoices, bank statements, logbooks, timesheets, and depreciation schedules. If the ATO audits you in year 4 and you have thrown away your receipts, the deductions will be disallowed. Use cloud storage or accounting software to keep digital copies safe.
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-5 mt-6">
              <p className="text-emerald-400 font-medium mb-2">The ATO&apos;s Data Matching Program</p>
              <p className="text-gray-400 text-sm">
                The ATO receives data from banks, health insurers, share registries, state government agencies, employers, and online selling platforms. They use this to <strong className="text-gray-200">cross-check your claims</strong> against third-party data. If you claim $15,000 in vehicle expenses but your rego records show the car was barely used, or your insurance was for private use only, the ATO will flag it. Honesty and accuracy are always the best policy.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: InvoiceFlow Integration */}
        <section id="invoiceflow-integration">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center text-white text-sm font-bold">6</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">InvoiceFlow Integration</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Tracking deductions manually is tedious and error-prone. Spreadsheets get messy. Receipts get lost. By the time tax season rolls around, you are scrambling to reconstruct a year&apos;s worth of expenses. InvoiceFlow is built to <strong className="text-white">solve this problem for freelancers</strong>.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-emerald-500/20 p-5">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">Expense Tracking</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Log every business expense as it happens. Categorise by deduction type (home office, vehicle, equipment, software, insurance) so everything is organised when tax time arrives. No more end-of-year scrambling.
                </p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-emerald-500/20 p-5">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2"><Link href="/glossary/bas" className="text-white hover:text-emerald-400 transition-colors">BAS</Link> Categorisation</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Expenses are automatically categorised for your quarterly <Link href="/glossary/bas" className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2">BAS</Link> lodgement. <Link href="/glossary/gst" className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2">GST</Link> on business purchases is separated so you can claim input tax credits accurately. No more guessing which expenses include GST and which do not.
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
                  When EOFY arrives, export a complete deductions summary broken down by category. Hand it to your accountant or use it to complete your own <Link href="/glossary/income-tax" className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2">tax return</Link>. Every dollar is accounted for, every receipt is attached.
                </p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-emerald-500/20 p-5">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">Receipt Capture</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Snap a photo of every receipt and attach it to the expense. Digital copies are ATO-compliant. No more shoeboxes of fading thermal paper receipts. Every deduction is substantiated and audit-ready from day one.
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-5 mt-6">
              <p className="text-emerald-400 font-medium mb-2">Real-Time Tax Estimate</p>
              <p className="text-gray-400 text-sm">
                InvoiceFlow tracks your income and deductions in real time, so you always know your <strong className="text-gray-200">estimated tax liability</strong>. No more surprises at tax time. You can see exactly how much to set aside each quarter for <Link href="/glossary/income-tax" className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2">income tax</Link> and plan deduction timing to minimise your bill. Use our <Link href="/tools/freelance-tax-estimator" className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2">freelance tax estimator</Link> to see the impact of your deductions right now.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Related Tools */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-white mb-2 text-center">Related Tools</h2>
        <p className="text-gray-400 text-center mb-8">Free tools to help you find and manage your tax deductions.</p>
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
        <p className="text-gray-400 text-center mb-8">In-depth guides on tax, deductions, and freelancing in Australia.</p>
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
            Never Miss a Deduction Again
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            InvoiceFlow tracks every business expense, categorises it for your tax return, and ensures you claim every deduction you are entitled to. Stop leaving money on the table.
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
