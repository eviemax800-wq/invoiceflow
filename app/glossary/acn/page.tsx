import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'ACN (Australian Company Number): Complete Guide for Freelancers & Business Owners — InvoiceFlow',
  description:
    'What is an ACN in Australia? Learn how the 9-digit Australian Company Number works, ACN vs ABN differences, who needs an ACN, registration costs ($576 Pty Ltd), display requirements, and whether freelancers should incorporate. Updated for 2025-26.',
  keywords: [
    'what is ACN australia',
    'ACN vs ABN',
    'Australian Company Number',
    'do I need an ACN',
    'ACN registration cost',
    'ASIC company registration',
    'ACN vs ABN difference',
    'ACN for freelancers',
    'Pty Ltd registration australia',
    'do sole traders need ACN',
    'ACN display requirements',
    'should I incorporate as a freelancer',
  ],
  alternates: { canonical: '/glossary/acn' },
  openGraph: {
    title: 'ACN (Australian Company Number): Complete Guide for Freelancers & Business Owners — InvoiceFlow',
    description:
      'Everything you need to know about the Australian Company Number: 9-digit ASIC identifier, ACN vs ABN, registration costs, display rules, and whether freelancers should incorporate.',
    url: 'https://invoiceflow-teal.vercel.app/glossary/acn',
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
    { '@type': 'ListItem', position: 3, name: 'ACN', item: `${BASE_URL}/glossary/acn` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the difference between an ACN and an ABN?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An ACN (Australian Company Number) is a unique 9-digit number issued by ASIC to registered companies only. An ABN (Australian Business Number) is an 11-digit number issued by the Australian Business Register (ABR) to all business structures including sole traders, partnerships, trusts, and companies. Companies have both an ACN and an ABN — in fact, the first 9 digits of a company\'s ABN are usually its ACN. Sole traders and partnerships only have an ABN and do not need an ACN.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do sole traders need an ACN?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Sole traders do not need an ACN and cannot get one. The ACN is exclusively for registered companies (Pty Ltd, Ltd, etc.). As a sole trader or freelancer, you only need an ABN (Australian Business Number), which you can apply for free through the Australian Business Register. You would only need an ACN if you decide to incorporate your business as a company.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does it cost to register a company and get an ACN?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Registering a proprietary limited (Pty Ltd) company with ASIC costs $576 as of 2025-26. This is a one-time registration fee that includes your ACN assignment. After registration, you will also need to pay an annual review fee of $310 per year to keep your company registered. Additional costs may include a registered agent fee if you use a third-party service, and you may need to pay for an accountant to set up your company tax return structure.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use my ABN instead of my ACN on invoices?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Under the Corporations Act 2001, companies are required to display their ACN on all public documents, including invoices. However, if the company also has an ABN, the ABN can be displayed instead of the ACN on most documents. Since companies are also required to show their ABN on invoices for GST purposes, displaying the ABN alone typically satisfies both requirements. It is best practice to include both numbers on your invoices for clarity.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I incorporate as a freelancer or stay as a sole trader?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most freelancers should start as sole traders — it is simpler, cheaper, and involves less compliance. Consider incorporating as a Pty Ltd company when: your annual revenue consistently exceeds $200K, you want limited liability protection for personal assets, you want to retain profits in the company at the 25% base rate entity tax rate (vs personal marginal rates up to 47%), you are hiring employees or subcontractors, or you want to attract investors. The trade-offs include higher setup costs ($576 registration), annual ASIC fees ($310), a separate company tax return, director duties, and financial reporting requirements.',
      },
    },
  ],
};

const tocItems = [
  { id: 'what-is-acn', label: '1. What Is an ACN?' },
  { id: 'acn-vs-abn', label: '2. ACN vs ABN: Key Differences' },
  { id: 'who-needs-acn', label: '3. Who Needs an ACN?' },
  { id: 'how-to-get-acn', label: '4. How to Get an ACN' },
  { id: 'display-requirements', label: '5. Where Must You Display Your ACN?' },
  { id: 'acn-for-freelancers', label: '6. ACN for Freelancers: Do You Need to Incorporate?' },
];

const relatedTools = [
  {
    href: '/tools/abn-lookup',
    name: 'ABN Lookup',
    description: 'Verify any Australian Business Number and check GST registration status instantly.',
    icon: (
      <svg className="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
  {
    href: '/tools/tax-estimator',
    name: 'Tax Estimator',
    description: 'Estimate your income tax liability as a sole trader or company director.',
    icon: (
      <svg className="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18v-.008zm-12 0h.008v.008H6v-.008z" />
      </svg>
    ),
  },
  {
    href: '/tools/rate-calculator',
    name: 'Rate Calculator',
    description: 'Calculate your ideal hourly or daily rate whether you operate as a sole trader or company.',
    icon: (
      <svg className="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    href: '/tools/business-registration-checklist',
    name: 'Business Registration Checklist',
    description: 'Step-by-step checklist for registering your business, ABN, ACN, GST, and more.',
    icon: (
      <svg className="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const relatedGuides = [
  {
    href: '/guides/abn-guide',
    name: 'ABN Guide for Freelancers',
    description: 'Everything you need to know about getting and using your Australian Business Number.',
  },
  {
    href: '/guides/tax-guide-freelancers',
    name: 'Tax Guide for Freelancers',
    description: 'Income tax, deductions, BAS, and everything else you need to know as a sole trader.',
  },
  {
    href: '/guides/setting-freelance-rates',
    name: 'Setting Your Freelance Rates',
    description: 'How to calculate profitable rates that cover tax, super, and business costs.',
  },
];

export default function ACNGlossaryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative px-4 pt-20 pb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-rose-500/10 to-red-500/10 blur-3xl" />
        <div className="relative max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/glossary" className="hover:text-white transition-colors">Glossary</Link>
            <span>/</span>
            <span className="text-white">ACN</span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            Glossary &mdash; Business Structure
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Australian Company Number{' '}
            <span className="bg-gradient-to-r from-red-500 to-rose-500 bg-clip-text text-transparent">
              (ACN) Explained
            </span>
          </h1>

          {/* Summary */}
          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            The ACN is a unique 9-digit identifier assigned by ASIC to every registered company in Australia. If you&apos;re a freelancer wondering whether you need one, what it costs, and how it differs from an ABN &mdash; this guide covers everything.
          </p>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>10 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>ASIC-Accurate 2025-26</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
              </svg>
              <span>Updated March 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* In a Nutshell */}
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <div className="rounded-2xl bg-gradient-to-br from-red-500/10 to-rose-500/10 border border-red-500/20 p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-white">In a Nutshell</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center text-red-400 text-xs font-bold">9</span>
              <div>
                <p className="text-white font-medium text-sm">Digits in an ACN</p>
                <p className="text-gray-400 text-sm">Unique identifier assigned by ASIC to every registered company</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center text-red-400 text-xs font-bold">$576</span>
              <div>
                <p className="text-white font-medium text-sm">Pty Ltd Registration</p>
                <p className="text-gray-400 text-sm">One-time ASIC fee to register a proprietary limited company</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center text-red-400 text-xs font-bold">$310</span>
              <div>
                <p className="text-white font-medium text-sm">Annual Review Fee</p>
                <p className="text-gray-400 text-sm">Yearly ASIC fee to maintain your Pty Ltd company registration</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center text-red-400 text-xs font-bold">25%</span>
              <div>
                <p className="text-white font-medium text-sm">Company Tax Rate</p>
                <p className="text-gray-400 text-sm">Base rate entity tax rate for companies with turnover under $50M</p>
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
                className="flex items-center gap-2 text-gray-400 hover:text-red-400 transition-colors text-sm py-1"
              >
                <svg className="w-4 h-4 text-red-500/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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

        {/* Section 1: What Is an ACN? */}
        <section id="what-is-acn">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-rose-500 flex items-center justify-center text-white text-sm font-bold">1</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">What Is an ACN?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              An ACN (Australian Company Number) is a <strong className="text-white">unique 9-digit identifier</strong> assigned by ASIC (Australian Securities and Investments Commission) to every company registered in Australia. Think of it as your company&apos;s fingerprint &mdash; no two companies share the same ACN, and it stays with the company for its entire existence.
            </p>
            <p className="text-gray-300 leading-relaxed">
              The ACN is <strong className="text-white">mandatory for all registered companies</strong> in Australia, including proprietary limited (Pty Ltd) companies, public limited (Ltd) companies, companies limited by guarantee, and no-liability companies. It is assigned automatically at the point of company registration and cannot be changed.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Critically, an ACN is <strong className="text-white">not the same as an ABN</strong>. The ACN identifies you as a registered company under the Corporations Act 2001, while the ABN identifies you as a business entity for tax purposes under the A New Tax System (Australian Business Number) Act 1999. Companies get an ACN at registration and then apply for an ABN separately &mdash; though the process is usually done together and the first 9 digits of a company&apos;s ABN are typically its ACN.
            </p>
            <p className="text-gray-300 leading-relaxed">
              For example, if a company&apos;s ACN is <strong className="text-white">123 456 789</strong>, its ABN would typically be <strong className="text-white">XX 123 456 789</strong>, where the first two digits are a checksum calculated from the remaining nine. This makes it easy to identify a company&apos;s ACN from its ABN by simply removing the first two digits.
            </p>
            <div className="rounded-xl bg-red-500/5 border border-red-500/20 p-5 mt-6">
              <p className="text-red-400 font-medium mb-2">Key Point</p>
              <p className="text-gray-400 text-sm">
                If you&apos;re a <strong className="text-gray-200">freelancer operating as a sole trader</strong>, you do NOT have an ACN and do NOT need one. You only need an ABN. The ACN is exclusively for registered companies. Only consider an ACN if you are incorporating your business as a Pty Ltd or other company structure.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: ACN vs ABN: Key Differences */}
        <section id="acn-vs-abn">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-rose-500 flex items-center justify-center text-white text-sm font-bold">2</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">ACN vs ABN: Key Differences</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              The ACN and ABN are two different numbers that serve different purposes. This is one of the most common points of confusion for people setting up a business in Australia. Here&apos;s a clear side-by-side comparison:
            </p>

            {/* Comparison Table */}
            <div className="rounded-2xl border border-gray-700/50 overflow-hidden mt-6">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-800/80">
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Feature</th>
                    <th className="text-left text-sm font-medium text-red-400 px-6 py-4">ACN</th>
                    <th className="text-left text-sm font-medium text-rose-400 px-6 py-4">ABN</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700/50">
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm font-medium">Full Name</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">Australian Company Number</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">Australian Business Number</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm font-medium">Digits</td>
                    <td className="px-6 py-3 text-red-400 font-medium">9 digits</td>
                    <td className="px-6 py-3 text-rose-400 font-medium">11 digits</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm font-medium">Issued By</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">ASIC</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">Australian Business Register (ABR)</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm font-medium">Who Gets One</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">Registered companies only</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">All business structures</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm font-medium">Purpose</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">Identifies the legal entity</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">Used for tax and invoicing</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm font-medium">Sole Traders</td>
                    <td className="px-6 py-3 text-red-400 text-sm font-medium">Not applicable</td>
                    <td className="px-6 py-3 text-emerald-400 text-sm font-medium">Yes &mdash; required</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm font-medium">Companies</td>
                    <td className="px-6 py-3 text-emerald-400 text-sm font-medium">Yes &mdash; required</td>
                    <td className="px-6 py-3 text-emerald-400 text-sm font-medium">Yes &mdash; also required</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="rounded-xl bg-red-500/5 border border-red-500/20 p-5 mt-6">
              <p className="text-red-400 font-medium mb-2">The Bottom Line</p>
              <p className="text-gray-400 text-sm">
                <strong className="text-gray-200">Companies have BOTH an ACN and an ABN.</strong> Sole traders and partnerships do NOT have an ACN &mdash; they just have an ABN. If you&apos;re a freelancer operating as a sole trader, you only need an ABN. The ABN is what you put on your invoices, tax returns, and BAS statements.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Who Needs an ACN? */}
        <section id="who-needs-acn">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-rose-500 flex items-center justify-center text-white text-sm font-bold">3</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Who Needs an ACN?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              An ACN is exclusively for <strong className="text-white">registered companies</strong>. Not all business structures require one, and most freelancers do NOT need an ACN unless they have specifically incorporated their business.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-emerald-500/20 p-5">
                <h4 className="text-emerald-400 font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Requires an ACN
                </h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>Proprietary limited companies (Pty Ltd)</li>
                  <li>Public companies (Ltd)</li>
                  <li>Companies limited by guarantee</li>
                  <li>No-liability companies</li>
                  <li>Foreign companies registered in Australia (ARBN instead)</li>
                </ul>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-5">
                <h4 className="text-red-400 font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                  </svg>
                  Does NOT Need an ACN
                </h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>Sole traders</li>
                  <li>Partnerships</li>
                  <li>Trusts (unless the trustee is a company)</li>
                  <li>Incorporated associations</li>
                  <li>Government entities</li>
                </ul>
              </div>
            </div>

            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 mt-6">
              <h4 className="text-white font-semibold mb-3">When Should a Freelancer Consider Incorporating?</h4>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Most freelancers start as sole traders because it&apos;s simpler and cheaper. But there are situations where incorporating as a Pty Ltd (and therefore getting an ACN) makes strategic sense:
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="flex items-start gap-2 text-sm text-gray-400">
                  <svg className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                  <span>Personal liability risk is high (professional services, construction, etc.)</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-gray-400">
                  <svg className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                  <span>Annual revenue consistently exceeds $200K+</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-gray-400">
                  <svg className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                  <span>You&apos;re hiring employees or managing multiple contractors</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-gray-400">
                  <svg className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                  <span>You want to attract investors or take on equity partners</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: How to Get an ACN */}
        <section id="how-to-get-acn">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-rose-500 flex items-center justify-center text-white text-sm font-bold">4</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">How to Get an ACN</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              To get an ACN, you need to <strong className="text-white">register a company with ASIC</strong>. This can be done online through the ASIC portal or through a registered agent (such as an accountant or company formation service). Here&apos;s the step-by-step process:
            </p>

            <div className="space-y-4 mt-6">
              {/* Step 1 */}
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <span className="text-red-400 font-bold text-sm">1</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Choose Your Company Name</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Check name availability on the ASIC website. Your company name must be unique and not identical or too similar to an existing registered company. You can also register with your own name (e.g., &quot;John Smith Pty Ltd&quot;) which doesn&apos;t require a name availability check. The name must end with &quot;Pty Ltd&quot; for a proprietary limited company.
                </p>
              </div>

              {/* Step 2 */}
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <span className="text-red-400 font-bold text-sm">2</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Prepare Your Details</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-3">
                  You&apos;ll need the following information to register:
                </p>
                <ul className="space-y-1 text-sm text-gray-400 ml-4">
                  <li>Registered office address (can be your home address)</li>
                  <li>Principal place of business</li>
                  <li>At least one director (must be 18+ and ordinarily reside in Australia)</li>
                  <li>At least one shareholder (can be the same person as the director)</li>
                  <li>Details of all officeholders (name, address, date of birth)</li>
                  <li>Share structure (number of shares, value, distribution)</li>
                </ul>
              </div>

              {/* Step 3 */}
              <div className="rounded-xl bg-gray-800/50 border border-red-500/30 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <span className="text-red-400 font-bold text-sm">3</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Register with ASIC</h3>
                  <span className="text-xs text-red-400 bg-red-500/10 px-2 py-0.5 rounded-full">$576</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Submit your application online via the ASIC portal or through a registered agent. The registration fee for a <strong className="text-gray-200">Pty Ltd company is $576</strong> (2025-26). Your ACN is issued <strong className="text-gray-200">immediately upon registration</strong>. You can also apply for your ABN and TFN at the same time through the Business Registration Service (business.gov.au).
                </p>
              </div>

              {/* Step 4 */}
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <span className="text-red-400 font-bold text-sm">4</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Maintain Your Registration</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  After registration, you must pay an <strong className="text-gray-200">annual review fee of $310/year</strong> for a Pty Ltd company. You must also update ASIC within 28 days of any changes to directors, shareholders, registered office address, or other company details. Failure to pay the annual fee or lodge required documents can result in deregistration.
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-red-500/5 border border-red-500/20 p-5 mt-6">
              <p className="text-red-400 font-medium mb-2">Ongoing Costs</p>
              <p className="text-gray-400 text-sm">
                Beyond the $576 registration and $310/year ASIC fee, a Pty Ltd company also needs its own <strong className="text-gray-200">company tax return</strong> (typically $1,000-$2,500 if using an accountant), and you may need a <strong className="text-gray-200">separate bank account</strong>. Factor in these ongoing compliance costs when deciding whether incorporation makes financial sense for your freelance business.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Where Must You Display Your ACN? */}
        <section id="display-requirements">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-rose-500 flex items-center justify-center text-white text-sm font-bold">5</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Where Must You Display Your ACN?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              The <strong className="text-white">Corporations Act 2001</strong> requires every registered company to display its ACN on a range of documents. Non-compliance can result in fines of <strong className="text-white">up to $1,111 per offence</strong>, so it&apos;s important to get this right from day one.
            </p>

            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 mt-6">
              <h4 className="text-white font-semibold mb-4">Your ACN Must Appear On:</h4>
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="flex items-start gap-2 text-sm text-gray-400">
                  <svg className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>All public documents</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-gray-400">
                  <svg className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Negotiable instruments (cheques)</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-gray-400">
                  <svg className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Contracts and agreements</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-gray-400">
                  <svg className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Invoices and receipts</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-gray-400">
                  <svg className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Letters and correspondence</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-gray-400">
                  <svg className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Publications and marketing materials</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-gray-400">
                  <svg className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Company website</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-gray-400">
                  <svg className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Emails sent on behalf of the company</span>
                </div>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed">
              The ACN must appear in the format <strong className="text-white">&quot;ACN 123 456 789&quot;</strong> or <strong className="text-white">&quot;Australian Company Number 123 456 789&quot;</strong>. Always include the spaces between the digit groups for readability.
            </p>

            <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-5 mt-6">
              <p className="text-emerald-400 font-medium mb-2">ABN Substitution Rule</p>
              <p className="text-gray-400 text-sm">
                If your company has an ABN, you can <strong className="text-gray-200">display your ABN instead of your ACN</strong> on most documents. Since companies registered for GST are already required to show their ABN on tax invoices, displaying the ABN alone typically satisfies both the Corporations Act and the GST requirements. However, best practice is to include both the ACN and ABN on your invoices and contracts for maximum clarity.
              </p>
            </div>

            <div className="rounded-xl bg-red-500/5 border border-red-500/20 p-5 mt-4">
              <p className="text-red-400 font-medium mb-2">Penalty for Non-Compliance</p>
              <p className="text-gray-400 text-sm">
                Failing to display your ACN (or ABN as a substitute) on required documents is an offence under the Corporations Act 2001. The penalty is <strong className="text-gray-200">up to $1,111 per offence</strong>. While ASIC rarely pursues small businesses for this alone, it can become an issue if there are other compliance concerns or if a dispute arises and the other party flags it.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: ACN for Freelancers: Do You Need to Incorporate? */}
        <section id="acn-for-freelancers">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-rose-500 flex items-center justify-center text-white text-sm font-bold">6</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">ACN for Freelancers: Do You Need to Incorporate?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Most freelancers start as <strong className="text-white">sole traders</strong> &mdash; it&apos;s simpler, cheaper, and involves far less compliance. You register for an ABN (free), start invoicing, and report your business income on your personal tax return. No ACN, no ASIC fees, no company tax return.
            </p>
            <p className="text-gray-300 leading-relaxed">
              But as your freelance business grows, there are scenarios where <strong className="text-white">incorporating as a Pty Ltd</strong> (and getting an ACN) becomes the smarter move. Here&apos;s a balanced comparison:
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-emerald-500/20 p-5">
                <h4 className="text-emerald-400 font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Pros of Incorporating (Pty Ltd)
                </h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><strong className="text-gray-200">Limited liability</strong> &mdash; personal assets protected from business debts</li>
                  <li><strong className="text-gray-200">Lower tax rate</strong> &mdash; 25% company tax vs personal marginal rate up to 47%</li>
                  <li><strong className="text-gray-200">Profit retention</strong> &mdash; leave profits in the company at 25% instead of drawing everything</li>
                  <li><strong className="text-gray-200">Easier to sell</strong> &mdash; you can sell shares in a company; you can&apos;t sell a sole tradership</li>
                  <li><strong className="text-gray-200">Professional credibility</strong> &mdash; some enterprise clients prefer engaging with a Pty Ltd</li>
                  <li><strong className="text-gray-200">Investor-ready</strong> &mdash; can issue shares and take on equity partners</li>
                </ul>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-5">
                <h4 className="text-red-400 font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                  Cons of Incorporating
                </h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><strong className="text-gray-200">Setup cost</strong> &mdash; $576 ASIC registration fee</li>
                  <li><strong className="text-gray-200">Annual ASIC fee</strong> &mdash; $310/year to maintain registration</li>
                  <li><strong className="text-gray-200">Separate tax return</strong> &mdash; company needs its own tax return ($1K-$2.5K via accountant)</li>
                  <li><strong className="text-gray-200">Director duties</strong> &mdash; legal obligations under the Corporations Act</li>
                  <li><strong className="text-gray-200">Financial reporting</strong> &mdash; more complex record-keeping requirements</li>
                  <li><strong className="text-gray-200">Money is &quot;trapped&quot;</strong> &mdash; to pay yourself, you need wages or dividends (more admin)</li>
                </ul>
              </div>
            </div>

            {/* Decision Framework */}
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 mt-6">
              <h4 className="text-white font-semibold mb-4">Quick Decision Framework</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-emerald-400 font-bold text-sm flex-shrink-0 mt-0.5">SOLE TRADER</span>
                  <p className="text-gray-400 text-sm">
                    Revenue under $200K, low liability risk, just you (no employees), want simplicity, starting out. <strong className="text-gray-200">Stick with sole trader.</strong> You only need an ABN.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-400 font-bold text-sm flex-shrink-0 mt-0.5">PTY LTD</span>
                  <p className="text-gray-400 text-sm">
                    Revenue over $200K, high liability risk, hiring employees, want to retain profits at 25% tax, planning to sell or take investors. <strong className="text-gray-200">Consider incorporating.</strong> Get an ACN, set up the company structure, and separate your personal and business finances.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-red-500/5 border border-red-500/20 p-5 mt-6">
              <p className="text-red-400 font-medium mb-2">Tax Warning: The 25% Rate Isn&apos;t Always a Win</p>
              <p className="text-gray-400 text-sm">
                The 25% company tax rate sounds attractive compared to personal marginal rates. But remember: money in the company still needs to come out eventually. When you pay yourself <strong className="text-gray-200">dividends</strong>, those are added to your personal taxable income (with a franking credit for tax already paid by the company). The total tax burden across company + personal can end up being very similar to just paying tax as a sole trader. The real benefit of the company structure is <strong className="text-gray-200">timing</strong> &mdash; you can leave profits in the company and defer the personal tax hit to a lower-income year. Speak with an accountant before incorporating purely for tax reasons.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Related Tools */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-white mb-2 text-center">Related Tools</h2>
        <p className="text-gray-400 text-center mb-8">Free tools to help you set up and manage your business structure.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {relatedTools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:border-red-500/50 hover:bg-gray-800/80 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-4">
                {tool.icon}
              </div>
              <h3 className="text-white font-medium mb-2 group-hover:text-red-400 transition-colors">{tool.name}</h3>
              <p className="text-sm text-gray-400">{tool.description}</p>
              <div className="mt-4 text-red-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
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
              className="group p-6 rounded-2xl bg-gray-800/40 border border-gray-700/40 hover:border-red-500/40 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h3 className="text-white font-medium mb-2 group-hover:text-red-400 transition-colors">{guide.name}</h3>
              <p className="text-sm text-gray-400">{guide.description}</p>
              <div className="mt-4 text-red-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
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
              <summary className="flex items-center justify-between cursor-pointer px-6 py-4 text-white font-medium hover:text-red-400 transition-colors">
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
        <div className="rounded-2xl bg-gradient-to-br from-red-500/10 to-rose-500/10 border border-red-500/20 p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Invoice Like a Pro &mdash; ABN or ACN
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Whether you&apos;re a sole trader with an ABN or a company with an ACN, InvoiceFlow makes it easy to create compliant, professional invoices. Auto-fill your business details, calculate GST, and get paid faster.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button>Start Free &mdash; No Card Required</Button>
            </Link>
            <Link href="/tools/abn-lookup">
              <Button variant="secondary">Try the ABN Lookup Tool</Button>
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
