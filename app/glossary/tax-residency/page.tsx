import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Tax Residency Australia: 183-Day Rule, ATO Tests & Non-Resident Rates 2025-26 — InvoiceFlow',
  description:
    'What is tax residency in Australia? Learn the 4 ATO residency tests, the 183-day rule, resident vs non-resident tax rates, digital nomad tax obligations, and how changing your tax residency status affects your freelance income.',
  keywords: [
    'tax residency australia',
    '183 day rule australia',
    'australian tax resident test',
    'tax residency rules',
    'non resident tax rate australia',
    'digital nomad tax australia',
    'freelancer tax residency',
  ],
  alternates: { canonical: '/glossary/tax-residency' },
  openGraph: {
    title: 'Tax Residency Australia: 183-Day Rule, ATO Tests & Non-Resident Rates 2025-26 — InvoiceFlow',
    description:
      'Complete guide to tax residency in Australia for freelancers and contractors. Covers the 4 ATO residency tests, 183-day rule, resident vs non-resident tax rates, digital nomad obligations, and how InvoiceFlow helps you stay compliant.',
    url: 'https://invoiceflow-teal.vercel.app/glossary/tax-residency',
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
    { '@type': 'ListItem', position: 3, name: 'Tax Residency', item: `${BASE_URL}/glossary/tax-residency` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How does the ATO determine tax residency?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The ATO uses four tests to determine your tax residency status: the resides test (primary), the domicile test, the 183-day test, and the Commonwealth superannuation test. You only need to satisfy one of these tests to be considered an Australian tax resident. The primary resides test looks at where you have your permanent place of abode, your family and social ties, your economic ties, and the intention and purpose of your stay. Most Australians who live and work in Australia pass this test by default.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I be a tax resident of two countries at the same time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, it is possible to be a tax resident of two countries simultaneously. This is known as dual residency. When this occurs, Double Tax Agreements (DTAs) between the countries are used to determine which country has primary taxing rights over your income. Australia has DTAs with over 45 countries, including the US, UK, New Zealand, Singapore, Japan, and most major economies. The DTA tie-breaker rules typically consider factors like your permanent home, centre of vital interests, habitual abode, and nationality to resolve dual residency.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do digital nomads still pay Australian tax?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Usually yes, if they maintain economic ties to Australia. Simply working overseas temporarily does not automatically change your tax residency status. The ATO considers factors like whether you maintain an Australian bank account, keep a lease or mortgage, have family remaining in Australia, and hold an Australian driver\'s licence. These are all evidence of ongoing residency even if you are physically overseas. For extended overseas stays of one year or more, you may become a non-resident if you genuinely establish a permanent home abroad and cut your Australian ties, but professional advice is strongly recommended.',
      },
    },
    {
      '@type': 'Question',
      name: 'What tax rate do non-residents pay in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Non-residents for tax purposes pay 32.5% tax from the first dollar earned on Australian-sourced income — there is no tax-free threshold. The rates increase to 37% for income between $135,001 and $190,000, and 45% for income above $190,000. Non-residents do not pay the 2% Medicare levy (they are not eligible for Medicare), do not receive tax offsets like LITO or SAPTO, and do not receive the 50% capital gains tax discount. Working holiday makers have a special rate of 15% on the first $45,000 of income.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I change my tax residency status?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There is no formal requirement to notify the ATO when your tax residency status changes. The change is reflected in your tax return — you select whether you were a resident, non-resident, or part-year resident when lodging. However, changing status has significant tax consequences: becoming a non-resident triggers CGT event I1 (deemed disposal of certain assets at market value), you lose the tax-free threshold and Medicare levy, and only Australian-sourced income is taxed. Given the complexity, professional advice from a tax agent experienced in residency determinations is strongly recommended. You can also apply for an ATO private ruling for certainty.',
      },
    },
  ],
};

const tocItems = [
  { id: 'what-is-tax-residency', label: '1. What Is Tax Residency?' },
  { id: 'ato-residency-tests', label: '2. The 4 ATO Residency Tests' },
  { id: 'resident-vs-non-resident', label: '3. Resident vs Non-Resident Tax' },
  { id: 'digital-nomads', label: '4. Digital Nomads & Remote Freelancers' },
  { id: 'changing-status', label: '5. Changing Tax Residency Status' },
  { id: 'invoiceflow-integration', label: '6. How InvoiceFlow Helps' },
];

const relatedTools = [
  {
    href: '/tools/tax-estimator',
    name: 'Tax Estimator',
    description: 'Estimate your income tax, Medicare levy, and take-home pay as an Australian resident or non-resident.',
    icon: (
      <svg className="w-6 h-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18v-.008zm-12 0h.008v.008H6v-.008z" />
      </svg>
    ),
  },
  {
    href: '/tools/international-invoice-calculator',
    name: 'International Invoice Calculator',
    description: 'Calculate multi-currency invoices with live exchange rates for cross-border freelance work.',
    icon: (
      <svg className="w-6 h-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    href: '/tools/freelance-tax-estimator',
    name: 'Freelance Tax Estimator',
    description: 'Estimate your total tax obligations as a freelancer including income tax, Medicare, and PAYG instalments.',
    icon: (
      <svg className="w-6 h-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zM5.25 6.75h13.5" />
      </svg>
    ),
  },
  {
    href: '/tools/payg-calculator',
    name: 'PAYG Instalment Calculator',
    description: 'Calculate your quarterly PAYG instalment amounts and stay ahead of ATO deadlines.',
    icon: (
      <svg className="w-6 h-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
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
    href: '/guides/gst-for-freelancers',
    name: 'GST for Freelancers',
    description: 'When to register for GST, how to charge it, and how to lodge your BAS correctly.',
  },
  {
    href: '/guides/abn-guide',
    name: 'ABN Guide',
    description: 'How to apply for an ABN, when you need one, and what happens if you operate without one.',
  },
];

export default function TaxResidencyGlossaryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative px-4 pt-20 pb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-purple-500/10 to-violet-500/10 blur-3xl" />
        <div className="relative max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/glossary" className="hover:text-white transition-colors">Glossary</Link>
            <span>/</span>
            <span className="text-white">Tax Residency</span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            Glossary &mdash; Tax &amp; Compliance
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Tax Residency{' '}
            <span className="bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent">
              in Australia
            </span>
          </h1>

          {/* Summary */}
          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            Your tax residency status determines how Australia taxes your income. Australian tax residents pay tax on <em>worldwide</em> income. Non-residents only pay tax on Australian-sourced income. It&apos;s not about citizenship or visa type &mdash; it&apos;s about where your permanent home and economic ties are. Getting it wrong can result in double taxation or tax evasion penalties.
          </p>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>14 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>ATO-Accurate 2025-26</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
              </svg>
              <span>Updated March 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* In a Nutshell */}
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <div className="rounded-2xl bg-gradient-to-br from-violet-500/10 to-purple-500/10 border border-violet-500/20 p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-violet-500/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-white">In a Nutshell</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center text-violet-400 text-xs font-bold">4</span>
              <div>
                <p className="text-white font-medium text-sm">ATO Residency Tests</p>
                <p className="text-gray-400 text-sm">Four tests to determine your status &mdash; you only need to pass one to be an Australian tax resident</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center text-violet-400 text-xs font-bold">183</span>
              <div>
                <p className="text-white font-medium text-sm">Day Threshold</p>
                <p className="text-gray-400 text-sm">Present in Australia 183+ days creates a rebuttable presumption of tax residency</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center text-violet-400 text-xs font-bold">32.5%</span>
              <div>
                <p className="text-white font-medium text-sm">Non-Resident Rate</p>
                <p className="text-gray-400 text-sm">Non-residents pay 32.5% from dollar one &mdash; no tax-free threshold, no LITO</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center text-violet-400 text-xs font-bold">45+</span>
              <div>
                <p className="text-white font-medium text-sm">Double Tax Agreements</p>
                <p className="text-gray-400 text-sm">Australia has DTAs with 45+ countries to prevent double taxation on the same income</p>
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
                className="flex items-center gap-2 text-gray-400 hover:text-violet-400 transition-colors text-sm py-1"
              >
                <svg className="w-4 h-4 text-violet-500/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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

        {/* Section 1: What Is Tax Residency? */}
        <section id="what-is-tax-residency">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold">1</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">What Is Tax Residency?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Tax residency is the <strong className="text-white">foundation of how Australia taxes your income</strong>. Your residency status determines whether you are taxed on your worldwide income (from all sources, anywhere in the world) or only on income sourced from within Australia. It is one of the most important distinctions in the Australian tax system, and it affects everything from your tax rates to your eligibility for offsets and the capital gains discount.
            </p>
            <p className="text-gray-300 leading-relaxed">
              If you are an <strong className="text-white">Australian tax resident</strong>, the ATO taxes you on your worldwide income. This means income earned from Australian clients, overseas clients, foreign investments, rental properties abroad &mdash; all of it must be declared on your Australian tax return. In exchange, you receive the $18,200 tax-free threshold, access to the marginal tax rates starting at 0%, the Medicare levy system, and various tax offsets.
            </p>
            <p className="text-gray-300 leading-relaxed">
              If you are a <strong className="text-white">non-resident for tax purposes</strong>, the ATO only taxes you on Australian-sourced income. Income earned from overseas sources is not subject to Australian tax. However, you lose the tax-free threshold entirely &mdash; meaning you pay tax from dollar one &mdash; and you pay higher rates on lower income brackets.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Critically, tax residency is <strong className="text-white">not determined by your citizenship, visa type, or nationality</strong>. An Australian citizen living permanently overseas can be a non-resident for tax purposes. A foreign national living and working in Australia can be an Australian tax resident. The ATO uses four specific tests to make the determination, and it is based on the substance of your living arrangements, not your passport.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-violet-500/20 p-5">
                <h4 className="text-violet-400 font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Australian Tax Resident
                </h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>Taxed on worldwide income (all sources, globally)</li>
                  <li>$18,200 tax-free threshold</li>
                  <li>Marginal rates from 0% to 45%</li>
                  <li>2% Medicare levy applies</li>
                  <li>50% CGT discount after 12 months</li>
                  <li>LITO, SAPTO, and other offsets available</li>
                </ul>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-purple-500/20 p-5">
                <h4 className="text-purple-400 font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                  Non-Resident
                </h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>Only Australian-sourced income taxed</li>
                  <li>No tax-free threshold ($0)</li>
                  <li>32.5% from dollar one</li>
                  <li>No Medicare levy (no Medicare access)</li>
                  <li>No CGT discount (0%)</li>
                  <li>No LITO, SAPTO, or other offsets</li>
                </ul>
              </div>
            </div>

            <div className="rounded-xl bg-violet-500/5 border border-violet-500/20 p-5 mt-6">
              <p className="text-violet-400 font-medium mb-2">Getting It Wrong Has Consequences</p>
              <p className="text-gray-400 text-sm">
                Incorrectly claiming residency status can result in <strong className="text-gray-200">double taxation</strong> (paying tax in two countries on the same income without claiming DTA relief) or <strong className="text-gray-200">tax evasion penalties</strong> (failing to declare worldwide income as a resident). The ATO actively audits residency claims, particularly for people who travel frequently or work remotely for overseas clients.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: The 4 ATO Residency Tests */}
        <section id="ato-residency-tests">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold">2</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">The 4 ATO Residency Tests</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              The ATO uses four tests to determine whether you are an Australian resident for tax purposes. You only need to satisfy <strong className="text-white">one test</strong> to be considered a resident. The tests are applied in order &mdash; the primary test covers most Australians, while the secondary tests catch situations where the primary test is inconclusive.
            </p>

            {/* Test 1: Resides Test */}
            <div className="rounded-xl bg-gray-800/50 border border-violet-500/20 p-6 mt-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold text-violet-400 bg-violet-500/10 px-2.5 py-1 rounded-full">PRIMARY</span>
                <h3 className="text-lg font-semibold text-white">Test 1: The Resides Test</h3>
              </div>
              <div className="space-y-3 text-gray-400 text-sm leading-relaxed">
                <p>
                  The resides test is the <strong className="text-gray-200">primary and most commonly applied test</strong>. It asks a simple question: do you <em>reside</em> in Australia? The word &quot;resides&quot; takes its ordinary meaning &mdash; it means to dwell permanently or for a considerable time, to have one&apos;s settled or usual abode, to live in or at a particular place.
                </p>
                <h4 className="text-white font-medium mt-4 mb-2">Factors the ATO considers:</h4>
                <div className="grid sm:grid-cols-2 gap-4 mt-3">
                  <div className="rounded-lg bg-gray-900/50 p-4 border border-violet-500/20">
                    <p className="text-violet-400 font-medium mb-2">Permanent Place of Abode</p>
                    <p className="text-gray-400 text-sm">
                      Do you have a <strong className="text-gray-200">permanent home in Australia</strong>? This includes owned property, a long-term lease, or a settled home you return to regularly. It does not need to be a house you own &mdash; it can be a rented apartment.
                    </p>
                  </div>
                  <div className="rounded-lg bg-gray-900/50 p-4 border border-purple-500/20">
                    <p className="text-purple-400 font-medium mb-2">Family &amp; Social Ties</p>
                    <p className="text-gray-400 text-sm">
                      Where does your <strong className="text-gray-200">family live</strong>? Where are your social connections, community involvement, and personal relationships? A spouse and children in Australia is strong evidence of residency.
                    </p>
                  </div>
                  <div className="rounded-lg bg-gray-900/50 p-4 border border-violet-500/20">
                    <p className="text-violet-400 font-medium mb-2">Economic Ties</p>
                    <p className="text-gray-400 text-sm">
                      Where are your <strong className="text-gray-200">bank accounts, investments, business interests</strong>, and employment? Australian bank accounts, super funds, and business registrations all point to residency.
                    </p>
                  </div>
                  <div className="rounded-lg bg-gray-900/50 p-4 border border-purple-500/20">
                    <p className="text-purple-400 font-medium mb-2">Intention &amp; Purpose</p>
                    <p className="text-gray-400 text-sm">
                      What is the <strong className="text-gray-200">intention and purpose of your presence</strong> (or absence)? Are you overseas temporarily with plans to return, or have you genuinely relocated with no intention to come back?
                    </p>
                  </div>
                </div>
                <p className="mt-3">
                  <strong className="text-gray-200">Most Australians pass this test by default.</strong> If you live in Australia, have a home here, work here, and your family is here, you are an Australian tax resident. The test only becomes complex when you start splitting time between countries.
                </p>
              </div>
            </div>

            {/* Test 2: Domicile Test */}
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 mt-4">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold text-gray-400 bg-gray-700/50 px-2.5 py-1 rounded-full">SECONDARY</span>
                <h3 className="text-lg font-semibold text-white">Test 2: The Domicile Test</h3>
              </div>
              <div className="space-y-3 text-gray-400 text-sm leading-relaxed">
                <p>
                  Your domicile is your <strong className="text-gray-200">permanent home</strong> &mdash; the place you consider your real, fixed, permanent home. Under this test, if your domicile is in Australia, you are a resident unless you can demonstrate that your <strong className="text-gray-200">permanent place of abode is outside Australia</strong>.
                </p>
                <p>
                  Domicile is a legal concept inherited at birth (usually from your father) and only changes when you demonstrate <strong className="text-gray-200">clear intention plus action</strong> to establish a new domicile elsewhere. Simply moving overseas temporarily does not change your domicile. You must genuinely intend to make another country your permanent home and take concrete steps to do so.
                </p>
                <p>
                  This test catches Australians who may fail the resides test (because they are physically overseas) but whose domicile remains Australian because they have not established a permanent home elsewhere.
                </p>
              </div>
            </div>

            {/* Test 3: 183-Day Test */}
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 mt-4">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold text-gray-400 bg-gray-700/50 px-2.5 py-1 rounded-full">SECONDARY</span>
                <h3 className="text-lg font-semibold text-white">Test 3: The 183-Day Test</h3>
              </div>
              <div className="space-y-3 text-gray-400 text-sm leading-relaxed">
                <p>
                  If you are physically present in Australia for <strong className="text-gray-200">183 days or more</strong> during the income year (1 July to 30 June), you are presumed to be an Australian tax resident. However, this is a <strong className="text-gray-200">rebuttable presumption</strong> &mdash; you can argue against it if you can demonstrate:
                </p>
                <ul className="space-y-1.5 mt-2">
                  <li>&bull; Your <strong className="text-gray-200">usual place of abode is outside Australia</strong>, AND</li>
                  <li>&bull; You do <strong className="text-gray-200">not intend to take up residence</strong> in Australia</li>
                </ul>
                <p className="mt-3">
                  The 183 days do not need to be consecutive &mdash; they are cumulative across the entire income year. This test is particularly relevant for foreign nationals visiting Australia for extended periods, digital nomads using Australia as a base, and people with dual living arrangements.
                </p>
                <p>
                  <strong className="text-gray-200">Important:</strong> Being present for fewer than 183 days does not automatically make you a non-resident. You could still be a resident under the resides test or domicile test even if you are in Australia for fewer than 183 days.
                </p>
              </div>
            </div>

            {/* Test 4: Commonwealth Superannuation Test */}
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 mt-4">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold text-gray-400 bg-gray-700/50 px-2.5 py-1 rounded-full">SPECIAL</span>
                <h3 className="text-lg font-semibold text-white">Test 4: Commonwealth Superannuation Test</h3>
              </div>
              <div className="space-y-3 text-gray-400 text-sm leading-relaxed">
                <p>
                  This test applies to members of certain <strong className="text-gray-200">Commonwealth government superannuation schemes</strong> (such as the CSS or PSS) who are posted overseas. If you are a member of one of these schemes, you are deemed to be an Australian resident for tax purposes regardless of where you are living.
                </p>
                <p>
                  This test <strong className="text-gray-200">rarely applies to freelancers</strong>. It exists primarily to cover Commonwealth public servants and diplomats on overseas postings. If you are not a member of a Commonwealth superannuation scheme, you can disregard this test entirely.
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-violet-500/5 border border-violet-500/20 p-5 mt-6">
              <p className="text-violet-400 font-medium mb-2">One Test Is Enough</p>
              <p className="text-gray-400 text-sm">
                You only need to satisfy <strong className="text-gray-200">one of the four tests</strong> to be an Australian tax resident. The tests are applied in order &mdash; the resides test first, then the domicile test, then the 183-day test, then the Commonwealth superannuation test. If you pass the resides test, the remaining tests are not considered. This means most Australians never need to think about tests 2, 3, or 4.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Resident vs Non-Resident Tax */}
        <section id="resident-vs-non-resident">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold">3</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Tax Implications: Resident vs Non-Resident</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              The financial implications of your residency status are significant. Here is a detailed side-by-side comparison of how Australian tax residents and non-residents are treated across every major tax dimension for the 2025-26 financial year.
            </p>

            {/* Comparison Table */}
            <div className="rounded-2xl border border-gray-700/50 overflow-hidden mt-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-800/80">
                      <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Tax Feature</th>
                      <th className="text-left text-sm font-medium text-violet-400 px-6 py-4">Resident</th>
                      <th className="text-left text-sm font-medium text-purple-400 px-6 py-4">Non-Resident</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700/50">
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-4 text-white font-medium">Tax-free threshold</td>
                      <td className="px-6 py-4 text-violet-400 font-medium">$18,200</td>
                      <td className="px-6 py-4 text-red-400 font-medium">$0</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-4 text-white font-medium">Tax rates</td>
                      <td className="px-6 py-4 text-gray-300 text-sm">Marginal rates: 0%, 16%, 30%, 37%, 45%</td>
                      <td className="px-6 py-4 text-gray-300 text-sm">32.5% from $1, then 37%, 45%</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-4 text-white font-medium">Medicare levy</td>
                      <td className="px-6 py-4 text-violet-400 font-medium">2%</td>
                      <td className="px-6 py-4 text-gray-400 text-sm">0% (no Medicare access)</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-4 text-white font-medium">Capital gains discount</td>
                      <td className="px-6 py-4 text-violet-400 font-medium">50% after 12 months</td>
                      <td className="px-6 py-4 text-red-400 font-medium">0% (no discount)</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-4 text-white font-medium">Worldwide income</td>
                      <td className="px-6 py-4 text-gray-300 text-sm">Taxed on all global income</td>
                      <td className="px-6 py-4 text-gray-300 text-sm">Only Australian income taxed</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-4 text-white font-medium">Tax offsets (LITO, SAPTO)</td>
                      <td className="px-6 py-4 text-violet-400 font-medium">Available</td>
                      <td className="px-6 py-4 text-red-400 font-medium">Not available</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-4 text-white font-medium">Working holiday makers</td>
                      <td className="px-6 py-4 text-gray-300 text-sm" colSpan={2}>Special rate: 15% on first $45,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8 mb-3">Resident Tax Rates 2025-26</h3>
            <div className="rounded-2xl border border-gray-700/50 overflow-hidden mt-4">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-800/80">
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Taxable Income</th>
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Tax on This Income</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700/50">
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">$0 &ndash; $18,200</td>
                    <td className="px-6 py-4 text-violet-400 font-medium">Nil</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">$18,201 &ndash; $45,000</td>
                    <td className="px-6 py-4 text-violet-400 font-medium">16c for each $1 over $18,200</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">$45,001 &ndash; $135,000</td>
                    <td className="px-6 py-4 text-violet-400 font-medium">$4,288 plus 30c for each $1 over $45,000</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">$135,001 &ndash; $190,000</td>
                    <td className="px-6 py-4 text-violet-400 font-medium">$31,288 plus 37c for each $1 over $135,000</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">$190,001+</td>
                    <td className="px-6 py-4 text-violet-400 font-medium">$51,638 plus 45c for each $1 over $190,000</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8 mb-3">Non-Resident Tax Rates 2025-26</h3>
            <div className="rounded-2xl border border-gray-700/50 overflow-hidden mt-4">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-800/80">
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Taxable Income</th>
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Tax on This Income</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700/50">
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">$0 &ndash; $135,000</td>
                    <td className="px-6 py-4 text-purple-400 font-medium">32.5c for each $1</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">$135,001 &ndash; $190,000</td>
                    <td className="px-6 py-4 text-purple-400 font-medium">$43,875 plus 37c for each $1 over $135,000</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">$190,001+</td>
                    <td className="px-6 py-4 text-purple-400 font-medium">$64,225 plus 45c for each $1 over $190,000</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Worked Example */}
            <div className="rounded-2xl border border-violet-500/20 bg-gradient-to-br from-violet-900/10 to-purple-900/10 p-6 mt-8">
              <h4 className="text-white font-semibold mb-4">Worked Example: $100,000 Income &mdash; Resident vs Non-Resident</h4>
              <p className="text-gray-400 text-sm mb-4">
                Alex earns $100,000 from Australian freelance clients. Here is how the tax differs based on residency status:
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <p className="text-xs text-gray-500 mb-2 uppercase tracking-wide">As a Resident</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between text-gray-400">
                      <span>Income tax</span>
                      <span className="text-violet-400 font-medium">$20,788</span>
                    </div>
                    <div className="flex justify-between text-gray-400">
                      <span>Medicare levy (2%)</span>
                      <span className="text-violet-400 font-medium">$2,000</span>
                    </div>
                    <div className="flex justify-between text-gray-400 border-t border-gray-700/50 pt-2">
                      <span className="text-white font-medium">Total tax</span>
                      <span className="text-violet-400 font-bold">$22,788</span>
                    </div>
                    <div className="flex justify-between text-gray-400">
                      <span className="text-white font-medium">Take-home</span>
                      <span className="text-violet-400 font-bold">$77,212</span>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-2 uppercase tracking-wide">As a Non-Resident</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between text-gray-400">
                      <span>Income tax (32.5% flat)</span>
                      <span className="text-red-400 font-medium">$32,500</span>
                    </div>
                    <div className="flex justify-between text-gray-400">
                      <span>Medicare levy</span>
                      <span className="text-gray-500 font-medium">$0</span>
                    </div>
                    <div className="flex justify-between text-gray-400 border-t border-gray-700/50 pt-2">
                      <span className="text-white font-medium">Total tax</span>
                      <span className="text-red-400 font-bold">$32,500</span>
                    </div>
                    <div className="flex justify-between text-gray-400">
                      <span className="text-white font-medium">Take-home</span>
                      <span className="text-red-400 font-bold">$67,500</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-violet-500/20">
                <p className="text-sm text-gray-400">
                  <strong className="text-white">The impact:</strong> At $100,000 income, the non-resident pays <span className="text-red-400 font-medium">$9,712 more in tax</span> and takes home <span className="text-red-400 font-medium">$9,712 less</span> than the resident. The difference grows even larger at lower incomes because the resident benefits from the $18,200 tax-free threshold.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Digital Nomads & Remote Freelancers */}
        <section id="digital-nomads">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold">4</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Tax Residency for Digital Nomads &amp; Remote Freelancers</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              The rise of remote work and digital nomadism has made tax residency a <strong className="text-white">growing and increasingly complex issue</strong> for Australian freelancers. The ATO&apos;s residency tests were written before remote work existed, and applying them to modern work arrangements can produce surprising results. Here is what you need to know.
            </p>

            <h3 className="text-lg font-semibold text-white mt-6 mb-3">Working From Overseas Temporarily</h3>
            <p className="text-gray-300 leading-relaxed">
              If you are an Australian freelancer who travels overseas for a few weeks or months but <strong className="text-white">maintains your home, bank accounts, and economic ties in Australia</strong>, you are almost certainly still an Australian tax resident. Temporary travel does not change your residency status. The ATO looks at the substance of your arrangements, not just your physical location on any given day.
            </p>
            <p className="text-gray-300 leading-relaxed">
              This means that working from a Bali co-working space for three months, freelancing from a London flat for the European summer, or taking a working holiday in Thailand <strong className="text-white">does not make you a non-resident</strong>. Your worldwide income remains taxable in Australia for the duration.
            </p>

            <h3 className="text-lg font-semibold text-white mt-8 mb-3">Extended Overseas Stays (1+ Year)</h3>
            <p className="text-gray-300 leading-relaxed">
              For extended stays of one year or more, you <em>may</em> become a non-resident for tax purposes &mdash; but only if you <strong className="text-white">genuinely establish a permanent home abroad</strong> and cut your Australian ties. The ATO scrutinises these claims carefully. Simply being overseas for a long time is not enough if you maintain connections to Australia.
            </p>

            <h3 className="text-lg font-semibold text-white mt-8 mb-3">Dual Residency</h3>
            <p className="text-gray-300 leading-relaxed">
              It is possible to be a <strong className="text-white">tax resident of two countries simultaneously</strong>. This can happen when you satisfy the residency tests of both Australia and another country. When dual residency occurs, <strong className="text-white">Double Tax Agreements (DTAs)</strong> between the countries determine which country has primary taxing rights over different types of income.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Australia has DTAs with <strong className="text-white">over 45 countries</strong>, including the US, UK, New Zealand, Singapore, Japan, and most major economies. The DTA tie-breaker rules typically consider factors like your permanent home, centre of vital interests, habitual abode, and nationality to resolve which country has primary taxing rights.
            </p>

            <h3 className="text-lg font-semibold text-white mt-8 mb-3">Common Traps</h3>
            <p className="text-gray-300 leading-relaxed">
              Many digital nomads are caught out by the ATO because they assume that being physically overseas is enough to change their residency status. The following are all <strong className="text-white">evidence of ongoing Australian residency</strong>, even if you are physically outside the country:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-red-400 font-medium mb-3">Financial Ties</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>&bull; Maintaining an Australian bank account as your primary account</li>
                  <li>&bull; Keeping an Australian mortgage or investment property</li>
                  <li>&bull; Active <Link href="/glossary/superannuation" className="text-violet-400 hover:text-violet-300 underline decoration-violet-500/30">superannuation</Link> contributions with an Australian fund</li>
                  <li>&bull; Australian shares, managed funds, or other investments</li>
                </ul>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-red-400 font-medium mb-3">Personal Ties</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>&bull; Keeping a lease or rental property in Australia</li>
                  <li>&bull; Family (spouse, children) remaining in Australia</li>
                  <li>&bull; Holding an Australian driver&apos;s licence</li>
                  <li>&bull; Maintaining club memberships, subscriptions, or social ties</li>
                </ul>
              </div>
            </div>

            <div className="rounded-xl bg-violet-500/5 border border-violet-500/20 p-5 mt-6">
              <p className="text-violet-400 font-medium mb-2">ATO Individual Tax Residency Tool</p>
              <p className="text-gray-400 text-sm">
                The ATO provides a free <strong className="text-gray-200">Individual Tax Residency Tool</strong> on ato.gov.au that takes approximately 10 minutes to complete. It asks a series of questions about your living arrangements, ties, and circumstances, and gives you an indication of your likely residency status. While it is not a formal determination, it is a useful starting point. For certainty, you can apply for an <strong className="text-gray-200">ATO private ruling</strong> on your residency status.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Changing Tax Residency Status */}
        <section id="changing-status">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold">5</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Changing Tax Residency Status</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Changing your tax residency status &mdash; whether from resident to non-resident or vice versa &mdash; has <strong className="text-white">significant tax consequences</strong> that you need to understand and plan for. Here is what happens in each direction.
            </p>

            {/* Becoming Non-Resident */}
            <div className="rounded-xl bg-gray-800/50 border border-violet-500/20 p-6 mt-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold text-red-400 bg-red-500/10 px-2.5 py-1 rounded-full">DEPARTING</span>
                <h3 className="text-lg font-semibold text-white">Becoming a Non-Resident</h3>
              </div>
              <div className="space-y-3 text-gray-400 text-sm leading-relaxed">
                <p>
                  When you cease to be an Australian tax resident, several things happen:
                </p>
                <ul className="space-y-2 mt-2">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">&bull;</span>
                    <span><strong className="text-gray-200">CGT event I1</strong> &mdash; You are treated as having disposed of certain assets (shares, managed funds, crypto) at market value on the date you cease residency. This can trigger a <Link href="/glossary/capital-gains-tax" className="text-violet-400 hover:text-violet-300 underline decoration-violet-500/30">capital gains tax</Link> liability. You can elect to defer this by choosing to remain subject to Australian CGT on those assets.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">&bull;</span>
                    <span><strong className="text-gray-200">No more tax-free threshold</strong> &mdash; You lose the $18,200 threshold and pay 32.5% from dollar one on any Australian-sourced income.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">&bull;</span>
                    <span><strong className="text-gray-200">No Medicare levy</strong> &mdash; You no longer pay the 2% Medicare levy, but you also lose access to Medicare. You need private health insurance overseas.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">&bull;</span>
                    <span><strong className="text-gray-200">Update TFN declaration</strong> &mdash; If you have any Australian employers or payers, update your <Link href="/glossary/tfn" className="text-violet-400 hover:text-violet-300 underline decoration-violet-500/30">TFN</Link> declaration to reflect your non-resident status so withholding is calculated correctly.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">&bull;</span>
                    <span><strong className="text-gray-200">No capital gains discount</strong> &mdash; You lose the 50% CGT discount on assets held for more than 12 months.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Returning to Residency */}
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 mt-4">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold text-violet-400 bg-violet-500/10 px-2.5 py-1 rounded-full">RETURNING</span>
                <h3 className="text-lg font-semibold text-white">Returning to Residency</h3>
              </div>
              <div className="space-y-3 text-gray-400 text-sm leading-relaxed">
                <p>
                  When you become an Australian tax resident again:
                </p>
                <ul className="space-y-2 mt-2">
                  <li className="flex items-start gap-2">
                    <span className="text-violet-400 mt-1">&bull;</span>
                    <span><strong className="text-gray-200">Tax-free threshold restored</strong> &mdash; You can claim the $18,200 tax-free threshold again from the date you become a resident.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-violet-400 mt-1">&bull;</span>
                    <span><strong className="text-gray-200">Worldwide income taxed</strong> &mdash; All your global income is once again subject to Australian tax from the date of your return.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-violet-400 mt-1">&bull;</span>
                    <span><strong className="text-gray-200">Medicare levy applies</strong> &mdash; The 2% Medicare levy is charged again, and you regain access to Medicare.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-violet-400 mt-1">&bull;</span>
                    <span><strong className="text-gray-200">CGT discount restored</strong> &mdash; The 50% capital gains discount applies again to assets acquired after you become a resident.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Partial-Year Residency */}
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 mt-4">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold text-gray-400 bg-gray-700/50 px-2.5 py-1 rounded-full">SPLIT YEAR</span>
                <h3 className="text-lg font-semibold text-white">Partial-Year Residency</h3>
              </div>
              <div className="space-y-3 text-gray-400 text-sm leading-relaxed">
                <p>
                  If your residency status changes during the <Link href="/glossary/financial-year" className="text-violet-400 hover:text-violet-300 underline decoration-violet-500/30">financial year</Link>, you can <strong className="text-gray-200">split your income year</strong> into resident and non-resident periods. Different tax rates and rules apply to each period:
                </p>
                <ul className="space-y-1.5 mt-2">
                  <li>&bull; Income earned during the resident period is taxed at resident rates with a pro-rata tax-free threshold</li>
                  <li>&bull; Income earned during the non-resident period is taxed at non-resident rates with no threshold</li>
                  <li>&bull; You lodge a single tax return covering both periods and mark your residency change date</li>
                </ul>
              </div>
            </div>

            <div className="rounded-xl bg-red-500/5 border border-red-500/20 p-5 mt-6">
              <p className="text-red-400 font-medium mb-2">Professional Advice Recommended</p>
              <p className="text-gray-400 text-sm">
                Residency determinations are <strong className="text-gray-200">among the most complex areas of Australian tax law</strong>. There is no formal requirement to notify the ATO of a status change &mdash; it is reflected in your tax return. However, the consequences of getting it wrong are severe. If your circumstances are not straightforward, engage a <Link href="/glossary/tax-agent" className="text-violet-400 hover:text-violet-300 underline decoration-violet-500/30">registered tax agent</Link> experienced in residency matters, or apply for an <strong className="text-gray-200">ATO private ruling</strong> to get a binding determination.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: How InvoiceFlow Helps */}
        <section id="invoiceflow-integration">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold">6</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">How InvoiceFlow Helps</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Whether you are a resident or non-resident, InvoiceFlow is designed to help Australian freelancers <strong className="text-white">manage their invoicing and tax obligations</strong> across different jurisdictions and residency scenarios. Here is how InvoiceFlow supports you.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-violet-500/20 p-6">
                <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">Track Australian vs Foreign Income</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  InvoiceFlow lets you <strong className="text-gray-200">tag each invoice by client country</strong>, making it easy to separate Australian-sourced income from foreign income. This is critical for non-residents who only need to declare Australian income, and for residents who need to report worldwide income accurately.
                </p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-violet-500/20 p-6">
                <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">Multi-Currency Invoicing</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Invoice clients in their local currency with <strong className="text-gray-200">automatic exchange rate records</strong>. InvoiceFlow captures the exchange rate at the time of invoicing, making it easy to convert foreign income to AUD for your tax return. Essential for freelancers working with international clients.
                </p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-violet-500/20 p-6">
                <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">GST-Free Export Compliance</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  When invoicing overseas clients, your services may be <Link href="/glossary/gst" className="text-violet-400 hover:text-violet-300 underline decoration-violet-500/30">GST</Link>-free exports. InvoiceFlow correctly handles <strong className="text-gray-200">GST-free export invoices</strong>, ensuring you do not charge GST when you should not, and that your BAS reporting is accurate.
                </p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-violet-500/20 p-6">
                <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">EOFY Reporting by Country</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  At end of financial year, InvoiceFlow generates <strong className="text-gray-200">income reports broken down by source country</strong>. This makes it simple to complete your tax return, whether you need to declare worldwide income as a resident or identify Australian-sourced income as a non-resident.
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-violet-500/5 border border-violet-500/20 p-5 mt-6">
              <p className="text-violet-400 font-medium mb-2">Built for International Freelancers</p>
              <p className="text-gray-400 text-sm">
                Whether you are an Australian resident invoicing overseas clients, a non-resident with Australian income, or a digital nomad splitting time between countries, InvoiceFlow gives you the <strong className="text-gray-200">tools to track, separate, and report your income correctly</strong>. No more manual spreadsheets or guessing exchange rates at tax time.
              </p>
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
              { href: '/glossary/tfn', label: 'TFN' },
              { href: '/glossary/withholding-tax', label: 'Withholding Tax' },
              { href: '/glossary/abn', label: 'ABN' },
              { href: '/glossary/gst', label: 'GST' },
              { href: '/glossary/capital-gains-tax', label: 'Capital Gains Tax' },
            ].map((term) => (
              <Link
                key={term.href}
                href={term.href}
                className="px-4 py-2 rounded-lg bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-medium hover:bg-violet-500/20 transition-colors"
              >
                {term.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Related Tools */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-white mb-2 text-center">Related Tools</h2>
        <p className="text-gray-400 text-center mb-8">Free tools to help you manage your tax obligations as a resident or non-resident.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {relatedTools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:border-violet-500/50 hover:bg-gray-800/80 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-4">
                {tool.icon}
              </div>
              <h3 className="text-white font-medium mb-2 group-hover:text-violet-400 transition-colors">{tool.name}</h3>
              <p className="text-sm text-gray-400">{tool.description}</p>
              <div className="mt-4 text-violet-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
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
        <p className="text-gray-400 text-center mb-8">In-depth guides on tax, residency, and freelancing in Australia.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {relatedGuides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group p-6 rounded-2xl bg-gray-800/40 border border-gray-700/40 hover:border-violet-500/40 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h3 className="text-white font-medium mb-2 group-hover:text-violet-400 transition-colors">{guide.name}</h3>
              <p className="text-sm text-gray-400">{guide.description}</p>
              <div className="mt-4 text-violet-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
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
              <summary className="flex items-center justify-between cursor-pointer px-6 py-4 text-white font-medium hover:text-violet-400 transition-colors">
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
        <div className="rounded-2xl bg-gradient-to-br from-violet-500/10 to-purple-500/10 border border-violet-500/20 p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Manage Your Income Across Borders
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            InvoiceFlow helps you track Australian and foreign income separately, invoice in multiple currencies, and generate EOFY reports by country. Whether you are a resident or non-resident, stay compliant without the spreadsheet headaches.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button>Start Free &mdash; No Card Required</Button>
            </Link>
            <Link href="/tools">
              <Button variant="secondary">Explore Free Tools</Button>
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
