import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Pty Ltd (Proprietary Limited Company): Complete Guide for Freelancers & Sole Traders — InvoiceFlow',
  description:
    'What is a Pty Ltd company in Australia? Learn the meaning of Proprietary Limited, sole trader vs Pty Ltd comparison, registration costs ($576), company tax rate (25%), ongoing compliance, and when freelancers should incorporate. Updated for 2025-26.',
  keywords: [
    'what is Pty Ltd',
    'Pty Ltd meaning australia',
    'sole trader vs Pty Ltd',
    'how to register Pty Ltd australia',
    'Pty Ltd cost',
    'when to go from sole trader to Pty Ltd',
    'Pty Ltd company tax rate',
    'proprietary limited company',
    'Pty Ltd registration ASIC',
    'Pty Ltd vs sole trader tax',
    'Pty Ltd annual fees',
    'freelancer incorporate australia',
  ],
  alternates: { canonical: '/glossary/pty-ltd' },
  openGraph: {
    title: 'Pty Ltd (Proprietary Limited Company): Complete Guide for Freelancers & Sole Traders — InvoiceFlow',
    description:
      'Everything you need to know about Pty Ltd companies in Australia: what it means, sole trader vs Pty Ltd, registration costs, tax rate, compliance, and when to incorporate.',
    url: 'https://invoiceflow-teal.vercel.app/glossary/pty-ltd',
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
    { '@type': 'ListItem', position: 3, name: 'Pty Ltd', item: `${BASE_URL}/glossary/pty-ltd` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does Pty Ltd mean in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pty Ltd stands for Proprietary Limited. "Proprietary" means the company is privately held — it cannot offer shares to the general public and is limited to a maximum of 50 non-employee shareholders. "Limited" means the liability of shareholders is limited to the amount unpaid on their shares. A Pty Ltd company is a separate legal entity from its owners, meaning the company itself can own assets, incur debts, sue and be sued independently of the people who own and run it. It is the most common company structure in Australia, with over 2.9 million registered.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does it cost to set up a Pty Ltd company?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The ASIC registration fee for a Pty Ltd company is $576 (2025-26). This is a one-time fee that covers company registration and your ACN assignment. Beyond the registration fee, you should budget for: an annual ASIC review fee of $310 per year, a company tax return prepared by an accountant ($1,000-$2,500 per year), a separate business bank account, and potentially a registered agent service. If you use a company formation service or accountant to handle the registration, their fees typically range from $500 to $1,500 on top of the ASIC fee.',
      },
    },
    {
      '@type': 'Question',
      name: 'When should a freelancer switch from sole trader to Pty Ltd?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most accountants recommend considering incorporating when your annual revenue consistently exceeds $150K-$200K, when you need asset protection from business liability, when you are hiring employees or subcontractors regularly, when you want to retain profits in the business at the 25% company tax rate instead of paying personal marginal rates up to 47%, or when you want to attract investors or eventually sell the business. However, incorporating too early adds unnecessary cost and complexity. If your revenue is under $100K and you are working solo with low liability risk, staying as a sole trader is almost always the better option. Always speak with an accountant before making the switch.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the tax rate for a Pty Ltd company in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The company tax rate for a base rate entity (aggregated turnover under $50 million) is 25% as of the 2025-26 financial year. This is a flat rate on all company profits, compared to the progressive personal tax rates that range from 0% to 45% plus the 2% Medicare levy. However, the 25% rate only applies to profits retained in the company. When you pay yourself dividends, those are added to your personal taxable income (with a franking credit for company tax already paid). The total tax burden across company and personal returns can be similar to sole trader rates depending on your income level and how much profit you retain in the company.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I be the sole director and shareholder of a Pty Ltd?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Australian law allows a Pty Ltd company to have just one director who is also the sole shareholder. This is the most common structure for freelancers and solo business owners who incorporate. The sole director must be at least 18 years old and ordinarily reside in Australia. You will still need a registered office address (which can be your home address) and a principal place of business. Even as a sole director-shareholder, you must comply with all director duties under the Corporations Act, including acting in good faith, not trading while insolvent, and maintaining proper financial records.',
      },
    },
  ],
};

const tocItems = [
  { id: 'what-is-pty-ltd', label: '1. What Is a Pty Ltd Company?' },
  { id: 'sole-trader-vs-pty-ltd', label: '2. Sole Trader vs Pty Ltd' },
  { id: 'setting-up-pty-ltd', label: '3. Setting Up a Pty Ltd' },
  { id: 'tax-implications', label: '4. Tax Implications of Pty Ltd' },
  { id: 'ongoing-compliance', label: '5. Ongoing Compliance Requirements' },
  { id: 'when-to-incorporate', label: '6. When Should a Freelancer Incorporate?' },
];

const relatedTools = [
  {
    href: '/tools/tax-estimator',
    name: 'Tax Estimator',
    description: 'Compare your tax liability as a sole trader vs Pty Ltd company director.',
    icon: (
      <svg className="w-6 h-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18v-.008zm-12 0h.008v.008H6v-.008z" />
      </svg>
    ),
  },
  {
    href: '/tools/rate-calculator',
    name: 'Rate Calculator',
    description: 'Calculate your ideal hourly or daily rate factoring in company costs and compliance.',
    icon: (
      <svg className="w-6 h-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    href: '/tools/business-registration-checklist',
    name: 'Business Registration Checklist',
    description: 'Step-by-step checklist for registering your Pty Ltd, ABN, GST, and more.',
    icon: (
      <svg className="w-6 h-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    href: '/tools/abn-lookup',
    name: 'ABN Lookup',
    description: 'Verify any Australian Business Number and check GST registration status instantly.',
    icon: (
      <svg className="w-6 h-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
];

const relatedGuides = [
  {
    href: '/guides/tax-guide-freelancers',
    name: 'Tax Guide for Freelancers',
    description: 'Income tax, deductions, BAS, and everything else you need to know as a sole trader or company director.',
  },
  {
    href: '/guides/abn-guide',
    name: 'ABN Guide for Freelancers',
    description: 'Everything you need to know about getting and using your Australian Business Number.',
  },
  {
    href: '/guides/setting-freelance-rates',
    name: 'Setting Your Freelance Rates',
    description: 'How to calculate profitable rates that cover tax, super, and business costs.',
  },
];

export default function PtyLtdGlossaryPage() {
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
            <span className="text-white">Pty Ltd</span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            Glossary &mdash; Business Structure
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Pty Ltd{' '}
            <span className="bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent">
              (Proprietary Limited) Explained
            </span>
          </h1>

          {/* Summary */}
          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            A Pty Ltd is Australia&apos;s most popular company structure &mdash; a separate legal entity that protects your personal assets with limited liability. If you&apos;re a freelancer or sole trader wondering when to incorporate, what it costs, and whether the 25% tax rate is worth it &mdash; this guide covers everything.
          </p>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>12 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>ASIC-Accurate 2025-26</span>
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
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center text-violet-400 text-xs font-bold">$576</span>
              <div>
                <p className="text-white font-medium text-sm">ASIC Registration Fee</p>
                <p className="text-gray-400 text-sm">One-time fee to register a Pty Ltd company with ASIC</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center text-violet-400 text-xs font-bold">25%</span>
              <div>
                <p className="text-white font-medium text-sm">Company Tax Rate</p>
                <p className="text-gray-400 text-sm">Base rate entity tax rate for turnover under $50M</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center text-violet-400 text-xs font-bold">$310</span>
              <div>
                <p className="text-white font-medium text-sm">Annual ASIC Review Fee</p>
                <p className="text-gray-400 text-sm">Yearly fee to maintain your company registration</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center text-violet-400 text-xs font-bold">2.9M</span>
              <div>
                <p className="text-white font-medium text-sm">Registered Companies in AU</p>
                <p className="text-gray-400 text-sm">Pty Ltd is the most common company type in Australia</p>
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

        {/* Section 1: What Is a Pty Ltd Company? */}
        <section id="what-is-pty-ltd">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold">1</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">What Is a Pty Ltd Company?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Pty Ltd stands for <strong className="text-white">Proprietary Limited</strong> &mdash; and the name tells you exactly what it is. <strong className="text-white">&quot;Proprietary&quot;</strong> means the company is privately held: it cannot offer shares to the general public and is limited to a maximum of 50 non-employee shareholders. <strong className="text-white">&quot;Limited&quot;</strong> means the liability of each shareholder is limited to the amount unpaid on their shares &mdash; your personal home, car, and savings are not on the line if the company runs into trouble.
            </p>
            <p className="text-gray-300 leading-relaxed">
              A Pty Ltd company is a <strong className="text-white">separate legal entity</strong> from its owners (shareholders) and the people who run it (directors). This means the company can own property, enter into contracts, sue and be sued, and incur debts &mdash; all independently of you as an individual. If you are the sole director and shareholder, you and the company are still legally distinct entities in the eyes of the law.
            </p>
            <p className="text-gray-300 leading-relaxed">
              It is by far the <strong className="text-white">most common company structure in Australia</strong>, with over 2.9 million registered Pty Ltd companies. From solo freelancers who have incorporated to multi-billion-dollar private enterprises, the Pty Ltd structure covers the full spectrum. It is regulated by ASIC (Australian Securities and Investments Commission) under the <strong className="text-white">Corporations Act 2001</strong>.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Every Pty Ltd company receives an <strong className="text-white">ACN (Australian Company Number)</strong> at registration &mdash; a unique 9-digit identifier &mdash; and must separately apply for an <strong className="text-white">ABN (Australian Business Number)</strong> and <strong className="text-white">TFN (Tax File Number)</strong> for tax purposes. The company name must always end with &quot;Pty Ltd&quot; or &quot;Proprietary Limited&quot; on all official documents.
            </p>
            <div className="rounded-xl bg-violet-500/5 border border-violet-500/20 p-5 mt-6">
              <p className="text-violet-400 font-medium mb-2">Key Point</p>
              <p className="text-gray-400 text-sm">
                A Pty Ltd is <strong className="text-gray-200">not the same as a sole trader who has registered a business name</strong>. A sole trader and their business are the same legal person. A Pty Ltd company is a completely separate legal entity &mdash; it has its own TFN, its own tax return, its own bank account, and its own legal obligations. This separation is what gives you limited liability protection.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Sole Trader vs Pty Ltd */}
        <section id="sole-trader-vs-pty-ltd">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold">2</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Sole Trader vs Pty Ltd</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              This is the most common question freelancers in Australia face: <strong className="text-white">should I stay as a sole trader or incorporate as a Pty Ltd?</strong> The answer depends on your revenue, liability exposure, growth plans, and tolerance for compliance. Here is a comprehensive side-by-side comparison:
            </p>

            {/* Comparison Table */}
            <div className="rounded-2xl border border-gray-700/50 overflow-hidden mt-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-800/80">
                      <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Feature</th>
                      <th className="text-left text-sm font-medium text-violet-400 px-6 py-4">Sole Trader</th>
                      <th className="text-left text-sm font-medium text-purple-400 px-6 py-4">Pty Ltd</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700/50">
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-gray-300 text-sm font-medium">Legal Structure</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">You and the business are the same legal person</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Separate legal entity from you</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-gray-300 text-sm font-medium">Personal Liability</td>
                      <td className="px-6 py-3 text-red-400 text-sm font-medium">Unlimited &mdash; personal assets at risk</td>
                      <td className="px-6 py-3 text-emerald-400 text-sm font-medium">Limited to company assets</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-gray-300 text-sm font-medium">Tax Rate</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Personal marginal rates (0-45% + 2% Medicare)</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Flat 25% company rate (base rate entity)</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-gray-300 text-sm font-medium">Setup Cost</td>
                      <td className="px-6 py-3 text-emerald-400 text-sm font-medium">Free (ABN registration is free)</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">$576 ASIC registration + accountant fees</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-gray-300 text-sm font-medium">Annual Costs</td>
                      <td className="px-6 py-3 text-emerald-400 text-sm font-medium">No government fees</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">$310/yr ASIC + $1K-$2.5K accountant</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-gray-300 text-sm font-medium">Compliance</td>
                      <td className="px-6 py-3 text-emerald-400 text-sm font-medium">Minimal &mdash; personal tax return + BAS</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Company tax return, annual report, director duties</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-gray-300 text-sm font-medium">Asset Protection</td>
                      <td className="px-6 py-3 text-red-400 text-sm font-medium">None &mdash; creditors can pursue personal assets</td>
                      <td className="px-6 py-3 text-emerald-400 text-sm font-medium">Strong &mdash; personal assets generally protected</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-gray-300 text-sm font-medium">Ability to Sell</td>
                      <td className="px-6 py-3 text-red-400 text-sm font-medium">Cannot sell the business easily</td>
                      <td className="px-6 py-3 text-emerald-400 text-sm font-medium">Can sell shares or the whole company</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-gray-300 text-sm font-medium">Professional Credibility</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Fine for most clients</td>
                      <td className="px-6 py-3 text-emerald-400 text-sm font-medium">Preferred by enterprise and government clients</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-gray-300 text-sm font-medium">Raising Capital</td>
                      <td className="px-6 py-3 text-red-400 text-sm font-medium">Cannot issue equity</td>
                      <td className="px-6 py-3 text-emerald-400 text-sm font-medium">Can issue shares to investors</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-gray-300 text-sm font-medium">Paying Yourself</td>
                      <td className="px-6 py-3 text-emerald-400 text-sm font-medium">Take money anytime &mdash; it&apos;s all yours</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Salary or dividends only (Division 7A rules)</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-gray-300 text-sm font-medium">Business Name</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Optional &mdash; can trade under your own name</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Must end with &quot;Pty Ltd&quot; on documents</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="rounded-xl bg-violet-500/5 border border-violet-500/20 p-5 mt-6">
              <p className="text-violet-400 font-medium mb-2">The Key Decision Factors</p>
              <p className="text-gray-400 text-sm">
                The three biggest factors in the sole trader vs Pty Ltd decision are: <strong className="text-gray-200">(1) liability exposure</strong> &mdash; if a client could sue you for significant damages, limited liability is worth the cost; <strong className="text-gray-200">(2) revenue level</strong> &mdash; the higher your income, the more the 25% flat rate matters for profit retention; and <strong className="text-gray-200">(3) growth plans</strong> &mdash; if you plan to hire, take investors, or eventually sell, you need a company structure. For most freelancers earning under $150K with low liability risk, the sole trader structure wins on simplicity and cost.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Setting Up a Pty Ltd */}
        <section id="setting-up-pty-ltd">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold">3</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Setting Up a Pty Ltd</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Registering a Pty Ltd company is straightforward but requires preparation. Here is the step-by-step process, followed by the requirements you need to have in place before you begin.
            </p>

            <div className="space-y-4 mt-6">
              {/* Step 1 */}
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center">
                    <span className="text-violet-400 font-bold text-sm">1</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Choose Your Company Name</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Search the ASIC company name register to check availability. Your name must be unique and not identical or too similar to an existing registered company. It must end with &quot;Pty Ltd&quot; or &quot;Proprietary Limited&quot;. You can also use your personal name (e.g., &quot;Jane Smith Pty Ltd&quot;), which does not require a name availability check. If you want a separate trading name, you can register a business name through ASIC for $39 (1 year) or $92 (3 years).
                </p>
              </div>

              {/* Step 2 */}
              <div className="rounded-xl bg-gray-800/50 border border-violet-500/30 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center">
                    <span className="text-violet-400 font-bold text-sm">2</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Register with ASIC</h3>
                  <span className="text-xs text-violet-400 bg-violet-500/10 px-2 py-0.5 rounded-full">$576</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Submit your application online via the ASIC portal or through a registered agent. The <strong className="text-gray-200">registration fee is $576</strong> (2025-26). You will need to provide your company name, registered office address, principal place of business, details of all directors and shareholders, and the share structure. Your ACN is issued <strong className="text-gray-200">immediately upon registration</strong>. You can also register through a company formation service, which typically charges $500-$1,500 on top of the ASIC fee for a turnkey setup.
                </p>
              </div>

              {/* Step 3 */}
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center">
                    <span className="text-violet-400 font-bold text-sm">3</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Get Your ABN and TFN</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Apply for your company&apos;s ABN (free) through the Australian Business Register. You can do this at the same time as ASIC registration through the Business Registration Service at business.gov.au. Your company also needs its own TFN (Tax File Number) &mdash; this is separate from your personal TFN. The ATO will typically issue the company TFN within 28 days of ABN registration.
                </p>
              </div>

              {/* Step 4 */}
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center">
                    <span className="text-violet-400 font-bold text-sm">4</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Register for GST (if needed)</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  GST registration is <strong className="text-gray-200">mandatory if your company&apos;s turnover is $75K or more</strong> per year, and optional below that threshold. You can register for GST at the same time as your ABN. If you are already GST-registered as a sole trader and are transitioning to a Pty Ltd, you will need to cancel your sole trader GST registration and register the company separately.
                </p>
              </div>

              {/* Step 5 */}
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center">
                    <span className="text-violet-400 font-bold text-sm">5</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Open a Business Bank Account</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  You <strong className="text-gray-200">must have a separate bank account</strong> for your Pty Ltd company. Mixing personal and company funds is a serious compliance issue and can pierce the corporate veil &mdash; meaning you lose the limited liability protection. All four major Australian banks offer business accounts. You will need your ACN, ABN, and company registration documents to open the account.
                </p>
              </div>

              {/* Step 6 */}
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center">
                    <span className="text-violet-400 font-bold text-sm">6</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Set Up Accounting</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Engage an accountant from the start. A Pty Ltd company has significantly more complex accounting requirements than a sole trader. You will need proper bookkeeping software (Xero, MYOB, or QuickBooks), a chart of accounts, BAS lodgement, a company tax return, and potentially payroll if you are paying yourself a salary. Budget <strong className="text-gray-200">$1,000-$2,500 per year</strong> for a basic company tax return prepared by an accountant.
                </p>
              </div>
            </div>

            {/* Requirements box */}
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 mt-6">
              <h4 className="text-white font-semibold mb-4">What You Need Before Registering</h4>
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="flex items-start gap-2 text-sm text-gray-400">
                  <svg className="w-4 h-4 text-violet-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>At least one director aged 18+ who ordinarily resides in Australia</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-gray-400">
                  <svg className="w-4 h-4 text-violet-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>At least one shareholder (can be the same person as the director)</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-gray-400">
                  <svg className="w-4 h-4 text-violet-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>A registered office address in Australia (can be your home)</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-gray-400">
                  <svg className="w-4 h-4 text-violet-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>A share structure (e.g., 100 ordinary shares at $1 each)</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-gray-400">
                  <svg className="w-4 h-4 text-violet-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>A principal place of business address</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-gray-400">
                  <svg className="w-4 h-4 text-violet-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Personal details of all officeholders (full name, DOB, address)</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Tax Implications of Pty Ltd */}
        <section id="tax-implications">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold">4</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Tax Implications of Pty Ltd</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Tax is often the primary reason freelancers consider incorporating. The <strong className="text-white">25% company tax rate</strong> looks attractive compared to personal marginal rates that can climb to 47%. But the reality is more nuanced than just comparing two numbers.
            </p>

            {/* Company Tax Rate */}
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 mt-6">
              <h4 className="text-white font-semibold mb-3">Company Tax Rate: 25% Flat</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                As of 2025-26, the company tax rate for a <strong className="text-gray-200">base rate entity</strong> (aggregated turnover under $50 million and 80% or less of assessable income is base rate entity passive income) is <strong className="text-gray-200">25%</strong>. This is a flat rate applied to all taxable income &mdash; the company pays 25% whether it earns $50,000 or $5,000,000. For most freelancer-run Pty Ltd companies, you will qualify as a base rate entity.
              </p>
            </div>

            {/* Paying Yourself */}
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 mt-4">
              <h4 className="text-white font-semibold mb-3">Paying Yourself: Salary vs Dividends</h4>
              <p className="text-gray-400 text-sm leading-relaxed mb-3">
                Money inside the company is not your money. You cannot simply transfer company funds to your personal account. There are two legitimate ways to pay yourself:
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-violet-400 font-bold text-sm flex-shrink-0 mt-0.5">SALARY</span>
                  <p className="text-gray-400 text-sm">
                    The company pays you a regular wage as an employee. This is a <strong className="text-gray-200">tax deduction for the company</strong> and is taxed at your personal marginal rate. You must run payroll, withhold PAYG tax, pay super guarantee (11.5% in 2025-26), and lodge STP reports.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-400 font-bold text-sm flex-shrink-0 mt-0.5">DIVIDENDS</span>
                  <p className="text-gray-400 text-sm">
                    The company distributes after-tax profits to shareholders. Dividends are <strong className="text-gray-200">not a tax deduction</strong> for the company. They are paid out of profits that have already been taxed at 25%. The dividend is added to your personal taxable income, but you receive a <strong className="text-gray-200">franking credit</strong> for the tax already paid.
                  </p>
                </div>
              </div>
            </div>

            {/* Franking Credits */}
            <div className="rounded-xl bg-violet-500/5 border border-violet-500/20 p-5 mt-4">
              <p className="text-violet-400 font-medium mb-2">Franking Credits Explained</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                When a Pty Ltd company earns $100 profit, it pays $25 in company tax, leaving $75 to distribute as a dividend. When you receive that $75 dividend, you &quot;gross it up&quot; by adding back the $25 franking credit &mdash; so you declare $100 as taxable income on your personal return. You then calculate your personal tax on $100, but receive a <strong className="text-gray-200">$25 credit for tax already paid by the company</strong>. If your marginal rate is 32.5%, you owe $32.50 minus the $25 credit = $7.50 more in personal tax. The total tax paid is $32.50 on $100 &mdash; exactly what you would have paid as a sole trader. The franking system prevents double taxation, but it also means <strong className="text-gray-200">the total tax burden is often similar to sole trader rates</strong>.
              </p>
            </div>

            {/* Division 7A Warning */}
            <div className="rounded-xl bg-red-500/5 border border-red-500/20 p-5 mt-4">
              <p className="text-red-400 font-medium mb-2">Division 7A Warning: You Cannot Just Take Money Out</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                <strong className="text-gray-200">Division 7A</strong> of the Income Tax Assessment Act 1936 prevents company directors and shareholders from accessing company funds without proper documentation. If you withdraw money from the company that is not a salary, dividend, or legitimate loan, the ATO will treat it as a <strong className="text-gray-200">deemed dividend</strong> &mdash; taxed at your marginal rate with no franking credit. This can result in a significantly higher tax bill. All loans from the company to directors must be on a formal loan agreement at the ATO benchmark interest rate with a maximum 7-year repayment term. This is one of the most common mistakes new company directors make.
              </p>
            </div>

            {/* Tax Comparison */}
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 mt-6">
              <h4 className="text-white font-semibold mb-4">Sole Trader vs Pty Ltd: Tax at Different Income Levels</h4>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-700/50">
                      <th className="text-left text-sm font-medium text-gray-300 px-4 py-3">Taxable Income</th>
                      <th className="text-left text-sm font-medium text-violet-400 px-4 py-3">Sole Trader Tax</th>
                      <th className="text-left text-sm font-medium text-purple-400 px-4 py-3">Pty Ltd Retained</th>
                      <th className="text-left text-sm font-medium text-gray-400 px-4 py-3">Benefit</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700/30">
                    <tr>
                      <td className="px-4 py-2 text-gray-300 text-sm">$80,000</td>
                      <td className="px-4 py-2 text-gray-400 text-sm">~$18,067 (22.6%)</td>
                      <td className="px-4 py-2 text-gray-400 text-sm">$20,000 (25%)</td>
                      <td className="px-4 py-2 text-red-400 text-sm">Sole trader wins</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-gray-300 text-sm">$120,000</td>
                      <td className="px-4 py-2 text-gray-400 text-sm">~$31,867 (26.6%)</td>
                      <td className="px-4 py-2 text-gray-400 text-sm">$30,000 (25%)</td>
                      <td className="px-4 py-2 text-emerald-400 text-sm">Pty Ltd slightly better</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-gray-300 text-sm">$200,000</td>
                      <td className="px-4 py-2 text-gray-400 text-sm">~$63,667 (31.8%)</td>
                      <td className="px-4 py-2 text-gray-400 text-sm">$50,000 (25%)</td>
                      <td className="px-4 py-2 text-emerald-400 text-sm">Pty Ltd saves $13.7K</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-gray-300 text-sm">$300,000</td>
                      <td className="px-4 py-2 text-gray-400 text-sm">~$110,667 (36.9%)</td>
                      <td className="px-4 py-2 text-gray-400 text-sm">$75,000 (25%)</td>
                      <td className="px-4 py-2 text-emerald-400 text-sm">Pty Ltd saves $35.7K</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-gray-500 text-xs mt-3">
                * Sole trader rates include Medicare levy. Pty Ltd column shows tax on retained profits only &mdash; does not include personal tax when profits are eventually drawn as salary or dividends. The real benefit is in <strong className="text-gray-400">deferring</strong> the personal tax hit, not eliminating it.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Ongoing Compliance Requirements */}
        <section id="ongoing-compliance">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold">5</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Ongoing Compliance Requirements</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Running a Pty Ltd comes with <strong className="text-white">significantly more compliance obligations</strong> than a sole trader. These are not optional &mdash; failure to comply can result in fines, deregistration, and in serious cases, personal liability for directors.
            </p>

            <div className="space-y-4 mt-6">
              {/* Annual ASIC Fee */}
              <div className="rounded-xl bg-gray-800/50 border border-violet-500/20 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs text-violet-400 bg-violet-500/10 px-2 py-0.5 rounded-full">$310/year</span>
                  <h4 className="text-white font-semibold">Annual ASIC Review Fee</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Every Pty Ltd company must pay an annual review fee of <strong className="text-gray-200">$310</strong> to ASIC. This is due on the anniversary of your company registration each year. ASIC will send you a notice. If you fail to pay within 2 months of the due date, ASIC may begin the process of deregistering your company.
                </p>
              </div>

              {/* Annual Report */}
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <h4 className="text-white font-semibold mb-3">Annual Company Statement</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  ASIC will send you an annual company statement shortly after your review date. You must check the details are correct (directors, shareholders, registered office, share structure) and notify ASIC of any changes within 28 days. If all details are correct, you do not need to take any action beyond paying the annual fee.
                </p>
              </div>

              {/* Company Tax Return */}
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <h4 className="text-white font-semibold mb-3">Company Tax Return</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Your Pty Ltd company must lodge a <strong className="text-gray-200">separate company tax return</strong> with the ATO each financial year. This is in addition to your personal tax return. The company return includes financial statements (profit &amp; loss, balance sheet), a tax calculation, and reconciliation items. Most freelancers engage an accountant for this &mdash; expect to pay <strong className="text-gray-200">$1,000 to $2,500</strong> depending on complexity. The due date is typically 28 February for companies that use a tax agent (15 January if self-lodging).
                </p>
              </div>

              {/* Director Duties */}
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <h4 className="text-white font-semibold mb-3">Director Duties Under the Corporations Act</h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-3">
                  As a director, you have <strong className="text-gray-200">legally enforceable duties</strong> under the Corporations Act 2001. These are not suggestions &mdash; breaching them can result in personal fines up to $200,000 or criminal prosecution:
                </p>
                <ul className="space-y-2 text-sm text-gray-400 ml-4">
                  <li><strong className="text-gray-200">Act in good faith</strong> and in the best interests of the company</li>
                  <li><strong className="text-gray-200">Act for a proper purpose</strong> &mdash; not for personal benefit at the company&apos;s expense</li>
                  <li><strong className="text-gray-200">Not trade while insolvent</strong> &mdash; do not incur debts the company cannot pay (this is the big one)</li>
                  <li><strong className="text-gray-200">Exercise care and diligence</strong> in decision-making</li>
                  <li><strong className="text-gray-200">Avoid conflicts of interest</strong> and disclose any material personal interests</li>
                  <li><strong className="text-gray-200">Prevent insolvent trading</strong> &mdash; you can be held personally liable for debts if you allow the company to trade while insolvent</li>
                </ul>
              </div>

              {/* Record Keeping */}
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <h4 className="text-white font-semibold mb-3">Record Keeping</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  A Pty Ltd company must maintain <strong className="text-gray-200">financial records for at least 7 years</strong> that correctly record and explain its transactions, financial position, and performance. You must also keep a register of members (shareholders), a register of officeholders (directors and secretaries), minutes of directors&apos; meetings and resolutions, and copies of all ASIC lodgements. These records must be kept in English and be accessible within Australia.
                </p>
              </div>
            </div>

            {/* What happens if you don't comply */}
            <div className="rounded-xl bg-red-500/5 border border-red-500/20 p-5 mt-6">
              <p className="text-red-400 font-medium mb-2">What Happens If You Don&apos;t Comply?</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                ASIC takes compliance seriously. Consequences include: <strong className="text-gray-200">late fees and penalties</strong> for missed lodgements, <strong className="text-gray-200">deregistration</strong> if annual fees are not paid (your company ceases to exist and its assets vest in ASIC), <strong className="text-gray-200">personal liability</strong> for directors who breach their duties (including for insolvent trading), and <strong className="text-gray-200">director ID disqualification</strong> in serious cases, which prevents you from being a director of any company. If your Pty Ltd is deregistered, you personally become liable for any outstanding company debts.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: When Should a Freelancer Incorporate? */}
        <section id="when-to-incorporate">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold">6</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">When Should a Freelancer Incorporate?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              There is no magic number that tells you exactly when to switch from sole trader to Pty Ltd. But after working with thousands of Australian freelancers, here are the <strong className="text-white">common triggers and thresholds</strong> that signal it is time to have the conversation.
            </p>

            {/* Revenue Thresholds */}
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 mt-6">
              <h4 className="text-white font-semibold mb-4">Revenue Thresholds</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-emerald-400 font-bold text-sm flex-shrink-0 mt-0.5">UNDER $100K</span>
                  <p className="text-gray-400 text-sm">
                    <strong className="text-gray-200">Stay as a sole trader.</strong> The compliance costs and complexity of a Pty Ltd will eat into your margins. Your personal marginal rate is likely in the 19-32.5% range, which is close to or below the 25% company rate anyway.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 font-bold text-sm flex-shrink-0 mt-0.5">$100K-$150K</span>
                  <p className="text-gray-400 text-sm">
                    <strong className="text-gray-200">Start thinking about it.</strong> At this level, the tax benefit is marginal, but if you have liability concerns or growth plans, it may be worth the switch. Talk to your accountant about the numbers specific to your situation.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-violet-400 font-bold text-sm flex-shrink-0 mt-0.5">$150K-$200K+</span>
                  <p className="text-gray-400 text-sm">
                    <strong className="text-gray-200">Seriously consider incorporating.</strong> Your personal marginal rate is now 37-45%, well above the 25% company rate. The ability to retain profits in the company and control the timing of your personal income becomes a significant advantage.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-400 font-bold text-sm flex-shrink-0 mt-0.5">$200K+</span>
                  <p className="text-gray-400 text-sm">
                    <strong className="text-gray-200">You should almost certainly be operating through a Pty Ltd.</strong> The tax deferral benefits, asset protection, and professional structure justify the compliance costs many times over. If you are not incorporated at this level, you are likely paying more tax than necessary.
                  </p>
                </div>
              </div>
            </div>

            {/* Other triggers */}
            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-emerald-500/20 p-5">
                <h4 className="text-emerald-400 font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Signs You Should Incorporate
                </h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>Revenue consistently above $150K-$200K</li>
                  <li>You work in a high-liability field (consulting, professional services, construction)</li>
                  <li>You are hiring employees or managing subcontractors</li>
                  <li>Enterprise clients require you to be a Pty Ltd</li>
                  <li>You want to retain profits and control income timing</li>
                  <li>You plan to bring on partners or investors</li>
                  <li>You want to eventually sell the business</li>
                </ul>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-5">
                <h4 className="text-red-400 font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                  Common Mistakes
                </h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><strong className="text-gray-200">Incorporating too early</strong> &mdash; spending $576 + $310/yr + accountant fees when you earn $60K is a net loss</li>
                  <li><strong className="text-gray-200">Not understanding director duties</strong> &mdash; personal liability for insolvent trading is real</li>
                  <li><strong className="text-gray-200">Mixing personal and company funds</strong> &mdash; destroys your limited liability protection</li>
                  <li><strong className="text-gray-200">Ignoring Division 7A</strong> &mdash; treating company money as your own triggers harsh tax penalties</li>
                  <li><strong className="text-gray-200">Doing it for the &quot;look&quot;</strong> &mdash; Pty Ltd sounds professional but is not worth it if the numbers do not justify it</li>
                  <li><strong className="text-gray-200">Not engaging an accountant</strong> &mdash; DIY company tax returns are a recipe for ATO trouble</li>
                </ul>
              </div>
            </div>

            {/* The Accountant Test */}
            <div className="rounded-xl bg-violet-500/5 border border-violet-500/20 p-5 mt-6">
              <p className="text-violet-400 font-medium mb-2">The Accountant Test</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Before you incorporate, <strong className="text-gray-200">talk to your accountant</strong>. Not a Reddit thread, not a friend who has a Pty Ltd, not a company formation service that profits from you registering. A good accountant will model your specific situation &mdash; your revenue, your deductions, your personal tax position, your growth plans &mdash; and tell you whether incorporation will actually save you money after factoring in all the compliance costs. In many cases, they will recommend waiting. A one-hour consultation ($200-$400) can save you thousands in unnecessary costs or, conversely, thousands in tax you should not be paying.
              </p>
            </div>

            {/* Decision Framework */}
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 mt-6">
              <h4 className="text-white font-semibold mb-4">Quick Decision Framework</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-emerald-400 font-bold text-sm flex-shrink-0 mt-0.5">SOLE TRADER</span>
                  <p className="text-gray-400 text-sm">
                    Revenue under $150K, low liability risk, just you (no employees), want simplicity, starting out or testing a business idea. <strong className="text-gray-200">Stick with sole trader.</strong> Get an ABN, lodge your tax return, and focus on growing the business.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-violet-400 font-bold text-sm flex-shrink-0 mt-0.5">PTY LTD</span>
                  <p className="text-gray-400 text-sm">
                    Revenue over $150K-$200K, high liability risk, hiring staff, want to retain profits at 25%, planning to sell or take on investors, enterprise clients require it. <strong className="text-gray-200">Incorporate.</strong> Set up properly with an accountant from day one.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Related Tools */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-white mb-2 text-center">Related Tools</h2>
        <p className="text-gray-400 text-center mb-8">Free tools to help you decide on and manage your business structure.</p>
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
        <p className="text-gray-400 text-center mb-8">In-depth guides on business setup, tax, and freelancing in Australia.</p>
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
            Invoice Like a Pro &mdash; Sole Trader or Pty Ltd
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Whether you&apos;re a sole trader with an ABN or a Pty Ltd with an ACN, InvoiceFlow makes it easy to create compliant, professional invoices. Auto-fill your business details, calculate GST, and get paid faster.
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
