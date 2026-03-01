import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Work From Home Deductions: ATO Rules, Methods & Claims for Freelancers — InvoiceFlow',
  description:
    'How to claim work from home deductions in Australia 2025-26. Fixed rate method (67c/hr), actual cost method, occupancy expenses, running expenses, record-keeping requirements, and worked examples for freelancers and sole traders.',
  keywords: [
    'working from home tax deductions 2025',
    'home office deductions australia',
    'ATO work from home deductions',
    '67 cents per hour method',
    'home office expenses freelancer',
    'running expenses home office',
    'work from home tax claim',
    'occupancy expenses home office',
  ],
  alternates: { canonical: '/glossary/work-from-home-deductions' },
  openGraph: {
    title: 'Work From Home Deductions: ATO Rules, Methods & Claims for Freelancers — InvoiceFlow',
    description:
      'Everything Australian freelancers need to know about work from home deductions: the 67c/hr fixed rate method, actual cost method, running vs occupancy expenses, CGT implications, and record-keeping requirements.',
    url: 'https://invoiceflow-teal.vercel.app/glossary/work-from-home-deductions',
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
    { '@type': 'ListItem', position: 3, name: 'Work From Home Deductions', item: `${BASE_URL}/glossary/work-from-home-deductions` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What can I claim for working from home in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There are two categories of work from home deductions. (1) Running expenses — electricity, phone, internet, stationery, computer consumables, and cleaning of a dedicated workspace. These can be claimed using the fixed rate method (67 cents per hour) or the actual cost method. (2) Occupancy expenses — rent, mortgage interest, property insurance, land tax, and council rates. Only freelancers and sole traders with a dedicated home office used exclusively for business can claim occupancy expenses. Employees generally cannot claim occupancy costs.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the 67 cents per hour fixed rate method?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'From 1 July 2022, the ATO replaced the old 52 cents per hour shortcut method with a revised fixed rate of 67 cents per hour. This rate covers electricity and gas for heating, cooling, and lighting, phone and internet usage, stationery, and computer consumables. You must keep a record of actual hours worked from home for the entire year — time sheets, diary entries, or a roster. You can also claim separate deductions on top of this rate for items it does not cover, including depreciating assets (computer, desk, chair), phone and internet costs above the 67c rate, and occupancy expenses if applicable.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can freelancers claim rent or mortgage as a home office deduction?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, but only if you have a dedicated area used exclusively or primarily for business. You claim a proportional amount based on floor area. For example, if your home office is 15 square metres and your total home is 150 square metres, 10% of occupancy costs are deductible. This includes rent or mortgage interest, council rates, property insurance, and land tax. Important: claiming occupancy expenses can affect your main residence capital gains tax exemption. If you sell your home, the ATO may assess CGT on the business-use portion for the period you claimed occupancy deductions.',
      },
    },
    {
      '@type': 'Question',
      name: 'What records do I need for work from home deductions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For the fixed rate method, you need a record of hours worked from home for the entire year (diary, timesheet, or roster). For the actual cost method, you need receipts and bills for all expenses, a record of your business use percentage, and a written methodology explaining how you calculated the business portion. Both methods require receipts for any assets claimed separately (computer, furniture) and a floor plan or measurement showing the workspace area if claiming occupancy expenses. All records must be kept for 5 years from the date you lodge your tax return.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which method gives the biggest tax deduction for working from home?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The actual cost method usually gives a larger deduction for freelancers who work from home full-time and have significant expenses. For example, 1,800 hours at 67 cents equals $1,206 via the fixed rate method. But actual costs might be: electricity $600, internet $900, phone $480, cleaning $400, totalling $2,380 (business portion). However, the fixed rate method is much simpler and requires less record-keeping. The best approach is to calculate both methods and choose the one that gives you the higher deduction. You can change methods between financial years.',
      },
    },
  ],
};

const tocItems = [
  { id: 'what-are-wfh-deductions', label: '1. What Are Work From Home Deductions?' },
  { id: 'two-claiming-methods', label: '2. The Two Claiming Methods' },
  { id: 'running-vs-occupancy', label: '3. Running Expenses vs Occupancy Expenses' },
  { id: 'worked-examples', label: '4. Worked Examples & Calculations' },
  { id: 'record-keeping', label: '5. Record-Keeping Requirements' },
  { id: 'invoiceflow-helps', label: '6. How InvoiceFlow Helps' },
];

const relatedTools = [
  {
    href: '/tools/tax-estimator',
    name: 'Tax Estimator',
    description: 'Estimate your total tax bill including income tax, Medicare levy, and home office deductions.',
    icon: (
      <svg className="w-6 h-6 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
  {
    href: '/tools/tax-deduction-finder',
    name: 'Tax Deduction Finder',
    description: 'Discover every tax deduction you can claim as an Australian freelancer or sole trader.',
    icon: (
      <svg className="w-6 h-6 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
  {
    href: '/tools/eofy-tax-checklist',
    name: 'EOFY Tax Checklist',
    description: 'End of financial year checklist covering home office deductions, lodgement deadlines, and more.',
    icon: (
      <svg className="w-6 h-6 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
  },
  {
    href: '/tools/expense-report-generator',
    name: 'Expense Report Generator',
    description: 'Generate professional expense reports for your home office costs and business expenses.',
    icon: (
      <svg className="w-6 h-6 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
];

const relatedGuides = [
  {
    href: '/guides/tax-guide-freelancers',
    name: 'Tax Guide for Freelancers',
    description: 'Complete guide to Australian tax obligations including income tax, GST, deductions, and BAS.',
  },
  {
    href: '/guides/tax-deductions-freelancers',
    name: 'Tax Deductions Guide',
    description: 'Every tax deduction Australian freelancers can claim in 2025-26 with ATO rules and limits.',
  },
  {
    href: '/guides/setting-freelance-rates',
    name: 'Setting Freelance Rates',
    description: 'How to calculate profitable rates that factor in home office costs, tax, and all business expenses.',
  },
];

export default function WorkFromHomeDeductionsGlossaryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative px-4 pt-20 pb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-500/10 via-blue-500/10 to-sky-500/10 blur-3xl" />
        <div className="relative max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/glossary" className="hover:text-white transition-colors">Glossary</Link>
            <span>/</span>
            <span className="text-white">Work From Home Deductions</span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            Glossary &mdash; Tax &amp; Deductions
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Work From Home Deductions:{' '}
            <span className="bg-gradient-to-r from-sky-500 to-blue-500 bg-clip-text text-transparent">
              ATO Rules, Methods &amp; Claims for Freelancers
            </span>
          </h1>

          {/* Summary */}
          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            Working from home unlocks significant tax deductions for Australian freelancers. From the 67c/hr fixed rate method to claiming occupancy expenses like rent and mortgage interest, this guide covers everything you need to know &mdash; with worked examples, comparison tables, and the exact record-keeping the ATO requires.
          </p>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>18 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>ATO-Accurate 2025-26</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
              </svg>
              <span>Updated March 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* In a Nutshell */}
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <div className="rounded-2xl bg-gradient-to-br from-sky-500/10 to-blue-500/10 border border-sky-500/20 p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-sky-500/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-white">In a Nutshell</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-sky-500/20 flex items-center justify-center text-sky-400 text-xs font-bold">67c</span>
              <div>
                <p className="text-white font-medium text-sm">Fixed Rate per Hour</p>
                <p className="text-gray-400 text-sm">ATO fixed rate for 2025-26 &mdash; covers electricity, phone, internet, stationery</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-sky-500/20 flex items-center justify-center text-sky-400 text-xs font-bold">$1.2K</span>
              <div>
                <p className="text-white font-medium text-sm">Typical Annual Claim</p>
                <p className="text-gray-400 text-sm">Fixed rate at 1,800 hours &mdash; actual cost method can yield $2,000&ndash;$4,000+</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-sky-500/20 flex items-center justify-center text-sky-400 text-xs font-bold">46%</span>
              <div>
                <p className="text-white font-medium text-sm">Australians Working From Home</p>
                <p className="text-gray-400 text-sm">Post-COVID shift &mdash; nearly half of all workers now operate from home regularly</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-sky-500/20 flex items-center justify-center text-sky-400 text-xs font-bold">5 yr</span>
              <div>
                <p className="text-white font-medium text-sm">Record Retention Period</p>
                <p className="text-gray-400 text-sm">ATO requires you to keep all receipts and records for at least 5 years</p>
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
                className="flex items-center gap-2 text-gray-400 hover:text-sky-400 transition-colors text-sm py-1"
              >
                <svg className="w-4 h-4 text-sky-500/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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

        {/* Section 1: What Are Work From Home Deductions? */}
        <section id="what-are-wfh-deductions">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold">1</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">What Are Work From Home Deductions?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Work from home deductions are <strong className="text-white">tax deductions for expenses you incur while working from your home</strong>. If you use part of your home to earn income &mdash; whether at a dedicated desk or a kitchen table &mdash; the ATO allows you to claim a portion of your running costs as a <Link href="/glossary/tax-deduction" className="text-sky-400 hover:text-sky-300 underline underline-offset-2">tax deduction</Link>.
            </p>
            <p className="text-gray-300 leading-relaxed">
              The post-COVID landscape has fundamentally changed how Australians work. <strong className="text-white">46% of Australian workers now work from home regularly</strong>, and for freelancers and sole traders, the home office has become the primary place of business. This makes home office deductions one of the most significant tax-saving opportunities available.
            </p>
            <p className="text-gray-300 leading-relaxed">
              There are <strong className="text-white">two categories</strong> of work from home deductions: <strong className="text-white">running expenses</strong> (day-to-day costs like electricity, phone, and internet) and <strong className="text-white">occupancy expenses</strong> (housing costs like rent, mortgage interest, and council rates). Every freelancer can claim running expenses, but occupancy expenses have stricter requirements.
            </p>
            <p className="text-gray-300 leading-relaxed">
              The ATO recognises home office deductions for both employees and <Link href="/glossary/sole-trader" className="text-sky-400 hover:text-sky-300 underline underline-offset-2">freelancers/sole traders</Link>. However, freelancers have <strong className="text-white">broader claiming rights</strong> than employees &mdash; most notably, freelancers can claim occupancy expenses while employees generally cannot.
            </p>
            <p className="text-gray-300 leading-relaxed">
              A key distinction the ATO makes is between a <strong className="text-white">dedicated workspace</strong> (a room used exclusively or primarily for business) and a <strong className="text-white">shared workspace</strong> (a dining table, shared room, or couch). Having a dedicated workspace unlocks additional deductions &mdash; particularly occupancy expenses &mdash; and strengthens your position if the ATO audits your claims.
            </p>

            {/* 4-card grid stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-sky-500/20 p-4 text-center">
                <p className="text-2xl font-bold text-sky-400">67c/hr</p>
                <p className="text-gray-400 text-xs mt-1">Fixed rate 2025-26</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-sky-500/20 p-4 text-center">
                <p className="text-2xl font-bold text-sky-400">$1,206</p>
                <p className="text-gray-400 text-xs mt-1">Typical annual claim</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-sky-500/20 p-4 text-center">
                <p className="text-2xl font-bold text-sky-400">46%</p>
                <p className="text-gray-400 text-xs mt-1">Australians WFH</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-sky-500/20 p-4 text-center">
                <p className="text-2xl font-bold text-sky-400">5 yrs</p>
                <p className="text-gray-400 text-xs mt-1">Record retention</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: The Two Claiming Methods */}
        <section id="two-claiming-methods">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold">2</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">The Two Claiming Methods</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              The ATO provides two methods for claiming running expenses when you work from home. Choosing the right method can mean a difference of <strong className="text-white">thousands of dollars</strong> in your annual tax deduction. Here is how each method works.
            </p>

            {/* Two Methods Side by Side */}
            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-sky-500/20 p-5">
                <h4 className="text-sky-400 font-semibold mb-3">Fixed Rate Method (67c/hr)</h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-3">
                  Claim <strong className="text-gray-200">67 cents for every hour</strong> you work from home. This single rate covers a bundle of running expenses:
                </p>
                <ul className="space-y-1.5 text-sm text-gray-400">
                  <li>Electricity and gas for heating, cooling, and lighting</li>
                  <li>Phone usage (landline and mobile)</li>
                  <li>Internet data usage</li>
                  <li>Stationery and computer consumables (ink, paper, toner)</li>
                </ul>
                <div className="mt-4 space-y-2 text-sm text-gray-400">
                  <p><strong className="text-gray-200">Does NOT cover:</strong></p>
                  <ul className="space-y-1 text-sm text-gray-400">
                    <li>Depreciating assets (computer, desk, chair, monitor)</li>
                    <li>Office furniture</li>
                    <li>Occupancy expenses (rent, mortgage interest)</li>
                  </ul>
                </div>
                <p className="text-gray-400 text-sm mt-3">
                  <strong className="text-gray-200">You can claim additional deductions on top</strong> of the 67c rate for items not covered. This is a common misconception &mdash; the fixed rate does not cap your total home office deduction.
                </p>
                <p className="text-gray-400 text-sm mt-3">
                  <strong className="text-gray-200">Requires:</strong> Accurate record of all hours worked from home for the full financial year (timesheet, diary, roster, or time-tracking app).
                </p>
                <div className="mt-3 rounded-lg bg-gray-900/50 p-3 text-sm font-mono text-sky-300">
                  1,800 hrs x $0.67 = $1,206/year
                </div>
                <p className="text-gray-500 text-xs mt-2">Based on 37.5 hrs/week x 48 weeks. Simple, low admin burden.</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-blue-500/20 p-5">
                <h4 className="text-blue-400 font-semibold mb-3">Actual Cost Method</h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-3">
                  Calculate the <strong className="text-gray-200">actual business percentage</strong> of each expense you incur. This gives you a deduction based on real costs, not a flat rate.
                </p>
                <ul className="space-y-1.5 text-sm text-gray-400">
                  <li>Actual electricity/gas bills x floor area % x business use %</li>
                  <li>Actual phone bills x business use %</li>
                  <li>Actual internet bills x business use %</li>
                  <li>Stationery, cleaning, and other running costs</li>
                </ul>
                <div className="mt-4 space-y-2 text-sm text-gray-400">
                  <p><strong className="text-gray-200">Advantages:</strong></p>
                  <ul className="space-y-1 text-sm text-gray-400">
                    <li>Higher deductions if your costs are significant</li>
                    <li>No per-hour cap &mdash; claim what you actually spend</li>
                    <li>Can also claim occupancy expenses on top</li>
                  </ul>
                </div>
                <p className="text-gray-400 text-sm mt-3">
                  <strong className="text-gray-200">Must apportion:</strong> Between business and personal use for every expense. The ATO requires a <strong className="text-gray-200">reasonable basis</strong> for your business-use percentage.
                </p>
                <p className="text-gray-400 text-sm mt-3">
                  <strong className="text-gray-200">Requires:</strong> Detailed records &mdash; every bill, usage logs, a written methodology explaining your apportionment.
                </p>
                <div className="mt-3 rounded-lg bg-gray-900/50 p-3 text-sm font-mono text-blue-300">
                  Actual costs x business % = deduction
                </div>
                <p className="text-gray-500 text-xs mt-2">More work but usually more money back for full-time WFH freelancers.</p>
              </div>
            </div>

            {/* Comparison Table */}
            <h3 className="text-lg font-semibold text-white mt-8">Fixed Rate vs Actual Cost Comparison</h3>
            <div className="rounded-2xl border border-gray-700/50 overflow-hidden mt-4">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-800/80">
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Feature</th>
                    <th className="text-left text-sm font-medium text-sky-400 px-6 py-4">Fixed Rate (67c/hr)</th>
                    <th className="text-left text-sm font-medium text-blue-400 px-6 py-4">Actual Cost</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700/50">
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm font-medium">Calculation method</td>
                    <td className="px-6 py-3 text-sky-400 text-sm">Hours worked x 67c</td>
                    <td className="px-6 py-3 text-blue-400 text-sm">Each cost x business %</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm font-medium">Expenses covered</td>
                    <td className="px-6 py-3 text-sky-400 text-sm">Electricity, gas, phone, internet, stationery</td>
                    <td className="px-6 py-3 text-blue-400 text-sm">All running expenses individually</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm font-medium">Additional claims allowed?</td>
                    <td className="px-6 py-3 text-sky-400 text-sm">Yes &mdash; assets, occupancy</td>
                    <td className="px-6 py-3 text-blue-400 text-sm">Yes &mdash; occupancy expenses</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm font-medium">Record keeping</td>
                    <td className="px-6 py-3 text-sky-400 text-sm">Hours log for entire year</td>
                    <td className="px-6 py-3 text-blue-400 text-sm">Bills, methodology, apportionment</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm font-medium">Best for</td>
                    <td className="px-6 py-3 text-sky-400 text-sm">Part-time WFH, simple setup</td>
                    <td className="px-6 py-3 text-blue-400 text-sm">Full-time WFH, high bills</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm font-medium">Typical annual claim</td>
                    <td className="px-6 py-3 text-sky-400 text-sm">$1,206 (1,800 hrs)</td>
                    <td className="px-6 py-3 text-blue-400 text-sm">$2,000&ndash;$4,000+</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="rounded-xl bg-sky-500/5 border border-sky-500/20 p-5 mt-6">
              <p className="text-sky-400 font-medium mb-2">You Can Switch Methods Between Years</p>
              <p className="text-gray-400 text-sm">
                You are not locked into one method forever. You can use the fixed rate method one year and switch to the actual cost method the next if your circumstances change. However, you <strong className="text-gray-200">cannot mix methods within the same financial year</strong> for running expenses. Choose the method that gives you the higher deduction each year.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Running Expenses vs Occupancy Expenses */}
        <section id="running-vs-occupancy">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold">3</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Running Expenses vs Occupancy Expenses</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Understanding the difference between running expenses and occupancy expenses is critical. They have <strong className="text-white">different eligibility requirements</strong>, different calculation methods, and claiming occupancy expenses can have <strong className="text-white">capital gains tax implications</strong> when you sell your home.
            </p>

            {/* Two-column breakdown */}
            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-sky-500/20 p-5">
                <h4 className="text-sky-400 font-semibold mb-3">Running Expenses (Everyone Can Claim)</h4>
                <p className="text-gray-400 text-sm mb-3">
                  Day-to-day costs incurred as a result of working from home. Available to all freelancers, regardless of workspace type.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Electricity and gas (heating, cooling, lighting)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Phone bills (business portion)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Internet (business portion)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Stationery and computer consumables</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Printer ink and paper</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Cleaning of dedicated workspace</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span><Link href="/glossary/depreciation" className="text-sky-400 hover:text-sky-300 underline underline-offset-2">Depreciating assets</Link>: computer, monitor, desk, chair, printer, webcam, headset</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Software subscriptions (business use)</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-blue-500/20 p-5">
                <h4 className="text-blue-400 font-semibold mb-3">Occupancy Expenses (Freelancers with Dedicated Office Only)</h4>
                <p className="text-gray-400 text-sm mb-3">
                  Housing costs proportional to your home office area. Only available if you have a <strong className="text-gray-200">dedicated area used exclusively for business</strong>.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Rent (proportional to floor area)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Mortgage interest (NOT principal repayments)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Council rates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Property insurance (building + contents)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Land tax</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Repairs to home office area</span>
                  </li>
                </ul>
                <div className="mt-4 rounded-lg bg-blue-900/20 border border-blue-500/20 p-3">
                  <p className="text-blue-400 text-xs font-medium">Floor Area Example</p>
                  <p className="text-gray-400 text-xs mt-1">Office: 15sqm / Home: 150sqm = <strong className="text-gray-200">10% of occupancy costs deductible</strong></p>
                </div>
              </div>
            </div>

            {/* CGT Warning Callout */}
            <div className="rounded-xl bg-red-500/5 border border-red-500/20 p-5 mt-6">
              <div className="flex items-center gap-2 mb-3">
                <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
                <p className="text-red-400 font-medium">CGT Warning: Occupancy Expenses</p>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Claiming occupancy expenses may trigger <Link href="/glossary/capital-gains-tax" className="text-red-400 hover:text-red-300 underline underline-offset-2">capital gains tax</Link> consequences when you sell your home. The ATO may assess CGT on the business-use portion of your main residence, proportional to the period you claimed occupancy deductions. For example, if you claim 15% occupancy for 5 years on a home you owned for 20 years, the ATO could assess CGT on 15% of the gain for those 5 years. <strong className="text-gray-200">Consult a tax agent before claiming occupancy expenses.</strong>
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Worked Examples & Calculations */}
        <section id="worked-examples">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold">4</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Worked Examples &amp; Calculations</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Numbers tell the story better than theory. Here are three detailed worked examples showing exactly how much you can claim under different scenarios &mdash; from a part-time freelancer using the simple fixed rate method to a full-time freelancer claiming occupancy expenses.
            </p>

            {/* Example A */}
            <div className="rounded-2xl border border-sky-500/20 bg-gradient-to-br from-sky-900/10 to-blue-900/10 p-6 mt-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-sky-500/20 flex items-center justify-center text-sky-400 text-sm font-bold">A</div>
                <h4 className="text-white font-semibold">Part-Time Freelancer Using Fixed Rate</h4>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Sarah is a freelance graphic designer who works from home 20 hours per week, 48 weeks per year. She uses the kitchen table as her workspace.
              </p>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-4">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-gray-400">
                    <span>Hours worked from home</span>
                    <span className="text-white font-medium">20 hrs/week x 48 weeks = 960 hours</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Fixed rate calculation</span>
                    <span className="text-sky-400 font-medium">960 x $0.67 = $643.20</span>
                  </div>
                  <div className="border-t border-gray-700/50 pt-2 flex justify-between text-gray-400">
                    <span>Plus: Laptop <Link href="/glossary/depreciation" className="text-sky-400 hover:text-sky-300 underline underline-offset-2">depreciation</Link></span>
                    <span className="text-white font-medium">$2,400 / 4 years x 80% business = $480.00</span>
                  </div>
                  <div className="border-t border-gray-700/50 pt-2 flex justify-between">
                    <span className="text-white font-medium">Total WFH Deduction</span>
                    <span className="text-sky-400 font-bold text-lg">$1,123.20</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-500 text-xs mt-3">At the 32.5% marginal rate, this saves Sarah approximately $365 in tax.</p>
            </div>

            {/* Example B */}
            <div className="rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-900/10 to-sky-900/10 p-6 mt-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 text-sm font-bold">B</div>
                <h4 className="text-white font-semibold">Full-Time Freelancer Using Actual Cost</h4>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                James is a freelance web developer who works from a dedicated home office 40 hours per week, 48 weeks per year. He uses the actual cost method because his expenses are significant.
              </p>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-4">
                <p className="text-gray-400 text-xs font-medium mb-3 uppercase tracking-wider">Running Expenses (Actual Cost)</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-gray-400">
                    <span>Electricity</span>
                    <span className="text-white font-medium">$2,400/yr x 30% business = $720.00</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Internet</span>
                    <span className="text-white font-medium">$1,200/yr x 70% business = $840.00</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Phone</span>
                    <span className="text-white font-medium">$1,800/yr x 60% business = $1,080.00</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Stationery</span>
                    <span className="text-white font-medium">$300.00 (100% business)</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Cleaning</span>
                    <span className="text-white font-medium">$20/wk x 48 = $960 x 15% office = $144.00</span>
                  </div>
                  <div className="border-t border-gray-700/50 pt-2 flex justify-between text-gray-400">
                    <span className="font-medium">Running expenses subtotal</span>
                    <span className="text-blue-400 font-medium">$3,084.00</span>
                  </div>
                </div>
                <div className="mt-4 space-y-2 text-sm">
                  <p className="text-gray-400 text-xs font-medium uppercase tracking-wider">Depreciating Assets</p>
                  <div className="flex justify-between text-gray-400">
                    <span>Laptop ($3,500 / 4 years, 100% business)</span>
                    <span className="text-white font-medium">$875.00</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Desk and chair ($1,800 / 10 years)</span>
                    <span className="text-white font-medium">$180.00</span>
                  </div>
                  <div className="border-t border-gray-700/50 pt-2 flex justify-between text-gray-400">
                    <span className="font-medium">Assets subtotal</span>
                    <span className="text-blue-400 font-medium">$1,055.00</span>
                  </div>
                </div>
                <div className="mt-4 border-t border-blue-500/20 pt-3 flex justify-between">
                  <span className="text-white font-medium">Total WFH Deduction</span>
                  <span className="text-blue-400 font-bold text-lg">$4,139.00</span>
                </div>
              </div>
              <p className="text-gray-500 text-xs mt-3">At the 32.5% marginal rate, this saves James approximately $1,345 in tax.</p>
            </div>

            {/* Example C */}
            <div className="rounded-2xl border border-sky-500/20 bg-gradient-to-br from-sky-900/10 to-blue-900/10 p-6 mt-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-sky-500/20 flex items-center justify-center text-sky-400 text-sm font-bold">C</div>
                <h4 className="text-white font-semibold">Freelancer Claiming Occupancy (with CGT Warning)</h4>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                James (from Example B) also has a dedicated home office that is 15% of his total floor area. He decides to claim occupancy expenses as well. He owns his home.
              </p>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-4">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-gray-400">
                    <span>Running expenses (actual cost, from Example B)</span>
                    <span className="text-white font-medium">$3,084.00</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Assets (from Example B)</span>
                    <span className="text-white font-medium">$1,055.00</span>
                  </div>
                </div>
                <div className="mt-4 space-y-2 text-sm">
                  <p className="text-gray-400 text-xs font-medium uppercase tracking-wider">Occupancy Expenses (15% of floor area)</p>
                  <div className="flex justify-between text-gray-400">
                    <span>Rent / mortgage interest ($26,000/yr x 15%)</span>
                    <span className="text-white font-medium">$3,900.00</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Property insurance ($1,800/yr x 15%)</span>
                    <span className="text-white font-medium">$270.00</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Council rates ($2,200/yr x 15%)</span>
                    <span className="text-white font-medium">$330.00</span>
                  </div>
                  <div className="border-t border-gray-700/50 pt-2 flex justify-between text-gray-400">
                    <span className="font-medium">Occupancy subtotal</span>
                    <span className="text-sky-400 font-medium">$4,500.00</span>
                  </div>
                </div>
                <div className="mt-4 border-t border-sky-500/20 pt-3 flex justify-between">
                  <span className="text-white font-medium">TOTAL WFH Deduction</span>
                  <span className="text-sky-400 font-bold text-lg">$8,639.00</span>
                </div>
              </div>

              {/* CGT Impact Note */}
              <div className="rounded-lg bg-red-500/5 border border-red-500/20 p-4 mt-4">
                <p className="text-red-400 text-sm font-medium mb-2">CGT Impact Note</p>
                <p className="text-gray-400 text-sm">
                  If James sells his home for a $200,000 capital gain after 5 years of claiming 15% occupancy on a home he owned for 20 years, the ATO may assess <Link href="/glossary/capital-gains-tax" className="text-red-400 hover:text-red-300 underline underline-offset-2">CGT</Link> on: <strong className="text-gray-200">15% x 5/20 = 3.75% = $7,500 taxable gain</strong>. This would result in approximately $2,438 in additional CGT at the 32.5% marginal rate. The occupancy deductions saved him $4,500 x 5 x 32.5% = $7,312 over 5 years &mdash; still a net benefit, but the CGT impact must be factored in.
                </p>
              </div>
            </div>

            {/* Comparison Callout Box */}
            <div className="rounded-xl bg-sky-500/5 border border-sky-500/20 p-5 mt-6">
              <p className="text-sky-400 font-medium mb-2">Method Comparison: Fixed Rate vs Actual Cost</p>
              <p className="text-gray-400 text-sm">
                For the full-time freelancer in Example B, the actual cost method (<strong className="text-gray-200">$4,139</strong>) beats the fixed rate (<strong className="text-gray-200">1,920 hrs x $0.67 = $1,286</strong>) by <strong className="text-white">$2,853</strong>. At the 32.5% marginal tax rate, that is an extra <strong className="text-white">$927 in your pocket</strong> &mdash; just by choosing the right method and keeping proper records. For the part-time freelancer in Example A, the gap is smaller, so the fixed rate&apos;s simplicity may be worth it.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Record-Keeping Requirements */}
        <section id="record-keeping">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold">5</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Record-Keeping Requirements</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              The ATO requires specific records depending on which method you use. Without proper records, your deductions <strong className="text-white">will be disallowed during an audit</strong>, and you may face penalties. Here is exactly what you need to keep for each method.
            </p>

            {/* Requirements by method */}
            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-sky-500/20 p-5">
                <h4 className="text-sky-400 font-semibold mb-3">Fixed Rate Method Records</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span><strong className="text-gray-200">Hours log</strong> (diary, timesheet, calendar entries) for EVERY working-from-home day &mdash; the full financial year, not just a sample period</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span><strong className="text-gray-200">Receipts</strong> for separately claimed assets (computer, furniture, monitor)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span><strong className="text-gray-200">Floor plan</strong> if claiming occupancy expenses on top of the fixed rate</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-blue-500/20 p-5">
                <h4 className="text-blue-400 font-semibold mb-3">Actual Cost Method Records</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span><strong className="text-gray-200">All utility bills</strong> (electricity, gas, internet, phone) for the full year</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span><strong className="text-gray-200">Methodology document</strong> explaining how you calculated your business use percentage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span><strong className="text-gray-200">Usage logs</strong> (phone records, internet logs if available)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span><strong className="text-gray-200">Receipts</strong> for all claimed items (stationery, cleaning products, assets)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span><strong className="text-gray-200">Floor plan measurements</strong> showing workspace area as a percentage of total home</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Both Methods */}
            <div className="rounded-xl bg-sky-500/5 border border-sky-500/20 p-5 mt-6">
              <p className="text-sky-400 font-medium mb-2">Both Methods: Universal Requirements</p>
              <div className="space-y-2 text-gray-400 text-sm">
                <p><strong className="text-gray-200">Keep records for 5 years</strong> from the date you lodge your tax return for that financial year.</p>
                <p><strong className="text-gray-200">Digital records are acceptable</strong> &mdash; photos of receipts, scanned documents, PDF copies of bills. The ATO accepts digital records as long as they are legible and complete.</p>
                <p><strong className="text-gray-200">The ATO may request records</strong> during an audit at any time within the 5-year retention period. If you cannot produce records, deductions will be disallowed.</p>
              </div>
            </div>

            {/* Record-Keeping Table */}
            <h3 className="text-lg font-semibold text-white mt-8">Record-Keeping Summary Table</h3>
            <div className="rounded-2xl border border-gray-700/50 overflow-hidden mt-4">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-800/80">
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Record Type</th>
                    <th className="text-left text-sm font-medium text-sky-400 px-6 py-4">Fixed Rate</th>
                    <th className="text-left text-sm font-medium text-blue-400 px-6 py-4">Actual Cost</th>
                    <th className="text-left text-sm font-medium text-gray-400 px-6 py-4">Format</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700/50">
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm font-medium">Hours log</td>
                    <td className="px-6 py-3 text-sky-400 text-sm">Required</td>
                    <td className="px-6 py-3 text-blue-400 text-sm">Recommended</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">Diary / timesheet / calendar</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm font-medium">Utility bills</td>
                    <td className="px-6 py-3 text-sky-400 text-sm">Not required (covered by rate)</td>
                    <td className="px-6 py-3 text-blue-400 text-sm">Required</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">PDF / paper</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm font-medium">Asset receipts</td>
                    <td className="px-6 py-3 text-sky-400 text-sm">If claiming assets</td>
                    <td className="px-6 py-3 text-blue-400 text-sm">If claiming assets</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">Receipt / tax invoice</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm font-medium">Floor plan</td>
                    <td className="px-6 py-3 text-sky-400 text-sm">If claiming occupancy</td>
                    <td className="px-6 py-3 text-blue-400 text-sm">If claiming occupancy</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">Drawing with measurements</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm font-medium">Business use calculation</td>
                    <td className="px-6 py-3 text-sky-400 text-sm">Not required</td>
                    <td className="px-6 py-3 text-blue-400 text-sm">Required</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">Written methodology</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm font-medium">Retention period</td>
                    <td className="px-6 py-3 text-sky-400 text-sm">5 years</td>
                    <td className="px-6 py-3 text-blue-400 text-sm">5 years</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">Digital or physical</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section 6: How InvoiceFlow Helps */}
        <section id="invoiceflow-helps">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold">6</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">How InvoiceFlow Helps</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Managing work from home deductions manually is a headache. Between tracking hours, categorising expenses, storing receipts, and calculating business-use percentages, it is easy to miss deductions or fail an ATO audit. InvoiceFlow is built to <strong className="text-white">automate the entire process</strong> for Australian freelancers.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-sky-500/20 p-5">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">Track Work Hours</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Log your working-from-home hours daily with our built-in time tracker. InvoiceFlow automatically calculates your fixed rate deduction (hours x 67c) throughout the year &mdash; no separate timesheet or diary needed.
                </p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-sky-500/20 p-5">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">Categorise Expenses</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Automatically categorise home office expenses &mdash; electricity, internet, phone, stationery, <Link href="/glossary/depreciation" className="text-sky-400 hover:text-sky-300 underline underline-offset-2">depreciation</Link>, and occupancy. Every expense is tagged and ready for your tax return.
                </p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-sky-500/20 p-5">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">Expense Reports</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Generate detailed expense reports for your <Link href="/glossary/tax-agent" className="text-sky-400 hover:text-sky-300 underline underline-offset-2">tax agent</Link>. Reports are broken down by deduction category with all receipts attached. Hand it over at tax time and save hours of back-and-forth.
                </p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-sky-500/20 p-5">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">Business Use Percentages</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Set your business-use percentage for each expense category once, and InvoiceFlow applies it automatically. Electricity at 30%, internet at 70%, phone at 60% &mdash; the calculations are done for you.
                </p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-sky-500/20 p-5">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">Receipt Storage</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Store digital copies of every receipt and bill. Snap a photo, upload it, and it is linked to the expense. ATO-compliant digital records stored securely for the required 5-year retention period.
                </p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-sky-500/20 p-5">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2"><Link href="/glossary/bas" className="text-white hover:text-sky-400 transition-colors">BAS</Link>-Ready Reporting</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Expenses are automatically categorised for your quarterly <Link href="/glossary/bas" className="text-sky-400 hover:text-sky-300 underline underline-offset-2">BAS</Link> lodgement. <Link href="/glossary/gst" className="text-sky-400 hover:text-sky-300 underline underline-offset-2">GST</Link> on business purchases is separated so you can claim <Link href="/glossary/input-tax-credits" className="text-sky-400 hover:text-sky-300 underline underline-offset-2">input tax credits</Link> accurately every quarter.
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-sky-500/5 border border-sky-500/20 p-5 mt-6">
              <p className="text-sky-400 font-medium mb-2">Compare Both Methods Automatically</p>
              <p className="text-gray-400 text-sm">
                InvoiceFlow calculates your deduction using <strong className="text-gray-200">both methods simultaneously</strong>, so you always know which one gives you the bigger claim. No more guessing &mdash; just pick the higher number at tax time. Use our <Link href="/tools/tax-estimator" className="text-sky-400 hover:text-sky-300 underline underline-offset-2">tax estimator</Link> to see the impact of your home office deductions right now.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Related Tools */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-white mb-2 text-center">Related Tools</h2>
        <p className="text-gray-400 text-center mb-8">Free tools to help you calculate and maximise your home office deductions.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {relatedTools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:border-sky-500/50 hover:bg-gray-800/80 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center mb-4">
                {tool.icon}
              </div>
              <h3 className="text-white font-medium mb-2 group-hover:text-sky-400 transition-colors">{tool.name}</h3>
              <p className="text-sm text-gray-400">{tool.description}</p>
              <div className="mt-4 text-sky-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
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
        <p className="text-gray-400 text-center mb-8">In-depth guides on tax deductions, home office expenses, and freelancing in Australia.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {relatedGuides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group p-6 rounded-2xl bg-gray-800/40 border border-gray-700/40 hover:border-sky-500/40 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h3 className="text-white font-medium mb-2 group-hover:text-sky-400 transition-colors">{guide.name}</h3>
              <p className="text-sm text-gray-400">{guide.description}</p>
              <div className="mt-4 text-sky-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
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
              <summary className="flex items-center justify-between cursor-pointer px-6 py-4 text-white font-medium hover:text-sky-400 transition-colors">
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
        <div className="rounded-2xl bg-gradient-to-br from-sky-500/10 to-blue-500/10 border border-sky-500/20 p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Track Your Home Office Expenses
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            InvoiceFlow tracks your work-from-home hours, categorises expenses, stores receipts, and calculates your deduction using both methods &mdash; so you always claim the maximum. Stop leaving money on the table.
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
