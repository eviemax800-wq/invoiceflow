import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Capital Gains Tax (CGT): The Complete Guide for Australian Freelancers — InvoiceFlow',
  description:
    'What is capital gains tax? Learn how CGT works for Australian freelancers, the 50% CGT discount, small business CGT concessions ($2M turnover threshold), CGT events on selling a freelance business, and record-keeping requirements. Includes worked examples and calculator links.',
  keywords: [
    'capital gains tax australia',
    'CGT small business concessions',
    'CGT freelancer australia',
    'selling freelance business capital gains',
    'capital gains tax rate 2025',
    'CGT discount 50 percent',
    'small business CGT exemptions',
    'capital gains on business assets',
    'CGT event australia',
    'capital gains tax calculator',
    'CGT rollover relief small business',
    'capital gains vs income tax',
  ],
  alternates: { canonical: '/glossary/capital-gains-tax' },
  openGraph: {
    title: 'Capital Gains Tax (CGT): The Complete Guide for Australian Freelancers — InvoiceFlow',
    description:
      'Everything Australian freelancers need to know about capital gains tax: CGT events, the 50% discount, small business concessions, selling a freelance business, record keeping, and how to minimise your CGT liability legally.',
    url: 'https://invoiceflow-teal.vercel.app/glossary/capital-gains-tax',
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
    { '@type': 'ListItem', position: 3, name: 'Capital Gains Tax', item: `${BASE_URL}/glossary/capital-gains-tax` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do freelancers pay capital gains tax in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Australian freelancers pay capital gains tax when they sell business assets, investments, cryptocurrency, shares, or property at a profit. CGT is not a separate tax — the capital gain is added to your assessable income for the financial year and taxed at your marginal tax rate. Common CGT events for freelancers include selling a business (including goodwill and client lists), disposing of investment property, selling shares or managed funds, and trading cryptocurrency. Personal use assets acquired for less than $10,000 are exempt.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the 50% CGT discount?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The 50% CGT discount allows individual taxpayers (including sole traders) to reduce a capital gain by 50% if the asset was held for at least 12 months before being sold. For example, if you sell an asset for a $100,000 gain after holding it for more than 12 months, only $50,000 is added to your assessable income. This discount applies to individuals and trusts but not to companies. The 12-month period is calculated from the date of acquisition to the date of the CGT event (typically the contract date, not settlement).',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the small business CGT concessions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There are four small business CGT concessions available to businesses with an aggregated turnover under $2 million or net CGT assets under $6 million. The 15-year exemption completely exempts a capital gain if the asset was held for 15 or more years. The 50% active asset reduction halves the remaining capital gain. The retirement exemption allows up to $500,000 in lifetime CGT-exempt proceeds directed to superannuation. The rollover allows you to defer a capital gain if you acquire a replacement asset. These concessions can be combined and, when used together, can reduce the CGT liability to zero.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is selling a freelance business a CGT event?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Selling a freelance business triggers a CGT event. The sale price is typically broken down into components including goodwill, client lists, intellectual property, equipment, and any other business assets. Each component may have a different cost base and CGT treatment. Goodwill is often the largest component and qualifies as an active asset for small business CGT concessions. If your aggregated turnover is under $2 million, you may be eligible for concessions that can significantly reduce or eliminate the CGT liability on the sale.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I pay CGT on home office equipment?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Generally, home office equipment like computers, desks, and monitors is covered by depreciation deductions rather than CGT. CGT only applies if you sell equipment for more than its written-down value (the original cost minus accumulated depreciation), which is rare for depreciating technology. For example, if you bought a laptop for $3,000, claimed $2,400 in depreciation (written-down value of $600), and then sold it for $800, the $200 difference would technically be a balancing adjustment rather than a capital gain. Most freelance equipment depreciates to near-zero value, so CGT on equipment is uncommon in practice.',
      },
    },
  ],
};

const tocItems = [
  { id: 'what-is-capital-gains-tax', label: '1. What Is Capital Gains Tax?' },
  { id: 'cgt-rates-and-discount', label: '2. CGT Rates and the 50% Discount' },
  { id: 'small-business-cgt-concessions', label: '3. Small Business CGT Concessions' },
  { id: 'cgt-for-freelancers', label: '4. CGT for Freelancers and Sole Traders' },
  { id: 'record-keeping-for-cgt', label: '5. Record Keeping for CGT' },
  { id: 'cgt-and-invoiceflow', label: '6. CGT and InvoiceFlow' },
];

const relatedTools = [
  {
    href: '/tools/rate-calculator',
    name: 'Rate Calculator',
    description: 'Calculate your ideal hourly rate factoring in tax obligations, super, and business costs.',
    icon: (
      <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
      </svg>
    ),
  },
  {
    href: '/tools/tax-estimator',
    name: 'Tax Estimator',
    description: 'Estimate your total tax bill including income tax, Medicare levy, and capital gains.',
    icon: (
      <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
  {
    href: '/tools/profit-margin-calculator',
    name: 'Profit Margin Calculator',
    description: 'Work out your true profit margin after factoring in CGT and other tax obligations.',
    icon: (
      <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    href: '/tools/gst-calculator',
    name: 'GST Calculator',
    description: 'Calculate GST on asset sales and understand how GST interacts with capital gains.',
    icon: (
      <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const relatedGuides = [
  {
    href: '/guides/tax-guide-freelancers',
    name: 'Tax Guide for Freelancers',
    description: 'Complete guide to Australian tax obligations including income tax, GST, CGT, and deductions.',
  },
  {
    href: '/guides/eofy-guide',
    name: 'EOFY Guide',
    description: 'End of financial year checklist: capital gains reporting, deductions, and lodgement deadlines.',
  },
  {
    href: '/guides/superannuation-for-freelancers',
    name: 'Superannuation for Freelancers',
    description: 'How super intersects with CGT retirement exemptions and building long-term wealth.',
  },
];

export default function CapitalGainsTaxGlossaryPage() {
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
            <span className="text-white">Capital Gains Tax</span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            Glossary &mdash; Tax &amp; Compliance
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Capital Gains Tax:{' '}
            <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
              The Complete Guide for Australian Freelancers
            </span>
          </h1>

          {/* Summary */}
          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            Capital gains tax applies when you sell assets at a profit &mdash; including your freelance business, investment property, shares, and cryptocurrency. This guide explains how CGT works in Australia, the powerful 50% discount, small business concessions that can reduce your CGT to zero, and what records the ATO expects you to keep.
          </p>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>14 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Worked Examples Included</span>
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
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 text-xs font-bold">50%</span>
              <div>
                <p className="text-white font-medium text-sm">CGT Discount</p>
                <p className="text-gray-400 text-sm">Assets held 12+ months by individuals get a 50% discount on the capital gain</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 text-xs font-bold">$2M</span>
              <div>
                <p className="text-white font-medium text-sm">Small Business Threshold</p>
                <p className="text-gray-400 text-sm">Aggregated turnover under $2M qualifies you for small business CGT concessions</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 text-xs font-bold">$6M</span>
              <div>
                <p className="text-white font-medium text-sm">Net CGT Assets Test</p>
                <p className="text-gray-400 text-sm">Alternative eligibility path &mdash; net CGT assets under $6M for small business concessions</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-orange-400 text-xs font-bold">$500K</span>
              <div>
                <p className="text-white font-medium text-sm">Retirement Exemption Cap</p>
                <p className="text-gray-400 text-sm">Lifetime limit for capital gains directed to super under the retirement exemption</p>
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

        {/* Section 1: What Is Capital Gains Tax? */}
        <section id="what-is-capital-gains-tax">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold">1</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">What Is Capital Gains Tax?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Capital gains tax (CGT) is a <strong className="text-white">tax on the profit you make when you sell or dispose of an asset</strong>. It is not actually a separate tax &mdash; the capital gain is added to your assessable income for the financial year and taxed at your marginal tax rate. CGT was introduced in Australia on <strong className="text-white">20 September 1985</strong>, meaning assets acquired before this date are generally exempt from CGT (known as &quot;pre-CGT assets&quot;).
            </p>
            <p className="text-gray-300 leading-relaxed">
              The key concept is the <strong className="text-white">CGT event</strong>. A CGT event happens when you dispose of an asset &mdash; most commonly by selling it, but also through gifting, losing, destroying, or having it compulsorily acquired. There are over 50 different types of CGT events defined in Australian tax law, but for freelancers, the most relevant ones involve selling an asset for more than you paid for it.
            </p>

            <h3 className="text-lg font-semibold text-white mt-8">When Does CGT Apply?</h3>
            <p className="text-gray-300 leading-relaxed">
              CGT applies to a wide range of assets that freelancers and sole traders commonly hold. Understanding which assets attract CGT is the first step to managing your tax liability:
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-amber-400 font-medium mb-2">Real Property</h4>
                <p className="text-gray-400 text-sm">Investment properties, commercial premises, and land. Your main residence is generally exempt, but a home office can create a partial CGT liability if you claim occupancy expenses.</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-amber-400 font-medium mb-2">Shares and Managed Funds</h4>
                <p className="text-gray-400 text-sm">Listed and unlisted shares, ETFs, managed funds, and units in trusts. Distributions from managed funds may also include capital gains passed through to you.</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-amber-400 font-medium mb-2">Business Assets and Goodwill</h4>
                <p className="text-gray-400 text-sm">Selling your freelance business triggers CGT on goodwill, client lists, intellectual property, and any other business assets sold for more than their cost base.</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-amber-400 font-medium mb-2">Cryptocurrency</h4>
                <p className="text-gray-400 text-sm">The ATO treats crypto as a CGT asset. Every disposal &mdash; selling, swapping, gifting, or using crypto to pay for goods &mdash; is a CGT event. This includes DeFi transactions and NFTs.</p>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">How Is a Capital Gain Calculated?</h3>
            <p className="text-gray-300 leading-relaxed">
              The basic calculation is straightforward: <strong className="text-white">Capital Gain = Capital Proceeds minus Cost Base</strong>. The capital proceeds are what you receive for the asset (typically the sale price). The cost base includes the original purchase price plus any costs of acquisition, improvement, and disposal. If the result is negative, you have a <strong className="text-white">capital loss</strong>, which can be offset against capital gains in the same or future financial years &mdash; but cannot be offset against ordinary income.
            </p>

            <div className="rounded-xl bg-amber-500/5 border border-amber-500/20 p-5 mt-6">
              <p className="text-amber-400 font-medium mb-2">CGT Is Not a Separate Tax</p>
              <p className="text-gray-400 text-sm">
                A common misconception is that CGT is a flat-rate tax like company tax. It is not. Your net capital gain is <strong className="text-gray-200">added to your other assessable income</strong> (freelance income, salary, interest, rental income) and taxed at your marginal rate. This means the tax you pay on a capital gain depends on how much other income you earned that year. A $50,000 capital gain costs a lot less tax if it is your only income than if you already earn $150,000 from freelancing.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: CGT Rates and the 50% Discount */}
        <section id="cgt-rates-and-discount">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold">2</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">CGT Rates and the 50% Discount</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              There is no special &quot;CGT rate&quot; in Australia. Your capital gain is taxed at your <strong className="text-white">marginal tax rate</strong>, which depends on your total taxable income for the financial year. However, the <strong className="text-white">50% CGT discount</strong> is an enormously powerful concession that effectively halves the tax you pay on long-term gains.
            </p>

            <h3 className="text-lg font-semibold text-white mt-6">The 50% CGT Discount</h3>
            <p className="text-gray-300 leading-relaxed">
              If you are an individual (including a sole trader) and you held the asset for <strong className="text-white">at least 12 months before selling</strong>, you can reduce the capital gain by 50% before adding it to your assessable income. This discount is available to individuals and trusts, but <strong className="text-white">not to companies</strong>. The 12-month clock starts from the date of acquisition (usually the contract date) and runs to the date of the CGT event (usually the date of the sale contract, not settlement).
            </p>

            <h3 className="text-lg font-semibold text-white mt-8">Worked Example: Individual with 50% Discount</h3>
            <div className="rounded-xl bg-gray-800/50 border border-amber-500/30 p-6 mt-3">
              <div className="space-y-3 text-sm text-gray-400">
                <div className="flex justify-between items-center p-3 rounded-lg bg-gray-900/50">
                  <span className="text-gray-300">Asset purchased for</span>
                  <span className="text-white font-medium">$50,000</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-gray-900/50">
                  <span className="text-gray-300">Asset sold for (after 18 months)</span>
                  <span className="text-white font-medium">$150,000</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-gray-900/50">
                  <span className="text-gray-300">Gross capital gain</span>
                  <span className="text-white font-medium">$100,000</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-amber-500/10 border border-amber-500/20">
                  <span className="text-amber-400 font-medium">50% CGT discount applied</span>
                  <span className="text-amber-400 font-bold">&minus;$50,000</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-gray-900/50">
                  <span className="text-gray-300">Net capital gain (added to income)</span>
                  <span className="text-white font-medium">$50,000</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-gray-900/50">
                  <span className="text-gray-300">Freelance income for the year</span>
                  <span className="text-white font-medium">$120,000</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-gray-900/50">
                  <span className="text-gray-300">Total taxable income ($120K + $50K)</span>
                  <span className="text-white font-medium">$170,000</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-amber-500/10 border border-amber-500/20">
                  <span className="text-amber-400 font-medium">Top marginal rate on the gain</span>
                  <span className="text-amber-400 font-bold">37&ndash;45%</span>
                </div>
              </div>
              <p className="text-gray-500 text-xs mt-4">
                Without the 50% discount, the full $100,000 gain would be added to the $120,000 income, resulting in $220,000 taxable income with a significantly larger portion taxed at the 45% rate.
              </p>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">Company vs Individual: No Discount for Companies</h3>
            <p className="text-gray-300 leading-relaxed">
              Companies do not receive the 50% CGT discount. If the same asset sale occurred within a company structure, the full $100,000 gain would be taxed at the <strong className="text-white">company tax rate of 25%</strong> (for base rate entities with aggregated turnover under $50 million). That means $25,000 in company tax on the full gain. For an individual with a marginal rate below 50%, the 50% discount typically produces a better outcome, but the comparison depends on your total income and tax position.
            </p>

            <h3 className="text-lg font-semibold text-white mt-8">2025&ndash;26 Marginal Tax Rates (Residents)</h3>
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 overflow-hidden mt-4">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-700/50">
                      <th className="text-left text-gray-400 font-medium py-3 px-4">Taxable Income</th>
                      <th className="text-left text-gray-400 font-medium py-3 px-4">Tax Rate</th>
                      <th className="text-left text-gray-400 font-medium py-3 px-4">Effective CGT Rate (with 50% discount)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700/30">
                    <tr>
                      <td className="py-3 px-4 text-white">$0 &ndash; $18,200</td>
                      <td className="py-3 px-4 text-gray-300">0%</td>
                      <td className="py-3 px-4"><span className="text-amber-400 text-xs font-medium bg-amber-500/10 px-2 py-0.5 rounded-full">0%</span></td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white">$18,201 &ndash; $45,000</td>
                      <td className="py-3 px-4 text-gray-300">16%</td>
                      <td className="py-3 px-4"><span className="text-amber-400 text-xs font-medium bg-amber-500/10 px-2 py-0.5 rounded-full">8%</span></td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white">$45,001 &ndash; $135,000</td>
                      <td className="py-3 px-4 text-gray-300">30%</td>
                      <td className="py-3 px-4"><span className="text-amber-400 text-xs font-medium bg-amber-500/10 px-2 py-0.5 rounded-full">15%</span></td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white">$135,001 &ndash; $190,000</td>
                      <td className="py-3 px-4 text-gray-300">37%</td>
                      <td className="py-3 px-4"><span className="text-orange-400 text-xs font-medium bg-orange-500/10 px-2 py-0.5 rounded-full">18.5%</span></td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white">$190,001+</td>
                      <td className="py-3 px-4 text-gray-300">45%</td>
                      <td className="py-3 px-4"><span className="text-orange-400 text-xs font-medium bg-orange-500/10 px-2 py-0.5 rounded-full">22.5%</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="px-4 py-3 bg-gray-900/40 border-t border-gray-700/30">
                <p className="text-xs text-gray-500">2025&ndash;26 financial year rates for Australian tax residents. Medicare levy of 2% applies on top. The effective CGT rate column shows the tax on capital gains after the 50% discount for assets held 12+ months.</p>
              </div>
            </div>

            <div className="rounded-xl bg-amber-500/5 border border-amber-500/20 p-5 mt-6">
              <p className="text-amber-400 font-medium mb-2">Timing Your Sale Matters</p>
              <p className="text-gray-400 text-sm">
                Because CGT is taxed at your marginal rate, <strong className="text-gray-200">the year you sell an asset matters enormously</strong>. If you had a low-income year (perhaps you took time off or lost a major client), a capital gain in that year attracts less tax than the same gain in a high-income year. Some freelancers deliberately time asset sales to coincide with lower-income periods. Just make sure you hold the asset for at least 12 months to lock in the 50% discount.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Small Business CGT Concessions */}
        <section id="small-business-cgt-concessions">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold">3</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Small Business CGT Concessions</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              The small business CGT concessions are among the <strong className="text-white">most powerful tax concessions available in Australia</strong>. When used correctly, they can reduce your capital gains tax to zero &mdash; even on the sale of a business worth hundreds of thousands of dollars. There are four concessions, and they can be combined for maximum benefit.
            </p>

            <h3 className="text-lg font-semibold text-white mt-6">Eligibility Requirements</h3>
            <p className="text-gray-300 leading-relaxed">
              To access the small business CGT concessions, you must satisfy two key tests. First, one of the <strong className="text-white">basic conditions</strong>: either your aggregated turnover is less than $2 million, or the net value of CGT assets owned by you, your connected entities, and affiliates is less than $6 million. Second, the asset must satisfy the <strong className="text-white">active asset test</strong> &mdash; meaning you used the asset in the course of carrying on a business for at least half the time you owned it (or at least 7.5 years if you owned it for more than 15 years).
            </p>

            <h3 className="text-lg font-semibold text-white mt-8">The Four Concessions</h3>
            <div className="space-y-4 mt-4">
              <div className="rounded-xl bg-gray-800/50 border border-amber-500/20 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 text-sm font-bold">1</span>
                  <h4 className="text-lg font-semibold text-white">15-Year Exemption</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  If you held the asset for at least <strong className="text-gray-200">15 continuous years</strong> and you are 55 or older (or permanently incapacitated), the <strong className="text-gray-200">entire capital gain is exempt</strong>. This is the most generous concession &mdash; the gain is completely disregarded for CGT purposes. If you are under 55, the exempt proceeds must be paid into a complying superannuation fund. This concession is applied first, and if it applies, no other concessions are needed.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-amber-500/20 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 text-sm font-bold">2</span>
                  <h4 className="text-lg font-semibold text-white">50% Active Asset Reduction</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  The remaining capital gain (after the general 50% CGT discount for individuals) is <strong className="text-gray-200">reduced by a further 50%</strong>. This means an individual who held the asset for 12+ months and qualifies for both discounts effectively pays tax on only <strong className="text-gray-200">25% of the original capital gain</strong>. This reduction is applied automatically if the asset passes the active asset test and you meet the basic conditions.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-amber-500/20 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 text-sm font-bold">3</span>
                  <h4 className="text-lg font-semibold text-white">Retirement Exemption</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  You can choose to exempt up to <strong className="text-gray-200">$500,000 in capital gains over your lifetime</strong> under the retirement exemption. If you are under 55, the exempt amount must be contributed to a complying superannuation fund. If you are 55 or older, you can choose what to do with the proceeds. The $500,000 limit is a lifetime cap &mdash; once you have used it across one or more asset sales, it is gone. This concession is often used in combination with the 50% active asset reduction.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-amber-500/20 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 text-sm font-bold">4</span>
                  <h4 className="text-lg font-semibold text-white">Rollover</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  The small business rollover allows you to <strong className="text-gray-200">defer a capital gain</strong> if you acquire a replacement active asset within two years (or incur expenditure on improving an existing asset). The gain is not exempted &mdash; it is deferred until a later CGT event occurs on the replacement asset. This is useful when you are restructuring your business or upgrading assets but do not want to trigger a large tax bill.
                </p>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">Worked Example: Combining Concessions</h3>
            <div className="rounded-xl bg-gray-800/50 border border-amber-500/30 p-6 mt-3">
              <p className="text-gray-300 text-sm mb-4">A freelancer sells their business (goodwill) for $400,000. They started it 5 years ago with no cost base for goodwill. Their annual turnover is $180,000.</p>
              <div className="space-y-3 text-sm text-gray-400">
                <div className="flex justify-between items-center p-3 rounded-lg bg-gray-900/50">
                  <span className="text-gray-300">Sale price (goodwill)</span>
                  <span className="text-white font-medium">$400,000</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-gray-900/50">
                  <span className="text-gray-300">Cost base</span>
                  <span className="text-white font-medium">$0</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-gray-900/50">
                  <span className="text-gray-300">Gross capital gain</span>
                  <span className="text-white font-medium">$400,000</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-amber-500/10 border border-amber-500/20">
                  <span className="text-amber-400 font-medium">50% CGT discount (held 12+ months)</span>
                  <span className="text-amber-400 font-bold">&minus;$200,000</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-gray-900/50">
                  <span className="text-gray-300">After general discount</span>
                  <span className="text-white font-medium">$200,000</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-amber-500/10 border border-amber-500/20">
                  <span className="text-amber-400 font-medium">50% active asset reduction</span>
                  <span className="text-amber-400 font-bold">&minus;$100,000</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-gray-900/50">
                  <span className="text-gray-300">After active asset reduction</span>
                  <span className="text-white font-medium">$100,000</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-amber-500/10 border border-amber-500/20">
                  <span className="text-amber-400 font-medium">Retirement exemption (under $500K lifetime cap)</span>
                  <span className="text-amber-400 font-bold">&minus;$100,000</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-orange-500/10 border border-orange-500/30">
                  <span className="text-orange-400 font-medium">Net capital gain (taxable)</span>
                  <span className="text-orange-400 font-bold text-lg">$0</span>
                </div>
              </div>
              <p className="text-gray-500 text-xs mt-4">
                By combining the 50% CGT discount, 50% active asset reduction, and retirement exemption, this freelancer pays zero CGT on a $400,000 business sale. The $100,000 retirement exemption amount would need to be contributed to super if the freelancer is under 55.
              </p>
            </div>

            <div className="rounded-xl bg-amber-500/5 border border-amber-500/20 p-5 mt-6">
              <p className="text-amber-400 font-medium mb-2">Get Professional Advice</p>
              <p className="text-gray-400 text-sm">
                The small business CGT concessions are complex, and the stakes are high. A mistake in eligibility or application can cost tens or hundreds of thousands of dollars. <strong className="text-gray-200">Always engage a tax professional experienced in small business CGT concessions</strong> before selling a business or significant asset. The cost of advice is trivial compared to the potential savings &mdash; or the cost of getting it wrong.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: CGT for Freelancers and Sole Traders */}
        <section id="cgt-for-freelancers">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold">4</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">CGT for Freelancers and Sole Traders</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              As a freelancer or sole trader, you are more exposed to CGT than you might think. Beyond the obvious scenario of selling your business, there are several common situations where CGT applies &mdash; and a few important exemptions to be aware of.
            </p>

            <h3 className="text-lg font-semibold text-white mt-6">Common CGT Events for Freelancers</h3>
            <div className="space-y-3 mt-4">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016A3.001 3.001 0 0021 9.349m-18 0a2.999 2.999 0 002.25-1.016 2.999 2.999 0 002.25 1.016m0 0a3.001 3.001 0 002.25 1.016A3.001 3.001 0 0012 10.365m0 0A3.001 3.001 0 0114.25 9.35m-2.25 1.016V3.75m0 0h6.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H2.625A1.125 1.125 0 011.5 7.125v-2.25c0-.621.504-1.125 1.125-1.125H12z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium text-sm">Selling Your Business or Goodwill</p>
                  <p className="text-gray-400 text-sm">When you sell your freelance business, the sale is typically broken down into components: goodwill, client list, intellectual property, brand value, and tangible assets. Each component is a separate CGT asset with its own cost base. Goodwill often has a nil cost base (you built it organically), meaning the entire sale price is a capital gain. This is where small business concessions become critical.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium text-sm">Selling Business Equipment Above Written-Down Value</p>
                  <p className="text-gray-400 text-sm">If you sell a business asset (computer, camera, equipment) for more than its written-down value in your depreciation schedule, the excess is a balancing adjustment and may create an assessable amount. While true capital gains on depreciating equipment are rare (technology loses value quickly), it can happen with certain specialist equipment that holds its value.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium text-sm">Selling Investment Property</p>
                  <p className="text-gray-400 text-sm">Many freelancers invest in property to build long-term wealth. Selling an investment property triggers CGT on the difference between the sale price and the cost base (purchase price plus stamp duty, legal fees, improvements, and other capital costs). The 50% discount applies if held for 12+ months. Unlike your main residence, investment properties have no CGT exemption.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium text-sm">Cryptocurrency Trading</p>
                  <p className="text-gray-400 text-sm">The ATO treats cryptocurrency as a CGT asset, not as currency. Every time you sell crypto, swap one token for another, use crypto to pay for goods or services, or gift crypto, it triggers a CGT event. If you accept crypto as payment for freelance work, the ATO considers this ordinary income at the market value when received &mdash; and any subsequent disposal triggers a separate CGT event.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium text-sm">Share and ETF Investments</p>
                  <p className="text-gray-400 text-sm">Selling shares, ETFs, or managed fund units at a profit triggers CGT. Managed funds can also distribute capital gains to you even if you did not sell your units &mdash; these pass-through gains appear on your annual tax statement from the fund. Dividend reinvestment plans (DRPs) add to your cost base, so keep records of every reinvested amount.</p>
                </div>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">Important Exemptions</h3>
            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              <div className="rounded-xl bg-gray-800/50 border border-amber-500/20 p-5">
                <h4 className="text-amber-400 font-medium mb-2">Personal Use Assets Under $10,000</h4>
                <p className="text-gray-400 text-sm">A personal use asset acquired for less than $10,000 is exempt from CGT. Personal use assets are things used mainly for personal enjoyment &mdash; like furniture, appliances, or sporting equipment. However, you cannot claim a capital loss on personal use assets.</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-amber-500/20 p-5">
                <h4 className="text-amber-400 font-medium mb-2">Main Residence Exemption</h4>
                <p className="text-gray-400 text-sm">Your home is generally CGT-free. However, if you use part of your home exclusively as a home office and you claim occupancy expenses (rent, mortgage interest, rates), you may lose a proportional part of this exemption. Claiming running expenses only (electricity, depreciation) does not affect the exemption.</p>
              </div>
            </div>

            <div className="rounded-xl bg-amber-500/5 border border-amber-500/20 p-5 mt-6">
              <p className="text-amber-400 font-medium mb-2">Home Office Warning</p>
              <p className="text-gray-400 text-sm">
                If you claim <strong className="text-gray-200">occupancy expenses</strong> for your home office (a proportion of rent, mortgage interest, council rates, or home insurance), the ATO considers that portion of your home to be used for income-producing purposes. When you eventually sell, CGT will apply to that proportion of any capital gain. If you only claim <strong className="text-gray-200">running expenses</strong> (electricity, internet, depreciation of furniture), the main residence exemption remains intact. For most freelancers, the tax savings from running expenses alone outweigh the risk of triggering a partial CGT liability on your home.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Record Keeping for CGT */}
        <section id="record-keeping-for-cgt">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold">5</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Record Keeping for CGT</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              CGT record keeping is the area where most freelancers fall short &mdash; and where the ATO is increasingly focused during audits. The ATO requires you to keep records from the date you <strong className="text-white">acquire an asset until at least 5 years after you dispose of it</strong>. For assets you hold for decades (like property or a long-running business), that means maintaining records for the entire period of ownership plus five years.
            </p>

            <h3 className="text-lg font-semibold text-white mt-6">What Records to Keep</h3>
            <div className="space-y-3 mt-4">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium text-sm">Purchase and Acquisition Records</p>
                  <p className="text-gray-400 text-sm">Contracts of sale, purchase receipts, transfer documents, settlement statements, broker confirmations for shares, and exchange records for cryptocurrency. These establish your cost base &mdash; without them, the ATO may deem your cost base as zero, dramatically increasing your CGT liability.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1m0 0L12 4.37m-5.68 5.7h11.8M4.37 12l5.7 5.68m0 0L15.78 12m-5.71 5.68V5.81" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium text-sm">Improvement and Capital Expenditure Receipts</p>
                  <p className="text-gray-400 text-sm">Any capital improvements to an asset increase your cost base and reduce your eventual capital gain. For property, this includes renovations, extensions, and structural improvements. For a business, this includes capital invested in building systems, software, or processes that form part of the business value. Keep every receipt.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium text-sm">Sale and Disposal Records</p>
                  <p className="text-gray-400 text-sm">Contracts of sale, settlement statements, agent commission invoices, legal fee invoices, advertising costs, and any other disposal costs. These are deducted from the capital proceeds when calculating your gain. For shares, keep broker confirmations and trade summaries. For crypto, export complete transaction histories from exchanges.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium text-sm">Incidental Costs and Ownership Records</p>
                  <p className="text-gray-400 text-sm">Stamp duty, legal fees on acquisition and disposal, valuation fees, surveyor costs, and title search fees. These form part of the cost base. For property, also keep records of council rates, insurance, and body corporate fees if you are claiming them. For shares, keep brokerage confirmations that show the fees charged per trade.</p>
                </div>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">The Five Elements of Cost Base</h3>
            <p className="text-gray-300 leading-relaxed">
              The ATO defines five elements that make up an asset&apos;s cost base. Understanding these is crucial because a higher cost base means a lower capital gain and less tax:
            </p>
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 overflow-hidden mt-4">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-700/50">
                      <th className="text-left text-gray-400 font-medium py-3 px-4">Element</th>
                      <th className="text-left text-gray-400 font-medium py-3 px-4">Description</th>
                      <th className="text-left text-gray-400 font-medium py-3 px-4">Examples</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700/30">
                    <tr>
                      <td className="py-3 px-4 text-white">1. Money paid</td>
                      <td className="py-3 px-4 text-gray-300">The purchase price of the asset</td>
                      <td className="py-3 px-4"><span className="text-amber-400 text-xs font-medium bg-amber-500/10 px-2 py-0.5 rounded-full">Purchase price, deposit</span></td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white">2. Incidental costs</td>
                      <td className="py-3 px-4 text-gray-300">Costs of acquiring or disposing of the asset</td>
                      <td className="py-3 px-4"><span className="text-amber-400 text-xs font-medium bg-amber-500/10 px-2 py-0.5 rounded-full">Stamp duty, legal fees, brokerage</span></td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white">3. Ownership costs</td>
                      <td className="py-3 px-4 text-gray-300">Non-deductible costs of owning the asset</td>
                      <td className="py-3 px-4"><span className="text-amber-400 text-xs font-medium bg-amber-500/10 px-2 py-0.5 rounded-full">Interest (if not claimed), insurance</span></td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white">4. Capital improvements</td>
                      <td className="py-3 px-4 text-gray-300">Non-deductible expenditure that adds value</td>
                      <td className="py-3 px-4"><span className="text-orange-400 text-xs font-medium bg-orange-500/10 px-2 py-0.5 rounded-full">Renovations, extensions, upgrades</span></td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white">5. Title preservation</td>
                      <td className="py-3 px-4 text-gray-300">Costs to preserve or defend your title</td>
                      <td className="py-3 px-4"><span className="text-orange-400 text-xs font-medium bg-orange-500/10 px-2 py-0.5 rounded-full">Legal costs defending ownership</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="px-4 py-3 bg-gray-900/40 border-t border-gray-700/30">
                <p className="text-xs text-gray-500">Only costs that have not been claimed as tax deductions elsewhere can be included in the cost base. You cannot double-dip by claiming a deduction and including the same cost in your cost base.</p>
              </div>
            </div>

            <div className="rounded-xl bg-amber-500/5 border border-amber-500/20 p-5 mt-6">
              <p className="text-amber-400 font-medium mb-2">Keep EVERYTHING</p>
              <p className="text-gray-400 text-sm">
                The single most common CGT mistake is <strong className="text-gray-200">failing to keep adequate records</strong>. If you cannot prove your cost base, the ATO may assess it as zero &mdash; meaning your entire sale price becomes a taxable capital gain. Digital records are perfectly acceptable. Store purchase contracts, receipts, bank statements, and correspondence in cloud storage with regular backups. Set up a dedicated &quot;CGT Records&quot; folder for each major asset you own. The 10 minutes of filing now can save you thousands at tax time.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: CGT and InvoiceFlow */}
        <section id="cgt-and-invoiceflow">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold">6</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">CGT and InvoiceFlow</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              While InvoiceFlow is primarily an invoicing and business management tool, it plays a key role in <strong className="text-white">building the financial records you need for CGT purposes</strong>. Good CGT outcomes start with good record keeping &mdash; and that starts the day you acquire an asset, not the day you sell it.
            </p>

            <div className="space-y-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Track Business Asset Purchases</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Every business asset you buy &mdash; equipment, software licences, office furniture &mdash; is recorded in InvoiceFlow with the <strong className="text-gray-200">purchase date, cost, and supplier details</strong>. This creates a reliable cost base record from day one. When you eventually sell or dispose of these assets, you have the acquisition records ready for your CGT calculation. No hunting through old emails or bank statements years later.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21l3.75-3.75" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Depreciation Tracking</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  InvoiceFlow tracks the <strong className="text-gray-200">depreciation schedule for each business asset</strong>, giving you an accurate written-down value at any point in time. This is essential for CGT calculations on depreciating assets &mdash; you need to know the exact written-down value to determine whether a sale triggers a balancing adjustment or capital gain. Automated depreciation tracking means one less thing to manage manually.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Capital Improvement Records</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  When you invest in improving a business asset &mdash; upgrading equipment, renovating your office, or adding features to software you own &mdash; InvoiceFlow <strong className="text-gray-200">captures these capital expenditures separately from operating expenses</strong>. Capital improvements add to your cost base and reduce your eventual capital gain. Having them clearly recorded and categorised saves significant time and money at tax time.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Tax-Time Reports</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  At EOFY, InvoiceFlow generates <strong className="text-gray-200">comprehensive reports that your accountant can use</strong> for CGT calculations. Asset registers, depreciation schedules, expense summaries, and revenue breakdowns are all exportable. Instead of dumping a shoebox of receipts on your accountant&apos;s desk, you hand over organised, categorised data &mdash; which means lower accounting fees and fewer errors in your tax return.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Audit-Ready Records</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  The ATO is increasingly using data matching to identify unreported capital gains &mdash; particularly for property, shares, and cryptocurrency. InvoiceFlow keeps your business records <strong className="text-gray-200">organised, timestamped, and backed up in the cloud</strong> so you are always audit-ready. If the ATO asks questions, you can produce complete records within hours, not weeks. Good records are your best defence in an audit.
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-amber-500/5 border border-amber-500/20 p-5 mt-6">
              <p className="text-amber-400 font-medium mb-2">Start Tracking Before You Need To</p>
              <p className="text-gray-400 text-sm">
                The biggest CGT record-keeping mistake is starting too late. <strong className="text-gray-200">Set up your asset tracking in InvoiceFlow now</strong>, even if you do not plan to sell anything soon. Every asset purchase, improvement, and business expense recorded today is one less headache when you eventually trigger a CGT event. The freelancers who pay the least CGT are not the ones with the best accountants &mdash; they are the ones with the best records.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Related Tools */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-white mb-2 text-center">Related Tools</h2>
        <p className="text-gray-400 text-center mb-8">Free tools to help you estimate tax, calculate margins, and manage CGT.</p>
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
        <p className="text-gray-400 text-center mb-8">In-depth guides on tax, EOFY, and superannuation for freelancers.</p>
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
            Stay on Top of CGT. Keep Records That Save You Thousands.
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            InvoiceFlow helps Australian freelancers track business assets, depreciation, and capital expenditure from day one &mdash; so when a CGT event hits, you have the records to minimise your tax and maximise your concessions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button>Start Free &mdash; No Card Required</Button>
            </Link>
            <Link href="/tools/tax-estimator">
              <Button variant="secondary">Estimate Your Tax</Button>
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
