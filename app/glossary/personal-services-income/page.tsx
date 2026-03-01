import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Personal Services Income (PSI): Rules, Tests & Deductions for Freelancers (Australia) — InvoiceFlow',
  description:
    'What is Personal Services Income (PSI) in Australia? Learn the ATO PSI rules, the 80% rule, 4 PSB tests, restricted deductions, and how it affects freelancers and sole traders. Updated for 2025-26.',
  keywords: [
    'personal services income ATO',
    'PSI rules sole trader',
    'personal services income test',
    'PSI freelancer australia',
    'personal services income definition',
    'PSI 80% rule',
    'personal services income deductions',
    'PSI entity test',
    'personal services business determination',
    'what is PSI australia',
  ],
  alternates: { canonical: '/glossary/personal-services-income' },
  openGraph: {
    title: 'Personal Services Income (PSI): Rules, Tests & Deductions for Freelancers (Australia) — InvoiceFlow',
    description:
      'Everything Australian freelancers need to know about Personal Services Income (PSI): the 80% rule, PSB tests, restricted deductions, ATO compliance, and how InvoiceFlow helps track PSI.',
    url: 'https://invoiceflow-teal.vercel.app/glossary/personal-services-income',
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
    { '@type': 'ListItem', position: 3, name: 'Personal Services Income', item: `${BASE_URL}/glossary/personal-services-income` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the 80% rule for personal services income?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If 80% or more of your PSI from each client is for your labour, skills, or expertise (not from tools, equipment, or generating goodwill), it is classified as personal services income. The results test can override this classification — if you pass the results test, the PSI rules do not apply even if more than 80% of income is from your personal effort.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I get a Personal Services Business Determination from the ATO?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, you can apply for a PSB determination if you meet at least one of the four PSB tests. A determination lasts for a specified period and gives you certainty about your PSI status. Apply via the ATO\'s online services. This is especially useful if your situation is borderline or you want to avoid the risk of an incorrect self-assessment.',
      },
    },
    {
      '@type': 'Question',
      name: 'What deductions are restricted under PSI rules?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If your income is PSI and you are NOT a PSB, you cannot claim: rent or mortgage interest on your home, expenses for a home office that are not directly related to earning your income, payments to associates (spouse or family members), and certain other expenses normally available to businesses. You are essentially limited to the deductions an employee would get.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do the PSI rules affect my GST obligations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, PSI rules only affect income tax and the deductions you can claim. Your GST obligations remain the same regardless of whether your income is classified as PSI. You still need to register for GST if your turnover exceeds $75,000 and charge GST on your services.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I know if I am a Personal Services Business (PSB)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You are a PSB if you pass at least ONE of the four PSB tests: (1) Results test — you are paid to produce a specific result, you provide your own tools and equipment, and you are liable for defects or rectification. (2) Unrelated clients test — you receive 80% or more of PSI from clients obtained through advertising or tendering. (3) Employment test — you employ others for 20% or more of the principal work. (4) Business premises test — you maintain separate business premises exclusively for your work.',
      },
    },
  ],
};

const tocItems = [
  { id: 'what-is-psi', label: '1. What Is Personal Services Income?' },
  { id: 'the-four-psb-tests', label: '2. The Four PSB Tests' },
  { id: 'restricted-deductions', label: '3. Restricted Deductions Under PSI' },
  { id: 'psi-for-freelancers', label: '4. PSI for Freelancers: Practical Scenarios' },
  { id: 'ato-compliance', label: '5. ATO Compliance & Record Keeping' },
  { id: 'how-invoiceflow-helps', label: '6. How InvoiceFlow Helps' },
];

const relatedTools = [
  {
    href: '/tools/tax-estimator',
    name: 'Tax Estimator',
    description: 'Estimate your income tax with PSI rules factored in.',
    icon: (
      <svg className="w-6 h-6 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18v-.008zm-12 0h.008v.008H6v-.008z" />
      </svg>
    ),
  },
  {
    href: '/tools/freelance-tax-estimator',
    name: 'Freelance Tax Estimator',
    description: 'All-in-one tax calculator for sole traders covering PSI-affected deductions.',
    icon: (
      <svg className="w-6 h-6 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    href: '/tools/contractor-employee-calculator',
    name: 'Contractor vs Employee Calculator',
    description: 'Determine whether you\'re a contractor or employee — closely related to PSI classification.',
    icon: (
      <svg className="w-6 h-6 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
  {
    href: '/tools/tax-deduction-finder',
    name: 'Tax Deduction Finder',
    description: 'Find which deductions you can claim — PSI restrictions affect your eligible claims.',
    icon: (
      <svg className="w-6 h-6 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
];

const relatedGuides = [
  {
    href: '/guides/tax-guide-freelancers',
    name: 'Tax Guide for Freelancers',
    description: 'Complete guide to income tax, deductions, PSI rules, and PAYG for Australian sole traders.',
  },
  {
    href: '/guides/sole-trader-guide',
    name: 'Sole Trader Guide',
    description: 'Everything you need to know about operating as a sole trader in Australia, including PSI considerations.',
  },
  {
    href: '/guides/contractor-guide',
    name: 'Contractor Guide',
    description: 'How to operate as an independent contractor, understand PSI classification, and maximise your deductions.',
  },
];

export default function PersonalServicesIncomeGlossaryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative px-4 pt-20 pb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-rose-500/10 via-pink-500/10 to-rose-500/10 blur-3xl" />
        <div className="relative max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/glossary" className="hover:text-white transition-colors">Glossary</Link>
            <span>/</span>
            <span className="text-white">Personal Services Income</span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            Glossary &mdash; Tax Classification
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Personal Services Income{' '}
            <span className="bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">
              for Freelancers
            </span>
          </h1>

          {/* Summary */}
          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            Income that is mainly a reward for your personal effort, skills, or expertise &mdash; not from selling goods, using assets, or building business goodwill. The ATO&apos;s PSI rules restrict which deductions you can claim unless you qualify as a Personal Services Business (PSB). Here&apos;s everything Australian freelancers need to know.
          </p>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>14 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>ATO-Accurate 2025-26</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
              </svg>
              <span>Updated March 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* In a Nutshell */}
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <div className="rounded-2xl bg-gradient-to-br from-rose-500/10 to-pink-500/10 border border-rose-500/20 p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-rose-500/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-white">In a Nutshell</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-rose-500/20 flex items-center justify-center text-rose-400 text-xs font-bold">80%</span>
              <div>
                <p className="text-white font-medium text-sm">The PSI Threshold</p>
                <p className="text-gray-400 text-sm">If 80%+ of income from a contract is for your labour, skills, or expertise &mdash; it&apos;s PSI</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-rose-500/20 flex items-center justify-center text-rose-400 text-xs font-bold">4</span>
              <div>
                <p className="text-white font-medium text-sm">PSB Tests</p>
                <p className="text-gray-400 text-sm">Pass at least one of four tests to escape PSI deduction restrictions</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-rose-500/20 flex items-center justify-center text-rose-400 text-xs font-bold">Div 85-87</span>
              <div>
                <p className="text-white font-medium text-sm">ITAA 1997 Divisions</p>
                <p className="text-gray-400 text-sm">The legislative divisions governing PSI rules and PSB determinations</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-rose-500/20 flex items-center justify-center text-rose-400 text-xs font-bold">~1.1M</span>
              <div>
                <p className="text-white font-medium text-sm">Affected Workers</p>
                <p className="text-gray-400 text-sm">Estimated number of Australian workers whose income is affected by PSI rules</p>
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
                className="flex items-center gap-2 text-gray-400 hover:text-rose-400 transition-colors text-sm py-1"
              >
                <svg className="w-4 h-4 text-rose-500/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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

        {/* Section 1: What Is Personal Services Income? */}
        <section id="what-is-psi">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center text-white text-sm font-bold">1</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">What Is Personal Services Income?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Personal Services Income (PSI) is income that is <strong className="text-white">mainly a reward for your personal effort, skills, or expertise</strong> rather than income generated from selling goods, using business assets, or building goodwill. If someone is paying you primarily because of what you personally do &mdash; rather than what your business produces independently of you &mdash; that income is likely PSI.
            </p>
            <p className="text-gray-300 leading-relaxed">
              The PSI rules are contained in <strong className="text-white">Part IIA of the Income Tax Assessment Act 1936</strong> and <strong className="text-white">Divisions 85, 86, and 87 of the Income Tax Assessment Act 1997</strong>. These provisions were introduced to prevent individuals from diverting their personal services income through companies, partnerships, or trusts to gain a tax advantage &mdash; such as splitting income with a lower-earning spouse or claiming deductions that wouldn&apos;t be available to an employee.
            </p>
            <p className="text-gray-300 leading-relaxed">
              The <strong className="text-white">80% rule</strong> is the primary test: if 80% or more of the income you receive from a contract is for your labour, skills, or expertise (as opposed to income from supplying tools, equipment, or generating goodwill), that income is classified as PSI. This applies regardless of your business structure &mdash; whether you operate as an individual, through a company, partnership, or trust.
            </p>
            <p className="text-gray-300 leading-relaxed">
              If your income IS classified as PSI and you do NOT qualify as a <strong className="text-white">Personal Services Business (PSB)</strong>, the PSI rules restrict the deductions you can claim. Essentially, you are treated more like an employee for tax purposes &mdash; you can only claim deductions that an employee in a similar role could claim. This is the critical distinction that every freelancer needs to understand.
            </p>
            <div className="rounded-xl bg-rose-500/5 border border-rose-500/20 p-5 mt-6">
              <p className="text-rose-400 font-medium mb-2">Key Distinction</p>
              <p className="text-gray-400 text-sm">
                Having PSI doesn&apos;t automatically mean restricted deductions. It&apos;s a two-step test: <strong className="text-gray-200">(1) Is your income PSI?</strong> and <strong className="text-gray-200">(2) Are you a Personal Services Business?</strong> If you answer yes to both, the PSI restrictions do NOT apply &mdash; you can claim the full range of business deductions. The restrictions only kick in when your income is PSI and you fail all four PSB tests.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: The Four PSB Tests */}
        <section id="the-four-psb-tests">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center text-white text-sm font-bold">2</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">The Four PSB Tests</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              If your income is PSI, you can still avoid the deduction restrictions by qualifying as a <strong className="text-white">Personal Services Business (PSB)</strong>. You need to pass <strong className="text-white">at least ONE</strong> of the following four tests. If you pass any single test, you are treated as a PSB and the PSI deduction restrictions do not apply.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              {/* Test 1 */}
              <div className="rounded-xl bg-gray-800/50 border border-rose-500/20 p-5">
                <h4 className="text-rose-400 font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  1. Results Test (Most Common)
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  You must satisfy <strong className="text-gray-200">ALL three conditions</strong>: (a) You are paid to produce a specific result or outcome, (b) You provide your own tools or equipment to do the work, and (c) You are liable for the cost of rectifying any defects in your work. This is the test most freelancers rely on &mdash; if you deliver projects with defined deliverables using your own gear and stand behind your work, you likely pass.
                </p>
              </div>

              {/* Test 2 */}
              <div className="rounded-xl bg-gray-800/50 border border-rose-500/20 p-5">
                <h4 className="text-rose-400 font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>
                  2. Unrelated Clients Test
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  You receive <strong className="text-gray-200">80% or more of your PSI</strong> from clients you obtained through making offers or invitations (advertising, tendering, quoting) to the public or a section of the public. The clients must be unrelated to you and not obtained through a single broker or staffing agency arrangement.
                </p>
              </div>

              {/* Test 3 */}
              <div className="rounded-xl bg-gray-800/50 border border-rose-500/20 p-5">
                <h4 className="text-rose-400 font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                  </svg>
                  3. Employment Test
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  You engage <strong className="text-gray-200">apprentices or employees who perform at least 20%</strong> of the principal work (the substantive, billable work &mdash; not admin, bookkeeping, or support tasks). Subcontractors can count, but only if they are genuinely performing the principal work that generates your PSI.
                </p>
              </div>

              {/* Test 4 */}
              <div className="rounded-xl bg-gray-800/50 border border-rose-500/20 p-5">
                <h4 className="text-rose-400 font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                  </svg>
                  4. Business Premises Test
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  You maintain and use business premises that are <strong className="text-gray-200">separate from your home</strong>, used exclusively for your work, and not shared with (or provided by) your clients. A co-working space you lease independently can qualify, but a desk at your client&apos;s office does not.
                </p>
              </div>
            </div>

            {/* Comparison Table */}
            <div className="rounded-2xl border border-gray-700/50 overflow-hidden mt-6">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-800/80">
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">PSB Test</th>
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Requirements</th>
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Example</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700/50">
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">Results Test</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">Paid for a result + own tools + liable for defects (all 3)</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">Web developer paid per project, uses own laptop, fixes bugs at own cost</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">Unrelated Clients</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">80%+ PSI from clients obtained via advertising/tendering</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">Marketing consultant who wins clients through their website and proposals</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">Employment Test</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">Employees/apprentices do 20%+ of principal work</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">Design agency owner who employs a junior designer handling 25% of client work</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">Business Premises</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">Separate premises, exclusive use, not at client&apos;s site</td>
                    <td className="px-6 py-4 text-rose-400 font-medium text-sm">Photographer who leases a dedicated studio space separate from home</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="rounded-xl bg-rose-500/5 border border-rose-500/20 p-5 mt-6">
              <p className="text-rose-400 font-medium mb-2">Important</p>
              <p className="text-gray-400 text-sm">
                You only need to pass <strong className="text-gray-200">ONE test</strong> to be classified as a PSB. If you pass any single test, you can claim the full range of business deductions &mdash; the PSI restrictions do not apply. If you&apos;re unsure whether you qualify, you can apply to the ATO for a <strong className="text-gray-200">Personal Services Business Determination</strong> for certainty.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Restricted Deductions Under PSI */}
        <section id="restricted-deductions">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center text-white text-sm font-bold">3</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Restricted Deductions Under PSI</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              If your income is PSI and you do NOT qualify as a PSB, the ATO restricts the deductions you can claim. Essentially, you are treated like an employee &mdash; you can only claim deductions that would be available to an employee performing similar work. Here&apos;s what changes.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              {/* Restricted */}
              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-5">
                <h4 className="text-red-400 font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                  </svg>
                  Restricted (Cannot Claim)
                </h4>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">&#x2717;</span>
                    <span>Rent on premises used for work (including home office rent)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">&#x2717;</span>
                    <span>Mortgage interest on your home</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">&#x2717;</span>
                    <span>Payments to associates (spouse, family members) for services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">&#x2717;</span>
                    <span>Depreciation on assets used at home for work</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">&#x2717;</span>
                    <span>Home office expenses beyond the ATO&apos;s fixed-rate method for employees</span>
                  </li>
                </ul>
              </div>

              {/* Still Allowed */}
              <div className="rounded-xl bg-gray-800/50 border border-green-500/20 p-5">
                <h4 className="text-green-400 font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Still Allowed (Can Claim)
                </h4>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">&#x2713;</span>
                    <span>Work-related software and subscriptions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">&#x2713;</span>
                    <span>Equipment and tools used for work (laptop, phone)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">&#x2713;</span>
                    <span>Professional development and training courses</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">&#x2713;</span>
                    <span>Travel to client sites</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">&#x2713;</span>
                    <span>Professional indemnity and public liability insurance</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Detailed Comparison Table */}
            <div className="rounded-2xl border border-gray-700/50 overflow-hidden mt-6">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-800/80">
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Deduction Type</th>
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">PSB (Can Claim)</th>
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Non-PSB with PSI</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700/50">
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">Home office rent / mortgage interest</td>
                    <td className="px-6 py-4 text-green-400 text-sm font-medium">Yes &mdash; proportional claim</td>
                    <td className="px-6 py-4 text-red-400 text-sm font-medium">No &mdash; restricted</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">Payments to associates (family)</td>
                    <td className="px-6 py-4 text-green-400 text-sm font-medium">Yes &mdash; if arm&apos;s length</td>
                    <td className="px-6 py-4 text-red-400 text-sm font-medium">No &mdash; restricted</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">Depreciation (home office assets)</td>
                    <td className="px-6 py-4 text-green-400 text-sm font-medium">Yes &mdash; business proportion</td>
                    <td className="px-6 py-4 text-red-400 text-sm font-medium">No &mdash; restricted</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">Software &amp; subscriptions</td>
                    <td className="px-6 py-4 text-green-400 text-sm font-medium">Yes</td>
                    <td className="px-6 py-4 text-green-400 text-sm font-medium">Yes &mdash; if work-related</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">Equipment (laptop, phone, tools)</td>
                    <td className="px-6 py-4 text-green-400 text-sm font-medium">Yes</td>
                    <td className="px-6 py-4 text-green-400 text-sm font-medium">Yes &mdash; if work-related</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">Professional development</td>
                    <td className="px-6 py-4 text-green-400 text-sm font-medium">Yes</td>
                    <td className="px-6 py-4 text-green-400 text-sm font-medium">Yes &mdash; if directly related</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">Travel to client sites</td>
                    <td className="px-6 py-4 text-green-400 text-sm font-medium">Yes</td>
                    <td className="px-6 py-4 text-green-400 text-sm font-medium">Yes &mdash; same as employee</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">Insurance premiums</td>
                    <td className="px-6 py-4 text-green-400 text-sm font-medium">Yes</td>
                    <td className="px-6 py-4 text-green-400 text-sm font-medium">Yes &mdash; professional indemnity</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">Advertising &amp; marketing</td>
                    <td className="px-6 py-4 text-green-400 text-sm font-medium">Yes</td>
                    <td className="px-6 py-4 text-red-400 text-sm font-medium">No &mdash; restricted</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">Income splitting to family trust/company</td>
                    <td className="px-6 py-4 text-green-400 text-sm font-medium">Yes &mdash; standard distribution</td>
                    <td className="px-6 py-4 text-red-400 text-sm font-medium">No &mdash; PSI attributed back to individual</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="rounded-xl bg-rose-500/5 border border-rose-500/20 p-5 mt-6">
              <p className="text-rose-400 font-medium mb-2">Bottom Line</p>
              <p className="text-gray-400 text-sm">
                The PSI deduction restrictions can <strong className="text-gray-200">significantly increase your tax liability</strong> compared to operating as a PSB. If you&apos;re a freelancer earning PSI, it&apos;s worth structuring your contracts and business operations to satisfy at least one PSB test &mdash; particularly the results test, which is the most accessible for most freelancers.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: PSI for Freelancers: Practical Scenarios */}
        <section id="psi-for-freelancers">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center text-white text-sm font-bold">4</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">PSI for Freelancers: Practical Scenarios</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              PSI classification can be confusing in theory. These four real-world scenarios show how the rules apply to different types of freelancers &mdash; and whether they qualify as a PSB or face restricted deductions.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              {/* Scenario 1 */}
              <div className="rounded-xl bg-gray-800/50 border border-rose-500/20 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-green-400 text-xs font-bold uppercase tracking-wider">Passes &mdash; PSB</span>
                </div>
                <h4 className="text-white font-semibold mb-2">Web Developer (Results Test)</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Sarah is a freelance web developer. She is paid per project to build websites with defined deliverables, uses her own MacBook and software, and her contracts include a clause requiring her to fix bugs at her own cost. She <strong className="text-gray-200">passes the results test</strong> on all three conditions and is classified as a PSB &mdash; full business deductions available.
                </p>
              </div>

              {/* Scenario 2 */}
              <div className="rounded-xl bg-gray-800/50 border border-rose-500/20 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                    </svg>
                  </div>
                  <span className="text-red-400 text-xs font-bold uppercase tracking-wider">Fails &mdash; PSI Restricted</span>
                </div>
                <h4 className="text-white font-semibold mb-2">Casual Office Worker via Agency</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Mark works as a casual admin worker placed by a recruitment agency. He is paid hourly (no specific result), uses the client&apos;s equipment, and the agency bears responsibility for quality. He works at the client&apos;s premises and has no other clients. He <strong className="text-gray-200">fails all four PSB tests</strong> &mdash; his income is PSI with restricted deductions.
                </p>
              </div>

              {/* Scenario 3 */}
              <div className="rounded-xl bg-gray-800/50 border border-rose-500/20 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-green-400 text-xs font-bold uppercase tracking-wider">Passes &mdash; PSB</span>
                </div>
                <h4 className="text-white font-semibold mb-2">Marketing Consultant with Employees</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Priya runs a marketing consultancy through a company. She employs two part-time content writers who handle approximately 30% of the client deliverables. Even though her income is PSI, she <strong className="text-gray-200">passes the employment test</strong> because her employees perform more than 20% of the principal work. Full business deductions apply.
                </p>
              </div>

              {/* Scenario 4 */}
              <div className="rounded-xl bg-gray-800/50 border border-rose-500/20 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                    </svg>
                  </div>
                  <span className="text-red-400 text-xs font-bold uppercase tracking-wider">Fails &mdash; PSI Restricted</span>
                </div>
                <h4 className="text-white font-semibold mb-2">Graphic Designer (Single Client, Home Office)</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  James is a graphic designer who works exclusively for one agency from his home office. He is paid hourly, the agency provides art direction, and he doesn&apos;t advertise for other clients. He works from home (no separate premises) and has no employees. He <strong className="text-gray-200">fails all four PSB tests</strong> &mdash; restricted deductions apply, and he cannot claim home office rent or payments to his spouse.
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-rose-500/5 border border-rose-500/20 p-5 mt-6">
              <p className="text-rose-400 font-medium mb-2">Freelancer Tip</p>
              <p className="text-gray-400 text-sm">
                If you&apos;re currently failing all PSB tests, consider <strong className="text-gray-200">restructuring your contracts to include specific deliverables</strong> rather than hourly rates, ensuring your contracts include a defect rectification clause, and using your own tools. These changes can help you pass the results test and unlock the full range of business deductions.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: ATO Compliance & Record Keeping */}
        <section id="ato-compliance">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center text-white text-sm font-bold">5</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">ATO Compliance &amp; Record Keeping</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              The ATO takes PSI classification seriously. Incorrect treatment can result in penalties, amended assessments, and interest charges. Here&apos;s what you need to know about staying compliant.
            </p>

            <div className="space-y-4 mt-6">
              {/* Compliance Item 1 */}
              <div className="rounded-xl bg-gray-800/50 border border-rose-500/20 p-5">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Tax Return Reporting (Item 14)</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      If your income is PSI, you must report it at <strong className="text-gray-200">Item 14 on your individual tax return</strong>. Even if you earn PSI through a company, partnership, or trust, the income must be attributed back to you as the individual who performed the services. The entity cannot retain your PSI or distribute it to other people.
                    </p>
                  </div>
                </div>
              </div>

              {/* Compliance Item 2 */}
              <div className="rounded-xl bg-gray-800/50 border border-rose-500/20 p-5">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">ATO Audits &amp; PSI Classification</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      The ATO actively audits PSI classification. They look for individuals who are <strong className="text-gray-200">claiming business deductions without meeting PSB tests</strong>, or who are diverting PSI through entities to reduce tax. Keep thorough evidence that you meet at least one PSB test, including contracts, invoices, and correspondence showing result-based engagements.
                    </p>
                  </div>
                </div>
              </div>

              {/* Compliance Item 3 */}
              <div className="rounded-xl bg-gray-800/50 border border-rose-500/20 p-5">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Entity Attribution Rules</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      If you operate through a <strong className="text-gray-200">company, partnership, or trust</strong> and your income is PSI (without PSB status), the PSI must be attributed back to you as the individual. The entity cannot retain PSI, pay it to associates as salary, or distribute it through the trust. This prevents income splitting &mdash; one of the primary targets of the PSI legislation.
                    </p>
                  </div>
                </div>
              </div>

              {/* Compliance Item 4 */}
              <div className="rounded-xl bg-gray-800/50 border border-rose-500/20 p-5">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Records You Must Keep</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      To support your PSB classification, maintain these records: <strong className="text-gray-200">contracts showing result-based engagement</strong> (not hourly), evidence of multiple unrelated clients (for unrelated clients test), employee records showing principal work performed (for employment test), business premises lease agreements (for premises test), and all invoices showing specific deliverables rather than time-based billing.
                    </p>
                  </div>
                </div>
              </div>

              {/* Compliance Item 5 */}
              <div className="rounded-xl bg-gray-800/50 border border-rose-500/20 p-5">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Penalties for Incorrect PSI Treatment</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      If the ATO determines you have incorrectly claimed deductions under PSI rules, penalties can include: <strong className="text-gray-200">amended tax assessments</strong> for prior years, shortfall interest charges (currently the base interest rate plus 3%), administrative penalties of 25% to 75% of the shortfall amount depending on the level of culpability, and in serious cases, prosecution for tax fraud.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: How InvoiceFlow Helps */}
        <section id="how-invoiceflow-helps">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center text-white text-sm font-bold">6</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">How InvoiceFlow Helps</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              InvoiceFlow is built specifically for Australian freelancers navigating the complexities of PSI rules. Here&apos;s how it helps you stay compliant and maximise your eligible deductions.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-rose-500/20 p-5">
                <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">Client Diversity Tracking</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Monitor what percentage of your income comes from each client. InvoiceFlow automatically calculates your client concentration &mdash; critical for the 80% rule and the unrelated clients test. Get alerts when a single client exceeds dangerous thresholds.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-rose-500/20 p-5">
                <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">Results-Based Invoice Templates</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Structure your invoices to clearly show deliverables and results rather than hours worked. InvoiceFlow&apos;s templates are designed to help you demonstrate the results test &mdash; listing specific outcomes, milestones, and deliverables that support your PSB classification.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-rose-500/20 p-5">
                <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">PSI Reporting Dashboard</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  See a clear breakdown of your PSI vs non-PSI income at a glance. InvoiceFlow analyses your invoices and contracts to flag which income streams are likely PSI, helping you prepare for tax time and identify where you might need to restructure your arrangements.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-rose-500/20 p-5">
                <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">Deduction Tracking</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Flag restricted vs allowed deductions based on your PSI status. InvoiceFlow knows which deductions are available to PSB operators vs non-PSB earners, and warns you before you claim something that could trigger an ATO audit.
                </p>
              </div>
            </div>

            {/* Bonus Feature */}
            <div className="rounded-xl bg-rose-500/5 border border-rose-500/20 p-5 mt-6">
              <p className="text-rose-400 font-medium mb-2">PSB Test Evidence Builder</p>
              <p className="text-gray-400 text-sm">
                InvoiceFlow automatically compiles evidence for your PSB tests based on your invoicing data. It tracks <strong className="text-gray-200">client diversity, deliverable-based billing, and contractor payments</strong> &mdash; giving you a ready-made evidence pack if the ATO ever questions your PSB classification.
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
              { href: '/glossary/contractor-vs-employee', label: 'Contractor vs Employee' },
              { href: '/glossary/income-tax', label: 'Income Tax' },
              { href: '/glossary/tax-deduction', label: 'Tax Deduction' },
              { href: '/glossary/sole-trader', label: 'Sole Trader' },
              { href: '/glossary/business-structure', label: 'Business Structure' },
              { href: '/glossary/tax-agent', label: 'Tax Agent' },
            ].map((term) => (
              <Link
                key={term.href}
                href={term.href}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gray-700/30 border border-gray-600/30 text-gray-300 text-sm hover:border-rose-500/40 hover:text-rose-400 transition-all"
              >
                <svg className="w-3.5 h-3.5 text-rose-500/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
        <p className="text-gray-400 text-center mb-8">Free calculators to help you navigate PSI rules and maximise your eligible deductions.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {relatedTools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:border-rose-500/50 hover:bg-gray-800/80 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center mb-4">
                {tool.icon}
              </div>
              <h3 className="text-white font-medium mb-2 group-hover:text-rose-400 transition-colors">{tool.name}</h3>
              <p className="text-sm text-gray-400">{tool.description}</p>
              <div className="mt-4 text-rose-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
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
        <p className="text-gray-400 text-center mb-8">In-depth guides on tax classification, deductions, and business structure for Australian freelancers.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {relatedGuides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group p-6 rounded-2xl bg-gray-800/40 border border-gray-700/40 hover:border-rose-500/40 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h3 className="text-white font-medium mb-2 group-hover:text-rose-400 transition-colors">{guide.name}</h3>
              <p className="text-sm text-gray-400">{guide.description}</p>
              <div className="mt-4 text-rose-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
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
              <summary className="flex items-center justify-between cursor-pointer px-6 py-4 text-white font-medium hover:text-rose-400 transition-colors">
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
        <div className="rounded-2xl bg-gradient-to-br from-rose-500/10 to-pink-500/10 border border-rose-500/20 p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Navigate PSI Rules with Confidence
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            InvoiceFlow helps Australian freelancers track client diversity, structure results-based invoices, and identify restricted deductions &mdash; so you stay ATO-compliant and keep more of what you earn. Start for free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button>Start Free &mdash; No Card Required</Button>
            </Link>
            <Link href="/tools/tax-deduction-finder">
              <Button variant="secondary">Try the Deduction Finder</Button>
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
