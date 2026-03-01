import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Instant Asset Write-Off: $20,000 Threshold, Rules & Eligibility for Freelancers — InvoiceFlow',
  description:
    'What is the instant asset write-off? Complete guide for Australian freelancers & sole traders — $20,000 threshold 2024-25, eligibility rules, what you can claim, how to claim it, threshold history, and ATO rules. Includes worked examples and tax savings calculations.',
  keywords: [
    'instant asset write-off 2025',
    '$20000 instant asset write-off',
    'instant asset write-off sole trader',
    'small business instant asset write-off',
    'immediate deduction business assets',
    'ATO instant asset write-off rules',
    'instant asset write-off eligibility',
    'equipment write-off freelancer australia',
  ],
  alternates: { canonical: '/glossary/instant-asset-write-off' },
  openGraph: {
    title: 'Instant Asset Write-Off: $20,000 Threshold, Rules & Eligibility for Freelancers — InvoiceFlow',
    description:
      'Everything Australian freelancers need to know about the instant asset write-off: $20,000 threshold, eligibility, what you can and cannot claim, how to claim it, and threshold history.',
    url: 'https://invoiceflow-teal.vercel.app/glossary/instant-asset-write-off',
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
    { '@type': 'ListItem', position: 3, name: 'Instant Asset Write-Off', item: `${BASE_URL}/glossary/instant-asset-write-off` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the instant asset write-off and what is the current threshold?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The instant asset write-off allows eligible businesses to immediately deduct the full cost of eligible assets (costing less than the threshold) in the income year the asset is first used or installed. For the 2024-25 income year, the threshold is $20,000 per asset (GST-exclusive if registered for GST). This means you can claim the entire cost as a deduction in one year instead of depreciating it over multiple years. The threshold has changed multiple times — it was temporarily raised to $150,000 during COVID.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who is eligible for the instant asset write-off?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You must be a Small Business Entity (SBE) with aggregated turnover under $10 million. This includes sole traders, partnerships, companies, and trusts. The asset must be first used or installed ready for use in the relevant income year. Second-hand assets are eligible. The asset must be used for business purposes (partial private use requires apportionment).',
      },
    },
    {
      '@type': 'Question',
      name: 'What assets can I claim under instant asset write-off?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most tangible business assets: computers, laptops, phones, cameras, tools, vehicles (up to car limit $69,674 for 2024-25), furniture, software, equipment. Assets must cost less than $20,000 (GST-exclusive). Each asset is assessed individually — you can buy multiple assets each under $20K. You CANNOT claim improvements to existing assets, or assets that are part of a set costing $20K+ in total.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I claim the instant asset write-off on my tax return?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Report the deduction in your tax return at the relevant business section. Sole traders: Business and professional items section. You must keep records: tax invoice/receipt, proof of payment, evidence of business use, date first used/installed. If asset has mixed personal/business use, only claim the business percentage. Record in your BAS if GST-registered (claim GST credit separately).',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if the asset costs more than $20,000?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Assets costing $20,000 or more are added to the small business simplified depreciation pool and depreciated at 15% in the first year and 30% in subsequent years. However, the pool itself can be immediately deducted if the balance is less than $20,000 at the end of the income year. You cannot split a single asset into parts to bring each under the threshold.',
      },
    },
  ],
};

const tocItems = [
  { id: 'what-is-instant-asset-write-off', label: '1. What Is the Instant Asset Write-Off?' },
  { id: 'eligibility-requirements', label: '2. Eligibility Requirements' },
  { id: 'what-you-can-claim', label: '3. What You Can (and Cannot) Claim' },
  { id: 'how-to-claim', label: '4. How to Claim It' },
  { id: 'threshold-history', label: '5. Threshold History & Changes' },
  { id: 'invoiceflow-helps', label: '6. How InvoiceFlow Helps' },
];

const relatedTools = [
  {
    href: '/tools/tax-estimator',
    name: 'Tax Estimator',
    description: 'Estimate your income tax liability as a sole trader and see how instant write-off deductions reduce your bill.',
    icon: (
      <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18v-.008zm-12 0h.008v.008H6v-.008z" />
      </svg>
    ),
  },
  {
    href: '/tools/tax-deduction-finder',
    name: 'Tax Deduction Finder',
    description: 'Discover all the tax deductions you can claim as an Australian freelancer, including asset write-offs.',
    icon: (
      <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
  {
    href: '/tools/bas-preparation-checklist',
    name: 'BAS Preparation Checklist',
    description: 'Prepare your quarterly BAS lodgement with our step-by-step checklist including GST credits on assets.',
    icon: (
      <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
  },
  {
    href: '/tools/profit-loss-statement-generator',
    name: 'Profit & Loss Generator',
    description: 'Generate a profit and loss statement that includes asset write-off deductions and expense tracking.',
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
    description: 'Income tax, deductions, BAS, and everything else you need to know as an Australian sole trader.',
  },
  {
    href: '/guides/tax-deductions-freelancers',
    name: 'Tax Deductions Guide',
    description: 'Complete list of tax deductions for Australian freelancers — home office, vehicle, equipment, and more.',
  },
  {
    href: '/guides/eofy-preparation',
    name: 'EOFY Preparation',
    description: 'End of financial year checklist — asset purchases, deductions, and lodgement deadlines for freelancers.',
  },
];

export default function InstantAssetWriteOffGlossaryPage() {
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
            <span className="text-white">Instant Asset Write-Off</span>
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
            Instant Asset Write-Off{' '}
            <span className="bg-gradient-to-r from-emerald-500 to-green-500 bg-clip-text text-transparent">
              for Australian Freelancers
            </span>
          </h1>

          {/* Summary */}
          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            The instant asset write-off lets you deduct the full cost of eligible business assets &mdash; laptops, cameras, tools, vehicles &mdash; in a single year instead of depreciating them over time. This guide covers the $20,000 threshold, eligibility rules, what you can and cannot claim, how to claim it on your tax return, and the full threshold history.
          </p>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>14 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>ATO-Accurate 2024-25</span>
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
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs font-bold">$20K</span>
              <div>
                <p className="text-white font-medium text-sm">Current Threshold</p>
                <p className="text-gray-400 text-sm">Per asset, GST-exclusive if registered &mdash; for the 2024-25 income year</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs font-bold">$10M</span>
              <div>
                <p className="text-white font-medium text-sm">Turnover Limit</p>
                <p className="text-gray-400 text-sm">Must be a Small Business Entity with aggregated turnover under $10 million</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs font-bold">Yr 1</span>
              <div>
                <p className="text-white font-medium text-sm">Full Deduction in Year One</p>
                <p className="text-gray-400 text-sm">Claim the entire cost immediately instead of depreciating over multiple years</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs font-bold">Each</span>
              <div>
                <p className="text-white font-medium text-sm">Per Asset Assessment</p>
                <p className="text-gray-400 text-sm">Each asset assessed individually &mdash; buy 5 items under $20K each and claim them all</p>
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

        {/* Section 1: What Is the Instant Asset Write-Off? */}
        <section id="what-is-instant-asset-write-off">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center text-white text-sm font-bold">1</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">What Is the Instant Asset Write-Off?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              The instant asset write-off is officially part of the <strong className="text-white">simplified depreciation rules for small business</strong> under Division 328 of the Income Tax Assessment Act 1997 (ITAA 1997). It allows eligible businesses to <strong className="text-white">immediately deduct the full cost of eligible assets</strong> in the income year the asset is first used or installed ready for use, rather than spreading the deduction across the asset&apos;s effective life through <Link href="/glossary/depreciation" className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2">depreciation</Link>.
            </p>
            <p className="text-gray-300 leading-relaxed">
              The current threshold for the 2024-25 income year is <strong className="text-white">$20,000 per asset</strong> (GST-exclusive if you are registered for GST, or GST-inclusive if you are not). This means any eligible business asset you purchase that costs less than $20,000 can be claimed as a full <Link href="/glossary/tax-deduction" className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2">tax deduction</Link> in the year you start using it.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Critically, each asset is assessed individually. You can buy <strong className="text-white">five items at $19,000 each</strong> &mdash; a total spend of $95,000 &mdash; and claim the entire $95,000 as an immediate deduction, because each individual asset is under the $20,000 threshold. The threshold is not a cumulative annual cap; it applies to each separate asset.
            </p>
            <p className="text-gray-300 leading-relaxed">
              The asset must be <strong className="text-white">first used or installed ready for use</strong> during the relevant income year. Buying something on 28 June but not unboxing it until 3 July means the deduction falls into the next financial year. Timing matters.
            </p>

            {/* Comparison Cards */}
            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-emerald-500/20 p-5">
                <h4 className="text-emerald-400 font-semibold mb-3">With the Instant Write-Off</h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-3">
                  You buy a <strong className="text-gray-200">$5,000 laptop</strong> for your freelance business:
                </p>
                <div className="rounded-lg bg-gray-900/50 p-3 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Year 1 deduction</span>
                    <span className="text-emerald-400 font-bold">$5,000</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Year 2 deduction</span>
                    <span className="text-gray-500">$0</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Total claimed</span>
                    <span className="text-emerald-400 font-bold">$5,000 in Year 1</span>
                  </div>
                </div>
                <p className="text-emerald-400 text-xs mt-2 font-medium">Full deduction immediately &mdash; maximum cash flow benefit</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-5">
                <h4 className="text-red-400 font-semibold mb-3">Without (Standard Depreciation)</h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-3">
                  Same <strong className="text-gray-200">$5,000 laptop</strong>, depreciated over 4 years (prime cost):
                </p>
                <div className="rounded-lg bg-gray-900/50 p-3 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Year 1 deduction</span>
                    <span className="text-red-400 font-medium">$1,250</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Year 2 deduction</span>
                    <span className="text-red-400 font-medium">$1,250</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Years 3-4 deduction</span>
                    <span className="text-red-400 font-medium">$1,250/yr</span>
                  </div>
                </div>
                <p className="text-red-400 text-xs mt-2 font-medium">Deduction spread over 4 years &mdash; smaller benefit each year</p>
              </div>
            </div>

            <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-5 mt-6">
              <p className="text-emerald-400 font-medium mb-2">COVID-Era Temporary Increases</p>
              <p className="text-gray-400 text-sm">
                Between March 2020 and June 2023, the government introduced <strong className="text-gray-200">temporary full expensing</strong> as a COVID stimulus measure. During this period, the threshold was first raised to $150,000, and then there was <em>no limit at all</em> &mdash; businesses could instantly deduct assets of any value. This has now ended, and the threshold has returned to $20,000 for the 2023-24 and 2024-25 income years.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Eligibility Requirements */}
        <section id="eligibility-requirements">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center text-white text-sm font-bold">2</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Eligibility Requirements</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Not every business can use the instant asset write-off. You must meet the <strong className="text-white">Small Business Entity (SBE) test</strong> and several other conditions. Here is what the ATO requires.
            </p>

            <h3 className="text-lg font-semibold text-white mt-6">The Small Business Entity Test</h3>
            <p className="text-gray-300 leading-relaxed">
              To be an SBE, your <strong className="text-white">aggregated turnover must be less than $10 million</strong> for the income year. Aggregated turnover includes not just your own turnover, but also the turnover of any connected or affiliated entities. For most freelancers and sole traders, this is simply your total business income for the year &mdash; well under the $10M threshold.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Eligible business structures include <Link href="/glossary/sole-trader" className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2">sole traders</Link>, <Link href="/glossary/partnership" className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2">partnerships</Link>, companies, and trusts. You must be <strong className="text-white">carrying on a business</strong> &mdash; the ATO distinguishes between a business and a hobby. If you are earning income regularly, operating with a business-like structure, and intending to make a profit, you are carrying on a business.
            </p>

            {/* 5-Point Eligibility Checklist */}
            <div className="rounded-xl bg-gray-800/50 border border-emerald-500/30 p-6 mt-6">
              <h4 className="text-white font-semibold mb-4">Eligibility Checklist</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="text-white font-medium text-sm">Small Business Entity status</p>
                    <p className="text-gray-400 text-sm">Aggregated turnover under $10 million for the income year</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="text-white font-medium text-sm">Business use</p>
                    <p className="text-gray-400 text-sm">Asset is used, or installed ready for use, for a taxable (business) purpose</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="text-white font-medium text-sm">First used in the income year</p>
                    <p className="text-gray-400 text-sm">Must be first used or installed ready for use during the relevant financial year</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="text-white font-medium text-sm">Cost under the threshold</p>
                    <p className="text-gray-400 text-sm">Asset costs less than $20,000 (GST-exclusive if registered for GST)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="text-white font-medium text-sm">Not an excluded asset</p>
                    <p className="text-gray-400 text-sm">Not a horticultural plant, in-house software allocated to a pool, or asset you lease out</p>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-6">Excluded Entities</h3>
            <p className="text-gray-300 leading-relaxed">
              Large businesses with <strong className="text-white">aggregated turnover of $10 million or more</strong> cannot use the small business instant asset write-off. Certain partnerships where not all partners are small business entities may also be excluded. If your business structure is complex, check with your tax agent.
            </p>

            <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-5 mt-6">
              <p className="text-emerald-400 font-medium mb-2">The 2-Year Lockout Rule</p>
              <p className="text-gray-400 text-sm">
                If you have previously <strong className="text-gray-200">opted out of the simplified depreciation rules</strong> (or been excluded because you did not meet the SBE test), there is a <strong className="text-gray-200">2-year waiting period</strong> before you can re-enter and use the instant asset write-off again. This lockout does not apply if you were excluded solely because of the turnover threshold. For most freelancers who have always been SBEs, this rule is unlikely to apply &mdash; but it is worth knowing.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: What You Can (and Cannot) Claim */}
        <section id="what-you-can-claim">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center text-white text-sm font-bold">3</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">What You Can (and Cannot) Claim</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              The instant asset write-off covers most tangible business assets, but there are specific exclusions. Here is a comprehensive breakdown of what qualifies and what does not.
            </p>

            {/* Two-column table */}
            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-emerald-500/20 p-5">
                <h4 className="text-emerald-400 font-semibold mb-4">CAN Claim</h4>
                <div className="space-y-2.5">
                  <div className="flex items-start gap-2 text-sm text-gray-400">
                    <svg className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Computers and laptops</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-400">
                    <svg className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Smartphones and tablets</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-400">
                    <svg className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Cameras and recording equipment</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-400">
                    <svg className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Office furniture, desks, and chairs</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-400">
                    <svg className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Power tools and hand tools</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-400">
                    <svg className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Vehicles (up to car cost limit)</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-400">
                    <svg className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Software licenses</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-400">
                    <svg className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Printers and scanners</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-400">
                    <svg className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Air conditioning units</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-400">
                    <svg className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Small machinery</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-400">
                    <svg className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Website development costs (if capitalised)</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-400">
                    <svg className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Point-of-sale equipment</span>
                  </div>
                </div>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-5">
                <h4 className="text-red-400 font-semibold mb-4">CANNOT Claim</h4>
                <div className="space-y-2.5">
                  <div className="flex items-start gap-2 text-sm text-gray-400">
                    <svg className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                    </svg>
                    <span>Buildings and structural improvements</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-400">
                    <svg className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                    </svg>
                    <span>Assets leased out to other parties</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-400">
                    <svg className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                    </svg>
                    <span>Horticultural plants</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-400">
                    <svg className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                    </svg>
                    <span>Capital works (Division 43 assets)</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-400">
                    <svg className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                    </svg>
                    <span>Assets part of a set exceeding threshold</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-400">
                    <svg className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                    </svg>
                    <span>In-house software costing $20,000+</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-400">
                    <svg className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                    </svg>
                    <span>Assets allocated to SBE pool before current year</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-400">
                    <svg className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                    </svg>
                    <span>Land</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Special Rules Callout */}
            <div className="rounded-2xl bg-gray-800/50 border border-emerald-500/30 p-6 mt-6">
              <h4 className="text-white font-semibold mb-4">Special Rules to Know</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H18.375M2.25 14.25h1.5M2.25 14.25l2.5-7.5h10.5l2.5 7.5" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">Car Cost Limit: $69,674 for 2024-25</p>
                    <p className="text-gray-400 text-sm">Even if a car costs less than $20,000 and qualifies for the instant write-off, the car cost limit of $69,674 applies for luxury vehicles. You cannot claim more than the car limit regardless of the actual price paid. For most freelancers buying used cars under $20K, this is not a concern.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">Mixed Use: Apportion Between Business and Private</p>
                    <p className="text-gray-400 text-sm">If you use an asset for both business and personal purposes, you can only claim the business-use percentage. For example, a $10,000 laptop used 70% for business means you can claim $7,000 as an instant deduction &mdash; not the full $10,000.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">Sets of Assets: Treated as One Asset</p>
                    <p className="text-gray-400 text-sm">The ATO treats items that function as a set as a single asset. For example, if you buy 20 identical chairs for a salon at $1,200 each ($24,000 total), the ATO may treat them as a set costing $24,000 &mdash; exceeding the $20,000 threshold. You cannot artificially split a set to bring each piece under the threshold.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: How to Claim It */}
        <section id="how-to-claim">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center text-white text-sm font-bold">4</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">How to Claim It</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Claiming the instant asset write-off is straightforward, but you need to <strong className="text-white">follow the correct process and keep proper records</strong>. Here is a step-by-step guide for sole traders and freelancers.
            </p>

            <div className="space-y-4 mt-6">
              {/* Step 1 */}
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <span className="text-emerald-400 font-bold text-sm">1</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Verify SBE Eligibility</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Confirm your <strong className="text-gray-200">aggregated turnover is under $10 million</strong> for the income year. For most freelancers, this is your total business revenue. If you are a sole trader earning under $500K (or even $1M), you are well within the threshold. If you have connected entities or affiliates, include their turnover too.
                </p>
              </div>

              {/* Step 2 */}
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <span className="text-emerald-400 font-bold text-sm">2</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Purchase the Asset</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  When purchasing, ensure you get a <strong className="text-gray-200">tax invoice</strong> that includes the supplier&apos;s ABN, the GST amount (if applicable), a clear description of the asset, and the date of purchase. Keep proof of payment (bank statement, credit card statement, or receipt). If the cost is GST-exclusive less than $20,000, it qualifies.
                </p>
              </div>

              {/* Step 3 */}
              <div className="rounded-xl bg-gray-800/50 border border-emerald-500/30 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <span className="text-emerald-400 font-bold text-sm">3</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Install or Use the Asset Before 30 June</h3>
                  <span className="text-xs text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">Critical</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  The asset must be <strong className="text-gray-200">first used or installed ready for use</strong> before the end of the financial year (30 June). Buying a laptop on 29 June and setting it up on 1 July means the deduction shifts to the next year. &quot;Installed ready for use&quot; means connected, configured, and available for business use &mdash; not still in the box.
                </p>
              </div>

              {/* Step 4 */}
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <span className="text-emerald-400 font-bold text-sm">4</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Calculate Business Use Percentage</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  If the asset is used <strong className="text-gray-200">100% for business</strong>, you can claim the full cost. If it has mixed personal and business use, calculate the business percentage and only claim that portion. Keep a reasonable basis for your estimate &mdash; a usage diary or log is ideal for assets with significant mixed use.
                </p>
              </div>

              {/* Step 5 */}
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <span className="text-emerald-400 font-bold text-sm">5</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Record in Your Accounting System</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Enter the asset purchase in your accounting system (InvoiceFlow, Xero, MYOB, or QuickBooks) and categorise it as an <strong className="text-gray-200">instant asset write-off</strong>. This ensures it flows correctly to your <Link href="/glossary/tax-return" className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2">tax return</Link> and is tracked for record-keeping purposes. If you are <Link href="/glossary/gst" className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2">GST</Link>-registered, record the GST component separately to claim the input tax credit on your <Link href="/glossary/bas" className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2">BAS</Link>.
                </p>
              </div>

              {/* Step 6 */}
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <span className="text-emerald-400 font-bold text-sm">6</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Include in Your Tax Return</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  As a sole trader, report the instant asset write-off deduction at <strong className="text-gray-200">Item P8 (Depreciation expenses) in the Business and Professional Items schedule</strong> of your individual tax return. Your accounting software or <Link href="/glossary/tax-agent" className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2">tax agent</Link> will handle the mapping. The full amount (or business-use portion) is claimed in the year the asset was first used.
                </p>
              </div>
            </div>

            {/* Record-Keeping Requirements */}
            <div className="rounded-xl bg-gray-800/50 border border-emerald-500/20 p-6 mt-6">
              <h4 className="text-white font-semibold mb-4">Record-Keeping Requirements</h4>
              <p className="text-gray-400 text-sm mb-3">The ATO requires you to keep the following records for at least <strong className="text-gray-200">5 years</strong> from the date you lodge your tax return:</p>
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="flex items-start gap-2 text-sm text-gray-400">
                  <svg className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Tax invoice or receipt for the purchase</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-gray-400">
                  <svg className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Proof of payment (bank or card statement)</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-gray-400">
                  <svg className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Date the asset was first used or installed</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-gray-400">
                  <svg className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Business use diary/log (if mixed use)</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-gray-400">
                  <svg className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Photos of the asset in business use (recommended)</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-gray-400">
                  <svg className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Evidence of business-use percentage basis</span>
                </div>
              </div>
            </div>

            {/* Worked Example */}
            <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-900/10 to-green-900/10 p-6 mt-6">
              <h4 className="text-white font-semibold mb-4">Worked Example: Freelance Photographer</h4>
              <p className="text-gray-400 text-sm mb-4">
                A freelance photographer buys three assets during the 2024-25 financial year:
              </p>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <div>
                      <span className="text-white font-medium">Camera body</span>
                      <span className="text-gray-500 ml-2">100% business use</span>
                    </div>
                    <span className="text-emerald-400 font-medium">$4,500</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <div>
                      <span className="text-white font-medium">Laptop</span>
                      <span className="text-gray-500 ml-2">80% business use</span>
                    </div>
                    <span className="text-gray-400">$2,800 x 80% = <span className="text-emerald-400 font-medium">$2,240</span></span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <div>
                      <span className="text-white font-medium">Standing desk</span>
                      <span className="text-gray-500 ml-2">100% business use</span>
                    </div>
                    <span className="text-emerald-400 font-medium">$800</span>
                  </div>
                  <div className="border-t border-gray-700/50 pt-3 flex justify-between items-center">
                    <span className="text-white font-bold text-sm">Total instant asset write-off deduction</span>
                    <span className="text-emerald-400 font-bold">$7,540</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-emerald-500/20">
                <p className="text-sm text-gray-400">
                  At a <strong className="text-gray-200">32.5% marginal tax rate</strong>, this $7,540 deduction saves <strong className="text-emerald-400">$2,451 in tax</strong>. Without the instant write-off, the photographer would only claim a fraction of this through standard <Link href="/glossary/depreciation" className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2">depreciation</Link> in the first year &mdash; the rest would be spread over 4-7 years.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Threshold History & Changes */}
        <section id="threshold-history">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center text-white text-sm font-bold">5</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Threshold History &amp; Changes</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              The instant asset write-off threshold has been one of the most frequently changed tax settings in Australian history. It has been adjusted almost every year in the Federal Budget, raised dramatically during COVID, and then wound back. Here is the full timeline.
            </p>

            {/* Timeline Table */}
            <div className="rounded-2xl border border-gray-700/50 overflow-hidden mt-6">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-800/80">
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Period</th>
                    <th className="text-left text-sm font-medium text-emerald-400 px-6 py-4">Threshold</th>
                    <th className="text-left text-sm font-medium text-green-400 px-6 py-4">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700/50">
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm font-medium">Pre-2015</td>
                    <td className="px-6 py-3 text-emerald-400 font-medium text-sm">$1,000</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">Original threshold &mdash; very low</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm font-medium">2015-16 Budget</td>
                    <td className="px-6 py-3 text-emerald-400 font-medium text-sm">$20,000</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">Major increase from 12 May 2015</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm font-medium">2016-17 to 2018-19</td>
                    <td className="px-6 py-3 text-emerald-400 font-medium text-sm">$20,000</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">Maintained at $20,000 across three years</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm font-medium">2019-20 (Jan)</td>
                    <td className="px-6 py-3 text-emerald-400 font-medium text-sm">$25,000</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">Raised from 29 January 2019</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm font-medium">2019-20 (Mar)</td>
                    <td className="px-6 py-3 text-emerald-400 font-medium text-sm">$30,000</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">Raised again from 2 April 2019</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm font-medium">2020-21 (COVID)</td>
                    <td className="px-6 py-3 text-emerald-400 font-medium text-sm">$150,000</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">COVID stimulus &mdash; from 12 March 2020</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm font-medium">2020-21 to 2022-23</td>
                    <td className="px-6 py-3 text-emerald-400 font-medium text-sm">No limit</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">Temporary full expensing &mdash; all SBE assets, any value</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm font-medium">2023-24</td>
                    <td className="px-6 py-3 text-emerald-400 font-medium text-sm">$20,000</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">Back to $20,000 from 1 July 2023</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm font-medium">2024-25</td>
                    <td className="px-6 py-3 text-emerald-400 font-medium text-sm">$20,000</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">Maintained at $20,000</td>
                  </tr>
                  <tr className="bg-gray-800/60">
                    <td className="px-6 py-3 text-white text-sm font-bold">2025-26</td>
                    <td className="px-6 py-3 text-emerald-400 font-bold text-sm">TBC</td>
                    <td className="px-6 py-3 text-gray-400 text-sm font-medium">Check Federal Budget announcements</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-5 mt-6">
              <p className="text-emerald-400 font-medium mb-2">Always Check the ATO Website</p>
              <p className="text-gray-400 text-sm">
                The instant asset write-off threshold changes with <strong className="text-gray-200">almost every Federal Budget</strong>. Before making a significant asset purchase, always check the <strong className="text-gray-200">ATO website</strong> (ato.gov.au) for the most current threshold and rules. The threshold for 2025-26 will be announced in the May 2025 Budget. Do not assume it will remain at $20,000 &mdash; it could go up, go down, or be replaced with a different scheme entirely.
              </p>
            </div>

            <h3 className="text-lg font-semibold text-white mt-6">What Happens to Assets Over $20,000?</h3>
            <p className="text-gray-300 leading-relaxed">
              If an asset costs <strong className="text-white">$20,000 or more</strong>, it cannot be instantly written off under the current rules. Instead, it is added to the <strong className="text-white">small business simplified depreciation pool</strong> and depreciated at:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mt-3">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-emerald-400 font-semibold mb-2">First Year</h4>
                <p className="text-3xl font-bold text-white">15%</p>
                <p className="text-gray-400 text-sm mt-1">Depreciation rate in the year the asset is first used</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-green-400 font-semibold mb-2">Subsequent Years</h4>
                <p className="text-3xl font-bold text-white">30%</p>
                <p className="text-gray-400 text-sm mt-1">Depreciation rate applied to the remaining pool balance</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mt-4">
              There is one important exception: if the <strong className="text-white">balance of the entire depreciation pool is less than $20,000</strong> at the end of the income year, you can write off the entire remaining pool balance as an immediate deduction. This means assets that start above the threshold may eventually be fully deducted when the pool balance drops low enough.
            </p>
            <p className="text-gray-300 leading-relaxed">
              You <strong className="text-white">cannot split a single asset into parts</strong> to bring each portion under the $20,000 threshold. The ATO assesses the total cost of each individual asset. Buying a $25,000 piece of equipment and trying to split it into two invoices of $12,500 will not work &mdash; the ATO will treat it as a single $25,000 asset.
            </p>
          </div>
        </section>

        {/* Section 6: How InvoiceFlow Helps */}
        <section id="invoiceflow-helps">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center text-white text-sm font-bold">6</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">How InvoiceFlow Helps</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Managing asset purchases, tracking thresholds, and ensuring you claim every eligible write-off can be tedious when done manually. InvoiceFlow is built to <strong className="text-white">simplify asset management for Australian freelancers</strong>.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-emerald-500/20 p-5">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">Expense Categorisation</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Track asset purchases with automatic categorisation. Tag expenses as instant asset write-offs, and InvoiceFlow ensures they flow correctly to your <Link href="/glossary/tax-return" className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2">tax return</Link> at year end.
                </p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-emerald-500/20 p-5">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">Threshold Alerts</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Flag assets approaching the $20,000 threshold. If a purchase is close to the limit, InvoiceFlow alerts you so you can verify GST-inclusive vs GST-exclusive pricing and ensure the asset qualifies.
                </p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-emerald-500/20 p-5">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">Expense Reports</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Generate comprehensive expense reports for tax time that separate instant asset write-offs from regular <Link href="/glossary/business-expenses" className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2">business expenses</Link>. Hand the report to your accountant or use it to complete your own return.
                </p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-emerald-500/20 p-5">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">Business Use Tracking</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Record business-use percentages for mixed-use assets. InvoiceFlow automatically calculates the deductible portion, so you claim the correct amount and have a clear record if the ATO ever asks.
                </p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-emerald-500/20 p-5 sm:col-span-2">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">BAS-Ready Reporting for GST Credits on Assets</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  If you are <Link href="/glossary/gst" className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2">GST</Link>-registered, InvoiceFlow separates the GST component of asset purchases so you can claim <Link href="/glossary/input-tax-credits" className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2">input tax credits</Link> accurately on your quarterly <Link href="/glossary/bas" className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2">BAS</Link>. The income tax deduction (instant write-off) and the GST credit are claimed through different mechanisms &mdash; InvoiceFlow handles both.
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-5 mt-6">
              <p className="text-emerald-400 font-medium mb-2">Pro Tip: Time Your Asset Purchases</p>
              <p className="text-gray-400 text-sm">
                If you are planning a significant asset purchase and it is close to 30 June, <strong className="text-gray-200">buy and install the asset before the end of the financial year</strong> to claim the deduction in the current year. This is especially valuable if you had a high-income year and want to reduce your tax bill. Conversely, if next year looks like it will be higher income, you might want to delay the purchase to July to shift the deduction forward. InvoiceFlow helps you model both scenarios.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Related Tools */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-white mb-2 text-center">Related Tools</h2>
        <p className="text-gray-400 text-center mb-8">Free tools to help you manage asset purchases and tax deductions.</p>
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
            Track Your Business Assets &mdash; Start Free
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            InvoiceFlow tracks every asset purchase, categorises it for instant write-off, and generates tax-ready reports. Never miss a deduction and never overpay on tax again.
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
