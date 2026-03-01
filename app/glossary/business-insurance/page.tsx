import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Business Insurance for Freelancers: Complete Australian Guide — InvoiceFlow',
  description:
    'What business insurance do freelancers need in Australia? Compare 8 types of cover including PI ($300-$700/yr), public liability ($200-$500/yr), cyber liability, and income protection. Tax deductions, costs, and how to choose.',
  keywords: [
    'business insurance freelancer australia',
    'what insurance do freelancers need',
    'sole trader insurance',
    'freelancer insurance australia',
    'small business insurance',
    'contractor insurance requirements',
    'freelancer PI insurance',
    'public liability freelancer',
    'income protection sole trader',
    'business insurance tax deductible',
    'cyber liability freelancer',
    'freelancer insurance cost australia',
  ],
  alternates: { canonical: '/glossary/business-insurance' },
  openGraph: {
    title: 'Business Insurance for Freelancers: Complete Australian Guide — InvoiceFlow',
    description:
      'Everything self-employed Australians need to know about business insurance: 8 types of cover compared, typical costs $800-$2,000/yr total, tax deductions, and how to choose the right policies for your freelance business.',
    url: 'https://invoiceflow-teal.vercel.app/glossary/business-insurance',
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
    { '@type': 'ListItem', position: 3, name: 'Business Insurance', item: `${BASE_URL}/glossary/business-insurance` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What insurance do freelancers need in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'At minimum, most Australian freelancers need Professional Indemnity (PI) insurance ($300-$700/yr) and Public Liability insurance ($200-$500/yr). PI covers claims of negligence, errors, or bad advice that cause a client financial loss. Public Liability covers third-party injury or property damage. Income Protection insurance is also strongly recommended since freelancers have no employer-provided sick leave. If you handle client data or work in tech, Cyber Liability insurance is increasingly important. The specific combination depends on your profession, whether you meet clients in person, and your contractual obligations.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is business insurance tax-deductible in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, all business insurance premiums are 100% tax-deductible as a business expense under Section 8-1 of the Income Tax Assessment Act 1997 (ITAA 1997). This includes Professional Indemnity, Public Liability, Cyber Liability, Business Interruption, Contents/Equipment, and Income Protection insurance. If you are registered for GST, you can also claim the GST component on your insurance premiums as an input tax credit on your BAS. For example, if you pay $2,500 in total insurance premiums and your marginal tax rate is 34.5%, you save $862.50 in tax, making the effective cost only $1,637.50.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does freelancer insurance cost in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The cost of freelancer insurance in Australia depends on the types of cover you need. Professional Indemnity typically costs $300-$700/yr for $1M-$2M cover. Public Liability runs $200-$500/yr for $10M-$20M cover. Cyber Liability costs $300-$800/yr. Income Protection ranges from $500-$2,000/yr depending on your income and waiting period. A typical freelancer bundling PI and Public Liability pays $800-$2,000/yr total. Bundled packages from providers like BizCover, CGU, or QBE can save you 15-20% compared to buying policies separately.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need insurance if I work from home as a freelancer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, working from home does not eliminate your need for business insurance. Your standard home and contents insurance policy does NOT cover business equipment, business-related liability, or professional errors. If your laptop is stolen with client data, home insurance will not cover the data breach costs. If a client visits your home office and is injured, your home insurance may deny the claim because it occurred during business activities. You need separate business insurance: PI insurance for professional errors, Public Liability if anyone visits your workspace, and Contents/Equipment insurance specifically covering your business assets.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I claim income protection insurance on tax in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, income protection insurance premiums are fully tax-deductible for Australian sole traders and freelancers. This is one of the few personal insurance types that is tax-deductible (unlike life insurance, which is generally not deductible). You claim the deduction in your individual tax return under business expenses. If your income protection premium is $1,200/yr and your marginal tax rate is 34.5%, you save $414 in tax, making the effective annual cost $786. The premiums must be for a policy that replaces your income if you are unable to work due to illness or injury.',
      },
    },
  ],
};

const tocItems = [
  { id: 'what-is-business-insurance', label: '1. What Is Business Insurance?' },
  { id: 'types-of-business-insurance', label: '2. Types of Business Insurance for Freelancers' },
  { id: 'do-freelancers-need-insurance', label: '3. Do Freelancers Need Business Insurance?' },
  { id: 'tax-deductions-insurance', label: '4. Tax Deductions for Business Insurance' },
  { id: 'how-to-choose', label: '5. How to Choose Business Insurance' },
  { id: 'how-invoiceflow-helps', label: '6. How InvoiceFlow Helps' },
];

const relatedTools = [
  {
    href: '/tools/tax-deduction-finder',
    name: 'Tax Deduction Finder',
    description: 'Discover all the tax deductions you can claim as a freelancer, including every insurance premium.',
    icon: (
      <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
  {
    href: '/tools/freelance-benefits-cost-calculator',
    name: 'Freelance Benefits Cost Calculator',
    description: 'See the true cost of insurance, super, leave, and other benefits you need to fund yourself.',
    icon: (
      <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
      </svg>
    ),
  },
  {
    href: '/tools/client-onboarding-checklist',
    name: 'Business Registration Checklist',
    description: 'Ensure all your insurance, ABN, and registrations are sorted before taking on clients.',
    icon: (
      <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
      </svg>
    ),
  },
  {
    href: '/tools/eofy-tax-checklist',
    name: 'EOFY Tax Checklist Generator',
    description: 'Generate a personalised EOFY checklist including insurance expense reporting and deductions.',
    icon: (
      <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12" />
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
    name: 'EOFY Guide',
    description: 'End of financial year checklist including insurance expense reporting and prepayment strategies.',
  },
  {
    href: '/guides/setting-freelance-rates',
    name: 'Setting Freelance Rates',
    description: 'How to price your services to cover insurance, super, tax, and still earn what you deserve.',
  },
];

export default function BusinessInsuranceGlossaryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative px-4 pt-20 pb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-emerald-500/10 blur-3xl" />
        <div className="relative max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/glossary" className="hover:text-white transition-colors">Glossary</Link>
            <span>/</span>
            <span className="text-white">Business Insurance</span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            Glossary &mdash; Business Protection
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Business Insurance{' '}
            <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
              for Australian Freelancers
            </span>
          </h1>

          {/* Summary */}
          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            Business insurance protects you against financial losses from your business activities. It&apos;s not a single policy &mdash; it&apos;s an umbrella term covering multiple types of cover, from professional indemnity to income protection. This guide breaks down the 8 types of insurance every Australian freelancer should know about, what they cost, and which ones you actually need.
          </p>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>12 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>8 Insurance Types Compared</span>
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
        <div className="rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 p-8">
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
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs font-bold">1/3</span>
              <div>
                <p className="text-white font-medium text-sm">1 in 3 Small Businesses Face a Claim</p>
                <p className="text-gray-400 text-sm">One in three Australian small businesses will face an insurance claim each year</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs font-bold">$50K</span>
              <div>
                <p className="text-white font-medium text-sm">Average Uninsured Claim Cost</p>
                <p className="text-gray-400 text-sm">Uninsured claims typically cost $10K&ndash;$50K, with some exceeding $100K or more</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs font-bold">100%</span>
              <div>
                <p className="text-white font-medium text-sm">Fully Tax Deductible</p>
                <p className="text-gray-400 text-sm">All business insurance premiums are 100% deductible under Section 8-1 ITAA 1997</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs font-bold">15%</span>
              <div>
                <p className="text-white font-medium text-sm">Bundle Savings</p>
                <p className="text-gray-400 text-sm">PI + PL packages are typically 15&ndash;20% cheaper than buying policies separately</p>
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

        {/* Section 1: What Is Business Insurance? */}
        <section id="what-is-business-insurance">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white text-sm font-bold">1</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">What Is Business Insurance?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Business insurance is a broad term for <strong className="text-white">financial protection against losses arising from your business activities</strong>. It is not a single policy &mdash; instead, it is an umbrella term covering multiple types of insurance, each designed to protect against a different category of risk. From professional errors to equipment theft to data breaches, business insurance ensures that a single incident does not destroy everything you have built.
            </p>
            <p className="text-gray-300 leading-relaxed">
              For Australian freelancers and sole traders, business insurance is particularly important because <strong className="text-white">you have unlimited personal liability</strong>. Unlike a Pty Ltd company that offers limited liability to its directors, a sole trader&apos;s personal assets &mdash; home, car, savings &mdash; are all at risk if the business faces a claim. Insurance is your shield against that exposure.
            </p>
            <p className="text-gray-300 leading-relaxed">
              The statistics are sobering: <strong className="text-white">1 in 3 Australian small businesses face an insurance claim each year</strong>. The average uninsured claim costs between $10,000 and $50,000, with some claims reaching well into six figures. For a sole trader, an uninsured claim of this magnitude can mean financial ruin &mdash; especially if it involves legal defence costs, which can exceed $50,000 on their own even if the claim is ultimately dismissed.
            </p>

            <h3 className="text-lg font-semibold text-white mt-8">Three Categories of Business Insurance</h3>
            <div className="space-y-3 mt-3">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-emerald-500/20">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs font-bold">!</span>
                <div>
                  <p className="text-white font-medium text-sm">Legally Required</p>
                  <p className="text-gray-400 text-sm">Some types of insurance are required by law. WorkCover is mandatory if you have employees. Motor vehicle insurance is required for driving. Certain regulated professions (financial advisers, builders, real estate agents) must hold Professional Indemnity insurance by law.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-emerald-500/20">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs font-bold">&sect;</span>
                <div>
                  <p className="text-white font-medium text-sm">Contractually Required</p>
                  <p className="text-gray-400 text-sm">Many clients, agencies, and platforms require proof of PI insurance ($5M&ndash;$20M cover) and Public Liability ($10M&ndash;$20M cover) as a condition of engagement. Without it, you simply cannot accept the work &mdash; regardless of whether the law requires it.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-emerald-500/20">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs font-bold">&check;</span>
                <div>
                  <p className="text-white font-medium text-sm">Strongly Recommended</p>
                  <p className="text-gray-400 text-sm">Even if not legally or contractually required, many insurance types are strongly recommended. Income Protection is critical for anyone without employer sick leave. Cyber Liability is increasingly essential for tech workers and anyone handling client data.</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-5 mt-6">
              <p className="text-emerald-400 font-medium mb-2">Key Point</p>
              <p className="text-gray-400 text-sm">
                Business insurance is an <strong className="text-gray-200">investment, not a cost</strong>. At $800&ndash;$2,000 per year for a typical freelancer&apos;s insurance portfolio, the premiums are a fraction of what a single uninsured claim would cost. And since all business insurance premiums are 100% tax deductible, the after-tax cost is even lower. Think of it as the price of protecting your ability to earn a living.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Types of Business Insurance for Freelancers */}
        <section id="types-of-business-insurance">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white text-sm font-bold">2</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Types of Business Insurance for Freelancers</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              There are eight main types of business insurance relevant to Australian freelancers and sole traders. Each covers a different category of risk. Here is a comprehensive comparison to help you understand what each type does, what it costs, and whether you need it:
            </p>

            {/* Comparison Table */}
            <div className="rounded-2xl border border-gray-700/50 overflow-hidden mt-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-800/80">
                      <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Insurance Type</th>
                      <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">What It Covers</th>
                      <th className="text-left text-sm font-medium text-gray-300 px-6 py-4 hidden md:table-cell">Typical Cost/yr</th>
                      <th className="text-left text-sm font-medium text-gray-300 px-6 py-4 hidden lg:table-cell">Key Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700/50">
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-4 text-white font-medium">Professional Indemnity (PI)</td>
                      <td className="px-6 py-4 text-sm text-gray-400">Errors, negligence, bad advice causing financial loss</td>
                      <td className="px-6 py-4 text-emerald-400 font-medium hidden md:table-cell">$300&ndash;$700</td>
                      <td className="px-6 py-4 text-sm text-gray-400 hidden lg:table-cell">Often contractually required by clients</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-4 text-white font-medium">Public Liability (PL)</td>
                      <td className="px-6 py-4 text-sm text-gray-400">Third-party injury or property damage</td>
                      <td className="px-6 py-4 text-emerald-400 font-medium hidden md:table-cell">$200&ndash;$500</td>
                      <td className="px-6 py-4 text-sm text-gray-400 hidden lg:table-cell">Essential if meeting clients in person</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-4 text-white font-medium">Cyber Liability</td>
                      <td className="px-6 py-4 text-sm text-gray-400">Data breaches, cyber attacks, privacy violations</td>
                      <td className="px-6 py-4 text-emerald-400 font-medium hidden md:table-cell">$300&ndash;$800</td>
                      <td className="px-6 py-4 text-sm text-gray-400 hidden lg:table-cell">Critical for tech and digital freelancers</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-4 text-white font-medium">Business Interruption</td>
                      <td className="px-6 py-4 text-sm text-gray-400">Lost income during a business disruption</td>
                      <td className="px-6 py-4 text-emerald-400 font-medium hidden md:table-cell">$200&ndash;$600</td>
                      <td className="px-6 py-4 text-sm text-gray-400 hidden lg:table-cell">Important for single-income freelancers</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-4 text-white font-medium">Income Protection</td>
                      <td className="px-6 py-4 text-sm text-gray-400">Illness or injury preventing you from working</td>
                      <td className="px-6 py-4 text-emerald-400 font-medium hidden md:table-cell">$500&ndash;$2,000</td>
                      <td className="px-6 py-4 text-sm text-gray-400 hidden lg:table-cell">Tax-deductible; critical safety net</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-4 text-white font-medium">Contents / Equipment</td>
                      <td className="px-6 py-4 text-sm text-gray-400">Business equipment loss, theft, or damage</td>
                      <td className="px-6 py-4 text-emerald-400 font-medium hidden md:table-cell">$150&ndash;$400</td>
                      <td className="px-6 py-4 text-sm text-gray-400 hidden lg:table-cell">For photographers, videographers, etc.</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-4 text-white font-medium">Motor Vehicle</td>
                      <td className="px-6 py-4 text-sm text-gray-400">Business vehicle coverage and third-party damage</td>
                      <td className="px-6 py-4 text-emerald-400 font-medium hidden md:table-cell">Varies</td>
                      <td className="px-6 py-4 text-sm text-gray-400 hidden lg:table-cell">Required if driving for work</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-4 text-white font-medium">Management Liability</td>
                      <td className="px-6 py-4 text-sm text-gray-400">D&amp;O, employment practices, statutory liability</td>
                      <td className="px-6 py-4 text-emerald-400 font-medium hidden md:table-cell">$400&ndash;$1,000</td>
                      <td className="px-6 py-4 text-sm text-gray-400 hidden lg:table-cell">For Pty Ltd companies with directors</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="px-6 py-3 bg-gray-900/40 border-t border-gray-700/30">
                <p className="text-xs text-gray-500">Costs are indicative for Australian freelancers with revenue under $300K. Actual premiums vary by profession, revenue, cover level, and claims history. All premiums are 100% tax deductible.</p>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">The Two Most Important Policies</h3>
            <div className="grid sm:grid-cols-2 gap-4 mt-3">
              <div className="rounded-xl bg-gray-800/50 border border-emerald-500/20 p-5">
                <h4 className="text-emerald-400 font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                  Professional Indemnity (PI)
                </h4>
                <p className="text-gray-400 text-sm mb-3">
                  Protects against claims of negligence, errors, or bad advice that cause a client financial loss. Covers legal defence costs and damages. This is the #1 insurance for any service-based freelancer.
                </p>
                <div className="flex items-center gap-2 text-xs text-emerald-400">
                  <Link href="/glossary/professional-indemnity" className="hover:text-emerald-300 underline">Read the full PI Insurance guide</Link>
                </div>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-emerald-500/20 p-5">
                <h4 className="text-emerald-400 font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                  Public Liability (PL)
                </h4>
                <p className="text-gray-400 text-sm mb-3">
                  Covers claims for bodily injury or property damage caused by your business activities. Essential if you ever meet clients, attend events, or work on-site at another location.
                </p>
                <div className="flex items-center gap-2 text-xs text-emerald-400">
                  <Link href="/glossary/public-liability" className="hover:text-emerald-300 underline">Read the full Public Liability guide</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Do Freelancers Need Business Insurance? */}
        <section id="do-freelancers-need-insurance">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white text-sm font-bold">3</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Do Freelancers Need Business Insurance?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              The short answer is <strong className="text-white">yes, almost certainly</strong>. The longer answer depends on your profession, your client requirements, and your risk tolerance. Here is a decision framework to help you determine exactly which insurance you need:
            </p>

            <h3 className="text-lg font-semibold text-white mt-6">Legally Required Insurance</h3>
            <div className="space-y-3 mt-3">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-red-500/20">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center text-red-400 text-xs font-bold">LAW</span>
                <div>
                  <p className="text-white font-medium text-sm">Workers Compensation (WorkCover)</p>
                  <p className="text-gray-400 text-sm">Mandatory if you hire any employees &mdash; including casual, part-time, or temporary workers. No exceptions. Must be in place before the employee&apos;s first day. Penalties for non-compliance exceed $100,000.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-red-500/20">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center text-red-400 text-xs font-bold">LAW</span>
                <div>
                  <p className="text-white font-medium text-sm">Motor Vehicle Insurance</p>
                  <p className="text-gray-400 text-sm">Compulsory Third Party (CTP) is required for all registered vehicles. If you use a vehicle for business purposes, ensure your policy covers business use &mdash; personal-only policies may deny business-related claims.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-red-500/20">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center text-red-400 text-xs font-bold">LAW</span>
                <div>
                  <p className="text-white font-medium text-sm">Professional Indemnity (Regulated Professions)</p>
                  <p className="text-gray-400 text-sm">Certain professions must hold PI insurance by law, including financial advisers (ASIC), builders (state licensing), real estate agents (state licensing), lawyers (Law Societies), and accountants (CPA/CA ANZ).</p>
                </div>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">Contractually Required Insurance</h3>
            <p className="text-gray-300 leading-relaxed">
              Many clients and agencies require proof of insurance before awarding contracts. This is <strong className="text-white">increasingly common and non-negotiable</strong> in the following scenarios:
            </p>
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 mt-3">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-emerald-400 font-medium text-sm mb-2">Professional Indemnity Requirements</p>
                  <ul className="space-y-1 text-sm text-gray-400">
                    <li>Government contracts: $5M&ndash;$20M cover typical</li>
                    <li>Enterprise clients: $2M&ndash;$10M cover typical</li>
                    <li>Recruitment agencies: $5M cover standard</li>
                    <li>Consulting platforms: $1M&ndash;$5M cover</li>
                  </ul>
                </div>
                <div>
                  <p className="text-emerald-400 font-medium text-sm mb-2">Public Liability Requirements</p>
                  <ul className="space-y-1 text-sm text-gray-400">
                    <li>Government contracts: $10M&ndash;$20M cover typical</li>
                    <li>Event venues and sites: $10M&ndash;$20M cover</li>
                    <li>Coworking spaces: $10M cover standard</li>
                    <li>Client offices: $5M&ndash;$10M cover</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">Risk Assessment by Profession</h3>
            <div className="rounded-2xl border border-gray-700/50 overflow-hidden mt-4">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-800/80">
                      <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Profession</th>
                      <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Essential Cover</th>
                      <th className="text-left text-sm font-medium text-gray-300 px-6 py-4 hidden sm:table-cell">Also Consider</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700/50">
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-4 text-white font-medium">Consultants</td>
                      <td className="px-6 py-4 text-sm text-gray-400">PI (essential) + PL</td>
                      <td className="px-6 py-4 text-sm text-gray-400 hidden sm:table-cell">Cyber Liability, Income Protection</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-4 text-white font-medium">Tradies</td>
                      <td className="px-6 py-4 text-sm text-gray-400">PL (essential) + PI</td>
                      <td className="px-6 py-4 text-sm text-gray-400 hidden sm:table-cell">Contents/Equipment, Motor Vehicle</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-4 text-white font-medium">Designers / Developers</td>
                      <td className="px-6 py-4 text-sm text-gray-400">PI + Cyber Liability</td>
                      <td className="px-6 py-4 text-sm text-gray-400 hidden sm:table-cell">PL, Income Protection</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-4 text-white font-medium">Writers / Marketers</td>
                      <td className="px-6 py-4 text-sm text-gray-400">PI</td>
                      <td className="px-6 py-4 text-sm text-gray-400 hidden sm:table-cell">PL, Cyber Liability</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-4 text-white font-medium">Photographers / Videographers</td>
                      <td className="px-6 py-4 text-sm text-gray-400">Contents/Equipment + PL</td>
                      <td className="px-6 py-4 text-sm text-gray-400 hidden sm:table-cell">PI, Motor Vehicle</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">Strongly Recommended for All Freelancers</h3>
            <div className="grid sm:grid-cols-3 gap-4 mt-3">
              <div className="rounded-xl bg-gray-800/50 border border-emerald-500/20 p-5">
                <h4 className="text-emerald-400 font-medium mb-2">PI Insurance</h4>
                <p className="text-gray-400 text-sm">Every service-based freelancer should have PI insurance. At $300&ndash;$700/yr, it protects against claims that could cost $50K+ without cover.</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-emerald-500/20 p-5">
                <h4 className="text-emerald-400 font-medium mb-2">Public Liability</h4>
                <p className="text-gray-400 text-sm">If you ever meet clients, attend events, or leave your home office, PL insurance is essential. $200&ndash;$500/yr for peace of mind.</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-emerald-500/20 p-5">
                <h4 className="text-emerald-400 font-medium mb-2">Income Protection</h4>
                <p className="text-gray-400 text-sm">No employer sick leave means no income if you cannot work. Income Protection replaces 75&ndash;85% of your income during illness or injury.</p>
              </div>
            </div>

            <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-5 mt-6">
              <p className="text-emerald-400 font-medium mb-2">Bottom Line</p>
              <p className="text-gray-400 text-sm">
                At minimum, every Australian freelancer should carry <strong className="text-gray-200">PI + PL insurance</strong>. If you rely on your freelance income as your primary earner and have no employer sick leave, <strong className="text-gray-200">Income Protection</strong> is also strongly recommended. If you work in tech or handle client data, add <strong className="text-gray-200">Cyber Liability</strong>. The total cost for a comprehensive insurance portfolio is typically $800&ndash;$2,000/yr &mdash; fully tax deductible.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Tax Deductions for Business Insurance */}
        <section id="tax-deductions-insurance">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white text-sm font-bold">4</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Tax Deductions for Business Insurance</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              One of the significant advantages of business insurance is that <strong className="text-white">all premiums are 100% tax-deductible</strong> as a business expense under Section 8-1 of the Income Tax Assessment Act 1997 (ITAA 1997). This substantially reduces the effective cost of your insurance portfolio. Here are the key ATO rules you need to know:
            </p>

            <div className="space-y-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <span className="text-emerald-400 font-bold text-sm">1</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">100% Deductible Business Expense</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  All business insurance premiums are fully deductible in the financial year you pay them. This includes Professional Indemnity, Public Liability, Cyber Liability, Business Interruption, Contents/Equipment, and Management Liability insurance. Claim the deduction in your individual tax return under business expenses (sole traders) or company tax return (Pty Ltd).
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <span className="text-emerald-400 font-bold text-sm">2</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Income Protection Is Tax-Deductible</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Income protection insurance premiums are tax-deductible for sole traders and freelancers. This is one of the few <strong className="text-gray-200">personal insurance types that is deductible</strong> &mdash; unlike life insurance, which is generally not deductible. This makes income protection particularly attractive for freelancers who have no employer-provided sick leave or income safety net.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <span className="text-emerald-400 font-bold text-sm">3</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Prepay Before 30 June for Current-Year Deduction</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Under the small business prepayment rules, you can prepay up to 12 months of insurance premiums before 30 June and claim the full deduction in the current financial year. This is a powerful <strong className="text-gray-200">EOFY tax planning strategy</strong> &mdash; if you have a higher-income year, prepaying insurance premiums can reduce your taxable income and shift the deduction into the year where it provides the most benefit.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <span className="text-emerald-400 font-bold text-sm">4</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">GST on Insurance Premiums</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Insurance premiums include GST. If you are registered for GST, you can claim the GST component as an <strong className="text-gray-200">input tax credit on your BAS</strong>. Insurance is a business expense, so the 1/11th GST component is claimable in the same way as any other business purchase. This further reduces your effective cost. Keep your premium notices and tax invoices from your insurer for BAS and audit purposes.
                </p>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">Worked Example: Tax Savings on Insurance</h3>
            <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-6 mt-3">
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-400">Total annual insurance premiums (inc. GST)</span>
                  <span className="text-white font-medium">$2,750.00</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-400">GST input tax credit (1/11th)</span>
                  <span className="text-emerald-400 font-medium">&minus;$250.00</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-400">Net premium (ex. GST)</span>
                  <span className="text-white font-medium">$2,500.00</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-400">Tax deduction at 34.5% marginal rate</span>
                  <span className="text-emerald-400 font-medium">&minus;$862.50</span>
                </div>
                <div className="border-t border-emerald-500/20 pt-3 flex justify-between items-center">
                  <span className="text-white font-semibold">Effective annual cost after tax</span>
                  <span className="text-emerald-400 font-bold text-lg">$1,637.50</span>
                </div>
              </div>
              <p className="text-gray-500 text-xs mt-4">Based on $2,500 net premiums at the $45,001&ndash;$120,000 marginal tax rate of 32.5% + 2% Medicare levy = 34.5%. Your actual savings will depend on your marginal tax rate.</p>
            </div>

            <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-5 mt-6">
              <p className="text-emerald-400 font-medium mb-2">Record-Keeping Requirements</p>
              <p className="text-gray-400 text-sm">
                Keep the following records for ATO audit purposes: <strong className="text-gray-200">premium notices, certificates of currency, payment receipts, and tax invoices from your insurer</strong>. The ATO requires you to retain these records for 5 years from the date you lodge your tax return. InvoiceFlow can help you track and categorise these insurance expenses automatically.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: How to Choose Business Insurance */}
        <section id="how-to-choose">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white text-sm font-bold">5</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">How to Choose Business Insurance</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Choosing the right business insurance does not have to be complicated. Follow this 6-step guide to build the right insurance portfolio for your freelance business:
            </p>

            <div className="space-y-4 mt-6">
              {/* Step 1 */}
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <span className="text-emerald-400 font-bold text-sm">1</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Identify Your Risks</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Start by asking yourself: <strong className="text-gray-200">What could go wrong?</strong> Do you provide advice or services that clients rely on? (PI risk.) Do you meet clients in person or work on their premises? (PL risk.) Do you handle sensitive data? (Cyber risk.) Do you own expensive equipment? (Contents risk.) Do you rely solely on your freelance income with no safety net? (Income Protection risk.) Map your specific risks before shopping for policies.
                </p>
              </div>

              {/* Step 2 */}
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <span className="text-emerald-400 font-bold text-sm">2</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Check Contractual Requirements</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Review your existing client contracts and any agencies or platforms you work through. Many specify <strong className="text-gray-200">minimum cover levels for PI and PL</strong> as a condition of engagement. Government contracts often require $10M&ndash;$20M of PI and PL cover. If your clients require specific insurance, that requirement dictates your minimum cover level &mdash; not your own risk assessment.
                </p>
              </div>

              {/* Step 3 */}
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <span className="text-emerald-400 font-bold text-sm">3</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Check Legal Requirements</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Check whether your profession or state has <strong className="text-gray-200">mandatory insurance requirements</strong>. Financial advisers, builders, real estate agents, lawyers, and accountants all have mandatory PI insurance requirements. If you have employees, WorkCover is non-negotiable. Some state-based licences also require specific insurance as a condition of registration.
                </p>
              </div>

              {/* Step 4 */}
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <span className="text-emerald-400 font-bold text-sm">4</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Get Multiple Quotes</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Always compare quotes from multiple providers. The main channels for Australian freelancer insurance include:
                </p>
                <ul className="mt-2 space-y-1 text-sm text-gray-400 ml-4">
                  <li><strong className="text-gray-200">BizCover</strong> &mdash; Online comparison platform, instant quotes from multiple insurers</li>
                  <li><strong className="text-gray-200">CGU</strong> &mdash; Direct insurer with competitive freelancer packages</li>
                  <li><strong className="text-gray-200">QBE</strong> &mdash; Major Australian insurer with comprehensive business cover</li>
                  <li><strong className="text-gray-200">NRMA Business</strong> &mdash; Well-known for small business insurance packages</li>
                  <li><strong className="text-gray-200">Industry associations</strong> &mdash; Often negotiate 10&ndash;20% discounted group rates for members</li>
                </ul>
              </div>

              {/* Step 5 */}
              <div className="rounded-xl bg-gray-800/50 border border-emerald-500/30 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <span className="text-emerald-400 font-bold text-sm">5</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Review Coverage Limits and Exclusions</h3>
                  <span className="text-xs text-red-400 bg-red-500/10 px-2 py-0.5 rounded-full">Critical</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Always read the <strong className="text-gray-200">Product Disclosure Statement (PDS)</strong> before purchasing. Pay particular attention to exclusions &mdash; make sure your specific type of work is covered. Check the cover limits, excess amounts, and whether the policy is &quot;claims made&quot; or &quot;occurrence based.&quot; A cheap policy with low limits or broad exclusions can be worse than no insurance at all, because it gives you a false sense of security.
                </p>
              </div>

              {/* Step 6 */}
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <span className="text-emerald-400 font-bold text-sm">6</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Bundle for Savings</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Many insurers offer <strong className="text-gray-200">combined PI + PL packages at a 15&ndash;20% discount</strong> compared to buying the policies separately. Some also bundle Cyber Liability into the package. Always compare the bundled price against individual policies to make sure the bundle actually saves you money and does not reduce your cover limits. Bundling also simplifies administration &mdash; one renewal date, one insurer, one claims process.
                </p>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">Common Mistakes to Avoid</h3>
            <div className="grid sm:grid-cols-2 gap-4 mt-3">
              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-5">
                <h4 className="text-red-400 font-medium mb-2 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                  </svg>
                  Under-Insuring
                </h4>
                <p className="text-gray-400 text-sm">Choosing the cheapest policy with the lowest cover level may save $100/yr in premiums but leave you exposed to claims that exceed your cover. Match your cover level to your actual risk.</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-5">
                <h4 className="text-red-400 font-medium mb-2 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                  </svg>
                  Not Reading Exclusions
                </h4>
                <p className="text-gray-400 text-sm">Many freelancers buy insurance without reading the PDS exclusions. Some policies exclude specific activities or industries. If your work is excluded, the policy will not pay out when you need it most.</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-5">
                <h4 className="text-red-400 font-medium mb-2 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                  </svg>
                  Letting Policies Lapse
                </h4>
                <p className="text-gray-400 text-sm">PI insurance is &quot;claims made&quot; &mdash; if you let your policy lapse, you lose protection for past work as well as current work. Maintain continuous cover and set renewal reminders.</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-5">
                <h4 className="text-red-400 font-medium mb-2 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                  </svg>
                  Not Updating Coverage
                </h4>
                <p className="text-gray-400 text-sm">As your business grows, your insurance needs change. If your revenue increases, you take on larger clients, or you start handling more sensitive data, review and update your cover levels annually.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: How InvoiceFlow Helps */}
        <section id="how-invoiceflow-helps">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white text-sm font-bold">6</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">How InvoiceFlow Helps</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              InvoiceFlow helps Australian freelancers manage the administrative side of business insurance &mdash; from tracking premiums as tax-deductible expenses to storing certificates for client compliance.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18v-.008zm-12 0h.008v.008H6v-.008z" />
                    </svg>
                  </div>
                  <h3 className="text-white font-semibold">Track Insurance as a Business Expense</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Record all insurance premiums as tax-deductible business expenses. InvoiceFlow categorises them correctly for your BAS and tax return, ensuring you claim the <strong className="text-gray-200">full deduction and GST input credit</strong> every year.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                  </div>
                  <h3 className="text-white font-semibold">Store Insurance Certificates</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Keep your certificates of currency and policy documents in client records. When a client requests proof of insurance, you can <strong className="text-gray-200">share it instantly</strong> instead of searching through emails and filing cabinets.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
                    </svg>
                  </div>
                  <h3 className="text-white font-semibold">Calculate Net Cost After Tax Deduction</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  See the <strong className="text-gray-200">true after-tax cost</strong> of your insurance portfolio. InvoiceFlow calculates the tax deduction based on your marginal rate, so you can see exactly how much your insurance actually costs after the government effectively subsidises part of it.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
                    </svg>
                  </div>
                  <h3 className="text-white font-semibold">EOFY Insurance Expense Reporting</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  At end of financial year, InvoiceFlow generates a <strong className="text-gray-200">complete insurance expense report</strong> showing all premiums paid, GST components, and deduction amounts. Hand this to your accountant or use it to complete your own tax return with confidence.
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
          <div className="flex flex-wrap gap-2">
            <Link href="/glossary/professional-indemnity" className="px-4 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm hover:bg-emerald-500/20 transition-colors">Professional Indemnity</Link>
            <Link href="/glossary/public-liability" className="px-4 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm hover:bg-emerald-500/20 transition-colors">Public Liability</Link>
            <Link href="/glossary/workers-compensation" className="px-4 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm hover:bg-emerald-500/20 transition-colors">Workers Compensation</Link>
            <Link href="/glossary/business-expenses" className="px-4 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm hover:bg-emerald-500/20 transition-colors">Business Expenses</Link>
            <Link href="/glossary/tax-deduction" className="px-4 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm hover:bg-emerald-500/20 transition-colors">Tax Deduction</Link>
            <Link href="/glossary/business-structure" className="px-4 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm hover:bg-emerald-500/20 transition-colors">Business Structure</Link>
          </div>
        </div>
      </section>

      {/* Related Tools */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-white mb-2 text-center">Related Tools</h2>
        <p className="text-gray-400 text-center mb-8">Free calculators to help you manage insurance costs and tax deductions.</p>
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
        <p className="text-gray-400 text-center mb-8">In-depth guides on tax, pricing, and managing your freelance business.</p>
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
        <div className="rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Protect Your Business, Maximise Your Deductions
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            InvoiceFlow helps freelancers track insurance expenses, store certificates, and claim every tax deduction they are entitled to. Build your insurance costs into your rates and get paid what you&apos;re worth. Start for free &mdash; no accountant required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button>Start Free &mdash; No Card Required</Button>
            </Link>
            <Link href="/tools/tax-deduction-finder">
              <Button variant="secondary">Try the Tax Deduction Finder</Button>
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
