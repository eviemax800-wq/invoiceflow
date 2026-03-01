import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Marginal Tax Rate: Australian Tax Brackets Explained for Freelancers (2025-26) — InvoiceFlow',
  description:
    'What is the marginal tax rate in Australia? Learn ATO 2025-26 tax brackets, the difference between marginal and average tax rates, how progressive tax affects freelancers, and strategies to manage your tax rate. Updated for Stage 3 tax cuts.',
  keywords: [
    'marginal tax rate australia 2025',
    'marginal vs average tax rate',
    'ATO tax brackets 2025-26',
    'income tax rate freelancer australia',
    'progressive tax system australia',
    'tax brackets sole trader',
    'effective tax rate calculator',
    'stage 3 tax cuts 2025',
  ],
  alternates: { canonical: '/glossary/marginal-tax-rate' },
  openGraph: {
    title: 'Marginal Tax Rate: Australian Tax Brackets Explained for Freelancers (2025-26) — InvoiceFlow',
    description:
      'Everything Australian freelancers need to know about marginal tax rates: 2025-26 brackets, marginal vs effective rate, pricing decisions, and strategies to legally reduce your tax rate.',
    url: 'https://invoiceflow-teal.vercel.app/glossary/marginal-tax-rate',
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
    { '@type': 'ListItem', position: 3, name: 'Marginal Tax Rate', item: `${BASE_URL}/glossary/marginal-tax-rate` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the marginal tax rate in Australia for 2025-26?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Australia uses a progressive tax system with five marginal tax brackets for 2025-26 (after Stage 3 tax cuts): 0% on income up to $18,200 (tax-free threshold), 16% from $18,201 to $45,000, 30% from $45,001 to $135,000, 37% from $135,001 to $190,000, and 45% on income above $190,000. On top of these rates, all taxpayers pay a 2% Medicare levy on their total taxable income. The marginal rate is the rate you pay on your next dollar of income — not the rate applied to all your income.',
      },
    },
    {
      '@type': 'Question',
      name: 'What\'s the difference between marginal and average tax rate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Your marginal tax rate is the rate of tax on your last (or next) dollar of income — the highest bracket you fall into. Your average (effective) tax rate is your total tax divided by your total income. Because Australia uses progressive brackets, your average rate is always lower than your marginal rate. For example, on $100,000 taxable income, your marginal rate is 30% (plus 2% Medicare = 32%) but your average rate is only about 24.8%. Understanding the difference is critical for pricing decisions, because the tax on additional income is at the marginal rate, not the average rate.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does the marginal tax rate affect freelancers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The marginal tax rate directly affects a freelancer\'s after-tax hourly rate and pricing decisions. When you take on additional work, the income from that work is taxed at your marginal rate — not your average rate. For a freelancer in the $45,001-$135,000 bracket, every extra dollar earned keeps only 68 cents after income tax and Medicare levy. This means your after-tax hourly rate on additional projects is lower than you might expect if you only consider your average tax rate. Understanding your marginal rate helps you set minimum rates for additional work, decide whether to take on extra projects, and plan the timing of invoices across financial years.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do freelancers pay more tax than employees?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Freelancers pay the same marginal tax rates as employees. The difference is in how tax is collected and what deductions are available. Employees have tax withheld from each payslip automatically, while freelancers receive gross income and must manage tax payments themselves through quarterly PAYG instalments. However, freelancers typically have access to more deductions — home office costs (67c per hour), vehicle expenses (85c per kilometre), equipment, software, insurance, and professional development. With good deduction management, freelancers can achieve a lower effective tax rate than employees on the same gross income. The trade-off is more administrative responsibility and cash flow planning.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can freelancers reduce their marginal tax rate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Freelancers cannot change the ATO tax brackets, but they can reduce their taxable income to stay in a lower bracket or reduce the amount taxed at higher rates. Key strategies include: maximising deductions (home office, vehicle, equipment, insurance), making concessional super contributions (up to $30,000 per year, taxed at 15% instead of your marginal rate), prepaying expenses before June 30 to bring deductions forward, timing income across financial years, income splitting through a trust or partnership structure, and incorporating as a Pty Ltd company once income exceeds $100,000 (company tax rate is 25% versus 30-45% personal). Each strategy has trade-offs, and a tax accountant can help determine the best mix for your situation.',
      },
    },
  ],
};

const tocItems = [
  { id: 'what-is-marginal-tax-rate', label: '1. What Is the Marginal Tax Rate?' },
  { id: 'ato-tax-brackets-2025-26', label: '2. ATO Tax Brackets 2025-26' },
  { id: 'marginal-vs-average', label: '3. Marginal vs Average (Effective) Tax Rate' },
  { id: 'freelance-decisions', label: '4. Impact on Freelance Decisions' },
  { id: 'strategies-to-manage', label: '5. Strategies to Manage Your Tax Rate' },
  { id: 'how-invoiceflow-helps', label: '6. How InvoiceFlow Helps' },
];

const relatedTools = [
  {
    href: '/tools/tax-estimator',
    name: 'Tax Estimator',
    description: 'Estimate your income tax, Medicare levy, and take-home pay across all ATO brackets.',
    icon: (
      <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18v-.008zm-12 0h.008v.008H6v-.008z" />
      </svg>
    ),
  },
  {
    href: '/tools/rate-calculator',
    name: 'Rate Calculator',
    description: 'Calculate your ideal freelance hourly rate factoring in marginal tax, super, and expenses.',
    icon: (
      <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
      </svg>
    ),
  },
  {
    href: '/tools/super-calculator',
    name: 'Super Calculator',
    description: 'See how concessional super contributions reduce your marginal tax and build retirement savings.',
    icon: (
      <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    href: '/tools/gst-calculator',
    name: 'GST Calculator',
    description: 'Calculate GST on your invoices and understand how it interacts with income tax brackets.',
    icon: (
      <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185zM9.75 9h.008v.008H9.75V9zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 4.5h.008v.008h-.008V13.5zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
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
    href: '/guides/superannuation-for-freelancers',
    name: 'Superannuation for Freelancers',
    description: 'How concessional super contributions reduce your marginal tax rate and build long-term wealth.',
  },
  {
    href: '/guides/eofy-guide',
    name: 'EOFY Guide for Freelancers',
    description: 'End of financial year checklist, lodgement deadlines, and last-minute tax planning strategies.',
  },
];

export default function MarginalTaxRateGlossaryPage() {
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
            <span className="text-white">Marginal Tax Rate</span>
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
            Marginal Tax Rate:{' '}
            <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
              Australian Tax Brackets Explained for Freelancers
            </span>
          </h1>

          {/* Summary */}
          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            Your marginal tax rate is the rate you pay on your <em>next</em> dollar of income &mdash; not all your income. Understanding this distinction is critical for pricing, tax planning, and every financial decision you make as a freelancer. This guide breaks down the 2025-26 ATO brackets, shows the difference between marginal and effective rates, and gives you actionable strategies to keep more of what you earn.
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
              <span>2025-26 Rates</span>
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
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 text-xs font-bold">$18.2K</span>
              <div>
                <p className="text-white font-medium text-sm">Tax-Free Threshold</p>
                <p className="text-gray-400 text-sm">First $18,200 of income is completely tax-free for Australian residents</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 text-xs font-bold">30%</span>
              <div>
                <p className="text-white font-medium text-sm">Most Common Freelancer Bracket</p>
                <p className="text-gray-400 text-sm">$45,001&ndash;$135,000 bracket &mdash; 30 cents on each dollar over $45,000</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 text-xs font-bold">2%</span>
              <div>
                <p className="text-white font-medium text-sm">Medicare Levy</p>
                <p className="text-gray-400 text-sm">Flat 2% on your total taxable income, on top of income tax</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 text-xs font-bold">$51.6K</span>
              <div>
                <p className="text-white font-medium text-sm">Tax on $190K Income</p>
                <p className="text-gray-400 text-sm">$51,638 income tax on $190,000 &mdash; effective rate of 27.2%</p>
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

        {/* Section 1: What Is the Marginal Tax Rate? */}
        <section id="what-is-marginal-tax-rate">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold">1</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">What Is the Marginal Tax Rate?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Your marginal tax rate is the <strong className="text-white">rate of tax you pay on your next dollar of income</strong>. It is determined by the highest tax bracket your income falls into. In Australia&apos;s progressive tax system, different portions of your income are taxed at different rates &mdash; and the marginal rate is simply the rate that applies to the top slice.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Australia uses a <strong className="text-white">progressive (or graduated) tax system</strong>. This means the tax rate increases as your income increases, but the higher rate only applies to the income within that bracket &mdash; not to all of your income. The first $18,200 is always tax-free. The next portion is taxed at 16%, the next at 30%, and so on up to 45% for income above $190,000.
            </p>
            <p className="text-gray-300 leading-relaxed">
              This is fundamentally different from a flat tax, where everyone pays the same percentage regardless of income. The progressive system is designed so that higher earners contribute a larger share of their income in tax, while lower earners keep a greater proportion.
            </p>

            <div className="rounded-xl bg-red-500/5 border border-red-500/20 p-5 mt-6">
              <p className="text-red-400 font-medium mb-2">Common Misconception</p>
              <p className="text-gray-400 text-sm">
                Many people believe that if they earn $46,000, they pay 30% on <strong className="text-gray-200">all</strong> $46,000. <strong className="text-red-400">This is wrong.</strong> You pay 0% on the first $18,200, 16% on the next $26,800 (from $18,201 to $45,000), and 30% only on the last $1,000 (from $45,001 to $46,000). Your total tax on $46,000 is $4,588 &mdash; an effective rate of just 9.97%, not 30%. Understanding this distinction is essential for every financial decision you make.
              </p>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8 mb-3">Why &quot;Marginal&quot; Matters for Freelancers</h3>
            <p className="text-gray-300 leading-relaxed">
              As a freelancer, every new project, every extra hour billed, and every additional invoice adds income at the <strong className="text-white">top of your income stack</strong>. That additional income is taxed at your marginal rate, not your average rate. If you are already in the 30% bracket and take on a $10,000 project, you keep $6,800 after tax (30% income tax + 2% Medicare). Knowing your marginal rate helps you set minimum rates for additional work, decide whether to take on extra projects near the end of the financial year, and plan the timing of large invoices.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-amber-500/20 p-5">
                <h4 className="text-amber-400 font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
                  </svg>
                  Marginal Rate
                </h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>Tax on your <strong className="text-gray-200">next</strong> dollar earned</li>
                  <li>Highest bracket your income reaches</li>
                  <li>Determines the tax on additional work</li>
                  <li>Used for pricing and project decisions</li>
                  <li>Relevant for tax planning strategies</li>
                </ul>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-orange-500/20 p-5">
                <h4 className="text-orange-400 font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                  </svg>
                  Average (Effective) Rate
                </h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>Total tax divided by total income</li>
                  <li>Blended rate across all brackets</li>
                  <li>Always lower than your marginal rate</li>
                  <li>Shows your overall tax burden</li>
                  <li>Useful for annual budgeting</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: ATO Tax Brackets 2025-26 */}
        <section id="ato-tax-brackets-2025-26">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold">2</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">ATO Tax Brackets 2025-26</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              The 2025-26 financial year uses the <strong className="text-white">Stage 3 tax cut brackets</strong>, which took effect from 1 July 2024. These replaced the previous 19%/32.5%/37%/45% structure with lower rates and wider brackets, reducing the tax burden for most Australians. Here are the current marginal rates for Australian residents.
            </p>

            {/* Tax Brackets Table */}
            <div className="rounded-2xl border border-gray-700/50 overflow-hidden mt-6">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-800/80">
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Taxable Income</th>
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Marginal Rate</th>
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4 hidden sm:table-cell">Tax on This Income</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700/50">
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">$0 &ndash; $18,200</td>
                    <td className="px-6 py-4 text-amber-400 font-medium">0%</td>
                    <td className="px-6 py-4 text-gray-400 text-sm hidden sm:table-cell">Nil</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">$18,201 &ndash; $45,000</td>
                    <td className="px-6 py-4 text-amber-400 font-medium">16%</td>
                    <td className="px-6 py-4 text-gray-400 text-sm hidden sm:table-cell">$0 + 16c for each $1 over $18,200</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">$45,001 &ndash; $135,000</td>
                    <td className="px-6 py-4 text-amber-400 font-medium">30%</td>
                    <td className="px-6 py-4 text-gray-400 text-sm hidden sm:table-cell">$4,288 + 30c for each $1 over $45,000</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">$135,001 &ndash; $190,000</td>
                    <td className="px-6 py-4 text-amber-400 font-medium">37%</td>
                    <td className="px-6 py-4 text-gray-400 text-sm hidden sm:table-cell">$31,288 + 37c for each $1 over $135,000</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">$190,001+</td>
                    <td className="px-6 py-4 text-amber-400 font-medium">45%</td>
                    <td className="px-6 py-4 text-gray-400 text-sm hidden sm:table-cell">$51,638 + 45c for each $1 over $190,000</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="rounded-xl bg-amber-500/5 border border-amber-500/20 p-5 mt-6">
              <p className="text-amber-400 font-medium mb-2">Plus Medicare Levy</p>
              <p className="text-gray-400 text-sm">
                On top of these income tax rates, all Australian residents pay a <strong className="text-gray-200">2% Medicare levy</strong> on their total taxable income. This means your true marginal rate in the 30% bracket is actually <strong className="text-gray-200">32%</strong> (30% income tax + 2% Medicare). High earners without private health insurance may also face the <strong className="text-gray-200">Medicare Levy Surcharge (MLS)</strong> of 1&ndash;1.5%, bringing the effective marginal rate as high as 48.5% above $190,000.
              </p>
            </div>

            {/* Worked Example: $60K */}
            <h3 className="text-lg font-semibold text-white mt-8 mb-3">Worked Example: $60,000 Taxable Income</h3>
            <div className="rounded-2xl border border-amber-500/20 bg-gradient-to-br from-amber-900/10 to-orange-900/10 p-6">
              <div className="space-y-3">
                <div className="flex items-start gap-3 text-sm">
                  <span className="flex-shrink-0 w-6 h-6 rounded bg-gray-700/50 flex items-center justify-center text-amber-400 font-bold text-xs">1</span>
                  <div className="text-gray-400">
                    <span className="text-gray-300">$0 &ndash; $18,200:</span> Nil &mdash; <span className="text-amber-400 font-medium">$0</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <span className="flex-shrink-0 w-6 h-6 rounded bg-gray-700/50 flex items-center justify-center text-amber-400 font-bold text-xs">2</span>
                  <div className="text-gray-400">
                    <span className="text-gray-300">$18,201 &ndash; $45,000:</span> ($45,000 &minus; $18,200) &times; 16% = $26,800 &times; 0.16 = <span className="text-amber-400 font-medium">$4,288</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <span className="flex-shrink-0 w-6 h-6 rounded bg-gray-700/50 flex items-center justify-center text-amber-400 font-bold text-xs">3</span>
                  <div className="text-gray-400">
                    <span className="text-gray-300">$45,001 &ndash; $60,000:</span> ($60,000 &minus; $45,000) &times; 30% = $15,000 &times; 0.30 = <span className="text-amber-400 font-medium">$4,500</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-amber-500/20">
                <div className="grid sm:grid-cols-3 gap-4">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Income Tax</p>
                    <p className="text-white font-bold text-lg">$8,788</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">+ Medicare Levy (2%)</p>
                    <p className="text-white font-bold text-lg">$1,200</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Total Tax</p>
                    <p className="text-amber-400 font-bold text-lg">$9,988</p>
                  </div>
                </div>
                <p className="text-sm text-gray-400 mt-3">
                  <strong className="text-white">Marginal rate: 32%</strong> (30% + 2% Medicare) &mdash; <strong className="text-white">Effective rate: 16.6%</strong> &mdash; Take-home: $50,012
                </p>
              </div>
            </div>

            {/* Worked Example: $100K */}
            <h3 className="text-lg font-semibold text-white mt-8 mb-3">Worked Example: $100,000 Taxable Income</h3>
            <div className="rounded-2xl border border-amber-500/20 bg-gradient-to-br from-amber-900/10 to-orange-900/10 p-6">
              <div className="space-y-3">
                <div className="flex items-start gap-3 text-sm">
                  <span className="flex-shrink-0 w-6 h-6 rounded bg-gray-700/50 flex items-center justify-center text-amber-400 font-bold text-xs">1</span>
                  <div className="text-gray-400">
                    <span className="text-gray-300">$0 &ndash; $18,200:</span> Nil &mdash; <span className="text-amber-400 font-medium">$0</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <span className="flex-shrink-0 w-6 h-6 rounded bg-gray-700/50 flex items-center justify-center text-amber-400 font-bold text-xs">2</span>
                  <div className="text-gray-400">
                    <span className="text-gray-300">$18,201 &ndash; $45,000:</span> $26,800 &times; 16% = <span className="text-amber-400 font-medium">$4,288</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <span className="flex-shrink-0 w-6 h-6 rounded bg-gray-700/50 flex items-center justify-center text-amber-400 font-bold text-xs">3</span>
                  <div className="text-gray-400">
                    <span className="text-gray-300">$45,001 &ndash; $100,000:</span> $55,000 &times; 30% = <span className="text-amber-400 font-medium">$16,500</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-amber-500/20">
                <div className="grid sm:grid-cols-3 gap-4">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Income Tax</p>
                    <p className="text-white font-bold text-lg">$20,788</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">+ Medicare Levy (2%)</p>
                    <p className="text-white font-bold text-lg">$2,000</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Total Tax</p>
                    <p className="text-amber-400 font-bold text-lg">$22,788</p>
                  </div>
                </div>
                <p className="text-sm text-gray-400 mt-3">
                  <strong className="text-white">Marginal rate: 32%</strong> (30% + 2% Medicare) &mdash; <strong className="text-white">Effective rate: 22.8%</strong> &mdash; Take-home: $77,212
                </p>
              </div>
            </div>

            {/* Worked Example: $150K */}
            <h3 className="text-lg font-semibold text-white mt-8 mb-3">Worked Example: $150,000 Taxable Income</h3>
            <div className="rounded-2xl border border-amber-500/20 bg-gradient-to-br from-amber-900/10 to-orange-900/10 p-6">
              <div className="space-y-3">
                <div className="flex items-start gap-3 text-sm">
                  <span className="flex-shrink-0 w-6 h-6 rounded bg-gray-700/50 flex items-center justify-center text-amber-400 font-bold text-xs">1</span>
                  <div className="text-gray-400">
                    <span className="text-gray-300">$0 &ndash; $18,200:</span> Nil &mdash; <span className="text-amber-400 font-medium">$0</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <span className="flex-shrink-0 w-6 h-6 rounded bg-gray-700/50 flex items-center justify-center text-amber-400 font-bold text-xs">2</span>
                  <div className="text-gray-400">
                    <span className="text-gray-300">$18,201 &ndash; $45,000:</span> $26,800 &times; 16% = <span className="text-amber-400 font-medium">$4,288</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <span className="flex-shrink-0 w-6 h-6 rounded bg-gray-700/50 flex items-center justify-center text-amber-400 font-bold text-xs">3</span>
                  <div className="text-gray-400">
                    <span className="text-gray-300">$45,001 &ndash; $135,000:</span> $90,000 &times; 30% = <span className="text-amber-400 font-medium">$27,000</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <span className="flex-shrink-0 w-6 h-6 rounded bg-gray-700/50 flex items-center justify-center text-amber-400 font-bold text-xs">4</span>
                  <div className="text-gray-400">
                    <span className="text-gray-300">$135,001 &ndash; $150,000:</span> $15,000 &times; 37% = <span className="text-amber-400 font-medium">$5,550</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-amber-500/20">
                <div className="grid sm:grid-cols-3 gap-4">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Income Tax</p>
                    <p className="text-white font-bold text-lg">$36,838</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">+ Medicare Levy (2%)</p>
                    <p className="text-white font-bold text-lg">$3,000</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Total Tax</p>
                    <p className="text-amber-400 font-bold text-lg">$39,838</p>
                  </div>
                </div>
                <p className="text-sm text-gray-400 mt-3">
                  <strong className="text-white">Marginal rate: 39%</strong> (37% + 2% Medicare) &mdash; <strong className="text-white">Effective rate: 26.6%</strong> &mdash; Take-home: $110,162
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Marginal vs Average (Effective) Tax Rate */}
        <section id="marginal-vs-average">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold">3</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Marginal vs Average (Effective) Tax Rate</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              The <strong className="text-white">marginal tax rate</strong> and the <strong className="text-white">average (effective) tax rate</strong> are two completely different numbers, and confusing them leads to bad financial decisions. Your marginal rate tells you what happens to the <em>next</em> dollar. Your average rate tells you the overall percentage of your total income that goes to tax.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-amber-500/20 p-5">
                <h4 className="text-amber-400 font-semibold mb-3">Marginal Rate</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  The rate on your <strong className="text-gray-200">highest dollar of income</strong>. For $100,000 taxable income, your marginal rate is 30% (income tax) + 2% (Medicare) = <strong className="text-gray-200">32%</strong>. This is the rate that matters when deciding whether to take on additional work, because every extra dollar earned is taxed at this rate.
                </p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-orange-500/20 p-5">
                <h4 className="text-orange-400 font-semibold mb-3">Average (Effective) Rate</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Your <strong className="text-gray-200">total tax divided by total income</strong>. For $100,000 taxable income, total tax is $22,788 (including Medicare), so the effective rate is $22,788 &divide; $100,000 = <strong className="text-gray-200">22.8%</strong>. This is useful for understanding your overall tax burden and annual budgeting, but it does not tell you what happens with additional income.
                </p>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8 mb-3">Why This Matters for Pricing</h3>
            <p className="text-gray-300 leading-relaxed">
              Imagine you charge $120 per hour and you are already earning $100,000 for the year. A new client offers you a project worth 40 hours. If you calculate your after-tax rate using your <em>average</em> rate (22.8%), you might think you keep $92.64 per hour. But the reality is that all 40 hours of additional income is taxed at your <strong className="text-white">marginal rate of 32%</strong>, leaving you just $81.60 per hour. That is a difference of $441.60 over the project &mdash; meaningful money when you are making business decisions.
            </p>

            {/* Comparison Table */}
            <div className="rounded-2xl border border-gray-700/50 overflow-hidden mt-6">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-800/80">
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Taxable Income</th>
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Income Tax</th>
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Total Tax (incl. ML)</th>
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4 hidden sm:table-cell">Effective Rate</th>
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4 hidden sm:table-cell">Marginal Rate</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700/50">
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">$40,000</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">$3,488</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">$4,288</td>
                    <td className="px-6 py-4 text-amber-400 font-medium hidden sm:table-cell">10.7%</td>
                    <td className="px-6 py-4 text-orange-400 font-medium hidden sm:table-cell">18%</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">$70,000</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">$11,788</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">$13,188</td>
                    <td className="px-6 py-4 text-amber-400 font-medium hidden sm:table-cell">18.8%</td>
                    <td className="px-6 py-4 text-orange-400 font-medium hidden sm:table-cell">32%</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">$100,000</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">$20,788</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">$22,788</td>
                    <td className="px-6 py-4 text-amber-400 font-medium hidden sm:table-cell">22.8%</td>
                    <td className="px-6 py-4 text-orange-400 font-medium hidden sm:table-cell">32%</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">$150,000</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">$36,838</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">$39,838</td>
                    <td className="px-6 py-4 text-amber-400 font-medium hidden sm:table-cell">26.6%</td>
                    <td className="px-6 py-4 text-orange-400 font-medium hidden sm:table-cell">39%</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">$200,000</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">$56,138</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">$60,138</td>
                    <td className="px-6 py-4 text-amber-400 font-medium hidden sm:table-cell">30.1%</td>
                    <td className="px-6 py-4 text-orange-400 font-medium hidden sm:table-cell">47%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="rounded-xl bg-amber-500/5 border border-amber-500/20 p-5 mt-6">
              <p className="text-amber-400 font-medium mb-2">The Gap Widens at Higher Incomes</p>
              <p className="text-gray-400 text-sm">
                Notice how the gap between effective and marginal rate gets larger as income increases. At $40,000, the gap is just 7.3 percentage points. At $200,000, the gap is <strong className="text-gray-200">16.9 percentage points</strong>. This is the progressive tax system at work &mdash; high earners pay more on additional income, but their overall rate is cushioned by the lower brackets on their first dollars of income.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Impact on Freelance Decisions */}
        <section id="freelance-decisions">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold">4</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Impact on Freelance Decisions</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Your marginal tax rate directly shapes the financial outcome of almost every business decision you make as a freelancer. From pricing and project selection to timing income and choosing a business structure, understanding the rate on your next dollar is essential.
            </p>

            {/* Pricing Impact */}
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 mt-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                  <span className="text-amber-400 font-bold text-sm">$</span>
                </div>
                <h3 className="text-lg font-semibold text-white">Pricing: Your After-Tax Hourly Rate</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Your headline hourly rate is not what you take home. The table below shows what you actually keep per hour after income tax and Medicare at each marginal bracket. Use your marginal rate &mdash; not your average rate &mdash; to evaluate new project opportunities.
              </p>
              <div className="rounded-2xl border border-gray-700/50 overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-800/80">
                      <th className="text-left text-sm font-medium text-gray-300 px-4 py-3">Bracket</th>
                      <th className="text-left text-sm font-medium text-gray-300 px-4 py-3">Marginal Rate (incl. ML)</th>
                      <th className="text-left text-sm font-medium text-gray-300 px-4 py-3">$100/hr keeps</th>
                      <th className="text-left text-sm font-medium text-gray-300 px-4 py-3 hidden sm:table-cell">$150/hr keeps</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700/50">
                    <tr className="bg-gray-800/30">
                      <td className="px-4 py-3 text-white text-sm">$18,201&ndash;$45K</td>
                      <td className="px-4 py-3 text-amber-400 text-sm font-medium">18%</td>
                      <td className="px-4 py-3 text-gray-300 text-sm">$82.00</td>
                      <td className="px-4 py-3 text-gray-300 text-sm hidden sm:table-cell">$123.00</td>
                    </tr>
                    <tr className="bg-gray-800/30">
                      <td className="px-4 py-3 text-white text-sm">$45,001&ndash;$135K</td>
                      <td className="px-4 py-3 text-amber-400 text-sm font-medium">32%</td>
                      <td className="px-4 py-3 text-gray-300 text-sm">$68.00</td>
                      <td className="px-4 py-3 text-gray-300 text-sm hidden sm:table-cell">$102.00</td>
                    </tr>
                    <tr className="bg-gray-800/30">
                      <td className="px-4 py-3 text-white text-sm">$135,001&ndash;$190K</td>
                      <td className="px-4 py-3 text-amber-400 text-sm font-medium">39%</td>
                      <td className="px-4 py-3 text-gray-300 text-sm">$61.00</td>
                      <td className="px-4 py-3 text-gray-300 text-sm hidden sm:table-cell">$91.50</td>
                    </tr>
                    <tr className="bg-gray-800/30">
                      <td className="px-4 py-3 text-white text-sm">$190,001+</td>
                      <td className="px-4 py-3 text-amber-400 text-sm font-medium">47%</td>
                      <td className="px-4 py-3 text-gray-300 text-sm">$53.00</td>
                      <td className="px-4 py-3 text-gray-300 text-sm hidden sm:table-cell">$79.50</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Timing */}
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 mt-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                  <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white">Timing: Deferring or Accelerating Income</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Because Australia&apos;s financial year runs 1 July to 30 June, you have some control over <em>when</em> income is recognised. If you are approaching a bracket boundary near 30 June, timing matters. For example, if your income is at $130,000 in late June and you have a $20,000 invoice ready to send, consider whether to invoice now or wait until 1 July. Invoicing now means $5,000 of that $20,000 is taxed at 30% and $15,000 at 37%. Waiting until July means the entire $20,000 could be taxed at a lower bracket if next year&apos;s total income is lower. The ATO uses the <strong className="text-gray-200">cash basis</strong> for most sole traders &mdash; income is recognised when received, not when invoiced.
              </p>
            </div>

            {/* Super Contributions */}
            <div className="rounded-xl bg-gray-800/50 border border-amber-500/30 p-6 mt-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                  <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white">Super Contributions at Your Marginal Rate</h3>
                <span className="text-xs text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full">High Impact</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Concessional super contributions are taxed at just <strong className="text-gray-200">15% inside your fund</strong>, compared to your marginal rate outside super. The higher your marginal rate, the more you save. A freelancer in the 30% bracket saves 15 cents per dollar contributed (30% &minus; 15%). In the 37% bracket, you save 22 cents. In the 45% bracket, you save 30 cents. With a $30,000 concessional cap, a freelancer in the 37% bracket saves <strong className="text-gray-200">$6,600 in tax</strong> by maximising contributions.
              </p>
            </div>

            {/* Income Splitting & Business Structure */}
            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-amber-400 font-semibold mb-3">Spouse Income Splitting</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  If you operate through a <strong className="text-gray-200">family trust</strong>, you can distribute income to a lower-earning spouse. If you earn $160,000 and your spouse earns nothing, distributing $50,000 to your spouse means that $50,000 is taxed at their lower marginal rates (0% on first $18,200, then 16%) instead of your 37% rate. This can save thousands per year but requires proper trust setup and compliance with ATO rules. The Personal Services Income (PSI) rules may limit this for some freelancers.
                </p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-amber-400 font-semibold mb-3">Business Structure Thresholds</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Once your taxable income exceeds <strong className="text-gray-200">$100,000</strong>, consider incorporating as a Pty Ltd company. The company tax rate is <strong className="text-gray-200">25% for base rate entities</strong>, compared to your personal marginal rate of 30&ndash;37% (plus Medicare). You pay yourself a reasonable salary, leaving profits in the company at the lower rate. However, this adds compliance costs ($2,000&ndash;$5,000+ per year for company accounting and ASIC fees) and may not suit freelancers subject to PSI rules. Consult your accountant.
                </p>
              </div>
            </div>

            {/* Quarterly PAYG */}
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 mt-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                  <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white">Quarterly PAYG Planning</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Your PAYG instalment rate is based on last year&apos;s tax return. If your income is growing, your PAYG rate may be too low, leaving you with a large balance owing at tax time. If you have moved into a higher bracket, use the <strong className="text-gray-200">instalment rate method</strong> on your BAS and voluntarily increase your quarterly payments to match your current marginal rate. This prevents cash flow shocks and avoids the ATO&apos;s General Interest Charge on shortfalls exceeding 15% of your actual liability.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Strategies to Manage Your Tax Rate */}
        <section id="strategies-to-manage">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold">5</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Strategies to Manage Your Tax Rate</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              You cannot change the ATO&apos;s tax brackets, but you can legally reduce the amount of income taxed at higher rates. These six strategies are used by accountants every day and are entirely legitimate for Australian freelancers.
            </p>

            {/* Strategy 1 */}
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 mt-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                  <span className="text-amber-400 font-bold text-sm">1</span>
                </div>
                <h3 className="text-lg font-semibold text-white">Maximise Deductions</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Every dollar of deductions reduces your taxable income, effectively removing that dollar from your highest bracket. Key deductions for freelancers include:
              </p>
              <div className="grid sm:grid-cols-2 gap-3 mt-4">
                <div className="rounded-lg bg-gray-900/50 p-3 border border-gray-700/30">
                  <p className="text-amber-400 text-xs font-medium mb-1">Home Office</p>
                  <p className="text-white text-sm font-bold">67c per hour</p>
                  <p className="text-gray-500 text-xs">Fixed rate method &mdash; covers electricity, phone, internet, stationery</p>
                </div>
                <div className="rounded-lg bg-gray-900/50 p-3 border border-gray-700/30">
                  <p className="text-amber-400 text-xs font-medium mb-1">Vehicle</p>
                  <p className="text-white text-sm font-bold">85c per km</p>
                  <p className="text-gray-500 text-xs">Up to 5,000 km per year &mdash; covers all vehicle running costs</p>
                </div>
                <div className="rounded-lg bg-gray-900/50 p-3 border border-gray-700/30">
                  <p className="text-amber-400 text-xs font-medium mb-1">Equipment</p>
                  <p className="text-white text-sm font-bold">$20K instant write-off</p>
                  <p className="text-gray-500 text-xs">Laptops, monitors, cameras, desks &mdash; full deduction in year of purchase</p>
                </div>
                <div className="rounded-lg bg-gray-900/50 p-3 border border-gray-700/30">
                  <p className="text-amber-400 text-xs font-medium mb-1">Insurance &amp; Software</p>
                  <p className="text-white text-sm font-bold">100% deductible</p>
                  <p className="text-gray-500 text-xs">PI insurance, software subscriptions, accounting fees, memberships</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm mt-4">
                At the 30% marginal rate, $10,000 in deductions saves you <strong className="text-gray-200">$3,200</strong> in tax (including Medicare). At 37%, the same $10,000 saves <strong className="text-gray-200">$3,900</strong>. The higher your bracket, the more each deduction is worth.
              </p>
            </div>

            {/* Strategy 2 */}
            <div className="rounded-xl bg-gray-800/50 border border-amber-500/30 p-6 mt-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                  <span className="text-amber-400 font-bold text-sm">2</span>
                </div>
                <h3 className="text-lg font-semibold text-white">Concessional Super Contributions</h3>
                <span className="text-xs text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full">Most Effective</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Concessional (before-tax) super contributions are taxed at <strong className="text-gray-200">15% inside your fund</strong> instead of your marginal rate. You can contribute up to <strong className="text-gray-200">$30,000 per year</strong> and claim a full tax deduction. The tax saving equals your marginal rate minus 15%, multiplied by the contribution amount.
              </p>
              <div className="rounded-2xl border border-gray-700/50 overflow-hidden mt-4">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-800/80">
                      <th className="text-left text-sm font-medium text-gray-300 px-4 py-3">Your Bracket</th>
                      <th className="text-left text-sm font-medium text-gray-300 px-4 py-3">Saving per $1</th>
                      <th className="text-left text-sm font-medium text-gray-300 px-4 py-3">On $30K Contribution</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700/50">
                    <tr className="bg-gray-800/30">
                      <td className="px-4 py-3 text-white text-sm">30% + 2% ML = 32%</td>
                      <td className="px-4 py-3 text-amber-400 text-sm font-medium">17c</td>
                      <td className="px-4 py-3 text-gray-300 text-sm">$5,100</td>
                    </tr>
                    <tr className="bg-gray-800/30">
                      <td className="px-4 py-3 text-white text-sm">37% + 2% ML = 39%</td>
                      <td className="px-4 py-3 text-amber-400 text-sm font-medium">24c</td>
                      <td className="px-4 py-3 text-gray-300 text-sm">$7,200</td>
                    </tr>
                    <tr className="bg-gray-800/30">
                      <td className="px-4 py-3 text-white text-sm">45% + 2% ML = 47%</td>
                      <td className="px-4 py-3 text-amber-400 text-sm font-medium">32c</td>
                      <td className="px-4 py-3 text-gray-300 text-sm">$9,600</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-3 rounded-lg bg-amber-500/5 border border-amber-500/20 p-3">
                <p className="text-amber-400 text-xs font-medium">
                  If your super balance is under $500,000, you can carry forward unused concessional caps from the previous five years &mdash; potentially contributing well above $30,000 in a high-income year for an even larger deduction.
                </p>
              </div>
            </div>

            {/* Strategy 3 */}
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 mt-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                  <span className="text-amber-400 font-bold text-sm">3</span>
                </div>
                <h3 className="text-lg font-semibold text-white">Prepay Expenses Before June 30</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Small businesses can claim a deduction for <strong className="text-gray-200">expenses prepaid up to 12 months in advance</strong>, provided the service period ends before the next financial year. Before 30 June, consider prepaying your annual insurance premium, software subscriptions, professional memberships, and upcoming training courses. In a high-income year where you are pushing into a higher bracket, front-loading deductions pulls taxable income back into a lower bracket.
              </p>
            </div>

            {/* Strategy 4 */}
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 mt-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                  <span className="text-amber-400 font-bold text-sm">4</span>
                </div>
                <h3 className="text-lg font-semibold text-white">Income Splitting via Trust or Partnership</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Operating through a <strong className="text-gray-200">discretionary (family) trust</strong> allows you to distribute income to family members in lower tax brackets. If your spouse earns little or no income, distributing $40,000 to them means that income is taxed at 0% (first $18,200) and 16% (up to $45,000) instead of your 30&ndash;37% marginal rate. A partnership structure can achieve a similar result. However, the ATO&apos;s <strong className="text-gray-200">Personal Services Income (PSI)</strong> rules restrict this for freelancers whose income is primarily from their personal skills and effort &mdash; your accountant can advise whether your business passes the PSI tests.
              </p>
            </div>

            {/* Strategy 5 */}
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 mt-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                  <span className="text-amber-400 font-bold text-sm">5</span>
                </div>
                <h3 className="text-lg font-semibold text-white">Incorporate at $100K+ (25% Company Rate)</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                The <strong className="text-gray-200">base rate entity company tax rate is 25%</strong>, compared to personal marginal rates of 30&ndash;45% (plus Medicare). Once your freelance income consistently exceeds $100,000, incorporating as a Pty Ltd company can reduce the tax on profits retained in the business. You pay yourself a reasonable salary (taxed at personal rates) and leave additional profits in the company at 25%. The company can then pay dividends with franking credits when you need the money, or reinvest profits at the lower rate. Keep in mind: company structures cost $2,000&ndash;$5,000+ per year in compliance, ASIC fees, and separate tax returns. The PSI rules may also limit the benefit.
              </p>
            </div>

            {/* Strategy 6 */}
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 mt-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                  <span className="text-amber-400 font-bold text-sm">6</span>
                </div>
                <h3 className="text-lg font-semibold text-white">Private Health Insurance to Avoid MLS</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                If your income exceeds <strong className="text-gray-200">$93,000</strong> and you do not have private hospital cover, you pay the Medicare Levy Surcharge of 1&ndash;1.5% on <em>all</em> your taxable income. At $120,000, that is an extra $1,500 per year (Tier 2, 1.25%). A basic hospital policy typically costs $1,200&ndash;$1,800 before the government rebate reduces it further. In almost every case above $93,000, taking out private health insurance is <strong className="text-gray-200">cheaper than paying the surcharge</strong> &mdash; and you get actual hospital cover as a bonus.
              </p>
            </div>

            <div className="rounded-xl bg-amber-500/5 border border-amber-500/20 p-5 mt-6">
              <p className="text-amber-400 font-medium mb-2">The Compounding Effect</p>
              <p className="text-gray-400 text-sm">
                These strategies work best <strong className="text-gray-200">in combination</strong>. A freelancer earning $150,000 who maximises deductions ($15,000), contributes to super ($30,000), and prepays expenses ($5,000) reduces their taxable income to $100,000 &mdash; pulling $50,000 out of the 37% bracket entirely. That combination saves approximately <strong className="text-gray-200">$13,500 in tax</strong> compared to doing nothing. The key is planning early and implementing consistently, not scrambling in June.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: How InvoiceFlow Helps */}
        <section id="how-invoiceflow-helps">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold">6</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">How InvoiceFlow Helps</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              InvoiceFlow is built specifically for Australian freelancers who need to understand their tax position in real time &mdash; not just at tax return time. Here&apos;s how it helps you manage your marginal tax rate throughout the year.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-amber-500/20 p-5">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">Real-Time Bracket Tracking</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  See exactly which tax bracket you are in right now, how close you are to the next bracket boundary, and what your current marginal and effective rates are &mdash; updated automatically as you send invoices.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-amber-500/20 p-5">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">After-Tax Rate Calculator</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Input your hourly rate and see exactly what you keep after tax at your current marginal rate &mdash; not a generic estimate based on averages. Make informed pricing decisions for every new project.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-amber-500/20 p-5">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">EOFY Income Timing Alerts</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  As June 30 approaches, InvoiceFlow alerts you when your income is near a bracket boundary so you can make strategic decisions about invoice timing, deduction prepayment, and super contributions.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-amber-500/20 p-5">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">Deduction Tracking &amp; Tax Savings</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Log expenses as you go and see exactly how much tax each deduction saves you at your current marginal rate. No more guessing at tax time &mdash; know your deduction value in real dollars.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Email Capture */}
      <section className="max-w-4xl mx-auto px-4 pb-16">
        <EmailCapture />
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

      {/* Related Tools */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-white mb-2 text-center">Related Tools</h2>
        <p className="text-gray-400 text-center mb-8">Free calculators to help you understand and manage your marginal tax rate.</p>
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
        <p className="text-gray-400 text-center mb-8">In-depth guides on tax planning, super, and financial strategy for freelancers.</p>
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

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 pb-20 text-center">
        <div className="rounded-2xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20 p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Know Your Rate. Price With Confidence.
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            InvoiceFlow helps Australian freelancers track income in real time, see their current marginal bracket, and estimate tax accurately &mdash; so every pricing decision is backed by real numbers, not guesswork.
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
