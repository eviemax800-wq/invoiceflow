import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Medicare Levy: Rates, Thresholds & MLS Guide for Freelancers (2025-26) — InvoiceFlow',
  description:
    'What is the Medicare levy in Australia? Learn the 2% levy rate, low-income reduction thresholds, Medicare Levy Surcharge (MLS) tiers for high earners, and how freelancers can avoid overpaying. Updated for 2025-26.',
  keywords: [
    'medicare levy 2025-26',
    'medicare levy surcharge',
    'MLS threshold',
    'medicare levy rate australia',
    'medicare levy exemption',
    'medicare levy freelancer',
    'medicare levy low income threshold',
    'medicare levy surcharge private health insurance',
    'do freelancers pay medicare levy',
    'medicare levy sole trader',
  ],
  alternates: { canonical: '/glossary/medicare-levy' },
  openGraph: {
    title: 'Medicare Levy: Rates, Thresholds & MLS Guide for Freelancers (2025-26) — InvoiceFlow',
    description:
      'Everything Australian freelancers need to know about the Medicare levy: 2% standard rate, low-income reduction thresholds, MLS tiers, PHI strategies, and worked examples for sole traders.',
    url: 'https://invoiceflow-teal.vercel.app/glossary/medicare-levy',
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
    { '@type': 'ListItem', position: 3, name: 'Medicare Levy', item: `${BASE_URL}/glossary/medicare-levy` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the Medicare levy rate for 2025-26?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The standard Medicare levy rate is 2% of your taxable income. This applies to all Australian tax residents above the low-income reduction thresholds. In addition, high earners without private health insurance may pay the Medicare Levy Surcharge (MLS) of 1% to 1.5% on top, depending on their income tier. The MLS is separate from the standard 2% levy.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do freelancers have to pay the Medicare levy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, all Australian tax residents must pay the 2% Medicare levy on their taxable income, including freelancers and sole traders. It is calculated on your net business income (after allowable deductions) at tax return time. Unlike employees who have it withheld from wages, freelancers should budget for it as part of their quarterly PAYG instalment estimates.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can I reduce or avoid the Medicare Levy Surcharge?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most common and cost-effective way to avoid the MLS is to take out private health insurance with at least base hospital cover. For singles earning over $93,000 or families earning over $186,000, the cost of basic hospital cover ($1,200-$1,800 per year) is typically less than the MLS (1-1.5% of income). Plus you receive actual health coverage and a PHI rebate of up to 24.608% depending on your income.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the Medicare levy included in PAYG instalments?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Medicare levy is not separately itemised on your BAS or PAYG instalment notices. It is calculated as part of your annual tax return. However, the ATO\'s PAYG instalment rate may factor in the levy when setting your rate. As a freelancer, you should include the 2% Medicare levy (and any potential MLS) in your own tax estimates and quarterly cash flow budgeting to avoid a surprise bill at tax time.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if I can\'t afford the Medicare levy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If your taxable income is below $26,000 (singles) or $43,846 (families), you may qualify for a reduced Medicare levy or full exemption. Below $24,276 for singles, no levy is payable at all. The reduction phases in at a rate of 10 cents per dollar of income above the lower threshold until the full 2% rate applies. If you are experiencing financial hardship, you can also apply to the ATO for a payment plan to spread your tax and levy payments over time.',
      },
    },
  ],
};

const tocItems = [
  { id: 'what-is-medicare-levy', label: '1. What Is the Medicare Levy?' },
  { id: 'rates-thresholds', label: '2. Rates & Thresholds (2025-26)' },
  { id: 'medicare-levy-surcharge', label: '3. Medicare Levy Surcharge (MLS)' },
  { id: 'freelancer-impact', label: '4. How Medicare Levy Affects Freelancers' },
  { id: 'worked-example', label: '5. Worked Example' },
  { id: 'how-invoiceflow-helps', label: '6. How InvoiceFlow Helps' },
];

const relatedTools = [
  {
    href: '/tools/tax-estimator',
    name: 'Tax Estimator',
    description: 'Estimate your income tax liability including Medicare levy and MLS calculations.',
    icon: (
      <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18v-.008zm-12 0h.008v.008H6v-.008z" />
      </svg>
    ),
  },
  {
    href: '/tools/payg-instalment-calculator',
    name: 'PAYG Instalment Calculator',
    description: 'Calculate quarterly PAYG instalments with Medicare levy factored into your estimates.',
    icon: (
      <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
      </svg>
    ),
  },
  {
    href: '/tools/freelance-tax-estimator',
    name: 'Freelance Tax Estimator',
    description: 'All-in-one tax calculator for sole traders covering income tax, ML, super, and PAYG.',
    icon: (
      <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    href: '/tools/eofy-tax-checklist-generator',
    name: 'EOFY Tax Checklist Generator',
    description: 'Generate a personalised EOFY checklist including Medicare levy and MLS considerations.',
    icon: (
      <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const relatedGuides = [
  {
    href: '/guides/tax-guide-freelancers',
    name: 'Tax Guide for Freelancers',
    description: 'Complete guide to income tax, deductions, Medicare levy, and PAYG for sole traders.',
  },
  {
    href: '/guides/eofy-guide',
    name: 'EOFY Guide',
    description: 'End of financial year checklist, deadlines, and last-minute tax and levy tips.',
  },
  {
    href: '/guides/superannuation-for-freelancers',
    name: 'Superannuation for Freelancers',
    description: 'How super, tax deductions, and the Medicare levy work together for self-employed Australians.',
  },
];

export default function MedicareLevyGlossaryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative px-4 pt-20 pb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-sky-500/10 to-cyan-500/10 blur-3xl" />
        <div className="relative max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/glossary" className="hover:text-white transition-colors">Glossary</Link>
            <span>/</span>
            <span className="text-white">Medicare Levy</span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            Glossary &mdash; Tax &amp; Compliance
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Medicare Levy{' '}
            <span className="bg-gradient-to-r from-cyan-500 to-sky-500 bg-clip-text text-transparent">
              for Freelancers
            </span>
          </h1>

          {/* Summary */}
          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            The 2% levy that funds Australia&apos;s public healthcare system. Every tax resident pays it, and as a freelancer there&apos;s no employer to share the cost &mdash; plus high earners without private health insurance face an additional surcharge of up to 1.5%.
          </p>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>10 min read</span>
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
        <div className="rounded-2xl bg-gradient-to-br from-cyan-500/10 to-sky-500/10 border border-cyan-500/20 p-8">
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
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-xs font-bold">2%</span>
              <div>
                <p className="text-white font-medium text-sm">Standard Levy Rate</p>
                <p className="text-gray-400 text-sm">Applied to every dollar of taxable income above reduction thresholds</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-xs font-bold">$26B</span>
              <div>
                <p className="text-white font-medium text-sm">Collected Annually</p>
                <p className="text-gray-400 text-sm">Funds Australia&apos;s Medicare public health system for all residents</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-xs font-bold">$93K</span>
              <div>
                <p className="text-white font-medium text-sm">MLS Trigger (Singles)</p>
                <p className="text-gray-400 text-sm">Income above this without private health insurance triggers the surcharge</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-xs font-bold">1.5%</span>
              <div>
                <p className="text-white font-medium text-sm">Max MLS Rate</p>
                <p className="text-gray-400 text-sm">Additional surcharge for $144K+ earners without hospital cover</p>
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

        {/* Section 1: What Is the Medicare Levy? */}
        <section id="what-is-medicare-levy">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-sky-500 flex items-center justify-center text-white text-sm font-bold">1</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">What Is the Medicare Levy?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              The Medicare levy is a <strong className="text-white">2% tax on your taxable income</strong> that funds Australia&apos;s public healthcare system, Medicare. It applies to all Australian tax residents and is calculated on your entire taxable income above the low-income reduction thresholds &mdash; there is no cap on the amount you pay. The more you earn, the more you contribute.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Medicare provides access to free or subsidised treatment in public hospitals, subsidised medicines through the Pharmaceutical Benefits Scheme (PBS), and free or subsidised visits to GPs and specialists who bulk bill. The levy generates approximately <strong className="text-white">$26 billion annually</strong> for the federal government, though this covers only a portion of total Medicare costs &mdash; the remainder is funded from general tax revenue.
            </p>
            <p className="text-gray-300 leading-relaxed">
              It is important to understand that the Medicare levy is <strong className="text-white">separate from the Medicare Levy Surcharge (MLS)</strong>. The standard 2% levy applies to virtually all tax residents regardless of whether they have private health insurance. The MLS is an additional charge of 1% to 1.5% that only applies to higher-income earners who do not hold adequate private hospital cover. We cover the MLS in detail in Section 3.
            </p>
            <p className="text-gray-300 leading-relaxed">
              The levy is not itemised separately on your payslips or BAS statements &mdash; it is calculated as part of your annual tax return. However, your employer (or, if self-employed, your PAYG instalment rate) typically accounts for it when estimating your tax withholding. As a freelancer, you need to budget for it yourself.
            </p>
            <div className="rounded-xl bg-cyan-500/5 border border-cyan-500/20 p-5 mt-6">
              <p className="text-cyan-400 font-medium mb-2">Key Distinction</p>
              <p className="text-gray-400 text-sm">
                The Medicare levy is <strong className="text-gray-200">not an insurance premium</strong> &mdash; it is a tax. You cannot opt out of paying it by declining to use Medicare services, and paying it does not entitle you to any additional benefits beyond standard Medicare. Think of it as your contribution to Australia&apos;s universal healthcare safety net. Everyone pays in, everyone is covered.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Medicare Levy Rates & Thresholds (2025-26) */}
        <section id="rates-thresholds">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-sky-500 flex items-center justify-center text-white text-sm font-bold">2</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Medicare Levy Rates &amp; Thresholds (2025-26)</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              The standard Medicare levy rate is <strong className="text-white">2% of taxable income</strong>. However, low-income earners receive a reduction or full exemption, and certain categories of people are exempt entirely. Here are the current thresholds and rules for the 2025-26 financial year.
            </p>

            {/* Main Rate Table */}
            <div className="rounded-2xl border border-gray-700/50 overflow-hidden mt-6">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-800/80">
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Category</th>
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Threshold / Rate</th>
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4 hidden sm:table-cell">Details</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700/50">
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">Standard rate</td>
                    <td className="px-6 py-4 text-cyan-400 font-medium">2% of taxable income</td>
                    <td className="px-6 py-4 text-sm text-gray-400 hidden sm:table-cell">Applies to every dollar above the reduction thresholds</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">No levy (singles)</td>
                    <td className="px-6 py-4 text-cyan-400 font-medium">Below $24,276</td>
                    <td className="px-6 py-4 text-sm text-gray-400 hidden sm:table-cell">No Medicare levy payable at all</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">Reduced levy (singles)</td>
                    <td className="px-6 py-4 text-cyan-400 font-medium">$24,276 &ndash; $26,000</td>
                    <td className="px-6 py-4 text-sm text-gray-400 hidden sm:table-cell">Shade-in rate: 10% of excess above $24,276</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">Reduction (families)</td>
                    <td className="px-6 py-4 text-cyan-400 font-medium">$43,846</td>
                    <td className="px-6 py-4 text-sm text-gray-400 hidden sm:table-cell">Plus $4,027 per dependent child or student</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">Shade-in rate</td>
                    <td className="px-6 py-4 text-cyan-400 font-medium">10%</td>
                    <td className="px-6 py-4 text-sm text-gray-400 hidden sm:table-cell">10 cents per dollar above the lower threshold until full 2% applies</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">Half exemption</td>
                    <td className="px-6 py-4 text-cyan-400 font-medium">1% rate</td>
                    <td className="px-6 py-4 text-sm text-gray-400 hidden sm:table-cell">Norfolk Island residents, certain Defence Force personnel</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">Full exemption</td>
                    <td className="px-6 py-4 text-cyan-400 font-medium">0% rate</td>
                    <td className="px-6 py-4 text-sm text-gray-400 hidden sm:table-cell">Not entitled to Medicare benefits, foreign residents without Medicare cards</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="rounded-xl bg-cyan-500/5 border border-cyan-500/20 p-5 mt-6">
              <p className="text-cyan-400 font-medium mb-2">How the Shade-In Works</p>
              <p className="text-gray-400 text-sm">
                The shade-in rate prevents a &quot;cliff edge&quot; where earning one extra dollar would suddenly trigger the full 2% levy. Instead, for singles earning between $24,276 and $26,000, you pay <strong className="text-gray-200">10 cents for every dollar above $24,276</strong>. For example, if your taxable income is $25,000, your levy is: ($25,000 &minus; $24,276) &times; 10% = $72.40, rather than the full $500 (2% &times; $25,000). Once you earn $26,000 or more, the full 2% applies.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Medicare Levy Surcharge (MLS) */}
        <section id="medicare-levy-surcharge">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-sky-500 flex items-center justify-center text-white text-sm font-bold">3</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Medicare Levy Surcharge (MLS)</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              The Medicare Levy Surcharge is an <strong className="text-white">additional charge of 1% to 1.5%</strong> on top of the standard 2% levy. It applies to higher-income earners who do not hold an appropriate level of private patient hospital cover. The purpose is to encourage people who can afford it to take out private health insurance and reduce pressure on the public hospital system.
            </p>
            <p className="text-gray-300 leading-relaxed">
              The MLS is calculated on your <strong className="text-white">income for MLS purposes</strong>, which includes your taxable income, reportable fringe benefits, total net investment losses, and reportable super contributions. This is a broader measure than just taxable income &mdash; salary sacrifice into super, for instance, does not help you avoid the MLS.
            </p>

            {/* MLS Tier Table */}
            <div className="rounded-2xl border border-gray-700/50 overflow-hidden mt-6">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-800/80">
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Tier</th>
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Singles</th>
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4 hidden sm:table-cell">Families</th>
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">MLS Rate</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700/50">
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">Base</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">$0 &ndash; $93,000</td>
                    <td className="px-6 py-4 text-gray-300 text-sm hidden sm:table-cell">$0 &ndash; $186,000</td>
                    <td className="px-6 py-4 text-emerald-400 font-medium">0%</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">Tier 1</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">$93,001 &ndash; $108,000</td>
                    <td className="px-6 py-4 text-gray-300 text-sm hidden sm:table-cell">$186,001 &ndash; $216,000</td>
                    <td className="px-6 py-4 text-yellow-400 font-medium">1.0%</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">Tier 2</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">$108,001 &ndash; $144,000</td>
                    <td className="px-6 py-4 text-gray-300 text-sm hidden sm:table-cell">$216,001 &ndash; $288,000</td>
                    <td className="px-6 py-4 text-orange-400 font-medium">1.25%</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">Tier 3</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">$144,001+</td>
                    <td className="px-6 py-4 text-gray-300 text-sm hidden sm:table-cell">$288,001+</td>
                    <td className="px-6 py-4 text-red-400 font-medium">1.5%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-5 mt-6">
              <p className="text-emerald-400 font-medium mb-2">PHI Is Almost Always Cheaper Than the MLS</p>
              <p className="text-gray-400 text-sm">
                Base hospital cover from a private health insurer typically costs <strong className="text-gray-200">$1,200 to $1,800 per year</strong>. Compare that to the MLS: at $120,000 income, Tier 1 MLS = $1,200/year, but at $150,000 income, Tier 3 MLS = $2,250/year. Not only is PHI often cheaper, you also get actual health coverage AND a government rebate that further reduces the premium. At almost every income level above $93,000, taking out PHI is the financially rational choice.
              </p>
            </div>

            {/* PHI Rebate Tiers */}
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 mt-4">
              <h4 className="text-white font-semibold mb-3">Private Health Insurance Rebate</h4>
              <p className="text-gray-400 text-sm mb-4">
                The government provides an income-tested rebate on private health insurance premiums. This further reduces the net cost of PHI, making it even more attractive compared to paying the MLS.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="rounded-lg bg-gray-900/50 p-3 border border-gray-700/30">
                  <p className="text-cyan-400 text-xs font-medium mb-1">Under $93,000</p>
                  <p className="text-white font-bold">24.608% rebate</p>
                </div>
                <div className="rounded-lg bg-gray-900/50 p-3 border border-gray-700/30">
                  <p className="text-cyan-400 text-xs font-medium mb-1">$93,001 &ndash; $108,000</p>
                  <p className="text-white font-bold">16.405% rebate</p>
                </div>
                <div className="rounded-lg bg-gray-900/50 p-3 border border-gray-700/30">
                  <p className="text-cyan-400 text-xs font-medium mb-1">$108,001 &ndash; $144,000</p>
                  <p className="text-white font-bold">8.202% rebate</p>
                </div>
                <div className="rounded-lg bg-gray-900/50 p-3 border border-gray-700/30">
                  <p className="text-cyan-400 text-xs font-medium mb-1">$144,001+</p>
                  <p className="text-white font-bold">0% rebate</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: How Medicare Levy Affects Freelancers */}
        <section id="freelancer-impact">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-sky-500 flex items-center justify-center text-white text-sm font-bold">4</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">How Medicare Levy Affects Freelancers</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              As a sole trader or freelancer, the Medicare levy hits differently than it does for employees. There is no employer absorbing part of the cost or handling PAYG withholding for you &mdash; you need to plan and budget for it yourself. Here are the four key areas every freelancer should understand.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              {/* Card 1: Sole Traders */}
              <div className="rounded-xl bg-gray-800/50 border border-cyan-500/20 p-5">
                <h4 className="text-cyan-400 font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                  Sole Traders
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  You pay the Medicare levy on your <strong className="text-gray-200">net business income</strong> &mdash; that is, your total revenue minus allowable deductions. No employer shares this cost with you. You must budget an additional 2% on top of your income tax for every dollar earned above the reduction thresholds. On $100K net income, that is $2,000 in Medicare levy alone.
                </p>
              </div>

              {/* Card 2: Income Smoothing */}
              <div className="rounded-xl bg-gray-800/50 border border-cyan-500/20 p-5">
                <h4 className="text-cyan-400 font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                  </svg>
                  Income Smoothing
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Freelance income fluctuates. In low-income years, you may qualify for the <strong className="text-gray-200">reduced levy or full exemption</strong> if you earn under $26,000. In high-income years, you could unexpectedly cross the $93,000 MLS threshold. Variable income makes it critical to track your year-to-date earnings and adjust your PHI strategy accordingly.
                </p>
              </div>

              {/* Card 3: PHI Decision */}
              <div className="rounded-xl bg-gray-800/50 border border-cyan-500/20 p-5">
                <h4 className="text-cyan-400 font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                  Private Health Insurance Decision
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  At <strong className="text-gray-200">$93K+ income</strong>, compare the cost of PHI versus the MLS. Base hospital cover runs $1,200-$1,800/yr. PHI rebates reduce this further: 24.608% (under $93K), 16.405% ($93K-$108K), 8.202% ($108K-$144K), 0% ($144K+). At most income levels, <strong className="text-gray-200">PHI is cheaper than paying the MLS</strong> &mdash; and you get actual health coverage.
                </p>
              </div>

              {/* Card 4: BAS & PAYG */}
              <div className="rounded-xl bg-gray-800/50 border border-cyan-500/20 p-5">
                <h4 className="text-cyan-400 font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                  BAS &amp; PAYG Instalments
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  The Medicare levy is <strong className="text-gray-200">not separately reported on your BAS</strong> &mdash; it is calculated at tax return time. However, you should include the 2% in your quarterly PAYG instalment estimates to avoid a cash flow shock. If the ATO sets your PAYG rate, they may already factor in the levy, but always verify this against your actual income.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Medicare Levy Worked Example */}
        <section id="worked-example">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-sky-500 flex items-center justify-center text-white text-sm font-bold">5</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Medicare Levy Worked Example</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Let&apos;s walk through a realistic example for a freelance web developer earning $120,000 in taxable income after deductions, comparing the outcome with and without private health insurance.
            </p>

            {/* Scenario Setup */}
            <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-900/10 to-sky-900/10 p-6 mt-6">
              <h4 className="text-white font-semibold mb-4">Scenario: $120,000 Taxable Income &mdash; Freelance Developer</h4>

              {/* Base Medicare Levy */}
              <div className="rounded-lg bg-gray-900/50 p-4 border border-gray-700/30 mb-4">
                <p className="text-cyan-400 font-medium mb-3">Step 1: Standard Medicare Levy</p>
                <div className="text-sm font-mono space-y-1 text-gray-400">
                  <p>Taxable income: <span className="text-white">$120,000</span></p>
                  <p>Medicare levy (2%): <span className="text-white">$120,000 &times; 2% = $2,400</span></p>
                </div>
              </div>

              {/* MLS Check */}
              <div className="rounded-lg bg-gray-900/50 p-4 border border-gray-700/30 mb-4">
                <p className="text-cyan-400 font-medium mb-3">Step 2: MLS Assessment</p>
                <div className="text-sm font-mono space-y-1 text-gray-400">
                  <p>Income for MLS purposes: <span className="text-white">$120,000</span></p>
                  <p>MLS threshold (singles): <span className="text-white">$93,000</span></p>
                  <p>Result: <span className="text-red-400 font-bold">Above threshold &mdash; MLS applies if no PHI</span></p>
                  <p>MLS tier: <span className="text-white">Tier 2 ($108,001 &ndash; $144,000) = 1.25%</span></p>
                  <p>MLS payable: <span className="text-white">$120,000 &times; 1.25% = $1,500</span></p>
                </div>
              </div>

              {/* Comparison */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="rounded-lg bg-red-500/5 border border-red-500/20 p-4">
                  <p className="text-sm text-red-400 font-medium mb-3">Without Private Health Insurance</p>
                  <div className="text-sm font-mono space-y-1 text-gray-400">
                    <p>Medicare levy: <span className="text-white">$2,400</span></p>
                    <p>MLS (Tier 2, 1.25%): <span className="text-white">$1,500</span></p>
                    <p className="pt-2 border-t border-red-500/20">
                      Total health levies: <span className="text-red-400 font-bold">$3,900</span>
                    </p>
                    <p>Health coverage: <span className="text-red-400">Public only</span></p>
                  </div>
                </div>
                <div className="rounded-lg bg-emerald-500/5 border border-emerald-500/20 p-4">
                  <p className="text-sm text-emerald-400 font-medium mb-3">With Private Health Insurance</p>
                  <div className="text-sm font-mono space-y-1 text-gray-400">
                    <p>Medicare levy: <span className="text-white">$2,400</span></p>
                    <p>MLS: <span className="text-emerald-400">$0 (waived)</span></p>
                    <p>PHI premium (base hospital): <span className="text-white">~$1,500/yr</span></p>
                    <p>PHI rebate (8.202%): <span className="text-emerald-400">&minus;$123</span></p>
                    <p>Net PHI cost: <span className="text-white">~$1,377</span></p>
                    <p className="pt-2 border-t border-emerald-500/20">
                      Total health costs: <span className="text-emerald-400 font-bold">$3,777</span>
                    </p>
                    <p>Health coverage: <span className="text-emerald-400">Public + Private</span></p>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-cyan-500/20">
                <p className="text-sm text-gray-400">
                  <strong className="text-white">Outcome:</strong> With PHI, you save <strong className="text-emerald-400">$123</strong> compared to paying the MLS, AND you get private hospital cover. The savings increase dramatically at higher incomes. At $150,000, the MLS would be $2,250 (Tier 3, 1.5%) versus ~$1,377 net PHI cost &mdash; a saving of <strong className="text-emerald-400">$873</strong> per year.
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-cyan-500/5 border border-cyan-500/20 p-5 mt-6">
              <p className="text-cyan-400 font-medium mb-2">Variable Income Tip</p>
              <p className="text-gray-400 text-sm">
                If your freelance income fluctuates around the $93,000 MLS threshold, consider taking out PHI early in the financial year. Even if you end up earning under the threshold, you still benefit from health coverage. If you wait to see if you&apos;ll cross the threshold, you may face the MLS for the months you were uncovered. The ATO assesses your <strong className="text-gray-200">annual income</strong>, not monthly &mdash; so a few big months can push you over.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: How InvoiceFlow Helps */}
        <section id="how-invoiceflow-helps">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-sky-500 flex items-center justify-center text-white text-sm font-bold">6</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">How InvoiceFlow Helps</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              InvoiceFlow is built specifically for Australian freelancers and sole traders. Here&apos;s how it helps you stay on top of your Medicare levy obligations throughout the year.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-cyan-500/20 p-5">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18v-.008zm-12 0h.008v.008H6v-.008z" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">Tax Estimation with ML Included</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Our tax estimator automatically includes the 2% Medicare levy in every calculation, so you always see the true tax picture &mdash; not just income tax.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-cyan-500/20 p-5">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">Income Tracking Against MLS Thresholds</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Track your year-to-date income in real time and see exactly when you are approaching the $93K MLS threshold, so you can make informed PHI decisions before it is too late.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-cyan-500/20 p-5">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">PAYG Instalment Calculations Include ML</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Our PAYG calculator factors in the Medicare levy when estimating your quarterly instalments, so you set aside the right amount every quarter and avoid surprises at tax time.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-cyan-500/20 p-5">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">EOFY Reporting for Accurate ML Calculation</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  At end of financial year, InvoiceFlow generates a comprehensive income summary that makes it easy to calculate your exact Medicare levy and confirm whether MLS applies, ready for your tax return.
                </p>
              </div>
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
              { href: '/glossary/income-tax', label: 'Income Tax' },
              { href: '/glossary/tax-return', label: 'Tax Return' },
              { href: '/glossary/tax-offset', label: 'Tax Offset' },
              { href: '/glossary/superannuation', label: 'Superannuation' },
              { href: '/glossary/payg', label: 'PAYG' },
              { href: '/glossary/tax-planning', label: 'Tax Planning' },
            ].map((term) => (
              <Link
                key={term.href}
                href={term.href}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gray-700/30 border border-gray-600/30 text-gray-300 text-sm hover:border-cyan-500/40 hover:text-cyan-400 transition-all"
              >
                <svg className="w-3.5 h-3.5 text-cyan-500/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
        <p className="text-gray-400 text-center mb-8">Free calculators to help you plan for Medicare levy and manage your tax obligations.</p>
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
        <p className="text-gray-400 text-center mb-8">In-depth guides on tax, levies, and financial planning for freelancers.</p>
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
        <div className="rounded-2xl bg-gradient-to-br from-cyan-500/10 to-sky-500/10 border border-cyan-500/20 p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Never Be Surprised by the Medicare Levy Again
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            InvoiceFlow helps Australian freelancers track income, estimate tax (including the 2% Medicare levy and MLS), and plan quarterly PAYG payments. Start for free &mdash; no accountant required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button>Start Free &mdash; No Card Required</Button>
            </Link>
            <Link href="/tools/tax-estimator">
              <Button variant="secondary">Try the Tax Estimator</Button>
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
