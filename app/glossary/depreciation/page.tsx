import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Depreciation: Complete Guide for Australian Freelancers & Sole Traders — InvoiceFlow',
  description:
    'What is depreciation? Learn how to claim depreciation as a freelancer in Australia — instant asset write-off ($20K threshold 2025-26), diminishing value vs prime cost methods, depreciable assets, ATO effective lives, and how to include equipment costs in your rates.',
  keywords: [
    'what is depreciation',
    'depreciation for small business australia',
    'instant asset write-off 2025',
    'depreciation schedule freelancer',
    'how to claim depreciation sole trader',
    'diminishing value vs prime cost',
    'ATO effective life',
    'instant asset write-off threshold',
    'depreciation methods australia',
    'depreciable assets freelancer',
    '$20000 instant asset write-off',
    'depreciation tax deduction australia',
  ],
  alternates: { canonical: '/glossary/depreciation' },
  openGraph: {
    title: 'Depreciation: Complete Guide for Australian Freelancers & Sole Traders — InvoiceFlow',
    description:
      'Everything you need to know about depreciation for your freelance business: instant asset write-off, diminishing value vs prime cost, ATO effective lives, and how to factor equipment costs into your rates.',
    url: 'https://invoiceflow-teal.vercel.app/glossary/depreciation',
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
    { '@type': 'ListItem', position: 3, name: 'Depreciation', item: `${BASE_URL}/glossary/depreciation` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is depreciation in simple terms?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Depreciation is the process of spreading the cost of a business asset (like a laptop, camera, or car) over its useful life for tax purposes. Instead of claiming the full cost in the year you buy it, you claim a portion each year as a tax deduction. For example, if you buy a $3,000 laptop with a 4-year effective life, you might claim around $750 per year. This recognises that assets lose value over time through wear and tear, and lets you reduce your taxable income each year the asset is in use.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the instant asset write-off for 2025-26?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For the 2025-26 financial year, small businesses with an aggregated turnover of less than $10 million can instantly deduct the full cost of eligible assets costing less than $20,000 each. This means if you buy a laptop for $2,500, you can claim the entire $2,500 as a deduction in the year of purchase rather than depreciating it over several years. The asset must be first used or installed ready for use in the relevant income year. Items costing $20,000 or more must be depreciated using standard methods.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between diminishing value and prime cost depreciation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The diminishing value method gives you larger deductions in the early years and smaller deductions later. It applies the depreciation rate to the remaining (written-down) value each year. The prime cost (straight-line) method spreads the deduction evenly across the asset\'s effective life, giving you the same amount each year. For example, a $3,000 laptop with a 4-year life: diminishing value claims $1,500 in year one (50% of $3,000) then $750 in year two (50% of $1,500), while prime cost claims $750 every year ($3,000 / 4 years). Choose diminishing value if you want bigger deductions sooner, or prime cost for predictable, even deductions.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I claim depreciation on my car as a freelancer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, you can claim depreciation on a car used for business purposes, but there are special rules. The ATO sets a car cost limit ($68,108 for 2024-25) — you can only depreciate up to this limit regardless of what you paid. The effective life for a car is 8 years. If you use the car for both business and personal purposes, you can only claim the business-use percentage. You also need to choose between the logbook method (actual expenses including depreciation) or the cents-per-kilometre method (72 cents/km for 2024-25, capped at 5,000 km). You cannot claim depreciation if you use the cents-per-kilometre method, as it already includes a component for vehicle depreciation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a depreciation schedule for my tax return?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, if you are claiming depreciation on business assets, you should maintain a depreciation schedule. This is a record that lists each depreciable asset, its cost, date of purchase, effective life, depreciation method chosen, annual depreciation amount, and written-down value. While you do not lodge the schedule with the ATO, you must keep it as part of your records for at least five years in case of an audit. The schedule helps you accurately complete the capital allowances section of your tax return and track when assets are fully depreciated. Most accounting software can generate this automatically.',
      },
    },
  ],
};

const tocItems = [
  { id: 'what-is-depreciation', label: '1. What Is Depreciation?' },
  { id: 'instant-asset-write-off', label: '2. Instant Asset Write-Off' },
  { id: 'depreciation-methods', label: '3. Depreciation Methods' },
  { id: 'depreciable-assets', label: '4. Common Depreciable Assets for Freelancers' },
  { id: 'claiming-depreciation', label: '5. How to Claim Depreciation on Your Tax Return' },
  { id: 'depreciation-and-invoicing', label: '6. Depreciation and Your Invoicing' },
];

const relatedTools = [
  {
    href: '/tools/tax-estimator',
    name: 'Tax Estimator',
    description: 'Estimate your income tax liability as a sole trader and see how depreciation deductions affect your bill.',
    icon: (
      <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18v-.008zm-12 0h.008v.008H6v-.008z" />
      </svg>
    ),
  },
  {
    href: '/tools/tax-deduction-finder',
    name: 'Tax Deduction Finder',
    description: 'Discover all the tax deductions you can claim as an Australian freelancer, including depreciation.',
    icon: (
      <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
  {
    href: '/tools/freelance-tax-estimator',
    name: 'Freelance Tax Estimator',
    description: 'Purpose-built tax calculator for freelancers — includes deductions, super, and Medicare levy.',
    icon: (
      <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zM6 3v.75M17.25 3v.75M3 16.5V6a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 6v10.5m-18 0h18" />
      </svg>
    ),
  },
  {
    href: '/tools/profit-margin-calculator',
    name: 'Profit Margin Calculator',
    description: 'Calculate your real profit margins after accounting for depreciation and other business expenses.',
    icon: (
      <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
];

const relatedGuides = [
  {
    href: '/guides/tax-guide-freelancers',
    name: 'Tax Guide for Freelancers',
    description: 'Income tax, deductions, BAS, and everything else you need to know as an Australian sole trader.',
  },
  {
    href: '/guides/eofy-guide',
    name: 'EOFY Guide for Freelancers',
    description: 'End of financial year checklist — depreciation schedules, deductions, and lodgement deadlines.',
  },
  {
    href: '/guides/setting-freelance-rates',
    name: 'Setting Your Freelance Rates',
    description: 'How to calculate profitable rates that cover tax, super, depreciation, and all business costs.',
  },
];

export default function DepreciationGlossaryPage() {
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
            <span className="text-white">Depreciation</span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            Glossary &mdash; Tax &amp; Deductions
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Depreciation{' '}
            <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
              Explained for Freelancers
            </span>
          </h1>

          {/* Summary */}
          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            Depreciation lets you claim the cost of business assets &mdash; laptops, cameras, cars, furniture &mdash; as a tax deduction over time. This guide covers the instant asset write-off, depreciation methods, ATO effective lives, and how to factor equipment costs into your freelance rates.
          </p>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>12 min read</span>
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
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 text-xs font-bold">$20K</span>
              <div>
                <p className="text-white font-medium text-sm">Instant Asset Write-Off</p>
                <p className="text-gray-400 text-sm">Threshold for 2025-26 &mdash; deduct the full cost of assets under $20,000</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 text-xs font-bold">$300</span>
              <div>
                <p className="text-white font-medium text-sm">Immediate Deduction Threshold</p>
                <p className="text-gray-400 text-sm">Items costing $300 or less can be deducted immediately &mdash; no depreciation needed</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 text-xs font-bold">25%</span>
              <div>
                <p className="text-white font-medium text-sm">Diminishing Value Uplift</p>
                <p className="text-gray-400 text-sm">The diminishing value rate is 200% of the prime cost rate (2x the straight-line rate)</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 text-xs font-bold">4 yr</span>
              <div>
                <p className="text-white font-medium text-sm">Laptops &amp; Computers</p>
                <p className="text-gray-400 text-sm">ATO effective life for laptops, desktops, and computer hardware</p>
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

        {/* Section 1: What Is Depreciation? */}
        <section id="what-is-depreciation">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold">1</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">What Is Depreciation?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Depreciation is a <strong className="text-white">tax deduction that lets you claim the cost of a business asset over its useful life</strong>, rather than all at once. When you buy something expensive for your business &mdash; a laptop, a camera, office furniture, a vehicle &mdash; the ATO recognises that it will lose value over time through wear and tear, obsolescence, or both. Depreciation lets you account for that decline in value by spreading the cost across multiple tax years.
            </p>
            <p className="text-gray-300 leading-relaxed">
              In plain English: instead of spending $3,000 on a laptop and getting no tax benefit, depreciation lets you <strong className="text-white">deduct a portion of that $3,000 from your taxable income each year</strong> until the full amount has been claimed. This reduces your tax bill not just in the year of purchase, but over the entire useful life of the asset.
            </p>
            <p className="text-gray-300 leading-relaxed">
              For freelancers, depreciation is particularly important because you likely rely on <strong className="text-white">equipment that has a limited lifespan</strong>. Your laptop will eventually slow down and need replacing. Your camera equipment will become outdated. Your office chair will wear out. Depreciation ensures you get a tax benefit from every one of these purchases, reducing your overall cost of doing business.
            </p>
            <p className="text-gray-300 leading-relaxed">
              The ATO determines how long each type of asset is expected to last &mdash; this is called the <strong className="text-white">effective life</strong>. A laptop has an effective life of 4 years, a smartphone has 3 years, and a desk has 10 years. The effective life determines how quickly you can claim the deduction. The shorter the effective life, the faster you get your money back via tax savings.
            </p>
            <div className="rounded-xl bg-amber-500/5 border border-amber-500/20 p-5 mt-6">
              <p className="text-amber-400 font-medium mb-2">Why This Matters for Freelancers</p>
              <p className="text-gray-400 text-sm">
                If you bought a <strong className="text-gray-200">$3,000 MacBook Pro</strong> for your freelance business, depreciation lets you claim that $3,000 over 4 years &mdash; reducing your taxable income by around $750 per year. At a 32.5% marginal tax rate, that is roughly <strong className="text-gray-200">$244 back in your pocket each year</strong> for four years. Without depreciation, you would get no tax benefit from a major business purchase.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Instant Asset Write-Off */}
        <section id="instant-asset-write-off">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold">2</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Instant Asset Write-Off</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              The instant asset write-off is one of the most powerful tax tools for Australian small businesses and freelancers. Instead of spreading a deduction over several years, it lets you <strong className="text-white">deduct the full cost of an eligible asset in the year you buy it</strong>.
            </p>

            <div className="rounded-xl bg-gray-800/50 border border-amber-500/30 p-6 mt-6">
              <h3 className="text-lg font-semibold text-white mb-3">2025-26 Threshold: $20,000</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                For the 2025-26 financial year, <strong className="text-gray-200">small businesses with aggregated turnover under $10 million</strong> can instantly deduct the full cost of eligible assets costing <strong className="text-gray-200">less than $20,000</strong> (before GST if registered for GST, or GST-inclusive if not). Each asset is assessed individually &mdash; so you can buy multiple items under $20,000 each and claim them all.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="flex items-start gap-2 text-sm text-gray-400">
                  <svg className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Laptop $2,500 &mdash; full deduction in year of purchase</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-gray-400">
                  <svg className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Camera $4,000 &mdash; full deduction in year of purchase</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-gray-400">
                  <svg className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Office desk $1,200 &mdash; full deduction in year of purchase</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-gray-400">
                  <svg className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                  <span>Car $35,000 &mdash; special rules apply (car cost limit)</span>
                </div>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-6">What Qualifies</h3>
            <p className="text-gray-300 leading-relaxed">
              The asset must be <strong className="text-white">used, or installed ready for use, for a taxable purpose</strong> during the income year. It must cost less than $20,000 (exclusive of GST if you claim GST credits, otherwise inclusive). Both new and second-hand assets qualify. The asset must be used in carrying on your business &mdash; personal-only items do not qualify.
            </p>

            <h3 className="text-lg font-semibold text-white mt-6">What Doesn&apos;t Qualify</h3>
            <div className="grid sm:grid-cols-2 gap-3 mt-3">
              <div className="flex items-start gap-2 text-sm text-gray-400">
                <svg className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                </svg>
                <span>Assets costing $20,000 or more (must be depreciated)</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-gray-400">
                <svg className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                </svg>
                <span>Horticultural plants and in-house software allocated to a pool</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-gray-400">
                <svg className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                </svg>
                <span>Assets you lease out or hold as trading stock</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-gray-400">
                <svg className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                </svg>
                <span>Capital works (buildings, structural improvements &mdash; separate rules)</span>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-6">Brief History: Temporary Full Expensing</h3>
            <p className="text-gray-300 leading-relaxed">
              Between October 2020 and June 2023, the government introduced <strong className="text-white">temporary full expensing</strong> &mdash; there was <em>no</em> cost limit at all. Businesses could instantly deduct the full cost of any eligible depreciable asset, regardless of cost. This was a COVID-era stimulus measure. When it ended on 30 June 2023, the threshold was set at $20,000 for the 2023-24 year and has been extended at that level through 2025-26.
            </p>

            <div className="rounded-xl bg-amber-500/5 border border-amber-500/20 p-5 mt-6">
              <p className="text-amber-400 font-medium mb-2">Pro Tip: Time Your Purchases</p>
              <p className="text-gray-400 text-sm">
                If you are planning to buy a new laptop or camera and it costs less than $20,000, <strong className="text-gray-200">buy it before 30 June</strong> to claim the full deduction in this financial year. If you buy it in July, the deduction shifts to the next financial year. This is especially useful if you had a high-income year and want to reduce your tax bill.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Depreciation Methods */}
        <section id="depreciation-methods">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold">3</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Depreciation Methods</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              When you need to depreciate an asset (because it costs $20,000 or more, or you choose not to use the instant write-off), the ATO gives you two methods to calculate your annual deduction: <strong className="text-white">diminishing value</strong> and <strong className="text-white">prime cost (straight-line)</strong>. Once you choose a method for an asset, you must stick with it for the life of that asset.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-amber-500/20 p-5">
                <h4 className="text-amber-400 font-semibold mb-3">Diminishing Value Method</h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-3">
                  Applies the depreciation rate to the <strong className="text-gray-200">remaining value</strong> of the asset each year. You get larger deductions in the early years and smaller ones later.
                </p>
                <div className="rounded-lg bg-gray-900/60 p-3 text-sm font-mono text-amber-300">
                  Deduction = Base Value x (Days Held / 365) x (200% / Effective Life)
                </div>
                <p className="text-gray-500 text-xs mt-2">Base value = cost minus deductions already claimed</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-orange-500/20 p-5">
                <h4 className="text-orange-400 font-semibold mb-3">Prime Cost (Straight-Line) Method</h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-3">
                  Spreads the deduction <strong className="text-gray-200">evenly</strong> across the asset&apos;s effective life. You claim the same amount each year.
                </p>
                <div className="rounded-lg bg-gray-900/60 p-3 text-sm font-mono text-orange-300">
                  Deduction = Cost x (Days Held / 365) x (100% / Effective Life)
                </div>
                <p className="text-gray-500 text-xs mt-2">Cost = original purchase price (GST-exclusive if registered)</p>
              </div>
            </div>

            {/* Worked Example Table */}
            <h3 className="text-lg font-semibold text-white mt-8">Worked Example: $3,000 Laptop (4-Year Effective Life)</h3>
            <div className="rounded-2xl border border-gray-700/50 overflow-hidden mt-4">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-800/80">
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Year</th>
                    <th className="text-left text-sm font-medium text-amber-400 px-6 py-4">Diminishing Value</th>
                    <th className="text-left text-sm font-medium text-orange-400 px-6 py-4">Prime Cost</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700/50">
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm font-medium">Year 1</td>
                    <td className="px-6 py-3 text-amber-400 font-medium text-sm">$1,500 <span className="text-gray-500 font-normal">(50% of $3,000)</span></td>
                    <td className="px-6 py-3 text-orange-400 font-medium text-sm">$750 <span className="text-gray-500 font-normal">($3,000 / 4)</span></td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm font-medium">Year 2</td>
                    <td className="px-6 py-3 text-amber-400 font-medium text-sm">$750 <span className="text-gray-500 font-normal">(50% of $1,500)</span></td>
                    <td className="px-6 py-3 text-orange-400 font-medium text-sm">$750 <span className="text-gray-500 font-normal">($3,000 / 4)</span></td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm font-medium">Year 3</td>
                    <td className="px-6 py-3 text-amber-400 font-medium text-sm">$375 <span className="text-gray-500 font-normal">(50% of $750)</span></td>
                    <td className="px-6 py-3 text-orange-400 font-medium text-sm">$750 <span className="text-gray-500 font-normal">($3,000 / 4)</span></td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm font-medium">Year 4</td>
                    <td className="px-6 py-3 text-amber-400 font-medium text-sm">$375 <span className="text-gray-500 font-normal">(remaining balance)</span></td>
                    <td className="px-6 py-3 text-orange-400 font-medium text-sm">$750 <span className="text-gray-500 font-normal">($3,000 / 4)</span></td>
                  </tr>
                  <tr className="bg-gray-800/60">
                    <td className="px-6 py-3 text-white text-sm font-bold">Total</td>
                    <td className="px-6 py-3 text-amber-400 font-bold text-sm">$3,000</td>
                    <td className="px-6 py-3 text-orange-400 font-bold text-sm">$3,000</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-lg font-semibold text-white mt-6">When to Use Which Method</h3>
            <div className="grid sm:grid-cols-2 gap-4 mt-3">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-amber-400 font-medium mb-2">Choose Diminishing Value When:</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>You want larger deductions in the early years</li>
                  <li>The asset will lose value quickly (technology, electronics)</li>
                  <li>You had a high-income year and want to offset it</li>
                  <li>You plan to replace the asset before the end of its effective life</li>
                </ul>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-orange-400 font-medium mb-2">Choose Prime Cost When:</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>You want predictable, even deductions each year</li>
                  <li>The asset will hold its value (furniture, equipment)</li>
                  <li>Your income is stable and you do not need front-loaded deductions</li>
                  <li>You prefer simpler record-keeping and calculations</li>
                </ul>
              </div>
            </div>

            <div className="rounded-xl bg-amber-500/5 border border-amber-500/20 p-5 mt-6">
              <p className="text-amber-400 font-medium mb-2">ATO Effective Life</p>
              <p className="text-gray-400 text-sm">
                The ATO publishes a comprehensive <strong className="text-gray-200">Table of Effective Life</strong> for thousands of asset types (Taxation Ruling TR 2024/3). You can use the ATO&apos;s determination or make your own reasonable estimate. Most freelancers stick with the ATO figures &mdash; they are widely accepted and reduce the risk of an audit query.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Common Depreciable Assets for Freelancers */}
        <section id="depreciable-assets">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold">4</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Common Depreciable Assets for Freelancers</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Here are the most common assets freelancers depreciate, along with the <strong className="text-white">ATO effective life</strong> for each. Remember: if any of these cost less than $20,000, you can use the instant asset write-off instead of depreciating over time.
            </p>

            <div className="rounded-2xl border border-gray-700/50 overflow-hidden mt-6">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-800/80">
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Asset</th>
                    <th className="text-left text-sm font-medium text-amber-400 px-6 py-4">Effective Life</th>
                    <th className="text-left text-sm font-medium text-orange-400 px-6 py-4">DV Rate</th>
                    <th className="text-left text-sm font-medium text-gray-400 px-6 py-4">PC Rate</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700/50">
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm font-medium">Laptops &amp; desktop computers</td>
                    <td className="px-6 py-3 text-amber-400 font-medium text-sm">4 years</td>
                    <td className="px-6 py-3 text-orange-400 text-sm">50%</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">25%</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm font-medium">Mobile phones &amp; tablets</td>
                    <td className="px-6 py-3 text-amber-400 font-medium text-sm">3 years</td>
                    <td className="px-6 py-3 text-orange-400 text-sm">66.67%</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">33.33%</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm font-medium">Cameras &amp; photography equipment</td>
                    <td className="px-6 py-3 text-amber-400 font-medium text-sm">6 years 8 months</td>
                    <td className="px-6 py-3 text-orange-400 text-sm">30%</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">15%</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm font-medium">Office furniture (desks, chairs)</td>
                    <td className="px-6 py-3 text-amber-400 font-medium text-sm">10&ndash;20 years</td>
                    <td className="px-6 py-3 text-orange-400 text-sm">10&ndash;20%</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">5&ndash;10%</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm font-medium">Software (off-the-shelf)</td>
                    <td className="px-6 py-3 text-amber-400 font-medium text-sm">2.5&ndash;4 years</td>
                    <td className="px-6 py-3 text-orange-400 text-sm">50&ndash;80%</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">25&ndash;40%</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm font-medium">Motor vehicles (cars)</td>
                    <td className="px-6 py-3 text-amber-400 font-medium text-sm">8 years</td>
                    <td className="px-6 py-3 text-orange-400 text-sm">25%</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">12.5%</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm font-medium">Printers &amp; scanners</td>
                    <td className="px-6 py-3 text-amber-400 font-medium text-sm">5 years</td>
                    <td className="px-6 py-3 text-orange-400 text-sm">40%</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">20%</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm font-medium">Air conditioning units (home office)</td>
                    <td className="px-6 py-3 text-amber-400 font-medium text-sm">10 years</td>
                    <td className="px-6 py-3 text-orange-400 text-sm">20%</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">10%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-white font-semibold mb-3">Home Office Items</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  If you work from home, you can depreciate items used in your home office &mdash; desks, chairs, shelving, lamps, monitors, and even curtains or blinds in your dedicated workspace. If the item is used partly for personal purposes, you can only claim the <strong className="text-gray-200">business-use percentage</strong>.
                </p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-white font-semibold mb-3">Bundled Assets</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Be careful with <strong className="text-gray-200">bundled purchases</strong>. If you buy a laptop, monitor, keyboard, and mouse as a package for $5,000, the ATO may treat them as separate assets (each under $20,000 and eligible for instant write-off) or as a single asset depending on whether they function independently. Generally, peripherals connected to a computer can be treated as separate items.
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-amber-500/5 border border-amber-500/20 p-5 mt-6">
              <p className="text-amber-400 font-medium mb-2">Under $300? Even Simpler.</p>
              <p className="text-gray-400 text-sm">
                Assets costing <strong className="text-gray-200">$300 or less</strong> that are used predominantly (more than 50%) for business can be claimed as an <strong className="text-gray-200">immediate deduction</strong> &mdash; no depreciation schedule, no instant asset write-off paperwork. Just claim the full amount in the year of purchase. This applies to items like a mouse, keyboard, USB hub, or phone case.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: How to Claim Depreciation on Your Tax Return */}
        <section id="claiming-depreciation">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold">5</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">How to Claim Depreciation on Your Tax Return</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Claiming depreciation correctly requires <strong className="text-white">good records, a depreciation schedule, and an understanding of business-use percentages</strong>. Here is what the ATO expects:
            </p>

            <div className="space-y-4 mt-6">
              {/* Step 1 */}
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <span className="text-amber-400 font-bold text-sm">1</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Keep Your Records</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  For every depreciable asset, keep the <strong className="text-gray-200">purchase receipt or tax invoice</strong> showing the date, cost, and description of the asset. Also record the date you first used the asset for business purposes. You must retain these records for <strong className="text-gray-200">at least 5 years</strong> from the date you lodge the tax return that includes the depreciation claim. Digital copies are acceptable.
                </p>
              </div>

              {/* Step 2 */}
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <span className="text-amber-400 font-bold text-sm">2</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Maintain a Depreciation Schedule</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-3">
                  A depreciation schedule is a document that tracks every depreciable asset in your business. For each asset, it records:
                </p>
                <ul className="space-y-1 text-sm text-gray-400 ml-4">
                  <li>Asset description and date of purchase</li>
                  <li>Original cost</li>
                  <li>Depreciation method chosen (diminishing value or prime cost)</li>
                  <li>ATO effective life</li>
                  <li>Annual depreciation amount</li>
                  <li>Written-down (remaining) value each year</li>
                  <li>Business-use percentage</li>
                </ul>
                <p className="text-gray-400 text-sm leading-relaxed mt-3">
                  Most accounting software (Xero, MYOB, QuickBooks) will generate and maintain this automatically. You do not lodge the schedule with the ATO, but you must keep it in case of an audit.
                </p>
              </div>

              {/* Step 3 */}
              <div className="rounded-xl bg-gray-800/50 border border-amber-500/30 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <span className="text-amber-400 font-bold text-sm">3</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Calculate Business-Use Percentage</h3>
                  <span className="text-xs text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full">Important</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  If you use an asset for <strong className="text-gray-200">both business and personal purposes</strong>, you can only claim depreciation on the business-use portion. For example, if you use your laptop 70% for business and 30% for personal, you can only claim 70% of the annual depreciation amount. You need a <strong className="text-gray-200">reasonable basis</strong> for your estimate &mdash; a usage log or diary is ideal but not always required if your estimate is reasonable and consistent.
                </p>
              </div>

              {/* Step 4 */}
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <span className="text-amber-400 font-bold text-sm">4</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Include It in Your Tax Return</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  As a sole trader, depreciation is claimed at <strong className="text-gray-200">Item P8 (Depreciation expenses) in the Business and Professional Items schedule</strong> of your individual tax return. If you use the simplified depreciation rules (instant asset write-off), these go in the same section. Your accounting software or tax agent will map your depreciation schedule to the correct fields automatically.
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-amber-500/5 border border-amber-500/20 p-5 mt-6">
              <p className="text-amber-400 font-medium mb-2">The $300 Threshold Rule</p>
              <p className="text-gray-400 text-sm">
                Items costing <strong className="text-gray-200">$300 or less</strong> that are used predominantly for business (more than 50%) can be claimed as an <strong className="text-gray-200">immediate deduction</strong> without using the instant asset write-off or a depreciation schedule. This includes items like a keyboard ($80), mouse ($50), phone case ($60), or USB hub ($120). Just include them as a business expense in the year of purchase.
              </p>
            </div>

            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 mt-4">
              <h4 className="text-white font-semibold mb-3">Disposal of Assets</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                When you sell, scrap, or stop using a depreciable asset, you may need to include an <strong className="text-gray-200">adjusting amount</strong> in your tax return. If you sell it for more than its written-down value, you have a &quot;balancing adjustment&quot; (assessable income). If you sell it for less, you can claim the remaining amount as a deduction. If you throw it away or it breaks and has a remaining written-down value, you can claim that remaining value as a deduction in that year.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: Depreciation and Your Invoicing */}
        <section id="depreciation-and-invoicing">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold">6</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Depreciation and Your Invoicing</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Depreciation does not appear on your invoices directly &mdash; but it should <strong className="text-white">inform how you price your work</strong>. Your equipment is a real business cost, and if your rates do not account for it, you are effectively subsidising your clients.
            </p>

            <h3 className="text-lg font-semibold text-white mt-6">The True Cost of Your Equipment</h3>
            <p className="text-gray-300 leading-relaxed">
              Think about your total equipment cost per year. If you have a $3,000 laptop (4-year life), a $1,500 monitor (5-year life), a $2,000 camera (6.67-year life), and a $800 chair (10-year life), your <strong className="text-white">annual equipment cost</strong> is approximately:
            </p>
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 mt-3">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-gray-400">
                  <span>Laptop ($3,000 / 4 years)</span>
                  <span className="text-amber-400 font-medium">$750/year</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Monitor ($1,500 / 5 years)</span>
                  <span className="text-amber-400 font-medium">$300/year</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Camera ($2,000 / 6.67 years)</span>
                  <span className="text-amber-400 font-medium">$300/year</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Chair ($800 / 10 years)</span>
                  <span className="text-amber-400 font-medium">$80/year</span>
                </div>
                <div className="border-t border-gray-700/50 pt-2 flex justify-between">
                  <span className="text-white font-medium">Total annual equipment cost</span>
                  <span className="text-amber-400 font-bold">$1,430/year</span>
                </div>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed mt-4">
              If you work 48 weeks per year, that is roughly <strong className="text-white">$30 per week</strong> in equipment costs alone. If you bill 30 hours per week, you need to add at least <strong className="text-white">$1 per billable hour</strong> just to cover equipment depreciation. This does not include software subscriptions, internet, insurance, or other overheads.
            </p>

            <h3 className="text-lg font-semibold text-white mt-6">Factoring Equipment into Your Rates</h3>
            <div className="grid sm:grid-cols-2 gap-4 mt-3">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-amber-400 font-medium mb-2">Annual Cost Method</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Add up all your annual depreciation costs, divide by your billable hours, and <strong className="text-gray-200">add this to your hourly rate</strong>. For the example above: $1,430 / 1,440 billable hours = ~$1/hour. Simple and effective.
                </p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-orange-400 font-medium mb-2">Replacement Fund Method</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Set aside a fixed amount from each invoice into a <strong className="text-gray-200">replacement fund</strong>. When your laptop dies in 4 years, the money is already there. This approach treats depreciation as a real cash expense, not just a tax concept.
                </p>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-6">Replacement Planning</h3>
            <p className="text-gray-300 leading-relaxed">
              Your depreciation schedule doubles as a <strong className="text-white">replacement planning tool</strong>. When an asset is nearing the end of its effective life, start budgeting for the replacement. A laptop with a 4-year effective life will likely need replacing around year 3-4. Cameras might last longer physically but may need upgrading to stay competitive. Use your depreciation schedule to forecast when each piece of equipment will need replacing and plan your cash flow accordingly.
            </p>

            <div className="rounded-xl bg-amber-500/5 border border-amber-500/20 p-5 mt-6">
              <p className="text-amber-400 font-medium mb-2">InvoiceFlow + Depreciation</p>
              <p className="text-gray-400 text-sm">
                When you build your rates in InvoiceFlow, your hourly or project rate should already <strong className="text-gray-200">include a component for equipment depreciation</strong>. Use our rate calculator to ensure your rates cover tax, super, depreciation, and all other business costs &mdash; so every invoice you send is profitable from day one.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Related Tools */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-white mb-2 text-center">Related Tools</h2>
        <p className="text-gray-400 text-center mb-8">Free tools to help you manage depreciation and business expenses.</p>
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
        <p className="text-gray-400 text-center mb-8">In-depth guides on tax, deductions, and freelancing in Australia.</p>
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
            Build Depreciation Into Every Invoice
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Your equipment costs are real business expenses. InvoiceFlow helps you set rates that cover depreciation, tax, super, and every other cost &mdash; so every invoice you send is profitable from the start.
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
