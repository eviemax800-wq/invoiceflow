import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Trust: Family Trust, Discretionary Trust & Unit Trust Structures for Freelancers — InvoiceFlow',
  description:
    'What is a family trust in Australia? Learn about discretionary trusts, unit trusts, trust vs sole trader vs Pty Ltd, trust tax rules, income splitting, setup costs ($1,500-$3,500), distribution rules, and when freelancers should use a trust structure. Updated for 2025-26.',
  keywords: [
    'family trust australia',
    'discretionary trust vs sole trader',
    'trust structure freelancer',
    'family trust tax benefits australia',
    'trust distribution rules',
    'trust vs company structure',
    'family trust setup cost',
    'trust tax rate australia 2025-26',
  ],
  alternates: { canonical: '/glossary/trust' },
  openGraph: {
    title: 'Trust: Family Trust, Discretionary Trust & Unit Trust Structures for Freelancers — InvoiceFlow',
    description:
      'Everything Australian freelancers need to know about trusts: family trusts, discretionary trusts, unit trusts, trust vs sole trader vs Pty Ltd, income splitting, tax rules, setup costs, and how to manage trust invoicing.',
    url: 'https://invoiceflow-teal.vercel.app/glossary/trust',
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
    { '@type': 'ListItem', position: 3, name: 'Trust', item: `${BASE_URL}/glossary/trust` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a family trust and how does it work in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A discretionary trust (commonly called a family trust) is a legal structure where a trustee holds assets and income on behalf of beneficiaries. The trustee has discretion over how income and capital gains are distributed each financial year. Established by a trust deed, it requires registration with the ATO for a TFN and ABN. The trust itself does not pay tax — income "flows through" to beneficiaries who pay tax at their individual marginal rates, enabling income splitting across family members on lower tax brackets.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should a freelancer set up a family trust?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It depends on your income level and family situation. A family trust generally becomes worthwhile at $120K+ annual income when income splitting provides meaningful tax savings. Setup costs are $1,500-$3,500 plus $1,000-$3,000 per year in ongoing accounting fees. Consider a trust if: you have family members on lower tax rates, you want asset protection, and you plan for long-term wealth building. Don\'t bother if: you work solo with no dependants and your income is under $80K — the compliance costs will outweigh any tax benefit.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is trust income taxed in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Trust income distributed to adult beneficiaries is taxed at their individual marginal tax rates. Undistributed income is taxed at the top marginal rate of 47% (including Medicare levy). Capital gains flow through to beneficiaries and qualify for the 50% CGT discount if the asset was held for 12 months or more. Trust losses cannot be distributed to beneficiaries — they must stay in the trust and can only be offset against future trust income, subject to the trust loss rules.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between a discretionary trust and a unit trust?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A discretionary trust gives the trustee full discretion over how to distribute income each year — the trustee chooses who gets what, making it flexible and ideal for families. A unit trust has fixed entitlements based on unit holdings, similar to shares in a company — each unit holder receives a proportionate share of income. Unit trusts are better suited for joint ventures and investment groups where fixed proportions are needed. A hybrid trust combines features of both. Most freelancers choose discretionary trusts for maximum tax flexibility and income splitting.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does it cost to set up a family trust in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Trust deed preparation costs $1,000-$2,500 (use a specialist trust lawyer, not a DIY template). Stamp duty varies by state from $0 to $500. ABN and TFN registration is free through the ATO. Opening a trust bank account is free. Total setup cost is typically $1,500-$3,500. Ongoing costs include: annual trust tax return $1,000-$2,000 per year, accounting and compliance $500-$1,500 per year, and ASIC fees of $307 per year if you use a corporate trustee. Budget $2,000-$4,000 per year for total ongoing trust administration.',
      },
    },
  ],
};

const tocItems = [
  { id: 'what-is-a-trust', label: '1. What Is a Trust?' },
  { id: 'types-of-trusts', label: '2. Types of Trusts for Freelancers' },
  { id: 'trust-vs-other-structures', label: '3. Trust vs Other Business Structures' },
  { id: 'tax-implications', label: '4. Tax Implications of Trusts' },
  { id: 'setting-up-a-trust', label: '5. Setting Up a Trust' },
  { id: 'invoiceflow-trust', label: '6. How InvoiceFlow Helps' },
];

const relatedTools = [
  {
    href: '/tools/gst-calculator',
    name: 'GST Calculator',
    description: 'Calculate GST on trust revenue instantly and separate GST-inclusive from GST-exclusive figures.',
    icon: (
      <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm2.25-4.5h.008v.008H10.5v-.008zm0 2.25h.008v.008H10.5v-.008zm0 2.25h.008v.008H10.5v-.008zm2.25-4.5h.008v.008H12.75v-.008zm0 2.25h.008v.008H12.75v-.008zm2.25-4.5h.008v.008H15v-.008zm0 2.25h.008v.008H15v-.008zM6 18.75a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 18.75V6a2.25 2.25 0 00-2.25-2.25h-7.5A2.25 2.25 0 006 6v12.75zM3.75 18.75V6A4.5 4.5 0 018.25 1.5h7.5A4.5 4.5 0 0120.25 6v12.75a4.5 4.5 0 01-4.5 4.5h-7.5a4.5 4.5 0 01-4.5-4.5z" />
      </svg>
    ),
  },
  {
    href: '/tools/tax-estimator',
    name: 'Tax Estimator',
    description: 'Estimate tax on trust distributions at different income levels for each beneficiary.',
    icon: (
      <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    href: '/tools/bas-preparation-checklist',
    name: 'BAS Preparation Checklist',
    description: 'Step-by-step BAS preparation checklist for trust GST obligations and quarterly lodgement.',
    icon: (
      <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    href: '/tools/profit-loss-statement-generator',
    name: 'Profit & Loss Generator',
    description: 'Generate P&L statements for your trust to track income, expenses, and distributable profit.',
    icon: (
      <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
];

const relatedGuides = [
  {
    href: '/guides/tax-guide-freelancers',
    name: 'Tax Guide for Freelancers',
    description: 'Income tax, deductions, BAS, and everything else you need to know about tax obligations in Australia.',
  },
  {
    href: '/guides/choosing-business-structure',
    name: 'Business Structure Guide',
    description: 'Sole trader vs Pty Ltd vs trust vs partnership — a complete comparison to help you choose the right structure.',
  },
  {
    href: '/guides/gst-for-freelancers',
    name: 'GST for Freelancers',
    description: 'Understand how GST works for trusts, when to register, and how to report correctly on your BAS.',
  },
];

export default function TrustGlossaryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative px-4 pt-20 pb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-teal-500/10 to-cyan-500/10 blur-3xl" />
        <div className="relative max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/glossary" className="hover:text-white transition-colors">Glossary</Link>
            <span>/</span>
            <span className="text-white">Trust</span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            Glossary &mdash; Business Structure
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Trust Structures{' '}
            <span className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent">
              for Australian Freelancers
            </span>
          </h1>

          {/* Summary */}
          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            A trust is a legal structure where a trustee holds and manages assets on behalf of beneficiaries &mdash; and it is one of the most powerful tax planning tools in Australia. Family trusts (discretionary trusts) allow freelancers to split income across family members, protect assets, and build long-term wealth. This guide covers what trusts are, the different types, how they compare to other structures, tax rules, setup costs, and how to manage trust invoicing.
          </p>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>16 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>ATO 2025-26 Rules Covered</span>
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
        <div className="rounded-2xl bg-gradient-to-br from-cyan-500/10 to-teal-500/10 border border-cyan-500/20 p-8">
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
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-xs font-bold">800K+</span>
              <div>
                <p className="text-white font-medium text-sm">Trusts in Australia</p>
                <p className="text-gray-400 text-sm">Over 800,000 trusts are registered with the ATO, making it a widely-used structure</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-xs font-bold">$120K+</span>
              <div>
                <p className="text-white font-medium text-sm">Income Threshold</p>
                <p className="text-gray-400 text-sm">Generally becomes worthwhile for freelancers earning $120K+ with family members on lower tax rates</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-xs font-bold">47%</span>
              <div>
                <p className="text-white font-medium text-sm">Penalty on Undistributed Income</p>
                <p className="text-gray-400 text-sm">Undistributed trust income is taxed at the top marginal rate &mdash; you must distribute by 30 June</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-xs font-bold">95%</span>
              <div>
                <p className="text-white font-medium text-sm">Use Discretionary Trusts</p>
                <p className="text-gray-400 text-sm">95% of freelancer trusts are discretionary (family) trusts for maximum income splitting flexibility</p>
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

        {/* Section 1: What Is a Trust? */}
        <section id="what-is-a-trust">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center text-white text-sm font-bold">1</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">What Is a Trust?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              A trust is a <strong className="text-white">legal relationship</strong> where one party (the trustee) holds and manages property or assets on behalf of another party (the beneficiaries). Unlike a company, a trust is <strong className="text-white">not a separate legal entity</strong> &mdash; it is a relationship governed by a legal document called the trust deed. However, for tax purposes, the ATO treats a trust as a distinct taxpayer with its own TFN and ABN.
            </p>
            <p className="text-gray-300 leading-relaxed">
              The concept of trusts dates back centuries in common law. In Australia, trusts are <strong className="text-white">extremely popular</strong> &mdash; with over 800,000 trusts registered with the ATO. They are used for everything from managing family wealth and running businesses to holding investment properties and operating superannuation funds. For freelancers, the most relevant type is the <strong className="text-white">discretionary trust</strong> (commonly called a family trust), which provides flexibility in distributing income to family members on lower tax brackets.
            </p>
            <p className="text-gray-300 leading-relaxed">
              The trust deed is the <strong className="text-white">governing document</strong> that sets out the rules for the trust. It defines who the beneficiaries are (often a broad class such as &ldquo;the children and grandchildren of the primary beneficiary&rdquo;), what powers the trustee has, how income and capital can be distributed, and how long the trust will last (typically 50 to 80 years, known as the vesting period). The trust deed is prepared by a lawyer and, once executed, is very difficult to change &mdash; so getting it right from the start is critical.
            </p>
            <p className="text-gray-300 leading-relaxed">
              While a trust is not a separate legal entity in the same way a Pty Ltd company is, it <strong className="text-white">does have a separate tax identity</strong>. You must register for a TFN and ABN for the trust, lodge a separate trust tax return each year, and if the trust&apos;s turnover exceeds $75,000, register for GST. The trust itself does not pay income tax on distributed income &mdash; instead, the income &ldquo;flows through&rdquo; to the beneficiaries who include it in their personal tax returns.
            </p>

            <h3 className="text-lg font-semibold text-white mt-8">The Three Key Parties</h3>
            <p className="text-gray-300 leading-relaxed">
              Every trust involves three distinct roles. Understanding these roles is essential before you set up or operate a trust:
            </p>

            {/* 4-card grid */}
            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-cyan-400 font-medium mb-2">Settlor</h4>
                <p className="text-gray-400 text-sm">The person who establishes the trust by transferring a nominal amount (usually a $10 cash gift) to the trustee. The settlor&apos;s role ends once the trust is created. The settlor must be someone unrelated to the beneficiaries &mdash; typically an accountant, lawyer, or family friend. The settlor should never be a beneficiary of the trust.</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-teal-400 font-medium mb-2">Trustee</h4>
                <p className="text-gray-400 text-sm">The legal owner who manages the trust&apos;s assets and operations. The trustee can be an individual person or a corporate trustee (a Pty Ltd company set up specifically to act as trustee). The trustee has a fiduciary duty to act in the best interests of the beneficiaries, not their own interests. They make decisions about distributions, investments, and operations.</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-cyan-400 font-medium mb-2">Beneficiaries</h4>
                <p className="text-gray-400 text-sm">The people or entities who receive distributions from the trust. In a discretionary trust, beneficiaries are defined as a class (e.g., &ldquo;the family members of John Smith&rdquo;) rather than named individually. The trustee decides each year who receives what &mdash; no beneficiary has a fixed entitlement until a distribution resolution is made.</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-teal-400 font-medium mb-2">Trust Deed</h4>
                <p className="text-gray-400 text-sm">The legal document that governs the trust. It defines the trustee&apos;s powers, beneficiary classes, distribution rules, investment powers, and the vesting date (when the trust must end &mdash; typically 50 to 80 years from establishment). The trust deed is the &ldquo;constitution&rdquo; of the trust and must be prepared by a qualified lawyer.</p>
              </div>
            </div>

            <div className="rounded-xl bg-cyan-500/5 border border-cyan-500/20 p-5 mt-6">
              <p className="text-cyan-400 font-medium mb-2">Key Point</p>
              <p className="text-gray-400 text-sm">
                A trust is <strong className="text-gray-200">not the same as a company</strong>. A company is a separate legal entity that can sue and be sued in its own name. A trust is a relationship &mdash; legally, the trustee is the party that enters into contracts, signs leases, and is liable for debts. This is why asset protection in a trust comes from the structure of the arrangement, not from a separate legal personality. If you use an individual trustee, you are personally liable for the trust&apos;s debts. This is why many people choose a corporate trustee.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Types of Trusts for Freelancers */}
        <section id="types-of-trusts">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center text-white text-sm font-bold">2</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Types of Trusts for Freelancers</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Not all trusts are the same. The type you choose affects your flexibility, tax treatment, compliance requirements, and setup costs. Here is a comprehensive comparison of the five main trust types relevant to freelancers and small business owners in Australia.
            </p>

            {/* Trust Types Table */}
            <div className="rounded-2xl border border-gray-700/50 overflow-hidden mt-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-800/80">
                      <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Trust Type</th>
                      <th className="text-left text-sm font-medium text-cyan-400 px-6 py-4">Distribution Flexibility</th>
                      <th className="text-left text-sm font-medium text-teal-400 px-6 py-4">Setup Cost</th>
                      <th className="text-left text-sm font-medium text-cyan-400 px-6 py-4">Best For</th>
                      <th className="text-left text-sm font-medium text-teal-400 px-6 py-4">Tax Complexity</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700/50">
                    <tr className="bg-cyan-500/5 hover:bg-cyan-500/10 transition-colors">
                      <td className="px-6 py-3 text-cyan-400 text-sm font-medium">Discretionary / Family</td>
                      <td className="px-6 py-3 text-emerald-400 text-sm font-medium">Full flexibility</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">$1.5K-$3.5K</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Families, freelancers with dependants</td>
                      <td className="px-6 py-3 text-yellow-400 text-sm">Medium</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-gray-300 text-sm font-medium">Unit Trust</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Fixed per unit</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">$2K-$4K</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Joint ventures, investment groups</td>
                      <td className="px-6 py-3 text-emerald-400 text-sm">Low</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-gray-300 text-sm font-medium">Hybrid Trust</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Partial flexibility</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">$2.5K-$5K</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Mixed purposes, complex situations</td>
                      <td className="px-6 py-3 text-red-400 text-sm">High</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-gray-300 text-sm font-medium">Fixed Trust</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Predetermined</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">$2K-$3.5K</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Specific allocation needs</td>
                      <td className="px-6 py-3 text-emerald-400 text-sm">Low</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-gray-300 text-sm font-medium">Testamentary Trust</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Per will terms</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">$0 (in will)</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Estate planning, intergenerational</td>
                      <td className="px-6 py-3 text-red-400 text-sm">High</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="rounded-xl bg-cyan-500/5 border border-cyan-500/20 p-5 mt-6">
              <p className="text-cyan-400 font-medium mb-2">Which One Should You Choose?</p>
              <p className="text-gray-400 text-sm">
                <strong className="text-gray-200">95% of freelancer trusts are discretionary (family) trusts.</strong> The full discretion over income distribution is the primary advantage &mdash; it allows you to allocate income to family members on lower marginal tax rates each year, adapting to changing circumstances. Unit trusts are mainly used when two or more unrelated parties go into business together and need fixed proportional entitlements. Hybrid trusts offer a combination but attract greater ATO scrutiny. Testamentary trusts are created through a will and only activate on death &mdash; not relevant for operating a freelance business. <strong className="text-gray-200">If in doubt, a discretionary trust is almost always the right choice for freelancers.</strong>
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Trust vs Other Business Structures */}
        <section id="trust-vs-other-structures">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center text-white text-sm font-bold">3</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Trust vs Other Business Structures</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Choosing between a sole trader, Pty Ltd company, and discretionary trust is one of the most important decisions an Australian freelancer will make. Each structure has distinct advantages and trade-offs. Here is a detailed 10-row comparison to help you decide:
            </p>

            {/* 3-column comparison table */}
            <div className="rounded-2xl border border-gray-700/50 overflow-hidden mt-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-800/80">
                      <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Feature</th>
                      <th className="text-left text-sm font-medium text-gray-400 px-6 py-4">Sole Trader</th>
                      <th className="text-left text-sm font-medium text-violet-400 px-6 py-4">Pty Ltd</th>
                      <th className="text-left text-sm font-medium text-cyan-400 px-6 py-4">Discretionary Trust</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700/50">
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-gray-300 text-sm font-medium">Setup Cost</td>
                      <td className="px-6 py-3 text-emerald-400 text-sm font-medium">$0 (free ABN)</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">$800-$1.5K</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">$1.5K-$3.5K</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-gray-300 text-sm font-medium">Annual Compliance Cost</td>
                      <td className="px-6 py-3 text-emerald-400 text-sm font-medium">$0 (no gov fees)</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">$1.5K-$3K</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">$1.5K-$3K</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-gray-300 text-sm font-medium">Tax Rate</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Marginal rate (0-47%)</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">25% flat (base rate entity)</td>
                      <td className="px-6 py-3 text-cyan-400 text-sm font-medium">Beneficiary marginal rates</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-gray-300 text-sm font-medium">Income Splitting</td>
                      <td className="px-6 py-3 text-red-400 text-sm font-medium">None</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Limited (franking credits)</td>
                      <td className="px-6 py-3 text-emerald-400 text-sm font-medium">Full discretion</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-gray-300 text-sm font-medium">Asset Protection</td>
                      <td className="px-6 py-3 text-red-400 text-sm font-medium">None</td>
                      <td className="px-6 py-3 text-emerald-400 text-sm font-medium">Strong</td>
                      <td className="px-6 py-3 text-emerald-400 text-sm font-medium">Strong (with corporate trustee)</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-gray-300 text-sm font-medium">Loss Flexibility</td>
                      <td className="px-6 py-3 text-emerald-400 text-sm font-medium">Yes &mdash; offset other income</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Carry forward in company</td>
                      <td className="px-6 py-3 text-red-400 text-sm font-medium">Stay in trust only</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-gray-300 text-sm font-medium">Setup Complexity</td>
                      <td className="px-6 py-3 text-emerald-400 text-sm font-medium">Easiest</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Moderate</td>
                      <td className="px-6 py-3 text-red-400 text-sm font-medium">Complex</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-gray-300 text-sm font-medium">When to Use</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Under $80K income</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">$120K+ / retained earnings</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">$120K+ / family members on lower rates</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-gray-300 text-sm font-medium">Liability</td>
                      <td className="px-6 py-3 text-red-400 text-sm font-medium">Unlimited personal</td>
                      <td className="px-6 py-3 text-emerald-400 text-sm font-medium">Limited to company assets</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Trustee liability (use corporate trustee)</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-gray-300 text-sm font-medium">CGT Discount</td>
                      <td className="px-6 py-3 text-emerald-400 text-sm font-medium">50% (12+ months)</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">50% after distribution</td>
                      <td className="px-6 py-3 text-emerald-400 text-sm font-medium">50% passed to beneficiaries</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="rounded-xl bg-cyan-500/5 border border-cyan-500/20 p-5 mt-6">
              <p className="text-cyan-400 font-medium mb-2">The Bottom Line on Structure Choice</p>
              <p className="text-gray-400 text-sm">
                The trust shines when you have <strong className="text-gray-200">family members on lower marginal tax rates</strong> and your income exceeds $120K. The ability to distribute $80K to a spouse who earns nothing (and pay tax at their much lower marginal rate) can save $15,000-$25,000+ per year in tax compared to a sole trader. However, a trust adds complexity and cost &mdash; if you are solo with no dependants, a sole trader or Pty Ltd may be simpler. <strong className="text-gray-200">The ideal setup for many high-earning freelancers is a discretionary trust with a corporate trustee (Pty Ltd)</strong> &mdash; combining income splitting flexibility with limited liability protection.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Tax Implications of Trusts */}
        <section id="tax-implications">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center text-white text-sm font-bold">4</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Tax Implications of Trusts</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Trust taxation is where things get powerful &mdash; and complex. The fundamental principle is simple: <strong className="text-white">the trust itself does not pay tax on distributed income</strong>. Instead, income flows through to beneficiaries who pay tax at their individual marginal rates. But the ATO has strict rules about how and when distributions must be made, and there are significant penalties for getting it wrong.
            </p>

            {/* Income Distribution */}
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 mt-6">
              <h4 className="text-white font-semibold mb-3">Income Distribution &mdash; The 30 June Deadline</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                The trustee <strong className="text-gray-200">must distribute ALL trust income by 30 June each year</strong>. This is done by making a distribution resolution (also called a distribution minute) before the end of the financial year. If the trustee fails to distribute all income, the undistributed portion is taxed at the <strong className="text-gray-200">top marginal rate of 47%</strong> (including Medicare levy). There is no carrying forward of undistributed income &mdash; the penalty rate applies immediately. This is one of the most important compliance dates for any trust.
              </p>
            </div>

            {/* Beneficiary Taxation */}
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 mt-4">
              <h4 className="text-white font-semibold mb-3">How Beneficiaries Are Taxed</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400 font-bold text-sm flex-shrink-0 mt-0.5">ADULTS</span>
                  <p className="text-gray-400 text-sm">
                    Adult beneficiaries include their share of trust income in their personal tax return. It is taxed at their <strong className="text-gray-200">individual marginal tax rates</strong>, just like employment income. This is where income splitting delivers the benefit &mdash; distributing to a spouse on 0% or 19% saves significantly compared to the trustee paying 37-45%.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-teal-400 font-bold text-sm flex-shrink-0 mt-0.5">MINORS</span>
                  <p className="text-gray-400 text-sm">
                    Special penalty rates apply to trust distributions to beneficiaries under 18 years old. The first <strong className="text-gray-200">$416 is tax-free</strong>, $417 to $1,307 is taxed at <strong className="text-gray-200">66%</strong>, and amounts above $1,307 are taxed at the <strong className="text-gray-200">top marginal rate (47%)</strong>. These harsh rates are designed to prevent parents from streaming large amounts of income to their children. Distributions to minors are rarely tax-effective.
                  </p>
                </div>
              </div>
            </div>

            {/* Capital Gains */}
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 mt-4">
              <h4 className="text-white font-semibold mb-3">Capital Gains Through Trusts</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Capital gains made by the trust <strong className="text-gray-200">flow through to beneficiaries</strong> and retain their character as capital gains in the hands of the beneficiary. This means the <strong className="text-gray-200">50% CGT discount</strong> (for assets held 12+ months) is available to individual beneficiaries who receive the distribution. The trustee can choose which beneficiaries receive the capital gain, allowing strategic allocation to those on the lowest marginal tax rates. Trust losses, however, <strong className="text-gray-200">cannot be distributed</strong> &mdash; they remain trapped in the trust and can only offset future trust income.
              </p>
            </div>

            {/* Section 100A Warning */}
            <div className="rounded-xl bg-red-500/5 border border-red-500/20 p-5 mt-4">
              <p className="text-red-400 font-medium mb-2">Section 100A Warning: ATO Crackdown on Paper Distributions</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                <strong className="text-gray-200">Section 100A</strong> is an anti-avoidance provision that the ATO has been actively enforcing. It targets &ldquo;reimbursement agreements&rdquo; &mdash; situations where the trustee distributes income to a low-income beneficiary on paper, but the money is actually used by or returned to someone else (typically the person running the trust). For example, if you distribute $60,000 to your spouse but the money stays in the trust bank account or is spent by you, the ATO can <strong className="text-gray-200">deem the distribution to be the trustee&apos;s income</strong> and tax it at 47%. The ATO released updated guidance (TR 2022/4) making it clear they are scrutinising these arrangements. <strong className="text-gray-200">The beneficiary must genuinely receive and benefit from the distribution.</strong> Speak to your accountant about how to structure compliant distributions.
              </p>
            </div>

            {/* Worked Example */}
            <h3 className="text-lg font-semibold text-white mt-8">Worked Example: $200K Trust Income</h3>
            <p className="text-gray-300 leading-relaxed">
              Let&apos;s compare the tax outcomes of a freelancer earning $200,000 as a sole trader versus distributing through a family trust. This example assumes the freelancer has a spouse with no other income.
            </p>

            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 overflow-hidden mt-4">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-700/50">
                      <th className="text-left text-gray-400 font-medium py-3 px-4">Scenario</th>
                      <th className="text-right text-gray-400 font-medium py-3 px-4">Sole Trader</th>
                      <th className="text-right text-cyan-400 font-medium py-3 px-4">Family Trust</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700/30">
                    <tr>
                      <td className="py-3 px-4 text-gray-300 font-medium">Total Income</td>
                      <td className="py-3 px-4 text-gray-400 text-right">$200,000</td>
                      <td className="py-3 px-4 text-gray-400 text-right">$200,000</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-gray-300 font-medium">Distribution to You</td>
                      <td className="py-3 px-4 text-gray-400 text-right">$200,000 (all yours)</td>
                      <td className="py-3 px-4 text-gray-400 text-right">$80,000</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-gray-300 font-medium">Distribution to Spouse</td>
                      <td className="py-3 px-4 text-gray-500 text-right">N/A</td>
                      <td className="py-3 px-4 text-gray-400 text-right">$80,000</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-gray-300 font-medium">Retained in Trust</td>
                      <td className="py-3 px-4 text-gray-500 text-right">N/A</td>
                      <td className="py-3 px-4 text-gray-400 text-right">$40,000</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-gray-300 font-medium">Your Tax</td>
                      <td className="py-3 px-4 text-gray-400 text-right">~$63,667</td>
                      <td className="py-3 px-4 text-gray-400 text-right">~$18,067</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-gray-300 font-medium">Spouse Tax</td>
                      <td className="py-3 px-4 text-gray-500 text-right">$0</td>
                      <td className="py-3 px-4 text-gray-400 text-right">~$18,067</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-gray-300 font-medium">Tax on Retained $40K</td>
                      <td className="py-3 px-4 text-gray-500 text-right">N/A</td>
                      <td className="py-3 px-4 text-red-400 text-right">~$18,800 (47%)</td>
                    </tr>
                    <tr className="bg-cyan-500/5">
                      <td className="py-3 px-4 text-cyan-400 font-bold">Total Tax Paid</td>
                      <td className="py-3 px-4 text-white text-right font-bold">~$63,667</td>
                      <td className="py-3 px-4 text-cyan-400 text-right font-bold">~$54,934</td>
                    </tr>
                    <tr className="bg-emerald-500/5">
                      <td className="py-3 px-4 text-emerald-400 font-bold">Annual Tax Saving</td>
                      <td className="py-3 px-4 text-gray-500 text-right">&mdash;</td>
                      <td className="py-3 px-4 text-emerald-400 text-right font-bold">~$8,733</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="px-4 py-3 bg-gray-900/40 border-t border-gray-700/30">
                <p className="text-xs text-gray-500">Based on 2025-26 ATO tax brackets including Medicare levy. Retained income taxed at 47%. In practice, you would aim to distribute all income to avoid the 47% penalty rate &mdash; this example includes retention to illustrate the cost. Actual savings depend on beneficiary income levels and circumstances. Seek professional tax advice.</p>
              </div>
            </div>

            <div className="rounded-xl bg-cyan-500/5 border border-cyan-500/20 p-5 mt-6">
              <p className="text-cyan-400 font-medium mb-2">Maximising the Tax Benefit</p>
              <p className="text-gray-400 text-sm">
                The real power of a trust emerges when you distribute <strong className="text-gray-200">all income to beneficiaries on low marginal rates</strong> and avoid retaining any income in the trust. If the same $200K was distributed equally between two adults with no other income ($100K each), total family tax would drop to approximately $49,334 &mdash; a saving of over <strong className="text-gray-200">$14,000 compared to the sole trader</strong>. The more beneficiaries on low or zero tax rates you have, the greater the advantage. This is why trusts are most powerful for families, not solo operators.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Setting Up a Trust */}
        <section id="setting-up-a-trust">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center text-white text-sm font-bold">5</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Setting Up a Trust</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Setting up a trust is more involved than registering as a sole trader, but straightforward with the right professional guidance. Here is the step-by-step process, followed by a comparison of individual vs corporate trustee structures.
            </p>

            <div className="space-y-4 mt-6">
              {/* Step 1 */}
              <div className="rounded-xl bg-gray-800/50 border border-cyan-500/30 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                    <span className="text-cyan-400 font-bold text-sm">1</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Choose Your Trustee Type</h3>
                  <span className="text-xs text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-full">Critical Decision</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Decide between an <strong className="text-gray-200">individual trustee</strong> (you personally act as trustee) or a <strong className="text-gray-200">corporate trustee</strong> (a Pty Ltd company acts as trustee, costing $800-$1,200 to register with ASIC). A corporate trustee provides limited liability protection and succession continuity. Most accountants recommend a corporate trustee for any trust with significant income or assets.
                </p>
              </div>

              {/* Step 2 */}
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                    <span className="text-cyan-400 font-bold text-sm">2</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Prepare the Trust Deed</h3>
                  <span className="text-xs text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-full">$1K-$2.5K</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Engage a <strong className="text-gray-200">specialist trust lawyer</strong> to draft the trust deed. Do not use a DIY template &mdash; a poorly drafted deed can cost you tens of thousands in lost tax benefits or ATO disputes. The deed must cover: beneficiary classes, trustee powers, distribution provisions, investment powers, vesting date, and amendment procedures. Budget $1,000-$2,500 for a quality trust deed from an experienced commercial lawyer.
                </p>
              </div>

              {/* Step 3 */}
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                    <span className="text-cyan-400 font-bold text-sm">3</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Settle the Trust</h3>
                  <span className="text-xs text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-full">$10</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  The settlor provides a <strong className="text-gray-200">$10 cash settlement</strong> to the trustee to formally create the trust. This amount must be kept separate from any other funds. The settlor signs the trust deed, and the trust comes into existence. The settlor should be someone unrelated to the beneficiaries &mdash; commonly your accountant or lawyer. Once settlement is complete, the settlor has no further involvement with the trust.
                </p>
              </div>

              {/* Step 4 */}
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                    <span className="text-cyan-400 font-bold text-sm">4</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Register for ABN and TFN</h3>
                  <span className="text-xs text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">Free</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Apply for the trust&apos;s ABN (free) through the Australian Business Register at abr.gov.au. The trust needs its own <strong className="text-gray-200">separate ABN and TFN</strong> &mdash; these are different from your personal ABN and TFN or any corporate trustee&apos;s identifiers. The ATO typically issues the TFN within 28 days of ABN registration. Your invoices, contracts, and tax documents will use the trust&apos;s ABN.
                </p>
              </div>

              {/* Step 5 */}
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                    <span className="text-cyan-400 font-bold text-sm">5</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Open a Trust Bank Account</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Open a <strong className="text-gray-200">separate bank account in the trust&apos;s name</strong>. You will need to bring the trust deed, ABN confirmation, and identification for the trustee(s) to the bank. Trust funds must be kept completely separate from personal funds and any corporate trustee&apos;s funds. Mixing funds can jeopardise the trust&apos;s tax status and asset protection. All business income must flow into this account, and distributions must be paid from it.
                </p>
              </div>

              {/* Step 6 */}
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                    <span className="text-cyan-400 font-bold text-sm">6</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Register for GST (if turnover $75K+)</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  GST registration is <strong className="text-gray-200">mandatory if the trust&apos;s annual turnover is $75,000 or more</strong>. Register through the ATO Business Portal. If you are transitioning from a sole trader structure, cancel your existing GST registration and register the trust separately. The trust will need to lodge its own BAS returns (monthly or quarterly) and charge GST on all invoices.
                </p>
              </div>

              {/* Step 7 */}
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                    <span className="text-cyan-400 font-bold text-sm">7</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Appoint an Accountant</h3>
                  <span className="text-xs text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-full">$1K-$3K/yr</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Engage an accountant who <strong className="text-gray-200">specialises in trust taxation</strong>. Trust accounting is significantly more complex than sole trader or even company accounting. Your accountant will handle: annual trust tax return ($1,000-$2,000/yr), distribution resolutions before 30 June, BAS lodgement, beneficiary tax return inclusions, and compliance with Section 100A and other anti-avoidance provisions. Budget <strong className="text-gray-200">$1,000-$3,000 per year</strong> for ongoing trust accounting.
                </p>
              </div>
            </div>

            {/* Corporate vs Individual Trustee */}
            <h3 className="text-lg font-semibold text-white mt-8">Corporate Trustee vs Individual Trustee</h3>
            <p className="text-gray-300 leading-relaxed">
              One of the first decisions when setting up a trust is whether to use yourself as the trustee (individual) or set up a Pty Ltd company to act as trustee (corporate). Here is the comparison:
            </p>

            <div className="rounded-2xl border border-gray-700/50 overflow-hidden mt-4">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-800/80">
                      <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Feature</th>
                      <th className="text-left text-sm font-medium text-gray-400 px-6 py-4">Individual Trustee</th>
                      <th className="text-left text-sm font-medium text-cyan-400 px-6 py-4">Corporate Trustee</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700/50">
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-gray-300 text-sm font-medium">Personal Liability</td>
                      <td className="px-6 py-3 text-red-400 text-sm font-medium">Unlimited &mdash; personal assets at risk</td>
                      <td className="px-6 py-3 text-emerald-400 text-sm font-medium">Limited to company assets</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-gray-300 text-sm font-medium">Continuity</td>
                      <td className="px-6 py-3 text-red-400 text-sm">Trust may need to wind up if trustee dies or becomes incapacitated</td>
                      <td className="px-6 py-3 text-emerald-400 text-sm">Company continues regardless &mdash; directors can change</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-gray-300 text-sm font-medium">Setup Cost</td>
                      <td className="px-6 py-3 text-emerald-400 text-sm font-medium">$0 additional</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">$800-$1,200 (ASIC registration)</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-gray-300 text-sm font-medium">ASIC Requirements</td>
                      <td className="px-6 py-3 text-emerald-400 text-sm font-medium">None</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">$307/yr annual review fee + compliance</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-gray-300 text-sm font-medium">Bank Lending</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Some lenders prefer individual trustees</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Most lenders accept corporate trustees</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-gray-300 text-sm font-medium">Recommended When</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Low-risk, simple trusts, minimal assets</td>
                      <td className="px-6 py-3 text-cyan-400 text-sm font-medium">High income, significant assets, long-term wealth building</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Cost Summary */}
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 mt-6">
              <h4 className="text-white font-semibold mb-4">Total Cost Summary</h4>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <p className="text-cyan-400 font-medium mb-3">Setup Costs (One-Time)</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between text-gray-400">
                      <span>Trust deed preparation</span>
                      <span className="text-gray-300">$1,000-$2,500</span>
                    </div>
                    <div className="flex justify-between text-gray-400">
                      <span>Stamp duty (varies by state)</span>
                      <span className="text-gray-300">$0-$500</span>
                    </div>
                    <div className="flex justify-between text-gray-400">
                      <span>ABN/TFN registration</span>
                      <span className="text-emerald-400">Free</span>
                    </div>
                    <div className="flex justify-between text-gray-400">
                      <span>Trust bank account</span>
                      <span className="text-emerald-400">Free</span>
                    </div>
                    <div className="flex justify-between text-gray-400">
                      <span>Corporate trustee (optional)</span>
                      <span className="text-gray-300">$800-$1,200</span>
                    </div>
                    <div className="flex justify-between text-white font-medium pt-2 border-t border-gray-700/50">
                      <span>Total Setup</span>
                      <span>$1,500-$3,500</span>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-teal-400 font-medium mb-3">Ongoing Costs (Annual)</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between text-gray-400">
                      <span>Annual trust tax return</span>
                      <span className="text-gray-300">$1,000-$2,000</span>
                    </div>
                    <div className="flex justify-between text-gray-400">
                      <span>Accounting &amp; compliance</span>
                      <span className="text-gray-300">$500-$1,500</span>
                    </div>
                    <div className="flex justify-between text-gray-400">
                      <span>ASIC fees (corporate trustee)</span>
                      <span className="text-gray-300">$307</span>
                    </div>
                    <div className="flex justify-between text-white font-medium pt-2 border-t border-gray-700/50">
                      <span>Total Annual</span>
                      <span>$2,000-$4,000</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-cyan-500/5 border border-cyan-500/20 p-5 mt-6">
              <p className="text-cyan-400 font-medium mb-2">The Break-Even Calculation</p>
              <p className="text-gray-400 text-sm">
                With ongoing costs of $2,000-$4,000 per year, a trust needs to save you <strong className="text-gray-200">at least $4,000-$6,000 in tax annually</strong> to justify the expense and complexity (accounting for both the direct costs and the time spent on compliance). At $120K income with a spouse on zero income, the tax saving from income splitting is approximately $8,000-$12,000 per year &mdash; well above break-even. At $80K income, the saving drops to $2,000-$4,000, which barely covers the compliance costs. <strong className="text-gray-200">This is why most accountants recommend trusts at the $120K+ income level.</strong>
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: How InvoiceFlow Helps */}
        <section id="invoiceflow-trust">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center text-white text-sm font-bold">6</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">How InvoiceFlow Helps</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Operating a freelance business through a trust adds complexity to invoicing and financial reporting. InvoiceFlow is designed to handle trust-based business structures seamlessly, so you can focus on your work while maintaining full compliance.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">Separate Trust Identity</h4>
                <p className="text-gray-400 text-sm">Track trust income with a separate invoicing identity. Your invoices display the trust name, trust ABN, and trust bank details &mdash; keeping personal and trust finances clearly separated.</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">Trust ABN Tax Invoices</h4>
                <p className="text-gray-400 text-sm">Generate compliant tax invoices from the trust&apos;s ABN. Automatically include GST calculations, trust trading name, and all ATO-required fields for valid tax invoices.</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">Revenue Reports by Allocation</h4>
                <p className="text-gray-400 text-sm">Revenue reports that help you plan beneficiary allocations. See income by month, quarter, and financial year to make informed distribution decisions before the 30 June deadline.</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185z" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">BAS-Ready Reporting</h4>
                <p className="text-gray-400 text-sm">BAS-ready reporting for trust GST obligations. Automatically calculate GST collected and paid, generate BAS summaries, and export data for your accountant&apos;s quarterly lodgement.</p>
              </div>
            </div>

            <div className="rounded-xl bg-gradient-to-br from-cyan-500/10 to-teal-500/10 border border-cyan-500/20 p-6 mt-6 text-center">
              <h4 className="text-white font-semibold text-lg mb-2">Start Invoicing Through Your Trust &mdash; Free</h4>
              <p className="text-gray-400 text-sm mb-4">Set up your trust as a business entity in InvoiceFlow in under 2 minutes. Generate compliant tax invoices, track revenue, and simplify your trust administration.</p>
              <Link href="/signup">
                <Button>Create Free Account</Button>
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* Related Tools */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-white mb-2 text-center">Related Tools</h2>
        <p className="text-gray-400 text-center mb-8">Free tools to help you manage trust finances and compliance.</p>
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
        <p className="text-gray-400 text-center mb-8">In-depth guides on business structures, tax, and freelancing in Australia.</p>
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
        <div className="rounded-2xl bg-gradient-to-br from-cyan-500/10 to-teal-500/10 border border-cyan-500/20 p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Invoice Through Your Trust &mdash; Professionally
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Whether you&apos;re a sole trader, Pty Ltd, or trust &mdash; InvoiceFlow makes it easy to create compliant, professional invoices. Set up your trust ABN, calculate GST, track revenue by beneficiary allocation, and get paid faster.
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
