import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Partnership: Structure, Tax, Registration & Pros/Cons for Australian Freelancers — InvoiceFlow',
  description:
    'What is a partnership in Australia? Learn how partnerships work, tax obligations, registration requirements, partnership agreements, and whether a partnership is right for your freelance business. Updated 2025-26.',
  keywords: [
    'partnership business structure australia',
    'partnership vs sole trader',
    'partnership tax australia',
    'how to set up a partnership australia',
    'partnership agreement template',
    'general partnership australia',
    'limited partnership australia',
    'partnership ABN registration',
    'partnership TFN',
    'partnership pros and cons australia',
  ],
  alternates: { canonical: '/glossary/partnership' },
  openGraph: {
    title: 'Partnership: Structure, Tax, Registration & Pros/Cons for Australian Freelancers — InvoiceFlow',
    description:
      'Everything Australian freelancers need to know about partnerships: structure types, tax obligations, registration steps, partnership agreements, pros and cons, and how InvoiceFlow helps manage partnership invoicing.',
    url: 'https://invoiceflow-teal.vercel.app/glossary/partnership',
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
    { '@type': 'ListItem', position: 3, name: 'Partnership', item: `${BASE_URL}/glossary/partnership` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Does a partnership need its own ABN and TFN?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. A partnership is a separate entity for ABN and TFN purposes. You must apply for a partnership ABN through the Australian Business Register (ABR) and a partnership TFN through the ATO. Each partner also keeps their individual TFN. The partnership ABN is used on invoices and for GST purposes, while the partnership TFN is used for the partnership tax return.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is a partnership taxed in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "A partnership itself does not pay income tax. Instead, the partnership lodges a partnership tax return showing total income and expenses, then the net income (or loss) is distributed to each partner according to their partnership agreement. Each partner then includes their share of the partnership income in their individual tax return and pays tax at their personal marginal tax rate. This is called 'flow-through' taxation.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between a general and limited partnership?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In a general partnership, all partners share equal management rights and unlimited personal liability for partnership debts. In a limited partnership (governed by state legislation), there must be at least one general partner with unlimited liability, while limited partners have liability capped at their capital contribution but cannot participate in management. Limited partnerships are less common for freelancers and more typical in investment structures.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a written partnership agreement?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'While not legally required in Australia, a written partnership agreement is strongly recommended. Without one, the Partnership Act of your state/territory applies default rules that may not suit your arrangement. Key items to cover: profit/loss sharing ratios, capital contributions, decision-making authority, dispute resolution, exit/retirement procedures, and what happens if a partner becomes incapacitated or dies. Many partnership disputes arise from verbal-only agreements.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can a partnership register for GST?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes, and it must register if the partnership's annual turnover is $75,000 or more (or $150,000 for non-profit partnerships). The partnership registers for GST using its partnership ABN. GST is reported on the partnership's BAS, not on individual partner returns. One partner is usually nominated as the 'public officer' responsible for GST and BAS lodgement.",
      },
    },
  ],
};

const tocItems = [
  { id: 'what-is-partnership', label: '1. What Is a Partnership?' },
  { id: 'types-of-partnerships', label: '2. Types of Partnerships in Australia' },
  { id: 'setting-up', label: '3. Setting Up a Partnership' },
  { id: 'tax-obligations', label: '4. Tax Obligations' },
  { id: 'pros-and-cons', label: '5. Pros & Cons for Freelancers' },
  { id: 'how-invoiceflow-helps', label: '6. How InvoiceFlow Helps' },
];

const relatedTools = [
  {
    href: '/tools/business-registration-checklist',
    name: 'Business Registration Checklist',
    description: 'Step-by-step checklist for registering a partnership, including ABN, TFN, GST, and business name.',
    icon: (
      <svg className="w-6 h-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    href: '/tools/tax-estimator',
    name: 'Tax Estimator',
    description: 'Estimate each partner\'s individual tax liability based on their share of partnership income.',
    icon: (
      <svg className="w-6 h-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18v-.008zm-12 0h.008v.008H6v-.008z" />
      </svg>
    ),
  },
  {
    href: '/tools/freelance-tax-estimator',
    name: 'Freelance Tax Estimator',
    description: 'All-in-one tax calculator covering income tax, Medicare levy, super, and PAYG for partnership income.',
    icon: (
      <svg className="w-6 h-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    href: '/tools/profit-loss-statement-generator',
    name: 'P&L Generator',
    description: 'Generate profit and loss statements for partnerships showing income distribution per partner.',
    icon: (
      <svg className="w-6 h-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
];

const relatedGuides = [
  {
    href: '/guides/business-structure-guide',
    name: 'Business Structure Guide',
    description: 'Compare sole trader, partnership, company, and trust structures to find the right fit for your business.',
  },
  {
    href: '/guides/tax-guide-freelancers',
    name: 'Tax Guide for Freelancers',
    description: 'Complete guide to income tax, deductions, accounting methods, and PAYG for sole traders and partnerships.',
  },
  {
    href: '/guides/sole-trader-guide',
    name: 'Sole Trader Guide',
    description: 'Everything you need to know about operating as a sole trader and when to consider a partnership instead.',
  },
];

export default function PartnershipGlossaryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative px-4 pt-20 pb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 via-cyan-500/10 to-teal-500/10 blur-3xl" />
        <div className="relative max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/glossary" className="hover:text-white transition-colors">Glossary</Link>
            <span>/</span>
            <span className="text-white">Partnership</span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            Glossary &mdash; Business Structures
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Partnership{' '}
            <span className="bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">
              for Freelancers
            </span>
          </h1>

          {/* Summary */}
          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            A business structure where two or more people carry on a business together with a view to profit. Partnerships offer shared resources and flow-through taxation, but come with joint liability. Here&apos;s everything Australian freelancers need to know about setting up, running, and managing a partnership.
          </p>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>14 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>ATO-Accurate 2025-26</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
              </svg>
              <span>Updated March 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* In a Nutshell */}
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <div className="rounded-2xl bg-gradient-to-br from-teal-500/10 to-cyan-500/10 border border-teal-500/20 p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-teal-500/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-white">In a Nutshell</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-teal-500/20 flex items-center justify-center text-teal-400 text-xs font-bold">2-20</span>
              <div>
                <p className="text-white font-medium text-sm">Partners Allowed</p>
                <p className="text-gray-400 text-sm">Partners allowed in a general partnership &mdash; some professions like lawyers and accountants allow more</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-teal-500/20 flex items-center justify-center text-teal-400 text-[7px] font-bold leading-none text-center">Flow</span>
              <div>
                <p className="text-white font-medium text-sm">Flow-Through Taxation</p>
                <p className="text-gray-400 text-sm">Tax treatment &mdash; partnership income flows to individual partner tax returns</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-teal-500/20 flex items-center justify-center text-teal-400 text-xs font-bold">Joint</span>
              <div>
                <p className="text-white font-medium text-sm">Joint Liability</p>
                <p className="text-gray-400 text-sm">Each partner is personally liable for ALL partnership debts</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-teal-500/20 flex items-center justify-center text-teal-400 text-[7px] font-bold leading-none text-center">ABN</span>
              <div>
                <p className="text-white font-medium text-sm">ABN + TFN Required</p>
                <p className="text-gray-400 text-sm">A partnership needs its own ABN and TFN, separate from partners&apos; individual numbers</p>
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
                className="flex items-center gap-2 text-gray-400 hover:text-teal-400 transition-colors text-sm py-1"
              >
                <svg className="w-4 h-4 text-teal-500/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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

        {/* Section 1: What Is a Partnership? */}
        <section id="what-is-partnership">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center text-white text-sm font-bold">1</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">What Is a Partnership?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              A partnership is a business structure where <strong className="text-white">two or more people (up to 20, or 100+ for certain professions like lawyers, accountants, and medical practitioners) carry on a business together with a view to profit</strong>. It is one of the most common business structures in Australia for freelancers and small businesses who want to pool their skills, resources, and capital.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Partnerships are governed by Partnership Acts in each state and territory. For example, Victoria operates under the <strong className="text-white">Partnership Act 1958 (VIC)</strong>, while New South Wales uses the <strong className="text-white">Partnership Act 1892 (NSW)</strong>. These acts define default rules for how partnerships operate, including profit sharing, decision-making, and dissolution &mdash; which apply unless overridden by a written partnership agreement.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Critically, a partnership is <strong className="text-white">NOT a separate legal entity</strong>. Unlike a Pty Ltd company, a partnership cannot own property or enter contracts in its own name. Instead, the partners themselves are the legal actors. This means each partner is <strong className="text-white">jointly and severally liable</strong> for all partnership debts &mdash; if the partnership owes $100,000, creditors can pursue any individual partner for the full amount, regardless of their ownership share.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Each partner is also an <strong className="text-white">agent of the partnership</strong>, meaning any partner can bind the entire partnership to contracts and legal obligations. If one partner signs a lease or accepts a project, all partners are legally bound by that commitment. This is why choosing the right business partners and having a clear agreement in place is essential.
            </p>
            <div className="rounded-xl bg-teal-500/5 border border-teal-500/20 p-5 mt-6">
              <p className="text-teal-400 font-medium mb-2">Key Distinction</p>
              <p className="text-gray-400 text-sm">
                Unlike a company (Pty Ltd), a partnership has <strong className="text-gray-200">no separate legal existence from its partners</strong>. However, it is treated as a separate entity for tax purposes &mdash; it has its own ABN, TFN, and must lodge its own partnership tax return. The partnership itself does not pay income tax; instead, profits flow through to individual partners.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Types of Partnerships in Australia */}
        <section id="types-of-partnerships">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center text-white text-sm font-bold">2</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Types of Partnerships in Australia</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Australia recognises three main types of partnership structures. The right choice depends on your risk tolerance, the roles each partner will play, and whether you need to attract passive investors. Here&apos;s a detailed comparison.
            </p>

            {/* Comparison Table */}
            <div className="rounded-2xl border border-gray-700/50 overflow-hidden mt-6">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-800/80">
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Aspect</th>
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">General Partnership</th>
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Limited Partnership</th>
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Incorporated Limited Partnership (ILP)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700/50">
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">Who Uses It</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">Freelancers, consultants, small businesses</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">Investment structures, professional firms</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">Venture capital, managed funds</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">Liability</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">All partners &mdash; unlimited personal liability</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">General partners: unlimited. Limited partners: capped at capital contribution</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">Limited partners: corporate-style protection</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">Management Rights</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">All partners can manage equally</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">Only general partners manage; limited partners cannot</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">Only general partners manage</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">Registration</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">ABN + business name (ASIC) &mdash; no state registration required</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">Must register with state/territory authority</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">Must register with state/territory authority</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">Typical Cost</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">$39&ndash;$92 (business name) + agreement drafting</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">$200&ndash;$500+ (state registration fees vary)</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">$500+ (higher registration and compliance costs)</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">Best For</td>
                    <td className="px-6 py-4 text-teal-400 font-medium text-sm">Most freelancer partnerships</td>
                    <td className="px-6 py-4 text-teal-400 font-medium text-sm">Partnerships with passive investors</td>
                    <td className="px-6 py-4 text-teal-400 font-medium text-sm">VC and managed investment schemes</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="rounded-xl bg-teal-500/5 border border-teal-500/20 p-5 mt-6">
              <p className="text-teal-400 font-medium mb-2">Freelancer Tip</p>
              <p className="text-gray-400 text-sm">
                For most freelancer partnerships, a <strong className="text-gray-200">general partnership</strong> is the simplest and most cost-effective option. Limited partnerships and ILPs are more complex, expensive, and designed for investment structures &mdash; they are rarely necessary for service-based freelance businesses.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Setting Up a Partnership */}
        <section id="setting-up">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center text-white text-sm font-bold">3</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Setting Up a Partnership</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Setting up a partnership in Australia involves several key steps, from choosing the right partners to registering with the ATO. Follow this checklist to ensure you cover all the essentials.
            </p>

            {/* Numbered Checklist */}
            <div className="space-y-3 mt-6">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-teal-500/20 flex items-center justify-center text-teal-400 text-sm font-bold">1</span>
                <div>
                  <p className="text-white font-medium">Choose your partners carefully</p>
                  <p className="text-gray-400 text-sm">Look for complementary skills, aligned values, and compatible working styles. Remember &mdash; each partner can bind the entire partnership to contracts.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-teal-500/20 flex items-center justify-center text-teal-400 text-sm font-bold">2</span>
                <div>
                  <p className="text-white font-medium">Draft a partnership agreement</p>
                  <p className="text-gray-400 text-sm">Cover profit sharing, capital contributions, decision-making authority, dispute resolution, and exit procedures. A lawyer can draft this for $500&ndash;$2,000.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-teal-500/20 flex items-center justify-center text-teal-400 text-sm font-bold">3</span>
                <div>
                  <p className="text-white font-medium">Apply for a partnership ABN via ABR</p>
                  <p className="text-gray-400 text-sm">Free to apply online at abr.gov.au. The partnership ABN is used on all invoices and for GST registration.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-teal-500/20 flex items-center justify-center text-teal-400 text-sm font-bold">4</span>
                <div>
                  <p className="text-white font-medium">Apply for a partnership TFN via ATO</p>
                  <p className="text-gray-400 text-sm">Required for the partnership tax return. Apply online through the ATO or via your registered tax agent.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-teal-500/20 flex items-center justify-center text-teal-400 text-sm font-bold">5</span>
                <div>
                  <p className="text-white font-medium">Register for GST if turnover will exceed $75K</p>
                  <p className="text-gray-400 text-sm">Mandatory once the partnership&apos;s annual turnover hits $75,000 (or $150,000 for non-profit). Voluntary registration is available below this threshold.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-teal-500/20 flex items-center justify-center text-teal-400 text-sm font-bold">6</span>
                <div>
                  <p className="text-white font-medium">Register a business name with ASIC</p>
                  <p className="text-gray-400 text-sm">$39 for 1 year or $92 for 3 years. Required if you trade under a name other than the partners&apos; own names.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-teal-500/20 flex items-center justify-center text-teal-400 text-sm font-bold">7</span>
                <div>
                  <p className="text-white font-medium">Open a partnership bank account</p>
                  <p className="text-gray-400 text-sm">Keep partnership finances separate from personal accounts. Most banks require the partnership ABN and agreement to open a joint business account.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-teal-500/20 flex items-center justify-center text-teal-400 text-sm font-bold">8</span>
                <div>
                  <p className="text-white font-medium">Set up bookkeeping and accounting systems</p>
                  <p className="text-gray-400 text-sm">Use invoicing and accounting software that tracks income per partner, expenses, and GST. InvoiceFlow handles all of this for partnership structures.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-teal-500/20 flex items-center justify-center text-teal-400 text-sm font-bold">9</span>
                <div>
                  <p className="text-white font-medium">Consider insurance</p>
                  <p className="text-gray-400 text-sm">Professional indemnity (PI), public liability (PL), and partner insurance (key person cover) are all worth considering given the shared liability nature of partnerships.</p>
                </div>
              </div>
            </div>

            {/* Key Partnership Agreement Clauses Table */}
            <h3 className="text-xl font-bold text-white mt-10 mb-4">Key Partnership Agreement Clauses</h3>
            <div className="rounded-2xl border border-gray-700/50 overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-800/80">
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Clause</th>
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">What It Covers</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700/50">
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">Profit &amp; Loss Sharing</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">How net income and losses are split between partners (e.g., 50/50, 60/40, or based on capital)</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">Capital Contributions</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">How much each partner invests upfront, and rules for additional capital calls</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">Decision-Making</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">Voting rights, authority levels (who can sign contracts, approve expenses over certain amounts)</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">Roles &amp; Responsibilities</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">Each partner&apos;s duties, expected time commitment, and areas of authority</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">Drawings &amp; Salaries</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">How and when partners can take money out of the business (regular drawings, salary components)</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">Dispute Resolution</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">Process for resolving disagreements &mdash; mediation, arbitration, or agreed escalation path</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">Exit &amp; Retirement</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">How a partner can leave, notice periods, buyout valuation method, non-compete clauses</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">Incapacity &amp; Death</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">What happens if a partner becomes unable to work or passes away &mdash; buy-sell agreements, insurance</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">Admission of New Partners</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">Process for bringing in new partners, capital requirements, approval thresholds</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">Dissolution</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">How the partnership winds up, asset distribution, settling debts, and final accounting</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section 4: Tax Obligations */}
        <section id="tax-obligations">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center text-white text-sm font-bold">4</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Tax Obligations</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Partnership taxation in Australia follows a <strong className="text-white">&quot;flow-through&quot; model</strong> &mdash; the partnership itself does not pay income tax. Instead, the partnership lodges a tax return showing total income and expenses, and the net income is distributed to each partner who then pays tax at their individual marginal rate.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              {/* Partnership Tax Return */}
              <div className="rounded-xl bg-gray-800/50 border border-teal-500/20 p-5">
                <h4 className="text-teal-400 font-semibold mb-3">Partnership Tax Return</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  The partnership must lodge a <strong className="text-gray-200">partnership tax return</strong> by 31 October each year (or later if using a registered tax agent). This return shows total partnership income, deductions, and how the net income or loss is distributed among partners. The partnership uses its own TFN for this return.
                </p>
              </div>

              {/* Income Distribution */}
              <div className="rounded-xl bg-gray-800/50 border border-teal-500/20 p-5">
                <h4 className="text-teal-400 font-semibold mb-3">Income Distribution</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Partnership income is allocated to each partner <strong className="text-gray-200">according to the partnership agreement</strong>, not necessarily equally. If the agreement says 60/40, that&apos;s how income flows through. Each partner reports their share on their individual tax return and pays tax at their personal marginal rate.
                </p>
              </div>

              {/* GST & BAS */}
              <div className="rounded-xl bg-gray-800/50 border border-teal-500/20 p-5">
                <h4 className="text-teal-400 font-semibold mb-3">GST &amp; BAS</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  The partnership registers for GST using its own ABN and <strong className="text-gray-200">lodges BAS as a single entity</strong>. GST is reported on the partnership&apos;s BAS, not on individual partner returns. The partnership claims input tax credits (ITCs) for GST paid on business expenses. One partner is usually nominated as the &quot;public officer&quot; responsible for BAS lodgement.
                </p>
              </div>

              {/* PAYG */}
              <div className="rounded-xl bg-gray-800/50 border border-teal-500/20 p-5">
                <h4 className="text-teal-400 font-semibold mb-3">PAYG Instalments</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  The partnership may be required to pay <strong className="text-gray-200">PAYG instalments</strong> if the ATO determines it should. Additionally, individual partners may receive PAYG instalment notices based on their share of partnership income. If the partnership employs staff, it must also withhold PAYG from employee wages.
                </p>
              </div>

              {/* Super */}
              <div className="rounded-xl bg-gray-800/50 border border-teal-500/20 p-5">
                <h4 className="text-teal-400 font-semibold mb-3">Superannuation</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Partners are <strong className="text-gray-200">not employees of the partnership</strong> &mdash; there is no super guarantee obligation for partners to pay super for each other. However, partners should seriously consider making voluntary super contributions for their own retirement, as partnership income does not automatically attract the 11.5% super guarantee.
                </p>
              </div>

              {/* Individual Returns */}
              <div className="rounded-xl bg-gray-800/50 border border-teal-500/20 p-5">
                <h4 className="text-teal-400 font-semibold mb-3">Individual Tax Returns</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Each partner must lodge their own <strong className="text-gray-200">individual tax return</strong> reporting their share of partnership net income (or loss) at Item 13 &mdash; Partnerships and trusts. The partner&apos;s share is added to any other income they earn and taxed at their marginal rate. Partners cannot claim individual deductions for partnership expenses already claimed in the partnership return.
                </p>
              </div>
            </div>

            {/* Tax Comparison Table */}
            <h3 className="text-xl font-bold text-white mt-10 mb-4">Partnership vs Sole Trader vs Pty Ltd: Tax Comparison</h3>
            <div className="rounded-2xl border border-gray-700/50 overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-800/80">
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Aspect</th>
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Partnership</th>
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Sole Trader</th>
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Pty Ltd Company</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700/50">
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">Tax Rate</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">Individual marginal rates (per partner&apos;s share)</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">Individual marginal rates (up to 45% + Medicare)</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">Flat 25% (base rate entity) or 30%</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">Tax Reporting</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">Partnership return + individual returns</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">Individual return only</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">Company return + individual returns for dividends</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">Liability</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">Joint and several &mdash; unlimited</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">Unlimited personal liability</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">Limited to company assets (generally)</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">Asset Protection</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">None &mdash; personal assets at risk</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">None &mdash; personal assets at risk</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">Strong &mdash; company is separate legal entity</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">Setup Complexity</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">Low to moderate &mdash; ABN + agreement</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">Lowest &mdash; ABN only</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">Highest &mdash; ASIC registration, constitution, directors</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">Annual Cost</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">$39&ndash;$92 (business name) + accountant fees</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">$39&ndash;$92 (business name) + minimal accountant</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">$310 (ASIC review fee) + higher accountant fees</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="rounded-xl bg-teal-500/5 border border-teal-500/20 p-5 mt-6">
              <p className="text-teal-400 font-medium mb-2">Income Splitting Advantage</p>
              <p className="text-gray-400 text-sm">
                One of the key tax benefits of a partnership is <strong className="text-gray-200">income splitting</strong>. By distributing income across multiple partners, you can potentially keep each partner in a lower tax bracket compared to one person earning the full amount as a sole trader. For example, $200K earned by a sole trader faces a top marginal rate of 45%, but split equally between two partners, each reports $100K &mdash; staying in lower brackets.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Pros & Cons for Freelancers */}
        <section id="pros-and-cons">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center text-white text-sm font-bold">5</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Pros &amp; Cons for Freelancers</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Deciding whether a partnership is right for your freelance business requires weighing the benefits of shared resources and income splitting against the risks of joint liability and potential disputes. Here&apos;s a balanced breakdown.
            </p>

            {/* Pros */}
            <h3 className="text-lg font-bold text-white mt-8 mb-4">Advantages</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-xl bg-gray-800/50 border border-emerald-500/20 p-5">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h4 className="text-white font-semibold">Shared Workload &amp; Skills</h4>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Combine complementary skills &mdash; one partner handles design while the other manages development. You can take on larger projects and serve more clients than working solo.
                </p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-emerald-500/20 p-5">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h4 className="text-white font-semibold">Shared Costs &amp; Overheads</h4>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Split the cost of office space, software subscriptions, equipment, insurance, and professional development. Reduces the financial burden on each individual partner.
                </p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-emerald-500/20 p-5">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h4 className="text-white font-semibold">Flow-Through Taxation</h4>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  No double taxation &mdash; partnership income passes directly to partners and is taxed only once at individual rates. Income splitting can keep both partners in lower tax brackets.
                </p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-emerald-500/20 p-5">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h4 className="text-white font-semibold">Pooled Resources &amp; Networks</h4>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Each partner brings their own professional network, client relationships, and industry connections. A partnership instantly doubles (or more) your reach and referral potential.
                </p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-emerald-500/20 p-5">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h4 className="text-white font-semibold">Easier to Get Finance</h4>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Banks often view partnerships more favourably than sole traders for business loans because there are multiple people backing the business and multiple income streams.
                </p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-emerald-500/20 p-5">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h4 className="text-white font-semibold">Flexible Profit Distribution</h4>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Partners can agree to distribute profits in whatever ratio suits the business &mdash; it doesn&apos;t have to be equal. This allows you to reward effort, experience, or capital contribution appropriately.
                </p>
              </div>
            </div>

            {/* Cons */}
            <h3 className="text-lg font-bold text-white mt-8 mb-4">Disadvantages</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-5">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                  <h4 className="text-white font-semibold">Unlimited Joint Liability</h4>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Each partner is personally liable for ALL partnership debts, not just their share. If your partner racks up $50K in debt, creditors can come after your personal assets to recover the full amount.
                </p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-5">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                  <h4 className="text-white font-semibold">Potential for Disputes</h4>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Without a clear, written agreement covering all scenarios, partnership disputes can become costly and destructive. Disagreements over money, direction, or workload are common when expectations aren&apos;t documented.
                </p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-5">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                  <h4 className="text-white font-semibold">Shared Decision-Making</h4>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Having to consult with and get agreement from partners can slow down decision-making. If you&apos;re used to operating as a solo freelancer, the shift to collaborative decisions can feel frustrating.
                </p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-5">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                  <h4 className="text-white font-semibold">Partners Can Bind the Partnership</h4>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Any partner acting in the ordinary course of business can commit the partnership to contracts, leases, and obligations. One partner&apos;s bad decision becomes everyone&apos;s problem.
                </p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-5">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                  <h4 className="text-white font-semibold">Dissolution Complexity</h4>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Ending a partnership can be complicated and expensive, especially without a clear agreement. Assets must be valued, debts settled, clients transitioned, and ongoing obligations unwound. It can take months.
                </p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-5">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                  <h4 className="text-white font-semibold">Trust Issues with Finances</h4>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Sharing a bank account and financial responsibilities requires deep trust. Disagreements over spending, drawings, or financial transparency can erode the partnership from within if not managed carefully.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: How InvoiceFlow Helps */}
        <section id="how-invoiceflow-helps">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center text-white text-sm font-bold">6</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">How InvoiceFlow Helps</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              InvoiceFlow is built specifically for Australian freelancers, including those operating in partnerships. Here&apos;s how it helps you manage the unique invoicing and financial challenges of running a partnership.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-teal-500/20 p-5">
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">Partner-Specific Invoicing</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Track which partner generates which revenue. Assign invoices to individual partners so you always know who brought in the work and can allocate income accurately for tax purposes.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-teal-500/20 p-5">
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">Profit Split Tracking</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Automatic income allocation per partnership agreement ratios. Set your split once and InvoiceFlow calculates each partner&apos;s share of revenue, expenses, and net income in real time.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-teal-500/20 p-5">
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">Shared Client Management</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Both partners see all client invoices and payment statuses in a single dashboard. No more chasing your partner for updates &mdash; everyone has visibility into the full client picture.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-teal-500/20 p-5">
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">Partnership BAS Data</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Combined GST reporting for partnership BAS lodgement. InvoiceFlow aggregates all partnership invoices and expenses to generate BAS-ready GST figures, making quarterly reporting straightforward.
                </p>
              </div>
            </div>

            {/* Bonus Feature */}
            <div className="rounded-xl bg-teal-500/5 border border-teal-500/20 p-5 mt-6">
              <p className="text-teal-400 font-medium mb-2">Built for Partnership Transparency</p>
              <p className="text-gray-400 text-sm">
                Partnerships thrive on trust, and trust requires transparency. InvoiceFlow gives <strong className="text-gray-200">every partner real-time access to the same financial data</strong> &mdash; invoices, payments, expenses, and profit splits. No more wondering what&apos;s happening with the money. Both partners see everything, always.
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
              { href: '/glossary/sole-trader', label: 'Sole Trader' },
              { href: '/glossary/pty-ltd', label: 'Pty Ltd' },
              { href: '/glossary/business-structure', label: 'Business Structure' },
              { href: '/glossary/abn', label: 'ABN' },
              { href: '/glossary/tfn', label: 'TFN' },
              { href: '/glossary/gst', label: 'GST' },
            ].map((term) => (
              <Link
                key={term.href}
                href={term.href}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gray-700/30 border border-gray-600/30 text-gray-300 text-sm hover:border-teal-500/40 hover:text-teal-400 transition-all"
              >
                <svg className="w-3.5 h-3.5 text-teal-500/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
        <p className="text-gray-400 text-center mb-8">Free calculators to help you set up and manage your partnership&apos;s finances.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {relatedTools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:border-teal-500/50 hover:bg-gray-800/80 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-4">
                {tool.icon}
              </div>
              <h3 className="text-white font-medium mb-2 group-hover:text-teal-400 transition-colors">{tool.name}</h3>
              <p className="text-sm text-gray-400">{tool.description}</p>
              <div className="mt-4 text-teal-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
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
        <p className="text-gray-400 text-center mb-8">In-depth guides on business structures, tax planning, and partnership management for freelancers.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {relatedGuides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group p-6 rounded-2xl bg-gray-800/40 border border-gray-700/40 hover:border-teal-500/40 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h3 className="text-white font-medium mb-2 group-hover:text-teal-400 transition-colors">{guide.name}</h3>
              <p className="text-sm text-gray-400">{guide.description}</p>
              <div className="mt-4 text-teal-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
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
              <summary className="flex items-center justify-between cursor-pointer px-6 py-4 text-white font-medium hover:text-teal-400 transition-colors">
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
        <div className="rounded-2xl bg-gradient-to-br from-teal-500/10 to-cyan-500/10 border border-teal-500/20 p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Run Your Partnership with Confidence
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            InvoiceFlow helps Australian freelancer partnerships track invoices per partner, split profits automatically, and generate BAS-ready data &mdash; all in one dashboard. Start for free and keep your partnership finances transparent.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button>Start Free &mdash; No Card Required</Button>
            </Link>
            <Link href="/tools/business-registration-checklist">
              <Button variant="secondary">Business Registration Checklist</Button>
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
