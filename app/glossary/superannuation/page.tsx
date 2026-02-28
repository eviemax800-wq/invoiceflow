import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Superannuation: Complete Guide for Australian Freelancers & Sole Traders — InvoiceFlow',
  description:
    'What is superannuation in Australia? Learn the 11.5% super guarantee rate, contribution caps ($30K concessional, $120K non-concessional), tax benefits for self-employed, and how freelancers can pay themselves super. Updated for 2025-26.',
  keywords: [
    'what is superannuation australia',
    'super for freelancers',
    'superannuation self employed',
    'super contribution caps 2025',
    'super tax deduction sole trader',
    'do freelancers need to pay super',
    'superannuation guarantee rate',
    'concessional contributions cap',
    'non-concessional contributions cap',
    'self employed super tax deduction',
    'super co-contribution',
    'carry forward super contributions',
  ],
  alternates: { canonical: '/glossary/superannuation' },
  openGraph: {
    title: 'Superannuation: Complete Guide for Australian Freelancers & Sole Traders — InvoiceFlow',
    description:
      'Everything self-employed Australians need to know about super: 11.5% guarantee rate, $30K concessional cap, tax deductions, co-contributions, and how to pay yourself super as a freelancer.',
    url: 'https://invoiceflow-teal.vercel.app/glossary/superannuation',
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
    { '@type': 'ListItem', position: 3, name: 'Superannuation', item: `${BASE_URL}/glossary/superannuation` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do freelancers need to pay superannuation in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Freelancers and sole traders are not legally required to pay themselves superannuation. However, it is highly recommended because you miss out on compounding retirement savings and tax benefits if you don\'t. Self-employed people can make voluntary contributions and claim a full tax deduction for concessional contributions up to $30,000 per year. You must lodge a "Notice of intent to claim a tax deduction" form with your super fund before lodging your tax return.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the super guarantee rate for 2025-26?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The super guarantee (SG) rate is 11.5% for the 2024-25 financial year. It is legislated to increase to 12% from 1 July 2025 (the 2025-26 financial year), where it will remain. This rate applies to ordinary time earnings for employees. Self-employed people are not subject to the SG rate but can voluntarily contribute any amount up to the contribution caps.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the super contribution caps for 2025-26?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For the 2024-25 financial year, the concessional (before-tax) contributions cap is $30,000 per year and the non-concessional (after-tax) contributions cap is $120,000 per year. Concessional contributions include employer SG payments, salary sacrifice, and personal deductible contributions. If you haven\'t used your full concessional cap in previous years and your total super balance is under $500,000, you can carry forward unused amounts from up to five prior financial years.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I claim a tax deduction for super contributions as a sole trader?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'To claim a tax deduction for personal super contributions, you must: 1) Make the contribution to a complying super fund before 30 June. 2) Lodge a "Notice of intent to claim or vary a deduction for personal super contributions" form (NAT 71121) with your super fund. 3) Receive written acknowledgement from your fund before lodging your tax return. 4) Claim the deduction in your individual tax return. The contribution is then taxed at 15% inside your super fund instead of your marginal tax rate.',
      },
    },
    {
      '@type': 'Question',
      name: 'When do clients need to pay super for contractors?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Under the Superannuation Guarantee Act, a business must pay super for a contractor if the contract is "wholly or principally for the labour of the person." This typically applies when the contractor is paid for their time (hourly or daily rate) rather than for a specific result, works on-site, uses the client\'s tools and equipment, and cannot delegate or subcontract the work. If you are a freelancer who provides a defined deliverable and uses your own tools, your clients generally do not need to pay your super.',
      },
    },
  ],
};

const tocItems = [
  { id: 'what-is-super', label: '1. What Is Superannuation?' },
  { id: 'super-for-freelancers', label: '2. Super for Freelancers & Sole Traders' },
  { id: 'contribution-types-caps', label: '3. Contribution Types & Caps' },
  { id: 'tax-benefits', label: '4. Tax Benefits' },
  { id: 'how-to-pay-yourself-super', label: '5. How to Pay Yourself Super' },
  { id: 'super-on-contractor-payments', label: '6. Super on Contractor Payments' },
];

const relatedTools = [
  {
    href: '/tools/super-calculator',
    name: 'Super Calculator',
    description: 'Calculate your super contributions, tax savings, and projected retirement balance.',
    icon: (
      <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
      </svg>
    ),
  },
  {
    href: '/tools/tax-estimator',
    name: 'Tax Estimator',
    description: 'Estimate your income tax liability including super deductions and offsets.',
    icon: (
      <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18v-.008zm-12 0h.008v.008H6v-.008z" />
      </svg>
    ),
  },
  {
    href: '/tools/rate-calculator',
    name: 'Rate Calculator',
    description: 'Calculate your ideal hourly or daily rate factoring in super contributions.',
    icon: (
      <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    href: '/tools/freelance-retirement-calculator',
    name: 'Retirement Calculator',
    description: 'Project your retirement balance based on your current super contributions and timeline.',
    icon: (
      <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
];

const relatedGuides = [
  {
    href: '/guides/superannuation-for-freelancers',
    name: 'Superannuation for Freelancers',
    description: 'The definitive guide to managing your own super as a self-employed Australian.',
  },
  {
    href: '/guides/tax-guide-freelancers',
    name: 'Tax Guide for Freelancers',
    description: 'Income tax, deductions, PAYG, and everything else you need to know as a sole trader.',
  },
  {
    href: '/guides/eofy-guide',
    name: 'EOFY Guide',
    description: 'End of financial year checklist, deadlines, and last-minute super and tax tips.',
  },
];

export default function SuperannuationGlossaryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative px-4 pt-20 pb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-yellow-500/10 blur-3xl" />
        <div className="relative max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/glossary" className="hover:text-white transition-colors">Glossary</Link>
            <span>/</span>
            <span className="text-white">Superannuation</span>
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
            Superannuation{' '}
            <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
              for Freelancers
            </span>
          </h1>

          {/* Summary */}
          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            Australia&apos;s mandatory retirement savings system, holding over $3.5 trillion in assets. As a freelancer or sole trader, super isn&apos;t compulsory for you &mdash; but the tax benefits and long-term wealth it creates make it one of the smartest financial moves you can make.
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
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 text-xs font-bold">11.5%</span>
              <div>
                <p className="text-white font-medium text-sm">Super Guarantee Rate</p>
                <p className="text-gray-400 text-sm">Current SG rate for employees, rising to 12% from 1 July 2025</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 text-xs font-bold">$30K</span>
              <div>
                <p className="text-white font-medium text-sm">Concessional Cap</p>
                <p className="text-gray-400 text-sm">Max before-tax contributions per year, taxed at just 15%</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 text-xs font-bold">15%</span>
              <div>
                <p className="text-white font-medium text-sm">Super Tax Rate</p>
                <p className="text-gray-400 text-sm">Contributions taxed at 15% instead of your marginal rate (up to 47%)</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 text-xs font-bold">60</span>
              <div>
                <p className="text-white font-medium text-sm">Preservation Age</p>
                <p className="text-gray-400 text-sm">Earliest you can access your super (born after 1 July 1964)</p>
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

        {/* Section 1: What Is Superannuation? */}
        <section id="what-is-super">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold">1</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">What Is Superannuation?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Superannuation (or &quot;super&quot;) is Australia&apos;s <strong className="text-white">mandatory retirement savings system</strong>. It requires employers to set aside a percentage of each employee&apos;s ordinary time earnings into a regulated super fund, where it is invested and grows over the person&apos;s working life. Upon reaching preservation age (60 for anyone born after 1 July 1964), the accumulated balance can be withdrawn as a lump sum or converted into a retirement income stream.
            </p>
            <p className="text-gray-300 leading-relaxed">
              The current <strong className="text-white">super guarantee (SG) rate is 11.5%</strong> for the 2024-25 financial year, meaning employers must contribute 11.5% of each eligible employee&apos;s ordinary time earnings to their nominated super fund. This rate is legislated to increase to <strong className="text-white">12% from 1 July 2025</strong>, where it will cap out under current law.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Super funds invest your contributions across a range of asset classes &mdash; Australian and international shares, property, bonds, cash, and alternative investments. Over the long term, the average Australian super fund has returned approximately 7-8% per annum, though this varies significantly by fund and investment option. The power of compounding over a 30-40 year career is what makes super such an effective wealth-building tool.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Australia&apos;s super system is now one of the largest pools of managed funds in the world, holding over <strong className="text-white">$3.5 trillion in total assets</strong>. It is regulated by the Australian Prudential Regulation Authority (APRA) and the Australian Taxation Office (ATO), with additional oversight from the Australian Securities and Investments Commission (ASIC).
            </p>
            <div className="rounded-xl bg-amber-500/5 border border-amber-500/20 p-5 mt-6">
              <p className="text-amber-400 font-medium mb-2">Key Point</p>
              <p className="text-gray-400 text-sm">
                Unlike most savings and investment accounts, super is a <strong className="text-gray-200">concessionally taxed environment</strong>. Contributions are taxed at just 15% (compared to your marginal tax rate of up to 47%), and investment earnings inside super are also taxed at a maximum of 15%. Once you retire and start drawing a pension, investment earnings become <strong className="text-gray-200">completely tax-free</strong>. This makes super by far the most tax-effective savings vehicle available to Australians.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Super for Freelancers & Sole Traders */}
        <section id="super-for-freelancers">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold">2</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Super for Freelancers &amp; Sole Traders</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Here&apos;s the critical distinction: <strong className="text-white">self-employed people are NOT required by law to pay themselves super</strong>. The super guarantee only applies to employers paying employees. As a freelancer or sole trader, you are your own boss, and no one is obligated to make SG contributions on your behalf.
            </p>
            <p className="text-gray-300 leading-relaxed">
              This means that without deliberate action, you will reach retirement age with <strong className="text-white">zero super savings</strong> from your self-employed years. This is one of the biggest financial risks freelancers face &mdash; the freedom of self-employment comes with the responsibility of funding your own retirement.
            </p>
            <p className="text-gray-300 leading-relaxed">
              The good news is that self-employed Australians can make <strong className="text-white">voluntary contributions</strong> to their super fund and claim a full tax deduction, just like an employer would. In fact, the tax benefits are arguably even more valuable for high-earning freelancers because the gap between their marginal tax rate and the 15% super tax rate is larger.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-emerald-500/20 p-5">
                <h4 className="text-emerald-400 font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Why You SHOULD Pay Super
                </h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>Tax deduction reduces your taxable income immediately</li>
                  <li>Contributions taxed at 15% instead of your marginal rate (up to 47%)</li>
                  <li>Compound growth over decades builds serious wealth</li>
                  <li>Investment earnings inside super taxed at max 15%</li>
                  <li>Government co-contribution if income under $58,445</li>
                  <li>Retirement income from super pension is tax-free</li>
                  <li>Asset protection &mdash; super is generally protected from creditors</li>
                </ul>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-5">
                <h4 className="text-red-400 font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                  Common Excuses (And Why They&apos;re Risky)
                </h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>&quot;I&apos;ll invest outside super instead&quot; &mdash; you lose the 15% tax rate</li>
                  <li>&quot;I need the cash flow now&quot; &mdash; even small amounts compound significantly</li>
                  <li>&quot;I&apos;ll start later&quot; &mdash; every year of delay costs tens of thousands at retirement</li>
                  <li>&quot;Super is locked away&quot; &mdash; that&apos;s the point; it protects you from yourself</li>
                  <li>&quot;I&apos;ll sell my business to retire&quot; &mdash; most small businesses have no sale value</li>
                </ul>
              </div>
            </div>

            <div className="rounded-xl bg-amber-500/5 border border-amber-500/20 p-5 mt-6">
              <p className="text-amber-400 font-medium mb-2">Contractor vs Employee Test</p>
              <p className="text-gray-400 text-sm">
                If you work primarily for one client, use their tools, work their hours, and cannot subcontract the work, you may actually be classified as an <strong className="text-gray-200">employee for super purposes</strong> even if you have an ABN and issue invoices. In this case, your client may be legally obligated to pay your super at the 11.5% SG rate. See Section 6 for the detailed test.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Contribution Types & Caps */}
        <section id="contribution-types-caps">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold">3</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Contribution Types &amp; Caps</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Super contributions fall into two main categories, each with its own annual cap and tax treatment. Understanding the difference is essential for maximising your tax benefits and avoiding excess contribution penalties.
            </p>

            {/* Concessional Contributions */}
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 mt-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-full">BEFORE TAX</span>
                <h3 className="text-lg font-semibold text-white">Concessional Contributions</h3>
              </div>
              <div className="space-y-3 text-gray-400 text-sm leading-relaxed">
                <p>
                  Concessional contributions are made from <strong className="text-gray-200">pre-tax income</strong> and are taxed at a flat rate of <strong className="text-gray-200">15%</strong> when they enter your super fund. For most freelancers, this is significantly less than their marginal tax rate (32.5% on income between $45,001-$120,000, or 37% on $120,001-$180,000).
                </p>
                <div className="rounded-lg bg-gray-900/50 p-4 border border-gray-700/30">
                  <p className="text-amber-400 font-medium mb-2">Annual Cap: $30,000</p>
                  <p className="text-gray-400 text-sm">
                    The concessional contributions cap is <strong className="text-gray-200">$30,000 per financial year</strong>. This includes employer SG contributions, salary sacrifice, and personal deductible contributions. If you exceed this cap, the excess is added to your assessable income and taxed at your marginal rate (plus a 15% tax offset for the tax already paid inside super).
                  </p>
                </div>
                <p>Concessional contributions include:</p>
                <ul className="space-y-1 ml-4">
                  <li>Employer super guarantee (SG) payments</li>
                  <li>Salary sacrifice contributions</li>
                  <li>Personal contributions you claim as a tax deduction</li>
                </ul>
              </div>
            </div>

            {/* Non-Concessional Contributions */}
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 mt-4">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold text-orange-400 bg-orange-500/10 px-2.5 py-1 rounded-full">AFTER TAX</span>
                <h3 className="text-lg font-semibold text-white">Non-Concessional Contributions</h3>
              </div>
              <div className="space-y-3 text-gray-400 text-sm leading-relaxed">
                <p>
                  Non-concessional contributions are made from <strong className="text-gray-200">after-tax income</strong> &mdash; money you have already paid income tax on. These contributions are <strong className="text-gray-200">not taxed again</strong> when they enter your super fund. You would use this type when you have already maxed out your concessional cap, or when you have a lump sum (e.g., inheritance, property sale) you want to shelter inside super.
                </p>
                <div className="rounded-lg bg-gray-900/50 p-4 border border-gray-700/30">
                  <p className="text-amber-400 font-medium mb-2">Annual Cap: $120,000</p>
                  <p className="text-gray-400 text-sm">
                    The non-concessional contributions cap is <strong className="text-gray-200">$120,000 per financial year</strong>. If you are under 75 years old, you can use the <strong className="text-gray-200">bring-forward rule</strong> to contribute up to three years&apos; worth ($360,000) in a single year. Exceeding the cap triggers the excess being returned or taxed at your marginal rate plus an additional earnings amount.
                  </p>
                </div>
              </div>
            </div>

            {/* Co-Contribution */}
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 mt-4">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full">GOVT MATCH</span>
                <h3 className="text-lg font-semibold text-white">Government Co-Contribution</h3>
              </div>
              <div className="space-y-3 text-gray-400 text-sm leading-relaxed">
                <p>
                  If your total income is <strong className="text-gray-200">less than $58,445</strong>, the government will match your non-concessional (after-tax) super contributions at a rate of <strong className="text-gray-200">50 cents for every $1 you contribute</strong>, up to a maximum government contribution of <strong className="text-gray-200">$500</strong>. This means you need to contribute $1,000 of after-tax money to receive the full $500 match.
                </p>
                <p>
                  The co-contribution phases out between $43,445 and $58,445 of income. It&apos;s automatically calculated by the ATO &mdash; you don&apos;t need to apply. You just need to have made at least one non-concessional contribution during the financial year and lodged your tax return.
                </p>
              </div>
            </div>

            {/* Carry-Forward */}
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 mt-4">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold text-violet-400 bg-violet-500/10 px-2.5 py-1 rounded-full">CATCH-UP</span>
                <h3 className="text-lg font-semibold text-white">Carry-Forward Unused Caps</h3>
              </div>
              <div className="space-y-3 text-gray-400 text-sm leading-relaxed">
                <p>
                  If your <strong className="text-gray-200">total super balance is under $500,000</strong> at the previous 30 June, you can carry forward any <strong className="text-gray-200">unused concessional cap amounts from the previous five financial years</strong>. This is a powerful tool for freelancers who have had lean years or simply haven&apos;t been contributing to super.
                </p>
                <div className="rounded-lg bg-gray-900/50 p-4 border border-gray-700/30">
                  <p className="text-amber-400 font-medium mb-2">Example: Catching Up on Lost Years</p>
                  <p className="text-gray-400 text-sm">
                    Say you made zero concessional contributions for the past three years. Your unused caps from those years total $90,000 ($30,000 x 3). In a strong income year, you could contribute up to <strong className="text-gray-200">$120,000</strong> ($30,000 current year + $90,000 carried forward) as concessional contributions, all taxed at just 15%. On a $120,000 income, this could save you over $20,000 in tax.
                  </p>
                </div>
              </div>
            </div>

            {/* Contribution Caps Table */}
            <div className="rounded-2xl border border-gray-700/50 overflow-hidden mt-6">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-800/80">
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Type</th>
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Annual Cap</th>
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4 hidden sm:table-cell">Tax Treatment</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700/50">
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">Concessional</td>
                    <td className="px-6 py-4 text-amber-400 font-medium">$30,000</td>
                    <td className="px-6 py-4 text-sm text-gray-400 hidden sm:table-cell">Taxed at 15% in the fund</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">Non-concessional</td>
                    <td className="px-6 py-4 text-amber-400 font-medium">$120,000</td>
                    <td className="px-6 py-4 text-sm text-gray-400 hidden sm:table-cell">Not taxed (already after-tax money)</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">Co-contribution (govt)</td>
                    <td className="px-6 py-4 text-amber-400 font-medium">Up to $500</td>
                    <td className="px-6 py-4 text-sm text-gray-400 hidden sm:table-cell">Not taxed; income must be under $58,445</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">Carry-forward</td>
                    <td className="px-6 py-4 text-amber-400 font-medium">Unused caps (5 years)</td>
                    <td className="px-6 py-4 text-sm text-gray-400 hidden sm:table-cell">Balance must be under $500K at prior 30 June</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section 4: Tax Benefits */}
        <section id="tax-benefits">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold">4</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Tax Benefits</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              The tax advantages of super are the primary reason freelancers should contribute voluntarily. The system is designed to reward you for saving for retirement by offering significantly lower tax rates at every stage &mdash; contributions, investment earnings, and withdrawals.
            </p>

            <h3 className="text-lg font-semibold text-white mt-8 mb-3">Concessional Contributions: 15% vs Your Marginal Rate</h3>
            <p className="text-gray-300 leading-relaxed">
              When you make a concessional (before-tax) contribution to super and claim the deduction, the contribution is <strong className="text-white">taxed at just 15%</strong> inside your super fund instead of at your marginal tax rate. The higher your income, the more you save.
            </p>

            {/* Tax Savings Example */}
            <div className="rounded-2xl border border-amber-500/20 bg-gradient-to-br from-amber-900/10 to-orange-900/10 p-6 mt-6">
              <h4 className="text-white font-semibold mb-4">Worked Example: $100,000 Income, $10,000 Super Contribution</h4>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <p className="text-sm text-amber-400 font-medium">Without Super Contribution</p>
                  <div className="text-sm font-mono space-y-1 text-gray-400">
                    <p>Taxable income: <span className="text-white">$100,000</span></p>
                    <p>Tax on $10K slice (32.5%): <span className="text-white">$3,250</span></p>
                    <p>Take-home from that $10K: <span className="text-white">$6,750</span></p>
                  </div>
                </div>
                <div className="space-y-3">
                  <p className="text-sm text-amber-400 font-medium">With Super Contribution</p>
                  <div className="text-sm font-mono space-y-1 text-gray-400">
                    <p>Contribution to super: <span className="text-white">$10,000</span></p>
                    <p>Tax inside super (15%): <span className="text-white">$1,500</span></p>
                    <p>In your super fund: <span className="text-emerald-400 font-bold">$8,500</span></p>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-amber-500/20">
                <p className="text-sm text-gray-400">
                  <strong className="text-white">Tax saved: $1,750</strong> ($3,250 &minus; $1,500). That&apos;s an immediate 17.5% return on your contribution, before any investment growth. Over a 30-year career, this tax saving alone compounds into tens of thousands of dollars.
                </p>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8 mb-3">Tax Savings by Income Bracket</h3>
            <p className="text-gray-300 leading-relaxed">
              The higher your marginal tax rate, the more you save by contributing to super. Here&apos;s the effective tax saving per $1,000 of concessional contribution at each bracket:
            </p>

            <div className="rounded-2xl border border-gray-700/50 overflow-hidden mt-4">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-800/80">
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Taxable Income</th>
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Marginal Rate</th>
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Tax Saved per $1K</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700/50">
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm">$18,201 &ndash; $45,000</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">16%</td>
                    <td className="px-6 py-3 text-amber-400 font-medium">$10</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm">$45,001 &ndash; $135,000</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">30%</td>
                    <td className="px-6 py-3 text-amber-400 font-medium">$150</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm">$135,001 &ndash; $190,000</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">37%</td>
                    <td className="px-6 py-3 text-amber-400 font-medium">$220</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm">$190,001+</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">45%</td>
                    <td className="px-6 py-3 text-amber-400 font-medium">$300</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="rounded-xl bg-red-500/5 border border-red-500/20 p-5 mt-6">
              <p className="text-red-400 font-medium mb-2">Division 293 Tax: High Earners Watch Out</p>
              <p className="text-gray-400 text-sm">
                If your <strong className="text-gray-200">income plus concessional super contributions exceed $250,000</strong>, you pay an additional 15% tax on the super contributions that push you over the threshold. This is called <strong className="text-gray-200">Division 293 tax</strong>, and it effectively doubles the tax on those contributions from 15% to 30%. The ATO will send you a Division 293 assessment after you lodge your tax return &mdash; you can choose to pay it from your bank account or from your super fund.
              </p>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8 mb-3">Investment Earnings Inside Super</h3>
            <p className="text-gray-300 leading-relaxed">
              Investment earnings (interest, dividends, capital gains) inside your super fund are taxed at a <strong className="text-white">maximum of 15%</strong>. Capital gains on assets held for more than 12 months receive a one-third discount, bringing the effective rate down to <strong className="text-white">10%</strong>. Compare this to earnings outside super, which are taxed at your full marginal rate (up to 47% including Medicare levy). Over decades, this difference in tax drag on investment returns is enormous.
            </p>

            <h3 className="text-lg font-semibold text-white mt-8 mb-3">Tax-Free in Retirement</h3>
            <p className="text-gray-300 leading-relaxed">
              Once you reach age 60 and begin drawing an income stream (pension) from your super, both the withdrawals and the ongoing investment earnings become <strong className="text-white">completely tax-free</strong>. This is the final piece of the super tax advantage: you contribute at 15%, your earnings grow at 15% (or less), and you withdraw at 0%.
            </p>
          </div>
        </section>

        {/* Section 5: How to Pay Yourself Super */}
        <section id="how-to-pay-yourself-super">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold">5</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">How to Pay Yourself Super</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Paying yourself super as a freelancer is straightforward once you know the process. Here are the steps to set up and maintain your own super contributions:
            </p>

            <div className="space-y-4 mt-6">
              {/* Step 1 */}
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <span className="text-amber-400 font-bold text-sm">1</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Choose a Super Fund</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  If you already have a super fund from previous employment, you can continue using it. If not, choose a fund based on fees, investment performance, insurance options, and features. Industry funds (like AustralianSuper, REST, Hostplus) generally have lower fees than retail funds. You can compare funds on the ATO&apos;s <strong className="text-gray-200">YourSuper comparison tool</strong> at ato.gov.au. Make sure the fund accepts voluntary contributions from self-employed members.
                </p>
              </div>

              {/* Step 2 */}
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <span className="text-amber-400 font-bold text-sm">2</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Make Contributions</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Transfer money directly to your super fund via BPAY, direct debit, or EFT using the details provided by your fund. You can contribute <strong className="text-gray-200">quarterly</strong> (aligning with your BAS cycle), <strong className="text-gray-200">monthly</strong> (treating it like a salary), or as a <strong className="text-gray-200">lump sum before 30 June</strong>. Many freelancers set up a recurring transfer of 10-15% of their income to mimic the employer SG rate. Contributions must be received by your fund before 30 June to count for that financial year.
                </p>
              </div>

              {/* Step 3 */}
              <div className="rounded-xl bg-gray-800/50 border border-amber-500/30 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <span className="text-amber-400 font-bold text-sm">3</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Lodge &quot;Notice of Intent to Claim&quot;</h3>
                  <span className="text-xs text-red-400 bg-red-500/10 px-2 py-0.5 rounded-full">Critical</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  This is the step most freelancers miss. To claim a tax deduction for your personal super contributions, you <strong className="text-gray-200">must</strong> lodge a <strong className="text-gray-200">&quot;Notice of intent to claim or vary a deduction for personal super contributions&quot;</strong> form (NAT 71121) with your super fund. You must do this <strong className="text-gray-200">before</strong> you lodge your tax return, and before you roll the money into another fund or start a pension with it.
                </p>
                <div className="mt-3 rounded-lg bg-red-500/5 border border-red-500/20 p-3">
                  <p className="text-red-400 text-xs font-medium">
                    If you skip this form, your contribution will be treated as a non-concessional (after-tax) contribution and you will NOT receive a tax deduction. This is irreversible once your tax return is lodged.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <span className="text-amber-400 font-bold text-sm">4</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Receive Acknowledgement</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Your super fund will send you a <strong className="text-gray-200">written acknowledgement</strong> confirming they received your Notice of Intent. Keep this document &mdash; it&apos;s your proof that you completed the process correctly. Most funds process these within 1-2 weeks. Some allow you to submit the notice online through their member portal.
                </p>
              </div>

              {/* Step 5 */}
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <span className="text-amber-400 font-bold text-sm">5</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Claim the Deduction</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  When you lodge your individual tax return, include the deductible amount at <strong className="text-gray-200">Item D12 &mdash; &quot;Personal superannuation contributions&quot;</strong>. Your taxable income is reduced by the contribution amount, and you pay less income tax. The contribution itself is then taxed at 15% inside your super fund. The ATO will pre-fill some of this from data reported by your super fund, but always double-check the amounts match your records.
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-amber-500/5 border border-amber-500/20 p-5 mt-6">
              <p className="text-amber-400 font-medium mb-2">Timing Tip</p>
              <p className="text-gray-400 text-sm">
                Super contributions must be <strong className="text-gray-200">received by your fund</strong> before 30 June to count for that financial year. Bank transfers can take 2-3 business days, and some funds take additional time to process and allocate contributions. Aim to make your final contribution by <strong className="text-gray-200">20 June</strong> at the latest to avoid missing the deadline. BPAY payments are particularly notorious for slow processing times at end of financial year.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: Super on Contractor Payments */}
        <section id="super-on-contractor-payments">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold">6</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Super on Contractor Payments</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              One of the most misunderstood areas of super law is when a business must pay super for a contractor. Under the <strong className="text-white">Superannuation Guarantee (Administration) Act 1992</strong>, the super guarantee applies to certain contractors even though they are not technically employees.
            </p>

            <h3 className="text-lg font-semibold text-white mt-8 mb-3">The &quot;Wholly or Principally for Labour&quot; Test</h3>
            <p className="text-gray-300 leading-relaxed">
              A business must pay the 11.5% super guarantee for a contractor if the contract is <strong className="text-white">&quot;wholly or principally for the labour of the person.&quot;</strong> This means the contractor is essentially providing their personal effort rather than a business delivering a result. The ATO looks at several factors to determine this:
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-5">
                <h4 className="text-red-400 font-semibold mb-3">SG Likely Applies (Employee-Like)</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                    </svg>
                    <span>Paid for hours or days worked, not a result</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                    </svg>
                    <span>Must perform the work personally (cannot delegate)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                    </svg>
                    <span>Uses the client&apos;s tools and equipment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                    </svg>
                    <span>Works on the client&apos;s premises</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                    </svg>
                    <span>Results of &quot;personal exertion&quot; rather than a business system</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-emerald-500/20 p-5">
                <h4 className="text-emerald-400 font-semibold mb-3">SG Likely Does NOT Apply (True Contractor)</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Paid for a defined deliverable or result</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Can delegate or subcontract the work</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Provides own tools, equipment, and software</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Works from own premises</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Bears commercial risk (fixed price, not hourly)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 mt-6">
              <h4 className="text-white font-semibold mb-3">Practical Examples</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-red-400 font-bold text-sm flex-shrink-0 mt-0.5">SG</span>
                  <p className="text-gray-400 text-sm">
                    A freelance developer is hired at $800/day to work on-site at a client&apos;s office, using their computer and systems, Monday to Friday. The client directs what they work on each day. <strong className="text-gray-200">Super guarantee applies</strong> &mdash; this is principally a contract for labour, paid by time.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-emerald-400 font-bold text-sm flex-shrink-0 mt-0.5">NO SG</span>
                  <p className="text-gray-400 text-sm">
                    A freelance designer is contracted to deliver a complete website redesign for $15,000. They work from home, use their own software (Figma, Adobe), set their own hours, and deliver the final files by an agreed deadline. <strong className="text-gray-200">Super guarantee does not apply</strong> &mdash; this is a contract for a result, not labour.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-amber-500/5 border border-amber-500/20 p-5 mt-6">
              <p className="text-amber-400 font-medium mb-2">What If Your Client Should Be Paying Your Super?</p>
              <p className="text-gray-400 text-sm">
                If you believe your client should be paying super under the SG Act, you can raise it with them directly or report it to the ATO. The ATO has the power to issue a <strong className="text-gray-200">Superannuation Guarantee Charge (SGC)</strong> to the client, which includes the missing super plus interest and an administration fee. You can check your super entitlements using the ATO&apos;s Employee/Contractor Decision Tool at ato.gov.au. Be aware that this can affect your working relationship, so consider seeking professional advice first.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Related Tools */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-white mb-2 text-center">Related Tools</h2>
        <p className="text-gray-400 text-center mb-8">Free calculators to help you plan and optimise your super contributions.</p>
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
        <p className="text-gray-400 text-center mb-8">In-depth guides on super, tax, and retirement planning for freelancers.</p>
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
            Your Future Self Will Thank You
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            InvoiceFlow helps freelancers track income, estimate tax, and plan super contributions so you can build wealth while you build your business. Start for free &mdash; no accountant required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button>Start Free &mdash; No Card Required</Button>
            </Link>
            <Link href="/tools/super-calculator">
              <Button variant="secondary">Try the Super Calculator</Button>
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
