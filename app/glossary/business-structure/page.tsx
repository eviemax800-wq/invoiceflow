import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Business Structure in Australia: Sole Trader vs Pty Ltd vs Trust vs Partnership — InvoiceFlow',
  description:
    'Compare Australian business structures for freelancers: sole trader, Pty Ltd company, partnership, and trust. Includes tax comparison table, when to incorporate, Division 7A rules, and decision framework for choosing the right structure.',
  keywords: [
    'business structure comparison australia',
    'best business structure freelancer australia',
    'sole trader vs company vs trust',
    'business structure for freelancers',
    'should I incorporate as Pty Ltd freelancer',
    'partnership vs sole trader australia',
    'sole trader vs pty ltd tax comparison',
    'when to change business structure australia',
    'division 7a freelancer',
    'company tax rate australia 25 percent',
    'trust structure freelancer australia',
    'ABN vs ACN australia',
  ],
  alternates: { canonical: '/glossary/business-structure' },
  openGraph: {
    title: 'Business Structure in Australia: Sole Trader vs Pty Ltd vs Trust vs Partnership — InvoiceFlow',
    description:
      'Complete guide to choosing the right business structure as an Australian freelancer. Compare sole trader, Pty Ltd, partnership, and trust — with tax calculations, compliance costs, and a decision framework.',
    url: 'https://invoiceflow-teal.vercel.app/glossary/business-structure',
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
    { '@type': 'ListItem', position: 3, name: 'Business Structure', item: `${BASE_URL}/glossary/business-structure` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best business structure for a freelancer in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most freelancers should start as a sole trader. It is free to set up (just register for an ABN), has the simplest compliance, and works well for income under $120,000. Once you consistently earn above $120K\u2013$150K, or need liability protection, transitioning to a Pty Ltd company becomes worthwhile \u2014 but only after consulting an accountant about the additional compliance costs ($2,000\u2013$5,000 per year for company accounting).',
      },
    },
    {
      '@type': 'Question',
      name: 'At what income should I change from sole trader to Pty Ltd?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The general guideline is $120,000\u2013$150,000 in consistent annual revenue, but it depends on your expenses, deductions, and personal circumstances. At $150K, a sole trader pays approximately $41,867 in tax while a company structure could save $3,000\u2013$8,000 per year. However, company compliance costs ($2,000\u2013$5,000/yr for accounting) can offset these savings at lower income levels. Always consult an accountant before restructuring.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is Division 7A and why should freelancers care?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Division 7A is a tax rule that prevents company directors from accessing company money tax-free. If you set up a Pty Ltd and take money from the company without paying a proper salary, dividend, or compliant loan, the ATO treats it as a deemed dividend and taxes it at your personal rate plus penalties. This is the most common mistake freelancers make when incorporating. Always work with an accountant to ensure Division 7A compliance.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I change my business structure later?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. You can transition from sole trader to Pty Ltd at any time. The process involves: (1) register the company with ASIC ($576), (2) get a new ABN for the company, (3) register for GST under the new entity, (4) update all contracts and client relationships, (5) open new business bank accounts. The transition takes 2\u20134 weeks and your accountant should manage the tax implications. You do NOT lose your sole trader ABN \u2014 you can keep it for personal use.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a separate bank account for each business structure?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The ATO strongly recommends (and practically requires) a separate business bank account for every structure. For sole traders, this separates personal and business transactions for cleaner BAS reporting. For Pty Ltd companies, it is legally required \u2014 company money must be kept separate from personal funds (Division 7A). Most Australian banks offer free or low-cost business accounts.',
      },
    },
  ],
};

const tocItems = [
  { id: 'what-is-business-structure', label: '1. What Is a Business Structure?' },
  { id: 'four-main-structures', label: '2. The 4 Main Business Structures' },
  { id: 'when-to-change', label: '3. When to Change Your Structure' },
  { id: 'tax-implications', label: '4. Tax Implications of Each Structure' },
  { id: 'choosing-right-structure', label: '5. Choosing the Right Structure' },
  { id: 'invoiceflow-structure', label: '6. Managing Structure with InvoiceFlow' },
];

const relatedTools = [
  {
    href: '/tools/business-registration-checklist',
    name: 'Business Registration Checklist',
    description: 'Step-by-step checklist for registering your ABN, ACN, GST, and business name.',
    icon: (
      <svg className="w-6 h-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
      </svg>
    ),
  },
  {
    href: '/tools/freelance-tax-estimator',
    name: 'Freelance Tax Estimator',
    description: 'Calculate your estimated tax as a sole trader or Pty Ltd company in seconds.',
    icon: (
      <svg className="w-6 h-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
      </svg>
    ),
  },
  {
    href: '/tools/profit-loss-statement',
    name: 'Profit & Loss Statement Generator',
    description: 'Generate a professional P&L statement for any business structure.',
    icon: (
      <svg className="w-6 h-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    href: '/tools/freelance-business-scorecard',
    name: 'Freelance Business Scorecard',
    description: 'Assess your overall business health including structure, tax, and compliance.',
    icon: (
      <svg className="w-6 h-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
];

const relatedGuides = [
  {
    href: '/glossary/tax',
    name: 'Tax Guide for Freelancers',
    description: 'Complete guide to income tax, GST, BAS, and deductions for Australian freelancers.',
  },
  {
    href: '/glossary/abn',
    name: 'ABN Guide',
    description: 'Everything you need to know about registering and managing your Australian Business Number.',
  },
  {
    href: '/glossary/gst',
    name: 'GST for Freelancers',
    description: 'When to register, how to charge GST, and how to lodge your BAS correctly.',
  },
];

export default function BusinessStructureGlossaryPage() {
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
            <span className="text-white">Business Structure</span>
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
            Business Structure{' '}
            <span className="bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent">
              for Australian Freelancers
            </span>
          </h1>

          {/* Summary */}
          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            Your business structure determines how you operate, pay tax, and protect your personal assets. This guide compares the four main Australian structures &mdash; sole trader, Pty Ltd company, partnership, and trust &mdash; with tax calculations, compliance costs, and a decision framework for freelancers.
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
              <span>Tax Comparison Table</span>
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
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center text-violet-400 text-xs font-bold">2.47M</span>
              <div>
                <p className="text-white font-medium text-sm">Active Sole Traders</p>
                <p className="text-gray-400 text-sm">The most common business structure in Australia &mdash; 2.47 million active sole traders</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center text-violet-400 text-xs font-bold">$576</span>
              <div>
                <p className="text-white font-medium text-sm">Pty Ltd Registration</p>
                <p className="text-gray-400 text-sm">Cost to register a Pty Ltd company with ASIC, plus $310 annual review fee</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center text-violet-400 text-xs font-bold">25%</span>
              <div>
                <p className="text-white font-medium text-sm">Company Tax Rate</p>
                <p className="text-gray-400 text-sm">Flat company tax rate for base rate entities with turnover under $50M</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400 text-xs font-bold">$120K+</span>
              <div>
                <p className="text-white font-medium text-sm">Pty Ltd Threshold</p>
                <p className="text-gray-400 text-sm">Income level where a Pty Ltd company structure may become tax-advantageous</p>
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

        {/* Section 1: What Is a Business Structure? */}
        <section id="what-is-business-structure">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold">1</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">What Is a Business Structure?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              A business structure is the <strong className="text-white">legal framework that defines how your business operates, who owns it, how profits are distributed, and what tax and legal obligations apply</strong>. It is the foundational decision every freelancer and business owner must make &mdash; and it affects everything from your tax bill to your personal liability.
            </p>
            <p className="text-gray-300 leading-relaxed">
              In Australia, the four main business structures are: <strong className="text-white">sole trader, company (Pty Ltd), partnership, and trust</strong>. Each has distinct advantages and trade-offs. Your choice affects tax rates, personal liability, compliance costs, your ability to hire staff, how clients perceive you, and how easy it is to grow or sell your business. The <strong className="text-white">ATO (Australian Taxation Office)</strong> and <strong className="text-white">ASIC (Australian Securities and Investments Commission)</strong> regulate different aspects of each structure.
            </p>

            <h3 className="text-lg font-semibold text-white mt-8">Why Your Business Structure Matters</h3>
            <div className="grid sm:grid-cols-2 gap-4 mt-3">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-violet-400 font-medium mb-2">Tax Rates</h4>
                <p className="text-gray-400 text-sm">Sole traders pay individual tax rates (up to 45% + 2% Medicare levy). Companies pay a flat 25%. The right structure can save you thousands in tax every year &mdash; or cost you thousands if you choose wrong.</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-purple-400 font-medium mb-2">Personal Liability</h4>
                <p className="text-gray-400 text-sm">As a sole trader, you are personally liable for all business debts &mdash; your house, car, and savings are at risk. A company or trust creates a legal separation between you and the business.</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-violet-400 font-medium mb-2">Compliance Costs</h4>
                <p className="text-gray-400 text-sm">A sole trader has minimal compliance. A company requires ASIC registration, annual reviews, separate tax returns, and typically $2,000&ndash;$5,000/yr in extra accounting fees. Choose based on what you can afford.</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-purple-400 font-medium mb-2">Client Perception</h4>
                <p className="text-gray-400 text-sm">Some clients and industries prefer dealing with incorporated businesses. Government tenders and large enterprises may require you to operate as a Pty Ltd before they will award contracts.</p>
              </div>
            </div>

            <div className="rounded-xl bg-violet-500/5 border border-violet-500/20 p-5 mt-6">
              <p className="text-violet-400 font-medium mb-2">Important</p>
              <p className="text-gray-400 text-sm">
                Your business structure is not a permanent decision. You can <strong className="text-gray-200">change your structure at any time</strong> as your business grows. Most freelancers start as sole traders and transition to a Pty Ltd when their income reaches $120K&ndash;$150K consistently. The key is to start simple and restructure when the tax and liability benefits clearly outweigh the additional compliance costs.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: The 4 Main Business Structures in Australia */}
        <section id="four-main-structures">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold">2</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">The 4 Main Business Structures in Australia</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Each business structure has distinct characteristics that make it suitable for different situations. Here is a detailed breakdown of all four, followed by a comprehensive comparison table.
            </p>

            {/* Sole Trader */}
            <div className="rounded-xl bg-gray-800/50 border border-violet-500/20 p-6 mt-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
                  <span className="text-violet-400 font-bold text-sm">ST</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Sole Trader</h3>
                  <p className="text-violet-400 text-sm">Simplest structure &mdash; you ARE the business</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed text-sm mb-4">
                A sole trader is the simplest and cheapest business structure in Australia. There is <strong className="text-white">no legal separation between you and the business</strong> &mdash; you operate under your own name (or a registered business name), use your personal Tax File Number (TFN), and report all business income on your individual tax return. Setting up is free: you just register for an ABN through the Australian Business Register.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="p-3 rounded-lg bg-gray-900/50">
                  <p className="text-emerald-400 text-xs font-medium mb-1">Advantages</p>
                  <ul className="text-gray-400 text-xs space-y-1">
                    <li>Free to set up (just an ABN)</li>
                    <li>Simplest BAS and tax reporting</li>
                    <li>Full control over all decisions</li>
                    <li>Can offset losses against other income</li>
                    <li>$18,200 tax-free threshold</li>
                  </ul>
                </div>
                <div className="p-3 rounded-lg bg-gray-900/50">
                  <p className="text-red-400 text-xs font-medium mb-1">Disadvantages</p>
                  <ul className="text-gray-400 text-xs space-y-1">
                    <li>Unlimited personal liability</li>
                    <li>Individual tax rates up to 45% + 2% ML</li>
                    <li>Harder to bring on partners</li>
                    <li>Less perceived credibility with large clients</li>
                    <li>Cannot retain profits at lower tax rate</li>
                  </ul>
                </div>
              </div>
              <p className="text-gray-500 text-xs mt-3">Best for: freelancers starting out, income under $120K, low-risk services, solo operators. There are 2.47M active sole traders in Australia.</p>
            </div>

            {/* Company (Pty Ltd) */}
            <div className="rounded-xl bg-gray-800/50 border border-purple-500/20 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                  <span className="text-purple-400 font-bold text-sm">Co</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Company (Pty Ltd)</h3>
                  <p className="text-purple-400 text-sm">Separate legal entity &mdash; liability protection + flat 25% tax</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed text-sm mb-4">
                A proprietary limited (Pty Ltd) company is a <strong className="text-white">separate legal entity</strong> from its owners (shareholders). It can own property, enter contracts, sue and be sued in its own name. The company pays a flat 25% tax rate (for base rate entities with turnover under $50M), and your personal assets are generally protected from business debts. Registration costs $576 with ASIC, plus a $310 annual review fee.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="p-3 rounded-lg bg-gray-900/50">
                  <p className="text-emerald-400 text-xs font-medium mb-1">Advantages</p>
                  <ul className="text-gray-400 text-xs space-y-1">
                    <li>Flat 25% company tax rate</li>
                    <li>Limited liability (personal assets protected)</li>
                    <li>Easier to hire employees</li>
                    <li>Can retain profits in the company</li>
                    <li>Greater credibility with large clients</li>
                    <li>Easier to raise capital or sell the business</li>
                  </ul>
                </div>
                <div className="p-3 rounded-lg bg-gray-900/50">
                  <p className="text-red-400 text-xs font-medium mb-1">Disadvantages</p>
                  <ul className="text-gray-400 text-xs space-y-1">
                    <li>$576 ASIC registration + $310/yr review</li>
                    <li>$2,000&ndash;$5,000/yr extra accounting fees</li>
                    <li>Separate company tax return required</li>
                    <li>Division 7A rules on accessing funds</li>
                    <li>Cannot offset company losses against personal income</li>
                    <li>Director obligations and responsibilities</li>
                  </ul>
                </div>
              </div>
              <p className="text-gray-500 text-xs mt-3">Best for: earning over $120K&ndash;$150K consistently, hiring staff, wanting liability protection, large clients that require incorporation.</p>
            </div>

            {/* Partnership */}
            <div className="rounded-xl bg-gray-800/50 border border-violet-500/20 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
                  <span className="text-violet-400 font-bold text-sm">Pa</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Partnership</h3>
                  <p className="text-violet-400 text-sm">Two or more people sharing business &mdash; simple but risky</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed text-sm mb-4">
                A partnership involves <strong className="text-white">two or more people carrying on a business together</strong> with a view to profit. Each partner pays individual tax on their share of the partnership income. The partnership itself lodges a tax return but does not pay tax &mdash; profits and losses flow through to each partner. A partnership agreement (while not legally required) is essential to define profit splits, roles, and exit terms.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="p-3 rounded-lg bg-gray-900/50">
                  <p className="text-emerald-400 text-xs font-medium mb-1">Advantages</p>
                  <ul className="text-gray-400 text-xs space-y-1">
                    <li>Relatively simple to set up</li>
                    <li>Shared resources and workload</li>
                    <li>Each partner uses their individual tax-free threshold</li>
                    <li>Flexible profit-sharing arrangements</li>
                  </ul>
                </div>
                <div className="p-3 rounded-lg bg-gray-900/50">
                  <p className="text-red-400 text-xs font-medium mb-1">Disadvantages</p>
                  <ul className="text-gray-400 text-xs space-y-1">
                    <li>Joint and several liability (each partner liable for ALL debts)</li>
                    <li>Potential for disputes over profits and decisions</li>
                    <li>Individual tax rates apply (up to 45%)</li>
                    <li>Partnership dissolves if a partner leaves (without agreement)</li>
                  </ul>
                </div>
              </div>
              <p className="text-gray-500 text-xs mt-3">Best for: two freelancers collaborating long-term with shared resources and genuine 50/50 (or agreed) profit split.</p>
            </div>

            {/* Trust */}
            <div className="rounded-xl bg-gray-800/50 border border-purple-500/20 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                  <span className="text-purple-400 font-bold text-sm">Tr</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Trust</h3>
                  <p className="text-purple-400 text-sm">Complex structure &mdash; flexible income distribution for high earners</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed text-sm mb-4">
                A trust is a structure where a <strong className="text-white">trustee holds and manages assets or income for the benefit of beneficiaries</strong>. The most common type for freelancers is a discretionary (family) trust, which allows flexible distribution of income to family members in lower tax brackets. Trusts are complex to set up ($1,500&ndash;$3,000 in legal fees) and have significant annual compliance obligations.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="p-3 rounded-lg bg-gray-900/50">
                  <p className="text-emerald-400 text-xs font-medium mb-1">Advantages</p>
                  <ul className="text-gray-400 text-xs space-y-1">
                    <li>Flexible income distribution to beneficiaries</li>
                    <li>Tax benefits for families (distribute to lower brackets)</li>
                    <li>Asset protection (assets held by trust, not individuals)</li>
                    <li>Can hold assets for future generations</li>
                  </ul>
                </div>
                <div className="p-3 rounded-lg bg-gray-900/50">
                  <p className="text-red-400 text-xs font-medium mb-1">Disadvantages</p>
                  <ul className="text-gray-400 text-xs space-y-1">
                    <li>$1,500&ndash;$3,000 legal setup costs</li>
                    <li>Complex annual compliance and administration</li>
                    <li>Cannot retain losses (must distribute or carry forward)</li>
                    <li>$416 unearned income threshold for minors</li>
                    <li>ATO scrutiny on income splitting arrangements</li>
                  </ul>
                </div>
              </div>
              <p className="text-gray-500 text-xs mt-3">Best for: high earners ($200K+), freelancers with family beneficiaries, sophisticated tax planning with a qualified accountant.</p>
            </div>

            {/* Comparison Table */}
            <h3 className="text-lg font-semibold text-white mt-8">Complete Comparison Table</h3>
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 overflow-hidden mt-4">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-700/50">
                      <th className="text-left text-gray-400 font-medium py-3 px-4">Feature</th>
                      <th className="text-left text-violet-400 font-medium py-3 px-4">Sole Trader</th>
                      <th className="text-left text-purple-400 font-medium py-3 px-4">Pty Ltd Company</th>
                      <th className="text-left text-violet-400 font-medium py-3 px-4">Partnership</th>
                      <th className="text-left text-purple-400 font-medium py-3 px-4">Trust</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700/30">
                    <tr>
                      <td className="py-3 px-4 text-gray-300 font-medium">Setup Cost</td>
                      <td className="py-3 px-4 text-gray-400">Free (ABN only)</td>
                      <td className="py-3 px-4 text-gray-400">$576 ASIC</td>
                      <td className="py-3 px-4 text-gray-400">Free&ndash;$1,000 (agreement)</td>
                      <td className="py-3 px-4 text-gray-400">$1,500&ndash;$3,000</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-gray-300 font-medium">Annual Compliance Cost</td>
                      <td className="py-3 px-4 text-gray-400">$0&ndash;$500</td>
                      <td className="py-3 px-4 text-gray-400">$2,000&ndash;$5,000</td>
                      <td className="py-3 px-4 text-gray-400">$500&ndash;$2,000</td>
                      <td className="py-3 px-4 text-gray-400">$2,500&ndash;$5,000+</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-gray-300 font-medium">Tax Rate</td>
                      <td className="py-3 px-4 text-gray-400">0&ndash;45% + 2% ML</td>
                      <td className="py-3 px-4 text-gray-400">Flat 25%</td>
                      <td className="py-3 px-4 text-gray-400">Individual rates per partner</td>
                      <td className="py-3 px-4 text-gray-400">Beneficiary rates (distributed)</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-gray-300 font-medium">Tax-Free Threshold</td>
                      <td className="py-3 px-4 text-gray-400">$18,200</td>
                      <td className="py-3 px-4 text-gray-400">None (company level)</td>
                      <td className="py-3 px-4 text-gray-400">$18,200 per partner</td>
                      <td className="py-3 px-4 text-gray-400">Per beneficiary ($18,200)</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-gray-300 font-medium">Personal Liability</td>
                      <td className="py-3 px-4"><span className="text-red-400 text-xs font-medium bg-red-500/10 px-2 py-0.5 rounded-full">Unlimited</span></td>
                      <td className="py-3 px-4"><span className="text-emerald-400 text-xs font-medium bg-emerald-500/10 px-2 py-0.5 rounded-full">Limited</span></td>
                      <td className="py-3 px-4"><span className="text-red-400 text-xs font-medium bg-red-500/10 px-2 py-0.5 rounded-full">Joint &amp; Several</span></td>
                      <td className="py-3 px-4"><span className="text-emerald-400 text-xs font-medium bg-emerald-500/10 px-2 py-0.5 rounded-full">Limited</span></td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-gray-300 font-medium">Legal Separation</td>
                      <td className="py-3 px-4 text-gray-400">None &mdash; you are the business</td>
                      <td className="py-3 px-4 text-gray-400">Yes &mdash; separate entity</td>
                      <td className="py-3 px-4 text-gray-400">None</td>
                      <td className="py-3 px-4 text-gray-400">Yes &mdash; trust is separate</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-gray-300 font-medium">Registration Body</td>
                      <td className="py-3 px-4 text-gray-400">ATO (ABN)</td>
                      <td className="py-3 px-4 text-gray-400">ASIC (ACN) + ATO (ABN)</td>
                      <td className="py-3 px-4 text-gray-400">ATO (ABN + TFN)</td>
                      <td className="py-3 px-4 text-gray-400">ATO (ABN + TFN)</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-gray-300 font-medium">Income Distribution</td>
                      <td className="py-3 px-4 text-gray-400">All to owner</td>
                      <td className="py-3 px-4 text-gray-400">Salary + dividends</td>
                      <td className="py-3 px-4 text-gray-400">Per partnership agreement</td>
                      <td className="py-3 px-4 text-gray-400">Flexible &mdash; to any beneficiary</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-gray-300 font-medium">Loss Offset</td>
                      <td className="py-3 px-4 text-gray-400">Against personal income</td>
                      <td className="py-3 px-4 text-gray-400">Carry forward only</td>
                      <td className="py-3 px-4 text-gray-400">Against personal income</td>
                      <td className="py-3 px-4 text-gray-400">Carry forward in trust</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-gray-300 font-medium">Hiring Staff</td>
                      <td className="py-3 px-4 text-gray-400">Possible but less common</td>
                      <td className="py-3 px-4 text-gray-400">Standard and expected</td>
                      <td className="py-3 px-4 text-gray-400">Possible</td>
                      <td className="py-3 px-4 text-gray-400">Via trustee entity</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-gray-300 font-medium">Selling the Business</td>
                      <td className="py-3 px-4 text-gray-400">Sell assets only</td>
                      <td className="py-3 px-4 text-gray-400">Sell shares or assets</td>
                      <td className="py-3 px-4 text-gray-400">Complex &mdash; requires new agreement</td>
                      <td className="py-3 px-4 text-gray-400">Change trustee/beneficiaries</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-gray-300 font-medium">Best Income Range</td>
                      <td className="py-3 px-4 text-gray-400">Under $120K</td>
                      <td className="py-3 px-4 text-gray-400">$120K&ndash;$200K+</td>
                      <td className="py-3 px-4 text-gray-400">Varies (split income)</td>
                      <td className="py-3 px-4 text-gray-400">$200K+</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="px-4 py-3 bg-gray-900/40 border-t border-gray-700/30">
                <p className="text-xs text-gray-500">Tax rates and thresholds are for the 2025&ndash;26 financial year. Company tax rate of 25% applies to base rate entities (turnover under $50M). Compliance costs are indicative and vary by accountant and complexity.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: When to Change Your Business Structure */}
        <section id="when-to-change">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold">3</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">When to Change Your Business Structure</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Most freelancers start as sole traders and eventually consider moving to a Pty Ltd company. The decision comes down to <strong className="text-white">whether the tax savings and liability protection outweigh the additional compliance costs</strong>. Here are the key triggers for restructuring.
            </p>

            <h3 className="text-lg font-semibold text-white mt-6">Key Triggers for Moving from Sole Trader to Pty Ltd</h3>
            <div className="space-y-3 mt-3">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center text-violet-400 text-xs font-bold">1</span>
                <div>
                  <p className="text-white font-medium text-sm">Revenue Exceeds $120K&ndash;$150K Consistently</p>
                  <p className="text-gray-400 text-sm">At this income level, you are paying marginal tax rates of 37&ndash;45% as a sole trader. A company pays a flat 25%. The tax savings begin to outweigh the extra compliance costs, especially if you can retain profits in the company for future investment.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center text-violet-400 text-xs font-bold">2</span>
                <div>
                  <p className="text-white font-medium text-sm">You Want Liability Protection</p>
                  <p className="text-gray-400 text-sm">Sole traders have unlimited personal liability &mdash; if your business is sued or incurs debts, your personal assets (home, car, savings) are at risk. A Pty Ltd company creates a legal shield between business debts and your personal wealth.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center text-violet-400 text-xs font-bold">3</span>
                <div>
                  <p className="text-white font-medium text-sm">You Are Hiring Employees</p>
                  <p className="text-gray-400 text-sm">While sole traders can hire staff, operating as a company is cleaner for employer obligations: PAYG withholding, superannuation, WorkCover, and payroll tax thresholds. Most accountants recommend incorporating before hiring your first employee.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center text-violet-400 text-xs font-bold">4</span>
                <div>
                  <p className="text-white font-medium text-sm">You Want to Bring On Business Partners</p>
                  <p className="text-gray-400 text-sm">A company structure makes it easy to issue shares to co-founders or partners. Shareholding defines ownership clearly, and the company continues to exist regardless of individual shareholders leaving or joining.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center text-violet-400 text-xs font-bold">5</span>
                <div>
                  <p className="text-white font-medium text-sm">You Need to Raise Capital or Attract Investors</p>
                  <p className="text-gray-400 text-sm">Investors invest in companies, not sole traders. If you plan to raise capital, apply for grants, or bring in outside investment, you need a Pty Ltd structure with proper shareholder agreements.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center text-violet-400 text-xs font-bold">6</span>
                <div>
                  <p className="text-white font-medium text-sm">Large Clients Require You to Be Incorporated</p>
                  <p className="text-gray-400 text-sm">Some government departments, banks, and large enterprises require contractors to operate as a Pty Ltd. If you are losing contracts because you are a sole trader, incorporating opens new opportunities.</p>
                </div>
              </div>
            </div>

            {/* Worked Tax Comparison */}
            <h3 className="text-lg font-semibold text-white mt-8">Worked Tax Comparison: $150K Income</h3>
            <p className="text-gray-300 leading-relaxed">
              Here is a simplified comparison of tax on $150,000 income under a sole trader vs Pty Ltd structure:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-5">
                <h4 className="text-red-400 font-semibold mb-3">As Sole Trader ($150K)</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-gray-400">
                    <span>Taxable income</span>
                    <span className="text-white">$150,000</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Income tax (individual rates)</span>
                    <span className="text-white">$38,867</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Medicare levy (2%)</span>
                    <span className="text-white">$3,000</span>
                  </div>
                  <div className="flex justify-between text-gray-400 border-t border-gray-700/50 pt-2">
                    <span className="font-medium text-gray-300">Total tax</span>
                    <span className="font-bold text-red-400">$41,867</span>
                  </div>
                </div>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-emerald-500/20 p-5">
                <h4 className="text-emerald-400 font-semibold mb-3">As Pty Ltd ($150K Revenue)</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-gray-400">
                    <span>Salary paid to you</span>
                    <span className="text-white">$80,000</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Tax on salary (individual rates)</span>
                    <span className="text-white">$18,967</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Profit retained in company</span>
                    <span className="text-white">$70,000</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Company tax on profit (25%)</span>
                    <span className="text-white">$17,500</span>
                  </div>
                  <div className="flex justify-between text-gray-400 border-t border-gray-700/50 pt-2">
                    <span className="font-medium text-gray-300">Total tax</span>
                    <span className="font-bold text-emerald-400">$36,467</span>
                  </div>
                  <div className="flex justify-between text-gray-400 pt-1">
                    <span className="text-violet-300 font-medium">Approximate saving</span>
                    <span className="text-violet-400 font-bold">~$5,400/yr</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-red-500/5 border border-red-500/20 p-5 mt-6">
              <p className="text-red-400 font-medium mb-2">Warning: Division 7A Rules</p>
              <p className="text-gray-400 text-sm">
                You cannot simply leave money in the company and access it informally. <strong className="text-gray-200">Division 7A of the Income Tax Assessment Act</strong> prevents company directors from taking company money without paying proper salary, dividends, or establishing a compliant loan agreement. If you withdraw funds without following these rules, the ATO treats the amount as a deemed dividend and taxes it at your personal rate &mdash; plus penalties. This is the single most common mistake freelancers make when incorporating. Always work with an accountant.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Tax Implications of Each Structure */}
        <section id="tax-implications">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold">4</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Tax Implications of Each Structure</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Tax is often the primary reason freelancers change their business structure. Each structure has fundamentally different tax treatment. Here is a detailed breakdown.
            </p>

            {/* Sole Trader Tax */}
            <div className="rounded-xl bg-gray-800/50 border border-violet-500/20 p-6 mt-6">
              <h3 className="text-lg font-semibold text-white mb-4">Sole Trader Tax</h3>
              <p className="text-gray-300 leading-relaxed text-sm mb-4">
                As a sole trader, your business income is your personal income. You pay <strong className="text-white">individual marginal tax rates</strong> on all business profits after deductions.
              </p>
              <div className="rounded-xl bg-gray-900/50 overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-700/50">
                      <th className="text-left text-gray-400 font-medium py-2 px-4">Taxable Income</th>
                      <th className="text-left text-gray-400 font-medium py-2 px-4">Tax Rate</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700/30">
                    <tr>
                      <td className="py-2 px-4 text-gray-300">$0 &ndash; $18,200</td>
                      <td className="py-2 px-4 text-emerald-400">0% (tax-free threshold)</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 text-gray-300">$18,201 &ndash; $45,000</td>
                      <td className="py-2 px-4 text-gray-300">19%</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 text-gray-300">$45,001 &ndash; $120,000</td>
                      <td className="py-2 px-4 text-gray-300">32.5%</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 text-gray-300">$120,001 &ndash; $180,000</td>
                      <td className="py-2 px-4 text-gray-300">37%</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 text-gray-300">$180,001+</td>
                      <td className="py-2 px-4 text-red-400">45%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-gray-400">
                <li><strong className="text-gray-200">Medicare levy:</strong> 2% on top of income tax for all taxpayers (some low-income exemptions apply)</li>
                <li><strong className="text-gray-200">PAYG instalments:</strong> The ATO may require quarterly instalments based on prior year income</li>
                <li><strong className="text-gray-200">Loss offset:</strong> Business losses can be offset against other personal income (e.g., salary from employment)</li>
                <li><strong className="text-gray-200">Tax-free threshold:</strong> First $18,200 of total income is tax-free</li>
              </ul>
            </div>

            {/* Company Tax */}
            <div className="rounded-xl bg-gray-800/50 border border-purple-500/20 p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Company (Pty Ltd) Tax</h3>
              <p className="text-gray-300 leading-relaxed text-sm mb-4">
                A company is a separate taxpayer. It pays a <strong className="text-white">flat 25% tax rate</strong> on profits (for base rate entities with aggregated turnover under $50M). The company must lodge its own tax return, separate from your personal return.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><strong className="text-gray-200">Flat 25% rate:</strong> All company profits taxed at 25%, regardless of amount (base rate entity)</li>
                <li><strong className="text-gray-200">Division 7A:</strong> Personal use of company funds without proper salary, dividend, or compliant loan is a deemed dividend &mdash; taxed at your personal rate plus penalties</li>
                <li><strong className="text-gray-200">Franking credits:</strong> When the company pays dividends, shareholders receive franking credits for tax already paid by the company &mdash; avoids double taxation</li>
                <li><strong className="text-gray-200">Separate tax return:</strong> Company must lodge its own return. You also lodge a personal return for salary and dividends received</li>
                <li><strong className="text-gray-200">No tax-free threshold:</strong> Companies do not have an $18,200 tax-free threshold &mdash; all profits are taxed at 25%</li>
                <li><strong className="text-gray-200">Loss carry forward:</strong> Company losses carry forward to future years but cannot be offset against your personal income</li>
              </ul>
            </div>

            {/* Partnership Tax */}
            <div className="rounded-xl bg-gray-800/50 border border-violet-500/20 p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Partnership Tax</h3>
              <p className="text-gray-300 leading-relaxed text-sm mb-4">
                A partnership itself does not pay tax. It lodges a partnership tax return that shows how profits are <strong className="text-white">split between partners</strong>. Each partner then includes their share in their individual tax return and pays tax at their marginal rate.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><strong className="text-gray-200">Profit split:</strong> According to the partnership agreement (50/50 is common, but any split is possible)</li>
                <li><strong className="text-gray-200">Individual rates:</strong> Each partner pays tax at their own marginal rates on their share</li>
                <li><strong className="text-gray-200">Loss allocation:</strong> Losses are split per agreement &mdash; each partner can offset their share against other income</li>
                <li><strong className="text-gray-200">Partnership return:</strong> The partnership lodges a return showing total income, deductions, and distribution to partners</li>
              </ul>
            </div>

            {/* Trust Tax */}
            <div className="rounded-xl bg-gray-800/50 border border-purple-500/20 p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Trust Tax</h3>
              <p className="text-gray-300 leading-relaxed text-sm mb-4">
                A trust does not pay tax directly. The trustee <strong className="text-white">distributes income to beneficiaries</strong>, who then pay tax at their individual rates. This flexibility is the primary tax advantage &mdash; income can be directed to family members in lower tax brackets.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><strong className="text-gray-200">Flexible distribution:</strong> Trustee decides how to distribute income among beneficiaries each year</li>
                <li><strong className="text-gray-200">Beneficiary tax rates:</strong> Each beneficiary pays tax at their own marginal rate on distributions received</li>
                <li><strong className="text-gray-200">Minor beneficiaries:</strong> Only $416 in unearned income is tax-free for minors &mdash; anything above is taxed at the highest marginal rate</li>
                <li><strong className="text-gray-200">Undistributed income:</strong> If income is not distributed, the trustee pays tax at the top rate (45% + 2% ML)</li>
                <li><strong className="text-gray-200">ATO scrutiny:</strong> The ATO monitors trust distributions closely &mdash; arrangements must be genuine and commercially reasonable</li>
                <li><strong className="text-gray-200">Complex compliance:</strong> Annual trust return, distribution resolutions, and trustee meetings required</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 5: Choosing the Right Structure for Your Freelance Business */}
        <section id="choosing-right-structure">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold">5</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Choosing the Right Structure for Your Freelance Business</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Choosing a business structure is not about picking the &quot;best&quot; one &mdash; it is about picking the <strong className="text-white">right one for your current situation</strong>. Here is a decision framework based on the most common freelancer scenarios.
            </p>

            <h3 className="text-lg font-semibold text-white mt-6">Decision Framework</h3>

            {/* Start with Sole Trader */}
            <div className="rounded-xl bg-gray-800/50 border border-emerald-500/20 p-6 mt-4">
              <h4 className="text-emerald-400 font-semibold mb-3">Start with Sole Trader if:</h4>
              <div className="grid sm:grid-cols-2 gap-3">
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Income is under $120,000 per year
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Working solo with no employees
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Low-risk services (digital, consulting)
                  </li>
                </ul>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Want simplicity and minimal compliance
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Just starting out and testing your business idea
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Want to offset business losses against other income
                  </li>
                </ul>
              </div>
            </div>

            {/* Move to Pty Ltd */}
            <div className="rounded-xl bg-gray-800/50 border border-violet-500/20 p-6">
              <h4 className="text-violet-400 font-semibold mb-3">Move to Pty Ltd if:</h4>
              <div className="grid sm:grid-cols-2 gap-3">
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-violet-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Income consistently exceeds $120K&ndash;$150K
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-violet-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Hiring employees or contractors
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-violet-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Want liability protection for personal assets
                  </li>
                </ul>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-violet-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Clients require incorporation
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-violet-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Planning for growth, investment, or sale
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-violet-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Want to retain profits at a lower tax rate
                  </li>
                </ul>
              </div>
            </div>

            {/* Consider Trust */}
            <div className="rounded-xl bg-gray-800/50 border border-purple-500/20 p-6">
              <h4 className="text-purple-400 font-semibold mb-3">Consider a Trust if:</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Income consistently exceeds $200,000 and you have family members who could receive distributions
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Tax planning is a priority and you are working with a qualified accountant
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Asset protection and intergenerational wealth transfer are important considerations
                </li>
              </ul>
            </div>

            {/* Consider Partnership */}
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
              <h4 className="text-gray-300 font-semibold mb-3">Consider a Partnership only if:</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Genuine 50/50 (or agreed) collaboration with another person
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Shared resources, risk, and responsibilities with a written partnership agreement
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  You understand and accept joint and several liability (where each partner is liable for all debts)
                </li>
              </ul>
            </div>

            <div className="rounded-xl bg-violet-500/5 border border-violet-500/20 p-5 mt-6">
              <p className="text-violet-400 font-medium mb-2">Key Advice</p>
              <p className="text-gray-400 text-sm">
                <strong className="text-gray-200">Always consult an accountant before restructuring.</strong> The tax benefits must outweigh the compliance costs. A Pty Ltd company adds $2,000&ndash;$5,000 per year in accounting fees. If you are earning $90K, the tax savings from a company structure are minimal and may be entirely consumed by the additional compliance costs. The breakeven point is typically around $120K&ndash;$150K, but it varies based on your deductions, personal circumstances, and how much profit you want to retain in the business.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: Managing Business Structure with InvoiceFlow */}
        <section id="invoiceflow-structure">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold">6</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Managing Business Structure with InvoiceFlow</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              InvoiceFlow works seamlessly with <strong className="text-white">any Australian business structure</strong> &mdash; whether you are a sole trader with an ABN, a Pty Ltd company with an ACN, a partnership, or a trust. Here is how it supports each.
            </p>

            <div className="space-y-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">ABN and ACN Support</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Invoice under your sole trader ABN or your company ACN &mdash; InvoiceFlow displays the correct business identifier on every invoice. When you transition from sole trader to Pty Ltd, simply update your business details and all future invoices reflect your new structure. <strong className="text-gray-200">Your historical invoices remain under the original entity</strong> for proper record-keeping.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18v-.008zm-12 0h.008v.008H6v-.008z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Automatic GST Handling</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Regardless of your structure, GST registration rules are the same: mandatory when turnover exceeds $75K. InvoiceFlow <strong className="text-gray-200">automatically calculates and displays GST on every invoice</strong>, generates BAS-ready reports for your quarterly lodgement, and tracks your GST collected vs GST paid for accurate input tax credits. Works identically for sole traders, companies, partnerships, and trusts.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Multi-Entity Support</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  If you run multiple business structures (e.g., a sole trader ABN for personal consulting and a Pty Ltd for your product business), InvoiceFlow supports <strong className="text-gray-200">multiple entities under one account</strong>. Switch between entities with one click, maintain separate invoice numbering, separate reporting, and separate client lists. Each entity&apos;s data stays cleanly separated for tax time.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Separate Reporting for Company vs Personal</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  When you operate as a Pty Ltd, you need separate financial reports for the company tax return and your personal return. InvoiceFlow generates <strong className="text-gray-200">company-level income and expense reports</strong> that your accountant can use directly when preparing the company tax return, annual ASIC review, and BAS lodgement. No more manually separating personal and company transactions.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">BAS-Ready Data for Any Structure</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Whether you lodge BAS as a sole trader, company, partnership, or trust, the GST reporting requirements are the same. InvoiceFlow provides <strong className="text-gray-200">BAS-ready data</strong> including GST collected on sales (1A), GST paid on purchases (1B), total sales (G1), and export sales (G2). Export your BAS data directly to your accountant or import it into your accounting software with one click.
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-violet-500/5 border border-violet-500/20 p-5 mt-6">
              <p className="text-violet-400 font-medium mb-2">Transitioning Structures?</p>
              <p className="text-gray-400 text-sm">
                When you move from sole trader to Pty Ltd, InvoiceFlow makes the transition seamless. <strong className="text-gray-200">Set a transition date, add your new company details, and all future invoices automatically use the new entity.</strong> Your historical data under the sole trader ABN is preserved for tax records. Many freelancers run both structures in parallel during the transition period &mdash; InvoiceFlow handles this with multi-entity support.
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
        <p className="text-gray-400 text-center mb-8">In-depth guides on tax, registration, and compliance for freelancers.</p>
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
            Invoice Professionally. Any Business Structure.
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            InvoiceFlow works with sole traders, companies, partnerships, and trusts &mdash; with automatic GST handling, multi-entity support, and BAS-ready reporting for any Australian business structure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button>Start Free &mdash; No Card Required</Button>
            </Link>
            <Link href="/tools/freelance-tax-estimator">
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
